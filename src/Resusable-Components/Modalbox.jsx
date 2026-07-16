import React from 'react'
import Wrong from '../assets/LoginAssets/XModal.png'
import Tick from '../assets/LoginAssets/TickModal.png'
import'./Modalbox.css'


const Modalbox = ({ show, success, message, onClose }) => {
    if (!show) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                
                    {success ? <img src={Tick} alt='Success' width={50}/> : <img src={Wrong} alt='incorrect' width={50}/>}
                
                <h3 className="modal-title">{success ? 'Success!' : 'Failed!'}</h3>
                <p className="modal-message">{message}</p>
                <button className="modal-button" onClick={onClose}>OK</button>
            </div>
        </div>
    );
};

export default Modalbox;