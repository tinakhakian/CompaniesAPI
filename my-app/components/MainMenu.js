// components/MainMenu.js

import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';

const MainMenu = () => {
  return (
    <>
      <Navbar className="fixed-top navbar-dark bg-dark">
        <Container>
          <Navbar.Brand>Tina Khakian</Navbar.Brand>
          <Nav>
            <Link href="/">
              <>Home </>
            </Link>
            <div className="nav-space"></div> 

            <Link href="/companies">
              <> Companies</>
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <br />
      <style jsx>{`
        .nav-space {
          width: 10px; /* Adjust the width to control the space */
          display: inline-block;
        }
      `}</style>
    </>
  );
};

export default MainMenu;
