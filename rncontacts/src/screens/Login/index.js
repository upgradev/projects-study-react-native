import React, {useState} from 'react';
import LoginComponent from '../../components/Login';

function Login() {
  const [value, setValue] = useState('');

  return <LoginComponent />;
}

export default Login;
