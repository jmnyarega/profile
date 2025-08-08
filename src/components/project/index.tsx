import styled from 'styled-components'
import { Heading2 } from '../../pages/home';
import { ProjectType } from '../../pages/projects';
import { LinkTag } from '../../pages/contact';

const ProjectSectionContainer = styled.section`
  border: 1px solid rgb(var(--gray));
  display: flex;
  flex-direction: column;
`;

const ProjectContent = styled.div`
  border-top: 1px solid rgb(var(--gray));
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1;
`;

const ProjectDescription = styled.p`
  flex: 1;
  line-height: 180%;
`;

const ProjectFooter = styled.div`
  padding: 0 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const TagSection = styled.p`
  border-top: 1px solid rgb(var(--gray));
  line-height: 180%;
  text-transform: uppercase;
  padding: 1rem 0 1rem 1rem;
`;

const Project: React.FC<ProjectType> = (props) =>
  <ProjectSectionContainer>
    <img src={props.thumbnail} alt={props.name} style={
      {
        height: "14rem",
        objectFit: "contain",
        width: "90%",
        margin: "0 auto"
      }
    } />
    <TagSection> {props.tags.join(" ")} </TagSection>
    <ProjectContent>
      <Heading2>{props.name}</Heading2>
      <ProjectDescription>{props.description}</ProjectDescription>
    </ProjectContent>
    <ProjectFooter>
      <LinkTag target="_blank" className='button button--primary' href={props.liveUrl}> Live Demo </LinkTag>
      <LinkTag target="_blank" className='button button--primary' href={props.liveUrl}>Documentation</LinkTag>
    </ProjectFooter>
  </ProjectSectionContainer>


export default Project;
