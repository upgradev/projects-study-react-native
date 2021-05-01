import React, { useState } from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import Container from '../common/Container';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {LOGIN} from '../../constants/routeNames';
import Message from '../common/Message';

const RegisterComponent = ({
  onSubmit,
  onChange,
  form,
  loading,
  error,
  errors,
}) => {
  const {navigate} = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);

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
          {error?.error && (
            <Message
              retry
              danger
              retryFn={() => {
                console.log('aqui');
              }}
              message={error?.error}
            />
          )}
          <Input
            label="Username"
            onChangeText={text => setValue(text)}
            placeholder="Enter Username"
            onChangeText={value => onChange({name: 'userName', value: value})}
            error={errors.userName || error?.username?.[0]}
          />

          <Input
            label="First Name"
            onChangeText={text => setValue(text)}
            placeholder="Enter first name"
            error={errors.firstName || error?.first_name?.[0]}
            onChangeText={value => onChange({name: 'firstName', value: value})}
          />

          <Input
            label="Last Name"
            onChangeText={text => setValue(text)}
            placeholder="Enter last name"
            error={errors.lastName || error?.last_name?.[0]}
            onChangeText={value => onChange({name: 'lastName', value: value})}
          />

          <Input
            label="Email"
            onChangeText={text => setValue(text)}
            placeholder="Enter Email"
            error={errors.email || error?.email?.[0]}
            onChangeText={value => onChange({name: 'email', value: value})}
          />

          <Input
           label="Password"
           placeholder="Enter Password"
           icon={
             <TouchableOpacity
               onPress={() => {
                 setIsSecureEntry((prev) => !prev);
               }}>
               <Text>{isSecureEntry? "Show" : "Hide"}</Text>
             </TouchableOpacity>
           }
           iconPosition="right"
           secureTextEntry={isSecureEntry}
            error={errors.password || error?.password?.[0]}
            onChangeText={value => onChange({name: 'password', value: value})}
          />

          <CustomButton
            loading={loading}
            disabled={loading}
            onPress={onSubmit}
            primary
            title="Submit"
          />

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
