import React from 'react';

import MenuIcon from '@mui/icons-material/Menu';

import { AuthContextProps, useAuth } from '../../../Providers/Auth';
import { HeaderContainer, HeaderContent, HeaderLogo } from './styles';

function Header() {
  const { setIsMenuOpen }: AuthContextProps = useAuth();
  return (
    <HeaderContainer>
      <HeaderLogo onClick={() => setIsMenuOpen(true)}>
        <MenuIcon fontSize="large" color="action" />
      </HeaderLogo>
      <HeaderContent>
        <h1>Discovery Explanets</h1>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;
