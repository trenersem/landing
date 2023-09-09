import classNames from 'classnames';
import { Typography } from '..';
import s from './index.module.scss'

export interface ITitleProps {
    children?: string;
    className?: string;
}

const Title = ({children, className: style }:ITitleProps) => {
  return (
    <Typography size='text-m' weight='semibold' className={classNames(s.title, style )}>
       {children}
    </Typography>
  )
}

export default Title
