import styled from "styled-components";
import {Heading2, Spacer} from "../home";

const AboutMeSection = styled.p`
width: 100%;
line-height: 180%;
font-size: 1rem;
line-spacing: 0.03em;

@media(min-width: 60rem) {
  width: 47%;
}
`;

const ContactSection = styled.div`
width: 100%;

@media(min-width: 60rem) {
  width: 47%;
}
`;

export const Heading3 = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 150%;
  color: rgb(var(--white));
`;

export const LinkTag = styled.a`
  text-decoration: underline;
  text-underline-offset: 0.5rem;
  font: inherit;
  color: inherit;
  transition: all .2s linear;

  &:hover {
    color: rgb(var(--white));
  }
`;

const Contact = () =>
  <div>
    <Spacer $size="6rem" />
    <Heading2><span style={{color: "rgb(var(--primary))"}}>/</span>contacts</Heading2>
    <Spacer $size="0.5rem" />
    <p>Who am i?</p>
    <Spacer $size="3rem" />

    <section>
      <div style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem"}}>
        <AboutMeSection>
          I’m interested in freelance opportunities. However, if you have other
          request or question, don’t hesitate to contact me
        </AboutMeSection>
        <ContactSection>
          <div style={{padding: "1rem", border: "1px solid rgb(var(--gray))", maxWidth: "max-content"}}>
            <Heading3>Message me here</Heading3>
            <Spacer $size="1rem" />
            <ul style={{listStylePosition: "inside", listStyleType: "''", display: "flex", flexDirection: "column", gap: "1rem"}}>
              <li>[] <LinkTag target="_blank" href="mailto:jmnyarega@gmail.com">jmnyarega@gmail.com</LinkTag> </li>
              <li>[] <LinkTag target="_blank" href="tel:+254 703 922 095"> +254 703 922 095 </LinkTag> </li>
            </ul>
            <Spacer $size="0.5rem" />
          </div>
        </ContactSection>
      </div>

      <Spacer $size="4rem" />
      <Heading2><span style={{color: "rgb(var(--primary))"}}>#</span>all-media</Heading2>
      <Spacer $size="2rem" />
      <div>
        <ul style={{listStylePosition: "inside", listStyleType: "''", display: "grid", gridTemplateColumns: "1fr 1fr", maxWidth: "60ch", gap: "1rem"}}>
          <li>[] <LinkTag target="_blank" href="https://github.com/jmnyarega">Github</LinkTag></li>
          <li>[] <LinkTag target="_blank" href="http://www.linkedin.com/in/josiah-n-84820a103/">LinkedIn</LinkTag></li>
          <li>[] <LinkTag target="_blank" href="https://stackoverflow.com/users/8013307/josiah-nyarega">Stack Overflow</LinkTag> </li>
          <li>[] <LinkTag target="_blank" href="https://www.frontendmentor.io/profile/jmnyarega">Frontend Mentor</LinkTag> </li>
        </ul>
      </div>
    </section>
  </div>

export default Contact;
