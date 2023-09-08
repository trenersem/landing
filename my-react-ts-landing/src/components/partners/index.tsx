import { partners } from '../../constants';
import { Section, Typography } from '../atoms';
import s from './index.module.scss';

const Partners = () => (
  <Section className={s.root}>
    <Typography size='text-m'  weight='semibold' className={s.title}>
        Evolve Lists Your Property on All the Top Rental Sites<br/> to Help You Succeed
    </Typography>
    <div className={s.content}>
        {partners.map((partner) => (
        <div
            key={partner.id}
            className={s.item}
        >
            <img src={partner.logo} alt={partner.id}  className={s.img}/>
        </div>
        ))}
    </div>
  </Section>
);

export default Partners;