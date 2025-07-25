import styled from 'styled-components'
import Button from '../button';
import {Heading2} from '../../pages/home';

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
  gap: 1rem;
`;

const ProjectDescription = styled.p` `;

const LanguagesSection = styled.p`
  border-top: 1px solid rgb(var(--gray));
  padding: 1rem 0 1rem 1rem;
`;

const Project = () => <ProjectSectionContainer>
  <img src="images/profile-photo.png" alt="Josiah Mokobo Nyarega" />
  <LanguagesSection> HTML SCSS Python Flask </LanguagesSection>
  <ProjectContent>
    <Heading2>Project Name</Heading2>
    <ProjectDescription>Neque porro quisquam est</ProjectDescription>
    <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem"}}>
      <Button className='button button--primary'>Live Demo</Button>
      <Button className='button button--gray'>Documentation</Button>
    </div>
  </ProjectContent>
</ProjectSectionContainer>


export default Project;
