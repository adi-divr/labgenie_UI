import React, { useState , useContext} from 'react';
import { StyleSheet, Text, View, ScrollView, Button , Alert} from 'react-native';
import { RadioButton } from 'react-native-paper';

import data from '../../assets/data.json'; 
import data1 from "../../assets/data1.json"; 

const AdminLogin = () => {
    const [approvalStatus, setApprovalStatus] = useState(null); // State for approval status
    const [message, setMessage] = useState('');
  const erpData = data;  

  const deviceData = data1; 
  
  const handleSubmit = () => {
    if (approvalStatus) {
       // setMessage();
        Alert.alert(`${approvalStatus} - Your action has been submitted.`);
    } else {
        setMessage('Please select an action (Approve or Reject).');
    }
};
  
  return (
    <ScrollView style={styles.container}>
  {/* Quality Order Details Card */}
  <Text></Text>
  <View style={styles.card}>
    <Text style={styles.cardTitle}>Quality Order Details</Text>
    <View style={styles.row}>
      <Text style={styles.label}>Product Description:</Text>
      <Text style={styles.value}>{erpData["Product Description"] || ''}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>Product NO.:</Text>
      <Text style={styles.value}>{erpData["Product NO."] || ''}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>Lot NO:</Text>
      <Text style={styles.value}>{erpData["Lot NO."] || ''}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>MFG Date:</Text>
      <Text style={styles.value}>{erpData["Mfg.Date"] || ''}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>EXP Date:</Text>
      <Text style={styles.value}>{erpData["Expry.Date"] || ''}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>Quality Order NO:</Text>
      <Text style={styles.value}>{erpData["Qlty.Order.NO"] || ''}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>BTCH QTY:</Text>
      <Text style={styles.value}>{erpData["Batch.Qlty"] || ''}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>Sampled QTY:</Text>
      <Text style={styles.value}>{erpData["Sampled.Qlty"] || ''}</Text>
    </View>
  </View>

  {/* Calibration Details Card */}
  <View style={styles.card}>
    <Text style={styles.cardTitle}>Calibration Details</Text>
    <View style={styles.row}>
      <Text style={styles.label}>Device Name:</Text>
      <Text style={styles.value}>{deviceData["Device Name"] || ''}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>Cal. used:</Text>
      <Text style={styles.value}>{deviceData["Cal.used"] || ''}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>Cal. conc:</Text>
      <Text style={styles.value}>{deviceData["Cal.conc"] || ''}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>Cal. lost:</Text>
      <Text style={styles.value}>{deviceData["Cal.lost"] || ''}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>Blank:</Text>
      <Text style={styles.value}>{deviceData["Blank"] || ''}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>Cal. Expiry:</Text>
      <Text style={styles.value}>{deviceData["Cal.Expry"] || ''}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>Factor:</Text>
      <Text style={styles.value}>{deviceData["Factor"] || ''}</Text>
    </View>
  </View>

  {/* Analytical Report Card */}
  <View style={styles.card}>
    <Text style={styles.cardTitle}>Analytical Report</Text>
    <View style={styles.row}>
      <Text style={styles.label}>Control used:</Text>
      <Text style={styles.value}>{deviceData["Control used"] || ''}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>Specification:</Text>
      <Text style={styles.value}>{deviceData["Specification"] || ''}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>Results obtained:</Text>
      <Text style={styles.value}>{deviceData["Results obtained"] || ''}</Text>
    </View>
  </View>


  <View style={styles.card}>
        <Text style={styles.cardTitle}>Take Action:</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Approve:</Text>
          <RadioButton
            value="Approve"
            status={approvalStatus === 'Approve' ? 'checked' : 'unchecked'}
            onPress={() => setApprovalStatus('Approve')}
          />
          <Text style={styles.label}>Reject:</Text>
          <RadioButton
            value="Reject"
            status={approvalStatus === 'Reject' ? 'checked' : 'unchecked'}
            onPress={() => setApprovalStatus('Reject')}
          />
        </View>
        <Button title="Submit" onPress={handleSubmit} />
        {/* {message && <Text style={styles.message}>{message}</Text>} */}
      </View>
      <Text></Text>
    </ScrollView>

  );
};

export default AdminLogin;

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      padding: 10,
      backgroundColor: '#f0f0f0',
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 15,
      marginVertical: 10,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#333',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 5,
    },
    label: {
      fontSize: 14,
      color: '#666',
      fontWeight: 'bold',
    },
    value: {
      fontSize: 14,
      color: '#333',
    },
    message: {
      fontSize: 16,
      color: '#333',
      fontWeight: 'bold',
      marginTop: 10,
    },
  });
