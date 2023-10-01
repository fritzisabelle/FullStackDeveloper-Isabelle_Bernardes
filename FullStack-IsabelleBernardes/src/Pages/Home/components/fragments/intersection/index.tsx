import React from 'react'
import intersection from "../../../../../assets/Intersect.svg";
import { IntersectionContainer } from "./style";

export const IntersectionDetail = () => {
  return (
    <IntersectionContainer>
      <img src={intersection} alt="detail" className="arrowTop" />
      <img src={intersection} alt="detail" className="arrowMiddle" />
      <img src={intersection} alt="detail" className="arrowBottom" />
    </IntersectionContainer>
  )
}