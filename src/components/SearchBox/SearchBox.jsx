import PropTypes from 'prop-types';

import { Wrapper, Input, Icon } from './SearchBox.styled';

export const SearchBox = ({ value, onChange }) => {
  return (
    <Wrapper>
      <Icon />
      <Input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </Wrapper>
  );
};

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
