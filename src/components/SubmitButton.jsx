import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { PropTypes } from 'prop-types'; // propsのtype

export default function SubmitButton(props) {
  const { name, onpress } = props;
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onpress}>
      <Text style={styles.buttonLabel}>{name}</Text>
    </TouchableOpacity>
  );
}

SubmitButton.propTypes = {
  name: PropTypes.string,
  onpress: PropTypes.func,
};

SubmitButton.defaultProps = {
  name: 'Submit',
  onpress: null,
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#0286FF',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 24,
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    paddingVertical: 8,
    paddingHorizontal: 24,
    color: '#ffffff',
  },
});
