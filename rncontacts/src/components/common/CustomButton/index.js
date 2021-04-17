import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';

export default function CustomButton({
  title,
  disabled,
  loading,
  secondary,
  primary,
  danger,
  onPress,
}) {
  const [focused, setFocused] = useState(false);

  const getBgColor = () => {
    if (disabled) {
      return colors.grey;
    }

    if (primary) {
      return colors.primary;
    }
    if (danger) {
      return colors.danger;
    }
    if (secondary) {
      return colors.secondary;
    }
  };

  return (
    <TouchableOpacity
      style={[styles.wrapper, {backgroundColor: getBgColor()}]}
      disabled={disabled}
      onPress={onPress}>
      <View style={[styles.loaderSection]}>
        {loading && <ActivityIndicator color={primary ? colors.secondary: colors.primary} />}
        {title && (
          <Text
            style={{
              color: disabled ? 'black' : colors.white,
              paddingLeft: loading ? 5 : 0,
            }}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}
