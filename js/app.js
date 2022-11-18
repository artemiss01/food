/*! For license information please see app.min.js.LICENSE.txt */
(() => {
  var e = {
      1807: (e) => {
        var t = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        );
        e.exports = t;
      },
      1296: (e, t, i) => {
        var s = /^\s+|\s+$/g,
          n = /^[-+]0x[0-9a-f]+$/i,
          r = /^0b[01]+$/i,
          o = /^0o[0-7]+$/i,
          a = parseInt,
          l = "object" == typeof i.g && i.g && i.g.Object === Object && i.g,
          c = "object" == typeof self && self && self.Object === Object && self,
          d = l || c || Function("return this")(),
          u = Object.prototype.toString,
          h = Math.max,
          p = Math.min,
          f = function () {
            return d.Date.now();
          };
        function g(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        function m(e) {
          if ("number" == typeof e) return e;
          if (
            (function (e) {
              return (
                "symbol" == typeof e ||
                ((function (e) {
                  return !!e && "object" == typeof e;
                })(e) &&
                  "[object Symbol]" == u.call(e))
              );
            })(e)
          )
            return NaN;
          if (g(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = g(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(s, "");
          var i = r.test(e);
          return i || o.test(e)
            ? a(e.slice(2), i ? 2 : 8)
            : n.test(e)
            ? NaN
            : +e;
        }
        e.exports = function (e, t, i) {
          var s,
            n,
            r,
            o,
            a,
            l,
            c = 0,
            d = !1,
            u = !1,
            v = !0;
          if ("function" != typeof e)
            throw new TypeError("Expected a function");
          function b(t) {
            var i = s,
              r = n;
            return (s = n = void 0), (c = t), (o = e.apply(r, i));
          }
          function y(e) {
            return (c = e), (a = setTimeout(x, t)), d ? b(e) : o;
          }
          function w(e) {
            var i = e - l;
            return void 0 === l || i >= t || i < 0 || (u && e - c >= r);
          }
          function x() {
            var e = f();
            if (w(e)) return S(e);
            a = setTimeout(
              x,
              (function (e) {
                var i = t - (e - l);
                return u ? p(i, r - (e - c)) : i;
              })(e)
            );
          }
          function S(e) {
            return (a = void 0), v && s ? b(e) : ((s = n = void 0), o);
          }
          function E() {
            var e = f(),
              i = w(e);
            if (((s = arguments), (n = this), (l = e), i)) {
              if (void 0 === a) return y(l);
              if (u) return (a = setTimeout(x, t)), b(l);
            }
            return void 0 === a && (a = setTimeout(x, t)), o;
          }
          return (
            (t = m(t) || 0),
            g(i) &&
              ((d = !!i.leading),
              (r = (u = "maxWait" in i) ? h(m(i.maxWait) || 0, t) : r),
              (v = "trailing" in i ? !!i.trailing : v)),
            (E.cancel = function () {
              void 0 !== a && clearTimeout(a),
                (c = 0),
                (s = l = n = a = void 0);
            }),
            (E.flush = function () {
              return void 0 === a ? o : S(f());
            }),
            E
          );
        };
      },
      773: (e, t, i) => {
        var s = "__lodash_hash_undefined__",
          n = "[object Function]",
          r = "[object GeneratorFunction]",
          o = /^\[object .+?Constructor\]$/,
          a = "object" == typeof i.g && i.g && i.g.Object === Object && i.g,
          l = "object" == typeof self && self && self.Object === Object && self,
          c = a || l || Function("return this")();
        var d,
          u = Array.prototype,
          h = Function.prototype,
          p = Object.prototype,
          f = c["__core-js_shared__"],
          g = (d = /[^.]+$/.exec((f && f.keys && f.keys.IE_PROTO) || ""))
            ? "Symbol(src)_1." + d
            : "",
          m = h.toString,
          v = p.hasOwnProperty,
          b = p.toString,
          y = RegExp(
            "^" +
              m
                .call(v)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          ),
          w = u.splice,
          x = k(c, "Map"),
          S = k(Object, "create");
        function E(e) {
          var t = -1,
            i = e ? e.length : 0;
          for (this.clear(); ++t < i; ) {
            var s = e[t];
            this.set(s[0], s[1]);
          }
        }
        function T(e) {
          var t = -1,
            i = e ? e.length : 0;
          for (this.clear(); ++t < i; ) {
            var s = e[t];
            this.set(s[0], s[1]);
          }
        }
        function C(e) {
          var t = -1,
            i = e ? e.length : 0;
          for (this.clear(); ++t < i; ) {
            var s = e[t];
            this.set(s[0], s[1]);
          }
        }
        function O(e, t) {
          for (var i, s, n = e.length; n--; )
            if ((i = e[n][0]) === (s = t) || (i != i && s != s)) return n;
          return -1;
        }
        function I(e) {
          if (!A(e) || ((t = e), g && g in t)) return !1;
          var t,
            i =
              (function (e) {
                var t = A(e) ? b.call(e) : "";
                return t == n || t == r;
              })(e) ||
              (function (e) {
                var t = !1;
                if (null != e && "function" != typeof e.toString)
                  try {
                    t = !!(e + "");
                  } catch (e) {}
                return t;
              })(e)
                ? y
                : o;
          return i.test(
            (function (e) {
              if (null != e) {
                try {
                  return m.call(e);
                } catch (e) {}
                try {
                  return e + "";
                } catch (e) {}
              }
              return "";
            })(e)
          );
        }
        function L(e, t) {
          var i,
            s,
            n = e.__data__;
          return (
            "string" == (s = typeof (i = t)) ||
            "number" == s ||
            "symbol" == s ||
            "boolean" == s
              ? "__proto__" !== i
              : null === i
          )
            ? n["string" == typeof t ? "string" : "hash"]
            : n.map;
        }
        function k(e, t) {
          var i = (function (e, t) {
            return null == e ? void 0 : e[t];
          })(e, t);
          return I(i) ? i : void 0;
        }
        function M(e, t) {
          if ("function" != typeof e || (t && "function" != typeof t))
            throw new TypeError("Expected a function");
          var i = function () {
            var s = arguments,
              n = t ? t.apply(this, s) : s[0],
              r = i.cache;
            if (r.has(n)) return r.get(n);
            var o = e.apply(this, s);
            return (i.cache = r.set(n, o)), o;
          };
          return (i.cache = new (M.Cache || C)()), i;
        }
        function A(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        (E.prototype.clear = function () {
          this.__data__ = S ? S(null) : {};
        }),
          (E.prototype.delete = function (e) {
            return this.has(e) && delete this.__data__[e];
          }),
          (E.prototype.get = function (e) {
            var t = this.__data__;
            if (S) {
              var i = t[e];
              return i === s ? void 0 : i;
            }
            return v.call(t, e) ? t[e] : void 0;
          }),
          (E.prototype.has = function (e) {
            var t = this.__data__;
            return S ? void 0 !== t[e] : v.call(t, e);
          }),
          (E.prototype.set = function (e, t) {
            return (this.__data__[e] = S && void 0 === t ? s : t), this;
          }),
          (T.prototype.clear = function () {
            this.__data__ = [];
          }),
          (T.prototype.delete = function (e) {
            var t = this.__data__,
              i = O(t, e);
            return (
              !(i < 0) && (i == t.length - 1 ? t.pop() : w.call(t, i, 1), !0)
            );
          }),
          (T.prototype.get = function (e) {
            var t = this.__data__,
              i = O(t, e);
            return i < 0 ? void 0 : t[i][1];
          }),
          (T.prototype.has = function (e) {
            return O(this.__data__, e) > -1;
          }),
          (T.prototype.set = function (e, t) {
            var i = this.__data__,
              s = O(i, e);
            return s < 0 ? i.push([e, t]) : (i[s][1] = t), this;
          }),
          (C.prototype.clear = function () {
            this.__data__ = {
              hash: new E(),
              map: new (x || T)(),
              string: new E(),
            };
          }),
          (C.prototype.delete = function (e) {
            return L(this, e).delete(e);
          }),
          (C.prototype.get = function (e) {
            return L(this, e).get(e);
          }),
          (C.prototype.has = function (e) {
            return L(this, e).has(e);
          }),
          (C.prototype.set = function (e, t) {
            return L(this, e).set(e, t), this;
          }),
          (M.Cache = C),
          (e.exports = M);
      },
      3096: (e, t, i) => {
        var s = "Expected a function",
          n = /^\s+|\s+$/g,
          r = /^[-+]0x[0-9a-f]+$/i,
          o = /^0b[01]+$/i,
          a = /^0o[0-7]+$/i,
          l = parseInt,
          c = "object" == typeof i.g && i.g && i.g.Object === Object && i.g,
          d = "object" == typeof self && self && self.Object === Object && self,
          u = c || d || Function("return this")(),
          h = Object.prototype.toString,
          p = Math.max,
          f = Math.min,
          g = function () {
            return u.Date.now();
          };
        function m(e, t, i) {
          var n,
            r,
            o,
            a,
            l,
            c,
            d = 0,
            u = !1,
            h = !1,
            m = !0;
          if ("function" != typeof e) throw new TypeError(s);
          function y(t) {
            var i = n,
              s = r;
            return (n = r = void 0), (d = t), (a = e.apply(s, i));
          }
          function w(e) {
            return (d = e), (l = setTimeout(S, t)), u ? y(e) : a;
          }
          function x(e) {
            var i = e - c;
            return void 0 === c || i >= t || i < 0 || (h && e - d >= o);
          }
          function S() {
            var e = g();
            if (x(e)) return E(e);
            l = setTimeout(
              S,
              (function (e) {
                var i = t - (e - c);
                return h ? f(i, o - (e - d)) : i;
              })(e)
            );
          }
          function E(e) {
            return (l = void 0), m && n ? y(e) : ((n = r = void 0), a);
          }
          function T() {
            var e = g(),
              i = x(e);
            if (((n = arguments), (r = this), (c = e), i)) {
              if (void 0 === l) return w(c);
              if (h) return (l = setTimeout(S, t)), y(c);
            }
            return void 0 === l && (l = setTimeout(S, t)), a;
          }
          return (
            (t = b(t) || 0),
            v(i) &&
              ((u = !!i.leading),
              (o = (h = "maxWait" in i) ? p(b(i.maxWait) || 0, t) : o),
              (m = "trailing" in i ? !!i.trailing : m)),
            (T.cancel = function () {
              void 0 !== l && clearTimeout(l),
                (d = 0),
                (n = c = r = l = void 0);
            }),
            (T.flush = function () {
              return void 0 === l ? a : E(g());
            }),
            T
          );
        }
        function v(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        function b(e) {
          if ("number" == typeof e) return e;
          if (
            (function (e) {
              return (
                "symbol" == typeof e ||
                ((function (e) {
                  return !!e && "object" == typeof e;
                })(e) &&
                  "[object Symbol]" == h.call(e))
              );
            })(e)
          )
            return NaN;
          if (v(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = v(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(n, "");
          var i = o.test(e);
          return i || a.test(e)
            ? l(e.slice(2), i ? 2 : 8)
            : r.test(e)
            ? NaN
            : +e;
        }
        e.exports = function (e, t, i) {
          var n = !0,
            r = !0;
          if ("function" != typeof e) throw new TypeError(s);
          return (
            v(i) &&
              ((n = "leading" in i ? !!i.leading : n),
              (r = "trailing" in i ? !!i.trailing : r)),
            m(e, t, { leading: n, maxWait: t, trailing: r })
          );
        };
      },
      5055: (e, t, i) => {
        var s = i(6282),
          n = i(180),
          r = TypeError;
        e.exports = function (e) {
          if (s(e)) return e;
          throw r(n(e) + " is not a function");
        };
      },
      2004: (e, t, i) => {
        var s = i(6282),
          n = String,
          r = TypeError;
        e.exports = function (e) {
          if ("object" == typeof e || s(e)) return e;
          throw r("Can't set " + n(e) + " as a prototype");
        };
      },
      9256: (e, t, i) => {
        var s = i(8149),
          n = i(1525),
          r = i(9168).f,
          o = s("unscopables"),
          a = Array.prototype;
        null == a[o] && r(a, o, { configurable: !0, value: n(null) }),
          (e.exports = function (e) {
            a[o][e] = !0;
          });
      },
      3615: (e, t, i) => {
        "use strict";
        var s = i(7321).charAt;
        e.exports = function (e, t, i) {
          return t + (i ? s(e, t).length : 1);
        };
      },
      3046: (e, t, i) => {
        var s = i(1786),
          n = TypeError;
        e.exports = function (e, t) {
          if (s(t, e)) return e;
          throw n("Incorrect invocation");
        };
      },
      1474: (e, t, i) => {
        var s = i(5896),
          n = String,
          r = TypeError;
        e.exports = function (e) {
          if (s(e)) return e;
          throw r(n(e) + " is not an object");
        };
      },
      8774: (e, t, i) => {
        var s = i(6183);
        e.exports = s(function () {
          if ("function" == typeof ArrayBuffer) {
            var e = new ArrayBuffer(8);
            Object.isExtensible(e) &&
              Object.defineProperty(e, "a", { value: 8 });
          }
        });
      },
      1269: (e, t, i) => {
        "use strict";
        var s = i(528).forEach,
          n = i(1923)("forEach");
        e.exports = n
          ? [].forEach
          : function (e) {
              return s(this, e, arguments.length > 1 ? arguments[1] : void 0);
            };
      },
      5675: (e, t, i) => {
        var s = i(3206),
          n = i(9623),
          r = i(1829),
          o = function (e) {
            return function (t, i, o) {
              var a,
                l = s(t),
                c = r(l),
                d = n(o, c);
              if (e && i != i) {
                for (; c > d; ) if ((a = l[d++]) != a) return !0;
              } else
                for (; c > d; d++)
                  if ((e || d in l) && l[d] === i) return e || d || 0;
              return !e && -1;
            };
          };
        e.exports = { includes: o(!0), indexOf: o(!1) };
      },
      528: (e, t, i) => {
        var s = i(1098),
          n = i(1768),
          r = i(7530),
          o = i(9473),
          a = i(1829),
          l = i(2768),
          c = n([].push),
          d = function (e) {
            var t = 1 == e,
              i = 2 == e,
              n = 3 == e,
              d = 4 == e,
              u = 6 == e,
              h = 7 == e,
              p = 5 == e || u;
            return function (f, g, m, v) {
              for (
                var b,
                  y,
                  w = o(f),
                  x = r(w),
                  S = s(g, m),
                  E = a(x),
                  T = 0,
                  C = v || l,
                  O = t ? C(f, E) : i || h ? C(f, 0) : void 0;
                E > T;
                T++
              )
                if ((p || T in x) && ((y = S((b = x[T]), T, w)), e))
                  if (t) O[T] = y;
                  else if (y)
                    switch (e) {
                      case 3:
                        return !0;
                      case 5:
                        return b;
                      case 6:
                        return T;
                      case 2:
                        c(O, b);
                    }
                  else
                    switch (e) {
                      case 4:
                        return !1;
                      case 7:
                        c(O, b);
                    }
              return u ? -1 : n || d ? d : O;
            };
          };
        e.exports = {
          forEach: d(0),
          map: d(1),
          filter: d(2),
          some: d(3),
          every: d(4),
          find: d(5),
          findIndex: d(6),
          filterReject: d(7),
        };
      },
      4820: (e, t, i) => {
        var s = i(6183),
          n = i(8149),
          r = i(4324),
          o = n("species");
        e.exports = function (e) {
          return (
            r >= 51 ||
            !s(function () {
              var t = [];
              return (
                ((t.constructor = {})[o] = function () {
                  return { foo: 1 };
                }),
                1 !== t[e](Boolean).foo
              );
            })
          );
        };
      },
      1923: (e, t, i) => {
        "use strict";
        var s = i(6183);
        e.exports = function (e, t) {
          var i = [][e];
          return (
            !!i &&
            s(function () {
              i.call(
                null,
                t ||
                  function () {
                    return 1;
                  },
                1
              );
            })
          );
        };
      },
      6589: (e, t, i) => {
        var s = i(5055),
          n = i(9473),
          r = i(7530),
          o = i(1829),
          a = TypeError,
          l = function (e) {
            return function (t, i, l, c) {
              s(i);
              var d = n(t),
                u = r(d),
                h = o(d),
                p = e ? h - 1 : 0,
                f = e ? -1 : 1;
              if (l < 2)
                for (;;) {
                  if (p in u) {
                    (c = u[p]), (p += f);
                    break;
                  }
                  if (((p += f), e ? p < 0 : h <= p))
                    throw a("Reduce of empty array with no initial value");
                }
              for (; e ? p >= 0 : h > p; p += f)
                p in u && (c = i(c, u[p], p, d));
              return c;
            };
          };
        e.exports = { left: l(!1), right: l(!0) };
      },
      4072: (e, t, i) => {
        var s = i(9623),
          n = i(1829),
          r = i(2759),
          o = Array,
          a = Math.max;
        e.exports = function (e, t, i) {
          for (
            var l = n(e),
              c = s(t, l),
              d = s(void 0 === i ? l : i, l),
              u = o(a(d - c, 0)),
              h = 0;
            c < d;
            c++, h++
          )
            r(u, h, e[c]);
          return (u.length = h), u;
        };
      },
      9882: (e, t, i) => {
        var s = i(7931),
          n = i(2240),
          r = i(5896),
          o = i(8149)("species"),
          a = Array;
        e.exports = function (e) {
          var t;
          return (
            s(e) &&
              ((t = e.constructor),
              ((n(t) && (t === a || s(t.prototype))) ||
                (r(t) && null === (t = t[o]))) &&
                (t = void 0)),
            void 0 === t ? a : t
          );
        };
      },
      2768: (e, t, i) => {
        var s = i(9882);
        e.exports = function (e, t) {
          return new (s(e))(0 === t ? 0 : t);
        };
      },
      1751: (e, t, i) => {
        var s = i(8149)("iterator"),
          n = !1;
        try {
          var r = 0,
            o = {
              next: function () {
                return { done: !!r++ };
              },
              return: function () {
                n = !0;
              },
            };
          (o[s] = function () {
            return this;
          }),
            Array.from(o, function () {
              throw 2;
            });
        } catch (e) {}
        e.exports = function (e, t) {
          if (!t && !n) return !1;
          var i = !1;
          try {
            var r = {};
            (r[s] = function () {
              return {
                next: function () {
                  return { done: (i = !0) };
                },
              };
            }),
              e(r);
          } catch (e) {}
          return i;
        };
      },
      1510: (e, t, i) => {
        var s = i(1768),
          n = s({}.toString),
          r = s("".slice);
        e.exports = function (e) {
          return r(n(e), 8, -1);
        };
      },
      9225: (e, t, i) => {
        var s = i(4823),
          n = i(6282),
          r = i(1510),
          o = i(8149)("toStringTag"),
          a = Object,
          l =
            "Arguments" ==
            r(
              (function () {
                return arguments;
              })()
            );
        e.exports = s
          ? r
          : function (e) {
              var t, i, s;
              return void 0 === e
                ? "Undefined"
                : null === e
                ? "Null"
                : "string" ==
                  typeof (i = (function (e, t) {
                    try {
                      return e[t];
                    } catch (e) {}
                  })((t = a(e)), o))
                ? i
                : l
                ? r(t)
                : "Object" == (s = r(t)) && n(t.callee)
                ? "Arguments"
                : s;
            };
      },
      7790: (e, t, i) => {
        "use strict";
        var s = i(1768),
          n = i(6367),
          r = i(6582).getWeakData,
          o = i(3046),
          a = i(1474),
          l = i(2420),
          c = i(5896),
          d = i(1518),
          u = i(528),
          h = i(8281),
          p = i(1030),
          f = p.set,
          g = p.getterFor,
          m = u.find,
          v = u.findIndex,
          b = s([].splice),
          y = 0,
          w = function (e) {
            return e.frozen || (e.frozen = new x());
          },
          x = function () {
            this.entries = [];
          },
          S = function (e, t) {
            return m(e.entries, function (e) {
              return e[0] === t;
            });
          };
        (x.prototype = {
          get: function (e) {
            var t = S(this, e);
            if (t) return t[1];
          },
          has: function (e) {
            return !!S(this, e);
          },
          set: function (e, t) {
            var i = S(this, e);
            i ? (i[1] = t) : this.entries.push([e, t]);
          },
          delete: function (e) {
            var t = v(this.entries, function (t) {
              return t[0] === e;
            });
            return ~t && b(this.entries, t, 1), !!~t;
          },
        }),
          (e.exports = {
            getConstructor: function (e, t, i, s) {
              var u = e(function (e, n) {
                  o(e, p),
                    f(e, { type: t, id: y++, frozen: void 0 }),
                    l(n) || d(n, e[s], { that: e, AS_ENTRIES: i });
                }),
                p = u.prototype,
                m = g(t),
                v = function (e, t, i) {
                  var s = m(e),
                    n = r(a(t), !0);
                  return !0 === n ? w(s).set(t, i) : (n[s.id] = i), e;
                };
              return (
                n(p, {
                  delete: function (e) {
                    var t = m(this);
                    if (!c(e)) return !1;
                    var i = r(e);
                    return !0 === i
                      ? w(t).delete(e)
                      : i && h(i, t.id) && delete i[t.id];
                  },
                  has: function (e) {
                    var t = m(this);
                    if (!c(e)) return !1;
                    var i = r(e);
                    return !0 === i ? w(t).has(e) : i && h(i, t.id);
                  },
                }),
                n(
                  p,
                  i
                    ? {
                        get: function (e) {
                          var t = m(this);
                          if (c(e)) {
                            var i = r(e);
                            return !0 === i
                              ? w(t).get(e)
                              : i
                              ? i[t.id]
                              : void 0;
                          }
                        },
                        set: function (e, t) {
                          return v(this, e, t);
                        },
                      }
                    : {
                        add: function (e) {
                          return v(this, e, !0);
                        },
                      }
                ),
                u
              );
            },
          });
      },
      6645: (e, t, i) => {
        "use strict";
        var s = i(4761),
          n = i(8454),
          r = i(1768),
          o = i(1949),
          a = i(2054),
          l = i(6582),
          c = i(1518),
          d = i(3046),
          u = i(6282),
          h = i(2420),
          p = i(5896),
          f = i(6183),
          g = i(1751),
          m = i(820),
          v = i(7770);
        e.exports = function (e, t, i) {
          var b = -1 !== e.indexOf("Map"),
            y = -1 !== e.indexOf("Weak"),
            w = b ? "set" : "add",
            x = n[e],
            S = x && x.prototype,
            E = x,
            T = {},
            C = function (e) {
              var t = r(S[e]);
              a(
                S,
                e,
                "add" == e
                  ? function (e) {
                      return t(this, 0 === e ? 0 : e), this;
                    }
                  : "delete" == e
                  ? function (e) {
                      return !(y && !p(e)) && t(this, 0 === e ? 0 : e);
                    }
                  : "get" == e
                  ? function (e) {
                      return y && !p(e) ? void 0 : t(this, 0 === e ? 0 : e);
                    }
                  : "has" == e
                  ? function (e) {
                      return !(y && !p(e)) && t(this, 0 === e ? 0 : e);
                    }
                  : function (e, i) {
                      return t(this, 0 === e ? 0 : e, i), this;
                    }
              );
            };
          if (
            o(
              e,
              !u(x) ||
                !(
                  y ||
                  (S.forEach &&
                    !f(function () {
                      new x().entries().next();
                    }))
                )
            )
          )
            (E = i.getConstructor(t, e, b, w)), l.enable();
          else if (o(e, !0)) {
            var O = new E(),
              I = O[w](y ? {} : -0, 1) != O,
              L = f(function () {
                O.has(1);
              }),
              k = g(function (e) {
                new x(e);
              }),
              M =
                !y &&
                f(function () {
                  for (var e = new x(), t = 5; t--; ) e[w](t, t);
                  return !e.has(-0);
                });
            k ||
              (((E = t(function (e, t) {
                d(e, S);
                var i = v(new x(), e, E);
                return h(t) || c(t, i[w], { that: i, AS_ENTRIES: b }), i;
              })).prototype = S),
              (S.constructor = E)),
              (L || M) && (C("delete"), C("has"), b && C("get")),
              (M || I) && C(w),
              y && S.clear && delete S.clear;
          }
          return (
            (T[e] = E),
            s({ global: !0, constructor: !0, forced: E != x }, T),
            m(E, e),
            y || i.setStrong(E, e, b),
            E
          );
        };
      },
      882: (e, t, i) => {
        var s = i(8281),
          n = i(1441),
          r = i(5663),
          o = i(9168);
        e.exports = function (e, t, i) {
          for (var a = n(t), l = o.f, c = r.f, d = 0; d < a.length; d++) {
            var u = a[d];
            s(e, u) || (i && s(i, u)) || l(e, u, c(t, u));
          }
        };
      },
      7401: (e, t, i) => {
        var s = i(6183);
        e.exports = !s(function () {
          function e() {}
          return (
            (e.prototype.constructor = null),
            Object.getPrototypeOf(new e()) !== e.prototype
          );
        });
      },
      5351: (e) => {
        e.exports = function (e, t) {
          return { value: e, done: t };
        };
      },
      1501: (e, t, i) => {
        var s = i(723),
          n = i(9168),
          r = i(9273);
        e.exports = s
          ? function (e, t, i) {
              return n.f(e, t, r(1, i));
            }
          : function (e, t, i) {
              return (e[t] = i), e;
            };
      },
      9273: (e) => {
        e.exports = function (e, t) {
          return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t,
          };
        };
      },
      2759: (e, t, i) => {
        "use strict";
        var s = i(2988),
          n = i(9168),
          r = i(9273);
        e.exports = function (e, t, i) {
          var o = s(t);
          o in e ? n.f(e, o, r(0, i)) : (e[o] = i);
        };
      },
      2054: (e, t, i) => {
        var s = i(6282),
          n = i(9168),
          r = i(5903),
          o = i(7194);
        e.exports = function (e, t, i, a) {
          a || (a = {});
          var l = a.enumerable,
            c = void 0 !== a.name ? a.name : t;
          if ((s(i) && r(i, c, a), a.global)) l ? (e[t] = i) : o(t, i);
          else {
            try {
              a.unsafe ? e[t] && (l = !0) : delete e[t];
            } catch (e) {}
            l
              ? (e[t] = i)
              : n.f(e, t, {
                  value: i,
                  enumerable: !1,
                  configurable: !a.nonConfigurable,
                  writable: !a.nonWritable,
                });
          }
          return e;
        };
      },
      6367: (e, t, i) => {
        var s = i(2054);
        e.exports = function (e, t, i) {
          for (var n in t) s(e, n, t[n], i);
          return e;
        };
      },
      7194: (e, t, i) => {
        var s = i(8454),
          n = Object.defineProperty;
        e.exports = function (e, t) {
          try {
            n(s, e, { value: t, configurable: !0, writable: !0 });
          } catch (i) {
            s[e] = t;
          }
          return t;
        };
      },
      723: (e, t, i) => {
        var s = i(6183);
        e.exports = !s(function () {
          return (
            7 !=
            Object.defineProperty({}, 1, {
              get: function () {
                return 7;
              },
            })[1]
          );
        });
      },
      7282: (e, t, i) => {
        var s = i(8454),
          n = i(5896),
          r = s.document,
          o = n(r) && n(r.createElement);
        e.exports = function (e) {
          return o ? r.createElement(e) : {};
        };
      },
      6181: (e) => {
        e.exports = {
          CSSRuleList: 0,
          CSSStyleDeclaration: 0,
          CSSValueList: 0,
          ClientRectList: 0,
          DOMRectList: 0,
          DOMStringList: 0,
          DOMTokenList: 1,
          DataTransferItemList: 0,
          FileList: 0,
          HTMLAllCollection: 0,
          HTMLCollection: 0,
          HTMLFormElement: 0,
          HTMLSelectElement: 0,
          MediaList: 0,
          MimeTypeArray: 0,
          NamedNodeMap: 0,
          NodeList: 1,
          PaintRequestList: 0,
          Plugin: 0,
          PluginArray: 0,
          SVGLengthList: 0,
          SVGNumberList: 0,
          SVGPathSegList: 0,
          SVGPointList: 0,
          SVGStringList: 0,
          SVGTransformList: 0,
          SourceBufferList: 0,
          StyleSheetList: 0,
          TextTrackCueList: 0,
          TextTrackList: 0,
          TouchList: 0,
        };
      },
      2387: (e, t, i) => {
        var s = i(7282)("span").classList,
          n = s && s.constructor && s.constructor.prototype;
        e.exports = n === Object.prototype ? void 0 : n;
      },
      7594: (e, t, i) => {
        var s = i(1510),
          n = i(8454);
        e.exports = "process" == s(n.process);
      },
      2543: (e, t, i) => {
        var s = i(4991);
        e.exports = s("navigator", "userAgent") || "";
      },
      4324: (e, t, i) => {
        var s,
          n,
          r = i(8454),
          o = i(2543),
          a = r.process,
          l = r.Deno,
          c = (a && a.versions) || (l && l.version),
          d = c && c.v8;
        d && (n = (s = d.split("."))[0] > 0 && s[0] < 4 ? 1 : +(s[0] + s[1])),
          !n &&
            o &&
            (!(s = o.match(/Edge\/(\d+)/)) || s[1] >= 74) &&
            (s = o.match(/Chrome\/(\d+)/)) &&
            (n = +s[1]),
          (e.exports = n);
      },
      8409: (e) => {
        e.exports = [
          "constructor",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf",
        ];
      },
      4761: (e, t, i) => {
        var s = i(8454),
          n = i(5663).f,
          r = i(1501),
          o = i(2054),
          a = i(7194),
          l = i(882),
          c = i(1949);
        e.exports = function (e, t) {
          var i,
            d,
            u,
            h,
            p,
            f = e.target,
            g = e.global,
            m = e.stat;
          if ((i = g ? s : m ? s[f] || a(f, {}) : (s[f] || {}).prototype))
            for (d in t) {
              if (
                ((h = t[d]),
                (u = e.dontCallGetSet ? (p = n(i, d)) && p.value : i[d]),
                !c(g ? d : f + (m ? "." : "#") + d, e.forced) && void 0 !== u)
              ) {
                if (typeof h == typeof u) continue;
                l(h, u);
              }
              (e.sham || (u && u.sham)) && r(h, "sham", !0), o(i, d, h, e);
            }
        };
      },
      6183: (e) => {
        e.exports = function (e) {
          try {
            return !!e();
          } catch (e) {
            return !0;
          }
        };
      },
      9696: (e, t, i) => {
        "use strict";
        i(9989);
        var s = i(1768),
          n = i(2054),
          r = i(5510),
          o = i(6183),
          a = i(8149),
          l = i(1501),
          c = a("species"),
          d = RegExp.prototype;
        e.exports = function (e, t, i, u) {
          var h = a(e),
            p = !o(function () {
              var t = {};
              return (
                (t[h] = function () {
                  return 7;
                }),
                7 != ""[e](t)
              );
            }),
            f =
              p &&
              !o(function () {
                var t = !1,
                  i = /a/;
                return (
                  "split" === e &&
                    (((i = {}).constructor = {}),
                    (i.constructor[c] = function () {
                      return i;
                    }),
                    (i.flags = ""),
                    (i[h] = /./[h])),
                  (i.exec = function () {
                    return (t = !0), null;
                  }),
                  i[h](""),
                  !t
                );
              });
          if (!p || !f || i) {
            var g = s(/./[h]),
              m = t(h, ""[e], function (e, t, i, n, o) {
                var a = s(e),
                  l = t.exec;
                return l === r || l === d.exec
                  ? p && !o
                    ? { done: !0, value: g(t, i, n) }
                    : { done: !0, value: a(i, t, n) }
                  : { done: !1 };
              });
            n(String.prototype, e, m[0]), n(d, h, m[1]);
          }
          u && l(d[h], "sham", !0);
        };
      },
      3116: (e, t, i) => {
        var s = i(6183);
        e.exports = !s(function () {
          return Object.isExtensible(Object.preventExtensions({}));
        });
      },
      6218: (e, t, i) => {
        var s = i(160),
          n = Function.prototype,
          r = n.apply,
          o = n.call;
        e.exports =
          ("object" == typeof Reflect && Reflect.apply) ||
          (s
            ? o.bind(r)
            : function () {
                return o.apply(r, arguments);
              });
      },
      1098: (e, t, i) => {
        var s = i(1768),
          n = i(5055),
          r = i(160),
          o = s(s.bind);
        e.exports = function (e, t) {
          return (
            n(e),
            void 0 === t
              ? e
              : r
              ? o(e, t)
              : function () {
                  return e.apply(t, arguments);
                }
          );
        };
      },
      160: (e, t, i) => {
        var s = i(6183);
        e.exports = !s(function () {
          var e = function () {}.bind();
          return "function" != typeof e || e.hasOwnProperty("prototype");
        });
      },
      4552: (e, t, i) => {
        var s = i(160),
          n = Function.prototype.call;
        e.exports = s
          ? n.bind(n)
          : function () {
              return n.apply(n, arguments);
            };
      },
      4530: (e, t, i) => {
        var s = i(723),
          n = i(8281),
          r = Function.prototype,
          o = s && Object.getOwnPropertyDescriptor,
          a = n(r, "name"),
          l = a && "something" === function () {}.name,
          c = a && (!s || (s && o(r, "name").configurable));
        e.exports = { EXISTS: a, PROPER: l, CONFIGURABLE: c };
      },
      1768: (e, t, i) => {
        var s = i(160),
          n = Function.prototype,
          r = n.bind,
          o = n.call,
          a = s && r.bind(o, o);
        e.exports = s
          ? function (e) {
              return e && a(e);
            }
          : function (e) {
              return (
                e &&
                function () {
                  return o.apply(e, arguments);
                }
              );
            };
      },
      4991: (e, t, i) => {
        var s = i(8454),
          n = i(6282),
          r = function (e) {
            return n(e) ? e : void 0;
          };
        e.exports = function (e, t) {
          return arguments.length < 2 ? r(s[e]) : s[e] && s[e][t];
        };
      },
      650: (e, t, i) => {
        var s = i(9225),
          n = i(9827),
          r = i(2420),
          o = i(6126),
          a = i(8149)("iterator");
        e.exports = function (e) {
          if (!r(e)) return n(e, a) || n(e, "@@iterator") || o[s(e)];
        };
      },
      7755: (e, t, i) => {
        var s = i(4552),
          n = i(5055),
          r = i(1474),
          o = i(180),
          a = i(650),
          l = TypeError;
        e.exports = function (e, t) {
          var i = arguments.length < 2 ? a(e) : t;
          if (n(i)) return r(s(i, e));
          throw l(o(e) + " is not iterable");
        };
      },
      9827: (e, t, i) => {
        var s = i(5055),
          n = i(2420);
        e.exports = function (e, t) {
          var i = e[t];
          return n(i) ? void 0 : s(i);
        };
      },
      4742: (e, t, i) => {
        var s = i(1768),
          n = i(9473),
          r = Math.floor,
          o = s("".charAt),
          a = s("".replace),
          l = s("".slice),
          c = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
          d = /\$([$&'`]|\d{1,2})/g;
        e.exports = function (e, t, i, s, u, h) {
          var p = i + e.length,
            f = s.length,
            g = d;
          return (
            void 0 !== u && ((u = n(u)), (g = c)),
            a(h, g, function (n, a) {
              var c;
              switch (o(a, 0)) {
                case "$":
                  return "$";
                case "&":
                  return e;
                case "`":
                  return l(t, 0, i);
                case "'":
                  return l(t, p);
                case "<":
                  c = u[l(a, 1, -1)];
                  break;
                default:
                  var d = +a;
                  if (0 === d) return n;
                  if (d > f) {
                    var h = r(d / 10);
                    return 0 === h
                      ? n
                      : h <= f
                      ? void 0 === s[h - 1]
                        ? o(a, 1)
                        : s[h - 1] + o(a, 1)
                      : n;
                  }
                  c = s[d - 1];
              }
              return void 0 === c ? "" : c;
            })
          );
        };
      },
      8454: (e, t, i) => {
        var s = function (e) {
          return e && e.Math == Math && e;
        };
        e.exports =
          s("object" == typeof globalThis && globalThis) ||
          s("object" == typeof window && window) ||
          s("object" == typeof self && self) ||
          s("object" == typeof i.g && i.g) ||
          (function () {
            return this;
          })() ||
          Function("return this")();
      },
      8281: (e, t, i) => {
        var s = i(1768),
          n = i(9473),
          r = s({}.hasOwnProperty);
        e.exports =
          Object.hasOwn ||
          function (e, t) {
            return r(n(e), t);
          };
      },
      4377: (e) => {
        e.exports = {};
      },
      7461: (e, t, i) => {
        var s = i(4991);
        e.exports = s("document", "documentElement");
      },
      4985: (e, t, i) => {
        var s = i(723),
          n = i(6183),
          r = i(7282);
        e.exports =
          !s &&
          !n(function () {
            return (
              7 !=
              Object.defineProperty(r("div"), "a", {
                get: function () {
                  return 7;
                },
              }).a
            );
          });
      },
      7530: (e, t, i) => {
        var s = i(1768),
          n = i(6183),
          r = i(1510),
          o = Object,
          a = s("".split);
        e.exports = n(function () {
          return !o("z").propertyIsEnumerable(0);
        })
          ? function (e) {
              return "String" == r(e) ? a(e, "") : o(e);
            }
          : o;
      },
      7770: (e, t, i) => {
        var s = i(6282),
          n = i(5896),
          r = i(5900);
        e.exports = function (e, t, i) {
          var o, a;
          return (
            r &&
              s((o = t.constructor)) &&
              o !== i &&
              n((a = o.prototype)) &&
              a !== i.prototype &&
              r(e, a),
            e
          );
        };
      },
      6901: (e, t, i) => {
        var s = i(1768),
          n = i(6282),
          r = i(2047),
          o = s(Function.toString);
        n(r.inspectSource) ||
          (r.inspectSource = function (e) {
            return o(e);
          }),
          (e.exports = r.inspectSource);
      },
      6582: (e, t, i) => {
        var s = i(4761),
          n = i(1768),
          r = i(4377),
          o = i(5896),
          a = i(8281),
          l = i(9168).f,
          c = i(6785),
          d = i(6675),
          u = i(6662),
          h = i(9059),
          p = i(3116),
          f = !1,
          g = h("meta"),
          m = 0,
          v = function (e) {
            l(e, g, { value: { objectID: "O" + m++, weakData: {} } });
          },
          b = (e.exports = {
            enable: function () {
              (b.enable = function () {}), (f = !0);
              var e = c.f,
                t = n([].splice),
                i = {};
              (i[g] = 1),
                e(i).length &&
                  ((c.f = function (i) {
                    for (var s = e(i), n = 0, r = s.length; n < r; n++)
                      if (s[n] === g) {
                        t(s, n, 1);
                        break;
                      }
                    return s;
                  }),
                  s(
                    { target: "Object", stat: !0, forced: !0 },
                    { getOwnPropertyNames: d.f }
                  ));
            },
            fastKey: function (e, t) {
              if (!o(e))
                return "symbol" == typeof e
                  ? e
                  : ("string" == typeof e ? "S" : "P") + e;
              if (!a(e, g)) {
                if (!u(e)) return "F";
                if (!t) return "E";
                v(e);
              }
              return e[g].objectID;
            },
            getWeakData: function (e, t) {
              if (!a(e, g)) {
                if (!u(e)) return !0;
                if (!t) return !1;
                v(e);
              }
              return e[g].weakData;
            },
            onFreeze: function (e) {
              return p && f && u(e) && !a(e, g) && v(e), e;
            },
          });
        r[g] = !0;
      },
      1030: (e, t, i) => {
        var s,
          n,
          r,
          o = i(9780),
          a = i(8454),
          l = i(1768),
          c = i(5896),
          d = i(1501),
          u = i(8281),
          h = i(2047),
          p = i(8873),
          f = i(4377),
          g = "Object already initialized",
          m = a.TypeError,
          v = a.WeakMap;
        if (o || h.state) {
          var b = h.state || (h.state = new v()),
            y = l(b.get),
            w = l(b.has),
            x = l(b.set);
          (s = function (e, t) {
            if (w(b, e)) throw m(g);
            return (t.facade = e), x(b, e, t), t;
          }),
            (n = function (e) {
              return y(b, e) || {};
            }),
            (r = function (e) {
              return w(b, e);
            });
        } else {
          var S = p("state");
          (f[S] = !0),
            (s = function (e, t) {
              if (u(e, S)) throw m(g);
              return (t.facade = e), d(e, S, t), t;
            }),
            (n = function (e) {
              return u(e, S) ? e[S] : {};
            }),
            (r = function (e) {
              return u(e, S);
            });
        }
        e.exports = {
          set: s,
          get: n,
          has: r,
          enforce: function (e) {
            return r(e) ? n(e) : s(e, {});
          },
          getterFor: function (e) {
            return function (t) {
              var i;
              if (!c(t) || (i = n(t)).type !== e)
                throw m("Incompatible receiver, " + e + " required");
              return i;
            };
          },
        };
      },
      5859: (e, t, i) => {
        var s = i(8149),
          n = i(6126),
          r = s("iterator"),
          o = Array.prototype;
        e.exports = function (e) {
          return void 0 !== e && (n.Array === e || o[r] === e);
        };
      },
      7931: (e, t, i) => {
        var s = i(1510);
        e.exports =
          Array.isArray ||
          function (e) {
            return "Array" == s(e);
          };
      },
      6282: (e) => {
        e.exports = function (e) {
          return "function" == typeof e;
        };
      },
      2240: (e, t, i) => {
        var s = i(1768),
          n = i(6183),
          r = i(6282),
          o = i(9225),
          a = i(4991),
          l = i(6901),
          c = function () {},
          d = [],
          u = a("Reflect", "construct"),
          h = /^\s*(?:class|function)\b/,
          p = s(h.exec),
          f = !h.exec(c),
          g = function (e) {
            if (!r(e)) return !1;
            try {
              return u(c, d, e), !0;
            } catch (e) {
              return !1;
            }
          },
          m = function (e) {
            if (!r(e)) return !1;
            switch (o(e)) {
              case "AsyncFunction":
              case "GeneratorFunction":
              case "AsyncGeneratorFunction":
                return !1;
            }
            try {
              return f || !!p(h, l(e));
            } catch (e) {
              return !0;
            }
          };
        (m.sham = !0),
          (e.exports =
            !u ||
            n(function () {
              var e;
              return (
                g(g.call) ||
                !g(Object) ||
                !g(function () {
                  e = !0;
                }) ||
                e
              );
            })
              ? m
              : g);
      },
      1949: (e, t, i) => {
        var s = i(6183),
          n = i(6282),
          r = /#|\.prototype\./,
          o = function (e, t) {
            var i = l[a(e)];
            return i == d || (i != c && (n(t) ? s(t) : !!t));
          },
          a = (o.normalize = function (e) {
            return String(e).replace(r, ".").toLowerCase();
          }),
          l = (o.data = {}),
          c = (o.NATIVE = "N"),
          d = (o.POLYFILL = "P");
        e.exports = o;
      },
      2420: (e) => {
        e.exports = function (e) {
          return null == e;
        };
      },
      5896: (e, t, i) => {
        var s = i(6282),
          n = "object" == typeof document && document.all,
          r = void 0 === n && void 0 !== n;
        e.exports = r
          ? function (e) {
              return "object" == typeof e ? null !== e : s(e) || e === n;
            }
          : function (e) {
              return "object" == typeof e ? null !== e : s(e);
            };
      },
      8977: (e) => {
        e.exports = !1;
      },
      1527: (e, t, i) => {
        var s = i(4991),
          n = i(6282),
          r = i(1786),
          o = i(4746),
          a = Object;
        e.exports = o
          ? function (e) {
              return "symbol" == typeof e;
            }
          : function (e) {
              var t = s("Symbol");
              return n(t) && r(t.prototype, a(e));
            };
      },
      1518: (e, t, i) => {
        var s = i(1098),
          n = i(4552),
          r = i(1474),
          o = i(180),
          a = i(5859),
          l = i(1829),
          c = i(1786),
          d = i(7755),
          u = i(650),
          h = i(9193),
          p = TypeError,
          f = function (e, t) {
            (this.stopped = e), (this.result = t);
          },
          g = f.prototype;
        e.exports = function (e, t, i) {
          var m,
            v,
            b,
            y,
            w,
            x,
            S,
            E = i && i.that,
            T = !(!i || !i.AS_ENTRIES),
            C = !(!i || !i.IS_RECORD),
            O = !(!i || !i.IS_ITERATOR),
            I = !(!i || !i.INTERRUPTED),
            L = s(t, E),
            k = function (e) {
              return m && h(m, "normal", e), new f(!0, e);
            },
            M = function (e) {
              return T
                ? (r(e), I ? L(e[0], e[1], k) : L(e[0], e[1]))
                : I
                ? L(e, k)
                : L(e);
            };
          if (C) m = e.iterator;
          else if (O) m = e;
          else {
            if (!(v = u(e))) throw p(o(e) + " is not iterable");
            if (a(v)) {
              for (b = 0, y = l(e); y > b; b++)
                if ((w = M(e[b])) && c(g, w)) return w;
              return new f(!1);
            }
            m = d(e, v);
          }
          for (x = C ? e.next : m.next; !(S = n(x, m)).done; ) {
            try {
              w = M(S.value);
            } catch (e) {
              h(m, "throw", e);
            }
            if ("object" == typeof w && w && c(g, w)) return w;
          }
          return new f(!1);
        };
      },
      9193: (e, t, i) => {
        var s = i(4552),
          n = i(1474),
          r = i(9827);
        e.exports = function (e, t, i) {
          var o, a;
          n(e);
          try {
            if (!(o = r(e, "return"))) {
              if ("throw" === t) throw i;
              return i;
            }
            o = s(o, e);
          } catch (e) {
            (a = !0), (o = e);
          }
          if ("throw" === t) throw i;
          if (a) throw o;
          return n(o), i;
        };
      },
      392: (e, t, i) => {
        "use strict";
        var s = i(6524).IteratorPrototype,
          n = i(1525),
          r = i(9273),
          o = i(820),
          a = i(6126),
          l = function () {
            return this;
          };
        e.exports = function (e, t, i, c) {
          var d = t + " Iterator";
          return (
            (e.prototype = n(s, { next: r(+!c, i) })),
            o(e, d, !1, !0),
            (a[d] = l),
            e
          );
        };
      },
      335: (e, t, i) => {
        "use strict";
        var s = i(4761),
          n = i(4552),
          r = i(8977),
          o = i(4530),
          a = i(6282),
          l = i(392),
          c = i(4204),
          d = i(5900),
          u = i(820),
          h = i(1501),
          p = i(2054),
          f = i(8149),
          g = i(6126),
          m = i(6524),
          v = o.PROPER,
          b = o.CONFIGURABLE,
          y = m.IteratorPrototype,
          w = m.BUGGY_SAFARI_ITERATORS,
          x = f("iterator"),
          S = "keys",
          E = "values",
          T = "entries",
          C = function () {
            return this;
          };
        e.exports = function (e, t, i, o, f, m, O) {
          l(i, t, o);
          var I,
            L,
            k,
            M = function (e) {
              if (e === f && D) return D;
              if (!w && e in z) return z[e];
              switch (e) {
                case S:
                case E:
                case T:
                  return function () {
                    return new i(this, e);
                  };
              }
              return function () {
                return new i(this);
              };
            },
            A = t + " Iterator",
            P = !1,
            z = e.prototype,
            _ = z[x] || z["@@iterator"] || (f && z[f]),
            D = (!w && _) || M(f),
            $ = ("Array" == t && z.entries) || _;
          if (
            ($ &&
              (I = c($.call(new e()))) !== Object.prototype &&
              I.next &&
              (r || c(I) === y || (d ? d(I, y) : a(I[x]) || p(I, x, C)),
              u(I, A, !0, !0),
              r && (g[A] = C)),
            v &&
              f == E &&
              _ &&
              _.name !== E &&
              (!r && b
                ? h(z, "name", E)
                : ((P = !0),
                  (D = function () {
                    return n(_, this);
                  }))),
            f)
          )
            if (((L = { values: M(E), keys: m ? D : M(S), entries: M(T) }), O))
              for (k in L) (w || P || !(k in z)) && p(z, k, L[k]);
            else s({ target: t, proto: !0, forced: w || P }, L);
          return (
            (r && !O) || z[x] === D || p(z, x, D, { name: f }), (g[t] = D), L
          );
        };
      },
      6524: (e, t, i) => {
        "use strict";
        var s,
          n,
          r,
          o = i(6183),
          a = i(6282),
          l = i(5896),
          c = i(1525),
          d = i(4204),
          u = i(2054),
          h = i(8149),
          p = i(8977),
          f = h("iterator"),
          g = !1;
        [].keys &&
          ("next" in (r = [].keys())
            ? (n = d(d(r))) !== Object.prototype && (s = n)
            : (g = !0)),
          !l(s) ||
          o(function () {
            var e = {};
            return s[f].call(e) !== e;
          })
            ? (s = {})
            : p && (s = c(s)),
          a(s[f]) ||
            u(s, f, function () {
              return this;
            }),
          (e.exports = { IteratorPrototype: s, BUGGY_SAFARI_ITERATORS: g });
      },
      6126: (e) => {
        e.exports = {};
      },
      1829: (e, t, i) => {
        var s = i(3917);
        e.exports = function (e) {
          return s(e.length);
        };
      },
      5903: (e, t, i) => {
        var s = i(6183),
          n = i(6282),
          r = i(8281),
          o = i(723),
          a = i(4530).CONFIGURABLE,
          l = i(6901),
          c = i(1030),
          d = c.enforce,
          u = c.get,
          h = Object.defineProperty,
          p =
            o &&
            !s(function () {
              return 8 !== h(function () {}, "length", { value: 8 }).length;
            }),
          f = String(String).split("String"),
          g = (e.exports = function (e, t, i) {
            "Symbol(" === String(t).slice(0, 7) &&
              (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
              i && i.getter && (t = "get " + t),
              i && i.setter && (t = "set " + t),
              (!r(e, "name") || (a && e.name !== t)) &&
                (o
                  ? h(e, "name", { value: t, configurable: !0 })
                  : (e.name = t)),
              p &&
                i &&
                r(i, "arity") &&
                e.length !== i.arity &&
                h(e, "length", { value: i.arity });
            try {
              i && r(i, "constructor") && i.constructor
                ? o && h(e, "prototype", { writable: !1 })
                : e.prototype && (e.prototype = void 0);
            } catch (e) {}
            var s = d(e);
            return (
              r(s, "source") ||
                (s.source = f.join("string" == typeof t ? t : "")),
              e
            );
          });
        Function.prototype.toString = g(function () {
          return (n(this) && u(this).source) || l(this);
        }, "toString");
      },
      1021: (e) => {
        var t = Math.ceil,
          i = Math.floor;
        e.exports =
          Math.trunc ||
          function (e) {
            var s = +e;
            return (s > 0 ? i : t)(s);
          };
      },
      8513: (e, t, i) => {
        var s = i(8454),
          n = i(6183),
          r = i(1768),
          o = i(7655),
          a = i(9749).trim,
          l = i(8342),
          c = s.parseInt,
          d = s.Symbol,
          u = d && d.iterator,
          h = /^[+-]?0x/i,
          p = r(h.exec),
          f =
            8 !== c(l + "08") ||
            22 !== c(l + "0x16") ||
            (u &&
              !n(function () {
                c(Object(u));
              }));
        e.exports = f
          ? function (e, t) {
              var i = a(o(e));
              return c(i, t >>> 0 || (p(h, i) ? 16 : 10));
            }
          : c;
      },
      4727: (e, t, i) => {
        "use strict";
        var s = i(723),
          n = i(1768),
          r = i(4552),
          o = i(6183),
          a = i(1340),
          l = i(8074),
          c = i(4043),
          d = i(9473),
          u = i(7530),
          h = Object.assign,
          p = Object.defineProperty,
          f = n([].concat);
        e.exports =
          !h ||
          o(function () {
            if (
              s &&
              1 !==
                h(
                  { b: 1 },
                  h(
                    p({}, "a", {
                      enumerable: !0,
                      get: function () {
                        p(this, "b", { value: 3, enumerable: !1 });
                      },
                    }),
                    { b: 2 }
                  )
                ).b
            )
              return !0;
            var e = {},
              t = {},
              i = Symbol(),
              n = "abcdefghijklmnopqrst";
            return (
              (e[i] = 7),
              n.split("").forEach(function (e) {
                t[e] = e;
              }),
              7 != h({}, e)[i] || a(h({}, t)).join("") != n
            );
          })
            ? function (e, t) {
                for (
                  var i = d(e), n = arguments.length, o = 1, h = l.f, p = c.f;
                  n > o;

                )
                  for (
                    var g,
                      m = u(arguments[o++]),
                      v = h ? f(a(m), h(m)) : a(m),
                      b = v.length,
                      y = 0;
                    b > y;

                  )
                    (g = v[y++]), (s && !r(p, m, g)) || (i[g] = m[g]);
                return i;
              }
            : h;
      },
      1525: (e, t, i) => {
        var s,
          n = i(1474),
          r = i(262),
          o = i(8409),
          a = i(4377),
          l = i(7461),
          c = i(7282),
          d = i(8873),
          u = d("IE_PROTO"),
          h = function () {},
          p = function (e) {
            return "<script>" + e + "</" + "script>";
          },
          f = function (e) {
            e.write(p("")), e.close();
            var t = e.parentWindow.Object;
            return (e = null), t;
          },
          g = function () {
            try {
              s = new ActiveXObject("htmlfile");
            } catch (e) {}
            var e, t;
            g =
              "undefined" != typeof document
                ? document.domain && s
                  ? f(s)
                  : (((t = c("iframe")).style.display = "none"),
                    l.appendChild(t),
                    (t.src = String("javascript:")),
                    (e = t.contentWindow.document).open(),
                    e.write(p("document.F=Object")),
                    e.close(),
                    e.F)
                : f(s);
            for (var i = o.length; i--; ) delete g.prototype[o[i]];
            return g();
          };
        (a[u] = !0),
          (e.exports =
            Object.create ||
            function (e, t) {
              var i;
              return (
                null !== e
                  ? ((h.prototype = n(e)),
                    (i = new h()),
                    (h.prototype = null),
                    (i[u] = e))
                  : (i = g()),
                void 0 === t ? i : r.f(i, t)
              );
            });
      },
      262: (e, t, i) => {
        var s = i(723),
          n = i(8654),
          r = i(9168),
          o = i(1474),
          a = i(3206),
          l = i(1340);
        t.f =
          s && !n
            ? Object.defineProperties
            : function (e, t) {
                o(e);
                for (var i, s = a(t), n = l(t), c = n.length, d = 0; c > d; )
                  r.f(e, (i = n[d++]), s[i]);
                return e;
              };
      },
      9168: (e, t, i) => {
        var s = i(723),
          n = i(4985),
          r = i(8654),
          o = i(1474),
          a = i(2988),
          l = TypeError,
          c = Object.defineProperty,
          d = Object.getOwnPropertyDescriptor,
          u = "enumerable",
          h = "configurable",
          p = "writable";
        t.f = s
          ? r
            ? function (e, t, i) {
                if (
                  (o(e),
                  (t = a(t)),
                  o(i),
                  "function" == typeof e &&
                    "prototype" === t &&
                    "value" in i &&
                    p in i &&
                    !i.writable)
                ) {
                  var s = d(e, t);
                  s &&
                    s.writable &&
                    ((e[t] = i.value),
                    (i = {
                      configurable: h in i ? i.configurable : s.configurable,
                      enumerable: u in i ? i.enumerable : s.enumerable,
                      writable: !1,
                    }));
                }
                return c(e, t, i);
              }
            : c
          : function (e, t, i) {
              if ((o(e), (t = a(t)), o(i), n))
                try {
                  return c(e, t, i);
                } catch (e) {}
              if ("get" in i || "set" in i) throw l("Accessors not supported");
              return "value" in i && (e[t] = i.value), e;
            };
      },
      5663: (e, t, i) => {
        var s = i(723),
          n = i(4552),
          r = i(4043),
          o = i(9273),
          a = i(3206),
          l = i(2988),
          c = i(8281),
          d = i(4985),
          u = Object.getOwnPropertyDescriptor;
        t.f = s
          ? u
          : function (e, t) {
              if (((e = a(e)), (t = l(t)), d))
                try {
                  return u(e, t);
                } catch (e) {}
              if (c(e, t)) return o(!n(r.f, e, t), e[t]);
            };
      },
      6675: (e, t, i) => {
        var s = i(1510),
          n = i(3206),
          r = i(6785).f,
          o = i(4072),
          a =
            "object" == typeof window && window && Object.getOwnPropertyNames
              ? Object.getOwnPropertyNames(window)
              : [];
        e.exports.f = function (e) {
          return a && "Window" == s(e)
            ? (function (e) {
                try {
                  return r(e);
                } catch (e) {
                  return o(a);
                }
              })(e)
            : r(n(e));
        };
      },
      6785: (e, t, i) => {
        var s = i(5113),
          n = i(8409).concat("length", "prototype");
        t.f =
          Object.getOwnPropertyNames ||
          function (e) {
            return s(e, n);
          };
      },
      8074: (e, t) => {
        t.f = Object.getOwnPropertySymbols;
      },
      4204: (e, t, i) => {
        var s = i(8281),
          n = i(6282),
          r = i(9473),
          o = i(8873),
          a = i(7401),
          l = o("IE_PROTO"),
          c = Object,
          d = c.prototype;
        e.exports = a
          ? c.getPrototypeOf
          : function (e) {
              var t = r(e);
              if (s(t, l)) return t[l];
              var i = t.constructor;
              return n(i) && t instanceof i
                ? i.prototype
                : t instanceof c
                ? d
                : null;
            };
      },
      6662: (e, t, i) => {
        var s = i(6183),
          n = i(5896),
          r = i(1510),
          o = i(8774),
          a = Object.isExtensible,
          l = s(function () {
            a(1);
          });
        e.exports =
          l || o
            ? function (e) {
                return !!n(e) && (!o || "ArrayBuffer" != r(e)) && (!a || a(e));
              }
            : a;
      },
      1786: (e, t, i) => {
        var s = i(1768);
        e.exports = s({}.isPrototypeOf);
      },
      5113: (e, t, i) => {
        var s = i(1768),
          n = i(8281),
          r = i(3206),
          o = i(5675).indexOf,
          a = i(4377),
          l = s([].push);
        e.exports = function (e, t) {
          var i,
            s = r(e),
            c = 0,
            d = [];
          for (i in s) !n(a, i) && n(s, i) && l(d, i);
          for (; t.length > c; ) n(s, (i = t[c++])) && (~o(d, i) || l(d, i));
          return d;
        };
      },
      1340: (e, t, i) => {
        var s = i(5113),
          n = i(8409);
        e.exports =
          Object.keys ||
          function (e) {
            return s(e, n);
          };
      },
      4043: (e, t) => {
        "use strict";
        var i = {}.propertyIsEnumerable,
          s = Object.getOwnPropertyDescriptor,
          n = s && !i.call({ 1: 2 }, 1);
        t.f = n
          ? function (e) {
              var t = s(this, e);
              return !!t && t.enumerable;
            }
          : i;
      },
      5900: (e, t, i) => {
        var s = i(1768),
          n = i(1474),
          r = i(2004);
        e.exports =
          Object.setPrototypeOf ||
          ("__proto__" in {}
            ? (function () {
                var e,
                  t = !1,
                  i = {};
                try {
                  (e = s(
                    Object.getOwnPropertyDescriptor(
                      Object.prototype,
                      "__proto__"
                    ).set
                  ))(i, []),
                    (t = i instanceof Array);
                } catch (e) {}
                return function (i, s) {
                  return n(i), r(s), t ? e(i, s) : (i.__proto__ = s), i;
                };
              })()
            : void 0);
      },
      4117: (e, t, i) => {
        "use strict";
        var s = i(4823),
          n = i(9225);
        e.exports = s
          ? {}.toString
          : function () {
              return "[object " + n(this) + "]";
            };
      },
      6891: (e, t, i) => {
        var s = i(4552),
          n = i(6282),
          r = i(5896),
          o = TypeError;
        e.exports = function (e, t) {
          var i, a;
          if ("string" === t && n((i = e.toString)) && !r((a = s(i, e))))
            return a;
          if (n((i = e.valueOf)) && !r((a = s(i, e)))) return a;
          if ("string" !== t && n((i = e.toString)) && !r((a = s(i, e))))
            return a;
          throw o("Can't convert object to primitive value");
        };
      },
      1441: (e, t, i) => {
        var s = i(4991),
          n = i(1768),
          r = i(6785),
          o = i(8074),
          a = i(1474),
          l = n([].concat);
        e.exports =
          s("Reflect", "ownKeys") ||
          function (e) {
            var t = r.f(a(e)),
              i = o.f;
            return i ? l(t, i(e)) : t;
          };
      },
      8734: (e, t, i) => {
        var s = i(4552),
          n = i(1474),
          r = i(6282),
          o = i(1510),
          a = i(5510),
          l = TypeError;
        e.exports = function (e, t) {
          var i = e.exec;
          if (r(i)) {
            var c = s(i, e, t);
            return null !== c && n(c), c;
          }
          if ("RegExp" === o(e)) return s(a, e, t);
          throw l("RegExp#exec called on incompatible receiver");
        };
      },
      5510: (e, t, i) => {
        "use strict";
        var s,
          n,
          r = i(4552),
          o = i(1768),
          a = i(7655),
          l = i(8383),
          c = i(6558),
          d = i(1748),
          u = i(1525),
          h = i(1030).get,
          p = i(7672),
          f = i(9729),
          g = d("native-string-replace", String.prototype.replace),
          m = RegExp.prototype.exec,
          v = m,
          b = o("".charAt),
          y = o("".indexOf),
          w = o("".replace),
          x = o("".slice),
          S =
            ((n = /b*/g),
            r(m, (s = /a/), "a"),
            r(m, n, "a"),
            0 !== s.lastIndex || 0 !== n.lastIndex),
          E = c.BROKEN_CARET,
          T = void 0 !== /()??/.exec("")[1];
        (S || T || E || p || f) &&
          (v = function (e) {
            var t,
              i,
              s,
              n,
              o,
              c,
              d,
              p = this,
              f = h(p),
              C = a(e),
              O = f.raw;
            if (O)
              return (
                (O.lastIndex = p.lastIndex),
                (t = r(v, O, C)),
                (p.lastIndex = O.lastIndex),
                t
              );
            var I = f.groups,
              L = E && p.sticky,
              k = r(l, p),
              M = p.source,
              A = 0,
              P = C;
            if (
              (L &&
                ((k = w(k, "y", "")),
                -1 === y(k, "g") && (k += "g"),
                (P = x(C, p.lastIndex)),
                p.lastIndex > 0 &&
                  (!p.multiline ||
                    (p.multiline && "\n" !== b(C, p.lastIndex - 1))) &&
                  ((M = "(?: " + M + ")"), (P = " " + P), A++),
                (i = new RegExp("^(?:" + M + ")", k))),
              T && (i = new RegExp("^" + M + "$(?!\\s)", k)),
              S && (s = p.lastIndex),
              (n = r(m, L ? i : p, P)),
              L
                ? n
                  ? ((n.input = x(n.input, A)),
                    (n[0] = x(n[0], A)),
                    (n.index = p.lastIndex),
                    (p.lastIndex += n[0].length))
                  : (p.lastIndex = 0)
                : S &&
                  n &&
                  (p.lastIndex = p.global ? n.index + n[0].length : s),
              T &&
                n &&
                n.length > 1 &&
                r(g, n[0], i, function () {
                  for (o = 1; o < arguments.length - 2; o++)
                    void 0 === arguments[o] && (n[o] = void 0);
                }),
              n && I)
            )
              for (n.groups = c = u(null), o = 0; o < I.length; o++)
                c[(d = I[o])[0]] = n[d[1]];
            return n;
          }),
          (e.exports = v);
      },
      8383: (e, t, i) => {
        "use strict";
        var s = i(1474);
        e.exports = function () {
          var e = s(this),
            t = "";
          return (
            e.hasIndices && (t += "d"),
            e.global && (t += "g"),
            e.ignoreCase && (t += "i"),
            e.multiline && (t += "m"),
            e.dotAll && (t += "s"),
            e.unicode && (t += "u"),
            e.unicodeSets && (t += "v"),
            e.sticky && (t += "y"),
            t
          );
        };
      },
      6558: (e, t, i) => {
        var s = i(6183),
          n = i(8454).RegExp,
          r = s(function () {
            var e = n("a", "y");
            return (e.lastIndex = 2), null != e.exec("abcd");
          }),
          o =
            r ||
            s(function () {
              return !n("a", "y").sticky;
            }),
          a =
            r ||
            s(function () {
              var e = n("^r", "gy");
              return (e.lastIndex = 2), null != e.exec("str");
            });
        e.exports = { BROKEN_CARET: a, MISSED_STICKY: o, UNSUPPORTED_Y: r };
      },
      7672: (e, t, i) => {
        var s = i(6183),
          n = i(8454).RegExp;
        e.exports = s(function () {
          var e = n(".", "s");
          return !(e.dotAll && e.exec("\n") && "s" === e.flags);
        });
      },
      9729: (e, t, i) => {
        var s = i(6183),
          n = i(8454).RegExp;
        e.exports = s(function () {
          var e = n("(?<a>b)", "g");
          return (
            "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c")
          );
        });
      },
      7431: (e, t, i) => {
        var s = i(2420),
          n = TypeError;
        e.exports = function (e) {
          if (s(e)) throw n("Can't call method on " + e);
          return e;
        };
      },
      820: (e, t, i) => {
        var s = i(9168).f,
          n = i(8281),
          r = i(8149)("toStringTag");
        e.exports = function (e, t, i) {
          e && !i && (e = e.prototype),
            e && !n(e, r) && s(e, r, { configurable: !0, value: t });
        };
      },
      8873: (e, t, i) => {
        var s = i(1748),
          n = i(9059),
          r = s("keys");
        e.exports = function (e) {
          return r[e] || (r[e] = n(e));
        };
      },
      2047: (e, t, i) => {
        var s = i(8454),
          n = i(7194),
          r = "__core-js_shared__",
          o = s[r] || n(r, {});
        e.exports = o;
      },
      1748: (e, t, i) => {
        var s = i(8977),
          n = i(2047);
        (e.exports = function (e, t) {
          return n[e] || (n[e] = void 0 !== t ? t : {});
        })("versions", []).push({
          version: "3.25.1",
          mode: s ? "pure" : "global",
          copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
          license: "https://github.com/zloirock/core-js/blob/v3.25.1/LICENSE",
          source: "https://github.com/zloirock/core-js",
        });
      },
      7321: (e, t, i) => {
        var s = i(1768),
          n = i(8037),
          r = i(7655),
          o = i(7431),
          a = s("".charAt),
          l = s("".charCodeAt),
          c = s("".slice),
          d = function (e) {
            return function (t, i) {
              var s,
                d,
                u = r(o(t)),
                h = n(i),
                p = u.length;
              return h < 0 || h >= p
                ? e
                  ? ""
                  : void 0
                : (s = l(u, h)) < 55296 ||
                  s > 56319 ||
                  h + 1 === p ||
                  (d = l(u, h + 1)) < 56320 ||
                  d > 57343
                ? e
                  ? a(u, h)
                  : s
                : e
                ? c(u, h, h + 2)
                : d - 56320 + ((s - 55296) << 10) + 65536;
            };
          };
        e.exports = { codeAt: d(!1), charAt: d(!0) };
      },
      9749: (e, t, i) => {
        var s = i(1768),
          n = i(7431),
          r = i(7655),
          o = i(8342),
          a = s("".replace),
          l = "[" + o + "]",
          c = RegExp("^" + l + l + "*"),
          d = RegExp(l + l + "*$"),
          u = function (e) {
            return function (t) {
              var i = r(n(t));
              return 1 & e && (i = a(i, c, "")), 2 & e && (i = a(i, d, "")), i;
            };
          };
        e.exports = { start: u(1), end: u(2), trim: u(3) };
      },
      3801: (e, t, i) => {
        var s = i(4324),
          n = i(6183);
        e.exports =
          !!Object.getOwnPropertySymbols &&
          !n(function () {
            var e = Symbol();
            return (
              !String(e) ||
              !(Object(e) instanceof Symbol) ||
              (!Symbol.sham && s && s < 41)
            );
          });
      },
      9623: (e, t, i) => {
        var s = i(8037),
          n = Math.max,
          r = Math.min;
        e.exports = function (e, t) {
          var i = s(e);
          return i < 0 ? n(i + t, 0) : r(i, t);
        };
      },
      3206: (e, t, i) => {
        var s = i(7530),
          n = i(7431);
        e.exports = function (e) {
          return s(n(e));
        };
      },
      8037: (e, t, i) => {
        var s = i(1021);
        e.exports = function (e) {
          var t = +e;
          return t != t || 0 === t ? 0 : s(t);
        };
      },
      3917: (e, t, i) => {
        var s = i(8037),
          n = Math.min;
        e.exports = function (e) {
          return e > 0 ? n(s(e), 9007199254740991) : 0;
        };
      },
      9473: (e, t, i) => {
        var s = i(7431),
          n = Object;
        e.exports = function (e) {
          return n(s(e));
        };
      },
      3948: (e, t, i) => {
        var s = i(4552),
          n = i(5896),
          r = i(1527),
          o = i(9827),
          a = i(6891),
          l = i(8149),
          c = TypeError,
          d = l("toPrimitive");
        e.exports = function (e, t) {
          if (!n(e) || r(e)) return e;
          var i,
            l = o(e, d);
          if (l) {
            if (
              (void 0 === t && (t = "default"), (i = s(l, e, t)), !n(i) || r(i))
            )
              return i;
            throw c("Can't convert object to primitive value");
          }
          return void 0 === t && (t = "number"), a(e, t);
        };
      },
      2988: (e, t, i) => {
        var s = i(3948),
          n = i(1527);
        e.exports = function (e) {
          var t = s(e, "string");
          return n(t) ? t : t + "";
        };
      },
      4823: (e, t, i) => {
        var s = {};
        (s[i(8149)("toStringTag")] = "z"),
          (e.exports = "[object z]" === String(s));
      },
      7655: (e, t, i) => {
        var s = i(9225),
          n = String;
        e.exports = function (e) {
          if ("Symbol" === s(e))
            throw TypeError("Cannot convert a Symbol value to a string");
          return n(e);
        };
      },
      180: (e) => {
        var t = String;
        e.exports = function (e) {
          try {
            return t(e);
          } catch (e) {
            return "Object";
          }
        };
      },
      9059: (e, t, i) => {
        var s = i(1768),
          n = 0,
          r = Math.random(),
          o = s((1).toString);
        e.exports = function (e) {
          return "Symbol(" + (void 0 === e ? "" : e) + ")_" + o(++n + r, 36);
        };
      },
      4746: (e, t, i) => {
        var s = i(3801);
        e.exports = s && !Symbol.sham && "symbol" == typeof Symbol.iterator;
      },
      8654: (e, t, i) => {
        var s = i(723),
          n = i(6183);
        e.exports =
          s &&
          n(function () {
            return (
              42 !=
              Object.defineProperty(function () {}, "prototype", {
                value: 42,
                writable: !1,
              }).prototype
            );
          });
      },
      9780: (e, t, i) => {
        var s = i(8454),
          n = i(6282),
          r = s.WeakMap;
        e.exports = n(r) && /native code/.test(String(r));
      },
      8149: (e, t, i) => {
        var s = i(8454),
          n = i(1748),
          r = i(8281),
          o = i(9059),
          a = i(3801),
          l = i(4746),
          c = n("wks"),
          d = s.Symbol,
          u = d && d.for,
          h = l ? d : (d && d.withoutSetter) || o;
        e.exports = function (e) {
          if (!r(c, e) || (!a && "string" != typeof c[e])) {
            var t = "Symbol." + e;
            a && r(d, e) ? (c[e] = d[e]) : (c[e] = l && u ? u(t) : h(t));
          }
          return c[e];
        };
      },
      8342: (e) => {
        e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
      },
      8165: (e, t, i) => {
        "use strict";
        var s = i(4761),
          n = i(528).filter;
        s(
          { target: "Array", proto: !0, forced: !i(4820)("filter") },
          {
            filter: function (e) {
              return n(this, e, arguments.length > 1 ? arguments[1] : void 0);
            },
          }
        );
      },
      7543: (e, t, i) => {
        "use strict";
        var s = i(3206),
          n = i(9256),
          r = i(6126),
          o = i(1030),
          a = i(9168).f,
          l = i(335),
          c = i(5351),
          d = i(8977),
          u = i(723),
          h = "Array Iterator",
          p = o.set,
          f = o.getterFor(h);
        e.exports = l(
          Array,
          "Array",
          function (e, t) {
            p(this, { type: h, target: s(e), index: 0, kind: t });
          },
          function () {
            var e = f(this),
              t = e.target,
              i = e.kind,
              s = e.index++;
            return !t || s >= t.length
              ? ((e.target = void 0), c(void 0, !0))
              : c("keys" == i ? s : "values" == i ? t[s] : [s, t[s]], !1);
          },
          "values"
        );
        var g = (r.Arguments = r.Array);
        if (
          (n("keys"), n("values"), n("entries"), !d && u && "values" !== g.name)
        )
          try {
            a(g, "name", { value: "values" });
          } catch (e) {}
      },
      7985: (e, t, i) => {
        "use strict";
        var s = i(4761),
          n = i(6589).left,
          r = i(1923),
          o = i(4324),
          a = i(7594);
        s(
          {
            target: "Array",
            proto: !0,
            forced: !r("reduce") || (!a && o > 79 && o < 83),
          },
          {
            reduce: function (e) {
              var t = arguments.length;
              return n(this, e, t, t > 1 ? arguments[1] : void 0);
            },
          }
        );
      },
      6618: (e, t, i) => {
        var s = i(723),
          n = i(4530).EXISTS,
          r = i(1768),
          o = i(9168).f,
          a = Function.prototype,
          l = r(a.toString),
          c =
            /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,
          d = r(c.exec);
        s &&
          !n &&
          o(a, "name", {
            configurable: !0,
            get: function () {
              try {
                return d(c, l(this))[1];
              } catch (e) {
                return "";
              }
            },
          });
      },
      7692: (e, t, i) => {
        var s = i(4761),
          n = i(4727);
        s(
          { target: "Object", stat: !0, arity: 2, forced: Object.assign !== n },
          { assign: n }
        );
      },
      2352: (e, t, i) => {
        var s = i(4823),
          n = i(2054),
          r = i(4117);
        s || n(Object.prototype, "toString", r, { unsafe: !0 });
      },
      4249: (e, t, i) => {
        var s = i(4761),
          n = i(8513);
        s({ global: !0, forced: parseInt != n }, { parseInt: n });
      },
      9989: (e, t, i) => {
        "use strict";
        var s = i(4761),
          n = i(5510);
        s({ target: "RegExp", proto: !0, forced: /./.exec !== n }, { exec: n });
      },
      3344: (e, t, i) => {
        "use strict";
        var s = i(7321).charAt,
          n = i(7655),
          r = i(1030),
          o = i(335),
          a = i(5351),
          l = "String Iterator",
          c = r.set,
          d = r.getterFor(l);
        o(
          String,
          "String",
          function (e) {
            c(this, { type: l, string: n(e), index: 0 });
          },
          function () {
            var e,
              t = d(this),
              i = t.string,
              n = t.index;
            return n >= i.length
              ? a(void 0, !0)
              : ((e = s(i, n)), (t.index += e.length), a(e, !1));
          }
        );
      },
      8307: (e, t, i) => {
        "use strict";
        var s = i(4552),
          n = i(9696),
          r = i(1474),
          o = i(2420),
          a = i(3917),
          l = i(7655),
          c = i(7431),
          d = i(9827),
          u = i(3615),
          h = i(8734);
        n("match", function (e, t, i) {
          return [
            function (t) {
              var i = c(this),
                n = o(t) ? void 0 : d(t, e);
              return n ? s(n, t, i) : new RegExp(t)[e](l(i));
            },
            function (e) {
              var s = r(this),
                n = l(e),
                o = i(t, s, n);
              if (o.done) return o.value;
              if (!s.global) return h(s, n);
              var c = s.unicode;
              s.lastIndex = 0;
              for (var d, p = [], f = 0; null !== (d = h(s, n)); ) {
                var g = l(d[0]);
                (p[f] = g),
                  "" === g && (s.lastIndex = u(n, a(s.lastIndex), c)),
                  f++;
              }
              return 0 === f ? null : p;
            },
          ];
        });
      },
      4390: (e, t, i) => {
        "use strict";
        var s = i(6218),
          n = i(4552),
          r = i(1768),
          o = i(9696),
          a = i(6183),
          l = i(1474),
          c = i(6282),
          d = i(2420),
          u = i(8037),
          h = i(3917),
          p = i(7655),
          f = i(7431),
          g = i(3615),
          m = i(9827),
          v = i(4742),
          b = i(8734),
          y = i(8149)("replace"),
          w = Math.max,
          x = Math.min,
          S = r([].concat),
          E = r([].push),
          T = r("".indexOf),
          C = r("".slice),
          O = "$0" === "a".replace(/./, "$0"),
          I = !!/./[y] && "" === /./[y]("a", "$0");
        o(
          "replace",
          function (e, t, i) {
            var r = I ? "$" : "$0";
            return [
              function (e, i) {
                var s = f(this),
                  r = d(e) ? void 0 : m(e, y);
                return r ? n(r, e, s, i) : n(t, p(s), e, i);
              },
              function (e, n) {
                var o = l(this),
                  a = p(e);
                if (
                  "string" == typeof n &&
                  -1 === T(n, r) &&
                  -1 === T(n, "$<")
                ) {
                  var d = i(t, o, a, n);
                  if (d.done) return d.value;
                }
                var f = c(n);
                f || (n = p(n));
                var m = o.global;
                if (m) {
                  var y = o.unicode;
                  o.lastIndex = 0;
                }
                for (var O = []; ; ) {
                  var I = b(o, a);
                  if (null === I) break;
                  if ((E(O, I), !m)) break;
                  "" === p(I[0]) && (o.lastIndex = g(a, h(o.lastIndex), y));
                }
                for (var L, k = "", M = 0, A = 0; A < O.length; A++) {
                  for (
                    var P = p((I = O[A])[0]),
                      z = w(x(u(I.index), a.length), 0),
                      _ = [],
                      D = 1;
                    D < I.length;
                    D++
                  )
                    E(_, void 0 === (L = I[D]) ? L : String(L));
                  var $ = I.groups;
                  if (f) {
                    var B = S([P], _, z, a);
                    void 0 !== $ && E(B, $);
                    var N = p(s(n, void 0, B));
                  } else N = v(P, a, z, _, $, n);
                  z >= M && ((k += C(a, M, z) + N), (M = z + P.length));
                }
                return k + C(a, M);
              },
            ];
          },
          !!a(function () {
            var e = /./;
            return (
              (e.exec = function () {
                var e = [];
                return (e.groups = { a: "7" }), e;
              }),
              "7" !== "".replace(e, "$<a>")
            );
          }) ||
            !O ||
            I
        );
      },
      9703: (e, t, i) => {
        "use strict";
        var s,
          n = i(8454),
          r = i(1768),
          o = i(6367),
          a = i(6582),
          l = i(6645),
          c = i(7790),
          d = i(5896),
          u = i(6662),
          h = i(1030).enforce,
          p = i(9780),
          f = !n.ActiveXObject && "ActiveXObject" in n,
          g = function (e) {
            return function () {
              return e(this, arguments.length ? arguments[0] : void 0);
            };
          },
          m = l("WeakMap", g, c);
        if (p && f) {
          (s = c.getConstructor(g, "WeakMap", !0)), a.enable();
          var v = m.prototype,
            b = r(v.delete),
            y = r(v.has),
            w = r(v.get),
            x = r(v.set);
          o(v, {
            delete: function (e) {
              if (d(e) && !u(e)) {
                var t = h(this);
                return (
                  t.frozen || (t.frozen = new s()),
                  b(this, e) || t.frozen.delete(e)
                );
              }
              return b(this, e);
            },
            has: function (e) {
              if (d(e) && !u(e)) {
                var t = h(this);
                return (
                  t.frozen || (t.frozen = new s()),
                  y(this, e) || t.frozen.has(e)
                );
              }
              return y(this, e);
            },
            get: function (e) {
              if (d(e) && !u(e)) {
                var t = h(this);
                return (
                  t.frozen || (t.frozen = new s()),
                  y(this, e) ? w(this, e) : t.frozen.get(e)
                );
              }
              return w(this, e);
            },
            set: function (e, t) {
              if (d(e) && !u(e)) {
                var i = h(this);
                i.frozen || (i.frozen = new s()),
                  y(this, e) ? x(this, e, t) : i.frozen.set(e, t);
              } else x(this, e, t);
              return this;
            },
          });
        }
      },
      7323: (e, t, i) => {
        i(9703);
      },
      3542: (e, t, i) => {
        var s = i(8454),
          n = i(6181),
          r = i(2387),
          o = i(1269),
          a = i(1501),
          l = function (e) {
            if (e && e.forEach !== o)
              try {
                a(e, "forEach", o);
              } catch (t) {
                e.forEach = o;
              }
          };
        for (var c in n) n[c] && l(s[c] && s[c].prototype);
        l(r);
      },
      4079: (e, t, i) => {
        var s = i(8454),
          n = i(6181),
          r = i(2387),
          o = i(7543),
          a = i(1501),
          l = i(8149),
          c = l("iterator"),
          d = l("toStringTag"),
          u = o.values,
          h = function (e, t) {
            if (e) {
              if (e[c] !== u)
                try {
                  a(e, c, u);
                } catch (t) {
                  e[c] = u;
                }
              if ((e[d] || a(e, d, t), n[t]))
                for (var i in o)
                  if (e[i] !== o[i])
                    try {
                      a(e, i, o[i]);
                    } catch (t) {
                      e[i] = o[i];
                    }
            }
          };
        for (var p in n) h(s[p] && s[p].prototype, p);
        h(r, "DOMTokenList");
      },
      3002: function (e, t, i) {
        var s, n;
        window.Element &&
          !Element.prototype.closest &&
          (Element.prototype.closest = function (e) {
            var t,
              i = (this.document || this.ownerDocument).querySelectorAll(e),
              s = this;
            do {
              for (t = i.length; 0 <= --t && i.item(t) !== s; );
            } while (t < 0 && (s = s.parentElement));
            return s;
          }),
          (function () {
            function e(e, t) {
              t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
              var i = document.createEvent("CustomEvent");
              return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
            }
            "function" != typeof window.CustomEvent &&
              ((e.prototype = window.Event.prototype),
              (window.CustomEvent = e));
          })(),
          (function () {
            for (
              var e = 0, t = ["ms", "moz", "webkit", "o"], i = 0;
              i < t.length && !window.requestAnimationFrame;
              ++i
            )
              (window.requestAnimationFrame =
                window[t[i] + "RequestAnimationFrame"]),
                (window.cancelAnimationFrame =
                  window[t[i] + "CancelAnimationFrame"] ||
                  window[t[i] + "CancelRequestAnimationFrame"]);
            window.requestAnimationFrame ||
              (window.requestAnimationFrame = function (t, i) {
                var s = new Date().getTime(),
                  n = Math.max(0, 16 - (s - e)),
                  r = window.setTimeout(function () {
                    t(s + n);
                  }, n);
                return (e = s + n), r;
              }),
              window.cancelAnimationFrame ||
                (window.cancelAnimationFrame = function (e) {
                  clearTimeout(e);
                });
          })(),
          (n =
            void 0 !== i.g
              ? i.g
              : "undefined" != typeof window
              ? window
              : this),
          (s = function () {
            return (function (e) {
              "use strict";
              var t = {
                  ignore: "[data-scroll-ignore]",
                  header: null,
                  topOnEmptyHash: !0,
                  speed: 500,
                  speedAsDuration: !1,
                  durationMax: null,
                  durationMin: null,
                  clip: !0,
                  offset: 0,
                  easing: "easeInOutCubic",
                  customEasing: null,
                  updateURL: !0,
                  popstate: !0,
                  emitEvents: !0,
                },
                i = function () {
                  var e = {};
                  return (
                    Array.prototype.forEach.call(arguments, function (t) {
                      for (var i in t) {
                        if (!t.hasOwnProperty(i)) return;
                        e[i] = t[i];
                      }
                    }),
                    e
                  );
                },
                s = function (e) {
                  "#" === e.charAt(0) && (e = e.substr(1));
                  for (
                    var t,
                      i = String(e),
                      s = i.length,
                      n = -1,
                      r = "",
                      o = i.charCodeAt(0);
                    ++n < s;

                  ) {
                    if (0 === (t = i.charCodeAt(n)))
                      throw new InvalidCharacterError(
                        "Invalid character: the input contains U+0000."
                      );
                    r +=
                      (1 <= t && t <= 31) ||
                      127 == t ||
                      (0 === n && 48 <= t && t <= 57) ||
                      (1 === n && 48 <= t && t <= 57 && 45 === o)
                        ? "\\" + t.toString(16) + " "
                        : 128 <= t ||
                          45 === t ||
                          95 === t ||
                          (48 <= t && t <= 57) ||
                          (65 <= t && t <= 90) ||
                          (97 <= t && t <= 122)
                        ? i.charAt(n)
                        : "\\" + i.charAt(n);
                  }
                  return "#" + r;
                },
                n = function () {
                  return Math.max(
                    document.body.scrollHeight,
                    document.documentElement.scrollHeight,
                    document.body.offsetHeight,
                    document.documentElement.offsetHeight,
                    document.body.clientHeight,
                    document.documentElement.clientHeight
                  );
                },
                r = function (t) {
                  return t
                    ? ((i = t),
                      parseInt(e.getComputedStyle(i).height, 10) + t.offsetTop)
                    : 0;
                  var i;
                },
                o = function (t, i, s) {
                  0 === t && document.body.focus(),
                    s ||
                      (t.focus(),
                      document.activeElement !== t &&
                        (t.setAttribute("tabindex", "-1"),
                        t.focus(),
                        (t.style.outline = "none")),
                      e.scrollTo(0, i));
                },
                a = function (t, i, s, n) {
                  if (i.emitEvents && "function" == typeof e.CustomEvent) {
                    var r = new CustomEvent(t, {
                      bubbles: !0,
                      detail: { anchor: s, toggle: n },
                    });
                    document.dispatchEvent(r);
                  }
                };
              return function (l, c) {
                var d,
                  u,
                  h,
                  p,
                  f = {
                    cancelScroll: function (e) {
                      cancelAnimationFrame(p),
                        (p = null),
                        e || a("scrollCancel", d);
                    },
                    animateScroll: function (s, l, c) {
                      f.cancelScroll();
                      var u = i(d || t, c || {}),
                        g =
                          "[object Number]" ===
                          Object.prototype.toString.call(s),
                        m = g || !s.tagName ? null : s;
                      if (g || m) {
                        var v = e.pageYOffset;
                        u.header &&
                          !h &&
                          (h = document.querySelector(u.header));
                        var b,
                          y,
                          w,
                          x,
                          S,
                          E,
                          T,
                          C,
                          O = r(h),
                          I = g
                            ? s
                            : (function (t, i, s, r) {
                                var o = 0;
                                if (t.offsetParent)
                                  for (
                                    ;
                                    (o += t.offsetTop), (t = t.offsetParent);

                                  );
                                return (
                                  (o = Math.max(o - i - s, 0)),
                                  r && (o = Math.min(o, n() - e.innerHeight)),
                                  o
                                );
                              })(
                                m,
                                O,
                                parseInt(
                                  "function" == typeof u.offset
                                    ? u.offset(s, l)
                                    : u.offset,
                                  10
                                ),
                                u.clip
                              ),
                          L = I - v,
                          k = n(),
                          M = 0,
                          A =
                            ((b = L),
                            (w = (y = u).speedAsDuration
                              ? y.speed
                              : Math.abs((b / 1e3) * y.speed)),
                            y.durationMax && w > y.durationMax
                              ? y.durationMax
                              : y.durationMin && w < y.durationMin
                              ? y.durationMin
                              : parseInt(w, 10)),
                          P = function (t) {
                            var i, n, r;
                            x || (x = t),
                              (M += t - x),
                              (E =
                                v +
                                L *
                                  ((n = S =
                                    1 < (S = 0 === A ? 0 : M / A) ? 1 : S),
                                  "easeInQuad" === (i = u).easing &&
                                    (r = n * n),
                                  "easeOutQuad" === i.easing &&
                                    (r = n * (2 - n)),
                                  "easeInOutQuad" === i.easing &&
                                    (r =
                                      n < 0.5
                                        ? 2 * n * n
                                        : (4 - 2 * n) * n - 1),
                                  "easeInCubic" === i.easing && (r = n * n * n),
                                  "easeOutCubic" === i.easing &&
                                    (r = --n * n * n + 1),
                                  "easeInOutCubic" === i.easing &&
                                    (r =
                                      n < 0.5
                                        ? 4 * n * n * n
                                        : (n - 1) * (2 * n - 2) * (2 * n - 2) +
                                          1),
                                  "easeInQuart" === i.easing &&
                                    (r = n * n * n * n),
                                  "easeOutQuart" === i.easing &&
                                    (r = 1 - --n * n * n * n),
                                  "easeInOutQuart" === i.easing &&
                                    (r =
                                      n < 0.5
                                        ? 8 * n * n * n * n
                                        : 1 - 8 * --n * n * n * n),
                                  "easeInQuint" === i.easing &&
                                    (r = n * n * n * n * n),
                                  "easeOutQuint" === i.easing &&
                                    (r = 1 + --n * n * n * n * n),
                                  "easeInOutQuint" === i.easing &&
                                    (r =
                                      n < 0.5
                                        ? 16 * n * n * n * n * n
                                        : 1 + 16 * --n * n * n * n * n),
                                  i.customEasing && (r = i.customEasing(n)),
                                  r || n)),
                              e.scrollTo(0, Math.floor(E)),
                              (function (t, i) {
                                var n = e.pageYOffset;
                                if (
                                  t == i ||
                                  n == i ||
                                  (v < i && e.innerHeight + n) >= k
                                )
                                  return (
                                    f.cancelScroll(!0),
                                    o(s, i, g),
                                    a("scrollStop", u, s, l),
                                    !(p = x = null)
                                  );
                              })(E, I) ||
                                ((p = e.requestAnimationFrame(P)), (x = t));
                          };
                        0 === e.pageYOffset && e.scrollTo(0, 0),
                          (T = s),
                          (C = u),
                          g ||
                            (history.pushState &&
                              C.updateURL &&
                              history.pushState(
                                {
                                  smoothScroll: JSON.stringify(C),
                                  anchor: T.id,
                                },
                                document.title,
                                T === document.documentElement
                                  ? "#top"
                                  : "#" + T.id
                              )),
                          "matchMedia" in e &&
                          e.matchMedia("(prefers-reduced-motion)").matches
                            ? o(s, Math.floor(I), !1)
                            : (a("scrollStart", u, s, l),
                              f.cancelScroll(!0),
                              e.requestAnimationFrame(P));
                      }
                    },
                  },
                  g = function (t) {
                    if (
                      !t.defaultPrevented &&
                      !(
                        0 !== t.button ||
                        t.metaKey ||
                        t.ctrlKey ||
                        t.shiftKey
                      ) &&
                      "closest" in t.target &&
                      (u = t.target.closest(l)) &&
                      "a" === u.tagName.toLowerCase() &&
                      !t.target.closest(d.ignore) &&
                      u.hostname === e.location.hostname &&
                      u.pathname === e.location.pathname &&
                      /#/.test(u.href)
                    ) {
                      var i, n;
                      try {
                        i = s(decodeURIComponent(u.hash));
                      } catch (t) {
                        i = s(u.hash);
                      }
                      if ("#" === i) {
                        if (!d.topOnEmptyHash) return;
                        n = document.documentElement;
                      } else n = document.querySelector(i);
                      (n = n || "#top" !== i ? n : document.documentElement) &&
                        (t.preventDefault(),
                        (function (t) {
                          if (
                            history.replaceState &&
                            t.updateURL &&
                            !history.state
                          ) {
                            var i = e.location.hash;
                            (i = i || ""),
                              history.replaceState(
                                {
                                  smoothScroll: JSON.stringify(t),
                                  anchor: i || e.pageYOffset,
                                },
                                document.title,
                                i || e.location.href
                              );
                          }
                        })(d),
                        f.animateScroll(n, u));
                    }
                  },
                  m = function (e) {
                    if (
                      null !== history.state &&
                      history.state.smoothScroll &&
                      history.state.smoothScroll === JSON.stringify(d)
                    ) {
                      var t = history.state.anchor;
                      ("string" == typeof t &&
                        t &&
                        !(t = document.querySelector(
                          s(history.state.anchor)
                        ))) ||
                        f.animateScroll(t, null, { updateURL: !1 });
                    }
                  };
                return (
                  (f.destroy = function () {
                    d &&
                      (document.removeEventListener("click", g, !1),
                      e.removeEventListener("popstate", m, !1),
                      f.cancelScroll(),
                      (p = h = u = d = null));
                  }),
                  (function () {
                    if (
                      !(
                        "querySelector" in document &&
                        "addEventListener" in e &&
                        "requestAnimationFrame" in e &&
                        "closest" in e.Element.prototype
                      )
                    )
                      throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
                    f.destroy(),
                      (d = i(t, c || {})),
                      (h = d.header ? document.querySelector(d.header) : null),
                      document.addEventListener("click", g, !1),
                      d.updateURL &&
                        d.popstate &&
                        e.addEventListener("popstate", m, !1);
                  })(),
                  f
                );
              };
            })(n);
          }.apply(t, [])),
          void 0 === s || (e.exports = s);
      },
    },
    t = {};
  function i(s) {
    var n = t[s];
    if (void 0 !== n) return n.exports;
    var r = (t[s] = { exports: {} });
    return e[s].call(r.exports, r, r.exports, i), r.exports;
  }
  (i.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return i.d(t, { a: t }), t;
  }),
    (i.d = (e, t) => {
      for (var s in t)
        i.o(t, s) &&
          !i.o(e, s) &&
          Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
    }),
    (i.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      function e(e) {
        this.type = e;
      }
      (e.prototype.init = function () {
        const e = this;
        (this.оbjects = []),
          (this.daClassname = "_dynamic_adapt_"),
          (this.nodes = document.querySelectorAll("[data-da]"));
        for (let e = 0; e < this.nodes.length; e++) {
          const t = this.nodes[e],
            i = t.dataset.da.trim().split(","),
            s = {};
          (s.element = t),
            (s.parent = t.parentNode),
            (s.destination = document.querySelector(i[0].trim())),
            (s.breakpoint = i[1] ? i[1].trim() : "767"),
            (s.place = i[2] ? i[2].trim() : "last"),
            (s.index = this.indexInParent(s.parent, s.element)),
            this.оbjects.push(s);
        }
        this.arraySort(this.оbjects),
          (this.mediaQueries = Array.prototype.map.call(
            this.оbjects,
            function (e) {
              return (
                "(" +
                this.type +
                "-width: " +
                e.breakpoint +
                "px)," +
                e.breakpoint
              );
            },
            this
          )),
          (this.mediaQueries = Array.prototype.filter.call(
            this.mediaQueries,
            function (e, t, i) {
              return Array.prototype.indexOf.call(i, e) === t;
            }
          ));
        for (let t = 0; t < this.mediaQueries.length; t++) {
          const i = this.mediaQueries[t],
            s = String.prototype.split.call(i, ","),
            n = window.matchMedia(s[0]),
            r = s[1],
            o = Array.prototype.filter.call(this.оbjects, function (e) {
              return e.breakpoint === r;
            });
          n.addListener(function () {
            e.mediaHandler(n, o);
          }),
            this.mediaHandler(n, o);
        }
      }),
        (e.prototype.mediaHandler = function (e, t) {
          if (e.matches)
            for (let e = 0; e < t.length; e++) {
              const i = t[e];
              (i.index = this.indexInParent(i.parent, i.element)),
                this.moveTo(i.place, i.element, i.destination);
            }
          else
            for (let e = t.length - 1; e >= 0; e--) {
              const i = t[e];
              i.element.classList.contains(this.daClassname) &&
                this.moveBack(i.parent, i.element, i.index);
            }
        }),
        (e.prototype.moveTo = function (e, t, i) {
          t.classList.add(this.daClassname),
            "last" === e || e >= i.children.length
              ? i.insertAdjacentElement("beforeend", t)
              : "first" !== e
              ? i.children[e].insertAdjacentElement("beforebegin", t)
              : i.insertAdjacentElement("afterbegin", t);
        }),
        (e.prototype.moveBack = function (e, t, i) {
          t.classList.remove(this.daClassname),
            void 0 !== e.children[i]
              ? e.children[i].insertAdjacentElement("beforebegin", t)
              : e.insertAdjacentElement("beforeend", t);
        }),
        (e.prototype.indexInParent = function (e, t) {
          const i = Array.prototype.slice.call(e.children);
          return Array.prototype.indexOf.call(i, t);
        }),
        (e.prototype.arraySort = function (e) {
          "min" === this.type
            ? Array.prototype.sort.call(e, function (e, t) {
                return e.breakpoint === t.breakpoint
                  ? e.place === t.place
                    ? 0
                    : "first" === e.place || "last" === t.place
                    ? -1
                    : "last" === e.place || "first" === t.place
                    ? 1
                    : e.place - t.place
                  : e.breakpoint - t.breakpoint;
              })
            : Array.prototype.sort.call(e, function (e, t) {
                return e.breakpoint === t.breakpoint
                  ? e.place === t.place
                    ? 0
                    : "first" === e.place || "last" === t.place
                    ? 1
                    : "last" === e.place || "first" === t.place
                    ? -1
                    : t.place - e.place
                  : t.breakpoint - e.breakpoint;
              });
        });
      new e("max").init();
      let t = {
        Android: function () {
          return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
          return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
          return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
          return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
          return (
            t.Android() || t.BlackBerry() || t.iOS() || t.Opera() || t.Windows()
          );
        },
      };
      let s = !0,
        n = (e = 500) => {
          let t = document.querySelector("body");
          if (s) {
            let i = document.querySelectorAll("[data-lp]");
            setTimeout(() => {
              for (let e = 0; e < i.length; e++) {
                i[e].style.paddingRight = "0px";
              }
              (t.style.paddingRight = "0px"),
                document.documentElement.classList.remove("lock");
            }, e),
              (s = !1),
              setTimeout(function () {
                s = !0;
              }, e);
          }
        },
        r = (e = 500) => {
          let t = document.querySelector("body");
          if (s) {
            let i = document.querySelectorAll("[data-lp]");
            for (let e = 0; e < i.length; e++) {
              i[e].style.paddingRight =
                window.innerWidth -
                document.querySelector(".wrapper").offsetWidth +
                "px";
            }
            (t.style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px"),
              document.documentElement.classList.add("lock"),
              (s = !1),
              setTimeout(function () {
                s = !0;
              }, e);
          }
        };
      function o(e) {
        setTimeout(() => {
          window.FLS && console.log(e);
        }, 0);
      }
      var a = i(3002);
      let l = (e, t = !1, i = 500, s = 0) => {
        const r = document.querySelector(e);
        if (r) {
          let l = "",
            c = 0;
          t &&
            ((l = "header.header"),
            (c = document.querySelector(l).offsetHeight));
          let d = {
            speedAsDuration: !0,
            speed: i,
            header: l,
            offset: s,
            easing: "easeOutQuad",
          };
          if (
            (document.documentElement.classList.contains("menu-open") &&
              (n(), document.documentElement.classList.remove("menu-open")),
            void 0 !== a)
          )
            new a().animateScroll(r, "", d);
          else {
            let e = r.getBoundingClientRect().top + scrollY;
            window.scrollTo({ top: c ? e - c : e, behavior: "smooth" });
          }
          o(`[gotoBlock]: Юхуу...едем к ${e}`);
        } else o(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
      };
      function c(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function d(e = {}, t = {}) {
        Object.keys(t).forEach((i) => {
          void 0 === e[i]
            ? (e[i] = t[i])
            : c(t[i]) &&
              c(e[i]) &&
              Object.keys(t[i]).length > 0 &&
              d(e[i], t[i]);
        });
      }
      const u = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: "" },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function h() {
        const e = "undefined" != typeof document ? document : {};
        return d(e, u), e;
      }
      const p = {
        document: u,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => "" }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: (e) =>
          "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e);
        },
      };
      function f() {
        const e = "undefined" != typeof window ? window : {};
        return d(e, p), e;
      }
      class g extends Array {
        constructor(e) {
          "number" == typeof e
            ? super(e)
            : (super(...(e || [])),
              (function (e) {
                const t = e.__proto__;
                Object.defineProperty(e, "__proto__", {
                  get: () => t,
                  set(e) {
                    t.__proto__ = e;
                  },
                });
              })(this));
        }
      }
      function m(e = []) {
        const t = [];
        return (
          e.forEach((e) => {
            Array.isArray(e) ? t.push(...m(e)) : t.push(e);
          }),
          t
        );
      }
      function v(e, t) {
        return Array.prototype.filter.call(e, t);
      }
      function b(e, t) {
        const i = f(),
          s = h();
        let n = [];
        if (!t && e instanceof g) return e;
        if (!e) return new g(n);
        if ("string" == typeof e) {
          const i = e.trim();
          if (i.indexOf("<") >= 0 && i.indexOf(">") >= 0) {
            let e = "div";
            0 === i.indexOf("<li") && (e = "ul"),
              0 === i.indexOf("<tr") && (e = "tbody"),
              (0 !== i.indexOf("<td") && 0 !== i.indexOf("<th")) || (e = "tr"),
              0 === i.indexOf("<tbody") && (e = "table"),
              0 === i.indexOf("<option") && (e = "select");
            const t = s.createElement(e);
            t.innerHTML = i;
            for (let e = 0; e < t.childNodes.length; e += 1)
              n.push(t.childNodes[e]);
          } else
            n = (function (e, t) {
              if ("string" != typeof e) return [e];
              const i = [],
                s = t.querySelectorAll(e);
              for (let e = 0; e < s.length; e += 1) i.push(s[e]);
              return i;
            })(e.trim(), t || s);
        } else if (e.nodeType || e === i || e === s) n.push(e);
        else if (Array.isArray(e)) {
          if (e instanceof g) return e;
          n = e;
        }
        return new g(
          (function (e) {
            const t = [];
            for (let i = 0; i < e.length; i += 1)
              -1 === t.indexOf(e[i]) && t.push(e[i]);
            return t;
          })(n)
        );
      }
      b.fn = g.prototype;
      const y = "resize scroll".split(" ");
      function w(e) {
        return function (...t) {
          if (void 0 === t[0]) {
            for (let t = 0; t < this.length; t += 1)
              y.indexOf(e) < 0 &&
                (e in this[t] ? this[t][e]() : b(this[t]).trigger(e));
            return this;
          }
          return this.on(e, ...t);
        };
      }
      w("click"),
        w("blur"),
        w("focus"),
        w("focusin"),
        w("focusout"),
        w("keyup"),
        w("keydown"),
        w("keypress"),
        w("submit"),
        w("change"),
        w("mousedown"),
        w("mousemove"),
        w("mouseup"),
        w("mouseenter"),
        w("mouseleave"),
        w("mouseout"),
        w("mouseover"),
        w("touchstart"),
        w("touchend"),
        w("touchmove"),
        w("resize"),
        w("scroll");
      const x = {
        addClass: function (...e) {
          const t = m(e.map((e) => e.split(" ")));
          return (
            this.forEach((e) => {
              e.classList.add(...t);
            }),
            this
          );
        },
        removeClass: function (...e) {
          const t = m(e.map((e) => e.split(" ")));
          return (
            this.forEach((e) => {
              e.classList.remove(...t);
            }),
            this
          );
        },
        hasClass: function (...e) {
          const t = m(e.map((e) => e.split(" ")));
          return (
            v(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
              .length > 0
          );
        },
        toggleClass: function (...e) {
          const t = m(e.map((e) => e.split(" ")));
          this.forEach((e) => {
            t.forEach((t) => {
              e.classList.toggle(t);
            });
          });
        },
        attr: function (e, t) {
          if (1 === arguments.length && "string" == typeof e)
            return this[0] ? this[0].getAttribute(e) : void 0;
          for (let i = 0; i < this.length; i += 1)
            if (2 === arguments.length) this[i].setAttribute(e, t);
            else
              for (const t in e)
                (this[i][t] = e[t]), this[i].setAttribute(t, e[t]);
          return this;
        },
        removeAttr: function (e) {
          for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
          return this;
        },
        transform: function (e) {
          for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
          return this;
        },
        transition: function (e) {
          for (let t = 0; t < this.length; t += 1)
            this[t].style.transitionDuration =
              "string" != typeof e ? `${e}ms` : e;
          return this;
        },
        on: function (...e) {
          let [t, i, s, n] = e;
          function r(e) {
            const t = e.target;
            if (!t) return;
            const n = e.target.dom7EventData || [];
            if ((n.indexOf(e) < 0 && n.unshift(e), b(t).is(i))) s.apply(t, n);
            else {
              const e = b(t).parents();
              for (let t = 0; t < e.length; t += 1)
                b(e[t]).is(i) && s.apply(e[t], n);
            }
          }
          function o(e) {
            const t = (e && e.target && e.target.dom7EventData) || [];
            t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t);
          }
          "function" == typeof e[1] && (([t, s, n] = e), (i = void 0)),
            n || (n = !1);
          const a = t.split(" ");
          let l;
          for (let e = 0; e < this.length; e += 1) {
            const t = this[e];
            if (i)
              for (l = 0; l < a.length; l += 1) {
                const e = a[l];
                t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                  t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                  t.dom7LiveListeners[e].push({
                    listener: s,
                    proxyListener: r,
                  }),
                  t.addEventListener(e, r, n);
              }
            else
              for (l = 0; l < a.length; l += 1) {
                const e = a[l];
                t.dom7Listeners || (t.dom7Listeners = {}),
                  t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                  t.dom7Listeners[e].push({ listener: s, proxyListener: o }),
                  t.addEventListener(e, o, n);
              }
          }
          return this;
        },
        off: function (...e) {
          let [t, i, s, n] = e;
          "function" == typeof e[1] && (([t, s, n] = e), (i = void 0)),
            n || (n = !1);
          const r = t.split(" ");
          for (let e = 0; e < r.length; e += 1) {
            const t = r[e];
            for (let e = 0; e < this.length; e += 1) {
              const r = this[e];
              let o;
              if (
                (!i && r.dom7Listeners
                  ? (o = r.dom7Listeners[t])
                  : i && r.dom7LiveListeners && (o = r.dom7LiveListeners[t]),
                o && o.length)
              )
                for (let e = o.length - 1; e >= 0; e -= 1) {
                  const i = o[e];
                  (s && i.listener === s) ||
                  (s &&
                    i.listener &&
                    i.listener.dom7proxy &&
                    i.listener.dom7proxy === s)
                    ? (r.removeEventListener(t, i.proxyListener, n),
                      o.splice(e, 1))
                    : s ||
                      (r.removeEventListener(t, i.proxyListener, n),
                      o.splice(e, 1));
                }
            }
          }
          return this;
        },
        trigger: function (...e) {
          const t = f(),
            i = e[0].split(" "),
            s = e[1];
          for (let n = 0; n < i.length; n += 1) {
            const r = i[n];
            for (let i = 0; i < this.length; i += 1) {
              const n = this[i];
              if (t.CustomEvent) {
                const i = new t.CustomEvent(r, {
                  detail: s,
                  bubbles: !0,
                  cancelable: !0,
                });
                (n.dom7EventData = e.filter((e, t) => t > 0)),
                  n.dispatchEvent(i),
                  (n.dom7EventData = []),
                  delete n.dom7EventData;
              }
            }
          }
          return this;
        },
        transitionEnd: function (e) {
          const t = this;
          return (
            e &&
              t.on("transitionend", function i(s) {
                s.target === this &&
                  (e.call(this, s), t.off("transitionend", i));
              }),
            this
          );
        },
        outerWidth: function (e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return (
                this[0].offsetWidth +
                parseFloat(e.getPropertyValue("margin-right")) +
                parseFloat(e.getPropertyValue("margin-left"))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        },
        outerHeight: function (e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return (
                this[0].offsetHeight +
                parseFloat(e.getPropertyValue("margin-top")) +
                parseFloat(e.getPropertyValue("margin-bottom"))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        },
        styles: function () {
          const e = f();
          return this[0] ? e.getComputedStyle(this[0], null) : {};
        },
        offset: function () {
          if (this.length > 0) {
            const e = f(),
              t = h(),
              i = this[0],
              s = i.getBoundingClientRect(),
              n = t.body,
              r = i.clientTop || n.clientTop || 0,
              o = i.clientLeft || n.clientLeft || 0,
              a = i === e ? e.scrollY : i.scrollTop,
              l = i === e ? e.scrollX : i.scrollLeft;
            return { top: s.top + a - r, left: s.left + l - o };
          }
          return null;
        },
        css: function (e, t) {
          const i = f();
          let s;
          if (1 === arguments.length) {
            if ("string" != typeof e) {
              for (s = 0; s < this.length; s += 1)
                for (const t in e) this[s].style[t] = e[t];
              return this;
            }
            if (this[0])
              return i.getComputedStyle(this[0], null).getPropertyValue(e);
          }
          if (2 === arguments.length && "string" == typeof e) {
            for (s = 0; s < this.length; s += 1) this[s].style[e] = t;
            return this;
          }
          return this;
        },
        each: function (e) {
          return e
            ? (this.forEach((t, i) => {
                e.apply(t, [t, i]);
              }),
              this)
            : this;
        },
        html: function (e) {
          if (void 0 === e) return this[0] ? this[0].innerHTML : null;
          for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
          return this;
        },
        text: function (e) {
          if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
          for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
          return this;
        },
        is: function (e) {
          const t = f(),
            i = h(),
            s = this[0];
          let n, r;
          if (!s || void 0 === e) return !1;
          if ("string" == typeof e) {
            if (s.matches) return s.matches(e);
            if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
            if (s.msMatchesSelector) return s.msMatchesSelector(e);
            for (n = b(e), r = 0; r < n.length; r += 1)
              if (n[r] === s) return !0;
            return !1;
          }
          if (e === i) return s === i;
          if (e === t) return s === t;
          if (e.nodeType || e instanceof g) {
            for (n = e.nodeType ? [e] : e, r = 0; r < n.length; r += 1)
              if (n[r] === s) return !0;
            return !1;
          }
          return !1;
        },
        index: function () {
          let e,
            t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling); )
              1 === t.nodeType && (e += 1);
            return e;
          }
        },
        eq: function (e) {
          if (void 0 === e) return this;
          const t = this.length;
          if (e > t - 1) return b([]);
          if (e < 0) {
            const i = t + e;
            return b(i < 0 ? [] : [this[i]]);
          }
          return b([this[e]]);
        },
        append: function (...e) {
          let t;
          const i = h();
          for (let s = 0; s < e.length; s += 1) {
            t = e[s];
            for (let e = 0; e < this.length; e += 1)
              if ("string" == typeof t) {
                const s = i.createElement("div");
                for (s.innerHTML = t; s.firstChild; )
                  this[e].appendChild(s.firstChild);
              } else if (t instanceof g)
                for (let i = 0; i < t.length; i += 1) this[e].appendChild(t[i]);
              else this[e].appendChild(t);
          }
          return this;
        },
        prepend: function (e) {
          const t = h();
          let i, s;
          for (i = 0; i < this.length; i += 1)
            if ("string" == typeof e) {
              const n = t.createElement("div");
              for (n.innerHTML = e, s = n.childNodes.length - 1; s >= 0; s -= 1)
                this[i].insertBefore(n.childNodes[s], this[i].childNodes[0]);
            } else if (e instanceof g)
              for (s = 0; s < e.length; s += 1)
                this[i].insertBefore(e[s], this[i].childNodes[0]);
            else this[i].insertBefore(e, this[i].childNodes[0]);
          return this;
        },
        next: function (e) {
          return this.length > 0
            ? e
              ? this[0].nextElementSibling &&
                b(this[0].nextElementSibling).is(e)
                ? b([this[0].nextElementSibling])
                : b([])
              : this[0].nextElementSibling
              ? b([this[0].nextElementSibling])
              : b([])
            : b([]);
        },
        nextAll: function (e) {
          const t = [];
          let i = this[0];
          if (!i) return b([]);
          for (; i.nextElementSibling; ) {
            const s = i.nextElementSibling;
            e ? b(s).is(e) && t.push(s) : t.push(s), (i = s);
          }
          return b(t);
        },
        prev: function (e) {
          if (this.length > 0) {
            const t = this[0];
            return e
              ? t.previousElementSibling && b(t.previousElementSibling).is(e)
                ? b([t.previousElementSibling])
                : b([])
              : t.previousElementSibling
              ? b([t.previousElementSibling])
              : b([]);
          }
          return b([]);
        },
        prevAll: function (e) {
          const t = [];
          let i = this[0];
          if (!i) return b([]);
          for (; i.previousElementSibling; ) {
            const s = i.previousElementSibling;
            e ? b(s).is(e) && t.push(s) : t.push(s), (i = s);
          }
          return b(t);
        },
        parent: function (e) {
          const t = [];
          for (let i = 0; i < this.length; i += 1)
            null !== this[i].parentNode &&
              (e
                ? b(this[i].parentNode).is(e) && t.push(this[i].parentNode)
                : t.push(this[i].parentNode));
          return b(t);
        },
        parents: function (e) {
          const t = [];
          for (let i = 0; i < this.length; i += 1) {
            let s = this[i].parentNode;
            for (; s; )
              e ? b(s).is(e) && t.push(s) : t.push(s), (s = s.parentNode);
          }
          return b(t);
        },
        closest: function (e) {
          let t = this;
          return void 0 === e
            ? b([])
            : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function (e) {
          const t = [];
          for (let i = 0; i < this.length; i += 1) {
            const s = this[i].querySelectorAll(e);
            for (let e = 0; e < s.length; e += 1) t.push(s[e]);
          }
          return b(t);
        },
        children: function (e) {
          const t = [];
          for (let i = 0; i < this.length; i += 1) {
            const s = this[i].children;
            for (let i = 0; i < s.length; i += 1)
              (e && !b(s[i]).is(e)) || t.push(s[i]);
          }
          return b(t);
        },
        filter: function (e) {
          return b(v(this, e));
        },
        remove: function () {
          for (let e = 0; e < this.length; e += 1)
            this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this;
        },
      };
      Object.keys(x).forEach((e) => {
        Object.defineProperty(b.fn, e, { value: x[e], writable: !0 });
      });
      const S = b;
      function E(e, t = 0) {
        return setTimeout(e, t);
      }
      function T() {
        return Date.now();
      }
      function C(e, t = "x") {
        const i = f();
        let s, n, r;
        const o = (function (e) {
          const t = f();
          let i;
          return (
            t.getComputedStyle && (i = t.getComputedStyle(e, null)),
            !i && e.currentStyle && (i = e.currentStyle),
            i || (i = e.style),
            i
          );
        })(e);
        return (
          i.WebKitCSSMatrix
            ? ((n = o.transform || o.webkitTransform),
              n.split(",").length > 6 &&
                (n = n
                  .split(", ")
                  .map((e) => e.replace(",", "."))
                  .join(", ")),
              (r = new i.WebKitCSSMatrix("none" === n ? "" : n)))
            : ((r =
                o.MozTransform ||
                o.OTransform ||
                o.MsTransform ||
                o.msTransform ||
                o.transform ||
                o
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,")),
              (s = r.toString().split(","))),
          "x" === t &&
            (n = i.WebKitCSSMatrix
              ? r.m41
              : 16 === s.length
              ? parseFloat(s[12])
              : parseFloat(s[4])),
          "y" === t &&
            (n = i.WebKitCSSMatrix
              ? r.m42
              : 16 === s.length
              ? parseFloat(s[13])
              : parseFloat(s[5])),
          n || 0
        );
      }
      function O(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function I(...e) {
        const t = Object(e[0]),
          i = ["__proto__", "constructor", "prototype"];
        for (let n = 1; n < e.length; n += 1) {
          const r = e[n];
          if (
            null != r &&
            ((s = r),
            !("undefined" != typeof window && void 0 !== window.HTMLElement
              ? s instanceof HTMLElement
              : s && (1 === s.nodeType || 11 === s.nodeType)))
          ) {
            const e = Object.keys(Object(r)).filter((e) => i.indexOf(e) < 0);
            for (let i = 0, s = e.length; i < s; i += 1) {
              const s = e[i],
                n = Object.getOwnPropertyDescriptor(r, s);
              void 0 !== n &&
                n.enumerable &&
                (O(t[s]) && O(r[s])
                  ? r[s].__swiper__
                    ? (t[s] = r[s])
                    : I(t[s], r[s])
                  : !O(t[s]) && O(r[s])
                  ? ((t[s] = {}),
                    r[s].__swiper__ ? (t[s] = r[s]) : I(t[s], r[s]))
                  : (t[s] = r[s]));
            }
          }
        }
        var s;
        return t;
      }
      function L(e, t, i) {
        e.style.setProperty(t, i);
      }
      function k({ swiper: e, targetPosition: t, side: i }) {
        const s = f(),
          n = -e.translate;
        let r,
          o = null;
        const a = e.params.speed;
        (e.wrapperEl.style.scrollSnapType = "none"),
          s.cancelAnimationFrame(e.cssModeFrameID);
        const l = t > n ? "next" : "prev",
          c = (e, t) => ("next" === l && e >= t) || ("prev" === l && e <= t),
          d = () => {
            (r = new Date().getTime()), null === o && (o = r);
            const l = Math.max(Math.min((r - o) / a, 1), 0),
              u = 0.5 - Math.cos(l * Math.PI) / 2;
            let h = n + u * (t - n);
            if ((c(h, t) && (h = t), e.wrapperEl.scrollTo({ [i]: h }), c(h, t)))
              return (
                (e.wrapperEl.style.overflow = "hidden"),
                (e.wrapperEl.style.scrollSnapType = ""),
                setTimeout(() => {
                  (e.wrapperEl.style.overflow = ""),
                    e.wrapperEl.scrollTo({ [i]: h });
                }),
                void s.cancelAnimationFrame(e.cssModeFrameID)
              );
            e.cssModeFrameID = s.requestAnimationFrame(d);
          };
        d();
      }
      let M, A, P;
      function z() {
        return (
          M ||
            (M = (function () {
              const e = f(),
                t = h();
              return {
                smoothScroll:
                  t.documentElement &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
                passiveListener: (function () {
                  let t = !1;
                  try {
                    const i = Object.defineProperty({}, "passive", {
                      get() {
                        t = !0;
                      },
                    });
                    e.addEventListener("testPassiveListener", null, i);
                  } catch (e) {}
                  return t;
                })(),
                gestures: "ongesturestart" in e,
              };
            })()),
          M
        );
      }
      function _(e = {}) {
        return (
          A ||
            (A = (function ({ userAgent: e } = {}) {
              const t = z(),
                i = f(),
                s = i.navigator.platform,
                n = e || i.navigator.userAgent,
                r = { ios: !1, android: !1 },
                o = i.screen.width,
                a = i.screen.height,
                l = n.match(/(Android);?[\s\/]+([\d.]+)?/);
              let c = n.match(/(iPad).*OS\s([\d_]+)/);
              const d = n.match(/(iPod)(.*OS\s([\d_]+))?/),
                u = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                h = "Win32" === s;
              let p = "MacIntel" === s;
              return (
                !c &&
                  p &&
                  t.touch &&
                  [
                    "1024x1366",
                    "1366x1024",
                    "834x1194",
                    "1194x834",
                    "834x1112",
                    "1112x834",
                    "768x1024",
                    "1024x768",
                    "820x1180",
                    "1180x820",
                    "810x1080",
                    "1080x810",
                  ].indexOf(`${o}x${a}`) >= 0 &&
                  ((c = n.match(/(Version)\/([\d.]+)/)),
                  c || (c = [0, 1, "13_0_0"]),
                  (p = !1)),
                l && !h && ((r.os = "android"), (r.android = !0)),
                (c || u || d) && ((r.os = "ios"), (r.ios = !0)),
                r
              );
            })(e)),
          A
        );
      }
      function D() {
        return (
          P ||
            (P = (function () {
              const e = f();
              return {
                isSafari: (function () {
                  const t = e.navigator.userAgent.toLowerCase();
                  return (
                    t.indexOf("safari") >= 0 &&
                    t.indexOf("chrome") < 0 &&
                    t.indexOf("android") < 0
                  );
                })(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                  e.navigator.userAgent
                ),
              };
            })()),
          P
        );
      }
      const $ = {
        on(e, t, i) {
          const s = this;
          if (!s.eventsListeners || s.destroyed) return s;
          if ("function" != typeof t) return s;
          const n = i ? "unshift" : "push";
          return (
            e.split(" ").forEach((e) => {
              s.eventsListeners[e] || (s.eventsListeners[e] = []),
                s.eventsListeners[e][n](t);
            }),
            s
          );
        },
        once(e, t, i) {
          const s = this;
          if (!s.eventsListeners || s.destroyed) return s;
          if ("function" != typeof t) return s;
          function n(...i) {
            s.off(e, n),
              n.__emitterProxy && delete n.__emitterProxy,
              t.apply(s, i);
          }
          return (n.__emitterProxy = t), s.on(e, n, i);
        },
        onAny(e, t) {
          const i = this;
          if (!i.eventsListeners || i.destroyed) return i;
          if ("function" != typeof e) return i;
          const s = t ? "unshift" : "push";
          return (
            i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[s](e), i
          );
        },
        offAny(e) {
          const t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsAnyListeners) return t;
          const i = t.eventsAnyListeners.indexOf(e);
          return i >= 0 && t.eventsAnyListeners.splice(i, 1), t;
        },
        off(e, t) {
          const i = this;
          return !i.eventsListeners || i.destroyed
            ? i
            : i.eventsListeners
            ? (e.split(" ").forEach((e) => {
                void 0 === t
                  ? (i.eventsListeners[e] = [])
                  : i.eventsListeners[e] &&
                    i.eventsListeners[e].forEach((s, n) => {
                      (s === t ||
                        (s.__emitterProxy && s.__emitterProxy === t)) &&
                        i.eventsListeners[e].splice(n, 1);
                    });
              }),
              i)
            : i;
        },
        emit(...e) {
          const t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsListeners) return t;
          let i, s, n;
          "string" == typeof e[0] || Array.isArray(e[0])
            ? ((i = e[0]), (s = e.slice(1, e.length)), (n = t))
            : ((i = e[0].events), (s = e[0].data), (n = e[0].context || t)),
            s.unshift(n);
          return (
            (Array.isArray(i) ? i : i.split(" ")).forEach((e) => {
              t.eventsAnyListeners &&
                t.eventsAnyListeners.length &&
                t.eventsAnyListeners.forEach((t) => {
                  t.apply(n, [e, ...s]);
                }),
                t.eventsListeners &&
                  t.eventsListeners[e] &&
                  t.eventsListeners[e].forEach((e) => {
                    e.apply(n, s);
                  });
            }),
            t
          );
        },
      };
      const B = {
        updateSize: function () {
          const e = this;
          let t, i;
          const s = e.$el;
          (t =
            void 0 !== e.params.width && null !== e.params.width
              ? e.params.width
              : s[0].clientWidth),
            (i =
              void 0 !== e.params.height && null !== e.params.height
                ? e.params.height
                : s[0].clientHeight),
            (0 === t && e.isHorizontal()) ||
              (0 === i && e.isVertical()) ||
              ((t =
                t -
                parseInt(s.css("padding-left") || 0, 10) -
                parseInt(s.css("padding-right") || 0, 10)),
              (i =
                i -
                parseInt(s.css("padding-top") || 0, 10) -
                parseInt(s.css("padding-bottom") || 0, 10)),
              Number.isNaN(t) && (t = 0),
              Number.isNaN(i) && (i = 0),
              Object.assign(e, {
                width: t,
                height: i,
                size: e.isHorizontal() ? t : i,
              }));
        },
        updateSlides: function () {
          const e = this;
          function t(t) {
            return e.isHorizontal()
              ? t
              : {
                  width: "height",
                  "margin-top": "margin-left",
                  "margin-bottom ": "margin-right",
                  "margin-left": "margin-top",
                  "margin-right": "margin-bottom",
                  "padding-left": "padding-top",
                  "padding-right": "padding-bottom",
                  marginRight: "marginBottom",
                }[t];
          }
          function i(e, i) {
            return parseFloat(e.getPropertyValue(t(i)) || 0);
          }
          const s = e.params,
            { $wrapperEl: n, size: r, rtlTranslate: o, wrongRTL: a } = e,
            l = e.virtual && s.virtual.enabled,
            c = l ? e.virtual.slides.length : e.slides.length,
            d = n.children(`.${e.params.slideClass}`),
            u = l ? e.virtual.slides.length : d.length;
          let h = [];
          const p = [],
            f = [];
          let g = s.slidesOffsetBefore;
          "function" == typeof g && (g = s.slidesOffsetBefore.call(e));
          let m = s.slidesOffsetAfter;
          "function" == typeof m && (m = s.slidesOffsetAfter.call(e));
          const v = e.snapGrid.length,
            b = e.slidesGrid.length;
          let y = s.spaceBetween,
            w = -g,
            x = 0,
            S = 0;
          if (void 0 === r) return;
          "string" == typeof y &&
            y.indexOf("%") >= 0 &&
            (y = (parseFloat(y.replace("%", "")) / 100) * r),
            (e.virtualSize = -y),
            o
              ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
              : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
            s.centeredSlides &&
              s.cssMode &&
              (L(e.wrapperEl, "--swiper-centered-offset-before", ""),
              L(e.wrapperEl, "--swiper-centered-offset-after", ""));
          const E = s.grid && s.grid.rows > 1 && e.grid;
          let T;
          E && e.grid.initSlides(u);
          const C =
            "auto" === s.slidesPerView &&
            s.breakpoints &&
            Object.keys(s.breakpoints).filter(
              (e) => void 0 !== s.breakpoints[e].slidesPerView
            ).length > 0;
          for (let n = 0; n < u; n += 1) {
            T = 0;
            const o = d.eq(n);
            if (
              (E && e.grid.updateSlide(n, o, u, t), "none" !== o.css("display"))
            ) {
              if ("auto" === s.slidesPerView) {
                C && (d[n].style[t("width")] = "");
                const r = getComputedStyle(o[0]),
                  a = o[0].style.transform,
                  l = o[0].style.webkitTransform;
                if (
                  (a && (o[0].style.transform = "none"),
                  l && (o[0].style.webkitTransform = "none"),
                  s.roundLengths)
                )
                  T = e.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0);
                else {
                  const e = i(r, "width"),
                    t = i(r, "padding-left"),
                    s = i(r, "padding-right"),
                    n = i(r, "margin-left"),
                    a = i(r, "margin-right"),
                    l = r.getPropertyValue("box-sizing");
                  if (l && "border-box" === l) T = e + n + a;
                  else {
                    const { clientWidth: i, offsetWidth: r } = o[0];
                    T = e + t + s + n + a + (r - i);
                  }
                }
                a && (o[0].style.transform = a),
                  l && (o[0].style.webkitTransform = l),
                  s.roundLengths && (T = Math.floor(T));
              } else
                (T = (r - (s.slidesPerView - 1) * y) / s.slidesPerView),
                  s.roundLengths && (T = Math.floor(T)),
                  d[n] && (d[n].style[t("width")] = `${T}px`);
              d[n] && (d[n].swiperSlideSize = T),
                f.push(T),
                s.centeredSlides
                  ? ((w = w + T / 2 + x / 2 + y),
                    0 === x && 0 !== n && (w = w - r / 2 - y),
                    0 === n && (w = w - r / 2 - y),
                    Math.abs(w) < 0.001 && (w = 0),
                    s.roundLengths && (w = Math.floor(w)),
                    S % s.slidesPerGroup == 0 && h.push(w),
                    p.push(w))
                  : (s.roundLengths && (w = Math.floor(w)),
                    (S - Math.min(e.params.slidesPerGroupSkip, S)) %
                      e.params.slidesPerGroup ==
                      0 && h.push(w),
                    p.push(w),
                    (w = w + T + y)),
                (e.virtualSize += T + y),
                (x = T),
                (S += 1);
            }
          }
          if (
            ((e.virtualSize = Math.max(e.virtualSize, r) + m),
            o &&
              a &&
              ("slide" === s.effect || "coverflow" === s.effect) &&
              n.css({ width: `${e.virtualSize + s.spaceBetween}px` }),
            s.setWrapperSize &&
              n.css({ [t("width")]: `${e.virtualSize + s.spaceBetween}px` }),
            E && e.grid.updateWrapperSize(T, h, t),
            !s.centeredSlides)
          ) {
            const t = [];
            for (let i = 0; i < h.length; i += 1) {
              let n = h[i];
              s.roundLengths && (n = Math.floor(n)),
                h[i] <= e.virtualSize - r && t.push(n);
            }
            (h = t),
              Math.floor(e.virtualSize - r) - Math.floor(h[h.length - 1]) > 1 &&
                h.push(e.virtualSize - r);
          }
          if ((0 === h.length && (h = [0]), 0 !== s.spaceBetween)) {
            const i = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
            d.filter((e, t) => !s.cssMode || t !== d.length - 1).css({
              [i]: `${y}px`,
            });
          }
          if (s.centeredSlides && s.centeredSlidesBounds) {
            let e = 0;
            f.forEach((t) => {
              e += t + (s.spaceBetween ? s.spaceBetween : 0);
            }),
              (e -= s.spaceBetween);
            const t = e - r;
            h = h.map((e) => (e < 0 ? -g : e > t ? t + m : e));
          }
          if (s.centerInsufficientSlides) {
            let e = 0;
            if (
              (f.forEach((t) => {
                e += t + (s.spaceBetween ? s.spaceBetween : 0);
              }),
              (e -= s.spaceBetween),
              e < r)
            ) {
              const t = (r - e) / 2;
              h.forEach((e, i) => {
                h[i] = e - t;
              }),
                p.forEach((e, i) => {
                  p[i] = e + t;
                });
            }
          }
          if (
            (Object.assign(e, {
              slides: d,
              snapGrid: h,
              slidesGrid: p,
              slidesSizesGrid: f,
            }),
            s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
          ) {
            L(e.wrapperEl, "--swiper-centered-offset-before", -h[0] + "px"),
              L(
                e.wrapperEl,
                "--swiper-centered-offset-after",
                e.size / 2 - f[f.length - 1] / 2 + "px"
              );
            const t = -e.snapGrid[0],
              i = -e.slidesGrid[0];
            (e.snapGrid = e.snapGrid.map((e) => e + t)),
              (e.slidesGrid = e.slidesGrid.map((e) => e + i));
          }
          if (
            (u !== c && e.emit("slidesLengthChange"),
            h.length !== v &&
              (e.params.watchOverflow && e.checkOverflow(),
              e.emit("snapGridLengthChange")),
            p.length !== b && e.emit("slidesGridLengthChange"),
            s.watchSlidesProgress && e.updateSlidesOffset(),
            !(l || s.cssMode || ("slide" !== s.effect && "fade" !== s.effect)))
          ) {
            const t = `${s.containerModifierClass}backface-hidden`,
              i = e.$el.hasClass(t);
            u <= s.maxBackfaceHiddenSlides
              ? i || e.$el.addClass(t)
              : i && e.$el.removeClass(t);
          }
        },
        updateAutoHeight: function (e) {
          const t = this,
            i = [],
            s = t.virtual && t.params.virtual.enabled;
          let n,
            r = 0;
          "number" == typeof e
            ? t.setTransition(e)
            : !0 === e && t.setTransition(t.params.speed);
          const o = (e) =>
            s
              ? t.slides.filter(
                  (t) =>
                    parseInt(t.getAttribute("data-swiper-slide-index"), 10) ===
                    e
                )[0]
              : t.slides.eq(e)[0];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)
              (t.visibleSlides || S([])).each((e) => {
                i.push(e);
              });
            else
              for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
                const e = t.activeIndex + n;
                if (e > t.slides.length && !s) break;
                i.push(o(e));
              }
          else i.push(o(t.activeIndex));
          for (n = 0; n < i.length; n += 1)
            if (void 0 !== i[n]) {
              const e = i[n].offsetHeight;
              r = e > r ? e : r;
            }
          (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`);
        },
        updateSlidesOffset: function () {
          const e = this,
            t = e.slides;
          for (let i = 0; i < t.length; i += 1)
            t[i].swiperSlideOffset = e.isHorizontal()
              ? t[i].offsetLeft
              : t[i].offsetTop;
        },
        updateSlidesProgress: function (e = (this && this.translate) || 0) {
          const t = this,
            i = t.params,
            { slides: s, rtlTranslate: n, snapGrid: r } = t;
          if (0 === s.length) return;
          void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
          let o = -e;
          n && (o = e),
            s.removeClass(i.slideVisibleClass),
            (t.visibleSlidesIndexes = []),
            (t.visibleSlides = []);
          for (let e = 0; e < s.length; e += 1) {
            const a = s[e];
            let l = a.swiperSlideOffset;
            i.cssMode && i.centeredSlides && (l -= s[0].swiperSlideOffset);
            const c =
                (o + (i.centeredSlides ? t.minTranslate() : 0) - l) /
                (a.swiperSlideSize + i.spaceBetween),
              d =
                (o - r[0] + (i.centeredSlides ? t.minTranslate() : 0) - l) /
                (a.swiperSlideSize + i.spaceBetween),
              u = -(o - l),
              h = u + t.slidesSizesGrid[e];
            ((u >= 0 && u < t.size - 1) ||
              (h > 1 && h <= t.size) ||
              (u <= 0 && h >= t.size)) &&
              (t.visibleSlides.push(a),
              t.visibleSlidesIndexes.push(e),
              s.eq(e).addClass(i.slideVisibleClass)),
              (a.progress = n ? -c : c),
              (a.originalProgress = n ? -d : d);
          }
          t.visibleSlides = S(t.visibleSlides);
        },
        updateProgress: function (e) {
          const t = this;
          if (void 0 === e) {
            const i = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * i) || 0;
          }
          const i = t.params,
            s = t.maxTranslate() - t.minTranslate();
          let { progress: n, isBeginning: r, isEnd: o } = t;
          const a = r,
            l = o;
          0 === s
            ? ((n = 0), (r = !0), (o = !0))
            : ((n = (e - t.minTranslate()) / s), (r = n <= 0), (o = n >= 1)),
            Object.assign(t, { progress: n, isBeginning: r, isEnd: o }),
            (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
              t.updateSlidesProgress(e),
            r && !a && t.emit("reachBeginning toEdge"),
            o && !l && t.emit("reachEnd toEdge"),
            ((a && !r) || (l && !o)) && t.emit("fromEdge"),
            t.emit("progress", n);
        },
        updateSlidesClasses: function () {
          const e = this,
            {
              slides: t,
              params: i,
              $wrapperEl: s,
              activeIndex: n,
              realIndex: r,
            } = e,
            o = e.virtual && i.virtual.enabled;
          let a;
          t.removeClass(
            `${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`
          ),
            (a = o
              ? e.$wrapperEl.find(
                  `.${i.slideClass}[data-swiper-slide-index="${n}"]`
                )
              : t.eq(n)),
            a.addClass(i.slideActiveClass),
            i.loop &&
              (a.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      `.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                    )
                    .addClass(i.slideDuplicateActiveClass)
                : s
                    .children(
                      `.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                    )
                    .addClass(i.slideDuplicateActiveClass));
          let l = a
            .nextAll(`.${i.slideClass}`)
            .eq(0)
            .addClass(i.slideNextClass);
          i.loop &&
            0 === l.length &&
            ((l = t.eq(0)), l.addClass(i.slideNextClass));
          let c = a
            .prevAll(`.${i.slideClass}`)
            .eq(0)
            .addClass(i.slidePrevClass);
          i.loop &&
            0 === c.length &&
            ((c = t.eq(-1)), c.addClass(i.slidePrevClass)),
            i.loop &&
              (l.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      `.${i.slideClass}:not(.${
                        i.slideDuplicateClass
                      })[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(i.slideDuplicateNextClass)
                : s
                    .children(
                      `.${i.slideClass}.${
                        i.slideDuplicateClass
                      }[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(i.slideDuplicateNextClass),
              c.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      `.${i.slideClass}:not(.${
                        i.slideDuplicateClass
                      })[data-swiper-slide-index="${c.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(i.slideDuplicatePrevClass)
                : s
                    .children(
                      `.${i.slideClass}.${
                        i.slideDuplicateClass
                      }[data-swiper-slide-index="${c.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(i.slideDuplicatePrevClass)),
            e.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          const t = this,
            i = t.rtlTranslate ? t.translate : -t.translate,
            {
              slidesGrid: s,
              snapGrid: n,
              params: r,
              activeIndex: o,
              realIndex: a,
              snapIndex: l,
            } = t;
          let c,
            d = e;
          if (void 0 === d) {
            for (let e = 0; e < s.length; e += 1)
              void 0 !== s[e + 1]
                ? i >= s[e] && i < s[e + 1] - (s[e + 1] - s[e]) / 2
                  ? (d = e)
                  : i >= s[e] && i < s[e + 1] && (d = e + 1)
                : i >= s[e] && (d = e);
            r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
          }
          if (n.indexOf(i) >= 0) c = n.indexOf(i);
          else {
            const e = Math.min(r.slidesPerGroupSkip, d);
            c = e + Math.floor((d - e) / r.slidesPerGroup);
          }
          if ((c >= n.length && (c = n.length - 1), d === o))
            return void (
              c !== l && ((t.snapIndex = c), t.emit("snapIndexChange"))
            );
          const u = parseInt(
            t.slides.eq(d).attr("data-swiper-slide-index") || d,
            10
          );
          Object.assign(t, {
            snapIndex: c,
            realIndex: u,
            previousIndex: o,
            activeIndex: d,
          }),
            t.emit("activeIndexChange"),
            t.emit("snapIndexChange"),
            a !== u && t.emit("realIndexChange"),
            (t.initialized || t.params.runCallbacksOnInit) &&
              t.emit("slideChange");
        },
        updateClickedSlide: function (e) {
          const t = this,
            i = t.params,
            s = S(e).closest(`.${i.slideClass}`)[0];
          let n,
            r = !1;
          if (s)
            for (let e = 0; e < t.slides.length; e += 1)
              if (t.slides[e] === s) {
                (r = !0), (n = e);
                break;
              }
          if (!s || !r)
            return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
          (t.clickedSlide = s),
            t.virtual && t.params.virtual.enabled
              ? (t.clickedIndex = parseInt(
                  S(s).attr("data-swiper-slide-index"),
                  10
                ))
              : (t.clickedIndex = n),
            i.slideToClickedSlide &&
              void 0 !== t.clickedIndex &&
              t.clickedIndex !== t.activeIndex &&
              t.slideToClickedSlide();
        },
      };
      const N = {
        getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
          const {
            params: t,
            rtlTranslate: i,
            translate: s,
            $wrapperEl: n,
          } = this;
          if (t.virtualTranslate) return i ? -s : s;
          if (t.cssMode) return s;
          let r = C(n[0], e);
          return i && (r = -r), r || 0;
        },
        setTranslate: function (e, t) {
          const i = this,
            {
              rtlTranslate: s,
              params: n,
              $wrapperEl: r,
              wrapperEl: o,
              progress: a,
            } = i;
          let l,
            c = 0,
            d = 0;
          i.isHorizontal() ? (c = s ? -e : e) : (d = e),
            n.roundLengths && ((c = Math.floor(c)), (d = Math.floor(d))),
            n.cssMode
              ? (o[i.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  i.isHorizontal() ? -c : -d)
              : n.virtualTranslate ||
                r.transform(`translate3d(${c}px, ${d}px, 0px)`),
            (i.previousTranslate = i.translate),
            (i.translate = i.isHorizontal() ? c : d);
          const u = i.maxTranslate() - i.minTranslate();
          (l = 0 === u ? 0 : (e - i.minTranslate()) / u),
            l !== a && i.updateProgress(e),
            i.emit("setTranslate", i.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (
          e = 0,
          t = this.params.speed,
          i = !0,
          s = !0,
          n
        ) {
          const r = this,
            { params: o, wrapperEl: a } = r;
          if (r.animating && o.preventInteractionOnTransition) return !1;
          const l = r.minTranslate(),
            c = r.maxTranslate();
          let d;
          if (
            ((d = s && e > l ? l : s && e < c ? c : e),
            r.updateProgress(d),
            o.cssMode)
          ) {
            const e = r.isHorizontal();
            if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -d;
            else {
              if (!r.support.smoothScroll)
                return (
                  k({
                    swiper: r,
                    targetPosition: -d,
                    side: e ? "left" : "top",
                  }),
                  !0
                );
              a.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
            }
            return !0;
          }
          return (
            0 === t
              ? (r.setTransition(0),
                r.setTranslate(d),
                i &&
                  (r.emit("beforeTransitionStart", t, n),
                  r.emit("transitionEnd")))
              : (r.setTransition(t),
                r.setTranslate(d),
                i &&
                  (r.emit("beforeTransitionStart", t, n),
                  r.emit("transitionStart")),
                r.animating ||
                  ((r.animating = !0),
                  r.onTranslateToWrapperTransitionEnd ||
                    (r.onTranslateToWrapperTransitionEnd = function (e) {
                      r &&
                        !r.destroyed &&
                        e.target === this &&
                        (r.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          r.onTranslateToWrapperTransitionEnd
                        ),
                        r.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          r.onTranslateToWrapperTransitionEnd
                        ),
                        (r.onTranslateToWrapperTransitionEnd = null),
                        delete r.onTranslateToWrapperTransitionEnd,
                        i && r.emit("transitionEnd"));
                    }),
                  r.$wrapperEl[0].addEventListener(
                    "transitionend",
                    r.onTranslateToWrapperTransitionEnd
                  ),
                  r.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    r.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      };
      function j({ swiper: e, runCallbacks: t, direction: i, step: s }) {
        const { activeIndex: n, previousIndex: r } = e;
        let o = i;
        if (
          (o || (o = n > r ? "next" : n < r ? "prev" : "reset"),
          e.emit(`transition${s}`),
          t && n !== r)
        ) {
          if ("reset" === o) return void e.emit(`slideResetTransition${s}`);
          e.emit(`slideChangeTransition${s}`),
            "next" === o
              ? e.emit(`slideNextTransition${s}`)
              : e.emit(`slidePrevTransition${s}`);
        }
      }
      const F = {
        slideTo: function (e = 0, t = this.params.speed, i = !0, s, n) {
          if ("number" != typeof e && "string" != typeof e)
            throw new Error(
              `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
            );
          if ("string" == typeof e) {
            const t = parseInt(e, 10);
            if (!isFinite(t))
              throw new Error(
                `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
              );
            e = t;
          }
          const r = this;
          let o = e;
          o < 0 && (o = 0);
          const {
            params: a,
            snapGrid: l,
            slidesGrid: c,
            previousIndex: d,
            activeIndex: u,
            rtlTranslate: h,
            wrapperEl: p,
            enabled: f,
          } = r;
          if (
            (r.animating && a.preventInteractionOnTransition) ||
            (!f && !s && !n)
          )
            return !1;
          const g = Math.min(r.params.slidesPerGroupSkip, o);
          let m = g + Math.floor((o - g) / r.params.slidesPerGroup);
          m >= l.length && (m = l.length - 1);
          const v = -l[m];
          if (a.normalizeSlideIndex)
            for (let e = 0; e < c.length; e += 1) {
              const t = -Math.floor(100 * v),
                i = Math.floor(100 * c[e]),
                s = Math.floor(100 * c[e + 1]);
              void 0 !== c[e + 1]
                ? t >= i && t < s - (s - i) / 2
                  ? (o = e)
                  : t >= i && t < s && (o = e + 1)
                : t >= i && (o = e);
            }
          if (r.initialized && o !== u) {
            if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
              return !1;
            if (
              !r.allowSlidePrev &&
              v > r.translate &&
              v > r.maxTranslate() &&
              (u || 0) !== o
            )
              return !1;
          }
          let b;
          if (
            (o !== (d || 0) && i && r.emit("beforeSlideChangeStart"),
            r.updateProgress(v),
            (b = o > u ? "next" : o < u ? "prev" : "reset"),
            (h && -v === r.translate) || (!h && v === r.translate))
          )
            return (
              r.updateActiveIndex(o),
              a.autoHeight && r.updateAutoHeight(),
              r.updateSlidesClasses(),
              "slide" !== a.effect && r.setTranslate(v),
              "reset" !== b && (r.transitionStart(i, b), r.transitionEnd(i, b)),
              !1
            );
          if (a.cssMode) {
            const e = r.isHorizontal(),
              i = h ? v : -v;
            if (0 === t) {
              const t = r.virtual && r.params.virtual.enabled;
              t &&
                ((r.wrapperEl.style.scrollSnapType = "none"),
                (r._immediateVirtual = !0)),
                (p[e ? "scrollLeft" : "scrollTop"] = i),
                t &&
                  requestAnimationFrame(() => {
                    (r.wrapperEl.style.scrollSnapType = ""),
                      (r._swiperImmediateVirtual = !1);
                  });
            } else {
              if (!r.support.smoothScroll)
                return (
                  k({ swiper: r, targetPosition: i, side: e ? "left" : "top" }),
                  !0
                );
              p.scrollTo({ [e ? "left" : "top"]: i, behavior: "smooth" });
            }
            return !0;
          }
          return (
            r.setTransition(t),
            r.setTranslate(v),
            r.updateActiveIndex(o),
            r.updateSlidesClasses(),
            r.emit("beforeTransitionStart", t, s),
            r.transitionStart(i, b),
            0 === t
              ? r.transitionEnd(i, b)
              : r.animating ||
                ((r.animating = !0),
                r.onSlideToWrapperTransitionEnd ||
                  (r.onSlideToWrapperTransitionEnd = function (e) {
                    r &&
                      !r.destroyed &&
                      e.target === this &&
                      (r.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        r.onSlideToWrapperTransitionEnd
                      ),
                      r.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        r.onSlideToWrapperTransitionEnd
                      ),
                      (r.onSlideToWrapperTransitionEnd = null),
                      delete r.onSlideToWrapperTransitionEnd,
                      r.transitionEnd(i, b));
                  }),
                r.$wrapperEl[0].addEventListener(
                  "transitionend",
                  r.onSlideToWrapperTransitionEnd
                ),
                r.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  r.onSlideToWrapperTransitionEnd
                )),
            !0
          );
        },
        slideToLoop: function (e = 0, t = this.params.speed, i = !0, s) {
          if ("string" == typeof e) {
            const t = parseInt(e, 10);
            if (!isFinite(t))
              throw new Error(
                `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
              );
            e = t;
          }
          const n = this;
          let r = e;
          return n.params.loop && (r += n.loopedSlides), n.slideTo(r, t, i, s);
        },
        slideNext: function (e = this.params.speed, t = !0, i) {
          const s = this,
            { animating: n, enabled: r, params: o } = s;
          if (!r) return s;
          let a = o.slidesPerGroup;
          "auto" === o.slidesPerView &&
            1 === o.slidesPerGroup &&
            o.slidesPerGroupAuto &&
            (a = Math.max(s.slidesPerViewDynamic("current", !0), 1));
          const l = s.activeIndex < o.slidesPerGroupSkip ? 1 : a;
          if (o.loop) {
            if (n && o.loopPreventsSlide) return !1;
            s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
          }
          return o.rewind && s.isEnd
            ? s.slideTo(0, e, t, i)
            : s.slideTo(s.activeIndex + l, e, t, i);
        },
        slidePrev: function (e = this.params.speed, t = !0, i) {
          const s = this,
            {
              params: n,
              animating: r,
              snapGrid: o,
              slidesGrid: a,
              rtlTranslate: l,
              enabled: c,
            } = s;
          if (!c) return s;
          if (n.loop) {
            if (r && n.loopPreventsSlide) return !1;
            s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
          }
          function d(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          const u = d(l ? s.translate : -s.translate),
            h = o.map((e) => d(e));
          let p = o[h.indexOf(u) - 1];
          if (void 0 === p && n.cssMode) {
            let e;
            o.forEach((t, i) => {
              u >= t && (e = i);
            }),
              void 0 !== e && (p = o[e > 0 ? e - 1 : e]);
          }
          let f = 0;
          if (
            (void 0 !== p &&
              ((f = a.indexOf(p)),
              f < 0 && (f = s.activeIndex - 1),
              "auto" === n.slidesPerView &&
                1 === n.slidesPerGroup &&
                n.slidesPerGroupAuto &&
                ((f = f - s.slidesPerViewDynamic("previous", !0) + 1),
                (f = Math.max(f, 0)))),
            n.rewind && s.isBeginning)
          ) {
            const n =
              s.params.virtual && s.params.virtual.enabled && s.virtual
                ? s.virtual.slides.length - 1
                : s.slides.length - 1;
            return s.slideTo(n, e, t, i);
          }
          return s.slideTo(f, e, t, i);
        },
        slideReset: function (e = this.params.speed, t = !0, i) {
          return this.slideTo(this.activeIndex, e, t, i);
        },
        slideToClosest: function (e = this.params.speed, t = !0, i, s = 0.5) {
          const n = this;
          let r = n.activeIndex;
          const o = Math.min(n.params.slidesPerGroupSkip, r),
            a = o + Math.floor((r - o) / n.params.slidesPerGroup),
            l = n.rtlTranslate ? n.translate : -n.translate;
          if (l >= n.snapGrid[a]) {
            const e = n.snapGrid[a];
            l - e > (n.snapGrid[a + 1] - e) * s &&
              (r += n.params.slidesPerGroup);
          } else {
            const e = n.snapGrid[a - 1];
            l - e <= (n.snapGrid[a] - e) * s && (r -= n.params.slidesPerGroup);
          }
          return (
            (r = Math.max(r, 0)),
            (r = Math.min(r, n.slidesGrid.length - 1)),
            n.slideTo(r, e, t, i)
          );
        },
        slideToClickedSlide: function () {
          const e = this,
            { params: t, $wrapperEl: i } = e,
            s =
              "auto" === t.slidesPerView
                ? e.slidesPerViewDynamic()
                : t.slidesPerView;
          let n,
            r = e.clickedIndex;
          if (t.loop) {
            if (e.animating) return;
            (n = parseInt(
              S(e.clickedSlide).attr("data-swiper-slide-index"),
              10
            )),
              t.centeredSlides
                ? r < e.loopedSlides - s / 2 ||
                  r > e.slides.length - e.loopedSlides + s / 2
                  ? (e.loopFix(),
                    (r = i
                      .children(
                        `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                      )
                      .eq(0)
                      .index()),
                    E(() => {
                      e.slideTo(r);
                    }))
                  : e.slideTo(r)
                : r > e.slides.length - s
                ? (e.loopFix(),
                  (r = i
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  E(() => {
                    e.slideTo(r);
                  }))
                : e.slideTo(r);
          } else e.slideTo(r);
        },
      };
      const R = {
        loopCreate: function () {
          const e = this,
            t = h(),
            { params: i, $wrapperEl: s } = e,
            n = s.children().length > 0 ? S(s.children()[0].parentNode) : s;
          n.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();
          let r = n.children(`.${i.slideClass}`);
          if (i.loopFillGroupWithBlank) {
            const e = i.slidesPerGroup - (r.length % i.slidesPerGroup);
            if (e !== i.slidesPerGroup) {
              for (let s = 0; s < e; s += 1) {
                const e = S(t.createElement("div")).addClass(
                  `${i.slideClass} ${i.slideBlankClass}`
                );
                n.append(e);
              }
              r = n.children(`.${i.slideClass}`);
            }
          }
          "auto" !== i.slidesPerView ||
            i.loopedSlides ||
            (i.loopedSlides = r.length),
            (e.loopedSlides = Math.ceil(
              parseFloat(i.loopedSlides || i.slidesPerView, 10)
            )),
            (e.loopedSlides += i.loopAdditionalSlides),
            e.loopedSlides > r.length &&
              e.params.loopedSlidesLimit &&
              (e.loopedSlides = r.length);
          const o = [],
            a = [];
          r.each((e, t) => {
            S(e).attr("data-swiper-slide-index", t);
          });
          for (let t = 0; t < e.loopedSlides; t += 1) {
            const e = t - Math.floor(t / r.length) * r.length;
            a.push(r.eq(e)[0]), o.unshift(r.eq(r.length - e - 1)[0]);
          }
          for (let e = 0; e < a.length; e += 1)
            n.append(S(a[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
          for (let e = o.length - 1; e >= 0; e -= 1)
            n.prepend(S(o[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
        },
        loopFix: function () {
          const e = this;
          e.emit("beforeLoopFix");
          const {
            activeIndex: t,
            slides: i,
            loopedSlides: s,
            allowSlidePrev: n,
            allowSlideNext: r,
            snapGrid: o,
            rtlTranslate: a,
          } = e;
          let l;
          (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
          const c = -o[t] - e.getTranslate();
          if (t < s) {
            (l = i.length - 3 * s + t), (l += s);
            e.slideTo(l, 0, !1, !0) &&
              0 !== c &&
              e.setTranslate((a ? -e.translate : e.translate) - c);
          } else if (t >= i.length - s) {
            (l = -i.length + t + s), (l += s);
            e.slideTo(l, 0, !1, !0) &&
              0 !== c &&
              e.setTranslate((a ? -e.translate : e.translate) - c);
          }
          (e.allowSlidePrev = n), (e.allowSlideNext = r), e.emit("loopFix");
        },
        loopDestroy: function () {
          const { $wrapperEl: e, params: t, slides: i } = this;
          e
            .children(
              `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
            )
            .remove(),
            i.removeAttr("data-swiper-slide-index");
        },
      };
      function W(e) {
        const t = this,
          i = h(),
          s = f(),
          n = t.touchEventsData,
          { params: r, touches: o, enabled: a } = t;
        if (!a) return;
        if (t.animating && r.preventInteractionOnTransition) return;
        !t.animating && r.cssMode && r.loop && t.loopFix();
        let l = e;
        l.originalEvent && (l = l.originalEvent);
        let c = S(l.target);
        if ("wrapper" === r.touchEventsTarget && !c.closest(t.wrapperEl).length)
          return;
        if (
          ((n.isTouchEvent = "touchstart" === l.type),
          !n.isTouchEvent && "which" in l && 3 === l.which)
        )
          return;
        if (!n.isTouchEvent && "button" in l && l.button > 0) return;
        if (n.isTouched && n.isMoved) return;
        const d = !!r.noSwipingClass && "" !== r.noSwipingClass,
          u = e.composedPath ? e.composedPath() : e.path;
        d && l.target && l.target.shadowRoot && u && (c = S(u[0]));
        const p = r.noSwipingSelector
            ? r.noSwipingSelector
            : `.${r.noSwipingClass}`,
          g = !(!l.target || !l.target.shadowRoot);
        if (
          r.noSwiping &&
          (g
            ? (function (e, t = this) {
                return (function t(i) {
                  if (!i || i === h() || i === f()) return null;
                  i.assignedSlot && (i = i.assignedSlot);
                  const s = i.closest(e);
                  return s || i.getRootNode
                    ? s || t(i.getRootNode().host)
                    : null;
                })(t);
              })(p, c[0])
            : c.closest(p)[0])
        )
          return void (t.allowClick = !0);
        if (r.swipeHandler && !c.closest(r.swipeHandler)[0]) return;
        (o.currentX =
          "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
          (o.currentY =
            "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
        const m = o.currentX,
          v = o.currentY,
          b = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
          y = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
        if (b && (m <= y || m >= s.innerWidth - y)) {
          if ("prevent" !== b) return;
          e.preventDefault();
        }
        if (
          (Object.assign(n, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0,
          }),
          (o.startX = m),
          (o.startY = v),
          (n.touchStartTime = T()),
          (t.allowClick = !0),
          t.updateSize(),
          (t.swipeDirection = void 0),
          r.threshold > 0 && (n.allowThresholdMove = !1),
          "touchstart" !== l.type)
        ) {
          let e = !0;
          c.is(n.focusableElements) &&
            ((e = !1), "SELECT" === c[0].nodeName && (n.isTouched = !1)),
            i.activeElement &&
              S(i.activeElement).is(n.focusableElements) &&
              i.activeElement !== c[0] &&
              i.activeElement.blur();
          const s = e && t.allowTouchMove && r.touchStartPreventDefault;
          (!r.touchStartForcePreventDefault && !s) ||
            c[0].isContentEditable ||
            l.preventDefault();
        }
        t.params.freeMode &&
          t.params.freeMode.enabled &&
          t.freeMode &&
          t.animating &&
          !r.cssMode &&
          t.freeMode.onTouchStart(),
          t.emit("touchStart", l);
      }
      function G(e) {
        const t = h(),
          i = this,
          s = i.touchEventsData,
          { params: n, touches: r, rtlTranslate: o, enabled: a } = i;
        if (!a) return;
        let l = e;
        if ((l.originalEvent && (l = l.originalEvent), !s.isTouched))
          return void (
            s.startMoving &&
            s.isScrolling &&
            i.emit("touchMoveOpposite", l)
          );
        if (s.isTouchEvent && "touchmove" !== l.type) return;
        const c =
            "touchmove" === l.type &&
            l.targetTouches &&
            (l.targetTouches[0] || l.changedTouches[0]),
          d = "touchmove" === l.type ? c.pageX : l.pageX,
          u = "touchmove" === l.type ? c.pageY : l.pageY;
        if (l.preventedByNestedSwiper)
          return (r.startX = d), void (r.startY = u);
        if (!i.allowTouchMove)
          return (
            S(l.target).is(s.focusableElements) || (i.allowClick = !1),
            void (
              s.isTouched &&
              (Object.assign(r, {
                startX: d,
                startY: u,
                currentX: d,
                currentY: u,
              }),
              (s.touchStartTime = T()))
            )
          );
        if (s.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
          if (i.isVertical()) {
            if (
              (u < r.startY && i.translate <= i.maxTranslate()) ||
              (u > r.startY && i.translate >= i.minTranslate())
            )
              return (s.isTouched = !1), void (s.isMoved = !1);
          } else if (
            (d < r.startX && i.translate <= i.maxTranslate()) ||
            (d > r.startX && i.translate >= i.minTranslate())
          )
            return;
        if (
          s.isTouchEvent &&
          t.activeElement &&
          l.target === t.activeElement &&
          S(l.target).is(s.focusableElements)
        )
          return (s.isMoved = !0), void (i.allowClick = !1);
        if (
          (s.allowTouchCallbacks && i.emit("touchMove", l),
          l.targetTouches && l.targetTouches.length > 1)
        )
          return;
        (r.currentX = d), (r.currentY = u);
        const p = r.currentX - r.startX,
          f = r.currentY - r.startY;
        if (
          i.params.threshold &&
          Math.sqrt(p ** 2 + f ** 2) < i.params.threshold
        )
          return;
        if (void 0 === s.isScrolling) {
          let e;
          (i.isHorizontal() && r.currentY === r.startY) ||
          (i.isVertical() && r.currentX === r.startX)
            ? (s.isScrolling = !1)
            : p * p + f * f >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(f), Math.abs(p))) / Math.PI),
              (s.isScrolling = i.isHorizontal()
                ? e > n.touchAngle
                : 90 - e > n.touchAngle));
        }
        if (
          (s.isScrolling && i.emit("touchMoveOpposite", l),
          void 0 === s.startMoving &&
            ((r.currentX === r.startX && r.currentY === r.startY) ||
              (s.startMoving = !0)),
          s.isScrolling)
        )
          return void (s.isTouched = !1);
        if (!s.startMoving) return;
        (i.allowClick = !1),
          !n.cssMode && l.cancelable && l.preventDefault(),
          n.touchMoveStopPropagation && !n.nested && l.stopPropagation(),
          s.isMoved ||
            (n.loop && !n.cssMode && i.loopFix(),
            (s.startTranslate = i.getTranslate()),
            i.setTransition(0),
            i.animating &&
              i.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
            (s.allowMomentumBounce = !1),
            !n.grabCursor ||
              (!0 !== i.allowSlideNext && !0 !== i.allowSlidePrev) ||
              i.setGrabCursor(!0),
            i.emit("sliderFirstMove", l)),
          i.emit("sliderMove", l),
          (s.isMoved = !0);
        let g = i.isHorizontal() ? p : f;
        (r.diff = g),
          (g *= n.touchRatio),
          o && (g = -g),
          (i.swipeDirection = g > 0 ? "prev" : "next"),
          (s.currentTranslate = g + s.startTranslate);
        let m = !0,
          v = n.resistanceRatio;
        if (
          (n.touchReleaseOnEdges && (v = 0),
          g > 0 && s.currentTranslate > i.minTranslate()
            ? ((m = !1),
              n.resistance &&
                (s.currentTranslate =
                  i.minTranslate() -
                  1 +
                  (-i.minTranslate() + s.startTranslate + g) ** v))
            : g < 0 &&
              s.currentTranslate < i.maxTranslate() &&
              ((m = !1),
              n.resistance &&
                (s.currentTranslate =
                  i.maxTranslate() +
                  1 -
                  (i.maxTranslate() - s.startTranslate - g) ** v)),
          m && (l.preventedByNestedSwiper = !0),
          !i.allowSlideNext &&
            "next" === i.swipeDirection &&
            s.currentTranslate < s.startTranslate &&
            (s.currentTranslate = s.startTranslate),
          !i.allowSlidePrev &&
            "prev" === i.swipeDirection &&
            s.currentTranslate > s.startTranslate &&
            (s.currentTranslate = s.startTranslate),
          i.allowSlidePrev ||
            i.allowSlideNext ||
            (s.currentTranslate = s.startTranslate),
          n.threshold > 0)
        ) {
          if (!(Math.abs(g) > n.threshold || s.allowThresholdMove))
            return void (s.currentTranslate = s.startTranslate);
          if (!s.allowThresholdMove)
            return (
              (s.allowThresholdMove = !0),
              (r.startX = r.currentX),
              (r.startY = r.currentY),
              (s.currentTranslate = s.startTranslate),
              void (r.diff = i.isHorizontal()
                ? r.currentX - r.startX
                : r.currentY - r.startY)
            );
        }
        n.followFinger &&
          !n.cssMode &&
          (((n.freeMode && n.freeMode.enabled && i.freeMode) ||
            n.watchSlidesProgress) &&
            (i.updateActiveIndex(), i.updateSlidesClasses()),
          i.params.freeMode &&
            n.freeMode.enabled &&
            i.freeMode &&
            i.freeMode.onTouchMove(),
          i.updateProgress(s.currentTranslate),
          i.setTranslate(s.currentTranslate));
      }
      function H(e) {
        const t = this,
          i = t.touchEventsData,
          {
            params: s,
            touches: n,
            rtlTranslate: r,
            slidesGrid: o,
            enabled: a,
          } = t;
        if (!a) return;
        let l = e;
        if (
          (l.originalEvent && (l = l.originalEvent),
          i.allowTouchCallbacks && t.emit("touchEnd", l),
          (i.allowTouchCallbacks = !1),
          !i.isTouched)
        )
          return (
            i.isMoved && s.grabCursor && t.setGrabCursor(!1),
            (i.isMoved = !1),
            void (i.startMoving = !1)
          );
        s.grabCursor &&
          i.isMoved &&
          i.isTouched &&
          (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
          t.setGrabCursor(!1);
        const c = T(),
          d = c - i.touchStartTime;
        if (t.allowClick) {
          const e = l.path || (l.composedPath && l.composedPath());
          t.updateClickedSlide((e && e[0]) || l.target),
            t.emit("tap click", l),
            d < 300 &&
              c - i.lastClickTime < 300 &&
              t.emit("doubleTap doubleClick", l);
        }
        if (
          ((i.lastClickTime = T()),
          E(() => {
            t.destroyed || (t.allowClick = !0);
          }),
          !i.isTouched ||
            !i.isMoved ||
            !t.swipeDirection ||
            0 === n.diff ||
            i.currentTranslate === i.startTranslate)
        )
          return (
            (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1)
          );
        let u;
        if (
          ((i.isTouched = !1),
          (i.isMoved = !1),
          (i.startMoving = !1),
          (u = s.followFinger
            ? r
              ? t.translate
              : -t.translate
            : -i.currentTranslate),
          s.cssMode)
        )
          return;
        if (t.params.freeMode && s.freeMode.enabled)
          return void t.freeMode.onTouchEnd({ currentPos: u });
        let h = 0,
          p = t.slidesSizesGrid[0];
        for (
          let e = 0;
          e < o.length;
          e += e < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
        ) {
          const t = e < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
          void 0 !== o[e + t]
            ? u >= o[e] && u < o[e + t] && ((h = e), (p = o[e + t] - o[e]))
            : u >= o[e] && ((h = e), (p = o[o.length - 1] - o[o.length - 2]));
        }
        let f = null,
          g = null;
        s.rewind &&
          (t.isBeginning
            ? (g =
                t.params.virtual && t.params.virtual.enabled && t.virtual
                  ? t.virtual.slides.length - 1
                  : t.slides.length - 1)
            : t.isEnd && (f = 0));
        const m = (u - o[h]) / p,
          v = h < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        if (d > s.longSwipesMs) {
          if (!s.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection &&
            (m >= s.longSwipesRatio
              ? t.slideTo(s.rewind && t.isEnd ? f : h + v)
              : t.slideTo(h)),
            "prev" === t.swipeDirection &&
              (m > 1 - s.longSwipesRatio
                ? t.slideTo(h + v)
                : null !== g && m < 0 && Math.abs(m) > s.longSwipesRatio
                ? t.slideTo(g)
                : t.slideTo(h));
        } else {
          if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
          t.navigation &&
          (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
            ? l.target === t.navigation.nextEl
              ? t.slideTo(h + v)
              : t.slideTo(h)
            : ("next" === t.swipeDirection && t.slideTo(null !== f ? f : h + v),
              "prev" === t.swipeDirection && t.slideTo(null !== g ? g : h));
        }
      }
      function V() {
        const e = this,
          { params: t, el: i } = e;
        if (i && 0 === i.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const { allowSlideNext: s, allowSlidePrev: n, snapGrid: r } = e;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses(),
          ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
          e.isEnd &&
          !e.isBeginning &&
          !e.params.centeredSlides
            ? e.slideTo(e.slides.length - 1, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            e.autoplay.run(),
          (e.allowSlidePrev = n),
          (e.allowSlideNext = s),
          e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
      }
      function q(e) {
        const t = this;
        t.enabled &&
          (t.allowClick ||
            (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation &&
              t.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation())));
      }
      function X() {
        const e = this,
          { wrapperEl: t, rtlTranslate: i, enabled: s } = e;
        if (!s) return;
        let n;
        (e.previousTranslate = e.translate),
          e.isHorizontal()
            ? (e.translate = -t.scrollLeft)
            : (e.translate = -t.scrollTop),
          0 === e.translate && (e.translate = 0),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
        const r = e.maxTranslate() - e.minTranslate();
        (n = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
          n !== e.progress && e.updateProgress(i ? -e.translate : e.translate),
          e.emit("setTranslate", e.translate, !1);
      }
      let Y = !1;
      function U() {}
      const K = (e, t) => {
        const i = h(),
          {
            params: s,
            touchEvents: n,
            el: r,
            wrapperEl: o,
            device: a,
            support: l,
          } = e,
          c = !!s.nested,
          d = "on" === t ? "addEventListener" : "removeEventListener",
          u = t;
        if (l.touch) {
          const t = !(
            "touchstart" !== n.start ||
            !l.passiveListener ||
            !s.passiveListeners
          ) && { passive: !0, capture: !1 };
          r[d](n.start, e.onTouchStart, t),
            r[d](
              n.move,
              e.onTouchMove,
              l.passiveListener ? { passive: !1, capture: c } : c
            ),
            r[d](n.end, e.onTouchEnd, t),
            n.cancel && r[d](n.cancel, e.onTouchEnd, t);
        } else
          r[d](n.start, e.onTouchStart, !1),
            i[d](n.move, e.onTouchMove, c),
            i[d](n.end, e.onTouchEnd, !1);
        (s.preventClicks || s.preventClicksPropagation) &&
          r[d]("click", e.onClick, !0),
          s.cssMode && o[d]("scroll", e.onScroll),
          s.updateOnWindowResize
            ? e[u](
                a.ios || a.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                V,
                !0
              )
            : e[u]("observerUpdate", V, !0);
      };
      const Q = {
          attachEvents: function () {
            const e = this,
              t = h(),
              { params: i, support: s } = e;
            (e.onTouchStart = W.bind(e)),
              (e.onTouchMove = G.bind(e)),
              (e.onTouchEnd = H.bind(e)),
              i.cssMode && (e.onScroll = X.bind(e)),
              (e.onClick = q.bind(e)),
              s.touch && !Y && (t.addEventListener("touchstart", U), (Y = !0)),
              K(e, "on");
          },
          detachEvents: function () {
            K(this, "off");
          },
        },
        J = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      const Z = {
        setBreakpoint: function () {
          const e = this,
            {
              activeIndex: t,
              initialized: i,
              loopedSlides: s = 0,
              params: n,
              $el: r,
            } = e,
            o = n.breakpoints;
          if (!o || (o && 0 === Object.keys(o).length)) return;
          const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
          if (!a || e.currentBreakpoint === a) return;
          const l = (a in o ? o[a] : void 0) || e.originalParams,
            c = J(e, n),
            d = J(e, l),
            u = n.enabled;
          c && !d
            ? (r.removeClass(
                `${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`
              ),
              e.emitContainerClasses())
            : !c &&
              d &&
              (r.addClass(`${n.containerModifierClass}grid`),
              ((l.grid.fill && "column" === l.grid.fill) ||
                (!l.grid.fill && "column" === n.grid.fill)) &&
                r.addClass(`${n.containerModifierClass}grid-column`),
              e.emitContainerClasses()),
            ["navigation", "pagination", "scrollbar"].forEach((t) => {
              const i = n[t] && n[t].enabled,
                s = l[t] && l[t].enabled;
              i && !s && e[t].disable(), !i && s && e[t].enable();
            });
          const h = l.direction && l.direction !== n.direction,
            p = n.loop && (l.slidesPerView !== n.slidesPerView || h);
          h && i && e.changeDirection(), I(e.params, l);
          const f = e.params.enabled;
          Object.assign(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev,
          }),
            u && !f ? e.disable() : !u && f && e.enable(),
            (e.currentBreakpoint = a),
            e.emit("_beforeBreakpoint", l),
            p &&
              i &&
              (e.loopDestroy(),
              e.loopCreate(),
              e.updateSlides(),
              e.slideTo(t - s + e.loopedSlides, 0, !1)),
            e.emit("breakpoint", l);
        },
        getBreakpoint: function (e, t = "window", i) {
          if (!e || ("container" === t && !i)) return;
          let s = !1;
          const n = f(),
            r = "window" === t ? n.innerHeight : i.clientHeight,
            o = Object.keys(e).map((e) => {
              if ("string" == typeof e && 0 === e.indexOf("@")) {
                const t = parseFloat(e.substr(1));
                return { value: r * t, point: e };
              }
              return { value: e, point: e };
            });
          o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
          for (let e = 0; e < o.length; e += 1) {
            const { point: r, value: a } = o[e];
            "window" === t
              ? n.matchMedia(`(min-width: ${a}px)`).matches && (s = r)
              : a <= i.clientWidth && (s = r);
          }
          return s || "max";
        },
      };
      const ee = {
        addClasses: function () {
          const e = this,
            {
              classNames: t,
              params: i,
              rtl: s,
              $el: n,
              device: r,
              support: o,
            } = e,
            a = (function (e, t) {
              const i = [];
              return (
                e.forEach((e) => {
                  "object" == typeof e
                    ? Object.keys(e).forEach((s) => {
                        e[s] && i.push(t + s);
                      })
                    : "string" == typeof e && i.push(t + e);
                }),
                i
              );
            })(
              [
                "initialized",
                i.direction,
                { "pointer-events": !o.touch },
                { "free-mode": e.params.freeMode && i.freeMode.enabled },
                { autoheight: i.autoHeight },
                { rtl: s },
                { grid: i.grid && i.grid.rows > 1 },
                {
                  "grid-column":
                    i.grid && i.grid.rows > 1 && "column" === i.grid.fill,
                },
                { android: r.android },
                { ios: r.ios },
                { "css-mode": i.cssMode },
                { centered: i.cssMode && i.centeredSlides },
                { "watch-progress": i.watchSlidesProgress },
              ],
              i.containerModifierClass
            );
          t.push(...a), n.addClass([...t].join(" ")), e.emitContainerClasses();
        },
        removeClasses: function () {
          const { $el: e, classNames: t } = this;
          e.removeClass(t.join(" ")), this.emitContainerClasses();
        },
      };
      const te = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopedSlidesLimit: !0,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      function ie(e, t) {
        return function (i = {}) {
          const s = Object.keys(i)[0],
            n = i[s];
          "object" == typeof n && null !== n
            ? (["navigation", "pagination", "scrollbar"].indexOf(s) >= 0 &&
                !0 === e[s] &&
                (e[s] = { auto: !0 }),
              s in e && "enabled" in n
                ? (!0 === e[s] && (e[s] = { enabled: !0 }),
                  "object" != typeof e[s] ||
                    "enabled" in e[s] ||
                    (e[s].enabled = !0),
                  e[s] || (e[s] = { enabled: !1 }),
                  I(t, i))
                : I(t, i))
            : I(t, i);
        };
      }
      const se = {
          eventsEmitter: $,
          update: B,
          translate: N,
          transition: {
            setTransition: function (e, t) {
              const i = this;
              i.params.cssMode || i.$wrapperEl.transition(e),
                i.emit("setTransition", e, t);
            },
            transitionStart: function (e = !0, t) {
              const i = this,
                { params: s } = i;
              s.cssMode ||
                (s.autoHeight && i.updateAutoHeight(),
                j({ swiper: i, runCallbacks: e, direction: t, step: "Start" }));
            },
            transitionEnd: function (e = !0, t) {
              const i = this,
                { params: s } = i;
              (i.animating = !1),
                s.cssMode ||
                  (i.setTransition(0),
                  j({ swiper: i, runCallbacks: e, direction: t, step: "End" }));
            },
          },
          slide: F,
          loop: R,
          grabCursor: {
            setGrabCursor: function (e) {
              const t = this;
              if (
                t.support.touch ||
                !t.params.simulateTouch ||
                (t.params.watchOverflow && t.isLocked) ||
                t.params.cssMode
              )
                return;
              const i =
                "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              (i.style.cursor = "move"),
                (i.style.cursor = e ? "grabbing" : "grab");
            },
            unsetGrabCursor: function () {
              const e = this;
              e.support.touch ||
                (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e[
                  "container" === e.params.touchEventsTarget
                    ? "el"
                    : "wrapperEl"
                ].style.cursor = "");
            },
          },
          events: Q,
          breakpoints: Z,
          checkOverflow: {
            checkOverflow: function () {
              const e = this,
                { isLocked: t, params: i } = e,
                { slidesOffsetBefore: s } = i;
              if (s) {
                const t = e.slides.length - 1,
                  i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * s;
                e.isLocked = e.size > i;
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
            },
          },
          classes: ee,
          images: {
            loadImage: function (e, t, i, s, n, r) {
              const o = f();
              let a;
              function l() {
                r && r();
              }
              S(e).parent("picture")[0] || (e.complete && n)
                ? l()
                : t
                ? ((a = new o.Image()),
                  (a.onload = l),
                  (a.onerror = l),
                  s && (a.sizes = s),
                  i && (a.srcset = i),
                  t && (a.src = t))
                : l();
            },
            preloadImages: function () {
              const e = this;
              function t() {
                null != e &&
                  e &&
                  !e.destroyed &&
                  (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                  e.imagesLoaded === e.imagesToLoad.length &&
                    (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")));
              }
              e.imagesToLoad = e.$el.find("img");
              for (let i = 0; i < e.imagesToLoad.length; i += 1) {
                const s = e.imagesToLoad[i];
                e.loadImage(
                  s,
                  s.currentSrc || s.getAttribute("src"),
                  s.srcset || s.getAttribute("srcset"),
                  s.sizes || s.getAttribute("sizes"),
                  !0,
                  t
                );
              }
            },
          },
        },
        ne = {};
      class re {
        constructor(...e) {
          let t, i;
          if (
            (1 === e.length &&
            e[0].constructor &&
            "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
              ? (i = e[0])
              : ([t, i] = e),
            i || (i = {}),
            (i = I({}, i)),
            t && !i.el && (i.el = t),
            i.el && S(i.el).length > 1)
          ) {
            const e = [];
            return (
              S(i.el).each((t) => {
                const s = I({}, i, { el: t });
                e.push(new re(s));
              }),
              e
            );
          }
          const s = this;
          (s.__swiper__ = !0),
            (s.support = z()),
            (s.device = _({ userAgent: i.userAgent })),
            (s.browser = D()),
            (s.eventsListeners = {}),
            (s.eventsAnyListeners = []),
            (s.modules = [...s.__modules__]),
            i.modules &&
              Array.isArray(i.modules) &&
              s.modules.push(...i.modules);
          const n = {};
          s.modules.forEach((e) => {
            e({
              swiper: s,
              extendParams: ie(i, n),
              on: s.on.bind(s),
              once: s.once.bind(s),
              off: s.off.bind(s),
              emit: s.emit.bind(s),
            });
          });
          const r = I({}, te, n);
          return (
            (s.params = I({}, r, ne, i)),
            (s.originalParams = I({}, s.params)),
            (s.passedParams = I({}, i)),
            s.params &&
              s.params.on &&
              Object.keys(s.params.on).forEach((e) => {
                s.on(e, s.params.on[e]);
              }),
            s.params && s.params.onAny && s.onAny(s.params.onAny),
            (s.$ = S),
            Object.assign(s, {
              enabled: s.params.enabled,
              el: t,
              classNames: [],
              slides: S(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => "horizontal" === s.params.direction,
              isVertical: () => "vertical" === s.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: s.params.allowSlideNext,
              allowSlidePrev: s.params.allowSlidePrev,
              touchEvents: (function () {
                const e = [
                    "touchstart",
                    "touchmove",
                    "touchend",
                    "touchcancel",
                  ],
                  t = ["pointerdown", "pointermove", "pointerup"];
                return (
                  (s.touchEventsTouch = {
                    start: e[0],
                    move: e[1],
                    end: e[2],
                    cancel: e[3],
                  }),
                  (s.touchEventsDesktop = {
                    start: t[0],
                    move: t[1],
                    end: t[2],
                  }),
                  s.support.touch || !s.params.simulateTouch
                    ? s.touchEventsTouch
                    : s.touchEventsDesktop
                );
              })(),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: s.params.focusableElements,
                lastClickTime: T(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: s.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            s.emit("_swiper"),
            s.params.init && s.init(),
            s
          );
        }
        enable() {
          const e = this;
          e.enabled ||
            ((e.enabled = !0),
            e.params.grabCursor && e.setGrabCursor(),
            e.emit("enable"));
        }
        disable() {
          const e = this;
          e.enabled &&
            ((e.enabled = !1),
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit("disable"));
        }
        setProgress(e, t) {
          const i = this;
          e = Math.min(Math.max(e, 0), 1);
          const s = i.minTranslate(),
            n = (i.maxTranslate() - s) * e + s;
          i.translateTo(n, void 0 === t ? 0 : t),
            i.updateActiveIndex(),
            i.updateSlidesClasses();
        }
        emitContainerClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = e.el.className
            .split(" ")
            .filter(
              (t) =>
                0 === t.indexOf("swiper") ||
                0 === t.indexOf(e.params.containerModifierClass)
            );
          e.emit("_containerClasses", t.join(" "));
        }
        getSlideClasses(e) {
          const t = this;
          return t.destroyed
            ? ""
            : e.className
                .split(" ")
                .filter(
                  (e) =>
                    0 === e.indexOf("swiper-slide") ||
                    0 === e.indexOf(t.params.slideClass)
                )
                .join(" ");
        }
        emitSlidesClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = [];
          e.slides.each((i) => {
            const s = e.getSlideClasses(i);
            t.push({ slideEl: i, classNames: s }), e.emit("_slideClass", i, s);
          }),
            e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e = "current", t = !1) {
          const {
            params: i,
            slides: s,
            slidesGrid: n,
            slidesSizesGrid: r,
            size: o,
            activeIndex: a,
          } = this;
          let l = 1;
          if (i.centeredSlides) {
            let e,
              t = s[a].swiperSlideSize;
            for (let i = a + 1; i < s.length; i += 1)
              s[i] &&
                !e &&
                ((t += s[i].swiperSlideSize), (l += 1), t > o && (e = !0));
            for (let i = a - 1; i >= 0; i -= 1)
              s[i] &&
                !e &&
                ((t += s[i].swiperSlideSize), (l += 1), t > o && (e = !0));
          } else if ("current" === e)
            for (let e = a + 1; e < s.length; e += 1) {
              (t ? n[e] + r[e] - n[a] < o : n[e] - n[a] < o) && (l += 1);
            }
          else
            for (let e = a - 1; e >= 0; e -= 1) {
              n[a] - n[e] < o && (l += 1);
            }
          return l;
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const { snapGrid: t, params: i } = e;
          function s() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
          }
          let n;
          i.breakpoints && e.setBreakpoint(),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.params.freeMode && e.params.freeMode.enabled
              ? (s(), e.params.autoHeight && e.updateAutoHeight())
              : ((n =
                  ("auto" === e.params.slidesPerView ||
                    e.params.slidesPerView > 1) &&
                  e.isEnd &&
                  !e.params.centeredSlides
                    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                    : e.slideTo(e.activeIndex, 0, !1, !0)),
                n || s()),
            i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit("update");
        }
        changeDirection(e, t = !0) {
          const i = this,
            s = i.params.direction;
          return (
            e || (e = "horizontal" === s ? "vertical" : "horizontal"),
            e === s ||
              ("horizontal" !== e && "vertical" !== e) ||
              (i.$el
                .removeClass(`${i.params.containerModifierClass}${s}`)
                .addClass(`${i.params.containerModifierClass}${e}`),
              i.emitContainerClasses(),
              (i.params.direction = e),
              i.slides.each((t) => {
                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
              }),
              i.emit("changeDirection"),
              t && i.update()),
            i
          );
        }
        changeLanguageDirection(e) {
          const t = this;
          (t.rtl && "rtl" === e) ||
            (!t.rtl && "ltr" === e) ||
            ((t.rtl = "rtl" === e),
            (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
            t.rtl
              ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`),
                (t.el.dir = "rtl"))
              : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`),
                (t.el.dir = "ltr")),
            t.update());
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          const i = S(e || t.params.el);
          if (!(e = i[0])) return !1;
          e.swiper = t;
          const s = () =>
            `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
          let n = (() => {
            if (e && e.shadowRoot && e.shadowRoot.querySelector) {
              const t = S(e.shadowRoot.querySelector(s()));
              return (t.children = (e) => i.children(e)), t;
            }
            return i.children ? i.children(s()) : S(i).children(s());
          })();
          if (0 === n.length && t.params.createElements) {
            const e = h().createElement("div");
            (n = S(e)),
              (e.className = t.params.wrapperClass),
              i.append(e),
              i.children(`.${t.params.slideClass}`).each((e) => {
                n.append(e);
              });
          }
          return (
            Object.assign(t, {
              $el: i,
              el: e,
              $wrapperEl: n,
              wrapperEl: n[0],
              mounted: !0,
              rtl:
                "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
              rtlTranslate:
                "horizontal" === t.params.direction &&
                ("rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction")),
              wrongRTL: "-webkit-box" === n.css("display"),
            }),
            !0
          );
        }
        init(e) {
          const t = this;
          if (t.initialized) return t;
          return (
            !1 === t.mount(e) ||
              (t.emit("beforeInit"),
              t.params.breakpoints && t.setBreakpoint(),
              t.addClasses(),
              t.params.loop && t.loopCreate(),
              t.updateSize(),
              t.updateSlides(),
              t.params.watchOverflow && t.checkOverflow(),
              t.params.grabCursor && t.enabled && t.setGrabCursor(),
              t.params.preloadImages && t.preloadImages(),
              t.params.loop
                ? t.slideTo(
                    t.params.initialSlide + t.loopedSlides,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  )
                : t.slideTo(
                    t.params.initialSlide,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  ),
              t.attachEvents(),
              (t.initialized = !0),
              t.emit("init"),
              t.emit("afterInit")),
            t
          );
        }
        destroy(e = !0, t = !0) {
          const i = this,
            { params: s, $el: n, $wrapperEl: r, slides: o } = i;
          return (
            void 0 === i.params ||
              i.destroyed ||
              (i.emit("beforeDestroy"),
              (i.initialized = !1),
              i.detachEvents(),
              s.loop && i.loopDestroy(),
              t &&
                (i.removeClasses(),
                n.removeAttr("style"),
                r.removeAttr("style"),
                o &&
                  o.length &&
                  o
                    .removeClass(
                      [
                        s.slideVisibleClass,
                        s.slideActiveClass,
                        s.slideNextClass,
                        s.slidePrevClass,
                      ].join(" ")
                    )
                    .removeAttr("style")
                    .removeAttr("data-swiper-slide-index")),
              i.emit("destroy"),
              Object.keys(i.eventsListeners).forEach((e) => {
                i.off(e);
              }),
              !1 !== e &&
                ((i.$el[0].swiper = null),
                (function (e) {
                  const t = e;
                  Object.keys(t).forEach((e) => {
                    try {
                      t[e] = null;
                    } catch (e) {}
                    try {
                      delete t[e];
                    } catch (e) {}
                  });
                })(i)),
              (i.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          I(ne, e);
        }
        static get extendedDefaults() {
          return ne;
        }
        static get defaults() {
          return te;
        }
        static installModule(e) {
          re.prototype.__modules__ || (re.prototype.__modules__ = []);
          const t = re.prototype.__modules__;
          "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
        }
        static use(e) {
          return Array.isArray(e)
            ? (e.forEach((e) => re.installModule(e)), re)
            : (re.installModule(e), re);
        }
      }
      Object.keys(se).forEach((e) => {
        Object.keys(se[e]).forEach((t) => {
          re.prototype[t] = se[e][t];
        });
      }),
        re.use([
          function ({ swiper: e, on: t, emit: i }) {
            const s = f();
            let n = null,
              r = null;
            const o = () => {
                e &&
                  !e.destroyed &&
                  e.initialized &&
                  (i("beforeResize"), i("resize"));
              },
              a = () => {
                e && !e.destroyed && e.initialized && i("orientationchange");
              };
            t("init", () => {
              e.params.resizeObserver && void 0 !== s.ResizeObserver
                ? e &&
                  !e.destroyed &&
                  e.initialized &&
                  ((n = new ResizeObserver((t) => {
                    r = s.requestAnimationFrame(() => {
                      const { width: i, height: s } = e;
                      let n = i,
                        r = s;
                      t.forEach(
                        ({ contentBoxSize: t, contentRect: i, target: s }) => {
                          (s && s !== e.el) ||
                            ((n = i ? i.width : (t[0] || t).inlineSize),
                            (r = i ? i.height : (t[0] || t).blockSize));
                        }
                      ),
                        (n === i && r === s) || o();
                    });
                  })),
                  n.observe(e.el))
                : (s.addEventListener("resize", o),
                  s.addEventListener("orientationchange", a));
            }),
              t("destroy", () => {
                r && s.cancelAnimationFrame(r),
                  n && n.unobserve && e.el && (n.unobserve(e.el), (n = null)),
                  s.removeEventListener("resize", o),
                  s.removeEventListener("orientationchange", a);
              });
          },
          function ({ swiper: e, extendParams: t, on: i, emit: s }) {
            const n = [],
              r = f(),
              o = (e, t = {}) => {
                const i = new (r.MutationObserver || r.WebkitMutationObserver)(
                  (e) => {
                    if (1 === e.length) return void s("observerUpdate", e[0]);
                    const t = function () {
                      s("observerUpdate", e[0]);
                    };
                    r.requestAnimationFrame
                      ? r.requestAnimationFrame(t)
                      : r.setTimeout(t, 0);
                  }
                );
                i.observe(e, {
                  attributes: void 0 === t.attributes || t.attributes,
                  childList: void 0 === t.childList || t.childList,
                  characterData: void 0 === t.characterData || t.characterData,
                }),
                  n.push(i);
              };
            t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              i("init", () => {
                if (e.params.observer) {
                  if (e.params.observeParents) {
                    const t = e.$el.parents();
                    for (let e = 0; e < t.length; e += 1) o(t[e]);
                  }
                  o(e.$el[0], { childList: e.params.observeSlideChildren }),
                    o(e.$wrapperEl[0], { attributes: !1 });
                }
              }),
              i("destroy", () => {
                n.forEach((e) => {
                  e.disconnect();
                }),
                  n.splice(0, n.length);
              });
          },
        ]);
      const oe = re;
      function ae({ swiper: e, extendParams: t, on: i, emit: s }) {
        function n(t) {
          let i;
          return (
            t &&
              ((i = S(t)),
              e.params.uniqueNavElements &&
                "string" == typeof t &&
                i.length > 1 &&
                1 === e.$el.find(t).length &&
                (i = e.$el.find(t))),
            i
          );
        }
        function r(t, i) {
          const s = e.params.navigation;
          t &&
            t.length > 0 &&
            (t[i ? "addClass" : "removeClass"](s.disabledClass),
            t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = i),
            e.params.watchOverflow &&
              e.enabled &&
              t[e.isLocked ? "addClass" : "removeClass"](s.lockClass));
        }
        function o() {
          if (e.params.loop) return;
          const { $nextEl: t, $prevEl: i } = e.navigation;
          r(i, e.isBeginning && !e.params.rewind),
            r(t, e.isEnd && !e.params.rewind);
        }
        function a(t) {
          t.preventDefault(),
            (!e.isBeginning || e.params.loop || e.params.rewind) &&
              (e.slidePrev(), s("navigationPrev"));
        }
        function l(t) {
          t.preventDefault(),
            (!e.isEnd || e.params.loop || e.params.rewind) &&
              (e.slideNext(), s("navigationNext"));
        }
        function c() {
          const t = e.params.navigation;
          if (
            ((e.params.navigation = (function (e, t, i, s) {
              const n = h();
              return (
                e.params.createElements &&
                  Object.keys(s).forEach((r) => {
                    if (!i[r] && !0 === i.auto) {
                      let o = e.$el.children(`.${s[r]}`)[0];
                      o ||
                        ((o = n.createElement("div")),
                        (o.className = s[r]),
                        e.$el.append(o)),
                        (i[r] = o),
                        (t[r] = o);
                    }
                  }),
                i
              );
            })(e, e.originalParams.navigation, e.params.navigation, {
              nextEl: "swiper-button-next",
              prevEl: "swiper-button-prev",
            })),
            !t.nextEl && !t.prevEl)
          )
            return;
          const i = n(t.nextEl),
            s = n(t.prevEl);
          i && i.length > 0 && i.on("click", l),
            s && s.length > 0 && s.on("click", a),
            Object.assign(e.navigation, {
              $nextEl: i,
              nextEl: i && i[0],
              $prevEl: s,
              prevEl: s && s[0],
            }),
            e.enabled ||
              (i && i.addClass(t.lockClass), s && s.addClass(t.lockClass));
        }
        function d() {
          const { $nextEl: t, $prevEl: i } = e.navigation;
          t &&
            t.length &&
            (t.off("click", l),
            t.removeClass(e.params.navigation.disabledClass)),
            i &&
              i.length &&
              (i.off("click", a),
              i.removeClass(e.params.navigation.disabledClass));
        }
        t({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled",
          },
        }),
          (e.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null,
          }),
          i("init", () => {
            !1 === e.params.navigation.enabled ? u() : (c(), o());
          }),
          i("toEdge fromEdge lock unlock", () => {
            o();
          }),
          i("destroy", () => {
            d();
          }),
          i("enable disable", () => {
            const { $nextEl: t, $prevEl: i } = e.navigation;
            t &&
              t[e.enabled ? "removeClass" : "addClass"](
                e.params.navigation.lockClass
              ),
              i &&
                i[e.enabled ? "removeClass" : "addClass"](
                  e.params.navigation.lockClass
                );
          }),
          i("click", (t, i) => {
            const { $nextEl: n, $prevEl: r } = e.navigation,
              o = i.target;
            if (e.params.navigation.hideOnClick && !S(o).is(r) && !S(o).is(n)) {
              if (
                e.pagination &&
                e.params.pagination &&
                e.params.pagination.clickable &&
                (e.pagination.el === o || e.pagination.el.contains(o))
              )
                return;
              let t;
              n
                ? (t = n.hasClass(e.params.navigation.hiddenClass))
                : r && (t = r.hasClass(e.params.navigation.hiddenClass)),
                s(!0 === t ? "navigationShow" : "navigationHide"),
                n && n.toggleClass(e.params.navigation.hiddenClass),
                r && r.toggleClass(e.params.navigation.hiddenClass);
            }
          });
        const u = () => {
          e.$el.addClass(e.params.navigation.navigationDisabledClass), d();
        };
        Object.assign(e.navigation, {
          enable: () => {
            e.$el.removeClass(e.params.navigation.navigationDisabledClass),
              c(),
              o();
          },
          disable: u,
          update: o,
          init: c,
          destroy: d,
        });
      }
      function le({ swiper: e, extendParams: t, on: i, emit: s }) {
        let n;
        function r() {
          if (!e.size)
            return (e.autoplay.running = !1), void (e.autoplay.paused = !1);
          const t = e.slides.eq(e.activeIndex);
          let i = e.params.autoplay.delay;
          t.attr("data-swiper-autoplay") &&
            (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
            clearTimeout(n),
            (n = E(() => {
              let t;
              e.params.autoplay.reverseDirection
                ? e.params.loop
                  ? (e.loopFix(),
                    (t = e.slidePrev(e.params.speed, !0, !0)),
                    s("autoplay"))
                  : e.isBeginning
                  ? e.params.autoplay.stopOnLastSlide
                    ? a()
                    : ((t = e.slideTo(
                        e.slides.length - 1,
                        e.params.speed,
                        !0,
                        !0
                      )),
                      s("autoplay"))
                  : ((t = e.slidePrev(e.params.speed, !0, !0)), s("autoplay"))
                : e.params.loop
                ? (e.loopFix(),
                  (t = e.slideNext(e.params.speed, !0, !0)),
                  s("autoplay"))
                : e.isEnd
                ? e.params.autoplay.stopOnLastSlide
                  ? a()
                  : ((t = e.slideTo(0, e.params.speed, !0, !0)), s("autoplay"))
                : ((t = e.slideNext(e.params.speed, !0, !0)), s("autoplay")),
                ((e.params.cssMode && e.autoplay.running) || !1 === t) && r();
            }, i));
        }
        function o() {
          return (
            void 0 === n &&
            !e.autoplay.running &&
            ((e.autoplay.running = !0), s("autoplayStart"), r(), !0)
          );
        }
        function a() {
          return (
            !!e.autoplay.running &&
            void 0 !== n &&
            (n && (clearTimeout(n), (n = void 0)),
            (e.autoplay.running = !1),
            s("autoplayStop"),
            !0)
          );
        }
        function l(t) {
          e.autoplay.running &&
            (e.autoplay.paused ||
              (n && clearTimeout(n),
              (e.autoplay.paused = !0),
              0 !== t && e.params.autoplay.waitForTransition
                ? ["transitionend", "webkitTransitionEnd"].forEach((t) => {
                    e.$wrapperEl[0].addEventListener(t, d);
                  })
                : ((e.autoplay.paused = !1), r())));
        }
        function c() {
          const t = h();
          "hidden" === t.visibilityState && e.autoplay.running && l(),
            "visible" === t.visibilityState &&
              e.autoplay.paused &&
              (r(), (e.autoplay.paused = !1));
        }
        function d(t) {
          e &&
            !e.destroyed &&
            e.$wrapperEl &&
            t.target === e.$wrapperEl[0] &&
            (["transitionend", "webkitTransitionEnd"].forEach((t) => {
              e.$wrapperEl[0].removeEventListener(t, d);
            }),
            (e.autoplay.paused = !1),
            e.autoplay.running ? r() : a());
        }
        function u() {
          e.params.autoplay.disableOnInteraction
            ? a()
            : (s("autoplayPause"), l()),
            ["transitionend", "webkitTransitionEnd"].forEach((t) => {
              e.$wrapperEl[0].removeEventListener(t, d);
            });
        }
        function p() {
          e.params.autoplay.disableOnInteraction ||
            ((e.autoplay.paused = !1), s("autoplayResume"), r());
        }
        (e.autoplay = { running: !1, paused: !1 }),
          t({
            autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !0,
              stopOnLastSlide: !1,
              reverseDirection: !1,
              pauseOnMouseEnter: !1,
            },
          }),
          i("init", () => {
            if (e.params.autoplay.enabled) {
              o();
              h().addEventListener("visibilitychange", c),
                e.params.autoplay.pauseOnMouseEnter &&
                  (e.$el.on("mouseenter", u), e.$el.on("mouseleave", p));
            }
          }),
          i("beforeTransitionStart", (t, i, s) => {
            e.autoplay.running &&
              (s || !e.params.autoplay.disableOnInteraction
                ? e.autoplay.pause(i)
                : a());
          }),
          i("sliderFirstMove", () => {
            e.autoplay.running &&
              (e.params.autoplay.disableOnInteraction ? a() : l());
          }),
          i("touchEnd", () => {
            e.params.cssMode &&
              e.autoplay.paused &&
              !e.params.autoplay.disableOnInteraction &&
              r();
          }),
          i("destroy", () => {
            e.$el.off("mouseenter", u),
              e.$el.off("mouseleave", p),
              e.autoplay.running && a();
            h().removeEventListener("visibilitychange", c);
          }),
          Object.assign(e.autoplay, { pause: l, run: r, start: o, stop: a });
      }
      function ce(e, t) {
        return e.transformEl
          ? t
              .find(e.transformEl)
              .css({
                "backface-visibility": "hidden",
                "-webkit-backface-visibility": "hidden",
              })
          : t;
      }
      function de({ swiper: e, extendParams: t, on: i }) {
        t({ fadeEffect: { crossFade: !1, transformEl: null } });
        !(function (e) {
          const {
            effect: t,
            swiper: i,
            on: s,
            setTranslate: n,
            setTransition: r,
            overwriteParams: o,
            perspective: a,
            recreateShadows: l,
            getEffectParams: c,
          } = e;
          let d;
          s("beforeInit", () => {
            if (i.params.effect !== t) return;
            i.classNames.push(`${i.params.containerModifierClass}${t}`),
              a &&
                a() &&
                i.classNames.push(`${i.params.containerModifierClass}3d`);
            const e = o ? o() : {};
            Object.assign(i.params, e), Object.assign(i.originalParams, e);
          }),
            s("setTranslate", () => {
              i.params.effect === t && n();
            }),
            s("setTransition", (e, s) => {
              i.params.effect === t && r(s);
            }),
            s("transitionEnd", () => {
              if (i.params.effect === t && l) {
                if (!c || !c().slideShadows) return;
                i.slides.each((e) => {
                  i.$(e)
                    .find(
                      ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                    )
                    .remove();
                }),
                  l();
              }
            }),
            s("virtualUpdate", () => {
              i.params.effect === t &&
                (i.slides.length || (d = !0),
                requestAnimationFrame(() => {
                  d && i.slides && i.slides.length && (n(), (d = !1));
                }));
            });
        })({
          effect: "fade",
          swiper: e,
          on: i,
          setTranslate: () => {
            const { slides: t } = e,
              i = e.params.fadeEffect;
            for (let s = 0; s < t.length; s += 1) {
              const t = e.slides.eq(s);
              let n = -t[0].swiperSlideOffset;
              e.params.virtualTranslate || (n -= e.translate);
              let r = 0;
              e.isHorizontal() || ((r = n), (n = 0));
              const o = e.params.fadeEffect.crossFade
                ? Math.max(1 - Math.abs(t[0].progress), 0)
                : 1 + Math.min(Math.max(t[0].progress, -1), 0);
              ce(i, t)
                .css({ opacity: o })
                .transform(`translate3d(${n}px, ${r}px, 0px)`);
            }
          },
          setTransition: (t) => {
            const { transformEl: i } = e.params.fadeEffect;
            (i ? e.slides.find(i) : e.slides).transition(t),
              (function ({
                swiper: e,
                duration: t,
                transformEl: i,
                allSlides: s,
              }) {
                const { slides: n, activeIndex: r, $wrapperEl: o } = e;
                if (e.params.virtualTranslate && 0 !== t) {
                  let t,
                    a = !1;
                  (t = s ? (i ? n.find(i) : n) : i ? n.eq(r).find(i) : n.eq(r)),
                    t.transitionEnd(() => {
                      if (a) return;
                      if (!e || e.destroyed) return;
                      (a = !0), (e.animating = !1);
                      const t = ["webkitTransitionEnd", "transitionend"];
                      for (let e = 0; e < t.length; e += 1) o.trigger(t[e]);
                    });
                }
              })({ swiper: e, duration: t, transformEl: i, allSlides: !0 });
          },
          overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !e.params.cssMode,
          }),
        });
      }
      function ue() {
        let e = document.querySelectorAll(
          '[class*="__swiper"]:not(.swiper-wrapper)'
        );
        e &&
          e.forEach((e) => {
            e.parentElement.classList.add("swiper"),
              e.classList.add("swiper-wrapper");
            for (const t of e.children) t.classList.add("swiper-slide");
          });
      }
      window.addEventListener("load", function (e) {
        ue(),
          document.querySelector(".about__slider") &&
            new oe(".about__slider", {
              modules: [ae, le, de],
              observer: !0,
              observeParents: !0,
              slidesPerView: 1,
              spaceBetween: 15,
              autoHeight: !1,
              speed: 800,
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
              breakpoints: {
                320: { slidesPerView: "auto", spaceBetween: 15 },
                768: { slidesPerView: 2, spaceBetween: 34 },
              },
              on: {},
            }),
          me(),
          ve();
      });
      const he = window.matchMedia("(min-width: 479.98px)"),
        pe = window.matchMedia("(min-width: 1023.98px)");
      let fe, ge;
      const me = function () {
        !0 === he.matches
          ? void 0 !== ge && ge.destroy(!0, !0)
          : !1 === he.matches &&
            document.querySelector(".work-page__slider") &&
            (ge = new oe(".work-page__slider", {
              modules: [le],
              slidesPerView: 1,
              spaceBetween: 15,
              autoplay: { delay: 2e3, disableOnInteraction: !1 },
              speed: 800,
              loop: !0,
            }));
      };
      he.addEventListener("change", me);
      const ve = function () {
        !0 === pe.matches
          ? void 0 !== fe && fe.destroy(!0, !0)
          : !1 === pe.matches &&
            document.querySelector(".dishes__slider") &&
            (fe = new oe(".dishes__slider", {
              modules: [le],
              slidesPerView: 1.5,
              spaceBetween: 15,
              breakpoints: {
                320: { slidesPerView: 1.15, spaceBetween: 15 },
                479: { slidesPerView: 1.4 },
                560: { slidesPerView: 1.6 },
                768: { slidesPerView: 2.4, spaceBetween: 15 },
                992: { slidesPerView: 3, spaceBetween: 15 },
              },
              speed: 800,
              autoHeight: !1,
            }));
      };
      pe.addEventListener("change", ve);
      i(2352), i(3542);
      var be,
        ye = i(1807),
        we = i.n(ye),
        xe =
          (i(4249),
          i(7692),
          i(8165),
          i(7543),
          i(3344),
          i(7323),
          i(4079),
          i(3096)),
        Se = i.n(xe),
        Ee = i(1296),
        Te = i.n(Ee),
        Ce = i(773),
        Oe = i.n(Ce),
        Ie = [],
        Le = "ResizeObserver loop completed with undelivered notifications.";
      !(function (e) {
        (e.BORDER_BOX = "border-box"),
          (e.CONTENT_BOX = "content-box"),
          (e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box");
      })(be || (be = {}));
      var ke,
        Me = function (e) {
          return Object.freeze(e);
        },
        Ae = function (e, t) {
          (this.inlineSize = e), (this.blockSize = t), Me(this);
        },
        Pe = (function () {
          function e(e, t, i, s) {
            return (
              (this.x = e),
              (this.y = t),
              (this.width = i),
              (this.height = s),
              (this.top = this.y),
              (this.left = this.x),
              (this.bottom = this.top + this.height),
              (this.right = this.left + this.width),
              Me(this)
            );
          }
          return (
            (e.prototype.toJSON = function () {
              var e = this;
              return {
                x: e.x,
                y: e.y,
                top: e.top,
                right: e.right,
                bottom: e.bottom,
                left: e.left,
                width: e.width,
                height: e.height,
              };
            }),
            (e.fromRect = function (t) {
              return new e(t.x, t.y, t.width, t.height);
            }),
            e
          );
        })(),
        ze = function (e) {
          return e instanceof SVGElement && "getBBox" in e;
        },
        _e = function (e) {
          if (ze(e)) {
            var t = e.getBBox(),
              i = t.width,
              s = t.height;
            return !i && !s;
          }
          var n = e,
            r = n.offsetWidth,
            o = n.offsetHeight;
          return !(r || o || e.getClientRects().length);
        },
        De = function (e) {
          var t;
          if (e instanceof Element) return !0;
          var i =
            null === (t = null == e ? void 0 : e.ownerDocument) || void 0 === t
              ? void 0
              : t.defaultView;
          return !!(i && e instanceof i.Element);
        },
        $e = "undefined" != typeof window ? window : {},
        Be = new WeakMap(),
        Ne = /auto|scroll/,
        je = /^tb|vertical/,
        Fe = /msie|trident/i.test($e.navigator && $e.navigator.userAgent),
        Re = function (e) {
          return parseFloat(e || "0");
        },
        We = function (e, t, i) {
          return (
            void 0 === e && (e = 0),
            void 0 === t && (t = 0),
            void 0 === i && (i = !1),
            new Ae((i ? t : e) || 0, (i ? e : t) || 0)
          );
        },
        Ge = Me({
          devicePixelContentBoxSize: We(),
          borderBoxSize: We(),
          contentBoxSize: We(),
          contentRect: new Pe(0, 0, 0, 0),
        }),
        He = function (e, t) {
          if ((void 0 === t && (t = !1), Be.has(e) && !t)) return Be.get(e);
          if (_e(e)) return Be.set(e, Ge), Ge;
          var i = getComputedStyle(e),
            s = ze(e) && e.ownerSVGElement && e.getBBox(),
            n = !Fe && "border-box" === i.boxSizing,
            r = je.test(i.writingMode || ""),
            o = !s && Ne.test(i.overflowY || ""),
            a = !s && Ne.test(i.overflowX || ""),
            l = s ? 0 : Re(i.paddingTop),
            c = s ? 0 : Re(i.paddingRight),
            d = s ? 0 : Re(i.paddingBottom),
            u = s ? 0 : Re(i.paddingLeft),
            h = s ? 0 : Re(i.borderTopWidth),
            p = s ? 0 : Re(i.borderRightWidth),
            f = s ? 0 : Re(i.borderBottomWidth),
            g = u + c,
            m = l + d,
            v = (s ? 0 : Re(i.borderLeftWidth)) + p,
            b = h + f,
            y = a ? e.offsetHeight - b - e.clientHeight : 0,
            w = o ? e.offsetWidth - v - e.clientWidth : 0,
            x = n ? g + v : 0,
            S = n ? m + b : 0,
            E = s ? s.width : Re(i.width) - x - w,
            T = s ? s.height : Re(i.height) - S - y,
            C = E + g + w + v,
            O = T + m + y + b,
            I = Me({
              devicePixelContentBoxSize: We(
                Math.round(E * devicePixelRatio),
                Math.round(T * devicePixelRatio),
                r
              ),
              borderBoxSize: We(C, O, r),
              contentBoxSize: We(E, T, r),
              contentRect: new Pe(u, l, E, T),
            });
          return Be.set(e, I), I;
        },
        Ve = function (e, t, i) {
          var s = He(e, i),
            n = s.borderBoxSize,
            r = s.contentBoxSize,
            o = s.devicePixelContentBoxSize;
          switch (t) {
            case be.DEVICE_PIXEL_CONTENT_BOX:
              return o;
            case be.BORDER_BOX:
              return n;
            default:
              return r;
          }
        },
        qe = function (e) {
          var t = He(e);
          (this.target = e),
            (this.contentRect = t.contentRect),
            (this.borderBoxSize = Me([t.borderBoxSize])),
            (this.contentBoxSize = Me([t.contentBoxSize])),
            (this.devicePixelContentBoxSize = Me([
              t.devicePixelContentBoxSize,
            ]));
        },
        Xe = function (e) {
          if (_e(e)) return 1 / 0;
          for (var t = 0, i = e.parentNode; i; ) (t += 1), (i = i.parentNode);
          return t;
        },
        Ye = function () {
          var e = 1 / 0,
            t = [];
          Ie.forEach(function (i) {
            if (0 !== i.activeTargets.length) {
              var s = [];
              i.activeTargets.forEach(function (t) {
                var i = new qe(t.target),
                  n = Xe(t.target);
                s.push(i),
                  (t.lastReportedSize = Ve(t.target, t.observedBox)),
                  n < e && (e = n);
              }),
                t.push(function () {
                  i.callback.call(i.observer, s, i.observer);
                }),
                i.activeTargets.splice(0, i.activeTargets.length);
            }
          });
          for (var i = 0, s = t; i < s.length; i++) {
            (0, s[i])();
          }
          return e;
        },
        Ue = function (e) {
          Ie.forEach(function (t) {
            t.activeTargets.splice(0, t.activeTargets.length),
              t.skippedTargets.splice(0, t.skippedTargets.length),
              t.observationTargets.forEach(function (i) {
                i.isActive() &&
                  (Xe(i.target) > e
                    ? t.activeTargets.push(i)
                    : t.skippedTargets.push(i));
              });
          });
        },
        Ke = function () {
          var e = 0;
          for (
            Ue(e);
            Ie.some(function (e) {
              return e.activeTargets.length > 0;
            });

          )
            (e = Ye()), Ue(e);
          return (
            Ie.some(function (e) {
              return e.skippedTargets.length > 0;
            }) &&
              (function () {
                var e;
                "function" == typeof ErrorEvent
                  ? (e = new ErrorEvent("error", { message: Le }))
                  : ((e = document.createEvent("Event")).initEvent(
                      "error",
                      !1,
                      !1
                    ),
                    (e.message = Le)),
                  window.dispatchEvent(e);
              })(),
            e > 0
          );
        },
        Qe = [],
        Je = function (e) {
          if (!ke) {
            var t = 0,
              i = document.createTextNode("");
            new MutationObserver(function () {
              return Qe.splice(0).forEach(function (e) {
                return e();
              });
            }).observe(i, { characterData: !0 }),
              (ke = function () {
                i.textContent = "".concat(t ? t-- : t++);
              });
          }
          Qe.push(e), ke();
        },
        Ze = 0,
        et = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
        tt = [
          "resize",
          "load",
          "transitionend",
          "animationend",
          "animationstart",
          "animationiteration",
          "keyup",
          "keydown",
          "mouseup",
          "mousedown",
          "mouseover",
          "mouseout",
          "blur",
          "focus",
        ],
        it = function (e) {
          return void 0 === e && (e = 0), Date.now() + e;
        },
        st = !1,
        nt = new ((function () {
          function e() {
            var e = this;
            (this.stopped = !0),
              (this.listener = function () {
                return e.schedule();
              });
          }
          return (
            (e.prototype.run = function (e) {
              var t = this;
              if ((void 0 === e && (e = 250), !st)) {
                st = !0;
                var i,
                  s = it(e);
                (i = function () {
                  var i = !1;
                  try {
                    i = Ke();
                  } finally {
                    if (((st = !1), (e = s - it()), !Ze)) return;
                    i ? t.run(1e3) : e > 0 ? t.run(e) : t.start();
                  }
                }),
                  Je(function () {
                    requestAnimationFrame(i);
                  });
              }
            }),
            (e.prototype.schedule = function () {
              this.stop(), this.run();
            }),
            (e.prototype.observe = function () {
              var e = this,
                t = function () {
                  return e.observer && e.observer.observe(document.body, et);
                };
              document.body ? t() : $e.addEventListener("DOMContentLoaded", t);
            }),
            (e.prototype.start = function () {
              var e = this;
              this.stopped &&
                ((this.stopped = !1),
                (this.observer = new MutationObserver(this.listener)),
                this.observe(),
                tt.forEach(function (t) {
                  return $e.addEventListener(t, e.listener, !0);
                }));
            }),
            (e.prototype.stop = function () {
              var e = this;
              this.stopped ||
                (this.observer && this.observer.disconnect(),
                tt.forEach(function (t) {
                  return $e.removeEventListener(t, e.listener, !0);
                }),
                (this.stopped = !0));
            }),
            e
          );
        })())(),
        rt = function (e) {
          !Ze && e > 0 && nt.start(), !(Ze += e) && nt.stop();
        },
        ot = (function () {
          function e(e, t) {
            (this.target = e),
              (this.observedBox = t || be.CONTENT_BOX),
              (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
          }
          return (
            (e.prototype.isActive = function () {
              var e,
                t = Ve(this.target, this.observedBox, !0);
              return (
                (e = this.target),
                ze(e) ||
                  (function (e) {
                    switch (e.tagName) {
                      case "INPUT":
                        if ("image" !== e.type) break;
                      case "VIDEO":
                      case "AUDIO":
                      case "EMBED":
                      case "OBJECT":
                      case "CANVAS":
                      case "IFRAME":
                      case "IMG":
                        return !0;
                    }
                    return !1;
                  })(e) ||
                  "inline" !== getComputedStyle(e).display ||
                  (this.lastReportedSize = t),
                this.lastReportedSize.inlineSize !== t.inlineSize ||
                  this.lastReportedSize.blockSize !== t.blockSize
              );
            }),
            e
          );
        })(),
        at = function (e, t) {
          (this.activeTargets = []),
            (this.skippedTargets = []),
            (this.observationTargets = []),
            (this.observer = e),
            (this.callback = t);
        },
        lt = new WeakMap(),
        ct = function (e, t) {
          for (var i = 0; i < e.length; i += 1) if (e[i].target === t) return i;
          return -1;
        },
        dt = (function () {
          function e() {}
          return (
            (e.connect = function (e, t) {
              var i = new at(e, t);
              lt.set(e, i);
            }),
            (e.observe = function (e, t, i) {
              var s = lt.get(e),
                n = 0 === s.observationTargets.length;
              ct(s.observationTargets, t) < 0 &&
                (n && Ie.push(s),
                s.observationTargets.push(new ot(t, i && i.box)),
                rt(1),
                nt.schedule());
            }),
            (e.unobserve = function (e, t) {
              var i = lt.get(e),
                s = ct(i.observationTargets, t),
                n = 1 === i.observationTargets.length;
              s >= 0 &&
                (n && Ie.splice(Ie.indexOf(i), 1),
                i.observationTargets.splice(s, 1),
                rt(-1));
            }),
            (e.disconnect = function (e) {
              var t = this,
                i = lt.get(e);
              i.observationTargets.slice().forEach(function (i) {
                return t.unobserve(e, i.target);
              }),
                i.activeTargets.splice(0, i.activeTargets.length);
            }),
            e
          );
        })(),
        ut = (function () {
          function e(e) {
            if (0 === arguments.length)
              throw new TypeError(
                "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present."
              );
            if ("function" != typeof e)
              throw new TypeError(
                "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."
              );
            dt.connect(this, e);
          }
          return (
            (e.prototype.observe = function (e, t) {
              if (0 === arguments.length)
                throw new TypeError(
                  "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present."
                );
              if (!De(e))
                throw new TypeError(
                  "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element"
                );
              dt.observe(this, e, t);
            }),
            (e.prototype.unobserve = function (e) {
              if (0 === arguments.length)
                throw new TypeError(
                  "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present."
                );
              if (!De(e))
                throw new TypeError(
                  "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element"
                );
              dt.unobserve(this, e);
            }),
            (e.prototype.disconnect = function () {
              dt.disconnect(this);
            }),
            (e.toString = function () {
              return "function ResizeObserver () { [polyfill code] }";
            }),
            e
          );
        })(),
        ht =
          (i(7985),
          i(9989),
          i(8307),
          i(6618),
          i(4390),
          function (e) {
            return Array.prototype.reduce.call(
              e,
              function (e, t) {
                var i = t.name.match(/data-simplebar-(.+)/);
                if (i) {
                  var s = i[1].replace(/\W+(.)/g, function (e, t) {
                    return t.toUpperCase();
                  });
                  switch (t.value) {
                    case "true":
                      e[s] = !0;
                      break;
                    case "false":
                      e[s] = !1;
                      break;
                    case void 0:
                      e[s] = !0;
                      break;
                    default:
                      e[s] = t.value;
                  }
                }
                return e;
              },
              {}
            );
          });
      function pt(e) {
        return e && e.ownerDocument && e.ownerDocument.defaultView
          ? e.ownerDocument.defaultView
          : window;
      }
      function ft(e) {
        return e && e.ownerDocument ? e.ownerDocument : document;
      }
      var gt = null,
        mt = null;
      function vt(e) {
        if (null === gt) {
          var t = ft(e);
          if (void 0 === t) return (gt = 0);
          var i = t.body,
            s = t.createElement("div");
          s.classList.add("simplebar-hide-scrollbar"), i.appendChild(s);
          var n = s.getBoundingClientRect().right;
          i.removeChild(s), (gt = n);
        }
        return gt;
      }
      we() &&
        window.addEventListener("resize", function () {
          mt !== window.devicePixelRatio &&
            ((mt = window.devicePixelRatio), (gt = null));
        });
      var bt = (function () {
        function e(t, i) {
          var s = this;
          (this.onScroll = function () {
            var e = pt(s.el);
            s.scrollXTicking ||
              (e.requestAnimationFrame(s.scrollX), (s.scrollXTicking = !0)),
              s.scrollYTicking ||
                (e.requestAnimationFrame(s.scrollY), (s.scrollYTicking = !0));
          }),
            (this.scrollX = function () {
              s.axis.x.isOverflowing &&
                (s.showScrollbar("x"), s.positionScrollbar("x")),
                (s.scrollXTicking = !1);
            }),
            (this.scrollY = function () {
              s.axis.y.isOverflowing &&
                (s.showScrollbar("y"), s.positionScrollbar("y")),
                (s.scrollYTicking = !1);
            }),
            (this.onMouseEnter = function () {
              s.showScrollbar("x"), s.showScrollbar("y");
            }),
            (this.onMouseMove = function (e) {
              (s.mouseX = e.clientX),
                (s.mouseY = e.clientY),
                (s.axis.x.isOverflowing || s.axis.x.forceVisible) &&
                  s.onMouseMoveForAxis("x"),
                (s.axis.y.isOverflowing || s.axis.y.forceVisible) &&
                  s.onMouseMoveForAxis("y");
            }),
            (this.onMouseLeave = function () {
              s.onMouseMove.cancel(),
                (s.axis.x.isOverflowing || s.axis.x.forceVisible) &&
                  s.onMouseLeaveForAxis("x"),
                (s.axis.y.isOverflowing || s.axis.y.forceVisible) &&
                  s.onMouseLeaveForAxis("y"),
                (s.mouseX = -1),
                (s.mouseY = -1);
            }),
            (this.onWindowResize = function () {
              (s.scrollbarWidth = s.getScrollbarWidth()),
                s.hideNativeScrollbar();
            }),
            (this.hideScrollbars = function () {
              (s.axis.x.track.rect = s.axis.x.track.el.getBoundingClientRect()),
                (s.axis.y.track.rect =
                  s.axis.y.track.el.getBoundingClientRect()),
                s.isWithinBounds(s.axis.y.track.rect) ||
                  (s.axis.y.scrollbar.el.classList.remove(s.classNames.visible),
                  (s.axis.y.isVisible = !1)),
                s.isWithinBounds(s.axis.x.track.rect) ||
                  (s.axis.x.scrollbar.el.classList.remove(s.classNames.visible),
                  (s.axis.x.isVisible = !1));
            }),
            (this.onPointerEvent = function (e) {
              var t, i;
              (s.axis.x.track.rect = s.axis.x.track.el.getBoundingClientRect()),
                (s.axis.y.track.rect =
                  s.axis.y.track.el.getBoundingClientRect()),
                (s.axis.x.isOverflowing || s.axis.x.forceVisible) &&
                  (t = s.isWithinBounds(s.axis.x.track.rect)),
                (s.axis.y.isOverflowing || s.axis.y.forceVisible) &&
                  (i = s.isWithinBounds(s.axis.y.track.rect)),
                (t || i) &&
                  (e.preventDefault(),
                  e.stopPropagation(),
                  "mousedown" === e.type &&
                    (t &&
                      ((s.axis.x.scrollbar.rect =
                        s.axis.x.scrollbar.el.getBoundingClientRect()),
                      s.isWithinBounds(s.axis.x.scrollbar.rect)
                        ? s.onDragStart(e, "x")
                        : s.onTrackClick(e, "x")),
                    i &&
                      ((s.axis.y.scrollbar.rect =
                        s.axis.y.scrollbar.el.getBoundingClientRect()),
                      s.isWithinBounds(s.axis.y.scrollbar.rect)
                        ? s.onDragStart(e, "y")
                        : s.onTrackClick(e, "y"))));
            }),
            (this.drag = function (t) {
              var i = s.axis[s.draggedAxis].track,
                n = i.rect[s.axis[s.draggedAxis].sizeAttr],
                r = s.axis[s.draggedAxis].scrollbar,
                o = s.contentWrapperEl[s.axis[s.draggedAxis].scrollSizeAttr],
                a = parseInt(s.elStyles[s.axis[s.draggedAxis].sizeAttr], 10);
              t.preventDefault(), t.stopPropagation();
              var l =
                ((("y" === s.draggedAxis ? t.pageY : t.pageX) -
                  i.rect[s.axis[s.draggedAxis].offsetAttr] -
                  s.axis[s.draggedAxis].dragOffset) /
                  (n - r.size)) *
                (o - a);
              "x" === s.draggedAxis &&
                ((l =
                  s.isRtl && e.getRtlHelpers().isRtlScrollbarInverted
                    ? l - (n + r.size)
                    : l),
                (l =
                  s.isRtl && e.getRtlHelpers().isRtlScrollingInverted
                    ? -l
                    : l)),
                (s.contentWrapperEl[s.axis[s.draggedAxis].scrollOffsetAttr] =
                  l);
            }),
            (this.onEndDrag = function (e) {
              var t = ft(s.el),
                i = pt(s.el);
              e.preventDefault(),
                e.stopPropagation(),
                s.el.classList.remove(s.classNames.dragging),
                t.removeEventListener("mousemove", s.drag, !0),
                t.removeEventListener("mouseup", s.onEndDrag, !0),
                (s.removePreventClickId = i.setTimeout(function () {
                  t.removeEventListener("click", s.preventClick, !0),
                    t.removeEventListener("dblclick", s.preventClick, !0),
                    (s.removePreventClickId = null);
                }));
            }),
            (this.preventClick = function (e) {
              e.preventDefault(), e.stopPropagation();
            }),
            (this.el = t),
            (this.minScrollbarWidth = 20),
            (this.options = Object.assign({}, e.defaultOptions, i)),
            (this.classNames = Object.assign(
              {},
              e.defaultOptions.classNames,
              this.options.classNames
            )),
            (this.axis = {
              x: {
                scrollOffsetAttr: "scrollLeft",
                sizeAttr: "width",
                scrollSizeAttr: "scrollWidth",
                offsetSizeAttr: "offsetWidth",
                offsetAttr: "left",
                overflowAttr: "overflowX",
                dragOffset: 0,
                isOverflowing: !0,
                isVisible: !1,
                forceVisible: !1,
                track: {},
                scrollbar: {},
              },
              y: {
                scrollOffsetAttr: "scrollTop",
                sizeAttr: "height",
                scrollSizeAttr: "scrollHeight",
                offsetSizeAttr: "offsetHeight",
                offsetAttr: "top",
                overflowAttr: "overflowY",
                dragOffset: 0,
                isOverflowing: !0,
                isVisible: !1,
                forceVisible: !1,
                track: {},
                scrollbar: {},
              },
            }),
            (this.removePreventClickId = null),
            e.instances.has(this.el) ||
              ((this.recalculate = Se()(this.recalculate.bind(this), 64)),
              (this.onMouseMove = Se()(this.onMouseMove.bind(this), 64)),
              (this.hideScrollbars = Te()(
                this.hideScrollbars.bind(this),
                this.options.timeout
              )),
              (this.onWindowResize = Te()(this.onWindowResize.bind(this), 64, {
                leading: !0,
              })),
              (e.getRtlHelpers = Oe()(e.getRtlHelpers)),
              this.init());
        }
        (e.getRtlHelpers = function () {
          var t = document.createElement("div");
          t.innerHTML =
            '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
          var i = t.firstElementChild;
          document.body.appendChild(i);
          var s = i.firstElementChild;
          i.scrollLeft = 0;
          var n = e.getOffset(i),
            r = e.getOffset(s);
          i.scrollLeft = 999;
          var o = e.getOffset(s);
          return {
            isRtlScrollingInverted: n.left !== r.left && r.left - o.left != 0,
            isRtlScrollbarInverted: n.left !== r.left,
          };
        }),
          (e.getOffset = function (e) {
            var t = e.getBoundingClientRect(),
              i = ft(e),
              s = pt(e);
            return {
              top: t.top + (s.pageYOffset || i.documentElement.scrollTop),
              left: t.left + (s.pageXOffset || i.documentElement.scrollLeft),
            };
          });
        var t = e.prototype;
        return (
          (t.init = function () {
            e.instances.set(this.el, this),
              we() &&
                (this.initDOM(),
                this.setAccessibilityAttributes(),
                (this.scrollbarWidth = this.getScrollbarWidth()),
                this.recalculate(),
                this.initListeners());
          }),
          (t.initDOM = function () {
            var e = this;
            if (
              Array.prototype.filter.call(this.el.children, function (t) {
                return t.classList.contains(e.classNames.wrapper);
              }).length
            )
              (this.wrapperEl = this.el.querySelector(
                "." + this.classNames.wrapper
              )),
                (this.contentWrapperEl =
                  this.options.scrollableNode ||
                  this.el.querySelector("." + this.classNames.contentWrapper)),
                (this.contentEl =
                  this.options.contentNode ||
                  this.el.querySelector("." + this.classNames.contentEl)),
                (this.offsetEl = this.el.querySelector(
                  "." + this.classNames.offset
                )),
                (this.maskEl = this.el.querySelector(
                  "." + this.classNames.mask
                )),
                (this.placeholderEl = this.findChild(
                  this.wrapperEl,
                  "." + this.classNames.placeholder
                )),
                (this.heightAutoObserverWrapperEl = this.el.querySelector(
                  "." + this.classNames.heightAutoObserverWrapperEl
                )),
                (this.heightAutoObserverEl = this.el.querySelector(
                  "." + this.classNames.heightAutoObserverEl
                )),
                (this.axis.x.track.el = this.findChild(
                  this.el,
                  "." + this.classNames.track + "." + this.classNames.horizontal
                )),
                (this.axis.y.track.el = this.findChild(
                  this.el,
                  "." + this.classNames.track + "." + this.classNames.vertical
                ));
            else {
              for (
                this.wrapperEl = document.createElement("div"),
                  this.contentWrapperEl = document.createElement("div"),
                  this.offsetEl = document.createElement("div"),
                  this.maskEl = document.createElement("div"),
                  this.contentEl = document.createElement("div"),
                  this.placeholderEl = document.createElement("div"),
                  this.heightAutoObserverWrapperEl =
                    document.createElement("div"),
                  this.heightAutoObserverEl = document.createElement("div"),
                  this.wrapperEl.classList.add(this.classNames.wrapper),
                  this.contentWrapperEl.classList.add(
                    this.classNames.contentWrapper
                  ),
                  this.offsetEl.classList.add(this.classNames.offset),
                  this.maskEl.classList.add(this.classNames.mask),
                  this.contentEl.classList.add(this.classNames.contentEl),
                  this.placeholderEl.classList.add(this.classNames.placeholder),
                  this.heightAutoObserverWrapperEl.classList.add(
                    this.classNames.heightAutoObserverWrapperEl
                  ),
                  this.heightAutoObserverEl.classList.add(
                    this.classNames.heightAutoObserverEl
                  );
                this.el.firstChild;

              )
                this.contentEl.appendChild(this.el.firstChild);
              this.contentWrapperEl.appendChild(this.contentEl),
                this.offsetEl.appendChild(this.contentWrapperEl),
                this.maskEl.appendChild(this.offsetEl),
                this.heightAutoObserverWrapperEl.appendChild(
                  this.heightAutoObserverEl
                ),
                this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),
                this.wrapperEl.appendChild(this.maskEl),
                this.wrapperEl.appendChild(this.placeholderEl),
                this.el.appendChild(this.wrapperEl);
            }
            if (!this.axis.x.track.el || !this.axis.y.track.el) {
              var t = document.createElement("div"),
                i = document.createElement("div");
              t.classList.add(this.classNames.track),
                i.classList.add(this.classNames.scrollbar),
                t.appendChild(i),
                (this.axis.x.track.el = t.cloneNode(!0)),
                this.axis.x.track.el.classList.add(this.classNames.horizontal),
                (this.axis.y.track.el = t.cloneNode(!0)),
                this.axis.y.track.el.classList.add(this.classNames.vertical),
                this.el.appendChild(this.axis.x.track.el),
                this.el.appendChild(this.axis.y.track.el);
            }
            (this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector(
              "." + this.classNames.scrollbar
            )),
              (this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector(
                "." + this.classNames.scrollbar
              )),
              this.options.autoHide ||
                (this.axis.x.scrollbar.el.classList.add(
                  this.classNames.visible
                ),
                this.axis.y.scrollbar.el.classList.add(
                  this.classNames.visible
                )),
              this.el.setAttribute("data-simplebar", "init");
          }),
          (t.setAccessibilityAttributes = function () {
            var e = this.options.ariaLabel || "scrollable content";
            this.contentWrapperEl.setAttribute("tabindex", "0"),
              this.contentWrapperEl.setAttribute("role", "region"),
              this.contentWrapperEl.setAttribute("aria-label", e);
          }),
          (t.initListeners = function () {
            var e = this,
              t = pt(this.el);
            this.options.autoHide &&
              this.el.addEventListener("mouseenter", this.onMouseEnter),
              ["mousedown", "click", "dblclick"].forEach(function (t) {
                e.el.addEventListener(t, e.onPointerEvent, !0);
              }),
              ["touchstart", "touchend", "touchmove"].forEach(function (t) {
                e.el.addEventListener(t, e.onPointerEvent, {
                  capture: !0,
                  passive: !0,
                });
              }),
              this.el.addEventListener("mousemove", this.onMouseMove),
              this.el.addEventListener("mouseleave", this.onMouseLeave),
              this.contentWrapperEl.addEventListener("scroll", this.onScroll),
              t.addEventListener("resize", this.onWindowResize);
            var i = !1,
              s = t.ResizeObserver || ut;
            (this.resizeObserver = new s(function () {
              i && e.recalculate();
            })),
              this.resizeObserver.observe(this.el),
              this.resizeObserver.observe(this.contentEl),
              t.requestAnimationFrame(function () {
                i = !0;
              }),
              (this.mutationObserver = new t.MutationObserver(
                this.recalculate
              )),
              this.mutationObserver.observe(this.contentEl, {
                childList: !0,
                subtree: !0,
                characterData: !0,
              });
          }),
          (t.recalculate = function () {
            var e = pt(this.el);
            (this.elStyles = e.getComputedStyle(this.el)),
              (this.isRtl = "rtl" === this.elStyles.direction);
            var t = this.heightAutoObserverEl.offsetHeight <= 1,
              i = this.heightAutoObserverEl.offsetWidth <= 1,
              s = this.contentEl.offsetWidth,
              n = this.contentWrapperEl.offsetWidth,
              r = this.elStyles.overflowX,
              o = this.elStyles.overflowY;
            (this.contentEl.style.padding =
              this.elStyles.paddingTop +
              " " +
              this.elStyles.paddingRight +
              " " +
              this.elStyles.paddingBottom +
              " " +
              this.elStyles.paddingLeft),
              (this.wrapperEl.style.margin =
                "-" +
                this.elStyles.paddingTop +
                " -" +
                this.elStyles.paddingRight +
                " -" +
                this.elStyles.paddingBottom +
                " -" +
                this.elStyles.paddingLeft);
            var a = this.contentEl.scrollHeight,
              l = this.contentEl.scrollWidth;
            (this.contentWrapperEl.style.height = t ? "auto" : "100%"),
              (this.placeholderEl.style.width = i ? s + "px" : "auto"),
              (this.placeholderEl.style.height = a + "px");
            var c = this.contentWrapperEl.offsetHeight;
            (this.axis.x.isOverflowing = l > s),
              (this.axis.y.isOverflowing = a > c),
              (this.axis.x.isOverflowing =
                "hidden" !== r && this.axis.x.isOverflowing),
              (this.axis.y.isOverflowing =
                "hidden" !== o && this.axis.y.isOverflowing),
              (this.axis.x.forceVisible =
                "x" === this.options.forceVisible ||
                !0 === this.options.forceVisible),
              (this.axis.y.forceVisible =
                "y" === this.options.forceVisible ||
                !0 === this.options.forceVisible),
              this.hideNativeScrollbar();
            var d = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
              u = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
            (this.axis.x.isOverflowing =
              this.axis.x.isOverflowing && l > n - u),
              (this.axis.y.isOverflowing =
                this.axis.y.isOverflowing && a > c - d),
              (this.axis.x.scrollbar.size = this.getScrollbarSize("x")),
              (this.axis.y.scrollbar.size = this.getScrollbarSize("y")),
              (this.axis.x.scrollbar.el.style.width =
                this.axis.x.scrollbar.size + "px"),
              (this.axis.y.scrollbar.el.style.height =
                this.axis.y.scrollbar.size + "px"),
              this.positionScrollbar("x"),
              this.positionScrollbar("y"),
              this.toggleTrackVisibility("x"),
              this.toggleTrackVisibility("y");
          }),
          (t.getScrollbarSize = function (e) {
            if ((void 0 === e && (e = "y"), !this.axis[e].isOverflowing))
              return 0;
            var t,
              i = this.contentEl[this.axis[e].scrollSizeAttr],
              s = this.axis[e].track.el[this.axis[e].offsetSizeAttr],
              n = s / i;
            return (
              (t = Math.max(~~(n * s), this.options.scrollbarMinSize)),
              this.options.scrollbarMaxSize &&
                (t = Math.min(t, this.options.scrollbarMaxSize)),
              t
            );
          }),
          (t.positionScrollbar = function (t) {
            if ((void 0 === t && (t = "y"), this.axis[t].isOverflowing)) {
              var i = this.contentWrapperEl[this.axis[t].scrollSizeAttr],
                s = this.axis[t].track.el[this.axis[t].offsetSizeAttr],
                n = parseInt(this.elStyles[this.axis[t].sizeAttr], 10),
                r = this.axis[t].scrollbar,
                o = this.contentWrapperEl[this.axis[t].scrollOffsetAttr],
                a =
                  (o =
                    "x" === t &&
                    this.isRtl &&
                    e.getRtlHelpers().isRtlScrollingInverted
                      ? -o
                      : o) /
                  (i - n),
                l = ~~((s - r.size) * a);
              (l =
                "x" === t &&
                this.isRtl &&
                e.getRtlHelpers().isRtlScrollbarInverted
                  ? l + (s - r.size)
                  : l),
                (r.el.style.transform =
                  "x" === t
                    ? "translate3d(" + l + "px, 0, 0)"
                    : "translate3d(0, " + l + "px, 0)");
            }
          }),
          (t.toggleTrackVisibility = function (e) {
            void 0 === e && (e = "y");
            var t = this.axis[e].track.el,
              i = this.axis[e].scrollbar.el;
            this.axis[e].isOverflowing || this.axis[e].forceVisible
              ? ((t.style.visibility = "visible"),
                (this.contentWrapperEl.style[this.axis[e].overflowAttr] =
                  "scroll"))
              : ((t.style.visibility = "hidden"),
                (this.contentWrapperEl.style[this.axis[e].overflowAttr] =
                  "hidden")),
              this.axis[e].isOverflowing
                ? (i.style.display = "block")
                : (i.style.display = "none");
          }),
          (t.hideNativeScrollbar = function () {
            (this.offsetEl.style[this.isRtl ? "left" : "right"] =
              this.axis.y.isOverflowing || this.axis.y.forceVisible
                ? "-" + this.scrollbarWidth + "px"
                : 0),
              (this.offsetEl.style.bottom =
                this.axis.x.isOverflowing || this.axis.x.forceVisible
                  ? "-" + this.scrollbarWidth + "px"
                  : 0);
          }),
          (t.onMouseMoveForAxis = function (e) {
            void 0 === e && (e = "y"),
              (this.axis[e].track.rect =
                this.axis[e].track.el.getBoundingClientRect()),
              (this.axis[e].scrollbar.rect =
                this.axis[e].scrollbar.el.getBoundingClientRect()),
              this.isWithinBounds(this.axis[e].scrollbar.rect)
                ? this.axis[e].scrollbar.el.classList.add(this.classNames.hover)
                : this.axis[e].scrollbar.el.classList.remove(
                    this.classNames.hover
                  ),
              this.isWithinBounds(this.axis[e].track.rect)
                ? (this.showScrollbar(e),
                  this.axis[e].track.el.classList.add(this.classNames.hover))
                : this.axis[e].track.el.classList.remove(this.classNames.hover);
          }),
          (t.onMouseLeaveForAxis = function (e) {
            void 0 === e && (e = "y"),
              this.axis[e].track.el.classList.remove(this.classNames.hover),
              this.axis[e].scrollbar.el.classList.remove(this.classNames.hover);
          }),
          (t.showScrollbar = function (e) {
            void 0 === e && (e = "y");
            var t = this.axis[e].scrollbar.el;
            this.axis[e].isVisible ||
              (t.classList.add(this.classNames.visible),
              (this.axis[e].isVisible = !0)),
              this.options.autoHide && this.hideScrollbars();
          }),
          (t.onDragStart = function (e, t) {
            void 0 === t && (t = "y");
            var i = ft(this.el),
              s = pt(this.el),
              n = this.axis[t].scrollbar,
              r = "y" === t ? e.pageY : e.pageX;
            (this.axis[t].dragOffset = r - n.rect[this.axis[t].offsetAttr]),
              (this.draggedAxis = t),
              this.el.classList.add(this.classNames.dragging),
              i.addEventListener("mousemove", this.drag, !0),
              i.addEventListener("mouseup", this.onEndDrag, !0),
              null === this.removePreventClickId
                ? (i.addEventListener("click", this.preventClick, !0),
                  i.addEventListener("dblclick", this.preventClick, !0))
                : (s.clearTimeout(this.removePreventClickId),
                  (this.removePreventClickId = null));
          }),
          (t.onTrackClick = function (e, t) {
            var i = this;
            if ((void 0 === t && (t = "y"), this.options.clickOnTrack)) {
              var s = pt(this.el);
              this.axis[t].scrollbar.rect =
                this.axis[t].scrollbar.el.getBoundingClientRect();
              var n = this.axis[t].scrollbar.rect[this.axis[t].offsetAttr],
                r = parseInt(this.elStyles[this.axis[t].sizeAttr], 10),
                o = this.contentWrapperEl[this.axis[t].scrollOffsetAttr],
                a =
                  ("y" === t ? this.mouseY - n : this.mouseX - n) < 0 ? -1 : 1,
                l = -1 === a ? o - r : o + r;
              !(function e() {
                var n, r;
                -1 === a
                  ? o > l &&
                    ((o -= i.options.clickOnTrackSpeed),
                    i.contentWrapperEl.scrollTo(
                      (((n = {})[i.axis[t].offsetAttr] = o), n)
                    ),
                    s.requestAnimationFrame(e))
                  : o < l &&
                    ((o += i.options.clickOnTrackSpeed),
                    i.contentWrapperEl.scrollTo(
                      (((r = {})[i.axis[t].offsetAttr] = o), r)
                    ),
                    s.requestAnimationFrame(e));
              })();
            }
          }),
          (t.getContentElement = function () {
            return this.contentEl;
          }),
          (t.getScrollElement = function () {
            return this.contentWrapperEl;
          }),
          (t.getScrollbarWidth = function () {
            try {
              return "none" ===
                getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar")
                  .display ||
                "scrollbarWidth" in document.documentElement.style ||
                "-ms-overflow-style" in document.documentElement.style
                ? 0
                : vt(this.el);
            } catch (e) {
              return vt(this.el);
            }
          }),
          (t.removeListeners = function () {
            var e = this,
              t = pt(this.el);
            this.options.autoHide &&
              this.el.removeEventListener("mouseenter", this.onMouseEnter),
              ["mousedown", "click", "dblclick"].forEach(function (t) {
                e.el.removeEventListener(t, e.onPointerEvent, !0);
              }),
              ["touchstart", "touchend", "touchmove"].forEach(function (t) {
                e.el.removeEventListener(t, e.onPointerEvent, {
                  capture: !0,
                  passive: !0,
                });
              }),
              this.el.removeEventListener("mousemove", this.onMouseMove),
              this.el.removeEventListener("mouseleave", this.onMouseLeave),
              this.contentWrapperEl &&
                this.contentWrapperEl.removeEventListener(
                  "scroll",
                  this.onScroll
                ),
              t.removeEventListener("resize", this.onWindowResize),
              this.mutationObserver && this.mutationObserver.disconnect(),
              this.resizeObserver && this.resizeObserver.disconnect(),
              this.recalculate.cancel(),
              this.onMouseMove.cancel(),
              this.hideScrollbars.cancel(),
              this.onWindowResize.cancel();
          }),
          (t.unMount = function () {
            this.removeListeners(), e.instances.delete(this.el);
          }),
          (t.isWithinBounds = function (e) {
            return (
              this.mouseX >= e.left &&
              this.mouseX <= e.left + e.width &&
              this.mouseY >= e.top &&
              this.mouseY <= e.top + e.height
            );
          }),
          (t.findChild = function (e, t) {
            var i =
              e.matches ||
              e.webkitMatchesSelector ||
              e.mozMatchesSelector ||
              e.msMatchesSelector;
            return Array.prototype.filter.call(e.children, function (e) {
              return i.call(e, t);
            })[0];
          }),
          e
        );
      })();
      (bt.defaultOptions = {
        autoHide: !0,
        forceVisible: !1,
        clickOnTrack: !0,
        clickOnTrackSpeed: 40,
        classNames: {
          contentEl: "simplebar-content",
          contentWrapper: "simplebar-content-wrapper",
          offset: "simplebar-offset",
          mask: "simplebar-mask",
          wrapper: "simplebar-wrapper",
          placeholder: "simplebar-placeholder",
          scrollbar: "simplebar-scrollbar",
          track: "simplebar-track",
          heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
          heightAutoObserverEl: "simplebar-height-auto-observer",
          visible: "simplebar-visible",
          horizontal: "simplebar-horizontal",
          vertical: "simplebar-vertical",
          hover: "simplebar-hover",
          dragging: "simplebar-dragging",
        },
        scrollbarMinSize: 25,
        scrollbarMaxSize: 0,
        timeout: 1e3,
      }),
        (bt.instances = new WeakMap()),
        (bt.initDOMLoadedElements = function () {
          document.removeEventListener(
            "DOMContentLoaded",
            this.initDOMLoadedElements
          ),
            window.removeEventListener("load", this.initDOMLoadedElements),
            Array.prototype.forEach.call(
              document.querySelectorAll("[data-simplebar]"),
              function (e) {
                "init" === e.getAttribute("data-simplebar") ||
                  bt.instances.has(e) ||
                  new bt(e, ht(e.attributes));
              }
            );
        }),
        (bt.removeObserver = function () {
          this.globalObserver.disconnect();
        }),
        (bt.initHtmlApi = function () {
          (this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this)),
            "undefined" != typeof MutationObserver &&
              ((this.globalObserver = new MutationObserver(bt.handleMutations)),
              this.globalObserver.observe(document, {
                childList: !0,
                subtree: !0,
              })),
            "complete" === document.readyState ||
            ("loading" !== document.readyState &&
              !document.documentElement.doScroll)
              ? window.setTimeout(this.initDOMLoadedElements)
              : (document.addEventListener(
                  "DOMContentLoaded",
                  this.initDOMLoadedElements
                ),
                window.addEventListener("load", this.initDOMLoadedElements));
        }),
        (bt.handleMutations = function (e) {
          e.forEach(function (e) {
            Array.prototype.forEach.call(e.addedNodes, function (e) {
              1 === e.nodeType &&
                (e.hasAttribute("data-simplebar")
                  ? !bt.instances.has(e) &&
                    document.documentElement.contains(e) &&
                    new bt(e, ht(e.attributes))
                  : Array.prototype.forEach.call(
                      e.querySelectorAll("[data-simplebar]"),
                      function (e) {
                        "init" !== e.getAttribute("data-simplebar") &&
                          !bt.instances.has(e) &&
                          document.documentElement.contains(e) &&
                          new bt(e, ht(e.attributes));
                      }
                    ));
            }),
              Array.prototype.forEach.call(e.removedNodes, function (e) {
                1 === e.nodeType &&
                  ("init" === e.getAttribute("data-simplebar")
                    ? bt.instances.has(e) &&
                      !document.documentElement.contains(e) &&
                      bt.instances.get(e).unMount()
                    : Array.prototype.forEach.call(
                        e.querySelectorAll('[data-simplebar="init"]'),
                        function (e) {
                          bt.instances.has(e) &&
                            !document.documentElement.contains(e) &&
                            bt.instances.get(e).unMount();
                        }
                      ));
              });
          });
        }),
        (bt.getOptions = ht),
        we() && bt.initHtmlApi();
      let yt = !1;
      setTimeout(() => {
        if (yt) {
          let e = new Event("windowScroll");
          window.addEventListener("scroll", function (t) {
            document.dispatchEvent(e);
          });
        }
      }, 0),
        (function (e, t) {
          "object" == typeof exports && "undefined" != typeof module
            ? (module.exports = t())
            : "function" == typeof define && define.amd
            ? define(t)
            : ((e =
                "undefined" != typeof globalThis
                  ? globalThis
                  : e || self).lightGallery = t());
        })(void 0, function () {
          var e = function () {
            return (
              (e =
                Object.assign ||
                function (e) {
                  for (var t, i = 1, s = arguments.length; i < s; i++)
                    for (var n in (t = arguments[i]))
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  return e;
                }),
              e.apply(this, arguments)
            );
          };
          var t = "lgAfterAppendSlide",
            i = "lgInit",
            s = "lgHasVideo",
            n = "lgContainerResize",
            r = "lgUpdateSlides",
            o = "lgAfterAppendSubHtml",
            a = "lgBeforeOpen",
            l = "lgAfterOpen",
            c = "lgSlideItemLoad",
            d = "lgBeforeSlide",
            u = "lgAfterSlide",
            h = "lgPosterClick",
            p = "lgDragStart",
            f = "lgDragMove",
            g = "lgDragEnd",
            m = "lgBeforeNextSlide",
            v = "lgBeforePrevSlide",
            b = "lgBeforeClose",
            y = "lgAfterClose",
            w = {
              mode: "lg-slide",
              easing: "ease",
              speed: 400,
              licenseKey: "0000-0000-000-0000",
              height: "100%",
              width: "100%",
              addClass: "",
              startClass: "lg-start-zoom",
              backdropDuration: 300,
              container: "",
              startAnimationDuration: 400,
              zoomFromOrigin: !0,
              hideBarsDelay: 0,
              showBarsAfter: 1e4,
              slideDelay: 0,
              supportLegacyBrowser: !0,
              allowMediaOverlap: !1,
              videoMaxSize: "1280-720",
              loadYouTubePoster: !0,
              defaultCaptionHeight: 0,
              ariaLabelledby: "",
              ariaDescribedby: "",
              resetScrollPosition: !0,
              hideScrollbar: !1,
              closable: !0,
              swipeToClose: !0,
              closeOnTap: !0,
              showCloseIcon: !0,
              showMaximizeIcon: !1,
              loop: !0,
              escKey: !0,
              keyPress: !0,
              trapFocus: !0,
              controls: !0,
              slideEndAnimation: !0,
              hideControlOnEnd: !1,
              mousewheel: !1,
              getCaptionFromTitleOrAlt: !0,
              appendSubHtmlTo: ".lg-sub-html",
              subHtmlSelectorRelative: !1,
              preload: 2,
              numberOfSlideItemsInDom: 10,
              selector: "",
              selectWithin: "",
              nextHtml: "",
              prevHtml: "",
              index: 0,
              iframeWidth: "100%",
              iframeHeight: "100%",
              iframeMaxWidth: "100%",
              iframeMaxHeight: "100%",
              download: !0,
              counter: !0,
              appendCounterTo: ".lg-toolbar",
              swipeThreshold: 50,
              enableSwipe: !0,
              enableDrag: !0,
              dynamic: !1,
              dynamicEl: [],
              extraProps: [],
              exThumbImage: "",
              isMobile: void 0,
              mobileSettings: { controls: !1, showCloseIcon: !1, download: !1 },
              plugins: [],
              strings: {
                closeGallery: "Close gallery",
                toggleMaximize: "Toggle maximize",
                previousSlide: "Previous slide",
                nextSlide: "Next slide",
                download: "Download",
                playVideo: "Play video",
              },
            };
          var x = (function () {
            function e(e) {
              return (
                (this.cssVenderPrefixes = [
                  "TransitionDuration",
                  "TransitionTimingFunction",
                  "Transform",
                  "Transition",
                ]),
                (this.selector = this._getSelector(e)),
                (this.firstElement = this._getFirstEl()),
                this
              );
            }
            return (
              (e.generateUUID = function () {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                  /[xy]/g,
                  function (e) {
                    var t = (16 * Math.random()) | 0;
                    return ("x" == e ? t : (3 & t) | 8).toString(16);
                  }
                );
              }),
              (e.prototype._getSelector = function (e, t) {
                return (
                  void 0 === t && (t = document),
                  "string" != typeof e
                    ? e
                    : ((t = t || document),
                      "#" === e.substring(0, 1)
                        ? t.querySelector(e)
                        : t.querySelectorAll(e))
                );
              }),
              (e.prototype._each = function (e) {
                return this.selector
                  ? (void 0 !== this.selector.length
                      ? [].forEach.call(this.selector, e)
                      : e(this.selector, 0),
                    this)
                  : this;
              }),
              (e.prototype._setCssVendorPrefix = function (e, t, i) {
                var s = t.replace(/-([a-z])/gi, function (e, t) {
                  return t.toUpperCase();
                });
                -1 !== this.cssVenderPrefixes.indexOf(s)
                  ? ((e.style[s.charAt(0).toLowerCase() + s.slice(1)] = i),
                    (e.style["webkit" + s] = i),
                    (e.style["moz" + s] = i),
                    (e.style["ms" + s] = i),
                    (e.style["o" + s] = i))
                  : (e.style[s] = i);
              }),
              (e.prototype._getFirstEl = function () {
                return this.selector && void 0 !== this.selector.length
                  ? this.selector[0]
                  : this.selector;
              }),
              (e.prototype.isEventMatched = function (e, t) {
                var i = t.split(".");
                return e
                  .split(".")
                  .filter(function (e) {
                    return e;
                  })
                  .every(function (e) {
                    return -1 !== i.indexOf(e);
                  });
              }),
              (e.prototype.attr = function (e, t) {
                return void 0 === t
                  ? this.firstElement
                    ? this.firstElement.getAttribute(e)
                    : ""
                  : (this._each(function (i) {
                      i.setAttribute(e, t);
                    }),
                    this);
              }),
              (e.prototype.find = function (e) {
                return S(this._getSelector(e, this.selector));
              }),
              (e.prototype.first = function () {
                return this.selector && void 0 !== this.selector.length
                  ? S(this.selector[0])
                  : S(this.selector);
              }),
              (e.prototype.eq = function (e) {
                return S(this.selector[e]);
              }),
              (e.prototype.parent = function () {
                return S(this.selector.parentElement);
              }),
              (e.prototype.get = function () {
                return this._getFirstEl();
              }),
              (e.prototype.removeAttr = function (e) {
                var t = e.split(" ");
                return (
                  this._each(function (e) {
                    t.forEach(function (t) {
                      return e.removeAttribute(t);
                    });
                  }),
                  this
                );
              }),
              (e.prototype.wrap = function (e) {
                if (!this.firstElement) return this;
                var t = document.createElement("div");
                return (
                  (t.className = e),
                  this.firstElement.parentNode.insertBefore(
                    t,
                    this.firstElement
                  ),
                  this.firstElement.parentNode.removeChild(this.firstElement),
                  t.appendChild(this.firstElement),
                  this
                );
              }),
              (e.prototype.addClass = function (e) {
                return (
                  void 0 === e && (e = ""),
                  this._each(function (t) {
                    e.split(" ").forEach(function (e) {
                      e && t.classList.add(e);
                    });
                  }),
                  this
                );
              }),
              (e.prototype.removeClass = function (e) {
                return (
                  this._each(function (t) {
                    e.split(" ").forEach(function (e) {
                      e && t.classList.remove(e);
                    });
                  }),
                  this
                );
              }),
              (e.prototype.hasClass = function (e) {
                return (
                  !!this.firstElement && this.firstElement.classList.contains(e)
                );
              }),
              (e.prototype.hasAttribute = function (e) {
                return !!this.firstElement && this.firstElement.hasAttribute(e);
              }),
              (e.prototype.toggleClass = function (e) {
                return this.firstElement
                  ? (this.hasClass(e) ? this.removeClass(e) : this.addClass(e),
                    this)
                  : this;
              }),
              (e.prototype.css = function (e, t) {
                var i = this;
                return (
                  this._each(function (s) {
                    i._setCssVendorPrefix(s, e, t);
                  }),
                  this
                );
              }),
              (e.prototype.on = function (t, i) {
                var s = this;
                return this.selector
                  ? (t.split(" ").forEach(function (t) {
                      Array.isArray(e.eventListeners[t]) ||
                        (e.eventListeners[t] = []),
                        e.eventListeners[t].push(i),
                        s.selector.addEventListener(t.split(".")[0], i);
                    }),
                    this)
                  : this;
              }),
              (e.prototype.once = function (e, t) {
                var i = this;
                return (
                  this.on(e, function () {
                    i.off(e), t(e);
                  }),
                  this
                );
              }),
              (e.prototype.off = function (t) {
                var i = this;
                return this.selector
                  ? (Object.keys(e.eventListeners).forEach(function (s) {
                      i.isEventMatched(t, s) &&
                        (e.eventListeners[s].forEach(function (e) {
                          i.selector.removeEventListener(s.split(".")[0], e);
                        }),
                        (e.eventListeners[s] = []));
                    }),
                    this)
                  : this;
              }),
              (e.prototype.trigger = function (e, t) {
                if (!this.firstElement) return this;
                var i = new CustomEvent(e.split(".")[0], { detail: t || null });
                return this.firstElement.dispatchEvent(i), this;
              }),
              (e.prototype.load = function (e) {
                var t = this;
                return (
                  fetch(e)
                    .then(function (e) {
                      return e.text();
                    })
                    .then(function (e) {
                      t.selector.innerHTML = e;
                    }),
                  this
                );
              }),
              (e.prototype.html = function (e) {
                return void 0 === e
                  ? this.firstElement
                    ? this.firstElement.innerHTML
                    : ""
                  : (this._each(function (t) {
                      t.innerHTML = e;
                    }),
                    this);
              }),
              (e.prototype.append = function (e) {
                return (
                  this._each(function (t) {
                    "string" == typeof e
                      ? t.insertAdjacentHTML("beforeend", e)
                      : t.appendChild(e);
                  }),
                  this
                );
              }),
              (e.prototype.prepend = function (e) {
                return (
                  this._each(function (t) {
                    t.insertAdjacentHTML("afterbegin", e);
                  }),
                  this
                );
              }),
              (e.prototype.remove = function () {
                return (
                  this._each(function (e) {
                    e.parentNode.removeChild(e);
                  }),
                  this
                );
              }),
              (e.prototype.empty = function () {
                return (
                  this._each(function (e) {
                    e.innerHTML = "";
                  }),
                  this
                );
              }),
              (e.prototype.scrollTop = function (e) {
                return void 0 !== e
                  ? ((document.body.scrollTop = e),
                    (document.documentElement.scrollTop = e),
                    this)
                  : window.pageYOffset ||
                      document.documentElement.scrollTop ||
                      document.body.scrollTop ||
                      0;
              }),
              (e.prototype.scrollLeft = function (e) {
                return void 0 !== e
                  ? ((document.body.scrollLeft = e),
                    (document.documentElement.scrollLeft = e),
                    this)
                  : window.pageXOffset ||
                      document.documentElement.scrollLeft ||
                      document.body.scrollLeft ||
                      0;
              }),
              (e.prototype.offset = function () {
                if (!this.firstElement) return { left: 0, top: 0 };
                var e = this.firstElement.getBoundingClientRect(),
                  t = S("body").style().marginLeft;
                return {
                  left: e.left - parseFloat(t) + this.scrollLeft(),
                  top: e.top + this.scrollTop(),
                };
              }),
              (e.prototype.style = function () {
                return this.firstElement
                  ? this.firstElement.currentStyle ||
                      window.getComputedStyle(this.firstElement)
                  : {};
              }),
              (e.prototype.width = function () {
                var e = this.style();
                return (
                  this.firstElement.clientWidth -
                  parseFloat(e.paddingLeft) -
                  parseFloat(e.paddingRight)
                );
              }),
              (e.prototype.height = function () {
                var e = this.style();
                return (
                  this.firstElement.clientHeight -
                  parseFloat(e.paddingTop) -
                  parseFloat(e.paddingBottom)
                );
              }),
              (e.eventListeners = {}),
              e
            );
          })();
          function S(e) {
            return (
              (function () {
                if ("function" == typeof window.CustomEvent) return !1;
                window.CustomEvent = function (e, t) {
                  t = t || { bubbles: !1, cancelable: !1, detail: null };
                  var i = document.createEvent("CustomEvent");
                  return (
                    i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i
                  );
                };
              })(),
              Element.prototype.matches ||
                (Element.prototype.matches =
                  Element.prototype.msMatchesSelector ||
                  Element.prototype.webkitMatchesSelector),
              new x(e)
            );
          }
          var E = [
            "src",
            "sources",
            "subHtml",
            "subHtmlUrl",
            "html",
            "video",
            "poster",
            "slideName",
            "responsive",
            "srcset",
            "sizes",
            "iframe",
            "downloadUrl",
            "download",
            "width",
            "facebookShareUrl",
            "tweetText",
            "iframeTitle",
            "twitterShareUrl",
            "pinterestShareUrl",
            "pinterestText",
            "fbHtml",
            "disqusIdentifier",
            "disqusUrl",
          ];
          function T(e) {
            return "href" === e
              ? "src"
              : (e = (e =
                  (e = e.replace("data-", "")).charAt(0).toLowerCase() +
                  e.slice(1)).replace(/-([a-z])/g, function (e) {
                  return e[1].toUpperCase();
                }));
          }
          var C = function (e, t, i, s) {
              void 0 === i && (i = 0);
              var n = S(e).attr("data-lg-size") || s;
              if (n) {
                var r = n.split(",");
                if (r[1])
                  for (var o = window.innerWidth, a = 0; a < r.length; a++) {
                    var l = r[a];
                    if (parseInt(l.split("-")[2], 10) > o) {
                      n = l;
                      break;
                    }
                    a === r.length - 1 && (n = l);
                  }
                var c = n.split("-"),
                  d = parseInt(c[0], 10),
                  u = parseInt(c[1], 10),
                  h = t.width(),
                  p = t.height() - i,
                  f = Math.min(h, d),
                  g = Math.min(p, u),
                  m = Math.min(f / d, g / u);
                return { width: d * m, height: u * m };
              }
            },
            O = function (e, t, i, s, n) {
              if (n) {
                var r = S(e).find("img").first();
                if (r.get()) {
                  var o = t.get().getBoundingClientRect(),
                    a = o.width,
                    l = t.height() - (i + s),
                    c = r.width(),
                    d = r.height(),
                    u = r.style(),
                    h =
                      (a - c) / 2 -
                      r.offset().left +
                      (parseFloat(u.paddingLeft) || 0) +
                      (parseFloat(u.borderLeft) || 0) +
                      S(window).scrollLeft() +
                      o.left,
                    p =
                      (l - d) / 2 -
                      r.offset().top +
                      (parseFloat(u.paddingTop) || 0) +
                      (parseFloat(u.borderTop) || 0) +
                      S(window).scrollTop() +
                      i;
                  return (
                    "translate3d(" +
                    (h *= -1) +
                    "px, " +
                    (p *= -1) +
                    "px, 0) scale3d(" +
                    c / n.width +
                    ", " +
                    d / n.height +
                    ", 1)"
                  );
                }
              }
            },
            I = function (e, t, i, s, n, r) {
              return (
                '<div class="lg-video-cont lg-has-iframe" style="width:' +
                e +
                "; max-width:" +
                i +
                "; height: " +
                t +
                "; max-height:" +
                s +
                '">\n                    <iframe class="lg-object" frameborder="0" ' +
                (r ? 'title="' + r + '"' : "") +
                ' src="' +
                n +
                '"  allowfullscreen="true"></iframe>\n                </div>'
              );
            },
            L = function (e, t, i, s, n, r) {
              var o =
                  "<img " +
                  i +
                  " " +
                  (s ? 'srcset="' + s + '"' : "") +
                  "  " +
                  (n ? 'sizes="' + n + '"' : "") +
                  ' class="lg-object lg-image" data-index="' +
                  e +
                  '" src="' +
                  t +
                  '" />',
                a = "";
              r &&
                (a = ("string" == typeof r ? JSON.parse(r) : r).map(function (
                  e
                ) {
                  var t = "";
                  return (
                    Object.keys(e).forEach(function (i) {
                      t += " " + i + '="' + e[i] + '"';
                    }),
                    "<source " + t + "></source>"
                  );
                }));
              return "" + a + o;
            },
            k = function (e) {
              for (var t = [], i = [], s = "", n = 0; n < e.length; n++) {
                var r = e[n].split(" ");
                "" === r[0] && r.splice(0, 1), i.push(r[0]), t.push(r[1]);
              }
              for (var o = window.innerWidth, a = 0; a < t.length; a++)
                if (parseInt(t[a], 10) > o) {
                  s = i[a];
                  break;
                }
              return s;
            },
            M = function (e) {
              return !!e && !!e.complete && 0 !== e.naturalWidth;
            },
            A = function (e, t, i, s, n) {
              return (
                '<div class="lg-video-cont ' +
                (n && n.youtube
                  ? "lg-has-youtube"
                  : n && n.vimeo
                  ? "lg-has-vimeo"
                  : "lg-has-html5") +
                '" style="' +
                i +
                '">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="' +
                s +
                '"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>' +
                s +
                '</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            ' +
                (t || "") +
                '\n            <img class="lg-object lg-video-poster" src="' +
                e +
                '" />\n        </div>'
              );
            },
            P = function (e) {
              var t = e.querySelectorAll(
                'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
              );
              return [].filter.call(t, function (e) {
                var t = window.getComputedStyle(e);
                return "none" !== t.display && "hidden" !== t.visibility;
              });
            },
            z = function (e, t, i, s) {
              var n = [],
                r = (function () {
                  for (var e = 0, t = 0, i = arguments.length; t < i; t++)
                    e += arguments[t].length;
                  var s = Array(e),
                    n = 0;
                  for (t = 0; t < i; t++)
                    for (
                      var r = arguments[t], o = 0, a = r.length;
                      o < a;
                      o++, n++
                    )
                      s[n] = r[o];
                  return s;
                })(E, t);
              return (
                [].forEach.call(e, function (e) {
                  for (var t = {}, o = 0; o < e.attributes.length; o++) {
                    var a = e.attributes[o];
                    if (a.specified) {
                      var l = T(a.name),
                        c = "";
                      r.indexOf(l) > -1 && (c = l), c && (t[c] = a.value);
                    }
                  }
                  var d = S(e),
                    u = d.find("img").first().attr("alt"),
                    h = d.attr("title"),
                    p = s ? d.attr(s) : d.find("img").first().attr("src");
                  (t.thumb = p),
                    i && !t.subHtml && (t.subHtml = h || u || ""),
                    (t.alt = u || h || ""),
                    n.push(t);
                }),
                n
              );
            },
            _ = function () {
              return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            },
            D = function (e, t, i) {
              if (!e)
                return t
                  ? { html5: !0 }
                  : void console.error(
                      "lightGallery :- data-src is not provided on slide item " +
                        (i + 1) +
                        ". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/"
                    );
              var s = e.match(
                  /\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i
                ),
                n = e.match(
                  /\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i
                ),
                r = e.match(
                  /https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/
                );
              return s
                ? { youtube: s }
                : n
                ? { vimeo: n }
                : r
                ? { wistia: r }
                : void 0;
            },
            $ = 0,
            B = (function () {
              function E(e, t) {
                if (
                  ((this.lgOpened = !1),
                  (this.index = 0),
                  (this.plugins = []),
                  (this.lGalleryOn = !1),
                  (this.lgBusy = !1),
                  (this.currentItemsInDom = []),
                  (this.prevScrollTop = 0),
                  (this.bodyPaddingRight = 0),
                  (this.isDummyImageRemoved = !1),
                  (this.dragOrSwipeEnabled = !1),
                  (this.mediaContainerPosition = { top: 0, bottom: 0 }),
                  !e)
                )
                  return this;
                if (
                  ($++,
                  (this.lgId = $),
                  (this.el = e),
                  (this.LGel = S(e)),
                  this.generateSettings(t),
                  this.buildModules(),
                  this.settings.dynamic &&
                    void 0 !== this.settings.dynamicEl &&
                    !Array.isArray(this.settings.dynamicEl))
                )
                  throw "When using dynamic mode, you must also define dynamicEl as an Array.";
                return (
                  (this.galleryItems = this.getItems()),
                  this.normalizeSettings(),
                  this.init(),
                  this.validateLicense(),
                  this
                );
              }
              return (
                (E.prototype.generateSettings = function (t) {
                  if (
                    ((this.settings = e(e({}, w), t)),
                    this.settings.isMobile &&
                    "function" == typeof this.settings.isMobile
                      ? this.settings.isMobile()
                      : _())
                  ) {
                    var i = e(
                      e({}, this.settings.mobileSettings),
                      this.settings.mobileSettings
                    );
                    this.settings = e(e({}, this.settings), i);
                  }
                }),
                (E.prototype.normalizeSettings = function () {
                  this.settings.slideEndAnimation &&
                    (this.settings.hideControlOnEnd = !1),
                    this.settings.closable || (this.settings.swipeToClose = !1),
                    (this.zoomFromOrigin = this.settings.zoomFromOrigin),
                    this.settings.dynamic && (this.zoomFromOrigin = !1),
                    this.settings.container ||
                      (this.settings.container = document.body),
                    (this.settings.preload = Math.min(
                      this.settings.preload,
                      this.galleryItems.length
                    ));
                }),
                (E.prototype.init = function () {
                  var e = this;
                  this.addSlideVideoInfo(this.galleryItems),
                    this.buildStructure(),
                    this.LGel.trigger(i, { instance: this }),
                    this.settings.keyPress && this.keyPress(),
                    setTimeout(function () {
                      e.enableDrag(), e.enableSwipe(), e.triggerPosterClick();
                    }, 50),
                    this.arrow(),
                    this.settings.mousewheel && this.mousewheel(),
                    this.settings.dynamic || this.openGalleryOnItemClick();
                }),
                (E.prototype.openGalleryOnItemClick = function () {
                  for (
                    var e = this,
                      t = function (t) {
                        var s = i.items[t],
                          n = S(s),
                          r = x.generateUUID();
                        n.attr("data-lg-id", r).on(
                          "click.lgcustom-item-" + r,
                          function (i) {
                            i.preventDefault();
                            var n = e.settings.index || t;
                            e.openGallery(n, s);
                          }
                        );
                      },
                      i = this,
                      s = 0;
                    s < this.items.length;
                    s++
                  )
                    t(s);
                }),
                (E.prototype.buildModules = function () {
                  var e = this;
                  this.settings.plugins.forEach(function (t) {
                    e.plugins.push(new t(e, S));
                  });
                }),
                (E.prototype.validateLicense = function () {
                  this.settings.licenseKey
                    ? "0000-0000-000-0000" === this.settings.licenseKey &&
                      console.warn(
                        "lightGallery: " +
                          this.settings.licenseKey +
                          " license key is not valid for production use"
                      )
                    : console.error("Please provide a valid license key");
                }),
                (E.prototype.getSlideItem = function (e) {
                  return S(this.getSlideItemId(e));
                }),
                (E.prototype.getSlideItemId = function (e) {
                  return "#lg-item-" + this.lgId + "-" + e;
                }),
                (E.prototype.getIdName = function (e) {
                  return e + "-" + this.lgId;
                }),
                (E.prototype.getElementById = function (e) {
                  return S("#" + this.getIdName(e));
                }),
                (E.prototype.manageSingleSlideClassName = function () {
                  this.galleryItems.length < 2
                    ? this.outer.addClass("lg-single-item")
                    : this.outer.removeClass("lg-single-item");
                }),
                (E.prototype.buildStructure = function () {
                  var e = this;
                  if (!(this.$container && this.$container.get())) {
                    var t = "",
                      i = "";
                    this.settings.controls &&
                      (t =
                        '<button type="button" id="' +
                        this.getIdName("lg-prev") +
                        '" aria-label="' +
                        this.settings.strings.previousSlide +
                        '" class="lg-prev lg-icon"> ' +
                        this.settings.prevHtml +
                        ' </button>\n                <button type="button" id="' +
                        this.getIdName("lg-next") +
                        '" aria-label="' +
                        this.settings.strings.nextSlide +
                        '" class="lg-next lg-icon"> ' +
                        this.settings.nextHtml +
                        " </button>"),
                      ".lg-item" !== this.settings.appendSubHtmlTo &&
                        (i =
                          '<div class="lg-sub-html" role="status" aria-live="polite"></div>');
                    var s = "";
                    this.settings.allowMediaOverlap &&
                      (s += "lg-media-overlap ");
                    var n = this.settings.ariaLabelledby
                        ? 'aria-labelledby="' +
                          this.settings.ariaLabelledby +
                          '"'
                        : "",
                      r = this.settings.ariaDescribedby
                        ? 'aria-describedby="' +
                          this.settings.ariaDescribedby +
                          '"'
                        : "",
                      o =
                        "lg-container " +
                        this.settings.addClass +
                        " " +
                        (document.body !== this.settings.container
                          ? "lg-inline"
                          : ""),
                      a =
                        this.settings.closable && this.settings.showCloseIcon
                          ? '<button type="button" aria-label="' +
                            this.settings.strings.closeGallery +
                            '" id="' +
                            this.getIdName("lg-close") +
                            '" class="lg-close lg-icon"></button>'
                          : "",
                      l = this.settings.showMaximizeIcon
                        ? '<button type="button" aria-label="' +
                          this.settings.strings.toggleMaximize +
                          '" id="' +
                          this.getIdName("lg-maximize") +
                          '" class="lg-maximize lg-icon"></button>'
                        : "",
                      c =
                        '\n        <div class="' +
                        o +
                        '" id="' +
                        this.getIdName("lg-container") +
                        '" tabindex="-1" aria-modal="true" ' +
                        n +
                        " " +
                        r +
                        ' role="dialog"\n        >\n            <div id="' +
                        this.getIdName("lg-backdrop") +
                        '" class="lg-backdrop"></div>\n\n            <div id="' +
                        this.getIdName("lg-outer") +
                        '" class="lg-outer lg-use-css3 lg-css3 lg-hide-items ' +
                        s +
                        ' ">\n\n              <div id="' +
                        this.getIdName("lg-content") +
                        '" class="lg-content">\n                <div id="' +
                        this.getIdName("lg-inner") +
                        '" class="lg-inner">\n                </div>\n                ' +
                        t +
                        '\n              </div>\n                <div id="' +
                        this.getIdName("lg-toolbar") +
                        '" class="lg-toolbar lg-group">\n                    ' +
                        l +
                        "\n                    " +
                        a +
                        "\n                    </div>\n                    " +
                        (".lg-outer" === this.settings.appendSubHtmlTo
                          ? i
                          : "") +
                        '\n                <div id="' +
                        this.getIdName("lg-components") +
                        '" class="lg-components">\n                    ' +
                        (".lg-sub-html" === this.settings.appendSubHtmlTo
                          ? i
                          : "") +
                        "\n                </div>\n            </div>\n        </div>\n        ";
                    S(this.settings.container).append(c),
                      document.body !== this.settings.container &&
                        S(this.settings.container).css("position", "relative"),
                      (this.outer = this.getElementById("lg-outer")),
                      (this.$lgComponents =
                        this.getElementById("lg-components")),
                      (this.$backdrop = this.getElementById("lg-backdrop")),
                      (this.$container = this.getElementById("lg-container")),
                      (this.$inner = this.getElementById("lg-inner")),
                      (this.$content = this.getElementById("lg-content")),
                      (this.$toolbar = this.getElementById("lg-toolbar")),
                      this.$backdrop.css(
                        "transition-duration",
                        this.settings.backdropDuration + "ms"
                      );
                    var d = this.settings.mode + " ";
                    this.manageSingleSlideClassName(),
                      this.settings.enableDrag && (d += "lg-grab "),
                      this.outer.addClass(d),
                      this.$inner.css(
                        "transition-timing-function",
                        this.settings.easing
                      ),
                      this.$inner.css(
                        "transition-duration",
                        this.settings.speed + "ms"
                      ),
                      this.settings.download &&
                        this.$toolbar.append(
                          '<a id="' +
                            this.getIdName("lg-download") +
                            '" target="_blank" rel="noopener" aria-label="' +
                            this.settings.strings.download +
                            '" download class="lg-download lg-icon"></a>'
                        ),
                      this.counter(),
                      S(window).on(
                        "resize.lg.global" +
                          this.lgId +
                          " orientationchange.lg.global" +
                          this.lgId,
                        function () {
                          e.refreshOnResize();
                        }
                      ),
                      this.hideBars(),
                      this.manageCloseGallery(),
                      this.toggleMaximize(),
                      this.initModules();
                  }
                }),
                (E.prototype.refreshOnResize = function () {
                  if (this.lgOpened) {
                    var e = this.galleryItems[this.index].__slideVideoInfo;
                    this.mediaContainerPosition =
                      this.getMediaContainerPosition();
                    var t = this.mediaContainerPosition,
                      i = t.top,
                      s = t.bottom;
                    if (
                      ((this.currentImageSize = C(
                        this.items[this.index],
                        this.outer,
                        i + s,
                        e && this.settings.videoMaxSize
                      )),
                      e &&
                        this.resizeVideoSlide(
                          this.index,
                          this.currentImageSize
                        ),
                      this.zoomFromOrigin && !this.isDummyImageRemoved)
                    ) {
                      var r = this.getDummyImgStyles(this.currentImageSize);
                      this.outer
                        .find(".lg-current .lg-dummy-img")
                        .first()
                        .attr("style", r);
                    }
                    this.LGel.trigger(n);
                  }
                }),
                (E.prototype.resizeVideoSlide = function (e, t) {
                  var i = this.getVideoContStyle(t);
                  this.getSlideItem(e).find(".lg-video-cont").attr("style", i);
                }),
                (E.prototype.updateSlides = function (e, t) {
                  if (
                    (this.index > e.length - 1 && (this.index = e.length - 1),
                    1 === e.length && (this.index = 0),
                    e.length)
                  ) {
                    var i = this.galleryItems[t].src;
                    (this.galleryItems = e),
                      this.updateControls(),
                      this.$inner.empty(),
                      (this.currentItemsInDom = []);
                    var s = 0;
                    this.galleryItems.some(function (e, t) {
                      return e.src === i && ((s = t), !0);
                    }),
                      (this.currentItemsInDom = this.organizeSlideItems(s, -1)),
                      this.loadContent(s, !0),
                      this.getSlideItem(s).addClass("lg-current"),
                      (this.index = s),
                      this.updateCurrentCounter(s),
                      this.LGel.trigger(r);
                  } else this.closeGallery();
                }),
                (E.prototype.getItems = function () {
                  if (((this.items = []), this.settings.dynamic))
                    return this.settings.dynamicEl || [];
                  if ("this" === this.settings.selector)
                    this.items.push(this.el);
                  else if (this.settings.selector)
                    if ("string" == typeof this.settings.selector)
                      if (this.settings.selectWithin) {
                        var e = S(this.settings.selectWithin);
                        this.items = e.find(this.settings.selector).get();
                      } else
                        this.items = this.el.querySelectorAll(
                          this.settings.selector
                        );
                    else this.items = this.settings.selector;
                  else this.items = this.el.children;
                  return z(
                    this.items,
                    this.settings.extraProps,
                    this.settings.getCaptionFromTitleOrAlt,
                    this.settings.exThumbImage
                  );
                }),
                (E.prototype.shouldHideScrollbar = function () {
                  return (
                    this.settings.hideScrollbar &&
                    document.body === this.settings.container
                  );
                }),
                (E.prototype.hideScrollbar = function () {
                  if (this.shouldHideScrollbar()) {
                    this.bodyPaddingRight = parseFloat(
                      S("body").style().paddingRight
                    );
                    var e = document.documentElement.getBoundingClientRect(),
                      t = window.innerWidth - e.width;
                    S(document.body).css(
                      "padding-right",
                      t + this.bodyPaddingRight + "px"
                    ),
                      S(document.body).addClass("lg-overlay-open");
                  }
                }),
                (E.prototype.resetScrollBar = function () {
                  this.shouldHideScrollbar() &&
                    (S(document.body).css(
                      "padding-right",
                      this.bodyPaddingRight + "px"
                    ),
                    S(document.body).removeClass("lg-overlay-open"));
                }),
                (E.prototype.openGallery = function (e, t) {
                  var i = this;
                  if (
                    (void 0 === e && (e = this.settings.index), !this.lgOpened)
                  ) {
                    (this.lgOpened = !0),
                      this.outer.removeClass("lg-hide-items"),
                      this.hideScrollbar(),
                      this.$container.addClass("lg-show");
                    var s = this.getItemsToBeInsertedToDom(e, e);
                    this.currentItemsInDom = s;
                    var n = "";
                    s.forEach(function (e) {
                      n = n + '<div id="' + e + '" class="lg-item"></div>';
                    }),
                      this.$inner.append(n),
                      this.addHtml(e);
                    var r = "";
                    this.mediaContainerPosition =
                      this.getMediaContainerPosition();
                    var o = this.mediaContainerPosition,
                      c = o.top,
                      d = o.bottom;
                    this.settings.allowMediaOverlap ||
                      this.setMediaContainerPosition(c, d);
                    var u = this.galleryItems[e].__slideVideoInfo;
                    this.zoomFromOrigin &&
                      t &&
                      ((this.currentImageSize = C(
                        t,
                        this.outer,
                        c + d,
                        u && this.settings.videoMaxSize
                      )),
                      (r = O(t, this.outer, c, d, this.currentImageSize))),
                      (this.zoomFromOrigin && r) ||
                        (this.outer.addClass(this.settings.startClass),
                        this.getSlideItem(e).removeClass("lg-complete"));
                    var h = this.settings.zoomFromOrigin
                      ? 100
                      : this.settings.backdropDuration;
                    setTimeout(function () {
                      i.outer.addClass("lg-components-open");
                    }, h),
                      (this.index = e),
                      this.LGel.trigger(a),
                      this.getSlideItem(e).addClass("lg-current"),
                      (this.lGalleryOn = !1),
                      (this.prevScrollTop = S(window).scrollTop()),
                      setTimeout(function () {
                        if (i.zoomFromOrigin && r) {
                          var t = i.getSlideItem(e);
                          t.css("transform", r),
                            setTimeout(function () {
                              t
                                .addClass(
                                  "lg-start-progress lg-start-end-progress"
                                )
                                .css(
                                  "transition-duration",
                                  i.settings.startAnimationDuration + "ms"
                                ),
                                i.outer.addClass("lg-zoom-from-image");
                            }),
                            setTimeout(function () {
                              t.css("transform", "translate3d(0, 0, 0)");
                            }, 100);
                        }
                        setTimeout(function () {
                          i.$backdrop.addClass("in"),
                            i.$container.addClass("lg-show-in");
                        }, 10),
                          setTimeout(function () {
                            i.settings.trapFocus &&
                              document.body === i.settings.container &&
                              i.trapFocus();
                          }, i.settings.backdropDuration + 50),
                          (i.zoomFromOrigin && r) ||
                            setTimeout(function () {
                              i.outer.addClass("lg-visible");
                            }, i.settings.backdropDuration),
                          i.slide(e, !1, !1, !1),
                          i.LGel.trigger(l);
                      }),
                      document.body === this.settings.container &&
                        S("html").addClass("lg-on");
                  }
                }),
                (E.prototype.getMediaContainerPosition = function () {
                  if (this.settings.allowMediaOverlap)
                    return { top: 0, bottom: 0 };
                  var e = this.$toolbar.get().clientHeight || 0,
                    t = this.outer.find(".lg-components .lg-sub-html").get(),
                    i =
                      this.settings.defaultCaptionHeight ||
                      (t && t.clientHeight) ||
                      0,
                    s = this.outer.find(".lg-thumb-outer").get();
                  return { top: e, bottom: (s ? s.clientHeight : 0) + i };
                }),
                (E.prototype.setMediaContainerPosition = function (e, t) {
                  void 0 === e && (e = 0),
                    void 0 === t && (t = 0),
                    this.$content.css("top", e + "px").css("bottom", t + "px");
                }),
                (E.prototype.hideBars = function () {
                  var e = this;
                  setTimeout(function () {
                    e.outer.removeClass("lg-hide-items"),
                      e.settings.hideBarsDelay > 0 &&
                        (e.outer.on(
                          "mousemove.lg click.lg touchstart.lg",
                          function () {
                            e.outer.removeClass("lg-hide-items"),
                              clearTimeout(e.hideBarTimeout),
                              (e.hideBarTimeout = setTimeout(function () {
                                e.outer.addClass("lg-hide-items");
                              }, e.settings.hideBarsDelay));
                          }
                        ),
                        e.outer.trigger("mousemove.lg"));
                  }, this.settings.showBarsAfter);
                }),
                (E.prototype.initPictureFill = function (e) {
                  if (this.settings.supportLegacyBrowser)
                    try {
                      picturefill({ elements: [e.get()] });
                    } catch (e) {
                      console.warn(
                        "lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document."
                      );
                    }
                }),
                (E.prototype.counter = function () {
                  if (this.settings.counter) {
                    var e =
                      '<div class="lg-counter" role="status" aria-live="polite">\n                <span id="' +
                      this.getIdName("lg-counter-current") +
                      '" class="lg-counter-current">' +
                      (this.index + 1) +
                      ' </span> /\n                <span id="' +
                      this.getIdName("lg-counter-all") +
                      '" class="lg-counter-all">' +
                      this.galleryItems.length +
                      " </span></div>";
                    this.outer.find(this.settings.appendCounterTo).append(e);
                  }
                }),
                (E.prototype.addHtml = function (e) {
                  var t, i;
                  if (
                    (this.galleryItems[e].subHtmlUrl
                      ? (i = this.galleryItems[e].subHtmlUrl)
                      : (t = this.galleryItems[e].subHtml),
                    !i)
                  )
                    if (t) {
                      var s = t.substring(0, 1);
                      ("." !== s && "#" !== s) ||
                        (t =
                          this.settings.subHtmlSelectorRelative &&
                          !this.settings.dynamic
                            ? S(this.items).eq(e).find(t).first().html()
                            : S(t).first().html());
                    } else t = "";
                  if (".lg-item" !== this.settings.appendSubHtmlTo)
                    i
                      ? this.outer.find(".lg-sub-html").load(i)
                      : this.outer.find(".lg-sub-html").html(t);
                  else {
                    var n = S(this.getSlideItemId(e));
                    i
                      ? n.load(i)
                      : n.append('<div class="lg-sub-html">' + t + "</div>");
                  }
                  null != t &&
                    ("" === t
                      ? this.outer
                          .find(this.settings.appendSubHtmlTo)
                          .addClass("lg-empty-html")
                      : this.outer
                          .find(this.settings.appendSubHtmlTo)
                          .removeClass("lg-empty-html")),
                    this.LGel.trigger(o, { index: e });
                }),
                (E.prototype.preload = function (e) {
                  for (
                    var t = 1;
                    t <= this.settings.preload &&
                    !(t >= this.galleryItems.length - e);
                    t++
                  )
                    this.loadContent(e + t, !1);
                  for (
                    var i = 1;
                    i <= this.settings.preload && !(e - i < 0);
                    i++
                  )
                    this.loadContent(e - i, !1);
                }),
                (E.prototype.getDummyImgStyles = function (e) {
                  return e
                    ? "width:" +
                        e.width +
                        "px;\n                margin-left: -" +
                        e.width / 2 +
                        "px;\n                margin-top: -" +
                        e.height / 2 +
                        "px;\n                height:" +
                        e.height +
                        "px"
                    : "";
                }),
                (E.prototype.getVideoContStyle = function (e) {
                  return e
                    ? "width:" +
                        e.width +
                        "px;\n                height:" +
                        e.height +
                        "px"
                    : "";
                }),
                (E.prototype.getDummyImageContent = function (e, t, i) {
                  var s;
                  if ((this.settings.dynamic || (s = S(this.items).eq(t)), s)) {
                    var n = void 0;
                    if (
                      !(n = this.settings.exThumbImage
                        ? s.attr(this.settings.exThumbImage)
                        : s.find("img").first().attr("src"))
                    )
                      return "";
                    var r =
                      "<img " +
                      i +
                      ' style="' +
                      this.getDummyImgStyles(this.currentImageSize) +
                      '" class="lg-dummy-img" src="' +
                      n +
                      '" />';
                    return (
                      e.addClass("lg-first-slide"),
                      this.outer.addClass("lg-first-slide-loading"),
                      r
                    );
                  }
                  return "";
                }),
                (E.prototype.setImgMarkup = function (e, t, i) {
                  var s = this.galleryItems[i],
                    n = s.alt,
                    r = s.srcset,
                    o = s.sizes,
                    a = s.sources,
                    l = n ? 'alt="' + n + '"' : "",
                    c =
                      '<picture class="lg-img-wrap"> ' +
                      (this.isFirstSlideWithZoomAnimation()
                        ? this.getDummyImageContent(t, i, l)
                        : L(i, e, l, r, o, a)) +
                      "</picture>";
                  t.prepend(c);
                }),
                (E.prototype.onSlideObjectLoad = function (e, t, i, s) {
                  var n = e.find(".lg-object").first();
                  M(n.get()) || t
                    ? i()
                    : (n.on("load.lg error.lg", function () {
                        i && i();
                      }),
                      n.on("error.lg", function () {
                        s && s();
                      }));
                }),
                (E.prototype.onLgObjectLoad = function (e, t, i, s, n, r) {
                  var o = this;
                  this.onSlideObjectLoad(
                    e,
                    r,
                    function () {
                      o.triggerSlideItemLoad(e, t, i, s, n);
                    },
                    function () {
                      e.addClass("lg-complete lg-complete_"),
                        e.html(
                          '<span class="lg-error-msg">Oops... Failed to load content...</span>'
                        );
                    }
                  );
                }),
                (E.prototype.triggerSlideItemLoad = function (e, t, i, s, n) {
                  var r = this,
                    o = this.galleryItems[t],
                    a =
                      n && "video" === this.getSlideType(o) && !o.poster
                        ? s
                        : 0;
                  setTimeout(function () {
                    e.addClass("lg-complete lg-complete_"),
                      r.LGel.trigger(c, {
                        index: t,
                        delay: i || 0,
                        isFirstSlide: n,
                      });
                  }, a);
                }),
                (E.prototype.isFirstSlideWithZoomAnimation = function () {
                  return !(
                    this.lGalleryOn ||
                    !this.zoomFromOrigin ||
                    !this.currentImageSize
                  );
                }),
                (E.prototype.addSlideVideoInfo = function (e) {
                  var t = this;
                  e.forEach(function (e, i) {
                    (e.__slideVideoInfo = D(e.src, !!e.video, i)),
                      e.__slideVideoInfo &&
                        t.settings.loadYouTubePoster &&
                        !e.poster &&
                        e.__slideVideoInfo.youtube &&
                        (e.poster =
                          "//img.youtube.com/vi/" +
                          e.__slideVideoInfo.youtube[1] +
                          "/maxresdefault.jpg");
                  });
                }),
                (E.prototype.loadContent = function (e, i) {
                  var n = this,
                    r = this.galleryItems[e],
                    o = S(this.getSlideItemId(e)),
                    a = r.poster,
                    l = r.srcset,
                    c = r.sizes,
                    d = r.sources,
                    u = r.src,
                    h = r.video,
                    p = h && "string" == typeof h ? JSON.parse(h) : h;
                  if (r.responsive) {
                    var f = r.responsive.split(",");
                    u = k(f) || u;
                  }
                  var g = r.__slideVideoInfo,
                    m = "",
                    v = !!r.iframe,
                    b = !this.lGalleryOn,
                    y = 0;
                  if (
                    (b &&
                      (y =
                        this.zoomFromOrigin && this.currentImageSize
                          ? this.settings.startAnimationDuration + 10
                          : this.settings.backdropDuration + 10),
                    !o.hasClass("lg-loaded"))
                  ) {
                    if (g) {
                      var w = this.mediaContainerPosition,
                        x = w.top,
                        E = w.bottom,
                        T = C(
                          this.items[e],
                          this.outer,
                          x + E,
                          g && this.settings.videoMaxSize
                        );
                      m = this.getVideoContStyle(T);
                    }
                    if (v) {
                      var O = I(
                        this.settings.iframeWidth,
                        this.settings.iframeHeight,
                        this.settings.iframeMaxWidth,
                        this.settings.iframeMaxHeight,
                        u,
                        r.iframeTitle
                      );
                      o.prepend(O);
                    } else if (a) {
                      var M = "";
                      b &&
                        this.zoomFromOrigin &&
                        this.currentImageSize &&
                        (M = this.getDummyImageContent(o, e, ""));
                      O = A(a, M || "", m, this.settings.strings.playVideo, g);
                      o.prepend(O);
                    } else if (g) {
                      O =
                        '<div class="lg-video-cont " style="' + m + '"></div>';
                      o.prepend(O);
                    } else if ((this.setImgMarkup(u, o, e), l || d)) {
                      var P = o.find(".lg-object");
                      this.initPictureFill(P);
                    }
                    (a || g) &&
                      this.LGel.trigger(s, {
                        index: e,
                        src: u,
                        html5Video: p,
                        hasPoster: !!a,
                      }),
                      this.LGel.trigger(t, { index: e }),
                      this.lGalleryOn &&
                        ".lg-item" === this.settings.appendSubHtmlTo &&
                        this.addHtml(e);
                  }
                  var z = 0;
                  y && !S(document.body).hasClass("lg-from-hash") && (z = y),
                    this.isFirstSlideWithZoomAnimation() &&
                      (setTimeout(function () {
                        o.removeClass(
                          "lg-start-end-progress lg-start-progress"
                        ).removeAttr("style");
                      }, this.settings.startAnimationDuration + 100),
                      o.hasClass("lg-loaded") ||
                        setTimeout(function () {
                          if ("image" === n.getSlideType(r)) {
                            var t = r.alt,
                              i = t ? 'alt="' + t + '"' : "";
                            if (
                              (o
                                .find(".lg-img-wrap")
                                .append(L(e, u, i, l, c, r.sources)),
                              l || d)
                            ) {
                              var s = o.find(".lg-object");
                              n.initPictureFill(s);
                            }
                          }
                          ("image" === n.getSlideType(r) ||
                            ("video" === n.getSlideType(r) && a)) &&
                            (n.onLgObjectLoad(o, e, y, z, !0, !1),
                            n.onSlideObjectLoad(
                              o,
                              !(!g || !g.html5 || a),
                              function () {
                                n.loadContentOnFirstSlideLoad(e, o, z);
                              },
                              function () {
                                n.loadContentOnFirstSlideLoad(e, o, z);
                              }
                            ));
                        }, this.settings.startAnimationDuration + 100)),
                    o.addClass("lg-loaded"),
                    (this.isFirstSlideWithZoomAnimation() &&
                      ("video" !== this.getSlideType(r) || a)) ||
                      this.onLgObjectLoad(
                        o,
                        e,
                        y,
                        z,
                        b,
                        !(!g || !g.html5 || a)
                      ),
                    (this.zoomFromOrigin && this.currentImageSize) ||
                      !o.hasClass("lg-complete_") ||
                      this.lGalleryOn ||
                      setTimeout(function () {
                        o.addClass("lg-complete");
                      }, this.settings.backdropDuration),
                    (this.lGalleryOn = !0),
                    !0 === i &&
                      (o.hasClass("lg-complete_")
                        ? this.preload(e)
                        : o
                            .find(".lg-object")
                            .first()
                            .on("load.lg error.lg", function () {
                              n.preload(e);
                            }));
                }),
                (E.prototype.loadContentOnFirstSlideLoad = function (e, t, i) {
                  var s = this;
                  setTimeout(function () {
                    t.find(".lg-dummy-img").remove(),
                      t.removeClass("lg-first-slide"),
                      s.outer.removeClass("lg-first-slide-loading"),
                      (s.isDummyImageRemoved = !0),
                      s.preload(e);
                  }, i + 300);
                }),
                (E.prototype.getItemsToBeInsertedToDom = function (e, t, i) {
                  var s = this;
                  void 0 === i && (i = 0);
                  var n = [],
                    r = Math.max(i, 3);
                  r = Math.min(r, this.galleryItems.length);
                  var o = "lg-item-" + this.lgId + "-" + t;
                  if (this.galleryItems.length <= 3)
                    return (
                      this.galleryItems.forEach(function (e, t) {
                        n.push("lg-item-" + s.lgId + "-" + t);
                      }),
                      n
                    );
                  if (e < (this.galleryItems.length - 1) / 2) {
                    for (var a = e; a > e - r / 2 && a >= 0; a--)
                      n.push("lg-item-" + this.lgId + "-" + a);
                    var l = n.length;
                    for (a = 0; a < r - l; a++)
                      n.push("lg-item-" + this.lgId + "-" + (e + a + 1));
                  } else {
                    for (
                      a = e;
                      a <= this.galleryItems.length - 1 && a < e + r / 2;
                      a++
                    )
                      n.push("lg-item-" + this.lgId + "-" + a);
                    for (l = n.length, a = 0; a < r - l; a++)
                      n.push("lg-item-" + this.lgId + "-" + (e - a - 1));
                  }
                  return (
                    this.settings.loop &&
                      (e === this.galleryItems.length - 1
                        ? n.push("lg-item-" + this.lgId + "-0")
                        : 0 === e &&
                          n.push(
                            "lg-item-" +
                              this.lgId +
                              "-" +
                              (this.galleryItems.length - 1)
                          )),
                    -1 === n.indexOf(o) &&
                      n.push("lg-item-" + this.lgId + "-" + t),
                    n
                  );
                }),
                (E.prototype.organizeSlideItems = function (e, t) {
                  var i = this,
                    s = this.getItemsToBeInsertedToDom(
                      e,
                      t,
                      this.settings.numberOfSlideItemsInDom
                    );
                  return (
                    s.forEach(function (e) {
                      -1 === i.currentItemsInDom.indexOf(e) &&
                        i.$inner.append(
                          '<div id="' + e + '" class="lg-item"></div>'
                        );
                    }),
                    this.currentItemsInDom.forEach(function (e) {
                      -1 === s.indexOf(e) && S("#" + e).remove();
                    }),
                    s
                  );
                }),
                (E.prototype.getPreviousSlideIndex = function () {
                  var e = 0;
                  try {
                    var t = this.outer.find(".lg-current").first().attr("id");
                    e = parseInt(t.split("-")[3]) || 0;
                  } catch (t) {
                    e = 0;
                  }
                  return e;
                }),
                (E.prototype.setDownloadValue = function (e) {
                  if (this.settings.download) {
                    var t = this.galleryItems[e];
                    if (!1 === t.downloadUrl || "false" === t.downloadUrl)
                      this.outer.addClass("lg-hide-download");
                    else {
                      var i = this.getElementById("lg-download");
                      this.outer.removeClass("lg-hide-download"),
                        i.attr("href", t.downloadUrl || t.src),
                        t.download && i.attr("download", t.download);
                    }
                  }
                }),
                (E.prototype.makeSlideAnimation = function (e, t, i) {
                  var s = this;
                  this.lGalleryOn && i.addClass("lg-slide-progress"),
                    setTimeout(
                      function () {
                        s.outer.addClass("lg-no-trans"),
                          s.outer
                            .find(".lg-item")
                            .removeClass("lg-prev-slide lg-next-slide"),
                          "prev" === e
                            ? (t.addClass("lg-prev-slide"),
                              i.addClass("lg-next-slide"))
                            : (t.addClass("lg-next-slide"),
                              i.addClass("lg-prev-slide")),
                          setTimeout(function () {
                            s.outer.find(".lg-item").removeClass("lg-current"),
                              t.addClass("lg-current"),
                              s.outer.removeClass("lg-no-trans");
                          }, 50);
                      },
                      this.lGalleryOn ? this.settings.slideDelay : 0
                    );
                }),
                (E.prototype.slide = function (e, t, i, s) {
                  var n = this,
                    r = this.getPreviousSlideIndex();
                  if (
                    ((this.currentItemsInDom = this.organizeSlideItems(e, r)),
                    !this.lGalleryOn || r !== e)
                  ) {
                    var o = this.galleryItems.length;
                    if (!this.lgBusy) {
                      this.settings.counter && this.updateCurrentCounter(e);
                      var a = this.getSlideItem(e),
                        l = this.getSlideItem(r),
                        c = this.galleryItems[e],
                        h = c.__slideVideoInfo;
                      if (
                        (this.outer.attr(
                          "data-lg-slide-type",
                          this.getSlideType(c)
                        ),
                        this.setDownloadValue(e),
                        h)
                      ) {
                        var p = this.mediaContainerPosition,
                          f = p.top,
                          g = p.bottom,
                          m = C(
                            this.items[e],
                            this.outer,
                            f + g,
                            h && this.settings.videoMaxSize
                          );
                        this.resizeVideoSlide(e, m);
                      }
                      if (
                        (this.LGel.trigger(d, {
                          prevIndex: r,
                          index: e,
                          fromTouch: !!t,
                          fromThumb: !!i,
                        }),
                        (this.lgBusy = !0),
                        clearTimeout(this.hideBarTimeout),
                        this.arrowDisable(e),
                        s || (e < r ? (s = "prev") : e > r && (s = "next")),
                        t)
                      ) {
                        this.outer
                          .find(".lg-item")
                          .removeClass(
                            "lg-prev-slide lg-current lg-next-slide"
                          );
                        var v = void 0,
                          b = void 0;
                        o > 2
                          ? ((v = e - 1),
                            (b = e + 1),
                            ((0 === e && r === o - 1) ||
                              (e === o - 1 && 0 === r)) &&
                              ((b = 0), (v = o - 1)))
                          : ((v = 0), (b = 1)),
                          "prev" === s
                            ? this.getSlideItem(b).addClass("lg-next-slide")
                            : this.getSlideItem(v).addClass("lg-prev-slide"),
                          a.addClass("lg-current");
                      } else this.makeSlideAnimation(s, a, l);
                      this.lGalleryOn
                        ? setTimeout(function () {
                            n.loadContent(e, !0),
                              ".lg-item" !== n.settings.appendSubHtmlTo &&
                                n.addHtml(e);
                          }, this.settings.speed +
                            50 +
                            (t ? 0 : this.settings.slideDelay))
                        : this.loadContent(e, !0),
                        setTimeout(function () {
                          (n.lgBusy = !1),
                            l.removeClass("lg-slide-progress"),
                            n.LGel.trigger(u, {
                              prevIndex: r,
                              index: e,
                              fromTouch: t,
                              fromThumb: i,
                            });
                        }, (this.lGalleryOn ? this.settings.speed + 100 : 100) +
                          (t ? 0 : this.settings.slideDelay));
                    }
                    this.index = e;
                  }
                }),
                (E.prototype.updateCurrentCounter = function (e) {
                  this.getElementById("lg-counter-current").html(e + 1 + "");
                }),
                (E.prototype.updateCounterTotal = function () {
                  this.getElementById("lg-counter-all").html(
                    this.galleryItems.length + ""
                  );
                }),
                (E.prototype.getSlideType = function (e) {
                  return e.__slideVideoInfo
                    ? "video"
                    : e.iframe
                    ? "iframe"
                    : "image";
                }),
                (E.prototype.touchMove = function (e, t, i) {
                  var s = t.pageX - e.pageX,
                    n = t.pageY - e.pageY,
                    r = !1;
                  if (
                    (this.swipeDirection
                      ? (r = !0)
                      : Math.abs(s) > 15
                      ? ((this.swipeDirection = "horizontal"), (r = !0))
                      : Math.abs(n) > 15 &&
                        ((this.swipeDirection = "vertical"), (r = !0)),
                    r)
                  ) {
                    var o = this.getSlideItem(this.index);
                    if ("horizontal" === this.swipeDirection) {
                      null == i || i.preventDefault(),
                        this.outer.addClass("lg-dragging"),
                        this.setTranslate(o, s, 0);
                      var a = o.get().offsetWidth,
                        l = (15 * a) / 100 - Math.abs((10 * s) / 100);
                      this.setTranslate(
                        this.outer.find(".lg-prev-slide").first(),
                        -a + s - l,
                        0
                      ),
                        this.setTranslate(
                          this.outer.find(".lg-next-slide").first(),
                          a + s + l,
                          0
                        );
                    } else if (
                      "vertical" === this.swipeDirection &&
                      this.settings.swipeToClose
                    ) {
                      null == i || i.preventDefault(),
                        this.$container.addClass("lg-dragging-vertical");
                      var c = 1 - Math.abs(n) / window.innerHeight;
                      this.$backdrop.css("opacity", c);
                      var d = 1 - Math.abs(n) / (2 * window.innerWidth);
                      this.setTranslate(o, 0, n, d, d),
                        Math.abs(n) > 100 &&
                          this.outer
                            .addClass("lg-hide-items")
                            .removeClass("lg-components-open");
                    }
                  }
                }),
                (E.prototype.touchEnd = function (e, t, i) {
                  var s,
                    n = this;
                  "lg-slide" !== this.settings.mode &&
                    this.outer.addClass("lg-slide"),
                    setTimeout(function () {
                      n.$container.removeClass("lg-dragging-vertical"),
                        n.outer
                          .removeClass("lg-dragging lg-hide-items")
                          .addClass("lg-components-open");
                      var r = !0;
                      if ("horizontal" === n.swipeDirection) {
                        s = e.pageX - t.pageX;
                        var o = Math.abs(e.pageX - t.pageX);
                        s < 0 && o > n.settings.swipeThreshold
                          ? (n.goToNextSlide(!0), (r = !1))
                          : s > 0 &&
                            o > n.settings.swipeThreshold &&
                            (n.goToPrevSlide(!0), (r = !1));
                      } else if ("vertical" === n.swipeDirection) {
                        if (
                          ((s = Math.abs(e.pageY - t.pageY)),
                          n.settings.closable &&
                            n.settings.swipeToClose &&
                            s > 100)
                        )
                          return void n.closeGallery();
                        n.$backdrop.css("opacity", 1);
                      }
                      if (
                        (n.outer.find(".lg-item").removeAttr("style"),
                        r && Math.abs(e.pageX - t.pageX) < 5)
                      ) {
                        var a = S(i.target);
                        n.isPosterElement(a) && n.LGel.trigger(h);
                      }
                      n.swipeDirection = void 0;
                    }),
                    setTimeout(function () {
                      n.outer.hasClass("lg-dragging") ||
                        "lg-slide" === n.settings.mode ||
                        n.outer.removeClass("lg-slide");
                    }, this.settings.speed + 100);
                }),
                (E.prototype.enableSwipe = function () {
                  var e = this,
                    t = {},
                    i = {},
                    s = !1,
                    n = !1;
                  this.settings.enableSwipe &&
                    (this.$inner.on("touchstart.lg", function (i) {
                      e.dragOrSwipeEnabled = !0;
                      var s = e.getSlideItem(e.index);
                      (!S(i.target).hasClass("lg-item") &&
                        !s.get().contains(i.target)) ||
                        e.outer.hasClass("lg-zoomed") ||
                        e.lgBusy ||
                        1 !== i.touches.length ||
                        ((n = !0),
                        (e.touchAction = "swipe"),
                        e.manageSwipeClass(),
                        (t = {
                          pageX: i.touches[0].pageX,
                          pageY: i.touches[0].pageY,
                        }));
                    }),
                    this.$inner.on("touchmove.lg", function (r) {
                      n &&
                        "swipe" === e.touchAction &&
                        1 === r.touches.length &&
                        ((i = {
                          pageX: r.touches[0].pageX,
                          pageY: r.touches[0].pageY,
                        }),
                        e.touchMove(t, i, r),
                        (s = !0));
                    }),
                    this.$inner.on("touchend.lg", function (r) {
                      if ("swipe" === e.touchAction) {
                        if (s) (s = !1), e.touchEnd(i, t, r);
                        else if (n) {
                          var o = S(r.target);
                          e.isPosterElement(o) && e.LGel.trigger(h);
                        }
                        (e.touchAction = void 0), (n = !1);
                      }
                    }));
                }),
                (E.prototype.enableDrag = function () {
                  var e = this,
                    t = {},
                    i = {},
                    s = !1,
                    n = !1;
                  this.settings.enableDrag &&
                    (this.outer.on("mousedown.lg", function (i) {
                      e.dragOrSwipeEnabled = !0;
                      var n = e.getSlideItem(e.index);
                      (S(i.target).hasClass("lg-item") ||
                        n.get().contains(i.target)) &&
                        (e.outer.hasClass("lg-zoomed") ||
                          e.lgBusy ||
                          (i.preventDefault(),
                          e.lgBusy ||
                            (e.manageSwipeClass(),
                            (t = { pageX: i.pageX, pageY: i.pageY }),
                            (s = !0),
                            (e.outer.get().scrollLeft += 1),
                            (e.outer.get().scrollLeft -= 1),
                            e.outer
                              .removeClass("lg-grab")
                              .addClass("lg-grabbing"),
                            e.LGel.trigger(p))));
                    }),
                    S(window).on(
                      "mousemove.lg.global" + this.lgId,
                      function (r) {
                        s &&
                          e.lgOpened &&
                          ((n = !0),
                          (i = { pageX: r.pageX, pageY: r.pageY }),
                          e.touchMove(t, i),
                          e.LGel.trigger(f));
                      }
                    ),
                    S(window).on("mouseup.lg.global" + this.lgId, function (r) {
                      if (e.lgOpened) {
                        var o = S(r.target);
                        n
                          ? ((n = !1), e.touchEnd(i, t, r), e.LGel.trigger(g))
                          : e.isPosterElement(o) && e.LGel.trigger(h),
                          s &&
                            ((s = !1),
                            e.outer
                              .removeClass("lg-grabbing")
                              .addClass("lg-grab"));
                      }
                    }));
                }),
                (E.prototype.triggerPosterClick = function () {
                  var e = this;
                  this.$inner.on("click.lg", function (t) {
                    !e.dragOrSwipeEnabled &&
                      e.isPosterElement(S(t.target)) &&
                      e.LGel.trigger(h);
                  });
                }),
                (E.prototype.manageSwipeClass = function () {
                  var e = this.index + 1,
                    t = this.index - 1;
                  this.settings.loop &&
                    this.galleryItems.length > 2 &&
                    (0 === this.index
                      ? (t = this.galleryItems.length - 1)
                      : this.index === this.galleryItems.length - 1 && (e = 0)),
                    this.outer
                      .find(".lg-item")
                      .removeClass("lg-next-slide lg-prev-slide"),
                    t > -1 && this.getSlideItem(t).addClass("lg-prev-slide"),
                    this.getSlideItem(e).addClass("lg-next-slide");
                }),
                (E.prototype.goToNextSlide = function (e) {
                  var t = this,
                    i = this.settings.loop;
                  e && this.galleryItems.length < 3 && (i = !1),
                    this.lgBusy ||
                      (this.index + 1 < this.galleryItems.length
                        ? (this.index++,
                          this.LGel.trigger(m, { index: this.index }),
                          this.slide(this.index, !!e, !1, "next"))
                        : i
                        ? ((this.index = 0),
                          this.LGel.trigger(m, { index: this.index }),
                          this.slide(this.index, !!e, !1, "next"))
                        : this.settings.slideEndAnimation &&
                          !e &&
                          (this.outer.addClass("lg-right-end"),
                          setTimeout(function () {
                            t.outer.removeClass("lg-right-end");
                          }, 400)));
                }),
                (E.prototype.goToPrevSlide = function (e) {
                  var t = this,
                    i = this.settings.loop;
                  e && this.galleryItems.length < 3 && (i = !1),
                    this.lgBusy ||
                      (this.index > 0
                        ? (this.index--,
                          this.LGel.trigger(v, {
                            index: this.index,
                            fromTouch: e,
                          }),
                          this.slide(this.index, !!e, !1, "prev"))
                        : i
                        ? ((this.index = this.galleryItems.length - 1),
                          this.LGel.trigger(v, {
                            index: this.index,
                            fromTouch: e,
                          }),
                          this.slide(this.index, !!e, !1, "prev"))
                        : this.settings.slideEndAnimation &&
                          !e &&
                          (this.outer.addClass("lg-left-end"),
                          setTimeout(function () {
                            t.outer.removeClass("lg-left-end");
                          }, 400)));
                }),
                (E.prototype.keyPress = function () {
                  var e = this;
                  S(window).on("keydown.lg.global" + this.lgId, function (t) {
                    e.lgOpened &&
                      !0 === e.settings.escKey &&
                      27 === t.keyCode &&
                      (t.preventDefault(),
                      e.settings.allowMediaOverlap &&
                      e.outer.hasClass("lg-can-toggle") &&
                      e.outer.hasClass("lg-components-open")
                        ? e.outer.removeClass("lg-components-open")
                        : e.closeGallery()),
                      e.lgOpened &&
                        e.galleryItems.length > 1 &&
                        (37 === t.keyCode &&
                          (t.preventDefault(), e.goToPrevSlide()),
                        39 === t.keyCode &&
                          (t.preventDefault(), e.goToNextSlide()));
                  });
                }),
                (E.prototype.arrow = function () {
                  var e = this;
                  this.getElementById("lg-prev").on("click.lg", function () {
                    e.goToPrevSlide();
                  }),
                    this.getElementById("lg-next").on("click.lg", function () {
                      e.goToNextSlide();
                    });
                }),
                (E.prototype.arrowDisable = function (e) {
                  if (!this.settings.loop && this.settings.hideControlOnEnd) {
                    var t = this.getElementById("lg-prev"),
                      i = this.getElementById("lg-next");
                    e + 1 === this.galleryItems.length
                      ? i.attr("disabled", "disabled").addClass("disabled")
                      : i.removeAttr("disabled").removeClass("disabled"),
                      0 === e
                        ? t.attr("disabled", "disabled").addClass("disabled")
                        : t.removeAttr("disabled").removeClass("disabled");
                  }
                }),
                (E.prototype.setTranslate = function (e, t, i, s, n) {
                  void 0 === s && (s = 1),
                    void 0 === n && (n = 1),
                    e.css(
                      "transform",
                      "translate3d(" +
                        t +
                        "px, " +
                        i +
                        "px, 0px) scale3d(" +
                        s +
                        ", " +
                        n +
                        ", 1)"
                    );
                }),
                (E.prototype.mousewheel = function () {
                  var e = this,
                    t = 0;
                  this.outer.on("wheel.lg", function (i) {
                    if (i.deltaY && !(e.galleryItems.length < 2)) {
                      i.preventDefault();
                      var s = new Date().getTime();
                      s - t < 1e3 ||
                        ((t = s),
                        i.deltaY > 0
                          ? e.goToNextSlide()
                          : i.deltaY < 0 && e.goToPrevSlide());
                    }
                  });
                }),
                (E.prototype.isSlideElement = function (e) {
                  return (
                    e.hasClass("lg-outer") ||
                    e.hasClass("lg-item") ||
                    e.hasClass("lg-img-wrap")
                  );
                }),
                (E.prototype.isPosterElement = function (e) {
                  var t = this.getSlideItem(this.index)
                    .find(".lg-video-play-button")
                    .get();
                  return (
                    e.hasClass("lg-video-poster") ||
                    e.hasClass("lg-video-play-button") ||
                    (t && t.contains(e.get()))
                  );
                }),
                (E.prototype.toggleMaximize = function () {
                  var e = this;
                  this.getElementById("lg-maximize").on(
                    "click.lg",
                    function () {
                      e.$container.toggleClass("lg-inline"),
                        e.refreshOnResize();
                    }
                  );
                }),
                (E.prototype.invalidateItems = function () {
                  for (var e = 0; e < this.items.length; e++) {
                    var t = S(this.items[e]);
                    t.off("click.lgcustom-item-" + t.attr("data-lg-id"));
                  }
                }),
                (E.prototype.trapFocus = function () {
                  var e = this;
                  this.$container.get().focus({ preventScroll: !0 }),
                    S(window).on("keydown.lg.global" + this.lgId, function (t) {
                      if (e.lgOpened && ("Tab" === t.key || 9 === t.keyCode)) {
                        var i = P(e.$container.get()),
                          s = i[0],
                          n = i[i.length - 1];
                        t.shiftKey
                          ? document.activeElement === s &&
                            (n.focus(), t.preventDefault())
                          : document.activeElement === n &&
                            (s.focus(), t.preventDefault());
                      }
                    });
                }),
                (E.prototype.manageCloseGallery = function () {
                  var e = this;
                  if (this.settings.closable) {
                    var t = !1;
                    this.getElementById("lg-close").on("click.lg", function () {
                      e.closeGallery();
                    }),
                      this.settings.closeOnTap &&
                        (this.outer.on("mousedown.lg", function (i) {
                          var s = S(i.target);
                          t = !!e.isSlideElement(s);
                        }),
                        this.outer.on("mousemove.lg", function () {
                          t = !1;
                        }),
                        this.outer.on("mouseup.lg", function (i) {
                          var s = S(i.target);
                          e.isSlideElement(s) &&
                            t &&
                            (e.outer.hasClass("lg-dragging") ||
                              e.closeGallery());
                        }));
                  }
                }),
                (E.prototype.closeGallery = function (e) {
                  var t = this;
                  if (!this.lgOpened || (!this.settings.closable && !e))
                    return 0;
                  this.LGel.trigger(b),
                    this.settings.resetScrollPosition &&
                      !this.settings.hideScrollbar &&
                      S(window).scrollTop(this.prevScrollTop);
                  var i,
                    s = this.items[this.index];
                  if (this.zoomFromOrigin && s) {
                    var n = this.mediaContainerPosition,
                      r = n.top,
                      o = n.bottom,
                      a = this.galleryItems[this.index],
                      l = a.__slideVideoInfo,
                      c = a.poster,
                      d = C(
                        s,
                        this.outer,
                        r + o,
                        l && c && this.settings.videoMaxSize
                      );
                    i = O(s, this.outer, r, o, d);
                  }
                  this.zoomFromOrigin && i
                    ? (this.outer.addClass("lg-closing lg-zoom-from-image"),
                      this.getSlideItem(this.index)
                        .addClass("lg-start-end-progress")
                        .css(
                          "transition-duration",
                          this.settings.startAnimationDuration + "ms"
                        )
                        .css("transform", i))
                    : (this.outer.addClass("lg-hide-items"),
                      this.outer.removeClass("lg-zoom-from-image")),
                    this.destroyModules(),
                    (this.lGalleryOn = !1),
                    (this.isDummyImageRemoved = !1),
                    (this.zoomFromOrigin = this.settings.zoomFromOrigin),
                    clearTimeout(this.hideBarTimeout),
                    (this.hideBarTimeout = !1),
                    S("html").removeClass("lg-on"),
                    this.outer.removeClass("lg-visible lg-components-open"),
                    this.$backdrop.removeClass("in").css("opacity", 0);
                  var u =
                    this.zoomFromOrigin && i
                      ? Math.max(
                          this.settings.startAnimationDuration,
                          this.settings.backdropDuration
                        )
                      : this.settings.backdropDuration;
                  return (
                    this.$container.removeClass("lg-show-in"),
                    setTimeout(function () {
                      t.zoomFromOrigin &&
                        i &&
                        t.outer.removeClass("lg-zoom-from-image"),
                        t.$container.removeClass("lg-show"),
                        t.resetScrollBar(),
                        t.$backdrop
                          .removeAttr("style")
                          .css(
                            "transition-duration",
                            t.settings.backdropDuration + "ms"
                          ),
                        t.outer.removeClass(
                          "lg-closing " + t.settings.startClass
                        ),
                        t
                          .getSlideItem(t.index)
                          .removeClass("lg-start-end-progress"),
                        t.$inner.empty(),
                        t.lgOpened && t.LGel.trigger(y, { instance: t }),
                        t.$container.get() && t.$container.get().blur(),
                        (t.lgOpened = !1);
                    }, u + 100),
                    u + 100
                  );
                }),
                (E.prototype.initModules = function () {
                  this.plugins.forEach(function (e) {
                    try {
                      e.init();
                    } catch (e) {
                      console.warn(
                        "lightGallery:- make sure lightGallery module is properly initiated"
                      );
                    }
                  });
                }),
                (E.prototype.destroyModules = function (e) {
                  this.plugins.forEach(function (t) {
                    try {
                      e ? t.destroy() : t.closeGallery && t.closeGallery();
                    } catch (e) {
                      console.warn(
                        "lightGallery:- make sure lightGallery module is properly destroyed"
                      );
                    }
                  });
                }),
                (E.prototype.refresh = function (e) {
                  this.settings.dynamic || this.invalidateItems(),
                    (this.galleryItems = e || this.getItems()),
                    this.updateControls(),
                    this.openGalleryOnItemClick(),
                    this.LGel.trigger(r);
                }),
                (E.prototype.updateControls = function () {
                  this.addSlideVideoInfo(this.galleryItems),
                    this.updateCounterTotal(),
                    this.manageSingleSlideClassName();
                }),
                (E.prototype.destroyGallery = function () {
                  this.destroyModules(!0),
                    this.settings.dynamic || this.invalidateItems(),
                    S(window).off(".lg.global" + this.lgId),
                    this.LGel.off(".lg"),
                    this.$container.remove();
                }),
                (E.prototype.destroy = function () {
                  var e = this.closeGallery(!0);
                  return (
                    e
                      ? setTimeout(this.destroyGallery.bind(this), e)
                      : this.destroyGallery(),
                    e
                  );
                }),
                E
              );
            })();
          return function (e, t) {
            return new B(e, t);
          };
        }),
        (function (e, t) {
          "object" == typeof exports && "undefined" != typeof module
            ? (module.exports = t())
            : "function" == typeof define && define.amd
            ? define(t)
            : ((e =
                "undefined" != typeof globalThis
                  ? globalThis
                  : e || self).lgThumbnail = t());
        })(void 0, function () {
          var e = function () {
              return (
                (e =
                  Object.assign ||
                  function (e) {
                    for (var t, i = 1, s = arguments.length; i < s; i++)
                      for (var n in (t = arguments[i]))
                        Object.prototype.hasOwnProperty.call(t, n) &&
                          (e[n] = t[n]);
                    return e;
                  }),
                e.apply(this, arguments)
              );
            },
            t = {
              thumbnail: !0,
              animateThumb: !0,
              currentPagerPosition: "middle",
              alignThumbnails: "middle",
              thumbWidth: 100,
              thumbHeight: "80px",
              thumbMargin: 5,
              appendThumbnailsTo: ".lg-components",
              toggleThumb: !1,
              enableThumbDrag: !0,
              enableThumbSwipe: !0,
              thumbnailSwipeThreshold: 10,
              loadYouTubeThumbnail: !0,
              youTubeThumbSize: 1,
              thumbnailPluginStrings: { toggleThumbnails: "Toggle thumbnails" },
            },
            i = "lgContainerResize",
            s = "lgUpdateSlides",
            n = "lgBeforeOpen",
            r = "lgBeforeSlide",
            o = (function () {
              function o(e, t) {
                return (
                  (this.thumbOuterWidth = 0),
                  (this.thumbTotalWidth = 0),
                  (this.translateX = 0),
                  (this.thumbClickable = !1),
                  (this.core = e),
                  (this.$LG = t),
                  this
                );
              }
              return (
                (o.prototype.init = function () {
                  (this.settings = e(e({}, t), this.core.settings)),
                    (this.thumbOuterWidth = 0),
                    (this.thumbTotalWidth =
                      this.core.galleryItems.length *
                      (this.settings.thumbWidth + this.settings.thumbMargin)),
                    (this.translateX = 0),
                    this.setAnimateThumbStyles(),
                    this.core.settings.allowMediaOverlap ||
                      (this.settings.toggleThumb = !1),
                    this.settings.thumbnail &&
                      (this.build(),
                      this.settings.animateThumb
                        ? (this.settings.enableThumbDrag &&
                            this.enableThumbDrag(),
                          this.settings.enableThumbSwipe &&
                            this.enableThumbSwipe(),
                          (this.thumbClickable = !1))
                        : (this.thumbClickable = !0),
                      this.toggleThumbBar(),
                      this.thumbKeyPress());
                }),
                (o.prototype.build = function () {
                  var e = this;
                  this.setThumbMarkup(),
                    this.manageActiveClassOnSlideChange(),
                    this.$lgThumb
                      .first()
                      .on("click.lg touchend.lg", function (t) {
                        var i = e.$LG(t.target);
                        i.hasAttribute("data-lg-item-id") &&
                          setTimeout(function () {
                            if (e.thumbClickable && !e.core.lgBusy) {
                              var t = parseInt(i.attr("data-lg-item-id"));
                              e.core.slide(t, !1, !0, !1);
                            }
                          }, 50);
                      }),
                    this.core.LGel.on(r + ".thumb", function (t) {
                      var i = t.detail.index;
                      e.animateThumb(i);
                    }),
                    this.core.LGel.on(n + ".thumb", function () {
                      e.thumbOuterWidth = e.core.outer.get().offsetWidth;
                    }),
                    this.core.LGel.on(s + ".thumb", function () {
                      e.rebuildThumbnails();
                    }),
                    this.core.LGel.on(i + ".thumb", function () {
                      e.core.lgOpened &&
                        setTimeout(function () {
                          (e.thumbOuterWidth = e.core.outer.get().offsetWidth),
                            e.animateThumb(e.core.index),
                            (e.thumbOuterWidth =
                              e.core.outer.get().offsetWidth);
                        }, 50);
                    });
                }),
                (o.prototype.setThumbMarkup = function () {
                  var e = "lg-thumb-outer ";
                  this.settings.alignThumbnails &&
                    (e += "lg-thumb-align-" + this.settings.alignThumbnails);
                  var t =
                    '<div class="' +
                    e +
                    '">\n        <div class="lg-thumb lg-group">\n        </div>\n        </div>';
                  this.core.outer.addClass("lg-has-thumb"),
                    ".lg-components" === this.settings.appendThumbnailsTo
                      ? this.core.$lgComponents.append(t)
                      : this.core.outer.append(t),
                    (this.$thumbOuter = this.core.outer
                      .find(".lg-thumb-outer")
                      .first()),
                    (this.$lgThumb = this.core.outer.find(".lg-thumb").first()),
                    this.settings.animateThumb &&
                      this.core.outer
                        .find(".lg-thumb")
                        .css(
                          "transition-duration",
                          this.core.settings.speed + "ms"
                        )
                        .css("width", this.thumbTotalWidth + "px")
                        .css("position", "relative"),
                    this.setThumbItemHtml(this.core.galleryItems);
                }),
                (o.prototype.enableThumbDrag = function () {
                  var e = this,
                    t = {
                      cords: { startX: 0, endX: 0 },
                      isMoved: !1,
                      newTranslateX: 0,
                      startTime: new Date(),
                      endTime: new Date(),
                      touchMoveTime: 0,
                    },
                    i = !1;
                  this.$thumbOuter.addClass("lg-grab"),
                    this.core.outer
                      .find(".lg-thumb")
                      .first()
                      .on("mousedown.lg.thumb", function (s) {
                        e.thumbTotalWidth > e.thumbOuterWidth &&
                          (s.preventDefault(),
                          (t.cords.startX = s.pageX),
                          (t.startTime = new Date()),
                          (e.thumbClickable = !1),
                          (i = !0),
                          (e.core.outer.get().scrollLeft += 1),
                          (e.core.outer.get().scrollLeft -= 1),
                          e.$thumbOuter
                            .removeClass("lg-grab")
                            .addClass("lg-grabbing"));
                      }),
                    this.$LG(window).on(
                      "mousemove.lg.thumb.global" + this.core.lgId,
                      function (s) {
                        e.core.lgOpened &&
                          i &&
                          ((t.cords.endX = s.pageX),
                          (t = e.onThumbTouchMove(t)));
                      }
                    ),
                    this.$LG(window).on(
                      "mouseup.lg.thumb.global" + this.core.lgId,
                      function () {
                        e.core.lgOpened &&
                          (t.isMoved
                            ? (t = e.onThumbTouchEnd(t))
                            : (e.thumbClickable = !0),
                          i &&
                            ((i = !1),
                            e.$thumbOuter
                              .removeClass("lg-grabbing")
                              .addClass("lg-grab")));
                      }
                    );
                }),
                (o.prototype.enableThumbSwipe = function () {
                  var e = this,
                    t = {
                      cords: { startX: 0, endX: 0 },
                      isMoved: !1,
                      newTranslateX: 0,
                      startTime: new Date(),
                      endTime: new Date(),
                      touchMoveTime: 0,
                    };
                  this.$lgThumb.on("touchstart.lg", function (i) {
                    e.thumbTotalWidth > e.thumbOuterWidth &&
                      (i.preventDefault(),
                      (t.cords.startX = i.targetTouches[0].pageX),
                      (e.thumbClickable = !1),
                      (t.startTime = new Date()));
                  }),
                    this.$lgThumb.on("touchmove.lg", function (i) {
                      e.thumbTotalWidth > e.thumbOuterWidth &&
                        (i.preventDefault(),
                        (t.cords.endX = i.targetTouches[0].pageX),
                        (t = e.onThumbTouchMove(t)));
                    }),
                    this.$lgThumb.on("touchend.lg", function () {
                      t.isMoved
                        ? (t = e.onThumbTouchEnd(t))
                        : (e.thumbClickable = !0);
                    });
                }),
                (o.prototype.rebuildThumbnails = function () {
                  var e = this;
                  this.$thumbOuter.addClass("lg-rebuilding-thumbnails"),
                    setTimeout(function () {
                      (e.thumbTotalWidth =
                        e.core.galleryItems.length *
                        (e.settings.thumbWidth + e.settings.thumbMargin)),
                        e.$lgThumb.css("width", e.thumbTotalWidth + "px"),
                        e.$lgThumb.empty(),
                        e.setThumbItemHtml(e.core.galleryItems),
                        e.animateThumb(e.core.index);
                    }, 50),
                    setTimeout(function () {
                      e.$thumbOuter.removeClass("lg-rebuilding-thumbnails");
                    }, 200);
                }),
                (o.prototype.setTranslate = function (e) {
                  this.$lgThumb.css(
                    "transform",
                    "translate3d(-" + e + "px, 0px, 0px)"
                  );
                }),
                (o.prototype.getPossibleTransformX = function (e) {
                  return (
                    e > this.thumbTotalWidth - this.thumbOuterWidth &&
                      (e = this.thumbTotalWidth - this.thumbOuterWidth),
                    e < 0 && (e = 0),
                    e
                  );
                }),
                (o.prototype.animateThumb = function (e) {
                  if (
                    (this.$lgThumb.css(
                      "transition-duration",
                      this.core.settings.speed + "ms"
                    ),
                    this.settings.animateThumb)
                  ) {
                    var t = 0;
                    switch (this.settings.currentPagerPosition) {
                      case "left":
                        t = 0;
                        break;
                      case "middle":
                        t =
                          this.thumbOuterWidth / 2 -
                          this.settings.thumbWidth / 2;
                        break;
                      case "right":
                        t = this.thumbOuterWidth - this.settings.thumbWidth;
                    }
                    (this.translateX =
                      (this.settings.thumbWidth + this.settings.thumbMargin) *
                        e -
                      1 -
                      t),
                      this.translateX >
                        this.thumbTotalWidth - this.thumbOuterWidth &&
                        (this.translateX =
                          this.thumbTotalWidth - this.thumbOuterWidth),
                      this.translateX < 0 && (this.translateX = 0),
                      this.setTranslate(this.translateX);
                  }
                }),
                (o.prototype.onThumbTouchMove = function (e) {
                  return (
                    (e.newTranslateX = this.translateX),
                    (e.isMoved = !0),
                    (e.touchMoveTime = new Date().valueOf()),
                    (e.newTranslateX -= e.cords.endX - e.cords.startX),
                    (e.newTranslateX = this.getPossibleTransformX(
                      e.newTranslateX
                    )),
                    this.setTranslate(e.newTranslateX),
                    this.$thumbOuter.addClass("lg-dragging"),
                    e
                  );
                }),
                (o.prototype.onThumbTouchEnd = function (e) {
                  (e.isMoved = !1),
                    (e.endTime = new Date()),
                    this.$thumbOuter.removeClass("lg-dragging");
                  var t = e.endTime.valueOf() - e.startTime.valueOf(),
                    i = e.cords.endX - e.cords.startX,
                    s = Math.abs(i) / t;
                  return (
                    s > 0.15 && e.endTime.valueOf() - e.touchMoveTime < 30
                      ? ((s += 1) > 2 && (s += 1),
                        (s += s * (Math.abs(i) / this.thumbOuterWidth)),
                        this.$lgThumb.css(
                          "transition-duration",
                          Math.min(s - 1, 2) + "settings"
                        ),
                        (i *= s),
                        (this.translateX = this.getPossibleTransformX(
                          this.translateX - i
                        )),
                        this.setTranslate(this.translateX))
                      : (this.translateX = e.newTranslateX),
                    Math.abs(e.cords.endX - e.cords.startX) <
                      this.settings.thumbnailSwipeThreshold &&
                      (this.thumbClickable = !0),
                    e
                  );
                }),
                (o.prototype.getThumbHtml = function (e, t) {
                  var i,
                    s = this.core.galleryItems[t].__slideVideoInfo || {};
                  return (
                    (i =
                      s.youtube && this.settings.loadYouTubeThumbnail
                        ? "//img.youtube.com/vi/" +
                          s.youtube[1] +
                          "/" +
                          this.settings.youTubeThumbSize +
                          ".jpg"
                        : e),
                    '<div data-lg-item-id="' +
                      t +
                      '" class="lg-thumb-item ' +
                      (t === this.core.index ? " active" : "") +
                      '" \n        style="width:' +
                      this.settings.thumbWidth +
                      "px; height: " +
                      this.settings.thumbHeight +
                      ";\n            margin-right: " +
                      this.settings.thumbMargin +
                      'px;">\n            <img data-lg-item-id="' +
                      t +
                      '" src="' +
                      i +
                      '" />\n        </div>'
                  );
                }),
                (o.prototype.getThumbItemHtml = function (e) {
                  for (var t = "", i = 0; i < e.length; i++)
                    t += this.getThumbHtml(e[i].thumb, i);
                  return t;
                }),
                (o.prototype.setThumbItemHtml = function (e) {
                  var t = this.getThumbItemHtml(e);
                  this.$lgThumb.html(t);
                }),
                (o.prototype.setAnimateThumbStyles = function () {
                  this.settings.animateThumb &&
                    this.core.outer.addClass("lg-animate-thumb");
                }),
                (o.prototype.manageActiveClassOnSlideChange = function () {
                  var e = this;
                  this.core.LGel.on(r + ".thumb", function (t) {
                    var i = e.core.outer.find(".lg-thumb-item"),
                      s = t.detail.index;
                    i.removeClass("active"), i.eq(s).addClass("active");
                  });
                }),
                (o.prototype.toggleThumbBar = function () {
                  var e = this;
                  this.settings.toggleThumb &&
                    (this.core.outer.addClass("lg-can-toggle"),
                    this.core.$toolbar.append(
                      '<button type="button" aria-label="' +
                        this.settings.thumbnailPluginStrings.toggleThumbnails +
                        '" class="lg-toggle-thumb lg-icon"></button>'
                    ),
                    this.core.outer
                      .find(".lg-toggle-thumb")
                      .first()
                      .on("click.lg", function () {
                        e.core.outer.toggleClass("lg-components-open");
                      }));
                }),
                (o.prototype.thumbKeyPress = function () {
                  var e = this;
                  this.$LG(window).on(
                    "keydown.lg.thumb.global" + this.core.lgId,
                    function (t) {
                      e.core.lgOpened &&
                        e.settings.toggleThumb &&
                        (38 === t.keyCode
                          ? (t.preventDefault(),
                            e.core.outer.addClass("lg-components-open"))
                          : 40 === t.keyCode &&
                            (t.preventDefault(),
                            e.core.outer.removeClass("lg-components-open")));
                    }
                  );
                }),
                (o.prototype.destroy = function () {
                  this.settings.thumbnail &&
                    (this.$LG(window).off(".lg.thumb.global" + this.core.lgId),
                    this.core.LGel.off(".lg.thumb"),
                    this.core.LGel.off(".thumb"),
                    this.$thumbOuter.remove(),
                    this.core.outer.removeClass("lg-has-thumb"));
                }),
                o
              );
            })();
          return o;
        }),
        (function (e, t) {
          "object" == typeof exports && "undefined" != typeof module
            ? (module.exports = t())
            : "function" == typeof define && define.amd
            ? define(t)
            : ((e =
                "undefined" != typeof globalThis
                  ? globalThis
                  : e || self).lgFullscreen = t());
        })(void 0, function () {
          var e = function () {
              return (
                (e =
                  Object.assign ||
                  function (e) {
                    for (var t, i = 1, s = arguments.length; i < s; i++)
                      for (var n in (t = arguments[i]))
                        Object.prototype.hasOwnProperty.call(t, n) &&
                          (e[n] = t[n]);
                    return e;
                  }),
                e.apply(this, arguments)
              );
            },
            t = {
              fullScreen: !0,
              fullscreenPluginStrings: {
                toggleFullscreen: "Toggle Fullscreen",
              },
            };
          return (function () {
            function i(i, s) {
              return (
                (this.core = i),
                (this.$LG = s),
                (this.settings = e(e({}, t), this.core.settings)),
                this
              );
            }
            return (
              (i.prototype.init = function () {
                var e = "";
                if (this.settings.fullScreen) {
                  if (
                    !(
                      document.fullscreenEnabled ||
                      document.webkitFullscreenEnabled ||
                      document.mozFullScreenEnabled ||
                      document.msFullscreenEnabled
                    )
                  )
                    return;
                  (e =
                    '<button type="button" aria-label="' +
                    this.settings.fullscreenPluginStrings.toggleFullscreen +
                    '" class="lg-fullscreen lg-icon"></button>'),
                    this.core.$toolbar.append(e),
                    this.fullScreen();
                }
              }),
              (i.prototype.isFullScreen = function () {
                return (
                  document.fullscreenElement ||
                  document.mozFullScreenElement ||
                  document.webkitFullscreenElement ||
                  document.msFullscreenElement
                );
              }),
              (i.prototype.requestFullscreen = function () {
                var e = document.documentElement;
                e.requestFullscreen
                  ? e.requestFullscreen()
                  : e.msRequestFullscreen
                  ? e.msRequestFullscreen()
                  : e.mozRequestFullScreen
                  ? e.mozRequestFullScreen()
                  : e.webkitRequestFullscreen && e.webkitRequestFullscreen();
              }),
              (i.prototype.exitFullscreen = function () {
                document.exitFullscreen
                  ? document.exitFullscreen()
                  : document.msExitFullscreen
                  ? document.msExitFullscreen()
                  : document.mozCancelFullScreen
                  ? document.mozCancelFullScreen()
                  : document.webkitExitFullscreen &&
                    document.webkitExitFullscreen();
              }),
              (i.prototype.fullScreen = function () {
                var e = this;
                this.$LG(document).on(
                  "fullscreenchange.lg.global" +
                    this.core.lgId +
                    " \n            webkitfullscreenchange.lg.global" +
                    this.core.lgId +
                    " \n            mozfullscreenchange.lg.global" +
                    this.core.lgId +
                    " \n            MSFullscreenChange.lg.global" +
                    this.core.lgId,
                  function () {
                    e.core.lgOpened &&
                      e.core.outer.toggleClass("lg-fullscreen-on");
                  }
                ),
                  this.core.outer
                    .find(".lg-fullscreen")
                    .first()
                    .on("click.lg", function () {
                      e.isFullScreen()
                        ? e.exitFullscreen()
                        : e.requestFullscreen();
                    });
              }),
              (i.prototype.closeGallery = function () {
                this.isFullScreen() && this.exitFullscreen();
              }),
              (i.prototype.destroy = function () {
                this.$LG(document).off(
                  "fullscreenchange.lg.global" +
                    this.core.lgId +
                    " \n            webkitfullscreenchange.lg.global" +
                    this.core.lgId +
                    " \n            mozfullscreenchange.lg.global" +
                    this.core.lgId +
                    " \n            MSFullscreenChange.lg.global" +
                    this.core.lgId
                );
              }),
              i
            );
          })();
        });
      const wt = document.querySelectorAll("[data-gallery]");
      let xt;
      wt.length &&
        wt.forEach((e) => {
          lightGallery(e, {
            plugins: [lgFullscreen, lgThumbnail],
            licenseKey: "7EC452A9-0CFD441C-BD984C7C-17C8456E",
            speed: 500,
          });
        });
      let St,
        Et = !1;
      document.addEventListener("click", function (e) {
        (xt = e.target),
          t.any() &&
            (xt.closest(".share")
              ? xt.classList.contains("_share-active")
                ? xt.classList.contains("_share-active") &&
                  ((St = document.querySelectorAll("._share-active")),
                  St.length &&
                    St.forEach((e) => {
                      e.classList.remove("_share-active");
                    }),
                  (Et = !1))
                : ((St = document.querySelectorAll("._share-active")),
                  St.length &&
                    St.forEach((e) => {
                      e.classList.remove("_share-active");
                    }),
                  xt.classList.add("_share-active"),
                  (Et = !0))
              : xt.closest(".share") ||
                1 != Et ||
                (document
                  .querySelector("._share-active")
                  .classList.remove("_share-active"),
                (Et = !1)),
            xt.classList.contains("item-contacts__arrow") &&
              (xt.classList.toggle("_arrow-active"),
              xt.nextElementSibling.style.height
                ? (xt.nextElementSibling.style.height = null)
                : (xt.nextElementSibling.style.height =
                    xt.offsetHeight + "px")));
      }),
        (window.FLS = !0),
        (function (e) {
          let t = new Image();
          (t.onload = t.onerror =
            function () {
              e(2 == t.height);
            }),
            (t.src =
              "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
        })(function (e) {
          let t = !0 === e ? "webp" : "no-webp";
          document.documentElement.classList.add(t);
        }),
        (function () {
          let e = document.querySelector(".icon-menu");
          e &&
            e.addEventListener("click", function (e) {
              s &&
                (((e = 500) => {
                  document.documentElement.classList.contains("lock")
                    ? n(e)
                    : r(e);
                })(),
                document.documentElement.classList.toggle("menu-open"));
            });
        })(),
        (function () {
          const e = document.querySelectorAll(".rating");
          e.length > 0 &&
            (function () {
              let t, i;
              for (let t = 0; t < e.length; t++) {
                s(e[t]);
              }
              function s(e) {
                n(e), r(), e.classList.contains("rating_set") && o(e);
              }
              function n(e) {
                (t = e.querySelector(".rating__active")),
                  (i = e.querySelector(".rating__value"));
              }
              function r(e = i.innerHTML) {
                const s = e / 0.05;
                t.style.width = `${s}%`;
              }
              function o(e) {
                const t = e.querySelectorAll(".rating__item");
                for (let s = 0; s < t.length; s++) {
                  const o = t[s];
                  o.addEventListener("mouseenter", function (t) {
                    n(e), r(o.value);
                  }),
                    o.addEventListener("mouseleave", function (e) {
                      r();
                    }),
                    o.addEventListener("click", function (t) {
                      n(e),
                        e.dataset.ajax
                          ? a(o.value, e)
                          : ((i.innerHTML = s + 1), r());
                    });
                }
              }
              async function a(e, t) {
                if (!t.classList.contains("rating_sending")) {
                  t.classList.add("rating_sending");
                  let e = await fetch("rating.json", { method: "GET" });
                  if (e.ok) {
                    const s = (await e.json()).newRating;
                    (i.innerHTML = s),
                      r(),
                      t.classList.remove("rating_sending");
                  } else alert("Ошибка"), t.classList.remove("rating_sending");
                }
              }
            })();
        })(),
        (function () {
          function e(e) {
            if ("click" === e.type) {
              const t = e.target;
              if (t.closest("[data-goto]")) {
                const i = t.closest("[data-goto]"),
                  s = i.dataset.goto ? i.dataset.goto : "",
                  n = !!i.hasAttribute("data-goto-header"),
                  r = i.dataset.gotoSpeed ? i.dataset.gotoSpeed : "500";
                l(s, n, r), e.preventDefault();
              }
            } else if ("watcherCallback" === e.type && e.detail) {
              const t = e.detail.entry,
                i = t.target;
              if ("navigator" === i.dataset.watch) {
                const e = i.id,
                  s =
                    (document.querySelector("[data-goto]._navigator-active"),
                    document.querySelector(`[data-goto="${e}"]`));
                t.isIntersecting
                  ? s && s.classList.add("_navigator-active")
                  : s && s.classList.remove("_navigator-active");
              }
            }
          }
          document.addEventListener("click", e),
            document.addEventListener("watcherCallback", e);
        })(),
        (function () {
          yt = !0;
          const e = document.querySelector("header.header"),
            t = e.hasAttribute("data-scroll-show"),
            i = e.dataset.scrollShow ? e.dataset.scrollShow : 500,
            s = e.dataset.scroll ? e.dataset.scroll : 1;
          let n,
            r = 0;
          document.addEventListener("windowScroll", function (o) {
            const a = window.scrollY;
            clearTimeout(n),
              a >= s
                ? (!e.classList.contains("_header-scroll") &&
                    e.classList.add("_header-scroll"),
                  t &&
                    (a > r
                      ? e.classList.contains("_header-show") &&
                        e.classList.remove("_header-show")
                      : !e.classList.contains("_header-show") &&
                        e.classList.add("_header-show"),
                    (n = setTimeout(() => {
                      !e.classList.contains("_header-show") &&
                        e.classList.add("_header-show");
                    }, i))))
                : (e.classList.contains("_header-scroll") &&
                    e.classList.remove("_header-scroll"),
                  t &&
                    e.classList.contains("_header-show") &&
                    e.classList.remove("_header-show")),
              (r = a <= 0 ? 0 : a);
          });
        })();
    })();
})();
