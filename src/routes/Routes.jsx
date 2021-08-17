import React, { useContext } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import LoadingOverlay from 'react-loading-overlay';
import { AuthContext } from '../reusables/context/AuthContext';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUpMethod/SignUp';
import HomePage from '../pages/HomePage/HomePage';

function Routes(props) {
  const { isLoader } = useContext(AuthContext);
  const location = useLocation();
  return (
    <>
      <LoadingOverlay active={isLoader} spinner>
        <div
          style={{
            position: 'absolute',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: '45%',
            marginTop: 200
          }}
        ></div>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />

          <Route path='/' exact component={HomePage} />
        </Switch>
      </LoadingOverlay>
    </>
  );
}

export default Routes;
