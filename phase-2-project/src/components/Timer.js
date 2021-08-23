import React, { useState, useEffect } from "react";


function Timer() {

    const [minutes, setMinutes] = useState()

    return <div>
        <div className="message">Message</div>
        <div className="timer">25:00</div>
    </div>
}


export default Timer;