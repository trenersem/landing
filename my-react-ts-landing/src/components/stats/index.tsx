import { stats } from '../../constants';
import { BoxItem, Section, Title, Typography } from '../atoms';
import { EBoxItemColor } from '../atoms/box-item';
import s from './index.module.scss';

const Stats = () => {
    const detectColor = (color: EBoxItemColor) => {
    const colorMap: Record<EBoxItemColor, "blue" | "green" | "orange"> = {
        [EBoxItemColor.BLUE]: 'blue',
        [EBoxItemColor.GREEN]: 'green',
        [EBoxItemColor.ORANGE]: 'orange'
    };

    return colorMap[color] || 'orange';
    };
    return (
      <Section className={s.root}>
        <Title  className={s.title}>
              We’ve Helped Thousands of Homeowners Grow Their Vacation Rental Income
        </Title>
        <div className={s.content}>
            {stats.map((stat) => (
            <BoxItem
                key={stat.id}
                className={s.item}
                color={stat.color}
            >
                <img src={stat.logo} alt={stat.id}  className={s.img}/>
                <div className={s.content__stats}>
                    <Typography  size='text-m' weight='semibold' color={detectColor(stat.color)}>
                    {stat.value}
                    </Typography>
                    <Typography  className={s.text} size='text-xs' color={detectColor(stat.color)}>
                        {stat.title}
                    </Typography>
                </div>
            </BoxItem>
            ))}
        </div>
      </Section>
    );
}

export default Stats;