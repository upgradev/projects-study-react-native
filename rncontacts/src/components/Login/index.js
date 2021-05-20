import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Container from '../common/Container';
import styles from './styles';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import {useNavigation} from '@react-navigation/core';
import {REGISTER} from '../../constants/routeNames';
import Message from '../common/Message';

const Login = () => {
  const {navigate} = useNavigation();

  return (
    <Container>
      <Image
        height={70}
        width={70}
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />

      <View>
        <Text style={styles.title}>Welcome to RNContacts</Text>
        <Text style={styles.subTitle}>Please login here</Text>

        <Message
          retry
          retryFn={() => console.log('Hello world')}
          message="Invalid credentials"
          primary
          onDismiss={() => {}}
        />
        {/* <Message message="Invalid credentials" danger />
        <Message message="Invalid credentials" info />
        <Message message="Invalid credentials" success /> */}

        <View style={styles.form}>
          <Input
            label="Username"
            iconPosition="right"
            placeholder="Enter username"
            // error={"This field is required"}
          />

          <Input
            label="Password"
            placeholder="Enter password"
            secureTextEntry={true}
            icon={<Text>Show</Text>}
            iconPosition="right"
          />

          <CustomButton primary title="Submit" />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new account?</Text>
            <TouchableOpacity onPress={() => navigate(REGISTER)}>
              <Text style={styles.linkBtn}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default Login;
