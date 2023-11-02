var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
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
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 42,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 92,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});

// node_modules/@shopify/polaris/build/esm/styles.css
var styles_default = "/build/_assets/styles-GHMUJELA.css";

// app/root.jsx
import { AppProvider, Banner, ProgressBar, Page, Card, Text, BlockStack, InlineStack, TextField, Button, FooterHelp, Link, PageActions, Grid } from "@shopify/polaris";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts
} from "@remix-run/react";
import { useState } from "react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [{ rel: "stylesheet", href: styles_default }];
function App() {
  let emptyPeople = {
    name: "",
    phone: "+44"
  }, [people, setPeople] = useState([emptyPeople]), [sendProgress, setProgress] = useState(0), [currentInvite, setCurrentInvite] = useState(0), [showProgress, setShowProgress] = useState(!1), knuthShuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }, handleNameChange = (newValue, index) => {
    setPeople((prevState) => prevState.map((item, psIndex) => psIndex === index ? {
      name: newValue,
      phone: item.phone
    } : item));
  }, handlePhoneChange = (newValue, index) => {
    setPeople((prevState) => prevState.map((item, psIndex) => psIndex === index ? {
      name: item.name,
      phone: newValue
    } : item));
  }, handleDelete = (index) => {
    setPeople((people2) => people2.filter((item, ogIndex) => index !== ogIndex));
  }, handleSend = async () => {
    if (people.length > 1) {
      let shuffledPeople = knuthShuffle(people), matches = shuffledPeople.map((santa, index) => {
        let receiver = shuffledPeople[index + 1] || shuffledPeople[0];
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
      setShowProgress(!0);
      for (let [index, person] of matches.entries()) {
        setCurrentInvite(index + 1), setProgress(parseInt((index + 1) / people.length * 100));
        let messages = await (await fetch("/send", {
          method: "POST",
          mode: "cors",
          body: JSON.stringify({
            to: person.toPhone,
            message: person.message
          })
        })).json();
      }
      setShowProgress(!1);
    }
  }, progressMarkup = showProgress && /* @__PURE__ */ jsxDEV2(Banner, { title: "Sending...", children: [
    /* @__PURE__ */ jsxDEV2(Text, { children: [
      "Invite ",
      currentInvite,
      " of ",
      people.length
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 102,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2(ProgressBar, { progress: sendProgress }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 103,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 101,
    columnNumber: 3
  }, this);
  return /* @__PURE__ */ jsxDEV2("html", { children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 110,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("link", { rel: "preconnect", href: "https://fonts.googleapis.com/" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 111,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("link", { rel: "preconnect", href: "https://fonts.gstatic.com/", crossOrigin: "anonymous" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 112,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("link", { href: "https://fonts.googleapis.com/css2?family=Inter:wght@450;550;650;700&display=swap" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 113,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 114,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 109,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(AppProvider, { children: /* @__PURE__ */ jsxDEV2(
        Page,
        {
          title: "\u{1F92B} Secret SMS Santa \u{1F385}\u{1F3FB}",
          primaryAction: /* @__PURE__ */ jsxDEV2(Button, { variant: "primary", onClick: handleSend, children: [
            "Send ",
            people.length,
            " Invites"
          ] }, void 0, !0, {
            fileName: "app/root.jsx",
            lineNumber: 120,
            columnNumber: 28
          }, this),
          children: [
            /* @__PURE__ */ jsxDEV2(BlockStack, { gap: "500", children: [
              /* @__PURE__ */ jsxDEV2(Text, { as: "p", variant: "bodyMd", children: "Add your participants below, then click the button above to send the SMS invites." }, void 0, !1, {
                fileName: "app/root.jsx",
                lineNumber: 123,
                columnNumber: 15
              }, this),
              progressMarkup,
              /* @__PURE__ */ jsxDEV2(Grid, { children: people.map(
                (person, index) => /* @__PURE__ */ jsxDEV2(Grid.Cell, { columnSpan: { xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }, children: /* @__PURE__ */ jsxDEV2(Card, { children: [
                  /* @__PURE__ */ jsxDEV2(InlineStack, { align: "space-between", children: [
                    /* @__PURE__ */ jsxDEV2(Text, { as: "h2", variant: "headingSm", children: [
                      "Person #",
                      index + 1
                    ] }, void 0, !0, {
                      fileName: "app/root.jsx",
                      lineNumber: 133,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV2(
                      Link,
                      {
                        monochrome: !0,
                        onClick: () => {
                          handleDelete(index);
                        },
                        children: "Delete"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/root.jsx",
                        lineNumber: 134,
                        columnNumber: 25
                      },
                      this
                    )
                  ] }, void 0, !0, {
                    fileName: "app/root.jsx",
                    lineNumber: 132,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV2(
                    TextField,
                    {
                      label: "Name",
                      value: person.name,
                      onChange: (val) => {
                        handleNameChange(val, index);
                      },
                      autoComplete: "off"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/root.jsx",
                      lineNumber: 141,
                      columnNumber: 23
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV2(
                    TextField,
                    {
                      label: "Phone Number",
                      value: person.phone,
                      onChange: (val) => {
                        handlePhoneChange(val, index);
                      },
                      type: "tel",
                      autoComplete: "off"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/root.jsx",
                      lineNumber: 149,
                      columnNumber: 23
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/root.jsx",
                  lineNumber: 131,
                  columnNumber: 21
                }, this) }, index, !1, {
                  fileName: "app/root.jsx",
                  lineNumber: 130,
                  columnNumber: 17
                }, this)
              ) }, void 0, !1, {
                fileName: "app/root.jsx",
                lineNumber: 127,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV2(
                PageActions,
                {
                  secondaryActions: [
                    {
                      content: "Add person",
                      onAction: () => {
                        setPeople([...people, emptyPeople]);
                      }
                    }
                  ]
                },
                void 0,
                !1,
                {
                  fileName: "app/root.jsx",
                  lineNumber: 163,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/root.jsx",
              lineNumber: 122,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV2(FooterHelp, { children: [
              "Built by ",
              " ",
              /* @__PURE__ */ jsxDEV2(Link, { url: "https://www.stephenkeable.co.uk", children: "Stephen Keable" }, void 0, !1, {
                fileName: "app/root.jsx",
                lineNumber: 176,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/root.jsx",
              lineNumber: 174,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/root.jsx",
          lineNumber: 118,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 117,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 182,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 184,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 185,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 116,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 108,
    columnNumber: 5
  }, this);
}

// app/routes/send.jsx
var send_exports = {};
__export(send_exports, {
  action: () => action
});
import twilio from "twilio";
import { json } from "@remix-run/node";
var action = async ({
  request
}) => {
  if (request.method !== "POST")
    return json({ message: "Method not allowed" }, 405);
  let payload = await request.json(), accountSid = process.env.TWILIO_SID, authToken = process.env.TWILIO_TOKEN, client = twilio(accountSid, authToken);
  try {
    let message = await client.messages.create({
      body: payload.message,
      from: "+447700170519",
      to: payload.to
    });
    return json({ success: !0, messageSid: message.sid }, 200);
  } catch (error) {
    return json({ success: !1, error }, 200);
  }
};

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-XP6GCI27.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-YNGWI6MU.js", "/build/_shared/chunk-Q4FQXG6T.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-54HNFE4G.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/send": { id: "routes/send", parentId: "root", path: "send", index: void 0, caseSensitive: void 0, module: "/build/routes/send-467FHBHG.js", imports: void 0, hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 } }, version: "4b877d37", hmr: { runtime: "/build/_shared/chunk-Q4FQXG6T.js", timestamp: 1698938069003 }, url: "/build/manifest-4B877D37.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/send": {
    id: "routes/send",
    parentId: "root",
    path: "send",
    index: void 0,
    caseSensitive: void 0,
    module: send_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
