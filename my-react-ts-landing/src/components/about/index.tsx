import { about } from '../../constants';
import { Section, Typography } from '../atoms';
import s from './index.module.scss';

interface IAboutItemProps {
    title: string,
    text: string,
    img: string,
}
const AboutItem = ({title, text, img}: IAboutItemProps) => {
    return (
        <div className={s.item}>
            <div className={s.item__img}>
                <img src={img} alt='about us img'/>
                <img />
            </div>
            <div>
                <Typography weight='semibold' className={s.item__title}>
                    {title}
                </Typography>
                <Typography size='text-s' className={s.item__text}>
                    {text}
                </Typography>
            </div>

        </div>
    )
}
const About = () => {
  return (
    <Section>
        {about.map((item) => (
            <AboutItem
                key={item.id}
                title={item.title}
                text={item.text}
                img={item.img}
            />
        ))}
      
    </Section>
  )
}

export default About
