import React from 'react';
import { Backdrop } from '@mui/material';
import { motion } from 'framer-motion';

import './Modal.css';

const dropIn = {
    hidden: {
        y: "-100vh"
    },

    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 50,
            stiffness: 200,
        },
    },

    exit: {
        y: "100vh",
        opacity: 0,
    }
};

const Modal = ({isOpen, handleClose, title, paragraph}) => {
  return (
    <Backdrop sx={{ color: '#1e5d6a', zIndex: (theme) => theme.zIndex.drawer + 1}} open={isOpen} onClick={handleClose}>
        <motion.div
            onClick={(e) => e.stopPropagation()}
            className='modal modal__gradient'
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="modalContainer">
                <h3>{title}</h3>
                <p>{paragraph}</p>
            </div>

            <button className='modal__button' onClick={handleClose}>
                Close
            </button>
        </motion.div>
    </Backdrop>
  )
}

export default Modal