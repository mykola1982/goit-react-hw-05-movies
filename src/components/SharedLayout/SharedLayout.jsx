import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container, Header, StyledLink } from './SharedLayout.styled';

export const SharedLoyout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
