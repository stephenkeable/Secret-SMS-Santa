import {
  require_react_dom
} from "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts
} from "/build/_shared/chunk-YNGWI6MU.js";
import {
  createHotContext
} from "/build/_shared/chunk-Q4FQXG6T.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/deepmerge/dist/cjs.js
var require_cjs = __commonJS({
  "node_modules/deepmerge/dist/cjs.js"(exports, module) {
    "use strict";
    var isMergeableObject = function isMergeableObject2(value) {
      return isNonNullObject(value) && !isSpecial(value);
    };
    function isNonNullObject(value) {
      return !!value && typeof value === "object";
    }
    function isSpecial(value) {
      var stringValue = Object.prototype.toString.call(value);
      return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement2(value);
    }
    var canUseSymbol = typeof Symbol === "function" && Symbol.for;
    var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
    function isReactElement2(value) {
      return value.$$typeof === REACT_ELEMENT_TYPE;
    }
    function emptyTarget(val) {
      return Array.isArray(val) ? [] : {};
    }
    function cloneUnlessOtherwiseSpecified(value, options) {
      return options.clone !== false && options.isMergeableObject(value) ? deepmerge2(emptyTarget(value), value, options) : value;
    }
    function defaultArrayMerge(target, source, options) {
      return target.concat(source).map(function(element) {
        return cloneUnlessOtherwiseSpecified(element, options);
      });
    }
    function getMergeFunction(key, options) {
      if (!options.customMerge) {
        return deepmerge2;
      }
      var customMerge = options.customMerge(key);
      return typeof customMerge === "function" ? customMerge : deepmerge2;
    }
    function getEnumerableOwnPropertySymbols(target) {
      return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
        return Object.propertyIsEnumerable.call(target, symbol);
      }) : [];
    }
    function getKeys(target) {
      return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
    }
    function propertyIsOnObject(object, property) {
      try {
        return property in object;
      } catch (_) {
        return false;
      }
    }
    function propertyIsUnsafe(target, key) {
      return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
    }
    function mergeObject(target, source, options) {
      var destination = {};
      if (options.isMergeableObject(target)) {
        getKeys(target).forEach(function(key) {
          destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
        });
      }
      getKeys(source).forEach(function(key) {
        if (propertyIsUnsafe(target, key)) {
          return;
        }
        if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
          destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
        } else {
          destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
        }
      });
      return destination;
    }
    function deepmerge2(target, source, options) {
      options = options || {};
      options.arrayMerge = options.arrayMerge || defaultArrayMerge;
      options.isMergeableObject = options.isMergeableObject || isMergeableObject;
      options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
      var sourceIsArray = Array.isArray(source);
      var targetIsArray = Array.isArray(target);
      var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
      if (!sourceAndTargetTypesMatch) {
        return cloneUnlessOtherwiseSpecified(source, options);
      } else if (sourceIsArray) {
        return options.arrayMerge(target, source, options);
      } else {
        return mergeObject(target, source, options);
      }
    }
    deepmerge2.all = function deepmergeAll(array, options) {
      if (!Array.isArray(array)) {
        throw new Error("first argument should be an array");
      }
      return array.reduce(function(prev, next) {
        return deepmerge2(prev, next, options);
      }, {});
    };
    var deepmerge_1 = deepmerge2;
    module.exports = deepmerge_1;
  }
});

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal2 = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element2;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal2;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
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
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text2) {
        var message = "Warning: " + text2;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text2) {
        var message = "Warning: " + text2;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement4, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement4(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement4(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/@shopify/polaris/build/esm/styles.css
var styles_default = "/build/_assets/styles-GHMUJELA.css";

// node_modules/@shopify/polaris/build/esm/types.js
var Key;
(function(Key2) {
  Key2[Key2["Backspace"] = 8] = "Backspace";
  Key2[Key2["Tab"] = 9] = "Tab";
  Key2[Key2["Enter"] = 13] = "Enter";
  Key2[Key2["Shift"] = 16] = "Shift";
  Key2[Key2["Ctrl"] = 17] = "Ctrl";
  Key2[Key2["Alt"] = 18] = "Alt";
  Key2[Key2["Pause"] = 19] = "Pause";
  Key2[Key2["CapsLock"] = 20] = "CapsLock";
  Key2[Key2["Escape"] = 27] = "Escape";
  Key2[Key2["Space"] = 32] = "Space";
  Key2[Key2["PageUp"] = 33] = "PageUp";
  Key2[Key2["PageDown"] = 34] = "PageDown";
  Key2[Key2["End"] = 35] = "End";
  Key2[Key2["Home"] = 36] = "Home";
  Key2[Key2["LeftArrow"] = 37] = "LeftArrow";
  Key2[Key2["UpArrow"] = 38] = "UpArrow";
  Key2[Key2["RightArrow"] = 39] = "RightArrow";
  Key2[Key2["DownArrow"] = 40] = "DownArrow";
  Key2[Key2["Insert"] = 45] = "Insert";
  Key2[Key2["Delete"] = 46] = "Delete";
  Key2[Key2["Key0"] = 48] = "Key0";
  Key2[Key2["Key1"] = 49] = "Key1";
  Key2[Key2["Key2"] = 50] = "Key2";
  Key2[Key2["Key3"] = 51] = "Key3";
  Key2[Key2["Key4"] = 52] = "Key4";
  Key2[Key2["Key5"] = 53] = "Key5";
  Key2[Key2["Key6"] = 54] = "Key6";
  Key2[Key2["Key7"] = 55] = "Key7";
  Key2[Key2["Key8"] = 56] = "Key8";
  Key2[Key2["Key9"] = 57] = "Key9";
  Key2[Key2["KeyA"] = 65] = "KeyA";
  Key2[Key2["KeyB"] = 66] = "KeyB";
  Key2[Key2["KeyC"] = 67] = "KeyC";
  Key2[Key2["KeyD"] = 68] = "KeyD";
  Key2[Key2["KeyE"] = 69] = "KeyE";
  Key2[Key2["KeyF"] = 70] = "KeyF";
  Key2[Key2["KeyG"] = 71] = "KeyG";
  Key2[Key2["KeyH"] = 72] = "KeyH";
  Key2[Key2["KeyI"] = 73] = "KeyI";
  Key2[Key2["KeyJ"] = 74] = "KeyJ";
  Key2[Key2["KeyK"] = 75] = "KeyK";
  Key2[Key2["KeyL"] = 76] = "KeyL";
  Key2[Key2["KeyM"] = 77] = "KeyM";
  Key2[Key2["KeyN"] = 78] = "KeyN";
  Key2[Key2["KeyO"] = 79] = "KeyO";
  Key2[Key2["KeyP"] = 80] = "KeyP";
  Key2[Key2["KeyQ"] = 81] = "KeyQ";
  Key2[Key2["KeyR"] = 82] = "KeyR";
  Key2[Key2["KeyS"] = 83] = "KeyS";
  Key2[Key2["KeyT"] = 84] = "KeyT";
  Key2[Key2["KeyU"] = 85] = "KeyU";
  Key2[Key2["KeyV"] = 86] = "KeyV";
  Key2[Key2["KeyW"] = 87] = "KeyW";
  Key2[Key2["KeyX"] = 88] = "KeyX";
  Key2[Key2["KeyY"] = 89] = "KeyY";
  Key2[Key2["KeyZ"] = 90] = "KeyZ";
  Key2[Key2["LeftMeta"] = 91] = "LeftMeta";
  Key2[Key2["RightMeta"] = 92] = "RightMeta";
  Key2[Key2["Select"] = 93] = "Select";
  Key2[Key2["Numpad0"] = 96] = "Numpad0";
  Key2[Key2["Numpad1"] = 97] = "Numpad1";
  Key2[Key2["Numpad2"] = 98] = "Numpad2";
  Key2[Key2["Numpad3"] = 99] = "Numpad3";
  Key2[Key2["Numpad4"] = 100] = "Numpad4";
  Key2[Key2["Numpad5"] = 101] = "Numpad5";
  Key2[Key2["Numpad6"] = 102] = "Numpad6";
  Key2[Key2["Numpad7"] = 103] = "Numpad7";
  Key2[Key2["Numpad8"] = 104] = "Numpad8";
  Key2[Key2["Numpad9"] = 105] = "Numpad9";
  Key2[Key2["Multiply"] = 106] = "Multiply";
  Key2[Key2["Add"] = 107] = "Add";
  Key2[Key2["Subtract"] = 109] = "Subtract";
  Key2[Key2["Decimal"] = 110] = "Decimal";
  Key2[Key2["Divide"] = 111] = "Divide";
  Key2[Key2["F1"] = 112] = "F1";
  Key2[Key2["F2"] = 113] = "F2";
  Key2[Key2["F3"] = 114] = "F3";
  Key2[Key2["F4"] = 115] = "F4";
  Key2[Key2["F5"] = 116] = "F5";
  Key2[Key2["F6"] = 117] = "F6";
  Key2[Key2["F7"] = 118] = "F7";
  Key2[Key2["F8"] = 119] = "F8";
  Key2[Key2["F9"] = 120] = "F9";
  Key2[Key2["F10"] = 121] = "F10";
  Key2[Key2["F11"] = 122] = "F11";
  Key2[Key2["F12"] = 123] = "F12";
  Key2[Key2["NumLock"] = 144] = "NumLock";
  Key2[Key2["ScrollLock"] = 145] = "ScrollLock";
  Key2[Key2["Semicolon"] = 186] = "Semicolon";
  Key2[Key2["Equals"] = 187] = "Equals";
  Key2[Key2["Comma"] = 188] = "Comma";
  Key2[Key2["Dash"] = 189] = "Dash";
  Key2[Key2["Period"] = 190] = "Period";
  Key2[Key2["ForwardSlash"] = 191] = "ForwardSlash";
  Key2[Key2["GraveAccent"] = 192] = "GraveAccent";
  Key2[Key2["OpenBracket"] = 219] = "OpenBracket";
  Key2[Key2["BackSlash"] = 220] = "BackSlash";
  Key2[Key2["CloseBracket"] = 221] = "CloseBracket";
  Key2[Key2["SingleQuote"] = 222] = "SingleQuote";
})(Key || (Key = {}));

// node_modules/@shopify/polaris/build/esm/components/shared.js
var scrollable = {
  props: {
    "data-polaris-scrollable": true
  },
  selector: "[data-polaris-scrollable]"
};
var overlay = {
  props: {
    "data-polaris-overlay": true
  },
  selector: "[data-polaris-overlay]"
};
var layer = {
  props: {
    "data-polaris-layer": true
  },
  selector: "[data-polaris-layer]"
};
var unstyled = {
  props: {
    "data-polaris-unstyled": true
  },
  selector: "[data-polaris-unstyled]"
};
var dataPolarisTopBar = {
  props: {
    "data-polaris-top-bar": true
  },
  selector: "[data-polaris-top-bar]"
};
var portal = {
  props: ["data-portal-id"],
  selector: "[data-portal-id]"
};

// node_modules/@shopify/polaris/build/esm/utilities/within-content-context.js
var import_react = __toESM(require_react());
var WithinContentContext = /* @__PURE__ */ (0, import_react.createContext)(false);

// node_modules/@shopify/polaris/build/esm/utilities/use-event-listener.js
var import_react3 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/use-isomorphic-layout-effect.js
var import_react2 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/target.js
var isServer = typeof window === "undefined" || typeof document === "undefined";

// node_modules/@shopify/polaris/build/esm/utilities/use-isomorphic-layout-effect.js
var useIsomorphicLayoutEffect = isServer ? import_react2.useEffect : import_react2.useLayoutEffect;

// node_modules/@shopify/polaris/build/esm/utilities/use-event-listener.js
function useEventListener(eventName, handler, target, options) {
  const handlerRef = (0, import_react3.useRef)(handler);
  const optionsRef = (0, import_react3.useRef)(options);
  useIsomorphicLayoutEffect(() => {
    handlerRef.current = handler;
  }, [handler]);
  useIsomorphicLayoutEffect(() => {
    optionsRef.current = options;
  }, [options]);
  (0, import_react3.useEffect)(() => {
    if (!(typeof eventName === "string" && target !== null))
      return;
    let targetElement;
    if (typeof target === "undefined") {
      targetElement = window;
    } else if ("current" in target) {
      if (target.current === null)
        return;
      targetElement = target.current;
    } else {
      targetElement = target;
    }
    const eventOptions = optionsRef.current;
    const eventListener = (event) => handlerRef.current(event);
    targetElement.addEventListener(eventName, eventListener, eventOptions);
    return () => {
      targetElement.removeEventListener(eventName, eventListener, eventOptions);
    };
  }, [eventName, target]);
}

// node_modules/@shopify/polaris/build/esm/utilities/use-theme.js
var import_react4 = __toESM(require_react());

// node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/breakpoints.mjs
var breakpointsAliases = ["xs", "sm", "md", "lg", "xl"];
var breakpoints = {
  "breakpoints-xs": {
    value: "0px",
    description: "Commonly used for sizing containers (e.g. max-width). See below for media query usage."
  },
  "breakpoints-sm": {
    value: "490px",
    description: "Commonly used for sizing containers (e.g. max-width). See below for media query usage."
  },
  "breakpoints-md": {
    value: "768px",
    description: "Commonly used for sizing containers (e.g. max-width). See below for media query usage."
  },
  "breakpoints-lg": {
    value: "1040px",
    description: "Commonly used for sizing containers (e.g. max-width). See below for media query usage."
  },
  "breakpoints-xl": {
    value: "1440px",
    description: "Commonly used for sizing containers (e.g. max-width). See below for media query usage."
  }
};

// node_modules/@shopify/polaris-tokens/dist/esm/_virtual/_rollupPluginBabelHelpers.mjs
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s2, _e, _x, _r, _arr = [], _n = true, _d = false;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i)
          return;
        _n = false;
      } else
        for (; !(_n = (_s2 = _x.call(_i)).done) && (_arr.push(_s2.value), _arr.length !== i); _n = true)
          ;
    } catch (err) {
      _d = true, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  strings.raw = raw;
  return strings;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/@shopify/polaris-tokens/dist/esm/src/utils.mjs
var _templateObject;
var BASE_FONT_SIZE = 16;
var UNIT_PX = "px";
var UNIT_EM = "em";
var UNIT_REM = "rem";
var DIGIT_REGEX = new RegExp(String.raw(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["-?d+(?:.d+|d*)"], ["-?\\d+(?:\\.\\d+|\\d*)"]))));
var UNIT_REGEX = new RegExp(UNIT_PX + "|" + UNIT_EM + "|" + UNIT_REM);
function getUnit(value) {
  if (value === void 0) {
    value = "";
  }
  var unit = value.match(new RegExp(DIGIT_REGEX.source + "(" + UNIT_REGEX.source + ")"));
  return unit && unit[1];
}
function toPx(value) {
  if (value === void 0) {
    value = "";
  }
  var unit = getUnit(value);
  if (!unit)
    return value;
  if (unit === UNIT_PX) {
    return value;
  }
  if (unit === UNIT_EM || unit === UNIT_REM) {
    return "" + parseFloat(value) * BASE_FONT_SIZE + UNIT_PX;
  }
}
function toEm(value, fontSize) {
  if (value === void 0) {
    value = "";
  }
  if (fontSize === void 0) {
    fontSize = BASE_FONT_SIZE;
  }
  var unit = getUnit(value);
  if (!unit)
    return value;
  if (unit === UNIT_EM) {
    return value;
  }
  if (unit === UNIT_PX) {
    return "" + parseFloat(value) / fontSize + UNIT_EM;
  }
  if (unit === UNIT_REM) {
    return "" + parseFloat(value) * BASE_FONT_SIZE / fontSize + UNIT_EM;
  }
}
function toRem(value) {
  if (value === void 0) {
    value = "";
  }
  var unit = getUnit(value);
  if (!unit)
    return value;
  if (unit === UNIT_REM) {
    return value;
  }
  if (unit === UNIT_EM) {
    return "" + parseFloat(value) + UNIT_REM;
  }
  if (unit === UNIT_PX) {
    return "" + parseFloat(value) / BASE_FONT_SIZE + UNIT_REM;
  }
}
function rem(value) {
  return value.replace(new RegExp(DIGIT_REGEX.source + "(" + UNIT_PX + ")", "g"), function(px) {
    var _toRem;
    return (_toRem = toRem(px)) != null ? _toRem : px;
  });
}
function tokenGroupToRems(metaTokenGroup) {
  return Object.fromEntries(
    Object.entries(metaTokenGroup).map(function(_ref) {
      var _ref2 = _slicedToArray(_ref, 2), tokenName = _ref2[0], tokenProperties = _ref2[1];
      return [tokenName, Object.assign(Object.assign({}, tokenProperties), {}, {
        value: rem(tokenProperties.value)
      })];
    })
    // We loose the `metaTokenGroup` inference after transforming the object with
    // `Object.fromEntries()` and `Object.entries()`. Thus, we cast the result
    // back to `T` since we are simply converting the `value` from px to rem.
  );
}
function createVarName(tokenName) {
  return "--p-" + tokenName;
}
function createVar(tokenName) {
  return "var(" + createVarName(tokenName) + ")";
}
function getTokenNames(theme) {
  return Object.values(theme).flatMap(function(tokenGroup) {
    return Object.keys(tokenGroup);
  });
}
function getMediaConditions(breakpoints2) {
  var breakpointEntries = Object.entries(breakpoints2);
  var lastBreakpointIndex = breakpointEntries.length - 1;
  return Object.fromEntries(breakpointEntries.map(function(entry, index) {
    var _ref3 = entry, _ref4 = _slicedToArray(_ref3, 2), breakpointsTokenName = _ref4[0], breakpoint = _ref4[1];
    var upMediaCondition = getUpMediaCondition(breakpoint);
    var downMediaCondition = getDownMediaCondition(breakpoint);
    var onlyMediaCondition = index === lastBreakpointIndex ? upMediaCondition : upMediaCondition + " and " + getDownMediaCondition(breakpointEntries[index + 1][1]);
    return [breakpointsTokenName, {
      // Media condition for the current breakpoint and up
      up: upMediaCondition,
      // Media condition for current breakpoint and down
      down: downMediaCondition,
      // Media condition for only the current breakpoint
      only: onlyMediaCondition
    }];
  }));
}
function getUpMediaCondition(breakpoint) {
  return "(min-width: " + toEm(breakpoint) + ")";
}
function getDownMediaCondition(breakpoint) {
  var _toPx2;
  var offsetBreakpoint = parseFloat((_toPx2 = toPx(breakpoint)) != null ? _toPx2 : "") - 0.04;
  return "(max-width: " + toEm(offsetBreakpoint + "px") + ")";
}
var tokenGroupNamesToRems = ["border", "breakpoints", "font", "height", "shadow", "space", "text", "width"];
function createMetaThemeBase(metaTheme) {
  return Object.fromEntries(Object.entries(metaTheme).map(function(_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2), tokenGroupName = _ref6[0], tokenGroup = _ref6[1];
    return [tokenGroupName, tokenGroupNamesToRems.includes(tokenGroupName) ? tokenGroupToRems(tokenGroup) : tokenGroup];
  }));
}

// node_modules/@shopify/polaris-tokens/dist/esm/src/themes/utils.mjs
var import_deepmerge = __toESM(require_cjs(), 1);

// node_modules/@shopify/polaris-tokens/dist/esm/src/size.mjs
var size = {
  "0": "0px",
  "0165": "0.66px",
  "025": "1px",
  "050": "2px",
  "100": "4px",
  "150": "6px",
  "200": "8px",
  "275": "11px",
  "300": "12px",
  "325": "13px",
  "350": "14px",
  "400": "16px",
  "500": "20px",
  "600": "24px",
  "700": "28px",
  "750": "30px",
  "800": "32px",
  "900": "36px",
  "1000": "40px",
  "1200": "48px",
  "1600": "64px",
  "2000": "80px",
  "2400": "96px",
  "2800": "112px",
  "3200": "128px"
};

// node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/border.mjs
var border = {
  "border-radius-0": {
    value: size[0]
  },
  "border-radius-050": {
    value: size["050"]
  },
  "border-radius-100": {
    value: size[100]
  },
  "border-radius-150": {
    value: size[150]
  },
  "border-radius-200": {
    value: size[200]
  },
  "border-radius-300": {
    value: size[300]
  },
  "border-radius-400": {
    value: size[400]
  },
  "border-radius-500": {
    value: size[500]
  },
  "border-radius-750": {
    value: size[750]
  },
  "border-radius-full": {
    value: "9999px"
  },
  "border-width-0165": {
    value: size["0165"]
  },
  "border-width-025": {
    value: size["025"]
  },
  "border-width-050": {
    value: size["050"]
  },
  "border-width-100": {
    value: size[100]
  }
};

// node_modules/@shopify/polaris-tokens/dist/esm/src/colors.mjs
var gray = {
  1: "rgba(255, 255, 255, 1)",
  2: "rgba(253, 253, 253, 1)",
  3: "rgba(250, 250, 250, 1)",
  4: "rgba(247, 247, 247, 1)",
  5: "rgba(243, 243, 243, 1)",
  6: "rgba(241, 241, 241, 1)",
  7: "rgba(235, 235, 235, 1)",
  8: "rgba(227, 227, 227, 1)",
  9: "rgba(212, 212, 212, 1)",
  10: "rgba(204, 204, 204, 1)",
  11: "rgba(181, 181, 181, 1)",
  12: "rgba(138, 138, 138, 1)",
  13: "rgba(97, 97, 97, 1)",
  14: "rgba(74, 74, 74, 1)",
  15: "rgba(48, 48, 48, 1)",
  16: "rgba(26, 26, 26, 1)"
};
var azure = {
  "1": "rgba(251, 253, 255, 1)",
  "2": "rgba(242, 249, 255, 1)",
  "3": "rgba(234, 244, 255, 1)",
  "4": "rgba(224, 240, 255, 1)",
  "5": "rgba(213, 235, 255, 1)",
  "6": "rgba(202, 230, 255, 1)",
  "7": "rgba(192, 225, 255, 1)",
  "8": "rgba(168, 216, 255, 1)",
  "9": "rgba(145, 208, 255, 1)",
  "10": "rgba(81, 192, 255, 1)",
  "11": "rgba(0, 148, 213, 1)",
  "12": "rgba(0, 124, 180, 1)",
  "13": "rgba(0, 103, 155, 1)",
  "14": "rgba(0, 82, 124, 1)",
  "15": "rgba(0, 58, 90, 1)",
  "16": "rgba(0, 33, 51, 1)"
};
var blue = {
  "1": "rgba(252, 253, 255, 1)",
  "2": "rgba(246, 248, 255, 1)",
  "3": "rgba(240, 242, 255, 1)",
  "4": "rgba(234, 237, 255, 1)",
  "5": "rgba(226, 231, 255, 1)",
  "6": "rgba(219, 225, 255, 1)",
  "7": "rgba(213, 220, 255, 1)",
  "8": "rgba(197, 208, 255, 1)",
  "9": "rgba(186, 199, 255, 1)",
  "10": "rgba(151, 173, 255, 1)",
  "11": "rgba(65, 136, 255, 1)",
  "12": "rgba(0, 113, 233, 1)",
  "13": "rgba(0, 91, 211, 1)",
  "14": "rgba(0, 66, 153, 1)",
  "15": "rgba(0, 46, 106, 1)",
  "16": "rgba(0, 22, 51, 1)"
};
var cyan = {
  "1": "rgba(250, 255, 254, 1)",
  "2": "rgba(231, 252, 248, 1)",
  "3": "rgba(215, 251, 243, 1)",
  "4": "rgba(192, 249, 239, 1)",
  "5": "rgba(165, 247, 233, 1)",
  "6": "rgba(144, 244, 227, 1)",
  "7": "rgba(146, 237, 222, 1)",
  "8": "rgba(130, 227, 209, 1)",
  "9": "rgba(116, 219, 200, 1)",
  "10": "rgba(23, 199, 167, 1)",
  "11": "rgba(19, 163, 137, 1)",
  "12": "rgba(14, 132, 112, 1)",
  "13": "rgba(8, 107, 90, 1)",
  "14": "rgba(9, 83, 70, 1)",
  "15": "rgba(6, 56, 47, 1)",
  "16": "rgba(5, 36, 30, 1)"
};
var green = {
  "1": "rgba(248, 255, 251, 1)",
  "2": "rgba(227, 255, 237, 1)",
  "3": "rgba(205, 254, 225, 1)",
  "4": "rgba(180, 254, 210, 1)",
  "5": "rgba(146, 254, 194, 1)",
  "6": "rgba(99, 253, 176, 1)",
  "7": "rgba(56, 250, 163, 1)",
  "8": "rgba(53, 238, 155, 1)",
  "9": "rgba(50, 225, 147, 1)",
  "10": "rgba(46, 211, 137, 1)",
  "11": "rgba(50, 160, 110, 1)",
  "12": "rgba(41, 132, 90, 1)",
  "13": "rgba(19, 111, 69, 1)",
  "14": "rgba(12, 81, 50, 1)",
  "15": "rgba(8, 61, 37, 1)",
  "16": "rgba(9, 42, 27, 1)"
};
var magenta = {
  "1": "rgba(255, 253, 255, 1)",
  "2": "rgba(255, 245, 255, 1)",
  "3": "rgba(253, 239, 253, 1)",
  "4": "rgba(254, 231, 254, 1)",
  "5": "rgba(252, 223, 252, 1)",
  "6": "rgba(251, 215, 251, 1)",
  "7": "rgba(251, 207, 251, 1)",
  "8": "rgba(249, 190, 249, 1)",
  "9": "rgba(248, 177, 248, 1)",
  "10": "rgba(246, 141, 246, 1)",
  "11": "rgba(225, 86, 225, 1)",
  "12": "rgba(197, 48, 197, 1)",
  "13": "rgba(159, 38, 159, 1)",
  "14": "rgba(121, 26, 121, 1)",
  "15": "rgba(86, 16, 86, 1)",
  "16": "rgba(52, 6, 52, 1)"
};
var orange = {
  "1": "rgba(255, 253, 250, 1)",
  "2": "rgba(255, 247, 238, 1)",
  "3": "rgba(255, 241, 227, 1)",
  "4": "rgba(255, 235, 213, 1)",
  "5": "rgba(255, 228, 198, 1)",
  "6": "rgba(255, 221, 182, 1)",
  "7": "rgba(255, 214, 164, 1)",
  "8": "rgba(255, 200, 121, 1)",
  "9": "rgba(255, 184, 0, 1)",
  "10": "rgba(229, 165, 0, 1)",
  "11": "rgba(178, 132, 0, 1)",
  "12": "rgba(149, 111, 0, 1)",
  "13": "rgba(124, 88, 0, 1)",
  "14": "rgba(94, 66, 0, 1)",
  "15": "rgba(65, 45, 0, 1)",
  "16": "rgba(37, 26, 0, 1)"
};
var purple = {
  "1": "rgba(253, 253, 255, 1)",
  "2": "rgba(248, 247, 255, 1)",
  "3": "rgba(243, 241, 255, 1)",
  "4": "rgba(239, 236, 255, 1)",
  "5": "rgba(233, 229, 255, 1)",
  "6": "rgba(228, 222, 255, 1)",
  "7": "rgba(223, 217, 255, 1)",
  "8": "rgba(212, 204, 255, 1)",
  "9": "rgba(199, 188, 255, 1)",
  "10": "rgba(170, 149, 255, 1)",
  "11": "rgba(148, 116, 255, 1)",
  "12": "rgba(128, 81, 255, 1)",
  "13": "rgba(113, 38, 255, 1)",
  "14": "rgba(87, 0, 209, 1)",
  "15": "rgba(59, 0, 147, 1)",
  "16": "rgba(28, 0, 79, 1)"
};
var red = {
  "1": "rgba(255, 251, 251, 1)",
  "2": "rgba(255, 246, 246, 1)",
  "3": "rgba(255, 237, 236, 1)",
  "4": "rgba(254, 233, 232, 1)",
  "5": "rgba(254, 226, 225, 1)",
  "6": "rgba(254, 218, 217, 1)",
  "7": "rgba(254, 211, 209, 1)",
  "8": "rgba(254, 195, 193, 1)",
  "9": "rgba(253, 176, 172, 1)",
  "10": "rgba(253, 129, 122, 1)",
  "11": "rgba(239, 77, 47, 1)",
  "12": "rgba(229, 28, 0, 1)",
  "13": "rgba(181, 38, 11, 1)",
  "14": "rgba(142, 31, 11, 1)",
  "15": "rgba(95, 21, 7, 1)",
  "16": "rgba(47, 10, 4, 1)"
};
var rose = {
  "1": "rgba(255, 253, 253, 1)",
  "2": "rgba(255, 246, 248, 1)",
  "3": "rgba(255, 239, 243, 1)",
  "4": "rgba(255, 232, 238, 1)",
  "5": "rgba(255, 225, 232, 1)",
  "6": "rgba(255, 217, 227, 1)",
  "7": "rgba(254, 209, 221, 1)",
  "8": "rgba(254, 193, 210, 1)",
  "9": "rgba(254, 181, 202, 1)",
  "10": "rgba(254, 142, 177, 1)",
  "11": "rgba(253, 75, 146, 1)",
  "12": "rgba(227, 12, 118, 1)",
  "13": "rgba(185, 7, 95, 1)",
  "14": "rgba(141, 4, 72, 1)",
  "15": "rgba(100, 2, 49, 1)",
  "16": "rgba(62, 1, 28, 1)"
};
var yellow = {
  "1": "rgba(255, 253, 246, 1)",
  "2": "rgba(255, 248, 219, 1)",
  "3": "rgba(255, 244, 191, 1)",
  "4": "rgba(255, 239, 157, 1)",
  "5": "rgba(255, 235, 120, 1)",
  "6": "rgba(255, 230, 0, 1)",
  "7": "rgba(247, 223, 0, 1)",
  "8": "rgba(234, 211, 0, 1)",
  "9": "rgba(225, 203, 0, 1)",
  "10": "rgba(197, 178, 0, 1)",
  "11": "rgba(153, 138, 0, 1)",
  "12": "rgba(130, 117, 0, 1)",
  "13": "rgba(105, 95, 0, 1)",
  "14": "rgba(79, 71, 0, 1)",
  "15": "rgba(51, 46, 0, 1)",
  "16": "rgba(31, 28, 0, 1)"
};
var blackAlpha = {
  1: "rgba(0, 0, 0, 0)",
  2: "rgba(0, 0, 0, 0.01)",
  3: "rgba(0, 0, 0, 0.02)",
  4: "rgba(0, 0, 0, 0.03)",
  5: "rgba(0, 0, 0, 0.05)",
  6: "rgba(0, 0, 0, 0.06)",
  7: "rgba(0, 0, 0, 0.08)",
  8: "rgba(0, 0, 0, 0.11)",
  9: "rgba(0, 0, 0, 0.17)",
  10: "rgba(0, 0, 0, 0.20)",
  11: "rgba(0, 0, 0, 0.29)",
  12: "rgba(0, 0, 0, 0.46)",
  13: "rgba(0, 0, 0, 0.62)",
  14: "rgba(0, 0, 0, 0.71)",
  15: "rgba(0, 0, 0, 0.81)",
  16: "rgba(0, 0, 0, 0.90)"
};

// node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/color.mjs
var color = {
  "color-bg": {
    value: gray[6],
    description: "The default background color of the admin."
  },
  "color-bg-inverse": {
    value: gray[16],
    description: "Use for high contrast page or component backgrounds."
  },
  "color-bg-surface": {
    value: gray[1],
    description: "The background color for elements with the highest level of prominence, like a card."
  },
  "color-bg-surface-hover": {
    value: gray[4],
    description: "The hover state color for elements with the highest level of prominence."
  },
  "color-bg-surface-active": {
    value: gray[5],
    description: "The active state (on press) color for elements with the highest level of prominence."
  },
  "color-bg-surface-selected": {
    value: gray[6],
    description: "The selected state color for elements with the highest level of prominence."
  },
  "color-bg-surface-disabled": {
    value: blackAlpha[5],
    description: "The disabled state color for elements."
  },
  "color-bg-surface-secondary": {
    value: gray[4],
    description: "The background color for elements with a secondary level of prominence."
  },
  "color-bg-surface-secondary-hover": {
    value: gray[6],
    description: "The hover state color for elements with a secondary level of prominence."
  },
  "color-bg-surface-secondary-active": {
    value: gray[7],
    description: "The active state (on press) color for elements with a secondary level of prominence."
  },
  "color-bg-surface-secondary-selected": {
    value: gray[7],
    description: "The selected state color for elements with a secondary level of prominence."
  },
  "color-bg-surface-tertiary": {
    value: gray[5],
    description: "The background color for elements with a third level of prominence."
  },
  "color-bg-surface-tertiary-hover": {
    value: gray[7],
    description: "The hover state color for elements with a third level of prominence."
  },
  "color-bg-surface-tertiary-active": {
    value: gray[8],
    description: "The active state (on press) color for elements with a third level of prominence."
  },
  "color-bg-surface-brand": {
    value: gray[8],
    description: "Use to apply the key color to elements."
  },
  "color-bg-surface-brand-hover": {
    value: gray[7],
    description: "The hover state color for key elements."
  },
  "color-bg-surface-brand-active": {
    value: gray[6],
    description: "The active state (on press) color for key elements."
  },
  "color-bg-surface-brand-selected": {
    value: gray[6],
    description: "The selected state color for key elements."
  },
  "color-bg-surface-info": {
    value: azure[3],
    description: "Use for backgrounds communicating important information, like banners."
  },
  "color-bg-surface-info-hover": {
    value: azure[4],
    description: "The hover state color for communicating important information."
  },
  "color-bg-surface-info-active": {
    value: azure[6],
    description: "The active state (on press) color for communicating important information."
  },
  "color-bg-surface-success": {
    value: green[3],
    description: "Use for backgrounds communicating success, like banners."
  },
  "color-bg-surface-success-hover": {
    value: green[4],
    description: "The hover state color for communicating success."
  },
  "color-bg-surface-success-active": {
    value: green[5],
    description: "The active state (on press) color for communicating success."
  },
  "color-bg-surface-caution": {
    value: yellow[2],
    description: "Use for backgrounds communicating caution, like banners."
  },
  "color-bg-surface-caution-hover": {
    value: yellow[3],
    description: "The hover state for communicating caution."
  },
  "color-bg-surface-caution-active": {
    value: yellow[4],
    description: "The active state (on press) color for communicating caution."
  },
  "color-bg-surface-warning": {
    value: orange[3],
    description: "Use for backgrounds communicating warning, like banners."
  },
  "color-bg-surface-warning-hover": {
    value: orange[4],
    description: "The hover state color for communicating warning."
  },
  "color-bg-surface-warning-active": {
    value: orange[5],
    description: "The active state (on press) color for communicating warning."
  },
  "color-bg-surface-critical": {
    value: red[4],
    description: "Use for backgrounds communicating critical information, like banners or input errors."
  },
  "color-bg-surface-critical-hover": {
    value: red[5],
    description: "The hover state color for communicating critical information."
  },
  "color-bg-surface-critical-active": {
    value: red[6],
    description: "The active state (on press) color for communicating critical information."
  },
  "color-bg-surface-emphasis": {
    value: blue[3],
    description: "Use for backgrounds indicating areas of focus in editors, such as the theme editor."
  },
  "color-bg-surface-emphasis-hover": {
    value: blue[4],
    description: "The hover state color for elements indicating areas of focus in editors."
  },
  "color-bg-surface-emphasis-active": {
    value: blue[5],
    description: "The active state (on press) color for elements indicating areas of focus in editors."
  },
  "color-bg-surface-magic": {
    value: purple[3],
    description: "Use for backgrounds of elements suggested by magic AI."
  },
  "color-bg-surface-magic-hover": {
    value: purple[4],
    description: "The hover state color for elements suggested by magic AI."
  },
  "color-bg-surface-magic-active": {
    value: purple[6],
    description: "The active state (on press) color for elements suggested by magic AI."
  },
  "color-bg-surface-inverse": {
    value: gray[15],
    description: "Use for elements on bg-inverse."
  },
  "color-bg-surface-transparent": {
    value: blackAlpha[1],
    description: "Use for elements that need a fully transparent background."
  },
  "color-bg-fill": {
    value: gray[1],
    description: "The background color of contained elements with a smaller surface area, like a button."
  },
  "color-bg-fill-hover": {
    value: gray[3],
    description: "The hover state color of contained elements with a smaller surface area, like a button."
  },
  "color-bg-fill-active": {
    value: gray[4],
    description: "The active state (on press) color of contained elements with a smaller surface area, like a button."
  },
  "color-bg-fill-selected": {
    value: gray[10],
    description: "The selected state color of contained elements with a smaller surface area, like a button or checkbox."
  },
  "color-bg-fill-disabled": {
    value: blackAlpha[5],
    description: "The disabled state color of contained elements with a smaller surface area, like a button."
  },
  "color-bg-fill-secondary": {
    value: gray[6],
    description: "The background color of elements with a smaller surface area and a secondary level of prominence."
  },
  "color-bg-fill-secondary-hover": {
    value: gray[7],
    description: "The hover state color of elements with a smaller surface area and a secondary level of prominence."
  },
  "color-bg-fill-secondary-active": {
    value: gray[8],
    description: "The active state (on press) color of elements with a smaller surface area and a secondary level of prominence."
  },
  "color-bg-fill-tertiary": {
    value: gray[8],
    description: "The background color of elements with a smaller surface area and a third level of prominence."
  },
  "color-bg-fill-tertiary-hover": {
    value: gray[9],
    description: "The hover state color of elements with a smaller surface area and a third level of prominence."
  },
  "color-bg-fill-tertiary-active": {
    value: gray[10],
    description: "The active state (on press) color of elements with a smaller surface area and a third level of prominence."
  },
  "color-bg-fill-brand": {
    value: gray[15],
    description: "The background color of main actions, like primary buttons."
  },
  "color-bg-fill-brand-hover": {
    value: gray[16],
    description: "The hover state color of main actions, like primary buttons."
  },
  "color-bg-fill-brand-active": {
    value: gray[16],
    description: "The active state (on press) color of main actions, like primary buttons."
  },
  "color-bg-fill-brand-selected": {
    value: gray[15],
    description: "The selected state color of main actions, like primary buttons."
  },
  "color-bg-fill-brand-disabled": {
    value: blackAlpha[9],
    description: "The disabled state color of main actions, like primary buttons."
  },
  "color-bg-fill-info": {
    value: azure[9],
    description: "Use for backgrounds communicating important information on elements with a smaller surface area, like a badge or button."
  },
  "color-bg-fill-info-hover": {
    value: azure[10],
    description: "The hover state color for communicating important information on elements with a smaller surface area."
  },
  "color-bg-fill-info-active": {
    value: azure[11],
    description: "The active state (on press) color for communicating important information on elements with a smaller surface area."
  },
  "color-bg-fill-info-secondary": {
    value: azure[4],
    description: "Use for backgrounds communicating important information on elements with a smaller surface area, with a secondary level of prominence."
  },
  "color-bg-fill-success": {
    value: green[12],
    description: "Use for backgrounds communicating success on elements with a smaller surface area, like a badge or a banner."
  },
  "color-bg-fill-success-hover": {
    value: green[13],
    description: "The hover state color for communicating success on elements with a smaller surface area."
  },
  "color-bg-fill-success-active": {
    value: green[14],
    description: "The active state (on press) color for communicating success on elements with a smaller surface area."
  },
  "color-bg-fill-success-secondary": {
    value: green[3],
    description: "Use for backgrounds communicating success on elements with a smaller surface area, with a secondary level of prominence."
  },
  "color-bg-fill-warning": {
    value: orange[9],
    description: "Use for backgrounds communicating warning on elements with a smaller surface area, like a badge or a banner."
  },
  "color-bg-fill-warning-hover": {
    value: orange[10],
    description: "The hover state color for communicating warning on elements with a smaller surface area."
  },
  "color-bg-fill-warning-active": {
    value: orange[11],
    description: "The active state (on press) color for communicating warning on elements with a smaller surface area."
  },
  "color-bg-fill-warning-secondary": {
    value: orange[7],
    description: "Use for backgrounds communicating warning on elements with a smaller surface area, with a secondary level of prominence."
  },
  "color-bg-fill-caution": {
    value: yellow[6],
    description: "Use for backgrounds communicating caution on elements with a smaller surface area, like a badge or a banner."
  },
  "color-bg-fill-caution-hover": {
    value: yellow[8],
    description: "The hover state color for communicating caution on elements with a smaller surface area."
  },
  "color-bg-fill-caution-active": {
    value: yellow[9],
    description: "The active state (on press) color for communicating caution on elements with a smaller surface area."
  },
  "color-bg-fill-caution-secondary": {
    value: yellow[4],
    description: "Use for backgrounds communicating caution on elements with a smaller surface area, with a secondary level of prominence."
  },
  "color-bg-fill-critical": {
    value: red[12],
    description: "Use for backgrounds communicating critical information on elements with a smaller surface area, like a badge or a banner."
  },
  "color-bg-fill-critical-hover": {
    value: red[13],
    description: "The hover state color for communicating critical information on elements with a smaller surface area."
  },
  "color-bg-fill-critical-active": {
    value: red[14],
    description: "The active state (on press) color for communicating critical information on elements with a smaller surface area."
  },
  "color-bg-fill-critical-selected": {
    value: red[14],
    description: "The selected state color for communicating critical information on elements with a smaller surface area."
  },
  "color-bg-fill-critical-secondary": {
    value: red[6],
    description: "Use for backgrounds communicating critical information on elements with a smaller surface area, with a secondary level of prominence."
  },
  "color-bg-fill-emphasis": {
    value: blue[13],
    description: "Use for backgrounds indicating areas of focus in editors on elements with a smaller surface area, like a button or a badge."
  },
  "color-bg-fill-emphasis-hover": {
    value: blue[14],
    description: "The hover state color for indicating areas of focus in editors on elements with a smaller surface area."
  },
  "color-bg-fill-emphasis-active": {
    value: blue[15],
    description: "The active state (on press) color for indicating areas of focus in editors on elements with a smaller surface area."
  },
  "color-bg-fill-magic": {
    value: purple[12],
    description: "The background color of elements suggested by magic AI, like a badge or a banner."
  },
  "color-bg-fill-magic-secondary": {
    value: purple[6],
    description: "The background color of elements suggested by magic AI, with a secondary level of prominence."
  },
  "color-bg-fill-magic-secondary-hover": {
    value: purple[7],
    description: "The hover state color of elements suggested by magic AI, with a secondary level of prominence."
  },
  "color-bg-fill-magic-secondary-active": {
    value: purple[8],
    description: "The active state (on press) color of elements suggested by magic AI, with a secondary level of prominence."
  },
  "color-bg-fill-inverse": {
    value: gray[15],
    description: "The background color of elements with a smaller surface area on an inverse background."
  },
  "color-bg-fill-inverse-hover": {
    value: gray[14],
    description: "The hover state color of elements with a smaller surface area on an inverse background."
  },
  "color-bg-fill-inverse-active": {
    value: gray[13],
    description: "The active state (on press) color of elements with a smaller surface area on an inverse background."
  },
  "color-bg-fill-transparent": {
    value: blackAlpha[3],
    description: "The background color of elements that need to sit on different background colors, like tabs."
  },
  "color-bg-fill-transparent-hover": {
    value: blackAlpha[5],
    description: "The hover state color of elements that need to sit on different background colors, like tabs."
  },
  "color-bg-fill-transparent-active": {
    value: blackAlpha[7],
    description: "The active state (on press) color of elements that need to sit on different background colors, like tabs."
  },
  "color-bg-fill-transparent-selected": {
    value: blackAlpha[7],
    description: "The selected state color of elements that need to sit on different background colors, like tabs."
  },
  "color-bg-fill-transparent-secondary": {
    value: blackAlpha[6],
    description: "The background color of elements that need to sit on different background colors, with a secondary level of prominence."
  },
  "color-bg-fill-transparent-secondary-hover": {
    value: blackAlpha[7],
    description: "The hover state color of elements that need to sit on different background colors, with a secondary level of prominence."
  },
  "color-bg-fill-transparent-secondary-active": {
    value: blackAlpha[8],
    description: "The active state (on press) color of elements that need to sit on different background colors, with a secondary level of prominence."
  },
  "color-text": {
    value: gray[15],
    description: "The default text color."
  },
  "color-text-secondary": {
    value: gray[13],
    description: "Use for text with a secondary level of prominence."
  },
  "color-text-disabled": {
    value: gray[11],
    description: "Use for text in a disabled state."
  },
  "color-text-link": {
    value: blue[13],
    description: "Use for text links."
  },
  "color-text-link-hover": {
    value: blue[14],
    description: "The hover state color for text links."
  },
  "color-text-link-active": {
    value: blue[15],
    description: "The active state (on press) color for text links."
  },
  "color-text-brand": {
    value: gray[14],
    description: "Use for text that needs to pull attention."
  },
  "color-text-brand-hover": {
    value: gray[15],
    description: "The hover state color for text that needs to pull attention."
  },
  "color-text-brand-on-bg-fill": {
    value: gray[1],
    description: "Use for text on bg-fill-brand, like primary buttons."
  },
  "color-text-brand-on-bg-fill-hover": {
    value: gray[8],
    description: "The hover state color for text on bg-fill-brand-hover."
  },
  "color-text-brand-on-bg-fill-active": {
    value: gray[10],
    description: "The active state (on press) color for text on bg-fill-brand."
  },
  "color-text-brand-on-bg-fill-disabled": {
    value: gray[1],
    description: "The disabled state color for text on bg-fill-brand-disabled."
  },
  "color-text-info": {
    value: azure[14],
    description: "Use for text communicating important information."
  },
  "color-text-info-hover": {
    value: azure[15],
    description: "The hover state color for text communicating important information."
  },
  "color-text-info-active": {
    value: azure[16],
    description: "The active state (on press) color for text communicating important information."
  },
  "color-text-info-on-bg-fill": {
    value: azure[16],
    description: "Use for text and icons on bg-fill-info."
  },
  "color-text-success": {
    value: green[14],
    description: "Use for text communicating success."
  },
  "color-text-success-hover": {
    value: green[15],
    description: "The hover state color for text communicating success."
  },
  "color-text-success-active": {
    value: green[16],
    description: "The active state (on press) color for text communicating success."
  },
  "color-text-success-on-bg-fill": {
    value: green[1],
    description: "Use for text and icons on bg-fill-success."
  },
  "color-text-caution": {
    value: yellow[14],
    description: "Use for text communicating caution."
  },
  "color-text-caution-hover": {
    value: yellow[15],
    description: "The hover state color for text communicating caution."
  },
  "color-text-caution-active": {
    value: yellow[16],
    description: "The active state (on press) color for text communicating caution."
  },
  "color-text-caution-on-bg-fill": {
    value: yellow[15],
    description: "Use for text and icons on bg-fill-caution."
  },
  "color-text-warning": {
    value: orange[14],
    description: "Use for text communicating warning."
  },
  "color-text-warning-hover": {
    value: orange[15],
    description: "The hover state color for text communicating warning."
  },
  "color-text-warning-active": {
    value: orange[16],
    description: "The active state (on press) color for text communicating warning."
  },
  "color-text-warning-on-bg-fill": {
    value: orange[16],
    description: "Use for text and icons on bg-fill-warning."
  },
  "color-text-critical": {
    value: red[14],
    description: "Use for text communicating critical information."
  },
  "color-text-critical-hover": {
    value: red[15],
    description: "The hover state color for text communicating critical information."
  },
  "color-text-critical-active": {
    value: red[16],
    description: "The active state (on press) color for text communicating critical information."
  },
  "color-text-critical-on-bg-fill": {
    value: red[1],
    description: "Use for text and icons on bg-fill-critical."
  },
  "color-text-emphasis": {
    value: blue[13],
    description: "Use for text indicating areas of focus in editors, like the theme editor."
  },
  "color-text-emphasis-hover": {
    value: blue[14],
    description: "The hover state color for text indicating areas of focus."
  },
  "color-text-emphasis-active": {
    value: blue[15],
    description: "The active state (on press) color for text indicating areas of focus."
  },
  "color-text-emphasis-on-bg-fill": {
    value: blue[1],
    description: "Use for text and icons on bg-fill-emphasis."
  },
  "color-text-emphasis-on-bg-fill-hover": {
    value: blue[5],
    description: "Use for text and icons on bg-fill-emphasis-hover."
  },
  "color-text-emphasis-on-bg-fill-active": {
    value: blue[7],
    description: "Use for text and icons on bg-fill-emphasis-active."
  },
  "color-text-magic": {
    value: purple[14],
    description: "Use for text suggested by magic AI."
  },
  "color-text-magic-on-bg-fill": {
    value: purple[1],
    description: "Use for text and icons on bg-fill-magic."
  },
  "color-text-inverse": {
    value: gray[8],
    description: "Use for text on an inverse background."
  },
  "color-text-inverse-secondary": {
    value: gray[11],
    description: "Use for secondary text on an inverse background."
  },
  "color-text-link-inverse": {
    value: blue[8],
    description: "Use for text links on an inverse background."
  },
  "color-border": {
    value: gray[8],
    description: "The default color for borders on any element."
  },
  "color-border-hover": {
    value: gray[10],
    description: "The hover color for borders on any element."
  },
  "color-border-disabled": {
    value: gray[7],
    description: "The disabled color for borders on any element."
  },
  "color-border-secondary": {
    value: gray[7],
    description: "The color for hr elements or any visual dividers."
  },
  "color-border-tertiary": {
    value: gray[10],
    description: "The border color on any element. Pair with bg-surface-tertiary or bg-fill-tertiary."
  },
  "color-border-focus": {
    value: blue[13],
    description: "The focus ring for any interactive element in a focused state."
  },
  "color-border-brand": {
    value: gray[8],
    description: "Use for borders paired with brand colors."
  },
  "color-border-info": {
    value: azure[8],
    description: "Use for borders communicating information."
  },
  "color-border-success": {
    value: green[5],
    description: "Use for borders communicating success."
  },
  "color-border-caution": {
    value: yellow[5],
    description: "Use for borders communicating caution."
  },
  "color-border-warning": {
    value: orange[8],
    description: "Use for borders communicating warning."
  },
  "color-border-critical": {
    value: red[8],
    description: "Use for borders communicating critical information."
  },
  "color-border-critical-secondary": {
    value: red[14],
    description: "Use for borders communicating critical information, such as borders on invalid text fields."
  },
  "color-border-emphasis": {
    value: blue[13],
    description: "Use for borders indicating areas of focus."
  },
  "color-border-emphasis-hover": {
    value: blue[14],
    description: "The hover state color for borders indicating areas of focus."
  },
  "color-border-emphasis-active": {
    value: blue[15],
    description: "The active state (on press) color for borders indicating areas of focus."
  },
  "color-border-magic": {
    value: purple[10],
    description: "Use for borders suggested by magic AI."
  },
  "color-border-magic-secondary": {
    value: purple[12],
    description: "Use for borders suggested by magic AI, such as borders on text fields."
  },
  "color-border-inverse": {
    value: gray[13],
    description: "Use for borders on an inverse background, such as borders on the global search."
  },
  "color-border-inverse-hover": {
    value: gray[10],
    description: "The hover state color for borders on an inverse background."
  },
  "color-border-inverse-active": {
    value: gray[8],
    description: "The active state (on press) color for borders on an inverse background."
  },
  "color-icon": {
    value: gray[14],
    description: "The default color for icons."
  },
  "color-icon-hover": {
    value: gray[15],
    description: "The hover state color for icons."
  },
  "color-icon-active": {
    value: gray[16],
    description: "The active state (on press) color for icons."
  },
  "color-icon-disabled": {
    value: gray[10],
    description: "The disabled state color for icons."
  },
  "color-icon-secondary": {
    value: gray[12],
    description: "Use for secondary icons."
  },
  "color-icon-secondary-hover": {
    value: gray[13],
    description: "The hover state color for secondary icons."
  },
  "color-icon-secondary-active": {
    value: gray[14],
    description: "The active state (on press) color for secondary icons."
  },
  "color-icon-brand": {
    value: gray[16],
    description: "Use for icons that need to pull more focus."
  },
  "color-icon-info": {
    value: azure[11],
    description: "Use for icons communicating information."
  },
  "color-icon-success": {
    value: green[12],
    description: "Use for icons communicating success."
  },
  "color-icon-caution": {
    value: yellow[11],
    description: "Use for icons communicating caution."
  },
  "color-icon-warning": {
    value: orange[11],
    description: "Use for icons communicating warning."
  },
  "color-icon-critical": {
    value: red[11],
    description: "Use for icons communicating critical information."
  },
  "color-icon-emphasis": {
    value: blue[13],
    description: "Use for icons indicating areas of focus in editors, like the theme editor."
  },
  "color-icon-emphasis-hover": {
    value: blue[14],
    description: "The hover color for icons indicating areas of focus in editors."
  },
  "color-icon-emphasis-active": {
    value: blue[15],
    description: "The active state (on press) color for icons indicating areas of focus in editors."
  },
  "color-icon-magic": {
    value: purple[12],
    description: "Use for icons suggested by magic AI."
  },
  "color-icon-inverse": {
    value: gray[8],
    description: "Use for icons on an inverse background."
  },
  "color-avatar-bg-fill": {
    value: gray[11]
  },
  "color-avatar-five-bg-fill": {
    value: rose[7]
  },
  "color-avatar-five-text-on-bg-fill": {
    value: rose[14]
  },
  "color-avatar-four-bg-fill": {
    value: azure[7]
  },
  "color-avatar-four-text-on-bg-fill": {
    value: azure[14]
  },
  "color-avatar-one-bg-fill": {
    value: magenta[7]
  },
  "color-avatar-one-text-on-bg-fill": {
    value: magenta[14]
  },
  "color-avatar-text-on-bg-fill": {
    value: gray[1]
  },
  "color-avatar-three-bg-fill": {
    value: cyan[7]
  },
  "color-avatar-three-text-on-bg-fill": {
    value: cyan[14]
  },
  "color-avatar-two-bg-fill": {
    value: green[7]
  },
  "color-avatar-two-text-on-bg-fill": {
    value: green[14]
  },
  "color-backdrop-bg": {
    value: blackAlpha[14]
  },
  "color-checkbox-bg-surface-disabled": {
    value: blackAlpha[7]
  },
  "color-checkbox-icon-disabled": {
    value: gray[1]
  },
  "color-input-bg-surface": {
    value: gray[2]
  },
  "color-input-bg-surface-hover": {
    value: gray[3]
  },
  "color-input-bg-surface-active": {
    value: gray[4]
  },
  "color-input-border": {
    value: gray[12]
  },
  "color-input-border-hover": {
    value: gray[13]
  },
  "color-input-border-active": {
    value: gray[16]
  },
  "color-nav-bg": {
    value: gray[7]
  },
  "color-nav-bg-surface": {
    value: blackAlpha[3]
  },
  "color-nav-bg-surface-hover": {
    value: gray[6]
  },
  "color-nav-bg-surface-active": {
    value: gray[3]
  },
  "color-nav-bg-surface-selected": {
    value: gray[3]
  },
  "color-radio-button-bg-surface-disabled": {
    value: blackAlpha[7]
  },
  "color-radio-button-icon-disabled": {
    value: gray[1]
  },
  "color-video-thumbnail-play-button-bg-fill-hover": {
    value: blackAlpha[15]
  },
  "color-video-thumbnail-play-button-bg-fill": {
    value: blackAlpha[14]
  },
  "color-video-thumbnail-play-button-text-on-bg-fill": {
    value: gray[1]
  }
};

// node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/font.mjs
var font = {
  "font-family-sans": {
    value: "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif"
  },
  "font-family-mono": {
    value: "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace"
  },
  "font-size-275": {
    value: size[275]
  },
  "font-size-300": {
    value: size[300]
  },
  "font-size-325": {
    value: size[325]
  },
  "font-size-350": {
    value: size[350]
  },
  "font-size-400": {
    value: size[400]
  },
  "font-size-500": {
    value: size[500]
  },
  "font-size-600": {
    value: size[600]
  },
  "font-size-750": {
    value: size[750]
  },
  "font-size-900": {
    value: size[900]
  },
  "font-size-1000": {
    value: size[1e3]
  },
  "font-weight-regular": {
    value: "450"
  },
  "font-weight-medium": {
    value: "550"
  },
  "font-weight-semibold": {
    value: "650"
  },
  "font-weight-bold": {
    value: "700"
  },
  "font-letter-spacing-densest": {
    value: "-0.54px"
  },
  "font-letter-spacing-denser": {
    value: "-0.3px"
  },
  "font-letter-spacing-dense": {
    value: "-0.2px"
  },
  "font-letter-spacing-normal": {
    value: "0px"
  },
  "font-line-height-300": {
    value: size[300]
  },
  "font-line-height-400": {
    value: size[400]
  },
  "font-line-height-500": {
    value: size[500]
  },
  "font-line-height-600": {
    value: size[600]
  },
  "font-line-height-700": {
    value: size[700]
  },
  "font-line-height-800": {
    value: size[800]
  },
  "font-line-height-1000": {
    value: size[1e3]
  },
  "font-line-height-1200": {
    value: size[1200]
  }
};

// node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/height.mjs
var height = {
  "height-0": {
    value: size[0]
  },
  "height-025": {
    value: size["025"]
  },
  "height-050": {
    value: size["050"]
  },
  "height-100": {
    value: size[100]
  },
  "height-150": {
    value: size[150]
  },
  "height-200": {
    value: size[200]
  },
  "height-300": {
    value: size[300]
  },
  "height-400": {
    value: size[400]
  },
  "height-500": {
    value: size[500]
  },
  "height-600": {
    value: size[600]
  },
  "height-700": {
    value: size[700]
  },
  "height-800": {
    value: size[800]
  },
  "height-900": {
    value: size[900]
  },
  "height-1000": {
    value: size[1e3]
  },
  "height-1200": {
    value: size[1200]
  },
  "height-1600": {
    value: size[1600]
  },
  "height-2000": {
    value: size[2e3]
  },
  "height-2400": {
    value: size[2400]
  },
  "height-2800": {
    value: size[2800]
  },
  "height-3200": {
    value: size[3200]
  }
};

// node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/motion.mjs
var motion = {
  "motion-duration-0": {
    value: "0ms"
  },
  "motion-duration-50": {
    value: "50ms"
  },
  "motion-duration-100": {
    value: "100ms"
  },
  "motion-duration-150": {
    value: "150ms"
  },
  "motion-duration-200": {
    value: "200ms"
  },
  "motion-duration-250": {
    value: "250ms"
  },
  "motion-duration-300": {
    value: "300ms"
  },
  "motion-duration-350": {
    value: "350ms"
  },
  "motion-duration-400": {
    value: "400ms"
  },
  "motion-duration-450": {
    value: "450ms"
  },
  "motion-duration-500": {
    value: "500ms"
  },
  "motion-duration-5000": {
    value: "5000ms"
  },
  "motion-ease": {
    value: "cubic-bezier(0.25, 0.1, 0.25, 1)",
    description: "Responds quickly and finishes with control. A great default for any user interaction."
  },
  "motion-ease-in": {
    value: "cubic-bezier(0.42, 0, 1, 1)",
    description: "Starts slowly and finishes at top speed. Use sparingly."
  },
  "motion-ease-out": {
    value: "cubic-bezier(0.19, 0.91, 0.38, 1)",
    description: "Starts at top speed and finishes slowly. Use sparingly."
  },
  "motion-ease-in-out": {
    value: "cubic-bezier(0.42, 0, 0.58, 1)",
    description: "Starts and finishes with equal speed. A good default for transitions triggered by the system."
  },
  "motion-linear": {
    value: "cubic-bezier(0, 0, 1, 1)",
    description: "Moves with constant speed. Use for continuous and mechanical animations, such as rotating spinners."
  },
  "motion-keyframes-bounce": {
    value: "{ from, 65%, 85% { transform: scale(1) } 75% { transform: scale(0.85) } 82.5% { transform: scale(1.05) } }"
  },
  "motion-keyframes-fade-in": {
    value: "{ to { opacity: 1 } }"
  },
  "motion-keyframes-pulse": {
    value: "{ from, 75% { transform: scale(0.85); opacity: 1; } to { transform: scale(2.5); opacity: 0; } }"
  },
  "motion-keyframes-spin": {
    value: "{ to { transform: rotate(1turn) } }"
  },
  "motion-keyframes-appear-above": {
    value: "{ from { transform: translateY(var(--p-space-100)); opacity: 0; } to { transform: none; opacity: 1; } }"
  },
  "motion-keyframes-appear-below": {
    value: "{ from { transform: translateY(calc(var(--p-space-100) * -1)); opacity: 0; } to { transform: none; opacity: 1; } }"
  }
};

// node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/shadow.mjs
var shadow = {
  "shadow-0": {
    value: "none"
  },
  "shadow-100": {
    value: "0px 1px 0px 0px rgba(26, 26, 26, 0.07)"
  },
  "shadow-200": {
    value: "0px 3px 1px -1px rgba(26, 26, 26, 0.07)"
  },
  "shadow-300": {
    value: "0px 4px 6px -2px rgba(26, 26, 26, 0.20)"
  },
  "shadow-400": {
    value: "0px 8px 16px -4px rgba(26, 26, 26, 0.22)"
  },
  "shadow-500": {
    value: "0px 12px 20px -8px rgba(26, 26, 26, 0.24)"
  },
  "shadow-600": {
    value: "0px 20px 20px -8px rgba(26, 26, 26, 0.28)"
  },
  "shadow-bevel-100": {
    value: "1px 0px 0px 0px rgba(0, 0, 0, 0.13) inset, -1px 0px 0px 0px rgba(0, 0, 0, 0.13) inset, 0px -1px 0px 0px rgba(0, 0, 0, 0.17) inset, 0px 1px 0px 0px rgba(204, 204, 204, 0.5) inset"
  },
  "shadow-inset-100": {
    value: "0px 1px 2px 0px rgba(26, 26, 26, 0.15) inset, 0px 1px 1px 0px rgba(26, 26, 26, 0.15) inset"
  },
  "shadow-inset-200": {
    value: "0px 2px 1px 0px rgba(26, 26, 26, 0.20) inset, 1px 0px 1px 0px rgba(26, 26, 26, 0.12) inset, -1px 0px 1px 0px rgba(26, 26, 26, 0.12) inset"
  },
  "shadow-button": {
    value: "0px 1px 0px 0px #E3E3E3 inset, 1px 0px 0px 0px #E3E3E3 inset, -1px 0px 0px 0px #E3E3E3 inset, 0px -1px 0px 0px #B5B5B5 inset"
  },
  "shadow-button-hover": {
    value: "0px 1px 0px 0px #EBEBEB inset, -1px 0px 0px 0px #EBEBEB inset, 1px 0px 0px 0px #EBEBEB inset, 0px -1px 0px 0px #CCC inset"
  },
  "shadow-button-inset": {
    value: "0px 2px 1px 0px rgba(26, 26, 26, 0.20) inset, 1px 0px 1px 0px rgba(26, 26, 26, 0.12) inset, -1px 0px 1px 0px rgba(26, 26, 26, 0.12) inset"
  },
  "shadow-button-primary": {
    value: "0px 2px 0px 0px rgba(255, 255, 255, 0.2) inset, 2px 0px 0px 0px rgba(255, 255, 255, 0.2) inset, -2px 0px 0px 0px rgba(255, 255, 255, 0.2) inset, 0px -1px 0px 1px #000 inset, 0px 1px 0px 0px #000 inset"
  },
  "shadow-button-primary-hover": {
    value: "0px 1px 0px 0px rgba(255, 255, 255, 0.24) inset, 1px 0px 0px 0px rgba(255, 255, 255, 0.20) inset, -1px 0px 0px 0px rgba(255, 255, 255, 0.20) inset, 0px -1px 0px 0px #000 inset, 0px -1px 0px 1px #1A1A1A"
  },
  "shadow-button-primary-inset": {
    value: "0px 3px 0px 0px #000 inset"
  },
  "shadow-button-primary-critical": {
    value: "0px 1px 0px 0px rgba(255, 255, 255, 0.48) inset, -1px 0px 0px 0px rgba(255, 255, 255, 0.20) inset, 1px 0px 0px 0px rgba(255, 255, 255, 0.20) inset, 0px -1.5px 0px 0px rgba(0, 0, 0, 0.25) inset"
  },
  "shadow-button-primary-critical-hover": {
    value: "0px 1px 0px 0px rgba(255, 255, 255, 0.48) inset, 1px 0px 0px 0px rgba(255, 255, 255, 0.20) inset, -1px 0px 0px 0px rgba(255, 255, 255, 0.20) inset, 0px -1.5px 0px 0px rgba(0, 0, 0, 0.25) inset"
  },
  "shadow-button-primary-critical-inset": {
    value: "0px 2px 0px 0px rgba(0, 0, 0, 0.60) inset, 1px 0px 1px 0px rgba(0, 0, 0, 0.20) inset, -1px 0px 1px 0px rgba(0, 0, 0, 0.20) inset"
  },
  "shadow-button-primary-success": {
    value: "0px 1px 0px 0px rgba(255, 255, 255, 0.48) inset, -1px 0px 0px 0px rgba(255, 255, 255, 0.20) inset, 1px 0px 0px 0px rgba(255, 255, 255, 0.20) inset, 0px -1.5px 0px 0px rgba(0, 0, 0, 0.25) inset"
  },
  "shadow-button-primary-success-hover": {
    value: "0px 1px 0px 0px rgba(255, 255, 255, 0.48) inset, 1px 0px 0px 0px rgba(255, 255, 255, 0.20) inset, -1px 0px 0px 0px rgba(255, 255, 255, 0.20) inset, 0px -1.5px 0px 0px rgba(0, 0, 0, 0.25) inset"
  },
  "shadow-button-primary-success-inset": {
    value: "0px 2px 0px 0px rgba(0, 0, 0, 0.60) inset, 1px 0px 1px 0px rgba(0, 0, 0, 0.20) inset, -1px 0px 1px 0px rgba(0, 0, 0, 0.20) inset"
  },
  "shadow-border-inset": {
    value: "0px 0px 0px 1px rgba(0, 0, 0, 0.08) inset"
  }
};

// node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/space.mjs
var space = {
  "space-0": {
    value: size[0]
  },
  "space-025": {
    value: size["025"]
  },
  "space-050": {
    value: size["050"]
  },
  "space-100": {
    value: size[100]
  },
  "space-150": {
    value: size[150]
  },
  "space-200": {
    value: size[200]
  },
  "space-300": {
    value: size[300]
  },
  "space-400": {
    value: size[400]
  },
  "space-500": {
    value: size[500]
  },
  "space-600": {
    value: size[600]
  },
  "space-800": {
    value: size[800]
  },
  "space-1000": {
    value: size[1e3]
  },
  "space-1200": {
    value: size[1200]
  },
  "space-1600": {
    value: size[1600]
  },
  "space-2000": {
    value: size[2e3]
  },
  "space-2400": {
    value: size[2400]
  },
  "space-2800": {
    value: size[2800]
  },
  "space-3200": {
    value: size[3200]
  },
  "space-button-group-gap": {
    value: createVar2("space-200")
  },
  "space-card-gap": {
    value: createVar2("space-400")
  },
  "space-card-padding": {
    value: createVar2("space-400")
  },
  "space-table-cell-padding": {
    value: createVar2("space-150")
  }
};
function createVar2(spaceTokenName) {
  return "var(" + createVarName(spaceTokenName) + ")";
}

// node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/text.mjs
var text = {
  // heading-3xl
  "text-heading-3xl-font-family": {
    value: createVar("font-family-sans")
  },
  "text-heading-3xl-font-size": {
    value: createVar("font-size-900")
  },
  "text-heading-3xl-font-weight": {
    value: createVar("font-weight-bold")
  },
  "text-heading-3xl-font-letter-spacing": {
    value: createVar("font-letter-spacing-densest")
  },
  "text-heading-3xl-font-line-height": {
    value: createVar("font-line-height-1200")
  },
  // heading-2xl
  "text-heading-2xl-font-family": {
    value: createVar("font-family-sans")
  },
  "text-heading-2xl-font-size": {
    value: createVar("font-size-750")
  },
  "text-heading-2xl-font-weight": {
    value: createVar("font-weight-bold")
  },
  "text-heading-2xl-font-letter-spacing": {
    value: createVar("font-letter-spacing-denser")
  },
  "text-heading-2xl-font-line-height": {
    value: createVar("font-line-height-1000")
  },
  // heading-xl
  "text-heading-xl-font-family": {
    value: createVar("font-family-sans")
  },
  "text-heading-xl-font-size": {
    value: createVar("font-size-600")
  },
  "text-heading-xl-font-weight": {
    value: createVar("font-weight-bold")
  },
  "text-heading-xl-font-letter-spacing": {
    value: createVar("font-letter-spacing-dense")
  },
  "text-heading-xl-font-line-height": {
    value: createVar("font-line-height-800")
  },
  // heading-lg
  "text-heading-lg-font-family": {
    value: createVar("font-family-sans")
  },
  "text-heading-lg-font-size": {
    value: createVar("font-size-500")
  },
  "text-heading-lg-font-weight": {
    value: createVar("font-weight-semibold")
  },
  "text-heading-lg-font-letter-spacing": {
    value: createVar("font-letter-spacing-dense")
  },
  "text-heading-lg-font-line-height": {
    value: createVar("font-line-height-600")
  },
  // heading-md
  "text-heading-md-font-family": {
    value: createVar("font-family-sans")
  },
  "text-heading-md-font-size": {
    value: createVar("font-size-350")
  },
  "text-heading-md-font-weight": {
    value: createVar("font-weight-semibold")
  },
  "text-heading-md-font-letter-spacing": {
    value: createVar("font-letter-spacing-normal")
  },
  "text-heading-md-font-line-height": {
    value: createVar("font-line-height-500")
  },
  // heading-sm
  "text-heading-sm-font-family": {
    value: createVar("font-family-sans")
  },
  "text-heading-sm-font-size": {
    value: createVar("font-size-325")
  },
  "text-heading-sm-font-weight": {
    value: createVar("font-weight-semibold")
  },
  "text-heading-sm-font-letter-spacing": {
    value: createVar("font-letter-spacing-normal")
  },
  "text-heading-sm-font-line-height": {
    value: createVar("font-line-height-500")
  },
  // body-lg
  "text-body-lg-font-family": {
    value: createVar("font-family-sans")
  },
  "text-body-lg-font-size": {
    value: createVar("font-size-350")
  },
  "text-body-lg-font-weight": {
    value: createVar("font-weight-regular")
  },
  "text-body-lg-font-letter-spacing": {
    value: createVar("font-letter-spacing-normal")
  },
  "text-body-lg-font-line-height": {
    value: createVar("font-line-height-500")
  },
  // body-md
  "text-body-md-font-family": {
    value: createVar("font-family-sans")
  },
  "text-body-md-font-size": {
    value: createVar("font-size-325")
  },
  "text-body-md-font-weight": {
    value: createVar("font-weight-regular")
  },
  "text-body-md-font-letter-spacing": {
    value: createVar("font-letter-spacing-normal")
  },
  "text-body-md-font-line-height": {
    value: createVar("font-line-height-500")
  },
  // body-sm
  "text-body-sm-font-family": {
    value: createVar("font-family-sans")
  },
  "text-body-sm-font-size": {
    value: createVar("font-size-300")
  },
  "text-body-sm-font-weight": {
    value: createVar("font-weight-regular")
  },
  "text-body-sm-font-letter-spacing": {
    value: createVar("font-letter-spacing-normal")
  },
  "text-body-sm-font-line-height": {
    value: createVar("font-line-height-400")
  },
  // body-xs
  "text-body-xs-font-family": {
    value: createVar("font-family-sans")
  },
  "text-body-xs-font-size": {
    value: createVar("font-size-275")
  },
  "text-body-xs-font-weight": {
    value: createVar("font-weight-regular")
  },
  "text-body-xs-font-letter-spacing": {
    value: createVar("font-letter-spacing-normal")
  },
  "text-body-xs-font-line-height": {
    value: createVar("font-line-height-300")
  }
};

// node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/width.mjs
var width = {
  "width-0": {
    value: size[0]
  },
  "width-025": {
    value: size["025"]
  },
  "width-050": {
    value: size["050"]
  },
  "width-100": {
    value: size[100]
  },
  "width-150": {
    value: size[150]
  },
  "width-200": {
    value: size[200]
  },
  "width-300": {
    value: size[300]
  },
  "width-400": {
    value: size[400]
  },
  "width-500": {
    value: size[500]
  },
  "width-600": {
    value: size[600]
  },
  "width-700": {
    value: size[700]
  },
  "width-800": {
    value: size[800]
  },
  "width-900": {
    value: size[900]
  },
  "width-1000": {
    value: size[1e3]
  },
  "width-1200": {
    value: size[1200]
  },
  "width-1600": {
    value: size[1600]
  },
  "width-2000": {
    value: size[2e3]
  },
  "width-2400": {
    value: size[2400]
  },
  "width-2800": {
    value: size[2800]
  },
  "width-3200": {
    value: size[3200]
  }
};

// node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/zIndex.mjs
var zIndex = {
  "z-index-1": {
    value: "100"
  },
  "z-index-2": {
    value: "400"
  },
  "z-index-3": {
    value: "510"
  },
  "z-index-4": {
    value: "512"
  },
  "z-index-5": {
    value: "513"
  },
  "z-index-6": {
    value: "514"
  },
  "z-index-7": {
    value: "515"
  },
  "z-index-8": {
    value: "516"
  },
  "z-index-9": {
    value: "517"
  },
  "z-index-10": {
    value: "518"
  },
  "z-index-11": {
    value: "519"
  },
  "z-index-12": {
    value: "520"
  }
};

// node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/index.mjs
var metaThemeBase = createMetaThemeBase({
  border,
  breakpoints,
  color,
  font,
  height,
  motion,
  shadow,
  space,
  text,
  width,
  zIndex
});

// node_modules/@shopify/polaris-tokens/dist/esm/src/themes/utils.mjs
function createMetaThemePartial(metaThemePartial) {
  return Object.fromEntries(Object.entries(metaThemePartial).map(function(_ref) {
    var _ref2 = _slicedToArray(_ref, 2), tokenGroupName = _ref2[0], tokenGroup = _ref2[1];
    return [tokenGroupName, tokenGroup && tokenGroupNamesToRems.includes(tokenGroupName) ? tokenGroupToRems(tokenGroup) : tokenGroup];
  }));
}
function createMetaTheme(metaThemePartial) {
  return (0, import_deepmerge.default)(metaThemeBase, metaThemePartial);
}
function createThemeClassName(themeName) {
  return "p-theme-" + themeName;
}
function createIsTokenName(theme) {
  var tokenNames = new Set(getTokenNames(theme));
  return function(tokenName) {
    return tokenNames.has(tokenName);
  };
}
createIsTokenName(metaThemeBase);

// node_modules/@shopify/polaris-tokens/dist/esm/src/themes/constants.mjs
var themeNameLight = "light";
var themeNameDefault = themeNameLight;
var themeNames = [themeNameLight, "light-high-contrast-experimental"];

// node_modules/@shopify/polaris-tokens/dist/esm/src/themes/light.mjs
var metaThemeLightPartial = createMetaThemePartial({});
var metaThemeLight = createMetaTheme(metaThemeLightPartial);

// node_modules/@shopify/polaris-tokens/dist/esm/src/themes/light-high-contrast.mjs
var metaThemeLightHighContrastPartial = createMetaThemePartial({
  color: {
    "color-text": {
      value: gray[16]
    },
    "color-text-secondary": {
      value: gray[16]
    },
    "color-text-brand": {
      value: gray[16]
    },
    "color-icon-secondary": {
      value: gray[14]
    },
    "color-border": {
      value: gray[12]
    },
    "color-input-border": {
      value: gray[14]
    },
    "color-border-secondary": {
      value: gray[12]
    },
    "color-bg-surface-secondary": {
      value: gray[6]
    }
  },
  shadow: {
    "shadow-bevel-100": {
      value: "0px 1px 0px 0px rgba(26, 26, 26, 0.07), 0px 1px 0px 0px rgba(208, 208, 208, 0.40) inset, 1px 0px 0px 0px #CCC inset, -1px 0px 0px 0px #CCC inset, 0px -1px 0px 0px #999 inset"
    }
  }
});
var metaThemeLightHighContrast = createMetaTheme(metaThemeLightHighContrastPartial);

// node_modules/@shopify/polaris-tokens/dist/esm/src/themes/index.mjs
var metaThemePartials = {
  light: metaThemeLightPartial,
  "light-high-contrast-experimental": metaThemeLightHighContrastPartial
};
var metaThemeDefaultPartial = metaThemePartials[themeNameDefault];
var metaThemeDefault = createMetaTheme(metaThemeDefaultPartial);

// node_modules/@shopify/polaris-tokens/dist/esm/build/index.mjs
var themes = {
  "light": {
    "border": {
      "border-radius-0": "0rem",
      "border-radius-050": "0.125rem",
      "border-radius-100": "0.25rem",
      "border-radius-150": "0.375rem",
      "border-radius-200": "0.5rem",
      "border-radius-300": "0.75rem",
      "border-radius-400": "1rem",
      "border-radius-500": "1.25rem",
      "border-radius-750": "1.875rem",
      "border-radius-full": "624.9375rem",
      "border-width-0165": "0.04125rem",
      "border-width-025": "0.0625rem",
      "border-width-050": "0.125rem",
      "border-width-100": "0.25rem"
    },
    "breakpoints": {
      "breakpoints-xs": "0rem",
      "breakpoints-sm": "30.625rem",
      "breakpoints-md": "48rem",
      "breakpoints-lg": "65rem",
      "breakpoints-xl": "90rem"
    },
    "color": {
      "color-bg": "rgba(241, 241, 241, 1)",
      "color-bg-inverse": "rgba(26, 26, 26, 1)",
      "color-bg-surface": "rgba(255, 255, 255, 1)",
      "color-bg-surface-hover": "rgba(247, 247, 247, 1)",
      "color-bg-surface-active": "rgba(243, 243, 243, 1)",
      "color-bg-surface-selected": "rgba(241, 241, 241, 1)",
      "color-bg-surface-disabled": "rgba(0, 0, 0, 0.05)",
      "color-bg-surface-secondary": "rgba(247, 247, 247, 1)",
      "color-bg-surface-secondary-hover": "rgba(241, 241, 241, 1)",
      "color-bg-surface-secondary-active": "rgba(235, 235, 235, 1)",
      "color-bg-surface-secondary-selected": "rgba(235, 235, 235, 1)",
      "color-bg-surface-tertiary": "rgba(243, 243, 243, 1)",
      "color-bg-surface-tertiary-hover": "rgba(235, 235, 235, 1)",
      "color-bg-surface-tertiary-active": "rgba(227, 227, 227, 1)",
      "color-bg-surface-brand": "rgba(227, 227, 227, 1)",
      "color-bg-surface-brand-hover": "rgba(235, 235, 235, 1)",
      "color-bg-surface-brand-active": "rgba(241, 241, 241, 1)",
      "color-bg-surface-brand-selected": "rgba(241, 241, 241, 1)",
      "color-bg-surface-info": "rgba(234, 244, 255, 1)",
      "color-bg-surface-info-hover": "rgba(224, 240, 255, 1)",
      "color-bg-surface-info-active": "rgba(202, 230, 255, 1)",
      "color-bg-surface-success": "rgba(205, 254, 225, 1)",
      "color-bg-surface-success-hover": "rgba(180, 254, 210, 1)",
      "color-bg-surface-success-active": "rgba(146, 254, 194, 1)",
      "color-bg-surface-caution": "rgba(255, 248, 219, 1)",
      "color-bg-surface-caution-hover": "rgba(255, 244, 191, 1)",
      "color-bg-surface-caution-active": "rgba(255, 239, 157, 1)",
      "color-bg-surface-warning": "rgba(255, 241, 227, 1)",
      "color-bg-surface-warning-hover": "rgba(255, 235, 213, 1)",
      "color-bg-surface-warning-active": "rgba(255, 228, 198, 1)",
      "color-bg-surface-critical": "rgba(254, 233, 232, 1)",
      "color-bg-surface-critical-hover": "rgba(254, 226, 225, 1)",
      "color-bg-surface-critical-active": "rgba(254, 218, 217, 1)",
      "color-bg-surface-emphasis": "rgba(240, 242, 255, 1)",
      "color-bg-surface-emphasis-hover": "rgba(234, 237, 255, 1)",
      "color-bg-surface-emphasis-active": "rgba(226, 231, 255, 1)",
      "color-bg-surface-magic": "rgba(243, 241, 255, 1)",
      "color-bg-surface-magic-hover": "rgba(239, 236, 255, 1)",
      "color-bg-surface-magic-active": "rgba(228, 222, 255, 1)",
      "color-bg-surface-inverse": "rgba(48, 48, 48, 1)",
      "color-bg-surface-transparent": "rgba(0, 0, 0, 0)",
      "color-bg-fill": "rgba(255, 255, 255, 1)",
      "color-bg-fill-hover": "rgba(250, 250, 250, 1)",
      "color-bg-fill-active": "rgba(247, 247, 247, 1)",
      "color-bg-fill-selected": "rgba(204, 204, 204, 1)",
      "color-bg-fill-disabled": "rgba(0, 0, 0, 0.05)",
      "color-bg-fill-secondary": "rgba(241, 241, 241, 1)",
      "color-bg-fill-secondary-hover": "rgba(235, 235, 235, 1)",
      "color-bg-fill-secondary-active": "rgba(227, 227, 227, 1)",
      "color-bg-fill-tertiary": "rgba(227, 227, 227, 1)",
      "color-bg-fill-tertiary-hover": "rgba(212, 212, 212, 1)",
      "color-bg-fill-tertiary-active": "rgba(204, 204, 204, 1)",
      "color-bg-fill-brand": "rgba(48, 48, 48, 1)",
      "color-bg-fill-brand-hover": "rgba(26, 26, 26, 1)",
      "color-bg-fill-brand-active": "rgba(26, 26, 26, 1)",
      "color-bg-fill-brand-selected": "rgba(48, 48, 48, 1)",
      "color-bg-fill-brand-disabled": "rgba(0, 0, 0, 0.17)",
      "color-bg-fill-info": "rgba(145, 208, 255, 1)",
      "color-bg-fill-info-hover": "rgba(81, 192, 255, 1)",
      "color-bg-fill-info-active": "rgba(0, 148, 213, 1)",
      "color-bg-fill-info-secondary": "rgba(224, 240, 255, 1)",
      "color-bg-fill-success": "rgba(41, 132, 90, 1)",
      "color-bg-fill-success-hover": "rgba(19, 111, 69, 1)",
      "color-bg-fill-success-active": "rgba(12, 81, 50, 1)",
      "color-bg-fill-success-secondary": "rgba(205, 254, 225, 1)",
      "color-bg-fill-warning": "rgba(255, 184, 0, 1)",
      "color-bg-fill-warning-hover": "rgba(229, 165, 0, 1)",
      "color-bg-fill-warning-active": "rgba(178, 132, 0, 1)",
      "color-bg-fill-warning-secondary": "rgba(255, 214, 164, 1)",
      "color-bg-fill-caution": "rgba(255, 230, 0, 1)",
      "color-bg-fill-caution-hover": "rgba(234, 211, 0, 1)",
      "color-bg-fill-caution-active": "rgba(225, 203, 0, 1)",
      "color-bg-fill-caution-secondary": "rgba(255, 239, 157, 1)",
      "color-bg-fill-critical": "rgba(229, 28, 0, 1)",
      "color-bg-fill-critical-hover": "rgba(181, 38, 11, 1)",
      "color-bg-fill-critical-active": "rgba(142, 31, 11, 1)",
      "color-bg-fill-critical-selected": "rgba(142, 31, 11, 1)",
      "color-bg-fill-critical-secondary": "rgba(254, 218, 217, 1)",
      "color-bg-fill-emphasis": "rgba(0, 91, 211, 1)",
      "color-bg-fill-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-bg-fill-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-bg-fill-magic": "rgba(128, 81, 255, 1)",
      "color-bg-fill-magic-secondary": "rgba(228, 222, 255, 1)",
      "color-bg-fill-magic-secondary-hover": "rgba(223, 217, 255, 1)",
      "color-bg-fill-magic-secondary-active": "rgba(212, 204, 255, 1)",
      "color-bg-fill-inverse": "rgba(48, 48, 48, 1)",
      "color-bg-fill-inverse-hover": "rgba(74, 74, 74, 1)",
      "color-bg-fill-inverse-active": "rgba(97, 97, 97, 1)",
      "color-bg-fill-transparent": "rgba(0, 0, 0, 0.02)",
      "color-bg-fill-transparent-hover": "rgba(0, 0, 0, 0.05)",
      "color-bg-fill-transparent-active": "rgba(0, 0, 0, 0.08)",
      "color-bg-fill-transparent-selected": "rgba(0, 0, 0, 0.08)",
      "color-bg-fill-transparent-secondary": "rgba(0, 0, 0, 0.06)",
      "color-bg-fill-transparent-secondary-hover": "rgba(0, 0, 0, 0.08)",
      "color-bg-fill-transparent-secondary-active": "rgba(0, 0, 0, 0.11)",
      "color-text": "rgba(48, 48, 48, 1)",
      "color-text-secondary": "rgba(97, 97, 97, 1)",
      "color-text-disabled": "rgba(181, 181, 181, 1)",
      "color-text-link": "rgba(0, 91, 211, 1)",
      "color-text-link-hover": "rgba(0, 66, 153, 1)",
      "color-text-link-active": "rgba(0, 46, 106, 1)",
      "color-text-brand": "rgba(74, 74, 74, 1)",
      "color-text-brand-hover": "rgba(48, 48, 48, 1)",
      "color-text-brand-on-bg-fill": "rgba(255, 255, 255, 1)",
      "color-text-brand-on-bg-fill-hover": "rgba(227, 227, 227, 1)",
      "color-text-brand-on-bg-fill-active": "rgba(204, 204, 204, 1)",
      "color-text-brand-on-bg-fill-disabled": "rgba(255, 255, 255, 1)",
      "color-text-info": "rgba(0, 82, 124, 1)",
      "color-text-info-hover": "rgba(0, 58, 90, 1)",
      "color-text-info-active": "rgba(0, 33, 51, 1)",
      "color-text-info-on-bg-fill": "rgba(0, 33, 51, 1)",
      "color-text-success": "rgba(12, 81, 50, 1)",
      "color-text-success-hover": "rgba(8, 61, 37, 1)",
      "color-text-success-active": "rgba(9, 42, 27, 1)",
      "color-text-success-on-bg-fill": "rgba(248, 255, 251, 1)",
      "color-text-caution": "rgba(79, 71, 0, 1)",
      "color-text-caution-hover": "rgba(51, 46, 0, 1)",
      "color-text-caution-active": "rgba(31, 28, 0, 1)",
      "color-text-caution-on-bg-fill": "rgba(51, 46, 0, 1)",
      "color-text-warning": "rgba(94, 66, 0, 1)",
      "color-text-warning-hover": "rgba(65, 45, 0, 1)",
      "color-text-warning-active": "rgba(37, 26, 0, 1)",
      "color-text-warning-on-bg-fill": "rgba(37, 26, 0, 1)",
      "color-text-critical": "rgba(142, 31, 11, 1)",
      "color-text-critical-hover": "rgba(95, 21, 7, 1)",
      "color-text-critical-active": "rgba(47, 10, 4, 1)",
      "color-text-critical-on-bg-fill": "rgba(255, 251, 251, 1)",
      "color-text-emphasis": "rgba(0, 91, 211, 1)",
      "color-text-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-text-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-text-emphasis-on-bg-fill": "rgba(252, 253, 255, 1)",
      "color-text-emphasis-on-bg-fill-hover": "rgba(226, 231, 255, 1)",
      "color-text-emphasis-on-bg-fill-active": "rgba(213, 220, 255, 1)",
      "color-text-magic": "rgba(87, 0, 209, 1)",
      "color-text-magic-on-bg-fill": "rgba(253, 253, 255, 1)",
      "color-text-inverse": "rgba(227, 227, 227, 1)",
      "color-text-inverse-secondary": "rgba(181, 181, 181, 1)",
      "color-text-link-inverse": "rgba(197, 208, 255, 1)",
      "color-border": "rgba(227, 227, 227, 1)",
      "color-border-hover": "rgba(204, 204, 204, 1)",
      "color-border-disabled": "rgba(235, 235, 235, 1)",
      "color-border-secondary": "rgba(235, 235, 235, 1)",
      "color-border-tertiary": "rgba(204, 204, 204, 1)",
      "color-border-focus": "rgba(0, 91, 211, 1)",
      "color-border-brand": "rgba(227, 227, 227, 1)",
      "color-border-info": "rgba(168, 216, 255, 1)",
      "color-border-success": "rgba(146, 254, 194, 1)",
      "color-border-caution": "rgba(255, 235, 120, 1)",
      "color-border-warning": "rgba(255, 200, 121, 1)",
      "color-border-critical": "rgba(254, 195, 193, 1)",
      "color-border-critical-secondary": "rgba(142, 31, 11, 1)",
      "color-border-emphasis": "rgba(0, 91, 211, 1)",
      "color-border-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-border-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-border-magic": "rgba(170, 149, 255, 1)",
      "color-border-magic-secondary": "rgba(128, 81, 255, 1)",
      "color-border-inverse": "rgba(97, 97, 97, 1)",
      "color-border-inverse-hover": "rgba(204, 204, 204, 1)",
      "color-border-inverse-active": "rgba(227, 227, 227, 1)",
      "color-icon": "rgba(74, 74, 74, 1)",
      "color-icon-hover": "rgba(48, 48, 48, 1)",
      "color-icon-active": "rgba(26, 26, 26, 1)",
      "color-icon-disabled": "rgba(204, 204, 204, 1)",
      "color-icon-secondary": "rgba(138, 138, 138, 1)",
      "color-icon-secondary-hover": "rgba(97, 97, 97, 1)",
      "color-icon-secondary-active": "rgba(74, 74, 74, 1)",
      "color-icon-brand": "rgba(26, 26, 26, 1)",
      "color-icon-info": "rgba(0, 148, 213, 1)",
      "color-icon-success": "rgba(41, 132, 90, 1)",
      "color-icon-caution": "rgba(153, 138, 0, 1)",
      "color-icon-warning": "rgba(178, 132, 0, 1)",
      "color-icon-critical": "rgba(239, 77, 47, 1)",
      "color-icon-emphasis": "rgba(0, 91, 211, 1)",
      "color-icon-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-icon-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-icon-magic": "rgba(128, 81, 255, 1)",
      "color-icon-inverse": "rgba(227, 227, 227, 1)",
      "color-avatar-bg-fill": "rgba(181, 181, 181, 1)",
      "color-avatar-five-bg-fill": "rgba(254, 209, 221, 1)",
      "color-avatar-five-text-on-bg-fill": "rgba(141, 4, 72, 1)",
      "color-avatar-four-bg-fill": "rgba(192, 225, 255, 1)",
      "color-avatar-four-text-on-bg-fill": "rgba(0, 82, 124, 1)",
      "color-avatar-one-bg-fill": "rgba(251, 207, 251, 1)",
      "color-avatar-one-text-on-bg-fill": "rgba(121, 26, 121, 1)",
      "color-avatar-text-on-bg-fill": "rgba(255, 255, 255, 1)",
      "color-avatar-three-bg-fill": "rgba(146, 237, 222, 1)",
      "color-avatar-three-text-on-bg-fill": "rgba(9, 83, 70, 1)",
      "color-avatar-two-bg-fill": "rgba(56, 250, 163, 1)",
      "color-avatar-two-text-on-bg-fill": "rgba(12, 81, 50, 1)",
      "color-backdrop-bg": "rgba(0, 0, 0, 0.71)",
      "color-checkbox-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
      "color-checkbox-icon-disabled": "rgba(255, 255, 255, 1)",
      "color-input-bg-surface": "rgba(253, 253, 253, 1)",
      "color-input-bg-surface-hover": "rgba(250, 250, 250, 1)",
      "color-input-bg-surface-active": "rgba(247, 247, 247, 1)",
      "color-input-border": "rgba(138, 138, 138, 1)",
      "color-input-border-hover": "rgba(97, 97, 97, 1)",
      "color-input-border-active": "rgba(26, 26, 26, 1)",
      "color-nav-bg": "rgba(235, 235, 235, 1)",
      "color-nav-bg-surface": "rgba(0, 0, 0, 0.02)",
      "color-nav-bg-surface-hover": "rgba(241, 241, 241, 1)",
      "color-nav-bg-surface-active": "rgba(250, 250, 250, 1)",
      "color-nav-bg-surface-selected": "rgba(250, 250, 250, 1)",
      "color-radio-button-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
      "color-radio-button-icon-disabled": "rgba(255, 255, 255, 1)",
      "color-video-thumbnail-play-button-bg-fill-hover": "rgba(0, 0, 0, 0.81)",
      "color-video-thumbnail-play-button-bg-fill": "rgba(0, 0, 0, 0.71)",
      "color-video-thumbnail-play-button-text-on-bg-fill": "rgba(255, 255, 255, 1)"
    },
    "font": {
      "font-family-sans": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "font-family-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace",
      "font-size-275": "0.6875rem",
      "font-size-300": "0.75rem",
      "font-size-325": "0.8125rem",
      "font-size-350": "0.875rem",
      "font-size-400": "1rem",
      "font-size-500": "1.25rem",
      "font-size-600": "1.5rem",
      "font-size-750": "1.875rem",
      "font-size-900": "2.25rem",
      "font-size-1000": "2.5rem",
      "font-weight-regular": "450",
      "font-weight-medium": "550",
      "font-weight-semibold": "650",
      "font-weight-bold": "700",
      "font-letter-spacing-densest": "-0.03375rem",
      "font-letter-spacing-denser": "-0.01875rem",
      "font-letter-spacing-dense": "-0.0125rem",
      "font-letter-spacing-normal": "0rem",
      "font-line-height-300": "0.75rem",
      "font-line-height-400": "1rem",
      "font-line-height-500": "1.25rem",
      "font-line-height-600": "1.5rem",
      "font-line-height-700": "1.75rem",
      "font-line-height-800": "2rem",
      "font-line-height-1000": "2.5rem",
      "font-line-height-1200": "3rem"
    },
    "height": {
      "height-0": "0rem",
      "height-025": "0.0625rem",
      "height-050": "0.125rem",
      "height-100": "0.25rem",
      "height-150": "0.375rem",
      "height-200": "0.5rem",
      "height-300": "0.75rem",
      "height-400": "1rem",
      "height-500": "1.25rem",
      "height-600": "1.5rem",
      "height-700": "1.75rem",
      "height-800": "2rem",
      "height-900": "2.25rem",
      "height-1000": "2.5rem",
      "height-1200": "3rem",
      "height-1600": "4rem",
      "height-2000": "5rem",
      "height-2400": "6rem",
      "height-2800": "7rem",
      "height-3200": "8rem"
    },
    "motion": {
      "motion-duration-0": "0ms",
      "motion-duration-50": "50ms",
      "motion-duration-100": "100ms",
      "motion-duration-150": "150ms",
      "motion-duration-200": "200ms",
      "motion-duration-250": "250ms",
      "motion-duration-300": "300ms",
      "motion-duration-350": "350ms",
      "motion-duration-400": "400ms",
      "motion-duration-450": "450ms",
      "motion-duration-500": "500ms",
      "motion-duration-5000": "5000ms",
      "motion-ease": "cubic-bezier(0.25, 0.1, 0.25, 1)",
      "motion-ease-in": "cubic-bezier(0.42, 0, 1, 1)",
      "motion-ease-out": "cubic-bezier(0.19, 0.91, 0.38, 1)",
      "motion-ease-in-out": "cubic-bezier(0.42, 0, 0.58, 1)",
      "motion-linear": "cubic-bezier(0, 0, 1, 1)",
      "motion-keyframes-bounce": "{ from, 65%, 85% { transform: scale(1) } 75% { transform: scale(0.85) } 82.5% { transform: scale(1.05) } }",
      "motion-keyframes-fade-in": "{ to { opacity: 1 } }",
      "motion-keyframes-pulse": "{ from, 75% { transform: scale(0.85); opacity: 1; } to { transform: scale(2.5); opacity: 0; } }",
      "motion-keyframes-spin": "{ to { transform: rotate(1turn) } }",
      "motion-keyframes-appear-above": "{ from { transform: translateY(var(--p-space-100)); opacity: 0; } to { transform: none; opacity: 1; } }",
      "motion-keyframes-appear-below": "{ from { transform: translateY(calc(var(--p-space-100) * -1)); opacity: 0; } to { transform: none; opacity: 1; } }"
    },
    "shadow": {
      "shadow-0": "none",
      "shadow-100": "0rem 0.0625rem 0rem 0rem rgba(26, 26, 26, 0.07)",
      "shadow-200": "0rem 0.1875rem 0.0625rem -0.0625rem rgba(26, 26, 26, 0.07)",
      "shadow-300": "0rem 0.25rem 0.375rem -0.125rem rgba(26, 26, 26, 0.20)",
      "shadow-400": "0rem 0.5rem 1rem -0.25rem rgba(26, 26, 26, 0.22)",
      "shadow-500": "0rem 0.75rem 1.25rem -0.5rem rgba(26, 26, 26, 0.24)",
      "shadow-600": "0rem 1.25rem 1.25rem -0.5rem rgba(26, 26, 26, 0.28)",
      "shadow-bevel-100": "0.0625rem 0rem 0rem 0rem rgba(0, 0, 0, 0.13) inset, -0.0625rem 0rem 0rem 0rem rgba(0, 0, 0, 0.13) inset, 0rem -0.0625rem 0rem 0rem rgba(0, 0, 0, 0.17) inset, 0rem 0.0625rem 0rem 0rem rgba(204, 204, 204, 0.5) inset",
      "shadow-inset-100": "0rem 0.0625rem 0.125rem 0rem rgba(26, 26, 26, 0.15) inset, 0rem 0.0625rem 0.0625rem 0rem rgba(26, 26, 26, 0.15) inset",
      "shadow-inset-200": "0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.20) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset, -0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset",
      "shadow-button": "0rem 0.0625rem 0rem 0rem #E3E3E3 inset, 0.0625rem 0rem 0rem 0rem #E3E3E3 inset, -0.0625rem 0rem 0rem 0rem #E3E3E3 inset, 0rem -0.0625rem 0rem 0rem #B5B5B5 inset",
      "shadow-button-hover": "0rem 0.0625rem 0rem 0rem #EBEBEB inset, -0.0625rem 0rem 0rem 0rem #EBEBEB inset, 0.0625rem 0rem 0rem 0rem #EBEBEB inset, 0rem -0.0625rem 0rem 0rem #CCC inset",
      "shadow-button-inset": "0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.20) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset, -0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset",
      "shadow-button-primary": "0rem 0.125rem 0rem 0rem rgba(255, 255, 255, 0.2) inset, 0.125rem 0rem 0rem 0rem rgba(255, 255, 255, 0.2) inset, -0.125rem 0rem 0rem 0rem rgba(255, 255, 255, 0.2) inset, 0rem -0.0625rem 0rem 0.0625rem #000 inset, 0rem 0.0625rem 0rem 0rem #000 inset",
      "shadow-button-primary-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.24) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.0625rem 0rem 0rem #000 inset, 0rem -0.0625rem 0rem 0.0625rem #1A1A1A",
      "shadow-button-primary-inset": "0rem 0.1875rem 0rem 0rem #000 inset",
      "shadow-button-primary-critical": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
      "shadow-button-primary-critical-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
      "shadow-button-primary-critical-inset": "0rem 0.125rem 0rem 0rem rgba(0, 0, 0, 0.60) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.20) inset, -0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.20) inset",
      "shadow-button-primary-success": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
      "shadow-button-primary-success-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
      "shadow-button-primary-success-inset": "0rem 0.125rem 0rem 0rem rgba(0, 0, 0, 0.60) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.20) inset, -0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.20) inset",
      "shadow-border-inset": "0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.08) inset"
    },
    "space": {
      "space-0": "0rem",
      "space-025": "0.0625rem",
      "space-050": "0.125rem",
      "space-100": "0.25rem",
      "space-150": "0.375rem",
      "space-200": "0.5rem",
      "space-300": "0.75rem",
      "space-400": "1rem",
      "space-500": "1.25rem",
      "space-600": "1.5rem",
      "space-800": "2rem",
      "space-1000": "2.5rem",
      "space-1200": "3rem",
      "space-1600": "4rem",
      "space-2000": "5rem",
      "space-2400": "6rem",
      "space-2800": "7rem",
      "space-3200": "8rem",
      "space-button-group-gap": "0.5rem",
      "space-card-gap": "1rem",
      "space-card-padding": "1rem",
      "space-table-cell-padding": "0.375rem"
    },
    "text": {
      "text-heading-3xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-3xl-font-size": "2.25rem",
      "text-heading-3xl-font-weight": "700",
      "text-heading-3xl-font-letter-spacing": "-0.03375rem",
      "text-heading-3xl-font-line-height": "3rem",
      "text-heading-2xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-2xl-font-size": "1.875rem",
      "text-heading-2xl-font-weight": "700",
      "text-heading-2xl-font-letter-spacing": "-0.01875rem",
      "text-heading-2xl-font-line-height": "2.5rem",
      "text-heading-xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-xl-font-size": "1.5rem",
      "text-heading-xl-font-weight": "700",
      "text-heading-xl-font-letter-spacing": "-0.0125rem",
      "text-heading-xl-font-line-height": "2rem",
      "text-heading-lg-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-lg-font-size": "1.25rem",
      "text-heading-lg-font-weight": "650",
      "text-heading-lg-font-letter-spacing": "-0.0125rem",
      "text-heading-lg-font-line-height": "1.5rem",
      "text-heading-md-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-md-font-size": "0.875rem",
      "text-heading-md-font-weight": "650",
      "text-heading-md-font-letter-spacing": "0rem",
      "text-heading-md-font-line-height": "1.25rem",
      "text-heading-sm-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-sm-font-size": "0.8125rem",
      "text-heading-sm-font-weight": "650",
      "text-heading-sm-font-letter-spacing": "0rem",
      "text-heading-sm-font-line-height": "1.25rem",
      "text-body-lg-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-lg-font-size": "0.875rem",
      "text-body-lg-font-weight": "450",
      "text-body-lg-font-letter-spacing": "0rem",
      "text-body-lg-font-line-height": "1.25rem",
      "text-body-md-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-md-font-size": "0.8125rem",
      "text-body-md-font-weight": "450",
      "text-body-md-font-letter-spacing": "0rem",
      "text-body-md-font-line-height": "1.25rem",
      "text-body-sm-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-sm-font-size": "0.75rem",
      "text-body-sm-font-weight": "450",
      "text-body-sm-font-letter-spacing": "0rem",
      "text-body-sm-font-line-height": "1rem",
      "text-body-xs-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-xs-font-size": "0.6875rem",
      "text-body-xs-font-weight": "450",
      "text-body-xs-font-letter-spacing": "0rem",
      "text-body-xs-font-line-height": "0.75rem"
    },
    "width": {
      "width-0": "0rem",
      "width-025": "0.0625rem",
      "width-050": "0.125rem",
      "width-100": "0.25rem",
      "width-150": "0.375rem",
      "width-200": "0.5rem",
      "width-300": "0.75rem",
      "width-400": "1rem",
      "width-500": "1.25rem",
      "width-600": "1.5rem",
      "width-700": "1.75rem",
      "width-800": "2rem",
      "width-900": "2.25rem",
      "width-1000": "2.5rem",
      "width-1200": "3rem",
      "width-1600": "4rem",
      "width-2000": "5rem",
      "width-2400": "6rem",
      "width-2800": "7rem",
      "width-3200": "8rem"
    },
    "zIndex": {
      "z-index-1": "100",
      "z-index-2": "400",
      "z-index-3": "510",
      "z-index-4": "512",
      "z-index-5": "513",
      "z-index-6": "514",
      "z-index-7": "515",
      "z-index-8": "516",
      "z-index-9": "517",
      "z-index-10": "518",
      "z-index-11": "519",
      "z-index-12": "520"
    }
  },
  "light-high-contrast-experimental": {
    "border": {
      "border-radius-0": "0rem",
      "border-radius-050": "0.125rem",
      "border-radius-100": "0.25rem",
      "border-radius-150": "0.375rem",
      "border-radius-200": "0.5rem",
      "border-radius-300": "0.75rem",
      "border-radius-400": "1rem",
      "border-radius-500": "1.25rem",
      "border-radius-750": "1.875rem",
      "border-radius-full": "624.9375rem",
      "border-width-0165": "0.04125rem",
      "border-width-025": "0.0625rem",
      "border-width-050": "0.125rem",
      "border-width-100": "0.25rem"
    },
    "breakpoints": {
      "breakpoints-xs": "0rem",
      "breakpoints-sm": "30.625rem",
      "breakpoints-md": "48rem",
      "breakpoints-lg": "65rem",
      "breakpoints-xl": "90rem"
    },
    "color": {
      "color-bg": "rgba(241, 241, 241, 1)",
      "color-bg-inverse": "rgba(26, 26, 26, 1)",
      "color-bg-surface": "rgba(255, 255, 255, 1)",
      "color-bg-surface-hover": "rgba(247, 247, 247, 1)",
      "color-bg-surface-active": "rgba(243, 243, 243, 1)",
      "color-bg-surface-selected": "rgba(241, 241, 241, 1)",
      "color-bg-surface-disabled": "rgba(0, 0, 0, 0.05)",
      "color-bg-surface-secondary": "rgba(241, 241, 241, 1)",
      "color-bg-surface-secondary-hover": "rgba(241, 241, 241, 1)",
      "color-bg-surface-secondary-active": "rgba(235, 235, 235, 1)",
      "color-bg-surface-secondary-selected": "rgba(235, 235, 235, 1)",
      "color-bg-surface-tertiary": "rgba(243, 243, 243, 1)",
      "color-bg-surface-tertiary-hover": "rgba(235, 235, 235, 1)",
      "color-bg-surface-tertiary-active": "rgba(227, 227, 227, 1)",
      "color-bg-surface-brand": "rgba(227, 227, 227, 1)",
      "color-bg-surface-brand-hover": "rgba(235, 235, 235, 1)",
      "color-bg-surface-brand-active": "rgba(241, 241, 241, 1)",
      "color-bg-surface-brand-selected": "rgba(241, 241, 241, 1)",
      "color-bg-surface-info": "rgba(234, 244, 255, 1)",
      "color-bg-surface-info-hover": "rgba(224, 240, 255, 1)",
      "color-bg-surface-info-active": "rgba(202, 230, 255, 1)",
      "color-bg-surface-success": "rgba(205, 254, 225, 1)",
      "color-bg-surface-success-hover": "rgba(180, 254, 210, 1)",
      "color-bg-surface-success-active": "rgba(146, 254, 194, 1)",
      "color-bg-surface-caution": "rgba(255, 248, 219, 1)",
      "color-bg-surface-caution-hover": "rgba(255, 244, 191, 1)",
      "color-bg-surface-caution-active": "rgba(255, 239, 157, 1)",
      "color-bg-surface-warning": "rgba(255, 241, 227, 1)",
      "color-bg-surface-warning-hover": "rgba(255, 235, 213, 1)",
      "color-bg-surface-warning-active": "rgba(255, 228, 198, 1)",
      "color-bg-surface-critical": "rgba(254, 233, 232, 1)",
      "color-bg-surface-critical-hover": "rgba(254, 226, 225, 1)",
      "color-bg-surface-critical-active": "rgba(254, 218, 217, 1)",
      "color-bg-surface-emphasis": "rgba(240, 242, 255, 1)",
      "color-bg-surface-emphasis-hover": "rgba(234, 237, 255, 1)",
      "color-bg-surface-emphasis-active": "rgba(226, 231, 255, 1)",
      "color-bg-surface-magic": "rgba(243, 241, 255, 1)",
      "color-bg-surface-magic-hover": "rgba(239, 236, 255, 1)",
      "color-bg-surface-magic-active": "rgba(228, 222, 255, 1)",
      "color-bg-surface-inverse": "rgba(48, 48, 48, 1)",
      "color-bg-surface-transparent": "rgba(0, 0, 0, 0)",
      "color-bg-fill": "rgba(255, 255, 255, 1)",
      "color-bg-fill-hover": "rgba(250, 250, 250, 1)",
      "color-bg-fill-active": "rgba(247, 247, 247, 1)",
      "color-bg-fill-selected": "rgba(204, 204, 204, 1)",
      "color-bg-fill-disabled": "rgba(0, 0, 0, 0.05)",
      "color-bg-fill-secondary": "rgba(241, 241, 241, 1)",
      "color-bg-fill-secondary-hover": "rgba(235, 235, 235, 1)",
      "color-bg-fill-secondary-active": "rgba(227, 227, 227, 1)",
      "color-bg-fill-tertiary": "rgba(227, 227, 227, 1)",
      "color-bg-fill-tertiary-hover": "rgba(212, 212, 212, 1)",
      "color-bg-fill-tertiary-active": "rgba(204, 204, 204, 1)",
      "color-bg-fill-brand": "rgba(48, 48, 48, 1)",
      "color-bg-fill-brand-hover": "rgba(26, 26, 26, 1)",
      "color-bg-fill-brand-active": "rgba(26, 26, 26, 1)",
      "color-bg-fill-brand-selected": "rgba(48, 48, 48, 1)",
      "color-bg-fill-brand-disabled": "rgba(0, 0, 0, 0.17)",
      "color-bg-fill-info": "rgba(145, 208, 255, 1)",
      "color-bg-fill-info-hover": "rgba(81, 192, 255, 1)",
      "color-bg-fill-info-active": "rgba(0, 148, 213, 1)",
      "color-bg-fill-info-secondary": "rgba(224, 240, 255, 1)",
      "color-bg-fill-success": "rgba(41, 132, 90, 1)",
      "color-bg-fill-success-hover": "rgba(19, 111, 69, 1)",
      "color-bg-fill-success-active": "rgba(12, 81, 50, 1)",
      "color-bg-fill-success-secondary": "rgba(205, 254, 225, 1)",
      "color-bg-fill-warning": "rgba(255, 184, 0, 1)",
      "color-bg-fill-warning-hover": "rgba(229, 165, 0, 1)",
      "color-bg-fill-warning-active": "rgba(178, 132, 0, 1)",
      "color-bg-fill-warning-secondary": "rgba(255, 214, 164, 1)",
      "color-bg-fill-caution": "rgba(255, 230, 0, 1)",
      "color-bg-fill-caution-hover": "rgba(234, 211, 0, 1)",
      "color-bg-fill-caution-active": "rgba(225, 203, 0, 1)",
      "color-bg-fill-caution-secondary": "rgba(255, 239, 157, 1)",
      "color-bg-fill-critical": "rgba(229, 28, 0, 1)",
      "color-bg-fill-critical-hover": "rgba(181, 38, 11, 1)",
      "color-bg-fill-critical-active": "rgba(142, 31, 11, 1)",
      "color-bg-fill-critical-selected": "rgba(142, 31, 11, 1)",
      "color-bg-fill-critical-secondary": "rgba(254, 218, 217, 1)",
      "color-bg-fill-emphasis": "rgba(0, 91, 211, 1)",
      "color-bg-fill-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-bg-fill-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-bg-fill-magic": "rgba(128, 81, 255, 1)",
      "color-bg-fill-magic-secondary": "rgba(228, 222, 255, 1)",
      "color-bg-fill-magic-secondary-hover": "rgba(223, 217, 255, 1)",
      "color-bg-fill-magic-secondary-active": "rgba(212, 204, 255, 1)",
      "color-bg-fill-inverse": "rgba(48, 48, 48, 1)",
      "color-bg-fill-inverse-hover": "rgba(74, 74, 74, 1)",
      "color-bg-fill-inverse-active": "rgba(97, 97, 97, 1)",
      "color-bg-fill-transparent": "rgba(0, 0, 0, 0.02)",
      "color-bg-fill-transparent-hover": "rgba(0, 0, 0, 0.05)",
      "color-bg-fill-transparent-active": "rgba(0, 0, 0, 0.08)",
      "color-bg-fill-transparent-selected": "rgba(0, 0, 0, 0.08)",
      "color-bg-fill-transparent-secondary": "rgba(0, 0, 0, 0.06)",
      "color-bg-fill-transparent-secondary-hover": "rgba(0, 0, 0, 0.08)",
      "color-bg-fill-transparent-secondary-active": "rgba(0, 0, 0, 0.11)",
      "color-text": "rgba(26, 26, 26, 1)",
      "color-text-secondary": "rgba(26, 26, 26, 1)",
      "color-text-disabled": "rgba(181, 181, 181, 1)",
      "color-text-link": "rgba(0, 91, 211, 1)",
      "color-text-link-hover": "rgba(0, 66, 153, 1)",
      "color-text-link-active": "rgba(0, 46, 106, 1)",
      "color-text-brand": "rgba(26, 26, 26, 1)",
      "color-text-brand-hover": "rgba(48, 48, 48, 1)",
      "color-text-brand-on-bg-fill": "rgba(255, 255, 255, 1)",
      "color-text-brand-on-bg-fill-hover": "rgba(227, 227, 227, 1)",
      "color-text-brand-on-bg-fill-active": "rgba(204, 204, 204, 1)",
      "color-text-brand-on-bg-fill-disabled": "rgba(255, 255, 255, 1)",
      "color-text-info": "rgba(0, 82, 124, 1)",
      "color-text-info-hover": "rgba(0, 58, 90, 1)",
      "color-text-info-active": "rgba(0, 33, 51, 1)",
      "color-text-info-on-bg-fill": "rgba(0, 33, 51, 1)",
      "color-text-success": "rgba(12, 81, 50, 1)",
      "color-text-success-hover": "rgba(8, 61, 37, 1)",
      "color-text-success-active": "rgba(9, 42, 27, 1)",
      "color-text-success-on-bg-fill": "rgba(248, 255, 251, 1)",
      "color-text-caution": "rgba(79, 71, 0, 1)",
      "color-text-caution-hover": "rgba(51, 46, 0, 1)",
      "color-text-caution-active": "rgba(31, 28, 0, 1)",
      "color-text-caution-on-bg-fill": "rgba(51, 46, 0, 1)",
      "color-text-warning": "rgba(94, 66, 0, 1)",
      "color-text-warning-hover": "rgba(65, 45, 0, 1)",
      "color-text-warning-active": "rgba(37, 26, 0, 1)",
      "color-text-warning-on-bg-fill": "rgba(37, 26, 0, 1)",
      "color-text-critical": "rgba(142, 31, 11, 1)",
      "color-text-critical-hover": "rgba(95, 21, 7, 1)",
      "color-text-critical-active": "rgba(47, 10, 4, 1)",
      "color-text-critical-on-bg-fill": "rgba(255, 251, 251, 1)",
      "color-text-emphasis": "rgba(0, 91, 211, 1)",
      "color-text-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-text-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-text-emphasis-on-bg-fill": "rgba(252, 253, 255, 1)",
      "color-text-emphasis-on-bg-fill-hover": "rgba(226, 231, 255, 1)",
      "color-text-emphasis-on-bg-fill-active": "rgba(213, 220, 255, 1)",
      "color-text-magic": "rgba(87, 0, 209, 1)",
      "color-text-magic-on-bg-fill": "rgba(253, 253, 255, 1)",
      "color-text-inverse": "rgba(227, 227, 227, 1)",
      "color-text-inverse-secondary": "rgba(181, 181, 181, 1)",
      "color-text-link-inverse": "rgba(197, 208, 255, 1)",
      "color-border": "rgba(138, 138, 138, 1)",
      "color-border-hover": "rgba(204, 204, 204, 1)",
      "color-border-disabled": "rgba(235, 235, 235, 1)",
      "color-border-secondary": "rgba(138, 138, 138, 1)",
      "color-border-tertiary": "rgba(204, 204, 204, 1)",
      "color-border-focus": "rgba(0, 91, 211, 1)",
      "color-border-brand": "rgba(227, 227, 227, 1)",
      "color-border-info": "rgba(168, 216, 255, 1)",
      "color-border-success": "rgba(146, 254, 194, 1)",
      "color-border-caution": "rgba(255, 235, 120, 1)",
      "color-border-warning": "rgba(255, 200, 121, 1)",
      "color-border-critical": "rgba(254, 195, 193, 1)",
      "color-border-critical-secondary": "rgba(142, 31, 11, 1)",
      "color-border-emphasis": "rgba(0, 91, 211, 1)",
      "color-border-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-border-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-border-magic": "rgba(170, 149, 255, 1)",
      "color-border-magic-secondary": "rgba(128, 81, 255, 1)",
      "color-border-inverse": "rgba(97, 97, 97, 1)",
      "color-border-inverse-hover": "rgba(204, 204, 204, 1)",
      "color-border-inverse-active": "rgba(227, 227, 227, 1)",
      "color-icon": "rgba(74, 74, 74, 1)",
      "color-icon-hover": "rgba(48, 48, 48, 1)",
      "color-icon-active": "rgba(26, 26, 26, 1)",
      "color-icon-disabled": "rgba(204, 204, 204, 1)",
      "color-icon-secondary": "rgba(74, 74, 74, 1)",
      "color-icon-secondary-hover": "rgba(97, 97, 97, 1)",
      "color-icon-secondary-active": "rgba(74, 74, 74, 1)",
      "color-icon-brand": "rgba(26, 26, 26, 1)",
      "color-icon-info": "rgba(0, 148, 213, 1)",
      "color-icon-success": "rgba(41, 132, 90, 1)",
      "color-icon-caution": "rgba(153, 138, 0, 1)",
      "color-icon-warning": "rgba(178, 132, 0, 1)",
      "color-icon-critical": "rgba(239, 77, 47, 1)",
      "color-icon-emphasis": "rgba(0, 91, 211, 1)",
      "color-icon-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-icon-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-icon-magic": "rgba(128, 81, 255, 1)",
      "color-icon-inverse": "rgba(227, 227, 227, 1)",
      "color-avatar-bg-fill": "rgba(181, 181, 181, 1)",
      "color-avatar-five-bg-fill": "rgba(254, 209, 221, 1)",
      "color-avatar-five-text-on-bg-fill": "rgba(141, 4, 72, 1)",
      "color-avatar-four-bg-fill": "rgba(192, 225, 255, 1)",
      "color-avatar-four-text-on-bg-fill": "rgba(0, 82, 124, 1)",
      "color-avatar-one-bg-fill": "rgba(251, 207, 251, 1)",
      "color-avatar-one-text-on-bg-fill": "rgba(121, 26, 121, 1)",
      "color-avatar-text-on-bg-fill": "rgba(255, 255, 255, 1)",
      "color-avatar-three-bg-fill": "rgba(146, 237, 222, 1)",
      "color-avatar-three-text-on-bg-fill": "rgba(9, 83, 70, 1)",
      "color-avatar-two-bg-fill": "rgba(56, 250, 163, 1)",
      "color-avatar-two-text-on-bg-fill": "rgba(12, 81, 50, 1)",
      "color-backdrop-bg": "rgba(0, 0, 0, 0.71)",
      "color-checkbox-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
      "color-checkbox-icon-disabled": "rgba(255, 255, 255, 1)",
      "color-input-bg-surface": "rgba(253, 253, 253, 1)",
      "color-input-bg-surface-hover": "rgba(250, 250, 250, 1)",
      "color-input-bg-surface-active": "rgba(247, 247, 247, 1)",
      "color-input-border": "rgba(74, 74, 74, 1)",
      "color-input-border-hover": "rgba(97, 97, 97, 1)",
      "color-input-border-active": "rgba(26, 26, 26, 1)",
      "color-nav-bg": "rgba(235, 235, 235, 1)",
      "color-nav-bg-surface": "rgba(0, 0, 0, 0.02)",
      "color-nav-bg-surface-hover": "rgba(241, 241, 241, 1)",
      "color-nav-bg-surface-active": "rgba(250, 250, 250, 1)",
      "color-nav-bg-surface-selected": "rgba(250, 250, 250, 1)",
      "color-radio-button-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
      "color-radio-button-icon-disabled": "rgba(255, 255, 255, 1)",
      "color-video-thumbnail-play-button-bg-fill-hover": "rgba(0, 0, 0, 0.81)",
      "color-video-thumbnail-play-button-bg-fill": "rgba(0, 0, 0, 0.71)",
      "color-video-thumbnail-play-button-text-on-bg-fill": "rgba(255, 255, 255, 1)"
    },
    "font": {
      "font-family-sans": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "font-family-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace",
      "font-size-275": "0.6875rem",
      "font-size-300": "0.75rem",
      "font-size-325": "0.8125rem",
      "font-size-350": "0.875rem",
      "font-size-400": "1rem",
      "font-size-500": "1.25rem",
      "font-size-600": "1.5rem",
      "font-size-750": "1.875rem",
      "font-size-900": "2.25rem",
      "font-size-1000": "2.5rem",
      "font-weight-regular": "450",
      "font-weight-medium": "550",
      "font-weight-semibold": "650",
      "font-weight-bold": "700",
      "font-letter-spacing-densest": "-0.03375rem",
      "font-letter-spacing-denser": "-0.01875rem",
      "font-letter-spacing-dense": "-0.0125rem",
      "font-letter-spacing-normal": "0rem",
      "font-line-height-300": "0.75rem",
      "font-line-height-400": "1rem",
      "font-line-height-500": "1.25rem",
      "font-line-height-600": "1.5rem",
      "font-line-height-700": "1.75rem",
      "font-line-height-800": "2rem",
      "font-line-height-1000": "2.5rem",
      "font-line-height-1200": "3rem"
    },
    "height": {
      "height-0": "0rem",
      "height-025": "0.0625rem",
      "height-050": "0.125rem",
      "height-100": "0.25rem",
      "height-150": "0.375rem",
      "height-200": "0.5rem",
      "height-300": "0.75rem",
      "height-400": "1rem",
      "height-500": "1.25rem",
      "height-600": "1.5rem",
      "height-700": "1.75rem",
      "height-800": "2rem",
      "height-900": "2.25rem",
      "height-1000": "2.5rem",
      "height-1200": "3rem",
      "height-1600": "4rem",
      "height-2000": "5rem",
      "height-2400": "6rem",
      "height-2800": "7rem",
      "height-3200": "8rem"
    },
    "motion": {
      "motion-duration-0": "0ms",
      "motion-duration-50": "50ms",
      "motion-duration-100": "100ms",
      "motion-duration-150": "150ms",
      "motion-duration-200": "200ms",
      "motion-duration-250": "250ms",
      "motion-duration-300": "300ms",
      "motion-duration-350": "350ms",
      "motion-duration-400": "400ms",
      "motion-duration-450": "450ms",
      "motion-duration-500": "500ms",
      "motion-duration-5000": "5000ms",
      "motion-ease": "cubic-bezier(0.25, 0.1, 0.25, 1)",
      "motion-ease-in": "cubic-bezier(0.42, 0, 1, 1)",
      "motion-ease-out": "cubic-bezier(0.19, 0.91, 0.38, 1)",
      "motion-ease-in-out": "cubic-bezier(0.42, 0, 0.58, 1)",
      "motion-linear": "cubic-bezier(0, 0, 1, 1)",
      "motion-keyframes-bounce": "{ from, 65%, 85% { transform: scale(1) } 75% { transform: scale(0.85) } 82.5% { transform: scale(1.05) } }",
      "motion-keyframes-fade-in": "{ to { opacity: 1 } }",
      "motion-keyframes-pulse": "{ from, 75% { transform: scale(0.85); opacity: 1; } to { transform: scale(2.5); opacity: 0; } }",
      "motion-keyframes-spin": "{ to { transform: rotate(1turn) } }",
      "motion-keyframes-appear-above": "{ from { transform: translateY(var(--p-space-100)); opacity: 0; } to { transform: none; opacity: 1; } }",
      "motion-keyframes-appear-below": "{ from { transform: translateY(calc(var(--p-space-100) * -1)); opacity: 0; } to { transform: none; opacity: 1; } }"
    },
    "shadow": {
      "shadow-0": "none",
      "shadow-100": "0rem 0.0625rem 0rem 0rem rgba(26, 26, 26, 0.07)",
      "shadow-200": "0rem 0.1875rem 0.0625rem -0.0625rem rgba(26, 26, 26, 0.07)",
      "shadow-300": "0rem 0.25rem 0.375rem -0.125rem rgba(26, 26, 26, 0.20)",
      "shadow-400": "0rem 0.5rem 1rem -0.25rem rgba(26, 26, 26, 0.22)",
      "shadow-500": "0rem 0.75rem 1.25rem -0.5rem rgba(26, 26, 26, 0.24)",
      "shadow-600": "0rem 1.25rem 1.25rem -0.5rem rgba(26, 26, 26, 0.28)",
      "shadow-bevel-100": "0rem 0.0625rem 0rem 0rem rgba(26, 26, 26, 0.07), 0rem 0.0625rem 0rem 0rem rgba(208, 208, 208, 0.40) inset, 0.0625rem 0rem 0rem 0rem #CCC inset, -0.0625rem 0rem 0rem 0rem #CCC inset, 0rem -0.0625rem 0rem 0rem #999 inset",
      "shadow-inset-100": "0rem 0.0625rem 0.125rem 0rem rgba(26, 26, 26, 0.15) inset, 0rem 0.0625rem 0.0625rem 0rem rgba(26, 26, 26, 0.15) inset",
      "shadow-inset-200": "0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.20) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset, -0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset",
      "shadow-button": "0rem 0.0625rem 0rem 0rem #E3E3E3 inset, 0.0625rem 0rem 0rem 0rem #E3E3E3 inset, -0.0625rem 0rem 0rem 0rem #E3E3E3 inset, 0rem -0.0625rem 0rem 0rem #B5B5B5 inset",
      "shadow-button-hover": "0rem 0.0625rem 0rem 0rem #EBEBEB inset, -0.0625rem 0rem 0rem 0rem #EBEBEB inset, 0.0625rem 0rem 0rem 0rem #EBEBEB inset, 0rem -0.0625rem 0rem 0rem #CCC inset",
      "shadow-button-inset": "0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.20) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset, -0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset",
      "shadow-button-primary": "0rem 0.125rem 0rem 0rem rgba(255, 255, 255, 0.2) inset, 0.125rem 0rem 0rem 0rem rgba(255, 255, 255, 0.2) inset, -0.125rem 0rem 0rem 0rem rgba(255, 255, 255, 0.2) inset, 0rem -0.0625rem 0rem 0.0625rem #000 inset, 0rem 0.0625rem 0rem 0rem #000 inset",
      "shadow-button-primary-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.24) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.0625rem 0rem 0rem #000 inset, 0rem -0.0625rem 0rem 0.0625rem #1A1A1A",
      "shadow-button-primary-inset": "0rem 0.1875rem 0rem 0rem #000 inset",
      "shadow-button-primary-critical": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
      "shadow-button-primary-critical-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
      "shadow-button-primary-critical-inset": "0rem 0.125rem 0rem 0rem rgba(0, 0, 0, 0.60) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.20) inset, -0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.20) inset",
      "shadow-button-primary-success": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
      "shadow-button-primary-success-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
      "shadow-button-primary-success-inset": "0rem 0.125rem 0rem 0rem rgba(0, 0, 0, 0.60) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.20) inset, -0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.20) inset",
      "shadow-border-inset": "0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.08) inset"
    },
    "space": {
      "space-0": "0rem",
      "space-025": "0.0625rem",
      "space-050": "0.125rem",
      "space-100": "0.25rem",
      "space-150": "0.375rem",
      "space-200": "0.5rem",
      "space-300": "0.75rem",
      "space-400": "1rem",
      "space-500": "1.25rem",
      "space-600": "1.5rem",
      "space-800": "2rem",
      "space-1000": "2.5rem",
      "space-1200": "3rem",
      "space-1600": "4rem",
      "space-2000": "5rem",
      "space-2400": "6rem",
      "space-2800": "7rem",
      "space-3200": "8rem",
      "space-button-group-gap": "0.5rem",
      "space-card-gap": "1rem",
      "space-card-padding": "1rem",
      "space-table-cell-padding": "0.375rem"
    },
    "text": {
      "text-heading-3xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-3xl-font-size": "2.25rem",
      "text-heading-3xl-font-weight": "700",
      "text-heading-3xl-font-letter-spacing": "-0.03375rem",
      "text-heading-3xl-font-line-height": "3rem",
      "text-heading-2xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-2xl-font-size": "1.875rem",
      "text-heading-2xl-font-weight": "700",
      "text-heading-2xl-font-letter-spacing": "-0.01875rem",
      "text-heading-2xl-font-line-height": "2.5rem",
      "text-heading-xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-xl-font-size": "1.5rem",
      "text-heading-xl-font-weight": "700",
      "text-heading-xl-font-letter-spacing": "-0.0125rem",
      "text-heading-xl-font-line-height": "2rem",
      "text-heading-lg-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-lg-font-size": "1.25rem",
      "text-heading-lg-font-weight": "650",
      "text-heading-lg-font-letter-spacing": "-0.0125rem",
      "text-heading-lg-font-line-height": "1.5rem",
      "text-heading-md-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-md-font-size": "0.875rem",
      "text-heading-md-font-weight": "650",
      "text-heading-md-font-letter-spacing": "0rem",
      "text-heading-md-font-line-height": "1.25rem",
      "text-heading-sm-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-sm-font-size": "0.8125rem",
      "text-heading-sm-font-weight": "650",
      "text-heading-sm-font-letter-spacing": "0rem",
      "text-heading-sm-font-line-height": "1.25rem",
      "text-body-lg-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-lg-font-size": "0.875rem",
      "text-body-lg-font-weight": "450",
      "text-body-lg-font-letter-spacing": "0rem",
      "text-body-lg-font-line-height": "1.25rem",
      "text-body-md-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-md-font-size": "0.8125rem",
      "text-body-md-font-weight": "450",
      "text-body-md-font-letter-spacing": "0rem",
      "text-body-md-font-line-height": "1.25rem",
      "text-body-sm-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-sm-font-size": "0.75rem",
      "text-body-sm-font-weight": "450",
      "text-body-sm-font-letter-spacing": "0rem",
      "text-body-sm-font-line-height": "1rem",
      "text-body-xs-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-xs-font-size": "0.6875rem",
      "text-body-xs-font-weight": "450",
      "text-body-xs-font-letter-spacing": "0rem",
      "text-body-xs-font-line-height": "0.75rem"
    },
    "width": {
      "width-0": "0rem",
      "width-025": "0.0625rem",
      "width-050": "0.125rem",
      "width-100": "0.25rem",
      "width-150": "0.375rem",
      "width-200": "0.5rem",
      "width-300": "0.75rem",
      "width-400": "1rem",
      "width-500": "1.25rem",
      "width-600": "1.5rem",
      "width-700": "1.75rem",
      "width-800": "2rem",
      "width-900": "2.25rem",
      "width-1000": "2.5rem",
      "width-1200": "3rem",
      "width-1600": "4rem",
      "width-2000": "5rem",
      "width-2400": "6rem",
      "width-2800": "7rem",
      "width-3200": "8rem"
    },
    "zIndex": {
      "z-index-1": "100",
      "z-index-2": "400",
      "z-index-3": "510",
      "z-index-4": "512",
      "z-index-5": "513",
      "z-index-6": "514",
      "z-index-7": "515",
      "z-index-8": "516",
      "z-index-9": "517",
      "z-index-10": "518",
      "z-index-11": "519",
      "z-index-12": "520"
    }
  }
};
var themeDefault = themes[themeNameDefault];
var isTokenName = createIsTokenName(themes[themeNameDefault]);

// node_modules/@shopify/polaris/build/esm/utilities/use-theme.js
function getTheme(themeName) {
  return themes[themeName];
}
var ThemeContext = /* @__PURE__ */ (0, import_react4.createContext)(null);
function useTheme() {
  const theme = (0, import_react4.useContext)(ThemeContext);
  if (!theme) {
    throw new Error("No theme was provided. Your application must be wrapped in an <AppProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions.");
  }
  return theme;
}

// node_modules/@shopify/polaris/build/esm/utilities/breakpoints.js
var import_react5 = __toESM(require_react());
var Breakpoints = {
  // TODO: Update to smDown
  navigationBarCollapsed: "767.95px",
  // TODO: Update to lgDown
  stackedContent: "1039.95px"
};
var noWindowMatches = {
  media: "",
  addListener: noop,
  removeListener: noop,
  matches: false,
  onchange: noop,
  addEventListener: noop,
  removeEventListener: noop,
  dispatchEvent: (_) => true
};
function noop() {
}
function navigationBarCollapsed() {
  return typeof window === "undefined" ? noWindowMatches : window.matchMedia(`(max-width: ${Breakpoints.navigationBarCollapsed})`);
}
function stackedContent() {
  return typeof window === "undefined" ? noWindowMatches : window.matchMedia(`(max-width: ${Breakpoints.stackedContent})`);
}
var breakpointsQueryEntries = getBreakpointsQueryEntries(themeDefault.breakpoints);
function getMatches(defaults, forceDefaults) {
  if (!isServer && !forceDefaults) {
    return Object.fromEntries(breakpointsQueryEntries.map(([directionAlias, query]) => [directionAlias, window.matchMedia(query).matches]));
  }
  if (typeof defaults === "object" && defaults !== null) {
    return Object.fromEntries(breakpointsQueryEntries.map(([directionAlias]) => [directionAlias, defaults[directionAlias] ?? false]));
  }
  return Object.fromEntries(breakpointsQueryEntries.map(([directionAlias]) => [directionAlias, defaults ?? false]));
}
function useBreakpoints(options) {
  const [breakpoints2, setBreakpoints] = (0, import_react5.useState)(getMatches(options?.defaults, true));
  useIsomorphicLayoutEffect(() => {
    const mediaQueryLists = breakpointsQueryEntries.map(([_, query]) => window.matchMedia(query));
    const handler = () => setBreakpoints(getMatches());
    mediaQueryLists.forEach((mql) => {
      if (mql.addListener) {
        mql.addListener(handler);
      } else {
        mql.addEventListener("change", handler);
      }
    });
    handler();
    return () => {
      mediaQueryLists.forEach((mql) => {
        if (mql.removeListener) {
          mql.removeListener(handler);
        } else {
          mql.removeEventListener("change", handler);
        }
      });
    };
  }, []);
  return breakpoints2;
}
function getBreakpointsQueryEntries(breakpoints2) {
  const mediaConditionEntries = Object.entries(getMediaConditions(breakpoints2));
  return mediaConditionEntries.map(([breakpointsToken, mediaConditions]) => Object.entries(mediaConditions).map(([direction, mediaCondition]) => {
    const breakpointsAlias = breakpointsToken.split("-")[1];
    const directionAlias = `${breakpointsAlias}${capitalize(direction)}`;
    return [directionAlias, mediaCondition];
  })).flat();
}
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// node_modules/@shopify/polaris/build/esm/components/AppProvider/AppProvider.js
var import_react22 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/features/context.js
var import_react6 = __toESM(require_react());
var classNamePolarisSummerEditions2023 = "Polaris-Summer-Editions-2023";
var FeaturesContext = /* @__PURE__ */ (0, import_react6.createContext)(void 0);

// node_modules/@shopify/polaris/build/esm/utilities/debounce.js
function debounce(func, waitArg, options) {
  let lastArgs;
  let lastThis;
  let maxWait;
  let result;
  let timerId;
  let lastCallTime;
  let lastInvokeTime = 0;
  let leading = false;
  let maxing = false;
  let trailing = true;
  const useRAF = !waitArg && waitArg !== 0;
  if (typeof func !== "function") {
    throw new TypeError("Expected a function");
  }
  const wait = waitArg || 0;
  if (typeof options === "object") {
    leading = Boolean(options.leading);
    maxing = "maxWait" in options;
    maxWait = maxing ? Math.max(Number(options.maxWait) || 0, wait) : void 0;
    trailing = "trailing" in options ? Boolean(options.trailing) : trailing;
  }
  function invokeFunc(time) {
    const args = lastArgs;
    const thisArg = lastThis;
    lastArgs = void 0;
    lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function startTimer(pendingFunc, wait2) {
    if (useRAF) {
      cancelAnimationFrame(timerId);
      return requestAnimationFrame(pendingFunc);
    }
    return setTimeout(pendingFunc, wait2);
  }
  function cancelTimer(id) {
    if (useRAF) {
      return cancelAnimationFrame(id);
    }
    clearTimeout(id);
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = startTimer(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    const timeSinceLastCall = time - lastCallTime;
    const timeSinceLastInvoke = time - lastInvokeTime;
    const timeWaiting = wait - timeSinceLastCall;
    return maxing && maxWait ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    const timeSinceLastCall = time - lastCallTime;
    const timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && maxWait && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    const time = Date.now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = startTimer(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      cancelTimer(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(Date.now());
  }
  function pending() {
    return timerId !== void 0;
  }
  function debounced(...args) {
    const time = Date.now();
    const isInvoking = shouldInvoke(time);
    lastArgs = args;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        timerId = startTimer(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = startTimer(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  debounced.pending = pending;
  return debounced;
}

// node_modules/@shopify/polaris/build/esm/utilities/geometry.js
var Rect = class {
  static get zero() {
    return new Rect();
  }
  constructor({
    top = 0,
    left = 0,
    width: width2 = 0,
    height: height2 = 0
  } = {}) {
    this.top = top;
    this.left = left;
    this.width = width2;
    this.height = height2;
  }
  get center() {
    return {
      x: this.left + this.width / 2,
      y: this.top + this.height / 2
    };
  }
};
function getRectForNode(node) {
  if (!(node instanceof Element)) {
    return new Rect({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }
  const rect = node.getBoundingClientRect();
  return new Rect({
    top: rect.top,
    left: rect.left,
    width: rect.width,
    height: rect.height
  });
}

// node_modules/@shopify/polaris/build/esm/utilities/sticky-manager/sticky-manager.js
var SIXTY_FPS = 1e3 / 60;
var StickyManager = class {
  constructor(container) {
    this.stickyItems = [];
    this.stuckItems = [];
    this.container = null;
    this.topBarOffset = 0;
    this.handleResize = debounce(() => {
      this.manageStickyItems();
    }, SIXTY_FPS, {
      leading: true,
      trailing: true,
      maxWait: SIXTY_FPS
    });
    this.handleScroll = debounce(() => {
      this.manageStickyItems();
    }, SIXTY_FPS, {
      leading: true,
      trailing: true,
      maxWait: SIXTY_FPS
    });
    if (container) {
      this.setContainer(container);
    }
  }
  registerStickyItem(stickyItem) {
    this.stickyItems.push(stickyItem);
  }
  unregisterStickyItem(nodeToRemove) {
    const nodeIndex = this.stickyItems.findIndex(({
      stickyNode
    }) => nodeToRemove === stickyNode);
    this.stickyItems.splice(nodeIndex, 1);
  }
  setContainer(el) {
    this.container = el;
    if (isDocument(el)) {
      this.setTopBarOffset(el);
    }
    this.container.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize);
    this.manageStickyItems();
  }
  removeScrollListener() {
    if (this.container) {
      this.container.removeEventListener("scroll", this.handleScroll);
      window.removeEventListener("resize", this.handleResize);
    }
  }
  manageStickyItems() {
    if (this.stickyItems.length <= 0) {
      return;
    }
    const scrollTop = this.container ? scrollTopFor(this.container) : 0;
    const containerTop = getRectForNode(this.container).top + this.topBarOffset;
    this.stickyItems.forEach((stickyItem) => {
      const {
        handlePositioning
      } = stickyItem;
      const {
        sticky,
        top,
        left,
        width: width2
      } = this.evaluateStickyItem(stickyItem, scrollTop, containerTop);
      this.updateStuckItems(stickyItem, sticky);
      handlePositioning(sticky, top, left, width2);
    });
  }
  evaluateStickyItem(stickyItem, scrollTop, containerTop) {
    const {
      stickyNode,
      placeHolderNode,
      boundingElement,
      offset,
      disableWhenStacked
    } = stickyItem;
    if (disableWhenStacked && stackedContent().matches) {
      return {
        sticky: false,
        top: 0,
        left: 0,
        width: "auto"
      };
    }
    const stickyOffset = offset ? this.getOffset(stickyNode) + parseInt(
      // Important: This will not update when the active theme changes.
      // Update this to `useTheme` once converted to a function component.
      themeDefault.space["space-500"],
      10
    ) : this.getOffset(stickyNode);
    const scrollPosition2 = scrollTop + stickyOffset;
    const placeHolderNodeCurrentTop = placeHolderNode.getBoundingClientRect().top - containerTop + scrollTop;
    const top = containerTop + stickyOffset;
    const width2 = placeHolderNode.getBoundingClientRect().width;
    const left = placeHolderNode.getBoundingClientRect().left;
    let sticky;
    if (boundingElement == null) {
      sticky = scrollPosition2 >= placeHolderNodeCurrentTop;
    } else {
      const stickyItemHeight = stickyNode.getBoundingClientRect().height || stickyNode.firstElementChild?.getBoundingClientRect().height || 0;
      const stickyItemBottomPosition = boundingElement.getBoundingClientRect().bottom - stickyItemHeight + scrollTop - containerTop;
      sticky = scrollPosition2 >= placeHolderNodeCurrentTop && scrollPosition2 < stickyItemBottomPosition;
    }
    return {
      sticky,
      top,
      left,
      width: width2
    };
  }
  updateStuckItems(item, sticky) {
    const {
      stickyNode
    } = item;
    if (sticky && !this.isNodeStuck(stickyNode)) {
      this.addStuckItem(item);
    } else if (!sticky && this.isNodeStuck(stickyNode)) {
      this.removeStuckItem(item);
    }
  }
  addStuckItem(stickyItem) {
    this.stuckItems.push(stickyItem);
  }
  removeStuckItem(stickyItem) {
    const {
      stickyNode: nodeToRemove
    } = stickyItem;
    const nodeIndex = this.stuckItems.findIndex(({
      stickyNode
    }) => nodeToRemove === stickyNode);
    this.stuckItems.splice(nodeIndex, 1);
  }
  getOffset(node) {
    if (this.stuckItems.length === 0) {
      return 0;
    }
    let offset = 0;
    let count = 0;
    const stuckNodesLength = this.stuckItems.length;
    const nodeRect = getRectForNode(node);
    while (count < stuckNodesLength) {
      const stuckNode = this.stuckItems[count].stickyNode;
      if (stuckNode !== node) {
        const stuckNodeRect = getRectForNode(stuckNode);
        if (!horizontallyOverlaps(nodeRect, stuckNodeRect)) {
          offset += getRectForNode(stuckNode).height;
        }
      } else {
        break;
      }
      count++;
    }
    return offset;
  }
  isNodeStuck(node) {
    const nodeFound = this.stuckItems.findIndex(({
      stickyNode
    }) => node === stickyNode);
    return nodeFound >= 0;
  }
  setTopBarOffset(container) {
    const topbarElement = container.querySelector(`:not(${scrollable.selector}) ${dataPolarisTopBar.selector}`);
    this.topBarOffset = topbarElement ? topbarElement.clientHeight : 0;
  }
};
function isDocument(node) {
  return node === document;
}
function scrollTopFor(container) {
  return isDocument(container) ? document.body.scrollTop || document.documentElement.scrollTop : container.scrollTop;
}
function horizontallyOverlaps(rect1, rect2) {
  const rect1Left = rect1.left;
  const rect1Right = rect1.left + rect1.width;
  const rect2Left = rect2.left;
  const rect2Right = rect2.left + rect2.width;
  return rect2Right < rect1Left || rect1Right < rect2Left;
}

// node_modules/@shopify/polaris/build/esm/utilities/scroll-lock-manager/scroll-lock-manager.js
var SCROLL_LOCKING_ATTRIBUTE = "data-lock-scrolling";
var SCROLL_LOCKING_HIDDEN_ATTRIBUTE = "data-lock-scrolling-hidden";
var SCROLL_LOCKING_WRAPPER_ATTRIBUTE = "data-lock-scrolling-wrapper";
var scrollPosition = 0;
function isScrollBarVisible() {
  const {
    body
  } = document;
  return body.scrollHeight > body.clientHeight;
}
var ScrollLockManager = class {
  constructor() {
    this.scrollLocks = 0;
    this.locked = false;
  }
  registerScrollLock() {
    this.scrollLocks += 1;
    this.handleScrollLocking();
  }
  unregisterScrollLock() {
    this.scrollLocks -= 1;
    this.handleScrollLocking();
  }
  handleScrollLocking() {
    if (isServer)
      return;
    const {
      scrollLocks
    } = this;
    const {
      body
    } = document;
    const wrapper = body.firstElementChild;
    if (scrollLocks === 0) {
      body.removeAttribute(SCROLL_LOCKING_ATTRIBUTE);
      body.removeAttribute(SCROLL_LOCKING_HIDDEN_ATTRIBUTE);
      if (wrapper) {
        wrapper.removeAttribute(SCROLL_LOCKING_WRAPPER_ATTRIBUTE);
      }
      window.scroll(0, scrollPosition);
      this.locked = false;
    } else if (scrollLocks > 0 && !this.locked) {
      scrollPosition = window.pageYOffset;
      body.setAttribute(SCROLL_LOCKING_ATTRIBUTE, "");
      if (!isScrollBarVisible()) {
        body.setAttribute(SCROLL_LOCKING_HIDDEN_ATTRIBUTE, "");
      }
      if (wrapper) {
        wrapper.setAttribute(SCROLL_LOCKING_WRAPPER_ATTRIBUTE, "");
        wrapper.scrollTop = scrollPosition;
      }
      this.locked = true;
    }
  }
  resetScrollPosition() {
    scrollPosition = 0;
  }
};

// node_modules/@shopify/polaris/build/esm/utilities/get.js
var OBJECT_NOTATION_MATCHER = /\[(.*?)\]|(\w+)/g;
function get(obj, keypath, defaultValue) {
  if (obj == null)
    return void 0;
  const keys = Array.isArray(keypath) ? keypath : getKeypath(keypath);
  let acc = obj;
  for (let i = 0; i < keys.length; i++) {
    const val = acc[keys[i]];
    if (val === void 0)
      return defaultValue;
    acc = val;
  }
  return acc;
}
function getKeypath(str) {
  const path = [];
  let result;
  while (result = OBJECT_NOTATION_MATCHER.exec(str)) {
    const [, first, second] = result;
    path.push(first || second);
  }
  return path;
}

// node_modules/@shopify/polaris/build/esm/utilities/merge.js
function merge(...objs) {
  let final = {};
  for (const obj of objs) {
    final = mergeRecursively(final, obj);
  }
  return final;
}
function mergeRecursively(inputObjA, objB) {
  const objA = Array.isArray(inputObjA) ? [...inputObjA] : {
    ...inputObjA
  };
  for (const key in objB) {
    if (!Object.prototype.hasOwnProperty.call(objB, key)) {
      continue;
    } else if (isMergeableValue(objB[key]) && isMergeableValue(objA[key])) {
      objA[key] = mergeRecursively(objA[key], objB[key]);
    } else {
      objA[key] = objB[key];
    }
  }
  return objA;
}
function isMergeableValue(value) {
  return value !== null && typeof value === "object";
}

// node_modules/@shopify/polaris/build/esm/utilities/i18n/I18n.js
var REPLACE_REGEX = /{([^}]*)}/g;
var I18n = class {
  /**
   * @param translation A locale object or array of locale objects that overrides default translations. If specifying an array then your desired language dictionary should come first, followed by your fallback language dictionaries
   */
  constructor(translation) {
    this.translation = {};
    this.translation = Array.isArray(translation) ? merge(...translation.slice().reverse()) : translation;
  }
  translate(id, replacements) {
    const text2 = get(this.translation, id, "");
    if (!text2) {
      return "";
    }
    if (replacements) {
      return text2.replace(REPLACE_REGEX, (match) => {
        const replacement = match.substring(1, match.length - 1);
        if (replacements[replacement] === void 0) {
          const replacementData = JSON.stringify(replacements);
          throw new Error(`Error in translation for key '${id}'. No replacement found for key '${replacement}'. The following replacements were passed: '${replacementData}'`);
        }
        return replacements[replacement];
      });
    }
    return text2;
  }
  translationKeyExists(path) {
    return Boolean(get(this.translation, path));
  }
};

// node_modules/@shopify/polaris/build/esm/utilities/i18n/context.js
var import_react7 = __toESM(require_react());
var I18nContext = /* @__PURE__ */ (0, import_react7.createContext)(void 0);

// node_modules/@shopify/polaris/build/esm/utilities/scroll-lock-manager/context.js
var import_react8 = __toESM(require_react());
var ScrollLockManagerContext = /* @__PURE__ */ (0, import_react8.createContext)(void 0);

// node_modules/@shopify/polaris/build/esm/utilities/sticky-manager/context.js
var import_react9 = __toESM(require_react());
var StickyManagerContext = /* @__PURE__ */ (0, import_react9.createContext)(void 0);

// node_modules/@shopify/polaris/build/esm/utilities/link/context.js
var import_react10 = __toESM(require_react());
var LinkContext = /* @__PURE__ */ (0, import_react10.createContext)(void 0);

// node_modules/@shopify/polaris/build/esm/components/MediaQueryProvider/MediaQueryProvider.js
var import_react13 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/media-query/context.js
var import_react11 = __toESM(require_react());
var MediaQueryContext = /* @__PURE__ */ (0, import_react11.createContext)(void 0);

// node_modules/@shopify/polaris/build/esm/components/EventListener/EventListener.js
var import_react12 = __toESM(require_react());
var EventListener = class extends import_react12.PureComponent {
  componentDidMount() {
    this.attachListener();
  }
  componentDidUpdate({
    passive,
    ...detachProps
  }) {
    this.detachListener(detachProps);
    this.attachListener();
  }
  componentWillUnmount() {
    this.detachListener();
  }
  render() {
    return null;
  }
  attachListener() {
    const {
      event,
      handler,
      capture,
      passive
    } = this.props;
    window.addEventListener(event, handler, {
      capture,
      passive
    });
  }
  detachListener(prevProps) {
    const {
      event,
      handler,
      capture
    } = prevProps || this.props;
    window.removeEventListener(event, handler, capture);
  }
};

// node_modules/@shopify/polaris/build/esm/components/MediaQueryProvider/MediaQueryProvider.js
var MediaQueryProvider = function MediaQueryProvider2({
  children
}) {
  const [isNavigationCollapsed, setIsNavigationCollapsed] = (0, import_react13.useState)(navigationBarCollapsed().matches);
  const handleResize = (0, import_react13.useCallback)(debounce(() => {
    if (isNavigationCollapsed !== navigationBarCollapsed().matches) {
      setIsNavigationCollapsed(!isNavigationCollapsed);
    }
  }, 40, {
    trailing: true,
    leading: true,
    maxWait: 40
  }), [isNavigationCollapsed]);
  (0, import_react13.useEffect)(() => {
    setIsNavigationCollapsed(navigationBarCollapsed().matches);
  }, []);
  const context = (0, import_react13.useMemo)(() => ({
    isNavigationCollapsed
  }), [isNavigationCollapsed]);
  return /* @__PURE__ */ import_react13.default.createElement(MediaQueryContext.Provider, {
    value: context
  }, /* @__PURE__ */ import_react13.default.createElement(EventListener, {
    event: "resize",
    handler: handleResize
  }), children);
};

// node_modules/@shopify/polaris/build/esm/components/PortalsManager/PortalsManager.js
var import_react17 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/use-is-after-initial-mount.js
var import_react14 = __toESM(require_react());
function useIsAfterInitialMount() {
  const [isAfterInitialMount, setIsAfterInitialMount] = (0, import_react14.useState)(false);
  (0, import_react14.useEffect)(() => {
    setIsAfterInitialMount(true);
  }, []);
  return isAfterInitialMount;
}

// node_modules/@shopify/polaris/build/esm/utilities/portals/context.js
var import_react15 = __toESM(require_react());
var PortalsManagerContext = /* @__PURE__ */ (0, import_react15.createContext)(void 0);

// node_modules/@shopify/polaris/build/esm/components/PortalsManager/components/PortalsContainer/PortalsContainer.js
var import_react16 = __toESM(require_react());
function PortalsContainerComponent(_props, ref) {
  return /* @__PURE__ */ import_react16.default.createElement("div", {
    id: "PolarisPortalsContainer",
    ref
  });
}
var PortalsContainer = /* @__PURE__ */ (0, import_react16.forwardRef)(PortalsContainerComponent);

// node_modules/@shopify/polaris/build/esm/components/PortalsManager/PortalsManager.js
function PortalsManager({
  children,
  container
}) {
  const isMounted = useIsAfterInitialMount();
  const ref = (0, import_react17.useRef)(null);
  const contextValue = (0, import_react17.useMemo)(() => {
    if (container) {
      return {
        container
      };
    } else if (isMounted) {
      return {
        container: ref.current
      };
    } else {
      return {
        container: null
      };
    }
  }, [container, isMounted]);
  return /* @__PURE__ */ import_react17.default.createElement(PortalsManagerContext.Provider, {
    value: contextValue
  }, children, container ? null : /* @__PURE__ */ import_react17.default.createElement(PortalsContainer, {
    ref
  }));
}

// node_modules/@shopify/polaris/build/esm/components/FocusManager/FocusManager.js
var import_react19 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/focus-manager/context.js
var import_react18 = __toESM(require_react());
var FocusManagerContext = /* @__PURE__ */ (0, import_react18.createContext)(void 0);

// node_modules/@shopify/polaris/build/esm/components/FocusManager/FocusManager.js
function FocusManager({
  children
}) {
  const [trapFocusList, setTrapFocusList] = (0, import_react19.useState)([]);
  const add = (0, import_react19.useCallback)((id) => {
    setTrapFocusList((list) => [...list, id]);
  }, []);
  const remove = (0, import_react19.useCallback)((id) => {
    let removed = true;
    setTrapFocusList((list) => {
      const clone = [...list];
      const index = clone.indexOf(id);
      if (index === -1) {
        removed = false;
      } else {
        clone.splice(index, 1);
      }
      return clone;
    });
    return removed;
  }, []);
  const value = (0, import_react19.useMemo)(() => ({
    trapFocusList,
    add,
    remove
  }), [add, trapFocusList, remove]);
  return /* @__PURE__ */ import_react19.default.createElement(FocusManagerContext.Provider, {
    value
  }, children);
}

// node_modules/@shopify/polaris/build/esm/components/EphemeralPresenceManager/EphemeralPresenceManager.js
var import_react21 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/ephemeral-presence-manager/context.js
var import_react20 = __toESM(require_react());
var EphemeralPresenceManagerContext = /* @__PURE__ */ (0, import_react20.createContext)(void 0);

// node_modules/@shopify/polaris/build/esm/components/EphemeralPresenceManager/EphemeralPresenceManager.js
var defaultState = {
  tooltip: 0
};
function EphemeralPresenceManager({
  children
}) {
  const [presenceCounter, setPresenceCounter] = (0, import_react21.useState)(defaultState);
  const addPresence = (0, import_react21.useCallback)((key) => {
    setPresenceCounter((prevList) => ({
      ...prevList,
      [key]: prevList[key] + 1
    }));
  }, []);
  const removePresence = (0, import_react21.useCallback)((key) => {
    setPresenceCounter((prevList) => ({
      ...prevList,
      [key]: prevList[key] - 1
    }));
  }, []);
  const value = (0, import_react21.useMemo)(() => ({
    presenceList: Object.entries(presenceCounter).reduce((previousValue, currentValue) => {
      const [key, value2] = currentValue;
      return {
        ...previousValue,
        [key]: value2 >= 1
      };
    }, {}),
    presenceCounter,
    addPresence,
    removePresence
  }), [addPresence, removePresence, presenceCounter]);
  return /* @__PURE__ */ import_react21.default.createElement(EphemeralPresenceManagerContext.Provider, {
    value
  }, children);
}

// node_modules/@shopify/polaris/build/esm/components/AppProvider/AppProvider.js
var MAX_SCROLLBAR_WIDTH = 20;
var SCROLLBAR_TEST_ELEMENT_PARENT_SIZE = 30;
var SCROLLBAR_TEST_ELEMENT_CHILD_SIZE = SCROLLBAR_TEST_ELEMENT_PARENT_SIZE + 10;
function measureScrollbars() {
  const parentEl = document.createElement("div");
  parentEl.setAttribute("style", `position: absolute; opacity: 0; transform: translate3d(-9999px, -9999px, 0); pointer-events: none; width:${SCROLLBAR_TEST_ELEMENT_PARENT_SIZE}px; height:${SCROLLBAR_TEST_ELEMENT_PARENT_SIZE}px;`);
  const child = document.createElement("div");
  child.setAttribute("style", `width:100%; height: ${SCROLLBAR_TEST_ELEMENT_CHILD_SIZE}; overflow:scroll`);
  parentEl.appendChild(child);
  document.body.appendChild(parentEl);
  const scrollbarWidth = SCROLLBAR_TEST_ELEMENT_PARENT_SIZE - (parentEl.firstElementChild?.clientWidth ?? 0);
  const scrollbarWidthWithSafetyHatch = Math.min(scrollbarWidth, MAX_SCROLLBAR_WIDTH);
  document.documentElement.style.setProperty("--pc-app-provider-scrollbar-width", `${scrollbarWidthWithSafetyHatch}px`);
  document.body.removeChild(parentEl);
}
var AppProvider = class extends import_react22.Component {
  constructor(props) {
    super(props);
    this.setBodyStyles = () => {
      document.body.style.backgroundColor = "var(--p-color-bg)";
      document.body.style.color = "var(--p-color-text)";
    };
    this.setRootAttributes = () => {
      const activeThemeName = this.getThemeName();
      themeNames.forEach((themeName) => {
        document.documentElement.classList.toggle(createThemeClassName(themeName), themeName === activeThemeName);
      });
      document.documentElement.classList.add(classNamePolarisSummerEditions2023);
    };
    this.getThemeName = () => this.props.theme ?? themeNameDefault;
    this.stickyManager = new StickyManager();
    this.scrollLockManager = new ScrollLockManager();
    const {
      i18n,
      linkComponent
    } = this.props;
    this.state = {
      link: linkComponent,
      intl: new I18n(i18n)
    };
  }
  componentDidMount() {
    if (document != null) {
      this.stickyManager.setContainer(document);
      this.setBodyStyles();
      this.setRootAttributes();
    }
    measureScrollbars();
  }
  componentDidUpdate({
    i18n: prevI18n,
    linkComponent: prevLinkComponent
  }) {
    const {
      i18n,
      linkComponent
    } = this.props;
    this.setRootAttributes();
    if (i18n === prevI18n && linkComponent === prevLinkComponent) {
      return;
    }
    this.setState({
      link: linkComponent,
      intl: new I18n(i18n)
    });
  }
  render() {
    const {
      children,
      features
    } = this.props;
    const themeName = this.getThemeName();
    const {
      intl,
      link
    } = this.state;
    return /* @__PURE__ */ import_react22.default.createElement(ThemeContext.Provider, {
      value: getTheme(themeName)
    }, /* @__PURE__ */ import_react22.default.createElement(FeaturesContext.Provider, {
      value: features
    }, /* @__PURE__ */ import_react22.default.createElement(I18nContext.Provider, {
      value: intl
    }, /* @__PURE__ */ import_react22.default.createElement(ScrollLockManagerContext.Provider, {
      value: this.scrollLockManager
    }, /* @__PURE__ */ import_react22.default.createElement(StickyManagerContext.Provider, {
      value: this.stickyManager
    }, /* @__PURE__ */ import_react22.default.createElement(LinkContext.Provider, {
      value: link
    }, /* @__PURE__ */ import_react22.default.createElement(MediaQueryProvider, null, /* @__PURE__ */ import_react22.default.createElement(PortalsManager, null, /* @__PURE__ */ import_react22.default.createElement(FocusManager, null, /* @__PURE__ */ import_react22.default.createElement(EphemeralPresenceManager, null, children))))))))));
  }
};

// node_modules/@shopify/polaris/build/esm/components/Button/utils.js
var import_react48 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Button/Button.js
var import_react47 = __toESM(require_react());

// node_modules/@shopify/polaris-icons/dist/icons/ArrowLeftMinor.svg.mjs
var import_react23 = __toESM(require_react(), 1);
var SvgArrowLeftMinor = function SvgArrowLeftMinor2(props) {
  return /* @__PURE__ */ import_react23.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react23.default.createElement("path", {
    fillRule: "evenodd",
    d: "M16.75 10a.75.75 0 0 1-.75.75h-9.69l2.72 2.72a.75.75 0 0 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 1.06l-2.72 2.72h9.69a.75.75 0 0 1 .75.75Z"
  }));
};
SvgArrowLeftMinor.displayName = "ArrowLeftMinor";

// node_modules/@shopify/polaris-icons/dist/icons/CancelMinor.svg.mjs
var import_react24 = __toESM(require_react(), 1);
var SvgCancelMinor = function SvgCancelMinor2(props) {
  return /* @__PURE__ */ import_react24.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react24.default.createElement("path", {
    d: "M13.97 15.03a.75.75 0 1 0 1.06-1.06l-3.97-3.97 3.97-3.97a.75.75 0 0 0-1.06-1.06l-3.97 3.97-3.97-3.97a.75.75 0 0 0-1.06 1.06l3.97 3.97-3.97 3.97a.75.75 0 1 0 1.06 1.06l3.97-3.97 3.97 3.97Z"
  }));
};
SvgCancelMinor.displayName = "CancelMinor";

// node_modules/@shopify/polaris-icons/dist/icons/ChevronDownMinor.svg.mjs
var import_react25 = __toESM(require_react(), 1);
var SvgChevronDownMinor = function SvgChevronDownMinor2(props) {
  return /* @__PURE__ */ import_react25.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react25.default.createElement("path", {
    fillRule: "evenodd",
    d: "M5.72 8.47a.75.75 0 0 1 1.06 0l3.47 3.47 3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z"
  }));
};
SvgChevronDownMinor.displayName = "ChevronDownMinor";

// node_modules/@shopify/polaris-icons/dist/icons/ChevronLeftMinor.svg.mjs
var import_react26 = __toESM(require_react(), 1);
var SvgChevronLeftMinor = function SvgChevronLeftMinor2(props) {
  return /* @__PURE__ */ import_react26.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react26.default.createElement("path", {
    fillRule: "evenodd",
    d: "M11.78 5.47a.75.75 0 0 1 0 1.06l-3.47 3.47 3.47 3.47a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 0Z"
  }));
};
SvgChevronLeftMinor.displayName = "ChevronLeftMinor";

// node_modules/@shopify/polaris-icons/dist/icons/ChevronRightMinor.svg.mjs
var import_react27 = __toESM(require_react(), 1);
var SvgChevronRightMinor = function SvgChevronRightMinor2(props) {
  return /* @__PURE__ */ import_react27.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react27.default.createElement("path", {
    fillRule: "evenodd",
    d: "M7.72 14.53a.75.75 0 0 1 0-1.06l3.47-3.47-3.47-3.47a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0Z"
  }));
};
SvgChevronRightMinor.displayName = "ChevronRightMinor";

// node_modules/@shopify/polaris-icons/dist/icons/ChevronUpMinor.svg.mjs
var import_react28 = __toESM(require_react(), 1);
var SvgChevronUpMinor = function SvgChevronUpMinor2(props) {
  return /* @__PURE__ */ import_react28.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react28.default.createElement("path", {
    fillRule: "evenodd",
    d: "M14.53 12.28a.75.75 0 0 1-1.06 0l-3.47-3.47-3.47 3.47a.75.75 0 0 1-1.06-1.06l4-4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06Z"
  }));
};
SvgChevronUpMinor.displayName = "ChevronUpMinor";

// node_modules/@shopify/polaris-icons/dist/icons/CircleAlertMajor.svg.mjs
var import_react29 = __toESM(require_react(), 1);
var SvgCircleAlertMajor = function SvgCircleAlertMajor2(props) {
  return /* @__PURE__ */ import_react29.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react29.default.createElement("path", {
    d: "M10 6a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75Z"
  }), /* @__PURE__ */ import_react29.default.createElement("path", {
    d: "M11 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /* @__PURE__ */ import_react29.default.createElement("path", {
    fillRule: "evenodd",
    d: "M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
  }));
};
SvgCircleAlertMajor.displayName = "CircleAlertMajor";

// node_modules/@shopify/polaris-icons/dist/icons/CircleCancelMinor.svg.mjs
var import_react30 = __toESM(require_react(), 1);
var SvgCircleCancelMinor = function SvgCircleCancelMinor2(props) {
  return /* @__PURE__ */ import_react30.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react30.default.createElement("path", {
    d: "M13.03 6.97a.75.75 0 0 1 0 1.06l-1.97 1.97 1.97 1.97a.75.75 0 1 1-1.06 1.06l-1.97-1.97-1.97 1.97a.75.75 0 0 1-1.06-1.06l1.97-1.97-1.97-1.97a.75.75 0 0 1 1.06-1.06l1.97 1.97 1.97-1.97a.75.75 0 0 1 1.06 0Z"
  }), /* @__PURE__ */ import_react30.default.createElement("path", {
    fillRule: "evenodd",
    d: "M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
  }));
};
SvgCircleCancelMinor.displayName = "CircleCancelMinor";

// node_modules/@shopify/polaris-icons/dist/icons/DiamondAlertMinor.svg.mjs
var import_react31 = __toESM(require_react(), 1);
var SvgDiamondAlertMinor = function SvgDiamondAlertMinor2(props) {
  return /* @__PURE__ */ import_react31.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react31.default.createElement("path", {
    d: "M10 6a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75Z"
  }), /* @__PURE__ */ import_react31.default.createElement("path", {
    d: "M11 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /* @__PURE__ */ import_react31.default.createElement("path", {
    fillRule: "evenodd",
    d: "M11.237 3.177a1.75 1.75 0 0 0-2.474 0l-5.586 5.585a1.75 1.75 0 0 0 0 2.475l5.586 5.586a1.75 1.75 0 0 0 2.474 0l5.586-5.586a1.75 1.75 0 0 0 0-2.475l-5.586-5.585Zm-1.414 1.06a.25.25 0 0 1 .354 0l5.586 5.586a.25.25 0 0 1 0 .354l-5.586 5.585a.25.25 0 0 1-.354 0l-5.586-5.585a.25.25 0 0 1 0-.354l5.586-5.586Z"
  }));
};
SvgDiamondAlertMinor.displayName = "DiamondAlertMinor";

// node_modules/@shopify/polaris-icons/dist/icons/HorizontalDotsMinor.svg.mjs
var import_react32 = __toESM(require_react(), 1);
var SvgHorizontalDotsMinor = function SvgHorizontalDotsMinor2(props) {
  return /* @__PURE__ */ import_react32.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react32.default.createElement("path", {
    d: "M6 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
  }), /* @__PURE__ */ import_react32.default.createElement("path", {
    d: "M11.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
  }), /* @__PURE__ */ import_react32.default.createElement("path", {
    d: "M15.5 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
  }));
};
SvgHorizontalDotsMinor.displayName = "HorizontalDotsMinor";

// node_modules/@shopify/polaris-icons/dist/icons/InfoMinor.svg.mjs
var import_react33 = __toESM(require_react(), 1);
var SvgInfoMinor = function SvgInfoMinor2(props) {
  return /* @__PURE__ */ import_react33.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react33.default.createElement("path", {
    d: "M11 6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /* @__PURE__ */ import_react33.default.createElement("path", {
    d: "M10.75 9.25a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0v-4.5Z"
  }), /* @__PURE__ */ import_react33.default.createElement("path", {
    fillRule: "evenodd",
    d: "M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
  }));
};
SvgInfoMinor.displayName = "InfoMinor";

// node_modules/@shopify/polaris-icons/dist/icons/RiskMinor.svg.mjs
var import_react34 = __toESM(require_react(), 1);
var SvgRiskMinor = function SvgRiskMinor2(props) {
  return /* @__PURE__ */ import_react34.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react34.default.createElement("path", {
    d: "M10 6.75a.75.75 0 0 1 .75.75v3.5a.75.75 0 1 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75Z"
  }), /* @__PURE__ */ import_react34.default.createElement("path", {
    d: "M11 13.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /* @__PURE__ */ import_react34.default.createElement("path", {
    fillRule: "evenodd",
    d: "M10 3.5c-1.045 0-1.784.702-2.152 1.447a449.26 449.26 0 0 1-2.005 3.847l-.028.052a403.426 403.426 0 0 0-2.008 3.856c-.372.752-.478 1.75.093 2.614.57.863 1.542 1.184 2.464 1.184h7.272c.922 0 1.895-.32 2.464-1.184.57-.864.465-1.862.093-2.614-.21-.424-1.113-2.147-2.004-3.847l-.032-.061a429.497 429.497 0 0 1-2.005-3.847c-.368-.745-1.107-1.447-2.152-1.447Zm-.808 2.112c.404-.816 1.212-.816 1.616 0 .202.409 1.112 2.145 2.022 3.88a418.904 418.904 0 0 1 2.018 3.875c.404.817 0 1.633-1.212 1.633h-7.272c-1.212 0-1.617-.816-1.212-1.633.202-.408 1.113-2.147 2.023-3.883a421.932 421.932 0 0 0 2.017-3.872Z"
  }));
};
SvgRiskMinor.displayName = "RiskMinor";

// node_modules/@shopify/polaris-icons/dist/icons/SearchMinor.svg.mjs
var import_react35 = __toESM(require_react(), 1);
var SvgSearchMinor = function SvgSearchMinor2(props) {
  return /* @__PURE__ */ import_react35.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react35.default.createElement("path", {
    fillRule: "evenodd",
    d: "M12.323 13.383a5.5 5.5 0 1 1 1.06-1.06l2.897 2.897a.75.75 0 1 1-1.06 1.06l-2.897-2.897Zm.677-4.383a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
  }));
};
SvgSearchMinor.displayName = "SearchMinor";

// node_modules/@shopify/polaris-icons/dist/icons/SelectMinor.svg.mjs
var import_react36 = __toESM(require_react(), 1);
var SvgSelectMinor = function SvgSelectMinor2(props) {
  return /* @__PURE__ */ import_react36.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react36.default.createElement("path", {
    d: "M10.884 4.323a1.25 1.25 0 0 0-1.768 0l-2.646 2.647a.75.75 0 0 0 1.06 1.06l2.47-2.47 2.47 2.47a.75.75 0 1 0 1.06-1.06l-2.646-2.647Z"
  }), /* @__PURE__ */ import_react36.default.createElement("path", {
    d: "m13.53 13.03-2.646 2.647a1.25 1.25 0 0 1-1.768 0l-2.646-2.647a.75.75 0 0 1 1.06-1.06l2.47 2.47 2.47-2.47a.75.75 0 0 1 1.06 1.06Z"
  }));
};
SvgSelectMinor.displayName = "SelectMinor";

// node_modules/@shopify/polaris-icons/dist/icons/TickMinor.svg.mjs
var import_react37 = __toESM(require_react(), 1);
var SvgTickMinor = function SvgTickMinor2(props) {
  return /* @__PURE__ */ import_react37.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react37.default.createElement("path", {
    fillRule: "evenodd",
    d: "M15.78 5.97a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 1 1 1.06-1.06l2.72 2.72 5.97-5.97a.75.75 0 0 1 1.06 0Z"
  }));
};
SvgTickMinor.displayName = "TickMinor";

// node_modules/@shopify/polaris-icons/dist/index.mjs
var import_react38 = __toESM(require_react(), 1);

// node_modules/@shopify/polaris/build/esm/utilities/is-object.js
function isObject(value) {
  const type = typeof value;
  return value != null && (type === "object" || type === "function");
}

// node_modules/@shopify/polaris/build/esm/utilities/css.js
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function variationName(name, value) {
  return `${name}${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}
function sanitizeCustomProperties(styles40) {
  const nonNullValues = Object.entries(styles40).filter(([_, value]) => value != null);
  return nonNullValues.length ? Object.fromEntries(nonNullValues) : void 0;
}
function getResponsiveProps(componentName, componentProp, tokenSubgroup, responsiveProp) {
  if (!responsiveProp)
    return {};
  let result;
  if (!isObject(responsiveProp)) {
    result = {
      [breakpointsAliases[0]]: `var(--p-${tokenSubgroup}-${responsiveProp})`
    };
  } else {
    result = Object.fromEntries(Object.entries(responsiveProp).map(([breakpointAlias, aliasOrScale]) => [breakpointAlias, `var(--p-${tokenSubgroup}-${aliasOrScale})`]));
  }
  return Object.fromEntries(Object.entries(result).map(([breakpointAlias, value]) => [`--pc-${componentName}-${componentProp}-${breakpointAlias}`, value]));
}
function getResponsiveValue(componentName, componentProp, responsiveProp) {
  if (!responsiveProp)
    return {};
  if (!isObject(responsiveProp)) {
    return {
      [`--pc-${componentName}-${componentProp}-${breakpointsAliases[0]}`]: responsiveProp
    };
  }
  return Object.fromEntries(Object.entries(responsiveProp).map(([breakpointAlias, responsiveValue]) => [`--pc-${componentName}-${componentProp}-${breakpointAlias}`, responsiveValue]));
}

// node_modules/@shopify/polaris/build/esm/utilities/is-element-in-viewport.js
function isElementInViewport(element) {
  const {
    top,
    left,
    bottom,
    right
  } = element.getBoundingClientRect();
  return top >= 0 && right <= window.innerWidth && bottom <= window.innerHeight && left >= 0;
}

// node_modules/@shopify/polaris/build/esm/utilities/focus.js
var FOCUSABLE_SELECTOR = 'a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not([aria-disabled="true"]):not([tabindex="-1"]):not(:disabled),*[tabindex]';
var KEYBOARD_FOCUSABLE_SELECTORS = 'a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not([aria-disabled="true"]):not([tabindex="-1"]):not(:disabled),*[tabindex]:not([tabindex="-1"])';
var MENUITEM_FOCUSABLE_SELECTORS = 'a[role="menuitem"],frame[role="menuitem"],iframe[role="menuitem"],input[role="menuitem"]:not([type=hidden]):not(:disabled),select[role="menuitem"]:not(:disabled),textarea[role="menuitem"]:not(:disabled),button[role="menuitem"]:not(:disabled),*[tabindex]:not([tabindex="-1"])';
var handleMouseUpByBlurring = ({
  currentTarget
}) => currentTarget.blur();
function nextFocusableNode(node, filter) {
  const allFocusableElements = [...document.querySelectorAll(FOCUSABLE_SELECTOR)];
  const sliceLocation = allFocusableElements.indexOf(node) + 1;
  const focusableElementsAfterNode = allFocusableElements.slice(sliceLocation);
  for (const focusableElement of focusableElementsAfterNode) {
    if (isElementInViewport(focusableElement) && (!filter || filter && filter(focusableElement))) {
      return focusableElement;
    }
  }
  return null;
}
function findFirstFocusableNode(element, onlyDescendants = true) {
  if (!onlyDescendants && matches(element, FOCUSABLE_SELECTOR)) {
    return element;
  }
  return element.querySelector(FOCUSABLE_SELECTOR);
}
function findFirstFocusableNodeIncludingDisabled(element) {
  const focusableSelector = `a,button,frame,iframe,input:not([type=hidden]),select,textarea,*[tabindex]`;
  if (matches(element, focusableSelector)) {
    return element;
  }
  return element.querySelector(focusableSelector);
}
function focusNextFocusableNode(node, filter) {
  const nextFocusable = nextFocusableNode(node, filter);
  if (nextFocusable && nextFocusable instanceof HTMLElement) {
    nextFocusable.focus();
    return true;
  }
  return false;
}
function findFirstKeyboardFocusableNode(element, onlyDescendants = true) {
  if (!onlyDescendants && matches(element, KEYBOARD_FOCUSABLE_SELECTORS)) {
    return element;
  }
  return element.querySelector(KEYBOARD_FOCUSABLE_SELECTORS);
}
function wrapFocusPreviousFocusableMenuItem(parentElement, currentFocusedElement) {
  const allFocusableChildren = getMenuFocusableDescendants(parentElement);
  const currentItemIdx = getCurrentFocusedElementIndex(allFocusableChildren, currentFocusedElement);
  if (currentItemIdx === -1) {
    allFocusableChildren[0].focus();
  } else {
    allFocusableChildren[(currentItemIdx - 1 + allFocusableChildren.length) % allFocusableChildren.length].focus();
  }
}
function wrapFocusNextFocusableMenuItem(parentElement, currentFocusedElement) {
  const allFocusableChildren = getMenuFocusableDescendants(parentElement);
  const currentItemIdx = getCurrentFocusedElementIndex(allFocusableChildren, currentFocusedElement);
  if (currentItemIdx === -1) {
    allFocusableChildren[0].focus();
  } else {
    allFocusableChildren[(currentItemIdx + 1) % allFocusableChildren.length].focus();
  }
}
function getMenuFocusableDescendants(element) {
  return element.querySelectorAll(MENUITEM_FOCUSABLE_SELECTORS);
}
function getCurrentFocusedElementIndex(allFocusableChildren, currentFocusedElement) {
  let currentItemIdx = 0;
  for (const focusableChild of allFocusableChildren) {
    if (focusableChild === currentFocusedElement) {
      break;
    }
    currentItemIdx++;
  }
  return currentItemIdx === allFocusableChildren.length ? -1 : currentItemIdx;
}
function matches(node, selector) {
  if (node.matches) {
    return node.matches(selector);
  }
  const matches2 = (node.ownerDocument || document).querySelectorAll(selector);
  let i = matches2.length;
  while (--i >= 0 && matches2.item(i) !== node)
    return i > -1;
}

// node_modules/@shopify/polaris/build/esm/components/Button/Button.scss.js
var styles = {
  "Button": "Polaris-Button",
  "pressed": "Polaris-Button--pressed",
  "Content": "Polaris-Button__Content",
  "primary": "Polaris-Button--primary",
  "plain": "Polaris-Button--plain",
  "tertiary": "Polaris-Button--tertiary",
  "disabled": "Polaris-Button--disabled",
  "textAlignLeft": "Polaris-Button--textAlignLeft",
  "textAlignStart": "Polaris-Button--textAlignStart",
  "textAlignCenter": "Polaris-Button--textAlignCenter",
  "textAlignRight": "Polaris-Button--textAlignRight",
  "textAlignEnd": "Polaris-Button--textAlignEnd",
  "Icon": "Polaris-Button__Icon",
  "fullWidth": "Polaris-Button--fullWidth",
  "hidden": "Polaris-Button--hidden",
  "Spinner": "Polaris-Button__Spinner",
  "critical": "Polaris-Button--critical",
  "success": "Polaris-Button--success",
  "iconOnly": "Polaris-Button--iconOnly",
  "loading": "Polaris-Button--loading",
  "removeUnderline": "Polaris-Button--removeUnderline",
  "sizeMicro": "Polaris-Button--sizeMicro",
  "sizeSlim": "Polaris-Button--sizeSlim",
  "sizeLarge": "Polaris-Button--sizeLarge",
  "monochrome": "Polaris-Button--monochrome",
  "Text": "Polaris-Button__Text"
};

// node_modules/@shopify/polaris/build/esm/components/Icon/Icon.js
var import_react40 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Icon/Icon.scss.js
var styles2 = {
  "Icon": "Polaris-Icon",
  "applyColor": "Polaris-Icon--applyColor",
  "toneBase": "Polaris-Icon--toneBase",
  "toneSubdued": "Polaris-Icon--toneSubdued",
  "toneCaution": "Polaris-Icon--toneCaution",
  "toneWarning": "Polaris-Icon--toneWarning",
  "toneCritical": "Polaris-Icon--toneCritical",
  "toneInteractive": "Polaris-Icon--toneInteractive",
  "toneInfo": "Polaris-Icon--toneInfo",
  "toneSuccess": "Polaris-Icon--toneSuccess",
  "tonePrimary": "Polaris-Icon--tonePrimary",
  "toneEmphasis": "Polaris-Icon--toneEmphasis",
  "toneMagic": "Polaris-Icon--toneMagic",
  "toneTextCaution": "Polaris-Icon--toneTextCaution",
  "toneTextWarning": "Polaris-Icon--toneTextWarning",
  "toneTextCritical": "Polaris-Icon--toneTextCritical",
  "toneTextInfo": "Polaris-Icon--toneTextInfo",
  "toneTextPrimary": "Polaris-Icon--toneTextPrimary",
  "toneTextSuccess": "Polaris-Icon--toneTextSuccess",
  "toneTextMagic": "Polaris-Icon--toneTextMagic",
  "Svg": "Polaris-Icon__Svg",
  "Img": "Polaris-Icon__Img",
  "Placeholder": "Polaris-Icon__Placeholder"
};

// node_modules/@shopify/polaris/build/esm/components/Text/Text.js
var import_react39 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Text/Text.scss.js
var styles3 = {
  "root": "Polaris-Text--root",
  "block": "Polaris-Text--block",
  "truncate": "Polaris-Text--truncate",
  "visuallyHidden": "Polaris-Text--visuallyHidden",
  "start": "Polaris-Text--start",
  "center": "Polaris-Text--center",
  "end": "Polaris-Text--end",
  "justify": "Polaris-Text--justify",
  "success": "Polaris-Text--success",
  "critical": "Polaris-Text--critical",
  "caution": "Polaris-Text--caution",
  "subdued": "Polaris-Text--subdued",
  "text-inverse": "Polaris-Text__text--inverse",
  "headingSm": "Polaris-Text--headingSm",
  "headingMd": "Polaris-Text--headingMd",
  "headingLg": "Polaris-Text--headingLg",
  "headingXl": "Polaris-Text--headingXl",
  "heading2xl": "Polaris-Text--heading2xl",
  "heading3xl": "Polaris-Text--heading3xl",
  "bodySm": "Polaris-Text--bodySm",
  "bodyMd": "Polaris-Text--bodyMd",
  "bodyLg": "Polaris-Text--bodyLg",
  "regular": "Polaris-Text--regular",
  "medium": "Polaris-Text--medium",
  "semibold": "Polaris-Text--semibold",
  "bold": "Polaris-Text--bold",
  "break": "Polaris-Text--break",
  "numeric": "Polaris-Text--numeric",
  "line-through": "Polaris-Text__line--through"
};

// node_modules/@shopify/polaris/build/esm/components/Text/Text.js
var Text = ({
  alignment,
  as,
  breakWord,
  children,
  tone,
  fontWeight,
  id,
  numeric = false,
  truncate = false,
  variant,
  visuallyHidden = false,
  textDecorationLine
}) => {
  const Component2 = as || (visuallyHidden ? "span" : "p");
  const className = classNames(styles3.root, variant && styles3[variant], fontWeight && styles3[fontWeight], (alignment || truncate) && styles3.block, alignment && styles3[alignment], breakWord && styles3.break, tone && styles3[tone], numeric && styles3.numeric, truncate && styles3.truncate, visuallyHidden && styles3.visuallyHidden, textDecorationLine && styles3[textDecorationLine]);
  return /* @__PURE__ */ import_react39.default.createElement(Component2, Object.assign({
    className
  }, id && {
    id
  }), children);
};

// node_modules/@shopify/polaris/build/esm/components/Icon/Icon.js
function Icon({
  source,
  tone,
  accessibilityLabel
}) {
  let sourceType;
  if (typeof source === "function") {
    sourceType = "function";
  } else if (source === "placeholder") {
    sourceType = "placeholder";
  } else {
    sourceType = "external";
  }
  if (tone && sourceType === "external" && true) {
    console.warn("Recoloring external SVGs is not supported. Set the intended color on your SVG instead.");
  }
  const className = classNames(styles2.Icon, tone && styles2[variationName("tone", tone)], tone && styles2.applyColor);
  const SourceComponent = source;
  const contentMarkup = {
    function: /* @__PURE__ */ import_react40.default.createElement(SourceComponent, {
      className: styles2.Svg,
      focusable: "false",
      "aria-hidden": "true"
    }),
    placeholder: /* @__PURE__ */ import_react40.default.createElement("div", {
      className: styles2.Placeholder
    }),
    external: /* @__PURE__ */ import_react40.default.createElement("img", {
      className: styles2.Img,
      src: `data:image/svg+xml;utf8,${source}`,
      alt: "",
      "aria-hidden": "true"
    })
  };
  return /* @__PURE__ */ import_react40.default.createElement("span", {
    className
  }, /* @__PURE__ */ import_react40.default.createElement(Text, {
    as: "span",
    visuallyHidden: true
  }, accessibilityLabel), contentMarkup[sourceType]);
}

// node_modules/@shopify/polaris/build/esm/components/Spinner/Spinner.js
var import_react41 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Spinner/Spinner.scss.js
var styles4 = {
  "Spinner": "Polaris-Spinner",
  "sizeSmall": "Polaris-Spinner--sizeSmall",
  "sizeLarge": "Polaris-Spinner--sizeLarge"
};

// node_modules/@shopify/polaris/build/esm/components/Spinner/Spinner.js
function Spinner({
  size: size2 = "large",
  accessibilityLabel,
  hasFocusableParent
}) {
  const isAfterInitialMount = useIsAfterInitialMount();
  const className = classNames(styles4.Spinner, size2 && styles4[variationName("size", size2)]);
  const spinnerSVGMarkup = size2 === "large" ? /* @__PURE__ */ import_react41.default.createElement("svg", {
    viewBox: "0 0 44 44",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react41.default.createElement("path", {
    d: "M15.542 1.487A21.507 21.507 0 00.5 22c0 11.874 9.626 21.5 21.5 21.5 9.847 0 18.364-6.675 20.809-16.072a1.5 1.5 0 00-2.904-.756C37.803 34.755 30.473 40.5 22 40.5 11.783 40.5 3.5 32.217 3.5 22c0-8.137 5.3-15.247 12.942-17.65a1.5 1.5 0 10-.9-2.863z"
  })) : /* @__PURE__ */ import_react41.default.createElement("svg", {
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react41.default.createElement("path", {
    d: "M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"
  }));
  const spanAttributes = {
    ...!hasFocusableParent && {
      role: "status"
    }
  };
  const accessibilityLabelMarkup = (isAfterInitialMount || !hasFocusableParent) && /* @__PURE__ */ import_react41.default.createElement(Text, {
    as: "span",
    visuallyHidden: true
  }, accessibilityLabel);
  return /* @__PURE__ */ import_react41.default.createElement(import_react41.default.Fragment, null, /* @__PURE__ */ import_react41.default.createElement("span", {
    className
  }, spinnerSVGMarkup), /* @__PURE__ */ import_react41.default.createElement("span", spanAttributes, accessibilityLabelMarkup));
}

// node_modules/@shopify/polaris/build/esm/components/UnstyledButton/UnstyledButton.js
var import_react45 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/use-disable-interaction.js
var import_react42 = __toESM(require_react());
function useDisableClick(disabled, handleClick) {
  const handleClickWrapper = (0, import_react42.useCallback)((event) => {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, [disabled]);
  if (!disabled) {
    return handleClick;
  }
  return handleClickWrapper;
}

// node_modules/@shopify/polaris/build/esm/components/UnstyledLink/UnstyledLink.js
var import_react44 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/link/hooks.js
var import_react43 = __toESM(require_react());
function useLink() {
  return (0, import_react43.useContext)(LinkContext);
}

// node_modules/@shopify/polaris/build/esm/components/UnstyledLink/UnstyledLink.js
var UnstyledLink = /* @__PURE__ */ (0, import_react44.memo)(/* @__PURE__ */ (0, import_react44.forwardRef)(function UnstyledLink2(props, _ref) {
  const LinkComponent = useLink();
  if (LinkComponent) {
    return /* @__PURE__ */ import_react44.default.createElement(LinkComponent, Object.assign({}, unstyled.props, props, {
      ref: _ref
    }));
  }
  const {
    external,
    url,
    target: targetProp,
    ...rest
  } = props;
  let target;
  if (external) {
    target = "_blank";
  } else {
    target = targetProp ?? void 0;
  }
  const rel = target === "_blank" ? "noopener noreferrer" : void 0;
  return /* @__PURE__ */ import_react44.default.createElement("a", Object.assign({
    target
  }, rest, {
    href: url,
    rel
  }, unstyled.props, {
    ref: _ref
  }));
}));

// node_modules/@shopify/polaris/build/esm/components/UnstyledButton/UnstyledButton.js
function UnstyledButton({
  id,
  children,
  className,
  url,
  external,
  target,
  download,
  submit,
  disabled,
  loading,
  pressed,
  accessibilityLabel,
  role,
  ariaControls,
  ariaExpanded,
  ariaDescribedBy,
  ariaChecked,
  onClick,
  onFocus,
  onBlur,
  onKeyDown,
  onKeyPress,
  onKeyUp,
  onMouseEnter,
  onTouchStart,
  ...rest
}) {
  let buttonMarkup;
  const commonProps = {
    id,
    className,
    "aria-label": accessibilityLabel
  };
  const interactiveProps = {
    ...commonProps,
    role,
    onClick,
    onFocus,
    onBlur,
    onMouseUp: handleMouseUpByBlurring,
    onMouseEnter,
    onTouchStart
  };
  const handleClick = useDisableClick(disabled, onClick);
  if (url) {
    buttonMarkup = disabled ? (
      // Render an `<a>` so toggling disabled/enabled state changes only the
      // `href` attribute instead of replacing the whole element.
      /* @__PURE__ */ import_react45.default.createElement("a", commonProps, children)
    ) : /* @__PURE__ */ import_react45.default.createElement(UnstyledLink, Object.assign({}, interactiveProps, {
      url,
      external,
      target,
      download
    }, rest), children);
  } else {
    buttonMarkup = /* @__PURE__ */ import_react45.default.createElement("button", Object.assign({}, interactiveProps, {
      "aria-disabled": disabled,
      type: submit ? "submit" : "button",
      "aria-busy": loading ? true : void 0,
      "aria-controls": ariaControls,
      "aria-expanded": ariaExpanded,
      "aria-describedby": ariaDescribedBy,
      "aria-checked": ariaChecked,
      "aria-pressed": pressed,
      onKeyDown,
      onKeyUp,
      onKeyPress,
      onClick: handleClick,
      tabIndex: disabled ? -1 : void 0
    }, rest), children);
  }
  return buttonMarkup;
}

// node_modules/@shopify/polaris/build/esm/utilities/i18n/hooks.js
var import_react46 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/errors.js
var MissingAppProviderError = class extends Error {
  constructor(message = "") {
    super(`${message ? `${message} ` : message}Your application must be wrapped in an <AppProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions.`);
    this.name = "MissingAppProviderError";
  }
};

// node_modules/@shopify/polaris/build/esm/utilities/i18n/hooks.js
function useI18n() {
  const i18n = (0, import_react46.useContext)(I18nContext);
  if (!i18n) {
    throw new MissingAppProviderError("No i18n was provided.");
  }
  return i18n;
}

// node_modules/@shopify/polaris/build/esm/components/Button/Button.js
var DEFAULT_SIZE = "medium";
function Button({
  id,
  children,
  url,
  disabled,
  external,
  download,
  target,
  submit,
  loading,
  pressed,
  accessibilityLabel,
  role,
  ariaControls,
  ariaExpanded,
  ariaDescribedBy,
  ariaChecked,
  onClick,
  onFocus,
  onBlur,
  onKeyDown,
  onKeyPress,
  onKeyUp,
  onMouseEnter,
  onTouchStart,
  onPointerDown,
  icon,
  disclosure,
  removeUnderline,
  size: size2 = DEFAULT_SIZE,
  textAlign,
  fullWidth,
  dataPrimaryLink,
  tone,
  variant
}) {
  const i18n = useI18n();
  const isDisabled = disabled || loading;
  const className = classNames(styles.Button, variant === "primary" && styles.primary, variant === "plain" && styles.plain, variant === "tertiary" && styles.tertiary, variant === "monochromePlain" && styles.monochrome, variant === "monochromePlain" && styles.plain, tone === "critical" && styles.critical, tone === "success" && styles.success, isDisabled && styles.disabled, loading && styles.loading, pressed && !disabled && !url && styles.pressed, size2 && size2 !== DEFAULT_SIZE && styles[variationName("size", size2)], textAlign && styles[variationName("textAlign", textAlign)], fullWidth && styles.fullWidth, icon && children == null && styles.iconOnly, removeUnderline && styles.removeUnderline);
  const disclosureMarkup = disclosure ? /* @__PURE__ */ import_react47.default.createElement("span", {
    className: styles.Icon
  }, /* @__PURE__ */ import_react47.default.createElement("div", {
    className: classNames(styles.DisclosureIcon, loading && styles.hidden)
  }, /* @__PURE__ */ import_react47.default.createElement(Icon, {
    source: loading ? "placeholder" : getDisclosureIconSource(disclosure, SvgChevronUpMinor, SvgChevronDownMinor)
  }))) : null;
  const iconSource = isIconSource(icon) ? /* @__PURE__ */ import_react47.default.createElement(Icon, {
    source: loading ? "placeholder" : icon
  }) : icon;
  const iconMarkup = iconSource ? /* @__PURE__ */ import_react47.default.createElement("span", {
    className: classNames(styles.Icon, loading && styles.hidden)
  }, iconSource) : null;
  const childMarkup = children ? /* @__PURE__ */ import_react47.default.createElement("span", {
    className: classNames(styles.Text, removeUnderline && styles.removeUnderline),
    key: disabled ? "text-disabled" : "text"
  }, children) : null;
  const spinnerSVGMarkup = loading ? /* @__PURE__ */ import_react47.default.createElement("span", {
    className: styles.Spinner
  }, /* @__PURE__ */ import_react47.default.createElement(Spinner, {
    size: "small",
    accessibilityLabel: i18n.translate("Polaris.Button.spinnerAccessibilityLabel")
  })) : null;
  const commonProps = {
    id,
    className,
    accessibilityLabel,
    ariaDescribedBy,
    role,
    onClick,
    onFocus,
    onBlur,
    onMouseUp: handleMouseUpByBlurring,
    onMouseEnter,
    onTouchStart,
    "data-primary-link": dataPrimaryLink
  };
  const linkProps = {
    url,
    external,
    download,
    target
  };
  const actionProps = {
    submit,
    disabled: isDisabled,
    loading,
    ariaControls,
    ariaExpanded,
    ariaChecked,
    pressed,
    onKeyDown,
    onKeyUp,
    onKeyPress,
    onPointerDown
  };
  const buttonMarkup = /* @__PURE__ */ import_react47.default.createElement(UnstyledButton, Object.assign({}, commonProps, linkProps, actionProps), /* @__PURE__ */ import_react47.default.createElement("span", {
    className: styles.Content
  }, spinnerSVGMarkup, iconMarkup, childMarkup, disclosureMarkup));
  return buttonMarkup;
}
function isIconSource(x) {
  return typeof x === "string" || typeof x === "object" && x.body || typeof x === "function";
}
function getDisclosureIconSource(disclosure, upIcon, downIcon) {
  if (disclosure === "select") {
    return SvgSelectMinor;
  }
  return disclosure === "up" ? upIcon : downIcon;
}

// node_modules/@shopify/polaris/build/esm/components/Button/utils.js
function buttonsFrom(actions, overrides = {}) {
  if (Array.isArray(actions)) {
    return actions.map((action, index) => buttonFrom(action, overrides, index));
  } else {
    const action = actions;
    return buttonFrom(action, overrides);
  }
}
function buttonFrom({
  content,
  onAction,
  plain,
  destructive,
  ...action
}, overrides, key) {
  const plainVariant = plain ? "plain" : void 0;
  const destructiveVariant = destructive ? "primary" : void 0;
  const tone = !overrides?.tone && destructive ? "critical" : overrides?.tone;
  return /* @__PURE__ */ import_react48.default.createElement(Button, Object.assign({
    key,
    onClick: onAction,
    tone,
    variant: plainVariant || destructiveVariant
  }, action, overrides), content);
}

// node_modules/@shopify/polaris/build/esm/components/Card/Card.js
var import_react51 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/ShadowBevel/ShadowBevel.js
var import_react49 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/ShadowBevel/ShadowBevel.scss.js
var styles5 = {
  "ShadowBevel": "Polaris-ShadowBevel"
};

// node_modules/@shopify/polaris/build/esm/components/ShadowBevel/ShadowBevel.js
function ShadowBevel(props) {
  const {
    as = "div",
    bevel = true,
    borderRadius,
    boxShadow,
    children,
    zIndex: zIndex2 = "0"
  } = props;
  const Component2 = as;
  return /* @__PURE__ */ import_react49.default.createElement(Component2, {
    className: styles5.ShadowBevel,
    style: {
      "--pc-shadow-bevel-z-index": zIndex2,
      ...getResponsiveValue("shadow-bevel", "content", mapResponsiveProp(bevel, (bevel2) => bevel2 ? '""' : "none")),
      ...getResponsiveValue("shadow-bevel", "box-shadow", mapResponsiveProp(bevel, (bevel2) => bevel2 ? `var(--p-shadow-${boxShadow})` : "none")),
      ...getResponsiveValue("shadow-bevel", "border-radius", mapResponsiveProp(bevel, (bevel2) => bevel2 ? `var(--p-border-radius-${borderRadius})` : "var(--p-border-radius-0)"))
    }
  }, children);
}
function mapResponsiveProp(responsiveProp, callback) {
  if (typeof responsiveProp === "boolean") {
    return callback(responsiveProp);
  }
  return Object.fromEntries(Object.entries(responsiveProp).map(([breakpointsAlias, value]) => [breakpointsAlias, callback(value)]));
}

// node_modules/@shopify/polaris/build/esm/components/Box/Box.js
var import_react50 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Box/Box.scss.js
var styles6 = {
  "listReset": "Polaris-Box--listReset",
  "Box": "Polaris-Box",
  "visuallyHidden": "Polaris-Box--visuallyHidden",
  "printHidden": "Polaris-Box--printHidden"
};

// node_modules/@shopify/polaris/build/esm/components/Box/Box.js
var Box = /* @__PURE__ */ (0, import_react50.forwardRef)(({
  as = "div",
  background,
  borderColor,
  borderStyle,
  borderWidth,
  borderBlockStartWidth,
  borderBlockEndWidth,
  borderInlineStartWidth,
  borderInlineEndWidth,
  borderRadius,
  borderEndStartRadius,
  borderEndEndRadius,
  borderStartStartRadius,
  borderStartEndRadius,
  children,
  color: color2,
  id,
  minHeight,
  minWidth,
  maxWidth,
  overflowX,
  overflowY,
  outlineColor,
  outlineStyle,
  outlineWidth,
  padding,
  paddingBlockStart,
  paddingBlockEnd,
  paddingInlineStart,
  paddingInlineEnd,
  role,
  shadow: shadow2,
  tabIndex,
  width: width2,
  printHidden,
  visuallyHidden,
  position,
  insetBlockStart,
  insetBlockEnd,
  insetInlineStart,
  insetInlineEnd,
  zIndex: zIndex2,
  opacity,
  ...restProps
}, ref) => {
  const borderStyleValue = borderStyle ? borderStyle : borderColor || borderWidth || borderBlockStartWidth || borderBlockEndWidth || borderInlineStartWidth || borderInlineEndWidth ? "solid" : void 0;
  const outlineStyleValue = outlineStyle ? outlineStyle : outlineColor || outlineWidth ? "solid" : void 0;
  const style = {
    "--pc-box-color": color2 ? `var(--p-color-${color2})` : void 0,
    "--pc-box-background": background ? `var(--p-color-${background})` : void 0,
    // eslint-disable-next-line no-nested-ternary
    "--pc-box-border-color": borderColor ? borderColor === "transparent" ? "transparent" : `var(--p-color-${borderColor})` : void 0,
    "--pc-box-border-style": borderStyleValue,
    "--pc-box-border-radius": borderRadius ? `var(--p-border-radius-${borderRadius})` : void 0,
    "--pc-box-border-end-start-radius": borderEndStartRadius ? `var(--p-border-radius-${borderEndStartRadius})` : void 0,
    "--pc-box-border-end-end-radius": borderEndEndRadius ? `var(--p-border-radius-${borderEndEndRadius})` : void 0,
    "--pc-box-border-start-start-radius": borderStartStartRadius ? `var(--p-border-radius-${borderStartStartRadius})` : void 0,
    "--pc-box-border-start-end-radius": borderStartEndRadius ? `var(--p-border-radius-${borderStartEndRadius})` : void 0,
    "--pc-box-border-width": borderWidth ? `var(--p-border-width-${borderWidth})` : void 0,
    "--pc-box-border-block-start-width": borderBlockStartWidth ? `var(--p-border-width-${borderBlockStartWidth})` : void 0,
    "--pc-box-border-block-end-width": borderBlockEndWidth ? `var(--p-border-width-${borderBlockEndWidth})` : void 0,
    "--pc-box-border-inline-start-width": borderInlineStartWidth ? `var(--p-border-width-${borderInlineStartWidth})` : void 0,
    "--pc-box-border-inline-end-width": borderInlineEndWidth ? `var(--p-border-width-${borderInlineEndWidth})` : void 0,
    "--pc-box-min-height": minHeight,
    "--pc-box-min-width": minWidth,
    "--pc-box-max-width": maxWidth,
    "--pc-box-outline-color": outlineColor ? `var(--p-color-${outlineColor})` : void 0,
    "--pc-box-outline-style": outlineStyleValue,
    "--pc-box-outline-width": outlineWidth ? `var(--p-border-width-${outlineWidth})` : void 0,
    "--pc-box-overflow-x": overflowX,
    "--pc-box-overflow-y": overflowY,
    ...getResponsiveProps("box", "padding-block-end", "space", paddingBlockEnd || padding),
    ...getResponsiveProps("box", "padding-block-start", "space", paddingBlockStart || padding),
    ...getResponsiveProps("box", "padding-inline-start", "space", paddingInlineStart || padding),
    ...getResponsiveProps("box", "padding-inline-end", "space", paddingInlineEnd || padding),
    "--pc-box-shadow": shadow2 ? `var(--p-shadow-${shadow2})` : void 0,
    "--pc-box-width": width2,
    position,
    "--pc-box-inset-block-start": insetBlockStart ? `var(--p-space-${insetBlockStart})` : void 0,
    "--pc-box-inset-block-end": insetBlockEnd ? `var(--p-space-${insetBlockEnd})` : void 0,
    "--pc-box-inset-inline-start": insetInlineStart ? `var(--p-space-${insetInlineStart})` : void 0,
    "--pc-box-inset-inline-end": insetInlineEnd ? `var(--p-space-${insetInlineEnd})` : void 0,
    zIndex: zIndex2,
    opacity
  };
  const className = classNames(styles6.Box, visuallyHidden && styles6.visuallyHidden, printHidden && styles6.printHidden, as === "ul" && styles6.listReset);
  return /* @__PURE__ */ import_react50.default.createElement(as, {
    className,
    id,
    ref,
    style: sanitizeCustomProperties(style),
    role,
    tabIndex,
    ...restProps
  }, children);
});
Box.displayName = "Box";

// node_modules/@shopify/polaris/build/esm/components/Card/Card.js
var Card = ({
  children,
  background = "bg-surface",
  padding = {
    xs: "400"
  },
  roundedAbove
}) => {
  const breakpoints2 = useBreakpoints();
  const defaultBorderRadius = "300";
  let hasBorderRadius = !roundedAbove;
  if (roundedAbove && breakpoints2[`${roundedAbove}Up`]) {
    hasBorderRadius = true;
  }
  return /* @__PURE__ */ import_react51.default.createElement(WithinContentContext.Provider, {
    value: true
  }, /* @__PURE__ */ import_react51.default.createElement(ShadowBevel, {
    boxShadow: "100",
    borderRadius: hasBorderRadius ? defaultBorderRadius : "0",
    zIndex: "32"
  }, /* @__PURE__ */ import_react51.default.createElement(Box, {
    background,
    padding,
    overflowX: "hidden",
    overflowY: "hidden",
    minHeight: "100%"
  }, children)));
};

// node_modules/@shopify/polaris/build/esm/components/InlineStack/InlineStack.js
var import_react52 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/InlineStack/InlineStack.scss.js
var styles7 = {
  "InlineStack": "Polaris-InlineStack"
};

// node_modules/@shopify/polaris/build/esm/components/InlineStack/InlineStack.js
var InlineStack = function InlineStack2({
  align,
  blockAlign,
  gap,
  wrap = true,
  children
}) {
  const style = {
    "--pc-inline-stack-align": align,
    "--pc-inline-stack-block-align": blockAlign,
    "--pc-inline-stack-wrap": wrap ? "wrap" : "nowrap",
    ...getResponsiveProps("inline-stack", "gap", "space", gap)
  };
  return /* @__PURE__ */ import_react52.default.createElement("div", {
    className: styles7.InlineStack,
    style
  }, children);
};

// node_modules/@shopify/polaris/build/esm/components/BlockStack/BlockStack.js
var import_react53 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/BlockStack/BlockStack.scss.js
var styles8 = {
  "BlockStack": "Polaris-BlockStack",
  "listReset": "Polaris-BlockStack--listReset",
  "fieldsetReset": "Polaris-BlockStack--fieldsetReset"
};

// node_modules/@shopify/polaris/build/esm/components/BlockStack/BlockStack.js
var BlockStack = ({
  as = "div",
  children,
  align,
  inlineAlign,
  gap,
  id,
  reverseOrder = false,
  ...restProps
}) => {
  const className = classNames(styles8.BlockStack, (as === "ul" || as === "ol") && styles8.listReset, as === "fieldset" && styles8.fieldsetReset);
  const style = {
    "--pc-block-stack-align": align ? `${align}` : null,
    "--pc-block-stack-inline-align": inlineAlign ? `${inlineAlign}` : null,
    "--pc-block-stack-order": reverseOrder ? "column-reverse" : "column",
    ...getResponsiveProps("block-stack", "gap", "space", gap)
  };
  return /* @__PURE__ */ import_react53.default.createElement(as, {
    className,
    style: sanitizeCustomProperties(style),
    ...restProps
  }, children);
};

// node_modules/@shopify/polaris/build/esm/components/ActionList/ActionList.js
var import_react81 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/FilterActionsProvider/FilterActionsProvider.js
var import_react54 = __toESM(require_react());
var FilterActionsContext = /* @__PURE__ */ (0, import_react54.createContext)(false);
function FilterActionsProvider({
  children,
  filterActions
}) {
  return /* @__PURE__ */ import_react54.default.createElement(FilterActionsContext.Provider, {
    value: filterActions
  }, children);
}

// node_modules/@shopify/polaris/build/esm/components/ActionList/components/Section/Section.js
var import_react71 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/ActionList/components/Item/Item.js
var import_react70 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/ActionList/ActionList.scss.js
var styles9 = {
  "Item": "Polaris-ActionList__Item",
  "default": "Polaris-ActionList--default",
  "active": "Polaris-ActionList--active",
  "destructive": "Polaris-ActionList--destructive",
  "disabled": "Polaris-ActionList--disabled",
  "Prefix": "Polaris-ActionList__Prefix",
  "Suffix": "Polaris-ActionList__Suffix",
  "indented": "Polaris-ActionList--indented",
  "menu": "Polaris-ActionList--menu",
  "Text": "Polaris-ActionList__Text"
};

// node_modules/@shopify/polaris/build/esm/components/Badge/Badge.js
var import_react57 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/within-filter-context.js
var import_react55 = __toESM(require_react());
var WithinFilterContext = /* @__PURE__ */ (0, import_react55.createContext)(false);

// node_modules/@shopify/polaris/build/esm/components/Badge/Badge.scss.js
var styles10 = {
  "Badge": "Polaris-Badge",
  "toneSuccess": "Polaris-Badge--toneSuccess",
  "toneSuccess-strong": "Polaris-Badge__toneSuccess--strong",
  "toneInfo": "Polaris-Badge--toneInfo",
  "toneInfo-strong": "Polaris-Badge__toneInfo--strong",
  "toneAttention": "Polaris-Badge--toneAttention",
  "toneAttention-strong": "Polaris-Badge__toneAttention--strong",
  "toneWarning": "Polaris-Badge--toneWarning",
  "toneWarning-strong": "Polaris-Badge__toneWarning--strong",
  "toneCritical": "Polaris-Badge--toneCritical",
  "toneCritical-strong": "Polaris-Badge__toneCritical--strong",
  "toneNew": "Polaris-Badge--toneNew",
  "toneRead-only": "Polaris-Badge__toneRead--only",
  "toneEnabled": "Polaris-Badge--toneEnabled",
  "sizeLarge": "Polaris-Badge--sizeLarge",
  "withinFilter": "Polaris-Badge--withinFilter",
  "Icon": "Polaris-Badge__Icon",
  "PipContainer": "Polaris-Badge__PipContainer"
};

// node_modules/@shopify/polaris/build/esm/components/Badge/types.js
var ToneValue;
(function(ToneValue2) {
  ToneValue2["Info"] = "info";
  ToneValue2["Success"] = "success";
  ToneValue2["Warning"] = "warning";
  ToneValue2["Critical"] = "critical";
  ToneValue2["Attention"] = "attention";
  ToneValue2["New"] = "new";
  ToneValue2["InfoStrong"] = "info-strong";
  ToneValue2["SuccessStrong"] = "success-strong";
  ToneValue2["WarningStrong"] = "warning-strong";
  ToneValue2["CriticalStrong"] = "critical-strong";
  ToneValue2["AttentionStrong"] = "attention-strong";
  ToneValue2["ReadOnly"] = "read-only";
  ToneValue2["Enabled"] = "enabled";
})(ToneValue || (ToneValue = {}));
var ProgressValue;
(function(ProgressValue2) {
  ProgressValue2["Incomplete"] = "incomplete";
  ProgressValue2["PartiallyComplete"] = "partiallyComplete";
  ProgressValue2["Complete"] = "complete";
})(ProgressValue || (ProgressValue = {}));

// node_modules/@shopify/polaris/build/esm/components/Badge/utils.js
function getDefaultAccessibilityLabel(i18n, progress, tone) {
  let progressLabel = "";
  let toneLabel = "";
  if (!progress && !tone) {
    return "";
  }
  switch (progress) {
    case ProgressValue.Incomplete:
      progressLabel = i18n.translate("Polaris.Badge.PROGRESS_LABELS.incomplete");
      break;
    case ProgressValue.PartiallyComplete:
      progressLabel = i18n.translate("Polaris.Badge.PROGRESS_LABELS.partiallyComplete");
      break;
    case ProgressValue.Complete:
      progressLabel = i18n.translate("Polaris.Badge.PROGRESS_LABELS.complete");
      break;
  }
  switch (tone) {
    case ToneValue.Info:
    case ToneValue.InfoStrong:
      toneLabel = i18n.translate("Polaris.Badge.TONE_LABELS.info");
      break;
    case ToneValue.Success:
    case ToneValue.SuccessStrong:
      toneLabel = i18n.translate("Polaris.Badge.TONE_LABELS.success");
      break;
    case ToneValue.Warning:
    case ToneValue.WarningStrong:
      toneLabel = i18n.translate("Polaris.Badge.TONE_LABELS.warning");
      break;
    case ToneValue.Critical:
    case ToneValue.CriticalStrong:
      toneLabel = i18n.translate("Polaris.Badge.TONE_LABELS.critical");
      break;
    case ToneValue.Attention:
    case ToneValue.AttentionStrong:
      toneLabel = i18n.translate("Polaris.Badge.TONE_LABELS.attention");
      break;
    case ToneValue.New:
      toneLabel = i18n.translate("Polaris.Badge.TONE_LABELS.new");
      break;
    case ToneValue.ReadOnly:
      toneLabel = i18n.translate("Polaris.Badge.TONE_LABELS.readOnly");
      break;
    case ToneValue.Enabled:
      toneLabel = i18n.translate("Polaris.Badge.TONE_LABELS.enabled");
      break;
  }
  if (!tone && progress) {
    return progressLabel;
  } else if (tone && !progress) {
    return toneLabel;
  } else {
    return i18n.translate("Polaris.Badge.progressAndTone", {
      progressLabel,
      toneLabel
    });
  }
}

// node_modules/@shopify/polaris/build/esm/components/Badge/components/Pip/Pip.js
var import_react56 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Badge/components/Pip/Pip.scss.js
var styles11 = {
  "Pip": "Polaris-Badge-Pip",
  "toneInfo": "Polaris-Badge-Pip--toneInfo",
  "toneSuccess": "Polaris-Badge-Pip--toneSuccess",
  "toneNew": "Polaris-Badge-Pip--toneNew",
  "toneAttention": "Polaris-Badge-Pip--toneAttention",
  "toneWarning": "Polaris-Badge-Pip--toneWarning",
  "toneCritical": "Polaris-Badge-Pip--toneCritical",
  "progressIncomplete": "Polaris-Badge-Pip--progressIncomplete",
  "progressPartiallyComplete": "Polaris-Badge-Pip--progressPartiallyComplete",
  "progressComplete": "Polaris-Badge-Pip--progressComplete"
};

// node_modules/@shopify/polaris/build/esm/components/Badge/components/Pip/Pip.js
function Pip({
  tone,
  progress = "complete",
  accessibilityLabelOverride
}) {
  const i18n = useI18n();
  const className = classNames(styles11.Pip, tone && styles11[variationName("tone", tone)], progress && styles11[variationName("progress", progress)]);
  const accessibilityLabel = accessibilityLabelOverride ? accessibilityLabelOverride : getDefaultAccessibilityLabel(i18n, progress, tone);
  return /* @__PURE__ */ import_react56.default.createElement("span", {
    className
  }, /* @__PURE__ */ import_react56.default.createElement(Text, {
    as: "span",
    visuallyHidden: true
  }, accessibilityLabel));
}

// node_modules/@shopify/polaris/build/esm/components/Badge/Badge.js
var DEFAULT_SIZE2 = "medium";
var progressIconMap = {
  complete: () => /* @__PURE__ */ import_react57.default.createElement("svg", {
    viewBox: "0 0 20 20"
  }, /* @__PURE__ */ import_react57.default.createElement("path", {
    d: "M6 10c0-.93 0-1.395.102-1.776a3 3 0 0 1 2.121-2.122C8.605 6 9.07 6 10 6c.93 0 1.395 0 1.776.102a3 3 0 0 1 2.122 2.122C14 8.605 14 9.07 14 10s0 1.395-.102 1.777a3 3 0 0 1-2.122 2.12C11.395 14 10.93 14 10 14s-1.395 0-1.777-.102a3 3 0 0 1-2.12-2.121C6 11.395 6 10.93 6 10Z"
  })),
  partiallyComplete: () => /* @__PURE__ */ import_react57.default.createElement("svg", {
    viewBox: "0 0 20 20"
  }, /* @__PURE__ */ import_react57.default.createElement("path", {
    fillRule: "evenodd",
    d: "m8.888 6.014-.017-.018-.02.02c-.253.013-.45.038-.628.086a3 3 0 0 0-2.12 2.122C6 8.605 6 9.07 6 10s0 1.395.102 1.777a3 3 0 0 0 2.121 2.12C8.605 14 9.07 14 10 14c.93 0 1.395 0 1.776-.102a3 3 0 0 0 2.122-2.121C14 11.395 14 10.93 14 10c0-.93 0-1.395-.102-1.776a3 3 0 0 0-2.122-2.122C11.395 6 10.93 6 10 6c-.475 0-.829 0-1.112.014ZM8.446 7.34a1.75 1.75 0 0 0-1.041.94l4.314 4.315c.443-.2.786-.576.941-1.042L8.446 7.34Zm4.304 2.536L10.124 7.25c.908.001 1.154.013 1.329.06a1.75 1.75 0 0 1 1.237 1.237c.047.175.059.42.06 1.329ZM8.547 12.69c.182.05.442.06 1.453.06h.106L7.25 9.894V10c0 1.01.01 1.27.06 1.453a1.75 1.75 0 0 0 1.237 1.237Z"
  })),
  incomplete: () => /* @__PURE__ */ import_react57.default.createElement("svg", {
    viewBox: "0 0 20 20"
  }, /* @__PURE__ */ import_react57.default.createElement("path", {
    fillRule: "evenodd",
    d: "M8.547 12.69c.183.05.443.06 1.453.06s1.27-.01 1.453-.06a1.75 1.75 0 0 0 1.237-1.237c.05-.182.06-.443.06-1.453s-.01-1.27-.06-1.453a1.75 1.75 0 0 0-1.237-1.237c-.182-.05-.443-.06-1.453-.06s-1.27.01-1.453.06A1.75 1.75 0 0 0 7.31 8.547c-.05.183-.06.443-.06 1.453s.01 1.27.06 1.453a1.75 1.75 0 0 0 1.237 1.237ZM6.102 8.224C6 8.605 6 9.07 6 10s0 1.395.102 1.777a3 3 0 0 0 2.122 2.12C8.605 14 9.07 14 10 14s1.395 0 1.777-.102a3 3 0 0 0 2.12-2.121C14 11.395 14 10.93 14 10c0-.93 0-1.395-.102-1.776a3 3 0 0 0-2.121-2.122C11.395 6 10.93 6 10 6c-.93 0-1.395 0-1.776.102a3 3 0 0 0-2.122 2.122Z"
  }))
};
function Badge({
  children,
  tone,
  progress,
  icon,
  size: size2 = DEFAULT_SIZE2,
  toneAndProgressLabelOverride
}) {
  const i18n = useI18n();
  const withinFilter = (0, import_react57.useContext)(WithinFilterContext);
  const className = classNames(styles10.Badge, tone && styles10[variationName("tone", tone)], size2 && size2 !== DEFAULT_SIZE2 && styles10[variationName("size", size2)], withinFilter && styles10.withinFilter);
  const accessibilityLabel = toneAndProgressLabelOverride ? toneAndProgressLabelOverride : getDefaultAccessibilityLabel(i18n, progress, tone);
  let accessibilityMarkup = Boolean(accessibilityLabel) && /* @__PURE__ */ import_react57.default.createElement(Text, {
    as: "span",
    visuallyHidden: true
  }, accessibilityLabel);
  if (progress && !icon) {
    accessibilityMarkup = /* @__PURE__ */ import_react57.default.createElement("span", {
      className: styles10.Icon
    }, /* @__PURE__ */ import_react57.default.createElement(Icon, {
      accessibilityLabel,
      source: progressIconMap[progress]
    }));
  }
  return /* @__PURE__ */ import_react57.default.createElement("span", {
    className
  }, accessibilityMarkup, icon && /* @__PURE__ */ import_react57.default.createElement("span", {
    className: styles10.Icon
  }, /* @__PURE__ */ import_react57.default.createElement(Icon, {
    source: icon
  })), children && /* @__PURE__ */ import_react57.default.createElement(Text, {
    as: "span",
    variant: "bodySm",
    fontWeight: tone === "new" ? "medium" : void 0
  }, children));
}
Badge.Pip = Pip;

// node_modules/@shopify/polaris/build/esm/components/Tooltip/Tooltip.js
var import_react69 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/use-toggle.js
var import_react58 = __toESM(require_react());
function useToggle(initialState) {
  const [value, setState] = (0, import_react58.useState)(initialState);
  return {
    value,
    toggle: (0, import_react58.useCallback)(() => setState((state) => !state), []),
    setTrue: (0, import_react58.useCallback)(() => setState(true), []),
    setFalse: (0, import_react58.useCallback)(() => setState(false), [])
  };
}

// node_modules/@shopify/polaris/build/esm/components/Tooltip/Tooltip.scss.js
var styles12 = {
  "TooltipContainer": "Polaris-Tooltip__TooltipContainer",
  "HasUnderline": "Polaris-Tooltip__HasUnderline"
};

// node_modules/@shopify/polaris/build/esm/utilities/ephemeral-presence-manager/hooks.js
var import_react59 = __toESM(require_react());
function useEphemeralPresenceManager() {
  const ephemeralPresenceManager = (0, import_react59.useContext)(EphemeralPresenceManagerContext);
  if (!ephemeralPresenceManager) {
    throw new Error("No ephemeral presence manager was provided. Your application must be wrapped in an <AppProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions.");
  }
  return ephemeralPresenceManager;
}

// node_modules/@shopify/polaris/build/esm/components/Portal/Portal.js
var import_react61 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());

// node_modules/@shopify/polaris/build/esm/utilities/portals/hooks.js
var import_react60 = __toESM(require_react());
function usePortalsManager() {
  const portalsManager = (0, import_react60.useContext)(PortalsManagerContext);
  if (!portalsManager) {
    throw new Error("No portals manager was provided. Your application must be wrapped in an <AppProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions.");
  }
  return portalsManager;
}

// node_modules/@shopify/polaris/build/esm/components/Portal/Portal.js
function Portal({
  children,
  idPrefix = "",
  onPortalCreated = noop2
}) {
  const {
    container
  } = usePortalsManager();
  const uniqueId = (0, import_react61.useId)();
  const portalId = idPrefix !== "" ? `${idPrefix}-${uniqueId}` : uniqueId;
  (0, import_react61.useEffect)(() => {
    onPortalCreated();
  }, [onPortalCreated]);
  return container ? /* @__PURE__ */ (0, import_react_dom.createPortal)(/* @__PURE__ */ import_react61.default.createElement("div", {
    "data-portal-id": portalId
  }, children), container) : null;
}
function noop2() {
}

// node_modules/@shopify/polaris/build/esm/components/Tooltip/components/TooltipOverlay/TooltipOverlay.js
var import_react68 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Tooltip/components/TooltipOverlay/TooltipOverlay.scss.js
var styles13 = {
  "TooltipOverlay": "Polaris-Tooltip-TooltipOverlay",
  "Tail": "Polaris-Tooltip-TooltipOverlay__Tail",
  "positionedAbove": "Polaris-Tooltip-TooltipOverlay--positionedAbove",
  "measuring": "Polaris-Tooltip-TooltipOverlay--measuring",
  "measured": "Polaris-Tooltip-TooltipOverlay--measured",
  "instant": "Polaris-Tooltip-TooltipOverlay--instant",
  "Content": "Polaris-Tooltip-TooltipOverlay__Content",
  "default": "Polaris-Tooltip-TooltipOverlay--default",
  "wide": "Polaris-Tooltip-TooltipOverlay--wide"
};

// node_modules/@shopify/polaris/build/esm/components/PositionedOverlay/PositionedOverlay.js
var import_react67 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/PositionedOverlay/utilities/math.js
function calculateVerticalPosition(activatorRect, overlayRect, overlayMargins, scrollableContainerRect, containerRect, preferredPosition, fixed, topBarOffset = 0) {
  const activatorTop = activatorRect.top;
  const activatorBottom = activatorTop + activatorRect.height;
  const spaceAbove = activatorRect.top - topBarOffset;
  const spaceBelow = containerRect.height - activatorRect.top - activatorRect.height;
  const desiredHeight = overlayRect.height;
  const verticalMargins = overlayMargins.activator + overlayMargins.container;
  const minimumSpaceToScroll = overlayMargins.container;
  const distanceToTopScroll = activatorRect.top - Math.max(scrollableContainerRect.top, 0);
  const distanceToBottomScroll = containerRect.top + Math.min(containerRect.height, scrollableContainerRect.top + scrollableContainerRect.height) - (activatorRect.top + activatorRect.height);
  const enoughSpaceFromTopScroll = distanceToTopScroll >= minimumSpaceToScroll;
  const enoughSpaceFromBottomScroll = distanceToBottomScroll >= minimumSpaceToScroll;
  const heightIfBelow = Math.min(spaceBelow, desiredHeight);
  const heightIfAbove = Math.min(spaceAbove, desiredHeight);
  const containerRectTop = fixed ? 0 : containerRect.top;
  const positionIfAbove = {
    height: heightIfAbove - verticalMargins,
    top: activatorTop + containerRectTop - heightIfAbove,
    positioning: "above"
  };
  const positionIfBelow = {
    height: heightIfBelow - verticalMargins,
    top: activatorBottom + containerRectTop,
    positioning: "below"
  };
  if (preferredPosition === "above") {
    return (enoughSpaceFromTopScroll || distanceToTopScroll >= distanceToBottomScroll && !enoughSpaceFromBottomScroll) && (spaceAbove > desiredHeight || spaceAbove > spaceBelow) ? positionIfAbove : positionIfBelow;
  }
  if (preferredPosition === "below") {
    return (enoughSpaceFromBottomScroll || distanceToBottomScroll >= distanceToTopScroll && !enoughSpaceFromTopScroll) && (spaceBelow > desiredHeight || spaceBelow > spaceAbove) ? positionIfBelow : positionIfAbove;
  }
  if (enoughSpaceFromTopScroll && enoughSpaceFromBottomScroll) {
    return spaceAbove > spaceBelow ? positionIfAbove : positionIfBelow;
  }
  return distanceToTopScroll > minimumSpaceToScroll ? positionIfAbove : positionIfBelow;
}
function calculateHorizontalPosition(activatorRect, overlayRect, containerRect, overlayMargins, preferredAlignment) {
  const maximum = containerRect.width - overlayRect.width;
  if (preferredAlignment === "left") {
    return Math.min(maximum, Math.max(0, activatorRect.left - overlayMargins.horizontal));
  } else if (preferredAlignment === "right") {
    const activatorRight = containerRect.width - (activatorRect.left + activatorRect.width);
    return Math.min(maximum, Math.max(0, activatorRight - overlayMargins.horizontal));
  }
  return Math.min(maximum, Math.max(0, activatorRect.center.x - overlayRect.width / 2));
}
function rectIsOutsideOfRect(inner, outer) {
  const {
    center
  } = inner;
  return center.y < outer.top || center.y > outer.top + outer.height;
}
function intersectionWithViewport(rect, viewport = windowRect()) {
  const top = Math.max(rect.top, 0);
  const left = Math.max(rect.left, 0);
  const bottom = Math.min(rect.top + rect.height, viewport.height);
  const right = Math.min(rect.left + rect.width, viewport.width);
  return new Rect({
    top,
    left,
    height: bottom - top,
    width: right - left
  });
}
function windowRect() {
  return new Rect({
    top: window.scrollY,
    left: window.scrollX,
    height: window.innerHeight,
    width: document.body.clientWidth
  });
}

// node_modules/@shopify/polaris/build/esm/components/PositionedOverlay/PositionedOverlay.scss.js
var styles14 = {
  "PositionedOverlay": "Polaris-PositionedOverlay",
  "fixed": "Polaris-PositionedOverlay--fixed",
  "calculating": "Polaris-PositionedOverlay--calculating",
  "preventInteraction": "Polaris-PositionedOverlay--preventInteraction"
};

// node_modules/@shopify/polaris/build/esm/components/Scrollable/Scrollable.js
var import_react66 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/use-lazy-ref.js
var import_react62 = __toESM(require_react());
var UNIQUE_IDENTIFIER = Symbol("unique_identifier");
function useLazyRef(initialValue) {
  const lazyRef = (0, import_react62.useRef)(UNIQUE_IDENTIFIER);
  if (lazyRef.current === UNIQUE_IDENTIFIER) {
    lazyRef.current = initialValue();
  }
  return lazyRef;
}

// node_modules/@shopify/polaris/build/esm/utilities/use-component-did-mount.js
var import_react63 = __toESM(require_react());
function useComponentDidMount(callback) {
  const isAfterInitialMount = useIsAfterInitialMount();
  const hasInvokedLifeCycle = (0, import_react63.useRef)(false);
  if (isAfterInitialMount && !hasInvokedLifeCycle.current) {
    hasInvokedLifeCycle.current = true;
    return callback();
  }
}

// node_modules/@shopify/polaris/build/esm/components/Scrollable/context.js
var import_react64 = __toESM(require_react());
var ScrollableContext = /* @__PURE__ */ (0, import_react64.createContext)(void 0);

// node_modules/@shopify/polaris/build/esm/components/Scrollable/Scrollable.scss.js
var styles15 = {
  "Scrollable": "Polaris-Scrollable",
  "hasTopShadow": "Polaris-Scrollable--hasTopShadow",
  "hasBottomShadow": "Polaris-Scrollable--hasBottomShadow",
  "horizontal": "Polaris-Scrollable--horizontal",
  "vertical": "Polaris-Scrollable--vertical"
};

// node_modules/@shopify/polaris/build/esm/components/Scrollable/components/ScrollTo/ScrollTo.js
var import_react65 = __toESM(require_react());
function ScrollTo() {
  const anchorNode = (0, import_react65.useRef)(null);
  const scrollToPosition = (0, import_react65.useContext)(ScrollableContext);
  (0, import_react65.useEffect)(() => {
    if (!scrollToPosition || !anchorNode.current) {
      return;
    }
    scrollToPosition(anchorNode.current.offsetTop);
  }, [scrollToPosition]);
  const id = (0, import_react65.useId)();
  return /* @__PURE__ */ import_react65.default.createElement("a", {
    id,
    ref: anchorNode
  });
}

// node_modules/@shopify/polaris/build/esm/components/Scrollable/Scrollable.js
var MAX_SCROLL_HINT_DISTANCE = 100;
var LOW_RES_BUFFER = 2;
var ScrollableComponent = /* @__PURE__ */ (0, import_react66.forwardRef)(({
  children,
  className,
  horizontal = true,
  vertical = true,
  shadow: shadow2,
  hint,
  focusable,
  onScrolledToBottom,
  ...rest
}, forwardedRef) => {
  const [topShadow, setTopShadow] = (0, import_react66.useState)(false);
  const [bottomShadow, setBottomShadow] = (0, import_react66.useState)(false);
  const stickyManager = useLazyRef(() => new StickyManager());
  const scrollArea = (0, import_react66.useRef)(null);
  const scrollTo = (0, import_react66.useCallback)((scrollY, options = {}) => {
    const optionsBehavior = options.behavior || "smooth";
    const behavior = prefersReducedMotion() ? "auto" : optionsBehavior;
    scrollArea.current?.scrollTo({
      top: scrollY,
      behavior
    });
  }, []);
  const defaultRef = (0, import_react66.useRef)();
  (0, import_react66.useImperativeHandle)(forwardedRef || defaultRef, () => ({
    scrollTo
  }));
  const handleScroll = (0, import_react66.useCallback)(() => {
    const currentScrollArea = scrollArea.current;
    if (!currentScrollArea) {
      return;
    }
    requestAnimationFrame(() => {
      const {
        scrollTop,
        clientHeight,
        scrollHeight
      } = currentScrollArea;
      const canScroll = Boolean(scrollHeight > clientHeight);
      const isBelowTopOfScroll = Boolean(scrollTop > 0);
      const isAtBottomOfScroll = Boolean(scrollTop + clientHeight >= scrollHeight - LOW_RES_BUFFER);
      setTopShadow(isBelowTopOfScroll);
      setBottomShadow(!isAtBottomOfScroll);
      if (canScroll && isAtBottomOfScroll && onScrolledToBottom) {
        onScrolledToBottom();
      }
    });
  }, [onScrolledToBottom]);
  useComponentDidMount(() => {
    handleScroll();
    if (hint) {
      requestAnimationFrame(() => performScrollHint(scrollArea.current));
    }
  });
  (0, import_react66.useEffect)(() => {
    const currentScrollArea = scrollArea.current;
    if (!currentScrollArea) {
      return;
    }
    const handleResize = debounce(handleScroll, 50, {
      trailing: true
    });
    stickyManager.current?.setContainer(currentScrollArea);
    currentScrollArea.addEventListener("scroll", handleScroll);
    globalThis.addEventListener("resize", handleResize);
    return () => {
      currentScrollArea.removeEventListener("scroll", handleScroll);
      globalThis.removeEventListener("resize", handleResize);
    };
  }, [stickyManager, handleScroll]);
  const finalClassName = classNames(className, styles15.Scrollable, vertical && styles15.vertical, horizontal && styles15.horizontal, shadow2 && topShadow && styles15.hasTopShadow, shadow2 && bottomShadow && styles15.hasBottomShadow);
  return /* @__PURE__ */ import_react66.default.createElement(ScrollableContext.Provider, {
    value: scrollTo
  }, /* @__PURE__ */ import_react66.default.createElement(StickyManagerContext.Provider, {
    value: stickyManager.current
  }, /* @__PURE__ */ import_react66.default.createElement("div", Object.assign({
    className: finalClassName
  }, scrollable.props, rest, {
    ref: scrollArea,
    tabIndex: focusable ? 0 : void 0
  }), children)));
});
ScrollableComponent.displayName = "Scrollable";
function prefersReducedMotion() {
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch (err) {
    return false;
  }
}
function performScrollHint(elem) {
  if (!elem || prefersReducedMotion()) {
    return;
  }
  const scrollableDistance = elem.scrollHeight - elem.clientHeight;
  const distanceToPeek = Math.min(MAX_SCROLL_HINT_DISTANCE, scrollableDistance) - LOW_RES_BUFFER;
  const goBackToTop = () => {
    requestAnimationFrame(() => {
      if (elem.scrollTop >= distanceToPeek) {
        elem.removeEventListener("scroll", goBackToTop);
        elem.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    });
  };
  elem.addEventListener("scroll", goBackToTop);
  elem.scrollTo({
    top: MAX_SCROLL_HINT_DISTANCE,
    behavior: "smooth"
  });
}
var forNode = (node) => {
  const closestElement = node.closest(scrollable.selector);
  return closestElement instanceof HTMLElement ? closestElement : document;
};
var Scrollable = ScrollableComponent;
Scrollable.ScrollTo = ScrollTo;
Scrollable.forNode = forNode;

// node_modules/@shopify/polaris/build/esm/components/PositionedOverlay/PositionedOverlay.js
var OBSERVER_CONFIG = {
  childList: true,
  subtree: true,
  characterData: true,
  attributeFilter: ["style"]
};
var PositionedOverlay = class extends import_react67.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      measuring: true,
      activatorRect: getRectForNode(this.props.activator),
      right: void 0,
      left: void 0,
      top: 0,
      height: 0,
      width: null,
      positioning: "below",
      zIndex: null,
      outsideScrollableContainer: false,
      lockPosition: false,
      chevronOffset: 0
    };
    this.overlay = null;
    this.scrollableContainers = [];
    this.overlayDetails = () => {
      const {
        measuring,
        left,
        right,
        positioning,
        height: height2,
        activatorRect,
        chevronOffset
      } = this.state;
      return {
        measuring,
        left,
        right,
        desiredHeight: height2,
        positioning,
        activatorRect,
        chevronOffset
      };
    };
    this.setOverlay = (node) => {
      this.overlay = node;
    };
    this.setScrollableContainers = () => {
      const containers = [];
      let scrollableContainer = Scrollable.forNode(this.props.activator);
      if (scrollableContainer) {
        containers.push(scrollableContainer);
        while (scrollableContainer?.parentElement) {
          scrollableContainer = Scrollable.forNode(scrollableContainer.parentElement);
          containers.push(scrollableContainer);
        }
      }
      this.scrollableContainers = containers;
    };
    this.registerScrollHandlers = () => {
      this.scrollableContainers.forEach((node) => {
        node.addEventListener("scroll", this.handleMeasurement);
      });
    };
    this.unregisterScrollHandlers = () => {
      this.scrollableContainers.forEach((node) => {
        node.removeEventListener("scroll", this.handleMeasurement);
      });
    };
    this.handleMeasurement = () => {
      const {
        lockPosition,
        top
      } = this.state;
      this.observer.disconnect();
      this.setState(({
        left,
        top: top2,
        right
      }) => ({
        left,
        right,
        top: top2,
        height: 0,
        positioning: "below",
        measuring: true
      }), () => {
        if (this.overlay == null || this.firstScrollableContainer == null) {
          return;
        }
        const {
          activator,
          preferredPosition = "below",
          preferredAlignment = "center",
          onScrollOut,
          fullWidth,
          fixed,
          preferInputActivator = true
        } = this.props;
        const preferredActivator = preferInputActivator ? activator.querySelector("input") || activator : activator;
        const activatorRect = getRectForNode(preferredActivator);
        const currentOverlayRect = getRectForNode(this.overlay);
        const scrollableElement = isDocument2(this.firstScrollableContainer) ? document.body : this.firstScrollableContainer;
        const scrollableContainerRect = getRectForNode(scrollableElement);
        const overlayRect = fullWidth ? new Rect({
          ...currentOverlayRect,
          width: activatorRect.width
        }) : currentOverlayRect;
        if (scrollableElement === document.body) {
          scrollableContainerRect.height = document.body.scrollHeight;
        }
        let topBarOffset = 0;
        const topBarElement = scrollableElement.querySelector(`${dataPolarisTopBar.selector}`);
        if (topBarElement) {
          topBarOffset = topBarElement.clientHeight;
        }
        const overlayMargins = this.overlay.firstElementChild && this.overlay.firstChild instanceof HTMLElement ? getMarginsForNode(this.overlay.firstElementChild) : {
          activator: 0,
          container: 0,
          horizontal: 0
        };
        const containerRect = windowRect();
        const zIndexForLayer = getZIndexForLayerFromNode(activator);
        const zIndex2 = zIndexForLayer == null ? zIndexForLayer : zIndexForLayer + 1;
        const verticalPosition = calculateVerticalPosition(activatorRect, overlayRect, overlayMargins, scrollableContainerRect, containerRect, preferredPosition, fixed, topBarOffset);
        const horizontalPosition = calculateHorizontalPosition(activatorRect, overlayRect, containerRect, overlayMargins, preferredAlignment);
        const chevronOffset = activatorRect.center.x - horizontalPosition + overlayMargins.horizontal * 2;
        this.setState({
          measuring: false,
          activatorRect: getRectForNode(activator),
          left: preferredAlignment !== "right" ? horizontalPosition : void 0,
          right: preferredAlignment === "right" ? horizontalPosition : void 0,
          top: lockPosition ? top : verticalPosition.top,
          lockPosition: Boolean(fixed),
          height: verticalPosition.height || 0,
          width: fullWidth ? overlayRect.width : null,
          positioning: verticalPosition.positioning,
          outsideScrollableContainer: onScrollOut != null && rectIsOutsideOfRect(activatorRect, intersectionWithViewport(scrollableContainerRect)),
          zIndex: zIndex2,
          chevronOffset
        }, () => {
          if (!this.overlay)
            return;
          this.observer.observe(this.overlay, OBSERVER_CONFIG);
          this.observer.observe(activator, OBSERVER_CONFIG);
        });
      });
    };
    this.observer = new MutationObserver(this.handleMeasurement);
  }
  componentDidMount() {
    this.setScrollableContainers();
    if (this.scrollableContainers.length && !this.props.fixed) {
      this.registerScrollHandlers();
    }
    this.handleMeasurement();
  }
  componentWillUnmount() {
    this.observer.disconnect();
    if (this.scrollableContainers.length && !this.props.fixed) {
      this.unregisterScrollHandlers();
    }
  }
  componentDidUpdate() {
    const {
      outsideScrollableContainer,
      top
    } = this.state;
    const {
      onScrollOut,
      active
    } = this.props;
    if (active && onScrollOut != null && top !== 0 && outsideScrollableContainer) {
      onScrollOut();
    }
  }
  render() {
    const {
      left,
      right,
      top,
      zIndex: zIndex2,
      width: width2
    } = this.state;
    const {
      render,
      fixed,
      preventInteraction,
      classNames: propClassNames,
      zIndexOverride
    } = this.props;
    const style = {
      top: top == null || isNaN(top) ? void 0 : top,
      left: left == null || isNaN(left) ? void 0 : left,
      right: right == null || isNaN(right) ? void 0 : right,
      width: width2 == null || isNaN(width2) ? void 0 : width2,
      zIndex: zIndexOverride || zIndex2 || void 0
    };
    const className = classNames(styles14.PositionedOverlay, fixed && styles14.fixed, preventInteraction && styles14.preventInteraction, propClassNames);
    return /* @__PURE__ */ import_react67.default.createElement("div", {
      className,
      style,
      ref: this.setOverlay
    }, /* @__PURE__ */ import_react67.default.createElement(EventListener, {
      event: "resize",
      handler: this.handleMeasurement
    }), render(this.overlayDetails()));
  }
  get firstScrollableContainer() {
    return this.scrollableContainers[0] ?? null;
  }
  forceUpdatePosition() {
    requestAnimationFrame(this.handleMeasurement);
  }
};
function getMarginsForNode(node) {
  const nodeStyles = window.getComputedStyle(node);
  return {
    activator: parseFloat(nodeStyles.marginTop || "0"),
    container: parseFloat(nodeStyles.marginBottom || "0"),
    horizontal: parseFloat(nodeStyles.marginLeft || "0")
  };
}
function getZIndexForLayerFromNode(node) {
  const layerNode = node.closest(layer.selector) || document.body;
  const zIndex2 = layerNode === document.body ? "auto" : parseInt(window.getComputedStyle(layerNode).zIndex || "0", 10);
  return zIndex2 === "auto" || isNaN(zIndex2) ? null : zIndex2;
}
function isDocument2(node) {
  return node === document;
}

// node_modules/@shopify/polaris/build/esm/components/Tooltip/components/TooltipOverlay/TooltipOverlay.js
var tailUpPaths = /* @__PURE__ */ import_react68.default.createElement(import_react68.default.Fragment, null, /* @__PURE__ */ import_react68.default.createElement("path", {
  d: "M18.829 8.171 11.862.921A3 3 0 0 0 7.619.838L0 8.171h1.442l6.87-6.612a2 2 0 0 1 2.83.055l6.3 6.557h1.387Z",
  fill: "#E3E3E3"
}), /* @__PURE__ */ import_react68.default.createElement("path", {
  d: "M17.442 10.171h-16v-2l6.87-6.612a2 2 0 0 1 2.83.055l6.3 6.557v2Z",
  fill: "var(--p-color-bg-surface)"
}));
var tailDownPaths = /* @__PURE__ */ import_react68.default.createElement(import_react68.default.Fragment, null, /* @__PURE__ */ import_react68.default.createElement("path", {
  d: "m0 2 6.967 7.25a3 3 0 0 0 4.243.083L18.829 2h-1.442l-6.87 6.612a2 2 0 0 1-2.83-.055L1.387 2H0Z",
  fill: "#D4D4D4"
}), /* @__PURE__ */ import_react68.default.createElement("path", {
  d: "M1.387 0h16v2l-6.87 6.612a2 2 0 0 1-2.83-.055L1.387 2V0Z",
  fill: "var(--p-color-bg-surface)"
}));
function TooltipOverlay({
  active,
  activator,
  preferredPosition = "above",
  preventInteraction,
  id,
  children,
  accessibilityLabel,
  width: width2,
  padding,
  borderRadius,
  zIndexOverride,
  instant
}) {
  const i18n = useI18n();
  const markup = active ? /* @__PURE__ */ import_react68.default.createElement(PositionedOverlay, {
    active,
    activator,
    preferredPosition,
    preventInteraction,
    render: renderTooltip,
    zIndexOverride
  }) : null;
  return markup;
  function renderTooltip(overlayDetails) {
    const {
      measuring,
      desiredHeight,
      positioning,
      chevronOffset
    } = overlayDetails;
    const containerClassName = classNames(styles13.TooltipOverlay, measuring && styles13.measuring, !measuring && styles13.measured, instant && styles13.instant, positioning === "above" && styles13.positionedAbove);
    const contentClassName = classNames(styles13.Content, width2 && styles13[width2]);
    const contentStyles = measuring ? void 0 : {
      minHeight: desiredHeight
    };
    const style = {
      "--pc-tooltip-chevron-x-pos": `${chevronOffset}px`,
      "--pc-tooltip-border-radius": borderRadius ? `var(--p-border-radius-${borderRadius})` : void 0,
      "--pc-tooltip-padding": padding && padding === "default" ? "var(--p-space-100) var(--p-space-200)" : `var(--p-space-${padding})`
    };
    return /* @__PURE__ */ import_react68.default.createElement("div", Object.assign({
      style,
      className: containerClassName
    }, layer.props), /* @__PURE__ */ import_react68.default.createElement("svg", {
      className: styles13.Tail,
      width: "19",
      height: "11",
      fill: "none"
    }, positioning === "above" ? tailDownPaths : tailUpPaths), /* @__PURE__ */ import_react68.default.createElement("div", {
      id,
      role: "tooltip",
      className: contentClassName,
      style: {
        ...contentStyles,
        ...style
      },
      "aria-label": accessibilityLabel ? i18n.translate("Polaris.TooltipOverlay.accessibilityLabel", {
        label: accessibilityLabel
      }) : void 0
    }, children));
  }
}

// node_modules/@shopify/polaris/build/esm/components/Tooltip/Tooltip.js
var HOVER_OUT_TIMEOUT = 150;
function Tooltip({
  children,
  content,
  dismissOnMouseOut,
  active: originalActive,
  hoverDelay,
  preferredPosition = "above",
  activatorWrapper = "span",
  accessibilityLabel,
  width: width2 = "default",
  padding = "default",
  borderRadius: borderRadiusProp,
  zIndexOverride,
  hasUnderline,
  persistOnClick,
  onOpen,
  onClose
}) {
  const borderRadius = borderRadiusProp || "200";
  const WrapperComponent = activatorWrapper;
  const {
    value: active,
    setTrue: setActiveTrue,
    setFalse: handleBlur
  } = useToggle(Boolean(originalActive));
  const {
    value: persist,
    toggle: togglePersisting
  } = useToggle(Boolean(originalActive) && Boolean(persistOnClick));
  const [activatorNode, setActivatorNode] = (0, import_react69.useState)(null);
  const {
    presenceList,
    addPresence,
    removePresence
  } = useEphemeralPresenceManager();
  const id = (0, import_react69.useId)();
  const activatorContainer = (0, import_react69.useRef)(null);
  const mouseEntered = (0, import_react69.useRef)(false);
  const [shouldAnimate, setShouldAnimate] = (0, import_react69.useState)(Boolean(!originalActive));
  const hoverDelayTimeout = (0, import_react69.useRef)(null);
  const hoverOutTimeout = (0, import_react69.useRef)(null);
  const handleFocus = (0, import_react69.useCallback)(() => {
    if (originalActive !== false) {
      setActiveTrue();
    }
  }, [originalActive, setActiveTrue]);
  (0, import_react69.useEffect)(() => {
    const firstFocusable = activatorContainer.current ? findFirstFocusableNode(activatorContainer.current) : null;
    const accessibilityNode = firstFocusable || activatorContainer.current;
    if (!accessibilityNode)
      return;
    accessibilityNode.tabIndex = 0;
    accessibilityNode.setAttribute("aria-describedby", id);
    accessibilityNode.setAttribute("data-polaris-tooltip-activator", "true");
  }, [id, children]);
  (0, import_react69.useEffect)(() => {
    return () => {
      if (hoverDelayTimeout.current) {
        clearTimeout(hoverDelayTimeout.current);
      }
      if (hoverOutTimeout.current) {
        clearTimeout(hoverOutTimeout.current);
      }
    };
  }, []);
  const handleOpen = (0, import_react69.useCallback)(() => {
    setShouldAnimate(!presenceList.tooltip && !active);
    onOpen?.();
    addPresence("tooltip");
  }, [addPresence, presenceList.tooltip, onOpen, active]);
  const handleClose = (0, import_react69.useCallback)(() => {
    onClose?.();
    setShouldAnimate(false);
    hoverOutTimeout.current = setTimeout(() => {
      removePresence("tooltip");
    }, HOVER_OUT_TIMEOUT);
  }, [removePresence, onClose]);
  const handleKeyUp = (0, import_react69.useCallback)((event) => {
    if (event.key !== "Escape")
      return;
    handleClose?.();
    handleBlur();
    persistOnClick && togglePersisting();
  }, [handleBlur, handleClose, persistOnClick, togglePersisting]);
  (0, import_react69.useEffect)(() => {
    if (originalActive === false && active) {
      handleClose();
      handleBlur();
    }
  }, [originalActive, active, handleClose, handleBlur]);
  const portal2 = activatorNode ? /* @__PURE__ */ import_react69.default.createElement(Portal, {
    idPrefix: "tooltip"
  }, /* @__PURE__ */ import_react69.default.createElement(TooltipOverlay, {
    id,
    preferredPosition,
    activator: activatorNode,
    active,
    accessibilityLabel,
    onClose: noop3,
    preventInteraction: dismissOnMouseOut,
    width: width2,
    padding,
    borderRadius,
    zIndexOverride,
    instant: !shouldAnimate
  }, content)) : null;
  const wrapperClassNames = classNames(activatorWrapper === "div" && styles12.TooltipContainer, hasUnderline && styles12.HasUnderline);
  return /* @__PURE__ */ import_react69.default.createElement(WrapperComponent, {
    onFocus: () => {
      handleOpen();
      handleFocus();
    },
    onBlur: () => {
      handleClose();
      handleBlur();
      if (persistOnClick) {
        togglePersisting();
      }
    },
    onMouseLeave: handleMouseLeave,
    onMouseOver: handleMouseEnterFix,
    onMouseDown: persistOnClick ? togglePersisting : void 0,
    ref: setActivator,
    onKeyUp: handleKeyUp,
    className: wrapperClassNames
  }, children, portal2);
  function setActivator(node) {
    const activatorContainerRef = activatorContainer;
    if (node == null) {
      activatorContainerRef.current = null;
      setActivatorNode(null);
      return;
    }
    node.firstElementChild instanceof HTMLElement && setActivatorNode(node.firstElementChild);
    activatorContainerRef.current = node;
  }
  function handleMouseEnter() {
    mouseEntered.current = true;
    if (hoverDelay && !presenceList.tooltip) {
      hoverDelayTimeout.current = setTimeout(() => {
        handleOpen();
        handleFocus();
      }, hoverDelay);
    } else {
      handleOpen();
      handleFocus();
    }
  }
  function handleMouseLeave() {
    if (hoverDelayTimeout.current) {
      clearTimeout(hoverDelayTimeout.current);
      hoverDelayTimeout.current = null;
    }
    mouseEntered.current = false;
    handleClose();
    if (!persist) {
      handleBlur();
    }
  }
  function handleMouseEnterFix() {
    !mouseEntered.current && handleMouseEnter();
  }
}
function noop3() {
}

// node_modules/@shopify/polaris/build/esm/components/ActionList/components/Item/Item.js
function Item({
  id,
  badge,
  content,
  accessibilityLabel,
  helpText,
  url,
  onAction,
  onMouseEnter,
  icon,
  image,
  prefix,
  suffix,
  disabled,
  external,
  destructive,
  ellipsis,
  truncate,
  active,
  role,
  variant = "default"
}) {
  const className = classNames(styles9.Item, disabled && styles9.disabled, destructive && styles9.destructive, active && styles9.active, variant === "default" && styles9.default, variant === "indented" && styles9.indented, variant === "menu" && styles9.menu);
  let prefixMarkup = null;
  if (prefix) {
    prefixMarkup = /* @__PURE__ */ import_react70.default.createElement("span", {
      className: styles9.Prefix
    }, prefix);
  } else if (icon) {
    prefixMarkup = /* @__PURE__ */ import_react70.default.createElement("span", {
      className: styles9.Prefix
    }, /* @__PURE__ */ import_react70.default.createElement(Icon, {
      source: icon
    }));
  } else if (image) {
    prefixMarkup = /* @__PURE__ */ import_react70.default.createElement("span", {
      role: "presentation",
      className: styles9.Prefix,
      style: {
        backgroundImage: `url(${image}`
      }
    });
  }
  let contentText = content || "";
  if (truncate && content) {
    contentText = /* @__PURE__ */ import_react70.default.createElement(TruncateText, null, content);
  } else if (ellipsis) {
    contentText = `${content}\u2026`;
  }
  const contentMarkup = helpText ? /* @__PURE__ */ import_react70.default.createElement(import_react70.default.Fragment, null, /* @__PURE__ */ import_react70.default.createElement(Box, null, contentText), /* @__PURE__ */ import_react70.default.createElement(Text, {
    as: "span",
    variant: "bodySm",
    tone: active || disabled ? void 0 : "subdued"
  }, helpText)) : contentText;
  const badgeMarkup = badge && /* @__PURE__ */ import_react70.default.createElement("span", {
    className: styles9.Suffix
  }, /* @__PURE__ */ import_react70.default.createElement(Badge, {
    tone: badge.tone
  }, badge.content));
  const suffixMarkup = suffix && /* @__PURE__ */ import_react70.default.createElement(Box, null, /* @__PURE__ */ import_react70.default.createElement("span", {
    className: styles9.Suffix
  }, suffix));
  const textMarkup = /* @__PURE__ */ import_react70.default.createElement("span", {
    className: styles9.Text
  }, contentMarkup);
  const contentElement = /* @__PURE__ */ import_react70.default.createElement(InlineStack, {
    blockAlign: "center",
    gap: "150",
    wrap: !truncate
  }, prefixMarkup, textMarkup, badgeMarkup, suffixMarkup);
  const contentWrapper = /* @__PURE__ */ import_react70.default.createElement(Box, {
    width: "100%"
  }, contentElement);
  const scrollMarkup = active ? /* @__PURE__ */ import_react70.default.createElement(Scrollable.ScrollTo, null) : null;
  const control = url ? /* @__PURE__ */ import_react70.default.createElement(UnstyledLink, {
    id,
    url: disabled ? null : url,
    className,
    external,
    "aria-label": accessibilityLabel,
    onClick: disabled ? null : onAction,
    role
  }, contentWrapper) : /* @__PURE__ */ import_react70.default.createElement("button", {
    id,
    type: "button",
    className,
    disabled,
    "aria-label": accessibilityLabel,
    onClick: onAction,
    onMouseUp: handleMouseUpByBlurring,
    role,
    onMouseEnter
  }, contentWrapper);
  return /* @__PURE__ */ import_react70.default.createElement(import_react70.default.Fragment, null, scrollMarkup, control);
}
var TruncateText = ({
  children
}) => {
  const theme = useTheme();
  const textRef = (0, import_react70.useRef)(null);
  const [isOverflowing, setIsOverflowing] = (0, import_react70.useState)(false);
  useIsomorphicLayoutEffect(() => {
    if (textRef.current) {
      setIsOverflowing(textRef.current.scrollWidth > textRef.current.offsetWidth);
    }
  }, [children]);
  const text2 = /* @__PURE__ */ import_react70.default.createElement(Text, {
    as: "span",
    truncate: true
  }, /* @__PURE__ */ import_react70.default.createElement(Box, {
    width: "100%",
    ref: textRef
  }, children));
  return isOverflowing ? /* @__PURE__ */ import_react70.default.createElement(Tooltip, {
    zIndexOverride: Number(theme.zIndex["z-index-11"]),
    preferredPosition: "above",
    hoverDelay: 1e3,
    content: children,
    dismissOnMouseOut: true
  }, /* @__PURE__ */ import_react70.default.createElement(Text, {
    as: "span",
    truncate: true
  }, children)) : text2;
};

// node_modules/@shopify/polaris/build/esm/components/ActionList/components/Section/Section.js
function Section({
  section,
  hasMultipleSections,
  isFirst,
  actionRole,
  onActionAnyItem
}) {
  const handleAction = (itemOnAction) => {
    return () => {
      if (itemOnAction) {
        itemOnAction();
      }
      if (onActionAnyItem) {
        onActionAnyItem();
      }
    };
  };
  const actionMarkup = section.items.map(({
    content,
    helpText,
    onAction,
    ...item
  }, index) => {
    const itemMarkup = /* @__PURE__ */ import_react71.default.createElement(Item, Object.assign({
      content,
      helpText,
      role: actionRole,
      onAction: handleAction(onAction)
    }, item));
    return /* @__PURE__ */ import_react71.default.createElement(Box, {
      as: "li",
      key: `${content}-${index}`,
      role: actionRole === "menuitem" ? "presentation" : void 0
    }, /* @__PURE__ */ import_react71.default.createElement(InlineStack, {
      wrap: false
    }, itemMarkup));
  });
  let titleMarkup = null;
  if (section.title) {
    titleMarkup = typeof section.title === "string" ? /* @__PURE__ */ import_react71.default.createElement(Box, {
      paddingBlockStart: "300",
      paddingBlockEnd: "100",
      paddingInlineStart: "300",
      paddingInlineEnd: "300"
    }, /* @__PURE__ */ import_react71.default.createElement(Text, {
      as: "p",
      variant: "headingSm"
    }, section.title)) : /* @__PURE__ */ import_react71.default.createElement(Box, {
      padding: "200",
      paddingInlineEnd: "150"
    }, section.title);
  }
  let sectionRole;
  switch (actionRole) {
    case "option":
      sectionRole = "presentation";
      break;
    case "menuitem":
      sectionRole = !hasMultipleSections ? "menu" : "presentation";
      break;
    default:
      sectionRole = void 0;
      break;
  }
  const sectionMarkup = /* @__PURE__ */ import_react71.default.createElement(import_react71.default.Fragment, null, titleMarkup, /* @__PURE__ */ import_react71.default.createElement(Box, Object.assign({
    as: "div",
    padding: "150"
  }, hasMultipleSections && {
    paddingBlockStart: "0"
  }, {
    tabIndex: !hasMultipleSections ? -1 : void 0
  }), /* @__PURE__ */ import_react71.default.createElement(BlockStack, Object.assign({
    gap: "100",
    as: "ul"
  }, sectionRole && {
    role: sectionRole
  }), actionMarkup)));
  return hasMultipleSections ? /* @__PURE__ */ import_react71.default.createElement(Box, Object.assign({
    as: "li",
    role: "presentation",
    borderColor: "border-secondary"
  }, !isFirst && {
    borderBlockStartWidth: "025"
  }, !section.title && {
    paddingBlockStart: "150"
  }), sectionMarkup) : sectionMarkup;
}

// node_modules/@shopify/polaris/build/esm/components/KeypressListener/KeypressListener.js
var import_react72 = __toESM(require_react());
function KeypressListener({
  keyCode,
  handler,
  keyEvent = "keyup",
  options,
  useCapture
}) {
  const tracked = (0, import_react72.useRef)({
    handler,
    keyCode
  });
  useIsomorphicLayoutEffect(() => {
    tracked.current = {
      handler,
      keyCode
    };
  }, [handler, keyCode]);
  const handleKeyEvent = (0, import_react72.useCallback)((event) => {
    const {
      handler: handler2,
      keyCode: keyCode2
    } = tracked.current;
    if (event.keyCode === keyCode2) {
      handler2(event);
    }
  }, []);
  (0, import_react72.useEffect)(() => {
    document.addEventListener(keyEvent, handleKeyEvent, useCapture || options);
    return () => {
      document.removeEventListener(keyEvent, handleKeyEvent, useCapture || options);
    };
  }, [keyEvent, handleKeyEvent, useCapture, options]);
  return null;
}

// node_modules/@shopify/polaris/build/esm/components/TextField/TextField.js
var import_react80 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/TextField/TextField.scss.js
var styles16 = {
  "TextField": "Polaris-TextField",
  "ClearButton": "Polaris-TextField__ClearButton",
  "disabled": "Polaris-TextField--disabled",
  "error": "Polaris-TextField--error",
  "readOnly": "Polaris-TextField--readOnly",
  "Input": "Polaris-TextField__Input",
  "Backdrop": "Polaris-TextField__Backdrop",
  "multiline": "Polaris-TextField--multiline",
  "hasValue": "Polaris-TextField--hasValue",
  "focus": "Polaris-TextField--focus",
  "VerticalContent": "Polaris-TextField__VerticalContent",
  "toneMagic": "Polaris-TextField--toneMagic",
  "Prefix": "Polaris-TextField__Prefix",
  "suggestion": "Polaris-TextField--suggestion",
  "borderless": "Polaris-TextField--borderless",
  "Input-hasClearButton": "Polaris-TextField__Input--hasClearButton",
  "Input-suffixed": "Polaris-TextField__Input--suffixed",
  "Input-alignRight": "Polaris-TextField__Input--alignRight",
  "Input-alignLeft": "Polaris-TextField__Input--alignLeft",
  "Input-alignCenter": "Polaris-TextField__Input--alignCenter",
  "Suffix": "Polaris-TextField__Suffix",
  "CharacterCount": "Polaris-TextField__CharacterCount",
  "AlignFieldBottom": "Polaris-TextField__AlignFieldBottom",
  "Spinner": "Polaris-TextField__Spinner",
  "SpinnerIcon": "Polaris-TextField__SpinnerIcon",
  "Resizer": "Polaris-TextField__Resizer",
  "DummyInput": "Polaris-TextField__DummyInput",
  "Segment": "Polaris-TextField__Segment",
  "monospaced": "Polaris-TextField--monospaced"
};

// node_modules/@shopify/polaris/build/esm/components/TextField/components/Spinner/Spinner.js
var import_react73 = __toESM(require_react());
var Spinner2 = /* @__PURE__ */ import_react73.default.forwardRef(function Spinner3({
  onChange,
  onClick,
  onMouseDown,
  onMouseUp,
  onBlur
}, ref) {
  function handleStep(step) {
    return () => onChange(step);
  }
  function handleMouseDown(onChange2) {
    return (event) => {
      if (event.button !== 0)
        return;
      onMouseDown?.(onChange2);
    };
  }
  return /* @__PURE__ */ import_react73.default.createElement("div", {
    className: styles16.Spinner,
    onClick,
    "aria-hidden": true,
    ref
  }, /* @__PURE__ */ import_react73.default.createElement("div", {
    role: "button",
    className: styles16.Segment,
    tabIndex: -1,
    onClick: handleStep(1),
    onMouseDown: handleMouseDown(handleStep(1)),
    onMouseUp,
    onBlur
  }, /* @__PURE__ */ import_react73.default.createElement("div", {
    className: styles16.SpinnerIcon
  }, /* @__PURE__ */ import_react73.default.createElement(Icon, {
    source: SvgChevronUpMinor
  }))), /* @__PURE__ */ import_react73.default.createElement("div", {
    role: "button",
    className: styles16.Segment,
    tabIndex: -1,
    onClick: handleStep(-1),
    onMouseDown: handleMouseDown(handleStep(-1)),
    onMouseUp,
    onBlur
  }, /* @__PURE__ */ import_react73.default.createElement("div", {
    className: styles16.SpinnerIcon
  }, /* @__PURE__ */ import_react73.default.createElement(Icon, {
    source: SvgChevronDownMinor
  }))));
});

// node_modules/@shopify/polaris/build/esm/components/Labelled/Labelled.js
var import_react76 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Labelled/Labelled.scss.js
var styles17 = {
  "hidden": "Polaris-Labelled--hidden",
  "LabelWrapper": "Polaris-Labelled__LabelWrapper",
  "disabled": "Polaris-Labelled--disabled",
  "HelpText": "Polaris-Labelled__HelpText",
  "readOnly": "Polaris-Labelled--readOnly",
  "Error": "Polaris-Labelled__Error",
  "Action": "Polaris-Labelled__Action"
};

// node_modules/@shopify/polaris/build/esm/components/InlineError/InlineError.js
var import_react74 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/InlineError/InlineError.scss.js
var styles18 = {
  "InlineError": "Polaris-InlineError",
  "Icon": "Polaris-InlineError__Icon"
};

// node_modules/@shopify/polaris/build/esm/components/InlineError/InlineError.js
function InlineError({
  message,
  fieldID
}) {
  if (!message) {
    return null;
  }
  return /* @__PURE__ */ import_react74.default.createElement("div", {
    id: errorTextID(fieldID),
    className: styles18.InlineError
  }, /* @__PURE__ */ import_react74.default.createElement("div", {
    className: styles18.Icon
  }, /* @__PURE__ */ import_react74.default.createElement(Icon, {
    source: SvgCircleAlertMajor
  })), message);
}
function errorTextID(id) {
  return `${id}Error`;
}

// node_modules/@shopify/polaris/build/esm/components/Label/Label.js
var import_react75 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Label/Label.scss.js
var styles19 = {
  "Label": "Polaris-Label",
  "hidden": "Polaris-Label--hidden",
  "Text": "Polaris-Label__Text",
  "RequiredIndicator": "Polaris-Label__RequiredIndicator"
};

// node_modules/@shopify/polaris/build/esm/components/Label/Label.js
function labelID(id) {
  return `${id}Label`;
}
function Label({
  children,
  id,
  hidden,
  requiredIndicator
}) {
  const className = classNames(styles19.Label, hidden && styles19.hidden);
  return /* @__PURE__ */ import_react75.default.createElement("div", {
    className
  }, /* @__PURE__ */ import_react75.default.createElement("label", {
    id: labelID(id),
    htmlFor: id,
    className: classNames(styles19.Text, requiredIndicator && styles19.RequiredIndicator)
  }, children));
}

// node_modules/@shopify/polaris/build/esm/components/Labelled/Labelled.js
function Labelled({
  id,
  label,
  error,
  action,
  helpText,
  children,
  labelHidden,
  requiredIndicator,
  disabled,
  readOnly,
  ...rest
}) {
  const className = classNames(labelHidden && styles17.hidden, disabled && styles17.disabled, readOnly && styles17.readOnly);
  const actionMarkup = action ? /* @__PURE__ */ import_react76.default.createElement("div", {
    className: styles17.Action
  }, buttonFrom(action, {
    variant: "plain"
  })) : null;
  const helpTextMarkup = helpText ? /* @__PURE__ */ import_react76.default.createElement("div", {
    className: styles17.HelpText,
    id: helpTextID(id),
    "aria-disabled": disabled
  }, /* @__PURE__ */ import_react76.default.createElement(Text, {
    as: "span",
    tone: "subdued",
    breakWord: true
  }, helpText)) : null;
  const errorMarkup = error && typeof error !== "boolean" && /* @__PURE__ */ import_react76.default.createElement("div", {
    className: styles17.Error
  }, /* @__PURE__ */ import_react76.default.createElement(InlineError, {
    message: error,
    fieldID: id
  }));
  const labelMarkup = label ? /* @__PURE__ */ import_react76.default.createElement("div", {
    className: styles17.LabelWrapper
  }, /* @__PURE__ */ import_react76.default.createElement(Label, Object.assign({
    id,
    requiredIndicator
  }, rest, {
    hidden: false
  }), label), actionMarkup) : null;
  return /* @__PURE__ */ import_react76.default.createElement("div", {
    className
  }, labelMarkup, children, errorMarkup, helpTextMarkup);
}
function helpTextID(id) {
  return `${id}HelpText`;
}

// node_modules/@shopify/polaris/build/esm/components/Connected/Connected.js
var import_react78 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Connected/Connected.scss.js
var styles20 = {
  "Connected": "Polaris-Connected",
  "Item": "Polaris-Connected__Item",
  "Item-primary": "Polaris-Connected__Item--primary",
  "Item-focused": "Polaris-Connected__Item--focused"
};

// node_modules/@shopify/polaris/build/esm/components/Connected/components/Item/Item.js
var import_react77 = __toESM(require_react());
function Item2({
  children,
  position
}) {
  const {
    value: focused,
    setTrue: forceTrueFocused,
    setFalse: forceFalseFocused
  } = useToggle(false);
  const className = classNames(styles20.Item, focused && styles20["Item-focused"], position === "primary" ? styles20["Item-primary"] : styles20["Item-connection"]);
  return /* @__PURE__ */ import_react77.default.createElement("div", {
    onBlur: forceFalseFocused,
    onFocus: forceTrueFocused,
    className
  }, children);
}

// node_modules/@shopify/polaris/build/esm/components/Connected/Connected.js
function Connected({
  children,
  left,
  right
}) {
  const leftConnectionMarkup = left ? /* @__PURE__ */ import_react78.default.createElement(Item2, {
    position: "left"
  }, left) : null;
  const rightConnectionMarkup = right ? /* @__PURE__ */ import_react78.default.createElement(Item2, {
    position: "right"
  }, right) : null;
  return /* @__PURE__ */ import_react78.default.createElement("div", {
    className: styles20.Connected
  }, leftConnectionMarkup, /* @__PURE__ */ import_react78.default.createElement(Item2, {
    position: "primary"
  }, children), rightConnectionMarkup);
}

// node_modules/@shopify/polaris/build/esm/components/TextField/components/Resizer/Resizer.js
var import_react79 = __toESM(require_react());
function Resizer({
  contents,
  currentHeight: currentHeightProp = null,
  minimumLines,
  onHeightChange
}) {
  const contentNode = (0, import_react79.useRef)(null);
  const minimumLinesNode = (0, import_react79.useRef)(null);
  const animationFrame = (0, import_react79.useRef)();
  const currentHeight = (0, import_react79.useRef)(currentHeightProp);
  if (currentHeightProp !== currentHeight.current) {
    currentHeight.current = currentHeightProp;
  }
  (0, import_react79.useEffect)(() => {
    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);
  const minimumLinesMarkup = minimumLines ? /* @__PURE__ */ import_react79.default.createElement("div", {
    ref: minimumLinesNode,
    className: styles16.DummyInput,
    dangerouslySetInnerHTML: {
      __html: getContentsForMinimumLines(minimumLines)
    }
  }) : null;
  const handleHeightCheck = (0, import_react79.useCallback)(() => {
    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }
    animationFrame.current = requestAnimationFrame(() => {
      if (!contentNode.current || !minimumLinesNode.current) {
        return;
      }
      const newHeight = Math.max(contentNode.current.offsetHeight, minimumLinesNode.current.offsetHeight);
      if (newHeight !== currentHeight.current) {
        onHeightChange(newHeight);
      }
    });
  }, [onHeightChange]);
  useIsomorphicLayoutEffect(() => {
    handleHeightCheck();
  });
  return /* @__PURE__ */ import_react79.default.createElement("div", {
    "aria-hidden": true,
    className: styles16.Resizer
  }, /* @__PURE__ */ import_react79.default.createElement(EventListener, {
    event: "resize",
    handler: handleHeightCheck
  }), /* @__PURE__ */ import_react79.default.createElement("div", {
    ref: contentNode,
    className: styles16.DummyInput,
    dangerouslySetInnerHTML: {
      __html: getFinalContents(contents)
    }
  }), minimumLinesMarkup);
}
var ENTITIES_TO_REPLACE = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "\n": "<br>",
  "\r": ""
};
var REPLACE_REGEX2 = new RegExp(`[${Object.keys(ENTITIES_TO_REPLACE).join()}]`, "g");
function replaceEntity(entity) {
  return ENTITIES_TO_REPLACE[entity];
}
function getContentsForMinimumLines(minimumLines) {
  let content = "";
  for (let line = 0; line < minimumLines; line++) {
    content += "<br>";
  }
  return content;
}
function getFinalContents(contents) {
  return contents ? `${contents.replace(REPLACE_REGEX2, replaceEntity)}<br>` : "<br>";
}

// node_modules/@shopify/polaris/build/esm/components/TextField/TextField.js
function TextField({
  prefix,
  suffix,
  verticalContent,
  placeholder,
  value = "",
  helpText,
  label,
  labelAction,
  labelHidden,
  disabled,
  clearButton,
  readOnly,
  autoFocus,
  focused,
  multiline,
  error,
  connectedRight,
  connectedLeft,
  type = "text",
  name,
  id: idProp,
  role,
  step,
  largeStep,
  autoComplete,
  max,
  maxLength,
  maxHeight,
  min,
  minLength,
  pattern,
  inputMode,
  spellCheck,
  ariaOwns,
  ariaControls,
  ariaExpanded,
  ariaActiveDescendant,
  ariaAutocomplete,
  showCharacterCount,
  align,
  requiredIndicator,
  monospaced,
  selectTextOnFocus,
  suggestion,
  variant = "inherit",
  onClearButtonClick,
  onChange,
  onSpinnerChange,
  onFocus,
  onBlur,
  tone
}) {
  const i18n = useI18n();
  const [height2, setHeight] = (0, import_react80.useState)(null);
  const [focus, setFocus] = (0, import_react80.useState)(Boolean(focused));
  const isAfterInitial = useIsAfterInitialMount();
  const uniqId = (0, import_react80.useId)();
  const id = idProp ?? uniqId;
  const textFieldRef = (0, import_react80.useRef)(null);
  const inputRef = (0, import_react80.useRef)(null);
  const textAreaRef = (0, import_react80.useRef)(null);
  const prefixRef = (0, import_react80.useRef)(null);
  const suffixRef = (0, import_react80.useRef)(null);
  const verticalContentRef = (0, import_react80.useRef)(null);
  const buttonPressTimer = (0, import_react80.useRef)();
  const spinnerRef = (0, import_react80.useRef)(null);
  (0, import_react80.useEffect)(() => {
    const input2 = multiline ? textAreaRef.current : inputRef.current;
    if (!input2 || focused === void 0)
      return;
    focused ? input2.focus() : input2.blur();
  }, [focused, verticalContent, multiline]);
  (0, import_react80.useEffect)(() => {
    const input2 = inputRef.current;
    const isSupportedInputType = type === "text" || type === "tel" || type === "search" || type === "url" || type === "password";
    if (!input2 || !isSupportedInputType || !suggestion) {
      return;
    }
    input2.setSelectionRange(value.length, suggestion.length);
  }, [focus, value, type, suggestion]);
  const normalizedValue = suggestion ? suggestion : value;
  const normalizedStep = step != null ? step : 1;
  const normalizedMax = max != null ? max : Infinity;
  const normalizedMin = min != null ? min : -Infinity;
  const className = classNames(styles16.TextField, Boolean(normalizedValue) && styles16.hasValue, disabled && styles16.disabled, readOnly && styles16.readOnly, error && styles16.error, tone && styles16[variationName("tone", tone)], multiline && styles16.multiline, focus && !disabled && styles16.focus, variant !== "inherit" && styles16[variant]);
  const inputType = type === "currency" ? "text" : type;
  const isNumericType = type === "number" || type === "integer";
  const prefixMarkup = prefix ? /* @__PURE__ */ import_react80.default.createElement("div", {
    className: styles16.Prefix,
    id: `${id}-Prefix`,
    ref: prefixRef
  }, prefix) : null;
  const suffixMarkup = suffix ? /* @__PURE__ */ import_react80.default.createElement("div", {
    className: styles16.Suffix,
    id: `${id}-Suffix`,
    ref: suffixRef
  }, suffix) : null;
  let characterCountMarkup = null;
  if (showCharacterCount) {
    const characterCount = normalizedValue.length;
    const characterCountLabel = maxLength ? i18n.translate("Polaris.TextField.characterCountWithMaxLength", {
      count: characterCount,
      limit: maxLength
    }) : i18n.translate("Polaris.TextField.characterCount", {
      count: characterCount
    });
    const characterCountClassName = classNames(styles16.CharacterCount, multiline && styles16.AlignFieldBottom);
    const characterCountText = !maxLength ? characterCount : `${characterCount}/${maxLength}`;
    characterCountMarkup = /* @__PURE__ */ import_react80.default.createElement("div", {
      id: `${id}-CharacterCounter`,
      className: characterCountClassName,
      "aria-label": characterCountLabel,
      "aria-live": focus ? "polite" : "off",
      "aria-atomic": "true",
      onClick: handleClickChild
    }, characterCountText);
  }
  const clearButtonVisible = normalizedValue !== "";
  const clearButtonMarkup = clearButton && clearButtonVisible ? /* @__PURE__ */ import_react80.default.createElement("button", {
    type: "button",
    className: styles16.ClearButton,
    onClick: handleClearButtonPress,
    disabled
  }, /* @__PURE__ */ import_react80.default.createElement(Text, {
    as: "span",
    visuallyHidden: true
  }, i18n.translate("Polaris.Common.clear")), /* @__PURE__ */ import_react80.default.createElement(Icon, {
    source: SvgCircleCancelMinor,
    tone: "base"
  })) : null;
  const handleNumberChange = (0, import_react80.useCallback)((steps, stepAmount = normalizedStep) => {
    if (onChange == null && onSpinnerChange == null) {
      return;
    }
    const dpl = (num) => (num.toString().split(".")[1] || []).length;
    const numericValue = value ? parseFloat(value) : 0;
    if (isNaN(numericValue)) {
      return;
    }
    const decimalPlaces = type === "integer" ? 0 : Math.max(dpl(numericValue), dpl(stepAmount));
    const newValue = Math.min(Number(normalizedMax), Math.max(numericValue + steps * stepAmount, Number(normalizedMin)));
    if (onSpinnerChange != null) {
      onSpinnerChange(String(newValue.toFixed(decimalPlaces)), id);
    } else if (onChange != null) {
      onChange(String(newValue.toFixed(decimalPlaces)), id);
    }
  }, [id, normalizedMax, normalizedMin, onChange, onSpinnerChange, normalizedStep, type, value]);
  const handleSpinnerButtonRelease = (0, import_react80.useCallback)(() => {
    clearTimeout(buttonPressTimer.current);
  }, []);
  const handleSpinnerButtonPress = (0, import_react80.useCallback)((onChange2) => {
    const minInterval = 50;
    const decrementBy = 10;
    let interval = 200;
    const onChangeInterval = () => {
      if (interval > minInterval)
        interval -= decrementBy;
      onChange2(0);
      buttonPressTimer.current = window.setTimeout(onChangeInterval, interval);
    };
    buttonPressTimer.current = window.setTimeout(onChangeInterval, interval);
    document.addEventListener("mouseup", handleSpinnerButtonRelease, {
      once: true
    });
  }, [handleSpinnerButtonRelease]);
  const spinnerMarkup = isNumericType && step !== 0 && !disabled && !readOnly ? /* @__PURE__ */ import_react80.default.createElement(Spinner2, {
    onClick: handleClickChild,
    onChange: handleNumberChange,
    onMouseDown: handleSpinnerButtonPress,
    onMouseUp: handleSpinnerButtonRelease,
    ref: spinnerRef,
    onBlur: handleOnBlur
  }) : null;
  const style = multiline && height2 ? {
    height: height2,
    maxHeight
  } : null;
  const handleExpandingResize = (0, import_react80.useCallback)((height3) => {
    setHeight(height3);
  }, []);
  const resizer = multiline && isAfterInitial ? /* @__PURE__ */ import_react80.default.createElement(Resizer, {
    contents: normalizedValue || placeholder,
    currentHeight: height2,
    minimumLines: typeof multiline === "number" ? multiline : 1,
    onHeightChange: handleExpandingResize
  }) : null;
  const describedBy = [];
  if (error) {
    describedBy.push(`${id}Error`);
  }
  if (helpText) {
    describedBy.push(helpTextID(id));
  }
  if (showCharacterCount) {
    describedBy.push(`${id}-CharacterCounter`);
  }
  const labelledBy = [];
  if (prefix) {
    labelledBy.push(`${id}-Prefix`);
  }
  if (suffix) {
    labelledBy.push(`${id}-Suffix`);
  }
  if (verticalContent) {
    labelledBy.push(`${id}-VerticalContent`);
  }
  labelledBy.unshift(labelID(id));
  const inputClassName = classNames(styles16.Input, align && styles16[variationName("Input-align", align)], suffix && styles16["Input-suffixed"], clearButton && styles16["Input-hasClearButton"], monospaced && styles16.monospaced, suggestion && styles16.suggestion);
  const handleOnFocus = (event) => {
    setFocus(true);
    if (selectTextOnFocus && !suggestion) {
      const input2 = multiline ? textAreaRef.current : inputRef.current;
      input2?.select();
    }
    if (onFocus) {
      onFocus(event);
    }
  };
  useEventListener("wheel", handleOnWheel, inputRef);
  function handleOnWheel(event) {
    if (document.activeElement === event.target && isNumericType) {
      event.stopPropagation();
    }
  }
  const input = /* @__PURE__ */ (0, import_react80.createElement)(multiline ? "textarea" : "input", {
    name,
    id,
    disabled,
    readOnly,
    role,
    autoFocus,
    value: normalizedValue,
    placeholder,
    style,
    autoComplete,
    className: inputClassName,
    ref: multiline ? textAreaRef : inputRef,
    min,
    max,
    step,
    minLength,
    maxLength,
    spellCheck,
    pattern,
    inputMode,
    type: inputType,
    rows: getRows(multiline),
    "aria-describedby": describedBy.length ? describedBy.join(" ") : void 0,
    "aria-labelledby": labelledBy.join(" "),
    "aria-invalid": Boolean(error),
    "aria-owns": ariaOwns,
    "aria-activedescendant": ariaActiveDescendant,
    "aria-autocomplete": ariaAutocomplete,
    "aria-controls": ariaControls,
    "aria-expanded": ariaExpanded,
    "aria-required": requiredIndicator,
    ...normalizeAriaMultiline(multiline),
    onFocus: handleOnFocus,
    onBlur: handleOnBlur,
    onClick: handleClickChild,
    onKeyPress: handleKeyPress,
    onKeyDown: handleKeyDown,
    onChange: !suggestion ? handleChange : void 0,
    onInput: suggestion ? handleChange : void 0,
    // 1Password disable data attribute
    "data-1p-ignore": autoComplete === "off" || void 0,
    // LastPass disable data attribute
    "data-lpignore": autoComplete === "off" || void 0,
    // Dashlane disable data attribute
    "data-form-type": autoComplete === "off" ? "other" : void 0
  });
  const inputWithVerticalContentMarkup = verticalContent ? /* @__PURE__ */ import_react80.default.createElement("div", {
    className: styles16.VerticalContent,
    id: `${id}-VerticalContent`,
    ref: verticalContentRef,
    onClick: handleClickChild
  }, verticalContent, input) : null;
  const inputMarkup = verticalContent ? inputWithVerticalContentMarkup : input;
  const backdropMarkup = /* @__PURE__ */ import_react80.default.createElement("div", {
    className: classNames(styles16.Backdrop, connectedLeft && styles16["Backdrop-connectedLeft"], connectedRight && styles16["Backdrop-connectedRight"])
  });
  return /* @__PURE__ */ import_react80.default.createElement(Labelled, {
    label,
    id,
    error,
    action: labelAction,
    labelHidden,
    helpText,
    requiredIndicator,
    disabled,
    readOnly
  }, /* @__PURE__ */ import_react80.default.createElement(Connected, {
    left: connectedLeft,
    right: connectedRight
  }, /* @__PURE__ */ import_react80.default.createElement("div", {
    className,
    onClick: handleClick,
    ref: textFieldRef
  }, prefixMarkup, inputMarkup, suffixMarkup, characterCountMarkup, clearButtonMarkup, spinnerMarkup, backdropMarkup, resizer)));
  function handleChange(event) {
    onChange && onChange(event.currentTarget.value, id);
  }
  function handleClick(event) {
    const {
      target
    } = event;
    const inputRefRole = inputRef?.current?.getAttribute("role");
    if (target === inputRef.current && inputRefRole === "combobox") {
      inputRef.current?.focus();
      handleOnFocus(event);
      return;
    }
    if (isPrefixOrSuffix(target) || isVerticalContent(target) || isInput(target) || isSpinner(target) || focus) {
      return;
    }
    inputRef.current?.focus();
  }
  function handleClickChild(event) {
    if (!isSpinner(event.target) && !isInput(event.target)) {
      event.stopPropagation();
    }
    if (isPrefixOrSuffix(event.target) || isVerticalContent(event.target) || isInput(event.target) || focus) {
      return;
    }
    setFocus(true);
    inputRef.current?.focus();
  }
  function handleClearButtonPress() {
    onClearButtonClick && onClearButtonClick(id);
  }
  function handleKeyPress(event) {
    const {
      key,
      which
    } = event;
    const numbersSpec = /[\d.,eE+-]$/;
    const integerSpec = /[\deE+-]$/;
    if (!isNumericType || which === Key.Enter || type === "number" && numbersSpec.test(key) || type === "integer" && integerSpec.test(key)) {
      return;
    }
    event.preventDefault();
  }
  function handleKeyDown(event) {
    if (!isNumericType) {
      return;
    }
    const {
      key,
      which
    } = event;
    if (type === "integer" && (key === "ArrowUp" || which === Key.UpArrow)) {
      handleNumberChange(1);
      event.preventDefault();
    }
    if (type === "integer" && (key === "ArrowDown" || which === Key.DownArrow)) {
      handleNumberChange(-1);
      event.preventDefault();
    }
    if ((which === Key.Home || key === "Home") && min !== void 0) {
      if (onSpinnerChange != null) {
        onSpinnerChange(String(min), id);
      } else if (onChange != null) {
        onChange(String(min), id);
      }
    }
    if ((which === Key.End || key === "End") && max !== void 0) {
      if (onSpinnerChange != null) {
        onSpinnerChange(String(max), id);
      } else if (onChange != null) {
        onChange(String(max), id);
      }
    }
    if ((which === Key.PageUp || key === "PageUp") && largeStep !== void 0) {
      handleNumberChange(1, largeStep);
    }
    if ((which === Key.PageDown || key === "PageDown") && largeStep !== void 0) {
      handleNumberChange(-1, largeStep);
    }
  }
  function handleOnBlur(event) {
    setFocus(false);
    if (textFieldRef.current?.contains(event?.relatedTarget)) {
      return;
    }
    if (onBlur) {
      onBlur(event);
    }
  }
  function isInput(target) {
    return target instanceof HTMLElement && inputRef.current && (inputRef.current.contains(target) || inputRef.current.contains(document.activeElement));
  }
  function isPrefixOrSuffix(target) {
    return target instanceof Element && (prefixRef.current && prefixRef.current.contains(target) || suffixRef.current && suffixRef.current.contains(target));
  }
  function isSpinner(target) {
    return target instanceof Element && spinnerRef.current && spinnerRef.current.contains(target);
  }
  function isVerticalContent(target) {
    return target instanceof Element && verticalContentRef.current && (verticalContentRef.current.contains(target) || verticalContentRef.current.contains(document.activeElement));
  }
}
function getRows(multiline) {
  if (!multiline)
    return void 0;
  return typeof multiline === "number" ? multiline : 1;
}
function normalizeAriaMultiline(multiline) {
  if (!multiline)
    return void 0;
  return Boolean(multiline) || typeof multiline === "number" && multiline > 0 ? {
    "aria-multiline": true
  } : void 0;
}

// node_modules/@shopify/polaris/build/esm/components/ActionList/ActionList.js
var FILTER_ACTIONS_THRESHOLD = 8;
function ActionList({
  items,
  sections = [],
  actionRole,
  allowFiltering,
  onActionAnyItem
}) {
  const i18n = useI18n();
  const filterActions = (0, import_react81.useContext)(FilterActionsContext);
  let finalSections = [];
  const actionListRef = (0, import_react81.useRef)(null);
  const [searchText, setSeachText] = (0, import_react81.useState)("");
  if (items) {
    finalSections = [{
      items
    }, ...sections];
  } else if (sections) {
    finalSections = sections;
  }
  const isFilterable = finalSections?.some((section) => section.items.some((item) => typeof item.content === "string"));
  const hasMultipleSections = finalSections.length > 1;
  const elementRole = hasMultipleSections && actionRole === "menuitem" ? "menu" : void 0;
  const elementTabIndex = hasMultipleSections && actionRole === "menuitem" ? -1 : void 0;
  const filteredSections = finalSections?.map((section) => ({
    ...section,
    items: section.items.filter(({
      content
    }) => typeof content === "string" ? content?.toLowerCase().includes(searchText.toLowerCase()) : content)
  }));
  const sectionMarkup = filteredSections.map((section, index) => {
    return section.items.length > 0 ? /* @__PURE__ */ import_react81.default.createElement(Section, {
      key: typeof section.title === "string" ? section.title : index,
      section,
      hasMultipleSections,
      actionRole,
      onActionAnyItem,
      isFirst: index === 0
    }) : null;
  });
  const handleFocusPreviousItem = (evt) => {
    evt.preventDefault();
    if (actionListRef.current && evt.target) {
      if (actionListRef.current.contains(evt.target)) {
        wrapFocusPreviousFocusableMenuItem(actionListRef.current, evt.target);
      }
    }
  };
  const handleFocusNextItem = (evt) => {
    evt.preventDefault();
    if (actionListRef.current && evt.target) {
      if (actionListRef.current.contains(evt.target)) {
        wrapFocusNextFocusableMenuItem(actionListRef.current, evt.target);
      }
    }
  };
  const listeners = actionRole === "menuitem" ? /* @__PURE__ */ import_react81.default.createElement(import_react81.default.Fragment, null, /* @__PURE__ */ import_react81.default.createElement(KeypressListener, {
    keyEvent: "keydown",
    keyCode: Key.DownArrow,
    handler: handleFocusNextItem
  }), /* @__PURE__ */ import_react81.default.createElement(KeypressListener, {
    keyEvent: "keydown",
    keyCode: Key.UpArrow,
    handler: handleFocusPreviousItem
  })) : null;
  const totalFilteredActions = (0, import_react81.useMemo)(() => {
    const totalSectionItems = filteredSections?.reduce((acc, section) => acc + section.items.length, 0) || 0;
    return totalSectionItems;
  }, [filteredSections]);
  const totalActions = finalSections?.reduce((acc, section) => acc + section.items.length, 0) || 0;
  const hasManyActions = totalActions >= FILTER_ACTIONS_THRESHOLD;
  return /* @__PURE__ */ import_react81.default.createElement(import_react81.default.Fragment, null, (allowFiltering || filterActions) && hasManyActions && isFilterable && /* @__PURE__ */ import_react81.default.createElement(Box, {
    padding: "200",
    paddingBlockEnd: totalFilteredActions > 0 ? "0" : "200"
  }, /* @__PURE__ */ import_react81.default.createElement(TextField, {
    clearButton: true,
    labelHidden: true,
    label: i18n.translate("Polaris.ActionList.SearchField.placeholder"),
    placeholder: i18n.translate("Polaris.ActionList.SearchField.placeholder"),
    autoComplete: "off",
    value: searchText,
    onChange: (value) => setSeachText(value),
    prefix: /* @__PURE__ */ import_react81.default.createElement(Icon, {
      source: SvgSearchMinor
    }),
    onClearButtonClick: () => setSeachText("")
  })), /* @__PURE__ */ import_react81.default.createElement(Box, {
    as: hasMultipleSections ? "ul" : "div",
    ref: actionListRef,
    role: elementRole,
    tabIndex: elementTabIndex
  }, listeners, sectionMarkup));
}
ActionList.Item = Item;

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/ActionMenu.js
var import_react93 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/ActionMenu.scss.js
var styles21 = {
  "ActionMenu": "Polaris-ActionMenu"
};

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/RollupActions/RollupActions.js
var import_react87 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/RollupActions/RollupActions.scss.js
var styles22 = {
  "RollupActivator": "Polaris-ActionMenu-RollupActions__RollupActivator"
};

// node_modules/@shopify/polaris/build/esm/components/Popover/Popover.js
var import_react86 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Popover/set-activator-attributes.js
function setActivatorAttributes(activator, {
  id,
  active = false,
  ariaHaspopup,
  activatorDisabled = false
}) {
  if (!activatorDisabled) {
    activator.tabIndex = activator.tabIndex || 0;
  }
  activator.setAttribute("aria-controls", id);
  activator.setAttribute("aria-owns", id);
  activator.setAttribute("aria-expanded", String(active));
  if (ariaHaspopup != null) {
    activator.setAttribute("aria-haspopup", String(ariaHaspopup));
  }
}

// node_modules/@shopify/polaris/build/esm/components/Popover/components/PopoverOverlay/PopoverOverlay.js
var import_react85 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/components.js
var import_react82 = __toESM(require_react());
function wrapWithComponent(element, Component2, props) {
  if (element == null) {
    return null;
  }
  return isElementOfType(element, Component2) ? element : /* @__PURE__ */ import_react82.default.createElement(Component2, props, element);
}
var isComponent = true ? hotReloadComponentCheck : (AComponent, AnotherComponent) => AComponent === AnotherComponent;
function isElementOfType(element, Component2) {
  if (element == null || !/* @__PURE__ */ (0, import_react82.isValidElement)(element) || typeof element.type === "string") {
    return false;
  }
  const {
    type: defaultType
  } = element;
  const overrideType = element.props?.__type__;
  const type = overrideType || defaultType;
  const Components = Array.isArray(Component2) ? Component2 : [Component2];
  return Components.some((AComponent) => typeof type !== "string" && isComponent(AComponent, type));
}
function elementChildren(children, predicate = () => true) {
  return import_react82.Children.toArray(children).filter((child) => /* @__PURE__ */ (0, import_react82.isValidElement)(child) && predicate(child));
}
function ConditionalWrapper({
  condition,
  wrapper,
  children
}) {
  return condition ? wrapper(children) : children;
}
function ConditionalRender({
  condition,
  children
}) {
  return condition ? children : null;
}
function hotReloadComponentCheck(AComponent, AnotherComponent) {
  const componentName = AComponent.name;
  const anotherComponentName = AnotherComponent.displayName;
  return AComponent === AnotherComponent || Boolean(componentName) && componentName === anotherComponentName;
}

// node_modules/@shopify/polaris/build/esm/components/Popover/Popover.scss.js
var styles23 = {
  "Popover": "Polaris-Popover",
  "PopoverOverlay": "Polaris-Popover__PopoverOverlay",
  "PopoverOverlay-entering": "Polaris-Popover__PopoverOverlay--entering",
  "PopoverOverlay-open": "Polaris-Popover__PopoverOverlay--open",
  "measuring": "Polaris-Popover--measuring",
  "PopoverOverlay-exiting": "Polaris-Popover__PopoverOverlay--exiting",
  "fullWidth": "Polaris-Popover--fullWidth",
  "Content": "Polaris-Popover__Content",
  "positionedAbove": "Polaris-Popover--positionedAbove",
  "ContentContainer": "Polaris-Popover__ContentContainer",
  "Content-fullHeight": "Polaris-Popover__Content--fullHeight",
  "Content-fluidContent": "Polaris-Popover__Content--fluidContent",
  "Pane": "Polaris-Popover__Pane",
  "Pane-fixed": "Polaris-Popover__Pane--fixed",
  "Pane-subdued": "Polaris-Popover__Pane--subdued",
  "Pane-captureOverscroll": "Polaris-Popover__Pane--captureOverscroll",
  "Section": "Polaris-Popover__Section",
  "FocusTracker": "Polaris-Popover__FocusTracker",
  "PopoverOverlay-hideOnPrint": "Polaris-Popover__PopoverOverlay--hideOnPrint"
};

// node_modules/@shopify/polaris/build/esm/components/Popover/components/Pane/Pane.js
var import_react84 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Popover/components/Section/Section.js
var import_react83 = __toESM(require_react());
function Section2({
  children
}) {
  return /* @__PURE__ */ import_react83.default.createElement("div", {
    className: styles23.Section
  }, /* @__PURE__ */ import_react83.default.createElement(Box, {
    paddingInlineStart: "300",
    paddingInlineEnd: "300",
    paddingBlockStart: "200",
    paddingBlockEnd: "150"
  }, children));
}

// node_modules/@shopify/polaris/build/esm/components/Popover/components/Pane/Pane.js
function Pane({
  captureOverscroll = false,
  fixed,
  sectioned,
  children,
  height: height2,
  subdued,
  onScrolledToBottom
}) {
  const className = classNames(styles23.Pane, fixed && styles23["Pane-fixed"], subdued && styles23["Pane-subdued"], captureOverscroll && styles23["Pane-captureOverscroll"]);
  const content = sectioned ? wrapWithComponent(children, Section2, {}) : children;
  const style = height2 ? {
    height: height2,
    maxHeight: height2,
    minHeight: height2
  } : void 0;
  return fixed ? /* @__PURE__ */ import_react84.default.createElement("div", {
    style,
    className
  }, content) : /* @__PURE__ */ import_react84.default.createElement(Scrollable, {
    shadow: true,
    className,
    style,
    onScrolledToBottom
  }, content);
}

// node_modules/@shopify/polaris/build/esm/components/Popover/components/PopoverOverlay/PopoverOverlay.js
var PopoverCloseSource;
(function(PopoverCloseSource2) {
  PopoverCloseSource2[PopoverCloseSource2["Click"] = 0] = "Click";
  PopoverCloseSource2[PopoverCloseSource2["EscapeKeypress"] = 1] = "EscapeKeypress";
  PopoverCloseSource2[PopoverCloseSource2["FocusOut"] = 2] = "FocusOut";
  PopoverCloseSource2[PopoverCloseSource2["ScrollOut"] = 3] = "ScrollOut";
})(PopoverCloseSource || (PopoverCloseSource = {}));
var TransitionStatus;
(function(TransitionStatus2) {
  TransitionStatus2["Entering"] = "entering";
  TransitionStatus2["Entered"] = "entered";
  TransitionStatus2["Exiting"] = "exiting";
  TransitionStatus2["Exited"] = "exited";
})(TransitionStatus || (TransitionStatus = {}));
var PopoverOverlay = class extends import_react85.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      transitionStatus: this.props.active ? TransitionStatus.Entering : TransitionStatus.Exited
    };
    this.contentNode = /* @__PURE__ */ (0, import_react85.createRef)();
    this.renderPopover = (overlayDetails) => {
      const {
        measuring,
        desiredHeight,
        positioning
      } = overlayDetails;
      const {
        id,
        children,
        sectioned,
        fullWidth,
        fullHeight,
        fluidContent,
        hideOnPrint,
        autofocusTarget,
        captureOverscroll
      } = this.props;
      const className = classNames(styles23.Popover, positioning === "above" && styles23.positionedAbove, fullWidth && styles23.fullWidth, measuring && styles23.measuring, hideOnPrint && styles23["PopoverOverlay-hideOnPrint"]);
      const contentStyles = measuring ? void 0 : {
        height: desiredHeight
      };
      const contentClassNames = classNames(styles23.Content, fullHeight && styles23["Content-fullHeight"], fluidContent && styles23["Content-fluidContent"]);
      return /* @__PURE__ */ import_react85.default.createElement("div", Object.assign({
        className
      }, overlay.props), /* @__PURE__ */ import_react85.default.createElement(EventListener, {
        event: "click",
        handler: this.handleClick
      }), /* @__PURE__ */ import_react85.default.createElement(EventListener, {
        event: "touchstart",
        handler: this.handleClick
      }), /* @__PURE__ */ import_react85.default.createElement(KeypressListener, {
        keyCode: Key.Escape,
        handler: this.handleEscape
      }), /* @__PURE__ */ import_react85.default.createElement("div", {
        className: styles23.FocusTracker,
        tabIndex: 0,
        onFocus: this.handleFocusFirstItem
      }), /* @__PURE__ */ import_react85.default.createElement("div", {
        className: styles23.ContentContainer
      }, /* @__PURE__ */ import_react85.default.createElement("div", {
        id,
        tabIndex: autofocusTarget === "none" ? void 0 : -1,
        className: contentClassNames,
        style: contentStyles,
        ref: this.contentNode
      }, renderPopoverContent(children, {
        captureOverscroll,
        sectioned
      }))), /* @__PURE__ */ import_react85.default.createElement("div", {
        className: styles23.FocusTracker,
        tabIndex: 0,
        onFocus: this.handleFocusLastItem
      }));
    };
    this.handleClick = (event) => {
      const target = event.target;
      const {
        contentNode,
        props: {
          activator,
          onClose,
          preventCloseOnChildOverlayClick
        }
      } = this;
      const composedPath = event.composedPath();
      const wasDescendant = preventCloseOnChildOverlayClick ? wasPolarisPortalDescendant(composedPath, this.context.container) : wasContentNodeDescendant(composedPath, contentNode);
      const isActivatorDescendant = nodeContainsDescendant(activator, target);
      if (wasDescendant || isActivatorDescendant || this.state.transitionStatus !== TransitionStatus.Entered) {
        return;
      }
      onClose(PopoverCloseSource.Click);
    };
    this.handleScrollOut = () => {
      this.props.onClose(PopoverCloseSource.ScrollOut);
    };
    this.handleEscape = (event) => {
      const target = event.target;
      const {
        contentNode,
        props: {
          activator
        }
      } = this;
      const composedPath = event.composedPath();
      const wasDescendant = wasContentNodeDescendant(composedPath, contentNode);
      const isActivatorDescendant = nodeContainsDescendant(activator, target);
      if (wasDescendant || isActivatorDescendant) {
        this.props.onClose(PopoverCloseSource.EscapeKeypress);
      }
    };
    this.handleFocusFirstItem = () => {
      this.props.onClose(PopoverCloseSource.FocusOut);
    };
    this.handleFocusLastItem = () => {
      this.props.onClose(PopoverCloseSource.FocusOut);
    };
    this.overlayRef = /* @__PURE__ */ (0, import_react85.createRef)();
  }
  forceUpdatePosition() {
    this.overlayRef.current?.forceUpdatePosition();
  }
  changeTransitionStatus(transitionStatus, cb) {
    this.setState({
      transitionStatus
    }, cb);
    this.contentNode.current && this.contentNode.current.getBoundingClientRect();
  }
  componentDidMount() {
    if (this.props.active) {
      this.focusContent();
      this.changeTransitionStatus(TransitionStatus.Entered);
    }
  }
  componentDidUpdate(oldProps) {
    if (this.props.active && !oldProps.active) {
      this.focusContent();
      this.changeTransitionStatus(TransitionStatus.Entering, () => {
        this.clearTransitionTimeout();
        this.enteringTimer = window.setTimeout(() => {
          this.setState({
            transitionStatus: TransitionStatus.Entered
          });
        }, parseInt(themeDefault.motion["motion-duration-100"], 10));
      });
    }
    if (!this.props.active && oldProps.active) {
      this.clearTransitionTimeout();
      this.setState({
        transitionStatus: TransitionStatus.Exited
      });
    }
  }
  componentWillUnmount() {
    this.clearTransitionTimeout();
  }
  render() {
    const {
      active,
      activator,
      fullWidth,
      preferredPosition = "below",
      preferredAlignment = "center",
      preferInputActivator = true,
      fixed,
      zIndexOverride
    } = this.props;
    const {
      transitionStatus
    } = this.state;
    if (transitionStatus === TransitionStatus.Exited && !active)
      return null;
    const className = classNames(styles23.PopoverOverlay, transitionStatus === TransitionStatus.Entering && styles23["PopoverOverlay-entering"], transitionStatus === TransitionStatus.Entered && styles23["PopoverOverlay-open"], transitionStatus === TransitionStatus.Exiting && styles23["PopoverOverlay-exiting"]);
    return /* @__PURE__ */ import_react85.default.createElement(PositionedOverlay, {
      ref: this.overlayRef,
      fullWidth,
      active,
      activator,
      preferInputActivator,
      preferredPosition,
      preferredAlignment,
      render: this.renderPopover.bind(this),
      fixed,
      onScrollOut: this.handleScrollOut,
      classNames: className,
      zIndexOverride
    });
  }
  clearTransitionTimeout() {
    if (this.enteringTimer) {
      window.clearTimeout(this.enteringTimer);
    }
  }
  focusContent() {
    const {
      autofocusTarget = "container"
    } = this.props;
    if (autofocusTarget === "none" || this.contentNode == null) {
      return;
    }
    requestAnimationFrame(() => {
      if (this.contentNode.current == null) {
        return;
      }
      const focusableChild = findFirstKeyboardFocusableNode(this.contentNode.current);
      if (focusableChild && autofocusTarget === "first-node") {
        focusableChild.focus({
          preventScroll: true
        });
      } else {
        this.contentNode.current.focus({
          preventScroll: true
        });
      }
    });
  }
  // eslint-disable-next-line @shopify/react-no-multiple-render-methods
};
PopoverOverlay.contextType = PortalsManagerContext;
function renderPopoverContent(children, props) {
  const childrenArray = import_react85.Children.toArray(children);
  if (isElementOfType(childrenArray[0], Pane)) {
    return childrenArray;
  }
  return wrapWithComponent(childrenArray, Pane, props);
}
function nodeContainsDescendant(rootNode, descendant) {
  if (rootNode === descendant) {
    return true;
  }
  let parent = descendant.parentNode;
  while (parent != null) {
    if (parent === rootNode) {
      return true;
    }
    parent = parent.parentNode;
  }
  return false;
}
function wasContentNodeDescendant(composedPath, contentNode) {
  return contentNode.current != null && composedPath.includes(contentNode.current);
}
function wasPolarisPortalDescendant(composedPath, portalsContainerElement) {
  return composedPath.some((eventTarget) => eventTarget instanceof Node && portalsContainerElement?.contains(eventTarget));
}

// node_modules/@shopify/polaris/build/esm/components/Popover/Popover.js
var PopoverComponent = /* @__PURE__ */ (0, import_react86.forwardRef)(function Popover({
  activatorWrapper = "div",
  children,
  onClose,
  activator,
  preventFocusOnClose,
  active,
  fixed,
  ariaHaspopup,
  preferInputActivator = true,
  zIndexOverride,
  ...rest
}, ref) {
  const [activatorNode, setActivatorNode] = (0, import_react86.useState)();
  const overlayRef = (0, import_react86.useRef)(null);
  const activatorContainer = (0, import_react86.useRef)(null);
  const WrapperComponent = activatorWrapper;
  const id = (0, import_react86.useId)();
  function forceUpdatePosition() {
    overlayRef.current?.forceUpdatePosition();
  }
  (0, import_react86.useImperativeHandle)(ref, () => {
    return {
      forceUpdatePosition
    };
  });
  const setAccessibilityAttributes = (0, import_react86.useCallback)(() => {
    if (activatorContainer.current == null) {
      return;
    }
    const firstFocusable = findFirstFocusableNodeIncludingDisabled(activatorContainer.current);
    const focusableActivator = firstFocusable || activatorContainer.current;
    const activatorDisabled = "disabled" in focusableActivator && Boolean(focusableActivator.disabled);
    setActivatorAttributes(focusableActivator, {
      id,
      active,
      ariaHaspopup,
      activatorDisabled
    });
  }, [id, active, ariaHaspopup]);
  const handleClose = (source) => {
    onClose(source);
    if (activatorContainer.current == null || preventFocusOnClose) {
      return;
    }
    if (source === PopoverCloseSource.FocusOut && activatorNode) {
      const focusableActivator = findFirstFocusableNodeIncludingDisabled(activatorNode) || findFirstFocusableNodeIncludingDisabled(activatorContainer.current) || activatorContainer.current;
      if (!focusNextFocusableNode(focusableActivator, isInPortal)) {
        focusableActivator.focus();
      }
    } else if (source === PopoverCloseSource.EscapeKeypress && activatorNode) {
      const focusableActivator = findFirstFocusableNodeIncludingDisabled(activatorNode) || findFirstFocusableNodeIncludingDisabled(activatorContainer.current) || activatorContainer.current;
      if (focusableActivator) {
        focusableActivator.focus();
      } else {
        focusNextFocusableNode(focusableActivator, isInPortal);
      }
    }
  };
  (0, import_react86.useEffect)(() => {
    if (!activatorNode && activatorContainer.current) {
      setActivatorNode(activatorContainer.current.firstElementChild);
    } else if (activatorNode && activatorContainer.current && !activatorContainer.current.contains(activatorNode)) {
      setActivatorNode(activatorContainer.current.firstElementChild);
    }
    setAccessibilityAttributes();
  }, [activatorNode, setAccessibilityAttributes]);
  (0, import_react86.useEffect)(() => {
    if (activatorNode && activatorContainer.current) {
      setActivatorNode(activatorContainer.current.firstElementChild);
    }
    setAccessibilityAttributes();
  }, [activatorNode, setAccessibilityAttributes]);
  const portal2 = activatorNode ? /* @__PURE__ */ import_react86.default.createElement(Portal, {
    idPrefix: "popover"
  }, /* @__PURE__ */ import_react86.default.createElement(PopoverOverlay, Object.assign({
    ref: overlayRef,
    id,
    activator: activatorNode,
    preferInputActivator,
    onClose: handleClose,
    active,
    fixed,
    zIndexOverride
  }, rest), children)) : null;
  return /* @__PURE__ */ import_react86.default.createElement(WrapperComponent, {
    ref: activatorContainer
  }, import_react86.Children.only(activator), portal2);
});
function isInPortal(element) {
  let parentElement = element.parentElement;
  while (parentElement) {
    if (parentElement.matches(portal.selector))
      return false;
    parentElement = parentElement.parentElement;
  }
  return true;
}
var Popover2 = Object.assign(PopoverComponent, {
  Pane,
  Section: Section2
});

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/RollupActions/RollupActions.js
function RollupActions({
  accessibilityLabel,
  items = [],
  sections = []
}) {
  const i18n = useI18n();
  const {
    value: rollupOpen,
    toggle: toggleRollupOpen
  } = useToggle(false);
  if (items.length === 0 && sections.length === 0) {
    return null;
  }
  const activatorMarkup = /* @__PURE__ */ import_react87.default.createElement("div", {
    className: styles22.RollupActivator
  }, /* @__PURE__ */ import_react87.default.createElement(Button, {
    icon: SvgHorizontalDotsMinor,
    accessibilityLabel: accessibilityLabel || i18n.translate("Polaris.ActionMenu.RollupActions.rollupButton"),
    onClick: toggleRollupOpen
  }));
  return /* @__PURE__ */ import_react87.default.createElement(Popover2, {
    active: rollupOpen,
    activator: activatorMarkup,
    preferredAlignment: "right",
    onClose: toggleRollupOpen,
    hideOnPrint: true
  }, /* @__PURE__ */ import_react87.default.createElement(ActionList, {
    items,
    sections,
    onActionAnyItem: toggleRollupOpen
  }));
}

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/Actions/Actions.js
var import_react92 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/Actions/Actions.scss.js
var styles24 = {
  "ActionsLayout": "Polaris-ActionMenu-Actions__ActionsLayout"
};

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/MenuGroup/MenuGroup.js
var import_react89 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/MenuGroup/MenuGroup.scss.js
var styles25 = {
  "Details": "Polaris-ActionMenu-MenuGroup__Details"
};

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/SecondaryAction/SecondaryAction.js
var import_react88 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/SecondaryAction/SecondaryAction.scss.js
var styles26 = {
  "SecondaryAction": "Polaris-ActionMenu-SecondaryAction",
  "critical": "Polaris-ActionMenu-SecondaryAction--critical"
};

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/SecondaryAction/SecondaryAction.js
function SecondaryAction({
  children,
  tone,
  helpText,
  onAction,
  getOffsetWidth,
  destructive,
  ...rest
}) {
  const secondaryActionsRef = (0, import_react88.useRef)(null);
  (0, import_react88.useEffect)(() => {
    if (!getOffsetWidth || !secondaryActionsRef.current)
      return;
    getOffsetWidth(secondaryActionsRef.current?.offsetWidth);
  }, [getOffsetWidth]);
  const buttonMarkup = /* @__PURE__ */ import_react88.default.createElement(Button, Object.assign({
    onClick: onAction,
    tone: destructive ? "critical" : void 0
  }, rest), children);
  const actionMarkup = helpText ? /* @__PURE__ */ import_react88.default.createElement(Tooltip, {
    preferredPosition: "below",
    content: helpText
  }, buttonMarkup) : buttonMarkup;
  return /* @__PURE__ */ import_react88.default.createElement("div", {
    className: classNames(styles26.SecondaryAction, tone === "critical" && styles26.critical),
    ref: secondaryActionsRef
  }, actionMarkup);
}

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/MenuGroup/MenuGroup.js
function MenuGroup({
  accessibilityLabel,
  active,
  actions,
  details,
  title,
  icon,
  disabled,
  onClick,
  onClose,
  onOpen,
  getOffsetWidth,
  sections
}) {
  const handleClose = (0, import_react89.useCallback)(() => {
    onClose(title);
  }, [onClose, title]);
  const handleOpen = (0, import_react89.useCallback)(() => {
    onOpen(title);
  }, [onOpen, title]);
  const handleClick = (0, import_react89.useCallback)(() => {
    if (onClick) {
      onClick(handleOpen);
    } else {
      handleOpen();
    }
  }, [onClick, handleOpen]);
  const handleOffsetWidth = (0, import_react89.useCallback)((width2) => {
    if (!getOffsetWidth)
      return;
    getOffsetWidth(width2);
  }, [getOffsetWidth]);
  const popoverActivator = /* @__PURE__ */ import_react89.default.createElement(SecondaryAction, {
    disclosure: true,
    disabled,
    icon,
    accessibilityLabel,
    onClick: handleClick,
    getOffsetWidth: handleOffsetWidth
  }, title);
  return /* @__PURE__ */ import_react89.default.createElement(Popover2, {
    active: Boolean(active),
    activator: popoverActivator,
    preferredAlignment: "left",
    onClose: handleClose,
    hideOnPrint: true
  }, /* @__PURE__ */ import_react89.default.createElement(ActionList, {
    items: actions,
    sections,
    onActionAnyItem: handleClose
  }), details && /* @__PURE__ */ import_react89.default.createElement("div", {
    className: styles25.Details
  }, details));
}

// node_modules/@shopify/polaris/build/esm/components/ButtonGroup/ButtonGroup.js
var import_react91 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/ButtonGroup/ButtonGroup.scss.js
var styles27 = {
  "ButtonGroup": "Polaris-ButtonGroup",
  "Item": "Polaris-ButtonGroup__Item",
  "Item-plain": "Polaris-ButtonGroup__Item--plain",
  "variantSegmented": "Polaris-ButtonGroup--variantSegmented",
  "Item-focused": "Polaris-ButtonGroup__Item--focused",
  "fullWidth": "Polaris-ButtonGroup--fullWidth",
  "extraTight": "Polaris-ButtonGroup--extraTight",
  "tight": "Polaris-ButtonGroup--tight",
  "loose": "Polaris-ButtonGroup--loose",
  "noWrap": "Polaris-ButtonGroup--noWrap"
};

// node_modules/@shopify/polaris/build/esm/components/ButtonGroup/components/Item/Item.js
var import_react90 = __toESM(require_react());
function Item3({
  button
}) {
  const {
    value: focused,
    setTrue: forceTrueFocused,
    setFalse: forceFalseFocused
  } = useToggle(false);
  const className = classNames(styles27.Item, focused && styles27["Item-focused"], button.props.variant === "plain" && styles27["Item-plain"]);
  return /* @__PURE__ */ import_react90.default.createElement("div", {
    className,
    onFocus: forceTrueFocused,
    onBlur: forceFalseFocused
  }, button);
}

// node_modules/@shopify/polaris/build/esm/components/ButtonGroup/ButtonGroup.js
function ButtonGroup({
  children,
  gap,
  variant,
  fullWidth,
  connectedTop,
  noWrap
}) {
  const className = classNames(styles27.ButtonGroup, gap && styles27[gap], variant && styles27[variationName("variant", variant)], fullWidth && styles27.fullWidth, noWrap && styles27.noWrap);
  const contents = elementChildren(children).map((child, index) => /* @__PURE__ */ import_react91.default.createElement(Item3, {
    button: child,
    key: index
  }));
  return /* @__PURE__ */ import_react91.default.createElement("div", {
    className,
    "data-buttongroup-variant": variant,
    "data-buttongroup-connected-top": connectedTop,
    "data-buttongroup-full-width": fullWidth,
    "data-buttongroup-no-wrap": noWrap
  }, contents);
}

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/Actions/Actions.js
var ACTION_SPACING = 8;
function Actions({
  actions = [],
  groups = [],
  onActionRollup
}) {
  const i18n = useI18n();
  const actionsLayoutRef = (0, import_react92.useRef)(null);
  const menuGroupWidthRef = (0, import_react92.useRef)(0);
  const availableWidthRef = (0, import_react92.useRef)(0);
  const actionsAndGroupsLengthRef = (0, import_react92.useRef)(0);
  const timesMeasured = (0, import_react92.useRef)(0);
  const actionWidthsRef = (0, import_react92.useRef)([]);
  const rollupActiveRef = (0, import_react92.useRef)(null);
  const [activeMenuGroup, setActiveMenuGroup] = (0, import_react92.useState)(void 0);
  const [measuredActions, setMeasuredActions] = (0, import_react92.useState)({
    showable: [],
    rolledUp: []
  });
  const defaultRollupGroup = {
    title: i18n.translate("Polaris.ActionMenu.Actions.moreActions"),
    actions: []
  };
  const lastMenuGroup = [...groups].pop();
  const lastMenuGroupWidth = [...actionWidthsRef.current].pop() || 0;
  const handleActionsOffsetWidth = (0, import_react92.useCallback)((width2) => {
    actionWidthsRef.current = [...actionWidthsRef.current, width2];
  }, []);
  const handleMenuGroupToggle = (0, import_react92.useCallback)((group) => setActiveMenuGroup(activeMenuGroup ? void 0 : group), [activeMenuGroup]);
  const handleMenuGroupClose = (0, import_react92.useCallback)(() => setActiveMenuGroup(void 0), []);
  const updateActions = (0, import_react92.useCallback)(() => {
    let actionsAndGroups = [...actions, ...groups];
    if (groups.length > 0) {
      actionsAndGroups = [...actionsAndGroups].slice(0, actionsAndGroups.length - 1);
    }
    setMeasuredActions((currentMeasuredActions) => {
      const showable = actionsAndGroups.slice(0, currentMeasuredActions.showable.length);
      const rolledUp = actionsAndGroups.slice(currentMeasuredActions.showable.length, actionsAndGroups.length);
      return {
        showable,
        rolledUp
      };
    });
  }, [actions, groups]);
  const measureActions = (0, import_react92.useCallback)(() => {
    if (actionWidthsRef.current.length === 0 || availableWidthRef.current === 0) {
      return;
    }
    const actionsAndGroups = [...actions, ...groups];
    if (actionsAndGroups.length === 1) {
      setMeasuredActions({
        showable: actionsAndGroups,
        rolledUp: []
      });
      return;
    }
    let currentAvailableWidth = availableWidthRef.current;
    let newShowableActions = [];
    let newRolledUpActions = [];
    actionsAndGroups.forEach((action, index) => {
      const canFitAction = actionWidthsRef.current[index] + menuGroupWidthRef.current + ACTION_SPACING + lastMenuGroupWidth <= currentAvailableWidth;
      if (canFitAction) {
        currentAvailableWidth -= actionWidthsRef.current[index] + ACTION_SPACING * 2;
        newShowableActions = [...newShowableActions, action];
      } else {
        currentAvailableWidth = 0;
        if (action === lastMenuGroup)
          return;
        newRolledUpActions = [...newRolledUpActions, action];
      }
    });
    if (onActionRollup) {
      const isRollupActive = newShowableActions.length < actionsAndGroups.length - 1;
      if (rollupActiveRef.current !== isRollupActive) {
        onActionRollup(isRollupActive);
        rollupActiveRef.current = isRollupActive;
      }
    }
    setMeasuredActions({
      showable: newShowableActions,
      rolledUp: newRolledUpActions
    });
    timesMeasured.current += 1;
    actionsAndGroupsLengthRef.current = actionsAndGroups.length;
  }, [actions, groups, lastMenuGroup, lastMenuGroupWidth, onActionRollup]);
  const handleResize = (0, import_react92.useMemo)(() => debounce(() => {
    if (!actionsLayoutRef.current)
      return;
    availableWidthRef.current = actionsLayoutRef.current.offsetWidth;
    timesMeasured.current = 0;
    measureActions();
  }, 50, {
    leading: false,
    trailing: true
  }), [measureActions]);
  useEventListener("resize", handleResize);
  useIsomorphicLayoutEffect(() => {
    if (!actionsLayoutRef.current)
      return;
    availableWidthRef.current = actionsLayoutRef.current.offsetWidth;
    if (
      // Allow measuring twice
      // This accounts for the initial paint and re-flow
      timesMeasured.current >= 2 && [...actions, ...groups].length === actionsAndGroupsLengthRef.current
    ) {
      updateActions();
      return;
    }
    measureActions();
  }, [actions, groups, measureActions, updateActions]);
  const actionsMarkup = actions.map((action) => {
    if (measuredActions.showable.length > 0 || measuredActions.rolledUp.includes(action))
      return null;
    const {
      content,
      onAction,
      ...rest
    } = action;
    return /* @__PURE__ */ import_react92.default.createElement(SecondaryAction, Object.assign({
      key: content,
      onClick: onAction
    }, rest, {
      getOffsetWidth: handleActionsOffsetWidth
    }), content);
  });
  const rollUppableActionsMarkup = measuredActions.showable.length > 0 ? measuredActions.showable.map((action) => action.content && /* @__PURE__ */ import_react92.default.createElement(SecondaryAction, Object.assign({
    key: action.content
  }, action, {
    getOffsetWidth: handleActionsOffsetWidth
  }), action.content)) : null;
  const filteredGroups = [...groups, defaultRollupGroup].filter((group) => {
    return groups.length === 0 ? group : group === lastMenuGroup || !measuredActions.rolledUp.some((rolledUpGroup) => isMenuGroup(rolledUpGroup) && rolledUpGroup.title === group.title);
  });
  const groupsMarkup = filteredGroups.map((group) => {
    const {
      title,
      actions: groupActions,
      ...rest
    } = group;
    const isDefaultGroup = group === defaultRollupGroup;
    const isLastMenuGroup = group === lastMenuGroup;
    const [finalRolledUpActions, finalRolledUpSectionGroups] = measuredActions.rolledUp.reduce(([actions2, sections], action) => {
      if (isMenuGroup(action)) {
        sections.push({
          title: action.title,
          items: action.actions.map((sectionAction) => ({
            ...sectionAction,
            disabled: action.disabled || sectionAction.disabled
          }))
        });
      } else {
        actions2.push(action);
      }
      return [actions2, sections];
    }, [[], []]);
    if (!isDefaultGroup && !isLastMenuGroup) {
      return /* @__PURE__ */ import_react92.default.createElement(MenuGroup, Object.assign({
        key: title,
        title,
        active: title === activeMenuGroup,
        actions: groupActions
      }, rest, {
        onOpen: handleMenuGroupToggle,
        onClose: handleMenuGroupClose,
        getOffsetWidth: handleActionsOffsetWidth
      }));
    } else if (!isDefaultGroup && isLastMenuGroup) {
      return /* @__PURE__ */ import_react92.default.createElement(MenuGroup, Object.assign({
        key: title,
        title,
        active: title === activeMenuGroup,
        actions: [...finalRolledUpActions, ...groupActions],
        sections: finalRolledUpSectionGroups
      }, rest, {
        onOpen: handleMenuGroupToggle,
        onClose: handleMenuGroupClose,
        getOffsetWidth: handleActionsOffsetWidth
      }));
    } else if (isDefaultGroup && groups.length === 0 && finalRolledUpActions.length) {
      return /* @__PURE__ */ import_react92.default.createElement(MenuGroup, Object.assign({
        key: title,
        title,
        active: title === activeMenuGroup,
        actions: finalRolledUpActions,
        sections: finalRolledUpSectionGroups
      }, rest, {
        onOpen: handleMenuGroupToggle,
        onClose: handleMenuGroupClose,
        getOffsetWidth: handleActionsOffsetWidth
      }));
    }
  });
  const groupedActionsMarkup = /* @__PURE__ */ import_react92.default.createElement(ButtonGroup, {
    gap: "tight"
  }, rollUppableActionsMarkup, actionsMarkup, groupsMarkup);
  return /* @__PURE__ */ import_react92.default.createElement("div", {
    className: styles24.ActionsLayout,
    ref: actionsLayoutRef
  }, groupedActionsMarkup);
}
function isMenuGroup(actionOrMenuGroup) {
  return "title" in actionOrMenuGroup;
}

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/ActionMenu.js
function ActionMenu({
  actions = [],
  groups = [],
  rollup,
  rollupActionsLabel,
  onActionRollup
}) {
  if (actions.length === 0 && groups.length === 0) {
    return null;
  }
  const actionMenuClassNames = classNames(styles21.ActionMenu, rollup && styles21.rollup);
  const rollupSections = groups.map((group) => convertGroupToSection(group));
  return /* @__PURE__ */ import_react93.default.createElement("div", {
    className: actionMenuClassNames
  }, rollup ? /* @__PURE__ */ import_react93.default.createElement(RollupActions, {
    accessibilityLabel: rollupActionsLabel,
    items: actions,
    sections: rollupSections
  }) : /* @__PURE__ */ import_react93.default.createElement(Actions, {
    actions,
    groups,
    onActionRollup
  }));
}
function hasGroupsWithActions(groups = []) {
  return groups.length === 0 ? false : groups.some((group) => group.actions.length > 0);
}
function convertGroupToSection({
  title,
  actions,
  disabled
}) {
  return {
    title,
    items: actions.map((action) => ({
      ...action,
      disabled: disabled || action.disabled
    }))
  };
}

// node_modules/@shopify/polaris/build/esm/components/Banner/Banner.js
var import_react96 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/banner-context.js
var import_react94 = __toESM(require_react());
var BannerContext = /* @__PURE__ */ (0, import_react94.createContext)(false);

// node_modules/@shopify/polaris/build/esm/components/Banner/Banner.scss.js
var styles28 = {
  "Banner": "Polaris-Banner",
  "keyFocused": "Polaris-Banner--keyFocused",
  "withinContentContainer": "Polaris-Banner--withinContentContainer",
  "withinPage": "Polaris-Banner--withinPage",
  "DismissIcon": "Polaris-Banner__DismissIcon",
  "text-success-on-bg-fill": "Polaris-Banner--textSuccessOnBgFill",
  "text-success": "Polaris-Banner__text--success",
  "text-warning-on-bg-fill": "Polaris-Banner--textWarningOnBgFill",
  "text-warning": "Polaris-Banner__text--warning",
  "text-critical-on-bg-fill": "Polaris-Banner--textCriticalOnBgFill",
  "text-critical": "Polaris-Banner__text--critical",
  "text-info-on-bg-fill": "Polaris-Banner--textInfoOnBgFill",
  "text-info": "Polaris-Banner__text--info",
  "icon-secondary": "Polaris-Banner__icon--secondary"
};

// node_modules/@shopify/polaris/build/esm/components/Banner/utilities.js
var import_react95 = __toESM(require_react());
var bannerAttributes = {
  success: {
    withinPage: {
      background: "bg-fill-success",
      text: "text-success-on-bg-fill",
      icon: "text-success-on-bg-fill"
    },
    withinContentContainer: {
      background: "bg-surface-success",
      text: "text-success",
      icon: "text-success"
    },
    icon: SvgTickMinor
  },
  warning: {
    withinPage: {
      background: "bg-fill-warning",
      text: "text-warning-on-bg-fill",
      icon: "text-warning-on-bg-fill"
    },
    withinContentContainer: {
      background: "bg-surface-warning",
      text: "text-warning",
      icon: "text-warning"
    },
    icon: SvgRiskMinor
  },
  critical: {
    withinPage: {
      background: "bg-fill-critical",
      text: "text-critical-on-bg-fill",
      icon: "text-critical-on-bg-fill"
    },
    withinContentContainer: {
      background: "bg-surface-critical",
      text: "text-critical",
      icon: "text-critical"
    },
    icon: SvgDiamondAlertMinor
  },
  info: {
    withinPage: {
      background: "bg-fill-info",
      text: "text-info-on-bg-fill",
      icon: "text-info-on-bg-fill"
    },
    withinContentContainer: {
      background: "bg-surface-info",
      text: "text-info",
      icon: "text-info"
    },
    icon: SvgInfoMinor
  }
};
function useBannerFocus(bannerRef) {
  const wrapperRef = (0, import_react95.useRef)(null);
  const [shouldShowFocus, setShouldShowFocus] = (0, import_react95.useState)(false);
  (0, import_react95.useImperativeHandle)(bannerRef, () => ({
    focus: () => {
      wrapperRef.current?.focus();
      setShouldShowFocus(true);
    }
  }), []);
  const handleKeyUp = (event) => {
    if (event.target === wrapperRef.current) {
      setShouldShowFocus(true);
    }
  };
  const handleBlur = () => setShouldShowFocus(false);
  const handleMouseUp = (event) => {
    event.currentTarget.blur();
    setShouldShowFocus(false);
  };
  return {
    wrapperRef,
    handleKeyUp,
    handleBlur,
    handleMouseUp,
    shouldShowFocus
  };
}

// node_modules/@shopify/polaris/build/esm/components/Banner/Banner.js
var Banner = /* @__PURE__ */ (0, import_react96.forwardRef)(function Banner2(props, bannerRef) {
  const {
    tone,
    stopAnnouncements
  } = props;
  const withinContentContainer = (0, import_react96.useContext)(WithinContentContext);
  const {
    wrapperRef,
    handleKeyUp,
    handleBlur,
    handleMouseUp,
    shouldShowFocus
  } = useBannerFocus(bannerRef);
  const className = classNames(styles28.Banner, shouldShowFocus && styles28.keyFocused, withinContentContainer ? styles28.withinContentContainer : styles28.withinPage);
  return /* @__PURE__ */ import_react96.default.createElement(BannerContext.Provider, {
    value: true
  }, /* @__PURE__ */ import_react96.default.createElement("div", {
    className,
    tabIndex: 0,
    ref: wrapperRef,
    role: tone === "warning" || tone === "critical" ? "alert" : "status",
    "aria-live": stopAnnouncements ? "off" : "polite",
    onMouseUp: handleMouseUp,
    onKeyUp: handleKeyUp,
    onBlur: handleBlur
  }, /* @__PURE__ */ import_react96.default.createElement(BannerLayout, props)));
});
function BannerLayout({
  tone = "info",
  icon,
  hideIcon,
  onDismiss,
  action,
  secondaryAction,
  title,
  children
}) {
  const i18n = useI18n();
  const withinContentContainer = (0, import_react96.useContext)(WithinContentContext);
  const isInlineIconBanner = !title && !withinContentContainer;
  const bannerTone = Object.keys(bannerAttributes).includes(tone) ? tone : "info";
  const bannerColors = bannerAttributes[bannerTone][withinContentContainer ? "withinContentContainer" : "withinPage"];
  const sharedBannerProps = {
    backgroundColor: bannerColors.background,
    textColor: bannerColors.text,
    bannerTitle: title ? /* @__PURE__ */ import_react96.default.createElement(Text, {
      as: "h2",
      variant: "headingSm",
      breakWord: true
    }, title) : null,
    bannerIcon: hideIcon ? null : /* @__PURE__ */ import_react96.default.createElement("span", {
      className: styles28[bannerColors.icon]
    }, /* @__PURE__ */ import_react96.default.createElement(Icon, {
      source: icon ?? bannerAttributes[bannerTone].icon
    })),
    actionButtons: action || secondaryAction ? /* @__PURE__ */ import_react96.default.createElement(ButtonGroup, null, action && /* @__PURE__ */ import_react96.default.createElement(Button, Object.assign({
      onClick: action.onAction
    }, action), action.content), secondaryAction && /* @__PURE__ */ import_react96.default.createElement(Button, Object.assign({
      onClick: secondaryAction.onAction
    }, secondaryAction), secondaryAction.content)) : null,
    dismissButton: onDismiss ? /* @__PURE__ */ import_react96.default.createElement(Button, {
      variant: "tertiary",
      icon: /* @__PURE__ */ import_react96.default.createElement("span", {
        className: styles28[isInlineIconBanner ? "icon-secondary" : bannerColors.icon]
      }, /* @__PURE__ */ import_react96.default.createElement(Icon, {
        source: SvgCancelMinor
      })),
      onClick: onDismiss,
      accessibilityLabel: i18n.translate("Polaris.Banner.dismissButton")
    }) : null
  };
  if (withinContentContainer) {
    return /* @__PURE__ */ import_react96.default.createElement(WithinContentContainerBanner, sharedBannerProps, children);
  }
  if (isInlineIconBanner) {
    return /* @__PURE__ */ import_react96.default.createElement(InlineIconBanner, sharedBannerProps, children);
  }
  return /* @__PURE__ */ import_react96.default.createElement(DefaultBanner, sharedBannerProps, children);
}
function DefaultBanner({
  backgroundColor,
  textColor,
  bannerTitle,
  bannerIcon,
  actionButtons,
  dismissButton,
  children
}) {
  const {
    smUp
  } = useBreakpoints();
  const hasContent = children || actionButtons;
  return /* @__PURE__ */ import_react96.default.createElement(Box, {
    width: "100%"
  }, /* @__PURE__ */ import_react96.default.createElement(BlockStack, {
    align: "space-between"
  }, /* @__PURE__ */ import_react96.default.createElement(Box, {
    background: backgroundColor,
    color: textColor,
    borderStartStartRadius: smUp ? "300" : void 0,
    borderStartEndRadius: smUp ? "300" : void 0,
    borderEndStartRadius: !hasContent && smUp ? "300" : void 0,
    borderEndEndRadius: !hasContent && smUp ? "300" : void 0,
    padding: "300"
  }, /* @__PURE__ */ import_react96.default.createElement(InlineStack, {
    align: "space-between",
    blockAlign: "center",
    gap: "200",
    wrap: false
  }, /* @__PURE__ */ import_react96.default.createElement(InlineStack, {
    gap: "100",
    wrap: false
  }, bannerIcon, bannerTitle), dismissButton)), hasContent && /* @__PURE__ */ import_react96.default.createElement(Box, {
    padding: {
      xs: "300",
      md: "400"
    },
    paddingBlockStart: "300"
  }, /* @__PURE__ */ import_react96.default.createElement(BlockStack, {
    gap: "200"
  }, /* @__PURE__ */ import_react96.default.createElement("div", null, children), actionButtons))));
}
function InlineIconBanner({
  backgroundColor,
  bannerIcon,
  actionButtons,
  dismissButton,
  children
}) {
  const [blockAlign, setBlockAlign] = (0, import_react96.useState)("center");
  const contentNode = (0, import_react96.useRef)(null);
  const iconNode = (0, import_react96.useRef)(null);
  const dismissIconNode = (0, import_react96.useRef)(null);
  const handleResize = (0, import_react96.useCallback)(() => {
    const contentHeight = contentNode.current?.offsetHeight;
    const iconBoxHeight = iconNode.current?.offsetHeight || dismissIconNode.current?.offsetHeight;
    if (!contentHeight || !iconBoxHeight)
      return;
    contentHeight > iconBoxHeight ? setBlockAlign("start") : setBlockAlign("center");
  }, []);
  (0, import_react96.useEffect)(() => handleResize(), [handleResize]);
  useEventListener("resize", handleResize);
  return /* @__PURE__ */ import_react96.default.createElement(Box, {
    width: "100%",
    padding: "300",
    borderRadius: "300"
  }, /* @__PURE__ */ import_react96.default.createElement(InlineStack, {
    align: "space-between",
    blockAlign,
    wrap: false
  }, /* @__PURE__ */ import_react96.default.createElement(Box, {
    width: "100%"
  }, /* @__PURE__ */ import_react96.default.createElement(InlineStack, {
    gap: "200",
    wrap: false,
    blockAlign
  }, bannerIcon ? /* @__PURE__ */ import_react96.default.createElement("div", {
    ref: iconNode
  }, /* @__PURE__ */ import_react96.default.createElement(Box, {
    background: backgroundColor,
    borderRadius: "200",
    padding: "100"
  }, bannerIcon)) : null, /* @__PURE__ */ import_react96.default.createElement(Box, {
    ref: contentNode,
    width: "100%"
  }, /* @__PURE__ */ import_react96.default.createElement(BlockStack, {
    gap: "200"
  }, /* @__PURE__ */ import_react96.default.createElement("div", null, children), actionButtons)))), /* @__PURE__ */ import_react96.default.createElement("div", {
    ref: dismissIconNode,
    className: styles28.DismissIcon
  }, dismissButton)));
}
function WithinContentContainerBanner({
  backgroundColor,
  textColor,
  bannerTitle,
  bannerIcon,
  actionButtons,
  dismissButton,
  children
}) {
  return /* @__PURE__ */ import_react96.default.createElement(Box, {
    width: "100%",
    background: backgroundColor,
    padding: "200",
    borderRadius: "200",
    color: textColor
  }, /* @__PURE__ */ import_react96.default.createElement(InlineStack, {
    align: "space-between",
    blockAlign: "start",
    wrap: false,
    gap: "200"
  }, /* @__PURE__ */ import_react96.default.createElement(InlineStack, {
    gap: "150",
    wrap: false
  }, bannerIcon, /* @__PURE__ */ import_react96.default.createElement(Box, {
    width: "100%"
  }, /* @__PURE__ */ import_react96.default.createElement(BlockStack, {
    gap: "200"
  }, /* @__PURE__ */ import_react96.default.createElement(BlockStack, {
    gap: "050"
  }, bannerTitle, /* @__PURE__ */ import_react96.default.createElement("div", null, children)), actionButtons))), dismissButton));
}

// node_modules/@shopify/polaris/build/esm/components/Breadcrumbs/Breadcrumbs.js
var import_react97 = __toESM(require_react());
function Breadcrumbs({
  backAction
}) {
  const {
    content
  } = backAction;
  const breadcrumbMarkup = /* @__PURE__ */ import_react97.default.createElement(Button, {
    key: content,
    url: "url" in backAction ? backAction.url : void 0,
    onClick: "onAction" in backAction ? backAction.onAction : void 0,
    onPointerDown: handleMouseUpByBlurring,
    icon: SvgArrowLeftMinor,
    accessibilityLabel: backAction.accessibilityLabel ?? content
  });
  return /* @__PURE__ */ import_react97.default.createElement("nav", {
    role: "navigation"
  }, breadcrumbMarkup);
}

// node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
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

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}

// node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

// node_modules/react-transition-group/esm/CSSTransition.js
var import_prop_types3 = __toESM(require_prop_types());

// node_modules/dom-helpers/esm/hasClass.js
function hasClass(element, className) {
  if (element.classList)
    return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

// node_modules/dom-helpers/esm/addClass.js
function addClass(element, className) {
  if (element.classList)
    element.classList.add(className);
  else if (!hasClass(element, className))
    if (typeof element.className === "string")
      element.className = element.className + " " + className;
    else
      element.setAttribute("class", (element.className && element.className.baseVal || "") + " " + className);
}

// node_modules/dom-helpers/esm/removeClass.js
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === "string") {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute("class", replaceClassName(element.className && element.className.baseVal || "", className));
  }
}

// node_modules/react-transition-group/esm/CSSTransition.js
var import_react100 = __toESM(require_react());

// node_modules/react-transition-group/esm/Transition.js
var import_prop_types2 = __toESM(require_prop_types());
var import_react99 = __toESM(require_react());
var import_react_dom2 = __toESM(require_react_dom());

// node_modules/react-transition-group/esm/config.js
var config_default = {
  disabled: false
};

// node_modules/react-transition-group/esm/utils/PropTypes.js
var import_prop_types = __toESM(require_prop_types());
var timeoutsShape = true ? import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.shape({
  enter: import_prop_types.default.number,
  exit: import_prop_types.default.number,
  appear: import_prop_types.default.number
}).isRequired]) : null;
var classNamesShape = true ? import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.shape({
  enter: import_prop_types.default.string,
  exit: import_prop_types.default.string,
  active: import_prop_types.default.string
}), import_prop_types.default.shape({
  enter: import_prop_types.default.string,
  enterDone: import_prop_types.default.string,
  enterActive: import_prop_types.default.string,
  exit: import_prop_types.default.string,
  exitDone: import_prop_types.default.string,
  exitActive: import_prop_types.default.string
})]) : null;

// node_modules/react-transition-group/esm/TransitionGroupContext.js
var import_react98 = __toESM(require_react());
var TransitionGroupContext_default = import_react98.default.createContext(null);

// node_modules/react-transition-group/esm/utils/reflow.js
var forceReflow = function forceReflow2(node) {
  return node.scrollTop;
};

// node_modules/react-transition-group/esm/Transition.js
var UNMOUNTED = "unmounted";
var EXITED = "exited";
var ENTERING = "entering";
var ENTERED = "entered";
var EXITING = "exiting";
var Transition = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Transition2, _React$Component);
  function Transition2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context;
    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;
    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }
    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }
  Transition2.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;
    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }
    return null;
  };
  var _proto = Transition2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;
    if (prevProps !== this.props) {
      var status = this.state.status;
      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }
    this.updateStatus(false, nextStatus);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };
  _proto.getTimeouts = function getTimeouts() {
    var timeout2 = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout2;
    if (timeout2 != null && typeof timeout2 !== "number") {
      exit = timeout2.exit;
      enter = timeout2.enter;
      appear = timeout2.appear !== void 0 ? timeout2.appear : enter;
    }
    return {
      exit,
      enter,
      appear
    };
  };
  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }
    if (nextStatus !== null) {
      this.cancelNextCallback();
      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : import_react_dom2.default.findDOMNode(this);
          if (node)
            forceReflow(node);
        }
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };
  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;
    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var _ref2 = this.props.nodeRef ? [appearing] : [import_react_dom2.default.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
    if (!mounting && !enter || config_default.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function() {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }
    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function() {
      _this2.props.onEntering(maybeNode, maybeAppearing);
      _this2.onTransitionEnd(enterTimeout, function() {
        _this2.safeSetState({
          status: ENTERED
        }, function() {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };
  _proto.performExit = function performExit() {
    var _this3 = this;
    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? void 0 : import_react_dom2.default.findDOMNode(this);
    if (!exit || config_default.disabled) {
      this.safeSetState({
        status: EXITED
      }, function() {
        _this3.props.onExited(maybeNode);
      });
      return;
    }
    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function() {
      _this3.props.onExiting(maybeNode);
      _this3.onTransitionEnd(timeouts.exit, function() {
        _this3.safeSetState({
          status: EXITED
        }, function() {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };
  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };
  _proto.safeSetState = function safeSetState(nextState, callback) {
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };
  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;
    var active = true;
    this.nextCallback = function(event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };
    this.nextCallback.cancel = function() {
      active = false;
    };
    return this.nextCallback;
  };
  _proto.onTransitionEnd = function onTransitionEnd(timeout2, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : import_react_dom2.default.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout2 == null && !this.props.addEndListener;
    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
      this.props.addEndListener(maybeNode, maybeNextCallback);
    }
    if (timeout2 != null) {
      setTimeout(this.nextCallback, timeout2);
    }
  };
  _proto.render = function render() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }
    var _this$props = this.props, children = _this$props.children, _in = _this$props.in, _mountOnEnter = _this$props.mountOnEnter, _unmountOnExit = _this$props.unmountOnExit, _appear = _this$props.appear, _enter = _this$props.enter, _exit = _this$props.exit, _timeout = _this$props.timeout, _addEndListener = _this$props.addEndListener, _onEnter = _this$props.onEnter, _onEntering = _this$props.onEntering, _onEntered = _this$props.onEntered, _onExit = _this$props.onExit, _onExiting = _this$props.onExiting, _onExited = _this$props.onExited, _nodeRef = _this$props.nodeRef, childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ import_react99.default.createElement(TransitionGroupContext_default.Provider, {
        value: null
      }, typeof children === "function" ? children(status, childProps) : import_react99.default.cloneElement(import_react99.default.Children.only(children), childProps))
    );
  };
  return Transition2;
}(import_react99.default.Component);
Transition.contextType = TransitionGroupContext_default;
Transition.propTypes = true ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: import_prop_types2.default.shape({
    current: typeof Element === "undefined" ? import_prop_types2.default.any : function(propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return import_prop_types2.default.instanceOf(value && "ownerDocument" in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: import_prop_types2.default.oneOfType([import_prop_types2.default.func.isRequired, import_prop_types2.default.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: import_prop_types2.default.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: import_prop_types2.default.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: import_prop_types2.default.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: import_prop_types2.default.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: import_prop_types2.default.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: import_prop_types2.default.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener)
      pt = pt.isRequired;
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return pt.apply(void 0, [props].concat(args));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: import_prop_types2.default.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: import_prop_types2.default.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: import_prop_types2.default.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: import_prop_types2.default.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: import_prop_types2.default.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: import_prop_types2.default.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: import_prop_types2.default.func
} : {};
function noop4() {
}
Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop4,
  onEntering: noop4,
  onEntered: noop4,
  onExit: noop4,
  onExiting: noop4,
  onExited: noop4
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
var Transition_default = Transition;

// node_modules/react-transition-group/esm/CSSTransition.js
var _addClass = function addClass2(node, classes) {
  return node && classes && classes.split(" ").forEach(function(c) {
    return addClass(node, c);
  });
};
var removeClass2 = function removeClass3(node, classes) {
  return node && classes && classes.split(" ").forEach(function(c) {
    return removeClass(node, c);
  });
};
var CSSTransition = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(CSSTransition2, _React$Component);
  function CSSTransition2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };
    _this.onEnter = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument[0], appearing = _this$resolveArgument[1];
      _this.removeClasses(node, "exit");
      _this.addClass(node, appearing ? "appear" : "enter", "base");
      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };
    _this.onEntering = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument2[0], appearing = _this$resolveArgument2[1];
      var type = appearing ? "appear" : "enter";
      _this.addClass(node, type, "active");
      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };
    _this.onEntered = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument3[0], appearing = _this$resolveArgument3[1];
      var type = appearing ? "appear" : "enter";
      _this.removeClasses(node, type);
      _this.addClass(node, type, "done");
      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };
    _this.onExit = function(maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode), node = _this$resolveArgument4[0];
      _this.removeClasses(node, "appear");
      _this.removeClasses(node, "enter");
      _this.addClass(node, "exit", "base");
      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };
    _this.onExiting = function(maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode), node = _this$resolveArgument5[0];
      _this.addClass(node, "exit", "active");
      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };
    _this.onExited = function(maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode), node = _this$resolveArgument6[0];
      _this.removeClasses(node, "exit");
      _this.addClass(node, "exit", "done");
      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };
    _this.resolveArguments = function(maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] : [maybeNode, maybeAppearing];
    };
    _this.getClassNames = function(type) {
      var classNames2 = _this.props.classNames;
      var isStringClassNames = typeof classNames2 === "string";
      var prefix = isStringClassNames && classNames2 ? classNames2 + "-" : "";
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames2[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames2[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames2[type + "Done"];
      return {
        baseClassName,
        activeClassName,
        doneClassName
      };
    };
    return _this;
  }
  var _proto = CSSTransition2.prototype;
  _proto.addClass = function addClass3(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];
    var _this$getClassNames = this.getClassNames("enter"), doneClassName = _this$getClassNames.doneClassName;
    if (type === "appear" && phase === "done" && doneClassName) {
      className += " " + doneClassName;
    }
    if (phase === "active") {
      if (node)
        forceReflow(node);
    }
    if (className) {
      this.appliedClasses[type][phase] = className;
      _addClass(node, className);
    }
  };
  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type], baseClassName = _this$appliedClasses$.base, activeClassName = _this$appliedClasses$.active, doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};
    if (baseClassName) {
      removeClass2(node, baseClassName);
    }
    if (activeClassName) {
      removeClass2(node, activeClassName);
    }
    if (doneClassName) {
      removeClass2(node, doneClassName);
    }
  };
  _proto.render = function render() {
    var _this$props = this.props, _ = _this$props.classNames, props = _objectWithoutPropertiesLoose(_this$props, ["classNames"]);
    return /* @__PURE__ */ import_react100.default.createElement(Transition_default, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };
  return CSSTransition2;
}(import_react100.default.Component);
CSSTransition.defaultProps = {
  classNames: ""
};
CSSTransition.propTypes = true ? _extends({}, Transition_default.propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: classNamesShape,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: import_prop_types3.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: import_prop_types3.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: import_prop_types3.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: import_prop_types3.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: import_prop_types3.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: import_prop_types3.default.func
}) : {};
var CSSTransition_default = CSSTransition;

// node_modules/@shopify/polaris/build/esm/components/LegacyStack/LegacyStack.js
var import_react102 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/LegacyStack/LegacyStack.scss.js
var styles29 = {
  "LegacyStack": "Polaris-LegacyStack",
  "Item": "Polaris-LegacyStack__Item",
  "noWrap": "Polaris-LegacyStack--noWrap",
  "spacingNone": "Polaris-LegacyStack--spacingNone",
  "spacingExtraTight": "Polaris-LegacyStack--spacingExtraTight",
  "spacingTight": "Polaris-LegacyStack--spacingTight",
  "spacingBaseTight": "Polaris-LegacyStack--spacingBaseTight",
  "spacingLoose": "Polaris-LegacyStack--spacingLoose",
  "spacingExtraLoose": "Polaris-LegacyStack--spacingExtraLoose",
  "distributionLeading": "Polaris-LegacyStack--distributionLeading",
  "distributionTrailing": "Polaris-LegacyStack--distributionTrailing",
  "distributionCenter": "Polaris-LegacyStack--distributionCenter",
  "distributionEqualSpacing": "Polaris-LegacyStack--distributionEqualSpacing",
  "distributionFill": "Polaris-LegacyStack--distributionFill",
  "distributionFillEvenly": "Polaris-LegacyStack--distributionFillEvenly",
  "alignmentLeading": "Polaris-LegacyStack--alignmentLeading",
  "alignmentTrailing": "Polaris-LegacyStack--alignmentTrailing",
  "alignmentCenter": "Polaris-LegacyStack--alignmentCenter",
  "alignmentFill": "Polaris-LegacyStack--alignmentFill",
  "alignmentBaseline": "Polaris-LegacyStack--alignmentBaseline",
  "vertical": "Polaris-LegacyStack--vertical",
  "Item-fill": "Polaris-LegacyStack__Item--fill"
};

// node_modules/@shopify/polaris/build/esm/components/LegacyStack/components/Item/Item.js
var import_react101 = __toESM(require_react());
function Item4({
  children,
  fill
}) {
  const className = classNames(styles29.Item, fill && styles29["Item-fill"]);
  return /* @__PURE__ */ import_react101.default.createElement("div", {
    className
  }, children);
}

// node_modules/@shopify/polaris/build/esm/components/LegacyStack/LegacyStack.js
var LegacyStack = /* @__PURE__ */ (0, import_react102.memo)(function Stack({
  children,
  vertical,
  spacing,
  distribution,
  alignment,
  wrap
}) {
  const className = classNames(styles29.LegacyStack, vertical && styles29.vertical, spacing && styles29[variationName("spacing", spacing)], distribution && styles29[variationName("distribution", distribution)], alignment && styles29[variationName("alignment", alignment)], wrap === false && styles29.noWrap);
  const itemMarkup = elementChildren(children).map((child, index) => {
    const props = {
      key: index
    };
    return wrapWithComponent(child, Item4, props);
  });
  return /* @__PURE__ */ import_react102.default.createElement("div", {
    className
  }, itemMarkup);
});
LegacyStack.Item = Item4;

// node_modules/@shopify/polaris/build/esm/components/FooterHelp/FooterHelp.js
var import_react103 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/FooterHelp/FooterHelp.scss.js
var styles30 = {
  "FooterHelp": "Polaris-FooterHelp",
  "Text": "Polaris-FooterHelp__Text"
};

// node_modules/@shopify/polaris/build/esm/components/FooterHelp/FooterHelp.js
function FooterHelp({
  children
}) {
  return /* @__PURE__ */ import_react103.default.createElement("div", {
    className: styles30.FooterHelp
  }, /* @__PURE__ */ import_react103.default.createElement("div", {
    className: styles30.Text
  }, children));
}

// node_modules/@shopify/polaris/build/esm/utilities/media-query/hooks.js
var import_react104 = __toESM(require_react());
function useMediaQuery() {
  const mediaQuery = (0, import_react104.useContext)(MediaQueryContext);
  if (!mediaQuery) {
    throw new Error("No mediaQuery was provided. Your application must be wrapped in an <AppProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions.");
  }
  return mediaQuery;
}

// node_modules/@shopify/polaris/build/esm/components/Grid/Grid.js
var import_react106 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Grid/Grid.scss.js
var styles31 = {
  "Grid": "Polaris-Grid"
};

// node_modules/@shopify/polaris/build/esm/components/Grid/components/Cell/Cell.js
var import_react105 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Grid/components/Cell/Cell.scss.js
var styles32 = {
  "Cell": "Polaris-Grid-Cell",
  "Cell-1-column-xs": "Polaris-Grid-Cell--cell_1ColumnXs",
  "Cell-2-column-xs": "Polaris-Grid-Cell--cell_2ColumnXs",
  "Cell-3-column-xs": "Polaris-Grid-Cell--cell_3ColumnXs",
  "Cell-4-column-xs": "Polaris-Grid-Cell--cell_4ColumnXs",
  "Cell-5-column-xs": "Polaris-Grid-Cell--cell_5ColumnXs",
  "Cell-6-column-xs": "Polaris-Grid-Cell--cell_6ColumnXs",
  "Cell-1-column-sm": "Polaris-Grid-Cell--cell_1ColumnSm",
  "Cell-2-column-sm": "Polaris-Grid-Cell--cell_2ColumnSm",
  "Cell-3-column-sm": "Polaris-Grid-Cell--cell_3ColumnSm",
  "Cell-4-column-sm": "Polaris-Grid-Cell--cell_4ColumnSm",
  "Cell-5-column-sm": "Polaris-Grid-Cell--cell_5ColumnSm",
  "Cell-6-column-sm": "Polaris-Grid-Cell--cell_6ColumnSm",
  "Cell-1-column-md": "Polaris-Grid-Cell--cell_1ColumnMd",
  "Cell-2-column-md": "Polaris-Grid-Cell--cell_2ColumnMd",
  "Cell-3-column-md": "Polaris-Grid-Cell--cell_3ColumnMd",
  "Cell-4-column-md": "Polaris-Grid-Cell--cell_4ColumnMd",
  "Cell-5-column-md": "Polaris-Grid-Cell--cell_5ColumnMd",
  "Cell-6-column-md": "Polaris-Grid-Cell--cell_6ColumnMd",
  "Cell-1-column-lg": "Polaris-Grid-Cell--cell_1ColumnLg",
  "Cell-2-column-lg": "Polaris-Grid-Cell--cell_2ColumnLg",
  "Cell-3-column-lg": "Polaris-Grid-Cell--cell_3ColumnLg",
  "Cell-4-column-lg": "Polaris-Grid-Cell--cell_4ColumnLg",
  "Cell-5-column-lg": "Polaris-Grid-Cell--cell_5ColumnLg",
  "Cell-6-column-lg": "Polaris-Grid-Cell--cell_6ColumnLg",
  "Cell-7-column-lg": "Polaris-Grid-Cell--cell_7ColumnLg",
  "Cell-8-column-lg": "Polaris-Grid-Cell--cell_8ColumnLg",
  "Cell-9-column-lg": "Polaris-Grid-Cell--cell_9ColumnLg",
  "Cell-10-column-lg": "Polaris-Grid-Cell--cell_10ColumnLg",
  "Cell-11-column-lg": "Polaris-Grid-Cell--cell_11ColumnLg",
  "Cell-12-column-lg": "Polaris-Grid-Cell--cell_12ColumnLg",
  "Cell-1-column-xl": "Polaris-Grid-Cell--cell_1ColumnXl",
  "Cell-2-column-xl": "Polaris-Grid-Cell--cell_2ColumnXl",
  "Cell-3-column-xl": "Polaris-Grid-Cell--cell_3ColumnXl",
  "Cell-4-column-xl": "Polaris-Grid-Cell--cell_4ColumnXl",
  "Cell-5-column-xl": "Polaris-Grid-Cell--cell_5ColumnXl",
  "Cell-6-column-xl": "Polaris-Grid-Cell--cell_6ColumnXl",
  "Cell-7-column-xl": "Polaris-Grid-Cell--cell_7ColumnXl",
  "Cell-8-column-xl": "Polaris-Grid-Cell--cell_8ColumnXl",
  "Cell-9-column-xl": "Polaris-Grid-Cell--cell_9ColumnXl",
  "Cell-10-column-xl": "Polaris-Grid-Cell--cell_10ColumnXl",
  "Cell-11-column-xl": "Polaris-Grid-Cell--cell_11ColumnXl",
  "Cell-12-column-xl": "Polaris-Grid-Cell--cell_12ColumnXl"
};

// node_modules/@shopify/polaris/build/esm/components/Grid/components/Cell/Cell.js
function Cell({
  area: gridArea,
  column,
  columnSpan,
  row,
  children
}) {
  const className = classNames(styles32.Cell, columnSpan?.xs && styles32[`Cell-${columnSpan.xs}-column-xs`], columnSpan?.sm && styles32[`Cell-${columnSpan.sm}-column-sm`], columnSpan?.md && styles32[`Cell-${columnSpan.md}-column-md`], columnSpan?.lg && styles32[`Cell-${columnSpan.lg}-column-lg`], columnSpan?.xl && styles32[`Cell-${columnSpan.xl}-column-xl`]);
  const style = {
    gridArea,
    "--pc-column-xs": column?.xs,
    "--pc-column-sm": column?.sm,
    "--pc-column-md": column?.md,
    "--pc-column-lg": column?.lg,
    "--pc-column-xl": column?.xl,
    "--pc-row-xs": row?.xs,
    "--pc-row-sm": row?.sm,
    "--pc-row-md": row?.md,
    "--pc-row-lg": row?.lg,
    "--pc-row-xl": row?.xl
  };
  return /* @__PURE__ */ import_react105.default.createElement("div", {
    className,
    style
  }, children);
}

// node_modules/@shopify/polaris/build/esm/components/Grid/Grid.js
var Grid = function Grid2({
  gap,
  areas,
  children,
  columns
}) {
  const style = {
    "--pc-grid-gap-xs": gap?.xs,
    "--pc-grid-gap-sm": gap?.sm,
    "--pc-grid-gap-md": gap?.md,
    "--pc-grid-gap-lg": gap?.lg,
    "--pc-grid-gap-xl": gap?.xl,
    "--pc-grid-columns-xs": columns?.xs,
    "--pc-grid-columns-sm": columns?.sm,
    "--pc-grid-columns-md": columns?.md,
    "--pc-grid-columns-lg": columns?.lg,
    "--pc-grid-columns-xl": columns?.xl,
    "--pc-grid-areas-xs": formatAreas(areas?.xs),
    "--pc-grid-areas-sm": formatAreas(areas?.sm),
    "--pc-grid-areas-md": formatAreas(areas?.md),
    "--pc-grid-areas-lg": formatAreas(areas?.lg),
    "--pc-grid-areas-xl": formatAreas(areas?.xl)
  };
  return /* @__PURE__ */ import_react106.default.createElement("div", {
    className: styles31.Grid,
    style
  }, children);
};
function formatAreas(areas) {
  if (!areas)
    return;
  return `'${areas?.join(`' '`)}'`;
}
Grid.Cell = Cell;

// node_modules/@shopify/polaris/build/esm/components/Link/Link.js
var import_react107 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Link/Link.scss.js
var styles33 = {
  "Link": "Polaris-Link",
  "monochrome": "Polaris-Link--monochrome",
  "removeUnderline": "Polaris-Link--removeUnderline"
};

// node_modules/@shopify/polaris/build/esm/components/Link/Link.js
function Link({
  url,
  children,
  onClick,
  external,
  target,
  id,
  monochrome,
  removeUnderline,
  accessibilityLabel,
  dataPrimaryLink
}) {
  return /* @__PURE__ */ import_react107.default.createElement(BannerContext.Consumer, null, (BannerContext2) => {
    const shouldBeMonochrome = monochrome || BannerContext2;
    const className = classNames(styles33.Link, shouldBeMonochrome && styles33.monochrome, removeUnderline && styles33.removeUnderline);
    return url ? /* @__PURE__ */ import_react107.default.createElement(UnstyledLink, {
      onClick,
      className,
      url,
      external,
      target,
      id,
      "aria-label": accessibilityLabel,
      "data-primary-link": dataPrimaryLink
    }, children) : /* @__PURE__ */ import_react107.default.createElement("button", {
      type: "button",
      onClick,
      className,
      id,
      "aria-label": accessibilityLabel,
      "data-primary-link": dataPrimaryLink
    }, children);
  });
}

// node_modules/@shopify/polaris/build/esm/components/Page/Page.js
var import_react113 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/is-interface.js
var import_react108 = __toESM(require_react());
function isInterface(x) {
  return !/* @__PURE__ */ (0, import_react108.isValidElement)(x) && x !== void 0;
}

// node_modules/@shopify/polaris/build/esm/utilities/is-react-element.js
var import_react109 = __toESM(require_react());
function isReactElement(x) {
  return /* @__PURE__ */ (0, import_react109.isValidElement)(x) && x !== void 0;
}

// node_modules/@shopify/polaris/build/esm/components/Page/Page.scss.js
var styles34 = {
  "Page": "Polaris-Page",
  "fullWidth": "Polaris-Page--fullWidth",
  "narrowWidth": "Polaris-Page--narrowWidth",
  "Content": "Polaris-Page__Content"
};

// node_modules/@shopify/polaris/build/esm/components/Page/components/Header/Header.js
var import_react112 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Page/components/Header/Header.scss.js
var styles35 = {
  "TitleWrapper": "Polaris-Page-Header__TitleWrapper",
  "BreadcrumbWrapper": "Polaris-Page-Header__BreadcrumbWrapper",
  "PaginationWrapper": "Polaris-Page-Header__PaginationWrapper",
  "PrimaryActionWrapper": "Polaris-Page-Header__PrimaryActionWrapper",
  "Row": "Polaris-Page-Header__Row",
  "mobileView": "Polaris-Page-Header--mobileView",
  "RightAlign": "Polaris-Page-Header__RightAlign",
  "noBreadcrumbs": "Polaris-Page-Header--noBreadcrumbs",
  "AdditionalMetaData": "Polaris-Page-Header__AdditionalMetaData",
  "Actions": "Polaris-Page-Header__Actions",
  "longTitle": "Polaris-Page-Header--longTitle",
  "mediumTitle": "Polaris-Page-Header--mediumTitle",
  "isSingleRow": "Polaris-Page-Header--isSingleRow"
};

// node_modules/@shopify/polaris/build/esm/components/Pagination/Pagination.js
var import_react110 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/is-input-focused.js
var EditableTarget;
(function(EditableTarget2) {
  EditableTarget2["Input"] = "INPUT";
  EditableTarget2["Textarea"] = "TEXTAREA";
  EditableTarget2["Select"] = "SELECT";
  EditableTarget2["ContentEditable"] = "contenteditable";
})(EditableTarget || (EditableTarget = {}));
function isInputFocused() {
  if (document == null || document.activeElement == null) {
    return false;
  }
  const {
    tagName
  } = document.activeElement;
  return tagName === EditableTarget.Input || tagName === EditableTarget.Textarea || tagName === EditableTarget.Select || document.activeElement.hasAttribute(EditableTarget.ContentEditable);
}

// node_modules/@shopify/polaris/build/esm/components/Pagination/Pagination.scss.js
var styles36 = {
  "Pagination": "Polaris-Pagination",
  "table": "Polaris-Pagination--table"
};

// node_modules/@shopify/polaris/build/esm/components/Pagination/Pagination.js
function Pagination({
  hasNext,
  hasPrevious,
  nextURL,
  previousURL,
  onNext,
  onPrevious,
  nextTooltip,
  previousTooltip,
  nextKeys,
  previousKeys,
  accessibilityLabel,
  accessibilityLabels,
  label,
  type = "page"
}) {
  const i18n = useI18n();
  const node = /* @__PURE__ */ (0, import_react110.createRef)();
  const navLabel = accessibilityLabel || i18n.translate("Polaris.Pagination.pagination");
  const previousLabel = accessibilityLabels?.previous || i18n.translate("Polaris.Pagination.previous");
  const nextLabel = accessibilityLabels?.next || i18n.translate("Polaris.Pagination.next");
  const prev = /* @__PURE__ */ import_react110.default.createElement(Button, {
    icon: SvgChevronLeftMinor,
    accessibilityLabel: previousLabel,
    url: previousURL,
    onClick: onPrevious,
    disabled: !hasPrevious,
    id: "previousURL"
  });
  const constructedPrevious = previousTooltip && hasPrevious ? /* @__PURE__ */ import_react110.default.createElement(Tooltip, {
    activatorWrapper: "span",
    content: previousTooltip,
    preferredPosition: "below"
  }, prev) : prev;
  const next = /* @__PURE__ */ import_react110.default.createElement(Button, {
    icon: SvgChevronRightMinor,
    accessibilityLabel: nextLabel,
    url: nextURL,
    onClick: onNext,
    disabled: !hasNext,
    id: "nextURL"
  });
  const constructedNext = nextTooltip && hasNext ? /* @__PURE__ */ import_react110.default.createElement(Tooltip, {
    activatorWrapper: "span",
    content: nextTooltip,
    preferredPosition: "below"
  }, next) : next;
  const previousHandler = onPrevious || noop5;
  const previousButtonEvents = previousKeys && (previousURL || onPrevious) && hasPrevious && previousKeys.map((key) => /* @__PURE__ */ import_react110.default.createElement(KeypressListener, {
    key,
    keyCode: key,
    handler: previousURL ? handleCallback(clickPaginationLink("previousURL", node)) : handleCallback(previousHandler)
  }));
  const nextHandler = onNext || noop5;
  const nextButtonEvents = nextKeys && (nextURL || onNext) && hasNext && nextKeys.map((key) => /* @__PURE__ */ import_react110.default.createElement(KeypressListener, {
    key,
    keyCode: key,
    handler: nextURL ? handleCallback(clickPaginationLink("nextURL", node)) : handleCallback(nextHandler)
  }));
  if (type === "table") {
    const labelMarkup2 = label ? /* @__PURE__ */ import_react110.default.createElement(Text, {
      as: "span",
      variant: "bodySm",
      fontWeight: "medium"
    }, label) : null;
    return /* @__PURE__ */ import_react110.default.createElement("nav", {
      "aria-label": navLabel,
      ref: node,
      className: classNames(styles36.Pagination, styles36.table)
    }, previousButtonEvents, nextButtonEvents, /* @__PURE__ */ import_react110.default.createElement(Box, {
      background: "bg-surface-secondary",
      paddingBlockStart: "150",
      paddingBlockEnd: "150",
      paddingInlineStart: "300",
      paddingInlineEnd: "200"
    }, /* @__PURE__ */ import_react110.default.createElement(InlineStack, {
      align: labelMarkup2 ? "space-between" : "end",
      blockAlign: "center"
    }, labelMarkup2, /* @__PURE__ */ import_react110.default.createElement(ButtonGroup, {
      variant: "segmented"
    }, constructedPrevious, constructedNext))));
  }
  const labelTextMarkup = hasNext && hasPrevious ? /* @__PURE__ */ import_react110.default.createElement("span", null, label) : /* @__PURE__ */ import_react110.default.createElement(Text, {
    tone: "subdued",
    as: "span"
  }, label);
  const labelMarkup = label ? /* @__PURE__ */ import_react110.default.createElement(Box, {
    padding: "300",
    paddingBlockStart: "0",
    paddingBlockEnd: "0"
  }, /* @__PURE__ */ import_react110.default.createElement("div", {
    "aria-live": "polite"
  }, labelTextMarkup)) : null;
  return /* @__PURE__ */ import_react110.default.createElement("nav", {
    "aria-label": navLabel,
    ref: node,
    className: styles36.Pagination
  }, previousButtonEvents, nextButtonEvents, /* @__PURE__ */ import_react110.default.createElement(ButtonGroup, {
    variant: "segmented"
  }, constructedPrevious, labelMarkup, constructedNext));
}
function clickPaginationLink(id, node) {
  return () => {
    if (node.current == null) {
      return;
    }
    const link = node.current.querySelector(`#${id}`);
    if (link) {
      link.click();
    }
  };
}
function handleCallback(fn) {
  return () => {
    if (isInputFocused()) {
      return;
    }
    fn();
  };
}
function noop5() {
}

// node_modules/@shopify/polaris/build/esm/components/Page/components/Header/components/Title/Title.js
var import_react111 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Page/components/Header/components/Title/Title.scss.js
var styles37 = {
  "Title": "Polaris-Header-Title",
  "TitleWithSubtitle": "Polaris-Header-Title__TitleWithSubtitle",
  "SubTitle": "Polaris-Header-Title__SubTitle",
  "SubtitleCompact": "Polaris-Header-Title__SubtitleCompact",
  "TitleWithMetadataWrapper": "Polaris-Header-Title__TitleWithMetadataWrapper",
  "TitleMetadata": "Polaris-Header-Title__TitleMetadata"
};

// node_modules/@shopify/polaris/build/esm/components/Page/components/Header/components/Title/Title.js
function Title({
  title,
  subtitle,
  titleMetadata,
  compactTitle
}) {
  const className = classNames(styles37.Title, subtitle && styles37.TitleWithSubtitle);
  const titleMarkup = title ? /* @__PURE__ */ import_react111.default.createElement("h1", {
    className
  }, title) : null;
  const titleMetadataMarkup = titleMetadata ? /* @__PURE__ */ import_react111.default.createElement("div", {
    className: styles37.TitleMetadata
  }, titleMetadata) : null;
  const wrappedTitleMarkup = titleMetadata ? /* @__PURE__ */ import_react111.default.createElement("div", {
    className: styles37.TitleWithMetadataWrapper
  }, titleMarkup, titleMetadataMarkup) : titleMarkup;
  const subtitleMarkup = subtitle ? /* @__PURE__ */ import_react111.default.createElement("div", {
    className: classNames(styles37.SubTitle, compactTitle && styles37.SubtitleCompact)
  }, /* @__PURE__ */ import_react111.default.createElement(Text, {
    as: "p",
    variant: "bodySm"
  }, subtitle)) : null;
  return /* @__PURE__ */ import_react111.default.createElement(import_react111.default.Fragment, null, wrappedTitleMarkup, subtitleMarkup);
}

// node_modules/@shopify/polaris/build/esm/components/Page/components/Header/Header.js
var SHORT_TITLE = 20;
var REALLY_SHORT_TITLE = 8;
var LONG_TITLE = 34;
function Header({
  title,
  subtitle,
  titleMetadata,
  additionalMetadata,
  titleHidden = false,
  primaryAction,
  pagination,
  filterActions,
  backAction,
  secondaryActions = [],
  actionGroups = [],
  compactTitle = false,
  onActionRollup
}) {
  const i18n = useI18n();
  const {
    isNavigationCollapsed
  } = useMediaQuery();
  const isSingleRow = !primaryAction && !pagination && (isInterface(secondaryActions) && !secondaryActions.length || isReactElement(secondaryActions)) && !actionGroups.length;
  const breadcrumbMarkup = backAction ? /* @__PURE__ */ import_react112.default.createElement("div", {
    className: styles35.BreadcrumbWrapper
  }, /* @__PURE__ */ import_react112.default.createElement(Box, {
    maxWidth: "100%",
    paddingInlineEnd: "100",
    printHidden: true
  }, /* @__PURE__ */ import_react112.default.createElement(Breadcrumbs, {
    backAction
  }))) : null;
  const paginationMarkup = pagination && !isNavigationCollapsed ? /* @__PURE__ */ import_react112.default.createElement("div", {
    className: styles35.PaginationWrapper
  }, /* @__PURE__ */ import_react112.default.createElement(Box, {
    printHidden: true
  }, /* @__PURE__ */ import_react112.default.createElement(Pagination, Object.assign({}, pagination, {
    hasPrevious: pagination.hasPrevious,
    hasNext: pagination.hasNext
  })))) : null;
  const pageTitleMarkup = /* @__PURE__ */ import_react112.default.createElement("div", {
    className: styles35.TitleWrapper
  }, /* @__PURE__ */ import_react112.default.createElement(Title, {
    title,
    subtitle,
    titleMetadata,
    compactTitle
  }));
  const primaryActionMarkup = primaryAction ? /* @__PURE__ */ import_react112.default.createElement(PrimaryActionMarkup, {
    primaryAction
  }) : null;
  let actionMenuMarkup = null;
  if (isInterface(secondaryActions) && (secondaryActions.length > 0 || hasGroupsWithActions(actionGroups))) {
    actionMenuMarkup = /* @__PURE__ */ import_react112.default.createElement(ActionMenu, {
      actions: secondaryActions,
      groups: actionGroups,
      rollup: isNavigationCollapsed,
      rollupActionsLabel: title ? i18n.translate("Polaris.Page.Header.rollupActionsLabel", {
        title
      }) : void 0,
      onActionRollup
    });
  } else if (isReactElement(secondaryActions)) {
    actionMenuMarkup = /* @__PURE__ */ import_react112.default.createElement(import_react112.default.Fragment, null, secondaryActions);
  }
  const navigationMarkup = breadcrumbMarkup || paginationMarkup ? /* @__PURE__ */ import_react112.default.createElement(Box, {
    printHidden: true,
    paddingBlockEnd: "100",
    paddingInlineEnd: actionMenuMarkup && isNavigationCollapsed ? "1000" : void 0
  }, /* @__PURE__ */ import_react112.default.createElement(InlineStack, {
    gap: "400",
    align: "space-between",
    blockAlign: "center"
  }, breadcrumbMarkup, paginationMarkup)) : null;
  const additionalMetadataMarkup = additionalMetadata ? /* @__PURE__ */ import_react112.default.createElement("div", {
    className: styles35.AdditionalMetaData
  }, /* @__PURE__ */ import_react112.default.createElement(Text, {
    tone: "subdued",
    as: "span",
    variant: "bodySm"
  }, additionalMetadata)) : null;
  const headerClassNames = classNames(isSingleRow && styles35.isSingleRow, navigationMarkup && styles35.hasNavigation, actionMenuMarkup && styles35.hasActionMenu, isNavigationCollapsed && styles35.mobileView, !backAction && styles35.noBreadcrumbs, title && title.length < LONG_TITLE && styles35.mediumTitle, title && title.length > LONG_TITLE && styles35.longTitle);
  const {
    slot1,
    slot2,
    slot3,
    slot4,
    slot5
  } = determineLayout({
    actionMenuMarkup,
    additionalMetadataMarkup,
    breadcrumbMarkup,
    isNavigationCollapsed,
    pageTitleMarkup,
    paginationMarkup,
    primaryActionMarkup,
    title
  });
  return /* @__PURE__ */ import_react112.default.createElement(Box, {
    position: "relative",
    paddingBlockStart: {
      xs: "400",
      md: "600"
    },
    paddingBlockEnd: {
      xs: "400",
      md: "600"
    },
    paddingInlineStart: {
      xs: "400",
      sm: "0"
    },
    paddingInlineEnd: {
      xs: "400",
      sm: "0"
    },
    visuallyHidden: titleHidden
  }, /* @__PURE__ */ import_react112.default.createElement("div", {
    className: headerClassNames
  }, /* @__PURE__ */ import_react112.default.createElement(FilterActionsProvider, {
    filterActions: Boolean(filterActions)
  }, /* @__PURE__ */ import_react112.default.createElement(ConditionalRender, {
    condition: [slot1, slot2, slot3, slot4].some(notNull)
  }, /* @__PURE__ */ import_react112.default.createElement("div", {
    className: styles35.Row
  }, slot1, slot2, /* @__PURE__ */ import_react112.default.createElement(ConditionalRender, {
    condition: [slot3, slot4].some(notNull)
  }, /* @__PURE__ */ import_react112.default.createElement("div", {
    className: styles35.RightAlign
  }, /* @__PURE__ */ import_react112.default.createElement(ConditionalWrapper, {
    condition: [slot3, slot4].every(notNull),
    wrapper: (children) => /* @__PURE__ */ import_react112.default.createElement("div", {
      className: styles35.Actions
    }, children)
  }, slot3, slot4))))), /* @__PURE__ */ import_react112.default.createElement(ConditionalRender, {
    condition: [slot5].some(notNull)
  }, /* @__PURE__ */ import_react112.default.createElement("div", {
    className: styles35.Row
  }, /* @__PURE__ */ import_react112.default.createElement(InlineStack, {
    gap: "400"
  }, slot5))))));
}
function PrimaryActionMarkup({
  primaryAction
}) {
  const {
    isNavigationCollapsed
  } = useMediaQuery();
  let actionMarkup;
  if (isInterface(primaryAction)) {
    const {
      primary: isPrimary,
      helpText
    } = primaryAction;
    const primary = isPrimary === void 0 ? true : isPrimary;
    const content = buttonFrom(shouldShowIconOnly(isNavigationCollapsed, primaryAction), {
      variant: primary ? "primary" : void 0
    });
    actionMarkup = helpText ? /* @__PURE__ */ import_react112.default.createElement(Tooltip, {
      content: helpText
    }, content) : content;
  } else {
    actionMarkup = primaryAction;
  }
  return /* @__PURE__ */ import_react112.default.createElement("div", {
    className: styles35.PrimaryActionWrapper
  }, /* @__PURE__ */ import_react112.default.createElement(Box, {
    printHidden: true
  }, actionMarkup));
}
function shouldShowIconOnly(isMobile, action) {
  let {
    content,
    accessibilityLabel,
    icon
  } = action;
  if (icon == null)
    return {
      ...action,
      icon: void 0
    };
  if (isMobile) {
    accessibilityLabel = accessibilityLabel || content;
    content = void 0;
  } else {
    icon = void 0;
  }
  return {
    ...action,
    content,
    accessibilityLabel,
    icon
  };
}
function notNull(value) {
  return value != null;
}
function determineLayout({
  actionMenuMarkup,
  additionalMetadataMarkup,
  breadcrumbMarkup,
  isNavigationCollapsed,
  pageTitleMarkup,
  paginationMarkup,
  primaryActionMarkup,
  title
}) {
  const layouts = {
    mobileCompact: {
      slots: {
        slot1: null,
        slot2: pageTitleMarkup,
        slot3: actionMenuMarkup,
        slot4: primaryActionMarkup,
        slot5: additionalMetadataMarkup
      },
      condition: isNavigationCollapsed && breadcrumbMarkup == null && title != null && title.length <= REALLY_SHORT_TITLE
    },
    mobileDefault: {
      slots: {
        slot1: breadcrumbMarkup,
        slot2: pageTitleMarkup,
        slot3: actionMenuMarkup,
        slot4: primaryActionMarkup,
        slot5: additionalMetadataMarkup
      },
      condition: isNavigationCollapsed
    },
    desktopCompact: {
      slots: {
        slot1: breadcrumbMarkup,
        slot2: pageTitleMarkup,
        slot3: actionMenuMarkup,
        slot4: primaryActionMarkup,
        slot5: additionalMetadataMarkup
      },
      condition: !isNavigationCollapsed && paginationMarkup == null && actionMenuMarkup == null && title != null && title.length <= SHORT_TITLE
    },
    desktopDefault: {
      slots: {
        slot1: breadcrumbMarkup,
        slot2: pageTitleMarkup,
        slot3: /* @__PURE__ */ import_react112.default.createElement(import_react112.default.Fragment, null, actionMenuMarkup, primaryActionMarkup),
        slot4: paginationMarkup,
        slot5: additionalMetadataMarkup
      },
      condition: !isNavigationCollapsed
    }
  };
  const layout = Object.values(layouts).find((layout2) => layout2.condition) || layouts.desktopDefault;
  return layout.slots;
}

// node_modules/@shopify/polaris/build/esm/components/Page/Page.js
function Page({
  children,
  fullWidth,
  narrowWidth,
  ...rest
}) {
  const pageClassName = classNames(styles34.Page, fullWidth && styles34.fullWidth, narrowWidth && styles34.narrowWidth);
  const hasHeaderContent = rest.title != null && rest.title !== "" || rest.subtitle != null && rest.subtitle !== "" || rest.primaryAction != null || rest.secondaryActions != null && (isInterface(rest.secondaryActions) && rest.secondaryActions.length > 0 || isReactElement(rest.secondaryActions)) || rest.actionGroups != null && rest.actionGroups.length > 0 || rest.backAction != null;
  const contentClassName = classNames(!hasHeaderContent && styles34.Content);
  const headerMarkup = hasHeaderContent ? /* @__PURE__ */ import_react113.default.createElement(Header, Object.assign({
    filterActions: true
  }, rest)) : null;
  return /* @__PURE__ */ import_react113.default.createElement("div", {
    className: pageClassName
  }, headerMarkup, /* @__PURE__ */ import_react113.default.createElement("div", {
    className: contentClassName
  }, children));
}

// node_modules/@shopify/polaris/build/esm/components/PageActions/PageActions.js
var import_react114 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/PageActions/PageActions.scss.js
var styles38 = {
  "PageActions": "Polaris-PageActions"
};

// node_modules/@shopify/polaris/build/esm/components/PageActions/PageActions.js
function PageActions({
  primaryAction,
  secondaryActions
}) {
  let primaryActionMarkup = null;
  if (isReactElement(primaryAction)) {
    primaryActionMarkup = /* @__PURE__ */ import_react114.default.createElement(import_react114.default.Fragment, null, primaryAction);
  } else if (primaryAction) {
    primaryActionMarkup = buttonsFrom(primaryAction, {
      variant: "primary"
    });
  }
  let secondaryActionsMarkup = null;
  if (isInterface(secondaryActions) && secondaryActions.length > 0) {
    secondaryActionsMarkup = /* @__PURE__ */ import_react114.default.createElement(ButtonGroup, null, buttonsFrom(secondaryActions));
  } else if (isReactElement(secondaryActions)) {
    secondaryActionsMarkup = /* @__PURE__ */ import_react114.default.createElement(import_react114.default.Fragment, null, secondaryActions);
  }
  return /* @__PURE__ */ import_react114.default.createElement("div", {
    className: styles38.PageActions
  }, /* @__PURE__ */ import_react114.default.createElement(LegacyStack, {
    distribution: "trailing",
    spacing: "tight"
  }, secondaryActionsMarkup, primaryActionMarkup));
}

// node_modules/@shopify/polaris/build/esm/components/ProgressBar/ProgressBar.js
var import_react115 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/ProgressBar/ProgressBar.scss.js
var styles39 = {
  "ProgressBar": "Polaris-ProgressBar",
  "sizeSmall": "Polaris-ProgressBar--sizeSmall",
  "sizeMedium": "Polaris-ProgressBar--sizeMedium",
  "sizeLarge": "Polaris-ProgressBar--sizeLarge",
  "toneHighlight": "Polaris-ProgressBar--toneHighlight",
  "tonePrimary": "Polaris-ProgressBar--tonePrimary",
  "toneSuccess": "Polaris-ProgressBar--toneSuccess",
  "toneCritical": "Polaris-ProgressBar--toneCritical",
  "Indicator": "Polaris-ProgressBar__Indicator",
  "IndicatorAppearActive": "Polaris-ProgressBar__IndicatorAppearActive",
  "IndicatorAppearDone": "Polaris-ProgressBar__IndicatorAppearDone",
  "Progress": "Polaris-ProgressBar__Progress",
  "Label": "Polaris-ProgressBar__Label"
};

// node_modules/@shopify/polaris/build/esm/components/ProgressBar/ProgressBar.js
function ProgressBar({
  progress = 0,
  size: size2 = "medium",
  tone = "highlight",
  animated: hasAppearAnimation = true,
  ariaLabelledBy
}) {
  const theme = useTheme();
  const i18n = useI18n();
  const indicatorRef = (0, import_react115.useRef)(null);
  const className = classNames(styles39.ProgressBar, size2 && styles39[variationName("size", size2)], tone && styles39[variationName("tone", tone)]);
  const warningMessage = i18n.translate(progress < 0 ? "Polaris.ProgressBar.negativeWarningMessage" : "Polaris.ProgressBar.exceedWarningMessage", {
    progress
  });
  const parsedProgress = parseProgress(progress, warningMessage);
  const progressBarDuration = hasAppearAnimation ? theme.motion["motion-duration-500"] : theme.motion["motion-duration-0"];
  return /* @__PURE__ */ import_react115.default.createElement("div", {
    className
  }, /* @__PURE__ */ import_react115.default.createElement("progress", {
    "aria-labelledby": ariaLabelledBy,
    className: styles39.Progress,
    value: parsedProgress,
    max: "100"
  }), /* @__PURE__ */ import_react115.default.createElement(CSSTransition_default, {
    in: true,
    appear: true,
    timeout: parseInt(progressBarDuration, 10),
    nodeRef: indicatorRef,
    classNames: {
      appearActive: styles39.IndicatorAppearActive,
      appearDone: styles39.IndicatorAppearDone
    }
  }, /* @__PURE__ */ import_react115.default.createElement("div", {
    ref: indicatorRef,
    className: styles39.Indicator,
    style: {
      "--pc-progress-bar-duration": progressBarDuration,
      "--pc-progress-bar-percent": parsedProgress / 100
    }
  }, /* @__PURE__ */ import_react115.default.createElement("span", {
    className: styles39.Label
  }, parsedProgress, "%"))));
}
function parseProgress(progress, warningMessage) {
  let progressWidth;
  if (progress < 0) {
    if (true) {
      console.warn(warningMessage);
    }
    progressWidth = 0;
  } else if (progress > 100) {
    if (true) {
      console.warn(warningMessage);
    }
    progressWidth = 100;
  } else {
    progressWidth = progress;
  }
  return progressWidth;
}

// app/root.jsx
var import_react117 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.jsx"
  );
}
var links = () => [{
  rel: "stylesheet",
  href: styles_default
}];
function App() {
  _s();
  const emptyPeople = {
    name: "",
    phone: "+44"
  };
  const [people, setPeople] = (0, import_react117.useState)([emptyPeople]);
  const [sendProgress, setProgress] = (0, import_react117.useState)(0);
  const [currentInvite, setCurrentInvite] = (0, import_react117.useState)(0);
  const [showProgress, setShowProgress] = (0, import_react117.useState)(false);
  const knuthShuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  const handleNameChange = (newValue, index) => {
    setPeople((prevState) => prevState.map((item, psIndex) => {
      if (psIndex === index) {
        return {
          name: newValue,
          phone: item.phone
        };
      } else {
        return item;
      }
    }));
  };
  const handlePhoneChange = (newValue, index) => {
    setPeople((prevState) => prevState.map((item, psIndex) => {
      if (psIndex === index) {
        return {
          name: item.name,
          phone: newValue
        };
      } else {
        return item;
      }
    }));
  };
  const handleDelete = (index) => {
    setPeople((people2) => people2.filter((item, ogIndex) => index !== ogIndex));
  };
  const handleSend = async () => {
    if (people.length > 1) {
      const shuffledPeople = knuthShuffle(people);
      const matches2 = shuffledPeople.map((santa, index) => {
        const receiver = shuffledPeople[index + 1] || shuffledPeople[0];
        return {
          toPhone: santa.phone,
          message: `Hi ${santa.name},
You need to get a gift for ${receiver.name}.
Thanks
Santa \u{1F385}\u{1F3FB}
PS
Keep it a secret \u{1F92B}`
        };
      });
      setShowProgress(true);
      for (let [index, person] of matches2.entries()) {
        setCurrentInvite(index + 1);
        setProgress(parseInt((index + 1) / people.length * 100));
        const response = await fetch("/send", {
          method: "POST",
          mode: "cors",
          body: JSON.stringify({
            to: person.toPhone,
            message: person.message
          })
        });
        const messages = await response.json();
      }
      setShowProgress(false);
    }
  };
  const progressMarkup = showProgress && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Banner, { title: "Sending...", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: [
      "Invite ",
      currentInvite,
      " of ",
      people.length
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 102,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProgressBar, { progress: sendProgress }, void 0, false, {
      fileName: "app/root.jsx",
      lineNumber: 103,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 101,
    columnNumber: 42
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 107,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.googleapis.com/" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 108,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.gstatic.com/", crossOrigin: "anonymous" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 109,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", { href: "https://fonts.googleapis.com/css2?family=Inter:wght@450;550;650;700&display=swap" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 110,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 111,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 106,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Page, { title: "\u{1F92B} Secret SMS Santa \u{1F385}\u{1F3FB}", primaryAction: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "primary", onClick: handleSend, children: [
        "Send ",
        people.length,
        " Invites"
      ] }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 115,
        columnNumber: 65
      }, this), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockStack, { gap: "500", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "p", variant: "bodyMd", children: "Add your participants below, then click the button above to send the SMS invites." }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 118,
            columnNumber: 15
          }, this),
          progressMarkup,
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, { children: people.map((person, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid.Cell, { columnSpan: {
            xs: 6,
            sm: 3,
            md: 3,
            lg: 6,
            xl: 6
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineStack, { align: "space-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "h2", variant: "headingSm", children: [
                "Person #",
                index + 1
              ] }, void 0, true, {
                fileName: "app/root.jsx",
                lineNumber: 132,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { monochrome: true, onClick: () => {
                handleDelete(index);
              }, children: "Delete" }, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 133,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/root.jsx",
              lineNumber: 131,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Name", value: person.name, onChange: (val) => {
              handleNameChange(val, index);
            }, autoComplete: "off" }, void 0, false, {
              fileName: "app/root.jsx",
              lineNumber: 138,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Phone Number", value: person.phone, onChange: (val) => {
              handlePhoneChange(val, index);
            }, type: "tel", autoComplete: "off" }, void 0, false, {
              fileName: "app/root.jsx",
              lineNumber: 142,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/root.jsx",
            lineNumber: 130,
            columnNumber: 21
          }, this) }, index, false, {
            fileName: "app/root.jsx",
            lineNumber: 123,
            columnNumber: 46
          }, this)) }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 122,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageActions, { secondaryActions: [{
            content: "Add person",
            onAction: () => {
              setPeople([...people, emptyPeople]);
            }
          }] }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 150,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/root.jsx",
          lineNumber: 117,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FooterHelp, { children: [
          "Built by ",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { url: "https://www.stephenkeable.co.uk", children: "Stephen Keable" }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 161,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/root.jsx",
          lineNumber: 159,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 115,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 114,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 167,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 169,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 170,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 113,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 105,
    columnNumber: 10
  }, this);
}
_s(App, "frFIZ81uKIko2z7nKMhe/vdSoUs=");
_c = App;
var _c;
$RefreshReg$(_c, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  links
};
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
//# sourceMappingURL=/build/root-54HNFE4G.js.map
