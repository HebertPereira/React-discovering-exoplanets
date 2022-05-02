/* eslint-disable import-helpers/order-imports */
import React from 'react';
import { ToastContainer } from 'react-toastify';

import AppRoutes from './Routes';
import GlobalStyle from './Styles/globalStyles';

import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './Providers/Auth';
import Container from './Components/Common/Container';

function App() {
  return (
    <AuthProvider>
      <ToastContainer />
      <Container>
        <AppRoutes />
      </Container>
      <GlobalStyle />
    </AuthProvider>
  );
}

export default App;
