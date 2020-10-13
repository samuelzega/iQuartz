import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../Assets/logoHorizontal.png')}
      />
      <Image
        style={styles.rightMenu}
        source={require('../../Assets/menu.png')}
      />
    </View>
  );
}
