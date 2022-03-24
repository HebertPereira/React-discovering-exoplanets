import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../Components/Common/Container';

function Home() {
  return (
    <Container>
      <Link to="/" />
      <div style={{ backgroundColor: '#000' }}>Hello Home</div>
    </Container>
  );
}

export default Home;
