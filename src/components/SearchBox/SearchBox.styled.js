import styled from '@emotion/styled';
import { Field, Form } from 'formik';
import { FcSearch } from 'react-icons/fc';

export const StyledForm = styled(Form)`
  padding: 20px;
  display: flex;
  height: 35px;

  width: 300px;
`;

export const Input = styled(Field)`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  padding-left: 35px;
  margin-right: 24px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  height: 40px;

  border-radius: 4px;
  color: black;
  transition: background-color 250ms linear;

  &:hover,
  :focus {
    background-color: orange;
    border: 2px solid black;
  }
`;

export const Icon = styled(FcSearch)`
  width: 24px;
  height: 26px;
`;
