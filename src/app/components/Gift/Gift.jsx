'use client'

import { useState } from 'react'
import { Modal, Button } from 'flowbite-react'

const Gift = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <Button color="gray" pill onClick={() => setOpenModal(true)} className='mt-6'>
        ver más
      </Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)} position={'center'} dismissible popup size='sm' className='animate-fade'>
        <Modal.Header />
        <Modal.Body className='text-center space-y-1 sm:space-y-3 text-slate-700 sm:text-lg xl:text-xl '>
          <p className='font-semibold mb-2'> Datos Bancarios</p>
          <p><span className='font-semibold'>TITULAR:</span> Sheila Mailen Perez</p>
          <p><span className='font-semibold'>CBU:</span> 0070704830004006981755</p>
          <p><span className='font-semibold'>ALIAS:</span> boda.shei.lucas</p>
          <p>Banco Galicia</p>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Gift