import React from 'react';

const AboutComponent = () => {
    return (
        <div 
            style={{
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                minHeight: '1vh', 
                background: 'linear-gradient(to right, #f0f2f5, #d9e2ec)', 
                color: '#333', 
                padding: '10px'
            }}
        >
            <div 
                style={{
                    maxWidth: '700px', 
                    textAlign: 'center', 
                    background: 'rgba(255, 255, 255, 0.9)', 
                    padding: '25px', 
                    borderRadius: '8px', 
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
                }}
            >
                <img 
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG9mZmljZSUyMHdvcmslMjBiYW5uZXJ8ZW58MHx8MHx8fDA%3D" 
                    alt="About Us"
                    style={{ width: '40%', borderRadius: '8px', marginBottom: '12px' }}
                />
                <h2 style={{ fontSize: '1.8rem', marginBottom: '10px', color: '#2c3e50' }}>About Us</h2>
                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#555' }}>
                    Welcome to the <strong>Employee Management System</strong> – your go-to solution for 
                    managing employee records with ease and efficiency. Our platform streamlines HR tasks, 
                    reduces paperwork, and ensures seamless employee tracking.
                </p>
                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#555' }}>
                    Whether you're a small business or a large enterprise, our system provides you with the 
                    tools to organize, update, and access employee details in just a few clicks. Say goodbye 
                    to manual record-keeping and embrace the future of employee management.
                </p>
            </div>
        </div>
    );
};

export default AboutComponent;
