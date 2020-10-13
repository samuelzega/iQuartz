import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../../Styles/Color';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.orange,
    paddingVertical: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default function Title({title}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}
