import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import PostBox from "../components/postBox";
import Link from "next/link";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.bio}`}>
        <p>Hello, I&apos;m Aidan.</p>
        <p>
          I&apos;m a Final year Computer Science Student at University College
          Cork. I&apos;ve been working in tech for over 10 years, from starting
          my own companies to Interning three times at Google.
        </p>
        <p>
          This website is work in progress, you can view my previous website at{" "}
          <Link href="https://aidan.molloy.ie">https://aidan.molloy.ie</Link>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Experience</h2>
        <PostBox allPostsData={allPostsData} />
      </section>
    </Layout>
  );
}
