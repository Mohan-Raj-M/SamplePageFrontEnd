import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

function Auth({ children, ...props }) {
  const [isLoader, setLoader] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoader, setLoader }}>
      {children}
    </AuthContext.Provider>
  );
}

export default Auth;
