import React, { Component } from 'react';
import styled from 'styled-components';
import LogoSrc from '../assets/images/logo.png';

class Navbar extends Component {

  render() {
    return (
      <Wrapper>
        <Logo src={LogoSrc} />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 16px;
  padding-right: 16px;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
`;

const Logo = styled.img`
  height: 22px;
  width: 112px;
`;

export default Navbar;
