import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quote Image Generator</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{' '}
          <a href="https://quote-image-generator.vercel.app/">
            Quote Image Generator
          </a>
        </h1>
        <p className={styles.description}>
          Get started by accessing routes
          <code className={styles.code}>/:id</code>
          where id can be any value
        </p>

        <a href="https://quote-image-generator.vercel.app/any_id_here">
          https://quote-image-generator.vercel.app/any_id_here
        </a>
      </main>
    </div>
  );
}
