import { useState } from 'react';

type Props = {
    setTimeInSeconds:React.Dispatch<React.SetStateAction<number>>;
}

export function Controls(props:Props) {
    const {setTimeInSeconds} = props;
    const [intervalId, setIntervalId] = useState<number>(0);

    const handleStart = () => {
        const interval:number = window.setInterval(() => {
            setTimeInSeconds((prev)=>prev+1);
        },1000)
        setIntervalId(interval)
    }

    const handlePause = () => {
        clearInterval(intervalId);
    }

    const handleReset = () => {
        clearInterval(intervalId);
        setTimeInSeconds(0);
    }

    return (
        <div>

            <button onClick={handleStart}>Start</button>
            <button onClick={handlePause}>Pause</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}
