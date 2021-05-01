import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import colors from '../../assets/theme/colors';
import AppModal from '../common/AppModal';
import styles from '../common/AppModal/styles';
import CustomButton from '../common/CustomButton';
import Message from '../common/Message';

const ContactsComponent = ({
  modalVisible,
  setModalVisible,
  title,
  modalBody,
  modalFooter,
  data,
  loading,
}) => {
  const ListEmptyComponent = () => {
    return (
      <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
        <Message info message="No Contacts to show" />
      </View>
    );
  };

  const renderItem = ({item}) => {
    console.log('item: ', item);

    return (
      <TouchableOpacity>
        <Text>Contact 1</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <AppModal
        modalFooter={<></>}
        modalBody={
          <View>
            <Text> Hello from </Text>
          </View>
        }
        title="My Profile"
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
      />
      {loading && (
        <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
          <ActivityIndicator color={colors.primary} size="large" />
        </View>
      )}

      {!loading && (
        <FlatList
          renderItem={renderItem}
          data={data}
          keyExtractor={item => String(item.id)}
          ListEmptyComponent={ListEmptyComponent}
        />
      )}

      {/* <CustomButton
        onPress={() => {
          setModalVisible(true);
        }}
        title="Open Modal"
        secondary
      /> */}
    </View>
  );
};

export default ContactsComponent;
