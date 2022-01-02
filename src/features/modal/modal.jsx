import React, { useState } from 'react'

export function Modal({ options, closeModal }) {
    const [choice, setChoice] = useState(options.choices[0])
    const [date, setDate] = useState(null)

    function handleSubmit(e) {
        e.preventDefault();
        options.onDateChange(choice, date)
        closeModal();
    }

    function notifyNow(choice) {
        options.onDateChange(choice, new Date())
        closeModal();
    }

    return (
        <div className='modal-wrapper'>
            <div onClick={closeModal} className='modal-background'></div>
            <div className='modal-inner'>
                <header>
                    <h1>{options.icon}</h1>
                </header>
                <div className='choices'>
                    {options.choices?.map(choice => {
                        return (
                            <div key={choice} onClick={() => notifyNow(choice)}>
                                {choice}
                            </div>
                        )
                    })}
                </div>
                <form onSubmit={handleSubmit}>
                    <p>Or select a <strong>date</strong></p>
                    <input required onChange={(e) => setDate(new Date(e.target.value))} type="datetime-local"></input>
                    <div className='form-choices'>
                        {options.choices?.map((choice, i) => {
                            return (
                                <label key={choice} className="">
                                    <input
                                        type="radio"
                                        name="choices"
                                        defaultChecked={i == 0}
                                        value={choice}
                                        onChange={() => setChoice(choice)}
                                    />
                                    {choice}
                                </label>
                            )
                        })}
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}