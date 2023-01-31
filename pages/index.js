import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import Thumbnail from "../components/thumbnail";
import Ticket from "../components/ticket";
import particleJson from "../particles/star";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Home({ allPostsData }) {
  console.log(allPostsData);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Layout home>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particleJson}
      />
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingLg}>About me</h2>
        <p>I'm a Student and an app developer.</p>
      </section>
      <section className="container">
        <Ticket src="" explain="" color="">
          About
        </Ticket>
        <Ticket src="" explain="" color="">
          Works
        </Ticket>
        <Ticket src="" explain="" color="">
          Skills
        </Ticket>
        <Ticket src="" explain="" color="">
          Contact
        </Ticket>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>My Portfolio</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, createdAt, title, eyecatch }) => (
            <li className={utilStyles.listItem} key={id}>
              <Thumbnail src={eyecatch.url} className="thumbnail"></Thumbnail>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={createdAt} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingLg}>Skills</h2>
        <p>I'm a Student and an app developer.</p>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
