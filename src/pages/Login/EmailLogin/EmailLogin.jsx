import React, { useState, useContext } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import GradientButton from '../../../reusables/GradientButton/GradientButton';
import Toast from '../../../reusables/Toast/Toast.jsx';

import Input from '../../../reusables/input/Input';
import { AuthContext } from '../../../reusables/context/AuthContext';
import styles from './EmailLogin.module.css';
import { useHistory } from 'react-router-dom';
import { validateLogin } from '../../../utils/validateCredentials';
import { useToasts } from 'react-toast-notifications';

const axios = require('axios');
function EmailLogin(props) {
  const { addToast } = useToasts();
  const [data, setData] = useState({
    email: '',
    password: ''
  });
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [modal, setModal] = useState(false);
  const [show, setShow] = useState(false);
  const { setLoader } = useContext(AuthContext);
  const history = useHistory();
  const { isValid, error } = validateLogin(data);
  const send = (e) => {
    if (isValid) {
      setLoader(true);
      e.preventDefault();
      console.log(data);
      axios
        .post('http://127.0.0.1:5000/login', data)
        .then(function (response) {
          console.log(response);
          localStorage.setItem('user', response.data.user.email);
          setLoader(false);
          setTitle('Success');
          setMessage('Logged in succesfull');
          setModal(true);
          history.push('/');
        })

        .catch(function (error) {
          setTitle('Error');
          console.log(error.response.data);
          setMessage(error.response.data);
          setModal(true);
          console.log(error);
          setLoader(false);
        });
    } else {
      e.preventDefault();
      setTitle('Error');
      setMessage(error);
      setModal(true);
    }
  };
  return (
    <>
      <Toast
        isOpen={modal}
        closeModal={() => setModal(false)}
        title={title}
        message={message}
      />
      <Form className={styles.form}>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email</Form.Label>
          <InputGroup className='mb-3'>
            <Input
              type='email'
              placeholder='Enter your email'
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </InputGroup>
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <InputGroup style={{ flexDirection: 'row' }}>
            <Input
              type={show ? 'none' : 'password'}
              placeholder='Enter your password'
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </InputGroup>
        </Form.Group>

        <div style={{ textAlign: 'center' }}>
          <GradientButton onClick={send} on title='Log In' />
        </div>
      </Form>
    </>
  );
}

export default EmailLogin;
