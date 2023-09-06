import { Typography } from '../atoms';
import s from './index.module.scss'

const Footer = () => {

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className={s.footer}>
        <img
            src='/static/img/rocket.svg'
            alt='rocket' className={s['footer__img']}
            onClick={handleScrollToTop}
        />
        <Typography
            color='yellow'
            className={s.footer__text}
        >
            Exciting space adventure!
        </Typography>
    </footer>
  )
}

export default Footer
