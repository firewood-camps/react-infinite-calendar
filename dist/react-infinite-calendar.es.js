var vr = Object.defineProperty;
var wr = (n, e, t) => e in n ? vr(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var yn = (n, e, t) => wr(n, typeof e != "symbol" ? e + "" : e, t);
import te, { isValidElement as Dt, cloneElement as Tt, Children as br, createElement as vn, PureComponent as Er, useMemo as B, useCallback as C, useState as re, useRef as q, useEffect as We } from "react";
import u, { oneOfType as Lt, object as Sr, arrayOf as _r, oneOf as wn, number as we, func as yt, string as bn, array as xr } from "prop-types";
import vt from "react-dom";
function Or(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var wt = { exports: {} }, nt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var En;
function Cr() {
  if (En) return nt;
  En = 1;
  var n = te, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, l, d) {
    var f, h = {}, p = null, b = null;
    d !== void 0 && (p = "" + d), l.key !== void 0 && (p = "" + l.key), l.ref !== void 0 && (b = l.ref);
    for (f in l) r.call(l, f) && !o.hasOwnProperty(f) && (h[f] = l[f]);
    if (c && c.defaultProps) for (f in l = c.defaultProps, l) h[f] === void 0 && (h[f] = l[f]);
    return { $$typeof: e, type: c, key: p, ref: b, props: h, _owner: a.current };
  }
  return nt.Fragment = t, nt.jsx = s, nt.jsxs = s, nt;
}
var rt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sn;
function Dr() {
  return Sn || (Sn = 1, process.env.NODE_ENV !== "production" && function() {
    var n = te, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), S = Symbol.iterator, _ = "@@iterator";
    function M(i) {
      if (i === null || typeof i != "object")
        return null;
      var m = S && i[S] || i[_];
      return typeof m == "function" ? m : null;
    }
    var O = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(i) {
      {
        for (var m = arguments.length, y = new Array(m > 1 ? m - 1 : 0), E = 1; E < m; E++)
          y[E - 1] = arguments[E];
        v("error", i, y);
      }
    }
    function v(i, m, y) {
      {
        var E = O.ReactDebugCurrentFrame, P = E.getStackAddendum();
        P !== "" && (m += "%s", y = y.concat([P]));
        var j = y.map(function(R) {
          return String(R);
        });
        j.unshift("Warning: " + m), Function.prototype.apply.call(console[i], console, j);
      }
    }
    var T = !1, x = !1, Y = !1, F = !1, G = !1, H;
    H = Symbol.for("react.module.reference");
    function oe(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === r || i === o || G || i === a || i === d || i === f || F || i === b || T || x || Y || typeof i == "object" && i !== null && (i.$$typeof === p || i.$$typeof === h || i.$$typeof === s || i.$$typeof === c || i.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      i.$$typeof === H || i.getModuleId !== void 0));
    }
    function se(i, m, y) {
      var E = i.displayName;
      if (E)
        return E;
      var P = m.displayName || m.name || "";
      return P !== "" ? y + "(" + P + ")" : y;
    }
    function ie(i) {
      return i.displayName || "Context";
    }
    function Q(i) {
      if (i == null)
        return null;
      if (typeof i.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
        return i.displayName || i.name || null;
      if (typeof i == "string")
        return i;
      switch (i) {
        case r:
          return "Fragment";
        case t:
          return "Portal";
        case o:
          return "Profiler";
        case a:
          return "StrictMode";
        case d:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case c:
            var m = i;
            return ie(m) + ".Consumer";
          case s:
            var y = i;
            return ie(y._context) + ".Provider";
          case l:
            return se(i, i.render, "ForwardRef");
          case h:
            var E = i.displayName || null;
            return E !== null ? E : Q(i.type) || "Memo";
          case p: {
            var P = i, j = P._payload, R = P._init;
            try {
              return Q(R(j));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var V = Object.assign, ue = 0, k, A, I, U, ce, me, Re;
    function ft() {
    }
    ft.__reactDisabledLog = !0;
    function Nt() {
      {
        if (ue === 0) {
          k = console.log, A = console.info, I = console.warn, U = console.error, ce = console.group, me = console.groupCollapsed, Re = console.groupEnd;
          var i = {
            configurable: !0,
            enumerable: !0,
            value: ft,
            writable: !0
          };
          Object.defineProperties(console, {
            info: i,
            log: i,
            warn: i,
            error: i,
            group: i,
            groupCollapsed: i,
            groupEnd: i
          });
        }
        ue++;
      }
    }
    function jt() {
      {
        if (ue--, ue === 0) {
          var i = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: V({}, i, {
              value: k
            }),
            info: V({}, i, {
              value: A
            }),
            warn: V({}, i, {
              value: I
            }),
            error: V({}, i, {
              value: U
            }),
            group: V({}, i, {
              value: ce
            }),
            groupCollapsed: V({}, i, {
              value: me
            }),
            groupEnd: V({}, i, {
              value: Re
            })
          });
        }
        ue < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Me = O.ReactCurrentDispatcher, Ze;
    function Se(i, m, y) {
      {
        if (Ze === void 0)
          try {
            throw Error();
          } catch (P) {
            var E = P.stack.trim().match(/\n( *(at )?)/);
            Ze = E && E[1] || "";
          }
        return `
` + Ze + i;
      }
    }
    var et = !1, Le;
    {
      var ht = typeof WeakMap == "function" ? WeakMap : Map;
      Le = new ht();
    }
    function mt(i, m) {
      if (!i || et)
        return "";
      {
        var y = Le.get(i);
        if (y !== void 0)
          return y;
      }
      var E;
      et = !0;
      var P = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var j;
      j = Me.current, Me.current = null, Nt();
      try {
        if (m) {
          var R = function() {
            throw Error();
          };
          if (Object.defineProperty(R.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(R, []);
            } catch (ee) {
              E = ee;
            }
            Reflect.construct(i, [], R);
          } else {
            try {
              R.call();
            } catch (ee) {
              E = ee;
            }
            i.call(R.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ee) {
            E = ee;
          }
          i();
        }
      } catch (ee) {
        if (ee && E && typeof ee.stack == "string") {
          for (var D = ee.stack.split(`
`), K = E.stack.split(`
`), W = D.length - 1, $ = K.length - 1; W >= 1 && $ >= 0 && D[W] !== K[$]; )
            $--;
          for (; W >= 1 && $ >= 0; W--, $--)
            if (D[W] !== K[$]) {
              if (W !== 1 || $ !== 1)
                do
                  if (W--, $--, $ < 0 || D[W] !== K[$]) {
                    var le = `
` + D[W].replace(" at new ", " at ");
                    return i.displayName && le.includes("<anonymous>") && (le = le.replace("<anonymous>", i.displayName)), typeof i == "function" && Le.set(i, le), le;
                  }
                while (W >= 1 && $ >= 0);
              break;
            }
        }
      } finally {
        et = !1, Me.current = j, jt(), Error.prepareStackTrace = P;
      }
      var Ve = i ? i.displayName || i.name : "", Ne = Ve ? Se(Ve) : "";
      return typeof i == "function" && Le.set(i, Ne), Ne;
    }
    function It(i, m, y) {
      return mt(i, !1);
    }
    function Ft(i) {
      var m = i.prototype;
      return !!(m && m.isReactComponent);
    }
    function $e(i, m, y) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return mt(i, Ft(i));
      if (typeof i == "string")
        return Se(i);
      switch (i) {
        case d:
          return Se("Suspense");
        case f:
          return Se("SuspenseList");
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case l:
            return It(i.render);
          case h:
            return $e(i.type, m, y);
          case p: {
            var E = i, P = E._payload, j = E._init;
            try {
              return $e(j(P), m, y);
            } catch {
            }
          }
        }
      return "";
    }
    var ke = Object.prototype.hasOwnProperty, gt = {}, pt = O.ReactDebugCurrentFrame;
    function qe(i) {
      if (i) {
        var m = i._owner, y = $e(i.type, i._source, m ? m.type : null);
        pt.setExtraStackFrame(y);
      } else
        pt.setExtraStackFrame(null);
    }
    function ve(i, m, y, E, P) {
      {
        var j = Function.call.bind(ke);
        for (var R in i)
          if (j(i, R)) {
            var D = void 0;
            try {
              if (typeof i[R] != "function") {
                var K = Error((E || "React class") + ": " + y + " type `" + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[R] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw K.name = "Invariant Violation", K;
              }
              D = i[R](m, R, E, y, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (W) {
              D = W;
            }
            D && !(D instanceof Error) && (qe(P), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", E || "React class", y, R, typeof D), qe(null)), D instanceof Error && !(D.message in gt) && (gt[D.message] = !0, qe(P), g("Failed %s type: %s", y, D.message), qe(null));
          }
      }
    }
    var _e = Array.isArray;
    function J(i) {
      return _e(i);
    }
    function de(i) {
      {
        var m = typeof Symbol == "function" && Symbol.toStringTag, y = m && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return y;
      }
    }
    function xe(i) {
      try {
        return Oe(i), !1;
      } catch {
        return !0;
      }
    }
    function Oe(i) {
      return "" + i;
    }
    function Pe(i) {
      if (xe(i))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", de(i)), Oe(i);
    }
    var fe = O.ReactCurrentOwner, tt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, cn, ln;
    function tr(i) {
      if (ke.call(i, "ref")) {
        var m = Object.getOwnPropertyDescriptor(i, "ref").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return i.ref !== void 0;
    }
    function nr(i) {
      if (ke.call(i, "key")) {
        var m = Object.getOwnPropertyDescriptor(i, "key").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return i.key !== void 0;
    }
    function rr(i, m) {
      typeof i.ref == "string" && fe.current;
    }
    function ar(i, m) {
      {
        var y = function() {
          cn || (cn = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        y.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: y,
          configurable: !0
        });
      }
    }
    function or(i, m) {
      {
        var y = function() {
          ln || (ln = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        y.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: y,
          configurable: !0
        });
      }
    }
    var sr = function(i, m, y, E, P, j, R) {
      var D = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: i,
        key: m,
        ref: y,
        props: R,
        // Record the component responsible for creating this element.
        _owner: j
      };
      return D._store = {}, Object.defineProperty(D._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(D, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: E
      }), Object.defineProperty(D, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: P
      }), Object.freeze && (Object.freeze(D.props), Object.freeze(D)), D;
    };
    function ir(i, m, y, E, P) {
      {
        var j, R = {}, D = null, K = null;
        y !== void 0 && (Pe(y), D = "" + y), nr(m) && (Pe(m.key), D = "" + m.key), tr(m) && (K = m.ref, rr(m, P));
        for (j in m)
          ke.call(m, j) && !tt.hasOwnProperty(j) && (R[j] = m[j]);
        if (i && i.defaultProps) {
          var W = i.defaultProps;
          for (j in W)
            R[j] === void 0 && (R[j] = W[j]);
        }
        if (D || K) {
          var $ = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          D && ar(R, $), K && or(R, $);
        }
        return sr(i, D, K, P, E, fe.current, R);
      }
    }
    var At = O.ReactCurrentOwner, un = O.ReactDebugCurrentFrame;
    function He(i) {
      if (i) {
        var m = i._owner, y = $e(i.type, i._source, m ? m.type : null);
        un.setExtraStackFrame(y);
      } else
        un.setExtraStackFrame(null);
    }
    var Yt;
    Yt = !1;
    function Wt(i) {
      return typeof i == "object" && i !== null && i.$$typeof === e;
    }
    function dn() {
      {
        if (At.current) {
          var i = Q(At.current.type);
          if (i)
            return `

Check the render method of \`` + i + "`.";
        }
        return "";
      }
    }
    function cr(i) {
      return "";
    }
    var fn = {};
    function lr(i) {
      {
        var m = dn();
        if (!m) {
          var y = typeof i == "string" ? i : i.displayName || i.name;
          y && (m = `

Check the top-level render call using <` + y + ">.");
        }
        return m;
      }
    }
    function hn(i, m) {
      {
        if (!i._store || i._store.validated || i.key != null)
          return;
        i._store.validated = !0;
        var y = lr(m);
        if (fn[y])
          return;
        fn[y] = !0;
        var E = "";
        i && i._owner && i._owner !== At.current && (E = " It was passed a child from " + Q(i._owner.type) + "."), He(i), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', y, E), He(null);
      }
    }
    function mn(i, m) {
      {
        if (typeof i != "object")
          return;
        if (J(i))
          for (var y = 0; y < i.length; y++) {
            var E = i[y];
            Wt(E) && hn(E, m);
          }
        else if (Wt(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var P = M(i);
          if (typeof P == "function" && P !== i.entries)
            for (var j = P.call(i), R; !(R = j.next()).done; )
              Wt(R.value) && hn(R.value, m);
        }
      }
    }
    function ur(i) {
      {
        var m = i.type;
        if (m == null || typeof m == "string")
          return;
        var y;
        if (typeof m == "function")
          y = m.propTypes;
        else if (typeof m == "object" && (m.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        m.$$typeof === h))
          y = m.propTypes;
        else
          return;
        if (y) {
          var E = Q(m);
          ve(y, i.props, "prop", E, i);
        } else if (m.PropTypes !== void 0 && !Yt) {
          Yt = !0;
          var P = Q(m);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", P || "Unknown");
        }
        typeof m.getDefaultProps == "function" && !m.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function dr(i) {
      {
        for (var m = Object.keys(i.props), y = 0; y < m.length; y++) {
          var E = m[y];
          if (E !== "children" && E !== "key") {
            He(i), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", E), He(null);
            break;
          }
        }
        i.ref !== null && (He(i), g("Invalid attribute `ref` supplied to `React.Fragment`."), He(null));
      }
    }
    var gn = {};
    function pn(i, m, y, E, P, j) {
      {
        var R = oe(i);
        if (!R) {
          var D = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (D += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var K = cr();
          K ? D += K : D += dn();
          var W;
          i === null ? W = "null" : J(i) ? W = "array" : i !== void 0 && i.$$typeof === e ? (W = "<" + (Q(i.type) || "Unknown") + " />", D = " Did you accidentally export a JSX literal instead of a component?") : W = typeof i, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", W, D);
        }
        var $ = ir(i, m, y, P, j);
        if ($ == null)
          return $;
        if (R) {
          var le = m.children;
          if (le !== void 0)
            if (E)
              if (J(le)) {
                for (var Ve = 0; Ve < le.length; Ve++)
                  mn(le[Ve], i);
                Object.freeze && Object.freeze(le);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              mn(le, i);
        }
        if (ke.call(m, "key")) {
          var Ne = Q(i), ee = Object.keys(m).filter(function(yr) {
            return yr !== "key";
          }), zt = ee.length > 0 ? "{key: someKey, " + ee.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!gn[Ne + zt]) {
            var pr = ee.length > 0 ? "{" + ee.join(": ..., ") + ": ...}" : "{}";
            g(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, zt, Ne, pr, Ne), gn[Ne + zt] = !0;
          }
        }
        return i === r ? dr($) : ur($), $;
      }
    }
    function fr(i, m, y) {
      return pn(i, m, y, !0);
    }
    function hr(i, m, y) {
      return pn(i, m, y, !1);
    }
    var mr = hr, gr = fr;
    rt.Fragment = r, rt.jsx = mr, rt.jsxs = gr;
  }()), rt;
}
var _n;
function Tr() {
  return _n || (_n = 1, process.env.NODE_ENV === "production" ? wt.exports = Cr() : wt.exports = Dr()), wt.exports;
}
var w = Tr(), $t = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var xn;
function Rr() {
  return xn || (xn = 1, function(n) {
    (function() {
      var e = {}.hasOwnProperty;
      function t() {
        for (var o = "", s = 0; s < arguments.length; s++) {
          var c = arguments[s];
          c && (o = a(o, r(c)));
        }
        return o;
      }
      function r(o) {
        if (typeof o == "string" || typeof o == "number")
          return o;
        if (typeof o != "object")
          return "";
        if (Array.isArray(o))
          return t.apply(null, o);
        if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
          return o.toString();
        var s = "";
        for (var c in o)
          e.call(o, c) && o[c] && (s = a(s, c));
        return s;
      }
      function a(o, s) {
        return s ? o ? o + " " + s : o + s : o;
      }
      n.exports ? (t.default = t, n.exports = t) : window.classNames = t;
    })();
  }($t)), $t.exports;
}
var Mr = Rr();
const ae = /* @__PURE__ */ Or(Mr), kr = !!(typeof window < "u" && window.document && window.document.createElement);
var bt;
function Pr(n) {
  if ((!bt && bt !== 0 || n) && kr) {
    var e = document.createElement("div");
    e.style.position = "absolute", e.style.top = "-9999px", e.style.width = "50px", e.style.height = "50px", e.style.overflow = "scroll", document.body.appendChild(e), bt = e.offsetWidth - e.clientWidth, document.body.removeChild(e);
  }
  return bt;
}
const Yn = 6048e5, Nr = 864e5, On = Symbol.for("constructDateFrom");
function he(n, e) {
  return typeof n == "function" ? n(e) : n && typeof n == "object" && On in n ? n[On](e) : n instanceof Date ? new n.constructor(e) : new Date(e);
}
function L(n, e) {
  return he(e || n, n);
}
function jr(n, e, t) {
  const r = L(n, t == null ? void 0 : t.in);
  return isNaN(e) ? he(n, NaN) : (e && r.setDate(r.getDate() + e), r);
}
let Ir = {};
function dt() {
  return Ir;
}
function lt(n, e) {
  var c, l, d, f;
  const t = dt(), r = (e == null ? void 0 : e.weekStartsOn) ?? ((l = (c = e == null ? void 0 : e.locale) == null ? void 0 : c.options) == null ? void 0 : l.weekStartsOn) ?? t.weekStartsOn ?? ((f = (d = t.locale) == null ? void 0 : d.options) == null ? void 0 : f.weekStartsOn) ?? 0, a = L(n, e == null ? void 0 : e.in), o = a.getDay(), s = (o < r ? 7 : 0) + o - r;
  return a.setDate(a.getDate() - s), a.setHours(0, 0, 0, 0), a;
}
function Rt(n, e) {
  return lt(n, { ...e, weekStartsOn: 1 });
}
function Wn(n, e) {
  const t = L(n, e == null ? void 0 : e.in), r = t.getFullYear(), a = he(t, 0);
  a.setFullYear(r + 1, 0, 4), a.setHours(0, 0, 0, 0);
  const o = Rt(a), s = he(t, 0);
  s.setFullYear(r, 0, 4), s.setHours(0, 0, 0, 0);
  const c = Rt(s);
  return t.getTime() >= o.getTime() ? r + 1 : t.getTime() >= c.getTime() ? r : r - 1;
}
function Cn(n) {
  const e = L(n), t = new Date(
    Date.UTC(
      e.getFullYear(),
      e.getMonth(),
      e.getDate(),
      e.getHours(),
      e.getMinutes(),
      e.getSeconds(),
      e.getMilliseconds()
    )
  );
  return t.setUTCFullYear(e.getFullYear()), +n - +t;
}
function en(n, ...e) {
  const t = he.bind(
    null,
    e.find((r) => typeof r == "object")
  );
  return e.map(t);
}
function ze(n, e) {
  const t = L(n, e == null ? void 0 : e.in);
  return t.setHours(0, 0, 0, 0), t;
}
function Fr(n, e, t) {
  const [r, a] = en(
    t == null ? void 0 : t.in,
    n,
    e
  ), o = ze(r), s = ze(a), c = +o - Cn(o), l = +s - Cn(s);
  return Math.round((c - l) / Nr);
}
function Ar(n, e) {
  const t = Wn(n, e), r = he(n, 0);
  return r.setFullYear(t, 0, 4), r.setHours(0, 0, 0, 0), Rt(r);
}
function Yr(n, e, t) {
  const [r, a] = en(
    t == null ? void 0 : t.in,
    n,
    e
  );
  return +ze(r) == +ze(a);
}
function Wr(n) {
  return n instanceof Date || typeof n == "object" && Object.prototype.toString.call(n) === "[object Date]";
}
function zr(n) {
  return !(!Wr(n) && typeof n != "number" || isNaN(+L(n)));
}
function Lr(n, e) {
  const t = L(n, e == null ? void 0 : e.in);
  return t.setHours(23, 59, 59, 999), t;
}
function $r(n, e) {
  const t = L(n, e == null ? void 0 : e.in);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function qr(n, e) {
  const t = L(n, e == null ? void 0 : e.in);
  return t.setFullYear(t.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
const Hr = {
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
}, Vr = (n, e, t) => {
  let r;
  const a = Hr[n];
  return typeof a == "string" ? r = a : e === 1 ? r = a.one : r = a.other.replace("{{count}}", e.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + r : r + " ago" : r;
};
function qt(n) {
  return (e = {}) => {
    const t = e.width ? String(e.width) : n.defaultWidth;
    return n.formats[t] || n.formats[n.defaultWidth];
  };
}
const Ur = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Gr = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Br = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Xr = {
  date: qt({
    formats: Ur,
    defaultWidth: "full"
  }),
  time: qt({
    formats: Gr,
    defaultWidth: "full"
  }),
  dateTime: qt({
    formats: Br,
    defaultWidth: "full"
  })
}, Qr = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Jr = (n, e, t, r) => Qr[n];
function at(n) {
  return (e, t) => {
    const r = t != null && t.context ? String(t.context) : "standalone";
    let a;
    if (r === "formatting" && n.formattingValues) {
      const s = n.defaultFormattingWidth || n.defaultWidth, c = t != null && t.width ? String(t.width) : s;
      a = n.formattingValues[c] || n.formattingValues[s];
    } else {
      const s = n.defaultWidth, c = t != null && t.width ? String(t.width) : n.defaultWidth;
      a = n.values[c] || n.values[s];
    }
    const o = n.argumentCallback ? n.argumentCallback(e) : e;
    return a[o];
  };
}
const Kr = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Zr = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, ea = {
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
}, ta = {
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
}, na = {
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
}, ra = {
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
}, aa = (n, e) => {
  const t = Number(n), r = t % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return t + "st";
      case 2:
        return t + "nd";
      case 3:
        return t + "rd";
    }
  return t + "th";
}, oa = {
  ordinalNumber: aa,
  era: at({
    values: Kr,
    defaultWidth: "wide"
  }),
  quarter: at({
    values: Zr,
    defaultWidth: "wide",
    argumentCallback: (n) => n - 1
  }),
  month: at({
    values: ea,
    defaultWidth: "wide"
  }),
  day: at({
    values: ta,
    defaultWidth: "wide"
  }),
  dayPeriod: at({
    values: na,
    defaultWidth: "wide",
    formattingValues: ra,
    defaultFormattingWidth: "wide"
  })
};
function ot(n) {
  return (e, t = {}) => {
    const r = t.width, a = r && n.matchPatterns[r] || n.matchPatterns[n.defaultMatchWidth], o = e.match(a);
    if (!o)
      return null;
    const s = o[0], c = r && n.parsePatterns[r] || n.parsePatterns[n.defaultParseWidth], l = Array.isArray(c) ? ia(c, (h) => h.test(s)) : (
      // [TODO] -- I challenge you to fix the type
      sa(c, (h) => h.test(s))
    );
    let d;
    d = n.valueCallback ? n.valueCallback(l) : l, d = t.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      t.valueCallback(d)
    ) : d;
    const f = e.slice(s.length);
    return { value: d, rest: f };
  };
}
function sa(n, e) {
  for (const t in n)
    if (Object.prototype.hasOwnProperty.call(n, t) && e(n[t]))
      return t;
}
function ia(n, e) {
  for (let t = 0; t < n.length; t++)
    if (e(n[t]))
      return t;
}
function ca(n) {
  return (e, t = {}) => {
    const r = e.match(n.matchPattern);
    if (!r) return null;
    const a = r[0], o = e.match(n.parsePattern);
    if (!o) return null;
    let s = n.valueCallback ? n.valueCallback(o[0]) : o[0];
    s = t.valueCallback ? t.valueCallback(s) : s;
    const c = e.slice(a.length);
    return { value: s, rest: c };
  };
}
const la = /^(\d+)(th|st|nd|rd)?/i, ua = /\d+/i, da = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, fa = {
  any: [/^b/i, /^(a|c)/i]
}, ha = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, ma = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, ga = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, pa = {
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
}, ya = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, va = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, wa = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, ba = {
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
}, Ea = {
  ordinalNumber: ca({
    matchPattern: la,
    parsePattern: ua,
    valueCallback: (n) => parseInt(n, 10)
  }),
  era: ot({
    matchPatterns: da,
    defaultMatchWidth: "wide",
    parsePatterns: fa,
    defaultParseWidth: "any"
  }),
  quarter: ot({
    matchPatterns: ha,
    defaultMatchWidth: "wide",
    parsePatterns: ma,
    defaultParseWidth: "any",
    valueCallback: (n) => n + 1
  }),
  month: ot({
    matchPatterns: ga,
    defaultMatchWidth: "wide",
    parsePatterns: pa,
    defaultParseWidth: "any"
  }),
  day: ot({
    matchPatterns: ya,
    defaultMatchWidth: "wide",
    parsePatterns: va,
    defaultParseWidth: "any"
  }),
  dayPeriod: ot({
    matchPatterns: wa,
    defaultMatchWidth: "any",
    parsePatterns: ba,
    defaultParseWidth: "any"
  })
}, zn = {
  code: "en-US",
  formatDistance: Vr,
  formatLong: Xr,
  formatRelative: Jr,
  localize: oa,
  match: Ea,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Sa(n, e) {
  const t = L(n, e == null ? void 0 : e.in);
  return Fr(t, qr(t)) + 1;
}
function _a(n, e) {
  const t = L(n, e == null ? void 0 : e.in), r = +Rt(t) - +Ar(t);
  return Math.round(r / Yn) + 1;
}
function Ln(n, e) {
  var f, h, p, b;
  const t = L(n, e == null ? void 0 : e.in), r = t.getFullYear(), a = dt(), o = (e == null ? void 0 : e.firstWeekContainsDate) ?? ((h = (f = e == null ? void 0 : e.locale) == null ? void 0 : f.options) == null ? void 0 : h.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((b = (p = a.locale) == null ? void 0 : p.options) == null ? void 0 : b.firstWeekContainsDate) ?? 1, s = he((e == null ? void 0 : e.in) || n, 0);
  s.setFullYear(r + 1, 0, o), s.setHours(0, 0, 0, 0);
  const c = lt(s, e), l = he((e == null ? void 0 : e.in) || n, 0);
  l.setFullYear(r, 0, o), l.setHours(0, 0, 0, 0);
  const d = lt(l, e);
  return +t >= +c ? r + 1 : +t >= +d ? r : r - 1;
}
function xa(n, e) {
  var c, l, d, f;
  const t = dt(), r = (e == null ? void 0 : e.firstWeekContainsDate) ?? ((l = (c = e == null ? void 0 : e.locale) == null ? void 0 : c.options) == null ? void 0 : l.firstWeekContainsDate) ?? t.firstWeekContainsDate ?? ((f = (d = t.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, a = Ln(n, e), o = he((e == null ? void 0 : e.in) || n, 0);
  return o.setFullYear(a, 0, r), o.setHours(0, 0, 0, 0), lt(o, e);
}
function Oa(n, e) {
  const t = L(n, e == null ? void 0 : e.in), r = +lt(t, e) - +xa(t, e);
  return Math.round(r / Yn) + 1;
}
function N(n, e) {
  const t = n < 0 ? "-" : "", r = Math.abs(n).toString().padStart(e, "0");
  return t + r;
}
const Ce = {
  // Year
  y(n, e) {
    const t = n.getFullYear(), r = t > 0 ? t : 1 - t;
    return N(e === "yy" ? r % 100 : r, e.length);
  },
  // Month
  M(n, e) {
    const t = n.getMonth();
    return e === "M" ? String(t + 1) : N(t + 1, 2);
  },
  // Day of the month
  d(n, e) {
    return N(n.getDate(), e.length);
  },
  // AM or PM
  a(n, e) {
    const t = n.getHours() / 12 >= 1 ? "pm" : "am";
    switch (e) {
      case "a":
      case "aa":
        return t.toUpperCase();
      case "aaa":
        return t;
      case "aaaaa":
        return t[0];
      case "aaaa":
      default:
        return t === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(n, e) {
    return N(n.getHours() % 12 || 12, e.length);
  },
  // Hour [0-23]
  H(n, e) {
    return N(n.getHours(), e.length);
  },
  // Minute
  m(n, e) {
    return N(n.getMinutes(), e.length);
  },
  // Second
  s(n, e) {
    return N(n.getSeconds(), e.length);
  },
  // Fraction of second
  S(n, e) {
    const t = e.length, r = n.getMilliseconds(), a = Math.trunc(
      r * Math.pow(10, t - 3)
    );
    return N(a, e.length);
  }
}, Ue = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Dn = {
  // Era
  G: function(n, e, t) {
    const r = n.getFullYear() > 0 ? 1 : 0;
    switch (e) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return t.era(r, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return t.era(r, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return t.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(n, e, t) {
    if (e === "yo") {
      const r = n.getFullYear(), a = r > 0 ? r : 1 - r;
      return t.ordinalNumber(a, { unit: "year" });
    }
    return Ce.y(n, e);
  },
  // Local week-numbering year
  Y: function(n, e, t, r) {
    const a = Ln(n, r), o = a > 0 ? a : 1 - a;
    if (e === "YY") {
      const s = o % 100;
      return N(s, 2);
    }
    return e === "Yo" ? t.ordinalNumber(o, { unit: "year" }) : N(o, e.length);
  },
  // ISO week-numbering year
  R: function(n, e) {
    const t = Wn(n);
    return N(t, e.length);
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
  u: function(n, e) {
    const t = n.getFullYear();
    return N(t, e.length);
  },
  // Quarter
  Q: function(n, e, t) {
    const r = Math.ceil((n.getMonth() + 1) / 3);
    switch (e) {
      // 1, 2, 3, 4
      case "Q":
        return String(r);
      // 01, 02, 03, 04
      case "QQ":
        return N(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return t.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return t.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return t.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return t.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(n, e, t) {
    const r = Math.ceil((n.getMonth() + 1) / 3);
    switch (e) {
      // 1, 2, 3, 4
      case "q":
        return String(r);
      // 01, 02, 03, 04
      case "qq":
        return N(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return t.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return t.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return t.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return t.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(n, e, t) {
    const r = n.getMonth();
    switch (e) {
      case "M":
      case "MM":
        return Ce.M(n, e);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return t.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return t.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return t.month(r, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return t.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(n, e, t) {
    const r = n.getMonth();
    switch (e) {
      // 1, 2, ..., 12
      case "L":
        return String(r + 1);
      // 01, 02, ..., 12
      case "LL":
        return N(r + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return t.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return t.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return t.month(r, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return t.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(n, e, t, r) {
    const a = Oa(n, r);
    return e === "wo" ? t.ordinalNumber(a, { unit: "week" }) : N(a, e.length);
  },
  // ISO week of year
  I: function(n, e, t) {
    const r = _a(n);
    return e === "Io" ? t.ordinalNumber(r, { unit: "week" }) : N(r, e.length);
  },
  // Day of the month
  d: function(n, e, t) {
    return e === "do" ? t.ordinalNumber(n.getDate(), { unit: "date" }) : Ce.d(n, e);
  },
  // Day of year
  D: function(n, e, t) {
    const r = Sa(n);
    return e === "Do" ? t.ordinalNumber(r, { unit: "dayOfYear" }) : N(r, e.length);
  },
  // Day of week
  E: function(n, e, t) {
    const r = n.getDay();
    switch (e) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return t.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return t.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return t.day(r, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return t.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(n, e, t, r) {
    const a = n.getDay(), o = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (e) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(o);
      // Padded numerical value
      case "ee":
        return N(o, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return t.ordinalNumber(o, { unit: "day" });
      case "eee":
        return t.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return t.day(a, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return t.day(a, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return t.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(n, e, t, r) {
    const a = n.getDay(), o = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (e) {
      // Numerical value (same as in `e`)
      case "c":
        return String(o);
      // Padded numerical value
      case "cc":
        return N(o, e.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return t.ordinalNumber(o, { unit: "day" });
      case "ccc":
        return t.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return t.day(a, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return t.day(a, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return t.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(n, e, t) {
    const r = n.getDay(), a = r === 0 ? 7 : r;
    switch (e) {
      // 2
      case "i":
        return String(a);
      // 02
      case "ii":
        return N(a, e.length);
      // 2nd
      case "io":
        return t.ordinalNumber(a, { unit: "day" });
      // Tue
      case "iii":
        return t.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return t.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return t.day(r, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return t.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(n, e, t) {
    const a = n.getHours() / 12 >= 1 ? "pm" : "am";
    switch (e) {
      case "a":
      case "aa":
        return t.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return t.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return t.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return t.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(n, e, t) {
    const r = n.getHours();
    let a;
    switch (r === 12 ? a = Ue.noon : r === 0 ? a = Ue.midnight : a = r / 12 >= 1 ? "pm" : "am", e) {
      case "b":
      case "bb":
        return t.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return t.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return t.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return t.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(n, e, t) {
    const r = n.getHours();
    let a;
    switch (r >= 17 ? a = Ue.evening : r >= 12 ? a = Ue.afternoon : r >= 4 ? a = Ue.morning : a = Ue.night, e) {
      case "B":
      case "BB":
      case "BBB":
        return t.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return t.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return t.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(n, e, t) {
    if (e === "ho") {
      let r = n.getHours() % 12;
      return r === 0 && (r = 12), t.ordinalNumber(r, { unit: "hour" });
    }
    return Ce.h(n, e);
  },
  // Hour [0-23]
  H: function(n, e, t) {
    return e === "Ho" ? t.ordinalNumber(n.getHours(), { unit: "hour" }) : Ce.H(n, e);
  },
  // Hour [0-11]
  K: function(n, e, t) {
    const r = n.getHours() % 12;
    return e === "Ko" ? t.ordinalNumber(r, { unit: "hour" }) : N(r, e.length);
  },
  // Hour [1-24]
  k: function(n, e, t) {
    let r = n.getHours();
    return r === 0 && (r = 24), e === "ko" ? t.ordinalNumber(r, { unit: "hour" }) : N(r, e.length);
  },
  // Minute
  m: function(n, e, t) {
    return e === "mo" ? t.ordinalNumber(n.getMinutes(), { unit: "minute" }) : Ce.m(n, e);
  },
  // Second
  s: function(n, e, t) {
    return e === "so" ? t.ordinalNumber(n.getSeconds(), { unit: "second" }) : Ce.s(n, e);
  },
  // Fraction of second
  S: function(n, e) {
    return Ce.S(n, e);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(n, e, t) {
    const r = n.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (e) {
      // Hours and optional minutes
      case "X":
        return Rn(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return je(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return je(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(n, e, t) {
    const r = n.getTimezoneOffset();
    switch (e) {
      // Hours and optional minutes
      case "x":
        return Rn(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return je(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return je(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(n, e, t) {
    const r = n.getTimezoneOffset();
    switch (e) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Tn(r, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + je(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(n, e, t) {
    const r = n.getTimezoneOffset();
    switch (e) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Tn(r, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + je(r, ":");
    }
  },
  // Seconds timestamp
  t: function(n, e, t) {
    const r = Math.trunc(+n / 1e3);
    return N(r, e.length);
  },
  // Milliseconds timestamp
  T: function(n, e, t) {
    return N(+n, e.length);
  }
};
function Tn(n, e = "") {
  const t = n > 0 ? "-" : "+", r = Math.abs(n), a = Math.trunc(r / 60), o = r % 60;
  return o === 0 ? t + String(a) : t + String(a) + e + N(o, 2);
}
function Rn(n, e) {
  return n % 60 === 0 ? (n > 0 ? "-" : "+") + N(Math.abs(n) / 60, 2) : je(n, e);
}
function je(n, e = "") {
  const t = n > 0 ? "-" : "+", r = Math.abs(n), a = N(Math.trunc(r / 60), 2), o = N(r % 60, 2);
  return t + a + e + o;
}
const Mn = (n, e) => {
  switch (n) {
    case "P":
      return e.date({ width: "short" });
    case "PP":
      return e.date({ width: "medium" });
    case "PPP":
      return e.date({ width: "long" });
    case "PPPP":
    default:
      return e.date({ width: "full" });
  }
}, $n = (n, e) => {
  switch (n) {
    case "p":
      return e.time({ width: "short" });
    case "pp":
      return e.time({ width: "medium" });
    case "ppp":
      return e.time({ width: "long" });
    case "pppp":
    default:
      return e.time({ width: "full" });
  }
}, Ca = (n, e) => {
  const t = n.match(/(P+)(p+)?/) || [], r = t[1], a = t[2];
  if (!a)
    return Mn(n, e);
  let o;
  switch (r) {
    case "P":
      o = e.dateTime({ width: "short" });
      break;
    case "PP":
      o = e.dateTime({ width: "medium" });
      break;
    case "PPP":
      o = e.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      o = e.dateTime({ width: "full" });
      break;
  }
  return o.replace("{{date}}", Mn(r, e)).replace("{{time}}", $n(a, e));
}, Da = {
  p: $n,
  P: Ca
}, Ta = /^D+$/, Ra = /^Y+$/, Ma = ["D", "DD", "YY", "YYYY"];
function ka(n) {
  return Ta.test(n);
}
function Pa(n) {
  return Ra.test(n);
}
function Na(n, e, t) {
  const r = ja(n, e, t);
  if (console.warn(r), Ma.includes(n)) throw new RangeError(r);
}
function ja(n, e, t) {
  const r = n[0] === "Y" ? "years" : "days of the month";
  return `Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${e}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Ia = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Fa = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Aa = /^'([^]*?)'?$/, Ya = /''/g, Wa = /[a-zA-Z]/;
function X(n, e, t) {
  var f, h, p, b, S, _, M, O;
  const r = dt(), a = (t == null ? void 0 : t.locale) ?? r.locale ?? zn, o = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((h = (f = t == null ? void 0 : t.locale) == null ? void 0 : f.options) == null ? void 0 : h.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((b = (p = r.locale) == null ? void 0 : p.options) == null ? void 0 : b.firstWeekContainsDate) ?? 1, s = (t == null ? void 0 : t.weekStartsOn) ?? ((_ = (S = t == null ? void 0 : t.locale) == null ? void 0 : S.options) == null ? void 0 : _.weekStartsOn) ?? r.weekStartsOn ?? ((O = (M = r.locale) == null ? void 0 : M.options) == null ? void 0 : O.weekStartsOn) ?? 0, c = L(n, t == null ? void 0 : t.in);
  if (!zr(c))
    throw new RangeError("Invalid time value");
  let l = e.match(Fa).map((g) => {
    const v = g[0];
    if (v === "p" || v === "P") {
      const T = Da[v];
      return T(g, a.formatLong);
    }
    return g;
  }).join("").match(Ia).map((g) => {
    if (g === "''")
      return { isToken: !1, value: "'" };
    const v = g[0];
    if (v === "'")
      return { isToken: !1, value: za(g) };
    if (Dn[v])
      return { isToken: !0, value: g };
    if (v.match(Wa))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + v + "`"
      );
    return { isToken: !1, value: g };
  });
  a.localize.preprocessor && (l = a.localize.preprocessor(c, l));
  const d = {
    firstWeekContainsDate: o,
    weekStartsOn: s,
    locale: a
  };
  return l.map((g) => {
    if (!g.isToken) return g.value;
    const v = g.value;
    (!(t != null && t.useAdditionalWeekYearTokens) && Pa(v) || !(t != null && t.useAdditionalDayOfYearTokens) && ka(v)) && Na(v, e, String(n));
    const T = Dn[v[0]];
    return T(c, v, a.localize, d);
  }).join("");
}
function za(n) {
  const e = n.match(Aa);
  return e ? e[1].replace(Ya, "'") : n;
}
function tn(n, e) {
  return L(n, e == null ? void 0 : e.in).getDay();
}
function La(n, e) {
  const t = L(n, e == null ? void 0 : e.in), r = t.getFullYear(), a = t.getMonth(), o = he(t, 0);
  return o.setFullYear(r, a + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function $a() {
  return Object.assign({}, dt());
}
function qn(n, e) {
  return +L(n) > +L(e);
}
function nn(n, e) {
  return +L(n) < +L(e);
}
function ne(n, e, t, r) {
  var s, c, l, d;
  const a = () => he(t, NaN), o = $a();
  return o.locale, o.firstWeekContainsDate ?? ((c = (s = o.locale) == null ? void 0 : s.options) == null || c.firstWeekContainsDate), o.weekStartsOn ?? ((d = (l = o.locale) == null ? void 0 : l.options) == null || d.weekStartsOn), n ? a() : L(t, r == null ? void 0 : r.in);
}
function qa(n, e, t) {
  const [r, a] = en(
    t == null ? void 0 : t.in,
    n,
    e
  );
  return r.getFullYear() === a.getFullYear();
}
const Ha = (n) => 1 - --n * n * n * n, Va = (n, e, t, r) => t > r ? e : n + (e - n) * Ha(t / r);
function Ua({
  fromValue: n,
  toValue: e,
  onUpdate: t,
  onComplete: r,
  duration: a = 600
}) {
  const o = performance.now(), s = () => {
    const c = performance.now() - o;
    t(Va(n, e, c, a)), c <= a ? window.requestAnimationFrame(s) : r && r();
  };
  window.requestAnimationFrame(s);
}
const be = {
  down: 40,
  enter: 13,
  left: 37,
  right: 39,
  up: 38
};
function Ga(n, e, t) {
  const r = [], a = new Date(n, e, 1), o = La(a), s = Hn(t);
  let c = tn(new Date(n, e, 1)), l = 0;
  for (let d = 1; d <= o; d++)
    r[l] || (r[l] = []), r[l].push(d), c === s && l++, c = c < 6 ? c + 1 : 0;
  return {
    date: a,
    rows: r
  };
}
function Gt(n, e, t) {
  const r = typeof n == "number" ? new Date(n, 0, 1) : n;
  return Math.ceil(
    (Math.round((e - r) / (60 * 60 * 24 * 1e3)) + r.getDay() + 1 - t) / 7
  );
}
function Ba(n, e = (/* @__PURE__ */ new Date()).getFullYear(), t, r) {
  const a = Hn(t), o = new Date(e, n, 1), s = Gt(e, o, t), c = new Date(e, n + 1, 0);
  let d = Gt(e, c, t) - s;
  return (c.getDay() === a || r) && d++, d;
}
function Hn(n) {
  return n === 0 ? 6 : n - 1;
}
class Xa {
  constructor() {
    yn(this, "clear", () => {
      this.lastPosition = null, this.delta = 0;
    });
  }
  getScrollSpeed(e) {
    return this.lastPosition != null && (this.delta = e - this.lastPosition), this.lastPosition = e, clearTimeout(this._timeout), this._timeout = setTimeout(this.clear, 50), this.delta;
  }
}
const Qa = Pr();
function Ee() {
}
function Vn(n, {
  disabledDates: e = [],
  disabledDays: t = [],
  minDate: r,
  maxDate: a
}) {
  return !n || e.some((o) => Yr(o, n)) || t && t.indexOf(tn(n)) !== -1 || r && nn(n, ze(r)) || a && qn(n, Lr(a)) ? null : n;
}
function Ja(n, e, t) {
  return `${n}-${("0" + (e + 1)).slice(-2)}-${("0" + t).slice(-2)}`;
}
const Un = (n) => (e) => (t) => /* @__PURE__ */ w.jsx(e, { ...n, ...t });
function Ka(n, e) {
  let t = null, r = null;
  const a = () => n.apply(this, r);
  return function() {
    r = arguments, clearTimeout(t), t = setTimeout(a, e);
  };
}
function Bt(n, e, t = 1) {
  const r = Math.max(Math.ceil((e - n) / t), 0), a = Array(r);
  for (let o = 0; o < r; o++, n += t)
    a[o] = n;
  return a;
}
const Za = "_root_100gv_1", eo = "_show_100gv_20", to = "_chevron_100gv_24", no = "_chevronUp_100gv_35", ro = "_chevronDown_100gv_38", st = {
  root: Za,
  show: eo,
  chevron: to,
  chevronUp: no,
  chevronDown: ro
}, Xt = 1, Qt = -1, ao = "M256,298.3L256,298.3L256,298.3l174.2-167.2c4.3-4.2,11.4-4.1,15.8,0.2l30.6,29.9c4.4,4.3,4.5,11.3,0.2,15.5L264.1,380.9 c-2.2,2.2-5.2,3.2-8.1,3c-3,0.1-5.9-0.9-8.1-3L35.2,176.7c-4.3-4.2-4.2-11.2,0.2-15.5L66,131.3c4.4-4.3,11.5-4.4,15.8-0.2L256,298.3 z", Gn = ({ scrollToDate: n, show: e, theme: t, todayLabel: r }) => {
  const a = () => {
    n(/* @__PURE__ */ new Date(), -40, !0);
  };
  return /* @__PURE__ */ w.jsxs(
    "div",
    {
      className: ae(st.root, {
        [st.show]: e,
        [st.chevronUp]: e === Xt,
        [st.chevronDown]: e === Qt
      }),
      style: {
        backgroundColor: t.floatingNav.background,
        color: t.floatingNav.color
      },
      onClick: a,
      children: [
        r,
        /* @__PURE__ */ w.jsx(
          "svg",
          {
            className: st.chevron,
            x: "0px",
            y: "0px",
            width: "14px",
            height: "14px",
            viewBox: "0 0 512 512",
            children: /* @__PURE__ */ w.jsx(
              "path",
              {
                fill: t.floatingNav.chevron || t.floatingNav.color,
                d: ao
              }
            )
          }
        )
      ]
    }
  );
};
Gn.propTypes = {
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
function ut() {
  return ut = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, ut.apply(null, arguments);
}
function rn(n, e) {
  if (n == null) return {};
  var t = {};
  for (var r in n) if ({}.hasOwnProperty.call(n, r)) {
    if (e.indexOf(r) !== -1) continue;
    t[r] = n[r];
  }
  return t;
}
function Jt(n, e) {
  return Jt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, r) {
    return t.__proto__ = r, t;
  }, Jt(n, e);
}
function an(n, e) {
  n.prototype = Object.create(e.prototype), n.prototype.constructor = n, Jt(n, e);
}
function oo(n, e) {
  return n.classList ? !!e && n.classList.contains(e) : (" " + (n.className.baseVal || n.className) + " ").indexOf(" " + e + " ") !== -1;
}
function so(n, e) {
  n.classList ? n.classList.add(e) : oo(n, e) || (typeof n.className == "string" ? n.className = n.className + " " + e : n.setAttribute("class", (n.className && n.className.baseVal || "") + " " + e));
}
function kn(n, e) {
  return n.replace(new RegExp("(^|\\s)" + e + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function io(n, e) {
  n.classList ? n.classList.remove(e) : typeof n.className == "string" ? n.className = kn(n.className, e) : n.setAttribute("class", kn(n.className && n.className.baseVal || "", e));
}
const Pn = {
  disabled: !1
};
var co = process.env.NODE_ENV !== "production" ? u.oneOfType([u.number, u.shape({
  enter: u.number,
  exit: u.number,
  appear: u.number
}).isRequired]) : null, lo = process.env.NODE_ENV !== "production" ? u.oneOfType([u.string, u.shape({
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
const Mt = te.createContext(null);
var Bn = function(e) {
  return e.scrollTop;
}, ct = "unmounted", Ie = "exited", Fe = "entering", Xe = "entered", Kt = "exiting", ye = /* @__PURE__ */ function(n) {
  an(e, n);
  function e(r, a) {
    var o;
    o = n.call(this, r, a) || this;
    var s = a, c = s && !s.isMounting ? r.enter : r.appear, l;
    return o.appearStatus = null, r.in ? c ? (l = Ie, o.appearStatus = Fe) : l = Xe : r.unmountOnExit || r.mountOnEnter ? l = ct : l = Ie, o.state = {
      status: l
    }, o.nextCallback = null, o;
  }
  e.getDerivedStateFromProps = function(a, o) {
    var s = a.in;
    return s && o.status === ct ? {
      status: Ie
    } : null;
  };
  var t = e.prototype;
  return t.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, t.componentDidUpdate = function(a) {
    var o = null;
    if (a !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== Fe && s !== Xe && (o = Fe) : (s === Fe || s === Xe) && (o = Kt);
    }
    this.updateStatus(!1, o);
  }, t.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, t.getTimeouts = function() {
    var a = this.props.timeout, o, s, c;
    return o = s = c = a, a != null && typeof a != "number" && (o = a.exit, s = a.enter, c = a.appear !== void 0 ? a.appear : s), {
      exit: o,
      enter: s,
      appear: c
    };
  }, t.updateStatus = function(a, o) {
    if (a === void 0 && (a = !1), o !== null)
      if (this.cancelNextCallback(), o === Fe) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : vt.findDOMNode(this);
          s && Bn(s);
        }
        this.performEnter(a);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Ie && this.setState({
      status: ct
    });
  }, t.performEnter = function(a) {
    var o = this, s = this.props.enter, c = this.context ? this.context.isMounting : a, l = this.props.nodeRef ? [c] : [vt.findDOMNode(this), c], d = l[0], f = l[1], h = this.getTimeouts(), p = c ? h.appear : h.enter;
    if (!a && !s || Pn.disabled) {
      this.safeSetState({
        status: Xe
      }, function() {
        o.props.onEntered(d);
      });
      return;
    }
    this.props.onEnter(d, f), this.safeSetState({
      status: Fe
    }, function() {
      o.props.onEntering(d, f), o.onTransitionEnd(p, function() {
        o.safeSetState({
          status: Xe
        }, function() {
          o.props.onEntered(d, f);
        });
      });
    });
  }, t.performExit = function() {
    var a = this, o = this.props.exit, s = this.getTimeouts(), c = this.props.nodeRef ? void 0 : vt.findDOMNode(this);
    if (!o || Pn.disabled) {
      this.safeSetState({
        status: Ie
      }, function() {
        a.props.onExited(c);
      });
      return;
    }
    this.props.onExit(c), this.safeSetState({
      status: Kt
    }, function() {
      a.props.onExiting(c), a.onTransitionEnd(s.exit, function() {
        a.safeSetState({
          status: Ie
        }, function() {
          a.props.onExited(c);
        });
      });
    });
  }, t.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, t.safeSetState = function(a, o) {
    o = this.setNextCallback(o), this.setState(a, o);
  }, t.setNextCallback = function(a) {
    var o = this, s = !0;
    return this.nextCallback = function(c) {
      s && (s = !1, o.nextCallback = null, a(c));
    }, this.nextCallback.cancel = function() {
      s = !1;
    }, this.nextCallback;
  }, t.onTransitionEnd = function(a, o) {
    this.setNextCallback(o);
    var s = this.props.nodeRef ? this.props.nodeRef.current : vt.findDOMNode(this), c = a == null && !this.props.addEndListener;
    if (!s || c) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var l = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], d = l[0], f = l[1];
      this.props.addEndListener(d, f);
    }
    a != null && setTimeout(this.nextCallback, a);
  }, t.render = function() {
    var a = this.state.status;
    if (a === ct)
      return null;
    var o = this.props, s = o.children;
    o.in, o.mountOnEnter, o.unmountOnExit, o.appear, o.enter, o.exit, o.timeout, o.addEndListener, o.onEnter, o.onEntering, o.onEntered, o.onExit, o.onExiting, o.onExited, o.nodeRef;
    var c = rn(o, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ te.createElement(Mt.Provider, {
        value: null
      }, typeof s == "function" ? s(a, c) : te.cloneElement(te.Children.only(s), c))
    );
  }, e;
}(te.Component);
ye.contextType = Mt;
ye.propTypes = process.env.NODE_ENV !== "production" ? {
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
    current: typeof Element > "u" ? u.any : function(n, e, t, r, a, o) {
      var s = n[e];
      return u.instanceOf(s && "ownerDocument" in s ? s.ownerDocument.defaultView.Element : Element)(n, e, t, r, a, o);
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
  timeout: function(e) {
    var t = co;
    e.addEndListener || (t = t.isRequired);
    for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
      a[o - 1] = arguments[o];
    return t.apply(void 0, [e].concat(a));
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
function Ge() {
}
ye.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Ge,
  onEntering: Ge,
  onEntered: Ge,
  onExit: Ge,
  onExiting: Ge,
  onExited: Ge
};
ye.UNMOUNTED = ct;
ye.EXITED = Ie;
ye.ENTERING = Fe;
ye.ENTERED = Xe;
ye.EXITING = Kt;
var uo = function(e, t) {
  return e && t && t.split(" ").forEach(function(r) {
    return so(e, r);
  });
}, Ht = function(e, t) {
  return e && t && t.split(" ").forEach(function(r) {
    return io(e, r);
  });
}, kt = /* @__PURE__ */ function(n) {
  an(e, n);
  function e() {
    for (var r, a = arguments.length, o = new Array(a), s = 0; s < a; s++)
      o[s] = arguments[s];
    return r = n.call.apply(n, [this].concat(o)) || this, r.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    }, r.onEnter = function(c, l) {
      var d = r.resolveArguments(c, l), f = d[0], h = d[1];
      r.removeClasses(f, "exit"), r.addClass(f, h ? "appear" : "enter", "base"), r.props.onEnter && r.props.onEnter(c, l);
    }, r.onEntering = function(c, l) {
      var d = r.resolveArguments(c, l), f = d[0], h = d[1], p = h ? "appear" : "enter";
      r.addClass(f, p, "active"), r.props.onEntering && r.props.onEntering(c, l);
    }, r.onEntered = function(c, l) {
      var d = r.resolveArguments(c, l), f = d[0], h = d[1], p = h ? "appear" : "enter";
      r.removeClasses(f, p), r.addClass(f, p, "done"), r.props.onEntered && r.props.onEntered(c, l);
    }, r.onExit = function(c) {
      var l = r.resolveArguments(c), d = l[0];
      r.removeClasses(d, "appear"), r.removeClasses(d, "enter"), r.addClass(d, "exit", "base"), r.props.onExit && r.props.onExit(c);
    }, r.onExiting = function(c) {
      var l = r.resolveArguments(c), d = l[0];
      r.addClass(d, "exit", "active"), r.props.onExiting && r.props.onExiting(c);
    }, r.onExited = function(c) {
      var l = r.resolveArguments(c), d = l[0];
      r.removeClasses(d, "exit"), r.addClass(d, "exit", "done"), r.props.onExited && r.props.onExited(c);
    }, r.resolveArguments = function(c, l) {
      return r.props.nodeRef ? [r.props.nodeRef.current, c] : [c, l];
    }, r.getClassNames = function(c) {
      var l = r.props.classNames, d = typeof l == "string", f = d && l ? l + "-" : "", h = d ? "" + f + c : l[c], p = d ? h + "-active" : l[c + "Active"], b = d ? h + "-done" : l[c + "Done"];
      return {
        baseClassName: h,
        activeClassName: p,
        doneClassName: b
      };
    }, r;
  }
  var t = e.prototype;
  return t.addClass = function(a, o, s) {
    var c = this.getClassNames(o)[s + "ClassName"], l = this.getClassNames("enter"), d = l.doneClassName;
    o === "appear" && s === "done" && d && (c += " " + d), s === "active" && a && Bn(a), c && (this.appliedClasses[o][s] = c, uo(a, c));
  }, t.removeClasses = function(a, o) {
    var s = this.appliedClasses[o], c = s.base, l = s.active, d = s.done;
    this.appliedClasses[o] = {}, c && Ht(a, c), l && Ht(a, l), d && Ht(a, d);
  }, t.render = function() {
    var a = this.props;
    a.classNames;
    var o = rn(a, ["classNames"]);
    return /* @__PURE__ */ te.createElement(ye, ut({}, o, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  }, e;
}(te.Component);
kt.defaultProps = {
  classNames: ""
};
kt.propTypes = process.env.NODE_ENV !== "production" ? ut({}, ye.propTypes, {
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
  classNames: lo,
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
function fo(n) {
  if (n === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function on(n, e) {
  var t = function(o) {
    return e && Dt(o) ? e(o) : o;
  }, r = /* @__PURE__ */ Object.create(null);
  return n && br.map(n, function(a) {
    return a;
  }).forEach(function(a) {
    r[a.key] = t(a);
  }), r;
}
function ho(n, e) {
  n = n || {}, e = e || {};
  function t(f) {
    return f in e ? e[f] : n[f];
  }
  var r = /* @__PURE__ */ Object.create(null), a = [];
  for (var o in n)
    o in e ? a.length && (r[o] = a, a = []) : a.push(o);
  var s, c = {};
  for (var l in e) {
    if (r[l])
      for (s = 0; s < r[l].length; s++) {
        var d = r[l][s];
        c[r[l][s]] = t(d);
      }
    c[l] = t(l);
  }
  for (s = 0; s < a.length; s++)
    c[a[s]] = t(a[s]);
  return c;
}
function Ye(n, e, t) {
  return t[e] != null ? t[e] : n.props[e];
}
function mo(n, e) {
  return on(n.children, function(t) {
    return Tt(t, {
      onExited: e.bind(null, t),
      in: !0,
      appear: Ye(t, "appear", n),
      enter: Ye(t, "enter", n),
      exit: Ye(t, "exit", n)
    });
  });
}
function go(n, e, t) {
  var r = on(n.children), a = ho(e, r);
  return Object.keys(a).forEach(function(o) {
    var s = a[o];
    if (Dt(s)) {
      var c = o in e, l = o in r, d = e[o], f = Dt(d) && !d.props.in;
      l && (!c || f) ? a[o] = Tt(s, {
        onExited: t.bind(null, s),
        in: !0,
        exit: Ye(s, "exit", n),
        enter: Ye(s, "enter", n)
      }) : !l && c && !f ? a[o] = Tt(s, {
        in: !1
      }) : l && c && Dt(d) && (a[o] = Tt(s, {
        onExited: t.bind(null, s),
        in: d.props.in,
        exit: Ye(s, "exit", n),
        enter: Ye(s, "enter", n)
      }));
    }
  }), a;
}
var po = Object.values || function(n) {
  return Object.keys(n).map(function(e) {
    return n[e];
  });
}, yo = {
  component: "div",
  childFactory: function(e) {
    return e;
  }
}, Pt = /* @__PURE__ */ function(n) {
  an(e, n);
  function e(r, a) {
    var o;
    o = n.call(this, r, a) || this;
    var s = o.handleExited.bind(fo(o));
    return o.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: s,
      firstRender: !0
    }, o;
  }
  var t = e.prototype;
  return t.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, t.componentWillUnmount = function() {
    this.mounted = !1;
  }, e.getDerivedStateFromProps = function(a, o) {
    var s = o.children, c = o.handleExited, l = o.firstRender;
    return {
      children: l ? mo(a, c) : go(a, s, c),
      firstRender: !1
    };
  }, t.handleExited = function(a, o) {
    var s = on(this.props.children);
    a.key in s || (a.props.onExited && a.props.onExited(o), this.mounted && this.setState(function(c) {
      var l = ut({}, c.children);
      return delete l[a.key], {
        children: l
      };
    }));
  }, t.render = function() {
    var a = this.props, o = a.component, s = a.childFactory, c = rn(a, ["component", "childFactory"]), l = this.state.contextValue, d = po(this.state.children).map(s);
    return delete c.appear, delete c.enter, delete c.exit, o === null ? /* @__PURE__ */ te.createElement(Mt.Provider, {
      value: l
    }, d) : /* @__PURE__ */ te.createElement(Mt.Provider, {
      value: l
    }, /* @__PURE__ */ te.createElement(o, c, d));
  }, e;
}(te.Component);
Pt.propTypes = process.env.NODE_ENV !== "production" ? {
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
Pt.defaultProps = yo;
const vo = "_root_11jcu_1", wo = "_landscape_11jcu_14", bo = "_dateWrapper_11jcu_20", Eo = "_day_11jcu_20", So = "_wrapper_11jcu_25", _o = "_blank_11jcu_31", xo = "_active_11jcu_46", Oo = "_year_11jcu_55", Co = "_date_11jcu_20", Do = "_range_11jcu_69", ge = {
  root: vo,
  landscape: wo,
  dateWrapper: bo,
  day: Eo,
  wrapper: So,
  blank: _o,
  active: xo,
  year: Oo,
  date: Co,
  range: Do
}, To = "_enter_1dfih_1", Ro = "_enterActive_1dfih_7", Mo = "_leave_1dfih_12", ko = "_leaveActive_1dfih_17", Po = {
  enter: To,
  enterActive: Ro,
  leave: Mo,
  leaveActive: ko
};
function Je(n, {
  display: e,
  key: t,
  locale: { locale: r },
  dateFormat: a,
  onYearClick: o,
  scrollToDate: s,
  setDisplay: c,
  shouldAnimate: l
}) {
  const d = n instanceof Date ? n : new Date(n), f = d && !isNaN(d.getTime()) && [
    {
      active: e === "years",
      handleClick: (h) => {
        o(d, h, t), c("years");
      },
      item: "year",
      title: e === "days" ? "Change year" : null,
      value: d.getFullYear()
    },
    {
      active: e === "days",
      handleClick: (h) => {
        e !== "days" ? c("days") : d && s(d, -40, !0);
      },
      item: "day",
      title: e === "days" ? `Scroll to ${X(d, a)}` : null,
      value: X(d, a)
    }
  ];
  return /* @__PURE__ */ w.jsx(
    "div",
    {
      className: ge.wrapper,
      "aria-label": X(d, `${a} yyyy`),
      children: f.map(({ handleClick: h, item: p, value: b, active: S, title: _ }) => /* @__PURE__ */ w.jsx(
        "div",
        {
          className: ae(ge.dateWrapper, ge[p], {
            [ge.active]: S
          }),
          title: _,
          children: /* @__PURE__ */ w.jsx(Pt, { component: null, children: /* @__PURE__ */ w.jsx(
            kt,
            {
              classNames: Po,
              timeout: 250,
              appear: l,
              enter: l,
              exit: l,
              children: /* @__PURE__ */ w.jsx(
                "span",
                {
                  className: ge.date,
                  "aria-hidden": !0,
                  onClick: h,
                  children: b
                }
              )
            },
            `${p}-${b}`
          ) })
        },
        p
      ))
    },
    t
  );
}
const sn = ({
  dateFormat: n,
  display: e,
  layout: t,
  locale: r,
  onYearClick: a = Ee,
  selected: o,
  shouldAnimate: s,
  theme: c,
  renderSelection: l = Je
}) => /* @__PURE__ */ w.jsx(
  "div",
  {
    "data-testid": "calendar-header",
    className: ae(ge.root, {
      [ge.landscape]: t === "landscape"
    }),
    style: {
      backgroundColor: c.headerColor,
      color: c.textColor.active
    },
    children: o ? l(o, {
      dateFormat: n,
      display: e,
      key: "selection",
      locale: r,
      onYearClick: a,
      scrollToDate: Ee,
      setDisplay: Ee,
      shouldAnimate: s
    }) : /* @__PURE__ */ w.jsx("div", { className: ae(ge.wrapper, ge.blank), children: r.blank })
  }
);
sn.defaultProps = {
  onYearClick: Ee,
  renderSelection: Je
};
sn.propTypes = {
  dateFormat: u.string,
  display: u.string,
  layout: u.string,
  locale: u.object,
  onYearClick: u.func,
  selected: u.any,
  shouldAnimate: u.bool,
  theme: u.object
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Zt = function(n, e) {
  return Zt = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var a in r) r.hasOwnProperty(a) && (t[a] = r[a]);
  }, Zt(n, e);
};
function No(n, e) {
  Zt(n, e);
  function t() {
    this.constructor = n;
  }
  n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var Te = function() {
  return Te = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Te.apply(this, arguments);
};
function jo(n, e) {
  var t = {};
  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && e.indexOf(r) < 0 && (t[r] = n[r]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(n); a < r.length; a++) e.indexOf(r[a]) < 0 && (t[r[a]] = n[r[a]]);
  return t;
}
var pe;
(function(n) {
  n.AUTO = "auto", n.START = "start", n.CENTER = "center", n.END = "end";
})(pe || (pe = {}));
var z;
(function(n) {
  n.HORIZONTAL = "horizontal", n.VERTICAL = "vertical";
})(z || (z = {}));
var Ae;
(function(n) {
  n.OBSERVED = "observed", n.REQUESTED = "requested";
})(Ae || (Ae = {}));
var Nn = (Et = {}, Et[z.VERTICAL] = "scrollTop", Et[z.HORIZONTAL] = "scrollLeft", Et), it = (St = {}, St[z.VERTICAL] = "height", St[z.HORIZONTAL] = "width", St), Io = (_t = {}, _t[z.VERTICAL] = "top", _t[z.HORIZONTAL] = "left", _t), Fo = (xt = {}, xt[z.VERTICAL] = "marginTop", xt[z.HORIZONTAL] = "marginLeft", xt), Ao = (Ot = {}, Ot[z.VERTICAL] = "marginBottom", Ot[z.HORIZONTAL] = "marginRight", Ot), Et, St, _t, xt, Ot, Yo = (
  /** @class */
  function() {
    function n(e) {
      var t = e.itemCount, r = e.itemSizeGetter, a = e.estimatedItemSize;
      this.itemSizeGetter = r, this.itemCount = t, this.estimatedItemSize = a, this.itemSizeAndPositionData = {}, this.lastMeasuredIndex = -1;
    }
    return n.prototype.updateConfig = function(e) {
      var t = e.itemCount, r = e.itemSizeGetter, a = e.estimatedItemSize;
      t != null && (this.itemCount = t), a != null && (this.estimatedItemSize = a), r != null && (this.itemSizeGetter = r);
    }, n.prototype.getLastMeasuredIndex = function() {
      return this.lastMeasuredIndex;
    }, n.prototype.getSizeAndPositionForIndex = function(e) {
      if (e < 0 || e >= this.itemCount)
        throw Error("Requested index " + e + " is outside of range 0.." + this.itemCount);
      if (e > this.lastMeasuredIndex) {
        for (var t = this.getSizeAndPositionOfLastMeasuredItem(), r = t.offset + t.size, a = this.lastMeasuredIndex + 1; a <= e; a++) {
          var o = this.itemSizeGetter(a);
          if (o == null || isNaN(o))
            throw Error("Invalid size returned for index " + a + " of value " + o);
          this.itemSizeAndPositionData[a] = {
            offset: r,
            size: o
          }, r += o;
        }
        this.lastMeasuredIndex = e;
      }
      return this.itemSizeAndPositionData[e];
    }, n.prototype.getSizeAndPositionOfLastMeasuredItem = function() {
      return this.lastMeasuredIndex >= 0 ? this.itemSizeAndPositionData[this.lastMeasuredIndex] : { offset: 0, size: 0 };
    }, n.prototype.getTotalSize = function() {
      var e = this.getSizeAndPositionOfLastMeasuredItem();
      return e.offset + e.size + (this.itemCount - this.lastMeasuredIndex - 1) * this.estimatedItemSize;
    }, n.prototype.getUpdatedOffsetForIndex = function(e) {
      var t = e.align, r = t === void 0 ? pe.START : t, a = e.containerSize, o = e.currentOffset, s = e.targetIndex;
      if (a <= 0)
        return 0;
      var c = this.getSizeAndPositionForIndex(s), l = c.offset, d = l - a + c.size, f;
      switch (r) {
        case pe.END:
          f = d;
          break;
        case pe.CENTER:
          f = l - (a - c.size) / 2;
          break;
        case pe.START:
          f = l;
          break;
        default:
          f = Math.max(d, Math.min(l, o));
      }
      var h = this.getTotalSize();
      return Math.max(0, Math.min(h - a, f));
    }, n.prototype.getVisibleRange = function(e) {
      var t = e.containerSize, r = e.offset, a = e.overscanCount, o = this.getTotalSize();
      if (o === 0)
        return {};
      var s = r + t, c = this.findNearestItem(r);
      if (typeof c > "u")
        throw Error("Invalid offset " + r + " specified");
      var l = this.getSizeAndPositionForIndex(c);
      r = l.offset + l.size;
      for (var d = c; r < s && d < this.itemCount - 1; )
        d++, r += this.getSizeAndPositionForIndex(d).size;
      return a && (c = Math.max(0, c - a), d = Math.min(d + a, this.itemCount - 1)), {
        start: c,
        stop: d
      };
    }, n.prototype.resetItem = function(e) {
      this.lastMeasuredIndex = Math.min(this.lastMeasuredIndex, e - 1);
    }, n.prototype.findNearestItem = function(e) {
      if (isNaN(e))
        throw Error("Invalid offset " + e + " specified");
      e = Math.max(0, e);
      var t = this.getSizeAndPositionOfLastMeasuredItem(), r = Math.max(0, this.lastMeasuredIndex);
      return t.offset >= e ? this.binarySearch({
        high: r,
        low: 0,
        offset: e
      }) : this.exponentialSearch({
        index: r,
        offset: e
      });
    }, n.prototype.binarySearch = function(e) {
      for (var t = e.low, r = e.high, a = e.offset, o = 0, s = 0; t <= r; ) {
        if (o = t + Math.floor((r - t) / 2), s = this.getSizeAndPositionForIndex(o).offset, s === a)
          return o;
        s < a ? t = o + 1 : s > a && (r = o - 1);
      }
      return t > 0 ? t - 1 : 0;
    }, n.prototype.exponentialSearch = function(e) {
      for (var t = e.index, r = e.offset, a = 1; t < this.itemCount && this.getSizeAndPositionForIndex(t).offset < r; )
        t += a, a *= 2;
      return this.binarySearch({
        high: Math.min(t, this.itemCount - 1),
        low: Math.floor(t / 2),
        offset: r
      });
    }, n;
  }()
), Wo = {
  overflow: "auto",
  willChange: "transform",
  WebkitOverflowScrolling: "touch"
}, zo = {
  position: "relative",
  width: "100%",
  minHeight: "100%"
}, Xn = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%"
}, Lo = Te({}, Xn, { position: "sticky" }), $o = (
  /** @class */
  function(n) {
    No(e, n);
    function e() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.itemSizeGetter = function(r) {
        return function(a) {
          return t.getSize(a, r);
        };
      }, t.sizeAndPositionManager = new Yo({
        itemCount: t.props.itemCount,
        itemSizeGetter: t.itemSizeGetter(t.props.itemSize),
        estimatedItemSize: t.getEstimatedItemSize()
      }), t.state = {
        offset: t.props.scrollOffset || t.props.scrollToIndex != null && t.getOffsetForIndex(t.props.scrollToIndex) || 0,
        scrollChangeReason: Ae.REQUESTED
      }, t.styleCache = {}, t.getRef = function(r) {
        t.rootNode = r;
      }, t.handleScroll = function(r) {
        var a = t.props.onScroll, o = t.getNodeOffset();
        o < 0 || t.state.offset === o || r.target !== t.rootNode || (t.setState({
          offset: o,
          scrollChangeReason: Ae.OBSERVED
        }), typeof a == "function" && a(o, r));
      }, t;
    }
    return e.prototype.componentDidMount = function() {
      var t = this.props, r = t.scrollOffset, a = t.scrollToIndex;
      this.rootNode.addEventListener("scroll", this.handleScroll, {
        passive: !0
      }), r != null ? this.scrollTo(r) : a != null && this.scrollTo(this.getOffsetForIndex(a));
    }, e.prototype.componentWillReceiveProps = function(t) {
      var r = this.props, a = r.estimatedItemSize, o = r.itemCount, s = r.itemSize, c = r.scrollOffset, l = r.scrollToAlignment, d = r.scrollToIndex, f = t.scrollToIndex !== d || t.scrollToAlignment !== l, h = t.itemCount !== o || t.itemSize !== s || t.estimatedItemSize !== a;
      t.itemSize !== s && this.sizeAndPositionManager.updateConfig({
        itemSizeGetter: this.itemSizeGetter(t.itemSize)
      }), (t.itemCount !== o || t.estimatedItemSize !== a) && this.sizeAndPositionManager.updateConfig({
        itemCount: t.itemCount,
        estimatedItemSize: this.getEstimatedItemSize(t)
      }), h && this.recomputeSizes(), t.scrollOffset !== c ? this.setState({
        offset: t.scrollOffset || 0,
        scrollChangeReason: Ae.REQUESTED
      }) : typeof t.scrollToIndex == "number" && (f || h) && this.setState({
        offset: this.getOffsetForIndex(t.scrollToIndex, t.scrollToAlignment, t.itemCount),
        scrollChangeReason: Ae.REQUESTED
      });
    }, e.prototype.componentDidUpdate = function(t, r) {
      var a = this.state, o = a.offset, s = a.scrollChangeReason;
      r.offset !== o && s === Ae.REQUESTED && this.scrollTo(o);
    }, e.prototype.componentWillUnmount = function() {
      this.rootNode.removeEventListener("scroll", this.handleScroll);
    }, e.prototype.scrollTo = function(t) {
      var r = this.props.scrollDirection, a = r === void 0 ? z.VERTICAL : r;
      this.rootNode[Nn[a]] = t;
    }, e.prototype.getOffsetForIndex = function(t, r, a) {
      r === void 0 && (r = this.props.scrollToAlignment), a === void 0 && (a = this.props.itemCount);
      var o = this.props.scrollDirection, s = o === void 0 ? z.VERTICAL : o;
      return (t < 0 || t >= a) && (t = 0), this.sizeAndPositionManager.getUpdatedOffsetForIndex({
        align: r,
        containerSize: this.props[it[s]],
        currentOffset: this.state && this.state.offset || 0,
        targetIndex: t
      });
    }, e.prototype.recomputeSizes = function(t) {
      t === void 0 && (t = 0), this.styleCache = {}, this.sizeAndPositionManager.resetItem(t);
    }, e.prototype.render = function() {
      var t = this, r = this.props;
      r.estimatedItemSize;
      var a = r.height, o = r.overscanCount, s = o === void 0 ? 3 : o, c = r.renderItem;
      r.itemCount, r.itemSize;
      var l = r.onItemsRendered;
      r.onScroll;
      var d = r.scrollDirection, f = d === void 0 ? z.VERTICAL : d;
      r.scrollOffset, r.scrollToIndex, r.scrollToAlignment;
      var h = r.stickyIndices, p = r.style, b = r.width, S = jo(r, ["estimatedItemSize", "height", "overscanCount", "renderItem", "itemCount", "itemSize", "onItemsRendered", "onScroll", "scrollDirection", "scrollOffset", "scrollToIndex", "scrollToAlignment", "stickyIndices", "style", "width"]), _ = this.state.offset, M = this.sizeAndPositionManager.getVisibleRange({
        containerSize: this.props[it[f]] || 0,
        offset: _,
        overscanCount: s
      }), O = M.start, g = M.stop, v = [], T = Te({}, Wo, p, { height: a, width: b }), x = Te({}, zo, (F = {}, F[it[f]] = this.sizeAndPositionManager.getTotalSize(), F));
      if (h != null && h.length !== 0 && (h.forEach(function(G) {
        return v.push(c({
          index: G,
          style: t.getStyle(G, !0)
        }));
      }), f === z.HORIZONTAL && (x.display = "flex")), typeof O < "u" && typeof g < "u") {
        for (var Y = O; Y <= g; Y++)
          h != null && h.includes(Y) || v.push(c({
            index: Y,
            style: this.getStyle(Y, !1)
          }));
        typeof l == "function" && l({
          startIndex: O,
          stopIndex: g
        });
      }
      return vn("div", Te({ ref: this.getRef }, S, { style: T }), vn("div", { style: x }, v));
      var F;
    }, e.prototype.getNodeOffset = function() {
      var t = this.props.scrollDirection, r = t === void 0 ? z.VERTICAL : t;
      return this.rootNode[Nn[r]];
    }, e.prototype.getEstimatedItemSize = function(t) {
      return t === void 0 && (t = this.props), t.estimatedItemSize || typeof t.itemSize == "number" && t.itemSize || 50;
    }, e.prototype.getSize = function(t, r) {
      return typeof r == "function" ? r(t) : Array.isArray(r) ? r[t] : r;
    }, e.prototype.getStyle = function(t, r) {
      var a = this.styleCache[t];
      if (a)
        return a;
      var o = this.props.scrollDirection, s = o === void 0 ? z.VERTICAL : o, c = this.sizeAndPositionManager.getSizeAndPositionForIndex(t), l = c.size, d = c.offset;
      return this.styleCache[t] = r ? Te({}, Lo, (f = {}, f[it[s]] = l, f[Fo[s]] = d, f[Ao[s]] = -(d + l), f.zIndex = 1, f)) : Te({}, Xn, (h = {}, h[it[s]] = l, h[Io[s]] = d, h));
      var f, h;
    }, e.defaultProps = {
      overscanCount: 3,
      scrollDirection: z.VERTICAL,
      width: "100%"
    }, e.propTypes = {
      estimatedItemSize: we,
      height: Lt([we, bn]).isRequired,
      itemCount: we.isRequired,
      itemSize: Lt([we, xr, yt]).isRequired,
      onScroll: yt,
      onItemsRendered: yt,
      overscanCount: we,
      renderItem: yt.isRequired,
      scrollOffset: we,
      scrollToIndex: we,
      scrollToAlignment: wn([pe.AUTO, pe.START, pe.CENTER, pe.END]),
      scrollDirection: wn([z.HORIZONTAL, z.VERTICAL]),
      stickyIndices: _r(we),
      style: Sr,
      width: Lt([we, bn])
    }, e;
  }(Er)
);
const qo = "_rows_1wsvd_1", Ho = "_row_1wsvd_1", Vo = "_partial_1wsvd_20", Uo = "_label_1wsvd_28", Go = "_partialFirstRow_1wsvd_54", Be = {
  rows: qo,
  row: Ho,
  partial: Vo,
  label: Uo,
  partialFirstRow: Go
}, Bo = ({
  DayComponent: n,
  disabledDates: e,
  disabledDays: t,
  monthDate: r,
  locale: a,
  maxDate: o,
  minDate: s,
  rowHeight: c,
  rows: l,
  selected: d,
  today: f,
  theme: h,
  passThrough: p,
  showOverlay: b,
  style: S
}) => {
  const _ = B(() => {
    const O = f.getFullYear(), g = r.getFullYear(), v = r.getMonth(), T = X(r, "MMM", { locale: a.locale }), x = [], Y = X(f, "yyyy-MM-dd"), F = X(s, "yyyy-MM-dd"), G = X(o, "yyyy-MM-dd");
    for (let H = 0, oe = l.length; H < oe; H++) {
      const se = l[H], ie = [];
      let Q = tn(new Date(g, v, se[0]));
      for (let V = 0, ue = se.length; V < ue; V++) {
        const k = se[V], A = Ja(g, v, k), I = A === Y, U = s && A < F || o && A > G || t && t.length && t.indexOf(Q) !== -1 || e && e.length && e.indexOf(A) !== -1;
        ie[V] = /* @__PURE__ */ w.jsx(
          n,
          {
            currentYear: O,
            date: A,
            day: k,
            selected: d,
            isDisabled: U,
            isToday: I,
            locale: a,
            month: v,
            monthShort: T,
            theme: h,
            year: g,
            ...p.Day
          },
          `day-${k}`
        ), Q += 1;
      }
      x[H] = /* @__PURE__ */ w.jsx(
        "ul",
        {
          className: ae(Be.row, { [Be.partial]: se.length !== 7 }),
          style: { height: c },
          role: "row",
          "aria-label": `Week ${H + 1}`,
          children: ie
        },
        `Row-${H}`
      );
    }
    return x;
  }, [n, e, t, r, a, o, s, c, l, d, f, h, p]), M = qa(r, f) ? "MMMM" : "MMMM yyyy";
  return /* @__PURE__ */ w.jsx("div", { className: Be.root, style: { ...S, lineHeight: `${c}px` }, children: /* @__PURE__ */ w.jsxs("div", { className: Be.rows, children: [
    _,
    b && /* @__PURE__ */ w.jsx(
      "label",
      {
        className: ae(Be.label, {
          [Be.partialFirstRow]: l[0].length !== 7
        }),
        style: { backgroundColor: h.overlayColor },
        children: /* @__PURE__ */ w.jsx("span", { children: X(r, M, { locale: a.locale }) })
      }
    )
  ] }) });
}, Xo = "_root_u4ye3_1", Qo = "_scrolling_u4ye3_6", jn = {
  root: Xo,
  scrolling: Qo
}, Jo = 5, Qn = ({
  DayComponent: n,
  disabledDates: e,
  disabledDays: t,
  height: r,
  isScrolling: a,
  locale: o,
  maxDate: s,
  min: c,
  minDate: l,
  months: d,
  onDaySelect: f,
  onScroll: h,
  overscanMonthCount: p,
  passThrough: b = {},
  rowHeight: S,
  scrollDate: _,
  selectedDate: M,
  showOverlay: O,
  theme: g,
  today: v,
  width: T
}) => {
  const x = C((k) => {
    if (!k || !c || !o) return 0;
    const { weekStartsOn: A } = o;
    return Gt($r(c), ne(k), A) * S - (r - S / 2) / 2;
  }, [c, S, o, r]), [Y, F] = re(() => x(_)), G = q({}), H = q([]), oe = q(null), se = q(null), ie = C((k) => {
    if (!G.current[k]) {
      const { weekStartsOn: A } = o, [I, U] = k.split(":"), ce = Ga(I, U, A);
      G.current[k] = ce;
    }
    return G.current[k];
  }, [o]);
  We(() => {
    oe.current = se.current.rootNode;
  }, []), We(() => {
    F(x(_));
  }, [_, x]), C((k, A = 0, ...I) => {
    const U = x(k);
    Q(U + A, ...I);
  }, [x]);
  const Q = C((k = 0, A = !1, I = Ee) => {
    const U = () => {
      typeof globalThis < "u" && globalThis.setTimeout(() => {
        oe.current.style.overflowY = "auto", I();
      }, 0);
    };
    oe.current.style.overflowY = "hidden", A ? Ua({
      fromValue: oe.current.scrollTop,
      toValue: k,
      onUpdate: (ce, me) => F(ce, me),
      onComplete: U
    }) : typeof globalThis < "u" && globalThis.requestAnimationFrame ? globalThis.requestAnimationFrame(() => {
      oe.current.scrollTop = k, U();
    }) : (oe.current.scrollTop = k, U());
  }, []), V = C((k) => {
    if (!H.current[k]) {
      const { weekStartsOn: A } = o, { month: I, year: U } = d[k], me = Ba(I, U, A, k === d.length - 1) * S;
      H.current[k] = me;
    }
    return H.current[k];
  }, [o, d, S]), ue = C(({ index: k, style: A }) => {
    const { month: I, year: U } = d[k], ce = `${U}:${I}`, { date: me, rows: Re } = ie(ce);
    return /* @__PURE__ */ w.jsx(
      Bo,
      {
        selected: M,
        DayComponent: n,
        monthDate: me,
        disabledDates: e,
        disabledDays: t,
        maxDate: s,
        minDate: l,
        rows: Re,
        rowHeight: S,
        isScrolling: !1,
        showOverlay: O,
        today: v,
        theme: g,
        style: A,
        locale: o,
        passThrough: b,
        ...b.Month
      },
      ce
    );
  }, [ie, d, M, e, t, s, l, S, O, v, g, o, b]);
  return /* @__PURE__ */ w.jsx(
    $o,
    {
      "data-testid": "calendar-month-list",
      ref: se,
      width: T,
      height: r,
      itemCount: d.length,
      itemSize: V,
      estimatedItemSize: S * Jo,
      renderItem: ue,
      onScroll: h,
      scrollOffset: Y,
      className: ae(jn.root, { [jn.scrolling]: a }),
      style: { lineHeight: `${S}px` },
      overscanCount: p
    }
  );
};
Qn.propTypes = {
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
const Ko = "_root_1mb1m_1", Zo = "_day_1mb1m_11", In = {
  root: Ko,
  day: Zo
}, Jn = ({ weekdays: n, weekStartsOn: e, theme: t }) => {
  const r = [...n.slice(e, 7), ...n.slice(0, e)];
  return /* @__PURE__ */ w.jsx(
    "ul",
    {
      "data-testid": "calendar-weekdays",
      className: In.root,
      style: {
        backgroundColor: t.weekdayColor,
        color: t.textColor.active,
        paddingRight: Qa
      },
      "aria-hidden": !0,
      children: r.map((a, o) => /* @__PURE__ */ w.jsx("li", { className: In.day, children: a }, `Weekday-${o}`))
    }
  );
};
Jn.propTypes = {
  weekdays: u.arrayOf(u.string).isRequired,
  weekStartsOn: u.number.isRequired,
  theme: u.shape({
    weekdayColor: u.string.isRequired,
    textColor: u.shape({
      active: u.string.isRequired
    }).isRequired
  }).isRequired
};
const es = "_root_l9718_1", ts = "_year_l9718_39", ns = "_disabled_l9718_98", rs = "_active_l9718_108", as = "_currentYear_l9718_118", De = {
  root: es,
  year: ts,
  disabled: ns,
  active: rs,
  currentYear: as
}, Kn = ({
  height: n,
  hideOnSelect: e,
  locale: t,
  max: r,
  maxDate: a,
  min: o,
  minDate: s,
  scrollToDate: c,
  selected: l,
  setDisplay: d,
  showMonths: f,
  theme: h,
  today: p,
  width: b,
  years: S
}) => {
  const _ = q(null), [M, O] = re(l && l.getFullYear());
  We(() => {
    l && l.getFullYear() !== M && O(l.getFullYear());
  }, [l, M]);
  const g = C((v, T) => {
    T.stopPropagation();
    const x = new Date(v, 0, 1);
    c(x, 0, !0), e && d("days"), O(v);
  }, [c, e, d]);
  return /* @__PURE__ */ w.jsx(
    "ul",
    {
      "data-testid": "calendar-years",
      className: De.root,
      ref: _,
      style: { height: n, width: b },
      children: S.map((v) => {
        const T = v === M;
        return /* @__PURE__ */ w.jsxs(
          "li",
          {
            className: ae(De.year, {
              [De.active]: T,
              [De.currentYear]: v === p.getFullYear()
            }),
            onClick: (x) => g(v, x),
            style: {
              color: T ? h.selectionColor : null
            },
            children: [
              /* @__PURE__ */ w.jsx("div", { className: De.yearLabel, children: v }),
              f && T && /* @__PURE__ */ w.jsx("ol", { className: De.months, children: t.months.map((x, Y) => {
                const F = new Date(v, Y, 1), G = F < o || F > r || F < s || F > a;
                return /* @__PURE__ */ w.jsx(
                  "li",
                  {
                    className: ae(De.month, {
                      [De.disabled]: G
                    }),
                    onClick: (H) => {
                      H.stopPropagation(), G || (c(F, 0, !0), d("days"));
                    },
                    style: {
                      color: G ? null : h.selectionColor
                    },
                    children: x.substr(0, 3)
                  },
                  `${v}-${Y}`
                );
              }) })
            ]
          },
          v
        );
      })
    }
  );
};
Kn.propTypes = {
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
const os = "_root_wj34c_1", ss = "_enabled_wj34c_11", is = "_highlighted_wj34c_11", cs = "_today_wj34c_37", ls = "_disabled_wj34c_44", us = "_selected_wj34c_63", ds = "_month_wj34c_66", fs = "_year_wj34c_66", hs = "_selection_wj34c_72", ms = "_day_wj34c_88", gs = "_range_wj34c_119", ps = "_start_wj34c_119", ys = "_end_wj34c_119", vs = "_betweenRange_wj34c_145", Z = {
  root: os,
  enabled: ss,
  highlighted: is,
  today: cs,
  disabled: ls,
  selected: us,
  month: ds,
  year: fs,
  selection: hs,
  day: ms,
  range: gs,
  start: ps,
  end: ys,
  betweenRange: vs
}, ws = ({
  className: n,
  currentYear: e,
  date: t,
  day: r,
  handlers: a,
  isDisabled: o,
  isHighlighted: s,
  isToday: c,
  isSelected: l,
  locale: { todayLabel: d },
  monthShort: f,
  onClick: h,
  theme: { selectionColor: p, todayColor: b, textColor: S },
  year: _,
  selectionStyle: M
}) => {
  const O = C(() => {
    !o && typeof h == "function" && h(ne(t));
  }, [o, h, t]), g = C(() => /* @__PURE__ */ w.jsxs(
    "div",
    {
      className: Z.selection,
      "data-date": t,
      style: {
        backgroundColor: p,
        color: S.active,
        ...M
      },
      children: [
        /* @__PURE__ */ w.jsx("span", { className: Z.month, children: c ? d.short || d.long : f }),
        /* @__PURE__ */ w.jsx("span", { className: Z.day, children: r })
      ]
    }
  ), [t, p, S, M, c, d, f, r]), v = B(() => l ? typeof p == "function" ? p(t) : p : c ? b : null, [l, p, t, c, b]);
  return /* @__PURE__ */ w.jsxs(
    "li",
    {
      style: v ? { color: v } : null,
      className: ae(Z.root, {
        [Z.today]: c,
        [Z.highlighted]: s,
        [Z.selected]: l,
        [Z.disabled]: o,
        [Z.enabled]: !o
      }, n),
      onClick: O,
      "data-date": t,
      ...a,
      children: [
        r === 1 && /* @__PURE__ */ w.jsx("span", { className: Z.month, children: f }),
        c ? /* @__PURE__ */ w.jsx("span", { children: r }) : r,
        r === 1 && e !== _ && /* @__PURE__ */ w.jsx("span", { className: Z.year, children: _ }),
        l && g()
      ]
    }
  );
}, bs = ({ min: n, max: e, minDate: t, maxDate: r, monthListRef: a }) => {
  const o = q(0), s = q(0), c = q(ne(n)), l = q(ne(e)), d = q(ne(t)), f = q(ne(r)), h = C(() => new Xa().getScrollSpeed, []), p = C(() => o.current, []), b = C((g) => a.current && a.current.getDateOffset(g), [a]), S = C((g) => a.current && a.current.scrollTo(g), [a]), _ = C((g = /* @__PURE__ */ new Date(), v, T, x) => a.current && a.current.scrollToDate(
    g,
    v,
    T,
    x
  ), [a]), M = C((g) => g ? g.map((v) => {
    try {
      const T = v instanceof Date ? v : new Date(v);
      return X(T, "yyyy-MM-dd");
    } catch {
      return console.warn("Invalid date format in disabledDates:", v), null;
    }
  }).filter(Boolean) : null, []), O = C((g, v) => {
    o.current = g, s.current = v;
  }, []);
  return {
    scrollTop: o,
    scrollSpeed: s,
    minParsed: c,
    maxParsed: l,
    minDateParsed: d,
    maxDateParsed: f,
    getScrollSpeed: h,
    getCurrentOffset: p,
    getDateOffset: b,
    scrollTo: S,
    scrollToDate: _,
    getDisabledDates: M,
    updateScrollPosition: O
  };
}, Es = ({ min: n, max: e }) => {
  const t = q(null), r = q(null), a = q([]), o = C((c = n, l = e) => {
    try {
      t.current = typeof c == "string" ? new Date(c) : c, r.current = typeof l == "string" ? new Date(l) : l;
      const d = t.current.getFullYear(), f = t.current.getMonth(), h = r.current.getFullYear(), p = r.current.getMonth(), b = [];
      for (let S = d; S <= h; S++)
        for (let _ = 0; _ < 12; _++)
          S === d && _ < f || S === h && _ > p || b.push({ month: _, year: S });
      return a.current = b, a.current;
    } catch (d) {
      console.error("Error updating months:", d);
      const f = (/* @__PURE__ */ new Date()).getFullYear();
      return a.current = Array.from({ length: 12 }, (h, p) => ({ month: p, year: f })), a.current;
    }
  }, [n, e]), s = C(() => {
    if ((!t.current || !r.current) && o(), t.current.getFullYear() === 2020 && r.current.getFullYear() === 2020)
      return [2020, 2021];
    const c = t.current.getFullYear(), l = r.current.getFullYear();
    return c <= l ? Bt(c, l + 1) : [c];
  }, [o]);
  return We(() => {
    o();
  }, []), {
    months: a,
    minDate: t,
    maxDate: r,
    updateMonths: o,
    getYearsRange: s
  };
}, Ss = {
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
}, _s = {
  blank: "Select a date...",
  headerFormat: "ddd, MMM Do",
  todayLabel: {
    long: "Today"
  },
  weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  weekStartsOn: 0
}, xs = {
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
}, Os = ({ display: n, displayOptions: e, locale: t, theme: r }) => {
  const [a, o] = re(n), s = C((f) => {
    if (o(f), typeof window < "u" && window.__VITEST__)
      return f;
  }, []);
  We(() => {
    n !== a && o(n);
  }, [n, a]);
  const c = C((f = e) => ({ ...Ss, ...f }), [e]), l = C(() => ({ ..._s, ...t }), [t]), d = C(() => ({ ...xs, ...r }), [r]);
  return {
    display: a,
    setDisplay: s,
    getDisplayOptions: c,
    getLocale: l,
    getTheme: d
  };
}, Cs = "_root_t697z_1", Ds = "_landscape_t697z_13", Ts = "_wrapper_t697z_17", Rs = "_listWrapper_t697z_26", Ms = {
  root: Cs,
  landscape: Ds,
  wrapper: Ts,
  listWrapper: Rs
}, Ct = {
  container: Ms
}, ks = {
  autoFocus: !0,
  DayComponent: ws,
  display: "days",
  displayOptions: {},
  HeaderComponent: sn,
  height: 500,
  keyboardSupport: !0,
  max: new Date(2050, 11, 31),
  maxDate: new Date(2050, 11, 31),
  min: new Date(1980, 0, 1),
  minDate: new Date(1980, 0, 1),
  onHighlightedDateChange: Ee,
  onScroll: Ee,
  onScrollEnd: Ee,
  onSelect: Ee,
  passThrough: {},
  rowHeight: 56,
  tabIndex: 1,
  width: 400,
  YearsComponent: Kn
}, Zn = (n) => {
  const e = { ...ks, ...n }, t = q(null), r = q(null), a = q(null), o = q(null), s = q(ze(/* @__PURE__ */ new Date())), [c, l] = re(!1), [d, f] = re(!1), { display: h, setDisplayMode: p, getDisplayOptions: b, getLocale: S, getTheme: _ } = Os({
    display: e.display,
    displayOptions: e.displayOptions,
    locale: e.locale,
    theme: e.theme
  }), { months: M, minDate: O, maxDate: g, min: v, max: T, updateMonths: x } = Es({
    min: e.min,
    max: e.max
  }), {
    scrollTop: Y,
    getScrollSpeed: F,
    getDateOffset: G,
    scrollToDate: H,
    getDisabledDates: oe,
    updateScrollPosition: se
  } = bs({
    min: e.min,
    max: e.max,
    minDate: e.minDate,
    maxDate: e.maxDate,
    monthListRef: r
  });
  We(() => {
    x(), e.autoFocus && t.current && t.current.focus();
  }, [x, e.autoFocus]);
  const ie = C((J = /* @__PURE__ */ new Date(), de, xe) => H(
    J,
    de,
    xe && e.display === "days",
    () => l(!1)
  ), [e.display, H]), Q = C(Ka(() => {
    const { onScrollEnd: J } = e, { showTodayHelper: de } = b();
    c && l(!1), de && V(0), J(Y.current);
  }, 150), [e.onScrollEnd, c, b]), V = C((J) => {
    const de = Y.current, { height: xe, rowHeight: Oe } = e, { todayHelperRowOffset: Pe } = b();
    let fe;
    o.current || (o.current = G(s.current)), de >= o.current + (xe - Oe) / 2 + Oe * Pe ? d !== Xt && (fe = Xt) : de <= o.current - xe / 2 - Oe * (Pe + 1) ? d !== Qt && (fe = Qt) : d && J <= 1 && (fe = !1), de === 0 && (fe = !1), fe != null && f(fe);
  }, [e.height, e.rowHeight, b, G, d]), ue = C((J, de) => {
    const { onScroll: xe, rowHeight: Oe } = e, { showTodayHelper: Pe, showOverlay: fe } = b(), tt = Math.abs(F(J));
    se(J, tt), fe && tt > Oe && !c && l(!0), Pe && V(tt), xe(J, de), Q();
  }, [e.onScroll, e.rowHeight, b, c, V, Q, se, F]), k = C((J) => {
    p(J);
  }, [p]), {
    className: A,
    passThrough: I,
    DayComponent: U,
    disabledDays: ce,
    displayDate: me,
    height: Re,
    HeaderComponent: ft,
    rowHeight: Nt,
    scrollDate: jt,
    selected: Me,
    tabIndex: Ze,
    width: Se,
    YearsComponent: et
  } = e, {
    hideYearsOnSelect: Le,
    layout: ht,
    overscanMonthCount: mt,
    shouldHeaderAnimate: It,
    showHeader: Ft,
    showMonthsForYears: $e,
    showOverlay: ke,
    showTodayHelper: gt,
    showWeekdays: pt
  } = b(), qe = oe(e.disabledDates), ve = S(), _e = _();
  return s.current = ze(/* @__PURE__ */ new Date()), /* @__PURE__ */ w.jsxs(
    "div",
    {
      tabIndex: Ze,
      className: ae(A, Ct.container.root, {
        [Ct.container.landscape]: ht === "landscape"
      }),
      style: { color: _e.textColor.default, width: Se },
      "aria-label": "Calendar",
      ref: t,
      ...I && I.rootNode ? I.rootNode : {},
      children: [
        Ft && /* @__PURE__ */ w.jsx(
          ft,
          {
            selected: Me,
            shouldAnimate: !!(It && h !== "years"),
            layout: ht,
            theme: _e,
            locale: ve,
            scrollToDate: ie,
            setDisplay: k,
            dateFormat: ve.headerFormat,
            display: h,
            displayDate: me,
            ...I && I.Header ? I.Header : {}
          }
        ),
        /* @__PURE__ */ w.jsxs("div", { className: Ct.container.wrapper, children: [
          pt && /* @__PURE__ */ w.jsx(Jn, { weekdays: ve.weekdays, weekStartsOn: ve.weekStartsOn, theme: _e }),
          /* @__PURE__ */ w.jsxs("div", { className: Ct.container.listWrapper, children: [
            gt && /* @__PURE__ */ w.jsx(
              Gn,
              {
                scrollToDate: ie,
                show: d,
                today: s.current,
                theme: _e,
                todayLabel: ve.todayLabel.long
              }
            ),
            /* @__PURE__ */ w.jsx(
              Qn,
              {
                ref: r,
                DayComponent: U,
                disabledDates: qe,
                disabledDays: ce,
                height: Re,
                isScrolling: c,
                locale: ve,
                maxDate: g && g.current ? g.current : e.maxDate,
                min: v && v.current ? v.current : e.min,
                minDate: O && O.current ? O.current : e.minDate,
                months: M && M.current ? M.current : [],
                onScroll: ue,
                overscanMonthCount: mt,
                passThrough: I,
                theme: _e,
                today: s.current,
                rowHeight: Nt,
                selected: Me,
                scrollDate: jt,
                showOverlay: ke,
                width: Se
              }
            )
          ] }),
          h === "years" && /* @__PURE__ */ w.jsx(
            et,
            {
              ref: a,
              height: Re,
              hideOnSelect: Le,
              locale: ve,
              max: T && T.current ? T.current : e.max,
              maxDate: g && g.current ? g.current : e.maxDate,
              min: v && v.current ? v.current : e.min,
              minDate: O && O.current ? O.current : e.minDate,
              scrollToDate: ie,
              selected: Me,
              setDisplay: k,
              showMonths: $e,
              theme: _e,
              today: s.current,
              width: Se,
              years: v && v.current && T && T.current ? Bt(v.current.getFullYear(), T.current.getFullYear() + 1) : Bt(e.min.getFullYear(), e.max.getFullYear() + 1),
              ...I && I.Years ? I.Years : {}
            }
          )
        ] })
      ]
    }
  );
};
Zn.propTypes = {
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
const Ps = (n) => (e) => {
  const t = e.selected === e.date;
  return /* @__PURE__ */ w.jsx(n, { ...e, isSelected: t });
}, Ns = (n) => (e) => {
  const t = ne(e.selected);
  return /* @__PURE__ */ w.jsx(n, { ...e, selected: t });
}, js = (n) => (e) => {
  const {
    DayComponent: t,
    onSelect: r,
    YearsComponent: a,
    selected: o,
    ...s
  } = e, [c, l] = re(o || /* @__PURE__ */ new Date()), d = B(() => Ps(t), [t]), f = B(() => Ns(a), [a]), h = B(() => Vn(o, e), [o, e]), p = C((_) => {
    const M = ne(_);
    r(M), l(M);
  }, [r]), b = B(() => ({
    Day: { onClick: r },
    Years: { onSelect: p }
  }), [r, p]), S = h ? X(h, "yyyy-MM-dd") : null;
  return /* @__PURE__ */ w.jsx(
    n,
    {
      ...s,
      DayComponent: d,
      YearsComponent: f,
      selected: S,
      scrollDate: c,
      setScrollDate: l,
      passThrough: b
    }
  );
}, Is = (n) => (e) => {
  const t = e.highlightedDate === e.date;
  return /* @__PURE__ */ w.jsx(n, { ...e, isHighlighted: t });
}, si = (n) => (e) => {
  const { DayComponent: t, minDate: r, maxDate: a, selected: o, displayDate: s, passThrough: c } = e, [l, d] = re(o || /* @__PURE__ */ new Date()), f = C((_) => {
  }, []), h = C((_) => {
    Fs(_, {
      minDate: r,
      maxDate: a,
      passThrough: { Day: { onClick: c.Day.onClick } },
      setScrollDate: f,
      setHighlight: d,
      highlightedDate: l,
      selected: o,
      displayDate: s
    });
  }, [l, r, a, c, f, d, o, s]), p = B(() => Is(t), [t]), b = l ? X(l, "yyyy-MM-dd") : null, S = B(() => ({
    ...c,
    Day: {
      ...c.Day,
      highlightedDate: b,
      onClick: (_) => {
        d(null), c.Day.onClick(_);
      }
    },
    rootNode: { onKeyDown: h }
  }), [c, b, h]);
  return /* @__PURE__ */ w.jsx(
    n,
    {
      ...e,
      DayComponent: p,
      highlightedDate: l,
      setHighlight: d,
      passThrough: S
    }
  );
};
function Fs(n, e) {
  const {
    minDate: t,
    maxDate: r,
    passThrough: { Day: { onClick: a } },
    setScrollDate: o,
    setHighlight: s,
    highlightedDate: c,
    selected: l,
    displayDate: d
  } = e, f = c || l.start || d || l || /* @__PURE__ */ new Date();
  let h = 0;
  switch ([be.left, be.up, be.right, be.down].indexOf(n.keyCode) > -1 && typeof n.preventDefault == "function" && n.preventDefault(), n.keyCode) {
    case be.enter:
      a && a(f);
      return;
    case be.left:
      h = -1;
      break;
    case be.right:
      h = 1;
      break;
    case be.down:
      h = 7;
      break;
    case be.up:
      h = -7;
      break;
    default:
      h = 0;
  }
  if (h) {
    let p = jr(f, h);
    nn(p, t) ? p = new Date(t) : qn(p, r) && (p = new Date(r)), o(p), s(p);
  }
}
const As = "_root_1lyf2_1", Ys = "_slide_1lyf2_1", Ws = "_wrapper_1lyf2_20", zs = "_arrow_1lyf2_25", Ls = "_arrowRight_1lyf2_45", $s = "_arrowLeft_1lyf2_49", Ke = {
  root: As,
  slide: Ys,
  wrapper: Ws,
  arrow: zs,
  arrowRight: Ls,
  arrowLeft: $s
}, qs = "_enter_dtohs_1", Hs = "_enterActive_dtohs_5", Vs = "_leave_dtohs_10", Us = "_leaveActive_dtohs_14", Gs = {
  enter: qs,
  enterActive: Hs,
  leave: Vs,
  leaveActive: Us
}, Qe = {
  LEFT: 0,
  RIGHT: 1
}, Fn = ({ direction: n, onClick: e }) => /* @__PURE__ */ w.jsx(
  "div",
  {
    className: ae(Ke.arrow, {
      [Ke.arrowLeft]: n === Qe.LEFT,
      [Ke.arrowRight]: n === Qe.RIGHT
    }),
    onClick: () => e(n),
    children: /* @__PURE__ */ w.jsx("svg", { x: "0px", y: "0px", viewBox: "0 0 26 46", children: /* @__PURE__ */ w.jsx("path", { d: "M31.232233,34.767767 C32.2085438,35.7440777 33.7914562,35.7440777 34.767767,34.767767 C35.7440777,33.7914562 35.7440777,32.2085438 34.767767,31.232233 L14.767767,11.232233 C13.7914562,10.2559223 12.2085438,10.2559223 11.232233,11.232233 L-8.767767,31.232233 C-9.7440777,32.2085438 -9.7440777,33.7914562 -8.767767,34.767767 C-7.7914562,35.7440777 -6.2085438,35.7440777 -5.232233,34.767767 L12.9997921,16.5357418 L31.232233,34.767767 Z", id: "Shape", fill: "#FFF", transform: "translate(13.000000, 23.000000) rotate(90.000000) translate(-13.000000, -23.000000) " }) })
  }
), Bs = ({ children: n, index: e, onChange: t }) => {
  const r = C((a) => {
    let o = e;
    switch (a) {
      case Qe.LEFT:
        o = Math.max(0, e - 1);
        break;
      case Qe.RIGHT:
        o = Math.min(e + 1, n.length - 1);
        break;
      default:
        return;
    }
    t(o);
  }, [e, n.length, t]);
  return /* @__PURE__ */ w.jsxs("div", { className: Ke.root, children: [
    e !== 0 && /* @__PURE__ */ w.jsx(Fn, { onClick: r, direction: Qe.LEFT }),
    /* @__PURE__ */ w.jsx("div", { className: Ke.wrapper, style: { transform: `translate3d(-${100 * e}%, 0, 0)` }, children: /* @__PURE__ */ w.jsx(Pt, { component: null, children: te.Children.map(n, (a, o) => /* @__PURE__ */ w.jsx(
      kt,
      {
        classNames: Gs,
        timeout: 300,
        children: /* @__PURE__ */ w.jsx("div", { className: Ke.slide, style: { transform: `translateX(${100 * o}%)` }, children: a })
      },
      o
    )) }) }),
    e !== n.length - 1 && /* @__PURE__ */ w.jsx(Fn, { onClick: r, direction: Qe.RIGHT })
  ] });
}, Xs = ({ renderSelection: n, setDisplayDate: e }) => ({
  renderSelection: (t, { scrollToDate: r, displayDate: a, ...o }) => {
    if (!t.length)
      return null;
    const s = t.sort(), c = t.indexOf(X(ne(a), "yyyy-MM-dd"));
    return /* @__PURE__ */ w.jsx(
      Bs,
      {
        index: c !== -1 ? c : s.length - 1,
        onChange: (l) => e(
          s[l],
          () => setTimeout(() => r(s[l], 0, !0), 50)
        ),
        children: s.map(
          (l, d) => Je(l, {
            ...o,
            key: d,
            scrollToDate: r,
            shouldAnimate: !1
          })
        )
      }
    );
  }
}), Qs = (n) => Un(Xs)(n), Js = (n) => (e) => {
  const t = e.selected.indexOf(e.date) !== -1;
  return /* @__PURE__ */ w.jsx(n, { ...e, isSelected: t });
}, Ks = (n) => (e) => {
  const t = e.displayDate ? ne(e.displayDate) : null;
  return /* @__PURE__ */ w.jsx(n, { ...e, selected: t });
}, ii = (n) => (e) => {
  const { DayComponent: t, HeaderComponent: r, YearsComponent: a, selected: o, ...s } = e, [c, l] = re(An(e)), [d, f] = re(An(e)), h = B(() => Js(t), [t]), p = B(() => Qs(r), [r]), b = B(() => Ks(a), [a]), S = C((g) => {
    e.onSelect(g), f(g);
  }, [e.onSelect]), _ = C((g, v, T) => {
    T(ne(g));
  }, []), M = B(() => e.selected.filter((g) => Vn(g, e)).map((g) => X(g, "yyyy-MM-dd")), [e.selected, e]), O = B(() => ({
    Day: {
      onClick: (g) => S(g)
    },
    Header: {
      setDisplayDate: f
    },
    Years: {
      displayDate: d,
      onSelect: (g, v, T) => _(g, v, T),
      selected: d
    }
  }), [S, f, d, _]);
  return /* @__PURE__ */ w.jsx(
    n,
    {
      ...s,
      DayComponent: h,
      HeaderComponent: p,
      YearsComponent: b,
      scrollDate: c,
      setScrollDate: l,
      displayDate: d,
      setDisplayDate: f,
      passThrough: O,
      selected: M
    }
  );
};
function An({ selected: n }) {
  return n.length ? n[0] : /* @__PURE__ */ new Date();
}
function ci(n, e) {
  const r = e.map((a) => X(a, "yyyy-MM-dd")).indexOf(X(n, "yyyy-MM-dd"));
  return r === -1 ? [...e, n] : [...e.slice(0, r), ...e.slice(r + 1)];
}
const Zs = Un(({ renderSelection: n }) => ({
  renderSelection: (e, t) => {
    if (!e || !e.start && !e.end)
      return null;
    if (e.start === e.end)
      return Je(e.start, t);
    const r = t.locale && t.locale.headerFormat || "MMM Do";
    return /* @__PURE__ */ w.jsxs("div", { className: ge.range, style: { color: t.theme.headerColor }, children: [
      Je(e.start, { ...t, dateFormat: r, key: "start", shouldAnimate: !1 }),
      Je(e.end, { ...t, dateFormat: r, key: "end", shouldAnimate: !1 })
    ] });
  }
}));
let er = !1;
const Vt = {
  END: 3,
  // End date selection
  HOVER: 2,
  // Hover during selection
  START: 1
  // Start date selection
}, ei = (n) => (e) => {
  const { date: t, selected: r, theme: a } = e, o = t >= r.start && t <= r.end, s = t === r.start, c = t === r.end, l = !(s && c), d = l && (s && { backgroundColor: a.accentColor } || c && { borderColor: a.accentColor });
  return /* @__PURE__ */ w.jsx(
    n,
    {
      ...e,
      className: o && l && ae(Z.range, {
        [Z.start]: s,
        [Z.betweenRange]: !s && !c,
        [Z.end]: c
      }),
      isSelected: o,
      selectionStyle: d
    }
  );
}, li = (n) => (e) => {
  const { DayComponent: t, HeaderComponent: r, YearsComponent: a, selected: o, onSelect: s, ...c } = e, [l, d] = re(ti(e)), [f, h] = re("start"), [p, b] = re(null), S = B(() => ei(t), [t]), _ = B(() => Zs(r), [r]), M = C((x) => {
    p ? (s({
      eventType: Vt.END,
      ...Ut({
        start: p,
        end: x
      })
    }), b(null)) : (s({ eventType: Vt.START, start: x, end: x }), b(x));
  }, [s, p]), O = C((x) => {
    const Y = x.target.getAttribute("data-date"), F = Y && ne(Y);
    F && s({
      eventType: Vt.HOVER,
      ...Ut({
        start: p,
        end: F
      })
    });
  }, [s, p]), g = C((x) => {
    d(x), s(
      Ut(
        Object.assign({}, o, { [f]: ne(x) })
      )
    );
  }, [f, s, o]), v = B(() => ({
    start: o && X(o.start, "yyyy-MM-dd"),
    end: o && X(o.end, "yyyy-MM-dd")
  }), [o]), T = B(() => ({
    Day: {
      onClick: (x) => M(x),
      handlers: {
        onMouseOver: !er && p ? (x) => O(x) : null
      }
    },
    Years: {
      selected: o && o[f],
      onSelect: (x) => g(x)
    },
    Header: {
      onYearClick: (x, Y, F) => h(F || "start")
    }
  }), [M, O, g, f, p, o]);
  return /* @__PURE__ */ w.jsx(
    n,
    {
      ...c,
      DayComponent: S,
      HeaderComponent: _,
      scrollDate: l,
      setScrollDate: d,
      displayKey: f,
      setDisplayKey: h,
      selectionStart: p,
      setSelectionStart: b,
      passThrough: T,
      selected: v
    }
  );
};
function Ut({ start: n, end: e }) {
  return nn(n, e) ? { start: n, end: e } : { start: e, end: n };
}
function ti({ selected: n }) {
  return n && n.start || /* @__PURE__ */ new Date();
}
typeof window < "u" && window.addEventListener("touchstart", function n() {
  er = !0, window.removeEventListener("touchstart", n, !1);
});
const ui = ({
  selected: n,
  onSelect: e,
  interpolateSelection: t = (o) => o,
  Component: r = js(Zn),
  ...a
}) => {
  const [o, s] = re(n || /* @__PURE__ */ new Date());
  We(() => {
    n !== o && s(n);
  }, [n]);
  const c = C(
    (l) => {
      typeof e == "function" && e(l), s(t(l, l));
    },
    [e, t]
  );
  return /* @__PURE__ */ w.jsx(
    r,
    {
      ...a,
      onSelect: c,
      selected: o
    }
  );
};
export {
  Zn as Calendar,
  Vt as EVENT_TYPE,
  ui as default,
  ci as defaultMultipleDateInterpolation,
  js as withDateSelection,
  si as withKeyboardSupport,
  ii as withMultipleDates,
  li as withRange
};
