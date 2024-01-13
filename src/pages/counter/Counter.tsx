import { useRef } from 'react';
import { useCounter } from '../../context/counter/CounterContext';


const Counter = () => {
    const { counter, handleIncrementCounter, handleDecrementCounter, handleResetCounter } = useCounter();

    const audioRef = useRef<HTMLAudioElement | null>(null);

    return (
        <div>
            <h1>Audio:</h1>
                <button onClick={() => audioRef.current?.play() }>Play</button> 
                <button onClick={() => audioRef.current?.pause()}>Pause</button>
                <audio ref={audioRef}>
                    <source src="/music.mp3" />
                </audio>
            <h1>Counter: {counter}</h1>
            <button onClick={handleIncrementCounter}>ZWIĘKSZ</button>
            <button onClick={handleDecrementCounter}>ZMNIEJSZ</button>
            <button onClick={handleResetCounter}> RESET</button>
        </div>
    )
}

export default Counter;