import { Link } from 'react-router-dom';
import { Button, EButtonType, Section, Typography } from '../atoms';
import s from './index.module.scss';

const CTA = () => {
  return (
    <Section className={s.section}>
        <div className={s.root}>
            <div className={s.content}>
                <Typography weight='semibold' className={s.title}>
                    Expert Short-Term Rental Management Services for Less
                </Typography>
                <Typography weight='semibold' size='text-xs'>
                   With Evolve’s fresh approach and 10% industry-low fee, you’ll stress less and earn more.for Less
                </Typography>
                <div className={s.button}>
                    <Typography className={s.text} size='text-xs' weight='semibold' color='blue'>
                        Ready To Make More Money From Your Short-Term Rental?
                    </Typography>
                    <Button type={EButtonType.CLASSIC}>
                         <Link to='/try' className='link'>
                            See If You Quality
                        </Link>   
                    </Button>
                </div>

            </div>
        </div>
    </Section>
  )
}

export default CTA
