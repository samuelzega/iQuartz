import React from 'react';
import {View, Text} from 'react-native';
import Header from '../../Components/Header';
import styles from './style';
import {ScrollView} from 'react-native-gesture-handler';

const chat = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

export default function Chat() {
  return (
    <View>
      <Header />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>CHATS</Text>
        {chat.map((chat, index) => {
          return (
            <View key={index} style={styles.card}>
              <View style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.name}>John Lukas</Text>
                <Text style={styles.message}>Latest Message Delivered</Text>
              </View>
              <Text style={styles.time}>5:22 PM</Text>
            </View>
          );
        })}
        <View style={{marginBottom: 60}} />
      </ScrollView>
    </View>
  );
}
