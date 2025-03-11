import React, { useState } from 'react';
import './App.css'; // Импорт CSS-файла

function App() {
    const [countValue, setCountValue] = useState(0);

    const incrementCount = () => {
        setCountValue(countValue + 1);
    };

    const decrementCount = () => {
        setCountValue(countValue - 1);
    };

    return (
        <div className="app-container">
            <div className="content-wrapper">
                <h3>Первое приложение</h3>
                <p>Количество: {countValue}</p>
                <button style={{ margin: '5px' }} onClick={incrementCount}>
                    Увеличить
                </button>
                <button style={{ margin: '5px' }} onClick={decrementCount}>
                    Уменьшить
                </button>
            </div>
        </div>
    );
}

export default App;
