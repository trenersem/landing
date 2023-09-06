import  {
    FC, PropsWithChildren
} from 'react';

import s from './index.module.scss';


const PageLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={s.root}>
            {children}
        </div>
    );
};

export default PageLayout;
