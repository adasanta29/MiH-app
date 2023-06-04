import React from 'react'
import { useState } from 'react';
import './pujaModal.css';
import { Backdrop } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import Modal from './Modal';

const PujaModal = ({name, image, description}) => {

    const [modal, setModal] = useState(false);

  return (
    <div className="puja__modal">
        <div className='puja__modal-container'>
            <h2 className='puja__title'>{name}</h2>
            <motion.button
                className='puja__modal-button'
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                onClick={() => (modal ? setModal(false) : setModal(true))}
            >
                <img src={image} alt="" className='puja__image'/>
            </motion.button>

            <AnimatePresence initial={false}>
                {modal && <Modal isOpen={modal} handleClose={() => {setModal(false)}} title={name} paragraph={description}/>}
            </AnimatePresence>
        </div>
    </div>
  )
}

export default PujaModal