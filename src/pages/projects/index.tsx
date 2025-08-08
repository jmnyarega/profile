import {useEffect, useState} from "react";
import Project from "../../components/project";
import {Heading2, Spacer} from "../home";
import styled from "styled-components";

export type ProjectType = {
  name: string;
  description: string;
  thumbnail: string;
  tags: string[];
  liveUrl: string;
}

export type ProjectGroups = {
  [key: string]: ProjectType[]
}

export const ProjectsGridSection = styled.section`
  display: grid;
  gap: 2rem;
  
  @media(min-width: 50rem) {
    grid-template-columns: 1fr 1fr;
  }

  @media(min-width: 75rem) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Projects = () => {
  const [projectGroups, setProjectGroups] = useState<ProjectGroups>({});

  useEffect(() => {
    const getProjects = async () => {
      const projectGroups = (await import("../../data.json")).default.projects;
      setProjectGroups(projectGroups);
    }
    getProjects();
  }, []);

  return (
    <div>
      <Spacer $size="6rem" />
      <Heading2><span style={{color: "rgb(var(--primary))"}}>/</span>projects</Heading2>

      <Spacer $size="0.5rem" />
      <p>List of my projects</p>
      <Spacer $size="3rem" />

      {
        Object.keys(projectGroups).map(projectGroupName =>
          <div key={projectGroupName}>
            <section>
              <Heading2 style={{textTransform: "capitalize"}}>
                <span style={{color: "rgb(var(--primary))"}}>#</span>
                {projectGroupName}
              </Heading2>
              <Spacer $size="2rem" />
              <ProjectsGridSection>
                {projectGroups[projectGroupName].map(project => <Project key={project.name} {...project} />)}
              </ProjectsGridSection>
            </section>
            <Spacer $size="4rem" />
          </div>
        )}

    </div>
  )
}

export default Projects;
