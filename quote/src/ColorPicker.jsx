import React, { useState } from 'react';

const quotes = [
    "The unexamined life is not worth living.",
    "Philosophy is the love of wisdom.",
    "The greatest philosopher is not the one who provides the answers but the one who inspires the questions.",
    "Philosophy begins in wonder.",
    "To be is to be perceived.",
    "Philosophy is the highest music.",
    "The only thing I know is that I know nothing.",
    "Philosophy can make us see our lives and the world in a new light.",
    "I think, therefore I am.",
    "Philosophers have only interpreted the world in various ways; the point, however, is to change it.",
];

const backgroundColors = [
    '#ffccbc',
    '#ffe0b2',
    '#fff9c4',
    '#c8e6c9',
    '#d1c4e9',
    '#ffab91',
];

const buttonColors = [
    '#ff5722',
    '#d32f2f',
    '#1976d2',
    '#388e3c',
    '#7b1fa2',
    '#f57c00',
];

export default function QuoteGenerator() {
    const [quoteHistory, setQuoteHistory] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [bgColor, setBgColor] = useState(backgroundColors[0]);
    const [buttonColor, setButtonColor] = useState(buttonColors[0]);

    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }

    function getRandomColor(colorArray, excludeColor) {
        let randomIndex;
        let newColor;
        do {
            randomIndex = Math.floor(Math.random() * colorArray.length);
            newColor = colorArray[randomIndex];
        } while (newColor === excludeColor);
        return newColor;
    }

    function randomQuoteChange() {
        const newQuote = getRandomQuote();
        const newBgColor = getRandomColor(backgroundColors, bgColor);
        const newButtonColor = getRandomColor(buttonColors, buttonColor);

        const newQuoteHistory = [...quoteHistory, newQuote];
        setQuoteHistory(newQuoteHistory);
        setCurrentIndex(newQuoteHistory.length - 1);

        setBgColor(newBgColor);
        setButtonColor(newButtonColor);
    }

    function showPreviousQuote() {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            alert("Press 'Generate' first.");
        }
    }

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        width: '100vw',
        background: bgColor,
        color: '#333',
        padding: '20px',
        boxSizing: 'border-box',
        transition: 'background 0.5s',
        filter: 'brightness(0.95)',
    };

    const titleStyle = {
        marginBottom: '30px',
        fontSize: '4rem',
        textAlign: 'center',
        textShadow: '2px 2px 8px rgba(0, 0, 0, 0.6)',
        color: '#fff',
    };

    const quoteDisplayStyle = {
        marginBottom: '30px',
        padding: '40px',
        fontSize: '2rem',
        textAlign: 'center',
        border: '2px solid rgba(255, 255, 255, 0.8)',
        borderRadius: '15px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)',
        color: '#333',
        maxWidth: '600px',
    };

    const buttonStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '200px',
        height: '80px',
        background: buttonColor,
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.3s, background 0.5s',
        position: 'relative',
        margin: '10px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
    };

    const buttonHoverStyle = {
        transform: 'scale(1.05)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)',
    };

    const buttonTextStyle = {
        fontSize: '1.5rem',
        color: '#fff',
        fontWeight: 'bold',
        textShadow: '1px 1px 5px rgba(0, 0, 0, 0.6)',
    };

    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>Random Quote Generator</h1>
            <div style={quoteDisplayStyle}>
                <p>{quoteHistory[currentIndex] || "Click the rectangle to generate a quote!"}</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                <button
                    style={buttonStyle}
                    onMouseOver={(e) => {
                        e.currentTarget.style.transform = buttonHoverStyle.transform;
                        e.currentTarget.style.boxShadow = buttonHoverStyle.boxShadow;
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'none';
                        e.currentTarget.style.boxShadow = 'none';
                    }}
                    onClick={randomQuoteChange}
                >
                    <span style={buttonTextStyle}>Generate Random</span>
                </button>
                <button
                    style={{ ...buttonStyle, opacity: currentIndex > 0 ? 1 : 0.5, cursor: currentIndex > 0 ? 'pointer' : 'not-allowed' }}
                    onClick={currentIndex > 0 ? showPreviousQuote : null}
                    disabled={currentIndex === 0}
                >
                    <span style={buttonTextStyle}>Previous Quote</span>
                </button>
            </div>
        </div>
    );
}
