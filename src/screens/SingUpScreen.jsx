import React, { useState } from 'react';
import {
  View, StyleSheet, Text, TextInput, TouchableOpacity, Alert,
} from 'react-native';

import SubmitButton from '../components/SubmitButton';
import firebase from 'firebase';  // firebaseと接続するために必須

export default function SingUpScreen(props) {
  /** どちらも分割代入 */
  const { navigation } = props; /* propsオブジェクトから navigationオブジェクトを取り出す */
  /** 状態を保持する */
  const [email, setEmail] = useState('');/* 配列から email, setEmailを取り出す */
  const [passWord, serPassWord] = useState('');

  function handlePress() {
    // 登録
    firebase.auth().createUserWithEmailAndPassword(email, passWord)
      .then((userCredential) => {
        const { user } = userCredential;
        console.log(user.uid);
        navigation.reset({
          index: 0,
          routes: [{ name: 'MemoList' }],
        });
      })
      .catch((error) => {
        console.log(error.code, error.message);
        Alert.alert(error.code);
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.LogInContainer}>
        <Text style={styles.title}>SingUp</Text>
        <TextInput
          value={email}
          onChangeText={(text) => {
            // 入力した値を受け取り,emailに値を更新する
            setEmail(text);
          }}
          placeholder="Email Adress"
          style={styles.input}
          autoCapitalize="none" // 大文字変換なし
          keyboardType="email-address"
          textContentType="emailAddress" // iosでキーチェーンで取ってきて自動保存してくれる
        />
        <TextInput
          value={passWord}
          onChangeText={(text) => {
            // 入力した値を受け取り,passWordに値を更新する
            serPassWord(text);
          }}
          placeholder="Pass Word"
          style={styles.input}
          autoCapitalize="none" // 大文字変換なし
          secureTextEntry // 画面で入力が****となる
          textContentType="password" // iosでキーチェーンで取ってきて自動保存してくれる
        />
        <SubmitButton
          name="SingUp"
          onpress={handlePress}
        />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already Registed?</Text>
          <TouchableOpacity>
            <Text
              style={styles.footerLink}
              onPress={() => {
                navigation.reset({
                  index: 0,
                  routes: [{ name: 'LogIn' }],
                });
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  LogInContainer: {
    paddingHorizontal: 27, // 横
    paddingVertical: 24, // 縦
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
    height: 48,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dddddd',
    marginBottom: 16,
    paddingHorizontal: 8,
  },

  footer: {
    flexDirection: 'row',
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#0286FF',
  },
});
