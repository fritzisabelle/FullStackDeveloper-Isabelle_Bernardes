import React from 'react';
import { HeroContainerStyle } from "./style";
import bgHero from "../../../../assets/bgHero.png";
import { IntersectionDetail } from '../fragments/intersection';
import { useTranslation } from 'react-i18next';

export const HeroSection = () => {
    const { t } = useTranslation();

    return (
        <HeroContainerStyle>
            <img className="bgHero" src={bgHero} />
            <div className="spotlight-container">
                <div className="spotlight sptl-1"></div>
                <div className="spotlight sptl-2"></div>
            </div>
            <h1>
                FULL STACK
                <br /> DEVELOPER
            </h1>
            <div className="itens-bottom">
                <div className="itens-bottom_item">
                    <p>DESIGN</p>
                    <p>{t("tech-heroDetail")}</p>
                </div>
                <div className="work-button-container">
                    <IntersectionDetail />
                    <p>{t("work-heroDetail")}</p>
                </div>
                <div className="itens-bottom_item">
                    <p>UI DESIGN</p>
                    <p>{t("dev-heroDetail")}</p>
                </div>
            </div>
        </HeroContainerStyle>
    )
}