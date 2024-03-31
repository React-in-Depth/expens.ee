import {
  require_category
} from "/build/_shared/chunk-ONT4HJR4.js";
import {
  require_expense
} from "/build/_shared/chunk-7BIZISQA.js";
import {
  Buttons,
  CancelLink,
  Form,
  Input,
  Label,
  LabelSpan,
  Option,
  OptionContent,
  OptionGroup,
  OptionName,
  Select,
  Submit,
  Title
} from "/build/_shared/chunk-IHKL7BYE.js";
import {
  require_node,
  require_session
} from "/build/_shared/chunk-2LTVY2GU.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
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

// app/routes/expenses.add.tsx
var import_node = __toESM(require_node());
var import_node2 = __toESM(require_node());
var import_category = __toESM(require_category());
var import_expense = __toESM(require_expense());
var import_session = __toESM(require_session());

// app/components/Dialog.module.css
var Dialog_module_default = { "background": "Dialog-module__background__Ewz7w", "dialog": "Dialog-module__dialog__C1oc2" };

// app/components/Dialog.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Dialog.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Dialog.tsx"
  );
}
function Dialog({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", { className: Dialog_module_default.background, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: Dialog_module_default.dialog, children }, void 0, false, {
    fileName: "app/components/Dialog.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Dialog.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c = Dialog;
var _c;
$RefreshReg$(_c, "Dialog");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/expenses.add.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/expenses.add.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/expenses.add.tsx"
  );
  import.meta.hot.lastModified = "1700512623309.3254";
}
var CategoryType = /* @__PURE__ */ function(CategoryType2) {
  CategoryType2["Existing"] = "existing";
  CategoryType2["New"] = "new";
  return CategoryType2;
}(CategoryType || {});
var meta = () => [{
  title: "Add new expense"
}];
function AddExpense() {
  _s();
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dialog, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Title, { children: "Add expense" }, void 0, false, {
      fileName: "app/routes/expenses.add.tsx",
      lineNumber: 150,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LabelSpan, { children: "Description" }, void 0, false, {
        fileName: "app/routes/expenses.add.tsx",
        lineNumber: 152,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { name: "item" }, void 0, false, {
        fileName: "app/routes/expenses.add.tsx",
        lineNumber: 153,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/expenses.add.tsx",
      lineNumber: 151,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LabelSpan, { children: "Amount" }, void 0, false, {
        fileName: "app/routes/expenses.add.tsx",
        lineNumber: 156,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { name: "value", type: "number" }, void 0, false, {
        fileName: "app/routes/expenses.add.tsx",
        lineNumber: 157,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/expenses.add.tsx",
      lineNumber: 155,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LabelSpan, { children: "Category" }, void 0, false, {
        fileName: "app/routes/expenses.add.tsx",
        lineNumber: 160,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(OptionGroup, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Option, { defaultChecked: true, id: "cat-exist", type: "radio", name: "categoryType", value: CategoryType.Existing }, void 0, false, {
          fileName: "app/routes/expenses.add.tsx",
          lineNumber: 162,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(OptionName, { htmlFor: "cat-exist", children: "Select existing category" }, void 0, false, {
          fileName: "app/routes/expenses.add.tsx",
          lineNumber: 163,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(OptionContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Select, { name: "categoryId", children: data.categories.map(({
          name,
          id
        }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: id, children: name }, id, false, {
          fileName: "app/routes/expenses.add.tsx",
          lineNumber: 171,
          columnNumber: 21
        }, this)) }, void 0, false, {
          fileName: "app/routes/expenses.add.tsx",
          lineNumber: 167,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/expenses.add.tsx",
          lineNumber: 166,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/expenses.add.tsx",
        lineNumber: 161,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(OptionGroup, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Option, { id: "cat-new", type: "radio", name: "categoryType", value: CategoryType.New }, void 0, false, {
          fileName: "app/routes/expenses.add.tsx",
          lineNumber: 178,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(OptionName, { htmlFor: "cat-new", children: "Create new category" }, void 0, false, {
          fileName: "app/routes/expenses.add.tsx",
          lineNumber: 179,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(OptionContent, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LabelSpan, { children: "Category name" }, void 0, false, {
              fileName: "app/routes/expenses.add.tsx",
              lineNumber: 184,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { name: "name" }, void 0, false, {
              fileName: "app/routes/expenses.add.tsx",
              lineNumber: 185,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/expenses.add.tsx",
            lineNumber: 183,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LabelSpan, { children: "Color" }, void 0, false, {
              fileName: "app/routes/expenses.add.tsx",
              lineNumber: 188,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { name: "color", type: "color" }, void 0, false, {
              fileName: "app/routes/expenses.add.tsx",
              lineNumber: 189,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/expenses.add.tsx",
            lineNumber: 187,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/expenses.add.tsx",
          lineNumber: 182,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/expenses.add.tsx",
        lineNumber: 177,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/expenses.add.tsx",
      lineNumber: 159,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Buttons, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CancelLink, { to: "..", children: "Cancel" }, void 0, false, {
        fileName: "app/routes/expenses.add.tsx",
        lineNumber: 195,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Submit, { children: "Add" }, void 0, false, {
        fileName: "app/routes/expenses.add.tsx",
        lineNumber: 196,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/expenses.add.tsx",
      lineNumber: 194,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/expenses.add.tsx",
    lineNumber: 149,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/expenses.add.tsx",
    lineNumber: 148,
    columnNumber: 10
  }, this);
}
_s(AddExpense, "5thj+e1edPyRpKif1JmVRC6KArE=", false, function() {
  return [useLoaderData];
});
_c2 = AddExpense;
var _c2;
$RefreshReg$(_c2, "AddExpense");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AddExpense as default,
  meta
};
//# sourceMappingURL=/build/routes/expenses.add-OK4TMBAH.js.map
