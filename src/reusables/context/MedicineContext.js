import React, { createContext, useEffect, useState } from 'react';
import { api_call } from '../../helper_functions/api';

export const MedicineContext = createContext(null);

function Medicines({ children, ...props }) {
  const [medicines, setMedicines] = useState([]);
  useEffect(() => {
    fetchMedicineData();
  }, []);

  const fetchMedicineData = async () => {
    const { responseData, error } = await api_call({
      apiUrl: '/products/getProducts',
      method: 'get'
    });
    if (!error) {
      console.log(responseData);
      setMedicines(responseData);
    }
  };

  return (
    <MedicineContext.Provider value={{ medicines }}>
      {children}
    </MedicineContext.Provider>
  );
}

export default Medicines;
