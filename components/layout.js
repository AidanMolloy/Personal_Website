import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const Logo = (props) => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {isHovering ? (
            <Image
              priority
              src="/images/suit.jpg"
              className={utilStyles.borderCircle}
              height={props.size}
              width={props.size}
              alt=""
            />
        ) : (
          <Image
            priority
            src="/images/profile.jpg"
            className={utilStyles.borderCircle}
            height={props.size}
            width={props.size}
            alt=""
          />
        )}
      </div>
  );
};

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Aidan Molloy's Personal Website"
        />
        <meta
          property="og:image"
          content={`/images/cartoon_profile.png`}
        />
        <meta name="og:title" content={"Aidan Molloy's Personal Website"} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <Logo size="144"/>
        ) : (
          <>
            <Link href="/">
              <a>
                <Logo size="108"/>
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{"Aidan Molloy"}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}