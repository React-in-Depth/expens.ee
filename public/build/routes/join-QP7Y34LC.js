import {
  Buttons,
  Form,
  Input,
  Label,
  LabelSpan,
  Submit,
  Title
} from "/build/_shared/chunk-IHKL7BYE.js";
import {
  require_user
} from "/build/_shared/chunk-G3ACJGOK.js";
import "/build/_shared/chunk-FZ45DFXG.js";
import {
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
  useSearchParams
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

// app/routes/join.tsx
var import_node = __toESM(require_node());
var import_session = __toESM(require_session());
var import_user = __toESM(require_user());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/join.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/join.tsx"
  );
  import.meta.hot.lastModified = "1700408433495.5996";
}
var meta = () => [{
  title: "Sign Up"
}];
function Join() {
  _s();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? void 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UnauthMenu, { current: "join", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "Create an account" }, void 0, false, {
      fileName: "app/routes/join.tsx",
      lineNumber: 101,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: redirectTo }, void 0, false, {
      fileName: "app/routes/join.tsx",
      lineNumber: 102,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LabelSpan, { children: "Email" }, void 0, false, {
        fileName: "app/routes/join.tsx",
        lineNumber: 104,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "email", type: "email", required: true, autoComplete: "email" }, void 0, false, {
        fileName: "app/routes/join.tsx",
        lineNumber: 105,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/join.tsx",
      lineNumber: 103,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LabelSpan, { children: "Password" }, void 0, false, {
        fileName: "app/routes/join.tsx",
        lineNumber: 108,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "password", type: "password", required: true, autoComplete: "new-password" }, void 0, false, {
        fileName: "app/routes/join.tsx",
        lineNumber: 109,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/join.tsx",
      lineNumber: 107,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Buttons, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Submit, { children: "Create account" }, void 0, false, {
      fileName: "app/routes/join.tsx",
      lineNumber: 112,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/join.tsx",
      lineNumber: 111,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      "Already have an account?",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: {
        pathname: "/login",
        search: searchParams.toString()
      }, children: "Log in" }, void 0, false, {
        fileName: "app/routes/join.tsx",
        lineNumber: 116,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/join.tsx",
      lineNumber: 114,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/join.tsx",
    lineNumber: 100,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/join.tsx",
    lineNumber: 99,
    columnNumber: 10
  }, this);
}
_s(Join, "HWxNQEGJGSlsPJ3ubBB3081mtng=", false, function() {
  return [useSearchParams];
});
_c = Join;
var _c;
$RefreshReg$(_c, "Join");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Join as default,
  meta
};
//# sourceMappingURL=/build/routes/join-QP7Y34LC.js.map
