import React from 'react';
import {
  StyleSheet, View, TextInput,
} from 'react-native';

import CircleButton from '../components/CircleButton';
import KeyboardAvoidingSafeView from '../components/KeyboardAvoidingSafeView';

export default function MemoEditScreen(props) {
  const { navigation } = props;
  return (
    <KeyboardAvoidingSafeView style={styles.container}>
      <View style={styles.inputContaner}>
        <TextInput value="買い物リスト" multiline style={styles.input} />
      </View>
      <CircleButton
        name="check"
        onPress={() => {
          navigation.goBack();
        }}
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
