import React from 'react';
import { Stack } from 'expo-router';
import { Text, View } from 'react-native';
import useAddExpenseViewController from './useAddExpenseViewController';
import TextField from '~/components/TextField';
import ButtonStyled from '~/components/ButtonStyled';
import SelectInput from '~/components/SelectInput';

export default function AddExpenseView() {
  const { schedule, quantity, setQuantity, handleExpense, expensesType, setExpenses } =
    useAddExpenseViewController();

  return (
    <View>
      <Stack.Screen
        options={{
          contentStyle: { backgroundColor: '#f4f4f4' },
          headerStyle: { backgroundColor: '#0f0f0f' },
          headerTitleStyle: {
            color: '#fff',
          },
          title: `${schedule?.cooperative} - ${schedule?.location}`,
          headerShown: true,
        }}
      />
      <View style={{ padding: 8, marginTop: 8, justifyContent: 'center' }}>
        <SelectInput options={expensesType} labelInput="Tipo de despesa" />
        {/* <TextField
          label="Tipo de despesa"
          value={quantity}
          onChangeText={setQuantity}
          placeholder="Selecione"
          error={false}
          helperText={'Tipo de despesa'}
        /> */}
        <TextField
          label="Quantidade"
          value={quantity}
          onChangeText={setQuantity}
          placeholder="Digite a quantidade"
          error={false}
          helperText={'Quantidade'}
        />
        <TextField
          label="Observação"
          value={quantity}
          onChangeText={setQuantity}
          placeholder="Digite a observação"
          error={false}
          helperText={'Observação'}
        />
        <ButtonStyled onClick={() => handleExpense()} title="Salvar" variant="primary" />
      </View>
    </View>
  );
}
