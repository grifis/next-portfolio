import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Ticket from "../components/ticket";

export default function Home({ allPostsData }) {
  console.log(allPostsData);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="container">
        <Ticket href="/about" explain="">
          About
        </Ticket>
        <Ticket href="/works" explain="" card="card2">
          Works
        </Ticket>
        <Ticket href="/skills" explain="" card="card3">
          Skills
        </Ticket>
      </section>
    </Layout>
  );
}
