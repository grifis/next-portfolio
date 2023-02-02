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
        <p>
          2000年生まれ。神奈川県出身。AIに興味を持ち、法学部に在学中でありながらプログラミングを始める。
          <br />
          大学２年時にdiscordbotを開発し、実際に友人たちに使用してもらうことに喜びを感じ、より多くの人にサービスを届けるため、web系へと転身。
          <br />
          現在はプログラミングスクールでメンターとして大学生にプログラミングを教えながら、友人とアプリ開発を行う。
        </p>
        <p>
          Born in 2000 in Kanagawa Prefecture, Japan. Interested in AI, he
          started programming while still a law student.
          <br />
          In his sophomore year of college, he developed discordbot and was so
          happy to see his friends using it that he switched to the web in order
          to deliver the service to more people.
          <br />
          Currently teaches programming to college students as a mentor at a
          programming school and develops apps with friends.
        </p>
      </section>
    </Layout>
  );
}
