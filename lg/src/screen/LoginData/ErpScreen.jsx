import React, { useState , useContext} from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity,Alert } from 'react-native';
import { colors } from "../../utils/colors";
import data from '../../assets/data.json';
import { useNavigation } from '@react-navigation/native'; 
import { DataContext } from '@/src/utils/DataContext';




const QualityOrderForm = () => {
  const { setErpData } = useContext(DataContext);

  const [productdesc, setProductdesc] = useState('');
  const [product_no, setProduct_no] = useState('');
  const [lot_no, setLot_no] = useState('');
  const [mfg_date, setMfg_date] = useState('');
  const [exp_date, setExp_date] = useState('');
  const [qtyorderno, setQtyorderno] = useState('');
  const [batch_qty_no, setBatch_qty_no] = useState('');
  const [sampled_qty, setSampled_qty] = useState('');
  const [device_name, setDevice_name] = useState('');

  
  const navigation = useNavigation(); // Initialize the navigation hook


  const populateData = () => {

    
    setProductdesc(data['Product Description']);
    setProduct_no(data['Product NO.']);
    setLot_no(data['Lot NO.']);
    setMfg_date(data['Mfg.Date']);
    setExp_date(data['Expry.Date']);
    setQtyorderno(data['Qlty.Order.NO']);
    setBatch_qty_no(data['Batch.Qlty']);
    setSampled_qty(data['Sampled.Qlty']);
    setDevice_name(data['Device Name']);
  };
      
  const handleSubmit = () => {
    setErpData({
      productdesc,
      product_no,
      lot_no,
      mfg_date,
      exp_date,
      qtyorderno,
      batch_qty_no,
      sampled_qty,
      device_name,
    });
    Alert.alert('Success', 'Data submitted');
    navigation.navigate("HomeLogin");
  };

  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Quality Order Details</Text>

      <TouchableOpacity style={styles.populatebutton} onPress={populateData}>
        <Text style={styles.populatetext}>Connect</Text>
      </TouchableOpacity>




      <View style={styles.row}>
        <Text style={styles.label}>Product Description</Text>
        <TextInput style={styles.input} value={productdesc} onChangeText={setProductdesc} />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Product NO.</Text>
        <TextInput style={styles.input}  value={product_no} onChangeText={setProduct_no} />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Lot NO.</Text>
        <TextInput style={styles.input}  value={lot_no} onChangeText={setLot_no} />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Mfg.Date</Text>
        <TextInput style={styles.input}  value={mfg_date} onChangeText={setMfg_date} />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Expry.Date</Text>
        <TextInput style={styles.input} value={exp_date} onChangeText={setExp_date} />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Qlty.Order.NO</Text>
        <TextInput style={styles.input}  value={qtyorderno} onChangeText={setQtyorderno} />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Batch.Qlty.NO</Text>
        <TextInput style={styles.input}  value={batch_qty_no} onChangeText={setBatch_qty_no} />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Sampled.Qlty</Text>
        <TextInput style={styles.input}  value={sampled_qty} onChangeText={setSampled_qty} />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Device Name</Text>
        <TextInput style={styles.input}  value={device_name} onChangeText={setDevice_name} />
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>   
      
      
       </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop:70,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 40,
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
  width: 70,  
  flexDirection: 'row', // Align icon and text side by side
  justifyContent: 'center', // Center icon and text
},
populatetext: {
  color: 'white',
  fontSize: 10,  // Smaller font size
  fontWeight: 'bold',
}
});

export default QualityOrderForm;
