import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ISchedule, ISelect, UserContext } from '~/contexts/UserContext';
import apiConcatto from '~/services/api-concatto';

export default function useAddExpenseViewController() {
  const { id } = useLocalSearchParams();
  const { getScheduleById } = React.useContext(UserContext);
  const [schedule, setSchedule] = React.useState<ISchedule | null>(null);
  const [quantity, setQuantity] = React.useState<number | null>(null);
  const [expenses, setExpenses] = React.useState<number | null>(null);
  const [expensesType, setExpensesType] = React.useState<Array<ISelect>>([
    { id: 1, name: 'Opção 1' },
    { id: 2, name: 'Opção 2' },
    { id: 3, name: 'Opção 3' },
  ]);

  const getSchedule = async () => {
    setSchedule(await getScheduleById(id));
  };

  const handleExpense = async () => {
    if (!schedule || !quantity) return;

    console.log('quantity: ', quantity);
  };

  React.useEffect(() => {
    getSchedule();
  }, []);

  return {
    schedule,
    quantity,
    expensesType,
    setQuantity,
    handleExpense,
    setExpenses,
  };
}
