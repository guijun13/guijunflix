import React from 'react';
import Logo from '../../assets/images/Logo.png';
import Button from '../Button';
import { LogoImage, MenuWrapper } from './style.js';
// import ButtonLink from './components/ButtonLink';

function Menu(){
  return(
    <>
      <MenuWrapper>
        <a href="/">
          <LogoImage src={Logo} alt="Logo guijunflix" />
        </a>

        <Button as="a" href="/" className="ButtonLink">
          Novo vídeo
        </Button>
      </MenuWrapper>
    </>
  );
}

export default Menu;