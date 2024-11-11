import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Switch, Alert } from 'react-native';
import { DataContext } from '@/src/utils/DataContext';

const JC = () => {
  const { erpData, deviceData } = useContext(DataContext);
  const [isApprovalEnabled, setIsApprovalEnabled] = useState(false);
  const [isApprovalToggled, setIsApprovalToggled] = useState(false);

  const checkAllFieldsFilled = () => {
    return (
      erpData.productdesc &&
      erpData.product_no &&
      erpData.lot_no &&
      erpData.mfg_date &&
      erpData.exp_date &&
      erpData.qtyorderno &&
      erpData.batch_qty_no &&
      erpData.sampled_qty &&
      deviceData.device_name &&
      deviceData.calibration_used &&
      deviceData.calibration_concentration &&
      deviceData.calibrator_lost &&
      deviceData.blank &&
      deviceData.calibrator_expiry &&
      deviceData.factor &&
      deviceData.control_used &&
      deviceData.Specification &&
      deviceData.results_obtained
    );
  };

  useEffect(() => {
    setIsApprovalEnabled(checkAllFieldsFilled());
  }, [erpData, deviceData]);

  const handleApprovalToggle = (value) => {
    if (isApprovalEnabled) {
      setIsApprovalToggled(value);
      if (value) {
        Alert.alert("Success", "Submitted");
      }
    } else {
      Alert.alert("Incomplete Data", "Please fill in all fields before sending for approval.");
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
          <Text style={styles.value}>{erpData.productdesc || ''}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Product NO.:</Text>
          <Text style={styles.value}>{erpData.product_no || ''}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Lot NO:</Text>
          <Text style={styles.value}>{erpData.lot_no || ''}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>MFG Date:</Text>
          <Text style={styles.value}>{erpData.mfg_date || ''}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>EXP Date:</Text>
          <Text style={styles.value}>{erpData.exp_date || ''}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Quality Order NO:</Text>
          <Text style={styles.value}>{erpData.qtyorderno || ''}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>BTCH QTY:</Text>
          <Text style={styles.value}>{erpData.batch_qty_no || ''}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Sampled QTY:</Text>
          <Text style={styles.value}>{erpData.sampled_qty || ''}</Text>
        </View>
      </View>

      {/* Calibration Details Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Calibration Details</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Device Name:</Text>
          <Text style={styles.value}>{deviceData.device_name || ''}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Cal. used:</Text>
          <Text style={styles.value}>{deviceData.calibration_used || ''}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Cal. conc:</Text>
          <Text style={styles.value}>{deviceData.calibration_concentration || ''}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Cal. lost:</Text>
          <Text style={styles.value}>{deviceData.calibrator_lost || ''}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Blank:</Text>
          <Text style={styles.value}>{deviceData.blank || ''}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Cal. Expiry:</Text>
          <Text style={styles.value}>{deviceData.calibrator_expiry || ''}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Factor:</Text>
          <Text style={styles.value}>{deviceData.factor || ''}</Text>
        </View>
      </View>

      {/* Analytical Report Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Analytical Report</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Control used:</Text>
          <Text style={styles.value}>{deviceData.control_used || ''}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Specification:</Text>
          <Text style={styles.value}>{deviceData.Specification || ''}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Results obtained:</Text>
          <Text style={styles.value}>{deviceData.results_obtained || ''}</Text>
        </View>
      </View>

      {/* Send for Approval Toggle */}
      <View style={styles.toggleContainer}>
        <Text style={styles.label}>Submit for Approval</Text>
        <Switch
          value={isApprovalToggled}
          onValueChange={handleApprovalToggle}
          disabled={!isApprovalEnabled}
        />
      </View>
      <Text></Text>

    </ScrollView>
  );
};

export default JC;

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
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginTop: 15,
  },
});
