import React, { useState, useEffect } from "react";
import "./Timer.css"


function Timer() {

    const [minutes, setMinutes] = useState(25)
    const [seconds, setSeconds] = useState(0)
    const [displayMessage, setDisplayMessage] = useState(false)

   
    // double digits
    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes ;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds ;

    useEffect(() => {
        let interval = setInterval(() => {
            clearInterval(interval);

            if (seconds === 0) {
                if (minutes !== 0) {
                    setSeconds(59)
                    setMinutes((minutes) => (minutes-1))
                } else {
                    let minutes = displayMessage ? 24 : 4
                    let seconds = 59

                    setSeconds(seconds)
                    setMinutes(minutes)
                    setDisplayMessage((displayMessage) => (!displayMessage))
                    }      
            } else {
                setSeconds((seconds) => (seconds-1))
            }

        }, 1000)
    }, [seconds])

    return <div>
                
                <div className="pomodoro">
                <div>
                        {displayMessage ? <div className="message">Break time - New session starts in:</div> : <div className="message"> Pomodoro Session - Next break starts in: </div>}
                        <div className="timer">{timerMinutes} : {timerSeconds}</div>
                </div>
                
                    
                </div>
            </div>
}


export default Timer;