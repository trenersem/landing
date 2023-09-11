import classNames from 'classnames';
import { footer } from '../../assets';
// import { socialMedia } from '../../constants';
import { Typography } from '../atoms';
import s from './index.module.scss'

const Footer = ({className}:{className?: string}) => {
  return (
    <footer className={classNames(s.footer, className)}>
      <div className={s.content}>
        <Typography
            className={s.footer__text}
            size='text-s'
        >
            Copyright Ⓒ 2022 HooBank. All Rights Reserved.
        </Typography>
        <div className={s.privacy}>
          <Typography
              className={s.link}
              tag='a'
              href='/'
              size='text-xs'
          >
              Terms of Service
          </Typography>
          <Typography
              className={s.link}
              tag='a'
              href='/'
              size='text-xs'
          > |
          </Typography>
          <Typography
              className={s.link}
              tag='a'
              href='/'
              size='text-xs'
          >
              Privacy
          </Typography>
        </div>
      </div>
        {/* <div className={s.links}>
            {socialMedia.map((social) => (
              <img
                key={social.id}
                src={social.icon}
                alt={social.id}
                className={s.links__item}
              />
            ))}
        </div> */}
        <img src={footer} alt="footer img" />
    </footer>
  )
}

export default Footer
