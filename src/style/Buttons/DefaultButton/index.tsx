import { Button } from "./index.style"
import React from "react";

interface ISlideButtonProps {
    buttonText?: string,
    buttonStyle: "Icon" | "Icon&Text",
    children: React.ReactNode,
}

export const DefaultButton = ({ buttonText, buttonStyle, children }: ISlideButtonProps) => {
    return (
        <Button buttonStyle={buttonStyle}>
            {buttonText}
            {children}
        </Button>
    )
}