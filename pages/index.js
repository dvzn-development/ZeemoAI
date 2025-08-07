import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zeemo AI</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.logo}>Z</div>
        <h1 className={styles.title}>Zeemo AI</h1>
        <p className={styles.tagline}>Your intelligent assistant for smarter conversations</p>
        <Link href="/chat" className={styles.ctaButton}>
          Start Chatting
        </Link>
        
        <div className={styles.features}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className={styles.featureTitle}>Smart Responses</h3>
            <p className={styles.featureDesc}>Powered by advanced AI for natural conversations</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.4 15C19.2669 15.3016 19.227 15.6362 19.2847 15.9606C19.3424 16.285 19.4953 16.5843 19.7226 16.8174C19.95 17.0505 20.2406 17.2064 20.5527 17.2636C20.8648 17.3208 21.1826 17.2769 21.4667 17.1378L21.6 17.0667L21.6313 17.0894C22.562 15.5094 23 13.7778 23 12C23 10.2222 22.562 8.49059 21.6313 6.91056L21.6 6.93333L21.4667 6.86224C21.1826 6.72314 20.8648 6.67923 20.5527 6.73644C20.2406 6.79366 19.95 6.94946 19.7226 7.18259C19.4953 7.41572 19.3424 7.715 19.2847 8.03941C19.227 8.36382 19.2669 8.69836 19.4 9L19.4667 9.2C19.5575 9.432 19.6 9.68 19.6 9.93333C19.6 11.04 18.7067 12 17.4667 12C16.2267 12 15.3333 11.04 15.3333 9.93333C15.3333 9.68 15.3757 9.432 15.4667 9.2L15.5333 9C15.6664 8.69836 15.7063 8.36382 15.6486 8.03941C15.5909 7.715 15.438 7.41572 15.2107 7.18259C14.9833 6.94946 14.6927 6.79366 14.3806 6.73644C14.0685 6.67923 13.7507 6.72314 13.4667 6.86224L13.3333 6.93333L13.302 6.91056C12.3713 8.49059 11.9333 10.2222 11.9333 12C11.9333 13.7778 12.3713 15.5094 13.302 17.0894L13.3333 17.0667L13.4667 17.1378C13.7507 17.2769 14.0685 17.3208 14.3806 17.2636C14.6927 17.2064 14.9833 17.0505 15.2107 16.8174C15.438 16.5843 15.5909 16.285 15.6486 15.9606C15.7063 15.6362 15.6664 15.3016 15.5333 15L15.4667 14.8C15.3757 14.568 15.3333 14.32 15.3333 14.0667C15.3333 12.96 16.2267 12 17.4667 12C18.7067 12 19.6 12.96 19.6 14.0667C19.6 14.32 19.5575 14.568 19.4667 14.8L19.4 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className={styles.featureTitle}>Always Learning</h3>
            <p className={styles.featureDesc}>Continuously improving to serve you better</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.4 15C19.2669 15.3016 19.227 15.6362 19.2847 15.9606C19.3424 16.285 19.4953 16.5843 19.7226 16.8174C19.95 17.0505 20.2406 17.2064 20.5527 17.2636C20.8648 17.3208 21.1826 17.2769 21.4667 17.1378L21.6 17.0667L21.6313 17.0894C22.562 15.5094 23 13.7778 23 12C23 10.2222 22.562 8.49059 21.6313 6.91056L21.6 6.93333L21.4667 6.86224C21.1826 6.72314 20.8648 6.67923 20.5527 6.73644C20.2406 6.79366 19.95 6.94946 19.7226 7.18259C19.4953 7.41572 19.3424 7.715 19.2847 8.03941C19.227 8.36382 19.2669 8.69836 19.4 9L19.4667 9.2C19.5575 9.432 19.6 9.68 19.6 9.93333C19.6 11.04 18.7067 12 17.4667 12C16.2267 12 15.3333 11.04 15.3333 9.93333C15.3333 9.68 15.3757 9.432 15.4667 9.2L15.5333 9C15.6664 8.69836 15.7063 8.36382 15.6486 8.03941C15.5909 7.715 15.438 7.41572 15.2107 7.18259C14.9833 6.94946 14.6927 6.79366 14.3806 6.73644C14.0685 6.67923 13.7507 6.72314 13.4667 6.86224L13.3333 6.93333L13.302 6.91056C12.3713 8.49059 11.9333 10.2222 11.9333 12C11.9333 13.7778 12.3713 15.5094 13.302 17.0894L13.3333 17.0667L13.4667 17.1378C13.7507 17.2769 14.0685 17.3208 14.3806 17.2636C14.6927 17.2064 14.9833 17.0505 15.2107 16.8174C15.438 16.5843 15.5909 16.285 15.6486 15.9606C15.7063 15.6362 15.6664 15.3016 15.5333 15L15.4667 14.8C15.3757 14.568 15.3333 14.32 15.3333 14.0667C15.3333 12.96 16.2267 12 17.4667 12C18.7067 12 19.6 12.96 19.6 14.0667C19.6 14.32 19.5575 14.568 19.4667 14.8L19.4 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className={styles.featureTitle}>24/7 Availability</h3>
            <p className={styles.featureDesc}>Ready to help whenever you need it</p>
          </div>
        </div>
      </main>
    </div>
  )
}