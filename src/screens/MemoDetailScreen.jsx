import React, { useEffect, useState } from 'react';
import {
  StyleSheet, View, Text, ScrollView,
} from 'react-native';
import { PropTypes } from 'prop-types';
import firebase from 'firebase';
import { dateToString } from '../Utils';

import CircleButton from '../components/CircleButton';

export default function MemoDetailScreen(props) {
  const { navigation, route } = props;
  const { id } = route.params;
  const [memo, setMemo] = useState(null);

  useEffect(() => {
    const { currentUser } = firebase.auth(); // 現在ログインしているユーザー
    let unsubscribe = () => { };
    // 単一のドキュメント データの取得
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      unsubscribe = ref.onSnapshot((doc) => {
        const data = doc.data();
        setMemo({
          id: doc.id,
          bodyText: data.bodyText,
          updatedAt: data.updatedAt.toDate(),
        });
      }, (error) => {
        console.log(error);
      });
    }
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.MemoHeader}>
        {/* 初期値でnullを設定しているので空だとエラーが起きる */}
        <Text style={styles.MemoHeaderTitle} numberOfLines={1}>{memo && memo.bodyText}</Text>
        <Text style={styles.MemoHeaderDate}>{memo && dateToString(memo.updatedAt)}</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoText}>
          {memo && memo.bodyText}
        </Text>
      </ScrollView>
      <CircleButton
        style={{ top: 60, bottom: 'auto' }}
        name="edit-2"
        onPress={() => {
          navigation.navigate('MemoEdit', { id: memo.id, bodyText: memo.bodyText });
        }}
      />
    </View>
  );
}
/* app.js内のStack.Screenで登録すると自動で渡って来る
渡って来るpropsに対しての設定は環境チームのルールによってなくても大丈夫
無視する場合は.eslintrc.jsonのrulesプロパティに記入
*/
MemoDetailScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string }),
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  MemoHeader: {
    backgroundColor: '#0286FF',
    height: 96,
    justifyContent: 'center',
    paddingHorizontal: 19,
    paddingVertical: 24,

  },
  MemoHeaderTitle: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 32,
  },
  MemoHeaderDate: {
    color: '#ffffff',
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 24,
  },
  memoText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
