//Wed May 28 2025 04:15:40 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env("爱路桥");
const notify = $.isNode() ? require("./sendNotify") : "";
(() => {
  function b(C) {
    {
      b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (F) {
        {
          return typeof F;
        }
      } : function (F) {
        return F && "function" == typeof Symbol && F.constructor === Symbol && F !== Symbol.prototype ? "symbol" : typeof F;
      };
      return b(C);
    }
  }
  function c(C, D) {
    {
      var F = "undefined" != typeof Symbol && C[Symbol.iterator] || C["@@iterator"];
      if (!F) {
        {
          if (Array.isArray(C) || (F = d(C)) || D && C && "number" == typeof C.length) {
            {
              F && (C = F);
              var G = 0;
              var H = function () {};
              return {
                s: H,
                n: function () {
                  {
                    var O = {
                      done: true
                    };
                    return G >= C.length ? O : {
                      done: false,
                      value: C[G++]
                    };
                  }
                },
                e: function (N) {
                  {
                    throw N;
                  }
                },
                f: H
              };
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
      }
      var I;
      var J = true;
      var K = false;
      return {
        s: function () {
          {
            F = F.call(C);
          }
        },
        n: function () {
          {
            var P = F.next();
            J = P.done;
            return P;
          }
        },
        e: function (O) {
          K = true;
          I = O;
        },
        f: function () {
          {
            try {
              {
                J || null == F.return || F.return();
              }
            } finally {
              {
                if (K) {
                  throw I;
                }
              }
            }
          }
        }
      };
    }
  }
  function d(C, D) {
    {
      if (C) {
        {
          if ("string" == typeof C) {
            return f(C, D);
          }
          var E = {}.toString.call(C).slice(8, -1);
          "Object" === E && C.constructor && (E = C.constructor.name);
          return "Map" === E || "Set" === E ? Array.from(C) : "Arguments" === E || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E) ? f(C, D) : undefined;
        }
      }
    }
  }
  function f(C, D) {
    {
      (null == D || D > C.length) && (D = C.length);
      for (var E = 0, F = Array(D); E < D; E++) {
        F[E] = C[E];
      }
      return F;
    }
  }
  function g() {
    "use strict";

    var C = {
      zeJvF: "end",
      UMLdU: function (ag, ah) {
        return ag !== ah;
      },
      mDGMu: "next",
      hDmhN: function (ag, ah) {
        return ag === ah;
      },
      qpcbK: function (ag, ah) {
        return ag(ah);
      },
      hffOD: "DkxNE",
      LXPlW: "ZHfOv",
      CGJjr: "UHoZC",
      dBVkQ: function (ag, ah) {
        return ag !== ah;
      },
      ujvXz: "wiova",
      Burfk: "PfVOU",
      abWbu: function (ag, ah) {
        return ag instanceof ah;
      },
      ODVlw: "_invoke",
      wuFKo: function (ag, ah) {
        return ag < ah;
      },
      lroRd: function (ag, ah, ai) {
        return ag(ah, ai);
      },
      xMvSp: function (ag, ah) {
        return ag(ah);
      },
      HdoaG: "eQegS",
      ShlhE: function (ag, ah, ai, aj, ak) {
        return ag(ah, ai, aj, ak);
      },
      DJhnq: "throw",
      PFCSV: "break",
      zsTYv: "continue",
      MWfmj: "return",
      qchkZ: "SKVsN",
      BZbbj: function (ag, ah) {
        return ag !== ah;
      },
      kcNsz: "uMqWz",
      wECLR: function (ag, ah) {
        return ag === ah;
      },
      dwRzy: "YbVeF",
      iAIpL: function (ag, ah) {
        return ag == ah;
      },
      VUHZw: "object",
      BqPDB: function (ag, ah) {
        return ag(ah);
      },
      nllue: "__await",
      eFZqf: "yyEBR",
      ZxuNu: function (ag, ah) {
        return ag(ah);
      },
      ntTYA: "Generator is already running",
      JQhOI: "pefwb",
      IBeHk: "VDtls",
      ZCRZL: function (ag, ah) {
        return ag !== ah;
      },
      mAHeG: "jDRVC",
      xFPlm: "pBPQz",
      rOjeM: "ceRvP",
      VQegs: "ZANxe",
      SbNzS: "ZSuTV",
      fhFiz: "JGNMA",
      QwWdy: "Fttnt",
      Obkne: "rWgsj",
      VSnUy: "normal",
      ctuqL: "anvka",
      fZVcK: "YExyW",
      RnGDa: function (ag, ah) {
        return ag === ah;
      },
      PCcBd: function (ag, ah) {
        return ag(ah);
      },
      nJsNE: function (ag, ah) {
        return ag !== ah;
      },
      NRPMi: "XnZwG",
      oLdBK: "tjQid",
      BQEYt: "LFIbm",
      xRZJj: function (ag, ah) {
        return ag === ah;
      },
      XqUrx: function (ag, ah) {
        return ag !== ah;
      },
      hJmjq: "The iterator does not provide a '",
      DAhjR: function (ag, ah) {
        return ag !== ah;
      },
      RZGmq: function (ag, ah) {
        return ag === ah;
      },
      KMhvT: function (ag, ah) {
        return ag(ah);
      },
      HMtMd: "pYlPs",
      MYHPy: function (ag, ah) {
        return ag >= ah;
      },
      xvybf: "ailuqiaobagebaao",
      ZiDtB: function (ag, ah) {
        return ag !== ah;
      },
      mvHLm: "IwmxH",
      oPXNp: function (ag, ah) {
        return ag > ah;
      },
      FGjUX: function (ag, ah) {
        return ag < ah;
      },
      XJgOg: function (ag, ah) {
        return ag !== ah;
      },
      xelOB: "FkiRt",
      qHRmT: function (ag, ah) {
        return ag === ah;
      },
      BIfIi: function (ag, ah) {
        return ag !== ah;
      },
      GMqQr: "FElvL",
      lQPRQ: "EYDMe",
      zzFWc: function (ag, ah) {
        return ag == ah;
      },
      qSMxQ: "function",
      VutYF: "NuSSm",
      pSFju: function (ag, ah) {
        return ag + ah;
      },
      Jvaze: function (ag, ah) {
        return ag(ah);
      },
      YMYZs: " is not iterable",
      hHqpW: function (ag, ah) {
        return ag == ah;
      },
      RUceB: function (ag, ah) {
        return ag == ah;
      },
      rzFmz: function (ag, ah) {
        return ag === ah;
      },
      tayox: "GeneratorFunction",
      XwBLE: function (ag, ah) {
        return ag in ah;
      },
      LvuaS: "OOZPT",
      MEZJF: "DFcJp",
      tdTRt: "moYgz",
      JemHg: "2|4|3|1|0",
      UxZcO: function (ag, ah) {
        return ag(ah);
      },
      tHzwB: function (ag, ah) {
        return ag < ah;
      },
      lVrVh: "Yxbeq",
      yrewi: function (ag, ah) {
        return ag in ah;
      },
      HDolv: "jqVuZ",
      WVoBr: function (ag, ah) {
        return ag(ah);
      },
      mvdGn: "✅ Utils加载成功, 请继续",
      Dreek: function (ag) {
        return ag();
      },
      GceUF: "(((.+)+)+)+$",
      IUKDo: function (ag, ah) {
        return ag !== ah;
      },
      IDTkM: "KCCVu",
      cxKJj: function (ag, ah) {
        return ag(ah);
      },
      dLFit: "[object Generator]",
      oLjPT: function (ag, ah) {
        return ag === ah;
      },
      gpDpH: "vqwiT",
      ZXaXs: function (ag) {
        return ag();
      },
      JyxCv: "PCKLG",
      uDPoX: function (ag, ah) {
        return ag - ah;
      },
      HWytz: "PGvYx",
      MWfJK: "LKIwI",
      FfxMZ: function (ag, ah) {
        return ag(ah);
      },
      nYiKi: function (ag, ah, ai, aj, ak) {
        return ag(ah, ai, aj, ak);
      },
      LxnWH: function (ag, ah, ai) {
        return ag(ah, ai);
      },
      iLiiD: function (ag, ah) {
        return ag + ah;
      },
      EtktS: "' method",
      WEkLN: function (ag, ah, ai, aj) {
        return ag(ah, ai, aj);
      },
      YABRk: function (ag, ah) {
        return ag !== ah;
      },
      UVSBX: "iterator result is not an object",
      LJnyv: function (ag, ah) {
        return ag === ah;
      }
    };
    g = function () {
      {
        return F;
      }
    };
    var D;
    var F = {};
    var H = Object.prototype;
    var I = H.hasOwnProperty;
    var J = Object.defineProperty || function (ag, ah, ai) {
      {
        ag[ah] = ai.value;
      }
    };
    var K = "function" == typeof Symbol ? Symbol : {};
    var M = K.iterator || "@@iterator";
    var N = K.asyncIterator || "@@asyncIterator";
    var Q = K.toStringTag || "@@toStringTag";
    function R(ag, ah, ai) {
      {
        var aj = {
          value: ai,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(ag, ah, aj);
        return ag[ah];
      }
    }
    try {
      {
        R({}, "");
      }
    } catch (ah) {
      {
        R = function (aj, ak, al) {
          {
            return aj[ak] = al;
          }
        };
      }
    }
    function U(aj, ak, al, am) {
      {
        var an = ak && ak.prototype instanceof a1 ? ak : a1;
        var ao = Object.create(an.prototype);
        var ap = new ae(am || []);
        J(ao, "_invoke", {
          value: aa(aj, al, ap)
        });
        return ao;
      }
    }
    function V(aj, ak, al) {
      {
        try {
          {
            return {
              type: "normal",
              arg: aj.call(ak, al)
            };
          }
        } catch (ao) {
          {
            var am = {
              type: "throw",
              arg: ao
            };
            return am;
          }
        }
      }
    }
    F.wrap = U;
    var W = "suspendedStart";
    var X = "suspendedYield";
    var Y = "executing";
    var Z = "completed";
    var a0 = {};
    function a1() {}
    function a2() {}
    function a3() {}
    var a4 = {};
    R(a4, M, function () {
      {
        return this;
      }
    });
    var a5 = Object.getPrototypeOf;
    var a6 = a5 && a5(a5(af([])));
    a6 && a6 !== H && I.call(a6, M) && (a4 = a6);
    a3.prototype = a1.prototype = Object.create(a4);
    var a7 = a3.prototype;
    function a8(aj) {
      ["next", "throw", "return"].forEach(function (am) {
        {
          R(aj, am, function (aq) {
            return this._invoke(am, aq);
          });
        }
      });
    }
    function a9(aj, ak) {
      {
        function an(ao, ap, aq, ar) {
          {
            var at = V(aj[ao], aj, ap);
            if ("throw" !== at.type) {
              {
                var au = at.arg;
                var av = au.value;
                return av && "object" == b(av) && I.call(av, "__await") ? ak.resolve(av.__await).then(function (ay) {
                  {
                    an("next", ay, aq, ar);
                  }
                }, function (ay) {
                  {
                    an("throw", ay, aq, ar);
                  }
                }) : ak.resolve(av).then(function (ay) {
                  {
                    au.value = ay;
                    aq(au);
                  }
                }, function (ay) {
                  {
                    return an("throw", ay, aq, ar);
                  }
                });
              }
            }
            ar(at.arg);
          }
        }
        var am;
        J(this, "_invoke", {
          value: function (ao, ap) {
            {
              function at() {
                {
                  return new ak(function (aw, ax) {
                    {
                      an(ao, ap, aw, ax);
                    }
                  });
                }
              }
              return am = am ? am.then(at, at) : at();
            }
          }
        });
      }
    }
    function aa(aj, ak, al) {
      {
        var an = W;
        return function (ap, aq) {
          {
            if (an === Y) {
              throw Error("Generator is already running");
            }
            if (an === Z) {
              {
                if ("throw" === ap) {
                  throw aq;
                }
                var at = {
                  value: D,
                  done: true
                };
                return at;
              }
            }
            for (al.method = ap, al.arg = aq;;) {
              {
                var au = al.delegate;
                if (au) {
                  {
                    var av = ab(au, al);
                    if (av) {
                      {
                        if (av === a0) {
                          continue;
                        }
                        return av;
                      }
                    }
                  }
                }
                if ("next" === al.method) {
                  al.sent = al._sent = al.arg;
                } else {
                  if ("throw" === al.method) {
                    {
                      if (an === W) {
                        throw an = Z, al.arg;
                      }
                      al.dispatchException(al.arg);
                    }
                  } else {
                    "return" === al.method && al.abrupt("return", al.arg);
                  }
                }
                an = Y;
                var aw = V(aj, ak, al);
                if ("normal" === aw.type) {
                  {
                    if (an = al.done ? Z : X, aw.arg === a0) {
                      continue;
                    }
                    var ax = {
                      value: aw.arg,
                      done: al.done
                    };
                    return ax;
                  }
                }
                "throw" === aw.type && (an = Z, al.method = "throw", al.arg = aw.arg);
              }
            }
          }
        };
      }
    }
    function ab(aj, ak) {
      {
        var an = ak.method;
        var ao = aj.iterator[an];
        if (ao === D) {
          ak.delegate = null;
          "throw" === an && aj.iterator.return && (ak.method = "return", ak.arg = D, ab(aj, ak), "throw" === ak.method) || "return" !== an && (ak.method = "throw", ak.arg = new TypeError("The iterator does not provide a '" + an + "' method"));
          return a0;
        }
        var ap = V(ao, aj.iterator, ak.arg);
        if ("throw" === ap.type) {
          ak.method = "throw";
          ak.arg = ap.arg;
          ak.delegate = null;
          return a0;
        }
        var aq = ap.arg;
        return aq ? aq.done ? (ak[aj.resultName] = aq.value, ak.next = aj.nextLoc, "return" !== ak.method && (ak.method = "next", ak.arg = D), ak.delegate = null, a0) : aq : (ak.method = "throw", ak.arg = new TypeError("iterator result is not an object"), ak.delegate = null, a0);
      }
    }
    function ac(aj) {
      {
        var al = {
          tryLoc: aj[0]
        };
        1 in aj && (al.catchLoc = aj[1]);
        2 in aj && (al.finallyLoc = aj[2], al.afterLoc = aj[3]);
        this.tryEntries.push(al);
      }
    }
    function ad(aj) {
      {
        var ak = aj.completion || {};
        ak.type = "normal";
        delete ak.arg;
        aj.completion = ak;
      }
    }
    function ae(aj) {
      {
        var al = {
          tryLoc: "root"
        };
        this.tryEntries = [al];
        aj.forEach(ac, this);
        this.reset(true);
      }
    }
    function af(aj) {
      {
        if (aj || "" === aj) {
          {
            var al = aj[M];
            if (al) {
              return al.call(aj);
            }
            if ("function" == typeof aj.next) {
              return aj;
            }
            if (!isNaN(aj.length)) {
              {
                var am = -1;
                var an = function ao() {
                  {
                    for (; ++am < aj.length;) {
                      if (I.call(aj, am)) {
                        ao.value = aj[am];
                        ao.done = false;
                        return ao;
                      }
                    }
                    ao.value = D;
                    ao.done = true;
                    return ao;
                  }
                };
                return an.next = an;
              }
            }
          }
        }
        throw new TypeError(b(aj) + " is not iterable");
      }
    }
    a2.prototype = a3;
    J(a7, "constructor", {
      value: a3,
      configurable: true
    });
    J(a3, "constructor", {
      value: a2,
      configurable: true
    });
    a2.displayName = R(a3, Q, "GeneratorFunction");
    F.isGeneratorFunction = function (aj) {
      {
        var al = "function" == typeof aj && aj.constructor;
        return !!al && (al === a2 || "GeneratorFunction" === (al.displayName || al.name));
      }
    };
    F.mark = function (aj) {
      {
        Object.setPrototypeOf ? Object.setPrototypeOf(aj, a3) : (aj.__proto__ = a3, R(aj, Q, "GeneratorFunction"));
        aj.prototype = Object.create(a7);
        return aj;
      }
    };
    F.awrap = function (aj) {
      {
        var ak = {
          __await: aj
        };
        return ak;
      }
    };
    a8(a9.prototype);
    R(a9.prototype, N, function () {
      {
        return this;
      }
    });
    F.AsyncIterator = a9;
    F.async = function (aj, ak, al, am, an) {
      {
        undefined === an && (an = Promise);
        var ap = new a9(U(aj, ak, al, am), an);
        return F.isGeneratorFunction(ak) ? ap : ap.next().then(function (aq) {
          {
            return aq.done ? aq.value : ap.next();
          }
        });
      }
    };
    a8(a7);
    R(a7, Q, "Generator");
    R(a7, M, function () {
      return this;
    });
    R(a7, "toString", function () {
      return "[object Generator]";
    });
    F.keys = function (aj) {
      {
        var al = Object(aj);
        var am = [];
        for (var an in al) am.push(an);
        am.reverse();
        return function ap() {
          {
            for (; am.length;) {
              {
                var as = am.pop();
                if (as in al) {
                  ap.value = as;
                  ap.done = false;
                  return ap;
                }
              }
            }
            ap.done = true;
            return ap;
          }
        };
      }
    };
    F.values = af;
    ae.prototype = {
      constructor: ae,
      reset: function (aj) {
        {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = D, this.done = false, this.delegate = null, this.method = "next", this.arg = D, this.tryEntries.forEach(ad), !aj) {
            for (var ak in this) "t" === ak.charAt(0) && I.call(this, ak) && !isNaN(+ak.slice(1)) && (this[ak] = D);
          }
        }
      },
      stop: function () {
        {
          this.done = true;
          var aj = this.tryEntries[0].completion;
          if ("throw" === aj.type) {
            throw aj.arg;
          }
          return this.rval;
        }
      },
      dispatchException: function (aj) {
        {
          if (this.done) {
            throw aj;
          }
          var al = this;
          function as(at, au) {
            {
              ao.type = "throw";
              ao.arg = aj;
              al.next = at;
              au && (al.method = "next", al.arg = D);
              return !!au;
            }
          }
          for (var am = this.tryEntries.length - 1; am >= 0; --am) {
            {
              var an = this.tryEntries[am];
              var ao = an.completion;
              if ("root" === an.tryLoc) {
                return as("end");
              }
              if (an.tryLoc <= this.prev) {
                {
                  var ap = I.call(an, "catchLoc");
                  var aq = I.call(an, "finallyLoc");
                  if (ap && aq) {
                    {
                      if (this.prev < an.catchLoc) {
                        return as(an.catchLoc, true);
                      }
                      if (this.prev < an.finallyLoc) {
                        return as(an.finallyLoc);
                      }
                    }
                  } else {
                    if (ap) {
                      {
                        if (this.prev < an.catchLoc) {
                          return as(an.catchLoc, true);
                        }
                      }
                    } else {
                      {
                        if (!aq) {
                          throw Error("try statement without catch or finally");
                        }
                        if (this.prev < an.finallyLoc) {
                          return as(an.finallyLoc);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      abrupt: function (aj, ak) {
        {
          for (var an = this.tryEntries.length - 1; an >= 0; --an) {
            {
              var ao = this.tryEntries[an];
              if (ao.tryLoc <= this.prev && I.call(ao, "finallyLoc") && this.prev < ao.finallyLoc) {
                {
                  var ap = ao;
                  break;
                }
              }
            }
          }
          ap && ("break" === aj || "continue" === aj) && ap.tryLoc <= ak && ak <= ap.finallyLoc && (ap = null);
          var aq = ap ? ap.completion : {};
          aq.type = aj;
          aq.arg = ak;
          return ap ? (this.method = "next", this.next = ap.finallyLoc, a0) : this.complete(aq);
        }
      },
      complete: function (aj, ak) {
        {
          if ("throw" === aj.type) {
            throw aj.arg;
          }
          "break" === aj.type || "continue" === aj.type ? this.next = aj.arg : "return" === aj.type ? (this.rval = this.arg = aj.arg, this.method = "return", this.next = "end") : "normal" === aj.type && ak && (this.next = ak);
          return a0;
        }
      },
      finish: function (aj) {
        {
          for (var al = this.tryEntries.length - 1; al >= 0; --al) {
            {
              var am = this.tryEntries[al];
              if (am.finallyLoc === aj) {
                this.complete(am.completion, am.afterLoc);
                ad(am);
                return a0;
              }
            }
          }
        }
      },
      catch: function (aj) {
        var al = {
          jDIDm: function (aq, ar) {
            return aq in ar;
          }
        };
        {
          for (var am = this.tryEntries.length - 1; am >= 0; --am) {
            {
              var an = this.tryEntries[am];
              if (an.tryLoc === aj) {
                {
                  var ao = an.completion;
                  if ("throw" === ao.type) {
                    {
                      var ap = ao.arg;
                      ad(an);
                    }
                  }
                  return ap;
                }
              }
            }
          }
          throw Error("illegal catch attempt");
        }
      },
      delegateYield: function (aj, ak, al) {
        {
          this.delegate = {
            iterator: af(aj),
            resultName: ak,
            nextLoc: al
          };
          "next" === this.method && (this.arg = D);
          return a0;
        }
      }
    };
    return F;
  }
  function h(C, D, E, F, G, H, I) {
    {
      try {
        {
          var K = C[H](I);
          var L = K.value;
        }
      } catch (O) {
        return void E(O);
      }
      K.done ? D(L) : Promise.resolve(L).then(F, G);
    }
  }
  function i(C) {
    return function () {
      var G = this;
      var H = arguments;
      return new Promise(function (I, J) {
        var L = C.apply(G, H);
        function M(O) {
          {
            h(L, I, J, M, N, "next", O);
          }
        }
        function N(O) {
          {
            h(L, I, J, M, N, "throw", O);
          }
        }
        M(undefined);
      });
    };
  }
  var j = ($.isNode() ? process.env.AiLuQiao : $.getdata("AiLuQiao")) || "";
  var k = undefined;
  var l = "";
  var m = "";
  var n = "";
  var o = "";
  var p = "";
  function q() {
    {
      return r.apply(this, arguments);
    }
  }
  function r() {
    r = i(g().mark(function C() {
      var V;
      var W;
      var X;
      var Y;
      var Z;
      var a0;
      var a1;
      var a2;
      var a3;
      var a4;
      var a5;
      var a6;
      var a7;
      var a8;
      var a9;
      var aa;
      var ab;
      var ac;
      var ad;
      var ae;
      var af;
      var ag;
      var ah;
      var ai;
      var aj;
      var ak;
      var al;
      var am;
      var an;
      var ao;
      var ap;
      var aq;
      var ar;
      var as;
      var at;
      var au;
      var av;
      var aw;
      var ax;
      var ay;
      var az;
      var aA;
      var aB;
      var aC;
      var aD;
      var aE;
      return g().wrap(function (aF) {
        for (;;) {
          switch (aF.prev = aF.next) {
            case 0:
              if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), j) {
                aF.next = 6;
                break;
              }
              console.log("先去boxjs填写账号密码");
              aF.next = 5;
              return A("先去boxjs填写账号密码");
            case 5:
              return aF.abrupt("return");
            case 6:
              aF.next = 8;
              return y();
            case 8:
              k = aF.sent;
              V = j.split(" ");
              W = c(V);
              aF.prev = 11;
              W.s();
            case 13:
              if ((X = W.n()).done) {
                aF.next = 202;
                break;
              }
              Y = X.value;
              l = Y;
              console.log("用户：".concat(l, "开始任务"));
              console.log("阅读抽奖");
              console.log("获取cid");
              aF.next = 21;
              return s("/myinfo?uid=".concat(l));
            case 21:
              Z = aF.sent;
              n = Z.data.cid;
              console.log(n);
              console.log("获取tid");
              aF.next = 27;
              return s("/system_settings");
            case 27:
              a0 = aF.sent;
              a1 = c(a0);
              aF.prev = 29;
              a1.s();
            case 31:
              if ((a2 = a1.n()).done) {
                aF.next = 43;
                break;
              }
              if (a3 = a2.value, "浮窗" != a3.key) {
                aF.next = 41;
                break;
              }
              for (a4 = a3.url.split("?")[1], a5 = {}, a6 = a4.split("&"), a7 = 0, a8 = a6.length; a7 < a8; a7++) {
                a9 = a6[a7].split("=");
                a5[a9[0]] = a9[1];
              }
              m = a5.id;
              console.log(m);
              return aF.abrupt("break", 43);
            case 41:
              aF.next = 31;
              break;
            case 43:
              aF.next = 48;
              break;
            case 45:
              aF.prev = 45;
              aF.t0 = aF.catch(29);
              a1.e(aF.t0);
            case 48:
              aF.prev = 48;
              a1.f();
              return aF.finish(48);
            case 51:
              if (!m) {
                aF.next = 112;
                break;
              }
              aF.next = 54;
              return s("/red_activity?tid=".concat(m, "&uid=").concat(l, "&cid=").concat(n));
            case 54:
              aa = aF.sent;
              ab = c(aa.data);
              aF.prev = 56;
              ab.s();
            case 58:
              if ((ac = ab.n()).done) {
                aF.next = 89;
                break;
              }
              ad = ac.value;
              console.log(ad.title);
              aF.next = 63;
              return s("/red_news?red_id=".concat(ad.id, "&uid=").concat(l, "&tid=").concat(m, "&cid=").concat(n));
            case 63:
              ae = aF.sent;
              af = c(ae.data);
              aF.prev = 65;
              af.s();
            case 67:
              if ((ag = af.n()).done) {
                aF.next = 79;
                break;
              }
              if (ah = ag.value, console.log("文章：".concat(ah.title)), 1 != ah.task) {
                aF.next = 73;
                break;
              }
              console.log("已阅读");
              return aF.abrupt("continue", 77);
            case 73:
              aF.next = 75;
              return s("/red_news_record?newsId=".concat(ah.newsId, "&uid=").concat(l));
            case 75:
              ai = aF.sent;
              1 == ai.status ? console.log("阅读成功") : console.log(ai.msg);
            case 77:
              aF.next = 67;
              break;
            case 79:
              aF.next = 84;
              break;
            case 81:
              aF.prev = 81;
              aF.t1 = aF.catch(65);
              af.e(aF.t1);
            case 84:
              aF.prev = 84;
              af.f();
              return aF.finish(84);
            case 87:
              aF.next = 58;
              break;
            case 89:
              aF.next = 94;
              break;
            case 91:
              aF.prev = 91;
              aF.t2 = aF.catch(56);
              ab.e(aF.t2);
            case 94:
              aF.prev = 94;
              ab.f();
              return aF.finish(94);
            case 97:
              aF.next = 99;
              return s("/luck_chance_get?uid=".concat(l, "&tid=").concat(m));
            case 99:
              aj = aF.sent;
              console.log("剩余抽奖次数：".concat(aj.chance));
              ak = 0;
            case 102:
              if (!(ak < aj.chance)) {
                aF.next = 110;
                break;
              }
              aF.next = 105;
              return s("/red_luck?uid=".concat(l, "&tid=").concat(m, "&cid=").concat(n));
            case 105:
              al = aF.sent;
              1 == al.status ? (console.log("抽奖获得：".concat(al.data.prize)), p += "用户：".concat(l, " 抽奖获得：").concat(al.data.prize, "\n")) : console.log(al.msg);
            case 107:
              ak++;
              aF.next = 102;
              break;
            case 110:
              aF.next = 113;
              break;
            case 112:
              console.log("获取tid失败");
            case 113:
              console.log("————————————");
              console.log("开始任务");
              console.log("开始签到");
              aF.next = 118;
              return s("/mysign?uid=".concat(l));
            case 118:
              am = aF.sent;
              1 == am.status ? console.log("签到成功") : console.log(am.msg);
              an = true;
              ao = true;
              ap = true;
              aF.next = 125;
              return s("/integral_rule?uid=".concat(l));
            case 125:
              aq = aF.sent;
              ar = c(aq.info);
              aF.prev = 127;
              ar.s();
            case 129:
              if ((as = ar.n()).done) {
                aF.next = 141;
                break;
              }
              if (at = as.value, console.log("任务：".concat(at.name)), 1 != at.status) {
                aF.next = 135;
                break;
              }
              console.log("任务已完成");
              return aF.abrupt("continue", 139);
            case 135:
              console.log("任务进度：".concat(at.n1, "/").concat(at.n2));
              "阅读新闻" == at.name && (an = false);
              "点赞新闻" == at.name && (ao = false);
              "转发新闻" == at.name && (ap = false);
            case 139:
              aF.next = 129;
              break;
            case 141:
              aF.next = 146;
              break;
            case 143:
              aF.prev = 143;
              aF.t3 = aF.catch(127);
              ar.e(aF.t3);
            case 146:
              aF.prev = 146;
              ar.f();
              return aF.finish(146);
            case 149:
              if (an && ao && ap) {
                aF.next = 193;
                break;
              }
              aF.next = 152;
              return s("/news?columnId=1&page=0&limit=10&time=".concat(x(), "&uid=").concat(l));
            case 152:
              au = aF.sent;
              av = c(au.data);
              aF.prev = 154;
              av.s();
            case 156:
              if ((aw = av.n()).done) {
                aF.next = 185;
                break;
              }
              if (ax = aw.value, ay = ax.newsid, console.log("文章：".concat(ax.title)), an) {
                aF.next = 165;
                break;
              }
              aF.next = 163;
              return s("/myintegral_save?iid=11&rid=".concat(ay, "&uid=").concat(l));
            case 163:
              az = aF.sent;
              1 == az.status ? (console.log("阅读成功"), console.log("获得：".concat(az.num, "积分"))) : console.log(az.msg);
            case 165:
              if (ao) {
                aF.next = 174;
                break;
              }
              aF.next = 168;
              return u("/news/like", "id=".concat(ay, "&cid=").concat(n, "&uid=").concat(l));
            case 168:
              aA = aF.sent;
              console.log(aA.message);
              aF.next = 172;
              return s("/myintegral_save?iid=13&rid=".concat(ay, "&uid=").concat(l));
            case 172:
              aB = aF.sent;
              1 == aB.status ? console.log("获得：".concat(aB.num, "积分")) : console.log(aB.msg);
            case 174:
              if (ap) {
                aF.next = 183;
                break;
              }
              aF.next = 177;
              return u("/news/share", "cid=".concat(n, "id=").concat(ay, "&&uid=").concat(l));
            case 177:
              aC = aF.sent;
              console.log(aC.message);
              aF.next = 181;
              return s("/myintegral_save?iid=14&rid=".concat(ay, "&uid=").concat(l));
            case 181:
              aD = aF.sent;
              1 == aD.status ? console.log("获得：".concat(aD.num, "积分")) : console.log(aD.msg);
            case 183:
              aF.next = 156;
              break;
            case 185:
              aF.next = 190;
              break;
            case 187:
              aF.prev = 187;
              aF.t4 = aF.catch(154);
              av.e(aF.t4);
            case 190:
              aF.prev = 190;
              av.f();
              return aF.finish(190);
            case 193:
              console.log("————————————");
              console.log("查询积分");
              aF.next = 197;
              return s("/myinfo?uid=".concat(l));
            case 197:
              aE = aF.sent;
              console.log("拥有积分：".concat(aE.data.integral, "\n"));
              o += "用户：".concat(l, " 积分：").concat(aE.data.integral, "\n");
            case 200:
              aF.next = 13;
              break;
            case 202:
              aF.next = 207;
              break;
            case 204:
              aF.prev = 204;
              aF.t5 = aF.catch(11);
              W.e(aF.t5);
            case 207:
              aF.prev = 207;
              W.f();
              return aF.finish(207);
            case 210:
              if (!o) {
                aF.next = 213;
                break;
              }
              aF.next = 213;
              return A(o);
            case 213:
              if (!p) {
                aF.next = 216;
                break;
              }
              aF.next = 216;
              return A(p);
            case 216:
            case "end":
              return aF.stop();
          }
        }
      }, C, null, [[11, 204, 207, 210], [29, 45, 48, 51], [56, 91, 94, 97], [65, 81, 84, 87], [127, 143, 146, 149], [154, 187, 190, 193]]);
    }));
    return r.apply(this, arguments);
  }
  function s(C) {
    return t.apply(this, arguments);
  }
  function t() {
    t = i(g().mark(function D(E) {
      return g().wrap(function (G) {
        for (;;) {
          switch (G.prev = G.next) {
            case 0:
              return G.abrupt("return", new Promise(function (H) {
                var J = {
                  url: "https://www.ailuqiao.cn/mobile".concat(E),
                  headers: {
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36 uni-app Html5Plus/1.0 (Immersed/34.909092)",
                    Connection: "Keep-Alive",
                    "Accept-Encoding": "gzip",
                    "Content-Type": w(l),
                    "Content-Type2": w(x())
                  }
                };
                $.get(J, function () {
                  var L = i(g().mark(function M(N, O, P) {
                    return g().wrap(function (Q) {
                      for (;;) {
                        switch (Q.prev = Q.next) {
                          case 0:
                            if (Q.prev = 0, !N) {
                              Q.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(N)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            Q.next = 9;
                            break;
                          case 6:
                            Q.next = 8;
                            return $.wait(2000);
                          case 8:
                            H(JSON.parse(P));
                          case 9:
                            Q.next = 14;
                            break;
                          case 11:
                            Q.prev = 11;
                            Q.t0 = Q.catch(0);
                            $.logErr(Q.t0, O);
                          case 14:
                            Q.prev = 14;
                            H();
                            return Q.finish(14);
                          case 17:
                          case "end":
                            return Q.stop();
                        }
                      }
                    }, M, null, [[0, 11, 14, 17]]);
                  }));
                  return function (N, O, P) {
                    return L.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return G.stop();
          }
        }
      }, D);
    }));
    return t.apply(this, arguments);
  }
  function u(C, D) {
    return v.apply(this, arguments);
  }
  function v() {
    v = i(g().mark(function E(F, G) {
      return g().wrap(function (I) {
        for (;;) {
          switch (I.prev = I.next) {
            case 0:
              return I.abrupt("return", new Promise(function (J) {
                var L = {
                  "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36 uni-app Html5Plus/1.0 (Immersed/34.909092)",
                  Connection: "Keep-Alive",
                  "Accept-Encoding": "gzip",
                  "Content-Type": "application/x-www-form-urlencoded"
                };
                var M = {
                  url: "https://www.ailuqiao.cn/mobile".concat(F),
                  headers: L,
                  body: G
                };
                $.post(M, function () {
                  var N = i(g().mark(function O(P, Q, R) {
                    return g().wrap(function (T) {
                      for (;;) {
                        switch (T.prev = T.next) {
                          case 0:
                            if (T.prev = 0, !P) {
                              T.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(P)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            T.next = 9;
                            break;
                          case 6:
                            T.next = 8;
                            return $.wait(2000);
                          case 8:
                            J(JSON.parse(R));
                          case 9:
                            T.next = 14;
                            break;
                          case 11:
                            T.prev = 11;
                            T.t0 = T.catch(0);
                            $.logErr(T.t0, Q);
                          case 14:
                            T.prev = 14;
                            J();
                            return T.finish(14);
                          case 17:
                          case "end":
                            return T.stop();
                        }
                      }
                    }, O, null, [[0, 11, 14, 17]]);
                  }));
                  return function (P, Q, R) {
                    return N.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return I.stop();
          }
        }
      }, E);
    }));
    return v.apply(this, arguments);
  }
  function w(C) {
    CryptoJS = k.createCryptoJS();
    var G = CryptoJS.enc.Utf8.parse("ailuqiaoAb112112");
    var H = CryptoJS.enc.Utf8.parse("ailuqiaobagebaao");
    C = CryptoJS.enc.Utf8.parse(C);
    var F = CryptoJS.AES.encrypt(C, G, {
      iv: H,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    }).toString();
    return F;
  }
  function x() {
    var C = new Date();
    var D = C.getFullYear();
    var E = String(C.getMonth() + 1).padStart(2, "0");
    var F = String(C.getDate()).padStart(2, "0");
    var G = String(C.getHours()).padStart(2, "0");
    var H = String(C.getMinutes()).padStart(2, "0");
    var I = String(C.getSeconds()).padStart(2, "0");
    return "".concat(D, "-").concat(E, "-").concat(F, " ").concat(G, ":").concat(H, ":").concat(I);
  }
  function y() {
    return z.apply(this, arguments);
  }
  function z() {
    z = i(g().mark(function D() {
      var F;
      return g().wrap(function G(H) {
        for (;;) {
          switch (H.prev = H.next) {
            case 0:
              if (F = $.getdata("Utils_Code") || "", !F || !Object.keys(F).length) {
                H.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(F);
              return H.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return H.abrupt("return", new Promise(function () {
                var J = i(g().mark(function K(L) {
                  return g().wrap(function N(O) {
                    for (;;) {
                      switch (O.prev = O.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (P) {
                            $.setdata(P, "Utils_Code");
                            eval(P);
                            console.log("✅ Utils加载成功, 请继续");
                            L(creatUtils());
                          });
                        case 1:
                        case "end":
                          return O.stop();
                      }
                    }
                  }, K);
                }));
                return function (L) {
                  return J.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return H.stop();
          }
        }
      }, D);
    }));
    return z.apply(this, arguments);
  }
  function A(C) {
    return B.apply(this, arguments);
  }
  function B() {
    B = i(g().mark(function C(D) {
      return g().wrap(function (E) {
        for (;;) {
          switch (E.prev = E.next) {
            case 0:
              if (!$.isNode()) {
                E.next = 5;
                break;
              }
              E.next = 3;
              return notify.sendNotify($.name, D);
            case 3:
              E.next = 6;
              break;
            case 5:
              $.msg($.name, "", D);
            case 6:
            case "end":
              return E.stop();
          }
        }
      }, C);
    }));
    return B.apply(this, arguments);
  }
  i(g().mark(function C() {
    return g().wrap(function (D) {
      for (;;) {
        switch (D.prev = D.next) {
          case 0:
            D.next = 2;
            return q();
          case 2:
          case "end":
            return D.stop();
        }
      }
    }, C);
  }))().catch(function (D) {
    $.log(D);
  }).finally(function () {
    $.done({});
  });
})();
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      const i = new Promise((e, i) => {
        s.call(this, t, (t, s, o) => {
          t ? i(t) : e(s);
        });
      });
      return t.timeout ? ((t, e = 1000) => Promise.race([t, new Promise((t, s) => {
        setTimeout(() => {
          s(new Error("请求超时"));
        }, e);
      })]))(i, t.timeout) : i;
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevel = "info";
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : undefined;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null, ...s) {
      try {
        return JSON.stringify(t, ...s);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t)) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return false;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        o = o ? 1 * o : 20;
        o = e && e.timeout ? e.timeout : o;
        const [r, a] = i.split("@");
        const n = {
          url: `http://${a}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: o
          },
          headers: {
            "X-Key": r,
            Accept: "*/*"
          },
          policy: "DIRECT",
          timeout: o
        };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const e = this.path.resolve(process.cwd(), this.dataFile);
        const s = this.fs.existsSync(t);
        const i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const e = this.path.resolve(process.cwd(), this.dataFile);
        const s = this.fs.existsSync(t);
        const i = !s && this.fs.existsSync(e);
        const o = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let o = t;
      for (const t of i) if (o = Object(o)[t], undefined === o) {
        return s;
      }
      return o;
    }
    lodash_set(t, e, s) {
      Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s);
      return t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t);
        const o = s ? this.getval(s) : "";
        if (o) {
          try {
            const t = JSON.parse(o);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e);
        const r = this.getval(i);
        const a = i ? "null" === r ? null : r || "{}" : "{}";
        try {
          const e = JSON.parse(a);
          this.lodash_set(e, o, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const r = {};
          this.lodash_set(r, o, t);
          s = this.setval(JSON.stringify(r), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          this.data = this.loaddata();
          this.data[e] = t;
          this.writedata();
          return true;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, t && (t.headers = t.headers ? t.headers : {}, undefined === t.headers.cookie && undefined === t.headers.Cookie && undefined === t.cookieJar && (t.cookieJar = this.ckjar)));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), undefined === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = false), this.isQuanX() && (t.opts ? t.opts.redirection = false : t.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient.get(t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(t);
          this.got(t).on("redirect", (t, e) => {
            try {
              if (t.headers["set-cookie"]) {
                const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                s && this.ckjar.setCookieSync(s, null);
                e.cookieJar = this.ckjar;
              }
            } catch (t) {
              this.logErr(t);
            }
          }).then(t => {
            const {
              statusCode: i,
              statusCode: o,
              headers: r,
              rawBody: a
            } = t;
            const n = s.decode(a, this.encoding);
            e(null, {
              status: i,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: i,
              response: o
            } = t;
            e(i, o, o && s.decode(o.rawBody, this.encoding));
          });
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), undefined === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = false), this.isQuanX() && (t.opts ? t.opts.redirection = false : t.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient[s](t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let i = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: o,
            ...r
          } = t;
          this.got[s](o, r).then(t => {
            const {
              statusCode: s,
              statusCode: o,
              headers: r,
              rawBody: a
            } = t;
            const n = i.decode(a, this.encoding);
            e(null, {
              status: s,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: o
            } = t;
            e(s, o, o && i.decode(o.rawBody, this.encoding));
          });
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let i = t[s];
        null != i && "" !== i && ("object" == typeof i && (i = JSON.stringify(i)), e += `${s}=${i}&`);
      }
      e = e.substring(0, e.length - 1);
      return e;
    }
    msg(e = t, s = "", i = "", o = {}) {
      const r = t => {
        const {
          $open: e,
          $copy: s,
          $media: i,
          $mediaMime: o
        } = t;
        switch (typeof t) {
          case undefined:
            return t;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: t
                };
              case "Loon":
              case "Shadowrocket":
                return t;
              case "Quantumult X":
                return {
                  "open-url": t
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  const r = {};
                  let a = t.openUrl || t.url || t["open-url"] || e;
                  a && Object.assign(r, {
                    action: "open-url",
                    url: a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  if (n && Object.assign(r, {
                    action: "clipboard",
                    text: n
                  }), i) {
                    let t;
                    let e;
                    let s;
                    if (i.startsWith("http")) {
                      t = i;
                    } else {
                      if (i.startsWith("data:")) {
                        const [t] = i.split(";");
                        const [, o] = i.split(",");
                        e = o;
                        s = t.replace("data:", "");
                      } else {
                        e = i;
                        s = (t => {
                          const e = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var s in e) if (0 === t.indexOf(s)) {
                            return e[s];
                          }
                          return null;
                        })(i);
                      }
                    }
                    Object.assign(r, {
                      "media-url": t,
                      "media-base64": e,
                      "media-base64-mime": o ?? s
                    });
                  }
                  Object.assign(r, {
                    "auto-dismiss": t["auto-dismiss"],
                    sound: t.sound
                  });
                  return r;
                }
              case "Loon":
                {
                  const s = {};
                  let o = t.openUrl || t.url || t["open-url"] || e;
                  o && Object.assign(s, {
                    openUrl: o
                  });
                  let r = t.mediaUrl || t["media-url"];
                  i?.startsWith("http") && (r = i);
                  r && Object.assign(s, {
                    mediaUrl: r
                  });
                  console.log(JSON.stringify(s));
                  return s;
                }
              case "Quantumult X":
                {
                  const o = {};
                  let r = t["open-url"] || t.url || t.openUrl || e;
                  r && Object.assign(o, {
                    "open-url": r
                  });
                  let a = t["media-url"] || t.mediaUrl;
                  i?.startsWith("http") && (a = i);
                  a && Object.assign(o, {
                    "media-url": a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  n && Object.assign(o, {
                    "update-pasteboard": n
                  });
                  console.log(JSON.stringify(o));
                  return o;
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(e, s, i, r(o));
            break;
          case "Quantumult X":
            $notify(e, s, i, r(o));
          case "Node.js":
        }
      }
      if (!this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    debug(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.debug}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    info(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.info}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    warn(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.warn}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    error(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.error}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.map(t => t ?? String(t)).join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, e, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, e, undefined !== t.message ? t.message : t, t.stack);
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(t, e);
}