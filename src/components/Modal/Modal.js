import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

function Modal({ onClose, children }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  function handleKeyDown(e) {
    if (e.code === 'Escape') {
      onClose();
    }
  }

  function handleBackdropClick(e) {
    if (e.currentTarget === e.target) {
      onClose();
    }
  }

  return createPortal(
    <div className={s.modal_backdrop} onClick={handleBackdropClick}>
      <button type="button" onClick={onClose} className={s.button}>
        X
      </button>
      <div className={s.modal_content}>{children}</div>
    </div>,
    modalRoot,
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Modal;
