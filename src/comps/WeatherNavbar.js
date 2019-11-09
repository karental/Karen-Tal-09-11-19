import React from "react";
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";
import CitySearch from './CitySearch'

function WeatherNavbar(){
  return (
    <>
      <Navbar className="bg-info" expand="lg">
        <Container>
          <button
            className="navbar-toggler"
            id="navbarTogglerDemo01"
            type="button"
          >
            <span className="navbar-toggler-bar bar1"></span>
            <span className="navbar-toggler-bar bar2"></span>
            <span className="navbar-toggler-bar bar3"></span>
          </button>
          <UncontrolledCollapse navbar toggler="#navbarTogglerDemo01">
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
             Weather
            </NavbarBrand>
            <Nav className="mr-auto mt-2 mt-lg-0" navbar>
              <NavItem className="active">
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  Favorites
                </NavLink>
              </NavItem>
            </Nav>
<CitySearch></CitySearch>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
}

export default WeatherNavbar;