'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var devfractalUiCore = require('devfractal-ui-core');
var React = _interopDefault(require('react'));
var DatePicker = _interopDefault(require('react-datepicker'));
var formik = require('formik');
var technoidentityUtils = require('technoidentity-utils');
var axios = _interopDefault(require('axios'));

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

var DateInput = function DateInput(_ref) {
  var _classNamesHelper;

  var variant = _ref.variant,
      fullWidth = _ref.fullWidth,
      inline = _ref.inline,
      rounded = _ref.rounded,
      onChange = _ref.onChange,
      state = _ref.state,
      props = _objectWithoutPropertiesLoose(_ref, ["variant", "fullWidth", "inline", "rounded", "onChange", "state"]);

  var classes = devfractalUiCore.classNamesHelper(props, 'input', (_classNamesHelper = {
    'is-fullwidth': fullWidth,
    'is-inline': inline,
    'is-rounded': rounded
  }, _classNamesHelper["is-" + variant] = variant, _classNamesHelper["is-" + props.ctrlSize] = props.ctrlSize, _classNamesHelper["is-" + state] = state, _classNamesHelper));
  return React.createElement(devfractalUiCore.ControlWrapper, Object.assign({}, props), React.createElement(DatePicker, Object.assign({}, devfractalUiCore.removeIconHelpers(devfractalUiCore.removeControlHelpers(devfractalUiCore.removeHelpers(props))), {
    onChange: onChange,
    className: classes
  })));
};

var FormikCheckbox = function FormikCheckbox(_ref) {
  var form = _ref.form,
      field = _ref.field,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["form", "field", "children"]);

  return React.createElement(devfractalUiCore.CheckBox, Object.assign({}, props, field, {
    checked: field.value
  }), children);
};

var CheckboxField = function CheckboxField(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutPropertiesLoose(_ref2, ["children"]);

  return React.createElement(formik.Field, Object.assign({}, props, {
    component: FormikCheckbox
  }), children);
};

function DateInputInner(_ref) {
  var form = _ref.form,
      field = _ref.field,
      props = _objectWithoutPropertiesLoose(_ref, ["form", "field"]);

  return React.createElement(DateInput, Object.assign({}, props, {
    onChange: function onChange(date) {
      return form.setFieldValue(field.name, date);
    },
    name: field.name,
    onBlur: field.onBlur,
    selected: field.value
  }));
}

var DateField = function DateField(props) {
  return React.createElement(formik.Field, Object.assign({}, props, {
    component: DateInputInner
  }));
};

var DebugField = function DebugField() {
  return React.createElement(formik.FormikConsumer, null, function (_ref) {
    var values = _ref.values;
    return React.createElement("pre", null, technoidentityUtils.jsonStringify(values));
  });
};

var FormikError = function FormikError(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React.createElement(devfractalUiCore.FieldHelp, Object.assign({}, props, {
    variant: "danger"
  }), children);
};

var ErrorField = function ErrorField(props) {
  return React.createElement(formik.ErrorMessage, Object.assign({}, props, {
    component: FormikError
  }));
};

function InputInner(_ref) {
  var form = _ref.form,
      field = _ref.field,
      props = _objectWithoutPropertiesLoose(_ref, ["form", "field"]);

  return React.createElement(devfractalUiCore.Input, Object.assign({}, props, field));
}

var InputField = function InputField(props) {
  return React.createElement(formik.Field, Object.assign({}, props, {
    component: InputInner
  }));
};

var FormikRadioGroup = function FormikRadioGroup(_ref) {
  var form = _ref.form,
      field = _ref.field,
      type = _ref.type,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["form", "field", "type", "children"]);

  return React.createElement(devfractalUiCore.RadioGroup, Object.assign({}, props, {
    name: field.name,
    onBlur: field.onBlur,
    selected: field.value,
    onChange: function onChange(evt) {
      return form.setFieldValue(field.name, evt.value);
    }
  }), children);
};

var RadioGroupField = function RadioGroupField(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutPropertiesLoose(_ref2, ["children"]);

  return React.createElement(formik.Field, Object.assign({}, props, {
    component: FormikRadioGroup
  }), children);
};

var FormikSelect = function FormikSelect(_ref) {
  var form = _ref.form,
      field = _ref.field,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["form", "field", "children"]);

  return React.createElement(devfractalUiCore.Select, Object.assign({}, props, field), children);
};

var SelectField = function SelectField(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutPropertiesLoose(_ref2, ["children"]);

  return React.createElement(formik.Field, Object.assign({}, props, {
    component: FormikSelect
  }), children);
};

var FormikTextArea = function FormikTextArea(_ref) {
  var form = _ref.form,
      field = _ref.field,
      props = _objectWithoutPropertiesLoose(_ref, ["form", "field"]);

  return React.createElement(devfractalUiCore.TextArea, Object.assign({}, props, field));
};

var TextAreaField = function TextAreaField(props) {
  return React.createElement(formik.Field, Object.assign({}, props, {
    component: FormikTextArea
  }));
};

// A type of promise-like that resolves synchronously and supports only one observer

const _iteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))) : "@@iterator";

const _asyncIteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))) : "@@asyncIterator";

// Asynchronously call a function and send errors to recovery continuation
function _catch(body, recover) {
	try {
		var result = body();
	} catch(e) {
		return recover(e);
	}
	if (result && result.then) {
		return result.then(void 0, recover);
	}
	return result;
}

function consoleSubmit(milliseconds) {
  if (milliseconds === void 0) {
    milliseconds = 0;
  }

  return function (values, _ref) {
    var setSubmitting = _ref.setSubmitting;

    try {
      return Promise.resolve(technoidentityUtils.timeout(milliseconds, function () {
        console.log(technoidentityUtils.jsonStringify(values));
        setSubmitting(false);
      }));
    } catch (e) {
      return Promise.reject(e);
    }
  };
}

var id = function id(x) {
  return x;
}; // Need to create Either and AsynchronousEither


function apiSubmit(_ref2) {
  var url = _ref2.url,
      _ref2$action = _ref2.action,
      action = _ref2$action === void 0 ? 'post' : _ref2$action,
      _ref2$noResetOnSubmit = _ref2.noResetOnSubmit,
      noResetOnSubmit = _ref2$noResetOnSubmit === void 0 ? false : _ref2$noResetOnSubmit,
      _ref2$valuesTransform = _ref2.valuesTransformer,
      valuesTransformer = _ref2$valuesTransform === void 0 ? id : _ref2$valuesTransform,
      _ref2$responseTransfo = _ref2.responseTransformer,
      responseTransformer = _ref2$responseTransfo === void 0 ? id : _ref2$responseTransfo,
      _ref2$errorsTransform = _ref2.errorsTransformer,
      errorsTransformer = _ref2$errorsTransform === void 0 ? id : _ref2$errorsTransform;
  return function (values, _ref3) {
    var setValues = _ref3.setValues,
        setErrors = _ref3.setErrors,
        setSubmitting = _ref3.setSubmitting,
        resetForm = _ref3.resetForm;

    try {
      return Promise.resolve(_catch(function () {
        function _temp2(_axios$post) {
          function _temp(_axios$put) {
            var data = action === 'post' ? _axios$put : _axios$put.data;
            var response = responseTransformer(data);
            setValues(response);
            setSubmitting(false);

            if (!noResetOnSubmit) {
              resetForm();
            }

            return response;
          }

          // Should handle the erroneous scenario, output keys aren't a subset of input
          return action === 'post' ? _temp(action === 'post' ? _axios$post.data : axios.put(url, valuesTransformer(values))) : Promise.resolve(action === 'post' ? _axios$post.data : axios.put(url, valuesTransformer(values))).then(_temp);
        }

        return action === 'post' ? Promise.resolve(action === 'post' ? axios.post(url, valuesTransformer(values)) : 0).then(_temp2) : _temp2(action === 'post' ? axios.post(url, valuesTransformer(values)) : 0);
      }, function (errors) {
        var err = errorsTransformer(errors);
        setErrors(err);
        setSubmitting(false);
        return Promise.reject(err);
      }));
    } catch (e) {
      return Promise.reject(e);
    }
  };
}
function formikSubmit(asyncFn, resetOnSubmit) {
  if (resetOnSubmit === void 0) {
    resetOnSubmit = true;
  }

  return function (values, _ref4) {
    var setValues = _ref4.setValues,
        setErrors = _ref4.setErrors,
        setSubmitting = _ref4.setSubmitting,
        resetForm = _ref4.resetForm;

    try {
      return Promise.resolve(_catch(function () {
        return Promise.resolve(asyncFn(values)).then(function (response) {
          setValues(response);
          setSubmitting(false);

          if (resetOnSubmit) {
            resetForm();
          }

          return response;
        });
      }, function (errors) {
        setErrors(errors);
        setSubmitting(false);
        throw errors;
      }));
    } catch (e) {
      return Promise.reject(e);
    }
  };
}

// @TODO: Types are all wrong in yup. Need some way to fix that mess.
var required = function required(message) {
  return function (schema) {
    return schema.required(message);
  };
};
var nullable = function nullable(isNullable) {
  return function (schema) {
    return schema.nullable(isNullable);
  };
};
var notRequired = function notRequired() {
  return function (schema) {
    return schema.notRequired();
  };
};
function minLength(min, message) {
  return function (schema) {
    return schema.min(min, message);
  };
}
function min(min, message) {
  return function (schema) {
    return schema.min(min, message);
  };
}
function after(min, message) {
  return function (schema) {
    return schema.min(min, message);
  };
}
function maxLength(max, message) {
  return function (schema) {
    return schema.max(max, message);
  };
}
function max(max, message) {
  return function (schema) {
    return schema.max(max, message);
  };
}
function before(max, message) {
  return function (schema) {
    return schema.max(max, message);
  };
}
var length = function length(limit, message) {
  return function (schema) {
    return schema.length(limit, message);
  };
};
var matches = function matches(exp, message) {
  return function (schema) {
    return schema.matches(exp, message);
  };
};
var email = function email(message) {
  return function (schema) {
    return schema.email(message);
  };
};
var url = function url(message) {
  return function (schema) {
    return schema.url(message);
  };
};
var trim = function trim(message) {
  return function (schema) {
    return schema.strict(true).trim(message);
  };
};
var lowercase = function lowercase(message) {
  return function (schema) {
    return schema.strict(true).lowercase(message);
  };
};
var uppercase = function uppercase(message) {
  return function (schema) {
    return schema.strict(true).uppercase(message);
  };
};
var lessThan = function lessThan(max, message) {
  return function (schema) {
    return schema.lessThan(max, message);
  };
};
var moreThan = function moreThan(min, message) {
  return function (schema) {
    return schema.moreThan(min, message);
  };
};
var positive = function positive(message) {
  return function (schema) {
    return schema.positive(message);
  };
};
var negative = function negative(message) {
  return function (schema) {
    return schema.negative(message);
  };
};
var integer = function integer(message) {
  return function (schema) {
    return schema.integer(message);
  };
};
var truncate = function truncate() {
  return function (schema) {
    return schema.truncate();
  };
};
function of(type) {
  return function (schema) {
    return schema.of(type);
  };
}

exports.CheckboxField = CheckboxField;
exports.DateField = DateField;
exports.DateInput = DateInput;
exports.DebugField = DebugField;
exports.ErrorField = ErrorField;
exports.InputField = InputField;
exports.RadioGroupField = RadioGroupField;
exports.SelectField = SelectField;
exports.TextAreaField = TextAreaField;
exports.after = after;
exports.apiSubmit = apiSubmit;
exports.before = before;
exports.consoleSubmit = consoleSubmit;
exports.email = email;
exports.formikSubmit = formikSubmit;
exports.integer = integer;
exports.length = length;
exports.lessThan = lessThan;
exports.lowercase = lowercase;
exports.matches = matches;
exports.max = max;
exports.maxLength = maxLength;
exports.min = min;
exports.minLength = minLength;
exports.moreThan = moreThan;
exports.negative = negative;
exports.notRequired = notRequired;
exports.nullable = nullable;
exports.of = of;
exports.positive = positive;
exports.required = required;
exports.trim = trim;
exports.truncate = truncate;
exports.uppercase = uppercase;
exports.url = url;
//# sourceMappingURL=devfractal-forms.cjs.development.js.map
