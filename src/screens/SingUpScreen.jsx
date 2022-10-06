import React from 'react';
import {
  View, StyleSheet, Text, TextInput, TouchableOpacity
} from 'react-native';
import AppBar from '../components/AppBar';
import SubmitButton from '../components/SubmitButton';

export default function SingUpScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.LogInContainer}>
        <Text style={styles.title}>SingUp</Text>
        <TextInput value="" placeholder="Email Adress" style={styles.input} />
        <TextInput value="" placeholder="Pass Word" style={styles.input} />
        <SubmitButton name="SingUp" />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already Registed?</Text>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  LogInContainer: {
    paddingHorizontal: 27, // 横
    paddingVertical: 24, // 縦
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
    height: 48,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dddddd',
    marginBottom: 16,
    paddingHorizontal: 8,
  },

  footer: {
    flexDirection: 'row',
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#0286FF',
  },
});
