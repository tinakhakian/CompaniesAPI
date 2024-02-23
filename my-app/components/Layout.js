// components/Layout.js


import { Container } from 'react-bootstrap';
import MainMenu from './MainMenu';

const Layout = (props) => {
  return (
    <>
      <MainMenu />
      <br />
      <Container>{props.children}</Container>
      <br />
    </>
  );
};

export default Layout;
