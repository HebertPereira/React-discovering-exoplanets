import React from 'react';
import { ScaleLoader } from 'react-spinners';

import { LoaderContainer } from './styles';

function Loader() {
  return (
    <LoaderContainer>
      <ScaleLoader height="35" width="4" radius="2" margin="2" />
    </LoaderContainer>
  );
}

export default Loader;
