import React, { useState, useEffect } from "react";

function DigitalClock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);


    function formattedTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();

        // for 12 hours clock
        const meridiem = hours < 12 ? "AM" : "PM";
        hours = hours % 12 || 12; // output: 1 to 11 if(0) then 12

        return (<>
            <span className="time">{padZero(hours)}:{padZero(minutes)}:{padZero(seconds)}</span>
            <span className="meridiem">{meridiem.toUpperCase()}</span>
        </>);
    }

    function padZero(number) {
        return (number < 10 ? "0" : "") + number;
    }

    return (
        <div className="clock-container">
            <div className="clock">
                {formattedTime()}
            </div>
        </div>
    );
}

export default DigitalClock;