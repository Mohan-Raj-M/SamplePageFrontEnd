import React, { useState } from 'react';
import Modal from 'react-modal';
import GradientButton from '../GradientButton/GradientButton';
import styles from './Toast.module.css';
import { Link as RLink, useHistory, useLocation } from 'react-router-dom';
function Toast({ isOpen, medicine, closeModal, title, message, ...props }) {
  const location = useLocation();
  const history = useHistory();
  return (
    <Modal isOpen={isOpen} className={styles.modal} onRequestClose={closeModal}>
      <div className={styles.container}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.message}>{message}</p>
        <GradientButton
          title='Ok'
          style={
            window.innerWidth > 590
              ? { margin: 10, alignSelf: 'center', width: '40%' }
              : { alignSelf: 'center', width: '40%', marginLeft: '30%' }
          }
          onClick={closeModal}
        />
      </div>
    </Modal>
  );
}

export default Toast;
