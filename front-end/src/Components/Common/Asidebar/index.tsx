import React from 'react';
import { Link } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import MenuOpen from '@mui/icons-material/Menu';
import StarIcon from '@mui/icons-material/Star';

import { AuthContextProps, useAuth } from '../../../Providers/Auth';
import {
  AsidebarContainer,
  AsidebarIconMenu,
  AsidebarMenu,
  AsidebarVoidSpace
} from './styles';

function Asidebar() {
  const { isMenuOpen, setIsMenuOpen }: AuthContextProps = useAuth();
  return (
    <AsidebarContainer isOpen={isMenuOpen}>
      <AsidebarMenu>
        <AsidebarIconMenu onClick={() => setIsMenuOpen(false)}>
          <MenuOpen fontSize="large" />
        </AsidebarIconMenu>
        <Link to="/">
          <HomeIcon fontSize="large" />
          <h2>Home</h2>
        </Link>
        <Link to="/favorites">
          <StarIcon fontSize="large" />
          <h2>Favoritos</h2>
        </Link>
      </AsidebarMenu>
      <AsidebarVoidSpace onClick={() => setIsMenuOpen(false)} />
    </AsidebarContainer>
  );
}

export default Asidebar;
