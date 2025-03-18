import React, { useEffect } from 'react';

import { AxiosError } from 'axios';
import apiConcatto from '~/services/api-concatto';
import { getItemAsync } from 'expo-secure-store';
import { UserContext } from '../UserContext';

export interface IAgenda {
  id: number;
  cooperative: string;
  locality: string;
  location: string;
  initialDate: string;
  accessory_type: string;
}

const AgendaContext = React.createContext<any>({
  agendas: [],
});

const AgendaProvider = ({ children }: any) => {
  const { baererToken } = React.useContext(UserContext);

  const [agendas, setAgendas] = React.useState<IAgenda[]>([]);

  const getAgendaList = async () => {
    if (baererToken) {
      try {
        await apiConcatto
          .get(`schedules`, {
            headers: {
              Authorization: `Bearer ${baererToken}`,
            },
          })
          .then((response) => {
            if (response.status === 200) {
              console.log(response);
              setAgendas(response.data);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error: AxiosError | any) {
        console.log(error);
      }
    } else {
      setAgendas([]);
    }
  };

  useEffect(() => {
    getAgendaList();
  }, []);

  return <AgendaContext.Provider value={{ agendas }}>{children}</AgendaContext.Provider>;
};

export { AgendaContext, AgendaProvider };
