import React, { useRef } from "react";
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Button } from "../../../../shared/ui/button";
import { styles } from "./email-form.styles";

type VerificationData = {
  code: string;
};

type Props = {
  email: string;
  onSubmit: (code: string) => void;
  onBack: () => void;
  isLoading: boolean;
};

export function EmailVerificationScreen({ email, onSubmit, onBack, isLoading }: Props) {
  const { control, handleSubmit, setValue } = useForm<VerificationData>({
    defaultValues: { code: "" }
  });

  const inputs = useRef<Array<TextInput | null>>([]);

  const handleChange = (text: string, index: number) => {
    if (!/^\d?$/.test(text)) return;

    const currentCode = Array(6)
      .fill("")
      .map((_, i) => i === index ? text : control._formValues.code?.[i] || "")
      .join("");

    setValue("code", currentCode);

    if (text && index < 5) {
      inputs.current[index + 1]?.focus();
    }

    if (currentCode.length === 6) {
      handleSubmit(data => onSubmit(data.code))();
    }
  };

  const code = control._formValues.code || "";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Підтвердження пошти</Text>
      <Text style={styles.subtitle}>
        Ми надіслали 6-значний код на вашу пошту{"\n"}
        <Text style={styles.email}>{email}</Text>. Введіть його нижче, щоб підтвердити акаунт
      </Text>

      <View style={styles.codeContainer}>
        {Array(6).fill(0).map((_, index) => (
          <TextInput
            key={index}
            ref={ref => (inputs.current[index] = ref)}
            style={styles.input}
            maxLength={1}
            keyboardType="number-pad"
            value={code[index]}
            onChangeText={(text) => handleChange(text, index)}
            autoFocus={index === 0}
          />
        ))}
      </View>

      <View style={styles.buttonBlock}>
        <Button
          label={isLoading ? "Перевірка..." : "Підтвердити"}
          onPress={handleSubmit(data => onSubmit(data.code))}
          disabled={isLoading || code.length < 6}
        />
      </View>

      <TouchableOpacity onPress={onBack} style={styles.back}>
        <Text style={styles.backText}>Назад</Text>
      </TouchableOpacity>
    </View>
  );
}
