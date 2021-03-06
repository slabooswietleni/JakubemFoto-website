const halkaBox = function () {
    "use strict";

    function e(e) {
        var t;
        for (t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
        return n
    }

    function t(e, t) {
        function i(e, t) {
            function n() {
                if (!P[i] && e + t >= i) {
                    var o = document.createElement("div");
                    o.classList.add("hb-loader"), "dark" === J.theme && (o.style.borderTop = "5px solid #999");
                    var l = document.createElement("img");
                    P[i] = document.createElement("div"), P[i].style.opacity = 0, P[i].style.display = "none", M.appendChild(P[i]), P[i].appendChild(o), P[i].appendChild(l), l.onload = function () {
                        o.style.display = "none", i += 1, n()
                    }, l.onerror = function () {
                        var e = document.createElement("p");
                        e.innerHTML = "Image not found.", "light" === J.theme ? e.classList.add("hb-err-text-black") : "dark" === J.theme && e.classList.add("hb-err-text-white"), o.style.display = "none", P[i].appendChild(e), i += 1, n()
                    }, l.src = H[i].href
                } else e + t >= i && (i += 1, n())
            }
            e + t >= I && (t = I - e - 1);
            var i = e;
            n()
        }

        function o(e, t) {
            function n() {
                if (!P[i] && i >= e - t) {
                    var o = document.createElement("div");
                    o.classList.add("hb-loader"), "dark" === J.theme && (o.style.borderTop = "5px solid #999");
                    var l = document.createElement("img");
                    P[i] = document.createElement("div"), P[i].style.opacity = 0, P[i].style.display = "none", M.appendChild(P[i]), P[i].appendChild(o), P[i].appendChild(l), l.onload = function () {
                        o.style.display = "none", i -= 1, n()
                    }, l.onerror = function () {
                        var e = document.createElement("p");
                        e.innerHTML = "Image not found.", "light" === J.theme ? e.classList.add("hb-err-text-black") : "dark" === J.theme && e.classList.add("hb-err-text-white"), o.style.display = "none", P[i].appendChild(e), i -= 1, n()
                    }, l.src = H[i].href
                } else i >= e - t && (i -= 1, n())
            }
            0 > e - t && (t = e);
            var i = e;
            n()
        }

        function l(e) {
            1 !== I && ("slide" === J.animation ? (P[v].style.animation = "slideNextOut 0.3s ease-out forwards", window.setTimeout(function () {
                P[v].style.opacity = 0, P[v].style.display = "none", v > I - 2 && (v = -1), v += 1, i(v, J.preload), P[v].style.display = "block", P[v].style.animation = "slideNextIn 0.3s ease-out forwards"
            }, 300)) : "fade" === J.animation && (P[v].style.opacity = 0, window.setTimeout(function () {
                P[v].style.display = "none", v > I - 2 && (v = -1), v += 1, i(v, J.preload), P[v].style.display = "block", window.setTimeout(function () {
                    P[v].style.opacity = 1
                }, 50)
            }, 300)))
        }

        function s(e) {
            1 !== I && ("slide" === J.animation ? (P[v].style.animation = "slidePreviousOut 0.3s ease-out forwards", window.setTimeout(function () {
                P[v].style.opacity = 0, P[v].style.display = "none", 0 === v && (v = I), v -= 1, o(v, J.preload), P[v].style.display = "block", P[v].style.animation = "slidePreviousIn 0.3s ease-out forwards"
            }, 300)) : "fade" === J.animation && (P[v].style.opacity = 0, window.setTimeout(function () {
                P[v].style.display = "none", 0 === v && (v = I), v -= 1, o(v, J.preload), P[v].style.display = "block", window.setTimeout(function () {
                    P[v].style.opacity = 1
                }, 50)
            }, 300)))
        }

        function r(e) {
            e.preventDefault(), P[v].style.opacity = 0, W.style.opacity = 0, window.setTimeout(function () {
                P[v].style.display = "none", W.style.display = "none"
            }, 300), H[v].focus(), H[v].blur(), T()
        }

        function a(e) {
            e.stopPropagation(), e.preventDefault(), (e.target === M || e.target === D || e.target === P[v]) && r(e)
        }

        function d(t) {
            t.stopPropagation(), t.preventDefault(), 27 === t.which ? r(t) : 37 === t.which && "single" !== e ? s() : 39 === t.which && "single" !== e && l()
        }

        function c(e) {
            return window.innerWidth < window.innerHeight !== k && (k = k === !0 ? !1 : !0, E = window.innerWidth), window.innerWidth === E && 1 === e.touches.length ? void(x = e.changedTouches[0].pageX) : !1
        }

        function u(e) {
            var t = e.touches[0] || e.changedTouches[0],
                n = e.touches.length;
            return b === !1 && window.innerWidth === E && 2 !== n ? (e.preventDefault(), void(t.pageX - x > 50 ? (b = !0, s()) : t.pageX - x < -50 && (b = !0, l()))) : !1
        }

        function p() {
            b = !1
        }

        function h() {
            j.style.opacity = 0, q.style.opacity = 0, N.style.opacity = 0
        }

        function y() {
            j.style.opacity = null, q.style.opacity = null, N.style.opacity = null
        }
        var m, v, w, g, f, b, E, k, x, L, T, C, A, B = document.getElementsByTagName("body")[0],
            H = document.querySelectorAll('a[data-hb="' + e + '"]'),
            I = H.length,
            P = [],
            W = document.createElement("div"),
            D = document.createElement("div"),
            M = document.createElement("div"),
            O = document.createElement("div"),
            N = document.createElement("a"),
            X = document.createElement("div"),
            q = document.createElement("a"),
            S = document.createElement("div"),
            j = document.createElement("a"),
            z = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"y="0px" viewBox="0 0 357 357" enable-background="new 0 0 357 357" xml:space="preserve"><g><g id="close"><polygon points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 214.2,178.5"/></g></g></svg>',
            F = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 306 306" enable-background="new 0 0 306 306" xml:space="preserve"><g><g id="chevron-right"><polygon points="58.7,153 211.7,306 247.4,270.3 130.1,153 247.4,35.7 211.7,0"/></g></g></svg>',
            G = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 306 306" enable-background="new 0 0 306 306" xml:space="preserve"><g><g id="chevron-right"><polygon points="94.3,0 58.7,35.7 175.9,153 58.7,270.3 94.3,306 247.4,153"/></g></g></svg>',
            J = {};
        for (A in n) n.hasOwnProperty(A) && (J[A] = n[A]);
        for (A in t) t.hasOwnProperty(A) && (J[A] = t[A]);
        W.setAttribute("class", "hb-wrapper"), W.setAttribute("id", "hb-wrapper" + e), D.setAttribute("class", "hb-main-container"), M.setAttribute("class", "hb-image-container"), O.setAttribute("class", "hb-close-icon-container"), N.setAttribute("id", "hb-close-" + e), N.setAttribute("class", "hb-close"), X.setAttribute("class", "hb-left-icon-container"), q.setAttribute("id", "hb-left-" + e), q.setAttribute("class", "hb-left"), S.setAttribute("class", "hb-right-icon-container"), j.setAttribute("id", "hb-right-" + e), j.setAttribute("class", "hb-right"), S.appendChild(j), j.innerHTML = G, X.appendChild(q), q.innerHTML = F, O.appendChild(N), N.innerHTML = z, D.appendChild(M), D.appendChild(O), D.appendChild(X), D.appendChild(S), W.appendChild(D), ("ontouchstart" in window && J.hideButtons === !0 || "single" === e || 1 === I) && (S.style.display = "none", X.style.display = "none"), "dark" === J.theme && (D.setAttribute("style", "background-color: #000; background-color: rgba(0, 0, 0, 0.9);"), j.children[0].style.fill = "#fff", q.children[0].style.fill = "#fff", N.children[0].style.fill = "#fff", window.innerWidth <= 960 && (j.children[0].style.fill = "#111", q.children[0].style.fill = "#111", N.children[0].style.fill = "#111")), W.style.display = "none", B.appendChild(W), w = document.getElementById("hb-close-" + e), g = document.getElementById("hb-left-" + e), f = document.getElementById("hb-right-" + e), b = !1, E = window.innerWidth, k = window.innerWidth < window.innerHeight ? !0 : !1, L = function () {
            "single" !== e && (f.addEventListener("click", l, !1), g.addEventListener("click", s, !1)), w.addEventListener("click", r, !1), D.addEventListener("click", a, !1), M.addEventListener("click", a, !1), W.addEventListener("mouseout", h, !1), W.addEventListener("mouseover", y, !1), window.addEventListener("keyup", d, !1), "single" !== e && (W.addEventListener("touchstart", c, !1), W.addEventListener("touchmove", u, !1), W.addEventListener("touchend", p, !1))
        }, T = function () {
            "single" !== e && (f.removeEventListener("click", l), g.removeEventListener("click", s)), w.removeEventListener("click", r), D.removeEventListener("click", a), M.removeEventListener("click", a), W.removeEventListener("mouseout", h, !1), W.removeEventListener("mouseover", y, !1), window.removeEventListener("keyup", d), "single" !== e && (W.removeEventListener("touchstart", c), W.removeEventListener("touchmove", u), W.removeEventListener("touchend", p))
        }, C = function (e) {
            return function (t) {
                t.preventDefault(), v = e, H[v].blur(), W.style.display = "block", window.setTimeout(function () {
                    W.style.opacity = 1
                }, 50), i(v, J.preload), o(v, J.preload), P[v].style.animation = "none", P[v].style.display = "block", P[v].style.opacity = 1, L()
            }
        };
        for (m = 0; I > m; m += 1) H[m].addEventListener("click", C(m))
    }
    var n = {
        hideButtons: !0,
        animation: "slide",
        theme: "light",
        preload: 2
    };
    return {
        run: t,
        options: e
    }
}();
module.exports = {halkaBox: halkaBox};
