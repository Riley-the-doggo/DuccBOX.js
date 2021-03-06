var e = function (t, n) {
  return (e =
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array &&
      function (e, t) {
        e.__proto__ = t;
      }) ||
    function (e, t) {
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    })(t, n);
};
function t(e, t, n, r) {
  return new (n || (n = Promise))(function (i, o) {
    function a(e) {
      try {
        c(r.next(e));
      } catch (e) {
        o(e);
      }
    }
    function s(e) {
      try {
        c(r.throw(e));
      } catch (e) {
        o(e);
      }
    }
    function c(e) {
      var t;
      e.done
        ? i(e.value)
        : ((t = e.value),
          t instanceof n
            ? t
            : new n(function (e) {
                e(t);
              })).then(a, s);
    }
    c((r = r.apply(e, t || [])).next());
  });
}
function n(e, t) {
  var n,
    r,
    i,
    o,
    a = {
      label: 0,
      sent: function () {
        if (1 & i[0]) throw i[1];
        return i[1];
      },
      trys: [],
      ops: [],
    };
  return (
    (o = { next: s(0), throw: s(1), return: s(2) }),
    "function" == typeof Symbol &&
      (o[Symbol.iterator] = function () {
        return this;
      }),
    o
  );
  function s(o) {
    return function (s) {
      return (function (o) {
        if (n) throw new TypeError("Generator is already executing.");
        for (; a; )
          try {
            if (
              ((n = 1),
              r &&
                (i =
                  2 & o[0]
                    ? r.return
                    : o[0]
                    ? r.throw || ((i = r.return) && i.call(r), 0)
                    : r.next) &&
                !(i = i.call(r, o[1])).done)
            )
              return i;
            switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
              case 0:
              case 1:
                i = o;
                break;
              case 4:
                return a.label++, { value: o[1], done: !1 };
              case 5:
                a.label++, (r = o[1]), (o = [0]);
                continue;
              case 7:
                (o = a.ops.pop()), a.trys.pop();
                continue;
              default:
                if (
                  !((i = a.trys),
                  (i = i.length > 0 && i[i.length - 1]) ||
                    (6 !== o[0] && 2 !== o[0]))
                ) {
                  a = 0;
                  continue;
                }
                if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                  a.label = o[1];
                  break;
                }
                if (6 === o[0] && a.label < i[1]) {
                  (a.label = i[1]), (i = o);
                  break;
                }
                if (i && a.label < i[2]) {
                  (a.label = i[2]), a.ops.push(o);
                  break;
                }
                i[2] && a.ops.pop(), a.trys.pop();
                continue;
            }
            o = t.call(e, a);
          } catch (e) {
            (o = [6, e]), (r = 0);
          } finally {
            n = i = 0;
          }
        if (5 & o[0]) throw o[1];
        return { value: o[0] ? o[1] : void 0, done: !0 };
      })([o, s]);
    };
  }
}
function r(e) {
  var t = "function" == typeof Symbol && Symbol.iterator,
    n = t && e[t],
    r = 0;
  if (n) return n.call(e);
  if (e && "number" == typeof e.length)
    return {
      next: function () {
        return (
          e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
        );
      },
    };
  throw new TypeError(
    t ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function i(e, t) {
  var n = "function" == typeof Symbol && e[Symbol.iterator];
  if (!n) return e;
  var r,
    i,
    o = n.call(e),
    a = [];
  try {
    for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; ) a.push(r.value);
  } catch (e) {
    i = { error: e };
  } finally {
    try {
      r && !r.done && (n = o.return) && n.call(o);
    } finally {
      if (i) throw i.error;
    }
  }
  return a;
}
function o(e, t) {
  for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n];
  return e;
}
var a = (function () {
    function e() {
      var e = this;
      (this.reject = function () {}),
        (this.resolve = function () {}),
        (this.promise = new Promise(function (t, n) {
          (e.resolve = t), (e.reject = n);
        }));
    }
    return (
      (e.prototype.wrapCallback = function (e) {
        var t = this;
        return function (n, r) {
          n ? t.reject(n) : t.resolve(r),
            "function" == typeof e &&
              (t.promise.catch(function () {}),
              1 === e.length ? e(n) : e(n, r));
        };
      }),
      e
    );
  })(),
  s = (function (t) {
    function n(e, r, i) {
      var o = t.call(this, r) || this;
      return (
        (o.code = e),
        (o.customData = i),
        (o.name = "FirebaseError"),
        Object.setPrototypeOf(o, n.prototype),
        Error.captureStackTrace &&
          Error.captureStackTrace(o, c.prototype.create),
        o
      );
    }
    return (
      (function (t, n) {
        if ("function" != typeof n && null !== n)
          throw new TypeError(
            "Class extends value " + String(n) + " is not a constructor or null"
          );
        function r() {
          this.constructor = t;
        }
        e(t, n),
          (t.prototype =
            null === n
              ? Object.create(n)
              : ((r.prototype = n.prototype), new r()));
      })(n, t),
      n
    );
  })(Error),
  c = (function () {
    function e(e, t, n) {
      (this.service = e), (this.serviceName = t), (this.errors = n);
    }
    return (
      (e.prototype.create = function (e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        var r = t[0] || {},
          i = this.service + "/" + e,
          o = this.errors[e],
          a = o ? l(o, r) : "Error",
          c = this.serviceName + ": " + a + " (" + i + ").",
          p = new s(i, c, r);
        return p;
      }),
      e
    );
  })();
function l(e, t) {
  return e.replace(p, function (e, n) {
    var r = t[n];
    return null != r ? String(r) : "<" + n + "?>";
  });
}
var p = /\{\$([^}]+)}/g,
  f = (function () {
    function e(e, t, n) {
      (this.name = e),
        (this.instanceFactory = t),
        (this.type = n),
        (this.multipleInstances = !1),
        (this.serviceProps = {}),
        (this.instantiationMode = "LAZY"),
        (this.onInstanceCreated = null);
    }
    return (
      (e.prototype.setInstantiationMode = function (e) {
        return (this.instantiationMode = e), this;
      }),
      (e.prototype.setMultipleInstances = function (e) {
        return (this.multipleInstances = e), this;
      }),
      (e.prototype.setServiceProps = function (e) {
        return (this.serviceProps = e), this;
      }),
      (e.prototype.setInstanceCreatedCallback = function (e) {
        return (this.onInstanceCreated = e), this;
      }),
      e
    );
  })(),
  u = (function () {
    function e(e, t) {
      (this.name = e),
        (this.container = t),
        (this.component = null),
        (this.instances = new Map()),
        (this.instancesDeferred = new Map()),
        (this.onInitCallbacks = new Map());
    }
    return (
      (e.prototype.get = function (e) {
        var t = this.normalizeInstanceIdentifier(e);
        if (!this.instancesDeferred.has(t)) {
          var n = new a();
          if (
            (this.instancesDeferred.set(t, n),
            this.isInitialized(t) || this.shouldAutoInitialize())
          )
            try {
              var r = this.getOrInitializeService({ instanceIdentifier: t });
              r && n.resolve(r);
            } catch (e) {}
        }
        return this.instancesDeferred.get(t).promise;
      }),
      (e.prototype.getImmediate = function (e) {
        var t,
          n = this.normalizeInstanceIdentifier(
            null == e ? void 0 : e.identifier
          ),
          r =
            null !== (t = null == e ? void 0 : e.optional) && void 0 !== t && t;
        if (!this.isInitialized(n) && !this.shouldAutoInitialize()) {
          if (r) return null;
          throw Error("Service " + this.name + " is not available");
        }
        try {
          return this.getOrInitializeService({ instanceIdentifier: n });
        } catch (e) {
          if (r) return null;
          throw e;
        }
      }),
      (e.prototype.getComponent = function () {
        return this.component;
      }),
      (e.prototype.setComponent = function (e) {
        var t, n;
        if (e.name !== this.name)
          throw Error(
            "Mismatching Component " +
              e.name +
              " for Provider " +
              this.name +
              "."
          );
        if (this.component)
          throw Error(
            "Component for " + this.name + " has already been provided"
          );
        if (((this.component = e), this.shouldAutoInitialize())) {
          if (
            (function (e) {
              return "EAGER" === e.instantiationMode;
            })(e)
          )
            try {
              this.getOrInitializeService({ instanceIdentifier: "[DEFAULT]" });
            } catch (e) {}
          try {
            for (
              var o = r(this.instancesDeferred.entries()), a = o.next();
              !a.done;
              a = o.next()
            ) {
              var s = i(a.value, 2),
                c = s[0],
                l = s[1],
                p = this.normalizeInstanceIdentifier(c);
              try {
                var f = this.getOrInitializeService({ instanceIdentifier: p });
                l.resolve(f);
              } catch (e) {}
            }
          } catch (e) {
            t = { error: e };
          } finally {
            try {
              a && !a.done && (n = o.return) && n.call(o);
            } finally {
              if (t) throw t.error;
            }
          }
        }
      }),
      (e.prototype.clearInstance = function (e) {
        void 0 === e && (e = "[DEFAULT]"),
          this.instancesDeferred.delete(e),
          this.instances.delete(e);
      }),
      (e.prototype.delete = function () {
        return t(this, void 0, void 0, function () {
          var e;
          return n(this, function (t) {
            switch (t.label) {
              case 0:
                return (
                  (e = Array.from(this.instances.values())),
                  [
                    4,
                    Promise.all(
                      o(
                        o(
                          [],
                          i(
                            e
                              .filter(function (e) {
                                return "INTERNAL" in e;
                              })
                              .map(function (e) {
                                return e.INTERNAL.delete();
                              })
                          )
                        ),
                        i(
                          e
                            .filter(function (e) {
                              return "_delete" in e;
                            })
                            .map(function (e) {
                              return e._delete();
                            })
                        )
                      )
                    ),
                  ]
                );
              case 1:
                return t.sent(), [2];
            }
          });
        });
      }),
      (e.prototype.isComponentSet = function () {
        return null != this.component;
      }),
      (e.prototype.isInitialized = function (e) {
        return void 0 === e && (e = "[DEFAULT]"), this.instances.has(e);
      }),
      (e.prototype.initialize = function (e) {
        var t, n;
        void 0 === e && (e = {});
        var o = e.options,
          a = void 0 === o ? {} : o,
          s = this.normalizeInstanceIdentifier(e.instanceIdentifier);
        if (this.isInitialized(s))
          throw Error(this.name + "(" + s + ") has already been initialized");
        if (!this.isComponentSet())
          throw Error(
            "Component " + this.name + " has not been registered yet"
          );
        var c = this.getOrInitializeService({
          instanceIdentifier: s,
          options: a,
        });
        try {
          for (
            var l = r(this.instancesDeferred.entries()), p = l.next();
            !p.done;
            p = l.next()
          ) {
            var f = i(p.value, 2),
              u = f[0],
              h = f[1];
            s === this.normalizeInstanceIdentifier(u) && h.resolve(c);
          }
        } catch (e) {
          t = { error: e };
        } finally {
          try {
            p && !p.done && (n = l.return) && n.call(l);
          } finally {
            if (t) throw t.error;
          }
        }
        return c;
      }),
      (e.prototype.onInit = function (e, t) {
        var n,
          r = this.normalizeInstanceIdentifier(t),
          i =
            null !== (n = this.onInitCallbacks.get(r)) && void 0 !== n
              ? n
              : new Set();
        i.add(e), this.onInitCallbacks.set(r, i);
        var o = this.instances.get(r);
        return (
          o && e(o, r),
          function () {
            i.delete(e);
          }
        );
      }),
      (e.prototype.invokeOnInitCallbacks = function (e, t) {
        var n,
          i,
          o = this.onInitCallbacks.get(t);
        if (o)
          try {
            for (var a = r(o), s = a.next(); !s.done; s = a.next()) {
              var c = s.value;
              try {
                c(e, t);
              } catch (e) {}
            }
          } catch (e) {
            n = { error: e };
          } finally {
            try {
              s && !s.done && (i = a.return) && i.call(a);
            } finally {
              if (n) throw n.error;
            }
          }
      }),
      (e.prototype.getOrInitializeService = function (e) {
        var t,
          n = e.instanceIdentifier,
          r = e.options,
          i = void 0 === r ? {} : r,
          o = this.instances.get(n);
        if (
          !o &&
          this.component &&
          ((o = this.component.instanceFactory(this.container, {
            instanceIdentifier: ((t = n), "[DEFAULT]" === t ? void 0 : t),
            options: i,
          })),
          this.instances.set(n, o),
          this.invokeOnInitCallbacks(o, n),
          this.component.onInstanceCreated)
        )
          try {
            this.component.onInstanceCreated(this.container, n, o);
          } catch (e) {}
        return o || null;
      }),
      (e.prototype.normalizeInstanceIdentifier = function (e) {
        return (
          void 0 === e && (e = "[DEFAULT]"),
          this.component
            ? this.component.multipleInstances
              ? e
              : "[DEFAULT]"
            : e
        );
      }),
      (e.prototype.shouldAutoInitialize = function () {
        return (
          !!this.component && "EXPLICIT" !== this.component.instantiationMode
        );
      }),
      e
    );
  })();
var h,
  d,
  m = (function () {
    function e(e) {
      (this.name = e), (this.providers = new Map());
    }
    return (
      (e.prototype.addComponent = function (e) {
        var t = this.getProvider(e.name);
        if (t.isComponentSet())
          throw new Error(
            "Component " +
              e.name +
              " has already been registered with " +
              this.name
          );
        t.setComponent(e);
      }),
      (e.prototype.addOrOverwriteComponent = function (e) {
        this.getProvider(e.name).isComponentSet() &&
          this.providers.delete(e.name),
          this.addComponent(e);
      }),
      (e.prototype.getProvider = function (e) {
        if (this.providers.has(e)) return this.providers.get(e);
        var t = new u(e, this);
        return this.providers.set(e, t), t;
      }),
      (e.prototype.getProviders = function () {
        return Array.from(this.providers.values());
      }),
      e
    );
  })(),
  v = [];
!(function (e) {
  (e[(e.DEBUG = 0)] = "DEBUG"),
    (e[(e.VERBOSE = 1)] = "VERBOSE"),
    (e[(e.INFO = 2)] = "INFO"),
    (e[(e.WARN = 3)] = "WARN"),
    (e[(e.ERROR = 4)] = "ERROR"),
    (e[(e.SILENT = 5)] = "SILENT");
})(d || (d = {}));
var y = {
    debug: d.DEBUG,
    verbose: d.VERBOSE,
    info: d.INFO,
    warn: d.WARN,
    error: d.ERROR,
    silent: d.SILENT,
  },
  g = d.INFO,
  b =
    (((h = {})[d.DEBUG] = "log"),
    (h[d.VERBOSE] = "log"),
    (h[d.INFO] = "info"),
    (h[d.WARN] = "warn"),
    (h[d.ERROR] = "error"),
    h),
  I = function (e, t) {
    for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
    if (!(t < e.logLevel)) {
      var i = new Date().toISOString(),
        a = b[t];
      if (!a)
        throw new Error(
          "Attempted to log a message with an invalid logType (value: " +
            t +
            ")"
        );
      console[a].apply(console, o(["[" + i + "]  " + e.name + ":"], n));
    }
  },
  w = (function () {
    function e(e) {
      (this.name = e),
        (this._logLevel = g),
        (this._logHandler = I),
        (this._userLogHandler = null),
        v.push(this);
    }
    return (
      Object.defineProperty(e.prototype, "logLevel", {
        get: function () {
          return this._logLevel;
        },
        set: function (e) {
          if (!(e in d))
            throw new TypeError(
              'Invalid value "' + e + '" assigned to `logLevel`'
            );
          this._logLevel = e;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.setLogLevel = function (e) {
        this._logLevel = "string" == typeof e ? y[e] : e;
      }),
      Object.defineProperty(e.prototype, "logHandler", {
        get: function () {
          return this._logHandler;
        },
        set: function (e) {
          if ("function" != typeof e)
            throw new TypeError(
              "Value assigned to `logHandler` must be a function"
            );
          this._logHandler = e;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, "userLogHandler", {
        get: function () {
          return this._userLogHandler;
        },
        set: function (e) {
          this._userLogHandler = e;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.debug = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._userLogHandler &&
          this._userLogHandler.apply(this, o([this, d.DEBUG], e)),
          this._logHandler.apply(this, o([this, d.DEBUG], e));
      }),
      (e.prototype.log = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._userLogHandler &&
          this._userLogHandler.apply(this, o([this, d.VERBOSE], e)),
          this._logHandler.apply(this, o([this, d.VERBOSE], e));
      }),
      (e.prototype.info = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._userLogHandler &&
          this._userLogHandler.apply(this, o([this, d.INFO], e)),
          this._logHandler.apply(this, o([this, d.INFO], e));
      }),
      (e.prototype.warn = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._userLogHandler &&
          this._userLogHandler.apply(this, o([this, d.WARN], e)),
          this._logHandler.apply(this, o([this, d.WARN], e));
      }),
      (e.prototype.error = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._userLogHandler &&
          this._userLogHandler.apply(this, o([this, d.ERROR], e)),
          this._logHandler.apply(this, o([this, d.ERROR], e));
      }),
      e
    );
  })();
class E {
  constructor(e) {
    this.container = e;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((e) => {
        if (
          (function (e) {
            const t = e.getComponent();
            return "VERSION" === (null == t ? void 0 : t.type);
          })(e)
        ) {
          const t = e.getImmediate();
          return `${t.library}/${t.version}`;
        }
        return null;
      })
      .filter((e) => e)
      .join(" ");
  }
}
const _ = new w("@firebase/app"),
  L = "[DEFAULT]",
  O = {
    "@firebase/app-exp": "fire-core",
    "@firebase/app-compat": "fire-core-compat",
    "@firebase/analytics-exp": "fire-analytics",
    "@firebase/analytics-compat": "fire-analytics-compat",
    "@firebase/app-check-exp": "fire-app-check",
    "@firebase/app-check-compat": "fire-app-check-compat",
    "@firebase/auth-exp": "fire-auth",
    "@firebase/auth-compat": "fire-auth-compat",
    "@firebase/database": "fire-rtdb",
    "@firebase/database-compat": "fire-rtdb-compat",
    "@firebase/functions-exp": "fire-fn",
    "@firebase/functions-compat": "fire-fn-compat",
    "@firebase/installations-exp": "fire-iid",
    "@firebase/installations-compat": "fire-iid-compat",
    "@firebase/messaging-exp": "fire-fcm",
    "@firebase/messaging-compat": "fire-fcm-compat",
    "@firebase/performance-exp": "fire-perf",
    "@firebase/performance-compat": "fire-perf-compat",
    "@firebase/remote-config-exp": "fire-rc",
    "@firebase/remote-config-compat": "fire-rc-compat",
    "@firebase/storage": "fire-gcs",
    "@firebase/storage-compat": "fire-gcs-compat",
    "@firebase/firestore": "fire-fst",
    "@firebase/firestore-compat": "fire-fst-compat",
    "fire-js": "fire-js",
    "firebase-exp": "fire-js-all",
  },
  D = new Map(),
  C = new Map();
function S(e, t) {
  try {
    e.container.addComponent(t);
  } catch (n) {
    _.debug(
      `Component ${t.name} failed to register with FirebaseApp ${e.name}`,
      n
    );
  }
}
function A(e, t) {
  e.container.addOrOverwriteComponent(t);
}
function N(e) {
  const t = e.name;
  if (C.has(t))
    return (
      _.debug(`There were multiple attempts to register component ${t}.`), !1
    );
  C.set(t, e);
  for (const t of D.values()) S(t, e);
  return !0;
}
function R(e, t) {
  return e.container.getProvider(t);
}
function x(e, t, n = "[DEFAULT]") {
  R(e, t).clearInstance(n);
}
function F() {
  C.clear();
}
const T = new c("app", "Firebase", {
  "no-app":
    "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
  "bad-app-name": "Illegal App name: '{$appName}",
  "duplicate-app": "Firebase App named '{$appName}' already exists",
  "app-deleted": "Firebase App named '{$appName}' already deleted",
  "invalid-app-argument":
    "firebase.{$appName}() takes either no argument or a Firebase App instance.",
  "invalid-log-argument":
    "First argument to `onLog` must be null or a function.",
});
class k {
  constructor(e, t, n) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, e)),
      (this._name = t.name),
      (this._automaticDataCollectionEnabled = t.automaticDataCollectionEnabled),
      (this._container = n),
      this.container.addComponent(new f("app-exp", () => this, "PUBLIC"));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(e) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = e);
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(e) {
    this._isDeleted = e;
  }
  checkDestroyed() {
    if (this.isDeleted) throw T.create("app-deleted", { appName: this._name });
  }
}
const H = "9.0.0-beta.7";
function P(e, t = {}) {
  if ("object" != typeof t) {
    t = { name: t };
  }
  const n = Object.assign(
      { name: "[DEFAULT]", automaticDataCollectionEnabled: !1 },
      t
    ),
    r = n.name;
  if ("string" != typeof r || !r)
    throw T.create("bad-app-name", { appName: String(r) });
  if (D.has(r)) throw T.create("duplicate-app", { appName: r });
  const i = new m(r);
  for (const e of C.values()) i.addComponent(e);
  const o = new k(e, n, i);
  return D.set(r, o), o;
}
function z(e = "[DEFAULT]") {
  const t = D.get(e);
  if (!t) throw T.create("no-app", { appName: e });
  return t;
}
function j() {
  return Array.from(D.values());
}
async function U(e) {
  const t = e.name;
  D.has(t) &&
    (D.delete(t),
    await Promise.all(e.container.getProviders().map((e) => e.delete())),
    (e.isDeleted = !0));
}
function $(e, t, n) {
  var r;
  let i = null !== (r = O[e]) && void 0 !== r ? r : e;
  n && (i += `-${n}`);
  const o = i.match(/\s|\//),
    a = t.match(/\s|\//);
  if (o || a) {
    const e = [`Unable to register library "${i}" with version "${t}":`];
    return (
      o &&
        e.push(
          `library name "${i}" contains illegal characters (whitespace or "/")`
        ),
      o && a && e.push("and"),
      a &&
        e.push(
          `version name "${t}" contains illegal characters (whitespace or "/")`
        ),
      void _.warn(e.join(" "))
    );
  }
  N(new f(`${i}-version`, () => ({ library: i, version: t }), "VERSION"));
}
function M(e, t) {
  if (null !== e && "function" != typeof e)
    throw T.create("invalid-log-argument");
  !(function (e, t) {
    for (
      var n = function (n) {
          var r = null;
          t && t.level && (r = y[t.level]),
            (n.userLogHandler =
              null === e
                ? null
                : function (t, n) {
                    for (var i = [], o = 2; o < arguments.length; o++)
                      i[o - 2] = arguments[o];
                    var a = i
                      .map(function (e) {
                        if (null == e) return null;
                        if ("string" == typeof e) return e;
                        if ("number" == typeof e || "boolean" == typeof e)
                          return e.toString();
                        if (e instanceof Error) return e.message;
                        try {
                          return JSON.stringify(e);
                        } catch (e) {
                          return null;
                        }
                      })
                      .filter(function (e) {
                        return e;
                      })
                      .join(" ");
                    n >= (null != r ? r : t.logLevel) &&
                      e({
                        level: d[n].toLowerCase(),
                        message: a,
                        args: i,
                        type: t.name,
                      });
                  });
        },
        r = 0,
        i = v;
      r < i.length;
      r++
    )
      n(i[r]);
  })(e, t);
}
function B(e) {
  var t;
  (t = e),
    v.forEach(function (e) {
      e.setLogLevel(t);
    });
}
var V;
N(new f("platform-logger", (e) => new E(e), "PRIVATE")),
  $("@firebase/app-exp", "0.0.900-exp.6ef484a04", V),
  $("fire-js", "");
$("firebase-exp", "9.0.0-beta.7", "cdn");
export {
  H as SDK_VERSION,
  L as _DEFAULT_ENTRY_NAME,
  S as _addComponent,
  A as _addOrOverwriteComponent,
  D as _apps,
  F as _clearComponents,
  C as _components,
  R as _getProvider,
  N as _registerComponent,
  x as _removeServiceInstance,
  U as deleteApp,
  z as getApp,
  j as getApps,
  P as initializeApp,
  M as onLog,
  $ as registerVersion,
  B as setLogLevel,
};
//# sourceMappingURL=firebase-app.js.map
