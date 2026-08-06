import React from 'react'
import Wrong from '../assets/LoginAssets/XModal.png'
import Tick from '../assets/LoginAssets/TickModal.png'
import './Modalbox.css'

const Modalbox = ({ show, success, message, onClose, isConfirm = false, onConfirm, confirmText = "Logout", cancelText = "Cancel"}) => { 

    if (!show) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                {!isConfirm && (
                    <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
                    <img 
                        src={success ? Tick : Wrong} 
                        alt={success ? 'Success' : 'Failed'} 
                        width={20}  height={20}
                    />
                    <h3 className="modal-title">{success ? 'Success!' : 'Failed!'}</h3>
                </div>
                )}
                {isConfirm && (
                <h3 className="modal-title">Confirmation</h3>
                )}
                
                
                <p className="modal-message">{message}</p>
                <div className="modal-actions" style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '15px' }}>
                    {isConfirm ? (
                        <>
                            <button className="modal-button cancel-btn" onClick={onClose}>
                                {cancelText}
                            </button>
                            <button className="modal-button confirm-btn" onClick={onConfirm} autoFocus>
                                {confirmText}
                            </button>
                        </>
                    ) : (
                        <button className="modal-button" onClick={onClose} autoFocus>
                            OK
                        </button>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Modalbox;