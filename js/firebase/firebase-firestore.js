!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(require("@firebase/app"))
    : "function" == typeof define && define.amd
    ? define(["@firebase/app"], e)
    : e(
        (t = "undefined" != typeof globalThis ? globalThis : t || self).firebase
      );
})(this, function (mm) {
  "use strict";
  try {
    !function () {
      function t(t) {
        return t && "object" == typeof t && "default" in t ? t : { default: t };
      }
      var e = t(mm),
        r = function (t, e) {
          return (r =
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
      function n(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Class extends value " + String(e) + " is not a constructor or null"
          );
        function n() {
          this.constructor = t;
        }
        r(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((n.prototype = e.prototype), new n()));
      }
      var o = function () {
        return (o =
          Object.assign ||
          function (t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
              for (var i in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t;
          }).apply(this, arguments);
      };
      function y(t, s, a, u) {
        return new (a = a || Promise)(function (n, e) {
          function r(t) {
            try {
              o(u.next(t));
            } catch (t) {
              e(t);
            }
          }
          function i(t) {
            try {
              o(u.throw(t));
            } catch (t) {
              e(t);
            }
          }
          function o(t) {
            var e;
            t.done
              ? n(t.value)
              : ((e = t.value) instanceof a
                  ? e
                  : new a(function (t) {
                      t(e);
                    })
                ).then(r, i);
          }
          o((u = u.apply(t, s || [])).next());
        });
      }
      function g(n, r) {
        var i,
          o,
          s,
          a = {
            label: 0,
            sent: function () {
              if (1 & s[0]) throw s[1];
              return s[1];
            },
            trys: [],
            ops: [],
          },
          t = { next: e(0), throw: e(1), return: e(2) };
        return (
          "function" == typeof Symbol &&
            (t[Symbol.iterator] = function () {
              return this;
            }),
          t
        );
        function e(e) {
          return function (t) {
            return (function (e) {
              if (i) throw new TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (
                    ((i = 1),
                    o &&
                      (s =
                        2 & e[0]
                          ? o.return
                          : e[0]
                          ? o.throw || ((s = o.return) && s.call(o), 0)
                          : o.next) &&
                      !(s = s.call(o, e[1])).done)
                  )
                    return s;
                  switch (((o = 0), (e = s ? [2 & e[0], s.value] : e)[0])) {
                    case 0:
                    case 1:
                      s = e;
                      break;
                    case 4:
                      return a.label++, { value: e[1], done: !1 };
                    case 5:
                      a.label++, (o = e[1]), (e = [0]);
                      continue;
                    case 7:
                      (e = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !(s = 0 < (s = a.trys).length && s[s.length - 1]) &&
                        (6 === e[0] || 2 === e[0])
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === e[0] && (!s || (e[1] > s[0] && e[1] < s[3]))) {
                        a.label = e[1];
                        break;
                      }
                      if (6 === e[0] && a.label < s[1]) {
                        (a.label = s[1]), (s = e);
                        break;
                      }
                      if (s && a.label < s[2]) {
                        (a.label = s[2]), a.ops.push(e);
                        break;
                      }
                      s[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  e = r.call(n, a);
                } catch (t) {
                  (e = [6, t]), (o = 0);
                } finally {
                  i = s = 0;
                }
              if (5 & e[0]) throw e[1];
              return { value: e[0] ? e[1] : void 0, done: !0 };
            })([e, t]);
          };
        }
      }
      function s(t, e) {
        for (var n = 0, r = e.length, i = t.length; n < r; n++, i++)
          t[i] = e[n];
        return t;
      }
      var a = {
        byteToCharMap_: null,
        charToByteMap_: null,
        byteToCharMapWebSafe_: null,
        charToByteMapWebSafe_: null,
        ENCODED_VALS_BASE:
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        get ENCODED_VALS() {
          return this.ENCODED_VALS_BASE + "+/=";
        },
        get ENCODED_VALS_WEBSAFE() {
          return this.ENCODED_VALS_BASE + "-_.";
        },
        HAS_NATIVE_SUPPORT: "function" == typeof atob,
        encodeByteArray: function (t, e) {
          if (!Array.isArray(t))
            throw Error("encodeByteArray takes an array as a parameter");
          this.init_();
          for (
            var n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
              r = [],
              i = 0;
            i < t.length;
            i += 3
          ) {
            var o = t[i],
              s = i + 1 < t.length,
              a = s ? t[i + 1] : 0,
              u = i + 2 < t.length,
              c = u ? t[i + 2] : 0,
              h = ((15 & a) << 2) | (c >> 6),
              c = 63 & c;
            u || ((c = 64), s || (h = 64)),
              r.push(n[o >> 2], n[((3 & o) << 4) | (a >> 4)], n[h], n[c]);
          }
          return r.join("");
        },
        encodeString: function (t, e) {
          return this.HAS_NATIVE_SUPPORT && !e
            ? btoa(t)
            : this.encodeByteArray(
                (function (t) {
                  for (var e = [], n = 0, r = 0; r < t.length; r++) {
                    var i = t.charCodeAt(r);
                    i < 128
                      ? (e[n++] = i)
                      : (i < 2048
                          ? (e[n++] = (i >> 6) | 192)
                          : (55296 == (64512 & i) &&
                            r + 1 < t.length &&
                            56320 == (64512 & t.charCodeAt(r + 1))
                              ? ((i =
                                  65536 +
                                  ((1023 & i) << 10) +
                                  (1023 & t.charCodeAt(++r))),
                                (e[n++] = (i >> 18) | 240),
                                (e[n++] = ((i >> 12) & 63) | 128))
                              : (e[n++] = (i >> 12) | 224),
                            (e[n++] = ((i >> 6) & 63) | 128)),
                        (e[n++] = (63 & i) | 128));
                  }
                  return e;
                })(t),
                e
              );
        },
        decodeString: function (t, e) {
          return this.HAS_NATIVE_SUPPORT && !e
            ? atob(t)
            : (function (t) {
                for (var e = [], n = 0, r = 0; n < t.length; ) {
                  var i,
                    o,
                    s,
                    a = t[n++];
                  a < 128
                    ? (e[r++] = String.fromCharCode(a))
                    : 191 < a && a < 224
                    ? ((o = t[n++]),
                      (e[r++] = String.fromCharCode(
                        ((31 & a) << 6) | (63 & o)
                      )))
                    : 239 < a && a < 365
                    ? ((i =
                        (((7 & a) << 18) |
                          ((63 & (o = t[n++])) << 12) |
                          ((63 & (s = t[n++])) << 6) |
                          (63 & t[n++])) -
                        65536),
                      (e[r++] = String.fromCharCode(55296 + (i >> 10))),
                      (e[r++] = String.fromCharCode(56320 + (1023 & i))))
                    : ((o = t[n++]),
                      (s = t[n++]),
                      (e[r++] = String.fromCharCode(
                        ((15 & a) << 12) | ((63 & o) << 6) | (63 & s)
                      )));
                }
                return e.join("");
              })(this.decodeStringToByteArray(t, e));
        },
        decodeStringToByteArray: function (t, e) {
          this.init_();
          for (
            var n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
              r = [],
              i = 0;
            i < t.length;

          ) {
            var o = n[t.charAt(i++)],
              s = i < t.length ? n[t.charAt(i)] : 0,
              a = ++i < t.length ? n[t.charAt(i)] : 64,
              u = ++i < t.length ? n[t.charAt(i)] : 64;
            if ((++i, null == o || null == s || null == a || null == u))
              throw Error();
            r.push((o << 2) | (s >> 4)),
              64 !== a &&
                (r.push(((s << 4) & 240) | (a >> 2)),
                64 !== u && r.push(((a << 6) & 192) | u));
          }
          return r;
        },
        init_: function () {
          if (!this.byteToCharMap_) {
            (this.byteToCharMap_ = {}),
              (this.charToByteMap_ = {}),
              (this.byteToCharMapWebSafe_ = {}),
              (this.charToByteMapWebSafe_ = {});
            for (var t = 0; t < this.ENCODED_VALS.length; t++)
              (this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t)),
                (this.charToByteMap_[this.byteToCharMap_[t]] = t),
                (this.byteToCharMapWebSafe_[t] =
                  this.ENCODED_VALS_WEBSAFE.charAt(t)),
                (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] =
                  t) >= this.ENCODED_VALS_BASE.length &&
                  ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] =
                    t),
                  (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] =
                    t));
          }
        },
      };
      function h() {
        return "undefined" != typeof navigator &&
          "string" == typeof navigator.userAgent
          ? navigator.userAgent
          : "";
      }
      function i() {
        return (
          !(function () {
            try {
              return (
                "[object process]" ===
                Object.prototype.toString.call(global.process)
              );
            } catch (t) {
              return;
            }
          })() &&
          navigator.userAgent.includes("Safari") &&
          !navigator.userAgent.includes("Chrome")
        );
      }
      var u,
        c = "FirebaseError",
        l = (n(f, (u = Error)), f);
      function f(t, e, n) {
        e = u.call(this, e) || this;
        return (
          (e.code = t),
          (e.customData = n),
          (e.name = c),
          Object.setPrototypeOf(e, f.prototype),
          Error.captureStackTrace &&
            Error.captureStackTrace(e, d.prototype.create),
          e
        );
      }
      var d =
        ((p.prototype.create = function (t) {
          for (var e = [], n = 1; n < arguments.length; n++)
            e[n - 1] = arguments[n];
          var r,
            i = e[0] || {},
            o = this.service + "/" + t,
            t = this.errors[t],
            t = t
              ? ((r = i),
                t.replace(v, function (t, e) {
                  var n = r[e];
                  return null != n ? String(n) : "<" + e + "?>";
                }))
              : "Error",
            t = this.serviceName + ": " + t + " (" + o + ").";
          return new l(o, t, i);
        }),
        p);
      function p(t, e, n) {
        (this.service = t), (this.serviceName = e), (this.errors = n);
      }
      var m,
        v = /\{\$([^}]+)}/g;
      function w(t) {
        return t && t._delegate ? t._delegate : t;
      }
      ((N = m = m || {})[(N.DEBUG = 0)] = "DEBUG"),
        (N[(N.VERBOSE = 1)] = "VERBOSE"),
        (N[(N.INFO = 2)] = "INFO"),
        (N[(N.WARN = 3)] = "WARN"),
        (N[(N.ERROR = 4)] = "ERROR"),
        (N[(N.SILENT = 5)] = "SILENT");
      function b(t, e) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        if (!(e < t.logLevel)) {
          var i = new Date().toISOString(),
            o = I[e];
          if (!o)
            throw new Error(
              "Attempted to log a message with an invalid logType (value: " +
                e +
                ")"
            );
          console[o].apply(console, s(["[" + i + "]  " + t.name + ":"], n));
        }
      }
      var E = {
          debug: m.DEBUG,
          verbose: m.VERBOSE,
          info: m.INFO,
          warn: m.WARN,
          error: m.ERROR,
          silent: m.SILENT,
        },
        T = m.INFO,
        I =
          (((Ee = {})[m.DEBUG] = "log"),
          (Ee[m.VERBOSE] = "log"),
          (Ee[m.INFO] = "info"),
          (Ee[m.WARN] = "warn"),
          (Ee[m.ERROR] = "error"),
          Ee),
        _ =
          (Object.defineProperty(S.prototype, "logLevel", {
            get: function () {
              return this._logLevel;
            },
            set: function (t) {
              if (!(t in m))
                throw new TypeError(
                  'Invalid value "' + t + '" assigned to `logLevel`'
                );
              this._logLevel = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (S.prototype.setLogLevel = function (t) {
            this._logLevel = "string" == typeof t ? E[t] : t;
          }),
          Object.defineProperty(S.prototype, "logHandler", {
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
          Object.defineProperty(S.prototype, "userLogHandler", {
            get: function () {
              return this._userLogHandler;
            },
            set: function (t) {
              this._userLogHandler = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (S.prototype.debug = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            this._userLogHandler &&
              this._userLogHandler.apply(this, s([this, m.DEBUG], t)),
              this._logHandler.apply(this, s([this, m.DEBUG], t));
          }),
          (S.prototype.log = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            this._userLogHandler &&
              this._userLogHandler.apply(this, s([this, m.VERBOSE], t)),
              this._logHandler.apply(this, s([this, m.VERBOSE], t));
          }),
          (S.prototype.info = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            this._userLogHandler &&
              this._userLogHandler.apply(this, s([this, m.INFO], t)),
              this._logHandler.apply(this, s([this, m.INFO], t));
          }),
          (S.prototype.warn = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            this._userLogHandler &&
              this._userLogHandler.apply(this, s([this, m.WARN], t)),
              this._logHandler.apply(this, s([this, m.WARN], t));
          }),
          (S.prototype.error = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            this._userLogHandler &&
              this._userLogHandler.apply(this, s([this, m.ERROR], t)),
              this._logHandler.apply(this, s([this, m.ERROR], t));
          }),
          S);
      function S(t) {
        (this.name = t),
          (this._logLevel = T),
          (this._logHandler = b),
          (this._userLogHandler = null);
      }
      var A = function (t, e) {
        return (A =
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
      function D(t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
          n = e && t[e],
          r = 0;
        if (n) return n.call(t);
        if (t && "number" == typeof t.length)
          return {
            next: function () {
              return {
                value: (t = t && r >= t.length ? void 0 : t) && t[r++],
                done: !t,
              };
            },
          };
        throw new TypeError(
          e ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      var N,
        C =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
            ? window
            : "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : {},
        k = {},
        R = C || self;
      function x() {}
      function O(t) {
        var e = typeof t;
        return (
          "array" ==
            (e =
              "object" != e
                ? e
                : t
                ? Array.isArray(t)
                  ? "array"
                  : e
                : "null") ||
          ("object" == e && "number" == typeof t.length)
        );
      }
      function L(t) {
        var e = typeof t;
        return ("object" == e && null != t) || "function" == e;
      }
      var P = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
        M = 0;
      function F(t, e, n) {
        return t.call.apply(t.bind, arguments);
      }
      function V(e, n, t) {
        if (!e) throw Error();
        if (2 < arguments.length) {
          var r = Array.prototype.slice.call(arguments, 2);
          return function () {
            var t = Array.prototype.slice.call(arguments);
            return Array.prototype.unshift.apply(t, r), e.apply(n, t);
          };
        }
        return function () {
          return e.apply(n, arguments);
        };
      }
      function U(t, e, n) {
        return (U =
          Function.prototype.bind &&
          -1 != Function.prototype.bind.toString().indexOf("native code")
            ? F
            : V).apply(null, arguments);
      }
      function q(e) {
        var n = Array.prototype.slice.call(arguments, 1);
        return function () {
          var t = n.slice();
          return t.push.apply(t, arguments), e.apply(this, t);
        };
      }
      function B(t, o) {
        function e() {}
        (e.prototype = o.prototype),
          (t.Z = o.prototype),
          (t.prototype = new e()),
          ((t.prototype.constructor = t).Vb = function (t, e, n) {
            for (
              var r = Array(arguments.length - 2), i = 2;
              i < arguments.length;
              i++
            )
              r[i - 2] = arguments[i];
            return o.prototype[e].apply(t, r);
          });
      }
      function j() {
        (this.s = this.s), (this.o = this.o);
      }
      var K = {};
      (j.prototype.s = !1),
        (j.prototype.na = function () {
          var t;
          !this.s &&
            ((this.s = !0), this.M(), 0) &&
            ((t = this),
            (t =
              (Object.prototype.hasOwnProperty.call(t, P) && t[P]) ||
              (t[P] = ++M)),
            delete K[t]);
        }),
        (j.prototype.M = function () {
          if (this.o) for (; this.o.length; ) this.o.shift()();
        });
      var G = Array.prototype.indexOf
          ? function (t, e) {
              return Array.prototype.indexOf.call(t, e, void 0);
            }
          : function (t, e) {
              if ("string" == typeof t)
                return "string" != typeof e || 1 != e.length
                  ? -1
                  : t.indexOf(e, 0);
              for (var n = 0; n < t.length; n++)
                if (n in t && t[n] === e) return n;
              return -1;
            },
        Q = Array.prototype.forEach
          ? function (t, e, n) {
              Array.prototype.forEach.call(t, e, n);
            }
          : function (t, e, n) {
              for (
                var r = t.length,
                  i = "string" == typeof t ? t.split("") : t,
                  o = 0;
                o < r;
                o++
              )
                o in i && e.call(n, i[o], o, t);
            };
      function H() {
        return Array.prototype.concat.apply([], arguments);
      }
      function z(t) {
        var e = t.length;
        if (0 < e) {
          for (var n = Array(e), r = 0; r < e; r++) n[r] = t[r];
          return n;
        }
        return [];
      }
      function W(t) {
        return /^[\s\xa0]*$/.test(t);
      }
      var Y,
        X = String.prototype.trim
          ? function (t) {
              return t.trim();
            }
          : function (t) {
              return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1];
            };
      function $(t, e) {
        return -1 != t.indexOf(e);
      }
      function J(t, e) {
        return t < e ? -1 : e < t ? 1 : 0;
      }
      t: {
        var Z = R.navigator;
        if (Z) {
          Z = Z.userAgent;
          if (Z) {
            Y = Z;
            break t;
          }
        }
        Y = "";
      }
      function tt(t, e, n) {
        for (var r in t) e.call(n, t[r], r, t);
      }
      function et(t) {
        var e,
          n = {};
        for (e in t) n[e] = t[e];
        return n;
      }
      var nt =
        "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
          " "
        );
      function rt(t) {
        for (var e, n, r = 1; r < arguments.length; r++) {
          for (e in (n = arguments[r])) t[e] = n[e];
          for (var i = 0; i < nt.length; i++)
            (e = nt[i]),
              Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e]);
        }
      }
      function it(t) {
        return it[" "](t), t;
      }
      it[" "] = x;
      var ot,
        st = $(Y, "Opera"),
        at = $(Y, "Trident") || $(Y, "MSIE"),
        ut = $(Y, "Edge"),
        ct = ut || at,
        ht =
          $(Y, "Gecko") &&
          !($(Y.toLowerCase(), "webkit") && !$(Y, "Edge")) &&
          !($(Y, "Trident") || $(Y, "MSIE")) &&
          !$(Y, "Edge"),
        lt = $(Y.toLowerCase(), "webkit") && !$(Y, "Edge");
      function ft() {
        var t = R.document;
        return t ? t.documentMode : void 0;
      }
      t: {
        var dt = "",
          pt =
            ((pt = Y),
            ht
              ? /rv:([^\);]+)(\)|;)/.exec(pt)
              : ut
              ? /Edge\/([\d\.]+)/.exec(pt)
              : at
              ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(pt)
              : lt
              ? /WebKit\/(\S+)/.exec(pt)
              : st
              ? /(?:Version)[ \/]?(\S+)/.exec(pt)
              : void 0);
        if ((pt && (dt = pt ? pt[1] : ""), at)) {
          pt = ft();
          if (null != pt && pt > parseFloat(dt)) {
            ot = String(pt);
            break t;
          }
        }
        ot = dt;
      }
      var yt = {};
      function gt() {
        return (
          (t = function () {
            for (
              var t = 0,
                e = X(String(ot)).split("."),
                n = X("9").split("."),
                r = Math.max(e.length, n.length),
                i = 0;
              0 == t && i < r;
              i++
            )
              for (
                var o = e[i] || "", s = n[i] || "";
                (o = /(\d*)(\D*)(.*)/.exec(o) || ["", "", "", ""]),
                  (s = /(\d*)(\D*)(.*)/.exec(s) || ["", "", "", ""]),
                  (0 != o[0].length || 0 != s[0].length) &&
                    ((t =
                      J(
                        0 == o[1].length ? 0 : parseInt(o[1], 10),
                        0 == s[1].length ? 0 : parseInt(s[1], 10)
                      ) ||
                      J(0 == o[2].length, 0 == s[2].length) ||
                      J(o[2], s[2])),
                    (o = o[3]),
                    (s = s[3]),
                    0 == t);

              );
            return 0 <= t;
          }),
          (e = yt),
          Object.prototype.hasOwnProperty.call(e, 9) ? e[9] : (e[9] = t(9))
        );
        var t, e;
      }
      var mt = (R.document && at && (ft() || parseInt(ot, 10))) || void 0,
        vt = (function () {
          if (!R.addEventListener || !Object.defineProperty) return !1;
          var t = !1,
            e = Object.defineProperty({}, "passive", {
              get: function () {
                t = !0;
              },
            });
          try {
            R.addEventListener("test", x, e),
              R.removeEventListener("test", x, e);
          } catch (t) {}
          return t;
        })();
      function wt(t, e) {
        (this.type = t),
          (this.g = this.target = e),
          (this.defaultPrevented = !1);
      }
      function bt(t, e) {
        if (
          (wt.call(this, t ? t.type : ""),
          (this.relatedTarget = this.g = this.target = null),
          (this.button =
            this.screenY =
            this.screenX =
            this.clientY =
            this.clientX =
              0),
          (this.key = ""),
          (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
          (this.state = null),
          (this.pointerId = 0),
          (this.pointerType = ""),
          (this.i = null),
          t)
        ) {
          var n = (this.type = t.type),
            r =
              t.changedTouches && t.changedTouches.length
                ? t.changedTouches[0]
                : null;
          if (
            ((this.target = t.target || t.srcElement),
            (this.g = e),
            (e = t.relatedTarget))
          ) {
            if (ht) {
              t: {
                try {
                  it(e.nodeName);
                  var i = !0;
                  break t;
                } catch (t) {}
                i = !1;
              }
              i || (e = null);
            }
          } else
            "mouseover" == n
              ? (e = t.fromElement)
              : "mouseout" == n && (e = t.toElement);
          (this.relatedTarget = e),
            r
              ? ((this.clientX = void 0 !== r.clientX ? r.clientX : r.pageX),
                (this.clientY = void 0 !== r.clientY ? r.clientY : r.pageY),
                (this.screenX = r.screenX || 0),
                (this.screenY = r.screenY || 0))
              : ((this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX),
                (this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY),
                (this.screenX = t.screenX || 0),
                (this.screenY = t.screenY || 0)),
            (this.button = t.button),
            (this.key = t.key || ""),
            (this.ctrlKey = t.ctrlKey),
            (this.altKey = t.altKey),
            (this.shiftKey = t.shiftKey),
            (this.metaKey = t.metaKey),
            (this.pointerId = t.pointerId || 0),
            (this.pointerType =
              "string" == typeof t.pointerType
                ? t.pointerType
                : Et[t.pointerType] || ""),
            (this.state = t.state),
            (this.i = t).defaultPrevented && bt.Z.h.call(this);
        }
      }
      (wt.prototype.h = function () {
        this.defaultPrevented = !0;
      }),
        B(bt, wt);
      var Et = { 2: "touch", 3: "pen", 4: "mouse" };
      bt.prototype.h = function () {
        bt.Z.h.call(this);
        var t = this.i;
        t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
      };
      var Tt = "closure_listenable_" + ((1e6 * Math.random()) | 0),
        It = 0;
      function _t(t, e, n, r, i) {
        (this.listener = t),
          (this.proxy = null),
          (this.src = e),
          (this.type = n),
          (this.capture = !!r),
          (this.ia = i),
          (this.key = ++It),
          (this.ca = this.fa = !1);
      }
      function St(t) {
        (t.ca = !0),
          (t.listener = null),
          (t.proxy = null),
          (t.src = null),
          (t.ia = null);
      }
      function At(t) {
        (this.src = t), (this.g = {}), (this.h = 0);
      }
      function Dt(t, e) {
        var n,
          r,
          i,
          o = e.type;
        o in t.g &&
          ((n = t.g[o]),
          (i = 0 <= (r = G(n, e))) && Array.prototype.splice.call(n, r, 1),
          i && (St(e), 0 == t.g[o].length && (delete t.g[o], t.h--)));
      }
      function Nt(t, e, n, r) {
        for (var i = 0; i < t.length; ++i) {
          var o = t[i];
          if (!o.ca && o.listener == e && o.capture == !!n && o.ia == r)
            return i;
        }
        return -1;
      }
      At.prototype.add = function (t, e, n, r, i) {
        var o = t.toString();
        (t = this.g[o]) || ((t = this.g[o] = []), this.h++);
        var s = Nt(t, e, r, i);
        return (
          -1 < s
            ? ((e = t[s]), n || (e.fa = !1))
            : (((e = new _t(e, this.src, o, !!r, i)).fa = n), t.push(e)),
          e
        );
      };
      var Ct = "closure_lm_" + ((1e6 * Math.random()) | 0),
        kt = {};
      function Rt(t, e, n, r, i) {
        if (r && r.once)
          return (function t(e, n, r, i, o) {
            if (Array.isArray(n)) {
              for (var s = 0; s < n.length; s++) t(e, n[s], r, i, o);
              return null;
            }
            r = Vt(r);
            return e && e[Tt]
              ? e.O(n, r, L(i) ? !!i.capture : !!i, o)
              : xt(e, n, r, !0, i, o);
          })(t, e, n, r, i);
        if (Array.isArray(e)) {
          for (var o = 0; o < e.length; o++) Rt(t, e[o], n, r, i);
          return null;
        }
        return (
          (n = Vt(n)),
          t && t[Tt]
            ? t.N(e, n, L(r) ? !!r.capture : !!r, i)
            : xt(t, e, n, !1, r, i)
        );
      }
      function xt(t, e, n, r, i, o) {
        if (!e) throw Error("Invalid event type");
        var s,
          a = L(i) ? !!i.capture : !!i,
          u = Mt(t);
        if ((u || (t[Ct] = u = new At(t)), (n = u.add(e, n, r, a, o)).proxy))
          return n;
        if (
          ((s = Pt),
          ((n.proxy = r =
            function t(e) {
              return s.call(t.src, t.listener, e);
            }).src = t),
          (r.listener = n),
          t.addEventListener)
        )
          void 0 === (i = !vt ? a : i) && (i = !1),
            t.addEventListener(e.toString(), r, i);
        else if (t.attachEvent) t.attachEvent(Lt(e.toString()), r);
        else {
          if (!t.addListener || !t.removeListener)
            throw Error("addEventListener and attachEvent are unavailable.");
          t.addListener(r);
        }
        return n;
      }
      function Ot(t) {
        var e, n, r;
        "number" != typeof t &&
          t &&
          !t.ca &&
          ((e = t.src) && e[Tt]
            ? Dt(e.i, t)
            : ((n = t.type),
              (r = t.proxy),
              e.removeEventListener
                ? e.removeEventListener(n, r, t.capture)
                : e.detachEvent
                ? e.detachEvent(Lt(n), r)
                : e.addListener && e.removeListener && e.removeListener(r),
              (n = Mt(e))
                ? (Dt(n, t), 0 == n.h && ((n.src = null), (e[Ct] = null)))
                : St(t)));
      }
      function Lt(t) {
        return t in kt ? kt[t] : (kt[t] = "on" + t);
      }
      function Pt(t, e) {
        var n, r;
        return (t =
          !!t.ca ||
          ((e = new bt(e, this)),
          (n = t.listener),
          (r = t.ia || t.src),
          t.fa && Ot(t),
          n.call(r, e)));
      }
      function Mt(t) {
        return (t = t[Ct]) instanceof At ? t : null;
      }
      var Ft = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
      function Vt(e) {
        return "function" == typeof e
          ? e
          : (e[Ft] ||
              (e[Ft] = function (t) {
                return e.handleEvent(t);
              }),
            e[Ft]);
      }
      function Ut() {
        j.call(this), (this.i = new At(this)), ((this.P = this).I = null);
      }
      function qt(t, e) {
        var n,
          r = t.I;
        if (r) for (n = []; r; r = r.I) n.push(r);
        if (
          ((t = t.P),
          (r = e.type || e),
          "string" == typeof e
            ? (e = new wt(e, t))
            : e instanceof wt
            ? (e.target = e.target || t)
            : ((s = e), rt((e = new wt(r, t)), s)),
          (s = !0),
          n)
        )
          for (var i = n.length - 1; 0 <= i; i--)
            var o = (e.g = n[i]), s = Bt(o, r, !0, e) && s;
        if (
          ((s = Bt((o = e.g = t), r, !0, e) && s),
          (s = Bt(o, r, !1, e) && s),
          n)
        )
          for (i = 0; i < n.length; i++)
            s = Bt((o = e.g = n[i]), r, !1, e) && s;
      }
      function Bt(t, e, n, r) {
        if (!(e = t.i.g[String(e)])) return !0;
        e = e.concat();
        for (var i = !0, o = 0; o < e.length; ++o) {
          var s,
            a,
            u = e[o];
          u &&
            !u.ca &&
            u.capture == n &&
            ((s = u.listener),
            (a = u.ia || u.src),
            u.fa && Dt(t.i, u),
            (i = !1 !== s.call(a, r) && i));
        }
        return i && !r.defaultPrevented;
      }
      B(Ut, j),
        (Ut.prototype[Tt] = !0),
        (Ut.prototype.removeEventListener = function (t, e, n, r) {
          !(function t(e, n, r, i, o) {
            if (Array.isArray(n))
              for (var s = 0; s < n.length; s++) t(e, n[s], r, i, o);
            else
              (i = L(i) ? !!i.capture : !!i),
                (r = Vt(r)),
                e && e[Tt]
                  ? ((e = e.i),
                    (n = String(n).toString()) in e.g &&
                      -1 < (r = Nt((s = e.g[n]), r, i, o)) &&
                      (St(s[r]),
                      Array.prototype.splice.call(s, r, 1),
                      0 == s.length && (delete e.g[n], e.h--)))
                  : (e = e && Mt(e)) &&
                    ((n = e.g[n.toString()]),
                    (r =
                      (e = -1) < (e = n ? Nt(n, r, i, o) : e) ? n[e] : null) &&
                      Ot(r));
          })(this, t, e, n, r);
        }),
        (Ut.prototype.M = function () {
          if ((Ut.Z.M.call(this), this.i)) {
            var t,
              e = this.i;
            for (t in e.g) {
              for (var n = e.g[t], r = 0; r < n.length; r++) St(n[r]);
              delete e.g[t], e.h--;
            }
          }
          this.I = null;
        }),
        (Ut.prototype.N = function (t, e, n, r) {
          return this.i.add(String(t), e, !1, n, r);
        }),
        (Ut.prototype.O = function (t, e, n, r) {
          return this.i.add(String(t), e, !0, n, r);
        });
      var jt = R.JSON.stringify;
      var Kt =
        ((Gt.prototype.add = function (t, e) {
          var n = Qt.get();
          n.set(t, e), this.h ? (this.h.next = n) : (this.g = n), (this.h = n);
        }),
        Gt);
      function Gt() {
        this.h = this.g = null;
      }
      var Qt =
        ((Ht.prototype.get = function () {
          var t;
          return (
            0 < this.h
              ? (this.h--, (t = this.g), (this.g = t.next), (t.next = null))
              : (t = this.i()),
            t
          );
        }),
        new Ht(
          function () {
            return new Wt();
          },
          function (t) {
            return t.reset();
          }
        ));
      function Ht(t, e) {
        (this.i = t), (this.j = e), (this.h = 0), (this.g = null);
      }
      var zt,
        Wt =
          ((Yt.prototype.set = function (t, e) {
            (this.h = t), (this.g = e), (this.next = null);
          }),
          (Yt.prototype.reset = function () {
            this.next = this.g = this.h = null;
          }),
          Yt);
      function Yt() {
        this.next = this.g = this.h = null;
      }
      function Xt(t, e) {
        var n;
        zt ||
          ((n = R.Promise.resolve(void 0)),
          (zt = function () {
            n.then(Zt);
          })),
          $t || (zt(), ($t = !0)),
          Jt.add(t, e);
      }
      var $t = !1,
        Jt = new Kt();
      function Zt() {
        for (
          var t;
          (e = t = void 0),
            (e = null),
            (t = Jt).g &&
              ((e = t.g),
              (t.g = t.g.next),
              t.g || (t.h = null),
              (e.next = null)),
            (t = e);

        ) {
          try {
            t.h.call(t.g);
          } catch (t) {
            !(function (t) {
              R.setTimeout(function () {
                throw t;
              }, 0);
            })(t);
          }
          var e = Qt;
          e.j(t), e.h < 100 && (e.h++, (t.next = e.g), (e.g = t));
        }
        $t = !1;
      }
      function te(t, e) {
        Ut.call(this),
          (this.h = t || 1),
          (this.g = e || R),
          (this.j = U(this.kb, this)),
          (this.l = Date.now());
      }
      function ee(t) {
        (t.da = !1), t.S && (t.g.clearTimeout(t.S), (t.S = null));
      }
      function ne(t, e, n) {
        if ("function" == typeof t) n && (t = U(t, n));
        else {
          if (!t || "function" != typeof t.handleEvent)
            throw Error("Invalid listener argument");
          t = U(t.handleEvent, t);
        }
        return 2147483647 < Number(e) ? -1 : R.setTimeout(t, e || 0);
      }
      B(te, Ut),
        ((N = te.prototype).da = !1),
        (N.S = null),
        (N.kb = function () {
          var t;
          this.da &&
            (0 < (t = Date.now() - this.l) && t < 0.8 * this.h
              ? (this.S = this.g.setTimeout(this.j, this.h - t))
              : (this.S && (this.g.clearTimeout(this.S), (this.S = null)),
                qt(this, "tick"),
                this.da && (ee(this), this.start())));
        }),
        (N.start = function () {
          (this.da = !0),
            this.S ||
              ((this.S = this.g.setTimeout(this.j, this.h)),
              (this.l = Date.now()));
        }),
        (N.M = function () {
          te.Z.M.call(this), ee(this), delete this.g;
        });
      var re,
        ie =
          ((function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null"
              );
            function n() {
              this.constructor = t;
            }
            A(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n()));
          })(oe, (re = j)),
          (oe.prototype.l = function (t) {
            (this.h = arguments),
              this.g
                ? (this.i = !0)
                : (function t(e) {
                    e.g = ne(function () {
                      (e.g = null), e.i && ((e.i = !1), t(e));
                    }, e.j);
                    var n = e.h;
                    (e.h = null), e.m.apply(null, n);
                  })(this);
          }),
          (oe.prototype.M = function () {
            re.prototype.M.call(this),
              this.g &&
                (R.clearTimeout(this.g),
                (this.g = null),
                (this.i = !1),
                (this.h = null));
          }),
          oe);
      function oe(t, e) {
        var n = re.call(this) || this;
        return (n.m = t), (n.j = e), (n.h = null), (n.i = !1), (n.g = null), n;
      }
      function se(t) {
        j.call(this), (this.h = t), (this.g = {});
      }
      B(se, j);
      var ae = [];
      function ue(t, e, n, r) {
        Array.isArray(n) || (n && (ae[0] = n.toString()), (n = ae));
        for (var i = 0; i < n.length; i++) {
          var o = Rt(e, n[i], r || t.handleEvent, !1, t.h || t);
          if (!o) break;
          t.g[o.key] = o;
        }
      }
      function ce(t) {
        tt(
          t.g,
          function (t, e) {
            this.g.hasOwnProperty(e) && Ot(t);
          },
          t
        ),
          (t.g = {});
      }
      function he() {
        this.g = !0;
      }
      function le(t, e, n, r) {
        t.info(function () {
          return (
            "XMLHTTP TEXT (" +
            e +
            "): " +
            (function (t, e) {
              if (!t.g) return e;
              if (!e) return null;
              try {
                var n = JSON.parse(e);
                if (n)
                  for (t = 0; t < n.length; t++)
                    if (Array.isArray(n[t])) {
                      var r = n[t];
                      if (!(r.length < 2)) {
                        var i = r[1];
                        if (Array.isArray(i) && !(i.length < 1)) {
                          var o = i[0];
                          if ("noop" != o && "stop" != o && "close" != o)
                            for (var s = 1; s < i.length; s++) i[s] = "";
                        }
                      }
                    }
                return jt(n);
              } catch (t) {
                return e;
              }
            })(t, n) +
            (r ? " " + r : "")
          );
        });
      }
      (se.prototype.M = function () {
        se.Z.M.call(this), ce(this);
      }),
        (se.prototype.handleEvent = function () {
          throw Error("EventHandler.handleEvent not implemented");
        }),
        (he.prototype.Aa = function () {
          this.g = !1;
        }),
        (he.prototype.info = function () {});
      var fe = {},
        de = null;
      function pe() {
        return (de = de || new Ut());
      }
      function ye(t) {
        wt.call(this, fe.Ma, t);
      }
      function ge() {
        var t = pe();
        qt(t, new ye(t));
      }
      function me(t, e) {
        wt.call(this, fe.STAT_EVENT, t), (this.stat = e);
      }
      function ve(t) {
        var e = pe();
        qt(e, new me(e, t));
      }
      function we(t, e) {
        wt.call(this, fe.Na, t), (this.size = e);
      }
      function be(t, e) {
        if ("function" != typeof t)
          throw Error("Fn must not be null and must be a function");
        return R.setTimeout(function () {
          t();
        }, e);
      }
      (fe.Ma = "serverreachability"),
        B(ye, wt),
        (fe.STAT_EVENT = "statevent"),
        B(me, wt),
        (fe.Na = "timingevent"),
        B(we, wt);
      var Ee = {
          NO_ERROR: 0,
          lb: 1,
          yb: 2,
          xb: 3,
          sb: 4,
          wb: 5,
          zb: 6,
          Ja: 7,
          TIMEOUT: 8,
          Cb: 9,
        },
        C = {
          qb: "complete",
          Mb: "success",
          Ka: "error",
          Ja: "abort",
          Eb: "ready",
          Fb: "readystatechange",
          TIMEOUT: "timeout",
          Ab: "incrementaldata",
          Db: "progress",
          tb: "downloadprogress",
          Ub: "uploadprogress",
        };
      function Te() {}
      function Ie(t) {
        return t.h || (t.h = t.i());
      }
      function _e() {}
      Te.prototype.h = null;
      Kt = { OPEN: "a", pb: "b", Ka: "c", Bb: "d" };
      function Se() {
        wt.call(this, "d");
      }
      function Ae() {
        wt.call(this, "c");
      }
      function De() {}
      function Ne(t, e, n, r) {
        (this.l = t),
          (this.j = e),
          (this.m = n),
          (this.X = r || 1),
          (this.V = new se(this)),
          (this.P = Re),
          (this.W = new te((t = ct ? 125 : void 0))),
          (this.H = null),
          (this.i = !1),
          (this.s = this.A = this.v = this.K = this.F = this.Y = this.B = null),
          (this.D = []),
          (this.g = null),
          (this.C = 0),
          (this.o = this.u = null),
          (this.N = -1),
          (this.I = !1),
          (this.O = 0),
          (this.L = null),
          (this.aa = this.J = this.$ = this.U = !1),
          (this.h = new Ce());
      }
      function Ce() {
        (this.i = null), (this.g = ""), (this.h = !1);
      }
      B(Se, wt),
        B(Ae, wt),
        B(De, Te),
        (De.prototype.g = function () {
          return new XMLHttpRequest();
        }),
        (De.prototype.i = function () {
          return {};
        });
      var ke = new De(),
        Re = 45e3,
        xe = {},
        Oe = {};
      function Le(t, e, n) {
        (t.K = 1), (t.v = nn(Xe(e))), (t.s = n), (t.U = !0), Pe(t, null);
      }
      function Pe(t, e) {
        (t.F = Date.now()), Ve(t), (t.A = Xe(t.v));
        var s,
          a,
          u,
          c,
          h,
          l,
          n = t.A,
          r = t.X;
        Array.isArray(r) || (r = [String(r)]),
          gn(n.h, "t", r),
          (t.C = 0),
          (n = t.l.H),
          (t.h = new Ce()),
          (t.g = mr(t.l, n ? e : null, !t.s)),
          0 < t.O && (t.L = new ie(U(t.Ia, t, t.g), t.O)),
          ue(t.V, t.g, "readystatechange", t.gb),
          (e = t.H ? et(t.H) : {}),
          t.s
            ? (t.u || (t.u = "POST"),
              (e["Content-Type"] = "application/x-www-form-urlencoded"),
              t.g.ea(t.A, t.u, t.s, e))
            : ((t.u = "GET"), t.g.ea(t.A, t.u, null, e)),
          ge(),
          (s = t.j),
          (a = t.u),
          (u = t.A),
          (c = t.m),
          (h = t.X),
          (l = t.s),
          s.info(function () {
            if (s.g)
              if (l)
                for (var t = "", e = l.split("&"), n = 0; n < e.length; n++) {
                  var r,
                    i,
                    o = e[n].split("=");
                  1 < o.length &&
                    ((r = o[0]),
                    (o = o[1]),
                    (t =
                      2 <= (i = r.split("_")).length && "type" == i[1]
                        ? t + (r + "=") + o + "&"
                        : t + (r + "=redacted&")));
                }
              else t = null;
            else t = l;
            return (
              "XMLHTTP REQ (" +
              c +
              ") [attempt " +
              h +
              "]: " +
              a +
              "\n" +
              u +
              "\n" +
              t
            );
          });
      }
      function Me(t) {
        return t.g && "GET" == t.u && 2 != t.K && t.l.Ba;
      }
      function Fe(t, e, n) {
        for (var r, i, o, s, a, u = !0; !t.I && t.C < n.length; ) {
          if (
            ((o = n),
            (a = s = void 0),
            (s = (i = t).C),
            (r =
              -1 == (a = o.indexOf("\n", s))
                ? Oe
                : ((s = Number(o.substring(s, a))),
                  isNaN(s)
                    ? xe
                    : (a += 1) + s > o.length
                    ? Oe
                    : ((o = o.substr(a, s)), (i.C = a + s), o))) == Oe)
          ) {
            4 == e && ((t.o = 4), ve(14), (u = !1)),
              le(t.j, t.m, null, "[Incomplete Response]");
            break;
          }
          if (r == xe) {
            (t.o = 4), ve(15), le(t.j, t.m, n, "[Invalid Chunk]"), (u = !1);
            break;
          }
          le(t.j, t.m, r, null), Ke(t, r);
        }
        Me(t) && r != Oe && r != xe && ((t.h.g = ""), (t.C = 0)),
          4 != e || 0 != n.length || t.h.h || ((t.o = 1), ve(16), (u = !1)),
          (t.i = t.i && u),
          u
            ? 0 < n.length &&
              !t.aa &&
              ((t.aa = !0),
              (e = t.l).g == t &&
                e.$ &&
                !e.L &&
                (e.h.info(
                  "Great, no buffering proxy detected. Bytes received: " +
                    n.length
                ),
                cr(e),
                (e.L = !0),
                ve(11)))
            : (le(t.j, t.m, n, "[Invalid Chunked Response]"), je(t), Be(t));
      }
      function Ve(t) {
        (t.Y = Date.now() + t.P), Ue(t, t.P);
      }
      function Ue(t, e) {
        if (null != t.B) throw Error("WatchDog timer not null");
        t.B = be(U(t.eb, t), e);
      }
      function qe(t) {
        t.B && (R.clearTimeout(t.B), (t.B = null));
      }
      function Be(t) {
        0 == t.l.G || t.I || fr(t.l, t);
      }
      function je(t) {
        qe(t);
        var e = t.L;
        e && "function" == typeof e.na && e.na(),
          (t.L = null),
          ee(t.W),
          ce(t.V),
          t.g && ((e = t.g), (t.g = null), e.abort(), e.na());
      }
      function Ke(t, e) {
        try {
          var n = t.l;
          if (0 != n.G && (n.g == t || _n(n.i, t)))
            if (((n.I = t.N), !t.J && _n(n.i, t) && 3 == n.G)) {
              try {
                var r = n.Ca.g.parse(e);
              } catch (y) {
                r = null;
              }
              if (Array.isArray(r) && 3 == r.length) {
                var i = r;
                if (0 == i[0]) {
                  t: if (!n.u) {
                    if (n.g) {
                      if (!(n.g.F + 3e3 < t.F)) break t;
                      lr(n), tr(n);
                    }
                    ur(n), ve(18);
                  }
                } else
                  (n.ta = i[1]),
                    0 < n.ta - n.U &&
                      i[2] < 37500 &&
                      n.N &&
                      0 == n.A &&
                      !n.v &&
                      (n.v = be(U(n.ab, n), 6e3));
                if (In(n.i) <= 1 && n.ka) {
                  try {
                    n.ka();
                  } catch (y) {}
                  n.ka = void 0;
                }
              } else pr(n, 11);
            } else if (((!t.J && n.g != t) || lr(n), !W(e)))
              for (i = n.Ca.g.parse(e), e = 0; e < i.length; e++) {
                var o,
                  s,
                  a,
                  u,
                  c,
                  h,
                  l,
                  f,
                  d,
                  p,
                  y = i[e];
                (n.U = y[0]),
                  (y = y[1]),
                  2 == n.G
                    ? "c" == y[0]
                      ? ((n.J = y[1]),
                        (n.la = y[2]),
                        null != (o = y[3]) &&
                          ((n.ma = o), n.h.info("VER=" + n.ma)),
                        null != (s = y[4]) &&
                          ((n.za = s), n.h.info("SVER=" + n.za)),
                        null != (a = y[5]) &&
                          "number" == typeof a &&
                          0 < a &&
                          ((r = 1.5 * a),
                          (n.K = r),
                          n.h.info("backChannelRequestTimeoutMs_=" + r)),
                        (r = n),
                        (u = t.g) &&
                          (!(c = u.g
                            ? u.g.getResponseHeader("X-Client-Wire-Protocol")
                            : null) ||
                            (!(h = r.i).g &&
                              ($(c, "spdy") || $(c, "quic") || $(c, "h2")) &&
                              ((h.j = h.l),
                              (h.g = new Set()),
                              h.h && (Sn(h, h.h), (h.h = null)))),
                          !r.D ||
                            ((l = u.g
                              ? u.g.getResponseHeader("X-HTTP-Session-Id")
                              : null) &&
                              ((r.sa = l), en(r.F, r.D, l)))),
                        (n.G = 3),
                        n.j && n.j.xa(),
                        n.$ &&
                          ((n.O = Date.now() - t.F),
                          n.h.info("Handshake RTT: " + n.O + "ms")),
                        (f = t),
                        ((r = n).oa = gr(r, r.H ? r.la : null, r.W)),
                        f.J
                          ? (An(r.i, f),
                            (d = f),
                            (p = r.K) && d.setTimeout(p),
                            d.B && (qe(d), Ve(d)),
                            (r.g = f))
                          : ar(r),
                        0 < n.l.length && rr(n))
                      : ("stop" != y[0] && "close" != y[0]) || pr(n, 7)
                    : 3 == n.G &&
                      ("stop" == y[0] || "close" == y[0]
                        ? "stop" == y[0]
                          ? pr(n, 7)
                          : Zn(n)
                        : "noop" != y[0] && n.j && n.j.wa(y),
                      (n.A = 0));
              }
          ge();
        } catch (y) {}
      }
      function Ge(t, e) {
        if (t.forEach && "function" == typeof t.forEach) t.forEach(e, void 0);
        else if (O(t) || "string" == typeof t) Q(t, e, void 0);
        else {
          if (t.T && "function" == typeof t.T) var n = t.T();
          else if (t.R && "function" == typeof t.R) n = void 0;
          else if (O(t) || "string" == typeof t)
            for (var n = [], r = t.length, i = 0; i < r; i++) n.push(i);
          else for (i in ((n = []), (r = 0), t)) n[r++] = i;
          for (
            var i = (r = (function (t) {
                if (t.R && "function" == typeof t.R) return t.R();
                if ("string" == typeof t) return t.split("");
                if (O(t)) {
                  for (var e = [], n = t.length, r = 0; r < n; r++)
                    e.push(t[r]);
                  return e;
                }
                for (r in ((e = []), (n = 0), t)) e[n++] = t[r];
                return e;
              })(t)).length,
              o = 0;
            o < i;
            o++
          )
            e.call(void 0, r[o], n && n[o], t);
        }
      }
      function Qe(t, e) {
        (this.h = {}), (this.g = []), (this.i = 0);
        var n = arguments.length;
        if (1 < n) {
          if (n % 2) throw Error("Uneven number of arguments");
          for (var r = 0; r < n; r += 2)
            this.set(arguments[r], arguments[r + 1]);
        } else if (t)
          if (t instanceof Qe)
            for (n = t.T(), r = 0; r < n.length; r++)
              this.set(n[r], t.get(n[r]));
          else for (r in t) this.set(r, t[r]);
      }
      function He(t) {
        if (t.i != t.g.length) {
          for (var e = 0, n = 0; e < t.g.length; ) {
            var r = t.g[e];
            ze(t.h, r) && (t.g[n++] = r), e++;
          }
          t.g.length = n;
        }
        if (t.i != t.g.length) {
          for (var i = {}, n = (e = 0); e < t.g.length; )
            ze(i, (r = t.g[e])) || (i[(t.g[n++] = r)] = 1), e++;
          t.g.length = n;
        }
      }
      function ze(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }
      ((N = Ne.prototype).setTimeout = function (t) {
        this.P = t;
      }),
        (N.gb = function (t) {
          t = t.target;
          var e = this.L;
          e && 3 == Wn(t) ? e.l() : this.Ia(t);
        }),
        (N.Ia = function (t) {
          try {
            if (t == this.g)
              t: {
                var e = Wn(this.g),
                  n = this.g.Da();
                this.g.ba();
                if (
                  !(e < 3) &&
                  (3 != e ||
                    ct ||
                    (this.g && (this.h.h || this.g.ga() || Yn(this.g))))
                ) {
                  this.I || 4 != e || 7 == n || ge(), qe(this);
                  var r = this.g.ba();
                  this.N = r;
                  e: if (Me(this)) {
                    var i = Yn(this.g);
                    t = "";
                    var o = i.length,
                      s = 4 == Wn(this.g);
                    if (!this.h.i) {
                      if ("undefined" == typeof TextDecoder) {
                        je(this), Be(this);
                        var a = "";
                        break e;
                      }
                      this.h.i = new R.TextDecoder();
                    }
                    for (n = 0; n < o; n++)
                      (this.h.h = !0),
                        (t += this.h.i.decode(i[n], {
                          stream: s && n == o - 1,
                        }));
                    i.splice(0, o),
                      (this.h.g += t),
                      (this.C = 0),
                      (a = this.h.g);
                  } else a = this.g.ga();
                  if (
                    ((this.i = 200 == r),
                    (l = this.j),
                    (f = this.u),
                    (d = this.A),
                    (p = this.m),
                    (y = this.X),
                    (g = e),
                    (m = r),
                    l.info(function () {
                      return (
                        "XMLHTTP RESP (" +
                        p +
                        ") [ attempt " +
                        y +
                        "]: " +
                        f +
                        "\n" +
                        d +
                        "\n" +
                        g +
                        " " +
                        m
                      );
                    }),
                    this.i)
                  ) {
                    if (this.$ && !this.J) {
                      e: {
                        if (this.g) {
                          var u,
                            c = this.g;
                          if (
                            (u = c.g
                              ? c.g.getResponseHeader("X-HTTP-Initial-Response")
                              : null) &&
                            !W(u)
                          ) {
                            var h = u;
                            break e;
                          }
                        }
                        h = null;
                      }
                      if (!(r = h)) {
                        (this.i = !1), (this.o = 3), ve(12), je(this), Be(this);
                        break t;
                      }
                      le(
                        this.j,
                        this.m,
                        r,
                        "Initial handshake response via X-HTTP-Initial-Response"
                      ),
                        (this.J = !0),
                        Ke(this, r);
                    }
                    this.U
                      ? (Fe(this, e, a),
                        ct &&
                          this.i &&
                          3 == e &&
                          (ue(this.V, this.W, "tick", this.fb), this.W.start()))
                      : (le(this.j, this.m, a, null), Ke(this, a)),
                      4 == e && je(this),
                      this.i &&
                        !this.I &&
                        (4 == e ? fr(this.l, this) : ((this.i = !1), Ve(this)));
                  } else
                    400 == r && 0 < a.indexOf("Unknown SID")
                      ? ((this.o = 3), ve(12))
                      : ((this.o = 0), ve(13)),
                      je(this),
                      Be(this);
                }
              }
          } catch (e) {}
          var l, f, d, p, y, g, m;
        }),
        (N.fb = function () {
          var t, e;
          this.g &&
            ((t = Wn(this.g)),
            (e = this.g.ga()),
            this.C < e.length &&
              (qe(this), Fe(this, t, e), this.i && 4 != t && Ve(this)));
        }),
        (N.cancel = function () {
          (this.I = !0), je(this);
        }),
        (N.eb = function () {
          this.B = null;
          var t,
            e,
            n = Date.now();
          0 <= n - this.Y
            ? ((t = this.j),
              (e = this.A),
              t.info(function () {
                return "TIMEOUT: " + e;
              }),
              2 != this.K && (ge(), ve(17)),
              je(this),
              (this.o = 2),
              Be(this))
            : Ue(this, this.Y - n);
        }),
        ((N = Qe.prototype).R = function () {
          He(this);
          for (var t = [], e = 0; e < this.g.length; e++)
            t.push(this.h[this.g[e]]);
          return t;
        }),
        (N.T = function () {
          return He(this), this.g.concat();
        }),
        (N.get = function (t, e) {
          return ze(this.h, t) ? this.h[t] : e;
        }),
        (N.set = function (t, e) {
          ze(this.h, t) || (this.i++, this.g.push(t)), (this.h[t] = e);
        }),
        (N.forEach = function (t, e) {
          for (var n = this.T(), r = 0; r < n.length; r++) {
            var i = n[r],
              o = this.get(i);
            t.call(e, o, i, this);
          }
        });
      var We =
        /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
      function Ye(t, e) {
        var n;
        (this.i = this.s = this.j = ""),
          (this.m = null),
          (this.o = this.l = ""),
          (this.g = !1),
          t instanceof Ye
            ? ((this.g = void 0 !== e ? e : t.g),
              $e(this, t.j),
              (this.s = t.s),
              Je(this, t.i),
              Ze(this, t.m),
              (this.l = t.l),
              (e = t.h),
              ((n = new fn()).i = e.i),
              e.g && ((n.g = new Qe(e.g)), (n.h = e.h)),
              tn(this, n),
              (this.o = t.o))
            : t && (n = String(t).match(We))
            ? ((this.g = !!e),
              $e(this, n[1] || "", !0),
              (this.s = rn(n[2] || "")),
              Je(this, n[3] || "", !0),
              Ze(this, n[4]),
              (this.l = rn(n[5] || "", !0)),
              tn(this, n[6] || "", !0),
              (this.o = rn(n[7] || "")))
            : ((this.g = !!e), (this.h = new fn(null, this.g)));
      }
      function Xe(t) {
        return new Ye(t);
      }
      function $e(t, e, n) {
        (t.j = n ? rn(e, !0) : e), t.j && (t.j = t.j.replace(/:$/, ""));
      }
      function Je(t, e, n) {
        t.i = n ? rn(e, !0) : e;
      }
      function Ze(t, e) {
        if (e) {
          if (((e = Number(e)), isNaN(e) || e < 0))
            throw Error("Bad port number " + e);
          t.m = e;
        } else t.m = null;
      }
      function tn(t, e, n) {
        var r, i;
        e instanceof fn
          ? ((t.h = e),
            (r = t.h),
            (i = t.g) &&
              !r.j &&
              (dn(r),
              (r.i = null),
              r.g.forEach(function (t, e) {
                var n = e.toLowerCase();
                e != n && (pn(this, e), gn(this, n, t));
              }, r)),
            (r.j = i))
          : (n || (e = on(e, hn)), (t.h = new fn(e, t.g)));
      }
      function en(t, e, n) {
        t.h.set(e, n);
      }
      function nn(t) {
        return (
          en(
            t,
            "zx",
            Math.floor(2147483648 * Math.random()).toString(36) +
              Math.abs(
                Math.floor(2147483648 * Math.random()) ^ Date.now()
              ).toString(36)
          ),
          t
        );
      }
      function rn(t, e) {
        return t
          ? e
            ? decodeURI(t.replace(/%25/g, "%2525"))
            : decodeURIComponent(t)
          : "";
      }
      function on(t, e, n) {
        return "string" == typeof t
          ? ((t = encodeURI(t).replace(e, sn)),
            (t = n ? t.replace(/%25([0-9a-fA-F]{2})/g, "%$1") : t))
          : null;
      }
      function sn(t) {
        return (
          "%" +
          (((t = t.charCodeAt(0)) >> 4) & 15).toString(16) +
          (15 & t).toString(16)
        );
      }
      Ye.prototype.toString = function () {
        var t = [],
          e = this.j;
        e && t.push(on(e, an, !0), ":");
        var n = this.i;
        return (
          (!n && "file" != e) ||
            (t.push("//"),
            (e = this.s) && t.push(on(e, an, !0), "@"),
            t.push(
              encodeURIComponent(String(n)).replace(
                /%25([0-9a-fA-F]{2})/g,
                "%$1"
              )
            ),
            null != (n = this.m) && t.push(":", String(n))),
          (n = this.l) &&
            (this.i && "/" != n.charAt(0) && t.push("/"),
            t.push(on(n, "/" == n.charAt(0) ? cn : un, !0))),
          (n = this.h.toString()) && t.push("?", n),
          (n = this.o) && t.push("#", on(n, ln)),
          t.join("")
        );
      };
      var an = /[#\/\?@]/g,
        un = /[#\?:]/g,
        cn = /[#\?]/g,
        hn = /[#\?@]/g,
        ln = /#/g;
      function fn(t, e) {
        (this.h = this.g = null), (this.i = t || null), (this.j = !!e);
      }
      function dn(n) {
        n.g ||
          ((n.g = new Qe()),
          (n.h = 0),
          n.i &&
            (function (t, e) {
              if (t) {
                t = t.split("&");
                for (var n = 0; n < t.length; n++) {
                  var r,
                    i = t[n].indexOf("="),
                    o = null;
                  0 <= i
                    ? ((r = t[n].substring(0, i)), (o = t[n].substring(i + 1)))
                    : (r = t[n]),
                    e(r, o ? decodeURIComponent(o.replace(/\+/g, " ")) : "");
                }
              }
            })(n.i, function (t, e) {
              n.add(decodeURIComponent(t.replace(/\+/g, " ")), e);
            }));
      }
      function pn(t, e) {
        dn(t),
          (e = mn(t, e)),
          ze(t.g.h, e) &&
            ((t.i = null),
            (t.h -= t.g.get(e).length),
            ze((t = t.g).h, e) &&
              (delete t.h[e], t.i--, t.g.length > 2 * t.i && He(t)));
      }
      function yn(t, e) {
        return dn(t), (e = mn(t, e)), ze(t.g.h, e);
      }
      function gn(t, e, n) {
        pn(t, e),
          0 < n.length &&
            ((t.i = null), t.g.set(mn(t, e), z(n)), (t.h += n.length));
      }
      function mn(t, e) {
        return (e = String(e)), (e = t.j ? e.toLowerCase() : e);
      }
      ((N = fn.prototype).add = function (t, e) {
        dn(this), (this.i = null), (t = mn(this, t));
        var n = this.g.get(t);
        return n || this.g.set(t, (n = [])), n.push(e), (this.h += 1), this;
      }),
        (N.forEach = function (n, r) {
          dn(this),
            this.g.forEach(function (t, e) {
              Q(
                t,
                function (t) {
                  n.call(r, t, e, this);
                },
                this
              );
            }, this);
        }),
        (N.T = function () {
          dn(this);
          for (
            var t = this.g.R(), e = this.g.T(), n = [], r = 0;
            r < e.length;
            r++
          )
            for (var i = t[r], o = 0; o < i.length; o++) n.push(e[r]);
          return n;
        }),
        (N.R = function (t) {
          dn(this);
          var e = [];
          if ("string" == typeof t)
            yn(this, t) && (e = H(e, this.g.get(mn(this, t))));
          else {
            t = this.g.R();
            for (var n = 0; n < t.length; n++) e = H(e, t[n]);
          }
          return e;
        }),
        (N.set = function (t, e) {
          return (
            dn(this),
            (this.i = null),
            yn(this, (t = mn(this, t))) && (this.h -= this.g.get(t).length),
            this.g.set(t, [e]),
            (this.h += 1),
            this
          );
        }),
        (N.get = function (t, e) {
          return t && 0 < (t = this.R(t)).length ? String(t[0]) : e;
        }),
        (N.toString = function () {
          if (this.i) return this.i;
          if (!this.g) return "";
          for (var t = [], e = this.g.T(), n = 0; n < e.length; n++)
            for (
              var r = e[n],
                i = encodeURIComponent(String(r)),
                r = this.R(r),
                o = 0;
              o < r.length;
              o++
            ) {
              var s = i;
              "" !== r[o] && (s += "=" + encodeURIComponent(String(r[o]))),
                t.push(s);
            }
          return (this.i = t.join("&"));
        });
      var vn = function (t, e) {
        (this.h = t), (this.g = e);
      };
      function wn(t) {
        (this.l = t || En),
          (t = R.PerformanceNavigationTiming
            ? 0 < (t = R.performance.getEntriesByType("navigation")).length &&
              ("hq" == t[0].nextHopProtocol || "h2" == t[0].nextHopProtocol)
            : !!(R.g && R.g.Ea && R.g.Ea() && R.g.Ea().Zb)),
          (this.j = t ? this.l : 1),
          (this.g = null),
          1 < this.j && (this.g = new Set()),
          (this.h = null),
          (this.i = []);
      }
      var bn,
        En = 10;
      function Tn(t) {
        return t.h || (t.g && t.g.size >= t.j);
      }
      function In(t) {
        return t.h ? 1 : t.g ? t.g.size : 0;
      }
      function _n(t, e) {
        return t.h ? t.h == e : t.g && t.g.has(e);
      }
      function Sn(t, e) {
        t.g ? t.g.add(e) : (t.h = e);
      }
      function An(t, e) {
        t.h && t.h == e ? (t.h = null) : t.g && t.g.has(e) && t.g.delete(e);
      }
      function Dn(t) {
        var e, n;
        if (null != t.h) return t.i.concat(t.h.D);
        if (null == t.g || 0 === t.g.size) return z(t.i);
        var r = t.i;
        try {
          for (var i = D(t.g.values()), o = i.next(); !o.done; o = i.next())
            var s = o.value, r = r.concat(s.D);
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            o && !o.done && (n = i.return) && n.call(i);
          } finally {
            if (e) throw e.error;
          }
        }
        return r;
      }
      function Nn() {}
      function Cn() {
        this.g = new Nn();
      }
      function kn(t, e, n, r, i) {
        try {
          (e.onload = null),
            (e.onerror = null),
            (e.onabort = null),
            (e.ontimeout = null),
            i(r);
        } catch (t) {}
      }
      function Rn(t) {
        (this.l = t.$b || null), (this.j = t.ib || !1);
      }
      function xn(t, e) {
        Ut.call(this),
          (this.D = t),
          (this.u = e),
          (this.m = void 0),
          (this.readyState = On),
          (this.status = 0),
          (this.responseType =
            this.responseText =
            this.response =
            this.statusText =
              ""),
          (this.onreadystatechange = null),
          (this.v = new Headers()),
          (this.h = null),
          (this.C = "GET"),
          (this.B = ""),
          (this.g = !1),
          (this.A = this.j = this.l = null);
      }
      (wn.prototype.cancel = function () {
        var e, t;
        if (((this.i = Dn(this)), this.h)) this.h.cancel(), (this.h = null);
        else if (this.g && 0 !== this.g.size) {
          try {
            for (
              var n = D(this.g.values()), r = n.next();
              !r.done;
              r = n.next()
            )
              r.value.cancel();
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              r && !r.done && (t = n.return) && t.call(n);
            } finally {
              if (e) throw e.error;
            }
          }
          this.g.clear();
        }
      }),
        (Nn.prototype.stringify = function (t) {
          return R.JSON.stringify(t, void 0);
        }),
        (Nn.prototype.parse = function (t) {
          return R.JSON.parse(t, void 0);
        }),
        B(Rn, Te),
        (Rn.prototype.g = function () {
          return new xn(this.l, this.j);
        }),
        (Rn.prototype.i =
          ((bn = {}),
          function () {
            return bn;
          })),
        B(xn, Ut);
      var On = 0;
      function Ln(t) {
        t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t));
      }
      function Pn(t) {
        (t.readyState = 4), (t.l = null), (t.j = null), (t.A = null), Mn(t);
      }
      function Mn(t) {
        t.onreadystatechange && t.onreadystatechange.call(t);
      }
      ((N = xn.prototype).open = function (t, e) {
        if (this.readyState != On)
          throw (this.abort(), Error("Error reopening a connection"));
        (this.C = t), (this.B = e), (this.readyState = 1), Mn(this);
      }),
        (N.send = function (t) {
          if (1 != this.readyState)
            throw (this.abort(), Error("need to call open() first. "));
          this.g = !0;
          var e = {
            headers: this.v,
            method: this.C,
            credentials: this.m,
            cache: void 0,
          };
          t && (e.body = t),
            (this.D || R)
              .fetch(new Request(this.B, e))
              .then(this.Va.bind(this), this.ha.bind(this));
        }),
        (N.abort = function () {
          (this.response = this.responseText = ""),
            (this.v = new Headers()),
            (this.status = 0),
            this.j && this.j.cancel("Request was aborted."),
            1 <= this.readyState &&
              this.g &&
              4 != this.readyState &&
              ((this.g = !1), Pn(this)),
            (this.readyState = On);
        }),
        (N.Va = function (t) {
          if (
            this.g &&
            ((this.l = t),
            this.h ||
              ((this.status = this.l.status),
              (this.statusText = this.l.statusText),
              (this.h = t.headers),
              (this.readyState = 2),
              Mn(this)),
            this.g && ((this.readyState = 3), Mn(this), this.g))
          )
            if ("arraybuffer" === this.responseType)
              t.arrayBuffer().then(this.Ta.bind(this), this.ha.bind(this));
            else if (void 0 !== R.ReadableStream && "body" in t) {
              if (((this.j = t.body.getReader()), this.u)) {
                if (this.responseType)
                  throw Error(
                    'responseType must be empty for "streamBinaryChunks" mode responses.'
                  );
                this.response = [];
              } else
                (this.response = this.responseText = ""),
                  (this.A = new TextDecoder());
              Ln(this);
            } else t.text().then(this.Ua.bind(this), this.ha.bind(this));
        }),
        (N.Sa = function (t) {
          var e;
          this.g &&
            (this.u && t.value
              ? this.response.push(t.value)
              : this.u ||
                ((e = t.value || new Uint8Array(0)),
                (e = this.A.decode(e, { stream: !t.done })) &&
                  (this.response = this.responseText += e)),
            (t.done ? Pn : Mn)(this),
            3 == this.readyState && Ln(this));
        }),
        (N.Ua = function (t) {
          this.g && ((this.response = this.responseText = t), Pn(this));
        }),
        (N.Ta = function (t) {
          this.g && ((this.response = t), Pn(this));
        }),
        (N.ha = function () {
          this.g && Pn(this);
        }),
        (N.setRequestHeader = function (t, e) {
          this.v.append(t, e);
        }),
        (N.getResponseHeader = function (t) {
          return (this.h && this.h.get(t.toLowerCase())) || "";
        }),
        (N.getAllResponseHeaders = function () {
          if (!this.h) return "";
          for (var t = [], e = this.h.entries(), n = e.next(); !n.done; )
            (n = n.value), t.push(n[0] + ": " + n[1]), (n = e.next());
          return t.join("\r\n");
        }),
        Object.defineProperty(xn.prototype, "withCredentials", {
          get: function () {
            return "include" === this.m;
          },
          set: function (t) {
            this.m = t ? "include" : "same-origin";
          },
        });
      var Fn = R.JSON.parse;
      function Vn(t) {
        Ut.call(this),
          (this.headers = new Qe()),
          (this.u = t || null),
          (this.h = !1),
          (this.C = this.g = null),
          (this.H = ""),
          (this.m = 0),
          (this.j = ""),
          (this.l = this.F = this.v = this.D = !1),
          (this.B = 0),
          (this.A = null),
          (this.J = Un),
          (this.K = this.L = !1);
      }
      B(Vn, Ut);
      var Un = "",
        qn = /^https?$/i,
        Bn = ["POST", "PUT"];
      function jn(t) {
        return "content-type" == t.toLowerCase();
      }
      function Kn(t, e) {
        (t.h = !1),
          t.g && ((t.l = !0), t.g.abort(), (t.l = !1)),
          (t.j = e),
          (t.m = 5),
          Gn(t),
          Hn(t);
      }
      function Gn(t) {
        t.D || ((t.D = !0), qt(t, "complete"), qt(t, "error"));
      }
      function Qn(t) {
        if (t.h && void 0 !== k && (!t.C[1] || 4 != Wn(t) || 2 != t.ba()))
          if (t.v && 4 == Wn(t)) ne(t.Fa, 0, t);
          else if ((qt(t, "readystatechange"), 4 == Wn(t))) {
            t.h = !1;
            try {
              var e,
                n,
                r,
                i,
                o = t.ba();
              t: switch (o) {
                case 200:
                case 201:
                case 202:
                case 204:
                case 206:
                case 304:
                case 1223:
                  var s = !0;
                  break t;
                default:
                  s = !1;
              }
              if (
                ((e = s) ||
                  ((n = 0 === o) &&
                    (!(i = String(t.H).match(We)[1] || null) &&
                      R.self &&
                      R.self.location &&
                      (i = (r = R.self.location.protocol).substr(
                        0,
                        r.length - 1
                      )),
                    (n = !qn.test(i ? i.toLowerCase() : ""))),
                  (e = n)),
                e)
              )
                qt(t, "complete"), qt(t, "success");
              else {
                t.m = 6;
                try {
                  var a = 2 < Wn(t) ? t.g.statusText : "";
                } catch (t) {
                  a = "";
                }
                (t.j = a + " [" + t.ba() + "]"), Gn(t);
              }
            } finally {
              Hn(t);
            }
          }
      }
      function Hn(t, e) {
        if (t.g) {
          zn(t);
          var n = t.g,
            r = t.C[0] ? x : null;
          (t.g = null), (t.C = null), e || qt(t, "ready");
          try {
            n.onreadystatechange = r;
          } catch (t) {}
        }
      }
      function zn(t) {
        t.g && t.K && (t.g.ontimeout = null),
          t.A && (R.clearTimeout(t.A), (t.A = null));
      }
      function Wn(t) {
        return t.g ? t.g.readyState : 0;
      }
      function Yn(t) {
        try {
          if (!t.g) return null;
          if ("response" in t.g) return t.g.response;
          switch (t.J) {
            case Un:
            case "text":
              return t.g.responseText;
            case "arraybuffer":
              if ("mozResponseArrayBuffer" in t.g)
                return t.g.mozResponseArrayBuffer;
          }
          return null;
        } catch (t) {
          return null;
        }
      }
      function Xn(t, e, n) {
        t: {
          for (r in n) {
            var r = !1;
            break t;
          }
          r = !0;
        }
        var i;
        r ||
          ((i = ""),
          tt(n, function (t, e) {
            (i += e), (i += ":"), (i += t), (i += "\r\n");
          }),
          (n = i),
          "string" == typeof t
            ? null != n && encodeURIComponent(String(n))
            : en(t, e, n));
      }
      function $n(t, e, n) {
        return (
          (n && n.internalChannelParams && n.internalChannelParams[t]) || e
        );
      }
      function Jn(t) {
        (this.za = 0),
          (this.l = []),
          (this.h = new he()),
          (this.la =
            this.oa =
            this.F =
            this.W =
            this.g =
            this.sa =
            this.D =
            this.aa =
            this.o =
            this.P =
            this.s =
              null),
          (this.Za = this.V = 0),
          (this.Xa = $n("failFast", !1, t)),
          (this.N = this.v = this.u = this.m = this.j = null),
          (this.X = !0),
          (this.I = this.ta = this.U = -1),
          (this.Y = this.A = this.C = 0),
          (this.Pa = $n("baseRetryDelayMs", 5e3, t)),
          (this.$a = $n("retryDelaySeedMs", 1e4, t)),
          (this.Ya = $n("forwardChannelMaxRetries", 2, t)),
          (this.ra = $n("forwardChannelRequestTimeoutMs", 2e4, t)),
          (this.qa = (t && t.xmlHttpFactory) || void 0),
          (this.Ba = (t && t.Yb) || !1),
          (this.K = void 0),
          (this.H = (t && t.supportsCrossDomainXhr) || !1),
          (this.J = ""),
          (this.i = new wn(t && t.concurrentRequestLimit)),
          (this.Ca = new Cn()),
          (this.ja = (t && t.fastHandshake) || !1),
          (this.Ra = (t && t.Wb) || !1),
          t && t.Aa && this.h.Aa(),
          t && t.forceLongPolling && (this.X = !1),
          (this.$ = (!this.ja && this.X && t && t.detectBufferingProxy) || !1),
          (this.ka = void 0),
          (this.O = 0),
          (this.L = !1),
          (this.B = null),
          (this.Wa = !t || !1 !== t.Xb);
      }
      function Zn(t) {
        var e, n;
        er(t),
          3 == t.G &&
            ((e = t.V++),
            en((n = Xe(t.F)), "SID", t.J),
            en(n, "RID", e),
            en(n, "TYPE", "terminate"),
            or(t, n),
            ((e = new Ne(t, t.h, e, void 0)).K = 2),
            (e.v = nn(Xe(n))),
            (n = !1),
            !(n =
              R.navigator && R.navigator.sendBeacon
                ? R.navigator.sendBeacon(e.v.toString(), "")
                : n) &&
              R.Image &&
              ((new Image().src = e.v), (n = !0)),
            n || ((e.g = mr(e.l, null)), e.g.ea(e.v)),
            (e.F = Date.now()),
            Ve(e)),
          yr(t);
      }
      function tr(t) {
        t.g && (cr(t), t.g.cancel(), (t.g = null));
      }
      function er(t) {
        tr(t),
          t.u && (R.clearTimeout(t.u), (t.u = null)),
          lr(t),
          t.i.cancel(),
          t.m && ("number" == typeof t.m && R.clearTimeout(t.m), (t.m = null));
      }
      function nr(t, e) {
        t.l.push(new vn(t.Za++, e)), 3 == t.G && rr(t);
      }
      function rr(t) {
        Tn(t.i) || t.m || ((t.m = !0), Xt(t.Ha, t), (t.C = 0));
      }
      function ir(t, e) {
        var n = e ? e.m : t.V++,
          r = Xe(t.F);
        en(r, "SID", t.J),
          en(r, "RID", n),
          en(r, "AID", t.U),
          or(t, r),
          t.o && t.s && Xn(r, t.o, t.s),
          (n = new Ne(t, t.h, n, t.C + 1)),
          null === t.o && (n.H = t.s),
          e && (t.l = e.D.concat(t.l)),
          (e = sr(t, n, 1e3)),
          n.setTimeout(
            Math.round(0.5 * t.ra) + Math.round(0.5 * t.ra * Math.random())
          ),
          Sn(t.i, n),
          Le(n, r, e);
      }
      function or(t, n) {
        t.j &&
          Ge({}, function (t, e) {
            en(n, e, t);
          });
      }
      function sr(t, e, n) {
        n = Math.min(t.l.length, n);
        var r = t.j ? U(t.j.Oa, t.j, t) : null;
        t: for (var i = t.l, o = -1; ; ) {
          var s = ["count=" + n];
          -1 == o
            ? 0 < n
              ? ((o = i[0].h), s.push("ofs=" + o))
              : (o = 0)
            : s.push("ofs=" + o);
          for (var a = !0, u = 0; u < n; u++) {
            var c = i[u].h,
              h = i[u].g;
            if ((c -= o) < 0) (o = Math.max(0, i[u].h - 100)), (a = !1);
            else
              try {
                !(function (t, r, e) {
                  var i = e || "";
                  try {
                    Ge(t, function (t, e) {
                      var n = t;
                      L(t) && (n = jt(t)),
                        r.push(i + e + "=" + encodeURIComponent(n));
                    });
                  } catch (t) {
                    throw (
                      (r.push(i + "type=" + encodeURIComponent("_badmap")), t)
                    );
                  }
                })(h, s, "req" + c + "_");
              } catch (t) {
                r && r(h);
              }
          }
          if (a) {
            r = s.join("&");
            break t;
          }
        }
        return (t = t.l.splice(0, n)), (e.D = t), r;
      }
      function ar(t) {
        t.g || t.u || ((t.Y = 1), Xt(t.Ga, t), (t.A = 0));
      }
      function ur(t) {
        return (
          !(t.g || t.u || 3 <= t.A) &&
          (t.Y++, (t.u = be(U(t.Ga, t), dr(t, t.A))), t.A++, 1)
        );
      }
      function cr(t) {
        null != t.B && (R.clearTimeout(t.B), (t.B = null));
      }
      function hr(t) {
        (t.g = new Ne(t, t.h, "rpc", t.Y)),
          null === t.o && (t.g.H = t.s),
          (t.g.O = 0);
        var e = Xe(t.oa);
        en(e, "RID", "rpc"),
          en(e, "SID", t.J),
          en(e, "CI", t.N ? "0" : "1"),
          en(e, "AID", t.U),
          or(t, e),
          en(e, "TYPE", "xmlhttp"),
          t.o && t.s && Xn(e, t.o, t.s),
          t.K && t.g.setTimeout(t.K);
        var n = t.g;
        (t = t.la),
          (n.K = 1),
          (n.v = nn(Xe(e))),
          (n.s = null),
          (n.U = !0),
          Pe(n, t);
      }
      function lr(t) {
        null != t.v && (R.clearTimeout(t.v), (t.v = null));
      }
      function fr(t, e) {
        var n,
          r,
          i,
          o = null;
        if (t.g == e) {
          lr(t), cr(t), (t.g = null);
          var s = 2;
        } else {
          if (!_n(t.i, e)) return;
          (o = e.D), An(t.i, e), (s = 1);
        }
        if (((t.I = e.N), 0 != t.G))
          if (e.i)
            1 == s
              ? ((o = e.s ? e.s.length : 0),
                (e = Date.now() - e.F),
                (n = t.C),
                qt((s = pe()), new we(s, o)),
                rr(t))
              : ar(t);
          else if (
            3 == (n = e.o) ||
            (0 == n && 0 < t.I) ||
            ((1 != s ||
              ((i = e),
              In((r = t).i) >= r.i.j - (r.m ? 1 : 0) ||
                (r.m
                  ? ((r.l = i.D.concat(r.l)), 0)
                  : 1 == r.G ||
                    2 == r.G ||
                    r.C >= (r.Xa ? 0 : r.Ya) ||
                    ((r.m = be(U(r.Ha, r, i), dr(r, r.C))), r.C++, 0)))) &&
              (2 != s || !ur(t)))
          )
            switch (
              (o && 0 < o.length && ((e = t.i), (e.i = e.i.concat(o))), n)
            ) {
              case 1:
                pr(t, 5);
                break;
              case 4:
                pr(t, 10);
                break;
              case 3:
                pr(t, 6);
                break;
              default:
                pr(t, 2);
            }
      }
      function dr(t, e) {
        var n = t.Pa + Math.floor(Math.random() * t.$a);
        return t.j || (n *= 2), n * e;
      }
      function pr(t, e) {
        var n, r, i, o;
        t.h.info("Error code " + e),
          2 == e
            ? ((r = null),
              t.j && (r = null),
              (o = U(t.jb, t)),
              r ||
                ((r = new Ye("//www.google.com/images/cleardot.gif")),
                (R.location && "http" == R.location.protocol) || $e(r, "https"),
                nn(r)),
              (n = r.toString()),
              (r = o),
              (o = new he()),
              R.Image
                ? (((i = new Image()).onload = q(
                    kn,
                    o,
                    i,
                    "TestLoadImage: loaded",
                    !0,
                    r
                  )),
                  (i.onerror = q(kn, o, i, "TestLoadImage: error", !1, r)),
                  (i.onabort = q(kn, o, i, "TestLoadImage: abort", !1, r)),
                  (i.ontimeout = q(kn, o, i, "TestLoadImage: timeout", !1, r)),
                  R.setTimeout(function () {
                    i.ontimeout && i.ontimeout();
                  }, 1e4),
                  (i.src = n))
                : r(!1))
            : ve(2),
          (t.G = 0),
          t.j && t.j.va(e),
          yr(t),
          er(t);
      }
      function yr(t) {
        (t.G = 0),
          (t.I = -1),
          t.j &&
            ((0 == Dn(t.i).length && 0 == t.l.length) ||
              ((t.i.i.length = 0), z(t.l), (t.l.length = 0)),
            t.j.ua());
      }
      function gr(t, e, n) {
        var r,
          i,
          o,
          s,
          a,
          u = (s = n) instanceof Ye ? Xe(s) : new Ye(s, void 0);
        return (
          "" != u.i
            ? (e && Je(u, e + "." + u.i), Ze(u, u.m))
            : ((a = R.location),
              (r = a.protocol),
              (i = e ? e + "." + a.hostname : a.hostname),
              (o = +a.port),
              (s = n),
              (a = new Ye(null, void 0)),
              r && $e(a, r),
              i && Je(a, i),
              o && Ze(a, o),
              s && (a.l = s),
              (u = a)),
          t.aa &&
            tt(t.aa, function (t, e) {
              en(u, e, t);
            }),
          (e = t.D),
          (n = t.sa),
          e && n && en(u, e, n),
          en(u, "VER", t.ma),
          or(t, u),
          u
        );
      }
      function mr(t, e, n) {
        if (e && !t.H)
          throw Error("Can't create secondary domain capable XhrIo object.");
        return (
          ((e =
            n && t.Ba && !t.qa ? new Vn(new Rn({ ib: !0 })) : new Vn(t.qa)).L =
            t.H),
          e
        );
      }
      function vr() {}
      function wr() {
        if (at && !(10 <= Number(mt)))
          throw Error("Environmental error: no available transport.");
      }
      function br(t, e) {
        Ut.call(this),
          (this.g = new Jn(e)),
          (this.l = t),
          (this.h = (e && e.messageUrlParams) || null),
          (t = (e && e.messageHeaders) || null),
          e &&
            e.clientProtocolHeaderRequired &&
            (t
              ? (t["X-Client-Protocol"] = "webchannel")
              : (t = { "X-Client-Protocol": "webchannel" })),
          (this.g.s = t),
          (t = (e && e.initMessageHeaders) || null),
          e &&
            e.messageContentType &&
            (t
              ? (t["X-WebChannel-Content-Type"] = e.messageContentType)
              : (t = { "X-WebChannel-Content-Type": e.messageContentType })),
          e &&
            e.ya &&
            (t
              ? (t["X-WebChannel-Client-Profile"] = e.ya)
              : (t = { "X-WebChannel-Client-Profile": e.ya })),
          (this.g.P = t),
          (t = e && e.httpHeadersOverwriteParam) && !W(t) && (this.g.o = t),
          (this.A = (e && e.supportsCrossDomainXhr) || !1),
          (this.v = (e && e.sendRawJson) || !1),
          (e = e && e.httpSessionIdParam) &&
            !W(e) &&
            ((this.g.D = e),
            null !== (t = this.h) &&
              e in t &&
              e in (t = this.h) &&
              delete t[e]),
          (this.j = new Ir(this));
      }
      function Er(t) {
        Se.call(this);
        var e = t.__sm__;
        if (e) {
          t: {
            for (var n in e) {
              t = n;
              break t;
            }
            t = void 0;
          }
          (this.i = t) &&
            ((t = this.i), (e = null !== e && t in e ? e[t] : void 0)),
            (this.data = e);
        } else this.data = t;
      }
      function Tr() {
        Ae.call(this), (this.status = 1);
      }
      function Ir(t) {
        this.g = t;
      }
      ((N = Vn.prototype).ea = function (t, e, n, r) {
        if (this.g)
          throw Error(
            "[goog.net.XhrIo] Object is active with another request=" +
              this.H +
              "; newUri=" +
              t
          );
        (e = e ? e.toUpperCase() : "GET"),
          (this.H = t),
          (this.j = ""),
          (this.m = 0),
          (this.D = !1),
          (this.h = !0),
          (this.g = (this.u || ke).g()),
          (this.C = this.u ? Ie(this.u) : Ie(ke)),
          (this.g.onreadystatechange = U(this.Fa, this));
        try {
          (this.F = !0), this.g.open(e, String(t), !0), (this.F = !1);
        } catch (t) {
          return void Kn(this, t);
        }
        t = n || "";
        var i,
          o = new Qe(this.headers);
        r &&
          Ge(r, function (t, e) {
            o.set(e, t);
          }),
          (r = (function (t) {
            t: {
              for (
                var e = jn,
                  n = t.length,
                  r = "string" == typeof t ? t.split("") : t,
                  i = 0;
                i < n;
                i++
              )
                if (i in r && e.call(void 0, r[i], i, t)) {
                  e = i;
                  break t;
                }
              e = -1;
            }
            return e < 0 ? null : "string" == typeof t ? t.charAt(e) : t[e];
          })(o.T())),
          (n = R.FormData && t instanceof R.FormData),
          0 <= G(Bn, e) &&
            !r &&
            !n &&
            o.set(
              "Content-Type",
              "application/x-www-form-urlencoded;charset=utf-8"
            ),
          o.forEach(function (t, e) {
            this.g.setRequestHeader(e, t);
          }, this),
          this.J && (this.g.responseType = this.J),
          "withCredentials" in this.g &&
            this.g.withCredentials !== this.L &&
            (this.g.withCredentials = this.L);
        try {
          zn(this),
            0 < this.B &&
              ((this.K =
                ((i = this.g),
                at &&
                  gt() &&
                  "number" == typeof i.timeout &&
                  void 0 !== i.ontimeout))
                ? ((this.g.timeout = this.B),
                  (this.g.ontimeout = U(this.pa, this)))
                : (this.A = ne(this.pa, this.B, this))),
            (this.v = !0),
            this.g.send(t),
            (this.v = !1);
        } catch (t) {
          Kn(this, t);
        }
      }),
        (N.pa = function () {
          void 0 !== k &&
            this.g &&
            ((this.j = "Timed out after " + this.B + "ms, aborting"),
            (this.m = 8),
            qt(this, "timeout"),
            this.abort(8));
        }),
        (N.abort = function (t) {
          this.g &&
            this.h &&
            ((this.h = !1),
            (this.l = !0),
            this.g.abort(),
            (this.l = !1),
            (this.m = t || 7),
            qt(this, "complete"),
            qt(this, "abort"),
            Hn(this));
        }),
        (N.M = function () {
          this.g &&
            (this.h &&
              ((this.h = !1), (this.l = !0), this.g.abort(), (this.l = !1)),
            Hn(this, !0)),
            Vn.Z.M.call(this);
        }),
        (N.Fa = function () {
          this.s || (this.F || this.v || this.l ? Qn(this) : this.cb());
        }),
        (N.cb = function () {
          Qn(this);
        }),
        (N.ba = function () {
          try {
            return 2 < Wn(this) ? this.g.status : -1;
          } catch (t) {
            return -1;
          }
        }),
        (N.ga = function () {
          try {
            return this.g ? this.g.responseText : "";
          } catch (t) {
            return "";
          }
        }),
        (N.Qa = function (t) {
          if (this.g) {
            var e = this.g.responseText;
            return t && 0 == e.indexOf(t) && (e = e.substring(t.length)), Fn(e);
          }
        }),
        (N.Da = function () {
          return this.m;
        }),
        (N.La = function () {
          return "string" == typeof this.j ? this.j : String(this.j);
        }),
        ((N = Jn.prototype).ma = 8),
        (N.G = 1),
        (N.hb = function (t) {
          try {
            this.h.info("Origin Trials invoked: " + t);
          } catch (t) {}
        }),
        (N.Ha = function (t) {
          if (this.m)
            if (((this.m = null), 1 == this.G)) {
              if (!t) {
                (this.V = Math.floor(1e5 * Math.random())), (t = this.V++);
                var e = new Ne(this, this.h, t, void 0),
                  n = this.s;
                if (
                  (this.P && (n ? rt((n = et(n)), this.P) : (n = this.P)),
                  null === this.o && (e.H = n),
                  this.ja)
                )
                  t: {
                    for (var r = 0, i = 0; i < this.l.length; i++) {
                      var o = this.l[i];
                      if (
                        ("__data__" in o.g &&
                        "string" == typeof (o = o.g.__data__)
                          ? (o = o.length)
                          : (o = void 0),
                        void 0 === o)
                      )
                        break;
                      if (4096 < (r += o)) {
                        r = i;
                        break t;
                      }
                      if (4096 === r || i === this.l.length - 1) {
                        r = i + 1;
                        break t;
                      }
                    }
                    r = 1e3;
                  }
                else r = 1e3;
                (r = sr(this, e, r)),
                  en((i = Xe(this.F)), "RID", t),
                  en(i, "CVER", 22),
                  this.D && en(i, "X-HTTP-Session-Id", this.D),
                  or(this, i),
                  this.o && n && Xn(i, this.o, n),
                  Sn(this.i, e),
                  this.Ra && en(i, "TYPE", "init"),
                  this.ja
                    ? (en(i, "$req", r),
                      en(i, "SID", "null"),
                      (e.$ = !0),
                      Le(e, i, null))
                    : Le(e, i, r),
                  (this.G = 2);
              }
            } else
              3 == this.G &&
                (t
                  ? ir(this, t)
                  : 0 == this.l.length || Tn(this.i) || ir(this));
        }),
        (N.Ga = function () {
          var t;
          (this.u = null),
            hr(this),
            this.$ &&
              !(this.L || null == this.g || this.O <= 0) &&
              ((t = 2 * this.O),
              this.h.info("BP detection timer enabled: " + t),
              (this.B = be(U(this.bb, this), t)));
        }),
        (N.bb = function () {
          this.B &&
            ((this.B = null),
            this.h.info("BP detection timeout reached."),
            this.h.info("Buffering proxy detected and switch to long-polling!"),
            (this.N = !1),
            (this.L = !0),
            ve(10),
            tr(this),
            hr(this));
        }),
        (N.ab = function () {
          null != this.v && ((this.v = null), tr(this), ur(this), ve(19));
        }),
        (N.jb = function (t) {
          t
            ? (this.h.info("Successfully pinged google.com"), ve(2))
            : (this.h.info("Failed to ping google.com"), ve(1));
        }),
        ((N = vr.prototype).xa = function () {}),
        (N.wa = function () {}),
        (N.va = function () {}),
        (N.ua = function () {}),
        (N.Oa = function () {}),
        (wr.prototype.g = function (t, e) {
          return new br(t, e);
        }),
        B(br, Ut),
        (br.prototype.m = function () {
          (this.g.j = this.j), this.A && (this.g.H = !0);
          var t = this.g,
            e = this.l,
            n = this.h || void 0;
          t.Wa && (t.h.info("Origin Trials enabled."), Xt(U(t.hb, t, e))),
            ve(0),
            (t.W = e),
            (t.aa = n || {}),
            (t.N = t.X),
            (t.F = gr(t, null, t.W)),
            rr(t);
        }),
        (br.prototype.close = function () {
          Zn(this.g);
        }),
        (br.prototype.u = function (t) {
          var e;
          "string" == typeof t
            ? (((e = {}).__data__ = t), nr(this.g, e))
            : this.v
            ? (((e = {}).__data__ = jt(t)), nr(this.g, e))
            : nr(this.g, t);
        }),
        (br.prototype.M = function () {
          (this.g.j = null),
            delete this.j,
            Zn(this.g),
            delete this.g,
            br.Z.M.call(this);
        }),
        B(Er, Se),
        B(Tr, Ae),
        B(Ir, vr),
        (Ir.prototype.xa = function () {
          qt(this.g, "a");
        }),
        (Ir.prototype.wa = function (t) {
          qt(this.g, new Er(t));
        }),
        (Ir.prototype.va = function (t) {
          qt(this.g, new Tr());
        }),
        (Ir.prototype.ua = function () {
          qt(this.g, "b");
        }),
        (wr.prototype.createWebChannel = wr.prototype.g),
        (br.prototype.send = br.prototype.u),
        (br.prototype.open = br.prototype.m),
        (Ee.NO_ERROR = 0),
        (Ee.TIMEOUT = 8),
        (Ee.HTTP_ERROR = 6),
        (C.COMPLETE = "complete"),
        ((_e.EventType = Kt).OPEN = "a"),
        (Kt.CLOSE = "b"),
        (Kt.ERROR = "c"),
        (Kt.MESSAGE = "d"),
        (Ut.prototype.listen = Ut.prototype.N),
        (Vn.prototype.listenOnce = Vn.prototype.O),
        (Vn.prototype.getLastError = Vn.prototype.La),
        (Vn.prototype.getLastErrorCode = Vn.prototype.Da),
        (Vn.prototype.getStatus = Vn.prototype.ba),
        (Vn.prototype.getResponseJson = Vn.prototype.Qa),
        (Vn.prototype.getResponseText = Vn.prototype.ga),
        (Vn.prototype.send = Vn.prototype.ea);
      var _r = pe,
        Sr = Ee,
        Ar = C,
        Dr = fe,
        Nr = 10,
        Cr = 11,
        kr = Rn,
        Rr = _e,
        xr = Vn,
        Or =
          ((Lr.prototype.t = function (t) {
            return (
              (this.previousValue = Math.max(t, this.previousValue)),
              this.previousValue
            );
          }),
          (Lr.prototype.next = function () {
            var t = ++this.previousValue;
            return this.i && this.i(t), t;
          }),
          Lr);
      function Lr(t, e) {
        var n = this;
        (this.previousValue = t),
          e &&
            ((e.sequenceNumberHandler = function (t) {
              return n.t(t);
            }),
            (this.i = function (t) {
              return e.writeSequenceNumber(t);
            }));
      }
      Or.o = -1;
      var Pr,
        Mr = {
          OK: "ok",
          CANCELLED: "cancelled",
          UNKNOWN: "unknown",
          INVALID_ARGUMENT: "invalid-argument",
          DEADLINE_EXCEEDED: "deadline-exceeded",
          NOT_FOUND: "not-found",
          ALREADY_EXISTS: "already-exists",
          PERMISSION_DENIED: "permission-denied",
          UNAUTHENTICATED: "unauthenticated",
          RESOURCE_EXHAUSTED: "resource-exhausted",
          FAILED_PRECONDITION: "failed-precondition",
          ABORTED: "aborted",
          OUT_OF_RANGE: "out-of-range",
          UNIMPLEMENTED: "unimplemented",
          INTERNAL: "internal",
          UNAVAILABLE: "unavailable",
          DATA_LOSS: "data-loss",
        },
        Fr = (n(Ur, (Pr = Error)), Ur),
        Vr = new _("@firebase/firestore");
      function Ur(t, e) {
        var n = this;
        return (
          ((n = Pr.call(this, e) || this).code = t),
          (n.message = e),
          (n.name = "FirebaseError"),
          (n.toString = function () {
            return n.name + ": [code=" + n.code + "]: " + n.message;
          }),
          n
        );
      }
      function qr() {
        return Vr.logLevel;
      }
      function Br(t) {
        for (var e, n = [], r = 1; r < arguments.length; r++)
          n[r - 1] = arguments[r];
        Vr.logLevel <= m.DEBUG &&
          ((e = n.map(Gr)),
          Vr.debug.apply(Vr, s(["Firestore (8.9.0): " + t], e)));
      }
      function jr(t) {
        for (var e, n = [], r = 1; r < arguments.length; r++)
          n[r - 1] = arguments[r];
        Vr.logLevel <= m.ERROR &&
          ((e = n.map(Gr)),
          Vr.error.apply(Vr, s(["Firestore (8.9.0): " + t], e)));
      }
      function Kr(t) {
        for (var e, n = [], r = 1; r < arguments.length; r++)
          n[r - 1] = arguments[r];
        Vr.logLevel <= m.WARN &&
          ((e = n.map(Gr)),
          Vr.warn.apply(Vr, s(["Firestore (8.9.0): " + t], e)));
      }
      function Gr(e) {
        if ("string" == typeof e) return e;
        try {
          return JSON.stringify(e);
        } catch (t) {
          return e;
        }
      }
      function Qr(t) {
        t =
          "FIRESTORE (8.9.0) INTERNAL ASSERTION FAILED: " +
          (t = void 0 === t ? "Unexpected state" : t);
        throw (jr(t), new Error(t));
      }
      function Hr(t) {
        t || Qr();
      }
      var zr =
        ((Wr.u = function () {
          for (
            var t =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
              e = Math.floor(256 / t.length) * t.length,
              n = "";
            n.length < 20;

          )
            for (
              var r = (function (t) {
                  var e =
                      "undefined" != typeof self &&
                      (self.crypto || self.msCrypto),
                    n = new Uint8Array(t);
                  if (e && "function" == typeof e.getRandomValues)
                    e.getRandomValues(n);
                  else
                    for (var r = 0; r < t; r++)
                      n[r] = Math.floor(256 * Math.random());
                  return n;
                })(40),
                i = 0;
              i < r.length;
              ++i
            )
              n.length < 20 && r[i] < e && (n += t.charAt(r[i] % t.length));
          return n;
        }),
        Wr);
      function Wr() {}
      function Yr(t, e) {
        return t < e ? -1 : e < t ? 1 : 0;
      }
      function Xr(t, n, r) {
        return (
          t.length === n.length &&
          t.every(function (t, e) {
            return r(t, n[e]);
          })
        );
      }
      function $r(t) {
        return t + "\0";
      }
      var Jr =
          ((ei.now = function () {
            return ei.fromMillis(Date.now());
          }),
          (ei.fromDate = function (t) {
            return ei.fromMillis(t.getTime());
          }),
          (ei.fromMillis = function (t) {
            var e = Math.floor(t / 1e3);
            return new ei(e, Math.floor(1e6 * (t - 1e3 * e)));
          }),
          (ei.prototype.toDate = function () {
            return new Date(this.toMillis());
          }),
          (ei.prototype.toMillis = function () {
            return 1e3 * this.seconds + this.nanoseconds / 1e6;
          }),
          (ei.prototype._compareTo = function (t) {
            return this.seconds === t.seconds
              ? Yr(this.nanoseconds, t.nanoseconds)
              : Yr(this.seconds, t.seconds);
          }),
          (ei.prototype.isEqual = function (t) {
            return (
              t.seconds === this.seconds && t.nanoseconds === this.nanoseconds
            );
          }),
          (ei.prototype.toString = function () {
            return (
              "Timestamp(seconds=" +
              this.seconds +
              ", nanoseconds=" +
              this.nanoseconds +
              ")"
            );
          }),
          (ei.prototype.toJSON = function () {
            return { seconds: this.seconds, nanoseconds: this.nanoseconds };
          }),
          (ei.prototype.valueOf = function () {
            var t = this.seconds - -62135596800;
            return (
              String(t).padStart(12, "0") +
              "." +
              String(this.nanoseconds).padStart(9, "0")
            );
          }),
          ei),
        Zr =
          ((ti.fromTimestamp = function (t) {
            return new ti(t);
          }),
          (ti.min = function () {
            return new ti(new Jr(0, 0));
          }),
          (ti.prototype.compareTo = function (t) {
            return this.timestamp._compareTo(t.timestamp);
          }),
          (ti.prototype.isEqual = function (t) {
            return this.timestamp.isEqual(t.timestamp);
          }),
          (ti.prototype.toMicroseconds = function () {
            return (
              1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3
            );
          }),
          (ti.prototype.toString = function () {
            return "SnapshotVersion(" + this.timestamp.toString() + ")";
          }),
          (ti.prototype.toTimestamp = function () {
            return this.timestamp;
          }),
          ti);
      function ti(t) {
        this.timestamp = t;
      }
      function ei(t, e) {
        if (((this.seconds = t), (this.nanoseconds = e) < 0))
          throw new Fr(
            Mr.INVALID_ARGUMENT,
            "Timestamp nanoseconds out of range: " + e
          );
        if (1e9 <= e)
          throw new Fr(
            Mr.INVALID_ARGUMENT,
            "Timestamp nanoseconds out of range: " + e
          );
        if (t < -62135596800)
          throw new Fr(
            Mr.INVALID_ARGUMENT,
            "Timestamp seconds out of range: " + t
          );
        if (253402300800 <= t)
          throw new Fr(
            Mr.INVALID_ARGUMENT,
            "Timestamp seconds out of range: " + t
          );
      }
      function ni(t) {
        var e,
          n = 0;
        for (e in t) Object.prototype.hasOwnProperty.call(t, e) && n++;
        return n;
      }
      function ri(t, e) {
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
      }
      function ii(t) {
        for (var e in t)
          if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
        return !0;
      }
      var oi,
        si,
        C =
          (Object.defineProperty(gi.prototype, "length", {
            get: function () {
              return this.len;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (gi.prototype.isEqual = function (t) {
            return 0 === gi.comparator(this, t);
          }),
          (gi.prototype.child = function (t) {
            var e = this.segments.slice(this.offset, this.limit());
            return (
              t instanceof gi
                ? t.forEach(function (t) {
                    e.push(t);
                  })
                : e.push(t),
              this.construct(e)
            );
          }),
          (gi.prototype.limit = function () {
            return this.offset + this.length;
          }),
          (gi.prototype.popFirst = function (t) {
            return this.construct(
              this.segments,
              this.offset + (t = void 0 === t ? 1 : t),
              this.length - t
            );
          }),
          (gi.prototype.popLast = function () {
            return this.construct(this.segments, this.offset, this.length - 1);
          }),
          (gi.prototype.firstSegment = function () {
            return this.segments[this.offset];
          }),
          (gi.prototype.lastSegment = function () {
            return this.get(this.length - 1);
          }),
          (gi.prototype.get = function (t) {
            return this.segments[this.offset + t];
          }),
          (gi.prototype.isEmpty = function () {
            return 0 === this.length;
          }),
          (gi.prototype.isPrefixOf = function (t) {
            if (t.length < this.length) return !1;
            for (var e = 0; e < this.length; e++)
              if (this.get(e) !== t.get(e)) return !1;
            return !0;
          }),
          (gi.prototype.isImmediateParentOf = function (t) {
            if (this.length + 1 !== t.length) return !1;
            for (var e = 0; e < this.length; e++)
              if (this.get(e) !== t.get(e)) return !1;
            return !0;
          }),
          (gi.prototype.forEach = function (t) {
            for (var e = this.offset, n = this.limit(); e < n; e++)
              t(this.segments[e]);
          }),
          (gi.prototype.toArray = function () {
            return this.segments.slice(this.offset, this.limit());
          }),
          (gi.comparator = function (t, e) {
            for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
              var i = t.get(r),
                o = e.get(r);
              if (i < o) return -1;
              if (o < i) return 1;
            }
            return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
          }),
          gi),
        ai =
          (n(yi, (si = C)),
          (yi.prototype.construct = function (t, e, n) {
            return new yi(t, e, n);
          }),
          (yi.prototype.canonicalString = function () {
            return this.toArray().join("/");
          }),
          (yi.prototype.toString = function () {
            return this.canonicalString();
          }),
          (yi.fromString = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            for (var n = [], r = 0, i = t; r < i.length; r++) {
              var o = i[r];
              if (0 <= o.indexOf("//"))
                throw new Fr(
                  Mr.INVALID_ARGUMENT,
                  "Invalid segment (" +
                    o +
                    "). Paths must not contain // in them."
                );
              n.push.apply(
                n,
                o.split("/").filter(function (t) {
                  return 0 < t.length;
                })
              );
            }
            return new yi(n);
          }),
          (yi.emptyPath = function () {
            return new yi([]);
          }),
          yi),
        ui = /^[_a-zA-Z][_a-zA-Z0-9]*$/,
        ci =
          (n(pi, (oi = C)),
          (pi.prototype.construct = function (t, e, n) {
            return new pi(t, e, n);
          }),
          (pi.isValidIdentifier = function (t) {
            return ui.test(t);
          }),
          (pi.prototype.canonicalString = function () {
            return this.toArray()
              .map(function (t) {
                return (
                  (t = t.replace(/\\/g, "\\\\").replace(/`/g, "\\`")),
                  (t = !pi.isValidIdentifier(t) ? "`" + t + "`" : t)
                );
              })
              .join(".");
          }),
          (pi.prototype.toString = function () {
            return this.canonicalString();
          }),
          (pi.prototype.isKeyField = function () {
            return 1 === this.length && "__name__" === this.get(0);
          }),
          (pi.keyField = function () {
            return new pi(["__name__"]);
          }),
          (pi.fromServerFormat = function (t) {
            for (
              var e = [],
                n = "",
                r = 0,
                i = function () {
                  if (0 === n.length)
                    throw new Fr(
                      Mr.INVALID_ARGUMENT,
                      "Invalid field path (" +
                        t +
                        "). Paths must not be empty, begin with '.', end with '.', or contain '..'"
                    );
                  e.push(n), (n = "");
                },
                o = !1;
              r < t.length;

            ) {
              var s = t[r];
              if ("\\" === s) {
                if (r + 1 === t.length)
                  throw new Fr(
                    Mr.INVALID_ARGUMENT,
                    "Path has trailing escape character: " + t
                  );
                var a = t[r + 1];
                if ("\\" !== a && "." !== a && "`" !== a)
                  throw new Fr(
                    Mr.INVALID_ARGUMENT,
                    "Path has invalid escape sequence: " + t
                  );
                (n += a), (r += 2);
              } else
                "`" === s ? (o = !o) : "." !== s || o ? (n += s) : i(), r++;
            }
            if ((i(), o))
              throw new Fr(Mr.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
            return new pi(e);
          }),
          (pi.emptyPath = function () {
            return new pi([]);
          }),
          pi),
        hi =
          ((di.prototype.covers = function (t) {
            for (var e = 0, n = this.fields; e < n.length; e++)
              if (n[e].isPrefixOf(t)) return !0;
            return !1;
          }),
          (di.prototype.isEqual = function (t) {
            return Xr(this.fields, t.fields, function (t, e) {
              return t.isEqual(e);
            });
          }),
          di),
        li =
          ((fi.fromBase64String = function (t) {
            return new fi(atob(t));
          }),
          (fi.fromUint8Array = function (t) {
            return new fi(
              (function (t) {
                for (var e = "", n = 0; n < t.length; ++n)
                  e += String.fromCharCode(t[n]);
                return e;
              })(t)
            );
          }),
          (fi.prototype.toBase64 = function () {
            return (t = this.binaryString), btoa(t);
            var t;
          }),
          (fi.prototype.toUint8Array = function () {
            return (function (t) {
              for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++)
                e[n] = t.charCodeAt(n);
              return e;
            })(this.binaryString);
          }),
          (fi.prototype.approximateByteSize = function () {
            return 2 * this.binaryString.length;
          }),
          (fi.prototype.compareTo = function (t) {
            return Yr(this.binaryString, t.binaryString);
          }),
          (fi.prototype.isEqual = function (t) {
            return this.binaryString === t.binaryString;
          }),
          fi);
      function fi(t) {
        this.binaryString = t;
      }
      function di(t) {
        (this.fields = t).sort(ci.comparator);
      }
      function pi() {
        return (null !== oi && oi.apply(this, arguments)) || this;
      }
      function yi() {
        return (null !== si && si.apply(this, arguments)) || this;
      }
      function gi(t, e, n) {
        void 0 === e ? (e = 0) : e > t.length && Qr(),
          void 0 === n ? (n = t.length - e) : n > t.length - e && Qr(),
          (this.segments = t),
          (this.offset = e),
          (this.len = n);
      }
      li.EMPTY_BYTE_STRING = new li("");
      var mi = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
      function vi(t) {
        if ((Hr(!!t), "string" != typeof t))
          return { seconds: wi(t.seconds), nanos: wi(t.nanos) };
        var e = 0,
          n = mi.exec(t);
        Hr(!!n),
          n[1] &&
            ((n = ((n = n[1]) + "000000000").substr(0, 9)), (e = Number(n)));
        t = new Date(t);
        return { seconds: Math.floor(t.getTime() / 1e3), nanos: e };
      }
      function wi(t) {
        return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0;
      }
      function bi(t) {
        return "string" == typeof t
          ? li.fromBase64String(t)
          : li.fromUint8Array(t);
      }
      function Ei(t) {
        return (
          "server_timestamp" ===
          (null ===
            (t = (
              (null === (t = null == t ? void 0 : t.mapValue) || void 0 === t
                ? void 0
                : t.fields) || {}
            ).__type__) || void 0 === t
            ? void 0
            : t.stringValue)
        );
      }
      function Ti(t) {
        t = vi(t.mapValue.fields.__local_write_time__.timestampValue);
        return new Jr(t.seconds, t.nanos);
      }
      function Ii(t) {
        return null == t;
      }
      function _i(t) {
        return 0 === t && 1 / t == -1 / 0;
      }
      function Si(t) {
        return (
          "number" == typeof t &&
          Number.isInteger(t) &&
          !_i(t) &&
          t <= Number.MAX_SAFE_INTEGER &&
          t >= Number.MIN_SAFE_INTEGER
        );
      }
      var Ai =
        ((Di.fromPath = function (t) {
          return new Di(ai.fromString(t));
        }),
        (Di.fromName = function (t) {
          return new Di(ai.fromString(t).popFirst(5));
        }),
        (Di.prototype.hasCollectionId = function (t) {
          return (
            2 <= this.path.length && this.path.get(this.path.length - 2) === t
          );
        }),
        (Di.prototype.isEqual = function (t) {
          return null !== t && 0 === ai.comparator(this.path, t.path);
        }),
        (Di.prototype.toString = function () {
          return this.path.toString();
        }),
        (Di.comparator = function (t, e) {
          return ai.comparator(t.path, e.path);
        }),
        (Di.isDocumentKey = function (t) {
          return t.length % 2 == 0;
        }),
        (Di.fromSegments = function (t) {
          return new Di(new ai(t.slice()));
        }),
        Di);
      function Di(t) {
        this.path = t;
      }
      function Ni(t) {
        return "nullValue" in t
          ? 0
          : "booleanValue" in t
          ? 1
          : "integerValue" in t || "doubleValue" in t
          ? 2
          : "timestampValue" in t
          ? 3
          : "stringValue" in t
          ? 5
          : "bytesValue" in t
          ? 6
          : "referenceValue" in t
          ? 7
          : "geoPointValue" in t
          ? 8
          : "arrayValue" in t
          ? 9
          : "mapValue" in t
          ? Ei(t)
            ? 4
            : 10
          : Qr();
      }
      function Ci(r, i) {
        var t,
          e,
          n = Ni(r);
        if (n !== Ni(i)) return !1;
        switch (n) {
          case 0:
            return !0;
          case 1:
            return r.booleanValue === i.booleanValue;
          case 4:
            return Ti(r).isEqual(Ti(i));
          case 3:
            return (function (t) {
              if (
                "string" == typeof r.timestampValue &&
                "string" == typeof t.timestampValue &&
                r.timestampValue.length === t.timestampValue.length
              )
                return r.timestampValue === t.timestampValue;
              var e = vi(r.timestampValue),
                t = vi(t.timestampValue);
              return e.seconds === t.seconds && e.nanos === t.nanos;
            })(i);
          case 5:
            return r.stringValue === i.stringValue;
          case 6:
            return (e = i), bi(r.bytesValue).isEqual(bi(e.bytesValue));
          case 7:
            return r.referenceValue === i.referenceValue;
          case 8:
            return (
              (t = i),
              wi((e = r).geoPointValue.latitude) ===
                wi(t.geoPointValue.latitude) &&
                wi(e.geoPointValue.longitude) === wi(t.geoPointValue.longitude)
            );
          case 2:
            return (function (t, e) {
              if ("integerValue" in t && "integerValue" in e)
                return wi(t.integerValue) === wi(e.integerValue);
              if ("doubleValue" in t && "doubleValue" in e) {
                (t = wi(t.doubleValue)), (e = wi(e.doubleValue));
                return t === e ? _i(t) === _i(e) : isNaN(t) && isNaN(e);
              }
              return !1;
            })(r, i);
          case 9:
            return Xr(r.arrayValue.values || [], i.arrayValue.values || [], Ci);
          case 10:
            return (function () {
              var t,
                e = r.mapValue.fields || {},
                n = i.mapValue.fields || {};
              if (ni(e) !== ni(n)) return !1;
              for (t in e)
                if (e.hasOwnProperty(t) && (void 0 === n[t] || !Ci(e[t], n[t])))
                  return !1;
              return !0;
            })();
          default:
            return Qr();
        }
      }
      function ki(t, e) {
        return (
          void 0 !==
          (t.values || []).find(function (t) {
            return Ci(t, e);
          })
        );
      }
      function Ri(t, e) {
        var n,
          r,
          i,
          o = Ni(t),
          s = Ni(e);
        if (o !== s) return Yr(o, s);
        switch (o) {
          case 0:
            return 0;
          case 1:
            return Yr(t.booleanValue, e.booleanValue);
          case 2:
            return (
              (r = e),
              (i = wi(t.integerValue || t.doubleValue)),
              (r = wi(r.integerValue || r.doubleValue)),
              i < r
                ? -1
                : r < i
                ? 1
                : i === r
                ? 0
                : isNaN(i)
                ? isNaN(r)
                  ? 0
                  : -1
                : 1
            );
          case 3:
            return xi(t.timestampValue, e.timestampValue);
          case 4:
            return xi(Ti(t), Ti(e));
          case 5:
            return Yr(t.stringValue, e.stringValue);
          case 6:
            return (function (t, e) {
              (t = bi(t)), (e = bi(e));
              return t.compareTo(e);
            })(t.bytesValue, e.bytesValue);
          case 7:
            return (function (t, e) {
              for (
                var n = t.split("/"), r = e.split("/"), i = 0;
                i < n.length && i < r.length;
                i++
              ) {
                var o = Yr(n[i], r[i]);
                if (0 !== o) return o;
              }
              return Yr(n.length, r.length);
            })(t.referenceValue, e.referenceValue);
          case 8:
            return (
              (n = t.geoPointValue),
              (i = e.geoPointValue),
              0 !== (r = Yr(wi(n.latitude), wi(i.latitude)))
                ? r
                : Yr(wi(n.longitude), wi(i.longitude))
            );
          case 9:
            return (function (t, e) {
              for (
                var n = t.values || [], r = e.values || [], i = 0;
                i < n.length && i < r.length;
                ++i
              ) {
                var o = Ri(n[i], r[i]);
                if (o) return o;
              }
              return Yr(n.length, r.length);
            })(t.arrayValue, e.arrayValue);
          case 10:
            return (function (t, e) {
              var n = t.fields || {},
                r = Object.keys(n),
                i = e.fields || {},
                o = Object.keys(i);
              r.sort(), o.sort();
              for (var s = 0; s < r.length && s < o.length; ++s) {
                var a = Yr(r[s], o[s]);
                if (0 !== a) return a;
                a = Ri(n[r[s]], i[o[s]]);
                if (0 !== a) return a;
              }
              return Yr(r.length, o.length);
            })(t.mapValue, e.mapValue);
          default:
            throw Qr();
        }
      }
      function xi(t, e) {
        if (
          "string" == typeof t &&
          "string" == typeof e &&
          t.length === e.length
        )
          return Yr(t, e);
        var n = vi(t),
          t = vi(e),
          e = Yr(n.seconds, t.seconds);
        return 0 !== e ? e : Yr(n.nanos, t.nanos);
      }
      function Oi(t) {
        return (function s(t) {
          return "nullValue" in t
            ? "null"
            : "booleanValue" in t
            ? "" + t.booleanValue
            : "integerValue" in t
            ? "" + t.integerValue
            : "doubleValue" in t
            ? "" + t.doubleValue
            : "timestampValue" in t
            ? (function (t) {
                t = vi(t);
                return "time(" + t.seconds + "," + t.nanos + ")";
              })(t.timestampValue)
            : "stringValue" in t
            ? t.stringValue
            : "bytesValue" in t
            ? bi(t.bytesValue).toBase64()
            : "referenceValue" in t
            ? ((e = t.referenceValue), Ai.fromName(e).toString())
            : "geoPointValue" in t
            ? "geo(" + (e = t.geoPointValue).latitude + "," + e.longitude + ")"
            : "arrayValue" in t
            ? (function (t) {
                for (
                  var e = "[", n = !0, r = 0, i = t.values || [];
                  r < i.length;
                  r++
                )
                  n ? (n = !1) : (e += ","), (e += s(i[r]));
                return e + "]";
              })(t.arrayValue)
            : "mapValue" in t
            ? (function (t) {
                for (
                  var e = "{",
                    n = !0,
                    r = 0,
                    i = Object.keys(t.fields || {}).sort();
                  r < i.length;
                  r++
                ) {
                  var o = i[r];
                  n ? (n = !1) : (e += ","), (e += o + ":" + s(t.fields[o]));
                }
                return e + "}";
              })(t.mapValue)
            : Qr();
          var e;
        })(t);
      }
      function Li(t, e) {
        return {
          referenceValue:
            "projects/" +
            t.projectId +
            "/databases/" +
            t.database +
            "/documents/" +
            e.path.canonicalString(),
        };
      }
      function Pi(t) {
        return t && "integerValue" in t;
      }
      function Mi(t) {
        return !!t && "arrayValue" in t;
      }
      function Fi(t) {
        return t && "nullValue" in t;
      }
      function Vi(t) {
        return t && "doubleValue" in t && isNaN(Number(t.doubleValue));
      }
      function Ui(t) {
        return t && "mapValue" in t;
      }
      function qi(t) {
        if (t.geoPointValue)
          return { geoPointValue: Object.assign({}, t.geoPointValue) };
        if (t.timestampValue && "object" == typeof t.timestampValue)
          return { timestampValue: Object.assign({}, t.timestampValue) };
        if (t.mapValue) {
          var n = { mapValue: { fields: {} } };
          return (
            ri(t.mapValue.fields, function (t, e) {
              return (n.mapValue.fields[t] = qi(e));
            }),
            n
          );
        }
        if (t.arrayValue) {
          for (
            var e = { arrayValue: { values: [] } }, r = 0;
            r < (t.arrayValue.values || []).length;
            ++r
          )
            e.arrayValue.values[r] = qi(t.arrayValue.values[r]);
          return e;
        }
        return Object.assign({}, t);
      }
      var Bi =
        ((ji.empty = function () {
          return new ji({ mapValue: {} });
        }),
        (ji.prototype.field = function (t) {
          if (t.isEmpty()) return this.value;
          for (var e = this.value, n = 0; n < t.length - 1; ++n)
            if (!Ui((e = (e.mapValue.fields || {})[t.get(n)]))) return null;
          return (e = (e.mapValue.fields || {})[t.lastSegment()]) || null;
        }),
        (ji.prototype.set = function (t, e) {
          this.getFieldsMap(t.popLast())[t.lastSegment()] = qi(e);
        }),
        (ji.prototype.setAll = function (t) {
          var r = this,
            i = ci.emptyPath(),
            o = {},
            s = [];
          t.forEach(function (t, e) {
            var n;
            i.isImmediateParentOf(e) ||
              ((n = r.getFieldsMap(i)),
              r.applyChanges(n, o, s),
              (o = {}),
              (s = []),
              (i = e.popLast())),
              t ? (o[e.lastSegment()] = qi(t)) : s.push(e.lastSegment());
          });
          t = this.getFieldsMap(i);
          this.applyChanges(t, o, s);
        }),
        (ji.prototype.delete = function (t) {
          var e = this.field(t.popLast());
          Ui(e) &&
            e.mapValue.fields &&
            delete e.mapValue.fields[t.lastSegment()];
        }),
        (ji.prototype.isEqual = function (t) {
          return Ci(this.value, t.value);
        }),
        (ji.prototype.getFieldsMap = function (t) {
          var e = this.value;
          e.mapValue.fields || (e.mapValue = { fields: {} });
          for (var n = 0; n < t.length; ++n) {
            var r = e.mapValue.fields[t.get(n)];
            (Ui(r) && r.mapValue.fields) ||
              ((r = { mapValue: { fields: {} } }),
              (e.mapValue.fields[t.get(n)] = r)),
              (e = r);
          }
          return e.mapValue.fields;
        }),
        (ji.prototype.applyChanges = function (n, t, e) {
          ri(t, function (t, e) {
            return (n[t] = e);
          });
          for (var r = 0, i = e; r < i.length; r++) {
            var o = i[r];
            delete n[o];
          }
        }),
        (ji.prototype.clone = function () {
          return new ji(qi(this.value));
        }),
        ji);
      function ji(t) {
        this.value = t;
      }
      var Ki =
          ((Qi.newInvalidDocument = function (t) {
            return new Qi(t, 0, Zr.min(), Bi.empty(), 0);
          }),
          (Qi.newFoundDocument = function (t, e, n) {
            return new Qi(t, 1, e, n, 0);
          }),
          (Qi.newNoDocument = function (t, e) {
            return new Qi(t, 2, e, Bi.empty(), 0);
          }),
          (Qi.newUnknownDocument = function (t, e) {
            return new Qi(t, 3, e, Bi.empty(), 2);
          }),
          (Qi.prototype.convertToFoundDocument = function (t, e) {
            return (
              (this.version = t),
              (this.documentType = 1),
              (this.data = e),
              (this.documentState = 0),
              this
            );
          }),
          (Qi.prototype.convertToNoDocument = function (t) {
            return (
              (this.version = t),
              (this.documentType = 2),
              (this.data = Bi.empty()),
              (this.documentState = 0),
              this
            );
          }),
          (Qi.prototype.convertToUnknownDocument = function (t) {
            return (
              (this.version = t),
              (this.documentType = 3),
              (this.data = Bi.empty()),
              (this.documentState = 2),
              this
            );
          }),
          (Qi.prototype.setHasCommittedMutations = function () {
            return (this.documentState = 2), this;
          }),
          (Qi.prototype.setHasLocalMutations = function () {
            return (this.documentState = 1), this;
          }),
          Object.defineProperty(Qi.prototype, "hasLocalMutations", {
            get: function () {
              return 1 === this.documentState;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(Qi.prototype, "hasCommittedMutations", {
            get: function () {
              return 2 === this.documentState;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(Qi.prototype, "hasPendingWrites", {
            get: function () {
              return this.hasLocalMutations || this.hasCommittedMutations;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (Qi.prototype.isValidDocument = function () {
            return 0 !== this.documentType;
          }),
          (Qi.prototype.isFoundDocument = function () {
            return 1 === this.documentType;
          }),
          (Qi.prototype.isNoDocument = function () {
            return 2 === this.documentType;
          }),
          (Qi.prototype.isUnknownDocument = function () {
            return 3 === this.documentType;
          }),
          (Qi.prototype.isEqual = function (t) {
            return (
              t instanceof Qi &&
              this.key.isEqual(t.key) &&
              this.version.isEqual(t.version) &&
              this.documentType === t.documentType &&
              this.documentState === t.documentState &&
              this.data.isEqual(t.data)
            );
          }),
          (Qi.prototype.clone = function () {
            return new Qi(
              this.key,
              this.documentType,
              this.version,
              this.data.clone(),
              this.documentState
            );
          }),
          (Qi.prototype.toString = function () {
            return (
              "Document(" +
              this.key +
              ", " +
              this.version +
              ", " +
              JSON.stringify(this.data.value) +
              ", {documentType: " +
              this.documentType +
              "}), {documentState: " +
              this.documentState +
              "})"
            );
          }),
          Qi),
        Gi = function (t, e, n, r, i, o, s) {
          void 0 === e && (e = null),
            void 0 === n && (n = []),
            void 0 === r && (r = []),
            void 0 === i && (i = null),
            void 0 === o && (o = null),
            void 0 === s && (s = null),
            (this.path = t),
            (this.collectionGroup = e),
            (this.orderBy = n),
            (this.filters = r),
            (this.limit = i),
            (this.startAt = o),
            (this.endAt = s),
            (this.h = null);
        };
      function Qi(t, e, n, r, i) {
        (this.key = t),
          (this.documentType = e),
          (this.version = n),
          (this.data = r),
          (this.documentState = i);
      }
      function Hi(t, e, n, r, i, o, s) {
        return new Gi(
          t,
          (e = void 0 === e ? null : e),
          (n = void 0 === n ? [] : n),
          (r = void 0 === r ? [] : r),
          (i = void 0 === i ? null : i),
          (o = void 0 === o ? null : o),
          (s = void 0 === s ? null : s)
        );
      }
      function zi(t) {
        var e = t;
        return (
          null === e.h &&
            ((t = e.path.canonicalString()),
            null !== e.collectionGroup && (t += "|cg:" + e.collectionGroup),
            (t += "|f:"),
            (t += e.filters
              .map(function (t) {
                return (
                  (t = t).field.canonicalString() +
                  t.op.toString() +
                  Oi(t.value)
                );
              })
              .join(",")),
            (t += "|ob:"),
            (t += e.orderBy
              .map(function (t) {
                return (t = t).field.canonicalString() + t.dir;
              })
              .join(",")),
            Ii(e.limit) || ((t += "|l:"), (t += e.limit)),
            e.startAt && ((t += "|lb:"), (t += Io(e.startAt))),
            e.endAt && ((t += "|ub:"), (t += Io(e.endAt))),
            (e.h = t)),
          e.h
        );
      }
      function Wi(t, e) {
        if (t.limit !== e.limit) return !1;
        if (t.orderBy.length !== e.orderBy.length) return !1;
        for (var n, r, i = 0; i < t.orderBy.length; i++)
          if (
            ((n = t.orderBy[i]),
            (r = e.orderBy[i]),
            n.dir !== r.dir || !n.field.isEqual(r.field))
          )
            return !1;
        if (t.filters.length !== e.filters.length) return !1;
        for (var o, s, a = 0; a < t.filters.length; a++)
          if (
            ((o = t.filters[a]),
            (s = e.filters[a]),
            o.op !== s.op || !o.field.isEqual(s.field) || !Ci(o.value, s.value))
          )
            return !1;
        return (
          t.collectionGroup === e.collectionGroup &&
          !!t.path.isEqual(e.path) &&
          !!Ao(t.startAt, e.startAt) &&
          Ao(t.endAt, e.endAt)
        );
      }
      function Yi(t) {
        return (
          Ai.isDocumentKey(t.path) &&
          null === t.collectionGroup &&
          0 === t.filters.length
        );
      }
      var Xi,
        $i =
          (n(Ji, (Xi = function () {})),
          (Ji.create = function (t, e, n) {
            return t.isKeyField()
              ? "in" === e || "not-in" === e
                ? this.l(t, e, n)
                : new no(t, e, n)
              : "array-contains" === e
              ? new po(t, n)
              : "in" === e
              ? new yo(t, n)
              : "not-in" === e
              ? new go(t, n)
              : "array-contains-any" === e
              ? new mo(t, n)
              : new Ji(t, e, n);
          }),
          (Ji.l = function (t, e, n) {
            return new ("in" === e ? ro : io)(t, n);
          }),
          (Ji.prototype.matches = function (t) {
            t = t.data.field(this.field);
            return "!=" === this.op
              ? null !== t && this.m(Ri(t, this.value))
              : null !== t &&
                  Ni(this.value) === Ni(t) &&
                  this.m(Ri(t, this.value));
          }),
          (Ji.prototype.m = function (t) {
            switch (this.op) {
              case "<":
                return t < 0;
              case "<=":
                return t <= 0;
              case "==":
                return 0 === t;
              case "!=":
                return 0 !== t;
              case ">":
                return 0 < t;
              case ">=":
                return 0 <= t;
              default:
                return Qr();
            }
          }),
          (Ji.prototype.g = function () {
            return 0 <= ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op);
          }),
          Ji);
      function Ji(t, e, n) {
        var r = this;
        return (
          ((r = Xi.call(this) || this).field = t), (r.op = e), (r.value = n), r
        );
      }
      var Zi,
        to,
        eo,
        no =
          (n(ao, (eo = $i)),
          (ao.prototype.matches = function (t) {
            t = Ai.comparator(t.key, this.key);
            return this.m(t);
          }),
          ao),
        ro =
          (n(so, (to = $i)),
          (so.prototype.matches = function (e) {
            return this.keys.some(function (t) {
              return t.isEqual(e.key);
            });
          }),
          so),
        io =
          (n(oo, (Zi = $i)),
          (oo.prototype.matches = function (e) {
            return !this.keys.some(function (t) {
              return t.isEqual(e.key);
            });
          }),
          oo);
      function oo(t, e) {
        var n = this;
        return ((n = Zi.call(this, t, "not-in", e) || this).keys = uo(0, e)), n;
      }
      function so(t, e) {
        var n = this;
        return ((n = to.call(this, t, "in", e) || this).keys = uo(0, e)), n;
      }
      function ao(t, e, n) {
        var r = this;
        return (
          ((r = eo.call(this, t, e, n) || this).key = Ai.fromName(
            n.referenceValue
          )),
          r
        );
      }
      function uo(t, e) {
        return (
          (null === (e = e.arrayValue) || void 0 === e ? void 0 : e.values) ||
          []
        ).map(function (t) {
          return Ai.fromName(t.referenceValue);
        });
      }
      var co,
        ho,
        lo,
        fo,
        po =
          (n(To, (fo = $i)),
          (To.prototype.matches = function (t) {
            t = t.data.field(this.field);
            return Mi(t) && ki(t.arrayValue, this.value);
          }),
          To),
        yo =
          (n(Eo, (lo = $i)),
          (Eo.prototype.matches = function (t) {
            t = t.data.field(this.field);
            return null !== t && ki(this.value.arrayValue, t);
          }),
          Eo),
        go =
          (n(bo, (ho = $i)),
          (bo.prototype.matches = function (t) {
            if (ki(this.value.arrayValue, { nullValue: "NULL_VALUE" }))
              return !1;
            t = t.data.field(this.field);
            return null !== t && !ki(this.value.arrayValue, t);
          }),
          bo),
        mo =
          (n(wo, (co = $i)),
          (wo.prototype.matches = function (t) {
            var e = this,
              t = t.data.field(this.field);
            return (
              !(!Mi(t) || !t.arrayValue.values) &&
              t.arrayValue.values.some(function (t) {
                return ki(e.value.arrayValue, t);
              })
            );
          }),
          wo),
        vo = function (t, e) {
          (this.position = t), (this.before = e);
        };
      function wo(t, e) {
        return co.call(this, t, "array-contains-any", e) || this;
      }
      function bo(t, e) {
        return ho.call(this, t, "not-in", e) || this;
      }
      function Eo(t, e) {
        return lo.call(this, t, "in", e) || this;
      }
      function To(t, e) {
        return fo.call(this, t, "array-contains", e) || this;
      }
      function Io(t) {
        return (t.before ? "b" : "a") + ":" + t.position.map(Oi).join(",");
      }
      var _o = function (t, e) {
        void 0 === e && (e = "asc"), (this.field = t), (this.dir = e);
      };
      function So(t, e, n) {
        for (var r = 0, i = 0; i < t.position.length; i++) {
          var o = e[i],
            s = t.position[i],
            r = o.field.isKeyField()
              ? Ai.comparator(Ai.fromName(s.referenceValue), n.key)
              : Ri(s, n.data.field(o.field));
          if (("desc" === o.dir && (r *= -1), 0 !== r)) break;
        }
        return t.before ? r <= 0 : r < 0;
      }
      function Ao(t, e) {
        if (null === t) return null === e;
        if (null === e) return !1;
        if (t.before !== e.before || t.position.length !== e.position.length)
          return !1;
        for (var n = 0; n < t.position.length; n++)
          if (!Ci(t.position[n], e.position[n])) return !1;
        return !0;
      }
      var Do = function (t, e, n, r, i, o, s, a) {
        void 0 === e && (e = null),
          void 0 === n && (n = []),
          void 0 === r && (r = []),
          void 0 === i && (i = null),
          void 0 === o && (o = "F"),
          void 0 === s && (s = null),
          void 0 === a && (a = null),
          (this.path = t),
          (this.collectionGroup = e),
          (this.explicitOrderBy = n),
          (this.filters = r),
          (this.limit = i),
          (this.limitType = o),
          (this.startAt = s),
          (this.endAt = a),
          (this.p = null),
          (this.T = null),
          this.startAt,
          this.endAt;
      };
      function No(t, e, n, r, i, o, s, a) {
        return new Do(t, e, n, r, i, o, s, a);
      }
      function Co(t) {
        return new Do(t);
      }
      function ko(t) {
        return !Ii(t.limit) && "F" === t.limitType;
      }
      function Ro(t) {
        return !Ii(t.limit) && "L" === t.limitType;
      }
      function xo(t) {
        return 0 < t.explicitOrderBy.length ? t.explicitOrderBy[0].field : null;
      }
      function Oo(t) {
        for (var e = 0, n = t.filters; e < n.length; e++) {
          var r = n[e];
          if (r.g()) return r.field;
        }
        return null;
      }
      function Lo(t) {
        return null !== t.collectionGroup;
      }
      function Po(t) {
        var e = t;
        if (null === e.p) {
          e.p = [];
          var n = Oo(e),
            t = xo(e);
          if (null !== n && null === t)
            n.isKeyField() || e.p.push(new _o(n)),
              e.p.push(new _o(ci.keyField(), "asc"));
          else {
            for (var r = !1, i = 0, o = e.explicitOrderBy; i < o.length; i++) {
              var s = o[i];
              e.p.push(s), s.field.isKeyField() && (r = !0);
            }
            r ||
              ((n =
                0 < e.explicitOrderBy.length
                  ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir
                  : "asc"),
              e.p.push(new _o(ci.keyField(), n)));
          }
        }
        return e.p;
      }
      function Mo(t) {
        var e = t;
        if (!e.T)
          if ("F" === e.limitType)
            e.T = Hi(
              e.path,
              e.collectionGroup,
              Po(e),
              e.filters,
              e.limit,
              e.startAt,
              e.endAt
            );
          else {
            for (var n = [], r = 0, i = Po(e); r < i.length; r++) {
              var o = i[r],
                s = "desc" === o.dir ? "asc" : "desc";
              n.push(new _o(o.field, s));
            }
            var a = e.endAt ? new vo(e.endAt.position, !e.endAt.before) : null,
              t = e.startAt
                ? new vo(e.startAt.position, !e.startAt.before)
                : null;
            e.T = Hi(e.path, e.collectionGroup, n, e.filters, e.limit, a, t);
          }
        return e.T;
      }
      function Fo(t, e, n) {
        return new Do(
          t.path,
          t.collectionGroup,
          t.explicitOrderBy.slice(),
          t.filters.slice(),
          e,
          n,
          t.startAt,
          t.endAt
        );
      }
      function Vo(t, e) {
        return Wi(Mo(t), Mo(e)) && t.limitType === e.limitType;
      }
      function Uo(t) {
        return zi(Mo(t)) + "|lt:" + t.limitType;
      }
      function qo(t) {
        return (
          "Query(target=" +
          ((e = Mo(t)),
          (n = e.path.canonicalString()),
          null !== e.collectionGroup &&
            (n += " collectionGroup=" + e.collectionGroup),
          0 < e.filters.length &&
            (n +=
              ", filters: [" +
              e.filters
                .map(function (t) {
                  return (
                    (t = t).field.canonicalString() +
                    " " +
                    t.op +
                    " " +
                    Oi(t.value)
                  );
                })
                .join(", ") +
              "]"),
          Ii(e.limit) || (n += ", limit: " + e.limit),
          0 < e.orderBy.length &&
            (n +=
              ", orderBy: [" +
              e.orderBy
                .map(function (t) {
                  return (t = t).field.canonicalString() + " (" + t.dir + ")";
                })
                .join(", ") +
              "]"),
          e.startAt && (n += ", startAt: " + Io(e.startAt)),
          e.endAt && (n += ", endAt: " + Io(e.endAt)),
          "Target(" + n + ")") +
          "; limitType=" +
          t.limitType +
          ")"
        );
        var e, n;
      }
      function Bo(i, t) {
        return (
          t.isFoundDocument() &&
          ((e = i),
          (n = t.key.path),
          null !== e.collectionGroup
            ? t.key.hasCollectionId(e.collectionGroup) && e.path.isPrefixOf(n)
            : Ai.isDocumentKey(e.path)
            ? e.path.isEqual(n)
            : e.path.isImmediateParentOf(n)) &&
          (function (t) {
            for (var e = 0, n = i.explicitOrderBy; e < n.length; e++) {
              var r = n[e];
              if (!r.field.isKeyField() && null === t.data.field(r.field))
                return;
            }
            return 1;
          })(t) &&
          (function (t) {
            for (var e = 0, n = i.filters; e < n.length; e++)
              if (!n[e].matches(t)) return;
            return 1;
          })(t) &&
          ((n = t),
          (!(t = i).startAt || So(t.startAt, Po(t), n)) &&
            (!t.endAt || !So(t.endAt, Po(t), n)))
        );
        var e, n;
      }
      function jo(a) {
        return function (t, e) {
          for (var n = !1, r = 0, i = Po(a); r < i.length; r++) {
            var o = i[r],
              s = (function (t, r, e) {
                var n = t.field.isKeyField()
                  ? Ai.comparator(r.key, e.key)
                  : (function (t, e) {
                      var n = r.data.field(t),
                        t = e.data.field(t);
                      return null !== n && null !== t ? Ri(n, t) : Qr();
                    })(t.field, e);
                switch (t.dir) {
                  case "asc":
                    return n;
                  case "desc":
                    return -1 * n;
                  default:
                    return Qr();
                }
              })(o, t, e);
            if (0 !== s) return s;
            n = n || o.field.isKeyField();
          }
          return 0;
        };
      }
      function Ko(t, e) {
        if (t.I) {
          if (isNaN(e)) return { doubleValue: "NaN" };
          if (e === 1 / 0) return { doubleValue: "Infinity" };
          if (e === -1 / 0) return { doubleValue: "-Infinity" };
        }
        return { doubleValue: _i(e) ? "-0" : e };
      }
      function Go(t) {
        return { integerValue: "" + t };
      }
      function Qo(t, e) {
        return Si(e) ? Go(e) : Ko(t, e);
      }
      _ = function () {
        this._ = void 0;
      };
      function Ho(t, e) {
        return t instanceof os
          ? Pi((t = e)) || (t && "doubleValue" in t)
            ? e
            : { integerValue: 0 }
          : null;
      }
      var zo,
        Wo,
        Yo = (n(Jo, (Wo = _)), Jo),
        Xo = (n($o, (zo = _)), $o);
      function $o(t) {
        var e = this;
        return ((e = zo.call(this) || this).elements = t), e;
      }
      function Jo() {
        return (null !== Wo && Wo.apply(this, arguments)) || this;
      }
      function Zo(t, e) {
        for (var n = us(e), r = 0, i = t.elements; r < i.length; r++)
          !(function (e) {
            n.some(function (t) {
              return Ci(t, e);
            }) || n.push(e);
          })(i[r]);
        return { arrayValue: { values: n } };
      }
      var ts,
        es = (n(ns, (ts = _)), ns);
      function ns(t) {
        var e = this;
        return ((e = ts.call(this) || this).elements = t), e;
      }
      function rs(t, e) {
        for (var n = us(e), r = 0, i = t.elements; r < i.length; r++)
          !(function (e) {
            n = n.filter(function (t) {
              return !Ci(t, e);
            });
          })(i[r]);
        return { arrayValue: { values: n } };
      }
      var is,
        os = (n(ss, (is = _)), ss);
      function ss(t, e) {
        var n = this;
        return ((n = is.call(this) || this).R = t), (n.A = e), n;
      }
      function as(t) {
        return wi(t.integerValue || t.doubleValue);
      }
      function us(t) {
        return Mi(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
      }
      function cs(t, e) {
        (this.version = t), (this.transformResults = e);
      }
      var hs = function (t, e) {
          (this.field = t), (this.transform = e);
        },
        ls =
          ((fs.none = function () {
            return new fs();
          }),
          (fs.exists = function (t) {
            return new fs(void 0, t);
          }),
          (fs.updateTime = function (t) {
            return new fs(t);
          }),
          Object.defineProperty(fs.prototype, "isNone", {
            get: function () {
              return void 0 === this.updateTime && void 0 === this.exists;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (fs.prototype.isEqual = function (t) {
            return (
              this.exists === t.exists &&
              (this.updateTime
                ? !!t.updateTime && this.updateTime.isEqual(t.updateTime)
                : !t.updateTime)
            );
          }),
          fs);
      function fs(t, e) {
        (this.updateTime = t), (this.exists = e);
      }
      function ds(t, e) {
        return void 0 !== t.updateTime
          ? e.isFoundDocument() && e.version.isEqual(t.updateTime)
          : void 0 === t.exists || t.exists === e.isFoundDocument();
      }
      C = function () {};
      function ps(t, e, n) {
        var r, i, o, s;
        t instanceof ws
          ? ((i = e),
            (o = n),
            ds((r = t).precondition, i) &&
              ((s = r.value.clone()),
              (o = Ss(r.fieldTransforms, o, i)),
              s.setAll(o),
              i.convertToFoundDocument(gs(i), s).setHasLocalMutations()))
          : t instanceof bs
          ? ((o = e),
            (i = n),
            ds((s = t).precondition, o) &&
              ((n = Ss(s.fieldTransforms, i, o)),
              (i = o.data).setAll(Is(s)),
              i.setAll(n),
              o.convertToFoundDocument(gs(o), i).setHasLocalMutations()))
          : ((e = e), ds(t.precondition, e) && e.convertToNoDocument(Zr.min()));
      }
      function ys(t, e) {
        return (
          t.type === e.type &&
          !!t.key.isEqual(e.key) &&
          !!t.precondition.isEqual(e.precondition) &&
          ((n = t.fieldTransforms),
          (r = e.fieldTransforms),
          !!(
            (void 0 === n && void 0 === r) ||
            (n &&
              r &&
              Xr(n, r, function (t, e) {
                return (
                  (e = e),
                  (t = t).field.isEqual(e.field) &&
                    ((t = t.transform),
                    (e = e.transform),
                    (t instanceof Xo && e instanceof Xo) ||
                    (t instanceof es && e instanceof es)
                      ? Xr(t.elements, e.elements, Ci)
                      : t instanceof os && e instanceof os
                      ? Ci(t.A, e.A)
                      : t instanceof Yo && e instanceof Yo)
                );
              }))
          )) &&
          (0 === t.type
            ? t.value.isEqual(e.value)
            : 1 !== t.type ||
              (t.data.isEqual(e.data) && t.fieldMask.isEqual(e.fieldMask)))
        );
        var n, r;
      }
      function gs(t) {
        return t.isFoundDocument() ? t.version : Zr.min();
      }
      var ms,
        vs,
        ws = (n(Ts, (vs = C)), Ts),
        bs = (n(Es, (ms = C)), Es);
      function Es(t, e, n, r, i) {
        void 0 === i && (i = []);
        var o = this;
        return (
          ((o = ms.call(this) || this).key = t),
          (o.data = e),
          (o.fieldMask = n),
          (o.precondition = r),
          (o.fieldTransforms = i),
          (o.type = 1),
          o
        );
      }
      function Ts(t, e, n, r) {
        void 0 === r && (r = []);
        var i = this;
        return (
          ((i = vs.call(this) || this).key = t),
          (i.value = e),
          (i.precondition = n),
          (i.fieldTransforms = r),
          (i.type = 0),
          i
        );
      }
      function Is(n) {
        var r = new Map();
        return (
          n.fieldMask.fields.forEach(function (t) {
            var e;
            t.isEmpty() || ((e = n.data.field(t)), r.set(t, e));
          }),
          r
        );
      }
      function _s(t, e, n) {
        var r = new Map();
        Hr(t.length === n.length);
        for (var i = 0; i < n.length; i++) {
          var o = t[i],
            s = o.transform,
            a = e.data.field(o.field);
          r.set(
            o.field,
            ((o = s),
            (s = a),
            (a = n[i]),
            o instanceof Xo ? Zo(o, s) : o instanceof es ? rs(o, s) : a)
          );
        }
        return r;
      }
      function Ss(t, e, n) {
        for (var r, i = new Map(), o = 0, s = t; o < s.length; o++) {
          var a = s[o],
            u = a.transform,
            c = n.data.field(a.field);
          i.set(
            a.field,
            ((r = c),
            (a = e),
            (c = void 0),
            (u = u) instanceof Yo
              ? ((c = {
                  fields: {
                    __type__: { stringValue: "server_timestamp" },
                    __local_write_time__: {
                      timestampValue: {
                        seconds: a.seconds,
                        nanos: a.nanoseconds,
                      },
                    },
                  },
                }),
                r && (c.fields.__previous_value__ = r),
                { mapValue: c })
              : u instanceof Xo
              ? Zo(u, r)
              : u instanceof es
              ? rs(u, r)
              : ((u = Ho((c = u), r)),
                (r = as(u) + as(c.A)),
                Pi(u) && Pi(c.A) ? Go(r) : Ko(c.R, r)))
          );
        }
        return i;
      }
      function As(t) {
        this.count = t;
      }
      var Ds,
        Ns,
        Cs,
        ks = (n(Os, (Cs = C)), Os),
        Rs = (n(xs, (Ns = C)), xs);
      function xs(t, e) {
        var n = this;
        return (
          ((n = Ns.call(this) || this).key = t),
          (n.precondition = e),
          (n.type = 3),
          (n.fieldTransforms = []),
          n
        );
      }
      function Os(t, e) {
        var n = this;
        return (
          ((n = Cs.call(this) || this).key = t),
          (n.precondition = e),
          (n.type = 2),
          (n.fieldTransforms = []),
          n
        );
      }
      function Ls(t) {
        switch (t) {
          case Mr.OK:
            return Qr(), 0;
          case Mr.CANCELLED:
          case Mr.UNKNOWN:
          case Mr.DEADLINE_EXCEEDED:
          case Mr.RESOURCE_EXHAUSTED:
          case Mr.INTERNAL:
          case Mr.UNAVAILABLE:
          case Mr.UNAUTHENTICATED:
            return;
          case Mr.INVALID_ARGUMENT:
          case Mr.NOT_FOUND:
          case Mr.ALREADY_EXISTS:
          case Mr.PERMISSION_DENIED:
          case Mr.FAILED_PRECONDITION:
          case Mr.ABORTED:
          case Mr.OUT_OF_RANGE:
          case Mr.UNIMPLEMENTED:
          case Mr.DATA_LOSS:
            return 1;
          default:
            return Qr(), 0;
        }
      }
      function Ps(t) {
        if (void 0 === t) return jr("GRPC error has no .code"), Mr.UNKNOWN;
        switch (t) {
          case Ds.OK:
            return Mr.OK;
          case Ds.CANCELLED:
            return Mr.CANCELLED;
          case Ds.UNKNOWN:
            return Mr.UNKNOWN;
          case Ds.DEADLINE_EXCEEDED:
            return Mr.DEADLINE_EXCEEDED;
          case Ds.RESOURCE_EXHAUSTED:
            return Mr.RESOURCE_EXHAUSTED;
          case Ds.INTERNAL:
            return Mr.INTERNAL;
          case Ds.UNAVAILABLE:
            return Mr.UNAVAILABLE;
          case Ds.UNAUTHENTICATED:
            return Mr.UNAUTHENTICATED;
          case Ds.INVALID_ARGUMENT:
            return Mr.INVALID_ARGUMENT;
          case Ds.NOT_FOUND:
            return Mr.NOT_FOUND;
          case Ds.ALREADY_EXISTS:
            return Mr.ALREADY_EXISTS;
          case Ds.PERMISSION_DENIED:
            return Mr.PERMISSION_DENIED;
          case Ds.FAILED_PRECONDITION:
            return Mr.FAILED_PRECONDITION;
          case Ds.ABORTED:
            return Mr.ABORTED;
          case Ds.OUT_OF_RANGE:
            return Mr.OUT_OF_RANGE;
          case Ds.UNIMPLEMENTED:
            return Mr.UNIMPLEMENTED;
          case Ds.DATA_LOSS:
            return Mr.DATA_LOSS;
          default:
            return Qr();
        }
      }
      ((_ = Ds = Ds || {})[(_.OK = 0)] = "OK"),
        (_[(_.CANCELLED = 1)] = "CANCELLED"),
        (_[(_.UNKNOWN = 2)] = "UNKNOWN"),
        (_[(_.INVALID_ARGUMENT = 3)] = "INVALID_ARGUMENT"),
        (_[(_.DEADLINE_EXCEEDED = 4)] = "DEADLINE_EXCEEDED"),
        (_[(_.NOT_FOUND = 5)] = "NOT_FOUND"),
        (_[(_.ALREADY_EXISTS = 6)] = "ALREADY_EXISTS"),
        (_[(_.PERMISSION_DENIED = 7)] = "PERMISSION_DENIED"),
        (_[(_.UNAUTHENTICATED = 16)] = "UNAUTHENTICATED"),
        (_[(_.RESOURCE_EXHAUSTED = 8)] = "RESOURCE_EXHAUSTED"),
        (_[(_.FAILED_PRECONDITION = 9)] = "FAILED_PRECONDITION"),
        (_[(_.ABORTED = 10)] = "ABORTED"),
        (_[(_.OUT_OF_RANGE = 11)] = "OUT_OF_RANGE"),
        (_[(_.UNIMPLEMENTED = 12)] = "UNIMPLEMENTED"),
        (_[(_.INTERNAL = 13)] = "INTERNAL"),
        (_[(_.UNAVAILABLE = 14)] = "UNAVAILABLE"),
        (_[(_.DATA_LOSS = 15)] = "DATA_LOSS");
      var Ms =
          ((Bs.prototype.insert = function (t, e) {
            return new Bs(
              this.comparator,
              this.root
                .insert(t, e, this.comparator)
                .copy(null, null, Vs.BLACK, null, null)
            );
          }),
          (Bs.prototype.remove = function (t) {
            return new Bs(
              this.comparator,
              this.root
                .remove(t, this.comparator)
                .copy(null, null, Vs.BLACK, null, null)
            );
          }),
          (Bs.prototype.get = function (t) {
            for (var e = this.root; !e.isEmpty(); ) {
              var n = this.comparator(t, e.key);
              if (0 === n) return e.value;
              n < 0 ? (e = e.left) : 0 < n && (e = e.right);
            }
            return null;
          }),
          (Bs.prototype.indexOf = function (t) {
            for (var e = 0, n = this.root; !n.isEmpty(); ) {
              var r = this.comparator(t, n.key);
              if (0 === r) return e + n.left.size;
              n = r < 0 ? n.left : ((e += n.left.size + 1), n.right);
            }
            return -1;
          }),
          (Bs.prototype.isEmpty = function () {
            return this.root.isEmpty();
          }),
          Object.defineProperty(Bs.prototype, "size", {
            get: function () {
              return this.root.size;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (Bs.prototype.minKey = function () {
            return this.root.minKey();
          }),
          (Bs.prototype.maxKey = function () {
            return this.root.maxKey();
          }),
          (Bs.prototype.inorderTraversal = function (t) {
            return this.root.inorderTraversal(t);
          }),
          (Bs.prototype.forEach = function (n) {
            this.inorderTraversal(function (t, e) {
              return n(t, e), !1;
            });
          }),
          (Bs.prototype.toString = function () {
            var n = [];
            return (
              this.inorderTraversal(function (t, e) {
                return n.push(t + ":" + e), !1;
              }),
              "{" + n.join(", ") + "}"
            );
          }),
          (Bs.prototype.reverseTraversal = function (t) {
            return this.root.reverseTraversal(t);
          }),
          (Bs.prototype.getIterator = function () {
            return new Fs(this.root, null, this.comparator, !1);
          }),
          (Bs.prototype.getIteratorFrom = function (t) {
            return new Fs(this.root, t, this.comparator, !1);
          }),
          (Bs.prototype.getReverseIterator = function () {
            return new Fs(this.root, null, this.comparator, !0);
          }),
          (Bs.prototype.getReverseIteratorFrom = function (t) {
            return new Fs(this.root, t, this.comparator, !0);
          }),
          Bs),
        Fs =
          ((qs.prototype.getNext = function () {
            var t = this.nodeStack.pop(),
              e = { key: t.key, value: t.value };
            if (this.isReverse)
              for (t = t.left; !t.isEmpty(); )
                this.nodeStack.push(t), (t = t.right);
            else
              for (t = t.right; !t.isEmpty(); )
                this.nodeStack.push(t), (t = t.left);
            return e;
          }),
          (qs.prototype.hasNext = function () {
            return 0 < this.nodeStack.length;
          }),
          (qs.prototype.peek = function () {
            if (0 === this.nodeStack.length) return null;
            var t = this.nodeStack[this.nodeStack.length - 1];
            return { key: t.key, value: t.value };
          }),
          qs),
        Vs =
          ((Us.prototype.copy = function (t, e, n, r, i) {
            return new Us(
              null != t ? t : this.key,
              null != e ? e : this.value,
              null != n ? n : this.color,
              null != r ? r : this.left,
              null != i ? i : this.right
            );
          }),
          (Us.prototype.isEmpty = function () {
            return !1;
          }),
          (Us.prototype.inorderTraversal = function (t) {
            return (
              this.left.inorderTraversal(t) ||
              t(this.key, this.value) ||
              this.right.inorderTraversal(t)
            );
          }),
          (Us.prototype.reverseTraversal = function (t) {
            return (
              this.right.reverseTraversal(t) ||
              t(this.key, this.value) ||
              this.left.reverseTraversal(t)
            );
          }),
          (Us.prototype.min = function () {
            return this.left.isEmpty() ? this : this.left.min();
          }),
          (Us.prototype.minKey = function () {
            return this.min().key;
          }),
          (Us.prototype.maxKey = function () {
            return this.right.isEmpty() ? this.key : this.right.maxKey();
          }),
          (Us.prototype.insert = function (t, e, n) {
            var r = this,
              i = n(t, r.key);
            return (r =
              i < 0
                ? r.copy(null, null, null, r.left.insert(t, e, n), null)
                : 0 === i
                ? r.copy(null, e, null, null, null)
                : r.copy(
                    null,
                    null,
                    null,
                    null,
                    r.right.insert(t, e, n)
                  )).fixUp();
          }),
          (Us.prototype.removeMin = function () {
            if (this.left.isEmpty()) return Us.EMPTY;
            var t = this;
            return (t = (t =
              !t.left.isRed() && !t.left.left.isRed()
                ? t.moveRedLeft()
                : t).copy(null, null, null, t.left.removeMin(), null)).fixUp();
          }),
          (Us.prototype.remove = function (t, e) {
            var n,
              r = this;
            if (e(t, r.key) < 0)
              r = (r = !(
                r.left.isEmpty() ||
                r.left.isRed() ||
                r.left.left.isRed()
              )
                ? r.moveRedLeft()
                : r).copy(null, null, null, r.left.remove(t, e), null);
            else {
              if (
                0 ===
                e(
                  t,
                  (r = !(
                    (r = r.left.isRed()
                      ? r.rotateRight()
                      : r).right.isEmpty() ||
                    r.right.isRed() ||
                    r.right.left.isRed()
                  )
                    ? r.moveRedRight()
                    : r).key
                )
              ) {
                if (r.right.isEmpty()) return Us.EMPTY;
                (n = r.right.min()),
                  (r = r.copy(n.key, n.value, null, null, r.right.removeMin()));
              }
              r = r.copy(null, null, null, null, r.right.remove(t, e));
            }
            return r.fixUp();
          }),
          (Us.prototype.isRed = function () {
            return this.color;
          }),
          (Us.prototype.fixUp = function () {
            var t = this;
            return (t =
              (t =
                (t =
                  t.right.isRed() && !t.left.isRed()
                    ? t.rotateLeft()
                    : t).left.isRed() && t.left.left.isRed()
                  ? t.rotateRight()
                  : t).left.isRed() && t.right.isRed()
                ? t.colorFlip()
                : t);
          }),
          (Us.prototype.moveRedLeft = function () {
            var t = this.colorFlip();
            return (t = t.right.left.isRed()
              ? (t = (t = t.copy(
                  null,
                  null,
                  null,
                  null,
                  t.right.rotateRight()
                )).rotateLeft()).colorFlip()
              : t);
          }),
          (Us.prototype.moveRedRight = function () {
            var t = this.colorFlip();
            return (t = t.left.left.isRed()
              ? (t = t.rotateRight()).colorFlip()
              : t);
          }),
          (Us.prototype.rotateLeft = function () {
            var t = this.copy(null, null, Us.RED, null, this.right.left);
            return this.right.copy(null, null, this.color, t, null);
          }),
          (Us.prototype.rotateRight = function () {
            var t = this.copy(null, null, Us.RED, this.left.right, null);
            return this.left.copy(null, null, this.color, null, t);
          }),
          (Us.prototype.colorFlip = function () {
            var t = this.left.copy(null, null, !this.left.color, null, null),
              e = this.right.copy(null, null, !this.right.color, null, null);
            return this.copy(null, null, !this.color, t, e);
          }),
          (Us.prototype.checkMaxDepth = function () {
            var t = this.check();
            return Math.pow(2, t) <= this.size + 1;
          }),
          (Us.prototype.check = function () {
            if (this.isRed() && this.left.isRed()) throw Qr();
            if (this.right.isRed()) throw Qr();
            var t = this.left.check();
            if (t !== this.right.check()) throw Qr();
            return t + (this.isRed() ? 0 : 1);
          }),
          Us);
      function Us(t, e, n, r, i) {
        (this.key = t),
          (this.value = e),
          (this.color = null != n ? n : Us.RED),
          (this.left = null != r ? r : Us.EMPTY),
          (this.right = null != i ? i : Us.EMPTY),
          (this.size = this.left.size + 1 + this.right.size);
      }
      function qs(t, e, n, r) {
        (this.isReverse = r), (this.nodeStack = []);
        for (var i = 1; !t.isEmpty(); )
          if (((i = e ? n(t.key, e) : 1), r && (i *= -1), i < 0))
            t = this.isReverse ? t.left : t.right;
          else {
            if (0 === i) {
              this.nodeStack.push(t);
              break;
            }
            this.nodeStack.push(t), (t = this.isReverse ? t.right : t.left);
          }
      }
      function Bs(t, e) {
        (this.comparator = t), (this.root = e || Vs.EMPTY);
      }
      function js() {
        this.size = 0;
      }
      (Vs.EMPTY = null),
        (Vs.RED = !0),
        (Vs.BLACK = !1),
        (Vs.EMPTY =
          (Object.defineProperty(js.prototype, "key", {
            get: function () {
              throw Qr();
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(js.prototype, "value", {
            get: function () {
              throw Qr();
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(js.prototype, "color", {
            get: function () {
              throw Qr();
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(js.prototype, "left", {
            get: function () {
              throw Qr();
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(js.prototype, "right", {
            get: function () {
              throw Qr();
            },
            enumerable: !1,
            configurable: !0,
          }),
          (js.prototype.copy = function (t, e, n, r, i) {
            return this;
          }),
          (js.prototype.insert = function (t, e, n) {
            return new Vs(t, e);
          }),
          (js.prototype.remove = function (t, e) {
            return this;
          }),
          (js.prototype.isEmpty = function () {
            return !0;
          }),
          (js.prototype.inorderTraversal = function (t) {
            return !1;
          }),
          (js.prototype.reverseTraversal = function (t) {
            return !1;
          }),
          (js.prototype.minKey = function () {
            return null;
          }),
          (js.prototype.maxKey = function () {
            return null;
          }),
          (js.prototype.isRed = function () {
            return !1;
          }),
          (js.prototype.checkMaxDepth = function () {
            return !0;
          }),
          (js.prototype.check = function () {
            return 0;
          }),
          new js()));
      var Ks =
          ((zs.prototype.has = function (t) {
            return null !== this.data.get(t);
          }),
          (zs.prototype.first = function () {
            return this.data.minKey();
          }),
          (zs.prototype.last = function () {
            return this.data.maxKey();
          }),
          Object.defineProperty(zs.prototype, "size", {
            get: function () {
              return this.data.size;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (zs.prototype.indexOf = function (t) {
            return this.data.indexOf(t);
          }),
          (zs.prototype.forEach = function (n) {
            this.data.inorderTraversal(function (t, e) {
              return n(t), !1;
            });
          }),
          (zs.prototype.forEachInRange = function (t, e) {
            for (var n = this.data.getIteratorFrom(t[0]); n.hasNext(); ) {
              var r = n.getNext();
              if (0 <= this.comparator(r.key, t[1])) return;
              e(r.key);
            }
          }),
          (zs.prototype.forEachWhile = function (t, e) {
            for (
              var n =
                void 0 !== e
                  ? this.data.getIteratorFrom(e)
                  : this.data.getIterator();
              n.hasNext();

            )
              if (!t(n.getNext().key)) return;
          }),
          (zs.prototype.firstAfterOrEqual = function (t) {
            t = this.data.getIteratorFrom(t);
            return t.hasNext() ? t.getNext().key : null;
          }),
          (zs.prototype.getIterator = function () {
            return new Gs(this.data.getIterator());
          }),
          (zs.prototype.getIteratorFrom = function (t) {
            return new Gs(this.data.getIteratorFrom(t));
          }),
          (zs.prototype.add = function (t) {
            return this.copy(this.data.remove(t).insert(t, !0));
          }),
          (zs.prototype.delete = function (t) {
            return this.has(t) ? this.copy(this.data.remove(t)) : this;
          }),
          (zs.prototype.isEmpty = function () {
            return this.data.isEmpty();
          }),
          (zs.prototype.unionWith = function (t) {
            var e = this;
            return (
              e.size < t.size && ((e = t), (t = this)),
              t.forEach(function (t) {
                e = e.add(t);
              }),
              e
            );
          }),
          (zs.prototype.isEqual = function (t) {
            if (!(t instanceof zs)) return !1;
            if (this.size !== t.size) return !1;
            for (
              var e = this.data.getIterator(), n = t.data.getIterator();
              e.hasNext();

            ) {
              var r = e.getNext().key,
                i = n.getNext().key;
              if (0 !== this.comparator(r, i)) return !1;
            }
            return !0;
          }),
          (zs.prototype.toArray = function () {
            var e = [];
            return (
              this.forEach(function (t) {
                e.push(t);
              }),
              e
            );
          }),
          (zs.prototype.toString = function () {
            var e = [];
            return (
              this.forEach(function (t) {
                return e.push(t);
              }),
              "SortedSet(" + e.toString() + ")"
            );
          }),
          (zs.prototype.copy = function (t) {
            var e = new zs(this.comparator);
            return (e.data = t), e;
          }),
          zs),
        Gs =
          ((Hs.prototype.getNext = function () {
            return this.iter.getNext().key;
          }),
          (Hs.prototype.hasNext = function () {
            return this.iter.hasNext();
          }),
          Hs),
        Qs = new Ms(Ai.comparator);
      function Hs(t) {
        this.iter = t;
      }
      function zs(t) {
        (this.comparator = t), (this.data = new Ms(this.comparator));
      }
      var Ws = new Ms(Ai.comparator);
      var Ys = new Ms(Ai.comparator);
      var Xs = new Ks(Ai.comparator);
      function $s() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        for (var n = Xs, r = 0, i = t; r < i.length; r++)
          var o = i[r], n = n.add(o);
        return n;
      }
      var Js = new Ks(Yr);
      var Zs =
          ((ca.createSynthesizedRemoteEventForCurrentChange = function (t, e) {
            var n = new Map();
            return (
              n.set(t, ta.createSynthesizedTargetChangeForCurrentChange(t, e)),
              new ca(Zr.min(), n, Js, Qs, $s())
            );
          }),
          ca),
        ta =
          ((ua.createSynthesizedTargetChangeForCurrentChange = function (t, e) {
            return new ua(li.EMPTY_BYTE_STRING, e, $s(), $s(), $s());
          }),
          ua),
        ea = function (t, e, n, r) {
          (this.v = t),
            (this.removedTargetIds = e),
            (this.key = n),
            (this.P = r);
        },
        na = function (t, e) {
          (this.targetId = t), (this.V = e);
        },
        ra = function (t, e, n, r) {
          void 0 === n && (n = li.EMPTY_BYTE_STRING),
            void 0 === r && (r = null),
            (this.state = t),
            (this.targetIds = e),
            (this.resumeToken = n),
            (this.cause = r);
        },
        ia =
          (Object.defineProperty(aa.prototype, "current", {
            get: function () {
              return this.N;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(aa.prototype, "resumeToken", {
            get: function () {
              return this.C;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(aa.prototype, "k", {
            get: function () {
              return 0 !== this.S;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(aa.prototype, "$", {
            get: function () {
              return this.F;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (aa.prototype.O = function (t) {
            0 < t.approximateByteSize() && ((this.F = !0), (this.C = t));
          }),
          (aa.prototype.M = function () {
            var n = $s(),
              r = $s(),
              i = $s();
            return (
              this.D.forEach(function (t, e) {
                switch (e) {
                  case 0:
                    n = n.add(t);
                    break;
                  case 2:
                    r = r.add(t);
                    break;
                  case 1:
                    i = i.add(t);
                    break;
                  default:
                    Qr();
                }
              }),
              new ta(this.C, this.N, n, r, i)
            );
          }),
          (aa.prototype.L = function () {
            (this.F = !1), (this.D = la());
          }),
          (aa.prototype.B = function (t, e) {
            (this.F = !0), (this.D = this.D.insert(t, e));
          }),
          (aa.prototype.q = function (t) {
            (this.F = !0), (this.D = this.D.remove(t));
          }),
          (aa.prototype.U = function () {
            this.S += 1;
          }),
          (aa.prototype.K = function () {
            --this.S;
          }),
          (aa.prototype.j = function () {
            (this.F = !0), (this.N = !0);
          }),
          aa),
        oa =
          ((sa.prototype.X = function (t) {
            for (var e = 0, n = t.v; e < n.length; e++) {
              var r = n[e];
              t.P && t.P.isFoundDocument()
                ? this.Z(r, t.P)
                : this.tt(r, t.key, t.P);
            }
            for (var i = 0, o = t.removedTargetIds; i < o.length; i++)
              (r = o[i]), this.tt(r, t.key, t.P);
          }),
          (sa.prototype.et = function (n) {
            var r = this;
            this.forEachTarget(n, function (t) {
              var e = r.nt(t);
              switch (n.state) {
                case 0:
                  r.st(t) && e.O(n.resumeToken);
                  break;
                case 1:
                  e.K(), e.k || e.L(), e.O(n.resumeToken);
                  break;
                case 2:
                  e.K(), e.k || r.removeTarget(t);
                  break;
                case 3:
                  r.st(t) && (e.j(), e.O(n.resumeToken));
                  break;
                case 4:
                  r.st(t) && (r.it(t), e.O(n.resumeToken));
                  break;
                default:
                  Qr();
              }
            });
          }),
          (sa.prototype.forEachTarget = function (t, n) {
            var r = this;
            0 < t.targetIds.length
              ? t.targetIds.forEach(n)
              : this.G.forEach(function (t, e) {
                  r.st(e) && n(e);
                });
          }),
          (sa.prototype.rt = function (t) {
            var e = t.targetId,
              n = t.V.count,
              t = this.ot(e);
            t &&
              (Yi((t = t.target))
                ? 0 === n
                  ? ((t = new Ai(t.path)),
                    this.tt(e, t, Ki.newNoDocument(t, Zr.min())))
                  : Hr(1 === n)
                : this.ct(e) !== n && (this.it(e), (this.Y = this.Y.add(e))));
          }),
          (sa.prototype.ut = function (r) {
            var i = this,
              o = new Map();
            this.G.forEach(function (t, e) {
              var n = i.ot(e);
              n &&
                (t.current &&
                  Yi(n.target) &&
                  ((n = new Ai(n.target.path)),
                  null !== i.H.get(n) ||
                    i.at(e, n) ||
                    i.tt(e, n, Ki.newNoDocument(n, r))),
                t.$ && (o.set(e, t.M()), t.L()));
            });
            var s = $s();
            this.J.forEach(function (t, e) {
              var n = !0;
              e.forEachWhile(function (t) {
                t = i.ot(t);
                return !t || 2 === t.purpose || (n = !1);
              }),
                n && (s = s.add(t));
            });
            var t = new Zs(r, o, this.Y, this.H, s);
            return (this.H = Qs), (this.J = ha()), (this.Y = new Ks(Yr)), t;
          }),
          (sa.prototype.Z = function (t, e) {
            var n;
            this.st(t) &&
              ((n = this.at(t, e.key) ? 2 : 0),
              this.nt(t).B(e.key, n),
              (this.H = this.H.insert(e.key, e)),
              (this.J = this.J.insert(e.key, this.ht(e.key).add(t))));
          }),
          (sa.prototype.tt = function (t, e, n) {
            var r;
            this.st(t) &&
              ((r = this.nt(t)),
              this.at(t, e) ? r.B(e, 1) : r.q(e),
              (this.J = this.J.insert(e, this.ht(e).delete(t))),
              n && (this.H = this.H.insert(e, n)));
          }),
          (sa.prototype.removeTarget = function (t) {
            this.G.delete(t);
          }),
          (sa.prototype.ct = function (t) {
            var e = this.nt(t).M();
            return (
              this.W.getRemoteKeysForTarget(t).size +
              e.addedDocuments.size -
              e.removedDocuments.size
            );
          }),
          (sa.prototype.U = function (t) {
            this.nt(t).U();
          }),
          (sa.prototype.nt = function (t) {
            var e = this.G.get(t);
            return e || ((e = new ia()), this.G.set(t, e)), e;
          }),
          (sa.prototype.ht = function (t) {
            var e = this.J.get(t);
            return e || ((e = new Ks(Yr)), (this.J = this.J.insert(t, e))), e;
          }),
          (sa.prototype.st = function (t) {
            var e = null !== this.ot(t);
            return (
              e || Br("WatchChangeAggregator", "Detected inactive target", t), e
            );
          }),
          (sa.prototype.ot = function (t) {
            var e = this.G.get(t);
            return e && e.k ? null : this.W.lt(t);
          }),
          (sa.prototype.it = function (e) {
            var n = this;
            this.G.set(e, new ia()),
              this.W.getRemoteKeysForTarget(e).forEach(function (t) {
                n.tt(e, t, null);
              });
          }),
          (sa.prototype.at = function (t, e) {
            return this.W.getRemoteKeysForTarget(t).has(e);
          }),
          sa);
      function sa(t) {
        (this.W = t),
          (this.G = new Map()),
          (this.H = Qs),
          (this.J = ha()),
          (this.Y = new Ks(Yr));
      }
      function aa() {
        (this.S = 0),
          (this.D = la()),
          (this.C = li.EMPTY_BYTE_STRING),
          (this.N = !1),
          (this.F = !0);
      }
      function ua(t, e, n, r, i) {
        (this.resumeToken = t),
          (this.current = e),
          (this.addedDocuments = n),
          (this.modifiedDocuments = r),
          (this.removedDocuments = i);
      }
      function ca(t, e, n, r, i) {
        (this.snapshotVersion = t),
          (this.targetChanges = e),
          (this.targetMismatches = n),
          (this.documentUpdates = r),
          (this.resolvedLimboDocuments = i);
      }
      function ha() {
        return new Ms(Ai.comparator);
      }
      function la() {
        return new Ms(Ai.comparator);
      }
      var fa = { asc: "ASCENDING", desc: "DESCENDING" },
        da = {
          "<": "LESS_THAN",
          "<=": "LESS_THAN_OR_EQUAL",
          ">": "GREATER_THAN",
          ">=": "GREATER_THAN_OR_EQUAL",
          "==": "EQUAL",
          "!=": "NOT_EQUAL",
          "array-contains": "ARRAY_CONTAINS",
          in: "IN",
          "not-in": "NOT_IN",
          "array-contains-any": "ARRAY_CONTAINS_ANY",
        },
        pa = function (t, e) {
          (this.databaseId = t), (this.I = e);
        };
      function ya(t, e) {
        return t.I
          ? new Date(1e3 * e.seconds)
              .toISOString()
              .replace(/\.\d*/, "")
              .replace("Z", "") +
              "." +
              ("000000000" + e.nanoseconds).slice(-9) +
              "Z"
          : { seconds: "" + e.seconds, nanos: e.nanoseconds };
      }
      function ga(t, e) {
        return t.I ? e.toBase64() : e.toUint8Array();
      }
      function ma(t) {
        return (
          Hr(!!t), Zr.fromTimestamp(((t = vi(t)), new Jr(t.seconds, t.nanos)))
        );
      }
      function va(t, e) {
        return new ai(["projects", t.projectId, "databases", t.database])
          .child("documents")
          .child(e)
          .canonicalString();
      }
      function wa(t) {
        t = ai.fromString(t);
        return Hr(Ua(t)), t;
      }
      function ba(t, e) {
        return va(t.databaseId, e.path);
      }
      function Ea(t, e) {
        e = wa(e);
        if (e.get(1) !== t.databaseId.projectId)
          throw new Fr(
            Mr.INVALID_ARGUMENT,
            "Tried to deserialize key from different project: " +
              e.get(1) +
              " vs " +
              t.databaseId.projectId
          );
        if (e.get(3) !== t.databaseId.database)
          throw new Fr(
            Mr.INVALID_ARGUMENT,
            "Tried to deserialize key from different database: " +
              e.get(3) +
              " vs " +
              t.databaseId.database
          );
        return new Ai(Sa(e));
      }
      function Ta(t, e) {
        return va(t.databaseId, e);
      }
      function Ia(t) {
        t = wa(t);
        return 4 === t.length ? ai.emptyPath() : Sa(t);
      }
      function _a(t) {
        return new ai([
          "projects",
          t.databaseId.projectId,
          "databases",
          t.databaseId.database,
        ]).canonicalString();
      }
      function Sa(t) {
        return Hr(4 < t.length && "documents" === t.get(4)), t.popFirst(5);
      }
      function Aa(t, e, n) {
        return { name: ba(t, e), fields: n.value.mapValue.fields };
      }
      function Da(t, e, n) {
        var r = Ea(t, e.name),
          t = ma(e.updateTime),
          e = new Bi({ mapValue: { fields: e.fields } }),
          e = Ki.newFoundDocument(r, t, e);
        return (
          n && e.setHasCommittedMutations(),
          n ? e.setHasCommittedMutations() : e
        );
      }
      function Na(t, e) {
        var n, r, i;
        if (e instanceof ws) n = { update: Aa(t, e.key, e.value) };
        else if (e instanceof ks) n = { delete: ba(t, e.key) };
        else if (e instanceof bs)
          n = {
            update: Aa(t, e.key, e.data),
            updateMask:
              ((r = e.fieldMask),
              (i = []),
              r.fields.forEach(function (t) {
                return i.push(t.canonicalString());
              }),
              { fieldPaths: i }),
          };
        else {
          if (!(e instanceof Rs)) return Qr();
          n = { verify: ba(t, e.key) };
        }
        return (
          0 < e.fieldTransforms.length &&
            (n.updateTransforms = e.fieldTransforms.map(function (t) {
              var e = t.transform;
              if (e instanceof Yo)
                return {
                  fieldPath: t.field.canonicalString(),
                  setToServerValue: "REQUEST_TIME",
                };
              if (e instanceof Xo)
                return {
                  fieldPath: t.field.canonicalString(),
                  appendMissingElements: { values: e.elements },
                };
              if (e instanceof es)
                return {
                  fieldPath: t.field.canonicalString(),
                  removeAllFromArray: { values: e.elements },
                };
              if (e instanceof os)
                return { fieldPath: t.field.canonicalString(), increment: e.A };
              throw Qr();
            })),
          e.precondition.isNone ||
            (n.currentDocument =
              void 0 !== (e = e.precondition).updateTime
                ? { updateTime: ya(t, e.updateTime.toTimestamp()) }
                : void 0 !== e.exists
                ? { exists: e.exists }
                : Qr()),
          n
        );
      }
      function Ca(e, t) {
        var n = t.currentDocument
            ? void 0 !== (s = t.currentDocument).updateTime
              ? ls.updateTime(ma(s.updateTime))
              : void 0 !== s.exists
              ? ls.exists(s.exists)
              : ls.none()
            : ls.none(),
          r = t.updateTransforms
            ? t.updateTransforms.map(function (t) {
                return (function (t, e) {
                  var n,
                    r = null;
                  "setToServerValue" in e
                    ? (Hr("REQUEST_TIME" === e.setToServerValue),
                      (r = new Yo()))
                    : "appendMissingElements" in e
                    ? ((n = e.appendMissingElements.values || []),
                      (r = new Xo(n)))
                    : "removeAllFromArray" in e
                    ? ((n = e.removeAllFromArray.values || []), (r = new es(n)))
                    : "increment" in e
                    ? (r = new os(t, e.increment))
                    : Qr();
                  e = ci.fromServerFormat(e.fieldPath);
                  return new hs(e, r);
                })(e, t);
              })
            : [];
        if (t.update) {
          t.update.name;
          var i = Ea(e, t.update.name),
            o = new Bi({ mapValue: { fields: t.update.fields } });
          if (t.updateMask) {
            var s =
              ((s = t.updateMask.fieldPaths || []),
              new hi(
                s.map(function (t) {
                  return ci.fromServerFormat(t);
                })
              ));
            return new bs(i, o, s, n, r);
          }
          return new ws(i, o, n, r);
        }
        if (t.delete) {
          r = Ea(e, t.delete);
          return new ks(r, n);
        }
        if (t.verify) {
          t = Ea(e, t.verify);
          return new Rs(t, n);
        }
        return Qr();
      }
      function ka(t, e) {
        return { documents: [Ta(t, e.path)] };
      }
      function Ra(t, e) {
        var n = { structuredQuery: {} },
          r = e.path;
        null !== e.collectionGroup
          ? ((n.parent = Ta(t, r)),
            (n.structuredQuery.from = [
              { collectionId: e.collectionGroup, allDescendants: !0 },
            ]))
          : ((n.parent = Ta(t, r.popLast())),
            (n.structuredQuery.from = [{ collectionId: r.lastSegment() }]));
        r = (function (t) {
          if (0 !== t.length) {
            t = t.map(function (t) {
              if ("==" === t.op) {
                if (Vi(t.value))
                  return { unaryFilter: { field: Pa(t.field), op: "IS_NAN" } };
                if (Fi(t.value))
                  return { unaryFilter: { field: Pa(t.field), op: "IS_NULL" } };
              } else if ("!=" === t.op) {
                if (Vi(t.value))
                  return {
                    unaryFilter: { field: Pa(t.field), op: "IS_NOT_NAN" },
                  };
                if (Fi(t.value))
                  return {
                    unaryFilter: { field: Pa(t.field), op: "IS_NOT_NULL" },
                  };
              }
              return {
                fieldFilter: {
                  field: Pa(t.field),
                  op: ((e = t.op), da[e]),
                  value: t.value,
                },
              };
              var e;
            });
            return 1 === t.length
              ? t[0]
              : { compositeFilter: { op: "AND", filters: t } };
          }
        })(e.filters);
        r && (n.structuredQuery.where = r);
        r = (function (t) {
          if (0 !== t.length)
            return t.map(function (t) {
              return {
                field: Pa((t = t).field),
                direction: ((t = t.dir), fa[t]),
              };
            });
        })(e.orderBy);
        r && (n.structuredQuery.orderBy = r);
        (r = e.limit), (r = t.I || Ii(r) ? r : { value: r });
        return (
          null !== r && (n.structuredQuery.limit = r),
          e.startAt && (n.structuredQuery.startAt = Oa(e.startAt)),
          e.endAt && (n.structuredQuery.endAt = Oa(e.endAt)),
          n
        );
      }
      function xa(t) {
        var e = Ia(t.parent),
          n = t.structuredQuery,
          r = n.from ? n.from.length : 0,
          i = null;
        0 < r &&
          (Hr(1 === r),
          (a = n.from[0]).allDescendants
            ? (i = a.collectionId)
            : (e = e.child(a.collectionId)));
        var o = [];
        n.where &&
          (o = (function e(t) {
            return t
              ? void 0 !== t.unaryFilter
                ? [Va(t)]
                : void 0 !== t.fieldFilter
                ? [Fa(t)]
                : void 0 !== t.compositeFilter
                ? t.compositeFilter.filters
                    .map(function (t) {
                      return e(t);
                    })
                    .reduce(function (t, e) {
                      return t.concat(e);
                    })
                : Qr()
              : [];
          })(n.where));
        var s = [],
          t = null,
          r = null,
          a = null;
        return No(
          e,
          i,
          (s = n.orderBy
            ? n.orderBy.map(function (t) {
                return new _o(
                  Ma((e = t).field),
                  (function () {
                    switch (e.direction) {
                      case "ASCENDING":
                        return "asc";
                      case "DESCENDING":
                        return "desc";
                      default:
                        return;
                    }
                  })()
                );
                var e;
              })
            : s),
          o,
          (t = n.limit
            ? Ii((o = "object" == typeof (o = n.limit) ? o.value : o))
              ? null
              : o
            : t),
          "F",
          (r = n.startAt ? La(n.startAt) : r),
          (a = n.endAt ? La(n.endAt) : a)
        );
      }
      function Oa(t) {
        return { before: t.before, values: t.position };
      }
      function La(t) {
        var e = !!t.before,
          t = t.values || [];
        return new vo(t, e);
      }
      function Pa(t) {
        return { fieldPath: t.canonicalString() };
      }
      function Ma(t) {
        return ci.fromServerFormat(t.fieldPath);
      }
      function Fa(t) {
        return $i.create(
          Ma(t.fieldFilter.field),
          (function () {
            switch (t.fieldFilter.op) {
              case "EQUAL":
                return "==";
              case "NOT_EQUAL":
                return "!=";
              case "GREATER_THAN":
                return ">";
              case "GREATER_THAN_OR_EQUAL":
                return ">=";
              case "LESS_THAN":
                return "<";
              case "LESS_THAN_OR_EQUAL":
                return "<=";
              case "ARRAY_CONTAINS":
                return "array-contains";
              case "IN":
                return "in";
              case "NOT_IN":
                return "not-in";
              case "ARRAY_CONTAINS_ANY":
                return "array-contains-any";
              case "OPERATOR_UNSPECIFIED":
              default:
                return Qr();
            }
          })(),
          t.fieldFilter.value
        );
      }
      function Va(t) {
        switch (t.unaryFilter.op) {
          case "IS_NAN":
            var e = Ma(t.unaryFilter.field);
            return $i.create(e, "==", { doubleValue: NaN });
          case "IS_NULL":
            e = Ma(t.unaryFilter.field);
            return $i.create(e, "==", { nullValue: "NULL_VALUE" });
          case "IS_NOT_NAN":
            var n = Ma(t.unaryFilter.field);
            return $i.create(n, "!=", { doubleValue: NaN });
          case "IS_NOT_NULL":
            n = Ma(t.unaryFilter.field);
            return $i.create(n, "!=", { nullValue: "NULL_VALUE" });
          case "OPERATOR_UNSPECIFIED":
          default:
            return Qr();
        }
      }
      function Ua(t) {
        return (
          4 <= t.length && "projects" === t.get(0) && "databases" === t.get(2)
        );
      }
      function qa(t) {
        for (var e = "", n = 0; n < t.length; n++)
          0 < e.length && (e = Ba(e)),
            (e = (function (t, e) {
              for (var n = e, r = t.length, i = 0; i < r; i++) {
                var o = t.charAt(i);
                switch (o) {
                  case "\0":
                    n += "\x01\x10";
                    break;
                  case "\x01":
                    n += "\x01\x11";
                    break;
                  default:
                    n += o;
                }
              }
              return n;
            })(t.get(n), e));
        return Ba(e);
      }
      function Ba(t) {
        return t + "\x01\x01";
      }
      function ja(t) {
        var e = t.length;
        if ((Hr(2 <= e), 2 === e))
          return (
            Hr("\x01" === t.charAt(0) && "\x01" === t.charAt(1)), ai.emptyPath()
          );
        for (var n = e - 2, r = [], i = "", o = 0; o < e; ) {
          var s = t.indexOf("\x01", o);
          switch (((s < 0 || n < s) && Qr(), t.charAt(s + 1))) {
            case "\x01":
              var a = t.substring(o, s),
                u = void 0;
              0 === i.length ? (u = a) : ((u = i += a), (i = "")), r.push(u);
              break;
            case "\x10":
              (i += t.substring(o, s)), (i += "\0");
              break;
            case "\x11":
              i += t.substring(o, s + 1);
              break;
            default:
              Qr();
          }
          o = s + 2;
        }
        return new ai(r);
      }
      function Ka(t, e, n) {
        (this.ownerId = t),
          (this.allowTabSynchronization = e),
          (this.leaseTimestampMs = n);
      }
      var Ga = function (t, e) {
        (this.seconds = t), (this.nanoseconds = e);
      };
      (Ka.store = "owner"), (Ka.key = "owner");
      function Qa(t, e, n) {
        (this.userId = t),
          (this.lastAcknowledgedBatchId = e),
          (this.lastStreamToken = n);
      }
      (Qa.store = "mutationQueues"), (Qa.keyPath = "userId");
      function Ha(t, e, n, r, i) {
        (this.userId = t),
          (this.batchId = e),
          (this.localWriteTimeMs = n),
          (this.baseMutations = r),
          (this.mutations = i);
      }
      (Ha.store = "mutations"),
        (Ha.keyPath = "batchId"),
        (Ha.userMutationsIndex = "userMutationsIndex"),
        (Ha.userMutationsKeyPath = ["userId", "batchId"]);
      var za =
        ((Wa.prefixForUser = function (t) {
          return [t];
        }),
        (Wa.prefixForPath = function (t, e) {
          return [t, qa(e)];
        }),
        (Wa.key = function (t, e, n) {
          return [t, qa(e), n];
        }),
        Wa);
      function Wa() {}
      (za.store = "documentMutations"), (za.PLACEHOLDER = new za());
      function Ya(t, e) {
        (this.path = t), (this.readTime = e);
      }
      function Xa(t, e) {
        (this.path = t), (this.version = e);
      }
      var $a = function (t, e, n, r, i, o) {
        (this.unknownDocument = t),
          (this.noDocument = e),
          (this.document = n),
          (this.hasCommittedMutations = r),
          (this.readTime = i),
          (this.parentPath = o);
      };
      ($a.store = "remoteDocuments"),
        ($a.readTimeIndex = "readTimeIndex"),
        ($a.readTimeIndexPath = "readTime"),
        ($a.collectionReadTimeIndex = "collectionReadTimeIndex"),
        ($a.collectionReadTimeIndexPath = ["parentPath", "readTime"]);
      function Ja(t) {
        this.byteSize = t;
      }
      (Ja.store = "remoteDocumentGlobal"), (Ja.key = "remoteDocumentGlobalKey");
      function Za(t, e, n, r, i, o, s) {
        (this.targetId = t),
          (this.canonicalId = e),
          (this.readTime = n),
          (this.resumeToken = r),
          (this.lastListenSequenceNumber = i),
          (this.lastLimboFreeSnapshotVersion = o),
          (this.query = s);
      }
      (Za.store = "targets"),
        (Za.keyPath = "targetId"),
        (Za.queryTargetsIndexName = "queryTargetsIndex"),
        (Za.queryTargetsKeyPath = ["canonicalId", "targetId"]);
      var tu = function (t, e, n) {
        (this.targetId = t), (this.path = e), (this.sequenceNumber = n);
      };
      (tu.store = "targetDocuments"),
        (tu.keyPath = ["targetId", "path"]),
        (tu.documentTargetsIndex = "documentTargetsIndex"),
        (tu.documentTargetsKeyPath = ["path", "targetId"]);
      function eu(t, e, n, r) {
        (this.highestTargetId = t),
          (this.highestListenSequenceNumber = e),
          (this.lastRemoteSnapshotVersion = n),
          (this.targetCount = r);
      }
      (eu.key = "targetGlobalKey"), (eu.store = "targetGlobal");
      function nu(t, e) {
        (this.collectionId = t), (this.parent = e);
      }
      (nu.store = "collectionParents"),
        (nu.keyPath = ["collectionId", "parent"]);
      function ru(t, e, n, r) {
        (this.clientId = t),
          (this.updateTimeMs = e),
          (this.networkEnabled = n),
          (this.inForeground = r);
      }
      (ru.store = "clientMetadata"), (ru.keyPath = "clientId");
      function iu(t, e, n) {
        (this.bundleId = t), (this.createTime = e), (this.version = n);
      }
      (iu.store = "bundles"), (iu.keyPath = "bundleId");
      function ou(t, e, n) {
        (this.name = t), (this.readTime = e), (this.bundledQuery = n);
      }
      (ou.store = "namedQueries"), (ou.keyPath = "name");
      var su,
        au = s(
          s(
            [],
            s(
              s(
                [],
                s(
                  s(
                    [],
                    s(
                      s(
                        [],
                        [
                          Qa.store,
                          Ha.store,
                          za.store,
                          $a.store,
                          Za.store,
                          Ka.store,
                          eu.store,
                          tu.store,
                        ]
                      ),
                      [ru.store]
                    )
                  ),
                  [Ja.store]
                )
              ),
              [nu.store]
            )
          ),
          [iu.store, ou.store]
        ),
        uu =
          "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",
        C =
          ((bu.prototype.addOnCommittedListener = function (t) {
            this.onCommittedListeners.push(t);
          }),
          (bu.prototype.raiseOnCommittedEvent = function () {
            this.onCommittedListeners.forEach(function (t) {
              return t();
            });
          }),
          bu),
        cu = function () {
          var n = this;
          this.promise = new Promise(function (t, e) {
            (n.resolve = t), (n.reject = e);
          });
        },
        hu =
          ((wu.prototype.catch = function (t) {
            return this.next(void 0, t);
          }),
          (wu.prototype.next = function (r, i) {
            var o = this;
            return (
              this.callbackAttached && Qr(),
              (this.callbackAttached = !0),
              this.isDone
                ? this.error
                  ? this.wrapFailure(i, this.error)
                  : this.wrapSuccess(r, this.result)
                : new wu(function (e, n) {
                    (o.nextCallback = function (t) {
                      o.wrapSuccess(r, t).next(e, n);
                    }),
                      (o.catchCallback = function (t) {
                        o.wrapFailure(i, t).next(e, n);
                      });
                  })
            );
          }),
          (wu.prototype.toPromise = function () {
            var n = this;
            return new Promise(function (t, e) {
              n.next(t, e);
            });
          }),
          (wu.prototype.wrapUserFunction = function (t) {
            try {
              var e = t();
              return e instanceof wu ? e : wu.resolve(e);
            } catch (t) {
              return wu.reject(t);
            }
          }),
          (wu.prototype.wrapSuccess = function (t, e) {
            return t
              ? this.wrapUserFunction(function () {
                  return t(e);
                })
              : wu.resolve(e);
          }),
          (wu.prototype.wrapFailure = function (t, e) {
            return t
              ? this.wrapUserFunction(function () {
                  return t(e);
                })
              : wu.reject(e);
          }),
          (wu.resolve = function (n) {
            return new wu(function (t, e) {
              t(n);
            });
          }),
          (wu.reject = function (n) {
            return new wu(function (t, e) {
              e(n);
            });
          }),
          (wu.waitFor = function (t) {
            return new wu(function (e, n) {
              var r = 0,
                i = 0,
                o = !1;
              t.forEach(function (t) {
                ++r,
                  t.next(
                    function () {
                      ++i, o && i === r && e();
                    },
                    function (t) {
                      return n(t);
                    }
                  );
              }),
                (o = !0),
                i === r && e();
            });
          }),
          (wu.or = function (t) {
            for (var n = wu.resolve(!1), e = 0, r = t; e < r.length; e++)
              !(function (e) {
                n = n.next(function (t) {
                  return t ? wu.resolve(t) : e();
                });
              })(r[e]);
            return n;
          }),
          (wu.forEach = function (t, n) {
            var r = this,
              i = [];
            return (
              t.forEach(function (t, e) {
                i.push(n.call(r, t, e));
              }),
              this.waitFor(i)
            );
          }),
          wu),
        lu =
          ((vu.open = function (t, e, n, r) {
            try {
              return new vu(e, t.transaction(r, n));
            } catch (t) {
              throw new pu(e, t);
            }
          }),
          Object.defineProperty(vu.prototype, "dt", {
            get: function () {
              return this.ft.promise;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (vu.prototype.abort = function (t) {
            t && this.ft.reject(t),
              this.aborted ||
                (Br(
                  "SimpleDb",
                  "Aborting transaction:",
                  t ? t.message : "Client-initiated abort"
                ),
                (this.aborted = !0),
                this.transaction.abort());
          }),
          (vu.prototype.store = function (t) {
            t = this.transaction.objectStore(t);
            return new Tu(t);
          }),
          vu),
        fu =
          ((mu.delete = function (t) {
            return (
              Br("SimpleDb", "Removing database:", t),
              _u(window.indexedDB.deleteDatabase(t)).toPromise()
            );
          }),
          (mu.yt = function () {
            if ("undefined" == typeof indexedDB) return !1;
            if (mu.gt()) return !0;
            var t = h(),
              e = mu._t(t),
              n = 0 < e && e < 10,
              e = mu.Et(t),
              e = 0 < e && e < 4.5;
            return !(
              0 < t.indexOf("MSIE ") ||
              0 < t.indexOf("Trident/") ||
              0 < t.indexOf("Edge/") ||
              n ||
              e
            );
          }),
          (mu.gt = function () {
            var t;
            return (
              "undefined" != typeof process &&
              "YES" ===
                (null === (t = process.env) || void 0 === t ? void 0 : t.Tt)
            );
          }),
          (mu.It = function (t, e) {
            return t.store(e);
          }),
          (mu._t = function (t) {
            (t = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i)),
              (t = t ? t[1].split("_").slice(0, 2).join(".") : "-1");
            return Number(t);
          }),
          (mu.Et = function (t) {
            (t = t.match(/Android ([\d.]+)/i)),
              (t = t ? t[1].split(".").slice(0, 2).join(".") : "-1");
            return Number(t);
          }),
          (mu.prototype.At = function (o) {
            return y(this, void 0, void 0, function () {
              var e,
                i = this;
              return g(this, function (t) {
                switch (t.label) {
                  case 0:
                    return this.db
                      ? [3, 2]
                      : (Br("SimpleDb", "Opening database:", this.name),
                        (e = this),
                        [
                          4,
                          new Promise(function (e, n) {
                            var r = indexedDB.open(i.name, i.version);
                            (r.onsuccess = function (t) {
                              t = t.target.result;
                              e(t);
                            }),
                              (r.onblocked = function () {
                                n(
                                  new pu(
                                    o,
                                    "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."
                                  )
                                );
                              }),
                              (r.onerror = function (t) {
                                t = t.target.error;
                                "VersionError" === t.name
                                  ? n(
                                      new Fr(
                                        Mr.FAILED_PRECONDITION,
                                        "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh."
                                      )
                                    )
                                  : n(new pu(o, t));
                              }),
                              (r.onupgradeneeded = function (t) {
                                Br(
                                  "SimpleDb",
                                  'Database "' +
                                    i.name +
                                    '" requires upgrade from version:',
                                  t.oldVersion
                                );
                                var e = t.target.result;
                                i.wt
                                  .Rt(e, r.transaction, t.oldVersion, i.version)
                                  .next(function () {
                                    Br(
                                      "SimpleDb",
                                      "Database upgrade to version " +
                                        i.version +
                                        " complete"
                                    );
                                  });
                              });
                          }),
                        ]);
                  case 1:
                    (e.db = t.sent()), (t.label = 2);
                  case 2:
                    return [
                      2,
                      (this.bt &&
                        (this.db.onversionchange = function (t) {
                          return i.bt(t);
                        }),
                      this.db),
                    ];
                }
              });
            });
          }),
          (mu.prototype.vt = function (e) {
            (this.bt = e),
              this.db &&
                (this.db.onversionchange = function (t) {
                  return e(t);
                });
          }),
          (mu.prototype.runTransaction = function (a, n, u, c) {
            return y(this, void 0, void 0, function () {
              var i, o, s, e;
              return g(this, function (t) {
                switch (t.label) {
                  case 0:
                    (i = "readonly" === n),
                      (o = 0),
                      (e = function () {
                        var e, n, r;
                        return g(this, function (t) {
                          switch (t.label) {
                            case 0:
                              ++o, (t.label = 1);
                            case 1:
                              return t.trys.push([1, 4, , 5]), [4, s.At(a)];
                            case 2:
                              return (
                                (s.db = t.sent()),
                                (e = lu.open(
                                  s.db,
                                  a,
                                  i ? "readonly" : "readwrite",
                                  u
                                )),
                                (n = c(e)
                                  .catch(function (t) {
                                    return e.abort(t), hu.reject(t);
                                  })
                                  .toPromise()),
                                (r = {}),
                                n.catch(function () {}),
                                [4, e.dt]
                              );
                            case 3:
                              return [2, ((r.value = (t.sent(), n)), r)];
                            case 4:
                              return (
                                (n = t.sent()),
                                (r = "FirebaseError" !== n.name && o < 3),
                                Br(
                                  "SimpleDb",
                                  "Transaction failed with error:",
                                  n.message,
                                  "Retrying:",
                                  r
                                ),
                                s.close(),
                                r ? [3, 5] : [2, { value: Promise.reject(n) }]
                              );
                            case 5:
                              return [2];
                          }
                        });
                      }),
                      (s = this),
                      (t.label = 1);
                  case 1:
                    return [5, e()];
                  case 2:
                    if ("object" == typeof (e = t.sent())) return [2, e.value];
                    t.label = 3;
                  case 3:
                    return [3, 1];
                  case 4:
                    return [2];
                }
              });
            });
          }),
          (mu.prototype.close = function () {
            this.db && this.db.close(), (this.db = void 0);
          }),
          mu),
        du =
          (Object.defineProperty(gu.prototype, "isDone", {
            get: function () {
              return this.Vt;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(gu.prototype, "Dt", {
            get: function () {
              return this.St;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(gu.prototype, "cursor", {
            set: function (t) {
              this.Pt = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (gu.prototype.done = function () {
            this.Vt = !0;
          }),
          (gu.prototype.Ct = function (t) {
            this.St = t;
          }),
          (gu.prototype.delete = function () {
            return _u(this.Pt.delete());
          }),
          gu),
        pu = (n(yu, (su = Fr)), yu);
      function yu(t, e) {
        var n = this;
        return (
          ((n =
            su.call(
              this,
              Mr.UNAVAILABLE,
              "IndexedDB transaction '" + t + "' failed: " + e
            ) || this).name = "IndexedDbTransactionError"),
          n
        );
      }
      function gu(t) {
        (this.Pt = t), (this.Vt = !1), (this.St = null);
      }
      function mu(t, e, n) {
        (this.name = t),
          (this.version = e),
          (this.wt = n),
          12.2 === mu._t(h()) &&
            jr(
              "Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround."
            );
      }
      function vu(e, t) {
        var n = this;
        (this.action = e),
          (this.transaction = t),
          (this.aborted = !1),
          (this.ft = new cu()),
          (this.transaction.oncomplete = function () {
            n.ft.resolve();
          }),
          (this.transaction.onabort = function () {
            t.error ? n.ft.reject(new pu(e, t.error)) : n.ft.resolve();
          }),
          (this.transaction.onerror = function (t) {
            t = Au(t.target.error);
            n.ft.reject(new pu(e, t));
          });
      }
      function wu(t) {
        var e = this;
        (this.nextCallback = null),
          (this.catchCallback = null),
          (this.result = void 0),
          (this.error = void 0),
          (this.isDone = !1),
          (this.callbackAttached = !1),
          t(
            function (t) {
              (e.isDone = !0),
                (e.result = t),
                e.nextCallback && e.nextCallback(t);
            },
            function (t) {
              (e.isDone = !0),
                (e.error = t),
                e.catchCallback && e.catchCallback(t);
            }
          );
      }
      function bu() {
        this.onCommittedListeners = [];
      }
      function Eu(t) {
        return "IndexedDbTransactionError" === t.name;
      }
      var Tu =
        ((Iu.prototype.put = function (t, e) {
          t =
            void 0 !== e
              ? (Br("SimpleDb", "PUT", this.store.name, t, e),
                this.store.put(e, t))
              : (Br("SimpleDb", "PUT", this.store.name, "<auto-key>", t),
                this.store.put(t));
          return _u(t);
        }),
        (Iu.prototype.add = function (t) {
          return (
            Br("SimpleDb", "ADD", this.store.name, t, t), _u(this.store.add(t))
          );
        }),
        (Iu.prototype.get = function (e) {
          var n = this;
          return _u(this.store.get(e)).next(function (t) {
            return (
              Br(
                "SimpleDb",
                "GET",
                n.store.name,
                e,
                (t = void 0 === t ? null : t)
              ),
              t
            );
          });
        }),
        (Iu.prototype.delete = function (t) {
          return (
            Br("SimpleDb", "DELETE", this.store.name, t),
            _u(this.store.delete(t))
          );
        }),
        (Iu.prototype.count = function () {
          return (
            Br("SimpleDb", "COUNT", this.store.name), _u(this.store.count())
          );
        }),
        (Iu.prototype.Nt = function (t, e) {
          var e = this.cursor(this.options(t, e)),
            n = [];
          return this.xt(e, function (t, e) {
            n.push(e);
          }).next(function () {
            return n;
          });
        }),
        (Iu.prototype.Ft = function (t, e) {
          Br("SimpleDb", "DELETE ALL", this.store.name);
          e = this.options(t, e);
          e.kt = !1;
          e = this.cursor(e);
          return this.xt(e, function (t, e, n) {
            return n.delete();
          });
        }),
        (Iu.prototype.$t = function (t, e) {
          e ? (n = t) : ((n = {}), (e = t));
          var n = this.cursor(n);
          return this.xt(n, e);
        }),
        (Iu.prototype.Ot = function (r) {
          var t = this.cursor({});
          return new hu(function (n, e) {
            (t.onerror = function (t) {
              t = Au(t.target.error);
              e(t);
            }),
              (t.onsuccess = function (t) {
                var e = t.target.result;
                e
                  ? r(e.primaryKey, e.value).next(function (t) {
                      t ? e.continue() : n();
                    })
                  : n();
              });
          });
        }),
        (Iu.prototype.xt = function (t, i) {
          var o = [];
          return new hu(function (r, e) {
            (t.onerror = function (t) {
              e(t.target.error);
            }),
              (t.onsuccess = function (t) {
                var e,
                  n = t.target.result;
                n
                  ? ((e = new du(n)),
                    (t = i(n.primaryKey, n.value, e)) instanceof hu &&
                      ((t = t.catch(function (t) {
                        return e.done(), hu.reject(t);
                      })),
                      o.push(t)),
                    e.isDone
                      ? r()
                      : null === e.Dt
                      ? n.continue()
                      : n.continue(e.Dt))
                  : r();
              });
          }).next(function () {
            return hu.waitFor(o);
          });
        }),
        (Iu.prototype.options = function (t, e) {
          var n;
          return (
            void 0 !== t && ("string" == typeof t ? (n = t) : (e = t)),
            { index: n, range: e }
          );
        }),
        (Iu.prototype.cursor = function (t) {
          var e = "next";
          if ((t.reverse && (e = "prev"), t.index)) {
            var n = this.store.index(t.index);
            return t.kt
              ? n.openKeyCursor(t.range, e)
              : n.openCursor(t.range, e);
          }
          return this.store.openCursor(t.range, e);
        }),
        Iu);
      function Iu(t) {
        this.store = t;
      }
      function _u(t) {
        return new hu(function (e, n) {
          (t.onsuccess = function (t) {
            t = t.target.result;
            e(t);
          }),
            (t.onerror = function (t) {
              t = Au(t.target.error);
              n(t);
            });
        });
      }
      var Su = !1;
      function Au(t) {
        var e = fu._t(h());
        if (12.2 <= e && e < 13) {
          e =
            "An internal error was encountered in the Indexed Database server";
          if (0 <= t.message.indexOf(e)) {
            var n = new Fr(
              "internal",
              "IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" +
                e +
                "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround."
            );
            return (
              Su ||
                ((Su = !0),
                setTimeout(function () {
                  throw n;
                }, 0)),
              n
            );
          }
        }
        return t;
      }
      var Du,
        Nu = (n(Cu, (Du = C)), Cu);
      function Cu(t, e) {
        var n = this;
        return (
          ((n = Du.call(this) || this).Mt = t), (n.currentSequenceNumber = e), n
        );
      }
      function ku(t, e) {
        return fu.It(t.Mt, e);
      }
      var Ru =
          ((Fu.prototype.applyToRemoteDocument = function (t, e) {
            for (
              var n, r, i, o, s, a, u = e.mutationResults, c = 0;
              c < this.mutations.length;
              c++
            ) {
              var h = this.mutations[c];
              h.key.isEqual(t.key) &&
                ((n = h),
                (r = t),
                (i = u[c]),
                (h = a = s = o = void 0),
                n instanceof ws
                  ? ((s = r),
                    (a = i),
                    (h = (o = n).value.clone()),
                    (o = _s(o.fieldTransforms, s, a.transformResults)),
                    h.setAll(o),
                    s
                      .convertToFoundDocument(a.version, h)
                      .setHasCommittedMutations())
                  : n instanceof bs
                  ? ((o = r),
                    (s = i),
                    ds((a = n).precondition, o)
                      ? ((h = _s(a.fieldTransforms, o, s.transformResults)),
                        (n = o.data).setAll(Is(a)),
                        n.setAll(h),
                        o
                          .convertToFoundDocument(s.version, n)
                          .setHasCommittedMutations())
                      : o.convertToUnknownDocument(s.version))
                  : r
                      .convertToNoDocument(i.version)
                      .setHasCommittedMutations());
            }
          }),
          (Fu.prototype.applyToLocalView = function (t) {
            for (var e = 0, n = this.baseMutations; e < n.length; e++)
              (r = n[e]).key.isEqual(t.key) && ps(r, t, this.localWriteTime);
            for (var r, i = 0, o = this.mutations; i < o.length; i++)
              (r = o[i]).key.isEqual(t.key) && ps(r, t, this.localWriteTime);
          }),
          (Fu.prototype.applyToLocalDocumentSet = function (n) {
            var r = this;
            this.mutations.forEach(function (t) {
              var e = n.get(t.key),
                t = e;
              r.applyToLocalView(t),
                e.isValidDocument() || t.convertToNoDocument(Zr.min());
            });
          }),
          (Fu.prototype.keys = function () {
            return this.mutations.reduce(function (t, e) {
              return t.add(e.key);
            }, $s());
          }),
          (Fu.prototype.isEqual = function (t) {
            return (
              this.batchId === t.batchId &&
              Xr(this.mutations, t.mutations, ys) &&
              Xr(this.baseMutations, t.baseMutations, ys)
            );
          }),
          Fu),
        xu =
          ((Mu.from = function (t, e, n) {
            Hr(t.mutations.length === n.length);
            for (var r = Ys, i = t.mutations, o = 0; o < i.length; o++)
              r = r.insert(i[o].key, n[o].version);
            return new Mu(t, e, n, r);
          }),
          Mu),
        Ou =
          ((Pu.prototype.withSequenceNumber = function (t) {
            return new Pu(
              this.target,
              this.targetId,
              this.purpose,
              t,
              this.snapshotVersion,
              this.lastLimboFreeSnapshotVersion,
              this.resumeToken
            );
          }),
          (Pu.prototype.withResumeToken = function (t, e) {
            return new Pu(
              this.target,
              this.targetId,
              this.purpose,
              this.sequenceNumber,
              e,
              this.lastLimboFreeSnapshotVersion,
              t
            );
          }),
          (Pu.prototype.withLastLimboFreeSnapshotVersion = function (t) {
            return new Pu(
              this.target,
              this.targetId,
              this.purpose,
              this.sequenceNumber,
              this.snapshotVersion,
              t,
              this.resumeToken
            );
          }),
          Pu),
        Lu = function (t) {
          this.Lt = t;
        };
      function Pu(t, e, n, r, i, o, s) {
        void 0 === i && (i = Zr.min()),
          void 0 === o && (o = Zr.min()),
          void 0 === s && (s = li.EMPTY_BYTE_STRING),
          (this.target = t),
          (this.targetId = e),
          (this.purpose = n),
          (this.sequenceNumber = r),
          (this.snapshotVersion = i),
          (this.lastLimboFreeSnapshotVersion = o),
          (this.resumeToken = s);
      }
      function Mu(t, e, n, r) {
        (this.batch = t),
          (this.commitVersion = e),
          (this.mutationResults = n),
          (this.docVersions = r);
      }
      function Fu(t, e, n, r) {
        (this.batchId = t),
          (this.localWriteTime = e),
          (this.baseMutations = n),
          (this.mutations = r);
      }
      function Vu(t, e) {
        if (e.document) return Da(t.Lt, e.document, !!e.hasCommittedMutations);
        if (e.noDocument) {
          var n = Ai.fromSegments(e.noDocument.path),
            r = Ku(e.noDocument.readTime),
            n = Ki.newNoDocument(n, r);
          return e.hasCommittedMutations ? n.setHasCommittedMutations() : n;
        }
        if (e.unknownDocument) {
          (n = Ai.fromSegments(e.unknownDocument.path)),
            (r = Ku(e.unknownDocument.version));
          return Ki.newUnknownDocument(n, r);
        }
        return Qr();
      }
      function Uu(t, e, n) {
        var r = qu(n),
          n = e.key.path.popLast().toArray();
        if (e.isFoundDocument()) {
          var i = {
              name: ba((o = t.Lt), (s = e).key),
              fields: s.data.value.mapValue.fields,
              updateTime: ya(o, s.version.toTimestamp()),
            },
            o = e.hasCommittedMutations;
          return new $a(null, null, i, o, r, n);
        }
        if (e.isNoDocument()) {
          var s = e.key.path.toArray(),
            i = ju(e.version),
            o = e.hasCommittedMutations;
          return new $a(null, new Ya(s, i), null, o, r, n);
        }
        if (e.isUnknownDocument()) {
          (o = e.key.path.toArray()), (e = ju(e.version));
          return new $a(new Xa(o, e), null, null, !0, r, n);
        }
        return Qr();
      }
      function qu(t) {
        t = t.toTimestamp();
        return [t.seconds, t.nanoseconds];
      }
      function Bu(t) {
        t = new Jr(t[0], t[1]);
        return Zr.fromTimestamp(t);
      }
      function ju(t) {
        t = t.toTimestamp();
        return new Ga(t.seconds, t.nanoseconds);
      }
      function Ku(t) {
        t = new Jr(t.seconds, t.nanoseconds);
        return Zr.fromTimestamp(t);
      }
      function Gu(e, t) {
        for (
          var n = (t.baseMutations || []).map(function (t) {
              return Ca(e.Lt, t);
            }),
            r = 0;
          r < t.mutations.length - 1;
          ++r
        ) {
          var i,
            o = t.mutations[r];
          r + 1 < t.mutations.length &&
            void 0 !== t.mutations[r + 1].transform &&
            ((i = t.mutations[r + 1]),
            (o.updateTransforms = i.transform.fieldTransforms),
            t.mutations.splice(r + 1, 1),
            ++r);
        }
        var s = t.mutations.map(function (t) {
            return Ca(e.Lt, t);
          }),
          a = Jr.fromMillis(t.localWriteTimeMs);
        return new Ru(t.batchId, a, n, s);
      }
      function Qu(t) {
        var e = Ku(t.readTime),
          n =
            void 0 !== t.lastLimboFreeSnapshotVersion
              ? Ku(t.lastLimboFreeSnapshotVersion)
              : Zr.min(),
          r =
            void 0 !== t.query.documents
              ? (Hr(1 === (r = t.query).documents.length),
                Mo(Co(Ia(r.documents[0]))))
              : Mo(xa(t.query));
        return new Ou(
          r,
          t.targetId,
          0,
          t.lastListenSequenceNumber,
          e,
          n,
          li.fromBase64String(t.resumeToken)
        );
      }
      function Hu(t, e) {
        var n = ju(e.snapshotVersion),
          r = ju(e.lastLimboFreeSnapshotVersion),
          i = (Yi(e.target) ? ka : Ra)(t.Lt, e.target),
          t = e.resumeToken.toBase64();
        return new Za(e.targetId, zi(e.target), n, t, e.sequenceNumber, r, i);
      }
      function zu(t) {
        var e = xa({ parent: t.parent, structuredQuery: t.structuredQuery });
        return "LAST" === t.limitType ? Fo(e, e.limit, "L") : e;
      }
      var Wu =
        ((Yu.prototype.getBundleMetadata = function (t, e) {
          return Xu(t)
            .get(e)
            .next(function (t) {
              if (t)
                return {
                  id: (t = t).bundleId,
                  createTime: Ku(t.createTime),
                  version: t.version,
                };
            });
        }),
        (Yu.prototype.saveBundleMetadata = function (t, e) {
          return Xu(t).put({
            bundleId: (e = e).id,
            createTime: ju(ma(e.createTime)),
            version: e.version,
          });
        }),
        (Yu.prototype.getNamedQuery = function (t, e) {
          return $u(t)
            .get(e)
            .next(function (t) {
              if (t)
                return {
                  name: (t = t).name,
                  query: zu(t.bundledQuery),
                  readTime: Ku(t.readTime),
                };
            });
        }),
        (Yu.prototype.saveNamedQuery = function (t, e) {
          return $u(t).put({
            name: (e = e).name,
            readTime: ju(ma(e.readTime)),
            bundledQuery: e.bundledQuery,
          });
        }),
        Yu);
      function Yu() {}
      function Xu(t) {
        return ku(t, iu.store);
      }
      function $u(t) {
        return ku(t, ou.store);
      }
      var Ju =
          ((rc.prototype.addToCollectionParentIndex = function (t, e) {
            return this.Bt.add(e), hu.resolve();
          }),
          (rc.prototype.getCollectionParents = function (t, e) {
            return hu.resolve(this.Bt.getEntries(e));
          }),
          rc),
        Zu =
          ((nc.prototype.add = function (t) {
            var e = t.lastSegment(),
              n = t.popLast(),
              r = this.index[e] || new Ks(ai.comparator),
              t = !r.has(n);
            return (this.index[e] = r.add(n)), t;
          }),
          (nc.prototype.has = function (t) {
            var e = t.lastSegment(),
              t = t.popLast(),
              e = this.index[e];
            return e && e.has(t);
          }),
          (nc.prototype.getEntries = function (t) {
            return (this.index[t] || new Ks(ai.comparator)).toArray();
          }),
          nc),
        tc =
          ((ec.prototype.addToCollectionParentIndex = function (t, e) {
            var n = this;
            if (this.qt.has(e)) return hu.resolve();
            var r = e.lastSegment(),
              i = e.popLast();
            t.addOnCommittedListener(function () {
              n.qt.add(e);
            });
            i = { collectionId: r, parent: qa(i) };
            return ic(t).put(i);
          }),
          (ec.prototype.getCollectionParents = function (t, i) {
            var o = [],
              e = IDBKeyRange.bound([i, ""], [$r(i), ""], !1, !0);
            return ic(t)
              .Nt(e)
              .next(function (t) {
                for (var e = 0, n = t; e < n.length; e++) {
                  var r = n[e];
                  if (r.collectionId !== i) break;
                  o.push(ja(r.parent));
                }
                return o;
              });
          }),
          ec);
      function ec() {
        this.qt = new Zu();
      }
      function nc() {
        this.index = {};
      }
      function rc() {
        this.Bt = new Zu();
      }
      function ic(t) {
        return ku(t, nu.store);
      }
      var oc = {
          didRun: !1,
          sequenceNumbersCollected: 0,
          targetsRemoved: 0,
          documentsRemoved: 0,
        },
        sc =
          ((ac.withCacheSize = function (t) {
            return new ac(
              t,
              ac.DEFAULT_COLLECTION_PERCENTILE,
              ac.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT
            );
          }),
          ac);
      function ac(t, e, n) {
        (this.cacheSizeCollectionThreshold = t),
          (this.percentileToCollect = e),
          (this.maximumSequenceNumbersToCollect = n);
      }
      function uc(t, e, n) {
        var r = t.store(Ha.store),
          i = t.store(za.store),
          o = [],
          t = IDBKeyRange.only(n.batchId),
          s = 0,
          t = r.$t({ range: t }, function (t, e, n) {
            return s++, n.delete();
          });
        o.push(
          t.next(function () {
            Hr(1 === s);
          })
        );
        for (var a = [], u = 0, c = n.mutations; u < c.length; u++) {
          var h = c[u],
            l = za.key(e, h.key.path, n.batchId);
          o.push(i.delete(l)), a.push(h.key);
        }
        return hu.waitFor(o).next(function () {
          return a;
        });
      }
      function cc(t) {
        if (!t) return 0;
        var e;
        if (t.document) e = t.document;
        else if (t.unknownDocument) e = t.unknownDocument;
        else {
          if (!t.noDocument) throw Qr();
          e = t.noDocument;
        }
        return JSON.stringify(e).length;
      }
      (sc.DEFAULT_COLLECTION_PERCENTILE = 10),
        (sc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3),
        (sc.DEFAULT = new sc(
          41943040,
          sc.DEFAULT_COLLECTION_PERCENTILE,
          sc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT
        )),
        (sc.DISABLED = new sc(-1, 0, 0));
      var hc =
        ((lc.Qt = function (t, e, n, r) {
          return (
            Hr("" !== t.uid), new lc(t.isAuthenticated() ? t.uid : "", e, n, r)
          );
        }),
        (lc.prototype.checkEmpty = function (t) {
          var r = !0,
            e = IDBKeyRange.bound(
              [this.userId, Number.NEGATIVE_INFINITY],
              [this.userId, Number.POSITIVE_INFINITY]
            );
          return dc(t)
            .$t({ index: Ha.userMutationsIndex, range: e }, function (t, e, n) {
              (r = !1), n.done();
            })
            .next(function () {
              return r;
            });
        }),
        (lc.prototype.addMutationBatch = function (p, y, g, m) {
          var v = this,
            w = pc(p),
            b = dc(p);
          return b.add({}).next(function (t) {
            Hr("number" == typeof t);
            for (
              var e,
                n,
                r,
                i,
                o,
                s = new Ru(t, y, g, m),
                a =
                  ((e = v.R),
                  (n = v.userId),
                  (i = (r = s).baseMutations.map(function (t) {
                    return Na(e.Lt, t);
                  })),
                  (o = r.mutations.map(function (t) {
                    return Na(e.Lt, t);
                  })),
                  new Ha(n, r.batchId, r.localWriteTime.toMillis(), i, o)),
                u = [],
                c = new Ks(function (t, e) {
                  return Yr(t.canonicalString(), e.canonicalString());
                }),
                h = 0,
                l = m;
              h < l.length;
              h++
            ) {
              var f = l[h],
                d = za.key(v.userId, f.key.path, t),
                c = c.add(f.key.path.popLast());
              u.push(b.put(a)), u.push(w.put(d, za.PLACEHOLDER));
            }
            return (
              c.forEach(function (t) {
                u.push(v.Ut.addToCollectionParentIndex(p, t));
              }),
              p.addOnCommittedListener(function () {
                v.Kt[t] = s.keys();
              }),
              hu.waitFor(u).next(function () {
                return s;
              })
            );
          });
        }),
        (lc.prototype.lookupMutationBatch = function (t, e) {
          var n = this;
          return dc(t)
            .get(e)
            .next(function (t) {
              return t ? (Hr(t.userId === n.userId), Gu(n.R, t)) : null;
            });
        }),
        (lc.prototype.jt = function (t, e) {
          var n = this;
          return this.Kt[e]
            ? hu.resolve(this.Kt[e])
            : this.lookupMutationBatch(t, e).next(function (t) {
                if (t) {
                  t = t.keys();
                  return (n.Kt[e] = t);
                }
                return null;
              });
        }),
        (lc.prototype.getNextMutationBatchAfterBatchId = function (t, e) {
          var r = this,
            i = e + 1,
            e = IDBKeyRange.lowerBound([this.userId, i]),
            o = null;
          return dc(t)
            .$t({ index: Ha.userMutationsIndex, range: e }, function (t, e, n) {
              e.userId === r.userId && (Hr(e.batchId >= i), (o = Gu(r.R, e))),
                n.done();
            })
            .next(function () {
              return o;
            });
        }),
        (lc.prototype.getHighestUnacknowledgedBatchId = function (t) {
          var e = IDBKeyRange.upperBound([
              this.userId,
              Number.POSITIVE_INFINITY,
            ]),
            r = -1;
          return dc(t)
            .$t(
              { index: Ha.userMutationsIndex, range: e, reverse: !0 },
              function (t, e, n) {
                (r = e.batchId), n.done();
              }
            )
            .next(function () {
              return r;
            });
        }),
        (lc.prototype.getAllMutationBatches = function (t) {
          var e = this,
            n = IDBKeyRange.bound(
              [this.userId, -1],
              [this.userId, Number.POSITIVE_INFINITY]
            );
          return dc(t)
            .Nt(Ha.userMutationsIndex, n)
            .next(function (t) {
              return t.map(function (t) {
                return Gu(e.R, t);
              });
            });
        }),
        (lc.prototype.getAllMutationBatchesAffectingDocumentKey = function (
          o,
          s
        ) {
          var a = this,
            t = za.prefixForPath(this.userId, s.path),
            t = IDBKeyRange.lowerBound(t),
            u = [];
          return pc(o)
            .$t({ range: t }, function (t, e, n) {
              var r = t[0],
                i = t[1],
                t = t[2],
                i = ja(i);
              if (r === a.userId && s.path.isEqual(i))
                return dc(o)
                  .get(t)
                  .next(function (t) {
                    if (!t) throw Qr();
                    Hr(t.userId === a.userId), u.push(Gu(a.R, t));
                  });
              n.done();
            })
            .next(function () {
              return u;
            });
        }),
        (lc.prototype.getAllMutationBatchesAffectingDocumentKeys = function (
          e,
          t
        ) {
          var s = this,
            a = new Ks(Yr),
            n = [];
          return (
            t.forEach(function (o) {
              var t = za.prefixForPath(s.userId, o.path),
                t = IDBKeyRange.lowerBound(t),
                t = pc(e).$t({ range: t }, function (t, e, n) {
                  var r = t[0],
                    i = t[1],
                    t = t[2],
                    i = ja(i);
                  r === s.userId && o.path.isEqual(i)
                    ? (a = a.add(t))
                    : n.done();
                });
              n.push(t);
            }),
            hu.waitFor(n).next(function () {
              return s.Wt(e, a);
            })
          );
        }),
        (lc.prototype.getAllMutationBatchesAffectingQuery = function (t, e) {
          var o = this,
            s = e.path,
            a = s.length + 1,
            e = za.prefixForPath(this.userId, s),
            e = IDBKeyRange.lowerBound(e),
            u = new Ks(Yr);
          return pc(t)
            .$t({ range: e }, function (t, e, n) {
              var r = t[0],
                i = t[1],
                t = t[2],
                i = ja(i);
              r === o.userId && s.isPrefixOf(i)
                ? i.length === a && (u = u.add(t))
                : n.done();
            })
            .next(function () {
              return o.Wt(t, u);
            });
        }),
        (lc.prototype.Wt = function (e, t) {
          var n = this,
            r = [],
            i = [];
          return (
            t.forEach(function (t) {
              i.push(
                dc(e)
                  .get(t)
                  .next(function (t) {
                    if (null === t) throw Qr();
                    Hr(t.userId === n.userId), r.push(Gu(n.R, t));
                  })
              );
            }),
            hu.waitFor(i).next(function () {
              return r;
            })
          );
        }),
        (lc.prototype.removeMutationBatch = function (e, n) {
          var r = this;
          return uc(e.Mt, this.userId, n).next(function (t) {
            return (
              e.addOnCommittedListener(function () {
                r.Gt(n.batchId);
              }),
              hu.forEach(t, function (t) {
                return r.referenceDelegate.markPotentiallyOrphaned(e, t);
              })
            );
          });
        }),
        (lc.prototype.Gt = function (t) {
          delete this.Kt[t];
        }),
        (lc.prototype.performConsistencyCheck = function (e) {
          var i = this;
          return this.checkEmpty(e).next(function (t) {
            if (!t) return hu.resolve();
            var t = IDBKeyRange.lowerBound(za.prefixForUser(i.userId)),
              r = [];
            return pc(e)
              .$t({ range: t }, function (t, e, n) {
                t[0] === i.userId ? ((t = ja(t[1])), r.push(t)) : n.done();
              })
              .next(function () {
                Hr(0 === r.length);
              });
          });
        }),
        (lc.prototype.containsKey = function (t, e) {
          return fc(t, this.userId, e);
        }),
        (lc.prototype.zt = function (t) {
          var e = this;
          return yc(t)
            .get(this.userId)
            .next(function (t) {
              return t || new Qa(e.userId, -1, "");
            });
        }),
        lc);
      function lc(t, e, n, r) {
        (this.userId = t),
          (this.R = e),
          (this.Ut = n),
          (this.referenceDelegate = r),
          (this.Kt = {});
      }
      function fc(t, o, e) {
        var e = za.prefixForPath(o, e.path),
          s = e[1],
          e = IDBKeyRange.lowerBound(e),
          a = !1;
        return pc(t)
          .$t({ range: e, kt: !0 }, function (t, e, n) {
            var r = t[0],
              i = t[1];
            t[2], r === o && i === s && (a = !0), n.done();
          })
          .next(function () {
            return a;
          });
      }
      function dc(t) {
        return ku(t, Ha.store);
      }
      function pc(t) {
        return ku(t, za.store);
      }
      function yc(t) {
        return ku(t, Qa.store);
      }
      var gc =
          ((wc.prototype.next = function () {
            return (this.Ht += 2), this.Ht;
          }),
          (wc.Jt = function () {
            return new wc(0);
          }),
          (wc.Yt = function () {
            return new wc(-1);
          }),
          wc),
        mc =
          ((vc.prototype.allocateTargetId = function (n) {
            var r = this;
            return this.Xt(n).next(function (t) {
              var e = new gc(t.highestTargetId);
              return (
                (t.highestTargetId = e.next()),
                r.Zt(n, t).next(function () {
                  return t.highestTargetId;
                })
              );
            });
          }),
          (vc.prototype.getLastRemoteSnapshotVersion = function (t) {
            return this.Xt(t).next(function (t) {
              return Zr.fromTimestamp(
                new Jr(
                  t.lastRemoteSnapshotVersion.seconds,
                  t.lastRemoteSnapshotVersion.nanoseconds
                )
              );
            });
          }),
          (vc.prototype.getHighestSequenceNumber = function (t) {
            return this.Xt(t).next(function (t) {
              return t.highestListenSequenceNumber;
            });
          }),
          (vc.prototype.setTargetsMetadata = function (e, n, r) {
            var i = this;
            return this.Xt(e).next(function (t) {
              return (
                (t.highestListenSequenceNumber = n),
                r && (t.lastRemoteSnapshotVersion = r.toTimestamp()),
                n > t.highestListenSequenceNumber &&
                  (t.highestListenSequenceNumber = n),
                i.Zt(e, t)
              );
            });
          }),
          (vc.prototype.addTargetData = function (e, n) {
            var r = this;
            return this.te(e, n).next(function () {
              return r.Xt(e).next(function (t) {
                return (t.targetCount += 1), r.ee(n, t), r.Zt(e, t);
              });
            });
          }),
          (vc.prototype.updateTargetData = function (t, e) {
            return this.te(t, e);
          }),
          (vc.prototype.removeTargetData = function (e, t) {
            var n = this;
            return this.removeMatchingKeysForTargetId(e, t.targetId)
              .next(function () {
                return bc(e).delete(t.targetId);
              })
              .next(function () {
                return n.Xt(e);
              })
              .next(function (t) {
                return Hr(0 < t.targetCount), --t.targetCount, n.Zt(e, t);
              });
          }),
          (vc.prototype.removeTargets = function (n, r, i) {
            var o = this,
              s = 0,
              a = [];
            return bc(n)
              .$t(function (t, e) {
                e = Qu(e);
                e.sequenceNumber <= r &&
                  null === i.get(e.targetId) &&
                  (s++, a.push(o.removeTargetData(n, e)));
              })
              .next(function () {
                return hu.waitFor(a);
              })
              .next(function () {
                return s;
              });
          }),
          (vc.prototype.forEachTarget = function (t, n) {
            return bc(t).$t(function (t, e) {
              e = Qu(e);
              n(e);
            });
          }),
          (vc.prototype.Xt = function (t) {
            return Ec(t)
              .get(eu.key)
              .next(function (t) {
                return Hr(null !== t), t;
              });
          }),
          (vc.prototype.Zt = function (t, e) {
            return Ec(t).put(eu.key, e);
          }),
          (vc.prototype.te = function (t, e) {
            return bc(t).put(Hu(this.R, e));
          }),
          (vc.prototype.ee = function (t, e) {
            var n = !1;
            return (
              t.targetId > e.highestTargetId &&
                ((e.highestTargetId = t.targetId), (n = !0)),
              t.sequenceNumber > e.highestListenSequenceNumber &&
                ((e.highestListenSequenceNumber = t.sequenceNumber), (n = !0)),
              n
            );
          }),
          (vc.prototype.getTargetCount = function (t) {
            return this.Xt(t).next(function (t) {
              return t.targetCount;
            });
          }),
          (vc.prototype.getTargetData = function (t, r) {
            var e = zi(r),
              e = IDBKeyRange.bound(
                [e, Number.NEGATIVE_INFINITY],
                [e, Number.POSITIVE_INFINITY]
              ),
              i = null;
            return bc(t)
              .$t(
                { range: e, index: Za.queryTargetsIndexName },
                function (t, e, n) {
                  e = Qu(e);
                  Wi(r, e.target) && ((i = e), n.done());
                }
              )
              .next(function () {
                return i;
              });
          }),
          (vc.prototype.addMatchingKeys = function (n, t, r) {
            var i = this,
              o = [],
              s = Tc(n);
            return (
              t.forEach(function (t) {
                var e = qa(t.path);
                o.push(s.put(new tu(r, e))),
                  o.push(i.referenceDelegate.addReference(n, r, t));
              }),
              hu.waitFor(o)
            );
          }),
          (vc.prototype.removeMatchingKeys = function (n, t, r) {
            var i = this,
              o = Tc(n);
            return hu.forEach(t, function (t) {
              var e = qa(t.path);
              return hu.waitFor([
                o.delete([r, e]),
                i.referenceDelegate.removeReference(n, r, t),
              ]);
            });
          }),
          (vc.prototype.removeMatchingKeysForTargetId = function (t, e) {
            (t = Tc(t)), (e = IDBKeyRange.bound([e], [e + 1], !1, !0));
            return t.delete(e);
          }),
          (vc.prototype.getMatchingKeysForTargetId = function (t, e) {
            var e = IDBKeyRange.bound([e], [e + 1], !1, !0),
              t = Tc(t),
              r = $s();
            return t
              .$t({ range: e, kt: !0 }, function (t, e, n) {
                (t = ja(t[1])), (t = new Ai(t));
                r = r.add(t);
              })
              .next(function () {
                return r;
              });
          }),
          (vc.prototype.containsKey = function (t, e) {
            var e = qa(e.path),
              e = IDBKeyRange.bound([e], [$r(e)], !1, !0),
              i = 0;
            return Tc(t)
              .$t(
                { index: tu.documentTargetsIndex, kt: !0, range: e },
                function (t, e, n) {
                  var r = t[0];
                  t[1], 0 !== r && (i++, n.done());
                }
              )
              .next(function () {
                return 0 < i;
              });
          }),
          (vc.prototype.lt = function (t, e) {
            return bc(t)
              .get(e)
              .next(function (t) {
                return t ? Qu(t) : null;
              });
          }),
          vc);
      function vc(t, e) {
        (this.referenceDelegate = t), (this.R = e);
      }
      function wc(t) {
        this.Ht = t;
      }
      function bc(t) {
        return ku(t, Za.store);
      }
      function Ec(t) {
        return ku(t, eu.store);
      }
      function Tc(t) {
        return ku(t, tu.store);
      }
      function Ic(e) {
        return y(this, void 0, void 0, function () {
          return g(this, function (t) {
            if (e.code !== Mr.FAILED_PRECONDITION || e.message !== uu) throw e;
            return Br("LocalStore", "Unexpectedly lost primary lease"), [2];
          });
        });
      }
      function _c(t, e) {
        var n = t[0],
          r = t[1],
          t = e[0],
          e = e[1],
          t = Yr(n, t);
        return 0 === t ? Yr(r, e) : t;
      }
      var Sc =
          ((xc.prototype.ie = function () {
            return ++this.se;
          }),
          (xc.prototype.re = function (t) {
            var e = [t, this.ie()];
            this.buffer.size < this.ne
              ? (this.buffer = this.buffer.add(e))
              : _c(e, (t = this.buffer.last())) < 0 &&
                (this.buffer = this.buffer.delete(t).add(e));
          }),
          Object.defineProperty(xc.prototype, "maxValue", {
            get: function () {
              return this.buffer.last()[0];
            },
            enumerable: !1,
            configurable: !0,
          }),
          xc),
        Ac =
          ((Rc.prototype.start = function (t) {
            -1 !== this.garbageCollector.params.cacheSizeCollectionThreshold &&
              this.ue(t);
          }),
          (Rc.prototype.stop = function () {
            this.ce && (this.ce.cancel(), (this.ce = null));
          }),
          Object.defineProperty(Rc.prototype, "started", {
            get: function () {
              return null !== this.ce;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (Rc.prototype.ue = function (n) {
            var t = this,
              e = this.oe ? 3e5 : 6e4;
            Br(
              "LruGarbageCollector",
              "Garbage collection scheduled in " + e + "ms"
            ),
              (this.ce = this.asyncQueue.enqueueAfterDelay(
                "lru_garbage_collection",
                e,
                function () {
                  return y(t, void 0, void 0, function () {
                    var e;
                    return g(this, function (t) {
                      switch (t.label) {
                        case 0:
                          (this.ce = null), (this.oe = !0), (t.label = 1);
                        case 1:
                          return (
                            t.trys.push([1, 3, , 7]),
                            [4, n.collectGarbage(this.garbageCollector)]
                          );
                        case 2:
                          return t.sent(), [3, 7];
                        case 3:
                          return Eu((e = t.sent()))
                            ? (Br(
                                "LruGarbageCollector",
                                "Ignoring IndexedDB error during garbage collection: ",
                                e
                              ),
                              [3, 6])
                            : [3, 4];
                        case 4:
                          return [4, Ic(e)];
                        case 5:
                          t.sent(), (t.label = 6);
                        case 6:
                          return [3, 7];
                        case 7:
                          return [4, this.ue(n)];
                        case 8:
                          return t.sent(), [2];
                      }
                    });
                  });
                }
              ));
          }),
          Rc),
        Dc =
          ((kc.prototype.calculateTargetCount = function (t, e) {
            return this.ae.he(t).next(function (t) {
              return Math.floor((e / 100) * t);
            });
          }),
          (kc.prototype.nthSequenceNumber = function (t, e) {
            var n = this;
            if (0 === e) return hu.resolve(Or.o);
            var r = new Sc(e);
            return this.ae
              .forEachTarget(t, function (t) {
                return r.re(t.sequenceNumber);
              })
              .next(function () {
                return n.ae.le(t, function (t) {
                  return r.re(t);
                });
              })
              .next(function () {
                return r.maxValue;
              });
          }),
          (kc.prototype.removeTargets = function (t, e, n) {
            return this.ae.removeTargets(t, e, n);
          }),
          (kc.prototype.removeOrphanedDocuments = function (t, e) {
            return this.ae.removeOrphanedDocuments(t, e);
          }),
          (kc.prototype.collect = function (e, n) {
            var r = this;
            return -1 === this.params.cacheSizeCollectionThreshold
              ? (Br(
                  "LruGarbageCollector",
                  "Garbage collection skipped; disabled"
                ),
                hu.resolve(oc))
              : this.getCacheSize(e).next(function (t) {
                  return t < r.params.cacheSizeCollectionThreshold
                    ? (Br(
                        "LruGarbageCollector",
                        "Garbage collection skipped; Cache size " +
                          t +
                          " is lower than threshold " +
                          r.params.cacheSizeCollectionThreshold
                      ),
                      oc)
                    : r.fe(e, n);
                });
          }),
          (kc.prototype.getCacheSize = function (t) {
            return this.ae.getCacheSize(t);
          }),
          (kc.prototype.fe = function (e, n) {
            var r,
              i,
              o,
              s,
              a,
              u,
              c,
              h = this,
              l = Date.now();
            return this.calculateTargetCount(e, this.params.percentileToCollect)
              .next(function (t) {
                return (
                  (i =
                    t > h.params.maximumSequenceNumbersToCollect
                      ? (Br(
                          "LruGarbageCollector",
                          "Capping sequence numbers to collect down to the maximum of " +
                            h.params.maximumSequenceNumbersToCollect +
                            " from " +
                            t
                        ),
                        h.params.maximumSequenceNumbersToCollect)
                      : t),
                  (s = Date.now()),
                  h.nthSequenceNumber(e, i)
                );
              })
              .next(function (t) {
                return (r = t), (a = Date.now()), h.removeTargets(e, r, n);
              })
              .next(function (t) {
                return (
                  (o = t), (u = Date.now()), h.removeOrphanedDocuments(e, r)
                );
              })
              .next(function (t) {
                return (
                  (c = Date.now()),
                  qr() <= m.DEBUG &&
                    Br(
                      "LruGarbageCollector",
                      "LRU Garbage Collection\n\tCounted targets in " +
                        (s - l) +
                        "ms\n\tDetermined least recently used " +
                        i +
                        " in " +
                        (a - s) +
                        "ms\n\tRemoved " +
                        o +
                        " targets in " +
                        (u - a) +
                        "ms\n\tRemoved " +
                        t +
                        " documents in " +
                        (c - u) +
                        "ms\nTotal Duration: " +
                        (c - l) +
                        "ms"
                    ),
                  hu.resolve({
                    didRun: !0,
                    sequenceNumbersCollected: i,
                    targetsRemoved: o,
                    documentsRemoved: t,
                  })
                );
              });
          }),
          kc),
        Nc =
          ((Cc.prototype.he = function (t) {
            var n = this.de(t);
            return this.db
              .getTargetCache()
              .getTargetCount(t)
              .next(function (e) {
                return n.next(function (t) {
                  return e + t;
                });
              });
          }),
          (Cc.prototype.de = function (t) {
            var e = 0;
            return this.le(t, function (t) {
              e++;
            }).next(function () {
              return e;
            });
          }),
          (Cc.prototype.forEachTarget = function (t, e) {
            return this.db.getTargetCache().forEachTarget(t, e);
          }),
          (Cc.prototype.le = function (t, n) {
            return this.we(t, function (t, e) {
              return n(e);
            });
          }),
          (Cc.prototype.addReference = function (t, e, n) {
            return Oc(t, n);
          }),
          (Cc.prototype.removeReference = function (t, e, n) {
            return Oc(t, n);
          }),
          (Cc.prototype.removeTargets = function (t, e, n) {
            return this.db.getTargetCache().removeTargets(t, e, n);
          }),
          (Cc.prototype.markPotentiallyOrphaned = Oc),
          (Cc.prototype._e = function (t, e) {
            return (
              (r = e),
              (i = !1),
              yc((n = t))
                .Ot(function (t) {
                  return fc(n, t, r).next(function (t) {
                    return t && (i = !0), hu.resolve(!t);
                  });
                })
                .next(function () {
                  return i;
                })
            );
            var n, r, i;
          }),
          (Cc.prototype.removeOrphanedDocuments = function (n, r) {
            var i = this,
              o = this.db.getRemoteDocumentCache().newChangeBuffer(),
              s = [],
              a = 0;
            return this.we(n, function (e, t) {
              t <= r &&
                ((t = i._e(n, e).next(function (t) {
                  if (!t)
                    return (
                      a++,
                      o.getEntry(n, e).next(function () {
                        return o.removeEntry(e), Tc(n).delete([0, qa(e.path)]);
                      })
                    );
                })),
                s.push(t));
            })
              .next(function () {
                return hu.waitFor(s);
              })
              .next(function () {
                return o.apply(n);
              })
              .next(function () {
                return a;
              });
          }),
          (Cc.prototype.removeTarget = function (t, e) {
            e = e.withSequenceNumber(t.currentSequenceNumber);
            return this.db.getTargetCache().updateTargetData(t, e);
          }),
          (Cc.prototype.updateLimboDocument = Oc),
          (Cc.prototype.we = function (t, r) {
            var i,
              t = Tc(t),
              o = Or.o;
            return t
              .$t({ index: tu.documentTargetsIndex }, function (t, e) {
                var n = t[0];
                t[1];
                (t = e.path), (e = e.sequenceNumber);
                0 === n
                  ? (o !== Or.o && r(new Ai(ja(i)), o), (o = e), (i = t))
                  : (o = Or.o);
              })
              .next(function () {
                o !== Or.o && r(new Ai(ja(i)), o);
              });
          }),
          (Cc.prototype.getCacheSize = function (t) {
            return this.db.getRemoteDocumentCache().getSize(t);
          }),
          Cc);
      function Cc(t, e) {
        (this.db = t), (this.garbageCollector = new Dc(this, e));
      }
      function kc(t, e) {
        (this.ae = t), (this.params = e);
      }
      function Rc(t, e) {
        (this.garbageCollector = t),
          (this.asyncQueue = e),
          (this.oe = !1),
          (this.ce = null);
      }
      function xc(t) {
        (this.ne = t), (this.buffer = new Ks(_c)), (this.se = 0);
      }
      function Oc(t, e) {
        return Tc(t).put(
          ((t = t.currentSequenceNumber), new tu(0, qa(e.path), t))
        );
      }
      var Lc,
        Pc =
          ((Bc.prototype.get = function (t) {
            var e = this.mapKeyFn(t),
              e = this.inner[e];
            if (void 0 !== e)
              for (var n = 0, r = e; n < r.length; n++) {
                var i = r[n],
                  o = i[0],
                  i = i[1];
                if (this.equalsFn(o, t)) return i;
              }
          }),
          (Bc.prototype.has = function (t) {
            return void 0 !== this.get(t);
          }),
          (Bc.prototype.set = function (t, e) {
            var n = this.mapKeyFn(t),
              r = this.inner[n];
            if (void 0 !== r) {
              for (var i = 0; i < r.length; i++)
                if (this.equalsFn(r[i][0], t)) return void (r[i] = [t, e]);
              r.push([t, e]);
            } else this.inner[n] = [[t, e]];
          }),
          (Bc.prototype.delete = function (t) {
            var e = this.mapKeyFn(t),
              n = this.inner[e];
            if (void 0 === n) return !1;
            for (var r = 0; r < n.length; r++)
              if (this.equalsFn(n[r][0], t))
                return (
                  1 === n.length ? delete this.inner[e] : n.splice(r, 1), !0
                );
            return !1;
          }),
          (Bc.prototype.forEach = function (s) {
            ri(this.inner, function (t, e) {
              for (var n = 0, r = e; n < r.length; n++) {
                var i = r[n],
                  o = i[0],
                  i = i[1];
                s(o, i);
              }
            });
          }),
          (Bc.prototype.isEmpty = function () {
            return ii(this.inner);
          }),
          Bc),
        _ =
          ((qc.prototype.getReadTime = function (t) {
            t = this.changes.get(t);
            return t ? t.readTime : Zr.min();
          }),
          (qc.prototype.addEntry = function (t, e) {
            this.assertNotApplied(),
              this.changes.set(t.key, { document: t, readTime: e });
          }),
          (qc.prototype.removeEntry = function (t, e) {
            void 0 === e && (e = null),
              this.assertNotApplied(),
              this.changes.set(t, {
                document: Ki.newInvalidDocument(t),
                readTime: e,
              });
          }),
          (qc.prototype.getEntry = function (t, e) {
            this.assertNotApplied();
            var n = this.changes.get(e);
            return void 0 !== n
              ? hu.resolve(n.document)
              : this.getFromCache(t, e);
          }),
          (qc.prototype.getEntries = function (t, e) {
            return this.getAllFromCache(t, e);
          }),
          (qc.prototype.apply = function (t) {
            return (
              this.assertNotApplied(),
              (this.changesApplied = !0),
              this.applyChanges(t)
            );
          }),
          (qc.prototype.assertNotApplied = function () {}),
          qc),
        Mc =
          ((Uc.prototype.addEntry = function (t, e, n) {
            return Kc(t).put(Gc(e), n);
          }),
          (Uc.prototype.removeEntry = function (t, e) {
            (t = Kc(t)), (e = Gc(e));
            return t.delete(e);
          }),
          (Uc.prototype.updateMetadata = function (e, n) {
            var r = this;
            return this.getMetadata(e).next(function (t) {
              return (t.byteSize += n), r.me(e, t);
            });
          }),
          (Uc.prototype.getEntry = function (t, e) {
            var n = this;
            return Kc(t)
              .get(Gc(e))
              .next(function (t) {
                return n.ye(e, t);
              });
          }),
          (Uc.prototype.ge = function (t, e) {
            var n = this;
            return Kc(t)
              .get(Gc(e))
              .next(function (t) {
                return { document: n.ye(e, t), size: cc(t) };
              });
          }),
          (Uc.prototype.getEntries = function (t, e) {
            var n = this,
              r = Qs;
            return this.pe(t, e, function (t, e) {
              e = n.ye(t, e);
              r = r.insert(t, e);
            }).next(function () {
              return r;
            });
          }),
          (Uc.prototype.Ee = function (t, e) {
            var r = this,
              i = Qs,
              o = new Ms(Ai.comparator);
            return this.pe(t, e, function (t, e) {
              var n = r.ye(t, e);
              (i = i.insert(t, n)), (o = o.insert(t, cc(e)));
            }).next(function () {
              return { documents: i, Te: o };
            });
          }),
          (Uc.prototype.pe = function (t, e, i) {
            if (e.isEmpty()) return hu.resolve();
            var n = IDBKeyRange.bound(
                e.first().path.toArray(),
                e.last().path.toArray()
              ),
              o = e.getIterator(),
              s = o.getNext();
            return Kc(t)
              .$t({ range: n }, function (t, e, n) {
                for (var r = Ai.fromSegments(t); s && Ai.comparator(s, r) < 0; )
                  i(s, null), (s = o.getNext());
                s &&
                  s.isEqual(r) &&
                  (i(s, e), (s = o.hasNext() ? o.getNext() : null)),
                  s ? n.Ct(s.path.toArray()) : n.done();
              })
              .next(function () {
                for (; s; ) i(s, null), (s = o.hasNext() ? o.getNext() : null);
              });
          }),
          (Uc.prototype.getDocumentsMatchingQuery = function (t, r, e) {
            var n,
              i = this,
              o = Qs,
              s = r.path.length + 1,
              a = {};
            return (
              e.isEqual(Zr.min())
                ? ((n = r.path.toArray()),
                  (a.range = IDBKeyRange.lowerBound(n)))
                : ((n = r.path.toArray()),
                  (e = qu(e)),
                  (a.range = IDBKeyRange.lowerBound([n, e], !0)),
                  (a.index = $a.collectionReadTimeIndex)),
              Kc(t)
                .$t(a, function (t, e, n) {
                  t.length === s &&
                    ((e = Vu(i.R, e)),
                    r.path.isPrefixOf(e.key.path)
                      ? Bo(r, e) && (o = o.insert(e.key, e))
                      : n.done());
                })
                .next(function () {
                  return o;
                })
            );
          }),
          (Uc.prototype.newChangeBuffer = function (t) {
            return new Fc(this, !!t && t.trackRemovals);
          }),
          (Uc.prototype.getSize = function (t) {
            return this.getMetadata(t).next(function (t) {
              return t.byteSize;
            });
          }),
          (Uc.prototype.getMetadata = function (t) {
            return jc(t)
              .get(Ja.key)
              .next(function (t) {
                return Hr(!!t), t;
              });
          }),
          (Uc.prototype.me = function (t, e) {
            return jc(t).put(Ja.key, e);
          }),
          (Uc.prototype.ye = function (t, e) {
            if (e) {
              e = Vu(this.R, e);
              if (!e.isNoDocument() || !e.version.isEqual(Zr.min())) return e;
            }
            return Ki.newInvalidDocument(t);
          }),
          Uc),
        Fc =
          (n(Vc, (Lc = _)),
          (Vc.prototype.applyChanges = function (i) {
            var o = this,
              s = [],
              a = 0,
              u = new Ks(function (t, e) {
                return Yr(t.canonicalString(), e.canonicalString());
              });
            return (
              this.changes.forEach(function (t, e) {
                var n,
                  r = o.Ae.get(t);
                e.document.isValidDocument()
                  ? ((n = Uu(o.Ie.R, e.document, o.getReadTime(t))),
                    (u = u.add(t.path.popLast())),
                    (e = cc(n)),
                    (a += e - r),
                    s.push(o.Ie.addEntry(i, t, n)))
                  : ((a -= r),
                    o.trackRemovals
                      ? ((r = Uu(
                          o.Ie.R,
                          Ki.newNoDocument(t, Zr.min()),
                          o.getReadTime(t)
                        )),
                        s.push(o.Ie.addEntry(i, t, r)))
                      : s.push(o.Ie.removeEntry(i, t)));
              }),
              u.forEach(function (t) {
                s.push(o.Ie.Ut.addToCollectionParentIndex(i, t));
              }),
              s.push(this.Ie.updateMetadata(i, a)),
              hu.waitFor(s)
            );
          }),
          (Vc.prototype.getFromCache = function (t, e) {
            var n = this;
            return this.Ie.ge(t, e).next(function (t) {
              return n.Ae.set(e, t.size), t.document;
            });
          }),
          (Vc.prototype.getAllFromCache = function (t, e) {
            var n = this;
            return this.Ie.Ee(t, e).next(function (t) {
              var e = t.documents;
              return (
                t.Te.forEach(function (t, e) {
                  n.Ae.set(t, e);
                }),
                e
              );
            });
          }),
          Vc);
      function Vc(t, e) {
        var n = this;
        return (
          ((n = Lc.call(this) || this).Ie = t),
          (n.trackRemovals = e),
          (n.Ae = new Pc(
            function (t) {
              return t.toString();
            },
            function (t, e) {
              return t.isEqual(e);
            }
          )),
          n
        );
      }
      function Uc(t, e) {
        (this.R = t), (this.Ut = e);
      }
      function qc() {
        (this.changes = new Pc(
          function (t) {
            return t.toString();
          },
          function (t, e) {
            return t.isEqual(e);
          }
        )),
          (this.changesApplied = !1);
      }
      function Bc(t, e) {
        (this.mapKeyFn = t), (this.equalsFn = e), (this.inner = {});
      }
      function jc(t) {
        return ku(t, Ja.store);
      }
      function Kc(t) {
        return ku(t, $a.store);
      }
      function Gc(t) {
        return t.path.toArray();
      }
      var Qc =
        ((Hc.prototype.Rt = function (e, n, t, r) {
          var i = this;
          Hr(t < r && 0 <= t && r <= 11);
          var o = new lu("createOrUpgrade", n);
          t < 1 &&
            1 <= r &&
            (e.createObjectStore(Ka.store),
            (s = e).createObjectStore(Qa.store, { keyPath: Qa.keyPath }),
            s
              .createObjectStore(Ha.store, {
                keyPath: Ha.keyPath,
                autoIncrement: !0,
              })
              .createIndex(Ha.userMutationsIndex, Ha.userMutationsKeyPath, {
                unique: !0,
              }),
            s.createObjectStore(za.store),
            zc(e),
            e.createObjectStore($a.store));
          var s,
            a = hu.resolve();
          return (
            t < 3 &&
              3 <= r &&
              (0 !== t &&
                ((s = e).deleteObjectStore(tu.store),
                s.deleteObjectStore(Za.store),
                s.deleteObjectStore(eu.store),
                zc(e)),
              (a = a.next(function () {
                return (
                  (t = o.store(eu.store)),
                  (e = new eu(0, 0, Zr.min().toTimestamp(), 0)),
                  t.put(eu.key, e)
                );
                var t, e;
              }))),
            t < 4 &&
              4 <= r &&
              (a = (a =
                0 !== t
                  ? a.next(function () {
                      return (
                        (n = e),
                        (r = o)
                          .store(Ha.store)
                          .Nt()
                          .next(function (t) {
                            n.deleteObjectStore(Ha.store),
                              n
                                .createObjectStore(Ha.store, {
                                  keyPath: Ha.keyPath,
                                  autoIncrement: !0,
                                })
                                .createIndex(
                                  Ha.userMutationsIndex,
                                  Ha.userMutationsKeyPath,
                                  { unique: !0 }
                                );
                            var e = r.store(Ha.store),
                              t = t.map(function (t) {
                                return e.put(t);
                              });
                            return hu.waitFor(t);
                          })
                      );
                      var n, r;
                    })
                  : a).next(function () {
                e.createObjectStore(ru.store, { keyPath: ru.keyPath });
              })),
            t < 5 &&
              5 <= r &&
              (a = a.next(function () {
                return i.Re(o);
              })),
            t < 6 &&
              6 <= r &&
              (a = a.next(function () {
                return e.createObjectStore(Ja.store), i.be(o);
              })),
            t < 7 &&
              7 <= r &&
              (a = a.next(function () {
                return i.ve(o);
              })),
            t < 8 &&
              8 <= r &&
              (a = a.next(function () {
                return i.Pe(e, o);
              })),
            t < 9 &&
              9 <= r &&
              (a = a.next(function () {
                var t;
                (t = e).objectStoreNames.contains("remoteDocumentChanges") &&
                  t.deleteObjectStore("remoteDocumentChanges"),
                  (t = n.objectStore($a.store)).createIndex(
                    $a.readTimeIndex,
                    $a.readTimeIndexPath,
                    { unique: !1 }
                  ),
                  t.createIndex(
                    $a.collectionReadTimeIndex,
                    $a.collectionReadTimeIndexPath,
                    { unique: !1 }
                  );
              })),
            t < 10 &&
              10 <= r &&
              (a = a.next(function () {
                return i.Ve(o);
              })),
            (a =
              t < 11 && 11 <= r
                ? a.next(function () {
                    e.createObjectStore(iu.store, { keyPath: iu.keyPath }),
                      e.createObjectStore(ou.store, { keyPath: ou.keyPath });
                  })
                : a)
          );
        }),
        (Hc.prototype.be = function (e) {
          var n = 0;
          return e
            .store($a.store)
            .$t(function (t, e) {
              n += cc(e);
            })
            .next(function () {
              var t = new Ja(n);
              return e.store(Ja.store).put(Ja.key, t);
            });
        }),
        (Hc.prototype.Re = function (n) {
          var r = this,
            t = n.store(Qa.store),
            i = n.store(Ha.store);
          return t.Nt().next(function (t) {
            return hu.forEach(t, function (e) {
              var t = IDBKeyRange.bound(
                [e.userId, -1],
                [e.userId, e.lastAcknowledgedBatchId]
              );
              return i.Nt(Ha.userMutationsIndex, t).next(function (t) {
                return hu.forEach(t, function (t) {
                  Hr(t.userId === e.userId);
                  t = Gu(r.R, t);
                  return uc(n, e.userId, t).next(function () {});
                });
              });
            });
          });
        }),
        (Hc.prototype.ve = function (t) {
          var o = t.store(tu.store),
            e = t.store($a.store);
          return t
            .store(eu.store)
            .get(eu.key)
            .next(function (r) {
              var i = [];
              return e
                .$t(function (t, e) {
                  var n = new ai(t),
                    t = [0, qa(n)];
                  i.push(
                    o.get(t).next(function (t) {
                      return t
                        ? hu.resolve()
                        : o.put(
                            new tu(0, qa(n), r.highestListenSequenceNumber)
                          );
                    })
                  );
                })
                .next(function () {
                  return hu.waitFor(i);
                });
            });
        }),
        (Hc.prototype.Pe = function (t, e) {
          t.createObjectStore(nu.store, { keyPath: nu.keyPath });
          function r(t) {
            if (i.add(t)) {
              var e = t.lastSegment(),
                t = t.popLast();
              return n.put({ collectionId: e, parent: qa(t) });
            }
          }
          var n = e.store(nu.store),
            i = new Zu();
          return e
            .store($a.store)
            .$t({ kt: !0 }, function (t, e) {
              t = new ai(t);
              return r(t.popLast());
            })
            .next(function () {
              return e.store(za.store).$t({ kt: !0 }, function (t, e) {
                t[0];
                var n = t[1];
                t[2];
                n = ja(n);
                return r(n.popLast());
              });
            });
        }),
        (Hc.prototype.Ve = function (t) {
          var n = this,
            r = t.store(Za.store);
          return r.$t(function (t, e) {
            (e = Qu(e)), (e = Hu(n.R, e));
            return r.put(e);
          });
        }),
        Hc);
      function Hc(t) {
        this.R = t;
      }
      function zc(t) {
        t
          .createObjectStore(tu.store, { keyPath: tu.keyPath })
          .createIndex(tu.documentTargetsIndex, tu.documentTargetsKeyPath, {
            unique: !0,
          }),
          t
            .createObjectStore(Za.store, { keyPath: Za.keyPath })
            .createIndex(Za.queryTargetsIndexName, Za.queryTargetsKeyPath, {
              unique: !0,
            }),
          t.createObjectStore(eu.store);
      }
      var Wc =
          "Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",
        Yc =
          ((Xc.prototype.start = function () {
            var e = this;
            return this.je()
              .then(function () {
                if (!e.isPrimary && !e.allowTabSynchronization)
                  throw new Fr(Mr.FAILED_PRECONDITION, Wc);
                return (
                  e.We(),
                  e.Ge(),
                  e.ze(),
                  e.runTransaction(
                    "getHighestListenSequenceNumber",
                    "readonly",
                    function (t) {
                      return e.qe.getHighestSequenceNumber(t);
                    }
                  )
                );
              })
              .then(function (t) {
                e.Ne = new Or(t, e.De);
              })
              .then(function () {
                e.xe = !0;
              })
              .catch(function (t) {
                return e.Be && e.Be.close(), Promise.reject(t);
              });
          }),
          (Xc.prototype.He = function (n) {
            var t = this;
            return (
              (this.Me = function (e) {
                return y(t, void 0, void 0, function () {
                  return g(this, function (t) {
                    return this.started ? [2, n(e)] : [2];
                  });
                });
              }),
              n(this.isPrimary)
            );
          }),
          (Xc.prototype.setDatabaseDeletedListener = function (n) {
            var t = this;
            this.Be.vt(function (e) {
              return y(t, void 0, void 0, function () {
                return g(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return null === e.newVersion ? [4, n()] : [3, 2];
                    case 1:
                      t.sent(), (t.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            });
          }),
          (Xc.prototype.setNetworkEnabled = function (t) {
            var e = this;
            this.networkEnabled !== t &&
              ((this.networkEnabled = t),
              this.Se.enqueueAndForget(function () {
                return y(e, void 0, void 0, function () {
                  return g(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return this.started ? [4, this.je()] : [3, 2];
                      case 1:
                        t.sent(), (t.label = 2);
                      case 2:
                        return [2];
                    }
                  });
                });
              }));
          }),
          (Xc.prototype.je = function () {
            var n = this;
            return this.runTransaction(
              "updateClientMetadataAndTryBecomePrimary",
              "readwrite",
              function (e) {
                return Jc(e)
                  .put(
                    new ru(
                      n.clientId,
                      Date.now(),
                      n.networkEnabled,
                      n.inForeground
                    )
                  )
                  .next(function () {
                    if (n.isPrimary)
                      return n.Je(e).next(function (t) {
                        t ||
                          ((n.isPrimary = !1),
                          n.Se.enqueueRetryable(function () {
                            return n.Me(!1);
                          }));
                      });
                  })
                  .next(function () {
                    return n.Ye(e);
                  })
                  .next(function (t) {
                    return n.isPrimary && !t
                      ? n.Xe(e).next(function () {
                          return !1;
                        })
                      : !!t &&
                          n.Ze(e).next(function () {
                            return !0;
                          });
                  });
              }
            )
              .catch(function (t) {
                if (Eu(t))
                  return (
                    Br(
                      "IndexedDbPersistence",
                      "Failed to extend owner lease: ",
                      t
                    ),
                    n.isPrimary
                  );
                if (!n.allowTabSynchronization) throw t;
                return (
                  Br(
                    "IndexedDbPersistence",
                    "Releasing owner lease after error during lease refresh",
                    t
                  ),
                  !1
                );
              })
              .then(function (t) {
                n.isPrimary !== t &&
                  n.Se.enqueueRetryable(function () {
                    return n.Me(t);
                  }),
                  (n.isPrimary = t);
              });
          }),
          (Xc.prototype.Je = function (t) {
            var e = this;
            return $c(t)
              .get(Ka.key)
              .next(function (t) {
                return hu.resolve(e.tn(t));
              });
          }),
          (Xc.prototype.en = function (t) {
            return Jc(t).delete(this.clientId);
          }),
          (Xc.prototype.nn = function () {
            return y(this, void 0, void 0, function () {
              var e,
                n,
                r,
                i,
                o = this;
              return g(this, function (t) {
                switch (t.label) {
                  case 0:
                    return !this.isPrimary || this.sn(this.Oe, 18e5)
                      ? [3, 2]
                      : ((this.Oe = Date.now()),
                        [
                          4,
                          this.runTransaction(
                            "maybeGarbageCollectMultiClientState",
                            "readwrite-primary",
                            function (t) {
                              var r = ku(t, ru.store);
                              return r.Nt().next(function (t) {
                                var e = o.rn(t, 18e5),
                                  n = t.filter(function (t) {
                                    return -1 === e.indexOf(t);
                                  });
                                return hu
                                  .forEach(n, function (t) {
                                    return r.delete(t.clientId);
                                  })
                                  .next(function () {
                                    return n;
                                  });
                              });
                            }
                          ).catch(function () {
                            return [];
                          }),
                        ]);
                  case 1:
                    if (((e = t.sent()), this.Qe))
                      for (n = 0, r = e; n < r.length; n++)
                        (i = r[n]), this.Qe.removeItem(this.on(i.clientId));
                    t.label = 2;
                  case 2:
                    return [2];
                }
              });
            });
          }),
          (Xc.prototype.ze = function () {
            var t = this;
            this.$e = this.Se.enqueueAfterDelay(
              "client_metadata_refresh",
              4e3,
              function () {
                return t
                  .je()
                  .then(function () {
                    return t.nn();
                  })
                  .then(function () {
                    return t.ze();
                  });
              }
            );
          }),
          (Xc.prototype.tn = function (t) {
            return !!t && t.ownerId === this.clientId;
          }),
          (Xc.prototype.Ye = function (e) {
            var r = this;
            return this.Ce
              ? hu.resolve(!0)
              : $c(e)
                  .get(Ka.key)
                  .next(function (t) {
                    if (
                      null !== t &&
                      r.sn(t.leaseTimestampMs, 5e3) &&
                      !r.cn(t.ownerId)
                    ) {
                      if (r.tn(t) && r.networkEnabled) return !0;
                      if (!r.tn(t)) {
                        if (!t.allowTabSynchronization)
                          throw new Fr(Mr.FAILED_PRECONDITION, Wc);
                        return !1;
                      }
                    }
                    return (
                      !(!r.networkEnabled || !r.inForeground) ||
                      Jc(e)
                        .Nt()
                        .next(function (t) {
                          return (
                            void 0 ===
                            r.rn(t, 5e3).find(function (t) {
                              if (r.clientId !== t.clientId) {
                                var e = !r.networkEnabled && t.networkEnabled,
                                  n = !r.inForeground && t.inForeground,
                                  t = r.networkEnabled === t.networkEnabled;
                                if (e || (n && t)) return !0;
                              }
                              return !1;
                            })
                          );
                        })
                    );
                  })
                  .next(function (t) {
                    return (
                      r.isPrimary !== t &&
                        Br(
                          "IndexedDbPersistence",
                          "Client " +
                            (t ? "is" : "is not") +
                            " eligible for a primary lease."
                        ),
                      t
                    );
                  });
          }),
          (Xc.prototype.shutdown = function () {
            return y(this, void 0, void 0, function () {
              var n = this;
              return g(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      (this.xe = !1),
                      this.un(),
                      this.$e && (this.$e.cancel(), (this.$e = null)),
                      this.an(),
                      this.hn(),
                      [
                        4,
                        this.Be.runTransaction(
                          "shutdown",
                          "readwrite",
                          [Ka.store, ru.store],
                          function (t) {
                            var e = new Nu(t, Or.o);
                            return n.Xe(e).next(function () {
                              return n.en(e);
                            });
                          }
                        ),
                      ]
                    );
                  case 1:
                    return t.sent(), this.Be.close(), this.ln(), [2];
                }
              });
            });
          }),
          (Xc.prototype.rn = function (t, e) {
            var n = this;
            return t.filter(function (t) {
              return n.sn(t.updateTimeMs, e) && !n.cn(t.clientId);
            });
          }),
          (Xc.prototype.fn = function () {
            var e = this;
            return this.runTransaction(
              "getActiveClients",
              "readonly",
              function (t) {
                return Jc(t)
                  .Nt()
                  .next(function (t) {
                    return e.rn(t, 18e5).map(function (t) {
                      return t.clientId;
                    });
                  });
              }
            );
          }),
          Object.defineProperty(Xc.prototype, "started", {
            get: function () {
              return this.xe;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (Xc.prototype.getMutationQueue = function (t) {
            return hc.Qt(t, this.R, this.Ut, this.referenceDelegate);
          }),
          (Xc.prototype.getTargetCache = function () {
            return this.qe;
          }),
          (Xc.prototype.getRemoteDocumentCache = function () {
            return this.Ue;
          }),
          (Xc.prototype.getIndexManager = function () {
            return this.Ut;
          }),
          (Xc.prototype.getBundleCache = function () {
            return this.Ke;
          }),
          (Xc.prototype.runTransaction = function (e, n, r) {
            var i,
              o = this;
            return (
              Br("IndexedDbPersistence", "Starting transaction:", e),
              this.Be.runTransaction(
                e,
                "readonly" === n ? "readonly" : "readwrite",
                au,
                function (t) {
                  return (
                    (i = new Nu(t, o.Ne ? o.Ne.next() : Or.o)),
                    "readwrite-primary" === n
                      ? o
                          .Je(i)
                          .next(function (t) {
                            return !!t || o.Ye(i);
                          })
                          .next(function (t) {
                            if (!t)
                              throw (
                                (jr(
                                  "Failed to obtain primary lease for action '" +
                                    e +
                                    "'."
                                ),
                                (o.isPrimary = !1),
                                o.Se.enqueueRetryable(function () {
                                  return o.Me(!1);
                                }),
                                new Fr(Mr.FAILED_PRECONDITION, uu))
                              );
                            return r(i);
                          })
                          .next(function (t) {
                            return o.Ze(i).next(function () {
                              return t;
                            });
                          })
                      : o.dn(i).next(function () {
                          return r(i);
                        })
                  );
                }
              ).then(function (t) {
                return i.raiseOnCommittedEvent(), t;
              })
            );
          }),
          (Xc.prototype.dn = function (t) {
            var e = this;
            return $c(t)
              .get(Ka.key)
              .next(function (t) {
                if (
                  null !== t &&
                  e.sn(t.leaseTimestampMs, 5e3) &&
                  !e.cn(t.ownerId) &&
                  !e.tn(t) &&
                  !(
                    e.Ce ||
                    (e.allowTabSynchronization && t.allowTabSynchronization)
                  )
                )
                  throw new Fr(Mr.FAILED_PRECONDITION, Wc);
              });
          }),
          (Xc.prototype.Ze = function (t) {
            var e = new Ka(
              this.clientId,
              this.allowTabSynchronization,
              Date.now()
            );
            return $c(t).put(Ka.key, e);
          }),
          (Xc.yt = function () {
            return fu.yt();
          }),
          (Xc.prototype.Xe = function (t) {
            var e = this,
              n = $c(t);
            return n.get(Ka.key).next(function (t) {
              return e.tn(t)
                ? (Br("IndexedDbPersistence", "Releasing primary lease."),
                  n.delete(Ka.key))
                : hu.resolve();
            });
          }),
          (Xc.prototype.sn = function (t, e) {
            var n = Date.now();
            return !(
              t < n - e ||
              (n < t &&
                (jr(
                  "Detected an update time that is in the future: " +
                    t +
                    " > " +
                    n
                ),
                1))
            );
          }),
          (Xc.prototype.We = function () {
            var t = this;
            null !== this.document &&
              "function" == typeof this.document.addEventListener &&
              ((this.ke = function () {
                t.Se.enqueueAndForget(function () {
                  return (
                    (t.inForeground = "visible" === t.document.visibilityState),
                    t.je()
                  );
                });
              }),
              this.document.addEventListener("visibilitychange", this.ke),
              (this.inForeground =
                "visible" === this.document.visibilityState));
          }),
          (Xc.prototype.an = function () {
            this.ke &&
              (this.document.removeEventListener("visibilitychange", this.ke),
              (this.ke = null));
          }),
          (Xc.prototype.Ge = function () {
            var t,
              e = this;
            "function" ==
              typeof (null === (t = this.window) || void 0 === t
                ? void 0
                : t.addEventListener) &&
              ((this.Fe = function () {
                e.un(),
                  i() &&
                    navigator.appVersion.match("Version/14") &&
                    e.Se.enterRestrictedMode(!0),
                  e.Se.enqueueAndForget(function () {
                    return e.shutdown();
                  });
              }),
              this.window.addEventListener("pagehide", this.Fe));
          }),
          (Xc.prototype.hn = function () {
            this.Fe &&
              (this.window.removeEventListener("pagehide", this.Fe),
              (this.Fe = null));
          }),
          (Xc.prototype.cn = function (t) {
            var e;
            try {
              var n =
                null !==
                (null === (e = this.Qe) || void 0 === e
                  ? void 0
                  : e.getItem(this.on(t)));
              return (
                Br(
                  "IndexedDbPersistence",
                  "Client '" +
                    t +
                    "' " +
                    (n ? "is" : "is not") +
                    " zombied in LocalStorage"
                ),
                n
              );
            } catch (t) {
              return (
                jr(
                  "IndexedDbPersistence",
                  "Failed to get zombied client id.",
                  t
                ),
                !1
              );
            }
          }),
          (Xc.prototype.un = function () {
            if (this.Qe)
              try {
                this.Qe.setItem(this.on(this.clientId), String(Date.now()));
              } catch (t) {
                jr("Failed to set zombie client id.", t);
              }
          }),
          (Xc.prototype.ln = function () {
            if (this.Qe)
              try {
                this.Qe.removeItem(this.on(this.clientId));
              } catch (t) {}
          }),
          (Xc.prototype.on = function (t) {
            return "firestore_zombie_" + this.persistenceKey + "_" + t;
          }),
          Xc);
      function Xc(t, e, n, r, i, o, s, a, u, c) {
        if (
          ((this.allowTabSynchronization = t),
          (this.persistenceKey = e),
          (this.clientId = n),
          (this.Se = i),
          (this.window = o),
          (this.document = s),
          (this.De = u),
          (this.Ce = c),
          (this.Ne = null),
          (this.xe = !1),
          (this.isPrimary = !1),
          (this.networkEnabled = !0),
          (this.Fe = null),
          (this.inForeground = !1),
          (this.ke = null),
          (this.$e = null),
          (this.Oe = Number.NEGATIVE_INFINITY),
          (this.Me = function (t) {
            return Promise.resolve();
          }),
          !Xc.yt())
        )
          throw new Fr(
            Mr.UNIMPLEMENTED,
            "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled."
          );
        (this.referenceDelegate = new Nc(this, r)),
          (this.Le = e + "main"),
          (this.R = new Lu(a)),
          (this.Be = new fu(this.Le, 11, new Qc(this.R))),
          (this.qe = new mc(this.referenceDelegate, this.R)),
          (this.Ut = new tc()),
          (this.Ue = ((e = this.R), (a = this.Ut), new Mc(e, a))),
          (this.Ke = new Wu()),
          this.window && this.window.localStorage
            ? (this.Qe = this.window.localStorage)
            : ((this.Qe = null),
              !1 === c &&
                jr(
                  "IndexedDbPersistence",
                  "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."
                ));
      }
      function $c(t) {
        return ku(t, Ka.store);
      }
      function Jc(t) {
        return ku(t, ru.store);
      }
      function Zc(t, e) {
        var n = t.projectId;
        return (
          t.isDefaultDatabase || (n += "." + t.database),
          "firestore/" + e + "/" + n + "/"
        );
      }
      function th(t, e) {
        (this.progress = t), (this.wn = e);
      }
      var eh =
          ((uh.prototype.mn = function (e, n) {
            var r = this;
            return this._n
              .getAllMutationBatchesAffectingDocumentKey(e, n)
              .next(function (t) {
                return r.yn(e, n, t);
              });
          }),
          (uh.prototype.yn = function (t, e, r) {
            return this.Ue.getEntry(t, e).next(function (t) {
              for (var e = 0, n = r; e < n.length; e++)
                n[e].applyToLocalView(t);
              return t;
            });
          }),
          (uh.prototype.gn = function (t, i) {
            t.forEach(function (t, e) {
              for (var n = 0, r = i; n < r.length; n++)
                r[n].applyToLocalView(e);
            });
          }),
          (uh.prototype.pn = function (e, t) {
            var n = this;
            return this.Ue.getEntries(e, t).next(function (t) {
              return n.En(e, t).next(function () {
                return t;
              });
            });
          }),
          (uh.prototype.En = function (t, e) {
            var n = this;
            return this._n
              .getAllMutationBatchesAffectingDocumentKeys(t, e)
              .next(function (t) {
                return n.gn(e, t);
              });
          }),
          (uh.prototype.getDocumentsMatchingQuery = function (t, e, n) {
            return (
              (r = e),
              Ai.isDocumentKey(r.path) &&
              null === r.collectionGroup &&
              0 === r.filters.length
                ? this.Tn(t, e.path)
                : Lo(e)
                ? this.In(t, e, n)
                : this.An(t, e, n)
            );
            var r;
          }),
          (uh.prototype.Tn = function (t, e) {
            return this.mn(t, new Ai(e)).next(function (t) {
              var e = Ws;
              return (e = t.isFoundDocument() ? e.insert(t.key, t) : e);
            });
          }),
          (uh.prototype.In = function (n, r, i) {
            var o = this,
              s = r.collectionGroup,
              a = Ws;
            return this.Ut.getCollectionParents(n, s).next(function (t) {
              return hu
                .forEach(t, function (t) {
                  var e,
                    e =
                      ((e = r),
                      (t = t.child(s)),
                      new Do(
                        t,
                        null,
                        e.explicitOrderBy.slice(),
                        e.filters.slice(),
                        e.limit,
                        e.limitType,
                        e.startAt,
                        e.endAt
                      ));
                  return o.An(n, e, i).next(function (t) {
                    t.forEach(function (t, e) {
                      a = a.insert(t, e);
                    });
                  });
                })
                .next(function () {
                  return a;
                });
            });
          }),
          (uh.prototype.An = function (e, n, t) {
            var c,
              h,
              r = this;
            return this.Ue.getDocumentsMatchingQuery(e, n, t)
              .next(function (t) {
                return (c = t), r._n.getAllMutationBatchesAffectingQuery(e, n);
              })
              .next(function (t) {
                return (
                  (h = t),
                  r.Rn(e, h, c).next(function (t) {
                    c = t;
                    for (var e = 0, n = h; e < n.length; e++)
                      for (
                        var r = n[e], i = 0, o = r.mutations;
                        i < o.length;
                        i++
                      ) {
                        var s = o[i],
                          a = s.key,
                          u = c.get(a);
                        null == u &&
                          ((u = Ki.newInvalidDocument(a)),
                          (c = c.insert(a, u))),
                          ps(s, u, r.localWriteTime),
                          u.isFoundDocument() || (c = c.remove(a));
                      }
                  })
                );
              })
              .next(function () {
                return (
                  c.forEach(function (t, e) {
                    Bo(n, e) || (c = c.remove(t));
                  }),
                  c
                );
              });
          }),
          (uh.prototype.Rn = function (t, e, n) {
            for (var r = $s(), i = 0, o = e; i < o.length; i++)
              for (var s = 0, a = o[i].mutations; s < a.length; s++) {
                var u = a[s];
                u instanceof bs && null === n.get(u.key) && (r = r.add(u.key));
              }
            var c = n;
            return this.Ue.getEntries(t, r).next(function (t) {
              return (
                t.forEach(function (t, e) {
                  e.isFoundDocument() && (c = c.insert(t, e));
                }),
                c
              );
            });
          }),
          uh),
        nh =
          ((ah.Pn = function (t, e) {
            for (
              var n = $s(), r = $s(), i = 0, o = e.docChanges;
              i < o.length;
              i++
            ) {
              var s = o[i];
              switch (s.type) {
                case 0:
                  n = n.add(s.doc.key);
                  break;
                case 1:
                  r = r.add(s.doc.key);
              }
            }
            return new ah(t, e.fromCache, n, r);
          }),
          ah),
        rh =
          ((sh.prototype.Vn = function (t) {
            this.Sn = t;
          }),
          (sh.prototype.getDocumentsMatchingQuery = function (e, r, i, o) {
            var s = this;
            return (0 === r.filters.length &&
              null === r.limit &&
              null == r.startAt &&
              null == r.endAt &&
              (0 === r.explicitOrderBy.length ||
                (1 === r.explicitOrderBy.length &&
                  r.explicitOrderBy[0].field.isKeyField()))) ||
              i.isEqual(Zr.min())
              ? this.Dn(e, r)
              : this.Sn.pn(e, o).next(function (t) {
                  var n = s.Cn(r, t);
                  return (ko(r) || Ro(r)) && s.Nn(r.limitType, n, o, i)
                    ? s.Dn(e, r)
                    : (qr() <= m.DEBUG &&
                        Br(
                          "QueryEngine",
                          "Re-using previous result from %s to execute query: %s",
                          i.toString(),
                          qo(r)
                        ),
                      s.Sn.getDocumentsMatchingQuery(e, r, i).next(function (
                        e
                      ) {
                        return (
                          n.forEach(function (t) {
                            e = e.insert(t.key, t);
                          }),
                          e
                        );
                      }));
                });
          }),
          (sh.prototype.Cn = function (n, t) {
            var r = new Ks(jo(n));
            return (
              t.forEach(function (t, e) {
                Bo(n, e) && (r = r.add(e));
              }),
              r
            );
          }),
          (sh.prototype.Nn = function (t, e, n, r) {
            if (n.size !== e.size) return !0;
            e = "F" === t ? e.last() : e.first();
            return !!e && (e.hasPendingWrites || 0 < e.version.compareTo(r));
          }),
          (sh.prototype.Dn = function (t, e) {
            return (
              qr() <= m.DEBUG &&
                Br(
                  "QueryEngine",
                  "Using full collection scan to execute query:",
                  qo(e)
                ),
              this.Sn.getDocumentsMatchingQuery(t, e, Zr.min())
            );
          }),
          sh),
        ih =
          ((oh.prototype.collectGarbage = function (e) {
            var n = this;
            return this.persistence.runTransaction(
              "Collect garbage",
              "readwrite-primary",
              function (t) {
                return e.collect(t, n.Fn);
              }
            );
          }),
          oh);
      function oh(t, e, n, r) {
        (this.persistence = t),
          (this.xn = e),
          (this.R = r),
          (this.Fn = new Ms(Yr)),
          (this.kn = new Pc(zi, Wi)),
          (this.$n = Zr.min()),
          (this._n = t.getMutationQueue(n)),
          (this.On = t.getRemoteDocumentCache()),
          (this.qe = t.getTargetCache()),
          (this.Mn = new eh(
            this.On,
            this._n,
            this.persistence.getIndexManager()
          )),
          (this.Ke = t.getBundleCache()),
          this.xn.Vn(this.Mn);
      }
      function sh() {}
      function ah(t, e, n, r) {
        (this.targetId = t), (this.fromCache = e), (this.bn = n), (this.vn = r);
      }
      function uh(t, e, n) {
        (this.Ue = t), (this._n = e), (this.Ut = n);
      }
      function ch(t, e, n, r) {
        return new ih(t, e, n, r);
      }
      function hh(i, o) {
        return y(this, void 0, void 0, function () {
          var e, n, v, r;
          return g(this, function (t) {
            switch (t.label) {
              case 0:
                return (
                  (n = (e = i)._n),
                  (v = e.Mn),
                  [
                    4,
                    e.persistence.runTransaction(
                      "Handle user change",
                      "readonly",
                      function (g) {
                        var m;
                        return e._n
                          .getAllMutationBatches(g)
                          .next(function (t) {
                            return (
                              (m = t),
                              (n = e.persistence.getMutationQueue(o)),
                              (v = new eh(
                                e.On,
                                n,
                                e.persistence.getIndexManager()
                              )),
                              n.getAllMutationBatches(g)
                            );
                          })
                          .next(function (t) {
                            for (
                              var e = [], n = [], r = $s(), i = 0, o = m;
                              i < o.length;
                              i++
                            ) {
                              var s = o[i];
                              e.push(s.batchId);
                              for (
                                var a = 0, u = s.mutations;
                                a < u.length;
                                a++
                              )
                                var c = u[a], r = r.add(c.key);
                            }
                            for (var h = 0, l = t; h < l.length; h++) {
                              var f = l[h];
                              n.push(f.batchId);
                              for (
                                var d = 0, p = f.mutations;
                                d < p.length;
                                d++
                              ) {
                                var y = p[d];
                                r = r.add(y.key);
                              }
                            }
                            return v.pn(g, r).next(function (t) {
                              return {
                                Ln: t,
                                removedBatchIds: e,
                                addedBatchIds: n,
                              };
                            });
                          });
                      }
                    ),
                  ]
                );
              case 1:
                return (
                  (r = t.sent()),
                  [2, ((e._n = n), (e.Mn = v), e.xn.Vn(e.Mn), r)]
                );
            }
          });
        });
      }
      function lh(t, h) {
        var l = t;
        return l.persistence.runTransaction(
          "Acknowledge batch",
          "readwrite-primary",
          function (t) {
            var e,
              r,
              i,
              o,
              s,
              n,
              a,
              u = h.batch.keys(),
              c = l.On.newChangeBuffer({ trackRemovals: !0 });
            return (
              (e = l),
              (r = t),
              (o = c),
              (s = (i = h).batch),
              (n = s.keys()),
              (a = hu.resolve()),
              n.forEach(function (n) {
                a = a
                  .next(function () {
                    return o.getEntry(r, n);
                  })
                  .next(function (t) {
                    var e = i.docVersions.get(n);
                    Hr(null !== e),
                      t.version.compareTo(e) < 0 &&
                        (s.applyToRemoteDocument(t, i),
                        t.isValidDocument() && o.addEntry(t, i.commitVersion));
                  });
              }),
              a
                .next(function () {
                  return e._n.removeMutationBatch(r, s);
                })
                .next(function () {
                  return c.apply(t);
                })
                .next(function () {
                  return l._n.performConsistencyCheck(t);
                })
                .next(function () {
                  return l.Mn.pn(t, u);
                })
            );
          }
        );
      }
      function fh(t) {
        var e = t;
        return e.persistence.runTransaction(
          "Get last remote snapshot version",
          "readonly",
          function (t) {
            return e.qe.getLastRemoteSnapshotVersion(t);
          }
        );
      }
      function dh(t, r) {
        var u = t,
          c = r.snapshotVersion,
          h = u.Fn;
        return u.persistence
          .runTransaction(
            "Apply remote event",
            "readwrite-primary",
            function (s) {
              var t = u.On.newChangeBuffer({ trackRemovals: !0 });
              h = u.Fn;
              var a = [];
              r.targetChanges.forEach(function (t, e) {
                var n,
                  r,
                  i,
                  o = h.get(e);
                o &&
                  (a.push(
                    u.qe
                      .removeMatchingKeys(s, t.removedDocuments, e)
                      .next(function () {
                        return u.qe.addMatchingKeys(s, t.addedDocuments, e);
                      })
                  ),
                  0 < (i = t.resumeToken).approximateByteSize() &&
                    ((n = o
                      .withResumeToken(i, c)
                      .withSequenceNumber(s.currentSequenceNumber)),
                    (h = h.insert(e, n)),
                    (r = o),
                    (i = t),
                    Hr(0 < (o = n).resumeToken.approximateByteSize()),
                    (0 === r.resumeToken.approximateByteSize() ||
                      3e8 <=
                        o.snapshotVersion.toMicroseconds() -
                          r.snapshotVersion.toMicroseconds() ||
                      0 <
                        i.addedDocuments.size +
                          i.modifiedDocuments.size +
                          i.removedDocuments.size) &&
                      a.push(u.qe.updateTargetData(s, n))));
              });
              var e,
                n = Qs;
              return (
                r.documentUpdates.forEach(function (t, e) {
                  r.resolvedLimboDocuments.has(t) &&
                    a.push(
                      u.persistence.referenceDelegate.updateLimboDocument(s, t)
                    );
                }),
                a.push(
                  ph(s, t, r.documentUpdates, c, void 0).next(function (t) {
                    n = t;
                  })
                ),
                c.isEqual(Zr.min()) ||
                  ((e = u.qe.getLastRemoteSnapshotVersion(s).next(function (t) {
                    return u.qe.setTargetsMetadata(
                      s,
                      s.currentSequenceNumber,
                      c
                    );
                  })),
                  a.push(e)),
                hu
                  .waitFor(a)
                  .next(function () {
                    return t.apply(s);
                  })
                  .next(function () {
                    return u.Mn.En(s, n);
                  })
                  .next(function () {
                    return n;
                  })
              );
            }
          )
          .then(function (t) {
            return (u.Fn = h), t;
          });
      }
      function ph(t, s, e, a, u) {
        var n = $s();
        return (
          e.forEach(function (t) {
            return (n = n.add(t));
          }),
          s.getEntries(t, n).next(function (i) {
            var o = Qs;
            return (
              e.forEach(function (t, e) {
                var n = i.get(t),
                  r = (null == u ? void 0 : u.get(t)) || a;
                e.isNoDocument() && e.version.isEqual(Zr.min())
                  ? (s.removeEntry(t, r), (o = o.insert(t, e)))
                  : !n.isValidDocument() ||
                    0 < e.version.compareTo(n.version) ||
                    (0 === e.version.compareTo(n.version) && n.hasPendingWrites)
                  ? (s.addEntry(e, r), (o = o.insert(t, e)))
                  : Br(
                      "LocalStore",
                      "Ignoring outdated watch update for ",
                      t,
                      ". Current version:",
                      n.version,
                      " Watch version:",
                      e.version
                    );
              }),
              o
            );
          })
        );
      }
      function yh(t, r) {
        var i = t;
        return i.persistence
          .runTransaction("Allocate target", "readwrite", function (e) {
            var n;
            return i.qe.getTargetData(e, r).next(function (t) {
              return t
                ? ((n = t), hu.resolve(n))
                : i.qe.allocateTargetId(e).next(function (t) {
                    return (
                      (n = new Ou(r, t, 0, e.currentSequenceNumber)),
                      i.qe.addTargetData(e, n).next(function () {
                        return n;
                      })
                    );
                  });
            });
          })
          .then(function (t) {
            var e = i.Fn.get(t.targetId);
            return (
              (null === e ||
                0 < t.snapshotVersion.compareTo(e.snapshotVersion)) &&
                ((i.Fn = i.Fn.insert(t.targetId, t)), i.kn.set(r, t.targetId)),
              t
            );
          });
      }
      function gh(i, o, s) {
        return y(this, void 0, void 0, function () {
          var e, n, r;
          return g(this, function (t) {
            switch (t.label) {
              case 0:
                (n = (e = i).Fn.get(o)),
                  (r = s ? "readwrite" : "readwrite-primary"),
                  (t.label = 1);
              case 1:
                return (
                  t.trys.push([1, 4, , 5]),
                  s
                    ? [3, 3]
                    : [
                        4,
                        e.persistence.runTransaction(
                          "Release target",
                          r,
                          function (t) {
                            return e.persistence.referenceDelegate.removeTarget(
                              t,
                              n
                            );
                          }
                        ),
                      ]
                );
              case 2:
                t.sent(), (t.label = 3);
              case 3:
                return [3, 5];
              case 4:
                if (!Eu((r = t.sent()))) throw r;
                return (
                  Br(
                    "LocalStore",
                    "Failed to update sequence numbers for target " +
                      o +
                      ": " +
                      r
                  ),
                  [3, 5]
                );
              case 5:
                return (e.Fn = e.Fn.remove(o)), e.kn.delete(n.target), [2];
            }
          });
        });
      }
      function mh(t, o, s) {
        var a = t,
          u = Zr.min(),
          c = $s();
        return a.persistence.runTransaction(
          "Execute query",
          "readonly",
          function (e) {
            return (
              (t = a),
              (n = e),
              (r = Mo(o)),
              (void 0 !== (t = (i = t).kn.get(r))
                ? hu.resolve(i.Fn.get(t))
                : i.qe.getTargetData(n, r)
              )
                .next(function (t) {
                  if (t)
                    return (
                      (u = t.lastLimboFreeSnapshotVersion),
                      a.qe
                        .getMatchingKeysForTargetId(e, t.targetId)
                        .next(function (t) {
                          c = t;
                        })
                    );
                })
                .next(function () {
                  return a.xn.getDocumentsMatchingQuery(
                    e,
                    o,
                    s ? u : Zr.min(),
                    s ? c : $s()
                  );
                })
                .next(function (t) {
                  return { documents: t, Bn: c };
                })
            );
            var t, n, r, i;
          }
        );
      }
      function vh(t, e) {
        var n = t,
          r = n.qe,
          t = n.Fn.get(e);
        return t
          ? Promise.resolve(t.target)
          : n.persistence.runTransaction(
              "Get target data",
              "readonly",
              function (t) {
                return r.lt(t, e).next(function (t) {
                  return t ? t.target : null;
                });
              }
            );
      }
      function wh(t) {
        var s = t;
        return s.persistence
          .runTransaction("Get new document changes", "readonly", function (t) {
            return (
              (e = s.On),
              (n = t),
              (t = s.$n),
              (r = e),
              (i = Qs),
              (o = qu(t)),
              (t = Kc(n)),
              (n = IDBKeyRange.lowerBound(o, !0)),
              t
                .$t({ index: $a.readTimeIndex, range: n }, function (t, e) {
                  var n = Vu(r.R, e);
                  (i = i.insert(n.key, n)), (o = e.readTime);
                })
                .next(function () {
                  return { wn: i, readTime: Bu(o) };
                })
            );
            var e, n, r, i, o;
          })
          .then(function (t) {
            var e = t.wn,
              t = t.readTime;
            return (s.$n = t), e;
          });
      }
      function bh(n) {
        return y(this, void 0, void 0, function () {
          var e;
          return g(this, function (t) {
            return [
              2,
              (e = n).persistence
                .runTransaction(
                  "Synchronize last document change read time",
                  "readonly",
                  function (t) {
                    return (
                      (t = Kc(t)),
                      (r = Zr.min()),
                      t
                        .$t(
                          { index: $a.readTimeIndex, reverse: !0 },
                          function (t, e, n) {
                            e.readTime && (r = Bu(e.readTime)), n.done();
                          }
                        )
                        .next(function () {
                          return r;
                        })
                    );
                    var r;
                  }
                )
                .then(function (t) {
                  e.$n = t;
                }),
            ];
          });
        });
      }
      var Eh,
        Th,
        Ih =
          ((Gh.prototype.getBundleMetadata = function (t, e) {
            return hu.resolve(this.Qn.get(e));
          }),
          (Gh.prototype.saveBundleMetadata = function (t, e) {
            return (
              this.Qn.set(e.id, {
                id: e.id,
                version: e.version,
                createTime: ma(e.createTime),
              }),
              hu.resolve()
            );
          }),
          (Gh.prototype.getNamedQuery = function (t, e) {
            return hu.resolve(this.jn.get(e));
          }),
          (Gh.prototype.saveNamedQuery = function (t, e) {
            return (
              this.jn.set(e.name, {
                name: (e = e).name,
                query: zu(e.bundledQuery),
                readTime: ma(e.readTime),
              }),
              hu.resolve()
            );
          }),
          Gh),
        _h =
          ((Kh.prototype.isEmpty = function () {
            return this.Wn.isEmpty();
          }),
          (Kh.prototype.addReference = function (t, e) {
            e = new Sh(t, e);
            (this.Wn = this.Wn.add(e)), (this.zn = this.zn.add(e));
          }),
          (Kh.prototype.Jn = function (t, e) {
            var n = this;
            t.forEach(function (t) {
              return n.addReference(t, e);
            });
          }),
          (Kh.prototype.removeReference = function (t, e) {
            this.Yn(new Sh(t, e));
          }),
          (Kh.prototype.Xn = function (t, e) {
            var n = this;
            t.forEach(function (t) {
              return n.removeReference(t, e);
            });
          }),
          (Kh.prototype.Zn = function (t) {
            var e = this,
              n = new Ai(new ai([])),
              r = new Sh(n, t),
              t = new Sh(n, t + 1),
              i = [];
            return (
              this.zn.forEachInRange([r, t], function (t) {
                e.Yn(t), i.push(t.key);
              }),
              i
            );
          }),
          (Kh.prototype.ts = function () {
            var e = this;
            this.Wn.forEach(function (t) {
              return e.Yn(t);
            });
          }),
          (Kh.prototype.Yn = function (t) {
            (this.Wn = this.Wn.delete(t)), (this.zn = this.zn.delete(t));
          }),
          (Kh.prototype.es = function (t) {
            var e = new Ai(new ai([])),
              n = new Sh(e, t),
              t = new Sh(e, t + 1),
              r = $s();
            return (
              this.zn.forEachInRange([n, t], function (t) {
                r = r.add(t.key);
              }),
              r
            );
          }),
          (Kh.prototype.containsKey = function (t) {
            var e = new Sh(t, 0),
              e = this.Wn.firstAfterOrEqual(e);
            return null !== e && t.isEqual(e.key);
          }),
          Kh),
        Sh =
          ((jh.Gn = function (t, e) {
            return Ai.comparator(t.key, e.key) || Yr(t.ns, e.ns);
          }),
          (jh.Hn = function (t, e) {
            return Yr(t.ns, e.ns) || Ai.comparator(t.key, e.key);
          }),
          jh),
        Ah =
          ((Bh.prototype.checkEmpty = function (t) {
            return hu.resolve(0 === this._n.length);
          }),
          (Bh.prototype.addMutationBatch = function (t, e, n, r) {
            var i = this.ss;
            this.ss++, 0 < this._n.length && this._n[this._n.length - 1];
            n = new Ru(i, e, n, r);
            this._n.push(n);
            for (var o = 0, s = r; o < s.length; o++) {
              var a = s[o];
              (this.rs = this.rs.add(new Sh(a.key, i))),
                this.Ut.addToCollectionParentIndex(t, a.key.path.popLast());
            }
            return hu.resolve(n);
          }),
          (Bh.prototype.lookupMutationBatch = function (t, e) {
            return hu.resolve(this.os(e));
          }),
          (Bh.prototype.getNextMutationBatchAfterBatchId = function (t, e) {
            (e = this.cs(e + 1)), (e = e < 0 ? 0 : e);
            return hu.resolve(this._n.length > e ? this._n[e] : null);
          }),
          (Bh.prototype.getHighestUnacknowledgedBatchId = function () {
            return hu.resolve(0 === this._n.length ? -1 : this.ss - 1);
          }),
          (Bh.prototype.getAllMutationBatches = function (t) {
            return hu.resolve(this._n.slice());
          }),
          (Bh.prototype.getAllMutationBatchesAffectingDocumentKey = function (
            t,
            e
          ) {
            var n = this,
              r = new Sh(e, 0),
              e = new Sh(e, Number.POSITIVE_INFINITY),
              i = [];
            return (
              this.rs.forEachInRange([r, e], function (t) {
                t = n.os(t.ns);
                i.push(t);
              }),
              hu.resolve(i)
            );
          }),
          (Bh.prototype.getAllMutationBatchesAffectingDocumentKeys = function (
            t,
            e
          ) {
            var n = this,
              r = new Ks(Yr);
            return (
              e.forEach(function (t) {
                var e = new Sh(t, 0),
                  t = new Sh(t, Number.POSITIVE_INFINITY);
                n.rs.forEachInRange([e, t], function (t) {
                  r = r.add(t.ns);
                });
              }),
              hu.resolve(this.us(r))
            );
          }),
          (Bh.prototype.getAllMutationBatchesAffectingQuery = function (t, e) {
            var n = e.path,
              r = n.length + 1,
              e = n;
            Ai.isDocumentKey(e) || (e = e.child(""));
            var e = new Sh(new Ai(e), 0),
              i = new Ks(Yr);
            return (
              this.rs.forEachWhile(function (t) {
                var e = t.key.path;
                return (
                  !!n.isPrefixOf(e) && (e.length === r && (i = i.add(t.ns)), !0)
                );
              }, e),
              hu.resolve(this.us(i))
            );
          }),
          (Bh.prototype.us = function (t) {
            var e = this,
              n = [];
            return (
              t.forEach(function (t) {
                t = e.os(t);
                null !== t && n.push(t);
              }),
              n
            );
          }),
          (Bh.prototype.removeMutationBatch = function (n, r) {
            var i = this;
            Hr(0 === this.hs(r.batchId, "removed")), this._n.shift();
            var o = this.rs;
            return hu
              .forEach(r.mutations, function (t) {
                var e = new Sh(t.key, r.batchId);
                return (
                  (o = o.delete(e)),
                  i.referenceDelegate.markPotentiallyOrphaned(n, t.key)
                );
              })
              .next(function () {
                i.rs = o;
              });
          }),
          (Bh.prototype.Gt = function (t) {}),
          (Bh.prototype.containsKey = function (t, e) {
            var n = new Sh(e, 0),
              n = this.rs.firstAfterOrEqual(n);
            return hu.resolve(e.isEqual(n && n.key));
          }),
          (Bh.prototype.performConsistencyCheck = function (t) {
            return this._n.length, hu.resolve();
          }),
          (Bh.prototype.hs = function (t, e) {
            return this.cs(t);
          }),
          (Bh.prototype.cs = function (t) {
            return 0 === this._n.length ? 0 : t - this._n[0].batchId;
          }),
          (Bh.prototype.os = function (t) {
            t = this.cs(t);
            return t < 0 || t >= this._n.length ? null : this._n[t];
          }),
          Bh),
        Dh =
          ((qh.prototype.addEntry = function (t, e, n) {
            var r = e.key,
              i = this.docs.get(r),
              o = i ? i.size : 0,
              i = this.ls(e);
            return (
              (this.docs = this.docs.insert(r, {
                document: e.clone(),
                size: i,
                readTime: n,
              })),
              (this.size += i - o),
              this.Ut.addToCollectionParentIndex(t, r.path.popLast())
            );
          }),
          (qh.prototype.removeEntry = function (t) {
            var e = this.docs.get(t);
            e && ((this.docs = this.docs.remove(t)), (this.size -= e.size));
          }),
          (qh.prototype.getEntry = function (t, e) {
            var n = this.docs.get(e);
            return hu.resolve(
              n ? n.document.clone() : Ki.newInvalidDocument(e)
            );
          }),
          (qh.prototype.getEntries = function (t, e) {
            var n = this,
              r = Qs;
            return (
              e.forEach(function (t) {
                var e = n.docs.get(t);
                r = r.insert(
                  t,
                  e ? e.document.clone() : Ki.newInvalidDocument(t)
                );
              }),
              hu.resolve(r)
            );
          }),
          (qh.prototype.getDocumentsMatchingQuery = function (t, e, n) {
            for (
              var r = Qs,
                i = new Ai(e.path.child("")),
                o = this.docs.getIteratorFrom(i);
              o.hasNext();

            ) {
              var s = o.getNext(),
                a = s.key,
                u = s.value,
                s = u.document,
                u = u.readTime;
              if (!e.path.isPrefixOf(a.path)) break;
              u.compareTo(n) <= 0 ||
                (Bo(e, s) && (r = r.insert(s.key, s.clone())));
            }
            return hu.resolve(r);
          }),
          (qh.prototype.fs = function (t, e) {
            return hu.forEach(this.docs, function (t) {
              return e(t);
            });
          }),
          (qh.prototype.newChangeBuffer = function (t) {
            return new Nh(this);
          }),
          (qh.prototype.getSize = function (t) {
            return hu.resolve(this.size);
          }),
          qh),
        Nh =
          (n(Uh, (Th = _)),
          (Uh.prototype.applyChanges = function (n) {
            var r = this,
              i = [];
            return (
              this.changes.forEach(function (t, e) {
                e.document.isValidDocument()
                  ? i.push(r.Ie.addEntry(n, e.document, r.getReadTime(t)))
                  : r.Ie.removeEntry(t);
              }),
              hu.waitFor(i)
            );
          }),
          (Uh.prototype.getFromCache = function (t, e) {
            return this.Ie.getEntry(t, e);
          }),
          (Uh.prototype.getAllFromCache = function (t, e) {
            return this.Ie.getEntries(t, e);
          }),
          Uh),
        Ch =
          ((Vh.prototype.forEachTarget = function (t, n) {
            return (
              this.ds.forEach(function (t, e) {
                return n(e);
              }),
              hu.resolve()
            );
          }),
          (Vh.prototype.getLastRemoteSnapshotVersion = function (t) {
            return hu.resolve(this.lastRemoteSnapshotVersion);
          }),
          (Vh.prototype.getHighestSequenceNumber = function (t) {
            return hu.resolve(this.ws);
          }),
          (Vh.prototype.allocateTargetId = function (t) {
            return (
              (this.highestTargetId = this.ys.next()),
              hu.resolve(this.highestTargetId)
            );
          }),
          (Vh.prototype.setTargetsMetadata = function (t, e, n) {
            return (
              n && (this.lastRemoteSnapshotVersion = n),
              e > this.ws && (this.ws = e),
              hu.resolve()
            );
          }),
          (Vh.prototype.te = function (t) {
            this.ds.set(t.target, t);
            var e = t.targetId;
            e > this.highestTargetId &&
              ((this.ys = new gc(e)), (this.highestTargetId = e)),
              t.sequenceNumber > this.ws && (this.ws = t.sequenceNumber);
          }),
          (Vh.prototype.addTargetData = function (t, e) {
            return this.te(e), (this.targetCount += 1), hu.resolve();
          }),
          (Vh.prototype.updateTargetData = function (t, e) {
            return this.te(e), hu.resolve();
          }),
          (Vh.prototype.removeTargetData = function (t, e) {
            return (
              this.ds.delete(e.target),
              this._s.Zn(e.targetId),
              --this.targetCount,
              hu.resolve()
            );
          }),
          (Vh.prototype.removeTargets = function (n, r, i) {
            var o = this,
              s = 0,
              a = [];
            return (
              this.ds.forEach(function (t, e) {
                e.sequenceNumber <= r &&
                  null === i.get(e.targetId) &&
                  (o.ds.delete(t),
                  a.push(o.removeMatchingKeysForTargetId(n, e.targetId)),
                  s++);
              }),
              hu.waitFor(a).next(function () {
                return s;
              })
            );
          }),
          (Vh.prototype.getTargetCount = function (t) {
            return hu.resolve(this.targetCount);
          }),
          (Vh.prototype.getTargetData = function (t, e) {
            e = this.ds.get(e) || null;
            return hu.resolve(e);
          }),
          (Vh.prototype.addMatchingKeys = function (t, e, n) {
            return this._s.Jn(e, n), hu.resolve();
          }),
          (Vh.prototype.removeMatchingKeys = function (e, t, n) {
            this._s.Xn(t, n);
            var r = this.persistence.referenceDelegate,
              i = [];
            return (
              r &&
                t.forEach(function (t) {
                  i.push(r.markPotentiallyOrphaned(e, t));
                }),
              hu.waitFor(i)
            );
          }),
          (Vh.prototype.removeMatchingKeysForTargetId = function (t, e) {
            return this._s.Zn(e), hu.resolve();
          }),
          (Vh.prototype.getMatchingKeysForTargetId = function (t, e) {
            e = this._s.es(e);
            return hu.resolve(e);
          }),
          (Vh.prototype.containsKey = function (t, e) {
            return hu.resolve(this._s.containsKey(e));
          }),
          Vh),
        kh =
          ((Fh.prototype.start = function () {
            return Promise.resolve();
          }),
          (Fh.prototype.shutdown = function () {
            return (this.xe = !1), Promise.resolve();
          }),
          Object.defineProperty(Fh.prototype, "started", {
            get: function () {
              return this.xe;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (Fh.prototype.setDatabaseDeletedListener = function () {}),
          (Fh.prototype.setNetworkEnabled = function () {}),
          (Fh.prototype.getIndexManager = function () {
            return this.Ut;
          }),
          (Fh.prototype.getMutationQueue = function (t) {
            var e = this.gs[t.toKey()];
            return (
              e ||
                ((e = new Ah(this.Ut, this.referenceDelegate)),
                (this.gs[t.toKey()] = e)),
              e
            );
          }),
          (Fh.prototype.getTargetCache = function () {
            return this.qe;
          }),
          (Fh.prototype.getRemoteDocumentCache = function () {
            return this.Ue;
          }),
          (Fh.prototype.getBundleCache = function () {
            return this.Ke;
          }),
          (Fh.prototype.runTransaction = function (t, e, n) {
            var r = this;
            Br("MemoryPersistence", "Starting transaction:", t);
            var i = new Rh(this.Ne.next());
            return (
              this.referenceDelegate.Es(),
              n(i)
                .next(function (t) {
                  return r.referenceDelegate.Ts(i).next(function () {
                    return t;
                  });
                })
                .toPromise()
                .then(function (t) {
                  return i.raiseOnCommittedEvent(), t;
                })
            );
          }),
          (Fh.prototype.Is = function (e, n) {
            return hu.or(
              Object.values(this.gs).map(function (t) {
                return function () {
                  return t.containsKey(e, n);
                };
              })
            );
          }),
          Fh),
        Rh = (n(Mh, (Eh = C)), Mh),
        xh =
          ((Ph.bs = function (t) {
            return new Ph(t);
          }),
          Object.defineProperty(Ph.prototype, "vs", {
            get: function () {
              if (this.Rs) return this.Rs;
              throw Qr();
            },
            enumerable: !1,
            configurable: !0,
          }),
          (Ph.prototype.addReference = function (t, e, n) {
            return (
              this.As.addReference(n, e),
              this.vs.delete(n.toString()),
              hu.resolve()
            );
          }),
          (Ph.prototype.removeReference = function (t, e, n) {
            return (
              this.As.removeReference(n, e),
              this.vs.add(n.toString()),
              hu.resolve()
            );
          }),
          (Ph.prototype.markPotentiallyOrphaned = function (t, e) {
            return this.vs.add(e.toString()), hu.resolve();
          }),
          (Ph.prototype.removeTarget = function (t, e) {
            var n = this;
            this.As.Zn(e.targetId).forEach(function (t) {
              return n.vs.add(t.toString());
            });
            var r = this.persistence.getTargetCache();
            return r
              .getMatchingKeysForTargetId(t, e.targetId)
              .next(function (t) {
                t.forEach(function (t) {
                  return n.vs.add(t.toString());
                });
              })
              .next(function () {
                return r.removeTargetData(t, e);
              });
          }),
          (Ph.prototype.Es = function () {
            this.Rs = new Set();
          }),
          (Ph.prototype.Ts = function (n) {
            var r = this,
              i = this.persistence.getRemoteDocumentCache().newChangeBuffer();
            return hu
              .forEach(this.vs, function (t) {
                var e = Ai.fromPath(t);
                return r.Ps(n, e).next(function (t) {
                  t || i.removeEntry(e);
                });
              })
              .next(function () {
                return (r.Rs = null), i.apply(n);
              });
          }),
          (Ph.prototype.updateLimboDocument = function (t, e) {
            var n = this;
            return this.Ps(t, e).next(function (t) {
              t ? n.vs.delete(e.toString()) : n.vs.add(e.toString());
            });
          }),
          (Ph.prototype.ps = function (t) {
            return 0;
          }),
          (Ph.prototype.Ps = function (t, e) {
            var n = this;
            return hu.or([
              function () {
                return hu.resolve(n.As.containsKey(e));
              },
              function () {
                return n.persistence.getTargetCache().containsKey(t, e);
              },
              function () {
                return n.persistence.Is(t, e);
              },
            ]);
          }),
          Ph),
        Oh =
          ((Lh.prototype.isAuthenticated = function () {
            return null != this.uid;
          }),
          (Lh.prototype.toKey = function () {
            return this.isAuthenticated()
              ? "uid:" + this.uid
              : "anonymous-user";
          }),
          (Lh.prototype.isEqual = function (t) {
            return t.uid === this.uid;
          }),
          Lh);
      function Lh(t) {
        this.uid = t;
      }
      function Ph(t) {
        (this.persistence = t), (this.As = new _h()), (this.Rs = null);
      }
      function Mh(t) {
        var e = this;
        return ((e = Eh.call(this) || this).currentSequenceNumber = t), e;
      }
      function Fh(t, e) {
        var n = this;
        (this.gs = {}),
          (this.Ne = new Or(0)),
          (this.xe = !1),
          (this.xe = !0),
          (this.referenceDelegate = t(this)),
          (this.qe = new Ch(this)),
          (this.Ut = new Ju()),
          (this.Ue =
            ((t = this.Ut),
            new Dh(t, function (t) {
              return n.referenceDelegate.ps(t);
            }))),
          (this.R = new Lu(e)),
          (this.Ke = new Ih(this.R));
      }
      function Vh(t) {
        (this.persistence = t),
          (this.ds = new Pc(zi, Wi)),
          (this.lastRemoteSnapshotVersion = Zr.min()),
          (this.highestTargetId = 0),
          (this.ws = 0),
          (this._s = new _h()),
          (this.targetCount = 0),
          (this.ys = gc.Jt());
      }
      function Uh(t) {
        var e = this;
        return ((e = Th.call(this) || this).Ie = t), e;
      }
      function qh(t, e) {
        (this.Ut = t),
          (this.ls = e),
          (this.docs = new Ms(Ai.comparator)),
          (this.size = 0);
      }
      function Bh(t, e) {
        (this.Ut = t),
          (this.referenceDelegate = e),
          (this._n = []),
          (this.ss = 1),
          (this.rs = new Ks(Sh.Gn));
      }
      function jh(t, e) {
        (this.key = t), (this.ns = e);
      }
      function Kh() {
        (this.Wn = new Ks(Sh.Gn)), (this.zn = new Ks(Sh.Hn));
      }
      function Gh(t) {
        (this.R = t), (this.Qn = new Map()), (this.jn = new Map());
      }
      function Qh(t, e) {
        return "firestore_clients_" + t + "_" + e;
      }
      function Hh(t, e, n) {
        n = "firestore_mutations_" + t + "_" + n;
        return e.isAuthenticated() && (n += "_" + e.uid), n;
      }
      function zh(t, e) {
        return "firestore_targets_" + t + "_" + e;
      }
      (Oh.UNAUTHENTICATED = new Oh(null)),
        (Oh.GOOGLE_CREDENTIALS = new Oh("google-credentials-uid")),
        (Oh.FIRST_PARTY = new Oh("first-party-uid"));
      var Wh,
        Yh =
          ((vl.Vs = function (t, e, n) {
            var r,
              i = JSON.parse(n),
              o =
                "object" == typeof i &&
                -1 !==
                  ["pending", "acknowledged", "rejected"].indexOf(i.state) &&
                (void 0 === i.error || "object" == typeof i.error);
            return (
              o &&
                i.error &&
                (o =
                  "string" == typeof i.error.message &&
                  "string" == typeof i.error.code) &&
                (r = new Fr(i.error.code, i.error.message)),
              o
                ? new vl(t, e, i.state, r)
                : (jr(
                    "SharedClientState",
                    "Failed to parse mutation state for ID '" + e + "': " + n
                  ),
                  null)
            );
          }),
          (vl.prototype.Ss = function () {
            var t = { state: this.state, updateTimeMs: Date.now() };
            return (
              this.error &&
                (t.error = {
                  code: this.error.code,
                  message: this.error.message,
                }),
              JSON.stringify(t)
            );
          }),
          vl),
        Xh =
          ((ml.Vs = function (t, e) {
            var n,
              r = JSON.parse(e),
              i =
                "object" == typeof r &&
                -1 !==
                  ["not-current", "current", "rejected"].indexOf(r.state) &&
                (void 0 === r.error || "object" == typeof r.error);
            return (
              i &&
                r.error &&
                (i =
                  "string" == typeof r.error.message &&
                  "string" == typeof r.error.code) &&
                (n = new Fr(r.error.code, r.error.message)),
              i
                ? new ml(t, r.state, n)
                : (jr(
                    "SharedClientState",
                    "Failed to parse target state for ID '" + t + "': " + e
                  ),
                  null)
            );
          }),
          (ml.prototype.Ss = function () {
            var t = { state: this.state, updateTimeMs: Date.now() };
            return (
              this.error &&
                (t.error = {
                  code: this.error.code,
                  message: this.error.message,
                }),
              JSON.stringify(t)
            );
          }),
          ml),
        $h =
          ((gl.Vs = function (t, e) {
            for (
              var n = JSON.parse(e),
                r = "object" == typeof n && n.activeTargetIds instanceof Array,
                i = Js,
                o = 0;
              r && o < n.activeTargetIds.length;
              ++o
            )
              (r = Si(n.activeTargetIds[o])), (i = i.add(n.activeTargetIds[o]));
            return r
              ? new gl(t, i)
              : (jr(
                  "SharedClientState",
                  "Failed to parse client data for instance '" + t + "': " + e
                ),
                null);
          }),
          gl),
        Jh =
          ((yl.Vs = function (t) {
            var e = JSON.parse(t);
            return "object" == typeof e &&
              -1 !== ["Unknown", "Online", "Offline"].indexOf(e.onlineState) &&
              "string" == typeof e.clientId
              ? new yl(e.clientId, e.onlineState)
              : (jr("SharedClientState", "Failed to parse online state: " + t),
                null);
          }),
          yl),
        Zh =
          ((pl.prototype.Ds = function (t) {
            this.activeTargetIds = this.activeTargetIds.add(t);
          }),
          (pl.prototype.Cs = function (t) {
            this.activeTargetIds = this.activeTargetIds.delete(t);
          }),
          (pl.prototype.Ss = function () {
            var t = {
              activeTargetIds: this.activeTargetIds.toArray(),
              updateTimeMs: Date.now(),
            };
            return JSON.stringify(t);
          }),
          pl),
        tl =
          ((dl.yt = function (t) {
            return !(!t || !t.localStorage);
          }),
          (dl.prototype.start = function () {
            return y(this, void 0, void 0, function () {
              var e,
                n,
                r,
                i,
                o,
                s,
                a,
                u,
                c,
                h,
                l = this;
              return g(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.syncEngine.fn()];
                  case 1:
                    for (s = t.sent(), e = 0, n = s; e < n.length; e++)
                      (r = n[e]) !== this.Ns &&
                        (i = this.getItem(Qh(this.persistenceKey, r))) &&
                        (o = $h.Vs(r, i)) &&
                        (this.ks = this.ks.insert(o.clientId, o));
                    for (
                      this.Qs(),
                        (s = this.storage.getItem(this.Us)) &&
                          (a = this.js(s)) &&
                          this.Ws(a),
                        u = 0,
                        c = this.$s;
                      u < c.length;
                      u++
                    )
                      (h = c[u]), this.Fs(h);
                    return (
                      (this.$s = []),
                      this.window.addEventListener("pagehide", function () {
                        return l.shutdown();
                      }),
                      (this.started = !0),
                      [2]
                    );
                }
              });
            });
          }),
          (dl.prototype.writeSequenceNumber = function (t) {
            this.setItem(this.Ms, JSON.stringify(t));
          }),
          (dl.prototype.getAllActiveQueryTargets = function () {
            return this.Gs(this.ks);
          }),
          (dl.prototype.isActiveQueryTarget = function (n) {
            var r = !1;
            return (
              this.ks.forEach(function (t, e) {
                e.activeTargetIds.has(n) && (r = !0);
              }),
              r
            );
          }),
          (dl.prototype.addPendingMutation = function (t) {
            this.zs(t, "pending");
          }),
          (dl.prototype.updateMutationState = function (t, e, n) {
            this.zs(t, e, n), this.Hs(t);
          }),
          (dl.prototype.addLocalQueryTarget = function (t) {
            var e,
              n = "not-current";
            return (
              this.isActiveQueryTarget(t) &&
                (!(e = this.storage.getItem(zh(this.persistenceKey, t))) ||
                  ((e = Xh.Vs(t, e)) && (n = e.state))),
              this.Js.Ds(t),
              this.Qs(),
              n
            );
          }),
          (dl.prototype.removeLocalQueryTarget = function (t) {
            this.Js.Cs(t), this.Qs();
          }),
          (dl.prototype.isLocalQueryTarget = function (t) {
            return this.Js.activeTargetIds.has(t);
          }),
          (dl.prototype.clearQueryState = function (t) {
            this.removeItem(zh(this.persistenceKey, t));
          }),
          (dl.prototype.updateQueryState = function (t, e, n) {
            this.Ys(t, e, n);
          }),
          (dl.prototype.handleUserChange = function (t, e, n) {
            var r = this;
            e.forEach(function (t) {
              r.Hs(t);
            }),
              (this.currentUser = t),
              n.forEach(function (t) {
                r.addPendingMutation(t);
              });
          }),
          (dl.prototype.setOnlineState = function (t) {
            this.Xs(t);
          }),
          (dl.prototype.notifyBundleLoaded = function () {
            this.Zs();
          }),
          (dl.prototype.shutdown = function () {
            this.started &&
              (this.window.removeEventListener("storage", this.xs),
              this.removeItem(this.Os),
              (this.started = !1));
          }),
          (dl.prototype.getItem = function (t) {
            var e = this.storage.getItem(t);
            return Br("SharedClientState", "READ", t, e), e;
          }),
          (dl.prototype.setItem = function (t, e) {
            Br("SharedClientState", "SET", t, e), this.storage.setItem(t, e);
          }),
          (dl.prototype.removeItem = function (t) {
            Br("SharedClientState", "REMOVE", t), this.storage.removeItem(t);
          }),
          (dl.prototype.Fs = function (t) {
            var e = this,
              o = t;
            o.storageArea === this.storage &&
              (Br("SharedClientState", "EVENT", o.key, o.newValue),
              o.key !== this.Os
                ? this.Se.enqueueRetryable(function () {
                    return y(e, void 0, void 0, function () {
                      var e, n, r, i;
                      return g(this, function (t) {
                        if (this.started) {
                          if (null !== o.key)
                            if (this.Ls.test(o.key)) {
                              if (null == o.newValue)
                                return (
                                  (e = this.ti(o.key)), [2, this.ei(e, null)]
                                );
                              if ((e = this.ni(o.key, o.newValue)))
                                return [2, this.ei(e.clientId, e)];
                            } else if (this.Bs.test(o.key)) {
                              if (
                                null !== o.newValue &&
                                (n = this.si(o.key, o.newValue))
                              )
                                return [2, this.ii(n)];
                            } else if (this.qs.test(o.key)) {
                              if (
                                null !== o.newValue &&
                                (r = this.ri(o.key, o.newValue))
                              )
                                return [2, this.oi(r)];
                            } else if (o.key === this.Us) {
                              if (
                                null !== o.newValue &&
                                (i = this.js(o.newValue))
                              )
                                return [2, this.Ws(i)];
                            } else if (o.key === this.Ms)
                              (i = (function (t) {
                                var e = Or.o;
                                if (null != t)
                                  try {
                                    var n = JSON.parse(t);
                                    Hr("number" == typeof n), (e = n);
                                  } catch (t) {
                                    jr(
                                      "SharedClientState",
                                      "Failed to read sequence number from WebStorage",
                                      t
                                    );
                                  }
                                return e;
                              })(o.newValue)) !== Or.o &&
                                this.sequenceNumberHandler(i);
                            else if (o.key === this.Ks)
                              return [2, this.syncEngine.ci()];
                        } else this.$s.push(o);
                        return [2];
                      });
                    });
                  })
                : jr(
                    "Received WebStorage notification for local change. Another client might have garbage-collected our state"
                  ));
          }),
          Object.defineProperty(dl.prototype, "Js", {
            get: function () {
              return this.ks.get(this.Ns);
            },
            enumerable: !1,
            configurable: !0,
          }),
          (dl.prototype.Qs = function () {
            this.setItem(this.Os, this.Js.Ss());
          }),
          (dl.prototype.zs = function (t, e, n) {
            (n = new Yh(this.currentUser, t, e, n)),
              (t = Hh(this.persistenceKey, this.currentUser, t));
            this.setItem(t, n.Ss());
          }),
          (dl.prototype.Hs = function (t) {
            t = Hh(this.persistenceKey, this.currentUser, t);
            this.removeItem(t);
          }),
          (dl.prototype.Xs = function (t) {
            t = { clientId: this.Ns, onlineState: t };
            this.storage.setItem(this.Us, JSON.stringify(t));
          }),
          (dl.prototype.Ys = function (t, e, n) {
            var r = zh(this.persistenceKey, t),
              n = new Xh(t, e, n);
            this.setItem(r, n.Ss());
          }),
          (dl.prototype.Zs = function () {
            this.setItem(this.Ks, "value-not-used");
          }),
          (dl.prototype.ti = function (t) {
            t = this.Ls.exec(t);
            return t ? t[1] : null;
          }),
          (dl.prototype.ni = function (t, e) {
            t = this.ti(t);
            return $h.Vs(t, e);
          }),
          (dl.prototype.si = function (t, e) {
            var n = this.Bs.exec(t),
              t = Number(n[1]),
              n = void 0 !== n[2] ? n[2] : null;
            return Yh.Vs(new Oh(n), t, e);
          }),
          (dl.prototype.ri = function (t, e) {
            (t = this.qs.exec(t)), (t = Number(t[1]));
            return Xh.Vs(t, e);
          }),
          (dl.prototype.js = function (t) {
            return Jh.Vs(t);
          }),
          (dl.prototype.ii = function (e) {
            return y(this, void 0, void 0, function () {
              return g(this, function (t) {
                return e.user.uid === this.currentUser.uid
                  ? [2, this.syncEngine.ui(e.batchId, e.state, e.error)]
                  : (Br(
                      "SharedClientState",
                      "Ignoring mutation for non-active user " + e.user.uid
                    ),
                    [2]);
              });
            });
          }),
          (dl.prototype.oi = function (t) {
            return this.syncEngine.ai(t.targetId, t.state, t.error);
          }),
          (dl.prototype.ei = function (t, e) {
            var n = this,
              r = e ? this.ks.insert(t, e) : this.ks.remove(t),
              i = this.Gs(this.ks),
              o = this.Gs(r),
              s = [],
              a = [];
            return (
              o.forEach(function (t) {
                i.has(t) || s.push(t);
              }),
              i.forEach(function (t) {
                o.has(t) || a.push(t);
              }),
              this.syncEngine.hi(s, a).then(function () {
                n.ks = r;
              })
            );
          }),
          (dl.prototype.Ws = function (t) {
            this.ks.get(t.clientId) && this.onlineStateHandler(t.onlineState);
          }),
          (dl.prototype.Gs = function (t) {
            var n = Js;
            return (
              t.forEach(function (t, e) {
                n = n.unionWith(e.activeTargetIds);
              }),
              n
            );
          }),
          dl),
        el =
          ((fl.prototype.addPendingMutation = function (t) {}),
          (fl.prototype.updateMutationState = function (t, e, n) {}),
          (fl.prototype.addLocalQueryTarget = function (t) {
            return this.li.Ds(t), this.fi[t] || "not-current";
          }),
          (fl.prototype.updateQueryState = function (t, e, n) {
            this.fi[t] = e;
          }),
          (fl.prototype.removeLocalQueryTarget = function (t) {
            this.li.Cs(t);
          }),
          (fl.prototype.isLocalQueryTarget = function (t) {
            return this.li.activeTargetIds.has(t);
          }),
          (fl.prototype.clearQueryState = function (t) {
            delete this.fi[t];
          }),
          (fl.prototype.getAllActiveQueryTargets = function () {
            return this.li.activeTargetIds;
          }),
          (fl.prototype.isActiveQueryTarget = function (t) {
            return this.li.activeTargetIds.has(t);
          }),
          (fl.prototype.start = function () {
            return (this.li = new Zh()), Promise.resolve();
          }),
          (fl.prototype.handleUserChange = function (t, e, n) {}),
          (fl.prototype.setOnlineState = function (t) {}),
          (fl.prototype.shutdown = function () {}),
          (fl.prototype.writeSequenceNumber = function (t) {}),
          (fl.prototype.notifyBundleLoaded = function () {}),
          fl),
        nl =
          ((ll.prototype.di = function (t) {}),
          (ll.prototype.shutdown = function () {}),
          ll),
        rl =
          ((hl.prototype.di = function (t) {
            this.gi.push(t);
          }),
          (hl.prototype.shutdown = function () {
            window.removeEventListener("online", this.wi),
              window.removeEventListener("offline", this.mi);
          }),
          (hl.prototype.pi = function () {
            window.addEventListener("online", this.wi),
              window.addEventListener("offline", this.mi);
          }),
          (hl.prototype._i = function () {
            Br(
              "ConnectivityMonitor",
              "Network connectivity changed: AVAILABLE"
            );
            for (var t = 0, e = this.gi; t < e.length; t++) (0, e[t])(0);
          }),
          (hl.prototype.yi = function () {
            Br(
              "ConnectivityMonitor",
              "Network connectivity changed: UNAVAILABLE"
            );
            for (var t = 0, e = this.gi; t < e.length; t++) (0, e[t])(1);
          }),
          (hl.yt = function () {
            return (
              "undefined" != typeof window &&
              void 0 !== window.addEventListener &&
              void 0 !== window.removeEventListener
            );
          }),
          hl),
        il = {
          BatchGetDocuments: "batchGet",
          Commit: "commit",
          RunQuery: "runQuery",
        },
        ol =
          ((cl.prototype.Ii = function (t) {
            this.Ai = t;
          }),
          (cl.prototype.Ri = function (t) {
            this.bi = t;
          }),
          (cl.prototype.onMessage = function (t) {
            this.vi = t;
          }),
          (cl.prototype.close = function () {
            this.Ti();
          }),
          (cl.prototype.send = function (t) {
            this.Ei(t);
          }),
          (cl.prototype.Pi = function () {
            this.Ai();
          }),
          (cl.prototype.Vi = function (t) {
            this.bi(t);
          }),
          (cl.prototype.Si = function (t) {
            this.vi(t);
          }),
          cl),
        sl =
          ((ul.prototype.Ni = function (e, t, n, r) {
            var i = this.xi(e, t);
            Br("RestConnection", "Sending: ", i, n);
            t = {};
            return (
              this.Fi(t, r),
              this.ki(e, i, t, n).then(
                function (t) {
                  return Br("RestConnection", "Received: ", t), t;
                },
                function (t) {
                  throw (
                    (Kr(
                      "RestConnection",
                      e + " failed with error: ",
                      t,
                      "url: ",
                      i,
                      "request:",
                      n
                    ),
                    t)
                  );
                }
              )
            );
          }),
          (ul.prototype.$i = function (t, e, n, r) {
            return this.Ni(t, e, n, r);
          }),
          (ul.prototype.Fi = function (t, e) {
            if (
              ((t["X-Goog-Api-Client"] = "gl-js/ fire/8.9.0"),
              (t["Content-Type"] = "text/plain"),
              this.databaseInfo.appId &&
                (t["X-Firebase-GMPID"] = this.databaseInfo.appId),
              e)
            )
              for (var n in e.authHeaders)
                e.authHeaders.hasOwnProperty(n) && (t[n] = e.authHeaders[n]);
          }),
          (ul.prototype.xi = function (t, e) {
            return this.Di + "/v1/" + e + ":" + il[t];
          }),
          n(al, (Wh = ul)),
          (al.prototype.ki = function (u, e, n, r) {
            return new Promise(function (o, s) {
              var a = new xr();
              a.listenOnce(Ar.COMPLETE, function () {
                try {
                  switch (a.getLastErrorCode()) {
                    case Sr.NO_ERROR:
                      var t = a.getResponseJson();
                      Br("Connection", "XHR received:", JSON.stringify(t)),
                        o(t);
                      break;
                    case Sr.TIMEOUT:
                      Br("Connection", 'RPC "' + u + '" timed out'),
                        s(new Fr(Mr.DEADLINE_EXCEEDED, "Request time out"));
                      break;
                    case Sr.HTTP_ERROR:
                      var e,
                        n,
                        r = a.getStatus();
                      Br(
                        "Connection",
                        'RPC "' + u + '" failed with status:',
                        r,
                        "response text:",
                        a.getResponseText()
                      ),
                        0 < r
                          ? (e = a.getResponseJson().error) &&
                            e.status &&
                            e.message
                            ? ((i = e.status.toLowerCase().replace(/_/g, "-")),
                              (n =
                                0 <= Object.values(Mr).indexOf(i)
                                  ? i
                                  : Mr.UNKNOWN),
                              s(new Fr(n, e.message)))
                            : s(
                                new Fr(
                                  Mr.UNKNOWN,
                                  "Server responded with status " +
                                    a.getStatus()
                                )
                              )
                          : s(new Fr(Mr.UNAVAILABLE, "Connection failed."));
                      break;
                    default:
                      Qr();
                  }
                } finally {
                  Br("Connection", 'RPC "' + u + '" completed.');
                }
                var i;
              });
              var t = JSON.stringify(r);
              a.send(e, "POST", t, n, 15);
            });
          }),
          (al.prototype.Oi = function (t, e) {
            var n,
              r = [
                this.Di,
                "/",
                "google.firestore.v1.Firestore",
                "/",
                t,
                "/channel",
              ],
              i = new wr(),
              o = _r(),
              t = {
                httpSessionIdParam: "gsessionid",
                initMessageHeaders: {},
                messageUrlParams: {
                  database:
                    "projects/" +
                    this.databaseId.projectId +
                    "/databases/" +
                    this.databaseId.database,
                },
                sendRawJson: !0,
                supportsCrossDomainXhr: !0,
                internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 },
                forceLongPolling: this.forceLongPolling,
                detectBufferingProxy: this.autoDetectLongPolling,
              };
            this.useFetchStreams && (t.xmlHttpFactory = new kr({})),
              this.Fi(t.initMessageHeaders, e),
              ("undefined" != typeof window &&
                (window.cordova || window.phonegap || window.PhoneGap) &&
                /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(
                  h()
                )) ||
                ("object" == typeof navigator &&
                  "ReactNative" === navigator.product) ||
                0 <= h().indexOf("Electron/") ||
                0 <= (n = h()).indexOf("MSIE ") ||
                0 <= n.indexOf("Trident/") ||
                0 <= h().indexOf("MSAppHost/") ||
                ("object" ==
                  typeof (n =
                    "object" == typeof chrome
                      ? chrome.runtime
                      : "object" == typeof browser
                      ? browser.runtime
                      : void 0) &&
                  void 0 !== n.id) ||
                (t.httpHeadersOverwriteParam = "$httpHeaders");
            r = r.join("");
            Br("Connection", "Creating WebChannel: " + r, t);
            var s = i.createWebChannel(r, t),
              a = !1,
              u = !1,
              c = new ol({
                Ei: function (t) {
                  u
                    ? Br(
                        "Connection",
                        "Not sending because WebChannel is closed:",
                        t
                      )
                    : (a ||
                        (Br("Connection", "Opening WebChannel transport."),
                        s.open(),
                        (a = !0)),
                      Br("Connection", "WebChannel sending:", t),
                      s.send(t));
                },
                Ti: function () {
                  return s.close();
                },
              }),
              t = function (t, e, n) {
                t.listen(e, function (t) {
                  try {
                    n(t);
                  } catch (t) {
                    setTimeout(function () {
                      throw t;
                    }, 0);
                  }
                });
              };
            return (
              t(s, Rr.EventType.OPEN, function () {
                u || Br("Connection", "WebChannel transport opened.");
              }),
              t(s, Rr.EventType.CLOSE, function () {
                u ||
                  ((u = !0),
                  Br("Connection", "WebChannel transport closed"),
                  c.Vi());
              }),
              t(s, Rr.EventType.ERROR, function (t) {
                u ||
                  ((u = !0),
                  Kr("Connection", "WebChannel transport errored:", t),
                  c.Vi(
                    new Fr(
                      Mr.UNAVAILABLE,
                      "The operation could not be completed"
                    )
                  ));
              }),
              t(s, Rr.EventType.MESSAGE, function (t) {
                var e, n, r, i;
                u ||
                  (Hr(!!(e = t.data[0])),
                  (n =
                    e.error ||
                    (null === (i = e[0]) || void 0 === i ? void 0 : i.error))
                    ? (Br("Connection", "WebChannel received error:", n),
                      (r = n.status),
                      (t = (function () {
                        var t = Ds[r];
                        if (void 0 !== t) return Ps(t);
                      })()),
                      (i = n.message),
                      void 0 === t &&
                        ((t = Mr.INTERNAL),
                        (i =
                          "Unknown error status: " +
                          r +
                          " with message " +
                          n.message)),
                      (u = !0),
                      c.Vi(new Fr(t, i)),
                      s.close())
                    : (Br("Connection", "WebChannel received:", e), c.Si(e)));
              }),
              t(o, Dr.STAT_EVENT, function (t) {
                t.stat === Nr
                  ? Br("Connection", "Detected buffering proxy")
                  : t.stat === Cr &&
                    Br("Connection", "Detected no buffering proxy");
              }),
              setTimeout(function () {
                c.Pi();
              }, 0),
              c
            );
          }),
          al);
      function al(t) {
        var e = this;
        return (
          ((e = Wh.call(this, t) || this).forceLongPolling =
            t.forceLongPolling),
          (e.autoDetectLongPolling = t.autoDetectLongPolling),
          (e.useFetchStreams = t.useFetchStreams),
          e
        );
      }
      function ul(t) {
        (this.databaseInfo = t), (this.databaseId = t.databaseId);
        var e = t.ssl ? "https" : "http";
        (this.Di = e + "://" + t.host),
          (this.Ci =
            "projects/" +
            this.databaseId.projectId +
            "/databases/" +
            this.databaseId.database +
            "/documents");
      }
      function cl(t) {
        (this.Ei = t.Ei), (this.Ti = t.Ti);
      }
      function hl() {
        var t = this;
        (this.wi = function () {
          return t._i();
        }),
          (this.mi = function () {
            return t.yi();
          }),
          (this.gi = []),
          this.pi();
      }
      function ll() {}
      function fl() {
        (this.li = new Zh()),
          (this.fi = {}),
          (this.onlineStateHandler = null),
          (this.sequenceNumberHandler = null);
      }
      function dl(t, e, n, r, i) {
        (this.window = t),
          (this.Se = e),
          (this.persistenceKey = n),
          (this.Ns = r),
          (this.syncEngine = null),
          (this.onlineStateHandler = null),
          (this.sequenceNumberHandler = null),
          (this.xs = this.Fs.bind(this)),
          (this.ks = new Ms(Yr)),
          (this.started = !1),
          (this.$s = []);
        n = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        (this.storage = this.window.localStorage),
          (this.currentUser = i),
          (this.Os = Qh(this.persistenceKey, this.Ns)),
          (this.Ms = "firestore_sequence_number_" + this.persistenceKey),
          (this.ks = this.ks.insert(this.Ns, new Zh())),
          (this.Ls = new RegExp("^firestore_clients_" + n + "_([^_]*)$")),
          (this.Bs = new RegExp(
            "^firestore_mutations_" + n + "_(\\d+)(?:_(.*))?$"
          )),
          (this.qs = new RegExp("^firestore_targets_" + n + "_(\\d+)$")),
          (this.Us = "firestore_online_state_" + this.persistenceKey),
          (this.Ks = "firestore_bundle_loaded_" + this.persistenceKey),
          this.window.addEventListener("storage", this.xs);
      }
      function pl() {
        this.activeTargetIds = Js;
      }
      function yl(t, e) {
        (this.clientId = t), (this.onlineState = e);
      }
      function gl(t, e) {
        (this.clientId = t), (this.activeTargetIds = e);
      }
      function ml(t, e, n) {
        (this.targetId = t), (this.state = e), (this.error = n);
      }
      function vl(t, e, n, r) {
        (this.user = t), (this.batchId = e), (this.state = n), (this.error = r);
      }
      function wl() {
        return "undefined" != typeof window ? window : null;
      }
      function bl() {
        return "undefined" != typeof document ? document : null;
      }
      function El(t) {
        return new pa(t, !0);
      }
      function Tl(t, e, n, r, i) {
        var o = this;
        (this.localStore = t),
          (this.datastore = e),
          (this.asyncQueue = n),
          (this.remoteSyncer = {}),
          (this.kr = []),
          (this.$r = new Map()),
          (this.Or = new Set()),
          (this.Mr = []),
          (this.Lr = i),
          this.Lr.di(function (t) {
            n.enqueueAndForget(function () {
              return y(o, void 0, void 0, function () {
                return g(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return Ql(this)
                        ? (Br(
                            "RemoteStore",
                            "Restarting streams for network reachability change."
                          ),
                          [
                            4,
                            (function (n) {
                              return y(this, void 0, void 0, function () {
                                var e;
                                return g(this, function (t) {
                                  switch (t.label) {
                                    case 0:
                                      return (e = n).Or.add(4), [4, Vl(e)];
                                    case 1:
                                      return (
                                        t.sent(),
                                        e.Br.set("Unknown"),
                                        e.Or.delete(4),
                                        [4, Fl(e)]
                                      );
                                    case 2:
                                      return t.sent(), [2];
                                  }
                                });
                              });
                            })(this),
                          ])
                        : [3, 2];
                    case 1:
                      t.sent(), (t.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            });
          }),
          (this.Br = new kl(n, r));
      }
      var Il,
        _l,
        Sl,
        Al =
          ((Ml.prototype.reset = function () {
            this.qi = 0;
          }),
          (Ml.prototype.Qi = function () {
            this.qi = this.Bi;
          }),
          (Ml.prototype.ji = function (t) {
            var e = this;
            this.cancel();
            var n = Math.floor(this.qi + this.Wi()),
              r = Math.max(0, Date.now() - this.Ki),
              i = Math.max(0, n - r);
            0 < i &&
              Br(
                "ExponentialBackoff",
                "Backing off for " +
                  i +
                  " ms (base delay: " +
                  this.qi +
                  " ms, delay with jitter: " +
                  n +
                  " ms, last attempt: " +
                  r +
                  " ms ago)"
              ),
              (this.Ui = this.Se.enqueueAfterDelay(
                this.timerId,
                i,
                function () {
                  return (e.Ki = Date.now()), t();
                }
              )),
              (this.qi *= this.Li),
              this.qi < this.Mi && (this.qi = this.Mi),
              this.qi > this.Bi && (this.qi = this.Bi);
          }),
          (Ml.prototype.Gi = function () {
            null !== this.Ui && (this.Ui.skipDelay(), (this.Ui = null));
          }),
          (Ml.prototype.cancel = function () {
            null !== this.Ui && (this.Ui.cancel(), (this.Ui = null));
          }),
          (Ml.prototype.Wi = function () {
            return (Math.random() - 0.5) * this.qi;
          }),
          Ml),
        _ =
          ((Pl.prototype.tr = function () {
            return 1 === this.state || 2 === this.state || 4 === this.state;
          }),
          (Pl.prototype.er = function () {
            return 2 === this.state;
          }),
          (Pl.prototype.start = function () {
            3 !== this.state ? this.auth() : this.nr();
          }),
          (Pl.prototype.stop = function () {
            return y(this, void 0, void 0, function () {
              return g(this, function (t) {
                switch (t.label) {
                  case 0:
                    return this.tr() ? [4, this.close(0)] : [3, 2];
                  case 1:
                    t.sent(), (t.label = 2);
                  case 2:
                    return [2];
                }
              });
            });
          }),
          (Pl.prototype.sr = function () {
            (this.state = 0), this.Zi.reset();
          }),
          (Pl.prototype.ir = function () {
            var t = this;
            this.er() &&
              null === this.Xi &&
              (this.Xi = this.Se.enqueueAfterDelay(this.zi, 6e4, function () {
                return t.rr();
              }));
          }),
          (Pl.prototype.cr = function (t) {
            this.ur(), this.stream.send(t);
          }),
          (Pl.prototype.rr = function () {
            return y(this, void 0, void 0, function () {
              return g(this, function (t) {
                return this.er() ? [2, this.close(0)] : [2];
              });
            });
          }),
          (Pl.prototype.ur = function () {
            this.Xi && (this.Xi.cancel(), (this.Xi = null));
          }),
          (Pl.prototype.close = function (e, n) {
            return y(this, void 0, void 0, function () {
              return g(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      this.ur(),
                      this.Zi.cancel(),
                      this.Yi++,
                      3 !== e
                        ? this.Zi.reset()
                        : n && n.code === Mr.RESOURCE_EXHAUSTED
                        ? (jr(n.toString()),
                          jr(
                            "Using maximum backoff delay to prevent overloading the backend."
                          ),
                          this.Zi.Qi())
                        : n &&
                          n.code === Mr.UNAUTHENTICATED &&
                          this.Ji.invalidateToken(),
                      null !== this.stream &&
                        (this.ar(), this.stream.close(), (this.stream = null)),
                      (this.state = e),
                      [4, this.listener.Ri(n)]
                    );
                  case 1:
                    return t.sent(), [2];
                }
              });
            });
          }),
          (Pl.prototype.ar = function () {}),
          (Pl.prototype.auth = function () {
            var n = this;
            this.state = 1;
            var t = this.hr(this.Yi),
              e = this.Yi;
            this.Ji.getToken().then(
              function (t) {
                n.Yi === e && n.lr(t);
              },
              function (e) {
                t(function () {
                  var t = new Fr(
                    Mr.UNKNOWN,
                    "Fetching auth token failed: " + e.message
                  );
                  return n.dr(t);
                });
              }
            );
          }),
          (Pl.prototype.lr = function (t) {
            var e = this,
              n = this.hr(this.Yi);
            (this.stream = this.wr(t)),
              this.stream.Ii(function () {
                n(function () {
                  return (e.state = 2), e.listener.Ii();
                });
              }),
              this.stream.Ri(function (t) {
                n(function () {
                  return e.dr(t);
                });
              }),
              this.stream.onMessage(function (t) {
                n(function () {
                  return e.onMessage(t);
                });
              });
          }),
          (Pl.prototype.nr = function () {
            var t = this;
            (this.state = 4),
              this.Zi.ji(function () {
                return y(t, void 0, void 0, function () {
                  return g(this, function (t) {
                    return (this.state = 0), this.start(), [2];
                  });
                });
              });
          }),
          (Pl.prototype.dr = function (t) {
            return (
              Br("PersistentStream", "close with error: " + t),
              (this.stream = null),
              this.close(3, t)
            );
          }),
          (Pl.prototype.hr = function (e) {
            var n = this;
            return function (t) {
              n.Se.enqueueAndForget(function () {
                return n.Yi === e
                  ? t()
                  : (Br(
                      "PersistentStream",
                      "stream callback skipped by getCloseGuardedDispatcher."
                    ),
                    Promise.resolve());
              });
            };
          }),
          Pl),
        Dl =
          (n(Ll, (Sl = _)),
          (Ll.prototype.wr = function (t) {
            return this.Hi.Oi("Listen", t);
          }),
          (Ll.prototype.onMessage = function (t) {
            this.Zi.reset();
            var e = (function (t, e) {
                if ("targetChange" in e) {
                  e.targetChange;
                  var n =
                      "NO_CHANGE" ===
                      (o = e.targetChange.targetChangeType || "NO_CHANGE")
                        ? 0
                        : "ADD" === o
                        ? 1
                        : "REMOVE" === o
                        ? 2
                        : "CURRENT" === o
                        ? 3
                        : "RESET" === o
                        ? 4
                        : Qr(),
                    r = e.targetChange.targetIds || [],
                    i =
                      ((s = e.targetChange.resumeToken),
                      t.I
                        ? (Hr(void 0 === s || "string" == typeof s),
                          li.fromBase64String(s || ""))
                        : (Hr(void 0 === s || s instanceof Uint8Array),
                          li.fromUint8Array(s || new Uint8Array()))),
                    o =
                      (a = e.targetChange.cause) &&
                      ((u = void 0 === (c = a).code ? Mr.UNKNOWN : Ps(c.code)),
                      new Fr(u, c.message || "")),
                    s = new ra(n, r, i, o || null);
                } else if ("documentChange" in e) {
                  e.documentChange,
                    (n = e.documentChange).document,
                    n.document.name,
                    n.document.updateTime;
                  var r = Ea(t, n.document.name),
                    i = ma(n.document.updateTime),
                    a = new Bi({ mapValue: { fields: n.document.fields } }),
                    u = ((o = Ki.newFoundDocument(r, i, a)), n.targetIds || []),
                    c = n.removedTargetIds || [];
                  s = new ea(u, c, o.key, o);
                } else if ("documentDelete" in e)
                  e.documentDelete,
                    (n = e.documentDelete).document,
                    (r = Ea(t, n.document)),
                    (i = n.readTime ? ma(n.readTime) : Zr.min()),
                    (a = Ki.newNoDocument(r, i)),
                    (o = n.removedTargetIds || []),
                    (s = new ea([], o, a.key, a));
                else if ("documentRemove" in e)
                  e.documentRemove,
                    (n = e.documentRemove).document,
                    (r = Ea(t, n.document)),
                    (i = n.removedTargetIds || []),
                    (s = new ea([], i, r, null));
                else {
                  if (!("filter" in e)) return Qr();
                  e.filter;
                  e = e.filter;
                  e.targetId,
                    (n = e.count || 0),
                    (r = new As(n)),
                    (i = e.targetId),
                    (s = new na(i, r));
                }
                return s;
              })(this.R, t),
              t = (function (t) {
                if (!("targetChange" in t)) return Zr.min();
                t = t.targetChange;
                return (!t.targetIds || !t.targetIds.length) && t.readTime
                  ? ma(t.readTime)
                  : Zr.min();
              })(t);
            return this.listener._r(e, t);
          }),
          (Ll.prototype.mr = function (t) {
            var e,
              n,
              r,
              i = {};
            (i.database = _a(this.R)),
              (i.addTarget =
                ((e = this.R),
                ((r = Yi((r = (n = t).target))
                  ? { documents: ka(e, r) }
                  : { query: Ra(e, r) }).targetId = n.targetId),
                0 < n.resumeToken.approximateByteSize()
                  ? (r.resumeToken = ga(e, n.resumeToken))
                  : 0 < n.snapshotVersion.compareTo(Zr.min()) &&
                    (r.readTime = ya(e, n.snapshotVersion.toTimestamp())),
                r));
            var o,
              t =
                (this.R,
                (o = t),
                null ==
                (t = (function () {
                  switch (o.purpose) {
                    case 0:
                      return null;
                    case 1:
                      return "existence-filter-mismatch";
                    case 2:
                      return "limbo-document";
                    default:
                      return Qr();
                  }
                })())
                  ? null
                  : { "goog-listen-tags": t });
            t && (i.labels = t), this.cr(i);
          }),
          (Ll.prototype.yr = function (t) {
            var e = {};
            (e.database = _a(this.R)), (e.removeTarget = t), this.cr(e);
          }),
          Ll),
        Nl =
          (n(Ol, (_l = _)),
          Object.defineProperty(Ol.prototype, "pr", {
            get: function () {
              return this.gr;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (Ol.prototype.start = function () {
            (this.gr = !1),
              (this.lastStreamToken = void 0),
              _l.prototype.start.call(this);
          }),
          (Ol.prototype.ar = function () {
            this.gr && this.Er([]);
          }),
          (Ol.prototype.wr = function (t) {
            return this.Hi.Oi("Write", t);
          }),
          (Ol.prototype.onMessage = function (t) {
            if (
              (Hr(!!t.streamToken),
              (this.lastStreamToken = t.streamToken),
              this.gr)
            ) {
              this.Zi.reset();
              var e =
                  ((n = t.writeResults),
                  (r = t.commitTime),
                  n && 0 < n.length
                    ? (Hr(void 0 !== r),
                      n.map(function (t) {
                        return (
                          (n = r),
                          (t = (e = t).updateTime
                            ? ma(e.updateTime)
                            : ma(n)).isEqual(Zr.min()) && (t = ma(n)),
                          new cs(t, e.transformResults || [])
                        );
                        var e, n;
                      }))
                    : []),
                n = ma(t.commitTime);
              return this.listener.Tr(n, e);
            }
            var n, r;
            return (
              Hr(!t.writeResults || 0 === t.writeResults.length),
              (this.gr = !0),
              this.listener.Ir()
            );
          }),
          (Ol.prototype.Ar = function () {
            var t = {};
            (t.database = _a(this.R)), this.cr(t);
          }),
          (Ol.prototype.Er = function (t) {
            var e = this,
              t = {
                streamToken: this.lastStreamToken,
                writes: t.map(function (t) {
                  return Na(e.R, t);
                }),
              };
            this.cr(t);
          }),
          Ol),
        Cl =
          (n(xl, (Il = function () {})),
          (xl.prototype.br = function () {
            if (this.Rr)
              throw new Fr(
                Mr.FAILED_PRECONDITION,
                "The client has already been terminated."
              );
          }),
          (xl.prototype.Ni = function (e, n, r) {
            var i = this;
            return (
              this.br(),
              this.credentials
                .getToken()
                .then(function (t) {
                  return i.Hi.Ni(e, n, r, t);
                })
                .catch(function (t) {
                  throw "FirebaseError" === t.name
                    ? (t.code === Mr.UNAUTHENTICATED &&
                        i.credentials.invalidateToken(),
                      t)
                    : new Fr(Mr.UNKNOWN, t.toString());
                })
            );
          }),
          (xl.prototype.$i = function (e, n, r) {
            var i = this;
            return (
              this.br(),
              this.credentials
                .getToken()
                .then(function (t) {
                  return i.Hi.$i(e, n, r, t);
                })
                .catch(function (t) {
                  throw "FirebaseError" === t.name
                    ? (t.code === Mr.UNAUTHENTICATED &&
                        i.credentials.invalidateToken(),
                      t)
                    : new Fr(Mr.UNKNOWN, t.toString());
                })
            );
          }),
          (xl.prototype.terminate = function () {
            this.Rr = !0;
          }),
          xl),
        kl =
          ((Rl.prototype.Sr = function () {
            var t = this;
            0 === this.vr &&
              (this.Dr("Unknown"),
              (this.Pr = this.asyncQueue.enqueueAfterDelay(
                "online_state_timeout",
                1e4,
                function () {
                  return (
                    (t.Pr = null),
                    t.Cr("Backend didn't respond within 10 seconds."),
                    t.Dr("Offline"),
                    Promise.resolve()
                  );
                }
              )));
          }),
          (Rl.prototype.Nr = function (t) {
            "Online" === this.state
              ? this.Dr("Unknown")
              : (this.vr++,
                1 <= this.vr &&
                  (this.Fr(),
                  this.Cr(
                    "Connection failed 1 times. Most recent error: " +
                      t.toString()
                  ),
                  this.Dr("Offline")));
          }),
          (Rl.prototype.set = function (t) {
            this.Fr(),
              (this.vr = 0),
              "Online" === t && (this.Vr = !1),
              this.Dr(t);
          }),
          (Rl.prototype.Dr = function (t) {
            t !== this.state && ((this.state = t), this.onlineStateHandler(t));
          }),
          (Rl.prototype.Cr = function (t) {
            t =
              "Could not reach Cloud Firestore backend. " +
              t +
              "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
            this.Vr ? (jr(t), (this.Vr = !1)) : Br("OnlineStateTracker", t);
          }),
          (Rl.prototype.Fr = function () {
            null !== this.Pr && (this.Pr.cancel(), (this.Pr = null));
          }),
          Rl);
      function Rl(t, e) {
        (this.asyncQueue = t),
          (this.onlineStateHandler = e),
          (this.state = "Unknown"),
          (this.vr = 0),
          (this.Pr = null),
          (this.Vr = !0);
      }
      function xl(t, e, n) {
        var r = this;
        return (
          ((r = Il.call(this) || this).credentials = t),
          (r.Hi = e),
          (r.R = n),
          (r.Rr = !1),
          r
        );
      }
      function Ol(t, e, n, r, i) {
        var o = this;
        return (
          ((o =
            _l.call(
              this,
              t,
              "write_stream_connection_backoff",
              "write_stream_idle",
              e,
              n,
              i
            ) || this).R = r),
          (o.gr = !1),
          o
        );
      }
      function Ll(t, e, n, r, i) {
        var o = this;
        return (
          ((o =
            Sl.call(
              this,
              t,
              "listen_stream_connection_backoff",
              "listen_stream_idle",
              e,
              n,
              i
            ) || this).R = r),
          o
        );
      }
      function Pl(t, e, n, r, i, o) {
        (this.Se = t),
          (this.zi = n),
          (this.Hi = r),
          (this.Ji = i),
          (this.listener = o),
          (this.state = 0),
          (this.Yi = 0),
          (this.Xi = null),
          (this.stream = null),
          (this.Zi = new Al(t, e));
      }
      function Ml(t, e, n, r, i) {
        void 0 === n && (n = 1e3),
          void 0 === r && (r = 1.5),
          void 0 === i && (i = 6e4),
          (this.Se = t),
          (this.timerId = e),
          (this.Mi = n),
          (this.Li = r),
          (this.Bi = i),
          (this.qi = 0),
          (this.Ui = null),
          (this.Ki = Date.now()),
          this.reset();
      }
      function Fl(r) {
        return y(this, void 0, void 0, function () {
          var e, n;
          return g(this, function (t) {
            switch (t.label) {
              case 0:
                if (!Ql(r)) return [3, 4];
                (e = 0), (n = r.Mr), (t.label = 1);
              case 1:
                return e < n.length ? [4, (0, n[e])(!0)] : [3, 4];
              case 2:
                t.sent(), (t.label = 3);
              case 3:
                return e++, [3, 1];
              case 4:
                return [2];
            }
          });
        });
      }
      function Vl(r) {
        return y(this, void 0, void 0, function () {
          var e, n;
          return g(this, function (t) {
            switch (t.label) {
              case 0:
                (e = 0), (n = r.Mr), (t.label = 1);
              case 1:
                return e < n.length ? [4, (0, n[e])(!1)] : [3, 4];
              case 2:
                t.sent(), (t.label = 3);
              case 3:
                return e++, [3, 1];
              case 4:
                return [2];
            }
          });
        });
      }
      function Ul(t, e) {
        t.$r.has(e.targetId) ||
          (t.$r.set(e.targetId, e), Gl(t) ? Kl(t) : tf(t).er() && Bl(t, e));
      }
      function ql(t, e) {
        var n = t,
          t = tf(n);
        n.$r.delete(e),
          t.er() && jl(n, e),
          0 === n.$r.size && (t.er() ? t.ir() : Ql(n) && n.Br.set("Unknown"));
      }
      function Bl(t, e) {
        t.qr.U(e.targetId), tf(t).mr(e);
      }
      function jl(t, e) {
        t.qr.U(e), tf(t).yr(e);
      }
      function Kl(e) {
        (e.qr = new oa({
          getRemoteKeysForTarget: function (t) {
            return e.remoteSyncer.getRemoteKeysForTarget(t);
          },
          lt: function (t) {
            return e.$r.get(t) || null;
          },
        })),
          tf(e).start(),
          e.Br.Sr();
      }
      function Gl(t) {
        return Ql(t) && !tf(t).tr() && 0 < t.$r.size;
      }
      function Ql(t) {
        return 0 === t.Or.size;
      }
      function Hl(t) {
        t.qr = void 0;
      }
      function zl(s, a, u) {
        return y(this, void 0, void 0, function () {
          var n, o;
          return g(this, function (t) {
            switch (t.label) {
              case 0:
                if (
                  (s.Br.set("Online"),
                  !(a instanceof ra && 2 === a.state && a.cause))
                )
                  return [3, 6];
                t.label = 1;
              case 1:
                return (
                  t.trys.push([1, 3, , 5]),
                  [
                    4,
                    (function (o, s) {
                      return y(this, void 0, void 0, function () {
                        var e, n, r, i;
                        return g(this, function (t) {
                          switch (t.label) {
                            case 0:
                              (e = s.cause),
                                (n = 0),
                                (r = s.targetIds),
                                (t.label = 1);
                            case 1:
                              return n < r.length
                                ? ((i = r[n]),
                                  o.$r.has(i)
                                    ? [4, o.remoteSyncer.rejectListen(i, e)]
                                    : [3, 3])
                                : [3, 5];
                            case 2:
                              t.sent(),
                                o.$r.delete(i),
                                o.qr.removeTarget(i),
                                (t.label = 3);
                            case 3:
                              t.label = 4;
                            case 4:
                              return n++, [3, 1];
                            case 5:
                              return [2];
                          }
                        });
                      });
                    })(s, a),
                  ]
                );
              case 2:
                return t.sent(), [3, 5];
              case 3:
                return (
                  (n = t.sent()),
                  Br(
                    "RemoteStore",
                    "Failed to remove targets %s: %s ",
                    a.targetIds.join(","),
                    n
                  ),
                  [4, Wl(s, n)]
                );
              case 4:
                return t.sent(), [3, 5];
              case 5:
                return [3, 13];
              case 6:
                if (
                  (a instanceof ea
                    ? s.qr.X(a)
                    : a instanceof na
                    ? s.qr.rt(a)
                    : s.qr.et(a),
                  u.isEqual(Zr.min()))
                )
                  return [3, 13];
                t.label = 7;
              case 7:
                return t.trys.push([7, 11, , 13]), [4, fh(s.localStore)];
              case 8:
                return (
                  (o = t.sent()),
                  0 <= u.compareTo(o)
                    ? [
                        4,
                        ((i = u),
                        (e = (r = s).qr.ut(i)).targetChanges.forEach(function (
                          t,
                          e
                        ) {
                          var n;
                          0 < t.resumeToken.approximateByteSize() &&
                            (n = r.$r.get(e)) &&
                            r.$r.set(e, n.withResumeToken(t.resumeToken, i));
                        }),
                        e.targetMismatches.forEach(function (t) {
                          var e = r.$r.get(t);
                          e &&
                            (r.$r.set(
                              t,
                              e.withResumeToken(
                                li.EMPTY_BYTE_STRING,
                                e.snapshotVersion
                              )
                            ),
                            jl(r, t),
                            (e = new Ou(e.target, t, 1, e.sequenceNumber)),
                            Bl(r, e));
                        }),
                        r.remoteSyncer.applyRemoteEvent(e)),
                      ]
                    : [3, 10]
                );
              case 9:
                t.sent(), (t.label = 10);
              case 10:
                return [3, 13];
              case 11:
                return (
                  Br(
                    "RemoteStore",
                    "Failed to raise snapshot:",
                    (o = t.sent())
                  ),
                  [4, Wl(s, o)]
                );
              case 12:
                return t.sent(), [3, 13];
              case 13:
                return [2];
            }
            var r, i, e;
          });
        });
      }
      function Wl(n, r, i) {
        return y(this, void 0, void 0, function () {
          var e = this;
          return g(this, function (t) {
            switch (t.label) {
              case 0:
                if (!Eu(r)) throw r;
                return n.Or.add(1), [4, Vl(n)];
              case 1:
                return (
                  t.sent(),
                  n.Br.set("Offline"),
                  (i =
                    i ||
                    function () {
                      return fh(n.localStore);
                    }),
                  n.asyncQueue.enqueueRetryable(function () {
                    return y(e, void 0, void 0, function () {
                      return g(this, function (t) {
                        switch (t.label) {
                          case 0:
                            return (
                              Br("RemoteStore", "Retrying IndexedDB access"),
                              [4, i()]
                            );
                          case 1:
                            return t.sent(), n.Or.delete(1), [4, Fl(n)];
                          case 2:
                            return t.sent(), [2];
                        }
                      });
                    });
                  }),
                  [2]
                );
            }
          });
        });
      }
      function Yl(e, n) {
        return n().catch(function (t) {
          return Wl(e, t, n);
        });
      }
      function Xl(u) {
        return y(this, void 0, void 0, function () {
          var i, o, s, a;
          return g(this, function (t) {
            switch (t.label) {
              case 0:
                (o = ef((i = u))),
                  (s = 0 < i.kr.length ? i.kr[i.kr.length - 1].batchId : -1),
                  (t.label = 1);
              case 1:
                if (!(Ql(i) && i.kr.length < 10)) return [3, 7];
                t.label = 2;
              case 2:
                return (
                  t.trys.push([2, 4, , 6]),
                  [
                    4,
                    ((e = i.localStore),
                    (n = s),
                    (r = e).persistence.runTransaction(
                      "Get next mutation batch",
                      "readonly",
                      function (t) {
                        return (
                          void 0 === n && (n = -1),
                          r._n.getNextMutationBatchAfterBatchId(t, n)
                        );
                      }
                    )),
                  ]
                );
              case 3:
                return null === (a = t.sent())
                  ? (0 === i.kr.length && o.ir(), [3, 7])
                  : ((s = a.batchId),
                    (function (t, e) {
                      t.kr.push(e);
                      t = ef(t);
                      t.er() && t.pr && t.Er(e.mutations);
                    })(i, a),
                    [3, 6]);
              case 4:
                return (a = t.sent()), [4, Wl(i, a)];
              case 5:
                return t.sent(), [3, 6];
              case 6:
                return [3, 1];
              case 7:
                return $l(i) && Jl(i), [2];
            }
            var e, n, r;
          });
        });
      }
      function $l(t) {
        return Ql(t) && !ef(t).tr() && 0 < t.kr.length;
      }
      function Jl(t) {
        ef(t).start();
      }
      function Zl(n, r) {
        return y(this, void 0, void 0, function () {
          var e;
          return g(this, function (t) {
            switch (t.label) {
              case 0:
                return (e = n), r ? (e.Or.delete(2), [4, Fl(e)]) : [3, 2];
              case 1:
                return t.sent(), [3, 5];
              case 2:
                return r ? [3, 4] : (e.Or.add(2), [4, Vl(e)]);
              case 3:
                t.sent(), e.Br.set("Unknown"), (t.label = 4);
              case 4:
                t.label = 5;
              case 5:
                return [2];
            }
          });
        });
      }
      function tf(n) {
        var t,
          e,
          r,
          i = this;
        return (
          n.Ur ||
            ((n.Ur =
              ((t = n.datastore),
              (e = n.asyncQueue),
              (r = {
                Ii: function (n) {
                  return y(this, void 0, void 0, function () {
                    return g(this, function (t) {
                      return (
                        n.$r.forEach(function (t, e) {
                          Bl(n, t);
                        }),
                        [2]
                      );
                    });
                  });
                }.bind(null, n),
                Ri: function (e, n) {
                  return y(this, void 0, void 0, function () {
                    return g(this, function (t) {
                      return (
                        Hl(e),
                        Gl(e) ? (e.Br.Nr(n), Kl(e)) : e.Br.set("Unknown"),
                        [2]
                      );
                    });
                  });
                }.bind(null, n),
                _r: zl.bind(null, n),
              }),
              t.br(),
              new Dl(e, t.Hi, t.credentials, t.R, r))),
            n.Mr.push(function (e) {
              return y(i, void 0, void 0, function () {
                return g(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return e
                        ? (n.Ur.sr(),
                          Gl(n) ? Kl(n) : n.Br.set("Unknown"),
                          [3, 3])
                        : [3, 1];
                    case 1:
                      return [4, n.Ur.stop()];
                    case 2:
                      t.sent(), Hl(n), (t.label = 3);
                    case 3:
                      return [2];
                  }
                });
              });
            })),
          n.Ur
        );
      }
      function ef(n) {
        var t,
          e,
          r,
          i = this;
        return (
          n.Kr ||
            ((n.Kr =
              ((t = n.datastore),
              (e = n.asyncQueue),
              (r = {
                Ii: function (e) {
                  return y(this, void 0, void 0, function () {
                    return g(this, function (t) {
                      return ef(e).Ar(), [2];
                    });
                  });
                }.bind(null, n),
                Ri: function (e, n) {
                  return y(this, void 0, void 0, function () {
                    return g(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return n && ef(e).pr
                            ? [
                                4,
                                (function (r, i) {
                                  return y(this, void 0, void 0, function () {
                                    var e, n;
                                    return g(this, function (t) {
                                      switch (t.label) {
                                        case 0:
                                          return Ls((n = i.code)) &&
                                            n !== Mr.ABORTED
                                            ? ((e = r.kr.shift()),
                                              ef(r).sr(),
                                              [
                                                4,
                                                Yl(r, function () {
                                                  return r.remoteSyncer.rejectFailedWrite(
                                                    e.batchId,
                                                    i
                                                  );
                                                }),
                                              ])
                                            : [3, 3];
                                        case 1:
                                          return t.sent(), [4, Xl(r)];
                                        case 2:
                                          t.sent(), (t.label = 3);
                                        case 3:
                                          return [2];
                                      }
                                    });
                                  });
                                })(e, n),
                              ]
                            : [3, 2];
                        case 1:
                          t.sent(), (t.label = 2);
                        case 2:
                          return $l(e) && Jl(e), [2];
                      }
                    });
                  });
                }.bind(null, n),
                Ir: function (o) {
                  return y(this, void 0, void 0, function () {
                    var e, n, r, i;
                    return g(this, function (t) {
                      for (e = ef(o), n = 0, r = o.kr; n < r.length; n++)
                        (i = r[n]), e.Er(i.mutations);
                      return [2];
                    });
                  });
                }.bind(null, n),
                Tr: function (r, i, o) {
                  return y(this, void 0, void 0, function () {
                    var e, n;
                    return g(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return (
                            (e = r.kr.shift()),
                            (n = xu.from(e, i, o)),
                            [
                              4,
                              Yl(r, function () {
                                return r.remoteSyncer.applySuccessfulWrite(n);
                              }),
                            ]
                          );
                        case 1:
                          return t.sent(), [4, Xl(r)];
                        case 2:
                          return t.sent(), [2];
                      }
                    });
                  });
                }.bind(null, n),
              }),
              t.br(),
              new Nl(e, t.Hi, t.credentials, t.R, r))),
            n.Mr.push(function (e) {
              return y(i, void 0, void 0, function () {
                return g(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return e ? (n.Kr.sr(), [4, Xl(n)]) : [3, 2];
                    case 1:
                      return t.sent(), [3, 4];
                    case 2:
                      return [4, n.Kr.stop()];
                    case 3:
                      t.sent(),
                        0 < n.kr.length &&
                          (Br(
                            "RemoteStore",
                            "Stopping write stream with " +
                              n.kr.length +
                              " pending writes"
                          ),
                          (n.kr = [])),
                        (t.label = 4);
                    case 4:
                      return [2];
                  }
                });
              });
            })),
          n.Kr
        );
      }
      var nf =
        ((rf.createAndSchedule = function (t, e, n, r, i) {
          i = new rf(t, e, Date.now() + n, r, i);
          return i.start(n), i;
        }),
        (rf.prototype.start = function (t) {
          var e = this;
          this.timerHandle = setTimeout(function () {
            return e.handleDelayElapsed();
          }, t);
        }),
        (rf.prototype.skipDelay = function () {
          return this.handleDelayElapsed();
        }),
        (rf.prototype.cancel = function (t) {
          null !== this.timerHandle &&
            (this.clearTimeout(),
            this.deferred.reject(
              new Fr(Mr.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))
            ));
        }),
        (rf.prototype.handleDelayElapsed = function () {
          var e = this;
          this.asyncQueue.enqueueAndForget(function () {
            return null !== e.timerHandle
              ? (e.clearTimeout(),
                e.op().then(function (t) {
                  return e.deferred.resolve(t);
                }))
              : Promise.resolve();
          });
        }),
        (rf.prototype.clearTimeout = function () {
          null !== this.timerHandle &&
            (this.removalCallback(this),
            clearTimeout(this.timerHandle),
            (this.timerHandle = null));
        }),
        rf);
      function rf(t, e, n, r, i) {
        (this.asyncQueue = t),
          (this.timerId = e),
          (this.targetTimeMs = n),
          (this.op = r),
          (this.removalCallback = i),
          (this.deferred = new cu()),
          (this.then = this.deferred.promise.then.bind(this.deferred.promise)),
          this.deferred.promise.catch(function (t) {});
      }
      function of(t, e) {
        if ((jr("AsyncQueue", e + ": " + t), Eu(t)))
          return new Fr(Mr.UNAVAILABLE, e + ": " + t);
        throw t;
      }
      function sf() {
        (this.queries = new Pc(Uo, Vo)),
          (this.onlineState = "Unknown"),
          (this.Gr = new Set());
      }
      var af =
          ((df.emptySet = function (t) {
            return new df(t.comparator);
          }),
          (df.prototype.has = function (t) {
            return null != this.keyedMap.get(t);
          }),
          (df.prototype.get = function (t) {
            return this.keyedMap.get(t);
          }),
          (df.prototype.first = function () {
            return this.sortedSet.minKey();
          }),
          (df.prototype.last = function () {
            return this.sortedSet.maxKey();
          }),
          (df.prototype.isEmpty = function () {
            return this.sortedSet.isEmpty();
          }),
          (df.prototype.indexOf = function (t) {
            t = this.keyedMap.get(t);
            return t ? this.sortedSet.indexOf(t) : -1;
          }),
          Object.defineProperty(df.prototype, "size", {
            get: function () {
              return this.sortedSet.size;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (df.prototype.forEach = function (n) {
            this.sortedSet.inorderTraversal(function (t, e) {
              return n(t), !1;
            });
          }),
          (df.prototype.add = function (t) {
            var e = this.delete(t.key);
            return e.copy(
              e.keyedMap.insert(t.key, t),
              e.sortedSet.insert(t, null)
            );
          }),
          (df.prototype.delete = function (t) {
            var e = this.get(t);
            return e
              ? this.copy(this.keyedMap.remove(t), this.sortedSet.remove(e))
              : this;
          }),
          (df.prototype.isEqual = function (t) {
            if (!(t instanceof df)) return !1;
            if (this.size !== t.size) return !1;
            for (
              var e = this.sortedSet.getIterator(),
                n = t.sortedSet.getIterator();
              e.hasNext();

            ) {
              var r = e.getNext().key,
                i = n.getNext().key;
              if (!r.isEqual(i)) return !1;
            }
            return !0;
          }),
          (df.prototype.toString = function () {
            var e = [];
            return (
              this.forEach(function (t) {
                e.push(t.toString());
              }),
              0 === e.length
                ? "DocumentSet ()"
                : "DocumentSet (\n  " + e.join("  \n") + "\n)"
            );
          }),
          (df.prototype.copy = function (t, e) {
            var n = new df();
            return (
              (n.comparator = this.comparator),
              (n.keyedMap = t),
              (n.sortedSet = e),
              n
            );
          }),
          df),
        uf =
          ((ff.prototype.track = function (t) {
            var e = t.doc.key,
              n = this.Qr.get(e);
            !n || (0 !== t.type && 3 === n.type)
              ? (this.Qr = this.Qr.insert(e, t))
              : 3 === t.type && 1 !== n.type
              ? (this.Qr = this.Qr.insert(e, { type: n.type, doc: t.doc }))
              : 2 === t.type && 2 === n.type
              ? (this.Qr = this.Qr.insert(e, { type: 2, doc: t.doc }))
              : 2 === t.type && 0 === n.type
              ? (this.Qr = this.Qr.insert(e, { type: 0, doc: t.doc }))
              : 1 === t.type && 0 === n.type
              ? (this.Qr = this.Qr.remove(e))
              : 1 === t.type && 2 === n.type
              ? (this.Qr = this.Qr.insert(e, { type: 1, doc: n.doc }))
              : 0 === t.type && 1 === n.type
              ? (this.Qr = this.Qr.insert(e, { type: 2, doc: t.doc }))
              : Qr();
          }),
          (ff.prototype.jr = function () {
            var n = [];
            return (
              this.Qr.inorderTraversal(function (t, e) {
                n.push(e);
              }),
              n
            );
          }),
          ff),
        cf =
          ((lf.fromInitialDocuments = function (t, e, n, r) {
            var i = [];
            return (
              e.forEach(function (t) {
                i.push({ type: 0, doc: t });
              }),
              new lf(t, e, af.emptySet(e), i, n, r, !0, !1)
            );
          }),
          Object.defineProperty(lf.prototype, "hasPendingWrites", {
            get: function () {
              return !this.mutatedKeys.isEmpty();
            },
            enumerable: !1,
            configurable: !0,
          }),
          (lf.prototype.isEqual = function (t) {
            if (
              !(
                this.fromCache === t.fromCache &&
                this.syncStateChanged === t.syncStateChanged &&
                this.mutatedKeys.isEqual(t.mutatedKeys) &&
                Vo(this.query, t.query) &&
                this.docs.isEqual(t.docs) &&
                this.oldDocs.isEqual(t.oldDocs)
              )
            )
              return !1;
            var e = this.docChanges,
              n = t.docChanges;
            if (e.length !== n.length) return !1;
            for (var r = 0; r < e.length; r++)
              if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc))
                return !1;
            return !0;
          }),
          lf),
        hf = function () {
          (this.Wr = void 0), (this.listeners = []);
        };
      function lf(t, e, n, r, i, o, s, a) {
        (this.query = t),
          (this.docs = e),
          (this.oldDocs = n),
          (this.docChanges = r),
          (this.mutatedKeys = i),
          (this.fromCache = o),
          (this.syncStateChanged = s),
          (this.excludesMetadataChanges = a);
      }
      function ff() {
        this.Qr = new Ms(Ai.comparator);
      }
      function df(n) {
        (this.comparator = n
          ? function (t, e) {
              return n(t, e) || Ai.comparator(t.key, e.key);
            }
          : function (t, e) {
              return Ai.comparator(t.key, e.key);
            }),
          (this.keyedMap = Ws),
          (this.sortedSet = new Ms(this.comparator));
      }
      function pf(s, a) {
        return y(this, void 0, void 0, function () {
          var e, n, r, i, o;
          return g(this, function (t) {
            switch (t.label) {
              case 0:
                if (
                  ((e = s),
                  (n = a.query),
                  (r = !1),
                  (i = e.queries.get(n)) || ((r = !0), (i = new hf())),
                  !r)
                )
                  return [3, 4];
                t.label = 1;
              case 1:
                return t.trys.push([1, 3, , 4]), (o = i), [4, e.onListen(n)];
              case 2:
                return (o.Wr = t.sent()), [3, 4];
              case 3:
                return (
                  (o = t.sent()),
                  (o = of(
                    o,
                    "Initialization of query '" + qo(a.query) + "' failed"
                  )),
                  [2, void a.onError(o)]
                );
              case 4:
                return (
                  e.queries.set(n, i),
                  i.listeners.push(a),
                  a.zr(e.onlineState),
                  i.Wr && a.Hr(i.Wr) && gf(e),
                  [2]
                );
            }
          });
        });
      }
      function yf(s, a) {
        return y(this, void 0, void 0, function () {
          var e, n, r, i, o;
          return g(this, function (t) {
            return (
              (e = s),
              (n = a.query),
              (r = !1),
              (i = e.queries.get(n)) &&
                0 <= (o = i.listeners.indexOf(a)) &&
                (i.listeners.splice(o, 1), (r = 0 === i.listeners.length)),
              r ? [2, (e.queries.delete(n), e.onUnlisten(n))] : [2]
            );
          });
        });
      }
      function gf(t) {
        t.Gr.forEach(function (t) {
          t.next();
        });
      }
      var mf =
          ((_f.prototype.Hr = function (t) {
            if (!this.options.includeMetadataChanges) {
              for (var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
                var i = r[n];
                3 !== i.type && e.push(i);
              }
              t = new cf(
                t.query,
                t.docs,
                t.oldDocs,
                e,
                t.mutatedKeys,
                t.fromCache,
                t.syncStateChanged,
                !0
              );
            }
            var o = !1;
            return (
              this.Yr
                ? this.Zr(t) && (this.Jr.next(t), (o = !0))
                : this.eo(t, this.onlineState) && (this.no(t), (o = !0)),
              (this.Xr = t),
              o
            );
          }),
          (_f.prototype.onError = function (t) {
            this.Jr.error(t);
          }),
          (_f.prototype.zr = function (t) {
            this.onlineState = t;
            var e = !1;
            return (
              this.Xr &&
                !this.Yr &&
                this.eo(this.Xr, t) &&
                (this.no(this.Xr), (e = !0)),
              e
            );
          }),
          (_f.prototype.eo = function (t, e) {
            return (
              !t.fromCache ||
              !(
                (this.options.so && "Offline" !== e) ||
                (t.docs.isEmpty() && "Offline" !== e)
              )
            );
          }),
          (_f.prototype.Zr = function (t) {
            if (0 < t.docChanges.length) return !0;
            var e = this.Xr && this.Xr.hasPendingWrites !== t.hasPendingWrites;
            return (
              !(!t.syncStateChanged && !e) &&
              !0 === this.options.includeMetadataChanges
            );
          }),
          (_f.prototype.no = function (t) {
            (t = cf.fromInitialDocuments(
              t.query,
              t.docs,
              t.mutatedKeys,
              t.fromCache
            )),
              (this.Yr = !0),
              this.Jr.next(t);
          }),
          _f),
        vf =
          ((If.prototype.io = function () {
            return "metadata" in this.payload;
          }),
          If),
        wf =
          ((Tf.prototype.qn = function (t) {
            return Ea(this.R, t);
          }),
          (Tf.prototype.Un = function (t) {
            return t.metadata.exists
              ? Da(this.R, t.document, !1)
              : Ki.newNoDocument(
                  this.qn(t.metadata.name),
                  this.Kn(t.metadata.readTime)
                );
          }),
          (Tf.prototype.Kn = ma),
          Tf),
        bf =
          ((Ef.prototype.oo = function (t) {
            this.progress.bytesLoaded += t.byteLength;
            var e = this.progress.documentsLoaded;
            return (
              t.payload.namedQuery
                ? this.queries.push(t.payload.namedQuery)
                : t.payload.documentMetadata
                ? (this.documents.push({
                    metadata: t.payload.documentMetadata,
                  }),
                  t.payload.documentMetadata.exists || ++e)
                : t.payload.document &&
                  ((this.documents[this.documents.length - 1].document =
                    t.payload.document),
                  ++e),
              e !== this.progress.documentsLoaded
                ? ((this.progress.documentsLoaded = e),
                  Object.assign({}, this.progress))
                : null
            );
          }),
          (Ef.prototype.co = function (t) {
            for (
              var e = new Map(), n = new wf(this.R), r = 0, i = t;
              r < i.length;
              r++
            ) {
              var o = i[r];
              if (o.metadata.queries)
                for (
                  var s = n.qn(o.metadata.name), a = 0, u = o.metadata.queries;
                  a < u.length;
                  a++
                ) {
                  var c = u[a],
                    h = (e.get(c) || $s()).add(s);
                  e.set(c, h);
                }
            }
            return e;
          }),
          (Ef.prototype.complete = function () {
            return y(this, void 0, void 0, function () {
              var e, n, r, i;
              return g(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [
                      4,
                      (function (l, f, d, p) {
                        return y(this, void 0, void 0, function () {
                          var n, r, i, o, e, s, a, u, c, h;
                          return g(this, function (t) {
                            switch (t.label) {
                              case 0:
                                for (
                                  n = l, r = $s(), i = Qs, o = Ys, e = 0, s = d;
                                  e < s.length;
                                  e++
                                )
                                  (a = s[e]),
                                    (u = f.qn(a.metadata.name)),
                                    a.document && (r = r.add(u)),
                                    (i = i.insert(u, f.Un(a))),
                                    (o = o.insert(
                                      u,
                                      f.Kn(a.metadata.readTime)
                                    ));
                                return (
                                  (c = n.On.newChangeBuffer({
                                    trackRemovals: !0,
                                  })),
                                  [
                                    4,
                                    yh(
                                      n,
                                      Mo(
                                        Co(
                                          ai.fromString("__bundle__/docs/" + p)
                                        )
                                      )
                                    ),
                                  ]
                                );
                              case 1:
                                return (
                                  (h = t.sent()),
                                  [
                                    2,
                                    n.persistence.runTransaction(
                                      "Apply bundle documents",
                                      "readwrite",
                                      function (e) {
                                        return ph(e, c, i, Zr.min(), o)
                                          .next(function (t) {
                                            return c.apply(e), t;
                                          })
                                          .next(function (t) {
                                            return n.qe
                                              .removeMatchingKeysForTargetId(
                                                e,
                                                h.targetId
                                              )
                                              .next(function () {
                                                return n.qe.addMatchingKeys(
                                                  e,
                                                  r,
                                                  h.targetId
                                                );
                                              })
                                              .next(function () {
                                                return n.Mn.En(e, t);
                                              })
                                              .next(function () {
                                                return t;
                                              });
                                          });
                                      }
                                    ),
                                  ]
                                );
                            }
                          });
                        });
                      })(
                        this.localStore,
                        new wf(this.R),
                        this.documents,
                        this.ro.id
                      ),
                    ];
                  case 1:
                    (e = t.sent()),
                      (n = this.co(this.documents)),
                      (r = 0),
                      (i = this.queries),
                      (t.label = 2);
                  case 2:
                    return r < i.length
                      ? ((i = i[r]),
                        [
                          4,
                          (function (e, i, o) {
                            return (
                              void 0 === o && (o = $s()),
                              y(this, void 0, void 0, function () {
                                var n, r;
                                return g(this, function (t) {
                                  switch (t.label) {
                                    case 0:
                                      return [4, yh(e, Mo(zu(i.bundledQuery)))];
                                    case 1:
                                      return (
                                        (n = t.sent()),
                                        [
                                          2,
                                          (r = e).persistence.runTransaction(
                                            "Save named query",
                                            "readwrite",
                                            function (t) {
                                              var e = ma(i.readTime);
                                              if (
                                                0 <=
                                                n.snapshotVersion.compareTo(e)
                                              )
                                                return r.Ke.saveNamedQuery(
                                                  t,
                                                  i
                                                );
                                              e = n.withResumeToken(
                                                li.EMPTY_BYTE_STRING,
                                                e
                                              );
                                              return (
                                                (r.Fn = r.Fn.insert(
                                                  e.targetId,
                                                  e
                                                )),
                                                r.qe
                                                  .updateTargetData(t, e)
                                                  .next(function () {
                                                    return r.qe.removeMatchingKeysForTargetId(
                                                      t,
                                                      n.targetId
                                                    );
                                                  })
                                                  .next(function () {
                                                    return r.qe.addMatchingKeys(
                                                      t,
                                                      o,
                                                      n.targetId
                                                    );
                                                  })
                                                  .next(function () {
                                                    return r.Ke.saveNamedQuery(
                                                      t,
                                                      i
                                                    );
                                                  })
                                              );
                                            }
                                          ),
                                        ]
                                      );
                                  }
                                });
                              })
                            );
                          })(this.localStore, i, n.get(i.name)),
                        ])
                      : [3, 5];
                  case 3:
                    t.sent(), (t.label = 4);
                  case 4:
                    return r++, [3, 2];
                  case 5:
                    return [
                      2,
                      ((this.progress.taskState = "Success"),
                      new th(Object.assign({}, this.progress), e)),
                    ];
                }
              });
            });
          }),
          Ef);
      function Ef(t, e, n) {
        (this.ro = t),
          (this.localStore = e),
          (this.R = n),
          (this.queries = []),
          (this.documents = []),
          (this.progress = Sf(t));
      }
      function Tf(t) {
        this.R = t;
      }
      function If(t, e) {
        (this.payload = t), (this.byteLength = e);
      }
      function _f(t, e, n) {
        (this.query = t),
          (this.Jr = e),
          (this.Yr = !1),
          (this.Xr = null),
          (this.onlineState = "Unknown"),
          (this.options = n || {});
      }
      function Sf(t) {
        return {
          taskState: "Running",
          documentsLoaded: 0,
          bytesLoaded: 0,
          totalDocuments: t.totalDocuments,
          totalBytes: t.totalBytes,
        };
      }
      var Af = function (t) {
          this.key = t;
        },
        Df = function (t) {
          this.key = t;
        },
        Nf =
          (Object.defineProperty(Of.prototype, "wo", {
            get: function () {
              return this.uo;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (Of.prototype._o = function (t, e) {
            var s = this,
              a = e ? e.mo : new uf(),
              u = (e || this).fo,
              c = (e || this).mutatedKeys,
              h = u,
              l = !1,
              f =
                ko(this.query) && u.size === this.query.limit ? u.last() : null,
              d =
                Ro(this.query) && u.size === this.query.limit
                  ? u.first()
                  : null;
            if (
              (t.inorderTraversal(function (t, e) {
                var n = u.get(t),
                  r = Bo(s.query, e) ? e : null,
                  i = !!n && s.mutatedKeys.has(n.key),
                  o =
                    !!r &&
                    (r.hasLocalMutations ||
                      (s.mutatedKeys.has(r.key) && r.hasCommittedMutations)),
                  e = !1;
                n && r
                  ? n.data.isEqual(r.data)
                    ? i !== o && (a.track({ type: 3, doc: r }), (e = !0))
                    : s.yo(n, r) ||
                      (a.track({ type: 2, doc: r }),
                      (e = !0),
                      ((f && 0 < s.lo(r, f)) || (d && s.lo(r, d) < 0)) &&
                        (l = !0))
                  : !n && r
                  ? (a.track({ type: 0, doc: r }), (e = !0))
                  : n &&
                    !r &&
                    (a.track({ type: 1, doc: n }),
                    (e = !0),
                    (f || d) && (l = !0)),
                  e &&
                    (c = r
                      ? ((h = h.add(r)), o ? c.add(t) : c.delete(t))
                      : ((h = h.delete(t)), c.delete(t)));
              }),
              ko(this.query) || Ro(this.query))
            )
              for (; h.size > this.query.limit; ) {
                var n = ko(this.query) ? h.last() : h.first(),
                  h = h.delete(n.key),
                  c = c.delete(n.key);
                a.track({ type: 1, doc: n });
              }
            return { fo: h, mo: a, Nn: l, mutatedKeys: c };
          }),
          (Of.prototype.yo = function (t, e) {
            return (
              t.hasLocalMutations &&
              e.hasCommittedMutations &&
              !e.hasLocalMutations
            );
          }),
          (Of.prototype.applyChanges = function (t, e, n) {
            var o = this,
              r = this.fo;
            (this.fo = t.fo), (this.mutatedKeys = t.mutatedKeys);
            var i = t.mo.jr();
            i.sort(function (t, e) {
              return (
                (r = t.type), (i = e.type), n(r) - n(i) || o.lo(t.doc, e.doc)
              );
              function n(t) {
                switch (t) {
                  case 0:
                    return 1;
                  case 2:
                  case 3:
                    return 2;
                  case 1:
                    return 0;
                  default:
                    return Qr();
                }
              }
              var r, i;
            }),
              this.po(n);
            var s = e ? this.Eo() : [],
              n = 0 === this.ho.size && this.current ? 1 : 0,
              e = n !== this.ao;
            return (
              (this.ao = n),
              0 !== i.length || e
                ? {
                    snapshot: new cf(
                      this.query,
                      t.fo,
                      r,
                      i,
                      t.mutatedKeys,
                      0 == n,
                      e,
                      !1
                    ),
                    To: s,
                  }
                : { To: s }
            );
          }),
          (Of.prototype.zr = function (t) {
            return this.current && "Offline" === t
              ? ((this.current = !1),
                this.applyChanges(
                  {
                    fo: this.fo,
                    mo: new uf(),
                    mutatedKeys: this.mutatedKeys,
                    Nn: !1,
                  },
                  !1
                ))
              : { To: [] };
          }),
          (Of.prototype.Io = function (t) {
            return (
              !this.uo.has(t) &&
              !!this.fo.has(t) &&
              !this.fo.get(t).hasLocalMutations
            );
          }),
          (Of.prototype.po = function (t) {
            var e = this;
            t &&
              (t.addedDocuments.forEach(function (t) {
                return (e.uo = e.uo.add(t));
              }),
              t.modifiedDocuments.forEach(function (t) {}),
              t.removedDocuments.forEach(function (t) {
                return (e.uo = e.uo.delete(t));
              }),
              (this.current = t.current));
          }),
          (Of.prototype.Eo = function () {
            var e = this;
            if (!this.current) return [];
            var n = this.ho;
            (this.ho = $s()),
              this.fo.forEach(function (t) {
                e.Io(t.key) && (e.ho = e.ho.add(t.key));
              });
            var r = [];
            return (
              n.forEach(function (t) {
                e.ho.has(t) || r.push(new Df(t));
              }),
              this.ho.forEach(function (t) {
                n.has(t) || r.push(new Af(t));
              }),
              r
            );
          }),
          (Of.prototype.Ao = function (t) {
            (this.uo = t.Bn), (this.ho = $s());
            t = this._o(t.documents);
            return this.applyChanges(t, !0);
          }),
          (Of.prototype.Ro = function () {
            return cf.fromInitialDocuments(
              this.query,
              this.fo,
              this.mutatedKeys,
              0 === this.ao
            );
          }),
          Of),
        Cf = function (t, e, n) {
          (this.query = t), (this.targetId = e), (this.view = n);
        },
        kf = function (t) {
          (this.key = t), (this.bo = !1);
        },
        Rf =
          (Object.defineProperty(xf.prototype, "isPrimaryClient", {
            get: function () {
              return !0 === this.$o;
            },
            enumerable: !1,
            configurable: !0,
          }),
          xf);
      function xf(t, e, n, r, i, o) {
        (this.localStore = t),
          (this.remoteStore = e),
          (this.eventManager = n),
          (this.sharedClientState = r),
          (this.currentUser = i),
          (this.maxConcurrentLimboResolutions = o),
          (this.vo = {}),
          (this.Po = new Pc(Uo, Vo)),
          (this.Vo = new Map()),
          (this.So = new Set()),
          (this.Do = new Ms(Ai.comparator)),
          (this.Co = new Map()),
          (this.No = new _h()),
          (this.xo = {}),
          (this.Fo = new Map()),
          (this.ko = gc.Yt()),
          (this.onlineState = "Unknown"),
          (this.$o = void 0);
      }
      function Of(t, e) {
        (this.query = t),
          (this.uo = e),
          (this.ao = null),
          (this.current = !1),
          (this.ho = $s()),
          (this.mutatedKeys = $s()),
          (this.lo = jo(t)),
          (this.fo = new af(this.lo));
      }
      function Lf(i, o, s, a) {
        return y(this, void 0, void 0, function () {
          var e, n, r;
          return g(this, function (t) {
            switch (t.label) {
              case 0:
                return (
                  (i.Oo = function (t, e, n) {
                    return (function (r, i, o, s) {
                      return y(this, void 0, void 0, function () {
                        var e, n;
                        return g(this, function (t) {
                          switch (t.label) {
                            case 0:
                              return (e = i.view._o(o)).Nn
                                ? [
                                    4,
                                    mh(r.localStore, i.query, !1).then(
                                      function (t) {
                                        t = t.documents;
                                        return i.view._o(t, e);
                                      }
                                    ),
                                  ]
                                : [3, 2];
                            case 1:
                              (e = t.sent()), (t.label = 2);
                            case 2:
                              return (
                                (n = s && s.targetChanges.get(i.targetId)),
                                (n = i.view.applyChanges(
                                  e,
                                  r.isPrimaryClient,
                                  n
                                )),
                                [2, (Gf(r, i.targetId, n.To), n.snapshot)]
                              );
                          }
                        });
                      });
                    })(i, t, e, n);
                  }),
                  [4, mh(i.localStore, o, !0)]
                );
              case 1:
                return (
                  (n = t.sent()),
                  (r = new Nf(o, n.Bn)),
                  (e = r._o(n.documents)),
                  (n = ta.createSynthesizedTargetChangeForCurrentChange(
                    s,
                    a && "Offline" !== i.onlineState
                  )),
                  (n = r.applyChanges(e, i.isPrimaryClient, n)),
                  Gf(i, s, n.To),
                  (r = new Cf(o, s, r)),
                  [
                    2,
                    (i.Po.set(o, r),
                    i.Vo.has(s) ? i.Vo.get(s).push(o) : i.Vo.set(s, [o]),
                    n.snapshot),
                  ]
                );
            }
          });
        });
      }
      function Pf(f, d, p) {
        return y(this, void 0, void 0, function () {
          var s, l;
          return g(this, function (t) {
            switch (t.label) {
              case 0:
                (l = Zf(f)), (t.label = 1);
              case 1:
                return (
                  t.trys.push([1, 5, , 6]),
                  [
                    4,
                    ((i = l.localStore),
                    (a = d),
                    (c = i),
                    (h = Jr.now()),
                    (o = a.reduce(function (t, e) {
                      return t.add(e.key);
                    }, $s())),
                    c.persistence
                      .runTransaction(
                        "Locally write mutations",
                        "readwrite",
                        function (s) {
                          return c.Mn.pn(s, o).next(function (t) {
                            u = t;
                            for (var e = [], n = 0, r = a; n < r.length; n++) {
                              var i = r[n],
                                o = (function (t, e) {
                                  for (
                                    var n = null, r = 0, i = t.fieldTransforms;
                                    r < i.length;
                                    r++
                                  ) {
                                    var o = i[r],
                                      s = e.data.field(o.field),
                                      s = Ho(o.transform, s || null);
                                    null != s &&
                                      (n = null == n ? Bi.empty() : n).set(
                                        o.field,
                                        s
                                      );
                                  }
                                  return n || null;
                                })(i, u.get(i.key));
                              null != o &&
                                e.push(
                                  new bs(
                                    i.key,
                                    o,
                                    (function s(t) {
                                      var a = [];
                                      return (
                                        ri(t.fields, function (t, e) {
                                          var n = new ci([t]);
                                          if (Ui(e))
                                            if (
                                              0 ===
                                              (e = s(e.mapValue).fields).length
                                            )
                                              a.push(n);
                                            else
                                              for (
                                                var r = 0, i = e;
                                                r < i.length;
                                                r++
                                              ) {
                                                var o = i[r];
                                                a.push(n.child(o));
                                              }
                                          else a.push(n);
                                        }),
                                        new hi(a)
                                      );
                                    })(o.value.mapValue),
                                    ls.exists(!0)
                                  )
                                );
                            }
                            return c._n.addMutationBatch(s, h, e, a);
                          });
                        }
                      )
                      .then(function (t) {
                        return (
                          t.applyToLocalDocumentSet(u),
                          { batchId: t.batchId, changes: u }
                        );
                      })),
                  ]
                );
              case 2:
                return (
                  (s = t.sent()),
                  l.sharedClientState.addPendingMutation(s.batchId),
                  (e = l),
                  (n = s.batchId),
                  (r = p),
                  (i = (i =
                    (i = e.xo[e.currentUser.toKey()]) || new Ms(Yr)).insert(
                    n,
                    r
                  )),
                  (e.xo[e.currentUser.toKey()] = i),
                  [4, Hf(l, s.changes)]
                );
              case 3:
                return t.sent(), [4, Xl(l.remoteStore)];
              case 4:
                return t.sent(), [3, 6];
              case 5:
                return (
                  (l = t.sent()),
                  (l = of(l, "Failed to persist write")),
                  p.reject(l),
                  [3, 6]
                );
              case 6:
                return [2];
            }
            var e, n, r, i, a, u, c, h, o;
          });
        });
      }
      function Mf(r, i) {
        return y(this, void 0, void 0, function () {
          var n, e;
          return g(this, function (t) {
            switch (t.label) {
              case 0:
                (n = r), (t.label = 1);
              case 1:
                return t.trys.push([1, 4, , 6]), [4, dh(n.localStore, i)];
              case 2:
                return (
                  (e = t.sent()),
                  i.targetChanges.forEach(function (t, e) {
                    e = n.Co.get(e);
                    e &&
                      (Hr(
                        t.addedDocuments.size +
                          t.modifiedDocuments.size +
                          t.removedDocuments.size <=
                          1
                      ),
                      0 < t.addedDocuments.size
                        ? (e.bo = !0)
                        : 0 < t.modifiedDocuments.size
                        ? Hr(e.bo)
                        : 0 < t.removedDocuments.size &&
                          (Hr(e.bo), (e.bo = !1)));
                  }),
                  [4, Hf(n, e, i)]
                );
              case 3:
                return t.sent(), [3, 6];
              case 4:
                return [4, Ic(t.sent())];
              case 5:
                return t.sent(), [3, 6];
              case 6:
                return [2];
            }
          });
        });
      }
      function Ff(t, n, e) {
        var r,
          t = t;
        ((t.isPrimaryClient && 0 === e) || (!t.isPrimaryClient && 1 === e)) &&
          ((r = []),
          t.Po.forEach(function (t, e) {
            e = e.view.zr(n);
            e.snapshot && r.push(e.snapshot);
          }),
          (function (t, i) {
            t.onlineState = i;
            var o = !1;
            t.queries.forEach(function (t, e) {
              for (var n = 0, r = e.listeners; n < r.length; n++)
                r[n].zr(i) && (o = !0);
            }),
              o && gf(t);
          })(t.eventManager, n),
          r.length && t.vo._r(r),
          (t.onlineState = n),
          t.isPrimaryClient && t.sharedClientState.setOnlineState(n));
      }
      function Vf(s, a, u) {
        return y(this, void 0, void 0, function () {
          var n, o;
          return g(this, function (t) {
            switch (t.label) {
              case 0:
                (n = s), (t.label = 1);
              case 1:
                return (
                  t.trys.push([1, 4, , 6]),
                  [
                    4,
                    ((e = n.localStore),
                    (r = a),
                    (i = e).persistence.runTransaction(
                      "Reject batch",
                      "readwrite-primary",
                      function (e) {
                        var n;
                        return i._n
                          .lookupMutationBatch(e, r)
                          .next(function (t) {
                            return (
                              Hr(null !== t),
                              (n = t.keys()),
                              i._n.removeMutationBatch(e, t)
                            );
                          })
                          .next(function () {
                            return i._n.performConsistencyCheck(e);
                          })
                          .next(function () {
                            return i.Mn.pn(e, n);
                          });
                      }
                    )),
                  ]
                );
              case 2:
                return (
                  (o = t.sent()),
                  Bf(n, a, u),
                  qf(n, a),
                  n.sharedClientState.updateMutationState(a, "rejected", u),
                  [4, Hf(n, o)]
                );
              case 3:
                return t.sent(), [3, 6];
              case 4:
                return [4, Ic(t.sent())];
              case 5:
                return t.sent(), [3, 6];
              case 6:
                return [2];
            }
            var e, r, i;
          });
        });
      }
      function Uf(o, s) {
        return y(this, void 0, void 0, function () {
          var n, r, i;
          return g(this, function (t) {
            switch (t.label) {
              case 0:
                Ql((n = o).remoteStore) ||
                  Br(
                    "SyncEngine",
                    "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."
                  ),
                  (t.label = 1);
              case 1:
                return (
                  t.trys.push([1, 3, , 4]),
                  [
                    4,
                    (e = n.localStore).persistence.runTransaction(
                      "Get highest unacknowledged batch id",
                      "readonly",
                      function (t) {
                        return e._n.getHighestUnacknowledgedBatchId(t);
                      }
                    ),
                  ]
                );
              case 2:
                return -1 === (r = t.sent())
                  ? [2, void s.resolve()]
                  : ((i = n.Fo.get(r) || []).push(s), n.Fo.set(r, i), [3, 4]);
              case 3:
                return (
                  (i = t.sent()),
                  (i = of(
                    i,
                    "Initialization of waitForPendingWrites() operation failed"
                  )),
                  s.reject(i),
                  [3, 4]
                );
              case 4:
                return [2];
            }
            var e;
          });
        });
      }
      function qf(t, e) {
        (t.Fo.get(e) || []).forEach(function (t) {
          t.resolve();
        }),
          t.Fo.delete(e);
      }
      function Bf(t, e, n) {
        var r = t,
          i = r.xo[r.currentUser.toKey()];
        i &&
          ((t = i.get(e)) && (n ? t.reject(n) : t.resolve(), (i = i.remove(e))),
          (r.xo[r.currentUser.toKey()] = i));
      }
      function jf(e, t, n) {
        void 0 === n && (n = null),
          e.sharedClientState.removeLocalQueryTarget(t);
        for (var r = 0, i = e.Vo.get(t); r < i.length; r++) {
          var o = i[r];
          e.Po.delete(o), n && e.vo.Mo(o, n);
        }
        e.Vo.delete(t),
          e.isPrimaryClient &&
            e.No.Zn(t).forEach(function (t) {
              e.No.containsKey(t) || Kf(e, t);
            });
      }
      function Kf(t, e) {
        t.So.delete(e.path.canonicalString());
        var n = t.Do.get(e);
        null !== n &&
          (ql(t.remoteStore, n),
          (t.Do = t.Do.remove(e)),
          t.Co.delete(n),
          Qf(t));
      }
      function Gf(t, e, n) {
        for (var r, i, o, s = 0, a = n; s < a.length; s++) {
          var u = a[s];
          u instanceof Af
            ? (t.No.addReference(u.key, e),
              (r = t),
              (o = void 0),
              (i = (o = (i = u).key).path.canonicalString()),
              r.Do.get(o) ||
                r.So.has(i) ||
                (Br("SyncEngine", "New document in limbo: " + o),
                r.So.add(i),
                Qf(r)))
            : u instanceof Df
            ? (Br("SyncEngine", "Document no longer in limbo: " + u.key),
              t.No.removeReference(u.key, e),
              t.No.containsKey(u.key) || Kf(t, u.key))
            : Qr();
        }
      }
      function Qf(t) {
        for (; 0 < t.So.size && t.Do.size < t.maxConcurrentLimboResolutions; ) {
          var e = t.So.values().next().value;
          t.So.delete(e);
          var n = new Ai(ai.fromString(e)),
            e = t.ko.next();
          t.Co.set(e, new kf(n)),
            (t.Do = t.Do.insert(n, e)),
            Ul(t.remoteStore, new Ou(Mo(Co(n.path)), e, 2, Or.o));
        }
      }
      function Hf(e, s, a) {
        return y(this, void 0, void 0, function () {
          var n, r, i, o;
          return g(this, function (t) {
            switch (t.label) {
              case 0:
                return (
                  (r = []),
                  (i = []),
                  (o = []),
                  (n = e).Po.isEmpty()
                    ? [3, 3]
                    : (n.Po.forEach(function (t, e) {
                        o.push(
                          n.Oo(e, s, a).then(function (t) {
                            t &&
                              (n.isPrimaryClient &&
                                n.sharedClientState.updateQueryState(
                                  e.targetId,
                                  t.fromCache ? "not-current" : "current"
                                ),
                              r.push(t),
                              (t = nh.Pn(e.targetId, t)),
                              i.push(t));
                          })
                        );
                      }),
                      [4, Promise.all(o)])
                );
              case 1:
                return (
                  t.sent(),
                  n.vo._r(r),
                  [
                    4,
                    (function (u, c) {
                      return y(this, void 0, void 0, function () {
                        var r, e, n, i, o, s, a;
                        return g(this, function (t) {
                          switch (t.label) {
                            case 0:
                              (r = u), (t.label = 1);
                            case 1:
                              return (
                                t.trys.push([1, 3, , 4]),
                                [
                                  4,
                                  r.persistence.runTransaction(
                                    "notifyLocalViewChanges",
                                    "readwrite",
                                    function (n) {
                                      return hu.forEach(c, function (e) {
                                        return hu
                                          .forEach(e.bn, function (t) {
                                            return r.persistence.referenceDelegate.addReference(
                                              n,
                                              e.targetId,
                                              t
                                            );
                                          })
                                          .next(function () {
                                            return hu.forEach(
                                              e.vn,
                                              function (t) {
                                                return r.persistence.referenceDelegate.removeReference(
                                                  n,
                                                  e.targetId,
                                                  t
                                                );
                                              }
                                            );
                                          });
                                      });
                                    }
                                  ),
                                ]
                              );
                            case 2:
                              return t.sent(), [3, 4];
                            case 3:
                              if (!Eu((e = t.sent()))) throw e;
                              return (
                                Br(
                                  "LocalStore",
                                  "Failed to update sequence numbers: " + e
                                ),
                                [3, 4]
                              );
                            case 4:
                              for (n = 0, i = c; n < i.length; n++)
                                (a = i[n]),
                                  (o = a.targetId),
                                  a.fromCache ||
                                    ((s = r.Fn.get(o)),
                                    (a = s.snapshotVersion),
                                    (a = s.withLastLimboFreeSnapshotVersion(a)),
                                    (r.Fn = r.Fn.insert(o, a)));
                              return [2];
                          }
                        });
                      });
                    })(n.localStore, i),
                  ]
                );
              case 2:
                t.sent(), (t.label = 3);
              case 3:
                return [2];
            }
          });
        });
      }
      function zf(i, o) {
        return y(this, void 0, void 0, function () {
          var n, r;
          return g(this, function (t) {
            switch (t.label) {
              case 0:
                return (n = i).currentUser.isEqual(o)
                  ? [3, 3]
                  : (Br("SyncEngine", "User change. New user:", o.toKey()),
                    [4, hh(n.localStore, o)]);
              case 1:
                return (
                  (r = t.sent()),
                  (n.currentUser = o),
                  (e = n).Fo.forEach(function (t) {
                    t.forEach(function (t) {
                      t.reject(
                        new Fr(
                          Mr.CANCELLED,
                          "'waitForPendingWrites' promise is rejected due to a user change."
                        )
                      );
                    });
                  }),
                  e.Fo.clear(),
                  n.sharedClientState.handleUserChange(
                    o,
                    r.removedBatchIds,
                    r.addedBatchIds
                  ),
                  [4, Hf(n, r.Ln)]
                );
              case 2:
                t.sent(), (t.label = 3);
              case 3:
                return [2];
            }
            var e;
          });
        });
      }
      function Wf(a, u, c, h) {
        return y(this, void 0, void 0, function () {
          var o, s;
          return g(this, function (t) {
            switch (t.label) {
              case 0:
                return [
                  4,
                  ((e = (o = a).localStore),
                  (n = u),
                  (i = (r = e)._n),
                  r.persistence.runTransaction(
                    "Lookup mutation documents",
                    "readonly",
                    function (e) {
                      return i.jt(e, n).next(function (t) {
                        return t ? r.Mn.pn(e, t) : hu.resolve(null);
                      });
                    }
                  )),
                ];
              case 1:
                return null === (s = t.sent())
                  ? [3, 6]
                  : "pending" !== c
                  ? [3, 3]
                  : [4, Xl(o.remoteStore)];
              case 2:
                return t.sent(), [3, 4];
              case 3:
                "acknowledged" === c || "rejected" === c
                  ? (Bf(o, u, h || null), qf(o, u), o.localStore._n.Gt(u))
                  : Qr(),
                  (t.label = 4);
              case 4:
                return [4, Hf(o, s)];
              case 5:
                return t.sent(), [3, 7];
              case 6:
                Br("SyncEngine", "Cannot apply mutation batch with id: " + u),
                  (t.label = 7);
              case 7:
                return [2];
            }
            var e, n, r, i;
          });
        });
      }
      function Yf(h, l) {
        return y(this, void 0, void 0, function () {
          var r, e, i, o, s, a, u, c;
          return g(this, function (t) {
            switch (t.label) {
              case 0:
                return (
                  Jf((r = h)),
                  Zf(r),
                  !0 !== l || !0 === r.$o
                    ? [3, 3]
                    : ((e = r.sharedClientState.getAllActiveQueryTargets()),
                      [4, Xf(r, e.toArray())])
                );
              case 1:
                return (i = t.sent()), (r.$o = !0), [4, Zl(r.remoteStore, !0)];
              case 2:
                for (t.sent(), o = 0, s = i; o < s.length; o++)
                  (a = s[o]), Ul(r.remoteStore, a);
                return [3, 7];
              case 3:
                return !1 !== l || !1 === r.$o
                  ? [3, 7]
                  : ((u = []),
                    (c = Promise.resolve()),
                    r.Vo.forEach(function (t, e) {
                      r.sharedClientState.isLocalQueryTarget(e)
                        ? u.push(e)
                        : (c = c.then(function () {
                            return jf(r, e), gh(r.localStore, e, !0);
                          })),
                        ql(r.remoteStore, e);
                    }),
                    [4, c]);
              case 4:
                return t.sent(), [4, Xf(r, u)];
              case 5:
                return (
                  t.sent(),
                  (n = r).Co.forEach(function (t, e) {
                    ql(n.remoteStore, e);
                  }),
                  n.No.ts(),
                  (n.Co = new Map()),
                  (n.Do = new Ms(Ai.comparator)),
                  (r.$o = !1),
                  [4, Zl(r.remoteStore, !1)]
                );
              case 6:
                t.sent(), (t.label = 7);
              case 7:
                return [2];
            }
            var n;
          });
        });
      }
      function Xf(d, p) {
        return y(this, void 0, void 0, function () {
          var e, n, r, i, o, s, a, u, c, h, l, f;
          return g(this, function (t) {
            switch (t.label) {
              case 0:
                (e = d), (n = []), (r = []), (i = 0), (o = p), (t.label = 1);
              case 1:
                return i < o.length
                  ? ((s = o[i]),
                    (a = void 0),
                    (u = e.Vo.get(s)) && 0 !== u.length
                      ? [4, yh(e.localStore, Mo(u[0]))]
                      : [3, 7])
                  : [3, 13];
              case 2:
                (a = t.sent()), (c = 0), (h = u), (t.label = 3);
              case 3:
                return c < h.length
                  ? ((l = h[c]),
                    (l = e.Po.get(l)),
                    [
                      4,
                      (function (r, i) {
                        return y(this, void 0, void 0, function () {
                          var e, n;
                          return g(this, function (t) {
                            switch (t.label) {
                              case 0:
                                return [4, mh((e = r).localStore, i.query, !0)];
                              case 1:
                                return (
                                  (n = t.sent()),
                                  (n = i.view.Ao(n)),
                                  [
                                    2,
                                    (e.isPrimaryClient &&
                                      Gf(e, i.targetId, n.To),
                                    n),
                                  ]
                                );
                            }
                          });
                        });
                      })(e, l),
                    ])
                  : [3, 6];
              case 4:
                (l = t.sent()).snapshot && r.push(l.snapshot), (t.label = 5);
              case 5:
                return c++, [3, 3];
              case 6:
                return [3, 11];
              case 7:
                return [4, vh(e.localStore, s)];
              case 8:
                return (f = t.sent()), [4, yh(e.localStore, f)];
              case 9:
                return (a = t.sent()), [4, Lf(e, $f(f), s, !1)];
              case 10:
                t.sent(), (t.label = 11);
              case 11:
                n.push(a), (t.label = 12);
              case 12:
                return i++, [3, 1];
              case 13:
                return [2, (e.vo._r(r), n)];
            }
          });
        });
      }
      function $f(t) {
        return No(
          t.path,
          t.collectionGroup,
          t.orderBy,
          t.filters,
          t.limit,
          "F",
          t.startAt,
          t.endAt
        );
      }
      function Jf(t) {
        return (
          (t.remoteStore.remoteSyncer.applyRemoteEvent = Mf.bind(null, t)),
          (t.remoteStore.remoteSyncer.getRemoteKeysForTarget = function (t, e) {
            var n = t;
            if ((t = n.Co.get(e)) && t.bo) return $s().add(t.key);
            var r = $s();
            if (!(e = n.Vo.get(e))) return r;
            for (var i = 0, o = e; i < o.length; i++)
              var s = o[i], s = n.Po.get(s), r = r.unionWith(s.view.wo);
            return r;
          }.bind(null, t)),
          (t.remoteStore.remoteSyncer.rejectListen = function (o, s, a) {
            return y(this, void 0, void 0, function () {
              var e, n, r, i;
              return g(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      (e = o).sharedClientState.updateQueryState(
                        s,
                        "rejected",
                        a
                      ),
                      (i = e.Co.get(s)),
                      (n = i && i.key)
                        ? ((r = (r = new Ms(Ai.comparator)).insert(
                            n,
                            Ki.newNoDocument(n, Zr.min())
                          )),
                          (i = $s().add(n)),
                          (i = new Zs(Zr.min(), new Map(), new Ks(Yr), r, i)),
                          [4, Mf(e, i)])
                        : [3, 2]
                    );
                  case 1:
                    return (
                      t.sent(),
                      (e.Do = e.Do.remove(n)),
                      e.Co.delete(s),
                      Qf(e),
                      [3, 4]
                    );
                  case 2:
                    return [
                      4,
                      gh(e.localStore, s, !1)
                        .then(function () {
                          return jf(e, s, a);
                        })
                        .catch(Ic),
                    ];
                  case 3:
                    t.sent(), (t.label = 4);
                  case 4:
                    return [2];
                }
              });
            });
          }.bind(null, t)),
          (t.vo._r = function (t, e) {
            for (var n = t, r = !1, i = 0, o = e; i < o.length; i++) {
              var s = o[i],
                a = s.query,
                a = n.queries.get(a);
              if (a) {
                for (var u = 0, c = a.listeners; u < c.length; u++)
                  c[u].Hr(s) && (r = !0);
                a.Wr = s;
              }
            }
            r && gf(n);
          }.bind(null, t.eventManager)),
          (t.vo.Mo = function (t, e, n) {
            var r = t;
            if ((t = r.queries.get(e)))
              for (var i = 0, o = t.listeners; i < o.length; i++)
                o[i].onError(n);
            r.queries.delete(e);
          }.bind(null, t.eventManager)),
          t
        );
      }
      function Zf(t) {
        return (
          (t.remoteStore.remoteSyncer.applySuccessfulWrite = function (i, o) {
            return y(this, void 0, void 0, function () {
              var e, n, r;
              return g(this, function (t) {
                switch (t.label) {
                  case 0:
                    (e = i), (n = o.batch.batchId), (t.label = 1);
                  case 1:
                    return t.trys.push([1, 4, , 6]), [4, lh(e.localStore, o)];
                  case 2:
                    return (
                      (r = t.sent()),
                      Bf(e, n, null),
                      qf(e, n),
                      e.sharedClientState.updateMutationState(
                        n,
                        "acknowledged"
                      ),
                      [4, Hf(e, r)]
                    );
                  case 3:
                    return t.sent(), [3, 6];
                  case 4:
                    return [4, Ic(t.sent())];
                  case 5:
                    return t.sent(), [3, 6];
                  case 6:
                    return [2];
                }
              });
            });
          }.bind(null, t)),
          (t.remoteStore.remoteSyncer.rejectFailedWrite = Vf.bind(null, t)),
          t
        );
      }
      function td(t, e, n) {
        var r = t;
        !(function (f, d, p) {
          return y(this, void 0, void 0, function () {
            var a, u, c, h, l;
            return g(this, function (t) {
              switch (t.label) {
                case 0:
                  return t.trys.push([0, 14, , 15]), [4, d.getMetadata()];
                case 1:
                  return (
                    (a = t.sent()),
                    [
                      4,
                      ((r = f.localStore),
                      (o = r),
                      (s = ma((i = a).createTime)),
                      o.persistence
                        .runTransaction(
                          "hasNewerBundle",
                          "readonly",
                          function (t) {
                            return o.Ke.getBundleMetadata(t, i.id);
                          }
                        )
                        .then(function (t) {
                          return !!t && 0 <= t.createTime.compareTo(s);
                        })),
                    ]
                  );
                case 2:
                  return t.sent() ? [4, d.close()] : [3, 4];
                case 3:
                  return [
                    2,
                    (t.sent(),
                    void p._completeWith({
                      taskState: "Success",
                      documentsLoaded: a.totalDocuments,
                      bytesLoaded: a.totalBytes,
                      totalDocuments: a.totalDocuments,
                      totalBytes: a.totalBytes,
                    })),
                  ];
                case 4:
                  return (
                    p._updateProgress(Sf(a)),
                    (u = new bf(a, f.localStore, d.R)),
                    [4, d.Lo()]
                  );
                case 5:
                  (c = t.sent()), (t.label = 6);
                case 6:
                  return c ? [4, u.oo(c)] : [3, 10];
                case 7:
                  return (h = t.sent()) && p._updateProgress(h), [4, d.Lo()];
                case 8:
                  (c = t.sent()), (t.label = 9);
                case 9:
                  return [3, 6];
                case 10:
                  return [4, u.complete()];
                case 11:
                  return (l = t.sent()), [4, Hf(f, l.wn, void 0)];
                case 12:
                  return (
                    t.sent(),
                    [
                      4,
                      ((r = f.localStore),
                      (e = a),
                      (n = r).persistence.runTransaction(
                        "Save bundle",
                        "readwrite",
                        function (t) {
                          return n.Ke.saveBundleMetadata(t, e);
                        }
                      )),
                    ]
                  );
                case 13:
                  return t.sent(), p._completeWith(l.progress), [3, 15];
                case 14:
                  return (
                    Kr(
                      "SyncEngine",
                      "Loading bundle failed with " + (l = t.sent())
                    ),
                    p._failWith(l),
                    [3, 15]
                  );
                case 15:
                  return [2];
              }
              var e, n, r, i, o, s;
            });
          });
        })(r, e, n).then(function () {
          r.sharedClientState.notifyBundleLoaded();
        });
      }
      var ed,
        nd,
        rd =
          ((hd.prototype.initialize = function (e) {
            return y(this, void 0, void 0, function () {
              return g(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      (this.R = El(e.databaseInfo.databaseId)),
                      (this.sharedClientState = this.Bo(e)),
                      (this.persistence = this.qo(e)),
                      [4, this.persistence.start()]
                    );
                  case 1:
                    return (
                      t.sent(),
                      (this.gcScheduler = this.Uo(e)),
                      (this.localStore = this.Ko(e)),
                      [2]
                    );
                }
              });
            });
          }),
          (hd.prototype.Uo = function (t) {
            return null;
          }),
          (hd.prototype.Ko = function (t) {
            return ch(this.persistence, new rh(), t.initialUser, this.R);
          }),
          (hd.prototype.qo = function (t) {
            return new kh(xh.bs, this.R);
          }),
          (hd.prototype.Bo = function (t) {
            return new el();
          }),
          (hd.prototype.terminate = function () {
            return y(this, void 0, void 0, function () {
              return g(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      this.gcScheduler && this.gcScheduler.stop(),
                      [4, this.sharedClientState.shutdown()]
                    );
                  case 1:
                    return t.sent(), [4, this.persistence.shutdown()];
                  case 2:
                    return t.sent(), [2];
                }
              });
            });
          }),
          hd),
        id =
          (n(cd, (nd = rd)),
          (cd.prototype.initialize = function (e) {
            return y(this, void 0, void 0, function () {
              return g(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, nd.prototype.initialize.call(this, e)];
                  case 1:
                    return t.sent(), [4, bh(this.localStore)];
                  case 2:
                    return t.sent(), [4, this.Qo.initialize(this, e)];
                  case 3:
                    return t.sent(), [4, Zf(this.Qo.syncEngine)];
                  case 4:
                    return t.sent(), [4, Xl(this.Qo.remoteStore)];
                  case 5:
                    return t.sent(), [2];
                }
              });
            });
          }),
          (cd.prototype.Ko = function (t) {
            return ch(this.persistence, new rh(), t.initialUser, this.R);
          }),
          (cd.prototype.Uo = function (t) {
            var e = this.persistence.referenceDelegate.garbageCollector;
            return new Ac(e, t.asyncQueue);
          }),
          (cd.prototype.qo = function (t) {
            var e = Zc(
                t.databaseInfo.databaseId,
                t.databaseInfo.persistenceKey
              ),
              n =
                void 0 !== this.cacheSizeBytes
                  ? sc.withCacheSize(this.cacheSizeBytes)
                  : sc.DEFAULT;
            return new Yc(
              this.synchronizeTabs,
              e,
              t.clientId,
              n,
              t.asyncQueue,
              wl(),
              bl(),
              this.R,
              this.sharedClientState,
              !!this.forceOwnership
            );
          }),
          (cd.prototype.Bo = function (t) {
            return new el();
          }),
          cd),
        od =
          (n(ud, (ed = id)),
          (ud.prototype.initialize = function (r) {
            return y(this, void 0, void 0, function () {
              var e,
                n = this;
              return g(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, ed.prototype.initialize.call(this, r)];
                  case 1:
                    return (
                      t.sent(),
                      (e = this.Qo.syncEngine),
                      this.sharedClientState instanceof tl
                        ? ((this.sharedClientState.syncEngine = {
                            ui: Wf.bind(null, e),
                            ai: function (i, o, s, a) {
                              return y(this, void 0, void 0, function () {
                                var e, n, r;
                                return g(this, function (t) {
                                  switch (t.label) {
                                    case 0:
                                      return (e = i).$o
                                        ? (Br(
                                            "SyncEngine",
                                            "Ignoring unexpected query state notification."
                                          ),
                                          [3, 8])
                                        : [3, 1];
                                    case 1:
                                      if (!e.Vo.has(o)) return [3, 8];
                                      switch (s) {
                                        case "current":
                                        case "not-current":
                                          return [3, 2];
                                        case "rejected":
                                          return [3, 5];
                                      }
                                      return [3, 7];
                                    case 2:
                                      return [4, wh(e.localStore)];
                                    case 3:
                                      return (
                                        (n = t.sent()),
                                        (r =
                                          Zs.createSynthesizedRemoteEventForCurrentChange(
                                            o,
                                            "current" === s
                                          )),
                                        [4, Hf(e, n, r)]
                                      );
                                    case 4:
                                      return t.sent(), [3, 8];
                                    case 5:
                                      return [4, gh(e.localStore, o, !0)];
                                    case 6:
                                      return t.sent(), jf(e, o, a), [3, 8];
                                    case 7:
                                      Qr(), (t.label = 8);
                                    case 8:
                                      return [2];
                                  }
                                });
                              });
                            }.bind(null, e),
                            hi: function (c, h, l) {
                              return y(this, void 0, void 0, function () {
                                var n, e, r, i, o, s, a, u;
                                return g(this, function (t) {
                                  switch (t.label) {
                                    case 0:
                                      if (!(n = Jf(c)).$o) return [3, 10];
                                      (e = 0), (r = h), (t.label = 1);
                                    case 1:
                                      return e < r.length
                                        ? ((r = r[e]),
                                          n.Vo.has(r)
                                            ? (Br(
                                                "SyncEngine",
                                                "Adding an already active target " +
                                                  r
                                              ),
                                              [3, 5])
                                            : [4, vh(n.localStore, r)])
                                        : [3, 6];
                                    case 2:
                                      return (
                                        (i = t.sent()), [4, yh(n.localStore, i)]
                                      );
                                    case 3:
                                      return (
                                        (o = t.sent()),
                                        [4, Lf(n, $f(i), o.targetId, !1)]
                                      );
                                    case 4:
                                      t.sent(),
                                        Ul(n.remoteStore, o),
                                        (t.label = 5);
                                    case 5:
                                      return e++, [3, 1];
                                    case 6:
                                      (s = function (e) {
                                        return g(this, function (t) {
                                          switch (t.label) {
                                            case 0:
                                              return n.Vo.has(e)
                                                ? [
                                                    4,
                                                    gh(n.localStore, e, !1)
                                                      .then(function () {
                                                        ql(n.remoteStore, e),
                                                          jf(n, e);
                                                      })
                                                      .catch(Ic),
                                                  ]
                                                : [3, 2];
                                            case 1:
                                              t.sent(), (t.label = 2);
                                            case 2:
                                              return [2];
                                          }
                                        });
                                      }),
                                        (a = 0),
                                        (u = l),
                                        (t.label = 7);
                                    case 7:
                                      return a < u.length
                                        ? ((u = u[a]), [5, s(u)])
                                        : [3, 10];
                                    case 8:
                                      t.sent(), (t.label = 9);
                                    case 9:
                                      return a++, [3, 7];
                                    case 10:
                                      return [2];
                                  }
                                });
                              });
                            }.bind(null, e),
                            fn: function (t) {
                              return t.localStore.persistence.fn();
                            }.bind(null, e),
                            ci: function (n) {
                              return y(this, void 0, void 0, function () {
                                var e;
                                return g(this, function (t) {
                                  return [
                                    2,
                                    wh((e = n).localStore).then(function (t) {
                                      return Hf(e, t);
                                    }),
                                  ];
                                });
                              });
                            }.bind(null, e),
                          }),
                          [4, this.sharedClientState.start()])
                        : [3, 3]
                    );
                  case 2:
                    t.sent(), (t.label = 3);
                  case 3:
                    return [
                      4,
                      this.persistence.He(function (e) {
                        return y(n, void 0, void 0, function () {
                          return g(this, function (t) {
                            switch (t.label) {
                              case 0:
                                return [4, Yf(this.Qo.syncEngine, e)];
                              case 1:
                                return (
                                  t.sent(),
                                  this.gcScheduler &&
                                    (e && !this.gcScheduler.started
                                      ? this.gcScheduler.start(this.localStore)
                                      : e || this.gcScheduler.stop()),
                                  [2]
                                );
                            }
                          });
                        });
                      }),
                    ];
                  case 4:
                    return t.sent(), [2];
                }
              });
            });
          }),
          (ud.prototype.Bo = function (t) {
            var e = wl();
            if (!tl.yt(e))
              throw new Fr(
                Mr.UNIMPLEMENTED,
                "IndexedDB persistence is only available on platforms that support LocalStorage."
              );
            var n = Zc(
              t.databaseInfo.databaseId,
              t.databaseInfo.persistenceKey
            );
            return new tl(e, t.asyncQueue, n, t.clientId, t.initialUser);
          }),
          ud),
        sd =
          ((ad.prototype.initialize = function (n, r) {
            return y(this, void 0, void 0, function () {
              var e = this;
              return g(this, function (t) {
                switch (t.label) {
                  case 0:
                    return this.localStore
                      ? [3, 2]
                      : ((this.localStore = n.localStore),
                        (this.sharedClientState = n.sharedClientState),
                        (this.datastore = this.createDatastore(r)),
                        (this.remoteStore = this.createRemoteStore(r)),
                        (this.eventManager = this.createEventManager(r)),
                        (this.syncEngine = this.createSyncEngine(
                          r,
                          !n.synchronizeTabs
                        )),
                        (this.sharedClientState.onlineStateHandler = function (
                          t
                        ) {
                          return Ff(e.syncEngine, t, 1);
                        }),
                        (this.remoteStore.remoteSyncer.handleCredentialChange =
                          zf.bind(null, this.syncEngine)),
                        [
                          4,
                          Zl(this.remoteStore, this.syncEngine.isPrimaryClient),
                        ]);
                  case 1:
                    t.sent(), (t.label = 2);
                  case 2:
                    return [2];
                }
              });
            });
          }),
          (ad.prototype.createEventManager = function (t) {
            return new sf();
          }),
          (ad.prototype.createDatastore = function (t) {
            var e = El(t.databaseInfo.databaseId),
              n = ((n = t.databaseInfo), new sl(n));
            return (t = t.credentials), new Cl(t, n, e);
          }),
          (ad.prototype.createRemoteStore = function (t) {
            var e = this,
              n = this.localStore,
              r = this.datastore,
              i = t.asyncQueue,
              o = function (t) {
                return Ff(e.syncEngine, t, 0);
              },
              t = new (rl.yt() ? rl : nl)();
            return new Tl(n, r, i, o, t);
          }),
          (ad.prototype.createSyncEngine = function (t, e) {
            return (function (t, e, n, r, i, o, s) {
              o = new Rf(t, e, n, r, i, o);
              return s && (o.$o = !0), o;
            })(
              this.localStore,
              this.remoteStore,
              this.eventManager,
              this.sharedClientState,
              t.initialUser,
              t.maxConcurrentLimboResolutions,
              e
            );
          }),
          (ad.prototype.terminate = function () {
            return (function (n) {
              return y(this, void 0, void 0, function () {
                var e;
                return g(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        (e = n),
                        Br("RemoteStore", "RemoteStore shutting down."),
                        e.Or.add(5),
                        [4, Vl(e)]
                      );
                    case 1:
                      return (
                        t.sent(), e.Lr.shutdown(), e.Br.set("Unknown"), [2]
                      );
                  }
                });
              });
            })(this.remoteStore);
          }),
          ad);
      function ad() {}
      function ud(t, e) {
        var n = this;
        return (
          ((n = ed.call(this, t, e, !1) || this).Qo = t),
          (n.cacheSizeBytes = e),
          (n.synchronizeTabs = !0),
          n
        );
      }
      function cd(t, e, n) {
        var r = this;
        return (
          ((r = nd.call(this) || this).Qo = t),
          (r.cacheSizeBytes = e),
          (r.forceOwnership = n),
          (r.synchronizeTabs = !1),
          r
        );
      }
      function hd() {
        this.synchronizeTabs = !1;
      }
      function ld(n, r) {
        void 0 === r && (r = 10240);
        var i = 0;
        return {
          read: function () {
            return y(this, void 0, void 0, function () {
              var e;
              return g(this, function (t) {
                return i < n.byteLength
                  ? ((e = { value: n.slice(i, i + r), done: !1 }),
                    [2, ((i += r), e)])
                  : [2, { done: !0 }];
              });
            });
          },
          cancel: function () {
            return y(this, void 0, void 0, function () {
              return g(this, function (t) {
                return [2];
              });
            });
          },
          releaseLock: function () {},
          closed: Promise.reject("unimplemented"),
        };
      }
      var fd =
          ((Ed.prototype.next = function (t) {
            this.observer.next && this.jo(this.observer.next, t);
          }),
          (Ed.prototype.error = function (t) {
            this.observer.error
              ? this.jo(this.observer.error, t)
              : console.error("Uncaught Error in snapshot listener:", t);
          }),
          (Ed.prototype.Wo = function () {
            this.muted = !0;
          }),
          (Ed.prototype.jo = function (t, e) {
            var n = this;
            this.muted ||
              setTimeout(function () {
                n.muted || t(e);
              }, 0);
          }),
          Ed),
        dd =
          ((bd.prototype.close = function () {
            return this.Go.cancel();
          }),
          (bd.prototype.getMetadata = function () {
            return y(this, void 0, void 0, function () {
              return g(this, function (t) {
                return [2, this.metadata.promise];
              });
            });
          }),
          (bd.prototype.Lo = function () {
            return y(this, void 0, void 0, function () {
              return g(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.getMetadata()];
                  case 1:
                    return [2, (t.sent(), this.Ho())];
                }
              });
            });
          }),
          (bd.prototype.Ho = function () {
            return y(this, void 0, void 0, function () {
              var e, n, r;
              return g(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.Jo()];
                  case 1:
                    return null === (e = t.sent())
                      ? [2, null]
                      : ((r = this.zo.decode(e)),
                        (n = Number(r)),
                        isNaN(n) &&
                          this.Yo(
                            "length string (" + r + ") is not valid number"
                          ),
                        [4, this.Xo(n)]);
                  case 2:
                    return (
                      (r = t.sent()), [2, new vf(JSON.parse(r), e.length + n)]
                    );
                }
              });
            });
          }),
          (bd.prototype.Zo = function () {
            return this.buffer.findIndex(function (t) {
              return t === "{".charCodeAt(0);
            });
          }),
          (bd.prototype.Jo = function () {
            return y(this, void 0, void 0, function () {
              var e, n;
              return g(this, function (t) {
                switch (t.label) {
                  case 0:
                    return this.Zo() < 0 ? [4, this.tc()] : [3, 3];
                  case 1:
                    if (t.sent()) return [3, 3];
                    t.label = 2;
                  case 2:
                    return [3, 0];
                  case 3:
                    return 0 === this.buffer.length
                      ? [2, null]
                      : ((e = this.Zo()) < 0 &&
                          this.Yo(
                            "Reached the end of bundle when a length string is expected."
                          ),
                        (n = this.buffer.slice(0, e)),
                        [2, ((this.buffer = this.buffer.slice(e)), n)]);
                }
              });
            });
          }),
          (bd.prototype.Xo = function (n) {
            return y(this, void 0, void 0, function () {
              var e;
              return g(this, function (t) {
                switch (t.label) {
                  case 0:
                    return this.buffer.length < n ? [4, this.tc()] : [3, 3];
                  case 1:
                    t.sent() &&
                      this.Yo(
                        "Reached the end of bundle when more is expected."
                      ),
                      (t.label = 2);
                  case 2:
                    return [3, 0];
                  case 3:
                    return (
                      (e = this.zo.decode(this.buffer.slice(0, n))),
                      [2, ((this.buffer = this.buffer.slice(n)), e)]
                    );
                }
              });
            });
          }),
          (bd.prototype.Yo = function (t) {
            throw (this.Go.cancel(), new Error("Invalid bundle format: " + t));
          }),
          (bd.prototype.tc = function () {
            return y(this, void 0, void 0, function () {
              var e, n;
              return g(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.Go.read()];
                  case 1:
                    return (
                      (e = t.sent()).done ||
                        ((n = new Uint8Array(
                          this.buffer.length + e.value.length
                        )).set(this.buffer),
                        n.set(e.value, this.buffer.length),
                        (this.buffer = n)),
                      [2, e.done]
                    );
                }
              });
            });
          }),
          bd),
        pd =
          ((wd.prototype.lookup = function (r) {
            return y(this, void 0, void 0, function () {
              var e,
                n = this;
              return g(this, function (t) {
                switch (t.label) {
                  case 0:
                    if (
                      (this.ensureCommitNotCalled(), 0 < this.mutations.length)
                    )
                      throw new Fr(
                        Mr.INVALID_ARGUMENT,
                        "Firestore transactions require all reads to be executed before all writes."
                      );
                    return [
                      4,
                      (function (s, a) {
                        return y(this, void 0, void 0, function () {
                          var n, e, r, i, o;
                          return g(this, function (t) {
                            switch (t.label) {
                              case 0:
                                return (
                                  (e = _a((n = s).R) + "/documents"),
                                  (r = {
                                    documents: a.map(function (t) {
                                      return ba(n.R, t);
                                    }),
                                  }),
                                  [4, n.$i("BatchGetDocuments", e, r)]
                                );
                              case 1:
                                return (
                                  (r = t.sent()),
                                  (i = new Map()),
                                  r.forEach(function (t) {
                                    var e,
                                      t =
                                        ((e = n.R),
                                        "found" in (t = t)
                                          ? (function (t, e) {
                                              Hr(!!e.found),
                                                e.found.name,
                                                e.found.updateTime;
                                              var n = Ea(t, e.found.name),
                                                t = ma(e.found.updateTime),
                                                e = new Bi({
                                                  mapValue: {
                                                    fields: e.found.fields,
                                                  },
                                                });
                                              return Ki.newFoundDocument(
                                                n,
                                                t,
                                                e
                                              );
                                            })(e, t)
                                          : "missing" in t
                                          ? (function (t, e) {
                                              Hr(!!e.missing), Hr(!!e.readTime);
                                              (t = Ea(t, e.missing)),
                                                (e = ma(e.readTime));
                                              return Ki.newNoDocument(t, e);
                                            })(e, t)
                                          : Qr());
                                    i.set(t.key.toString(), t);
                                  }),
                                  (o = []),
                                  [
                                    2,
                                    (a.forEach(function (t) {
                                      t = i.get(t.toString());
                                      Hr(!!t), o.push(t);
                                    }),
                                    o),
                                  ]
                                );
                            }
                          });
                        });
                      })(this.datastore, r),
                    ];
                  case 1:
                    return [
                      2,
                      ((e = t.sent()).forEach(function (t) {
                        return n.recordVersion(t);
                      }),
                      e),
                    ];
                }
              });
            });
          }),
          (wd.prototype.set = function (t, e) {
            this.write(e.toMutation(t, this.precondition(t))),
              this.writtenDocs.add(t.toString());
          }),
          (wd.prototype.update = function (t, e) {
            try {
              this.write(e.toMutation(t, this.preconditionForUpdate(t)));
            } catch (t) {
              this.lastWriteError = t;
            }
            this.writtenDocs.add(t.toString());
          }),
          (wd.prototype.delete = function (t) {
            this.write(new ks(t, this.precondition(t))),
              this.writtenDocs.add(t.toString());
          }),
          (wd.prototype.commit = function () {
            return y(this, void 0, void 0, function () {
              var e,
                n = this;
              return g(this, function (t) {
                switch (t.label) {
                  case 0:
                    if ((this.ensureCommitNotCalled(), this.lastWriteError))
                      throw this.lastWriteError;
                    return (
                      (e = this.readVersions),
                      this.mutations.forEach(function (t) {
                        e.delete(t.key.toString());
                      }),
                      e.forEach(function (t, e) {
                        e = Ai.fromPath(e);
                        n.mutations.push(new Rs(e, n.precondition(e)));
                      }),
                      [
                        4,
                        (function (i, o) {
                          return y(this, void 0, void 0, function () {
                            var e, n, r;
                            return g(this, function (t) {
                              switch (t.label) {
                                case 0:
                                  return (
                                    (n = _a((e = i).R) + "/documents"),
                                    (r = {
                                      writes: o.map(function (t) {
                                        return Na(e.R, t);
                                      }),
                                    }),
                                    [4, e.Ni("Commit", n, r)]
                                  );
                                case 1:
                                  return t.sent(), [2];
                              }
                            });
                          });
                        })(this.datastore, this.mutations),
                      ]
                    );
                  case 1:
                    return t.sent(), (this.committed = !0), [2];
                }
              });
            });
          }),
          (wd.prototype.recordVersion = function (t) {
            var e;
            if (t.isFoundDocument()) e = t.version;
            else {
              if (!t.isNoDocument()) throw Qr();
              e = Zr.min();
            }
            var n = this.readVersions.get(t.key.toString());
            if (n) {
              if (!e.isEqual(n))
                throw new Fr(
                  Mr.ABORTED,
                  "Document version changed between two reads."
                );
            } else this.readVersions.set(t.key.toString(), e);
          }),
          (wd.prototype.precondition = function (t) {
            var e = this.readVersions.get(t.toString());
            return !this.writtenDocs.has(t.toString()) && e
              ? ls.updateTime(e)
              : ls.none();
          }),
          (wd.prototype.preconditionForUpdate = function (t) {
            var e = this.readVersions.get(t.toString());
            if (this.writtenDocs.has(t.toString()) || !e) return ls.exists(!0);
            if (e.isEqual(Zr.min()))
              throw new Fr(
                Mr.INVALID_ARGUMENT,
                "Can't update a document that doesn't exist."
              );
            return ls.updateTime(e);
          }),
          (wd.prototype.write = function (t) {
            this.ensureCommitNotCalled(), this.mutations.push(t);
          }),
          (wd.prototype.ensureCommitNotCalled = function () {}),
          wd),
        yd =
          ((vd.prototype.run = function () {
            --this.ec, this.nc();
          }),
          (vd.prototype.nc = function () {
            var t = this;
            this.Zi.ji(function () {
              return y(t, void 0, void 0, function () {
                var e,
                  n,
                  r = this;
                return g(this, function (t) {
                  return (
                    (e = new pd(this.datastore)),
                    (n = this.sc(e)) &&
                      n
                        .then(function (t) {
                          r.asyncQueue.enqueueAndForget(function () {
                            return e
                              .commit()
                              .then(function () {
                                r.deferred.resolve(t);
                              })
                              .catch(function (t) {
                                r.ic(t);
                              });
                          });
                        })
                        .catch(function (t) {
                          r.ic(t);
                        }),
                    [2]
                  );
                });
              });
            });
          }),
          (vd.prototype.sc = function (t) {
            try {
              var e = this.updateFunction(t);
              return !Ii(e) && e.catch && e.then
                ? e
                : (this.deferred.reject(
                    Error("Transaction callback must return a Promise")
                  ),
                  null);
            } catch (t) {
              return this.deferred.reject(t), null;
            }
          }),
          (vd.prototype.ic = function (t) {
            var e = this;
            0 < this.ec && this.rc(t)
              ? (--this.ec,
                this.asyncQueue.enqueueAndForget(function () {
                  return e.nc(), Promise.resolve();
                }))
              : this.deferred.reject(t);
          }),
          (vd.prototype.rc = function (t) {
            if ("FirebaseError" !== t.name) return !1;
            t = t.code;
            return "aborted" === t || "failed-precondition" === t || !Ls(t);
          }),
          vd),
        gd =
          ((md.prototype.getConfiguration = function () {
            return y(this, void 0, void 0, function () {
              return g(this, function (t) {
                return [
                  2,
                  {
                    asyncQueue: this.asyncQueue,
                    databaseInfo: this.databaseInfo,
                    clientId: this.clientId,
                    credentials: this.credentials,
                    initialUser: this.user,
                    maxConcurrentLimboResolutions: 100,
                  },
                ];
              });
            });
          }),
          (md.prototype.setCredentialChangeListener = function (t) {
            this.credentialListener = t;
          }),
          (md.prototype.verifyNotTerminated = function () {
            if (this.asyncQueue.isShuttingDown)
              throw new Fr(
                Mr.FAILED_PRECONDITION,
                "The client has already been terminated."
              );
          }),
          (md.prototype.terminate = function () {
            var t = this;
            this.asyncQueue.enterRestrictedMode();
            var n = new cu();
            return (
              this.asyncQueue.enqueueAndForgetEvenWhileRestricted(function () {
                return y(t, void 0, void 0, function () {
                  var e;
                  return g(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return (
                          t.trys.push([0, 5, , 6]),
                          this.onlineComponents
                            ? [4, this.onlineComponents.terminate()]
                            : [3, 2]
                        );
                      case 1:
                        t.sent(), (t.label = 2);
                      case 2:
                        return this.offlineComponents
                          ? [4, this.offlineComponents.terminate()]
                          : [3, 4];
                      case 3:
                        t.sent(), (t.label = 4);
                      case 4:
                        return (
                          this.credentials.removeChangeListener(),
                          n.resolve(),
                          [3, 6]
                        );
                      case 5:
                        return (
                          (e = t.sent()),
                          (e = of(e, "Failed to shutdown persistence")),
                          n.reject(e),
                          [3, 6]
                        );
                      case 6:
                        return [2];
                    }
                  });
                });
              }),
              n.promise
            );
          }),
          md);
      function md(t, e, n) {
        var r = this;
        (this.credentials = t),
          (this.asyncQueue = e),
          (this.databaseInfo = n),
          (this.user = Oh.UNAUTHENTICATED),
          (this.clientId = zr.u()),
          (this.credentialListener = function () {
            return Promise.resolve();
          }),
          this.credentials.setChangeListener(e, function (e) {
            return y(r, void 0, void 0, function () {
              return g(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      Br("FirestoreClient", "Received user=", e.uid),
                      [4, this.credentialListener(e)]
                    );
                  case 1:
                    return t.sent(), (this.user = e), [2];
                }
              });
            });
          });
      }
      function vd(t, e, n, r) {
        (this.asyncQueue = t),
          (this.datastore = e),
          (this.updateFunction = n),
          (this.deferred = r),
          (this.ec = 5),
          (this.Zi = new Al(this.asyncQueue, "transaction_retry"));
      }
      function wd(t) {
        (this.datastore = t),
          (this.readVersions = new Map()),
          (this.mutations = []),
          (this.committed = !1),
          (this.lastWriteError = null),
          (this.writtenDocs = new Set());
      }
      function bd(t, e) {
        var n = this;
        (this.Go = t),
          (this.R = e),
          (this.metadata = new cu()),
          (this.buffer = new Uint8Array()),
          (this.zo = new TextDecoder("utf-8")),
          this.Ho().then(
            function (t) {
              t && t.io()
                ? n.metadata.resolve(t.payload.metadata)
                : n.metadata.reject(
                    new Error(
                      "The first element of the bundle is not a metadata, it is\n             " +
                        JSON.stringify(null == t ? void 0 : t.payload)
                    )
                  );
            },
            function (t) {
              return n.metadata.reject(t);
            }
          );
      }
      function Ed(t) {
        (this.observer = t), (this.muted = !1);
      }
      function Td(i, o) {
        return y(this, void 0, void 0, function () {
          var e,
            n,
            r = this;
          return g(this, function (t) {
            switch (t.label) {
              case 0:
                return (
                  i.asyncQueue.verifyOperationInProgress(),
                  Br(
                    "FirestoreClient",
                    "Initializing OfflineComponentProvider"
                  ),
                  [4, i.getConfiguration()]
                );
              case 1:
                return (e = t.sent()), [4, o.initialize(e)];
              case 2:
                return (
                  t.sent(),
                  (n = e.initialUser),
                  i.setCredentialChangeListener(function (e) {
                    return y(r, void 0, void 0, function () {
                      return g(this, function (t) {
                        switch (t.label) {
                          case 0:
                            return n.isEqual(e)
                              ? [3, 2]
                              : [4, hh(o.localStore, e)];
                          case 1:
                            t.sent(), (n = e), (t.label = 2);
                          case 2:
                            return [2];
                        }
                      });
                    });
                  }),
                  o.persistence.setDatabaseDeletedListener(function () {
                    return i.terminate();
                  }),
                  (i.offlineComponents = o),
                  [2]
                );
            }
          });
        });
      }
      function Id(r, i) {
        return y(this, void 0, void 0, function () {
          var e, n;
          return g(this, function (t) {
            switch (t.label) {
              case 0:
                return r.asyncQueue.verifyOperationInProgress(), [4, _d(r)];
              case 1:
                return (
                  (e = t.sent()),
                  Br("FirestoreClient", "Initializing OnlineComponentProvider"),
                  [4, r.getConfiguration()]
                );
              case 2:
                return (n = t.sent()), [4, i.initialize(e, n)];
              case 3:
                return (
                  t.sent(),
                  r.setCredentialChangeListener(function (t) {
                    return (function (r, i) {
                      return y(this, void 0, void 0, function () {
                        var e, n;
                        return g(this, function (t) {
                          switch (t.label) {
                            case 0:
                              return (
                                (e = r).asyncQueue.verifyOperationInProgress(),
                                Br(
                                  "RemoteStore",
                                  "RemoteStore received new credentials"
                                ),
                                (n = Ql(e)),
                                e.Or.add(3),
                                [4, Vl(e)]
                              );
                            case 1:
                              return (
                                t.sent(),
                                n && e.Br.set("Unknown"),
                                [4, e.remoteSyncer.handleCredentialChange(i)]
                              );
                            case 2:
                              return t.sent(), e.Or.delete(3), [4, Fl(e)];
                            case 3:
                              return t.sent(), [2];
                          }
                        });
                      });
                    })(i.remoteStore, t);
                  }),
                  (r.onlineComponents = i),
                  [2]
                );
            }
          });
        });
      }
      function _d(e) {
        return y(this, void 0, void 0, function () {
          return g(this, function (t) {
            switch (t.label) {
              case 0:
                return e.offlineComponents
                  ? [3, 2]
                  : (Br(
                      "FirestoreClient",
                      "Using default OfflineComponentProvider"
                    ),
                    [4, Td(e, new rd())]);
              case 1:
                t.sent(), (t.label = 2);
              case 2:
                return [2, e.offlineComponents];
            }
          });
        });
      }
      function Sd(e) {
        return y(this, void 0, void 0, function () {
          return g(this, function (t) {
            switch (t.label) {
              case 0:
                return e.onlineComponents
                  ? [3, 2]
                  : (Br(
                      "FirestoreClient",
                      "Using default OnlineComponentProvider"
                    ),
                    [4, Id(e, new sd())]);
              case 1:
                t.sent(), (t.label = 2);
              case 2:
                return [2, e.onlineComponents];
            }
          });
        });
      }
      function Ad(t) {
        return _d(t).then(function (t) {
          return t.persistence;
        });
      }
      function Dd(t) {
        return _d(t).then(function (t) {
          return t.localStore;
        });
      }
      function Nd(t) {
        return Sd(t).then(function (t) {
          return t.remoteStore;
        });
      }
      function Cd(t) {
        return Sd(t).then(function (t) {
          return t.syncEngine;
        });
      }
      function kd(r) {
        return y(this, void 0, void 0, function () {
          var e, n;
          return g(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, Sd(r)];
              case 1:
                return (
                  (e = t.sent()),
                  [
                    2,
                    (((n = e.eventManager).onListen = function (s, a) {
                      return y(this, void 0, void 0, function () {
                        var e, n, r, i, o;
                        return g(this, function (t) {
                          switch (t.label) {
                            case 0:
                              return (
                                (e = Jf(s)),
                                (o = e.Po.get(a))
                                  ? ((n = o.targetId),
                                    e.sharedClientState.addLocalQueryTarget(n),
                                    (r = o.view.Ro()),
                                    [3, 4])
                                  : [3, 1]
                              );
                            case 1:
                              return [4, yh(e.localStore, Mo(a))];
                            case 2:
                              return (
                                (i = t.sent()),
                                (o = e.sharedClientState.addLocalQueryTarget(
                                  i.targetId
                                )),
                                (n = i.targetId),
                                [4, Lf(e, a, n, "current" === o)]
                              );
                            case 3:
                              (r = t.sent()),
                                e.isPrimaryClient && Ul(e.remoteStore, i),
                                (t.label = 4);
                            case 4:
                              return [2, r];
                          }
                        });
                      });
                    }.bind(null, e.syncEngine)),
                    (n.onUnlisten = function (i, o) {
                      return y(this, void 0, void 0, function () {
                        var e, n, r;
                        return g(this, function (t) {
                          switch (t.label) {
                            case 0:
                              return (
                                (n = (e = i).Po.get(o)),
                                1 < (r = e.Vo.get(n.targetId)).length
                                  ? [
                                      2,
                                      (e.Vo.set(
                                        n.targetId,
                                        r.filter(function (t) {
                                          return !Vo(t, o);
                                        })
                                      ),
                                      void e.Po.delete(o)),
                                    ]
                                  : e.isPrimaryClient
                                  ? (e.sharedClientState.removeLocalQueryTarget(
                                      n.targetId
                                    ),
                                    e.sharedClientState.isActiveQueryTarget(
                                      n.targetId
                                    )
                                      ? [3, 2]
                                      : [
                                          4,
                                          gh(e.localStore, n.targetId, !1)
                                            .then(function () {
                                              e.sharedClientState.clearQueryState(
                                                n.targetId
                                              ),
                                                ql(e.remoteStore, n.targetId),
                                                jf(e, n.targetId);
                                            })
                                            .catch(Ic),
                                        ])
                                  : [3, 3]
                              );
                            case 1:
                              t.sent(), (t.label = 2);
                            case 2:
                              return [3, 5];
                            case 3:
                              return (
                                jf(e, n.targetId),
                                [4, gh(e.localStore, n.targetId, !0)]
                              );
                            case 4:
                              t.sent(), (t.label = 5);
                            case 5:
                              return [2];
                          }
                        });
                      });
                    }.bind(null, e.syncEngine)),
                    n),
                  ]
                );
            }
          });
        });
      }
      function Rd(n, r, i) {
        var t = this;
        void 0 === i && (i = {});
        var o = new cu();
        return (
          n.asyncQueue.enqueueAndForget(function () {
            return y(t, void 0, void 0, function () {
              var e;
              return g(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      (e = function (n, r, i, o, s) {
                        var t = new fd({
                            next: function (t) {
                              r.enqueueAndForget(function () {
                                return yf(n, a);
                              });
                              var e = t.docs.has(i);
                              !e && t.fromCache
                                ? s.reject(
                                    new Fr(
                                      Mr.UNAVAILABLE,
                                      "Failed to get document because the client is offline."
                                    )
                                  )
                                : e && t.fromCache && o && "server" === o.source
                                ? s.reject(
                                    new Fr(
                                      Mr.UNAVAILABLE,
                                      'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)'
                                    )
                                  )
                                : s.resolve(t);
                            },
                            error: function (t) {
                              return s.reject(t);
                            },
                          }),
                          a = new mf(Co(i.path), t, {
                            includeMetadataChanges: !0,
                            so: !0,
                          });
                        return pf(n, a);
                      }),
                      [4, kd(n)]
                    );
                  case 1:
                    return [
                      2,
                      e.apply(void 0, [t.sent(), n.asyncQueue, r, i, o]),
                    ];
                }
              });
            });
          }),
          o.promise
        );
      }
      function xd(n, r, i) {
        var t = this;
        void 0 === i && (i = {});
        var o = new cu();
        return (
          n.asyncQueue.enqueueAndForget(function () {
            return y(t, void 0, void 0, function () {
              var e;
              return g(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      (e = function (e, n, t, r, i) {
                        var o = new fd({
                            next: function (t) {
                              n.enqueueAndForget(function () {
                                return yf(e, s);
                              }),
                                t.fromCache && "server" === r.source
                                  ? i.reject(
                                      new Fr(
                                        Mr.UNAVAILABLE,
                                        'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)'
                                      )
                                    )
                                  : i.resolve(t);
                            },
                            error: function (t) {
                              return i.reject(t);
                            },
                          }),
                          s = new mf(t, o, {
                            includeMetadataChanges: !0,
                            so: !0,
                          });
                        return pf(e, s);
                      }),
                      [4, kd(n)]
                    );
                  case 1:
                    return [
                      2,
                      e.apply(void 0, [t.sent(), n.asyncQueue, r, i, o]),
                    ];
                }
              });
            });
          }),
          o.promise
        );
      }
      function Od(t, e) {
        (this.user = e),
          (this.type = "OAuth"),
          (this.authHeaders = {}),
          (this.authHeaders.Authorization = "Bearer " + t);
      }
      var Ld = function (t, e, n, r, i, o, s, a) {
          (this.databaseId = t),
            (this.appId = e),
            (this.persistenceKey = n),
            (this.host = r),
            (this.ssl = i),
            (this.forceLongPolling = o),
            (this.autoDetectLongPolling = s),
            (this.useFetchStreams = a);
        },
        Pd =
          (Object.defineProperty(zd.prototype, "isDefaultDatabase", {
            get: function () {
              return "(default)" === this.database;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (zd.prototype.isEqual = function (t) {
            return (
              t instanceof zd &&
              t.projectId === this.projectId &&
              t.database === this.database
            );
          }),
          zd),
        Md = new Map(),
        Fd =
          ((Hd.prototype.getToken = function () {
            return Promise.resolve(null);
          }),
          (Hd.prototype.invalidateToken = function () {}),
          (Hd.prototype.setChangeListener = function (t, e) {
            (this.changeListener = e),
              t.enqueueRetryable(function () {
                return e(Oh.UNAUTHENTICATED);
              });
          }),
          (Hd.prototype.removeChangeListener = function () {
            this.changeListener = null;
          }),
          Hd),
        Vd =
          ((Qd.prototype.getToken = function () {
            return Promise.resolve(this.token);
          }),
          (Qd.prototype.invalidateToken = function () {}),
          (Qd.prototype.setChangeListener = function (t, e) {
            var n = this;
            (this.changeListener = e),
              t.enqueueRetryable(function () {
                return e(n.token.user);
              });
          }),
          (Qd.prototype.removeChangeListener = function () {
            this.changeListener = null;
          }),
          Qd),
        Ud =
          ((Gd.prototype.getToken = function () {
            var e = this,
              n = this.cc,
              t = this.forceRefresh;
            return (
              (this.forceRefresh = !1),
              this.auth
                ? this.auth.getToken(t).then(function (t) {
                    return e.cc !== n
                      ? (Br(
                          "FirebaseCredentialsProvider",
                          "getToken aborted due to token change."
                        ),
                        e.getToken())
                      : t
                      ? (Hr("string" == typeof t.accessToken),
                        new Od(t.accessToken, e.currentUser))
                      : null;
                  })
                : Promise.resolve(null)
            );
          }),
          (Gd.prototype.invalidateToken = function () {
            this.forceRefresh = !0;
          }),
          (Gd.prototype.setChangeListener = function (t, e) {
            var n = this;
            (this.asyncQueue = t),
              this.asyncQueue.enqueueRetryable(function () {
                return y(n, void 0, void 0, function () {
                  return g(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, this.oc.promise];
                      case 1:
                        return t.sent(), [4, e(this.currentUser)];
                      case 2:
                        return t.sent(), (this.changeListener = e), [2];
                    }
                  });
                });
              });
          }),
          (Gd.prototype.removeChangeListener = function () {
            this.auth && this.auth.removeAuthTokenListener(this.uc),
              (this.changeListener = function () {
                return Promise.resolve();
              });
          }),
          (Gd.prototype.ac = function () {
            var t = this.auth && this.auth.getUid();
            return Hr(null === t || "string" == typeof t), new Oh(t);
          }),
          Gd),
        qd =
          (Object.defineProperty(Kd.prototype, "authHeaders", {
            get: function () {
              var t = { "X-Goog-AuthUser": this.lc },
                e = this.hc.auth.getAuthHeaderValueForFirstParty([]);
              return (
                e && (t.Authorization = e),
                this.fc && (t["X-Goog-Iam-Authorization-Token"] = this.fc),
                t
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          Kd),
        Bd =
          ((jd.prototype.getToken = function () {
            return Promise.resolve(new qd(this.hc, this.lc, this.fc));
          }),
          (jd.prototype.setChangeListener = function (t, e) {
            t.enqueueRetryable(function () {
              return e(Oh.FIRST_PARTY);
            });
          }),
          (jd.prototype.removeChangeListener = function () {}),
          (jd.prototype.invalidateToken = function () {}),
          jd);
      function jd(t, e, n) {
        (this.hc = t), (this.lc = e), (this.fc = n);
      }
      function Kd(t, e, n) {
        (this.hc = t),
          (this.lc = e),
          (this.fc = n),
          (this.type = "FirstParty"),
          (this.user = Oh.FIRST_PARTY);
      }
      function Gd(e) {
        var n = this;
        (this.currentUser = Oh.UNAUTHENTICATED),
          (this.oc = new cu()),
          (this.cc = 0),
          (this.forceRefresh = !1),
          (this.auth = null),
          (this.asyncQueue = null),
          (this.uc = function () {
            n.cc++,
              (n.currentUser = n.ac()),
              n.oc.resolve(),
              n.changeListener &&
                n.asyncQueue.enqueueRetryable(function () {
                  return n.changeListener(n.currentUser);
                });
          });
        function r(t) {
          Br("FirebaseCredentialsProvider", "Auth detected"),
            (n.auth = t),
            n.auth.addAuthTokenListener(n.uc);
        }
        e.onInit(r),
          setTimeout(function () {
            var t;
            n.auth ||
              ((t = e.getImmediate({ optional: !0 }))
                ? r(t)
                : (Br("FirebaseCredentialsProvider", "Auth not yet detected"),
                  n.oc.resolve()));
          }, 0);
      }
      function Qd(t) {
        (this.token = t), (this.changeListener = null);
      }
      function Hd() {
        this.changeListener = null;
      }
      function zd(t, e) {
        (this.projectId = t), (this.database = e || "(default)");
      }
      function Wd(t, e, n) {
        if (!n)
          throw new Fr(
            Mr.INVALID_ARGUMENT,
            "Function " + t + "() cannot be called with an empty " + e + "."
          );
      }
      function Yd(t, e) {
        if (void 0 === e) return { merge: !1 };
        if (void 0 !== e.mergeFields && void 0 !== e.merge)
          throw new Fr(
            Mr.INVALID_ARGUMENT,
            "Invalid options passed to function " +
              t +
              '(): You cannot specify both "merge" and "mergeFields".'
          );
        return e;
      }
      function Xd(t, e, n, r) {
        if (!0 === e && !0 === r)
          throw new Fr(
            Mr.INVALID_ARGUMENT,
            t + " and " + n + " cannot be used together."
          );
      }
      function $d(t) {
        if (!Ai.isDocumentKey(t))
          throw new Fr(
            Mr.INVALID_ARGUMENT,
            "Invalid document reference. Document references must have an even number of segments, but " +
              t +
              " has " +
              t.length +
              "."
          );
      }
      function Jd(t) {
        if (Ai.isDocumentKey(t))
          throw new Fr(
            Mr.INVALID_ARGUMENT,
            "Invalid collection reference. Collection references must have an odd number of segments, but " +
              t +
              " has " +
              t.length +
              "."
          );
      }
      function Zd(e) {
        if (void 0 === e) return "undefined";
        if (null === e) return "null";
        if ("string" == typeof e)
          return (
            20 < e.length && (e = e.substring(0, 20) + "..."), JSON.stringify(e)
          );
        if ("number" == typeof e || "boolean" == typeof e) return "" + e;
        if ("object" != typeof e)
          return "function" == typeof e ? "a function" : Qr();
        if (e instanceof Array) return "an array";
        var t = (function () {
          if (e.constructor) {
            var t = /function\s+([^\s(]+)\s*\(/.exec(e.constructor.toString());
            if (t && 1 < t.length) return t[1];
          }
          return null;
        })();
        return t ? "a custom " + t + " object" : "an object";
      }
      function tp(t, e) {
        if ((t = "_delegate" in t ? t._delegate : t) instanceof e) return t;
        if (e.name === t.constructor.name)
          throw new Fr(
            Mr.INVALID_ARGUMENT,
            "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?"
          );
        t = Zd(t);
        throw new Fr(
          Mr.INVALID_ARGUMENT,
          "Expected type '" + e.name + "', but it was: " + t
        );
      }
      function ep(t, e) {
        if (e <= 0)
          throw new Fr(
            Mr.INVALID_ARGUMENT,
            "Function " +
              t +
              "() requires a positive number, but it was: " +
              e +
              "."
          );
      }
      var np,
        rp =
          ((fp.prototype.isEqual = function (t) {
            return (
              this.host === t.host &&
              this.ssl === t.ssl &&
              this.credentials === t.credentials &&
              this.cacheSizeBytes === t.cacheSizeBytes &&
              this.experimentalForceLongPolling ===
                t.experimentalForceLongPolling &&
              this.experimentalAutoDetectLongPolling ===
                t.experimentalAutoDetectLongPolling &&
              this.ignoreUndefinedProperties === t.ignoreUndefinedProperties &&
              this.useFetchStreams === t.useFetchStreams
            );
          }),
          fp),
        ip =
          (Object.defineProperty(lp.prototype, "app", {
            get: function () {
              if (!this._app)
                throw new Fr(
                  Mr.FAILED_PRECONDITION,
                  "Firestore was not initialized using the Firebase SDK. 'app' is not available"
                );
              return this._app;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(lp.prototype, "_initialized", {
            get: function () {
              return this._settingsFrozen;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(lp.prototype, "_terminated", {
            get: function () {
              return void 0 !== this._terminateTask;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (lp.prototype._setSettings = function (t) {
            if (this._settingsFrozen)
              throw new Fr(
                Mr.FAILED_PRECONDITION,
                "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object."
              );
            (this._settings = new rp(t)),
              void 0 !== t.credentials &&
                (this._credentials = (function (t) {
                  if (!t) return new Fd();
                  switch (t.type) {
                    case "gapi":
                      var e = t.client;
                      return (
                        Hr(
                          !(
                            "object" != typeof e ||
                            null === e ||
                            !e.auth ||
                            !e.auth.getAuthHeaderValueForFirstParty
                          )
                        ),
                        new Bd(e, t.sessionIndex || "0", t.iamToken || null)
                      );
                    case "provider":
                      return t.client;
                    default:
                      throw new Fr(
                        Mr.INVALID_ARGUMENT,
                        "makeCredentialsProvider failed due to invalid credential type"
                      );
                  }
                })(t.credentials));
          }),
          (lp.prototype._getSettings = function () {
            return this._settings;
          }),
          (lp.prototype._freezeSettings = function () {
            return (this._settingsFrozen = !0), this._settings;
          }),
          (lp.prototype._delete = function () {
            return (
              this._terminateTask || (this._terminateTask = this._terminate()),
              this._terminateTask
            );
          }),
          (lp.prototype.toJSON = function () {
            return {
              app: this._app,
              databaseId: this._databaseId,
              settings: this._settings,
            };
          }),
          (lp.prototype._terminate = function () {
            return (
              (t = Md.get(this)) &&
                (Br("ComponentProvider", "Removing Datastore"),
                Md.delete(this),
                t.terminate()),
              Promise.resolve()
            );
            var t;
          }),
          lp),
        op =
          (Object.defineProperty(hp.prototype, "_path", {
            get: function () {
              return this._key.path;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(hp.prototype, "id", {
            get: function () {
              return this._key.path.lastSegment();
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(hp.prototype, "path", {
            get: function () {
              return this._key.path.canonicalString();
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(hp.prototype, "parent", {
            get: function () {
              return new ap(
                this.firestore,
                this.converter,
                this._key.path.popLast()
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          (hp.prototype.withConverter = function (t) {
            return new hp(this.firestore, t, this._key);
          }),
          hp),
        sp =
          ((cp.prototype.withConverter = function (t) {
            return new cp(this.firestore, t, this._query);
          }),
          cp),
        ap =
          (n(up, (np = sp)),
          Object.defineProperty(up.prototype, "id", {
            get: function () {
              return this._query.path.lastSegment();
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(up.prototype, "path", {
            get: function () {
              return this._query.path.canonicalString();
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(up.prototype, "parent", {
            get: function () {
              var t = this._path.popLast();
              return t.isEmpty()
                ? null
                : new op(this.firestore, null, new Ai(t));
            },
            enumerable: !1,
            configurable: !0,
          }),
          (up.prototype.withConverter = function (t) {
            return new up(this.firestore, t, this._path);
          }),
          up);
      function up(t, e, n) {
        var r = this;
        return (
          ((r = np.call(this, t, e, Co(n)) || this)._path = n),
          (r.type = "collection"),
          r
        );
      }
      function cp(t, e, n) {
        (this.converter = e),
          (this._query = n),
          (this.type = "query"),
          (this.firestore = t);
      }
      function hp(t, e, n) {
        (this.converter = e),
          (this._key = n),
          (this.type = "document"),
          (this.firestore = t);
      }
      function lp(t, e) {
        (this.type = "firestore-lite"),
          (this._persistenceKey = "(lite)"),
          (this._settings = new rp({})),
          (this._settingsFrozen = !1),
          t instanceof Pd
            ? ((this._databaseId = t), (this._credentials = new Fd()))
            : ((this._app = t),
              (this._databaseId = (function (t) {
                if (
                  !Object.prototype.hasOwnProperty.apply(t.options, [
                    "projectId",
                  ])
                )
                  throw new Fr(
                    Mr.INVALID_ARGUMENT,
                    '"projectId" not provided in firebase.initializeApp.'
                  );
                return new Pd(t.options.projectId);
              })(t)),
              (this._credentials = new Ud(e)));
      }
      function fp(t) {
        var e;
        if (void 0 === t.host) {
          if (void 0 !== t.ssl)
            throw new Fr(
              Mr.INVALID_ARGUMENT,
              "Can't provide ssl option if host option is not set"
            );
          (this.host = "firestore.googleapis.com"), (this.ssl = !0);
        } else
          (this.host = t.host),
            (this.ssl = null === (e = t.ssl) || void 0 === e || e);
        if (
          ((this.credentials = t.credentials),
          (this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties),
          void 0 === t.cacheSizeBytes)
        )
          this.cacheSizeBytes = 41943040;
        else {
          if (-1 !== t.cacheSizeBytes && t.cacheSizeBytes < 1048576)
            throw new Fr(
              Mr.INVALID_ARGUMENT,
              "cacheSizeBytes must be at least 1048576"
            );
          this.cacheSizeBytes = t.cacheSizeBytes;
        }
        (this.experimentalForceLongPolling = !!t.experimentalForceLongPolling),
          (this.experimentalAutoDetectLongPolling =
            !!t.experimentalAutoDetectLongPolling),
          (this.useFetchStreams = !!t.useFetchStreams),
          Xd(
            "experimentalForceLongPolling",
            t.experimentalForceLongPolling,
            "experimentalAutoDetectLongPolling",
            t.experimentalAutoDetectLongPolling
          );
      }
      function dp(t, e) {
        for (var n, r = [], i = 2; i < arguments.length; i++)
          r[i - 2] = arguments[i];
        if (((t = w(t)), Wd("collection", "path", e), t instanceof ip))
          return (
            Jd((n = ai.fromString.apply(ai, s([e], r)))), new ap(t, null, n)
          );
        if (!(t instanceof op || t instanceof ap))
          throw new Fr(
            Mr.INVALID_ARGUMENT,
            "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore"
          );
        return (
          Jd(
            (n = ai.fromString
              .apply(ai, s([t.path], r))
              .child(ai.fromString(e)))
          ),
          new ap(t.firestore, null, n)
        );
      }
      function pp(t, e) {
        for (var n, r = [], i = 2; i < arguments.length; i++)
          r[i - 2] = arguments[i];
        if (
          ((t = w(t)),
          Wd("doc", "path", (e = 1 === arguments.length ? zr.u() : e)),
          t instanceof ip)
        )
          return (
            $d((n = ai.fromString.apply(ai, s([e], r)))),
            new op(t, null, new Ai(n))
          );
        if (!(t instanceof op || t instanceof ap))
          throw new Fr(
            Mr.INVALID_ARGUMENT,
            "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore"
          );
        return (
          $d((n = t._path.child(ai.fromString.apply(ai, s([e], r))))),
          new op(t.firestore, t instanceof ap ? t.converter : null, new Ai(n))
        );
      }
      function yp(t, e) {
        return (
          (t = w(t)),
          (e = w(e)),
          (t instanceof op || t instanceof ap) &&
            (e instanceof op || e instanceof ap) &&
            t.firestore === e.firestore &&
            t.path === e.path &&
            t.converter === e.converter
        );
      }
      function gp(t, e) {
        return (
          (t = w(t)),
          (e = w(e)),
          t instanceof sp &&
            e instanceof sp &&
            t.firestore === e.firestore &&
            Vo(t._query, e._query) &&
            t.converter === e.converter
        );
      }
      var mp =
        (Object.defineProperty(vp.prototype, "isShuttingDown", {
          get: function () {
            return this._c;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (vp.prototype.enqueueAndForget = function (t) {
          this.enqueue(t);
        }),
        (vp.prototype.enqueueAndForgetEvenWhileRestricted = function (t) {
          this.Ac(), this.Rc(t);
        }),
        (vp.prototype.enterRestrictedMode = function (t) {
          this._c ||
            ((this._c = !0),
            (this.Ec = t || !1),
            (t = bl()) &&
              "function" == typeof t.removeEventListener &&
              t.removeEventListener("visibilitychange", this.Ic));
        }),
        (vp.prototype.enqueue = function (t) {
          var e = this;
          if ((this.Ac(), this._c)) return new Promise(function () {});
          var n = new cu();
          return this.Rc(function () {
            return e._c && e.Ec
              ? Promise.resolve()
              : (t().then(n.resolve, n.reject), n.promise);
          }).then(function () {
            return n.promise;
          });
        }),
        (vp.prototype.enqueueRetryable = function (t) {
          var e = this;
          this.enqueueAndForget(function () {
            return e.wc.push(t), e.bc();
          });
        }),
        (vp.prototype.bc = function () {
          return y(this, void 0, void 0, function () {
            var e,
              n = this;
            return g(this, function (t) {
              switch (t.label) {
                case 0:
                  if (0 === this.wc.length) return [3, 5];
                  t.label = 1;
                case 1:
                  return t.trys.push([1, 3, , 4]), [4, this.wc[0]()];
                case 2:
                  return t.sent(), this.wc.shift(), this.Zi.reset(), [3, 4];
                case 3:
                  if (!Eu((e = t.sent()))) throw e;
                  return (
                    Br(
                      "AsyncQueue",
                      "Operation failed with retryable error: " + e
                    ),
                    [3, 4]
                  );
                case 4:
                  0 < this.wc.length &&
                    this.Zi.ji(function () {
                      return n.bc();
                    }),
                    (t.label = 5);
                case 5:
                  return [2];
              }
            });
          });
        }),
        (vp.prototype.Rc = function (t) {
          var r = this,
            e = this.dc.then(function () {
              return (
                (r.gc = !0),
                t()
                  .catch(function (t) {
                    throw (
                      ((r.yc = t),
                      (r.gc = !1),
                      jr(
                        "INTERNAL UNHANDLED ERROR: ",
                        ((n = (e = t).message || ""),
                        (n = e.stack
                          ? e.stack.includes(e.message)
                            ? e.stack
                            : e.message + "\n" + e.stack
                          : n))
                      ),
                      t)
                    );
                    var e, n;
                  })
                  .then(function (t) {
                    return (r.gc = !1), t;
                  })
              );
            });
          return (this.dc = e);
        }),
        (vp.prototype.enqueueAfterDelay = function (t, e, n) {
          var r = this;
          this.Ac(), -1 < this.Tc.indexOf(t) && (e = 0);
          n = nf.createAndSchedule(this, t, e, n, function (t) {
            return r.vc(t);
          });
          return this.mc.push(n), n;
        }),
        (vp.prototype.Ac = function () {
          this.yc && Qr();
        }),
        (vp.prototype.verifyOperationInProgress = function () {}),
        (vp.prototype.Pc = function () {
          return y(this, void 0, void 0, function () {
            var e;
            return g(this, function (t) {
              switch (t.label) {
                case 0:
                  return [4, (e = this.dc)];
                case 1:
                  t.sent(), (t.label = 2);
                case 2:
                  if (e !== this.dc) return [3, 0];
                  t.label = 3;
                case 3:
                  return [2];
              }
            });
          });
        }),
        (vp.prototype.Vc = function (t) {
          for (var e = 0, n = this.mc; e < n.length; e++)
            if (n[e].timerId === t) return !0;
          return !1;
        }),
        (vp.prototype.Sc = function (r) {
          var i = this;
          return this.Pc().then(function () {
            i.mc.sort(function (t, e) {
              return t.targetTimeMs - e.targetTimeMs;
            });
            for (var t = 0, e = i.mc; t < e.length; t++) {
              var n = e[t];
              if ((n.skipDelay(), "all" !== r && n.timerId === r)) break;
            }
            return i.Pc();
          });
        }),
        (vp.prototype.Dc = function (t) {
          this.Tc.push(t);
        }),
        (vp.prototype.vc = function (t) {
          t = this.mc.indexOf(t);
          this.mc.splice(t, 1);
        }),
        vp);
      function vp() {
        var e = this;
        (this.dc = Promise.resolve()),
          (this.wc = []),
          (this._c = !1),
          (this.mc = []),
          (this.yc = null),
          (this.gc = !1),
          (this.Ec = !1),
          (this.Tc = []),
          (this.Zi = new Al(this, "async_queue_retry")),
          (this.Ic = function () {
            var t = bl();
            t &&
              Br(
                "AsyncQueue",
                "Visibility state changed to " + t.visibilityState
              ),
              e.Zi.Gi();
          });
        var t = bl();
        t &&
          "function" == typeof t.addEventListener &&
          t.addEventListener("visibilitychange", this.Ic);
      }
      function wp(i) {
        return (function () {
          if ("object" == typeof i && null !== i)
            for (
              var t = i, e = 0, n = ["next", "error", "complete"];
              e < n.length;
              e++
            ) {
              var r = n[e];
              if (r in t && "function" == typeof t[r]) return 1;
            }
        })();
      }
      var bp,
        Ep =
          ((_p.prototype.onProgress = function (t, e, n) {
            this._progressObserver = { next: t, error: e, complete: n };
          }),
          (_p.prototype.catch = function (t) {
            return this._taskCompletionResolver.promise.catch(t);
          }),
          (_p.prototype.then = function (t, e) {
            return this._taskCompletionResolver.promise.then(t, e);
          }),
          (_p.prototype._completeWith = function (t) {
            this._updateProgress(t),
              this._progressObserver.complete &&
                this._progressObserver.complete(),
              this._taskCompletionResolver.resolve(t);
          }),
          (_p.prototype._failWith = function (t) {
            (this._lastProgress.taskState = "Error"),
              this._progressObserver.next &&
                this._progressObserver.next(this._lastProgress),
              this._progressObserver.error && this._progressObserver.error(t),
              this._taskCompletionResolver.reject(t);
          }),
          (_p.prototype._updateProgress = function (t) {
            (this._lastProgress = t),
              this._progressObserver.next && this._progressObserver.next(t);
          }),
          _p),
        Tp =
          (n(Ip, (bp = ip)),
          (Ip.prototype._terminate = function () {
            return (
              this._firestoreClient || Ap(this),
              this._firestoreClient.terminate()
            );
          }),
          Ip);
      function Ip(t, e) {
        var n = this;
        return (
          ((n = bp.call(this, t, e) || this).type = "firestore"),
          (n._queue = new mp()),
          (n._persistenceKey = "name" in t ? t.name : "[DEFAULT]"),
          n
        );
      }
      function _p() {
        (this._progressObserver = {}),
          (this._taskCompletionResolver = new cu()),
          (this._lastProgress = {
            taskState: "Running",
            totalBytes: 0,
            totalDocuments: 0,
            bytesLoaded: 0,
            documentsLoaded: 0,
          });
      }
      function Sp(t) {
        return (
          t._firestoreClient || Ap(t),
          t._firestoreClient.verifyNotTerminated(),
          t._firestoreClient
        );
      }
      function Ap(t) {
        var e,
          n,
          r,
          i = t._freezeSettings(),
          i =
            ((e = t._databaseId),
            (n =
              (null === (r = t._app) || void 0 === r
                ? void 0
                : r.options.appId) || ""),
            (r = t._persistenceKey),
            new Ld(
              e,
              n,
              r,
              i.host,
              i.ssl,
              i.experimentalForceLongPolling,
              i.experimentalAutoDetectLongPolling,
              i.useFetchStreams
            ));
        t._firestoreClient = new gd(t._credentials, t._queue, i);
      }
      function Dp(n, r, i) {
        var t = this,
          o = new cu();
        return n.asyncQueue
          .enqueue(function () {
            return y(t, void 0, void 0, function () {
              var e;
              return g(this, function (t) {
                switch (t.label) {
                  case 0:
                    return t.trys.push([0, 3, , 4]), [4, Td(n, i)];
                  case 1:
                    return t.sent(), [4, Id(n, r)];
                  case 2:
                    return t.sent(), o.resolve(), [3, 4];
                  case 3:
                    if (
                      !("FirebaseError" === (e = t.sent()).name
                        ? e.code === Mr.FAILED_PRECONDITION ||
                          e.code === Mr.UNIMPLEMENTED
                        : !(
                            "undefined" != typeof DOMException &&
                            e instanceof DOMException
                          ) ||
                          22 === e.code ||
                          20 === e.code ||
                          11 === e.code)
                    )
                      throw e;
                    return (
                      console.warn(
                        "Error enabling offline persistence. Falling back to persistence disabled: " +
                          e
                      ),
                      o.reject(e),
                      [3, 4]
                    );
                  case 4:
                    return [2];
                }
              });
            });
          })
          .then(function () {
            return o.promise;
          });
      }
      function Np(t) {
        if (t._initialized || t._terminated)
          throw new Fr(
            Mr.FAILED_PRECONDITION,
            "Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object."
          );
      }
      var Cp =
          ((qp.prototype.isEqual = function (t) {
            return this._internalPath.isEqual(t._internalPath);
          }),
          qp),
        kp =
          ((Up.fromBase64String = function (t) {
            try {
              return new Up(li.fromBase64String(t));
            } catch (t) {
              throw new Fr(
                Mr.INVALID_ARGUMENT,
                "Failed to construct data from Base64 string: " + t
              );
            }
          }),
          (Up.fromUint8Array = function (t) {
            return new Up(li.fromUint8Array(t));
          }),
          (Up.prototype.toBase64 = function () {
            return this._byteString.toBase64();
          }),
          (Up.prototype.toUint8Array = function () {
            return this._byteString.toUint8Array();
          }),
          (Up.prototype.toString = function () {
            return "Bytes(base64: " + this.toBase64() + ")";
          }),
          (Up.prototype.isEqual = function (t) {
            return this._byteString.isEqual(t._byteString);
          }),
          Up),
        Rp = function (t) {
          this._methodName = t;
        },
        xp =
          (Object.defineProperty(Vp.prototype, "latitude", {
            get: function () {
              return this._lat;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(Vp.prototype, "longitude", {
            get: function () {
              return this._long;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (Vp.prototype.isEqual = function (t) {
            return this._lat === t._lat && this._long === t._long;
          }),
          (Vp.prototype.toJSON = function () {
            return { latitude: this._lat, longitude: this._long };
          }),
          (Vp.prototype._compareTo = function (t) {
            return Yr(this._lat, t._lat) || Yr(this._long, t._long);
          }),
          Vp),
        Op = /^__.*__$/,
        Lp =
          ((Fp.prototype.toMutation = function (t, e) {
            return null !== this.fieldMask
              ? new bs(t, this.data, this.fieldMask, e, this.fieldTransforms)
              : new ws(t, this.data, e, this.fieldTransforms);
          }),
          Fp),
        Pp =
          ((Mp.prototype.toMutation = function (t, e) {
            return new bs(
              t,
              this.data,
              this.fieldMask,
              e,
              this.fieldTransforms
            );
          }),
          Mp);
      function Mp(t, e, n) {
        (this.data = t), (this.fieldMask = e), (this.fieldTransforms = n);
      }
      function Fp(t, e, n) {
        (this.data = t), (this.fieldMask = e), (this.fieldTransforms = n);
      }
      function Vp(t, e) {
        if (!isFinite(t) || t < -90 || 90 < t)
          throw new Fr(
            Mr.INVALID_ARGUMENT,
            "Latitude must be a number between -90 and 90, but was: " + t
          );
        if (!isFinite(e) || e < -180 || 180 < e)
          throw new Fr(
            Mr.INVALID_ARGUMENT,
            "Longitude must be a number between -180 and 180, but was: " + e
          );
        (this._lat = t), (this._long = e);
      }
      function Up(t) {
        this._byteString = t;
      }
      function qp() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        for (var n = 0; n < t.length; ++n)
          if (0 === t[n].length)
            throw new Fr(
              Mr.INVALID_ARGUMENT,
              "Invalid field name at argument $(i + 1). Field names must not be empty."
            );
        this._internalPath = new ci(t);
      }
      function Bp(t) {
        switch (t) {
          case 0:
          case 2:
          case 1:
            return 1;
          case 3:
          case 4:
            return;
          default:
            throw Qr();
        }
      }
      var jp =
          (Object.defineProperty(Qp.prototype, "path", {
            get: function () {
              return this.settings.path;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(Qp.prototype, "Nc", {
            get: function () {
              return this.settings.Nc;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (Qp.prototype.xc = function (t) {
            return new Qp(
              Object.assign(Object.assign({}, this.settings), t),
              this.databaseId,
              this.R,
              this.ignoreUndefinedProperties,
              this.fieldTransforms,
              this.fieldMask
            );
          }),
          (Qp.prototype.Fc = function (t) {
            var e =
                null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
              e = this.xc({ path: e, kc: !1 });
            return e.$c(t), e;
          }),
          (Qp.prototype.Oc = function (t) {
            var e,
              t =
                null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
              t = this.xc({ path: t, kc: !1 });
            return t.Cc(), t;
          }),
          (Qp.prototype.Mc = function (t) {
            return this.xc({ path: void 0, kc: !0 });
          }),
          (Qp.prototype.Lc = function (t) {
            return by(
              t,
              this.settings.methodName,
              this.settings.Bc || !1,
              this.path,
              this.settings.qc
            );
          }),
          (Qp.prototype.contains = function (e) {
            return (
              void 0 !==
                this.fieldMask.find(function (t) {
                  return e.isPrefixOf(t);
                }) ||
              void 0 !==
                this.fieldTransforms.find(function (t) {
                  return e.isPrefixOf(t.field);
                })
            );
          }),
          (Qp.prototype.Cc = function () {
            if (this.path)
              for (var t = 0; t < this.path.length; t++)
                this.$c(this.path.get(t));
          }),
          (Qp.prototype.$c = function (t) {
            if (0 === t.length)
              throw this.Lc("Document fields must not be empty");
            if (Bp(this.Nc) && Op.test(t))
              throw this.Lc('Document fields cannot begin and end with "__"');
          }),
          Qp),
        Kp =
          ((Gp.prototype.Uc = function (t, e, n, r) {
            return (
              void 0 === r && (r = !1),
              new jp(
                {
                  Nc: t,
                  methodName: e,
                  qc: n,
                  path: ci.emptyPath(),
                  kc: !1,
                  Bc: r,
                },
                this.databaseId,
                this.R,
                this.ignoreUndefinedProperties
              )
            );
          }),
          Gp);
      function Gp(t, e, n) {
        (this.databaseId = t),
          (this.ignoreUndefinedProperties = e),
          (this.R = n || El(t));
      }
      function Qp(t, e, n, r, i, o) {
        (this.settings = t),
          (this.databaseId = e),
          (this.R = n),
          (this.ignoreUndefinedProperties = r),
          void 0 === i && this.Cc(),
          (this.fieldTransforms = i || []),
          (this.fieldMask = o || []);
      }
      function Hp(t) {
        var e = t._freezeSettings(),
          n = El(t._databaseId);
        return new Kp(t._databaseId, !!e.ignoreUndefinedProperties, n);
      }
      function zp(t, e, n, r, i, o) {
        var s = t.Uc(
          (o = void 0 === o ? {} : o).merge || o.mergeFields ? 2 : 0,
          e,
          n,
          i
        );
        gy("Data must be an object, but it was:", s, r);
        var a,
          u,
          r = py(r, s);
        if (o.merge) (a = new hi(s.fieldMask)), (u = s.fieldTransforms);
        else if (o.mergeFields) {
          for (var c = [], h = 0, l = o.mergeFields; h < l.length; h++) {
            var f = my(e, l[h], n);
            if (!s.contains(f))
              throw new Fr(
                Mr.INVALID_ARGUMENT,
                "Field '" +
                  f +
                  "' is specified in your field mask but missing from your input data."
              );
            Ey(c, f) || c.push(f);
          }
          (a = new hi(c)),
            (u = s.fieldTransforms.filter(function (t) {
              return a.covers(t.field);
            }));
        } else (a = null), (u = s.fieldTransforms);
        return new Lp(new Bi(r), a, u);
      }
      var Wp,
        Yp =
          (n(Xp, (Wp = Rp)),
          (Xp.prototype._toFieldTransform = function (t) {
            if (2 !== t.Nc)
              throw 1 === t.Nc
                ? t.Lc(
                    this._methodName +
                      "() can only appear at the top level of your update data"
                  )
                : t.Lc(
                    this._methodName +
                      "() cannot be used with set() unless you pass {merge:true}"
                  );
            return t.fieldMask.push(t.path), null;
          }),
          (Xp.prototype.isEqual = function (t) {
            return t instanceof Xp;
          }),
          Xp);
      function Xp() {
        return (null !== Wp && Wp.apply(this, arguments)) || this;
      }
      function $p(t, e, n) {
        return new jp(
          { Nc: 3, qc: e.settings.qc, methodName: t._methodName, kc: n },
          e.databaseId,
          e.R,
          e.ignoreUndefinedProperties
        );
      }
      var Jp,
        Zp,
        ty,
        ey,
        ny =
          (n(cy, (ey = Rp)),
          (cy.prototype._toFieldTransform = function (t) {
            return new hs(t.path, new Yo());
          }),
          (cy.prototype.isEqual = function (t) {
            return t instanceof cy;
          }),
          cy),
        ry =
          (n(uy, (ty = Rp)),
          (uy.prototype._toFieldTransform = function (t) {
            var e = $p(this, t, !0),
              n = this.Kc.map(function (t) {
                return dy(t, e);
              }),
              n = new Xo(n);
            return new hs(t.path, n);
          }),
          (uy.prototype.isEqual = function (t) {
            return this === t;
          }),
          uy),
        iy =
          (n(ay, (Zp = Rp)),
          (ay.prototype._toFieldTransform = function (t) {
            var e = $p(this, t, !0),
              n = this.Kc.map(function (t) {
                return dy(t, e);
              }),
              n = new es(n);
            return new hs(t.path, n);
          }),
          (ay.prototype.isEqual = function (t) {
            return this === t;
          }),
          ay),
        oy =
          (n(sy, (Jp = Rp)),
          (sy.prototype._toFieldTransform = function (t) {
            var e = new os(t.R, Qo(t.R, this.Qc));
            return new hs(t.path, e);
          }),
          (sy.prototype.isEqual = function (t) {
            return this === t;
          }),
          sy);
      function sy(t, e) {
        var n = this;
        return ((n = Jp.call(this, t) || this).Qc = e), n;
      }
      function ay(t, e) {
        var n = this;
        return ((n = Zp.call(this, t) || this).Kc = e), n;
      }
      function uy(t, e) {
        var n = this;
        return ((n = ty.call(this, t) || this).Kc = e), n;
      }
      function cy() {
        return (null !== ey && ey.apply(this, arguments)) || this;
      }
      function hy(t, r, i, e) {
        var o = t.Uc(1, r, i);
        gy("Data must be an object, but it was:", o, e);
        var s = [],
          a = Bi.empty();
        ri(e, function (t, e) {
          var n = wy(r, t, i);
          e = w(e);
          t = o.Oc(n);
          e instanceof Yp
            ? s.push(n)
            : null != (t = dy(e, t)) && (s.push(n), a.set(n, t));
        });
        e = new hi(s);
        return new Pp(a, e, o.fieldTransforms);
      }
      function ly(t, e, n, r, i, o) {
        var s = t.Uc(1, e, n),
          a = [my(e, r, n)],
          u = [i];
        if (o.length % 2 != 0)
          throw new Fr(
            Mr.INVALID_ARGUMENT,
            "Function " +
              e +
              "() needs to be called with an even number of arguments that alternate between field names and values."
          );
        for (var c = 0; c < o.length; c += 2)
          a.push(my(e, o[c])), u.push(o[c + 1]);
        for (var h, l, f, d = [], p = Bi.empty(), y = a.length - 1; 0 <= y; --y)
          Ey(d, a[y]) ||
            ((h = a[y]),
            (l = w((l = u[y]))),
            (f = s.Oc(h)),
            l instanceof Yp
              ? d.push(h)
              : null != (f = dy(l, f)) && (d.push(h), p.set(h, f)));
        i = new hi(d);
        return new Pp(p, i, s.fieldTransforms);
      }
      function fy(t, e, n, r) {
        return dy(n, t.Uc((r = void 0 === r ? !1 : r) ? 4 : 3, e));
      }
      function dy(s, t) {
        if (yy((s = w(s))))
          return gy("Unsupported field value:", t, s), py(s, t);
        if (s instanceof Rp)
          return (
            (function (t, e) {
              if (!Bp(e.Nc))
                throw e.Lc(
                  t._methodName + "() can only be used with update() and set()"
                );
              if (!e.path)
                throw e.Lc(
                  t._methodName + "() is not currently supported inside arrays"
                );
              t = t._toFieldTransform(e);
              t && e.fieldTransforms.push(t);
            })(s, t),
            null
          );
        if (void 0 === s && t.ignoreUndefinedProperties) return null;
        if ((t.path && t.fieldMask.push(t.path), s instanceof Array)) {
          if (t.settings.kc && 4 !== t.Nc)
            throw t.Lc("Nested arrays are not supported");
          return (function (t) {
            for (var e = [], n = 0, r = 0, i = s; r < i.length; r++) {
              var o = dy(i[r], t.Mc(n));
              null == o && (o = { nullValue: "NULL_VALUE" }), e.push(o), n++;
            }
            return { arrayValue: { values: e } };
          })(t);
        }
        return (function (t, e) {
          if (null === (t = w(s))) return { nullValue: "NULL_VALUE" };
          if ("number" == typeof t) return Qo(e.R, t);
          if ("boolean" == typeof t) return { booleanValue: t };
          if ("string" == typeof t) return { stringValue: t };
          if (t instanceof Date) {
            var n = Jr.fromDate(t);
            return { timestampValue: ya(e.R, n) };
          }
          if (t instanceof Jr)
            return (
              (n = new Jr(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3))),
              { timestampValue: ya(e.R, n) }
            );
          if (t instanceof xp)
            return {
              geoPointValue: { latitude: t.latitude, longitude: t.longitude },
            };
          if (t instanceof kp) return { bytesValue: ga(e.R, t._byteString) };
          if (t instanceof op) {
            var n = e.databaseId,
              r = t.firestore._databaseId;
            if (!r.isEqual(n))
              throw e.Lc(
                "Document reference is for database " +
                  r.projectId +
                  "/" +
                  r.database +
                  " but should be for database " +
                  n.projectId +
                  "/" +
                  n.database
              );
            return {
              referenceValue: va(
                t.firestore._databaseId || e.databaseId,
                t._key.path
              ),
            };
          }
          throw e.Lc("Unsupported field value: " + Zd(t));
        })(0, t);
      }
      function py(t, n) {
        var r = {};
        return (
          ii(t)
            ? n.path && 0 < n.path.length && n.fieldMask.push(n.path)
            : ri(t, function (t, e) {
                e = dy(e, n.Fc(t));
                null != e && (r[t] = e);
              }),
          { mapValue: { fields: r } }
        );
      }
      function yy(t) {
        return !(
          "object" != typeof t ||
          null === t ||
          t instanceof Array ||
          t instanceof Date ||
          t instanceof Jr ||
          t instanceof xp ||
          t instanceof kp ||
          t instanceof op ||
          t instanceof Rp
        );
      }
      function gy(t, e, n) {
        if (
          !yy(n) ||
          "object" != typeof (r = n) ||
          null === r ||
          (Object.getPrototypeOf(r) !== Object.prototype &&
            null !== Object.getPrototypeOf(r))
        ) {
          n = Zd(n);
          throw "an object" === n
            ? e.Lc(t + " a custom object")
            : e.Lc(t + " " + n);
        }
        var r;
      }
      function my(t, e, n) {
        if ((e = w(e)) instanceof Cp) return e._internalPath;
        if ("string" == typeof e) return wy(t, e);
        throw by(
          "Field path arguments must be of type string or FieldPath.",
          t,
          !1,
          void 0,
          n
        );
      }
      var vy = new RegExp("[~\\*/\\[\\]]");
      function wy(e, n, r) {
        if (0 <= n.search(vy))
          throw by(
            "Invalid field path (" +
              n +
              "). Paths must not contain '~', '*', '/', '[', or ']'",
            e,
            !1,
            void 0,
            r
          );
        try {
          return new (Cp.bind.apply(Cp, s([void 0], n.split("."))))()
            ._internalPath;
        } catch (t) {
          throw by(
            "Invalid field path (" +
              n +
              "). Paths must not be empty, begin with '.', end with '.', or contain '..'",
            e,
            !1,
            void 0,
            r
          );
        }
      }
      function by(t, e, n, r, i) {
        var o = r && !r.isEmpty(),
          s = void 0 !== i,
          e = "Function " + e + "() called with invalid data";
        n && (e += " (via `toFirestore()`)");
        n = "";
        return (
          (o || s) &&
            ((n += " (found"),
            o && (n += " in field " + r),
            s && (n += " in document " + i),
            (n += ")")),
          new Fr(Mr.INVALID_ARGUMENT, (e += ". ") + t + n)
        );
      }
      function Ey(t, e) {
        return t.some(function (t) {
          return t.isEqual(e);
        });
      }
      var Ty,
        Iy =
          (Object.defineProperty(Ay.prototype, "id", {
            get: function () {
              return this._key.path.lastSegment();
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(Ay.prototype, "ref", {
            get: function () {
              return new op(this._firestore, this._converter, this._key);
            },
            enumerable: !1,
            configurable: !0,
          }),
          (Ay.prototype.exists = function () {
            return null !== this._document;
          }),
          (Ay.prototype.data = function () {
            if (this._document) {
              if (this._converter) {
                var t = new _y(
                  this._firestore,
                  this._userDataWriter,
                  this._key,
                  this._document,
                  null
                );
                return this._converter.fromFirestore(t);
              }
              return this._userDataWriter.convertValue(
                this._document.data.value
              );
            }
          }),
          (Ay.prototype.get = function (t) {
            if (this._document) {
              t = this._document.data.field(Dy("DocumentSnapshot.get", t));
              if (null !== t) return this._userDataWriter.convertValue(t);
            }
          }),
          Ay),
        _y =
          (n(Sy, (Ty = Iy)),
          (Sy.prototype.data = function () {
            return Ty.prototype.data.call(this);
          }),
          Sy);
      function Sy() {
        return (null !== Ty && Ty.apply(this, arguments)) || this;
      }
      function Ay(t, e, n, r, i) {
        (this._firestore = t),
          (this._userDataWriter = e),
          (this._key = n),
          (this._document = r),
          (this._converter = i);
      }
      function Dy(t, e) {
        return "string" == typeof e
          ? wy(t, e)
          : (e instanceof Cp ? e : e._delegate)._internalPath;
      }
      var Ny,
        Cy,
        ky =
          ((Fy.prototype.isEqual = function (t) {
            return (
              this.hasPendingWrites === t.hasPendingWrites &&
              this.fromCache === t.fromCache
            );
          }),
          Fy),
        Ry =
          (n(My, (Cy = Iy)),
          (My.prototype.exists = function () {
            return Cy.prototype.exists.call(this);
          }),
          (My.prototype.data = function (t) {
            if ((void 0 === t && (t = {}), this._document)) {
              if (this._converter) {
                var e = new xy(
                  this._firestore,
                  this._userDataWriter,
                  this._key,
                  this._document,
                  this.metadata,
                  null
                );
                return this._converter.fromFirestore(e, t);
              }
              return this._userDataWriter.convertValue(
                this._document.data.value,
                t.serverTimestamps
              );
            }
          }),
          (My.prototype.get = function (t, e) {
            if ((void 0 === e && (e = {}), this._document)) {
              t = this._document.data.field(Dy("DocumentSnapshot.get", t));
              if (null !== t)
                return this._userDataWriter.convertValue(t, e.serverTimestamps);
            }
          }),
          My),
        xy =
          (n(Py, (Ny = Ry)),
          (Py.prototype.data = function (t) {
            return Ny.prototype.data.call(this, (t = void 0 === t ? {} : t));
          }),
          Py),
        Oy =
          (Object.defineProperty(Ly.prototype, "docs", {
            get: function () {
              var e = [];
              return (
                this.forEach(function (t) {
                  return e.push(t);
                }),
                e
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(Ly.prototype, "size", {
            get: function () {
              return this._snapshot.docs.size;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(Ly.prototype, "empty", {
            get: function () {
              return 0 === this.size;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (Ly.prototype.forEach = function (e, n) {
            var r = this;
            this._snapshot.docs.forEach(function (t) {
              e.call(
                n,
                new xy(
                  r._firestore,
                  r._userDataWriter,
                  t.key,
                  t,
                  new ky(
                    r._snapshot.mutatedKeys.has(t.key),
                    r._snapshot.fromCache
                  ),
                  r.query.converter
                )
              );
            });
          }),
          (Ly.prototype.docChanges = function (t) {
            t = !!(t = void 0 === t ? {} : t).includeMetadataChanges;
            if (t && this._snapshot.excludesMetadataChanges)
              throw new Fr(
                Mr.INVALID_ARGUMENT,
                "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot()."
              );
            return (
              (this._cachedChanges &&
                this._cachedChangesIncludeMetadataChanges === t) ||
                ((this._cachedChanges = (function (i, e) {
                  if (i._snapshot.oldDocs.isEmpty()) {
                    var n = 0;
                    return i._snapshot.docChanges.map(function (t) {
                      return {
                        type: "added",
                        doc: new xy(
                          i._firestore,
                          i._userDataWriter,
                          t.doc.key,
                          t.doc,
                          new ky(
                            i._snapshot.mutatedKeys.has(t.doc.key),
                            i._snapshot.fromCache
                          ),
                          i.query.converter
                        ),
                        oldIndex: -1,
                        newIndex: n++,
                      };
                    });
                  }
                  var o = i._snapshot.oldDocs;
                  return i._snapshot.docChanges
                    .filter(function (t) {
                      return e || 3 !== t.type;
                    })
                    .map(function (t) {
                      var e = new xy(
                          i._firestore,
                          i._userDataWriter,
                          t.doc.key,
                          t.doc,
                          new ky(
                            i._snapshot.mutatedKeys.has(t.doc.key),
                            i._snapshot.fromCache
                          ),
                          i.query.converter
                        ),
                        n = -1,
                        r = -1;
                      return (
                        0 !== t.type &&
                          ((n = o.indexOf(t.doc.key)),
                          (o = o.delete(t.doc.key))),
                        1 !== t.type &&
                          (r = (o = o.add(t.doc)).indexOf(t.doc.key)),
                        {
                          type: (function (t) {
                            switch (t) {
                              case 0:
                                return "added";
                              case 2:
                              case 3:
                                return "modified";
                              case 1:
                                return "removed";
                              default:
                                return Qr();
                            }
                          })(t.type),
                          doc: e,
                          oldIndex: n,
                          newIndex: r,
                        }
                      );
                    });
                })(this, t)),
                (this._cachedChangesIncludeMetadataChanges = t)),
              this._cachedChanges
            );
          }),
          Ly);
      function Ly(t, e, n, r) {
        (this._firestore = t),
          (this._userDataWriter = e),
          (this._snapshot = r),
          (this.metadata = new ky(r.hasPendingWrites, r.fromCache)),
          (this.query = n);
      }
      function Py() {
        return (null !== Ny && Ny.apply(this, arguments)) || this;
      }
      function My(t, e, n, r, i, o) {
        var s = this;
        return (
          ((s = Cy.call(this, t, e, n, r, o) || this)._firestore = t),
          (s._firestoreImpl = t),
          (s.metadata = i),
          s
        );
      }
      function Fy(t, e) {
        (this.hasPendingWrites = t), (this.fromCache = e);
      }
      function Vy(t, e) {
        return t instanceof Ry && e instanceof Ry
          ? t._firestore === e._firestore &&
              t._key.isEqual(e._key) &&
              (null === t._document
                ? null === e._document
                : t._document.isEqual(e._document)) &&
              t._converter === e._converter
          : t instanceof Oy &&
              e instanceof Oy &&
              t._firestore === e._firestore &&
              gp(t.query, e.query) &&
              t.metadata.isEqual(e.metadata) &&
              t._snapshot.isEqual(e._snapshot);
      }
      function Uy(t) {
        if (Ro(t) && 0 === t.explicitOrderBy.length)
          throw new Fr(
            Mr.UNIMPLEMENTED,
            "limitToLast() queries require specifying at least one orderBy() clause"
          );
      }
      C = function () {};
      function qy(t) {
        for (var e = [], n = 1; n < arguments.length; n++)
          e[n - 1] = arguments[n];
        for (var r = 0, i = e; r < i.length; r++) t = i[r]._apply(t);
        return t;
      }
      var By,
        jy,
        Ky,
        Gy,
        Qy,
        Hy =
          (n(eg, (Qy = C)),
          (eg.prototype._apply = function (t) {
            var e = Hp(t.firestore),
              e = (function (t, e, n, r, i, o) {
                if (r.isKeyField()) {
                  if ("array-contains" === i || "array-contains-any" === i)
                    throw new Fr(
                      Mr.INVALID_ARGUMENT,
                      "Invalid Query. You can't perform '" +
                        i +
                        "' queries on FieldPath.documentId()."
                    );
                  if ("in" === i || "not-in" === i) {
                    ig(o, i);
                    for (var s = [], a = 0, u = o; a < u.length; a++) {
                      var c = u[a];
                      s.push(rg(n, t, c));
                    }
                    h = { arrayValue: { values: s } };
                  } else h = rg(n, t, o);
                } else
                  ("in" !== i &&
                    "not-in" !== i &&
                    "array-contains-any" !== i) ||
                    ig(o, i),
                    (h = fy(e, "where", o, "in" === i || "not-in" === i));
                var h = $i.create(r, i, h);
                return (
                  (function (t, e) {
                    if (e.g()) {
                      var n = Oo(t);
                      if (null !== n && !n.isEqual(e.field))
                        throw new Fr(
                          Mr.INVALID_ARGUMENT,
                          "Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '" +
                            n.toString() +
                            "' and '" +
                            e.field.toString() +
                            "'"
                        );
                      n = xo(t);
                      null !== n && og(0, e.field, n);
                    }
                    t = (function (t, e) {
                      for (var n = 0, r = t.filters; n < r.length; n++) {
                        var i = r[n];
                        if (0 <= e.indexOf(i.op)) return i.op;
                      }
                      return null;
                    })(
                      t,
                      (function () {
                        switch (e.op) {
                          case "!=":
                            return ["!=", "not-in"];
                          case "array-contains":
                            return [
                              "array-contains",
                              "array-contains-any",
                              "not-in",
                            ];
                          case "in":
                            return ["array-contains-any", "in", "not-in"];
                          case "array-contains-any":
                            return [
                              "array-contains",
                              "array-contains-any",
                              "in",
                              "not-in",
                            ];
                          case "not-in":
                            return [
                              "array-contains",
                              "array-contains-any",
                              "in",
                              "not-in",
                              "!=",
                            ];
                          default:
                            return [];
                        }
                      })()
                    );
                    if (null !== t)
                      throw t === e.op
                        ? new Fr(
                            Mr.INVALID_ARGUMENT,
                            "Invalid query. You cannot use more than one '" +
                              e.op.toString() +
                              "' filter."
                          )
                        : new Fr(
                            Mr.INVALID_ARGUMENT,
                            "Invalid query. You cannot use '" +
                              e.op.toString() +
                              "' filters with '" +
                              t.toString() +
                              "' filters."
                          );
                  })(t, h),
                  h
                );
              })(
                t._query,
                e,
                t.firestore._databaseId,
                this.jc,
                this.Wc,
                this.Gc
              );
            return new sp(
              t.firestore,
              t.converter,
              ((t = t._query),
              (e = t.filters.concat([e])),
              new Do(
                t.path,
                t.collectionGroup,
                t.explicitOrderBy.slice(),
                e,
                t.limit,
                t.limitType,
                t.startAt,
                t.endAt
              ))
            );
          }),
          eg),
        zy =
          (n(tg, (Gy = C)),
          (tg.prototype._apply = function (t) {
            var e = (function (t, e, n) {
              if (null !== t.startAt)
                throw new Fr(
                  Mr.INVALID_ARGUMENT,
                  "Invalid query. You must not call startAt() or startAfter() before calling orderBy()."
                );
              if (null !== t.endAt)
                throw new Fr(
                  Mr.INVALID_ARGUMENT,
                  "Invalid query. You must not call endAt() or endBefore() before calling orderBy()."
                );
              var r = new _o(e, n);
              return (
                (e = r),
                null !== xo((n = t)) ||
                  (null !== (t = Oo(n)) && og(0, t, e.field)),
                r
              );
            })(t._query, this.jc, this.zc);
            return new sp(
              t.firestore,
              t.converter,
              ((t = t._query),
              (e = t.explicitOrderBy.concat([e])),
              new Do(
                t.path,
                t.collectionGroup,
                e,
                t.filters.slice(),
                t.limit,
                t.limitType,
                t.startAt,
                t.endAt
              ))
            );
          }),
          tg),
        Wy =
          (n(Zy, (Ky = C)),
          (Zy.prototype._apply = function (t) {
            return new sp(
              t.firestore,
              t.converter,
              Fo(t._query, this.Hc, this.Jc)
            );
          }),
          Zy),
        Yy =
          (n(Jy, (jy = C)),
          (Jy.prototype._apply = function (t) {
            var e = ng(t, this.type, this.Yc, this.Xc);
            return new sp(
              t.firestore,
              t.converter,
              ((t = t._query),
              (e = e),
              new Do(
                t.path,
                t.collectionGroup,
                t.explicitOrderBy.slice(),
                t.filters.slice(),
                t.limit,
                t.limitType,
                e,
                t.endAt
              ))
            );
          }),
          Jy),
        Xy =
          (n($y, (By = C)),
          ($y.prototype._apply = function (t) {
            var e = ng(t, this.type, this.Yc, this.Xc);
            return new sp(
              t.firestore,
              t.converter,
              ((t = t._query),
              (e = e),
              new Do(
                t.path,
                t.collectionGroup,
                t.explicitOrderBy.slice(),
                t.filters.slice(),
                t.limit,
                t.limitType,
                t.startAt,
                e
              ))
            );
          }),
          $y);
      function $y(t, e, n) {
        var r = this;
        return (
          ((r = By.call(this) || this).type = t), (r.Yc = e), (r.Xc = n), r
        );
      }
      function Jy(t, e, n) {
        var r = this;
        return (
          ((r = jy.call(this) || this).type = t), (r.Yc = e), (r.Xc = n), r
        );
      }
      function Zy(t, e, n) {
        var r = this;
        return (
          ((r = Ky.call(this) || this).type = t), (r.Hc = e), (r.Jc = n), r
        );
      }
      function tg(t, e) {
        var n = this;
        return (
          ((n = Gy.call(this) || this).jc = t),
          (n.zc = e),
          (n.type = "orderBy"),
          n
        );
      }
      function eg(t, e, n) {
        var r = this;
        return (
          ((r = Qy.call(this) || this).jc = t),
          (r.Wc = e),
          (r.Gc = n),
          (r.type = "where"),
          r
        );
      }
      function ng(t, c, e, n) {
        if (((e[0] = w(e[0])), e[0] instanceof Iy))
          return (function (t, e, n, r) {
            if (!n)
              throw new Fr(
                Mr.NOT_FOUND,
                "Can't use a DocumentSnapshot that doesn't exist for " +
                  c +
                  "()."
              );
            for (var i = [], o = 0, s = Po(t); o < s.length; o++) {
              var a = s[o];
              if (a.field.isKeyField()) i.push(Li(e, n.key));
              else {
                var u = n.data.field(a.field);
                if (Ei(u))
                  throw new Fr(
                    Mr.INVALID_ARGUMENT,
                    'Invalid query. You are trying to start or end a query using a document for which the field "' +
                      a.field +
                      '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)'
                  );
                if (null === u) {
                  a = a.field.canonicalString();
                  throw new Fr(
                    Mr.INVALID_ARGUMENT,
                    "Invalid query. You are trying to start or end a query using a document for which the field '" +
                      a +
                      "' (used as the orderBy) does not exist."
                  );
                }
                i.push(u);
              }
            }
            return new vo(i, r);
          })(t._query, t.firestore._databaseId, e[0]._document, n);
        var r = Hp(t.firestore);
        return (function (t, e, n, r, i, o) {
          var s = t.explicitOrderBy;
          if (i.length > s.length)
            throw new Fr(
              Mr.INVALID_ARGUMENT,
              "Too many arguments provided to " +
                r +
                "(). The number of arguments must be less than or equal to the number of orderBy() clauses"
            );
          for (var a = [], u = 0; u < i.length; u++) {
            var c = i[u];
            if (s[u].field.isKeyField()) {
              if ("string" != typeof c)
                throw new Fr(
                  Mr.INVALID_ARGUMENT,
                  "Invalid query. Expected a string for document ID in " +
                    r +
                    "(), but got a " +
                    typeof c
                );
              if (!Lo(t) && -1 !== c.indexOf("/"))
                throw new Fr(
                  Mr.INVALID_ARGUMENT,
                  "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " +
                    r +
                    "() must be a plain document ID, but '" +
                    c +
                    "' contains a slash."
                );
              var h = t.path.child(ai.fromString(c));
              if (!Ai.isDocumentKey(h))
                throw new Fr(
                  Mr.INVALID_ARGUMENT,
                  "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " +
                    r +
                    "() must result in a valid document path, but '" +
                    h +
                    "' is not because it contains an odd number of segments."
                );
              h = new Ai(h);
              a.push(Li(e, h));
            } else {
              c = fy(n, r, c);
              a.push(c);
            }
          }
          return new vo(a, o);
        })(t._query, t.firestore._databaseId, r, c, e, n);
      }
      function rg(t, e, n) {
        if ("string" == typeof (n = w(n))) {
          if ("" === n)
            throw new Fr(
              Mr.INVALID_ARGUMENT,
              "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string."
            );
          if (!Lo(e) && -1 !== n.indexOf("/"))
            throw new Fr(
              Mr.INVALID_ARGUMENT,
              "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" +
                n +
                "' contains a '/' character."
            );
          e = e.path.child(ai.fromString(n));
          if (!Ai.isDocumentKey(e))
            throw new Fr(
              Mr.INVALID_ARGUMENT,
              "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" +
                e +
                "' is not because it has an odd number of segments (" +
                e.length +
                ")."
            );
          return Li(t, new Ai(e));
        }
        if (n instanceof op) return Li(t, n._key);
        throw new Fr(
          Mr.INVALID_ARGUMENT,
          "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " +
            Zd(n) +
            "."
        );
      }
      function ig(t, e) {
        if (!Array.isArray(t) || 0 === t.length)
          throw new Fr(
            Mr.INVALID_ARGUMENT,
            "Invalid Query. A non-empty array is required for '" +
              e.toString() +
              "' filters."
          );
        if (10 < t.length)
          throw new Fr(
            Mr.INVALID_ARGUMENT,
            "Invalid Query. '" +
              e.toString() +
              "' filters support a maximum of 10 elements in the value array."
          );
      }
      function og(t, e, n) {
        if (!n.isEqual(e))
          throw new Fr(
            Mr.INVALID_ARGUMENT,
            "Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '" +
              e.toString() +
              "' and so you must also use '" +
              e.toString() +
              "' as your first argument to orderBy(), but your first orderBy() is on field '" +
              n.toString() +
              "' instead."
          );
      }
      (sg.prototype.convertValue = function (t, e) {
        switch ((void 0 === e && (e = "none"), Ni(t))) {
          case 0:
            return null;
          case 1:
            return t.booleanValue;
          case 2:
            return wi(t.integerValue || t.doubleValue);
          case 3:
            return this.convertTimestamp(t.timestampValue);
          case 4:
            return this.convertServerTimestamp(t, e);
          case 5:
            return t.stringValue;
          case 6:
            return this.convertBytes(bi(t.bytesValue));
          case 7:
            return this.convertReference(t.referenceValue);
          case 8:
            return this.convertGeoPoint(t.geoPointValue);
          case 9:
            return this.convertArray(t.arrayValue, e);
          case 10:
            return this.convertObject(t.mapValue, e);
          default:
            throw Qr();
        }
      }),
        (sg.prototype.convertObject = function (t, n) {
          var r = this,
            i = {};
          return (
            ri(t.fields, function (t, e) {
              i[t] = r.convertValue(e, n);
            }),
            i
          );
        }),
        (sg.prototype.convertGeoPoint = function (t) {
          return new xp(wi(t.latitude), wi(t.longitude));
        }),
        (sg.prototype.convertArray = function (t, e) {
          var n = this;
          return (t.values || []).map(function (t) {
            return n.convertValue(t, e);
          });
        }),
        (sg.prototype.convertServerTimestamp = function (t, e) {
          switch (e) {
            case "previous":
              var n = (function t(e) {
                e = e.mapValue.fields.__previous_value__;
                return Ei(e) ? t(e) : e;
              })(t);
              return null == n ? null : this.convertValue(n, e);
            case "estimate":
              return this.convertTimestamp(Ti(t));
            default:
              return null;
          }
        }),
        (sg.prototype.convertTimestamp = function (t) {
          t = vi(t);
          return new Jr(t.seconds, t.nanos);
        }),
        (sg.prototype.convertDocumentKey = function (t, e) {
          var n = ai.fromString(t);
          Hr(Ua(n));
          (t = new Pd(n.get(1), n.get(3))), (n = new Ai(n.popFirst(5)));
          return (
            t.isEqual(e) ||
              jr(
                "Document " +
                  n +
                  " contains a document reference within a different database (" +
                  t.projectId +
                  "/" +
                  t.database +
                  ") which is not supported. It will be treated as a reference in the current database (" +
                  e.projectId +
                  "/" +
                  e.database +
                  ") instead."
              ),
            n
          );
        }),
        (_ = sg);
      function sg() {}
      function ag(t, e, n) {
        return t
          ? n && (n.merge || n.mergeFields)
            ? t.toFirestore(e, n)
            : t.toFirestore(e)
          : e;
      }
      var ug,
        cg =
          (n(fg, (ug = _)),
          (fg.prototype.convertBytes = function (t) {
            return new kp(t);
          }),
          (fg.prototype.convertReference = function (t) {
            t = this.convertDocumentKey(t, this.firestore._databaseId);
            return new op(this.firestore, null, t);
          }),
          fg),
        hg =
          ((lg.prototype.set = function (t, e, n) {
            this._verifyNotCommitted();
            (t = dg(t, this._firestore)),
              (e = ag(t.converter, e, n)),
              (n = zp(
                this._dataReader,
                "WriteBatch.set",
                t._key,
                e,
                null !== t.converter,
                n
              ));
            return this._mutations.push(n.toMutation(t._key, ls.none())), this;
          }),
          (lg.prototype.update = function (t, e, n) {
            for (var r = [], i = 3; i < arguments.length; i++)
              r[i - 3] = arguments[i];
            this._verifyNotCommitted();
            (t = dg(t, this._firestore)),
              (e =
                "string" == typeof (e = w(e)) || e instanceof Cp
                  ? ly(this._dataReader, "WriteBatch.update", t._key, e, n, r)
                  : hy(this._dataReader, "WriteBatch.update", t._key, e));
            return (
              this._mutations.push(e.toMutation(t._key, ls.exists(!0))), this
            );
          }),
          (lg.prototype.delete = function (t) {
            this._verifyNotCommitted();
            t = dg(t, this._firestore);
            return (
              (this._mutations = this._mutations.concat(
                new ks(t._key, ls.none())
              )),
              this
            );
          }),
          (lg.prototype.commit = function () {
            return (
              this._verifyNotCommitted(),
              (this._committed = !0),
              0 < this._mutations.length
                ? this._commitHandler(this._mutations)
                : Promise.resolve()
            );
          }),
          (lg.prototype._verifyNotCommitted = function () {
            if (this._committed)
              throw new Fr(
                Mr.FAILED_PRECONDITION,
                "A write batch can no longer be used after commit() has been called."
              );
          }),
          lg);
      function lg(t, e) {
        (this._firestore = t),
          (this._commitHandler = e),
          (this._mutations = []),
          (this._committed = !1),
          (this._dataReader = Hp(t));
      }
      function fg(t) {
        var e = this;
        return ((e = ug.call(this) || this).firestore = t), e;
      }
      function dg(t, e) {
        if ((t = w(t)).firestore !== e)
          throw new Fr(
            Mr.INVALID_ARGUMENT,
            "Provided document reference is from a different Firestore instance."
          );
        return t;
      }
      var pg,
        yg =
          (n(gg, (pg = _)),
          (gg.prototype.convertBytes = function (t) {
            return new kp(t);
          }),
          (gg.prototype.convertReference = function (t) {
            t = this.convertDocumentKey(t, this.firestore._databaseId);
            return new op(this.firestore, null, t);
          }),
          gg);
      function gg(t) {
        var e = this;
        return ((e = pg.call(this) || this).firestore = t), e;
      }
      function mg(t, e, n) {
        for (var r = [], i = 3; i < arguments.length; i++)
          r[i - 3] = arguments[i];
        t = tp(t, op);
        var o = tp(t.firestore, Tp),
          s = Hp(o);
        return wg(o, [
          ("string" == typeof (e = w(e)) || e instanceof Cp
            ? ly(s, "updateDoc", t._key, e, n, r)
            : hy(s, "updateDoc", t._key, e)
          ).toMutation(t._key, ls.exists(!0)),
        ]);
      }
      function vg(e) {
        for (var n = [], t = 1; t < arguments.length; t++)
          n[t - 1] = arguments[t];
        e = w(e);
        var r = { includeMetadataChanges: !1 },
          i = 0;
        "object" != typeof n[i] || wp(n[i]) || ((r = n[i]), i++);
        var o,
          s,
          a,
          u,
          c,
          h,
          l = { includeMetadataChanges: r.includeMetadataChanges };
        return (
          wp(n[i]) &&
            ((o = n[i]),
            (n[i] = null === (r = o.next) || void 0 === r ? void 0 : r.bind(o)),
            (n[i + 1] =
              null === (r = o.error) || void 0 === r ? void 0 : r.bind(o)),
            (n[i + 2] =
              null === (r = o.complete) || void 0 === r ? void 0 : r.bind(o))),
          e instanceof op
            ? ((a = tp(e.firestore, Tp)),
              (u = Co(e._key.path)),
              (h = {
                next: function (t) {
                  n[i] && n[i](bg(a, e, t));
                },
                error: n[i + 1],
                complete: n[i + 2],
              }))
            : ((s = tp(e, sp)),
              (a = tp(s.firestore, Tp)),
              (u = s._query),
              (c = new yg(a)),
              (h = {
                next: function (t) {
                  n[i] && n[i](new Oy(a, c, s, t));
                },
                error: n[i + 1],
                complete: n[i + 2],
              }),
              Uy(e._query)),
          (function (n, t, e) {
            var r = this,
              i = new fd(h),
              o = new mf(t, i, e);
            return (
              n.asyncQueue.enqueueAndForget(function () {
                return y(r, void 0, void 0, function () {
                  var e;
                  return g(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return (e = pf), [4, kd(n)];
                      case 1:
                        return [2, e.apply(void 0, [t.sent(), o])];
                    }
                  });
                });
              }),
              function () {
                i.Wo(),
                  n.asyncQueue.enqueueAndForget(function () {
                    return y(r, void 0, void 0, function () {
                      var e;
                      return g(this, function (t) {
                        switch (t.label) {
                          case 0:
                            return (e = yf), [4, kd(n)];
                          case 1:
                            return [2, e.apply(void 0, [t.sent(), o])];
                        }
                      });
                    });
                  });
              }
            );
          })(Sp(a), u, l)
        );
      }
      function wg(t, e) {
        return (function (n, r) {
          var t = this,
            i = new cu();
          return (
            n.asyncQueue.enqueueAndForget(function () {
              return y(t, void 0, void 0, function () {
                var e;
                return g(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (e = Pf), [4, Cd(n)];
                    case 1:
                      return [2, e.apply(void 0, [t.sent(), r, i])];
                  }
                });
              });
            }),
            i.promise
          );
        })(Sp(t), e);
      }
      function bg(t, e, n) {
        var r = n.docs.get(e._key),
          i = new yg(t);
        return new Ry(
          t,
          i,
          e._key,
          r,
          new ky(n.hasPendingWrites, n.fromCache),
          e.converter
        );
      }
      var Eg,
        Tg =
          ((_g.prototype.get = function (t) {
            var e = this,
              n = dg(t, this._firestore),
              r = new cg(this._firestore);
            return this._transaction.lookup([n._key]).then(function (t) {
              if (!t || 1 !== t.length) return Qr();
              t = t[0];
              if (t.isFoundDocument())
                return new Iy(e._firestore, r, t.key, t, n.converter);
              if (t.isNoDocument())
                return new Iy(e._firestore, r, n._key, null, n.converter);
              throw Qr();
            });
          }),
          (_g.prototype.set = function (t, e, n) {
            (t = dg(t, this._firestore)),
              (e = ag(t.converter, e, n)),
              (n = zp(
                this._dataReader,
                "Transaction.set",
                t._key,
                e,
                null !== t.converter,
                n
              ));
            return this._transaction.set(t._key, n), this;
          }),
          (_g.prototype.update = function (t, e, n) {
            for (var r = [], i = 3; i < arguments.length; i++)
              r[i - 3] = arguments[i];
            (t = dg(t, this._firestore)),
              (e =
                "string" == typeof (e = w(e)) || e instanceof Cp
                  ? ly(this._dataReader, "Transaction.update", t._key, e, n, r)
                  : hy(this._dataReader, "Transaction.update", t._key, e));
            return this._transaction.update(t._key, e), this;
          }),
          (_g.prototype.delete = function (t) {
            t = dg(t, this._firestore);
            return this._transaction.delete(t._key), this;
          }),
          n(Ig, (Eg = _g)),
          (Ig.prototype.get = function (t) {
            var e = this,
              n = dg(t, this._firestore),
              r = new yg(this._firestore);
            return Eg.prototype.get.call(this, t).then(function (t) {
              return new Ry(
                e._firestore,
                r,
                n._key,
                t._document,
                new ky(!1, !1),
                n.converter
              );
            });
          }),
          Ig);
      function Ig(t, e) {
        var n = this;
        return ((n = Eg.call(this, t, e) || this)._firestore = t), n;
      }
      function _g(t, e) {
        (this._firestore = t),
          (this._transaction = e),
          (this._dataReader = Hp(t));
      }
      function Sg() {
        if ("undefined" == typeof Uint8Array)
          throw new Fr(
            Mr.UNIMPLEMENTED,
            "Uint8Arrays are not available in this environment."
          );
      }
      function Ag() {
        if ("undefined" == typeof atob)
          throw new Fr(
            Mr.UNIMPLEMENTED,
            "Blobs are unavailable in Firestore in this environment."
          );
      }
      var Dg,
        Ng =
          ((Pg.fromBase64String = function (t) {
            return Ag(), new Pg(kp.fromBase64String(t));
          }),
          (Pg.fromUint8Array = function (t) {
            return Sg(), new Pg(kp.fromUint8Array(t));
          }),
          (Pg.prototype.toBase64 = function () {
            return Ag(), this._delegate.toBase64();
          }),
          (Pg.prototype.toUint8Array = function () {
            return Sg(), this._delegate.toUint8Array();
          }),
          (Pg.prototype.isEqual = function (t) {
            return this._delegate.isEqual(t._delegate);
          }),
          (Pg.prototype.toString = function () {
            return "Blob(base64: " + this.toBase64() + ")";
          }),
          Pg),
        Cg =
          ((Lg.prototype.enableIndexedDbPersistence = function (t, e) {
            return (function (t, e) {
              Np((t = tp(t, Tp)));
              var n = Sp(t),
                r = t._freezeSettings(),
                t = new sd();
              return Dp(
                n,
                t,
                new id(
                  t,
                  r.cacheSizeBytes,
                  null == e ? void 0 : e.forceOwnership
                )
              );
            })(t._delegate, { forceOwnership: e });
          }),
          (Lg.prototype.enableMultiTabIndexedDbPersistence = function (t) {
            return (function (t) {
              Np((t = tp(t, Tp)));
              var e = Sp(t),
                n = t._freezeSettings(),
                t = new sd();
              return Dp(e, t, new od(t, n.cacheSizeBytes));
            })(t._delegate);
          }),
          (Lg.prototype.clearIndexedDbPersistence = function (t) {
            return (function (n) {
              var t = this;
              if (n._initialized && !n._terminated)
                throw new Fr(
                  Mr.FAILED_PRECONDITION,
                  "Persistence can only be cleared before a Firestore instance is initialized or after it is terminated."
                );
              var r = new cu();
              return (
                n._queue.enqueueAndForgetEvenWhileRestricted(function () {
                  return y(t, void 0, void 0, function () {
                    var e;
                    return g(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return (
                            t.trys.push([0, 2, , 3]),
                            [
                              4,
                              (function (n) {
                                return y(this, void 0, void 0, function () {
                                  var e;
                                  return g(this, function (t) {
                                    switch (t.label) {
                                      case 0:
                                        return fu.yt()
                                          ? ((e = n + "main"),
                                            [4, fu.delete(e)])
                                          : [2, Promise.resolve()];
                                      case 1:
                                        return t.sent(), [2];
                                    }
                                  });
                                });
                              })(Zc(n._databaseId, n._persistenceKey)),
                            ]
                          );
                        case 1:
                          return t.sent(), r.resolve(), [3, 3];
                        case 2:
                          return (e = t.sent()), r.reject(e), [3, 3];
                        case 3:
                          return [2];
                      }
                    });
                  });
                }),
                r.promise
              );
            })(t._delegate);
          }),
          Lg),
        kg =
          (Object.defineProperty(Og.prototype, "_databaseId", {
            get: function () {
              return this._delegate._databaseId;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (Og.prototype.settings = function (t) {
            var e = this._delegate._getSettings();
            t.merge ||
              e.host === t.host ||
              Kr(
                "You are overriding the original host. If you did not intend to override your settings, use {merge: true}."
              ),
              t.merge &&
                delete (t = Object.assign(Object.assign({}, e), t)).merge,
              this._delegate._setSettings(t);
          }),
          (Og.prototype.useEmulator = function (t, e, n) {
            (function (t, e, n, r) {
              void 0 === r && (r = {});
              var i = (t = tp(t, ip))._getSettings();
              if (
                ("firestore.googleapis.com" !== i.host &&
                  i.host !== e &&
                  Kr(
                    "Host has been set in both settings() and useEmulator(), emulator host will be used"
                  ),
                t._setSettings(
                  Object.assign(Object.assign({}, i), {
                    host: e + ":" + n,
                    ssl: !1,
                  })
                ),
                r.mockUserToken)
              ) {
                (n = (function (t, e) {
                  if (t.uid)
                    throw new Error(
                      'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.'
                    );
                  var n = e || "demo-project",
                    r = t.iat || 0;
                  if (!(e = t.sub || t.user_id))
                    throw new Error(
                      "mockUserToken must contain 'sub' or 'user_id' field!"
                    );
                  return (
                    (t = o(
                      {
                        iss: "https://securetoken.google.com/" + n,
                        aud: n,
                        iat: r,
                        exp: r + 3600,
                        auth_time: r,
                        sub: e,
                        user_id: e,
                        firebase: {
                          sign_in_provider: "custom",
                          identities: {},
                        },
                      },
                      t
                    )),
                    [
                      a.encodeString(
                        JSON.stringify({ alg: "none", type: "JWT" }),
                        !1
                      ),
                      a.encodeString(JSON.stringify(t), !1),
                      "",
                    ].join(".")
                  );
                })(r.mockUserToken)),
                  (r = r.mockUserToken.sub || r.mockUserToken.user_id);
                if (!r)
                  throw new Fr(
                    Mr.INVALID_ARGUMENT,
                    "mockUserToken must contain 'sub' or 'user_id' field!"
                  );
                t._credentials = new Vd(new Od(n, new Oh(r)));
              }
            })(this._delegate, t, e, (n = void 0 === n ? {} : n));
          }),
          (Og.prototype.enableNetwork = function () {
            return (function (i) {
              var t = this;
              return i.asyncQueue.enqueue(function () {
                return y(t, void 0, void 0, function () {
                  var n, r;
                  return g(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, Ad(i)];
                      case 1:
                        return (n = t.sent()), [4, Nd(i)];
                      case 2:
                        return (
                          (r = t.sent()),
                          [
                            2,
                            (n.setNetworkEnabled(!0),
                            (e = r).Or.delete(0),
                            Fl(e)),
                          ]
                        );
                    }
                    var e;
                  });
                });
              });
            })(Sp(tp(this._delegate, Tp)));
          }),
          (Og.prototype.disableNetwork = function () {
            return (function (r) {
              var t = this;
              return r.asyncQueue.enqueue(function () {
                return y(t, void 0, void 0, function () {
                  var e, n;
                  return g(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, Ad(r)];
                      case 1:
                        return (e = t.sent()), [4, Nd(r)];
                      case 2:
                        return (
                          (n = t.sent()),
                          [
                            2,
                            (e.setNetworkEnabled(!1),
                            (function (n) {
                              return y(this, void 0, void 0, function () {
                                var e;
                                return g(this, function (t) {
                                  switch (t.label) {
                                    case 0:
                                      return (e = n).Or.add(0), [4, Vl(e)];
                                    case 1:
                                      return t.sent(), e.Br.set("Offline"), [2];
                                  }
                                });
                              });
                            })(n)),
                          ]
                        );
                    }
                  });
                });
              });
            })(Sp(tp(this._delegate, Tp)));
          }),
          (Og.prototype.enablePersistence = function (t) {
            var e = !1,
              n = !1;
            return (
              t &&
                Xd(
                  "synchronizeTabs",
                  (e = !!t.synchronizeTabs),
                  "experimentalForceOwningTab",
                  (n = !!t.experimentalForceOwningTab)
                ),
              e
                ? this.Zc.enableMultiTabIndexedDbPersistence(this)
                : this.Zc.enableIndexedDbPersistence(this, n)
            );
          }),
          (Og.prototype.clearPersistence = function () {
            return this.Zc.clearIndexedDbPersistence(this);
          }),
          (Og.prototype.terminate = function () {
            return (
              this.tu &&
                (this.tu._removeServiceInstance("firestore"),
                this.tu._removeServiceInstance("firestore-exp")),
              this._delegate._delete()
            );
          }),
          (Og.prototype.waitForPendingWrites = function () {
            return (function (n) {
              var t = this,
                r = new cu();
              return (
                n.asyncQueue.enqueueAndForget(function () {
                  return y(t, void 0, void 0, function () {
                    var e;
                    return g(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return (e = Uf), [4, Cd(n)];
                        case 1:
                          return [2, e.apply(void 0, [t.sent(), r])];
                      }
                    });
                  });
                }),
                r.promise
              );
            })(Sp(tp(this._delegate, Tp)));
          }),
          (Og.prototype.onSnapshotsInSync = function (t) {
            return (
              (e = this._delegate),
              (t = t),
              (function (n, t) {
                var e = this,
                  r = new fd(t);
                return (
                  n.asyncQueue.enqueueAndForget(function () {
                    return y(e, void 0, void 0, function () {
                      var e;
                      return g(this, function (t) {
                        switch (t.label) {
                          case 0:
                            return (
                              (e = function (t, e) {
                                t.Gr.add(e), e.next();
                              }),
                              [4, kd(n)]
                            );
                          case 1:
                            return [2, e.apply(void 0, [t.sent(), r])];
                        }
                      });
                    });
                  }),
                  function () {
                    r.Wo(),
                      n.asyncQueue.enqueueAndForget(function () {
                        return y(e, void 0, void 0, function () {
                          var e;
                          return g(this, function (t) {
                            switch (t.label) {
                              case 0:
                                return (
                                  (e = function (t, e) {
                                    t.Gr.delete(e);
                                  }),
                                  [4, kd(n)]
                                );
                              case 1:
                                return [2, e.apply(void 0, [t.sent(), r])];
                            }
                          });
                        });
                      });
                  }
                );
              })(Sp(tp(e, Tp)), wp(t) ? t : { next: t })
            );
            var e;
          }),
          Object.defineProperty(Og.prototype, "app", {
            get: function () {
              if (!this.tu)
                throw new Fr(
                  Mr.FAILED_PRECONDITION,
                  "Firestore was not initialized using the Firebase SDK. 'app' is not available"
                );
              return this.tu;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (Og.prototype.collection = function (t) {
            try {
              return new tm(this, dp(this._delegate, t));
            } catch (t) {
              throw Gg(t, "collection()", "Firestore.collection()");
            }
          }),
          (Og.prototype.doc = function (t) {
            try {
              return new jg(this, pp(this._delegate, t));
            } catch (t) {
              throw Gg(t, "doc()", "Firestore.doc()");
            }
          }),
          (Og.prototype.collectionGroup = function (t) {
            try {
              return new $g(
                this,
                (function (t, e) {
                  if (
                    ((t = tp(t, ip)),
                    Wd("collectionGroup", "collection id", e),
                    0 <= e.indexOf("/"))
                  )
                    throw new Fr(
                      Mr.INVALID_ARGUMENT,
                      "Invalid collection ID '" +
                        e +
                        "' passed to function collectionGroup(). Collection IDs must not contain '/'."
                    );
                  return new sp(t, null, ((e = e), new Do(ai.emptyPath(), e)));
                })(this._delegate, t)
              );
            } catch (t) {
              throw Gg(t, "collectionGroup()", "Firestore.collectionGroup()");
            }
          }),
          (Og.prototype.runTransaction = function (e) {
            var n,
              r = this;
            return (function (n, r) {
              var t = this,
                i = new cu();
              return (
                n.asyncQueue.enqueueAndForget(function () {
                  return y(t, void 0, void 0, function () {
                    var e;
                    return g(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return [
                            4,
                            Sd(n).then(function (t) {
                              return t.datastore;
                            }),
                          ];
                        case 1:
                          return (
                            (e = t.sent()),
                            new yd(n.asyncQueue, e, r, i).run(),
                            [2]
                          );
                      }
                    });
                  });
                }),
                i.promise
              );
            })(Sp((n = this._delegate)), function (t) {
              return (t = new Tg(n, t)), e(new Mg(r, t));
            });
          }),
          (Og.prototype.batch = function () {
            var e = this;
            return (
              Sp(this._delegate),
              new Fg(
                new hg(this._delegate, function (t) {
                  return wg(e._delegate, t);
                })
              )
            );
          }),
          (Og.prototype.loadBundle = function (t) {
            throw new Fr(
              Mr.FAILED_PRECONDITION,
              '"loadBundle()" does not exist, have you imported "firebase/firestore/bundle"?'
            );
          }),
          (Og.prototype.namedQuery = function (t) {
            throw new Fr(
              Mr.FAILED_PRECONDITION,
              '"namedQuery()" does not exist, have you imported "firebase/firestore/bundle"?'
            );
          }),
          Og),
        Rg =
          (n(xg, (Dg = _)),
          (xg.prototype.convertBytes = function (t) {
            return new Ng(new kp(t));
          }),
          (xg.prototype.convertReference = function (t) {
            t = this.convertDocumentKey(t, this.firestore._databaseId);
            return jg.eu(t, this.firestore, null);
          }),
          xg);
      function xg(t) {
        var e = this;
        return ((e = Dg.call(this) || this).firestore = t), e;
      }
      function Og(t, e, n) {
        var r = this;
        (this._delegate = e),
          (this.Zc = n),
          (this.INTERNAL = {
            delete: function () {
              return r.terminate();
            },
          }),
          t instanceof Pd || (this.tu = t);
      }
      function Lg() {}
      function Pg(t) {
        this._delegate = t;
      }
      var Mg =
          ((Bg.prototype.get = function (t) {
            var e = this,
              n = am(t);
            return this._delegate.get(n).then(function (t) {
              return new Yg(
                e._firestore,
                new Ry(
                  e._firestore._delegate,
                  e._userDataWriter,
                  t._key,
                  t._document,
                  t.metadata,
                  n.converter
                )
              );
            });
          }),
          (Bg.prototype.set = function (t, e, n) {
            t = am(t);
            return (
              n
                ? (Yd("Transaction.set", n), this._delegate.set(t, e, n))
                : this._delegate.set(t, e),
              this
            );
          }),
          (Bg.prototype.update = function (t, e, n) {
            for (var r = [], i = 3; i < arguments.length; i++)
              r[i - 3] = arguments[i];
            var o = am(t);
            return (
              2 === arguments.length
                ? this._delegate.update(o, e)
                : (t = this._delegate).update.apply(t, s([o, e, n], r)),
              this
            );
          }),
          (Bg.prototype.delete = function (t) {
            t = am(t);
            return this._delegate.delete(t), this;
          }),
          Bg),
        Fg =
          ((qg.prototype.set = function (t, e, n) {
            t = am(t);
            return (
              n
                ? (Yd("WriteBatch.set", n), this._delegate.set(t, e, n))
                : this._delegate.set(t, e),
              this
            );
          }),
          (qg.prototype.update = function (t, e, n) {
            for (var r = [], i = 3; i < arguments.length; i++)
              r[i - 3] = arguments[i];
            var o = am(t);
            return (
              2 === arguments.length
                ? this._delegate.update(o, e)
                : (t = this._delegate).update.apply(t, s([o, e, n], r)),
              this
            );
          }),
          (qg.prototype.delete = function (t) {
            t = am(t);
            return this._delegate.delete(t), this;
          }),
          (qg.prototype.commit = function () {
            return this._delegate.commit();
          }),
          qg),
        Vg =
          ((Ug.prototype.fromFirestore = function (t, e) {
            t = new xy(
              this._firestore._delegate,
              this._userDataWriter,
              t._key,
              t._document,
              t.metadata,
              null
            );
            return this._delegate.fromFirestore(
              new Xg(this._firestore, t),
              null != e ? e : {}
            );
          }),
          (Ug.prototype.toFirestore = function (t, e) {
            return e
              ? this._delegate.toFirestore(t, e)
              : this._delegate.toFirestore(t);
          }),
          (Ug.nu = function (t, e) {
            var n = Ug.su,
              r = n.get(t);
            r || ((r = new WeakMap()), n.set(t, r));
            n = r.get(e);
            return n || ((n = new Ug(t, new Rg(t), e)), r.set(e, n)), n;
          }),
          Ug);
      function Ug(t, e, n) {
        (this._firestore = t), (this._userDataWriter = e), (this._delegate = n);
      }
      function qg(t) {
        this._delegate = t;
      }
      function Bg(t, e) {
        (this._firestore = t),
          (this._delegate = e),
          (this._userDataWriter = new Rg(t));
      }
      Vg.su = new WeakMap();
      var jg =
        ((Kg.iu = function (t, e, n) {
          if (t.length % 2 != 0)
            throw new Fr(
              Mr.INVALID_ARGUMENT,
              "Invalid document reference. Document references must have an even number of segments, but " +
                t.canonicalString() +
                " has " +
                t.length
            );
          return new Kg(e, new op(e._delegate, n, new Ai(t)));
        }),
        (Kg.eu = function (t, e, n) {
          return new Kg(e, new op(e._delegate, n, t));
        }),
        Object.defineProperty(Kg.prototype, "id", {
          get: function () {
            return this._delegate.id;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(Kg.prototype, "parent", {
          get: function () {
            return new tm(this.firestore, this._delegate.parent);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(Kg.prototype, "path", {
          get: function () {
            return this._delegate.path;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (Kg.prototype.collection = function (t) {
          try {
            return new tm(this.firestore, dp(this._delegate, t));
          } catch (t) {
            throw Gg(t, "collection()", "DocumentReference.collection()");
          }
        }),
        (Kg.prototype.isEqual = function (t) {
          return (t = w(t)) instanceof op && yp(this._delegate, t);
        }),
        (Kg.prototype.set = function (t, e) {
          e = Yd("DocumentReference.set", e);
          try {
            return (function (t, e, n) {
              t = tp(t, op);
              var r = tp(t.firestore, Tp),
                e = ag(t.converter, e, n);
              return wg(r, [
                zp(
                  Hp(r),
                  "setDoc",
                  t._key,
                  e,
                  null !== t.converter,
                  n
                ).toMutation(t._key, ls.none()),
              ]);
            })(this._delegate, t, e);
          } catch (t) {
            throw Gg(t, "setDoc()", "DocumentReference.set()");
          }
        }),
        (Kg.prototype.update = function (t, e) {
          for (var n = [], r = 2; r < arguments.length; r++)
            n[r - 2] = arguments[r];
          try {
            return 1 === arguments.length
              ? mg(this._delegate, t)
              : mg.apply(void 0, s([this._delegate, t, e], n));
          } catch (t) {
            throw Gg(t, "updateDoc()", "DocumentReference.update()");
          }
        }),
        (Kg.prototype.delete = function () {
          return wg(tp((t = this._delegate).firestore, Tp), [
            new ks(t._key, ls.none()),
          ]);
          var t;
        }),
        (Kg.prototype.onSnapshot = function () {
          for (var e = this, t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
          var r = Qg(t),
            i = Hg(t, function (t) {
              return new Yg(
                e.firestore,
                new Ry(
                  e.firestore._delegate,
                  e._userDataWriter,
                  t._key,
                  t._document,
                  t.metadata,
                  e._delegate.converter
                )
              );
            });
          return vg(this._delegate, r, i);
        }),
        (Kg.prototype.get = function (t) {
          var e = this;
          return (
            "cache" === (null == t ? void 0 : t.source)
              ? function (e) {
                  e = tp(e, op);
                  var n = tp(e.firestore, Tp),
                    t = Sp(n),
                    r = new yg(n);
                  return (function (n, r) {
                    var t = this,
                      i = new cu();
                    return (
                      n.asyncQueue.enqueueAndForget(function () {
                        return y(t, void 0, void 0, function () {
                          var e;
                          return g(this, function (t) {
                            switch (t.label) {
                              case 0:
                                return (
                                  (e = function (o, s, a) {
                                    return y(this, void 0, void 0, function () {
                                      var r, i;
                                      return g(this, function (t) {
                                        switch (t.label) {
                                          case 0:
                                            return (
                                              t.trys.push([0, 2, , 3]),
                                              [
                                                4,
                                                ((e = s),
                                                (n =
                                                  o).persistence.runTransaction(
                                                  "read document",
                                                  "readonly",
                                                  function (t) {
                                                    return n.Mn.mn(t, e);
                                                  }
                                                )),
                                              ]
                                            );
                                          case 1:
                                            return (
                                              (i = t.sent()).isFoundDocument()
                                                ? a.resolve(i)
                                                : i.isNoDocument()
                                                ? a.resolve(null)
                                                : a.reject(
                                                    new Fr(
                                                      Mr.UNAVAILABLE,
                                                      "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"
                                                    )
                                                  ),
                                              [3, 3]
                                            );
                                          case 2:
                                            return (
                                              (r = t.sent()),
                                              (i = of(
                                                r,
                                                "Failed to get document '" +
                                                  s +
                                                  " from cache"
                                              )),
                                              a.reject(i),
                                              [3, 3]
                                            );
                                          case 3:
                                            return [2];
                                        }
                                        var e, n;
                                      });
                                    });
                                  }),
                                  [4, Dd(n)]
                                );
                              case 1:
                                return [2, e.apply(void 0, [t.sent(), r, i])];
                            }
                          });
                        });
                      }),
                      i.promise
                    );
                  })(t, e._key).then(function (t) {
                    return new Ry(
                      n,
                      r,
                      e._key,
                      t,
                      new ky(null !== t && t.hasLocalMutations, !0),
                      e.converter
                    );
                  });
                }
              : "server" === (null == t ? void 0 : t.source)
              ? function (e) {
                  e = tp(e, op);
                  var n = tp(e.firestore, Tp);
                  return Rd(Sp(n), e._key, { source: "server" }).then(function (
                    t
                  ) {
                    return bg(n, e, t);
                  });
                }
              : function (e) {
                  e = tp(e, op);
                  var n = tp(e.firestore, Tp);
                  return Rd(Sp(n), e._key).then(function (t) {
                    return bg(n, e, t);
                  });
                }
          )(this._delegate).then(function (t) {
            return new Yg(
              e.firestore,
              new Ry(
                e.firestore._delegate,
                e._userDataWriter,
                t._key,
                t._document,
                t.metadata,
                e._delegate.converter
              )
            );
          });
        }),
        (Kg.prototype.withConverter = function (t) {
          return new Kg(
            this.firestore,
            t
              ? this._delegate.withConverter(Vg.nu(this.firestore, t))
              : this._delegate.withConverter(null)
          );
        }),
        Kg);
      function Kg(t, e) {
        (this.firestore = t),
          (this._delegate = e),
          (this._userDataWriter = new Rg(t));
      }
      function Gg(t, e, n) {
        return (t.message = t.message.replace(e, n)), t;
      }
      function Qg(t) {
        for (var e = 0, n = t; e < n.length; e++) {
          var r = n[e];
          if ("object" == typeof r && !wp(r)) return r;
        }
        return {};
      }
      function Hg(t, e) {
        var n;
        return {
          next: function (t) {
            n.next && n.next(e(t));
          },
          error:
            null ===
              (t = (n = wp(t[0])
                ? t[0]
                : wp(t[1])
                ? t[1]
                : "function" == typeof t[0]
                ? { next: t[0], error: t[1], complete: t[2] }
                : { next: t[1], error: t[2], complete: t[3] }).error) ||
            void 0 === t
              ? void 0
              : t.bind(n),
          complete:
            null === (t = n.complete) || void 0 === t ? void 0 : t.bind(n),
        };
      }
      var zg,
        Wg,
        Yg =
          (Object.defineProperty(sm.prototype, "ref", {
            get: function () {
              return new jg(this._firestore, this._delegate.ref);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(sm.prototype, "id", {
            get: function () {
              return this._delegate.id;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(sm.prototype, "metadata", {
            get: function () {
              return this._delegate.metadata;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(sm.prototype, "exists", {
            get: function () {
              return this._delegate.exists();
            },
            enumerable: !1,
            configurable: !0,
          }),
          (sm.prototype.data = function (t) {
            return this._delegate.data(t);
          }),
          (sm.prototype.get = function (t, e) {
            return this._delegate.get(t, e);
          }),
          (sm.prototype.isEqual = function (t) {
            return Vy(this._delegate, t._delegate);
          }),
          sm),
        Xg =
          (n(om, (Wg = Yg)),
          (om.prototype.data = function (t) {
            return this._delegate.data(t);
          }),
          om),
        $g =
          ((im.prototype.where = function (t, e, n) {
            try {
              return new im(
                this.firestore,
                qy(
                  this._delegate,
                  ((r = n), (i = e), (o = Dy("where", t)), new Hy(o, i, r))
                )
              );
            } catch (t) {
              throw Gg(t, /(orderBy|where)\(\)/, "Query.$1()");
            }
            var r, i, o;
          }),
          (im.prototype.orderBy = function (t, e) {
            try {
              return new im(
                this.firestore,
                qy(
                  this._delegate,
                  ((n = void 0 === e ? "asc" : e),
                  (r = Dy("orderBy", t)),
                  new zy(r, n))
                )
              );
            } catch (t) {
              throw Gg(t, /(orderBy|where)\(\)/, "Query.$1()");
            }
            var n, r;
          }),
          (im.prototype.limit = function (t) {
            try {
              return new im(
                this.firestore,
                qy(
                  this._delegate,
                  (ep("limit", (e = t)), new Wy("limit", e, "F"))
                )
              );
            } catch (t) {
              throw Gg(t, "limit()", "Query.limit()");
            }
            var e;
          }),
          (im.prototype.limitToLast = function (t) {
            try {
              return new im(
                this.firestore,
                qy(
                  this._delegate,
                  (ep("limitToLast", (e = t)), new Wy("limitToLast", e, "L"))
                )
              );
            } catch (t) {
              throw Gg(t, "limitToLast()", "Query.limitToLast()");
            }
            var e;
          }),
          (im.prototype.startAt = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            try {
              return new im(
                this.firestore,
                qy(
                  this._delegate,
                  function () {
                    for (var t = [], e = 0; e < arguments.length; e++)
                      t[e] = arguments[e];
                    return new Yy("startAt", t, !0);
                  }.apply(void 0, t)
                )
              );
            } catch (t) {
              throw Gg(t, "startAt()", "Query.startAt()");
            }
          }),
          (im.prototype.startAfter = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            try {
              return new im(
                this.firestore,
                qy(
                  this._delegate,
                  function () {
                    for (var t = [], e = 0; e < arguments.length; e++)
                      t[e] = arguments[e];
                    return new Yy("startAfter", t, !1);
                  }.apply(void 0, t)
                )
              );
            } catch (t) {
              throw Gg(t, "startAfter()", "Query.startAfter()");
            }
          }),
          (im.prototype.endBefore = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            try {
              return new im(
                this.firestore,
                qy(
                  this._delegate,
                  function () {
                    for (var t = [], e = 0; e < arguments.length; e++)
                      t[e] = arguments[e];
                    return new Xy("endBefore", t, !0);
                  }.apply(void 0, t)
                )
              );
            } catch (t) {
              throw Gg(t, "endBefore()", "Query.endBefore()");
            }
          }),
          (im.prototype.endAt = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            try {
              return new im(
                this.firestore,
                qy(
                  this._delegate,
                  function () {
                    for (var t = [], e = 0; e < arguments.length; e++)
                      t[e] = arguments[e];
                    return new Xy("endAt", t, !1);
                  }.apply(void 0, t)
                )
              );
            } catch (t) {
              throw Gg(t, "endAt()", "Query.endAt()");
            }
          }),
          (im.prototype.isEqual = function (t) {
            return gp(this._delegate, t._delegate);
          }),
          (im.prototype.get = function (t) {
            var e = this;
            return (
              "cache" === (null == t ? void 0 : t.source)
                ? function (e) {
                    e = tp(e, sp);
                    var n = tp(e.firestore, Tp),
                      t = Sp(n),
                      r = new yg(n);
                    return (function (n, r) {
                      var t = this,
                        i = new cu();
                      return (
                        n.asyncQueue.enqueueAndForget(function () {
                          return y(t, void 0, void 0, function () {
                            var e;
                            return g(this, function (t) {
                              switch (t.label) {
                                case 0:
                                  return (
                                    (e = function (i, o, s) {
                                      return y(
                                        this,
                                        void 0,
                                        void 0,
                                        function () {
                                          var e, n, r;
                                          return g(this, function (t) {
                                            switch (t.label) {
                                              case 0:
                                                return (
                                                  t.trys.push([0, 2, , 3]),
                                                  [4, mh(i, o, !0)]
                                                );
                                              case 1:
                                                return (
                                                  (r = t.sent()),
                                                  (e = new Nf(o, r.Bn)),
                                                  (n = e._o(r.documents)),
                                                  (n = e.applyChanges(n, !1)),
                                                  s.resolve(n.snapshot),
                                                  [3, 3]
                                                );
                                              case 2:
                                                return (
                                                  (n = t.sent()),
                                                  (r = of(
                                                    n,
                                                    "Failed to execute query '" +
                                                      o +
                                                      " against cache"
                                                  )),
                                                  s.reject(r),
                                                  [3, 3]
                                                );
                                              case 3:
                                                return [2];
                                            }
                                          });
                                        }
                                      );
                                    }),
                                    [4, Dd(n)]
                                  );
                                case 1:
                                  return [2, e.apply(void 0, [t.sent(), r, i])];
                              }
                            });
                          });
                        }),
                        i.promise
                      );
                    })(t, e._query).then(function (t) {
                      return new Oy(n, r, e, t);
                    });
                  }
                : "server" === (null == t ? void 0 : t.source)
                ? function (e) {
                    e = tp(e, sp);
                    var n = tp(e.firestore, Tp),
                      t = Sp(n),
                      r = new yg(n);
                    return xd(t, e._query, { source: "server" }).then(function (
                      t
                    ) {
                      return new Oy(n, r, e, t);
                    });
                  }
                : function (e) {
                    e = tp(e, sp);
                    var n = tp(e.firestore, Tp),
                      t = Sp(n),
                      r = new yg(n);
                    return (
                      Uy(e._query),
                      xd(t, e._query).then(function (t) {
                        return new Oy(n, r, e, t);
                      })
                    );
                  }
            )(this._delegate).then(function (t) {
              return new Zg(
                e.firestore,
                new Oy(
                  e.firestore._delegate,
                  e._userDataWriter,
                  e._delegate,
                  t._snapshot
                )
              );
            });
          }),
          (im.prototype.onSnapshot = function () {
            for (var e = this, t = [], n = 0; n < arguments.length; n++)
              t[n] = arguments[n];
            var r = Qg(t),
              i = Hg(t, function (t) {
                return new Zg(
                  e.firestore,
                  new Oy(
                    e.firestore._delegate,
                    e._userDataWriter,
                    e._delegate,
                    t._snapshot
                  )
                );
              });
            return vg(this._delegate, r, i);
          }),
          (im.prototype.withConverter = function (t) {
            return new im(
              this.firestore,
              t
                ? this._delegate.withConverter(Vg.nu(this.firestore, t))
                : this._delegate.withConverter(null)
            );
          }),
          im),
        Jg =
          (Object.defineProperty(rm.prototype, "type", {
            get: function () {
              return this._delegate.type;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(rm.prototype, "doc", {
            get: function () {
              return new Xg(this._firestore, this._delegate.doc);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(rm.prototype, "oldIndex", {
            get: function () {
              return this._delegate.oldIndex;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(rm.prototype, "newIndex", {
            get: function () {
              return this._delegate.newIndex;
            },
            enumerable: !1,
            configurable: !0,
          }),
          rm),
        Zg =
          (Object.defineProperty(nm.prototype, "query", {
            get: function () {
              return new $g(this._firestore, this._delegate.query);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(nm.prototype, "metadata", {
            get: function () {
              return this._delegate.metadata;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(nm.prototype, "size", {
            get: function () {
              return this._delegate.size;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(nm.prototype, "empty", {
            get: function () {
              return this._delegate.empty;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(nm.prototype, "docs", {
            get: function () {
              var e = this;
              return this._delegate.docs.map(function (t) {
                return new Xg(e._firestore, t);
              });
            },
            enumerable: !1,
            configurable: !0,
          }),
          (nm.prototype.docChanges = function (t) {
            var e = this;
            return this._delegate.docChanges(t).map(function (t) {
              return new Jg(e._firestore, t);
            });
          }),
          (nm.prototype.forEach = function (e, n) {
            var r = this;
            this._delegate.forEach(function (t) {
              e.call(n, new Xg(r._firestore, t));
            });
          }),
          (nm.prototype.isEqual = function (t) {
            return Vy(this._delegate, t._delegate);
          }),
          nm),
        tm =
          (n(em, (zg = $g)),
          Object.defineProperty(em.prototype, "id", {
            get: function () {
              return this._delegate.id;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(em.prototype, "path", {
            get: function () {
              return this._delegate.path;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(em.prototype, "parent", {
            get: function () {
              var t = this._delegate.parent;
              return t ? new jg(this.firestore, t) : null;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (em.prototype.doc = function (t) {
            try {
              return new jg(
                this.firestore,
                void 0 === t ? pp(this._delegate) : pp(this._delegate, t)
              );
            } catch (t) {
              throw Gg(t, "doc()", "CollectionReference.doc()");
            }
          }),
          (em.prototype.add = function (t) {
            var e,
              n,
              r,
              i = this;
            return (
              (e = this._delegate),
              (n = t),
              (t = tp(e.firestore, Tp)),
              (r = pp(e)),
              (n = ag(e.converter, n)),
              wg(t, [
                zp(
                  Hp(e.firestore),
                  "addDoc",
                  r._key,
                  n,
                  null !== e.converter,
                  {}
                ).toMutation(r._key, ls.exists(!1)),
              ])
                .then(function () {
                  return r;
                })
                .then(function (t) {
                  return new jg(i.firestore, t);
                })
            );
          }),
          (em.prototype.isEqual = function (t) {
            return yp(this._delegate, t._delegate);
          }),
          (em.prototype.withConverter = function (t) {
            return new em(
              this.firestore,
              t
                ? this._delegate.withConverter(Vg.nu(this.firestore, t))
                : this._delegate.withConverter(null)
            );
          }),
          em);
      function em(t, e) {
        var n = this;
        return (
          ((n = zg.call(this, t, e) || this).firestore = t),
          (n._delegate = e),
          n
        );
      }
      function nm(t, e) {
        (this._firestore = t), (this._delegate = e);
      }
      function rm(t, e) {
        (this._firestore = t), (this._delegate = e);
      }
      function im(t, e) {
        (this.firestore = t),
          (this._delegate = e),
          (this._userDataWriter = new Rg(t));
      }
      function om() {
        return (null !== Wg && Wg.apply(this, arguments)) || this;
      }
      function sm(t, e) {
        (this._firestore = t), (this._delegate = e);
      }
      function am(t) {
        return tp(t, op);
      }
      (cm.documentId = function () {
        return new cm(ci.keyField().canonicalString());
      }),
        (cm.prototype.isEqual = function (t) {
          return (
            (t = w(t)) instanceof Cp &&
            this._delegate._internalPath.isEqual(t._internalPath)
          );
        }),
        (C = cm),
        (um.serverTimestamp = function () {
          var t = new ny("serverTimestamp");
          return (t._methodName = "FieldValue.serverTimestamp"), new um(t);
        }),
        (um.delete = function () {
          var t = new Yp("deleteField");
          return (t._methodName = "FieldValue.delete"), new um(t);
        }),
        (um.arrayUnion = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          var n = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            return new ry("arrayUnion", t);
          }.apply(void 0, t);
          return (n._methodName = "FieldValue.arrayUnion"), new um(n);
        }),
        (um.arrayRemove = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          var n = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            return new iy("arrayRemove", t);
          }.apply(void 0, t);
          return (n._methodName = "FieldValue.arrayRemove"), new um(n);
        }),
        (um.increment = function (t) {
          t = new oy("increment", t);
          return (t._methodName = "FieldValue.increment"), new um(t);
        }),
        (um.prototype.isEqual = function (t) {
          return this._delegate.isEqual(t._delegate);
        }),
        (_ = um);
      function um(t) {
        this._delegate = t;
      }
      function cm() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        this._delegate = new (Cp.bind.apply(Cp, s([void 0], t)))();
      }
      function hm(t) {
        return (
          (e = this._delegate),
          (s = t),
          (n = Sp((e = tp(e, Tp)))),
          (t = new Ep()),
          (function (n, t, r) {
            var e,
              i = this,
              o =
                ((e = s),
                (t = El(t)),
                (e = (function (t) {
                  if (t instanceof Uint8Array) return ld(t, void 0);
                  if (t instanceof ArrayBuffer)
                    return ld(new Uint8Array(t), void 0);
                  if (t instanceof ReadableStream) return t.getReader();
                  throw new Error(
                    "Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream"
                  );
                })("string" == typeof e ? new TextEncoder().encode(e) : e)),
                new dd(e, t));
            n.asyncQueue.enqueueAndForget(function () {
              return y(i, void 0, void 0, function () {
                var e;
                return g(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (e = td), [4, Cd(n)];
                    case 1:
                      return e.apply(void 0, [t.sent(), o, r]), [2];
                  }
                });
              });
            });
          })(n, e._databaseId, t),
          t
        );
        var e, s, n;
      }
      function lm(t) {
        var e = this,
          n = this._delegate,
          t = t;
        return (function (n, r) {
          var t = this;
          return n.asyncQueue.enqueue(function () {
            return y(t, void 0, void 0, function () {
              var e;
              return g(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      (e = function (t, e) {
                        var n = t;
                        return n.persistence.runTransaction(
                          "Get named query",
                          "readonly",
                          function (t) {
                            return n.Ke.getNamedQuery(t, e);
                          }
                        );
                      }),
                      [4, Dd(n)]
                    );
                  case 1:
                    return [2, e.apply(void 0, [t.sent(), r])];
                }
              });
            });
          });
        })(Sp((n = tp(n, Tp))), t)
          .then(function (t) {
            return t ? new sp(n, null, t.query) : null;
          })
          .then(function (t) {
            return t ? new $g(e, t) : null;
          });
      }
      var fm =
        ((dm.prototype.setInstantiationMode = function (t) {
          return (this.instantiationMode = t), this;
        }),
        (dm.prototype.setMultipleInstances = function (t) {
          return (this.multipleInstances = t), this;
        }),
        (dm.prototype.setServiceProps = function (t) {
          return (this.serviceProps = t), this;
        }),
        (dm.prototype.setInstanceCreatedCallback = function (t) {
          return (this.onInstanceCreated = t), this;
        }),
        dm);
      function dm(t, e, n) {
        (this.name = t),
          (this.instanceFactory = e),
          (this.type = n),
          (this.multipleInstances = !1),
          (this.serviceProps = {}),
          (this.instantiationMode = "LAZY"),
          (this.onInstanceCreated = null);
      }
      var pm,
        ym,
        gm = {
          Firestore: kg,
          GeoPoint: xp,
          Timestamp: Jr,
          Blob: Ng,
          Transaction: Mg,
          WriteBatch: Fg,
          DocumentReference: jg,
          DocumentSnapshot: Yg,
          Query: $g,
          QueryDocumentSnapshot: Xg,
          QuerySnapshot: Zg,
          CollectionReference: tm,
          FieldPath: C,
          FieldValue: _,
          setLogLevel: function (t) {
            Vr.setLogLevel(t);
          },
          CACHE_SIZE_UNLIMITED: -1,
        };
      (pm = e.default).INTERNAL.registerComponent(
        new fm(
          "firestore",
          function (t) {
            var e = t.getProvider("app").getImmediate();
            return (
              (e = e),
              (t = t.getProvider("auth-internal")),
              new kg(e, new Tp(e, t), new Cg())
            );
          },
          "PUBLIC"
        ).setServiceProps(Object.assign({}, gm))
      ),
        pm.registerVersion("@firebase/firestore", "2.3.10"),
        ((ym = kg).prototype.loadBundle = hm),
        (ym.prototype.namedQuery = lm);
    }.apply(this, arguments);
  } catch (t) {
    throw (
      (console.error(t),
      new Error(
        "Cannot instantiate firebase-firestore.js - be sure to load firebase-app.js first."
      ))
    );
  }
});
//# sourceMappingURL=firebase-firestore.js.map
