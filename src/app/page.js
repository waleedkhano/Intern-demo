import styles from './page.module.css'
import HomeComponent from '../component/home/HomeComponent.jsx'
import HomeSecComp from '@/component/home/HomeSecComp'
export default function Home() {
  return (
    <main className={styles.main}>
      <HomeComponent />
      <HomeSecComp/>
    </main>
  )
}
