import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import { PropTypes } from 'prop-types'; // propsのtype
import { Feather } from '@expo/vector-icons';

export default function CircleButton(props) {
  const { style, name, onPress } = props;
  return (
    <TouchableOpacity style={[styles.circleButton, style]} onPress={onPress}>
      <Text style={styles.circleButtonLabel}>
        <Feather name={name} size={32} color="white" />
      </Text>
    </TouchableOpacity>
  );
}

CircleButton.propTypes = {
  style: PropTypes.shape(),
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

CircleButton.defaultProps = {
  style: null,
  onPress: null,
};

const styles = StyleSheet.create({
  circleButton: {
    width: 64,
    height: 64,
    backgroundColor: '#0286FF',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 43,
    right: 43,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    /* iosのみ対応するプロパティ */
    shadowRadius: 8,
    /* Androidのみ対応するプロパティ */
    elevation: 8,
  },
  circleButtonLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 40,
  },
});
