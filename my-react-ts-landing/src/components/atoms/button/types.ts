import { ReactNode } from "react";

export enum EButtonType {
    CLASSIC,
    OUTLINE,
    TRANSPARENT,
}
export interface IButtonProps {
    type: EButtonType
    children?: ReactNode | string;
    className?: string;
}