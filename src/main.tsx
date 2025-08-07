import AppEntry from '@app/AppEntry';
import { Container, CssBaseline } from '@mui/material';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssBaseline />
    <Container disableGutters>
      <AppEntry />
    </Container>
  </StrictMode>
);
