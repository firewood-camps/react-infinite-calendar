var ar = Object.defineProperty;
var sr = (n, t, e) => t in n ? ar(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var rn = (n, t, e) => sr(n, typeof t != "symbol" ? t + "" : t, e);
import * as wt from "react";
import K, { isValidElement as yt, cloneElement as vt, Children as ir, useMemo as B, forwardRef as cr, useCallback as D, useState as re, useRef as U, useEffect as Ge, useId as lr, useDeferredValue as ur } from "react";
import u from "prop-types";
import ht, { flushSync as dr } from "react-dom";
function fr(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var mt = { exports: {} }, Ke = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var on;
function hr() {
  if (on) return Ke;
  on = 1;
  var n = K, t = Symbol.for("react.element"), e = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(i, l, d) {
    var f, h = {}, p = null, x = null;
    d !== void 0 && (p = "" + d), l.key !== void 0 && (p = "" + l.key), l.ref !== void 0 && (x = l.ref);
    for (f in l) r.call(l, f) && !a.hasOwnProperty(f) && (h[f] = l[f]);
    if (i && i.defaultProps) for (f in l = i.defaultProps, l) h[f] === void 0 && (h[f] = l[f]);
    return { $$typeof: t, type: i, key: p, ref: x, props: h, _owner: o.current };
  }
  return Ke.Fragment = e, Ke.jsx = s, Ke.jsxs = s, Ke;
}
var Ze = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var an;
function mr() {
  return an || (an = 1, process.env.NODE_ENV !== "production" && function() {
    var n = K, t = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), b = Symbol.iterator, w = "@@iterator";
    function k(c) {
      if (c === null || typeof c != "object")
        return null;
      var m = b && c[b] || c[w];
      return typeof m == "function" ? m : null;
    }
    var M = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(c) {
      {
        for (var m = arguments.length, g = new Array(m > 1 ? m - 1 : 0), E = 1; E < m; E++)
          g[E - 1] = arguments[E];
        _("error", c, g);
      }
    }
    function _(c, m, g) {
      {
        var E = M.ReactDebugCurrentFrame, R = E.getStackAddendum();
        R !== "" && (m += "%s", g = g.concat([R]));
        var j = g.map(function(C) {
          return String(C);
        });
        j.unshift("Warning: " + m), Function.prototype.apply.call(console[c], console, j);
      }
    }
    var P = !1, O = !1, F = !1, H = !1, Z = !1, z;
    z = Symbol.for("react.module.reference");
    function W(c) {
      return !!(typeof c == "string" || typeof c == "function" || c === r || c === a || Z || c === o || c === d || c === f || H || c === x || P || O || F || typeof c == "object" && c !== null && (c.$$typeof === p || c.$$typeof === h || c.$$typeof === s || c.$$typeof === i || c.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      c.$$typeof === z || c.getModuleId !== void 0));
    }
    function ae(c, m, g) {
      var E = c.displayName;
      if (E)
        return E;
      var R = m.displayName || m.name || "";
      return R !== "" ? g + "(" + R + ")" : g;
    }
    function me(c) {
      return c.displayName || "Context";
    }
    function V(c) {
      if (c == null)
        return null;
      if (typeof c.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof c == "function")
        return c.displayName || c.name || null;
      if (typeof c == "string")
        return c;
      switch (c) {
        case r:
          return "Fragment";
        case e:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case d:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case i:
            var m = c;
            return me(m) + ".Consumer";
          case s:
            var g = c;
            return me(g._context) + ".Provider";
          case l:
            return ae(c, c.render, "ForwardRef");
          case h:
            var E = c.displayName || null;
            return E !== null ? E : V(c.type) || "Memo";
          case p: {
            var R = c, j = R._payload, C = R._init;
            try {
              return V(C(j));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var A = Object.assign, se = 0, ie, T, I, X, Y, ce, ye;
    function je() {
    }
    je.__reactDisabledLog = !0;
    function ct() {
      {
        if (se === 0) {
          ie = console.log, T = console.info, I = console.warn, X = console.error, Y = console.group, ce = console.groupCollapsed, ye = console.groupEnd;
          var c = {
            configurable: !0,
            enumerable: !0,
            value: je,
            writable: !0
          };
          Object.defineProperties(console, {
            info: c,
            log: c,
            warn: c,
            error: c,
            group: c,
            groupCollapsed: c,
            groupEnd: c
          });
        }
        se++;
      }
    }
    function Ot() {
      {
        if (se--, se === 0) {
          var c = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: A({}, c, {
              value: ie
            }),
            info: A({}, c, {
              value: T
            }),
            warn: A({}, c, {
              value: I
            }),
            error: A({}, c, {
              value: X
            }),
            group: A({}, c, {
              value: Y
            }),
            groupCollapsed: A({}, c, {
              value: ce
            }),
            groupEnd: A({}, c, {
              value: ye
            })
          });
        }
        se < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Xe = M.ReactCurrentDispatcher, Qe;
    function be(c, m, g) {
      {
        if (Qe === void 0)
          try {
            throw Error();
          } catch (R) {
            var E = R.stack.trim().match(/\n( *(at )?)/);
            Qe = E && E[1] || "";
          }
        return `
` + Qe + c;
      }
    }
    var Je = !1, xe;
    {
      var Dt = typeof WeakMap == "function" ? WeakMap : Map;
      xe = new Dt();
    }
    function lt(c, m) {
      if (!c || Je)
        return "";
      {
        var g = xe.get(c);
        if (g !== void 0)
          return g;
      }
      var E;
      Je = !0;
      var R = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var j;
      j = Xe.current, Xe.current = null, ct();
      try {
        if (m) {
          var C = function() {
            throw Error();
          };
          if (Object.defineProperty(C.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(C, []);
            } catch (ee) {
              E = ee;
            }
            Reflect.construct(c, [], C);
          } else {
            try {
              C.call();
            } catch (ee) {
              E = ee;
            }
            c.call(C.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ee) {
            E = ee;
          }
          c();
        }
      } catch (ee) {
        if (ee && E && typeof ee.stack == "string") {
          for (var S = ee.stack.split(`
`), Q = E.stack.split(`
`), $ = S.length - 1, L = Q.length - 1; $ >= 1 && L >= 0 && S[$] !== Q[L]; )
            L--;
          for (; $ >= 1 && L >= 0; $--, L--)
            if (S[$] !== Q[L]) {
              if ($ !== 1 || L !== 1)
                do
                  if ($--, L--, L < 0 || S[$] !== Q[L]) {
                    var ue = `
` + S[$].replace(" at new ", " at ");
                    return c.displayName && ue.includes("<anonymous>") && (ue = ue.replace("<anonymous>", c.displayName)), typeof c == "function" && xe.set(c, ue), ue;
                  }
                while ($ >= 1 && L >= 0);
              break;
            }
        }
      } finally {
        Je = !1, Xe.current = j, Ot(), Error.prepareStackTrace = R;
      }
      var $e = c ? c.displayName || c.name : "", Te = $e ? be($e) : "";
      return typeof c == "function" && xe.set(c, Te), Te;
    }
    function ut(c, m, g) {
      return lt(c, !1);
    }
    function St(c) {
      var m = c.prototype;
      return !!(m && m.isReactComponent);
    }
    function Fe(c, m, g) {
      if (c == null)
        return "";
      if (typeof c == "function")
        return lt(c, St(c));
      if (typeof c == "string")
        return be(c);
      switch (c) {
        case d:
          return be("Suspense");
        case f:
          return be("SuspenseList");
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case l:
            return ut(c.render);
          case h:
            return Fe(c.type, m, g);
          case p: {
            var E = c, R = E._payload, j = E._init;
            try {
              return Fe(j(R), m, g);
            } catch {
            }
          }
        }
      return "";
    }
    var Ce = Object.prototype.hasOwnProperty, dt = {}, ft = M.ReactDebugCurrentFrame;
    function Ye(c) {
      if (c) {
        var m = c._owner, g = Fe(c.type, c._source, m ? m.type : null);
        ft.setExtraStackFrame(g);
      } else
        ft.setExtraStackFrame(null);
    }
    function Ct(c, m, g, E, R) {
      {
        var j = Function.call.bind(Ce);
        for (var C in c)
          if (j(c, C)) {
            var S = void 0;
            try {
              if (typeof c[C] != "function") {
                var Q = Error((E || "React class") + ": " + g + " type `" + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[C] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Q.name = "Invariant Violation", Q;
              }
              S = c[C](m, C, E, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch ($) {
              S = $;
            }
            S && !(S instanceof Error) && (Ye(R), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", E || "React class", g, C, typeof S), Ye(null)), S instanceof Error && !(S.message in dt) && (dt[S.message] = !0, Ye(R), v("Failed %s type: %s", g, S.message), Ye(null));
          }
      }
    }
    var Tt = Array.isArray;
    function de(c) {
      return Tt(c);
    }
    function Ee(c) {
      {
        var m = typeof Symbol == "function" && Symbol.toStringTag, g = m && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return g;
      }
    }
    function te(c) {
      try {
        return le(c), !1;
      } catch {
        return !0;
      }
    }
    function le(c) {
      return "" + c;
    }
    function ve(c) {
      if (te(c))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ee(c)), le(c);
    }
    var _e = M.ReactCurrentOwner, We = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, fe, Ae;
    function Ln(c) {
      if (Ce.call(c, "ref")) {
        var m = Object.getOwnPropertyDescriptor(c, "ref").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return c.ref !== void 0;
    }
    function Hn(c) {
      if (Ce.call(c, "key")) {
        var m = Object.getOwnPropertyDescriptor(c, "key").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return c.key !== void 0;
    }
    function zn(c, m) {
      typeof c.ref == "string" && _e.current;
    }
    function Vn(c, m) {
      {
        var g = function() {
          fe || (fe = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        g.isReactWarning = !0, Object.defineProperty(c, "key", {
          get: g,
          configurable: !0
        });
      }
    }
    function Un(c, m) {
      {
        var g = function() {
          Ae || (Ae = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        g.isReactWarning = !0, Object.defineProperty(c, "ref", {
          get: g,
          configurable: !0
        });
      }
    }
    var Bn = function(c, m, g, E, R, j, C) {
      var S = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: c,
        key: m,
        ref: g,
        props: C,
        // Record the component responsible for creating this element.
        _owner: j
      };
      return S._store = {}, Object.defineProperty(S._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(S, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: E
      }), Object.defineProperty(S, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
    };
    function Gn(c, m, g, E, R) {
      {
        var j, C = {}, S = null, Q = null;
        g !== void 0 && (ve(g), S = "" + g), Hn(m) && (ve(m.key), S = "" + m.key), Ln(m) && (Q = m.ref, zn(m, R));
        for (j in m)
          Ce.call(m, j) && !We.hasOwnProperty(j) && (C[j] = m[j]);
        if (c && c.defaultProps) {
          var $ = c.defaultProps;
          for (j in $)
            C[j] === void 0 && (C[j] = $[j]);
        }
        if (S || Q) {
          var L = typeof c == "function" ? c.displayName || c.name || "Unknown" : c;
          S && Vn(C, L), Q && Un(C, L);
        }
        return Bn(c, S, Q, R, E, _e.current, C);
      }
    }
    var Mt = M.ReactCurrentOwner, Qt = M.ReactDebugCurrentFrame;
    function Ie(c) {
      if (c) {
        var m = c._owner, g = Fe(c.type, c._source, m ? m.type : null);
        Qt.setExtraStackFrame(g);
      } else
        Qt.setExtraStackFrame(null);
    }
    var Rt;
    Rt = !1;
    function kt(c) {
      return typeof c == "object" && c !== null && c.$$typeof === t;
    }
    function Jt() {
      {
        if (Mt.current) {
          var c = V(Mt.current.type);
          if (c)
            return `

Check the render method of \`` + c + "`.";
        }
        return "";
      }
    }
    function Xn(c) {
      return "";
    }
    var Kt = {};
    function Qn(c) {
      {
        var m = Jt();
        if (!m) {
          var g = typeof c == "string" ? c : c.displayName || c.name;
          g && (m = `

Check the top-level render call using <` + g + ">.");
        }
        return m;
      }
    }
    function Zt(c, m) {
      {
        if (!c._store || c._store.validated || c.key != null)
          return;
        c._store.validated = !0;
        var g = Qn(m);
        if (Kt[g])
          return;
        Kt[g] = !0;
        var E = "";
        c && c._owner && c._owner !== Mt.current && (E = " It was passed a child from " + V(c._owner.type) + "."), Ie(c), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, E), Ie(null);
      }
    }
    function en(c, m) {
      {
        if (typeof c != "object")
          return;
        if (de(c))
          for (var g = 0; g < c.length; g++) {
            var E = c[g];
            kt(E) && Zt(E, m);
          }
        else if (kt(c))
          c._store && (c._store.validated = !0);
        else if (c) {
          var R = k(c);
          if (typeof R == "function" && R !== c.entries)
            for (var j = R.call(c), C; !(C = j.next()).done; )
              kt(C.value) && Zt(C.value, m);
        }
      }
    }
    function Jn(c) {
      {
        var m = c.type;
        if (m == null || typeof m == "string")
          return;
        var g;
        if (typeof m == "function")
          g = m.propTypes;
        else if (typeof m == "object" && (m.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        m.$$typeof === h))
          g = m.propTypes;
        else
          return;
        if (g) {
          var E = V(m);
          Ct(g, c.props, "prop", E, c);
        } else if (m.PropTypes !== void 0 && !Rt) {
          Rt = !0;
          var R = V(m);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", R || "Unknown");
        }
        typeof m.getDefaultProps == "function" && !m.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Kn(c) {
      {
        for (var m = Object.keys(c.props), g = 0; g < m.length; g++) {
          var E = m[g];
          if (E !== "children" && E !== "key") {
            Ie(c), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", E), Ie(null);
            break;
          }
        }
        c.ref !== null && (Ie(c), v("Invalid attribute `ref` supplied to `React.Fragment`."), Ie(null));
      }
    }
    var tn = {};
    function nn(c, m, g, E, R, j) {
      {
        var C = W(c);
        if (!C) {
          var S = "";
          (c === void 0 || typeof c == "object" && c !== null && Object.keys(c).length === 0) && (S += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Q = Xn();
          Q ? S += Q : S += Jt();
          var $;
          c === null ? $ = "null" : de(c) ? $ = "array" : c !== void 0 && c.$$typeof === t ? ($ = "<" + (V(c.type) || "Unknown") + " />", S = " Did you accidentally export a JSX literal instead of a component?") : $ = typeof c, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", $, S);
        }
        var L = Gn(c, m, g, R, j);
        if (L == null)
          return L;
        if (C) {
          var ue = m.children;
          if (ue !== void 0)
            if (E)
              if (de(ue)) {
                for (var $e = 0; $e < ue.length; $e++)
                  en(ue[$e], c);
                Object.freeze && Object.freeze(ue);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              en(ue, c);
        }
        if (Ce.call(m, "key")) {
          var Te = V(c), ee = Object.keys(m).filter(function(or) {
            return or !== "key";
          }), Pt = ee.length > 0 ? "{key: someKey, " + ee.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!tn[Te + Pt]) {
            var rr = ee.length > 0 ? "{" + ee.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Pt, Te, rr, Te), tn[Te + Pt] = !0;
          }
        }
        return c === r ? Kn(L) : Jn(L), L;
      }
    }
    function Zn(c, m, g) {
      return nn(c, m, g, !0);
    }
    function er(c, m, g) {
      return nn(c, m, g, !1);
    }
    var tr = er, nr = Zn;
    Ze.Fragment = r, Ze.jsx = tr, Ze.jsxs = nr;
  }()), Ze;
}
var sn;
function pr() {
  return sn || (sn = 1, process.env.NODE_ENV === "production" ? mt.exports = hr() : mt.exports = mr()), mt.exports;
}
var y = pr(), Nt = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var cn;
function gr() {
  return cn || (cn = 1, function(n) {
    (function() {
      var t = {}.hasOwnProperty;
      function e() {
        for (var a = "", s = 0; s < arguments.length; s++) {
          var i = arguments[s];
          i && (a = o(a, r(i)));
        }
        return a;
      }
      function r(a) {
        if (typeof a == "string" || typeof a == "number")
          return a;
        if (typeof a != "object")
          return "";
        if (Array.isArray(a))
          return e.apply(null, a);
        if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
          return a.toString();
        var s = "";
        for (var i in a)
          t.call(a, i) && a[i] && (s = o(s, i));
        return s;
      }
      function o(a, s) {
        return s ? a ? a + " " + s : a + s : a;
      }
      n.exports ? (e.default = e, n.exports = e) : window.classNames = e;
    })();
  }(Nt)), Nt.exports;
}
var yr = gr();
const oe = /* @__PURE__ */ fr(yr), vr = !!(typeof window < "u" && window.document && window.document.createElement);
let pt;
function wr(n) {
  if ((!pt && pt !== 0 || n) && vr) {
    const t = document.createElement("div");
    t.style.position = "absolute", t.style.top = "-9999px", t.style.width = "50px", t.style.height = "50px", t.style.overflow = "scroll", document.body.appendChild(t), pt = t.offsetWidth - t.clientWidth, document.body.removeChild(t);
  }
  return pt;
}
const Sn = 6048e5, br = 864e5, ln = Symbol.for("constructDateFrom");
function he(n, t) {
  return typeof n == "function" ? n(t) : n && typeof n == "object" && ln in n ? n[ln](t) : n instanceof Date ? new n.constructor(t) : new Date(t);
}
function q(n, t) {
  return he(t || n, n);
}
function xr(n, t, e) {
  const r = q(n, e?.in);
  return isNaN(t) ? he(n, NaN) : (t && r.setDate(r.getDate() + t), r);
}
let Er = {};
function it() {
  return Er;
}
function at(n, t) {
  const e = it(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? e.weekStartsOn ?? e.locale?.options?.weekStartsOn ?? 0, o = q(n, t?.in), a = o.getDay(), s = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - s), o.setHours(0, 0, 0, 0), o;
}
function bt(n, t) {
  return at(n, { ...t, weekStartsOn: 1 });
}
function Cn(n, t) {
  const e = q(n, t?.in), r = e.getFullYear(), o = he(e, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const a = bt(o), s = he(e, 0);
  s.setFullYear(r, 0, 4), s.setHours(0, 0, 0, 0);
  const i = bt(s);
  return e.getTime() >= a.getTime() ? r + 1 : e.getTime() >= i.getTime() ? r : r - 1;
}
function un(n) {
  const t = q(n), e = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return e.setUTCFullYear(t.getFullYear()), +n - +e;
}
function Ht(n, ...t) {
  const e = he.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(e);
}
function Ne(n, t) {
  const e = q(n, t?.in);
  return e.setHours(0, 0, 0, 0), e;
}
function _r(n, t, e) {
  const [r, o] = Ht(
    e?.in,
    n,
    t
  ), a = Ne(r), s = Ne(o), i = +a - un(a), l = +s - un(s);
  return Math.round((i - l) / br);
}
function Or(n, t) {
  const e = Cn(n, t), r = he(n, 0);
  return r.setFullYear(e, 0, 4), r.setHours(0, 0, 0, 0), bt(r);
}
function Dr(n, t, e) {
  const [r, o] = Ht(
    e?.in,
    n,
    t
  );
  return +Ne(r) == +Ne(o);
}
function Sr(n) {
  return n instanceof Date || typeof n == "object" && Object.prototype.toString.call(n) === "[object Date]";
}
function Cr(n) {
  return !(!Sr(n) && typeof n != "number" || isNaN(+q(n)));
}
function Tr(n, t) {
  const e = q(n, t?.in);
  return e.setHours(23, 59, 59, 999), e;
}
function Mr(n, t) {
  const e = q(n, t?.in);
  return e.setDate(1), e.setHours(0, 0, 0, 0), e;
}
function Rr(n, t) {
  const e = q(n, t?.in);
  return e.setFullYear(e.getFullYear(), 0, 1), e.setHours(0, 0, 0, 0), e;
}
const kr = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Pr = (n, t, e) => {
  let r;
  const o = kr[n];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), e?.addSuffix ? e.comparison && e.comparison > 0 ? "in " + r : r + " ago" : r;
};
function jt(n) {
  return (t = {}) => {
    const e = t.width ? String(t.width) : n.defaultWidth;
    return n.formats[e] || n.formats[n.defaultWidth];
  };
}
const Nr = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, jr = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Fr = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Yr = {
  date: jt({
    formats: Nr,
    defaultWidth: "full"
  }),
  time: jt({
    formats: jr,
    defaultWidth: "full"
  }),
  dateTime: jt({
    formats: Fr,
    defaultWidth: "full"
  })
}, Wr = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Ar = (n, t, e, r) => Wr[n];
function et(n) {
  return (t, e) => {
    const r = e?.context ? String(e.context) : "standalone";
    let o;
    if (r === "formatting" && n.formattingValues) {
      const s = n.defaultFormattingWidth || n.defaultWidth, i = e?.width ? String(e.width) : s;
      o = n.formattingValues[i] || n.formattingValues[s];
    } else {
      const s = n.defaultWidth, i = e?.width ? String(e.width) : n.defaultWidth;
      o = n.values[i] || n.values[s];
    }
    const a = n.argumentCallback ? n.argumentCallback(t) : t;
    return o[a];
  };
}
const Ir = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, $r = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, qr = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, Lr = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, Hr = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, zr = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Vr = (n, t) => {
  const e = Number(n), r = e % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return e + "st";
      case 2:
        return e + "nd";
      case 3:
        return e + "rd";
    }
  return e + "th";
}, Ur = {
  ordinalNumber: Vr,
  era: et({
    values: Ir,
    defaultWidth: "wide"
  }),
  quarter: et({
    values: $r,
    defaultWidth: "wide",
    argumentCallback: (n) => n - 1
  }),
  month: et({
    values: qr,
    defaultWidth: "wide"
  }),
  day: et({
    values: Lr,
    defaultWidth: "wide"
  }),
  dayPeriod: et({
    values: Hr,
    defaultWidth: "wide",
    formattingValues: zr,
    defaultFormattingWidth: "wide"
  })
};
function tt(n) {
  return (t, e = {}) => {
    const r = e.width, o = r && n.matchPatterns[r] || n.matchPatterns[n.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const s = a[0], i = r && n.parsePatterns[r] || n.parsePatterns[n.defaultParseWidth], l = Array.isArray(i) ? Gr(i, (h) => h.test(s)) : (
      // [TODO] -- I challenge you to fix the type
      Br(i, (h) => h.test(s))
    );
    let d;
    d = n.valueCallback ? n.valueCallback(l) : l, d = e.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      e.valueCallback(d)
    ) : d;
    const f = t.slice(s.length);
    return { value: d, rest: f };
  };
}
function Br(n, t) {
  for (const e in n)
    if (Object.prototype.hasOwnProperty.call(n, e) && t(n[e]))
      return e;
}
function Gr(n, t) {
  for (let e = 0; e < n.length; e++)
    if (t(n[e]))
      return e;
}
function Xr(n) {
  return (t, e = {}) => {
    const r = t.match(n.matchPattern);
    if (!r) return null;
    const o = r[0], a = t.match(n.parsePattern);
    if (!a) return null;
    let s = n.valueCallback ? n.valueCallback(a[0]) : a[0];
    s = e.valueCallback ? e.valueCallback(s) : s;
    const i = t.slice(o.length);
    return { value: s, rest: i };
  };
}
const Qr = /^(\d+)(th|st|nd|rd)?/i, Jr = /\d+/i, Kr = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Zr = {
  any: [/^b/i, /^(a|c)/i]
}, eo = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, to = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, no = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, ro = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, oo = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, ao = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, so = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, io = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, co = {
  ordinalNumber: Xr({
    matchPattern: Qr,
    parsePattern: Jr,
    valueCallback: (n) => parseInt(n, 10)
  }),
  era: tt({
    matchPatterns: Kr,
    defaultMatchWidth: "wide",
    parsePatterns: Zr,
    defaultParseWidth: "any"
  }),
  quarter: tt({
    matchPatterns: eo,
    defaultMatchWidth: "wide",
    parsePatterns: to,
    defaultParseWidth: "any",
    valueCallback: (n) => n + 1
  }),
  month: tt({
    matchPatterns: no,
    defaultMatchWidth: "wide",
    parsePatterns: ro,
    defaultParseWidth: "any"
  }),
  day: tt({
    matchPatterns: oo,
    defaultMatchWidth: "wide",
    parsePatterns: ao,
    defaultParseWidth: "any"
  }),
  dayPeriod: tt({
    matchPatterns: so,
    defaultMatchWidth: "any",
    parsePatterns: io,
    defaultParseWidth: "any"
  })
}, Tn = {
  code: "en-US",
  formatDistance: Pr,
  formatLong: Yr,
  formatRelative: Ar,
  localize: Ur,
  match: co,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function lo(n, t) {
  const e = q(n, t?.in);
  return _r(e, Rr(e)) + 1;
}
function uo(n, t) {
  const e = q(n, t?.in), r = +bt(e) - +Or(e);
  return Math.round(r / Sn) + 1;
}
function Mn(n, t) {
  const e = q(n, t?.in), r = e.getFullYear(), o = it(), a = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? o.firstWeekContainsDate ?? o.locale?.options?.firstWeekContainsDate ?? 1, s = he(t?.in || n, 0);
  s.setFullYear(r + 1, 0, a), s.setHours(0, 0, 0, 0);
  const i = at(s, t), l = he(t?.in || n, 0);
  l.setFullYear(r, 0, a), l.setHours(0, 0, 0, 0);
  const d = at(l, t);
  return +e >= +i ? r + 1 : +e >= +d ? r : r - 1;
}
function fo(n, t) {
  const e = it(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? e.firstWeekContainsDate ?? e.locale?.options?.firstWeekContainsDate ?? 1, o = Mn(n, t), a = he(t?.in || n, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), at(a, t);
}
function ho(n, t) {
  const e = q(n, t?.in), r = +at(e, t) - +fo(e, t);
  return Math.round(r / Sn) + 1;
}
function N(n, t) {
  const e = n < 0 ? "-" : "", r = Math.abs(n).toString().padStart(t, "0");
  return e + r;
}
const Oe = {
  // Year
  y(n, t) {
    const e = n.getFullYear(), r = e > 0 ? e : 1 - e;
    return N(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(n, t) {
    const e = n.getMonth();
    return t === "M" ? String(e + 1) : N(e + 1, 2);
  },
  // Day of the month
  d(n, t) {
    return N(n.getDate(), t.length);
  },
  // AM or PM
  a(n, t) {
    const e = n.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return e.toUpperCase();
      case "aaa":
        return e;
      case "aaaaa":
        return e[0];
      case "aaaa":
      default:
        return e === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(n, t) {
    return N(n.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(n, t) {
    return N(n.getHours(), t.length);
  },
  // Minute
  m(n, t) {
    return N(n.getMinutes(), t.length);
  },
  // Second
  s(n, t) {
    return N(n.getSeconds(), t.length);
  },
  // Fraction of second
  S(n, t) {
    const e = t.length, r = n.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, e - 3)
    );
    return N(o, t.length);
  }
}, qe = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, dn = {
  // Era
  G: function(n, t, e) {
    const r = n.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return e.era(r, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return e.era(r, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return e.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(n, t, e) {
    if (t === "yo") {
      const r = n.getFullYear(), o = r > 0 ? r : 1 - r;
      return e.ordinalNumber(o, { unit: "year" });
    }
    return Oe.y(n, t);
  },
  // Local week-numbering year
  Y: function(n, t, e, r) {
    const o = Mn(n, r), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const s = a % 100;
      return N(s, 2);
    }
    return t === "Yo" ? e.ordinalNumber(a, { unit: "year" }) : N(a, t.length);
  },
  // ISO week-numbering year
  R: function(n, t) {
    const e = Cn(n);
    return N(e, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(n, t) {
    const e = n.getFullYear();
    return N(e, t.length);
  },
  // Quarter
  Q: function(n, t, e) {
    const r = Math.ceil((n.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "Q":
        return String(r);
      // 01, 02, 03, 04
      case "QQ":
        return N(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return e.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return e.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return e.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return e.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(n, t, e) {
    const r = Math.ceil((n.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "q":
        return String(r);
      // 01, 02, 03, 04
      case "qq":
        return N(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return e.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return e.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return e.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return e.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(n, t, e) {
    const r = n.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return Oe.M(n, t);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return e.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return e.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return e.month(r, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return e.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(n, t, e) {
    const r = n.getMonth();
    switch (t) {
      // 1, 2, ..., 12
      case "L":
        return String(r + 1);
      // 01, 02, ..., 12
      case "LL":
        return N(r + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return e.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return e.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return e.month(r, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return e.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(n, t, e, r) {
    const o = ho(n, r);
    return t === "wo" ? e.ordinalNumber(o, { unit: "week" }) : N(o, t.length);
  },
  // ISO week of year
  I: function(n, t, e) {
    const r = uo(n);
    return t === "Io" ? e.ordinalNumber(r, { unit: "week" }) : N(r, t.length);
  },
  // Day of the month
  d: function(n, t, e) {
    return t === "do" ? e.ordinalNumber(n.getDate(), { unit: "date" }) : Oe.d(n, t);
  },
  // Day of year
  D: function(n, t, e) {
    const r = lo(n);
    return t === "Do" ? e.ordinalNumber(r, { unit: "dayOfYear" }) : N(r, t.length);
  },
  // Day of week
  E: function(n, t, e) {
    const r = n.getDay();
    switch (t) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return e.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return e.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return e.day(r, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return e.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(n, t, e, r) {
    const o = n.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(a);
      // Padded numerical value
      case "ee":
        return N(a, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return e.ordinalNumber(a, { unit: "day" });
      case "eee":
        return e.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return e.day(o, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return e.day(o, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return e.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(n, t, e, r) {
    const o = n.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (same as in `e`)
      case "c":
        return String(a);
      // Padded numerical value
      case "cc":
        return N(a, t.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return e.ordinalNumber(a, { unit: "day" });
      case "ccc":
        return e.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return e.day(o, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return e.day(o, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return e.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(n, t, e) {
    const r = n.getDay(), o = r === 0 ? 7 : r;
    switch (t) {
      // 2
      case "i":
        return String(o);
      // 02
      case "ii":
        return N(o, t.length);
      // 2nd
      case "io":
        return e.ordinalNumber(o, { unit: "day" });
      // Tue
      case "iii":
        return e.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return e.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return e.day(r, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return e.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(n, t, e) {
    const o = n.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return e.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return e.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return e.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return e.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(n, t, e) {
    const r = n.getHours();
    let o;
    switch (r === 12 ? o = qe.noon : r === 0 ? o = qe.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return e.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return e.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return e.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return e.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(n, t, e) {
    const r = n.getHours();
    let o;
    switch (r >= 17 ? o = qe.evening : r >= 12 ? o = qe.afternoon : r >= 4 ? o = qe.morning : o = qe.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return e.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return e.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return e.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(n, t, e) {
    if (t === "ho") {
      let r = n.getHours() % 12;
      return r === 0 && (r = 12), e.ordinalNumber(r, { unit: "hour" });
    }
    return Oe.h(n, t);
  },
  // Hour [0-23]
  H: function(n, t, e) {
    return t === "Ho" ? e.ordinalNumber(n.getHours(), { unit: "hour" }) : Oe.H(n, t);
  },
  // Hour [0-11]
  K: function(n, t, e) {
    const r = n.getHours() % 12;
    return t === "Ko" ? e.ordinalNumber(r, { unit: "hour" }) : N(r, t.length);
  },
  // Hour [1-24]
  k: function(n, t, e) {
    let r = n.getHours();
    return r === 0 && (r = 24), t === "ko" ? e.ordinalNumber(r, { unit: "hour" }) : N(r, t.length);
  },
  // Minute
  m: function(n, t, e) {
    return t === "mo" ? e.ordinalNumber(n.getMinutes(), { unit: "minute" }) : Oe.m(n, t);
  },
  // Second
  s: function(n, t, e) {
    return t === "so" ? e.ordinalNumber(n.getSeconds(), { unit: "second" }) : Oe.s(n, t);
  },
  // Fraction of second
  S: function(n, t) {
    return Oe.S(n, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(n, t, e) {
    const r = n.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return hn(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Me(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return Me(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(n, t, e) {
    const r = n.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return hn(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Me(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return Me(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(n, t, e) {
    const r = n.getTimezoneOffset();
    switch (t) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + fn(r, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + Me(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(n, t, e) {
    const r = n.getTimezoneOffset();
    switch (t) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + fn(r, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + Me(r, ":");
    }
  },
  // Seconds timestamp
  t: function(n, t, e) {
    const r = Math.trunc(+n / 1e3);
    return N(r, t.length);
  },
  // Milliseconds timestamp
  T: function(n, t, e) {
    return N(+n, t.length);
  }
};
function fn(n, t = "") {
  const e = n > 0 ? "-" : "+", r = Math.abs(n), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? e + String(o) : e + String(o) + t + N(a, 2);
}
function hn(n, t) {
  return n % 60 === 0 ? (n > 0 ? "-" : "+") + N(Math.abs(n) / 60, 2) : Me(n, t);
}
function Me(n, t = "") {
  const e = n > 0 ? "-" : "+", r = Math.abs(n), o = N(Math.trunc(r / 60), 2), a = N(r % 60, 2);
  return e + o + t + a;
}
const mn = (n, t) => {
  switch (n) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, Rn = (n, t) => {
  switch (n) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, mo = (n, t) => {
  const e = n.match(/(P+)(p+)?/) || [], r = e[1], o = e[2];
  if (!o)
    return mn(n, t);
  let a;
  switch (r) {
    case "P":
      a = t.dateTime({ width: "short" });
      break;
    case "PP":
      a = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      a = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      a = t.dateTime({ width: "full" });
      break;
  }
  return a.replace("{{date}}", mn(r, t)).replace("{{time}}", Rn(o, t));
}, po = {
  p: Rn,
  P: mo
}, go = /^D+$/, yo = /^Y+$/, vo = ["D", "DD", "YY", "YYYY"];
function wo(n) {
  return go.test(n);
}
function bo(n) {
  return yo.test(n);
}
function xo(n, t, e) {
  const r = Eo(n, t, e);
  if (console.warn(r), vo.includes(n)) throw new RangeError(r);
}
function Eo(n, t, e) {
  const r = n[0] === "Y" ? "years" : "days of the month";
  return `Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${t}\`) for formatting ${r} to the input \`${e}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const _o = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Oo = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Do = /^'([^]*?)'?$/, So = /''/g, Co = /[a-zA-Z]/;
function G(n, t, e) {
  const r = it(), o = e?.locale ?? r.locale ?? Tn, a = e?.firstWeekContainsDate ?? e?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, s = e?.weekStartsOn ?? e?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, i = q(n, e?.in);
  if (!Cr(i))
    throw new RangeError("Invalid time value");
  let l = t.match(Oo).map((f) => {
    const h = f[0];
    if (h === "p" || h === "P") {
      const p = po[h];
      return p(f, o.formatLong);
    }
    return f;
  }).join("").match(_o).map((f) => {
    if (f === "''")
      return { isToken: !1, value: "'" };
    const h = f[0];
    if (h === "'")
      return { isToken: !1, value: To(f) };
    if (dn[h])
      return { isToken: !0, value: f };
    if (h.match(Co))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + h + "`"
      );
    return { isToken: !1, value: f };
  });
  o.localize.preprocessor && (l = o.localize.preprocessor(i, l));
  const d = {
    firstWeekContainsDate: a,
    weekStartsOn: s,
    locale: o
  };
  return l.map((f) => {
    if (!f.isToken) return f.value;
    const h = f.value;
    (!e?.useAdditionalWeekYearTokens && bo(h) || !e?.useAdditionalDayOfYearTokens && wo(h)) && xo(h, t, String(n));
    const p = dn[h[0]];
    return p(i, h, o.localize, d);
  }).join("");
}
function To(n) {
  const t = n.match(Do);
  return t ? t[1].replace(So, "'") : n;
}
function zt(n, t) {
  return q(n, t?.in).getDay();
}
function Mo(n, t) {
  const e = q(n, t?.in), r = e.getFullYear(), o = e.getMonth(), a = he(e, 0);
  return a.setFullYear(r, o + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function Ro() {
  return Object.assign({}, it());
}
function kn(n, t) {
  return +q(n) > +q(t);
}
function Vt(n, t) {
  return +q(n) < +q(t);
}
function ne(n, t, e, r) {
  const o = () => he(e, NaN), a = Ro();
  return a.locale, a.firstWeekContainsDate ?? a.locale?.options?.firstWeekContainsDate, a.weekStartsOn ?? a.locale?.options?.weekStartsOn, n ? o() : q(e, r?.in);
}
function ko(n, t, e) {
  const [r, o] = Ht(
    e?.in,
    n,
    t
  );
  return r.getFullYear() === o.getFullYear();
}
const Po = (n) => 1 - --n * n * n * n, No = (n, t, e, r) => e > r ? t : n + (t - n) * Po(e / r);
function jo({
  fromValue: n,
  toValue: t,
  onUpdate: e,
  onComplete: r,
  duration: o = 600
}) {
  const a = performance.now(), s = () => {
    const i = performance.now() - a;
    e(No(n, t, i, o)), i <= o ? window.requestAnimationFrame(s) : r && r();
  };
  window.requestAnimationFrame(s);
}
const we = {
  down: 40,
  enter: 13,
  left: 37,
  right: 39,
  up: 38
};
function Fo(n, t, e) {
  const r = [], o = new Date(n, t, 1), a = Mo(o), s = Wo(e);
  let i = zt(new Date(n, t, 1)), l = 0;
  for (let d = 1; d <= a; d++)
    r[l] || (r[l] = []), r[l].push(d), i === s && l++, i = i < 6 ? i + 1 : 0;
  return {
    date: o,
    rows: r
  };
}
function Yo(n, t, e) {
  const r = typeof n == "number" ? new Date(n, 0, 1) : n;
  return Math.ceil(
    (Math.round((t - r) / (60 * 60 * 24 * 1e3)) + r.getDay() + 1 - e) / 7
  );
}
function Wo(n) {
  return n === 0 ? 6 : n - 1;
}
class Ao {
  constructor() {
    rn(this, "clear", () => {
      this.lastPosition = null, this.delta = 0;
    });
  }
  getScrollSpeed(t) {
    return this.lastPosition != null && (this.delta = t - this.lastPosition), this.lastPosition = t, clearTimeout(this._timeout), this._timeout = setTimeout(this.clear, 50), this.delta;
  }
}
const Io = wr();
function Se() {
}
function Pn(n, {
  disabledDates: t = [],
  disabledDays: e = [],
  minDate: r,
  maxDate: o
}) {
  return !n || t.some((a) => Dr(a, n)) || e && e.indexOf(zt(n)) !== -1 || r && Vt(n, Ne(r)) || o && kn(n, Tr(o)) ? null : n;
}
function $o(n, t, e) {
  return `${n}-${("0" + (t + 1)).slice(-2)}-${("0" + e).slice(-2)}`;
}
const Nn = (n) => (t) => (e) => /* @__PURE__ */ y.jsx(t, { ...n, ...e });
function qo(n, t) {
  let e = null, r = null;
  const o = () => n.apply(this, r);
  return function() {
    r = arguments, clearTimeout(e), e = setTimeout(o, t);
  };
}
function At(n, t, e = 1) {
  const r = Math.max(Math.ceil((t - n) / e), 0), o = Array(r);
  for (let a = 0; a < r; a++, n += e)
    o[a] = n;
  return o;
}
const Lo = "_root_100gv_1", Ho = "_show_100gv_20", zo = "_chevron_100gv_24", Vo = "_chevronUp_100gv_35", Uo = "_chevronDown_100gv_38", nt = {
  root: Lo,
  show: Ho,
  chevron: zo,
  chevronUp: Vo,
  chevronDown: Uo
}, It = 1, $t = -1, Bo = "M256,298.3L256,298.3L256,298.3l174.2-167.2c4.3-4.2,11.4-4.1,15.8,0.2l30.6,29.9c4.4,4.3,4.5,11.3,0.2,15.5L264.1,380.9 c-2.2,2.2-5.2,3.2-8.1,3c-3,0.1-5.9-0.9-8.1-3L35.2,176.7c-4.3-4.2-4.2-11.2,0.2-15.5L66,131.3c4.4-4.3,11.5-4.4,15.8-0.2L256,298.3 z", jn = ({ scrollToDate: n, show: t, theme: e, todayLabel: r }) => {
  const o = () => {
    n(/* @__PURE__ */ new Date(), -40, !0);
  };
  return /* @__PURE__ */ y.jsxs(
    "div",
    {
      className: oe(nt.root, {
        [nt.show]: t,
        [nt.chevronUp]: t === It,
        [nt.chevronDown]: t === $t
      }),
      style: {
        backgroundColor: e.floatingNav.background,
        color: e.floatingNav.color
      },
      onClick: o,
      children: [
        r,
        /* @__PURE__ */ y.jsx(
          "svg",
          {
            className: nt.chevron,
            x: "0px",
            y: "0px",
            width: "14px",
            height: "14px",
            viewBox: "0 0 512 512",
            children: /* @__PURE__ */ y.jsx(
              "path",
              {
                fill: e.floatingNav.chevron || e.floatingNav.color,
                d: Bo
              }
            )
          }
        )
      ]
    }
  );
};
jn.propTypes = {
  scrollToDate: u.func.isRequired,
  show: u.oneOfType([u.number, u.bool]),
  theme: u.shape({
    floatingNav: u.shape({
      background: u.string.isRequired,
      color: u.string.isRequired,
      chevron: u.string
    }).isRequired
  }).isRequired,
  todayLabel: u.string.isRequired
};
function st() {
  return st = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var r in e) ({}).hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }, st.apply(null, arguments);
}
function Ut(n, t) {
  if (n == null) return {};
  var e = {};
  for (var r in n) if ({}.hasOwnProperty.call(n, r)) {
    if (t.indexOf(r) !== -1) continue;
    e[r] = n[r];
  }
  return e;
}
function qt(n, t) {
  return qt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, r) {
    return e.__proto__ = r, e;
  }, qt(n, t);
}
function Bt(n, t) {
  n.prototype = Object.create(t.prototype), n.prototype.constructor = n, qt(n, t);
}
function Go(n, t) {
  return n.classList ? !!t && n.classList.contains(t) : (" " + (n.className.baseVal || n.className) + " ").indexOf(" " + t + " ") !== -1;
}
function Xo(n, t) {
  n.classList ? n.classList.add(t) : Go(n, t) || (typeof n.className == "string" ? n.className = n.className + " " + t : n.setAttribute("class", (n.className && n.className.baseVal || "") + " " + t));
}
function pn(n, t) {
  return n.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function Qo(n, t) {
  n.classList ? n.classList.remove(t) : typeof n.className == "string" ? n.className = pn(n.className, t) : n.setAttribute("class", pn(n.className && n.className.baseVal || "", t));
}
const gn = {
  disabled: !1
};
var Jo = process.env.NODE_ENV !== "production" ? u.oneOfType([u.number, u.shape({
  enter: u.number,
  exit: u.number,
  appear: u.number
}).isRequired]) : null, Ko = process.env.NODE_ENV !== "production" ? u.oneOfType([u.string, u.shape({
  enter: u.string,
  exit: u.string,
  active: u.string
}), u.shape({
  enter: u.string,
  enterDone: u.string,
  enterActive: u.string,
  exit: u.string,
  exitDone: u.string,
  exitActive: u.string
})]) : null;
const xt = K.createContext(null);
var Fn = function(t) {
  return t.scrollTop;
}, rt = "unmounted", Re = "exited", ke = "entering", Ve = "entered", Lt = "exiting", ge = /* @__PURE__ */ function(n) {
  Bt(t, n);
  function t(r, o) {
    var a;
    a = n.call(this, r, o) || this;
    var s = o, i = s && !s.isMounting ? r.enter : r.appear, l;
    return a.appearStatus = null, r.in ? i ? (l = Re, a.appearStatus = ke) : l = Ve : r.unmountOnExit || r.mountOnEnter ? l = rt : l = Re, a.state = {
      status: l
    }, a.nextCallback = null, a;
  }
  t.getDerivedStateFromProps = function(o, a) {
    var s = o.in;
    return s && a.status === rt ? {
      status: Re
    } : null;
  };
  var e = t.prototype;
  return e.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, e.componentDidUpdate = function(o) {
    var a = null;
    if (o !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== ke && s !== Ve && (a = ke) : (s === ke || s === Ve) && (a = Lt);
    }
    this.updateStatus(!1, a);
  }, e.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, e.getTimeouts = function() {
    var o = this.props.timeout, a, s, i;
    return a = s = i = o, o != null && typeof o != "number" && (a = o.exit, s = o.enter, i = o.appear !== void 0 ? o.appear : s), {
      exit: a,
      enter: s,
      appear: i
    };
  }, e.updateStatus = function(o, a) {
    if (o === void 0 && (o = !1), a !== null)
      if (this.cancelNextCallback(), a === ke) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : ht.findDOMNode(this);
          s && Fn(s);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Re && this.setState({
      status: rt
    });
  }, e.performEnter = function(o) {
    var a = this, s = this.props.enter, i = this.context ? this.context.isMounting : o, l = this.props.nodeRef ? [i] : [ht.findDOMNode(this), i], d = l[0], f = l[1], h = this.getTimeouts(), p = i ? h.appear : h.enter;
    if (!o && !s || gn.disabled) {
      this.safeSetState({
        status: Ve
      }, function() {
        a.props.onEntered(d);
      });
      return;
    }
    this.props.onEnter(d, f), this.safeSetState({
      status: ke
    }, function() {
      a.props.onEntering(d, f), a.onTransitionEnd(p, function() {
        a.safeSetState({
          status: Ve
        }, function() {
          a.props.onEntered(d, f);
        });
      });
    });
  }, e.performExit = function() {
    var o = this, a = this.props.exit, s = this.getTimeouts(), i = this.props.nodeRef ? void 0 : ht.findDOMNode(this);
    if (!a || gn.disabled) {
      this.safeSetState({
        status: Re
      }, function() {
        o.props.onExited(i);
      });
      return;
    }
    this.props.onExit(i), this.safeSetState({
      status: Lt
    }, function() {
      o.props.onExiting(i), o.onTransitionEnd(s.exit, function() {
        o.safeSetState({
          status: Re
        }, function() {
          o.props.onExited(i);
        });
      });
    });
  }, e.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, e.safeSetState = function(o, a) {
    a = this.setNextCallback(a), this.setState(o, a);
  }, e.setNextCallback = function(o) {
    var a = this, s = !0;
    return this.nextCallback = function(i) {
      s && (s = !1, a.nextCallback = null, o(i));
    }, this.nextCallback.cancel = function() {
      s = !1;
    }, this.nextCallback;
  }, e.onTransitionEnd = function(o, a) {
    this.setNextCallback(a);
    var s = this.props.nodeRef ? this.props.nodeRef.current : ht.findDOMNode(this), i = o == null && !this.props.addEndListener;
    if (!s || i) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var l = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], d = l[0], f = l[1];
      this.props.addEndListener(d, f);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, e.render = function() {
    var o = this.state.status;
    if (o === rt)
      return null;
    var a = this.props, s = a.children;
    a.in, a.mountOnEnter, a.unmountOnExit, a.appear, a.enter, a.exit, a.timeout, a.addEndListener, a.onEnter, a.onEntering, a.onEntered, a.onExit, a.onExiting, a.onExited, a.nodeRef;
    var i = Ut(a, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ K.createElement(xt.Provider, {
        value: null
      }, typeof s == "function" ? s(o, i) : K.cloneElement(K.Children.only(s), i))
    );
  }, t;
}(K.Component);
ge.contextType = xt;
ge.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: u.shape({
    current: typeof Element > "u" ? u.any : function(n, t, e, r, o, a) {
      var s = n[t];
      return u.instanceOf(s && "ownerDocument" in s ? s.ownerDocument.defaultView.Element : Element)(n, t, e, r, o, a);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: u.oneOfType([u.func.isRequired, u.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: u.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: u.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: u.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: u.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: u.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: u.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var e = Jo;
    t.addEndListener || (e = e.isRequired);
    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      o[a - 1] = arguments[a];
    return e.apply(void 0, [t].concat(o));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: u.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: u.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: u.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: u.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: u.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: u.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: u.func
} : {};
function Le() {
}
ge.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Le,
  onEntering: Le,
  onEntered: Le,
  onExit: Le,
  onExiting: Le,
  onExited: Le
};
ge.UNMOUNTED = rt;
ge.EXITED = Re;
ge.ENTERING = ke;
ge.ENTERED = Ve;
ge.EXITING = Lt;
var Zo = function(t, e) {
  return t && e && e.split(" ").forEach(function(r) {
    return Xo(t, r);
  });
}, Ft = function(t, e) {
  return t && e && e.split(" ").forEach(function(r) {
    return Qo(t, r);
  });
}, Et = /* @__PURE__ */ function(n) {
  Bt(t, n);
  function t() {
    for (var r, o = arguments.length, a = new Array(o), s = 0; s < o; s++)
      a[s] = arguments[s];
    return r = n.call.apply(n, [this].concat(a)) || this, r.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    }, r.onEnter = function(i, l) {
      var d = r.resolveArguments(i, l), f = d[0], h = d[1];
      r.removeClasses(f, "exit"), r.addClass(f, h ? "appear" : "enter", "base"), r.props.onEnter && r.props.onEnter(i, l);
    }, r.onEntering = function(i, l) {
      var d = r.resolveArguments(i, l), f = d[0], h = d[1], p = h ? "appear" : "enter";
      r.addClass(f, p, "active"), r.props.onEntering && r.props.onEntering(i, l);
    }, r.onEntered = function(i, l) {
      var d = r.resolveArguments(i, l), f = d[0], h = d[1], p = h ? "appear" : "enter";
      r.removeClasses(f, p), r.addClass(f, p, "done"), r.props.onEntered && r.props.onEntered(i, l);
    }, r.onExit = function(i) {
      var l = r.resolveArguments(i), d = l[0];
      r.removeClasses(d, "appear"), r.removeClasses(d, "enter"), r.addClass(d, "exit", "base"), r.props.onExit && r.props.onExit(i);
    }, r.onExiting = function(i) {
      var l = r.resolveArguments(i), d = l[0];
      r.addClass(d, "exit", "active"), r.props.onExiting && r.props.onExiting(i);
    }, r.onExited = function(i) {
      var l = r.resolveArguments(i), d = l[0];
      r.removeClasses(d, "exit"), r.addClass(d, "exit", "done"), r.props.onExited && r.props.onExited(i);
    }, r.resolveArguments = function(i, l) {
      return r.props.nodeRef ? [r.props.nodeRef.current, i] : [i, l];
    }, r.getClassNames = function(i) {
      var l = r.props.classNames, d = typeof l == "string", f = d && l ? l + "-" : "", h = d ? "" + f + i : l[i], p = d ? h + "-active" : l[i + "Active"], x = d ? h + "-done" : l[i + "Done"];
      return {
        baseClassName: h,
        activeClassName: p,
        doneClassName: x
      };
    }, r;
  }
  var e = t.prototype;
  return e.addClass = function(o, a, s) {
    var i = this.getClassNames(a)[s + "ClassName"], l = this.getClassNames("enter"), d = l.doneClassName;
    a === "appear" && s === "done" && d && (i += " " + d), s === "active" && o && Fn(o), i && (this.appliedClasses[a][s] = i, Zo(o, i));
  }, e.removeClasses = function(o, a) {
    var s = this.appliedClasses[a], i = s.base, l = s.active, d = s.done;
    this.appliedClasses[a] = {}, i && Ft(o, i), l && Ft(o, l), d && Ft(o, d);
  }, e.render = function() {
    var o = this.props;
    o.classNames;
    var a = Ut(o, ["classNames"]);
    return /* @__PURE__ */ K.createElement(ge, st({}, a, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  }, t;
}(K.Component);
Et.defaultProps = {
  classNames: ""
};
Et.propTypes = process.env.NODE_ENV !== "production" ? st({}, ge.propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: Ko,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: u.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: u.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: u.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: u.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: u.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: u.func
}) : {};
function ea(n) {
  if (n === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function Gt(n, t) {
  var e = function(a) {
    return t && yt(a) ? t(a) : a;
  }, r = /* @__PURE__ */ Object.create(null);
  return n && ir.map(n, function(o) {
    return o;
  }).forEach(function(o) {
    r[o.key] = e(o);
  }), r;
}
function ta(n, t) {
  n = n || {}, t = t || {};
  function e(f) {
    return f in t ? t[f] : n[f];
  }
  var r = /* @__PURE__ */ Object.create(null), o = [];
  for (var a in n)
    a in t ? o.length && (r[a] = o, o = []) : o.push(a);
  var s, i = {};
  for (var l in t) {
    if (r[l])
      for (s = 0; s < r[l].length; s++) {
        var d = r[l][s];
        i[r[l][s]] = e(d);
      }
    i[l] = e(l);
  }
  for (s = 0; s < o.length; s++)
    i[o[s]] = e(o[s]);
  return i;
}
function Pe(n, t, e) {
  return e[t] != null ? e[t] : n.props[t];
}
function na(n, t) {
  return Gt(n.children, function(e) {
    return vt(e, {
      onExited: t.bind(null, e),
      in: !0,
      appear: Pe(e, "appear", n),
      enter: Pe(e, "enter", n),
      exit: Pe(e, "exit", n)
    });
  });
}
function ra(n, t, e) {
  var r = Gt(n.children), o = ta(t, r);
  return Object.keys(o).forEach(function(a) {
    var s = o[a];
    if (yt(s)) {
      var i = a in t, l = a in r, d = t[a], f = yt(d) && !d.props.in;
      l && (!i || f) ? o[a] = vt(s, {
        onExited: e.bind(null, s),
        in: !0,
        exit: Pe(s, "exit", n),
        enter: Pe(s, "enter", n)
      }) : !l && i && !f ? o[a] = vt(s, {
        in: !1
      }) : l && i && yt(d) && (o[a] = vt(s, {
        onExited: e.bind(null, s),
        in: d.props.in,
        exit: Pe(s, "exit", n),
        enter: Pe(s, "enter", n)
      }));
    }
  }), o;
}
var oa = Object.values || function(n) {
  return Object.keys(n).map(function(t) {
    return n[t];
  });
}, aa = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, _t = /* @__PURE__ */ function(n) {
  Bt(t, n);
  function t(r, o) {
    var a;
    a = n.call(this, r, o) || this;
    var s = a.handleExited.bind(ea(a));
    return a.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: s,
      firstRender: !0
    }, a;
  }
  var e = t.prototype;
  return e.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, e.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, a) {
    var s = a.children, i = a.handleExited, l = a.firstRender;
    return {
      children: l ? na(o, i) : ra(o, s, i),
      firstRender: !1
    };
  }, e.handleExited = function(o, a) {
    var s = Gt(this.props.children);
    o.key in s || (o.props.onExited && o.props.onExited(a), this.mounted && this.setState(function(i) {
      var l = st({}, i.children);
      return delete l[o.key], {
        children: l
      };
    }));
  }, e.render = function() {
    var o = this.props, a = o.component, s = o.childFactory, i = Ut(o, ["component", "childFactory"]), l = this.state.contextValue, d = oa(this.state.children).map(s);
    return delete i.appear, delete i.enter, delete i.exit, a === null ? /* @__PURE__ */ K.createElement(xt.Provider, {
      value: l
    }, d) : /* @__PURE__ */ K.createElement(xt.Provider, {
      value: l
    }, /* @__PURE__ */ K.createElement(a, i, d));
  }, t;
}(K.Component);
_t.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: u.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: u.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: u.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: u.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: u.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: u.func
} : {};
_t.defaultProps = aa;
const sa = "_root_11jcu_1", ia = "_landscape_11jcu_14", ca = "_dateWrapper_11jcu_20", la = "_day_11jcu_20", ua = "_wrapper_11jcu_25", da = "_blank_11jcu_31", fa = "_active_11jcu_46", ha = "_year_11jcu_55", ma = "_date_11jcu_20", pa = "_range_11jcu_69", pe = {
  root: sa,
  landscape: ia,
  dateWrapper: ca,
  day: la,
  wrapper: ua,
  blank: da,
  active: fa,
  year: ha,
  date: ma,
  range: pa
}, ga = "_enter_1dfih_1", ya = "_enterActive_1dfih_7", va = "_leave_1dfih_12", wa = "_leaveActive_1dfih_17", ba = {
  enter: ga,
  enterActive: ya,
  leave: va,
  leaveActive: wa
};
function ot(n, {
  display: t,
  key: e,
  locale: { locale: r },
  dateFormat: o,
  onYearClick: a,
  scrollToDate: s,
  setDisplay: i,
  shouldAnimate: l
}) {
  const d = n instanceof Date ? n : new Date(n), f = d && !isNaN(d.getTime()) && [
    {
      active: t === "years",
      handleClick: (h) => {
        a(d, h, e), i("years");
      },
      item: "year",
      title: t === "days" ? "Change year" : null,
      value: d.getFullYear()
    },
    {
      active: t === "days",
      handleClick: (h) => {
        t !== "days" ? i("days") : d && s(d, -40, !0);
      },
      item: "day",
      title: t === "days" ? `Scroll to ${G(d, o)}` : null,
      value: G(d, o)
    }
  ];
  return /* @__PURE__ */ y.jsx(
    "div",
    {
      className: pe.wrapper,
      "aria-label": G(d, `${o} yyyy`),
      children: f.map(({ handleClick: h, item: p, value: x, active: b, title: w }) => /* @__PURE__ */ y.jsx(
        "div",
        {
          className: oe(pe.dateWrapper, pe[p], {
            [pe.active]: b
          }),
          title: w,
          children: /* @__PURE__ */ y.jsx(_t, { component: null, children: /* @__PURE__ */ y.jsx(
            Et,
            {
              classNames: ba,
              timeout: 250,
              appear: l,
              enter: l,
              exit: l,
              children: /* @__PURE__ */ y.jsx(
                "span",
                {
                  className: pe.date,
                  "aria-hidden": !0,
                  onClick: h,
                  children: x
                }
              )
            },
            `${p}-${x}`
          ) })
        },
        p
      ))
    },
    e
  );
}
const Yn = ({
  dateFormat: n,
  display: t,
  layout: e,
  locale: r,
  onYearClick: o = Se,
  selected: a,
  shouldAnimate: s,
  theme: i,
  renderSelection: l = ot
}) => /* @__PURE__ */ y.jsx(
  "div",
  {
    "data-testid": "calendar-header",
    className: oe(pe.root, {
      [pe.landscape]: e === "landscape"
    }),
    style: {
      backgroundColor: i.headerColor,
      color: i.textColor.active
    },
    children: a ? l(a, {
      dateFormat: n,
      display: t,
      key: "selection",
      locale: r,
      onYearClick: o,
      scrollToDate: Se,
      setDisplay: Se,
      shouldAnimate: s
    }) : /* @__PURE__ */ y.jsx("div", { className: oe(pe.wrapper, pe.blank), children: r.blank })
  }
);
Yn.propTypes = {
  dateFormat: u.string,
  display: u.string,
  layout: u.string,
  locale: u.object,
  onYearClick: u.func,
  selected: u.any,
  shouldAnimate: u.bool,
  theme: u.object
};
function He(n, t, e) {
  let r = e.initialDeps ?? [], o;
  function a() {
    var s, i, l, d;
    let f;
    e.key && ((s = e.debug) != null && s.call(e)) && (f = Date.now());
    const h = n();
    if (!(h.length !== r.length || h.some((b, w) => r[w] !== b)))
      return o;
    r = h;
    let x;
    if (e.key && ((i = e.debug) != null && i.call(e)) && (x = Date.now()), o = t(...h), e.key && ((l = e.debug) != null && l.call(e))) {
      const b = Math.round((Date.now() - f) * 100) / 100, w = Math.round((Date.now() - x) * 100) / 100, k = w / 16, M = (v, _) => {
        for (v = String(v); v.length < _; )
          v = " " + v;
        return v;
      };
      console.info(
        `%c⏱ ${M(w, 5)} /${M(b, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * k, 120)
        )}deg 100% 31%);`,
        e?.key
      );
    }
    return (d = e?.onChange) == null || d.call(e, o), o;
  }
  return a.updateDeps = (s) => {
    r = s;
  }, a;
}
function yn(n, t) {
  if (n === void 0)
    throw new Error("Unexpected undefined");
  return n;
}
const xa = (n, t) => Math.abs(n - t) < 1.01, Ea = (n, t, e) => {
  let r;
  return function(...o) {
    n.clearTimeout(r), r = n.setTimeout(() => t.apply(this, o), e);
  };
}, vn = (n) => {
  const { offsetWidth: t, offsetHeight: e } = n;
  return { width: t, height: e };
}, _a = (n) => n, Oa = (n) => {
  const t = Math.max(n.startIndex - n.overscan, 0), e = Math.min(n.endIndex + n.overscan, n.count - 1), r = [];
  for (let o = t; o <= e; o++)
    r.push(o);
  return r;
}, Da = (n, t) => {
  const e = n.scrollElement;
  if (!e)
    return;
  const r = n.targetWindow;
  if (!r)
    return;
  const o = (s) => {
    const { width: i, height: l } = s;
    t({ width: Math.round(i), height: Math.round(l) });
  };
  if (o(vn(e)), !r.ResizeObserver)
    return () => {
    };
  const a = new r.ResizeObserver((s) => {
    const i = () => {
      const l = s[0];
      if (l?.borderBoxSize) {
        const d = l.borderBoxSize[0];
        if (d) {
          o({ width: d.inlineSize, height: d.blockSize });
          return;
        }
      }
      o(vn(e));
    };
    n.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
  });
  return a.observe(e, { box: "border-box" }), () => {
    a.unobserve(e);
  };
}, wn = {
  passive: !0
}, bn = typeof window > "u" ? !0 : "onscrollend" in window, Sa = (n, t) => {
  const e = n.scrollElement;
  if (!e)
    return;
  const r = n.targetWindow;
  if (!r)
    return;
  let o = 0;
  const a = n.options.useScrollendEvent && bn ? () => {
  } : Ea(
    r,
    () => {
      t(o, !1);
    },
    n.options.isScrollingResetDelay
  ), s = (f) => () => {
    const { horizontal: h, isRtl: p } = n.options;
    o = h ? e.scrollLeft * (p && -1 || 1) : e.scrollTop, a(), t(o, f);
  }, i = s(!0), l = s(!1);
  l(), e.addEventListener("scroll", i, wn);
  const d = n.options.useScrollendEvent && bn;
  return d && e.addEventListener("scrollend", l, wn), () => {
    e.removeEventListener("scroll", i), d && e.removeEventListener("scrollend", l);
  };
}, Ca = (n, t, e) => {
  if (t?.borderBoxSize) {
    const r = t.borderBoxSize[0];
    if (r)
      return Math.round(
        r[e.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return n[e.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, Ta = (n, {
  adjustments: t = 0,
  behavior: e
}, r) => {
  var o, a;
  const s = n + t;
  (a = (o = r.scrollElement) == null ? void 0 : o.scrollTo) == null || a.call(o, {
    [r.options.horizontal ? "left" : "top"]: s,
    behavior: e
  });
};
class Ma {
  constructor(t) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let e = null;
      const r = () => e || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : e = new this.targetWindow.ResizeObserver((o) => {
        o.forEach((a) => {
          const s = () => {
            this._measureElement(a.target, a);
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(s) : s();
        });
      }));
      return {
        disconnect: () => {
          var o;
          (o = r()) == null || o.disconnect(), e = null;
        },
        observe: (o) => {
          var a;
          return (a = r()) == null ? void 0 : a.observe(o, { box: "border-box" });
        },
        unobserve: (o) => {
          var a;
          return (a = r()) == null ? void 0 : a.unobserve(o);
        }
      };
    })(), this.range = null, this.setOptions = (e) => {
      Object.entries(e).forEach(([r, o]) => {
        typeof o > "u" && delete e[r];
      }), this.options = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: _a,
        rangeExtractor: Oa,
        onChange: () => {
        },
        measureElement: Ca,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        enabled: !0,
        isRtl: !1,
        useScrollendEvent: !1,
        useAnimationFrameWithResizeObserver: !1,
        ...e
      };
    }, this.notify = (e) => {
      var r, o;
      (o = (r = this.options).onChange) == null || o.call(r, this, e);
    }, this.maybeNotify = He(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (e) => {
        this.notify(e);
      },
      {
        key: process.env.NODE_ENV !== "production" && "maybeNotify",
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    ), this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((e) => e()), this.unsubs = [], this.observer.disconnect(), this.scrollElement = null, this.targetWindow = null;
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      var e;
      const r = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== r) {
        if (this.cleanup(), !r) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = r, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((e = this.scrollElement) == null ? void 0 : e.window) ?? null, this.elementsCache.forEach((o) => {
          this.observer.observe(o);
        }), this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        }), this.unsubs.push(
          this.options.observeElementRect(this, (o) => {
            this.scrollRect = o, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (o, a) => {
            this.scrollAdjustments = 0, this.scrollDirection = a ? this.getScrollOffset() < o ? "forward" : "backward" : null, this.scrollOffset = o, this.isScrolling = a, this.maybeNotify();
          })
        );
      }
    }, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (e, r) => {
      const o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
      for (let s = r - 1; s >= 0; s--) {
        const i = e[s];
        if (o.has(i.lane))
          continue;
        const l = a.get(
          i.lane
        );
        if (l == null || i.end > l.end ? a.set(i.lane, i) : i.end < l.end && o.set(i.lane, !0), o.size === this.options.lanes)
          break;
      }
      return a.size === this.options.lanes ? Array.from(a.values()).sort((s, i) => s.end === i.end ? s.index - i.index : s.end - i.end)[0] : void 0;
    }, this.getMeasurementOptions = He(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ],
      (e, r, o, a, s) => (this.pendingMeasuredCacheIndexes = [], {
        count: e,
        paddingStart: r,
        scrollMargin: o,
        getItemKey: a,
        enabled: s
      }),
      {
        key: !1
      }
    ), this.getMeasurements = He(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: e, paddingStart: r, scrollMargin: o, getItemKey: a, enabled: s }, i) => {
        if (!s)
          return this.measurementsCache = [], this.itemSizeCache.clear(), [];
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((f) => {
          this.itemSizeCache.set(f.key, f.size);
        }));
        const l = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const d = this.measurementsCache.slice(0, l);
        for (let f = l; f < e; f++) {
          const h = a(f), p = this.options.lanes === 1 ? d[f - 1] : this.getFurthestMeasurement(d, f), x = p ? p.end + this.options.gap : r + o, b = i.get(h), w = typeof b == "number" ? b : this.options.estimateSize(f), k = x + w, M = p ? p.lane : f % this.options.lanes;
          d[f] = {
            index: f,
            start: x,
            size: w,
            end: k,
            key: h,
            lane: M
          };
        }
        return this.measurementsCache = d, d;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = He(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (e, r, o, a) => this.range = e.length > 0 && r > 0 ? Ra({
        measurements: e,
        outerSize: r,
        scrollOffset: o,
        lanes: a
      }) : null,
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = He(
      () => {
        let e = null, r = null;
        const o = this.calculateRange();
        return o && (e = o.startIndex, r = o.endIndex), this.maybeNotify.updateDeps([this.isScrolling, e, r]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          e,
          r
        ];
      },
      (e, r, o, a, s) => a === null || s === null ? [] : e({
        startIndex: a,
        endIndex: s,
        overscan: r,
        count: o
      }),
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualIndexes",
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (e) => {
      const r = this.options.indexAttribute, o = e.getAttribute(r);
      return o ? parseInt(o, 10) : (console.warn(
        `Missing attribute name '${r}={index}' on measured element.`
      ), -1);
    }, this._measureElement = (e, r) => {
      const o = this.indexFromElement(e), a = this.measurementsCache[o];
      if (!a)
        return;
      const s = a.key, i = this.elementsCache.get(s);
      i !== e && (i && this.observer.unobserve(i), this.observer.observe(e), this.elementsCache.set(s, e)), e.isConnected && this.resizeItem(o, this.options.measureElement(e, r, this));
    }, this.resizeItem = (e, r) => {
      const o = this.measurementsCache[e];
      if (!o)
        return;
      const a = this.itemSizeCache.get(o.key) ?? o.size, s = r - a;
      s !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(o, s, this) : o.start < this.getScrollOffset() + this.scrollAdjustments) && (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", s), this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += s,
        behavior: void 0
      })), this.pendingMeasuredCacheIndexes.push(o.index), this.itemSizeCache = new Map(this.itemSizeCache.set(o.key, r)), this.notify(!1));
    }, this.measureElement = (e) => {
      if (!e) {
        this.elementsCache.forEach((r, o) => {
          r.isConnected || (this.observer.unobserve(r), this.elementsCache.delete(o));
        });
        return;
      }
      this._measureElement(e, void 0);
    }, this.getVirtualItems = He(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (e, r) => {
        const o = [];
        for (let a = 0, s = e.length; a < s; a++) {
          const i = e[a], l = r[i];
          o.push(l);
        }
        return o;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualItems",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (e) => {
      const r = this.getMeasurements();
      if (r.length !== 0)
        return yn(
          r[Wn(
            0,
            r.length - 1,
            (o) => yn(r[o]).start,
            e
          )]
        );
    }, this.getOffsetForAlignment = (e, r, o = 0) => {
      const a = this.getSize(), s = this.getScrollOffset();
      r === "auto" && (r = e >= s + a ? "end" : "start"), r === "center" ? e += (o - a) / 2 : r === "end" && (e -= a);
      const i = this.getTotalSize() + this.options.scrollMargin - a;
      return Math.max(Math.min(i, e), 0);
    }, this.getOffsetForIndex = (e, r = "auto") => {
      e = Math.max(0, Math.min(e, this.options.count - 1));
      const o = this.measurementsCache[e];
      if (!o)
        return;
      const a = this.getSize(), s = this.getScrollOffset();
      if (r === "auto")
        if (o.end >= s + a - this.options.scrollPaddingEnd)
          r = "end";
        else if (o.start <= s + this.options.scrollPaddingStart)
          r = "start";
        else
          return [s, r];
      const i = r === "end" ? o.end + this.options.scrollPaddingEnd : o.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(i, r, o.size),
        r
      ];
    }, this.isDynamicMode = () => this.elementsCache.size > 0, this.scrollToOffset = (e, { align: r = "start", behavior: o } = {}) => {
      o === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getOffsetForAlignment(e, r), {
        adjustments: void 0,
        behavior: o
      });
    }, this.scrollToIndex = (e, { align: r = "auto", behavior: o } = {}) => {
      o === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), e = Math.max(0, Math.min(e, this.options.count - 1));
      let a = 0;
      const s = 10, i = (d) => {
        if (!this.targetWindow) return;
        const f = this.getOffsetForIndex(e, d);
        if (!f) {
          console.warn("Failed to get offset for index:", e);
          return;
        }
        const [h, p] = f;
        this._scrollToOffset(h, { adjustments: void 0, behavior: o }), this.targetWindow.requestAnimationFrame(() => {
          const x = this.getScrollOffset(), b = this.getOffsetForIndex(e, p);
          if (!b) {
            console.warn("Failed to get offset for index:", e);
            return;
          }
          xa(b[0], x) || l(p);
        });
      }, l = (d) => {
        this.targetWindow && (a++, a < s ? (process.env.NODE_ENV !== "production" && this.options.debug && console.info("Schedule retry", a, s), this.targetWindow.requestAnimationFrame(() => i(d))) : console.warn(
          `Failed to scroll to index ${e} after ${s} attempts.`
        ));
      };
      i(r);
    }, this.scrollBy = (e, { behavior: r } = {}) => {
      r === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getScrollOffset() + e, {
        adjustments: void 0,
        behavior: r
      });
    }, this.getTotalSize = () => {
      var e;
      const r = this.getMeasurements();
      let o;
      if (r.length === 0)
        o = this.options.paddingStart;
      else if (this.options.lanes === 1)
        o = ((e = r[r.length - 1]) == null ? void 0 : e.end) ?? 0;
      else {
        const a = Array(this.options.lanes).fill(null);
        let s = r.length - 1;
        for (; s >= 0 && a.some((i) => i === null); ) {
          const i = r[s];
          a[i.lane] === null && (a[i.lane] = i.end), s--;
        }
        o = Math.max(...a.filter((i) => i !== null));
      }
      return Math.max(
        o - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this._scrollToOffset = (e, {
      adjustments: r,
      behavior: o
    }) => {
      this.options.scrollToFn(e, { behavior: o, adjustments: r }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.notify(!1);
    }, this.setOptions(t);
  }
}
const Wn = (n, t, e, r) => {
  for (; n <= t; ) {
    const o = (n + t) / 2 | 0, a = e(o);
    if (a < r)
      n = o + 1;
    else if (a > r)
      t = o - 1;
    else
      return o;
  }
  return n > 0 ? n - 1 : 0;
};
function Ra({
  measurements: n,
  outerSize: t,
  scrollOffset: e,
  lanes: r
}) {
  const o = n.length - 1, a = (l) => n[l].start;
  if (n.length <= r)
    return {
      startIndex: 0,
      endIndex: o
    };
  let s = Wn(
    0,
    o,
    a,
    e
  ), i = s;
  if (r === 1)
    for (; i < o && n[i].end < e + t; )
      i++;
  else if (r > 1) {
    const l = Array(r).fill(0);
    for (; i < o && l.some((f) => f < e + t); ) {
      const f = n[i];
      l[f.lane] = f.end, i++;
    }
    const d = Array(r).fill(e + t);
    for (; s >= 0 && d.some((f) => f >= e); ) {
      const f = n[s];
      d[f.lane] = f.start, s--;
    }
    s = Math.max(0, s - s % r), i = Math.min(o, i + (r - 1 - i % r));
  }
  return { startIndex: s, endIndex: i };
}
const xn = typeof document < "u" ? wt.useLayoutEffect : wt.useEffect;
function ka(n) {
  const t = wt.useReducer(() => ({}), {})[1], e = {
    ...n,
    onChange: (o, a) => {
      var s;
      a ? dr(t) : t(), (s = n.onChange) == null || s.call(n, o, a);
    }
  }, [r] = wt.useState(
    () => new Ma(e)
  );
  return r.setOptions(e), xn(() => r._didMount(), []), xn(() => r._willUpdate()), r;
}
function Pa(n) {
  return ka({
    observeElementRect: Da,
    observeElementOffset: Sa,
    scrollToFn: Ta,
    ...n
  });
}
const Na = "_rows_1wsvd_1", ja = "_row_1wsvd_1", Fa = "_partial_1wsvd_20", Ya = "_label_1wsvd_28", Wa = "_partialFirstRow_1wsvd_54", ze = {
  rows: Na,
  row: ja,
  partial: Fa,
  label: Ya,
  partialFirstRow: Wa
}, Aa = ({
  DayComponent: n,
  disabledDates: t,
  disabledDays: e,
  monthDate: r,
  locale: o,
  maxDate: a,
  minDate: s,
  rowHeight: i,
  rows: l,
  selected: d,
  today: f,
  theme: h,
  passThrough: p,
  showOverlay: x,
  style: b
}) => {
  const w = B(() => {
    const M = f.getFullYear(), v = r.getFullYear(), _ = r.getMonth(), P = G(r, "MMM", { locale: o.locale }), O = [], F = G(f, "yyyy-MM-dd"), H = G(s, "yyyy-MM-dd"), Z = G(a, "yyyy-MM-dd");
    for (let z = 0, W = l.length; z < W; z++) {
      const ae = l[z], me = [];
      let V = zt(new Date(v, _, ae[0]));
      for (let A = 0, se = ae.length; A < se; A++) {
        const ie = ae[A], T = $o(v, _, ie), I = T === F, X = s && T < H || a && T > Z || e && e.length && e.indexOf(V) !== -1 || t && t.length && t.indexOf(T) !== -1;
        me[A] = /* @__PURE__ */ y.jsx(
          n,
          {
            currentYear: M,
            date: T,
            day: ie,
            selected: d,
            isDisabled: X,
            isToday: I,
            locale: o,
            month: _,
            monthShort: P,
            theme: h,
            year: v,
            ...p.Day
          },
          `day-${ie}`
        ), V += 1;
      }
      O[z] = /* @__PURE__ */ y.jsx(
        "ul",
        {
          className: oe(ze.row, { [ze.partial]: ae.length !== 7 }),
          style: { height: i },
          role: "row",
          "aria-label": `Week ${z + 1}`,
          children: me
        },
        `Row-${z}`
      );
    }
    return O;
  }, [n, t, e, r, o, a, s, i, l, d, f, h, p]), k = ko(r, f) ? "MMMM" : "MMMM yyyy";
  return /* @__PURE__ */ y.jsx("div", { className: ze.root, style: { ...b, lineHeight: `${i}px` }, children: /* @__PURE__ */ y.jsxs("div", { className: ze.rows, children: [
    w,
    x && /* @__PURE__ */ y.jsx(
      "label",
      {
        className: oe(ze.label, {
          [ze.partialFirstRow]: l[0].length !== 7
        }),
        style: { backgroundColor: h.overlayColor },
        children: /* @__PURE__ */ y.jsx("span", { children: G(r, k, { locale: o.locale }) })
      }
    )
  ] }) });
}, Ia = "_root_u4ye3_1", $a = "_scrolling_u4ye3_6", En = {
  root: Ia,
  scrolling: $a
}, qa = 5, Xt = cr(({
  DayComponent: n,
  disabledDates: t,
  disabledDays: e,
  height: r,
  isScrolling: o,
  locale: a,
  maxDate: s,
  min: i,
  minDate: l,
  months: d,
  onDaySelect: f,
  onScroll: h,
  overscanMonthCount: p,
  passThrough: x = {},
  rowHeight: b,
  scrollDate: w,
  selectedDate: k,
  showOverlay: M,
  theme: v,
  today: _,
  width: P
}, O) => {
  const F = D((T) => {
    if (!T || !i || !a) return 0;
    const { weekStartsOn: I } = a;
    return Yo(Mr(i), ne(T), I) * b - (r - b / 2) / 2;
  }, [i, b, a, r]), [H, Z] = re(() => F(w)), z = U({});
  U([]);
  const W = U(null), ae = D((T) => {
    if (!z.current[T]) {
      const { weekStartsOn: I } = a, [X, Y] = T.split(":"), ce = Fo(X, Y, I);
      z.current[T] = ce;
    }
    return z.current[T];
  }, [a]);
  Ge(() => {
    Z(F(w));
  }, [w, F]);
  const me = D((T, I = 0, ...X) => {
    const Y = F(T);
    V(Y + I, ...X);
  }, [F]), V = D((T = 0, I = !1, X = Se) => {
    const Y = () => {
      typeof globalThis < "u" && globalThis.setTimeout(() => {
        W.current && (W.current.style.overflowY = "auto"), X();
      }, 0);
    };
    W.current && (W.current.style.overflowY = "hidden"), I ? jo({
      fromValue: W.current?.scrollTop || 0,
      toValue: T,
      onUpdate: (ce, ye) => {
        W.current && (W.current.scrollTop = ce), Z(ce), ye && ye();
      },
      onComplete: Y
    }) : typeof globalThis < "u" && globalThis.requestAnimationFrame ? globalThis.requestAnimationFrame(() => {
      W.current && (W.current.scrollTop = T), Y();
    }) : (W.current && (W.current.scrollTop = T), Y());
  }, []), A = Pa({
    count: d.length,
    getScrollElement: () => W.current,
    estimateSize: () => b * qa,
    getItemKey: (T) => `${d[T].year}:${d[T].month}`,
    overscan: p || 2
  }), se = D((T) => {
    const { index: I } = T, { month: X, year: Y } = d[I], ce = `${Y}:${X}`, { date: ye, rows: je } = ae(ce);
    return /* @__PURE__ */ y.jsx(
      "div",
      {
        "data-index": I,
        ref: A.measureElement,
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          transform: `translateY(${T.start}px)`
        },
        children: /* @__PURE__ */ y.jsx(
          Aa,
          {
            selected: k,
            DayComponent: n,
            monthDate: ye,
            disabledDates: t,
            disabledDays: e,
            maxDate: s,
            minDate: l,
            rows: je,
            rowHeight: b,
            isScrolling: !1,
            showOverlay: M,
            today: _,
            theme: v,
            locale: a,
            passThrough: x,
            ...x.Month
          }
        )
      },
      ce
    );
  }, [A.measureElement, ae, d, k, t, e, s, l, b, M, _, v, a, x]), ie = D((T) => {
    const I = T.currentTarget.scrollTop;
    Z(I), h && h(I, T);
  }, [h]);
  return K.useImperativeHandle(O, () => ({
    getScrollElement: () => W.current,
    scrollToDate: me,
    scrollTo: V
  }), [me, V]), /* @__PURE__ */ y.jsx(
    "div",
    {
      "data-testid": "calendar-month-list",
      ref: W,
      className: oe(En.root, { [En.scrolling]: o }),
      style: {
        height: r,
        width: P,
        overflow: "auto",
        lineHeight: `${b}px`
      },
      onScroll: ie,
      children: /* @__PURE__ */ y.jsx(
        "div",
        {
          style: {
            height: A.getTotalSize(),
            width: "100%",
            position: "relative"
          },
          children: A.getVirtualItems().map(se)
        }
      )
    }
  );
});
Xt.propTypes = {
  disabledDates: u.arrayOf(u.string),
  disabledDays: u.arrayOf(u.number),
  height: u.number.isRequired,
  isScrolling: u.bool,
  locale: u.object.isRequired,
  maxDate: u.instanceOf(Date),
  min: u.instanceOf(Date).isRequired,
  minDate: u.instanceOf(Date),
  months: u.arrayOf(u.object).isRequired,
  onDaySelect: u.func,
  onScroll: u.func,
  overscanMonthCount: u.number,
  rowHeight: u.number.isRequired,
  scrollDate: u.instanceOf(Date).isRequired,
  selectedDate: u.instanceOf(Date),
  showOverlay: u.bool,
  theme: u.object.isRequired,
  today: u.instanceOf(Date).isRequired,
  width: u.oneOfType([u.number, u.string]).isRequired
};
Xt.displayName = "MonthList";
const La = "_root_1mb1m_1", Ha = "_day_1mb1m_11", _n = {
  root: La,
  day: Ha
}, An = ({ weekdays: n, weekStartsOn: t, theme: e }) => {
  const r = [...n.slice(t, 7), ...n.slice(0, t)];
  return /* @__PURE__ */ y.jsx(
    "ul",
    {
      "data-testid": "calendar-weekdays",
      className: _n.root,
      style: {
        backgroundColor: e.weekdayColor,
        color: e.textColor.active,
        paddingRight: Io
      },
      "aria-hidden": !0,
      children: r.map((o, a) => /* @__PURE__ */ y.jsx("li", { className: _n.day, children: o }, `Weekday-${a}`))
    }
  );
};
An.propTypes = {
  weekdays: u.arrayOf(u.string).isRequired,
  weekStartsOn: u.number.isRequired,
  theme: u.shape({
    weekdayColor: u.string.isRequired,
    textColor: u.shape({
      active: u.string.isRequired
    }).isRequired
  }).isRequired
};
const za = "_root_l9718_1", Va = "_year_l9718_39", Ua = "_disabled_l9718_98", Ba = "_active_l9718_108", Ga = "_currentYear_l9718_118", De = {
  root: za,
  year: Va,
  disabled: Ua,
  active: Ba,
  currentYear: Ga
}, In = ({
  height: n,
  hideOnSelect: t,
  locale: e,
  max: r,
  maxDate: o,
  min: a,
  minDate: s,
  scrollToDate: i,
  selected: l,
  setDisplay: d,
  showMonths: f,
  theme: h,
  today: p,
  width: x,
  years: b
}) => {
  const w = U(null), [k, M] = re(l && l.getFullYear());
  Ge(() => {
    l && l.getFullYear() !== k && M(l.getFullYear());
  }, [l, k]);
  const v = D((_, P) => {
    P.stopPropagation();
    const O = new Date(_, 0, 1);
    i(O, 0, !0), t && d("days"), M(_);
  }, [i, t, d]);
  return /* @__PURE__ */ y.jsx(
    "ul",
    {
      "data-testid": "calendar-years",
      className: De.root,
      ref: w,
      style: { height: n, width: x },
      children: b.map((_) => {
        const P = _ === k;
        return /* @__PURE__ */ y.jsxs(
          "li",
          {
            className: oe(De.year, {
              [De.active]: P,
              [De.currentYear]: _ === p.getFullYear()
            }),
            onClick: (O) => v(_, O),
            style: {
              color: P ? h.selectionColor : null
            },
            children: [
              /* @__PURE__ */ y.jsx("div", { className: De.yearLabel, children: _ }),
              f && P && /* @__PURE__ */ y.jsx("ol", { className: De.months, children: e.months.map((O, F) => {
                const H = new Date(_, F, 1), Z = H < a || H > r || H < s || H > o;
                return /* @__PURE__ */ y.jsx(
                  "li",
                  {
                    className: oe(De.month, {
                      [De.disabled]: Z
                    }),
                    onClick: (z) => {
                      z.stopPropagation(), Z || (i(H, 0, !0), d("days"));
                    },
                    style: {
                      color: Z ? null : h.selectionColor
                    },
                    children: O.substr(0, 3)
                  },
                  `${_}-${F}`
                );
              }) })
            ]
          },
          _
        );
      })
    }
  );
};
In.propTypes = {
  height: u.number.isRequired,
  hideOnSelect: u.bool,
  locale: u.object.isRequired,
  max: u.instanceOf(Date).isRequired,
  maxDate: u.instanceOf(Date),
  min: u.instanceOf(Date).isRequired,
  minDate: u.instanceOf(Date),
  scrollToDate: u.func.isRequired,
  selected: u.instanceOf(Date),
  setDisplay: u.func.isRequired,
  showMonths: u.bool,
  theme: u.object.isRequired,
  today: u.instanceOf(Date).isRequired,
  width: u.oneOfType([u.number, u.string]).isRequired,
  years: u.array.isRequired
};
const Xa = "_root_wj34c_1", Qa = "_enabled_wj34c_11", Ja = "_highlighted_wj34c_11", Ka = "_today_wj34c_37", Za = "_disabled_wj34c_44", es = "_selected_wj34c_63", ts = "_month_wj34c_66", ns = "_year_wj34c_66", rs = "_selection_wj34c_72", os = "_day_wj34c_88", as = "_range_wj34c_119", ss = "_start_wj34c_119", is = "_end_wj34c_119", cs = "_betweenRange_wj34c_145", J = {
  root: Xa,
  enabled: Qa,
  highlighted: Ja,
  today: Ka,
  disabled: Za,
  selected: es,
  month: ts,
  year: ns,
  selection: rs,
  day: os,
  range: as,
  start: ss,
  end: is,
  betweenRange: cs
}, ls = ({
  className: n,
  currentYear: t,
  date: e,
  day: r,
  handlers: o,
  isDisabled: a,
  isHighlighted: s,
  isToday: i,
  isSelected: l,
  locale: { todayLabel: d },
  monthShort: f,
  onClick: h,
  theme: { selectionColor: p, todayColor: x, textColor: b },
  year: w,
  selectionStyle: k
}) => {
  const M = D(() => {
    !a && typeof h == "function" && h(ne(e));
  }, [a, h, e]), v = D(() => /* @__PURE__ */ y.jsxs(
    "div",
    {
      className: J.selection,
      "data-date": e,
      style: {
        backgroundColor: p,
        color: b.active,
        ...k
      },
      children: [
        /* @__PURE__ */ y.jsx("span", { className: J.month, children: i ? d.short || d.long : f }),
        /* @__PURE__ */ y.jsx("span", { className: J.day, children: r })
      ]
    }
  ), [e, p, b, k, i, d, f, r]), _ = B(() => l ? typeof p == "function" ? p(e) : p : i ? x : null, [l, p, e, i, x]);
  return /* @__PURE__ */ y.jsxs(
    "li",
    {
      style: _ ? { color: _ } : null,
      className: oe(J.root, {
        [J.today]: i,
        [J.highlighted]: s,
        [J.selected]: l,
        [J.disabled]: a,
        [J.enabled]: !a
      }, n),
      onClick: M,
      "data-date": e,
      ...o,
      children: [
        r === 1 && /* @__PURE__ */ y.jsx("span", { className: J.month, children: f }),
        i ? /* @__PURE__ */ y.jsx("span", { children: r }) : r,
        r === 1 && t !== w && /* @__PURE__ */ y.jsx("span", { className: J.year, children: w }),
        l && v()
      ]
    }
  );
}, us = ({ min: n, max: t, minDate: e, maxDate: r, monthListRef: o }) => {
  const a = U(0), s = U(0), i = U(ne(n)), l = U(ne(t)), d = U(ne(e)), f = U(ne(r)), h = D(() => new Ao().getScrollSpeed, []), p = D(() => a.current, []), x = D((v) => o.current && o.current.getDateOffset(v), [o]), b = D((v) => o.current && o.current.scrollTo(v), [o]), w = D((v = /* @__PURE__ */ new Date(), _, P, O) => o.current && o.current.scrollToDate(
    v,
    _,
    P,
    O
  ), [o]), k = D((v) => v ? v.map((_) => {
    try {
      const P = _ instanceof Date ? _ : new Date(_);
      return G(P, "yyyy-MM-dd");
    } catch {
      return console.warn("Invalid date format in disabledDates:", _), null;
    }
  }).filter(Boolean) : null, []), M = D((v, _) => {
    a.current = v, s.current = _;
  }, []);
  return {
    scrollTop: a,
    scrollSpeed: s,
    minParsed: i,
    maxParsed: l,
    minDateParsed: d,
    maxDateParsed: f,
    getScrollSpeed: h,
    getCurrentOffset: p,
    getDateOffset: x,
    scrollTo: b,
    scrollToDate: w,
    getDisabledDates: k,
    updateScrollPosition: M
  };
}, ds = ({ min: n, max: t }) => {
  const e = U(null), r = U(null), o = U([]), a = D((i = n, l = t) => {
    try {
      e.current = typeof i == "string" ? new Date(i) : i, r.current = typeof l == "string" ? new Date(l) : l;
      const d = e.current.getFullYear(), f = e.current.getMonth(), h = r.current.getFullYear(), p = r.current.getMonth(), x = [];
      for (let b = d; b <= h; b++)
        for (let w = 0; w < 12; w++)
          b === d && w < f || b === h && w > p || x.push({ month: w, year: b });
      return o.current = x, o.current;
    } catch (d) {
      console.error("Error updating months:", d);
      const f = (/* @__PURE__ */ new Date()).getFullYear();
      return o.current = Array.from({ length: 12 }, (h, p) => ({ month: p, year: f })), o.current;
    }
  }, [n, t]), s = D(() => {
    if ((!e.current || !r.current) && a(), e.current.getFullYear() === 2020 && r.current.getFullYear() === 2020)
      return [2020, 2021];
    const i = e.current.getFullYear(), l = r.current.getFullYear();
    return i <= l ? At(i, l + 1) : [i];
  }, [a]);
  return Ge(() => {
    a();
  }, []), {
    months: o,
    minDate: e,
    maxDate: r,
    updateMonths: a,
    getYearsRange: s
  };
}, fs = {
  hideYearsOnSelect: !0,
  layout: "portrait",
  overscanMonthCount: 2,
  shouldHeaderAnimate: !0,
  showHeader: !0,
  showMonthsForYears: !0,
  showOverlay: !0,
  showTodayHelper: !0,
  showWeekdays: !0,
  todayHelperRowOffset: 4
}, hs = {
  blank: "Select a date...",
  headerFormat: "ddd, MMM Do",
  todayLabel: {
    long: "Today"
  },
  weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  weekStartsOn: 0
}, ms = {
  accentColor: "#448AFF",
  floatingNav: {
    background: "rgba(56, 87, 138, 0.94)",
    chevron: "#FFA726",
    color: "#FFF"
  },
  headerColor: "#448AFF",
  selectionColor: "#559FFF",
  textColor: {
    active: "#FFF",
    default: "#333"
  },
  todayColor: "#FFA726",
  weekdayColor: "#559FFF"
}, ps = ({ display: n, displayOptions: t, locale: e, theme: r }) => {
  const [o, a] = re(n), s = D((f) => {
    if (a(f), typeof window < "u" && window.__VITEST__)
      return f;
  }, []);
  Ge(() => {
    n !== o && a(n);
  }, [n, o]);
  const i = D((f = t) => ({ ...fs, ...f }), [t]), l = D(() => ({ ...hs, ...e }), [e]), d = D(() => ({ ...ms, ...r }), [r]);
  return {
    display: o,
    setDisplay: s,
    getDisplayOptions: i,
    getLocale: l,
    getTheme: d
  };
}, gs = "_root_1h6w5_1", ys = "_landscape_1h6w5_13", vs = "_wrapper_1h6w5_17", ws = "_listWrapper_1h6w5_26", bs = {
  root: gs,
  landscape: ys,
  wrapper: vs,
  listWrapper: ws
}, gt = {
  container: bs
}, xs = {
  autoFocus: !0,
  DayComponent: ls,
  display: "days",
  displayOptions: {},
  HeaderComponent: Yn,
  height: 500,
  keyboardSupport: !0,
  max: new Date(2050, 11, 31),
  maxDate: new Date(2050, 11, 31),
  min: new Date(1980, 0, 1),
  minDate: new Date(1980, 0, 1),
  onHighlightedDateChange: Se,
  onScroll: Se,
  onScrollEnd: Se,
  onSelect: Se,
  passThrough: {},
  rowHeight: 56,
  tabIndex: 1,
  width: 400,
  YearsComponent: In
}, $n = (n) => {
  const t = { ...xs, ...n }, e = lr(), r = U(null), o = U(null), a = U(null), s = U(null), i = U(Ne(/* @__PURE__ */ new Date())), [l, d] = re(!1), f = ur(l), [h, p] = re(!1), { display: x, setDisplayMode: b, getDisplayOptions: w, getLocale: k, getTheme: M } = ps({
    display: t.display,
    displayOptions: t.displayOptions,
    locale: t.locale,
    theme: t.theme
  }), { months: v, minDate: _, maxDate: P, min: O, max: F, updateMonths: H } = ds({
    min: t.min,
    max: t.max
  }), {
    scrollTop: Z,
    getScrollSpeed: z,
    getDateOffset: W,
    scrollToDate: ae,
    getDisabledDates: me,
    updateScrollPosition: V
  } = us({
    min: t.min,
    max: t.max,
    minDate: t.minDate,
    maxDate: t.maxDate,
    monthListRef: o
  });
  Ge(() => {
    H(), t.autoFocus && r.current && r.current.focus();
  }, [H, t.autoFocus]);
  const A = D((te = /* @__PURE__ */ new Date(), le, ve) => ae(
    te,
    le,
    ve && t.display === "days",
    () => d(!1)
  ), [t.display, ae]), se = D(qo(() => {
    const { onScrollEnd: te } = t, { showTodayHelper: le } = w();
    l && d(!1), le && ie(0), te(Z.current);
  }, 150), [t.onScrollEnd, l, w]), ie = D((te) => {
    const le = Z.current, { height: ve, rowHeight: _e } = t, { todayHelperRowOffset: We } = w();
    let fe;
    s.current || (s.current = W(i.current)), le >= s.current + (ve - _e) / 2 + _e * We ? h !== It && (fe = It) : le <= s.current - ve / 2 - _e * (We + 1) ? h !== $t && (fe = $t) : h && te <= 1 && (fe = !1), le === 0 && (fe = !1), fe != null && p(fe);
  }, [t.height, t.rowHeight, w, W, h]), T = D((te, le) => {
    const { onScroll: ve, rowHeight: _e } = t, { showTodayHelper: We, showOverlay: fe } = w(), Ae = Math.abs(z(te));
    V(te, Ae), fe && Ae > _e && !l && d(!0), We && ie(Ae), ve(te, le), se();
  }, [t.onScroll, t.rowHeight, w, l, ie, se, V, z]), I = D((te) => {
    b(te);
  }, [b]), {
    className: X,
    passThrough: Y,
    DayComponent: ce,
    disabledDays: ye,
    displayDate: je,
    height: ct,
    HeaderComponent: Ot,
    rowHeight: Xe,
    scrollDate: Qe,
    selected: be,
    tabIndex: Je,
    width: xe,
    YearsComponent: Dt
  } = t, {
    hideYearsOnSelect: lt,
    layout: ut,
    overscanMonthCount: St,
    shouldHeaderAnimate: Fe,
    showHeader: Ce,
    showMonthsForYears: dt,
    showOverlay: ft,
    showTodayHelper: Ye,
    showWeekdays: Ct
  } = w(), Tt = me(t.disabledDates), de = k(), Ee = M();
  return i.current = Ne(/* @__PURE__ */ new Date()), /* @__PURE__ */ y.jsxs(
    "div",
    {
      tabIndex: Je,
      className: oe(X, gt.container.root, {
        [gt.container.landscape]: ut === "landscape"
      }),
      style: { color: Ee.textColor.default, width: xe },
      role: "application",
      "aria-label": "Interactive Calendar",
      "aria-describedby": `${e}-description`,
      ref: r,
      ...Y && Y.rootNode ? Y.rootNode : {},
      children: [
        /* @__PURE__ */ y.jsx("div", { id: `${e}-description`, className: "sr-only", children: "Use arrow keys to navigate dates, Enter to select, Escape to close year view" }),
        Ce && /* @__PURE__ */ y.jsx(
          Ot,
          {
            selected: be,
            shouldAnimate: !!(Fe && x !== "years"),
            layout: ut,
            theme: Ee,
            locale: de,
            scrollToDate: A,
            setDisplay: I,
            dateFormat: de.headerFormat,
            display: x,
            displayDate: je,
            ...Y && Y.Header ? Y.Header : {}
          }
        ),
        /* @__PURE__ */ y.jsxs("div", { className: gt.container.wrapper, children: [
          Ct && /* @__PURE__ */ y.jsx(An, { weekdays: de.weekdays, weekStartsOn: de.weekStartsOn, theme: Ee }),
          /* @__PURE__ */ y.jsxs("div", { className: gt.container.listWrapper, children: [
            Ye && /* @__PURE__ */ y.jsx(
              jn,
              {
                scrollToDate: A,
                show: h,
                today: i.current,
                theme: Ee,
                todayLabel: de.todayLabel.long
              }
            ),
            /* @__PURE__ */ y.jsx(
              Xt,
              {
                ref: o,
                DayComponent: ce,
                disabledDates: Tt,
                disabledDays: ye,
                height: ct,
                isScrolling: f,
                locale: de,
                maxDate: P && P.current ? P.current : t.maxDate,
                min: O && O.current ? O.current : t.min,
                minDate: _ && _.current ? _.current : t.minDate,
                months: v && v.current ? v.current : [],
                onScroll: T,
                overscanMonthCount: St,
                passThrough: Y,
                theme: Ee,
                today: i.current,
                rowHeight: Xe,
                selected: be,
                scrollDate: Qe,
                showOverlay: ft,
                width: xe
              }
            )
          ] }),
          x === "years" && /* @__PURE__ */ y.jsx(
            Dt,
            {
              ref: a,
              height: ct,
              hideOnSelect: lt,
              locale: de,
              max: F && F.current ? F.current : t.max,
              maxDate: P && P.current ? P.current : t.maxDate,
              min: O && O.current ? O.current : t.min,
              minDate: _ && _.current ? _.current : t.minDate,
              scrollToDate: A,
              selected: be,
              setDisplay: I,
              showMonths: dt,
              theme: Ee,
              today: i.current,
              width: xe,
              years: O && O.current && F && F.current ? At(O.current.getFullYear(), F.current.getFullYear() + 1) : At(t.min.getFullYear(), t.max.getFullYear() + 1),
              ...Y && Y.Years ? Y.Years : {}
            }
          )
        ] })
      ]
    }
  );
};
$n.propTypes = {
  autoFocus: u.bool,
  className: u.string,
  DayComponent: u.func,
  disabledDates: u.arrayOf(u.instanceOf(Date)),
  disabledDays: u.arrayOf(u.number),
  display: u.oneOf(["years", "days"]),
  displayOptions: u.shape({
    hideYearsOnSelect: u.bool,
    layout: u.oneOf(["portrait", "landscape"]),
    overscanMonthCount: u.number,
    shouldHeaderAnimate: u.bool,
    showHeader: u.bool,
    showMonthsForYears: u.bool,
    showOverlay: u.bool,
    showTodayHelper: u.bool,
    showWeekdays: u.bool,
    todayHelperRowOffset: u.number
  }),
  height: u.number,
  keyboardSupport: u.bool,
  locale: u.shape({
    blank: u.string,
    headerFormat: u.string,
    todayLabel: u.shape({
      long: u.string,
      short: u.string
    }),
    weekdays: u.arrayOf(u.string),
    weekStartsOn: u.oneOf([0, 1, 2, 3, 4, 5, 6])
  }),
  max: u.instanceOf(Date),
  maxDate: u.instanceOf(Date),
  min: u.instanceOf(Date),
  minDate: u.instanceOf(Date),
  onScroll: u.func,
  onScrollEnd: u.func,
  onSelect: u.func,
  rowHeight: u.number,
  tabIndex: u.number,
  theme: u.shape({
    floatingNav: u.shape({
      background: u.string,
      chevron: u.string,
      color: u.string
    }),
    headerColor: u.string,
    selectionColor: u.oneOfType([u.string, u.func]),
    textColor: u.shape({
      active: u.string,
      default: u.string
    }),
    todayColor: u.string,
    weekdayColor: u.string
  }),
  width: u.oneOfType([u.string, u.number]),
  YearsComponent: u.func
};
const Es = (n) => (t) => {
  const e = t.selected === t.date;
  return /* @__PURE__ */ y.jsx(n, { ...t, isSelected: e });
}, _s = (n) => (t) => {
  const e = ne(t.selected);
  return /* @__PURE__ */ y.jsx(n, { ...t, selected: e });
}, Os = (n) => (t) => {
  const {
    DayComponent: e,
    onSelect: r,
    YearsComponent: o,
    selected: a,
    ...s
  } = t, [i, l] = re(a || /* @__PURE__ */ new Date()), d = B(() => Es(e), [e]), f = B(() => _s(o), [o]), h = B(() => Pn(a, t), [a, t]), p = D((w) => {
    const k = ne(w);
    r(k), l(k);
  }, [r]), x = B(() => ({
    Day: { onClick: r },
    Years: { onSelect: p }
  }), [r, p]), b = h ? G(h, "yyyy-MM-dd") : null;
  return /* @__PURE__ */ y.jsx(
    n,
    {
      ...s,
      DayComponent: d,
      YearsComponent: f,
      selected: b,
      scrollDate: i,
      setScrollDate: l,
      passThrough: x
    }
  );
}, Ds = (n) => (t) => {
  const e = t.highlightedDate === t.date;
  return /* @__PURE__ */ y.jsx(n, { ...t, isHighlighted: e });
}, Qs = (n) => (t) => {
  const { DayComponent: e, minDate: r, maxDate: o, selected: a, displayDate: s, passThrough: i } = t, [l, d] = re(a || /* @__PURE__ */ new Date()), f = D((w) => {
  }, []), h = D((w) => {
    Ss(w, {
      minDate: r,
      maxDate: o,
      passThrough: { Day: { onClick: i.Day.onClick } },
      setScrollDate: f,
      setHighlight: d,
      highlightedDate: l,
      selected: a,
      displayDate: s
    });
  }, [l, r, o, i, f, d, a, s]), p = B(() => Ds(e), [e]), x = l ? G(l, "yyyy-MM-dd") : null, b = B(() => ({
    ...i,
    Day: {
      ...i.Day,
      highlightedDate: x,
      onClick: (w) => {
        d(null), i.Day.onClick(w);
      }
    },
    rootNode: { onKeyDown: h }
  }), [i, x, h]);
  return /* @__PURE__ */ y.jsx(
    n,
    {
      ...t,
      DayComponent: p,
      highlightedDate: l,
      setHighlight: d,
      passThrough: b
    }
  );
};
function Ss(n, t) {
  const {
    minDate: e,
    maxDate: r,
    passThrough: { Day: { onClick: o } },
    setScrollDate: a,
    setHighlight: s,
    highlightedDate: i,
    selected: l,
    displayDate: d
  } = t, f = i || l.start || d || l || /* @__PURE__ */ new Date();
  let h = 0;
  switch ([we.left, we.up, we.right, we.down].indexOf(n.keyCode) > -1 && typeof n.preventDefault == "function" && n.preventDefault(), n.keyCode) {
    case we.enter:
      o && o(f);
      return;
    case we.left:
      h = -1;
      break;
    case we.right:
      h = 1;
      break;
    case we.down:
      h = 7;
      break;
    case we.up:
      h = -7;
      break;
    default:
      h = 0;
  }
  if (h) {
    let p = xr(f, h);
    Vt(p, e) ? p = new Date(e) : kn(p, r) && (p = new Date(r)), a(p), s(p);
  }
}
const Cs = "_root_1lyf2_1", Ts = "_slide_1lyf2_1", Ms = "_wrapper_1lyf2_20", Rs = "_arrow_1lyf2_25", ks = "_arrowRight_1lyf2_45", Ps = "_arrowLeft_1lyf2_49", Be = {
  root: Cs,
  slide: Ts,
  wrapper: Ms,
  arrow: Rs,
  arrowRight: ks,
  arrowLeft: Ps
}, Ns = "_enter_dtohs_1", js = "_enterActive_dtohs_5", Fs = "_leave_dtohs_10", Ys = "_leaveActive_dtohs_14", Ws = {
  enter: Ns,
  enterActive: js,
  leave: Fs,
  leaveActive: Ys
}, Ue = {
  LEFT: 0,
  RIGHT: 1
}, On = ({ direction: n, onClick: t }) => /* @__PURE__ */ y.jsx(
  "div",
  {
    className: oe(Be.arrow, {
      [Be.arrowLeft]: n === Ue.LEFT,
      [Be.arrowRight]: n === Ue.RIGHT
    }),
    onClick: () => t(n),
    children: /* @__PURE__ */ y.jsx("svg", { x: "0px", y: "0px", viewBox: "0 0 26 46", children: /* @__PURE__ */ y.jsx("path", { d: "M31.232233,34.767767 C32.2085438,35.7440777 33.7914562,35.7440777 34.767767,34.767767 C35.7440777,33.7914562 35.7440777,32.2085438 34.767767,31.232233 L14.767767,11.232233 C13.7914562,10.2559223 12.2085438,10.2559223 11.232233,11.232233 L-8.767767,31.232233 C-9.7440777,32.2085438 -9.7440777,33.7914562 -8.767767,34.767767 C-7.7914562,35.7440777 -6.2085438,35.7440777 -5.232233,34.767767 L12.9997921,16.5357418 L31.232233,34.767767 Z", id: "Shape", fill: "#FFF", transform: "translate(13.000000, 23.000000) rotate(90.000000) translate(-13.000000, -23.000000) " }) })
  }
), As = ({ children: n, index: t, onChange: e }) => {
  const r = D((o) => {
    let a = t;
    switch (o) {
      case Ue.LEFT:
        a = Math.max(0, t - 1);
        break;
      case Ue.RIGHT:
        a = Math.min(t + 1, n.length - 1);
        break;
      default:
        return;
    }
    e(a);
  }, [t, n.length, e]);
  return /* @__PURE__ */ y.jsxs("div", { className: Be.root, children: [
    t !== 0 && /* @__PURE__ */ y.jsx(On, { onClick: r, direction: Ue.LEFT }),
    /* @__PURE__ */ y.jsx("div", { className: Be.wrapper, style: { transform: `translate3d(-${100 * t}%, 0, 0)` }, children: /* @__PURE__ */ y.jsx(_t, { component: null, children: K.Children.map(n, (o, a) => /* @__PURE__ */ y.jsx(
      Et,
      {
        classNames: Ws,
        timeout: 300,
        children: /* @__PURE__ */ y.jsx("div", { className: Be.slide, style: { transform: `translateX(${100 * a}%)` }, children: o })
      },
      a
    )) }) }),
    t !== n.length - 1 && /* @__PURE__ */ y.jsx(On, { onClick: r, direction: Ue.RIGHT })
  ] });
}, Is = ({ renderSelection: n, setDisplayDate: t }) => ({
  renderSelection: (e, { scrollToDate: r, displayDate: o, ...a }) => {
    if (!e.length)
      return null;
    const s = e.sort(), i = e.indexOf(G(ne(o), "yyyy-MM-dd"));
    return /* @__PURE__ */ y.jsx(
      As,
      {
        index: i !== -1 ? i : s.length - 1,
        onChange: (l) => t(
          s[l],
          () => setTimeout(() => r(s[l], 0, !0), 50)
        ),
        children: s.map(
          (l, d) => ot(l, {
            ...a,
            key: d,
            scrollToDate: r,
            shouldAnimate: !1
          })
        )
      }
    );
  }
}), $s = (n) => Nn(Is)(n), qs = (n) => (t) => {
  const e = t.selected.indexOf(t.date) !== -1;
  return /* @__PURE__ */ y.jsx(n, { ...t, isSelected: e });
}, Ls = (n) => (t) => {
  const e = t.displayDate ? ne(t.displayDate) : null;
  return /* @__PURE__ */ y.jsx(n, { ...t, selected: e });
}, Js = (n) => (t) => {
  const { DayComponent: e, HeaderComponent: r, YearsComponent: o, selected: a, ...s } = t, [i, l] = re(Dn(t)), [d, f] = re(Dn(t)), h = B(() => qs(e), [e]), p = B(() => $s(r), [r]), x = B(() => Ls(o), [o]), b = D((v) => {
    t.onSelect(v), f(v);
  }, [t.onSelect]), w = D((v, _, P) => {
    P(ne(v));
  }, []), k = B(() => t.selected.filter((v) => Pn(v, t)).map((v) => G(v, "yyyy-MM-dd")), [t.selected, t]), M = B(() => ({
    Day: {
      onClick: (v) => b(v)
    },
    Header: {
      setDisplayDate: f
    },
    Years: {
      displayDate: d,
      onSelect: (v, _, P) => w(v, _, P),
      selected: d
    }
  }), [b, f, d, w]);
  return /* @__PURE__ */ y.jsx(
    n,
    {
      ...s,
      DayComponent: h,
      HeaderComponent: p,
      YearsComponent: x,
      scrollDate: i,
      setScrollDate: l,
      displayDate: d,
      setDisplayDate: f,
      passThrough: M,
      selected: k
    }
  );
};
function Dn({ selected: n }) {
  return n.length ? n[0] : /* @__PURE__ */ new Date();
}
function Ks(n, t) {
  const r = t.map((o) => G(o, "yyyy-MM-dd")).indexOf(G(n, "yyyy-MM-dd"));
  return r === -1 ? [...t, n] : [...t.slice(0, r), ...t.slice(r + 1)];
}
const Hs = Nn(({ renderSelection: n }) => ({
  renderSelection: (t, e) => {
    if (!t || !t.start && !t.end)
      return null;
    if (t.start === t.end)
      return ot(t.start, e);
    const r = e.locale && e.locale.headerFormat || "MMM Do";
    return /* @__PURE__ */ y.jsxs("div", { className: pe.range, style: { color: e.theme.headerColor }, children: [
      ot(t.start, { ...e, dateFormat: r, key: "start", shouldAnimate: !1 }),
      ot(t.end, { ...e, dateFormat: r, key: "end", shouldAnimate: !1 })
    ] });
  }
}));
let qn = !1;
const Yt = {
  END: 3,
  // End date selection
  HOVER: 2,
  // Hover during selection
  START: 1
  // Start date selection
}, zs = (n) => (t) => {
  const { date: e, selected: r, theme: o } = t, a = e >= r.start && e <= r.end, s = e === r.start, i = e === r.end, l = !(s && i), d = l && (s && { backgroundColor: o.accentColor } || i && { borderColor: o.accentColor });
  return /* @__PURE__ */ y.jsx(
    n,
    {
      ...t,
      className: a && l && oe(J.range, {
        [J.start]: s,
        [J.betweenRange]: !s && !i,
        [J.end]: i
      }),
      isSelected: a,
      selectionStyle: d
    }
  );
}, Zs = (n) => (t) => {
  const { DayComponent: e, HeaderComponent: r, YearsComponent: o, selected: a, onSelect: s, ...i } = t, [l, d] = re(Vs(t)), [f, h] = re("start"), [p, x] = re(null), b = B(() => zs(e), [e]), w = B(() => Hs(r), [r]), k = D((O) => {
    p ? (s({
      eventType: Yt.END,
      ...Wt({
        start: p,
        end: O
      })
    }), x(null)) : (s({ eventType: Yt.START, start: O, end: O }), x(O));
  }, [s, p]), M = D((O) => {
    const F = O.target.getAttribute("data-date"), H = F && ne(F);
    H && s({
      eventType: Yt.HOVER,
      ...Wt({
        start: p,
        end: H
      })
    });
  }, [s, p]), v = D((O) => {
    d(O), s(
      Wt(
        Object.assign({}, a, { [f]: ne(O) })
      )
    );
  }, [f, s, a]), _ = B(() => ({
    start: a && G(a.start, "yyyy-MM-dd"),
    end: a && G(a.end, "yyyy-MM-dd")
  }), [a]), P = B(() => ({
    Day: {
      onClick: (O) => k(O),
      handlers: {
        onMouseOver: !qn && p ? (O) => M(O) : null
      }
    },
    Years: {
      selected: a && a[f],
      onSelect: (O) => v(O)
    },
    Header: {
      onYearClick: (O, F, H) => h(H || "start")
    }
  }), [k, M, v, f, p, a]);
  return /* @__PURE__ */ y.jsx(
    n,
    {
      ...i,
      DayComponent: b,
      HeaderComponent: w,
      scrollDate: l,
      setScrollDate: d,
      displayKey: f,
      setDisplayKey: h,
      selectionStart: p,
      setSelectionStart: x,
      passThrough: P,
      selected: _
    }
  );
};
function Wt({ start: n, end: t }) {
  return Vt(n, t) ? { start: n, end: t } : { start: t, end: n };
}
function Vs({ selected: n }) {
  return n && n.start || /* @__PURE__ */ new Date();
}
typeof window < "u" && window.addEventListener("touchstart", function n() {
  qn = !0, window.removeEventListener("touchstart", n, !1);
});
const ei = ({
  selected: n,
  onSelect: t,
  interpolateSelection: e = (a) => a,
  Component: r = Os($n),
  ...o
}) => {
  const [a, s] = re(n || /* @__PURE__ */ new Date());
  Ge(() => {
    n !== a && s(n);
  }, [n]);
  const i = D(
    (l) => {
      typeof t == "function" && t(l), s(e(l, l));
    },
    [t, e]
  );
  return /* @__PURE__ */ y.jsx(
    r,
    {
      ...o,
      onSelect: i,
      selected: a
    }
  );
};
export {
  $n as Calendar,
  Yt as EVENT_TYPE,
  ei as default,
  Ks as defaultMultipleDateInterpolation,
  Os as withDateSelection,
  Qs as withKeyboardSupport,
  Js as withMultipleDates,
  Zs as withRange
};
//# sourceMappingURL=react-infinite-calendar.es.js.map
