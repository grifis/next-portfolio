import Layout from "../components/layout";
import Head from "next/head";

export default function Post({ postData }) {
  console.log(postData);
  return (
    <Layout>
      <Head>
        <title>about</title>
      </Head>
    </Layout>
  );
}
