import React, { useState, useEffect } from 'react'

export function Timer({ dateTime }) {

    const [intervalId, setIntervalId] = useState(null)
    const [displayTime, setDisplayTime] = useState(null)

    useEffect(() => {

        if (dateTime) {
            if (intervalId) clearInterval(intervalId)
            setIntervalId(setInterval(calculElapsedTime, 1000))
        }

    }, [dateTime])

    function calculElapsedTime() {
        const now = new Date()
        const elapsedTime = new Date(now - dateTime)

        const days = Math.floor((now.getTime() - dateTime.getTime()) / (1000 * 60 * 60 * 24))
        const hours = elapsedTime.getUTCHours()
        const minutes = elapsedTime.getUTCMinutes()

        let display = `${hours}h:${minutes}m`;

        if (days > 0) display = `${days}d:${hours}h:${minutes}m`;

        setDisplayTime(display);
    }

    return (
        <time>{displayTime}</time>
    )
}