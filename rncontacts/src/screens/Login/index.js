import React, {useState} from 'react';

import LoadingComponent from '../../components/Login'

export default function Login() {
  const [value, onChnageText] = useState("");

  return (
    <LoadingComponent />
    
  );
}
