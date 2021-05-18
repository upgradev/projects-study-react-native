import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Container from '../common/Container';
import styles from './styles';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import {useNavigation} from '@react-navigation/core';
import {LOGIN} from '../../constants/routeNames';

const RegisterComponent = () => {
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
        <Text style={styles.subTitle}>Create a free account</Text>

        <View style={styles.form}>
          <Input
            label="Username"
            iconPosition="right"
            placeholder="Enter username"
            // error={"This field is required"}
          />

          <Input
            label="Firstname"
            iconPosition="right"
            placeholder="Enter first name"
            // error={"This field is required"}
          />

          <Input
            label="Lastname"
            iconPosition="right"
            placeholder="Enter last name"
            // error={"This field is required"}
          />

          <Input
            label="Email"
            iconPosition="right"
            placeholder="Enter Email"
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
            <Text style={styles.infoText}>Already have a account?</Text>
            <TouchableOpacity onPress={() => navigate(LOGIN)}>
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
