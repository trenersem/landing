import s from './index.module.scss';
import { Button, EButtonType, Typography } from '../atoms';
import { bg_mobile } from '../../assets';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className={s.root}>
        <div className={s.bg}/>
        <div className={s.img}>
            <img src={bg_mobile} alt='bg' />
        </div>
        <div className={s.content}>
            <Typography tag="h1" size='text-l' className={s.title} weight='bold'>
                Maximize Your<br/>
                    Short-Term Rental
                <br/> for Less
            </Typography>
            <Typography className={s.discription} size='text-xs' weight='semibold'>
                Evolve partners with you and takes on the time-consuming tasks of<br/>
                vacation rental management so you can earn more and stress less.
            </Typography>
            <div className={s.button}>
                <Typography className={s.text} size='text-xs' weight='semibold' color='blue'>Ready To Make More Money From Your Short-Term Rental?</Typography>
                <Link to='/try' className='link'>
                    <Button type={EButtonType.CLASSIC}>
                            See If You Quality
                    </Button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Main
