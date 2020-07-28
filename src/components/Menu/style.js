import styled from 'styled-components';
import Button from '../Button';

export const LogoImage = styled.img`
  max-width: 168px;
  @media (max-width: 800px) {
    max-width: 105px;
  }
`;

export const ButtonLink = styled(Button)`
  color: var(--white);
  border: 1px solid var(--white);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity .3s;

  &:hover,
  &:focus {
    opacity: .5;
  }

  @media(max-width: 800px){
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--primary);
    color: var(--white);
    outline: 0;
    text-align: center;
    border: 0;
    border-radius: 0;
  }
`;

export const MenuWrapper = styled.nav`
  width: 100%;
  height: 94px;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0%;
  padding-left: 5%;
  padding-right: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--black);
  border-bottom: 2px solid var(--primary);
  @media (max-width: 800px){
    height: 40px;
    justify-content: center;
  }
  `;