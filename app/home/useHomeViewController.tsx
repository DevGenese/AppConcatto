import { router } from 'expo-router';
import React from 'react';
import { UserContext } from '~/contexts/UserContext';

export default function useHomeViewController() {
  const { agendas } = React.useContext(UserContext);

  const handleExpensesView = (id: number) => {
    router.push({
      pathname: '/addExpenseView/addExpenseView',
      params: { id },
    });
  };

  return {
    agendas,
    handleExpensesView,
  };
}
