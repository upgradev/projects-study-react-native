import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import Container from '../common/Container';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {REGISTER} from '../../constants/routeNames';
import Message from '../common/Message';

const index = ({error, onChange, justSignedUp, onSubmit, loading, form}) => {
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
        <Text style={styles.subTitle}>Please Login here</Text>

        <View style={styles.form}>
          {justSignedUp && (
            <Message
              onDismiss={() => {}}
              success
              message="Account created successfully"
            />
          )}
          {error && !error.error && (
            <Message
              onDismiss={() => {}}
              danger
              message={'invalid credentials'}
            />
          )}
          {error?.error && <Message danger onDismiss message={error?.error} />}

          <Input
            label="Username"
            onChangeText={text => setValue(text)}
            placeholder="Enter Username"
            onChangeText={value => onChange({name: 'userName', value: value})}
            value={form.userName || null}
          />

          <Input
            label="Password"
            placeholder="Enter Password"
            icon={
              <TouchableOpacity
                onPress={() => {
                  setIsSecureEntry(prev => !prev);
                }}>
                <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
              </TouchableOpacity>
            }
            iconPosition="right"
            secureTextEntry={isSecureEntry}
            onChangeText={value => onChange({name: 'password', value: value})}
          />

          <CustomButton
            loading={loading}
            onPress={onSubmit}
            primary
            title="Submit"
          />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new account? </Text>
            <TouchableOpacity onPress={() => navigate(REGISTER)}>
              <Text style={styles.linkBtn}>Register</Text>
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

export default index;
