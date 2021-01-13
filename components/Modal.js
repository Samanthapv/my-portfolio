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
    <h1 className="text-right"><i onClick={onRequestClose} className="fa fa-times px-3 py-3 cursor-pointer text-gray-700 hover:text-green-lightGreen " aria-hidden="true"></i></h1>
    <p className="px-10 py-4 font4">During this bootcamp (with a total duration of 550 hours, I reinforced my knowledge of the Javascript fundamentals, learnt more advanced aspects of the language and also advanced data structures. During the time dedicated to Front End Frameworks I learnt Vue and React and practiced a lot working on daily little projects, which helped me feel very comfortable with these frameworks. Lastly we learnt about servers and databases.
    <br /><br /> In the last weeks of the course I developed three apps: 
     a full-stack MVP developed in a week, added extra features (user authentication and a payment system to upgrade the user's account) to the legacy coded inherited from another developer and then a final project in which I worked in three weeks remotely and in collaboration with another developer. <br /><br /> 
     Since the end of the bootcamp I have been extending my knowledge by working on small projects, practising algorithms and studying advanced features of the frameworks and languages I know.
    </p>
    <br></br>

  </Modal>
