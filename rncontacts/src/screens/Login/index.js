import React from 'react';
import {Text} from 'react-native';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';

const Login = () => {
  const [text, onChangeText] = React.useState('');

  return (
    <Container>
      <Input
        label="Username"
        onChangeText={text => onChangeText(text)}
        value={text}
        iconPosition="right"
        // error={"This field is required"}
      />

      <Input
        label="Password"
        onChangeText={text => onChangeText(text)}
        value={text}
        icon={<Text>Hide</Text>}
        iconPosition="right"
      />
    </Container>
  );
};

export default Login;
