import React, { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h3>Первое приложение</h3>
            <p>Количество: {count}</p>
            <button onClick={() => setCount(count + 1)}>Увеличить</button>
        </div>
    );
}

export default App;