import React from 'react';
import Logo from '../../assets/images/Logo.png';
import { LogoImage, MenuWrapper, ButtonLink } from './style.js';
// import ButtonLink from './components/ButtonLink';

function Menu(){
  return(
    <>
      <MenuWrapper>
        <a href="/">
          <LogoImage src={Logo} alt="Logo guijunflix" />
        </a>

        <ButtonLink as="a" href="/" className="ButtonLink">
          Novo vídeo
        </ButtonLink>
      </MenuWrapper>
    </>
  );
}

export default Menu;