import styles from './page.module.css'
import HomeComponent from '../component/home/HomeComponent.jsx'
export default function Home() {
  return (
    <main className={styles.main}>
      <HomeComponent />
    </main>
  )
}
