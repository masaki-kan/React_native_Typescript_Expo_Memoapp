import React from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity, Alert, FlatList,
} from 'react-native';
import firebase from 'firebase';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { PropTypes } from 'prop-types'; // propsのtype
import { dateToString } from '../Utils';

export default function MemoListsItem(props) {
  const { memos } = props;
  /* useNavigationは
 navigationオブジェクトへのアクセスを与えるフックです。
 navigationプロパティをコンポーネントに直接渡すことができない場合、または深くネストされた子の場合に渡したくない場合に役立ちます。 */
  const navigation = useNavigation();

  const deleteMemo = (id) => {
    const { currentUser } = firebase.auth(); // 現在ログインしているユーザー
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      Alert.alert('本当に削除しますか？', [
        {
          text: 'キャンセル',
          onPress: () => { },
        },
        {
          text: '削除する',
          style: 'destructive',
          onPress: () => {
            // 成功時は時に何にもしない 失敗時のみ表示
            ref.delete().catch(() => { Alert.alert('削除に失敗しました。'); });
          },
        },
      ]);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.memoListsItem}
      onPress={() => { navigation.navigate('MemoDetail', { id: item.id }); }}
    >
      <View>
        {/* 文書を１行にするにはnumberOfLines={1} ２行にするにはnumberOfLines={2}  */}
        <Text style={styles.memoListsItemTitle} numberOfLines={1}>{item.bodyText}</Text>
        <Text style={styles.memoListsItemData}>{dateToString(item.updatedAt)}</Text>
      </View>
      <TouchableOpacity
        style={styles.memoDelete}
        onPress={() => {
          deleteMemo(item.id);
        }}
      >
        <Feather
          name="x"
          size={24}
          color="gray"
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.contaner}>
      <FlatList
        data={memos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

MemoListsItem.propTypes = {
  memos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      bodyText: PropTypes.string,
      updatedAt: PropTypes.instanceOf(Date),
    }),
  ).isRequired,
};

const styles = StyleSheet.create({
  contaner: {
    flex: 1,
  },
  memoListsItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 19,
    borderBottomWidth: 1,
    borderColor: 'rgba( 0,0,0,0.15 )',
  },
  memoListsItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListsItemData: {
    color: '#848484',
    fontSize: 12,
    lineHeight: 16,
  },
  memoDelete: {
    padding: 12,
  },
});
