import React from 'react';
import {
  Text, StyleSheet, TouchableOpacity, Alert,
} from 'react-native';
import firebase from 'firebase'; // firebaseと接続するために必須
import { useNavigation } from '@react-navigation/native';

export default function LogOutButton() {
  /* react hooksは必ずコンポーネントの直下に入れる必要がある */
  const navigation = useNavigation();
  function handlePress() {
    firebase.auth().signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'LogIn' }],
        });
      }).catch(() => {
        Alert.alert('ログアウトに失敗しました。');
      });
  }

  return (
    <TouchableOpacity
      style={styles.contaner}
      onPress={handlePress}>
      <Text style={styles.label}>
        Logout
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  contaner: {
    paddingHorizontal: 12, // 水平方向
    paddingVertical: 4, // 垂直方向
  },
  label: {
    fontSize: 14,
    color: 'rgba(255,255,255, 0.7)',
  },
});
