import { stats } from '../../constants';
import { BoxItem, Section, Typography } from '../atoms';
import s from './index.module.scss';

const Stats = () => (
  <Section className={s.root}>
    <Typography size='text-m' className={s.title}>
        We’ve Helped Thousands of Homeowners<br /> Grow Their Vacation Rental Income
    </Typography>
    <div className={s.content}>
        {stats.map((stat) => (
        <BoxItem
            key={stat.id}
            className={s.item}
            color={stat.color}
        >
            <img src={stat.logo} alt={stat.id}  className={s.img}/>
            <Typography tag='h4' size='text-s'>
            {stat.value}
            </Typography>
            <Typography  className={s.text} size='text-xs'>
                <span>
                {stat.title}
                </span>
            </Typography>
        </BoxItem>
        ))}
    </div>
  </Section>
);

export default Stats;