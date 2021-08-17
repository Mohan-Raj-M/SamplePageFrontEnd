import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import cx from 'classnames';
import styles from './Template.module.css';
import { Link } from 'react-router-dom';

function Template({ content, title, subTitle, innerDivStyle }) {
  return (
    <div className={styles.outerDiv}>
      <div
        className={styles.innerDiv}
        style={{
          margin: 20,
          // minWidth: window.innerWidth * 0.25,
          ...innerDivStyle
        }}
      >
        <span>
          <Link to='/'>
            <span style={{ float: 'right', margin: 0 }}>
              <AiOutlineClose size={20} color='black' />
            </span>
          </Link>
        </span>
        <div style={{ marginLeft: 10 }}>
          <p className={styles.title}>
            {title}
            <span style={{ color: '#1bc2ad' }}>!</span>
          </p>

          <p className={styles.subTitle}>{subTitle}</p>
        </div>
        {content}
        <div className={styles.footer}>
          <p style={{ marginTop: 16 }}>
            {title === 'Hello'
              ? "Don't have an account?"
              : 'Already have an account?'}{' '}
          </p>
          <Link to={title === 'Hello' ? '/signup' : '/login'}>
            <button className={styles.footerButton}>
              {title === 'Hello' ? 'SIGN UP' : 'LOGIN'}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Template;
