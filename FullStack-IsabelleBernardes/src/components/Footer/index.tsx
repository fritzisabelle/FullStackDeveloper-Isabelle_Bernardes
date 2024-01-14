import React from 'react';
import { FooterStyle } from './style';
import intersection from "../../assets/Intersect.svg"
import { useTranslation } from 'react-i18next';

export const Footer = () => {
    const { t } = useTranslation()

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <FooterStyle>
            <div className='anchor-backToTop-container'>
                <div className="intersection-container">
                    <img src={intersection} alt="detail" />
                    <img src={intersection} alt="detail" />
                    <img src={intersection} alt="detail" />
                </div>
                <button onClick={() => scrollToTop()}>{t("backToTop")}</button>
            </div>
            <small>{t("rightsReserved")}</small>
        </FooterStyle>
    )
}