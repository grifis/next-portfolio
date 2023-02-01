import Layout from "../components/layout";
import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";
import Thumbnail from "../components/thumbnail";
import Link from "next/link";

export default function Works({ allPostsData }) {
  console.log(allPostsData);
  return (
    <Layout>
      <Head>
        <title>works</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Works</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, createdAt, title, eyecatch }) => (
            <div className={utilStyles.listItem} key={id}>
              <Thumbnail
                href={`/posts/${id}`}
                src={eyecatch.url}
                className="thumbnail"
              >
                {title}
              </Thumbnail>
            </div>
          ))}
        </ul>
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
