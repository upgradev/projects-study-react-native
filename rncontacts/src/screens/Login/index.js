import React from 'react';
import LoadingComponent from '../../components/Login'

const Login = () => {
  const [text, onChangeText] = React.useState('');

  return (
   <LoadingComponent />
  );
};

export default Login;
