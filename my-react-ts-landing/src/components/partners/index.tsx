import { partners } from '../../constants';
import { Section, Title } from '../atoms';
import s from './index.module.scss';

const Partners = () => (
  <Section className={s.root}>
    <Title  className={s.title}>
         Evolve Lists Your Property on All the Top Rental Sites to Help You Succeed
    </Title>
   
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