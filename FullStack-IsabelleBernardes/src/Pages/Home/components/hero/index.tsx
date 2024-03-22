import React, { useContext, useState } from 'react';
import { HeroContainerStyle } from "./style";
import bgHero from "../../../../assets/bgHero.png";
import { IntersectionDetail } from '../fragments/intersection';
import { useTranslation } from 'react-i18next';
import { JobsContext } from '../../../../providers/JobsContext';

export const HeroSection = () => {
    const { t } = useTranslation();
    const { scrollToSection } = useContext(JobsContext);
    const [crazyTextContent, setCrazyTextContent] = useState('FULLSTACK DEVELOPER');
    const [originalText, setOriginalText] = useState('FULLSTACK DEVELOPER');

    const generateRandomText = () => {
        const letters = "A1B2C3D4E5F6G7H8I9J10KLMNOPQRSTUVWXYZ";
        let interval: any = 0;
        let iteration = 0;
        clearInterval(interval);

        interval = setInterval(() => {
            const crazyNewText = originalText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return originalText[index];
                    }

                    return letters[Math.floor(Math.random() * 26)]
                })
                .join("");

            if (iteration >= originalText.length) {
                clearInterval(interval);
            }

            setCrazyTextContent(crazyNewText)

            iteration += 1 / 3;
        }, 30);
    };

    return (
        <HeroContainerStyle>
            <img className="bgHero" src={bgHero} />
            <div className="spotlight-container">
                <div className="spotlight sptl-1"></div>
                <div className="spotlight sptl-2"></div>
            </div>
            <div className='crazyText' onMouseOver={generateRandomText}>
                <h1>{crazyTextContent}</h1>
            </div>
            <div className="itens-bottom">
                <div className="itens-bottom_item">
                    <p>DESIGN</p>
                    <p>{t("tech-heroDetail")}</p>
                </div>
                <div className="work-button-container">
                    <IntersectionDetail />
                    <button onClick={() => scrollToSection("recentWorkSection")}>{t("work-heroDetail")}</button>
                </div>
                <div className="itens-bottom_item">
                    <p>UI DESIGN</p>
                    <p>{t("dev-heroDetail")}</p>
                </div>
            </div>
        </HeroContainerStyle>
    )
}