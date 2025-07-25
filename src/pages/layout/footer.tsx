import styled from 'styled-components'

const FooterSection = styled.section`
  border-top: 1px solid rgb(var(--gray));
  margin-top: 3rem;
  margin-bottom: 1rem;
  text-align: center;
  padding: 1rem 0;
`;

const Footer: React.FC = () => <FooterSection>
  &copy; Josiah Mokobo Nyarega
</FooterSection>


export default Footer;
