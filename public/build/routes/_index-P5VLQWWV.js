import {
  require_category
} from "/build/_shared/chunk-ONT4HJR4.js";
import {
  require_expense
} from "/build/_shared/chunk-7BIZISQA.js";
import {
  useOptionalUser
} from "/build/_shared/chunk-FZ45DFXG.js";
import {
  AuthMenu,
  UnauthMenu
} from "/build/_shared/chunk-S2QB7PZG.js";
import {
  require_node,
  require_session
} from "/build/_shared/chunk-2LTVY2GU.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  Link,
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

// app/routes/_index.tsx
var import_node = __toESM(require_node());

// app/components/Balance.module.css
var Balance_module_default = { "wrapper": "Balance-module__wrapper__WnVzj", "heading": "Balance-module__heading__fzRMO", "amount": "Balance-module__amount__-f0BT" };

// app/components/Balance.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Balance.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Balance.tsx"
  );
}
function Balance({
  amount
}) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: Balance_module_default.wrapper, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: Balance_module_default.heading, children: "Balance" }, void 0, false, {
      fileName: "app/components/Balance.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: Balance_module_default.amount, children: formatter.format(amount) }, void 0, false, {
      fileName: "app/components/Balance.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Balance.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_c = Balance;
var _c;
$RefreshReg$(_c, "Balance");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/PieChart.module.css
var PieChart_module_default = { "wrapper": "PieChart-module__wrapper__ANwBi", "pie": "PieChart-module__pie__lGbIb", "legend": "PieChart-module__legend__FvU3K", "label": "PieChart-module__label__5El2n", "dot": "PieChart-module__dot__pCAT8" };

// app/components/PieChart.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/PieChart.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/PieChart.tsx"
  );
}
function PieChart({
  items
}) {
  items.sort(({
    value: a
  }, {
    value: b
  }) => b - a);
  const sum = items.reduce((a, {
    value
  }) => a + value, 0);
  const incremental = items.reduce((list, {
    value
  }) => [...list, list[list.length - 1] + value], [0]).slice(1);
  const gradientStops = Object.values(incremental).map((value, index) => [[items[index].color, 0].join(" "), [items[index].color, `${value / sum}turn`].join(" ")]).flat().join(",");
  const gradient = `conic-gradient(${gradientStops})`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: PieChart_module_default.wrapper, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: PieChart_module_default.pie, style: {
      backgroundImage: gradient
    } }, void 0, false, {
      fileName: "app/components/PieChart.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: PieChart_module_default.legend, children: items.map(({
      name,
      color,
      value
    }) => value > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: PieChart_module_default.label, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { style: {
        backgroundColor: color
      }, className: PieChart_module_default.dot }, void 0, false, {
        fileName: "app/components/PieChart.tsx",
        lineNumber: 47,
        columnNumber: 15
      }, this),
      name
    ] }, name, true, {
      fileName: "app/components/PieChart.tsx",
      lineNumber: 46,
      columnNumber: 25
    }, this) : null) }, void 0, false, {
      fileName: "app/components/PieChart.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/PieChart.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}
_c2 = PieChart;
var PieChart_default = PieChart;
var _c2;
$RefreshReg$(_c2, "PieChart");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_index.tsx
var import_category = __toESM(require_category());
var import_expense = __toESM(require_expense());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1700408491405.1711";
}
function Dashboard({
  user
}) {
  _s();
  const data = useLoaderData();
  const expenseSum = data.categories.reduce((sum, {
    value
  }) => sum + value, 0);
  const balance = user.income - expenseSum;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AuthMenu, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Balance, { amount: balance }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(PieChart_default, { items: data.categories }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 66,
    columnNumber: 10
  }, this);
}
_s(Dashboard, "5thj+e1edPyRpKif1JmVRC6KArE=", false, function() {
  return [useLoaderData];
});
_c3 = Dashboard;
function Welcome() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(UnauthMenu, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Welcome" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
      "Welcome to the ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("strong", { children: "Expens.ee" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 79,
        columnNumber: 24
      }, this),
      " Expense Tracker application."
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
      "Please ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/login", children: "login" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 82,
        columnNumber: 16
      }, this),
      " or",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/join", children: "create a user" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this),
      "."
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 76,
    columnNumber: 10
  }, this);
}
_c22 = Welcome;
function Index() {
  _s2();
  const user = useOptionalUser();
  return user ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dashboard, { user }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 91,
    columnNumber: 17
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Welcome, {}, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 91,
    columnNumber: 45
  }, this);
}
_s2(Index, "gqXoXrwy0rMHgaN7Y1noFHoOsVs=", false, function() {
  return [useOptionalUser];
});
_c32 = Index;
var _c3;
var _c22;
var _c32;
$RefreshReg$(_c3, "Dashboard");
$RefreshReg$(_c22, "Welcome");
$RefreshReg$(_c32, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_index-P5VLQWWV.js.map
