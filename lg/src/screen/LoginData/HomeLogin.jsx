import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const HomeLogin = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/Logo.png")} style={styles.logo} />
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ErpScreen')}>
          {/* <Text>ERP Data</Text> */}
          <Image source={require("../../assets/selecterp.png")} style={styles.image}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('DeviceDataScreen')}>
        <Image source={require("../../assets/device data.png")} style={styles.image}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('JC')}>
        <Image source={require("../../assets/Job card.png")} style={styles.image}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 10, // Reduce paddingTop to move everything up
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    // marginTop: -500, // Reduce or add a negative margin to move up further
    marginBottom: 90,

  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20, // Add a negative margin to move cards closer to the logo
  },
  image:{
    objectFit: 'fill'
  }
  // card: {
  //   padding: 30,
  //   backgroundColor: '#5555',
  //   borderRadius: 10,
  //   alignItems: 'center',
  //   width: '30%',
  //   marginHorizontal: 10,
  //   justifyContent:'center'
  // },
});
