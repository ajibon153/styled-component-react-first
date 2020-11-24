import React from 'react';
import { Button } from '../../globalStyle';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavItemBtn,
  NavBtnLink,
} from './Navbar.elements';

import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

const Navbar = () => {
  const [click, setClick] = React.useState(false);
  const [button, setButton] = React.useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  React.useEffect(() => {
    showButton();
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={() => closeMobileMenu()}>
              <NavIcon />
              ULTRA
            </NavLogo>
            <MobileIcon onClick={() => handleClick()}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={() => handleClick()} click={click}>
              <NavItem>
                <NavLink to='/'>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/services'>Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/products'>Products</NavLink>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/sign-up'>
                    <Button primary>SIGN UP</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/sign-up'>
                    <Button fontBig primary>
                      SIGN UP
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>{' '}
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export { Navbar };
