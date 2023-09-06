import React from 'react';
import classnames from 'classnames';
import { ESvgIconType } from './types';

import S from './index.module.scss';

export interface ISvgIconProps {
    type?: ESvgIconType | string;
    color?: string;
    onClick?: (e: unknown) => void;
    mainClassName?: string;
    maskClassName?: string;
}

const SvgIcon = ({
    type,
    color,
    mainClassName: positionClassName,
    maskClassName: colorClassName,

    onClick,
}: ISvgIconProps) => {
    const svgStyle = React.useMemo(() => ({
        WebkitMaskImage: `url(${type})`,
        maskImage: `url(${type})`,
        backgroundColor: color,
    }), [type, color]);

    const props = React.useMemo(() => (typeof onClick === 'function' ? ({
        onClick,
        onKeyPress: onClick,
        role: 'button',
        tabIndex: 0,
    }) : {}), [onClick]);

    return (
        <div
            className={classnames(S.svgIcon, positionClassName)}
            {...props}
        >
            <div style={svgStyle} className={classnames(S.mask, colorClassName)}>
                <img className={S.image} src={type} alt=""/>
            </div>
        </div>
    );
}

export default SvgIcon;
