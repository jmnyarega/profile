import {Link} from 'react-router';
import {useCallback, useEffect, useState} from 'react';
import styled from 'styled-components'
import Project from '../../components/project';
import {ProjectsGridSection, ProjectType} from '../projects';
import {LinkTag} from '../contact';

type SkillSet = {
    [key: string]: string[]
}

export const Spacer = styled.div<{$size?: string}>`
  ${props => `
      margin: ${props.$size || "3rem"} 0;
  `};
`;

const HeroSection = styled.section`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Heading1 = styled.h1`
  color: rgb(var(--white));
  font-weight: 600;
  letter-spacing: 0.05em;
  line-height: 150%;
  font-size: 1.5rem;

  @media(min-width: 60rem) {
    font-size: 2rem;
  }
`;

export const Heading2 = styled.h2`
  color: rgb(var(--white));
  font-weight: 500;
  letter-spacing: 0.05em;
  line-height: 150%;
  font-size: 1.25rem;

  @media(min-width: 60rem) {
    font-size: 1.75rem;
  }
`;

export const Heading2Underline = styled(Heading2)`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1rem;
    height: 1px;
    background-color: rgb(var(--gray));
  }
`;

const IntroSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: start;
  width: 100%;
  @media(min-width: 60rem) {
    width: 48%;
  }
`;

const AccentHeading1 = styled.span`
  color: rgb(var(--primary));
`;

const IntroParagraph = styled.p`
  font-size: 1rem;
  line-height: 180%;
  font-weight: 400;
`;

const RandomQuote = styled.div`
  line-height: 180%;
  position: relative;
  text-align: center;

  &::before {
    content: "";
    background-image: url(icons/quote.svg);
    position: absolute;
    left: -1rem;
    top: -0.75rem;
    width: 1rem;
    height: 1.125rem;
    object-fit: contain;
  }

  &::after {
    content: "";
    background-image: url(icons/quote.svg);
    position: absolute;
    transform: rotate(180deg);
    right: -1rem;
    top: 0.75rem;
    width: 1rem;
    height: 1.125rem;
    object-fit: contain;
  }
`;

const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const Hero = ({cv}: {cv: string}) => (
    <HeroSection>
        <IntroSection>
            <Heading1>Josiah is a
                <AccentHeading1> web designer </AccentHeading1> and <AccentHeading1> front-end developer</AccentHeading1>
            </Heading1>
            <IntroParagraph>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</IntroParagraph>
            <div style={{display: "flex", alignItems: "center", gap: "1rem"}}>
                <Link to='/contact' className="button button--primary">Contact me!!</Link>
                <LinkTag href={cv} target='_blank' className="button button--gray">Download CV</LinkTag>
            </div>
        </IntroSection>
        <ImageSection>
            <img src="images/profile-photo.png" alt="Josiah Mokobo Nyarega" />
            <RandomQuote>
                <span> With great power comes great electricity bill </span>
            </RandomQuote>
        </ImageSection>
    </HeroSection>
)

const AboutMe = ({myInfo}: {myInfo: string[]}) => <section>
    <Spacer />
    <Heading2Underline># Who is Josiah? </Heading2Underline>
    <Spacer $size='2rem' />
    <div style={{display: "flex", flexDirection: "column", gap: "2rem"}}>
        {myInfo.map(info => <p style={{lineHeight: "180%", color: "rgb(var(--white))"}}> {info} </p>)}
    </div>
</section>

const Skills: React.FC<{skills: SkillSet}> = ({skills}) =>
    <section>
        <Spacer $size='2rem' />
        <Heading2Underline># My Skills</Heading2Underline>
        <Spacer />
        <ul style={{lineHeight: "180%", color: "rgb(var(--white))", listStyleType: "' -> '", listStylePosition: "inside"}}>
            {Object.keys(skills).map((skill) =>
                <li key={skill}>
                    <b style={{textTransform: "capitalize"}}>{skill} </b>
                    {"<>"} {skills[skill].join(", ")}
                </li>
            )}
        </ul>
    </section>

const Home = () => {
    const [projects, setProjects] = useState<ProjectType[]>([]);
    const [skills, setSkills] = useState<SkillSet>({});
    const [info, setInfo] = useState<string[]>([]);
    const [cvDownloadLink, setCvDownloadLink] = useState("");

    const getData = useCallback(async () => {
        const {projects, skills, info, cv_download_link} = (await import("../../data.json")).default;
        setProjects(projects["complete applications"]);
        setSkills(skills);
        setInfo(info);
        setCvDownloadLink(cv_download_link);
    }, []);
    useEffect(() => {getData()}, [getData]);
    return (
        <>
            <Hero cv={cvDownloadLink} />
            <section>
                <Heading2Underline># Projects</Heading2Underline>
                <Spacer $size="2rem" />
                <ProjectsGridSection>
                    {projects.map(project => <Project {...project} />)}
                </ProjectsGridSection>
                <Spacer $size="2rem" />
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Link to='/projects' className="button button--primary">More Projects</Link>
                </div>
            </section>
            <AboutMe myInfo={info} />
            <Skills skills={skills} />
        </>
    )
}

export default Home;