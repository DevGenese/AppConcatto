import { Link, Stack, useNavigation } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import ButtonStyled from '~/components/ButtonStyled';
import CardStyled from '~/components/CardStyled';
import useHomeViewController from './useHomeViewController';
import { IAgenda } from '~/contexts/UserContext';

export default function HomeView() {
  const { agendas, handleExpensesView } = useHomeViewController();

  return (
    <View>
      <Stack.Screen
        options={{
          contentStyle: { backgroundColor: '#f4f4f4' },
          headerStyle: { backgroundColor: '#0f0f0f' },
          headerTitleStyle: {
            color: '#fff',
          },
          title: 'Agendas',
          headerShown: true,
        }}
      />
      <View style={{ padding: 16, marginTop: 92, justifyContent: 'center' }}>
        {agendas && agendas.length > 0 ? (
          agendas.map((a: IAgenda, index: number) => (
            <CardStyled
              key={index}
              title={a.cooperative}
              content={a.locality}
              actions={
                <View style={{ gap: 4, flexDirection: 'row' }}>
                  <ButtonStyled
                    title="Lançar Despesa"
                    onClick={() => handleExpensesView(a.id)}
                    variant="primary"
                  />
                  <ButtonStyled
                    title="Finalizar Agenda"
                    onClick={() => alert('Ação 2 clicada!')}
                    disabled
                    variant="primary"
                  />
                </View>
              }
            />
          ))
        ) : (
          <Text>Não há agendas</Text>
        )}
      </View>
    </View>
  );
}
