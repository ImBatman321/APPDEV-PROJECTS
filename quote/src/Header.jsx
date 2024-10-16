import React from 'react';

export default function Header() {
    const headerStyle = {
        backgroundColor: '#6a82fb',
        color: '#fff',
        textAlign: 'center',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
    };

    const titleStyle = {
        margin: '0',
        fontSize: '2rem',
    };

    return (
        <header style={headerStyle}>
            <h1 style={titleStyle}>QUOTE GENERATOR</h1>
            <hr style={{ border: '1px solid rgba(255, 255, 255, 0.7)' }} /> {}
        </header>
    );
}
