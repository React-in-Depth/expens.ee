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

// app/components/menu.module.css
var menu_module_default = { "nav": "menu-module__nav__9ew2E", "navList": "menu-module__navList__nrcXI", "navListItem": "menu-module__navListItem__GzJMv", "navButton": "menu-module__navButton__y-BZp", "navLink": "menu-module__navLink__flTno", "navLinkCurrent": "menu-module__navLinkCurrent__H535-" };

// app/components/FormMenuItem.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/FormMenuItem.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/FormMenuItem.tsx"
  );
}
function FormMenuItem({
  to,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: menu_module_default.navListItem, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", action: to, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: menu_module_default.navButton, children }, void 0, false, {
    fileName: "app/components/FormMenuItem.tsx",
    lineNumber: 28,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/FormMenuItem.tsx",
    lineNumber: 27,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/FormMenuItem.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c = FormMenuItem;
var _c;
$RefreshReg$(_c, "FormMenuItem");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/MenuItem.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/MenuItem.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/MenuItem.tsx"
  );
}
function MenuItem({
  to,
  children,
  isCurrent = false
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: menu_module_default.navListItem, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to, className: isCurrent ? menu_module_default.navLinkCurrent : menu_module_default.navLink, children }, void 0, false, {
    fileName: "app/components/MenuItem.tsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/MenuItem.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c2 = MenuItem;
var _c2;
$RefreshReg$(_c2, "MenuItem");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Menu.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Menu.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Menu.tsx"
  );
}
function Menu({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: menu_module_default.nav, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { "data-foo": `foo ${Object.keys(menu_module_default).join(",")}`, className: menu_module_default.navList, children }, void 0, false, {
    fileName: "app/components/Menu.tsx",
    lineNumber: 27,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Menu.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c3 = Menu;
function AuthMenu({
  current = "",
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Menu, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MenuItem, { to: "/", isCurrent: current === "", children: "Dashboard" }, void 0, false, {
        fileName: "app/components/Menu.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MenuItem, { to: "/income", isCurrent: current === "income", children: "Income" }, void 0, false, {
        fileName: "app/components/Menu.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MenuItem, { to: "/expenses", isCurrent: current === "expenses", children: "Expenses" }, void 0, false, {
        fileName: "app/components/Menu.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(FormMenuItem, { to: "/logout", children: "Log out" }, void 0, false, {
        fileName: "app/components/Menu.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Menu.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    children
  ] }, void 0, true, {
    fileName: "app/components/Menu.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_c22 = AuthMenu;
function UnauthMenu({
  current = "",
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Menu, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MenuItem, { to: "/", isCurrent: current === "", children: "Welcome" }, void 0, false, {
        fileName: "app/components/Menu.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MenuItem, { to: "/login", isCurrent: current === "login", children: "Login" }, void 0, false, {
        fileName: "app/components/Menu.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MenuItem, { to: "/join", isCurrent: current === "join", children: "Signup" }, void 0, false, {
        fileName: "app/components/Menu.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Menu.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    children
  ] }, void 0, true, {
    fileName: "app/components/Menu.tsx",
    lineNumber: 59,
    columnNumber: 10
  }, this);
}
_c32 = UnauthMenu;
var _c3;
var _c22;
var _c32;
$RefreshReg$(_c3, "Menu");
$RefreshReg$(_c22, "AuthMenu");
$RefreshReg$(_c32, "UnauthMenu");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  AuthMenu,
  UnauthMenu
};
//# sourceMappingURL=/build/_shared/chunk-S2QB7PZG.js.map
