import React from 'react';
import Auth from './AuthContext';

function Context({ children, ...props }) {
  return <Auth>{children}</Auth>;
}

export default Context;
