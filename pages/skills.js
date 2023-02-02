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
    { type: "mysql", level: 60 },
    { type: "docker", level: 60 },
    { type: "grafql", level: 20 },
    { type: "git&github", level: 80 },
  ];

  const dataScience = [
    { type: "python", level: 50 },
    { type: "r", level: 30 },
  ];

  const frontColors = {
    bar: "#3498db",
    title: {
      text: "#fff",
      background: "#2980b9",
    },
  };

  const backColors = {
    bar: "#66cdaa",
    title: {
      text: "#fff",
      background: "#2e8b57",
    },
  };

  const inflaColors = {
    bar: "#3498db",
    title: {
      text: "#fff",
      background: "#2980b9",
    },
  };

  const dataColors = {
    bar: "#da70d6",
    title: {
      text: "#fff",
      background: "#9400d3",
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
        <SkillBar skills={backend} height={20} colors={backColors} />

        <h3 className={utilStyles.headingMg}>Infrastructure</h3>
        <SkillBar skills={infra} height={20} />

        <h3 className={utilStyles.headingMg}>Data Sciense</h3>
        <SkillBar skills={dataScience} height={20} colors={dataColors} />
      </section>
    </Layout>
  );
}
