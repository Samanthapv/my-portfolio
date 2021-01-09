import React from 'react';
import Modal from "react-modal"

export default ({ isOpen, onRequestClose }) =>
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Modal"
    className={{
      base: 'modal-base',
      afterOpen: 'modal-base_after-open',
      beforeClose: 'modal-base_before-close'
    }}
    overlayClassName={{
      base: 'overlay-base',
      afterOpen: 'overlay-base_after-open',
      beforeClose: 'overlay-base_before-close'
    }}
    shouldCloseOnOverlayClick={true}
    closeTimeoutMS={2000}
  >
    <h1 className="text-right"><i onClick={onRequestClose} className="fa fa-times px-3 py-3 cursor-pointer" aria-hidden="true"></i></h1>
    <p className="px-10 py-4">M-o-d-a-l</p>
    <br></br>

  </Modal>
