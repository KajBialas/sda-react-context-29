import { useCounter } from '../../context/counter/CounterContext';


const Counter = () => {
    const { counter, handleIncrementCounter, handleDecrementCounter, handleResetCounter } = useCounter();

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