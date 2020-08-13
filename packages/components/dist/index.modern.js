import React from 'react';
import MuiButton from '@material-ui/core/Button';

/* eslint-disable jsx-a11y/anchor-has-content */

const Button = ({
  children,
  href,
  ...rest
}) => {
  return React.createElement(React.Fragment, null, React.createElement(MuiButton, Object.assign({}, rest), children, " asdasd"));
};

export { Button };
//# sourceMappingURL=index.modern.js.map
