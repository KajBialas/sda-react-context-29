type HomeProps = {
    counter: number;
}
const Home = ({counter}: HomeProps) => {
    return (
        <div>
            Home: {counter}
        </div>
    )
}

export default Home;