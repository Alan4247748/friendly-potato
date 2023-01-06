import React from 'react';
import 'styles.module.css'; // Make sure to import the CSS.NES styles

const Container = styled.div`
  /* Add your styles here */
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.header`
  /* Add your styles here */
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  /* Add your styles here */
  font-size: 32px;
  color: black;
  margin: 0;
`;

const Nav = styled.nav`
  /* Add your styles here */
  display: flex;
`;

const NavLink = styled.a`
  /* Add your styles here */
  font-size: 16px;
  color: blue;
  text-decoration: none;
  margin-left: 20px;
  &:hover {
    color: darkblue;
  }
`;

const Main = styled.main`
  /* Add your styles here */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  /* Add your styles here */
  width: 200px;
  height: 200px;
  border-radius: 100%;
  margin-bottom: 20px;
`;

const Description = styled.p`
  /* Add your styles here */
  font-size: 18px;
  color: black;
  text-align: center;
`;

function AboutMe() {
  return (
    <Container>
      <Header>
        <Title>About Me</Title>
        <Nav>
          <NavLink href="#">Home</NavLink>
        }