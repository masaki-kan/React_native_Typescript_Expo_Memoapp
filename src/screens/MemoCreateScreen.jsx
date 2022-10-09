import React, { useState } from 'react';
import {
  StyleSheet, View, TextInput, Alert,
} from 'react-native';

import firebase from 'firebase';

import CircleButton from '../components/CircleButton';
import KeyboardAvoidingSafeView from '../components/KeyboardAvoidingSafeView';

export default function MemoCreateScreen(props) {
  const { currentUser } = firebase.auth(); // 現在ログインしているユーザー
  const { navigation } = props;
  const [bodyText, setBodyText] = useState('');
  function handlePress() {
    const db = firebase.firestore();
    // コレクションの追加
    const ref = db.collection(`users/${currentUser.uid}/memos`);
    ref.add({
      // bodyText: bodyText,
      bodyText, // キーと値が同じ場合はこの書き方で行う
      updatedAt: new Date(),
    })
      .then((docRef) => {
        console.log('created!', docRef.id);
        navigation.goBack();
      })
      .catch((error) => {
        Alert.alert('登録に失敗しました。', error.code);
      });
  }

  return (
    <KeyboardAvoidingSafeView style={styles.container}>
      <View style={styles.inputContaner}>
        <TextInput
          value={bodyText}
          multiline
          style={styles.input}
          onChangeText={(text) => {
            // 入力した値を受け取り,bodyTextに値を更新する
            setBodyText(text);
          }}
          autoFocus
        />
      </View>
      <CircleButton
        name="plus"
        onPress={handlePress}
      />
    </KeyboardAvoidingSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
  inputContaner: {
    paddingHorizontal: 27, // 水平
    paddingVertical: 32, // 垂直
    flex: 1,
  },
});
