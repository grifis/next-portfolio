import Layout from "../components/layout";
import Head from "next/head";
import utilStyles from "../styles/utils.module.css";


export default function About() {
  return (
    <Layout>
      <Head>
        <title>about</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingLg}>About me</h2>
        <p>I'm a Student and an app developer.</p>
      </section>
    </Layout>
  );
}
