import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

// import AppBar from '../components/AppBar';
import MemoListsItem from '../components/MemoListsItem';
import CircleButton from '../components/CircleButton';
import LogOutButton from '../components/LogOutButton';

export default function MemoListScreen(props) {
  const { navigation } = props;

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);

  return (
    <View style={styles.container}>
      {/* memo ヘッダー部分 */}
      {/* <AppBar /> */}
      {/* memo リスト部分 */}
      <MemoListsItem />
      {/** ＋ボタン */}
      <CircleButton
        name="plus"
        onPress={() => {
          navigation.navigate('MemoCreate');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
});
