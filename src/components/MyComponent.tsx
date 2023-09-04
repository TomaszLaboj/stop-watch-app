import { useState, useEffect } from "react";
import { Controls } from "./Controls";
import { calculateTimer } from "./calculateTimer";
import { Footer } from "./Footer";
import "./styles.css";

export function MyComponent(): JSX.Element {
    const [timeInSeconds, setTimeInSeconds] = useState<number>(0);
    const [timeArray, setTimeArray] = useState<number[]>([]);

    useEffect(() => {
        setTimeArray(calculateTimer(timeInSeconds));
    }, [timeInSeconds]);

    return (
        <div className="stopwatch">
            <h3>Stopwatch</h3>
            <div className="mins-secs">
                {timeArray[0] < 10 ? "0" + timeArray[0] : timeArray[0]}:
                {timeArray[1] < 10 ? "0" + timeArray[1] : timeArray[1]}
            </div>
            <div className="buttons">
                <Controls setTimeInSeconds={setTimeInSeconds} />
            </div>
            <Footer />
        </div>
    );
}
