import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import { Button } from './components';
import { retrieve } from './serivces/reservation';
import logo from './components/logo.jpg';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function App() {
  const [reserve, setReserve] = useState([]);
  const [loading, setLoading] = useState(false);
////////
function handleGoPress() {
  setLoading(true);
  retrieve().then((data: any) => {
    setLoading(false);
    if (data) { 
      setReserve(data);
    }
  }).catch(error => {
    setLoading(false);
  });
}
function renderReservations() {
  return reserve.map((m: any) => (
    <View key={m.id} style={styles.row}>
      <Image
        style={styles.image}
        source={{
          uri: m.photo,
        }}
        resizeMode="contain"
      />
      <Text>First Name: {m.first_name} <br />
            Last Name:  {m.last_name} <br />
            Phone:         {m.phone} <br />
            Email:            {m.email} <br />
            Reservation Date: {m.date}       
            
      </Text>
    </View>
  ));
}

return (
  <View style={styles.container}>
    <View style={styles.header}>
      <div>
      
      </div>
      <View style={styles.button}>  
      <Image style={styles.logo} source={logo} />
      <Image style={styles.logo} source={require('./components/logo.svg')} />
      <Button title="Display Reservations" onPress={handleGoPress} />
      </View>
    </View>
    <View style={styles.body}>
      {loading ? <ActivityIndicator /> : renderReservations()}
    </View>
    <StatusBar style="auto" />
  </View>
);
}
////
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: wp('100%'),
    },
  header: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: 'teal',
    textAlign: 'center',
    justifyContent: 'center',
    },
  button: {
      flexDirection: 'row',
      backgroundColor: 'teal',
      alignSelf: "flex-start",
      alignItems: 'center',
  },
  body: {
    flex: 1,
    backgroundColor: 'mintcream',
    padding: 15,
  },
  row: {
    backgroundColor: 'mediumaquamarine',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    flexDirection: 'row',
  },
  image: {
    width: 90,
    height: hp('10.5%'),
    borderRadius: 4,
    marginHorizontal: "1%",
    marginTop: 3,
    marginBottom: 3,
  },
  logo: {
   resizeMode: 'contain',
  }
});

