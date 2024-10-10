import React from 'react';

const ConfirmPresence = () => {

    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, etc.
    }

    return (
        <div className='confirm'>
            <h3>Խնդրում ենք հաստատել Ձեր ներկայությունը միջոցառմանը</h3>
            <div className='confirm-presence'>
                <a href="https://wa.me/+37493955656" aria-label="Contact via WhatsApp" target='_blank' rel="noopener noreferrer">
                    <i className="fab fa-whatsapp"></i>
                </a>
                <a href="tel:+37493955656" aria-label="Contact via Phone">
                    <i className="fas fa-phone-alt"></i>
                </a>
            </div>
            <div style={{margin: "40px 0"}}>
                <i className="fab fa-gg"></i>
                <i className="fab fa-gg"></i>
                <i className="fab fa-gg"></i>
            </div>
            <div>
                <button onClick={topFunction}><i className="fab fa-gg-circle"></i></button>
            </div>
        </div>
    );
};

export default ConfirmPresence;
