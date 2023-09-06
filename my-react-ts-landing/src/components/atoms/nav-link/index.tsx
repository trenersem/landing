import classNames from 'classnames';
import { ReactNode } from 'react';
import s from './index.module.scss';

export interface INavLink {
    href: string;
    children: ReactNode;
    isActive?: boolean;
    className?: string;
}

const NavLink = ({href, children, isActive, className}: INavLink ) => {
  return (
   <a
     href={href}
     target='_blank'
     className={classNames(s.link, className, isActive ? s.link__active : '')}
     >
        {children}
    </a>
  )
}

export default NavLink
