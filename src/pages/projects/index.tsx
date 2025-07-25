import Project from "../../components/project";
import {Heading2, Spacer} from "../home";

const Projects = () =>
  <div>
    <Spacer $size="6rem" />
    <Heading2><span style={{color: "rgb(var(--primary))"}}>/</span>projects</Heading2>
    <p>List of my projects</p>
    <Spacer $size="3rem" />

    <section>
      <Heading2><span style={{color: "rgb(var(--primary))"}}>#</span>complete-apps</Heading2>
      <Spacer $size="2rem" />
      <section style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(20rem, auto))", gap: "2rem"}}>
        <Project />
        <Project />
        <Project />
        <Project />
      </section>
    </section>
    <Spacer $size="4rem" />
    <section>
      <Heading2><span style={{color: "rgb(var(--primary))"}}>#</span>List of my projects</Heading2>
      <Spacer $size="2rem" />
      <section style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(20rem, auto))", gap: "2rem"}}>
        <Project />
        <Project />
        <Project />
        <Project />
      </section>
    </section>

  </div>


export default Projects;
