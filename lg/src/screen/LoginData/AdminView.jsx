import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';



const AdminView = () => {
    const navigation = useNavigation();
  
    return (
      <View style={styles.container}>
        <Image source={require("../../assets/Logo.png")} style={styles.logo} />
        <View style={styles.cardContainer}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ErpScreen')}>
          <Image source={require("../../assets/selecterp.png")} style={styles.image}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('DeviceDataScreen')}>
        <Image source={require("../../assets/device data.png")} style={styles.image}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('AdminLogin')}>
          <Image source={require("../../assets/Job card.png")} style={styles.image}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default AdminView;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // paddingTop: 40, // Reduce paddingTop to move everything up
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      marginBottom: 20,
  
    },
    cardContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      paddingHorizontal: 20,
      marginTop: 20, // Add a negative margin to move cards closer to the logo
    },
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
  