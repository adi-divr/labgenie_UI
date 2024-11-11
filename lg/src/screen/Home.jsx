import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import {colors} from "../utils/colors"
import { TouchableOpacity } from 'react-native'
import { useNavigation } from 'expo-router'


const Home = () => {
  const navigation = useNavigation()

  const handleLogin = () => {
    navigation.navigate("Login")
  }

  const handleRegister = () => {
    navigation.navigate("Register")

  }
  return (
    <View style={styles.container}>
       <Image source={require("../assets/Logo.png")} ></Image>
 <Image source={require("../assets/asset1.png")} style={styles.image1}></Image>
 <Image source={require("../assets/asset2.png")} style={styles.wordsImage}></Image>
 <Image source={require("../assets/asset3.png")} style={styles.logo}></Image>

<View style={styles.buttonContainer}>
<TouchableOpacity style={[styles.loginButtonWrapper, { backgroundColor: colors.primary }]} onPress={handleLogin}>

    <Text style= {styles.logintext}>Login</Text>
  </TouchableOpacity>
  <TouchableOpacity style= {styles.loginButtonWrapper} onPress={handleRegister}>
    <Text style= {styles.signuptext}>Sign-Up</Text>
  </TouchableOpacity>
</View>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.white,
    alignItems:"center",
    justifyContent:"center"
  },
  image1:{
    height:215,
    width:250,
    marginTop:30
  },
  wordsImage:{
    height:105,
    width:307,
    marginVertical:10
  },
  logo: {
    position: "absolute",
    bottom: 20, // Adjust this value as needed for padding
    height: 13,
    width: 100,
  },
  buttonContainer:{
    flexDirection: "row",
    marginTop:90,
    borderWidth:2,
    borderColor: colors.primary,
    width:"70%",
    height:60,
    borderRadius:100
  },
  loginButtonWrapper:{
    justifyContent:"center",
    alignItems:"center",
    width:"50%",
    borderRadius: 98,
  }
  ,logintext:{
    color:colors.white,
    fontSize:18,
  },
  signuptext:{
    color:colors.black,
    fontSize:18,
  },
  // logo:{
  //   // marginBottom:1
  // }
})