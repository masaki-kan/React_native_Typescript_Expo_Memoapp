import React from 'react';
import {
  StyleSheet, View, TextInput, KeyboardAvoidingView,
} from 'react-native';
import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

export default function MemoEditScreen() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <AppBar />
      <View style={styles.inputContaner}>
        <TextInput value="買い物リスト" multiline style={styles.input} />
      </View>
      <CircleButton name="check" />
    </KeyboardAvoidingView>
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
