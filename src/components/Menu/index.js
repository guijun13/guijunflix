import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';
import Button from '../Button/style';
import { LogoImage, MenuWrapper } from './style.js';
// import ButtonLink from './components/ButtonLink';

function Menu(){
  return(
    <>
      <MenuWrapper>
        <Link to="/">
          <LogoImage src={Logo} alt="Logo guijunflix" />
        </Link>

        <Button as={Link} to="/cadastro/video" className="ButtonLink">
          Novo vídeo
        </Button>
      </MenuWrapper>
    </>
  );
}

export default Menu;