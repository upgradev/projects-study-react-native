import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Container from '../../components/Common/Container';
import CustomButton from '../../components/Common/CustomButton';
import Input from '../../components/Common/Input';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {REGISTER} from '../../constants/routeNames'

const Index = () => {
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
        <Text style={styles.subTitle}>Please Login here</Text>

        <View style={styles.form}>
          <Input
            label="Username"
            iconPosition="right"
            placeholder="Enter Username"
            // error={"this field is required"}
          />

          <Input
            label="Password"
            placeholder="Enter Password"
            icon={<Text>SHOW</Text>}
            iconPosition="right"
            secureTextEntry={true}
          />
          <CustomButton primary title="Submit" />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a New Account?</Text>
            <TouchableOpacity onPress={() => navigate(REGISTER)}>
              <Text style={styles.linkBtn}>Register</Text>
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

export default Index;
