import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  Form,
  Link
} from "/build/_shared/chunk-ZOOUEK4P.js";
import {
  createHotContext
} from "/build/_shared/chunk-6NCDYVQE.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/Form.module.css
var Form_module_default = { "form": "Form-module__form__dbp-z", "title": "Form-module__title__J5cY7", "label": "Form-module__label__yubsS", "labelSpan": "Form-module__labelSpan__ykwZD", "input": "Form-module__input__fH8hZ", "select": "Form-module__select__Dua1f", "optionGroup": "Form-module__optionGroup__Kh6cn", "optionName": "Form-module__optionName__AACG9", "option": "Form-module__option__akJEP", "optionContent": "Form-module__optionContent__Kct3G", "buttons": "Form-module__buttons__2B863", "submit": "Form-module__submit__Wjii6", "cancel": "Form-module__cancel__ipqtU" };

// app/components/Form.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Form.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Form.tsx"
  );
}
function Form2({
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { className: Form_module_default.form, ...props, children }, void 0, false, {
    fileName: "app/components/Form.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c = Form2;
function Title({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: Form_module_default.title, children }, void 0, false, {
    fileName: "app/components/Form.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_c2 = Title;
function Label({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: Form_module_default.label, children }, void 0, false, {
    fileName: "app/components/Form.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
}
_c3 = Label;
function LabelSpan({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: Form_module_default.labelSpan, children }, void 0, false, {
    fileName: "app/components/Form.tsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
}
_c4 = LabelSpan;
function Input(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: Form_module_default.input, ...props }, void 0, false, {
    fileName: "app/components/Form.tsx",
    lineNumber: 50,
    columnNumber: 10
  }, this);
}
_c5 = Input;
function OptionGroup({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: Form_module_default.optionGroup, children }, void 0, false, {
    fileName: "app/components/Form.tsx",
    lineNumber: 56,
    columnNumber: 10
  }, this);
}
_c6 = OptionGroup;
function Option(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: Form_module_default.option, ...props }, void 0, false, {
    fileName: "app/components/Form.tsx",
    lineNumber: 60,
    columnNumber: 10
  }, this);
}
_c7 = Option;
function OptionName(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: Form_module_default.optionName, ...props }, void 0, false, {
    fileName: "app/components/Form.tsx",
    lineNumber: 64,
    columnNumber: 10
  }, this);
}
_c8 = OptionName;
function OptionContent({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: Form_module_default.optionContent, children }, void 0, false, {
    fileName: "app/components/Form.tsx",
    lineNumber: 70,
    columnNumber: 10
  }, this);
}
_c9 = OptionContent;
function Select(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { className: Form_module_default.select, ...props }, void 0, false, {
    fileName: "app/components/Form.tsx",
    lineNumber: 74,
    columnNumber: 10
  }, this);
}
_c10 = Select;
function Buttons({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: Form_module_default.buttons, children }, void 0, false, {
    fileName: "app/components/Form.tsx",
    lineNumber: 80,
    columnNumber: 10
  }, this);
}
_c11 = Buttons;
function Submit(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: Form_module_default.submit, ...props }, void 0, false, {
    fileName: "app/components/Form.tsx",
    lineNumber: 84,
    columnNumber: 10
  }, this);
}
_c12 = Submit;
function SubmitLink(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: Form_module_default.submit, ...props }, void 0, false, {
    fileName: "app/components/Form.tsx",
    lineNumber: 88,
    columnNumber: 10
  }, this);
}
_c13 = SubmitLink;
function Cancel(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: Form_module_default.cancel, ...props }, void 0, false, {
    fileName: "app/components/Form.tsx",
    lineNumber: 92,
    columnNumber: 10
  }, this);
}
_c14 = Cancel;
function CancelLink(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: Form_module_default.cancel, ...props }, void 0, false, {
    fileName: "app/components/Form.tsx",
    lineNumber: 96,
    columnNumber: 10
  }, this);
}
_c15 = CancelLink;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
var _c7;
var _c8;
var _c9;
var _c10;
var _c11;
var _c12;
var _c13;
var _c14;
var _c15;
$RefreshReg$(_c, "Form");
$RefreshReg$(_c2, "Title");
$RefreshReg$(_c3, "Label");
$RefreshReg$(_c4, "LabelSpan");
$RefreshReg$(_c5, "Input");
$RefreshReg$(_c6, "OptionGroup");
$RefreshReg$(_c7, "Option");
$RefreshReg$(_c8, "OptionName");
$RefreshReg$(_c9, "OptionContent");
$RefreshReg$(_c10, "Select");
$RefreshReg$(_c11, "Buttons");
$RefreshReg$(_c12, "Submit");
$RefreshReg$(_c13, "SubmitLink");
$RefreshReg$(_c14, "Cancel");
$RefreshReg$(_c15, "CancelLink");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Form2 as Form,
  Title,
  Label,
  LabelSpan,
  Input,
  OptionGroup,
  Option,
  OptionName,
  OptionContent,
  Select,
  Buttons,
  Submit,
  SubmitLink,
  CancelLink
};
//# sourceMappingURL=/build/_shared/chunk-IHKL7BYE.js.map
