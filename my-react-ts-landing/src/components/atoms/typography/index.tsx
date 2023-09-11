import {
    useMemo,
    createElement,
    ReactNode,
    ForwardRefRenderFunction,
    forwardRef,
} from 'react';
import classnames from 'classnames';

import s from './index.module.scss';
export interface TypographyPropsI {
    tag?: string;
    font?: 'second'; 
    size?:
        | 'text-l'
        | 'text-m'
        | 'text-s'
        | 'text-xs'
    weight?: 'light' |'regular' | 'semibold'| 'bold';
    color?: 'main' | 'orange' | 'blue' | 'white' | 'green';
    align?: 'left' | 'center' | 'right';
    className?: string;
    children?: ReactNode | string;
    onClick?: (event?: Event) => void;
    href?: string;
}

const Typography: ForwardRefRenderFunction<HTMLElement, TypographyPropsI> = (
    {
        tag = 'p',
        font = '',
        size = 'text-m',
        color = 'main',
        weight = 'regular',
        align = '',
        className,
        children,
        onClick,
        href,
        ...props
    },
    ref,
) => {
    const classNames = useMemo(
        () =>
            classnames(
                [s[size]],
                [s[color]],
                [s[weight]],
                [s[align]],
                [s[font]],
                className,
            ),
        [className, size, color, weight, align],
    );

       
    return createElement(
        tag,
        {
            className: classNames,
            ref,
            onClick,
            ...(tag === 'a' ? { href } : {}),
            ...props,
        },
        children,
    );
};


const ForwardedTypography = forwardRef<HTMLElement, TypographyPropsI>(Typography);
ForwardedTypography.displayName = 'Typography';

export default ForwardedTypography;
