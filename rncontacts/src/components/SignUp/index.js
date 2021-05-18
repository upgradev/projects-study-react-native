import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Container from '../common/Container';
import styles from './styles';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import {useNavigation} from '@react-navigation/core';
import {LOGIN} from '../../constants/routeNames';

const RegisterComponent = ({onSubmit, onChange, form, errors}) => {
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
            onChangeText={value => onChange({name: 'userName', value: value})}
            error={errors.userName}
          />

          <Input
            label="Firstname"
            iconPosition="right"
            placeholder="Enter first name"
            onChangeText={value => onChange({name: 'firstName', value: value})}
            error={errors.firstName}
          />

          <Input
            label="Lastname"
            iconPosition="right"
            placeholder="Enter last name"
            onChangeText={value => onChange({name: 'lastName', value: value})}
            error={errors.lastName}
          />

          <Input
            label="Email"
            iconPosition="right"
            placeholder="Enter Email"
            onChangeText={value => onChange({name: 'email', value: value})}
            error={errors.email}
          />

          <Input
            label="Password"
            placeholder="Enter password"
            secureTextEntry={true}
            icon={<Text>Show</Text>}
            iconPosition="right"
            onChangeText={value => onChange({name: 'password', value: value})}
            error={errors.password}
          />

          <CustomButton onPress={onSubmit} primary title="Submit" />

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
