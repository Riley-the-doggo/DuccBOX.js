import {
  registerVersion as t,
  _registerComponent as e,
  _getProvider as n,
  getApp as r,
} from "https://www.gstatic.com/firebasejs/9.0.0-beta.7/firebase-app.js";
var i,
  o,
  a = function (t, e) {
    return (a =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, e) {
          t.__proto__ = e;
        }) ||
      function (t, e) {
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      })(t, e);
  };
function s(t, e) {
  for (var n = 0, r = e.length, i = t.length; n < r; n++, i++) t[i] = e[n];
  return t;
}
!(function (t) {
  (t[(t.DEBUG = 0)] = "DEBUG"),
    (t[(t.VERBOSE = 1)] = "VERBOSE"),
    (t[(t.INFO = 2)] = "INFO"),
    (t[(t.WARN = 3)] = "WARN"),
    (t[(t.ERROR = 4)] = "ERROR"),
    (t[(t.SILENT = 5)] = "SILENT");
})(o || (o = {}));
var c = {
    debug: o.DEBUG,
    verbose: o.VERBOSE,
    info: o.INFO,
    warn: o.WARN,
    error: o.ERROR,
    silent: o.SILENT,
  },
  u = o.INFO,
  l =
    (((i = {})[o.DEBUG] = "log"),
    (i[o.VERBOSE] = "log"),
    (i[o.INFO] = "info"),
    (i[o.WARN] = "warn"),
    (i[o.ERROR] = "error"),
    i),
  p = function (t, e) {
    for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
    if (!(e < t.logLevel)) {
      var i = new Date().toISOString(),
        o = l[e];
      if (!o)
        throw new Error(
          "Attempted to log a message with an invalid logType (value: " +
            e +
            ")"
        );
      console[o].apply(console, s(["[" + i + "]  " + t.name + ":"], n));
    }
  },
  f = (function () {
    function t(t) {
      (this.name = t),
        (this._logLevel = u),
        (this._logHandler = p),
        (this._userLogHandler = null);
    }
    return (
      Object.defineProperty(t.prototype, "logLevel", {
        get: function () {
          return this._logLevel;
        },
        set: function (t) {
          if (!(t in o))
            throw new TypeError(
              'Invalid value "' + t + '" assigned to `logLevel`'
            );
          this._logLevel = t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.setLogLevel = function (t) {
        this._logLevel = "string" == typeof t ? c[t] : t;
      }),
      Object.defineProperty(t.prototype, "logHandler", {
        get: function () {
          return this._logHandler;
        },
        set: function (t) {
          if ("function" != typeof t)
            throw new TypeError(
              "Value assigned to `logHandler` must be a function"
            );
          this._logHandler = t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "userLogHandler", {
        get: function () {
          return this._userLogHandler;
        },
        set: function (t) {
          this._userLogHandler = t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.debug = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        this._userLogHandler &&
          this._userLogHandler.apply(this, s([this, o.DEBUG], t)),
          this._logHandler.apply(this, s([this, o.DEBUG], t));
      }),
      (t.prototype.log = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        this._userLogHandler &&
          this._userLogHandler.apply(this, s([this, o.VERBOSE], t)),
          this._logHandler.apply(this, s([this, o.VERBOSE], t));
      }),
      (t.prototype.info = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        this._userLogHandler &&
          this._userLogHandler.apply(this, s([this, o.INFO], t)),
          this._logHandler.apply(this, s([this, o.INFO], t));
      }),
      (t.prototype.warn = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        this._userLogHandler &&
          this._userLogHandler.apply(this, s([this, o.WARN], t)),
          this._logHandler.apply(this, s([this, o.WARN], t));
      }),
      (t.prototype.error = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        this._userLogHandler &&
          this._userLogHandler.apply(this, s([this, o.ERROR], t)),
          this._logHandler.apply(this, s([this, o.ERROR], t));
      }),
      t
    );
  })();
function d() {
  var t =
    "object" == typeof chrome
      ? chrome.runtime
      : "object" == typeof browser
      ? browser.runtime
      : void 0;
  return "object" == typeof t && void 0 !== t.id;
}
function h() {
  return "indexedDB" in self && null != indexedDB;
}
function g() {
  return new Promise(function (t, e) {
    try {
      var n = !0,
        r = "validate-browser-context-for-indexeddb-analytics-module",
        i = self.indexedDB.open(r);
      (i.onsuccess = function () {
        i.result.close(), n || self.indexedDB.deleteDatabase(r), t(!0);
      }),
        (i.onupgradeneeded = function () {
          n = !1;
        }),
        (i.onerror = function () {
          var t;
          e(
            (null === (t = i.error) || void 0 === t ? void 0 : t.message) || ""
          );
        });
    } catch (t) {
      e(t);
    }
  });
}
function m() {
  return !(!navigator || !navigator.cookieEnabled);
}
var y = (function (t) {
    function e(n, r, i) {
      var o = t.call(this, r) || this;
      return (
        (o.code = n),
        (o.customData = i),
        (o.name = "FirebaseError"),
        Object.setPrototypeOf(o, e.prototype),
        Error.captureStackTrace &&
          Error.captureStackTrace(o, w.prototype.create),
        o
      );
    }
    return (
      (function (t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Class extends value " + String(e) + " is not a constructor or null"
          );
        function n() {
          this.constructor = t;
        }
        a(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((n.prototype = e.prototype), new n()));
      })(e, t),
      e
    );
  })(Error),
  w = (function () {
    function t(t, e, n) {
      (this.service = t), (this.serviceName = e), (this.errors = n);
    }
    return (
      (t.prototype.create = function (t) {
        for (var e = [], n = 1; n < arguments.length; n++)
          e[n - 1] = arguments[n];
        var r = e[0] || {},
          i = this.service + "/" + t,
          o = this.errors[t],
          a = o ? v(o, r) : "Error",
          s = this.serviceName + ": " + a + " (" + i + ").",
          c = new y(i, s, r);
        return c;
      }),
      t
    );
  })();
function v(t, e) {
  return t.replace(b, function (t, n) {
    var r = e[n];
    return null != r ? String(r) : "<" + n + "?>";
  });
}
var b = /\{\$([^}]+)}/g;
function I(t, e, n) {
  void 0 === e && (e = 1e3), void 0 === n && (n = 2);
  var r = e * Math.pow(n, t),
    i = Math.round(0.5 * r * (Math.random() - 0.5) * 2);
  return Math.min(144e5, r + i);
}
function _(t) {
  return t && t._delegate ? t._delegate : t;
}
var E = (function () {
  function t(t, e, n) {
    (this.name = t),
      (this.instanceFactory = e),
      (this.type = n),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = "LAZY"),
      (this.onInstanceCreated = null);
  }
  return (
    (t.prototype.setInstantiationMode = function (t) {
      return (this.instantiationMode = t), this;
    }),
    (t.prototype.setMultipleInstances = function (t) {
      return (this.multipleInstances = t), this;
    }),
    (t.prototype.setServiceProps = function (t) {
      return (this.serviceProps = t), this;
    }),
    (t.prototype.setInstanceCreatedCallback = function (t) {
      return (this.onInstanceCreated = t), this;
    }),
    t
  );
})();
function S(t) {
  return Array.prototype.slice.call(t);
}
function T(t) {
  return new Promise(function (e, n) {
    (t.onsuccess = function () {
      e(t.result);
    }),
      (t.onerror = function () {
        n(t.error);
      });
  });
}
function x(t, e, n) {
  var r,
    i = new Promise(function (i, o) {
      T((r = t[e].apply(t, n))).then(i, o);
    });
  return (i.request = r), i;
}
function j(t, e, n) {
  var r = x(t, e, n);
  return r.then(function (t) {
    if (t) return new A(t, r.request);
  });
}
function D(t, e, n) {
  n.forEach(function (n) {
    Object.defineProperty(t.prototype, n, {
      get: function () {
        return this[e][n];
      },
      set: function (t) {
        this[e][n] = t;
      },
    });
  });
}
function O(t, e, n, r) {
  r.forEach(function (r) {
    r in n.prototype &&
      (t.prototype[r] = function () {
        return x(this[e], r, arguments);
      });
  });
}
function P(t, e, n, r) {
  r.forEach(function (r) {
    r in n.prototype &&
      (t.prototype[r] = function () {
        return this[e][r].apply(this[e], arguments);
      });
  });
}
function C(t, e, n, r) {
  r.forEach(function (r) {
    r in n.prototype &&
      (t.prototype[r] = function () {
        return j(this[e], r, arguments);
      });
  });
}
function k(t) {
  this._index = t;
}
function A(t, e) {
  (this._cursor = t), (this._request = e);
}
function N(t) {
  this._store = t;
}
function F(t) {
  (this._tx = t),
    (this.complete = new Promise(function (e, n) {
      (t.oncomplete = function () {
        e();
      }),
        (t.onerror = function () {
          n(t.error);
        }),
        (t.onabort = function () {
          n(t.error);
        });
    }));
}
function L(t, e, n) {
  (this._db = t), (this.oldVersion = e), (this.transaction = new F(n));
}
function M(t) {
  this._db = t;
}
D(k, "_index", ["name", "keyPath", "multiEntry", "unique"]),
  O(k, "_index", IDBIndex, ["get", "getKey", "getAll", "getAllKeys", "count"]),
  C(k, "_index", IDBIndex, ["openCursor", "openKeyCursor"]),
  D(A, "_cursor", ["direction", "key", "primaryKey", "value"]),
  O(A, "_cursor", IDBCursor, ["update", "delete"]),
  ["advance", "continue", "continuePrimaryKey"].forEach(function (t) {
    t in IDBCursor.prototype &&
      (A.prototype[t] = function () {
        var e = this,
          n = arguments;
        return Promise.resolve().then(function () {
          return (
            e._cursor[t].apply(e._cursor, n),
            T(e._request).then(function (t) {
              if (t) return new A(t, e._request);
            })
          );
        });
      });
  }),
  (N.prototype.createIndex = function () {
    return new k(this._store.createIndex.apply(this._store, arguments));
  }),
  (N.prototype.index = function () {
    return new k(this._store.index.apply(this._store, arguments));
  }),
  D(N, "_store", ["name", "keyPath", "indexNames", "autoIncrement"]),
  O(N, "_store", IDBObjectStore, [
    "put",
    "add",
    "delete",
    "clear",
    "get",
    "getAll",
    "getKey",
    "getAllKeys",
    "count",
  ]),
  C(N, "_store", IDBObjectStore, ["openCursor", "openKeyCursor"]),
  P(N, "_store", IDBObjectStore, ["deleteIndex"]),
  (F.prototype.objectStore = function () {
    return new N(this._tx.objectStore.apply(this._tx, arguments));
  }),
  D(F, "_tx", ["objectStoreNames", "mode"]),
  P(F, "_tx", IDBTransaction, ["abort"]),
  (L.prototype.createObjectStore = function () {
    return new N(this._db.createObjectStore.apply(this._db, arguments));
  }),
  D(L, "_db", ["name", "version", "objectStoreNames"]),
  P(L, "_db", IDBDatabase, ["deleteObjectStore", "close"]),
  (M.prototype.transaction = function () {
    return new F(this._db.transaction.apply(this._db, arguments));
  }),
  D(M, "_db", ["name", "version", "objectStoreNames"]),
  P(M, "_db", IDBDatabase, ["close"]),
  ["openCursor", "openKeyCursor"].forEach(function (t) {
    [N, k].forEach(function (e) {
      t in e.prototype &&
        (e.prototype[t.replace("open", "iterate")] = function () {
          var e = S(arguments),
            n = e[e.length - 1],
            r = this._store || this._index,
            i = r[t].apply(r, e.slice(0, -1));
          i.onsuccess = function () {
            n(i.result);
          };
        });
    });
  }),
  [k, N].forEach(function (t) {
    t.prototype.getAll ||
      (t.prototype.getAll = function (t, e) {
        var n = this,
          r = [];
        return new Promise(function (i) {
          n.iterateCursor(t, function (t) {
            t
              ? (r.push(t.value),
                void 0 === e || r.length != e ? t.continue() : i(r))
              : i(r);
          });
        });
      });
  });
const $ = new w("installations", "Installations", {
  "missing-app-config-values":
    'Missing App configuration value: "{$valueName}"',
  "not-registered": "Firebase Installation is not registered.",
  "installation-not-found": "Firebase Installation not found.",
  "request-failed":
    '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
  "app-offline": "Could not process request. Application offline.",
  "delete-pending-registration":
    "Can't delete installation while there is a pending registration request.",
});
function B(t) {
  return t instanceof y && t.code.includes("request-failed");
}
function R({ projectId: t }) {
  return `https://firebaseinstallations.googleapis.com/v1/projects/${t}/installations`;
}
function q(t) {
  return {
    token: t.token,
    requestStatus: 2,
    expiresIn: ((e = t.expiresIn), Number(e.replace("s", "000"))),
    creationTime: Date.now(),
  };
  var e;
}
async function H(t, e) {
  const n = (await e.json()).error;
  return $.create("request-failed", {
    requestName: t,
    serverCode: n.code,
    serverMessage: n.message,
    serverStatus: n.status,
  });
}
function K({ apiKey: t }) {
  return new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-goog-api-key": t,
  });
}
function z(t, { refreshToken: e }) {
  const n = K(t);
  return (
    n.append(
      "Authorization",
      (function (t) {
        return `FIS_v2 ${t}`;
      })(e)
    ),
    n
  );
}
async function V(t) {
  const e = await t();
  return e.status >= 500 && e.status < 600 ? t() : e;
}
function G(t) {
  return new Promise((e) => {
    setTimeout(e, t);
  });
}
const U = /^[cdef][\w-]{21}$/;
function W() {
  try {
    const t = new Uint8Array(17);
    (self.crypto || self.msCrypto).getRandomValues(t),
      (t[0] = 112 + (t[0] % 16));
    const e = (function (t) {
      return ((e = t),
      btoa(String.fromCharCode(...e))
        .replace(/\+/g, "-")
        .replace(/\//g, "_")).substr(0, 22);
      var e;
    })(t);
    return U.test(e) ? e : "";
  } catch (t) {
    return "";
  }
}
function J(t) {
  return `${t.appName}!${t.appId}`;
}
const Y = new Map();
function Z(t, e) {
  const n = J(t);
  Q(n, e),
    (function (t, e) {
      const n = (function () {
        !X &&
          "BroadcastChannel" in self &&
          ((X = new BroadcastChannel("[Firebase] FID Change")),
          (X.onmessage = (t) => {
            Q(t.data.key, t.data.fid);
          }));
        return X;
      })();
      n && n.postMessage({ key: t, fid: e });
      0 === Y.size && X && (X.close(), (X = null));
    })(n, e);
}
function Q(t, e) {
  const n = Y.get(t);
  if (n) for (const t of n) t(e);
}
let X = null;
const tt = "firebase-installations-store";
let et = null;
function nt() {
  return (
    et ||
      (et = (function (t, e, n) {
        var r = x(indexedDB, "open", [t, e]),
          i = r.request;
        return (
          i &&
            (i.onupgradeneeded = function (t) {
              n && n(new L(i.result, t.oldVersion, i.transaction));
            }),
          r.then(function (t) {
            return new M(t);
          })
        );
      })("firebase-installations-database", 1, (t) => {
        switch (t.oldVersion) {
          case 0:
            t.createObjectStore(tt);
        }
      })),
    et
  );
}
async function rt(t, e) {
  const n = J(t),
    r = (await nt()).transaction(tt, "readwrite"),
    i = r.objectStore(tt),
    o = await i.get(n);
  return (
    await i.put(e, n),
    await r.complete,
    (o && o.fid === e.fid) || Z(t, e.fid),
    e
  );
}
async function it(t) {
  const e = J(t),
    n = (await nt()).transaction(tt, "readwrite");
  await n.objectStore(tt).delete(e), await n.complete;
}
async function ot(t, e) {
  const n = J(t),
    r = (await nt()).transaction(tt, "readwrite"),
    i = r.objectStore(tt),
    o = await i.get(n),
    a = e(o);
  return (
    void 0 === a ? await i.delete(n) : await i.put(a, n),
    await r.complete,
    !a || (o && o.fid === a.fid) || Z(t, a.fid),
    a
  );
}
async function at(t) {
  let e;
  const n = await ot(t, (n) => {
    const r = (function (t) {
        return ut(t || { fid: W(), registrationStatus: 0 });
      })(n),
      i = (function (t, e) {
        if (0 === e.registrationStatus) {
          if (!navigator.onLine) {
            return {
              installationEntry: e,
              registrationPromise: Promise.reject($.create("app-offline")),
            };
          }
          const n = {
            fid: e.fid,
            registrationStatus: 1,
            registrationTime: Date.now(),
          };
          return {
            installationEntry: n,
            registrationPromise: (async function (t, e) {
              try {
                return rt(
                  t,
                  await (async function (t, { fid: e }) {
                    const n = R(t),
                      r = K(t),
                      i = {
                        fid: e,
                        authVersion: "FIS_v2",
                        appId: t.appId,
                        sdkVersion: "w:0.0.900-exp.6ef484a04",
                      },
                      o = {
                        method: "POST",
                        headers: r,
                        body: JSON.stringify(i),
                      },
                      a = await V(() => fetch(n, o));
                    if (a.ok) {
                      const t = await a.json();
                      return {
                        fid: t.fid || e,
                        registrationStatus: 2,
                        refreshToken: t.refreshToken,
                        authToken: q(t.authToken),
                      };
                    }
                    throw await H("Create Installation", a);
                  })(t, e)
                );
              } catch (n) {
                throw (
                  (B(n) && 409 === n.customData.serverCode
                    ? await it(t)
                    : await rt(t, { fid: e.fid, registrationStatus: 0 }),
                  n)
                );
              }
            })(t, n),
          };
        }
        return 1 === e.registrationStatus
          ? { installationEntry: e, registrationPromise: st(t) }
          : { installationEntry: e };
      })(t, r);
    return (e = i.registrationPromise), i.installationEntry;
  });
  return "" === n.fid
    ? { installationEntry: await e }
    : { installationEntry: n, registrationPromise: e };
}
async function st(t) {
  let e = await ct(t);
  for (; 1 === e.registrationStatus; ) await G(100), (e = await ct(t));
  if (0 === e.registrationStatus) {
    const { installationEntry: e, registrationPromise: n } = await at(t);
    return n || e;
  }
  return e;
}
function ct(t) {
  return ot(t, (t) => {
    if (!t) throw $.create("installation-not-found");
    return ut(t);
  });
}
function ut(t) {
  return 1 === (e = t).registrationStatus &&
    e.registrationTime + 1e4 < Date.now()
    ? { fid: t.fid, registrationStatus: 0 }
    : t;
  var e;
}
async function lt({ appConfig: t, platformLoggerProvider: e }, n) {
  const r = (function (t, { fid: e }) {
      return `${R(t)}/${e}/authTokens:generate`;
    })(t, n),
    i = z(t, n),
    o = e.getImmediate({ optional: !0 });
  o && i.append("x-firebase-client", o.getPlatformInfoString());
  const a = { installation: { sdkVersion: "w:0.0.900-exp.6ef484a04" } },
    s = { method: "POST", headers: i, body: JSON.stringify(a) },
    c = await V(() => fetch(r, s));
  if (c.ok) {
    return q(await c.json());
  }
  throw await H("Generate Auth Token", c);
}
async function pt(t, e = !1) {
  let n;
  const r = await ot(t.appConfig, (r) => {
    if (!dt(r)) throw $.create("not-registered");
    const i = r.authToken;
    if (
      !e &&
      (function (t) {
        return (
          2 === t.requestStatus &&
          !(function (t) {
            const e = Date.now();
            return (
              e < t.creationTime || t.creationTime + t.expiresIn < e + 36e5
            );
          })(t)
        );
      })(i)
    )
      return r;
    if (1 === i.requestStatus)
      return (
        (n = (async function (t, e) {
          let n = await ft(t.appConfig);
          for (; 1 === n.authToken.requestStatus; )
            await G(100), (n = await ft(t.appConfig));
          const r = n.authToken;
          return 0 === r.requestStatus ? pt(t, e) : r;
        })(t, e)),
        r
      );
    {
      if (!navigator.onLine) throw $.create("app-offline");
      const e = (function (t) {
        const e = { requestStatus: 1, requestTime: Date.now() };
        return Object.assign(Object.assign({}, t), { authToken: e });
      })(r);
      return (
        (n = (async function (t, e) {
          try {
            const n = await lt(t, e),
              r = Object.assign(Object.assign({}, e), { authToken: n });
            return await rt(t.appConfig, r), n;
          } catch (n) {
            if (
              !B(n) ||
              (401 !== n.customData.serverCode &&
                404 !== n.customData.serverCode)
            ) {
              const n = Object.assign(Object.assign({}, e), {
                authToken: { requestStatus: 0 },
              });
              await rt(t.appConfig, n);
            } else await it(t.appConfig);
            throw n;
          }
        })(t, e)),
        e
      );
    }
  });
  return n ? await n : r.authToken;
}
function ft(t) {
  return ot(t, (t) => {
    if (!dt(t)) throw $.create("not-registered");
    const e = t.authToken;
    return 1 === (n = e).requestStatus && n.requestTime + 1e4 < Date.now()
      ? Object.assign(Object.assign({}, t), { authToken: { requestStatus: 0 } })
      : t;
    var n;
  });
}
function dt(t) {
  return void 0 !== t && 2 === t.registrationStatus;
}
async function ht(t, e = !1) {
  const n = t;
  await (async function (t) {
    const { registrationPromise: e } = await at(t);
    e && (await e);
  })(n.appConfig);
  return (await pt(n, e)).token;
}
function gt(t) {
  return $.create("missing-app-config-values", { valueName: t });
}
const mt = (t) => {
  const e = t.getProvider("app-exp").getImmediate(),
    r = n(e, "installations-exp").getImmediate();
  return {
    getId: () =>
      (async function (t) {
        const e = t,
          { installationEntry: n, registrationPromise: r } = await at(
            e.appConfig
          );
        return r ? r.catch(console.error) : pt(e).catch(console.error), n.fid;
      })(r),
    getToken: (t) => ht(r, t),
  };
};
e(
  new E(
    "installations-exp",
    (t) => {
      const e = t.getProvider("app-exp").getImmediate();
      return {
        app: e,
        appConfig: (function (t) {
          if (!t || !t.options) throw gt("App Configuration");
          if (!t.name) throw gt("App Name");
          const e = ["projectId", "apiKey", "appId"];
          for (const n of e) if (!t.options[n]) throw gt(n);
          return {
            appName: t.name,
            projectId: t.options.projectId,
            apiKey: t.options.apiKey,
            appId: t.options.appId,
          };
        })(e),
        platformLoggerProvider: n(e, "platform-logger"),
        _delete: () => Promise.resolve(),
      };
    },
    "PUBLIC"
  )
),
  e(new E("installations-exp-internal", mt, "PRIVATE")),
  t("@firebase/installations-exp", "0.0.900-exp.6ef484a04");
const yt = "https://www.googletagmanager.com/gtag/js",
  wt = new f("@firebase/analytics");
function vt(t) {
  return Promise.all(t.map((t) => t.catch((t) => t)));
}
function bt(t, e, n, r) {
  return async function (i, o, a) {
    try {
      "event" === i
        ? await (async function (t, e, n, r, i) {
            try {
              let o = [];
              if (i && i.send_to) {
                let t = i.send_to;
                Array.isArray(t) || (t = [t]);
                const r = await vt(n);
                for (const n of t) {
                  const t = r.find((t) => t.measurementId === n),
                    i = t && e[t.appId];
                  if (!i) {
                    o = [];
                    break;
                  }
                  o.push(i);
                }
              }
              0 === o.length && (o = Object.values(e)),
                await Promise.all(o),
                t("event", r, i || {});
            } catch (t) {
              wt.error(t);
            }
          })(t, e, n, o, a)
        : "config" === i
        ? await (async function (t, e, n, r, i, o) {
            const a = r[i];
            try {
              if (a) await e[a];
              else {
                const t = (await vt(n)).find((t) => t.measurementId === i);
                t && (await e[t.appId]);
              }
            } catch (t) {
              wt.error(t);
            }
            t("config", i, o);
          })(t, e, n, r, o, a)
        : t("set", o);
    } catch (t) {
      wt.error(t);
    }
  };
}
const It = new w("analytics", "Analytics", {
  "already-exists":
    "A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",
  "already-initialized":
    "Firebase Analytics has already been initialized. initializeAnalytics() must only be called once. getAnalytics() can be used to get a reference to the already-intialized instance.",
  "already-initialized-settings":
    "Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",
  "interop-component-reg-failed":
    "Firebase Analytics Interop Component failed to instantiate: {$reason}",
  "invalid-analytics-context":
    "Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
  "indexeddb-unavailable":
    "IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
  "fetch-throttle":
    "The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",
  "config-fetch-failed":
    "Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",
  "no-api-key":
    'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',
  "no-app-id":
    'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',
});
const _t = new (class {
  constructor(t = {}, e = 1e3) {
    (this.throttleMetadata = t), (this.intervalMillis = e);
  }
  getThrottleMetadata(t) {
    return this.throttleMetadata[t];
  }
  setThrottleMetadata(t, e) {
    this.throttleMetadata[t] = e;
  }
  deleteThrottleMetadata(t) {
    delete this.throttleMetadata[t];
  }
})();
function Et(t) {
  return new Headers({ Accept: "application/json", "x-goog-api-key": t });
}
async function St(t, e = _t, n) {
  const { appId: r, apiKey: i, measurementId: o } = t.options;
  if (!r) throw It.create("no-app-id");
  if (!i) {
    if (o) return { measurementId: o, appId: r };
    throw It.create("no-api-key");
  }
  const a = e.getThrottleMetadata(r) || {
      backoffCount: 0,
      throttleEndTimeMillis: Date.now(),
    },
    s = new xt();
  return (
    setTimeout(
      async () => {
        s.abort();
      },
      void 0 !== n ? n : 6e4
    ),
    Tt({ appId: r, apiKey: i, measurementId: o }, a, s, e)
  );
}
async function Tt(t, { throttleEndTimeMillis: e, backoffCount: n }, r, i = _t) {
  const { appId: o, measurementId: a } = t;
  try {
    await (function (t, e) {
      return new Promise((n, r) => {
        const i = Math.max(e - Date.now(), 0),
          o = setTimeout(n, i);
        t.addEventListener(() => {
          clearTimeout(o),
            r(It.create("fetch-throttle", { throttleEndTimeMillis: e }));
        });
      });
    })(r, e);
  } catch (t) {
    if (a)
      return (
        wt.warn(
          `Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${t.message}]`
        ),
        { appId: o, measurementId: a }
      );
    throw t;
  }
  try {
    const e = await (async function (t) {
      var e;
      const { appId: n, apiKey: r } = t,
        i = { method: "GET", headers: Et(r) },
        o =
          "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace(
            "{app-id}",
            n
          ),
        a = await fetch(o, i);
      if (200 !== a.status && 304 !== a.status) {
        let t = "";
        try {
          const n = await a.json();
          (null === (e = n.error) || void 0 === e ? void 0 : e.message) &&
            (t = n.error.message);
        } catch (t) {}
        throw It.create("config-fetch-failed", {
          httpStatus: a.status,
          responseMessage: t,
        });
      }
      return a.json();
    })(t);
    return i.deleteThrottleMetadata(o), e;
  } catch (e) {
    if (
      !(function (t) {
        if (!(t instanceof y && t.customData)) return !1;
        const e = Number(t.customData.httpStatus);
        return 429 === e || 500 === e || 503 === e || 504 === e;
      })(e)
    ) {
      if ((i.deleteThrottleMetadata(o), a))
        return (
          wt.warn(
            `Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${e.message}]`
          ),
          { appId: o, measurementId: a }
        );
      throw e;
    }
    const s =
        503 === Number(e.customData.httpStatus)
          ? I(n, i.intervalMillis, 30)
          : I(n, i.intervalMillis),
      c = { throttleEndTimeMillis: Date.now() + s, backoffCount: n + 1 };
    return (
      i.setThrottleMetadata(o, c),
      wt.debug(`Calling attemptFetch again in ${s} millis`),
      Tt(t, c, r, i)
    );
  }
}
class xt {
  constructor() {
    this.listeners = [];
  }
  addEventListener(t) {
    this.listeners.push(t);
  }
  abort() {
    this.listeners.forEach((t) => t());
  }
}
async function jt(t, e, n, r, i, o, a) {
  var s;
  const c = St(t);
  c
    .then((e) => {
      (n[e.measurementId] = e.appId),
        t.options.measurementId &&
          e.measurementId !== t.options.measurementId &&
          wt.warn(
            `The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${e.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`
          );
    })
    .catch((t) => wt.error(t)),
    e.push(c);
  const u = (async function () {
      if (!h())
        return (
          wt.warn(
            It.create("indexeddb-unavailable", {
              errorInfo: "IndexedDB is not available in this environment.",
            }).message
          ),
          !1
        );
      try {
        await g();
      } catch (t) {
        return (
          wt.warn(It.create("indexeddb-unavailable", { errorInfo: t }).message),
          !1
        );
      }
      return !0;
    })().then((t) => (t ? r.getId() : void 0)),
    [l, p] = await Promise.all([c, u]);
  (function () {
    const t = window.document.getElementsByTagName("script");
    for (const e of Object.values(t)) if (e.src && e.src.includes(yt)) return e;
    return null;
  })() ||
    (function (t, e) {
      const n = document.createElement("script");
      (n.src = `${yt}?l=${t}&id=${e}`),
        (n.async = !0),
        document.head.appendChild(n);
    })(o, l.measurementId),
    i("js", new Date());
  const f =
    null !== (s = null == a ? void 0 : a.config) && void 0 !== s ? s : {};
  return (
    (f.origin = "firebase"),
    (f.update = !0),
    null != p && (f.firebase_id = p),
    i("config", l.measurementId, f),
    l.measurementId
  );
}
class Dt {
  constructor(t) {
    this.app = t;
  }
  _delete() {
    return delete Ot[this.app.options.appId], Promise.resolve();
  }
}
let Ot = {},
  Pt = [];
const Ct = {};
let kt,
  At,
  Nt = "dataLayer",
  Ft = "gtag",
  Lt = !1;
function Mt(t) {
  if (Lt) throw It.create("already-initialized");
  t.dataLayerName && (Nt = t.dataLayerName), t.gtagName && (Ft = t.gtagName);
}
function $t(t, e, n) {
  !(function () {
    const t = [];
    if (
      (d() && t.push("This is a browser extension environment."),
      m() || t.push("Cookies are not available."),
      t.length > 0)
    ) {
      const e = t.map((t, e) => `(${e + 1}) ${t}`).join(" "),
        n = It.create("invalid-analytics-context", { errorInfo: e });
      wt.warn(n.message);
    }
  })();
  const r = t.options.appId;
  if (!r) throw It.create("no-app-id");
  if (!t.options.apiKey) {
    if (!t.options.measurementId) throw It.create("no-api-key");
    wt.warn(
      `The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`
    );
  }
  if (null != Ot[r]) throw It.create("already-exists", { id: r });
  if (!Lt) {
    !(function (t) {
      let e = [];
      Array.isArray(window[t]) ? (e = window[t]) : (window[t] = e);
    })(Nt);
    const { wrappedGtag: t, gtagCore: e } = (function (t, e, n, r, i) {
      let o = function (...t) {
        window[r].push(arguments);
      };
      return (
        window[i] && "function" == typeof window[i] && (o = window[i]),
        (window[i] = bt(o, t, e, n)),
        { gtagCore: o, wrappedGtag: window[i] }
      );
    })(Ot, Pt, Ct, Nt, Ft);
    (At = t), (kt = e), (Lt = !0);
  }
  Ot[r] = jt(t, Pt, Ct, e, kt, Nt, n);
  return new Dt(t);
}
function Bt(t = r()) {
  t = _(t);
  const e = n(t, "analytics-exp");
  return e.isInitialized() ? e.getImmediate() : Rt(t);
}
function Rt(t, e = {}) {
  const r = n(t, "analytics-exp");
  if (r.isInitialized()) throw It.create("already-initialized");
  return r.initialize({ options: e });
}
async function qt() {
  if (d()) return !1;
  if (!m()) return !1;
  if (!h()) return !1;
  try {
    return await g();
  } catch (t) {
    return !1;
  }
}
function Ht(t, e, n) {
  (t = _(t)),
    (async function (t, e, n, r) {
      if (r && r.global) return t("set", { screen_name: n }), Promise.resolve();
      t("config", await e, { update: !0, screen_name: n });
    })(At, Ot[t.app.options.appId], e, n).catch((t) => wt.error(t));
}
function Kt(t, e, n) {
  (t = _(t)),
    (async function (t, e, n, r) {
      if (r && r.global) return t("set", { user_id: n }), Promise.resolve();
      t("config", await e, { update: !0, user_id: n });
    })(At, Ot[t.app.options.appId], e, n).catch((t) => wt.error(t));
}
function zt(t, e, n) {
  (t = _(t)),
    (async function (t, e, n, r) {
      if (r && r.global) {
        const e = {};
        for (const t of Object.keys(n)) e[`user_properties.${t}`] = n[t];
        return t("set", e), Promise.resolve();
      }
      t("config", await e, { update: !0, user_properties: n });
    })(At, Ot[t.app.options.appId], e, n).catch((t) => wt.error(t));
}
function Vt(t, e) {
  (t = _(t)),
    (async function (t, e) {
      const n = await t;
      window[`ga-disable-${n}`] = !e;
    })(Ot[t.app.options.appId], e).catch((t) => wt.error(t));
}
function Gt(t, e, n, r) {
  (t = _(t)),
    (async function (t, e, n, r, i) {
      if (i && i.global) t("event", n, r);
      else {
        const i = await e;
        t("event", n, Object.assign(Object.assign({}, r), { send_to: i }));
      }
    })(At, Ot[t.app.options.appId], e, n, r).catch((t) => wt.error(t));
}
e(
  new E(
    "analytics-exp",
    (t, { options: e }) =>
      $t(
        t.getProvider("app-exp").getImmediate(),
        t.getProvider("installations-exp-internal").getImmediate(),
        e
      ),
    "PUBLIC"
  )
),
  e(
    new E(
      "analytics-internal",
      function (t) {
        try {
          const e = t.getProvider("analytics-exp").getImmediate();
          return { logEvent: (t, n, r) => Gt(e, t, n, r) };
        } catch (t) {
          throw It.create("interop-component-reg-failed", { reason: t });
        }
      },
      "PRIVATE"
    )
  ),
  t("@firebase/analytics-exp", "0.0.900-exp.6ef484a04");
export {
  Bt as getAnalytics,
  Rt as initializeAnalytics,
  qt as isSupported,
  Gt as logEvent,
  Vt as setAnalyticsCollectionEnabled,
  Ht as setCurrentScreen,
  Kt as setUserId,
  zt as setUserProperties,
  Mt as settings,
};
//# sourceMappingURL=firebase-analytics.js.map
