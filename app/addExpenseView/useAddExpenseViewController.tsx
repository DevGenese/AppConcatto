import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ISchedule, UserContext } from '~/contexts/UserContext';
import apiConcatto from '~/services/api-concatto';

export default function useAddExpenseViewController() {
  const { id } = useLocalSearchParams();
  const { getScheduleById } = React.useContext(UserContext);
  const [schedule, setSchedule] = React.useState<ISchedule | null>(null);
  const [quantity, setQuantity] = React.useState<number | null>(null);

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
    setQuantity,
    handleExpense,
  };
}
