/*!
 * sense-client@5.95.6
 *
 * Copyright(C) 2019 Qlik International AB
 * All Rights Reserved
 *
 */
(function (e) {
  function t(t) {
    var n = t[0];
    var i = t[1];
    var a, o, s = 0, u = [];
    for (; s < n.length; s++) {
      o = n[s];
      r[o] && u.push(r[o][0]);
      r[o] = 0
    }
    for (a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
    l && l(t);
    while (u.length) u.shift()()
  }

  var n = {};
  var r = {30: 0, 2: 0, 4: 0};

  function i(e) {
    return a.p + "chunks/" + ({
      4: "vendors~chart~common-amd~connector-amd~dev-hub~extension-amd~printing-live~printing-snapshot~qvangul~ab90941c",
      8: "assets/hldm/data-connectors/bdi-connector~extensions/qliktech/barchart~extensions/qliktech/combochar~d8277261",
      14: "vendors~extensions/qliktech/boxplot~extensions/qliktech/distributionplot~extensions/qliktech/histogr~c8c58598",
      16: "extensions/qliktech/boxplot~extensions/qliktech/distributionplot~extensions/qliktech/histogram~exten~224debd6",
      17: "extensions/qliktech/filterpane~extensions/qliktech/pivot-table~extensions/qliktech/straight-table~ex~49e081a8",
      21: "assets/hldm/data-connectors/native-file-connector~assets/hldm/data-connectors/native-webfile-connect~7fbed1c2",
      22: "extensions/qliktech/boxplot~extensions/qliktech/distributionplot",
      23: "extensions/qliktech/pivot-table~extensions/qliktech/straight-table",
      24: "vendors~common-amd~setup-mashup",
      31: "assets/hldm/data-connectors/bdi-connector",
      32: "assets/hldm/data-connectors/native-file-connector",
      33: "assets/hldm/data-connectors/native-odbc-connector",
      34: "assets/hldm/data-connectors/native-oledb-connector",
      35: "assets/hldm/data-connectors/native-webfile-connector",
      41: "common-amd",
      42: "connector-amd",
      44: "extension-amd",
      45: "extensions/qliktech/auto-chart",
      46: "extensions/qliktech/barchart",
      47: "extensions/qliktech/boxplot",
      48: "extensions/qliktech/combochart",
      49: "extensions/qliktech/distributionplot",
      50: "extensions/qliktech/filterpane",
      51: "extensions/qliktech/gauge",
      52: "extensions/qliktech/histogram",
      53: "extensions/qliktech/invalid-type",
      54: "extensions/qliktech/kpi",
      55: "extensions/qliktech/linechart",
      56: "extensions/qliktech/listbox",
      57: "extensions/qliktech/mapchart",
      58: "extensions/qliktech/pivot-table",
      59: "extensions/qliktech/scatterplot",
      60: "extensions/qliktech/straight-table",
      61: "extensions/qliktech/text-image",
      62: "extensions/qliktech/treemap",
      63: "extensions/qliktech/waterfallchart",
      64: "extensions/qliktech/widget",
      71: "qlik-module",
      72: "qvangular",
      73: "responsive-state",
      74: "setup-mashup",
      80: "vendors~bodymovin",
      81: "vendors~extensions/qliktech/mapchart",
      82: "vendors~extensions/qliktech/pie",
      83: "vendors~unorm-amd"
    }[e] || e) + "." + {
      0: "82ba0fd2825513498021",
      1: "55991696f3d5af61870b",
      2: "92c2398768c2497a814d",
      3: "e36aa08171fafe3f562f",
      4: "f18fdbb4c1b53143bf83",
      5: "2b3774cf9fbd7309ff16",
      6: "5708ecb80772d95fa929",
      7: "36d8fe22f24da08fd0a1",
      8: "a0740f7ee3f2ec2393cf",
      9: "cf03a7d69fbf6b182469",
      12: "77653ce6105d0cf41cfd",
      13: "9add15677260a3aa597a",
      14: "b027cce638619e7b535d",
      16: "8c56103eb9153530be08",
      17: "de8ef4a129355c5efb80",
      19: "b04d84b070621668c8c8",
      20: "8dfa28f31fc6f9321068",
      21: "59d32abdcdf72859bf3a",
      22: "6ab38cafecc6142c52de",
      23: "1a4843b8140e208e78fa",
      24: "d4295641428c92680565",
      31: "c584f8f239b48d225c3c",
      32: "1a9d0759ba6ef6e63b8d",
      33: "3c12b5bbc4db1bd9a8e8",
      34: "825ea90b7c3d29cac537",
      35: "7a6c3e5f6836805ca87d",
      41: "bcf673a80eb3c3f4c084",
      42: "f8e3fcb0d550f795ea9b",
      44: "dcc2a17b7f400de94028",
      45: "459e4503b9947f4b8d92",
      46: "67d6a7687d02c9fd6dfc",
      47: "bc70aac22b0b097adab3",
      48: "e4cc0fb0efc90a9d10f8",
      49: "526fc34c305568f1b85f",
      50: "8c13b4f3f9a8fb64fa15",
      51: "ae9a70f84b69f1322618",
      52: "5de381f0b665a2b370f0",
      53: "2ef7c4b4fe73344bad60",
      54: "f2b4f84f027b2f5c2efc",
      55: "4a40fbd02babb7760cc6",
      56: "c14260973bd43b663c58",
      57: "778e16d01a72a23bea0d",
      58: "744ea83ef85736529e98",
      59: "6a32ac9b26214c1bac3f",
      60: "d2ffe9692742d8bc3e0d",
      61: "b253d1982ef9feed8c18",
      62: "a4007e100290011784cd",
      63: "0d31343b6a390d00cd6c",
      64: "f72d4345b9c3e2811d76",
      71: "58280f666819a0813fe5",
      72: "8ea77c83706f4f0439dc",
      73: "995fc6c2f9b3cdf4a732",
      74: "7ecff1313de8ca5624e6",
      80: "cdb6ce96e4894c54962c",
      81: "c783836658e698463232",
      82: "5025ccd5dca3b5fdcef1",
      83: "c9641a3a4d6c4a29e36e",
      99: "2659e6107e4c90d45f09"
    }[e] + ".js"
  }

  function a(t) {
    if (n[t]) return n[t].exports;
    var r = n[t] = {i: t, l: false, exports: {}};
    e[t].call(r.exports, r, r.exports, a);
    r.l = true;
    return r.exports
  }

  a.e = function e(t) {
    var n = [];
    var o = r[t];
    if (0 !== o) if (o) n.push(o[2]); else {
      var s = new Promise(function (e, n) {
        o = r[t] = [e, n]
      });
      n.push(o[2] = s);
      var u = document.createElement("script");
      var l;
      u.charset = "utf-8";
      u.timeout = 120;
      a.nc && u.setAttribute("nonce", a.nc);
      u.src = i(t);
      l = function (e) {
        u.onerror = u.onload = null;
        clearTimeout(c);
        var n = r[t];
        if (0 !== n) {
          if (n) {
            var i = e && ("load" === e.type ? "missing" : e.type);
            var a = e && e.target && e.target.src;
            var o = new Error("Loading chunk " + t + " failed.\n(" + i + ": " + a + ")");
            o.type = i;
            o.request = a;
            n[1](o)
          }
          r[t] = void 0
        }
      };
      var c = setTimeout(function () {
        l({type: "timeout", target: u})
      }, 12e4);
      u.onerror = u.onload = l;
      document.head.appendChild(u)
    }
    return Promise.all(n)
  };
  a.m = e;
  a.c = n;
  a.d = function (e, t, n) {
    a.o(e, t) || Object.defineProperty(e, t, {enumerable: true, get: n})
  };
  a.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"});
    Object.defineProperty(e, "__esModule", {value: true})
  };
  a.t = function (e, t) {
    1 & t && (e = a(e));
    if (8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    a.r(n);
    Object.defineProperty(n, "default", {enumerable: true, value: e});
    if (2 & t && "string" != typeof e) for (var r in e) a.d(n, r, function (t) {
      return e[t]
    }.bind(null, r));
    return n
  };
  a.n = function (e) {
    var t = e && e.__esModule ? function t() {
      return e["default"]
    } : function t() {
      return e
    };
    a.d(t, "a", t);
    return t
  };
  a.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  };
  a.p = "../resources/";
  a.oe = function (e) {
    console.error(e);
    throw e
  };
  var o = window["qJsonp"] = window["qJsonp"] || [];
  var s = o.push.bind(o);
  o.push = t;
  o = o.slice();
  for (var u = 0; u < o.length; u++) t(o[u]);
  var l = s;
  return a(a.s = 70)
})([, , function (e, t) {
  var n = e.exports = {};
  var r;
  var i;

  function a() {
    throw new Error("setTimeout has not been defined")
  }

  function o() {
    throw new Error("clearTimeout has not been defined")
  }

  (function () {
    try {
      r = "function" === typeof setTimeout ? setTimeout : a
    } catch (e) {
      r = a
    }
    try {
      i = "function" === typeof clearTimeout ? clearTimeout : o
    } catch (e) {
      i = o
    }
  })();

  function s(e) {
    if (r === setTimeout) return setTimeout(e, 0);
    if ((r === a || !r) && setTimeout) {
      r = setTimeout;
      return setTimeout(e, 0)
    }
    try {
      return r(e, 0)
    } catch (t) {
      try {
        return r.call(null, e, 0)
      } catch (t) {
        return r.call(this, e, 0)
      }
    }
  }

  function u(e) {
    if (i === clearTimeout) return clearTimeout(e);
    if ((i === o || !i) && clearTimeout) {
      i = clearTimeout;
      return clearTimeout(e)
    }
    try {
      return i(e)
    } catch (t) {
      try {
        return i.call(null, e)
      } catch (t) {
        return i.call(this, e)
      }
    }
  }

  var l = [];
  var c = false;
  var f;
  var p = -1;

  function h() {
    if (!c || !f) return;
    c = false;
    f.length ? l = f.concat(l) : p = -1;
    l.length && d()
  }

  function d() {
    if (c) return;
    var e = s(h);
    c = true;
    var t = l.length;
    while (t) {
      f = l;
      l = [];
      while (++p < t) f && f[p].run();
      p = -1;
      t = l.length
    }
    f = null;
    c = false;
    u(e)
  }

  n.nextTick = function (e) {
    var t = new Array(arguments.length - 1);
    if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    l.push(new v(e, t));
    1 !== l.length || c || s(d)
  };

  function v(e, t) {
    this.fun = e;
    this.array = t
  }

  v.prototype.run = function () {
    this.fun.apply(null, this.array)
  };
  n.title = "browser";
  n.browser = true;
  n.env = {};
  n.argv = [];
  n.version = "";
  n.versions = {};

  function m() {
  }

  n.on = m;
  n.addListener = m;
  n.once = m;
  n.off = m;
  n.removeListener = m;
  n.removeAllListeners = m;
  n.emit = m;
  n.prependListener = m;
  n.prependOnceListener = m;
  n.listeners = function (e) {
    return []
  };
  n.binding = function (e) {
    throw new Error("process.binding is not supported")
  };
  n.cwd = function () {
    return "/"
  };
  n.chdir = function (e) {
    throw new Error("process.chdir is not supported")
  };
  n.umask = function () {
    return 0
  }
}, , , , , , function (module, exports) {
  /** vim: et:ts=4:sw=4:sts=4
   * @license RequireJS 2.3.5 Copyright jQuery Foundation and other contributors.
   * Released under MIT license, https://github.com/requirejs/requirejs/blob/master/LICENSE
   */
  var requirejs, require, define;
  (function (global, setTimeout) {
    var req, s, head, baseElement, dataMain, src, interactiveScript, currentlyAddingScript, mainScript, subPath,
      version = "2.3.5", commentRegExp = /\/\*[\s\S]*?\*\/|([^:"'=]|^)\/\/.*$/gm,
      cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g, jsSuffixRegExp = /\.js$/,
      currDirRegExp = /^\.\//, op = Object.prototype, ostring = op.toString, hasOwn = op.hasOwnProperty,
      isBrowser = !!("undefined" !== typeof window && "undefined" !== typeof navigator && window.document),
      isWebWorker = !isBrowser && "undefined" !== typeof importScripts,
      readyRegExp = isBrowser && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/,
      defContextName = "_", isOpera = "undefined" !== typeof opera && "[object Opera]" === opera.toString(),
      contexts = {}, cfg = {}, globalDefQueue = [], useInteractive = false;

    function commentReplace(e, t) {
      return t || ""
    }

    function isFunction(e) {
      return "[object Function]" === ostring.call(e)
    }

    function isArray(e) {
      return "[object Array]" === ostring.call(e)
    }

    function each(e, t) {
      if (e) {
        var n;
        for (n = 0; n < e.length; n += 1) if (e[n] && t(e[n], n, e)) break
      }
    }

    function eachReverse(e, t) {
      if (e) {
        var n;
        for (n = e.length - 1; n > -1; n -= 1) if (e[n] && t(e[n], n, e)) break
      }
    }

    function hasProp(e, t) {
      return hasOwn.call(e, t)
    }

    function getOwn(e, t) {
      return hasProp(e, t) && e[t]
    }

    function eachProp(e, t) {
      var n;
      for (n in e) if (hasProp(e, n) && t(e[n], n)) break
    }

    function mixin(e, t, n, r) {
      t && eachProp(t, function (t, i) {
        if (n || !hasProp(e, i)) if (!r || "object" !== typeof t || !t || isArray(t) || isFunction(t) || t instanceof RegExp) e[i] = t; else {
          e[i] || (e[i] = {});
          mixin(e[i], t, n, r)
        }
      });
      return e
    }

    function bind(e, t) {
      return function () {
        return t.apply(e, arguments)
      }
    }

    function scripts() {
      return document.getElementsByTagName("script")
    }

    function defaultOnError(e) {
      throw e
    }

    function getGlobal(e) {
      if (!e) return e;
      var t = global;
      each(e.split("."), function (e) {
        t = t[e]
      });
      return t
    }

    function makeError(e, t, n, r) {
      var i = new Error(t + "\nhttp://requirejs.org/docs/errors.html#" + e);
      i.requireType = e;
      i.requireModules = r;
      n && (i.originalError = n);
      return i
    }

    if ("undefined" !== typeof define) return;
    if ("undefined" !== typeof requirejs) {
      if (isFunction(requirejs)) return;
      cfg = requirejs;
      requirejs = void 0
    }
    if ("undefined" !== typeof require && !isFunction(require)) {
      cfg = require;
      require = void 0
    }

    function newContext(e) {
      var t, n, r, i, a, o = {waitSeconds: 7, baseUrl: "./", paths: {}, bundles: {}, pkgs: {}, shim: {}, config: {}},
        s = {}, u = {}, l = {}, c = [], f = {}, p = {}, h = {}, d = 1, v = 1;

      function m(e) {
        var t, n;
        for (t = 0; t < e.length; t++) {
          n = e[t];
          if ("." === n) {
            e.splice(t, 1);
            t -= 1
          } else if (".." === n) {
            if (0 === t || 1 === t && ".." === e[2] || ".." === e[t - 1]) continue;
            if (t > 0) {
              e.splice(t - 1, 2);
              t -= 2
            }
          }
        }
      }

      function g(e, t, n) {
        var r, i, a, s, u, l, c, f, p, h, d, v, g = t && t.split("/"), $ = o.map, y = $ && $["*"];
        if (e) {
          e = e.split("/");
          c = e.length - 1;
          o.nodeIdCompat && jsSuffixRegExp.test(e[c]) && (e[c] = e[c].replace(jsSuffixRegExp, ""));
          if ("." === e[0].charAt(0) && g) {
            v = g.slice(0, g.length - 1);
            e = v.concat(e)
          }
          m(e);
          e = e.join("/")
        }
        if (n && $ && (g || y)) {
          a = e.split("/");
          e:for (s = a.length; s > 0; s -= 1) {
            l = a.slice(0, s).join("/");
            if (g) for (u = g.length; u > 0; u -= 1) {
              i = getOwn($, g.slice(0, u).join("/"));
              if (i) {
                i = getOwn(i, l);
                if (i) {
                  f = i;
                  p = s;
                  break e
                }
              }
            }
            if (!h && y && getOwn(y, l)) {
              h = getOwn(y, l);
              d = s
            }
          }
          if (!f && h) {
            f = h;
            p = d
          }
          if (f) {
            a.splice(0, p, f);
            e = a.join("/")
          }
        }
        r = getOwn(o.pkgs, e);
        return r || e
      }

      function $(e) {
        isBrowser && each(scripts(), function (t) {
          if (t.getAttribute("data-requiremodule") === e && t.getAttribute("data-requirecontext") === r.contextName) {
            t.parentNode.removeChild(t);
            return true
          }
        })
      }

      function y(e) {
        var t = getOwn(o.paths, e);
        if (t && isArray(t) && t.length > 1) {
          t.shift();
          r.require.undef(e);
          r.makeRequire(null, {skipMap: true})([e]);
          return true
        }
      }

      function b(e) {
        var t, n = e ? e.indexOf("!") : -1;
        if (n > -1) {
          t = e.substring(0, n);
          e = e.substring(n + 1, e.length)
        }
        return [t, e]
      }

      function w(e, t, n, i) {
        var a, o, s, u, l = null, c = t ? t.name : null, p = e, h = true, m = "";
        if (!e) {
          h = false;
          e = "_@r" + (d += 1)
        }
        u = b(e);
        l = u[0];
        e = u[1];
        if (l) {
          l = g(l, c, i);
          o = getOwn(f, l)
        }
        if (e) if (l) m = n ? e : o && o.normalize ? o.normalize(e, function (e) {
          return g(e, c, i)
        }) : -1 === e.indexOf("!") ? g(e, c, i) : e; else {
          m = g(e, c, i);
          u = b(m);
          l = u[0];
          m = u[1];
          n = true;
          a = r.nameToUrl(m)
        }
        s = !l || o || n ? "" : "_unnormalized" + (v += 1);
        return {
          prefix: l,
          name: m,
          parentMap: t,
          unnormalized: !!s,
          url: a,
          originalName: p,
          isDefine: h,
          id: (l ? l + "!" + m : m) + s
        }
      }

      function x(e) {
        var t = e.id, n = getOwn(s, t);
        n || (n = s[t] = new r.Module(e));
        return n
      }

      function C(e, t, n) {
        var r = e.id, i = getOwn(s, r);
        if (!hasProp(f, r) || i && !i.defineEmitComplete) {
          i = x(e);
          i.error && "error" === t ? n(i.error) : i.on(t, n)
        } else "defined" === t && n(f[r])
      }

      function E(e, t) {
        var n = e.requireModules, r = false;
        if (t) t(e); else {
          each(n, function (t) {
            var n = getOwn(s, t);
            if (n) {
              n.error = e;
              if (n.events.error) {
                r = true;
                n.emit("error", e)
              }
            }
          });
          r || req.onError(e)
        }
      }

      function k() {
        if (globalDefQueue.length) {
          each(globalDefQueue, function (e) {
            var t = e[0];
            "string" === typeof t && (r.defQueueMap[t] = true);
            c.push(e)
          });
          globalDefQueue = []
        }
      }

      i = {
        require: function (e) {
          return e.require ? e.require : e.require = r.makeRequire(e.map)
        }, exports: function (e) {
          e.usingExports = true;
          if (e.map.isDefine) return e.exports ? f[e.map.id] = e.exports : e.exports = f[e.map.id] = {}
        }, module: function (e) {
          return e.module ? e.module : e.module = {
            id: e.map.id, uri: e.map.url, config: function () {
              return getOwn(o.config, e.map.id) || {}
            }, exports: e.exports || (e.exports = {})
          }
        }
      };

      function S(e) {
        delete s[e];
        delete u[e]
      }

      function A(e, t, n) {
        var r = e.map.id;
        if (e.error) e.emit("error", e.error); else {
          t[r] = true;
          each(e.depMaps, function (r, i) {
            var a = r.id, o = getOwn(s, a);
            if (o && !e.depMatched[i] && !n[a]) if (getOwn(t, a)) {
              e.defineDep(i, f[a]);
              e.check()
            } else A(o, t, n)
          });
          n[r] = true
        }
      }

      function T() {
        var e, n, i = 1e3 * o.waitSeconds, s = i && r.startTime + i < (new Date).getTime(), l = [], c = [], f = false,
          p = true;
        if (t) return;
        t = true;
        eachProp(u, function (e) {
          var t = e.map, r = t.id;
          if (!e.enabled) return;
          t.isDefine || c.push(e);
          if (!e.error) if (!e.inited && s) if (y(r)) {
            n = true;
            f = true
          } else {
            l.push(r);
            $(r)
          } else if (!e.inited && e.fetched && t.isDefine) {
            f = true;
            if (!t.prefix) return p = false
          }
        });
        if (s && l.length) {
          e = makeError("timeout", "Load timeout for modules: " + l, null, l);
          e.contextName = r.contextName;
          return E(e)
        }
        p && each(c, function (e) {
          A(e, {}, {})
        });
        s && !n || !f || !isBrowser && !isWebWorker || a || (a = setTimeout(function () {
          a = 0;
          T()
        }, 50));
        t = false
      }

      n = function (e) {
        this.events = getOwn(l, e.id) || {};
        this.map = e;
        this.shim = getOwn(o.shim, e.id);
        this.depExports = [];
        this.depMaps = [];
        this.depMatched = [];
        this.pluginMaps = {};
        this.depCount = 0
      };
      n.prototype = {
        init: function (e, t, n, r) {
          r = r || {};
          if (this.inited) return;
          this.factory = t;
          n ? this.on("error", n) : this.events.error && (n = bind(this, function (e) {
            this.emit("error", e)
          }));
          this.depMaps = e && e.slice(0);
          this.errback = n;
          this.inited = true;
          this.ignore = r.ignore;
          r.enabled || this.enabled ? this.enable() : this.check()
        }, defineDep: function (e, t) {
          if (!this.depMatched[e]) {
            this.depMatched[e] = true;
            this.depCount -= 1;
            this.depExports[e] = t
          }
        }, fetch: function () {
          if (this.fetched) return;
          this.fetched = true;
          r.startTime = (new Date).getTime();
          var e = this.map;
          if (!this.shim) return e.prefix ? this.callPlugin() : this.load();
          r.makeRequire(this.map, {enableBuildCallback: true})(this.shim.deps || [], bind(this, function () {
            return e.prefix ? this.callPlugin() : this.load()
          }))
        }, load: function () {
          var e = this.map.url;
          if (!p[e]) {
            p[e] = true;
            r.load(this.map.id, e)
          }
        }, check: function () {
          if (!this.enabled || this.enabling) return;
          var e, t, n = this.map.id, i = this.depExports, a = this.exports, o = this.factory;
          if (this.inited) {
            if (this.error) this.emit("error", this.error); else if (!this.defining) {
              this.defining = true;
              if (this.depCount < 1 && !this.defined) {
                if (isFunction(o)) {
                  if (this.events.error && this.map.isDefine || req.onError !== defaultOnError) try {
                    a = r.execCb(n, o, i, a)
                  } catch (t) {
                    e = t
                  } else a = r.execCb(n, o, i, a);
                  if (this.map.isDefine && void 0 === a) {
                    t = this.module;
                    t ? a = t.exports : this.usingExports && (a = this.exports)
                  }
                  if (e) {
                    e.requireMap = this.map;
                    e.requireModules = this.map.isDefine ? [this.map.id] : null;
                    e.requireType = this.map.isDefine ? "define" : "require";
                    return E(this.error = e)
                  }
                } else a = o;
                this.exports = a;
                if (this.map.isDefine && !this.ignore) {
                  f[n] = a;
                  if (req.onResourceLoad) {
                    var s = [];
                    each(this.depMaps, function (e) {
                      s.push(e.normalizedMap || e)
                    });
                    req.onResourceLoad(r, this.map, s)
                  }
                }
                S(n);
                this.defined = true
              }
              this.defining = false;
              if (this.defined && !this.defineEmitted) {
                this.defineEmitted = true;
                this.emit("defined", this.exports);
                this.defineEmitComplete = true
              }
            }
          } else hasProp(r.defQueueMap, n) || this.fetch()
        }, callPlugin: function () {
          var e = this.map, t = e.id, n = w(e.prefix);
          this.depMaps.push(n);
          C(n, "defined", bind(this, function (n) {
            var i, a, u, l = getOwn(h, this.map.id), c = this.map.name,
              f = this.map.parentMap ? this.map.parentMap.name : null,
              p = r.makeRequire(e.parentMap, {enableBuildCallback: true});
            if (this.map.unnormalized) {
              n.normalize && (c = n.normalize(c, function (e) {
                return g(e, f, true)
              }) || "");
              a = w(e.prefix + "!" + c, this.map.parentMap, true);
              C(a, "defined", bind(this, function (e) {
                this.map.normalizedMap = a;
                this.init([], function () {
                  return e
                }, null, {enabled: true, ignore: true})
              }));
              u = getOwn(s, a.id);
              if (u) {
                this.depMaps.push(a);
                this.events.error && u.on("error", bind(this, function (e) {
                  this.emit("error", e)
                }));
                u.enable()
              }
              return
            }
            if (l) {
              this.map.url = r.nameToUrl(l);
              this.load();
              return
            }
            i = bind(this, function (e) {
              this.init([], function () {
                return e
              }, null, {enabled: true})
            });
            i.error = bind(this, function (e) {
              this.inited = true;
              this.error = e;
              e.requireModules = [t];
              eachProp(s, function (e) {
                0 === e.map.id.indexOf(t + "_unnormalized") && S(e.map.id)
              });
              E(e)
            });
            i.fromText = bind(this, function (n, a) {
              var s = e.name, u = w(s), l = useInteractive;
              a && (n = a);
              l && (useInteractive = false);
              x(u);
              hasProp(o.config, t) && (o.config[s] = o.config[t]);
              try {
                req.exec(n)
              } catch (e) {
                return E(makeError("fromtexteval", "fromText eval for " + t + " failed: " + e, e, [t]))
              }
              l && (useInteractive = true);
              this.depMaps.push(u);
              r.completeLoad(s);
              p([s], i)
            });
            n.load(e.name, p, i, o)
          }));
          r.enable(n, this);
          this.pluginMaps[n.id] = n
        }, enable: function () {
          u[this.map.id] = this;
          this.enabled = true;
          this.enabling = true;
          each(this.depMaps, bind(this, function (e, t) {
            var n, a, o;
            if ("string" === typeof e) {
              e = w(e, this.map.isDefine ? this.map : this.map.parentMap, false, !this.skipMap);
              this.depMaps[t] = e;
              o = getOwn(i, e.id);
              if (o) {
                this.depExports[t] = o(this);
                return
              }
              this.depCount += 1;
              C(e, "defined", bind(this, function (e) {
                if (this.undefed) return;
                this.defineDep(t, e);
                this.check()
              }));
              this.errback ? C(e, "error", bind(this, this.errback)) : this.events.error && C(e, "error", bind(this, function (e) {
                this.emit("error", e)
              }))
            }
            n = e.id;
            a = s[n];
            hasProp(i, n) || !a || a.enabled || r.enable(e, this)
          }));
          eachProp(this.pluginMaps, bind(this, function (e) {
            var t = getOwn(s, e.id);
            t && !t.enabled && r.enable(e, this)
          }));
          this.enabling = false;
          this.check()
        }, on: function (e, t) {
          var n = this.events[e];
          n || (n = this.events[e] = []);
          n.push(t)
        }, emit: function (e, t) {
          each(this.events[e], function (e) {
            e(t)
          });
          "error" === e && delete this.events[e]
        }
      };

      function O(e) {
        hasProp(f, e[0]) || x(w(e[0], null, true)).init(e[1], e[2])
      }

      function j(e, t, n, r) {
        e.detachEvent && !isOpera ? r && e.detachEvent(r, t) : e.removeEventListener(n, t, false)
      }

      function M(e) {
        var t = e.currentTarget || e.srcElement;
        j(t, r.onScriptLoad, "load", "onreadystatechange");
        j(t, r.onScriptError, "error");
        return {node: t, id: t && t.getAttribute("data-requiremodule")}
      }

      function D() {
        var e;
        k();
        while (c.length) {
          e = c.shift();
          if (null === e[0]) return E(makeError("mismatch", "Mismatched anonymous define() module: " + e[e.length - 1]));
          O(e)
        }
        r.defQueueMap = {}
      }

      r = {
        config: o,
        contextName: e,
        registry: s,
        defined: f,
        urlFetched: p,
        defQueue: c,
        defQueueMap: {},
        Module: n,
        makeModuleMap: w,
        nextTick: req.nextTick,
        onError: E,
        configure: function (e) {
          e.baseUrl && "/" !== e.baseUrl.charAt(e.baseUrl.length - 1) && (e.baseUrl += "/");
          if ("string" === typeof e.urlArgs) {
            var t = e.urlArgs;
            e.urlArgs = function (e, n) {
              return (-1 === n.indexOf("?") ? "?" : "&") + t
            }
          }
          var n = o.shim, i = {paths: true, bundles: true, config: true, map: true};
          eachProp(e, function (e, t) {
            if (i[t]) {
              o[t] || (o[t] = {});
              mixin(o[t], e, true, true)
            } else o[t] = e
          });
          e.bundles && eachProp(e.bundles, function (e, t) {
            each(e, function (e) {
              e !== t && (h[e] = t)
            })
          });
          if (e.shim) {
            eachProp(e.shim, function (e, t) {
              isArray(e) && (e = {deps: e});
              !e.exports && !e.init || e.exportsFn || (e.exportsFn = r.makeShimExports(e));
              n[t] = e
            });
            o.shim = n
          }
          e.packages && each(e.packages, function (e) {
            var t, n;
            e = "string" === typeof e ? {name: e} : e;
            n = e.name;
            t = e.location;
            t && (o.paths[n] = e.location);
            o.pkgs[n] = e.name + "/" + (e.main || "main").replace(currDirRegExp, "").replace(jsSuffixRegExp, "")
          });
          eachProp(s, function (e, t) {
            e.inited || e.map.unnormalized || (e.map = w(t, null, true))
          });
          (e.deps || e.callback) && r.require(e.deps || [], e.callback)
        },
        makeShimExports: function (e) {
          function t() {
            var t;
            e.init && (t = e.init.apply(global, arguments));
            return t || e.exports && getGlobal(e.exports)
          }

          return t
        },
        makeRequire: function (t, n) {
          n = n || {};

          function a(o, u, l) {
            var c, p, h;
            n.enableBuildCallback && u && isFunction(u) && (u.__requireJsBuild = true);
            if ("string" === typeof o) {
              if (isFunction(u)) return E(makeError("requireargs", "Invalid require call"), l);
              if (t && hasProp(i, o)) return i[o](s[t.id]);
              if (req.get) return req.get(r, o, t, a);
              p = w(o, t, false, true);
              c = p.id;
              if (!hasProp(f, c)) return E(makeError("notloaded", 'Module name "' + c + '" has not been loaded yet for context: ' + e + (t ? "" : ". Use require([])")));
              return f[c]
            }
            D();
            r.nextTick(function () {
              D();
              h = x(w(null, t));
              h.skipMap = n.skipMap;
              h.init(o, u, l, {enabled: true});
              T()
            });
            return a
          }

          mixin(a, {
            isBrowser: isBrowser, toUrl: function (e) {
              var n, i = e.lastIndexOf("."), a = e.split("/")[0], o = "." === a || ".." === a;
              if (-1 !== i && (!o || i > 1)) {
                n = e.substring(i, e.length);
                e = e.substring(0, i)
              }
              return r.nameToUrl(g(e, t && t.id, true), n, true)
            }, defined: function (e) {
              return hasProp(f, w(e, t, false, true).id)
            }, specified: function (e) {
              e = w(e, t, false, true).id;
              return hasProp(f, e) || hasProp(s, e)
            }
          });
          t || (a.undef = function (e) {
            k();
            var n = w(e, t, true), i = getOwn(s, e);
            i.undefed = true;
            $(e);
            delete f[e];
            delete p[n.url];
            delete l[e];
            eachReverse(c, function (t, n) {
              t[0] === e && c.splice(n, 1)
            });
            delete r.defQueueMap[e];
            if (i) {
              i.events.defined && (l[e] = i.events);
              S(e)
            }
          });
          return a
        },
        enable: function (e) {
          var t = getOwn(s, e.id);
          t && x(e).enable()
        },
        completeLoad: function (e) {
          var t, n, i, a = getOwn(o.shim, e) || {}, u = a.exports;
          k();
          while (c.length) {
            n = c.shift();
            if (null === n[0]) {
              n[0] = e;
              if (t) break;
              t = true
            } else n[0] === e && (t = true);
            O(n)
          }
          r.defQueueMap = {};
          i = getOwn(s, e);
          if (!t && !hasProp(f, e) && i && !i.inited) {
            if (!(!o.enforceDefine || u && getGlobal(u))) return y(e) ? void 0 : E(makeError("nodefine", "No define call for " + e, null, [e]));
            O([e, a.deps || [], a.exportsFn])
          }
          T()
        },
        nameToUrl: function (e, t, n) {
          var i, a, s, u, l, c, f, p = getOwn(o.pkgs, e);
          p && (e = p);
          f = getOwn(h, e);
          if (f) return r.nameToUrl(f, t, n);
          if (req.jsExtRegExp.test(e)) l = e + (t || ""); else {
            i = o.paths;
            a = e.split("/");
            for (s = a.length; s > 0; s -= 1) {
              u = a.slice(0, s).join("/");
              c = getOwn(i, u);
              if (c) {
                isArray(c) && (c = c[0]);
                a.splice(0, s, c);
                break
              }
            }
            l = a.join("/");
            l += t || (/^data\:|^blob\:|\?/.test(l) || n ? "" : ".js");
            l = ("/" === l.charAt(0) || l.match(/^[\w\+\.\-]+:/) ? "" : o.baseUrl) + l
          }
          return o.urlArgs && !/^blob\:/.test(l) ? l + o.urlArgs(e, l) : l
        },
        load: function (e, t) {
          req.load(r, e, t)
        },
        execCb: function (e, t, n, r) {
          return t.apply(r, n)
        },
        onScriptLoad: function (e) {
          if ("load" === e.type || readyRegExp.test((e.currentTarget || e.srcElement).readyState)) {
            interactiveScript = null;
            var t = M(e);
            r.completeLoad(t.id)
          }
        },
        onScriptError: function (e) {
          var t = M(e);
          if (!y(t.id)) {
            var n = [];
            eachProp(s, function (e, r) {
              0 !== r.indexOf("_@r") && each(e.depMaps, function (e) {
                if (e.id === t.id) {
                  n.push(r);
                  return true
                }
              })
            });
            return E(makeError("scripterror", 'Script error for "' + t.id + (n.length ? '", needed by: ' + n.join(", ") : '"'), e, [t.id]))
          }
        }
      };
      r.require = r.makeRequire();
      return r
    }

    req = requirejs = function (e, t, n, r) {
      var i, a, o = defContextName;
      if (!isArray(e) && "string" !== typeof e) {
        a = e;
        if (isArray(t)) {
          e = t;
          t = n;
          n = r
        } else e = []
      }
      a && a.context && (o = a.context);
      i = getOwn(contexts, o);
      i || (i = contexts[o] = req.s.newContext(o));
      a && i.configure(a);
      return i.require(e, t, n)
    };
    req.config = function (e) {
      return req(e)
    };
    req.nextTick = "undefined" !== typeof setTimeout ? function (e) {
      setTimeout(e, 4)
    } : function (e) {
      e()
    };
    require || (require = req);
    req.version = version;
    req.jsExtRegExp = /^\/|:|\?|\.js$/;
    req.isBrowser = isBrowser;
    s = req.s = {contexts: contexts, newContext: newContext};
    req({});
    each(["toUrl", "undef", "defined", "specified"], function (e) {
      req[e] = function () {
        var t = contexts[defContextName];
        return t.require[e].apply(t, arguments)
      }
    });
    if (isBrowser) {
      head = s.head = document.getElementsByTagName("head")[0];
      baseElement = document.getElementsByTagName("base")[0];
      baseElement && (head = s.head = baseElement.parentNode)
    }
    req.onError = defaultOnError;
    req.createNode = function (e, t, n) {
      var r = e.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
      r.type = e.scriptType || "text/javascript";
      r.charset = "utf-8";
      r.async = true;
      return r
    };
    req.load = function (e, t, n) {
      var r = e && e.config || {}, i;
      if (isBrowser) {
        i = req.createNode(r, t, n);
        i.setAttribute("data-requirecontext", e.contextName);
        i.setAttribute("data-requiremodule", t);
        if (!i.attachEvent || i.attachEvent.toString && i.attachEvent.toString().indexOf("[native code") < 0 || isOpera) {
          i.addEventListener("load", e.onScriptLoad, false);
          i.addEventListener("error", e.onScriptError, false)
        } else {
          useInteractive = true;
          i.attachEvent("onreadystatechange", e.onScriptLoad)
        }
        i.src = n;
        r.onNodeCreated && r.onNodeCreated(i, r, t, n);
        currentlyAddingScript = i;
        baseElement ? head.insertBefore(i, baseElement) : head.appendChild(i);
        currentlyAddingScript = null;
        return i
      }
      if (isWebWorker) try {
        setTimeout(function () {
        }, 0);
        importScripts(n);
        e.completeLoad(t)
      } catch (r) {
        e.onError(makeError("importscripts", "importScripts failed for " + t + " at " + n, r, [t]))
      }
    };

    function getInteractiveScript() {
      if (interactiveScript && "interactive" === interactiveScript.readyState) return interactiveScript;
      eachReverse(scripts(), function (e) {
        if ("interactive" === e.readyState) return interactiveScript = e
      });
      return interactiveScript
    }

    isBrowser && !cfg.skipDataMain && eachReverse(scripts(), function (e) {
      head || (head = e.parentNode);
      dataMain = e.getAttribute("data-main");
      if (dataMain) {
        mainScript = dataMain;
        if (!cfg.baseUrl && -1 === mainScript.indexOf("!")) {
          src = mainScript.split("/");
          mainScript = src.pop();
          subPath = src.length ? src.join("/") + "/" : "./";
          cfg.baseUrl = subPath
        }
        mainScript = mainScript.replace(jsSuffixRegExp, "");
        req.jsExtRegExp.test(mainScript) && (mainScript = dataMain);
        cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript];
        return true
      }
    });
    define = function (e, t, n) {
      var r, i;
      if ("string" !== typeof e) {
        n = t;
        t = e;
        e = null
      }
      if (!isArray(t)) {
        n = t;
        t = null
      }
      if (!t && isFunction(n)) {
        t = [];
        if (n.length) {
          n.toString().replace(commentRegExp, commentReplace).replace(cjsRequireRegExp, function (e, n) {
            t.push(n)
          });
          t = (1 === n.length ? ["require"] : ["require", "exports", "module"]).concat(t)
        }
      }
      if (useInteractive) {
        r = currentlyAddingScript || getInteractiveScript();
        if (r) {
          e || (e = r.getAttribute("data-requiremodule"));
          i = contexts[r.getAttribute("data-requirecontext")]
        }
      }
      if (i) {
        i.defQueue.push([e, t, n]);
        i.defQueueMap[e] = true
      } else globalDefQueue.push([e, t, n])
    };
    define.amd = {jQuery: true};
    req.exec = function (text) {
      return eval(text)
    };
    req(cfg)
  })(window, "undefined" === typeof setTimeout ? void 0 : setTimeout);
  window.requireLib = require;
  window.requirejs = requirejs;
  window.define = define
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {value: true});
  t.loadExtensionAMD = i;
  t.loadConnectorAMD = a;
  t.loadUnormAMD = o;

  function r() {
    return Promise.all([n.e(2), n.e(3), n.e(4), n.e(24), n.e(41)]).then(n.t.bind(null, 42, 7))
  }

  function i() {
    return Promise.all([r(), Promise.all([n.e(2), n.e(3), n.e(4), n.e(6), n.e(44)]).then(n.t.bind(null, 43, 7))])
  }

  function a() {
    return Promise.all([r(), Promise.all([n.e(2), n.e(3), n.e(4), n.e(13), n.e(42)]).then(n.t.bind(null, 44, 7))])
  }

  function o() {
    return n.e(83).then(n.t.bind(null, 45, 7))
  }
}, function (e, t) {
  var n;
  n = function () {
    return this
  }();
  try {
    n = n || new Function("return this")()
  } catch (e) {
    "object" === typeof window && (n = window)
  }
  e.exports = n
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {value: true});
  t.default = r;

  function r() {
    return new Promise(function (e) {
      "complete" === document.readyState || "interactive" === document.readyState ? e() : document.addEventListener("DOMContentLoaded", e)
    })
  }

  e.exports = t.default
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {value: true});
  t.default = s;
  n(8);

  function r(e, t) {
    if (null == e) return {};
    var n = i(e, t);
    var r, a;
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (a = 0; a < o.length; a++) {
        r = o[a];
        if (t.indexOf(r) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(e, r)) continue;
        n[r] = e[r]
      }
    }
    return n
  }

  function i(e, t) {
    if (null == e) return {};
    var n = {};
    var r = Object.keys(e);
    var i, a;
    for (a = 0; a < r.length; a++) {
      i = r[a];
      if (t.indexOf(i) >= 0) continue;
      n[i] = e[i]
    }
    return n
  }

  var a = {
    text: "assets/external/requirejs/text",
    css: "assets/external/requirejs/css",
    ng: "assets/qvangular/qvangular-injector-require-plugin",
    moment: "assets/external/moment/moment-with-langs-2.4.0.min",
    extensions: "../extensions",
    rls: "/api/v1",
    "custom.connector.root": "../customdata",
    mapchart: "extensions/qliktech/mapchart"
  };
  var o = false;

  function s() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    if (o) throw new Error('Can not configure requirejs more than once. If seen in an extension, this could be due to using the "js/qlik" module instead of "qlik".');
    var t = e.paths, n = r(e, ["paths"]);
    var i = Object.assign({
      context: window.requirejs.s.contexts.sense ? "sense" : null,
      paths: Object.assign({}, a, t),
      shim: {},
      waitSeconds: 60
    }, n);
    window.requirejs.config.call(null, i);
    window.requirejs.s.contexts.sense && (window.requirejs.s.contexts._.defined.angular = window.requirejs.s.contexts.sense.defined.angular);
    o = true
  }

  e.exports = t.default
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {value: true});
  t.polyfillUnorm = i;
  n(14);
  n(16);
  var r = n(9);
  n(17);

  function i() {
    if (String.prototype.normalize) return Promise.resolve();
    return (0, r.loadUnormAMD)()
  }
}, function (e, t, n) {
  "use strict";
  e.exports = n(15).polyfill()
}, function (e, t, n) {
  (function (t, n) {
    /*!
     * @overview es6-promise - a tiny implementation of Promises/A+.
     * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
     * @license   Licensed under MIT license
     *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
     * @version   v4.2.5+7f2b526d
     */
    (function (t, n) {
      e.exports = n()
    })(this, function () {
      "use strict";

      function e(e) {
        var t = typeof e;
        return null !== e && ("object" === t || "function" === t)
      }

      function r(e) {
        return "function" === typeof e
      }

      var i = void 0;
      i = Array.isArray ? Array.isArray : function (e) {
        return "[object Array]" === Object.prototype.toString.call(e)
      };
      var a = i;
      var o = 0;
      var s = void 0;
      var u = void 0;
      var l = function e(t, n) {
        x[o] = t;
        x[o + 1] = n;
        o += 2;
        2 === o && (u ? u(C) : k())
      };

      function c(e) {
        u = e
      }

      function f(e) {
        l = e
      }

      var p = "undefined" !== typeof window ? window : void 0;
      var h = p || {};
      var d = h.MutationObserver || h.WebKitMutationObserver;
      var v = "undefined" === typeof self && "undefined" !== typeof t && "[object process]" === {}.toString.call(t);
      var m = "undefined" !== typeof Uint8ClampedArray && "undefined" !== typeof importScripts && "undefined" !== typeof MessageChannel;

      function g() {
        return function () {
          return t.nextTick(C)
        }
      }

      function $() {
        if ("undefined" !== typeof s) return function () {
          s(C)
        };
        return w()
      }

      function y() {
        var e = 0;
        var t = new d(C);
        var n = document.createTextNode("");
        t.observe(n, {characterData: true});
        return function () {
          n.data = e = ++e % 2
        }
      }

      function b() {
        var e = new MessageChannel;
        e.port1.onmessage = C;
        return function () {
          return e.port2.postMessage(0)
        }
      }

      function w() {
        var e = setTimeout;
        return function () {
          return e(C, 1)
        }
      }

      var x = new Array(1e3);

      function C() {
        for (var e = 0; e < o; e += 2) {
          var t = x[e];
          var n = x[e + 1];
          t(n);
          x[e] = void 0;
          x[e + 1] = void 0
        }
        o = 0
      }

      function E() {
        try {
          var e = Function("return this")().require("vertx");
          s = e.runOnLoop || e.runOnContext;
          return $()
        } catch (e) {
          return w()
        }
      }

      var k = void 0;
      k = v ? g() : d ? y() : m ? b() : void 0 === p && true ? E() : w();

      function S(e, t) {
        var n = this;
        var r = new this.constructor(O);
        void 0 === r[T] && X(r);
        var i = n._state;
        if (i) {
          var a = arguments[i - 1];
          l(function () {
            return J(i, r, a, n._result)
          })
        } else z(n, r, e, t);
        return r
      }

      function A(e) {
        var t = this;
        if (e && "object" === typeof e && e.constructor === t) return e;
        var n = new t(O);
        F(n, e);
        return n
      }

      var T = Math.random().toString(36).substring(2);

      function O() {
      }

      var j = void 0;
      var M = 1;
      var D = 2;
      var N = {error: null};

      function q() {
        return new TypeError("You cannot resolve a promise with itself")
      }

      function P() {
        return new TypeError("A promises callback cannot return that same promise.")
      }

      function _(e) {
        try {
          return e.then
        } catch (e) {
          N.error = e;
          return N
        }
      }

      function R(e, t, n, r) {
        try {
          e.call(t, n, r)
        } catch (e) {
          return e
        }
      }

      function L(e, t, n) {
        l(function (e) {
          var r = false;
          var i = R(n, t, function (n) {
            if (r) return;
            r = true;
            t !== n ? F(e, n) : H(e, n)
          }, function (t) {
            if (r) return;
            r = true;
            B(e, t)
          }, "Settle: " + (e._label || " unknown promise"));
          if (!r && i) {
            r = true;
            B(e, i)
          }
        }, e)
      }

      function I(e, t) {
        t._state === M ? H(e, t._result) : t._state === D ? B(e, t._result) : z(t, void 0, function (t) {
          return F(e, t)
        }, function (t) {
          return B(e, t)
        })
      }

      function V(e, t, n) {
        if (t.constructor === e.constructor && n === S && t.constructor.resolve === A) I(e, t); else if (n === N) {
          B(e, N.error);
          N.error = null
        } else void 0 === n ? H(e, t) : r(n) ? L(e, t, n) : H(e, t)
      }

      function F(t, n) {
        t === n ? B(t, q()) : e(n) ? V(t, n, _(n)) : H(t, n)
      }

      function U(e) {
        e._onerror && e._onerror(e._result);
        W(e)
      }

      function H(e, t) {
        if (e._state !== j) return;
        e._result = t;
        e._state = M;
        0 !== e._subscribers.length && l(W, e)
      }

      function B(e, t) {
        if (e._state !== j) return;
        e._state = D;
        e._result = t;
        l(U, e)
      }

      function z(e, t, n, r) {
        var i = e._subscribers;
        var a = i.length;
        e._onerror = null;
        i[a] = t;
        i[a + M] = n;
        i[a + D] = r;
        0 === a && e._state && l(W, e)
      }

      function W(e) {
        var t = e._subscribers;
        var n = e._state;
        if (0 === t.length) return;
        var r = void 0, i = void 0, a = e._result;
        for (var o = 0; o < t.length; o += 3) {
          r = t[o];
          i = t[o + n];
          r ? J(n, r, i, a) : i(a)
        }
        e._subscribers.length = 0
      }

      function G(e, t) {
        try {
          return e(t)
        } catch (e) {
          N.error = e;
          return N
        }
      }

      function J(e, t, n, i) {
        var a = r(n), o = void 0, s = void 0, u = void 0, l = void 0;
        if (a) {
          o = G(n, i);
          if (o === N) {
            l = true;
            s = o.error;
            o.error = null
          } else u = true;
          if (t === o) {
            B(t, P());
            return
          }
        } else {
          o = i;
          u = true
        }
        t._state !== j || (a && u ? F(t, o) : l ? B(t, s) : e === M ? H(t, o) : e === D && B(t, o))
      }

      function Q(e, t) {
        try {
          t(function t(n) {
            F(e, n)
          }, function t(n) {
            B(e, n)
          })
        } catch (t) {
          B(e, t)
        }
      }

      var Y = 0;

      function K() {
        return Y++
      }

      function X(e) {
        e[T] = Y++;
        e._state = void 0;
        e._result = void 0;
        e._subscribers = []
      }

      function Z() {
        return new Error("Array Methods must be provided an Array")
      }

      var ee = function () {
        function e(e, t) {
          this._instanceConstructor = e;
          this.promise = new e(O);
          this.promise[T] || X(this.promise);
          if (a(t)) {
            this.length = t.length;
            this._remaining = t.length;
            this._result = new Array(this.length);
            if (0 === this.length) H(this.promise, this._result); else {
              this.length = this.length || 0;
              this._enumerate(t);
              0 === this._remaining && H(this.promise, this._result)
            }
          } else B(this.promise, Z())
        }

        e.prototype._enumerate = function e(t) {
          for (var n = 0; this._state === j && n < t.length; n++) this._eachEntry(t[n], n)
        };
        e.prototype._eachEntry = function e(t, n) {
          var r = this._instanceConstructor;
          var i = r.resolve;
          if (i === A) {
            var a = _(t);
            if (a === S && t._state !== j) this._settledAt(t._state, n, t._result); else if ("function" !== typeof a) {
              this._remaining--;
              this._result[n] = t
            } else if (r === oe) {
              var o = new r(O);
              V(o, t, a);
              this._willSettleAt(o, n)
            } else this._willSettleAt(new r(function (e) {
              return e(t)
            }), n)
          } else this._willSettleAt(i(t), n)
        };
        e.prototype._settledAt = function e(t, n, r) {
          var i = this.promise;
          if (i._state === j) {
            this._remaining--;
            t === D ? B(i, r) : this._result[n] = r
          }
          0 === this._remaining && H(i, this._result)
        };
        e.prototype._willSettleAt = function e(t, n) {
          var r = this;
          z(t, void 0, function (e) {
            return r._settledAt(M, n, e)
          }, function (e) {
            return r._settledAt(D, n, e)
          })
        };
        return e
      }();

      function te(e) {
        return new ee(this, e).promise
      }

      function ne(e) {
        var t = this;
        return a(e) ? new t(function (n, r) {
          var i = e.length;
          for (var a = 0; a < i; a++) t.resolve(e[a]).then(n, r)
        }) : new t(function (e, t) {
          return t(new TypeError("You must pass an array to race."))
        })
      }

      function re(e) {
        var t = this;
        var n = new t(O);
        B(n, e);
        return n
      }

      function ie() {
        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
      }

      function ae() {
        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
      }

      var oe = function () {
        function e(t) {
          this[T] = K();
          this._result = this._state = void 0;
          this._subscribers = [];
          if (O !== t) {
            "function" !== typeof t && ie();
            this instanceof e ? Q(this, t) : ae()
          }
        }

        e.prototype.catch = function e(t) {
          return this.then(null, t)
        };
        e.prototype.finally = function e(t) {
          var n = this;
          var i = n.constructor;
          if (r(t)) return n.then(function (e) {
            return i.resolve(t()).then(function () {
              return e
            })
          }, function (e) {
            return i.resolve(t()).then(function () {
              throw e
            })
          });
          return n.then(t, t)
        };
        return e
      }();
      oe.prototype.then = S;
      oe.all = te;
      oe.race = ne;
      oe.resolve = A;
      oe.reject = re;
      oe._setScheduler = c;
      oe._setAsap = f;
      oe._asap = l;

      function se() {
        var e = void 0;
        if ("undefined" !== typeof n) e = n; else if ("undefined" !== typeof self) e = self; else try {
          e = Function("return this")()
        } catch (e) {
          throw new Error("polyfill failed because global object is unavailable in this environment")
        }
        var t = e.Promise;
        if (t) {
          var r = null;
          try {
            r = Object.prototype.toString.call(t.resolve())
          } catch (e) {
          }
          if ("[object Promise]" === r && !t.cast) return
        }
        e.Promise = oe
      }

      oe.polyfill = se;
      oe.Promise = oe;
      return oe
    })
  }).call(this, n(2), n(10))
}, function (e, t) {
  !function (t) {
    "use strict";
    var n = Object.prototype;
    var r = n.hasOwnProperty;
    var i;
    var a = "function" === typeof Symbol ? Symbol : {};
    var o = a.iterator || "@@iterator";
    var s = a.asyncIterator || "@@asyncIterator";
    var u = a.toStringTag || "@@toStringTag";
    var l = "object" === typeof e;
    var c = t.regeneratorRuntime;
    if (c) {
      l && (e.exports = c);
      return
    }
    c = t.regeneratorRuntime = l ? e.exports : {};

    function f(e, t, n, r) {
      var i = t && t.prototype instanceof $ ? t : $;
      var a = Object.create(i.prototype);
      var o = new M(r || []);
      a._invoke = A(e, n, o);
      return a
    }

    c.wrap = f;

    function p(e, t, n) {
      try {
        return {type: "normal", arg: e.call(t, n)}
      } catch (e) {
        return {type: "throw", arg: e}
      }
    }

    var h = "suspendedStart";
    var d = "suspendedYield";
    var v = "executing";
    var m = "completed";
    var g = {};

    function $() {
    }

    function y() {
    }

    function b() {
    }

    var w = {};
    w[o] = function () {
      return this
    };
    var x = Object.getPrototypeOf;
    var C = x && x(x(D([])));
    C && C !== n && r.call(C, o) && (w = C);
    var E = b.prototype = $.prototype = Object.create(w);
    y.prototype = E.constructor = b;
    b.constructor = y;
    b[u] = y.displayName = "GeneratorFunction";

    function k(e) {
      ["next", "throw", "return"].forEach(function (t) {
        e[t] = function (e) {
          return this._invoke(t, e)
        }
      })
    }

    c.isGeneratorFunction = function (e) {
      var t = "function" === typeof e && e.constructor;
      return !!t && (t === y || "GeneratorFunction" === (t.displayName || t.name))
    };
    c.mark = function (e) {
      if (Object.setPrototypeOf) Object.setPrototypeOf(e, b); else {
        e.__proto__ = b;
        u in e || (e[u] = "GeneratorFunction")
      }
      e.prototype = Object.create(E);
      return e
    };
    c.awrap = function (e) {
      return {__await: e}
    };

    function S(e) {
      function t(n, i, a, o) {
        var s = p(e[n], e, i);
        if ("throw" !== s.type) {
          var u = s.arg;
          var l = u.value;
          if (l && "object" === typeof l && r.call(l, "__await")) return Promise.resolve(l.__await).then(function (e) {
            t("next", e, a, o)
          }, function (e) {
            t("throw", e, a, o)
          });
          return Promise.resolve(l).then(function (e) {
            u.value = e;
            a(u)
          }, function (e) {
            return t("throw", e, a, o)
          })
        }
        o(s.arg)
      }

      var n;

      function i(e, r) {
        function i() {
          return new Promise(function (n, i) {
            t(e, r, n, i)
          })
        }

        return n = n ? n.then(i, i) : i()
      }

      this._invoke = i
    }

    k(S.prototype);
    S.prototype[s] = function () {
      return this
    };
    c.AsyncIterator = S;
    c.async = function (e, t, n, r) {
      var i = new S(f(e, t, n, r));
      return c.isGeneratorFunction(t) ? i : i.next().then(function (e) {
        return e.done ? e.value : i.next()
      })
    };

    function A(e, t, n) {
      var r = h;
      return function i(a, o) {
        if (r === v) throw new Error("Generator is already running");
        if (r === m) {
          if ("throw" === a) throw o;
          return N()
        }
        n.method = a;
        n.arg = o;
        while (true) {
          var s = n.delegate;
          if (s) {
            var u = T(s, n);
            if (u) {
              if (u === g) continue;
              return u
            }
          }
          if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
            if (r === h) {
              r = m;
              throw n.arg
            }
            n.dispatchException(n.arg)
          } else "return" === n.method && n.abrupt("return", n.arg);
          r = v;
          var l = p(e, t, n);
          if ("normal" === l.type) {
            r = n.done ? m : d;
            if (l.arg === g) continue;
            return {value: l.arg, done: n.done}
          }
          if ("throw" === l.type) {
            r = m;
            n.method = "throw";
            n.arg = l.arg
          }
        }
      }
    }

    function T(e, t) {
      var n = e.iterator[t.method];
      if (n === i) {
        t.delegate = null;
        if ("throw" === t.method) {
          if (e.iterator.return) {
            t.method = "return";
            t.arg = i;
            T(e, t);
            if ("throw" === t.method) return g
          }
          t.method = "throw";
          t.arg = new TypeError("The iterator does not provide a 'throw' method")
        }
        return g
      }
      var r = p(n, e.iterator, t.arg);
      if ("throw" === r.type) {
        t.method = "throw";
        t.arg = r.arg;
        t.delegate = null;
        return g
      }
      var a = r.arg;
      if (!a) {
        t.method = "throw";
        t.arg = new TypeError("iterator result is not an object");
        t.delegate = null;
        return g
      }
      if (!a.done) return a;
      t[e.resultName] = a.value;
      t.next = e.nextLoc;
      if ("return" !== t.method) {
        t.method = "next";
        t.arg = i
      }
      t.delegate = null;
      return g
    }

    k(E);
    E[u] = "Generator";
    E[o] = function () {
      return this
    };
    E.toString = function () {
      return "[object Generator]"
    };

    function O(e) {
      var t = {tryLoc: e[0]};
      1 in e && (t.catchLoc = e[1]);
      if (2 in e) {
        t.finallyLoc = e[2];
        t.afterLoc = e[3]
      }
      this.tryEntries.push(t)
    }

    function j(e) {
      var t = e.completion || {};
      t.type = "normal";
      delete t.arg;
      e.completion = t
    }

    function M(e) {
      this.tryEntries = [{tryLoc: "root"}];
      e.forEach(O, this);
      this.reset(true)
    }

    c.keys = function (e) {
      var t = [];
      for (var n in e) t.push(n);
      t.reverse();
      return function n() {
        while (t.length) {
          var r = t.pop();
          if (r in e) {
            n.value = r;
            n.done = false;
            return n
          }
        }
        n.done = true;
        return n
      }
    };

    function D(e) {
      if (e) {
        var t = e[o];
        if (t) return t.call(e);
        if ("function" === typeof e.next) return e;
        if (!isNaN(e.length)) {
          var n = -1, a = function t() {
            while (++n < e.length) if (r.call(e, n)) {
              t.value = e[n];
              t.done = false;
              return t
            }
            t.value = i;
            t.done = true;
            return t
          };
          return a.next = a
        }
      }
      return {next: N}
    }

    c.values = D;

    function N() {
      return {value: i, done: true}
    }

    M.prototype = {
      constructor: M, reset: function (e) {
        this.prev = 0;
        this.next = 0;
        this.sent = this._sent = i;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = i;
        this.tryEntries.forEach(j);
        if (!e) for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = i)
      }, stop: function () {
        this.done = true;
        var e = this.tryEntries[0];
        var t = e.completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval
      }, dispatchException: function (e) {
        if (this.done) throw e;
        var t = this;

        function n(n, r) {
          s.type = "throw";
          s.arg = e;
          t.next = n;
          if (r) {
            t.method = "next";
            t.arg = i
          }
          return !!r
        }

        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
          var o = this.tryEntries[a];
          var s = o.completion;
          if ("root" === o.tryLoc) return n("end");
          if (o.tryLoc <= this.prev) {
            var u = r.call(o, "catchLoc");
            var l = r.call(o, "finallyLoc");
            if (u && l) {
              if (this.prev < o.catchLoc) return n(o.catchLoc, true);
              if (this.prev < o.finallyLoc) return n(o.finallyLoc)
            } else if (u) {
              if (this.prev < o.catchLoc) return n(o.catchLoc, true)
            } else {
              if (!l) throw new Error("try statement without catch or finally");
              if (this.prev < o.finallyLoc) return n(o.finallyLoc)
            }
          }
        }
      }, abrupt: function (e, t) {
        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
          var i = this.tryEntries[n];
          if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
            var a = i;
            break
          }
        }
        a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
        var o = a ? a.completion : {};
        o.type = e;
        o.arg = t;
        if (a) {
          this.method = "next";
          this.next = a.finallyLoc;
          return g
        }
        return this.complete(o)
      }, complete: function (e, t) {
        if ("throw" === e.type) throw e.arg;
        if ("break" === e.type || "continue" === e.type) this.next = e.arg; else if ("return" === e.type) {
          this.rval = this.arg = e.arg;
          this.method = "return";
          this.next = "end"
        } else "normal" === e.type && t && (this.next = t);
        return g
      }, finish: function (e) {
        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
          var n = this.tryEntries[t];
          if (n.finallyLoc === e) {
            this.complete(n.completion, n.afterLoc);
            j(n);
            return g
          }
        }
      }, catch: function (e) {
        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
          var n = this.tryEntries[t];
          if (n.tryLoc === e) {
            var r = n.completion;
            if ("throw" === r.type) {
              var i = r.arg;
              j(n)
            }
            return i
          }
        }
        throw new Error("illegal catch attempt")
      }, delegateYield: function (e, t, n) {
        this.delegate = {iterator: D(e), resultName: t, nextLoc: n};
        "next" === this.method && (this.arg = i);
        return g
      }
    }
  }(function () {
    return this || "object" === typeof self && self
  }() || Function("return this")())
}, function (e, t, n) {
  "use strict";
  "function" !== typeof Object.assign && Object.defineProperty(Object, "assign", {
    value: function e(t) {
      if (null == t) throw new TypeError("Cannot convert undefined or null to object");
      var n = Object(t);
      for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) i[a - 1] = arguments[a];
      i.forEach(function (e) {
        if (null != e) for (var t in e) ({}).hasOwnProperty.call(e, t) && (n[t] = e[t])
      });
      return n
    }, writable: true, configurable: true
  })
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
  var r, i;
  (function () {
    /*!
     * jQuery JavaScript Library v3.3.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2018-01-20T17:24Z
     */
    (function (t, n) {
      "use strict";
      true, "object" === typeof e.exports ? e.exports = t.document ? n(t, true) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return n(e)
      } : n(t)
    })("undefined" !== typeof window ? window : this, function (n, a) {
      "use strict";
      var o = [];
      var s = n.document;
      var u = Object.getPrototypeOf;
      var l = o.slice;
      var c = o.concat;
      var f = o.push;
      var p = o.indexOf;
      var h = {};
      var d = h.toString;
      var v = h.hasOwnProperty;
      var m = v.toString;
      var g = m.call(Object);
      var $ = {};
      var y = function e(t) {
        return "function" === typeof t && "number" !== typeof t.nodeType
      };
      var b = function e(t) {
        return null != t && t === t.window
      };
      var w = {type: true, src: true, noModule: true};

      function x(e, t, n) {
        t = t || s;
        var r, i = t.createElement("script");
        i.text = e;
        if (n) for (r in w) n[r] && (i[r] = n[r]);
        t.head.appendChild(i).parentNode.removeChild(i)
      }

      function C(e) {
        if (null == e) return e + "";
        return "object" === typeof e || "function" === typeof e ? h[d.call(e)] || "object" : typeof e
      }

      var E = "3.3.1", k = function (e, t) {
        return new k.fn.init(e, t)
      }, S = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      k.fn = k.prototype = {
        jquery: E, constructor: k, length: 0, toArray: function () {
          return l.call(this)
        }, get: function (e) {
          if (null == e) return l.call(this);
          return e < 0 ? this[e + this.length] : this[e]
        }, pushStack: function (e) {
          var t = k.merge(this.constructor(), e);
          t.prevObject = this;
          return t
        }, each: function (e) {
          return k.each(this, e)
        }, map: function (e) {
          return this.pushStack(k.map(this, function (t, n) {
            return e.call(t, n, t)
          }))
        }, slice: function () {
          return this.pushStack(l.apply(this, arguments))
        }, first: function () {
          return this.eq(0)
        }, last: function () {
          return this.eq(-1)
        }, eq: function (e) {
          var t = this.length, n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        }, end: function () {
          return this.prevObject || this.constructor()
        }, push: f, sort: o.sort, splice: o.splice
      };
      k.extend = k.fn.extend = function () {
        var e, t, n, r, i, a, o = arguments[0] || {}, s = 1, u = arguments.length, l = false;
        if ("boolean" === typeof o) {
          l = o;
          o = arguments[s] || {};
          s++
        }
        "object" === typeof o || y(o) || (o = {});
        if (s === u) {
          o = this;
          s--
        }
        for (; s < u; s++) if (null != (e = arguments[s])) for (t in e) {
          n = o[t];
          r = e[t];
          if (o === r) continue;
          if (l && r && (k.isPlainObject(r) || (i = Array.isArray(r)))) {
            if (i) {
              i = false;
              a = n && Array.isArray(n) ? n : []
            } else a = n && k.isPlainObject(n) ? n : {};
            o[t] = k.extend(l, a, r)
          } else void 0 !== r && (o[t] = r)
        }
        return o
      };
      k.extend({
        expando: "jQuery" + (E + Math.random()).replace(/\D/g, ""), isReady: true, error: function (e) {
          throw new Error(e)
        }, noop: function () {
        }, isPlainObject: function (e) {
          var t, n;
          if (!e || "[object Object]" !== d.call(e)) return false;
          t = u(e);
          if (!t) return true;
          n = v.call(t, "constructor") && t.constructor;
          return "function" === typeof n && m.call(n) === g
        }, isEmptyObject: function (e) {
          var t;
          for (t in e) return false;
          return true
        }, globalEval: function (e) {
          x(e)
        }, each: function (e, t) {
          var n, r = 0;
          if (A(e)) {
            n = e.length;
            for (; r < n; r++) if (false === t.call(e[r], r, e[r])) break
          } else for (r in e) if (false === t.call(e[r], r, e[r])) break;
          return e
        }, trim: function (e) {
          return null == e ? "" : (e + "").replace(S, "")
        }, makeArray: function (e, t) {
          var n = t || [];
          null != e && (A(Object(e)) ? k.merge(n, "string" === typeof e ? [e] : e) : f.call(n, e));
          return n
        }, inArray: function (e, t, n) {
          return null == t ? -1 : p.call(t, e, n)
        }, merge: function (e, t) {
          var n = +t.length, r = 0, i = e.length;
          for (; r < n; r++) e[i++] = t[r];
          e.length = i;
          return e
        }, grep: function (e, t, n) {
          var r, i = [], a = 0, o = e.length, s = !n;
          for (; a < o; a++) {
            r = !t(e[a], a);
            r !== s && i.push(e[a])
          }
          return i
        }, map: function (e, t, n) {
          var r, i, a = 0, o = [];
          if (A(e)) {
            r = e.length;
            for (; a < r; a++) {
              i = t(e[a], a, n);
              null != i && o.push(i)
            }
          } else for (a in e) {
            i = t(e[a], a, n);
            null != i && o.push(i)
          }
          return c.apply([], o)
        }, guid: 1, support: $
      });
      "function" === typeof Symbol && (k.fn[Symbol.iterator] = o[Symbol.iterator]);
      k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        h["[object " + t + "]"] = t.toLowerCase()
      });

      function A(e) {
        var t = !!e && "length" in e && e.length, n = C(e);
        if (y(e) || b(e)) return false;
        return "array" === n || 0 === t || "number" === typeof t && t > 0 && t - 1 in e
      }

      var T =
        /*!
       * Sizzle CSS Selector Engine v2.3.3
       * https://sizzlejs.com/
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license
       * http://jquery.org/license
       *
       * Date: 2016-08-08
       */
        function (e) {
          var t, n, r, i, a, o, s, u, l, c, f, p, h, d, v, m, g, $, y, b = "sizzle" + 1 * new Date, w = e.document,
            x = 0, C = 0, E = oe(), k = oe(), S = oe(), A = function (e, t) {
              e === t && (f = true);
              return 0
            }, T = {}.hasOwnProperty, O = [], j = O.pop, M = O.push, D = O.push, N = O.slice, q = function (e, t) {
              var n = 0, r = e.length;
              for (; n < r; n++) if (e[n] === t) return n;
              return -1
            },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            _ = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            L = "\\[" + _ + "*(" + R + ")(?:" + _ + "*([*^$|!~]?=)" + _ + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + _ + "*\\]",
            I = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + L + ")*)|.*)\\)|)",
            V = new RegExp(_ + "+", "g"), F = new RegExp("^" + _ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _ + "+$", "g"),
            U = new RegExp("^" + _ + "*," + _ + "*"), H = new RegExp("^" + _ + "*([>+~]|" + _ + ")" + _ + "*"),
            B = new RegExp("=" + _ + "*([^\\]'\"]*?)" + _ + "*\\]", "g"), z = new RegExp(I),
            W = new RegExp("^" + R + "$"), G = {
              ID: new RegExp("^#(" + R + ")"),
              CLASS: new RegExp("^\\.(" + R + ")"),
              TAG: new RegExp("^(" + R + "|[*])"),
              ATTR: new RegExp("^" + L),
              PSEUDO: new RegExp("^" + I),
              CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _ + "*(even|odd|(([+-]|)(\\d*)n|)" + _ + "*(?:([+-]|)" + _ + "*(\\d+)|))" + _ + "*\\)|)", "i"),
              bool: new RegExp("^(?:" + P + ")$", "i"),
              needsContext: new RegExp("^" + _ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _ + "*((?:-\\d)?\\d*)" + _ + "*\\)|)(?=[^-]|$)", "i")
            }, J = /^(?:input|select|textarea|button)$/i, Q = /^h\d$/i, Y = /^[^{]+\{\s*\[native \w/,
            K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, X = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + _ + "?|(" + _ + ")|.)", "ig"), ee = function (e, t, n) {
              var r = "0x" + t - 65536;
              return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function (e, t) {
              if (t) {
                if ("\0" === e) return "�";
                return e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " "
              }
              return "\\" + e
            }, re = function () {
              p()
            }, ie = $e(function (e) {
              return true === e.disabled && ("form" in e || "label" in e)
            }, {dir: "parentNode", next: "legend"});
          try {
            D.apply(O = N.call(w.childNodes), w.childNodes);
            O[w.childNodes.length].nodeType
          } catch (e) {
            D = {
              apply: O.length ? function (e, t) {
                M.apply(e, N.call(t))
              } : function (e, t) {
                var n = e.length, r = 0;
                while (e[n++] = t[r++]) ;
                e.length = n - 1
              }
            }
          }

          function ae(e, t, r, i) {
            var a, s, l, c, f, d, g, $ = t && t.ownerDocument, x = t ? t.nodeType : 9;
            r = r || [];
            if ("string" !== typeof e || !e || 1 !== x && 9 !== x && 11 !== x) return r;
            if (!i) {
              (t ? t.ownerDocument || t : w) !== h && p(t);
              t = t || h;
              if (v) {
                if (11 !== x && (f = K.exec(e))) if (a = f[1]) {
                  if (9 === x) {
                    if (!(l = t.getElementById(a))) return r;
                    if (l.id === a) {
                      r.push(l);
                      return r
                    }
                  } else if ($ && (l = $.getElementById(a)) && y(t, l) && l.id === a) {
                    r.push(l);
                    return r
                  }
                } else {
                  if (f[2]) {
                    D.apply(r, t.getElementsByTagName(e));
                    return r
                  }
                  if ((a = f[3]) && n.getElementsByClassName && t.getElementsByClassName) {
                    D.apply(r, t.getElementsByClassName(a));
                    return r
                  }
                }
                if (n.qsa && !S[e + " "] && (!m || !m.test(e))) {
                  if (1 !== x) {
                    $ = t;
                    g = e
                  } else if ("object" !== t.nodeName.toLowerCase()) {
                    (c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b);
                    d = o(e);
                    s = d.length;
                    while (s--) d[s] = "#" + c + " " + ge(d[s]);
                    g = d.join(",");
                    $ = X.test(e) && ve(t.parentNode) || t
                  }
                  if (g) try {
                    D.apply(r, $.querySelectorAll(g));
                    return r
                  } catch (e) {
                  } finally {
                    c === b && t.removeAttribute("id")
                  }
                }
              }
            }
            return u(e.replace(F, "$1"), t, r, i)
          }

          function oe() {
            var e = [];

            function t(n, i) {
              e.push(n + " ") > r.cacheLength && delete t[e.shift()];
              return t[n + " "] = i
            }

            return t
          }

          function se(e) {
            e[b] = true;
            return e
          }

          function ue(e) {
            var t = h.createElement("fieldset");
            try {
              return !!e(t)
            } catch (e) {
              return false
            } finally {
              t.parentNode && t.parentNode.removeChild(t);
              t = null
            }
          }

          function le(e, t) {
            var n = e.split("|"), i = n.length;
            while (i--) r.attrHandle[n[i]] = t
          }

          function ce(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) while (n = n.nextSibling) if (n === t) return -1;
            return e ? 1 : -1
          }

          function fe(e) {
            return function (t) {
              var n = t.nodeName.toLowerCase();
              return "input" === n && t.type === e
            }
          }

          function pe(e) {
            return function (t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e
            }
          }

          function he(e) {
            return function (t) {
              if ("form" in t) {
                if (t.parentNode && false === t.disabled) {
                  if ("label" in t) return "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e;
                  return t.isDisabled === e || t.isDisabled !== !e && ie(t) === e
                }
                return t.disabled === e
              }
              if ("label" in t) return t.disabled === e;
              return false
            }
          }

          function de(e) {
            return se(function (t) {
              t = +t;
              return se(function (n, r) {
                var i, a = e([], n.length, t), o = a.length;
                while (o--) n[i = a[o]] && (n[i] = !(r[i] = n[i]))
              })
            })
          }

          function ve(e) {
            return e && "undefined" !== typeof e.getElementsByTagName && e
          }

          n = ae.support = {};
          a = ae.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
          };
          p = ae.setDocument = function (e) {
            var t, i, o = e ? e.ownerDocument || e : w;
            if (o === h || 9 !== o.nodeType || !o.documentElement) return h;
            h = o;
            d = h.documentElement;
            v = !a(h);
            w !== h && (i = h.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, false) : i.attachEvent && i.attachEvent("onunload", re));
            n.attributes = ue(function (e) {
              e.className = "i";
              return !e.getAttribute("className")
            });
            n.getElementsByTagName = ue(function (e) {
              e.appendChild(h.createComment(""));
              return !e.getElementsByTagName("*").length
            });
            n.getElementsByClassName = Y.test(h.getElementsByClassName);
            n.getById = ue(function (e) {
              d.appendChild(e).id = b;
              return !h.getElementsByName || !h.getElementsByName(b).length
            });
            if (n.getById) {
              r.filter["ID"] = function (e) {
                var t = e.replace(Z, ee);
                return function (e) {
                  return e.getAttribute("id") === t
                }
              };
              r.find["ID"] = function (e, t) {
                if ("undefined" !== typeof t.getElementById && v) {
                  var n = t.getElementById(e);
                  return n ? [n] : []
                }
              }
            } else {
              r.filter["ID"] = function (e) {
                var t = e.replace(Z, ee);
                return function (e) {
                  var n = "undefined" !== typeof e.getAttributeNode && e.getAttributeNode("id");
                  return n && n.value === t
                }
              };
              r.find["ID"] = function (e, t) {
                if ("undefined" !== typeof t.getElementById && v) {
                  var n, r, i, a = t.getElementById(e);
                  if (a) {
                    n = a.getAttributeNode("id");
                    if (n && n.value === e) return [a];
                    i = t.getElementsByName(e);
                    r = 0;
                    while (a = i[r++]) {
                      n = a.getAttributeNode("id");
                      if (n && n.value === e) return [a]
                    }
                  }
                  return []
                }
              }
            }
            r.find["TAG"] = n.getElementsByTagName ? function (e, t) {
              if ("undefined" !== typeof t.getElementsByTagName) return t.getElementsByTagName(e);
              if (n.qsa) return t.querySelectorAll(e)
            } : function (e, t) {
              var n, r = [], i = 0, a = t.getElementsByTagName(e);
              if ("*" === e) {
                while (n = a[i++]) 1 === n.nodeType && r.push(n);
                return r
              }
              return a
            };
            r.find["CLASS"] = n.getElementsByClassName && function (e, t) {
              if ("undefined" !== typeof t.getElementsByClassName && v) return t.getElementsByClassName(e)
            };
            g = [];
            m = [];
            if (n.qsa = Y.test(h.querySelectorAll)) {
              ue(function (e) {
                d.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>";
                e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + _ + "*(?:''|\"\")");
                e.querySelectorAll("[selected]").length || m.push("\\[" + _ + "*(?:value|" + P + ")");
                e.querySelectorAll("[id~=" + b + "-]").length || m.push("~=");
                e.querySelectorAll(":checked").length || m.push(":checked");
                e.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]")
              });
              ue(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = h.createElement("input");
                t.setAttribute("type", "hidden");
                e.appendChild(t).setAttribute("name", "D");
                e.querySelectorAll("[name=d]").length && m.push("name" + _ + "*[*^$|!~]?=");
                2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled");
                d.appendChild(e).disabled = true;
                2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled");
                e.querySelectorAll("*,:x");
                m.push(",.*:")
              })
            }
            (n.matchesSelector = Y.test($ = d.matches || d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ue(function (e) {
              n.disconnectedMatch = $.call(e, "*");
              $.call(e, "[s!='']:x");
              g.push("!=", I)
            });
            m = m.length && new RegExp(m.join("|"));
            g = g.length && new RegExp(g.join("|"));
            t = Y.test(d.compareDocumentPosition);
            y = t || Y.test(d.contains) ? function (e, t) {
              var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
              return e === r || !!(r && 1 === r.nodeType && (n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
              if (t) while (t = t.parentNode) if (t === e) return true;
              return false
            };
            A = t ? function (e, t) {
              if (e === t) {
                f = true;
                return 0
              }
              var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
              if (r) return r;
              r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1;
              if (1 & r || !n.sortDetached && t.compareDocumentPosition(e) === r) {
                if (e === h || e.ownerDocument === w && y(w, e)) return -1;
                if (t === h || t.ownerDocument === w && y(w, t)) return 1;
                return c ? q(c, e) - q(c, t) : 0
              }
              return 4 & r ? -1 : 1
            } : function (e, t) {
              if (e === t) {
                f = true;
                return 0
              }
              var n, r = 0, i = e.parentNode, a = t.parentNode, o = [e], s = [t];
              if (!i || !a) return e === h ? -1 : t === h ? 1 : i ? -1 : a ? 1 : c ? q(c, e) - q(c, t) : 0;
              if (i === a) return ce(e, t);
              n = e;
              while (n = n.parentNode) o.unshift(n);
              n = t;
              while (n = n.parentNode) s.unshift(n);
              while (o[r] === s[r]) r++;
              return r ? ce(o[r], s[r]) : o[r] === w ? -1 : s[r] === w ? 1 : 0
            };
            return h
          };
          ae.matches = function (e, t) {
            return ae(e, null, null, t)
          };
          ae.matchesSelector = function (e, t) {
            (e.ownerDocument || e) !== h && p(e);
            t = t.replace(B, "='$1']");
            if (n.matchesSelector && v && !S[t + " "] && (!g || !g.test(t)) && (!m || !m.test(t))) try {
              var r = $.call(e, t);
              if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (e) {
            }
            return ae(t, h, null, [e]).length > 0
          };
          ae.contains = function (e, t) {
            (e.ownerDocument || e) !== h && p(e);
            return y(e, t)
          };
          ae.attr = function (e, t) {
            (e.ownerDocument || e) !== h && p(e);
            var i = r.attrHandle[t.toLowerCase()],
              a = i && T.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !v) : void 0;
            return void 0 !== a ? a : n.attributes || !v ? e.getAttribute(t) : (a = e.getAttributeNode(t)) && a.specified ? a.value : null
          };
          ae.escape = function (e) {
            return (e + "").replace(te, ne)
          };
          ae.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
          };
          ae.uniqueSort = function (e) {
            var t, r = [], i = 0, a = 0;
            f = !n.detectDuplicates;
            c = !n.sortStable && e.slice(0);
            e.sort(A);
            if (f) {
              while (t = e[a++]) t === e[a] && (i = r.push(a));
              while (i--) e.splice(r[i], 1)
            }
            c = null;
            return e
          };
          i = ae.getText = function (e) {
            var t, n = "", r = 0, a = e.nodeType;
            if (a) {
              if (1 === a || 9 === a || 11 === a) {
                if ("string" === typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
              } else if (3 === a || 4 === a) return e.nodeValue
            } else while (t = e[r++]) n += i(t);
            return n
          };
          r = ae.selectors = {
            cacheLength: 50,
            createPseudo: se,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
              ">": {dir: "parentNode", first: true},
              " ": {dir: "parentNode"},
              "+": {dir: "previousSibling", first: true},
              "~": {dir: "previousSibling"}
            },
            preFilter: {
              ATTR: function (e) {
                e[1] = e[1].replace(Z, ee);
                e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee);
                "~=" === e[2] && (e[3] = " " + e[3] + " ");
                return e.slice(0, 4)
              }, CHILD: function (e) {
                e[1] = e[1].toLowerCase();
                if ("nth" === e[1].slice(0, 3)) {
                  e[3] || ae.error(e[0]);
                  e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]));
                  e[5] = +(e[7] + e[8] || "odd" === e[3])
                } else e[3] && ae.error(e[0]);
                return e
              }, PSEUDO: function (e) {
                var t, n = !e[6] && e[2];
                if (G["CHILD"].test(e[0])) return null;
                if (e[3]) e[2] = e[4] || e[5] || ""; else if (n && z.test(n) && (t = o(n, true)) && (t = n.indexOf(")", n.length - t) - n.length)) {
                  e[0] = e[0].slice(0, t);
                  e[2] = n.slice(0, t)
                }
                return e.slice(0, 3)
              }
            },
            filter: {
              TAG: function (e) {
                var t = e.replace(Z, ee).toLowerCase();
                return "*" === e ? function () {
                  return true
                } : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t
                }
              }, CLASS: function (e) {
                var t = E[e + " "];
                return t || (t = new RegExp("(^|" + _ + ")" + e + "(" + _ + "|$)")) && E(e, function (e) {
                  return t.test("string" === typeof e.className && e.className || "undefined" !== typeof e.getAttribute && e.getAttribute("class") || "")
                })
              }, ATTR: function (e, t, n) {
                return function (r) {
                  var i = ae.attr(r, e);
                  if (null == i) return "!=" === t;
                  if (!t) return true;
                  i += "";
                  return "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(V, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-")
                }
              }, CHILD: function (e, t, n, r, i) {
                var a = "nth" !== e.slice(0, 3), o = "last" !== e.slice(-4), s = "of-type" === t;
                return 1 === r && 0 === i ? function (e) {
                  return !!e.parentNode
                } : function (t, n, u) {
                  var l, c, f, p, h, d, v = a !== o ? "nextSibling" : "previousSibling", m = t.parentNode,
                    g = s && t.nodeName.toLowerCase(), $ = !u && !s, y = false;
                  if (m) {
                    if (a) {
                      while (v) {
                        p = t;
                        while (p = p[v]) if (s ? p.nodeName.toLowerCase() === g : 1 === p.nodeType) return false;
                        d = v = "only" === e && !d && "nextSibling"
                      }
                      return true
                    }
                    d = [o ? m.firstChild : m.lastChild];
                    if (o && $) {
                      p = m;
                      f = p[b] || (p[b] = {});
                      c = f[p.uniqueID] || (f[p.uniqueID] = {});
                      l = c[e] || [];
                      h = l[0] === x && l[1];
                      y = h && l[2];
                      p = h && m.childNodes[h];
                      while (p = ++h && p && p[v] || (y = h = 0) || d.pop()) if (1 === p.nodeType && ++y && p === t) {
                        c[e] = [x, h, y];
                        break
                      }
                    } else {
                      if ($) {
                        p = t;
                        f = p[b] || (p[b] = {});
                        c = f[p.uniqueID] || (f[p.uniqueID] = {});
                        l = c[e] || [];
                        h = l[0] === x && l[1];
                        y = h
                      }
                      if (false === y) while (p = ++h && p && p[v] || (y = h = 0) || d.pop()) if ((s ? p.nodeName.toLowerCase() === g : 1 === p.nodeType) && ++y) {
                        if ($) {
                          f = p[b] || (p[b] = {});
                          c = f[p.uniqueID] || (f[p.uniqueID] = {});
                          c[e] = [x, y]
                        }
                        if (p === t) break
                      }
                    }
                    y -= i;
                    return y === r || y % r === 0 && y / r >= 0
                  }
                }
              }, PSEUDO: function (e, t) {
                var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                if (i[b]) return i(t);
                if (i.length > 1) {
                  n = [e, e, "", t];
                  return r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
                    var r, a = i(e, t), o = a.length;
                    while (o--) {
                      r = q(e, a[o]);
                      e[r] = !(n[r] = a[o])
                    }
                  }) : function (e) {
                    return i(e, 0, n)
                  }
                }
                return i
              }
            },
            pseudos: {
              not: se(function (e) {
                var t = [], n = [], r = s(e.replace(F, "$1"));
                return r[b] ? se(function (e, t, n, i) {
                  var a, o = r(e, null, i, []), s = e.length;
                  while (s--) (a = o[s]) && (e[s] = !(t[s] = a))
                }) : function (e, i, a) {
                  t[0] = e;
                  r(t, null, a, n);
                  t[0] = null;
                  return !n.pop()
                }
              }), has: se(function (e) {
                return function (t) {
                  return ae(e, t).length > 0
                }
              }), contains: se(function (e) {
                e = e.replace(Z, ee);
                return function (t) {
                  return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                }
              }), lang: se(function (e) {
                W.test(e || "") || ae.error("unsupported lang: " + e);
                e = e.replace(Z, ee).toLowerCase();
                return function (t) {
                  var n;
                  do {
                    if (n = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) {
                      n = n.toLowerCase();
                      return n === e || 0 === n.indexOf(e + "-")
                    }
                  } while ((t = t.parentNode) && 1 === t.nodeType);
                  return false
                }
              }), target: function (t) {
                var n = e.location && e.location.hash;
                return n && n.slice(1) === t.id
              }, root: function (e) {
                return e === d
              }, focus: function (e) {
                return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
              }, enabled: he(false), disabled: he(true), checked: function (e) {
                var t = e.nodeName.toLowerCase();
                return "input" === t && !!e.checked || "option" === t && !!e.selected
              }, selected: function (e) {
                e.parentNode && e.parentNode.selectedIndex;
                return true === e.selected
              }, empty: function (e) {
                for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return false;
                return true
              }, parent: function (e) {
                return !r.pseudos["empty"](e)
              }, header: function (e) {
                return Q.test(e.nodeName)
              }, input: function (e) {
                return J.test(e.nodeName)
              }, button: function (e) {
                var t = e.nodeName.toLowerCase();
                return "input" === t && "button" === e.type || "button" === t
              }, text: function (e) {
                var t;
                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
              }, first: de(function () {
                return [0]
              }), last: de(function (e, t) {
                return [t - 1]
              }), eq: de(function (e, t, n) {
                return [n < 0 ? n + t : n]
              }), even: de(function (e, t) {
                var n = 0;
                for (; n < t; n += 2) e.push(n);
                return e
              }), odd: de(function (e, t) {
                var n = 1;
                for (; n < t; n += 2) e.push(n);
                return e
              }), lt: de(function (e, t, n) {
                var r = n < 0 ? n + t : n;
                for (; --r >= 0;) e.push(r);
                return e
              }), gt: de(function (e, t, n) {
                var r = n < 0 ? n + t : n;
                for (; ++r < t;) e.push(r);
                return e
              })
            }
          };
          r.pseudos["nth"] = r.pseudos["eq"];
          for (t in {radio: true, checkbox: true, file: true, password: true, image: true}) r.pseudos[t] = fe(t);
          for (t in {submit: true, reset: true}) r.pseudos[t] = pe(t);

          function me() {
          }

          me.prototype = r.filters = r.pseudos;
          r.setFilters = new me;
          o = ae.tokenize = function (e, t) {
            var n, i, a, o, s, u, l, c = k[e + " "];
            if (c) return t ? 0 : c.slice(0);
            s = e;
            u = [];
            l = r.preFilter;
            while (s) {
              if (!n || (i = U.exec(s))) {
                i && (s = s.slice(i[0].length) || s);
                u.push(a = [])
              }
              n = false;
              if (i = H.exec(s)) {
                n = i.shift();
                a.push({value: n, type: i[0].replace(F, " ")});
                s = s.slice(n.length)
              }
              for (o in r.filter) if ((i = G[o].exec(s)) && (!l[o] || (i = l[o](i)))) {
                n = i.shift();
                a.push({value: n, type: o, matches: i});
                s = s.slice(n.length)
              }
              if (!n) break
            }
            return t ? s.length : s ? ae.error(e) : k(e, u).slice(0)
          };

          function ge(e) {
            var t = 0, n = e.length, r = "";
            for (; t < n; t++) r += e[t].value;
            return r
          }

          function $e(e, t, n) {
            var r = t.dir, i = t.next, a = i || r, o = n && "parentNode" === a, s = C++;
            return t.first ? function (t, n, i) {
              while (t = t[r]) if (1 === t.nodeType || o) return e(t, n, i);
              return false
            } : function (t, n, u) {
              var l, c, f, p = [x, s];
              if (u) {
                while (t = t[r]) if ((1 === t.nodeType || o) && e(t, n, u)) return true
              } else while (t = t[r]) if (1 === t.nodeType || o) {
                f = t[b] || (t[b] = {});
                c = f[t.uniqueID] || (f[t.uniqueID] = {});
                if (i && i === t.nodeName.toLowerCase()) t = t[r] || t; else {
                  if ((l = c[a]) && l[0] === x && l[1] === s) return p[2] = l[2];
                  c[a] = p;
                  if (p[2] = e(t, n, u)) return true
                }
              }
              return false
            }
          }

          function ye(e) {
            return e.length > 1 ? function (t, n, r) {
              var i = e.length;
              while (i--) if (!e[i](t, n, r)) return false;
              return true
            } : e[0]
          }

          function be(e, t, n) {
            var r = 0, i = t.length;
            for (; r < i; r++) ae(e, t[r], n);
            return n
          }

          function we(e, t, n, r, i) {
            var a, o = [], s = 0, u = e.length, l = null != t;
            for (; s < u; s++) if ((a = e[s]) && (!n || n(a, r, i))) {
              o.push(a);
              l && t.push(s)
            }
            return o
          }

          function xe(e, t, n, r, i, a) {
            r && !r[b] && (r = xe(r));
            i && !i[b] && (i = xe(i, a));
            return se(function (a, o, s, u) {
              var l, c, f, p = [], h = [], d = o.length, v = a || be(t || "*", s.nodeType ? [s] : s, []),
                m = !e || !a && t ? v : we(v, p, e, s, u), g = n ? i || (a ? e : d || r) ? [] : o : m;
              n && n(m, g, s, u);
              if (r) {
                l = we(g, h);
                r(l, [], s, u);
                c = l.length;
                while (c--) (f = l[c]) && (g[h[c]] = !(m[h[c]] = f))
              }
              if (a) {
                if (i || e) {
                  if (i) {
                    l = [];
                    c = g.length;
                    while (c--) (f = g[c]) && l.push(m[c] = f);
                    i(null, g = [], l, u)
                  }
                  c = g.length;
                  while (c--) (f = g[c]) && (l = i ? q(a, f) : p[c]) > -1 && (a[l] = !(o[l] = f))
                }
              } else {
                g = we(g === o ? g.splice(d, g.length) : g);
                i ? i(null, o, g, u) : D.apply(o, g)
              }
            })
          }

          function Ce(e) {
            var t, n, i, a = e.length, o = r.relative[e[0].type], s = o || r.relative[" "], u = o ? 1 : 0,
              c = $e(function (e) {
                return e === t
              }, s, true), f = $e(function (e) {
                return q(t, e) > -1
              }, s, true), p = [function (e, n, r) {
                var i = !o && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                t = null;
                return i
              }];
            for (; u < a; u++) if (n = r.relative[e[u].type]) p = [$e(ye(p), n)]; else {
              n = r.filter[e[u].type].apply(null, e[u].matches);
              if (n[b]) {
                i = ++u;
                for (; i < a; i++) if (r.relative[e[i].type]) break;
                return xe(u > 1 && ye(p), u > 1 && ge(e.slice(0, u - 1).concat({value: " " === e[u - 2].type ? "*" : ""})).replace(F, "$1"), n, u < i && Ce(e.slice(u, i)), i < a && Ce(e = e.slice(i)), i < a && ge(e))
              }
              p.push(n)
            }
            return ye(p)
          }

          function Ee(e, t) {
            var n = t.length > 0, i = e.length > 0, a = function (a, o, s, u, c) {
              var f, d, m, g = 0, $ = "0", y = a && [], b = [], w = l, C = a || i && r.find["TAG"]("*", c),
                E = x += null == w ? 1 : Math.random() || .1, k = C.length;
              c && (l = o === h || o || c);
              for (; $ !== k && null != (f = C[$]); $++) {
                if (i && f) {
                  d = 0;
                  if (!o && f.ownerDocument !== h) {
                    p(f);
                    s = !v
                  }
                  while (m = e[d++]) if (m(f, o || h, s)) {
                    u.push(f);
                    break
                  }
                  c && (x = E)
                }
                if (n) {
                  (f = !m && f) && g--;
                  a && y.push(f)
                }
              }
              g += $;
              if (n && $ !== g) {
                d = 0;
                while (m = t[d++]) m(y, b, o, s);
                if (a) {
                  if (g > 0) while ($--) y[$] || b[$] || (b[$] = j.call(u));
                  b = we(b)
                }
                D.apply(u, b);
                c && !a && b.length > 0 && g + t.length > 1 && ae.uniqueSort(u)
              }
              if (c) {
                x = E;
                l = w
              }
              return y
            };
            return n ? se(a) : a
          }

          s = ae.compile = function (e, t) {
            var n, r = [], i = [], a = S[e + " "];
            if (!a) {
              t || (t = o(e));
              n = t.length;
              while (n--) {
                a = Ce(t[n]);
                a[b] ? r.push(a) : i.push(a)
              }
              a = S(e, Ee(i, r));
              a.selector = e
            }
            return a
          };
          u = ae.select = function (e, t, n, i) {
            var a, u, l, c, f, p = "function" === typeof e && e, h = !i && o(e = p.selector || e);
            n = n || [];
            if (1 === h.length) {
              u = h[0] = h[0].slice(0);
              if (u.length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && v && r.relative[u[1].type]) {
                t = (r.find["ID"](l.matches[0].replace(Z, ee), t) || [])[0];
                if (!t) return n;
                p && (t = t.parentNode);
                e = e.slice(u.shift().value.length)
              }
              a = G["needsContext"].test(e) ? 0 : u.length;
              while (a--) {
                l = u[a];
                if (r.relative[c = l.type]) break;
                if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), X.test(u[0].type) && ve(t.parentNode) || t))) {
                  u.splice(a, 1);
                  e = i.length && ge(u);
                  if (!e) {
                    D.apply(n, i);
                    return n
                  }
                  break
                }
              }
            }
            (p || s(e, h))(i, t, !v, n, !t || X.test(e) && ve(t.parentNode) || t);
            return n
          };
          n.sortStable = b.split("").sort(A).join("") === b;
          n.detectDuplicates = !!f;
          p();
          n.sortDetached = ue(function (e) {
            return 1 & e.compareDocumentPosition(h.createElement("fieldset"))
          });
          ue(function (e) {
            e.innerHTML = "<a href='#'></a>";
            return "#" === e.firstChild.getAttribute("href")
          }) || le("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
          });
          n.attributes && ue(function (e) {
            e.innerHTML = "<input/>";
            e.firstChild.setAttribute("value", "");
            return "" === e.firstChild.getAttribute("value")
          }) || le("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
          });
          ue(function (e) {
            return null == e.getAttribute("disabled")
          }) || le(P, function (e, t, n) {
            var r;
            if (!n) return true === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
          });
          return ae
        }(n);
      k.find = T;
      k.expr = T.selectors;
      k.expr[":"] = k.expr.pseudos;
      k.uniqueSort = k.unique = T.uniqueSort;
      k.text = T.getText;
      k.isXMLDoc = T.isXML;
      k.contains = T.contains;
      k.escapeSelector = T.escape;
      var O = function (e, t, n) {
        var r = [], i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
          if (i && k(e).is(n)) break;
          r.push(e)
        }
        return r
      };
      var j = function (e, t) {
        var n = [];
        for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
      };
      var M = k.expr.match.needsContext;

      function D(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
      }

      var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

      function q(e, t, n) {
        if (y(t)) return k.grep(e, function (e, r) {
          return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return k.grep(e, function (e) {
          return e === t !== n
        });
        if ("string" !== typeof t) return k.grep(e, function (e) {
          return p.call(t, e) > -1 !== n
        });
        return k.filter(t, e, n)
      }

      k.filter = function (e, t, n) {
        var r = t[0];
        n && (e = ":not(" + e + ")");
        if (1 === t.length && 1 === r.nodeType) return k.find.matchesSelector(r, e) ? [r] : [];
        return k.find.matches(e, k.grep(t, function (e) {
          return 1 === e.nodeType
        }))
      };
      k.fn.extend({
        find: function (e) {
          var t, n, r = this.length, i = this;
          if ("string" !== typeof e) return this.pushStack(k(e).filter(function () {
            for (t = 0; t < r; t++) if (k.contains(i[t], this)) return true
          }));
          n = this.pushStack([]);
          for (t = 0; t < r; t++) k.find(e, i[t], n);
          return r > 1 ? k.uniqueSort(n) : n
        }, filter: function (e) {
          return this.pushStack(q(this, e || [], false))
        }, not: function (e) {
          return this.pushStack(q(this, e || [], true))
        }, is: function (e) {
          return !!q(this, "string" === typeof e && M.test(e) ? k(e) : e || [], false).length
        }
      });
      var P, _ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, R = k.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        n = n || P;
        if ("string" === typeof e) {
          r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : _.exec(e);
          if (!r || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
          if (r[1]) {
            t = t instanceof k ? t[0] : t;
            k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : s, true));
            if (N.test(r[1]) && k.isPlainObject(t)) for (r in t) y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this
          }
          i = s.getElementById(r[2]);
          if (i) {
            this[0] = i;
            this.length = 1
          }
          return this
        }
        if (e.nodeType) {
          this[0] = e;
          this.length = 1;
          return this
        }
        if (y(e)) return void 0 !== n.ready ? n.ready(e) : e(k);
        return k.makeArray(e, this)
      };
      R.prototype = k.fn;
      P = k(s);
      var L = /^(?:parents|prev(?:Until|All))/, I = {children: true, contents: true, next: true, prev: true};
      k.fn.extend({
        has: function (e) {
          var t = k(e, this), n = t.length;
          return this.filter(function () {
            var e = 0;
            for (; e < n; e++) if (k.contains(this, t[e])) return true
          })
        }, closest: function (e, t) {
          var n, r = 0, i = this.length, a = [], o = "string" !== typeof e && k(e);
          if (!M.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
            a.push(n);
            break
          }
          return this.pushStack(a.length > 1 ? k.uniqueSort(a) : a)
        }, index: function (e) {
          if (!e) return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
          if ("string" === typeof e) return p.call(k(e), this[0]);
          return p.call(this, e.jquery ? e[0] : e)
        }, add: function (e, t) {
          return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))))
        }, addBack: function (e) {
          return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
      });

      function V(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType) ;
        return e
      }

      k.each({
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
          return O(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
          return O(e, "parentNode", n)
        }, next: function (e) {
          return V(e, "nextSibling")
        }, prev: function (e) {
          return V(e, "previousSibling")
        }, nextAll: function (e) {
          return O(e, "nextSibling")
        }, prevAll: function (e) {
          return O(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
          return O(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
          return O(e, "previousSibling", n)
        }, siblings: function (e) {
          return j((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
          return j(e.firstChild)
        }, contents: function (e) {
          if (D(e, "iframe")) return e.contentDocument;
          D(e, "template") && (e = e.content || e);
          return k.merge([], e.childNodes)
        }
      }, function (e, t) {
        k.fn[e] = function (n, r) {
          var i = k.map(this, t, n);
          "Until" !== e.slice(-5) && (r = n);
          r && "string" === typeof r && (i = k.filter(r, i));
          if (this.length > 1) {
            I[e] || k.uniqueSort(i);
            L.test(e) && i.reverse()
          }
          return this.pushStack(i)
        }
      });
      var F = /[^\x20\t\r\n\f]+/g;

      function U(e) {
        var t = {};
        k.each(e.match(F) || [], function (e, n) {
          t[n] = true
        });
        return t
      }

      k.Callbacks = function (e) {
        e = "string" === typeof e ? U(e) : k.extend({}, e);
        var t, n, r, i, a = [], o = [], s = -1, u = function () {
          i = i || e.once;
          r = t = true;
          for (; o.length; s = -1) {
            n = o.shift();
            while (++s < a.length) if (false === a[s].apply(n[0], n[1]) && e.stopOnFalse) {
              s = a.length;
              n = false
            }
          }
          e.memory || (n = false);
          t = false;
          i && (a = n ? [] : "")
        }, l = {
          add: function () {
            if (a) {
              if (n && !t) {
                s = a.length - 1;
                o.push(n)
              }
              (function t(n) {
                k.each(n, function (n, r) {
                  y(r) ? e.unique && l.has(r) || a.push(r) : r && r.length && "string" !== C(r) && t(r)
                })
              })(arguments);
              n && !t && u()
            }
            return this
          }, remove: function () {
            k.each(arguments, function (e, t) {
              var n;
              while ((n = k.inArray(t, a, n)) > -1) {
                a.splice(n, 1);
                n <= s && s--
              }
            });
            return this
          }, has: function (e) {
            return e ? k.inArray(e, a) > -1 : a.length > 0
          }, empty: function () {
            a && (a = []);
            return this
          }, disable: function () {
            i = o = [];
            a = n = "";
            return this
          }, disabled: function () {
            return !a
          }, lock: function () {
            i = o = [];
            n || t || (a = n = "");
            return this
          }, locked: function () {
            return !!i
          }, fireWith: function (e, n) {
            if (!i) {
              n = n || [];
              n = [e, n.slice ? n.slice() : n];
              o.push(n);
              t || u()
            }
            return this
          }, fire: function () {
            l.fireWith(this, arguments);
            return this
          }, fired: function () {
            return !!r
          }
        };
        return l
      };

      function H(e) {
        return e
      }

      function B(e) {
        throw e
      }

      function z(e, t, n, r) {
        var i;
        try {
          e && y(i = e.promise) ? i.call(e).done(t).fail(n) : e && y(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
          n.apply(void 0, [e])
        }
      }

      k.extend({
        Deferred: function (e) {
          var t = [["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2], ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]],
            r = "pending", i = {
              state: function () {
                return r
              }, always: function () {
                a.done(arguments).fail(arguments);
                return this
              }, catch: function (e) {
                return i.then(null, e)
              }, pipe: function () {
                var e = arguments;
                return k.Deferred(function (n) {
                  k.each(t, function (t, r) {
                    var i = y(e[r[4]]) && e[r[4]];
                    a[r[1]](function () {
                      var e = i && i.apply(this, arguments);
                      e && y(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments)
                    })
                  });
                  e = null
                }).promise()
              }, then: function (e, r, i) {
                var a = 0;

                function o(e, t, r, i) {
                  return function () {
                    var s = this, u = arguments, l = function () {
                      var n, l;
                      if (e < a) return;
                      n = r.apply(s, u);
                      if (n === t.promise()) throw new TypeError("Thenable self-resolution");
                      l = n && ("object" === typeof n || "function" === typeof n) && n.then;
                      if (y(l)) if (i) l.call(n, o(a, t, H, i), o(a, t, B, i)); else {
                        a++;
                        l.call(n, o(a, t, H, i), o(a, t, B, i), o(a, t, H, t.notifyWith))
                      } else {
                        if (r !== H) {
                          s = void 0;
                          u = [n]
                        }
                        (i || t.resolveWith)(s, u)
                      }
                    }, c = i ? l : function () {
                      try {
                        l()
                      } catch (n) {
                        k.Deferred.exceptionHook && k.Deferred.exceptionHook(n, c.stackTrace);
                        if (e + 1 >= a) {
                          if (r !== B) {
                            s = void 0;
                            u = [n]
                          }
                          t.rejectWith(s, u)
                        }
                      }
                    };
                    if (e) c(); else {
                      k.Deferred.getStackHook && (c.stackTrace = k.Deferred.getStackHook());
                      n.setTimeout(c)
                    }
                  }
                }

                return k.Deferred(function (n) {
                  t[0][3].add(o(0, n, y(i) ? i : H, n.notifyWith));
                  t[1][3].add(o(0, n, y(e) ? e : H));
                  t[2][3].add(o(0, n, y(r) ? r : B))
                }).promise()
              }, promise: function (e) {
                return null != e ? k.extend(e, i) : i
              }
            }, a = {};
          k.each(t, function (e, n) {
            var o = n[2], s = n[5];
            i[n[1]] = o.add;
            s && o.add(function () {
              r = s
            }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock);
            o.add(n[3].fire);
            a[n[0]] = function () {
              a[n[0] + "With"](this === a ? void 0 : this, arguments);
              return this
            };
            a[n[0] + "With"] = o.fireWith
          });
          i.promise(a);
          e && e.call(a, a);
          return a
        }, when: function (e) {
          var t = arguments.length, n = t, r = Array(n), i = l.call(arguments), a = k.Deferred(), o = function (e) {
            return function (n) {
              r[e] = this;
              i[e] = arguments.length > 1 ? l.call(arguments) : n;
              --t || a.resolveWith(r, i)
            }
          };
          if (t <= 1) {
            z(e, a.done(o(n)).resolve, a.reject, !t);
            if ("pending" === a.state() || y(i[n] && i[n].then)) return a.then()
          }
          while (n--) z(i[n], o(n), a.reject);
          return a.promise()
        }
      });
      var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      k.Deferred.exceptionHook = function (e, t) {
        n.console && n.console.warn && e && W.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
      };
      k.readyException = function (e) {
        n.setTimeout(function () {
          throw e
        })
      };
      var G = k.Deferred();
      k.fn.ready = function (e) {
        G.then(e).catch(function (e) {
          k.readyException(e)
        });
        return this
      };
      k.extend({
        isReady: false, readyWait: 1, ready: function (e) {
          if (true === e ? --k.readyWait : k.isReady) return;
          k.isReady = true;
          if (true !== e && --k.readyWait > 0) return;
          G.resolveWith(s, [k])
        }
      });
      k.ready.then = G.then;

      function J() {
        s.removeEventListener("DOMContentLoaded", J);
        n.removeEventListener("load", J);
        k.ready()
      }

      if ("complete" === s.readyState || "loading" !== s.readyState && !s.documentElement.doScroll) n.setTimeout(k.ready); else {
        s.addEventListener("DOMContentLoaded", J);
        n.addEventListener("load", J)
      }
      var Q = function (e, t, n, r, i, a, o) {
        var s = 0, u = e.length, l = null == n;
        if ("object" === C(n)) {
          i = true;
          for (s in n) Q(e, t, s, n[s], true, a, o)
        } else if (void 0 !== r) {
          i = true;
          y(r) || (o = true);
          if (l) if (o) {
            t.call(e, r);
            t = null
          } else {
            l = t;
            t = function (e, t, n) {
              return l.call(k(e), n)
            }
          }
          if (t) for (; s < u; s++) t(e[s], n, o ? r : r.call(e[s], s, t(e[s], n)))
        }
        if (i) return e;
        if (l) return t.call(e);
        return u ? t(e[0], n) : a
      };
      var Y = /^-ms-/, K = /-([a-z])/g;

      function X(e, t) {
        return t.toUpperCase()
      }

      function Z(e) {
        return e.replace(Y, "ms-").replace(K, X)
      }

      var ee = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
      };

      function te() {
        this.expando = k.expando + te.uid++
      }

      te.uid = 1;
      te.prototype = {
        cache: function (e) {
          var t = e[this.expando];
          if (!t) {
            t = {};
            ee(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
              value: t,
              configurable: true
            }))
          }
          return t
        }, set: function (e, t, n) {
          var r, i = this.cache(e);
          if ("string" === typeof t) i[Z(t)] = n; else for (r in t) i[Z(r)] = t[r];
          return i
        }, get: function (e, t) {
          return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Z(t)]
        }, access: function (e, t, n) {
          if (void 0 === t || t && "string" === typeof t && void 0 === n) return this.get(e, t);
          this.set(e, t, n);
          return void 0 !== n ? n : t
        }, remove: function (e, t) {
          var n, r = e[this.expando];
          if (void 0 === r) return;
          if (void 0 !== t) {
            if (Array.isArray(t)) t = t.map(Z); else {
              t = Z(t);
              t = t in r ? [t] : t.match(F) || []
            }
            n = t.length;
            while (n--) delete r[t[n]]
          }
          (void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
        }, hasData: function (e) {
          var t = e[this.expando];
          return void 0 !== t && !k.isEmptyObject(t)
        }
      };
      var ne = new te;
      var re = new te;
      var ie = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ae = /[A-Z]/g;

      function oe(e) {
        if ("true" === e) return true;
        if ("false" === e) return false;
        if ("null" === e) return null;
        if (e === +e + "") return +e;
        if (ie.test(e)) return JSON.parse(e);
        return e
      }

      function se(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType) {
          r = "data-" + t.replace(ae, "-$&").toLowerCase();
          n = e.getAttribute(r);
          if ("string" === typeof n) {
            try {
              n = oe(n)
            } catch (e) {
            }
            re.set(e, t, n)
          } else n = void 0
        }
        return n
      }

      k.extend({
        hasData: function (e) {
          return re.hasData(e) || ne.hasData(e)
        }, data: function (e, t, n) {
          return re.access(e, t, n)
        }, removeData: function (e, t) {
          re.remove(e, t)
        }, _data: function (e, t, n) {
          return ne.access(e, t, n)
        }, _removeData: function (e, t) {
          ne.remove(e, t)
        }
      });
      k.fn.extend({
        data: function (e, t) {
          var n, r, i, a = this[0], o = a && a.attributes;
          if (void 0 === e) {
            if (this.length) {
              i = re.get(a);
              if (1 === a.nodeType && !ne.get(a, "hasDataAttrs")) {
                n = o.length;
                while (n--) if (o[n]) {
                  r = o[n].name;
                  if (0 === r.indexOf("data-")) {
                    r = Z(r.slice(5));
                    se(a, r, i[r])
                  }
                }
                ne.set(a, "hasDataAttrs", true)
              }
            }
            return i
          }
          if ("object" === typeof e) return this.each(function () {
            re.set(this, e)
          });
          return Q(this, function (t) {
            var n;
            if (a && void 0 === t) {
              n = re.get(a, e);
              if (void 0 !== n) return n;
              n = se(a, e);
              if (void 0 !== n) return n;
              return
            }
            this.each(function () {
              re.set(this, e, t)
            })
          }, null, t, arguments.length > 1, null, true)
        }, removeData: function (e) {
          return this.each(function () {
            re.remove(this, e)
          })
        }
      });
      k.extend({
        queue: function (e, t, n) {
          var r;
          if (e) {
            t = (t || "fx") + "queue";
            r = ne.get(e, t);
            n && (!r || Array.isArray(n) ? r = ne.access(e, t, k.makeArray(n)) : r.push(n));
            return r || []
          }
        }, dequeue: function (e, t) {
          t = t || "fx";
          var n = k.queue(e, t), r = n.length, i = n.shift(), a = k._queueHooks(e, t), o = function () {
            k.dequeue(e, t)
          };
          if ("inprogress" === i) {
            i = n.shift();
            r--
          }
          if (i) {
            "fx" === t && n.unshift("inprogress");
            delete a.stop;
            i.call(e, o, a)
          }
          !r && a && a.empty.fire()
        }, _queueHooks: function (e, t) {
          var n = t + "queueHooks";
          return ne.get(e, n) || ne.access(e, n, {
            empty: k.Callbacks("once memory").add(function () {
              ne.remove(e, [t + "queue", n])
            })
          })
        }
      });
      k.fn.extend({
        queue: function (e, t) {
          var n = 2;
          if ("string" !== typeof e) {
            t = e;
            e = "fx";
            n--
          }
          if (arguments.length < n) return k.queue(this[0], e);
          return void 0 === t ? this : this.each(function () {
            var n = k.queue(this, e, t);
            k._queueHooks(this, e);
            "fx" === e && "inprogress" !== n[0] && k.dequeue(this, e)
          })
        }, dequeue: function (e) {
          return this.each(function () {
            k.dequeue(this, e)
          })
        }, clearQueue: function (e) {
          return this.queue(e || "fx", [])
        }, promise: function (e, t) {
          var n, r = 1, i = k.Deferred(), a = this, o = this.length, s = function () {
            --r || i.resolveWith(a, [a])
          };
          if ("string" !== typeof e) {
            t = e;
            e = void 0
          }
          e = e || "fx";
          while (o--) {
            n = ne.get(a[o], e + "queueHooks");
            if (n && n.empty) {
              r++;
              n.empty.add(s)
            }
          }
          s();
          return i.promise(t)
        }
      });
      var ue = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
      var le = new RegExp("^(?:([+-])=|)(" + ue + ")([a-z%]*)$", "i");
      var ce = ["Top", "Right", "Bottom", "Left"];
      var fe = function (e, t) {
        e = t || e;
        return "none" === e.style.display || "" === e.style.display && k.contains(e.ownerDocument, e) && "none" === k.css(e, "display")
      };
      var pe = function (e, t, n, r) {
        var i, a, o = {};
        for (a in t) {
          o[a] = e.style[a];
          e.style[a] = t[a]
        }
        i = n.apply(e, r || []);
        for (a in t) e.style[a] = o[a];
        return i
      };

      function he(e, t, n, r) {
        var i, a, o = 20, s = r ? function () {
            return r.cur()
          } : function () {
            return k.css(e, t, "")
          }, u = s(), l = n && n[3] || (k.cssNumber[t] ? "" : "px"),
          c = (k.cssNumber[t] || "px" !== l && +u) && le.exec(k.css(e, t));
        if (c && c[3] !== l) {
          u /= 2;
          l = l || c[3];
          c = +u || 1;
          while (o--) {
            k.style(e, t, c + l);
            (1 - a) * (1 - (a = s() / u || .5)) <= 0 && (o = 0);
            c /= a
          }
          c *= 2;
          k.style(e, t, c + l);
          n = n || []
        }
        if (n) {
          c = +c || +u || 0;
          i = n[1] ? c + (n[1] + 1) * n[2] : +n[2];
          if (r) {
            r.unit = l;
            r.start = c;
            r.end = i
          }
        }
        return i
      }

      var de = {};

      function ve(e) {
        var t, n = e.ownerDocument, r = e.nodeName, i = de[r];
        if (i) return i;
        t = n.body.appendChild(n.createElement(r));
        i = k.css(t, "display");
        t.parentNode.removeChild(t);
        "none" === i && (i = "block");
        de[r] = i;
        return i
      }

      function me(e, t) {
        var n, r, i = [], a = 0, o = e.length;
        for (; a < o; a++) {
          r = e[a];
          if (!r.style) continue;
          n = r.style.display;
          if (t) {
            if ("none" === n) {
              i[a] = ne.get(r, "display") || null;
              i[a] || (r.style.display = "")
            }
            "" === r.style.display && fe(r) && (i[a] = ve(r))
          } else if ("none" !== n) {
            i[a] = "none";
            ne.set(r, "display", n)
          }
        }
        for (a = 0; a < o; a++) null != i[a] && (e[a].style.display = i[a]);
        return e
      }

      k.fn.extend({
        show: function () {
          return me(this, true)
        }, hide: function () {
          return me(this)
        }, toggle: function (e) {
          if ("boolean" === typeof e) return e ? this.show() : this.hide();
          return this.each(function () {
            fe(this) ? k(this).show() : k(this).hide()
          })
        }
      });
      var ge = /^(?:checkbox|radio)$/i;
      var $e = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i;
      var ye = /^$|^module$|\/(?:java|ecma)script/i;
      var be = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
      be.optgroup = be.option;
      be.tbody = be.tfoot = be.colgroup = be.caption = be.thead;
      be.th = be.td;

      function we(e, t) {
        var n;
        n = "undefined" !== typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" !== typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        if (void 0 === t || t && D(e, t)) return k.merge([e], n);
        return n
      }

      function xe(e, t) {
        var n = 0, r = e.length;
        for (; n < r; n++) ne.set(e[n], "globalEval", !t || ne.get(t[n], "globalEval"))
      }

      var Ce = /<|&#?\w+;/;

      function Ee(e, t, n, r, i) {
        var a, o, s, u, l, c, f = t.createDocumentFragment(), p = [], h = 0, d = e.length;
        for (; h < d; h++) {
          a = e[h];
          if (a || 0 === a) if ("object" === C(a)) k.merge(p, a.nodeType ? [a] : a); else if (Ce.test(a)) {
            o = o || f.appendChild(t.createElement("div"));
            s = ($e.exec(a) || ["", ""])[1].toLowerCase();
            u = be[s] || be._default;
            o.innerHTML = u[1] + k.htmlPrefilter(a) + u[2];
            c = u[0];
            while (c--) o = o.lastChild;
            k.merge(p, o.childNodes);
            o = f.firstChild;
            o.textContent = ""
          } else p.push(t.createTextNode(a))
        }
        f.textContent = "";
        h = 0;
        while (a = p[h++]) {
          if (r && k.inArray(a, r) > -1) {
            i && i.push(a);
            continue
          }
          l = k.contains(a.ownerDocument, a);
          o = we(f.appendChild(a), "script");
          l && xe(o);
          if (n) {
            c = 0;
            while (a = o[c++]) ye.test(a.type || "") && n.push(a)
          }
        }
        return f
      }

      (function () {
        var e = s.createDocumentFragment(), t = e.appendChild(s.createElement("div")), n = s.createElement("input");
        n.setAttribute("type", "radio");
        n.setAttribute("checked", "checked");
        n.setAttribute("name", "t");
        t.appendChild(n);
        $.checkClone = t.cloneNode(true).cloneNode(true).lastChild.checked;
        t.innerHTML = "<textarea>x</textarea>";
        $.noCloneChecked = !!t.cloneNode(true).lastChild.defaultValue
      })();
      var ke = s.documentElement;
      var Se = /^key/, Ae = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Te = /^([^.]*)(?:\.(.+)|)/;

      function Oe() {
        return true
      }

      function je() {
        return false
      }

      function Me() {
        try {
          return s.activeElement
        } catch (e) {
        }
      }

      function De(e, t, n, r, i, a) {
        var o, s;
        if ("object" === typeof t) {
          if ("string" !== typeof n) {
            r = r || n;
            n = void 0
          }
          for (s in t) De(e, s, n, r, t[s], a);
          return e
        }
        if (null == r && null == i) {
          i = n;
          r = n = void 0
        } else if (null == i) if ("string" === typeof n) {
          i = r;
          r = void 0
        } else {
          i = r;
          r = n;
          n = void 0
        }
        if (false === i) i = je; else if (!i) return e;
        if (1 === a) {
          o = i;
          i = function (e) {
            k().off(e);
            return o.apply(this, arguments)
          };
          i.guid = o.guid || (o.guid = k.guid++)
        }
        return e.each(function () {
          k.event.add(this, t, i, r, n)
        })
      }

      k.event = {
        global: {}, add: function (e, t, n, r, i) {
          var a, o, s, u, l, c, f, p, h, d, v, m = ne.get(e);
          if (!m) return;
          if (n.handler) {
            a = n;
            n = a.handler;
            i = a.selector
          }
          i && k.find.matchesSelector(ke, i);
          n.guid || (n.guid = k.guid++);
          (u = m.events) || (u = m.events = {});
          (o = m.handle) || (o = m.handle = function (t) {
            return "undefined" !== typeof k && k.event.triggered !== t.type ? k.event.dispatch.apply(e, arguments) : void 0
          });
          t = (t || "").match(F) || [""];
          l = t.length;
          while (l--) {
            s = Te.exec(t[l]) || [];
            h = v = s[1];
            d = (s[2] || "").split(".").sort();
            if (!h) continue;
            f = k.event.special[h] || {};
            h = (i ? f.delegateType : f.bindType) || h;
            f = k.event.special[h] || {};
            c = k.extend({
              type: h,
              origType: v,
              data: r,
              handler: n,
              guid: n.guid,
              selector: i,
              needsContext: i && k.expr.match.needsContext.test(i),
              namespace: d.join(".")
            }, a);
            if (!(p = u[h])) {
              p = u[h] = [];
              p.delegateCount = 0;
              f.setup && false !== f.setup.call(e, r, d, o) || e.addEventListener && e.addEventListener(h, o)
            }
            if (f.add) {
              f.add.call(e, c);
              c.handler.guid || (c.handler.guid = n.guid)
            }
            i ? p.splice(p.delegateCount++, 0, c) : p.push(c);
            k.event.global[h] = true
          }
        }, remove: function (e, t, n, r, i) {
          var a, o, s, u, l, c, f, p, h, d, v, m = ne.hasData(e) && ne.get(e);
          if (!m || !(u = m.events)) return;
          t = (t || "").match(F) || [""];
          l = t.length;
          while (l--) {
            s = Te.exec(t[l]) || [];
            h = v = s[1];
            d = (s[2] || "").split(".").sort();
            if (!h) {
              for (h in u) k.event.remove(e, h + t[l], n, r, true);
              continue
            }
            f = k.event.special[h] || {};
            h = (r ? f.delegateType : f.bindType) || h;
            p = u[h] || [];
            s = s[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)");
            o = a = p.length;
            while (a--) {
              c = p[a];
              if ((i || v === c.origType) && (!n || n.guid === c.guid) && (!s || s.test(c.namespace)) && (!r || r === c.selector || "**" === r && c.selector)) {
                p.splice(a, 1);
                c.selector && p.delegateCount--;
                f.remove && f.remove.call(e, c)
              }
            }
            if (o && !p.length) {
              f.teardown && false !== f.teardown.call(e, d, m.handle) || k.removeEvent(e, h, m.handle);
              delete u[h]
            }
          }
          k.isEmptyObject(u) && ne.remove(e, "handle events")
        }, dispatch: function (e) {
          var t = k.event.fix(e);
          var n, r, i, a, o, s, u = new Array(arguments.length), l = (ne.get(this, "events") || {})[t.type] || [],
            c = k.event.special[t.type] || {};
          u[0] = t;
          for (n = 1; n < arguments.length; n++) u[n] = arguments[n];
          t.delegateTarget = this;
          if (c.preDispatch && false === c.preDispatch.call(this, t)) return;
          s = k.event.handlers.call(this, t, l);
          n = 0;
          while ((a = s[n++]) && !t.isPropagationStopped()) {
            t.currentTarget = a.elem;
            r = 0;
            while ((o = a.handlers[r++]) && !t.isImmediatePropagationStopped()) if (!t.rnamespace || t.rnamespace.test(o.namespace)) {
              t.handleObj = o;
              t.data = o.data;
              i = ((k.event.special[o.origType] || {}).handle || o.handler).apply(a.elem, u);
              if (void 0 !== i && false === (t.result = i)) {
                t.preventDefault();
                t.stopPropagation()
              }
            }
          }
          c.postDispatch && c.postDispatch.call(this, t);
          return t.result
        }, handlers: function (e, t) {
          var n, r, i, a, o, s = [], u = t.delegateCount, l = e.target;
          if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && !("click" === e.type && true === l.disabled)) {
            a = [];
            o = {};
            for (n = 0; n < u; n++) {
              r = t[n];
              i = r.selector + " ";
              void 0 === o[i] && (o[i] = r.needsContext ? k(i, this).index(l) > -1 : k.find(i, this, null, [l]).length);
              o[i] && a.push(r)
            }
            a.length && s.push({elem: l, handlers: a})
          }
          l = this;
          u < t.length && s.push({elem: l, handlers: t.slice(u)});
          return s
        }, addProp: function (e, t) {
          Object.defineProperty(k.Event.prototype, e, {
            enumerable: true, configurable: true, get: y(t) ? function () {
              if (this.originalEvent) return t(this.originalEvent)
            } : function () {
              if (this.originalEvent) return this.originalEvent[e]
            }, set: function (t) {
              Object.defineProperty(this, e, {enumerable: true, configurable: true, writable: true, value: t})
            }
          })
        }, fix: function (e) {
          return e[k.expando] ? e : new k.Event(e)
        }, special: {
          load: {noBubble: true}, focus: {
            trigger: function () {
              if (this !== Me() && this.focus) {
                this.focus();
                return false
              }
            }, delegateType: "focusin"
          }, blur: {
            trigger: function () {
              if (this === Me() && this.blur) {
                this.blur();
                return false
              }
            }, delegateType: "focusout"
          }, click: {
            trigger: function () {
              if ("checkbox" === this.type && this.click && D(this, "input")) {
                this.click();
                return false
              }
            }, _default: function (e) {
              return D(e.target, "a")
            }
          }, beforeunload: {
            postDispatch: function (e) {
              void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
            }
          }
        }
      };
      k.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
      };
      k.Event = function (e, t) {
        if (!(this instanceof k.Event)) return new k.Event(e, t);
        if (e && e.type) {
          this.originalEvent = e;
          this.type = e.type;
          this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && false === e.returnValue ? Oe : je;
          this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target;
          this.currentTarget = e.currentTarget;
          this.relatedTarget = e.relatedTarget
        } else this.type = e;
        t && k.extend(this, t);
        this.timeStamp = e && e.timeStamp || Date.now();
        this[k.expando] = true
      };
      k.Event.prototype = {
        constructor: k.Event,
        isDefaultPrevented: je,
        isPropagationStopped: je,
        isImmediatePropagationStopped: je,
        isSimulated: false,
        preventDefault: function () {
          var e = this.originalEvent;
          this.isDefaultPrevented = Oe;
          e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
          var e = this.originalEvent;
          this.isPropagationStopped = Oe;
          e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = Oe;
          e && !this.isSimulated && e.stopImmediatePropagation();
          this.stopPropagation()
        }
      };
      k.each({
        altKey: true,
        bubbles: true,
        cancelable: true,
        changedTouches: true,
        ctrlKey: true,
        detail: true,
        eventPhase: true,
        metaKey: true,
        pageX: true,
        pageY: true,
        shiftKey: true,
        view: true,
        char: true,
        charCode: true,
        key: true,
        keyCode: true,
        button: true,
        buttons: true,
        clientX: true,
        clientY: true,
        offsetX: true,
        offsetY: true,
        pointerId: true,
        pointerType: true,
        screenX: true,
        screenY: true,
        targetTouches: true,
        toElement: true,
        touches: true,
        which: function (e) {
          var t = e.button;
          if (null == e.which && Se.test(e.type)) return null != e.charCode ? e.charCode : e.keyCode;
          if (!e.which && void 0 !== t && Ae.test(e.type)) {
            if (1 & t) return 1;
            if (2 & t) return 3;
            if (4 & t) return 2;
            return 0
          }
          return e.which
        }
      }, k.event.addProp);
      k.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, function (e, t) {
        k.event.special[e] = {
          delegateType: t, bindType: t, handle: function (e) {
            var n, r = this, i = e.relatedTarget, a = e.handleObj;
            if (!i || i !== r && !k.contains(r, i)) {
              e.type = a.origType;
              n = a.handler.apply(this, arguments);
              e.type = t
            }
            return n
          }
        }
      });
      k.fn.extend({
        on: function (e, t, n, r) {
          return De(this, e, t, n, r)
        }, one: function (e, t, n, r) {
          return De(this, e, t, n, r, 1)
        }, off: function (e, t, n) {
          var r, i;
          if (e && e.preventDefault && e.handleObj) {
            r = e.handleObj;
            k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler);
            return this
          }
          if ("object" === typeof e) {
            for (i in e) this.off(i, t, e[i]);
            return this
          }
          if (false === t || "function" === typeof t) {
            n = t;
            t = void 0
          }
          false === n && (n = je);
          return this.each(function () {
            k.event.remove(this, e, n, t)
          })
        }
      });
      var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        qe = /<script|<style|<link/i, Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        _e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

      function Re(e, t) {
        if (D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr")) return k(e).children("tbody")[0] || e;
        return e
      }

      function Le(e) {
        e.type = (null !== e.getAttribute("type")) + "/" + e.type;
        return e
      }

      function Ie(e) {
        "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type");
        return e
      }

      function Ve(e, t) {
        var n, r, i, a, o, s, u, l;
        if (1 !== t.nodeType) return;
        if (ne.hasData(e)) {
          a = ne.access(e);
          o = ne.set(t, a);
          l = a.events;
          if (l) {
            delete o.handle;
            o.events = {};
            for (i in l) for (n = 0, r = l[i].length; n < r; n++) k.event.add(t, i, l[i][n])
          }
        }
        if (re.hasData(e)) {
          s = re.access(e);
          u = k.extend({}, s);
          re.set(t, u)
        }
      }

      function Fe(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && ge.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
      }

      function Ue(e, t, n, r) {
        t = c.apply([], t);
        var i, a, o, s, u, l, f = 0, p = e.length, h = p - 1, d = t[0], v = y(d);
        if (v || p > 1 && "string" === typeof d && !$.checkClone && Pe.test(d)) return e.each(function (i) {
          var a = e.eq(i);
          v && (t[0] = d.call(this, i, a.html()));
          Ue(a, t, n, r)
        });
        if (p) {
          i = Ee(t, e[0].ownerDocument, false, e, r);
          a = i.firstChild;
          1 === i.childNodes.length && (i = a);
          if (a || r) {
            o = k.map(we(i, "script"), Le);
            s = o.length;
            for (; f < p; f++) {
              u = i;
              if (f !== h) {
                u = k.clone(u, true, true);
                s && k.merge(o, we(u, "script"))
              }
              n.call(e[f], u, f)
            }
            if (s) {
              l = o[o.length - 1].ownerDocument;
              k.map(o, Ie);
              for (f = 0; f < s; f++) {
                u = o[f];
                ye.test(u.type || "") && !ne.access(u, "globalEval") && k.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && k._evalUrl(u.src) : x(u.textContent.replace(_e, ""), l, u))
              }
            }
          }
        }
        return e
      }

      function He(e, t, n) {
        var r, i = t ? k.filter(t, e) : e, a = 0;
        for (; null != (r = i[a]); a++) {
          n || 1 !== r.nodeType || k.cleanData(we(r));
          if (r.parentNode) {
            n && k.contains(r.ownerDocument, r) && xe(we(r, "script"));
            r.parentNode.removeChild(r)
          }
        }
        return e
      }

      k.extend({
        htmlPrefilter: function (e) {
          return e.replace(Ne, "<$1></$2>")
        }, clone: function (e, t, n) {
          var r, i, a, o, s = e.cloneNode(true), u = k.contains(e.ownerDocument, e);
          if (!$.noCloneChecked && (1 === e.nodeType || 11 === e.nodeType) && !k.isXMLDoc(e)) {
            o = we(s);
            a = we(e);
            for (r = 0, i = a.length; r < i; r++) Fe(a[r], o[r])
          }
          if (t) if (n) {
            a = a || we(e);
            o = o || we(s);
            for (r = 0, i = a.length; r < i; r++) Ve(a[r], o[r])
          } else Ve(e, s);
          o = we(s, "script");
          o.length > 0 && xe(o, !u && we(e, "script"));
          return s
        }, cleanData: function (e) {
          var t, n, r, i = k.event.special, a = 0;
          for (; void 0 !== (n = e[a]); a++) if (ee(n)) {
            if (t = n[ne.expando]) {
              if (t.events) for (r in t.events) i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
              n[ne.expando] = void 0
            }
            n[re.expando] && (n[re.expando] = void 0)
          }
        }
      });
      k.fn.extend({
        detach: function (e) {
          return He(this, e, true)
        }, remove: function (e) {
          return He(this, e)
        }, text: function (e) {
          return Q(this, function (e) {
            return void 0 === e ? k.text(this) : this.empty().each(function () {
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
            })
          }, null, e, arguments.length)
        }, append: function () {
          return Ue(this, arguments, function (e) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
              var t = Re(this, e);
              t.appendChild(e)
            }
          })
        }, prepend: function () {
          return Ue(this, arguments, function (e) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
              var t = Re(this, e);
              t.insertBefore(e, t.firstChild)
            }
          })
        }, before: function () {
          return Ue(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this)
          })
        }, after: function () {
          return Ue(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
          })
        }, empty: function () {
          var e, t = 0;
          for (; null != (e = this[t]); t++) if (1 === e.nodeType) {
            k.cleanData(we(e, false));
            e.textContent = ""
          }
          return this
        }, clone: function (e, t) {
          e = null != e && e;
          t = null == t ? e : t;
          return this.map(function () {
            return k.clone(this, e, t)
          })
        }, html: function (e) {
          return Q(this, function (e) {
            var t = this[0] || {}, n = 0, r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if ("string" === typeof e && !qe.test(e) && !be[($e.exec(e) || ["", ""])[1].toLowerCase()]) {
              e = k.htmlPrefilter(e);
              try {
                for (; n < r; n++) {
                  t = this[n] || {};
                  if (1 === t.nodeType) {
                    k.cleanData(we(t, false));
                    t.innerHTML = e
                  }
                }
                t = 0
              } catch (e) {
              }
            }
            t && this.empty().append(e)
          }, null, e, arguments.length)
        }, replaceWith: function () {
          var e = [];
          return Ue(this, arguments, function (t) {
            var n = this.parentNode;
            if (k.inArray(this, e) < 0) {
              k.cleanData(we(this));
              n && n.replaceChild(t, this)
            }
          }, e)
        }
      });
      k.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, function (e, t) {
        k.fn[e] = function (e) {
          var n, r = [], i = k(e), a = i.length - 1, o = 0;
          for (; o <= a; o++) {
            n = o === a ? this : this.clone(true);
            k(i[o])[t](n);
            f.apply(r, n.get())
          }
          return this.pushStack(r)
        }
      });
      var Be = new RegExp("^(" + ue + ")(?!px)[a-z%]+$", "i");
      var ze = function (e) {
        var t = e.ownerDocument.defaultView;
        t && t.opener || (t = n);
        return t.getComputedStyle(e)
      };
      var We = new RegExp(ce.join("|"), "i");
      (function () {
        function e() {
          if (!c) return;
          l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
          c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
          ke.appendChild(l).appendChild(c);
          var e = n.getComputedStyle(c);
          r = "1%" !== e.top;
          u = 12 === t(e.marginLeft);
          c.style.right = "60%";
          o = 36 === t(e.right);
          i = 36 === t(e.width);
          c.style.position = "absolute";
          a = 36 === c.offsetWidth || "absolute";
          ke.removeChild(l);
          c = null
        }

        function t(e) {
          return Math.round(parseFloat(e))
        }

        var r, i, a, o, u, l = s.createElement("div"), c = s.createElement("div");
        if (!c.style) return;
        c.style.backgroundClip = "content-box";
        c.cloneNode(true).style.backgroundClip = "";
        $.clearCloneStyle = "content-box" === c.style.backgroundClip;
        k.extend($, {
          boxSizingReliable: function () {
            e();
            return i
          }, pixelBoxStyles: function () {
            e();
            return o
          }, pixelPosition: function () {
            e();
            return r
          }, reliableMarginLeft: function () {
            e();
            return u
          }, scrollboxSize: function () {
            e();
            return a
          }
        })
      })();

      function Ge(e, t, n) {
        var r, i, a, o, s = e.style;
        n = n || ze(e);
        if (n) {
          o = n.getPropertyValue(t) || n[t];
          "" !== o || k.contains(e.ownerDocument, e) || (o = k.style(e, t));
          if (!$.pixelBoxStyles() && Be.test(o) && We.test(t)) {
            r = s.width;
            i = s.minWidth;
            a = s.maxWidth;
            s.minWidth = s.maxWidth = s.width = o;
            o = n.width;
            s.width = r;
            s.minWidth = i;
            s.maxWidth = a
          }
        }
        return void 0 !== o ? o + "" : o
      }

      function Je(e, t) {
        return {
          get: function () {
            if (e()) {
              delete this.get;
              return
            }
            return (this.get = t).apply(this, arguments)
          }
        }
      }

      var Qe = /^(none|table(?!-c[ea]).+)/, Ye = /^--/,
        Ke = {position: "absolute", visibility: "hidden", display: "block"},
        Xe = {letterSpacing: "0", fontWeight: "400"}, Ze = ["Webkit", "Moz", "ms"], et = s.createElement("div").style;

      function tt(e) {
        if (e in et) return e;
        var t = e[0].toUpperCase() + e.slice(1), n = Ze.length;
        while (n--) {
          e = Ze[n] + t;
          if (e in et) return e
        }
      }

      function nt(e) {
        var t = k.cssProps[e];
        t || (t = k.cssProps[e] = tt(e) || e);
        return t
      }

      function rt(e, t, n) {
        var r = le.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
      }

      function it(e, t, n, r, i, a) {
        var o = "width" === t ? 1 : 0, s = 0, u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; o < 4; o += 2) {
          "margin" === n && (u += k.css(e, n + ce[o], true, i));
          if (r) {
            "content" === n && (u -= k.css(e, "padding" + ce[o], true, i));
            "margin" !== n && (u -= k.css(e, "border" + ce[o] + "Width", true, i))
          } else {
            u += k.css(e, "padding" + ce[o], true, i);
            "padding" !== n ? u += k.css(e, "border" + ce[o] + "Width", true, i) : s += k.css(e, "border" + ce[o] + "Width", true, i)
          }
        }
        !r && a >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - u - s - .5)));
        return u
      }

      function at(e, t, n) {
        var r = ze(e), i = Ge(e, t, r), a = "border-box" === k.css(e, "boxSizing", false, r), o = a;
        if (Be.test(i)) {
          if (!n) return i;
          i = "auto"
        }
        o = o && ($.boxSizingReliable() || i === e.style[t]);
        if ("auto" === i || !parseFloat(i) && "inline" === k.css(e, "display", false, r)) {
          i = e["offset" + t[0].toUpperCase() + t.slice(1)];
          o = true
        }
        i = parseFloat(i) || 0;
        return i + it(e, t, n || (a ? "border" : "content"), o, r, i) + "px"
      }

      k.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var n = Ge(e, "opacity");
                return "" === n ? "1" : n
              }
            }
          }
        },
        cssNumber: {
          animationIterationCount: true,
          columnCount: true,
          fillOpacity: true,
          flexGrow: true,
          flexShrink: true,
          fontWeight: true,
          lineHeight: true,
          opacity: true,
          order: true,
          orphans: true,
          widows: true,
          zIndex: true,
          zoom: true
        },
        cssProps: {},
        style: function (e, t, n, r) {
          if (!e || 3 === e.nodeType || 8 === e.nodeType || !e.style) return;
          var i, a, o, s = Z(t), u = Ye.test(t), l = e.style;
          u || (t = nt(s));
          o = k.cssHooks[t] || k.cssHooks[s];
          if (void 0 === n) {
            if (o && "get" in o && void 0 !== (i = o.get(e, false, r))) return i;
            return l[t]
          }
          a = typeof n;
          if ("string" === a && (i = le.exec(n)) && i[1]) {
            n = he(e, t, i);
            a = "number"
          }
          if (null == n || n !== n) return;
          "number" === a && (n += i && i[3] || (k.cssNumber[s] ? "" : "px"));
          $.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit");
          o && "set" in o && void 0 === (n = o.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n)
        },
        css: function (e, t, n, r) {
          var i, a, o, s = Z(t), u = Ye.test(t);
          u || (t = nt(s));
          o = k.cssHooks[t] || k.cssHooks[s];
          o && "get" in o && (i = o.get(e, true, n));
          void 0 === i && (i = Ge(e, t, r));
          "normal" === i && t in Xe && (i = Xe[t]);
          if ("" === n || n) {
            a = parseFloat(i);
            return true === n || isFinite(a) ? a || 0 : i
          }
          return i
        }
      });
      k.each(["height", "width"], function (e, t) {
        k.cssHooks[t] = {
          get: function (e, n, r) {
            if (n) return !Qe.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? at(e, t, r) : pe(e, Ke, function () {
              return at(e, t, r)
            })
          }, set: function (e, n, r) {
            var i, a = ze(e), o = "border-box" === k.css(e, "boxSizing", false, a), s = r && it(e, t, r, o, a);
            o && $.scrollboxSize() === a.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(a[t]) - it(e, t, "border", false, a) - .5));
            if (s && (i = le.exec(n)) && "px" !== (i[3] || "px")) {
              e.style[t] = n;
              n = k.css(e, t)
            }
            return rt(e, n, s)
          }
        }
      });
      k.cssHooks.marginLeft = Je($.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(Ge(e, "marginLeft")) || e.getBoundingClientRect().left - pe(e, {marginLeft: 0}, function () {
          return e.getBoundingClientRect().left
        })) + "px"
      });
      k.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        k.cssHooks[e + t] = {
          expand: function (n) {
            var r = 0, i = {}, a = "string" === typeof n ? n.split(" ") : [n];
            for (; r < 4; r++) i[e + ce[r] + t] = a[r] || a[r - 2] || a[0];
            return i
          }
        };
        "margin" !== e && (k.cssHooks[e + t].set = rt)
      });
      k.fn.extend({
        css: function (e, t) {
          return Q(this, function (e, t, n) {
            var r, i, a = {}, o = 0;
            if (Array.isArray(t)) {
              r = ze(e);
              i = t.length;
              for (; o < i; o++) a[t[o]] = k.css(e, t[o], false, r);
              return a
            }
            return void 0 !== n ? k.style(e, t, n) : k.css(e, t)
          }, e, t, arguments.length > 1)
        }
      });

      function ot(e, t, n, r, i) {
        return new ot.prototype.init(e, t, n, r, i)
      }

      k.Tween = ot;
      ot.prototype = {
        constructor: ot, init: function (e, t, n, r, i, a) {
          this.elem = e;
          this.prop = n;
          this.easing = i || k.easing._default;
          this.options = t;
          this.start = this.now = this.cur();
          this.end = r;
          this.unit = a || (k.cssNumber[n] ? "" : "px")
        }, cur: function () {
          var e = ot.propHooks[this.prop];
          return e && e.get ? e.get(this) : ot.propHooks._default.get(this)
        }, run: function (e) {
          var t, n = ot.propHooks[this.prop];
          this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e;
          this.now = (this.end - this.start) * t + this.start;
          this.options.step && this.options.step.call(this.elem, this.now, this);
          n && n.set ? n.set(this) : ot.propHooks._default.set(this);
          return this
        }
      };
      ot.prototype.init.prototype = ot.prototype;
      ot.propHooks = {
        _default: {
          get: function (e) {
            var t;
            if (1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop]) return e.elem[e.prop];
            t = k.css(e.elem, e.prop, "");
            return t && "auto" !== t ? t : 0
          }, set: function (e) {
            k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[k.cssProps[e.prop]] && !k.cssHooks[e.prop] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit)
          }
        }
      };
      ot.propHooks.scrollTop = ot.propHooks.scrollLeft = {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
      };
      k.easing = {
        linear: function (e) {
          return e
        }, swing: function (e) {
          return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
      };
      k.fx = ot.prototype.init;
      k.fx.step = {};
      var st, ut, lt = /^(?:toggle|show|hide)$/, ct = /queueHooks$/;

      function ft() {
        if (ut) {
          false === s.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ft) : n.setTimeout(ft, k.fx.interval);
          k.fx.tick()
        }
      }

      function pt() {
        n.setTimeout(function () {
          st = void 0
        });
        return st = Date.now()
      }

      function ht(e, t) {
        var n, r = 0, i = {height: e};
        t = t ? 1 : 0;
        for (; r < 4; r += 2 - t) {
          n = ce[r];
          i["margin" + n] = i["padding" + n] = e
        }
        t && (i.opacity = i.width = e);
        return i
      }

      function dt(e, t, n) {
        var r, i = (gt.tweeners[t] || []).concat(gt.tweeners["*"]), a = 0, o = i.length;
        for (; a < o; a++) if (r = i[a].call(n, t, e)) return r
      }

      function vt(e, t, n) {
        var r, i, a, o, s, u, l, c, f = "width" in t || "height" in t, p = this, h = {}, d = e.style,
          v = e.nodeType && fe(e), m = ne.get(e, "fxshow");
        if (!n.queue) {
          o = k._queueHooks(e, "fx");
          if (null == o.unqueued) {
            o.unqueued = 0;
            s = o.empty.fire;
            o.empty.fire = function () {
              o.unqueued || s()
            }
          }
          o.unqueued++;
          p.always(function () {
            p.always(function () {
              o.unqueued--;
              k.queue(e, "fx").length || o.empty.fire()
            })
          })
        }
        for (r in t) {
          i = t[r];
          if (lt.test(i)) {
            delete t[r];
            a = a || "toggle" === i;
            if (i === (v ? "hide" : "show")) {
              if ("show" !== i || !m || void 0 === m[r]) continue;
              v = true
            }
            h[r] = m && m[r] || k.style(e, r)
          }
        }
        u = !k.isEmptyObject(t);
        if (!u && k.isEmptyObject(h)) return;
        if (f && 1 === e.nodeType) {
          n.overflow = [d.overflow, d.overflowX, d.overflowY];
          l = m && m.display;
          null == l && (l = ne.get(e, "display"));
          c = k.css(e, "display");
          if ("none" === c) if (l) c = l; else {
            me([e], true);
            l = e.style.display || l;
            c = k.css(e, "display");
            me([e])
          }
          if (("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float")) {
            if (!u) {
              p.done(function () {
                d.display = l
              });
              if (null == l) {
                c = d.display;
                l = "none" === c ? "" : c
              }
            }
            d.display = "inline-block"
          }
        }
        if (n.overflow) {
          d.overflow = "hidden";
          p.always(function () {
            d.overflow = n.overflow[0];
            d.overflowX = n.overflow[1];
            d.overflowY = n.overflow[2]
          })
        }
        u = false;
        for (r in h) {
          if (!u) {
            m ? "hidden" in m && (v = m.hidden) : m = ne.access(e, "fxshow", {display: l});
            a && (m.hidden = !v);
            v && me([e], true);
            p.done(function () {
              v || me([e]);
              ne.remove(e, "fxshow");
              for (r in h) k.style(e, r, h[r])
            })
          }
          u = dt(v ? m[r] : 0, r, p);
          if (!(r in m)) {
            m[r] = u.start;
            if (v) {
              u.end = u.start;
              u.start = 0
            }
          }
        }
      }

      function mt(e, t) {
        var n, r, i, a, o;
        for (n in e) {
          r = Z(n);
          i = t[r];
          a = e[n];
          if (Array.isArray(a)) {
            i = a[1];
            a = e[n] = a[0]
          }
          if (n !== r) {
            e[r] = a;
            delete e[n]
          }
          o = k.cssHooks[r];
          if (o && "expand" in o) {
            a = o.expand(a);
            delete e[r];
            for (n in a) if (!(n in e)) {
              e[n] = a[n];
              t[n] = i
            }
          } else t[r] = i
        }
      }

      function gt(e, t, n) {
        var r, i, a = 0, o = gt.prefilters.length, s = k.Deferred().always(function () {
          delete u.elem
        }), u = function () {
          if (i) return false;
          var t = st || pt(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, a = 1 - r, o = 0,
            u = l.tweens.length;
          for (; o < u; o++) l.tweens[o].run(a);
          s.notifyWith(e, [l, a, n]);
          if (a < 1 && u) return n;
          u || s.notifyWith(e, [l, 1, 0]);
          s.resolveWith(e, [l]);
          return false
        }, l = s.promise({
          elem: e,
          props: k.extend({}, t),
          opts: k.extend(true, {specialEasing: {}, easing: k.easing._default}, n),
          originalProperties: t,
          originalOptions: n,
          startTime: st || pt(),
          duration: n.duration,
          tweens: [],
          createTween: function (t, n) {
            var r = k.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
            l.tweens.push(r);
            return r
          },
          stop: function (t) {
            var n = 0, r = t ? l.tweens.length : 0;
            if (i) return this;
            i = true;
            for (; n < r; n++) l.tweens[n].run(1);
            if (t) {
              s.notifyWith(e, [l, 1, 0]);
              s.resolveWith(e, [l, t])
            } else s.rejectWith(e, [l, t]);
            return this
          }
        }), c = l.props;
        mt(c, l.opts.specialEasing);
        for (; a < o; a++) {
          r = gt.prefilters[a].call(l, e, c, l.opts);
          if (r) {
            y(r.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r));
            return r
          }
        }
        k.map(c, dt, l);
        y(l.opts.start) && l.opts.start.call(e, l);
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always);
        k.fx.timer(k.extend(u, {elem: e, anim: l, queue: l.opts.queue}));
        return l
      }

      k.Animation = k.extend(gt, {
        tweeners: {
          "*": [function (e, t) {
            var n = this.createTween(e, t);
            he(n.elem, e, le.exec(t), n);
            return n
          }]
        }, tweener: function (e, t) {
          if (y(e)) {
            t = e;
            e = ["*"]
          } else e = e.match(F);
          var n, r = 0, i = e.length;
          for (; r < i; r++) {
            n = e[r];
            gt.tweeners[n] = gt.tweeners[n] || [];
            gt.tweeners[n].unshift(t)
          }
        }, prefilters: [vt], prefilter: function (e, t) {
          t ? gt.prefilters.unshift(e) : gt.prefilters.push(e)
        }
      });
      k.speed = function (e, t, n) {
        var r = e && "object" === typeof e ? k.extend({}, e) : {
          complete: n || !n && t || y(e) && e,
          duration: e,
          easing: n && t || t && !y(t) && t
        };
        k.fx.off ? r.duration = 0 : "number" !== typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default);
        null != r.queue && true !== r.queue || (r.queue = "fx");
        r.old = r.complete;
        r.complete = function () {
          y(r.old) && r.old.call(this);
          r.queue && k.dequeue(this, r.queue)
        };
        return r
      };
      k.fn.extend({
        fadeTo: function (e, t, n, r) {
          return this.filter(fe).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (e, t, n, r) {
          var i = k.isEmptyObject(e), a = k.speed(t, n, r), o = function () {
            var t = gt(this, k.extend({}, e), a);
            (i || ne.get(this, "finish")) && t.stop(true)
          };
          o.finish = o;
          return i || false === a.queue ? this.each(o) : this.queue(a.queue, o)
        }, stop: function (e, t, n) {
          var r = function (e) {
            var t = e.stop;
            delete e.stop;
            t(n)
          };
          if ("string" !== typeof e) {
            n = t;
            t = e;
            e = void 0
          }
          t && false !== e && this.queue(e || "fx", []);
          return this.each(function () {
            var t = true, i = null != e && e + "queueHooks", a = k.timers, o = ne.get(this);
            if (i) o[i] && o[i].stop && r(o[i]); else for (i in o) o[i] && o[i].stop && ct.test(i) && r(o[i]);
            for (i = a.length; i--;) if (a[i].elem === this && (null == e || a[i].queue === e)) {
              a[i].anim.stop(n);
              t = false;
              a.splice(i, 1)
            }
            !t && n || k.dequeue(this, e)
          })
        }, finish: function (e) {
          false !== e && (e = e || "fx");
          return this.each(function () {
            var t, n = ne.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], a = k.timers, o = r ? r.length : 0;
            n.finish = true;
            k.queue(this, e, []);
            i && i.stop && i.stop.call(this, true);
            for (t = a.length; t--;) if (a[t].elem === this && a[t].queue === e) {
              a[t].anim.stop(true);
              a.splice(t, 1)
            }
            for (t = 0; t < o; t++) r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish
          })
        }
      });
      k.each(["toggle", "show", "hide"], function (e, t) {
        var n = k.fn[t];
        k.fn[t] = function (e, r, i) {
          return null == e || "boolean" === typeof e ? n.apply(this, arguments) : this.animate(ht(t, true), e, r, i)
        }
      });
      k.each({
        slideDown: ht("show"),
        slideUp: ht("hide"),
        slideToggle: ht("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
      }, function (e, t) {
        k.fn[e] = function (e, n, r) {
          return this.animate(t, e, n, r)
        }
      });
      k.timers = [];
      k.fx.tick = function () {
        var e, t = 0, n = k.timers;
        st = Date.now();
        for (; t < n.length; t++) {
          e = n[t];
          e() || n[t] !== e || n.splice(t--, 1)
        }
        n.length || k.fx.stop();
        st = void 0
      };
      k.fx.timer = function (e) {
        k.timers.push(e);
        k.fx.start()
      };
      k.fx.interval = 13;
      k.fx.start = function () {
        if (ut) return;
        ut = true;
        ft()
      };
      k.fx.stop = function () {
        ut = null
      };
      k.fx.speeds = {slow: 600, fast: 200, _default: 400};
      k.fn.delay = function (e, t) {
        e = k.fx && k.fx.speeds[e] || e;
        t = t || "fx";
        return this.queue(t, function (t, r) {
          var i = n.setTimeout(t, e);
          r.stop = function () {
            n.clearTimeout(i)
          }
        })
      };
      (function () {
        var e = s.createElement("input"), t = s.createElement("select"), n = t.appendChild(s.createElement("option"));
        e.type = "checkbox";
        $.checkOn = "" !== e.value;
        $.optSelected = n.selected;
        e = s.createElement("input");
        e.value = "t";
        e.type = "radio";
        $.radioValue = "t" === e.value
      })();
      var $t, yt = k.expr.attrHandle;
      k.fn.extend({
        attr: function (e, t) {
          return Q(this, k.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
          return this.each(function () {
            k.removeAttr(this, e)
          })
        }
      });
      k.extend({
        attr: function (e, t, n) {
          var r, i, a = e.nodeType;
          if (3 === a || 8 === a || 2 === a) return;
          if ("undefined" === typeof e.getAttribute) return k.prop(e, t, n);
          1 === a && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? $t : void 0));
          if (void 0 !== n) {
            if (null === n) {
              k.removeAttr(e, t);
              return
            }
            if (i && "set" in i && void 0 !== (r = i.set(e, n, t))) return r;
            e.setAttribute(t, n + "");
            return n
          }
          if (i && "get" in i && null !== (r = i.get(e, t))) return r;
          r = k.find.attr(e, t);
          return null == r ? void 0 : r
        }, attrHooks: {
          type: {
            set: function (e, t) {
              if (!$.radioValue && "radio" === t && D(e, "input")) {
                var n = e.value;
                e.setAttribute("type", t);
                n && (e.value = n);
                return t
              }
            }
          }
        }, removeAttr: function (e, t) {
          var n, r = 0, i = t && t.match(F);
          if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n)
        }
      });
      $t = {
        set: function (e, t, n) {
          false === t ? k.removeAttr(e, n) : e.setAttribute(n, n);
          return n
        }
      };
      k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = yt[t] || k.find.attr;
        yt[t] = function (e, t, r) {
          var i, a, o = t.toLowerCase();
          if (!r) {
            a = yt[o];
            yt[o] = i;
            i = null != n(e, t, r) ? o : null;
            yt[o] = a
          }
          return i
        }
      });
      var bt = /^(?:input|select|textarea|button)$/i, wt = /^(?:a|area)$/i;
      k.fn.extend({
        prop: function (e, t) {
          return Q(this, k.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
          return this.each(function () {
            delete this[k.propFix[e] || e]
          })
        }
      });
      k.extend({
        prop: function (e, t, n) {
          var r, i, a = e.nodeType;
          if (3 === a || 8 === a || 2 === a) return;
          if (1 !== a || !k.isXMLDoc(e)) {
            t = k.propFix[t] || t;
            i = k.propHooks[t]
          }
          if (void 0 !== n) {
            if (i && "set" in i && void 0 !== (r = i.set(e, n, t))) return r;
            return e[t] = n
          }
          if (i && "get" in i && null !== (r = i.get(e, t))) return r;
          return e[t]
        }, propHooks: {
          tabIndex: {
            get: function (e) {
              var t = k.find.attr(e, "tabindex");
              if (t) return parseInt(t, 10);
              if (bt.test(e.nodeName) || wt.test(e.nodeName) && e.href) return 0;
              return -1
            }
          }
        }, propFix: {for: "htmlFor", class: "className"}
      });
      $.optSelected || (k.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          t && t.parentNode && t.parentNode.selectedIndex;
          return null
        }, set: function (e) {
          var t = e.parentNode;
          if (t) {
            t.selectedIndex;
            t.parentNode && t.parentNode.selectedIndex
          }
        }
      });
      k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        k.propFix[this.toLowerCase()] = this
      });

      function xt(e) {
        var t = e.match(F) || [];
        return t.join(" ")
      }

      function Ct(e) {
        return e.getAttribute && e.getAttribute("class") || ""
      }

      function Et(e) {
        if (Array.isArray(e)) return e;
        if ("string" === typeof e) return e.match(F) || [];
        return []
      }

      k.fn.extend({
        addClass: function (e) {
          var t, n, r, i, a, o, s, u = 0;
          if (y(e)) return this.each(function (t) {
            k(this).addClass(e.call(this, t, Ct(this)))
          });
          t = Et(e);
          if (t.length) while (n = this[u++]) {
            i = Ct(n);
            r = 1 === n.nodeType && " " + xt(i) + " ";
            if (r) {
              o = 0;
              while (a = t[o++]) r.indexOf(" " + a + " ") < 0 && (r += a + " ");
              s = xt(r);
              i !== s && n.setAttribute("class", s)
            }
          }
          return this
        }, removeClass: function (e) {
          var t, n, r, i, a, o, s, u = 0;
          if (y(e)) return this.each(function (t) {
            k(this).removeClass(e.call(this, t, Ct(this)))
          });
          if (!arguments.length) return this.attr("class", "");
          t = Et(e);
          if (t.length) while (n = this[u++]) {
            i = Ct(n);
            r = 1 === n.nodeType && " " + xt(i) + " ";
            if (r) {
              o = 0;
              while (a = t[o++]) while (r.indexOf(" " + a + " ") > -1) r = r.replace(" " + a + " ", " ");
              s = xt(r);
              i !== s && n.setAttribute("class", s)
            }
          }
          return this
        }, toggleClass: function (e, t) {
          var n = typeof e, r = "string" === n || Array.isArray(e);
          if ("boolean" === typeof t && r) return t ? this.addClass(e) : this.removeClass(e);
          if (y(e)) return this.each(function (n) {
            k(this).toggleClass(e.call(this, n, Ct(this), t), t)
          });
          return this.each(function () {
            var t, i, a, o;
            if (r) {
              i = 0;
              a = k(this);
              o = Et(e);
              while (t = o[i++]) a.hasClass(t) ? a.removeClass(t) : a.addClass(t)
            } else if (void 0 === e || "boolean" === n) {
              t = Ct(this);
              t && ne.set(this, "__className__", t);
              this.setAttribute && this.setAttribute("class", t || false === e ? "" : ne.get(this, "__className__") || "")
            }
          })
        }, hasClass: function (e) {
          var t, n, r = 0;
          t = " " + e + " ";
          while (n = this[r++]) if (1 === n.nodeType && (" " + xt(Ct(n)) + " ").indexOf(t) > -1) return true;
          return false
        }
      });
      var kt = /\r/g;
      k.fn.extend({
        val: function (e) {
          var t, n, r, i = this[0];
          if (!arguments.length) {
            if (i) {
              t = k.valHooks[i.type] || k.valHooks[i.nodeName.toLowerCase()];
              if (t && "get" in t && void 0 !== (n = t.get(i, "value"))) return n;
              n = i.value;
              if ("string" === typeof n) return n.replace(kt, "");
              return null == n ? "" : n
            }
            return
          }
          r = y(e);
          return this.each(function (n) {
            var i;
            if (1 !== this.nodeType) return;
            i = r ? e.call(this, n, k(this).val()) : e;
            null == i ? i = "" : "number" === typeof i ? i += "" : Array.isArray(i) && (i = k.map(i, function (e) {
              return null == e ? "" : e + ""
            }));
            t = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()];
            t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i)
          })
        }
      });
      k.extend({
        valHooks: {
          option: {
            get: function (e) {
              var t = k.find.attr(e, "value");
              return null != t ? t : xt(k.text(e))
            }
          }, select: {
            get: function (e) {
              var t, n, r, i = e.options, a = e.selectedIndex, o = "select-one" === e.type, s = o ? null : [],
                u = o ? a + 1 : i.length;
              r = a < 0 ? u : o ? a : 0;
              for (; r < u; r++) {
                n = i[r];
                if ((n.selected || r === a) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
                  t = k(n).val();
                  if (o) return t;
                  s.push(t)
                }
              }
              return s
            }, set: function (e, t) {
              var n, r, i = e.options, a = k.makeArray(t), o = i.length;
              while (o--) {
                r = i[o];
                (r.selected = k.inArray(k.valHooks.option.get(r), a) > -1) && (n = true)
              }
              n || (e.selectedIndex = -1);
              return a
            }
          }
        }
      });
      k.each(["radio", "checkbox"], function () {
        k.valHooks[this] = {
          set: function (e, t) {
            if (Array.isArray(t)) return e.checked = k.inArray(k(e).val(), t) > -1
          }
        };
        $.checkOn || (k.valHooks[this].get = function (e) {
          return null === e.getAttribute("value") ? "on" : e.value
        })
      });
      $.focusin = "onfocusin" in n;
      var St = /^(?:focusinfocus|focusoutblur)$/, At = function (e) {
        e.stopPropagation()
      };
      k.extend(k.event, {
        trigger: function (e, t, r, i) {
          var a, o, u, l, c, f, p, h, d = [r || s], m = v.call(e, "type") ? e.type : e,
            g = v.call(e, "namespace") ? e.namespace.split(".") : [];
          o = h = u = r = r || s;
          if (3 === r.nodeType || 8 === r.nodeType) return;
          if (St.test(m + k.event.triggered)) return;
          if (m.indexOf(".") > -1) {
            g = m.split(".");
            m = g.shift();
            g.sort()
          }
          c = m.indexOf(":") < 0 && "on" + m;
          e = e[k.expando] ? e : new k.Event(m, "object" === typeof e && e);
          e.isTrigger = i ? 2 : 3;
          e.namespace = g.join(".");
          e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
          e.result = void 0;
          e.target || (e.target = r);
          t = null == t ? [e] : k.makeArray(t, [e]);
          p = k.event.special[m] || {};
          if (!i && p.trigger && false === p.trigger.apply(r, t)) return;
          if (!i && !p.noBubble && !b(r)) {
            l = p.delegateType || m;
            St.test(l + m) || (o = o.parentNode);
            for (; o; o = o.parentNode) {
              d.push(o);
              u = o
            }
            u === (r.ownerDocument || s) && d.push(u.defaultView || u.parentWindow || n)
          }
          a = 0;
          while ((o = d[a++]) && !e.isPropagationStopped()) {
            h = o;
            e.type = a > 1 ? l : p.bindType || m;
            f = (ne.get(o, "events") || {})[e.type] && ne.get(o, "handle");
            f && f.apply(o, t);
            f = c && o[c];
            if (f && f.apply && ee(o)) {
              e.result = f.apply(o, t);
              false === e.result && e.preventDefault()
            }
          }
          e.type = m;
          if (!i && !e.isDefaultPrevented() && (!p._default || false === p._default.apply(d.pop(), t)) && ee(r) && c && y(r[m]) && !b(r)) {
            u = r[c];
            u && (r[c] = null);
            k.event.triggered = m;
            e.isPropagationStopped() && h.addEventListener(m, At);
            r[m]();
            e.isPropagationStopped() && h.removeEventListener(m, At);
            k.event.triggered = void 0;
            u && (r[c] = u)
          }
          return e.result
        }, simulate: function (e, t, n) {
          var r = k.extend(new k.Event, n, {type: e, isSimulated: true});
          k.event.trigger(r, null, t)
        }
      });
      k.fn.extend({
        trigger: function (e, t) {
          return this.each(function () {
            k.event.trigger(e, t, this)
          })
        }, triggerHandler: function (e, t) {
          var n = this[0];
          if (n) return k.event.trigger(e, t, n, true)
        }
      });
      $.focusin || k.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = function (e) {
          k.event.simulate(t, e.target, k.event.fix(e))
        };
        k.event.special[t] = {
          setup: function () {
            var r = this.ownerDocument || this, i = ne.access(r, t);
            i || r.addEventListener(e, n, true);
            ne.access(r, t, (i || 0) + 1)
          }, teardown: function () {
            var r = this.ownerDocument || this, i = ne.access(r, t) - 1;
            if (i) ne.access(r, t, i); else {
              r.removeEventListener(e, n, true);
              ne.remove(r, t)
            }
          }
        }
      });
      var Tt = n.location;
      var Ot = Date.now();
      var jt = /\?/;
      k.parseXML = function (e) {
        var t;
        if (!e || "string" !== typeof e) return null;
        try {
          t = (new n.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
          t = void 0
        }
        t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e);
        return t
      };
      var Mt = /\[\]$/, Dt = /\r?\n/g, Nt = /^(?:submit|button|image|reset|file)$/i,
        qt = /^(?:input|select|textarea|keygen)/i;

      function Pt(e, t, n, r) {
        var i;
        if (Array.isArray(t)) k.each(t, function (t, i) {
          n || Mt.test(e) ? r(e, i) : Pt(e + "[" + ("object" === typeof i && null != i ? t : "") + "]", i, n, r)
        }); else if (n || "object" !== C(t)) r(e, t); else for (i in t) Pt(e + "[" + i + "]", t[i], n, r)
      }

      k.param = function (e, t) {
        var n, r = [], i = function (e, t) {
          var n = y(t) ? t() : t;
          r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function () {
          i(this.name, this.value)
        }); else for (n in e) Pt(n, e[n], t, i);
        return r.join("&")
      };
      k.fn.extend({
        serialize: function () {
          return k.param(this.serializeArray())
        }, serializeArray: function () {
          return this.map(function () {
            var e = k.prop(this, "elements");
            return e ? k.makeArray(e) : this
          }).filter(function () {
            var e = this.type;
            return this.name && !k(this).is(":disabled") && qt.test(this.nodeName) && !Nt.test(e) && (this.checked || !ge.test(e))
          }).map(function (e, t) {
            var n = k(this).val();
            if (null == n) return null;
            if (Array.isArray(n)) return k.map(n, function (e) {
              return {name: t.name, value: e.replace(Dt, "\r\n")}
            });
            return {name: t.name, value: n.replace(Dt, "\r\n")}
          }).get()
        }
      });
      var _t = /%20/g, Rt = /#.*$/, Lt = /([?&])_=[^&]*/, It = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Vt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ft = /^(?:GET|HEAD)$/, Ut = /^\/\//, Ht = {},
        Bt = {}, zt = "*/".concat("*"), Wt = s.createElement("a");
      Wt.href = Tt.href;

      function Gt(e) {
        return function (t, n) {
          if ("string" !== typeof t) {
            n = t;
            t = "*"
          }
          var r, i = 0, a = t.toLowerCase().match(F) || [];
          if (y(n)) while (r = a[i++]) if ("+" === r[0]) {
            r = r.slice(1) || "*";
            (e[r] = e[r] || []).unshift(n)
          } else (e[r] = e[r] || []).push(n)
        }
      }

      function Jt(e, t, n, r) {
        var i = {}, a = e === Bt;

        function o(s) {
          var u;
          i[s] = true;
          k.each(e[s] || [], function (e, s) {
            var l = s(t, n, r);
            if ("string" === typeof l && !a && !i[l]) {
              t.dataTypes.unshift(l);
              o(l);
              return false
            }
            if (a) return !(u = l)
          });
          return u
        }

        return o(t.dataTypes[0]) || !i["*"] && o("*")
      }

      function Qt(e, t) {
        var n, r, i = k.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        r && k.extend(true, e, r);
        return e
      }

      function Yt(e, t, n) {
        var r, i, a, o, s = e.contents, u = e.dataTypes;
        while ("*" === u[0]) {
          u.shift();
          void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"))
        }
        if (r) for (i in s) if (s[i] && s[i].test(r)) {
          u.unshift(i);
          break
        }
        if (u[0] in n) a = u[0]; else {
          for (i in n) {
            if (!u[0] || e.converters[i + " " + u[0]]) {
              a = i;
              break
            }
            o || (o = i)
          }
          a = a || o
        }
        if (a) {
          a !== u[0] && u.unshift(a);
          return n[a]
        }
      }

      function Kt(e, t, n, r) {
        var i, a, o, s, u, l = {}, c = e.dataTypes.slice();
        if (c[1]) for (o in e.converters) l[o.toLowerCase()] = e.converters[o];
        a = c.shift();
        while (a) {
          e.responseFields[a] && (n[e.responseFields[a]] = t);
          !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType));
          u = a;
          a = c.shift();
          if (a) if ("*" === a) a = u; else if ("*" !== u && u !== a) {
            o = l[u + " " + a] || l["* " + a];
            if (!o) for (i in l) {
              s = i.split(" ");
              if (s[1] === a) {
                o = l[u + " " + s[0]] || l["* " + s[0]];
                if (o) {
                  if (true === o) o = l[i]; else if (true !== l[i]) {
                    a = s[0];
                    c.unshift(s[1])
                  }
                  break
                }
              }
            }
            if (true !== o) if (o && e.throws) t = o(t); else try {
              t = o(t)
            } catch (e) {
              return {state: "parsererror", error: o ? e : "No conversion from " + u + " to " + a}
            }
          }
        }
        return {state: "success", data: t}
      }

      k.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: Tt.href,
          type: "GET",
          isLocal: Vt.test(Tt.protocol),
          global: true,
          processData: true,
          async: true,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": zt,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
          },
          contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
          responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
          converters: {"* text": String, "text html": true, "text json": JSON.parse, "text xml": k.parseXML},
          flatOptions: {url: true, context: true}
        },
        ajaxSetup: function (e, t) {
          return t ? Qt(Qt(e, k.ajaxSettings), t) : Qt(k.ajaxSettings, e)
        },
        ajaxPrefilter: Gt(Ht),
        ajaxTransport: Gt(Bt),
        ajax: function (e, t) {
          if ("object" === typeof e) {
            t = e;
            e = void 0
          }
          t = t || {};
          var r, i, a, o, u, l, c, f, p, h, d = k.ajaxSetup({}, t), v = d.context || d,
            m = d.context && (v.nodeType || v.jquery) ? k(v) : k.event, g = k.Deferred(),
            $ = k.Callbacks("once memory"), y = d.statusCode || {}, b = {}, w = {}, x = "canceled", C = {
              readyState: 0, getResponseHeader: function (e) {
                var t;
                if (c) {
                  if (!o) {
                    o = {};
                    while (t = It.exec(a)) o[t[1].toLowerCase()] = t[2]
                  }
                  t = o[e.toLowerCase()]
                }
                return null == t ? null : t
              }, getAllResponseHeaders: function () {
                return c ? a : null
              }, setRequestHeader: function (e, t) {
                if (null == c) {
                  e = w[e.toLowerCase()] = w[e.toLowerCase()] || e;
                  b[e] = t
                }
                return this
              }, overrideMimeType: function (e) {
                null == c && (d.mimeType = e);
                return this
              }, statusCode: function (e) {
                var t;
                if (e) if (c) C.always(e[C.status]); else for (t in e) y[t] = [y[t], e[t]];
                return this
              }, abort: function (e) {
                var t = e || x;
                r && r.abort(t);
                E(0, t);
                return this
              }
            };
          g.promise(C);
          d.url = ((e || d.url || Tt.href) + "").replace(Ut, Tt.protocol + "//");
          d.type = t.method || t.type || d.method || d.type;
          d.dataTypes = (d.dataType || "*").toLowerCase().match(F) || [""];
          if (null == d.crossDomain) {
            l = s.createElement("a");
            try {
              l.href = d.url;
              l.href = l.href;
              d.crossDomain = Wt.protocol + "//" + Wt.host !== l.protocol + "//" + l.host
            } catch (e) {
              d.crossDomain = true
            }
          }
          d.data && d.processData && "string" !== typeof d.data && (d.data = k.param(d.data, d.traditional));
          Jt(Ht, d, t, C);
          if (c) return C;
          f = k.event && d.global;
          f && 0 === k.active++ && k.event.trigger("ajaxStart");
          d.type = d.type.toUpperCase();
          d.hasContent = !Ft.test(d.type);
          i = d.url.replace(Rt, "");
          if (d.hasContent) d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(_t, "+")); else {
            h = d.url.slice(i.length);
            if (d.data && (d.processData || "string" === typeof d.data)) {
              i += (jt.test(i) ? "&" : "?") + d.data;
              delete d.data
            }
            if (false === d.cache) {
              i = i.replace(Lt, "$1");
              h = (jt.test(i) ? "&" : "?") + "_=" + Ot++ + h
            }
            d.url = i + h
          }
          if (d.ifModified) {
            k.lastModified[i] && C.setRequestHeader("If-Modified-Since", k.lastModified[i]);
            k.etag[i] && C.setRequestHeader("If-None-Match", k.etag[i])
          }
          (d.data && d.hasContent && false !== d.contentType || t.contentType) && C.setRequestHeader("Content-Type", d.contentType);
          C.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : d.accepts["*"]);
          for (p in d.headers) C.setRequestHeader(p, d.headers[p]);
          if (d.beforeSend && (false === d.beforeSend.call(v, C, d) || c)) return C.abort();
          x = "abort";
          $.add(d.complete);
          C.done(d.success);
          C.fail(d.error);
          r = Jt(Bt, d, t, C);
          if (r) {
            C.readyState = 1;
            f && m.trigger("ajaxSend", [C, d]);
            if (c) return C;
            d.async && d.timeout > 0 && (u = n.setTimeout(function () {
              C.abort("timeout")
            }, d.timeout));
            try {
              c = false;
              r.send(b, E)
            } catch (e) {
              if (c) throw e;
              E(-1, e)
            }
          } else E(-1, "No Transport");

          function E(e, t, o, s) {
            var l, p, h, b, w, x = t;
            if (c) return;
            c = true;
            u && n.clearTimeout(u);
            r = void 0;
            a = s || "";
            C.readyState = e > 0 ? 4 : 0;
            l = e >= 200 && e < 300 || 304 === e;
            o && (b = Yt(d, C, o));
            b = Kt(d, b, C, l);
            if (l) {
              if (d.ifModified) {
                w = C.getResponseHeader("Last-Modified");
                w && (k.lastModified[i] = w);
                w = C.getResponseHeader("etag");
                w && (k.etag[i] = w)
              }
              if (204 === e || "HEAD" === d.type) x = "nocontent"; else if (304 === e) x = "notmodified"; else {
                x = b.state;
                p = b.data;
                h = b.error;
                l = !h
              }
            } else {
              h = x;
              if (e || !x) {
                x = "error";
                e < 0 && (e = 0)
              }
            }
            C.status = e;
            C.statusText = (t || x) + "";
            l ? g.resolveWith(v, [p, x, C]) : g.rejectWith(v, [C, x, h]);
            C.statusCode(y);
            y = void 0;
            f && m.trigger(l ? "ajaxSuccess" : "ajaxError", [C, d, l ? p : h]);
            $.fireWith(v, [C, x]);
            if (f) {
              m.trigger("ajaxComplete", [C, d]);
              --k.active || k.event.trigger("ajaxStop")
            }
          }

          return C
        },
        getJSON: function (e, t, n) {
          return k.get(e, t, n, "json")
        },
        getScript: function (e, t) {
          return k.get(e, void 0, t, "script")
        }
      });
      k.each(["get", "post"], function (e, t) {
        k[t] = function (e, n, r, i) {
          if (y(n)) {
            i = i || r;
            r = n;
            n = void 0
          }
          return k.ajax(k.extend({url: e, type: t, dataType: i, data: n, success: r}, k.isPlainObject(e) && e))
        }
      });
      k._evalUrl = function (e) {
        return k.ajax({url: e, type: "GET", dataType: "script", cache: true, async: false, global: false, throws: true})
      };
      k.fn.extend({
        wrapAll: function (e) {
          var t;
          if (this[0]) {
            y(e) && (e = e.call(this[0]));
            t = k(e, this[0].ownerDocument).eq(0).clone(true);
            this[0].parentNode && t.insertBefore(this[0]);
            t.map(function () {
              var e = this;
              while (e.firstElementChild) e = e.firstElementChild;
              return e
            }).append(this)
          }
          return this
        }, wrapInner: function (e) {
          if (y(e)) return this.each(function (t) {
            k(this).wrapInner(e.call(this, t))
          });
          return this.each(function () {
            var t = k(this), n = t.contents();
            n.length ? n.wrapAll(e) : t.append(e)
          })
        }, wrap: function (e) {
          var t = y(e);
          return this.each(function (n) {
            k(this).wrapAll(t ? e.call(this, n) : e)
          })
        }, unwrap: function (e) {
          this.parent(e).not("body").each(function () {
            k(this).replaceWith(this.childNodes)
          });
          return this
        }
      });
      k.expr.pseudos.hidden = function (e) {
        return !k.expr.pseudos.visible(e)
      };
      k.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
      };
      k.ajaxSettings.xhr = function () {
        try {
          return new n.XMLHttpRequest
        } catch (e) {
        }
      };
      var Xt = {0: 200, 1223: 204}, Zt = k.ajaxSettings.xhr();
      $.cors = !!Zt && "withCredentials" in Zt;
      $.ajax = Zt = !!Zt;
      k.ajaxTransport(function (e) {
        var t, r;
        if ($.cors || Zt && !e.crossDomain) return {
          send: function (i, a) {
            var o, s = e.xhr();
            s.open(e.type, e.url, e.async, e.username, e.password);
            if (e.xhrFields) for (o in e.xhrFields) s[o] = e.xhrFields[o];
            e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType);
            e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
            for (o in i) s.setRequestHeader(o, i[o]);
            t = function (e) {
              return function () {
                if (t) {
                  t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null;
                  "abort" === e ? s.abort() : "error" === e ? "number" !== typeof s.status ? a(0, "error") : a(s.status, s.statusText) : a(Xt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" !== typeof s.responseText ? {binary: s.response} : {text: s.responseText}, s.getAllResponseHeaders())
                }
              }
            };
            s.onload = t();
            r = s.onerror = s.ontimeout = t("error");
            void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
              4 === s.readyState && n.setTimeout(function () {
                t && r()
              })
            };
            t = t("abort");
            try {
              s.send(e.hasContent && e.data || null)
            } catch (e) {
              if (t) throw e
            }
          }, abort: function () {
            t && t()
          }
        }
      });
      k.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = false)
      });
      k.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
          "text script": function (e) {
            k.globalEval(e);
            return e
          }
        }
      });
      k.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = false);
        e.crossDomain && (e.type = "GET")
      });
      k.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
          var t, n;
          return {
            send: function (r, i) {
              t = k("<script>").prop({charset: e.scriptCharset, src: e.url}).on("load error", n = function (e) {
                t.remove();
                n = null;
                e && i("error" === e.type ? 404 : 200, e.type)
              });
              s.head.appendChild(t[0])
            }, abort: function () {
              n && n()
            }
          }
        }
      });
      var en = [], tn = /(=)\?(?=&|$)|\?\?/;
      k.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
          var e = en.pop() || k.expando + "_" + Ot++;
          this[e] = true;
          return e
        }
      });
      k.ajaxPrefilter("json jsonp", function (e, t, r) {
        var i, a, o,
          s = false !== e.jsonp && (tn.test(e.url) ? "url" : "string" === typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0]) {
          i = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback;
          s ? e[s] = e[s].replace(tn, "$1" + i) : false !== e.jsonp && (e.url += (jt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i);
          e.converters["script json"] = function () {
            o || k.error(i + " was not called");
            return o[0]
          };
          e.dataTypes[0] = "json";
          a = n[i];
          n[i] = function () {
            o = arguments
          };
          r.always(function () {
            void 0 === a ? k(n).removeProp(i) : n[i] = a;
            if (e[i]) {
              e.jsonpCallback = t.jsonpCallback;
              en.push(i)
            }
            o && y(a) && a(o[0]);
            o = a = void 0
          });
          return "script"
        }
      });
      $.createHTMLDocument = function () {
        var e = s.implementation.createHTMLDocument("").body;
        e.innerHTML = "<form></form><form></form>";
        return 2 === e.childNodes.length
      }();
      k.parseHTML = function (e, t, n) {
        if ("string" !== typeof e) return [];
        if ("boolean" === typeof t) {
          n = t;
          t = false
        }
        var r, i, a;
        if (!t) if ($.createHTMLDocument) {
          t = s.implementation.createHTMLDocument("");
          r = t.createElement("base");
          r.href = s.location.href;
          t.head.appendChild(r)
        } else t = s;
        i = N.exec(e);
        a = !n && [];
        if (i) return [t.createElement(i[1])];
        i = Ee([e], t, a);
        a && a.length && k(a).remove();
        return k.merge([], i.childNodes)
      };
      k.fn.load = function (e, t, n) {
        var r, i, a, o = this, s = e.indexOf(" ");
        if (s > -1) {
          r = xt(e.slice(s));
          e = e.slice(0, s)
        }
        if (y(t)) {
          n = t;
          t = void 0
        } else t && "object" === typeof t && (i = "POST");
        o.length > 0 && k.ajax({url: e, type: i || "GET", dataType: "html", data: t}).done(function (e) {
          a = arguments;
          o.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
          o.each(function () {
            n.apply(this, a || [e.responseText, t, e])
          })
        });
        return this
      };
      k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        k.fn[t] = function (e) {
          return this.on(t, e)
        }
      });
      k.expr.pseudos.animated = function (e) {
        return k.grep(k.timers, function (t) {
          return e === t.elem
        }).length
      };
      k.offset = {
        setOffset: function (e, t, n) {
          var r, i, a, o, s, u, l, c = k.css(e, "position"), f = k(e), p = {};
          "static" === c && (e.style.position = "relative");
          s = f.offset();
          a = k.css(e, "top");
          u = k.css(e, "left");
          l = ("absolute" === c || "fixed" === c) && (a + u).indexOf("auto") > -1;
          if (l) {
            r = f.position();
            o = r.top;
            i = r.left
          } else {
            o = parseFloat(a) || 0;
            i = parseFloat(u) || 0
          }
          y(t) && (t = t.call(e, n, k.extend({}, s)));
          null != t.top && (p.top = t.top - s.top + o);
          null != t.left && (p.left = t.left - s.left + i);
          "using" in t ? t.using.call(e, p) : f.css(p)
        }
      };
      k.fn.extend({
        offset: function (e) {
          if (arguments.length) return void 0 === e ? this : this.each(function (t) {
            k.offset.setOffset(this, e, t)
          });
          var t, n, r = this[0];
          if (!r) return;
          if (!r.getClientRects().length) return {top: 0, left: 0};
          t = r.getBoundingClientRect();
          n = r.ownerDocument.defaultView;
          return {top: t.top + n.pageYOffset, left: t.left + n.pageXOffset}
        }, position: function () {
          if (!this[0]) return;
          var e, t, n, r = this[0], i = {top: 0, left: 0};
          if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect(); else {
            t = this.offset();
            n = r.ownerDocument;
            e = r.offsetParent || n.documentElement;
            while (e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position")) e = e.parentNode;
            if (e && e !== r && 1 === e.nodeType) {
              i = k(e).offset();
              i.top += k.css(e, "borderTopWidth", true);
              i.left += k.css(e, "borderLeftWidth", true)
            }
          }
          return {
            top: t.top - i.top - k.css(r, "marginTop", true),
            left: t.left - i.left - k.css(r, "marginLeft", true)
          }
        }, offsetParent: function () {
          return this.map(function () {
            var e = this.offsetParent;
            while (e && "static" === k.css(e, "position")) e = e.offsetParent;
            return e || ke
          })
        }
      });
      k.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
        var n = "pageYOffset" === t;
        k.fn[e] = function (r) {
          return Q(this, function (e, r, i) {
            var a;
            b(e) ? a = e : 9 === e.nodeType && (a = e.defaultView);
            if (void 0 === i) return a ? a[t] : e[r];
            a ? a.scrollTo(n ? a.pageXOffset : i, n ? i : a.pageYOffset) : e[r] = i
          }, e, r, arguments.length)
        }
      });
      k.each(["top", "left"], function (e, t) {
        k.cssHooks[t] = Je($.pixelPosition, function (e, n) {
          if (n) {
            n = Ge(e, t);
            return Be.test(n) ? k(e).position()[t] + "px" : n
          }
        })
      });
      k.each({Height: "height", Width: "width"}, function (e, t) {
        k.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, r) {
          k.fn[r] = function (i, a) {
            var o = arguments.length && (n || "boolean" !== typeof i),
              s = n || (true === i || true === a ? "margin" : "border");
            return Q(this, function (t, n, i) {
              var a;
              if (b(t)) return 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e];
              if (9 === t.nodeType) {
                a = t.documentElement;
                return Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])
              }
              return void 0 === i ? k.css(t, n, s) : k.style(t, n, i, s)
            }, t, o ? i : void 0, o)
          }
        })
      });
      k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        k.fn[t] = function (e, n) {
          return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
      });
      k.fn.extend({
        hover: function (e, t) {
          return this.mouseenter(e).mouseleave(t || e)
        }
      });
      k.fn.extend({
        bind: function (e, t, n) {
          return this.on(e, null, t, n)
        }, unbind: function (e, t) {
          return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
          return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
          return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
      });
      k.proxy = function (e, t) {
        var n, r, i;
        if ("string" === typeof t) {
          n = e[t];
          t = e;
          e = n
        }
        if (!y(e)) return;
        r = l.call(arguments, 2);
        i = function () {
          return e.apply(t || this, r.concat(l.call(arguments)))
        };
        i.guid = e.guid = e.guid || k.guid++;
        return i
      };
      k.holdReady = function (e) {
        e ? k.readyWait++ : k.ready(true)
      };
      k.isArray = Array.isArray;
      k.parseJSON = JSON.parse;
      k.nodeName = D;
      k.isFunction = y;
      k.isWindow = b;
      k.camelCase = Z;
      k.type = C;
      k.now = Date.now;
      k.isNumeric = function (e) {
        var t = k.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
      };
      true;
      !(r = [], i = function () {
        return k
      }.apply(t, r), void 0 !== i && (e.exports = i));
      var nn = n.jQuery, rn = n.$;
      k.noConflict = function (e) {
        n.$ === k && (n.$ = rn);
        e && n.jQuery === k && (n.jQuery = nn);
        return k
      };
      a || (n.jQuery = n.$ = k);
      return k
    })
  }).call(window)
}, function (e, t, n) {
  n(56);
  e.exports = angular
}, function (e, t, n) {
  (function () {
    var n = this;
    var r = n._;
    var i = {};
    var a = Array.prototype, o = Object.prototype, s = Function.prototype;
    var u = a.push, l = a.slice, c = a.concat, f = o.toString, p = o.hasOwnProperty;
    var h = a.forEach, d = a.map, v = a.reduce, m = a.reduceRight, g = a.filter, $ = a.every, y = a.some, b = a.indexOf,
      w = a.lastIndexOf, x = Array.isArray, C = Object.keys, E = s.bind;
    var k = function (e) {
      if (e instanceof k) return e;
      if (!(this instanceof k)) return new k(e);
      this._wrapped = e
    };
    true;
    (true, e.exports) && (t = e.exports = k);
    t._ = k;
    k.VERSION = "1.5.2";
    var S = k.each = k.forEach = function (e, t, n) {
      if (null == e) return;
      if (h && e.forEach === h) e.forEach(t, n); else if (e.length === +e.length) {
        for (var r = 0, a = e.length; r < a; r++) if (t.call(n, e[r], r, e) === i) return
      } else {
        var o = k.keys(e);
        for (var r = 0, a = o.length; r < a; r++) if (t.call(n, e[o[r]], o[r], e) === i) return
      }
    };
    k.map = k.collect = function (e, t, n) {
      var r = [];
      if (null == e) return r;
      if (d && e.map === d) return e.map(t, n);
      S(e, function (e, i, a) {
        r.push(t.call(n, e, i, a))
      });
      return r
    };
    var A = "Reduce of empty array with no initial value";
    k.reduce = k.foldl = k.inject = function (e, t, n, r) {
      var i = arguments.length > 2;
      null == e && (e = []);
      if (v && e.reduce === v) {
        r && (t = k.bind(t, r));
        return i ? e.reduce(t, n) : e.reduce(t)
      }
      S(e, function (e, a, o) {
        if (i) n = t.call(r, n, e, a, o); else {
          n = e;
          i = true
        }
      });
      if (!i) throw new TypeError(A);
      return n
    };
    k.reduceRight = k.foldr = function (e, t, n, r) {
      var i = arguments.length > 2;
      null == e && (e = []);
      if (m && e.reduceRight === m) {
        r && (t = k.bind(t, r));
        return i ? e.reduceRight(t, n) : e.reduceRight(t)
      }
      var a = e.length;
      if (a !== +a) {
        var o = k.keys(e);
        a = o.length
      }
      S(e, function (s, u, l) {
        u = o ? o[--a] : --a;
        if (i) n = t.call(r, n, e[u], u, l); else {
          n = e[u];
          i = true
        }
      });
      if (!i) throw new TypeError(A);
      return n
    };
    k.find = k.detect = function (e, t, n) {
      var r;
      T(e, function (e, i, a) {
        if (t.call(n, e, i, a)) {
          r = e;
          return true
        }
      });
      return r
    };
    k.filter = k.select = function (e, t, n) {
      var r = [];
      if (null == e) return r;
      if (g && e.filter === g) return e.filter(t, n);
      S(e, function (e, i, a) {
        t.call(n, e, i, a) && r.push(e)
      });
      return r
    };
    k.reject = function (e, t, n) {
      return k.filter(e, function (e, r, i) {
        return !t.call(n, e, r, i)
      }, n)
    };
    k.every = k.all = function (e, t, n) {
      t || (t = k.identity);
      var r = true;
      if (null == e) return r;
      if ($ && e.every === $) return e.every(t, n);
      S(e, function (e, a, o) {
        if (!(r = r && t.call(n, e, a, o))) return i
      });
      return !!r
    };
    var T = k.some = k.any = function (e, t, n) {
      t || (t = k.identity);
      var r = false;
      if (null == e) return r;
      if (y && e.some === y) return e.some(t, n);
      S(e, function (e, a, o) {
        if (r || (r = t.call(n, e, a, o))) return i
      });
      return !!r
    };
    k.contains = k.include = function (e, t) {
      if (null == e) return false;
      if (b && e.indexOf === b) return -1 != e.indexOf(t);
      return T(e, function (e) {
        return e === t
      })
    };
    k.invoke = function (e, t) {
      var n = l.call(arguments, 2);
      var r = k.isFunction(t);
      return k.map(e, function (e) {
        return (r ? t : e[t]).apply(e, n)
      })
    };
    k.pluck = function (e, t) {
      return k.map(e, function (e) {
        return e[t]
      })
    };
    k.where = function (e, t, n) {
      if (k.isEmpty(t)) return n ? void 0 : [];
      return k[n ? "find" : "filter"](e, function (e) {
        for (var n in t) if (t[n] !== e[n]) return false;
        return true
      })
    };
    k.findWhere = function (e, t) {
      return k.where(e, t, true)
    };
    k.max = function (e, t, n) {
      if (!t && k.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
      if (!t && k.isEmpty(e)) return -Infinity;
      var r = {computed: -Infinity, value: -Infinity};
      S(e, function (e, i, a) {
        var o = t ? t.call(n, e, i, a) : e;
        o > r.computed && (r = {value: e, computed: o})
      });
      return r.value
    };
    k.min = function (e, t, n) {
      if (!t && k.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.min.apply(Math, e);
      if (!t && k.isEmpty(e)) return Infinity;
      var r = {computed: Infinity, value: Infinity};
      S(e, function (e, i, a) {
        var o = t ? t.call(n, e, i, a) : e;
        o < r.computed && (r = {value: e, computed: o})
      });
      return r.value
    };
    k.shuffle = function (e) {
      var t;
      var n = 0;
      var r = [];
      S(e, function (e) {
        t = k.random(n++);
        r[n - 1] = r[t];
        r[t] = e
      });
      return r
    };
    k.sample = function (e, t, n) {
      if (arguments.length < 2 || n) return e[k.random(e.length - 1)];
      return k.shuffle(e).slice(0, Math.max(0, t))
    };
    var O = function (e) {
      return k.isFunction(e) ? e : function (t) {
        return t[e]
      }
    };
    k.sortBy = function (e, t, n) {
      var r = O(t);
      return k.pluck(k.map(e, function (e, t, i) {
        return {value: e, index: t, criteria: r.call(n, e, t, i)}
      }).sort(function (e, t) {
        var n = e.criteria;
        var r = t.criteria;
        if (n !== r) {
          if (n > r || void 0 === n) return 1;
          if (n < r || void 0 === r) return -1
        }
        return e.index - t.index
      }), "value")
    };
    var j = function (e) {
      return function (t, n, r) {
        var i = {};
        var a = null == n ? k.identity : O(n);
        S(t, function (n, o) {
          var s = a.call(r, n, o, t);
          e(i, s, n)
        });
        return i
      }
    };
    k.groupBy = j(function (e, t, n) {
      (k.has(e, t) ? e[t] : e[t] = []).push(n)
    });
    k.indexBy = j(function (e, t, n) {
      e[t] = n
    });
    k.countBy = j(function (e, t) {
      k.has(e, t) ? e[t]++ : e[t] = 1
    });
    k.sortedIndex = function (e, t, n, r) {
      n = null == n ? k.identity : O(n);
      var i = n.call(r, t);
      var a = 0, o = e.length;
      while (a < o) {
        var s = a + o >>> 1;
        n.call(r, e[s]) < i ? a = s + 1 : o = s
      }
      return a
    };
    k.toArray = function (e) {
      if (!e) return [];
      if (k.isArray(e)) return l.call(e);
      if (e.length === +e.length) return k.map(e, k.identity);
      return k.values(e)
    };
    k.size = function (e) {
      if (null == e) return 0;
      return e.length === +e.length ? e.length : k.keys(e).length
    };
    k.first = k.head = k.take = function (e, t, n) {
      if (null == e) return;
      return null == t || n ? e[0] : l.call(e, 0, t)
    };
    k.initial = function (e, t, n) {
      return l.call(e, 0, e.length - (null == t || n ? 1 : t))
    };
    k.last = function (e, t, n) {
      if (null == e) return;
      return null == t || n ? e[e.length - 1] : l.call(e, Math.max(e.length - t, 0))
    };
    k.rest = k.tail = k.drop = function (e, t, n) {
      return l.call(e, null == t || n ? 1 : t)
    };
    k.compact = function (e) {
      return k.filter(e, k.identity)
    };
    var M = function (e, t, n) {
      if (t && k.every(e, k.isArray)) return c.apply(n, e);
      S(e, function (e) {
        k.isArray(e) || k.isArguments(e) ? t ? u.apply(n, e) : M(e, t, n) : n.push(e)
      });
      return n
    };
    k.flatten = function (e, t) {
      return M(e, t, [])
    };
    k.without = function (e) {
      return k.difference(e, l.call(arguments, 1))
    };
    k.uniq = k.unique = function (e, t, n, r) {
      if (k.isFunction(t)) {
        r = n;
        n = t;
        t = false
      }
      var i = n ? k.map(e, n, r) : e;
      var a = [];
      var o = [];
      S(i, function (n, r) {
        if (t ? !r || o[o.length - 1] !== n : !k.contains(o, n)) {
          o.push(n);
          a.push(e[r])
        }
      });
      return a
    };
    k.union = function () {
      return k.uniq(k.flatten(arguments, true))
    };
    k.intersection = function (e) {
      var t = l.call(arguments, 1);
      return k.filter(k.uniq(e), function (e) {
        return k.every(t, function (t) {
          return k.indexOf(t, e) >= 0
        })
      })
    };
    k.difference = function (e) {
      var t = c.apply(a, l.call(arguments, 1));
      return k.filter(e, function (e) {
        return !k.contains(t, e)
      })
    };
    k.zip = function () {
      var e = k.max(k.pluck(arguments, "length").concat(0));
      var t = new Array(e);
      for (var n = 0; n < e; n++) t[n] = k.pluck(arguments, "" + n);
      return t
    };
    k.object = function (e, t) {
      if (null == e) return {};
      var n = {};
      for (var r = 0, i = e.length; r < i; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
      return n
    };
    k.indexOf = function (e, t, n) {
      if (null == e) return -1;
      var r = 0, i = e.length;
      if (n) {
        if ("number" != typeof n) {
          r = k.sortedIndex(e, t);
          return e[r] === t ? r : -1
        }
        r = n < 0 ? Math.max(0, i + n) : n
      }
      if (b && e.indexOf === b) return e.indexOf(t, n);
      for (; r < i; r++) if (e[r] === t) return r;
      return -1
    };
    k.lastIndexOf = function (e, t, n) {
      if (null == e) return -1;
      var r = null != n;
      if (w && e.lastIndexOf === w) return r ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
      var i = r ? n : e.length;
      while (i--) if (e[i] === t) return i;
      return -1
    };
    k.range = function (e, t, n) {
      if (arguments.length <= 1) {
        t = e || 0;
        e = 0
      }
      n = arguments[2] || 1;
      var r = Math.max(Math.ceil((t - e) / n), 0);
      var i = 0;
      var a = new Array(r);
      while (i < r) {
        a[i++] = e;
        e += n
      }
      return a
    };
    var D = function () {
    };
    k.bind = function (e, t) {
      var n, r;
      if (E && e.bind === E) return E.apply(e, l.call(arguments, 1));
      if (!k.isFunction(e)) throw new TypeError;
      n = l.call(arguments, 2);
      return r = function () {
        if (!(this instanceof r)) return e.apply(t, n.concat(l.call(arguments)));
        D.prototype = e.prototype;
        var i = new D;
        D.prototype = null;
        var a = e.apply(i, n.concat(l.call(arguments)));
        if (Object(a) === a) return a;
        return i
      }
    };
    k.partial = function (e) {
      var t = l.call(arguments, 1);
      return function () {
        return e.apply(this, t.concat(l.call(arguments)))
      }
    };
    k.bindAll = function (e) {
      var t = l.call(arguments, 1);
      if (0 === t.length) throw new Error("bindAll must be passed function names");
      S(t, function (t) {
        e[t] = k.bind(e[t], e)
      });
      return e
    };
    k.memoize = function (e, t) {
      var n = {};
      t || (t = k.identity);
      return function () {
        var r = t.apply(this, arguments);
        return k.has(n, r) ? n[r] : n[r] = e.apply(this, arguments)
      }
    };
    k.delay = function (e, t) {
      var n = l.call(arguments, 2);
      return setTimeout(function () {
        return e.apply(null, n)
      }, t)
    };
    k.defer = function (e) {
      return k.delay.apply(k, [e, 1].concat(l.call(arguments, 1)))
    };
    k.throttle = function (e, t, n) {
      var r, i, a;
      var o = null;
      var s = 0;
      n || (n = {});
      var u = function () {
        s = false === n.leading ? 0 : new Date;
        o = null;
        a = e.apply(r, i)
      };
      return function () {
        var l = new Date;
        s || false !== n.leading || (s = l);
        var c = t - (l - s);
        r = this;
        i = arguments;
        if (c <= 0) {
          clearTimeout(o);
          o = null;
          s = l;
          a = e.apply(r, i)
        } else o || false === n.trailing || (o = setTimeout(u, c));
        return a
      }
    };
    k.debounce = function (e, t, n) {
      var r, i, a, o, s;
      return function () {
        a = this;
        i = arguments;
        o = new Date;
        var u = function () {
          var l = new Date - o;
          if (l < t) r = setTimeout(u, t - l); else {
            r = null;
            n || (s = e.apply(a, i))
          }
        };
        var l = n && !r;
        r || (r = setTimeout(u, t));
        l && (s = e.apply(a, i));
        return s
      }
    };
    k.once = function (e) {
      var t = false, n;
      return function () {
        if (t) return n;
        t = true;
        n = e.apply(this, arguments);
        e = null;
        return n
      }
    };
    k.wrap = function (e, t) {
      return function () {
        var n = [e];
        u.apply(n, arguments);
        return t.apply(this, n)
      }
    };
    k.compose = function () {
      var e = arguments;
      return function () {
        var t = arguments;
        for (var n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
        return t[0]
      }
    };
    k.after = function (e, t) {
      return function () {
        if (--e < 1) return t.apply(this, arguments)
      }
    };
    k.keys = C || function (e) {
      if (e !== Object(e)) throw new TypeError("Invalid object");
      var t = [];
      for (var n in e) k.has(e, n) && t.push(n);
      return t
    };
    k.values = function (e) {
      var t = k.keys(e);
      var n = t.length;
      var r = new Array(n);
      for (var i = 0; i < n; i++) r[i] = e[t[i]];
      return r
    };
    k.pairs = function (e) {
      var t = k.keys(e);
      var n = t.length;
      var r = new Array(n);
      for (var i = 0; i < n; i++) r[i] = [t[i], e[t[i]]];
      return r
    };
    k.invert = function (e) {
      var t = {};
      var n = k.keys(e);
      for (var r = 0, i = n.length; r < i; r++) t[e[n[r]]] = n[r];
      return t
    };
    k.functions = k.methods = function (e) {
      var t = [];
      for (var n in e) k.isFunction(e[n]) && t.push(n);
      return t.sort()
    };
    k.extend = function (e) {
      S(l.call(arguments, 1), function (t) {
        if (t) for (var n in t) e[n] = t[n]
      });
      return e
    };
    k.pick = function (e) {
      var t = {};
      var n = c.apply(a, l.call(arguments, 1));
      S(n, function (n) {
        n in e && (t[n] = e[n])
      });
      return t
    };
    k.omit = function (e) {
      var t = {};
      var n = c.apply(a, l.call(arguments, 1));
      for (var r in e) k.contains(n, r) || (t[r] = e[r]);
      return t
    };
    k.defaults = function (e) {
      S(l.call(arguments, 1), function (t) {
        if (t) for (var n in t) void 0 === e[n] && (e[n] = t[n])
      });
      return e
    };
    k.clone = function (e) {
      if (!k.isObject(e)) return e;
      return k.isArray(e) ? e.slice() : k.extend({}, e)
    };
    k.tap = function (e, t) {
      t(e);
      return e
    };
    var N = function (e, t, n, r) {
      if (e === t) return 0 !== e || 1 / e == 1 / t;
      if (null == e || null == t) return e === t;
      e instanceof k && (e = e._wrapped);
      t instanceof k && (t = t._wrapped);
      var i = f.call(e);
      if (i != f.call(t)) return false;
      switch (i) {
        case"[object String]":
          return e == String(t);
        case"[object Number]":
          return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
        case"[object Date]":
        case"[object Boolean]":
          return +e == +t;
        case"[object RegExp]":
          return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
      }
      if ("object" != typeof e || "object" != typeof t) return false;
      var a = n.length;
      while (a--) if (n[a] == e) return r[a] == t;
      var o = e.constructor, s = t.constructor;
      if (o !== s && !(k.isFunction(o) && o instanceof o && k.isFunction(s) && s instanceof s)) return false;
      n.push(e);
      r.push(t);
      var u = 0, l = true;
      if ("[object Array]" == i) {
        u = e.length;
        l = u == t.length;
        if (l) while (u--) if (!(l = N(e[u], t[u], n, r))) break
      } else {
        for (var c in e) if (k.has(e, c)) {
          u++;
          if (!(l = k.has(t, c) && N(e[c], t[c], n, r))) break
        }
        if (l) {
          for (c in t) if (k.has(t, c) && !u--) break;
          l = !u
        }
      }
      n.pop();
      r.pop();
      return l
    };
    k.isEqual = function (e, t) {
      return N(e, t, [], [])
    };
    k.isEmpty = function (e) {
      if (null == e) return true;
      if (k.isArray(e) || k.isString(e)) return 0 === e.length;
      for (var t in e) if (k.has(e, t)) return false;
      return true
    };
    k.isElement = function (e) {
      return !!(e && 1 === e.nodeType)
    };
    k.isArray = x || function (e) {
      return "[object Array]" == f.call(e)
    };
    k.isObject = function (e) {
      return e === Object(e)
    };
    S(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (e) {
      k["is" + e] = function (t) {
        return f.call(t) == "[object " + e + "]"
      }
    });
    k.isArguments(arguments) || (k.isArguments = function (e) {
      return !!(e && k.has(e, "callee"))
    });
    true;
    k.isFunction = function (e) {
      return "function" === typeof e
    };
    k.isFinite = function (e) {
      return isFinite(e) && !isNaN(parseFloat(e))
    };
    k.isNaN = function (e) {
      return k.isNumber(e) && e != +e
    };
    k.isBoolean = function (e) {
      return true === e || false === e || "[object Boolean]" == f.call(e)
    };
    k.isNull = function (e) {
      return null === e
    };
    k.isUndefined = function (e) {
      return void 0 === e
    };
    k.has = function (e, t) {
      return p.call(e, t)
    };
    k.noConflict = function () {
      n._ = r;
      return this
    };
    k.identity = function (e) {
      return e
    };
    k.times = function (e, t, n) {
      var r = Array(Math.max(0, e));
      for (var i = 0; i < e; i++) r[i] = t.call(n, i);
      return r
    };
    k.random = function (e, t) {
      if (null == t) {
        t = e;
        e = 0
      }
      return e + Math.floor(Math.random() * (t - e + 1))
    };
    var q = {escape: {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;"}};
    q.unescape = k.invert(q.escape);
    var P = {
      escape: new RegExp("[" + k.keys(q.escape).join("") + "]", "g"),
      unescape: new RegExp("(" + k.keys(q.unescape).join("|") + ")", "g")
    };
    k.each(["escape", "unescape"], function (e) {
      k[e] = function (t) {
        if (null == t) return "";
        return ("" + t).replace(P[e], function (t) {
          return q[e][t]
        })
      }
    });
    k.result = function (e, t) {
      if (null == e) return;
      var n = e[t];
      return k.isFunction(n) ? n.call(e) : n
    };
    k.mixin = function (e) {
      S(k.functions(e), function (t) {
        var n = k[t] = e[t];
        k.prototype[t] = function () {
          var e = [this._wrapped];
          u.apply(e, arguments);
          return V.call(this, n.apply(k, e))
        }
      })
    };
    var _ = 0;
    k.uniqueId = function (e) {
      var t = ++_ + "";
      return e ? e + t : t
    };
    k.templateSettings = {evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g};
    var R = /(.)^/;
    var L = {"'": "'", "\\": "\\", "\r": "r", "\n": "n", "\t": "t", "\u2028": "u2028", "\u2029": "u2029"};
    var I = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    k.template = function (e, t, n) {
      var r;
      n = k.defaults({}, n, k.templateSettings);
      var i = new RegExp([(n.escape || R).source, (n.interpolate || R).source, (n.evaluate || R).source].join("|") + "|$", "g");
      var a = 0;
      var o = "__p+='";
      e.replace(i, function (t, n, r, i, s) {
        o += e.slice(a, s).replace(I, function (e) {
          return "\\" + L[e]
        });
        n && (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'");
        r && (o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'");
        i && (o += "';\n" + i + "\n__p+='");
        a = s + t.length;
        return t
      });
      o += "';\n";
      n.variable || (o = "with(obj||{}){\n" + o + "}\n");
      o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
      try {
        r = new Function(n.variable || "obj", "_", o)
      } catch (e) {
        e.source = o;
        throw e
      }
      if (t) return r(t, k);
      var s = function (e) {
        return r.call(this, e, k)
      };
      s.source = "function(" + (n.variable || "obj") + "){\n" + o + "}";
      return s
    };
    k.chain = function (e) {
      return k(e).chain()
    };
    var V = function (e) {
      return this._chain ? k(e).chain() : e
    };
    k.mixin(k);
    S(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
      var t = a[e];
      k.prototype[e] = function () {
        var n = this._wrapped;
        t.apply(n, arguments);
        "shift" != e && "splice" != e || 0 !== n.length || delete n[0];
        return V.call(this, n)
      }
    });
    S(["concat", "join", "slice"], function (e) {
      var t = a[e];
      k.prototype[e] = function () {
        return V.call(this, t.apply(this._wrapped, arguments))
      }
    });
    k.extend(k.prototype, {
      chain: function () {
        this._chain = true;
        return this
      }, value: function () {
        return this._wrapped
      }
    })
  }).call(this)
}, function (e, t, n) {
  var r = n(49);
  /**
   * @license AngularJS v1.7.2
   * (c) 2010-2018 Google, Inc. http://angularjs.org
   * License: MIT
   */
  /**
   * @license AngularJS v1.7.2
   * (c) 2010-2018 Google, Inc. http://angularjs.org
   * License: MIT
   */
  (function (e, t) {
    "use strict";
    var n = t.$$minErr("$sanitize");
    var r;
    var i;
    var a;
    var o;
    var s;
    var u;
    var l;
    var c;
    var f;
    var p;

    function h() {
      var h = false;
      var d = false;
      this.$get = ["$$sanitizeUri", function (e) {
        h = true;
        d && i(k, C);
        return function (t) {
          var n = [];
          f(t, p(n, function (t, n) {
            return !/^unsafe:/.test(e(t, n))
          }));
          return n.join("")
        }
      }];
      this.enableSvg = function (e) {
        if (s(e)) {
          d = e;
          return this
        }
        return d
      };
      this.addValidElements = function (e) {
        if (!h) {
          o(e) && (e = {htmlElements: e});
          D(C, e.svgElements);
          D(g, e.htmlVoidElements);
          D(k, e.htmlVoidElements);
          D(k, e.htmlElements)
        }
        return this
      };
      this.addValidAttrs = function (e) {
        h || i(O, M(e, true));
        return this
      };
      r = t.bind;
      i = t.extend;
      a = t.forEach;
      o = t.isArray;
      s = t.isDefined;
      u = t.$$lowercase;
      l = t.noop;
      f = q;
      p = R;
      c = e.Node.prototype.contains || function (e) {
        return !!(16 & this.compareDocumentPosition(e))
      };
      var v = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, m = /([^#-~ |!])/g;
      var g = j("area,br,col,hr,img,wbr");
      var $ = j("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"), y = j("rp,rt"), b = i({}, y, $);
      var w = i({}, $, j("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul"));
      var x = i({}, y, j("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var"));
      var C = j("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan");
      var E = j("script,style");
      var k = i({}, g, w, x, b);
      var S = j("background,cite,href,longdesc,src,xlink:href,xml:base");
      var A = j("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width,style");
      var T = j("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan", true);
      var O = i({}, S, T, A);

      function j(e, t) {
        return M(e.split(","), t)
      }

      function M(e, t) {
        var n = {}, r;
        for (r = 0; r < e.length; r++) n[t ? u(e[r]) : e[r]] = true;
        return n
      }

      function D(e, t) {
        t && t.length && i(e, M(t))
      }

      var N = function (e, t) {
        var r;
        if (!t || !t.implementation) throw n("noinert", "Can't create an inert html document");
        r = t.implementation.createHTMLDocument("inert");
        var i = (r.documentElement || r.getDocumentElement()).querySelector("body");
        i.innerHTML = '<svg><g onload="this.parentNode.remove()"></g></svg>';
        if (i.querySelector("svg")) {
          i.innerHTML = '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">';
          return i.querySelector("svg img") ? o : s
        }
        return a;

        function a(t) {
          t = "<remove></remove>" + t;
          try {
            t = encodeURI(t)
          } catch (e) {
            return
          }
          var n = new e.XMLHttpRequest;
          n.responseType = "document";
          n.open("GET", "data:text/html;charset=utf-8," + t, false);
          n.send(null);
          var r = n.response.body;
          r.firstChild.remove();
          return r
        }

        function o(t) {
          t = "<remove></remove>" + t;
          try {
            var n = (new e.DOMParser).parseFromString(t, "text/html").body;
            n.firstChild.remove();
            return n
          } catch (e) {
            return
          }
        }

        function s(e) {
          i.innerHTML = e;
          t.documentMode && L(i);
          return i
        }
      }(e, e.document);

      function q(e, t) {
        null === e || void 0 === e ? e = "" : "string" !== typeof e && (e = "" + e);
        var r = N(e);
        if (!r) return "";
        var i = 5;
        do {
          if (0 === i) throw n("uinput", "Failed to sanitize html because the input is unstable");
          i--;
          e = r.innerHTML;
          r = N(e)
        } while (e !== r.innerHTML);
        var a = r.firstChild;
        while (a) {
          switch (a.nodeType) {
            case 1:
              t.start(a.nodeName.toLowerCase(), P(a.attributes));
              break;
            case 3:
              t.chars(a.textContent);
              break
          }
          var o;
          if (!(o = a.firstChild)) {
            1 === a.nodeType && t.end(a.nodeName.toLowerCase());
            o = I("nextSibling", a);
            if (!o) while (null == o) {
              a = I("parentNode", a);
              if (a === r) break;
              o = I("nextSibling", a);
              1 === a.nodeType && t.end(a.nodeName.toLowerCase())
            }
          }
          a = o
        }
        while (a = r.firstChild) r.removeChild(a)
      }

      function P(e) {
        var t = {};
        for (var n = 0, r = e.length; n < r; n++) {
          var i = e[n];
          t[i.name] = i.value
        }
        return t
      }

      function _(e) {
        return e.replace(/&/g, "&amp;").replace(v, function (e) {
          var t = e.charCodeAt(0);
          var n = e.charCodeAt(1);
          return "&#" + (1024 * (t - 55296) + (n - 56320) + 65536) + ";"
        }).replace(m, function (e) {
          return "&#" + e.charCodeAt(0) + ";"
        }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }

      function R(e, t) {
        var n = false;
        var i = r(e, e.push);
        return {
          start: function (e, r) {
            e = u(e);
            !n && E[e] && (n = e);
            if (!n && true === k[e]) {
              i("<");
              i(e);
              a(r, function (n, r) {
                var a = u(r);
                var o = "img" === e && "src" === a || "background" === a;
                if (0 === a.indexOf("data-") || true === O[a] && (true !== S[a] || t(n, o))) {
                  i(" ");
                  i(r);
                  i('="');
                  i(_(n));
                  i('"')
                }
              });
              i(">")
            }
          }, end: function (e) {
            e = u(e);
            if (!n && true === k[e] && true !== g[e]) {
              i("</");
              i(e);
              i(">")
            }
            e == n && (n = false)
          }, chars: function (e) {
            n || i(_(e))
          }
        }
      }

      function L(t) {
        while (t) {
          if (t.nodeType === e.Node.ELEMENT_NODE) {
            var n = t.attributes;
            for (var r = 0, i = n.length; r < i; r++) {
              var a = n[r];
              var o = a.name.toLowerCase();
              if ("xmlns:ns1" === o || 0 === o.lastIndexOf("ns1:", 0)) {
                t.removeAttributeNode(a);
                r--;
                i--
              }
            }
          }
          var s = t.firstChild;
          s && L(s);
          t = I("nextSibling", t)
        }
      }

      function I(e, t) {
        var r = t[e];
        if (r && c.call(t, r)) throw n("elclob", "Failed to sanitize html because the element is clobbered: {0}", t.outerHTML || t.outerText);
        return r
      }
    }

    function d(e) {
      var t = [];
      var n = p(t, l);
      n.chars(e);
      return t.join("")
    }

    t.module("ngSanitize", []).provider("$sanitize", h).info({angularVersion: "1.7.2"});
    t.module("ngSanitize").filter("linky", ["$sanitize", function (e) {
      var n = /((s?ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,
        r = /^mailto:/i;
      var i = t.$$minErr("linky");
      var a = t.isDefined;
      var o = t.isFunction;
      var s = t.isObject;
      var u = t.isString;
      return function (t, l, c) {
        if (null == t || "" === t) return t;
        if (!u(t)) throw i("notstring", "Expected string but received: {0}", t);
        var f = o(c) ? c : s(c) ? function e() {
          return c
        } : function e() {
          return {}
        };
        var p;
        var h = t;
        var v = [];
        var m;
        var g;
        while (p = h.match(n)) {
          m = p[0];
          p[2] || p[4] || (m = (p[3] ? "http://" : "mailto:") + m);
          g = p.index;
          $(h.substr(0, g));
          y(m, p[0].replace(r, ""));
          h = h.substring(g + p[0].length)
        }
        $(h);
        return e(v.join(""));

        function $(e) {
          if (!e) return;
          v.push(d(e))
        }

        function y(e, t) {
          var n, r = f(e);
          v.push("<a ");
          for (n in r) v.push(n + '="' + r[n] + '" ');
          !a(l) || "target" in r || v.push('target="', l, '" ');
          v.push('href="', e.replace(/"/g, "&quot;"), '">');
          $(t);
          v.push("</a>")
        }
      }
    }])
  })(window, window.angular)
}, , function (e, t, n) {
  n(57);
  e.exports = "ngAnimate"
}, , , function (e, t, n) {
  (function (e) {
    /**
     * @license AngularJS v1.7.2
     * (c) 2010-2018 Google, Inc. http://angularjs.org
     * License: MIT
     */
    (function (t) {
      "use strict";
      var n = {objectMaxDepth: 5, urlErrorParamsEnabled: true};

      function r(e) {
        if (!F(e)) return n;
        V(e.objectMaxDepth) && (n.objectMaxDepth = i(e.objectMaxDepth) ? e.objectMaxDepth : NaN);
        V(e.urlErrorParamsEnabled) && te(e.urlErrorParamsEnabled) && (n.urlErrorParamsEnabled = e.urlErrorParamsEnabled)
      }

      function i(e) {
        return B(e) && e > 0
      }

      function a(e, t) {
        t = t || Error;
        var r = "https://errors.angularjs.org/1.7.2/";
        var i = r.replace(".", "\\.") + "[\\s\\S]*";
        var a = new RegExp(i, "g");
        return function () {
          var i = arguments[0], o = arguments[1], s = "[" + (e ? e + ":" : "") + i + "] ",
            u = ye(arguments, 2).map(function (e) {
              return ut(e, n.objectMaxDepth)
            }), l, c;
          s += o.replace(/\{\d+\}/g, function (e) {
            var t = +e.slice(1, -1);
            if (t < u.length) return u[t].replace(a, "");
            return e
          });
          s += "\n" + r + (e ? e + "/" : "") + i;
          if (n.urlErrorParamsEnabled) for (c = 0, l = "?"; c < u.length; c++, l = "&") s += l + "p" + c + "=" + encodeURIComponent(u[c]);
          return new t(s)
        }
      }

      var o = /^\/(.+)\/([a-z]*)$/;
      var s = "validity";
      var u = Object.prototype.hasOwnProperty;
      var l = function (e) {
        return H(e) ? e.toLowerCase() : e
      };
      var c = function (e) {
        return H(e) ? e.toUpperCase() : e
      };
      var f, p, h, d = [].slice, v = [].splice, m = [].push, g = Object.prototype.toString, $ = Object.getPrototypeOf,
        y = a("ng"), b = t.angular || (t.angular = {}), w, x = 0;
      f = t.document.documentMode;

      function C(e) {
        if (null == e || Y(e)) return false;
        if (W(e) || H(e) || p && e instanceof p) return true;
        var t = "length" in Object(e) && e.length;
        return B(t) && (t >= 0 && t - 1 in e || "function" === typeof e.item)
      }

      function E(e, t, n) {
        var r, i;
        if (e) if (J(e)) for (r in e) "prototype" !== r && "length" !== r && "name" !== r && e.hasOwnProperty(r) && t.call(n, e[r], r, e); else if (W(e) || C(e)) {
          var a = "object" !== typeof e;
          for (r = 0, i = e.length; r < i; r++) (a || r in e) && t.call(n, e[r], r, e)
        } else if (e.forEach && e.forEach !== E) e.forEach(t, n, e); else if (U(e)) for (r in e) t.call(n, e[r], r, e); else if ("function" === typeof e.hasOwnProperty) for (r in e) e.hasOwnProperty(r) && t.call(n, e[r], r, e); else for (r in e) u.call(e, r) && t.call(n, e[r], r, e);
        return e
      }

      function k(e, t, n) {
        var r = Object.keys(e).sort();
        for (var i = 0; i < r.length; i++) t.call(n, e[r[i]], r[i]);
        return r
      }

      function S(e) {
        return function (t, n) {
          e(n, t)
        }
      }

      function A() {
        return ++x
      }

      function T(e, t) {
        t ? e.$$hashKey = t : delete e.$$hashKey
      }

      function O(e, t, n) {
        var r = e.$$hashKey;
        for (var i = 0, a = t.length; i < a; ++i) {
          var o = t[i];
          if (!F(o) && !J(o)) continue;
          var s = Object.keys(o);
          for (var u = 0, l = s.length; u < l; u++) {
            var c = s[u];
            var f = o[c];
            if (n && F(f)) if (z(f)) e[c] = new Date(f.valueOf()); else if (Q(f)) e[c] = new RegExp(f); else if (f.nodeName) e[c] = f.cloneNode(true); else if (ue(f)) e[c] = f.clone(); else {
              F(e[c]) || (e[c] = W(f) ? [] : {});
              O(e[c], [f], true)
            } else e[c] = f
          }
        }
        T(e, r);
        return e
      }

      function j(e) {
        return O(e, d.call(arguments, 1), false)
      }

      function M(e) {
        return O(e, d.call(arguments, 1), true)
      }

      function D(e) {
        return parseInt(e, 10)
      }

      var N = Number.isNaN || function e(t) {
        return t !== t
      };

      function q(e, t) {
        return j(Object.create(e), t)
      }

      function P() {
      }

      P.$inject = [];

      function _(e) {
        return e
      }

      _.$inject = [];

      function R(e) {
        return function t() {
          return e
        }
      }

      function L(e) {
        return J(e.toString) && e.toString !== g
      }

      function I(e) {
        return "undefined" === typeof e
      }

      function V(e) {
        return "undefined" !== typeof e
      }

      function F(e) {
        return null !== e && "object" === typeof e
      }

      function U(e) {
        return null !== e && "object" === typeof e && !$(e)
      }

      function H(e) {
        return "string" === typeof e
      }

      function B(e) {
        return "number" === typeof e
      }

      function z(e) {
        return "[object Date]" === g.call(e)
      }

      function W(e) {
        return Array.isArray(e) || e instanceof Array
      }

      function G(e) {
        var t = g.call(e);
        switch (t) {
          case"[object Error]":
            return true;
          case"[object Exception]":
            return true;
          case"[object DOMException]":
            return true;
          default:
            return e instanceof Error
        }
      }

      function J(e) {
        return "function" === typeof e
      }

      function Q(e) {
        return "[object RegExp]" === g.call(e)
      }

      function Y(e) {
        return e && e.window === e
      }

      function K(e) {
        return e && e.$evalAsync && e.$watch
      }

      function X(e) {
        return "[object File]" === g.call(e)
      }

      function Z(e) {
        return "[object FormData]" === g.call(e)
      }

      function ee(e) {
        return "[object Blob]" === g.call(e)
      }

      function te(e) {
        return "boolean" === typeof e
      }

      function ne(e) {
        return e && J(e.then)
      }

      var re = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/;

      function ie(e) {
        return e && B(e.length) && re.test(g.call(e))
      }

      function ae(e) {
        return "[object ArrayBuffer]" === g.call(e)
      }

      var oe = function (e) {
        return H(e) ? e.trim() : e
      };
      var se = function (e) {
        return e.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
      };

      function ue(e) {
        return !!(e && (e.nodeName || e.prop && e.attr && e.find))
      }

      function le(e) {
        var t = {}, n = e.split(","), r;
        for (r = 0; r < n.length; r++) t[n[r]] = true;
        return t
      }

      function ce(e) {
        return l(e.nodeName || e[0] && e[0].nodeName)
      }

      function fe(e, t) {
        return -1 !== Array.prototype.indexOf.call(e, t)
      }

      function pe(e, t) {
        var n = e.indexOf(t);
        n >= 0 && e.splice(n, 1);
        return n
      }

      function he(e, t, n) {
        var r = [];
        var a = [];
        n = i(n) ? n : NaN;
        if (t) {
          if (ie(t) || ae(t)) throw y("cpta", "Can't copy! TypedArray destination cannot be mutated.");
          if (e === t) throw y("cpi", "Can't copy! Source and destination are identical.");
          W(t) ? t.length = 0 : E(t, function (e, n) {
            "$$hashKey" !== n && delete t[n]
          });
          r.push(e);
          a.push(t);
          return o(e, t, n)
        }
        return s(e, n);

        function o(e, t, n) {
          n--;
          if (n < 0) return "...";
          var r = t.$$hashKey;
          var i;
          if (W(e)) for (var a = 0, o = e.length; a < o; a++) t.push(s(e[a], n)); else if (U(e)) for (i in e) t[i] = s(e[i], n); else if (e && "function" === typeof e.hasOwnProperty) for (i in e) e.hasOwnProperty(i) && (t[i] = s(e[i], n)); else for (i in e) u.call(e, i) && (t[i] = s(e[i], n));
          T(t, r);
          return t
        }

        function s(e, t) {
          if (!F(e)) return e;
          var n = r.indexOf(e);
          if (-1 !== n) return a[n];
          if (Y(e) || K(e)) throw y("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
          var i = false;
          var s = l(e);
          if (void 0 === s) {
            s = W(e) ? [] : Object.create($(e));
            i = true
          }
          r.push(e);
          a.push(s);
          return i ? o(e, s, t) : s
        }

        function l(e) {
          switch (g.call(e)) {
            case"[object Int8Array]":
            case"[object Int16Array]":
            case"[object Int32Array]":
            case"[object Float32Array]":
            case"[object Float64Array]":
            case"[object Uint8Array]":
            case"[object Uint8ClampedArray]":
            case"[object Uint16Array]":
            case"[object Uint32Array]":
              return new e.constructor(s(e.buffer), e.byteOffset, e.length);
            case"[object ArrayBuffer]":
              if (!e.slice) {
                var t = new ArrayBuffer(e.byteLength);
                new Uint8Array(t).set(new Uint8Array(e));
                return t
              }
              return e.slice(0);
            case"[object Boolean]":
            case"[object Number]":
            case"[object String]":
            case"[object Date]":
              return new e.constructor(e.valueOf());
            case"[object RegExp]":
              var n = new RegExp(e.source, e.toString().match(/[^/]*$/)[0]);
              n.lastIndex = e.lastIndex;
              return n;
            case"[object Blob]":
              return new e.constructor([e], {type: e.type})
          }
          if (J(e.cloneNode)) return e.cloneNode(true)
        }
      }

      function de(e, t) {
        return e === t || e !== e && t !== t
      }

      function ve(e, t) {
        if (e === t) return true;
        if (null === e || null === t) return false;
        if (e !== e && t !== t) return true;
        var n = typeof e, r = typeof t, i, a, o;
        if (n === r && "object" === n) {
          if (!W(e)) {
            if (z(e)) {
              if (!z(t)) return false;
              return de(e.getTime(), t.getTime())
            }
            if (Q(e)) {
              if (!Q(t)) return false;
              return e.toString() === t.toString()
            }
            if (K(e) || K(t) || Y(e) || Y(t) || W(t) || z(t) || Q(t)) return false;
            o = Ke();
            for (a in e) {
              if ("$" === a.charAt(0) || J(e[a])) continue;
              if (!ve(e[a], t[a])) return false;
              o[a] = true
            }
            for (a in t) if (!(a in o) && "$" !== a.charAt(0) && V(t[a]) && !J(t[a])) return false;
            return true
          }
          if (!W(t)) return false;
          if ((i = e.length) === t.length) {
            for (a = 0; a < i; a++) if (!ve(e[a], t[a])) return false;
            return true
          }
        }
        return false
      }

      var me = function () {
        if (!V(me.rules)) {
          var e = t.document.querySelector("[ng-csp]") || t.document.querySelector("[data-ng-csp]");
          if (e) {
            var n = e.getAttribute("ng-csp") || e.getAttribute("data-ng-csp");
            me.rules = {
              noUnsafeEval: !n || -1 !== n.indexOf("no-unsafe-eval"),
              noInlineStyle: !n || -1 !== n.indexOf("no-inline-style")
            }
          } else me.rules = {noUnsafeEval: r(), noInlineStyle: false}
        }
        return me.rules;

        function r() {
          try {
            new Function("");
            return false
          } catch (e) {
            return true
          }
        }
      };
      var ge = function () {
        if (V(ge.name_)) return ge.name_;
        var e;
        var n, r = qe.length, i, a;
        for (n = 0; n < r; ++n) {
          i = qe[n];
          e = t.document.querySelector("[" + i.replace(":", "\\:") + "jq]");
          if (e) {
            a = e.getAttribute(i + "jq");
            break
          }
        }
        return ge.name_ = a
      };

      function $e(e, t, n) {
        return e.concat(d.call(t, n))
      }

      function ye(e, t) {
        return d.call(e, t || 0)
      }

      function be(e, t) {
        var n = arguments.length > 2 ? ye(arguments, 2) : [];
        return !J(t) || t instanceof RegExp ? t : n.length ? function () {
          return arguments.length ? t.apply(e, $e(n, arguments, 0)) : t.apply(e, n)
        } : function () {
          return arguments.length ? t.apply(e, arguments) : t.call(e)
        }
      }

      function we(e, n) {
        var r = n;
        "string" === typeof e && "$" === e.charAt(0) && "$" === e.charAt(1) ? r = void 0 : Y(n) ? r = "$WINDOW" : n && t.document === n ? r = "$DOCUMENT" : K(n) && (r = "$SCOPE");
        return r
      }

      function xe(e, t) {
        if (I(e)) return;
        B(t) || (t = t ? 2 : null);
        return JSON.stringify(e, we, t)
      }

      function Ce(e) {
        return H(e) ? JSON.parse(e) : e
      }

      var Ee = /:/g;

      function ke(e, t) {
        e = e.replace(Ee, "");
        var n = Date.parse("Jan 01, 1970 00:00:00 " + e) / 6e4;
        return N(n) ? t : n
      }

      function Se(e, t) {
        e = new Date(e.getTime());
        e.setMinutes(e.getMinutes() + t);
        return e
      }

      function Ae(e, t, n) {
        n = n ? -1 : 1;
        var r = e.getTimezoneOffset();
        var i = ke(t, r);
        return Se(e, n * (i - r))
      }

      function Te(e) {
        e = p(e).clone().empty();
        var t = p("<div></div>").append(e).html();
        try {
          return e[0].nodeType === tt ? l(t) : t.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/, function (e, t) {
            return "<" + l(t)
          })
        } catch (e) {
          return l(t)
        }
      }

      function Oe(e) {
        try {
          return decodeURIComponent(e)
        } catch (e) {
        }
      }

      function je(e) {
        var t = {};
        E((e || "").split("&"), function (e) {
          var n, r, i;
          if (e) {
            r = e = e.replace(/\+/g, "%20");
            n = e.indexOf("=");
            if (-1 !== n) {
              r = e.substring(0, n);
              i = e.substring(n + 1)
            }
            r = Oe(r);
            if (V(r)) {
              i = !V(i) || Oe(i);
              u.call(t, r) ? W(t[r]) ? t[r].push(i) : t[r] = [t[r], i] : t[r] = i
            }
          }
        });
        return t
      }

      function Me(e) {
        var t = [];
        E(e, function (e, n) {
          W(e) ? E(e, function (e) {
            t.push(Ne(n, true) + (true === e ? "" : "=" + Ne(e, true)))
          }) : t.push(Ne(n, true) + (true === e ? "" : "=" + Ne(e, true)))
        });
        return t.length ? t.join("&") : ""
      }

      function De(e) {
        return Ne(e, true).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
      }

      function Ne(e, t) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, t ? "%20" : "+")
      }

      var qe = ["ng-", "data-ng-", "ng:", "x-ng-"];

      function Pe(e, t) {
        var n, r, i = qe.length;
        for (r = 0; r < i; ++r) {
          n = qe[r] + t;
          if (H(n = e.getAttribute(n))) return n
        }
        return null
      }

      function _e(e) {
        var n = e.currentScript;
        if (!n) return true;
        if (!(n instanceof t.HTMLScriptElement || n instanceof t.SVGScriptElement)) return false;
        var r = n.attributes;
        var i = [r.getNamedItem("src"), r.getNamedItem("href"), r.getNamedItem("xlink:href")];
        return i.every(function (t) {
          if (!t) return true;
          if (!t.value) return false;
          var n = e.createElement("a");
          n.href = t.value;
          if (e.location.origin === n.origin) return true;
          switch (n.protocol) {
            case"http:":
            case"https:":
            case"ftp:":
            case"blob:":
            case"file:":
            case"data:":
              return true;
            default:
              return false
          }
        })
      }

      var Re = _e(t.document);

      function Le(e, n) {
        var r, i, a = {};
        E(qe, function (t) {
          var n = t + "app";
          if (!r && e.hasAttribute && e.hasAttribute(n)) {
            r = e;
            i = e.getAttribute(n)
          }
        });
        E(qe, function (t) {
          var n = t + "app";
          var a;
          if (!r && (a = e.querySelector("[" + n.replace(":", "\\:") + "]"))) {
            r = a;
            i = a.getAttribute(n)
          }
        });
        if (r) {
          if (!Re) {
            t.console.error("AngularJS: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match.");
            return
          }
          a.strictDi = null !== Pe(r, "strict-di");
          n(r, i ? [i] : [], a)
        }
      }

      function Ie(e, n, r) {
        F(r) || (r = {});
        var i = {strictDi: false};
        r = j(i, r);
        var a = function () {
          e = p(e);
          if (e.injector()) {
            var i = e[0] === t.document ? "document" : Te(e);
            throw y("btstrpd", "App already bootstrapped with this element '{0}'", i.replace(/</, "&lt;").replace(/>/, "&gt;"))
          }
          n = n || [];
          n.unshift(["$provide", function (t) {
            t.value("$rootElement", e)
          }]);
          r.debugInfoEnabled && n.push(["$compileProvider", function (e) {
            e.debugInfoEnabled(true)
          }]);
          n.unshift("ng");
          var a = En(n, r.strictDi);
          a.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function e(t, n, r, i) {
            t.$apply(function () {
              n.data("$injector", i);
              r(n)(t)
            })
          }]);
          return a
        };
        var o = /^NG_ENABLE_DEBUG_INFO!/;
        var s = /^NG_DEFER_BOOTSTRAP!/;
        if (t && o.test(t.name)) {
          r.debugInfoEnabled = true;
          t.name = t.name.replace(o, "")
        }
        if (t && !s.test(t.name)) return a();
        t.name = t.name.replace(s, "");
        b.resumeBootstrap = function (e) {
          E(e, function (e) {
            n.push(e)
          });
          return a()
        };
        J(b.resumeDeferredBootstrap) && b.resumeDeferredBootstrap()
      }

      function Ve() {
        t.name = "NG_ENABLE_DEBUG_INFO!" + t.name;
        t.location.reload()
      }

      function Fe(e) {
        var t = b.element(e).injector();
        if (!t) throw y("test", "no injector found for element argument to getTestability");
        return t.get("$$testability")
      }

      var Ue = /[A-Z]/g;

      function He(e, t) {
        t = t || "_";
        return e.replace(Ue, function (e, n) {
          return (n ? t : "") + e.toLowerCase()
        })
      }

      var Be = false;

      function ze() {
        var n;
        if (Be) return;
        var r = ge();
        h = I(r) ? e : r ? t[r] : void 0;
        if (h && h.fn.on) {
          p = h;
          j(h.fn, {
            scope: Xt.scope,
            isolateScope: Xt.isolateScope,
            controller: Xt.controller,
            injector: Xt.injector,
            inheritedData: Xt.inheritedData
          })
        } else p = Nt;
        n = p.cleanData;
        p.cleanData = function (e) {
          var t;
          for (var r = 0, i; null != (i = e[r]); r++) {
            t = p._data(i).events;
            t && t.$destroy && p(i).triggerHandler("$destroy")
          }
          n(e)
        };
        b.element = p;
        Be = true
      }

      function We(e, t, n) {
        if (!e) throw y("areq", "Argument '{0}' is {1}", t || "?", n || "required");
        return e
      }

      function Ge(e, t, n) {
        n && W(e) && (e = e[e.length - 1]);
        We(J(e), t, "not a function, got " + (e && "object" === typeof e ? e.constructor.name || "Object" : typeof e));
        return e
      }

      function Je(e, t) {
        if ("hasOwnProperty" === e) throw y("badname", "hasOwnProperty is not a valid {0} name", t)
      }

      function Qe(e, t, n) {
        if (!t) return e;
        var r = t.split(".");
        var i;
        var a = e;
        var o = r.length;
        for (var s = 0; s < o; s++) {
          i = r[s];
          e && (e = (a = e)[i])
        }
        if (!n && J(e)) return be(a, e);
        return e
      }

      function Ye(e) {
        var t = e[0];
        var n = e[e.length - 1];
        var r;
        for (var i = 1; t !== n && (t = t.nextSibling); i++) if (r || e[i] !== t) {
          r || (r = p(d.call(e, 0, i)));
          r.push(t)
        }
        return r || e
      }

      function Ke() {
        return Object.create(null)
      }

      function Xe(e) {
        if (null == e) return "";
        switch (typeof e) {
          case"string":
            break;
          case"number":
            e = "" + e;
            break;
          default:
            e = !L(e) || W(e) || z(e) ? xe(e) : e.toString()
        }
        return e
      }

      var Ze = 1;
      var et = 2;
      var tt = 3;
      var nt = 8;
      var rt = 9;
      var it = 11;

      function at(e) {
        var t = a("$injector");
        var n = a("ng");

        function r(e, t, n) {
          return e[t] || (e[t] = n())
        }

        var i = r(e, "angular", Object);
        i.$$minErr = i.$$minErr || a;
        return r(i, "module", function () {
          var e = {};
          return function i(a, o, s) {
            var u = {};
            var l = function (e, t) {
              if ("hasOwnProperty" === e) throw n("badname", "hasOwnProperty is not a valid {0} name", t)
            };
            l(a, "module");
            o && e.hasOwnProperty(a) && (e[a] = null);
            return r(e, a, function () {
              if (!o) throw t("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", a);
              var e = [];
              var r = [];
              var i = [];
              var l = f("$injector", "invoke", "push", r);
              var c = {
                _invokeQueue: e,
                _configBlocks: r,
                _runBlocks: i,
                info: function (e) {
                  if (V(e)) {
                    if (!F(e)) throw n("aobj", "Argument '{0}' must be an object", "value");
                    u = e;
                    return this
                  }
                  return u
                },
                requires: o,
                name: a,
                provider: p("$provide", "provider"),
                factory: p("$provide", "factory"),
                service: p("$provide", "service"),
                value: f("$provide", "value"),
                constant: f("$provide", "constant", "unshift"),
                decorator: p("$provide", "decorator", r),
                animation: p("$animateProvider", "register"),
                filter: p("$filterProvider", "register"),
                controller: p("$controllerProvider", "register"),
                directive: p("$compileProvider", "directive"),
                component: p("$compileProvider", "component"),
                config: l,
                run: function (e) {
                  i.push(e);
                  return this
                }
              };
              s && l(s);
              return c;

              function f(t, n, r, i) {
                i || (i = e);
                return function () {
                  i[r || "push"]([t, n, arguments]);
                  return c
                }
              }

              function p(t, n, r) {
                r || (r = e);
                return function (e, i) {
                  i && J(i) && (i.$$moduleName = a);
                  r.push([t, n, arguments]);
                  return c
                }
              }
            })
          }
        })
      }

      function ot(e, t) {
        if (W(e)) {
          t = t || [];
          for (var n = 0, r = e.length; n < r; n++) t[n] = e[n]
        } else if (F(e)) {
          t = t || {};
          for (var i in e) "$" === i.charAt(0) && "$" === i.charAt(1) || (t[i] = e[i])
        }
        return t || e
      }

      function st(e, t) {
        var n = [];
        i(t) && (e = b.copy(e, null, t));
        return JSON.stringify(e, function (e, t) {
          t = we(e, t);
          if (F(t)) {
            if (n.indexOf(t) >= 0) return "...";
            n.push(t)
          }
          return t
        })
      }

      function ut(e, t) {
        if ("function" === typeof e) return e.toString().replace(/ \{[\s\S]*$/, "");
        if (I(e)) return "undefined";
        if ("string" !== typeof e) return st(e, t);
        return e
      }

      var lt = {full: "1.7.2", major: 1, minor: 7, dot: 2, codeName: "extreme-compatiplication"};

      function ct(e) {
        j(e, {
          errorHandlingConfig: r,
          bootstrap: Ie,
          copy: he,
          extend: j,
          merge: M,
          equals: ve,
          element: p,
          forEach: E,
          injector: En,
          noop: P,
          bind: be,
          toJson: xe,
          fromJson: Ce,
          identity: _,
          isUndefined: I,
          isDefined: V,
          isString: H,
          isFunction: J,
          isObject: F,
          isNumber: B,
          isElement: ue,
          isArray: W,
          version: lt,
          isDate: z,
          callbacks: {$$counter: 0},
          getTestability: Fe,
          reloadWithDebugInfo: Ve,
          $$minErr: a,
          $$csp: me,
          $$encodeUriSegment: De,
          $$encodeUriQuery: Ne,
          $$lowercase: l,
          $$stringify: Xe,
          $$uppercase: c
        });
        w = at(t);
        w("ng", ["ngLocale"], ["$provide", function e(t) {
          t.provider({$$sanitizeUri: Ni});
          t.provider("$compile", Wn).directive({
            a: Va,
            input: Mo,
            textarea: Mo,
            form: Ja,
            script: Ds,
            select: _s,
            option: Rs,
            ngBind: qo,
            ngBindHtml: _o,
            ngBindTemplate: Po,
            ngClass: Io,
            ngClassEven: Fo,
            ngClassOdd: Vo,
            ngCloak: Uo,
            ngController: Ho,
            ngForm: Qa,
            ngHide: ks,
            ngIf: Wo,
            ngInclude: Go,
            ngInit: Qo,
            ngNonBindable: ds,
            ngPluralize: $s,
            ngRef: bs,
            ngRepeat: ws,
            ngShow: Es,
            ngStyle: Ss,
            ngSwitch: As,
            ngSwitchWhen: Ts,
            ngSwitchDefault: Os,
            ngOptions: gs,
            ngTransclude: Ms,
            ngModel: us,
            ngList: Yo,
            ngChange: Ro,
            pattern: Is,
            ngPattern: Is,
            required: Ls,
            ngRequired: Ls,
            minlength: Fs,
            ngMinlength: Fs,
            maxlength: Vs,
            ngMaxlength: Vs,
            ngValue: No,
            ngModelOptions: ps
          }).directive({ngInclude: Jo}).directive(Fa).directive(Bo);
          t.provider({
            $anchorScroll: kn,
            $animate: Pn,
            $animateCss: Ln,
            $$animateJs: Nn,
            $$animateQueue: qn,
            $$AnimateRunner: Rn,
            $$animateAsyncRun: _n,
            $browser: Vn,
            $cacheFactory: Fn,
            $controller: ir,
            $document: ar,
            $$isDocumentHidden: or,
            $exceptionHandler: sr,
            $filter: oa,
            $$forceReflow: ur,
            $interpolate: Or,
            $interval: Mr,
            $http: Er,
            $httpParamSerializer: mr,
            $httpParamSerializerJQLike: gr,
            $httpBackend: Sr,
            $xhrFactory: kr,
            $jsonpCallbacks: Dr,
            $location: Zr,
            $log: ei,
            $parse: Ei,
            $rootScope: Di,
            $q: ki,
            $$q: Si,
            $sce: Fi,
            $sceDelegate: Vi,
            $sniffer: Ui,
            $templateCache: Un,
            $templateRequest: Bi,
            $$testability: zi,
            $timeout: Gi,
            $window: ra,
            $$rAF: Mi,
            $$jqLite: un,
            $$Map: hn,
            $$cookieReader: aa
          })
        }]).info({angularVersion: "1.7.2"})
      }

      Nt.expando = "ng339";
      var ft = Nt.cache = {}, pt = 1;
      Nt._data = function (e) {
        return this.cache[e[this.expando]] || {}
      };

      function ht() {
        return ++pt
      }

      var dt = /-([a-z])/g;
      var vt = /^-ms-/;
      var mt = {mouseleave: "mouseout", mouseenter: "mouseover"};
      var gt = a("jqLite");

      function $t(e) {
        return bt(e.replace(vt, "ms-"))
      }

      function yt(e, t) {
        return t.toUpperCase()
      }

      function bt(e) {
        return e.replace(dt, yt)
      }

      var wt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/;
      var xt = /<|&#?\w+;/;
      var Ct = /<([\w:-]+)/;
      var Et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi;
      var kt = {
        option: [1, '<select multiple="multiple">', "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
      kt.optgroup = kt.option;
      kt.tbody = kt.tfoot = kt.colgroup = kt.caption = kt.thead;
      kt.th = kt.td;

      function St(e) {
        return !xt.test(e)
      }

      function At(e) {
        var t = e.nodeType;
        return t === Ze || !t || t === rt
      }

      function Tt(e) {
        for (var t in ft[e.ng339]) return true;
        return false
      }

      function Ot(e, t) {
        var n, r, i, a = t.createDocumentFragment(), o = [], s;
        if (St(e)) o.push(t.createTextNode(e)); else {
          n = a.appendChild(t.createElement("div"));
          r = (Ct.exec(e) || ["", ""])[1].toLowerCase();
          i = kt[r] || kt._default;
          n.innerHTML = i[1] + e.replace(Et, "<$1></$2>") + i[2];
          s = i[0];
          while (s--) n = n.lastChild;
          o = $e(o, n.childNodes);
          n = a.firstChild;
          n.textContent = ""
        }
        a.textContent = "";
        a.innerHTML = "";
        E(o, function (e) {
          a.appendChild(e)
        });
        return a
      }

      function jt(e, n) {
        n = n || t.document;
        var r;
        if (r = wt.exec(e)) return [n.createElement(r[1])];
        if (r = Ot(e, n)) return r.childNodes;
        return []
      }

      function Mt(e, t) {
        var n = e.parentNode;
        n && n.replaceChild(t, e);
        t.appendChild(e)
      }

      var Dt = t.Node.prototype.contains || function (e) {
        return !!(16 & this.compareDocumentPosition(e))
      };

      function Nt(e) {
        if (e instanceof Nt) return e;
        var t;
        if (H(e)) {
          e = oe(e);
          t = true
        }
        if (!(this instanceof Nt)) {
          if (t && "<" !== e.charAt(0)) throw gt("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
          return new Nt(e)
        }
        t ? zt(this, jt(e)) : J(e) ? Kt(e) : zt(this, e)
      }

      function qt(e) {
        return e.cloneNode(true)
      }

      function Pt(e, t) {
        !t && At(e) && p.cleanData([e]);
        e.querySelectorAll && p.cleanData(e.querySelectorAll("*"))
      }

      function _t(e) {
        var t;
        for (t in e) return false;
        return true
      }

      function Rt(e) {
        var t = e.ng339;
        var n = t && ft[t];
        var r = n && n.events;
        var i = n && n.data;
        if ((!i || _t(i)) && (!r || _t(r))) {
          delete ft[t];
          e.ng339 = void 0
        }
      }

      function Lt(e, t, n, r) {
        if (V(r)) throw gt("offargs", "jqLite#off() does not support the `selector` argument");
        var i = Vt(e);
        var a = i && i.events;
        var o = i && i.handle;
        if (!o) return;
        if (t) {
          var s = function (t) {
            var r = a[t];
            V(n) && pe(r || [], n);
            if (!(V(n) && r && r.length > 0)) {
              e.removeEventListener(t, o);
              delete a[t]
            }
          };
          E(t.split(" "), function (e) {
            s(e);
            mt[e] && s(mt[e])
          })
        } else for (t in a) {
          "$destroy" !== t && e.removeEventListener(t, o);
          delete a[t]
        }
        Rt(e)
      }

      function It(e, t) {
        var n = e.ng339;
        var r = n && ft[n];
        if (r) {
          t ? delete r.data[t] : r.data = {};
          Rt(e)
        }
      }

      function Vt(e, t) {
        var n = e.ng339, r = n && ft[n];
        if (t && !r) {
          e.ng339 = n = ht();
          r = ft[n] = {events: {}, data: {}, handle: void 0}
        }
        return r
      }

      function Ft(e, t, n) {
        if (At(e)) {
          var r;
          var i = V(n);
          var a = !i && t && !F(t);
          var o = !t;
          var s = Vt(e, !a);
          var u = s && s.data;
          if (i) u[bt(t)] = n; else {
            if (o) return u;
            if (a) return u && u[bt(t)];
            for (r in t) u[bt(r)] = t[r]
          }
        }
      }

      function Ut(e, t) {
        if (!e.getAttribute) return false;
        return (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + t + " ") > -1
      }

      function Ht(e, t) {
        if (t && e.setAttribute) {
          var n = (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
          var r = n;
          E(t.split(" "), function (e) {
            e = oe(e);
            r = r.replace(" " + e + " ", " ")
          });
          r !== n && e.setAttribute("class", oe(r))
        }
      }

      function Bt(e, t) {
        if (t && e.setAttribute) {
          var n = (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
          var r = n;
          E(t.split(" "), function (e) {
            e = oe(e);
            -1 === r.indexOf(" " + e + " ") && (r += e + " ")
          });
          r !== n && e.setAttribute("class", oe(r))
        }
      }

      function zt(e, t) {
        if (t) if (t.nodeType) e[e.length++] = t; else {
          var n = t.length;
          if ("number" === typeof n && t.window !== t) {
            if (n) for (var r = 0; r < n; r++) e[e.length++] = t[r]
          } else e[e.length++] = t
        }
      }

      function Wt(e, t) {
        return Gt(e, "$" + (t || "ngController") + "Controller")
      }

      function Gt(e, t, n) {
        e.nodeType === rt && (e = e.documentElement);
        var r = W(t) ? t : [t];
        while (e) {
          for (var i = 0, a = r.length; i < a; i++) if (V(n = p.data(e, r[i]))) return n;
          e = e.parentNode || e.nodeType === it && e.host
        }
      }

      function Jt(e) {
        Pt(e, true);
        while (e.firstChild) e.removeChild(e.firstChild)
      }

      function Qt(e, t) {
        t || Pt(e);
        var n = e.parentNode;
        n && n.removeChild(e)
      }

      function Yt(e, n) {
        n = n || t;
        "complete" === n.document.readyState ? n.setTimeout(e) : p(n).on("load", e)
      }

      function Kt(e) {
        function n() {
          t.document.removeEventListener("DOMContentLoaded", n);
          t.removeEventListener("load", n);
          e()
        }

        if ("complete" === t.document.readyState) t.setTimeout(e); else {
          t.document.addEventListener("DOMContentLoaded", n);
          t.addEventListener("load", n)
        }
      }

      var Xt = Nt.prototype = {
        ready: Kt, toString: function () {
          var e = [];
          E(this, function (t) {
            e.push("" + t)
          });
          return "[" + e.join(", ") + "]"
        }, eq: function (e) {
          return p(e >= 0 ? this[e] : this[this.length + e])
        }, length: 0, push: m, sort: [].sort, splice: [].splice
      };
      var Zt = {};
      E("multiple,selected,checked,disabled,readOnly,required,open".split(","), function (e) {
        Zt[l(e)] = e
      });
      var en = {};
      E("input,select,option,textarea,button,form,details".split(","), function (e) {
        en[e] = true
      });
      var tn = {
        ngMinlength: "minlength",
        ngMaxlength: "maxlength",
        ngMin: "min",
        ngMax: "max",
        ngPattern: "pattern",
        ngStep: "step"
      };

      function nn(e, t) {
        var n = Zt[t.toLowerCase()];
        return n && en[ce(e)] && n
      }

      function rn(e) {
        return tn[e]
      }

      E({
        data: Ft, removeData: It, hasData: Tt, cleanData: function e(t) {
          for (var n = 0, r = t.length; n < r; n++) {
            It(t[n]);
            Lt(t[n])
          }
        }
      }, function (e, t) {
        Nt[t] = e
      });
      E({
        data: Ft, inheritedData: Gt, scope: function (e) {
          return p.data(e, "$scope") || Gt(e.parentNode || e, ["$isolateScope", "$scope"])
        }, isolateScope: function (e) {
          return p.data(e, "$isolateScope") || p.data(e, "$isolateScopeNoTemplate")
        }, controller: Wt, injector: function (e) {
          return Gt(e, "$injector")
        }, removeAttr: function (e, t) {
          e.removeAttribute(t)
        }, hasClass: Ut, css: function (e, t, n) {
          t = $t(t);
          if (!V(n)) return e.style[t];
          e.style[t] = n
        }, attr: function (e, t, n) {
          var r;
          var i = e.nodeType;
          if (i === tt || i === et || i === nt || !e.getAttribute) return;
          var a = l(t);
          var o = Zt[a];
          if (!V(n)) {
            r = e.getAttribute(t);
            o && null !== r && (r = a);
            return null === r ? void 0 : r
          }
          null === n || false === n && o ? e.removeAttribute(t) : e.setAttribute(t, o ? a : n)
        }, prop: function (e, t, n) {
          if (!V(n)) return e[t];
          e[t] = n
        }, text: function () {
          e.$dv = "";
          return e;

          function e(e, t) {
            if (I(t)) {
              var n = e.nodeType;
              return n === Ze || n === tt ? e.textContent : ""
            }
            e.textContent = t
          }
        }(), val: function (e, t) {
          if (I(t)) {
            if (e.multiple && "select" === ce(e)) {
              var n = [];
              E(e.options, function (e) {
                e.selected && n.push(e.value || e.text)
              });
              return n
            }
            return e.value
          }
          e.value = t
        }, html: function (e, t) {
          if (I(t)) return e.innerHTML;
          Pt(e, true);
          e.innerHTML = t
        }, empty: Jt
      }, function (e, t) {
        Nt.prototype[t] = function (t, n) {
          var r, i;
          var a = this.length;
          if (e !== Jt && I(2 === e.length && e !== Ut && e !== Wt ? t : n)) {
            if (F(t)) {
              for (r = 0; r < a; r++) if (e === Ft) e(this[r], t); else for (i in t) e(this[r], i, t[i]);
              return this
            }
            var o = e.$dv;
            var s = I(o) ? Math.min(a, 1) : a;
            for (var u = 0; u < s; u++) {
              var l = e(this[u], t, n);
              o = o ? o + l : l
            }
            return o
          }
          for (r = 0; r < a; r++) e(this[r], t, n);
          return this
        }
      });

      function an(e, t) {
        var n = function (n, r) {
          n.isDefaultPrevented = function () {
            return n.defaultPrevented
          };
          var i = t[r || n.type];
          var a = i ? i.length : 0;
          if (!a) return;
          if (I(n.immediatePropagationStopped)) {
            var o = n.stopImmediatePropagation;
            n.stopImmediatePropagation = function () {
              n.immediatePropagationStopped = true;
              n.stopPropagation && n.stopPropagation();
              o && o.call(n)
            }
          }
          n.isImmediatePropagationStopped = function () {
            return true === n.immediatePropagationStopped
          };
          var s = i.specialHandlerWrapper || on;
          a > 1 && (i = ot(i));
          for (var u = 0; u < a; u++) n.isImmediatePropagationStopped() || s(e, n, i[u])
        };
        n.elem = e;
        return n
      }

      function on(e, t, n) {
        n.call(e, t)
      }

      function sn(e, t, n) {
        var r = t.relatedTarget;
        r && (r === e || Dt.call(e, r)) || n.call(e, t)
      }

      E({
        removeData: It, on: function e(t, n, r, i) {
          if (V(i)) throw gt("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
          if (!At(t)) return;
          var a = Vt(t, true);
          var o = a.events;
          var s = a.handle;
          s || (s = a.handle = an(t, o));
          var u = n.indexOf(" ") >= 0 ? n.split(" ") : [n];
          var l = u.length;
          var c = function (e, n, i) {
            var a = o[e];
            if (!a) {
              a = o[e] = [];
              a.specialHandlerWrapper = n;
              "$destroy" === e || i || t.addEventListener(e, s)
            }
            a.push(r)
          };
          while (l--) {
            n = u[l];
            if (mt[n]) {
              c(mt[n], sn);
              c(n, void 0, true)
            } else c(n)
          }
        }, off: Lt, one: function (e, t, n) {
          e = p(e);
          e.on(t, function r() {
            e.off(t, n);
            e.off(t, r)
          });
          e.on(t, n)
        }, replaceWith: function (e, t) {
          var n, r = e.parentNode;
          Pt(e);
          E(new Nt(t), function (t) {
            n ? r.insertBefore(t, n.nextSibling) : r.replaceChild(t, e);
            n = t
          })
        }, children: function (e) {
          var t = [];
          E(e.childNodes, function (e) {
            e.nodeType === Ze && t.push(e)
          });
          return t
        }, contents: function (e) {
          return e.contentDocument || e.childNodes || []
        }, append: function (e, t) {
          var n = e.nodeType;
          if (n !== Ze && n !== it) return;
          t = new Nt(t);
          for (var r = 0, i = t.length; r < i; r++) {
            var a = t[r];
            e.appendChild(a)
          }
        }, prepend: function (e, t) {
          if (e.nodeType === Ze) {
            var n = e.firstChild;
            E(new Nt(t), function (t) {
              e.insertBefore(t, n)
            })
          }
        }, wrap: function (e, t) {
          Mt(e, p(t).eq(0).clone()[0])
        }, remove: Qt, detach: function (e) {
          Qt(e, true)
        }, after: function (e, t) {
          var n = e, r = e.parentNode;
          if (r) {
            t = new Nt(t);
            for (var i = 0, a = t.length; i < a; i++) {
              var o = t[i];
              r.insertBefore(o, n.nextSibling);
              n = o
            }
          }
        }, addClass: Bt, removeClass: Ht, toggleClass: function (e, t, n) {
          t && E(t.split(" "), function (t) {
            var r = n;
            I(r) && (r = !Ut(e, t));
            (r ? Bt : Ht)(e, t)
          })
        }, parent: function (e) {
          var t = e.parentNode;
          return t && t.nodeType !== it ? t : null
        }, next: function (e) {
          return e.nextElementSibling
        }, find: function (e, t) {
          return e.getElementsByTagName ? e.getElementsByTagName(t) : []
        }, clone: qt, triggerHandler: function (e, t, n) {
          var r, i, a;
          var o = t.type || t;
          var s = Vt(e);
          var u = s && s.events;
          var l = u && u[o];
          if (l) {
            r = {
              preventDefault: function () {
                this.defaultPrevented = true
              }, isDefaultPrevented: function () {
                return true === this.defaultPrevented
              }, stopImmediatePropagation: function () {
                this.immediatePropagationStopped = true
              }, isImmediatePropagationStopped: function () {
                return true === this.immediatePropagationStopped
              }, stopPropagation: P, type: o, target: e
            };
            t.type && (r = j(r, t));
            i = ot(l);
            a = n ? [r].concat(n) : [r];
            E(i, function (t) {
              r.isImmediatePropagationStopped() || t.apply(e, a)
            })
          }
        }
      }, function (e, t) {
        Nt.prototype[t] = function (t, n, r) {
          var i;
          for (var a = 0, o = this.length; a < o; a++) if (I(i)) {
            i = e(this[a], t, n, r);
            V(i) && (i = p(i))
          } else zt(i, e(this[a], t, n, r));
          return V(i) ? i : this
        }
      });
      Nt.prototype.bind = Nt.prototype.on;
      Nt.prototype.unbind = Nt.prototype.off;

      function un() {
        this.$get = function e() {
          return j(Nt, {
            hasClass: function (e, t) {
              e.attr && (e = e[0]);
              return Ut(e, t)
            }, addClass: function (e, t) {
              e.attr && (e = e[0]);
              return Bt(e, t)
            }, removeClass: function (e, t) {
              e.attr && (e = e[0]);
              return Ht(e, t)
            }
          })
        }
      }

      function ln(e, t) {
        var n = e && e.$$hashKey;
        if (n) {
          "function" === typeof n && (n = e.$$hashKey());
          return n
        }
        var r = typeof e;
        n = "function" === r || "object" === r && null !== e ? e.$$hashKey = r + ":" + (t || A)() : r + ":" + e;
        return n
      }

      var cn = Object.create(null);

      function fn() {
        this._keys = [];
        this._values = [];
        this._lastKey = NaN;
        this._lastIndex = -1
      }

      fn.prototype = {
        _idx: function (e) {
          if (e === this._lastKey) return this._lastIndex;
          this._lastKey = e;
          this._lastIndex = this._keys.indexOf(e);
          return this._lastIndex
        }, _transformKey: function (e) {
          return N(e) ? cn : e
        }, get: function (e) {
          e = this._transformKey(e);
          var t = this._idx(e);
          if (-1 !== t) return this._values[t]
        }, set: function (e, t) {
          e = this._transformKey(e);
          var n = this._idx(e);
          -1 === n && (n = this._lastIndex = this._keys.length);
          this._keys[n] = e;
          this._values[n] = t
        }, delete: function (e) {
          e = this._transformKey(e);
          var t = this._idx(e);
          if (-1 === t) return false;
          this._keys.splice(t, 1);
          this._values.splice(t, 1);
          this._lastKey = NaN;
          this._lastIndex = -1;
          return true
        }
      };
      var pn = fn;
      var hn = [function () {
        this.$get = [function () {
          return pn
        }]
      }];
      var dn = /^([^(]+?)=>/;
      var vn = /^[^(]*\(\s*([^)]*)\)/m;
      var mn = /,/;
      var gn = /^\s*(_?)(\S+?)\1\s*$/;
      var $n = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
      var yn = a("$injector");

      function bn(e) {
        return Function.prototype.toString.call(e)
      }

      function wn(e) {
        var t = bn(e).replace($n, ""), n = t.match(dn) || t.match(vn);
        return n
      }

      function xn(e) {
        var t = wn(e);
        if (t) return "function(" + (t[1] || "").replace(/[\s\r\n]+/, " ") + ")";
        return "fn"
      }

      function Cn(e, t, n) {
        var r, i, a;
        if ("function" === typeof e) {
          if (!(r = e.$inject)) {
            r = [];
            if (e.length) {
              if (t) {
                H(n) && n || (n = e.name || xn(e));
                throw yn("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", n)
              }
              i = wn(e);
              E(i[1].split(mn), function (e) {
                e.replace(gn, function (e, t, n) {
                  r.push(n)
                })
              })
            }
            e.$inject = r
          }
        } else if (W(e)) {
          a = e.length - 1;
          Ge(e[a], "fn");
          r = e.slice(0, a)
        } else Ge(e, "fn", true);
        return r
      }

      function En(e, t) {
        t = true === t;
        var n = {}, r = "Provider", i = [], a = new pn,
          o = {$provide: {provider: h(d), factory: h(m), service: h(g), value: h($), constant: h(y), decorator: x}},
          s = o.$injector = k(o, function (e, t) {
            b.isString(t) && i.push(t);
            throw yn("unpr", "Unknown provider: {0}", i.join(" <- "))
          }), u = {}, l = k(u, function (e, t) {
            var n = s.get(e + r, t);
            return c.invoke(n.$get, n, void 0, e)
          }), c = l;
        o["$injector" + r] = {$get: R(l)};
        c.modules = s.modules = Ke();
        var p = C(e);
        c = l.get("$injector");
        c.strictDi = t;
        E(p, function (e) {
          e && c.invoke(e)
        });
        c.loadNewModules = function (e) {
          E(C(e), function (e) {
            e && c.invoke(e)
          })
        };
        return c;

        function h(e) {
          return function (t, n) {
            if (!F(t)) return e(t, n);
            E(t, S(e))
          }
        }

        function d(e, t) {
          Je(e, "service");
          (J(t) || W(t)) && (t = s.instantiate(t));
          if (!t.$get) throw yn("pget", "Provider '{0}' must define $get factory method.", e);
          return o[e + r] = t
        }

        function v(e, t) {
          return function n() {
            var r = c.invoke(t, this);
            if (I(r)) throw yn("undef", "Provider '{0}' must return a value from $get factory method.", e);
            return r
          }
        }

        function m(e, t, n) {
          return d(e, {$get: false !== n ? v(e, t) : t})
        }

        function g(e, t) {
          return m(e, ["$injector", function (e) {
            return e.instantiate(t)
          }])
        }

        function $(e, t) {
          return m(e, R(t), false)
        }

        function y(e, t) {
          Je(e, "constant");
          o[e] = t;
          u[e] = t
        }

        function x(e, t) {
          var n = s.get(e + r), i = n.$get;
          n.$get = function () {
            var e = c.invoke(i, n);
            return c.invoke(t, null, {$delegate: e})
          }
        }

        function C(e) {
          We(I(e) || W(e), "modulesToLoad", "not an array");
          var t = [], n;
          E(e, function (e) {
            if (a.get(e)) return;
            a.set(e, true);

            function r(e) {
              var t, n;
              for (t = 0, n = e.length; t < n; t++) {
                var r = e[t], i = s.get(r[0]);
                i[r[1]].apply(i, r[2])
              }
            }

            try {
              if (H(e)) {
                n = w(e);
                c.modules[e] = n;
                t = t.concat(C(n.requires)).concat(n._runBlocks);
                r(n._invokeQueue);
                r(n._configBlocks)
              } else J(e) ? t.push(s.invoke(e)) : W(e) ? t.push(s.invoke(e)) : Ge(e, "module")
            } catch (t) {
              W(e) && (e = e[e.length - 1]);
              t.message && t.stack && -1 === t.stack.indexOf(t.message) && (t = t.message + "\n" + t.stack);
              throw yn("modulerr", "Failed to instantiate module {0} due to:\n{1}", e, t.stack || t.message || t)
            }
          });
          return t
        }

        function k(e, a) {
          function s(t, r) {
            if (e.hasOwnProperty(t)) {
              if (e[t] === n) throw yn("cdep", "Circular dependency found: {0}", t + " <- " + i.join(" <- "));
              return e[t]
            }
            try {
              i.unshift(t);
              e[t] = n;
              e[t] = a(t, r);
              return e[t]
            } catch (r) {
              e[t] === n && delete e[t];
              throw r
            } finally {
              i.shift()
            }
          }

          function u(e, n, r) {
            var i = [], a = En.$$annotate(e, t, r);
            for (var o = 0, u = a.length; o < u; o++) {
              var l = a[o];
              if ("string" !== typeof l) throw yn("itkn", "Incorrect injection token! Expected service name as string, got {0}", l);
              i.push(n && n.hasOwnProperty(l) ? n[l] : s(l, r))
            }
            return i
          }

          function l(e) {
            if (f || "function" !== typeof e) return false;
            var t = e.$$ngIsClass;
            te(t) || (t = e.$$ngIsClass = /^class\b/.test(bn(e)));
            return t
          }

          function c(e, t, n, r) {
            if ("string" === typeof n) {
              r = n;
              n = null
            }
            var i = u(e, n, r);
            W(e) && (e = e[e.length - 1]);
            if (l(e)) {
              i.unshift(null);
              return new (Function.prototype.bind.apply(e, i))
            }
            return e.apply(t, i)
          }

          function p(e, t, n) {
            var r = W(e) ? e[e.length - 1] : e;
            var i = u(e, t, n);
            i.unshift(null);
            return new (Function.prototype.bind.apply(r, i))
          }

          return {
            invoke: c, instantiate: p, get: s, annotate: En.$$annotate, has: function (t) {
              return o.hasOwnProperty(t + r) || e.hasOwnProperty(t)
            }
          }
        }
      }

      En.$$annotate = Cn;

      function kn() {
        var e = true;
        this.disableAutoScrolling = function () {
          e = false
        };
        this.$get = ["$window", "$location", "$rootScope", function (t, n, r) {
          var i = t.document;

          function a(e) {
            var t = null;
            Array.prototype.some.call(e, function (e) {
              if ("a" === ce(e)) {
                t = e;
                return true
              }
            });
            return t
          }

          function o() {
            var e = u.yOffset;
            if (J(e)) e = e(); else if (ue(e)) {
              var n = e[0];
              var r = t.getComputedStyle(n);
              e = "fixed" !== r.position ? 0 : n.getBoundingClientRect().bottom
            } else B(e) || (e = 0);
            return e
          }

          function s(e) {
            if (e) {
              e.scrollIntoView();
              var n = o();
              if (n) {
                var r = e.getBoundingClientRect().top;
                t.scrollBy(0, r - n)
              }
            } else t.scrollTo(0, 0)
          }

          function u(e) {
            e = H(e) ? e : B(e) ? e.toString() : n.hash();
            var t;
            e ? (t = i.getElementById(e)) ? s(t) : (t = a(i.getElementsByName(e))) ? s(t) : "top" === e && s(null) : s(null)
          }

          e && r.$watch(function e() {
            return n.hash()
          }, function e(t, n) {
            if (t === n && "" === t) return;
            Yt(function () {
              r.$evalAsync(u)
            })
          });
          return u
        }]
      }

      var Sn = a("$animate");
      var An = 1;
      var Tn = "ng-animate";

      function On(e, t) {
        if (!e && !t) return "";
        if (!e) return t;
        if (!t) return e;
        W(e) && (e = e.join(" "));
        W(t) && (t = t.join(" "));
        return e + " " + t
      }

      function jn(e) {
        for (var t = 0; t < e.length; t++) {
          var n = e[t];
          if (n.nodeType === An) return n
        }
      }

      function Mn(e) {
        H(e) && (e = e.split(" "));
        var t = Ke();
        E(e, function (e) {
          e.length && (t[e] = true)
        });
        return t
      }

      function Dn(e) {
        return F(e) ? e : {}
      }

      var Nn = function () {
        this.$get = P
      };
      var qn = function () {
        var e = new pn;
        var t = [];
        this.$get = ["$$AnimateRunner", "$rootScope", function (n, r) {
          return {
            enabled: P, on: P, off: P, pin: P, push: function (e, t, r, i) {
              i && i();
              r = r || {};
              r.from && e.css(r.from);
              r.to && e.css(r.to);
              (r.addClass || r.removeClass) && o(e, r.addClass, r.removeClass);
              var a = new n;
              a.complete();
              return a
            }
          };

          function i(e, t, n) {
            var r = false;
            if (t) {
              t = H(t) ? t.split(" ") : W(t) ? t : [];
              E(t, function (t) {
                if (t) {
                  r = true;
                  e[t] = n
                }
              })
            }
            return r
          }

          function a() {
            E(t, function (t) {
              var n = e.get(t);
              if (n) {
                var r = Mn(t.attr("class"));
                var i = "";
                var a = "";
                E(n, function (e, t) {
                  var n = !!r[t];
                  e !== n && (e ? i += (i.length ? " " : "") + t : a += (a.length ? " " : "") + t)
                });
                E(t, function (e) {
                  i && Bt(e, i);
                  a && Ht(e, a)
                });
                e.delete(t)
              }
            });
            t.length = 0
          }

          function o(n, o, s) {
            var u = e.get(n) || {};
            var l = i(u, o, true);
            var c = i(u, s, false);
            if (l || c) {
              e.set(n, u);
              t.push(n);
              1 === t.length && r.$$postDigest(a)
            }
          }
        }]
      };
      var Pn = ["$provide", function (e) {
        var t = this;
        var n = null;
        var r = null;
        this.$$registeredAnimations = Object.create(null);
        this.register = function (n, r) {
          if (n && "." !== n.charAt(0)) throw Sn("notcsel", "Expecting class selector starting with '.' got '{0}'.", n);
          var i = n + "-animation";
          t.$$registeredAnimations[n.substr(1)] = i;
          e.factory(i, r)
        };
        this.customFilter = function (e) {
          1 === arguments.length && (r = J(e) ? e : null);
          return r
        };
        this.classNameFilter = function (e) {
          if (1 === arguments.length) {
            n = e instanceof RegExp ? e : null;
            if (n) {
              var t = new RegExp("[(\\s|\\/)]" + Tn + "[(\\s|\\/)]");
              if (t.test(n.toString())) {
                n = null;
                throw Sn("nongcls", '$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.', Tn)
              }
            }
          }
          return n
        };
        this.$get = ["$$animateQueue", function (e) {
          function t(e, t, n) {
            if (n) {
              var r = jn(n);
              !r || r.parentNode || r.previousElementSibling || (n = null)
            }
            n ? n.after(e) : t.prepend(e)
          }

          return {
            on: e.on, off: e.off, pin: e.pin, enabled: e.enabled, cancel: function (e) {
              e.cancel && e.cancel()
            }, enter: function (n, r, i, a) {
              r = r && p(r);
              i = i && p(i);
              r = r || i.parent();
              t(n, r, i);
              return e.push(n, "enter", Dn(a))
            }, move: function (n, r, i, a) {
              r = r && p(r);
              i = i && p(i);
              r = r || i.parent();
              t(n, r, i);
              return e.push(n, "move", Dn(a))
            }, leave: function (t, n) {
              return e.push(t, "leave", Dn(n), function () {
                t.remove()
              })
            }, addClass: function (t, n, r) {
              r = Dn(r);
              r.addClass = On(r.addclass, n);
              return e.push(t, "addClass", r)
            }, removeClass: function (t, n, r) {
              r = Dn(r);
              r.removeClass = On(r.removeClass, n);
              return e.push(t, "removeClass", r)
            }, setClass: function (t, n, r, i) {
              i = Dn(i);
              i.addClass = On(i.addClass, n);
              i.removeClass = On(i.removeClass, r);
              return e.push(t, "setClass", i)
            }, animate: function (t, n, r, i, a) {
              a = Dn(a);
              a.from = a.from ? j(a.from, n) : n;
              a.to = a.to ? j(a.to, r) : r;
              i = i || "ng-inline-animate";
              a.tempClasses = On(a.tempClasses, i);
              return e.push(t, "animate", a)
            }
          }
        }]
      }];
      var _n = function () {
        this.$get = ["$$rAF", function (e) {
          var t = [];

          function n(n) {
            t.push(n);
            if (t.length > 1) return;
            e(function () {
              for (var e = 0; e < t.length; e++) t[e]();
              t = []
            })
          }

          return function () {
            var e = false;
            n(function () {
              e = true
            });
            return function (t) {
              e ? t() : n(t)
            }
          }
        }]
      };
      var Rn = function () {
        this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$$isDocumentHidden", "$timeout", function (e, t, n, r, i) {
          var a = 0;
          var o = 1;
          var s = 2;
          u.chain = function (e, t) {
            var n = 0;
            r();

            function r() {
              if (n === e.length) {
                t(true);
                return
              }
              e[n](function (e) {
                if (false === e) {
                  t(false);
                  return
                }
                n++;
                r()
              })
            }
          };
          u.all = function (e, t) {
            var n = 0;
            var r = true;
            E(e, function (e) {
              e.done(i)
            });

            function i(i) {
              r = r && i;
              ++n === e.length && t(r)
            }
          };

          function u(e) {
            this.setHost(e);
            var t = n();
            var a = function (e) {
              i(e, 0, false)
            };
            this._doneCallbacks = [];
            this._tick = function (e) {
              r() ? a(e) : t(e)
            };
            this._state = 0
          }

          u.prototype = {
            setHost: function (e) {
              this.host = e || {}
            }, done: function (e) {
              this._state === s ? e() : this._doneCallbacks.push(e)
            }, progress: P, getPromise: function () {
              if (!this.promise) {
                var t = this;
                this.promise = e(function (e, n) {
                  t.done(function (t) {
                    false === t ? n() : e()
                  })
                })
              }
              return this.promise
            }, then: function (e, t) {
              return this.getPromise().then(e, t)
            }, catch: function (e) {
              return this.getPromise()["catch"](e)
            }, finally: function (e) {
              return this.getPromise()["finally"](e)
            }, pause: function () {
              this.host.pause && this.host.pause()
            }, resume: function () {
              this.host.resume && this.host.resume()
            }, end: function () {
              this.host.end && this.host.end();
              this._resolve(true)
            }, cancel: function () {
              this.host.cancel && this.host.cancel();
              this._resolve(false)
            }, complete: function (e) {
              var t = this;
              if (t._state === a) {
                t._state = o;
                t._tick(function () {
                  t._resolve(e)
                })
              }
            }, _resolve: function (e) {
              if (this._state !== s) {
                E(this._doneCallbacks, function (t) {
                  t(e)
                });
                this._doneCallbacks.length = 0;
                this._state = s
              }
            }
          };
          return u
        }]
      };
      var Ln = function () {
        this.$get = ["$$rAF", "$q", "$$AnimateRunner", function (e, t, n) {
          return function (t, r) {
            var i = r || {};
            i.$$prepared || (i = he(i));
            i.cleanupStyles && (i.from = i.to = null);
            if (i.from) {
              t.css(i.from);
              i.from = null
            }
            var a, o = new n;
            return {start: s, end: s};

            function s() {
              e(function () {
                u();
                a || o.complete();
                a = true
              });
              return o
            }

            function u() {
              if (i.addClass) {
                t.addClass(i.addClass);
                i.addClass = null
              }
              if (i.removeClass) {
                t.removeClass(i.removeClass);
                i.removeClass = null
              }
              if (i.to) {
                t.css(i.to);
                i.to = null
              }
            }
          }
        }]
      };

      function In(e, t, n, r) {
        var i = this, a = e.location, o = e.history, s = e.setTimeout, u = e.clearTimeout, l = {};
        i.isMock = false;
        var c = 0;
        var f = [];
        i.$$completeOutstandingRequest = h;
        i.$$incOutstandingRequestCount = function () {
          c++
        };

        function h(e) {
          try {
            e.apply(null, ye(arguments, 1))
          } finally {
            c--;
            if (0 === c) while (f.length) try {
              f.pop()()
            } catch (e) {
              n.error(e)
            }
          }
        }

        function d(e) {
          var t = e.indexOf("#");
          return -1 === t ? "" : e.substr(t)
        }

        i.notifyWhenNoOutstandingRequests = function (e) {
          0 === c ? e() : f.push(e)
        };
        var v, m, g = a.href, $ = t.find("base"), y = null, b = r.history ? function e() {
          try {
            return o.state
          } catch (e) {
          }
        } : P;
        S();
        i.url = function (t, n, s) {
          I(s) && (s = null);
          a !== e.location && (a = e.location);
          o !== e.history && (o = e.history);
          if (t) {
            var u = m === s;
            if (g === t && (!r.history || u)) return i;
            var l = g && Hr(g) === Hr(t);
            g = t;
            m = s;
            if (!r.history || l && u) {
              l || (y = t);
              n ? a.replace(t) : l ? a.hash = d(t) : a.href = t;
              a.href !== t && (y = t)
            } else {
              o[n ? "replaceState" : "pushState"](s, "", t);
              S()
            }
            y && (y = t);
            return i
          }
          return y || a.href
        };
        i.state = function () {
          return v
        };
        var w = [], x = false;

        function C() {
          y = null;
          A()
        }

        var k = null;

        function S() {
          v = b();
          v = I(v) ? null : v;
          ve(v, k) && (v = k);
          k = v;
          m = v
        }

        function A() {
          var e = m;
          S();
          if (g === i.url() && e === v) return;
          g = i.url();
          m = v;
          E(w, function (e) {
            e(i.url(), v)
          })
        }

        i.onUrlChange = function (t) {
          if (!x) {
            r.history && p(e).on("popstate", C);
            p(e).on("hashchange", C);
            x = true
          }
          w.push(t);
          return t
        };
        i.$$applicationDestroyed = function () {
          p(e).off("hashchange popstate", C)
        };
        i.$$checkUrlChange = A;
        i.baseHref = function () {
          var e = $.attr("href");
          return e ? e.replace(/^(https?:)?\/\/[^/]*/, "") : ""
        };
        i.defer = function (e, t) {
          var n;
          c++;
          n = s(function () {
            delete l[n];
            h(e)
          }, t || 0);
          l[n] = true;
          return n
        };
        i.defer.cancel = function (e) {
          if (l[e]) {
            delete l[e];
            u(e);
            h(P);
            return true
          }
          return false
        }
      }

      function Vn() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function (e, t, n, r) {
          return new In(e, r, t, n)
        }]
      }

      function Fn() {
        this.$get = function () {
          var e = {};

          function t(t, n) {
            if (t in e) throw a("$cacheFactory")("iid", "CacheId '{0}' is already taken!", t);
            var r = 0, i = j({}, n, {id: t}), o = Ke(), s = n && n.capacity || Number.MAX_VALUE, u = Ke(), l = null,
              c = null;
            return e[t] = {
              put: function (e, t) {
                if (I(t)) return;
                if (s < Number.MAX_VALUE) {
                  var n = u[e] || (u[e] = {key: e});
                  f(n)
                }
                e in o || r++;
                o[e] = t;
                r > s && this.remove(c.key);
                return t
              }, get: function (e) {
                if (s < Number.MAX_VALUE) {
                  var t = u[e];
                  if (!t) return;
                  f(t)
                }
                return o[e]
              }, remove: function (e) {
                if (s < Number.MAX_VALUE) {
                  var t = u[e];
                  if (!t) return;
                  t === l && (l = t.p);
                  t === c && (c = t.n);
                  p(t.n, t.p);
                  delete u[e]
                }
                if (!(e in o)) return;
                delete o[e];
                r--
              }, removeAll: function () {
                o = Ke();
                r = 0;
                u = Ke();
                l = c = null
              }, destroy: function () {
                o = null;
                i = null;
                u = null;
                delete e[t]
              }, info: function () {
                return j({}, i, {size: r})
              }
            };

            function f(e) {
              if (e !== l) {
                c ? c === e && (c = e.n) : c = e;
                p(e.n, e.p);
                p(e, l);
                l = e;
                l.n = null
              }
            }

            function p(e, t) {
              if (e !== t) {
                e && (e.p = t);
                t && (t.n = e)
              }
            }
          }

          t.info = function () {
            var t = {};
            E(e, function (e, n) {
              t[n] = e.info()
            });
            return t
          };
          t.get = function (t) {
            return e[t]
          };
          return t
        }
      }

      function Un() {
        this.$get = ["$cacheFactory", function (e) {
          return e("templates")
        }]
      }

      var Hn = a("$compile");

      function Bn() {
      }

      var zn = new Bn;
      Wn.$inject = ["$provide", "$$sanitizeUriProvider"];

      function Wn(e, n) {
        var r = {}, i = "Directive", a = /^\s*directive:\s*([\w-]+)\s+(.*)$/, o = /(([\w-]+)(?::([^;]+))?;?)/,
          s = le("ngSrc,ngSrcset,src,srcset"), c = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/;
        var h = /^(on[a-z]+|formaction)$/;
        var d = Ke();

        function v(e, t, n) {
          var r = /^([@&]|[=<](\*?))(\??)\s*([\w$]*)$/;
          var i = Ke();
          E(e, function (e, a) {
            e = e.trim();
            if (e in d) {
              i[a] = d[e];
              return
            }
            var o = e.match(r);
            if (!o) throw Hn("iscp", "Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}", t, a, e, n ? "controller bindings definition" : "isolate scope definition");
            i[a] = {mode: o[1][0], collection: "*" === o[2], optional: "?" === o[3], attrName: o[4] || a};
            o[4] && (d[e] = i[a])
          });
          return i
        }

        function m(e, t) {
          var n = {isolateScope: null, bindToController: null};
          if (F(e.scope)) if (true === e.bindToController) {
            n.bindToController = v(e.scope, t, true);
            n.isolateScope = {}
          } else n.isolateScope = v(e.scope, t, false);
          F(e.bindToController) && (n.bindToController = v(e.bindToController, t, true));
          if (n.bindToController && !e.controller) throw Hn("noctrl", "Cannot bind to controller without directive '{0}'s controller.", t);
          return n
        }

        function $(e) {
          var t = e.charAt(0);
          if (!t || t !== l(t)) throw Hn("baddir", "Directive/Component name '{0}' is invalid. The first character must be a lowercase letter", e);
          if (e !== e.trim()) throw Hn("baddir", "Directive/Component name '{0}' is invalid. The name should not contain leading or trailing whitespaces", e)
        }

        function y(e) {
          var t = e.require || e.controller && e.name;
          !W(t) && F(t) && E(t, function (e, n) {
            var r = e.match(c);
            var i = e.substring(r[0].length);
            i || (t[n] = r[0] + n)
          });
          return t
        }

        function b(e, t) {
          if (e && !(H(e) && /[EACM]/.test(e))) throw Hn("badrestrict", "Restrict property '{0}' of directive '{1}' is invalid", e, t);
          return e || "EA"
        }

        this.directive = function t(n, a) {
          We(n, "name");
          Je(n, "directive");
          if (H(n)) {
            $(n);
            We(a, "directiveFactory");
            if (!r.hasOwnProperty(n)) {
              r[n] = [];
              e.factory(n + i, ["$injector", "$exceptionHandler", function (e, t) {
                var i = [];
                E(r[n], function (r, a) {
                  try {
                    var o = e.invoke(r);
                    J(o) ? o = {compile: R(o)} : !o.compile && o.link && (o.compile = R(o.link));
                    o.priority = o.priority || 0;
                    o.index = a;
                    o.name = o.name || n;
                    o.require = y(o);
                    o.restrict = b(o.restrict, n);
                    o.$$moduleName = r.$$moduleName;
                    i.push(o)
                  } catch (e) {
                    t(e)
                  }
                });
                return i
              }])
            }
            r[n].push(a)
          } else E(n, S(t));
          return this
        };
        this.component = function e(t, n) {
          if (!H(t)) {
            E(t, S(be(this, e)));
            return this
          }
          var r = n.controller || function () {
          };

          function i(e) {
            function t(t) {
              return J(t) || W(t) ? function (n, r) {
                return e.invoke(t, this, {$element: n, $attrs: r})
              } : t
            }

            var i = n.template || n.templateUrl ? n.template : "";
            var a = {
              controller: r,
              controllerAs: rr(n.controller) || n.controllerAs || "$ctrl",
              template: t(i),
              templateUrl: t(n.templateUrl),
              transclude: n.transclude,
              scope: {},
              bindToController: n.bindings || {},
              restrict: "E",
              require: n.require
            };
            E(n, function (e, t) {
              "$" === t.charAt(0) && (a[t] = e)
            });
            return a
          }

          E(n, function (e, t) {
            if ("$" === t.charAt(0)) {
              i[t] = e;
              J(r) && (r[t] = e)
            }
          });
          i.$inject = ["$injector"];
          return this.directive(t, i)
        };
        this.aHrefSanitizationWhitelist = function (e) {
          if (V(e)) {
            n.aHrefSanitizationWhitelist(e);
            return this
          }
          return n.aHrefSanitizationWhitelist()
        };
        this.imgSrcSanitizationWhitelist = function (e) {
          if (V(e)) {
            n.imgSrcSanitizationWhitelist(e);
            return this
          }
          return n.imgSrcSanitizationWhitelist()
        };
        var w = true;
        this.debugInfoEnabled = function (e) {
          if (V(e)) {
            w = e;
            return this
          }
          return w
        };
        var x = false;
        this.strictComponentBindingsEnabled = function (e) {
          if (V(e)) {
            x = e;
            return this
          }
          return x
        };
        var C = 10;
        this.onChangesTtl = function (e) {
          if (arguments.length) {
            C = e;
            return this
          }
          return C
        };
        var k = true;
        this.commentDirectivesEnabled = function (e) {
          if (arguments.length) {
            k = e;
            return this
          }
          return k
        };
        var A = true;
        this.cssClassDirectivesEnabled = function (e) {
          if (arguments.length) {
            A = e;
            return this
          }
          return A
        };
        this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", function (e, n, d, v, $, y, b, S, T) {
          var O = /^\w/;
          var M = t.document.createElement("div");
          var D = k;
          var N = A;
          var R = C;
          var L;

          function V() {
            try {
              if (!--R) {
                L = void 0;
                throw Hn("infchng", "{0} $onChanges() iterations reached. Aborting!\n", C)
              }
              b.$apply(function () {
                for (var e = 0, t = L.length; e < t; ++e) try {
                  L[e]()
                } catch (e) {
                  d(e)
                }
                L = void 0
              })
            } finally {
              R++
            }
          }

          function U(e, t) {
            if (t) {
              var n = Object.keys(t);
              var r, i, a;
              for (r = 0, i = n.length; r < i; r++) {
                a = n[r];
                this[a] = t[a]
              }
            } else this.$attr = {};
            this.$$element = e
          }

          U.prototype = {
            $normalize: Yn, $addClass: function (e) {
              e && e.length > 0 && T.addClass(this.$$element, e)
            }, $removeClass: function (e) {
              e && e.length > 0 && T.removeClass(this.$$element, e)
            }, $updateClass: function (e, t) {
              var n = Zn(e, t);
              n && n.length && T.addClass(this.$$element, n);
              var r = Zn(t, e);
              r && r.length && T.removeClass(this.$$element, r)
            }, $set: function (e, t, n, r) {
              var i = this.$$element[0], a = nn(i, e), o = rn(e), s = e, u;
              if (a) {
                this.$$element.prop(e, t);
                r = a
              } else if (o) {
                this[o] = t;
                s = o
              }
              this[e] = t;
              if (r) this.$attr[e] = r; else {
                r = this.$attr[e];
                r || (this.$attr[e] = r = He(e, "-"))
              }
              u = ce(this.$$element);
              if ("img" === u && "srcset" === e && t) {
                if (!H(t)) throw Hn("srcset", "Can't pass trusted values to `$set('srcset', value)`: \"{0}\"", t.toString());
                var l = "";
                var c = oe(t);
                var f = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/;
                var p = /\s/.test(c) ? f : /(,)/;
                var h = c.split(p);
                var v = Math.floor(h.length / 2);
                for (var m = 0; m < v; m++) {
                  var g = 2 * m;
                  l += S.getTrustedMediaUrl(oe(h[g]));
                  l += " " + oe(h[g + 1])
                }
                var $ = oe(h[2 * m]).split(/\s/);
                l += S.getTrustedMediaUrl(oe($[0]));
                2 === $.length && (l += " " + oe($[1]));
                this[e] = t = l
              }
              false !== n && (null === t || I(t) ? this.$$element.removeAttr(r) : O.test(r) ? this.$$element.attr(r, t) : B(this.$$element[0], r, t));
              var y = this.$$observers;
              y && E(y[s], function (e) {
                try {
                  e(t)
                } catch (e) {
                  d(e)
                }
              })
            }, $observe: function (e, t) {
              var n = this, r = n.$$observers || (n.$$observers = Ke()), i = r[e] || (r[e] = []);
              i.push(t);
              b.$evalAsync(function () {
                i.$$inter || !n.hasOwnProperty(e) || I(n[e]) || t(n[e])
              });
              return function () {
                pe(i, t)
              }
            }
          };

          function B(e, t, n) {
            M.innerHTML = "<span " + t + ">";
            var r = M.firstChild.attributes;
            var i = r[0];
            r.removeNamedItem(i.name);
            i.value = n;
            e.attributes.setNamedItem(i)
          }

          function z(e, t) {
            try {
              e.addClass(t)
            } catch (e) {
            }
          }

          var Q = n.startSymbol(), Y = n.endSymbol(), X = "{{" === Q && "}}" === Y ? _ : function e(t) {
            return t.replace(/\{\{/g, Q).replace(/}}/g, Y)
          }, Z = /^ngAttr[A-Z]/;
          var ee = /^(.+)Start$/;
          ne.$$addBindingInfo = w ? function e(t, n) {
            var r = t.data("$binding") || [];
            W(n) ? r = r.concat(n) : r.push(n);
            t.data("$binding", r)
          } : P;
          ne.$$addBindingClass = w ? function e(t) {
            z(t, "ng-binding")
          } : P;
          ne.$$addScopeInfo = w ? function e(t, n, r, i) {
            var a = r ? i ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
            t.data(a, n)
          } : P;
          ne.$$addScopeClass = w ? function e(t, n) {
            z(t, n ? "ng-isolate-scope" : "ng-scope")
          } : P;
          ne.$$createComment = function (e, n) {
            var r = "";
            if (w) {
              r = " " + (e || "") + ": ";
              n && (r += n + " ")
            }
            return t.document.createComment(r)
          };
          return ne;

          function ne(e, t, n, r, i) {
            e instanceof p || (e = p(e));
            var a = ie(e, t, e, n, r, i);
            ne.$$addScopeClass(e);
            var o = null;
            return function t(n, r, s) {
              if (!e) throw Hn("multilink", "This element has already been linked.");
              We(n, "scope");
              i && i.needsNewScope && (n = n.$parent.$new());
              s = s || {};
              var u = s.parentBoundTranscludeFn, l = s.transcludeControllers, c = s.futureParentElement;
              u && u.$$boundTransclude && (u = u.$$boundTransclude);
              o || (o = re(c));
              var f;
              f = "html" !== o ? p(Me(o, p("<div></div>").append(e).html())) : r ? Xt.clone.call(e) : e;
              if (l) for (var h in l) f.data("$" + h + "Controller", l[h].instance);
              ne.$$addScopeInfo(f, n);
              r && r(f, n);
              a && a(n, f, f, u);
              r || (e = a = null);
              return f
            }
          }

          function re(e) {
            var t = e && e[0];
            return t && "foreignobject" !== ce(t) && g.call(t).match(/SVG/) ? "svg" : "html"
          }

          function ie(e, t, n, r, i, a) {
            var o = [], s = W(e) || e instanceof p, u, l, c, h, d, v, m;
            for (var g = 0; g < e.length; g++) {
              u = new U;
              11 === f && ae(e, g, s);
              l = ue(e[g], [], u, 0 === g ? r : void 0, i);
              c = l.length ? ge(l, e[g], u, t, n, null, [], [], a) : null;
              c && c.scope && ne.$$addScopeClass(u.$$element);
              d = c && c.terminal || !(h = e[g].childNodes) || !h.length ? null : ie(h, c ? (c.transcludeOnThisElement || !c.templateOnThisElement) && c.transclude : t);
              if (c || d) {
                o.push(g, c, d);
                v = true;
                m = m || c
              }
              a = null
            }
            return v ? $ : null;

            function $(e, n, r, i) {
              var a, s, u, l, c, f, h, d;
              var v;
              if (m) {
                var g = n.length;
                v = new Array(g);
                for (c = 0; c < o.length; c += 3) {
                  h = o[c];
                  v[h] = n[h]
                }
              } else v = n;
              for (c = 0, f = o.length; c < f;) {
                u = v[o[c++]];
                a = o[c++];
                s = o[c++];
                if (a) {
                  if (a.scope) {
                    l = e.$new();
                    ne.$$addScopeInfo(p(u), l)
                  } else l = e;
                  d = a.transcludeOnThisElement ? se(e, a.transclude, i) : !a.templateOnThisElement && i ? i : !i && t ? se(e, t) : null;
                  a(s, l, u, r, d)
                } else s && s(e, u.childNodes, void 0, i)
              }
            }
          }

          function ae(e, t, n) {
            var r = e[t];
            var i = r.parentNode;
            var a;
            if (r.nodeType !== tt) return;
            while (true) {
              a = i ? r.nextSibling : e[t + 1];
              if (!a || a.nodeType !== tt) break;
              r.nodeValue = r.nodeValue + a.nodeValue;
              a.parentNode && a.parentNode.removeChild(a);
              n && a === e[t + 1] && e.splice(t + 1, 1)
            }
          }

          function se(e, t, n) {
            function r(r, i, a, o, s) {
              if (!r) {
                r = e.$new(false, s);
                r.$$transcluded = true
              }
              return t(r, i, {parentBoundTranscludeFn: n, transcludeControllers: a, futureParentElement: o})
            }

            var i = r.$$slots = Ke();
            for (var a in t.$$slots) t.$$slots[a] ? i[a] = se(e, t.$$slots[a], n) : i[a] = null;
            return r
          }

          function ue(e, t, n, r, i) {
            var a = e.nodeType, s = n.$attr, u, l, c;
            switch (a) {
              case Ze:
                l = ce(e);
                Ce(t, Yn(l), "E", r, i);
                for (var f, p, h, d, v, m, g = e.attributes, $ = 0, y = g && g.length; $ < y; $++) {
                  var b = false;
                  var w = false;
                  f = g[$];
                  p = f.name;
                  v = f.value;
                  d = Yn(p);
                  m = Z.test(d);
                  m && (p = p.replace(Jn, "").substr(8).replace(/_(.)/g, function (e, t) {
                    return t.toUpperCase()
                  }));
                  var x = d.match(ee);
                  if (x && Ee(x[1])) {
                    b = p;
                    w = p.substr(0, p.length - 5) + "end";
                    p = p.substr(0, p.length - 6)
                  }
                  h = Yn(p.toLowerCase());
                  s[h] = p;
                  if (m || !n.hasOwnProperty(h)) {
                    n[h] = v;
                    nn(e, h) && (n[h] = true)
                  }
                  Ne(e, t, v, h, m);
                  Ce(t, h, "A", r, i, b, w)
                }
                "input" === l && "hidden" === e.getAttribute("type") && e.setAttribute("autocomplete", "off");
                if (!N) break;
                c = e.className;
                F(c) && (c = c.animVal);
                if (H(c) && "" !== c) while (u = o.exec(c)) {
                  h = Yn(u[2]);
                  Ce(t, h, "C", r, i) && (n[h] = oe(u[3]));
                  c = c.substr(u.index + u[0].length)
                }
                break;
              case tt:
                je(t, e.nodeValue);
                break;
              case nt:
                if (!D) break;
                le(e, t, n, r, i);
                break
            }
            t.sort(Ae);
            return t
          }

          function le(e, t, n, r, i) {
            try {
              var o = a.exec(e.nodeValue);
              if (o) {
                var s = Yn(o[1]);
                Ce(t, s, "M", r, i) && (n[s] = oe(o[2]))
              }
            } catch (e) {
            }
          }

          function fe(e, t, n) {
            var r = [];
            var i = 0;
            if (t && e.hasAttribute && e.hasAttribute(t)) do {
              if (!e) throw Hn("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", t, n);
              if (e.nodeType === Ze) {
                e.hasAttribute(t) && i++;
                e.hasAttribute(n) && i--
              }
              r.push(e);
              e = e.nextSibling
            } while (i > 0); else r.push(e);
            return p(r)
          }

          function he(e, t, n) {
            return function r(i, a, o, s, u) {
              a = fe(a[0], t, n);
              return e(i, a, o, s, u)
            }
          }

          function me(e, t, n, r, i, a) {
            var o;
            if (e) return ne(t, n, r, i, a);
            return function e() {
              if (!o) {
                o = ne(t, n, r, i, a);
                t = n = a = null
              }
              return o.apply(this, arguments)
            }
          }

          function ge(e, n, r, i, a, o, s, u, l) {
            l = l || {};
            var c = -Number.MAX_VALUE, f = l.newScopeDirective, h = l.controllerDirectives,
              v = l.newIsolateScopeDirective, m = l.templateDirective, g = l.nonTlbTranscludeDirective, $ = false,
              y = false, b = l.hasElementTranscludeDirective, w = r.$$element = p(n), x, C, k, S = o, A = i, T,
              O = false, M = false, D;
            for (var N = 0, q = e.length; N < q; N++) {
              x = e[N];
              var P = x.$$start;
              var _ = x.$$end;
              P && (w = fe(n, P, _));
              k = void 0;
              if (c > x.priority) break;
              D = x.scope;
              if (D) {
                if (!x.templateUrl) if (F(D)) {
                  Oe("new/isolated scope", v || f, x, w);
                  v = x
                } else Oe("new/isolated scope", v, x, w);
                f = f || x
              }
              C = x.name;
              if (!O && (x.replace && (x.templateUrl || x.template) || x.transclude && !x.$$tlb)) {
                var R;
                for (var L = N + 1; R = e[L++];) if (R.transclude && !R.$$tlb || R.replace && (R.templateUrl || R.template)) {
                  M = true;
                  break
                }
                O = true
              }
              if (!x.templateUrl && x.controller) {
                h = h || Ke();
                Oe("'" + C + "' controller", h[C], x, w);
                h[C] = x
              }
              D = x.transclude;
              if (D) {
                $ = true;
                if (!x.$$tlb) {
                  Oe("transclusion", g, x, w);
                  g = x
                }
                if ("element" === D) {
                  b = true;
                  c = x.priority;
                  k = w;
                  w = r.$$element = p(ne.$$createComment(C, r[C]));
                  n = w[0];
                  qe(a, ye(k), n);
                  A = me(M, k, i, c, S && S.name, {nonTlbTranscludeDirective: g})
                } else {
                  var V = Ke();
                  if (F(D)) {
                    k = t.document.createDocumentFragment();
                    var H = Ke();
                    var B = Ke();
                    E(D, function (e, t) {
                      var n = "?" === e.charAt(0);
                      e = n ? e.substring(1) : e;
                      H[e] = t;
                      V[t] = null;
                      B[t] = n
                    });
                    E(w.contents(), function (e) {
                      var n = H[Yn(ce(e))];
                      if (n) {
                        B[n] = true;
                        V[n] = V[n] || t.document.createDocumentFragment();
                        V[n].appendChild(e)
                      } else k.appendChild(e)
                    });
                    E(B, function (e, t) {
                      if (!e) throw Hn("reqslot", "Required transclusion slot `{0}` was not filled.", t)
                    });
                    for (var z in V) V[z] && (V[z] = me(M, V[z].childNodes, i));
                    k = k.childNodes
                  } else k = p(qt(n)).contents();
                  w.empty();
                  A = me(M, k, i, void 0, void 0, {needsNewScope: x.$$isolateScope || x.$$newScope});
                  A.$$slots = V
                }
              }
              if (x.template) {
                y = true;
                Oe("template", m, x, w);
                m = x;
                D = J(x.template) ? x.template(w, r) : x.template;
                D = X(D);
                if (x.replace) {
                  S = x;
                  k = St(D) ? [] : er(Me(x.templateNamespace, oe(D)));
                  n = k[0];
                  if (1 !== k.length || n.nodeType !== Ze) throw Hn("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", C, "");
                  qe(a, w, n);
                  var G = {$attr: {}};
                  var Q = ue(n, [], G);
                  var Y = e.splice(N + 1, e.length - (N + 1));
                  (v || f) && xe(Q, v, f);
                  e = e.concat(Q).concat(Y);
                  ke(r, G);
                  q = e.length
                } else w.html(D)
              }
              if (x.templateUrl) {
                y = true;
                Oe("template", m, x, w);
                m = x;
                x.replace && (S = x);
                te = Se(e.splice(N, e.length - N), w, r, a, $ && A, s, u, {
                  controllerDirectives: h,
                  newScopeDirective: f !== x && f,
                  newIsolateScopeDirective: v,
                  templateDirective: m,
                  nonTlbTranscludeDirective: g
                });
                q = e.length
              } else if (x.compile) try {
                T = x.compile(w, r, A);
                var Z = x.$$originalDirective || x;
                J(T) ? ee(null, be(Z, T), P, _) : T && ee(be(Z, T.pre), be(Z, T.post), P, _)
              } catch (e) {
                d(e, Te(w))
              }
              if (x.terminal) {
                te.terminal = true;
                c = Math.max(c, x.priority)
              }
            }
            te.scope = f && true === f.scope;
            te.transcludeOnThisElement = $;
            te.templateOnThisElement = y;
            te.transclude = A;
            l.hasElementTranscludeDirective = b;
            return te;

            function ee(e, t, n, r) {
              if (e) {
                n && (e = he(e, n, r));
                e.require = x.require;
                e.directiveName = C;
                (v === x || x.$$isolateScope) && (e = Pe(e, {isolateScope: true}));
                s.push(e)
              }
              if (t) {
                n && (t = he(t, n, r));
                t.require = x.require;
                t.directiveName = C;
                (v === x || x.$$isolateScope) && (t = Pe(t, {isolateScope: true}));
                u.push(t)
              }
            }

            function te(e, t, i, a, o) {
              var l, c, g, $, y, w, x, C, k, S;
              if (n === i) {
                k = r;
                C = r.$$element
              } else {
                C = p(i);
                k = new U(C, r)
              }
              y = t;
              v ? $ = t.$new(true) : f && (y = t.$parent);
              if (o) {
                x = N;
                x.$$boundTransclude = o;
                x.isSlotFilled = function (e) {
                  return !!o.$$slots[e]
                }
              }
              h && (w = we(C, k, x, h, $, t, v));
              if (v) {
                ne.$$addScopeInfo(C, $, true, !(m && (m === v || m === v.$$originalDirective)));
                ne.$$addScopeClass(C, true);
                $.$$isolateBindings = v.$$isolateBindings;
                S = Le(t, k, $, $.$$isolateBindings, v);
                S.removeWatches && $.$on("$destroy", S.removeWatches)
              }
              for (var A in w) {
                var T = h[A];
                var O = w[A];
                var M = T.$$bindings.bindToController;
                O.instance = O();
                C.data("$" + T.name + "Controller", O.instance);
                O.bindingInfo = Le(y, k, O.instance, M, T)
              }
              E(h, function (e, t) {
                var n = e.require;
                e.bindToController && !W(n) && F(n) && j(w[t].instance, $e(t, n, C, w))
              });
              E(w, function (e) {
                var t = e.instance;
                if (J(t.$onChanges)) try {
                  t.$onChanges(e.bindingInfo.initialChanges)
                } catch (e) {
                  d(e)
                }
                if (J(t.$onInit)) try {
                  t.$onInit()
                } catch (e) {
                  d(e)
                }
                if (J(t.$doCheck)) {
                  y.$watch(function () {
                    t.$doCheck()
                  });
                  t.$doCheck()
                }
                J(t.$onDestroy) && y.$on("$destroy", function e() {
                  t.$onDestroy()
                })
              });
              for (l = 0, c = s.length; l < c; l++) {
                g = s[l];
                _e(g, g.isolateScope ? $ : t, C, k, g.require && $e(g.directiveName, g.require, C, w), x)
              }
              var D = t;
              v && (v.template || null === v.templateUrl) && (D = $);
              e && e(D, i.childNodes, void 0, o);
              for (l = u.length - 1; l >= 0; l--) {
                g = u[l];
                _e(g, g.isolateScope ? $ : t, C, k, g.require && $e(g.directiveName, g.require, C, w), x)
              }
              E(w, function (e) {
                var t = e.instance;
                J(t.$postLink) && t.$postLink()
              });

              function N(e, t, n, r) {
                var i;
                if (!K(e)) {
                  r = n;
                  n = t;
                  t = e;
                  e = void 0
                }
                b && (i = w);
                n || (n = b ? C.parent() : C);
                if (!r) return o(e, t, i, n, D);
                var a = o.$$slots[r];
                if (a) return a(e, t, i, n, D);
                if (I(a)) throw Hn("noslot", 'No parent directive that requires a transclusion with slot name "{0}". Element: {1}', r, Te(C))
              }
            }
          }

          function $e(e, t, n, r) {
            var i;
            if (H(t)) {
              var a = t.match(c);
              var o = t.substring(a[0].length);
              var s = a[1] || a[3];
              var u = "?" === a[2];
              if ("^^" === s) n = n.parent(); else {
                i = r && r[o];
                i = i && i.instance
              }
              if (!i) {
                var l = "$" + o + "Controller";
                i = s ? n.inheritedData(l) : n.data(l)
              }
              if (!i && !u) throw Hn("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", o, e)
            } else if (W(t)) {
              i = [];
              for (var f = 0, p = t.length; f < p; f++) i[f] = $e(e, t[f], n, r)
            } else if (F(t)) {
              i = {};
              E(t, function (t, a) {
                i[a] = $e(e, t, n, r)
              })
            }
            return i || null
          }

          function we(e, t, n, r, i, a, o) {
            var s = Ke();
            for (var u in r) {
              var l = r[u];
              var c = {$scope: l === o || l.$$isolateScope ? i : a, $element: e, $attrs: t, $transclude: n};
              var f = l.controller;
              "@" === f && (f = t[l.name]);
              var p = y(f, c, true, l.controllerAs);
              s[l.name] = p;
              e.data("$" + l.name + "Controller", p.instance)
            }
            return s
          }

          function xe(e, t, n) {
            for (var r = 0, i = e.length; r < i; r++) e[r] = q(e[r], {$$isolateScope: t, $$newScope: n})
          }

          function Ce(t, n, a, o, s, u, l) {
            if (n === s) return null;
            var c = null;
            if (r.hasOwnProperty(n)) for (var f, p = e.get(n + i), h = 0, d = p.length; h < d; h++) {
              f = p[h];
              if ((I(o) || o > f.priority) && -1 !== f.restrict.indexOf(a)) {
                u && (f = q(f, {$$start: u, $$end: l}));
                if (!f.$$bindings) {
                  var v = f.$$bindings = m(f, f.name);
                  F(v.isolateScope) && (f.$$isolateBindings = v.isolateScope)
                }
                t.push(f);
                c = f
              }
            }
            return c
          }

          function Ee(t) {
            if (r.hasOwnProperty(t)) for (var n, a = e.get(t + i), o = 0, s = a.length; o < s; o++) {
              n = a[o];
              if (n.multiElement) return true
            }
            return false
          }

          function ke(e, t) {
            var n = t.$attr, r = e.$attr;
            E(e, function (r, i) {
              if ("$" !== i.charAt(0)) {
                t[i] && t[i] !== r && (r.length ? r += ("style" === i ? ";" : " ") + t[i] : r = t[i]);
                e.$set(i, r, true, n[i])
              }
            });
            E(t, function (t, i) {
              if (!e.hasOwnProperty(i) && "$" !== i.charAt(0)) {
                e[i] = t;
                "class" !== i && "style" !== i && (r[i] = n[i])
              }
            })
          }

          function Se(e, t, n, r, i, a, o, s) {
            var u = [], l, c, f = t[0], h = e.shift(),
              m = q(h, {templateUrl: null, transclude: null, replace: null, $$originalDirective: h}),
              g = J(h.templateUrl) ? h.templateUrl(t, n) : h.templateUrl, $ = h.templateNamespace;
            t.empty();
            v(g).then(function (d) {
              var v, y, b, w;
              d = X(d);
              if (h.replace) {
                b = St(d) ? [] : er(Me($, oe(d)));
                v = b[0];
                if (1 !== b.length || v.nodeType !== Ze) throw Hn("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", h.name, g);
                y = {$attr: {}};
                qe(r, t, v);
                var x = ue(v, [], y);
                F(h.scope) && xe(x, true);
                e = x.concat(e);
                ke(n, y)
              } else {
                v = f;
                t.html(d)
              }
              e.unshift(m);
              l = ge(e, v, n, i, t, h, a, o, s);
              E(r, function (e, n) {
                e === v && (r[n] = t[0])
              });
              c = ie(t[0].childNodes, i);
              while (u.length) {
                var C = u.shift(), k = u.shift(), S = u.shift(), A = u.shift(), T = t[0];
                if (C.$$destroyed) continue;
                if (k !== f) {
                  var O = k.className;
                  s.hasElementTranscludeDirective && h.replace || (T = qt(v));
                  qe(S, p(k), T);
                  z(p(T), O)
                }
                w = l.transcludeOnThisElement ? se(C, l.transclude, A) : A;
                l(c, C, T, r, w)
              }
              u = null
            }).catch(function (e) {
              G(e) && d(e)
            });
            return function e(t, n, r, i, a) {
              var o = a;
              if (n.$$destroyed) return;
              if (u) u.push(n, r, i, o); else {
                l.transcludeOnThisElement && (o = se(n, l.transclude, a));
                l(c, n, r, i, o)
              }
            }
          }

          function Ae(e, t) {
            var n = t.priority - e.priority;
            if (0 !== n) return n;
            if (e.name !== t.name) return e.name < t.name ? -1 : 1;
            return e.index - t.index
          }

          function Oe(e, t, n, r) {
            function i(e) {
              return e ? " (module: " + e + ")" : ""
            }

            if (t) throw Hn("multidir", "Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}", t.name, i(t.$$moduleName), n.name, i(n.$$moduleName), e, Te(r))
          }

          function je(e, t) {
            var r = n(t, true);
            r && e.push({
              priority: 0, compile: function e(t) {
                var n = t.parent(), i = !!n.length;
                i && ne.$$addBindingClass(n);
                return function e(t, n) {
                  var a = n.parent();
                  i || ne.$$addBindingClass(a);
                  ne.$$addBindingInfo(a, r.expressions);
                  t.$watch(r, function e(t) {
                    n[0].nodeValue = t
                  })
                }
              }
            })
          }

          function Me(e, n) {
            e = l(e || "html");
            switch (e) {
              case"svg":
              case"math":
                var r = t.document.createElement("div");
                r.innerHTML = "<" + e + ">" + n + "</" + e + ">";
                return r.childNodes[0].childNodes;
              default:
                return n
            }
          }

          function De(e, t) {
            if ("srcdoc" === t) return S.HTML;
            var n = ce(e);
            if ("src" === t || "ngSrc" === t) {
              if (-1 === ["img", "video", "audio", "source", "track"].indexOf(n)) return S.RESOURCE_URL;
              return S.MEDIA_URL
            }
            if ("xlinkHref" === t) {
              if ("image" === n) return S.MEDIA_URL;
              if ("a" === n) return S.URL;
              return S.RESOURCE_URL
            }
            if ("form" === n && "action" === t || "base" === n && "href" === t || "link" === n && "href" === t) return S.RESOURCE_URL;
            if ("a" === n && ("href" === t || "ngHref" === t)) return S.URL
          }

          function Ne(e, t, r, i, a) {
            var o = De(e, i);
            var u = !a;
            var l = s[i] || a;
            var c = n(r, u, o, l);
            if (!c) return;
            if ("multiple" === i && "select" === ce(e)) throw Hn("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", Te(e));
            if (h.test(i)) throw Hn("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
            t.push({
              priority: 100, compile: function () {
                return {
                  pre: function e(t, a, s) {
                    var u = s.$$observers || (s.$$observers = Ke());
                    var f = s[i];
                    if (f !== r) {
                      c = f && n(f, true, o, l);
                      r = f
                    }
                    if (!c) return;
                    s[i] = c(t);
                    (u[i] || (u[i] = [])).$$inter = true;
                    (s.$$observers && s.$$observers[i].$$scope || t).$watch(c, function e(t, n) {
                      "class" === i && t !== n ? s.$updateClass(t, n) : s.$set(i, t)
                    })
                  }
                }
              }
            })
          }

          function qe(e, n, r) {
            var i = n[0], a = n.length, o = i.parentNode, s, u;
            if (e) for (s = 0, u = e.length; s < u; s++) if (e[s] === i) {
              e[s++] = r;
              for (var l = s, c = l + a - 1, f = e.length; l < f; l++, c++) c < f ? e[l] = e[c] : delete e[l];
              e.length -= a - 1;
              e.context === i && (e.context = r);
              break
            }
            o && o.replaceChild(r, i);
            var h = t.document.createDocumentFragment();
            for (s = 0; s < a; s++) h.appendChild(n[s]);
            if (p.hasData(i)) {
              p.data(r, p.data(i));
              p(i).off("$destroy")
            }
            p.cleanData(h.querySelectorAll("*"));
            for (s = 1; s < a; s++) delete n[s];
            n[0] = r;
            n.length = 1
          }

          function Pe(e, t) {
            return j(function () {
              return e.apply(null, arguments)
            }, e, t)
          }

          function _e(e, t, n, r, i, a) {
            try {
              e(t, n, r, i, a)
            } catch (e) {
              d(e, Te(n))
            }
          }

          function Re(e, t) {
            if (x) throw Hn("missingattr", "Attribute '{0}' of '{1}' is non-optional and must be set!", e, t)
          }

          function Le(e, t, r, i, a) {
            var o = [];
            var s = {};
            var l;
            E(i, function i(l, f) {
              var p = l.attrName, h = l.optional, d = l.mode, v, m, g, y, b;
              switch (d) {
                case"@":
                  if (!h && !u.call(t, p)) {
                    Re(p, a.name);
                    r[f] = t[p] = void 0
                  }
                  b = t.$observe(p, function (e) {
                    if (H(e) || te(e)) {
                      var t = r[f];
                      c(f, e, t);
                      r[f] = e
                    }
                  });
                  t.$$observers[p].$$scope = e;
                  v = t[p];
                  H(v) ? r[f] = n(v)(e) : te(v) && (r[f] = v);
                  s[f] = new Gn(zn, r[f]);
                  o.push(b);
                  break;
                case"=":
                  if (!u.call(t, p)) {
                    if (h) break;
                    Re(p, a.name);
                    t[p] = void 0
                  }
                  if (h && !t[p]) break;
                  m = $(t[p]);
                  y = m.literal ? ve : de;
                  g = m.assign || function () {
                    v = r[f] = m(e);
                    throw Hn("nonassign", "Expression '{0}' in attribute '{1}' used with directive '{2}' is non-assignable!", t[p], p, a.name)
                  };
                  v = r[f] = m(e);
                  var w = function t(n) {
                    y(n, r[f]) || (y(n, v) ? g(e, n = r[f]) : r[f] = n);
                    v = n;
                    return v
                  };
                  w.$stateful = true;
                  b = l.collection ? e.$watchCollection(t[p], w) : e.$watch($(t[p], w), null, m.literal);
                  o.push(b);
                  break;
                case"<":
                  if (!u.call(t, p)) {
                    if (h) break;
                    Re(p, a.name);
                    t[p] = void 0
                  }
                  if (h && !t[p]) break;
                  m = $(t[p]);
                  var x = m.literal;
                  var C = r[f] = m(e);
                  s[f] = new Gn(zn, r[f]);
                  b = e[l.collection ? "$watchCollection" : "$watch"](m, function e(t, n) {
                    if (n === t) {
                      if (n === C || x && ve(n, C)) return;
                      n = C
                    }
                    c(f, t, n);
                    r[f] = t
                  });
                  o.push(b);
                  break;
                case"&":
                  h || u.call(t, p) || Re(p, a.name);
                  m = t.hasOwnProperty(p) ? $(t[p]) : P;
                  if (m === P && h) break;
                  r[f] = function (t) {
                    return m(e, t)
                  };
                  break
              }
            });

            function c(t, n, i) {
              if (J(r.$onChanges) && !de(n, i)) {
                if (!L) {
                  e.$$postDigest(V);
                  L = []
                }
                if (!l) {
                  l = {};
                  L.push(f)
                }
                l[t] && (i = l[t].previousValue);
                l[t] = new Gn(i, n)
              }
            }

            function f() {
              r.$onChanges(l);
              l = void 0
            }

            return {
              initialChanges: s, removeWatches: o.length && function e() {
                for (var t = 0, n = o.length; t < n; ++t) o[t]()
              }
            }
          }
        }]
      }

      function Gn(e, t) {
        this.previousValue = e;
        this.currentValue = t
      }

      Gn.prototype.isFirstChange = function () {
        return this.previousValue === zn
      };
      var Jn = /^((?:x|data)[:\-_])/i;
      var Qn = /[:\-_]+(.)/g;

      function Yn(e) {
        return e.replace(Jn, "").replace(Qn, function (e, t, n) {
          return n ? t.toUpperCase() : t
        })
      }

      function Kn(e, t, n, r) {
      }

      function Xn(e, t, n, r, i) {
      }

      function Zn(e, t) {
        var n = "", r = e.split(/\s+/), i = t.split(/\s+/);
        e:for (var a = 0; a < r.length; a++) {
          var o = r[a];
          for (var s = 0; s < i.length; s++) if (o === i[s]) continue e;
          n += (n.length > 0 ? " " : "") + o
        }
        return n
      }

      function er(e) {
        e = p(e);
        var t = e.length;
        if (t <= 1) return e;
        while (t--) {
          var n = e[t];
          (n.nodeType === nt || n.nodeType === tt && "" === n.nodeValue.trim()) && v.call(e, t, 1)
        }
        return e
      }

      var tr = a("$controller");
      var nr = /^(\S+)(\s+as\s+([\w$]+))?$/;

      function rr(e, t) {
        if (t && H(t)) return t;
        if (H(e)) {
          var n = nr.exec(e);
          if (n) return n[3]
        }
      }

      function ir() {
        var e = {};
        this.has = function (t) {
          return e.hasOwnProperty(t)
        };
        this.register = function (t, n) {
          Je(t, "controller");
          F(t) ? j(e, t) : e[t] = n
        };
        this.$get = ["$injector", function (t) {
          return function r(i, a, o, s) {
            var u, l, c, f;
            o = true === o;
            s && H(s) && (f = s);
            if (H(i)) {
              l = i.match(nr);
              if (!l) throw tr("ctrlfmt", "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.", i);
              c = l[1];
              f = f || l[3];
              i = e.hasOwnProperty(c) ? e[c] : Qe(a.$scope, c, true);
              if (!i) throw tr("ctrlreg", "The controller with the name '{0}' is not registered.", c);
              Ge(i, c, true)
            }
            if (o) {
              var p = (W(i) ? i[i.length - 1] : i).prototype;
              u = Object.create(p || null);
              f && n(a, f, u, c || i.name);
              return j(function e() {
                var r = t.invoke(i, u, a, c);
                if (r !== u && (F(r) || J(r))) {
                  u = r;
                  f && n(a, f, u, c || i.name)
                }
                return u
              }, {instance: u, identifier: f})
            }
            u = t.instantiate(i, a, c);
            f && n(a, f, u, c || i.name);
            return u
          };

          function n(e, t, n, r) {
            if (!(e && F(e.$scope))) throw a("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", r, t);
            e.$scope[t] = n
          }
        }]
      }

      function ar() {
        this.$get = ["$window", function (e) {
          return p(e.document)
        }]
      }

      function or() {
        this.$get = ["$document", "$rootScope", function (e, t) {
          var n = e[0];
          var r = n && n.hidden;
          e.on("visibilitychange", i);
          t.$on("$destroy", function () {
            e.off("visibilitychange", i)
          });

          function i() {
            r = n.hidden
          }

          return function () {
            return r
          }
        }]
      }

      function sr() {
        this.$get = ["$log", function (e) {
          return function (t, n) {
            e.error.apply(e, arguments)
          }
        }]
      }

      var ur = function () {
        this.$get = ["$document", function (e) {
          return function (t) {
            t ? !t.nodeType && t instanceof p && (t = t[0]) : t = e[0].body;
            return t.offsetWidth + 1
          }
        }]
      };
      var lr = "application/json";
      var cr = {"Content-Type": lr + ";charset=utf-8"};
      var fr = /^\[|^\{(?!\{)/;
      var pr = {"[": /]$/, "{": /}$/};
      var hr = /^\)]\}',?\n/;
      var dr = a("$http");

      function vr(e) {
        if (F(e)) return z(e) ? e.toISOString() : xe(e);
        return e
      }

      function mr() {
        this.$get = function () {
          return function e(t) {
            if (!t) return "";
            var n = [];
            k(t, function (e, t) {
              if (null === e || I(e) || J(e)) return;
              W(e) ? E(e, function (e) {
                n.push(Ne(t) + "=" + Ne(vr(e)))
              }) : n.push(Ne(t) + "=" + Ne(vr(e)))
            });
            return n.join("&")
          }
        }
      }

      function gr() {
        this.$get = function () {
          return function e(t) {
            if (!t) return "";
            var n = [];
            r(t, "", true);
            return n.join("&");

            function r(e, t, i) {
              if (W(e)) E(e, function (e, n) {
                r(e, t + "[" + (F(e) ? n : "") + "]")
              }); else if (F(e) && !z(e)) k(e, function (e, n) {
                r(e, t + (i ? "" : "[") + n + (i ? "" : "]"))
              }); else {
                J(e) && (e = e());
                n.push(Ne(t) + "=" + (null == e ? "" : Ne(vr(e))))
              }
            }
          }
        }
      }

      function $r(e, t) {
        if (H(e)) {
          var n = e.replace(hr, "").trim();
          if (n) {
            var r = t("Content-Type");
            var i = r && 0 === r.indexOf(lr);
            if (i || yr(n)) try {
              e = Ce(n)
            } catch (t) {
              if (!i) return e;
              throw dr("baddata", 'Data must be a valid JSON object. Received: "{0}". Parse error: "{1}"', e, t)
            }
          }
        }
        return e
      }

      function yr(e) {
        var t = e.match(fr);
        return t && pr[t[0]].test(e)
      }

      function br(e) {
        var t = Ke(), n;

        function r(e, n) {
          e && (t[e] = t[e] ? t[e] + ", " + n : n)
        }

        H(e) ? E(e.split("\n"), function (e) {
          n = e.indexOf(":");
          r(l(oe(e.substr(0, n))), oe(e.substr(n + 1)))
        }) : F(e) && E(e, function (e, t) {
          r(l(t), oe(e))
        });
        return t
      }

      function wr(e) {
        var t;
        return function (n) {
          t || (t = br(e));
          if (n) {
            var r = t[l(n)];
            void 0 === r && (r = null);
            return r
          }
          return t
        }
      }

      function xr(e, t, n, r) {
        if (J(r)) return r(e, t, n);
        E(r, function (r) {
          e = r(e, t, n)
        });
        return e
      }

      function Cr(e) {
        return 200 <= e && e < 300
      }

      function Er() {
        var e = this.defaults = {
          transformResponse: [$r],
          transformRequest: [function (e) {
            return !F(e) || X(e) || ee(e) || Z(e) ? e : xe(e)
          }],
          headers: {common: {Accept: "application/json, text/plain, */*"}, post: ot(cr), put: ot(cr), patch: ot(cr)},
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          paramSerializer: "$httpParamSerializer",
          jsonpCallbackParam: "callback"
        };
        var t = false;
        this.useApplyAsync = function (e) {
          if (V(e)) {
            t = !!e;
            return this
          }
          return t
        };
        var n = this.interceptors = [];
        var r = this.xsrfWhitelistedOrigins = [];
        this.$get = ["$browser", "$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", "$sce", function (i, o, s, u, f, p, h, d) {
          var v = u("$http");
          e.paramSerializer = H(e.paramSerializer) ? h.get(e.paramSerializer) : e.paramSerializer;
          var m = [];
          E(n, function (e) {
            m.unshift(H(e) ? h.get(e) : h.invoke(e))
          });
          var g = ea(r);

          function $(t) {
            if (!F(t)) throw a("$http")("badreq", "Http request configuration must be an object.  Received: {0}", t);
            if (!H(d.valueOf(t.url))) throw a("$http")("badreq", "Http request configuration url must be a string or a $sce trusted object.  Received: {0}", t.url);
            var n = j({
              method: "get",
              transformRequest: e.transformRequest,
              transformResponse: e.transformResponse,
              paramSerializer: e.paramSerializer,
              jsonpCallbackParam: e.jsonpCallbackParam
            }, t);
            n.headers = g(t);
            n.method = c(n.method);
            n.paramSerializer = H(n.paramSerializer) ? h.get(n.paramSerializer) : n.paramSerializer;
            i.$$incOutstandingRequestCount();
            var r = [];
            var o = [];
            var s = p.resolve(n);
            E(m, function (e) {
              (e.request || e.requestError) && r.unshift(e.request, e.requestError);
              (e.response || e.responseError) && o.push(e.response, e.responseError)
            });
            s = u(s, r);
            s = s.then($);
            s = u(s, o);
            s = s.finally(f);
            return s;

            function u(e, t) {
              for (var n = 0, r = t.length; n < r;) {
                var i = t[n++];
                var a = t[n++];
                e = e.then(i, a)
              }
              t.length = 0;
              return e
            }

            function f() {
              i.$$completeOutstandingRequest(P)
            }

            function v(e, t) {
              var n, r = {};
              E(e, function (e, i) {
                if (J(e)) {
                  n = e(t);
                  null != n && (r[i] = n)
                } else r[i] = e
              });
              return r
            }

            function g(t) {
              var n = e.headers, r = j({}, t.headers), i, a, o;
              n = j({}, n.common, n[l(t.method)]);
              e:for (i in n) {
                a = l(i);
                for (o in r) if (l(o) === a) continue e;
                r[i] = n[i]
              }
              return v(r, ot(t))
            }

            function $(t) {
              var n = t.headers;
              var r = xr(t.data, wr(n), void 0, t.transformRequest);
              I(r) && E(n, function (e, t) {
                "content-type" === l(t) && delete n[t]
              });
              I(t.withCredentials) && !I(e.withCredentials) && (t.withCredentials = e.withCredentials);
              return w(t, r).then(y, y)
            }

            function y(e) {
              var t = j({}, e);
              t.data = xr(e.data, e.headers, e.status, n.transformResponse);
              return Cr(e.status) ? t : p.reject(t)
            }
          }

          $.pendingRequests = [];
          y("get", "delete", "head", "jsonp");
          b("post", "put", "patch");
          $.defaults = e;
          return $;

          function y(e) {
            E(arguments, function (e) {
              $[e] = function (t, n) {
                return $(j({}, n || {}, {method: e, url: t}))
              }
            })
          }

          function b(e) {
            E(arguments, function (e) {
              $[e] = function (t, n, r) {
                return $(j({}, r || {}, {method: e, url: t, data: n}))
              }
            })
          }

          function w(n, r) {
            var i = p.defer(), a = i.promise, u, c, h = n.headers, m = "jsonp" === l(n.method), y = n.url;
            m ? y = d.getTrustedResourceUrl(y) : H(y) || (y = d.valueOf(y));
            y = x(y, n.paramSerializer(n.params));
            m && (y = C(y, n.jsonpCallbackParam));
            $.pendingRequests.push(n);
            a.then(T, T);
            !n.cache && !e.cache || false === n.cache || "GET" !== n.method && "JSONP" !== n.method || (u = F(n.cache) ? n.cache : F(e.cache) ? e.cache : v);
            if (u) {
              c = u.get(y);
              V(c) ? ne(c) ? c.then(A, A) : W(c) ? S(c[1], c[0], ot(c[2]), c[3], c[4]) : S(c, 200, {}, "OK", "complete") : u.put(y, a)
            }
            if (I(c)) {
              var b = g(n.url) ? s()[n.xsrfCookieName || e.xsrfCookieName] : void 0;
              b && (h[n.xsrfHeaderName || e.xsrfHeaderName] = b);
              o(n.method, y, r, k, h, n.timeout, n.withCredentials, n.responseType, w(n.eventHandlers), w(n.uploadEventHandlers))
            }
            return a;

            function w(e) {
              if (e) {
                var n = {};
                E(e, function (e, r) {
                  n[r] = function (n) {
                    t ? f.$applyAsync(r) : f.$$phase ? r() : f.$apply(r);

                    function r() {
                      e(n)
                    }
                  }
                });
                return n
              }
            }

            function k(e, n, r, i, a) {
              u && (Cr(e) ? u.put(y, [e, n, br(r), i, a]) : u.remove(y));

              function o() {
                S(n, e, r, i, a)
              }

              if (t) f.$applyAsync(o); else {
                o();
                f.$$phase || f.$apply()
              }
            }

            function S(e, t, r, a, o) {
              t = t >= -1 ? t : 0;
              (Cr(t) ? i.resolve : i.reject)({
                data: e,
                status: t,
                headers: wr(r),
                config: n,
                statusText: a,
                xhrStatus: o
              })
            }

            function A(e) {
              S(e.data, e.status, ot(e.headers()), e.statusText, e.xhrStatus)
            }

            function T() {
              var e = $.pendingRequests.indexOf(n);
              -1 !== e && $.pendingRequests.splice(e, 1)
            }
          }

          function x(e, t) {
            t.length > 0 && (e += (-1 === e.indexOf("?") ? "?" : "&") + t);
            return e
          }

          function C(e, t) {
            var n = e.split("?");
            if (n.length > 2) throw dr("badjsonp", 'Illegal use more than one "?", in url, "{1}"', e);
            var r = je(n[1]);
            E(r, function (n, r) {
              if ("JSON_CALLBACK" === n) throw dr("badjsonp", 'Illegal use of JSON_CALLBACK in url, "{0}"', e);
              if (r === t) throw dr("badjsonp", 'Illegal use of callback param, "{0}", in url, "{1}"', t, e)
            });
            e += (-1 === e.indexOf("?") ? "?" : "&") + t + "=JSON_CALLBACK";
            return e
          }
        }]
      }

      function kr() {
        this.$get = function () {
          return function e() {
            return new t.XMLHttpRequest
          }
        }
      }

      function Sr() {
        this.$get = ["$browser", "$jsonpCallbacks", "$document", "$xhrFactory", function (e, t, n, r) {
          return Ar(e, r, e.defer, t, n[0])
        }]
      }

      function Ar(e, t, n, r, i) {
        return function (i, o, s, u, c, f, p, h, d, v) {
          o = o || e.url();
          if ("jsonp" === l(i)) {
            var m = r.createCallback(o);
            var g = a(o, m, function (e, t) {
              var n = 200 === e && r.getResponse(m);
              S(u, e, n, "", t, "complete");
              r.removeCallback(m)
            })
          } else {
            var $ = t(i, o);
            var y = false;
            $.open(i, o, true);
            E(c, function (e, t) {
              V(e) && $.setRequestHeader(t, e)
            });
            $.onload = function e() {
              var t = $.statusText || "";
              var n = "response" in $ ? $.response : $.responseText;
              var r = 1223 === $.status ? 204 : $.status;
              0 === r && (r = n ? 200 : "file" === Ki(o).protocol ? 404 : 0);
              S(u, r, n, $.getAllResponseHeaders(), t, "complete")
            };
            var b = function () {
              S(u, -1, null, null, "", "error")
            };
            var w = function () {
              S(u, -1, null, null, "", y ? "timeout" : "abort")
            };
            var x = function () {
              S(u, -1, null, null, "", "timeout")
            };
            $.onerror = b;
            $.ontimeout = x;
            $.onabort = w;
            E(d, function (e, t) {
              $.addEventListener(t, e)
            });
            E(v, function (e, t) {
              $.upload.addEventListener(t, e)
            });
            p && ($.withCredentials = true);
            if (h) try {
              $.responseType = h
            } catch (e) {
              if ("json" !== h) throw e
            }
            $.send(I(s) ? null : s)
          }
          if (f > 0) var C = n(function () {
            k("timeout")
          }, f); else ne(f) && f.then(function () {
            k(V(f.$$timeoutId) ? "timeout" : "abort")
          });

          function k(e) {
            y = "timeout" === e;
            g && g();
            $ && $.abort()
          }

          function S(e, t, r, i, a, o) {
            V(C) && n.cancel(C);
            g = $ = null;
            e(t, r, i, a, o)
          }
        };

        function a(e, t, n) {
          e = e.replace("JSON_CALLBACK", t);
          var a = i.createElement("script"), o = null;
          a.type = "text/javascript";
          a.src = e;
          a.async = true;
          o = function (e) {
            a.removeEventListener("load", o);
            a.removeEventListener("error", o);
            i.body.removeChild(a);
            a = null;
            var s = -1;
            var u = "unknown";
            if (e) {
              "load" !== e.type || r.wasCalled(t) || (e = {type: "error"});
              u = e.type;
              s = "error" === e.type ? 404 : 200
            }
            n && n(s, u)
          };
          a.addEventListener("load", o);
          a.addEventListener("error", o);
          i.body.appendChild(a);
          return o
        }
      }

      var Tr = b.$interpolateMinErr = a("$interpolate");
      Tr.throwNoconcat = function (e) {
        throw Tr("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", e)
      };
      Tr.interr = function (e, t) {
        return Tr("interr", "Can't interpolate: {0}\n{1}", e, t.toString())
      };

      function Or() {
        var e = "{{";
        var t = "}}";
        this.startSymbol = function (t) {
          if (t) {
            e = t;
            return this
          }
          return e
        };
        this.endSymbol = function (e) {
          if (e) {
            t = e;
            return this
          }
          return t
        };
        this.$get = ["$parse", "$exceptionHandler", "$sce", function (n, r, i) {
          var a = e.length, o = t.length, s = new RegExp(e.replace(/./g, l), "g"),
            u = new RegExp(t.replace(/./g, l), "g");

          function l(e) {
            return "\\\\\\" + e
          }

          function c(n) {
            return n.replace(s, e).replace(u, t)
          }

          function f(e, t, n, r) {
            var i = e.$watch(function e(t) {
              i();
              return r(t)
            }, t, n);
            return i
          }

          function p(s, u, l, p) {
            var h = l === i.URL || l === i.MEDIA_URL;
            if (!s.length || -1 === s.indexOf(e)) {
              if (u && !h) return;
              var d = c(s);
              h && (d = i.getTrusted(l, d));
              var v = R(d);
              v.exp = s;
              v.expressions = [];
              v.$$watchDelegate = f;
              return v
            }
            p = !!p;
            var m, g, $ = 0, y = [], b, w = s.length, x, C = [], E = [], k;
            while ($ < w) {
              if (-1 === (m = s.indexOf(e, $)) || -1 === (g = s.indexOf(t, m + a))) {
                $ !== w && C.push(c(s.substring($)));
                break
              }
              $ !== m && C.push(c(s.substring($, m)));
              x = s.substring(m + a, g);
              y.push(x);
              $ = g + o;
              E.push(C.length);
              C.push("")
            }
            k = 1 === C.length && 1 === E.length;
            var S = h && k ? void 0 : T;
            b = y.map(function (e) {
              return n(e, S)
            });
            if (!u || y.length) {
              var A = function (e) {
                for (var t = 0, n = y.length; t < n; t++) {
                  if (p && I(e[t])) return;
                  C[E[t]] = e[t]
                }
                if (h) return i.getTrusted(l, k ? C[0] : C.join(""));
                l && C.length > 1 && Tr.throwNoconcat(s);
                return C.join("")
              };
              return j(function e(t) {
                var n = 0;
                var i = y.length;
                var a = new Array(i);
                try {
                  for (; n < i; n++) a[n] = b[n](t);
                  return A(a)
                } catch (e) {
                  r(Tr.interr(s, e))
                }
              }, {
                exp: s, expressions: y, $$watchDelegate: function (e, t) {
                  var n;
                  return e.$watchGroup(b, function r(i, a) {
                    var o = A(i);
                    t.call(this, o, i !== a ? n : o, e);
                    n = o
                  })
                }
              })
            }

            function T(e) {
              try {
                e = l && !h ? i.getTrusted(l, e) : i.valueOf(e);
                return p && !V(e) ? e : Xe(e)
              } catch (e) {
                r(Tr.interr(s, e))
              }
            }
          }

          p.startSymbol = function () {
            return e
          };
          p.endSymbol = function () {
            return t
          };
          return p
        }]
      }

      var jr = a("$interval");

      function Mr() {
        this.$get = ["$rootScope", "$window", "$q", "$$q", "$browser", function (e, t, n, r, i) {
          var a = {};

          function o(o, s, u, l) {
            var c = arguments.length > 4, f = c ? ye(arguments, 4) : [], p = t.setInterval, h = t.clearInterval, d = 0,
              v = V(l) && !l, m = (v ? r : n).defer(), g = m.promise;
            u = V(u) ? u : 0;
            g.$$intervalId = p(function t() {
              v ? i.defer($) : e.$evalAsync($);
              m.notify(d++);
              if (u > 0 && d >= u) {
                m.resolve(d);
                h(g.$$intervalId);
                delete a[g.$$intervalId]
              }
              v || e.$apply()
            }, s);
            a[g.$$intervalId] = m;
            return g;

            function $() {
              c ? o.apply(null, f) : o(d)
            }
          }

          o.cancel = function (e) {
            if (!e) return false;
            if (!e.hasOwnProperty("$$intervalId")) throw jr("badprom", "`$interval.cancel()` called with a promise that was not generated by `$interval()`.");
            if (!a.hasOwnProperty(e.$$intervalId)) return false;
            var n = e.$$intervalId;
            var r = a[n];
            ji(r.promise);
            r.reject("canceled");
            t.clearInterval(n);
            delete a[n];
            return true
          };
          return o
        }]
      }

      var Dr = function () {
        this.$get = function () {
          var e = b.callbacks;
          var t = {};

          function n(e) {
            var t = function (e) {
              t.data = e;
              t.called = true
            };
            t.id = e;
            return t
          }

          return {
            createCallback: function (r) {
              var i = "_" + (e.$$counter++).toString(36);
              var a = "angular.callbacks." + i;
              var o = n(i);
              t[a] = e[i] = o;
              return a
            }, wasCalled: function (e) {
              return t[e].called
            }, getResponse: function (e) {
              return t[e].data
            }, removeCallback: function (n) {
              var r = t[n];
              delete e[r.id];
              delete t[n]
            }
          }
        }
      };
      var Nr = /^([^?#]*)(\?([^#]*))?(#(.*))?$/, qr = {http: 80, https: 443, ftp: 21};
      var Pr = a("$location");

      function _r(e) {
        var t = e.split("/"), n = t.length;
        while (n--) t[n] = De(t[n].replace(/%2F/g, "/"));
        return t.join("/")
      }

      function Rr(e, t) {
        var n = e.split("/"), r = n.length;
        while (r--) {
          n[r] = decodeURIComponent(n[r]);
          t && (n[r] = n[r].replace(/\//g, "%2F"))
        }
        return n.join("/")
      }

      function Lr(e, t) {
        var n = Ki(e);
        t.$$protocol = n.protocol;
        t.$$host = n.hostname;
        t.$$port = D(n.port) || qr[n.protocol] || null
      }

      var Ir = /^\s*[\\/]{2,}/;

      function Vr(e, t, n) {
        if (Ir.test(e)) throw Pr("badpath", 'Invalid url "{0}".', e);
        var r = "/" !== e.charAt(0);
        r && (e = "/" + e);
        var i = Ki(e);
        var a = r && "/" === i.pathname.charAt(0) ? i.pathname.substring(1) : i.pathname;
        t.$$path = Rr(a, n);
        t.$$search = je(i.search);
        t.$$hash = decodeURIComponent(i.hash);
        t.$$path && "/" !== t.$$path.charAt(0) && (t.$$path = "/" + t.$$path)
      }

      function Fr(e, t) {
        return e.slice(0, t.length) === t
      }

      function Ur(e, t) {
        if (Fr(t, e)) return t.substr(e.length)
      }

      function Hr(e) {
        var t = e.indexOf("#");
        return -1 === t ? e : e.substr(0, t)
      }

      function Br(e) {
        return e.replace(/(#.+)|#$/, "$1")
      }

      function zr(e) {
        return e.substr(0, Hr(e).lastIndexOf("/") + 1)
      }

      function Wr(e) {
        return e.substring(0, e.indexOf("/", e.indexOf("//") + 2))
      }

      function Gr(e, t, n) {
        this.$$html5 = true;
        n = n || "";
        Lr(e, this);
        this.$$parse = function (e) {
          var n = Ur(t, e);
          if (!H(n)) throw Pr("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', e, t);
          Vr(n, this, true);
          this.$$path || (this.$$path = "/");
          this.$$compose()
        };
        this.$$compose = function () {
          var e = Me(this.$$search), n = this.$$hash ? "#" + De(this.$$hash) : "";
          this.$$url = _r(this.$$path) + (e ? "?" + e : "") + n;
          this.$$absUrl = t + this.$$url.substr(1);
          this.$$urlUpdatedByLocation = true
        };
        this.$$parseLinkUrl = function (r, i) {
          if (i && "#" === i[0]) {
            this.hash(i.slice(1));
            return true
          }
          var a, o;
          var s;
          if (V(a = Ur(e, r))) {
            o = a;
            s = n && V(a = Ur(n, a)) ? t + (Ur("/", a) || a) : e + o
          } else V(a = Ur(t, r)) ? s = t + a : t === r + "/" && (s = t);
          s && this.$$parse(s);
          return !!s
        }
      }

      function Jr(e, t, n) {
        Lr(e, this);
        this.$$parse = function (r) {
          var i = Ur(e, r) || Ur(t, r);
          var a;
          if (I(i) || "#" !== i.charAt(0)) if (this.$$html5) a = i; else {
            a = "";
            if (I(i)) {
              e = r;
              this.replace()
            }
          } else {
            a = Ur(n, i);
            I(a) && (a = i)
          }
          Vr(a, this, false);
          this.$$path = o(this.$$path, a, e);
          this.$$compose();

          function o(e, t, n) {
            var r = /^\/[A-Z]:(\/.*)/;
            var i;
            Fr(t, n) && (t = t.replace(n, ""));
            if (r.exec(t)) return e;
            i = r.exec(e);
            return i ? i[1] : e
          }
        };
        this.$$compose = function () {
          var t = Me(this.$$search), r = this.$$hash ? "#" + De(this.$$hash) : "";
          this.$$url = _r(this.$$path) + (t ? "?" + t : "") + r;
          this.$$absUrl = e + (this.$$url ? n + this.$$url : "");
          this.$$urlUpdatedByLocation = true
        };
        this.$$parseLinkUrl = function (t, n) {
          if (Hr(e) === Hr(t)) {
            this.$$parse(t);
            return true
          }
          return false
        }
      }

      function Qr(e, t, n) {
        this.$$html5 = true;
        Jr.apply(this, arguments);
        this.$$parseLinkUrl = function (r, i) {
          if (i && "#" === i[0]) {
            this.hash(i.slice(1));
            return true
          }
          var a;
          var o;
          e === Hr(r) ? a = r : (o = Ur(t, r)) ? a = e + n + o : t === r + "/" && (a = t);
          a && this.$$parse(a);
          return !!a
        };
        this.$$compose = function () {
          var t = Me(this.$$search), r = this.$$hash ? "#" + De(this.$$hash) : "";
          this.$$url = _r(this.$$path) + (t ? "?" + t : "") + r;
          this.$$absUrl = e + n + this.$$url;
          this.$$urlUpdatedByLocation = true
        }
      }

      var Yr = {
        $$absUrl: "", $$html5: false, $$replace: false, absUrl: Kr("$$absUrl"), url: function (e) {
          if (I(e)) return this.$$url;
          var t = Nr.exec(e);
          (t[1] || "" === e) && this.path(decodeURIComponent(t[1]));
          (t[2] || t[1] || "" === e) && this.search(t[3] || "");
          this.hash(t[5] || "");
          return this
        }, protocol: Kr("$$protocol"), host: Kr("$$host"), port: Kr("$$port"), path: Xr("$$path", function (e) {
          e = null !== e ? e.toString() : "";
          return "/" === e.charAt(0) ? e : "/" + e
        }), search: function (e, t) {
          switch (arguments.length) {
            case 0:
              return this.$$search;
            case 1:
              if (H(e) || B(e)) {
                e = e.toString();
                this.$$search = je(e)
              } else {
                if (!F(e)) throw Pr("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                e = he(e, {});
                E(e, function (t, n) {
                  null == t && delete e[n]
                });
                this.$$search = e
              }
              break;
            default:
              I(t) || null === t ? delete this.$$search[e] : this.$$search[e] = t
          }
          this.$$compose();
          return this
        }, hash: Xr("$$hash", function (e) {
          return null !== e ? e.toString() : ""
        }), replace: function () {
          this.$$replace = true;
          return this
        }
      };
      E([Qr, Jr, Gr], function (e) {
        e.prototype = Object.create(Yr);
        e.prototype.state = function (t) {
          if (!arguments.length) return this.$$state;
          if (e !== Gr || !this.$$html5) throw Pr("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
          this.$$state = I(t) ? null : t;
          this.$$urlUpdatedByLocation = true;
          return this
        }
      });

      function Kr(e) {
        return function () {
          return this[e]
        }
      }

      function Xr(e, t) {
        return function (n) {
          if (I(n)) return this[e];
          this[e] = t(n);
          this.$$compose();
          return this
        }
      }

      function Zr() {
        var e = "!", t = {enabled: false, requireBase: true, rewriteLinks: true};
        this.hashPrefix = function (t) {
          if (V(t)) {
            e = t;
            return this
          }
          return e
        };
        this.html5Mode = function (e) {
          if (te(e)) {
            t.enabled = e;
            return this
          }
          if (F(e)) {
            te(e.enabled) && (t.enabled = e.enabled);
            te(e.requireBase) && (t.requireBase = e.requireBase);
            (te(e.rewriteLinks) || H(e.rewriteLinks)) && (t.rewriteLinks = e.rewriteLinks);
            return this
          }
          return t
        };
        this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (n, r, i, a, o) {
          var s, u, l = r.baseHref(), c = r.url(), f;
          if (t.enabled) {
            if (!l && t.requireBase) throw Pr("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
            f = Wr(c) + (l || "/");
            u = i.history ? Gr : Qr
          } else {
            f = Hr(c);
            u = Jr
          }
          var h = zr(f);
          s = new u(f, h, "#" + e);
          s.$$parseLinkUrl(c, c);
          s.$$state = r.state();
          var d = /^\s*(javascript|mailto):/i;

          function v(e, t, n) {
            var i = s.url();
            var a = s.$$state;
            try {
              r.url(e, t, n);
              s.$$state = r.state()
            } catch (e) {
              s.url(i);
              s.$$state = a;
              throw e
            }
          }

          a.on("click", function (e) {
            var i = t.rewriteLinks;
            if (!i || e.ctrlKey || e.metaKey || e.shiftKey || 2 === e.which || 2 === e.button) return;
            var o = p(e.target);
            while ("a" !== ce(o[0])) if (o[0] === a[0] || !(o = o.parent())[0]) return;
            if (H(i) && I(o.attr(i))) return;
            var u = o.prop("href");
            var l = o.attr("href") || o.attr("xlink:href");
            F(u) && "[object SVGAnimatedString]" === u.toString() && (u = Ki(u.animVal).href);
            if (d.test(u)) return;
            if (u && !o.attr("target") && !e.isDefaultPrevented() && s.$$parseLinkUrl(u, l)) {
              e.preventDefault();
              s.absUrl() !== r.url() && n.$apply()
            }
          });
          Br(s.absUrl()) !== Br(c) && r.url(s.absUrl(), true);
          var m = true;
          r.onUrlChange(function (e, t) {
            if (!Fr(e, h)) {
              o.location.href = e;
              return
            }
            n.$evalAsync(function () {
              var r = s.absUrl();
              var i = s.$$state;
              var a;
              e = Br(e);
              s.$$parse(e);
              s.$$state = t;
              a = n.$broadcast("$locationChangeStart", e, r, t, i).defaultPrevented;
              if (s.absUrl() !== e) return;
              if (a) {
                s.$$parse(r);
                s.$$state = i;
                v(r, false, i)
              } else {
                m = false;
                g(r, i)
              }
            });
            n.$$phase || n.$digest()
          });
          n.$watch(function e() {
            if (m || s.$$urlUpdatedByLocation) {
              s.$$urlUpdatedByLocation = false;
              var t = Br(r.url());
              var a = Br(s.absUrl());
              var o = r.state();
              var u = s.$$replace;
              var l = t !== a || s.$$html5 && i.history && o !== s.$$state;
              if (m || l) {
                m = false;
                n.$evalAsync(function () {
                  var e = s.absUrl();
                  var r = n.$broadcast("$locationChangeStart", e, t, s.$$state, o).defaultPrevented;
                  if (s.absUrl() !== e) return;
                  if (r) {
                    s.$$parse(t);
                    s.$$state = o
                  } else {
                    l && v(e, u, o === s.$$state ? null : s.$$state);
                    g(t, o)
                  }
                })
              }
            }
            s.$$replace = false
          });
          return s;

          function g(e, t) {
            n.$broadcast("$locationChangeSuccess", s.absUrl(), e, s.$$state, t)
          }
        }]
      }

      function ei() {
        var e = true, t = this;
        this.debugEnabled = function (t) {
          if (V(t)) {
            e = t;
            return this
          }
          return e
        };
        this.$get = ["$window", function (n) {
          var r = f || /\bEdge\//.test(n.navigator && n.navigator.userAgent);
          return {
            log: a("log"), info: a("info"), warn: a("warn"), error: a("error"), debug: function () {
              var n = a("debug");
              return function () {
                e && n.apply(t, arguments)
              }
            }()
          };

          function i(e) {
            G(e) && (e.stack && r ? e = e.message && -1 === e.stack.indexOf(e.message) ? "Error: " + e.message + "\n" + e.stack : e.stack : e.sourceURL && (e = e.message + "\n" + e.sourceURL + ":" + e.line));
            return e
          }

          function a(e) {
            var t = n.console || {}, r = t[e] || t.log || P;
            return function () {
              var e = [];
              E(arguments, function (t) {
                e.push(i(t))
              });
              return Function.prototype.apply.call(r, t, e)
            }
          }
        }]
      }

      var ti = a("$parse");
      var ni = {}.constructor.prototype.valueOf;

      function ri(e) {
        return e + ""
      }

      var ii = Ke();
      E("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (e) {
        ii[e] = true
      });
      var ai = {n: "\n", f: "\f", r: "\r", t: "\t", v: "\v", "'": "'", '"': '"'};
      var oi = function e(t) {
        this.options = t
      };
      oi.prototype = {
        constructor: oi, lex: function (e) {
          this.text = e;
          this.index = 0;
          this.tokens = [];
          while (this.index < this.text.length) {
            var t = this.text.charAt(this.index);
            if ('"' === t || "'" === t) this.readString(t); else if (this.isNumber(t) || "." === t && this.isNumber(this.peek())) this.readNumber(); else if (this.isIdentifierStart(this.peekMultichar())) this.readIdent(); else if (this.is(t, "(){}[].,;:?")) {
              this.tokens.push({index: this.index, text: t});
              this.index++
            } else if (this.isWhitespace(t)) this.index++; else {
              var n = t + this.peek();
              var r = n + this.peek(2);
              var i = ii[t];
              var a = ii[n];
              var o = ii[r];
              if (i || a || o) {
                var s = o ? r : a ? n : t;
                this.tokens.push({index: this.index, text: s, operator: true});
                this.index += s.length
              } else this.throwError("Unexpected next character ", this.index, this.index + 1)
            }
          }
          return this.tokens
        }, is: function (e, t) {
          return -1 !== t.indexOf(e)
        }, peek: function (e) {
          var t = e || 1;
          return this.index + t < this.text.length && this.text.charAt(this.index + t)
        }, isNumber: function (e) {
          return "0" <= e && e <= "9" && "string" === typeof e
        }, isWhitespace: function (e) {
          return " " === e || "\r" === e || "\t" === e || "\n" === e || "\v" === e || " " === e
        }, isIdentifierStart: function (e) {
          return this.options.isIdentifierStart ? this.options.isIdentifierStart(e, this.codePointAt(e)) : this.isValidIdentifierStart(e)
        }, isValidIdentifierStart: function (e) {
          return "a" <= e && e <= "z" || "A" <= e && e <= "Z" || "_" === e || "$" === e
        }, isIdentifierContinue: function (e) {
          return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(e, this.codePointAt(e)) : this.isValidIdentifierContinue(e)
        }, isValidIdentifierContinue: function (e, t) {
          return this.isValidIdentifierStart(e, t) || this.isNumber(e)
        }, codePointAt: function (e) {
          if (1 === e.length) return e.charCodeAt(0);
          return (e.charCodeAt(0) << 10) + e.charCodeAt(1) - 56613888
        }, peekMultichar: function () {
          var e = this.text.charAt(this.index);
          var t = this.peek();
          if (!t) return e;
          var n = e.charCodeAt(0);
          var r = t.charCodeAt(0);
          if (n >= 55296 && n <= 56319 && r >= 56320 && r <= 57343) return e + t;
          return e
        }, isExpOperator: function (e) {
          return "-" === e || "+" === e || this.isNumber(e)
        }, throwError: function (e, t, n) {
          n = n || this.index;
          var r = V(t) ? "s " + t + "-" + this.index + " [" + this.text.substring(t, n) + "]" : " " + n;
          throw ti("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", e, r, this.text)
        }, readNumber: function () {
          var e = "";
          var t = this.index;
          while (this.index < this.text.length) {
            var n = l(this.text.charAt(this.index));
            if ("." === n || this.isNumber(n)) e += n; else {
              var r = this.peek();
              if ("e" === n && this.isExpOperator(r)) e += n; else if (this.isExpOperator(n) && r && this.isNumber(r) && "e" === e.charAt(e.length - 1)) e += n; else {
                if (!this.isExpOperator(n) || r && this.isNumber(r) || "e" !== e.charAt(e.length - 1)) break;
                this.throwError("Invalid exponent")
              }
            }
            this.index++
          }
          this.tokens.push({index: t, text: e, constant: true, value: Number(e)})
        }, readIdent: function () {
          var e = this.index;
          this.index += this.peekMultichar().length;
          while (this.index < this.text.length) {
            var t = this.peekMultichar();
            if (!this.isIdentifierContinue(t)) break;
            this.index += t.length
          }
          this.tokens.push({index: e, text: this.text.slice(e, this.index), identifier: true})
        }, readString: function (e) {
          var t = this.index;
          this.index++;
          var n = "";
          var r = e;
          var i = false;
          while (this.index < this.text.length) {
            var a = this.text.charAt(this.index);
            r += a;
            if (i) {
              if ("u" === a) {
                var o = this.text.substring(this.index + 1, this.index + 5);
                o.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + o + "]");
                this.index += 4;
                n += String.fromCharCode(parseInt(o, 16))
              } else {
                var s = ai[a];
                n += s || a
              }
              i = false
            } else if ("\\" === a) i = true; else {
              if (a === e) {
                this.index++;
                this.tokens.push({index: t, text: r, constant: true, value: n});
                return
              }
              n += a
            }
            this.index++
          }
          this.throwError("Unterminated quote", t)
        }
      };
      var si = function e(t, n) {
        this.lexer = t;
        this.options = n
      };
      si.Program = "Program";
      si.ExpressionStatement = "ExpressionStatement";
      si.AssignmentExpression = "AssignmentExpression";
      si.ConditionalExpression = "ConditionalExpression";
      si.LogicalExpression = "LogicalExpression";
      si.BinaryExpression = "BinaryExpression";
      si.UnaryExpression = "UnaryExpression";
      si.CallExpression = "CallExpression";
      si.MemberExpression = "MemberExpression";
      si.Identifier = "Identifier";
      si.Literal = "Literal";
      si.ArrayExpression = "ArrayExpression";
      si.Property = "Property";
      si.ObjectExpression = "ObjectExpression";
      si.ThisExpression = "ThisExpression";
      si.LocalsExpression = "LocalsExpression";
      si.NGValueParameter = "NGValueParameter";
      si.prototype = {
        ast: function (e) {
          this.text = e;
          this.tokens = this.lexer.lex(e);
          var t = this.program();
          0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);
          return t
        }, program: function () {
          var e = [];
          while (true) {
            this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && e.push(this.expressionStatement());
            if (!this.expect(";")) return {type: si.Program, body: e}
          }
        }, expressionStatement: function () {
          return {type: si.ExpressionStatement, expression: this.filterChain()}
        }, filterChain: function () {
          var e = this.expression();
          while (this.expect("|")) e = this.filter(e);
          return e
        }, expression: function () {
          return this.assignment()
        }, assignment: function () {
          var e = this.ternary();
          if (this.expect("=")) {
            if (!mi(e)) throw ti("lval", "Trying to assign a value to a non l-value");
            e = {type: si.AssignmentExpression, left: e, right: this.assignment(), operator: "="}
          }
          return e
        }, ternary: function () {
          var e = this.logicalOR();
          var t;
          var n;
          if (this.expect("?")) {
            t = this.expression();
            if (this.consume(":")) {
              n = this.expression();
              return {type: si.ConditionalExpression, test: e, alternate: t, consequent: n}
            }
          }
          return e
        }, logicalOR: function () {
          var e = this.logicalAND();
          while (this.expect("||")) e = {type: si.LogicalExpression, operator: "||", left: e, right: this.logicalAND()};
          return e
        }, logicalAND: function () {
          var e = this.equality();
          while (this.expect("&&")) e = {type: si.LogicalExpression, operator: "&&", left: e, right: this.equality()};
          return e
        }, equality: function () {
          var e = this.relational();
          var t;
          while (t = this.expect("==", "!=", "===", "!==")) e = {
            type: si.BinaryExpression,
            operator: t.text,
            left: e,
            right: this.relational()
          };
          return e
        }, relational: function () {
          var e = this.additive();
          var t;
          while (t = this.expect("<", ">", "<=", ">=")) e = {
            type: si.BinaryExpression,
            operator: t.text,
            left: e,
            right: this.additive()
          };
          return e
        }, additive: function () {
          var e = this.multiplicative();
          var t;
          while (t = this.expect("+", "-")) e = {
            type: si.BinaryExpression,
            operator: t.text,
            left: e,
            right: this.multiplicative()
          };
          return e
        }, multiplicative: function () {
          var e = this.unary();
          var t;
          while (t = this.expect("*", "/", "%")) e = {
            type: si.BinaryExpression,
            operator: t.text,
            left: e,
            right: this.unary()
          };
          return e
        }, unary: function () {
          var e;
          return (e = this.expect("+", "-", "!")) ? {
            type: si.UnaryExpression,
            operator: e.text,
            prefix: true,
            argument: this.unary()
          } : this.primary()
        }, primary: function () {
          var e;
          if (this.expect("(")) {
            e = this.filterChain();
            this.consume(")")
          } else this.expect("[") ? e = this.arrayDeclaration() : this.expect("{") ? e = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? e = he(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? e = {
            type: si.Literal,
            value: this.options.literals[this.consume().text]
          } : this.peek().identifier ? e = this.identifier() : this.peek().constant ? e = this.constant() : this.throwError("not a primary expression", this.peek());
          var t;
          while (t = this.expect("(", "[", ".")) if ("(" === t.text) {
            e = {type: si.CallExpression, callee: e, arguments: this.parseArguments()};
            this.consume(")")
          } else if ("[" === t.text) {
            e = {type: si.MemberExpression, object: e, property: this.expression(), computed: true};
            this.consume("]")
          } else "." === t.text ? e = {
            type: si.MemberExpression,
            object: e,
            property: this.identifier(),
            computed: false
          } : this.throwError("IMPOSSIBLE");
          return e
        }, filter: function (e) {
          var t = [e];
          var n = {type: si.CallExpression, callee: this.identifier(), arguments: t, filter: true};
          while (this.expect(":")) t.push(this.expression());
          return n
        }, parseArguments: function () {
          var e = [];
          if (")" !== this.peekToken().text) do {
            e.push(this.filterChain())
          } while (this.expect(","));
          return e
        }, identifier: function () {
          var e = this.consume();
          e.identifier || this.throwError("is not a valid identifier", e);
          return {type: si.Identifier, name: e.text}
        }, constant: function () {
          return {type: si.Literal, value: this.consume().value}
        }, arrayDeclaration: function () {
          var e = [];
          if ("]" !== this.peekToken().text) do {
            if (this.peek("]")) break;
            e.push(this.expression())
          } while (this.expect(","));
          this.consume("]");
          return {type: si.ArrayExpression, elements: e}
        }, object: function () {
          var e = [], t;
          if ("}" !== this.peekToken().text) do {
            if (this.peek("}")) break;
            t = {type: si.Property, kind: "init"};
            if (this.peek().constant) {
              t.key = this.constant();
              t.computed = false;
              this.consume(":");
              t.value = this.expression()
            } else if (this.peek().identifier) {
              t.key = this.identifier();
              t.computed = false;
              if (this.peek(":")) {
                this.consume(":");
                t.value = this.expression()
              } else t.value = t.key
            } else if (this.peek("[")) {
              this.consume("[");
              t.key = this.expression();
              this.consume("]");
              t.computed = true;
              this.consume(":");
              t.value = this.expression()
            } else this.throwError("invalid key", this.peek());
            e.push(t)
          } while (this.expect(","));
          this.consume("}");
          return {type: si.ObjectExpression, properties: e}
        }, throwError: function (e, t) {
          throw ti("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", t.text, e, t.index + 1, this.text, this.text.substring(t.index))
        }, consume: function (e) {
          if (0 === this.tokens.length) throw ti("ueoe", "Unexpected end of expression: {0}", this.text);
          var t = this.expect(e);
          t || this.throwError("is unexpected, expecting [" + e + "]", this.peek());
          return t
        }, peekToken: function () {
          if (0 === this.tokens.length) throw ti("ueoe", "Unexpected end of expression: {0}", this.text);
          return this.tokens[0]
        }, peek: function (e, t, n, r) {
          return this.peekAhead(0, e, t, n, r)
        }, peekAhead: function (e, t, n, r, i) {
          if (this.tokens.length > e) {
            var a = this.tokens[e];
            var o = a.text;
            if (o === t || o === n || o === r || o === i || !t && !n && !r && !i) return a
          }
          return false
        }, expect: function (e, t, n, r) {
          var i = this.peek(e, t, n, r);
          if (i) {
            this.tokens.shift();
            return i
          }
          return false
        }, selfReferential: {this: {type: si.ThisExpression}, $locals: {type: si.LocalsExpression}}
      };

      function ui(e, t) {
        return "undefined" !== typeof e ? e : t
      }

      function li(e, t) {
        if ("undefined" === typeof e) return t;
        if ("undefined" === typeof t) return e;
        return e + t
      }

      function ci(e, t) {
        var n = e(t);
        return !n.$stateful
      }

      var fi = 1;
      var pi = 2;

      function hi(e, t) {
        switch (e.type) {
          case si.MemberExpression:
            if (e.computed) return false;
            break;
          case si.UnaryExpression:
            return fi;
          case si.BinaryExpression:
            return "+" !== e.operator && fi;
          case si.CallExpression:
            return false
        }
        return void 0 === t ? pi : t
      }

      function di(e, t, n) {
        var r;
        var i;
        var a;
        var o = e.isPure = hi(e, n);
        switch (e.type) {
          case si.Program:
            r = true;
            E(e.body, function (e) {
              di(e.expression, t, o);
              r = r && e.expression.constant
            });
            e.constant = r;
            break;
          case si.Literal:
            e.constant = true;
            e.toWatch = [];
            break;
          case si.UnaryExpression:
            di(e.argument, t, o);
            e.constant = e.argument.constant;
            e.toWatch = e.argument.toWatch;
            break;
          case si.BinaryExpression:
            di(e.left, t, o);
            di(e.right, t, o);
            e.constant = e.left.constant && e.right.constant;
            e.toWatch = e.left.toWatch.concat(e.right.toWatch);
            break;
          case si.LogicalExpression:
            di(e.left, t, o);
            di(e.right, t, o);
            e.constant = e.left.constant && e.right.constant;
            e.toWatch = e.constant ? [] : [e];
            break;
          case si.ConditionalExpression:
            di(e.test, t, o);
            di(e.alternate, t, o);
            di(e.consequent, t, o);
            e.constant = e.test.constant && e.alternate.constant && e.consequent.constant;
            e.toWatch = e.constant ? [] : [e];
            break;
          case si.Identifier:
            e.constant = false;
            e.toWatch = [e];
            break;
          case si.MemberExpression:
            di(e.object, t, o);
            e.computed && di(e.property, t, o);
            e.constant = e.object.constant && (!e.computed || e.property.constant);
            e.toWatch = e.constant ? [] : [e];
            break;
          case si.CallExpression:
            a = !!e.filter && ci(t, e.callee.name);
            r = a;
            i = [];
            E(e.arguments, function (e) {
              di(e, t, o);
              r = r && e.constant;
              i.push.apply(i, e.toWatch)
            });
            e.constant = r;
            e.toWatch = a ? i : [e];
            break;
          case si.AssignmentExpression:
            di(e.left, t, o);
            di(e.right, t, o);
            e.constant = e.left.constant && e.right.constant;
            e.toWatch = [e];
            break;
          case si.ArrayExpression:
            r = true;
            i = [];
            E(e.elements, function (e) {
              di(e, t, o);
              r = r && e.constant;
              i.push.apply(i, e.toWatch)
            });
            e.constant = r;
            e.toWatch = i;
            break;
          case si.ObjectExpression:
            r = true;
            i = [];
            E(e.properties, function (e) {
              di(e.value, t, o);
              r = r && e.value.constant;
              i.push.apply(i, e.value.toWatch);
              if (e.computed) {
                di(e.key, t, false);
                r = r && e.key.constant;
                i.push.apply(i, e.key.toWatch)
              }
            });
            e.constant = r;
            e.toWatch = i;
            break;
          case si.ThisExpression:
            e.constant = false;
            e.toWatch = [];
            break;
          case si.LocalsExpression:
            e.constant = false;
            e.toWatch = [];
            break
        }
      }

      function vi(e) {
        if (1 !== e.length) return;
        var t = e[0].expression;
        var n = t.toWatch;
        if (1 !== n.length) return n;
        return n[0] !== t ? n : void 0
      }

      function mi(e) {
        return e.type === si.Identifier || e.type === si.MemberExpression
      }

      function gi(e) {
        if (1 === e.body.length && mi(e.body[0].expression)) return {
          type: si.AssignmentExpression,
          left: e.body[0].expression,
          right: {type: si.NGValueParameter},
          operator: "="
        }
      }

      function $i(e) {
        return 0 === e.body.length || 1 === e.body.length && (e.body[0].expression.type === si.Literal || e.body[0].expression.type === si.ArrayExpression || e.body[0].expression.type === si.ObjectExpression)
      }

      function yi(e) {
        return e.constant
      }

      function bi(e) {
        this.$filter = e
      }

      bi.prototype = {
        compile: function (e) {
          var t = this;
          this.state = {
            nextId: 0,
            filters: {},
            fn: {vars: [], body: [], own: {}},
            assign: {vars: [], body: [], own: {}},
            inputs: []
          };
          di(e, t.$filter);
          var n = "";
          var r;
          this.stage = "assign";
          if (r = gi(e)) {
            this.state.computing = "assign";
            var i = this.nextId();
            this.recurse(r, i);
            this.return_(i);
            n = "fn.assign=" + this.generateFunction("assign", "s,v,l")
          }
          var a = vi(e.body);
          t.stage = "inputs";
          E(a, function (e, n) {
            var r = "fn" + n;
            t.state[r] = {vars: [], body: [], own: {}};
            t.state.computing = r;
            var i = t.nextId();
            t.recurse(e, i);
            t.return_(i);
            t.state.inputs.push({name: r, isPure: e.isPure});
            e.watchId = n
          });
          this.state.computing = "fn";
          this.stage = "main";
          this.recurse(e);
          var o = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + n + this.watchFns() + "return fn;";
          var s = new Function("$filter", "getStringValue", "ifDefined", "plus", o)(this.$filter, ri, ui, li);
          this.state = this.stage = void 0;
          return s
        }, USE: "use", STRICT: "strict", watchFns: function () {
          var e = [];
          var t = this.state.inputs;
          var n = this;
          E(t, function (t) {
            e.push("var " + t.name + "=" + n.generateFunction(t.name, "s"));
            t.isPure && e.push(t.name, ".isPure=" + JSON.stringify(t.isPure) + ";")
          });
          t.length && e.push("fn.inputs=[" + t.map(function (e) {
            return e.name
          }).join(",") + "];");
          return e.join("")
        }, generateFunction: function (e, t) {
          return "function(" + t + "){" + this.varsPrefix(e) + this.body(e) + "};"
        }, filterPrefix: function () {
          var e = [];
          var t = this;
          E(this.state.filters, function (n, r) {
            e.push(n + "=$filter(" + t.escape(r) + ")")
          });
          if (e.length) return "var " + e.join(",") + ";";
          return ""
        }, varsPrefix: function (e) {
          return this.state[e].vars.length ? "var " + this.state[e].vars.join(",") + ";" : ""
        }, body: function (e) {
          return this.state[e].body.join("")
        }, recurse: function (e, t, n, r, i, a) {
          var o, s, u = this, l, c, f;
          r = r || P;
          if (!a && V(e.watchId)) {
            t = t || this.nextId();
            this.if_("i", this.lazyAssign(t, this.computedMember("i", e.watchId)), this.lazyRecurse(e, t, n, r, i, true));
            return
          }
          switch (e.type) {
            case si.Program:
              E(e.body, function (t, n) {
                u.recurse(t.expression, void 0, void 0, function (e) {
                  s = e
                });
                n !== e.body.length - 1 ? u.current().body.push(s, ";") : u.return_(s)
              });
              break;
            case si.Literal:
              c = this.escape(e.value);
              this.assign(t, c);
              r(t || c);
              break;
            case si.UnaryExpression:
              this.recurse(e.argument, void 0, void 0, function (e) {
                s = e
              });
              c = e.operator + "(" + this.ifDefined(s, 0) + ")";
              this.assign(t, c);
              r(c);
              break;
            case si.BinaryExpression:
              this.recurse(e.left, void 0, void 0, function (e) {
                o = e
              });
              this.recurse(e.right, void 0, void 0, function (e) {
                s = e
              });
              c = "+" === e.operator ? this.plus(o, s) : "-" === e.operator ? this.ifDefined(o, 0) + e.operator + this.ifDefined(s, 0) : "(" + o + ")" + e.operator + "(" + s + ")";
              this.assign(t, c);
              r(c);
              break;
            case si.LogicalExpression:
              t = t || this.nextId();
              u.recurse(e.left, t);
              u.if_("&&" === e.operator ? t : u.not(t), u.lazyRecurse(e.right, t));
              r(t);
              break;
            case si.ConditionalExpression:
              t = t || this.nextId();
              u.recurse(e.test, t);
              u.if_(t, u.lazyRecurse(e.alternate, t), u.lazyRecurse(e.consequent, t));
              r(t);
              break;
            case si.Identifier:
              t = t || this.nextId();
              if (n) {
                n.context = "inputs" === u.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", e.name) + "?l:s");
                n.computed = false;
                n.name = e.name
              }
              u.if_("inputs" === u.stage || u.not(u.getHasOwnProperty("l", e.name)), function () {
                u.if_("inputs" === u.stage || "s", function () {
                  i && 1 !== i && u.if_(u.isNull(u.nonComputedMember("s", e.name)), u.lazyAssign(u.nonComputedMember("s", e.name), "{}"));
                  u.assign(t, u.nonComputedMember("s", e.name))
                })
              }, t && u.lazyAssign(t, u.nonComputedMember("l", e.name)));
              r(t);
              break;
            case si.MemberExpression:
              o = n && (n.context = this.nextId()) || this.nextId();
              t = t || this.nextId();
              u.recurse(e.object, o, void 0, function () {
                u.if_(u.notNull(o), function () {
                  if (e.computed) {
                    s = u.nextId();
                    u.recurse(e.property, s);
                    u.getStringValue(s);
                    i && 1 !== i && u.if_(u.not(u.computedMember(o, s)), u.lazyAssign(u.computedMember(o, s), "{}"));
                    c = u.computedMember(o, s);
                    u.assign(t, c);
                    if (n) {
                      n.computed = true;
                      n.name = s
                    }
                  } else {
                    i && 1 !== i && u.if_(u.isNull(u.nonComputedMember(o, e.property.name)), u.lazyAssign(u.nonComputedMember(o, e.property.name), "{}"));
                    c = u.nonComputedMember(o, e.property.name);
                    u.assign(t, c);
                    if (n) {
                      n.computed = false;
                      n.name = e.property.name
                    }
                  }
                }, function () {
                  u.assign(t, "undefined")
                });
                r(t)
              }, !!i);
              break;
            case si.CallExpression:
              t = t || this.nextId();
              if (e.filter) {
                s = u.filter(e.callee.name);
                l = [];
                E(e.arguments, function (e) {
                  var t = u.nextId();
                  u.recurse(e, t);
                  l.push(t)
                });
                c = s + "(" + l.join(",") + ")";
                u.assign(t, c);
                r(t)
              } else {
                s = u.nextId();
                o = {};
                l = [];
                u.recurse(e.callee, s, o, function () {
                  u.if_(u.notNull(s), function () {
                    E(e.arguments, function (t) {
                      u.recurse(t, e.constant ? void 0 : u.nextId(), void 0, function (e) {
                        l.push(e)
                      })
                    });
                    c = o.name ? u.member(o.context, o.name, o.computed) + "(" + l.join(",") + ")" : s + "(" + l.join(",") + ")";
                    u.assign(t, c)
                  }, function () {
                    u.assign(t, "undefined")
                  });
                  r(t)
                })
              }
              break;
            case si.AssignmentExpression:
              s = this.nextId();
              o = {};
              this.recurse(e.left, void 0, o, function () {
                u.if_(u.notNull(o.context), function () {
                  u.recurse(e.right, s);
                  c = u.member(o.context, o.name, o.computed) + e.operator + s;
                  u.assign(t, c);
                  r(t || c)
                })
              }, 1);
              break;
            case si.ArrayExpression:
              l = [];
              E(e.elements, function (t) {
                u.recurse(t, e.constant ? void 0 : u.nextId(), void 0, function (e) {
                  l.push(e)
                })
              });
              c = "[" + l.join(",") + "]";
              this.assign(t, c);
              r(t || c);
              break;
            case si.ObjectExpression:
              l = [];
              f = false;
              E(e.properties, function (e) {
                e.computed && (f = true)
              });
              if (f) {
                t = t || this.nextId();
                this.assign(t, "{}");
                E(e.properties, function (e) {
                  if (e.computed) {
                    o = u.nextId();
                    u.recurse(e.key, o)
                  } else o = e.key.type === si.Identifier ? e.key.name : "" + e.key.value;
                  s = u.nextId();
                  u.recurse(e.value, s);
                  u.assign(u.member(t, o, e.computed), s)
                })
              } else {
                E(e.properties, function (t) {
                  u.recurse(t.value, e.constant ? void 0 : u.nextId(), void 0, function (e) {
                    l.push(u.escape(t.key.type === si.Identifier ? t.key.name : "" + t.key.value) + ":" + e)
                  })
                });
                c = "{" + l.join(",") + "}";
                this.assign(t, c)
              }
              r(t || c);
              break;
            case si.ThisExpression:
              this.assign(t, "s");
              r(t || "s");
              break;
            case si.LocalsExpression:
              this.assign(t, "l");
              r(t || "l");
              break;
            case si.NGValueParameter:
              this.assign(t, "v");
              r(t || "v");
              break
          }
        }, getHasOwnProperty: function (e, t) {
          var n = e + "." + t;
          var r = this.current().own;
          r.hasOwnProperty(n) || (r[n] = this.nextId(false, e + "&&(" + this.escape(t) + " in " + e + ")"));
          return r[n]
        }, assign: function (e, t) {
          if (!e) return;
          this.current().body.push(e, "=", t, ";");
          return e
        }, filter: function (e) {
          this.state.filters.hasOwnProperty(e) || (this.state.filters[e] = this.nextId(true));
          return this.state.filters[e]
        }, ifDefined: function (e, t) {
          return "ifDefined(" + e + "," + this.escape(t) + ")"
        }, plus: function (e, t) {
          return "plus(" + e + "," + t + ")"
        }, return_: function (e) {
          this.current().body.push("return ", e, ";")
        }, if_: function (e, t, n) {
          if (true === e) t(); else {
            var r = this.current().body;
            r.push("if(", e, "){");
            t();
            r.push("}");
            if (n) {
              r.push("else{");
              n();
              r.push("}")
            }
          }
        }, not: function (e) {
          return "!(" + e + ")"
        }, isNull: function (e) {
          return e + "==null"
        }, notNull: function (e) {
          return e + "!=null"
        }, nonComputedMember: function (e, t) {
          var n = /^[$_a-zA-Z][$_a-zA-Z0-9]*$/;
          var r = /[^$_a-zA-Z0-9]/g;
          return n.test(t) ? e + "." + t : e + '["' + t.replace(r, this.stringEscapeFn) + '"]'
        }, computedMember: function (e, t) {
          return e + "[" + t + "]"
        }, member: function (e, t, n) {
          if (n) return this.computedMember(e, t);
          return this.nonComputedMember(e, t)
        }, getStringValue: function (e) {
          this.assign(e, "getStringValue(" + e + ")")
        }, lazyRecurse: function (e, t, n, r, i, a) {
          var o = this;
          return function () {
            o.recurse(e, t, n, r, i, a)
          }
        }, lazyAssign: function (e, t) {
          var n = this;
          return function () {
            n.assign(e, t)
          }
        }, stringEscapeRegex: /[^ a-zA-Z0-9]/g, stringEscapeFn: function (e) {
          return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        }, escape: function (e) {
          if (H(e)) return "'" + e.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
          if (B(e)) return e.toString();
          if (true === e) return "true";
          if (false === e) return "false";
          if (null === e) return "null";
          if ("undefined" === typeof e) return "undefined";
          throw ti("esc", "IMPOSSIBLE")
        }, nextId: function (e, t) {
          var n = "v" + this.state.nextId++;
          e || this.current().vars.push(n + (t ? "=" + t : ""));
          return n
        }, current: function () {
          return this.state[this.state.computing]
        }
      };

      function wi(e) {
        this.$filter = e
      }

      wi.prototype = {
        compile: function (e) {
          var t = this;
          di(e, t.$filter);
          var n;
          var r;
          (n = gi(e)) && (r = this.recurse(n));
          var i = vi(e.body);
          var a;
          if (i) {
            a = [];
            E(i, function (e, n) {
              var r = t.recurse(e);
              r.isPure = e.isPure;
              e.input = r;
              a.push(r);
              e.watchId = n
            })
          }
          var o = [];
          E(e.body, function (e) {
            o.push(t.recurse(e.expression))
          });
          var s = 0 === e.body.length ? P : 1 === e.body.length ? o[0] : function (e, t) {
            var n;
            E(o, function (r) {
              n = r(e, t)
            });
            return n
          };
          r && (s.assign = function (e, t, n) {
            return r(e, n, t)
          });
          a && (s.inputs = a);
          return s
        }, recurse: function (e, t, n) {
          var r, i, a = this, o;
          if (e.input) return this.inputs(e.input, e.watchId);
          switch (e.type) {
            case si.Literal:
              return this.value(e.value, t);
            case si.UnaryExpression:
              i = this.recurse(e.argument);
              return this["unary" + e.operator](i, t);
            case si.BinaryExpression:
              r = this.recurse(e.left);
              i = this.recurse(e.right);
              return this["binary" + e.operator](r, i, t);
            case si.LogicalExpression:
              r = this.recurse(e.left);
              i = this.recurse(e.right);
              return this["binary" + e.operator](r, i, t);
            case si.ConditionalExpression:
              return this["ternary?:"](this.recurse(e.test), this.recurse(e.alternate), this.recurse(e.consequent), t);
            case si.Identifier:
              return a.identifier(e.name, t, n);
            case si.MemberExpression:
              r = this.recurse(e.object, false, !!n);
              e.computed || (i = e.property.name);
              e.computed && (i = this.recurse(e.property));
              return e.computed ? this.computedMember(r, i, t, n) : this.nonComputedMember(r, i, t, n);
            case si.CallExpression:
              o = [];
              E(e.arguments, function (e) {
                o.push(a.recurse(e))
              });
              e.filter && (i = this.$filter(e.callee.name));
              e.filter || (i = this.recurse(e.callee, true));
              return e.filter ? function (e, n, r, a) {
                var s = [];
                for (var u = 0; u < o.length; ++u) s.push(o[u](e, n, r, a));
                var l = i.apply(void 0, s, a);
                return t ? {context: void 0, name: void 0, value: l} : l
              } : function (e, n, r, a) {
                var s = i(e, n, r, a);
                var u;
                if (null != s.value) {
                  var l = [];
                  for (var c = 0; c < o.length; ++c) l.push(o[c](e, n, r, a));
                  u = s.value.apply(s.context, l)
                }
                return t ? {value: u} : u
              };
            case si.AssignmentExpression:
              r = this.recurse(e.left, true, 1);
              i = this.recurse(e.right);
              return function (e, n, a, o) {
                var s = r(e, n, a, o);
                var u = i(e, n, a, o);
                s.context[s.name] = u;
                return t ? {value: u} : u
              };
            case si.ArrayExpression:
              o = [];
              E(e.elements, function (e) {
                o.push(a.recurse(e))
              });
              return function (e, n, r, i) {
                var a = [];
                for (var s = 0; s < o.length; ++s) a.push(o[s](e, n, r, i));
                return t ? {value: a} : a
              };
            case si.ObjectExpression:
              o = [];
              E(e.properties, function (e) {
                e.computed ? o.push({
                  key: a.recurse(e.key),
                  computed: true,
                  value: a.recurse(e.value)
                }) : o.push({
                  key: e.key.type === si.Identifier ? e.key.name : "" + e.key.value,
                  computed: false,
                  value: a.recurse(e.value)
                })
              });
              return function (e, n, r, i) {
                var a = {};
                for (var s = 0; s < o.length; ++s) o[s].computed ? a[o[s].key(e, n, r, i)] = o[s].value(e, n, r, i) : a[o[s].key] = o[s].value(e, n, r, i);
                return t ? {value: a} : a
              };
            case si.ThisExpression:
              return function (e) {
                return t ? {value: e} : e
              };
            case si.LocalsExpression:
              return function (e, n) {
                return t ? {value: n} : n
              };
            case si.NGValueParameter:
              return function (e, n, r) {
                return t ? {value: r} : r
              }
          }
        }, "unary+": function (e, t) {
          return function (n, r, i, a) {
            var o = e(n, r, i, a);
            o = V(o) ? +o : 0;
            return t ? {value: o} : o
          }
        }, "unary-": function (e, t) {
          return function (n, r, i, a) {
            var o = e(n, r, i, a);
            o = V(o) ? -o : -0;
            return t ? {value: o} : o
          }
        }, "unary!": function (e, t) {
          return function (n, r, i, a) {
            var o = !e(n, r, i, a);
            return t ? {value: o} : o
          }
        }, "binary+": function (e, t, n) {
          return function (r, i, a, o) {
            var s = e(r, i, a, o);
            var u = t(r, i, a, o);
            var l = li(s, u);
            return n ? {value: l} : l
          }
        }, "binary-": function (e, t, n) {
          return function (r, i, a, o) {
            var s = e(r, i, a, o);
            var u = t(r, i, a, o);
            var l = (V(s) ? s : 0) - (V(u) ? u : 0);
            return n ? {value: l} : l
          }
        }, "binary*": function (e, t, n) {
          return function (r, i, a, o) {
            var s = e(r, i, a, o) * t(r, i, a, o);
            return n ? {value: s} : s
          }
        }, "binary/": function (e, t, n) {
          return function (r, i, a, o) {
            var s = e(r, i, a, o) / t(r, i, a, o);
            return n ? {value: s} : s
          }
        }, "binary%": function (e, t, n) {
          return function (r, i, a, o) {
            var s = e(r, i, a, o) % t(r, i, a, o);
            return n ? {value: s} : s
          }
        }, "binary===": function (e, t, n) {
          return function (r, i, a, o) {
            var s = e(r, i, a, o) === t(r, i, a, o);
            return n ? {value: s} : s
          }
        }, "binary!==": function (e, t, n) {
          return function (r, i, a, o) {
            var s = e(r, i, a, o) !== t(r, i, a, o);
            return n ? {value: s} : s
          }
        }, "binary==": function (e, t, n) {
          return function (r, i, a, o) {
            var s = e(r, i, a, o) == t(r, i, a, o);
            return n ? {value: s} : s
          }
        }, "binary!=": function (e, t, n) {
          return function (r, i, a, o) {
            var s = e(r, i, a, o) != t(r, i, a, o);
            return n ? {value: s} : s
          }
        }, "binary<": function (e, t, n) {
          return function (r, i, a, o) {
            var s = e(r, i, a, o) < t(r, i, a, o);
            return n ? {value: s} : s
          }
        }, "binary>": function (e, t, n) {
          return function (r, i, a, o) {
            var s = e(r, i, a, o) > t(r, i, a, o);
            return n ? {value: s} : s
          }
        }, "binary<=": function (e, t, n) {
          return function (r, i, a, o) {
            var s = e(r, i, a, o) <= t(r, i, a, o);
            return n ? {value: s} : s
          }
        }, "binary>=": function (e, t, n) {
          return function (r, i, a, o) {
            var s = e(r, i, a, o) >= t(r, i, a, o);
            return n ? {value: s} : s
          }
        }, "binary&&": function (e, t, n) {
          return function (r, i, a, o) {
            var s = e(r, i, a, o) && t(r, i, a, o);
            return n ? {value: s} : s
          }
        }, "binary||": function (e, t, n) {
          return function (r, i, a, o) {
            var s = e(r, i, a, o) || t(r, i, a, o);
            return n ? {value: s} : s
          }
        }, "ternary?:": function (e, t, n, r) {
          return function (i, a, o, s) {
            var u = e(i, a, o, s) ? t(i, a, o, s) : n(i, a, o, s);
            return r ? {value: u} : u
          }
        }, value: function (e, t) {
          return function () {
            return t ? {context: void 0, name: void 0, value: e} : e
          }
        }, identifier: function (e, t, n) {
          return function (r, i, a, o) {
            var s = i && e in i ? i : r;
            n && 1 !== n && s && null == s[e] && (s[e] = {});
            var u = s ? s[e] : void 0;
            return t ? {context: s, name: e, value: u} : u
          }
        }, computedMember: function (e, t, n, r) {
          return function (i, a, o, s) {
            var u = e(i, a, o, s);
            var l;
            var c;
            if (null != u) {
              l = t(i, a, o, s);
              l = ri(l);
              r && 1 !== r && u && !u[l] && (u[l] = {});
              c = u[l]
            }
            return n ? {context: u, name: l, value: c} : c
          }
        }, nonComputedMember: function (e, t, n, r) {
          return function (i, a, o, s) {
            var u = e(i, a, o, s);
            r && 1 !== r && u && null == u[t] && (u[t] = {});
            var l = null != u ? u[t] : void 0;
            return n ? {context: u, name: t, value: l} : l
          }
        }, inputs: function (e, t) {
          return function (n, r, i, a) {
            if (a) return a[t];
            return e(n, r, i)
          }
        }
      };

      function xi(e, t, n) {
        this.ast = new si(e, n);
        this.astCompiler = n.csp ? new wi(t) : new bi(t)
      }

      xi.prototype = {
        constructor: xi, parse: function (e) {
          var t = this.getAst(e);
          var n = this.astCompiler.compile(t.ast);
          n.literal = $i(t.ast);
          n.constant = yi(t.ast);
          n.oneTime = t.oneTime;
          return n
        }, getAst: function (e) {
          var t = false;
          e = e.trim();
          if (":" === e.charAt(0) && ":" === e.charAt(1)) {
            t = true;
            e = e.substring(2)
          }
          return {ast: this.ast.ast(e), oneTime: t}
        }
      };

      function Ci(e) {
        return J(e.valueOf) ? e.valueOf() : ni.call(e)
      }

      function Ei() {
        var e = Ke();
        var t = {true: true, false: false, null: null, undefined: void 0};
        var n, r;
        this.addLiteral = function (e, n) {
          t[e] = n
        };
        this.setIdentifierFns = function (e, t) {
          n = e;
          r = t;
          return this
        };
        this.$get = ["$filter", function (i) {
          var a = me().noUnsafeEval;
          var o = {csp: a, literals: he(t), isIdentifierStart: J(n) && n, isIdentifierContinue: J(r) && r};
          s.$$getAst = u;
          return s;

          function s(t, n) {
            var r, a;
            switch (typeof t) {
              case"string":
                t = t.trim();
                a = t;
                r = e[a];
                if (!r) {
                  var s = new oi(o);
                  var u = new xi(s, i, o);
                  r = u.parse(t);
                  e[a] = d(r)
                }
                return m(r, n);
              case"function":
                return m(t, n);
              default:
                return m(P, n)
            }
          }

          function u(e) {
            var t = new oi(o);
            var n = new xi(t, i, o);
            return n.getAst(e).ast
          }

          function l(e, t, n) {
            if (null == e || null == t) return e === t;
            if ("object" === typeof e) {
              e = Ci(e);
              if ("object" === typeof e && !n) return false
            }
            return e === t || e !== e && t !== t
          }

          function c(e, t, n, r, i) {
            var a = r.inputs;
            var o;
            if (1 === a.length) {
              var s = l;
              a = a[0];
              return e.$watch(function e(t) {
                var n = a(t);
                if (!l(n, s, a.isPure)) {
                  o = r(t, void 0, void 0, [n]);
                  s = n && Ci(n)
                }
                return o
              }, t, n, i)
            }
            var u = [];
            var c = [];
            for (var f = 0, p = a.length; f < p; f++) {
              u[f] = l;
              c[f] = null
            }
            return e.$watch(function e(t) {
              var n = false;
              for (var i = 0, s = a.length; i < s; i++) {
                var f = a[i](t);
                if (n || (n = !l(f, u[i], a[i].isPure))) {
                  c[i] = f;
                  u[i] = f && Ci(f)
                }
              }
              n && (o = r(t, void 0, void 0, c));
              return o
            }, t, n, i)
          }

          function f(e, t, n, r, i) {
            var a = r.literal ? p : V;
            var o, s;
            var u = r.$$intercepted || r;
            var l = r.$$interceptor || _;
            var c = r.inputs && !u.inputs;
            h.literal = r.literal;
            h.constant = r.constant;
            h.inputs = r.inputs;
            d(h);
            o = e.$watch(h, t, n, i);
            return o;

            function f() {
              a(s) && o()
            }

            function h(e, t, n, r) {
              s = c && r ? r[0] : u(e, t, n, r);
              a(s) && e.$$postDigest(f);
              return l(s)
            }
          }

          function p(e) {
            var t = true;
            E(e, function (e) {
              V(e) || (t = false)
            });
            return t
          }

          function h(e, t, n, r) {
            var i = e.$watch(function e(t) {
              i();
              return r(t)
            }, t, n);
            return i
          }

          function d(e) {
            e.constant ? e.$$watchDelegate = h : e.oneTime ? e.$$watchDelegate = f : e.inputs && (e.$$watchDelegate = c);
            return e
          }

          function v(e, t) {
            function n(n) {
              return t(e(n))
            }

            n.$stateful = e.$stateful || t.$stateful;
            n.$$pure = e.$$pure && t.$$pure;
            return n
          }

          function m(e, t) {
            if (!t) return e;
            if (e.$$interceptor) {
              t = v(e.$$interceptor, t);
              e = e.$$intercepted
            }
            var n = false;
            var r = function r(i, a, o, s) {
              var u = n && s ? s[0] : e(i, a, o, s);
              return t(u)
            };
            r.$$intercepted = e;
            r.$$interceptor = t;
            r.literal = e.literal;
            r.oneTime = e.oneTime;
            r.constant = e.constant;
            if (!t.$stateful) {
              n = !e.inputs;
              r.inputs = e.inputs ? e.inputs : [e];
              t.$$pure || (r.inputs = r.inputs.map(function (e) {
                if (e.isPure === pi) return function t(n) {
                  return e(n)
                };
                return e
              }))
            }
            return d(r)
          }
        }]
      }

      function ki() {
        var e = true;
        this.$get = ["$rootScope", "$exceptionHandler", function (t, n) {
          return Ai(function (e) {
            t.$evalAsync(e)
          }, n, e)
        }];
        this.errorOnUnhandledRejections = function (t) {
          if (V(t)) {
            e = t;
            return this
          }
          return e
        }
      }

      function Si() {
        var e = true;
        this.$get = ["$browser", "$exceptionHandler", function (t, n) {
          return Ai(function (e) {
            t.defer(e)
          }, n, e)
        }];
        this.errorOnUnhandledRejections = function (t) {
          if (V(t)) {
            e = t;
            return this
          }
          return e
        }
      }

      function Ai(e, t, n) {
        var r = a("$q", TypeError);
        var i = 0;
        var o = [];

        function s() {
          return new u
        }

        function u() {
          var e = this.promise = new l;
          this.resolve = function (t) {
            h(e, t)
          };
          this.reject = function (t) {
            v(e, t)
          };
          this.notify = function (t) {
            g(e, t)
          }
        }

        function l() {
          this.$$state = {status: 0}
        }

        j(l.prototype, {
          then: function (e, t, n) {
            if (I(e) && I(t) && I(n)) return this;
            var r = new l;
            this.$$state.pending = this.$$state.pending || [];
            this.$$state.pending.push([r, e, t, n]);
            this.$$state.status > 0 && p(this.$$state);
            return r
          }, catch: function (e) {
            return this.then(null, e)
          }, finally: function (e, t) {
            return this.then(function (t) {
              return y(t, w, e)
            }, function (t) {
              return y(t, $, e)
            }, t)
          }
        });

        function c(r) {
          var a, o, s;
          s = r.pending;
          r.processScheduled = false;
          r.pending = void 0;
          try {
            for (var u = 0, l = s.length; u < l; ++u) {
              Oi(r);
              o = s[u][0];
              a = s[u][r.status];
              try {
                J(a) ? h(o, a(r.value)) : 1 === r.status ? h(o, r.value) : v(o, r.value)
              } catch (e) {
                v(o, e);
                e && true === e.$$passToExceptionHandler && t(e)
              }
            }
          } finally {
            --i;
            n && 0 === i && e(f)
          }
        }

        function f() {
          while (!i && o.length) {
            var e = o.shift();
            if (!Ti(e)) {
              Oi(e);
              var n = "Possibly unhandled rejection: " + ut(e.value);
              G(e.value) ? t(e.value, n) : t(n)
            }
          }
        }

        function p(t) {
          if (n && !t.pending && 2 === t.status && !Ti(t)) {
            0 === i && 0 === o.length && e(f);
            o.push(t)
          }
          if (t.processScheduled || !t.pending) return;
          t.processScheduled = true;
          ++i;
          e(function () {
            c(t)
          })
        }

        function h(e, t) {
          if (e.$$state.status) return;
          t === e ? m(e, r("qcycle", "Expected promise to be resolved with value other than itself '{0}'", t)) : d(e, t)
        }

        function d(e, t) {
          var n;
          var r = false;
          try {
            (F(t) || J(t)) && (n = t.then);
            if (J(n)) {
              e.$$state.status = -1;
              n.call(t, i, a, o)
            } else {
              e.$$state.value = t;
              e.$$state.status = 1;
              p(e.$$state)
            }
          } catch (e) {
            a(e)
          }

          function i(t) {
            if (r) return;
            r = true;
            d(e, t)
          }

          function a(t) {
            if (r) return;
            r = true;
            m(e, t)
          }

          function o(t) {
            g(e, t)
          }
        }

        function v(e, t) {
          if (e.$$state.status) return;
          m(e, t)
        }

        function m(e, t) {
          e.$$state.value = t;
          e.$$state.status = 2;
          p(e.$$state)
        }

        function g(n, r) {
          var i = n.$$state.pending;
          n.$$state.status <= 0 && i && i.length && e(function () {
            var e, n;
            for (var a = 0, o = i.length; a < o; a++) {
              n = i[a][0];
              e = i[a][3];
              try {
                g(n, J(e) ? e(r) : r)
              } catch (e) {
                t(e)
              }
            }
          })
        }

        function $(e) {
          var t = new l;
          v(t, e);
          return t
        }

        function y(e, t, n) {
          var r = null;
          try {
            J(n) && (r = n())
          } catch (e) {
            return $(e)
          }
          return ne(r) ? r.then(function () {
            return t(e)
          }, $) : t(e)
        }

        function b(e, t, n, r) {
          var i = new l;
          h(i, e);
          return i.then(t, n, r)
        }

        var w = b;

        function x(e) {
          var t = new l, n = 0, r = W(e) ? [] : {};
          E(e, function (e, i) {
            n++;
            b(e).then(function (e) {
              r[i] = e;
              --n || h(t, r)
            }, function (e) {
              v(t, e)
            })
          });
          0 === n && h(t, r);
          return t
        }

        function C(e) {
          var t = s();
          E(e, function (e) {
            b(e).then(t.resolve, t.reject)
          });
          return t.promise
        }

        function k(e) {
          if (!J(e)) throw r("norslvr", "Expected resolverFn, got '{0}'", e);
          var t = new l;

          function n(e) {
            h(t, e)
          }

          function i(e) {
            v(t, e)
          }

          e(n, i);
          return t
        }

        k.prototype = l.prototype;
        k.defer = s;
        k.reject = $;
        k.when = b;
        k.resolve = w;
        k.all = x;
        k.race = C;
        return k
      }

      function Ti(e) {
        return !!e.pur
      }

      function Oi(e) {
        e.pur = true
      }

      function ji(e) {
        Oi(e.$$state)
      }

      function Mi() {
        this.$get = ["$window", "$timeout", function (e, t) {
          var n = e.requestAnimationFrame || e.webkitRequestAnimationFrame;
          var r = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.webkitCancelRequestAnimationFrame;
          var i = !!n;
          var a = i ? function (e) {
            var t = n(e);
            return function () {
              r(t)
            }
          } : function (e) {
            var n = t(e, 16.66, false);
            return function () {
              t.cancel(n)
            }
          };
          a.supported = i;
          return a
        }]
      }

      function Di() {
        var e = 10;
        var t = a("$rootScope");
        var n = null;
        var r = null;
        this.digestTtl = function (t) {
          arguments.length && (e = t);
          return e
        };

        function i(e) {
          function t() {
            this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;
            this.$$listeners = {};
            this.$$listenerCount = {};
            this.$$watchersCount = 0;
            this.$id = A();
            this.$$ChildScope = null;
            this.$$suspended = false
          }

          t.prototype = e;
          return t
        }

        this.$get = ["$exceptionHandler", "$parse", "$browser", function (a, o, s) {
          function l(e) {
            e.currentScope.$$destroyed = true
          }

          function c(e) {
            if (9 === f) {
              e.$$childHead && c(e.$$childHead);
              e.$$nextSibling && c(e.$$nextSibling)
            }
            e.$parent = e.$$nextSibling = e.$$prevSibling = e.$$childHead = e.$$childTail = e.$root = e.$$watchers = null
          }

          function p() {
            this.$id = A();
            this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
            this.$root = this;
            this.$$destroyed = false;
            this.$$suspended = false;
            this.$$listeners = {};
            this.$$listenerCount = {};
            this.$$watchersCount = 0;
            this.$$isolateBindings = null
          }

          p.prototype = {
            constructor: p, $new: function (e, t) {
              var n;
              t = t || this;
              if (e) {
                n = new p;
                n.$root = this.$root
              } else {
                this.$$ChildScope || (this.$$ChildScope = i(this));
                n = new this.$$ChildScope
              }
              n.$parent = t;
              n.$$prevSibling = t.$$childTail;
              if (t.$$childHead) {
                t.$$childTail.$$nextSibling = n;
                t.$$childTail = n
              } else t.$$childHead = t.$$childTail = n;
              (e || t !== this) && n.$on("$destroy", l);
              return n
            }, $watch: function (e, t, r, i) {
              var a = o(e);
              var s = J(t) ? t : P;
              if (a.$$watchDelegate) return a.$$watchDelegate(this, s, r, a, e);
              var u = this, l = u.$$watchers, c = {fn: s, last: x, get: a, exp: i || e, eq: !!r};
              n = null;
              if (!l) {
                l = u.$$watchers = [];
                l.$$digestWatchIndex = -1
              }
              l.unshift(c);
              l.$$digestWatchIndex++;
              b(this, 1);
              return function e() {
                var t = pe(l, c);
                if (t >= 0) {
                  b(u, -1);
                  t < l.$$digestWatchIndex && l.$$digestWatchIndex--
                }
                n = null
              }
            }, $watchGroup: function (e, t) {
              var n = new Array(e.length);
              var r = new Array(e.length);
              var i = [];
              var a = this;
              var o = false;
              var s = true;
              if (!e.length) {
                var u = true;
                a.$evalAsync(function () {
                  u && t(r, r, a)
                });
                return function e() {
                  u = false
                }
              }
              if (1 === e.length) return this.$watch(e[0], function e(i, a, o) {
                r[0] = i;
                n[0] = a;
                t(r, i === a ? r : n, o)
              });
              E(e, function (e, t) {
                var n = a.$watch(e, function e(n) {
                  r[t] = n;
                  if (!o) {
                    o = true;
                    a.$evalAsync(l)
                  }
                });
                i.push(n)
              });

              function l() {
                o = false;
                try {
                  if (s) {
                    s = false;
                    t(r, r, a)
                  } else t(r, n, a)
                } finally {
                  for (var i = 0; i < e.length; i++) n[i] = r[i]
                }
              }

              return function e() {
                while (i.length) i.shift()()
              }
            }, $watchCollection: function (e, t) {
              v.$$pure = o(e).literal;
              v.$stateful = !v.$$pure;
              var n = this;
              var r;
              var i;
              var a;
              var s = t.length > 1;
              var l = 0;
              var c = o(e, v);
              var f = [];
              var p = {};
              var h = true;
              var d = 0;

              function v(e) {
                r = e;
                var t, n, a, o, s;
                if (I(r)) return;
                if (F(r)) if (C(r)) {
                  if (i !== f) {
                    i = f;
                    d = i.length = 0;
                    l++
                  }
                  t = r.length;
                  if (d !== t) {
                    l++;
                    i.length = d = t
                  }
                  for (var c = 0; c < t; c++) {
                    s = i[c];
                    o = r[c];
                    a = s !== s && o !== o;
                    if (!a && s !== o) {
                      l++;
                      i[c] = o
                    }
                  }
                } else {
                  if (i !== p) {
                    i = p = {};
                    d = 0;
                    l++
                  }
                  t = 0;
                  for (n in r) if (u.call(r, n)) {
                    t++;
                    o = r[n];
                    s = i[n];
                    if (n in i) {
                      a = s !== s && o !== o;
                      if (!a && s !== o) {
                        l++;
                        i[n] = o
                      }
                    } else {
                      d++;
                      i[n] = o;
                      l++
                    }
                  }
                  if (d > t) {
                    l++;
                    for (n in i) if (!u.call(r, n)) {
                      d--;
                      delete i[n]
                    }
                  }
                } else if (i !== r) {
                  i = r;
                  l++
                }
                return l
              }

              function m() {
                if (h) {
                  h = false;
                  t(r, r, n)
                } else t(r, a, n);
                if (s) if (F(r)) if (C(r)) {
                  a = new Array(r.length);
                  for (var e = 0; e < r.length; e++) a[e] = r[e]
                } else {
                  a = {};
                  for (var i in r) u.call(r, i) && (a[i] = r[i])
                } else a = r
              }

              return this.$watch(c, m)
            }, $digest: function () {
              var i, o, u, l, c, f, p, m = e, b, w, C = d.length ? h : this, E = [], S, A;
              $("$digest");
              s.$$checkUrlChange();
              if (this === h && null !== r) {
                s.defer.cancel(r);
                k()
              }
              n = null;
              do {
                p = false;
                w = C;
                for (var T = 0; T < d.length; T++) {
                  try {
                    A = d[T];
                    l = A.fn;
                    l(A.scope, A.locals)
                  } catch (e) {
                    a(e)
                  }
                  n = null
                }
                d.length = 0;
                e:do {
                  if (f = !w.$$suspended && w.$$watchers) {
                    f.$$digestWatchIndex = f.length;
                    while (f.$$digestWatchIndex--) try {
                      i = f[f.$$digestWatchIndex];
                      if (i) {
                        c = i.get;
                        if ((o = c(w)) === (u = i.last) || (i.eq ? ve(o, u) : N(o) && N(u))) {
                          if (i === n) {
                            p = false;
                            break e
                          }
                        } else {
                          p = true;
                          n = i;
                          i.last = i.eq ? he(o, null) : o;
                          l = i.fn;
                          l(o, u === x ? o : u, w);
                          if (m < 5) {
                            S = 4 - m;
                            E[S] || (E[S] = []);
                            E[S].push({
                              msg: J(i.exp) ? "fn: " + (i.exp.name || i.exp.toString()) : i.exp,
                              newVal: o,
                              oldVal: u
                            })
                          }
                        }
                      }
                    } catch (e) {
                      a(e)
                    }
                  }
                  if (!(b = !w.$$suspended && w.$$watchersCount && w.$$childHead || w !== C && w.$$nextSibling)) while (w !== C && !(b = w.$$nextSibling)) w = w.$parent
                } while (w = b);
                if ((p || d.length) && !m--) {
                  y();
                  throw t("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", e, E)
                }
              } while (p || d.length);
              y();
              while (g < v.length) try {
                v[g++]()
              } catch (e) {
                a(e)
              }
              v.length = g = 0;
              s.$$checkUrlChange()
            }, $suspend: function () {
              this.$$suspended = true
            }, $isSuspended: function () {
              return this.$$suspended
            }, $resume: function () {
              this.$$suspended = false
            }, $destroy: function () {
              if (this.$$destroyed) return;
              var e = this.$parent;
              this.$broadcast("$destroy");
              this.$$destroyed = true;
              this === h && s.$$applicationDestroyed();
              b(this, -this.$$watchersCount);
              for (var t in this.$$listenerCount) w(this, this.$$listenerCount[t], t);
              e && e.$$childHead === this && (e.$$childHead = this.$$nextSibling);
              e && e.$$childTail === this && (e.$$childTail = this.$$prevSibling);
              this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);
              this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);
              this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = P;
              this.$on = this.$watch = this.$watchGroup = function () {
                return P
              };
              this.$$listeners = {};
              this.$$nextSibling = null;
              c(this)
            }, $eval: function (e, t) {
              return o(e)(this, t)
            }, $evalAsync: function (e, t) {
              h.$$phase || d.length || s.defer(function () {
                d.length && h.$digest()
              });
              d.push({scope: this, fn: o(e), locals: t})
            }, $$postDigest: function (e) {
              v.push(e)
            }, $apply: function (e) {
              try {
                $("$apply");
                try {
                  return this.$eval(e)
                } finally {
                  y()
                }
              } catch (e) {
                a(e)
              } finally {
                try {
                  h.$digest()
                } catch (e) {
                  a(e);
                  throw e
                }
              }
            }, $applyAsync: function (e) {
              var t = this;
              e && m.push(n);
              e = o(e);
              S();

              function n() {
                t.$eval(e)
              }
            }, $on: function (e, t) {
              var n = this.$$listeners[e];
              n || (this.$$listeners[e] = n = []);
              n.push(t);
              var r = this;
              do {
                r.$$listenerCount[e] || (r.$$listenerCount[e] = 0);
                r.$$listenerCount[e]++
              } while (r = r.$parent);
              var i = this;
              return function () {
                var r = n.indexOf(t);
                if (-1 !== r) {
                  delete n[r];
                  w(i, 1, e)
                }
              }
            }, $emit: function (e, t) {
              var n = [], r, i = this, o = false, s = {
                name: e, targetScope: i, stopPropagation: function () {
                  o = true
                }, preventDefault: function () {
                  s.defaultPrevented = true
                }, defaultPrevented: false
              }, u = $e([s], arguments, 1), l, c;
              do {
                r = i.$$listeners[e] || n;
                s.currentScope = i;
                for (l = 0, c = r.length; l < c; l++) {
                  if (!r[l]) {
                    r.splice(l, 1);
                    l--;
                    c--;
                    continue
                  }
                  try {
                    r[l].apply(null, u)
                  } catch (e) {
                    a(e)
                  }
                }
                if (o) break;
                i = i.$parent
              } while (i);
              s.currentScope = null;
              return s
            }, $broadcast: function (e, t) {
              var n = this, r = n, i = n, o = {
                name: e, targetScope: n, preventDefault: function () {
                  o.defaultPrevented = true
                }, defaultPrevented: false
              };
              if (!n.$$listenerCount[e]) return o;
              var s = $e([o], arguments, 1), u, l, c;
              while (r = i) {
                o.currentScope = r;
                u = r.$$listeners[e] || [];
                for (l = 0, c = u.length; l < c; l++) {
                  if (!u[l]) {
                    u.splice(l, 1);
                    l--;
                    c--;
                    continue
                  }
                  try {
                    u[l].apply(null, s)
                  } catch (e) {
                    a(e)
                  }
                }
                if (!(i = r.$$listenerCount[e] && r.$$childHead || r !== n && r.$$nextSibling)) while (r !== n && !(i = r.$$nextSibling)) r = r.$parent
              }
              o.currentScope = null;
              return o
            }
          };
          var h = new p;
          var d = h.$$asyncQueue = [];
          var v = h.$$postDigestQueue = [];
          var m = h.$$applyAsyncQueue = [];
          var g = 0;
          return h;

          function $(e) {
            if (h.$$phase) throw t("inprog", "{0} already in progress", h.$$phase);
            h.$$phase = e
          }

          function y() {
            h.$$phase = null
          }

          function b(e, t) {
            do {
              e.$$watchersCount += t
            } while (e = e.$parent)
          }

          function w(e, t, n) {
            do {
              e.$$listenerCount[n] -= t;
              0 === e.$$listenerCount[n] && delete e.$$listenerCount[n]
            } while (e = e.$parent)
          }

          function x() {
          }

          function k() {
            while (m.length) try {
              m.shift()()
            } catch (e) {
              a(e)
            }
            r = null
          }

          function S() {
            null === r && (r = s.defer(function () {
              h.$apply(k)
            }))
          }
        }]
      }

      function Ni() {
        var e = /^\s*(https?|s?ftp|mailto|tel|file):/, t = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function (t) {
          if (V(t)) {
            e = t;
            return this
          }
          return e
        };
        this.imgSrcSanitizationWhitelist = function (e) {
          if (V(e)) {
            t = e;
            return this
          }
          return t
        };
        this.$get = function () {
          return function n(r, i) {
            var a = i ? t : e;
            var o = Ki(r && r.trim()).href;
            if ("" !== o && !o.match(a)) return "unsafe:" + o;
            return r
          }
        }
      }

      var qi = a("$sce");
      var Pi = {HTML: "html", CSS: "css", MEDIA_URL: "mediaUrl", URL: "url", RESOURCE_URL: "resourceUrl", JS: "js"};
      var _i = /_([a-z])/g;

      function Ri(e) {
        return e.replace(_i, yt)
      }

      function Li(e) {
        if ("self" === e) return e;
        if (H(e)) {
          if (e.indexOf("***") > -1) throw qi("iwcard", "Illegal sequence *** in string matcher.  String: {0}", e);
          e = se(e).replace(/\\\*\\\*/g, ".*").replace(/\\\*/g, "[^:/.?&;]*");
          return new RegExp("^" + e + "$")
        }
        if (Q(e)) return new RegExp("^" + e.source + "$");
        throw qi("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
      }

      function Ii(e) {
        var t = [];
        V(e) && E(e, function (e) {
          t.push(Li(e))
        });
        return t
      }

      function Vi() {
        this.SCE_CONTEXTS = Pi;
        var e = ["self"], t = [];
        this.resourceUrlWhitelist = function (t) {
          arguments.length && (e = Ii(t));
          return e
        };
        this.resourceUrlBlacklist = function (e) {
          arguments.length && (t = Ii(e));
          return t
        };
        this.$get = ["$injector", "$$sanitizeUri", function (n, r) {
          var i = function e(t) {
            throw qi("unsafe", "Attempting to use an unsafe value in a safe context.")
          };
          n.has("$sanitize") && (i = n.get("$sanitize"));

          function a(e, t) {
            return "self" === e ? Xi(t) || Zi(t) : !!e.exec(t.href)
          }

          function o(n) {
            var r = Ki(n.toString());
            var i, o, s = false;
            for (i = 0, o = e.length; i < o; i++) if (a(e[i], r)) {
              s = true;
              break
            }
            if (s) for (i = 0, o = t.length; i < o; i++) if (a(t[i], r)) {
              s = false;
              break
            }
            return s
          }

          function s(e) {
            var t = function e(t) {
              this.$$unwrapTrustedValue = function () {
                return t
              }
            };
            e && (t.prototype = new e);
            t.prototype.valueOf = function e() {
              return this.$$unwrapTrustedValue()
            };
            t.prototype.toString = function e() {
              return this.$$unwrapTrustedValue().toString()
            };
            return t
          }

          var u = s(), l = {};
          l[Pi.HTML] = s(u);
          l[Pi.CSS] = s(u);
          l[Pi.MEDIA_URL] = s(u);
          l[Pi.URL] = s(l[Pi.MEDIA_URL]);
          l[Pi.JS] = s(u);
          l[Pi.RESOURCE_URL] = s(l[Pi.URL]);

          function c(e, t) {
            var n = l.hasOwnProperty(e) ? l[e] : null;
            if (!n) throw qi("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", e, t);
            if (null === t || I(t) || "" === t) return t;
            if ("string" !== typeof t) throw qi("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", e);
            return new n(t)
          }

          function f(e) {
            return e instanceof u ? e.$$unwrapTrustedValue() : e
          }

          function p(e, t) {
            if (null === t || I(t) || "" === t) return t;
            var n = l.hasOwnProperty(e) ? l[e] : null;
            if (n && t instanceof n) return t.$$unwrapTrustedValue();
            J(t.$$unwrapTrustedValue) && (t = t.$$unwrapTrustedValue());
            if (e === Pi.MEDIA_URL || e === Pi.URL) return r(t, e === Pi.MEDIA_URL);
            if (e === Pi.RESOURCE_URL) {
              if (o(t)) return t;
              throw qi("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", t.toString())
            }
            if (e === Pi.HTML) return i(t);
            throw qi("unsafe", "Attempting to use an unsafe value in a safe context.")
          }

          return {trustAs: c, getTrusted: p, valueOf: f}
        }]
      }

      function Fi() {
        var e = true;
        this.enabled = function (t) {
          arguments.length && (e = !!t);
          return e
        };
        this.$get = ["$parse", "$sceDelegate", function (t, n) {
          if (e && f < 8) throw qi("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
          var r = ot(Pi);
          r.isEnabled = function () {
            return e
          };
          r.trustAs = n.trustAs;
          r.getTrusted = n.getTrusted;
          r.valueOf = n.valueOf;
          if (!e) {
            r.trustAs = r.getTrusted = function (e, t) {
              return t
            };
            r.valueOf = _
          }
          r.parseAs = function e(n, i) {
            var a = t(i);
            return a.literal && a.constant ? a : t(i, function (e) {
              return r.getTrusted(n, e)
            })
          };
          var i = r.parseAs, a = r.getTrusted, o = r.trustAs;
          E(Pi, function (e, t) {
            var n = l(t);
            r[Ri("parse_as_" + n)] = function (t) {
              return i(e, t)
            };
            r[Ri("get_trusted_" + n)] = function (t) {
              return a(e, t)
            };
            r[Ri("trust_as_" + n)] = function (t) {
              return o(e, t)
            }
          });
          return r
        }]
      }

      function Ui() {
        this.$get = ["$window", "$document", function (e, t) {
          var n = {}, r = e.nw && e.nw.process,
            i = !r && e.chrome && (e.chrome.app && e.chrome.app.runtime || !e.chrome.app && e.chrome.runtime && e.chrome.runtime.id),
            a = !i && e.history && e.history.pushState,
            o = D((/android (\d+)/.exec(l((e.navigator || {}).userAgent)) || [])[1]),
            s = /Boxee/i.test((e.navigator || {}).userAgent), u = t[0] || {}, c = u.body && u.body.style, p = false,
            h = false;
          if (c) {
            p = !!("transition" in c || "webkitTransition" in c);
            h = !!("animation" in c || "webkitAnimation" in c)
          }
          return {
            history: !!(a && !(o < 4) && !s), hasEvent: function (e) {
              if ("input" === e && f) return false;
              if (I(n[e])) {
                var t = u.createElement("div");
                n[e] = "on" + e in t
              }
              return n[e]
            }, csp: me(), transitions: p, animations: h, android: o
          }
        }]
      }

      var Hi = a("$templateRequest");

      function Bi() {
        var e;
        this.httpOptions = function (t) {
          if (t) {
            e = t;
            return this
          }
          return e
        };
        this.$get = ["$exceptionHandler", "$templateCache", "$http", "$q", "$sce", function (t, n, r, i, a) {
          function o(s, u) {
            o.totalPendingRequests++;
            H(s) && !I(n.get(s)) || (s = a.getTrustedResourceUrl(s));
            var l = r.defaults && r.defaults.transformResponse;
            W(l) ? l = l.filter(function (e) {
              return e !== $r
            }) : l === $r && (l = null);
            return r.get(s, j({cache: n, transformResponse: l}, e)).finally(function () {
              o.totalPendingRequests--
            }).then(function (e) {
              return n.put(s, e.data)
            }, c);

            function c(e) {
              if (!u) {
                e = Hi("tpload", "Failed to load template: {0} (HTTP status: {1} {2})", s, e.status, e.statusText);
                t(e)
              }
              return i.reject(e)
            }
          }

          o.totalPendingRequests = 0;
          return o
        }]
      }

      function zi() {
        this.$get = ["$rootScope", "$browser", "$location", function (e, t, n) {
          var r = {};
          r.findBindings = function (e, t, n) {
            var r = e.getElementsByClassName("ng-binding");
            var i = [];
            E(r, function (e) {
              var r = b.element(e).data("$binding");
              r && E(r, function (r) {
                if (n) {
                  var a = new RegExp("(^|\\s)" + se(t) + "(\\s|\\||$)");
                  a.test(r) && i.push(e)
                } else -1 !== r.indexOf(t) && i.push(e)
              })
            });
            return i
          };
          r.findModels = function (e, t, n) {
            var r = ["ng-", "data-ng-", "ng\\:"];
            for (var i = 0; i < r.length; ++i) {
              var a = n ? "=" : "*=";
              var o = "[" + r[i] + "model" + a + '"' + t + '"]';
              var s = e.querySelectorAll(o);
              if (s.length) return s
            }
          };
          r.getLocation = function () {
            return n.url()
          };
          r.setLocation = function (t) {
            if (t !== n.url()) {
              n.url(t);
              e.$digest()
            }
          };
          r.whenStable = function (e) {
            t.notifyWhenNoOutstandingRequests(e)
          };
          return r
        }]
      }

      var Wi = a("$timeout");

      function Gi() {
        this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (e, t, n, r, i) {
          var a = {};

          function o(o, s, u) {
            if (!J(o)) {
              u = s;
              s = o;
              o = P
            }
            var l = ye(arguments, 3), c = V(u) && !u, f = (c ? r : n).defer(), p = f.promise, h;
            h = t.defer(function () {
              try {
                f.resolve(o.apply(null, l))
              } catch (e) {
                f.reject(e);
                i(e)
              } finally {
                delete a[p.$$timeoutId]
              }
              c || e.$apply()
            }, s);
            p.$$timeoutId = h;
            a[h] = f;
            return p
          }

          o.cancel = function (e) {
            if (!e) return false;
            if (!e.hasOwnProperty("$$timeoutId")) throw Wi("badprom", "`$timeout.cancel()` called with a promise that was not generated by `$timeout()`.");
            if (!a.hasOwnProperty(e.$$timeoutId)) return false;
            var n = e.$$timeoutId;
            var r = a[n];
            ji(r.promise);
            r.reject("canceled");
            delete a[n];
            return t.defer.cancel(n)
          };
          return o
        }]
      }

      var Ji = t.document.createElement("a");
      var Qi = Ki(t.location.href);
      var Yi;

      function Ki(e) {
        if (!H(e)) return e;
        var t = e;
        if (f) {
          Ji.setAttribute("href", t);
          t = Ji.href
        }
        Ji.setAttribute("href", t);
        return {
          href: Ji.href,
          protocol: Ji.protocol ? Ji.protocol.replace(/:$/, "") : "",
          host: Ji.host,
          search: Ji.search ? Ji.search.replace(/^\?/, "") : "",
          hash: Ji.hash ? Ji.hash.replace(/^#/, "") : "",
          hostname: Ji.hostname,
          port: Ji.port,
          pathname: "/" === Ji.pathname.charAt(0) ? Ji.pathname : "/" + Ji.pathname
        }
      }

      function Xi(e) {
        return ta(e, Qi)
      }

      function Zi(e) {
        return ta(e, na())
      }

      function ea(e) {
        var t = [Qi].concat(e.map(Ki));
        return function e(n) {
          var r = Ki(n);
          return t.some(ta.bind(null, r))
        }
      }

      function ta(e, t) {
        e = Ki(e);
        t = Ki(t);
        return e.protocol === t.protocol && e.host === t.host
      }

      function na() {
        if (t.document.baseURI) return t.document.baseURI;
        if (!Yi) {
          Yi = t.document.createElement("a");
          Yi.href = ".";
          Yi = Yi.cloneNode(false)
        }
        return Yi.href
      }

      function ra() {
        this.$get = R(t)
      }

      function ia(e) {
        var t = e[0] || {};
        var n = {};
        var r = "";

        function i(e) {
          try {
            return e.cookie || ""
          } catch (e) {
            return ""
          }
        }

        function a(e) {
          try {
            return decodeURIComponent(e)
          } catch (t) {
            return e
          }
        }

        return function () {
          var e, o, s, u, l;
          var c = i(t);
          if (c !== r) {
            r = c;
            e = r.split("; ");
            n = {};
            for (s = 0; s < e.length; s++) {
              o = e[s];
              u = o.indexOf("=");
              if (u > 0) {
                l = a(o.substring(0, u));
                I(n[l]) && (n[l] = a(o.substring(u + 1)))
              }
            }
          }
          return n
        }
      }

      ia.$inject = ["$document"];

      function aa() {
        this.$get = ia
      }

      oa.$inject = ["$provide"];

      function oa(e) {
        var t = "Filter";

        function n(r, i) {
          if (F(r)) {
            var a = {};
            E(r, function (e, t) {
              a[t] = n(t, e)
            });
            return a
          }
          return e.factory(r + t, i)
        }

        this.register = n;
        this.$get = ["$injector", function (e) {
          return function (n) {
            return e.get(n + t)
          }
        }];
        n("currency", da);
        n("date", Da);
        n("filter", sa);
        n("json", Na);
        n("limitTo", _a);
        n("lowercase", qa);
        n("number", va);
        n("orderBy", La);
        n("uppercase", Pa)
      }

      function sa() {
        return function (e, t, n, r) {
          if (!C(e)) {
            if (null == e) return e;
            throw a("filter")("notarray", "Expected array but received: {0}", e)
          }
          r = r || "$";
          var i = ca(t);
          var o;
          var s;
          switch (i) {
            case"function":
              o = t;
              break;
            case"boolean":
            case"null":
            case"number":
            case"string":
              s = true;
            case"object":
              o = ua(t, n, r, s);
              break;
            default:
              return e
          }
          return Array.prototype.filter.call(e, o)
        }
      }

      function ua(e, t, n, r) {
        var i = F(e) && n in e;
        var a;
        true === t ? t = ve : J(t) || (t = function (e, t) {
          if (I(e)) return false;
          if (null === e || null === t) return e === t;
          if (F(t) || F(e) && !L(e)) return false;
          e = l("" + e);
          t = l("" + t);
          return -1 !== e.indexOf(t)
        });
        a = function (a) {
          if (i && !F(a)) return la(a, e[n], t, n, false);
          return la(a, e, t, n, r)
        };
        return a
      }

      function la(e, t, n, r, i, a) {
        var o = ca(e);
        var s = ca(t);
        if ("string" === s && "!" === t.charAt(0)) return !la(e, t.substring(1), n, r, i);
        if (W(e)) return e.some(function (e) {
          return la(e, t, n, r, i)
        });
        switch (o) {
          case"object":
            var u;
            if (i) {
              for (u in e) if (u.charAt && "$" !== u.charAt(0) && la(e[u], t, n, r, true)) return true;
              return !a && la(e, t, n, r, false)
            }
            if ("object" === s) {
              for (u in t) {
                var l = t[u];
                if (J(l) || I(l)) continue;
                var c = u === r;
                var f = c ? e : e[u];
                if (!la(f, l, n, r, c, c)) return false
              }
              return true
            }
            return n(e, t);
          case"function":
            return false;
          default:
            return n(e, t)
        }
      }

      function ca(e) {
        return null === e ? "null" : typeof e
      }

      var fa = 22;
      var pa = ".";
      var ha = "0";
      da.$inject = ["$locale"];

      function da(e) {
        var t = e.NUMBER_FORMATS;
        return function (e, n, r) {
          I(n) && (n = t.CURRENCY_SYM);
          I(r) && (r = t.PATTERNS[1].maxFrac);
          var i = n ? /\u00A4/g : /\s*\u00A4\s*/g;
          return null == e ? e : $a(e, t.PATTERNS[1], t.GROUP_SEP, t.DECIMAL_SEP, r).replace(i, n)
        }
      }

      va.$inject = ["$locale"];

      function va(e) {
        var t = e.NUMBER_FORMATS;
        return function (e, n) {
          return null == e ? e : $a(e, t.PATTERNS[0], t.GROUP_SEP, t.DECIMAL_SEP, n)
        }
      }

      function ma(e) {
        var t = 0, n, r;
        var i, a, o;
        (r = e.indexOf(pa)) > -1 && (e = e.replace(pa, ""));
        if ((i = e.search(/e/i)) > 0) {
          r < 0 && (r = i);
          r += +e.slice(i + 1);
          e = e.substring(0, i)
        } else r < 0 && (r = e.length);
        for (i = 0; e.charAt(i) === ha; i++) ;
        if (i === (o = e.length)) {
          n = [0];
          r = 1
        } else {
          o--;
          while (e.charAt(o) === ha) o--;
          r -= i;
          n = [];
          for (a = 0; i <= o; i++, a++) n[a] = +e.charAt(i)
        }
        if (r > fa) {
          n = n.splice(0, fa - 1);
          t = r - 1;
          r = 1
        }
        return {d: n, e: t, i: r}
      }

      function ga(e, t, n, r) {
        var i = e.d;
        var a = i.length - e.i;
        t = I(t) ? Math.min(Math.max(n, a), r) : +t;
        var o = t + e.i;
        var s = i[o];
        if (o > 0) {
          i.splice(Math.max(e.i, o));
          for (var u = o; u < i.length; u++) i[u] = 0
        } else {
          a = Math.max(0, a);
          e.i = 1;
          i.length = Math.max(1, o = t + 1);
          i[0] = 0;
          for (var l = 1; l < o; l++) i[l] = 0
        }
        if (s >= 5) if (o - 1 < 0) {
          for (var c = 0; c > o; c--) {
            i.unshift(0);
            e.i++
          }
          i.unshift(1);
          e.i++
        } else i[o - 1]++;
        for (; a < Math.max(0, t); a++) i.push(0);
        var f = i.reduceRight(function (e, t, n, r) {
          t += e;
          r[n] = t % 10;
          return Math.floor(t / 10)
        }, 0);
        if (f) {
          i.unshift(f);
          e.i++
        }
      }

      function $a(e, t, n, r, i) {
        if (!(H(e) || B(e)) || isNaN(e)) return "";
        var a = !isFinite(e);
        var o = false;
        var s = Math.abs(e) + "", u = "", l;
        if (a) u = "∞"; else {
          l = ma(s);
          ga(l, i, t.minFrac, t.maxFrac);
          var c = l.d;
          var f = l.i;
          var p = l.e;
          var h = [];
          o = c.reduce(function (e, t) {
            return e && !t
          }, true);
          while (f < 0) {
            c.unshift(0);
            f++
          }
          if (f > 0) h = c.splice(f, c.length); else {
            h = c;
            c = [0]
          }
          var d = [];
          c.length >= t.lgSize && d.unshift(c.splice(-t.lgSize, c.length).join(""));
          while (c.length > t.gSize) d.unshift(c.splice(-t.gSize, c.length).join(""));
          c.length && d.unshift(c.join(""));
          u = d.join(n);
          h.length && (u += r + h.join(""));
          p && (u += "e+" + p)
        }
        return e < 0 && !o ? t.negPre + u + t.negSuf : t.posPre + u + t.posSuf
      }

      function ya(e, t, n, r) {
        var i = "";
        if (e < 0 || r && e <= 0) if (r) e = 1 - e; else {
          e = -e;
          i = "-"
        }
        e = "" + e;
        while (e.length < t) e = ha + e;
        n && (e = e.substr(e.length - t));
        return i + e
      }

      function ba(e, t, n, r, i) {
        n = n || 0;
        return function (a) {
          var o = a["get" + e]();
          (n > 0 || o > -n) && (o += n);
          0 === o && -12 === n && (o = 12);
          return ya(o, t, r, i)
        }
      }

      function wa(e, t, n) {
        return function (r, i) {
          var a = r["get" + e]();
          var o = (n ? "STANDALONE" : "") + (t ? "SHORT" : "");
          var s = c(o + e);
          return i[s][a]
        }
      }

      function xa(e, t, n) {
        var r = -1 * n;
        var i = r >= 0 ? "+" : "";
        i += ya(Math[r > 0 ? "floor" : "ceil"](r / 60), 2) + ya(Math.abs(r % 60), 2);
        return i
      }

      function Ca(e) {
        var t = new Date(e, 0, 1).getDay();
        return new Date(e, 0, (t <= 4 ? 5 : 12) - t)
      }

      function Ea(e) {
        return new Date(e.getFullYear(), e.getMonth(), e.getDate() + (4 - e.getDay()))
      }

      function ka(e) {
        return function (t) {
          var n = Ca(t.getFullYear()), r = Ea(t);
          var i = +r - +n, a = 1 + Math.round(i / 6048e5);
          return ya(a, e)
        }
      }

      function Sa(e, t) {
        return e.getHours() < 12 ? t.AMPMS[0] : t.AMPMS[1]
      }

      function Aa(e, t) {
        return e.getFullYear() <= 0 ? t.ERAS[0] : t.ERAS[1]
      }

      function Ta(e, t) {
        return e.getFullYear() <= 0 ? t.ERANAMES[0] : t.ERANAMES[1]
      }

      var Oa = {
        yyyy: ba("FullYear", 4, 0, false, true),
        yy: ba("FullYear", 2, 0, true, true),
        y: ba("FullYear", 1, 0, false, true),
        MMMM: wa("Month"),
        MMM: wa("Month", true),
        MM: ba("Month", 2, 1),
        M: ba("Month", 1, 1),
        LLLL: wa("Month", false, true),
        dd: ba("Date", 2),
        d: ba("Date", 1),
        HH: ba("Hours", 2),
        H: ba("Hours", 1),
        hh: ba("Hours", 2, -12),
        h: ba("Hours", 1, -12),
        mm: ba("Minutes", 2),
        m: ba("Minutes", 1),
        ss: ba("Seconds", 2),
        s: ba("Seconds", 1),
        sss: ba("Milliseconds", 3),
        EEEE: wa("Day"),
        EEE: wa("Day", true),
        a: Sa,
        Z: xa,
        ww: ka(2),
        w: ka(1),
        G: Aa,
        GG: Aa,
        GGG: Aa,
        GGGG: Ta
      };
      var ja = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,
        Ma = /^-?\d+$/;
      Da.$inject = ["$locale"];

      function Da(e) {
        var t = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;

        function n(e) {
          var n;
          if (n = e.match(t)) {
            var r = new Date(0), i = 0, a = 0, o = n[8] ? r.setUTCFullYear : r.setFullYear,
              s = n[8] ? r.setUTCHours : r.setHours;
            if (n[9]) {
              i = D(n[9] + n[10]);
              a = D(n[9] + n[11])
            }
            o.call(r, D(n[1]), D(n[2]) - 1, D(n[3]));
            var u = D(n[4] || 0) - i;
            var l = D(n[5] || 0) - a;
            var c = D(n[6] || 0);
            var f = Math.round(1e3 * parseFloat("0." + (n[7] || 0)));
            s.call(r, u, l, c, f);
            return r
          }
          return e
        }

        return function (t, r, i) {
          var a = "", o = [], s, u;
          r = r || "mediumDate";
          r = e.DATETIME_FORMATS[r] || r;
          H(t) && (t = Ma.test(t) ? D(t) : n(t));
          B(t) && (t = new Date(t));
          if (!z(t) || !isFinite(t.getTime())) return t;
          while (r) {
            u = ja.exec(r);
            if (u) {
              o = $e(o, u, 1);
              r = o.pop()
            } else {
              o.push(r);
              r = null
            }
          }
          var l = t.getTimezoneOffset();
          if (i) {
            l = ke(i, l);
            t = Ae(t, i, true)
          }
          E(o, function (n) {
            s = Oa[n];
            a += s ? s(t, e.DATETIME_FORMATS, l) : "''" === n ? "'" : n.replace(/(^'|'$)/g, "").replace(/''/g, "'")
          });
          return a
        }
      }

      function Na() {
        return function (e, t) {
          I(t) && (t = 2);
          return xe(e, t)
        }
      }

      var qa = R(l);
      var Pa = R(c);

      function _a() {
        return function (e, t, n) {
          t = Infinity === Math.abs(Number(t)) ? Number(t) : D(t);
          if (N(t)) return e;
          B(e) && (e = e.toString());
          if (!C(e)) return e;
          n = !n || isNaN(n) ? 0 : D(n);
          n = n < 0 ? Math.max(0, e.length + n) : n;
          return t >= 0 ? Ra(e, n, n + t) : 0 === n ? Ra(e, t, e.length) : Ra(e, Math.max(0, n + t), n)
        }
      }

      function Ra(e, t, n) {
        if (H(e)) return e.slice(t, n);
        return d.call(e, t, n)
      }

      La.$inject = ["$parse"];

      function La(e) {
        return function (e, n, r, s) {
          if (null == e) return e;
          if (!C(e)) throw a("orderBy")("notarray", "Expected array but received: {0}", e);
          W(n) || (n = [n]);
          0 === n.length && (n = ["+"]);
          var u = t(n);
          var l = r ? -1 : 1;
          var c = J(s) ? s : o;
          var f = Array.prototype.map.call(e, p);
          f.sort(h);
          e = f.map(function (e) {
            return e.value
          });
          return e;

          function p(e, t) {
            return {
              value: e, tieBreaker: {value: t, type: "number", index: t}, predicateValues: u.map(function (n) {
                return i(n.get(e), t)
              })
            }
          }

          function h(e, t) {
            for (var n = 0, r = u.length; n < r; n++) {
              var i = c(e.predicateValues[n], t.predicateValues[n]);
              if (i) return i * u[n].descending * l
            }
            return (c(e.tieBreaker, t.tieBreaker) || o(e.tieBreaker, t.tieBreaker)) * l
          }
        };

        function t(t) {
          return t.map(function (t) {
            var n = 1, r = _;
            if (J(t)) r = t; else if (H(t)) {
              if ("+" === t.charAt(0) || "-" === t.charAt(0)) {
                n = "-" === t.charAt(0) ? -1 : 1;
                t = t.substring(1)
              }
              if ("" !== t) {
                r = e(t);
                if (r.constant) {
                  var i = r();
                  r = function (e) {
                    return e[i]
                  }
                }
              }
            }
            return {get: r, descending: n}
          })
        }

        function n(e) {
          switch (typeof e) {
            case"number":
            case"boolean":
            case"string":
              return true;
            default:
              return false
          }
        }

        function r(e) {
          if (J(e.valueOf)) {
            e = e.valueOf();
            if (n(e)) return e
          }
          if (L(e)) {
            e = e.toString();
            if (n(e)) return e
          }
          return e
        }

        function i(e, t) {
          var n = typeof e;
          null === e ? n = "null" : "object" === n && (e = r(e));
          return {value: e, type: n, index: t}
        }

        function o(e, t) {
          var n = 0;
          var r = e.type;
          var i = t.type;
          if (r === i) {
            var a = e.value;
            var o = t.value;
            if ("string" === r) {
              a = a.toLowerCase();
              o = o.toLowerCase()
            } else if ("object" === r) {
              F(a) && (a = e.index);
              F(o) && (o = t.index)
            }
            a !== o && (n = a < o ? -1 : 1)
          } else n = "undefined" === r ? 1 : "undefined" === i ? -1 : "null" === r ? 1 : "null" === i ? -1 : r < i ? -1 : 1;
          return n
        }
      }

      function Ia(e) {
        J(e) && (e = {link: e});
        e.restrict = e.restrict || "AC";
        return R(e)
      }

      var Va = R({
        restrict: "E", compile: function (e, t) {
          if (!t.href && !t.xlinkHref) return function (e, t) {
            if ("a" !== t[0].nodeName.toLowerCase()) return;
            var n = "[object SVGAnimatedString]" === g.call(t.prop("href")) ? "xlink:href" : "href";
            t.on("click", function (e) {
              t.attr(n) || e.preventDefault()
            })
          }
        }
      });
      var Fa = {};
      E(Zt, function (e, t) {
        if ("multiple" === e) return;

        function n(e, n, i) {
          e.$watch(i[r], function e(n) {
            i.$set(t, !!n)
          })
        }

        var r = Yn("ng-" + t);
        var i = n;
        "checked" === e && (i = function (e, t, i) {
          i.ngModel !== i[r] && n(e, t, i)
        });
        Fa[r] = function () {
          return {restrict: "A", priority: 100, link: i}
        }
      });
      E(tn, function (e, t) {
        Fa[t] = function () {
          return {
            priority: 100, link: function (e, n, r) {
              if ("ngPattern" === t && "/" === r.ngPattern.charAt(0)) {
                var i = r.ngPattern.match(o);
                if (i) {
                  r.$set("ngPattern", new RegExp(i[1], i[2]));
                  return
                }
              }
              e.$watch(r[t], function e(n) {
                r.$set(t, n)
              })
            }
          }
        }
      });
      E(["src", "srcset", "href"], function (e) {
        var t = Yn("ng-" + e);
        Fa[t] = function () {
          return {
            priority: 99, link: function (n, r, i) {
              var a = e, o = e;
              if ("href" === e && "[object SVGAnimatedString]" === g.call(r.prop("href"))) {
                o = "xlinkHref";
                i.$attr[o] = "xlink:href";
                a = null
              }
              i.$observe(t, function (t) {
                if (!t) {
                  "href" === e && i.$set(o, null);
                  return
                }
                i.$set(o, t);
                f && a && r.prop(a, i[o])
              })
            }
          }
        }
      });
      var Ua = {
        $addControl: P,
        $$renameControl: za,
        $removeControl: P,
        $setValidity: P,
        $setDirty: P,
        $setPristine: P,
        $setSubmitted: P,
        $$setSubmitted: P
      }, Ha = "ng-pending", Ba = "ng-submitted";

      function za(e, t) {
        e.$name = t
      }

      Wa.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];

      function Wa(e, t, n, r, i) {
        this.$$controls = [];
        this.$error = {};
        this.$$success = {};
        this.$pending = void 0;
        this.$name = i(t.name || t.ngForm || "")(n);
        this.$dirty = false;
        this.$pristine = true;
        this.$valid = true;
        this.$invalid = false;
        this.$submitted = false;
        this.$$parentForm = Ua;
        this.$$element = e;
        this.$$animate = r;
        Ya(this)
      }

      Wa.prototype = {
        $rollbackViewValue: function () {
          E(this.$$controls, function (e) {
            e.$rollbackViewValue()
          })
        }, $commitViewValue: function () {
          E(this.$$controls, function (e) {
            e.$commitViewValue()
          })
        }, $addControl: function (e) {
          Je(e.$name, "input");
          this.$$controls.push(e);
          e.$name && (this[e.$name] = e);
          e.$$parentForm = this
        }, $$renameControl: function (e, t) {
          var n = e.$name;
          this[n] === e && delete this[n];
          this[t] = e;
          e.$name = t
        }, $removeControl: function (e) {
          e.$name && this[e.$name] === e && delete this[e.$name];
          E(this.$pending, function (t, n) {
            this.$setValidity(n, null, e)
          }, this);
          E(this.$error, function (t, n) {
            this.$setValidity(n, null, e)
          }, this);
          E(this.$$success, function (t, n) {
            this.$setValidity(n, null, e)
          }, this);
          pe(this.$$controls, e);
          e.$$parentForm = Ua
        }, $setDirty: function () {
          this.$$animate.removeClass(this.$$element, Zo);
          this.$$animate.addClass(this.$$element, es);
          this.$dirty = true;
          this.$pristine = false;
          this.$$parentForm.$setDirty()
        }, $setPristine: function () {
          this.$$animate.setClass(this.$$element, Zo, es + " " + Ba);
          this.$dirty = false;
          this.$pristine = true;
          this.$submitted = false;
          E(this.$$controls, function (e) {
            e.$setPristine()
          })
        }, $setUntouched: function () {
          E(this.$$controls, function (e) {
            e.$setUntouched()
          })
        }, $setSubmitted: function () {
          var e = this;
          while (e.$$parentForm && e.$$parentForm !== Ua) e = e.$$parentForm;
          e.$$setSubmitted()
        }, $$setSubmitted: function () {
          this.$$animate.addClass(this.$$element, Ba);
          this.$submitted = true;
          E(this.$$controls, function (e) {
            e.$$setSubmitted && e.$$setSubmitted()
          })
        }
      };
      Ka({
        clazz: Wa, set: function (e, t, n) {
          var r = e[t];
          if (r) {
            var i = r.indexOf(n);
            -1 === i && r.push(n)
          } else e[t] = [n]
        }, unset: function (e, t, n) {
          var r = e[t];
          if (!r) return;
          pe(r, n);
          0 === r.length && delete e[t]
        }
      });
      var Ga = function (e) {
        return ["$timeout", "$parse", function (t, n) {
          var r = {
            name: "form",
            restrict: e ? "EAC" : "E",
            require: ["form", "^^?form"],
            controller: Wa,
            compile: function n(r, a) {
              r.addClass(Zo).addClass(Ko);
              var o = a.name ? "name" : !(!e || !a.ngForm) && "ngForm";
              return {
                pre: function e(n, r, a, s) {
                  var u = s[0];
                  if (!("action" in a)) {
                    var l = function (e) {
                      n.$apply(function () {
                        u.$commitViewValue();
                        u.$setSubmitted()
                      });
                      e.preventDefault()
                    };
                    r[0].addEventListener("submit", l);
                    r.on("$destroy", function () {
                      t(function () {
                        r[0].removeEventListener("submit", l)
                      }, 0, false)
                    })
                  }
                  var c = s[1] || u.$$parentForm;
                  c.$addControl(u);
                  var f = o ? i(u.$name) : P;
                  if (o) {
                    f(n, u);
                    a.$observe(o, function (e) {
                      if (u.$name === e) return;
                      f(n, void 0);
                      u.$$parentForm.$$renameControl(u, e);
                      f = i(u.$name);
                      f(n, u)
                    })
                  }
                  r.on("$destroy", function () {
                    u.$$parentForm.$removeControl(u);
                    f(n, void 0);
                    j(u, Ua)
                  })
                }
              }
            }
          };
          return r;

          function i(e) {
            if ("" === e) return n('this[""]').assign;
            return n(e).assign || P
          }
        }]
      };
      var Ja = Ga();
      var Qa = Ga(true);

      function Ya(e) {
        e.$$classCache = {};
        e.$$classCache[Xo] = !(e.$$classCache[Ko] = e.$$element.hasClass(Ko))
      }

      function Ka(e) {
        var t = e.clazz, n = e.set, r = e.unset;
        t.prototype.$setValidity = function (e, t, u) {
          I(t) ? i(this, "$pending", e, u) : a(this, "$pending", e, u);
          if (te(t)) if (t) {
            r(this.$error, e, u);
            n(this.$$success, e, u)
          } else {
            n(this.$error, e, u);
            r(this.$$success, e, u)
          } else {
            r(this.$error, e, u);
            r(this.$$success, e, u)
          }
          if (this.$pending) {
            o(this, Ha, true);
            this.$valid = this.$invalid = void 0;
            s(this, "", null)
          } else {
            o(this, Ha, false);
            this.$valid = Xa(this.$error);
            this.$invalid = !this.$valid;
            s(this, "", this.$valid)
          }
          var l;
          l = this.$pending && this.$pending[e] ? void 0 : !this.$error[e] && (!!this.$$success[e] || null);
          s(this, e, l);
          this.$$parentForm.$setValidity(e, l, this)
        };

        function i(e, t, r, i) {
          e[t] || (e[t] = {});
          n(e[t], r, i)
        }

        function a(e, t, n, i) {
          e[t] && r(e[t], n, i);
          Xa(e[t]) && (e[t] = void 0)
        }

        function o(e, t, n) {
          if (n && !e.$$classCache[t]) {
            e.$$animate.addClass(e.$$element, t);
            e.$$classCache[t] = true
          } else if (!n && e.$$classCache[t]) {
            e.$$animate.removeClass(e.$$element, t);
            e.$$classCache[t] = false
          }
        }

        function s(e, t, n) {
          t = t ? "-" + He(t, "-") : "";
          o(e, Ko + t, true === n);
          o(e, Xo + t, false === n)
        }
      }

      function Xa(e) {
        if (e) for (var t in e) if (e.hasOwnProperty(t)) return false;
        return true
      }

      var Za = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/;
      var eo = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i;
      var to = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
      var no = /^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/;
      var ro = /^(\d{4,})-(\d{2})-(\d{2})$/;
      var io = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/;
      var ao = /^(\d{4,})-W(\d\d)$/;
      var oo = /^(\d{4,})-(\d\d)$/;
      var so = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/;
      var uo = "keydown wheel mousedown";
      var lo = Ke();
      E("date,datetime-local,month,time,week".split(","), function (e) {
        lo[e] = true
      });
      var co = {
        text: po,
        date: go("date", ro, mo(ro, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
        "datetime-local": go("datetimelocal", io, mo(io, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"),
        time: go("time", so, mo(so, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
        week: go("week", ao, vo, "yyyy-Www"),
        month: go("month", oo, mo(oo, ["yyyy", "MM"]), "yyyy-MM"),
        number: Eo,
        url: So,
        email: Ao,
        radio: To,
        range: ko,
        checkbox: jo,
        hidden: P,
        button: P,
        submit: P,
        reset: P,
        file: P
      };

      function fo(e) {
        e.$formatters.push(function (t) {
          return e.$isEmpty(t) ? t : t.toString()
        })
      }

      function po(e, t, n, r, i, a) {
        ho(e, t, n, r, i, a);
        fo(r)
      }

      function ho(e, t, n, r, i, a) {
        var o = l(t[0].type);
        if (!i.android) {
          var u = false;
          t.on("compositionstart", function () {
            u = true
          });
          t.on("compositionupdate", function (e) {
            (I(e.data) || "" === e.data) && (u = false)
          });
          t.on("compositionend", function () {
            u = false;
            f()
          })
        }
        var c;
        var f = function (e) {
          if (c) {
            a.defer.cancel(c);
            c = null
          }
          if (u) return;
          var i = t.val(), s = e && e.type;
          "password" === o || n.ngTrim && "false" === n.ngTrim || (i = oe(i));
          (r.$viewValue !== i || "" === i && r.$$hasNativeValidators) && r.$setViewValue(i, s)
        };
        if (i.hasEvent("input")) t.on("input", f); else {
          var p = function (e, t, n) {
            c || (c = a.defer(function () {
              c = null;
              t && t.value === n || f(e)
            }))
          };
          t.on("keydown", function (e) {
            var t = e.keyCode;
            if (91 === t || 15 < t && t < 19 || 37 <= t && t <= 40) return;
            p(e, this, this.value)
          });
          i.hasEvent("paste") && t.on("paste cut drop", p)
        }
        t.on("change", f);
        lo[o] && r.$$hasNativeValidators && o === n.type && t.on(uo, function (e) {
          if (!c) {
            var t = this[s];
            var n = t.badInput;
            var r = t.typeMismatch;
            c = a.defer(function () {
              c = null;
              t.badInput === n && t.typeMismatch === r || f(e)
            })
          }
        });
        r.$render = function () {
          var e = r.$isEmpty(r.$viewValue) ? "" : r.$viewValue;
          t.val() !== e && t.val(e)
        }
      }

      function vo(e, t) {
        if (z(e)) return e;
        if (H(e)) {
          ao.lastIndex = 0;
          var n = ao.exec(e);
          if (n) {
            var r = +n[1], i = +n[2], a = 0, o = 0, s = 0, u = 0, l = Ca(r), c = 7 * (i - 1);
            if (t) {
              a = t.getHours();
              o = t.getMinutes();
              s = t.getSeconds();
              u = t.getMilliseconds()
            }
            return new Date(r, 0, l.getDate() + c, a, o, s, u)
          }
        }
        return NaN
      }

      function mo(e, t) {
        return function (n, r) {
          var i, a;
          if (z(n)) return n;
          if (H(n)) {
            '"' === n.charAt(0) && '"' === n.charAt(n.length - 1) && (n = n.substring(1, n.length - 1));
            if (Za.test(n)) return new Date(n);
            e.lastIndex = 0;
            i = e.exec(n);
            if (i) {
              i.shift();
              a = r ? {
                yyyy: r.getFullYear(),
                MM: r.getMonth() + 1,
                dd: r.getDate(),
                HH: r.getHours(),
                mm: r.getMinutes(),
                ss: r.getSeconds(),
                sss: r.getMilliseconds() / 1e3
              } : {yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0};
              E(i, function (e, n) {
                n < t.length && (a[t[n]] = +e)
              });
              var o = new Date(a.yyyy, a.MM - 1, a.dd, a.HH, a.mm, a.ss || 0, 1e3 * a.sss || 0);
              a.yyyy < 100 && o.setFullYear(a.yyyy);
              return o
            }
          }
          return NaN
        }
      }

      function go(e, t, n, r) {
        return function i(a, o, s, u, l, c, f) {
          $o(a, o, s, u, e);
          ho(a, o, s, u, l, c);
          var p;
          var h;
          u.$parsers.push(function (n) {
            if (u.$isEmpty(n)) return null;
            if (t.test(n)) return $(n, p);
            u.$$parserName = e;
            return
          });
          u.$formatters.push(function (e) {
            if (e && !z(e)) throw as("datefmt", "Expected `{0}` to be a date", e);
            if (m(e)) {
              p = e;
              var t = u.$options.getOption("timezone");
              if (t) {
                h = t;
                p = Ae(p, t, true)
              }
              return f("date")(e, r, t)
            }
            p = null;
            h = null;
            return ""
          });
          if (V(s.min) || s.ngMin) {
            var d;
            u.$validators.min = function (e) {
              return !m(e) || I(d) || n(e) >= d
            };
            s.$observe("min", function (e) {
              d = g(e);
              u.$validate()
            })
          }
          if (V(s.max) || s.ngMax) {
            var v;
            u.$validators.max = function (e) {
              return !m(e) || I(v) || n(e) <= v
            };
            s.$observe("max", function (e) {
              v = g(e);
              u.$validate()
            })
          }

          function m(e) {
            return e && !(e.getTime && e.getTime() !== e.getTime())
          }

          function g(e) {
            return V(e) && !z(e) ? $(e) || void 0 : e
          }

          function $(e, t) {
            var r = u.$options.getOption("timezone");
            h && h !== r && (t = Se(t, ke(h)));
            var i = n(e, t);
            !isNaN(i) && r && (i = Ae(i, r));
            return i
          }
        }
      }

      function $o(e, t, n, r, i) {
        var a = t[0];
        var o = r.$$hasNativeValidators = F(a.validity);
        o && r.$parsers.push(function (e) {
          var n = t.prop(s) || {};
          if (n.badInput || n.typeMismatch) {
            r.$$parserName = i;
            return
          }
          return e
        })
      }

      function yo(e) {
        e.$parsers.push(function (t) {
          if (e.$isEmpty(t)) return null;
          if (no.test(t)) return parseFloat(t);
          e.$$parserName = "number";
          return
        });
        e.$formatters.push(function (t) {
          if (!e.$isEmpty(t)) {
            if (!B(t)) throw as("numfmt", "Expected `{0}` to be a number", t);
            t = t.toString()
          }
          return t
        })
      }

      function bo(e) {
        V(e) && !B(e) && (e = parseFloat(e));
        return N(e) ? void 0 : e
      }

      function wo(e) {
        return (0 | e) === e
      }

      function xo(e) {
        var t = e.toString();
        var n = t.indexOf(".");
        if (-1 === n) {
          if (-1 < e && e < 1) {
            var r = /e-(\d+)$/.exec(t);
            if (r) return Number(r[1])
          }
          return 0
        }
        return t.length - n - 1
      }

      function Co(e, t, n) {
        var r = Number(e);
        var i = !wo(r);
        var a = !wo(t);
        var o = !wo(n);
        if (i || a || o) {
          var s = i ? xo(r) : 0;
          var u = a ? xo(t) : 0;
          var l = o ? xo(n) : 0;
          var c = Math.max(s, u, l);
          var f = Math.pow(10, c);
          r *= f;
          t *= f;
          n *= f;
          i && (r = Math.round(r));
          a && (t = Math.round(t));
          o && (n = Math.round(n))
        }
        return (r - t) % n === 0
      }

      function Eo(e, t, n, r, i, a) {
        $o(e, t, n, r, "number");
        yo(r);
        ho(e, t, n, r, i, a);
        var o;
        var s;
        if (V(n.min) || n.ngMin) {
          r.$validators.min = function (e, t) {
            return r.$isEmpty(t) || I(o) || t >= o
          };
          n.$observe("min", function (e) {
            o = bo(e);
            r.$validate()
          })
        }
        if (V(n.max) || n.ngMax) {
          r.$validators.max = function (e, t) {
            return r.$isEmpty(t) || I(s) || t <= s
          };
          n.$observe("max", function (e) {
            s = bo(e);
            r.$validate()
          })
        }
        if (V(n.step) || n.ngStep) {
          var u;
          r.$validators.step = function (e, t) {
            return r.$isEmpty(t) || I(u) || Co(t, o || 0, u)
          };
          n.$observe("step", function (e) {
            u = bo(e);
            r.$validate()
          })
        }
      }

      function ko(e, t, n, r, i, a) {
        $o(e, t, n, r, "range");
        yo(r);
        ho(e, t, n, r, i, a);
        var o = r.$$hasNativeValidators && "range" === t[0].type, s = o ? 0 : void 0, u = o ? 100 : void 0,
          l = o ? 1 : void 0, c = t[0].validity, f = V(n.min), p = V(n.max), h = V(n.step);
        var d = r.$render;
        r.$render = o && V(c.rangeUnderflow) && V(c.rangeOverflow) ? function e() {
          d();
          r.$setViewValue(t.val())
        } : d;
        if (f) {
          r.$validators.min = o ? function e() {
            return true
          } : function e(t, n) {
            return r.$isEmpty(n) || I(s) || n >= s
          };
          v("min", m)
        }
        if (p) {
          r.$validators.max = o ? function e() {
            return true
          } : function e(t, n) {
            return r.$isEmpty(n) || I(u) || n <= u
          };
          v("max", g)
        }
        if (h) {
          r.$validators.step = o ? function e() {
            return !c.stepMismatch
          } : function e(t, n) {
            return r.$isEmpty(n) || I(l) || Co(n, s || 0, l)
          };
          v("step", $)
        }

        function v(e, r) {
          t.attr(e, n[e]);
          n.$observe(e, r)
        }

        function m(e) {
          s = bo(e);
          if (N(r.$modelValue)) return;
          if (o) {
            var n = t.val();
            if (s > n) {
              n = s;
              t.val(n)
            }
            r.$setViewValue(n)
          } else r.$validate()
        }

        function g(e) {
          u = bo(e);
          if (N(r.$modelValue)) return;
          if (o) {
            var n = t.val();
            if (u < n) {
              t.val(u);
              n = u < s ? s : u
            }
            r.$setViewValue(n)
          } else r.$validate()
        }

        function $(e) {
          l = bo(e);
          if (N(r.$modelValue)) return;
          o && r.$viewValue !== t.val() ? r.$setViewValue(t.val()) : r.$validate()
        }
      }

      function So(e, t, n, r, i, a) {
        ho(e, t, n, r, i, a);
        fo(r);
        r.$validators.url = function (e, t) {
          var n = e || t;
          return r.$isEmpty(n) || eo.test(n)
        }
      }

      function Ao(e, t, n, r, i, a) {
        ho(e, t, n, r, i, a);
        fo(r);
        r.$validators.email = function (e, t) {
          var n = e || t;
          return r.$isEmpty(n) || to.test(n)
        }
      }

      function To(e, t, n, r) {
        var i = !n.ngTrim || "false" !== oe(n.ngTrim);
        I(n.name) && t.attr("name", A());
        var a = function (e) {
          var a;
          if (t[0].checked) {
            a = n.value;
            i && (a = oe(a));
            r.$setViewValue(a, e && e.type)
          }
        };
        t.on("change", a);
        r.$render = function () {
          var e = n.value;
          i && (e = oe(e));
          t[0].checked = e === r.$viewValue
        };
        n.$observe("value", r.$render)
      }

      function Oo(e, t, n, r, i) {
        var a;
        if (V(r)) {
          a = e(r);
          if (!a.constant) throw as("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", n, r);
          return a(t)
        }
        return i
      }

      function jo(e, t, n, r, i, a, o, s) {
        var u = Oo(s, e, "ngTrueValue", n.ngTrueValue, true);
        var l = Oo(s, e, "ngFalseValue", n.ngFalseValue, false);
        var c = function (e) {
          r.$setViewValue(t[0].checked, e && e.type)
        };
        t.on("change", c);
        r.$render = function () {
          t[0].checked = r.$viewValue
        };
        r.$isEmpty = function (e) {
          return false === e
        };
        r.$formatters.push(function (e) {
          return ve(e, u)
        });
        r.$parsers.push(function (e) {
          return e ? u : l
        })
      }

      var Mo = ["$browser", "$sniffer", "$filter", "$parse", function (e, t, n, r) {
        return {
          restrict: "E", require: ["?ngModel"], link: {
            pre: function (i, a, o, s) {
              s[0] && (co[l(o.type)] || co.text)(i, a, o, s[0], t, e, n, r)
            }
          }
        }
      }];
      var Do = /^(true|false|\d+)$/;
      var No = function () {
        function e(e, t, n) {
          var r = V(n) ? n : 9 === f ? "" : null;
          e.prop("value", r);
          t.$set("value", n)
        }

        return {
          restrict: "A", priority: 100, compile: function (t, n) {
            return Do.test(n.ngValue) ? function t(n, r, i) {
              var a = n.$eval(i.ngValue);
              e(r, i, a)
            } : function t(n, r, i) {
              n.$watch(i.ngValue, function t(n) {
                e(r, i, n)
              })
            }
          }
        }
      };
      var qo = ["$compile", function (e) {
        return {
          restrict: "AC", compile: function t(n) {
            e.$$addBindingClass(n);
            return function t(n, r, i) {
              e.$$addBindingInfo(r, i.ngBind);
              r = r[0];
              n.$watch(i.ngBind, function e(t) {
                r.textContent = Xe(t)
              })
            }
          }
        }
      }];
      var Po = ["$interpolate", "$compile", function (e, t) {
        return {
          compile: function n(r) {
            t.$$addBindingClass(r);
            return function n(r, i, a) {
              var o = e(i.attr(a.$attr.ngBindTemplate));
              t.$$addBindingInfo(i, o.expressions);
              i = i[0];
              a.$observe("ngBindTemplate", function (e) {
                i.textContent = I(e) ? "" : e
              })
            }
          }
        }
      }];
      var _o = ["$sce", "$parse", "$compile", function (e, t, n) {
        return {
          restrict: "A", compile: function r(i, a) {
            var o = t(a.ngBindHtml);
            var s = t(a.ngBindHtml, function t(n) {
              return e.valueOf(n)
            });
            n.$$addBindingClass(i);
            return function t(r, i, a) {
              n.$$addBindingInfo(i, a.ngBindHtml);
              r.$watch(s, function t() {
                var n = o(r);
                i.html(e.getTrustedHtml(n) || "")
              })
            }
          }
        }
      }];
      var Ro = R({
        restrict: "A", require: "ngModel", link: function (e, t, n, r) {
          r.$viewChangeListeners.push(function () {
            e.$eval(n.ngChange)
          })
        }
      });

      function Lo(e, t) {
        e = "ngClass" + e;
        var n;
        return ["$parse", function (o) {
          return {
            restrict: "AC", link: function (s, u, l) {
              var c = u.data("$classCounts");
              var f = true;
              var p;
              if (!c) {
                c = Ke();
                u.data("$classCounts", c)
              }
              if ("ngClass" !== e) {
                n || (n = o("$index", function e(t) {
                  return 1 & t
                }));
                s.$watch(n, g)
              }
              s.$watch(o(l[e], a), $);

              function h(e) {
                e = m(i(e), 1);
                l.$addClass(e)
              }

              function d(e) {
                e = m(i(e), -1);
                l.$removeClass(e)
              }

              function v(e, t) {
                var n = i(e);
                var a = i(t);
                var o = r(n, a);
                var s = r(a, n);
                var u = m(o, -1);
                var c = m(s, 1);
                l.$addClass(c);
                l.$removeClass(u)
              }

              function m(e, t) {
                var n = [];
                E(e, function (e) {
                  if (t > 0 || c[e]) {
                    c[e] = (c[e] || 0) + t;
                    c[e] === +(t > 0) && n.push(e)
                  }
                });
                return n.join(" ")
              }

              function g(e) {
                e === t ? h(p) : d(p);
                f = e
              }

              function $(e) {
                f === t && v(p, e);
                p = e
              }
            }
          }
        }];

        function r(e, t) {
          if (!e || !e.length) return [];
          if (!t || !t.length) return e;
          var n = [];
          e:for (var r = 0; r < e.length; r++) {
            var i = e[r];
            for (var a = 0; a < t.length; a++) if (i === t[a]) continue e;
            n.push(i)
          }
          return n
        }

        function i(e) {
          return e && e.split(" ")
        }

        function a(e) {
          var t = e;
          W(e) ? t = e.map(a).join(" ") : F(e) && (t = Object.keys(e).filter(function (t) {
            return e[t]
          }).join(" "));
          return t
        }
      }

      var Io = Lo("", true);
      var Vo = Lo("Odd", 0);
      var Fo = Lo("Even", 1);
      var Uo = Ia({
        compile: function (e, t) {
          t.$set("ngCloak", void 0);
          e.removeClass("ng-cloak")
        }
      });
      var Ho = [function () {
        return {restrict: "A", scope: true, controller: "@", priority: 500}
      }];
      var Bo = {};
      var zo = {blur: true, focus: true};
      E("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (e) {
        var t = Yn("ng-" + e);
        Bo[t] = ["$parse", "$rootScope", function (n, r) {
          return {
            restrict: "A", compile: function (i, a) {
              var o = n(a[t]);
              return function t(n, i) {
                i.on(e, function (t) {
                  var i = function () {
                    o(n, {$event: t})
                  };
                  zo[e] && r.$$phase ? n.$evalAsync(i) : n.$apply(i)
                })
              }
            }
          }
        }]
      });
      var Wo = ["$animate", "$compile", function (e, t) {
        return {
          multiElement: true,
          transclude: "element",
          priority: 600,
          terminal: true,
          restrict: "A",
          $$tlb: true,
          link: function (n, r, i, a, o) {
            var s, u, l;
            n.$watch(i.ngIf, function n(a) {
              if (a) u || o(function (n, a) {
                u = a;
                n[n.length++] = t.$$createComment("end ngIf", i.ngIf);
                s = {clone: n};
                e.enter(n, r.parent(), r)
              }); else {
                if (l) {
                  l.remove();
                  l = null
                }
                if (u) {
                  u.$destroy();
                  u = null
                }
                if (s) {
                  l = Ye(s.clone);
                  e.leave(l).done(function (e) {
                    false !== e && (l = null)
                  });
                  s = null
                }
              }
            })
          }
        }
      }];
      var Go = ["$templateRequest", "$anchorScroll", "$animate", function (e, t, n) {
        return {
          restrict: "ECA",
          priority: 400,
          terminal: true,
          transclude: "element",
          controller: b.noop,
          compile: function (r, i) {
            var a = i.ngInclude || i.src, o = i.onload || "", s = i.autoscroll;
            return function (r, i, u, l, c) {
              var f = 0, p, h, d;
              var v = function () {
                if (h) {
                  h.remove();
                  h = null
                }
                if (p) {
                  p.$destroy();
                  p = null
                }
                if (d) {
                  n.leave(d).done(function (e) {
                    false !== e && (h = null)
                  });
                  h = d;
                  d = null
                }
              };
              r.$watch(a, function a(u) {
                var h = function (e) {
                  false === e || !V(s) || s && !r.$eval(s) || t()
                };
                var m = ++f;
                if (u) {
                  e(u, true).then(function (e) {
                    if (r.$$destroyed) return;
                    if (m !== f) return;
                    var t = r.$new();
                    l.template = e;
                    var a = c(t, function (e) {
                      v();
                      n.enter(e, null, i).done(h)
                    });
                    p = t;
                    d = a;
                    p.$emit("$includeContentLoaded", u);
                    r.$eval(o)
                  }, function () {
                    if (r.$$destroyed) return;
                    if (m === f) {
                      v();
                      r.$emit("$includeContentError", u)
                    }
                  });
                  r.$emit("$includeContentRequested", u)
                } else {
                  v();
                  l.template = null
                }
              })
            }
          }
        }
      }];
      var Jo = ["$compile", function (e) {
        return {
          restrict: "ECA", priority: -400, require: "ngInclude", link: function (n, r, i, a) {
            if (g.call(r[0]).match(/SVG/)) {
              r.empty();
              e(Ot(a.template, t.document).childNodes)(n, function e(t) {
                r.append(t)
              }, {futureParentElement: r});
              return
            }
            r.html(a.template);
            e(r.contents())(n)
          }
        }
      }];
      var Qo = Ia({
        priority: 450, compile: function () {
          return {
            pre: function (e, t, n) {
              e.$eval(n.ngInit)
            }
          }
        }
      });
      var Yo = function () {
        return {
          restrict: "A", priority: 100, require: "ngModel", link: function (e, t, n, r) {
            var i = n.ngList || ", ";
            var a = "false" !== n.ngTrim;
            var o = a ? oe(i) : i;
            var s = function (e) {
              if (I(e)) return;
              var t = [];
              e && E(e.split(o), function (e) {
                e && t.push(a ? oe(e) : e)
              });
              return t
            };
            r.$parsers.push(s);
            r.$formatters.push(function (e) {
              if (W(e)) return e.join(i);
              return
            });
            r.$isEmpty = function (e) {
              return !e || !e.length
            }
          }
        }
      };
      var Ko = "ng-valid", Xo = "ng-invalid", Zo = "ng-pristine", es = "ng-dirty", ts = "ng-untouched",
        ns = "ng-touched", rs = "ng-empty", is = "ng-not-empty";
      var as = a("ngModel");
      os.$inject = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$q", "$interpolate"];

      function os(e, t, n, r, i, a, o, s, u) {
        this.$viewValue = Number.NaN;
        this.$modelValue = Number.NaN;
        this.$$rawModelValue = void 0;
        this.$validators = {};
        this.$asyncValidators = {};
        this.$parsers = [];
        this.$formatters = [];
        this.$viewChangeListeners = [];
        this.$untouched = true;
        this.$touched = false;
        this.$pristine = true;
        this.$dirty = false;
        this.$valid = true;
        this.$invalid = false;
        this.$error = {};
        this.$$success = {};
        this.$pending = void 0;
        this.$name = u(n.name || "", false)(e);
        this.$$parentForm = Ua;
        this.$options = ls;
        this.$$updateEvents = "";
        this.$$updateEventHandler = this.$$updateEventHandler.bind(this);
        this.$$parsedNgModel = i(n.ngModel);
        this.$$parsedNgModelAssign = this.$$parsedNgModel.assign;
        this.$$ngModelGet = this.$$parsedNgModel;
        this.$$ngModelSet = this.$$parsedNgModelAssign;
        this.$$pendingDebounce = null;
        this.$$parserValid = void 0;
        this.$$parserName = "parse";
        this.$$currentValidationRunId = 0;
        this.$$scope = e;
        this.$$rootScope = e.$root;
        this.$$attr = n;
        this.$$element = r;
        this.$$animate = a;
        this.$$timeout = o;
        this.$$parse = i;
        this.$$q = s;
        this.$$exceptionHandler = t;
        Ya(this);
        ss(this)
      }

      os.prototype = {
        $$initGetterSetters: function () {
          if (this.$options.getOption("getterSetter")) {
            var e = this.$$parse(this.$$attr.ngModel + "()"), t = this.$$parse(this.$$attr.ngModel + "($$$p)");
            this.$$ngModelGet = function (t) {
              var n = this.$$parsedNgModel(t);
              J(n) && (n = e(t));
              return n
            };
            this.$$ngModelSet = function (e, n) {
              J(this.$$parsedNgModel(e)) ? t(e, {$$$p: n}) : this.$$parsedNgModelAssign(e, n)
            }
          } else if (!this.$$parsedNgModel.assign) throw as("nonassign", "Expression '{0}' is non-assignable. Element: {1}", this.$$attr.ngModel, Te(this.$$element))
        }, $render: P, $isEmpty: function (e) {
          return I(e) || "" === e || null === e || e !== e
        }, $$updateEmptyClasses: function (e) {
          if (this.$isEmpty(e)) {
            this.$$animate.removeClass(this.$$element, is);
            this.$$animate.addClass(this.$$element, rs)
          } else {
            this.$$animate.removeClass(this.$$element, rs);
            this.$$animate.addClass(this.$$element, is)
          }
        }, $setPristine: function () {
          this.$dirty = false;
          this.$pristine = true;
          this.$$animate.removeClass(this.$$element, es);
          this.$$animate.addClass(this.$$element, Zo)
        }, $setDirty: function () {
          this.$dirty = true;
          this.$pristine = false;
          this.$$animate.removeClass(this.$$element, Zo);
          this.$$animate.addClass(this.$$element, es);
          this.$$parentForm.$setDirty()
        }, $setUntouched: function () {
          this.$touched = false;
          this.$untouched = true;
          this.$$animate.setClass(this.$$element, ts, ns)
        }, $setTouched: function () {
          this.$touched = true;
          this.$untouched = false;
          this.$$animate.setClass(this.$$element, ns, ts)
        }, $rollbackViewValue: function () {
          this.$$timeout.cancel(this.$$pendingDebounce);
          this.$viewValue = this.$$lastCommittedViewValue;
          this.$render()
        }, $validate: function () {
          if (N(this.$modelValue)) return;
          var e = this.$$lastCommittedViewValue;
          var t = this.$$rawModelValue;
          var n = this.$valid;
          var r = this.$modelValue;
          var i = this.$options.getOption("allowInvalid");
          var a = this;
          this.$$runValidators(t, e, function (e) {
            if (!i && n !== e) {
              a.$modelValue = e ? t : void 0;
              a.$modelValue !== r && a.$$writeModelToScope()
            }
          })
        }, $$runValidators: function (e, t, n) {
          this.$$currentValidationRunId++;
          var r = this.$$currentValidationRunId;
          var i = this;
          if (!a()) {
            l(false);
            return
          }
          if (!o()) {
            l(false);
            return
          }
          s();

          function a() {
            var e = i.$$parserName;
            if (!I(i.$$parserValid)) {
              if (!i.$$parserValid) {
                E(i.$validators, function (e, t) {
                  u(t, null)
                });
                E(i.$asyncValidators, function (e, t) {
                  u(t, null)
                })
              }
              u(e, i.$$parserValid);
              return i.$$parserValid
            }
            u(e, null);
            return true
          }

          function o() {
            var n = true;
            E(i.$validators, function (r, i) {
              var a = Boolean(r(e, t));
              n = n && a;
              u(i, a)
            });
            if (!n) {
              E(i.$asyncValidators, function (e, t) {
                u(t, null)
              });
              return false
            }
            return true
          }

          function s() {
            var n = [];
            var r = true;
            E(i.$asyncValidators, function (i, a) {
              var o = i(e, t);
              if (!ne(o)) throw as("nopromise", "Expected asynchronous validator to return a promise but got '{0}' instead.", o);
              u(a, void 0);
              n.push(o.then(function () {
                u(a, true)
              }, function () {
                r = false;
                u(a, false)
              }))
            });
            n.length ? i.$$q.all(n).then(function () {
              l(r)
            }, P) : l(true)
          }

          function u(e, t) {
            r === i.$$currentValidationRunId && i.$setValidity(e, t)
          }

          function l(e) {
            r === i.$$currentValidationRunId && n(e)
          }
        }, $commitViewValue: function () {
          var e = this.$viewValue;
          this.$$timeout.cancel(this.$$pendingDebounce);
          if (this.$$lastCommittedViewValue === e && ("" !== e || !this.$$hasNativeValidators)) return;
          this.$$updateEmptyClasses(e);
          this.$$lastCommittedViewValue = e;
          this.$pristine && this.$setDirty();
          this.$$parseAndValidate()
        }, $$parseAndValidate: function () {
          var e = this.$$lastCommittedViewValue;
          var t = e;
          var n = this;
          this.$$parserValid = !I(t) || void 0;
          this.$setValidity(this.$$parserName, null);
          this.$$parserName = "parse";
          if (this.$$parserValid) for (var r = 0; r < this.$parsers.length; r++) {
            t = this.$parsers[r](t);
            if (I(t)) {
              this.$$parserValid = false;
              break
            }
          }
          N(this.$modelValue) && (this.$modelValue = this.$$ngModelGet(this.$$scope));
          var i = this.$modelValue;
          var a = this.$options.getOption("allowInvalid");
          this.$$rawModelValue = t;
          if (a) {
            this.$modelValue = t;
            o()
          }
          this.$$runValidators(t, this.$$lastCommittedViewValue, function (e) {
            if (!a) {
              n.$modelValue = e ? t : void 0;
              o()
            }
          });

          function o() {
            n.$modelValue !== i && n.$$writeModelToScope()
          }
        }, $$writeModelToScope: function () {
          this.$$ngModelSet(this.$$scope, this.$modelValue);
          E(this.$viewChangeListeners, function (e) {
            try {
              e()
            } catch (e) {
              this.$$exceptionHandler(e)
            }
          }, this)
        }, $setViewValue: function (e, t) {
          this.$viewValue = e;
          this.$options.getOption("updateOnDefault") && this.$$debounceViewValueCommit(t)
        }, $$debounceViewValueCommit: function (e) {
          var t = this.$options.getOption("debounce");
          B(t[e]) ? t = t[e] : B(t["default"]) && -1 === this.$options.getOption("updateOn").indexOf(e) ? t = t["default"] : B(t["*"]) && (t = t["*"]);
          this.$$timeout.cancel(this.$$pendingDebounce);
          var n = this;
          t > 0 ? this.$$pendingDebounce = this.$$timeout(function () {
            n.$commitViewValue()
          }, t) : this.$$rootScope.$$phase ? this.$commitViewValue() : this.$$scope.$apply(function () {
            n.$commitViewValue()
          })
        }, $overrideModelOptions: function (e) {
          this.$options = this.$options.createChild(e);
          this.$$setUpdateOnEvents()
        }, $processModelValue: function () {
          var e = this.$$format();
          if (this.$viewValue !== e) {
            this.$$updateEmptyClasses(e);
            this.$viewValue = this.$$lastCommittedViewValue = e;
            this.$render();
            this.$$runValidators(this.$modelValue, this.$viewValue, P)
          }
        }, $$format: function () {
          var e = this.$formatters, t = e.length;
          var n = this.$modelValue;
          while (t--) n = e[t](n);
          return n
        }, $$setModelValue: function (e) {
          this.$modelValue = this.$$rawModelValue = e;
          this.$$parserValid = void 0;
          this.$processModelValue()
        }, $$setUpdateOnEvents: function () {
          this.$$updateEvents && this.$$element.off(this.$$updateEvents, this.$$updateEventHandler);
          this.$$updateEvents = this.$options.getOption("updateOn");
          this.$$updateEvents && this.$$element.on(this.$$updateEvents, this.$$updateEventHandler)
        }, $$updateEventHandler: function (e) {
          this.$$debounceViewValueCommit(e && e.type)
        }
      };

      function ss(e) {
        e.$$scope.$watch(function t(n) {
          var r = e.$$ngModelGet(n);
          r === e.$modelValue || e.$modelValue !== e.$modelValue && r !== r || e.$$setModelValue(r);
          return r
        })
      }

      Ka({
        clazz: os, set: function (e, t) {
          e[t] = true
        }, unset: function (e, t) {
          delete e[t]
        }
      });
      var us = ["$rootScope", function (e) {
        return {
          restrict: "A",
          require: ["ngModel", "^?form", "^?ngModelOptions"],
          controller: os,
          priority: 1,
          compile: function t(n) {
            n.addClass(Zo).addClass(ts).addClass(Ko);
            return {
              pre: function e(t, n, r, i) {
                var a = i[0], o = i[1] || a.$$parentForm, s = i[2];
                s && (a.$options = s.$options);
                a.$$initGetterSetters();
                o.$addControl(a);
                r.$observe("name", function (e) {
                  a.$name !== e && a.$$parentForm.$$renameControl(a, e)
                });
                t.$on("$destroy", function () {
                  a.$$parentForm.$removeControl(a)
                })
              }, post: function t(n, r, i, a) {
                var o = a[0];
                o.$$setUpdateOnEvents();

                function s() {
                  o.$setTouched()
                }

                r.on("blur", function () {
                  if (o.$touched) return;
                  e.$$phase ? n.$evalAsync(s) : n.$apply(s)
                })
              }
            }
          }
        }
      }];
      var ls;
      var cs = /(\s+|^)default(\s+|$)/;

      function fs(e) {
        this.$$options = e
      }

      fs.prototype = {
        getOption: function (e) {
          return this.$$options[e]
        }, createChild: function (e) {
          var t = false;
          e = j({}, e);
          E(e, function (n, r) {
            if ("$inherit" === n) if ("*" === r) t = true; else {
              e[r] = this.$$options[r];
              "updateOn" === r && (e.updateOnDefault = this.$$options.updateOnDefault)
            } else if ("updateOn" === r) {
              e.updateOnDefault = false;
              e[r] = oe(n.replace(cs, function () {
                e.updateOnDefault = true;
                return " "
              }))
            }
          }, this);
          if (t) {
            delete e["*"];
            hs(e, this.$$options)
          }
          hs(e, ls.$$options);
          return new fs(e)
        }
      };
      ls = new fs({
        updateOn: "",
        updateOnDefault: true,
        debounce: 0,
        getterSetter: false,
        allowInvalid: false,
        timezone: null
      });
      var ps = function () {
        e.$inject = ["$attrs", "$scope"];

        function e(e, t) {
          this.$$attrs = e;
          this.$$scope = t
        }

        e.prototype = {
          $onInit: function () {
            var e = this.parentCtrl ? this.parentCtrl.$options : ls;
            var t = this.$$scope.$eval(this.$$attrs.ngModelOptions);
            this.$options = e.createChild(t)
          }
        };
        return {
          restrict: "A",
          priority: 10,
          require: {parentCtrl: "?^^ngModelOptions"},
          bindToController: true,
          controller: e
        }
      };

      function hs(e, t) {
        E(t, function (t, n) {
          V(e[n]) || (e[n] = t)
        })
      }

      var ds = Ia({terminal: true, priority: 1e3});
      var vs = a("ngOptions");
      var ms = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/;
      var gs = ["$compile", "$document", "$parse", function (e, n, r) {
        function i(e, t, n) {
          var i = e.match(ms);
          if (!i) throw vs("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", e, Te(t));
          var a = i[5] || i[7];
          var o = i[6];
          var s = / as /.test(i[0]) && i[1];
          var u = i[9];
          var l = r(i[2] ? i[1] : a);
          var c = s && r(s);
          var f = c || l;
          var p = u && r(u);
          var h = u ? function (e, t) {
            return p(n, t)
          } : function e(t) {
            return ln(t)
          };
          var d = function (e, t) {
            return h(e, b(e, t))
          };
          var v = r(i[2] || i[1]);
          var m = r(i[3] || "");
          var g = r(i[4] || "");
          var $ = r(i[8]);
          var y = {};
          var b = o ? function (e, t) {
            y[o] = t;
            y[a] = e;
            return y
          } : function (e) {
            y[a] = e;
            return y
          };

          function w(e, t, n, r, i) {
            this.selectValue = e;
            this.viewValue = t;
            this.label = n;
            this.group = r;
            this.disabled = i
          }

          function x(e) {
            var t;
            if (!o && C(e)) t = e; else {
              t = [];
              for (var n in e) e.hasOwnProperty(n) && "$" !== n.charAt(0) && t.push(n)
            }
            return t
          }

          return {
            trackBy: u, getTrackByValue: d, getWatchables: r($, function (e) {
              var t = [];
              e = e || [];
              var r = x(e);
              var a = r.length;
              for (var o = 0; o < a; o++) {
                var s = e === r ? o : r[o];
                var u = e[s];
                var l = b(u, s);
                var c = h(u, l);
                t.push(c);
                if (i[2] || i[1]) {
                  var f = v(n, l);
                  t.push(f)
                }
                if (i[4]) {
                  var p = g(n, l);
                  t.push(p)
                }
              }
              return t
            }), getOptions: function () {
              var e = [];
              var t = {};
              var r = $(n) || [];
              var i = x(r);
              var a = i.length;
              for (var o = 0; o < a; o++) {
                var s = r === i ? o : i[o];
                var l = r[s];
                var c = b(l, s);
                var p = f(n, c);
                var y = h(p, c);
                var C = v(n, c);
                var E = m(n, c);
                var k = g(n, c);
                var S = new w(y, p, C, E, k);
                e.push(S);
                t[y] = S
              }
              return {
                items: e, selectValueMap: t, getOptionFromViewValue: function (e) {
                  return t[d(e)]
                }, getViewValueFromOption: function (e) {
                  return u ? he(e.viewValue) : e.viewValue
                }
              }
            }
          }
        }

        var a = t.document.createElement("option"), o = t.document.createElement("optgroup");

        function s(t, r, s, u) {
          var l = u[0];
          var c = u[1];
          var f = s.multiple;
          for (var h = 0, d = r.children(), v = d.length; h < v; h++) if ("" === d[h].value) {
            l.hasEmptyOption = true;
            l.emptyOption = d.eq(h);
            break
          }
          r.empty();
          var m = !!l.emptyOption;
          var g = p(a.cloneNode(false));
          g.val("?");
          var $;
          var y = i(s.ngOptions, r, t);
          var b = n[0].createDocumentFragment();
          l.generateUnknownOptionValue = function (e) {
            return "?"
          };
          if (f) {
            l.writeValue = function e(t) {
              if (!$) return;
              var n = t && t.map(x) || [];
              $.items.forEach(function (e) {
                e.element.selected && !fe(n, e) && (e.element.selected = false)
              })
            };
            l.readValue = function e() {
              var t = r.val() || [], n = [];
              E(t, function (e) {
                var t = $.selectValueMap[e];
                t && !t.disabled && n.push($.getViewValueFromOption(t))
              });
              return n
            };
            y.trackBy && t.$watchCollection(function () {
              if (W(c.$viewValue)) return c.$viewValue.map(function (e) {
                return y.getTrackByValue(e)
              })
            }, function () {
              c.$render()
            })
          } else {
            l.writeValue = function e(t) {
              if (!$) return;
              var n = r[0].options[r[0].selectedIndex];
              var i = $.getOptionFromViewValue(t);
              n && n.removeAttribute("selected");
              if (i) {
                if (r[0].value !== i.selectValue) {
                  l.removeUnknownOption();
                  r[0].value = i.selectValue;
                  i.element.selected = true
                }
                i.element.setAttribute("selected", "selected")
              } else l.selectUnknownOrEmptyOption(t)
            };
            l.readValue = function e() {
              var t = $.selectValueMap[r.val()];
              if (t && !t.disabled) {
                l.unselectEmptyOption();
                l.removeUnknownOption();
                return $.getViewValueFromOption(t)
              }
              return null
            };
            y.trackBy && t.$watch(function () {
              return y.getTrackByValue(c.$viewValue)
            }, function () {
              c.$render()
            })
          }
          if (m) {
            e(l.emptyOption)(t);
            r.prepend(l.emptyOption);
            if (l.emptyOption[0].nodeType === nt) {
              l.hasEmptyOption = false;
              l.registerOption = function (e, t) {
                if ("" === t.val()) {
                  l.hasEmptyOption = true;
                  l.emptyOption = t;
                  l.emptyOption.removeClass("ng-scope");
                  c.$render();
                  t.on("$destroy", function () {
                    var e = l.$isEmptyOptionSelected();
                    l.hasEmptyOption = false;
                    l.emptyOption = void 0;
                    e && c.$render()
                  })
                }
              }
            } else l.emptyOption.removeClass("ng-scope")
          }
          t.$watchCollection(y.getWatchables, k);

          function w(e, t) {
            var n = a.cloneNode(false);
            t.appendChild(n);
            C(e, n)
          }

          function x(e) {
            var t = $.getOptionFromViewValue(e);
            var n = t && t.element;
            n && !n.selected && (n.selected = true);
            return t
          }

          function C(e, t) {
            e.element = t;
            t.disabled = e.disabled;
            if (e.label !== t.label) {
              t.label = e.label;
              t.textContent = e.label
            }
            t.value = e.selectValue
          }

          function k() {
            var e = $ && l.readValue();
            if ($) for (var t = $.items.length - 1; t >= 0; t--) {
              var n = $.items[t];
              V(n.group) ? Qt(n.element.parentNode) : Qt(n.element)
            }
            $ = y.getOptions();
            var i = {};
            $.items.forEach(function e(t) {
              var n;
              if (V(t.group)) {
                n = i[t.group];
                if (!n) {
                  n = o.cloneNode(false);
                  b.appendChild(n);
                  n.label = null === t.group ? "null" : t.group;
                  i[t.group] = n
                }
                w(t, n)
              } else w(t, b)
            });
            r[0].appendChild(b);
            c.$render();
            if (!c.$isEmpty(e)) {
              var a = l.readValue();
              var s = y.trackBy || f;
              if (s ? !ve(e, a) : e !== a) {
                c.$setViewValue(a);
                c.$render()
              }
            }
          }
        }

        return {
          restrict: "A", terminal: true, require: ["select", "ngModel"], link: {
            pre: function e(t, n, r, i) {
              i[0].registerOption = P
            }, post: s
          }
        }
      }];
      var $s = ["$locale", "$interpolate", "$log", function (e, t, n) {
        var r = /{}/g, i = /^when(Minus)?(.+)$/;
        return {
          link: function (a, o, s) {
            var u = s.count, c = s.$attr.when && o.attr(s.$attr.when), f = s.offset || 0, p = a.$eval(c) || {}, h = {},
              d = t.startSymbol(), v = t.endSymbol(), m = d + u + "-" + f + v, g = b.noop, $;
            E(s, function (e, t) {
              var n = i.exec(t);
              if (n) {
                var r = (n[1] ? "-" : "") + l(n[2]);
                p[r] = o.attr(s.$attr[t])
              }
            });
            E(p, function (e, n) {
              h[n] = t(e.replace(r, m))
            });
            a.$watch(u, function t(r) {
              var i = parseFloat(r);
              var o = N(i);
              o || i in p || (i = e.pluralCat(i - f));
              if (i !== $ && !(o && N($))) {
                g();
                var s = h[i];
                if (I(s)) {
                  null != r && n.debug("ngPluralize: no rule defined for '" + i + "' in " + c);
                  g = P;
                  y()
                } else g = a.$watch(s, y);
                $ = i
              }
            });

            function y(e) {
              o.text(e || "")
            }
          }
        }
      }];
      var ys = a("ngRef");
      var bs = ["$parse", function (e) {
        return {
          priority: -1, restrict: "A", compile: function (t, n) {
            var r = Yn(ce(t));
            var i = e(n.ngRef);
            var a = i.assign || function () {
              throw ys("nonassign", 'Expression in ngRef="{0}" is non-assignable!', n.ngRef)
            };
            return function (e, t, o) {
              var s;
              if (o.hasOwnProperty("ngRefRead")) if ("$element" === o.ngRefRead) s = t; else {
                s = t.data("$" + o.ngRefRead + "Controller");
                if (!s) throw ys("noctrl", 'The controller for ngRefRead="{0}" could not be found on ngRef="{1}"', o.ngRefRead, n.ngRef)
              } else s = t.data("$" + r + "Controller");
              s = s || t;
              a(e, s);
              t.on("$destroy", function () {
                i(e) === s && a(e, null)
              })
            }
          }
        }
      }];
      var ws = ["$parse", "$animate", "$compile", function (e, t, n) {
        var r = "$$NG_REMOVED";
        var i = a("ngRepeat");
        var o = function (e, t, n, r, i, a, o) {
          e[n] = r;
          i && (e[i] = a);
          e.$index = t;
          e.$first = 0 === t;
          e.$last = t === o - 1;
          e.$middle = !(e.$first || e.$last);
          e.$odd = !(e.$even = 0 === (1 & t))
        };
        var s = function (e) {
          return e.clone[0]
        };
        var l = function (e) {
          return e.clone[e.clone.length - 1]
        };
        return {
          restrict: "A",
          multiElement: true,
          transclude: "element",
          priority: 1e3,
          terminal: true,
          $$tlb: true,
          compile: function a(c, f) {
            var p = f.ngRepeat;
            var h = n.$$createComment("end ngRepeat", p);
            var d = p.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
            if (!d) throw i("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", p);
            var v = d[1];
            var m = d[2];
            var g = d[3];
            var $ = d[4];
            d = v.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);
            if (!d) throw i("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", v);
            var y = d[3] || d[1];
            var b = d[2];
            if (g && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(g) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(g))) throw i("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", g);
            var w, x, k, S;
            var A = {$id: ln};
            if ($) w = e($); else {
              k = function (e, t) {
                return ln(t)
              };
              S = function (e) {
                return e
              }
            }
            return function e(n, a, c, f, d) {
              w && (x = function (e, t, r) {
                b && (A[b] = e);
                A[y] = t;
                A.$index = r;
                return w(n, A)
              });
              var v = Ke();
              n.$watchCollection(m, function e(c) {
                var f, m, $ = a[0], w, A = Ke(), T, O, j, M, D, N, q, P, _;
                g && (n[g] = c);
                if (C(c)) {
                  N = c;
                  D = x || k
                } else {
                  D = x || S;
                  N = [];
                  for (var R in c) u.call(c, R) && "$" !== R.charAt(0) && N.push(R)
                }
                T = N.length;
                P = new Array(T);
                for (f = 0; f < T; f++) {
                  O = c === N ? f : N[f];
                  j = c[O];
                  M = D(O, j, f);
                  if (v[M]) {
                    q = v[M];
                    delete v[M];
                    A[M] = q;
                    P[f] = q
                  } else {
                    if (A[M]) {
                      E(P, function (e) {
                        e && e.scope && (v[e.id] = e)
                      });
                      throw i("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", p, M, j)
                    }
                    P[f] = {id: M, scope: void 0, clone: void 0};
                    A[M] = true
                  }
                }
                for (var L in v) {
                  q = v[L];
                  _ = Ye(q.clone);
                  t.leave(_);
                  if (_[0].parentNode) for (f = 0, m = _.length; f < m; f++) _[f][r] = true;
                  q.scope.$destroy()
                }
                for (f = 0; f < T; f++) {
                  O = c === N ? f : N[f];
                  j = c[O];
                  q = P[f];
                  if (q.scope) {
                    w = $;
                    do {
                      w = w.nextSibling
                    } while (w && w[r]);
                    s(q) !== w && t.move(Ye(q.clone), null, $);
                    $ = l(q);
                    o(q.scope, f, y, j, b, O, T)
                  } else d(function e(n, r) {
                    q.scope = r;
                    var i = h.cloneNode(false);
                    n[n.length++] = i;
                    t.enter(n, null, $);
                    $ = i;
                    q.clone = n;
                    A[q.id] = q;
                    o(q.scope, f, y, j, b, O, T)
                  })
                }
                v = A
              })
            }
          }
        }
      }];
      var xs = "ng-hide";
      var Cs = "ng-hide-animate";
      var Es = ["$animate", function (e) {
        return {
          restrict: "A", multiElement: true, link: function (t, n, r) {
            t.$watch(r.ngShow, function t(r) {
              e[r ? "removeClass" : "addClass"](n, xs, {tempClasses: Cs})
            })
          }
        }
      }];
      var ks = ["$animate", function (e) {
        return {
          restrict: "A", multiElement: true, link: function (t, n, r) {
            t.$watch(r.ngHide, function t(r) {
              e[r ? "addClass" : "removeClass"](n, xs, {tempClasses: Cs})
            })
          }
        }
      }];
      var Ss = Ia(function (e, t, n) {
        e.$watchCollection(n.ngStyle, function e(n, r) {
          r && n !== r && E(r, function (e, n) {
            t.css(n, "")
          });
          n && t.css(n)
        })
      });
      var As = ["$animate", "$compile", function (e, t) {
        return {
          require: "ngSwitch", controller: ["$scope", function e() {
            this.cases = {}
          }], link: function (n, r, i, a) {
            var o = i.ngSwitch || i.on, s = [], u = [], l = [], c = [];
            var f = function (e, t) {
              return function (n) {
                false !== n && e.splice(t, 1)
              }
            };
            n.$watch(o, function n(r) {
              var i, o;
              while (l.length) e.cancel(l.pop());
              for (i = 0, o = c.length; i < o; ++i) {
                var p = Ye(u[i].clone);
                c[i].$destroy();
                var h = l[i] = e.leave(p);
                h.done(f(l, i))
              }
              u.length = 0;
              c.length = 0;
              (s = a.cases["!" + r] || a.cases["?"]) && E(s, function (n) {
                n.transclude(function (r, i) {
                  c.push(i);
                  var a = n.element;
                  r[r.length++] = t.$$createComment("end ngSwitchWhen");
                  var o = {clone: r};
                  u.push(o);
                  e.enter(r, a.parent(), a)
                })
              })
            })
          }
        }
      }];
      var Ts = Ia({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: true,
        link: function (e, t, n, r, i) {
          var a = n.ngSwitchWhen.split(n.ngSwitchWhenSeparator).sort().filter(function (e, t, n) {
            return n[t - 1] !== e
          });
          E(a, function (e) {
            r.cases["!" + e] = r.cases["!" + e] || [];
            r.cases["!" + e].push({transclude: i, element: t})
          })
        }
      });
      var Os = Ia({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: true,
        link: function (e, t, n, r, i) {
          r.cases["?"] = r.cases["?"] || [];
          r.cases["?"].push({transclude: i, element: t})
        }
      });
      var js = a("ngTransclude");
      var Ms = ["$compile", function (e) {
        return {
          restrict: "EAC", compile: function t(n) {
            var r = e(n.contents());
            n.empty();
            return function e(t, n, i, a, o) {
              if (!o) throw js("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", Te(n));
              i.ngTransclude === i.$attr.ngTransclude && (i.ngTransclude = "");
              var s = i.ngTransclude || i.ngTranscludeSlot;
              o(u, null, s);
              s && !o.isSlotFilled(s) && l();

              function u(e, t) {
                if (e.length && c(e)) n.append(e); else {
                  l();
                  t.$destroy()
                }
              }

              function l() {
                r(t, function (e) {
                  n.append(e)
                })
              }

              function c(e) {
                for (var t = 0, n = e.length; t < n; t++) {
                  var r = e[t];
                  if (r.nodeType !== tt || r.nodeValue.trim()) return true
                }
              }
            }
          }
        }
      }];
      var Ds = ["$templateCache", function (e) {
        return {
          restrict: "E", terminal: true, compile: function (t, n) {
            if ("text/ng-template" === n.type) {
              var r = n.id, i = t[0].text;
              e.put(r, i)
            }
          }
        }
      }];
      var Ns = {$setViewValue: P, $render: P};

      function qs(e, t) {
        e.prop("selected", t);
        e.attr("selected", t)
      }

      var Ps = ["$element", "$scope", function (e, n) {
        var r = this, i = new pn;
        r.selectValueMap = {};
        r.ngModelCtrl = Ns;
        r.multiple = false;
        r.unknownOption = p(t.document.createElement("option"));
        r.hasEmptyOption = false;
        r.emptyOption = void 0;
        r.renderUnknownOption = function (t) {
          var n = r.generateUnknownOptionValue(t);
          r.unknownOption.val(n);
          e.prepend(r.unknownOption);
          qs(r.unknownOption, true);
          e.val(n)
        };
        r.updateUnknownOption = function (t) {
          var n = r.generateUnknownOptionValue(t);
          r.unknownOption.val(n);
          qs(r.unknownOption, true);
          e.val(n)
        };
        r.generateUnknownOptionValue = function (e) {
          return "? " + ln(e) + " ?"
        };
        r.removeUnknownOption = function () {
          r.unknownOption.parent() && r.unknownOption.remove()
        };
        r.selectEmptyOption = function () {
          if (r.emptyOption) {
            e.val("");
            qs(r.emptyOption, true)
          }
        };
        r.unselectEmptyOption = function () {
          r.hasEmptyOption && qs(r.emptyOption, false)
        };
        n.$on("$destroy", function () {
          r.renderUnknownOption = P
        });
        r.readValue = function t() {
          var n = e.val();
          var i = n in r.selectValueMap ? r.selectValueMap[n] : n;
          if (r.hasOption(i)) return i;
          return null
        };
        r.writeValue = function t(n) {
          var i = e[0].options[e[0].selectedIndex];
          i && qs(p(i), false);
          if (r.hasOption(n)) {
            r.removeUnknownOption();
            var a = ln(n);
            e.val(a in r.selectValueMap ? a : n);
            var o = e[0].options[e[0].selectedIndex];
            qs(p(o), true)
          } else r.selectUnknownOrEmptyOption(n)
        };
        r.addOption = function (e, t) {
          if (t[0].nodeType === nt) return;
          Je(e, '"option value"');
          if ("" === e) {
            r.hasEmptyOption = true;
            r.emptyOption = t
          }
          var n = i.get(e) || 0;
          i.set(e, n + 1);
          o()
        };
        r.removeOption = function (e) {
          var t = i.get(e);
          if (t) if (1 === t) {
            i.delete(e);
            if ("" === e) {
              r.hasEmptyOption = false;
              r.emptyOption = void 0
            }
          } else i.set(e, t - 1)
        };
        r.hasOption = function (e) {
          return !!i.get(e)
        };
        r.$hasEmptyOption = function () {
          return r.hasEmptyOption
        };
        r.$isUnknownOptionSelected = function () {
          return e[0].options[0] === r.unknownOption[0]
        };
        r.$isEmptyOptionSelected = function () {
          return r.hasEmptyOption && e[0].options[e[0].selectedIndex] === r.emptyOption[0]
        };
        r.selectUnknownOrEmptyOption = function (e) {
          if (null == e && r.emptyOption) {
            r.removeUnknownOption();
            r.selectEmptyOption()
          } else r.unknownOption.parent().length ? r.updateUnknownOption(e) : r.renderUnknownOption(e)
        };
        var a = false;

        function o() {
          if (a) return;
          a = true;
          n.$$postDigest(function () {
            a = false;
            r.ngModelCtrl.$render()
          })
        }

        var s = false;

        function u(e) {
          if (s) return;
          s = true;
          n.$$postDigest(function () {
            if (n.$$destroyed) return;
            s = false;
            r.ngModelCtrl.$setViewValue(r.readValue());
            e && r.ngModelCtrl.$render()
          })
        }

        r.registerOption = function (e, t, n, i, a) {
          if (n.$attr.ngValue) {
            var s, l = NaN;
            n.$observe("value", function e(n) {
              var i;
              var a = t.prop("selected");
              if (V(l)) {
                r.removeOption(s);
                delete r.selectValueMap[l];
                i = true
              }
              l = ln(n);
              s = n;
              r.selectValueMap[l] = n;
              r.addOption(n, t);
              t.attr("value", l);
              i && a && u()
            })
          } else i ? n.$observe("value", function e(n) {
            r.readValue();
            var i;
            var a = t.prop("selected");
            if (V(s)) {
              r.removeOption(s);
              i = true
            }
            s = n;
            r.addOption(n, t);
            i && a && u()
          }) : a ? e.$watch(a, function e(i, a) {
            n.$set("value", i);
            var o = t.prop("selected");
            a !== i && r.removeOption(a);
            r.addOption(i, t);
            a && o && u()
          }) : r.addOption(n.value, t);
          n.$observe("disabled", function (e) {
            if ("true" === e || e && t.prop("selected")) if (r.multiple) u(true); else {
              r.ngModelCtrl.$setViewValue(null);
              r.ngModelCtrl.$render()
            }
          });
          t.on("$destroy", function () {
            var e = r.readValue();
            var t = n.value;
            r.removeOption(t);
            o();
            (r.multiple && e && -1 !== e.indexOf(t) || e === t) && u(true)
          })
        }
      }];
      var _s = function () {
        return {restrict: "E", require: ["select", "?ngModel"], controller: Ps, priority: 1, link: {pre: e, post: t}};

        function e(e, t, n, r) {
          var i = r[0];
          var a = r[1];
          if (!a) {
            i.registerOption = P;
            return
          }
          i.ngModelCtrl = a;
          t.on("change", function () {
            i.removeUnknownOption();
            e.$apply(function () {
              a.$setViewValue(i.readValue())
            })
          });
          if (n.multiple) {
            i.multiple = true;
            i.readValue = function e() {
              var n = [];
              E(t.find("option"), function (e) {
                if (e.selected && !e.disabled) {
                  var t = e.value;
                  n.push(t in i.selectValueMap ? i.selectValueMap[t] : t)
                }
              });
              return n
            };
            i.writeValue = function e(n) {
              E(t.find("option"), function (e) {
                var t = !!n && (fe(n, e.value) || fe(n, i.selectValueMap[e.value]));
                var r = e.selected;
                t !== r && qs(p(e), t)
              })
            };
            var o, s = NaN;
            e.$watch(function e() {
              if (s === a.$viewValue && !ve(o, a.$viewValue)) {
                o = ot(a.$viewValue);
                a.$render()
              }
              s = a.$viewValue
            });
            a.$isEmpty = function (e) {
              return !e || 0 === e.length
            }
          }
        }

        function t(e, t, n, r) {
          var i = r[1];
          if (!i) return;
          var a = r[0];
          i.$render = function () {
            a.writeValue(i.$viewValue)
          }
        }
      };
      var Rs = ["$interpolate", function (e) {
        return {
          restrict: "E", priority: 100, compile: function (t, n) {
            var r, i;
            if (V(n.ngValue)) ; else if (V(n.value)) r = e(n.value, true); else {
              i = e(t.text(), true);
              i || n.$set("value", t.text())
            }
            return function (e, t, n) {
              var a = "$selectController", o = t.parent(), s = o.data(a) || o.parent().data(a);
              s && s.registerOption(e, t, n, r, i)
            }
          }
        }
      }];
      var Ls = function () {
        return {
          restrict: "A", require: "?ngModel", link: function (e, t, n, r) {
            if (!r) return;
            n.required = true;
            r.$validators.required = function (e, t) {
              return !n.required || !r.$isEmpty(t)
            };
            n.$observe("required", function () {
              r.$validate()
            })
          }
        }
      };
      var Is = function () {
        return {
          restrict: "A", require: "?ngModel", link: function (e, t, n, r) {
            if (!r) return;
            var i, o = n.ngPattern || n.pattern;
            n.$observe("pattern", function (e) {
              H(e) && e.length > 0 && (e = new RegExp("^" + e + "$"));
              if (e && !e.test) throw a("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", o, e, Te(t));
              i = e || void 0;
              r.$validate()
            });
            r.$validators.pattern = function (e, t) {
              return r.$isEmpty(t) || I(i) || i.test(t)
            }
          }
        }
      };
      var Vs = function () {
        return {
          restrict: "A", require: "?ngModel", link: function (e, t, n, r) {
            if (!r) return;
            var i = -1;
            n.$observe("maxlength", function (e) {
              var t = D(e);
              i = N(t) ? -1 : t;
              r.$validate()
            });
            r.$validators.maxlength = function (e, t) {
              return i < 0 || r.$isEmpty(t) || t.length <= i
            }
          }
        }
      };
      var Fs = function () {
        return {
          restrict: "A", require: "?ngModel", link: function (e, t, n, r) {
            if (!r) return;
            var i = 0;
            n.$observe("minlength", function (e) {
              i = D(e) || 0;
              r.$validate()
            });
            r.$validators.minlength = function (e, t) {
              return r.$isEmpty(t) || t.length >= i
            }
          }
        }
      };
      if (t.angular.bootstrap) {
        t.console && console.log("WARNING: Tried to load AngularJS more than once.");
        return
      }
      ze();
      ct(b);
      b.module("ngLocale", [], ["$provide", function (e) {
        var t = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};

        function n(e) {
          e += "";
          var t = e.indexOf(".");
          return -1 == t ? 0 : e.length - t - 1
        }

        function r(e, t) {
          var r = t;
          void 0 === r && (r = Math.min(n(e), 3));
          var i = Math.pow(10, r);
          var a = (e * i | 0) % i;
          return {v: r, f: a}
        }

        e.value("$locale", {
          DATETIME_FORMATS: {
            AMPMS: ["AM", "PM"],
            DAY: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            ERANAMES: ["Before Christ", "Anno Domini"],
            ERAS: ["BC", "AD"],
            FIRSTDAYOFWEEK: 6,
            MONTH: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            SHORTDAY: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            SHORTMONTH: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            STANDALONEMONTH: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            WEEKENDRANGE: [5, 6],
            fullDate: "EEEE, MMMM d, y",
            longDate: "MMMM d, y",
            medium: "MMM d, y h:mm:ss a",
            mediumDate: "MMM d, y",
            mediumTime: "h:mm:ss a",
            short: "M/d/yy h:mm a",
            shortDate: "M/d/yy",
            shortTime: "h:mm a"
          },
          NUMBER_FORMATS: {
            CURRENCY_SYM: "$",
            DECIMAL_SEP: ".",
            GROUP_SEP: ",",
            PATTERNS: [{
              gSize: 3,
              lgSize: 3,
              maxFrac: 3,
              minFrac: 0,
              minInt: 1,
              negPre: "-",
              negSuf: "",
              posPre: "",
              posSuf: ""
            }, {
              gSize: 3,
              lgSize: 3,
              maxFrac: 2,
              minFrac: 2,
              minInt: 1,
              negPre: "-¤",
              negSuf: "",
              posPre: "¤",
              posSuf: ""
            }]
          },
          id: "en-us",
          localeID: "en_US",
          pluralCat: function (e, n) {
            var i = 0 | e;
            var a = r(e, n);
            if (1 == i && 0 == a.v) return t.ONE;
            return t.OTHER
          }
        })
      }]);
      p(function () {
        Le(t.document, Ie)
      })
    })(window);
    !window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>')
  }).call(this, n(48))
}, function (e, t) {
  /**
   * @license AngularJS v1.7.2
   * (c) 2010-2018 Google, Inc. http://angularjs.org
   * License: MIT
   */
  (function (e, t) {
    "use strict";
    var n = 1;
    var r = 8;
    var i = "-add";
    var a = "-remove";
    var o = "ng-";
    var s = "-active";
    var u = "-prepare";
    var l = "ng-animate";
    var c = "$$ngAnimateChildren";
    var f = "", p, h, d, v;
    if (void 0 === e.ontransitionend && void 0 !== e.onwebkittransitionend) {
      f = "-webkit-";
      p = "WebkitTransition";
      h = "webkitTransitionEnd transitionend"
    } else {
      p = "transition";
      h = "transitionend"
    }
    if (void 0 === e.onanimationend && void 0 !== e.onwebkitanimationend) {
      f = "-webkit-";
      d = "WebkitAnimation";
      v = "webkitAnimationEnd animationend"
    } else {
      d = "animation";
      v = "animationend"
    }
    var m = "Duration";
    var g = "Property";
    var $ = "Delay";
    var y = "TimingFunction";
    var b = "IterationCount";
    var w = "PlayState";
    var x = 9999;
    var C = d + $;
    var E = d + m;
    var k = p + $;
    var S = p + m;
    var A = t.$$minErr("ng");

    function T(e, t, n) {
      if (!e) throw A("areq", "Argument '{0}' is {1}", t || "?", n || "required");
      return e
    }

    function O(e, t) {
      if (!e && !t) return "";
      if (!e) return t;
      if (!t) return e;
      ke(e) && (e = e.join(" "));
      ke(t) && (t = t.join(" "));
      return e + " " + t
    }

    function j(e) {
      var t = {};
      if (e && (e.to || e.from)) {
        t.to = e.to;
        t.from = e.from
      }
      return t
    }

    function M(e, t, n) {
      var r = "";
      e = ke(e) ? e : e && je(e) && e.length ? e.split(/\s+/) : [];
      Ee(e, function (e, i) {
        if (e && e.length > 0) {
          r += i > 0 ? " " : "";
          r += n ? t + e : e + t
        }
      });
      return r
    }

    function D(e, t) {
      var n = e.indexOf(t);
      t >= 0 && e.splice(n, 1)
    }

    function N(e) {
      if (e instanceof De) switch (e.length) {
        case 0:
          return e;
        case 1:
          if (e[0].nodeType === n) return e;
          break;
        default:
          return De(q(e))
      }
      if (e.nodeType === n) return De(e)
    }

    function q(e) {
      if (!e[0]) return e;
      for (var t = 0; t < e.length; t++) {
        var r = e[t];
        if (r.nodeType === n) return r
      }
    }

    function P(e, t, n) {
      Ee(t, function (t) {
        e.addClass(t, n)
      })
    }

    function _(e, t, n) {
      Ee(t, function (t) {
        e.removeClass(t, n)
      })
    }

    function R(e) {
      return function (t, n) {
        if (n.addClass) {
          P(e, t, n.addClass);
          n.addClass = null
        }
        if (n.removeClass) {
          _(e, t, n.removeClass);
          n.removeClass = null
        }
      }
    }

    function L(e) {
      e = e || {};
      if (!e.$$prepared) {
        var t = e.domOperation || Ne;
        e.domOperation = function () {
          e.$$domOperationFired = true;
          t();
          t = Ne
        };
        e.$$prepared = true
      }
      return e
    }

    function I(e, t) {
      V(e, t);
      F(e, t)
    }

    function V(e, t) {
      if (t.from) {
        e.css(t.from);
        t.from = null
      }
    }

    function F(e, t) {
      if (t.to) {
        e.css(t.to);
        t.to = null
      }
    }

    function U(e, t, n) {
      var r = t.options || {};
      var i = n.options || {};
      var a = (r.addClass || "") + " " + (i.addClass || "");
      var o = (r.removeClass || "") + " " + (i.removeClass || "");
      var s = H(e.attr("class"), a, o);
      if (i.preparationClasses) {
        r.preparationClasses = Y(i.preparationClasses, r.preparationClasses);
        delete i.preparationClasses
      }
      var u = r.domOperation !== Ne ? r.domOperation : null;
      Ce(r, i);
      u && (r.domOperation = u);
      s.addClass ? r.addClass = s.addClass : r.addClass = null;
      s.removeClass ? r.removeClass = s.removeClass : r.removeClass = null;
      t.addClass = r.addClass;
      t.removeClass = r.removeClass;
      return r
    }

    function H(e, t, n) {
      var r = 1;
      var o = -1;
      var s = {};
      e = l(e);
      t = l(t);
      Ee(t, function (e, t) {
        s[t] = r
      });
      n = l(n);
      Ee(n, function (e, t) {
        s[t] = s[t] === r ? null : o
      });
      var u = {addClass: "", removeClass: ""};
      Ee(s, function (t, n) {
        var s, l;
        if (t === r) {
          s = "addClass";
          l = !e[n] || e[n + a]
        } else if (t === o) {
          s = "removeClass";
          l = e[n] || e[n + i]
        }
        if (l) {
          u[s].length && (u[s] += " ");
          u[s] += n
        }
      });

      function l(e) {
        je(e) && (e = e.split(" "));
        var t = {};
        Ee(e, function (e) {
          e.length && (t[e] = true)
        });
        return t
      }

      return u
    }

    function B(e) {
      return e instanceof De ? e[0] : e
    }

    function z(e, t, n) {
      var r = "";
      t && (r = M(t, o, true));
      n.addClass && (r = Y(r, M(n.addClass, i)));
      n.removeClass && (r = Y(r, M(n.removeClass, a)));
      if (r.length) {
        n.preparationClasses = r;
        e.addClass(r)
      }
    }

    function W(e, t) {
      if (t.preparationClasses) {
        e.removeClass(t.preparationClasses);
        t.preparationClasses = null
      }
      if (t.activeClasses) {
        e.removeClass(t.activeClasses);
        t.activeClasses = null
      }
    }

    function G(e, t) {
      var n = t ? "-" + t + "s" : "";
      Q(e, [k, n]);
      return [k, n]
    }

    function J(e, t) {
      var n = t ? "paused" : "";
      var r = d + w;
      Q(e, [r, n]);
      return [r, n]
    }

    function Q(e, t) {
      var n = t[0];
      var r = t[1];
      e.style[n] = r
    }

    function Y(e, t) {
      if (!e) return t;
      if (!t) return e;
      return e + " " + t
    }

    var K = ["$$rAF", function (e) {
      var t, n;

      function r(e) {
        t = t.concat(e);
        i()
      }

      t = r.queue = [];
      r.waitUntilQuiet = function (t) {
        n && n();
        n = e(function () {
          n = null;
          t();
          i()
        })
      };
      return r;

      function i() {
        if (!t.length) return;
        var r = t.shift();
        for (var a = 0; a < r.length; a++) r[a]();
        n || e(function () {
          n || i()
        })
      }
    }];
    var X = ["$interpolate", function (e) {
      return {
        link: function (t, n, r) {
          var i = r.ngAnimateChildren;
          if (je(i) && 0 === i.length) n.data(c, true); else {
            a(e(i)(t));
            r.$observe("ngAnimateChildren", a)
          }

          function a(e) {
            e = "on" === e || "true" === e;
            n.data(c, e)
          }
        }
      }
    }];
    var Z = "$$animateCss";
    var ee = 1e3;
    var te = 3;
    var ne = 1.5;
    var re = {
      transitionDuration: S,
      transitionDelay: k,
      transitionProperty: p + g,
      animationDuration: E,
      animationDelay: C,
      animationIterationCount: d + b
    };
    var ie = {transitionDuration: S, transitionDelay: k, animationDuration: E, animationDelay: C};

    function ae(e) {
      return [E, e + "s"]
    }

    function oe(e, t) {
      var n = t ? C : k;
      return [n, e + "s"]
    }

    function se(e, t, n) {
      var r = Object.create(null);
      var i = e.getComputedStyle(t) || {};
      Ee(n, function (e, t) {
        var n = i[e];
        if (n) {
          var a = n.charAt(0);
          ("-" === a || "+" === a || a >= 0) && (n = ue(n));
          0 === n && (n = null);
          r[t] = n
        }
      });
      return r
    }

    function ue(e) {
      var t = 0;
      var n = e.split(/\s*,\s*/);
      Ee(n, function (e) {
        "s" === e.charAt(e.length - 1) && (e = e.substring(0, e.length - 1));
        e = parseFloat(e) || 0;
        t = t ? Math.max(e, t) : e
      });
      return t
    }

    function le(e) {
      return 0 === e || null != e
    }

    function ce(e, t) {
      var n = p;
      var r = e + "s";
      t ? n += m : r += " linear all";
      return [n, r]
    }

    function fe() {
      var e = Object.create(null);
      return {
        flush: function () {
          e = Object.create(null)
        }, count: function (t) {
          var n = e[t];
          return n ? n.total : 0
        }, get: function (t) {
          var n = e[t];
          return n && n.value
        }, put: function (t, n) {
          e[t] ? e[t].total++ : e[t] = {total: 1, value: n}
        }
      }
    }

    function pe(e, t, n) {
      Ee(n, function (n) {
        e[n] = Se(e[n]) ? e[n] : t.style.getPropertyValue(n)
      })
    }

    var he = ["$animateProvider", function (e) {
      var t = fe();
      var n = fe();
      this.$get = ["$window", "$$jqLite", "$$AnimateRunner", "$timeout", "$$forceReflow", "$sniffer", "$$rAFScheduler", "$$animateQueue", function (e, r, u, l, c, f, m, $) {
        var b = R(r);
        var w = 0;

        function C(e, t) {
          var n = "$$ngAnimateParentKey";
          var r = e.parentNode;
          var i = r[n] || (r[n] = ++w);
          return i + "-" + e.getAttribute("class") + "-" + t
        }

        function E(n, r, i, a) {
          var o = t.get(i);
          if (!o) {
            o = se(e, n, a);
            "infinite" === o.animationIterationCount && (o.animationIterationCount = 1)
          }
          t.put(i, o);
          return o
        }

        function k(i, a, o, s) {
          var u;
          if (t.count(o) > 0) {
            u = n.get(o);
            if (!u) {
              var l = M(a, "-stagger");
              r.addClass(i, l);
              u = se(e, i, s);
              u.animationDuration = Math.max(u.animationDuration, 0);
              u.transitionDuration = Math.max(u.transitionDuration, 0);
              r.removeClass(i, l);
              n.put(o, u)
            }
          }
          return u || {}
        }

        var S = [];

        function A(e) {
          S.push(e);
          m.waitUntilQuiet(function () {
            t.flush();
            n.flush();
            var e = c();
            for (var r = 0; r < S.length; r++) S[r](e);
            S.length = 0
          })
        }

        function T(e, t, n) {
          var r = E(e, t, n, re);
          var i = r.animationDelay;
          var a = r.transitionDelay;
          r.maxDelay = i && a ? Math.max(i, a) : i || a;
          r.maxDuration = Math.max(r.animationDuration * r.animationIterationCount, r.transitionDuration);
          return r
        }

        return function e(n, c) {
          var m = c || {};
          m.$$prepared || (m = L(xe(m)));
          var w = {};
          var E = B(n);
          if (!E || !E.parentNode || !$.enabled()) return Ie();
          var S = [];
          var O = n.attr("class");
          var N = j(m);
          var q;
          var P;
          var _;
          var R;
          var U;
          var H;
          var z;
          var W;
          var Y;
          var K;
          var X = [];
          if (0 === m.duration || !f.animations && !f.transitions) return Ie();
          var re = m.event && ke(m.event) ? m.event.join(" ") : m.event;
          var se = re && m.structural;
          var ue = "";
          var fe = "";
          se ? ue = M(re, o, true) : re && (ue = re);
          m.addClass && (fe += M(m.addClass, i));
          if (m.removeClass) {
            fe.length && (fe += " ");
            fe += M(m.removeClass, a)
          }
          m.applyClassesEarly && fe.length && b(n, m);
          var he = [ue, fe].join(" ").trim();
          var de = O + " " + he;
          var ve = M(he, s);
          var me = N.to && Object.keys(N.to).length > 0;
          var ge = (m.keyframeStyle || "").length > 0;
          if (!ge && !me && !he) return Ie();
          var $e, ye;
          if (m.stagger > 0) {
            var be = parseFloat(m.stagger);
            ye = {transitionDelay: be, animationDelay: be, transitionDuration: 0, animationDuration: 0}
          } else {
            $e = C(E, de);
            ye = k(E, he, $e, ie)
          }
          m.$$skipPreparationClasses || r.addClass(n, he);
          var we;
          if (m.transitionStyle) {
            var Ce = [p, m.transitionStyle];
            Q(E, Ce);
            S.push(Ce)
          }
          if (m.duration >= 0) {
            we = E.style[p].length > 0;
            var Se = ce(m.duration, we);
            Q(E, Se);
            S.push(Se)
          }
          if (m.keyframeStyle) {
            var Ae = [d, m.keyframeStyle];
            Q(E, Ae);
            S.push(Ae)
          }
          var Te = ye ? m.staggerIndex >= 0 ? m.staggerIndex : t.count($e) : 0;
          var Oe = 0 === Te;
          Oe && !m.skipBlocking && G(E, x);
          var je = T(E, de, $e);
          var Me = je.maxDelay;
          H = Math.max(Me, 0);
          W = je.maxDuration;
          var De = {};
          De.hasTransitions = je.transitionDuration > 0;
          De.hasAnimations = je.animationDuration > 0;
          De.hasTransitionAll = De.hasTransitions && "all" === je.transitionProperty;
          De.applyTransitionDuration = me && (De.hasTransitions && !De.hasTransitionAll || De.hasAnimations && !De.hasTransitions);
          De.applyAnimationDuration = m.duration && De.hasAnimations;
          De.applyTransitionDelay = le(m.delay) && (De.applyTransitionDuration || De.hasTransitions);
          De.applyAnimationDelay = le(m.delay) && De.hasAnimations;
          De.recalculateTimingStyles = fe.length > 0;
          if (De.applyTransitionDuration || De.applyAnimationDuration) {
            W = m.duration ? parseFloat(m.duration) : W;
            if (De.applyTransitionDuration) {
              De.hasTransitions = true;
              je.transitionDuration = W;
              we = E.style[p + g].length > 0;
              S.push(ce(W, we))
            }
            if (De.applyAnimationDuration) {
              De.hasAnimations = true;
              je.animationDuration = W;
              S.push(ae(W))
            }
          }
          if (0 === W && !De.recalculateTimingStyles) return Ie();
          if (null != m.delay) {
            var qe;
            if ("boolean" !== typeof m.delay) {
              qe = parseFloat(m.delay);
              H = Math.max(qe, 0)
            }
            De.applyTransitionDelay && S.push(oe(qe));
            De.applyAnimationDelay && S.push(oe(qe, true))
          }
          null == m.duration && je.transitionDuration > 0 && (De.recalculateTimingStyles = De.recalculateTimingStyles || Oe);
          z = H * ee;
          Y = W * ee;
          if (!m.skipBlocking) {
            De.blockTransition = je.transitionDuration > 0;
            De.blockKeyframeAnimation = je.animationDuration > 0 && ye.animationDelay > 0 && 0 === ye.animationDuration
          }
          if (m.from) {
            m.cleanupStyles && pe(w, E, Object.keys(m.from));
            V(n, m)
          }
          De.blockTransition || De.blockKeyframeAnimation ? Le(W) : m.skipBlocking || G(E, false);
          return {
            $$willAnimate: true, end: Pe, start: function () {
              if (q) return;
              U = {end: Pe, cancel: _e, resume: null, pause: null};
              R = new u(U);
              A(Fe);
              return R
            }
          };

          function Pe() {
            Re()
          }

          function _e() {
            Re(true)
          }

          function Re(e) {
            if (q || _ && P) return;
            q = true;
            P = false;
            m.$$skipPreparationClasses || r.removeClass(n, he);
            r.removeClass(n, ve);
            J(E, false);
            G(E, false);
            Ee(S, function (e) {
              E.style[e[0]] = ""
            });
            b(n, m);
            I(n, m);
            Object.keys(w).length && Ee(w, function (e, t) {
              e ? E.style.setProperty(t, e) : E.style.removeProperty(t)
            });
            m.onDone && m.onDone();
            X && X.length && n.off(X.join(" "), Ve);
            var t = n.data(Z);
            if (t) {
              l.cancel(t[0].timer);
              n.removeData(Z)
            }
            R && R.complete(!e)
          }

          function Le(e) {
            De.blockTransition && G(E, e);
            De.blockKeyframeAnimation && J(E, !!e)
          }

          function Ie() {
            R = new u({end: Pe, cancel: _e});
            A(Ne);
            Re();
            return {
              $$willAnimate: false, start: function () {
                return R
              }, end: Pe
            }
          }

          function Ve(e) {
            e.stopPropagation();
            var t = e.originalEvent || e;
            if (t.target !== E) return;
            var n = t.$manualTimeStamp || Date.now();
            var r = parseFloat(t.elapsedTime.toFixed(te));
            if (Math.max(n - K, 0) >= z && r >= W) {
              _ = true;
              Re()
            }
          }

          function Fe() {
            if (q) return;
            if (!E.parentNode) {
              Re();
              return
            }
            var e = function (e) {
              if (_) {
                if (P && e) {
                  P = false;
                  Re()
                }
              } else {
                P = !e;
                if (je.animationDuration) {
                  var t = J(E, P);
                  P ? S.push(t) : D(S, t)
                }
              }
            };
            var t = Te > 0 && (je.transitionDuration && 0 === ye.transitionDuration || je.animationDuration && 0 === ye.animationDuration) && Math.max(ye.animationDelay, ye.transitionDelay);
            t ? l(i, Math.floor(t * Te * ee), false) : i();
            U.resume = function () {
              e(true)
            };
            U.pause = function () {
              e(false)
            };

            function i() {
              if (q) return;
              Le(false);
              Ee(S, function (e) {
                var t = e[0];
                var n = e[1];
                E.style[t] = n
              });
              b(n, m);
              r.addClass(n, ve);
              if (De.recalculateTimingStyles) {
                de = E.getAttribute("class") + " " + he;
                $e = C(E, de);
                je = T(E, de, $e);
                Me = je.maxDelay;
                H = Math.max(Me, 0);
                W = je.maxDuration;
                if (0 === W) {
                  Re();
                  return
                }
                De.hasTransitions = je.transitionDuration > 0;
                De.hasAnimations = je.animationDuration > 0
              }
              if (De.applyAnimationDelay) {
                Me = "boolean" !== typeof m.delay && le(m.delay) ? parseFloat(m.delay) : Me;
                H = Math.max(Me, 0);
                je.animationDelay = Me;
                qe = oe(Me, true);
                S.push(qe);
                E.style[qe[0]] = qe[1]
              }
              z = H * ee;
              Y = W * ee;
              if (m.easing) {
                var e, t = m.easing;
                if (De.hasTransitions) {
                  e = p + y;
                  S.push([e, t]);
                  E.style[e] = t
                }
                if (De.hasAnimations) {
                  e = d + y;
                  S.push([e, t]);
                  E.style[e] = t
                }
              }
              je.transitionDuration && X.push(h);
              je.animationDuration && X.push(v);
              K = Date.now();
              var i = z + ne * Y;
              var o = K + i;
              var s = n.data(Z) || [];
              var u = true;
              if (s.length) {
                var c = s[0];
                u = o > c.expectedEndTime;
                u ? l.cancel(c.timer) : s.push(Re)
              }
              if (u) {
                var f = l(a, i, false);
                s[0] = {timer: f, expectedEndTime: o};
                s.push(Re);
                n.data(Z, s)
              }
              X.length && n.on(X.join(" "), Ve);
              if (m.to) {
                m.cleanupStyles && pe(w, E, Object.keys(m.to));
                F(n, m)
              }
            }

            function a() {
              var e = n.data(Z);
              if (e) {
                for (var t = 1; t < e.length; t++) e[t]();
                n.removeData(Z)
              }
            }
          }
        }
      }]
    }];
    var de = ["$$animationProvider", function (e) {
      e.drivers.push("$$animateCssDriver");
      var t = "ng-animate-shim";
      var n = "ng-anchor";
      var r = "ng-anchor-out";
      var i = "ng-anchor-in";

      function a(e) {
        return e.parentNode && 11 === e.parentNode.nodeType
      }

      this.$get = ["$animateCss", "$rootScope", "$$AnimateRunner", "$rootElement", "$sniffer", "$$jqLite", "$document", function (e, o, s, u, l, c, f) {
        if (!l.animations && !l.transitions) return Ne;
        var p = f[0].body;
        var h = B(u);
        var d = De(a(h) || p.contains(h) ? h : p);
        return function e(t) {
          return t.from && t.to ? $(t.from, t.to, t.classes, t.anchors) : y(t)
        };

        function v(e) {
          return e.replace(/\bng-\S+\b/g, "")
        }

        function m(e, t) {
          je(e) && (e = e.split(" "));
          je(t) && (t = t.split(" "));
          return e.filter(function (e) {
            return -1 === t.indexOf(e)
          }).join(" ")
        }

        function g(a, o, u) {
          var l = De(B(o).cloneNode(true));
          var c = v(b(l));
          o.addClass(t);
          u.addClass(t);
          l.addClass(n);
          d.append(l);
          var f, h = y();
          if (!h) {
            f = w();
            if (!f) return x()
          }
          var g = h || f;
          return {
            start: function () {
              var e;
              var t = g.start();
              t.done(function () {
                t = null;
                if (!f) {
                  f = w();
                  if (f) {
                    t = f.start();
                    t.done(function () {
                      t = null;
                      x();
                      e.complete()
                    });
                    return t
                  }
                }
                x();
                e.complete()
              });
              e = new s({end: n, cancel: n});
              return e;

              function n() {
                t && t.end()
              }
            }
          };

          function $(e) {
            var t = {};
            var n = B(e).getBoundingClientRect();
            Ee(["width", "height", "top", "left"], function (e) {
              var r = n[e];
              switch (e) {
                case"top":
                  r += p.scrollTop;
                  break;
                case"left":
                  r += p.scrollLeft;
                  break
              }
              t[e] = Math.floor(r) + "px"
            });
            return t
          }

          function y() {
            var t = e(l, {addClass: r, delay: true, from: $(o)});
            return t.$$willAnimate ? t : null
          }

          function b(e) {
            return e.attr("class") || ""
          }

          function w() {
            var t = v(b(u));
            var n = m(t, c);
            var a = m(c, t);
            var o = e(l, {to: $(u), addClass: i + " " + n, removeClass: r + " " + a, delay: true});
            return o.$$willAnimate ? o : null
          }

          function x() {
            l.remove();
            o.removeClass(t);
            u.removeClass(t)
          }
        }

        function $(e, t, n, r) {
          var i = y(e, Ne);
          var a = y(t, Ne);
          var o = [];
          Ee(r, function (e) {
            var t = e["out"];
            var r = e["in"];
            var i = g(n, t, r);
            i && o.push(i)
          });
          if (!i && !a && 0 === o.length) return;
          return {
            start: function () {
              var e = [];
              i && e.push(i.start());
              a && e.push(a.start());
              Ee(o, function (t) {
                e.push(t.start())
              });
              var t = new s({end: n, cancel: n});
              s.all(e, function (e) {
                t.complete(e)
              });
              return t;

              function n() {
                Ee(e, function (e) {
                  e.end()
                })
              }
            }
          }
        }

        function y(t) {
          var n = t.element;
          var r = t.options || {};
          if (t.structural) {
            r.event = t.event;
            r.structural = true;
            r.applyClassesEarly = true;
            "leave" === t.event && (r.onDone = r.domOperation)
          }
          r.preparationClasses && (r.event = Y(r.event, r.preparationClasses));
          var i = e(n, r);
          return i.$$willAnimate ? i : null
        }
      }]
    }];
    var ve = ["$animateProvider", function (e) {
      this.$get = ["$injector", "$$AnimateRunner", "$$jqLite", function (t, n, r) {
        var i = R(r);
        return function (e, t, r, o) {
          var s = false;
          if (3 === arguments.length && Oe(r)) {
            o = r;
            r = null
          }
          o = L(o);
          if (!r) {
            r = e.attr("class") || "";
            o.addClass && (r += " " + o.addClass);
            o.removeClass && (r += " " + o.removeClass)
          }
          var u = o.addClass;
          var l = o.removeClass;
          var c = a(r);
          var f, p;
          if (c.length) {
            var h, d;
            if ("leave" === t) {
              d = "leave";
              h = "afterLeave"
            } else {
              d = "before" + t.charAt(0).toUpperCase() + t.substr(1);
              h = t
            }
            "enter" !== t && "move" !== t && (f = b(e, t, o, c, d));
            p = b(e, t, o, c, h)
          }
          if (!f && !p) return;

          function v() {
            o.domOperation();
            i(e, o)
          }

          function m() {
            s = true;
            v();
            I(e, o)
          }

          var g;
          return {
            $$willAnimate: true, end: function () {
              if (g) g.end(); else {
                m();
                g = new n;
                g.complete(true)
              }
              return g
            }, start: function () {
              if (g) return g;
              g = new n;
              var e;
              var t = [];
              f && t.push(function (t) {
                e = f(t)
              });
              t.length ? t.push(function (e) {
                v();
                e(true)
              }) : v();
              p && t.push(function (t) {
                e = p(t)
              });
              g.setHost({
                end: function () {
                  i()
                }, cancel: function () {
                  i(true)
                }
              });
              n.chain(t, r);
              return g;

              function r(e) {
                m(e);
                g.complete(e)
              }

              function i(t) {
                if (!s) {
                  (e || Ne)(t);
                  r(t)
                }
              }
            }
          };

          function $(e, t, r, i, a) {
            var o;
            switch (r) {
              case"animate":
                o = [t, i.from, i.to, a];
                break;
              case"setClass":
                o = [t, u, l, a];
                break;
              case"addClass":
                o = [t, u, a];
                break;
              case"removeClass":
                o = [t, l, a];
                break;
              default:
                o = [t, a];
                break
            }
            o.push(i);
            var s = e.apply(e, o);
            if (s) {
              Te(s.start) && (s = s.start());
              if (s instanceof n) s.done(a); else if (Te(s)) return s
            }
            return Ne
          }

          function y(e, t, r, i, a) {
            var o = [];
            Ee(i, function (i) {
              var s = i[a];
              if (!s) return;
              o.push(function () {
                var i;
                var a;
                var o = false;
                var u = function (e) {
                  if (!o) {
                    o = true;
                    (a || Ne)(e);
                    i.complete(!e)
                  }
                };
                i = new n({
                  end: function () {
                    u()
                  }, cancel: function () {
                    u(true)
                  }
                });
                a = $(s, e, t, r, function (e) {
                  var t = false === e;
                  u(t)
                });
                return i
              })
            });
            return o
          }

          function b(e, t, r, i, a) {
            var o = y(e, t, r, i, a);
            if (0 === o.length) {
              var s, u;
              if ("beforeSetClass" === a) {
                s = y(e, "removeClass", r, i, "beforeRemoveClass");
                u = y(e, "addClass", r, i, "beforeAddClass")
              } else if ("setClass" === a) {
                s = y(e, "removeClass", r, i, "removeClass");
                u = y(e, "addClass", r, i, "addClass")
              }
              s && (o = o.concat(s));
              u && (o = o.concat(u))
            }
            if (0 === o.length) return;
            return function e(t) {
              var r = [];
              o.length && Ee(o, function (e) {
                r.push(e())
              });
              r.length ? n.all(r, t) : t();
              return function e(t) {
                Ee(r, function (e) {
                  t ? e.cancel() : e.end()
                })
              }
            }
          }
        };

        function a(n) {
          n = ke(n) ? n : n.split(" ");
          var r = [], i = {};
          for (var a = 0; a < n.length; a++) {
            var o = n[a], s = e.$$registeredAnimations[o];
            if (s && !i[o]) {
              r.push(t.get(s));
              i[o] = true
            }
          }
          return r
        }
      }]
    }];
    var me = ["$$animationProvider", function (e) {
      e.drivers.push("$$animateJsDriver");
      this.$get = ["$$animateJs", "$$AnimateRunner", function (e, t) {
        return function e(r) {
          if (r.from && r.to) {
            var i = n(r.from);
            var a = n(r.to);
            if (!i && !a) return;
            return {
              start: function () {
                var e = [];
                i && e.push(i.start());
                a && e.push(a.start());
                t.all(e, o);
                var n = new t({end: r(), cancel: r()});
                return n;

                function r() {
                  return function () {
                    Ee(e, function (e) {
                      e.end()
                    })
                  }
                }

                function o(e) {
                  n.complete(e)
                }
              }
            }
          }
          return n(r)
        };

        function n(t) {
          var n = t.element;
          var r = t.event;
          var i = t.options;
          var a = t.classes;
          return e(n, r, a, i)
        }
      }]
    }];
    var ge = "data-ng-animate";
    var $e = "$ngAnimatePin";
    var ye = ["$animateProvider", function (t) {
      var r = 1;
      var i = 2;
      var a = " ";
      var o = this.rules = {skip: [], cancel: [], join: []};

      function s(e) {
        if (!e) return null;
        var t = e.split(a);
        var n = Object.create(null);
        Ee(t, function (e) {
          n[e] = true
        });
        return n
      }

      function u(e, t) {
        if (e && t) {
          var n = s(t);
          return e.split(a).some(function (e) {
            return n[e]
          })
        }
      }

      function l(e, t, n) {
        return o[e].some(function (e) {
          return e(t, n)
        })
      }

      function f(e, t) {
        var n = (e.addClass || "").length > 0;
        var r = (e.removeClass || "").length > 0;
        return t ? n && r : n || r
      }

      o.join.push(function (e, t) {
        return !e.structural && f(e)
      });
      o.skip.push(function (e, t) {
        return !e.structural && !f(e)
      });
      o.skip.push(function (e, t) {
        return "leave" === t.event && e.structural
      });
      o.skip.push(function (e, t) {
        return t.structural && t.state === i && !e.structural
      });
      o.cancel.push(function (e, t) {
        return t.structural && e.structural
      });
      o.cancel.push(function (e, t) {
        return t.state === i && e.structural
      });
      o.cancel.push(function (e, t) {
        if (t.structural) return false;
        var n = e.addClass;
        var r = e.removeClass;
        var i = t.addClass;
        var a = t.removeClass;
        if (Me(n) && Me(r) || Me(i) && Me(a)) return false;
        return u(n, a) || u(r, i)
      });
      this.$get = ["$$rAF", "$rootScope", "$rootElement", "$document", "$$Map", "$$animation", "$$AnimateRunner", "$templateRequest", "$$jqLite", "$$forceReflow", "$$isDocumentHidden", function (a, o, s, u, p, h, d, v, m, g, $) {
        var y = new p;
        var b = new p;
        var w = null;

        function x() {
          var e = false;
          return function (t) {
            e ? t() : o.$$postDigest(function () {
              e = true;
              t()
            })
          }
        }

        var C = o.$watch(function () {
          return 0 === v.totalPendingRequests
        }, function (e) {
          if (!e) return;
          C();
          o.$$postDigest(function () {
            o.$$postDigest(function () {
              null === w && (w = true)
            })
          })
        });
        var E = Object.create(null);
        var k = t.customFilter();
        var S = t.classNameFilter();
        var A = function () {
          return true
        };
        var O = k || A;
        var j = S ? function (e, t) {
          var n = [e.getAttribute("class"), t.addClass, t.removeClass].join(" ");
          return S.test(n)
        } : A;
        var M = R(m);

        function D(e, t) {
          return U(e, t, {})
        }

        var P = e.Node.prototype.contains || function (e) {
          return this === e || !!(16 & this.compareDocumentPosition(e))
        };

        function _(e, t, n) {
          var r = [];
          var i = E[n];
          i && Ee(i, function (i) {
            P.call(i.node, t) ? r.push(i.callback) : "leave" === n && P.call(i.node, e) && r.push(i.callback)
          });
          return r
        }

        function V(e, t, n) {
          var r = q(t);
          return e.filter(function (e) {
            var t = e.node === r && (!n || e.callback === n);
            return !t
          })
        }

        function F(e, t) {
          "close" !== e || t.parentNode || H.off(t)
        }

        var H = {
          on: function (e, t, n) {
            var r = q(t);
            E[e] = E[e] || [];
            E[e].push({node: r, callback: n});
            De(t).on("$destroy", function () {
              var i = y.get(r);
              i || H.off(e, t, n)
            })
          }, off: function (e, t, n) {
            if (1 === arguments.length && !je(arguments[0])) {
              t = arguments[0];
              for (var r in E) E[r] = V(E[r], t);
              return
            }
            var i = E[e];
            if (!i) return;
            E[e] = 1 === arguments.length ? null : V(i, t, n)
          }, pin: function (e, t) {
            T(Ae(e), "element", "not an element");
            T(Ae(t), "parentElement", "not an element");
            e.data($e, t)
          }, push: function (e, t, n, r) {
            n = n || {};
            n.domOperation = r;
            return G(e, t, n)
          }, enabled: function (e, t) {
            var n = arguments.length;
            if (0 === n) t = !!w; else {
              var r = Ae(e);
              if (r) {
                var i = B(e);
                1 === n ? t = !b.get(i) : b.set(i, !t)
              } else t = w = !!e
            }
            return t
          }
        };
        return H;

        function G(e, t, n) {
          var s = xe(n);
          var u = N(e);
          var c = B(u);
          var p = c && c.parentNode;
          s = L(s);
          var v = new d;
          var m = x();
          ke(s.addClass) && (s.addClass = s.addClass.join(" "));
          s.addClass && !je(s.addClass) && (s.addClass = null);
          ke(s.removeClass) && (s.removeClass = s.removeClass.join(" "));
          s.removeClass && !je(s.removeClass) && (s.removeClass = null);
          s.from && !Oe(s.from) && (s.from = null);
          s.to && !Oe(s.to) && (s.to = null);
          if (!w || !c || !O(c, t, n) || !j(c, s)) {
            G();
            return v
          }
          var g = ["enter", "move", "leave"].indexOf(t) >= 0;
          var C = $();
          var E = C || b.get(c);
          var k = !E && y.get(c) || {};
          var S = !!k.state;
          E || S && k.state === r || (E = !Y(c, p, t));
          if (E) {
            C && H(v, t, "start");
            G();
            C && H(v, t, "close");
            return v
          }
          g && J(c);
          var A = {
            structural: g,
            element: u,
            event: t,
            addClass: s.addClass,
            removeClass: s.removeClass,
            close: G,
            options: s,
            runner: v
          };
          if (S) {
            var T = l("skip", A, k);
            if (T) {
              if (k.state === i) {
                G();
                return v
              }
              U(u, k, A);
              return k.runner
            }
            var q = l("cancel", A, k);
            if (q) if (k.state === i) k.runner.end(); else {
              if (!k.structural) {
                U(u, k, A);
                return k.runner
              }
              k.close()
            } else {
              var P = l("join", A, k);
              if (P) {
                if (k.state !== i) {
                  z(u, g ? t : null, s);
                  t = A.event = k.event;
                  s = U(u, k, A);
                  return k.runner
                }
                D(u, A)
              }
            }
          } else D(u, A);
          var R = A.structural;
          R || (R = "animate" === A.event && Object.keys(A.options.to || {}).length > 0 || f(A));
          if (!R) {
            G();
            Q(c);
            return v
          }
          var V = (k.counter || 0) + 1;
          A.counter = V;
          K(c, r, A);
          o.$$postDigest(function () {
            u = N(e);
            var n = y.get(c);
            var r = !n;
            n = n || {};
            var a = u.parent() || [];
            var o = a.length > 0 && ("animate" === n.event || n.structural || f(n));
            if (r || n.counter !== V || !o) {
              if (r) {
                M(u, s);
                I(u, s)
              }
              if (r || g && n.event !== t) {
                s.domOperation();
                v.end()
              }
              o || Q(c);
              return
            }
            t = !n.structural && f(n, true) ? "setClass" : n.event;
            K(c, i);
            var l = h(u, t, n.options);
            v.setHost(l);
            H(v, t, "start", {});
            l.done(function (e) {
              G(!e);
              var n = y.get(c);
              n && n.counter === V && Q(c);
              H(v, t, "close", {})
            })
          });
          return v;

          function H(e, t, n, r) {
            m(function () {
              var e = _(p, c, t);
              e.length ? a(function () {
                Ee(e, function (e) {
                  e(u, n, r)
                });
                F(n, c)
              }) : F(n, c)
            });
            e.progress(t, n, r)
          }

          function G(e) {
            W(u, s);
            M(u, s);
            I(u, s);
            s.domOperation();
            v.complete(!e)
          }
        }

        function J(e) {
          var t = e.querySelectorAll("[" + ge + "]");
          Ee(t, function (e) {
            var t = parseInt(e.getAttribute(ge), 10);
            var n = y.get(e);
            if (n) switch (t) {
              case i:
                n.runner.end();
              case r:
                y.delete(e);
                break
            }
          })
        }

        function Q(e) {
          e.removeAttribute(ge);
          y.delete(e)
        }

        function Y(e, t, r) {
          var i = u[0].body;
          var a = B(s);
          var o = e === i || "HTML" === e.nodeName;
          var l = e === a;
          var f = false;
          var p = b.get(e);
          var h;
          var d = De.data(e, $e);
          d && (t = B(d));
          while (t) {
            l || (l = t === a);
            if (t.nodeType !== n) break;
            var v = y.get(t) || {};
            if (!f) {
              var m = b.get(t);
              if (true === m && false !== p) {
                p = true;
                break
              }
              false === m && (p = false);
              f = v.structural
            }
            if (Me(h) || true === h) {
              var g = De.data(t, c);
              Se(g) && (h = g)
            }
            if (f && false === h) break;
            o || (o = t === i);
            if (o && l) break;
            if (!l) {
              d = De.data(t, $e);
              if (d) {
                t = B(d);
                continue
              }
            }
            t = t.parentNode
          }
          var $ = (!f || h) && true !== p;
          return $ && l && o
        }

        function K(e, t, n) {
          n = n || {};
          n.state = t;
          e.setAttribute(ge, t);
          var r = y.get(e);
          var i = r ? Ce(r, n) : n;
          y.set(e, i)
        }
      }]
    }];
    var be = ["$animateProvider", function (e) {
      var t = "ng-animate-ref";
      var n = this.drivers = [];
      var r = "$$animationRunner";

      function i(e, t) {
        e.data(r, t)
      }

      function a(e) {
        e.removeData(r)
      }

      function o(e) {
        return e.data(r)
      }

      this.$get = ["$$jqLite", "$rootScope", "$injector", "$$AnimateRunner", "$$Map", "$$rAFScheduler", function (e, r, s, c, f, p) {
        var h = [];
        var d = R(e);

        function v(e) {
          var t = {children: []};
          var n, r = new f;
          for (n = 0; n < e.length; n++) {
            var i = e[n];
            r.set(i.domNode, e[n] = {domNode: i.domNode, fn: i.fn, children: []})
          }
          for (n = 0; n < e.length; n++) a(e[n]);
          return o(t);

          function a(e) {
            if (e.processed) return e;
            e.processed = true;
            var n = e.domNode;
            var i = n.parentNode;
            r.set(n, e);
            var o;
            while (i) {
              o = r.get(i);
              if (o) {
                o.processed || (o = a(o));
                break
              }
              i = i.parentNode
            }
            (o || t).children.push(e);
            return e
          }

          function o(e) {
            var t = [];
            var n = [];
            var r;
            for (r = 0; r < e.children.length; r++) n.push(e.children[r]);
            var i = n.length;
            var a = 0;
            var o = [];
            for (r = 0; r < n.length; r++) {
              var s = n[r];
              if (i <= 0) {
                i = a;
                a = 0;
                t.push(o);
                o = []
              }
              o.push(s.fn);
              s.children.forEach(function (e) {
                a++;
                n.push(e)
              });
              i--
            }
            o.length && t.push(o);
            return t
          }
        }

        return function (f, m, g) {
          g = L(g);
          var $ = ["enter", "move", "leave"].indexOf(m) >= 0;
          var y = new c({
            end: function () {
              M()
            }, cancel: function () {
              M(true)
            }
          });
          if (!n.length) {
            M();
            return y
          }
          i(f, y);
          var b = O(f.attr("class"), O(g.addClass, g.removeClass));
          var w = g.tempClasses;
          if (w) {
            b += " " + w;
            g.tempClasses = null
          }
          var x;
          if ($) {
            x = "ng-" + m + u;
            e.addClass(f, x)
          }
          h.push({element: f, classes: b, event: m, structural: $, options: g, beforeStart: A, close: M});
          f.on("$destroy", j);
          if (h.length > 1) return y;
          r.$$postDigest(function () {
            var e = [];
            Ee(h, function (t) {
              o(t.element) ? e.push(t) : t.close()
            });
            h.length = 0;
            var t = E(e);
            var n = [];
            Ee(t, function (e) {
              n.push({
                domNode: B(e.from ? e.from.element : e.element), fn: function t() {
                  e.beforeStart();
                  var n, r = e.close;
                  var i = e.anchors ? e.from.element || e.to.element : e.element;
                  if (o(i)) {
                    var a = S(e);
                    a && (n = a.start)
                  }
                  if (n) {
                    var s = n();
                    s.done(function (e) {
                      r(!e)
                    });
                    T(e, s)
                  } else r()
                }
              })
            });
            p(v(n))
          });
          return y;

          function C(e) {
            var n = "[" + t + "]";
            var r = e.hasAttribute(t) ? [e] : e.querySelectorAll(n);
            var i = [];
            Ee(r, function (e) {
              var n = e.getAttribute(t);
              n && n.length && i.push(e)
            });
            return i
          }

          function E(e) {
            var n = [];
            var r = {};
            Ee(e, function (e, i) {
              var a = e.element;
              var o = B(a);
              var s = e.event;
              var u = ["enter", "move"].indexOf(s) >= 0;
              var l = e.structural ? C(o) : [];
              if (l.length) {
                var c = u ? "to" : "from";
                Ee(l, function (e) {
                  var n = e.getAttribute(t);
                  r[n] = r[n] || {};
                  r[n][c] = {animationID: i, element: De(e)}
                })
              } else n.push(e)
            });
            var i = {};
            var a = {};
            Ee(r, function (t, r) {
              var o = t.from;
              var s = t.to;
              if (!o || !s) {
                var u = o ? o.animationID : s.animationID;
                var l = u.toString();
                if (!i[l]) {
                  i[l] = true;
                  n.push(e[u])
                }
                return
              }
              var c = e[o.animationID];
              var f = e[s.animationID];
              var p = o.animationID.toString();
              if (!a[p]) {
                var h = a[p] = {
                  structural: true, beforeStart: function () {
                    c.beforeStart();
                    f.beforeStart()
                  }, close: function () {
                    c.close();
                    f.close()
                  }, classes: k(c.classes, f.classes), from: c, to: f, anchors: []
                };
                if (h.classes.length) n.push(h); else {
                  n.push(c);
                  n.push(f)
                }
              }
              a[p].anchors.push({out: o.element, in: s.element})
            });
            return n
          }

          function k(e, t) {
            e = e.split(" ");
            t = t.split(" ");
            var n = [];
            for (var r = 0; r < e.length; r++) {
              var i = e[r];
              if ("ng-" === i.substring(0, 3)) continue;
              for (var a = 0; a < t.length; a++) if (i === t[a]) {
                n.push(i);
                break
              }
            }
            return n.join(" ")
          }

          function S(e) {
            for (var t = n.length - 1; t >= 0; t--) {
              var r = n[t];
              var i = s.get(r);
              var a = i(e);
              if (a) return a
            }
          }

          function A() {
            f.addClass(l);
            w && e.addClass(f, w);
            if (x) {
              e.removeClass(f, x);
              x = null
            }
          }

          function T(e, t) {
            if (e.from && e.to) {
              n(e.from.element);
              n(e.to.element)
            } else n(e.element);

            function n(e) {
              var n = o(e);
              n && n.setHost(t)
            }
          }

          function j() {
            var e = o(f);
            !e || "leave" === m && g.$$domOperationFired || e.end()
          }

          function M(t) {
            f.off("$destroy", j);
            a(f);
            d(f, g);
            I(f, g);
            g.domOperation();
            w && e.removeClass(f, w);
            f.removeClass(l);
            y.complete(!t)
          }
        }
      }]
    }];
    var we = ["$animate", function (e) {
      return {
        restrict: "A", transclude: "element", terminal: true, priority: 600, link: function (t, n, r, i, a) {
          var o, s;
          t.$watchCollection(r.ngAnimateSwap || r["for"], function (t) {
            o && e.leave(o);
            if (s) {
              s.$destroy();
              s = null
            }
            (t || 0 === t) && a(function (t, r) {
              o = t;
              s = r;
              e.enter(t, null, n)
            })
          })
        }
      }
    }];
    var xe;
    var Ce;
    var Ee;
    var ke;
    var Se;
    var Ae;
    var Te;
    var Oe;
    var je;
    var Me;
    var De;
    var Ne;
    t.module("ngAnimate", [], function e() {
      Ne = t.noop;
      xe = t.copy;
      Ce = t.extend;
      De = t.element;
      Ee = t.forEach;
      ke = t.isArray;
      je = t.isString;
      Oe = t.isObject;
      Me = t.isUndefined;
      Se = t.isDefined;
      Te = t.isFunction;
      Ae = t.isElement
    }).info({angularVersion: "1.7.2"}).directive("ngAnimateSwap", we).directive("ngAnimateChildren", X).factory("$$rAFScheduler", K).provider("$$animateQueue", ye).provider("$$animation", be).provider("$animateCss", he).provider("$$animateCssDriver", de).provider("$$animateJs", ve).provider("$$animateJsDriver", me)
  })(window, window.angular)
}, function (e, t, n) {
  n(59);
  e.exports = "ngRoute"
}, function (e, t) {
  /**
   * @license AngularJS v1.7.2
   * (c) 2010-2018 Google, Inc. http://angularjs.org
   * License: MIT
   */
  (function (e, t) {
    "use strict";

    function n(e, t) {
      if (r(e)) {
        t = t || [];
        for (var n = 0, a = e.length; n < a; n++) t[n] = e[n]
      } else if (i(e)) {
        t = t || {};
        for (var o in e) "$" === o.charAt(0) && "$" === o.charAt(1) || (t[o] = e[o])
      }
      return t || e
    }

    var r;
    var i;
    var a;
    var o;
    var s = t.module("ngRoute", []).info({angularVersion: "1.7.2"}).provider("$route", c).run(f);
    var u = t.$$minErr("ngRoute");
    var l;

    function c() {
      r = t.isArray;
      i = t.isObject;
      a = t.isDefined;
      o = t.noop;

      function e(e, n) {
        return t.extend(Object.create(e), n)
      }

      var s = {};
      this.when = function (e, r) {
        var i = n(r);
        t.isUndefined(i.reloadOnUrl) && (i.reloadOnUrl = true);
        t.isUndefined(i.reloadOnSearch) && (i.reloadOnSearch = true);
        t.isUndefined(i.caseInsensitiveMatch) && (i.caseInsensitiveMatch = this.caseInsensitiveMatch);
        s[e] = t.extend(i, e && c(e, i));
        if (e) {
          var a = "/" === e[e.length - 1] ? e.substr(0, e.length - 1) : e + "/";
          s[a] = t.extend({redirectTo: e}, c(a, i))
        }
        return this
      };
      this.caseInsensitiveMatch = false;

      function c(e, t) {
        var n = t.caseInsensitiveMatch, r = {originalPath: e, regexp: e}, i = r.keys = [];
        e = e.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)(\*\?|[?*])?/g, function (e, t, n, r) {
          var a = "?" === r || "*?" === r ? "?" : null;
          var o = "*" === r || "*?" === r ? "*" : null;
          i.push({name: n, optional: !!a});
          t = t || "";
          return (a ? "" : t) + "(?:" + (a ? t : "") + (o ? "(.+?)" : "([^/]+)") + (a || "") + ")" + (a || "")
        }).replace(/([/$*])/g, "\\$1");
        r.regexp = new RegExp("^" + e + "$", n ? "i" : "");
        return r
      }

      this.otherwise = function (e) {
        "string" === typeof e && (e = {redirectTo: e});
        this.when(null, e);
        return this
      };
      l = true;
      this.eagerInstantiationEnabled = function e(t) {
        if (a(t)) {
          l = t;
          return this
        }
        return l
      };
      this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$templateRequest", "$sce", "$browser", function (n, r, i, a, l, c, f, p) {
        var h = false, d, v, m = {
          routes: s, reload: function () {
            h = true;
            var e = {
              defaultPrevented: false, preventDefault: function e() {
                this.defaultPrevented = true;
                h = false
              }
            };
            n.$evalAsync(function () {
              $(e);
              e.defaultPrevented || y()
            })
          }, updateParams: function (e) {
            if (!this.current || !this.current.$$route) throw u("norout", "Tried updating route with no current route");
            e = t.extend({}, this.current.params, e);
            r.path(S(this.current.$$route.originalPath, e));
            r.search(e)
          }
        };
        n.$on("$locationChangeStart", $);
        n.$on("$locationChangeSuccess", y);
        return m;

        function g(e, t) {
          var n = t.keys, r = {};
          if (!t.regexp) return null;
          var i = t.regexp.exec(e);
          if (!i) return null;
          for (var a = 1, o = i.length; a < o; ++a) {
            var s = n[a - 1];
            var u = i[a];
            s && u && (r[s.name] = u)
          }
          return r
        }

        function $(e) {
          var t = m.current;
          d = E();
          v = k(d, t);
          v || !t && !d || n.$broadcast("$routeChangeStart", d, t).defaultPrevented && e && e.preventDefault()
        }

        function y() {
          var e = m.current;
          var r = d;
          if (v) {
            e.params = r.params;
            t.copy(e.params, i);
            n.$broadcast("$routeUpdate", e)
          } else if (r || e) {
            h = false;
            m.current = r;
            var s = a.resolve(r);
            p.$$incOutstandingRequestCount();
            s.then(b).then(w).then(function (a) {
              return a && s.then(x).then(function (a) {
                if (r === m.current) {
                  if (r) {
                    r.locals = a;
                    t.copy(r.params, i)
                  }
                  n.$broadcast("$routeChangeSuccess", r, e)
                }
              })
            }).catch(function (t) {
              r === m.current && n.$broadcast("$routeChangeError", r, e, t)
            }).finally(function () {
              p.$$completeOutstandingRequest(o)
            })
          }
        }

        function b(e) {
          var n = {route: e, hasRedirection: false};
          if (e) if (e.redirectTo) if (t.isString(e.redirectTo)) {
            n.path = S(e.redirectTo, e.params);
            n.search = e.params;
            n.hasRedirection = true
          } else {
            var i = r.path();
            var o = r.search();
            var s = e.redirectTo(e.pathParams, i, o);
            if (t.isDefined(s)) {
              n.url = s;
              n.hasRedirection = true
            }
          } else if (e.resolveRedirectTo) return a.resolve(l.invoke(e.resolveRedirectTo)).then(function (e) {
            if (t.isDefined(e)) {
              n.url = e;
              n.hasRedirection = true
            }
            return n
          });
          return n
        }

        function w(e) {
          var t = true;
          if (e.route !== m.current) t = false; else if (e.hasRedirection) {
            var n = r.url();
            var i = e.url;
            i ? r.url(i).replace() : i = r.path(e.path).search(e.search).replace().url();
            i !== n && (t = false)
          }
          return t
        }

        function x(e) {
          if (e) {
            var n = t.extend({}, e.resolve);
            t.forEach(n, function (e, r) {
              n[r] = t.isString(e) ? l.get(e) : l.invoke(e, null, null, r)
            });
            var r = C(e);
            t.isDefined(r) && (n["$template"] = r);
            return a.all(n)
          }
        }

        function C(e) {
          var n, r;
          if (t.isDefined(n = e.template)) t.isFunction(n) && (n = n(e.params)); else if (t.isDefined(r = e.templateUrl)) {
            t.isFunction(r) && (r = r(e.params));
            if (t.isDefined(r)) {
              e.loadedTemplateUrl = f.valueOf(r);
              n = c(r)
            }
          }
          return n
        }

        function E() {
          var n, i;
          t.forEach(s, function (a, o) {
            if (!i && (n = g(r.path(), a))) {
              i = e(a, {params: t.extend({}, r.search(), n), pathParams: n});
              i.$$route = a
            }
          });
          return i || s[null] && e(s[null], {params: {}, pathParams: {}})
        }

        function k(e, n) {
          return !h && e && n && e.$$route === n.$$route && (!e.reloadOnUrl || !e.reloadOnSearch && t.equals(e.pathParams, n.pathParams))
        }

        function S(e, n) {
          var r = [];
          t.forEach((e || "").split(":"), function (e, t) {
            if (0 === t) r.push(e); else {
              var i = e.match(/(\w+)(?:[?*])?(.*)/);
              var a = i[1];
              r.push(n[a]);
              r.push(i[2] || "");
              delete n[a]
            }
          });
          return r.join("")
        }
      }]
    }

    f.$inject = ["$injector"];

    function f(e) {
      l && e.get("$route")
    }

    s.provider("$routeParams", p);

    function p() {
      this.$get = function () {
        return {}
      }
    }

    s.directive("ngView", h);
    s.directive("ngView", d);
    h.$inject = ["$route", "$anchorScroll", "$animate"];

    function h(e, n, r) {
      return {
        restrict: "ECA", terminal: true, priority: 400, transclude: "element", link: function (i, a, o, s, u) {
          var l, c, f, p = o.autoscroll, h = o.onload || "";
          i.$on("$routeChangeSuccess", v);
          v();

          function d() {
            if (f) {
              r.cancel(f);
              f = null
            }
            if (l) {
              l.$destroy();
              l = null
            }
            if (c) {
              f = r.leave(c);
              f.done(function (e) {
                false !== e && (f = null)
              });
              c = null
            }
          }

          function v() {
            var o = e.current && e.current.locals, s = o && o.$template;
            if (t.isDefined(s)) {
              var f = i.$new();
              var v = e.current;
              var m = u(f, function (e) {
                r.enter(e, null, c || a).done(function e(r) {
                  false === r || !t.isDefined(p) || p && !i.$eval(p) || n()
                });
                d()
              });
              c = m;
              l = v.scope = f;
              l.$emit("$viewContentLoaded");
              l.$eval(h)
            } else d()
          }
        }
      }
    }

    d.$inject = ["$compile", "$controller", "$route"];

    function d(e, t, n) {
      return {
        restrict: "ECA", priority: -400, link: function (r, i) {
          var a = n.current, o = a.locals;
          i.html(o.$template);
          var s = e(i.contents());
          if (a.controller) {
            o.$scope = r;
            var u = t(a.controller, o);
            a.controllerAs && (r[a.controllerAs] = u);
            i.data("$ngControllerController", u);
            i.children().data("$ngControllerController", u)
          }
          r[a.resolveAs || "$resolve"] = o;
          s(r)
        }
      }
    }
  })(window, window.angular)
}, , , , , , , , , , , function (e, t, n) {
  "use strict";
  var r = l(n(12));
  var i = l(n(11));
  var a = n(13);
  var o = l(n(49));
  var s = l(n(48));
  var u = l(n(50));
  n(53);
  n(58);
  n(51);
  n(8);

  function l(e) {
    return e && e.__esModule ? e : {default: e}
  }

  function c(e, t, n, r, i, a, o) {
    try {
      var s = e[a](o);
      var u = s.value
    } catch (e) {
      n(e);
      return
    }
    s.done ? t(u) : Promise.resolve(u).then(r, i)
  }

  function f(e) {
    return function () {
      var t = this, n = arguments;
      return new Promise(function (r, i) {
        var a = e.apply(t, n);

        function o(e) {
          c(a, r, i, o, s, "next", e)
        }

        function s(e) {
          c(a, r, i, o, s, "throw", e)
        }

        o(void 0)
      })
    }
  }

  (0, r.default)();
  window.define("jquery", [], function () {
    return s.default
  });
  window.define("underscore", [], function () {
    return u.default
  });
  window.define("angular", [], function () {
    return o.default
  });
  window.define("angular-animate", [], function () {
    return o.default.module("ngAnimate")
  });
  window.define("angular-sanitize", [], function () {
    return o.default.module("ngSanitize")
  });
  window.define("angular-route", [], function () {
    return o.default.module("ngRoute")
  });
  window.$ || (window.$ = s.default);
  window["jQuery"] || (window["jQuery"] = s.default);
  window._ || (window._ = u.default);
  window.requirejs(["jquery"], function () {
  });
  window.qlikMashupLoader = f(regeneratorRuntime.mark(function e() {
    var t;
    return regeneratorRuntime.wrap(function e(r) {
      while (1) switch (r.prev = r.next) {
        case 0:
          n.p = window.requirejs.s.contexts._.config.baseUrl;
          r.next = 3;
          return (0, i.default)();
        case 3:
          r.next = 5;
          return (0, a.polyfillUnorm)();
        case 5:
          r.next = 7;
          return Promise.all([n.e(24), n.e(74)]).then(n.t.bind(null, 85, 7));
        case 7:
          t = r.sent;
          return r.abrupt("return", t.default());
        case 9:
        case"end":
          return r.stop()
      }
    }, e, this)
  }))
}]);
//# sourceMappingURL=https://qliktech.jfrog.io/qliktech/qlik-dev-local/com.qlik/client/5.95.6/zips/client-sourcemaps-5.95.6.zip!/sourcemaps/assets/external/requirejs/require.05eb82b895759e5ed1a7.js.map