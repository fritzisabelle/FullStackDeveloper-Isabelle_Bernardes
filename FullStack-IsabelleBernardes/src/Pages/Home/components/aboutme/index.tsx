import React from 'react';
import profilePicture from "../../../../assets/imgs/profile.jpg"
import arrow from "../../../../assets/imgs/arrowRight.svg"
import { IntersectionDetail } from "../fragments/intersection"
import { AboutMeSectionContainer, DetailTitle } from './style';
import { softSkills, metodologies, aboutMeText } from '../../../../utils/skillsList';
import { AboutMeCard } from '../fragments/aboutMeCard';
import { useScroll, useTransform } from "framer-motion"
import { SlideButton } from '../../../../style/Buttons/SlideButton/slideButton.component';



export const AboutMeSection = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [400, -400]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-800, 1000]);

  return (
    <AboutMeSectionContainer id="aboutMe">
      <IntersectionDetail />
      <div className="profilePicture-container">
        <DetailTitle style={{ x: x2 }} className='textDetail textTop'>BEHIND</DetailTitle>
        <div className='profilePicture-container'>
          <img src={profilePicture} alt="profile picture of author" className="profilePicture side-picture" />
          <img src={profilePicture} alt="profile picture of author" className="profilePicture middle-picture" />
          <img src={profilePicture} alt="profile picture of author" className="profilePicture side-picture" />
        </div>
        <DetailTitle style={{ x }} className='textDetail textBottom'>THE SKILLS</DetailTitle>
      </div>
      <div className="softSkills-cards-container">
        <AboutMeCard title='About Me' number={1} text={aboutMeText} />
        <AboutMeCard title='As a coworker' number={2} skillsList={softSkills} />
        <AboutMeCard title='Metodologies' number={3} skillsList={metodologies} />
      </div>
    </AboutMeSectionContainer>
  )
}