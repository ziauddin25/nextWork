import { useEffect, useState } from "react";

export default function LiveClock () {
    const [timer, setTimer] = useState(()=> new Date());

    useEffect(()=> {
        const id = setInterval(() => {
            setTimer(new Date())
        }, 1000);

        return ()=> {
            clearInterval(id)
        }
    }, []);

    useEffect(()=> { // first here added a function, arrow or named func.

        // side effect logic.

        return ()=> {
            // cleanup logic.
        }
    },[]) // [] this is dependency.

    return (
        <div className="">
            <h2 className="">Live clock</h2>
            <p className="">{timer.toLocaleTimeString()}</p>
        </div>
    )
};