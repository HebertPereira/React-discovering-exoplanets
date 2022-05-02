/* eslint-disable react/function-component-definition */
import React, { ReactNode } from 'react';

import Asidebar from '../Asidebar';
import Header from '../Header';
import { ContainerContent, ContainerMain, ContainerHeader } from './styles';

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <ContainerMain>
      <ContainerHeader>
        <Header />
      </ContainerHeader>
      <ContainerContent>{children}</ContainerContent>
      <Asidebar />
    </ContainerMain>
  );
};

export default Container;
