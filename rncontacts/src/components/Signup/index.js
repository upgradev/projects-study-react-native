import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import Container from '../common/Container';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
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
            onChangeText={text => setValue(text)}
            placeholder="Enter Username"
            onChangeText={value => onChange({name: 'userName', value: value})}
            error={errors.userName}
          />

          <Input
            label="First Name"
            onChangeText={text => setValue(text)}
            placeholder="Enter first name"
            error={errors.firstName}
            onChangeText={value => onChange({name: 'firstName', value: value})}
          />

          <Input
            label="Last Name"
            onChangeText={text => setValue(text)}
            placeholder="Enter last name"
            error={errors.lastName}
            onChangeText={value => onChange({name: 'lastName', value: value})}
          />

          <Input
            label="Email"
            onChangeText={text => setValue(text)}
            placeholder="Enter Email"
            error={errors.email}
            onChangeText={value => onChange({name: 'email', value: value})}
          />

          <Input
            label="Password"
            placeholder="Enter Password"
            icon={<Text>Show</Text>}
            iconPosition="right"
            secureTextEntry={true}
            error={errors.password}
            onChangeText={value => onChange({name: 'password', value: value})}
          />

          <CustomButton onPress={onSubmit} primary title="Submit" />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have a account? </Text>
            <TouchableOpacity onPress={() => navigate(LOGIN)}>
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
          {/* <CustomButton danger title="Submit" /> */}
          {/* <CustomButton secondary title="Submit" loading={true} disabled={true} />
            <CustomButton secondary loading title="Click Me" /> */}
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
