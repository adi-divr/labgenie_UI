import React, { useState , useContext} from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity,Alert } from 'react-native';
import { colors } from "../../utils/colors";
import data from '../../assets/data1.json';
import { DataContext } from '@/src/utils/DataContext';
import { useNavigation } from '@react-navigation/native'; 


const DeviceDataScreen = () => {
   
  const { setDeviceData } = useContext(DataContext);


    const [device_name, setDevice_name] = useState('');
    const [calibration_used, setCalibration_used] = useState('');
    const [calibration_concentration, setCalibration_concentration] = useState('');
    const [calibrator_lost, setCalibrator_lost] = useState('');
    const [blank, setBlank] = useState('');
    const [calibrator_expiry, setCalibrator_expiry] = useState('');
    const [factor, setFactor] = useState('');
    const [cal1, setCal1] = useState('');
    const [cal4, setCal4] = useState('');
    const [control_used, setControl_used] = useState('');
    const [Specification, setSpecification] = useState('');
    const [results_obtained, setResults_obtained] = useState('');


    const navigation = useNavigation(); 
    
    const populateData = () => {

      

      setDevice_name(data['Device Name']);
      setCalibration_used(data['Cal.used']);
      setCalibration_concentration(data['Cal.conc']);
      setCalibrator_lost(data['Cal.lost']);
      setBlank(data['Blank']);
      setCalibrator_expiry(data['Cal.Expry']);
      setFactor(data['Factor']);
      setCal1(data['Cal1']);
      setCal4(data['Cal4']);
      setControl_used(data['Control used']);
      setSpecification(data['Specification']);
      setResults_obtained(data['Results obtained']);


    };


    const handleSubmit = () => {
      setDeviceData({
        device_name,
        calibration_used,
        calibration_concentration,
        calibrator_lost,
        blank,
        calibrator_expiry,
        factor,
        cal1,
        cal4,control_used,Specification,results_obtained
      });
      Alert.alert('Success', 'Data submitted');
      navigation.navigate("HomeLogin");

      };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Device Data</Text>

      <TouchableOpacity style={styles.populatebutton} onPress={populateData}>
        <Text style={styles.populatetext}>Connect</Text>
      </TouchableOpacity>


      <View style={styles.row}>
        <Text style={styles.label}>Device Name</Text>
        <TextInput style={styles.input}  value={device_name} onChangeText={setDevice_name} />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Cal.used</Text>
        <TextInput style={styles.input}  value={calibration_used} onChangeText={setCalibration_used} />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Cal.conc</Text>
        <TextInput style={styles.input}  value={calibration_concentration} onChangeText={setCalibration_concentration} />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Cal.lost</Text>
        <TextInput style={styles.input}  value={calibrator_lost} onChangeText={setCalibrator_lost} />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Blank</Text>
        <TextInput style={styles.input}  value={blank} onChangeText={setBlank} />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Cal.Expry</Text>
        <TextInput style={styles.input}  value={calibrator_expiry} onChangeText={setCalibrator_expiry} />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Factor</Text>
        <TextInput style={styles.input}  value={factor} onChangeText={setFactor} />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Cal1</Text>
        <TextInput style={styles.input}  value={cal1} onChangeText={setCal1} />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Cal4</Text>
        <TextInput style={styles.input}  value={cal4} onChangeText={setCal4} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Control used</Text>
        <TextInput style={styles.input}  value={control_used} onChangeText={setControl_used} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Specification</Text>
        <TextInput style={styles.input}  value={Specification} onChangeText={setSpecification} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Results obtained</Text>
        <TextInput style={styles.input}  value={results_obtained} onChangeText={setResults_obtained} />
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>   
       <Text></Text>
       <Text></Text>
       <Text></Text>
       <Text></Text>
       <Text></Text>

          </ScrollView>
  )
}

export default DeviceDataScreen

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
      padding: 20,
      marginTop:60,
      backgroundColor: '#f8f8f8',
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15,
    },
    label: {
      flex: 1,
      fontSize: 16,
      color: '#333',
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ddd',
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 15,
      backgroundColor: '#fff',
    },
    submitButton:{
        marginTop: 20,
        backgroundColor: colors.primary || "#4CAF50", // Adjust color as per your theme
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
        alignItems: "center",
        width: "100%",
      },
      buttonText:{
        color: colors.white,
        fontSize: 16,
        fontWeight: "bold"
    },
    populatebutton: {
      marginTop: 10,
      backgroundColor: '#4CAF50',
      paddingVertical: 7,  // Reduced padding for height
      paddingHorizontal: 10,  // Reduced padding for width
      borderRadius: 4,
      alignItems: 'center',
      width: 70,  // Fixed width to make it smaller
      flexDirection: 'row', // Align icon and text side by side
      justifyContent: 'center', // Center icon and text
    },
    populatetext: {
      color: 'white',
      fontSize: 10,  // Smaller font size
      fontWeight: 'bold',
    }
  })