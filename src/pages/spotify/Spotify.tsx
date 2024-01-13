import { useRef } from "react";
const Spotify = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    return (
        <div>
            <h1>Spotify</h1>
            <button onClick={() => audioRef.current?.play() }>Play</button> 
                <button onClick={() => audioRef.current?.pause()}>Pause</button>
                <audio ref={audioRef}>
                    <source src="/music.mp3" />
                </audio>
        </div>
    )
}

export default Spotify;