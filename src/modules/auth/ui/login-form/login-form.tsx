import { View, Text, Alert } from "react-native";
import { Input } from "../../../../shared/ui/input";
import { ICONS } from "../../../../shared/ui/icons";
import { Button } from "../../../../shared/ui/button";
import { useForm, Controller } from "react-hook-form";
import { ILogin } from "../../types";
import { styles } from "./login-form.styles";
import { router } from "expo-router";
import { useUserContext } from "../../context/userContext";

export function LoginForm() {
    const { login } = useUserContext();
    const { handleSubmit, control } = useForm<ILogin>({
        defaultValues: { email: "", password: "" },
    });

    const onSubmit = async (data: { email: string; password: string }) => {
        const error = await login(data.email, data.password); 
        if (error) {
            Alert.alert("Ошибка", error); 
        } else {
            Alert.alert("Успех", "Вы успешно вошли в систему!");
            router.navigate("/profile"); 
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Please Sign in</Text>
            </View>
            <View style={styles.form}>
                <Controller
                    control={control}
                    name="email"
                    rules={{
                        required: {
                            value: true,
                            message: "Email is required",
                        },
                    }}
                    render={({ field, fieldState }) => {
                        return (
                            <Input
                                placeholder="Catogram@gmail.com"
                                iconLeft={<ICONS.UserIcon width={30} height={30} />}
                                onChange={field.onChange}
                                onChangeText={field.onChange}
                                value={field.value}
                                label="Email"
                                autoCorrect={false}
                                errMsg={fieldState.error?.message}
                            />
                        );
                    }}
                />
                <Controller
                    control={control}
                    name="password"
                    rules={{
                        required: {
                            value: true,
                            message: "Password is required",
                        },
                    }}
                    render={({ field, fieldState }) => {
                        return (
                            <Input.Password
                                placeholder="Password"
                                onChange={field.onChange}
                                onChangeText={field.onChange}
                                value={field.value}
                                label="Password"
                                autoCorrect={false}
                                errMsg={fieldState.error?.message}
                            />
                        );
                    }}
                />
            </View>
            <View style={styles.buttonBlock}>
                <Button label="Submit" onPress={handleSubmit(onSubmit)} />
            </View>
        </View>
    );
}