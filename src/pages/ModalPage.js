import React, { useState } from 'react'
import Button from '../components/Button'
import Modal from '../components/Modal'

function ModalPage() {
    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
      setShowModal(false)
    }

    const actionBar = (
    <div>
      <Button primary onClick={handleCloseModal}>I Accept</Button>
    </div>
    )

    const modal = <Modal onClose={handleCloseModal} actionBar={actionBar}>
      <p>
        Here is an import agreement for you to accept
      </p>
    </Modal> 

  return (
    <div>
        <Button primary onClick={handleClick} >Open Modal</Button>
        {showModal && modal }
    </div>
  )
}

export default ModalPage