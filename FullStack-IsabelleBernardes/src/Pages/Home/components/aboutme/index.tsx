import React from 'react';
import profilePicture from "../../../../assets/imgs/profile.jpg"
import { IntersectionDetail } from "../fragments/intersection"
import { AboutMeSectionContainer, DetailTitle } from './style';
import { softSkills, ptSoftSkills, metodologies, ptMetodologies} from '../../../../utils/skillsList';
import { AboutMeCard } from '../fragments/aboutMeCard';
import { useScroll, useTransform } from "framer-motion"
import { useTranslation } from 'react-i18next';



export const AboutMeSection = () => {
  const { t,i18n } = useTranslation()
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [400, -400]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-800, 1000]);

  const currentLanguage = i18n.language;

  return (
    <AboutMeSectionContainer id="aboutMe">
      <IntersectionDetail />
      <div className='profilePicture__container'>
        <DetailTitle style={{ x: x2 }} className='textDetail textTop'>{t("home.AboutMeSection.title.top")}</DetailTitle>
        <div className='profilePicture-container'>
          <img src={profilePicture} alt="profile picture of author" className="profilePicture side-picture" />
          <img src={profilePicture} alt="profile picture of author" className="profilePicture middle-picture" />
          <img src={profilePicture} alt="profile picture of author" className="profilePicture side-picture" />
        </div>
        <DetailTitle style={{ x }} className='textDetail textBottom'>{t("home.AboutMeSection.title.bottom")}</DetailTitle>
      </div>
      <div className="softSkills-cards-container">
        <AboutMeCard title={currentLanguage === 'en' ? 'About Me' : 'Sobre Mim'} number={1} text={t("home.AboutMeSection.description")} />
        <AboutMeCard title={currentLanguage === 'en' ? 'As a Coworker' : 'Como colega'} number={2} skillsList={currentLanguage === 'en' ? softSkills : ptSoftSkills} />
        <AboutMeCard title={currentLanguage === 'en' ? 'Metodologies' : 'Metodologias'} number={3} skillsList={currentLanguage === 'en' ? metodologies : ptMetodologies} />
      </div>
    </AboutMeSectionContainer>
  )
}