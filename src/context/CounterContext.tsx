import { useState, createContext, useContext } from "react";

type CounterContextT = {
    counter: number;
    handleIncrementCounter: () => void;
    handleDecrementCounter: () => void;
    handleResetCounter: () => void;
}

const CounterContext = createContext<CounterContextT | undefined>(undefined);

export const useCounter = () => {
    const context = useContext(CounterContext);

    if (!context) {
        throw new Error('useContext');
    }
    return context;
}

type CounterProviderT = {
    children: React.ReactNode;
}
export const CounterProvider = ({children}: CounterProviderT) => {
    const [counter, setCounter] = useState(0);

    const handleIncrementCounter = () => setCounter(prevCounter => prevCounter + 1);
    const handleDecrementCounter = () => setCounter(prevCounter => prevCounter - 1);
    const handleResetCounter = () => setCounter(0);

    return (
        <CounterContext.Provider value={{ counter, handleIncrementCounter, handleDecrementCounter, handleResetCounter}}>
            {children}
        </CounterContext.Provider>
    )
}