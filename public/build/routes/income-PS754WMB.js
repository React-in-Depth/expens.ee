import {
  require_user
} from "/build/_shared/chunk-G3ACJGOK.js";
import {
  useUser
} from "/build/_shared/chunk-FZ45DFXG.js";
import {
  AuthMenu
} from "/build/_shared/chunk-S2QB7PZG.js";
import {
  require_node,
  require_session
} from "/build/_shared/chunk-2LTVY2GU.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  Form
} from "/build/_shared/chunk-ZOOUEK4P.js";
import {
  createHotContext
} from "/build/_shared/chunk-6NCDYVQE.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/IncomeInput.module.css
var IncomeInput_module_default = { "wrapper": "IncomeInput-module__wrapper__IE0oV", "heading": "IncomeInput-module__heading__O3WRy", "amount": "IncomeInput-module__amount__e7w4h" };

// app/components/IncomeInput.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/IncomeInput.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/IncomeInput.tsx"
  );
}
function IncomeInput(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: IncomeInput_module_default.wrapper, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: IncomeInput_module_default.heading, children: "Income" }, void 0, false, {
      fileName: "app/components/IncomeInput.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "number", name: "income", className: IncomeInput_module_default.amount, ...props }, void 0, false, {
      fileName: "app/components/IncomeInput.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/IncomeInput.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
_c = IncomeInput;
var _c;
$RefreshReg$(_c, "IncomeInput");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/income.tsx
var import_session = __toESM(require_session());
var import_user = __toESM(require_user());
var import_node = __toESM(require_node());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/income.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/income.tsx"
  );
  import.meta.hot.lastModified = "1700512586529.016";
}
var meta = () => [{
  title: "Update Income"
}];
function Income() {
  _s();
  const {
    income
  } = useUser();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AuthMenu, { current: "income", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IncomeInput, { defaultValue: income }, void 0, false, {
    fileName: "app/routes/income.tsx",
    lineNumber: 59,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/income.tsx",
    lineNumber: 58,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/income.tsx",
    lineNumber: 57,
    columnNumber: 10
  }, this);
}
_s(Income, "l5TD0LU+Qb8rVavxxpZP4AhfEok=", false, function() {
  return [useUser];
});
_c2 = Income;
var _c2;
$RefreshReg$(_c2, "Income");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Income as default,
  meta
};
//# sourceMappingURL=/build/routes/income-PS754WMB.js.map
