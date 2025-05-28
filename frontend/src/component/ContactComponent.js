import React from 'react';

const ContactComponent = () => {
    return (
        <div 
            style={{
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                minHeight: '0vh', 
                background: 'linear-gradient(to right, #e3f2fd, #bbdefb)', 
                color: '#333', 
                padding: '40px'
            }}
        >
            <div 
                style={{
                    maxWidth: '600px', 
                    textAlign: 'center', 
                    background: 'rgba(255, 255, 255, 0.95)', 
                    padding: '30px', 
                    borderRadius: '8px', 
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
                }}
            >
                <img 
                    src="https://cdn-icons-png.flaticon.com/128/732/732200.png" 
                    alt="Contact Icon"
                    style={{ width: '80px', marginBottom: '15px' }}
                />
                <h2 style={{ fontSize: '1.8rem', marginBottom: '10px', color: '#1565c0' }}>Contact Us</h2>
                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#555' }}>
                    If you have any questions, feel free to reach out to us at:
                </p>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li style={{ fontSize: '1rem', color: '#333', marginBottom: '8px' }}>
                        <strong>Email:</strong> support@ems.com
                    </li>
                    <li style={{ fontSize: '1rem', color: '#333', marginBottom: '8px' }}>
                        <strong>Phone:</strong> +1 234 567 890
                    </li>
                    <li style={{ fontSize: '1rem', color: '#333' }}>
                        <strong>Address:</strong> 123 Business Street, Tech City, USA
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ContactComponent;
