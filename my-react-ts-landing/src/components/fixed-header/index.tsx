import classNames from 'classnames';
import { Button, EButtonType, Typography } from '../atoms';
import s from './index.module.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FixedHeader = () => {
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={classNames(s.root, isScrolled && s.active)}>
        <Typography font='second' className={s.title} weight='semibold'>
            Ready To Make More Money From Your Short-Term Rental?
        </Typography>
        <Link to='/try' className='link'>
            <Button type={EButtonType.CLASSIC} className={s.button}>
                Let’s Do This
            </Button>
         </Link>
    </div>
  )
}

export default FixedHeader
