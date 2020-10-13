import React, {useState, useEffect} from 'react';
import {Text, View, PermissionsAndroid} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Header from '../../Components/Header';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './style';
import Title from './Components/Title';

export default function Home() {
  const [currentLocation, setCurrentLocation] = useState({
    latitudeDelta: 0.003,
    longitudeDelta: 0.003,
    latitude: -6.2,
    longitude: 106.816666,
  });
  useEffect(() => {
    reqPermission();
  }, []);

  const user = [1, 2];
  const pending = [1, 2, 3, 4, 5];

  const reqPermission = async () => {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
  };

  return (
    <View>
      <Header />
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          showsIndoorLevelPicker
          followsUserLocation
          style={styles.map}
          region={currentLocation}
          onRegionChangeComplete={(region) => {
            setCurrentLocation({
              ...currentLocation,
              latitude: region.latitude,
              longitude: region.longitude,
            });
          }}>
          <Marker
            draggable
            coordinate={currentLocation}
            title="Your Location"
            description="Choosen Location"
          />
        </MapView>
      </View>
      <ScrollView style={styles.section2}>
        <Title title="Active Users" />
        {user.map((user, index) => {
          return (
            <View key={index} style={styles.card}>
              <View style={styles.profile} />
              <View>
                <Text>User's Name</Text>
                <Text>Distance: 00 KM</Text>
              </View>
            </View>
          );
        })}
        <Title title="Pending Acceptance" />
        {pending.map((user, index) => {
          return (
            <View key={index} style={styles.card}>
              <View style={styles.profile} />
              <View>
                <Text>Job: MS-2006-0006. Date: 12/6/2020 9:53:57</Text>
                <Text>Visit cost: $0</Text>
                <Text>Additional cost: $0</Text>
                <Text>Paid ammount: $0</Text>
                <Text style={{fontWeight: 'bold'}}>
                  Status pending Acceptance
                </Text>
              </View>
            </View>
          );
        })}
        <View style={{margin: 40}} />
      </ScrollView>
    </View>
  );
}
