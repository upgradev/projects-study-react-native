import {useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialIcons from '../../components/common/Icon';
import ContactsComponent from '../../components/ContactsComponent';
import {GlobalContext} from '../../context/Provider';

function Contacts() {
  const {setOptions, toggleDrawer} = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const {
    contactsState: {
      getContacts: {data, loading},
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => toggleDrawer()}>
          <MaterialIcons
            type="material"
            name="menu"
            style={{padding: 10}}
            size={25}></MaterialIcons>
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <ContactsComponent
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      // data={data}
      // loading={loading}
    />
  );
}

export default Contacts;
