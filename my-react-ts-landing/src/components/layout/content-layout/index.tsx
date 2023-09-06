import { ReactNode } from 'react'
import s from './index.module.scss';

interface ContentLayoutI {
  children: ReactNode;
}
const ContentLayout = ({ children }: ContentLayoutI) => {
  return (
    <main className={s.root}>
      {children}
    </main>
  )
}

export default ContentLayout
