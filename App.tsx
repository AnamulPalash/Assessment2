import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import { Input, Button } from './components';
import { retrieve } from './serivces/reservation';
import logo from './components/logo.jpg';
export default function App() {

  const [input, setInput] = useState('');
  const [reserve, setReserve] = useState([]);
  const [loading, setLoading] = useState(false);
////////
function handleGoPress() {
  //if (input.trim().length < 1) { // #1.a
  //  return;
  //}
  setLoading(true);
  retrieve().then((data: any) => {
    setLoading(false);
    if (data) { // #1.b
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
        <img src={logo} alt="Reservation Logo" height="50" width='150'  />
      </div>
      <View style={styles.button}>
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
  },
  header: {
    flexDirection: 'row',
    padding: 20,
    gap: 15,
    backgroundColor: 'teal',
    },
  button: {
      flexDirection: 'row',
      backgroundColor: 'teal',
      alignSelf: "flex-start",
      marginLeft: "40%",
  },
  body: {
    flex: 1,
    backgroundColor: 'mintcream',
    padding: 15,
  },
  row: { // #2
    backgroundColor: 'mediumaquamarine',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    flexDirection: 'row',
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 4,
    marginHorizontal: "1%",
    marginTop: 3,
    marginBottom: 3,
  },
});

