import React from 'react';
import profilePicture from "../../../../assets/imgs/profile.jpg"
import { IntersectionDetail } from "../fragments/intersection"
import { AboutMeSectionContainer } from './style';

export const AboutMeSection = () => {
  return (
    <AboutMeSectionContainer>
      <IntersectionDetail />
      <div className="profilePicture-container">
        <p>BEHIND</p>
        <img src={profilePicture} alt="profile picture of author" className="side-picture" />
        <img src={profilePicture} alt="profile picture of author" className="middle-picture" />
        <img src={profilePicture} alt="profile picture of author" className="side-picture" />
        <p>THE SKILLS</p>
      </div>
      <div className="softSkills-cards-container">
        <div className="softSkill-card">
          <div className="softSkill-card_header">
            <p className="softSkill-card_title">About Me</p>
            <small className="softSkill-card_number">/1</small>
          </div>
          <p>Me chamo Isabelle, sou do Rio de Janeiro, e para o desgosto dos meus conterrâneos, praia não é o meu lugar preferido. Adoro cozinhar e ler livros. Gosto de ficar no meu espaço mas também gosto de momentos de extroversão</p>
        </div>
      </div>
    </AboutMeSectionContainer>
  )
}