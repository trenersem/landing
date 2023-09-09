import { BoxItem, Section, Title, Typography } from '../atoms';
import { EBoxItemColor } from '../atoms/box-item';
import { quotes } from '../../assets';
import { comments } from '../../constants';
import s from './index.module.scss';

interface IFeedBackCardProps {
  color: EBoxItemColor,
  text: string,
  earned: string,
  time: string,
  icon: string,
  name: string
}
const FeedBackCard = ({color, text, earned, time, icon, name}: IFeedBackCardProps) => {
  return (
    <BoxItem color={color} className={s.item}>
      <div>
        <img src={quotes} alt='quotes' className={s.item__quotes}/>
        <div>
          <Typography tag='div' font='second' size='text-s'  className={s.item__text}>
            {text}
          </Typography>
          <div  className={s.item__content}>
              <img src={icon} alt={icon}/>
              <div>
                <Typography font='second' size='text-xs'>
                    {name}
                </Typography>
                <Typography font='second' size='text-xs' weight='semibold'>
                  {earned}
                  <span className={s.time}>
                    {time}
                  </span>
                </Typography>
              </div>
          </div>
        </div>
      </div>
    </BoxItem>
  )
}


const Testimonials = () => {
  return (
    <Section className={s.root}>
      <Title>
        See What Evolve Owners Are Saying
      </Title>
      {comments.map((item) => (
        <FeedBackCard
          key={item.id}
          text={item.text}
          name={item.name}
          icon={item.icon}
          color={item.color}
          earned={item.earned}
          time={item.time}
        />
      ))}
    </Section>
  )
}

export default Testimonials
