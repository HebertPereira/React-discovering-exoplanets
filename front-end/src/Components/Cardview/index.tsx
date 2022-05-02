import React from 'react';

import { CardViewContainer, CardViewimage, CardViewTitle } from './styles';

interface CardViewProps {
  title: string;
}

function CardView({ title }: CardViewProps) {
  return (
    <CardViewContainer>
      <CardViewimage />
      <CardViewTitle>{title}</CardViewTitle>
    </CardViewContainer>
  );
}

export default CardView;
