import React from 'react'
import { StackSectionStyle } from './style'
import wheel from "../../../../assets/imgs/wheelDetail.svg"
import TextShpere from '../fragments/stackSphere'
import { useTranslation } from 'react-i18next';

export const StacksSection = () => {
    const { t } = useTranslation()
    return (
        <StackSectionStyle id="stacks">
            <div className='stackSection_column1'>
                <img src={wheel} alt="circle detail spinning" className='stackSection_column1_imgDetail' />
                <h2 className='stackSection_column1_title'>STACKS</h2>
                <p className='stackSection_column1_subtitle'>{t("aboutMyStacks")}</p>
            </div>
            <div className="stackSection_column2_stackCloud-container">
                <TextShpere />
            </div>
        </StackSectionStyle>
    )
}