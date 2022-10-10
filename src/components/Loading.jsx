import React from 'react';
import {
  View, ActivityIndicator, StyleSheet,
} from 'react-native';
import { PropTypes } from 'prop-types'; // propsのtype

export default function Loading(props) {
  const { isLoading } = props;
  if (!isLoading) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <ActivityIndicator size="large" color="#000000" />
      </View>
    </View>
  );
}

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

Loading.defaultProp = {
  isLoading: false,
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    with: '100%',
    height: '100%',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'rgba(255,255,255 , 0.5)',
    zIndex: 5,
  },
  inner: {
    marginBottom: 80,
  },
});
