!function(n, t, i, r, a, e, o, c, u, f, s, l, m, h, v) {
    var d, p = 377, g = "isg", y = c, b = !!y.addEventListener, w = u.getElementsByTagName("head")[0], _ = f.userAgent;
    !function(n) {
        function t() {
            return 4294967295 * r.random() >>> 0
        }
        function e(n) {
            var t;
            switch (typeof n) {
            case "function":
                t = w.call(n);
                break;
            case "object":
                try {
                    t = n + ""
                } catch (i) {
                    return !1
                }
                break;
            default:
                return !1
            }
            return g.test(t)
        }
        function o(n) {
            for (var t = 0, i = 0, r = n.length; i < r; i++)
                t = (t << 5) - t + n.charCodeAt(i),
                t >>>= 0;
            return t
        }
        function c(n, t) {
            var i = n.indexOf(t);
            return -1 === i ? n : n.substr(0, i)
        }
        function f(n, t) {
            var i = n.indexOf(t);
            return -1 === i ? n : n.substr(i + t.length)
        }
        function s(n) {
            var t = n.match(_);
            if (!t)
                return null;
            var i = t[1];
            return k.test(i) && (i = f(i, "@"),
            i = c(i, ":")),
            i
        }
        function l(n) {
            for (var t = 0, i = n.length - 1; i >= 0; i--) {
                t = t << 1 | (0 | +n[i])
            }
            return t
        }
        function m(n, t, i, r) {
            b ? n.addEventListener(t, i, r) : n.attachEvent && n.attachEvent("on" + t, function() {
                i(event)
            })
        }
        function h(n) {
            try {
                return localStorage[n + "__"]
            } catch (t) {}
        }
        function v(n, t) {
            try {
                localStorage[n + "__"] = t
            } catch (i) {}
        }
        function d() {
            var n = y.outerWidth;
            return null == n && (n = u.documentElement.clientWidth || u.body.clientWidth),
            n
        }
        function p() {
            var n = y.outerHeight;
            return null == n && (n = u.documentElement.clientHeight || u.body.clientHeight),
            n
        }
        n.a = t;
        var g = /native code/
          , w = i.prototype.toString;
        n.b = e,
        n.c = o,
        n.d = a.now || function() {
            return +new a
        }
        ,
        n.e = c,
        n.f = f;
        var _ = /^(?:https?:)?\/{2,}([^\/?#\\]+)/i
          , k = /[@:]/;
        n.g = s,
        n.h = l,
        n.i = m,
        n.j = h,
        n.k = v,
        n.l = d,
        n.m = p
    }(d || (d = {}));
    var k, x = function() {
        function n(n) {
            this.n = new e("(?:^|; )" + n + "=([^;]+)","g"),
            this.o = n + "=",
            this.p = ""
        }
        return n.prototype.q = function() {
            for (var n, t = u.cookie, i = []; n = this.n.exec(t); )
                i.push(n[1]);
            return i
        }
        ,
        n.prototype.r = function() {
            return this.q()[0]
        }
        ,
        n.prototype.s = function(n) {
            if (!this.p) {
                var t = "";
                this.t && (t += "; domain=" + this.t),
                this.u && (t += "; path=" + this.u),
                this.v && (t += "; expires=" + this.v),
                this.p = t
            }
            u.cookie = this.o + n + this.p
        }
        ,
        n.prototype.w = function() {
            var n = this.v;
            this.x("Thu, 01 Jan 1970 00:00:00 GMT"),
            this.s(""),
            this.x(n)
        }
        ,
        n.prototype.y = function(n) {
            this.t = n,
            this.p = ""
        }
        ,
        n.prototype.z = function(n) {
            this.u = n,
            this.p = ""
        }
        ,
        n.prototype.x = function(n) {
            this.v = n,
            this.p = ""
        }
        ,
        n
    }();
    !function(n) {
        function t(n) {
            var t = n.stack || n.message;
            s(function(n) {
                i(t)
            }, 1)
        }
        function i(n) {
            var t = u._sufei_log;
            if (null == t && (t = .001),
            !(r.random() > t)) {
                c({
                    code: 1,
                    msg: (n + "").substr(0, 1e3),
                    pid: "sufeidata",
                    page: l.href.split(/[#?]/)[0],
                    query: l.search.substr(1),
                    hash: l.hash,
                    referrer: u.referrer,
                    title: u.title,
                    ua: f.userAgent,
                    rel: p,
                    c1: e()
                }, "//gm.mmstat.com/fsp.1.1?")
            }
        }
        function a(n, t, i) {
            n = (n || "").substr(0, 2e3),
            c({
                url: n,
                token: t,
                cna: e(),
                ext: i
            }, "https://fourier.alibaba.com/ts?")
        }
        function e() {
            return null == m && (m = new x("cna").r() || ""),
            m
        }
        function c(n, t) {
            var i = [];
            for (var r in n)
                i.push(r + "=" + o(n[r]));
            (new v).src = t + i.join("&")
        }
        n.A = t,
        n.B = i,
        n.C = a;
        var m
    }(k || (k = {}));
    var z;
    !function(n) {
        function t() {
            if (fn) {
                var n = F + ":" + sn + ":" + fn.join(",");
                k.C("", n, 4),
                fn = null
            }
        }
        function i(n) {
            K = n.clientX,
            Z = n.clientY,
            F++,
            nn = e(tn, rn)
        }
        function a(n) {
            Y = n.isTrusted;
            var t = n.touches[0];
            K = t.clientX,
            Z = t.clientY,
            F++,
            nn = e(tn, rn)
        }
        function e(n, t) {
            return 0 <= n && n <= d.l() && 0 <= t && t <= d.m()
        }
        function o(n) {
            if (N = n.isTrusted,
            b) {
                var i = n.target
                  , a = i.offsetWidth >> 1
                  , e = i.offsetHeight >> 1;
                if (!(a < 10 && e < 10)) {
                    var o = r.abs(n.offsetX - a)
                      , u = r.abs(n.offsetY - e)
                      , f = o < 2 && u < 2;
                    if (f && sn++,
                    sn >= 3 && (3 === sn && (s(t, 2e4),
                    d.i(c, "unload", t)),
                    fn && fn.length < 20)) {
                        var l = (f ? "" : "!") + i.tagName;
                        fn.push(l)
                    }
                }
            }
        }
        function m(n) {
            N = n.isTrusted,
            tn = n.clientX,
            rn = n.clientY,
            Q++
        }
        function v(n) {
            Y = n.isTrusted;
            var t = n.touches[0];
            tn = t.clientX,
            rn = t.clientY,
            Q++
        }
        function p(n) {
            J++
        }
        function g(n) {
            V++
        }
        function w() {
            var n = h.availWidth
              , t = d.l();
            G = n - t < 20
        }
        function x(n) {
            U = !0,
            an = !0
        }
        function z(n) {
            an = !1
        }
        function D(n) {
            un = n.gamma,
            cn || (cn = s(function(n) {
                removeEventListener("deviceorientation", D),
                s(A, 470)
            }, 30))
        }
        function A() {
            cn = 0,
            addEventListener("deviceorientation", D)
        }
        function T() {
            if ("ontouchmove"in u && (d.i(u, "touchmove", v, !0),
            d.i(u, "touchstart", a, !0)),
            d.i(u, "mousemove", m, !0),
            d.i(u, "mousedown", i, !0),
            d.i(u, "click", o, !0),
            d.i(u, "keydown", g, !0),
            d.i(c, "scroll", p, !0),
            d.i(c, "focus", x),
            d.i(c, "blur", z),
            d.i(c, "resize", w),
            w(),
            f.getBattery) {
                var n = f.getBattery();
                n && (n.then(function(n) {
                    $ = n
                })["catch"](function(n) {}),
                en = !0)
            }
            on && A()
        }
        function E() {
            return Q
        }
        function j() {
            return J
        }
        function C() {
            return F
        }
        function L() {
            return V
        }
        function M() {
            var n = K
              , t = Z;
            n || t || (n = tn,
            t = rn);
            var i = N === undefined && Y === undefined || !0 === N || !0 === Y;
            return N = undefined,
            Y = undefined,
            {
                J: n,
                K: t,
                L: i
            }
        }
        function B() {
            return nn
        }
        function W() {
            var n = u.hidden;
            return null == n && (n = u.mozHidden),
            !n
        }
        function P() {
            return an
        }
        function S() {
            return U
        }
        function R() {
            return G
        }
        function H() {
            return en
        }
        function O() {
            return !$ || $.charging
        }
        function I() {
            return $ ? 100 * $.level : 127
        }
        function X() {
            return on
        }
        function q() {
            return on ? un + 90 : 255
        }
        var N, Y, G, U, $, Q = 0, F = 0, J = 0, V = 0, K = 0, Z = 0, nn = !0, tn = 0, rn = 0, an = !0, en = !1, on = !!y.DeviceOrientationEvent;
        (/dingtalk/.test(l.hostname) || /Qianniu|DingTalk/.test(_)) && (on = !1);
        var cn, un = null, fn = [], sn = 0;
        n.D = T,
        n.F = E,
        n.G = j,
        n.H = C,
        n.I = L,
        n.M = M,
        n.N = B,
        n.O = W,
        n.P = P,
        n.Q = S,
        n.R = R,
        n.S = H,
        n.T = O,
        n.U = I,
        n.V = X,
        n.W = q
    }(z || (z = {}));
    var D;
    !function(n) {
        function i() {
            return "$cdc_asdjflasutopfhvcZLmcfl_"in u || f.webdriver
        }
        function r() {
            if (e())
                return !1;
            try {
                var n = u.createElement("canvas")
                  , t = n.getContext("webgl");
                if (t) {
                    var i = t.getExtension("WEBGL_lose_context");
                    i && i.loseContext()
                }
                return !!t
            } catch (r) {
                return !1
            }
        }
        function e() {
            return "ontouchstart"in u
        }
        function o() {
            return /zh-cn/i.test(f.language || f.systemLanguage)
        }
        function l() {
            return -480 === (new a).getTimezoneOffset()
        }
        function m() {
            return z.N()
        }
        function h() {
            return z.V()
        }
        function v() {
            return z.S()
        }
        function p() {
            return z.T()
        }
        function g() {
            var n = d.l()
              , t = d.m()
              , i = y.innerWidth
              , r = y.innerHeight;
            if (null == i || null == r)
                return !1;
            var a = n - i
              , e = t - r;
            return a > 240 || e > 150
        }
        function k() {
            return j && ("complete" !== u.readyState || d.d() - C > 1e4 || z.F() || z.G() || z.H() || z.I()) && (j = !1),
            j
        }
        function x() {
            for (var n = 0; n < B.length; n++)
                L[M.length + n] = B[n]();
            return d.h(L)
        }
        function D() {
            for (var n in O)
                if (O.hasOwnProperty(n)) {
                    var t = O[n];
                    if (t())
                        return +n.substr(1)
                }
            return 0
        }
        function A(n) {
            var t = y.RTCPeerConnection || y.mozRTCPeerConnection || y.webkitRTCPeerConnection;
            if (!t)
                return void n(0);
            var i = {
                optional: [{
                    "RtpDataChannels": !0
                }]
            }
              , r = {
                iceServers: [{
                    urls: "stun:stun.services.mozilla.com"
                }],
                sdpSemantics: "plan-b"
            }
              , a = new t(r,i);
            s(function(n) {
                try {
                    a.close()
                } catch (t) {}
            }, 5e3),
            a.onicecandidate = function(t) {
                var i = t.candidate;
                if (!i)
                    return void n(0);
                var r = T(i.candidate);
                null != r && (n(r),
                a.onicecandidate = null)
            }
            ,
            a.createDataChannel(""),
            a.createOffer().then(function(n) {
                a.setLocalDescription(n, function() {}, function() {})
            })["catch"](function(t) {
                n(0)
            })
        }
        function T(n) {
            var t = /(\d+)\.(\d+)\.(\d+)\.(\d+)\D/.exec(n);
            return t ? (+t[1] << 24 | +t[2] << 16 | +t[3] << 8 | +t[4]) >>> 0 : null
        }
        function E() {
            C = d.d();
            for (var n = 0; n < M.length; n++)
                L[n] = M[n]()
        }
        var j = !0
          , C = 0
          , L = t(16)
          , M = [i, r, e, o, l]
          , B = [m, h, v, p, k, g];
        n.X = k,
        n.Y = x;
        var W = f.vendor
          , P = w.style
          , S = "chrome"in c
          , R = "ActiveXObject"in c
          , H = d.b(y.WeakMap)
          , O = {
            _13: function() {
                return "callPhantom"in y || /PhantomJS/i.test(_)
            },
            _14: function() {
                return /python/i.test(f.appVersion)
            },
            _15: function() {
                return "sgAppName"in f
            },
            _16: function() {
                return /Maxthon/i.test(W)
            },
            _17: function() {
                return "opr"in y
            },
            _18: function() {
                return S && /BIDUBrowser/i.test(_)
            },
            _19: function() {
                return S && /LBBROWSER/i.test(_)
            },
            _20: function() {
                return S && /QQBrowser/.test(_)
            },
            _21: function() {
                return S && /UBrowser/i.test(_)
            },
            _22: function() {
                return S && /2345Explorer/.test(_)
            },
            _23: function() {
                return S && /TheWorld/.test(_)
            },
            _24: function() {
                return S && "MSGesture"in y
            },
            _26: function() {
                return "aef"in y && /WW_IMSDK/.test(_)
            },
            _25: function() {
                return /Qianniu/.test(_)
            },
            _1: function() {
                return S
            },
            _2: function() {
                return "mozRTCIceCandidate"in y || "mozInnerScreenY"in y
            },
            _3: function() {
                return "safari"in y
            },
            _4: function() {
                return R && !("maxHeight"in P)
            },
            _5: function() {
                return R && !d.b(y.postMessage)
            },
            _6: function() {
                return R && !b
            },
            _7: function() {
                return R && !d.b(y.Uint8Array)
            },
            _8: function() {
                return R && !H
            },
            _9: function() {
                return R && H
            },
            _10: function() {
                return "Google Inc." === f.vendor
            },
            _11: function() {
                return "Apple Computer, Inc." === f.vendor
            },
            _12: function() {
                return R
            }
        };
        n.Z = D,
        n.$ = A,
        n.D = E
    }(D || (D = {}));
    var A, T = function() {
        function n() {
            var n = this
              , t = y.WeakMap;
            if (t)
                this._ = new t;
            else {
                var i = function() {
                    n.aa = [],
                    n.ba = []
                };
                i(),
                setInterval(i, 1e4)
            }
        }
        return n.prototype.ca = function(n, t) {
            var i = this._;
            i ? i.set(n, t) : (this.aa.push(n),
            this.ba.push(t))
        }
        ,
        n.prototype.da = function(n) {
            var t = this._;
            if (t)
                return t.get(n);
            var i = this.aa.indexOf(n);
            return i >= 0 ? this.ba[i] : void 0
        }
        ,
        n
    }();
    !function(n) {
        function t() {
            n.ea = i("1688.com,95095.com,a-isv.org,aliapp.org,alibaba-inc.com,alibaba.com,alibaba.net,alibabacapital.com,alibabacloud.com,alibabacorp.com,alibabadoctor.com,alibabagroup.com,alicdn.com,alidayu.com,aliexpress.com,alifanyi.com,alihealth.cn,alihealth.com.cn,alihealth.hk,alikmd.com,alimama.com,alimei.com,alios.cn,alipay-corp.com,alipay.com,aliplus.com,alisoft.com,alisports.com,alitianji.com,alitrip.com,alitrip.hk,aliunicorn.com,aliway.com,aliwork.com,alixiaomi.com,aliyun-inc.com,aliyun.com,aliyun.xin,aliyuncs.com,alizhaopin.com,amap.com,antfinancial-corp.com,antsdaq-corp.com,asczwa.com,atatech.org,autonavi.com,b2byao.com,bcvbw.com,cainiao-inc.cn,cainiao-inc.com,cainiao.com,cainiao.com.cn,cainiaoyizhan.com,cheng.xin,cibntv.net,cnzz.com,damai.cn,ddurl.to,dingding.xin,dingtalk.com,dingtalkapps.com,doctoryou.ai,doctoryou.cn,dratio.com,etao.com,feizhu.cn,feizhu.com,fliggy.com,fliggy.hk,freshhema.com,gaode.com,gein.cn,gongyi.xin,guoguo-app.com,hemaos.com,heyi.test,hichina.com,itao.com,jingguan.ai,jiyoujia.com,juhuasuan.com,koubei-corp.com,kumiao.com,laifeng.com,laiwang.com,lazada.co.id,lazada.co.th,lazada.com,lazada.com.my,lazada.com.ph,lazada.sg,lazada.vn,liangxinyao.com,lingshoujia.com,lwurl.to,mashangfangxin.com,mashort.cn,mdeer.com,miaostreet.com,mmstat.com,mshare.cc,mybank-corp.cn,nic.xin,pailitao.com,phpwind.com,phpwind.net,saee.org.cn,shenjing.com,shyhhema.com,sm.cn,soku.com,tanx.com,taobao.com,taobao.org,taopiaopiao.com,tb.cn,tmall.com,tmall.hk,tmall.ru,tmjl.ai,tudou.com,umeng.co,umeng.com,umengcloud.com,umsns.com,umtrack.com,wasu.tv,whalecloud.com,wrating.com,www.net.cn,xiami.com,ykimg.com,youku.com,yowhale.com,yunos-inc.com,yunos.com,yushanfang.com,zmxy-corp.com.cn,zuodao.com"),
            n.fa = i("127.0.0.1,afptrack.alimama.com,aldcdn.tmall.com,delivery.dayu.com,hzapush.aliexpress.com,local.alipcsec.com,localhost.wwbizsrv.alibaba.com,napi.uc.cn,sec.taobao.com,tce.alicdn.com,un.alibaba-inc.com,utp.ucweb.com,ynuf.aliapp.org"),
            n.ga = i("alicdn.com,aliimg.com,alimama.cn,alimmdn.com,alipay.com,alivecdn.com,aliyun.com,aliyuncs.com,amap.com,autonavi.com,cibntv.net,cnzz.com,facebook.com,googleapis.com,greencompute.org,lesiclub.cn,linezing.com,mmcdn.cn,mmstat.com,sm-tc.cn,sm.cn,soku.com,tanx.com,taobaocdn.com,tbcache.com,tbcdn.cn,tudou.com,uczzd.cn,umeng.com,wrating.com,xiami.net,xiaoshuo1-sm.com,ykimg.com,youku.com,zimgs.cn")
        }
        function i(n) {
            for (var t = {}, i = n.split(","), r = 0; r < i.length; r++)
                t[i[r]] = !0;
            return t
        }
        n.D = t
    }(A || (A = {}));
    var E;
    !function(t) {
        function i(n, t, i) {
            switch (i.length) {
            case 0:
                return t();
            case 1:
                return t(i[0]);
            case 2:
                return t(i[0], i[1]);
            default:
                return t(i[0], i[2], i[3])
            }
        }
        function r(n, t) {
            switch (t.length) {
            case 0:
                return new n;
            case 1:
                return new n(t[0]);
            case 2:
                return new n(t[0],t[1]);
            default:
                return new n(t[0],t[2],t[3])
            }
        }
        function a(n, a, e) {
            return function() {
                var o, c = arguments;
                try {
                    o = a(c, this, n)
                } catch (u) {
                    o = c,
                    k.A(u)
                }
                if (o) {
                    if (o === t.ha)
                        return;
                    c = o
                }
                return e ? r(n, c) : "apply"in n ? n.apply(this, c) : i(this, n, c)
            }
        }
        function e(n, t, i) {
            if (!n)
                return !1;
            var r = n[t];
            return !!r && (n[t] = a(r, i, !1),
            !0)
        }
        function o(n, t, i) {
            if (!n)
                return !1;
            var r = n[t];
            return !!r && (n[t] = a(r, i, !0),
            !0)
        }
        function c(t, i, r) {
            if (!u)
                return !1;
            var e = u(t, i);
            return !(!e || !e.set) && (e.set = a(e.set, r, !1),
            b || (e.get = function(n) {
                return function() {
                    return n.call(this)
                }
            }(e.get)),
            n.defineProperty(t, i, e),
            !0)
        }
        t.ha = -1;
        var u = n.getOwnPropertyDescriptor;
        t.ia = e,
        t.ja = o,
        t.ka = c
    }(E || (E = {}));
    var j, C = function() {
        function n(n) {
            this.la = n;
            for (var t = 0, i = n.length; t < i; t++)
                this[t] = 0
        }
        return n.prototype.ma = function() {
            for (var n = this.la, t = [], i = -1, r = 0, a = n.length; r < a; r++)
                for (var e = this[r], o = n[r], c = i += o; t[c] = 255 & e,
                0 != --o; )
                    --c,
                    e >>= 8;
            return t
        }
        ,
        n.prototype.na = function(n) {
            for (var t = this.la, i = 0, r = 0, a = t.length; r < a; r++) {
                var e = t[r]
                  , o = 0;
                do {
                    o = o << 8 | n[i++]
                } while (--e > 0);this[r] = o >>> 0
            }
        }
        ,
        n
    }();
    !function(n) {
        function t(n) {
            for (var t = 0, i = 0, r = n.length; i < r; i++)
                t = (t << 5) - t + n[i];
            return 255 & t
        }
        function i(n, t, i, r, a) {
            for (var e = n.length; t < e; )
                i[r++] = n[t++] ^ 255 & a,
                a = ~(131 * a)
        }
        function r(n) {
            for (var t = [], i = n.length, r = 0; r < i; r += 3) {
                var a = n[r] << 16 | n[r + 1] << 8 | n[r + 2];
                t.push(f.charAt(a >> 18), f.charAt(a >> 12 & 63), f.charAt(a >> 6 & 63), f.charAt(63 & a))
            }
            return t.join("")
        }
        function a(n) {
            for (var t = [], i = 0; i < n.length; i += 4) {
                var r = s[n.charAt(i)] << 18 | s[n.charAt(i + 1)] << 12 | s[n.charAt(i + 2)] << 6 | s[n.charAt(i + 3)];
                t.push(r >> 16, r >> 8 & 255, 255 & r)
            }
            return t
        }
        function e() {
            for (var n = 0; n < 64; n++) {
                var t = f.charAt(n);
                s[t] = n
            }
        }
        function o(n) {
            var a = t(n)
              , e = [u, a];
            return i(n, 0, e, 2, a),
            r(e)
        }
        function c(n) {
            var r = a(n)
              , e = r[1]
              , o = [];
            if (i(r, 2, o, 0, e),
            t(o) == e)
                return o
        }
        var u = 4
          , f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
          , s = {};
        n.D = e,
        n.oa = o,
        n.pa = c
    }(j || (j = {}));
    var L;
    !function(n) {
        function t() {
            for (var n = f.platform, t = 0; t < i.length; t++)
                if (i[t].test(n))
                    return t + 1;
            return 0
        }
        var i = [/^Win32/, /^Win64/, /^Linux armv|^Linux aarch64/, /^Android/, /^iPhone/, /^iPad/, /^MacIntel/, /^Linux [ix]\d+/, /^ARM/, /^iPod/, /^BlackBerry/];
        n.qa = t
    }(L || (L = {}));
    var M;
    !function(n) {
        function t() {
            return d.d() / 1e3 >>> 0
        }
        function i(n) {
            if (z.D(),
            D.D(),
            n) {
                var t = j.pa(n);
                t && a.na(t)
            }
            a[1] = d.a(),
            a[5] = D.Z(),
            a[6] = L.qa(),
            a[8] = d.c(f.userAgent);
            try {
                D.$(function(n) {
                    a[7] = n
                })
            } catch (i) {
                a[7] = 0
            }
        }
        function r(n, i) {
            0 == a[4] && (a[4] = d.a(),
            a[3] = t()),
            a[2] = t(),
            a[16] = D.Y();
            var r = !1;
            if (!D.X()) {
                a[9] = z.F(),
                a[10] = z.G(),
                a[11] = z.H(),
                a[12] = z.I();
                var o = z.M();
                a[13] = o.J,
                a[14] = o.K,
                r = o.L
            }
            a[17] = z.W(),
            a[18] = z.U();
            var c = z.P()
              , u = z.R()
              , f = z.Q()
              , s = [i, z.O(), n, c, r, !0, f, u];
            n && e++,
            a[15] = d.h(s),
            a[0] = e;
            var l = a.ma()
              , m = j.oa(l);
            return m
        }
        var a = new C([2, 2, 4, 4, 4, 1, 1, 4, 4, 3, 2, 2, 2, 2, 2, 1, 2, 1, 1, 1, 1])
          , e = 0;
        n.D = i,
        n.ra = r
    }(M || (M = {}));
    var B;
    !function(n) {
        function t(n, t) {
            var i = n.split(".")
              , r = i.length - 1
              , a = i[r];
            if (a in t)
                return !0;
            for (var e = r - 1; e >= 0; e--)
                if ((a = i[e] + "." + a)in t)
                    return !0;
            return !1
        }
        function i(n) {
            var t = l.hostname;
            if (T.test(t))
                return z.s(n),
                t;
            var i = t.split(".")
              , r = i.length;
            if (1 === r)
                return z.s(n),
                t;
            r > 5 && (r = 5),
            t = i.pop();
            for (var a = 2; a <= r && (t = i.pop() + "." + t,
            z.y(t),
            z.s(n),
            !(t in A.ea || t in A.fa || t in A.ga)) && z.r() !== n; a++)
                ;
            return t
        }
        function r(n) {
            var t = i(n)
              , r = "(^|\\.)" + t.replace(/\./g, "\\.") + "$";
            _ = new e(r,"i")
        }
        function o() {
            D = null;
            var n = M.ra(!1, null);
            z.s(n),
            d.k(g, n)
        }
        function f() {
            var n = M.ra(!0);
            z.s(n),
            null == D && (D = s(o, 20))
        }
        function m(n, t) {
            /^\/\//.test(n) && (n = l.protocol + n);
            var i = M.ra(!0);
            k.C(n, i, t)
        }
        function h(n, t) {
            if (t)
                for (var i = 0; i < t.length; i++) {
                    var r = t[i];
                    if (r.test && r.test(n))
                        return !0
                }
            return !1
        }
        function v(n) {
            var i;
            if (null != n && (n += "",
            i = d.g(n)),
            !i)
                return f(),
                !0;
            if (_.test(i))
                return f(),
                !0;
            if (T.test(i))
                return !1;
            var r = d.e(n, "?");
            return h(r, y.__sufei_point_list) ? (m(n, 0),
            !1) : !t(i, A.ga) && (!(i in A.fa) && (!/\/gw-open\/|\/gw\/|ascp\.alibaba\.com/.test(r) && (!h(r, y.__sufei_ignore_list) && (m(n, 0),
            !1))))
        }
        function p(n) {
            var i = u.referrer;
            if (i) {
                var r = d.g(i);
                if (r && t(r, A.ea))
                    return
            }
            m(i, 1)
        }
        function b() {
            z.w();
            for (var n = l.hostname.split("."), t = n.pop(); ; ) {
                var i = n.pop();
                if (!i)
                    break;
                t = i + "." + t,
                z.y(t),
                z.w()
            }
        }
        function w() {
            A.D(),
            z = new x(g);
            var n = new a(d.d() + 15552e6).toUTCString();
            z.x(n),
            z.z("/");
            var t = z.q();
            t.length > 1 && (k.B("exist_multi_isg"),
            b(),
            z.q().length > 0 && k.B("clear_fail"));
            var i = t[0];
            i || (i = d.j(g)),
            M.D(i),
            i = M.ra(!1, null),
            r(i),
            0 === t.length && p(i),
            d.i(c, "unload", function(n) {
                var t = M.ra(!1, !0);
                z.s(t),
                d.k(g, t)
            })
        }
        var _, z, D, T = /^(\d+\.)*\d+$/;
        n.sa = f,
        n.ta = v,
        n.D = w
    }(B || (B = {}));
    var W;
    !function(n) {
        function t() {
            i() || (r("insertBefore"),
            r("appendChild"))
        }
        function i() {
            var n = y.HTMLScriptElement;
            if (!n)
                return !1;
            var t = n.prototype
              , i = /^src$/i;
            return E.ia(t, "setAttribute", function(n) {
                var t = n[0]
                  , r = n[1];
                i.test(t) && e(r)
            }),
            E.ka(t, "src", function(n) {
                e(n[0])
            })
        }
        function r(n) {
            var t = y.Element;
            t ? E.ia(t.prototype, n, a) : (E.ia(w, n, a),
            E.ia(u.body, n, a))
        }
        function a(n) {
            var t = n[0];
            t && "SCRIPT" === t.tagName && e(t.src)
        }
        function e(n) {
            n += "",
            o.test(n) && B.ta(n)
        }
        n.D = t;
        var o = /callback=/
    }(W || (W = {}));
    var P;
    !function(n) {
        function t(n) {
            return d.e(n.href, "#")
        }
        function i(n) {
            var t = n.target;
            if (!t) {
                var i = f[0];
                i && (t = i.target)
            }
            return t
        }
        function r(n) {
            if (/^https?\:/.test(n.protocol)) {
                var r = i(n);
                if (!r || /^_self$/i.test(r)) {
                    if (t(n) === c && n.hash)
                        return
                }
                B.ta(n.href)
            }
        }
        function a(n) {
            if (!n.defaultPrevented)
                for (var t = n.target || n.srcElement; t; ) {
                    var i = t.tagName;
                    if ("A" === i || "AREA" === i) {
                        r(t);
                        break
                    }
                    t = t.parentNode
                }
        }
        function e(n) {
            var t = n.target || n.srcElement;
            s.da(t) !== m && B.ta(t.action)
        }
        function o() {
            f = u.getElementsByTagName("base"),
            c = t(l),
            d.i(u, "click", a),
            d.i(u, "submit", e);
            var n = y.HTMLFormElement;
            n && E.ia(n.prototype, "submit", function(n, t) {
                var i = t;
                B.ta(i.action),
                s.ca(i, ++m)
            })
        }
        var c, f, s = new T, m = 0;
        n.D = o
    }(P || (P = {}));
    var S;
    !function(n) {
        function t() {
            i(),
            /Mobile/.test(_) && (r(),
            a() || d.i(u, "DOMContentLoaded", a))
        }
        function i() {
            E.ia(y, "fetch", function(n) {
                var t = n[0]
                  , i = n[1];
                "string" == typeof t && B.ta(t) && (i = i || {},
                i.credentials && "omit" !== i.credentials || (i.credentials = "same-origin"),
                n[1] = i)
            })
        }
        function r() {
            var n = y.lib;
            if (n) {
                var t = !/taobao.com$/.test(l.hostname);
                E.ia(n.windvane, "call", function(n) {
                    if ("MtopWVPlugin" === n[0] && "send" === n[1]) {
                        var i = n[2];
                        if (t) {
                            (i.ext_headers || {})["X-Sufei-Token"] = M.ra(!0)
                        } else
                            B.sa()
                    }
                })
            }
        }
        function a() {
            var n = y.jsbridge;
            if (n && (n = n["default"]))
                return E.ia(n, "pushBack", function(n) {
                    "native:" === n[0] && B.sa()
                }),
                !0
        }
        n.D = t
    }(S || (S = {}));
    var R;
    !function(n) {
        function t() {
            var n = y.XMLHttpRequest;
            if (n) {
                var t = n.prototype;
                t && i(t) || r()
            }
            a()
        }
        function i(n) {
            var t = E.ia(n, "open", function(n, t) {
                var i = n[1];
                e.ca(t, i)
            })
              , i = E.ia(n, "send", function(n, t) {
                var i = e.da(t);
                B.ta(i)
            });
            return t && i
        }
        function r() {
            E.ja(y, "XMLHttpRequest", function() {
                B.ta()
            })
        }
        function a() {
            var n = /XMLHTTP/i;
            E.ja(y, "ActiveXObject", function(t) {
                var i = t[0];
                i && n.test(i) && B.ta()
            })
        }
        var e = new T;
        n.D = t
    }(R || (R = {}));
    var H;
    !function(n) {
        function t() {
            j.D(),
            B.D(),
            P.D(),
            R.D(),
            S.D(),
            W.D()
        }
        var i = "_sufei_data2";
        !function() {
            if (!u[i]) {
                u[i] = p;
                try {
                    t()
                } catch (n) {
                    k.A(n)
                }
            }
        }()
    }(H || (H = {}))
}(Object, Array, Function, Math, Date, RegExp, encodeURIComponent, window, document, navigator, setTimeout, location, history, screen, Image);
