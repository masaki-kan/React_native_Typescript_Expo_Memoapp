import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PropTypes } from 'prop-types'; // propsのtype

function Hellow(props) {
  // const children = props.children; →もっといい書き方がある ↓
  // propsからchildrenを抜き出す = 分割代入 (Destructing Assigment)
  const { children, bang, style } = props;
  return (
    <View>
      {/* <Text style={styles.text}> */}
      {/** 配列で追加していく（styleのプロパティが一緒なら上書き、違うなら追加） */}
      <Text style={[styles.text, style]}>
        {`Hello ${children}${bang ? '!' : ''}`}
      </Text>
    </View>
  );
}

// hello()に渡って来るpropsにはchildrenが文字列で、必須項目のプロパティである
Hellow.propTypes = {
  children: PropTypes.string.isRequired,
  bang: PropTypes.bool,
  style: PropTypes.shape(),
};

Hellow.defaultProps = {
  bang: false,
  style: null,
};

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    backgroundColor: 'red',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16,
  },
});

export default Hellow;
