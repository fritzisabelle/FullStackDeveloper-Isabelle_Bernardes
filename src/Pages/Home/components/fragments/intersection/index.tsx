import React from 'react'
import intersection from "../../../../../assets/Intersect.svg";
import { IntersectionContainer } from "./style";

export const IntersectionDetail = () => {
  return (
    <IntersectionContainer>
      <img src={intersection} alt="detail" className="arrow arrow1" />
      <img src={intersection} alt="detail" className="arrow arrow2" />
      <img src={intersection} alt="detail" className="arrow arrow3" />
    </IntersectionContainer>
  )
}