import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// Assets
import DummyLogo from '../img/logo2.svg';

const StyledNavLink = styled(NavLink)`
    border-bottom: 1px solid grey;
`;

const StyledNavBarRight = styled.div`
    width: 40%;
    justify-content: space-around; 
`;

const Hamburger = () => {
  return (
      <button
          className="hamburger hamburger--collapse"
          type="button"
          style={{marginTop: '10px'}}
          onClick={toggleBurguer}>
          <span className="hamburger-box">
              <span className="hamburger-inner"></span>
          </span>
      </button>
  );
};

const toggleBurguer = (e) => {
    e.preventDefault();
    e.currentTarget.classList.toggle('is-active');
};

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <img src={DummyLogo} height="70" className="d-inline-block align-top" alt=""/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <StyledNavBarRight className="navbar-nav">
                    <StyledNavLink exact activeClassName="active" className="nav-item nav-link" to="/">Home</StyledNavLink>
                    <StyledNavLink activeClassName="active" className="nav-item nav-link" to="/battle">About</StyledNavLink>
                    <StyledNavLink activeClassName="active" className="nav-item nav-link" to="/popular">Work</StyledNavLink>
                    <Hamburger/>
                </StyledNavBarRight>
            </div>
        </nav>
    )
};

export default Nav;