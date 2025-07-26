import styled from 'styled-components'
import Button from "../../components/button"
import Project from '../../components/project';

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

const Hero = () => (
  <HeroSection>
    <IntroSection>
      <Heading1>Josiah is a
        <AccentHeading1> web designer </AccentHeading1> and <AccentHeading1> front-end developer</AccentHeading1>
      </Heading1>
      <IntroParagraph>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</IntroParagraph>
      <div style={{display: "flex", alignItems: "center", gap: "1rem"}}>
        <Button className="button button--primary">Contact me!!</Button>
        <Button className="button button--gray">Download CV</Button>
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

const Projects = () =>
  <section>
    <Heading2Underline># Projects</Heading2Underline>
    <Spacer $size="2rem" />
    <section style={{display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(18rem, 1fr))", gap: "1rem"}}>
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </section>
  </section>

const AboutMe = () => <section>
  <Spacer />
  <Heading2Underline># Who is Josiah? </Heading2Underline>
  <Spacer $size='2rem' />
  <p style={{lineHeight: "180%", color: "rgb(var(--white))"}}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet arcu semper, tincidunt nibh quis, tristique dui. Pellentesque egestas ligula vel porttitor scelerisque. Vestibulum euismod, sem eu aliquam consequat, nibh metus tempus lacus, a fringilla quam mi et nisi. Fusce aliquam dolor eget velit tincidunt luctus ut non erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas scelerisque urna et auctor scelerisque. Aenean laoreet convallis cursus. Donec tincidunt luctus turpis non aliquam. Aenean convallis libero et dictum bibendum. Nullam id congue ex. Pellentesque in metus pellentesque, ultricies felis eu, imperdiet quam. Aliquam velit metus, vestibulum at lacus quis, efficitur accumsan erat. Nunc elementum elit ac nunc tincidunt feugiat. Etiam laoreet mauris nec leo malesuada, non efficitur urna pretium.
  </p>
  <Spacer $size="1rem" />
  <p style={{lineHeight: "180%", color: "rgb(var(--white))"}}>
    Pellentesque laoreet eros ac massa rhoncus, eget congue quam tempus. Phasellus vulputate metus sed lorem consequat, vel scelerisque neque malesuada. Proin id nisl egestas, fringilla lorem ultrices, ultrices quam. Morbi sem ipsum, vulputate mollis tincidunt non, feugiat eu erat. Mauris pretium aliquet sem a aliquet. Aenean pretium felis id magna facilisis volutpat. Etiam metus quam, faucibus sed dictum id, dapibus non augue.
  </p>
  <Spacer $size="1rem" />
  <p style={{lineHeight: "180%", color: "rgb(var(--white))"}}>
    Nulla facilisi. In et orci nisi. Fusce a arcu eget lectus eleifend malesuada quis sit amet nibh. Quisque eu lobortis tortor. Curabitur pretium metus in lorem interdum, nec iaculis nulla ullamcorper. Nullam quis ante venenatis purus aliquet suscipit. Fusce pulvinar sem in ipsum ornare luctus. Nam luctus urna ac ornare sollicitudin. Nulla feugiat hendrerit vestibulum.
  </p>
</section>

const Skills = () =>
  <section>
    <Spacer $size='2rem' />
    <Heading2Underline># My Skills</Heading2Underline>
    <Spacer />
    <ul style={{lineHeight: "180%", color: "rgb(var(--white))", listStyleType: "' -> '", listStylePosition: "inside"}}>
      <li>ReactJS, Redux, Typescript, NodeJs</li>
      <li>Laravel, PHP, Livewire, Symfony</li>
      <li>WordPress, DIVI, Elementor, WooCommerce, Plugins</li>
    </ul>
  </section>

const Home = () => <>
  <Hero />
  <Projects />
  <AboutMe />
  <Skills />
</>

export default Home;
