import classNames from 'classnames';
import { bg_1 } from '../../assets';
import { Section, Typography } from '../atoms';
import s from './index.module.scss'

const Stress = () => {
  return (
    <Section className={s.root}> 
        <Typography className={s.title}>
            Send Stress Packing
        </Typography>
        <div  className={s.content}>
            <Typography className={classNames(s.text, s.item)} size='text-xs'>
                Traditional short-term rental managers are often local, small businesses with just one or a few people handling everything. They’re typically great with services like cleaning, but lack the marketing and booking expertise you need to make the most from your investment.
                <br/>
                <br/>
                <br/>
                Evolve has teams of specialists in every facet of management working around the clock to ensure that your property outperforms the competition. We deliver top-notch revenue management and customer service. Plus, we give you the flexibility to choose your own home team so you know your property is always in good hands.
                <br/>
                <br/>
                <br/>
                And our marketing is second to none. Every Evolve property gets professional photography, and a team of experts craft each listing to ensure they’ll reach the top of search results. We also promote your property on all the popular sites like Airbnb and Vrbo, in addition to Evolve.com. Our goal is to consistently deliver a 5-star experience for you and your guests. Best of all,
                <strong>we only charge 10%.</strong>
            </Typography>
            <div className={s.item}>
                <img src={bg_1} alt='img' className={classNames(s.img)}/>
            </div>
        </div>
      
    </Section>
  )
}

export default Stress;
