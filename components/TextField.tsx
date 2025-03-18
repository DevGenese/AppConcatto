import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TextField = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  multiline = false,
  error,
  helperText,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      {/* Label */}
      {label && <Text style={[styles.label, isFocused && styles.labelFocused]}>{label}</Text>}

      {/* Input */}
      <TextInput
        style={[
          styles.input,
          isFocused && styles.inputFocused,
          error && styles.inputError,
          multiline && styles.multilineInput,
        ]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      {/* Helper Text */}
      {helperText && (
        <Text style={[styles.helperText, error && styles.helperTextError]}>{helperText}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  labelFocused: {
    color: '#1976d2', // Cor do label quando o input está focado
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: '#333',
  },
  inputFocused: {
    borderColor: '#1976d2', // Cor da borda quando o input está focado
  },
  inputError: {
    borderColor: '#d32f2f', // Cor da borda quando há erro
  },
  multilineInput: {
    height: 100,
    textAlignVertical: 'top', // Alinha o texto ao topo para inputs multilinha
  },
  helperText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  helperTextError: {
    color: '#d32f2f', // Cor do texto de ajuda quando há erro
  },
});

export default TextField;
