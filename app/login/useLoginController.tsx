import React, { useState } from 'react';
import { UserContext } from '~/contexts/UserContext';

export default function useLoginController() {
  const { SignIn } = React.useContext(UserContext);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return {
    SignIn,
    email,
    setEmail,
    password,
    setPassword,
  };
}
