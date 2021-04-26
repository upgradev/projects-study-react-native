import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import Container from '../common/Container';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {REGISTER} from '../../constants/routeNames';

const index = () => {
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
            onChangeText={text => setValue(text)}
            placeholder="Enter Username"
            // error={"This is field required"}
          />

          <Input
            label="Password"
            placeholder="Enter Password"
            icon={<Text>Show</Text>}
            iconPosition="right"
            secureTextEntry={true}
          />

          <CustomButton primary title="Submit" />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new account? </Text>
            <TouchableOpacity
             
              onPress={() => navigate(REGISTER)}>
              <Text  style={styles.linkBtn}>Register</Text>
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
