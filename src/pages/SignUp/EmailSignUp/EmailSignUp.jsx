import React, { useState, useContext } from 'react';
import styles from './EmailSignUp.module.css';
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData
} from 'react-country-region-selector';
import Form from 'react-bootstrap/Form';
import Input from '../../../reusables/input/Input';
import GradientButton from '../../../reusables/GradientButton/GradientButton';

import { InputGroup, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../../reusables/context/AuthContext';
import { validateRegister } from '../../../utils/validateCredentials';
import { useToasts } from 'react-toast-notifications';
import Toast from '../../../reusables/Toast/Toast.jsx';
const axios = require('axios');

function EmailSignUp({ handleBack }) {
  const history = useHistory();
  const { setLoader } = useContext(AuthContext);
  const { addToast } = useToasts();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    country: '',
    state: ''
  });
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [cp, setCp] = useState('');
  const { isValid, error } = validateRegister(data, cp);
  const [modal, setModal] = useState(false);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const inputRef = React.useRef(null);
  const send = async (e) => {
    e.preventDefault();
    if (isValid) {
      setLoader(true);
      e.preventDefault();
      console.log(data);
      // const { responseData, error } = await api_call({
      //   apiUrl: "/users/signIn",
      //   method: "post",
      //   body:data,
      // });
      // if (!error) {
      //   console.log(responseData);
      // }
      axios
        .post('http://127.0.0.1:5000/sign-up', data)
        .then(function (response) {
          console.log(response);
          // localStorage.setItem('token', response.data.token);
          setLoader(false);
          setTitle('Success');
          setMessage('Account registered successfully');
          setModal(true);
          history.push('/login');
        })
        .catch(function (e) {
          console.log(e);
          setTitle('Error');
          setMessage('Email already exists');
          setModal(true);
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
          <Form.Label>Name</Form.Label>
          <InputGroup>
            <Input
              type='name'
              placeholder='Enter your name'
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </InputGroup>
        </Form.Group>

        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <InputGroup>
            <Input
              type='email'
              placeholder='Enter your email'
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </InputGroup>
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Mobile</Form.Label>
          <InputGroup>
            <Input
              type='phone'
              placeholder='Enter your phone number'
              value={data.phone}
              onChange={(e) => setData({ ...data, phone: e.target.value })}
            />
          </InputGroup>
        </Form.Group>
        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <InputGroup>
            <Input
              type={show ? 'none' : 'password'}
              data-tip
              data-for='title required'
              placeholder='Enter your password'
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </InputGroup>
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <InputGroup>
            <Input
              type={show1 ? 'none' : 'password'}
              placeholder='Confirm password'
              value={data.cp}
              onChange={(e) => setCp(e.target.value)}
            />
          </InputGroup>
        </Form.Group>
        <CountryDropdown
          style={{
            height: 30,
            marginTop: 20,
            borderColor: '#1bc2ad',
            width: 240
          }}
          value={data.country}
          onChange={(val) => setData({ ...data, country: val })}
        />
        <RegionDropdown
          style={{
            height: 30,
            marginTop: 20,
            borderColor: '#1bc2ad',
            marginBottom: '10'
          }}
          country={data.country}
          value={data.state}
          onChange={(val) => setData({ ...data, state: val })}
        />
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30
          }}
        >
          <GradientButton
            title='Cancel'
            variant='Outline'
            color='red'
            style={{ margin: 10, width: '40%' }}
            onClick={handleBack}
          />
          <GradientButton
            title='Sign Up'
            style={{ margin: 10, width: '40%' }}
            onClick={send}
          />
        </span>
      </Form>
    </>
  );
}

export default EmailSignUp;
