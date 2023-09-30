import React from 'react';
import { AboutMeCardStyle } from './style';

interface IAboutMeCardProps {
  title: string;
  number: number;
  text?: string;
  skillsList?: string[];
}

export const AboutMeCard = ({ title, number, text, skillsList }: IAboutMeCardProps) => {
  return (
    <AboutMeCardStyle key={number}>
      <div className="softSkill-card_header">
        <h3 className="softSkill-card_title">{title}</h3>
        <small className="softSkill-card_number">/{number}</small>
      </div>
      {text ? <p className='aboutMeText'>{text}</p> : null}
      {skillsList ? (skillsList.map((skill) => {
        return <span className='skillTag'>{skill}</span>
      })
      ) : null}
    </AboutMeCardStyle>
  )
}