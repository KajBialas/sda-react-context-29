import { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>ZWIĘKSZ</button>
            <button onClick={() => setCounter(counter - 1)}>ZMNIEJSZ</button>
            <button onClick={() => setCounter(0)}> RESET</button>
        </div>
    )
}

export default Counter;