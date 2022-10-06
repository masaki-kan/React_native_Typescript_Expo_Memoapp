import React from 'react';
import {
  View, StyleSheet, Text, TextInput, TouchableOpacity,
} from 'react-native';
import AppBar from '../components/AppBar';
import SubmitButton from '../components/SubmitButton';

export default function LogInScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.LogInContainer}>
        <Text style={styles.title}>Login</Text>
        <TextInput value="" placeholder="Email Adress" style={styles.input} />
        <TextInput value="" placeholder="Pass Word" style={styles.input} />
        <SubmitButton name="Login" />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not Registed?</Text>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Sing Up Here</Text>
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
  buttonContainer: {
    backgroundColor: '#0286FF',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 24,
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    paddingVertical: 8,
    paddingHorizontal: 24,
    color: '#ffffff',
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
