import PropTypes from 'prop-types';

import { Formik } from 'formik';

import { StyledForm, Input, Button, Icon } from './SearchBox.styled';

export const SearchBox = ({ onSubmit, velue }) => {
  const handleSubmit = ({ query }) => {
    onSubmit(query);
  };
  return (
    <>
      <Formik initialValues={{ query: velue }} onSubmit={handleSubmit}>
        <StyledForm>
          <Input
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
          <Button type="submit">
            <Icon />
            <p>Search</p>
          </Button>
        </StyledForm>
      </Formik>
    </>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
