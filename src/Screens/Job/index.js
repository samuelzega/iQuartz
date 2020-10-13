import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import Header from '../../Components/Header';
import {ScrollView} from 'react-native-gesture-handler';

const job = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

export default function Job() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>JOBS</Text>
        <View style={styles.tab}>
          <Text style={styles.section1}>Cancelled By Homeowner</Text>
          <Text style={styles.section2}>Rejected By Vendor</Text>
          <Text style={styles.section2}>Job Accepted</Text>
          <Text style={styles.section3}>All Jobs</Text>
        </View>

        {job.map((job, index) => {
          return (
            <View key={index} style={styles.card}>
              <Text>Job: MS-2006-0006. Date: 12/6/2020 9:53:57</Text>
              <Text>TESTADMIN</Text>
              <Text>490 Admiralty Link, Singapore 750490</Text>
              <Text>Visit cost: $1</Text>
              <Text>Material cost: $65</Text>
              <Text>Labout cost: $60</Text>
              <Text>Additional cost: $0</Text>
              <Text>Paid ammount: $0</Text>
              <Text style={styles.bold}>Status pending Acceptance</Text>
            </View>
          );
        })}
        <View style={{margin: 30}} />
      </ScrollView>
    </View>
  );
}
