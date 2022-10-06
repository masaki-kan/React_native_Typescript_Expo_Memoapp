import React from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function MemoListsItem() {
  return (
    <View>
      <View style={styles.memoListsItem}>
        {/* リストの左側 */}
        <View>
          <Text style={styles.memoListsItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListsItemData}>2022年10月6日</Text>
        </View>
        {/* 削除ボタン */}
        <TouchableOpacity>
          <Feather name="x" size={16} color="gray" />
        </TouchableOpacity>
      </View>
      <View style={styles.memoListsItem}>
        {/* リストの左側 */}
        <View>
          <Text style={styles.memoListsItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListsItemData}>2022年10月6日</Text>
        </View>
        {/* 削除ボタン */}
        <TouchableOpacity>
          <Feather name="x" size={16} color="gray" />
        </TouchableOpacity>
      </View>
      <View style={styles.memoListsItem}>
        {/* リストの左側 */}
        <View>
          <Text style={styles.memoListsItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListsItemData}>2022年10月6日</Text>
        </View>
        {/* 削除ボタン */}
        <TouchableOpacity>
          <Feather name="x" size={16} color="gray" />
        </TouchableOpacity>
      </View>
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
});
