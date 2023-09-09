import React from 'react';
import s from './index.module.scss';
import { Section, Title, Typography } from '../atoms';
import classNames from 'classnames';
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { knowMoreList } from '../../constants';

 interface IInfoItemProps {
    currentId: number,
    title: string,
    text: string,
    id: number,
    onSelect: (id: number) => void
 }
const InfoItem = ({currentId, title, text, id, onSelect}: IInfoItemProps) => {
   
    return (
        <div>
            <div
                className={classNames(s.item__title, currentId === id && s.open)}
                onClick={() => onSelect(id)
            }> 
                <div>
                    {currentId !== id ? (
                        <AiOutlinePlus className={classNames(s.icon)}/>)
                        : (<AiOutlineMinus className={classNames(s.icon, s.active)}/>)
                    }
                </div>
                <Typography
                    weight='semibold'
                    size='text-s'
                    className={classNames(currentId === id && s.active)}
                >
                    {title}
                </Typography>
            </div>
            <div  className={classNames(s.item__text, currentId === id && s.open)}>
                <Typography
                    size='text-xs'
                >
                    {text}
                </Typography>
            </div>
        </div>
    )
}
const KnowMore = () => {
    const [currentId, setCurrentId] = React.useState(0);

    const handleSelect = (id: number) => {
        if (id === currentId) {
            setCurrentId(0);
        } else setCurrentId(id);
    };
  return (
   <Section className={s.root}>
     <Title>
          Want to Know More?
     </Title>
     <Typography className={s.description} size='text-s'>
        Here are some common questions from homeowners like you.
     </Typography>
    <div className={s.list}>
        {knowMoreList.map((item) => (
            <InfoItem
                key={item.id}
                id={item.id}
                currentId={currentId}
                title={item.title}
                text={item.text}
                onSelect={handleSelect}
            />
        ))}
    </div>
      
    </Section>
  )
}

export default KnowMore
