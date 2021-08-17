import React, { useEffect, useState } from 'react';
import GradientButton from '../../reusables/GradientButton/GradientButton';
import { useHistory } from 'react-router-dom';

function HomePage(props) {
  const [name, setName] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      console.log(user);
      setName(user);
    }
  }, []);

  const login = () => {
    history.push('/login');
  };

  const logout = () => {
    localStorage.removeItem('user');
    history.push('/login');
  };

  return (
    <div>
      <div>
        <h1 style={{ color: 'grey', marginLeft: 20 }}>
          Hi,{name == null ? 'Please Login' : 'I am ' + name}
        </h1>
        {name == null ? (
          <GradientButton
            title='Login'
            style={{ margin: 10, width: '10%' }}
            onClick={login}
          />
        ) : null}
      </div>
      <div style={{ position: 'absolute', right: 2, top: 10 }}>
        {name != null ? (
          <GradientButton
            title='Logout'
            style={{ margin: 10, width: '10%' }}
            onClick={logout}
          />
        ) : null}
      </div>
    </div>
  );
}

export default HomePage;
