import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserProvider } from '~/contexts/UserContext';

export default function Layout() {
  return (
    <UserProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack />
      </SafeAreaView>
    </UserProvider>
  );
}
