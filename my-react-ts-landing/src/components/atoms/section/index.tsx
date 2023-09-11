import classNames from 'classnames';
import  { ReactNode } from 'react';
import s from './index.module.scss';


export interface ISectionProps {
    children?: ReactNode | string;
    className?: string;
}
const Section = ({children, className: style }: ISectionProps) => {
  return (
    <section className={classNames(s.root, style)}>
        <div className={s.layout}>
            {children}
        </div>
    </section>
  )
}

export default Section
