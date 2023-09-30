import React from 'react';
import profilePicture from "../../../../assets/imgs/profile.jpg"
import { IntersectionDetail } from "../fragments/intersection"
import { AboutMeSectionContainer } from './style';
import { softSkills, metodologies, aboutMeText } from '../../../../utils/skillsList';
import { AboutMeCard } from '../fragments/aboutMeCard';



export const AboutMeSection = () => {
  return (
    <AboutMeSectionContainer>
      <IntersectionDetail />
      <div className="profilePicture-container">
        <p className='textDetail textTop'>BEHIND</p>
        <div className='profilePicture-container'>
          <img src={profilePicture} alt="profile picture of author" className="profilePicture side-picture" />
          <img src={profilePicture} alt="profile picture of author" className="profilePicture middle-picture" />
          <img src={profilePicture} alt="profile picture of author" className="profilePicture side-picture" />
        </div>
        <p className='textDetail textBottom'>THE SKILLS</p>
      </div>
      <div className="softSkills-cards-container">
        <AboutMeCard title='About Me' number={1} text={aboutMeText} />
        <AboutMeCard title='As a coworker' number={2} skillsList={softSkills} />
        <AboutMeCard title='Metodologies' number={3} skillsList={metodologies} />
      </div>
    </AboutMeSectionContainer>
  )
}