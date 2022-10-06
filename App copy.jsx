import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Hellow from './src/components/Hellow';

export default function App() {
  return (
    <View style={styles.container}>
      <Hellow bang>World</Hellow>
      {/** スタイルの追加はオブジェクトで記入 */}
      <Hellow style={{ fontSize: 16, fontStyle: 'italic' }}>Small World</Hellow>
      <Text>Open up App.js to start working on your app!</Text>
      {/* eslint-disable-next-line */ /* 次の文章はeslintは適応させない */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
