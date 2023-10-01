import React, { useState } from 'react'
import { ContactSectionStyle } from './style';

export const ContactSection = () => {
    const [open, setOpen] = useState(true);

    return (
        <ContactSectionStyle>
            <h2>LET’S TALK? - GET IN TOUCH - DON’T BE SHY - WANNA HAVE A COFFEE? -</h2>
            <div className='contactButtons-container'>
                <div>
                    <h3>connect with me</h3>
                    <button>https://www.linkedin.com/in/euisabellebernardes/</button>
                </div>
                <div>
                    <h3>Email me</h3>
                    <button>Clique aqui para me enviar um email</button>
                </div>
                <div>
                    <h3>FIND ME ON GITHUB</h3>
                    <button>https://github.com/fritzisabelle</button>
                </div>
            </div>
        </ContactSectionStyle>
    )
}