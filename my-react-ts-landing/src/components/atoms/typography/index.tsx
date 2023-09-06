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
    size?:
        | 'text-l'
        | 'text-m'
        | 'text-s'
        | 'text-xs'
    weight?: 'regular' | 'bold';
    color?: 'main' | 'yellow' | 'pink' | 'white';
    align?: 'left' | 'center' | 'right';
    className?: string;
    children?: ReactNode | string;
    onClick?: (event?: Event) => void;
    href?: string;
}

const Typography: ForwardRefRenderFunction<HTMLElement, TypographyPropsI> = (
    {
        tag = 'p',
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
