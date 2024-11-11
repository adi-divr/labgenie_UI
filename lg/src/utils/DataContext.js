import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [erpData, setErpData] = useState({});
    const [deviceData, setDeviceData] = useState({});

    


  return (
    <DataContext.Provider value={{ erpData, setErpData, deviceData, setDeviceData }}>
      {children}
    </DataContext.Provider>
  );
};
