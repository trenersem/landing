import React from 'react';
import classNames from 'classnames';
import s from './index.module.scss';
import { EButtonType, IButtonProps } from './types';



const Button = ({type, children, className}: IButtonProps) => {
        const buttonClassNames = React.useMemo(() => classNames(
        s.button,
        className,
        { [s.button__classic]: type === EButtonType.CLASSIC },
        { [s.button__outline]: type === EButtonType.OUTLINE },
        { [s.button__transparent]: type === EButtonType.TRANSPARENT },
    ), [className, type]);
  return (
    <button className={buttonClassNames}>
        {children}
    </button>
  )
}

export default Button
