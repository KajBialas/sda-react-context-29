import { useCounter } from "../../context/counter/CounterContext";
const Home = () => {
    const { counter } = useCounter();
    
    return (
        <div>
            Home: {counter}
        </div>
    )
}

export default Home;