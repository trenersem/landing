import s from './index.module.scss'
;
import { info } from '../../constants';
import { Section, Typography } from '../atoms';

const Info = () => {
  return (
    <Section>
        <div className={s.root}>
            {info.map((el) => (
                <div key={el.id} className={s.item}>
                    <img src={el.logo} alt={el.id} className={s.icon}/>
                    <Typography size='text-xs' className={s.text}>{el.text}</Typography>
                </div>
            ))}
        
        </div>
    </Section>
  )
}

export default Info
