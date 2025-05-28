import React from 'react';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
    return (
        <header style={{
            background: 'url("https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fG9mZmljZSUyMHdvcmslMjBiYW5uZXJ8ZW58MHx8MHx8fDA%3D") no-repeat center center/cover',
            color: 'white',
            padding: '20px 0',
            textAlign: 'center',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
        }}>
            <nav className='navbar navbar-expand-md p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', borderRadius: '8px' }}>
                <div className='container'>
                    <Link className='navbar-brand fw-bold fs-4' to="/" style={{ color: '#ffcc00' }}>
                        👨‍💼 Employee Management System 🚀
                    </Link>
                    <div>
                        <Link className='btn btn-outline-light me-3' to="/">Dashboard</Link>
                        <Link className='btn btn-outline-light me-3' to="/about">About</Link>
                        <Link className='btn btn-outline-light' to="/contact">Contact</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default HeaderComponent;
