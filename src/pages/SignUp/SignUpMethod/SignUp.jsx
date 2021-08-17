import React, { useState, useContext } from 'react';
import { AuthContext } from '../../../reusables/context/AuthContext';
import styles from './SignUp.module.css';
import Template from '../../../reusables/LoginSignupTemplate/Template';
import EmailSignUp from '../EmailSignUp/EmailSignUp';
import { useHistory, Link } from 'react-router-dom';
function SignUp(props) {
  const [signInMethod, setSignInMethod] = useState('Email');
  const { isLoader } = useContext(AuthContext);
  const history = useHistory();

  return (
    <>
      <Template
        title={signInMethod === 'Email' ? 'Welcome' : null}
        subTitle={signInMethod === 'Email' ? 'Sign up with' : null}
        content={signInMethod === 'Email' ? <EmailSignUp /> : null}
        innerDivStyle={
          signInMethod !== null
            ? window.innerWidth < 569
              ? { width: '100%', alignSelf: 'center', marginLeft: '0%' }
              : { width: 360 }
            : null
        }
      />
    </>
  );
}

export default SignUp;
