import React, { useState } from 'react'
import { ContactSectionStyle } from './style';
import { useTranslation } from 'react-i18next';

export const ContactSection = () => {
    const { t } = useTranslation()

    return (
        <ContactSectionStyle id="contact">
            <div className='scrollContainer'>
                <h2>{t("home.ContactSection.contactCTA")}</h2>
                <h2>{t("home.ContactSection.contactCTA")}</h2>
            </div>
            <div className='contactButtons-container'>
                <div>
                    <h3>{t("home.ContactSection.linkedinCTA")}</h3>
                    <button><a target="_blank" href='https://www.linkedin.com/in/euisabelleamorim/'>https://www.linkedin.com/in/euisabelleamorim/</a></button>
                </div>
                <div>
                    <h3>{t("home.ContactSection.emailCTA")}</h3>
                    <button><a target="_blank" href='mailto:isabelle.bernards@hotmail.com'>{t("home.ContactSection.emailButtonCTA")}</a></button>
                </div>
                <div>
                    <h3>{t("home.ContactSection.githubCTA")}</h3>
                    <button><a target="_blank" href='https://github.com/fritzisabelle'>https://github.com/fritzisabelle</a></button>
                </div>
            </div>
        </ContactSectionStyle>
    )
}