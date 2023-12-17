import { useState } from 'react';

type CounterProps = {
    counter: number;
    handleIncrementCounter: () => void;
    handleDecrementCounter: () => void;
    handleResetCounter: () => void;
}

const Counter = ({ counter, handleIncrementCounter, handleDecrementCounter, handleResetCounter }: CounterProps) => {
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={handleIncrementCounter}>ZWIĘKSZ</button>
            <button onClick={handleDecrementCounter}>ZMNIEJSZ</button>
            <button onClick={handleResetCounter}> RESET</button>
        </div>
    )
}

export default Counter;