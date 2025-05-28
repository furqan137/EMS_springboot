import React from 'react';

const FooterComponent = () => {
    return (
        <footer style={{
            background: 'linear-gradient(to right, #007bff, #00c6ff)',
            color: 'white',
            textAlign: 'center',
            padding: '15px 0',
            position: 'fixed',
            bottom: '0',
            width: '100%',
            fontSize: '16px',
            fontWeight: 'bold',
            boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)'
        }}>
            <span>All Rights Reserved &copy; {new Date().getFullYear()} | Designed for Efficiency & Excellence 🚀</span>
        </footer>
    );
};

export default FooterComponent;