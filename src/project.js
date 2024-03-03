window.__require = function e(t, n, o) {
    function c(i, r) {
        if (!n[i]) {
            if (!t[i]) {
                var s = i.split("/");
                if (s = s[s.length - 1], !t[s]) {
                    var l = "function" == typeof __require && __require;
                    if (!r && l) return l(s, !0);
                    if (a) return a(s, !0);
                    throw new Error("Cannot find module '" + i + "'")
                }
            }
            var u = n[i] = {
                exports: {}
            };
            t[i][0].call(u.exports, function(e) {
                return c(t[i][1][e] || e)
            }, u, u.exports, e, t, n, o)
        }
        return n[i].exports
    }
    for (var a = "function" == typeof __require && __require, i = 0; i < o.length; i++) c(o[i]);
    return c
}({
    AddScore: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "68076EFnW1JeZUzdnbOOKNr", "AddScore");
        var o = this && this.__extends || function() {
                var e = function(t, n) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(t, n)
                };
                return function(t, n) {
                    function o() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            c = this && this.__decorate || function(e, t, n, o) {
                var c, a = arguments.length,
                    i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o);
                else
                    for (var r = e.length - 1; r >= 0; r--)(c = e[r]) && (i = (a < 3 ? c(i) : a > 3 ? c(t, n, i) : c(t, n)) || i);
                return a > 3 && i && Object.defineProperty(t, n, i), i
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("../Common/Utils"),
            i = cc._decorator,
            r = i.ccclass,
            s = i.property,
            l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.addSign = null, t.label = null, t
                }
                return o(t, e), t.prototype.SetScore = function(e) {
                    this.label.string = e, this.scheduleOnce(function() {
                        a.default.CenteredUi(0, this.addSign, this.label.node)
                    }, 0)
                }, c([s(cc.Node)], t.prototype, "addSign", void 0), c([s(cc.Label)], t.prototype, "label", void 0), t = c([r], t)
            }(cc.Component);
        n.default = l, cc._RF.pop()
    }, {
        "../Common/Utils": "Utils"
    }],
    AdjusWithHeight: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "0fe07DOz8VMcYKlDM2VxHhQ", "AdjusWithHeight");
        var o = this && this.__extends || function() {
                var e = function(t, n) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(t, n)
                };
                return function(t, n) {
                    function o() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            c = this && this.__decorate || function(e, t, n, o) {
                var c, a = arguments.length,
                    i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o);
                else
                    for (var r = e.length - 1; r >= 0; r--)(c = e[r]) && (i = (a < 3 ? c(i) : a > 3 ? c(t, n, i) : c(t, n)) || i);
                return a > 3 && i && Object.defineProperty(t, n, i), i
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = cc.Enum({
                TOP: 0,
                BOTTOM: 1
            }),
            i = cc._decorator,
            r = i.ccclass,
            s = i.property,
            l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.type = a.TOP, t.offset = 0, t
                }
                return o(t, e), t.prototype.onLoad = function() {
                    var e = 0;
                    e = this.type == a.TOP ? cc.winSize.height / 2 : -cc.winSize.height / 2, this.node.y = e + this.offset
                }, c([s({
                    type: cc.Enum(a),
                    displayName: "AdjustType"
                })], t.prototype, "type", void 0), c([s], t.prototype, "offset", void 0), t = c([r], t)
            }(cc.Component);
        n.default = l, cc._RF.pop()
    }, {}],
    AniTools: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "f05dbksdAdHtpW4ZpV1zW/T", "AniTools");
        var o = {
            doLabStrAni: function(e, t, n) {
                e.node.stopAllActions(), e.string = "";
                var o = t.split(""),
                    c = 0,
                    a = n / o.length;
                e.node.runAction(cc.sequence(cc.callFunc(function() {
                    e.string = e.string + o[c], c++
                }), cc.delayTime(a)).repeat(o.length))
            },
            gunNumLabAni: function(e, t) {
                var n = parseInt(e.string);
                if (t != n) {
                    var o = 0,
                        c = t - n >= 50 ? 50 : t - n;
                    e.node.runAction(cc.sequence(cc.callFunc(function() {
                        o >= c - 1 ? e.string = t : (n++, e.string = n), o++
                    }), cc.delayTime(.02)).repeat(c))
                }
            },
            openUIAni: function(e, t, n, o) {
                e.opacity = 0, t.scale = 0, e.runAction(cc.fadeTo(n, 100)), t.runAction(cc.sequence(cc.scaleTo(n, 1).easing(cc.easeBackOut()), cc.callFunc(o)))
            },
            closeUIAni: function(e, t, n, o) {
                e.runAction(cc.fadeOut(n)), t.runAction(cc.sequence(cc.scaleTo(n, 0).easing(cc.easeBackIn()), cc.callFunc(o)))
            },
            fireColorArr: ["#F5CD4D", "#F77986", "#D0F057", "#7ACCE8", "#E365EE"],
            fireworksAni: function(e, t, n, o) {
                for (var c = 0; c < t; c++) {
                    var a = ToolsJs.newSprite("fire" + this.returnRanNum(1, 4));
                    a.scale = .3 + .5 * Math.random(), a.position = n, a.color = cc.color(this.fireColorArr[this.returnRanNum(0, this.fireColorArr.length - 1)]), e.addChild(a, 88);
                    var i = this.returnRanNum(o - 15, o + 15),
                        r = this.returnRanNum(300, 1e3);
                    this.fireObjAni(a, i, r, 350, .005 * c)
                }
            },
            fireObjAni: function(e, t, n, o) {
                var c = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                    a = .1 + .5 * Math.random();
                e.runAction(cc.rotateBy(a, this.returnRanNum(-360, 360)).repeatForever());
                var i = cc.misc.degreesToRadians(t),
                    r = cc.v2(Math.cos(i) * n, Math.sin(i) * n),
                    s = n / o;
                e.runAction(cc.sequence(cc.delayTime(c), cc.jumpBy(s, cc.v2(1.5 * r.x, 0), n, 1), cc.removeSelf(!0)))
            },
            bombObjAni: function(e, t, n, o, c, a) {
                t = t || this.returnRanNum(-180, 180);
                var i = cc.misc.degreesToRadians(t),
                    r = cc.v2(Math.cos(i) * n, Math.sin(i) * n),
                    s = n / o,
                    l = c ? 0 : e.scale,
                    u = a ? 0 : 255;
                e.runAction(cc.sequence(cc.spawn(cc.scaleTo(s + .1, l), cc.moveBy(s, r).easing(cc.easeQuadraticActionOut()), cc.fadeTo(s + .1, u)), cc.fadeOut(.1), cc.removeSelf(!0)))
            },
            playAni: function(e, t) {
                e.getComponent(cc.Animation).play(t)
            },
            stopAni: function(e, t) {
                e.getComponent(cc.Animation).stop(t)
            },
            addNodeAni: function(e, t, n, o, c, a, i) {
                for (var r = e.getComponent(cc.Animation), s = [], l = o; l <= c; l++) {
                    var u = new cc.SpriteFrame(cc.url.raw("resources/" + t + l + ".png"));
                    s.push(u)
                }
                var d = cc.AnimationClip.createWithSpriteFrames(s, 5);
                d.name = n, d.speed = i, d.wrapMode = a ? cc.WrapMode.Loop : cc.WrapMode.Normal, r.addClip(d)
            },
            returnRanNum: function(e, t) {
                return e + Math.floor(Math.random() * (t - e + 1))
            }
        };
        window.AniTools = o, cc._RF.pop()
    }, {}],
    AudioManager: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "3db2d9MuTtO8JRQKnPm9kfu", "AudioManager");
        var o = this && this.__extends || function() {
                var e = function(t, n) {
                    return (e = Object.setProtot