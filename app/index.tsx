import React from 'react';
import { UserContext } from '~/contexts/UserContext';
import LoginView from './login/LoginView';
import HomeView from './home/HomeView';
import { Text } from 'react-native';

export default function App() {
  const { user, loading } = React.useContext(UserContext);

  if (loading) return <Text>Loading...</Text>;

  if (user) return <HomeView />;

  return <LoginView />;
}
