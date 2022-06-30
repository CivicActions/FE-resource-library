import * as React from 'react';
import * as PropTypes from 'prop-types';

interface Props {
  text: string;
}

const Button = ({text}: Props) => (
  <button>{text}</button>
);

Button.defaultProps = {
  text: "Hello World"
}

Button.propTypes = {
  text: PropTypes.string.isRequired
}

export default Button;
