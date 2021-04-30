import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Container from '../../components/common/Container';

function Contacts() {
  const {setOptions, toggleDrawer} = useNavigation();
  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => toggleDrawer()}>
          <Text style={{padding: 10}}>Nav</Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <Container>
      <Text>Hi from Contacts</Text>
    </Container>
  );
}

export default Contacts;
