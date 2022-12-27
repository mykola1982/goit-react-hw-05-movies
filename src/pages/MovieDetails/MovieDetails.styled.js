import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';

export const Section = styled.section`
  display: flex;
  border-bottom: 2px solid black;
  padding: 20px 0;
`;

export const Img = styled.img`
  width: 250px;
  height: 380px;
`;

export const WrapDetails = styled.div`
  padding: 20px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
`;

export const Text = styled.p`
  margin-bottom: 10px;
`;

export const AddInformation = styled.section`
  border-bottom: 2px solid black;
  padding: 20px 0;
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  margin-left: 25px;
`;

export const StyledLink = styled(NavLink)`
  width: 100px;
  height: 10px;
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid orange;
  color: black;
  font-weight: 500;
  transition: color 250ms linear, background-color 250ms linear;

  &.active {
    background-color: orange;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: orange;
  }
`;

export const StyledLinkBack = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  :hover {
    color: orange;
  }
`;
