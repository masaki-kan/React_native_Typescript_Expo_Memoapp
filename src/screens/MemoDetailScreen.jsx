import React from 'react';
import {
  StyleSheet, View, Text, ScrollView,
} from 'react-native';
import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

export default function MemoDetailScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.MemoHeader}>
        <Text style={styles.MemoHeaderTitle}>買い物リスト</Text>
        <Text style={styles.MemoHeaderDate}>2022年10月6日</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoText}>
          アプリケーションが成長するにつれて、型チェックによって多くの不具合を見つけられるようになります。
          アプリケーションによっては、Flow もしくは TypeScript のような JavaScript 拡張を使ってアプリケーション全体の型チェックを行うことができるでしょう。
          しかしそれらを使用せずとも、React は組み込みの型チェック機能を備えています。
          コンポーネントの props に型チェックを行うために、特別な propTypes プロパティを割当てることができます。
        </Text>
      </ScrollView>
      <CircleButton style={{ top: 160, bottom: 'auto' }} name="edit-2" />
    </View>
  );
}

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
