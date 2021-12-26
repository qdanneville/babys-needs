import React, { useState } from 'react'
import { Timer } from '../timer/timer'
import { setLocalStorageItem, getLocalStorageItem } from '../../utils/localStorage'

export function Change({ handleOpenModal }) {

    const [need, setNeed] = useState(getLocalStorageItem('lastChangeNeed') ? JSON.parse(getLocalStorageItem('lastChangeNeed')) : null)
    const [dateTime, setDateTime] = useState(getLocalStorageItem('lastChangeDate') ? new Date(JSON.parse(getLocalStorageItem('lastChangeDate'))) : null)
    const [pooTime, setPooTime] = useState(getLocalStorageItem('lastPooDate') ? new Date(JSON.parse(getLocalStorageItem('lastPooDate'))) : null)

    function handleDateChange(choice, date) {

        setLocalStorageItem(date, 'lastChangeDate')
        setLocalStorageItem(choice, 'lastChangeNeed')

        setDateTime(date)
        setNeed(choice)

        if (choice === "Poo") {
            setLocalStorageItem(date, 'lastPooDate')
            setPooTime(date);
        }
    }

    const data = {
        icon: "🩲",
        text: "click to select what was in the diaper",
        choices: ["Pee", "Poo"],
        onDateChange: handleDateChange
    }

    return (
        <section className='change'>
            <header onClick={() => handleOpenModal(data)}>
                <h1>{data.icon}</h1>
            </header>
            <main>
                <span>{need}</span>
                <Timer dateTime={dateTime} />
                <p>Since <br/> last <strong>change</strong></p>
            </main>
            <div className='poo'>
                <Timer dateTime={pooTime} />
                <p>💩</p>
            </div>
        </section>
    )
}