import { Stack } from 'expo-router';
import { View } from 'react-native';
import ButtonStyled from '~/components/ButtonStyled';
import TextField from '~/components/TextField';
import useLoginController from './useLoginController';

export default function LoginView() {
  const { SignIn, email, setEmail, password, setPassword } = useLoginController();

  return (
    <View>
      <Stack.Screen
        options={{
          contentStyle: { backgroundColor: '#f4f4f4' },
          headerStyle: { backgroundColor: '#434343' },
          headerShown: false,
        }}
      />
      <View style={{ padding: 16, marginTop: 92, justifyContent: 'center' }}>
        <TextField
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="Digite seu email"
          error={email && !email.includes('@')}
          helperText={email && !email.includes('@') ? 'Email inválido' : ''}
        />

        <TextField
          label="Senha"
          value={password}
          onChangeText={setPassword}
          placeholder="Digite sua senha"
          secureTextEntry
          error={password && password.length < 8}
          helperText={password && password.length < 8 ? 'Senha inválida' : ''}
        />
        <ButtonStyled onClick={() => SignIn(email, password)} title="Entrar" variant="primary" />
      </View>
    </View>
  );
}
