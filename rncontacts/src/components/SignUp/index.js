import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Container from '../../components/Common/Container';
import CustomButton from '../../components/Common/CustomButton';
import Input from '../../components/Common/Input';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {LOGIN} from '../../constants/routeNames';

const RegisterComponent = ({onChange, onSubmit, form, errors}) => {
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
            error={errors.userName}
            onChangeText={value => {
              onChange({name: 'userName', value: value});
            }}
          />

          <Input
            label="First Name"
            iconPosition="right"
            placeholder="Enter first name"
            onChangeText={value => {
              onChange({name: 'firstName', value: value});
            }}
            error={errors.firstName}
          />

          <Input
            label="Last Name"
            iconPosition="right"
            placeholder="Enter Last name"
            error={errors.lastName}
            onChangeText={value => {
              onChange({name: 'lastName', value: value});
            }}
          />

          <Input
            label="Email"
            iconPosition="right"
            placeholder="Enter Email"
            error={errors.email}
            onChangeText={value => {
              onChange({name: 'email', value: value});
            }}
          />

          <Input
            label="Password"
            placeholder="Enter Password"
            icon={<Text>Show</Text>}
            iconPosition="right"
            secureTextEntry={true}
            error={errors.password}
            onChangeText={value => {
              onChange({name: 'password', value: value});
            }}
          />
          <CustomButton primary onPress={onSubmit} title="Submit" />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have a Account?</Text>
            <TouchableOpacity onPress={() => navigate(LOGIN)}>
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* <CustomButton secondary title="Submit" loading={true} disabeld={true} />
      <CustomButton secondary loading title="Click Me" /> */}

      {/* <CustomButton danger title="Submit" /> */}
    </Container>
  );
};

export default RegisterComponent;
