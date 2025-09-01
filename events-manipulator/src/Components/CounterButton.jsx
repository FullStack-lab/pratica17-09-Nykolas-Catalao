import React from 'react';
import { useState } from 'react';

const counterButton = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                Incrementar ⬆️
            </button>
            <h2>{count}</h2>
            <button onClick={() => setCount(count - 1)}>
                Decrementar ⬇️
            </button>
        </div>
    );
}

export default counterButton;