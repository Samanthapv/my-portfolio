import Head from 'next/head'
//import '../assets/tailwind.css';
//import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="mt-3">
      <Head>
        <title className="bg-indigo-700 mt-3">Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <main>
      </main>

      <footer className="mb-6">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo"  />
        </a>
      </footer>
    </div>
  )
}
