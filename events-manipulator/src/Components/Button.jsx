import React from 'react';

const Button = () => {
    const handleClick = () => {
        alert('Você clicou no botão!');
    }

    return (
        <>
            <button onClick={handleClick}>
                Clique aqui
            </button>
        </>
    );
}

export default Button;
