import s from './index.module.scss';
import { Typography } from '../atoms';
import { phone } from '../../assets';



const Header = () => {
  return (
    <header className={s.root}>
        <nav className={s.nav}>
              {/* <img src="/static/img/logo.svg" alt="logo" className={s.logo__img} /> */}
              <Typography className={s.logo}>LOGO</Typography>
         <div className={s.content}>
          <img  src={phone} alt='phone icon' className={s.icon}/>
          <Typography size='text-s' weight='semibold' tag='a' href='tel:+17542751268'>
              754.275.1268
          </Typography>
         </div>
        </nav>
    </header>
  )
}

export default Header
