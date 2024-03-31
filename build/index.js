var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { abort, pipe } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 46,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response((0, import_node.createReadableStreamFromReadable)(body), {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { abort, pipe } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 88,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response((0, import_node.createReadableStreamFromReadable)(body), {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});

// css-bundle-plugin-ns:@remix-run/css-bundle
var cssBundleHref = "/build/css-bundle-BLR5GAQ3.css";

// app/root.tsx
var import_node3 = require("@remix-run/node"), import_react2 = require("@remix-run/react");

// app/session.server.ts
var import_node2 = require("@remix-run/node"), import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/models/user.server.ts
var import_bcryptjs = __toESM(require("bcryptjs"));

// app/db.server.ts
var import_client = require("@prisma/client");

// app/singleton.server.ts
var singleton = (name, valueFactory) => {
  let g = global;
  return g.__singletons ??= {}, g.__singletons[name] ??= valueFactory(), g.__singletons[name];
};

// app/db.server.ts
var prisma = singleton("prisma", () => new import_client.PrismaClient());
prisma.$connect();

// app/models/user.server.ts
async function getUserById(id) {
  return prisma.user.findUnique({ where: { id } });
}
async function getUserByEmail(email) {
  return prisma.user.findUnique({ where: { email } });
}
async function createUser(email, password) {
  let hashedPassword = await import_bcryptjs.default.hash(password, 10);
  return prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword
        }
      }
    }
  });
}
async function updateUser(id, income) {
  return prisma.user.update({
    where: { id },
    data: { income }
  });
}
async function verifyLogin(email, password) {
  let userWithPassword = await prisma.user.findUnique({
    where: { email },
    include: {
      password: !0
    }
  });
  if (!userWithPassword || !userWithPassword.password || !await import_bcryptjs.default.compare(
    password,
    userWithPassword.password.hash
  ))
    return null;
  let { password: _password, ...userWithoutPassword } = userWithPassword;
  return userWithoutPassword;
}

// app/session.server.ts
(0, import_tiny_invariant.default)(process.env.SESSION_SECRET, "SESSION_SECRET must be set");
var sessionStorage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    httpOnly: !0,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: !1
  }
}), USER_SESSION_KEY = "userId";
async function getSession(request) {
  let cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}
async function getUserId(request) {
  return (await getSession(request)).get(USER_SESSION_KEY);
}
async function getUser(request) {
  let userId = await getUserId(request);
  if (userId === void 0)
    return null;
  let user = await getUserById(userId);
  if (user)
    return user;
  throw await logout(request);
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  let userId = await getUserId(request);
  if (!userId) {
    let searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_node2.redirect)(`/login?${searchParams}`);
  }
  return userId;
}
async function createUserSession({
  request,
  userId,
  remember,
  redirectTo
}) {
  let session = await getSession(request);
  return session.set(USER_SESSION_KEY, userId), (0, import_node2.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: remember ? 60 * 60 * 24 * 7 : void 0
      })
    }
  });
}
async function logout(request) {
  let session = await getSession(request);
  return (0, import_node2.redirect)("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}

// app/components/body.module.css
var body_module_default = { body: "body-module__body__Cev96" };

// app/components/Body.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function Body({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { className: body_module_default.body, children }, void 0, !1, {
    fileName: "app/components/Body.tsx",
    lineNumber: 6,
    columnNumber: 10
  }, this);
}

// app/components/main.module.css
var main_module_default = { main: "main-module__main__D1Dh4" };

// app/components/Main.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Main({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { className: main_module_default.main, children }, void 0, !1, {
    fileName: "app/components/Main.tsx",
    lineNumber: 6,
    columnNumber: 10
  }, this);
}

// app/root.css
var root_default = "/build/_assets/root-EURSU2OV.css";

// app/root.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: root_default },
  ...cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []
], loader = async ({ request }) => (0, import_node3.json)({ user: await getUser(request) }), meta = () => [
  { title: "expens.ee Expense Tracker" }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Body, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Main, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}

// app/routes/expenses.add.tsx
var expenses_add_exports = {};
__export(expenses_add_exports, {
  action: () => action,
  default: () => AddExpense,
  loader: () => loader2,
  meta: () => meta2
});
var import_node4 = require("@remix-run/node"), import_node5 = require("@remix-run/node"), import_react4 = require("@remix-run/react");

// app/models/category.server.ts
function getCategories({ userId }) {
  return prisma.category.findMany({
    where: { userId },
    select: {
      id: !0,
      name: !0,
      color: !0
    },
    orderBy: { name: "asc" }
  });
}
function createCategory({
  name,
  color,
  userId
}) {
  return prisma.category.create({
    data: {
      name,
      color,
      user: {
        connect: {
          id: userId
        }
      }
    }
  });
}

// app/models/expense.server.ts
function getExpenses({ userId }) {
  return prisma.expense.findMany({
    where: { userId },
    select: {
      id: !0,
      item: !0,
      value: !0,
      category: { select: { id: !0, name: !0, color: !0 } }
    },
    orderBy: { updatedAt: "desc" }
  });
}
function getExpensesByCategory({ userId }) {
  return prisma.expense.groupBy({
    by: ["categoryId"],
    where: { userId },
    _sum: { value: !0 }
  });
}
function createExpense({
  item,
  value,
  userId,
  categoryId
}) {
  return prisma.expense.create({
    data: {
      item,
      value,
      user: {
        connect: {
          id: userId
        }
      },
      category: {
        connect: {
          id: categoryId
        }
      }
    }
  });
}

// app/components/Form.tsx
var import_react3 = require("@remix-run/react");

// app/components/Form.module.css
var Form_module_default = { form: "Form-module__form__dbp-z", title: "Form-module__title__J5cY7", label: "Form-module__label__yubsS", labelSpan: "Form-module__labelSpan__ykwZD", input: "Form-module__input__fH8hZ", select: "Form-module__select__Dua1f", optionGroup: "Form-module__optionGroup__Kh6cn", optionName: "Form-module__optionName__AACG9", option: "Form-module__option__akJEP", optionContent: "Form-module__optionContent__Kct3G", buttons: "Form-module__buttons__2B863", submit: "Form-module__submit__Wjii6", cancel: "Form-module__cancel__ipqtU" };

// app/components/Form.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function Form({
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.Form, { className: Form_module_default.form, ...props, children }, void 0, !1, {
    fileName: "app/components/Form.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
function Title({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: Form_module_default.title, children }, void 0, !1, {
    fileName: "app/components/Form.tsx",
    lineNumber: 18,
    columnNumber: 10
  }, this);
}
function Label({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { className: Form_module_default.label, children }, void 0, !1, {
    fileName: "app/components/Form.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
function LabelSpan({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: Form_module_default.labelSpan, children }, void 0, !1, {
    fileName: "app/components/Form.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
function Input(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { className: Form_module_default.input, ...props }, void 0, !1, {
    fileName: "app/components/Form.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
function OptionGroup({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: Form_module_default.optionGroup, children }, void 0, !1, {
    fileName: "app/components/Form.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
function Option(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { className: Form_module_default.option, ...props }, void 0, !1, {
    fileName: "app/components/Form.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
function OptionName(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { className: Form_module_default.optionName, ...props }, void 0, !1, {
    fileName: "app/components/Form.tsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
}
function OptionContent({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: Form_module_default.optionContent, children }, void 0, !1, {
    fileName: "app/components/Form.tsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
}
function Select(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("select", { className: Form_module_default.select, ...props }, void 0, !1, {
    fileName: "app/components/Form.tsx",
    lineNumber: 50,
    columnNumber: 10
  }, this);
}
function Buttons({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: Form_module_default.buttons, children }, void 0, !1, {
    fileName: "app/components/Form.tsx",
    lineNumber: 54,
    columnNumber: 10
  }, this);
}
function Submit(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { className: Form_module_default.submit, ...props }, void 0, !1, {
    fileName: "app/components/Form.tsx",
    lineNumber: 58,
    columnNumber: 10
  }, this);
}
function SubmitLink(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.Link, { className: Form_module_default.submit, ...props }, void 0, !1, {
    fileName: "app/components/Form.tsx",
    lineNumber: 62,
    columnNumber: 10
  }, this);
}
function CancelLink(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.Link, { className: Form_module_default.cancel, ...props }, void 0, !1, {
    fileName: "app/components/Form.tsx",
    lineNumber: 70,
    columnNumber: 10
  }, this);
}

// app/components/Dialog.module.css
var Dialog_module_default = { background: "Dialog-module__background__Ewz7w", dialog: "Dialog-module__dialog__C1oc2" };

// app/components/Dialog.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function Dialog({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("aside", { className: Dialog_module_default.background, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("section", { className: Dialog_module_default.dialog, children }, void 0, !1, {
    fileName: "app/components/Dialog.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Dialog.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/expenses.add.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
async function loader2({ request }) {
  let userId = await requireUserId(request), categories = await getCategories({ userId });
  return (0, import_node5.json)({ categories });
}
async function action({ request }) {
  let userId = await requireUserId(request), formData = await request.formData(), item = formData.get("item"), valueAsString = formData.get("value");
  if (typeof item != "string" || item.length <= 0)
    return (0, import_node5.json)(
      { errors: { title: "Item is required", body: null } },
      { status: 400 }
    );
  if (typeof valueAsString != "string" || parseFloat(valueAsString) <= 0)
    return (0, import_node5.json)(
      { errors: { title: "Value is required", body: null } },
      { status: 400 }
    );
  let value = parseFloat(valueAsString), categoryId;
  switch (formData.get("categoryType")) {
    case "existing" /* Existing */: {
      if (categoryId = formData.get("categoryId"), typeof categoryId != "string" || categoryId.length <= 0)
        return (0, import_node5.json)(
          { errors: { title: "Category selection is required", body: null } },
          { status: 400 }
        );
      break;
    }
    case "new" /* New */: {
      let categoryName = formData.get("name"), categoryColor = formData.get("color");
      if (typeof categoryName != "string" || categoryName.length <= 0)
        return (0, import_node5.json)(
          { errors: { title: "Category name is required", body: null } },
          { status: 400 }
        );
      if (typeof categoryColor != "string" || categoryColor.length !== 7)
        return (0, import_node5.json)(
          { errors: { title: "Category color is required", body: null } },
          { status: 400 }
        );
      categoryId = (await createCategory({
        name: categoryName,
        color: categoryColor,
        userId
      })).id;
      break;
    }
    default:
      return (0, import_node5.json)(
        { errors: { title: "Category must be selected", body: null } },
        { status: 400 }
      );
  }
  return await createExpense({ item, value, userId, categoryId }), (0, import_node4.redirect)("/expenses");
}
var meta2 = () => [{ title: "Add new expense" }];
function AddExpense() {
  let data = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Dialog, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Title, { children: "Add expense" }, void 0, !1, {
      fileName: "app/routes/expenses.add.tsx",
      lineNumber: 108,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Label, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(LabelSpan, { children: "Description" }, void 0, !1, {
        fileName: "app/routes/expenses.add.tsx",
        lineNumber: 110,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Input, { name: "item" }, void 0, !1, {
        fileName: "app/routes/expenses.add.tsx",
        lineNumber: 111,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/expenses.add.tsx",
      lineNumber: 109,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Label, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(LabelSpan, { children: "Amount" }, void 0, !1, {
        fileName: "app/routes/expenses.add.tsx",
        lineNumber: 114,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Input, { name: "value", type: "number" }, void 0, !1, {
        fileName: "app/routes/expenses.add.tsx",
        lineNumber: 115,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/expenses.add.tsx",
      lineNumber: 113,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Label, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(LabelSpan, { children: "Category" }, void 0, !1, {
        fileName: "app/routes/expenses.add.tsx",
        lineNumber: 118,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(OptionGroup, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          Option,
          {
            defaultChecked: !0,
            id: "cat-exist",
            type: "radio",
            name: "categoryType",
            value: "existing" /* Existing */
          },
          void 0,
          !1,
          {
            fileName: "app/routes/expenses.add.tsx",
            lineNumber: 120,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(OptionName, { htmlFor: "cat-exist", children: "Select existing category" }, void 0, !1, {
          fileName: "app/routes/expenses.add.tsx",
          lineNumber: 127,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(OptionContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Select, { name: "categoryId", children: data.categories.map(({ name, id }) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: id, children: name }, id, !1, {
          fileName: "app/routes/expenses.add.tsx",
          lineNumber: 133,
          columnNumber: 19
        }, this)) }, void 0, !1, {
          fileName: "app/routes/expenses.add.tsx",
          lineNumber: 131,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/expenses.add.tsx",
          lineNumber: 130,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/expenses.add.tsx",
        lineNumber: 119,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(OptionGroup, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          Option,
          {
            id: "cat-new",
            type: "radio",
            name: "categoryType",
            value: "new" /* New */
          },
          void 0,
          !1,
          {
            fileName: "app/routes/expenses.add.tsx",
            lineNumber: 141,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(OptionName, { htmlFor: "cat-new", children: "Create new category" }, void 0, !1, {
          fileName: "app/routes/expenses.add.tsx",
          lineNumber: 147,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(OptionContent, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Label, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(LabelSpan, { children: "Category name" }, void 0, !1, {
              fileName: "app/routes/expenses.add.tsx",
              lineNumber: 152,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Input, { name: "name" }, void 0, !1, {
              fileName: "app/routes/expenses.add.tsx",
              lineNumber: 153,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/expenses.add.tsx",
            lineNumber: 151,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Label, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(LabelSpan, { children: "Color" }, void 0, !1, {
              fileName: "app/routes/expenses.add.tsx",
              lineNumber: 156,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Input, { name: "color", type: "color" }, void 0, !1, {
              fileName: "app/routes/expenses.add.tsx",
              lineNumber: 157,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/expenses.add.tsx",
            lineNumber: 155,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/expenses.add.tsx",
          lineNumber: 150,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/expenses.add.tsx",
        lineNumber: 140,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/expenses.add.tsx",
      lineNumber: 117,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Buttons, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CancelLink, { to: "..", children: "Cancel" }, void 0, !1, {
        fileName: "app/routes/expenses.add.tsx",
        lineNumber: 163,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Submit, { children: "Add" }, void 0, !1, {
        fileName: "app/routes/expenses.add.tsx",
        lineNumber: 164,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/expenses.add.tsx",
      lineNumber: 162,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/expenses.add.tsx",
    lineNumber: 107,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/expenses.add.tsx",
    lineNumber: 106,
    columnNumber: 5
  }, this);
}

// app/routes/expenses.tsx
var expenses_exports = {};
__export(expenses_exports, {
  default: () => ExpensesPage,
  loader: () => loader3,
  meta: () => meta3
});
var import_node6 = require("@remix-run/node"), import_react7 = require("@remix-run/react");

// app/components/Expenses.module.css
var Expenses_module_default = { row: "Expenses-module__row__Vcne-", tag: "Expenses-module__tag__oy-fk", item: "Expenses-module__item__-1kMd", value: "Expenses-module__value__Dwm9Y", list: "Expenses-module__list__2k-sS" };

// app/components/Expenses.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function List({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("section", { className: Expenses_module_default.list, children }, void 0, !1, {
    fileName: "app/components/Expenses.tsx",
    lineNumber: 11,
    columnNumber: 10
  }, this);
}
function ExpenseItem({ item, category, value }) {
  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: Expenses_module_default.row, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: Expenses_module_default.item, children: item }, void 0, !1, {
      fileName: "app/components/Expenses.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: Expenses_module_default.tag, style: { backgroundColor: category.color }, children: category.name }, void 0, !1, {
      fileName: "app/components/Expenses.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: Expenses_module_default.value, children: formatter.format(value) }, void 0, !1, {
      fileName: "app/components/Expenses.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Expenses.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/components/FormMenuItem.tsx
var import_react5 = require("@remix-run/react");

// app/components/menu.module.css
var menu_module_default = { nav: "menu-module__nav__9ew2E", navList: "menu-module__navList__nrcXI", navListItem: "menu-module__navListItem__GzJMv", navButton: "menu-module__navButton__y-BZp", navLink: "menu-module__navLink__flTno", navLinkCurrent: "menu-module__navLinkCurrent__H535-" };

// app/components/FormMenuItem.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function FormMenuItem({
  to,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("li", { className: menu_module_default.navListItem, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react5.Form, { method: "post", action: to, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { className: menu_module_default.navButton, children }, void 0, !1, {
    fileName: "app/components/FormMenuItem.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/FormMenuItem.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/FormMenuItem.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/components/MenuItem.tsx
var import_react6 = require("@remix-run/react");
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function MenuItem({ to, children, isCurrent = !1 }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("li", { className: menu_module_default.navListItem, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    import_react6.Link,
    {
      to,
      className: isCurrent ? menu_module_default.navLinkCurrent : menu_module_default.navLink,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/MenuItem.tsx",
      lineNumber: 14,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/MenuItem.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/components/Menu.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function Menu({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("nav", { className: menu_module_default.nav, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    "ul",
    {
      "data-foo": `foo ${Object.keys(menu_module_default).join(",")}`,
      className: menu_module_default.navList,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/Menu.tsx",
      lineNumber: 10,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/Menu.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
function AuthMenu({ current = "", children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Menu, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(MenuItem, { to: "/", isCurrent: current === "", children: "Dashboard" }, void 0, !1, {
        fileName: "app/components/Menu.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(MenuItem, { to: "/income", isCurrent: current === "income", children: "Income" }, void 0, !1, {
        fileName: "app/components/Menu.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(MenuItem, { to: "/expenses", isCurrent: current === "expenses", children: "Expenses" }, void 0, !1, {
        fileName: "app/components/Menu.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(FormMenuItem, { to: "/logout", children: "Log out" }, void 0, !1, {
        fileName: "app/components/Menu.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Menu.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    children
  ] }, void 0, !0, {
    fileName: "app/components/Menu.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
function UnauthMenu({ current = "", children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Menu, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(MenuItem, { to: "/", isCurrent: current === "", children: "Welcome" }, void 0, !1, {
        fileName: "app/components/Menu.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(MenuItem, { to: "/login", isCurrent: current === "login", children: "Login" }, void 0, !1, {
        fileName: "app/components/Menu.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(MenuItem, { to: "/join", isCurrent: current === "join", children: "Signup" }, void 0, !1, {
        fileName: "app/components/Menu.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Menu.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    children
  ] }, void 0, !0, {
    fileName: "app/components/Menu.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}

// app/routes/expenses.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
async function loader3({ request }) {
  let userId = await requireUserId(request), expenses = await getExpenses({ userId });
  return (0, import_node6.json)({ expenses });
}
var meta3 = () => [{ title: "Expenses" }];
function ExpensesPage() {
  let data = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(AuthMenu, { current: "expenses", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Form, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Title, { children: "Expenses" }, void 0, !1, {
        fileName: "app/routes/expenses.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(List, { children: data.expenses.map((expense) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(ExpenseItem, { ...expense }, expense.id, !1, {
        fileName: "app/routes/expenses.tsx",
        lineNumber: 26,
        columnNumber: 13
      }, this)) }, void 0, !1, {
        fileName: "app/routes/expenses.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(SubmitLink, { to: "add", children: "Add new expense" }, void 0, !1, {
        fileName: "app/routes/expenses.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/expenses.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react7.Outlet, {}, void 0, !1, {
      fileName: "app/routes/expenses.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/expenses.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader4
});
var import_node7 = require("@remix-run/node"), import_react10 = require("@remix-run/react");

// app/components/Balance.module.css
var Balance_module_default = { wrapper: "Balance-module__wrapper__WnVzj", heading: "Balance-module__heading__fzRMO", amount: "Balance-module__amount__-f0BT" };

// app/components/Balance.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function Balance({ amount }) {
  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("section", { className: Balance_module_default.wrapper, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: Balance_module_default.heading, children: "Balance" }, void 0, !1, {
      fileName: "app/components/Balance.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: Balance_module_default.amount, children: formatter.format(amount) }, void 0, !1, {
      fileName: "app/components/Balance.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Balance.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/components/PieChart.module.css
var PieChart_module_default = { wrapper: "PieChart-module__wrapper__ANwBi", pie: "PieChart-module__pie__lGbIb", legend: "PieChart-module__legend__FvU3K", label: "PieChart-module__label__5El2n", dot: "PieChart-module__dot__pCAT8" };

// app/components/PieChart.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function PieChart({ items }) {
  items.sort(({ value: a }, { value: b }) => b - a);
  let sum = items.reduce((a, { value }) => a + value, 0), incremental = items.reduce((list, { value }) => [...list, list[list.length - 1] + value], [0]).slice(1), gradient = `conic-gradient(${Object.values(incremental).map(
    (value, index) => [
      [items[index].color, 0].join(" "),
      [items[index].color, `${value / sum}turn`].join(" ")
    ]
  ).flat().join(",")})`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("section", { className: PieChart_module_default.wrapper, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: PieChart_module_default.pie, style: { backgroundImage: gradient } }, void 0, !1, {
      fileName: "app/components/PieChart.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("ul", { className: PieChart_module_default.legend, children: items.map(
      ({ name, color, value }) => value > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { className: PieChart_module_default.label, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { style: { backgroundColor: color }, className: PieChart_module_default.dot }, void 0, !1, {
          fileName: "app/components/PieChart.tsx",
          lineNumber: 29,
          columnNumber: 15
        }, this),
        name
      ] }, name, !0, {
        fileName: "app/components/PieChart.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this) : null
    ) }, void 0, !1, {
      fileName: "app/components/PieChart.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/PieChart.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}
var PieChart_default = PieChart;

// app/utils.ts
var import_react8 = require("@remix-run/react"), import_react9 = require("react"), DEFAULT_REDIRECT = "/";
function safeRedirect(to, defaultRedirect = DEFAULT_REDIRECT) {
  return !to || typeof to != "string" || !to.startsWith("/") || to.startsWith("//") ? defaultRedirect : to;
}
function useMatchesData(id) {
  let matchingRoutes = (0, import_react8.useMatches)();
  return (0, import_react9.useMemo)(
    () => matchingRoutes.find((route2) => route2.id === id),
    [matchingRoutes, id]
  )?.data;
}
function isUser(user) {
  return user != null && typeof user == "object" && "email" in user && typeof user.email == "string";
}
function useOptionalUser() {
  let data = useMatchesData("root");
  if (!(!data || !isUser(data.user)))
    return data.user;
}
function useUser() {
  let maybeUser = useOptionalUser();
  if (!maybeUser)
    throw new Error(
      "No user found in root loader, but user is required by useUser. If user is optional, try useOptionalUser instead."
    );
  return maybeUser;
}
function validateEmail(email) {
  return typeof email == "string" && email.length > 3 && email.includes("@");
}

// app/routes/_index.tsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
async function loader4({ request }) {
  let userId = await getUserId(request);
  if (!userId)
    return (0, import_node7.json)({ categories: [] });
  let categoriesWithoutExpenses = await getCategories({ userId }), expensesByCategory = await getExpensesByCategory({ userId }), categories = categoriesWithoutExpenses.map((category) => ({
    ...category,
    value: expensesByCategory.find(({ categoryId }) => categoryId === category.id)?._sum.value || 0
  }));
  return (0, import_node7.json)({ categories });
}
function Dashboard({ user }) {
  let data = (0, import_react10.useLoaderData)(), expenseSum = data.categories.reduce((sum, { value }) => sum + value, 0), balance = user.income - expenseSum;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(AuthMenu, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Balance, { amount: balance }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(PieChart_default, { items: data.categories }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}
function Welcome() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(UnauthMenu, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h1", { children: "Welcome" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { children: [
      "Welcome to the ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("strong", { children: "Expens.ee" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 46,
        columnNumber: 24
      }, this),
      " Expense Tracker application."
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { children: [
      "Please ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react10.Link, { to: "/login", children: "login" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 49,
        columnNumber: 16
      }, this),
      " or",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react10.Link, { to: "/join", children: "create a user" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      "."
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}
function Index() {
  let user = useOptionalUser();
  return user ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Dashboard, { user }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 58,
    columnNumber: 17
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Welcome, {}, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 58,
    columnNumber: 45
  }, this);
}

// app/routes/income.tsx
var income_exports = {};
__export(income_exports, {
  action: () => action2,
  default: () => Income,
  meta: () => meta4
});

// app/components/IncomeInput.module.css
var IncomeInput_module_default = { wrapper: "IncomeInput-module__wrapper__IE0oV", heading: "IncomeInput-module__heading__O3WRy", amount: "IncomeInput-module__amount__e7w4h" };

// app/components/IncomeInput.tsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function IncomeInput(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("section", { className: IncomeInput_module_default.wrapper, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: IncomeInput_module_default.heading, children: "Income" }, void 0, !1, {
      fileName: "app/components/IncomeInput.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("input", { type: "number", name: "income", className: IncomeInput_module_default.amount, ...props }, void 0, !1, {
      fileName: "app/components/IncomeInput.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/IncomeInput.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/income.tsx
var import_node8 = require("@remix-run/node");
var import_react11 = require("@remix-run/react"), import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
async function action2({ request }) {
  let userId = await requireUserId(request), incomeAsString = (await request.formData()).get("income");
  if (typeof incomeAsString != "string" || parseFloat(incomeAsString) <= 0)
    return (0, import_node8.json)(
      { errors: { title: "Income is required", body: null } },
      { status: 400 }
    );
  let income = parseFloat(incomeAsString);
  return await updateUser(userId, income), null;
}
var meta4 = () => [{ title: "Update Income" }];
function Income() {
  let { income } = useUser();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(AuthMenu, { current: "income", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react11.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(IncomeInput, { defaultValue: income }, void 0, !1, {
    fileName: "app/routes/income.tsx",
    lineNumber: 36,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/income.tsx",
    lineNumber: 35,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/income.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action3,
  loader: () => loader5
});
var import_node9 = require("@remix-run/node");
async function action3({ request }) {
  return logout(request);
}
async function loader5() {
  return (0, import_node9.redirect)("/");
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action4,
  default: () => LoginPage,
  loader: () => loader6,
  meta: () => meta5
});
var import_node10 = require("@remix-run/node"), import_react12 = require("@remix-run/react");
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
async function loader6({ request }) {
  return await getUserId(request) ? (0, import_node10.redirect)("/") : (0, import_node10.json)({});
}
async function action4({ request }) {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), redirectTo = safeRedirect(formData.get("redirectTo"), "/"), remember = formData.get("remember");
  if (!validateEmail(email))
    return (0, import_node10.json)(
      { errors: { email: "Email is invalid", password: null } },
      { status: 400 }
    );
  if (typeof password != "string" || password.length === 0)
    return (0, import_node10.json)(
      { errors: { email: null, password: "Password is required" } },
      { status: 400 }
    );
  if (password.length < 8)
    return (0, import_node10.json)(
      { errors: { email: null, password: "Password is too short" } },
      { status: 400 }
    );
  let user = await verifyLogin(email, password);
  return user ? createUserSession({
    request,
    userId: user.id,
    remember: remember === "on",
    redirectTo
  }) : (0, import_node10.json)(
    { errors: { email: "Invalid email or password", password: null } },
    { status: 400 }
  );
}
var meta5 = () => [{ title: "Login" }];
function LoginPage() {
  let [searchParams] = (0, import_react12.useSearchParams)(), redirectTo = searchParams.get("redirectTo") || "/";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(UnauthMenu, { current: "login", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Title, { children: "Log in" }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 75,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: redirectTo }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 76,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Label, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(LabelSpan, { children: "Email" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 78,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
        Input,
        {
          name: "email",
          type: "email",
          required: !0,
          autoComplete: "email"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 79,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 77,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Label, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(LabelSpan, { children: "Password" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 87,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
        Input,
        {
          name: "password",
          type: "password",
          required: !0,
          autoComplete: "current-password"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 88,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 86,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Buttons, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Submit, { children: "Log in" }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 96,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 95,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { children: [
      "Don't have an account?",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
        import_react12.Link,
        {
          to: {
            pathname: "/join",
            search: searchParams.toString()
          },
          children: "Create one"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 100,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 98,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 74,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 73,
    columnNumber: 5
  }, this);
}

// app/routes/join.tsx
var join_exports = {};
__export(join_exports, {
  action: () => action5,
  default: () => Join,
  loader: () => loader7,
  meta: () => meta6
});
var import_node11 = require("@remix-run/node"), import_react13 = require("@remix-run/react");
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
async function loader7({ request }) {
  return await getUserId(request) ? (0, import_node11.redirect)("/") : (0, import_node11.json)({});
}
async function action5({ request }) {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), redirectTo = safeRedirect(formData.get("redirectTo"), "/");
  if (!validateEmail(email))
    return (0, import_node11.json)(
      { errors: { email: "Email is invalid", password: null } },
      { status: 400 }
    );
  if (typeof password != "string" || password.length === 0)
    return (0, import_node11.json)(
      { errors: { email: null, password: "Password is required" } },
      { status: 400 }
    );
  if (password.length < 8)
    return (0, import_node11.json)(
      { errors: { email: null, password: "Password is too short" } },
      { status: 400 }
    );
  if (await getUserByEmail(email))
    return (0, import_node11.json)(
      {
        errors: {
          email: "A user already exists with this email",
          password: null
        }
      },
      { status: 400 }
    );
  let user = await createUser(email, password);
  return createUserSession({
    request,
    userId: user.id,
    remember: !1,
    redirectTo
  });
}
var meta6 = () => [{ title: "Sign Up" }];
function Join() {
  let [searchParams] = (0, import_react13.useSearchParams)(), redirectTo = searchParams.get("redirectTo") ?? void 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(UnauthMenu, { current: "join", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Title, { children: "Create an account" }, void 0, !1, {
      fileName: "app/routes/join.tsx",
      lineNumber: 81,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: redirectTo }, void 0, !1, {
      fileName: "app/routes/join.tsx",
      lineNumber: 82,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Label, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(LabelSpan, { children: "Email" }, void 0, !1, {
        fileName: "app/routes/join.tsx",
        lineNumber: 84,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        Input,
        {
          name: "email",
          type: "email",
          required: !0,
          autoComplete: "email"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/join.tsx",
          lineNumber: 85,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/join.tsx",
      lineNumber: 83,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Label, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(LabelSpan, { children: "Password" }, void 0, !1, {
        fileName: "app/routes/join.tsx",
        lineNumber: 93,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        Input,
        {
          name: "password",
          type: "password",
          required: !0,
          autoComplete: "new-password"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/join.tsx",
          lineNumber: 94,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/join.tsx",
      lineNumber: 92,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Buttons, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Submit, { children: "Create account" }, void 0, !1, {
      fileName: "app/routes/join.tsx",
      lineNumber: 102,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/join.tsx",
      lineNumber: 101,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { children: [
      "Already have an account?",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        import_react13.Link,
        {
          to: {
            pathname: "/login",
            search: searchParams.toString()
          },
          children: "Log in"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/join.tsx",
          lineNumber: 106,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/join.tsx",
      lineNumber: 104,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/join.tsx",
    lineNumber: 80,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/join.tsx",
    lineNumber: 79,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-AHRW5NFU.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-ZOOUEK4P.js", "/build/_shared/chunk-6NCDYVQE.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-ASZOF4RX.js", imports: ["/build/_shared/chunk-2LTVY2GU.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-P5VLQWWV.js", imports: ["/build/_shared/chunk-ONT4HJR4.js", "/build/_shared/chunk-7BIZISQA.js", "/build/_shared/chunk-FZ45DFXG.js", "/build/_shared/chunk-S2QB7PZG.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/expenses": { id: "routes/expenses", parentId: "root", path: "expenses", index: void 0, caseSensitive: void 0, module: "/build/routes/expenses-7ANSWODP.js", imports: ["/build/_shared/chunk-7BIZISQA.js", "/build/_shared/chunk-IHKL7BYE.js", "/build/_shared/chunk-S2QB7PZG.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/expenses.add": { id: "routes/expenses.add", parentId: "routes/expenses", path: "add", index: void 0, caseSensitive: void 0, module: "/build/routes/expenses.add-OK4TMBAH.js", imports: ["/build/_shared/chunk-ONT4HJR4.js", "/build/_shared/chunk-2LTVY2GU.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/income": { id: "routes/income", parentId: "root", path: "income", index: void 0, caseSensitive: void 0, module: "/build/routes/income-PS754WMB.js", imports: ["/build/_shared/chunk-G3ACJGOK.js", "/build/_shared/chunk-FZ45DFXG.js", "/build/_shared/chunk-S2QB7PZG.js"], hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/join": { id: "routes/join", parentId: "root", path: "join", index: void 0, caseSensitive: void 0, module: "/build/routes/join-QP7Y34LC.js", imports: ["/build/_shared/chunk-IHKL7BYE.js", "/build/_shared/chunk-G3ACJGOK.js", "/build/_shared/chunk-FZ45DFXG.js", "/build/_shared/chunk-S2QB7PZG.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-BY2QDX7U.js", imports: ["/build/_shared/chunk-IHKL7BYE.js", "/build/_shared/chunk-G3ACJGOK.js", "/build/_shared/chunk-FZ45DFXG.js", "/build/_shared/chunk-S2QB7PZG.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-GGSXPJWV.js", imports: void 0, hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 } }, version: "b6070a4f", hmr: { runtime: "/build/_shared/chunk-6NCDYVQE.js", timestamp: 1700513203823 }, url: "/build/manifest-B6070A4F.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/expenses.add": {
    id: "routes/expenses.add",
    parentId: "routes/expenses",
    path: "add",
    index: void 0,
    caseSensitive: void 0,
    module: expenses_add_exports
  },
  "routes/expenses": {
    id: "routes/expenses",
    parentId: "root",
    path: "expenses",
    index: void 0,
    caseSensitive: void 0,
    module: expenses_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/income": {
    id: "routes/income",
    parentId: "root",
    path: "income",
    index: void 0,
    caseSensitive: void 0,
    module: income_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/join": {
    id: "routes/join",
    parentId: "root",
    path: "join",
    index: void 0,
    caseSensitive: void 0,
    module: join_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
