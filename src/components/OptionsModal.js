import React from 'react';
import Modal from 'react-modal';


Modal.setAppElement(document.getElementById('app'))
const OptionModal = (props) => (
    <Modal 
        isOpen={!! props.selectedOption} 
        contentLabel="Selected Option"
        onRequestClose={props.handleClearSelectedOption}           // to close when we click escape key or background
        closeTimeoutMS={200}        // by using this modal will closes after 200ms creating an transition effect. 
        className="modal"    
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleClearSelectedOption}>Okay</button>
    </Modal>
);

export default OptionModal;