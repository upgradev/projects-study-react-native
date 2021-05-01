import React from 'react';
import {View, Text, Modal, TouchableOpacity, ScrollView} from 'react-native';
import MaterialIcons from '../../../components/common/Icon';
import styles from './styles';

const AppModal = ({
  modalVisible,
  title,
  modalBody,
  modalFooter,
  setModalVisible,
}) => {
  return (
    <Modal visible={modalVisible} transparent>
      <TouchableOpacity
        onPress={() => setModalVisible(false)}
        style={styles.wrapper}>
        <View style={styles.modalView}>
          <ScrollView>
            <View style={styles.header}>
              <MaterialIcons type="material" name="close" size={27} />
              <Text style={styles.title}> {title || 'RnContacts'} </Text>
              <View />
              <View />
              <View />
            </View>
            <View style={styles.footerSeparator} />

            <View style={styles.body}>{modalBody}</View>

            <>
              <View style={styles.footerSeparator} />
              <View style={styles.footerItems}>
                <View style={styles.footer}>
                  <Text style={styles.footerText}>Privacy Policy</Text>
                  <View style={styles.termsView} />
                  <Text style={styles.footerText}>Terms of Service</Text>
                </View>
              </View>
            </>

            {!modalFooter && <View></View>}
          </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default AppModal;
