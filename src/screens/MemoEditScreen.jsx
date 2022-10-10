import React, { useState } from 'react';
import {
  StyleSheet, View, TextInput, Alert,
} from 'react-native';
import { PropTypes } from 'prop-types';
import firebase from 'firebase';

import CircleButton from '../components/CircleButton';
import KeyboardAvoidingSafeView from '../components/KeyboardAvoidingSafeView';

export default function MemoEditScreen(props) {
  const { navigation, route } = props;
  const { id, bodyText } = route.params;
  const [body, setBody] = useState(bodyText);

  const handlePress = () => {
    const { currentUser } = firebase.auth(); // 現在ログインしているユーザー
    if (currentUser) {
      const db = firebase.firestore();
      // コレクションの追加
      // doc( id )は単一ドキュメントの算出
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      ref.set({
        // bodyText: bodyText,
        bodyText: body, // キーと値が同じ場合はこの書き方で行う
        updatedAt: new Date(),
        /*  第２引数で { merge: true }と入れると他の値をキープしつつ保存できる */
      }, { merge: true })
        .then(() => {
          navigation.goBack();
        })
        .catch((error) => {
          Alert.alert('更新に失敗しました。', error.code);
        });
    }
  };

  return (
    <KeyboardAvoidingSafeView style={styles.container}>
      <View style={styles.inputContaner}>
        <TextInput
          value={body}
          multiline
          style={styles.input}
          onChangeText={(text) => {
            setBody(text);
          }}
        />
      </View>
      <CircleButton
        name="check"
        onPress={(handlePress)}
      />
    </KeyboardAvoidingSafeView>
  );
}

MemoEditScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape(
      {
        id: PropTypes.string,
        bodyText: PropTypes.string,
      },
    ),
  }).isRequired,
};

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
