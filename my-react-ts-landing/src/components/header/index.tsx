import s from './index.module.scss';
import { navLinks } from '../../constants';
import { Typography } from '../atoms';



const Header = () => {
  return (
    <header className={s.root}>
        <nav className={s.nav}>
              {/* <img src="/static/img/logo.svg" alt="logo" className={s.logo__img} /> */}
              <Typography className={s.logo}>LOGO</Typography>
          <ul className={s.list}>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
            >
              <Typography tag="a" size='text-xs' href={`#${nav.id}`}>{nav.title}</Typography>
            </li>
          ))}
         </ul>
        </nav>
    </header>
  )
}

export default Header
