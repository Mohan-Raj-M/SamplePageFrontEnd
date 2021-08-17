import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import cx from 'classnames';
import styles from './Login.module.css';
import { Col, Row, Tab, Tabs, Button, Container } from 'react-bootstrap';
import EmailLogin from './EmailLogin/EmailLogin';
import Template from '../../reusables/LoginSignupTemplate/Template';

function Login(props) {
  const [activeTab, setActiveTab] = useState('Email');

  const content = (
    <>
      <div style={{ margin: 10 }}>
        <Container>
          <Row className={styles.tabs}>
            <Col
              lg={6}
              onClick={() => setActiveTab('Email')}
              className={
                activeTab === 'Email'
                  ? cx(styles.tab, styles.activeTab)
                  : styles.tab
              }
            >
              Email Address
            </Col>
          </Row>
        </Container>
        {activeTab === 'Email' ? <EmailLogin /> : null}
      </div>
    </>
  );

  return (
    <Template
      content={content}
      title='Hello'
      subTitle='Log in with'
      innerDivStyle={
        window.innerWidth < 569
          ? { width: '100%', alignSelf: 'center', marginLeft: '0%' }
          : { width: 360 }
      }
    />
  );
}

export default Login;
