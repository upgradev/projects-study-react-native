import React, {useState} from 'react';
import LoginComponent from '../../components/Login'

const Login = () => {
  const [value, onChangetext] = useState('');

  return (
    <LoginComponent />
  );
};

export default Login;
