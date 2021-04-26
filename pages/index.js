import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Home</title>
      </Head>
      <div className="hero">
     
      </div>
      <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, minus.</p>
      <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, minus.</p>
      <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, minus.</p>
       <Link href="/blogs/test"><a > <button className={styles.btn}>See Blog Posts</button></a></Link>
       </div>
    </div>
  )
}
