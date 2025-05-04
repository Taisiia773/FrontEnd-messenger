import { SafeAreaProvider } from "react-native-safe-area-context";
import { ReactNode } from "react";
import { UserContextProvider } from "../modules/auth/context/userContext";


export function Providers({children}: {children: ReactNode}) {
    return (
        <UserContextProvider>
            <SafeAreaProvider>
                {children}
            </SafeAreaProvider>
        </UserContextProvider>
    )
}