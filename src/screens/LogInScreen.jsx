import React, { useState } from 'react';
import {
  View, StyleSheet, Text, TextInput, TouchableOpacity,
} from 'react-native';
import SubmitButton from '../components/SubmitButton';

export default function LogInScreen(props) {
  /** どちらも分割代入 */
  const { navigation } = props; /* propsオブジェクトから navigationオブジェクトを取り出す */
  /** 状態を保持する */
  const [email, setEmail] = useState('');/* 配列から email, setEmailを取り出す */
  const [passWord, serPassWord] = useState('');
  return (
    <View style={styles.container}>

      <View style={styles.LogInContainer}>
        <Text style={styles.title}>Login</Text>
        <TextInput value="" placeholder="Email Adress" style={styles.input} />
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
          name="Login"
          onpress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'MemoList' }],
            });
          }}
        />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not Registed?</Text>
          <TouchableOpacity>
            <Text
              style={styles.footerLink}
              onPress={() => {
                navigation.reset({
                  index: 0,
                  routes: [{ name: 'SingUp' }],
                });
              }}
            >
              Sing Up Here
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
