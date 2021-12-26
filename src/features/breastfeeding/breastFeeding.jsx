import React, { useState } from 'react'
import { Timer } from '../timer/timer'
import { setLocalStorageItem, getLocalStorageItem } from '../../utils/localStorage'

export function BreastFeeding({ handleOpenModal }) {

    const [side, setSide] = useState(getLocalStorageItem('lastFeedingSide') ? JSON.parse(getLocalStorageItem('lastFeedingSide')) : null)
    const [dateTime, setDateTime] = useState(getLocalStorageItem('lastFeedingDate') ? new Date(JSON.parse(getLocalStorageItem('lastFeedingDate'))) : null)

    function handleDateChange(choice, date) {

        setLocalStorageItem(date, 'lastFeedingDate')
        setLocalStorageItem(choice, 'lastFeedingSide')

        setDateTime(date)
        setSide(choice)
    }

    console.log('dqsdqsd', dateTime);

    const data = {
        icon: "🤱",
        text: "click to select a feeding side",
        choices: ["left", "right"],
        onDateChange: handleDateChange
    }

    return (
        <section className='breastfeeding'>
            <header onClick={() => handleOpenModal(data)}>
                <h1>{data.icon}</h1>
            </header>
            <main>
                <span>{side}</span>
                <Timer dateTime={dateTime} />
                <p>Since <br/> last <strong>feeding</strong></p>
            </main>
        </section>
    )
}