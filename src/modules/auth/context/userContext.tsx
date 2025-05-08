import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IUser {
    id: number;
    username: string;
    email: string;
}

interface IUserContext {
    user: IUser | null;
    login: (email: string, password: string) => Promise<string | void>;
    register: (
        username: string,
        email: string,
        password: string
    ) => Promise<string | void>;
    logout: () => Promise<void>;
}

const initialValue: IUserContext = {
    user: null,
    login: async () => {},
    register: async () => {},
    logout: async () => {},
};

const UserContext = createContext<IUserContext>(initialValue);

export function useUserContext() {
    return useContext(UserContext);
}

export function UserContextProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<IUser | null>(null);

    const getUser = async (token: string) => {
        try {
            const response = await fetch("http://localhost:5000/api/usernative/me", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const result = await response.json();
            if (result.status === "error") {
                console.log("Error:", result.message);
                return result.message;
            }
            setUser(result.data);
        } catch (error) {
            console.error("Fetch user error:", error);
            return "Unexpected error";
        }
    };

    const login = async (email: string, password: string): Promise<string | void> => {
        try {
            const response = await fetch("http://localhost:5000/api/usernative/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });
    
            const result = await response.json();
    
            if (result.status === "error") {
                console.error("Login error:", result.message); 
                return result.message;
            }
    
            await AsyncStorage.setItem("token", result.data);
            await getUser(result.data);
        } catch (error) {
            console.error("Unexpected login error:", error); 
            return "Unexpected error";
        }
    };

    const register = async (
        username: string,
        email: string,
        password: string
    ): Promise<string | void> => {
        try {
            const response = await fetch("http://localhost:5000/api/usernative/registration", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    email,
                    password
                }),
            });

            // const result = await response.json();

            // if (!response.ok) {
            //     console.error ("Registration error:", result.message);
            //     alert("Error: " + (result.message || "Something went wrong"));
            //     return;
            // }
            // // if (result.status === "error") {
            // //     console.error("Registration error:", result.message);
            // //     return result.message;
            // // }
            // console.log("Registration success:", result);
            // console.log("Token:", result.data);
            // await AsyncStorage.setItem("token", result.data);
            // await getUser(result.data);
            const result = await response.json();

            if (!response.ok || result.status === "error" || !result.token) {
                console.error("Registration error:", result.message);
                alert("Error: " + (result.message || "Something went wrong"));
                return;
            }

            console.log("Registration success:", result);
            console.log("Token:", result.token);
            await AsyncStorage.setItem("token", result.token);
            await getUser(result.token);
        } catch (error) {
            console.error("Unexpected registration error:", error);
            return "Unexpected error occurred";
        }
    };

    const logout = async () => {
        try {
            await AsyncStorage.removeItem("token"); 
            setUser(null); 
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    useEffect(() => {
        const restoreUser = async () => {
            try {
                const token = await AsyncStorage.getItem("token");
                if (token) {
                    await getUser(token);
                }
            } catch (error) {
                console.error("Error restoring user:", error); 
            }
        };
        restoreUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, login, register, logout }}>
            {children}
        </UserContext.Provider>
    );
}
