import React from 'react';
import MuiButton from '@material-ui/core/Button';

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var Button = function Button(_ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "href"]);

  return React.createElement(React.Fragment, null, React.createElement(MuiButton, Object.assign({}, rest), children, " asdasd"));
};

export { Button };
//# sourceMappingURL=index.d.module.js.map
