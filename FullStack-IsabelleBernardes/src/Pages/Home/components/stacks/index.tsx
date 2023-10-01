import React from 'react'
import { StackSectionStyle } from './style'
import wheel from "../../../../assets/imgs/wheelDetail.svg"
import TextShpere from '../fragments/stackSphere'

export const StacksSection = () => {
    return (
        <StackSectionStyle>
            <div className='stackSection_column1'>
                <img src={wheel} alt="circle detail spinning" className='stackSection_column1_imgDetail' />
                <h2 className='stackSection_column1_title'>STACKS</h2>
                <p className='stackSection_column1_subtitle'>As a Full Stack Developer I try to keep up with the most used languages, frameworks and librarys focusing on being as comprehensive as possible to deliver not only stunning but usefull solutions</p>
            </div>
            <div className="stackSection_column2_stackCloud-container">
                <TextShpere />
            </div>
        </StackSectionStyle>
    )
}