import React from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/input';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import LOGIN from '../../screens/Login';

export default function RegisterComponent({onSubmit, onChange, form, errors}) {
  const {navigate} = useNavigation();
  
  return (
    <Container>
      <Image
        height={70}
        width={70}
        style={styles.logoImage}
        source={require('../../assets/images/logo.png')}
      />

      <View>
        <Text style={styles.title}>Welcome to RNContacts</Text>
        <Text style={styles.subTitle}>Create a free account</Text>

        <View style={styles.form}>
          <Input
            label="User Name"
            iconPosition="right"
            placeholder="Enter User Name"
            onChangeText={(value) => {
              onChange({name: 'userName', value: value});
            }}
            error={errors.userName}
          />

          <Input
            label="First Name"
            iconPosition="right"
            placeholder="Enter First Name"
            onChangeText={(value) => {
              onChange({name: 'firstName', value: value});
            }}
            error={errors.firstName}
          />

          <Input
            label="Last Name"
            iconPosition="right"
            placeholder="Enter Last Name"
            error={errors.lastName}
            onChangeText={(value) => {
              onChange({name: 'lastName', value: value});
            }}
          />

          <Input
            label="Email"
            iconPosition="right"
            placeholder="Enter Email"
            error={errors.email}
            onChangeText={(value) => {
              onChange({name: 'email', value: value});
            }}
          />

          <Input
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={true}
            icon={<Text>Show</Text>}
            iconPosition="right"
            error={errors.password}
            onChangeText={(value) => {
              onChange({name: 'password', value: value});
            }}
          />

          {/* <CustomButton secondary title="submit" loading={true} disabled={true} />
      <CustomButton secondary loading title="Click Me" /> */}
          <CustomButton onPress={onSubmit} primary title="Submit"  />
          {/* <CustomButton danger title="submit" /> */}
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new account? </Text>
            <TouchableOpacity onPress={() => navigate(LOGIN)}>
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
}
