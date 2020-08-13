(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('@material-ui/core/Button')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', '@material-ui/core/Button'], factory) :
  (global = global || self, factory(global.components = {}, global.react, global.MuiButton));
}(this, (function (exports, React, MuiButton) {
  React = React && Object.prototype.hasOwnProperty.call(React, 'default') ? React['default'] : React;
  MuiButton = MuiButton && Object.prototype.hasOwnProperty.call(MuiButton, 'default') ? MuiButton['default'] : MuiButton;

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

  exports.Button = Button;

})));
//# sourceMappingURL=index.umd.js.map
