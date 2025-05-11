import { View, Text, Alert } from "react-native";
import { Input } from "../../../../shared/ui/input";
import { Button } from "../../../../shared/ui/button";
import { useForm, Controller } from "react-hook-form";
import { styles } from "./register-step-one.styles";
import { router } from "expo-router";
import { useState } from "react";
import { EmailVerificationScreen } from "../email-form";

type FormData = {
  // username: string;
  email: string;
  password: string;
  // confirmpassword: string;
};

type VerificationData = {
  code: string;
};

export function RegisterStepOne() {
  const [step, setStep] = useState<"register" | "verify">("register");
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  
  const { control: registerControl, handleSubmit: handleRegisterSubmit } = useForm<FormData>({
    defaultValues: {
      // username: "",
      email: "",
      password: "",
      // confirmpassword: "",
    },
  });

  const { control: verifyControl, handleSubmit: handleVerifySubmit } = useForm<VerificationData>({
    defaultValues: {
      code: "",
    },
  });

  const handleRegister = async (data: FormData) => {
    setIsLoading(true);
    try {
      // Сохраняем email для верификации
      setEmail(data.email);
      
      // Отправляем данные регистрации (без создания пользователя)
      const response = await fetch("http://172.20.10.7:5000/api/usernative/registration/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
      if (response.ok) {
        Alert.alert("Успех", "Код подтверждения отправлен на ваш email");
        setStep("verify");
      } else {
        Alert.alert("Ошибка", result.message || "Не удалось начать регистрацию");
      }
    } catch (error) {
      console.error("Registration error:", error);
      Alert.alert("Ошибка", "Не удалось отправить данные");
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerification = async (data: VerificationData) => {
    setIsLoading(true);
    try {
      // Отправляем код подтверждения
      const response = await fetch("http://172.20.10.7:5000/api/usernative/registration/complete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          code: data.code
        }),
      });

      const result = await response.json();
      
      if (response.ok) {
        Alert.alert("Успех", "Регистрация завершена!");
        router.navigate("/home");
      } else {
        Alert.alert("Ошибка", result.message || "Неверный код подтверждения");
      }
    } catch (error) {
      console.error("Verification error:", error);
      Alert.alert("Ошибка", "Не удалось подтвердить код");
    } finally {
      setIsLoading(false);
    }
  };

  // const resendCode = async () => {
  //   setIsLoading(true);
  //   try {
  //     const response = await fetch("http://172.20.10.7:5000/api/usernative/registration/resend", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ email }),
  //     });

  //     const result = await response.json();
      
  //     if (response.ok) {
  //       Alert.alert("Успех", "Новый код отправлен на ваш email");
  //     } else {
  //       Alert.alert("Ошибка", result.message || "Не удалось отправить код повторно");
  //     }
  //   } catch (error) {
  //     console.error("Resend error:", error);
  //     Alert.alert("Ошибка", "Не удалось отправить код повторно");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {step === "register" ? "Registration" : "Verify Email"}
        </Text>
      </View>

      {step === "register" ? (
        <View style={styles.form}>
          <Controller
            control={registerControl}
            name="email"
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            }}
            render={({ field, fieldState }) => (
              <Input
                placeholder="you@example.com"
                onChangeText={field.onChange}
                value={field.value}
                label="Електронна пошта"
                autoCorrect={false}
                errMsg={fieldState.error?.message}
                autoCapitalize="none"
                keyboardType="email-address"
              />
            )}
          />

          <Controller
            control={registerControl}
            name="password"
            rules={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters"
              }
            }}
            render={({ field, fieldState }) => (
              <Input.Password
                placeholder="Введи пароль"
                onChangeText={field.onChange}
                value={field.value}
                label="Пароль"
                autoCorrect={false}
                errMsg={fieldState.error?.message}
                autoCapitalize="none"
              />
            )}
          />

          {/* <Controller
            control={registerControl}
            name="confirmpassword"
            rules={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters"
              }
            }}
            render={({ field, fieldState }) => (
              <Input.Password
                placeholder="Повтори пароль"
                onChangeText={field.onChange}
                value={field.value}
                label="Підтверди пароль"
                autoCorrect={false}
                errMsg={fieldState.error?.message}
                autoCapitalize="none"
              />
            )}
          /> */}

          <View style={styles.buttonBlock}>
            <Button 
              label={isLoading ? "Processing..." : "Next"} 
              onPress={handleRegisterSubmit(handleRegister)} 
              disabled={isLoading}
            />
          </View>
        </View>
      ) : (
        <EmailVerificationScreen
          email={email}
          onSubmit={code => handleVerification({ code })}
          onBack={() => setStep("register")}
          isLoading={isLoading}/>
        // <View style={styles.form}>
        //   <Controller
        //     control={verifyControl}
        //     name="code"
        //     rules={{
        //       required: "Verification code is required",
        //       pattern: {
        //         value: /^\d{6}$/,
        //         message: "Code must be 6 digits"
        //       }
        //     }}
        //     render={({ field, fieldState }) => (
        //       <Input
        //         placeholder="123456"
        //         onChangeText={field.onChange}
        //         value={field.value}
        //         label="Verification Code"
        //         autoCorrect={false}
        //         errMsg={fieldState.error?.message}
        //         autoCapitalize="none"
        //         keyboardType="numeric"
        //       />
        //     )}
        //   />

        //   <View style={styles.buttonBlock}>
        //     <Button 
        //       label={isLoading ? "Verifying..." : "Verify"} 
        //       onPress={handleVerifySubmit(handleVerification)} 
        //       disabled={isLoading}
        //     />
        //   </View>
        //   {/* <View style={styles.buttonBlock}>
        //     <Button 
        //       label="Resend Code" 
        //       onPress={resendCode} 
        //       disabled={isLoading}
        //       style={{ marginTop: 10, backgroundColor: "#e0e0e0" }}            />
        //   </View> */}
        // </View>
      )}
    </View>
  );
}