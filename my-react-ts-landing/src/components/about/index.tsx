import classNames from 'classnames';
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
            <div className={classNames(s.item__img, s.flex)}>
                <img src={img} alt='about us img'/>
                <img />
            </div>
            <div className={classNames(s.flex, s.content)}>
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
    <Section className={s.root}>
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
