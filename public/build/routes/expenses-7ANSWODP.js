import {
  require_expense
} from "/build/_shared/chunk-7BIZISQA.js";
import {
  Form,
  SubmitLink,
  Title
} from "/build/_shared/chunk-IHKL7BYE.js";
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
  Outlet,
  useLoaderData
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

// app/routes/expenses.tsx
var import_node = __toESM(require_node());
var import_expense = __toESM(require_expense());
var import_session = __toESM(require_session());

// app/components/Expenses.module.css
var Expenses_module_default = { "row": "Expenses-module__row__Vcne-", "tag": "Expenses-module__tag__oy-fk", "item": "Expenses-module__item__-1kMd", "value": "Expenses-module__value__Dwm9Y", "list": "Expenses-module__list__2k-sS" };

// app/components/Expenses.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Expenses.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Expenses.tsx"
  );
}
function List({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: Expenses_module_default.list, children }, void 0, false, {
    fileName: "app/components/Expenses.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c = List;
function ExpenseItem({
  item,
  category,
  value
}) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: Expenses_module_default.row, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: Expenses_module_default.item, children: item }, void 0, false, {
      fileName: "app/components/Expenses.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: Expenses_module_default.tag, style: {
      backgroundColor: category.color
    }, children: category.name }, void 0, false, {
      fileName: "app/components/Expenses.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: Expenses_module_default.value, children: formatter.format(value) }, void 0, false, {
      fileName: "app/components/Expenses.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Expenses.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
_c2 = ExpenseItem;
var _c;
var _c2;
$RefreshReg$(_c, "List");
$RefreshReg$(_c2, "ExpenseItem");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/expenses.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/expenses.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/expenses.tsx"
  );
  import.meta.hot.lastModified = "1700512598861.7124";
}
var meta = () => [{
  title: "Expenses"
}];
function ExpensesPage() {
  _s();
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AuthMenu, { current: "expenses", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Title, { children: "Expenses" }, void 0, false, {
        fileName: "app/routes/expenses.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(List, { children: data.expenses.map((expense) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ExpenseItem, { ...expense }, expense.id, false, {
        fileName: "app/routes/expenses.tsx",
        lineNumber: 50,
        columnNumber: 41
      }, this)) }, void 0, false, {
        fileName: "app/routes/expenses.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SubmitLink, { to: "add", children: "Add new expense" }, void 0, false, {
        fileName: "app/routes/expenses.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/expenses.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/expenses.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/expenses.tsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
}
_s(ExpensesPage, "5thj+e1edPyRpKif1JmVRC6KArE=", false, function() {
  return [useLoaderData];
});
_c3 = ExpensesPage;
var _c3;
$RefreshReg$(_c3, "ExpensesPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ExpensesPage as default,
  meta
};
//# sourceMappingURL=/build/routes/expenses-7ANSWODP.js.map
