import React from 'react';

import { AxiosError } from 'axios';
import apiConcatto from '~/services/api-concatto';
import { setItemAsync, getItemAsync } from 'expo-secure-store';

export interface IUser {
  id: number;
  name: string;
  email: string;
  email_verified_at: any;
  created_at: Date;
  updated_at: Date;
}

export interface ISchedule {
  id: number;
  cooperative: string;
  locality: string;
  location: string;
  initialDate: string;
  accessory_type: string;
}

export interface IResponseLogin {
  message: string;
  baererToken: string | null;
  user: IUser;
}

const UserContext = React.createContext<any>({
  user: 0,
  SignIn: (email: string, password: string) => {},
  baererToken: '',
});

const UserProvider = ({ children }: any) => {
  const [baererToken, setToken] = React.useState<string | null>(null);
  const [user, setUser] = React.useState<IUser | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [agendas, setAgendas] = React.useState<ISchedule[]>([]);

  const SignIn = async (email: string, password: string) => {
    setLoading(true);
    try {
      if (email && password) {
        await apiConcatto
          .post(`login`, {
            email,
            password,
          })
          .then((response) => {
            if (response.status === 200) {
              const { token, user } = response.data;
              setToken(token);
              setItemAsync('token', token);
              setUser(user);
            }
          })
          .catch((error) => {
            console.log(error);
            setUser(null);
            setToken(null);
          });

        setLoading(false);
        return;
      }
      setLoading(false);
      alert('Por favor, para continuar preencha o E-mail e a Senha!');
    } catch (error: AxiosError | any) {
      setLoading(false);
      setUser(null);
      setToken(null);
      alert('Usuário ou senha inválidos!');
    }
  };

  const SignUp = async (email: string, password: string) => {
    try {
      if (email && password) {
        await setItemAsync('user', JSON.stringify({}));

        return;
      }

      alert('Por favor, para continuar preencha o E-mail e a Senha!');
    } catch (error) {
      console.error(error);
    }
  };

  const getUser = async () => {
    await apiConcatto
      .get('user', {
        headers: {
          Authorization: `Bearer ${baererToken}`,
        },
      })
      .then((r) => {
        console.log(r);
      })
      .catch((error) => {
        console.log(error);
        setItemAsync('token', '');
      });
  };

  const getToken = async () => {
    const token = await getItemAsync('token');
    setToken(token);

    if (token) {
      getUser();
    }
  };

  const getSchedulesList = async () => {
    try {
      await apiConcatto
        .get(`schedules`, {
          headers: {
            Authorization: `Bearer ${baererToken}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            setAgendas(response.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error: AxiosError | any) {
      console.log(error);
      setAgendas([]);
    }
  };

  const getScheduleById = async (id: number) => {
    setLoading(true);
    const schedule = await apiConcatto
      .get(`schedules/${id}`, {
        headers: {
          Authorization: `Bearer ${baererToken}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        }
      })
      .catch((error) => {
        console.log(error);
        return null;
      });

    setLoading(false);

    return schedule;
  };

  React.useEffect(() => {
    getToken();
  }, []);

  React.useEffect(() => {
    if (baererToken) getSchedulesList();
  }, [baererToken]);

  return (
    <UserContext.Provider value={{ user, agendas, loading, getScheduleById, SignIn, SignUp }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
