import React, { useState } from 'react'

import { BreastFeeding } from './features/breastfeeding/breastFeeding'
import { Change } from './features/change/change'

import { Modal } from './features/modal/modal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalOptions, setModalOptions] = useState({})

  function handleOpenModal(options) {
    setModalOptions(options)
    setIsModalOpen(true)
  }

  return (
    <div className="App">
      <BreastFeeding handleOpenModal={handleOpenModal} />
      <Change handleOpenModal={handleOpenModal} />
      {isModalOpen && <Modal options={modalOptions} closeModal={() => setIsModalOpen(false)} />}
    </div>
  )
}

export default App
