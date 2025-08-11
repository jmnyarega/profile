import {useState} from "react";
import {Link, useLocation} from "react-router";
import styled from 'styled-components'

const NavigationSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 0 1rem;
`;

const ImageSection = styled.div`
  a {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: rgb(var(--white));

    text-decoration: none;
  }
`;

const NavigationLinks = styled.nav`
  display: none;

  @media(min-width: 60rem) {
    display: block;
  }
`;

const ListItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  list-style-type: none;
`;

const ListItem = styled.li`
  a {
    font: inherit;
    color: inherit;
    text-decoration: none;

    &:hover {
      color: rgb(var(--white));
    }
  }

  &.active {
      color: rgb(var(--white));
  }
`;

const Hamburger = styled.label`
  transition: all 350ms linear;
  color: currentcolor;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

   span {
    display: block;
    height: 0.2rem;
    width: 2.5rem;
    background-color: currentcolor;
    transition: all 350ms linear;
  }

  @media(min-width: 60rem) {
    display: none;
  }

`;

const HamburgerSwitch = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;

  @media(max-width: 60rem) {
    &:checked ~ nav {
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      top: 4.375rem;
      z-index: 100;
      background-color: rgb(var(--dark));

      ul {
        display: flex;
        flex-direction: column;
      }

      display: block;
    }

    &:checked ~ label .top {
      transform: translateY(0.7rem) rotateZ(30deg);
    }

    &:checked ~ label .bottom {
      transform: translateY(-0.7rem) rotateZ(-30deg);
    }

    &:checked ~ label .middle {
      width: 0;
    }
  }
`

const Header: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const {pathname: currentPathname} = useLocation();

  const menuLinks = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "blogs",
      path: "/blogs"
    },
    {
      name: "resume",
      path: "/resume"
    },
    {
      name: "projects",
      path: "/projects"
    },
    {
      name: "bookmarks",
      path: "/bookmarks"
    },
    {
      name: "contact",
      path: "/contact"
    }
  ];

  const handleChange = (event: React.InputHTMLAttributes<InputEvent>) => {
    setShowMobileMenu(!event.checked);
  }

  return <NavigationSection>
    <ImageSection>
      <Link to='/'>
        <img src="icons/logo.svg" alt="Josiah Mokobo Nyarega" />Josiah
      </Link>
    </ImageSection>
    <HamburgerSwitch type="checkbox" onChange={handleChange} checked={showMobileMenu} />
    <Hamburger onClick={() => setShowMobileMenu(!showMobileMenu)}>
      <span className="top"></span>
      <span className="middle"></span>
      <span className="bottom"></span>
    </Hamburger>
    <NavigationLinks>
      <ListItems>
        {
          menuLinks.map(({path, name}) =>
            <ListItem className={path === currentPathname ? "active" : ""}>
              <Link to={path} onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <span style={{color: "rgb(var(--primary))"}}>#</span>{name}
              </Link>
            </ListItem>
          )
        }
      </ListItems>
    </NavigationLinks>
  </NavigationSection>
}


export default Header;
