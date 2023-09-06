import React, { ReactNode } from 'react';
import s from './index.module.scss';
import classNames from 'classnames';

export enum EBoxItemColor {
    GREEN,
    ORANGE,
    BLUE,
}
export interface IBoxItemProps {
    color: EBoxItemColor
    children?: ReactNode | string;
    className?: string;
}

const BoxItem = ({children, className, color} : IBoxItemProps) => {
      const boxItemClassNames = React.useMemo(() => classNames(
        s.root,
        className,
        { [s.orange]: color === EBoxItemColor.ORANGE },
        { [s.green]: color === EBoxItemColor.GREEN },
        { [s.blue]: color === EBoxItemColor.BLUE },
    ), [className, color]);
  return (
    <div className={boxItemClassNames}>
        {children}
    </div>
  )
}

export default BoxItem
