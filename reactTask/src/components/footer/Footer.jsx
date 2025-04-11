import React from 'react';

const Footer = () => {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h2 style={{
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '10px',
        color: '#333'
      }}>Newsletter</h2>
      
      <p style={{
        fontSize: '16px',
        color: '#666',
        marginBottom: '20px'
      }}>Subscribe to our newsletter and get 20% off your first purchase</p>
      
      <div style={{
        marginBottom: '30px'
      }}>
        <input
          type="text"
          placeholder="Your email"
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '14px'
          }}
        />
        <button style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#000',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>
          SUBSCRIBE
        </button>
      </div>
      
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        fontSize: '14px',
        color: '#666'
      }}>
        <span>Blog</span>
        <span>FAQs</span>
        <span>Contact us</span>
      </div>
    </div>
  );
};

export default Footer;