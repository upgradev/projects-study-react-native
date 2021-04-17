import React from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/input';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Register from '../../screens/Register';

export default function Index() {
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
        <Text style={styles.subTitle}>Please login here</Text>

        <View style={styles.form}>
          <Input
            label="Username"
            iconPosition="right"
            placeholder="Enter Username"
            // error={"this is field is required"}
          />

          <Input
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={true}
            icon={<Text>Show</Text>}
            iconPosition="right"
          />

          {/* <CustomButton secondary title="submit" loading={true} disabled={true} />
      <CustomButton secondary loading title="Click Me" /> */}
          <CustomButton primary title="submit" />
          {/* <CustomButton danger title="submit" /> */}
          <View style={styles.createSection}>
              <Text style={styles.infoText}>Need a new account? </Text>
            <TouchableOpacity onPress={() => navigate(Register)}>
              <Text style={styles.linkBtn}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
}
