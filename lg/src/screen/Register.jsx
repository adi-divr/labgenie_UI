import { StyleSheet, View, Image, TouchableOpacity, TextInput, Text,Alert } from 'react-native';
import React, { useState , useContext} from 'react';
import { colors } from "../utils/colors";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from 'expo-router';
import {registerUser } from '../../api'

const Register = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goBack = () => {
    navigation.navigate("Home");
  };

  const handleRegisterPress = async () => {
    try {
      const userData = { username, email, password };
      const response = await registerUser(userData);
      Alert.alert('Success', 'Registration successful');
      navigation.navigate("Login");                                 ///////////////////////
    } catch (error) {
      Alert.alert('Error', 'Failed to register');
    }
  };

  return (
    <View style={styles.mainContainer}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={goBack}>
        <FontAwesome name="arrow-left" size={30} color="#000" />
      </TouchableOpacity>

      {/* Main Content */}
      <View style={styles.container}>  

      <Image source={require("../assets/Logo.png")} ></Image>

        <Image source={require("../assets/asset1.png")} style={styles.image1} />

        {/* Form */}
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Enter your username" style={styles.input}  value={username}
              onChangeText={setUsername}/>
          </View>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Enter your email" style={styles.input} value={email}
              onChangeText={setEmail} keyboardType="email-address" />
          </View>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Enter your password" style={styles.input} value={password}
              onChangeText={setPassword} secureTextEntry />
          </View>

          {/* Register Button */}
          <TouchableOpacity style={styles.registerButton} onPress={handleRegisterPress}>
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  backButton: {
    padding: 15,
    backgroundColor: colors.white,
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 50,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 70,
  },
  image1: {
    height: 215,
    width: 250,
    marginBottom: 20,
    marginTop:30

  },
  formContainer: {
    marginTop: 50,
    width: '80%',
    alignItems: "center",
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.grey || "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: colors.white,
  },
  registerButton: {
    marginTop: 20,
    backgroundColor: colors.primary || "#4CAF50", // Adjust color as per your theme
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
  },
  registerButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});
