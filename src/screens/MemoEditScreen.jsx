import React from 'react';
import {
  StyleSheet, View, TextInput, KeyboardAvoidingView,
} from 'react-native';

import CircleButton from '../components/CircleButton';

export default function MemoEditScreen(props) {

  const { navigation } = props;
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">

      <View style={styles.inputContaner}>
        <TextInput value="買い物リスト" multiline style={styles.input} />
      </View>
      <CircleButton
        name="check"
        onPress={() => {
          navigation.goBack();
        }}
      />
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
