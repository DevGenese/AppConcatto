import React, { ReactElement } from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { pallet } from '~/theme/pallet';

type ButtonStyledProps = {
  title: string;
  onClick: () => void;
  variant: string;
  disabled?: boolean;
} & TouchableOpacityProps;

function ButtonStyled(props: ButtonStyledProps) {
  const { title, onClick, variant, disabled = false } = props;

  let color = '';
  let backgroundColor = '';

  switch (!disabled ? variant : 'disabled') {
    case 'primary':
      color = pallet.button.color.primary;
      backgroundColor = pallet.button.background.primary;
      break;

    default:
      color = pallet.button.color.disabled;
      backgroundColor = pallet.button.background.disabled;
      break;
  }

  return (
    <TouchableOpacity
      onPress={() => onClick()}
      disabled={disabled}
      style={[styles.button, { backgroundColor: backgroundColor }]}>
      <Text style={[styles.buttonText, { color: color }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 8,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 8,
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  buttonDisabled: {
    alignItems: 'center',
    borderRadius: 8,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 8,
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonTextDisabled: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default ButtonStyled;
