!(function(e) {
  var t = {};
  function i(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, i), (o.l = !0), o.exports;
  }
  (i.m = e),
    (i.c = t),
    (i.d = function(e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (i.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function(e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          i.d(
            n,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (i.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = "/build"),
    i((i.s = 3));
})([
  function(e, t, i) {
    "use strict";
    var n;
    function o(e, t, i) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = i),
        e
      );
    }
    var r = { NONE: 0, ERROR: 1, WARN: 2, LOG: 3, TRACK: 4, TRACE: 5 },
      a = Math.random()
        .toString(36)
        .substring(2, 5),
      s = function(e) {
        return Object.keys(r).find(function(t) {
          return r[t] === e;
        });
      },
      c = window.location.search;
    try {
      c = window.top.location.search;
    } catch (e) {}
    var d = /[?&]advideo_debug\b(?:=(\d+))?/.exec(c),
      l = d ? Math.max(r.NONE, Math.min(r.TRACE, d[1] || r.LOG)) : 5,
      u = [],
      f = function() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : function() {
                return "["
                  .concat(new Date().toISOString().slice(11, -1), "] (")
                  .concat(a, ")");
              };
        return (
          window.kaaLog ||
          function(t, i, n) {
            var o = "%c ".concat(e()).concat(i);
            u.push(o);
          }
        );
      },
      m = 0,
      p = 1,
      h = 2,
      w = (function() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f();
        return (
          e(
            r.LOG,
            "Advideo logger started with log level "
              .concat(l, " (")
              .concat(s(l), ") v")
              .concat("1.0.0", " built ")
              .concat(new Date(1577195765177)),
            "font-weight: bold"
          ),
          {
            none: function() {},
            error: function(t) {
              var i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : h,
                n = arguments.length > 2 ? arguments[2] : void 0;
              return e(r.ERROR, t, E(i, "red", n));
            },
            warn: function(t) {
              var i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : p,
                n = arguments.length > 2 ? arguments[2] : void 0;
              return e(r.WARN, t, E(i, "red", n));
            },
            log: function(t) {
              var i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : m,
                n = arguments.length > 2 ? arguments[2] : void 0;
              return e(r.LOG, t, E(i, i === p ? "green" : "#333", n));
            },
            track: function(t) {
              var i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : p,
                n = arguments.length > 2 ? arguments[2] : void 0;
              return e(r.TRACK, t, E(i, "darkblue", n));
            },
            trace: function(t) {
              var i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : p,
                n = arguments.length > 2 ? arguments[2] : void 0;
              return e(r.TRACE, t, E(i, i > p ? "#aaa" : "lightgray", n));
            },
            archive: u
          }
        );
      })();
    t.a = w;
    var g = "color:{{color}}",
      v =
        (o((n = {}), m, ""),
        o(n, p, g),
        o(n, h, "".concat(g, ";font-weight:bold")),
        n);
    function E(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "black",
        i = arguments.length > 2 ? arguments[2] : void 0,
        n = v[e];
      return (
        i && ((t = i), ~n.indexOf(g) || (n += g)),
        (n && n.replace("{{color}}", t)) || ""
      );
    }
  },
  function(e, t, i) {
    "use strict";
    i.d(t, "c", function() {
      return a;
    }),
      i.d(t, "e", function() {
        return s;
      }),
      i.d(t, "a", function() {
        return c;
      }),
      i.d(t, "d", function() {
        return d;
      }),
      i.d(t, "b", function() {
        return u;
      });
    var n = i(0);
    function o(e) {
      return (o =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    var r = "DOM",
      a = function(e, t) {
        return (
          e &&
          ("object" === o(e) || "function" == typeof e) &&
          "string" == typeof e.innerHTML &&
          (!t || t.toUpperCase() === e.tagName)
        );
      },
      s = function(e) {
        return e && e.parentNode && e.parentNode.removeChild(e), null;
      },
      c = function(e, t) {
        var i = [].concat(e);
        return (
          Object.keys(t).forEach(function(e) {
            var n = t[e];
            void 0 !== n &&
              i.forEach(function(t) {
                var i = t.style;
                if (
                  ((i[e] = n),
                  -1 !== ["transform", "transition", "userSelect"].indexOf(e))
                ) {
                  var o = "".concat(e[0].toUpperCase()).concat(e.substr(1));
                  ["Webkit", "Moz", "Ms", "O"].forEach(function(e) {
                    i["".concat(e).concat(o)] = n;
                  });
                }
              });
          }),
          e
        );
      },
      d = function(e) {
        if (!e) return { top: 0, left: 0 };
        var t = e.getBoundingClientRect(),
          i = document,
          n = i.body,
          o = i.documentElement,
          r = window.pageYOffset || o.scrollTop || n.scrollTop,
          a = window.pageXOffset || o.scrollLeft || n.scrollLeft,
          s = o.clientTop || n.clientTop || 0,
          c = o.clientLeft || n.clientLeft || 0;
        return { top: t.top + r - s, left: t.left + a - c };
      },
      l = function(e, t) {
        var i = Element.prototype;
        return (
          i.matches ||
          i.webkitMatchesSelector ||
          i.mozMatchesSelector ||
          i.msMatchesSelector ||
          function(e) {
            return -1 !== [].indexOf.call(document.querySelectorAll(e), void 0);
          }
        ).call(e, t);
      },
      u = function(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : document.body,
          i =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        if (!e)
          return (
            n.a.warn(
              ""
                .concat(
                  r,
                  ".getElementsByComplexSelector: Invalid complexSelector ("
                )
                .concat(e, ")")
            ),
            []
          );
        if (!a(t))
          return (
            n.a.warn(
              ""
                .concat(
                  r,
                  ".getElementsByComplexSelector: Invalid lookupNode ("
                )
                .concat(t, ")")
            ),
            []
          );
        var o = [];
        return (
          e.split("|").some(function(e) {
            if (l(t, e)) return (o = [t]), !0;
            var a = t.querySelectorAll(e);
            if (a.length > 0) {
              if (!(a.length < i)) return (o = Array.from(a)), !0;
              n.a.trace(
                ""
                  .concat(
                    r,
                    ".getElementsByComplexSelector: Found target nodes "
                  )
                  .concat(a.length, " < ")
                  .concat(i)
              );
            }
            return !1;
          }),
          o
        );
      };
  },
  function(e, t, i) {
    "use strict";
    i.d(t, "e", function() {
      return r;
    }),
      i.d(t, "d", function() {
        return s;
      }),
      i.d(t, "f", function() {
        return c;
      }),
      i.d(t, "c", function() {
        return d;
      }),
      i.d(t, "b", function() {
        return l;
      }),
      i.d(t, "a", function() {
        return f;
      });
    var n = i(1);
    i(0);
    function o(e) {
      return (o =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    var r = function(e) {
        return new Promise(function(t) {
          var i = e.startsWith("data:")
              ? ""
              : (~e.indexOf("?") ? "&rnd=" : "?rnd=") +
                Math.random()
                  .toString(10)
                  .substring(2, 5),
            n = document.createElement("img");
          (n.onload = t), (n.onerror = t), (n.src = "".concat(e).concat(i));
        });
      },
      a = function e() {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (t) {
          for (
            var i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), a = 1;
            a < i;
            a++
          )
            r[a - 1] = arguments[a];
          r.forEach(function() {
            var i =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            Object.keys(i).forEach(function(r) {
              var a = i[r];
              !a ||
              Array.isArray(a) ||
              "object" !== o(a) ||
              u(a) ||
              Object(n.c)(a)
                ? (t[r] = a)
                : (t[r] = e((t.hasOwnProperty(r) && t[r]) || (t[r] = {}), a));
            });
          });
        }
        return t;
      },
      s = function() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t = e.split("?")[1] || "",
          i = t ? t.split("&") : [];
        return Object.keys(i).reduce(function(e, t) {
          var n = i[t].split("="),
            o = n[0] && decodeURIComponent(n[0]),
            r = n[1] && decodeURIComponent(n[1]);
          return (e[o] = r && r.replace(/\+/g, " ")), e;
        }, {});
      },
      c = function(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          i = t.overrideMimeType,
          n = t.timeout,
          o = t.options,
          r = t.body,
          s = t.requestHeaders,
          c = void 0 === s ? {} : s,
          d = t.method,
          l = void 0 === d ? "GET" : d,
          u = t.withCredentials,
          f = void 0 === u || u;
        return new Promise(function(t, s) {
          if (!e) throw new Error("Invalid url (".concat(e, ")"));
          var d = new XMLHttpRequest();
          d.addEventListener("load", t),
            d.addEventListener("error", s),
            d.addEventListener("timeout", s),
            (d.withCredentials = f),
            i && d.overrideMimeType(i),
            o && a(d, o),
            d.open(l, e, !0),
            (d.timeout = n),
            c &&
              Object.getOwnPropertyNames(c).forEach(function(e) {
                d.setRequestHeader(e, c[e]);
              }),
            d.send(r);
        });
      },
      d = function() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return 0 === "".concat(e).length || /%|px/.test("".concat(e))
          ? "".concat(e)
          : "".concat(e, "px");
      };
    function l(e) {
      if (!Object(n.c)(e)) return {};
      var t = getComputedStyle(e),
        i = t.paddingTop,
        o = t.paddingRight,
        r = t.paddingBottom,
        a = t.paddingLeft,
        s = t.marginTop,
        c = t.marginRight,
        d = t.marginBottom,
        l = t.marginLeft,
        u = t.borderTopWidth,
        f = t.borderRightWidth,
        m = t.borderBottomWidth,
        p = t.borderLeftWidth,
        h = e.getBoundingClientRect(),
        w = h.width,
        g = h.height;
      (u = parseFloat(u) || 0),
        (f = parseFloat(f) || 0),
        (m = parseFloat(m) || 0),
        (p = parseFloat(p) || 0),
        (i = parseFloat(i) || 0),
        (o = parseFloat(o) || 0),
        (r = parseFloat(r) || 0),
        (a = parseFloat(a) || 0),
        (s = parseFloat(s) || 0),
        (c = parseFloat(c) || 0),
        (d = parseFloat(d) || 0),
        (l = parseFloat(l) || 0);
      var v = e.clientWidth,
        E = e.clientHeight,
        b = e.offsetHeight,
        y = e.offsetWidth,
        O = function(e) {
          return e < 0 ? 0 : e;
        };
      return {
        paddingTop: i,
        paddingRight: o,
        paddingBottom: r,
        paddingLeft: a,
        marginTop: s,
        marginRight: c,
        marginBottom: d,
        marginLeft: l,
        top: i + O(s),
        right: o + O(c),
        bottom: r + O(d),
        left: a + O(l),
        clientWidth: v,
        clientHeight: E,
        width: w,
        height: g,
        offsetHeight: b,
        offsetWidth: y,
        insideWidth: y - a - o,
        insideHeight: b - i - r,
        outsideWidth: y ? y + O(l) + O(c) : Math.max(O(l), O(c)),
        outsideHeight: b ? b + O(s) + O(d) : Math.max(O(s), O(d)),
        borderTopWidth: u,
        borderRightWidth: f,
        borderBottomWidth: m,
        borderLeftWidth: p
      };
    }
    var u = function(e) {
        return (
          !e ||
          (Array.isArray(e) && !e.length) ||
          (Object.keys && !Object.keys(e).length)
        );
      },
      f = function(e) {
        for (var t = [], i = 0; i < 256; i++)
          t[i] = (i < 16 ? "0" : "") + i.toString(16);
        var n = (4294967295 * Math.random()) | 0,
          o = (4294967295 * Math.random()) | 0,
          r = (4294967295 * Math.random()) | 0,
          a = (4294967295 * Math.random()) | 0;
        e.uid =
          t[255 & n] +
          t[(n >> 8) & 255] +
          t[(n >> 16) & 255] +
          t[(n >> 24) & 255] +
          "-" +
          t[255 & o] +
          t[(o >> 8) & 255] +
          "-" +
          t[((o >> 16) & 15) | 64] +
          t[(o >> 24) & 255] +
          "-" +
          t[(63 & r) | 128] +
          t[(r >> 8) & 255] +
          "-" +
          t[(r >> 16) & 255] +
          t[(r >> 24) & 255] +
          t[255 & a] +
          t[(a >> 8) & 255] +
          t[(a >> 16) & 255] +
          t[(a >> 24) & 255];
      };
  },
  function(e, t, i) {
    e.exports = i(10);
  },
  ,
  ,
  ,
  ,
  ,
  ,
  function(e, t, i) {
    "use strict";
    i.r(t);
    var n = i(1),
      o = i(2),
      r =
        (i(0),
        function(e, t) {
          var i;
          (this.clear = function() {
            i = {
              percentObscured: 0,
              percentViewable: 0,
              acceptedViewablePercentage: 50,
              viewabiltyStatus: !1,
              duration: 0
            };
          }),
            this.clear(),
            (this.DEBUG_MODE = !1),
            (this.checkViewability = function(n, o) {
              var r = 0,
                a = this;
              this.checkViewabilityTimerId = setInterval(function() {
                a.checkViewable(n) ? r++ : (r = 0),
                  (i.duration = (r * e) / 1e3),
                  r >= t && (i.viewabiltyStatus = !0),
                  o(i);
              }, e);
            }),
            (this.checkViewable = function(e) {
              var t = e.getBoundingClientRect();
              return (
                t.width * t.height >= 242500 &&
                  (i.acceptedViewablePercentage = 50),
                !0 !== o(e) &&
                  !0 !== r(e) &&
                    (n(e),
                    (i.percentViewable = Math.floor(i.percentViewable)),
                    !(
                      i.percentViewable &&
                      i.percentViewable < i.acceptedViewablePercentage
                    ) && !!i.percentViewable)
              );
            });
          var n = function(e) {
              i.percentObscured = i.percentObscured || 0;
              var t =
                  e.ownerDocument.defaultView || e.ownerDocument.parentWindow,
                n = s.getViewabilityState(e, t);
              return (
                n.error ||
                  (i.percentViewable = Math.floor(
                    n.percentViewable - i.percentObscured
                  )),
                n
              );
            },
            o = function(e) {
              var t = window.getComputedStyle(e, null),
                i = t.getPropertyValue("visibility"),
                n = t.getPropertyValue("display");
              return "hidden" == i || "none" == n;
            },
            r = function(e) {
              var t = e.getBoundingClientRect(),
                n = t.left + 12,
                o = t.right - 12,
                r = t.top + 12,
                s = t.bottom - 12,
                c = Math.floor(t.left + t.width / 2),
                d = Math.floor(t.top + t.height / 2),
                l = [
                  { x: n, y: r },
                  { x: c, y: r },
                  { x: o, y: r },
                  { x: n, y: d },
                  { x: c, y: d },
                  { x: o, y: d },
                  { x: n, y: s },
                  { x: c, y: s },
                  { x: o, y: s }
                ];
              for (var u in ((i.percentObscured = 0), l))
                if (l[u] && l[u].x >= 0 && l[u].y >= 0) {
                  var f = document.elementFromPoint(l[u].x, l[u].y);
                  if (null != f && f != e && !e.contains(f))
                    if (
                      a(t, f.getBoundingClientRect()) > 0 &&
                      ((i.percentObscured =
                        100 * a(t, f.getBoundingClientRect())),
                      i.percentObscured > i.acceptedViewablePercentage)
                    )
                      return (i.percentViewable = 100 - i.percentObscured), !0;
                }
              return !1;
            },
            a = function(e, t) {
              var i = e.width * e.height;
              return (
                (Math.max(
                  0,
                  Math.min(e.right, t.right) - Math.max(e.left, t.left)
                ) *
                  Math.max(
                    0,
                    Math.min(e.bottom, t.bottom) - Math.max(e.top, t.top)
                  )) /
                i
              );
            },
            s = new (function() {
              this.getViewabilityState = function(n, o) {
                var r,
                  a = e();
                if (a.area == 1 / 0)
                  return { error: "Failed to determine viewport" };
                var s = n.getBoundingClientRect(),
                  c = s.width * s.height;
                if (a.area / c < 0.5) r = Math.floor((100 * a.area) / c);
                else {
                  var d = t(window.parent),
                    l = i(n, o);
                  l.bottom > d.height && (l.height -= l.bottom - d.height),
                    l.top < 0 && (l.height += l.top),
                    l.left < 0 && (l.width += l.left),
                    l.right > d.width && (l.width -= l.right - d.width),
                    (r = Math.floor((l.width * l.height * 100) / c));
                }
                return {
                  clientWidth: d.width,
                  clientHeight: d.height,
                  objTop: s.top,
                  objBottom: s.bottom,
                  objLeft: s.left,
                  objRight: s.right,
                  percentViewable: r
                };
              };
              var e = function() {
                  var e = t(window),
                    i = e.area,
                    n = window;
                  try {
                    for (; n != window.parent; )
                      (n = n.parent),
                        (viewPortSize = t(n)),
                        viewPortSize.area < i &&
                          ((i = viewPortSize.area), (e = viewPortSize));
                  } catch (e) {
                    console.log("Errorchik", e);
                  }
                  return e;
                },
                t = function(e) {
                  var t = { width: 1 / 0, height: 1 / 0, area: 1 / 0 };
                  return (
                    !isNaN(e.document.body.clientWidth) &&
                      e.document.body.clientWidth > 0 &&
                      (t.width = e.document.body.clientWidth),
                    !isNaN(e.document.body.clientHeight) &&
                      e.document.body.clientHeight > 0 &&
                      (t.height = e.document.body.clientHeight),
                    e.document.documentElement &&
                      e.document.documentElement.clientWidth &&
                      !isNaN(e.document.documentElement.clientWidth) &&
                      (t.width = e.document.documentElement.clientWidth),
                    e.document.documentElement &&
                      e.document.documentElement.clientHeight &&
                      !isNaN(e.document.documentElement.clientHeight) &&
                      (t.height = e.document.documentElement.clientHeight),
                    e.innerWidth &&
                      !isNaN(e.innerWidth) &&
                      (t.width = Math.min(t.width, e.innerWidth)),
                    e.innerHeight &&
                      !isNaN(e.innerHeight) &&
                      (t.height = Math.min(t.height, e.innerHeight)),
                    (t.area = t.height * t.width),
                    t
                  );
                },
                i = function e(t, i) {
                  var o = i,
                    r = i.parent,
                    a = {
                      width: 0,
                      height: 0,
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0
                    };
                  if (t) {
                    var s = n(t, i);
                    if (
                      ((s.width = s.right - s.left),
                      (s.height = s.bottom - s.top),
                      (a = s),
                      o != r)
                    ) {
                      var c = e(o.frameElement, r);
                      c.bottom < a.bottom &&
                        (c.bottom < a.top && (a.top = c.bottom),
                        (a.bottom = c.bottom)),
                        c.right < a.right &&
                          (c.right < a.left && (a.left = c.right),
                          (a.right = c.right)),
                        (a.width = a.right - a.left),
                        (a.height = a.bottom - a.top);
                    }
                  }
                  return a;
                },
                n = function e(t, i) {
                  var n = i,
                    o = i.parent,
                    r = { left: 0, right: 0, top: 0, bottom: 0 };
                  if (t) {
                    var a = t.getBoundingClientRect();
                    n != o && (r = e(n.frameElement, o)),
                      (r = {
                        left: a.left + r.left,
                        right: a.right + r.left,
                        top: a.top + r.top,
                        bottom: a.bottom + r.top
                      });
                  }
                  return r;
                };
            })();
        });
    function a(e) {
      return (a =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function s(e) {
      return (s =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    var c = (window.advideo_adv = window.advideo_adv || {}),
      d = (c.init = c.init || {}),
      l = (d.ver = "4.0.3"),
      u = atob("YWR2aWRlb19kZWJ1Zw=="),
      f = (c.containerId = "advideo_adv_container"),
      m = (c.playerId = "advideo_adv"),
      p = "bazr.ru",
      h = "//".concat(p, "/videocontent/global/js/v2/init?playlistId=");
    function w(e) {
      if (!e) throw new Error("Failed to obtain init data");
      e = [].concat(e);
      var t = d.playlistIds.pop();
      e.map(function(e) {
        var i;
        for (var n in e)
          if (
            +n == +t ||
            ("global" !== n && -1 !== window.location.host.indexOf(n))
          ) {
            i = e[n];
            break;
          }
        (i = !i && e.global ? e.global : i),
          (d[t] = i),
          i &&
            (function(e, t) {
              var i = document.getElementById(f),
                n = [];
              e.map(function(e) {
                var i = g(e, t);
                i && n.push(i);
              }),
                v(i, n);
            })(i, t);
      });
    }
    function g(e, t) {
      var i,
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if ((i = e).type && i.params && i.params.src) {
        var o = document.createElement(e.type),
          r = e.params;
        for (var a in r) {
          if ("src" === a)
            !(function() {
              var i = r[a].replace("%%playlistId%%", t);
              e.nocache &&
                e.nocache.domains &&
                e.nocache.domains.length > 0 &&
                e.nocache.domains.map(function(e) {
                  -1 !== window.location.host.indexOf(e) &&
                    (i = i + "&rnd" + Date.now());
                }),
                (r[a] = i);
            })();
          else if ("style" === a && "object" === s(r[a])) {
            var d = r[a];
            for (var l in d)
              if (c.Context["is" + l] && c.Context["is" + l].call(c.Context)) {
                r[a] = d[l];
                break;
              }
            "string" != typeof r[a] && (r[a] = Object.values(r[a])[0]);
          }
          a.startsWith("data")
            ? "data-is-sticky" === a && n
              ? o.setAttribute(a, 0)
              : o.setAttribute(a, r[a])
            : (o[a] = r[a]);
        }
        return o;
      }
    }
    function v(e, t) {
      var i,
        n = !1;
      t.map(function(t) {
        if ("IFRAME" === t.nodeName && t.id == m) {
          if (
            ((n = !0),
            (e.style.textAlign = "center"),
            c.Context.isMobile() || c.Context.isTablet())
          ) {
            var i = Math.max(
                document.documentElement.clientWidth,
                window.innerWidth || 0
              ),
              o = Math.max(
                document.documentElement.clientHeight,
                window.innerHeight || 0
              ),
              r = parseInt(e.style.width || e.clientWidth || i),
              a = parseInt(e.style.height || e.clientHeght || o),
              s = Math.min(r, a);
            (!t.style.width || parseInt(t.style.width) >= s) &&
              (t.style.width = s + "px"),
              (t.style.height =
                Math.ceil((9 * parseInt(t.style.width)) / 16) + "px");
          }
          t.onload = function() {
            (t.isVisible = c.viewability.checkViewable(t)),
              M("visible=" + (t.isVisible ? "true" : "false")),
              (window.onscroll = function() {
                var e = c.viewability.checkViewable(t);
                t.isVisible != e &&
                  ((t.isVisible = e), M("visible=" + (e ? "true" : "false")));
              }),
              t.getAttribute("data-close-onfullscreen") &&
                window.addEventListener("fullscreenchange", b);
          };
        } else t.nodeName;
        e.appendChild(t);
      }),
        n &&
          setTimeout(function() {
            var e = document.getElementById(m);
            if (e.contentWindow && e.contentWindow.length) c.reloadAttempts = 0;
            else {
              if (c.reloadAttempts > 10)
                return void console.error(
                  "".concat(
                    c.reloadAttempts,
                    " times FAILED to Reload Advideo Ad Player. Shutting down..."
                  )
                );
              c.reload(),
                (c.reloadAttempts = c.reloadAttempts
                  ? c.reloadAttempts + 1
                  : 1);
            }
          }, 4e3),
        (i = document.getElementById(m)),
        c.viewability.checkViewability(i, function(e) {
          isNaN(e.percentViewable) &&
            c.viewability.checkViewabilityTimerId &&
            clearInterval(c.viewability.checkViewabilityTimerId),
            document.getElementById(m)
              ? M("AdViewable=" + (e.percentViewable >= 50 ? "true" : "false"))
              : i.substitudeElement &&
                document.getElementById(i.substitudeElement.id) &&
                ((i.substitudeElement.style.display = "none"),
                i.substitudeElement.parentNode.removeChild(
                  i.substitudeElement
                ));
        });
    }
    function E() {
      c.isFallbackLaunched ||
        ((c.isFallbackLaunched = !0),
        setTimeout(function() {
          Object(o.f)(
            "//"
              .concat(p, "/fallback?playlistId=")
              .concat(
                document.getElementById(f).getAttribute("data-playlist-id"),
                "&t"
              )
              .concat(new Date().getHours()),
            { withCredentials: !1 }
          )
            .then(function(e) {
              try {
                if (e.target.responseText && e.target.responseText.length > 1)
                  document
                    .getElementById(f)
                    .appendChild(
                      document
                        .createRange()
                        .createContextualFragment(e.target.responseText)
                    ),
                    console.info("FALLBACK node Create: SUCCESS");
              } catch (e) {
                console.error("Failed to parse FALLBACK response: ".concat(e));
              }
            })
            .catch(function(e) {
              console.error("Unable to retrieve FALLBACK response: ".concat(e));
            });
        }, 1500));
    }
    function b() {
      document.fullscreenElement ? c.shutdown() : c.reload();
    }
    function y() {
      for (var e = document.getElementById(f); e.firstChild; )
        e.removeChild(e.firstChild);
    }
    Object(o.a)(c),
      setTimeout(function() {
        try {
          var e = O("advideo_init"),
            t = Object(o.d)(e.src).playlistId;
          if (!t)
            throw new Error(
              "Failed to obtain playlistId from script parameters! Please check the code on your site or contact us."
            );
          if (
            (d.playlistIds &&
              d.playlistIds.indexOf &&
              -1 !== d.playlistIds.indexOf(t)) ||
            d[t]
          )
            throw new Error(
              "Duplicate playlistId call!! This playlistId was already initialized on this page! Please check the code on your site or contact us."
            );
          (d.playlistIds = [t]),
            Object(o.e)("//stat.advideo.ru/ping?showplaylistId=".concat(t)),
            Object(o.e)(
              "//faststat.advideo.ru/statistics?event_type=code_load&url="
                .concat(
                  encodeURIComponent(window.location.href),
                  "&playlist_id="
                )
                .concat(t, "&uid=")
                .concat(c.uid)
            ),
            ((m = c).separate = function(e) {
              void 0 === e && (e = "|");
              for (var t = [], i = 1; i < arguments.length; i++)
                t[i - 1] = arguments[i];
              for (var n = !0, o = 0; n && o < t.length; )
                (n = n && !t[o]), o++;
              return n ? "" : t.join(e);
            }),
            (m.Ua = (function() {
              function e() {}
              return (
                (e.MODEL = "model"),
                (e.NAME = "name"),
                (e.TYPE = "type"),
                (e.VENDOR = "vendor"),
                (e.VERSION = "version"),
                (e.CONSOLE = "console"),
                (e.MOBILE = "mobile"),
                (e.TABLET = "tablet"),
                (e.SMARTTV = "smarttv"),
                (e.WEARABLE = "wearable"),
                (e.DESKTOP = "desktop"),
                (e.util = {
                  extend: function(e, t) {
                    for (var i in t)
                      -1 !== "browser device os".indexOf(i) &&
                        t[i].length % 2 == 0 &&
                        (e[i] = t[i].concat(e[i]));
                    return e;
                  },
                  has: function(e, t) {
                    return (
                      "string" == typeof e &&
                      -1 !== t.toLowerCase().indexOf(e.toLowerCase())
                    );
                  },
                  lowerize: function(e) {
                    return e.toLowerCase();
                  }
                }),
                (e.mapper = {
                  rgx: function() {
                    for (
                      var e, t, i, n, o, r, s, c = 0, d = arguments;
                      c < d.length && !r;

                    ) {
                      var l = d[c],
                        u = d[c + 1];
                      if (void 0 === e)
                        for (n in ((e = {}), u))
                          "object" === a((o = u[n]))
                            ? (e[o[0]] = void 0)
                            : (e[o] = void 0);
                      for (t = i = 0; t < l.length && !r; )
                        if ((r = l[t++].exec(m.Context.getUA())))
                          for (n = 0; n < u.length; n++)
                            (s = r[++i]),
                              "object" === a((o = u[n])) && o.length > 0
                                ? 2 == o.length
                                  ? "function" == typeof o[1]
                                    ? (e[o[0]] = o[1].call(this, s))
                                    : (e[o[0]] = o[1])
                                  : 3 == o.length
                                  ? "function" != typeof o[1] ||
                                    (o[1].exec && o[1].test)
                                    ? (e[o[0]] = s
                                        ? s.replace(o[1], o[2])
                                        : void 0)
                                    : (e[o[0]] = s
                                        ? o[1].call(this, s, o[2])
                                        : void 0)
                                  : 4 == o.length &&
                                    (e[o[0]] = s
                                      ? o[3].call(this, s.replace(o[1], o[2]))
                                      : void 0)
                                : (e[o] = s || void 0);
                      c += 2;
                    }
                    return e;
                  },
                  str: function(t, i) {
                    for (var n in i)
                      if ("object" === a(i[n]) && i[n].length > 0) {
                        for (var o = 0; o < i[n].length; o++)
                          if (e.util.has(i[n][o], t))
                            return "?" === n ? void 0 : n;
                      } else if (e.util.has(i[n], t))
                        return "?" === n ? void 0 : n;
                    return t;
                  }
                }),
                (e.maps = {
                  browser: {
                    oldsafari: {
                      version: {
                        "1.0": "/8",
                        1.2: "/1",
                        1.3: "/3",
                        "2.0": "/412",
                        "2.0.2": "/416",
                        "2.0.3": "/417",
                        "2.0.4": "/419",
                        "?": "/"
                      }
                    }
                  },
                  device: {
                    amazon: { model: { "Fire Phone": ["SD", "KF"] } },
                    sprint: {
                      model: { "Evo Shift 4G": "7373KT" },
                      vendor: { HTC: "APA", Sprint: "Sprint" }
                    }
                  },
                  os: {
                    windows: {
                      version: {
                        ME: "4.90",
                        "NT 3.11": "NT3.51",
                        "NT 4.0": "NT4.0",
                        2e3: "NT 5.0",
                        XP: ["NT 5.1", "NT 5.2"],
                        Vista: "NT 6.0",
                        7: "NT 6.1",
                        8: "NT 6.2",
                        8.1: "NT 6.3",
                        10: ["NT 6.4", "NT 10.0"],
                        RT: "ARM"
                      }
                    }
                  }
                }),
                (e.regexes = {
                  browser: [
                    [
                      /(opera\smini)\/([\w\.-]+)/i,
                      /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,
                      /(opera).+version\/([\w\.]+)/i,
                      /(opera)[\/\s]+([\w\.]+)/i
                    ],
                    [e.NAME, e.VERSION],
                    [/\s(opr)\/([\w\.]+)/i],
                    [[e.NAME, "Opera"], e.VERSION],
                    [
                      /(kindle)\/([\w\.]+)/i,
                      /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,
                      /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
                      /(?:ms|\()(ie)\s([\w\.]+)/i,
                      /(rekonq)\/([\w\.]+)*/i,
                      /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium)\/([\w\.-]+)/i
                    ],
                    [e.NAME, e.VERSION],
                    [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                    [[e.NAME, "IE"], e.VERSION],
                    [/(edge)\/((\d+)?[\w\.]+)/i],
                    [e.NAME, e.VERSION],
                    [/(yabrowser)\/([\w\.]+)/i],
                    [[e.NAME, "Yandex"], e.VERSION],
                    [/(comodo_dragon)\/([\w\.]+)/i],
                    [[e.NAME, /_/g, " "], e.VERSION],
                    [
                      /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,
                      /(uc\s?browser|qqbrowser)[\/\s]?([\w\.]+)/i
                    ],
                    [e.NAME, e.VERSION],
                    [/(dolfin)\/([\w\.]+)/i],
                    [[e.NAME, "Dolphin"], e.VERSION],
                    [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                    [[e.NAME, "Chrome"], e.VERSION],
                    [/XiaoMi\/MiuiBrowser\/([\w\.]+)/i],
                    [e.VERSION, [e.NAME, "MIUI Browser"]],
                    [
                      /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i
                    ],
                    [e.VERSION, [e.NAME, "Android Browser"]],
                    [/FBAV\/([\w\.]+);/i],
                    [e.VERSION, [e.NAME, "Facebook"]],
                    [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                    [e.VERSION, [e.NAME, "Mobile Safari"]],
                    [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                    [e.VERSION, e.NAME],
                    [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                    [
                      e.NAME,
                      [
                        e.VERSION,
                        e.mapper.str,
                        e.maps.browser.oldsafari.version
                      ]
                    ],
                    [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
                    [e.NAME, e.VERSION],
                    [/(navigator|netscape)\/([\w\.-]+)/i],
                    [[e.NAME, "Netscape"], e.VERSION],
                    [/fxios\/([\w\.-]+)/i],
                    [e.VERSION, [e.NAME, "Firefox"]],
                    [
                      /(swiftfox)/i,
                      /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                      /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,
                      /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,
                      /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?([\w\.]+)/i,
                      /(links)\s\(([\w\.]+)/i,
                      /(gobrowser)\/?([\w\.]+)*/i,
                      /(ice\s?browser)\/v?([\w\._]+)/i,
                      /(mosaic)[\/\s]([\w\.]+)/i
                    ],
                    [e.NAME, e.VERSION]
                  ],
                  device: [
                    [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
                    [e.MODEL, e.VENDOR, [e.TYPE, e.TABLET]],
                    [/applecoremedia\/[\w\.]+ \((ipad)/],
                    [e.MODEL, [e.VENDOR, "Apple"], [e.TYPE, e.TABLET]],
                    [/(apple\s{0,1}tv)/i],
                    [
                      [e.MODEL, "Apple TV"],
                      [e.VENDOR, "Apple"]
                    ],
                    [
                      /(archos)\s(gamepad2?)/i,
                      /(hp).+(touchpad)/i,
                      /(kindle)\/([\w\.]+)/i,
                      /\s(nook)[\w\s]+build\/(\w+)/i,
                      /(dell)\s(strea[kpr\s\d]*[\dko])/i
                    ],
                    [e.VENDOR, e.MODEL, [e.TYPE, e.TABLET]],
                    [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],
                    [e.MODEL, [e.VENDOR, "Amazon"], [e.TYPE, e.TABLET]],
                    [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],
                    [
                      [e.MODEL, e.mapper.str, e.maps.device.amazon.model],
                      [e.VENDOR, "Amazon"],
                      [e.TYPE, e.MOBILE]
                    ],
                    [/\((ip[honed|\s\w*]+);.+(apple)/i],
                    [e.MODEL, e.VENDOR, [e.TYPE, e.MOBILE]],
                    [/\((ip[honed|\s\w*]+);/i],
                    [e.MODEL, [e.VENDOR, "Apple"], [e.TYPE, e.MOBILE]],
                    [
                      /(blackberry)[\s-]?(\w+)/i,
                      /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,
                      /(hp)\s([\w\s]+\w)/i,
                      /(asus)-?(\w+)/i
                    ],
                    [e.VENDOR, e.MODEL, [e.TYPE, e.MOBILE]],
                    [/\(bb10;\s(\w+)/i],
                    [e.MODEL, [e.VENDOR, "BlackBerry"], [e.TYPE, e.MOBILE]],
                    [
                      /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i
                    ],
                    [e.MODEL, [e.VENDOR, "Asus"], [e.TYPE, e.TABLET]],
                    [
                      /(sony)\s(tablet\s[ps])\sbuild\//i,
                      /(sony)?(?:sgp.+)\sbuild\//i
                    ],
                    [
                      [e.VENDOR, "Sony"],
                      [e.MODEL, "Xperia Tablet"],
                      [e.TYPE, e.TABLET]
                    ],
                    [/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],
                    [
                      [e.VENDOR, "Sony"],
                      [e.MODEL, "Xperia Phone"],
                      [e.TYPE, e.MOBILE]
                    ],
                    [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                    [e.VENDOR, e.MODEL, [e.TYPE, e.CONSOLE]],
                    [/android.+;\s(shield)\sbuild/i],
                    [e.MODEL, [e.VENDOR, "Nvidia"], [e.TYPE, e.CONSOLE]],
                    [/(playstation\s[3portablevi]+)/i],
                    [e.MODEL, [e.VENDOR, "Sony"], [e.TYPE, e.CONSOLE]],
                    [/(sprint\s(\w+))/i],
                    [
                      [e.VENDOR, e.mapper.str, e.maps.device.sprint.vendor],
                      [e.MODEL, e.mapper.str, e.maps.device.sprint.model],
                      [e.TYPE, e.MOBILE]
                    ],
                    [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
                    [e.VENDOR, e.MODEL, [e.TYPE, e.TABLET]],
                    [
                      /(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,
                      /(zte)-(\w+)*/i,
                      /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i
                    ],
                    [e.VENDOR, [e.MODEL, /_/g, " "], [e.TYPE, e.MOBILE]],
                    [/(nexus\s9)/i],
                    [e.MODEL, [e.VENDOR, "HTC"], [e.TYPE, e.TABLET]],
                    [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                    [e.MODEL, [e.VENDOR, "Microsoft"], [e.TYPE, e.CONSOLE]],
                    [/(kin\.[onetw]{3})/i],
                    [
                      [e.MODEL, /\./g, " "],
                      [e.VENDOR, "Microsoft"],
                      [e.TYPE, e.MOBILE]
                    ],
                    [
                      /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,
                      /mot[\s-]?(\w+)*/i,
                      /(XT\d{3,4}) build\//i
                    ],
                    [e.MODEL, [e.VENDOR, "Motorola"], [e.TYPE, e.MOBILE]],
                    [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                    [e.MODEL, [e.VENDOR, "Motorola"], [e.TYPE, e.TABLET]],
                    [
                      /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i,
                      /((SM-T\w+))/i
                    ],
                    [[e.VENDOR, "Samsung"], e.MODEL, [e.TYPE, e.TABLET]],
                    [
                      /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i,
                      /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,
                      /sec-((sgh\w+))/i
                    ],
                    [[e.VENDOR, "Samsung"], e.MODEL, [e.TYPE, e.MOBILE]],
                    [/(samsung);smarttv/i],
                    [e.VENDOR, e.MODEL, [e.TYPE, e.SMARTTV]],
                    [/\(dtv[\);].+(aquos)/i],
                    [e.MODEL, [e.VENDOR, "Sharp"], [e.TYPE, e.SMARTTV]],
                    [/sie-(\w+)*/i],
                    [e.MODEL, [e.VENDOR, "Siemens"], [e.TYPE, e.MOBILE]],
                    [
                      /(maemo|nokia).*(n900|lumia\s\d+)/i,
                      /(nokia)[\s_-]?([\w-]+)*/i
                    ],
                    [[e.VENDOR, "Nokia"], e.MODEL, [e.TYPE, e.MOBILE]],
                    [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
                    [e.MODEL, [e.VENDOR, "Acer"], [e.TYPE, e.TABLET]],
                    [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                    [[e.VENDOR, "LG"], e.MODEL, [e.TYPE, e.TABLET]],
                    [/(lg) netcast\.tv/i],
                    [e.VENDOR, e.MODEL, [e.TYPE, e.SMARTTV]],
                    [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i],
                    [e.MODEL, [e.VENDOR, "LG"], [e.TYPE, e.MOBILE]],
                    [/android.+(ideatab[a-z0-9\-\s]+)/i],
                    [e.MODEL, [e.VENDOR, "Lenovo"], [e.TYPE, e.TABLET]],
                    [/linux;.+((jolla));/i],
                    [e.VENDOR, e.MODEL, [e.TYPE, e.MOBILE]],
                    [/((pebble))app\/[\d\.]+\s/i],
                    [e.VENDOR, e.MODEL, [e.TYPE, e.WEARABLE]],
                    [/android.+;\s(glass)\s\d/i],
                    [e.MODEL, [e.VENDOR, "Google"], [e.TYPE, e.WEARABLE]],
                    [
                      /android.+(\w+)\s+build\/hm\1/i,
                      /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,
                      /android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i
                    ],
                    [
                      [e.MODEL, /_/g, " "],
                      [e.VENDOR, "Xiaomi"],
                      [e.TYPE, e.MOBILE]
                    ],
                    [/(mobile|tablet);.+rv\:.+gecko\//i],
                    [[e.TYPE, e.util.lowerize], e.VENDOR, e.MODEL]
                  ],
                  os: [
                    [/microsoft\s(windows)\s(vista|xp)/i],
                    [e.NAME, e.VERSION],
                    [
                      /(windows)\snt\s6\.2;\s(arm)/i,
                      /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i
                    ],
                    [
                      e.NAME,
                      [e.VERSION, e.mapper.str, e.maps.os.windows.version]
                    ],
                    [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                    [
                      [e.NAME, "Windows"],
                      [e.VERSION, e.mapper.str, e.maps.os.windows.version]
                    ],
                    [/\((bb)(10);/i],
                    [[e.NAME, "BlackBerry"], e.VERSION],
                    [
                      /(blackberry)\w*\/?([\w\.]+)*/i,
                      /(tizen)[\/\s]([\w\.]+)/i,
                      /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,
                      /linux;.+(sailfish);/i
                    ],
                    [e.NAME, e.VERSION],
                    [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],
                    [[e.NAME, "Symbian"], e.VERSION],
                    [/\((series40);/i],
                    [e.NAME],
                    [/mozilla.+\(mobile;.+gecko.+firefox/i],
                    [[e.NAME, "Firefox OS"], e.VERSION],
                    [
                      /(nintendo|playstation)\s([wids3portablevu]+)/i,
                      /(mint)[\/\s\(]?(\w+)*/i,
                      /(mageia|vectorlinux)[;\s]/i,
                      /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i,
                      /(hurd|linux)\s?([\w\.]+)*/i,
                      /(gnu)\s?([\w\.]+)*/i
                    ],
                    [e.NAME, e.VERSION],
                    [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                    [[e.NAME, "Chromium OS"], e.VERSION],
                    [/(sunos)\s?([\w\.]+\d)*/i],
                    [[e.NAME, "Solaris"], e.VERSION],
                    [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],
                    [e.NAME, e.VERSION],
                    [/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],
                    [
                      [e.NAME, "iOS"],
                      [e.VERSION, /_/g, "."]
                    ],
                    [
                      /(mac\sos\sx)\s?([\w\s\.]+\w)*/i,
                      /(macintosh|mac(?=_powerpc)\s)/i
                    ],
                    [
                      [e.NAME, "Mac OS"],
                      [e.VERSION, /_/g, "."]
                    ],
                    [
                      /((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,
                      /(haiku)\s(\w+)/i,
                      /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,
                      /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,
                      /(unix)\s?([\w\.]+)*/i
                    ],
                    [e.NAME, e.VERSION]
                  ]
                }),
                e
              );
            })()),
            (function(e) {
              var t = (function() {
                function t(e) {
                  (this.name = e.name || ""),
                    (this.version = e.version || ""),
                    (this.major =
                      "string" == typeof this.version
                        ? this.version.split(".")[0]
                        : "");
                }
                return (
                  (t.prototype.toString = function() {
                    return e
                      .separate("|", this.name, this.version)
                      .toLowerCase();
                  }),
                  t
                );
              })();
              e.UABrowser = t;
              var i = (function() {
                function t(e) {
                  (this.name = e.name || ""), (this.version = e.version || "");
                }
                return (
                  (t.prototype.toString = function() {
                    return e
                      .separate("|", this.name, this.version)
                      .toLowerCase();
                  }),
                  t
                );
              })();
              e.UAOs = i;
              var n = (function() {
                function t(i) {
                  (this.model = i.model || ""),
                    (this.type =
                      i.type ||
                      (t.typeRegExp.test(o.getOS().name) ? e.Ua.DESKTOP : "")),
                    (this.vendor = i.vendor || "");
                }
                return (
                  (t.prototype.toString = function() {
                    return e
                      .separate("|", this.model, this.type, this.vendor)
                      .toLowerCase();
                  }),
                  (t.typeRegExp = /^windows|mac\s+os|linux|bsd|dragonfly|chromium\s+os|haiku|ubuntu|slackware|gentoo|solaris|debian|fedora|arch|beos|mint|gnu|os\/2$/i),
                  t
                );
              })();
              e.UADevice = n;
              var o = (function() {
                function o() {}
                return (
                  (o.isDesktop = function() {
                    return !o.isMobile() && !o.isTablet();
                  }),
                  (o.isIpad = function() {
                    return (
                      "iPad" === o.getDevice().model || /iPad/i.test(o.getUA())
                    );
                  }),
                  (o.isTablet = function() {
                    return (
                      "tablet" === o.getDevice().type ||
                      o.isIpad() ||
                      (o.isAndroid() && !/(m|M)obile/.test(o.getUA()))
                    );
                  }),
                  (o.isMobile = function() {
                    return (
                      "mobile" === o.getDevice().type ||
                      (o.isIos() && !o.isIpad()) ||
                      (o.isAndroid() && /(m|M)obile/.test(o.getUA()))
                    );
                  }),
                  (o.isChromeIos = function() {
                    return /CriOS/i.test(o.getUA());
                  }),
                  (o.isFacebookWebview = function() {
                    return (
                      "Facebook" === o.getBrowser().name ||
                      /FBAN|FBIOS|FBAV|FBBV|FBDV|FBMD|FBSN|FBSV|FBSS|FBCR|FBID|FBLC|FBOP/i.test(
                        o.getUA()
                      )
                    );
                  }),
                  (o.isAndroidNative = function() {
                    return "Android Browser" === o.getBrowser().name;
                  }),
                  (o.isAndroid = function() {
                    return (
                      "Android" === o.getOS().name || /Android/i.test(o.getUA())
                    );
                  }),
                  (o.isIos = function() {
                    return (
                      "iOS" === o.getOS().name || o.isIpad() || o.isIphone()
                    );
                  }),
                  (o.isIphone = function() {
                    return (
                      "iPhone" === o.getDevice().model ||
                      /iPhone/i.test(o.getUA())
                    );
                  }),
                  (o.isAndroidMobile = function() {
                    return o.isAndroid() && o.isMobile();
                  }),
                  (o.isOldIE = function(e) {
                    return (
                      void 0 === e && (e = 9),
                      o.isIE() &&
                        o.getBrowser().major &&
                        parseInt(o.getBrowser().major, 10) <= e
                    );
                  }),
                  (o.isIE = function() {
                    return (
                      "IE" === o.getBrowser().name ||
                      /MSIE|Trident/.test(o.getUA())
                    );
                  }),
                  (o.isChrome = function() {
                    return "Chrome" === o.getBrowser().name || !!window.chrome;
                  }),
                  (o.isFirefox = function() {
                    return (
                      "Firefox" === o.getBrowser().name ||
                      /Firefox/i.test(o.getUA())
                    );
                  }),
                  (o.isAmp = function() {
                    return !!window._mainElement_amp;
                  }),
                  (o.isAmpObserveIntersection = function() {
                    return (
                      o.isAmp() &&
                      !(!window.context || !window.context.observeIntersection)
                    );
                  }),
                  (o.getIEVersion = function() {
                    return o.isIE() && o.getBrowser().major
                      ? parseInt(o.getBrowser().major, 10)
                      : null;
                  }),
                  (o.getAndroidVersion = function() {
                    return o.isAndroid()
                      ? parseInt(
                          o
                            .getOS()
                            .version.split(".")
                            .join(),
                          10
                        )
                      : null;
                  }),
                  (o.getIosVersion = function() {
                    return o.isIos()
                      ? parseInt(
                          o
                            .getOS()
                            .version.split(".")
                            .join(),
                          10
                        )
                      : null;
                  }),
                  (o.isUIWebview = function() {
                    return (
                      (o.isIphone() || o.isIpad()) &&
                      !/Safari/i.test(o.getUA()) &&
                      !window.navigator.standalone
                    );
                  }),
                  (o.videoSupport = function(e) {
                    return !!e.createElement("video").canPlayType;
                  }),
                  (o.getLanguage = function() {
                    return (
                      window.navigator.language ||
                      window.navigator.browserLanguage ||
                      window.navigator.userLanguage ||
                      "en"
                    );
                  }),
                  (o.getUA = function() {
                    return o.userAgent;
                  }),
                  (o.getDevice = function() {
                    return (
                      this.device ||
                        (this.device = new n(
                          e.Ua.mapper.rgx.apply(this, e.Ua.regexes.device)
                        )),
                      this.device
                    );
                  }),
                  (o.getOS = function() {
                    return (
                      this.os ||
                        (this.os = new i(
                          e.Ua.mapper.rgx.apply(this, e.Ua.regexes.os)
                        )),
                      this.os
                    );
                  }),
                  (o.getBrowser = function() {
                    return (
                      this.browser ||
                        (this.browser = new t(
                          e.Ua.mapper.rgx.apply(this, e.Ua.regexes.browser)
                        )),
                      this.browser
                    );
                  }),
                  (o.userAgent = navigator.userAgent),
                  o
                );
              })();
              e.Context = o;
            })(m || (m = {})),
            (c.viewability = new r(1e3, 4));
          var i = document.getElementById(f);
          i ||
            (((i = document.createElement("div")).id = f),
            e.parentNode.insertBefore(i, e)),
            Object(n.e)(e),
            i.setAttribute("data-playlist-id", t);
          var s = document.cookie.match(new RegExp("(?:^|; )closeadv=([^;]*)"));
          if (s && decodeURIComponent(s[1]) && 1 == decodeURIComponent(s[1]))
            return void c.listener({ data: "advideo_close_cookie" });
          window.addEventListener("message", c.listener),
            Promise.resolve(
              (function(e, t) {
                var i = A();
                (e += "&v=" + l),
                  (e += i && -1 !== i.indexOf(u) ? "&" + u : "");
                var n = "&d";
                t.isDesktop()
                  ? (n = "&d")
                  : t.isMobile()
                  ? (n = "&m")
                  : t.isTablet() && (n = "&t");
                return e + n;
              })(h + t, c.Context)
            )
              .then(N)
              .then(w)
              .catch(function(e) {
                return console.error("".concat(e));
              });
        } catch (e) {
          console.error("".concat(e));
        }
        var m;
      }, 0),
      (c.shutdown = function() {
        advideo_adv.listener({ data: "advideo_closevideo" });
      }),
      (c.reload = function(e) {
        var t = document.getElementById(f);
        t
          ? (function() {
              (c.isFallbackLaunched = !1), c.viewability.clear();
              var i = document.getElementById("advideo_adv_close_button");
              i &&
                i.parentNode &&
                i.parentNode.renewTimer &&
                i.parentNode.renewTimer();
              var n = document.getElementById(m),
                o = [];
              if (n && n.parentNode == t) t.removeChild(n), o.push(n);
              else {
                y();
                var r = function(t) {
                  d[t] &&
                    d[t].map &&
                    d[t].map(function(i) {
                      var n = g(i, t, e);
                      n && o.push(n);
                    });
                };
                for (var a in d) r(a);
              }
              v(t, o);
            })()
          : console.error(
              "Failed to reload Advideo Ad Player! There is no '".concat(
                f,
                "' element on this page."
              )
            );
      }),
      (c.listener = function(e) {
        if ("string" == typeof e.data) {
          if (
            "advideo_closevideo" == e.data ||
            "advideo_reload_invisible" == e.data ||
            "advideo_noadv" == e.data ||
            "advideo_close_cookie" == e.data
          )
            console.log("--close_iframe"),
              "advideo_closevideo" == e.data &&
                Object(o.e)(
                  "//".concat(p, "/cookie?closeadv=1&callback=sendcloseevent")
                ),
              window.advideo_adv.dejavuRoll &&
                window.advideo_adv.dejavuRoll.close(),
              (s = document.getElementById(m)) &&
                s.stickyTool &&
                (s.stickyTool.destroy(), console.log("Stakan is Destroyed!")),
              (window.onscroll = ""),
              "advideo_reload_invisible" === e.data
                ? (y(), c.reload("invisible"))
                : (!(function() {
                    var e = document.getElementById(m),
                      t =
                        (e.clientHeight || e.offsetHeight,
                        e.getElementsByTagName("*"));
                    if ("none" != e.style.display) {
                      for (var i = 0; i < t.length; i++)
                        t[i].style.visibility = "hidden";
                      for (i = 100; i >= 0; i -= 5)
                        !(function() {
                          var t = i;
                          setTimeout(function() {
                            t <= 0 && y(),
                              (e.clientHeight || e.offsetHeight) > 0 &&
                                (e.style.height =
                                  Math.round(
                                    (t / 100) *
                                      (e.clientHeight || e.offsetHeight)
                                  ) + "px");
                          }, 1e3 - 5 * t);
                        })();
                      return !0;
                    }
                  })(),
                  E());
          else if (-1 != e.data.indexOf("advideo_ad_clicked")) {
            var t = document.getElementById(m);
            t && ((t.adClicked = !0), console.log("advideo_ad_clicked"));
          } else if (-1 != e.data.indexOf("advideo_ad_start")) {
            var i = document.getElementById(m);
            i &&
              i.stickyTool &&
              "1" == i.getAttribute("data-is-sticky") &&
              (i.style.opacity = "");
          } else if ("advideo_ad_stop" == e.data);
          else if ("advideo_ad_vastplayer_shutdown" == e.data) {
            var n = document.getElementById(m);
            n && n.stickyTool && (n.stickyTool.vastplayerClosed = !0);
          } else if ("set_sticky_visible" == e.data);
          else if ("areyouhere" == e.data) {
            document
              .getElementById(m)
              .contentWindow.postMessage("yesiam | " + A(), "*");
          } else if (e.data.startsWith("srezAdvPlayer")) {
            var r = document.getElementById(m);
            switch (e.data) {
              case "srezAdvPlayerInit":
              case "srezAdvPlayerComplete":
                break;
              case "srezAdvPlayerAdVideoStart":
                r &&
                  r.stickyTool &&
                  "1" == r.getAttribute("data-is-sticky") &&
                  (r.style.opacity = "");
            }
            console.log(e.data);
          }
        } else if (e.data && e.data.msg && "vastplayerInfo" == e.data.msg) {
          var a = document.getElementById(m);
          a && (a.vastplayerInfo = e.data);
        }
        var s;
      });
    var O = function(e) {
        var t = document.querySelector('script[src*="'.concat(e, '"]'));
        if (!Object(n.c)(t, "script"))
          throw new Error(
            'Failed to obtain script tag (script[src*="'.concat(e, '"])')
          );
        return t;
      },
      N = function(e) {
        return new Promise(function(t) {
          Object(o.f)(e, { withCredentials: !1 })
            .then(function(e) {
              try {
                var i = JSON.parse(e.target.responseText);
                t(i);
              } catch (e) {
                throw new Error("Failed to parse json: ".concat(e));
              }
            })
            .catch(function(e) {
              throw new Error("Unable to retrieve init data: ".concat(e));
            });
        });
      };
    function M(e) {
      var t = document.getElementById(m);
      t && t.contentWindow && t.contentWindow.postMessage(e, "*");
    }
    function A() {
      try {
        return window.location != window.parent.location
          ? document.referrer
          : document.location.href;
      } catch (e) {}
      return "noreferer";
    }
  }
]);
