import { Button } from "./button.style"
import React from "react";

interface ISlideButtonProps {
    buttonText?: string,
    buttonStyle: "Icon" | "Icon&Text" | "CaseButton",
    children: React.ReactNode,
}

export const SlideButton = ({ buttonText, buttonStyle, children }: ISlideButtonProps) => {
    return (
        <Button buttonStyle={buttonStyle}>
            {buttonText}
            {children}
        </Button>
    )
}