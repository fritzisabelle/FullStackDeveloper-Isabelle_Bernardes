import React, { useState } from 'react'
import { ContactSectionStyle } from './style';
import { useTranslation } from 'react-i18next';

export const ContactSection = () => {
    const { t } = useTranslation()

    return (
        <ContactSectionStyle id="contact">
            <div className='scrollContainer'>
                <h2>{t("contactCTA")}</h2>
                <h2>{t("contactCTA")}</h2>
            </div>
            <div className='contactButtons-container'>
                <div>
                    <h3>{t("linkedinCTA")}</h3>
                    <button>https://www.linkedin.com/in/euisabellebernardes/</button>
                </div>
                <div>
                    <h3>{t("emailCTA")}</h3>
                    <button>{t("emailButtonCTA")}</button>
                </div>
                <div>
                    <h3>{t("githubCTA")}</h3>
                    <button>https://github.com/fritzisabelle</button>
                </div>
            </div>
        </ContactSectionStyle>
    )
}