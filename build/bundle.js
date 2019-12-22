/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(21);
} else {
  module.exports = require('./cjs/react.development.js');
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var ReactIs = require('react-is');

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(27)();
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Li = exports.Code = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var link = {
  normal: {
    borderBottom: '1px dotted rgb(0, 168, 0)'
  },
  hover: {
    borderBottom: '1px solid rgb(0, 168, 0)',
    color: 'black'
  },
  active: 'hover',
  touchActive: {
    borderBottom: '1px dashed rgb(0, 168, 0)',
    color: 'black'
  },
  focusFromTab: {
    outline: '2px solid rgb(0, 152, 0)',
    outlineOffset: '2px',
    color: 'black'
  },
  touchActiveTapOnly: true
};

var childLink = {};
Object.keys(link).forEach(function (key) {
  if (key !== 'touchActiveTapOnly') {
    childLink['onParent' + key.slice(0, 1).toUpperCase() + key.slice(1)] = link[key];
  }
});

exports.default = {
  link: link,
  childLink: childLink,
  p: {
    margin: '3vh 0',
    lineHeight: '1.4'
  }
};
var Code = exports.Code = function Code(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'code',
    {
      style: {
        fontFamily: 'monospace',
        fontSize: '15px',
        paddingLeft: '2px'
      }
    },
    children
  );
};

Code.propTypes = {
  children: _propTypes2.default.string.isRequired
};

var Li = function Li(_ref2) {
  var children = _ref2.children,
      rest = _objectWithoutProperties(_ref2, ['children']);

  return _react2.default.createElement(
    'li',
    _extends({
      style: {
        paddingLeft: '18px',
        textIndent: '-15px',
        margin: '0.5vh 0',
        listStyle: 'none'
      }
    }, rest),
    _react2.default.createElement(
      'span',
      { style: { paddingRight: '7px' } },
      '\u2013'
    ),
    children
  );
};

exports.Li = Li;
Li.propTypes = {
  children: _propTypes2.default.string.isRequired
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "production" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.childInteractiveProps = exports.defaultTapTimeCutoff = exports.queueTime = exports.knownProps = exports.knownRoleTags = exports.nonBlurrableTags = exports.statePropOptionKeys = exports.stateProps = exports.iStates = exports.otherEvents = exports.touchEvents = exports.mouseEvents = exports.passiveEventSupport = exports.deviceHasMouse = exports.deviceHasTouch = exports.deviceType = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.enterKeyTrigger = enterKeyTrigger;
exports.spaceKeyTrigger = spaceKeyTrigger;
exports.dummyEvent = dummyEvent;

var _detectIt = __webpack_require__(54);

var _detectIt2 = _interopRequireDefault(_detectIt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var deviceType = exports.deviceType = _detectIt2.default.deviceType;
var deviceHasTouch = exports.deviceHasTouch = _detectIt2.default.hasTouch;
var deviceHasMouse = exports.deviceHasMouse = _detectIt2.default.hasMouse;
var passiveEventSupport = exports.passiveEventSupport = _detectIt2.default.passiveEvents;

var mouseEvents = exports.mouseEvents = {
  mouseenter: 'onMouseEnter',
  mouseleave: 'onMouseLeave',
  mousemove: 'onMouseMove',
  mousedown: 'onMouseDown',
  mouseup: 'onMouseUp'
};

var touchEvents = exports.touchEvents = {
  touchstart: 'onTouchStart',
  touchend: 'onTouchEnd',
  touchcancel: 'onTouchCancel'
};

var otherEvents = exports.otherEvents = {
  focus: 'onFocus',
  blur: 'onBlur',
  keydown: 'onKeyDown',
  keyup: 'onKeyUp',
  dragstart: 'onDragStart',
  dragend: 'onDragEnd'
};

var iStates = exports.iStates = {
  normal: true,
  hover: true,
  hoverActive: true,
  touchActive: true,
  keyActive: true
};

var stateProps = exports.stateProps = _extends({}, iStates, {
  active: true,
  focus: true,
  focusFromTab: true,
  focusFromMouse: true,
  focusFromTouch: true
});

var statePropOptionKeys = exports.statePropOptionKeys = ['style', 'className'];

// don't toggle focus on these tags
var nonBlurrableTags = exports.nonBlurrableTags = {
  input: true,
  textarea: true,
  select: true
};

// tags with known roles, and that the browser may have a click handler for
var knownRoleTags = exports.knownRoleTags = _extends({}, nonBlurrableTags, {
  button: true,
  a: true,
  area: true
});

// elements triggered by the enter key
function enterKeyTrigger(tag, type) {
  return tag !== 'select' && (tag !== 'input' || type !== 'checkbox' && type !== 'radio');
}

// elements triggered by the space bar
function spaceKeyTrigger(tag, type) {
  return tag === 'button' || tag === 'select' || tag === 'input' && (type === 'checkbox' || type === 'radio' || type === 'submit');
}

// known props to not pass through, every prop not on this list is passed through
var knownProps = exports.knownProps = _extends({}, stateProps, {
  children: true,
  as: true,
  style: true,
  className: true,
  wrapperStyle: true,
  wrapperClassName: true,
  onStateChange: true,
  setStateCallback: true,
  onClick: true,
  onTapTwo: true,
  onTapThree: true,
  onTapFour: true,
  onLongPress: true,
  tapTimeCutoff: true,
  onMouseEnter: true,
  onMouseLeave: true,
  onMouseMove: true,
  onMouseDown: true,
  onMouseUp: true,
  onTouchStart: true,
  onTouchMove: true,
  onTouchEnd: true,
  onTouchCancel: true,
  onFocus: true,
  onBlur: true,
  onKeyDown: true,
  onKeyUp: true,
  forceState: true,
  initialState: true,
  refDOMNode: true,
  mutableProps: true,
  useBrowserOutlineFocus: true,
  useBrowserCursor: true,
  touchActiveTapOnly: true,
  extraTouchNoTap: true,
  focusToggleOff: true,
  stylePriority: true,
  nonContainedChild: true,
  interactiveChild: true
});

// ms to allow for the browser to add subsequent event to the queue in setTimeouts
var queueTime = exports.queueTime = 600;

var defaultTapTimeCutoff = exports.defaultTapTimeCutoff = 500;

function dummyEvent(type) {
  return {
    type: type,
    persist: function persist() {},
    preventDefault: function preventDefault() {},
    stopPropagation: function stopPropagation() {}
  };
}

var childInteractiveProps = exports.childInteractiveProps = {
  showOnParent: true,
  onParentNormal: true,
  onParentHover: true,
  onParentActive: true,
  onParentHoverActive: true,
  onParentTouchActive: true,
  onParentKeyActive: true,
  onParentFocus: true,
  onParentFocusFromTab: true,
  onParentFocusFromMouse: true,
  onParentFocusFromTouch: true
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createBrowserHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createHashHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return createMemoryHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return locationsAreEqual; });
/* unused harmony export parsePath */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return createPath; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_resolve_pathname__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_value_equal__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_tiny_warning__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_tiny_invariant__ = __webpack_require__(33);






function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = Object(__WEBPACK_IMPORTED_MODULE_1_resolve_pathname__["a" /* default */])(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && Object(__WEBPACK_IMPORTED_MODULE_2_value_equal__["a" /* default */])(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
     false ? warning(prompt == null, 'A history supports only one prompt at a time') : void 0;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
           false ? warning(false, 'A history needs a getUserConfirmation function in order to use a prompt message') : void 0;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  false ? invariant(false, 'Browser history needs a DOM') : Object(__WEBPACK_IMPORTED_MODULE_4_tiny_invariant__["a" /* default */])(false) : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
     false ? warning(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
     false ? warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         false ? warning(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history') : void 0;
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
     false ? warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         false ? warning(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history') : void 0;
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function stripHash(url) {
  var hashIndex = url.indexOf('#');
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  window.location.replace(stripHash(window.location.href) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  false ? invariant(false, 'Hash history needs a DOM') : Object(__WEBPACK_IMPORTED_MODULE_4_tiny_invariant__["a" /* default */])(false) : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
     false ? warning(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function locationsAreEqual$$1(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
  }

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    var baseTag = document.querySelector('base');
    var href = '';

    if (baseTag && baseTag.getAttribute('href')) {
      href = stripHash(window.location.href);
    }

    return href + '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
     false ? warning(state === undefined, 'Hash history cannot push state; it is ignored') : void 0;
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
         false ? warning(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack') : void 0;
        setState();
      }
    });
  }

  function replace(path, state) {
     false ? warning(state === undefined, 'Hash history cannot replace state; it is ignored') : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
     false ? warning(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : void 0;
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
     false ? warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
     false ? warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}




/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BrowserRouter__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserRouter", function() { return __WEBPACK_IMPORTED_MODULE_0__BrowserRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HashRouter__ = __webpack_require__(34);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "HashRouter", function() { return __WEBPACK_IMPORTED_MODULE_1__HashRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Link__ = __webpack_require__(14);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return __WEBPACK_IMPORTED_MODULE_2__Link__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MemoryRouter__ = __webpack_require__(35);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return __WEBPACK_IMPORTED_MODULE_3__MemoryRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__NavLink__ = __webpack_require__(37);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return __WEBPACK_IMPORTED_MODULE_4__NavLink__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Prompt__ = __webpack_require__(39);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return __WEBPACK_IMPORTED_MODULE_5__Prompt__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Redirect__ = __webpack_require__(41);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return __WEBPACK_IMPORTED_MODULE_6__Redirect__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Route__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return __WEBPACK_IMPORTED_MODULE_7__Route__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Router__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return __WEBPACK_IMPORTED_MODULE_8__Router__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__StaticRouter__ = __webpack_require__(43);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return __WEBPACK_IMPORTED_MODULE_9__StaticRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Switch__ = __webpack_require__(45);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return __WEBPACK_IMPORTED_MODULE_10__Switch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__generatePath__ = __webpack_require__(47);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "generatePath", function() { return __WEBPACK_IMPORTED_MODULE_11__generatePath__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__matchPath__ = __webpack_require__(48);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return __WEBPACK_IMPORTED_MODULE_12__matchPath__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__withRouter__ = __webpack_require__(49);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return __WEBPACK_IMPORTED_MODULE_13__withRouter__["a"]; });





























/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _objectAssign = __webpack_require__(9);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _propTypes = __webpack_require__(53);

var _compareProps = __webpack_require__(59);

var _compareProps2 = _interopRequireDefault(_compareProps);

var _mergeAndExtractProps2 = __webpack_require__(60);

var _mergeAndExtractProps3 = _interopRequireDefault(_mergeAndExtractProps2);

var _extractStyle = __webpack_require__(61);

var _recursiveNodeCheck = __webpack_require__(62);

var _recursiveNodeCheck2 = _interopRequireDefault(_recursiveNodeCheck);

var _inputTracker = __webpack_require__(63);

var _inputTracker2 = _interopRequireDefault(_inputTracker);

var _notifier = __webpack_require__(13);

var _syntheticClick = __webpack_require__(64);

var _syntheticClick2 = _interopRequireDefault(_syntheticClick);

var _constants = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Interactive = function (_React$Component) {
  _inherits(Interactive, _React$Component);

  function Interactive(props) {
    _classCallCheck(this, Interactive);

    // state is always an object with two keys, `iState` and `focus`
    var _this = _possibleConstructorReturn(this, (Interactive.__proto__ || Object.getPrototypeOf(Interactive)).call(this, props));

    _this.refCallback = function (node) {
      _this.refNode = node;
      if (node) {
        var prevTopNode = _this.topNode;
        // if `as` is a component, then the `refNode` is the span wrapper, so get its firstChild
        if (typeof _this.p.props.as !== 'string') _this.topNode = node.firstChild;else _this.topNode = node;
        _this.tagName = _this.topNode.tagName.toLowerCase();
        _this.type = _this.topNode.type && _this.topNode.type.toLowerCase();
        _this.enterKeyTrigger = (0, _constants.enterKeyTrigger)(_this.tagName, _this.type);
        _this.spaceKeyTrigger = (0, _constants.spaceKeyTrigger)(_this.tagName, _this.type);
        // if as is a react component then won't have access to tag in componentWillReceiveProps,
        // so check if click listener needs to be set again here (after this.tagName is set)
        if (_this.setClickListener(_this.p.props)) _this.p.passThroughProps.onClick = _this.handleEvent;
        // if node is a new node then call manageFocus to keep browser in sync with RI,
        // note: above assignments can't be in this if statement b/c node could have mutated,
        // node should maintain focus state when mutated
        if (prevTopNode !== _this.topNode) {
          _this.manageFocus('refCallback');
          // if refDOMNode prop, pass along new DOM node
          _this.p.props.refDOMNode && _this.p.props.refDOMNode(_this.topNode);
        }
      }
    };

    _this.handleEvent = function (e) {
      if (!_this.isValidEvent(e)) return;

      if (_constants.mouseEvents[e.type]) {
        if (_this.handleMouseEvent(e) === 'terminate') return;
      } else if (_constants.touchEvents[e.type] || e.type === 'touchmove' || e.type === 'touchtapcancel') {
        if (_this.handleTouchEvent(e) === 'terminate') return;
      } else if (e.type === 'click') {
        if (_this.handleClickEvent(e) === 'terminate') return;
      } else if (_this.handleOtherEvent(e) === 'terminate') return;

      // compute the new state object and pass it as an argument to updateState,
      // which calls setState and state change callbacks if needed
      _this.updateState(_this.computeState(), _this.p.props, e);
    };

    _this.handleNotifyOfNext = function (e) {
      var updateState = false;

      switch (e.type) {
        case 'scroll':
        case 'mouseenter':
        case 'mutation':
          // check mouse position, if it's still on RI, then reNotifyOfNext, else updateState
          if (_this.track.mouseOn && _this.checkMousePosition() === 'mouseOn') {
            return 'reNotifyOfNext';
          }
          _this.track.mouseOn = false;
          _this.track.buttonDown = false;
          updateState = true;
          break;

        case 'touchstart':
          // cancel tap if extra touch point, or when touch someplace else on the screen
          // check topNode and children to make sure they weren't the target
          if (_this.p.props.extraTouchNoTap) {
            if (_this.track.touches.active < _this.maxTapPoints && (0, _recursiveNodeCheck2.default)(_this.topNode, function (node) {
              return e.target === node;
            })) {
              return 'reNotifyOfNext';
            }
            updateState = _this.handleTouchEvent({ type: 'touchtapcancel' }) === 'updateState';
          }
          break;

        case 'dragstart':
          // use setTimeout because notifier drag event will fire before the drag event on RI,
          // so w/o timeout when this intance of RI is dragged it would go:
          // active -> force normal from notifier drag -> active from RI's drag event,
          // but the timeout will allow time for RI's drag event to fire before force normal
          _this.manageSetTimeout('dragstart', function () {
            if (!_this.track.drag) {
              _this.forceTrackIState('normal');
              _this.updateState(_this.computeState(), _this.p.props, e, true);
            }
          }, 30);
          break;

        // window focus event
        case 'focus':
          // reinstate previous focus state if this window focus event is followed by
          // an element focus event, otherwise cancel focus reinstatement
          if (_this.track.previousFocus !== false) {
            _this.track.reinstateFocus = true;
            _this.manageSetTimeout('windowFocus', function () {
              _this.track.reinstateFocus = false;
            }, _constants.queueTime);
          }
          break;

        // window blur event to preserve the focus state
        case 'blur':
          // clear the timer set in manageNotifyOfNext that was set to cancel this notification
          _this.cancelTimeout('elementBlur');
          // notifiy of the next window focus event (re-entering the app/window/tab)
          if (!_this.track.notifyOfNext.focus) {
            _this.track.notifyOfNext.focus = (0, _notifier.notifyOfNext)('focus', _this.handleNotifyOfNext);
          }
          break;
        default:
      }

      if (updateState) _this.updateState(_this.computeState(), _this.p.props, e, true);
      delete _this.track.notifyOfNext[e.type];
      return null;
    };

    _this.state = {
      // iState is always 1 of 5 strings:
      // 'normal', 'hover', 'hoverActive', 'touchActive', 'keyActive'
      iState: 'normal',
      // focus is always 1 of 4 values: false, 'tab', 'mouse' or 'touch'
      focus: false
    };

    // things to keep track of so RI knows what to do when
    _this.track = {
      touchDown: false,
      recentTouch: false,
      touches: { points: {}, active: 0 },
      mouseOn: false,
      buttonDown: false,
      clickType: 'reset',
      focus: false,
      previousFocus: false,
      reinstateFocus: false,
      focusTransition: 'reset',
      focusStateOnMouseDown: false,
      spaceKeyDown: false,
      enterKeyDown: false,
      drag: false,
      updateTopNode: false,
      notifyOfNext: {},
      timeoutIDs: {},
      state: _this.state
    };

    // the node returned by the ref callback
    _this.refNode = null;
    // the actual top DOM node of `as`, needed when `as` is wrapped in a span (is ReactComponent)
    _this.topNode = null;
    // tagName and type properties of topNode, updated in refCallback
    _this.tagName = typeof props.as === 'string' && props.as || '';
    _this.type = props.type || '';
    // if the topNode is triggered by the enter key, and/or the space bar
    _this.enterKeyTrigger = false;
    _this.spaceKeyTrigger = false;

    // maximum number of touch points where a tap is still possible, updated in propsSetup
    _this.maxTapPoints = 1;

    // the event handlers to pass down as props to the element/component
    _this.eventHandlers = _this.setupEventHandlers();

    // this.p is used to store things that are a deterministic function of props
    // to avoid recalculating every time they are needed, it can be thought of as a pure
    // extension to props and is only updated in the constructor and componentWillReceiveProps
    _this.p = { sameProps: false };
    // set properties of `this.p`
    _this.propsSetup(props);
    // if initialState prop, update state.iState for initial render, note that state.focus
    // will be updated in componentDidMount b/c can't call focus until have ref to DOM node
    if (_this.p.props.initialState && _this.p.props.initialState.iState) {
      _this.forceTrackIState(_this.p.props.initialState.iState);
      _this.state = _this.computeState();
    }
    return _this;
  }

  _createClass(Interactive, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // enter focus state if initialState.focus - called here instead of constructor
      // because can't call focus until have ref to DOM node
      if (this.p.props.initialState && this.p.props.initialState.focus !== undefined) {
        this.forceState({ focus: this.p.props.initialState.focus });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // set if the `topNode` needs to be updated in componentDidUpdate => `as` is different
      // and not a string, note that if `as` is a new string, then the `refCallback`
      // will be called by React so no need to do anything in componentDidUpdate
      this.track.updateTopNode = this.props.as !== nextProps.as && typeof this.props.as !== 'string' && typeof nextProps.as !== 'string';

      // check if nextProps are the same as this.props
      this.p.sameProps = false;
      if (!nextProps.mutableProps && (0, _compareProps2.default)(this.props, nextProps)) {
        this.p.sameProps = true;
      } else {
        // if not same props, do props setup => set properties of `this.p`
        this.propsSetup(nextProps);
      }

      // if `forceState` prop, then force update state
      if (this.p.props.forceState) this.forceState(this.p.props.forceState);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      // or statement, returns true on first true value, returns false if all are false
      return (
        // return true if props have changed since last render
        !this.p.sameProps && nextProps !== this.props ||
        // always update if there are interactive children
        nextProps.interactiveChild ||
        // if `iState` changed, AND the `style` or `className` for the new `iState` is different,
        // prevents renders when switching b/t two states that have the same `style` and `className`
        nextState.iState !== this.state.iState && (this.p[nextState.iState + 'Style'].style !== this.p[this.state.iState + 'Style'].style || this.p[nextState.iState + 'Style'].className !== this.p[this.state.iState + 'Style'].className) ||
        // if `focus` state changed (always update to work with default style)
        nextState.focus !== this.state.focus
      );
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      // `refCallback` isn't called by React when `as` is a component because the span wrapper
      // remains the same element and is not re-mounted in the DOM, so need to call refCallback here
      // if `as` is new and a component (`updateTopNode` was set in componentWillReceiveProps).
      if (this.track.updateTopNode) {
        this.track.updateTopNode = false;
        this.refCallback(this.refNode);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _this2 = this;

      Object.keys(this.track.notifyOfNext).forEach(function (eType) {
        (0, _notifier.cancelNotifyOfNext)(eType, _this2.track.notifyOfNext[eType]);
      });
      Object.keys(this.track.timeoutIDs).forEach(function (timer) {
        window.clearTimeout(_this2.track.timeoutIDs[timer]);
      });
    }

    // determine event handlers to use based on the device type - only determined once in constructor

  }, {
    key: 'setupEventHandlers',
    value: function setupEventHandlers() {
      var _this3 = this;

      var eventHandlers = {};
      Object.keys(_constants.otherEvents).forEach(function (event) {
        eventHandlers[_constants.otherEvents[event]] = _this3.handleEvent;
      });

      // if the device has touch, set touch event listeners
      if (_constants.deviceHasTouch) {
        Object.keys(_constants.touchEvents).forEach(function (event) {
          eventHandlers[_constants.touchEvents[event]] = _this3.handleEvent;
        });
      }
      // if the device has a mouse, set mouse event listeners
      if (_constants.deviceHasMouse) {
        Object.keys(_constants.mouseEvents).forEach(function (event) {
          eventHandlers[_constants.mouseEvents[event]] = _this3.handleEvent;
        });
      }
      return eventHandlers;
    }

    // returns true if a click listener should be set, called from propsSetup and refCallback

  }, {
    key: 'setClickListener',
    value: function setClickListener(props) {
      // set click listener when there is an onClick prop
      if (props.onClick) return true;
      if (_constants.deviceHasTouch) {
        // set click listener when the element is focusable - this is to correct a bug
        // in Chrome on iOS where it will sometimes, when it is under stress, fire focus and
        // click events without firing a touch event on the document - the result is the focus event
        // will cause RI to enter the focus from tab state errantly, and then the click event will
        // toggle focus off making the correction, so have to listen for click events
        if (props.tabIndex) return true;
        // set click listener when the element has a knownRoleTag, i.e. the browser
        // has a click event handler so preventDefault() needs to be called when the
        // browser sends a click event after RI has canceled tap (e.g. touchTapTimer expired, etc)
        if (_constants.knownRoleTags[this.tagName]) return true;
      }
      return false;
    }

    // find and set the top DOM node of `as`

  }, {
    key: 'propsSetup',


    // setup `this.p`, only called from constructor and componentWillReceiveProps
    value: function propsSetup(props) {
      var _mergeAndExtractProps = (0, _mergeAndExtractProps3.default)(props, _constants.knownProps),
          mergedProps = _mergeAndExtractProps.mergedProps,
          passThroughProps = _mergeAndExtractProps.passThroughProps;

      (0, _extractStyle.setActiveAndFocusProps)(mergedProps);

      // if focus state prop and no tabIndex, then add a tabIndex so RI is focusable by browser
      if (passThroughProps.tabIndex === null) delete passThroughProps.tabIndex;else if (!passThroughProps.tabIndex && (mergedProps.focus || mergedProps.focusFromTab || mergedProps.focusFromMouse || mergedProps.focusFromTouch || mergedProps.onClick)) {
        mergedProps.tabIndex = '0';
        passThroughProps.tabIndex = '0';
      }

      // if onClick prop but it's not clear what the role of the element is then add role="button"
      if (passThroughProps.role === null) delete passThroughProps.role;else if (mergedProps.onClick && !mergedProps.role && typeof mergedProps.as === 'string' && !_constants.knownRoleTags[mergedProps.as]) {
        mergedProps.role = 'button';
        passThroughProps.role = 'button';
      }

      // maximum number of touch points where a tap is still possible
      this.maxTapPoints = mergedProps.onTapFour && 4 || mergedProps.onTapThree && 3 || mergedProps.onTapTwo && 2 || 1;

      // add onClick handler to passThroughProps if it's required
      if (this.setClickListener(mergedProps)) passThroughProps.onClick = this.handleEvent;

      //  add onTouchMove handler to passThroughProps if it's required
      if (_constants.deviceHasTouch && (mergedProps.touchActiveTapOnly || mergedProps.onLongPress || mergedProps.onTouchMove)) {
        passThroughProps.onTouchMove = this.handleEvent;
      }

      // add other event handlers to passThroughProps
      (0, _objectAssign2.default)(passThroughProps, this.eventHandlers);

      this.p.normalStyle = (0, _extractStyle.extractStyle)(mergedProps, 'normal');
      this.p.hoverStyle = (0, _extractStyle.extractStyle)(mergedProps, 'hover');
      this.p.hoverActiveStyle = (0, _extractStyle.extractStyle)(mergedProps, 'hoverActive');
      this.p.touchActiveStyle = (0, _extractStyle.extractStyle)(mergedProps, 'touchActive');
      this.p.keyActiveStyle = (0, _extractStyle.extractStyle)(mergedProps, 'keyActive');
      this.p.tabFocusStyle = (0, _extractStyle.extractStyle)(mergedProps, 'focusFromTab');
      this.p.mouseFocusStyle = (0, _extractStyle.extractStyle)(mergedProps, 'focusFromMouse');
      this.p.touchFocusStyle = (0, _extractStyle.extractStyle)(mergedProps, 'focusFromTouch');
      this.p.passThroughProps = passThroughProps;
      this.p.props = mergedProps;
    }

    // keep track of running timeouts so can clear in componentWillUnmount

  }, {
    key: 'manageSetTimeout',
    value: function manageSetTimeout(type, cb, delay) {
      var _this4 = this;

      if (this.track.timeoutIDs[type] !== undefined) {
        window.clearTimeout(this.track.timeoutIDs[type]);
      }
      this.track.timeoutIDs[type] = window.setTimeout(function () {
        delete _this4.track.timeoutIDs[type];
        cb();
      }, delay);
    }
  }, {
    key: 'cancelTimeout',
    value: function cancelTimeout(type) {
      if (this.track.timeoutIDs[type] !== undefined) {
        window.clearTimeout(this.track.timeoutIDs[type]);
        delete this.track.timeoutIDs[type];
      }
    }

    // force set this.track properties based on iState

  }, {
    key: 'forceTrackIState',
    value: function forceTrackIState(iState) {
      if (this.computeState().iState !== iState) {
        this.track.mouseOn = iState === 'hover' || iState === 'hoverActive';
        this.track.buttonDown = iState === 'hoverActive';
        this.track.touchDown = iState === 'touchActive';
        this.track.spaceKeyDown = iState === 'keyActive';
        this.track.enterKeyDown = iState === 'keyActive';
        this.track.drag = false;
      }
    }

    // force set new state

  }, {
    key: 'forceState',
    value: function forceState(newState) {
      // set this.track properties to match new iState
      if (newState.iState !== undefined) this.forceTrackIState(newState.iState);

      // if new focus state, call manageFocus and return b/c focus calls updateState
      if (newState.focus !== undefined && newState.focus !== this.track.state.focus) {
        this.track.focus = newState.focus;
        this.manageFocus(newState.focus ? 'forceStateFocusTrue' : 'forceStateFocusFalse');
        return;
      }

      // update state with new computed state and dummy 'event' that caused state change
      this.updateState(this.computeState(), this.p.props, (0, _constants.dummyEvent)('forcestate'));
    }

    // compute the state based on what's set in `this.track`, returns a new state object
    // note: use the respective active state when drag is true (i.e. dragging the element)

  }, {
    key: 'computeState',
    value: function computeState() {
      var _track = this.track,
          mouseOn = _track.mouseOn,
          buttonDown = _track.buttonDown,
          touchDown = _track.touchDown,
          focus = _track.focus,
          drag = _track.drag;

      var focusKeyDown = focus && (this.track.enterKeyDown && this.enterKeyTrigger || this.track.spaceKeyDown && this.spaceKeyTrigger);
      var newState = { focus: focus };
      if (!mouseOn && !buttonDown && !touchDown && !focusKeyDown && !drag) newState.iState = 'normal';else if (mouseOn && !buttonDown && !touchDown && !focusKeyDown && !drag) {
        newState.iState = 'hover';
      } else if (mouseOn && buttonDown && !touchDown && !focusKeyDown || drag && !touchDown) {
        newState.iState = 'hoverActive';
      } else if (focusKeyDown && !touchDown) newState.iState = 'keyActive';else if (touchDown || drag) newState.iState = 'touchActive';
      return newState;
    }

    // takes a new state, calls setState and the state change callbacks

  }, {
    key: 'updateState',
    value: function updateState(newState, props, event, dontManageNotifyOfNext) {
      if (!dontManageNotifyOfNext) this.manageNotifyOfNext(newState);
      var prevIState = this.track.state.iState;
      var nextIState = newState.iState;
      var iStateChange = nextIState !== prevIState;
      var focusChange = newState.focus !== this.track.state.focus;

      // early return if state doesn't need to change
      if (!iStateChange && !focusChange) return;

      // create new prev and next state objects with immutable values
      var prevState = {
        iState: prevIState,
        focus: this.track.state.focus
      };
      var nextState = {
        iState: nextIState,
        focus: newState.focus
      };

      // call onStateChange prop callback
      props.onStateChange && props.onStateChange({ prevState: prevState, nextState: nextState, event: event });

      // track new state because setState is asyncrounous
      this.track.state = newState;

      // only place that setState is called
      this.setState(newState, props.setStateCallback && props.setStateCallback.bind(this, { prevState: prevState, nextState: nextState }));
    }

    // handles all events - first checks if it's a valid event, then calls the specific
    // type of event handler (to set the proper this.track properties),
    // and at the end calls this.updateState(...)

  }, {
    key: 'isValidEvent',


    // checks if the event is a valid event or not, returns true / false respectivly
    value: function isValidEvent(e) {
      // if it's a known click event then return true
      if (e.type === 'click' && this.track.clickType !== 'reset') return true;
      // if it's a focus/blur event and this Interactive instance is not the target then return true
      if ((e.type === 'focus' || e.type === 'blur') && e.target !== this.topNode) return true;

      // refCallbackFocus calls focus when there is a new top DOM node and RI is already in the
      // focus state to keep the browser's focus state in sync with RI's, so reset and return false
      if (e.type === 'focus' && this.track.focusTransition === 'refCallbackFocus') {
        e.stopPropagation();
        this.track.focusTransition = 'reset';
        return false;
      }

      // if the focusTransition is a force blur and RI is not currently in the focus state,
      // then the force blur is to keep the browser focus state in sync with RI's focus state,
      // so reset the focusTransition and return false, no need to do anything
      // else because the blur event was only for the benefit of the browser, not RI
      if (e.type === 'blur' && this.track.focusTransition === 'focusForceBlur' && !this.track.state.focus) {
        e.stopPropagation();
        this.track.focusTransition = 'reset';
        return false;
      }

      // if the device is touchOnly or a hybrid
      if (_constants.deviceHasTouch) {
        // reject click events that are from touch interactions, unless no active or touchActive prop
        // if no active or touchActive prop, then let the browser determine what is a click from touch
        // this allows for edge taps that don't fire touch events on RI (only click events)
        // so the click event is allowed through when WebkitTapHightlightColor indicates a click
        if (e.type === 'click' && (_inputTracker2.default.touch.recentTouch || _inputTracker2.default.touch.touchOnScreen) && (this.p.props.active || this.p.props.touchActive)) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
        // reject unknown focus events from touch interactions
        if (e.type === 'focus') {
          if (this.track.focusTransition === 'reset' && (_inputTracker2.default.touch.recentTouch || !this.track.touchDown && _inputTracker2.default.touch.touchOnScreen)) {
            e.preventDefault();
            e.stopPropagation();
            this.manageFocus('focusForceBlur');
            return false;
          }
        }
      }

      if (_constants.deviceType === 'hybrid') {
        // reject mouse events from touch interactions
        if (/mouse/.test(e.type) && (_inputTracker2.default.touch.touchOnScreen || _inputTracker2.default.touch.recentTouch)) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
      }

      return true;
    }

    // notifyOfNext plugs the holes in the events fired by the browser on the RI element,
    // in some situations the browser fails to fire the necessary event leaving RI stuck
    // in the wrong state (a not normal iState), so sign up to be notified of the next global event
    // and do some checks (in handleNotifyOfNext) to confirm RI is in the correct state,
    // note that notifyOfNext only while not in the normal state makes the notifier O(1) instead of
    // O(n), where n is the number of mounted RI components

  }, {
    key: 'manageNotifyOfNext',
    value: function manageNotifyOfNext(newState) {
      var _this5 = this;

      // set notifyOfNext
      var setNON = function setNON(eType) {
        if (!_this5.track.notifyOfNext[eType]) {
          _this5.track.notifyOfNext[eType] = (0, _notifier.notifyOfNext)(eType, _this5.handleNotifyOfNext);
        }
      };
      // cancel notifyOfNext
      var cancelNON = function cancelNON(eType) {
        if (_this5.track.notifyOfNext[eType]) {
          (0, _notifier.cancelNotifyOfNext)(eType, _this5.track.notifyOfNext[eType]);
          delete _this5.track.notifyOfNext[eType];
        }
      };

      if (_constants.deviceHasMouse) {
        // if not in the normal state and not dragging, then set notifyOfNext, otherwise cancel
        var shouldSetNON = newState.iState !== 'normal' && !this.track.drag;

        // check mouse position on document mouseenter to prevent from sticking in
        // the hover state after switching to another app/window, moving the mouse,
        // and then switching  back (so the mouse is no longer over the element)
        shouldSetNON ? setNON('mouseenter') : cancelNON('mouseenter');

        // the dragstart event on an element fires after a short delay, so it is possible to
        // start dragging an element and have the mouseenter another element putting it in the
        // hoverActive state before the dragstart event fires (after the dragstart event
        // no other mouse events are fired), so sign up for next global dragstart to force intro
        // normal state while another element is being dragged
        shouldSetNON ? setNON('dragstart') : cancelNON('dragstart');

        // the scroll listener provides a minor improvement to accuracy by exiting the hover state
        // as soon as the mouse is scrolled off an element instead of waiting for the scrolling to end
        // only set as a passive listener as the improvement is not worth it if it hurts performance
        if (_constants.passiveEventSupport) {
          shouldSetNON ? setNON('scroll') : cancelNON('scroll');
        }

        // if the mouse is on RI, then sign up for next DOM mutation event, which could
        // move the mouse off of RI (by changing the layout of the page)
        // without firing a mouseleave event (because the mouse never moved)
        this.track.mouseOn ? setNON('mutation') : cancelNON('mutation');
      }

      if (_constants.deviceHasTouch) {
        // cancel tap when touch someplace else on the screen
        newState.iState === 'touchActive' ? this.p.props.extraTouchNoTap && setNON('touchstart') : cancelNON('touchstart');
      }

      // notify of next setup for maintaining correct focusFrom when switching apps/windows,
      // if exiting the focus state, notify of the next window blur (leaving the app/window/tab)
      // event if it immediately follows this event, otherwise cancel the notify of next
      if (this.track.state.focus && !newState.focus) {
        setNON('blur');
        this.manageSetTimeout('elementBlur', function () {
          _this5.track.previousFocus = false;
          cancelNON('blur');
        }, _constants.queueTime);
      }
    }
  }, {
    key: 'checkMousePosition',


    // check the mouse position relative to the RI element on the page
    value: function checkMousePosition(e) {
      if (!_constants.deviceHasMouse) return null;

      var mouseX = e && e.clientX || _inputTracker2.default.mouse.clientX;
      var mouseY = e && e.clientY || _inputTracker2.default.mouse.clientY;
      function mouseOnNode(node) {
        var rect = node.getBoundingClientRect();
        return mouseX >= rect.left - 1 && mouseX <= rect.right + 1 && mouseY >= rect.top - 1 && mouseY <= rect.bottom + 1;
      }

      var mouseOn = true;

      if (!_inputTracker2.default.mouse.mouseOnDocument) {
        mouseOn = false;
      } else if (!this.p.props.nonContainedChild) {
        mouseOn = mouseOnNode(this.topNode);
      } else {
        // if the nonContainedChild prop is present, then do a recursive check of the node and its
        // children until the mouse is on a node or all children are checked,
        // this is useful when the children aren't inside of the parent on the page
        mouseOn = (0, _recursiveNodeCheck2.default)(this.topNode, mouseOnNode);
      }

      return mouseOn ? 'mouseOn' : 'mouseOff';
    }

    // check to see if a focusTransition is necessary and update this.track.focusTransition
    // returns 'terminate' if handleEvent should terminate, returns 'updateState'
    // if handleEvent should continue and call updateState this time through
    // focus event lifecycle:
    // - browser calls focus -> onFocus listener triggered
    // - RI calls focus (using manageFocus) -> set focusTransition -> onFocus listener triggered
    // - RI event handler uses track.focusTransition to determine if the focus event is:
    //   - not a valid event (in isValidEvent)
    //     - sent from RI to keep browser focus in sync with RI -> reset focusTransition -> end
    //     - errant -> call blur to keep browser in sync, set focusTransition to focusForceBlur -> end
    //   - a valid event
    //     - sent from RI -> reset focusTransition -> RI enters the focus state w/ focus
    //       based on the focusTransition
    //     - sent from browser -> RI enters the focus state w/ focus set to 'tab'
    // - browser calls blur -> onBlur listener triggered
    // - RI calls blur (using manageFocus) -> set focusTransition -> onBlur listener triggered
    // - RI event handler uses track.focusTransition to determine if the blur event is:
    //   - not a valid event (in isValidEvent)
    //     - a force blur to keep the browser focus state in sync -> reset focusTransition -> end
    //       (if it's a force blur meant for both RI and the browser, then it's a valid event)
    //   - eveything else -> reset focusTransition -> RI leaves focus state

  }, {
    key: 'manageFocus',
    value: function manageFocus(type, e) {
      var _this6 = this;

      // if this exact event has already been used for focus/blur by another instance of Interactive
      // i.e. a child and the event is bubbling, then don't manage focus and return updateState
      if (e && (_inputTracker.focusRegistry.focus === e || _inputTracker.focusRegistry.blur === e)) return 'updateState';

      // is the DOM node tag blurable for toggle focus
      var tagIsBlurable = !_constants.nonBlurrableTags[this.tagName] && !this.p.props.focusToggleOff;
      // is the node focusable, if there is a focus or tabIndex prop, or it's non-blurable, then it is
      var tagIsFocusable = this.p.props.tabIndex || _constants.knownRoleTags[this.tagName];

      // calls focus/blur to transition focus, returns 'terminate' if focus/blur call is made
      // because focus/blur event handler called updateState,
      // returns 'updateState' if not allowed to make specified transition, so RI will continue
      // to updateState this time through handleEvent
      var focusTransition = function focusTransition(event, transitionAs, force) {
        if (force === 'force' || event === 'focus' && tagIsFocusable || event === 'blur' && tagIsBlurable) {
          // if the manageFocus call is from a browser event (i.e. will bubble), register it
          if (e) {
            _inputTracker.focusRegistry[event] = e;
            // reset event registry after bubbling has finished because React reuses events so
            // future event equality checks may give a false positive if not reset
            _this6.manageSetTimeout('focusRegistry', function () {
              _inputTracker.focusRegistry[event] = null;
            }, 0);
          }
          _this6.track.focusTransition = transitionAs;
          _this6.topNode[event]();
          // if focusTransition has changed, then the focus/blur call was sucessful so terminate
          if (_this6.track.focusTransition !== transitionAs) {
            return 'terminate';
          }
        }
        _this6.track.focusTransition = 'reset';
        return 'updateState';
      };

      // toggles focus by calling focusTransition, returns focusTransition's return
      var toggleFocus = function toggleFocus(toggleAs, force) {
        if (_this6.track.state.focus) return focusTransition('blur', toggleAs + 'Blur', force);
        return focusTransition('focus', toggleAs + 'Focus', force);
      };

      switch (type) {
        case 'mousedown':
          return focusTransition('focus', 'mouseDownFocus');
        case 'mouseup':
          // blur only if focus was not initiated on the preceding mousedown,
          if (this.track.focusStateOnMouseDown) return focusTransition('blur', 'mouseUpBlur');
          this.track.focusTransition = 'reset';
          return 'updateState';
        case 'touchclick':
          return toggleFocus('touchClick');
        case 'forceStateFocusTrue':
          // setTimeout because React misses focus calls made during componentWillReceiveProps,
          // which is where forceState calls come from (the browser receives the focus call
          // but not React), so have to call focus asyncrounsly so React receives it
          this.manageSetTimeout('forceStateFocusTrue', function () {
            !_this6.track.state.focus && focusTransition('focus', 'forceStateFocus', 'force');
          }, 0);
          return 'terminate';
        case 'forceStateFocusFalse':
          // same as forceStateFocusTrue, but for focus false
          this.manageSetTimeout('forceStateFocusFalse', function () {
            _this6.track.state.focus && focusTransition('blur', 'forceStateBlur', 'force');
          }, 0);
          return 'terminate';
        case 'refCallback':
          // if in the focus state and RI has a new topDOMNode, then call focus() on `this.topNode`
          // to keep the browser focus state in sync with RI's focus state
          if (this.track.state.focus) return focusTransition('focus', 'refCallbackFocus', 'force');
          this.track.focusTransition = 'reset';
          return 'terminate';
        case 'focusForceBlur':
          return focusTransition('blur', 'focusForceBlur', 'force');
        default:
          return 'updateState';
      }
    }

    // returns 'terminate' if the caller (this.handleEvent) should not call updateState(...)

  }, {
    key: 'handleMouseEvent',
    value: function handleMouseEvent(e) {
      switch (e.type) {
        case 'mouseenter':
          (0, _inputTracker.updateMouseFromRI)(e);
          this.p.props.onMouseEnter && this.p.props.onMouseEnter(e);
          this.track.mouseOn = true;
          this.track.buttonDown = e.buttons === 1;
          return 'updateState';
        case 'mouseleave':
          (0, _inputTracker.updateMouseFromRI)(e);
          this.p.props.onMouseLeave && this.p.props.onMouseLeave(e);
          this.track.mouseOn = false;
          this.track.buttonDown = false;
          return 'updateState';
        case 'mousemove':
          this.p.props.onMouseMove && this.p.props.onMouseMove(e);
          // early return for mouse move
          if (this.track.mouseOn && this.track.buttonDown === (e.buttons === 1)) return 'terminate';
          this.track.mouseOn = true;
          this.track.buttonDown = e.buttons === 1;
          return 'updateState';
        case 'mousedown':
          this.p.props.onMouseDown && this.p.props.onMouseDown(e);
          this.track.mouseOn = true;
          this.track.buttonDown = true;
          // track focus state on mousedown to know if should blur on mouseup
          this.track.focusStateOnMouseDown = this.track.state.focus;
          return this.manageFocus('mousedown', e);
        case 'mouseup':
          {
            this.p.props.onMouseUp && this.p.props.onMouseUp(e);
            this.track.buttonDown = false;
            var manageFocusReturn = this.manageFocus('mouseup', e);
            this.manageClick('mouseClick');
            return manageFocusReturn;
          }
        default:
          return 'terminate';
      }
    }

    // returns 'terminate' if the caller (this.handleEvent) should not call updateState(...)
    // note that a touch interaction lasts from the start of the first touch point on RI,
    // until removal of the last touch point on RI, and then the touch interaction is reset

  }, {
    key: 'handleTouchEvent',
    value: function handleTouchEvent(e) {
      var _this7 = this;

      // reset mouse trackers
      this.track.mouseOn = false;
      this.track.buttonDown = false;

      // reset touch interaction tracking, called when there are no more touches on the target
      var resetTouchInteraction = function resetTouchInteraction() {
        _this7.track.touchDown = false;
        _this7.track.touches = { points: {}, active: 0 };
        // clear the touchTapTimer if it's running
        _this7.cancelTimeout('touchTapTimer');
      };

      // track recent touch, called from touchend and touchcancel
      var recentTouch = function recentTouch() {
        _this7.track.recentTouch = true;
        _this7.manageSetTimeout('recentTouchTimer', function () {
          _this7.track.recentTouch = false;
        }, _constants.queueTime);
      };

      // returns true if there are extra touches on the screen
      var extraTouches = function extraTouches() {
        return (
          // if extraTouchNoTap prop and also touching someplace else on the screen, or
          _this7.p.props.extraTouchNoTap && e.touches.length !== _this7.track.touches.active ||
          // more touches on RI than maxTapPoints
          _this7.track.touches.active > _this7.maxTapPoints
        );
      };

      // returns true if a touch point has moved more than is allowed for a tap
      var touchMoved = function touchMoved(endTouch, startTouch, numberOfPoints) {
        return Math.abs(endTouch.clientX - startTouch.startX) >= 15 + 3 * numberOfPoints || Math.abs(endTouch.clientY - startTouch.startY) >= 15 + 3 * numberOfPoints;
      };

      // log touch position for each touch point that is part of the touch event
      var logTouchCoordsAs = function logTouchCoordsAs(logAs) {
        for (var i = 0; i < e.changedTouches.length; i++) {
          var point = _this7.track.touches.points[e.changedTouches[i].identifier] || {};
          point[logAs + 'X'] = e.changedTouches[i].clientX;
          point[logAs + 'Y'] = e.changedTouches[i].clientY;
          _this7.track.touches.points[e.changedTouches[i].identifier] = point;
        }
      };

      switch (e.type) {
        case 'touchstart':
          {
            this.p.props.onTouchStart && this.p.props.onTouchStart(e);
            // update number of active touches
            this.track.touches.active += e.changedTouches.length;
            if (this.track.touches.tapCanceled) return 'terminate';
            var newTouchDown = !this.track.touchDown;
            this.track.touchDown = true;
            // cancel tap if there was already a touchend in this interaction or there are extra touches
            if (this.track.touches.touchend || extraTouches()) {
              // recursively call handleTouchEvent with a touchtapcancel event to set track properties,
              // call handleTouchEvent directly don't go through handleEvent so updateState isn't called
              return this.handleTouchEvent({ type: 'touchtapcancel' }) === 'updateState' || newTouchDown ? 'updateState' : 'terminate';
            }

            // if going from no touch to touch, set touchTapTimer
            if (newTouchDown) {
              e.persist();
              this.manageSetTimeout('touchTapTimer', function () {
                // if the timer finishes then call onLongPress callback and
                // fire a touchtapcancel event to cancel the tap,
                // because this goes through handleEvent, updateState will be called if needed
                _this7.p.props.onLongPress && _this7.p.props.onLongPress(e);
                _this7.handleEvent((0, _constants.dummyEvent)('touchtapcancel'));
              }, this.p.props.tapTimeCutoff);
            }

            // log touch start position
            logTouchCoordsAs('start');
            return 'updateState';
          }

        case 'touchmove':
          this.p.props.onTouchMove && this.p.props.onTouchMove(e);
          if (this.track.touches.tapCanceled) return 'terminate';
          // cancel tap if there are extra touches
          if (extraTouches()) return this.handleTouchEvent({ type: 'touchtapcancel' });

          // if touchActiveTapOnly or onLongPress prop,
          // check to see if the touch moved enough to cancel tap
          if (this.p.props.touchActiveTapOnly || this.p.props.onLongPress) {
            for (var i = 0; i < e.changedTouches.length; i++) {
              var touch = this.track.touches.points[e.changedTouches[i].identifier];
              if (touch && touchMoved(e.changedTouches[i], touch, this.maxTapPoints)) {
                return this.handleTouchEvent({ type: 'touchtapcancel' });
              }
            }
          }
          return 'terminate';

        case 'touchend':
          // start recent touch timer
          recentTouch();
          this.p.props.onTouchEnd && this.p.props.onTouchEnd(e);
          // update number of active touches
          this.track.touches.active -= e.changedTouches.length;
          // if a touch event was dropped somewhere, i.e.
          // cumulative length of changed touches for touchstarts !== touchends, then reset
          if (this.track.touches.active < 0 || e.touches.length === 0 && this.track.touches.active > 0) {
            resetTouchInteraction();
            return 'updateState';
          }

          // track that there has been a touchend in this touch interaction
          this.track.touches.touchend = true;

          // check to see if tap is already canceled or should be canceled
          if (this.track.touches.active === 0 && (this.track.touches.tapCanceled || extraTouches())) {
            resetTouchInteraction();
            return 'updateState';
          } else if (this.track.touches.tapCanceled) return 'terminate';else if (extraTouches()) return this.handleTouchEvent({ type: 'touchtapcancel' });

          // log touch end position
          logTouchCoordsAs('client');

          // if there are no remaining touches, then process the touch interaction
          if (this.track.touches.active === 0) {
            var touches = this.track.touches.points;
            var touchKeys = Object.keys(touches);
            var count = touchKeys.length;

            // determine if there was a tap and number of touch points for the tap
            // if every touch point hasn't moved, set tapTouchPoints to count
            var tapTouchPoints = touchKeys.every(function (touch) {
              return !touchMoved(touches[touch], touches[touch], count);
            }) ? count : 0;

            // reset the touch interaction
            resetTouchInteraction();

            switch (tapTouchPoints) {
              case 1:
                {
                  var manageFocusReturn = 'updateState';
                  // if no active or touchActive prop, let the browser handle click events
                  if (this.p.props.active || this.p.props.touchActive) {
                    manageFocusReturn = this.manageFocus('touchclick', e);
                    this.manageClick('tapClick');
                  }
                  return manageFocusReturn;
                }
              case 2:
                this.p.props.onTapTwo && this.p.props.onTapTwo(e);
                break;
              case 3:
                this.p.props.onTapThree && this.p.props.onTapThree(e);
                break;
              case 4:
                this.p.props.onTapFour && this.p.props.onTapFour(e);
                break;
              default:
            }
          }
          return 'updateState';

        case 'touchcancel':
          recentTouch();
          this.p.props.onTouchCancel && this.p.props.onTouchCancel(e);
          this.track.touches.active -= e.changedTouches.length;

          // if there are no remaining touches, then reset the touch interaction
          if (this.track.touches.active === 0) {
            resetTouchInteraction();
            return 'updateState';
          }

          // cancel tap and return whatever touchtapcancel says todo
          return this.handleTouchEvent({ type: 'touchtapcancel' });

        // cancel tap for this touch interaction
        case 'touchtapcancel':
          // clear the touchTapTimer if it's running
          this.cancelTimeout('touchTapTimer');
          if (this.track.touchDown) {
            // set the tap event to canceled
            this.track.touches.tapCanceled = true;
            if (this.p.props.touchActiveTapOnly) {
              // if touchActiveTapOnly prop, exit the touchActive state and updateState
              this.track.touchDown = false;
              return 'updateState';
            }
          }
          return 'terminate';
        default:
          return 'terminate';
      }
    }

    // called in anticipation of a click event (before it's fired) to track the source
    // of the click event (mouse, touch, key), and synthetically call node.click() if needed

  }, {
    key: 'manageClick',
    value: function manageClick(type) {
      var _this8 = this;

      // clear clickType timer if it's running
      this.cancelTimeout('clickType');

      // timer to reset the clickType,
      // when it's left to the browser to call click(), the browser has queueTime
      // to add the click event to the queue for it to be recognized as a known click event
      var setClickTypeTimer = function setClickTypeTimer() {
        _this8.manageSetTimeout('clickType', function () {
          _this8.track.clickType = 'reset';
        }, _constants.queueTime);
      };

      switch (type) {
        case 'mouseClick':
          this.track.clickType = 'mouseClick';
          // let the browser call click() for mouse interactions
          setClickTypeTimer();
          break;
        case 'tapClick':
          this.track.clickType = 'tapClick';
          // for touch interactions, use syntheticClick to call node.click() now and
          // block the subsequent click event created by the browser if there is one
          (0, _syntheticClick2.default)(this.topNode);
          this.track.clickType = 'reset';
          break;
        case 'keyClick':
          this.track.clickType = 'keyClick';
          // if the element has a known interactive role (a, button, input, etc),
          // then let the browser call click() for keyClick interactions (enter key and/or space bar)
          if (_constants.knownRoleTags[this.tagName]) {
            setClickTypeTimer();

            // if the element doesn't have a known interactive role, but there is an onClick prop,
            // then call node.click() directly as the browser won't fire a click event
            // from a keyClick interaction
          } else if (this.p.props.onClick) {
            this.topNode.click();
            this.track.clickType = 'reset';
          }
          break;
        default:
      }
    }

    // returns 'terminate' if the caller (this.handleEvent) should not call updateState(...)
    // in almost cases this will return terminate as click events don't change state,
    // the one exception is an unknown but valid click event from a touch interaction,
    // which will need to manageFocus, and then return whatever manageFocus says to do

  }, {
    key: 'handleClickEvent',
    value: function handleClickEvent(e) {
      // clear clickType timer if running
      this.cancelTimeout('clickType');
      var returnValue = 'terminate';
      // if this is an unknown click event, make some assumptions
      if (this.track.clickType === 'reset') {
        // unknown click event on a form submit input with a recentEnterKeyDown on the document
        // is considered to be a keyClick (when you press enter to submit a form
        // but focus is not on the submit button)
        var enterKeyFormSubmit = this.tagName === 'input' && this.type === 'submit' && _inputTracker2.default.key.recentEnterKeyDown;
        if (enterKeyFormSubmit) this.track.clickType = 'keyClick';else if (_inputTracker2.default.touch.recentTouch || _inputTracker2.default.touch.touchOnScreen || _constants.deviceType === 'touchOnly') {
          // if there is a recent touch on the document,
          // or this is a unknown synthetic click event on a touchOnly device
          returnValue = this.manageFocus('touchclick', e);
          this.track.keyClick = 'tapClick';
          // else this is a unknown synthetic click event on a mouseOnly or hybrid device
        } else this.track.keyClick = 'mouseClick';
      }

      // focus is not called on touch tap with links that open in a new window
      // on pages that have been navigated to with pushState (only tested react router).
      // So need to simulate a previous focus state of touch and a window blur event by
      // signing up to be notified of next window focus event.
      // Note that if navigated to www.example.tld/some-page with pushState link (e.g. RR Link)
      // then focus is not called on tap, but if do a fresh page load for www.example.tld/some-page
      // then focus is called on tap before opening the link in a new window (which is really weird).
      // Note that focus not called means the browser doesn't respect focus calls generated by RI
      // (and the browser may not generate a focus call itself, results varied by browser).
      // This is only a problem on Android Chrome because despite not calling focus on link tap,
      // upon returning to the window, focus is called on the element putting it
      // into the focusFromTab state, when it should be in the focusFromTouch state.
      if (this.p.props.target === '_blank' && this.track.clickType === 'tapClick' && !this.track.notifyOfNext.focus) {
        this.track.previousFocus = 'touch';
        this.track.notifyOfNext.focus = (0, _notifier.notifyOfNext)('focus', this.handleNotifyOfNext);
      }

      // call onClick handler and pass in clickType (mouseClick, tapClick, keyClick) as 2nd argument
      this.p.props.onClick && this.p.props.onClick(e, this.track.clickType);
      this.track.clickType = 'reset';
      return returnValue;
    }

    // returns 'terminate' if the caller (this.handleEvent) should not call updateState(...)

  }, {
    key: 'handleOtherEvent',
    value: function handleOtherEvent(e) {
      switch (e.type) {
        case 'focus':
          this.p.props.onFocus && this.p.props.onFocus(e);

          // if this instance of RI is not the focus target, then don't enter the focus state
          if (e.target !== this.topNode) return 'terminate';

          // if this is a known focusTransition or focus is false,
          // then set focus based on the type of focusTransition,
          if (this.track.focusTransition !== 'reset' || !this.track.focus) {
            var focusTransition = this.track.focusTransition.toLowerCase();
            if (/mouse/.test(focusTransition)) {
              this.track.focus = 'mouse';
            } else if (/touch/.test(focusTransition) || this.track.touchDown) {
              this.track.focus = 'touch';
            } else if (this.track.reinstateFocus) {
              this.track.focus = this.track.previousFocus;
            } else if (!/forcestate/.test(focusTransition)) {
              this.track.focus = 'tab';
            }
          }

          // if there was a timer set by a recent window focus event, clear it
          this.cancelTimeout('windowFocus');
          // only reinstate focus from window blur/focus for next focus event
          this.track.reinstateFocus = false;

          this.track.focusTransition = 'reset';
          return 'updateState';
        case 'blur':
          this.p.props.onBlur && this.p.props.onBlur(e);
          if (e.target !== this.topNode) return 'terminate';
          this.track.focusTransition = 'reset';
          this.track.previousFocus = this.track.focus;
          this.track.focus = false;
          this.track.spaceKeyDown = false;
          this.track.enterKeyDown = false;
          return 'updateState';
        case 'keydown':
          this.p.props.onKeyDown && this.p.props.onKeyDown(e);
          if (!this.track.focus) return 'terminate';
          if (e.key === ' ') this.track.spaceKeyDown = true;else if (e.key === 'Enter') {
            this.track.enterKeyDown = true;
            if (this.enterKeyTrigger) this.manageClick('keyClick');
          } else return 'terminate';
          return 'updateState';
        case 'keyup':
          this.p.props.onKeyUp && this.p.props.onKeyUp(e);
          if (!this.track.focus) return 'terminate';
          if (e.key === 'Enter') this.track.enterKeyDown = false;else if (e.key === ' ') {
            this.track.spaceKeyDown = false;
            if (this.spaceKeyTrigger) this.manageClick('keyClick');
          } else return 'terminate';
          return 'updateState';
        case 'dragstart':
          this.p.props.onDragStart && this.p.props.onDragStart(e);
          this.track.drag = true;
          return 'updateState';
        case 'dragend':
          this.p.props.onDragEnd && this.p.props.onDragEnd(e);
          this.forceTrackIState('normal');
          return 'updateState';
        default:
          return 'terminate';
      }
    }
  }, {
    key: 'computeStyle',
    value: function computeStyle() {
      // build style object, priority order: state styles, style prop, default styles
      var style = {};
      // add default styles first:
      // if focusFromTab prop provided, then reset browser focus style,
      // otherwise only reset it when focus is not from tab
      if (!this.p.props.useBrowserOutlineFocus && (this.p.props.focusFromTab || this.state.focus !== 'tab' && !_constants.nonBlurrableTags[this.tagName])) {
        style.outline = 0;
        style.outlineOffset = 0;
      }
      // if touchActive or active prop provided, then reset webkit tap highlight style
      if ((this.p.props.touchActive || this.p.props.active) && _constants.deviceHasTouch) {
        style.WebkitTapHighlightColor = 'rgba(0, 0, 0, 0)';
      }
      // set cursor to pointer if clicking does something
      var lowerAs = typeof this.p.props.as === 'string' && this.p.props.as.toLowerCase();
      if (!this.p.props.useBrowserCursor && (this.p.props.onClick || lowerAs !== 'input' && this.p.props.tabIndex && (this.p.mouseFocusStyle.style || this.p.mouseFocusStyle.className) || lowerAs === 'input' && (this.p.props.type === 'checkbox' || this.p.props.type === 'radio' || this.p.props.type === 'submit') || lowerAs === 'button' || lowerAs === 'a' || lowerAs === 'area' || lowerAs === 'select') && !this.p.props.disabled) {
        style.cursor = 'pointer';
      }

      // add style prop styles second:
      (0, _objectAssign2.default)(style, this.p.props.style);

      // add iState and focus state styles third:
      // focus has priority over iState styles unless overridden in stylePriority
      var hasPriority = this.state.iState === 'keyActive' || this.p.props.stylePriority && this.p.props.stylePriority[this.state.iState];
      var iStateStyle = this.p[this.state.iState + 'Style'].style;
      var focusStyle = this.state.focus ? this.p[this.state.focus + 'FocusStyle'].style : null;
      if (hasPriority) {
        (0, _objectAssign2.default)(style, focusStyle, iStateStyle);
      } else {
        (0, _objectAssign2.default)(style, iStateStyle, focusStyle);
      }
      return style;
    }
  }, {
    key: 'computeClassName',
    value: function computeClassName() {
      // build className string, union of class names from className prop, iState className,
      // and focus className (if in the focus state)
      return (0, _extractStyle.joinClasses)(this.p.props.className || '', this.p[this.state.iState + 'Style'].className, this.state.focus ? this.p[this.state.focus + 'FocusStyle'].className : '');
    }

    // compute children when there is an interactiveChild prop, returns the new children

  }, {
    key: 'computeChildren',
    value: function computeChildren() {
      var _this9 = this;

      // convert this.state.focus to the string focusFrom[Type] for use later
      var focusFrom = this.state.focus && 'focusFrom' + this.state.focus.charAt(0).toUpperCase() + this.state.focus.slice(1);
      // does the current iState style have priority over the focus state style
      var iStateStylePriority = this.p.props.stylePriority && this.p.props.stylePriority[this.state.iState];

      var computeChildStyle = function computeChildStyle(props) {
        var style = props.style ? _extends({}, props.style) : {};
        (0, _extractStyle.setActiveAndFocusProps)(props);
        var iStateStyle = (0, _extractStyle.extractStyle)(props, _this9.state.iState);
        var focusStyle = _this9.state.focus && (0, _extractStyle.extractStyle)(props, focusFrom);

        return {
          className: (0, _extractStyle.joinClasses)(props.className || '', iStateStyle.className, focusStyle && focusStyle.className || ''),
          style: iStateStylePriority && (0, _objectAssign2.default)(style, focusStyle.style, iStateStyle.style) || (0, _objectAssign2.default)(style, iStateStyle.style, focusStyle.style)
        };
      };

      // recurse and map children, if child is an Interactive component, then don't recurse into
      // it's children
      var recursiveMap = function recursiveMap(children) {
        return _react2.default.Children.map(children, function (child) {
          if (!_react2.default.isValidElement(child)) return child;

          // if the child should not be shown, then return null
          if (child.props.showOnParent) {
            var showOn = child.props.showOnParent.split(' ');
            if (!showOn.some(function (el) {
              return el === _this9.state.iState || /Active/.test(_this9.state.iState) && el === 'active' || _this9.state.focus && (el === focusFrom || el === 'focus');
            })) {
              return null;
            }
          }

          var childPropKeys = Object.keys(child.props);

          // if the child doesn't have any interactive child props, then return the child
          if (!childPropKeys.some(function (key) {
            return _constants.childInteractiveProps[key];
          })) {
            if (child.type === Interactive) return child;
            // if the child is not an Interactive component, then still recuse into its children
            return _react2.default.cloneElement(child, {}, recursiveMap(child.props.children));
          }

          var newChildProps = {};
          var childStyleProps = {};
          // separate child props to pass through (newChildProps), from props used
          // to compute the child's style (childStyleProps)
          childPropKeys.forEach(function (key) {
            if (!_constants.childInteractiveProps[key]) newChildProps[key] = child.props[key];else if (key !== 'showOnParent') {
              childStyleProps['' + key.slice(8).charAt(0).toLowerCase() + key.slice(9)] = child.props[key];
            }
          });

          childStyleProps.style = child.props.style;
          childStyleProps.className = child.props.className;

          var _computeChildStyle = computeChildStyle(childStyleProps),
              style = _computeChildStyle.style,
              className = _computeChildStyle.className;

          newChildProps.style = style;
          if (className) newChildProps.className = className;

          // can't use cloneElement because not possible to delete existing child prop,
          // e.g. need to delete the prop onParentHover from the child
          return _react2.default.createElement(child.type, newChildProps, child.type === Interactive ? child.props.children : recursiveMap(child.props.children));
        });
      };

      return recursiveMap(this.p.props.children);
    }
  }, {
    key: 'render',
    value: function render() {
      // props to pass down:
      // passThroughProps (includes event handlers)
      // style
      // className
      this.p.passThroughProps.style = this.computeStyle();
      var className = this.computeClassName();
      if (className) this.p.passThroughProps.className = className;

      var children = this.p.props.interactiveChild ? this.computeChildren() : this.p.props.children;

      // if `as` is a string (i.e. DOM tag name), then add the ref to props and render `as`
      if (typeof this.p.props.as === 'string') {
        this.p.passThroughProps.ref = this.refCallback;
        return _react2.default.createElement(this.p.props.as, this.p.passThroughProps, children);
      }
      // If `as` is a ReactClass or a ReactFunctionalComponent, then wrap it in a span
      // so can access the DOM node without breaking encapsulation
      return _react2.default.createElement('span', {
        ref: this.refCallback,
        style: this.p.props.wrapperStyle,
        className: this.p.props.wrapperClassName
      }, _react2.default.createElement(this.p.props.as, this.p.passThroughProps, children));
    }
  }]);

  return Interactive;
}(_react2.default.Component);

Interactive.propTypes = _propTypes.propTypes;
Interactive.defaultProps = _propTypes.defaultProps;
exports.default = Interactive;
module.exports = exports['default'];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Router__ = __webpack_require__(11);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Router__["a" /* default */]);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






/**
 * The public API for putting history on context.
 */

var Router = function (_React$Component) {
  _inherits(Router, _React$Component);

  function Router() {
    var _temp, _this, _ret;

    _classCallCheck(this, Router);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props.history.location.pathname)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Router.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends({}, this.context.router, {
        history: this.props.history,
        route: {
          location: this.props.history.location,
          match: this.state.match
        }
      })
    };
  };

  Router.prototype.computeMatch = function computeMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  Router.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        history = _props.history;


    __WEBPACK_IMPORTED_MODULE_1_invariant___default()(children == null || __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.count(children) === 1, "A <Router> may have only one child element");

    // Do this here so we can setState when a <Redirect> changes the
    // location in componentWillMount. This happens e.g. when doing
    // server rendering using a <StaticRouter>.
    this.unlisten = history.listen(function () {
      _this2.setState({
        match: _this2.computeMatch(history.location.pathname)
      });
    });
  };

  Router.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(this.props.history === nextProps.history, "You cannot change <Router history>");
  };

  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unlisten();
  };

  Router.prototype.render = function render() {
    var children = this.props.children;

    return children ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.only(children) : null;
  };

  return Router;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

Router.propTypes = {
  history: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired,
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node
};
Router.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object
};
Router.childContextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Router);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path_to_regexp__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path_to_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path_to_regexp__);


var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;

var compilePath = function compilePath(pattern, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

  if (cache[pattern]) return cache[pattern];

  var keys = [];
  var re = __WEBPACK_IMPORTED_MODULE_0_path_to_regexp___default()(pattern, keys, options);
  var compiledPattern = { re: re, keys: keys };

  if (cacheCount < cacheLimit) {
    cache[pattern] = compiledPattern;
    cacheCount++;
  }

  return compiledPattern;
};

/**
 * Public API for matching a URL pathname to a path pattern.
 */
var matchPath = function matchPath(pathname) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var parent = arguments[2];

  if (typeof options === "string") options = { path: options };

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === undefined ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === undefined ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === undefined ? false : _options$sensitive;


  if (path == null) return parent;

  var _compilePath = compilePath(path, { end: exact, strict: strict, sensitive: sensitive }),
      re = _compilePath.re,
      keys = _compilePath.keys;

  var match = re.exec(pathname);

  if (!match) return null;

  var url = match[0],
      values = match.slice(1);

  var isExact = pathname === url;

  if (exact && !isExact) return null;

  return {
    path: path, // the path pattern used to match
    url: path === "/" && url === "" ? "/" : url, // the matched portion of the URL
    isExact: isExact, // whether or not we matched exactly
    params: keys.reduce(function (memo, key, index) {
      memo[key.name] = values[index];
      return memo;
    }, {})
  };
};

/* harmony default export */ __webpack_exports__["a"] = (matchPath);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notifyOfNext = notifyOfNext;
exports.cancelNotifyOfNext = cancelNotifyOfNext;
exports.notifyOfAll = notifyOfAll;

var _constants = __webpack_require__(5);

// list of callbacks that are called every time the event fires
// only one callback function per eventType b/c notifyOfAll is only used by inputTracker
// {
//   eventType: callback,
//   eventA: cbFunctionA,
//   eventB: cbFunctionB,
// }
var notifyOfAllSubs = {};

// list of callbacks that are called only for the next event and then deleted
// {
//   eventType: [{ id, callback }, { id, callback }, ...],
//   eventA: [{ id: 1, callback: cbFunctionA }, { id: 2, callback: cbFunctionB }],
//   eventB: [{ id: 3, callback: cbFunctionC }, { id: 4, callback: cbFunctionD }],
// }
var notifyOfNextSubs = {};

// list of sub IDs with corresponding index in notifyOfNextSubs array for easy cancelation of sub
// {
//   eventType: { id: indexInNotifyOfNextSubsArray },
//   eventA: { 1: 0, 2: 1 },
//   eventB: { 3: 0, 4: 1 },
// }
var subsIDs = {};

// generate unique ID
var idPlace = 0;
function nextID(eType) {
  if (idPlace === Number.MAX_SAFE_INTEGER) idPlace = 0;
  idPlace++;
  if (subsIDs[eType][idPlace] === undefined) return idPlace;
  return nextID(eType);
}

// subscribe to notifyOfNext, returns the ID of the subscription so it can be canceled
function notifyOfNext(eType, callback) {
  var id = nextID(eType);
  subsIDs[eType][id] = notifyOfNextSubs[eType].push({ id: id, callback: callback }) - 1;
  return id;
}

// cancel an already existing subscription
var blankFunction = function blankFunction() {};
function cancelNotifyOfNext(eType, id) {
  if (subsIDs[eType][id] !== 'undefined') {
    notifyOfNextSubs[eType][subsIDs[eType][id]].callback = blankFunction;
    delete subsIDs[eType][id];
  }
}

// subscribe to notifyOfAll, only used by inputTracker
function notifyOfAll(eTypes, callback) {
  eTypes.forEach(function (eType) {
    notifyOfAllSubs[eType] = callback;
  });
}

// notify all when event comes in
function handleNotifyAll(e) {
  notifyOfAllSubs[e.type](e);
}

// notify next when event comes, if the callback returns 'reNotifyOfNext', then re-subscribe
// using the same id
function handleNotifyNext(e) {
  if (notifyOfNextSubs[e.type].length === 0) return;
  e.persist = blankFunction;
  var reNotifyOfNext = [];
  var reNotifyOfNextIDs = {};
  notifyOfNextSubs[e.type].forEach(function (sub) {
    if (sub.callback(e) === 'reNotifyOfNext') {
      reNotifyOfNextIDs[sub.id] = reNotifyOfNext.push(sub) - 1;
    }
  });
  notifyOfNextSubs[e.type] = reNotifyOfNext;
  subsIDs[e.type] = reNotifyOfNextIDs;
}

function handleNotifyAllAndNext(e) {
  handleNotifyAll(e);
  handleNotifyNext(e);
}

// setup event listeners and notification system for events
function setupEvent(element, eType, handler, capture) {
  notifyOfNextSubs[eType] = [];
  subsIDs[eType] = {};
  element.addEventListener(eType, handler, _constants.passiveEventSupport ? {
    capture: capture,
    // don't set click listener as passive because syntheticClick may call preventDefault
    passive: eType !== 'click'
  } : capture);
}

if (_constants.deviceHasTouch) {
  // set up click listener for use with syntheticClick on touch devices
  setupEvent(window, 'click', handleNotifyAll, true);

  // if the device has touch, then setup event listeners for touch events
  Object.keys(_constants.touchEvents).forEach(function (eType) {
    setupEvent(document, eType, eType === 'touchstart' ? handleNotifyAllAndNext : handleNotifyAll, true);
  });
}

// if the device has a mouse, then setup event listeners for mouse events,
// see manageNotifyOfNext and handleNotifyOfNext in index.js for more info
// on why a specific listener is set
if (_constants.deviceHasMouse) {
  Object.keys(_constants.mouseEvents).forEach(function (eType) {
    setupEvent(document, eType, eType === 'mouseenter' ? handleNotifyAllAndNext : handleNotifyAll,
    // don't use capture for enter/leave so the event only fires when the mouse leaves the doc
    !(eType === 'mouseenter' || eType === 'mouseleave'));
  });

  setupEvent(document, 'dragstart', handleNotifyNext, true);

  if (_constants.passiveEventSupport) {
    setupEvent(document, 'scroll', handleNotifyNext, true);
  }

  notifyOfNextSubs.mutation = [];
  subsIDs.mutation = {};
  var mutationEvent = (0, _constants.dummyEvent)('mutation');
  var mo = window.MutationObserver ? new MutationObserver(handleNotifyNext.bind(null, mutationEvent)) : { observe: function observe() {} };
  mo.observe(document, {
    childList: true,
    attributes: true,
    subtree: true,
    characterData: true
  });
}

// always set focus/blur listener on the window so know when leave/enter the app/window/tab
['focus', 'blur'].forEach(function (eType) {
  setupEvent(window, eType, handleNotifyNext, false);
});

// always set keydown listener for enter key events for form submission
setupEvent(document, 'keydown', handleNotifyAll, true);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history__ = __webpack_require__(6);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var isModifiedEvent = function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

/**
 * The public API for rendering a history-aware <a>.
 */

var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _temp, _this, _ret;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) _this.props.onClick(event);

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore everything but left clicks
      !_this.props.target && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();

          var history = _this.context.router.history;
          var _this$props = _this.props,
              replace = _this$props.replace,
              to = _this$props.to;


          if (replace) {
            history.replace(to);
          } else {
            history.push(to);
          }
        }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Link.prototype.render = function render() {
    var _props = this.props,
        replace = _props.replace,
        to = _props.to,
        innerRef = _props.innerRef,
        props = _objectWithoutProperties(_props, ["replace", "to", "innerRef"]); // eslint-disable-line no-unused-vars

    __WEBPACK_IMPORTED_MODULE_2_invariant___default()(this.context.router, "You should not use <Link> outside a <Router>");

    __WEBPACK_IMPORTED_MODULE_2_invariant___default()(to !== undefined, 'You must specify the "to" property');

    var history = this.context.router.history;

    var location = typeof to === "string" ? Object(__WEBPACK_IMPORTED_MODULE_3_history__["c" /* createLocation */])(to, null, null, history.location) : to;

    var href = history.createHref(location);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", _extends({}, props, { onClick: this.handleClick, href: href, ref: innerRef }));
  };

  return Link;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Link.propTypes = {
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  target: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  replace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  to: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object]).isRequired,
  innerRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func])
};
Link.defaultProps = {
  replace: false
};
Link.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
      push: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
      replace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
      createHref: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
    }).isRequired
  }).isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Link);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Route__ = __webpack_require__(16);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Route__["a" /* default */]);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__matchPath__ = __webpack_require__(12);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var isEmptyChildren = function isEmptyChildren(children) {
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.count(children) === 0;
};

/**
 * The public API for matching a single path and rendering.
 */

var Route = function (_React$Component) {
  _inherits(Route, _React$Component);

  function Route() {
    var _temp, _this, _ret;

    _classCallCheck(this, Route);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props, _this.context.router)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Route.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends({}, this.context.router, {
        route: {
          location: this.props.location || this.context.router.route.location,
          match: this.state.match
        }
      })
    };
  };

  Route.prototype.computeMatch = function computeMatch(_ref, router) {
    var computedMatch = _ref.computedMatch,
        location = _ref.location,
        path = _ref.path,
        strict = _ref.strict,
        exact = _ref.exact,
        sensitive = _ref.sensitive;

    if (computedMatch) return computedMatch; // <Switch> already computed the match for us

    __WEBPACK_IMPORTED_MODULE_1_invariant___default()(router, "You should not use <Route> or withRouter() outside a <Router>");

    var route = router.route;

    var pathname = (location || route.location).pathname;

    return Object(__WEBPACK_IMPORTED_MODULE_4__matchPath__["a" /* default */])(pathname, { path: path, strict: strict, exact: exact, sensitive: sensitive }, route.match);
  };

  Route.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(this.props.component && this.props.render), "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored");

    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(this.props.component && this.props.children && !isEmptyChildren(this.props.children)), "You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored");

    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(this.props.render && this.props.children && !isEmptyChildren(this.props.children)), "You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored");
  };

  Route.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(nextProps.location && !this.props.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(!nextProps.location && this.props.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');

    this.setState({
      match: this.computeMatch(nextProps, nextContext.router)
    });
  };

  Route.prototype.render = function render() {
    var match = this.state.match;
    var _props = this.props,
        children = _props.children,
        component = _props.component,
        render = _props.render;
    var _context$router = this.context.router,
        history = _context$router.history,
        route = _context$router.route,
        staticContext = _context$router.staticContext;

    var location = this.props.location || route.location;
    var props = { match: match, location: location, history: history, staticContext: staticContext };

    if (component) return match ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(component, props) : null;

    if (render) return match ? render(props) : null;

    if (typeof children === "function") return children(props);

    if (children && !isEmptyChildren(children)) return __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.only(children);

    return null;
  };

  return Route;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

Route.propTypes = {
  computedMatch: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object, // private, from <Switch>
  path: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
  exact: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
  strict: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
  sensitive: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
  component: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
  render: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node]),
  location: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object
};
Route.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.shape({
    history: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired,
    route: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired,
    staticContext: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object
  })
};
Route.childContextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Route);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var isarray = __webpack_require__(38)

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options))
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path_to_regexp__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path_to_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path_to_regexp__);


var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;

var compileGenerator = function compileGenerator(pattern) {
  var cacheKey = pattern;
  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

  if (cache[pattern]) return cache[pattern];

  var compiledGenerator = __WEBPACK_IMPORTED_MODULE_0_path_to_regexp___default.a.compile(pattern);

  if (cacheCount < cacheLimit) {
    cache[pattern] = compiledGenerator;
    cacheCount++;
  }

  return compiledGenerator;
};

/**
 * Public API for generating a URL pathname from a pattern and parameters.
 */
var generatePath = function generatePath() {
  var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (pattern === "/") {
    return pattern;
  }
  var generator = compileGenerator(pattern);
  return generator(params, { pretty: true });
};

/* harmony default export */ __webpack_exports__["a"] = (generatePath);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var base = exports.base = "https://raw.githubusercontent.com/survive-with-shree/techpleat/master/";
var docs = exports.docs = base + "docs/";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(22);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(7);

var _App = __webpack_require__(52);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  _reactRouterDom.BrowserRouter,
  null,
  _react2.default.createElement(_App2.default, null)
), document.getElementById('root'));

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.12.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var h=__webpack_require__(9),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113;n&&Symbol.for("react.suspense_list");
var z=n?Symbol.for("react.memo"):60115,aa=n?Symbol.for("react.lazy"):60116;n&&Symbol.for("react.fundamental");n&&Symbol.for("react.responder");n&&Symbol.for("react.scope");var A="function"===typeof Symbol&&Symbol.iterator;
function B(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D={};
function E(a,b,c){this.props=a;this.context=b;this.refs=D;this.updater=c||C}E.prototype.isReactComponent={};E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(B(85));this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,c){this.props=a;this.context=b;this.refs=D;this.updater=c||C}var H=G.prototype=new F;
H.constructor=G;h(H,E.prototype);H.isPureReactComponent=!0;var I={current:null},J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,c){var e,d={},g=null,l=null;if(null!=b)for(e in void 0!==b.ref&&(l=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,e)&&!L.hasOwnProperty(e)&&(d[e]=b[e]);var f=arguments.length-2;if(1===f)d.children=c;else if(1<f){for(var k=Array(f),m=0;m<f;m++)k[m]=arguments[m+2];d.children=k}if(a&&a.defaultProps)for(e in f=a.defaultProps,f)void 0===d[e]&&(d[e]=f[e]);return{$$typeof:p,type:a,key:g,ref:l,props:d,_owner:J.current}}
function ba(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function N(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,c,e){if(P.length){var d=P.pop();d.result=a;d.keyPrefix=b;d.func=c;d.context=e;d.count=0;return d}return{result:a,keyPrefix:b,func:c,context:e,count:0}}
function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a)}
function S(a,b,c,e){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return c(e,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var l=0;l<a.length;l++){d=a[l];var f=b+T(d,l);g+=S(d,f,c,e)}else if(null===a||"object"!==typeof a?f=null:(f=A&&a[A]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),l=
0;!(d=a.next()).done;)d=d.value,f=b+T(d,l++),g+=S(d,f,c,e);else if("object"===d)throw c=""+a,Error(B(31,"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,""));return g}function U(a,b,c){return null==a?0:S(a,"",b,c)}function T(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function ca(a,b){a.func.call(a.context,b,a.count++)}
function da(a,b,c){var e=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?V(a,e,c,function(a){return a}):null!=a&&(N(a)&&(a=ba(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+c)),e.push(a))}function V(a,b,c,e,d){var g="";null!=c&&(g=(""+c).replace(O,"$&/")+"/");b=Q(b,g,e,d);U(a,da,b);R(b)}function W(){var a=I.current;if(null===a)throw Error(B(321));return a}
var X={Children:{map:function(a,b,c){if(null==a)return a;var e=[];V(a,e,null,b,c);return e},forEach:function(a,b,c){if(null==a)return a;b=Q(null,null,b,c);U(a,ca,b);R(b)},count:function(a){return U(a,function(){return null},null)},toArray:function(a){var b=[];V(a,b,null,function(a){return a});return b},only:function(a){if(!N(a))throw Error(B(143));return a}},createRef:function(){return{current:null}},Component:E,PureComponent:G,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,
_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:x,render:a}},lazy:function(a){return{$$typeof:aa,_ctor:a,_status:-1,_result:null}},memo:function(a,b){return{$$typeof:z,type:a,compare:void 0===b?null:b}},useCallback:function(a,b){return W().useCallback(a,b)},useContext:function(a,b){return W().useContext(a,b)},useEffect:function(a,b){return W().useEffect(a,b)},useImperativeHandle:function(a,
b,c){return W().useImperativeHandle(a,b,c)},useDebugValue:function(){},useLayoutEffect:function(a,b){return W().useLayoutEffect(a,b)},useMemo:function(a,b){return W().useMemo(a,b)},useReducer:function(a,b,c){return W().useReducer(a,b,c)},useRef:function(a){return W().useRef(a)},useState:function(a){return W().useState(a)},Fragment:r,Profiler:u,StrictMode:t,Suspense:y,createElement:M,cloneElement:function(a,b,c){if(null===a||void 0===a)throw Error(B(267,a));var e=h({},a.props),d=a.key,g=a.ref,l=a._owner;
if(null!=b){void 0!==b.ref&&(g=b.ref,l=J.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var f=a.type.defaultProps;for(k in b)K.call(b,k)&&!L.hasOwnProperty(k)&&(e[k]=void 0===b[k]&&void 0!==f?f[k]:b[k])}var k=arguments.length-2;if(1===k)e.children=c;else if(1<k){f=Array(k);for(var m=0;m<k;m++)f[m]=arguments[m+2];e.children=f}return{$$typeof:p,type:a.type,key:d,ref:g,props:e,_owner:l}},createFactory:function(a){var b=M.bind(null,a);b.type=a;return b},isValidElement:N,version:"16.12.0",
__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:I,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:h}},Y={default:X},Z=Y&&X||Y;module.exports=Z.default||Z;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {
    // This branch is unreachable because this function is only called
    // in production, but the condition is true only in development.
    // Therefore if the branch is still here, dead code elimination wasn't
    // properly applied.
    // Don't change the message. React DevTools relies on it. Also make sure
    // this message doesn't occur elsewhere in this function, or it will cause
    // a false positive.
    throw new Error('^_^');
  }
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(23);
} else {
  module.exports = require('./cjs/react-dom.development.js');
}


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.12.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(0),n=__webpack_require__(9),q=__webpack_require__(24);function u(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(u(227));var ba=null,ca={};
function da(){if(ba)for(var a in ca){var b=ca[a],c=ba.indexOf(a);if(!(-1<c))throw Error(u(96,a));if(!ea[c]){if(!b.extractEvents)throw Error(u(97,a));ea[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;if(fa.hasOwnProperty(h))throw Error(u(99,h));fa[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&ha(k[e],g,h);e=!0}else f.registrationName?(ha(f.registrationName,g,h),e=!0):e=!1;if(!e)throw Error(u(98,d,a));}}}}
function ha(a,b,c){if(ia[a])throw Error(u(100,a));ia[a]=b;ja[a]=b.eventTypes[c].dependencies}var ea=[],fa={},ia={},ja={};function ka(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}var la=!1,ma=null,na=!1,oa=null,pa={onError:function(a){la=!0;ma=a}};function qa(a,b,c,d,e,f,g,h,k){la=!1;ma=null;ka.apply(pa,arguments)}
function ra(a,b,c,d,e,f,g,h,k){qa.apply(this,arguments);if(la){if(la){var l=ma;la=!1;ma=null}else throw Error(u(198));na||(na=!0,oa=l)}}var sa=null,ua=null,va=null;function wa(a,b,c){var d=a.type||"unknown-event";a.currentTarget=va(c);ra(d,b,void 0,a);a.currentTarget=null}function xa(a,b){if(null==b)throw Error(u(30));if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}
function ya(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var za=null;function Aa(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)wa(a,b[d],c[d]);else b&&wa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}function Ba(a){null!==a&&(za=xa(za,a));a=za;za=null;if(a){ya(a,Aa);if(za)throw Error(u(95));if(na)throw a=oa,na=!1,oa=null,a;}}
var Ca={injectEventPluginOrder:function(a){if(ba)throw Error(u(101));ba=Array.prototype.slice.call(a);da()},injectEventPluginsByName:function(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(!ca.hasOwnProperty(c)||ca[c]!==d){if(ca[c])throw Error(u(102,c));ca[c]=d;b=!0}}b&&da()}};
function Da(a,b){var c=a.stateNode;if(!c)return null;var d=sa(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==typeof c)throw Error(u(231,b,typeof c));
return c}var Ea=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Ea.hasOwnProperty("ReactCurrentDispatcher")||(Ea.ReactCurrentDispatcher={current:null});Ea.hasOwnProperty("ReactCurrentBatchConfig")||(Ea.ReactCurrentBatchConfig={suspense:null});
var Fa=/^(.*)[\\\/]/,w="function"===typeof Symbol&&Symbol.for,Ga=w?Symbol.for("react.element"):60103,Ha=w?Symbol.for("react.portal"):60106,Ia=w?Symbol.for("react.fragment"):60107,Ja=w?Symbol.for("react.strict_mode"):60108,Ka=w?Symbol.for("react.profiler"):60114,La=w?Symbol.for("react.provider"):60109,Ma=w?Symbol.for("react.context"):60110,Na=w?Symbol.for("react.concurrent_mode"):60111,Oa=w?Symbol.for("react.forward_ref"):60112,Pa=w?Symbol.for("react.suspense"):60113,Qa=w?Symbol.for("react.suspense_list"):
60120,Ra=w?Symbol.for("react.memo"):60115,Sa=w?Symbol.for("react.lazy"):60116;w&&Symbol.for("react.fundamental");w&&Symbol.for("react.responder");w&&Symbol.for("react.scope");var Ta="function"===typeof Symbol&&Symbol.iterator;function Ua(a){if(null===a||"object"!==typeof a)return null;a=Ta&&a[Ta]||a["@@iterator"];return"function"===typeof a?a:null}
function Va(a){if(-1===a._status){a._status=0;var b=a._ctor;b=b();a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}}
function Wa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case Ia:return"Fragment";case Ha:return"Portal";case Ka:return"Profiler";case Ja:return"StrictMode";case Pa:return"Suspense";case Qa:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Ma:return"Context.Consumer";case La:return"Context.Provider";case Oa:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":
"ForwardRef");case Ra:return Wa(a.type);case Sa:if(a=1===a._status?a._result:null)return Wa(a)}return null}function Xa(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=Wa(a.type);c=null;d&&(c=Wa(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Fa,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}
var Ya=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),Za=null,$a=null,ab=null;function bb(a){if(a=ua(a)){if("function"!==typeof Za)throw Error(u(280));var b=sa(a.stateNode);Za(a.stateNode,a.type,b)}}function cb(a){$a?ab?ab.push(a):ab=[a]:$a=a}function db(){if($a){var a=$a,b=ab;ab=$a=null;bb(a);if(b)for(a=0;a<b.length;a++)bb(b[a])}}function eb(a,b){return a(b)}function fb(a,b,c,d){return a(b,c,d)}function gb(){}
var hb=eb,ib=!1,jb=!1;function kb(){if(null!==$a||null!==ab)gb(),db()}new Map;var lb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mb=Object.prototype.hasOwnProperty,nb={},ob={};
function pb(a){if(mb.call(ob,a))return!0;if(mb.call(nb,a))return!1;if(lb.test(a))return ob[a]=!0;nb[a]=!0;return!1}function qb(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function rb(a,b,c,d){if(null===b||"undefined"===typeof b||qb(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function B(a,b,c,d,e,f){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f}var D={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D[a]=new B(a,0,!1,a,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D[b]=new B(b,1,!1,a[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D[a]=new B(a,2,!1,a.toLowerCase(),null,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D[a]=new B(a,2,!1,a,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D[a]=new B(a,3,!1,a.toLowerCase(),null,!1)});
["checked","multiple","muted","selected"].forEach(function(a){D[a]=new B(a,3,!0,a,null,!1)});["capture","download"].forEach(function(a){D[a]=new B(a,4,!1,a,null,!1)});["cols","rows","size","span"].forEach(function(a){D[a]=new B(a,6,!1,a,null,!1)});["rowSpan","start"].forEach(function(a){D[a]=new B(a,5,!1,a.toLowerCase(),null,!1)});var sb=/[\-:]([a-z])/g;function tb(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(sb,
tb);D[b]=new B(b,1,!1,a,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(sb,tb);D[b]=new B(b,1,!1,a,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(sb,tb);D[b]=new B(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!1)});
D.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!0)});function ub(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}
function vb(a,b,c,d){var e=D.hasOwnProperty(b)?D[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(rb(b,c,e,d)&&(c=null),d||null===e?pb(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
function wb(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function xb(a){var b=wb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function yb(a){a._valueTracker||(a._valueTracker=xb(a))}function zb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=wb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Ab(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function Bb(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=ub(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Cb(a,b){b=b.checked;null!=b&&vb(a,"checked",b,!1)}
function Eb(a,b){Cb(a,b);var c=ub(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Fb(a,b.type,c):b.hasOwnProperty("defaultValue")&&Fb(a,b.type,ub(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Gb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function Fb(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function Hb(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function Ib(a,b){a=n({children:void 0},b);if(b=Hb(b.children))a.children=b;return a}
function Jb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+ub(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function Kb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(u(91));return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function Lb(a,b){var c=b.value;if(null==c){c=b.defaultValue;b=b.children;if(null!=b){if(null!=c)throw Error(u(92));if(Array.isArray(b)){if(!(1>=b.length))throw Error(u(93));b=b[0]}c=b}null==c&&(c="")}a._wrapperState={initialValue:ub(c)}}
function Mb(a,b){var c=ub(b.value),d=ub(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function Nb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}var Ob={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function Pb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?Pb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var Rb,Sb=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==Ob.svg||"innerHTML"in a)a.innerHTML=b;else{Rb=Rb||document.createElement("div");Rb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=Rb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function Tb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}function Ub(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Vb={animationend:Ub("Animation","AnimationEnd"),animationiteration:Ub("Animation","AnimationIteration"),animationstart:Ub("Animation","AnimationStart"),transitionend:Ub("Transition","TransitionEnd")},Wb={},Xb={};
Ya&&(Xb=document.createElement("div").style,"AnimationEvent"in window||(delete Vb.animationend.animation,delete Vb.animationiteration.animation,delete Vb.animationstart.animation),"TransitionEvent"in window||delete Vb.transitionend.transition);function Yb(a){if(Wb[a])return Wb[a];if(!Vb[a])return a;var b=Vb[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Xb)return Wb[a]=b[c];return a}var Zb=Yb("animationend"),$b=Yb("animationiteration"),ac=Yb("animationstart"),bc=Yb("transitionend"),cc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
function ec(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.effectTag&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function fc(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function gc(a){if(ec(a)!==a)throw Error(u(188));}
function hc(a){var b=a.alternate;if(!b){b=ec(a);if(null===b)throw Error(u(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return gc(e),a;if(f===d)return gc(e),b;f=f.sibling}throw Error(u(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(u(189));}}if(c.alternate!==d)throw Error(u(190));}if(3!==c.tag)throw Error(u(188));return c.stateNode.current===c?a:b}function ic(a){a=hc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
var jc,kc,lc,mc=!1,nc=[],oc=null,pc=null,qc=null,rc=new Map,sc=new Map,tc=[],uc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),vc="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
function wc(a){var b=xc(a);uc.forEach(function(c){yc(c,a,b)});vc.forEach(function(c){yc(c,a,b)})}function zc(a,b,c,d){return{blockedOn:a,topLevelType:b,eventSystemFlags:c|32,nativeEvent:d}}function Ac(a,b){switch(a){case "focus":case "blur":oc=null;break;case "dragenter":case "dragleave":pc=null;break;case "mouseover":case "mouseout":qc=null;break;case "pointerover":case "pointerout":rc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":sc.delete(b.pointerId)}}
function Bc(a,b,c,d,e){if(null===a||a.nativeEvent!==e)return a=zc(b,c,d,e),null!==b&&(b=Cc(b),null!==b&&kc(b)),a;a.eventSystemFlags|=d;return a}function Dc(a,b,c,d){switch(b){case "focus":return oc=Bc(oc,a,b,c,d),!0;case "dragenter":return pc=Bc(pc,a,b,c,d),!0;case "mouseover":return qc=Bc(qc,a,b,c,d),!0;case "pointerover":var e=d.pointerId;rc.set(e,Bc(rc.get(e)||null,a,b,c,d));return!0;case "gotpointercapture":return e=d.pointerId,sc.set(e,Bc(sc.get(e)||null,a,b,c,d)),!0}return!1}
function Ec(a){var b=Fc(a.target);if(null!==b){var c=ec(b);if(null!==c)if(b=c.tag,13===b){if(b=fc(c),null!==b){a.blockedOn=b;q.unstable_runWithPriority(a.priority,function(){lc(c)});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}function Gc(a){if(null!==a.blockedOn)return!1;var b=Hc(a.topLevelType,a.eventSystemFlags,a.nativeEvent);if(null!==b){var c=Cc(b);null!==c&&kc(c);a.blockedOn=b;return!1}return!0}
function Ic(a,b,c){Gc(a)&&c.delete(b)}function Jc(){for(mc=!1;0<nc.length;){var a=nc[0];if(null!==a.blockedOn){a=Cc(a.blockedOn);null!==a&&jc(a);break}var b=Hc(a.topLevelType,a.eventSystemFlags,a.nativeEvent);null!==b?a.blockedOn=b:nc.shift()}null!==oc&&Gc(oc)&&(oc=null);null!==pc&&Gc(pc)&&(pc=null);null!==qc&&Gc(qc)&&(qc=null);rc.forEach(Ic);sc.forEach(Ic)}function Kc(a,b){a.blockedOn===b&&(a.blockedOn=null,mc||(mc=!0,q.unstable_scheduleCallback(q.unstable_NormalPriority,Jc)))}
function Lc(a){function b(b){return Kc(b,a)}if(0<nc.length){Kc(nc[0],a);for(var c=1;c<nc.length;c++){var d=nc[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==oc&&Kc(oc,a);null!==pc&&Kc(pc,a);null!==qc&&Kc(qc,a);rc.forEach(b);sc.forEach(b);for(c=0;c<tc.length;c++)d=tc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<tc.length&&(c=tc[0],null===c.blockedOn);)Ec(c),null===c.blockedOn&&tc.shift()}
function Mc(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function Nc(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}function Oc(a,b,c){if(b=Da(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=xa(c._dispatchListeners,b),c._dispatchInstances=xa(c._dispatchInstances,a)}
function Pc(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=Nc(b);for(b=c.length;0<b--;)Oc(c[b],"captured",a);for(b=0;b<c.length;b++)Oc(c[b],"bubbled",a)}}function Qc(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Da(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=xa(c._dispatchListeners,b),c._dispatchInstances=xa(c._dispatchInstances,a))}function Rc(a){a&&a.dispatchConfig.registrationName&&Qc(a._targetInst,null,a)}
function Sc(a){ya(a,Pc)}function Tc(){return!0}function Uc(){return!1}function E(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?Tc:Uc;this.isPropagationStopped=Uc;return this}
n(E.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=Tc)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=Tc)},persist:function(){this.isPersistent=Tc},isPersistent:Uc,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=Uc;this._dispatchInstances=this._dispatchListeners=null}});E.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
E.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;n(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=n({},d.Interface,a);c.extend=d.extend;Vc(c);return c};Vc(E);function Wc(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}
function Xc(a){if(!(a instanceof this))throw Error(u(279));a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}function Vc(a){a.eventPool=[];a.getPooled=Wc;a.release=Xc}var Yc=E.extend({animationName:null,elapsedTime:null,pseudoElement:null}),Zc=E.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),$c=E.extend({view:null,detail:null}),ad=$c.extend({relatedTarget:null});
function bd(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var cd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ed={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=ed[a])?!!b[a]:!1}function hd(){return gd}
var id=$c.extend({key:function(a){if(a.key){var b=cd[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=bd(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?dd[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:hd,charCode:function(a){return"keypress"===a.type?bd(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?bd(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),jd=0,kd=0,ld=!1,md=!1,nd=$c.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:hd,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=jd;jd=a.screenX;return ld?"mousemove"===a.type?a.screenX-
b:0:(ld=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;var b=kd;kd=a.screenY;return md?"mousemove"===a.type?a.screenY-b:0:(md=!0,0)}}),od=nd.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),pd=nd.extend({dataTransfer:null}),qd=$c.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:hd}),rd=E.extend({propertyName:null,
elapsedTime:null,pseudoElement:null}),sd=nd.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),td=[["blur","blur",0],["cancel","cancel",0],["click","click",0],["close","close",0],["contextmenu","contextMenu",0],["copy","copy",0],["cut","cut",0],["auxclick","auxClick",0],["dblclick","doubleClick",0],["dragend","dragEnd",
0],["dragstart","dragStart",0],["drop","drop",0],["focus","focus",0],["input","input",0],["invalid","invalid",0],["keydown","keyDown",0],["keypress","keyPress",0],["keyup","keyUp",0],["mousedown","mouseDown",0],["mouseup","mouseUp",0],["paste","paste",0],["pause","pause",0],["play","play",0],["pointercancel","pointerCancel",0],["pointerdown","pointerDown",0],["pointerup","pointerUp",0],["ratechange","rateChange",0],["reset","reset",0],["seeked","seeked",0],["submit","submit",0],["touchcancel","touchCancel",
0],["touchend","touchEnd",0],["touchstart","touchStart",0],["volumechange","volumeChange",0],["drag","drag",1],["dragenter","dragEnter",1],["dragexit","dragExit",1],["dragleave","dragLeave",1],["dragover","dragOver",1],["mousemove","mouseMove",1],["mouseout","mouseOut",1],["mouseover","mouseOver",1],["pointermove","pointerMove",1],["pointerout","pointerOut",1],["pointerover","pointerOver",1],["scroll","scroll",1],["toggle","toggle",1],["touchmove","touchMove",1],["wheel","wheel",1],["abort","abort",
2],[Zb,"animationEnd",2],[$b,"animationIteration",2],[ac,"animationStart",2],["canplay","canPlay",2],["canplaythrough","canPlayThrough",2],["durationchange","durationChange",2],["emptied","emptied",2],["encrypted","encrypted",2],["ended","ended",2],["error","error",2],["gotpointercapture","gotPointerCapture",2],["load","load",2],["loadeddata","loadedData",2],["loadedmetadata","loadedMetadata",2],["loadstart","loadStart",2],["lostpointercapture","lostPointerCapture",2],["playing","playing",2],["progress",
"progress",2],["seeking","seeking",2],["stalled","stalled",2],["suspend","suspend",2],["timeupdate","timeUpdate",2],[bc,"transitionEnd",2],["waiting","waiting",2]],ud={},vd={},wd=0;for(;wd<td.length;wd++){var yd=td[wd],zd=yd[0],Ad=yd[1],Bd=yd[2],Cd="on"+(Ad[0].toUpperCase()+Ad.slice(1)),Dd={phasedRegistrationNames:{bubbled:Cd,captured:Cd+"Capture"},dependencies:[zd],eventPriority:Bd};ud[Ad]=Dd;vd[zd]=Dd}
var Ed={eventTypes:ud,getEventPriority:function(a){a=vd[a];return void 0!==a?a.eventPriority:2},extractEvents:function(a,b,c,d){var e=vd[a];if(!e)return null;switch(a){case "keypress":if(0===bd(c))return null;case "keydown":case "keyup":a=id;break;case "blur":case "focus":a=ad;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=nd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
pd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=qd;break;case Zb:case $b:case ac:a=Yc;break;case bc:a=rd;break;case "scroll":a=$c;break;case "wheel":a=sd;break;case "copy":case "cut":case "paste":a=Zc;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=od;break;default:a=E}b=a.getPooled(e,b,c,d);Sc(b);return b}},Fd=q.unstable_UserBlockingPriority,
Gd=q.unstable_runWithPriority,Hd=Ed.getEventPriority,Id=10,Jd=[];
function Kd(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d=c;if(3===d.tag)d=d.stateNode.containerInfo;else{for(;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo}if(!d)break;b=c.tag;5!==b&&6!==b||a.ancestors.push(c);c=Fc(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=Mc(a.nativeEvent);d=a.topLevelType;for(var f=a.nativeEvent,g=a.eventSystemFlags,h=null,k=0;k<ea.length;k++){var l=ea[k];l&&(l=l.extractEvents(d,b,f,e,g))&&(h=xa(h,l))}Ba(h)}}
var Ld=!0;function F(a,b){Md(b,a,!1)}function Md(a,b,c){switch(Hd(b)){case 0:var d=Nd.bind(null,b,1);break;case 1:d=Od.bind(null,b,1);break;default:d=Pd.bind(null,b,1)}c?a.addEventListener(b,d,!0):a.addEventListener(b,d,!1)}function Nd(a,b,c){ib||gb();var d=Pd,e=ib;ib=!0;try{fb(d,a,b,c)}finally{(ib=e)||kb()}}function Od(a,b,c){Gd(Fd,Pd.bind(null,a,b,c))}
function Qd(a,b,c,d){if(Jd.length){var e=Jd.pop();e.topLevelType=a;e.eventSystemFlags=b;e.nativeEvent=c;e.targetInst=d;a=e}else a={topLevelType:a,eventSystemFlags:b,nativeEvent:c,targetInst:d,ancestors:[]};try{if(b=Kd,c=a,jb)b(c,void 0);else{jb=!0;try{hb(b,c,void 0)}finally{jb=!1,kb()}}}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,Jd.length<Id&&Jd.push(a)}}
function Pd(a,b,c){if(Ld)if(0<nc.length&&-1<uc.indexOf(a))a=zc(null,a,b,c),nc.push(a);else{var d=Hc(a,b,c);null===d?Ac(a,c):-1<uc.indexOf(a)?(a=zc(d,a,b,c),nc.push(a)):Dc(d,a,b,c)||(Ac(a,c),Qd(a,b,c,null))}}function Hc(a,b,c){var d=Mc(c);d=Fc(d);if(null!==d){var e=ec(d);if(null===e)d=null;else{var f=e.tag;if(13===f){d=fc(e);if(null!==d)return d;d=null}else if(3===f){if(e.stateNode.hydrate)return 3===e.tag?e.stateNode.containerInfo:null;d=null}else e!==d&&(d=null)}}Qd(a,b,c,d);return null}
function Rd(a){if(!Ya)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}var Sd=new ("function"===typeof WeakMap?WeakMap:Map);function xc(a){var b=Sd.get(a);void 0===b&&(b=new Set,Sd.set(a,b));return b}
function yc(a,b,c){if(!c.has(a)){switch(a){case "scroll":Md(b,"scroll",!0);break;case "focus":case "blur":Md(b,"focus",!0);Md(b,"blur",!0);c.add("blur");c.add("focus");break;case "cancel":case "close":Rd(a)&&Md(b,a,!0);break;case "invalid":case "submit":case "reset":break;default:-1===cc.indexOf(a)&&F(a,b)}c.add(a)}}
var Td={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ud=["Webkit","ms","Moz","O"];Object.keys(Td).forEach(function(a){Ud.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);Td[b]=Td[a]})});function Vd(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||Td.hasOwnProperty(a)&&Td[a]?(""+b).trim():b+"px"}
function Wd(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=Vd(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var Xd=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function Yd(a,b){if(b){if(Xd[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(u(137,a,""));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(u(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(u(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(u(62,""));}}
function Zd(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}function $d(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=xc(a);b=ja[b];for(var d=0;d<b.length;d++)yc(b[d],a,c)}function ae(){}
function be(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function ce(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function de(a,b){var c=ce(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=ce(c)}}
function ee(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?ee(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}function fe(){for(var a=window,b=be();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=be(a.document)}return b}
function ge(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}var he="$",ie="/$",je="$?",ke="$!",le=null,me=null;function ne(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
function oe(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var pe="function"===typeof setTimeout?setTimeout:void 0,qe="function"===typeof clearTimeout?clearTimeout:void 0;function re(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}
function se(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if(c===he||c===ke||c===je){if(0===b)return a;b--}else c===ie&&b++}a=a.previousSibling}return null}var te=Math.random().toString(36).slice(2),ue="__reactInternalInstance$"+te,ve="__reactEventHandlers$"+te,we="__reactContainere$"+te;
function Fc(a){var b=a[ue];if(b)return b;for(var c=a.parentNode;c;){if(b=c[we]||c[ue]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=se(a);null!==a;){if(c=a[ue])return c;a=se(a)}return b}a=c;c=a.parentNode}return null}function Cc(a){a=a[ue]||a[we];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function xe(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(u(33));}function ye(a){return a[ve]||null}var ze=null,Ae=null,Be=null;
function Ce(){if(Be)return Be;var a,b=Ae,c=b.length,d,e="value"in ze?ze.value:ze.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return Be=e.slice(a,1<d?1-d:void 0)}var De=E.extend({data:null}),Ee=E.extend({data:null}),Fe=[9,13,27,32],Ge=Ya&&"CompositionEvent"in window,He=null;Ya&&"documentMode"in document&&(He=document.documentMode);
var Ie=Ya&&"TextEvent"in window&&!He,Je=Ya&&(!Ge||He&&8<He&&11>=He),Ke=String.fromCharCode(32),Le={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},Me=!1;
function Ne(a,b){switch(a){case "keyup":return-1!==Fe.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function Oe(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var Pe=!1;function Qe(a,b){switch(a){case "compositionend":return Oe(b);case "keypress":if(32!==b.which)return null;Me=!0;return Ke;case "textInput":return a=b.data,a===Ke&&Me?null:a;default:return null}}
function Re(a,b){if(Pe)return"compositionend"===a||!Ge&&Ne(a,b)?(a=Ce(),Be=Ae=ze=null,Pe=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return Je&&"ko"!==b.locale?null:b.data;default:return null}}
var Se={eventTypes:Le,extractEvents:function(a,b,c,d){var e;if(Ge)b:{switch(a){case "compositionstart":var f=Le.compositionStart;break b;case "compositionend":f=Le.compositionEnd;break b;case "compositionupdate":f=Le.compositionUpdate;break b}f=void 0}else Pe?Ne(a,c)&&(f=Le.compositionEnd):"keydown"===a&&229===c.keyCode&&(f=Le.compositionStart);f?(Je&&"ko"!==c.locale&&(Pe||f!==Le.compositionStart?f===Le.compositionEnd&&Pe&&(e=Ce()):(ze=d,Ae="value"in ze?ze.value:ze.textContent,Pe=!0)),f=De.getPooled(f,
b,c,d),e?f.data=e:(e=Oe(c),null!==e&&(f.data=e)),Sc(f),e=f):e=null;(a=Ie?Qe(a,c):Re(a,c))?(b=Ee.getPooled(Le.beforeInput,b,c,d),b.data=a,Sc(b)):b=null;return null===e?b:null===b?e:[e,b]}},Te={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ue(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!Te[a.type]:"textarea"===b?!0:!1}
var Ve={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function We(a,b,c){a=E.getPooled(Ve.change,a,b,c);a.type="change";cb(c);Sc(a);return a}var Xe=null,Ye=null;function Ze(a){Ba(a)}function $e(a){var b=xe(a);if(zb(b))return a}function af(a,b){if("change"===a)return b}var bf=!1;Ya&&(bf=Rd("input")&&(!document.documentMode||9<document.documentMode));
function cf(){Xe&&(Xe.detachEvent("onpropertychange",df),Ye=Xe=null)}function df(a){if("value"===a.propertyName&&$e(Ye))if(a=We(Ye,a,Mc(a)),ib)Ba(a);else{ib=!0;try{eb(Ze,a)}finally{ib=!1,kb()}}}function ef(a,b,c){"focus"===a?(cf(),Xe=b,Ye=c,Xe.attachEvent("onpropertychange",df)):"blur"===a&&cf()}function ff(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return $e(Ye)}function gf(a,b){if("click"===a)return $e(b)}function hf(a,b){if("input"===a||"change"===a)return $e(b)}
var jf={eventTypes:Ve,_isInputEventSupported:bf,extractEvents:function(a,b,c,d){var e=b?xe(b):window,f=e.nodeName&&e.nodeName.toLowerCase();if("select"===f||"input"===f&&"file"===e.type)var g=af;else if(Ue(e))if(bf)g=hf;else{g=ff;var h=ef}else(f=e.nodeName)&&"input"===f.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(g=gf);if(g&&(g=g(a,b)))return We(g,c,d);h&&h(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Fb(e,"number",e.value)}},kf={mouseEnter:{registrationName:"onMouseEnter",
dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},lf,mf={eventTypes:kf,extractEvents:function(a,b,c,d,e){var f="mouseover"===a||"pointerover"===a,g="mouseout"===a||"pointerout"===a;if(f&&0===(e&32)&&(c.relatedTarget||c.fromElement)||!g&&!f)return null;
e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;if(g){if(g=b,b=(b=c.relatedTarget||c.toElement)?Fc(b):null,null!==b&&(f=ec(b),b!==f||5!==b.tag&&6!==b.tag))b=null}else g=null;if(g===b)return null;if("mouseout"===a||"mouseover"===a){var h=nd;var k=kf.mouseLeave;var l=kf.mouseEnter;var m="mouse"}else if("pointerout"===a||"pointerover"===a)h=od,k=kf.pointerLeave,l=kf.pointerEnter,m="pointer";a=null==g?e:xe(g);e=null==b?e:xe(b);k=h.getPooled(k,g,c,d);k.type=m+"leave";k.target=
a;k.relatedTarget=e;d=h.getPooled(l,b,c,d);d.type=m+"enter";d.target=e;d.relatedTarget=a;h=g;m=b;if(h&&m)a:{l=h;a=m;g=0;for(b=l;b;b=Nc(b))g++;b=0;for(e=a;e;e=Nc(e))b++;for(;0<g-b;)l=Nc(l),g--;for(;0<b-g;)a=Nc(a),b--;for(;g--;){if(l===a||l===a.alternate)break a;l=Nc(l);a=Nc(a)}l=null}else l=null;a=l;for(l=[];h&&h!==a;){g=h.alternate;if(null!==g&&g===a)break;l.push(h);h=Nc(h)}for(h=[];m&&m!==a;){g=m.alternate;if(null!==g&&g===a)break;h.push(m);m=Nc(m)}for(m=0;m<l.length;m++)Qc(l[m],"bubbled",k);for(m=
h.length;0<m--;)Qc(h[m],"captured",d);if(c===lf)return lf=null,[k];lf=c;return[k,d]}};function nf(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var of="function"===typeof Object.is?Object.is:nf,pf=Object.prototype.hasOwnProperty;function qf(a,b){if(of(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!pf.call(b,c[d])||!of(a[c[d]],b[c[d]]))return!1;return!0}
var rf=Ya&&"documentMode"in document&&11>=document.documentMode,sf={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},tf=null,uf=null,vf=null,wf=!1;
function xf(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(wf||null==tf||tf!==be(c))return null;c=tf;"selectionStart"in c&&ge(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return vf&&qf(vf,c)?null:(vf=c,a=E.getPooled(sf.select,uf,a,b),a.type="select",a.target=tf,Sc(a),a)}
var yf={eventTypes:sf,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=xc(e);f=ja.onSelect;for(var g=0;g<f.length;g++)if(!e.has(f[g])){e=!1;break a}e=!0}f=!e}if(f)return null;e=b?xe(b):window;switch(a){case "focus":if(Ue(e)||"true"===e.contentEditable)tf=e,uf=b,vf=null;break;case "blur":vf=uf=tf=null;break;case "mousedown":wf=!0;break;case "contextmenu":case "mouseup":case "dragend":return wf=!1,xf(c,d);case "selectionchange":if(rf)break;
case "keydown":case "keyup":return xf(c,d)}return null}};Ca.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));var zf=Cc;sa=ye;ua=zf;va=xe;Ca.injectEventPluginsByName({SimpleEventPlugin:Ed,EnterLeaveEventPlugin:mf,ChangeEventPlugin:jf,SelectEventPlugin:yf,BeforeInputEventPlugin:Se});new Set;var Af=[],Bf=-1;function G(a){0>Bf||(a.current=Af[Bf],Af[Bf]=null,Bf--)}
function I(a,b){Bf++;Af[Bf]=a.current;a.current=b}var Cf={},J={current:Cf},K={current:!1},Df=Cf;function Ef(a,b){var c=a.type.contextTypes;if(!c)return Cf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function L(a){a=a.childContextTypes;return null!==a&&void 0!==a}
function Ff(a){G(K,a);G(J,a)}function Gf(a){G(K,a);G(J,a)}function Hf(a,b,c){if(J.current!==Cf)throw Error(u(168));I(J,b,a);I(K,c,a)}function If(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(u(108,Wa(b)||"Unknown",e));return n({},c,{},d)}function Jf(a){var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||Cf;Df=J.current;I(J,b,a);I(K,K.current,a);return!0}
function Kf(a,b,c){var d=a.stateNode;if(!d)throw Error(u(169));c?(b=If(a,b,Df),d.__reactInternalMemoizedMergedChildContext=b,G(K,a),G(J,a),I(J,b,a)):G(K,a);I(K,c,a)}
var Lf=q.unstable_runWithPriority,Mf=q.unstable_scheduleCallback,Nf=q.unstable_cancelCallback,Of=q.unstable_shouldYield,Pf=q.unstable_requestPaint,Qf=q.unstable_now,Rf=q.unstable_getCurrentPriorityLevel,Sf=q.unstable_ImmediatePriority,Tf=q.unstable_UserBlockingPriority,Uf=q.unstable_NormalPriority,Vf=q.unstable_LowPriority,Wf=q.unstable_IdlePriority,Xf={},Yf=void 0!==Pf?Pf:function(){},Zf=null,$f=null,ag=!1,bg=Qf(),cg=1E4>bg?Qf:function(){return Qf()-bg};
function dg(){switch(Rf()){case Sf:return 99;case Tf:return 98;case Uf:return 97;case Vf:return 96;case Wf:return 95;default:throw Error(u(332));}}function eg(a){switch(a){case 99:return Sf;case 98:return Tf;case 97:return Uf;case 96:return Vf;case 95:return Wf;default:throw Error(u(332));}}function fg(a,b){a=eg(a);return Lf(a,b)}function gg(a,b,c){a=eg(a);return Mf(a,b,c)}function hg(a){null===Zf?(Zf=[a],$f=Mf(Sf,ig)):Zf.push(a);return Xf}function jg(){if(null!==$f){var a=$f;$f=null;Nf(a)}ig()}
function ig(){if(!ag&&null!==Zf){ag=!0;var a=0;try{var b=Zf;fg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});Zf=null}catch(c){throw null!==Zf&&(Zf=Zf.slice(a+1)),Mf(Sf,jg),c;}finally{ag=!1}}}var kg=3;function lg(a,b,c){c/=10;return 1073741821-(((1073741821-a+b/10)/c|0)+1)*c}function mg(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}var ng={current:null},og=null,pg=null,qg=null;function rg(){qg=pg=og=null}
function sg(a,b){var c=a.type._context;I(ng,c._currentValue,a);c._currentValue=b}function tg(a){var b=ng.current;G(ng,a);a.type._context._currentValue=b}function ug(a,b){for(;null!==a;){var c=a.alternate;if(a.childExpirationTime<b)a.childExpirationTime=b,null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);else if(null!==c&&c.childExpirationTime<b)c.childExpirationTime=b;else break;a=a.return}}
function vg(a,b){og=a;qg=pg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(a.expirationTime>=b&&(wg=!0),a.firstContext=null)}function xg(a,b){if(qg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)qg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===pg){if(null===og)throw Error(u(308));pg=b;og.dependencies={expirationTime:0,firstContext:b,responders:null}}else pg=pg.next=b}return a._currentValue}var yg=!1;
function zg(a){return{baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function Ag(a){return{baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
function Bg(a,b){return{expirationTime:a,suspenseConfig:b,tag:0,payload:null,callback:null,next:null,nextEffect:null}}function Cg(a,b){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b)}
function Dg(a,b){var c=a.alternate;if(null===c){var d=a.updateQueue;var e=null;null===d&&(d=a.updateQueue=zg(a.memoizedState))}else d=a.updateQueue,e=c.updateQueue,null===d?null===e?(d=a.updateQueue=zg(a.memoizedState),e=c.updateQueue=zg(c.memoizedState)):d=a.updateQueue=Ag(e):null===e&&(e=c.updateQueue=Ag(d));null===e||d===e?Cg(d,b):null===d.lastUpdate||null===e.lastUpdate?(Cg(d,b),Cg(e,b)):(Cg(d,b),e.lastUpdate=b)}
function Eg(a,b){var c=a.updateQueue;c=null===c?a.updateQueue=zg(a.memoizedState):Fg(a,c);null===c.lastCapturedUpdate?c.firstCapturedUpdate=c.lastCapturedUpdate=b:(c.lastCapturedUpdate.next=b,c.lastCapturedUpdate=b)}function Fg(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=Ag(b));return b}
function Gg(a,b,c,d,e,f){switch(c.tag){case 1:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case 3:a.effectTag=a.effectTag&-4097|64;case 0:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return n({},d,e);case 2:yg=!0}return d}
function Hg(a,b,c,d,e){yg=!1;b=Fg(a,b);for(var f=b.baseState,g=null,h=0,k=b.firstUpdate,l=f;null!==k;){var m=k.expirationTime;m<e?(null===g&&(g=k,f=l),h<m&&(h=m)):(Ig(m,k.suspenseConfig),l=Gg(a,b,k,l,c,d),null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=k:(b.lastEffect.nextEffect=k,b.lastEffect=k)));k=k.next}m=null;for(k=b.firstCapturedUpdate;null!==k;){var C=k.expirationTime;C<e?(null===m&&(m=k,null===g&&(f=l)),h<C&&(h=C)):(l=Gg(a,b,k,l,c,d),null!==
k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=k:(b.lastCapturedEffect.nextEffect=k,b.lastCapturedEffect=k)));k=k.next}null===g&&(b.lastUpdate=null);null===m?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===m&&(f=l);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=m;Jg(h);a.expirationTime=h;a.memoizedState=l}
function Kg(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);Lg(b.firstEffect,c);b.firstEffect=b.lastEffect=null;Lg(b.firstCapturedEffect,c);b.firstCapturedEffect=b.lastCapturedEffect=null}function Lg(a,b){for(;null!==a;){var c=a.callback;if(null!==c){a.callback=null;var d=b;if("function"!==typeof c)throw Error(u(191,c));c.call(d)}a=a.nextEffect}}
var Mg=Ea.ReactCurrentBatchConfig,Ng=(new aa.Component).refs;function Og(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;d=a.updateQueue;null!==d&&0===a.expirationTime&&(d.baseState=c)}
var Sg={isMounted:function(a){return(a=a._reactInternalFiber)?ec(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=Pg(),e=Mg.suspense;d=Qg(d,a,e);e=Bg(d,e);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Dg(a,e);Rg(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=Pg(),e=Mg.suspense;d=Qg(d,a,e);e=Bg(d,e);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Dg(a,e);Rg(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=Pg(),d=Mg.suspense;
c=Qg(c,a,d);d=Bg(c,d);d.tag=2;void 0!==b&&null!==b&&(d.callback=b);Dg(a,d);Rg(a,c)}};function Tg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!qf(c,d)||!qf(e,f):!0}
function Ug(a,b,c){var d=!1,e=Cf;var f=b.contextType;"object"===typeof f&&null!==f?f=xg(f):(e=L(b)?Df:J.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Ef(a,e):Cf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Sg;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Vg(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Sg.enqueueReplaceState(b,b.state,null)}
function Wg(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Ng;var f=b.contextType;"object"===typeof f&&null!==f?e.context=xg(f):(f=L(b)?Df:J.current,e.context=Ef(a,f));f=a.updateQueue;null!==f&&(Hg(a,f,c,e,d),e.state=a.memoizedState);f=b.getDerivedStateFromProps;"function"===typeof f&&(Og(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==
typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Sg.enqueueReplaceState(e,e.state,null),f=a.updateQueue,null!==f&&(Hg(a,f,c,e,d),e.state=a.memoizedState));"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var Xg=Array.isArray;
function Yg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(u(309));var d=c.stateNode}if(!d)throw Error(u(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Ng&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw Error(u(284));if(!c._owner)throw Error(u(290,a));}return a}
function Zg(a,b){if("textarea"!==a.type)throw Error(u(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,""));}
function $g(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=ah(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=bh(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props,d),d.ref=Yg(a,b,c),d.return=a,d;d=ch(c.type,c.key,c.props,null,a.mode,d);d.ref=Yg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
c.implementation)return b=dh(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=eh(c,a.mode,d,f),b.return=a,b;b=e(b,c,d);b.return=a;return b}function C(a,b,c){if("string"===typeof b||"number"===typeof b)return b=bh(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Ga:return c=ch(b.type,b.key,b.props,null,a.mode,c),c.ref=Yg(a,null,b),c.return=a,c;case Ha:return b=dh(b,a.mode,c),b.return=a,b}if(Xg(b)||
Ua(b))return b=eh(b,a.mode,c,null),b.return=a,b;Zg(a,b)}return null}function y(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Ga:return c.key===e?c.type===Ia?m(a,b,c.props.children,d,e):k(a,b,c,d):null;case Ha:return c.key===e?l(a,b,c,d):null}if(Xg(c)||Ua(c))return null!==e?null:m(a,b,c,d,null);Zg(a,c)}return null}function H(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Ga:return a=a.get(null===d.key?c:d.key)||null,d.type===Ia?m(b,a,d.props.children,e,d.key):k(b,a,d,e);case Ha:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Xg(d)||Ua(d))return a=a.get(c)||null,m(b,a,d,e,null);Zg(b,d)}return null}function z(e,g,h,k){for(var l=null,m=null,r=g,x=g=0,A=null;null!==r&&x<h.length;x++){r.index>x?(A=r,r=null):A=r.sibling;var p=y(e,r,h[x],k);if(null===p){null===r&&(r=A);break}a&&
r&&null===p.alternate&&b(e,r);g=f(p,g,x);null===m?l=p:m.sibling=p;m=p;r=A}if(x===h.length)return c(e,r),l;if(null===r){for(;x<h.length;x++)r=C(e,h[x],k),null!==r&&(g=f(r,g,x),null===m?l=r:m.sibling=r,m=r);return l}for(r=d(e,r);x<h.length;x++)A=H(r,e,x,h[x],k),null!==A&&(a&&null!==A.alternate&&r.delete(null===A.key?x:A.key),g=f(A,g,x),null===m?l=A:m.sibling=A,m=A);a&&r.forEach(function(a){return b(e,a)});return l}function ta(e,g,h,k){var l=Ua(h);if("function"!==typeof l)throw Error(u(150));h=l.call(h);
if(null==h)throw Error(u(151));for(var m=l=null,r=g,x=g=0,A=null,p=h.next();null!==r&&!p.done;x++,p=h.next()){r.index>x?(A=r,r=null):A=r.sibling;var z=y(e,r,p.value,k);if(null===z){null===r&&(r=A);break}a&&r&&null===z.alternate&&b(e,r);g=f(z,g,x);null===m?l=z:m.sibling=z;m=z;r=A}if(p.done)return c(e,r),l;if(null===r){for(;!p.done;x++,p=h.next())p=C(e,p.value,k),null!==p&&(g=f(p,g,x),null===m?l=p:m.sibling=p,m=p);return l}for(r=d(e,r);!p.done;x++,p=h.next())p=H(r,e,x,p.value,k),null!==p&&(a&&null!==
p.alternate&&r.delete(null===p.key?x:p.key),g=f(p,g,x),null===m?l=p:m.sibling=p,m=p);a&&r.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===Ia&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Ga:a:{l=f.key;for(k=d;null!==k;){if(k.key===l)if(7===k.tag?f.type===Ia:k.elementType===f.type){c(a,k.sibling);d=e(k,f.type===Ia?f.props.children:f.props,h);d.ref=Yg(a,k,f);d.return=a;a=d;break a}else{c(a,
k);break}else b(a,k);k=k.sibling}f.type===Ia?(d=eh(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=ch(f.type,f.key,f.props,null,a.mode,h),h.ref=Yg(a,d,f),h.return=a,a=h)}return g(a);case Ha:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=dh(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===
typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f,h),d.return=a,a=d):(c(a,d),d=bh(f,a.mode,h),d.return=a,a=d),g(a);if(Xg(f))return z(a,d,f,h);if(Ua(f))return ta(a,d,f,h);l&&Zg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:throw a=a.type,Error(u(152,a.displayName||a.name||"Component"));}return c(a,d)}}var fh=$g(!0),gh=$g(!1),hh={},ih={current:hh},jh={current:hh},kh={current:hh};function lh(a){if(a===hh)throw Error(u(174));return a}
function mh(a,b){I(kh,b,a);I(jh,a,a);I(ih,hh,a);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:Qb(null,"");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=Qb(b,c)}G(ih,a);I(ih,b,a)}function nh(a){G(ih,a);G(jh,a);G(kh,a)}function oh(a){lh(kh.current);var b=lh(ih.current);var c=Qb(b,a.type);b!==c&&(I(jh,a,a),I(ih,c,a))}function ph(a){jh.current===a&&(G(ih,a),G(jh,a))}var M={current:0};
function qh(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||c.data===je||c.data===ke))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.effectTag&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}function rh(a,b){return{responder:a,props:b}}
var sh=Ea.ReactCurrentDispatcher,N=Ea.ReactCurrentBatchConfig,th=0,uh=null,O=null,vh=null,wh=null,P=null,xh=null,yh=0,zh=null,Ah=0,Bh=!1,Ch=null,Gh=0;function Q(){throw Error(u(321));}function Hh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!of(a[c],b[c]))return!1;return!0}
function Ih(a,b,c,d,e,f){th=f;uh=b;vh=null!==a?a.memoizedState:null;sh.current=null===vh?Jh:Kh;b=c(d,e);if(Bh){do Bh=!1,Gh+=1,vh=null!==a?a.memoizedState:null,xh=wh,zh=P=O=null,sh.current=Kh,b=c(d,e);while(Bh);Ch=null;Gh=0}sh.current=Lh;a=uh;a.memoizedState=wh;a.expirationTime=yh;a.updateQueue=zh;a.effectTag|=Ah;a=null!==O&&null!==O.next;th=0;xh=P=wh=vh=O=uh=null;yh=0;zh=null;Ah=0;if(a)throw Error(u(300));return b}
function Mh(){sh.current=Lh;th=0;xh=P=wh=vh=O=uh=null;yh=0;zh=null;Ah=0;Bh=!1;Ch=null;Gh=0}function Nh(){var a={memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null};null===P?wh=P=a:P=P.next=a;return P}function Oh(){if(null!==xh)P=xh,xh=P.next,O=vh,vh=null!==O?O.next:null;else{if(null===vh)throw Error(u(310));O=vh;var a={memoizedState:O.memoizedState,baseState:O.baseState,queue:O.queue,baseUpdate:O.baseUpdate,next:null};P=null===P?wh=a:P.next=a;vh=O.next}return P}
function Ph(a,b){return"function"===typeof b?b(a):b}
function Qh(a){var b=Oh(),c=b.queue;if(null===c)throw Error(u(311));c.lastRenderedReducer=a;if(0<Gh){var d=c.dispatch;if(null!==Ch){var e=Ch.get(c);if(void 0!==e){Ch.delete(c);var f=b.memoizedState;do f=a(f,e.action),e=e.next;while(null!==e);of(f,b.memoizedState)||(wg=!0);b.memoizedState=f;b.baseUpdate===c.last&&(b.baseState=f);c.lastRenderedState=f;return[f,d]}}return[b.memoizedState,d]}d=c.last;var g=b.baseUpdate;f=b.baseState;null!==g?(null!==d&&(d.next=null),d=g.next):d=null!==d?d.next:null;if(null!==
d){var h=e=null,k=d,l=!1;do{var m=k.expirationTime;m<th?(l||(l=!0,h=g,e=f),m>yh&&(yh=m,Jg(yh))):(Ig(m,k.suspenseConfig),f=k.eagerReducer===a?k.eagerState:a(f,k.action));g=k;k=k.next}while(null!==k&&k!==d);l||(h=g,e=f);of(f,b.memoizedState)||(wg=!0);b.memoizedState=f;b.baseUpdate=h;b.baseState=e;c.lastRenderedState=f}return[b.memoizedState,c.dispatch]}
function Rh(a){var b=Nh();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={last:null,dispatch:null,lastRenderedReducer:Ph,lastRenderedState:a};a=a.dispatch=Sh.bind(null,uh,a);return[b.memoizedState,a]}function Th(a){return Qh(Ph,a)}function Uh(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};null===zh?(zh={lastEffect:null},zh.lastEffect=a.next=a):(b=zh.lastEffect,null===b?zh.lastEffect=a.next=a:(c=b.next,b.next=a,a.next=c,zh.lastEffect=a));return a}
function Vh(a,b,c,d){var e=Nh();Ah|=a;e.memoizedState=Uh(b,c,void 0,void 0===d?null:d)}function Wh(a,b,c,d){var e=Oh();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&Hh(d,g.deps)){Uh(0,c,f,d);return}}Ah|=a;e.memoizedState=Uh(b,c,f,d)}function Xh(a,b){return Vh(516,192,a,b)}function Yh(a,b){return Wh(516,192,a,b)}
function Zh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function $h(){}function ai(a,b){Nh().memoizedState=[a,void 0===b?null:b];return a}function bi(a,b){var c=Oh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Hh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function Sh(a,b,c){if(!(25>Gh))throw Error(u(301));var d=a.alternate;if(a===uh||null!==d&&d===uh)if(Bh=!0,a={expirationTime:th,suspenseConfig:null,action:c,eagerReducer:null,eagerState:null,next:null},null===Ch&&(Ch=new Map),c=Ch.get(b),void 0===c)Ch.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a}else{var e=Pg(),f=Mg.suspense;e=Qg(e,a,f);f={expirationTime:e,suspenseConfig:f,action:c,eagerReducer:null,eagerState:null,next:null};var g=b.last;if(null===g)f.next=f;else{var h=g.next;null!==h&&
(f.next=h);g.next=f}b.last=f;if(0===a.expirationTime&&(null===d||0===d.expirationTime)&&(d=b.lastRenderedReducer,null!==d))try{var k=b.lastRenderedState,l=d(k,c);f.eagerReducer=d;f.eagerState=l;if(of(l,k))return}catch(m){}finally{}Rg(a,e)}}
var Lh={readContext:xg,useCallback:Q,useContext:Q,useEffect:Q,useImperativeHandle:Q,useLayoutEffect:Q,useMemo:Q,useReducer:Q,useRef:Q,useState:Q,useDebugValue:Q,useResponder:Q,useDeferredValue:Q,useTransition:Q},Jh={readContext:xg,useCallback:ai,useContext:xg,useEffect:Xh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Vh(4,36,Zh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return Vh(4,36,a,b)},useMemo:function(a,b){var c=Nh();b=void 0===b?null:b;a=a();c.memoizedState=
[a,b];return a},useReducer:function(a,b,c){var d=Nh();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={last:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=Sh.bind(null,uh,a);return[d.memoizedState,a]},useRef:function(a){var b=Nh();a={current:a};return b.memoizedState=a},useState:Rh,useDebugValue:$h,useResponder:rh,useDeferredValue:function(a,b){var c=Rh(a),d=c[0],e=c[1];Xh(function(){q.unstable_next(function(){var c=N.suspense;N.suspense=void 0===b?null:b;try{e(a)}finally{N.suspense=
c}})},[a,b]);return d},useTransition:function(a){var b=Rh(!1),c=b[0],d=b[1];return[ai(function(b){d(!0);q.unstable_next(function(){var c=N.suspense;N.suspense=void 0===a?null:a;try{d(!1),b()}finally{N.suspense=c}})},[a,c]),c]}},Kh={readContext:xg,useCallback:bi,useContext:xg,useEffect:Yh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Wh(4,36,Zh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return Wh(4,36,a,b)},useMemo:function(a,b){var c=Oh();b=void 0===b?
null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Hh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a},useReducer:Qh,useRef:function(){return Oh().memoizedState},useState:Th,useDebugValue:$h,useResponder:rh,useDeferredValue:function(a,b){var c=Th(a),d=c[0],e=c[1];Yh(function(){q.unstable_next(function(){var c=N.suspense;N.suspense=void 0===b?null:b;try{e(a)}finally{N.suspense=c}})},[a,b]);return d},useTransition:function(a){var b=Th(!1),c=b[0],d=b[1];return[bi(function(b){d(!0);q.unstable_next(function(){var c=
N.suspense;N.suspense=void 0===a?null:a;try{d(!1),b()}finally{N.suspense=c}})},[a,c]),c]}},ci=null,di=null,ei=!1;function fi(a,b){var c=gi(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}
function hi(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function ii(a){if(ei){var b=di;if(b){var c=b;if(!hi(a,b)){b=re(c.nextSibling);if(!b||!hi(a,b)){a.effectTag=a.effectTag&-1025|2;ei=!1;ci=a;return}fi(ci,c)}ci=a;di=re(b.firstChild)}else a.effectTag=a.effectTag&-1025|2,ei=!1,ci=a}}function ji(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;ci=a}
function ki(a){if(a!==ci)return!1;if(!ei)return ji(a),ei=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!oe(b,a.memoizedProps))for(b=di;b;)fi(a,b),b=re(b.nextSibling);ji(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(u(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if(c===ie){if(0===b){di=re(a.nextSibling);break a}b--}else c!==he&&c!==ke&&c!==je||b++}a=a.nextSibling}di=null}}else di=ci?re(a.stateNode.nextSibling):null;return!0}
function li(){di=ci=null;ei=!1}var mi=Ea.ReactCurrentOwner,wg=!1;function R(a,b,c,d){b.child=null===a?gh(b,null,c,d):fh(b,a.child,c,d)}function ni(a,b,c,d,e){c=c.render;var f=b.ref;vg(b,e);d=Ih(a,b,c,d,f,e);if(null!==a&&!wg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),oi(a,b,e);b.effectTag|=1;R(a,b,d,e);return b.child}
function pi(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!qi(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ri(a,b,g,d,e,f);a=ch(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:qf,c(e,d)&&a.ref===b.ref))return oi(a,b,f);b.effectTag|=1;a=ah(g,d,f);a.ref=b.ref;a.return=b;return b.child=a}
function ri(a,b,c,d,e,f){return null!==a&&qf(a.memoizedProps,d)&&a.ref===b.ref&&(wg=!1,e<f)?oi(a,b,f):si(a,b,c,d,f)}function ti(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function si(a,b,c,d,e){var f=L(c)?Df:J.current;f=Ef(b,f);vg(b,e);c=Ih(a,b,c,d,f,e);if(null!==a&&!wg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),oi(a,b,e);b.effectTag|=1;R(a,b,c,e);return b.child}
function ui(a,b,c,d,e){if(L(c)){var f=!0;Jf(b)}else f=!1;vg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),Ug(b,c,d,e),Wg(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=xg(l):(l=L(c)?Df:J.current,l=Ef(b,l));var m=c.getDerivedStateFromProps,C="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;C||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Vg(b,g,d,l);yg=!1;var y=b.memoizedState;k=g.state=y;var H=b.updateQueue;null!==H&&(Hg(b,H,d,g,e),k=b.memoizedState);h!==d||y!==k||K.current||yg?("function"===typeof m&&(Og(b,c,m,d),k=b.memoizedState),(h=yg||Tg(b,c,h,d,y,k,l))?(C||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&
g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,h=b.memoizedProps,g.props=b.type===b.elementType?h:mg(b.type,h),k=g.context,l=c.contextType,"object"===typeof l&&null!==l?l=xg(l):(l=L(c)?Df:J.current,l=Ef(b,l)),m=c.getDerivedStateFromProps,(C=
"function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Vg(b,g,d,l),yg=!1,k=b.memoizedState,y=g.state=k,H=b.updateQueue,null!==H&&(Hg(b,H,d,g,e),y=b.memoizedState),h!==d||k!==y||K.current||yg?("function"===typeof m&&(Og(b,c,m,d),y=b.memoizedState),(m=yg||Tg(b,c,h,d,k,y,l))?(C||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||
("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,y,l),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,y,l)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),b.memoizedProps=
d,b.memoizedState=y),g.props=d,g.state=y,g.context=l,d=m):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),d=!1);return vi(a,b,c,d,f,e)}
function vi(a,b,c,d,e,f){ti(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Kf(b,c,!1),oi(a,b,f);d=b.stateNode;mi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=fh(b,a.child,null,f),b.child=fh(b,null,h,f)):R(a,b,h,f);b.memoizedState=d.state;e&&Kf(b,c,!0);return b.child}function wi(a){var b=a.stateNode;b.pendingContext?Hf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Hf(a,b.context,!1);mh(a,b.containerInfo)}
var xi={dehydrated:null,retryTime:0};
function yi(a,b,c){var d=b.mode,e=b.pendingProps,f=M.current,g=!1,h;(h=0!==(b.effectTag&64))||(h=0!==(f&2)&&(null===a||null!==a.memoizedState));h?(g=!0,b.effectTag&=-65):null!==a&&null===a.memoizedState||void 0===e.fallback||!0===e.unstable_avoidThisFallback||(f|=1);I(M,f&1,b);if(null===a){void 0!==e.fallback&&ii(b);if(g){g=e.fallback;e=eh(null,d,0,null);e.return=b;if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=eh(g,d,c,null);c.return=
b;e.sibling=c;b.memoizedState=xi;b.child=e;return c}d=e.children;b.memoizedState=null;return b.child=gh(b,null,d,c)}if(null!==a.memoizedState){a=a.child;d=a.sibling;if(g){e=e.fallback;c=ah(a,a.pendingProps,0);c.return=b;if(0===(b.mode&2)&&(g=null!==b.memoizedState?b.child.child:b.child,g!==a.child))for(c.child=g;null!==g;)g.return=c,g=g.sibling;d=ah(d,e,d.expirationTime);d.return=b;c.sibling=d;c.childExpirationTime=0;b.memoizedState=xi;b.child=c;return d}c=fh(b,a.child,e.children,c);b.memoizedState=
null;return b.child=c}a=a.child;if(g){g=e.fallback;e=eh(null,d,0,null);e.return=b;e.child=a;null!==a&&(a.return=e);if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=eh(g,d,c,null);c.return=b;e.sibling=c;c.effectTag|=2;e.childExpirationTime=0;b.memoizedState=xi;b.child=e;return c}b.memoizedState=null;return b.child=fh(b,a,e.children,c)}
function zi(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);ug(a.return,b)}function Ai(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,last:d,tail:c,tailExpiration:0,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.last=d,g.tail=c,g.tailExpiration=0,g.tailMode=e,g.lastEffect=f)}
function Bi(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;R(a,b,d.children,c);d=M.current;if(0!==(d&2))d=d&1|2,b.effectTag|=64;else{if(null!==a&&0!==(a.effectTag&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&zi(a,c);else if(19===a.tag)zi(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}I(M,d,b);if(0===(b.mode&2))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===qh(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);Ai(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===qh(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}Ai(b,!0,c,null,f,b.lastEffect);break;case "together":Ai(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null}return b.child}
function oi(a,b,c){null!==a&&(b.dependencies=a.dependencies);var d=b.expirationTime;0!==d&&Jg(d);if(b.childExpirationTime<c)return null;if(null!==a&&b.child!==a.child)throw Error(u(153));if(null!==b.child){a=b.child;c=ah(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=ah(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null}return b.child}function Ci(a){a.effectTag|=4}var Hi,Ii,Ji,Ki;
Hi=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Ii=function(){};
Ji=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;lh(ih.current);a=null;switch(c){case "input":f=Ab(g,f);d=Ab(g,d);a=[];break;case "option":f=Ib(g,f);d=Ib(g,d);a=[];break;case "select":f=n({},f,{value:void 0});d=n({},d,{value:void 0});a=[];break;case "textarea":f=Kb(g,f);d=Kb(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=ae)}Yd(c,d);var h,k;c=null;for(h in f)if(!d.hasOwnProperty(h)&&f.hasOwnProperty(h)&&null!=f[h])if("style"===
h)for(k in g=f[h],g)g.hasOwnProperty(k)&&(c||(c={}),c[k]="");else"dangerouslySetInnerHTML"!==h&&"children"!==h&&"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&"autoFocus"!==h&&(ia.hasOwnProperty(h)?a||(a=[]):(a=a||[]).push(h,null));for(h in d){var l=d[h];g=null!=f?f[h]:void 0;if(d.hasOwnProperty(h)&&l!==g&&(null!=l||null!=g))if("style"===h)if(g){for(k in g)!g.hasOwnProperty(k)||l&&l.hasOwnProperty(k)||(c||(c={}),c[k]="");for(k in l)l.hasOwnProperty(k)&&g[k]!==l[k]&&(c||(c={}),
c[k]=l[k])}else c||(a||(a=[]),a.push(h,c)),c=l;else"dangerouslySetInnerHTML"===h?(l=l?l.__html:void 0,g=g?g.__html:void 0,null!=l&&g!==l&&(a=a||[]).push(h,""+l)):"children"===h?g===l||"string"!==typeof l&&"number"!==typeof l||(a=a||[]).push(h,""+l):"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&(ia.hasOwnProperty(h)?(null!=l&&$d(e,h),a||g===l||(a=[])):(a=a||[]).push(h,l))}c&&(a=a||[]).push("style",c);e=a;(b.updateQueue=e)&&Ci(b)}};Ki=function(a,b,c,d){c!==d&&Ci(b)};
function Li(a,b){switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function Mi(a){switch(a.tag){case 1:L(a.type)&&Ff(a);var b=a.effectTag;return b&4096?(a.effectTag=b&-4097|64,a):null;case 3:nh(a);Gf(a);b=a.effectTag;if(0!==(b&64))throw Error(u(285));a.effectTag=b&-4097|64;return a;case 5:return ph(a),null;case 13:return G(M,a),b=a.effectTag,b&4096?(a.effectTag=b&-4097|64,a):null;case 19:return G(M,a),null;case 4:return nh(a),null;case 10:return tg(a),null;default:return null}}function Ni(a,b){return{value:a,source:b,stack:Xa(b)}}
var Oi="function"===typeof WeakSet?WeakSet:Set;function Pi(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=Xa(c));null!==c&&Wa(c.type);b=b.value;null!==a&&1===a.tag&&Wa(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function Qi(a,b){try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){Ri(a,c)}}function Si(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Ri(a,c)}else b.current=null}
function Ti(a,b){switch(b.tag){case 0:case 11:case 15:Ui(2,0,b);break;case 1:if(b.effectTag&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:mg(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}break;case 3:case 5:case 6:case 4:case 17:break;default:throw Error(u(163));}}
function Ui(a,b,c){c=c.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do{if(0!==(d.tag&a)){var e=d.destroy;d.destroy=void 0;void 0!==e&&e()}0!==(d.tag&b)&&(e=d.create,d.destroy=e());d=d.next}while(d!==c)}}
function Vi(a,b,c){"function"===typeof Wi&&Wi(b);switch(b.tag){case 0:case 11:case 14:case 15:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var d=a.next;fg(97<c?97:c,function(){var a=d;do{var c=a.destroy;if(void 0!==c){var g=b;try{c()}catch(h){Ri(g,h)}}a=a.next}while(a!==d)})}break;case 1:Si(b);c=b.stateNode;"function"===typeof c.componentWillUnmount&&Qi(b,c);break;case 5:Si(b);break;case 4:Xi(a,b,c)}}
function Yi(a){var b=a.alternate;a.return=null;a.child=null;a.memoizedState=null;a.updateQueue=null;a.dependencies=null;a.alternate=null;a.firstEffect=null;a.lastEffect=null;a.pendingProps=null;a.memoizedProps=null;null!==b&&Yi(b)}function Zi(a){return 5===a.tag||3===a.tag||4===a.tag}
function $i(a){a:{for(var b=a.return;null!==b;){if(Zi(b)){var c=b;break a}b=b.return}throw Error(u(160));}b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(u(161));}c.effectTag&16&&(Tb(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||Zi(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&2)continue b;
if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){var f=5===e.tag||6===e.tag;if(f){var g=f?e.stateNode:e.stateNode.instance;if(c)if(d){f=b;var h=g;g=c;8===f.nodeType?f.parentNode.insertBefore(h,g):f.insertBefore(h,g)}else b.insertBefore(g,c);else d?(h=b,8===h.nodeType?(f=h.parentNode,f.insertBefore(g,h)):(f=h,f.appendChild(g)),h=h._reactRootContainer,null!==h&&void 0!==h||null!==f.onclick||(f.onclick=ae)):b.appendChild(g)}else if(4!==
e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e.return||e.return===a)return;e=e.return}e.sibling.return=e.return;e=e.sibling}}
function Xi(a,b,c){for(var d=b,e=!1,f,g;;){if(!e){e=d.return;a:for(;;){if(null===e)throw Error(u(160));f=e.stateNode;switch(e.tag){case 5:g=!1;break a;case 3:f=f.containerInfo;g=!0;break a;case 4:f=f.containerInfo;g=!0;break a}e=e.return}e=!0}if(5===d.tag||6===d.tag){a:for(var h=a,k=d,l=c,m=k;;)if(Vi(h,m,l),null!==m.child&&4!==m.tag)m.child.return=m,m=m.child;else{if(m===k)break;for(;null===m.sibling;){if(null===m.return||m.return===k)break a;m=m.return}m.sibling.return=m.return;m=m.sibling}g?(h=
f,k=d.stateNode,8===h.nodeType?h.parentNode.removeChild(k):h.removeChild(k)):f.removeChild(d.stateNode)}else if(4===d.tag){if(null!==d.child){f=d.stateNode.containerInfo;g=!0;d.child.return=d;d=d.child;continue}}else if(Vi(a,d,c),null!==d.child){d.child.return=d;d=d.child;continue}if(d===b)break;for(;null===d.sibling;){if(null===d.return||d.return===b)return;d=d.return;4===d.tag&&(e=!1)}d.sibling.return=d.return;d=d.sibling}}
function aj(a,b){switch(b.tag){case 0:case 11:case 14:case 15:Ui(4,8,b);break;case 1:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[ve]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Cb(c,d);Zd(a,e);b=Zd(a,d);for(e=0;e<f.length;e+=2){var g=f[e],h=f[e+1];"style"===g?Wd(c,h):"dangerouslySetInnerHTML"===g?Sb(c,h):"children"===g?Tb(c,h):vb(c,g,h,b)}switch(a){case "input":Eb(c,d);break;case "textarea":Mb(c,
d);break;case "select":b=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,a=d.value,null!=a?Jb(c,!!d.multiple,a,!1):b!==!!d.multiple&&(null!=d.defaultValue?Jb(c,!!d.multiple,d.defaultValue,!0):Jb(c,!!d.multiple,d.multiple?[]:"",!1))}}}break;case 6:if(null===b.stateNode)throw Error(u(162));b.stateNode.nodeValue=b.memoizedProps;break;case 3:b=b.stateNode;b.hydrate&&(b.hydrate=!1,Lc(b.containerInfo));break;case 12:break;case 13:c=b;null===b.memoizedState?d=!1:(d=!0,c=b.child,bj=cg());
if(null!==c)a:for(a=c;;){if(5===a.tag)f=a.stateNode,d?(f=f.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(f=a.stateNode,e=a.memoizedProps.style,e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null,f.style.display=Vd("display",e));else if(6===a.tag)a.stateNode.nodeValue=d?"":a.memoizedProps;else if(13===a.tag&&null!==a.memoizedState&&null===a.memoizedState.dehydrated){f=a.child.sibling;f.return=a;a=f;continue}else if(null!==a.child){a.child.return=
a;a=a.child;continue}if(a===c)break a;for(;null===a.sibling;){if(null===a.return||a.return===c)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}cj(b);break;case 19:cj(b);break;case 17:break;case 20:break;case 21:break;default:throw Error(u(163));}}function cj(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Oi);b.forEach(function(b){var d=dj.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}var ej="function"===typeof WeakMap?WeakMap:Map;
function fj(a,b,c){c=Bg(c,null);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){gj||(gj=!0,hj=d);Pi(a,b)};return c}
function ij(a,b,c){c=Bg(c,null);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Pi(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===jj?jj=new Set([this]):jj.add(this),Pi(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
var kj=Math.ceil,lj=Ea.ReactCurrentDispatcher,mj=Ea.ReactCurrentOwner,S=0,nj=8,oj=16,pj=32,qj=0,rj=1,sj=2,tj=3,uj=4,vj=5,T=S,U=null,V=null,W=0,X=qj,wj=null,xj=1073741823,yj=1073741823,zj=null,Aj=0,Bj=!1,bj=0,Cj=500,Y=null,gj=!1,hj=null,jj=null,Dj=!1,Ej=null,Fj=90,Gj=null,Hj=0,Ij=null,Jj=0;function Pg(){return(T&(oj|pj))!==S?1073741821-(cg()/10|0):0!==Jj?Jj:Jj=1073741821-(cg()/10|0)}
function Qg(a,b,c){b=b.mode;if(0===(b&2))return 1073741823;var d=dg();if(0===(b&4))return 99===d?1073741823:1073741822;if((T&oj)!==S)return W;if(null!==c)a=lg(a,c.timeoutMs|0||5E3,250);else switch(d){case 99:a=1073741823;break;case 98:a=lg(a,150,100);break;case 97:case 96:a=lg(a,5E3,250);break;case 95:a=2;break;default:throw Error(u(326));}null!==U&&a===W&&--a;return a}
function Rg(a,b){if(50<Hj)throw Hj=0,Ij=null,Error(u(185));a=Kj(a,b);if(null!==a){var c=dg();1073741823===b?(T&nj)!==S&&(T&(oj|pj))===S?Lj(a):(Z(a),T===S&&jg()):Z(a);(T&4)===S||98!==c&&99!==c||(null===Gj?Gj=new Map([[a,b]]):(c=Gj.get(a),(void 0===c||c>b)&&Gj.set(a,b)))}}
function Kj(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}null!==e&&(U===e&&(Jg(b),X===uj&&Mj(e,W)),Nj(e,b));return e}
function Oj(a){var b=a.lastExpiredTime;if(0!==b)return b;b=a.firstPendingTime;if(!Pj(a,b))return b;b=a.lastPingedTime;a=a.nextKnownPendingLevel;return b>a?b:a}
function Z(a){if(0!==a.lastExpiredTime)a.callbackExpirationTime=1073741823,a.callbackPriority=99,a.callbackNode=hg(Lj.bind(null,a));else{var b=Oj(a),c=a.callbackNode;if(0===b)null!==c&&(a.callbackNode=null,a.callbackExpirationTime=0,a.callbackPriority=90);else{var d=Pg();1073741823===b?d=99:1===b||2===b?d=95:(d=10*(1073741821-b)-10*(1073741821-d),d=0>=d?99:250>=d?98:5250>=d?97:95);if(null!==c){var e=a.callbackPriority;if(a.callbackExpirationTime===b&&e>=d)return;c!==Xf&&Nf(c)}a.callbackExpirationTime=
b;a.callbackPriority=d;b=1073741823===b?hg(Lj.bind(null,a)):gg(d,Qj.bind(null,a),{timeout:10*(1073741821-b)-cg()});a.callbackNode=b}}}
function Qj(a,b){Jj=0;if(b)return b=Pg(),Rj(a,b),Z(a),null;var c=Oj(a);if(0!==c){b=a.callbackNode;if((T&(oj|pj))!==S)throw Error(u(327));Sj();a===U&&c===W||Tj(a,c);if(null!==V){var d=T;T|=oj;var e=Uj(a);do try{Vj();break}catch(h){Wj(a,h)}while(1);rg();T=d;lj.current=e;if(X===rj)throw b=wj,Tj(a,c),Mj(a,c),Z(a),b;if(null===V)switch(e=a.finishedWork=a.current.alternate,a.finishedExpirationTime=c,d=X,U=null,d){case qj:case rj:throw Error(u(345));case sj:Rj(a,2<c?2:c);break;case tj:Mj(a,c);d=a.lastSuspendedTime;
c===d&&(a.nextKnownPendingLevel=Xj(e));if(1073741823===xj&&(e=bj+Cj-cg(),10<e)){if(Bj){var f=a.lastPingedTime;if(0===f||f>=c){a.lastPingedTime=c;Tj(a,c);break}}f=Oj(a);if(0!==f&&f!==c)break;if(0!==d&&d!==c){a.lastPingedTime=d;break}a.timeoutHandle=pe(Yj.bind(null,a),e);break}Yj(a);break;case uj:Mj(a,c);d=a.lastSuspendedTime;c===d&&(a.nextKnownPendingLevel=Xj(e));if(Bj&&(e=a.lastPingedTime,0===e||e>=c)){a.lastPingedTime=c;Tj(a,c);break}e=Oj(a);if(0!==e&&e!==c)break;if(0!==d&&d!==c){a.lastPingedTime=
d;break}1073741823!==yj?d=10*(1073741821-yj)-cg():1073741823===xj?d=0:(d=10*(1073741821-xj)-5E3,e=cg(),c=10*(1073741821-c)-e,d=e-d,0>d&&(d=0),d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*kj(d/1960))-d,c<d&&(d=c));if(10<d){a.timeoutHandle=pe(Yj.bind(null,a),d);break}Yj(a);break;case vj:if(1073741823!==xj&&null!==zj){f=xj;var g=zj;d=g.busyMinDurationMs|0;0>=d?d=0:(e=g.busyDelayMs|0,f=cg()-(10*(1073741821-f)-(g.timeoutMs|0||5E3)),d=f<=e?0:e+d-f);if(10<d){Mj(a,c);a.timeoutHandle=
pe(Yj.bind(null,a),d);break}}Yj(a);break;default:throw Error(u(329));}Z(a);if(a.callbackNode===b)return Qj.bind(null,a)}}return null}
function Lj(a){var b=a.lastExpiredTime;b=0!==b?b:1073741823;if(a.finishedExpirationTime===b)Yj(a);else{if((T&(oj|pj))!==S)throw Error(u(327));Sj();a===U&&b===W||Tj(a,b);if(null!==V){var c=T;T|=oj;var d=Uj(a);do try{Zj();break}catch(e){Wj(a,e)}while(1);rg();T=c;lj.current=d;if(X===rj)throw c=wj,Tj(a,b),Mj(a,b),Z(a),c;if(null!==V)throw Error(u(261));a.finishedWork=a.current.alternate;a.finishedExpirationTime=b;U=null;Yj(a);Z(a)}}return null}
function ak(){if(null!==Gj){var a=Gj;Gj=null;a.forEach(function(a,c){Rj(c,a);Z(c)});jg()}}function bk(a,b){var c=T;T|=1;try{return a(b)}finally{T=c,T===S&&jg()}}function ck(a,b){var c=T;T&=-2;T|=nj;try{return a(b)}finally{T=c,T===S&&jg()}}
function Tj(a,b){a.finishedWork=null;a.finishedExpirationTime=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,qe(c));if(null!==V)for(c=V.return;null!==c;){var d=c;switch(d.tag){case 1:var e=d.type.childContextTypes;null!==e&&void 0!==e&&Ff(d);break;case 3:nh(d);Gf(d);break;case 5:ph(d);break;case 4:nh(d);break;case 13:G(M,d);break;case 19:G(M,d);break;case 10:tg(d)}c=c.return}U=a;V=ah(a.current,null,b);W=b;X=qj;wj=null;yj=xj=1073741823;zj=null;Aj=0;Bj=!1}
function Wj(a,b){do{try{rg();Mh();if(null===V||null===V.return)return X=rj,wj=b,null;a:{var c=a,d=V.return,e=V,f=b;b=W;e.effectTag|=2048;e.firstEffect=e.lastEffect=null;if(null!==f&&"object"===typeof f&&"function"===typeof f.then){var g=f,h=0!==(M.current&1),k=d;do{var l;if(l=13===k.tag){var m=k.memoizedState;if(null!==m)l=null!==m.dehydrated?!0:!1;else{var C=k.memoizedProps;l=void 0===C.fallback?!1:!0!==C.unstable_avoidThisFallback?!0:h?!1:!0}}if(l){var y=k.updateQueue;if(null===y){var H=new Set;
H.add(g);k.updateQueue=H}else y.add(g);if(0===(k.mode&2)){k.effectTag|=64;e.effectTag&=-2981;if(1===e.tag)if(null===e.alternate)e.tag=17;else{var z=Bg(1073741823,null);z.tag=2;Dg(e,z)}e.expirationTime=1073741823;break a}f=void 0;e=b;var ta=c.pingCache;null===ta?(ta=c.pingCache=new ej,f=new Set,ta.set(g,f)):(f=ta.get(g),void 0===f&&(f=new Set,ta.set(g,f)));if(!f.has(e)){f.add(e);var r=dk.bind(null,c,g,e);g.then(r,r)}k.effectTag|=4096;k.expirationTime=b;break a}k=k.return}while(null!==k);f=Error((Wa(e.type)||
"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+Xa(e))}X!==vj&&(X=sj);f=Ni(f,e);k=d;do{switch(k.tag){case 3:g=f;k.effectTag|=4096;k.expirationTime=b;var x=fj(k,g,b);Eg(k,x);break a;case 1:g=f;var A=k.type,p=k.stateNode;if(0===(k.effectTag&64)&&("function"===typeof A.getDerivedStateFromError||null!==p&&"function"===typeof p.componentDidCatch&&
(null===jj||!jj.has(p)))){k.effectTag|=4096;k.expirationTime=b;var t=ij(k,g,b);Eg(k,t);break a}}k=k.return}while(null!==k)}V=ek(V)}catch(v){b=v;continue}break}while(1)}function Uj(){var a=lj.current;lj.current=Lh;return null===a?Lh:a}function Ig(a,b){a<xj&&2<a&&(xj=a);null!==b&&a<yj&&2<a&&(yj=a,zj=b)}function Jg(a){a>Aj&&(Aj=a)}function Zj(){for(;null!==V;)V=fk(V)}function Vj(){for(;null!==V&&!Of();)V=fk(V)}
function fk(a){var b=gk(a.alternate,a,W);a.memoizedProps=a.pendingProps;null===b&&(b=ek(a));mj.current=null;return b}
function ek(a){V=a;do{var b=V.alternate;a=V.return;if(0===(V.effectTag&2048)){a:{var c=b;b=V;var d=W;var e=b.pendingProps;switch(b.tag){case 2:break;case 16:break;case 15:case 0:break;case 1:L(b.type)&&Ff(b);break;case 3:nh(b);Gf(b);e=b.stateNode;e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null);(null===c||null===c.child)&&ki(b)&&Ci(b);Ii(b);break;case 5:ph(b);d=lh(kh.current);var f=b.type;if(null!==c&&null!=b.stateNode)Ji(c,b,f,e,d),c.ref!==b.ref&&(b.effectTag|=128);else if(e){var g=
lh(ih.current);if(ki(b)){e=b;var h=e.stateNode;c=e.type;var k=e.memoizedProps,l=d;h[ue]=e;h[ve]=k;f=void 0;d=h;switch(c){case "iframe":case "object":case "embed":F("load",d);break;case "video":case "audio":for(h=0;h<cc.length;h++)F(cc[h],d);break;case "source":F("error",d);break;case "img":case "image":case "link":F("error",d);F("load",d);break;case "form":F("reset",d);F("submit",d);break;case "details":F("toggle",d);break;case "input":Bb(d,k);F("invalid",d);$d(l,"onChange");break;case "select":d._wrapperState=
{wasMultiple:!!k.multiple};F("invalid",d);$d(l,"onChange");break;case "textarea":Lb(d,k),F("invalid",d),$d(l,"onChange")}Yd(c,k);h=null;for(f in k)k.hasOwnProperty(f)&&(g=k[f],"children"===f?"string"===typeof g?d.textContent!==g&&(h=["children",g]):"number"===typeof g&&d.textContent!==""+g&&(h=["children",""+g]):ia.hasOwnProperty(f)&&null!=g&&$d(l,f));switch(c){case "input":yb(d);Gb(d,k,!0);break;case "textarea":yb(d);Nb(d,k);break;case "select":case "option":break;default:"function"===typeof k.onClick&&
(d.onclick=ae)}f=h;e.updateQueue=f;e=null!==f?!0:!1;e&&Ci(b)}else{c=b;l=f;k=e;h=9===d.nodeType?d:d.ownerDocument;g===Ob.html&&(g=Pb(l));g===Ob.html?"script"===l?(k=h.createElement("div"),k.innerHTML="<script>\x3c/script>",h=k.removeChild(k.firstChild)):"string"===typeof k.is?h=h.createElement(l,{is:k.is}):(h=h.createElement(l),"select"===l&&(l=h,k.multiple?l.multiple=!0:k.size&&(l.size=k.size))):h=h.createElementNS(g,l);k=h;k[ue]=c;k[ve]=e;Hi(k,b,!1,!1);b.stateNode=k;l=f;c=e;var m=d,C=Zd(l,c);switch(l){case "iframe":case "object":case "embed":F("load",
k);d=c;break;case "video":case "audio":for(d=0;d<cc.length;d++)F(cc[d],k);d=c;break;case "source":F("error",k);d=c;break;case "img":case "image":case "link":F("error",k);F("load",k);d=c;break;case "form":F("reset",k);F("submit",k);d=c;break;case "details":F("toggle",k);d=c;break;case "input":Bb(k,c);d=Ab(k,c);F("invalid",k);$d(m,"onChange");break;case "option":d=Ib(k,c);break;case "select":k._wrapperState={wasMultiple:!!c.multiple};d=n({},c,{value:void 0});F("invalid",k);$d(m,"onChange");break;case "textarea":Lb(k,
c);d=Kb(k,c);F("invalid",k);$d(m,"onChange");break;default:d=c}Yd(l,d);h=void 0;g=l;var y=k,H=d;for(h in H)if(H.hasOwnProperty(h)){var z=H[h];"style"===h?Wd(y,z):"dangerouslySetInnerHTML"===h?(z=z?z.__html:void 0,null!=z&&Sb(y,z)):"children"===h?"string"===typeof z?("textarea"!==g||""!==z)&&Tb(y,z):"number"===typeof z&&Tb(y,""+z):"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&"autoFocus"!==h&&(ia.hasOwnProperty(h)?null!=z&&$d(m,h):null!=z&&vb(y,h,z,C))}switch(l){case "input":yb(k);
Gb(k,c,!1);break;case "textarea":yb(k);Nb(k,c);break;case "option":null!=c.value&&k.setAttribute("value",""+ub(c.value));break;case "select":d=k;d.multiple=!!c.multiple;k=c.value;null!=k?Jb(d,!!c.multiple,k,!1):null!=c.defaultValue&&Jb(d,!!c.multiple,c.defaultValue,!0);break;default:"function"===typeof d.onClick&&(k.onclick=ae)}(e=ne(f,e))&&Ci(b)}null!==b.ref&&(b.effectTag|=128)}else if(null===b.stateNode)throw Error(u(166));break;case 6:if(c&&null!=b.stateNode)Ki(c,b,c.memoizedProps,e);else{if("string"!==
typeof e&&null===b.stateNode)throw Error(u(166));d=lh(kh.current);lh(ih.current);ki(b)?(e=b,f=e.stateNode,d=e.memoizedProps,f[ue]=e,(e=f.nodeValue!==d)&&Ci(b)):(f=b,e=(9===d.nodeType?d:d.ownerDocument).createTextNode(e),e[ue]=f,b.stateNode=e)}break;case 11:break;case 13:G(M,b);e=b.memoizedState;if(0!==(b.effectTag&64)){b.expirationTime=d;break a}e=null!==e;f=!1;null===c?void 0!==b.memoizedProps.fallback&&ki(b):(d=c.memoizedState,f=null!==d,e||null===d||(d=c.child.sibling,null!==d&&(k=b.firstEffect,
null!==k?(b.firstEffect=d,d.nextEffect=k):(b.firstEffect=b.lastEffect=d,d.nextEffect=null),d.effectTag=8)));if(e&&!f&&0!==(b.mode&2))if(null===c&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(M.current&1))X===qj&&(X=tj);else{if(X===qj||X===tj)X=uj;0!==Aj&&null!==U&&(Mj(U,W),Nj(U,Aj))}if(e||f)b.effectTag|=4;break;case 7:break;case 8:break;case 12:break;case 4:nh(b);Ii(b);break;case 10:tg(b);break;case 9:break;case 14:break;case 17:L(b.type)&&Ff(b);break;case 19:G(M,b);e=b.memoizedState;if(null===
e)break;f=0!==(b.effectTag&64);k=e.rendering;if(null===k)if(f)Li(e,!1);else{if(X!==qj||null!==c&&0!==(c.effectTag&64))for(c=b.child;null!==c;){k=qh(c);if(null!==k){b.effectTag|=64;Li(e,!1);f=k.updateQueue;null!==f&&(b.updateQueue=f,b.effectTag|=4);null===e.lastEffect&&(b.firstEffect=null);b.lastEffect=e.lastEffect;e=d;for(f=b.child;null!==f;)d=f,c=e,d.effectTag&=2,d.nextEffect=null,d.firstEffect=null,d.lastEffect=null,k=d.alternate,null===k?(d.childExpirationTime=0,d.expirationTime=c,d.child=null,
d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null):(d.childExpirationTime=k.childExpirationTime,d.expirationTime=k.expirationTime,d.child=k.child,d.memoizedProps=k.memoizedProps,d.memoizedState=k.memoizedState,d.updateQueue=k.updateQueue,c=k.dependencies,d.dependencies=null===c?null:{expirationTime:c.expirationTime,firstContext:c.firstContext,responders:c.responders}),f=f.sibling;I(M,M.current&1|2,b);b=b.child;break a}c=c.sibling}}else{if(!f)if(c=qh(k),null!==c){if(b.effectTag|=
64,f=!0,d=c.updateQueue,null!==d&&(b.updateQueue=d,b.effectTag|=4),Li(e,!0),null===e.tail&&"hidden"===e.tailMode&&!k.alternate){b=b.lastEffect=e.lastEffect;null!==b&&(b.nextEffect=null);break}}else cg()>e.tailExpiration&&1<d&&(b.effectTag|=64,f=!0,Li(e,!1),b.expirationTime=b.childExpirationTime=d-1);e.isBackwards?(k.sibling=b.child,b.child=k):(d=e.last,null!==d?d.sibling=k:b.child=k,e.last=k)}if(null!==e.tail){0===e.tailExpiration&&(e.tailExpiration=cg()+500);d=e.tail;e.rendering=d;e.tail=d.sibling;
e.lastEffect=b.lastEffect;d.sibling=null;e=M.current;e=f?e&1|2:e&1;I(M,e,b);b=d;break a}break;case 20:break;case 21:break;default:throw Error(u(156,b.tag));}b=null}e=V;if(1===W||1!==e.childExpirationTime){f=0;for(d=e.child;null!==d;)c=d.expirationTime,k=d.childExpirationTime,c>f&&(f=c),k>f&&(f=k),d=d.sibling;e.childExpirationTime=f}if(null!==b)return b;null!==a&&0===(a.effectTag&2048)&&(null===a.firstEffect&&(a.firstEffect=V.firstEffect),null!==V.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=
V.firstEffect),a.lastEffect=V.lastEffect),1<V.effectTag&&(null!==a.lastEffect?a.lastEffect.nextEffect=V:a.firstEffect=V,a.lastEffect=V))}else{b=Mi(V,W);if(null!==b)return b.effectTag&=2047,b;null!==a&&(a.firstEffect=a.lastEffect=null,a.effectTag|=2048)}b=V.sibling;if(null!==b)return b;V=a}while(null!==V);X===qj&&(X=vj);return null}function Xj(a){var b=a.expirationTime;a=a.childExpirationTime;return b>a?b:a}function Yj(a){var b=dg();fg(99,ik.bind(null,a,b));return null}
function ik(a,b){do Sj();while(null!==Ej);if((T&(oj|pj))!==S)throw Error(u(327));var c=a.finishedWork,d=a.finishedExpirationTime;if(null===c)return null;a.finishedWork=null;a.finishedExpirationTime=0;if(c===a.current)throw Error(u(177));a.callbackNode=null;a.callbackExpirationTime=0;a.callbackPriority=90;a.nextKnownPendingLevel=0;var e=Xj(c);a.firstPendingTime=e;d<=a.lastSuspendedTime?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:d<=a.firstSuspendedTime&&(a.firstSuspendedTime=
d-1);d<=a.lastPingedTime&&(a.lastPingedTime=0);d<=a.lastExpiredTime&&(a.lastExpiredTime=0);a===U&&(V=U=null,W=0);1<c.effectTag?null!==c.lastEffect?(c.lastEffect.nextEffect=c,e=c.firstEffect):e=c:e=c.firstEffect;if(null!==e){var f=T;T|=pj;mj.current=null;le=Ld;var g=fe();if(ge(g)){if("selectionStart"in g)var h={start:g.selectionStart,end:g.selectionEnd};else a:{h=(h=g.ownerDocument)&&h.defaultView||window;var k=h.getSelection&&h.getSelection();if(k&&0!==k.rangeCount){h=k.anchorNode;var l=k.anchorOffset,
m=k.focusNode;k=k.focusOffset;try{h.nodeType,m.nodeType}catch(Db){h=null;break a}var C=0,y=-1,H=-1,z=0,ta=0,r=g,x=null;b:for(;;){for(var A;;){r!==h||0!==l&&3!==r.nodeType||(y=C+l);r!==m||0!==k&&3!==r.nodeType||(H=C+k);3===r.nodeType&&(C+=r.nodeValue.length);if(null===(A=r.firstChild))break;x=r;r=A}for(;;){if(r===g)break b;x===h&&++z===l&&(y=C);x===m&&++ta===k&&(H=C);if(null!==(A=r.nextSibling))break;r=x;x=r.parentNode}r=A}h=-1===y||-1===H?null:{start:y,end:H}}else h=null}h=h||{start:0,end:0}}else h=
null;me={focusedElem:g,selectionRange:h};Ld=!1;Y=e;do try{jk()}catch(Db){if(null===Y)throw Error(u(330));Ri(Y,Db);Y=Y.nextEffect}while(null!==Y);Y=e;do try{for(g=a,h=b;null!==Y;){var p=Y.effectTag;p&16&&Tb(Y.stateNode,"");if(p&128){var t=Y.alternate;if(null!==t){var v=t.ref;null!==v&&("function"===typeof v?v(null):v.current=null)}}switch(p&1038){case 2:$i(Y);Y.effectTag&=-3;break;case 6:$i(Y);Y.effectTag&=-3;aj(Y.alternate,Y);break;case 1024:Y.effectTag&=-1025;break;case 1028:Y.effectTag&=-1025;aj(Y.alternate,
Y);break;case 4:aj(Y.alternate,Y);break;case 8:l=Y,Xi(g,l,h),Yi(l)}Y=Y.nextEffect}}catch(Db){if(null===Y)throw Error(u(330));Ri(Y,Db);Y=Y.nextEffect}while(null!==Y);v=me;t=fe();p=v.focusedElem;h=v.selectionRange;if(t!==p&&p&&p.ownerDocument&&ee(p.ownerDocument.documentElement,p)){null!==h&&ge(p)&&(t=h.start,v=h.end,void 0===v&&(v=t),"selectionStart"in p?(p.selectionStart=t,p.selectionEnd=Math.min(v,p.value.length)):(v=(t=p.ownerDocument||document)&&t.defaultView||window,v.getSelection&&(v=v.getSelection(),
l=p.textContent.length,g=Math.min(h.start,l),h=void 0===h.end?g:Math.min(h.end,l),!v.extend&&g>h&&(l=h,h=g,g=l),l=de(p,g),m=de(p,h),l&&m&&(1!==v.rangeCount||v.anchorNode!==l.node||v.anchorOffset!==l.offset||v.focusNode!==m.node||v.focusOffset!==m.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),v.removeAllRanges(),g>h?(v.addRange(t),v.extend(m.node,m.offset)):(t.setEnd(m.node,m.offset),v.addRange(t))))));t=[];for(v=p;v=v.parentNode;)1===v.nodeType&&t.push({element:v,left:v.scrollLeft,top:v.scrollTop});
"function"===typeof p.focus&&p.focus();for(p=0;p<t.length;p++)v=t[p],v.element.scrollLeft=v.left,v.element.scrollTop=v.top}me=null;Ld=!!le;le=null;a.current=c;Y=e;do try{for(p=d;null!==Y;){var Dh=Y.effectTag;if(Dh&36){var dc=Y.alternate;t=Y;v=p;switch(t.tag){case 0:case 11:case 15:Ui(16,32,t);break;case 1:var fd=t.stateNode;if(t.effectTag&4)if(null===dc)fd.componentDidMount();else{var hk=t.elementType===t.type?dc.memoizedProps:mg(t.type,dc.memoizedProps);fd.componentDidUpdate(hk,dc.memoizedState,
fd.__reactInternalSnapshotBeforeUpdate)}var Eh=t.updateQueue;null!==Eh&&Kg(t,Eh,fd,v);break;case 3:var Fh=t.updateQueue;if(null!==Fh){g=null;if(null!==t.child)switch(t.child.tag){case 5:g=t.child.stateNode;break;case 1:g=t.child.stateNode}Kg(t,Fh,g,v)}break;case 5:var xk=t.stateNode;null===dc&&t.effectTag&4&&ne(t.type,t.memoizedProps)&&xk.focus();break;case 6:break;case 4:break;case 12:break;case 13:if(null===t.memoizedState){var Di=t.alternate;if(null!==Di){var Ei=Di.memoizedState;if(null!==Ei){var Fi=
Ei.dehydrated;null!==Fi&&Lc(Fi)}}}break;case 19:case 17:case 20:case 21:break;default:throw Error(u(163));}}if(Dh&128){t=void 0;var xd=Y.ref;if(null!==xd){var Gi=Y.stateNode;switch(Y.tag){case 5:t=Gi;break;default:t=Gi}"function"===typeof xd?xd(t):xd.current=t}}Y=Y.nextEffect}}catch(Db){if(null===Y)throw Error(u(330));Ri(Y,Db);Y=Y.nextEffect}while(null!==Y);Y=null;Yf();T=f}else a.current=c;if(Dj)Dj=!1,Ej=a,Fj=b;else for(Y=e;null!==Y;)b=Y.nextEffect,Y.nextEffect=null,Y=b;b=a.firstPendingTime;0===b&&
(jj=null);1073741823===b?a===Ij?Hj++:(Hj=0,Ij=a):Hj=0;"function"===typeof kk&&kk(c.stateNode,d);Z(a);if(gj)throw gj=!1,a=hj,hj=null,a;if((T&nj)!==S)return null;jg();return null}function jk(){for(;null!==Y;){var a=Y.effectTag;0!==(a&256)&&Ti(Y.alternate,Y);0===(a&512)||Dj||(Dj=!0,gg(97,function(){Sj();return null}));Y=Y.nextEffect}}function Sj(){if(90!==Fj){var a=97<Fj?97:Fj;Fj=90;return fg(a,lk)}}
function lk(){if(null===Ej)return!1;var a=Ej;Ej=null;if((T&(oj|pj))!==S)throw Error(u(331));var b=T;T|=pj;for(a=a.current.firstEffect;null!==a;){try{var c=a;if(0!==(c.effectTag&512))switch(c.tag){case 0:case 11:case 15:Ui(128,0,c),Ui(0,64,c)}}catch(d){if(null===a)throw Error(u(330));Ri(a,d)}c=a.nextEffect;a.nextEffect=null;a=c}T=b;jg();return!0}function mk(a,b,c){b=Ni(c,b);b=fj(a,b,1073741823);Dg(a,b);a=Kj(a,1073741823);null!==a&&Z(a)}
function Ri(a,b){if(3===a.tag)mk(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){mk(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===jj||!jj.has(d))){a=Ni(b,a);a=ij(c,a,1073741823);Dg(c,a);c=Kj(c,1073741823);null!==c&&Z(c);break}}c=c.return}}
function dk(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);U===a&&W===c?X===uj||X===tj&&1073741823===xj&&cg()-bj<Cj?Tj(a,W):Bj=!0:Pj(a,c)&&(b=a.lastPingedTime,0!==b&&b<c||(a.lastPingedTime=c,a.finishedExpirationTime===c&&(a.finishedExpirationTime=0,a.finishedWork=null),Z(a)))}function dj(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=Pg(),b=Qg(b,a,null));a=Kj(a,b);null!==a&&Z(a)}var gk;
gk=function(a,b,c){var d=b.expirationTime;if(null!==a){var e=b.pendingProps;if(a.memoizedProps!==e||K.current)wg=!0;else{if(d<c){wg=!1;switch(b.tag){case 3:wi(b);li();break;case 5:oh(b);if(b.mode&4&&1!==c&&e.hidden)return b.expirationTime=b.childExpirationTime=1,null;break;case 1:L(b.type)&&Jf(b);break;case 4:mh(b,b.stateNode.containerInfo);break;case 10:sg(b,b.memoizedProps.value);break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;if(0!==d&&d>=c)return yi(a,b,c);I(M,M.current&
1,b);b=oi(a,b,c);return null!==b?b.sibling:null}I(M,M.current&1,b);break;case 19:d=b.childExpirationTime>=c;if(0!==(a.effectTag&64)){if(d)return Bi(a,b,c);b.effectTag|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null);I(M,M.current,b);if(!d)return null}return oi(a,b,c)}wg=!1}}else wg=!1;b.expirationTime=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=Ef(b,J.current);vg(b,c);e=Ih(null,b,d,a,e,c);b.effectTag|=1;if("object"===
typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;Mh();if(L(d)){var f=!0;Jf(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;var g=d.getDerivedStateFromProps;"function"===typeof g&&Og(b,d,g,a);e.updater=Sg;b.stateNode=e;e._reactInternalFiber=b;Wg(b,d,a,c);b=vi(null,b,d,!0,f,c)}else b.tag=0,R(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;Va(e);if(1!==e._status)throw e._result;
e=e._result;b.type=e;f=b.tag=nk(e);a=mg(e,a);switch(f){case 0:b=si(null,b,e,a,c);break;case 1:b=ui(null,b,e,a,c);break;case 11:b=ni(null,b,e,a,c);break;case 14:b=pi(null,b,e,mg(e.type,a),d,c);break;default:throw Error(u(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:mg(d,e),si(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:mg(d,e),ui(a,b,d,e,c);case 3:wi(b);d=b.updateQueue;if(null===d)throw Error(u(282));e=b.memoizedState;e=null!==e?e.element:
null;Hg(b,d,b.pendingProps,null,c);d=b.memoizedState.element;if(d===e)li(),b=oi(a,b,c);else{if(e=b.stateNode.hydrate)di=re(b.stateNode.containerInfo.firstChild),ci=b,e=ei=!0;if(e)for(c=gh(b,null,d,c),b.child=c;c;)c.effectTag=c.effectTag&-3|1024,c=c.sibling;else R(a,b,d,c),li();b=b.child}return b;case 5:return oh(b),null===a&&ii(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,oe(d,e)?g=null:null!==f&&oe(d,f)&&(b.effectTag|=16),ti(a,b),b.mode&4&&1!==c&&e.hidden?(b.expirationTime=
b.childExpirationTime=1,b=null):(R(a,b,g,c),b=b.child),b;case 6:return null===a&&ii(b),null;case 13:return yi(a,b,c);case 4:return mh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=fh(b,null,d,c):R(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:mg(d,e),ni(a,b,d,e,c);case 7:return R(a,b,b.pendingProps,c),b.child;case 8:return R(a,b,b.pendingProps.children,c),b.child;case 12:return R(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;
e=b.pendingProps;g=b.memoizedProps;f=e.value;sg(b,f);if(null!==g){var h=g.value;f=of(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0;if(0===f){if(g.children===e.children&&!K.current){b=oi(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==k){g=h.child;for(var l=k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=Bg(c,null),l.tag=2,Dg(h,l));h.expirationTime<c&&(h.expirationTime=
c);l=h.alternate;null!==l&&l.expirationTime<c&&(l.expirationTime=c);ug(h.return,c);k.expirationTime<c&&(k.expirationTime=c);break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=g}}R(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,vg(b,c),e=xg(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,R(a,b,d,c),b.child;
case 14:return e=b.type,f=mg(e,b.pendingProps),f=mg(e.type,f),pi(a,b,e,f,d,c);case 15:return ri(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:mg(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,L(d)?(a=!0,Jf(b)):a=!1,vg(b,c),Ug(b,d,e,c),Wg(b,d,e,c),vi(null,b,d,!0,a,c);case 19:return Bi(a,b,c)}throw Error(u(156,b.tag));};var kk=null,Wi=null;
function ok(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);kk=function(a){try{b.onCommitFiberRoot(c,a,void 0,64===(a.current.effectTag&64))}catch(e){}};Wi=function(a){try{b.onCommitFiberUnmount(c,a)}catch(e){}}}catch(d){}return!0}
function pk(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function gi(a,b,c,d){return new pk(a,b,c,d)}
function qi(a){a=a.prototype;return!(!a||!a.isReactComponent)}function nk(a){if("function"===typeof a)return qi(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Oa)return 11;if(a===Ra)return 14}return 2}
function ah(a,b){var c=a.alternate;null===c?(c=gi(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{expirationTime:b.expirationTime,
firstContext:b.firstContext,responders:b.responders};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function ch(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)qi(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case Ia:return eh(c.children,e,f,b);case Na:g=8;e|=7;break;case Ja:g=8;e|=1;break;case Ka:return a=gi(12,c,b,e|8),a.elementType=Ka,a.type=Ka,a.expirationTime=f,a;case Pa:return a=gi(13,c,b,e),a.type=Pa,a.elementType=Pa,a.expirationTime=f,a;case Qa:return a=gi(19,c,b,e),a.elementType=Qa,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case La:g=
10;break a;case Ma:g=9;break a;case Oa:g=11;break a;case Ra:g=14;break a;case Sa:g=16;d=null;break a}throw Error(u(130,null==a?a:typeof a,""));}b=gi(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function eh(a,b,c,d){a=gi(7,a,d,b);a.expirationTime=c;return a}function bh(a,b,c){a=gi(6,a,null,b);a.expirationTime=c;return a}
function dh(a,b,c){b=gi(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function qk(a,b,c){this.tag=b;this.current=null;this.containerInfo=a;this.pingCache=this.pendingChildren=null;this.finishedExpirationTime=0;this.finishedWork=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=90;this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}
function Pj(a,b){var c=a.firstSuspendedTime;a=a.lastSuspendedTime;return 0!==c&&c>=b&&a<=b}function Mj(a,b){var c=a.firstSuspendedTime,d=a.lastSuspendedTime;c<b&&(a.firstSuspendedTime=b);if(d>b||0===c)a.lastSuspendedTime=b;b<=a.lastPingedTime&&(a.lastPingedTime=0);b<=a.lastExpiredTime&&(a.lastExpiredTime=0)}
function Nj(a,b){b>a.firstPendingTime&&(a.firstPendingTime=b);var c=a.firstSuspendedTime;0!==c&&(b>=c?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:b>=a.lastSuspendedTime&&(a.lastSuspendedTime=b+1),b>a.nextKnownPendingLevel&&(a.nextKnownPendingLevel=b))}function Rj(a,b){var c=a.lastExpiredTime;if(0===c||c>b)a.lastExpiredTime=b}
function rk(a,b,c,d){var e=b.current,f=Pg(),g=Mg.suspense;f=Qg(f,e,g);a:if(c){c=c._reactInternalFiber;b:{if(ec(c)!==c||1!==c.tag)throw Error(u(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(L(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw Error(u(171));}if(1===c.tag){var k=c.type;if(L(k)){c=If(c,k,h);break a}}c=h}else c=Cf;null===b.context?b.context=c:b.pendingContext=c;b=Bg(f,g);b.payload={element:a};d=void 0===
d?null:d;null!==d&&(b.callback=d);Dg(e,b);Rg(e,f);return f}function sk(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function tk(a,b){a=a.memoizedState;null!==a&&null!==a.dehydrated&&a.retryTime<b&&(a.retryTime=b)}function uk(a,b){tk(a,b);(a=a.alternate)&&tk(a,b)}
function vk(a,b,c){c=null!=c&&!0===c.hydrate;var d=new qk(a,b,c),e=gi(3,null,null,2===b?7:1===b?3:0);d.current=e;e.stateNode=d;a[we]=d.current;c&&0!==b&&wc(9===a.nodeType?a:a.ownerDocument);this._internalRoot=d}vk.prototype.render=function(a,b){rk(a,this._internalRoot,null,void 0===b?null:b)};vk.prototype.unmount=function(a){var b=this._internalRoot,c=void 0===a?null:a,d=b.containerInfo;rk(null,b,null,function(){d[we]=null;null!==c&&c()})};
function wk(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function yk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new vk(a,0,b?{hydrate:!0}:void 0)}
function zk(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=sk(g);h.call(a)}}rk(b,g,a,e)}else{f=c._reactRootContainer=yk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=sk(g);k.call(a)}}ck(function(){rk(b,g,a,e)})}return sk(g)}function Ak(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:Ha,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
jc=function(a){if(13===a.tag){var b=lg(Pg(),150,100);Rg(a,b);uk(a,b)}};kc=function(a){if(13===a.tag){Pg();var b=kg++;Rg(a,b);uk(a,b)}};lc=function(a){if(13===a.tag){var b=Pg();b=Qg(b,a,null);Rg(a,b);uk(a,b)}};
Za=function(a,b,c){switch(b){case "input":Eb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=ye(d);if(!e)throw Error(u(90));zb(d);Eb(d,e)}}}break;case "textarea":Mb(a,c);break;case "select":b=c.value,null!=b&&Jb(a,!!c.multiple,b,!1)}};eb=bk;
fb=function(a,b,c,d){var e=T;T|=4;try{return fg(98,a.bind(null,b,c,d))}finally{T=e,T===S&&jg()}};gb=function(){(T&(1|oj|pj))===S&&(ak(),Sj())};hb=function(a,b){var c=T;T|=2;try{return a(b)}finally{T=c,T===S&&jg()}};function Bk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!wk(b))throw Error(u(200));return Ak(a,b,null,c)}
var Ck={createPortal:Bk,findDOMNode:function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;if(void 0===b){if("function"===typeof a.render)throw Error(u(188));throw Error(u(268,Object.keys(a)));}a=ic(b);a=null===a?null:a.stateNode;return a},hydrate:function(a,b,c){if(!wk(b))throw Error(u(200));return zk(null,a,b,!0,c)},render:function(a,b,c){if(!wk(b))throw Error(u(200));return zk(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){if(!wk(c))throw Error(u(200));
if(null==a||void 0===a._reactInternalFiber)throw Error(u(38));return zk(a,b,c,!1,d)},unmountComponentAtNode:function(a){if(!wk(a))throw Error(u(40));return a._reactRootContainer?(ck(function(){zk(null,null,a,!1,function(){a._reactRootContainer=null;a[we]=null})}),!0):!1},unstable_createPortal:function(){return Bk.apply(void 0,arguments)},unstable_batchedUpdates:bk,flushSync:function(a,b){if((T&(oj|pj))!==S)throw Error(u(187));var c=T;T|=1;try{return fg(99,a.bind(null,b))}finally{T=c,jg()}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[Cc,
xe,ye,Ca.injectEventPluginsByName,fa,Sc,function(a){ya(a,Rc)},cb,db,Pd,Ba,Sj,{current:!1}]}};
(function(a){var b=a.findFiberByHostInstance;return ok(n({},a,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ea.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=ic(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:Fc,bundleType:0,version:"16.12.0",
rendererPackageName:"react-dom"});var Dk={default:Ck},Ek=Dk&&Ck||Dk;module.exports=Ek.default||Ek;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(25);
} else {
  module.exports = require('./cjs/scheduler.development.js');
}


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v0.18.0
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});var f,g,h,k,l;
if("undefined"===typeof window||"function"!==typeof MessageChannel){var p=null,q=null,t=function(){if(null!==p)try{var a=exports.unstable_now();p(!0,a);p=null}catch(b){throw setTimeout(t,0),b;}},u=Date.now();exports.unstable_now=function(){return Date.now()-u};f=function(a){null!==p?setTimeout(f,0,a):(p=a,setTimeout(t,0))};g=function(a,b){q=setTimeout(a,b)};h=function(){clearTimeout(q)};k=function(){return!1};l=exports.unstable_forceFrameRate=function(){}}else{var w=window.performance,x=window.Date,
y=window.setTimeout,z=window.clearTimeout;if("undefined"!==typeof console){var A=window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");"function"!==typeof A&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"===
typeof w&&"function"===typeof w.now)exports.unstable_now=function(){return w.now()};else{var B=x.now();exports.unstable_now=function(){return x.now()-B}}var C=!1,D=null,E=-1,F=5,G=0;k=function(){return exports.unstable_now()>=G};l=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):F=0<a?Math.floor(1E3/a):5};var H=new MessageChannel,I=H.port2;H.port1.onmessage=
function(){if(null!==D){var a=exports.unstable_now();G=a+F;try{D(!0,a)?I.postMessage(null):(C=!1,D=null)}catch(b){throw I.postMessage(null),b;}}else C=!1};f=function(a){D=a;C||(C=!0,I.postMessage(null))};g=function(a,b){E=y(function(){a(exports.unstable_now())},b)};h=function(){z(E);E=-1}}function J(a,b){var c=a.length;a.push(b);a:for(;;){var d=Math.floor((c-1)/2),e=a[d];if(void 0!==e&&0<K(e,b))a[d]=b,a[c]=e,c=d;else break a}}function L(a){a=a[0];return void 0===a?null:a}
function M(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>K(n,c))void 0!==r&&0>K(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>K(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function K(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var N=[],O=[],P=1,Q=null,R=3,S=!1,T=!1,U=!1;
function V(a){for(var b=L(O);null!==b;){if(null===b.callback)M(O);else if(b.startTime<=a)M(O),b.sortIndex=b.expirationTime,J(N,b);else break;b=L(O)}}function W(a){U=!1;V(a);if(!T)if(null!==L(N))T=!0,f(X);else{var b=L(O);null!==b&&g(W,b.startTime-a)}}
function X(a,b){T=!1;U&&(U=!1,h());S=!0;var c=R;try{V(b);for(Q=L(N);null!==Q&&(!(Q.expirationTime>b)||a&&!k());){var d=Q.callback;if(null!==d){Q.callback=null;R=Q.priorityLevel;var e=d(Q.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?Q.callback=e:Q===L(N)&&M(N);V(b)}else M(N);Q=L(N)}if(null!==Q)var m=!0;else{var n=L(O);null!==n&&g(W,n.startTime-b);m=!1}return m}finally{Q=null,R=c,S=!1}}
function Y(a){switch(a){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1E4;default:return 5E3}}var Z=l;exports.unstable_ImmediatePriority=1;exports.unstable_UserBlockingPriority=2;exports.unstable_NormalPriority=3;exports.unstable_IdlePriority=5;exports.unstable_LowPriority=4;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=R;R=a;try{return b()}finally{R=c}};
exports.unstable_next=function(a){switch(R){case 1:case 2:case 3:var b=3;break;default:b=R}var c=R;R=b;try{return a()}finally{R=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();if("object"===typeof c&&null!==c){var e=c.delay;e="number"===typeof e&&0<e?d+e:d;c="number"===typeof c.timeout?c.timeout:Y(a)}else c=Y(a),e=d;c=e+c;a={id:P++,callback:b,priorityLevel:a,startTime:e,expirationTime:c,sortIndex:-1};e>d?(a.sortIndex=e,J(O,a),null===L(N)&&a===L(O)&&(U?h():U=!0,g(W,e-d))):(a.sortIndex=c,J(N,a),T||S||(T=!0,f(X)));return a};exports.unstable_cancelCallback=function(a){a.callback=null};
exports.unstable_wrapCallback=function(a){var b=R;return function(){var c=R;R=b;try{return a.apply(this,arguments)}finally{R=c}}};exports.unstable_getCurrentPriorityLevel=function(){return R};exports.unstable_shouldYield=function(){var a=exports.unstable_now();V(a);var b=L(N);return b!==Q&&null!==Q&&null!==b&&null!==b.callback&&b.startTime<=a&&b.expirationTime<Q.expirationTime||k()};exports.unstable_requestPaint=Z;exports.unstable_continueExecution=function(){T||S||(T=!0,f(X))};
exports.unstable_pauseExecution=function(){};exports.unstable_getFirstCallbackNode=function(){return L(N)};exports.unstable_Profiling=null;


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Router__ = __webpack_require__(10);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter = function (_React$Component) {
  _inherits(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, BrowserRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = Object(__WEBPACK_IMPORTED_MODULE_3_history__["a" /* createBrowserHistory */])(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  BrowserRouter.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { BrowserRouter as Router }`.");
  };

  BrowserRouter.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Router__["a" /* default */], { history: this.history, children: this.props.children });
  };

  return BrowserRouter;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

BrowserRouter.propTypes = {
  basename: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  forceRefresh: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  getUserConfirmation: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  keyLength: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};


/* harmony default export */ __webpack_exports__["a"] = (BrowserRouter);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(28);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _extends;
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to, from) {
  if (from === undefined) from = '';

  var toParts = (to && to.split('/')) || [];
  var fromParts = (from && from.split('/')) || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) fromParts.unshift('..');

  if (
    mustEndAbs &&
    fromParts[0] !== '' &&
    (!fromParts[0] || !isAbsolute(fromParts[0]))
  )
    fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (resolvePathname);


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function valueOf(obj) {
  return obj.valueOf ? obj.valueOf() : Object.prototype.valueOf.call(obj);
}

function valueEqual(a, b) {
  // Test for strict equality first.
  if (a === b) return true;

  // Otherwise, if either of them == null they are not equal.
  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return (
      Array.isArray(b) &&
      a.length === b.length &&
      a.every(function(item, index) {
        return valueEqual(item, b[index]);
      })
    );
  }

  if (typeof a === 'object' || typeof b === 'object') {
    var aValue = valueOf(a);
    var bValue = valueOf(b);

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    return Object.keys(Object.assign({}, a, b)).every(function(key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ __webpack_exports__["a"] = (valueEqual);


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var isProduction = "production" === 'production';
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

/* unused harmony default export */ var _unused_webpack_default_export = (warning);


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var isProduction = "production" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
  if (condition) {
    return;
  }

  if (isProduction) {
    throw new Error(prefix);
  } else {
    throw new Error(prefix + ": " + (message || ''));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (invariant);


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Router__ = __webpack_require__(10);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter = function (_React$Component) {
  _inherits(HashRouter, _React$Component);

  function HashRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, HashRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = Object(__WEBPACK_IMPORTED_MODULE_3_history__["b" /* createHashHistory */])(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  HashRouter.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.");
  };

  HashRouter.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Router__["a" /* default */], { history: this.history, children: this.props.children });
  };

  return HashRouter;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

HashRouter.propTypes = {
  basename: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  getUserConfirmation: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  hashType: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(["hashbang", "noslash", "slash"]),
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};


/* harmony default export */ __webpack_exports__["a"] = (HashRouter);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_MemoryRouter__ = __webpack_require__(36);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_MemoryRouter__["a" /* default */]);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Router__ = __webpack_require__(11);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for a <Router> that stores location in memory.
 */

var MemoryRouter = function (_React$Component) {
  _inherits(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, MemoryRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = Object(__WEBPACK_IMPORTED_MODULE_3_history__["d" /* createMemoryHistory */])(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  MemoryRouter.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!this.props.history, "<MemoryRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { MemoryRouter as Router }`.");
  };

  MemoryRouter.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Router__["a" /* default */], { history: this.history, children: this.props.children });
  };

  return MemoryRouter;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

MemoryRouter.propTypes = {
  initialEntries: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array,
  initialIndex: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  getUserConfirmation: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  keyLength: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};


/* harmony default export */ __webpack_exports__["a"] = (MemoryRouter);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Route__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link__ = __webpack_require__(14);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
var NavLink = function NavLink(_ref) {
  var to = _ref.to,
      exact = _ref.exact,
      strict = _ref.strict,
      location = _ref.location,
      activeClassName = _ref.activeClassName,
      className = _ref.className,
      activeStyle = _ref.activeStyle,
      style = _ref.style,
      getIsActive = _ref.isActive,
      ariaCurrent = _ref["aria-current"],
      rest = _objectWithoutProperties(_ref, ["to", "exact", "strict", "location", "activeClassName", "className", "activeStyle", "style", "isActive", "aria-current"]);

  var path = (typeof to === "undefined" ? "undefined" : _typeof(to)) === "object" ? to.pathname : to;

  // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202
  var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Route__["a" /* default */], {
    path: escapedPath,
    exact: exact,
    strict: strict,
    location: location,
    children: function children(_ref2) {
      var location = _ref2.location,
          match = _ref2.match;

      var isActive = !!(getIsActive ? getIsActive(match, location) : match);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */], _extends({
        to: to,
        className: isActive ? [className, activeClassName].filter(function (i) {
          return i;
        }).join(" ") : className,
        style: isActive ? _extends({}, style, activeStyle) : style,
        "aria-current": isActive && ariaCurrent || null
      }, rest));
    }
  });
};

NavLink.propTypes = {
  to: __WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */].propTypes.to,
  exact: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  strict: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  location: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  activeClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  activeStyle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  style: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  isActive: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  "aria-current": __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(["page", "step", "location", "date", "time", "true"])
};

NavLink.defaultProps = {
  activeClassName: "active",
  "aria-current": "page"
};

/* harmony default export */ __webpack_exports__["a"] = (NavLink);

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Prompt__ = __webpack_require__(40);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Prompt__["a" /* default */]);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_invariant__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/**
 * The public API for prompting the user before navigating away
 * from a screen with a component.
 */

var Prompt = function (_React$Component) {
  _inherits(Prompt, _React$Component);

  function Prompt() {
    _classCallCheck(this, Prompt);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Prompt.prototype.enable = function enable(message) {
    if (this.unblock) this.unblock();

    this.unblock = this.context.router.history.block(message);
  };

  Prompt.prototype.disable = function disable() {
    if (this.unblock) {
      this.unblock();
      this.unblock = null;
    }
  };

  Prompt.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_2_invariant___default()(this.context.router, "You should not use <Prompt> outside a <Router>");

    if (this.props.when) this.enable(this.props.message);
  };

  Prompt.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.when) {
      if (!this.props.when || this.props.message !== nextProps.message) this.enable(nextProps.message);
    } else {
      this.disable();
    }
  };

  Prompt.prototype.componentWillUnmount = function componentWillUnmount() {
    this.disable();
  };

  Prompt.prototype.render = function render() {
    return null;
  };

  return Prompt;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Prompt.propTypes = {
  when: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  message: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]).isRequired
};
Prompt.defaultProps = {
  when: true
};
Prompt.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
      block: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
    }).isRequired
  }).isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Prompt);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Redirect__ = __webpack_require__(42);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Redirect__["a" /* default */]);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_warning__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_history__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__generatePath__ = __webpack_require__(18);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








/**
 * The public API for updating the location programmatically
 * with a component.
 */

var Redirect = function (_React$Component) {
  _inherits(Redirect, _React$Component);

  function Redirect() {
    _classCallCheck(this, Redirect);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Redirect.prototype.isStatic = function isStatic() {
    return this.context.router && this.context.router.staticContext;
  };

  Redirect.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_3_invariant___default()(this.context.router, "You should not use <Redirect> outside a <Router>");

    if (this.isStatic()) this.perform();
  };

  Redirect.prototype.componentDidMount = function componentDidMount() {
    if (!this.isStatic()) this.perform();
  };

  Redirect.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var prevTo = Object(__WEBPACK_IMPORTED_MODULE_4_history__["c" /* createLocation */])(prevProps.to);
    var nextTo = Object(__WEBPACK_IMPORTED_MODULE_4_history__["c" /* createLocation */])(this.props.to);

    if (Object(__WEBPACK_IMPORTED_MODULE_4_history__["f" /* locationsAreEqual */])(prevTo, nextTo)) {
      __WEBPACK_IMPORTED_MODULE_2_warning___default()(false, "You tried to redirect to the same route you're currently on: " + ("\"" + nextTo.pathname + nextTo.search + "\""));
      return;
    }

    this.perform();
  };

  Redirect.prototype.computeTo = function computeTo(_ref) {
    var computedMatch = _ref.computedMatch,
        to = _ref.to;

    if (computedMatch) {
      if (typeof to === "string") {
        return Object(__WEBPACK_IMPORTED_MODULE_5__generatePath__["a" /* default */])(to, computedMatch.params);
      } else {
        return _extends({}, to, {
          pathname: Object(__WEBPACK_IMPORTED_MODULE_5__generatePath__["a" /* default */])(to.pathname, computedMatch.params)
        });
      }
    }

    return to;
  };

  Redirect.prototype.perform = function perform() {
    var history = this.context.router.history;
    var push = this.props.push;

    var to = this.computeTo(this.props);

    if (push) {
      history.push(to);
    } else {
      history.replace(to);
    }
  };

  Redirect.prototype.render = function render() {
    return null;
  };

  return Redirect;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Redirect.propTypes = {
  computedMatch: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object, // private, from <Switch>
  push: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  from: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  to: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object]).isRequired
};
Redirect.defaultProps = {
  push: false
};
Redirect.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
      push: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
      replace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
    }).isRequired,
    staticContext: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
  }).isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Redirect);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_StaticRouter__ = __webpack_require__(44);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_StaticRouter__["a" /* default */]);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_history__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Router__ = __webpack_require__(11);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
};

var addBasename = function addBasename(basename, location) {
  if (!basename) return location;

  return _extends({}, location, {
    pathname: addLeadingSlash(basename) + location.pathname
  });
};

var stripBasename = function stripBasename(basename, location) {
  if (!basename) return location;

  var base = addLeadingSlash(basename);

  if (location.pathname.indexOf(base) !== 0) return location;

  return _extends({}, location, {
    pathname: location.pathname.substr(base.length)
  });
};

var createURL = function createURL(location) {
  return typeof location === "string" ? location : Object(__WEBPACK_IMPORTED_MODULE_4_history__["e" /* createPath */])(location);
};

var staticHandler = function staticHandler(methodName) {
  return function () {
    __WEBPACK_IMPORTED_MODULE_1_invariant___default()(false, "You cannot %s with <StaticRouter>", methodName);
  };
};

var noop = function noop() {};

/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */

var StaticRouter = function (_React$Component) {
  _inherits(StaticRouter, _React$Component);

  function StaticRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, StaticRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.createHref = function (path) {
      return addLeadingSlash(_this.props.basename + createURL(path));
    }, _this.handlePush = function (location) {
      var _this$props = _this.props,
          basename = _this$props.basename,
          context = _this$props.context;

      context.action = "PUSH";
      context.location = addBasename(basename, Object(__WEBPACK_IMPORTED_MODULE_4_history__["c" /* createLocation */])(location));
      context.url = createURL(context.location);
    }, _this.handleReplace = function (location) {
      var _this$props2 = _this.props,
          basename = _this$props2.basename,
          context = _this$props2.context;

      context.action = "REPLACE";
      context.location = addBasename(basename, Object(__WEBPACK_IMPORTED_MODULE_4_history__["c" /* createLocation */])(location));
      context.url = createURL(context.location);
    }, _this.handleListen = function () {
      return noop;
    }, _this.handleBlock = function () {
      return noop;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  StaticRouter.prototype.getChildContext = function getChildContext() {
    return {
      router: {
        staticContext: this.props.context
      }
    };
  };

  StaticRouter.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!this.props.history, "<StaticRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { StaticRouter as Router }`.");
  };

  StaticRouter.prototype.render = function render() {
    var _props = this.props,
        basename = _props.basename,
        context = _props.context,
        location = _props.location,
        props = _objectWithoutProperties(_props, ["basename", "context", "location"]);

    var history = {
      createHref: this.createHref,
      action: "POP",
      location: stripBasename(basename, Object(__WEBPACK_IMPORTED_MODULE_4_history__["c" /* createLocation */])(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler("go"),
      goBack: staticHandler("goBack"),
      goForward: staticHandler("goForward"),
      listen: this.handleListen,
      block: this.handleBlock
    };

    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Router__["a" /* default */], _extends({}, props, { history: history }));
  };

  return StaticRouter;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

StaticRouter.propTypes = {
  basename: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
  context: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired,
  location: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object])
};
StaticRouter.defaultProps = {
  basename: "",
  location: "/"
};
StaticRouter.childContextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (StaticRouter);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Switch__ = __webpack_require__(46);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Switch__["a" /* default */]);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_warning__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__matchPath__ = __webpack_require__(12);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for rendering the first <Route> that matches.
 */

var Switch = function (_React$Component) {
  _inherits(Switch, _React$Component);

  function Switch() {
    _classCallCheck(this, Switch);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Switch.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_3_invariant___default()(this.context.router, "You should not use <Switch> outside a <Router>");
  };

  Switch.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    __WEBPACK_IMPORTED_MODULE_2_warning___default()(!(nextProps.location && !this.props.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    __WEBPACK_IMPORTED_MODULE_2_warning___default()(!(!nextProps.location && this.props.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
  };

  Switch.prototype.render = function render() {
    var route = this.context.router.route;
    var children = this.props.children;

    var location = this.props.location || route.location;

    var match = void 0,
        child = void 0;
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.forEach(children, function (element) {
      if (match == null && __WEBPACK_IMPORTED_MODULE_0_react___default.a.isValidElement(element)) {
        var _element$props = element.props,
            pathProp = _element$props.path,
            exact = _element$props.exact,
            strict = _element$props.strict,
            sensitive = _element$props.sensitive,
            from = _element$props.from;

        var path = pathProp || from;

        child = element;
        match = Object(__WEBPACK_IMPORTED_MODULE_4__matchPath__["a" /* default */])(location.pathname, { path: path, exact: exact, strict: strict, sensitive: sensitive }, route.match);
      }
    });

    return match ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, { location: location, computedMatch: match }) : null;
  };

  return Switch;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Switch.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    route: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
  }).isRequired
};
Switch.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  location: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};


/* harmony default export */ __webpack_exports__["a"] = (Switch);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_generatePath__ = __webpack_require__(18);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_generatePath__["a" /* default */]);

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_matchPath__ = __webpack_require__(12);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_matchPath__["a" /* default */]);

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_withRouter__ = __webpack_require__(50);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_withRouter__["a" /* default */]);

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Route__ = __webpack_require__(16);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






/**
 * A public higher-order component to access the imperative API
 */
var withRouter = function withRouter(Component) {
  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = _objectWithoutProperties(props, ["wrappedComponentRef"]);

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Route__["a" /* default */], {
      children: function children(routeComponentProps) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, _extends({}, remainingProps, routeComponentProps, {
          ref: wrappedComponentRef
        }));
      }
    });
  };

  C.displayName = "withRouter(" + (Component.displayName || Component.name) + ")";
  C.WrappedComponent = Component;
  C.propTypes = {
    wrappedComponentRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
  };

  return __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics___default()(C, Component);
};

/* harmony default export */ __webpack_exports__["a"] = (withRouter);

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = App;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactInteractive = __webpack_require__(8);

var _reactInteractive2 = _interopRequireDefault(_reactInteractive);

var _reactRouterDom = __webpack_require__(7);

var _Home = __webpack_require__(65);

var _Home2 = _interopRequireDefault(_Home);

var _Category = __webpack_require__(67);

var _Category2 = _interopRequireDefault(_Category);

var _Product = __webpack_require__(73);

var _Product2 = _interopRequireDefault(_Product);

var _PageNotFound = __webpack_require__(75);

var _PageNotFound2 = _interopRequireDefault(_PageNotFound);

var _Breadcrumbs = __webpack_require__(77);

var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

var _app = __webpack_require__(78);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
  return _react2.default.createElement(
    'div',
    { style: _app2.default.root },
    _react2.default.createElement(
      'h1',
      { style: _app2.default.title },
      'TechPleat'
    ),
    _react2.default.createElement(
      'h3',
      null,
      ' Open source platform of reviews by crowd sourced reviewers '
    ),
    _react2.default.createElement(
      _reactInteractive2.default,
      _extends({
        as: 'a',
        href: 'https://github.com/survive-with-shree/techpleat',
        style: _app2.default.repoLink
      }, _app2.default.link),
      'https://github.com/survive-with-shree/techpleat'
    ),
    _react2.default.createElement(
      'nav',
      { style: _app2.default.breadcrumbs },
      _react2.default.createElement(_Breadcrumbs2.default, null)
    ),
    _react2.default.createElement(
      _reactRouterDom.Switch,
      null,
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/category', component: _Category2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/product', component: _Product2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { component: _PageNotFound2.default })
    ),
    _react2.default.createElement(
      'div',
      { style: _app2.default.creditLine },
      _react2.default.createElement(
        _reactInteractive2.default,
        {
          as: 'a',
          href: 'https://techpleat.com/',
          interactiveChild: true,
          focus: {},
          touchActive: {},
          touchActiveTapOnly: true
        },
        'Code and concept by ',
        _react2.default.createElement(
          'span',
          _app2.default.childLink,
          'Devendra Parhate and Shreejit Verma'
        )
      )
    )
  );
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = exports.propTypes = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function statePropsExcept(state) {
  var statePropsCopy = _extends({}, _constants.stateProps);
  delete statePropsCopy[state];
  return Object.keys(statePropsCopy);
}

var iStatesShape = {};
Object.keys(_constants.iStates).forEach(function (iState) {
  iStatesShape[iState] = _propTypes2.default.bool;
});

var propTypes = {
  as: _propTypes2.default.any.isRequired,
  children: _propTypes2.default.node,
  normal: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.oneOf(statePropsExcept('normal'))]),
  hover: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.oneOf(statePropsExcept('hover'))]),
  active: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.oneOf(statePropsExcept('active'))]),
  hoverActive: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.oneOf(statePropsExcept('hoverActive'))]),
  touchActive: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.oneOf(statePropsExcept('touchActive'))]),
  keyActive: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.oneOf(statePropsExcept('keyActive'))]),
  focus: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.oneOf(statePropsExcept('focus'))]),
  focusFromTab: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.oneOf(statePropsExcept('focusFromTab'))]),
  focusFromTouch: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.oneOf(statePropsExcept('focusFromTouch'))]),
  focusFromMouse: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.oneOf(statePropsExcept('focusFromMouse'))]),
  forceState: _propTypes2.default.shape({
    iState: _propTypes2.default.oneOf(Object.keys(_constants.iStates)),
    focus: _propTypes2.default.oneOf([false, 'tab', 'mouse', 'touch'])
  }),
  initialState: _propTypes2.default.shape({
    iState: _propTypes2.default.oneOf(Object.keys(_constants.iStates)),
    focus: _propTypes2.default.oneOf([false, 'tab', 'mouse', 'touch'])
  }),
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  wrapperStyle: _propTypes2.default.object,
  wrapperClassName: _propTypes2.default.string,
  onStateChange: _propTypes2.default.func,
  setStateCallback: _propTypes2.default.func,
  onClick: _propTypes2.default.func,
  onTapTwo: _propTypes2.default.func,
  onTapThree: _propTypes2.default.func,
  onTapFour: _propTypes2.default.func,
  tapTimeCutoff: _propTypes2.default.number,

  onMouseEnter: _propTypes2.default.func,
  onMouseLeave: _propTypes2.default.func,
  onMouseMove: _propTypes2.default.func,
  onMouseDown: _propTypes2.default.func,
  onMouseUp: _propTypes2.default.func,
  onTouchStart: _propTypes2.default.func,
  onTouchMove: _propTypes2.default.func,
  onTouchEnd: _propTypes2.default.func,
  onTouchCancel: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onKeyDown: _propTypes2.default.func,
  onKeyUp: _propTypes2.default.func,

  mutableProps: _propTypes2.default.bool,
  refDOMNode: _propTypes2.default.func,
  tabIndex: _propTypes2.default.string,
  useBrowserOutlineFocus: _propTypes2.default.bool,
  useBrowserCursor: _propTypes2.default.bool,
  touchActiveTapOnly: _propTypes2.default.bool,
  extraTouchNoTap: _propTypes2.default.bool,
  focusToggleOff: _propTypes2.default.bool,
  stylePriority: _propTypes2.default.shape(iStatesShape),
  nonContainedChild: _propTypes2.default.bool,
  interactiveChild: _propTypes2.default.bool
};

var defaultProps = {
  tapTimeCutoff: _constants.defaultTapTimeCutoff
};

exports.propTypes = propTypes;
exports.defaultProps = defaultProps;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _detectHover = __webpack_require__(55);

var _detectHover2 = _interopRequireDefault(_detectHover);

var _detectPointer = __webpack_require__(56);

var _detectPointer2 = _interopRequireDefault(_detectPointer);

var _detectTouchEvents = __webpack_require__(57);

var _detectTouchEvents2 = _interopRequireDefault(_detectTouchEvents);

var _detectPassiveEvents = __webpack_require__(58);

var _detectPassiveEvents2 = _interopRequireDefault(_detectPassiveEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * detectIt object structure
 * const detectIt = {
 *   deviceType: 'mouseOnly' / 'touchOnly' / 'hybrid',
 *   passiveEvents: boolean,
 *   hasTouch: boolean,
 *   hasMouse: boolean,
 *   maxTouchPoints: number,
 *   primaryHover: 'hover' / 'none',
 *   primaryPointer: 'fine' / 'coarse' / 'none',
 *   state: {
 *     detectHover,
 *     detectPointer,
 *     detectTouchEvents,
 *     detectPassiveEvents,
 *   },
 *   update() {...},
 * }
 */

function determineDeviceType(hasTouch, anyHover, anyFine, state) {
  // A hybrid device is one that both hasTouch and any input device can hover
  // or has a fine pointer.
  if (hasTouch && (anyHover || anyFine)) return 'hybrid';

  // workaround for browsers that have the touch events api,
  // and have implemented Level 4 media queries but not the
  // hover and pointer media queries, so the tests are all false (notable Firefox)
  // if it hasTouch, no pointer and hover support, and on an android assume it's touchOnly
  // if it hasTouch, no pointer and hover support, and not on an android assume it's a hybrid
  if (hasTouch && Object.keys(state.detectHover).filter(function (key) {
    return key !== 'update';
  }).every(function (key) {
    return state.detectHover[key] === false;
  }) && Object.keys(state.detectPointer).filter(function (key) {
    return key !== 'update';
  }).every(function (key) {
    return state.detectPointer[key] === false;
  })) {
    if (window.navigator && /android/.test(window.navigator.userAgent.toLowerCase())) {
      return 'touchOnly';
    }
    return 'hybrid';
  }

  // In almost all cases a device that doesn’t support touch will have a mouse,
  // but there may be rare exceptions. Note that it doesn’t work to do additional tests
  // based on hover and pointer media queries as older browsers don’t support these.
  // Essentially, 'mouseOnly' is the default.
  return hasTouch ? 'touchOnly' : 'mouseOnly';
}

var detectIt = {
  state: {
    detectHover: _detectHover2.default,
    detectPointer: _detectPointer2.default,
    detectTouchEvents: _detectTouchEvents2.default,
    detectPassiveEvents: _detectPassiveEvents2.default
  },
  update: function update() {
    detectIt.state.detectHover.update();
    detectIt.state.detectPointer.update();
    detectIt.state.detectTouchEvents.update();
    detectIt.state.detectPassiveEvents.update();
    detectIt.updateOnlyOwnProperties();
  },
  updateOnlyOwnProperties: function updateOnlyOwnProperties() {
    if (typeof window !== 'undefined') {
      detectIt.passiveEvents = detectIt.state.detectPassiveEvents.hasSupport || false;

      detectIt.hasTouch = detectIt.state.detectTouchEvents.hasSupport || false;

      detectIt.deviceType = determineDeviceType(detectIt.hasTouch, detectIt.state.detectHover.anyHover, detectIt.state.detectPointer.anyFine, detectIt.state);

      detectIt.hasMouse = detectIt.deviceType !== 'touchOnly';

      detectIt.primaryInput = detectIt.deviceType === 'mouseOnly' && 'mouse' || detectIt.deviceType === 'touchOnly' && 'touch' ||
      // deviceType is hybrid:
      detectIt.state.detectPointer.fine && 'mouse' || detectIt.state.detectPointer.coarse && 'touch' ||
      // if there's no support for hover media queries but detectIt determined it's
      // a hybrid  device, then assume it's a mouse first device
      'mouse';

      // issue with Windows Chrome on hybrid devices starting in version 59 where
      // media queries represent a touch only device, so if the browser is an
      // affected Windows Chrome version and hasTouch,
      // then assume it's a hybrid with primaryInput mouse
      // note that version 62 of Chrome fixes this issue
      // see https://github.com/rafrex/detect-it/issues/8
      var inVersionRange = function inVersionRange(version) {
        return version >= 59 && version < 62;
      };
      var isAffectedWindowsChromeVersion = /windows/.test(window.navigator.userAgent.toLowerCase()) && /chrome/.test(window.navigator.userAgent.toLowerCase()) && inVersionRange(parseInt(/Chrome\/([0-9.]+)/.exec(navigator.userAgent)[1], 10));

      if (isAffectedWindowsChromeVersion && detectIt.hasTouch) {
        detectIt.deviceType = 'hybrid';
        detectIt.hasMouse = true;
        detectIt.primaryInput = 'mouse';
      }
    }
  }
};

detectIt.updateOnlyOwnProperties();
exports.default = detectIt;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var detectHover = {
  update: function update() {
    if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
      detectHover.hover = window.matchMedia('(hover: hover)').matches;
      detectHover.none = window.matchMedia('(hover: none)').matches || window.matchMedia('(hover: on-demand)').matches;
      detectHover.anyHover = window.matchMedia('(any-hover: hover)').matches;
      detectHover.anyNone = window.matchMedia('(any-hover: none)').matches || window.matchMedia('(any-hover: on-demand)').matches;
    }
  }
};

detectHover.update();
exports.default = detectHover;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var detectPointer = {
  update: function update() {
    if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
      detectPointer.fine = window.matchMedia('(pointer: fine)').matches;
      detectPointer.coarse = window.matchMedia('(pointer: coarse)').matches;
      detectPointer.none = window.matchMedia('(pointer: none)').matches;
      detectPointer.anyFine = window.matchMedia('(any-pointer: fine)').matches;
      detectPointer.anyCoarse = window.matchMedia('(any-pointer: coarse)').matches;
      detectPointer.anyNone = window.matchMedia('(any-pointer: none)').matches;
    }
  }
};

detectPointer.update();
exports.default = detectPointer;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var detectTouchEvents = {
  update: function update() {
    if (typeof window !== 'undefined') {
      detectTouchEvents.hasSupport = 'ontouchstart' in window;
      detectTouchEvents.browserSupportsApi = Boolean(window.TouchEvent);
    }
  }
};

detectTouchEvents.update();
exports.default = detectTouchEvents;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// adapted from https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
var detectPassiveEvents = {
  update: function update() {
    if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
      var passive = false;
      var options = Object.defineProperty({}, 'passive', {
        get: function get() {
          passive = true;
        }
      });
      // note: have to set and remove a no-op listener instead of null
      // (which was used previously), becasue Edge v15 throws an error
      // when providing a null callback.
      // https://github.com/rafrex/detect-passive-events/pull/3
      var noop = function noop() {};
      window.addEventListener('testPassiveEventSupport', noop, options);
      window.removeEventListener('testPassiveEventSupport', noop, options);
      detectPassiveEvents.hasSupport = passive;
    }
  }
};

detectPassiveEvents.update();
exports.default = detectPassiveEvents;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compareProps;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _constants = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// shallow compare of two sets of props, can be called recursivly,
// returns true if the props are the same, and false if they are not the same
function compareProps(propsA, propsB) {
  // If children are ReactElements, e.g. JSX as opposed to strings,
  // they will not be equal even if they are the same because React.createElement(...)
  // returns a new instance every time and is usually called on every render,
  // so unless there is a deep compare of the ReactElement tree of children,
  // it doesn't make sense to continue checking other props.
  // Note, that when nothing has changed in props,
  // the only thing that's not equal are the children, so check first.
  if (propsA.children !== propsB.children) return false;

  var keysB = Object.keys(propsB);

  // don't include forceState when comparing props
  // forceState is handled in componentWillReceiveProps
  var nextPOffset = propsB.forceState ? -1 : 0;
  var pOffset = propsA.forceState ? -1 : 0;
  if (keysB.length + nextPOffset !== Object.keys(propsA).length + pOffset) return false;

  // if it's an state prop options object, then shallow compare the options for equality
  var sameStateProp = function sameStateProp(stateProp) {
    // if propsB doesn't have any of the options object keys, then return false b/c not options obj
    if (!_constants.statePropOptionKeys.some(function (key) {
      return propsB[stateProp][key];
    })) return false;
    // shallow compare the options for equality
    return _constants.statePropOptionKeys.every(function (key) {
      return propsB[stateProp][key] === propsA[stateProp][key];
    });
  };

  // loop through props
  for (var i = 0; i < keysB.length; i++) {
    // skip if prop is forceState
    if (keysB[i] !== 'forceState') {
      // do propsA and propsB both have the property as their own?
      if (!Object.prototype.hasOwnProperty.call(propsA, keysB[i])) return false;
      // if the two props aren't equal, do some additional checks before returning false
      if (propsB[keysB[i]] !== propsA[keysB[i]]) {
        if (keysB[i] === 'as') {
          if (_react2.default.isValidElement(propsA.as) && _react2.default.isValidElement(propsB.as)) {
            // If `as` is JSX/ReactElement, first check to see if `as.type` is the same,
            // e.g. 'div', 'span', ReactClass, ReactFunctionalComponent, and then shallowly
            // compare it's props with a recursive call to sameProps - this should only recurse
            // one time because the JSX/ReactElement shouldn't have the `as` prop.
            if (propsA.as.type !== propsB.as.type) return false;
            if (!compareProps(propsA.as.props, propsB.as.props)) return false;
          } else {
            return false;
          }
          // if the prop is a state, check one level deeper if the props are equal
        } else if (!(_constants.stateProps[keysB[i]] && sameStateProp(keysB[i]))) {
          return false;
        }
      }
    }
  }
  return true;
}
module.exports = exports['default'];

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mergeAndExtractProps;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// extract passThroughProps, and
// if `as` is a JSX/ReactElement, then merge props with `as`'s props
function mergeAndExtractProps(props, knownProps) {
  var mergedProps = {};
  var passThroughProps = {};
  Object.keys(props).forEach(function (key) {
    mergedProps[key] = props[key];
    // pass through all props that are not on the knownProps list
    if (!knownProps[key]) passThroughProps[key] = props[key];
  });
  if (_react2.default.isValidElement(props.as)) {
    // if `as` is JSX/ReactElement, then merge in it's props
    Object.keys(props.as.props).forEach(function (key) {
      mergedProps[key] = props.as.props[key];
      if (!knownProps[key]) passThroughProps[key] = props.as.props[key];
    });

    // set `as` to the JSX/ReactElement's `type`:
    // if the ReactElement is a ReactDOMElement then `type` will be a string, e.g. 'div', 'span'
    // if the ReactElement is a ReactComponentElement, then `type` will be
    // either a ReactClass or a ReactFunctionalComponent, e.g. as={<MyComponent />}
    // https://facebook.github.io/react/docs/glossary.html
    mergedProps.as = props.as.type;
  } else {
    mergedProps.as = props.as;
  }

  return { mergedProps: mergedProps, passThroughProps: passThroughProps };
}
module.exports = exports['default'];

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.extractStyle = extractStyle;
exports.setActiveAndFocusProps = setActiveAndFocusProps;
exports.joinClasses = joinClasses;

var _constants = __webpack_require__(5);

// extract and return the style object and className string for the state given
function extractStyle(props, state) {
  // if no hoverActive prop, then use hover prop for style and classes
  var stateProp = state === 'hoverActive' && !props.hoverActive ? 'hover' : state;
  // loop until the state prop to use is found (i.e. it's not a string)
  var times = 0;
  while (typeof stateProp === 'string' && times < 10) {
    stateProp = props[stateProp];
    times++;
  }
  // if the state prop to use wasn't found, then return a blank style and className object
  if ((typeof stateProp === 'undefined' ? 'undefined' : _typeof(stateProp)) !== 'object') return { style: null, className: '' };

  var extract = {};
  // check if the stateProp is an options object, and extract style and className from the stateProp
  if (_constants.statePropOptionKeys.some(function (key) {
    return stateProp[key];
  })) {
    extract.style = stateProp.style || null;
    extract.className = stateProp.className || '';
  } else {
    // if the stateProp is not an options object, then it's a style object
    extract.style = stateProp;
    extract.className = '';
  }

  return extract;
}

function setActiveAndFocusProps(props) {
  // use the `active` prop for `[type]Active` if no `[type]Active` prop
  if (props.active) {
    if (!props.hoverActive) props.hoverActive = props.active;
    if (!props.touchActive) props.touchActive = props.active;
    if (!props.keyActive) props.keyActive = props.active;
  }

  // use the `focus` prop for `focusFrom[type]` if no `focusFrom[type]` prop
  if (props.focus) {
    if (!props.focusFromTab) props.focusFromTab = props.focus;
    if (!props.focusFromMouse) props.focusFromMouse = props.focus;
    if (!props.focusFromTouch) props.focusFromTouch = props.focus;
  }
}

function joinClasses(className, iStateClass, focusClass) {
  var joined = className;
  joined += joined && iStateClass ? ' ' + iStateClass : '' + iStateClass;
  joined += joined && focusClass ? ' ' + focusClass : '' + focusClass;
  return joined;
}

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = recursiveNodeCheck;
// check the node and all of its children
// returns true if the check function returns true for the node
// or any of its children, returns false otherwise
function recursiveNodeCheck(node, check) {
  if (check(node)) return true;
  for (var i = 0; i < node.children.length; i++) {
    if (recursiveNodeCheck(node.children[i], check)) return true;
  }
  return false;
}
module.exports = exports["default"];

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.focusRegistry = undefined;
exports.updateMouseFromRI = updateMouseFromRI;

var _notifier = __webpack_require__(13);

var _constants = __webpack_require__(5);

// the shape of what's being tracked globally
// the input object is the default export
var input = {
  mouse: {
    mouseOnDocument: false,
    clientX: 0,
    clientY: 0,
    buttons: 0
  },
  touch: {
    touchOnScreen: false,
    recentTouch: false
  },
  key: {
    recentEnterKeyDown: false
  }
};

// update touch input tracking
var touchTimerID = null;
function updateTouch(e) {
  if (e.type === 'touchstart') {
    input.touch.touchOnScreen = true;
    input.mouse.mouseOnDocument = false;
  } else if (e.type === 'touchend' || e.type === 'touchcancel') {
    input.touch.recentTouch = true;
    if (touchTimerID) window.clearTimeout(touchTimerID);
    touchTimerID = window.setTimeout(function () {
      input.touch.recentTouch = false;
      touchTimerID = null;
    }, _constants.queueTime);
  }

  if (e.touches.length === 0) {
    input.touch.touchOnScreen = false;
  }
}

// update mouse input tracking
function updateMouse(e) {
  input.mouse.clientX = e.clientX;
  input.mouse.clientY = e.clientY;
  input.mouse.buttons = e.buttons;
  if (e.type === 'mouseleave') input.mouse.mouseOnDocument = false;else input.mouse.mouseOnDocument = true;
}

// only update mouse if the mouse event is not from a touch event
function updateHybridMouse(e) {
  if (input.touch.recentTouch || input.touch.touchOnScreen) return;
  updateMouse(e);
}

// update recent enter keydown tracking, used for form submission detection
var enterKeyDownTimerID = null;
function updateEnterKeyDown(e) {
  if (e.key === 'Enter') {
    input.key.recentEnterKeyDown = true;
    if (enterKeyDownTimerID) window.clearTimeout(enterKeyDownTimerID);
    enterKeyDownTimerID = window.setTimeout(function () {
      input.key.recentEnterKeyDown = false;
      enterKeyDownTimerID = null;
    }, _constants.queueTime);
  }
}

// update mouse from RI - this is required for enter and leave events from RI elements
// because when the mouse is moved onto an RI element the most recent mousemove event
// will have the mouse coordinates as off the element, so need to get updated coordinates
// from the react event
function updateMouseFromRI(e) {
  updateMouse(e);
  input.mouse.mouseOnDocument = true;
}

// sign up for notification of touch events if the device supports the touch events api
if (_constants.deviceHasTouch) {
  (0, _notifier.notifyOfAll)(Object.keys(_constants.touchEvents), updateTouch);
}

// sign up for notification of mouse events if the device has a mouse
if (_constants.deviceHasMouse) {
  (0, _notifier.notifyOfAll)(Object.keys(_constants.mouseEvents), _constants.deviceType === 'hybrid' ? updateHybridMouse : updateMouse);
}

// sign up for notification of enter keydown events for form submission detection
(0, _notifier.notifyOfAll)(['keydown'], updateEnterKeyDown);

// focus registry used by RI to track events that cause focus/blur calls (e.g. mousedown)
// so focus/blur is not called twice as event bubbles through nested RIs
var focusRegistry = exports.focusRegistry = {
  focus: null,
  blur: null
};

exports.default = input;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = syntheticClick;

var _notifier = __webpack_require__(13);

var _constants = __webpack_require__(5);

var blockClick = false;
var blockClickTimerID = null;
var blockClickCounter = 0;

// call node.click() on tap, and block a subsequent click fired by the browser if there is one,
// note that blocking the subsequent click event fired by the browser is required because
// when the tap/node.click() call results in a change to the layout of the DOM,
// e.g. hide something, the subsequent click event fired by the browser will land
// on the DOM in it's new layout, and if where the tap occurred now has something different
// that has a click handler, e.g. a link, then the subsequent click event will land on
// and trigger the click handler, which is very bad, so it needs to be blocked.
function syntheticClick(node) {
  // only block one subsequent click event per node.click() call
  blockClickCounter++;
  if (blockClickTimerID !== null) window.clearTimeout(blockClickTimerID);
  blockClick = false;
  node.click();
  blockClick = true;
  // reset click blocking if subsequent click isn't added to browser's queue w/in queueTime
  blockClickTimerID = window.setTimeout(function () {
    blockClick = false;
    blockClickCounter = 0;
    blockClickTimerID = null;
  }, _constants.queueTime);
}

function handleClick(e) {
  if (!blockClick) return;
  e.stopPropagation();
  e.preventDefault();
  blockClickCounter--;
  // reset click blocking if the number of clicks to block is met
  if (blockClickCounter === 0) {
    blockClick = false;
    if (blockClickTimerID !== null) {
      window.clearTimeout(blockClickTimerID);
      blockClickTimerID = null;
    }
  }
}

// only required for touch devices because called on touchend tap to control tapClick
if (_constants.deviceHasTouch) (0, _notifier.notifyOfAll)(['click'], handleClick);
module.exports = exports['default'];

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactInteractive = __webpack_require__(8);

var _reactInteractive2 = _interopRequireDefault(_reactInteractive);

var _reactRouterDom = __webpack_require__(7);

var _style = __webpack_require__(2);

var _url = __webpack_require__(19);

var URL = _interopRequireWildcard(_url);

var _home = __webpack_require__(66);

var _home2 = _interopRequireDefault(_home);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this.state = {
      error: null,
      isLoaded: false,
      category: []
    };
    return _this;
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      fetch(URL.docs + '/category/index.json').then(function (res) {
        return res.json();
      }).then(function (result) {
        console.debug(result);
        _this2.setState({
          isLoaded: true,
          category: result.category
        });
      }, function (error) {
        _this2.setState({
          isLoaded: true,
          error: error
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var repoReadmeLink = function repoReadmeLink(text) {
        return _react2.default.createElement(
          _reactInteractive2.default,
          _extends({
            as: 'a'
          }, _home2.default.link, {
            href: 'https://github.com/survive-with-shree/techpleat#readme'
          }),
          text
        );
      };

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'p',
          { style: _home2.default.p },
          'Checkout TeachPleat\'s ',
          repoReadmeLink('GitHub repo'),
          ' for instructions to contribute and support our opensource platform.',
          this.state.category.length
        ),
        _react2.default.createElement(
          'div',
          { style: _home2.default.pageLinkContainer },
          _react2.default.createElement(
            'ol',
            null,
            this.state.category.map(function (item, index) {
              return _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactInteractive2.default,
                  _extends({
                    as: _reactRouterDom.Link
                  }, _home2.default.link, {
                    to: '/category?cid=' + item.toLowerCase() }),
                  item
                )
              );
            })
          )
        )
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

exports.default = Home;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(2);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s = Object.create(_style2.default);

s.pageLinkContainer = {
  margin: '1vh 0'
};

exports.default = s;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactInteractive = __webpack_require__(8);

var _reactInteractive2 = _interopRequireDefault(_reactInteractive);

var _queryString = __webpack_require__(68);

var _queryString2 = _interopRequireDefault(_queryString);

var _url = __webpack_require__(19);

var URL = _interopRequireWildcard(_url);

var _exampleComponent = __webpack_require__(72);

var _exampleComponent2 = _interopRequireDefault(_exampleComponent);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Category = function (_React$Component) {
  _inherits(Category, _React$Component);

  function Category(props) {
    _classCallCheck(this, Category);

    var _this = _possibleConstructorReturn(this, (Category.__proto__ || Object.getPrototypeOf(Category)).call(this, props));

    _this.state = {
      error: null,
      isLoaded: false,
      product: []
    };
    return _this;
  }

  _createClass(Category, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var params = _queryString2.default.parse(location.search);
      fetch(URL.docs + 'category/' + params.cid + '/index.json').then(function (res) {
        return res.json();
      }).then(function (result) {
        console.debug(result);
        _this2.setState({
          isLoaded: true,
          product: result.product
        });
      }, function (error) {
        _this2.setState({
          isLoaded: true,
          error: error
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var repoReadmeLink = function repoReadmeLink(text) {
        return _react2.default.createElement(
          _reactInteractive2.default,
          _extends({
            as: 'a'
          }, _exampleComponent2.default.link, {
            href: 'https://github.com/survive-with-shree/techpleat#readme' }),
          text
        );
      };
      var params = _queryString2.default.parse(location.search);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'p',
          { style: _exampleComponent2.default.p },
          'Checkout TeachPleat\'s ',
          repoReadmeLink('GitHub repo'),
          ' for instructions to contribute and support our opensource platform.',
          this.state.category.length
        ),
        _react2.default.createElement(
          'div',
          { style: _exampleComponent2.default.pageLinkContainer },
          _react2.default.createElement(
            'ol',
            null,
            this.state.product.map(function (item, index) {
              return _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactInteractive2.default,
                  _extends({
                    as: Link
                  }, _exampleComponent2.default.link, {
                    to: '/product?cid=' + params.cid.toLowerCase() + '&pid=' + item.id }),
                  item
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  JSON.stringify(product)
                )
              );
            })
          )
        )
      );
    }
  }]);

  return Category;
}(_react2.default.Component);

exports.default = Category;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const strictUriEncode = __webpack_require__(69);
const decodeComponent = __webpack_require__(70);
const splitOnFirst = __webpack_require__(71);

function encoderForArrayFormat(options) {
	switch (options.arrayFormat) {
		case 'index':
			return key => (result, value) => {
				const index = result.length;
				if (value === undefined || (options.skipNull && value === null)) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[', index, ']'].join('')];
				}

				return [
					...result,
					[encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')
				];
			};

		case 'bracket':
			return key => (result, value) => {
				if (value === undefined || (options.skipNull && value === null)) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[]'].join('')];
				}

				return [...result, [encode(key, options), '[]=', encode(value, options)].join('')];
			};

		case 'comma':
			return key => (result, value) => {
				if (value === null || value === undefined || value.length === 0) {
					return result;
				}

				if (result.length === 0) {
					return [[encode(key, options), '=', encode(value, options)].join('')];
				}

				return [[result, encode(value, options)].join(',')];
			};

		default:
			return key => (result, value) => {
				if (value === undefined || (options.skipNull && value === null)) {
					return result;
				}

				if (value === null) {
					return [...result, encode(key, options)];
				}

				return [...result, [encode(key, options), '=', encode(value, options)].join('')];
			};
	}
}

function parserForArrayFormat(options) {
	let result;

	switch (options.arrayFormat) {
		case 'index':
			return (key, value, accumulator) => {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return (key, value, accumulator) => {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		case 'comma':
			return (key, value, accumulator) => {
				const isArray = typeof value === 'string' && value.split('').indexOf(',') > -1;
				const newValue = isArray ? value.split(',') : value;
				accumulator[key] = newValue;
			};

		default:
			return (key, value, accumulator) => {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, options) {
	if (options.encode) {
		return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function decode(value, options) {
	if (options.decode) {
		return decodeComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	}

	if (typeof input === 'object') {
		return keysSorter(Object.keys(input))
			.sort((a, b) => Number(a) - Number(b))
			.map(key => input[key]);
	}

	return input;
}

function removeHash(input) {
	const hashStart = input.indexOf('#');
	if (hashStart !== -1) {
		input = input.slice(0, hashStart);
	}

	return input;
}

function extract(input) {
	input = removeHash(input);
	const queryStart = input.indexOf('?');
	if (queryStart === -1) {
		return '';
	}

	return input.slice(queryStart + 1);
}

function parseValue(value, options) {
	if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === 'string' && value.trim() !== '')) {
		value = Number(value);
	} else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
		value = value.toLowerCase() === 'true';
	}

	return value;
}

function parse(input, options) {
	options = Object.assign({
		decode: true,
		sort: true,
		arrayFormat: 'none',
		parseNumbers: false,
		parseBooleans: false
	}, options);

	const formatter = parserForArrayFormat(options);

	// Create an object with no prototype
	const ret = Object.create(null);

	if (typeof input !== 'string') {
		return ret;
	}

	input = input.trim().replace(/^[?#&]/, '');

	if (!input) {
		return ret;
	}

	for (const param of input.split('&')) {
		let [key, value] = splitOnFirst(options.decode ? param.replace(/\+/g, ' ') : param, '=');

		// Missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		value = value === undefined ? null : decode(value, options);
		formatter(decode(key, options), value, ret);
	}

	for (const key of Object.keys(ret)) {
		const value = ret[key];
		if (typeof value === 'object' && value !== null) {
			for (const k of Object.keys(value)) {
				value[k] = parseValue(value[k], options);
			}
		} else {
			ret[key] = parseValue(value, options);
		}
	}

	if (options.sort === false) {
		return ret;
	}

	return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
		const value = ret[key];
		if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
			// Sort object keys, not values
			result[key] = keysSorter(value);
		} else {
			result[key] = value;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = (object, options) => {
	if (!object) {
		return '';
	}

	options = Object.assign({
		encode: true,
		strict: true,
		arrayFormat: 'none'
	}, options);

	const formatter = encoderForArrayFormat(options);

	const objectCopy = Object.assign({}, object);
	if (options.skipNull) {
		for (const key of Object.keys(objectCopy)) {
			if (objectCopy[key] === undefined || objectCopy[key] === null) {
				delete objectCopy[key];
			}
		}
	}

	const keys = Object.keys(objectCopy);

	if (options.sort !== false) {
		keys.sort(options.sort);
	}

	return keys.map(key => {
		const value = object[key];

		if (value === undefined) {
			return '';
		}

		if (value === null) {
			return encode(key, options);
		}

		if (Array.isArray(value)) {
			return value
				.reduce(formatter(key), [])
				.join('&');
		}

		return encode(key, options) + '=' + encode(value, options);
	}).filter(x => x.length > 0).join('&');
};

exports.parseUrl = (input, options) => {
	return {
		url: removeHash(input).split('?')[0] || '',
		query: parse(extract(input), options)
	};
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return decodeURIComponent(components.join(''));
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher);

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher);
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

module.exports = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = (string, separator) => {
	if (!(typeof string === 'string' && typeof separator === 'string')) {
		throw new TypeError('Expected the arguments to be of type `string`');
	}

	if (separator === '') {
		return [string];
	}

	const separatorIndex = string.indexOf(separator);

	if (separatorIndex === -1) {
		return [string];
	}

	return [
		string.slice(0, separatorIndex),
		string.slice(separatorIndex + separator.length)
	];
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(2);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s = Object.create(_style2.default);

s.pageLinkContainer = {
  margin: '1vh 0'
};

exports.default = s;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Product;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactInteractive = __webpack_require__(8);

var _reactInteractive2 = _interopRequireDefault(_reactInteractive);

var _reactRouterDom = __webpack_require__(7);

var _style = __webpack_require__(2);

var _exampleTwoDeepComponent = __webpack_require__(74);

var _exampleTwoDeepComponent2 = _interopRequireDefault(_exampleTwoDeepComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  location: _propTypes2.default.object.isRequired
};

function Product(_ref) {
  var location = _ref.location;

  var queryPresent = location.search !== '';
  var hashPresent = location.hash !== '';

  function queryStringTitle() {
    if (queryPresent) return 'The query string field-value pairs are:';
    return 'No query string in the url';
  }

  function hashFragmentTitle() {
    if (hashPresent) return 'The hash fragment is:';
    return 'No hash fragment in the url';
  }

  function linkToShowQueryAndOrHash() {
    if (queryPresent && hashPresent) return null;

    var queryString = queryPresent ? location.search : '?field1=foo&field2=bar';
    var hashFragment = hashPresent ? location.hash : '#boom!';

    var linkText = '';
    if (queryPresent && !hashPresent) linkText = 'Show with hash fragment';
    if (!queryPresent && hashPresent) linkText = 'Show with query string';
    if (!queryPresent && !hashPresent) linkText = 'Show with query string and hash fragment';

    return _react2.default.createElement(
      'div',
      { style: _exampleTwoDeepComponent2.default.lineContainer },
      _react2.default.createElement(
        _reactInteractive2.default,
        _extends({
          as: _reactRouterDom.Link,
          to: '/example/two-deep' + queryString + hashFragment
        }, _exampleTwoDeepComponent2.default.link),
        linkText
      )
    );
  }

  function parseQueryString() {
    if (!queryPresent) return [];
    return location.search.replace('?', '').split('&').map(function (fvPair) {
      return fvPair.split('=');
    }).map(function (pair) {
      return [pair[0], pair.slice(1).join('=')];
    });
  }

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { style: _exampleTwoDeepComponent2.default.lineContainer },
      _react2.default.createElement(
        'div',
        null,
        queryStringTitle()
      ),
      _react2.default.createElement(
        'ul',
        null,
        parseQueryString().map(function (pair, index) {
          return _react2.default.createElement(
            _style.Li,
            { key: '' + pair[0] + pair[1] + index },
            pair[0] + ': ' + pair[1]
          );
        })
      )
    ),
    _react2.default.createElement(
      'div',
      { style: _exampleTwoDeepComponent2.default.lineContainer },
      _react2.default.createElement(
        'div',
        null,
        hashFragmentTitle()
      ),
      _react2.default.createElement(
        'ul',
        null,
        hashPresent && _react2.default.createElement(
          _style.Li,
          null,
          location.hash.slice(1)
        )
      )
    ),
    linkToShowQueryAndOrHash()
  );
}

Product.propTypes = propTypes;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(2);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s = Object.create(_style2.default);

s.lineContainer = {
  margin: '3vh 0'
};

exports.default = s;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PageNotFound;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _style = __webpack_require__(2);

var _pageNotFound = __webpack_require__(76);

var _pageNotFound2 = _interopRequireDefault(_pageNotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  location: _propTypes2.default.object.isRequired
};

function PageNotFound(_ref) {
  var location = _ref.location;

  return _react2.default.createElement(
    'p',
    { style: _pageNotFound2.default.p },
    'Page not found - the path, ',
    _react2.default.createElement(
      _style.Code,
      null,
      location.pathname
    ),
    ', did not match any React Router routes.'
  );
}

PageNotFound.propTypes = propTypes;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(2);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s = Object.create(_style2.default);

exports.default = s;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Breadcrumbs;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(7);

var _reactInteractive = __webpack_require__(8);

var _reactInteractive2 = _interopRequireDefault(_reactInteractive);

var _style = __webpack_require__(2);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var breadCrumbTitles = {
  '': 'Home',
  example: 'Example',
  'two-deep': 'Two Deep'
};

function BreadcrumbsItem(_ref) {
  var match = _ref.match;

  var title = breadCrumbTitles[match.url.split('/').slice(-1)];
  var to = title === undefined ? '/' : match.url;

  return _react2.default.createElement(
    'span',
    null,
    _react2.default.createElement(
      _reactInteractive2.default,
      _extends({
        as: _reactRouterDom.Link
      }, _style2.default.link, {
        to: to
      }),
      title || 'Page Not Found'
    ),
    !match.isExact && title && ' / ',
    title && _react2.default.createElement(_reactRouterDom.Route, { path: (match.url === '/' ? '' : match.url) + '/:path', component: BreadcrumbsItem })
  );
}

BreadcrumbsItem.propTypes = {
  match: _propTypes2.default.object.isRequired
};

function Breadcrumbs() {
  return _react2.default.createElement(_reactRouterDom.Route, { path: '/', component: BreadcrumbsItem });
}

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(2);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s = Object.create(_style2.default);

s.root = {
  fontFamily: 'helvetica, sans-serif',
  fontWeight: '300',
  fontSize: '16px',
  letterSpacing: '0.025em',
  padding: '3vh 0 12vh 0',
  width: '500px',
  // use responsive max-width to simulate padding/margin to allow
  // space for vertical scroll bar without creating horizontal scroll bar
  // (if there is padding, the window will scroll horizontally to show the padding)
  maxWidth: 'calc(100vw - 40px)',

  // center based on vw to prevent content jump when vertical scroll bar show/hide
  // note: vw/vh include the width of scroll bars. Note that centering using margin auto
  // or % (which doesn't include scroll bars, so changes when scroll bars shown) causes a page jump
  position: 'relative',
  left: '50vw',
  WebkitTransform: 'translate(-50%, 0)',
  MozTransform: 'translate(-50%, 0)',
  msTransform: 'translate(-50%, 0)',
  OTransform: 'translate(-50%, 0)',
  transform: 'translate(-50%, 0)',

  WebkitTextSizeAdjust: 'none',
  MozTextSizeAdjust: 'none',
  msTextSizeAdjust: 'none',
  textSizeAdjust: 'none'
};

s.title = {
  fontSize: '20px',
  marginBottom: '0.5vh'
};

s.repoLink = {
  fontSize: '14px'
};

s.breadcrumbs = {
  margin: '3vh 0'
};

s.creditLine = {
  color: '#A0A0A0',
  fontSize: '14px',
  marginTop: '50px'
};

exports.default = s;

/***/ })
/******/ ]);