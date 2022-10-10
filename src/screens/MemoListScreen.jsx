import React, { useEffect, useState } from 'react';
import {
  StyleSheet, View, Alert, Text,
} from 'react-native';
import firebase from 'firebase';

// import AppBar from '../components/AppBar';
import MemoListsItem from '../components/MemoListsItem';
import CircleButton from '../components/CircleButton';
import LogOutButton from '../components/LogOutButton';
import Loading from '../components/Loading';

export default function MemoListScreen(props) {
  const { navigation } = props;
  const [memos, setMemos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);

  useEffect(() => {
    const { currentUser } = firebase.auth(); // 現在ログインしているユーザー
    let unsubscribe = () => { };
    if (currentUser) {
      const db = firebase.firestore();
      setIsLoading(true);
      const ref = db.collection(`users/${currentUser.uid}/memos`).orderBy('updatedAt', 'desc');
      // データの取得
      unsubscribe = ref.onSnapshot((snapshot) => {
        const userMemos = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          userMemos.push({
            id: doc.id,
            bodyText: data.bodyText,
            updatedAt: data.updatedAt.toDate(), // firestoreからtimestampでくるからデータ型に変換
          });
        });
        setMemos(userMemos);
        setIsLoading(false);
      }, () => {
        setIsLoading(false);
        Alert.alert('データの読み込みに失敗しました。');
      });
    }
    return unsubscribe;
  }, []);

  if (memos.length === 0) {
    return (
      <View style={emptyStyles.container}>
        <Loading isLoading={isLoading} />
        <View style={emptyStyles.inner}>
          <Text style={emptyStyles.title}>
            最初のメモを作成してしてみよう
          </Text>
          <CircleButton
            name="plus"
            onPress={() => {
              navigation.navigate('MemoCreate');
            }}
            style={{ right: 100 }}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* memo ヘッダー部分 */}
      {/* <AppBar /> */}
      {/* memo リスト部分 */}
      <MemoListsItem memos={memos} />
      {/** ＋ボタン */}
      <CircleButton
        name="plus"
        onPress={() => {
          navigation.navigate('MemoCreate');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
});

const emptyStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    justifyContent: 'center',
    alignItems: 'cenetr',
  },
  title: {
    fontSize: 18,
    marginBottom: 24,
  },
  button: {
    textAlign: 'center',
  },
});
