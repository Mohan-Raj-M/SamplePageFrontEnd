import _ from 'lodash';

export const askprice = (data) => {
  let mobile = _.isEmpty(data) ? '' : data;
  let error = {};
  if (_.isEmpty(mobile)) {
    error = 'Mobile no is required';
  }
  return {
    isValid: _.isEmpty(error),
    error
  };
};

export const validateLogin = (data) => {
  let email = _.isEmpty(data.email) ? '' : data.email;
  let password = _.isEmpty(data.password) ? '' : data.password;
  let error = {};

  if (_.isEmpty(password)) {
    error = 'Password field is required';
  }
  if (_.isEmpty(email)) {
    error = 'Email field is required';
  }

  return {
    isValid: _.isEmpty(error),
    error
  };
};

export const validateRegister = (data, cp) => {
  let email = _.isEmpty(data.email) ? '' : data.email;
  let password = _.isEmpty(data.password) ? '' : data.password;
  let confirmpassword = _.isEmpty(cp) ? '' : cp;
  let mobile = _.isEmpty(data.phone) ? '' : data.phone;
  let name = _.isEmpty(data.name) ? '' : data.name;
  let country = _.isEmpty(data.country) ? '' : data.country;
  let state = _.isEmpty(data.state) ? '' : data.state;
  let error = {};

  const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passwordValidation = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;

  if (password != confirmpassword) {
    error = 'Password does not match';
  }
  if (password.length < 6) {
    error = 'Password must be minimum 6 character';
  }

  if (_.isEmpty(mobile)) {
    error = 'Mobile no is required';
  }

  if (_.isEmpty(password)) {
    error = 'Password field is required';
  }
  if (_.isEmpty(name) || _.isEmpty(country) || _.isEmpty(state)) {
    error = 'Please fill the details';
  }

  if (emailValidation.test(email) != true) {
    error = 'Email is not valid';
  }

  if (passwordValidation.test(password) != true) {
    error = 'Please Enter valid password';
  }

  if (_.isEmpty(email)) {
    error = 'Please Enter the credentials';
  }

  return {
    isValid: _.isEmpty(error),
    error
  };
};

export const validateForgot = (data) => {
  let password = _.isEmpty(data.password) ? '' : data.password;
  let cpassword = _.isEmpty(data.Confirmpassword) ? '' : data.Confirmpassword;
  let error = {};

  if (_.isEmpty(password)) {
    error = 'Password field is required';
  }
  if (_.isEmpty(cpassword)) {
    error = 'Conform Password field is required';
  }
  if (password != cpassword) {
    error = 'Password does not match';
  }
  return {
    isValid: _.isEmpty(error),
    error
  };
};
