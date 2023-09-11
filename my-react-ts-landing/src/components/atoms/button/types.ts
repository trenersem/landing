import { ReactNode } from "react";

export enum EButtonType {
    CLASSIC,
    OUTLINE,
    TRANSPARENT,
}
export interface IButtonProps {
    kind?: 'submit' | 'button'
    type: EButtonType
    children?: ReactNode | string;
    className?: string;
}