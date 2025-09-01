import React, { useState } from 'react';

const Input = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = () => {
        setInputValue(event.target.value);
    }

    return (
        <div>
            <input
                type='text'
                value={inputValue}
                onChange={handleChange}
                placeholder='Digite algo...'
            />
            <p>Você digitou: {inputValue}</p>
        </div>
    );
}

export default Input;