import React from 'react';
import './ContactCard.css';

export function ContactCard() {
    return (
        <div className="contact">
            <div>
                <div className="contact-title">
                    최소혜, Choi Sohye
                </div>
                <div className="contact-subtitle">
                    Web Front-End, Devops.
                </div>
            </div>
            <div>
                <div className="contact-desc">
                    Git | <a href="https://github.com/purelledhand">https:/github.com/purelledhand</a>
                </div>
                <div className="contact-desc">
                    Email | purelledhand@gmail.com
                </div>
            </div>
        </div>
    );
}

export default ContactCard;