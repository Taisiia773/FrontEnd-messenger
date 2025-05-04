import { View, Text, Alert } from "react-native";
import { Input } from "../../../../shared/ui/input";
import { ICONS } from "../../../../shared/ui/icons";
import { Button } from "../../../../shared/ui/button";
import { useForm, Controller } from "react-hook-form";
import { IRegister } from "../../types";
import { styles } from "./register-step-one.styles";
import { router, useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useUserContext } from "../../context/userContext";

export function RegisterStepOne() {
    const { register } = useUserContext();
    const { control, handleSubmit } = useForm({
        defaultValues: {
            username: "",
            email: "",
            password: ""
        },
    });

    const onSubmit = async (data: { username: string; email: string; password: string;}) => {
		// if (data.password !== data.confirmPassword) {
		// 	Alert.alert("Ошибка", "Пароли не совпадают");
		// 	return;
		// }
	
		const error = await register(data.username, data.email, data.password);
		console.log(data);
		if (error) {
			Alert.alert("Ошибка", error);
		} else {
			Alert.alert("Успех", "Вы успешно зарегистрировались!");
			router.navigate("/profile"); 
		}
	};
	

	return (
		<View style={styles.container}>
			<View style={styles.textContainer}>
				<Text style={styles.text}>Registration</Text>
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
								iconLeft={
									<ICONS.EmailIcon width={30} height={30} />
								}
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
					name="username"
					rules={{
						required: {
							value: true,
							message: "Username is required",
						},
					}}
					render={({ field, fieldState }) => {
						return (
							<Input
								placeholder="SuperCoolCat"
								iconLeft={
									<ICONS.UserIcon width={30} height={30} />
								}
								onChange={field.onChange}
								onChangeText={field.onChange}
								value={field.value}
								label="Username"
								autoCorrect={false}
								errMsg={fieldState.error?.message}
							/>
						);
					}}
				/>
				<Controller
					control={control}
					rules={{
						required: {
							value: true,
							message: "Password is required",
						},
					}}
					name="password"
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
				{/* <Controller
					control={control}
					rules={{
						required: {
							value: true,
							message: "Password is required",
						},
					}}
					name="confirmPassword"
					render={({ field, fieldState }) => {
						return (
							<Input.Password
								placeholder="Confirm password"
								onChange={field.onChange}
								onChangeText={field.onChange}
								value={field.value}
								label="Confirm password"
								autoCorrect={false}
								errMsg={fieldState.error?.message}
							/>
						);
					}}
				/> */}
			</View>
			<View style={styles.buttonBlock}>
				<Button label="Next" onPress={handleSubmit(onSubmit)} />
			</View>
		</View>
	);
}
