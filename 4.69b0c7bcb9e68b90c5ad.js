(window.webpackJsonp = window.webpackJsonp || []).push([
    [4], {
        lBUW: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, "AuthModule", (function() { return b }));
            var o = e("ofXK"),
                r = e("tyNb"),
                i = e("fXoL"),
                c = e("A1CT");
            const s = [{
                path: "login",
                component: (() => {
                    class t {
                        constructor(t) { this.utilityService = t, this.utilityService.title = "Login" }
                        ngOnInit() {}
                    }
                    return t.\u0275fac = function(n) { return new(n || t)(i.Jb(c.a)) }, t.\u0275cmp = i.Db({
                        type: t,
                        selectors: [
                            ["app-login"]
                        ],
                        decls: 13,
                        vars: 0,
                        consts: [
                            [1, "row"],
                            [1, "col-md-6"],
                            ["id", "ImgLogin", "src", "https://sankar108.github.io/MotelAdmiLive/assets/images/login.jpg "],
                            [1, "card", "text-center"],
                            [1, "form-group"],
                            ["type", "text", "placeholder", "UserName", 1, "form-control"],
                            ["type", "password", "placeholder", "Password", 1, "form-control"],
                            ["type", "button", "value", "Proceed", "routerLink", "/dashboard", 1, "btn", "btn-primary"]
                        ],
                        template: function(t, n) { 1 & t && (i.Ob(0, "div", 0), i.Ob(1, "div", 1), i.Kb(2, "img", 2), i.Nb(), i.Ob(3, "div", 1), i.Ob(4, "div", 3), i.Ob(5, "h2"), i.vc(6, "Century Motel"), i.Nb(), i.Ob(7, "div", 4), i.Kb(8, "input", 5), i.Kb(9, "br"), i.Kb(10, "input", 6), i.Kb(11, "br"), i.Kb(12, "input", 7), i.Nb(), i.Nb(), i.Nb(), i.Nb()) },
                        directives: [r.c],
                        styles: [".card[_ngcontent-%COMP%]{padding:15px;width:80%;margin:15px auto auto}#ImgLogin[_ngcontent-%COMP%]{padding:15px;width:250px}"]
                    }), t
                })()
            }];
            let p = (() => {
                    class t {}
                    return t.\u0275mod = i.Hb({ type: t }), t.\u0275inj = i.Gb({
                        factory: function(n) { return new(n || t) },
                        imports: [
                            [r.e.forChild(s)], r.e
                        ]
                    }), t
                })(),
                b = (() => {
                    class t {}
                    return t.\u0275mod = i.Hb({ type: t }), t.\u0275inj = i.Gb({
                        factory: function(n) { return new(n || t) },
                        imports: [
                            [o.c, p, r.e]
                        ]
                    }), t
                })()
        }
    }
]);