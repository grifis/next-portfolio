import Layout from "../components/layout";
import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import SkillBar from "react-skillbars";

export default function Skills() {
  const frontend = [
    { type: "HTML&CSS", level: 100 },
    { type: "JavaScript", level: 90 },
    { type: "TypeScript", level: 30 },
    { type: "React", level: 80 },
    { type: "NEXT", level: 40 },
  ];

  const backend = [
    { type: "php", level: 70 },
    { type: "Laravel", level: 100 },
    { type: "ruby", level: 30 },
    { type: "rails", level: 30 },
  ];

  const infra = [
    { type: "mysql", level: 70 },
    { type: "docker", level: 100 },
    { type: "grafql", level: 30 },
    { type: "git&github", level: 30 },
  ];

  const frontColors = {
    bar: "#3498db",
    title: {
      text: "#fff",
      background: "#2980b9",
    },
  };

  return (
    <Layout>
      <Head>
        <title>skills</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingLg}>Skills</h2>

        <h3 className={utilStyles.headingMg}>Frontend</h3>
        <SkillBar skills={frontend} height={20} colors={frontColors} />

        <h3 className={utilStyles.headingMg}>Backend</h3>
        <SkillBar skills={backend} height={20} />

        <h3 className={utilStyles.headingMg}>Infrastructure</h3>
        <SkillBar skills={frontend} height={20} />

        <h3 className={utilStyles.headingMg}>Data Sciense</h3>
        <SkillBar skills={frontend} height={20} />
      </section>
    </Layout>
  );
}
