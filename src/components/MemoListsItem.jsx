import React from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity, Alert,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function MemoListsItem() {
  /* useNavigationは
  navigationオブジェクトへのアクセスを与えるフックです。
  navigationプロパティをコンポーネントに直接渡すことができない場合、または深くネストされた子の場合に渡したくない場合に役立ちます。 */
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.memoListsItem}
        onPress={() => {
          navigation.navigate('MemoDetail');
        }}
      >
        {/* リストの左側 */}
        <View>
          <Text style={styles.memoListsItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListsItemData}>2022年10月6日</Text>
        </View>
        {/* 削除ボタン */}
        <TouchableOpacity style={styles.memoDelete}>
          <Feather
            name="x"
            size={24}
            color="gray"
            onPress={() => {
              Alert.alert('削除しました。');
            }}
          />
        </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.memoListsItem}
        onPress={() => {
          navigation.navigate('MemoDetail');
        }}
      >
        {/* リストの左側 */}
        <View>
          <Text style={styles.memoListsItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListsItemData}>2022年10月6日</Text>
        </View>
        {/* 削除ボタン */}
        <TouchableOpacity style={styles.memoDelete}>
          <Feather
            name="x"
            size={24}
            color="gray"
            onPress={() => {
              Alert.alert('削除しました。');
            }}
          />
        </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.memoListsItem}
        onPress={() => {
          navigation.navigate('MemoDetail');
        }}
      >
        {/* リストの左側 */}
        <View>
          <Text style={styles.memoListsItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListsItemData}>2022年10月6日</Text>
        </View>
        {/* 削除ボタン */}
        <TouchableOpacity style={styles.memoDelete}>
          <Feather
            name="x"
            size={24}
            color="gray"
            onPress={() => {
              Alert.alert('削除しました。');
            }}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
