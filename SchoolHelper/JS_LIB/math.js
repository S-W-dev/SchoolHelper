/**
 * math.js
 * https://github.com/josdejong/mathjs
 *
 * Math.js is an extensive math library for JavaScript and Node.js,
 * It features real and complex numbers, units, matrices, a large set of
 * mathematical functions, and a flexible expression parser.
 *
 * @version 0.15.0
 * @date    2013-10-26
 *
 * @license
 * Copyright (C) 2013 Jos de Jong <wjosdejong@gmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy
 * of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
! function (e) {
    if ("function" == typeof bootstrap) bootstrap("mathjs", e);
    else if ("object" == typeof exports) module.exports = e();
    else if ("function" == typeof define && define.amd) define(e);
    else if ("undefined" != typeof ses) {
        if (!ses.ok()) return;
        ses.makeMathjs = e
    } else "undefined" != typeof window ? window.mathjs = e() : global.mathjs = e()
}(function () {
    return function e(t, n, r) {
        function i(a, s) {
            if (!n[a]) {
                if (!t[a]) {
                    var u = "function" == typeof require && require;
                    if (!s && u) return u(a, !0);
                    if (o) return o(a, !0);
                    throw new Error("Cannot find module '" + a + "'")
                }
                var l = n[a] = {
                    exports: {}
                };
                t[a][0].call(l.exports, function (e) {
                    var n = t[a][1][e];
                    return i(n ? n : e)
                }, l, l.exports, e, t, n, r)
            }
            return n[a].exports
        }
        for (var o = "function" == typeof require && require, a = 0; a < r.length; a++) i(r[a]);
        return i
    }({
        1: [function (e, t) {
            function n(t) {
                var n = {};
                if (n.options = {
                        matrix: {
                            defaultType: "matrix"
                        }
                    }, r.deepExtend(n.options, t), Object.defineProperty) {
                    var i = function () {
                        throw new Error("Option math.options.precision is deprecated. Use math.format(value, precision) instead.")
                    };
                    Object.defineProperty(n.options, "precision", {
                        get: i,
                        set: i,
                        enumerable: !1,
                        configurable: !1
                    });
                    var o = function () {
                        throw new Error("Option math.options.matrix.default is deprecated. Use math.options.matrix.defaultType instead.")
                    };
                    Object.defineProperty(n.options.matrix, "default", {
                        get: o,
                        set: o,
                        enumerable: !1,
                        configurable: !1
                    })
                }
                return n.expression = {}, n.expression.node = e("./lib/expression/node/index.js"), n.expression.Scope = e("./lib/expression/Scope.js"), n.expression.Parser = e("./lib/expression/Parser.js"), n.expression.docs = e("./lib/expression/docs/index.js"), n.expr = {}, n.expr.Scope = function () {
                    throw new Error("Moved to math.expression.Scope")
                }, n.expr.Parser = function () {
                    throw new Error("Moved to math.expression.Parser")
                }, n.type = {}, n.type.Complex = e("./lib/type/Complex.js"), n.type.Range = e("./lib/type/Range.js"), n.type.Index = e("./lib/type/Index.js"), n.type.Matrix = e("./lib/type/Matrix.js"), n.type.Unit = e("./lib/type/Unit.js"), n.type.Help = e("./lib/type/Help.js"), n.collection = e("./lib/type/collection.js"), e("./lib/function/expression/eval.js")(n), e("./lib/function/expression/help.js")(n), e("./lib/function/expression/parse.js")(n), e("./lib/function/arithmetic/abs.js")(n), e("./lib/function/arithmetic/add.js")(n), e("./lib/function/arithmetic/add.js")(n), e("./lib/function/arithmetic/ceil.js")(n), e("./lib/function/arithmetic/cube.js")(n), e("./lib/function/arithmetic/divide.js")(n), e("./lib/function/arithmetic/edivide.js")(n), e("./lib/function/arithmetic/emultiply.js")(n), e("./lib/function/arithmetic/epow.js")(n), e("./lib/function/arithmetic/equal.js")(n), e("./lib/function/arithmetic/exp.js")(n), e("./lib/function/arithmetic/fix.js")(n), e("./lib/function/arithmetic/floor.js")(n), e("./lib/function/arithmetic/gcd.js")(n), e("./lib/function/arithmetic/larger.js")(n), e("./lib/function/arithmetic/largereq.js")(n), e("./lib/function/arithmetic/lcm.js")(n), e("./lib/function/arithmetic/log.js")(n), e("./lib/function/arithmetic/log10.js")(n), e("./lib/function/arithmetic/mod.js")(n), e("./lib/function/arithmetic/multiply.js")(n), e("./lib/function/arithmetic/pow.js")(n), e("./lib/function/arithmetic/round.js")(n), e("./lib/function/arithmetic/sign.js")(n), e("./lib/function/arithmetic/smaller.js")(n), e("./lib/function/arithmetic/smallereq.js")(n), e("./lib/function/arithmetic/sqrt.js")(n), e("./lib/function/arithmetic/square.js")(n), e("./lib/function/arithmetic/subtract.js")(n), e("./lib/function/arithmetic/unary.js")(n), e("./lib/function/arithmetic/unequal.js")(n), e("./lib/function/arithmetic/xgcd.js")(n), e("./lib/function/complex/arg.js")(n), e("./lib/function/complex/conj.js")(n), e("./lib/function/complex/re.js")(n), e("./lib/function/complex/im.js")(n), e("./lib/function/construction/boolean.js")(n), e("./lib/function/construction/complex.js")(n), e("./lib/function/construction/index.js")(n), e("./lib/function/construction/matrix.js")(n), e("./lib/function/construction/number.js")(n), e("./lib/function/construction/parser.js")(n), e("./lib/function/construction/string.js")(n), e("./lib/function/construction/unit.js")(n), e("./lib/function/matrix/concat.js")(n), e("./lib/function/matrix/det.js")(n), e("./lib/function/matrix/diag.js")(n), e("./lib/function/matrix/eye.js")(n), e("./lib/function/matrix/inv.js")(n), e("./lib/function/matrix/ones.js")(n), e("./lib/function/matrix/range.js")(n), e("./lib/function/matrix/size.js")(n), e("./lib/function/matrix/squeeze.js")(n), e("./lib/function/matrix/subset.js")(n), e("./lib/function/matrix/transpose.js")(n), e("./lib/function/matrix/zeros.js")(n), e("./lib/function/probability/factorial.js")(n), e("./lib/function/probability/random.js")(n), e("./lib/function/statistics/min.js")(n), e("./lib/function/statistics/max.js")(n), e("./lib/function/statistics/mean.js")(n), e("./lib/function/trigonometry/acos.js")(n), e("./lib/function/trigonometry/asin.js")(n), e("./lib/function/trigonometry/atan.js")(n), e("./lib/function/trigonometry/atan2.js")(n), e("./lib/function/trigonometry/cos.js")(n), e("./lib/function/trigonometry/cot.js")(n), e("./lib/function/trigonometry/csc.js")(n), e("./lib/function/trigonometry/sec.js")(n), e("./lib/function/trigonometry/sin.js")(n), e("./lib/function/trigonometry/tan.js")(n), e("./lib/function/units/in.js")(n), e("./lib/function/utils/clone.js")(n), e("./lib/function/utils/format.js")(n), e("./lib/function/utils/import.js")(n), e("./lib/function/utils/map.js")(n), e("./lib/function/utils/print.js")(n), e("./lib/function/utils/select.js")(n), e("./lib/function/utils/typeof.js")(n), e("./lib/function/utils/forEach.js")(n), e("./lib/constants.js")(n), n.chaining = {}, n.chaining.Selector = e("./lib/chaining/Selector.js")(n), n.expr.Selector = function () {
                    throw new Error("Moved to math.expression.Selector")
                }, n
            }
            var r = e("./lib/util/object");
            t.exports = n;
            var i = function () {
                    throw new Error('Static function calls are deprecated. Create an instance of math.js:\n	"var math = require(\'mathjs\')();" on node.js, \n	"var math = mathjs();" in the browser.')
                },
                o = n();
            for (var a in o)
                if (o.hasOwnProperty(a)) {
                    var s = o[a];
                    "function" == typeof s ? n[a] = i : Object.defineProperty && Object.defineProperty(n, a, {
                        get: i,
                        set: i,
                        enumerable: !0,
                        configurable: !1
                    })
                }
            "undefined" != typeof window && (window.math = n)
        }, {
            "./lib/chaining/Selector.js": 2,
            "./lib/constants.js": 3,
            "./lib/expression/Parser.js": 4,
            "./lib/expression/Scope.js": 5,
            "./lib/expression/docs/index.js": 101,
            "./lib/expression/node/index.js": 114,
            "./lib/function/arithmetic/abs.js": 115,
            "./lib/function/arithmetic/add.js": 116,
            "./lib/function/arithmetic/ceil.js": 117,
            "./lib/function/arithmetic/cube.js": 118,
            "./lib/function/arithmetic/divide.js": 119,
            "./lib/function/arithmetic/edivide.js": 120,
            "./lib/function/arithmetic/emultiply.js": 121,
            "./lib/function/arithmetic/epow.js": 122,
            "./lib/function/arithmetic/equal.js": 123,
            "./lib/function/arithmetic/exp.js": 124,
            "./lib/function/arithmetic/fix.js": 125,
            "./lib/function/arithmetic/floor.js": 126,
            "./lib/function/arithmetic/gcd.js": 127,
            "./lib/function/arithmetic/larger.js": 128,
            "./lib/function/arithmetic/largereq.js": 129,
            "./lib/function/arithmetic/lcm.js": 130,
            "./lib/function/arithmetic/log.js": 131,
            "./lib/function/arithmetic/log10.js": 132,
            "./lib/function/arithmetic/mod.js": 133,
            "./lib/function/arithmetic/multiply.js": 134,
            "./lib/function/arithmetic/pow.js": 135,
            "./lib/function/arithmetic/round.js": 136,
            "./lib/function/arithmetic/sign.js": 137,
            "./lib/function/arithmetic/smaller.js": 138,
            "./lib/function/arithmetic/smallereq.js": 139,
            "./lib/function/arithmetic/sqrt.js": 140,
            "./lib/function/arithmetic/square.js": 141,
            "./lib/function/arithmetic/subtract.js": 142,
            "./lib/function/arithmetic/unary.js": 143,
            "./lib/function/arithmetic/unequal.js": 144,
            "./lib/function/arithmetic/xgcd.js": 145,
            "./lib/function/complex/arg.js": 146,
            "./lib/function/complex/conj.js": 147,
            "./lib/function/complex/im.js": 148,
            "./lib/function/complex/re.js": 149,
            "./lib/function/construction/boolean.js": 150,
            "./lib/function/construction/complex.js": 151,
            "./lib/function/construction/index.js": 152,
            "./lib/function/construction/matrix.js": 153,
            "./lib/function/construction/number.js": 154,
            "./lib/function/construction/parser.js": 155,
            "./lib/function/construction/string.js": 156,
            "./lib/function/construction/unit.js": 157,
            "./lib/function/expression/eval.js": 158,
            "./lib/function/expression/help.js": 159,
            "./lib/function/expression/parse.js": 160,
            "./lib/function/matrix/concat.js": 161,
            "./lib/function/matrix/det.js": 162,
            "./lib/function/matrix/diag.js": 163,
            "./lib/function/matrix/eye.js": 164,
            "./lib/function/matrix/inv.js": 165,
            "./lib/function/matrix/ones.js": 166,
            "./lib/function/matrix/range.js": 167,
            "./lib/function/matrix/size.js": 168,
            "./lib/function/matrix/squeeze.js": 169,
            "./lib/function/matrix/subset.js": 170,
            "./lib/function/matrix/transpose.js": 171,
            "./lib/function/matrix/zeros.js": 172,
            "./lib/function/probability/factorial.js": 173,
            "./lib/function/probability/random.js": 174,
            "./lib/function/statistics/max.js": 175,
            "./lib/function/statistics/mean.js": 176,
            "./lib/function/statistics/min.js": 177,
            "./lib/function/trigonometry/acos.js": 178,
            "./lib/function/trigonometry/asin.js": 179,
            "./lib/function/trigonometry/atan.js": 180,
            "./lib/function/trigonometry/atan2.js": 181,
            "./lib/function/trigonometry/cos.js": 182,
            "./lib/function/trigonometry/cot.js": 183,
            "./lib/function/trigonometry/csc.js": 184,
            "./lib/function/trigonometry/sec.js": 185,
            "./lib/function/trigonometry/sin.js": 186,
            "./lib/function/trigonometry/tan.js": 187,
            "./lib/function/units/in.js": 188,
            "./lib/function/utils/clone.js": 189,
            "./lib/function/utils/forEach.js": 190,
            "./lib/function/utils/format.js": 191,
            "./lib/function/utils/import.js": 192,
            "./lib/function/utils/map.js": 193,
            "./lib/function/utils/print.js": 194,
            "./lib/function/utils/select.js": 195,
            "./lib/function/utils/typeof.js": 196,
            "./lib/type/Complex.js": 197,
            "./lib/type/Help.js": 198,
            "./lib/type/Index.js": 199,
            "./lib/type/Matrix.js": 200,
            "./lib/type/Range.js": 201,
            "./lib/type/Unit.js": 202,
            "./lib/type/collection.js": 203,
            "./lib/util/object": 209
        }],
        2: [function (e, t) {
            t.exports = function (t) {
                function n(e) {
                    if (!(this instanceof n)) throw new SyntaxError("Selector constructor must be called with the new operator");
                    this.value = e instanceof n ? e.value : e
                }

                function r(e, t) {
                    var r = Array.prototype.slice;
                    n.prototype[e] = "function" == typeof t ? function () {
                        var e = [this.value].concat(r.call(arguments, 0));
                        return new n(t.apply(this, e))
                    } : new n(t)
                }
                var i = e("../util/index"),
                    o = i.string;
                n.prototype = {
                    done: function () {
                        return this.value
                    },
                    get: function () {
                        throw new Error("Selector.get is removed. Use Selector.subset(index) instead.")
                    },
                    set: function () {
                        throw new Error("Selector.set is removed. Use Selector.subset(index, replacement) instead.")
                    },
                    valueOf: function () {
                        return this.value
                    },
                    toString: function () {
                        return o.format(this.value)
                    }
                }, n.createProxy = r;
                for (var a in t) t.hasOwnProperty(a) && a && r(a, t[a]);
                return i.types.addType("selector", n), n
            }
        }, {
            "../util/index": 207
        }],
        3: [function (e, t) {
            t.exports = function (t) {
                var n = e("./type/Complex");
                t.pi = Math.PI, t.e = Math.E, t.tau = 2 * Math.PI, t.i = new n(0, 1), t.Infinity = 1 / 0, t.NaN = 0 / 0, t["true"] = !0, t["false"] = !1, t.E = Math.E, t.LN2 = Math.LN2, t.LN10 = Math.LN10, t.LOG2E = Math.LOG2E, t.LOG10E = Math.LOG10E, t.PI = Math.PI, t.SQRT1_2 = Math.SQRT1_2, t.SQRT2 = Math.SQRT2
            }
        }, {
            "./type/Complex": 197
        }],
        4: [function (e, t) {
            function n(e) {
                if (!(this instanceof n)) throw new SyntaxError("Parser constructor must be called with the new operator");
                this.math = e, this.scope = new r(e)
            }
            var r = e("./Scope");
            n.prototype.parse = function (e) {
                return this.math.parse(e, this.scope)
            }, n.prototype.eval = function (e) {
                var t = this.math.parse(e, this.scope);
                return t.eval()
            }, n.prototype.get = function (e) {
                return this.scope.get(e)
            }, n.prototype.set = function (e, t) {
                return this.scope.set(e, t)
            }, n.prototype.remove = function (e) {
                this.scope.remove(e)
            }, n.prototype.clear = function () {
                this.scope.clear()
            }, t.exports = n
        }, {
            "./Scope": 5
        }],
        5: [function (e, t) {
            function n(e, t, r) {
                this.math = e, this.parentScope = null, this.subScopes = null, this.symbols = {}, this.cache = {}, t && (t instanceof n ? this.parentScope = t : t instanceof Object && (this.symbols = t)), r && r instanceof Object && (this.symbols = r)
            }
            var r = e("../type/Unit");
            n.prototype = {
                createSubScope: function () {
                    var e = new n(this.math, this);
                    return this.subScopes || (this.subScopes = []), this.subScopes.push(e), e
                },
                get: function (e) {
                    var t;
                    if (t = this.symbols[e], void 0 !== t) return t;
                    var n = this.cache[e];
                    if (n) return n[e];
                    for (var i = this.parentScope; i;) {
                        if (t = i.symbols[e], void 0 !== t) return this.cache[e] = i.symbols, t;
                        i = i.parentScope
                    }
                    return t = this.math[e], void 0 !== t ? (this.cache[e] = this.math, t) : r.isPlainUnit(e) ? (t = new r(null, e), this.cache[e] = {}, this.cache[e][e] = t, t) : void 0
                },
                has: function (e) {
                    return void 0 !== this.symbols[e]
                },
                set: function (e, t) {
                    return this.symbols[e] = t
                },
                remove: function (e) {
                    delete this.symbols[e]
                },
                clear: function () {
                    var e = this.symbols;
                    for (var t in e) e.hasOwnProperty(t) && delete e[t];
                    if (this.subScopes)
                        for (var n = this.subScopes, r = 0, i = n.length; i > r; r++) n[r].clear();
                    this.clearCache()
                },
                clearCache: function () {
                    this.cache = {}
                }
            }, n.context = [], t.exports = n
        }, {
            "../type/Unit": 202
        }],
        6: [function (e, t) {
            t.exports = {
                name: "Infinity",
                category: "Constants",
                syntax: ["Infinity"],
                description: "Infinity, a number which is larger than the maximum number that can be handled by a floating point number.",
                examples: ["Infinity", "1 / 0"],
                seealso: []
            }
        }, {}],
        7: [function (e, t) {
            t.exports = {
                name: "LN10",
                category: "Constants",
                syntax: ["LN10"],
                description: "Returns the natural logarithm of 10, approximately equal to 2.302",
                examples: ["LN10", "log(10)"],
                seealso: []
            }
        }, {}],
        8: [function (e, t) {
            t.exports = {
                name: "LN2",
                category: "Constants",
                syntax: ["LN2"],
                description: "Returns the natural logarithm of 2, approximately equal to 0.693",
                examples: ["LN2", "log(2)"],
                seealso: []
            }
        }, {}],
        9: [function (e, t) {
            t.exports = {
                name: "LOG10E",
                category: "Constants",
                syntax: ["LOG10E"],
                description: "Returns the base-10 logarithm of E, approximately equal to 0.434",
                examples: ["LOG10E", "log(e, 10)"],
                seealso: []
            }
        }, {}],
        10: [function (e, t) {
            t.exports = {
                name: "LOG2E",
                category: "Constants",
                syntax: ["LOG2E"],
                description: "Returns the base-2 logarithm of E, approximately equal to 1.442",
                examples: ["LOG2E", "log(e, 2)"],
                seealso: []
            }
        }, {}],
        11: [function (e, t) {
            t.exports = {
                name: "NaN",
                category: "Constants",
                syntax: ["NaN"],
                description: "Not a number",
                examples: ["NaN", "0 / 0"],
                seealso: []
            }
        }, {}],
        12: [function (e, t) {
            t.exports = {
                name: "SQRT1_2",
                category: "Constants",
                syntax: ["SQRT1_2"],
                description: "Returns the square root of 1/2, approximately equal to 0.707",
                examples: ["SQRT1_2", "sqrt(1/2)"],
                seealso: []
            }
        }, {}],
        13: [function (e, t) {
            t.exports = {
                name: "SQRT2",
                category: "Constants",
                syntax: ["SQRT2"],
                description: "Returns the square root of 2, approximately equal to 1.414",
                examples: ["SQRT2", "sqrt(2)"],
                seealso: []
            }
        }, {}],
        14: [function (e, t) {
            t.exports = {
                name: "e",
                category: "Constants",
                syntax: ["e"],
                description: "Euler's number, the base of the natural logarithm. Approximately equal to 2.71828",
                examples: ["e", "e ^ 2", "exp(2)", "log(e)"],
                seealso: ["exp"]
            }
        }, {}],
        15: [function (e, t) {
            t.exports = {
                name: "false",
                category: "Constants",
                syntax: ["false"],
                description: "Boolean value false",
                examples: ["false"],
                seealso: ["true"]
            }
        }, {}],
        16: [function (e, t) {
            t.exports = {
                name: "i",
                category: "Constants",
                syntax: ["i"],
                description: "Imaginary unit, defined as i*i=-1. A complex number is described as a + b*i, where a is the real part, and b is the imaginary part.",
                examples: ["i", "i * i", "sqrt(-1)"],
                seealso: []
            }
        }, {}],
        17: [function (e, t) {
            t.exports = {
                name: "pi",
                category: "Constants",
                syntax: ["pi"],
                description: "The number pi is a mathematical constant that is the ratio of a circle's circumference to its diameter, and is approximately equal to 3.14159",
                examples: ["pi", "sin(pi/2)"],
                seealso: ["tau"]
            }
        }, {}],
        18: [function (e, t) {
            t.exports = {
                name: "tau",
                category: "Constants",
                syntax: ["pi"],
                description: "Tau is the ratio constant of a circle's circumference to radius, equal to 2 * pi, approximately 6.2832.",
                examples: ["tau", "2 * pi"],
                seealso: ["pi"]
            }
        }, {}],
        19: [function (e, t) {
            t.exports = {
                name: "true",
                category: "Constants",
                syntax: ["true"],
                description: "Boolean value true",
                examples: ["true"],
                seealso: ["false"]
            }
        }, {}],
        20: [function (e, t) {
            t.exports = {
                name: "abs",
                category: "Arithmetic",
                syntax: ["abs(x)"],
                description: "Compute the absolute value.",
                examples: ["abs(3.5)", "abs(-4.2)"],
                seealso: ["sign"]
            }
        }, {}],
        21: [function (e, t) {
            t.exports = {
                name: "add",
                category: "Operators",
                syntax: ["x + y", "add(x, y)"],
                description: "Add two values.",
                examples: ["2.1 + 3.6", "ans - 3.6", "3 + 2i", '"hello" + " world"', "3 cm + 2 inch"],
                seealso: ["subtract"]
            }
        }, {}],
        22: [function (e, t) {
            t.exports = {
                name: "ceil",
                category: "Arithmetic",
                syntax: ["ceil(x)"],
                description: "Round a value towards plus infinity.If x is complex, both real and imaginary part are rounded towards plus infinity.",
                examples: ["ceil(3.2)", "ceil(3.8)", "ceil(-4.2)"],
                seealso: ["floor", "fix", "round"]
            }
        }, {}],
        23: [function (e, t) {
            t.exports = {
                name: "cube",
                category: "Arithmetic",
                syntax: ["cube(x)"],
                description: "Compute the cube of a value. The cube of x is x * x * x.",
                examples: ["cube(2)", "2^3", "2 * 2 * 2"],
                seealso: ["multiply", "square", "pow"]
            }
        }, {}],
        24: [function (e, t) {
            t.exports = {
                name: "divide",
                category: "Operators",
                syntax: ["x / y", "divide(x, y)"],
                description: "Divide two values.",
                examples: ["2 / 3", "ans * 3", "4.5 / 2", "3 + 4 / 2", "(3 + 4) / 2", "18 km / 4.5"],
                seealso: ["multiply"]
            }
        }, {}],
        25: [function (e, t) {
            t.exports = {
                name: "edivide",
                category: "Operators",
                syntax: ["x ./ y", "edivide(x, y)"],
                description: "divide two values element wise.",
                examples: ["a = [1, 2, 3; 4, 5, 6]", "b = [2, 1, 1; 3, 2, 5]", "a ./ b"],
                seealso: ["multiply", "emultiply", "divide"]
            }
        }, {}],
        26: [function (e, t) {
            t.exports = {
                name: "emultiply",
                category: "Operators",
                syntax: ["x .* y", "emultiply(x, y)"],
                description: "multiply two values element wise.",
                examples: ["a = [1, 2, 3; 4, 5, 6]", "b = [2, 1, 1; 3, 2, 5]", "a .* b"],
                seealso: ["multiply", "divide", "edivide"]
            }
        }, {}],
        27: [function (e, t) {
            t.exports = {
                name: "epow",
                category: "Operators",
                syntax: ["x .^ y", "epow(x, y)"],
                description: "Calculates the power of x to y element wise.",
                examples: ["a = [1, 2, 3; 4, 5, 6]", "a .^ 2"],
                seealso: ["pow"]
            }
        }, {}],
        28: [function (e, t) {
            t.exports = {
                name: "equal",
                category: "Operators",
                syntax: ["x == y", "equal(x, y)"],
                description: "Check equality of two values. Returns 1 if the values are equal, and 0 if not.",
                examples: ["2+2 == 3", "2+2 == 4", "a = 3.2", "b = 6-2.8", "a == b", "50cm == 0.5m"],
                seealso: ["unequal", "smaller", "larger", "smallereq", "largereq"]
            }
        }, {}],
        29: [function (e, t) {
            t.exports = {
                name: "exp",
                category: "Arithmetic",
                syntax: ["exp(x)"],
                description: "Calculate the exponent of a value.",
                examples: ["exp(1.3)", "e ^ 1.3", "log(exp(1.3))", "x = 2.4", "(exp(i*x) == cos(x) + i*sin(x))   # Euler's formula"],
                seealso: ["square", "multiply", "log"]
            }
        }, {}],
        30: [function (e, t) {
            t.exports = {
                name: "fix",
                category: "Arithmetic",
                syntax: ["fix(x)"],
                description: "Round a value towards zero.If x is complex, both real and imaginary part are rounded towards zero.",
                examples: ["fix(3.2)", "fix(3.8)", "fix(-4.2)", "fix(-4.8)"],
                seealso: ["ceil", "floor", "round"]
            }
        }, {}],
        31: [function (e, t) {
            t.exports = {
                name: "floor",
                category: "Arithmetic",
                syntax: ["floor(x)"],
                description: "Round a value towards minus infinity.If x is complex, both real and imaginary part are rounded towards minus infinity.",
                examples: ["floor(3.2)", "floor(3.8)", "floor(-4.2)"],
                seealso: ["ceil", "fix", "round"]
            }
        }, {}],
        32: [function (e, t) {
            t.exports = {
                name: "gcd",
                category: "Arithmetic",
                syntax: ["gcd(a, b)", "gcd(a, b, c, ...)"],
                description: "Compute the greatest common divisor.",
                examples: ["gcd(8, 12)", "gcd(-4, 6)", "gcd(25, 15, -10)"],
                seealso: ["lcm", "xgcd"]
            }
        }, {}],
        33: [function (e, t) {
            t.exports = {
                name: "larger",
                category: "Operators",
                syntax: ["x > y", "larger(x, y)"],
                description: "Check if value x is larger than y. Returns 1 if x is larger than y, and 0 if not.",
                examples: ["2 > 3", "5 > 2*2", "a = 3.3", "b = 6-2.8", "(a > b)", "(b < a)", "5 cm > 2 inch"],
                seealso: ["equal", "unequal", "smaller", "smallereq", "largereq"]
            }
        }, {}],
        34: [function (e, t) {
            t.exports = {
                name: "largereq",
                category: "Operators",
                syntax: ["x >= y", "largereq(x, y)"],
                description: "Check if value x is larger or equal to y. Returns 1 if x is larger or equal to y, and 0 if not.",
                examples: ["2 > 1+1", "2 >= 1+1", "a = 3.2", "b = 6-2.8", "(a > b)"],
                seealso: ["equal", "unequal", "smallereq", "smaller", "largereq"]
            }
        }, {}],
        35: [function (e, t) {
            t.exports = {
                name: "lcm",
                category: "Arithmetic",
                syntax: ["lcm(x, y)"],
                description: "Compute the least common multiple.",
                examples: ["lcm(4, 6)", "lcm(6, 21)", "lcm(6, 21, 5)"],
                seealso: ["gcd"]
            }
        }, {}],
        36: [function (e, t) {
            t.exports = {
                name: "log",
                category: "Arithmetic",
                syntax: ["log(x)", "log(x, base)"],
                description: "Compute the logarithm of a value. If no base is provided, the natural logarithm of x is calculated. If base if provided, the logarithm is calculated for the specified base. log(x, base) is defined as log(x) / log(base).",
                examples: ["log(3.5)", "a = log(2.4)", "exp(a)", "10 ^ 3", "log(1000, 10)", "log(1000) / log(10)", "b = logb(1024, 2)", "2 ^ b"],
                seealso: ["exp", "log10"]
            }
        }, {}],
        37: [function (e, t) {
            t.exports = {
                name: "log10",
                category: "Arithmetic",
                syntax: ["log10(x)"],
                description: "Compute the 10-base logarithm of a value.",
                examples: ["log10(1000)", "10 ^ 3", "log10(0.01)", "log(1000) / log(10)", "log(1000, 10)"],
                seealso: ["exp", "log"]
            }
        }, {}],
        38: [function (e, t) {
            t.exports = {
                name: "mod",
                category: "Operators",
                syntax: ["x % y", "x mod y", "mod(x, y)"],
                description: "Calculates the modulus, the remainder of an integer division.",
                examples: ["7 % 3", "11 % 2", "10 mod 4", "function isOdd(x) = x % 2", "isOdd(2)", "isOdd(3)"],
                seealso: []
            }
        }, {}],
        39: [function (e, t) {
            t.exports = {
                name: "multiply",
                category: "Operators",
                syntax: ["x * y", "multiply(x, y)"],
                description: "multiply two values.",
                examples: ["2.1 * 3.6", "ans / 3.6", "2 * 3 + 4", "2 * (3 + 4)", "3 * 2.1 km"],
                seealso: ["divide"]
            }
        }, {}],
        40: [function (e, t) {
            t.exports = {
                name: "pow",
                category: "Operators",
                syntax: ["x ^ y", "pow(x, y)"],
                description: "Calculates the power of x to y, x^y.",
                examples: ["2^3 = 8", "2*2*2", "1 + e ^ (pi * i)"],
                seealso: ["unequal", "smaller", "larger", "smallereq", "largereq"]
            }
        }, {}],
        41: [function (e, t) {
            t.exports = {
                name: "round",
                category: "Arithmetic",
                syntax: ["round(x)", "round(x, n)"],
                description: "round a value towards the nearest integer.If x is complex, both real and imaginary part are rounded towards the nearest integer. When n is specified, the value is rounded to n decimals.",
                examples: ["round(3.2)", "round(3.8)", "round(-4.2)", "round(-4.8)", "round(pi, 3)", "round(123.45678, 2)"],
                seealso: ["ceil", "floor", "fix"]
            }
        }, {}],
        42: [function (e, t) {
            t.exports = {
                name: "sign",
                category: "Arithmetic",
                syntax: ["sign(x)"],
                description: "Compute the sign of a value. The sign of a value x is 1 when x>1, -1 when x<0, and 0 when x=0.",
                examples: ["sign(3.5)", "sign(-4.2)", "sign(0)"],
                seealso: ["abs"]
            }
        }, {}],
        43: [function (e, t) {
            t.exports = {
                name: "smaller",
                category: "Operators",
                syntax: ["x < y", "smaller(x, y)"],
                description: "Check if value x is smaller than value y. Returns 1 if x is smaller than y, and 0 if not.",
                examples: ["2 < 3", "5 < 2*2", "a = 3.3", "b = 6-2.8", "(a < b)", "5 cm < 2 inch"],
                seealso: ["equal", "unequal", "larger", "smallereq", "largereq"]
            }
        }, {}],
        44: [function (e, t) {
            t.exports = {
                name: "smallereq",
                category: "Operators",
                syntax: ["x <= y", "smallereq(x, y)"],
                description: "Check if value x is smaller or equal to value y. Returns 1 if x is smaller than y, and 0 if not.",
                examples: ["2 < 1+1", "2 <= 1+1", "a = 3.2", "b = 6-2.8", "(a < b)"],
                seealso: ["equal", "unequal", "larger", "smaller", "largereq"]
            }
        }, {}],
        45: [function (e, t) {
            t.exports = {
                name: "sqrt",
                category: "Arithmetic",
                syntax: ["sqrt(x)"],
                description: "Compute the square root value. If x = y * y, then y is the square root of x.",
                examples: ["sqrt(25)", "5 * 5", "sqrt(-1)"],
                seealso: ["square", "multiply"]
            }
        }, {}],
        46: [function (e, t) {
            t.exports = {
                name: "square",
                category: "Arithmetic",
                syntax: ["square(x)"],
                description: "Compute the square of a value. The square of x is x * x.",
                examples: ["square(3)", "sqrt(9)", "3^2", "3 * 3"],
                seealso: ["multiply", "pow", "sqrt", "cube"]
            }
        }, {}],
        47: [function (e, t) {
            t.exports = {
                name: "subtract",
                category: "Operators",
                syntax: ["x - y", "subtract(x, y)"],
                description: "subtract two values.",
                examples: ["5.3 - 2", "ans + 2", "2/3 - 1/6", "2 * 3 - 3", "2.1 km - 500m"],
                seealso: ["add"]
            }
        }, {}],
        48: [function (e, t) {
            t.exports = {
                name: "unary",
                category: "Operators",
                syntax: ["-x", "unary(x)"],
                description: "Inverse the sign of a value.",
                examples: ["-4.5", "-(-5.6)"],
                seealso: ["add", "subtract"]
            }
        }, {}],
        49: [function (e, t) {
            t.exports = {
                name: "unequal",
                category: "Operators",
                syntax: ["x != y", "unequal(x, y)"],
                description: "Check unequality of two values. Returns 1 if the values are unequal, and 0 if they are equal.",
                examples: ["2+2 != 3", "2+2 != 4", "a = 3.2", "b = 6-2.8", "a != b", "50cm != 0.5m", "5 cm != 2 inch"],
                seealso: ["equal", "smaller", "larger", "smallereq", "largereq"]
            }
        }, {}],
        50: [function (e, t) {
            t.exports = {
                name: "xgcd",
                category: "Arithmetic",
                syntax: ["xgcd(a, b)"],
                description: "Calculate the extended greatest common divisor for two values",
                examples: ["xgcd(8, 12)", "gcd(8, 12)", "xgcd(36163, 21199)"],
                seealso: ["gcd", "lcm"]
            }
        }, {}],
        51: [function (e, t) {
            t.exports = {
                name: "arg",
                category: "Complex",
                syntax: ["arg(x)"],
                description: "Compute the argument of a complex value. If x = a+bi, the argument is computed as atan2(b, a).",
                examples: ["arg(2 + 2i)", "atan2(3, 2)", "arg(2 - 3i)"],
                seealso: ["re", "im", "conj", "abs"]
            }
        }, {}],
        52: [function (e, t) {
            t.exports = {
                name: "conj",
                category: "Complex",
                syntax: ["conj(x)"],
                description: "Compute the complex conjugate of a complex value. If x = a+bi, the complex conjugate is a-bi.",
                examples: ["conj(2 + 3i)", "conj(2 - 3i)", "conj(-5.2i)"],
                seealso: ["re", "im", "abs", "arg"]
            }
        }, {}],
        53: [function (e, t) {
            t.exports = {
                name: "im",
                category: "Complex",
                syntax: ["im(x)"],
                description: "Get the imaginary part of a complex number.",
                examples: ["im(2 + 3i)", "re(2 + 3i)", "im(-5.2i)", "im(2.4)"],
                seealso: ["re", "conj", "abs", "arg"]
            }
        }, {}],
        54: [function (e, t) {
            t.exports = {
                name: "re",
                category: "Complex",
                syntax: ["re(x)"],
                description: "Get the real part of a complex number.",
                examples: ["re(2 + 3i)", "im(2 + 3i)", "re(-5.2i)", "re(2.4)"],
                seealso: ["im", "conj", "abs", "arg"]
            }
        }, {}],
        55: [function (e, t) {
            t.exports = {
                name: "boolean",
                category: "Type",
                syntax: ["x", "boolean(x)"],
                description: "Convert a string or number into a boolean.",
                examples: ["boolean(0)", "boolean(1)", "boolean(3)", 'boolean("true")', 'boolean("false")', "boolean([1, 0, 1, 1])"],
                seealso: ["complex", "index", "matrix", "number", "string", "unit"]
            }
        }, {}],
        56: [function (e, t) {
            t.exports = {
                name: "complex",
                category: "Type",
                syntax: ["complex()", "complex(re, im)", "complex(string)"],
                description: "Create a complex number.",
                examples: ["complex()", "complex(2, 3)", 'complex("7 - 2i")'],
                seealso: ["boolean", "index", "matrix", "number", "string", "unit"]
            }
        }, {}],
        57: [function (e, t) {
            t.exports = {
                name: "index",
                category: "Type",
                syntax: ["[start]", "[start:end]", "[start:step:end]", "[start1, start 2, ...]", "[start1:end1, start2:end2, ...]", "[start1:step1:end1, start2:step2:end2, ...]"],
                description: "Create an index to get or replace a subset of a matrix",
                examples: ["[]", "[1, 2, 3]", "A = [1, 2, 3; 4, 5, 6]", "A[1, :]", "A[1, 2] = 50", "A[0:2, 0:2] = ones(2, 2)"],
                seealso: ["boolean", "complex", "matrix,", "number", "range", "string", "unit"]
            }
        }, {}],
        58: [function (e, t) {
            t.exports = {
                name: "matrix",
                category: "Type",
                syntax: ["[]", "[a1, b1, ...; a2, b2, ...]", "matrix()", "matrix([...])"],
                description: "Create a matrix.",
                examples: ["[]", "[1, 2, 3]", "[1, 2, 3; 4, 5, 6]", "matrix()", "matrix([3, 4])"],
                seealso: ["boolean", "complex", "index", "number", "string", "unit"]
            }
        }, {}],
        59: [function (e, t) {
            t.exports = {
                name: "number",
                category: "Type",
                syntax: ["x", "number(x)"],
                description: "Create a number or convert a string or boolean into a number.",
                examples: ["2", "2e3", "4.05", "number(2)", 'number("7.2")', "number(true)", "number([true, false, true, true])"],
                seealso: ["boolean", "complex", "index", "matrix", "string", "unit"]
            }
        }, {}],
        60: [function (e, t) {
            t.exports = {
                name: "string",
                category: "Type",
                syntax: ['"text"', "string(x)"],
                description: "Create a string or convert a value to a string",
                examples: ['"Hello World!"', "string(4.2)", "string(3 + 2i)"],
                seealso: ["boolean", "complex", "index", "matrix", "number", "unit"]
            }
        }, {}],
        61: [function (e, t) {
            t.exports = {
                name: "unit",
                category: "Type",
                syntax: ["value unit", "unit(value, unit)", "unit(string)"],
                description: "Create a unit.",
                examples: ["5.5 mm", "3 inch", 'unit(7.1, "kilogram")', 'unit("23 deg")'],
                seealso: ["boolean", "complex", "index", "matrix", "number", "string"]
            }
        }, {}],
        62: [function (e, t) {
            t.exports = {
                name: "eval",
                category: "Expression",
                syntax: ["eval(expression)", "eval([expr1, expr2, expr3, ...])"],
                description: "Evaluate an expression or an array with expressions.",
                examples: ['eval("2 + 3")', 'eval("sqrt(" + 4 + ")")'],
                seealso: []
            }
        }, {}],
        63: [function (e, t) {
            t.exports = {
                name: "help",
                category: "Expression",
                syntax: ["help(object)", "help(string)"],
                description: "Display documentation on a function or data type.",
                examples: ["help(sqrt)", 'help("complex")'],
                seealso: []
            }
        }, {}],
        64: [function (e, t) {
            t.exports = {
                name: "concat",
                category: "Matrix",
                syntax: ["concat(a, b, c, ...)", "concat(a, b, c, ..., dim)"],
                description: "Concatenate matrices. By default, the matrices are concatenated by the first dimension. The dimension on which to concatenate can be provided as last argument.",
                examples: ["a = [1, 2; 5, 6]", "b = [3, 4; 7, 8]", "concat(a, b)", "[a, b]", "concat(a, b, 2)", "[a; b]"],
                seealso: ["det", "diag", "eye", "inv", "ones", "range", "size", "squeeze", "subset", "transpose", "zeros"]
            }
        }, {}],
        65: [function (e, t) {
            t.exports = {
                name: "det",
                category: "Matrix",
                syntax: ["det(x)"],
                description: "Calculate the determinant of a matrix",
                examples: ["det([1, 2; 3, 4])", "det([-2, 2, 3; -1, 1, 3; 2, 0, -1])"],
                seealso: ["concat", "diag", "eye", "inv", "ones", "range", "size", "squeeze", "subset", "transpose", "zeros"]
            }
        }, {}],
        66: [function (e, t) {
            t.exports = {
                name: "diag",
                category: "Matrix",
                syntax: ["diag(x)", "diag(x, k)"],
                description: "Create a diagonal matrix or retrieve the diagonal of a matrix. When x is a vector, a matrix with the vector values on the diagonal will be returned. When x is a matrix, a vector with the diagonal values of the matrix is returned.When k is provided, the k-th diagonal will be filled in or retrieved, if k is positive, the values are placed on the super diagonal. When k is negative, the values are placed on the sub diagonal.",
                examples: ["diag(1:3)", "diag(1:3, 1)", "a = [1, 2, 3; 4, 5, 6; 7, 8, 9]", "diag(a)"],
                seealso: ["concat", "det", "eye", "inv", "ones", "range", "size", "squeeze", "subset", "transpose", "zeros"]
            }
        }, {}],
        67: [function (e, t) {
            t.exports = {
                name: "eye",
                category: "Matrix",
                syntax: ["eye(n)", "eye(m, n)", "eye([m, n])", "eye"],
                description: "Returns the identity matrix with size m-by-n. The matrix has ones on the diagonal and zeros elsewhere.",
                examples: ["eye(3)", "eye(3, 5)", "a = [1, 2, 3; 4, 5, 6]", "eye(size(a))"],
                seealso: ["concat", "det", "diag", "inv", "ones", "range", "size", "squeeze", "subset", "transpose", "zeros"]
            }
        }, {}],
        68: [function (e, t) {
            t.exports = {
                name: "inv",
                category: "Matrix",
                syntax: ["inv(x)"],
                description: "Calculate the inverse of a matrix",
                examples: ["inv([1, 2; 3, 4])", "inv(4)", "1 / 4"],
                seealso: ["concat", "det", "diag", "eye", "ones", "range", "size", "squeeze", "subset", "transpose", "zeros"]
            }
        }, {}],
        69: [function (e, t) {
            t.exports = {
                name: "ones",
                category: "Matrix",
                syntax: ["ones(n)", "ones(m, n)", "ones(m, n, p, ...)", "ones([m, n])", "ones([m, n, p, ...])", "ones"],
                description: "Create a matrix containing ones.",
                examples: ["ones(3)", "ones(3, 5)", "ones([2,3]) * 4.5", "a = [1, 2, 3; 4, 5, 6]", "ones(size(a))"],
                seealso: ["concat", "det", "diag", "eye", "inv", "range", "size", "squeeze", "subset", "transpose", "zeros"]
            }
        }, {}],
        70: [function (e, t) {
            t.exports = {
                name: "range",
                category: "Type",
                syntax: ["start:end", "start:step:end", "range(start, end)", "range(start, end, step)", "range(string)"],
                description: "Create a range. Lower bound of the range is included, upper bound is excluded.",
                examples: ["1:5", "3:-1:-3", "range(3, 7)", "range(0, 12, 2)", 'range("4:10")', "a = [1, 2, 3, 4; 5, 6, 7, 8]", "a(1:2, 1:2)"],
                seealso: ["concat", "det", "diag", "eye", "inv", "ones", "size", "squeeze", "subset", "transpose", "zeros"]
            }
        }, {}],
        71: [function (e, t) {
            t.exports = {
                name: "size",
                category: "Matrix",
                syntax: ["size(x)"],
                description: "Calculate the size of a matrix.",
                examples: ["size(2.3)", 'size("hello world")', "a = [1, 2; 3, 4; 5, 6]", "size(a)", "size(1:6)"],
                seealso: ["concat", "det", "diag", "eye", "inv", "ones", "range", "squeeze", "subset", "transpose", "zeros"]
            }
        }, {}],
        72: [function (e, t) {
            t.exports = {
                name: "squeeze",
                category: "Matrix",
                syntax: ["squeeze(x)"],
                description: "Remove singleton dimensions from a matrix.",
                examples: ["a = zeros(1,3,2)", "size(squeeze(a))", "b = zeros(3,1,1)", "size(squeeze(b))"],
                seealso: ["concat", "det", "diag", "eye", "inv", "ones", "range", "size", "subset", "transpose", "zeros"]
            }
        }, {}],
        73: [function (e, t) {
            t.exports = {
                name: "subset",
                category: "Matrix",
                syntax: ["value(index)", "value(index) = replacement", "subset(value, [index])", "subset(value, [index], replacement)"],
                description: "Get or set a subset of a matrix or string. Indexes are one-based. Both the ranges lower-bound and upper-bound are included.",
                examples: ["d = [1, 2; 3, 4]", "e = []", "e(1, 1:2) = [5, 6]", "e(2, :) = [7, 8]", "f = d * e", "f(2, 1)", "f(:, 1)"],
                seealso: ["concat", "det", "diag", "eye", "inv", "ones", "range", "size", "squeeze", "transpose", "zeros"]
            }
        }, {}],
        74: [function (e, t) {
            t.exports = {
                name: "transpose",
                category: "Matrix",
                syntax: ["x'", "transpose(x)"],
                description: "Transpose a matrix",
                examples: ["a = [1, 2, 3; 4, 5, 6]", "a'", "transpose(a)"],
                seealso: ["concat", "det", "diag", "eye", "inv", "ones", "range", "size", "squeeze", "subset", "zeros"]
            }
        }, {}],
        75: [function (e, t) {
            t.exports = {
                name: "zeros",
                category: "Matrix",
                syntax: ["zeros(n)", "zeros(m, n)", "zeros(m, n, p, ...)", "zeros([m, n])", "zeros([m, n, p, ...])", "zeros"],
                description: "Create a matrix containing zeros.",
                examples: ["zeros(3)", "zeros(3, 5)", "a = [1, 2, 3; 4, 5, 6]", "zeros(size(a))"],
                seealso: ["concat", "det", "diag", "eye", "inv", "ones", "range", "size", "squeeze", "subset", "transpose"]
            }
        }, {}],
        76: [function (e, t) {
            t.exports = {
                name: "distribution",
                category: "Probability",
                syntax: ["distribution(name)", "distribution(name, arg1, arg2, ...)"],
                description: 'Create a distribution object of a specific type. A distribution object contains functions `random([size,] [min,] [max])`, `randomInt([size,] [min,] [max])`, and `pickRandom(array)`. Available types of distributions: "uniform", "normal". Note that the function distribution is currently not available via the expression parser.',
                examples: [],
                seealso: ["random", "randomInt"]
            }
        }, {}],
        77: [function (e, t) {
            t.exports = {
                name: "factorial",
                category: "Probability",
                syntax: ["x!", "factorial(x)"],
                description: "Compute the factorial of a value",
                examples: ["5!", "5*4*3*2*1", "3!"],
                seealso: []
            }
        }, {}],
        78: [function (e, t) {
            t.exports = {
                name: "pickRandom",
                category: "Probability",
                syntax: ["pickRandom(array)"],
                description: "Pick a random entry from a given array.",
                examples: ["pickRandom(0:10)", "pickRandom([1, 3, 1, 6])"],
                seealso: ["distribution", "random", "randomInt"]
            }
        }, {}],
        79: [function (e, t) {
            t.exports = {
                name: "random",
                category: "Probability",
                syntax: ["random()", "random(max)", "random(min, max)", "random(size)", "random(size, max)", "random(size, min, max)"],
                description: "Return a random number.",
                examples: ["random()", "random(10, 20)", "random([2, 3])"],
                seealso: ["distribution", "pickRandom", "randomInt"]
            }
        }, {}],
        80: [function (e, t) {
            t.exports = {
                name: "randInt",
                category: "Probability",
                syntax: ["randInt()", "randInt(max)", "randInt(min, max)", "randInt(size)", "randInt(size, max)", "randInt(size, min, max)"],
                description: "Return a random integer number",
                examples: ["randInt()", "randInt(10, 20)", "randInt([2, 3], 10)"],
                seealso: ["distribution", "pickRandom", "random"]
            }
        }, {}],
        81: [function (e, t) {
            t.exports = {
                name: "max",
                category: "Statistics",
                syntax: ["max(a, b, c, ...)", "max(A)", "max(A, dim)"],
                description: "Compute the maximum value of a list of values.",
                examples: ["max(2, 3, 4, 1)", "max([2, 3, 4, 1])", "max([2, 5; 4, 3], 0)", "max([2, 5; 4, 3], 1)", "max(2.7, 7.1, -4.5, 2.0, 4.1)", "min(2.7, 7.1, -4.5, 2.0, 4.1)"],
                seealso: ["mean", "min"]
            }
        }, {}],
        82: [function (e, t) {
            t.exports = {
                name: "mean",
                category: "Statistics",
                syntax: ["mean(a, b, c, ...)", "mean(A)", "mean(A, dim)"],
                description: "Compute the arithmetic mean of a list of values.",
                examples: ["mean(2, 3, 4, 1)", "mean([2, 3, 4, 1])", "mean([2, 5; 4, 3], 0)", "mean([2, 5; 4, 3], 1)", "mean([1.0, 2.7, 3.2, 4.0])"],
                seealso: ["max", "min"]
            }
        }, {}],
        83: [function (e, t) {
            t.exports = {
                name: "min",
                category: "Statistics",
                syntax: ["min(a, b, c, ...)", "min(A)", "min(A, dim)"],
                description: "Compute the minimum value of a list of values.",
                examples: ["min(2, 3, 4, 1)", "min([2, 3, 4, 1])", "min([2, 5; 4, 3], 0)", "min([2, 5; 4, 3], 1)", "min(2.7, 7.1, -4.5, 2.0, 4.1)", "max(2.7, 7.1, -4.5, 2.0, 4.1)"],
                seealso: ["max", "mean", "min"]
            }
        }, {}],
        84: [function (e, t) {
            t.exports = {
                name: "acos",
                category: "Trigonometry",
                syntax: ["acos(x)"],
                description: "Compute the inverse cosine of a value in radians.",
                examples: ["acos(0.5)", "acos(cos(2.3))"],
                seealso: ["cos", "acos", "asin"]
            }
        }, {}],
        85: [function (e, t) {
            t.exports = {
                name: "asin",
                category: "Trigonometry",
                syntax: ["asin(x)"],
                description: "Compute the inverse sine of a value in radians.",
                examples: ["asin(0.5)", "asin(sin(2.3))"],
                seealso: ["sin", "acos", "asin"]
            }
        }, {}],
        86: [function (e, t) {
            t.exports = {
                name: "atan",
                category: "Trigonometry",
                syntax: ["atan(x)"],
                description: "Compute the inverse tangent of a value in radians.",
                examples: ["atan(0.5)", "atan(tan(2.3))"],
                seealso: ["tan", "acos", "asin"]
            }
        }, {}],
        87: [function (e, t) {
            t.exports = {
                name: "atan2",
                category: "Trigonometry",
                syntax: ["atan2(y, x)"],
                description: "Computes the principal value of the arc tangent of y/x in radians.",
                examples: ["atan2(2, 2) / pi", "angle = 60 deg in rad", "x = cos(angle)", "y = sin(angle)", "atan2(y, x)"],
                seealso: ["sin", "cos", "tan"]
            }
        }, {}],
        88: [function (e, t) {
            t.exports = {
                name: "cos",
                category: "Trigonometry",
                syntax: ["cos(x)"],
                description: "Compute the cosine of x in radians.",
                examples: ["cos(2)", "cos(pi / 4) ^ 2", "cos(180 deg)", "cos(60 deg)", "sin(0.2)^2 + cos(0.2)^2"],
                seealso: ["acos", "sin", "tan"]
            }
        }, {}],
        89: [function (e, t) {
            t.exports = {
                name: "cot",
                category: "Trigonometry",
                syntax: ["cot(x)"],
                description: "Compute the cotangent of x in radians. Defined as 1/tan(x)",
                examples: ["cot(2)", "1 / tan(2)"],
                seealso: ["sec", "csc", "tan"]
            }
        }, {}],
        90: [function (e, t) {
            t.exports = {
                name: "csc",
                category: "Trigonometry",
                syntax: ["csc(x)"],
                description: "Compute the cosecant of x in radians. Defined as 1/sin(x)",
                examples: ["csc(2)", "1 / sin(2)"],
                seealso: ["sec", "cot", "sin"]
            }
        }, {}],
        91: [function (e, t) {
            t.exports = {
                name: "sec",
                category: "Trigonometry",
                syntax: ["sec(x)"],
                description: "Compute the secant of x in radians. Defined as 1/cos(x)",
                examples: ["sec(2)", "1 / cos(2)"],
                seealso: ["cot", "csc", "cos"]
            }
        }, {}],
        92: [function (e, t) {
            t.exports = {
                name: "sin",
                category: "Trigonometry",
                syntax: ["sin(x)"],
                description: "Compute the sine of x in radians.",
                examples: ["sin(2)", "sin(pi / 4) ^ 2", "sin(90 deg)", "sin(30 deg)", "sin(0.2)^2 + cos(0.2)^2"],
                seealso: ["asin", "cos", "tan"]
            }
        }, {}],
        93: [function (e, t) {
            t.exports = {
                name: "tan",
                category: "Trigonometry",
                syntax: ["tan(x)"],
                description: "Compute the tangent of x in radians.",
                examples: ["tan(0.5)", "sin(0.5) / cos(0.5)", "tan(pi / 4)", "tan(45 deg)"],
                seealso: ["atan", "sin", "cos"]
            }
        }, {}],
        94: [function (e, t) {
            t.exports = {
                name: "in",
                category: "Units",
                syntax: ["x in unit", "in(x, unit)"],
                description: "Change the unit of a value.",
                examples: ["5 inch in cm", "3.2kg in g", "16 bytes in bits"],
                seealso: []
            }
        }, {}],
        95: [function (e, t) {
            t.exports = {
                name: "clone",
                category: "Utils",
                syntax: ["clone(x)"],
                description: "Clone a variable. Creates a copy of primitive variables,and a deep copy of matrices",
                examples: ["clone(3.5)", "clone(2 - 4i)", "clone(45 deg)", "clone([1, 2; 3, 4])", 'clone("hello world")'],
                seealso: []
            }
        }, {}],
        96: [function (e, t) {
            t.exports = {
                name: "forEach",
                category: "Utils",
                syntax: ["forEach(x, callback)"],
                description: "Iterates over all elements of a matrix/array, and executes the given callback.",
                examples: ["forEach([1, 2, 3], function(val) { console.log(val) })"],
                seealso: []
            }
        }, {}],
        97: [function (e, t) {
            t.exports = {
                name: "format",
                category: "Utils",
                syntax: ["format(value)", "format(value, precision)"],
                description: "Format a value of any type as string.",
                examples: ["format(2.3)", "format(3 - 4i)", "format([])", "format(pi, 3)"],
                seealso: ["print"]
            }
        }, {}],
        98: [function (e, t) {
            t.exports = {
                name: "import",
                category: "Utils",
                syntax: ["import(string)"],
                description: "Import functions from a file.",
                examples: ['import("numbers")', 'import("./mylib.js")'],
                seealso: []
            }
        }, {}],
        99: [function (e, t) {
            t.exports = {
                name: "map",
                category: "Utils",
                syntax: ["map(x, callback)"],
                description: "Create a new matrix or array with the results of the callback function executed on each entry of the matrix/array.",
                examples: ["map([1, 2, 3], function(val) { return math.max(val, 1.5) })"],
                seealso: []
            }
        }, {}],
        100: [function (e, t) {
            t.exports = {
                name: "typeof",
                category: "Utils",
                syntax: ["typeof(x)"],
                description: "Get the type of a variable.",
                examples: ["typeof(3.5)", "typeof(2 - 4i)", "typeof(45 deg)", 'typeof("hello world")'],
                seealso: []
            }
        }, {}],
        101: [function (e, t, n) {
            n.e = e("./constants/e"), n.E = e("./constants/e"), n["false"] = e("./constants/false"), n.i = e("./constants/i"), n.Infinity = e("./constants/Infinity"), n.LN2 = e("./constants/LN2"), n.LN10 = e("./constants/LN10"), n.LOG2E = e("./constants/LOG2E"), n.LOG10E = e("./constants/LOG10E"), n.NaN = e("./constants/NaN"), n.pi = e("./constants/pi"), n.PI = e("./constants/pi"), n.SQRT1_2 = e("./constants/SQRT1_2"), n.SQRT2 = e("./constants/SQRT2"), n.tau = e("./constants/tau"), n["true"] = e("./constants/true"), n.abs = e("./function/arithmetic/abs"), n.add = e("./function/arithmetic/add"), n.ceil = e("./function/arithmetic/ceil"), n.cube = e("./function/arithmetic/cube"), n.divide = e("./function/arithmetic/divide"), n.edivide = e("./function/arithmetic/edivide"), n.emultiply = e("./function/arithmetic/emultiply"), n.epow = e("./function/arithmetic/epow"), n.equal = e("./function/arithmetic/equal"), n.exp = e("./function/arithmetic/exp"), n.fix = e("./function/arithmetic/fix"), n.floor = e("./function/arithmetic/floor"), n.gcd = e("./function/arithmetic/gcd"), n.larger = e("./function/arithmetic/larger"), n.largereq = e("./function/arithmetic/largereq"), n.lcm = e("./function/arithmetic/lcm"), n.log = e("./function/arithmetic/log"), n.log10 = e("./function/arithmetic/log10"), n.mod = e("./function/arithmetic/mod"), n.multiply = e("./function/arithmetic/multiply"), n.pow = e("./function/arithmetic/pow"), n.round = e("./function/arithmetic/round"), n.sign = e("./function/arithmetic/sign"), n.smaller = e("./function/arithmetic/smaller"), n.smallereq = e("./function/arithmetic/smallereq"), n.sqrt = e("./function/arithmetic/sqrt"), n.square = e("./function/arithmetic/square"), n.subtract = e("./function/arithmetic/subtract"), n.unary = e("./function/arithmetic/unary"), n.unequal = e("./function/arithmetic/unequal"), n.xgcd = e("./function/arithmetic/xgcd"), n.arg = e("./function/complex/arg"), n.conj = e("./function/complex/conj"), n.re = e("./function/complex/re"), n.im = e("./function/complex/im"), n.boolean = e("./function/construction/boolean"), n.complex = e("./function/construction/complex"), n.index = e("./function/construction/index"), n.matrix = e("./function/construction/matrix"), n.number = e("./function/construction/number"), n.string = e("./function/construction/string"), n.unit = e("./function/construction/unit"), n.eval = e("./function/expression/eval"), n.help = e("./function/expression/help"), n.concat = e("./function/matrix/concat"), n.det = e("./function/matrix/det"), n.diag = e("./function/matrix/diag"), n.eye = e("./function/matrix/eye"), n.inv = e("./function/matrix/inv"), n.ones = e("./function/matrix/ones"), n.range = e("./function/matrix/range"), n.size = e("./function/matrix/size"), n.squeeze = e("./function/matrix/squeeze"), n.subset = e("./function/matrix/subset"), n.transpose = e("./function/matrix/transpose"), n.zeros = e("./function/matrix/zeros"), n.factorial = e("./function/probability/factorial"), n.distribution = e("./function/probability/distribution"), n.pickRandom = e("./function/probability/pickRandom"), n.random = e("./function/probability/random"), n.randomInt = e("./function/probability/randomInt"), n.min = e("./function/statistics/min"), n.mean = e("./function/statistics/mean"), n.max = e("./function/statistics/max"), n.acos = e("./function/trigonometry/acos"), n.asin = e("./function/trigonometry/asin"), n.atan = e("./function/trigonometry/atan"), n.atan2 = e("./function/trigonometry/atan2"), n.cos = e("./function/trigonometry/cos"), n.cot = e("./function/trigonometry/cot"), n.csc = e("./function/trigonometry/csc"), n.sec = e("./function/trigonometry/sec"), n.sin = e("./function/trigonometry/sin"), n.tan = e("./function/trigonometry/tan"), n["in"] = e("./function/units/in"), n.clone = e("./function/utils/clone"), n.map = e("./function/utils/map"), n.forEach = e("./function/utils/forEach"), n.format = e("./function/utils/format"), n["import"] = e("./function/utils/import"), n["typeof"] = e("./function/utils/typeof")
        }, {
            "./constants/Infinity": 6,
            "./constants/LN10": 7,
            "./constants/LN2": 8,
            "./constants/LOG10E": 9,
            "./constants/LOG2E": 10,
            "./constants/NaN": 11,
            "./constants/SQRT1_2": 12,
            "./constants/SQRT2": 13,
            "./constants/e": 14,
            "./constants/false": 15,
            "./constants/i": 16,
            "./constants/pi": 17,
            "./constants/tau": 18,
            "./constants/true": 19,
            "./function/arithmetic/abs": 20,
            "./function/arithmetic/add": 21,
            "./function/arithmetic/ceil": 22,
            "./function/arithmetic/cube": 23,
            "./function/arithmetic/divide": 24,
            "./function/arithmetic/edivide": 25,
            "./function/arithmetic/emultiply": 26,
            "./function/arithmetic/epow": 27,
            "./function/arithmetic/equal": 28,
            "./function/arithmetic/exp": 29,
            "./function/arithmetic/fix": 30,
            "./function/arithmetic/floor": 31,
            "./function/arithmetic/gcd": 32,
            "./function/arithmetic/larger": 33,
            "./function/arithmetic/largereq": 34,
            "./function/arithmetic/lcm": 35,
            "./function/arithmetic/log": 36,
            "./function/arithmetic/log10": 37,
            "./function/arithmetic/mod": 38,
            "./function/arithmetic/multiply": 39,
            "./function/arithmetic/pow": 40,
            "./function/arithmetic/round": 41,
            "./function/arithmetic/sign": 42,
            "./function/arithmetic/smaller": 43,
            "./function/arithmetic/smallereq": 44,
            "./function/arithmetic/sqrt": 45,
            "./function/arithmetic/square": 46,
            "./function/arithmetic/subtract": 47,
            "./function/arithmetic/unary": 48,
            "./function/arithmetic/unequal": 49,
            "./function/arithmetic/xgcd": 50,
            "./function/complex/arg": 51,
            "./function/complex/conj": 52,
            "./function/complex/im": 53,
            "./function/complex/re": 54,
            "./function/construction/boolean": 55,
            "./function/construction/complex": 56,
            "./function/construction/index": 57,
            "./function/construction/matrix": 58,
            "./function/construction/number": 59,
            "./function/construction/string": 60,
            "./function/construction/unit": 61,
            "./function/expression/eval": 62,
            "./function/expression/help": 63,
            "./function/matrix/concat": 64,
            "./function/matrix/det": 65,
            "./function/matrix/diag": 66,
            "./function/matrix/eye": 67,
            "./function/matrix/inv": 68,
            "./function/matrix/ones": 69,
            "./function/matrix/range": 70,
            "./function/matrix/size": 71,
            "./function/matrix/squeeze": 72,
            "./function/matrix/subset": 73,
            "./function/matrix/transpose": 74,
            "./function/matrix/zeros": 75,
            "./function/probability/distribution": 76,
            "./function/probability/factorial": 77,
            "./function/probability/pickRandom": 78,
            "./function/probability/random": 79,
            "./function/probability/randomInt": 80,
            "./function/statistics/max": 81,
            "./function/statistics/mean": 82,
            "./function/statistics/min": 83,
            "./function/trigonometry/acos": 84,
            "./function/trigonometry/asin": 85,
            "./function/trigonometry/atan": 86,
            "./function/trigonometry/atan2": 87,
            "./function/trigonometry/cos": 88,
            "./function/trigonometry/cot": 89,
            "./function/trigonometry/csc": 90,
            "./function/trigonometry/sec": 91,
            "./function/trigonometry/sin": 92,
            "./function/trigonometry/tan": 93,
            "./function/units/in": 94,
            "./function/utils/clone": 95,
            "./function/utils/forEach": 96,
            "./function/utils/format": 97,
            "./function/utils/import": 98,
            "./function/utils/map": 99,
            "./function/utils/typeof": 100
        }],
        102: [function (e, t) {
            function n(e, t) {
                this.math = e, this.nodes = t || []
            }
            var r = e("./Node"),
                i = (e("../../util/object"), e("../../util/string")),
                o = (e("../../type/collection"), e("../../type/Matrix"));
            n.prototype = new r, n.prototype.eval = function () {
                for (var e = this.nodes, t = [], n = 0, r = e.length; r > n; n++) {
                    var i = e[n],
                        a = i.eval();
                    t[n] = a instanceof o ? a.valueOf() : a
                }
                return "array" === this.math.options.matrix.defaultType ? t : new o(t)
            }, n.prototype.find = function (e) {
                var t = [];
                this.match(e) && t.push(this);
                for (var n = this.nodes, r = 0, i = n.length; i > r; r++)
                    for (var o = n[r], a = 0, s = o.length; s > a; a++) t = t.concat(o[a].find(e));
                return t
            }, n.prototype.toString = function () {
                return i.format(this.nodes)
            }, t.exports = n
        }, {
            "../../type/Matrix": 200,
            "../../type/collection": 203,
            "../../util/object": 209,
            "../../util/string": 210,
            "./Node": 107
        }],
        103: [function (e, t) {
            function n(e, t, n) {
                this.name = e, this.expr = t, this.scope = n
            }
            var r = e("./Node");
            n.prototype = new r, n.prototype.eval = function () {
                if (void 0 === this.expr) throw new Error("Undefined symbol " + this.name);
                var e = this.expr.eval();
                return this.scope.set(this.name, e), e
            }, n.prototype.find = function (e) {
                var t = [];
                return this.match(e) && t.push(this), this.expr && (t = t.concat(this.expr.find(e))), t
            }, n.prototype.toString = function () {
                return this.name + " = " + this.expr.toString()
            }, t.exports = n
        }, {
            "./Node": 107
        }],
        104: [function (e, t) {
            function n() {
                this.params = [], this.visible = []
            }
            var r = e("./Node");
            n.prototype = new r, n.prototype.add = function (e, t) {
                var n = this.params.length;
                this.params[n] = e, this.visible[n] = void 0 != t ? t : !0
            }, n.prototype.eval = function () {
                for (var e = [], t = 0, n = this.params.length; n > t; t++) {
                    var r = this.params[t].eval();
                    this.visible[t] && e.push(r)
                }
                return e
            }, n.prototype.find = function (e) {
                var t = [];
                this.match(e) && t.push(this);
                var n = this.params;
                if (n)
                    for (var r = 0, i = n.length; i > r; r++) t = t.concat(n[r].find(e));
                return t
            }, n.prototype.toString = function () {
                for (var e = [], t = 0, n = this.params.length; n > t; t++) this.visible[t] && e.push("\n  " + this.params[t].toString());
                return "[" + e.join(",") + "\n]"
            }, t.exports = n
        }, {
            "./Node": 107
        }],
        105: [function (e, t) {
            function n(e) {
                this.value = e
            }
            var r = e("./Node"),
                i = e("../../util/string");
            n.prototype = new r, n.prototype.eval = function () {
                return this.value
            }, n.prototype.toString = function () {
                return i.format(this.value)
            }, t.exports = n
        }, {
            "../../util/string": 210,
            "./Node": 107
        }],
        106: [function (e, t) {
            function n(e, t, n, r, o) {
                this.name = e, this.variables = t, this.expr = n, this.scope = o, this.fn = function () {
                    var o = t ? t.length : 0;
                    if (arguments.length != o) throw new i.ArgumentsError(e, arguments.length, o);
                    for (var a = 0; o > a; a++) r.set(t[a], arguments[a]);
                    return n.eval()
                }, this.fn.toString = function () {
                    return e + "(" + t.join(", ") + ")"
                }
            }
            var r = e("./Node"),
                i = e("../../util/error");
            n.prototype = new r, n.prototype.eval = function () {
                return this.scope.set(this.name, this.fn), this.fn
            }, n.prototype.find = function (e) {
                var t = [];
                return this.match(e) && t.push(this), this.expr && (t = t.concat(this.expr.find(e))), t
            }, n.prototype.toString = function () {
                return this.fn.toString()
            }, t.exports = n
        }, {
            "../../util/error": 206,
            "./Node": 107
        }],
        107: [function (e, t) {
            function n() {}
            n.prototype.eval = function () {
                throw new Error("Cannot evaluate a Node interface")
            }, n.prototype.find = function (e) {
                return this.match(e) ? [this] : []
            }, n.prototype.match = function (e) {
                var t = !0;
                if (e && (!e.type || this instanceof e.type || (t = !1), t && e.properties))
                    for (var n in e.properties)
                        if (e.properties.hasOwnProperty(n) && this[n] != e.properties[n]) {
                            t = !1;
                            break
                        } return t
            }, n.prototype.toString = function () {
                return ""
            }, t.exports = n
        }, {}],
        108: [function (e, t) {
            function n(e, t, n) {
                this.name = e, this.fn = t, this.params = n
            }
            var r = e("./Node");
            n.prototype = new r, n.prototype.eval = function () {
                return this.fn.apply(this, this.params.map(function (e) {
                    return e.eval()
                }))
            }, n.prototype.find = function (e) {
                var t = [];
                this.match(e) && t.push(this);
                var n = this.params;
                if (n)
                    for (var r = 0, i = n.length; i > r; r++) t = t.concat(n[r].find(e));
                return t
            }, n.prototype.toString = function () {
                var e = this.params;
                switch (e.length) {
                    case 1:
                        return "-" == this.name ? "-" + e[0].toString() : e[0].toString() + this.name;
                    case 2:
                        var t = e[0].toString();
                        e[0] instanceof n && (t = "(" + t + ")");
                        var r = e[1].toString();
                        return e[1] instanceof n && (r = "(" + r + ")"), t + " " + this.name + " " + r;
                    default:
                        return this.name + "(" + this.params.join(", ") + ")"
                }
            }, t.exports = n
        }, {
            "./Node": 107
        }],
        109: [function (e, t) {
            function n(e, t, n, r) {
                if (this.math = e, this.object = t, this.params = n, this.paramScopes = r, this.hasContextParams = !1, n)
                    for (var i = {
                            type: a,
                            properties: {
                                name: "end"
                            }
                        }, o = 0, s = n.length; s > o; o++)
                        if (n[o].find(i).length > 0) {
                            this.hasContextParams = !0;
                            break
                        }
            }
            var r = e("../../util/number"),
                i = e("./Node"),
                o = e("./RangeNode"),
                a = e("./SymbolNode"),
                s = e("../../type/Index"),
                u = e("../../type/Range"),
                l = r.isNumber;
            n.prototype = new i, n.prototype.eval = function () {
                var e, t, n, r, i = this.object;
                if (void 0 == i) throw new Error("Node undefined");
                var a = i.eval();
                if (this.hasContextParams) {
                    var c = this.paramScopes,
                        f = this.math.size(a).valueOf();
                    if (c && f)
                        for (e = 0, t = this.params.length; t > e; e++) {
                            var p = c[e];
                            p && p.set("end", f[e])
                        }
                }
                if ("function" == typeof a) {
                    for (n = this.params, r = [], e = 0, t = this.params.length; t > e; e++) r[e] = n[e].eval();
                    return a.apply(this, r)
                }
                for (n = this.params, r = [], e = 0, t = this.params.length; t > e; e++) {
                    var m, h = n[e];
                    if (m = h instanceof o ? h.toRange() : h.eval(), m instanceof u) m.start--, m.end--;
                    else {
                        if (!l(m)) throw new TypeError("Number or Range expected");
                        m--
                    }
                    r[e] = m
                }
                var x = s.create(r);
                return this.math.subset(a, x)
            }, n.prototype.find = function (e) {
                var t = [];
                this.match(e) && t.push(this), this.object && (t = t.concat(this.object.find(e)));
                var n = this.params;
                if (n)
                    for (var r = 0, i = n.length; i > r; r++) t = t.concat(n[r].find(e));
                return t
            }, n.prototype.toString = function () {
                var e = this.object ? this.object.toString() : "";
                return this.params && (e += "(" + this.params.join(", ") + ")"), e
            }, t.exports = n
        }, {
            "../../type/Index": 199,
            "../../type/Range": 201,
            "../../util/number": 208,
            "./Node": 107,
            "./RangeNode": 110,
            "./SymbolNode": 111
        }],
        110: [function (e, t) {
            function n(e, t) {
                if (this.math = e, this.start = null, this.end = null, this.step = null, 2 == t.length) this.start = t[0], this.end = t[1];
                else {
                    if (3 != t.length) throw new SyntaxError("Wrong number of arguments");
                    this.start = t[0], this.step = t[1], this.end = t[2]
                }
            }
            var r = e("./Node"),
                i = e("../../type/Range");
            n.prototype = new r, n.prototype.eval = function () {
                var e = this.start.eval(),
                    t = this.step ? this.step.eval() : 1,
                    n = this.end.eval(),
                    r = [],
                    i = e;
                if (t > 0)
                    for (; n >= i;) r.push(i), i += t;
                else if (0 > t)
                    for (; i >= n;) r.push(i), i += t;
                return r
            }, n.prototype.toRange = function () {
                var e = this.start.eval(),
                    t = this.step ? this.step.eval() : 1,
                    n = this.end.eval();
                return n = this.math.add(n, t > 0 ? 1 : -1), new i(e, n, t)
            }, n.prototype.find = function (e) {
                var t = [];
                return this.match(e) && t.push(this), this.start && (t = t.concat(this.start.find(e))), this.step && (t = t.concat(this.step.find(e))), this.end && (t = t.concat(this.end.find(e))), t
            }, n.prototype.toString = function () {
                var e = this.start.toString();
                return this.step && (e += ":" + this.step.toString()), e += ":" + this.end.toString()
            }, t.exports = n
        }, {
            "../../type/Range": 201,
            "./Node": 107
        }],
        111: [function (e, t) {
            function n(e, t) {
                this.name = e, this.scope = t
            }
            var r = e("./Node");
            n.prototype = new r, n.prototype.eval = function () {
                var e = this.scope.get(this.name);
                if (void 0 === e) throw new Error("Undefined symbol " + this.name);
                return e
            }, n.prototype.toString = function () {
                return this.name
            }, t.exports = n
        }, {
            "./Node": 107
        }],
        112: [function (e, t) {
            function n(e, t, n, r, i, o) {
                this.math = e, this.name = t, this.params = n, this.paramScopes = r, this.expr = i, this.scope = o, this.hasContextParams = !1;
                for (var s = {
                        type: a,
                        properties: {
                            name: "end"
                        }
                    }, u = 0, l = n.length; l > u; u++)
                    if (n[u].find(s).length > 0) {
                        this.hasContextParams = !0;
                        break
                    }
            }
            var r = e("../../util/number"),
                i = e("./Node"),
                o = e("./RangeNode"),
                a = e("./SymbolNode"),
                s = e("../../type/Index"),
                u = e("../../type/Range"),
                l = r.isNumber;
            n.prototype = new i, n.prototype.eval = function () {
                if (void 0 === this.expr) throw new Error("Undefined symbol " + this.name);
                var e, t = this.scope.get(this.name);
                if (void 0 == t) throw new Error("Undefined symbol " + this.name);
                if (this.hasContextParams) {
                    var n = this.paramScopes,
                        r = this.math.size(t).valueOf();
                    if (n && r)
                        for (var i = 0, a = this.params.length; a > i; i++) {
                            var c = n[i];
                            c && c.set("end", r[i])
                        }
                }
                var f = [];
                this.params.forEach(function (e) {
                    var t;
                    if (t = e instanceof o ? e.toRange() : e.eval(), t instanceof u) t.start--, t.end--;
                    else {
                        if (!l(t)) throw new TypeError("Number or Range expected");
                        t--
                    }
                    f.push(t)
                });
                var p = this.expr.eval(),
                    m = s.create(f);
                return e = this.math.subset(t, m, p), this.scope.set(this.name, e), e
            }, n.prototype.find = function (e) {
                var t = [];
                this.match(e) && t.push(this);
                var n = this.params;
                if (n)
                    for (var r = 0, i = n.length; i > r; r++) t = t.concat(n[r].find(e));
                return this.expr && (t = t.concat(this.expr.find(e))), t
            }, n.prototype.toString = function () {
                var e = "";
                return e += this.name, this.params && this.params.length && (e += "(" + this.params.join(", ") + ")"), e += " = ", e += this.expr.toString()
            }, t.exports = n
        }, {
            "../../type/Index": 199,
            "../../type/Range": 201,
            "../../util/number": 208,
            "./Node": 107,
            "./RangeNode": 110,
            "./SymbolNode": 111
        }],
        113: [function () {}, {}],
        114: [function (e, t, n) {
            n.AssignmentNode = e("./AssignmentNode"), n.BlockNode = e("./BlockNode"), n.ConstantNode = e("./ConstantNode"), n.FunctionNode = e("./FunctionNode"), n.ArrayNode = e("./ArrayNode"), n.Node = e("./Node"), n.OperatorNode = e("./OperatorNode"), n.ParamsNode = e("./ParamsNode"), n.RangeNode = e("./RangeNode"), n.SymbolNode = e("./SymbolNode"), n.UpdateNode = e("./UpdateNode"), n.handlers = e("./handlers")
        }, {
            "./ArrayNode": 102,
            "./AssignmentNode": 103,
            "./BlockNode": 104,
            "./ConstantNode": 105,
            "./FunctionNode": 106,
            "./Node": 107,
            "./OperatorNode": 108,
            "./ParamsNode": 109,
            "./RangeNode": 110,
            "./SymbolNode": 111,
            "./UpdateNode": 112,
            "./handlers": 113
        }],
        115: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Complex"),
                    i = (e("../../type/Matrix"), e("../../type/collection")),
                    o = n.number.isNumBool,
                    a = r.isComplex,
                    s = i.isCollection;
                t.abs = function u(e) {
                    if (1 != arguments.length) throw new n.error.ArgumentsError("abs", arguments.length, 1);
                    if (o(e)) return Math.abs(e);
                    if (a(e)) return Math.sqrt(e.re * e.re + e.im * e.im);
                    if (s(e)) return i.deepMap(e, u);
                    if (e.valueOf() !== e) return u(e.valueOf());
                    throw new n.error.UnsupportedTypeError("abs", e)
                }
            }
        }, {
            "../../type/Complex": 197,
            "../../type/Matrix": 200,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        116: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Complex"),
                    i = (e("../../type/Matrix"), e("../../type/Unit")),
                    o = e("../../type/collection"),
                    a = n.number.isNumBool,
                    s = n.string.isString,
                    u = r.isComplex,
                    l = i.isUnit,
                    c = o.isCollection;
                t.add = function f(e, t) {
                    if (2 != arguments.length) throw new n.error.ArgumentsError("add", arguments.length, 2);
                    if (a(e)) {
                        if (a(t)) return e + t;
                        if (u(t)) return new r(e + t.re, t.im)
                    } else if (u(e)) {
                        if (a(t)) return new r(e.re + t, e.im);
                        if (u(t)) return new r(e.re + t.re, e.im + t.im)
                    } else if (l(e) && l(t)) {
                        if (!e.equalBase(t)) throw new Error("Units do not match");
                        if (null == e.value) throw new Error("Unit on left hand side of operator + has an undefined value");
                        if (null == t.value) throw new Error("Unit on right hand side of operator + has an undefined value");
                        var i = e.clone();
                        return i.value += t.value, i.fixPrefix = !1, i
                    }
                    if (s(e) || s(t)) return e + t;
                    if (c(e) || c(t)) return o.deepMap2(e, t, f);
                    if (e.valueOf() !== e || t.valueOf() !== t) return f(e.valueOf(), t.valueOf());
                    throw new n.error.UnsupportedTypeError("add", e, t)
                }
            }
        }, {
            "../../type/Complex": 197,
            "../../type/Matrix": 200,
            "../../type/Unit": 202,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        117: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Complex"),
                    i = e("../../type/collection"),
                    o = n.number.isNumBool,
                    a = i.isCollection,
                    s = r.isComplex;
                t.ceil = function u(e) {
                    if (1 != arguments.length) throw new n.error.ArgumentsError("ceil", arguments.length, 1);
                    if (o(e)) return Math.ceil(e);
                    if (s(e)) return new r(Math.ceil(e.re), Math.ceil(e.im));
                    if (a(e)) return i.deepMap(e, u);
                    if (e.valueOf() !== e) return u(e.valueOf());
                    throw new n.error.UnsupportedTypeError("ceil", e)
                }
            }
        }, {
            "../../type/Complex": 197,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        118: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Complex"),
                    i = e("../../type/collection"),
                    o = n.number.isNumBool,
                    a = r.isComplex,
                    s = i.isCollection;
                t.cube = function u(e) {
                    if (1 != arguments.length) throw new n.error.ArgumentsError("cube", arguments.length, 1);
                    if (o(e)) return e * e * e;
                    if (a(e)) return t.multiply(t.multiply(e, e), e);
                    if (s(e)) return i.deepMap(e, u);
                    if (e.valueOf() !== e) return u(e.valueOf());
                    throw new n.error.UnsupportedTypeError("cube", e)
                }
            }
        }, {
            "../../type/Complex": 197,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        119: [function (e, t) {
            t.exports = function (t) {
                function n(e, t) {
                    var n = t.re * t.re + t.im * t.im;
                    return 0 != n ? new i((e.re * t.re + e.im * t.im) / n, (e.im * t.re - e.re * t.im) / n) : new i(0 != e.re ? e.re / 0 : 0, 0 != e.im ? e.im / 0 : 0)
                }
                var r = e("../../util/index"),
                    i = e("../../type/Complex"),
                    o = (e("../../type/Matrix"), e("../../type/Unit")),
                    a = e("../../type/collection"),
                    s = r.number.isNumBool,
                    u = i.isComplex,
                    l = o.isUnit,
                    c = a.isCollection;
                t.divide = function f(e, o) {
                    if (2 != arguments.length) throw new r.error.ArgumentsError("divide", arguments.length, 2);
                    if (s(e)) {
                        if (s(o)) return e / o;
                        if (u(o)) return n(new i(e, 0), o)
                    }
                    if (u(e)) {
                        if (s(o)) return n(e, new i(o, 0));
                        if (u(o)) return n(e, o)
                    }
                    if (l(e) && s(o)) {
                        var p = e.clone();
                        return p.value /= o, p
                    }
                    if (c(e)) return c(o) ? t.multiply(e, t.inv(o)) : a.deepMap2(e, o, f);
                    if (c(o)) return t.multiply(e, t.inv(o));
                    if (e.valueOf() !== e || o.valueOf() !== o) return f(e.valueOf(), o.valueOf());
                    throw new r.error.UnsupportedTypeError("divide", e, o)
                }
            }
        }, {
            "../../type/Complex": 197,
            "../../type/Matrix": 200,
            "../../type/Unit": 202,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        120: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/collection");
                t.edivide = function (e, i) {
                    if (2 != arguments.length) throw new n.error.ArgumentsError("edivide", arguments.length, 2);
                    return r.deepMap2(e, i, t.divide)
                }
            }
        }, {
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        121: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/collection");
                t.emultiply = function (e, i) {
                    if (2 != arguments.length) throw new n.error.ArgumentsError("emultiply", arguments.length, 2);
                    return r.deepMap2(e, i, t.multiply)
                }
            }
        }, {
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        122: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/collection");
                t.epow = function (e, i) {
                    if (2 != arguments.length) throw new n.error.ArgumentsError("epow", arguments.length, 2);
                    return r.deepMap2(e, i, t.pow)
                }
            }
        }, {
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        123: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Complex"),
                    i = e("../../type/Unit"),
                    o = e("../../type/collection"),
                    a = n.number.isNumBool,
                    s = n.string.isString,
                    u = r.isComplex,
                    l = i.isUnit,
                    c = o.isCollection;
                t.equal = function f(e, t) {
                    if (2 != arguments.length) throw new n.error.ArgumentsError("equal", arguments.length, 2);
                    if (a(e)) {
                        if (a(t)) return e == t;
                        if (u(t)) return e == t.re && 0 == t.im
                    }
                    if (u(e)) {
                        if (a(t)) return e.re == t && 0 == e.im;
                        if (u(t)) return e.re == t.re && e.im == t.im
                    }
                    if (l(e) && l(t)) {
                        if (!e.equalBase(t)) throw new Error("Cannot compare units with different base");
                        return e.value == t.value
                    }
                    if (s(e) || s(t)) return e == t;
                    if (c(e) || c(t)) return o.deepMap2(e, t, f);
                    if (e.valueOf() !== e || t.valueOf() !== t) return f(e.valueOf(), t.valueOf());
                    throw new n.error.UnsupportedTypeError("equal", e, t)
                }
            }
        }, {
            "../../type/Complex": 197,
            "../../type/Unit": 202,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        124: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Complex"),
                    i = (e("../../type/Matrix"), e("../../type/collection")),
                    o = n.number.isNumBool,
                    a = r.isComplex,
                    s = i.isCollection;
                t.exp = function u(e) {
                    if (1 != arguments.length) throw new n.error.ArgumentsError("exp", arguments.length, 1);
                    if (o(e)) return Math.exp(e);
                    if (a(e)) {
                        var t = Math.exp(e.re);
                        return new r(t * Math.cos(e.im), t * Math.sin(e.im))
                    }
                    if (s(e)) return i.deepMap(e, u);
                    if (e.valueOf() !== e) return u(e.valueOf());
                    throw new n.error.UnsupportedTypeError("exp", e)
                }
            }
        }, {
            "../../type/Complex": 197,
            "../../type/Matrix": 200,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        125: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Complex"),
                    i = e("../../type/collection"),
                    o = n.number.isNumBool,
                    a = r.isComplex,
                    s = i.isCollection;
                t.fix = function u(e) {
                    if (1 != arguments.length) throw new n.error.ArgumentsError("fix", arguments.length, 1);
                    if (o(e)) return e > 0 ? Math.floor(e) : Math.ceil(e);
                    if (a(e)) return new r(e.re > 0 ? Math.floor(e.re) : Math.ceil(e.re), e.im > 0 ? Math.floor(e.im) : Math.ceil(e.im));
                    if (s(e)) return i.deepMap(e, u);
                    if (e.valueOf() !== e) return u(e.valueOf());
                    throw new n.error.UnsupportedTypeError("fix", e)
                }
            }
        }, {
            "../../type/Complex": 197,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        126: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Complex"),
                    i = e("../../type/collection"),
                    o = n.number.isNumBool,
                    a = r.isComplex,
                    s = i.isCollection;
                t.floor = function u(e) {
                    if (1 != arguments.length) throw new n.error.ArgumentsError("floor", arguments.length, 1);
                    if (o(e)) return Math.floor(e);
                    if (a(e)) return new r(Math.floor(e.re), Math.floor(e.im));
                    if (s(e)) return i.deepMap(e, u);
                    if (e.valueOf() !== e) return u(e.valueOf());
                    throw new n.error.UnsupportedTypeError("floor", e)
                }
            }
        }, {
            "../../type/Complex": 197,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        127: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/collection"),
                    i = n.number.isNumBool,
                    o = n.number.isInteger,
                    a = r.isCollection;
                t.gcd = function s() {
                    var e, t = arguments[0],
                        u = arguments[1];
                    if (2 == arguments.length) {
                        if (i(t) && i(u)) {
                            if (!o(t) || !o(u)) throw new Error("Parameters in function gcd must be integer numbers");
                            for (; 0 != u;) e = t % u, t = u, u = e;
                            return 0 > t ? -t : t
                        }
                        if (a(t) || a(u)) return r.deepMap2(t, u, s);
                        if (t.valueOf() !== t || u.valueOf() !== u) return s(t.valueOf(), u.valueOf());
                        throw new n.error.UnsupportedTypeError("gcd", t, u)
                    }
                    if (arguments.length > 2) {
                        for (var l = 1; l < arguments.length; l++) t = s(t, arguments[l]);
                        return t
                    }
                    throw new SyntaxError("Function gcd expects two or more arguments")
                }
            }
        }, {
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        128: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Complex"),
                    i = e("../../type/Unit"),
                    o = e("../../type/collection"),
                    a = n.number.isNumBool,
                    s = n.string.isString,
                    u = r.isComplex,
                    l = i.isUnit,
                    c = o.isCollection;
                t.larger = function f(e, t) {
                    if (2 != arguments.length) throw new n.error.ArgumentsError("larger", arguments.length, 2);
                    if (a(e) && a(t)) return e > t;
                    if (l(e) && l(t)) {
                        if (!e.equalBase(t)) throw new Error("Cannot compare units with different base");
                        return e.value > t.value
                    }
                    if (s(e) || s(t)) return e > t;
                    if (c(e) || c(t)) return o.deepMap2(e, t, f);
                    if (u(e) || u(t)) throw new TypeError("No ordering relation is defined for complex numbers");
                    if (e.valueOf() !== e || t.valueOf() !== t) return f(e.valueOf(), t.valueOf());
                    throw new n.error.UnsupportedTypeError("larger", e, t)
                }
            }
        }, {
            "../../type/Complex": 197,
            "../../type/Unit": 202,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        129: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Complex"),
                    i = e("../../type/Unit"),
                    o = e("../../type/collection"),
                    a = n.number.isNumBool,
                    s = n.string.isString,
                    u = r.isComplex,
                    l = i.isUnit,
                    c = o.isCollection;
                t.largereq = function f(e, t) {
                    if (2 != arguments.length) throw new n.error.ArgumentsError("largereq", arguments.length, 2);
                    if (a(e) && a(t)) return e >= t;
                    if (l(e) && l(t)) {
                        if (!e.equalBase(t)) throw new Error("Cannot compare units with different base");
                        return e.value >= t.value
                    }
                    if (s(e) || s(t)) return e >= t;
                    if (c(e) || c(t)) return o.deepMap2(e, t, f);
                    if (u(e) || u(t)) throw new TypeError("No ordering relation is defined for complex numbers");
                    if (e.valueOf() !== e || t.valueOf() !== t) return f(e.valueOf(), t.valueOf());
                    throw new n.error.UnsupportedTypeError("largereq", e, t)
                }
            }
        }, {
            "../../type/Complex": 197,
            "../../type/Unit": 202,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        130: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/collection"),
                    i = n.number.isNumBool,
                    o = n.number.isInteger,
                    a = r.isCollection;
                t.lcm = function s() {
                    var e, t = arguments[0],
                        u = arguments[1];
                    if (2 == arguments.length) {
                        if (i(t) && i(u)) {
                            if (!o(t) || !o(u)) throw new Error("Parameters in function lcm must be integer numbers");
                            if (0 == t || 0 == u) return 0;
                            for (var l = t * u; 0 != u;) e = u, u = t % e, t = e;
                            return Math.abs(l / t)
                        }
                        if (a(t) || a(u)) return r.deepMap2(t, u, s);
                        if (t.valueOf() !== t || u.valueOf() !== u) return s(t.valueOf(), u.valueOf());
                        throw new n.error.UnsupportedTypeError("lcm", t, u)
                    }
                    if (arguments.length > 2) {
                        for (var c = 1; c < arguments.length; c++) t = s(t, arguments[c]);
                        return t
                    }
                    throw new SyntaxError("Function lcm expects two or more arguments")
                }
            }
        }, {
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        131: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Complex"),
                    i = e("../../type/collection"),
                    o = n.number.isNumBool,
                    a = r.isComplex,
                    s = i.isCollection;
                t.log = function u(e, l) {
                    if (1 == arguments.length) {
                        if (o(e)) return e >= 0 ? Math.log(e) : u(new r(e, 0));
                        if (a(e)) return new r(Math.log(Math.sqrt(e.re * e.re + e.im * e.im)), Math.atan2(e.im, e.re));
                        if (s(e)) return i.deepMap(e, u);
                        if (e.valueOf() !== e) return u(e.valueOf());
                        throw new n.error.UnsupportedTypeError("log", e)
                    }
                    if (2 == arguments.length) return t.divide(u(e), u(l));
                    throw new n.error.ArgumentsError("log", arguments.length, 1, 2)
                }
            }
        }, {
            "../../type/Complex": 197,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        132: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Complex"),
                    i = e("../../type/collection"),
                    o = n.number.isNumBool,
                    a = r.isComplex,
                    s = i.isCollection;
                t.log10 = function u(e) {
                    if (1 != arguments.length) throw new n.error.ArgumentsError("log10", arguments.length, 1);
                    if (o(e)) return e >= 0 ? Math.log(e) / Math.LN10 : u(new r(e, 0));
                    if (a(e)) return new r(Math.log(Math.sqrt(e.re * e.re + e.im * e.im)) / Math.LN10, Math.atan2(e.im, e.re) / Math.LN10);
                    if (s(e)) return i.deepMap(e, u);
                    if (e.valueOf() !== e) return u(e.valueOf());
                    throw new n.error.UnsupportedTypeError("log10", e)
                }
            }
        }, {
            "../../type/Complex": 197,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        133: [function (e, t) {
            t.exports = function (t) {
                function n(e, t) {
                    if (t > 0) return e > 0 ? e % t : 0 == e ? 0 : e - t * Math.floor(e / t);
                    if (0 == t) return e;
                    throw new Error("Cannot calculate mod for a negative divisor")
                }
                var r = e("../../util/index"),
                    i = e("../../type/collection"),
                    o = r.number.isNumber,
                    a = r.boolean.isBoolean,
                    s = i.isCollection;
                t.mod = function u(e, t) {
                    if (2 != arguments.length) throw new r.error.ArgumentsError("mod", arguments.length, 2);
                    if (o(e)) {
                        if (o(t)) return n(e, t);
                        if (a(t)) return n(e, Number(t))
                    } else if (a(e)) {
                        if (o(t)) return n(Number(e), t);
                        if (a(t)) return n(Number(e), Number(t))
                    }
                    if (s(e) || s(t)) return i.deepMap2(e, t, u);
                    if (e.valueOf() !== e || t.valueOf() !== t) return u(e.valueOf(), t.valueOf());
                    throw new r.error.UnsupportedTypeError("mod", e, t)
                }
            }
        }, {
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        134: [function (e, t) {
            t.exports = function (t) {
                function n(e, n) {
                    for (var r = [], i = e.length, o = n[0].length, a = e[0].length, s = 0; i > s; s++) {
                        r[s] = [];
                        for (var u = 0; o > u; u++) {
                            for (var l = null, c = 0; a > c; c++) {
                                var f = t.multiply(e[s][c], n[c][u]);
                                l = null === l ? f : t.add(l, f)
                            }
                            r[s][u] = l
                        }
                    }
                    return r
                }

                function r(e, n) {
                    for (var r = [], i = n.length, o = n[0].length, a = 0; o > a; a++) {
                        for (var s = null, u = 0; i > u; u++) {
                            var l = t.multiply(e[u], n[u][a]);
                            s = 0 === u ? l : t.add(s, l)
                        }
                        r[a] = s
                    }
                    return r
                }

                function i(e, n) {
                    for (var r = [], i = e.length, o = e[0].length, a = 0; i > a; a++) {
                        for (var s = null, u = 0; o > u; u++) {
                            var l = t.multiply(e[a][u], n[u]);
                            s = 0 === u ? l : t.add(s, l)
                        }
                        r[a] = s
                    }
                    return r
                }

                function o(e, n) {
                    var r = e.length,
                        i = null;
                    if (r) {
                        i = 0;
                        for (var o = 0, a = e.length; a > o; o++) i = t.add(i, t.multiply(e[o], n[o]))
                    }
                    return i
                }

                function a(e, t) {
                    return 0 == e.im ? 0 == t.im ? e.re * t.re : 0 == t.re ? new u(0, e.re * t.im) : new u(e.re * t.re, e.re * t.im) : 0 == e.re ? 0 == t.im ? new u(0, e.im * t.re) : 0 == t.re ? -e.im * t.im : new u(-e.im * t.im, e.im * t.re) : 0 == t.im ? new u(e.re * t.re, e.im * t.re) : 0 == t.re ? new u(-e.im * t.im, e.re * t.im) : new u(e.re * t.re - e.im * t.im, e.re * t.im + e.im * t.re)
                }
                var s = e("../../util/index"),
                    u = e("../../type/Complex"),
                    l = e("../../type/Matrix"),
                    c = e("../../type/Unit"),
                    f = e("../../type/collection"),
                    p = s.array,
                    m = s.number.isNumBool,
                    h = u.isComplex,
                    x = Array.isArray,
                    d = c.isUnit;
                t.multiply = function g(e, t) {
                    if (2 != arguments.length) throw new s.error.ArgumentsError("multiply", arguments.length, 2);
                    if (m(e)) {
                        if (m(t)) return e * t;
                        if (h(t)) return a(new u(e, 0), t);
                        if (d(t)) return res = t.clone(), res.value *= e, res
                    } else if (h(e)) {
                        if (m(t)) return a(e, new u(t, 0));
                        if (h(t)) return a(e, t)
                    } else if (d(e)) {
                        if (m(t)) return res = e.clone(), res.value *= t, res
                    } else {
                        if (x(e)) {
                            if (x(t)) {
                                var c = p.size(e),
                                    y = p.size(t);
                                if (1 == c.length) {
                                    if (1 == y.length) {
                                        if (c[0] != y[0]) throw new RangeError("Dimensions mismatch in multiplication. Length of A must match length of B (A is " + c[0] + ", B is " + y[0] + c[0] + " != " + y[0] + ")");
                                        return o(e, t)
                                    }
                                    if (2 == y.length) {
                                        if (c[0] != y[0]) throw new RangeError("Dimensions mismatch in multiplication. Length of A must match rows of B (A is " + c[0] + ", B is " + y[0] + "x" + y[1] + ", " + c[0] + " != " + y[0] + ")");
                                        return r(e, t)
                                    }
                                    throw new Error("Can only multiply a 1 or 2 dimensional matrix (B has " + y.length + " dimensions)")
                                }
                                if (2 == c.length) {
                                    if (1 == y.length) {
                                        if (c[1] != y[0]) throw new RangeError("Dimensions mismatch in multiplication. Columns of A must match length of B (A is " + c[0] + "x" + c[0] + ", B is " + y[0] + ", " + c[1] + " != " + y[0] + ")");
                                        return i(e, t)
                                    }
                                    if (2 == y.length) {
                                        if (c[1] != y[0]) throw new RangeError("Dimensions mismatch in multiplication. Columns of A must match rows of B (A is " + c[0] + "x" + c[1] + ", B is " + y[0] + "x" + y[1] + ", " + c[1] + " != " + y[0] + ")");
                                        return n(e, t)
                                    }
                                    throw new Error("Can only multiply a 1 or 2 dimensional matrix (B has " + y.length + " dimensions)")
                                }
                                throw new Error("Can only multiply a 1 or 2 dimensional matrix (A has " + c.length + " dimensions)")
                            }
                            return t instanceof l ? new l(g(e, t.valueOf())) : f.deepMap2(e, t, g)
                        }
                        if (e instanceof l) return t instanceof l ? new l(g(e.valueOf(), t.valueOf())) : new l(g(e.valueOf(), t))
                    }
                    if (x(t)) return f.deepMap2(e, t, g);
                    if (t instanceof l) return new l(f.deepMap2(e, t.valueOf(), g));
                    if (e.valueOf() !== e || t.valueOf() !== t) return g(e.valueOf(), t.valueOf());
                    throw new s.error.UnsupportedTypeError("multiply", e, t)
                }
            }
        }, {
            "../../type/Complex": 197,
            "../../type/Matrix": 200,
            "../../type/Unit": 202,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        135: [function (e, t) {
            t.exports = function (t) {
                function n(e, n) {
                    var r = t.log(e),
                        i = t.multiply(r, n);
                    return t.exp(i)
                }
                var r = e("../../util/index"),
                    i = e("../../type/Complex"),
                    o = e("../../type/Matrix"),
                    a = (e("../../type/collection"), r.array),
                    s = r.number.isNumBool,
                    u = Array.isArray,
                    l = r.number.isInteger,
                    c = i.isComplex;
                t.pow = function f(e, p) {
                    if (2 != arguments.length) throw new r.error.ArgumentsError("pow", arguments.length, 2);
                    if (s(e)) {
                        if (s(p)) return l(p) || e >= 0 ? Math.pow(e, p) : n(new i(e, 0), new i(p, 0));
                        if (c(p)) return n(new i(e, 0), p)
                    } else if (c(e)) {
                        if (s(p)) return n(e, new i(p, 0));
                        if (c(p)) return n(e, p)
                    } else {
                        if (u(e)) {
                            if (!s(p) || !l(p) || 0 > p) throw new TypeError("For A^b, b must be a positive integer (value is " + p + ")");
                            var m = a.size(e);
                            if (2 != m.length) throw new Error("For A^b, A must be 2 dimensional (A has " + m.length + " dimensions)");
                            if (m[0] != m[1]) throw new Error("For A^b, A must be square (size is " + m[0] + "x" + m[1] + ")");
                            if (0 == p) return t.eye(m[0]);
                            for (var h = e, x = 1; p > x; x++) h = t.multiply(e, h);
                            return h
                        }
                        if (e instanceof o) return new o(f(e.valueOf(), p))
                    }
                    if (e.valueOf() !== e || p.valueOf() !== p) return f(e.valueOf(), p.valueOf());
                    throw new r.error.UnsupportedTypeError("pow", e, p)
                }
            }
        }, {
            "../../type/Complex": 197,
            "../../type/Matrix": 200,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        136: [function (e, t) {
            t.exports = function (t) {
                function n(e, t) {
                    if (t) {
                        var n = Math.pow(10, t);
                        return Math.round(e * n) / n
                    }
                    return Math.round(e)
                }
                var r = e("../../util/index"),
                    i = e("../../type/Complex"),
                    o = e("../../type/collection"),
                    a = r.number.isNumber,
                    s = r.number.isInteger,
                    u = r.number.isNumBool,
                    l = i.isComplex,
                    c = o.isCollection;
                t.round = function f(e, t) {
                    if (1 != arguments.length && 2 != arguments.length) throw new r.error.ArgumentsError("round", arguments.length, 1, 2);
                    if (void 0 == t) {
                        if (u(e)) return Math.round(e);
                        if (l(e)) return new i(Math.round(e.re), Math.round(e.im));
                        if (c(e)) return o.deepMap(e, f);
                        if (e.valueOf() !== e) return f(e.valueOf());
                        throw new r.error.UnsupportedTypeError("round", e)
                    }
                    if (!a(t) || !s(t)) throw new TypeError("Number of decimals in function round must be an integer");
                    if (0 > t || t > 9) throw new Error("Number of decimals in function round must be in te range of 0-9");
                    if (u(e)) return n(e, t);
                    if (l(e)) return new i(n(e.re, t), n(e.im, t));
                    if (c(e) || c(t)) return o.deepMap2(e, t, f);
                    if (e.valueOf() !== e || t.valueOf() !== t) return f(e.valueOf(), t.valueOf());
                    throw new r.error.UnsupportedTypeError("round", e, t)
                }
            }
        }, {
            "../../type/Complex": 197,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        137: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Complex"),
                    i = e("../../type/collection"),
                    o = n.number,
                    a = n.number.isNumBool,
                    s = r.isComplex,
                    u = i.isCollection;
                t.sign = function l(e) {
                    if (1 != arguments.length) throw new n.error.ArgumentsError("sign", arguments.length, 1);
                    if (a(e)) return o.sign(e);
                    if (s(e)) {
                        var t = Math.sqrt(e.re * e.re + e.im * e.im);
                        return new r(e.re / t, e.im / t)
                    }
                    if (u(e)) return i.deepMap(e, l);
                    if (e.valueOf() !== e) return l(e.valueOf());
                    throw new n.error.UnsupportedTypeError("sign", e)
                }
            }
        }, {
            "../../type/Complex": 197,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        138: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Complex"),
                    i = e("../../type/Unit"),
                    o = e("../../type/collection"),
                    a = n.number.isNumBool,
                    s = n.string.isString,
                    u = r.isComplex,
                    l = i.isUnit,
                    c = o.isCollection;
                t.smaller = function f(e, t) {
                    if (2 != arguments.length) throw new n.error.ArgumentsError("smaller", arguments.length, 2);
                    if (a(e) && a(t)) return t > e;
                    if (l(e) && l(t)) {
                        if (!e.equalBase(t)) throw new Error("Cannot compare units with different base");
                        return e.value < t.value
                    }
                    if (s(e) || s(t)) return t > e;
                    if (c(e) || c(t)) return o.deepMap2(e, t, f);
                    if (u(e) || u(t)) throw new TypeError("No ordering relation is defined for complex numbers");
                    if (e.valueOf() !== e || t.valueOf() !== t) return f(e.valueOf(), t.valueOf());
                    throw new n.error.UnsupportedTypeError("smaller", e, t)
                }
            }
        }, {
            "../../type/Complex": 197,
            "../../type/Unit": 202,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        139: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Complex"),
                    i = e("../../type/Unit"),
                    o = e("../../type/collection"),
                    a = n.number.isNumBool,
                    s = n.string.isString,
                    u = r.isComplex,
                    l = i.isUnit,
                    c = o.isCollection;
                t.smallereq = function f(e, t) {
                    if (2 != arguments.length) throw new n.error.ArgumentsError("smallereq", arguments.length, 2);
                    if (a(e) && a(t)) return t >= e;
                    if (l(e) && l(t)) {
                        if (!e.equalBase(t)) throw new Error("Cannot compare units with different base");
                        return e.value <= t.value
                    }
                    if (s(e) || s(t)) return t >= e;
                    if (c(e) || c(t)) return o.deepMap2(e, t, f);
                    if (u(e) || u(t)) throw new TypeError("No ordering relation is defined for complex numbers");
                    if (e.valueOf() !== e || t.valueOf() !== t) return f(e.valueOf(), t.valueOf());
                    throw new n.error.UnsupportedTypeError("smallereq", e, t)
                }
            }
        }, {
            "../../type/Complex": 197,
            "../../type/Unit": 202,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        140: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Complex"),
                    i = e("../../type/collection"),
                    o = n.number.isNumBool,
                    a = r.isComplex,
                    s = i.isCollection;
                t.sqrt = function u(e) {
                    if (1 != arguments.length) throw new n.error.ArgumentsError("sqrt", arguments.length, 1);
                    if (o(e)) return e >= 0 ? Math.sqrt(e) : u(new r(e, 0));
                    if (a(e)) {
                        var t = Math.sqrt(e.re * e.re + e.im * e.im);
                        return e.im >= 0 ? new r(.5 * Math.sqrt(2 * (t + e.re)), .5 * Math.sqrt(2 * (t - e.re))) : new r(.5 * Math.sqrt(2 * (t + e.re)), -.5 * Math.sqrt(2 * (t - e.re)))
                    }
                    if (s(e)) return i.deepMap(e, u);
                    if (e.valueOf() !== e) return u(e.valueOf());
                    throw new n.error.UnsupportedTypeError("sqrt", e)
                }
            }
        }, {
            "../../type/Complex": 197,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        141: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Complex"),
                    i = e("../../type/collection"),
                    o = n.number.isNumBool,
                    a = r.isComplex,
                    s = i.isCollection;
                t.square = function u(e) {
                    if (1 != arguments.length) throw new n.error.ArgumentsError("square", arguments.length, 1);
                    if (o(e)) return e * e;
                    if (a(e)) return t.multiply(e, e);
                    if (s(e)) return i.deepMap(e, u);
                    if (e.valueOf() !== e) return u(e.valueOf());
                    throw new n.error.UnsupportedTypeError("square", e)
                }
            }
        }, {
            "../../type/Complex": 197,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        142: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Complex"),
                    i = (e("../../type/Matrix"), e("../../type/Unit")),
                    o = e("../../type/collection"),
                    a = n.number.isNumBool,
                    s = (n.string.isString, r.isComplex),
                    u = i.isUnit,
                    l = o.isCollection;
                t.subtract = function c(e, t) {
                    if (2 != arguments.length) throw new n.error.ArgumentsError("subtract", arguments.length, 2);
                    if (a(e)) {
                        if (a(t)) return e - t;
                        if (s(t)) return new r(e - t.re, -t.im)
                    } else if (s(e)) {
                        if (a(t)) return new r(e.re - t, e.im);
                        if (s(t)) return new r(e.re - t.re, e.im - t.im)
                    } else if (u(e) && u(t)) {
                        if (!e.equalBase(t)) throw new Error("Units do not match");
                        if (null == e.value) throw new Error("Unit on left hand side of operator - has an undefined value");
                        if (null == t.value) throw new Error("Unit on right hand side of operator - has an undefined value");
                        var i = e.clone();
                        return i.value -= t.value, i.fixPrefix = !1, i
                    }
                    if (l(e) || l(t)) return o.deepMap2(e, t, c);
                    if (e.valueOf() !== e || t.valueOf() !== t) return c(e.valueOf(), t.valueOf());
                    throw new n.error.UnsupportedTypeError("subtract", e, t)
                }
            }
        }, {
            "../../type/Complex": 197,
            "../../type/Matrix": 200,
            "../../type/Unit": 202,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        143: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Complex"),
                    i = e("../../type/Unit"),
                    o = e("../../type/collection"),
                    a = n.number.isNumBool,
                    s = r.isComplex,
                    u = i.isUnit,
                    l = o.isCollection;
                t.unary = function c(e) {
                    if (1 != arguments.length) throw new n.error.ArgumentsError("unary", arguments.length, 1);
                    if (a(e)) return -e;
                    if (s(e)) return new r(-e.re, -e.im);
                    if (u(e)) {
                        var t = e.clone();
                        return t.value = -e.value, t
                    }
                    if (l(e)) return o.deepMap(e, c);
                    if (e.valueOf() !== e) return c(e.valueOf());
                    throw new n.error.UnsupportedTypeError("unary", e)
                }
            }
        }, {
            "../../type/Complex": 197,
            "../../type/Unit": 202,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        144: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Complex"),
                    i = e("../../type/Unit"),
                    o = e("../../type/collection"),
                    a = n.number.isNumBool,
                    s = n.string.isString,
                    u = r.isComplex,
                    l = i.isUnit,
                    c = o.isCollection;
                t.unequal = function f(e, t) {
                    if (2 != arguments.length) throw new n.error.ArgumentsError("unequal", arguments.length, 2);
                    if (a(e)) {
                        if (a(t)) return e != t;
                        if (u(t)) return e != t.re || 0 != t.im
                    }
                    if (u(e)) {
                        if (a(t)) return e.re != t || 0 != e.im;
                        if (u(t)) return e.re != t.re || e.im != t.im
                    }
                    if (l(e) && l(t)) {
                        if (!e.equalBase(t)) throw new Error("Cannot compare units with different base");
                        return e.value != t.value
                    }
                    if (s(e) || s(t)) return e != t;
                    if (c(e) || c(t)) return o.deepMap2(e, t, f);
                    if (e.valueOf() !== e || t.valueOf() !== t) return f(e.valueOf(), t.valueOf());
                    throw new n.error.UnsupportedTypeError("unequal", e, t)
                }
            }
        }, {
            "../../type/Complex": 197,
            "../../type/Unit": 202,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        145: [function (e, t) {
            t.exports = function (t) {
                function n(e, t) {
                    for (var n, r, i, o = 0, a = 1, s = 1, u = 0; t;) r = Math.floor(e / t), i = e % t, n = o, o = a - r * o, a = n, n = s, s = u - r * s, u = n, e = t, t = i;
                    return 0 > e ? [-e, e ? -a : 0, -u] : [e, e ? a : 0, u]
                }
                var r = e("../../util/index"),
                    i = r.number.isNumBool,
                    o = r.number.isInteger;
                t.xgcd = function (e, t) {
                    if (2 == arguments.length) {
                        if (i(e) && i(t)) {
                            if (!o(e) || !o(t)) throw new Error("Parameters in function xgcd must be integer numbers");
                            return n(e, t)
                        }
                        throw new r.error.UnsupportedTypeError("xgcd", e, t)
                    }
                    throw new SyntaxError("Function xgcd expects two arguments")
                }
            }
        }, {
            "../../util/index": 207
        }],
        146: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Complex"),
                    i = e("../../type/collection"),
                    o = n.number.isNumBool,
                    a = i.isCollection,
                    s = r.isComplex;
                t.arg = function u(e) {
                    if (1 != arguments.length) throw new n.error.ArgumentsError("arg", arguments.length, 1);
                    return o(e) ? Math.atan2(0, e) : s(e) ? Math.atan2(e.im, e.re) : a(e) ? i.deepMap(e, u) : e.valueOf() !== e ? u(e.valueOf()) : t.atan2(0, e)
                }
            }
        }, {
            "../../type/Complex": 197,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        147: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Complex"),
                    i = e("../../type/collection"),
                    o = n.object,
                    a = n.number.isNumBool,
                    s = i.isCollection,
                    u = r.isComplex;
                t.conj = function l(e) {
                    if (1 != arguments.length) throw new n.error.ArgumentsError("conj", arguments.length, 1);
                    return a(e) ? e : u(e) ? new r(e.re, -e.im) : s(e) ? i.deepMap(e, l) : e.valueOf() !== e ? l(e.valueOf()) : o.clone(e)
                }
            }
        }, {
            "../../type/Complex": 197,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        148: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Complex"),
                    i = e("../../type/collection"),
                    o = n.number.isNumBool,
                    a = i.isCollection,
                    s = r.isComplex;
                t.im = function u(e) {
                    if (1 != arguments.length) throw new n.error.ArgumentsError("im", arguments.length, 1);
                    return o(e) ? 0 : s(e) ? e.im : a(e) ? i.deepMap(e, u) : e.valueOf() !== e ? u(e.valueOf()) : 0
                }
            }
        }, {
            "../../type/Complex": 197,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        149: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Complex"),
                    i = e("../../type/collection"),
                    o = n.object,
                    a = n.number.isNumBool,
                    s = i.isCollection,
                    u = r.isComplex;
                t.re = function l(e) {
                    if (1 != arguments.length) throw new n.error.ArgumentsError("re", arguments.length, 1);
                    return a(e) ? e : u(e) ? e.re : s(e) ? i.deepMap(e, l) : e.valueOf() !== e ? l(e.valueOf()) : o.clone(e)
                }
            }
        }, {
            "../../type/Complex": 197,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        150: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/collection"),
                    i = r.isCollection,
                    o = n.number.isNumber,
                    a = n.string.isString;
                t["boolean"] = function s(e) {
                    if (1 != arguments.length) throw new n.error.ArgumentsError("boolean", arguments.length, 0, 1);
                    if ("true" === e || e === !0) return !0;
                    if ("false" === e || e === !1) return !1;
                    if (e instanceof Boolean) return e ? !0 : !1;
                    if (o(e)) return 0 !== e;
                    if (a(e)) {
                        var t = e.toLowerCase();
                        if ("true" === t) return !0;
                        if ("false" === t) return !1;
                        var u = Number(e);
                        if ("" != e && !isNaN(u)) return 0 !== u
                    }
                    if (i(e)) return r.deepMap(e, s);
                    throw new SyntaxError(e.toString() + " is no valid boolean")
                }
            }
        }, {
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        151: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Complex"),
                    i = e("../../type/collection"),
                    o = i.isCollection,
                    a = n.number.isNumber,
                    s = n.boolean.isBoolean,
                    u = n.string.isString,
                    l = r.isComplex;
                t.complex = function c() {
                    switch (arguments.length) {
                        case 0:
                            return new r(0, 0);
                        case 1:
                            var e = arguments[0];
                            if (a(e)) return new r(e, 0);
                            if (l(e)) return e.clone();
                            if (u(e)) {
                                var t = r.parse(e);
                                if (t) return t;
                                throw new SyntaxError('String "' + e + '" is no valid complex number')
                            }
                            if (o(e)) return i.deepMap(e, c);
                            if (s(e)) return new r(Number(e), 0);
                            throw new TypeError("Two numbers or a single string expected in function complex");
                        case 2:
                            return new r(arguments[0], arguments[1]);
                        default:
                            throw new n.error.ArgumentsError("complex", arguments.length, 0, 2)
                    }
                }
            }
        }, {
            "../../type/Complex": 197,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        152: [function (e, t) {
            t.exports = function (t) {
                var n = (e("../../util/index"), e("../../type/Index"));
                t.index = function () {
                    var e = new n;
                    return n.apply(e, arguments), e
                }
            }
        }, {
            "../../type/Index": 199,
            "../../util/index": 207
        }],
        153: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Matrix");
                t.matrix = function (e) {
                    if (arguments.length > 1) throw new n.error.ArgumentsError("matrix", arguments.length, 0, 1);
                    return new r(e)
                }
            }
        }, {
            "../../type/Matrix": 200,
            "../../util/index": 207
        }],
        154: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/collection"),
                    i = r.isCollection;
                t.number = function o(e) {
                    switch (arguments.length) {
                        case 0:
                            return 0;
                        case 1:
                            if (i(e)) return r.deepMap(e, o);
                            var t = Number(e);
                            if (isNaN(t) && (t = Number(e.valueOf())), isNaN(t)) throw new SyntaxError(e.toString() + " is no valid number");
                            return t;
                        default:
                            throw new n.error.ArgumentsError("number", arguments.length, 0, 1)
                    }
                }
            }
        }, {
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        155: [function (e, t) {
            t.exports = function (t) {
                var n = (e("../../util/index"), e("../../expression/Parser"));
                t.parser = function () {
                    return new n(t)
                }
            }
        }, {
            "../../expression/Parser": 4,
            "../../util/index": 207
        }],
        156: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/collection"),
                    i = n.number,
                    o = n.number.isNumber,
                    a = r.isCollection;
                t.string = function s(e) {
                    switch (arguments.length) {
                        case 0:
                            return "";
                        case 1:
                            return o(e) ? i.format(e) : a(e) ? r.deepMap(e, s) : null === e ? "null" : e.toString();
                        default:
                            throw new n.error.ArgumentsError("string", arguments.length, 0, 1)
                    }
                }
            }
        }, {
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        157: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Unit"),
                    i = e("../../type/collection"),
                    o = i.isCollection,
                    a = n.string.isString;
                t.unit = function s(e) {
                    switch (arguments.length) {
                        case 1:
                            var t = arguments[0];
                            if (t instanceof r) return t.clone();
                            if (a(t)) {
                                if (r.isPlainUnit(t)) return new r(null, t);
                                var u = r.parse(t);
                                if (u) return u;
                                throw new SyntaxError('String "' + t + '" is no valid unit')
                            }
                            if (o(e)) return i.deepMap(e, s);
                            throw new TypeError("A string or a number and string expected in function unit");
                        case 2:
                            return new r(arguments[0], arguments[1]);
                        default:
                            throw new n.error.ArgumentsError("unit", arguments.length, 1, 2)
                    }
                }
            }
        }, {
            "../../type/Unit": 202,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        158: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../expression/Scope"),
                    i = e("../../type/collection"),
                    o = n.string.isString,
                    a = i.isCollection;
                t.eval = function (e, s) {
                    if (1 != arguments.length && 2 != arguments.length) throw new n.error.ArgumentsError("eval", arguments.length, 1, 2);
                    var u;
                    if (u = s ? s instanceof r ? s : new r(t, s) : new r(t), o(e)) {
                        var l = t.parse(e, u);
                        return l.eval()
                    }
                    if (a(e)) return i.deepMap(e, function (e) {
                        var n = t.parse(e, u);
                        return n.eval()
                    });
                    throw new TypeError("String or matrix expected")
                }
            }
        }, {
            "../../expression/Scope": 5,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        159: [function (e, t) {
            t.exports = function (t) {
                var n = (e("../../util/index"), e("../../type/Help"));
                t.help = function (e) {
                    if (1 != arguments.length) throw new SyntaxError("Wrong number of arguments in function help (" + arguments.length + " provided, 1 expected)");
                    var r = null;
                    if (e instanceof String || "string" == typeof e) r = e;
                    else {
                        var i;
                        for (i in t)
                            if (t.hasOwnProperty(i) && e === t[i]) {
                                r = i;
                                break
                            } if (!r)
                            for (i in t.type)
                                if (t.type.hasOwnProperty(i) && e === t.type[i]) {
                                    r = i;
                                    break
                                }
                    }
                    if (r) {
                        var o = t.expression.docs[r];
                        if (!o) throw new Error('No documentation found on "' + r + '"');
                        return new n(t, o)
                    }
                    throw new Error('Could not find search term "' + e + '"')
                }
            }
        }, {
            "../../type/Help": 198,
            "../../util/index": 207
        }],
        160: [function (e, t) {
            t.exports = function (t) {
                function n() {
                    ut = 0, lt = st.charAt(0)
                }

                function r() {
                    ut++, lt = st.charAt(ut)
                }

                function i() {
                    return st.charAt(ut + 1)
                }

                function o() {
                    for (ft = it.NULL, ct = "";
                        " " == lt || "	" == lt;) r();
                    if ("#" == lt)
                        for (;
                            "\n" != lt && "" != lt;) r();
                    if ("" == lt) return ft = it.DELIMITER, void 0;
                    var e = lt + i();
                    if (ot[e]) return ft = it.DELIMITER, ct = e, r(), r(), void 0;
                    if (ot[lt]) return ft = it.DELIMITER, ct = lt, r(), void 0;
                    if (!s(lt)) {
                        if (a(lt)) {
                            for (; a(lt) || u(lt);) ct += lt, r();
                            return ft = at[ct] ? it.DELIMITER : it.SYMBOL, void 0
                        }
                        for (ft = it.UNKNOWN;
                            "" != lt;) ct += lt, r();
                        throw L('Syntax error in part "' + ct + '"')
                    }
                    if (ft = it.NUMBER, "." == lt) ct += lt, r(), u(lt) || (ft = it.UNKNOWN);
                    else {
                        for (; u(lt);) ct += lt, r();
                        "." == lt && (ct += lt, r())
                    }
                    for (; u(lt);) ct += lt, r();
                    if ("E" == lt || "e" == lt)
                        for (ct += lt, r(), ("+" == lt || "-" == lt) && (ct += lt, r()), u(lt) || (ft = it.UNKNOWN); u(lt);) ct += lt, r()
                }

                function a(e) {
                    return e >= "a" && "z" >= e || e >= "A" && "Z" >= e || "_" == e
                }

                function s(e) {
                    return e >= "0" && "9" >= e || "." == e
                }

                function u(e) {
                    return e >= "0" && "9" >= e
                }

                function l(e) {
                    n(), o();
                    var t;
                    if (t = "" == ct ? new K(void 0) : c(e), "" != ct) throw ft == it.DELIMITER ? _("Unknown operator " + ct) : L('Unexpected part "' + ct + '"');
                    return t
                }

                function c(e) {
                    var t, n, r;
                    for ("\n" != ct && ";" != ct && "" != ct && (t = f(e));
                        "\n" == ct || ";" == ct;) n || (n = new Q, t && (r = ";" != ct, n.add(t, r))), o(), "\n" != ct && ";" != ct && "" != ct && (t = f(e), r = ";" != ct, n.add(t, r));
                    return n ? n : (t || (t = f(e)), t)
                }

                function f(e) {
                    var t = p(e),
                        n = "ans";
                    return new W(n, t, e)
                }

                function p(e) {
                    if (ft == it.SYMBOL && "function" == ct) {
                        if (o(), ft != it.SYMBOL) throw L("Function name expected");
                        var t = ct;
                        if (o(), "(" != ct) throw L("Opening parenthesis ( expected");
                        for (var n = e.createSubScope(), r = [];;) {
                            if (o(), ft != it.SYMBOL) throw L("Variable name expected");
                            if (r.push(ct), o(), "," != ct) {
                                if (")" == ct) break;
                                throw L('Comma , or closing parenthesis ) expected"')
                            }
                        }
                        if (o(), "=" != ct) throw L("Equal sign = expected");
                        o();
                        var i = m(n);
                        return new Z(t, r, i, n, e)
                    }
                    return m(e)
                }

                function m(e) {
                    var n, r, i, a, s = h(e);
                    if ("=" == ct) {
                        if (s instanceof tt) return o(), n = s.name, r = null, a = m(e), new W(n, a, e);
                        if (s instanceof X && s.object instanceof tt) return o(), n = s.object.name, r = s.params, i = s.paramScopes, a = m(e), new nt(t, n, r, i, a, e);
                        throw L("Symbol expected at the left hand side of assignment operator =")
                    }
                    return s
                }

                function h(e) {
                    var n, r = [];
                    if (n = ":" == ct ? new K(1) : x(e), ":" == ct) {
                        for (r.push(n);
                            ":" == ct;) o(), ")" == ct || "," == ct || "" == ct ? r.push(new tt("end", e)) : r.push(x(e));
                        r.length && (n = new et(t, r))
                    }
                    return n
                }

                function x(e) {
                    var n, r, i, a, s;
                    for (n = d(e), r = {
                            "in": t["in"]
                        }; void 0 !== r[ct];) i = ct, a = r[i], o(), s = [n, d(e)], n = new J(i, a, s);
                    return n
                }

                function d(e) {
                    var t = g(e);
                    return t
                }

                function g(e) {
                    var n, r, i, a, s;
                    for (n = y(e), r = {
                            "==": t.equal,
                            "!=": t.unequal,
                            "<": t.smaller,
                            ">": t.larger,
                            "<=": t.smallereq,
                            ">=": t.largereq
                        }; void 0 !== r[ct];) i = ct, a = r[i], o(), s = [n, y(e)], n = new J(i, a, s);
                    return n
                }

                function y(e) {
                    var n, r, i, a, s;
                    for (n = v(e), r = {
                            "+": t.add,
                            "-": t.subtract
                        }; void 0 !== r[ct];) i = ct, a = r[i], o(), s = [n, v(e)], n = new J(i, a, s);
                    return n
                }

                function v(e) {
                    var n, r, i, a, s;
                    for (n = b(e), r = {
                            "*": t.multiply,
                            ".*": t.emultiply,
                            "/": t.divide,
                            "./": t.edivide,
                            "%": t.mod,
                            mod: t.mod
                        }; void 0 !== r[ct];) i = ct, a = r[i], o(), s = [n, b(e)], n = new J(i, a, s);
                    return n
                }

                function b(e) {
                    var n, r, i;
                    return "-" == ct ? (n = ct, r = t.unary, o(), i = [b(e)], new J(n, r, i)) : w(e)
                }

                function w(e) {
                    var n, r, i, a, s, u, l;
                    for (i = [E(e)], a = [];
                        "^" == ct || ".^" == ct;) a.push(ct), o(), i.push(E(e));
                    for (n = i.pop(); i.length;) r = i.pop(), s = a.pop(), u = "^" == s ? t.pow : t.epow, l = [r, n], n = new J(s, u, l);
                    return n
                }

                function E(e) {
                    var n, r, i, a;
                    for (n = N(e);
                        "!" == ct;) r = ct, i = t.factorial, o(), a = [n], n = new J(r, i, a);
                    return n
                }

                function N(e) {
                    var n, r, i, a;
                    for (n = O(e);
                        "'" == ct;) r = ct, i = t.transpose, o(), a = [n], n = new J(r, i, a);
                    return n
                }

                function O(e) {
                    var t, n, r, i;
                    if (ft == it.SYMBOL && rt[ct]) {
                        if (i = rt[ct], o(), "(" == ct) {
                            if (t = [], n = [], o(), ")" != ct)
                                for (r = e.createSubScope(), n.push(r), t.push(h(r));
                                    "," == ct;) o(), r = e.createSubScope(), n.push(r), t.push(h(r));
                            if (")" != ct) throw L("Parenthesis ) expected");
                            o()
                        }
                        return new i(t, n)
                    }
                    return M(e)
                }

                function M(e) {
                    var t, n;
                    return ft == it.SYMBOL ? (n = ct, o(), t = new tt(n, e), A(e, t)) : C(e)
                }

                function A(e, n) {
                    for (var r, i, a, s;
                        "(" == ct;) {
                        if (r = ct, i = [], a = [], o(), ")" != ct)
                            for (s = e.createSubScope(), a.push(s), i.push(h(s));
                                "," == ct;) o(), s = e.createSubScope(), a.push(s), i.push(h(s));
                        if ("(" == r && ")" != ct) throw L("Parenthesis ) expected");
                        o(), n = new X(t, n, i, a)
                    }
                    return n
                }

                function C(e) {
                    var t, n, i;
                    if ('"' == ct) {
                        for (n = "", i = "";
                            "" != lt && ('"' != lt || "\\" == i);) n += lt, i = lt, r();
                        if (o(), '"' != ct) throw L('End of string " expected');
                        return o(), t = new K(n), t = A(e, t)
                    }
                    return S(e)
                }

                function S(e) {
                    var n, r, i, a;
                    if ("[" == ct) {
                        for (o();
                            "\n" == ct;) o();
                        if ("]" != ct) {
                            var s = j(e);
                            if (";" == ct) {
                                for (i = 1, r = [s];
                                    ";" == ct;) {
                                    for (o();
                                        "\n" == ct;) o();
                                    for (r[i] = j(e), i++;
                                        "\n" == ct;) o()
                                }
                                if ("]" != ct) throw L("End of matrix ] expected");
                                o(), a = r.length > 0 ? r[0].length : 0;
                                for (var u = 1; i > u; u++)
                                    if (r[u].length != a) throw _("Number of columns must match (" + r[u].length + " != " + a + ")");
                                n = new $(t, r)
                            } else {
                                if ("]" != ct) throw L("End of matrix ] expected");
                                o(), n = s
                            }
                        } else o(), n = new $(t, []);
                        return n = A(e, n)
                    }
                    return T(e)
                }

                function j(e) {
                    for (var n = [m(e)], r = 1;
                        "," == ct;) {
                        for (o();
                            "\n" == ct;) o();
                        for (n[r] = m(e), r++;
                            "\n" == ct;) o()
                    }
                    return new $(t, n)
                }

                function T(e) {
                    var t, n, r;
                    if (ft == it.NUMBER) {
                        if (r = "." == ct ? 0 : Number(ct), o(), ft == it.SYMBOL) {
                            if ("i" == ct || "I" == ct) return n = new F(0, r), o(), new K(n);
                            if (V.isPlainUnit(ct)) return n = new V(r, ct), o(), new K(n);
                            throw B('Unknown unit "' + ct + '"')
                        }
                        return t = new K(r), t = A(e, t)
                    }
                    return U(e)
                }

                function U(e) {
                    var t;
                    if ("(" == ct) {
                        if (o(), t = m(e), ")" != ct) throw L("Parenthesis ) expected");
                        return o(), t = A(e, t)
                    }
                    return q(e)
                }

                function q() {
                    throw "" == ct ? L("Unexpected end of expression") : L("Value expected")
                }

                function z() {
                    return void 0
                }

                function R() {
                    return ut - ct.length + 1
                }

                function I(e) {
                    var t = z(),
                        n = R();
                    return void 0 === t ? void 0 === n ? e : e + " (char " + n + ")" : e + " (line " + t + ", char " + n + ")"
                }

                function L(e) {
                    return new SyntaxError(I(e))
                }

                function B(e) {
                    return new TypeError(I(e))
                }

                function _(e) {
                    return new Error(I(e))
                }
                var P = e("../../util/index"),
                    k = P.string.isString,
                    G = Array.isArray,
                    F = e("./../../type/Complex"),
                    H = e("./../../type/Matrix"),
                    V = e("./../../type/Unit"),
                    D = e("../../type/collection"),
                    Y = e("./../../expression/Scope"),
                    W = e("../../expression/node/AssignmentNode"),
                    Q = e("../../expression/node/BlockNode"),
                    K = e("../../expression/node/ConstantNode"),
                    Z = e("../../expression/node/FunctionNode"),
                    $ = e("../../expression/node/ArrayNode"),
                    J = e("../../expression/node/OperatorNode"),
                    X = e("../../expression/node/ParamsNode"),
                    et = e("../../expression/node/RangeNode"),
                    tt = e("../../expression/node/SymbolNode"),
                    nt = e("../../expression/node/UpdateNode"),
                    rt = e("../../expression/node/handlers");
                t.parse = function (e, n) {
                    if (1 != arguments.length && 2 != arguments.length) throw new P.error.ArgumentsError("parse", arguments.length, 1, 2);
                    var r;
                    if (r = n ? n instanceof Y ? n : new Y(t, n) : new Y(t), k(e)) return st = e || "", l(r);
                    if (G(e) || e instanceof H) return D.deepMap(e, function (e) {
                        return st = e || "", l(r)
                    });
                    throw new TypeError("String or matrix expected")
                };
                var it = {
                        NULL: 0,
                        DELIMITER: 1,
                        NUMBER: 2,
                        SYMBOL: 3,
                        UNKNOWN: 4
                    },
                    ot = {
                        ",": !0,
                        "(": !0,
                        ")": !0,
                        "[": !0,
                        "]": !0,
                        '"': !0,
                        "\n": !0,
                        ";": !0,
                        "+": !0,
                        "-": !0,
                        "*": !0,
                        ".*": !0,
                        "/": !0,
                        "./": !0,
                        "%": !0,
                        "^": !0,
                        ".^": !0,
                        "!": !0,
                        "'": !0,
                        "=": !0,
                        ":": !0,
                        "==": !0,
                        "!=": !0,
                        "<": !0,
                        ">": !0,
                        "<=": !0,
                        ">=": !0
                    },
                    at = {
                        mod: !0
                    },
                    st = "",
                    ut = 0,
                    lt = "",
                    ct = "",
                    ft = it.NULL
            }
        }, {
            "../../expression/node/ArrayNode": 102,
            "../../expression/node/AssignmentNode": 103,
            "../../expression/node/BlockNode": 104,
            "../../expression/node/ConstantNode": 105,
            "../../expression/node/FunctionNode": 106,
            "../../expression/node/OperatorNode": 108,
            "../../expression/node/ParamsNode": 109,
            "../../expression/node/RangeNode": 110,
            "../../expression/node/SymbolNode": 111,
            "../../expression/node/UpdateNode": 112,
            "../../expression/node/handlers": 113,
            "../../type/collection": 203,
            "../../util/index": 207,
            "./../../expression/Scope": 5,
            "./../../type/Complex": 197,
            "./../../type/Matrix": 200,
            "./../../type/Unit": 202
        }],
        161: [function (e, t) {
            t.exports = function (t) {
                function n(e, t, r, i) {
                    if (r > i) {
                        if (e.length != t.length) throw new Error("Dimensions mismatch (" + e.length + " != " + t.length + ")");
                        for (var o = [], a = 0; a < e.length; a++) o[a] = n(e[a], t[a], r, i + 1);
                        return o
                    }
                    return e.concat(t)
                }
                var r = e("../../util/index"),
                    i = e("../../type/Matrix"),
                    o = e("../../type/collection"),
                    a = r.object,
                    s = r.array,
                    u = r.number.isNumber,
                    l = r.number.isInteger,
                    c = o.isCollection;
                t.concat = function () {
                    var e, t, o = arguments.length,
                        f = -1,
                        p = !1,
                        m = [];
                    for (e = 0; o > e; e++) {
                        var h = arguments[e];
                        if (h instanceof i && (p = !0), e == o - 1 && u(h)) {
                            if (t = f, f = h, !l(f) || 0 > f) throw new TypeError("Dimension number must be a positive integer (dim = " + f + ")");
                            if (e > 0 && f > t) throw new RangeError("Dimension out of range (" + f + " > " + t + ")")
                        } else {
                            if (!c(h)) throw new r.error.UnsupportedTypeError("concat", h);
                            var x = a.clone(h).valueOf(),
                                d = s.size(h.valueOf());
                            if (m[e] = x, t = f, f = d.length - 1, e > 0 && f != t) throw new RangeError("Dimension mismatch (" + t + " != " + f + ")")
                        }
                    }
                    if (0 == m.length) throw new SyntaxError("At least one matrix expected");
                    for (var g = m.shift(); m.length;) g = n(g, m.shift(), f, 0);
                    return p ? new i(g) : g
                }
            }
        }, {
            "../../type/Matrix": 200,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        162: [function (e, t) {
            t.exports = function (t) {
                function n(e, n, r) {
                    if (1 == n) return e[0][0];
                    if (2 == n) return t.subtract(t.multiply(e[0][0], e[1][1]), t.multiply(e[1][0], e[0][1]));
                    for (var o = 1, a = 0, s = 0; n > s && !(a >= r); s++) {
                        for (var u = s; 0 == e[u][a];)
                            if (u++, u == n && (u = s, a++, a == r)) return i.deepEqual(e, eye(n).valueOf()) ? t.round(o, 6) : 0;
                        if (u != s) {
                            for (var l = 0; r > l; l++) {
                                var c = e[u][l];
                                e[u][l] = e[s][l], e[s][l] = c
                            }
                            o *= -1
                        }
                        for (var f = e[s][a], l = 0; r > l; l++) e[s][l] = e[s][l] / f;
                        o *= f;
                        for (var p = 0; n > p; p++)
                            if (p != s)
                                for (var m = e[p][a], l = 0; r > l; l++) e[p][l] = e[p][l] - e[s][l] * m;
                        a++
                    }
                    return i.deepEqual(e, t.eye(n).valueOf()) ? t.round(o, 6) : 0
                }
                var r = e("../../util/index"),
                    i = (e("../../type/Matrix"), r.object),
                    o = r.array,
                    a = r.string;
                t.det = function (e) {
                    if (1 != arguments.length) throw new r.error.ArgumentsError("det", arguments.length, 1);
                    var t = o.size(e.valueOf());
                    switch (t.length) {
                        case 0:
                            return i.clone(e);
                        case 1:
                            if (1 == t[0]) return i.clone(e.valueOf()[0]);
                            throw new RangeError("Matrix must be square (size: " + a.format(t) + ")");
                        case 2:
                            var s = t[0],
                                u = t[1];
                            if (s == u) return n(e.valueOf(), s, u);
                            throw new RangeError("Matrix must be square (size: " + a.format(t) + ")");
                        default:
                            throw new RangeError("Matrix must be two dimensional (size: " + a.format(t) + ")")
                    }
                }
            }
        }, {
            "../../type/Matrix": 200,
            "../../util/index": 207
        }],
        163: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Matrix"),
                    i = (e("../../type/collection"), n.object),
                    o = n.number.isNumber,
                    a = n.number.isInteger;
                t.diag = function (e, s) {
                    var u, l, c, f;
                    if (1 != arguments.length && 2 != arguments.length) throw new n.error.ArgumentsError("diag", arguments.length, 1, 2);
                    if (s) {
                        if (!o(s) || !a(s)) throw new TypeError("Second parameter in function diag must be an integer")
                    } else s = 0;
                    var p = s > 0 ? s : 0,
                        m = 0 > s ? -s : 0;
                    e instanceof r || (e = new r(e));
                    var h;
                    switch (e.isVector() ? (e = e.toVector(), h = [e.length]) : h = e.size(), h.length) {
                        case 1:
                            l = e.valueOf();
                            var x = new r;
                            for (x.resize([l.length + m, l.length + p]), u = x.valueOf(), f = l.length, c = 0; f > c; c++) u[c + m][c + p] = i.clone(l[c]);
                            return "array" === t.options.matrix.defaultType ? x.valueOf() : x;
                        case 2:
                            for (l = [], u = e.valueOf(), f = Math.min(h[0] - m, h[1] - p), c = 0; f > c; c++) l[c] = i.clone(u[c + m][c + p]);
                            return "array" === t.options.matrix.defaultType ? l : new r(l);
                        default:
                            throw new RangeError("Matrix for function diag must be 2 dimensional")
                    }
                }
            }
        }, {
            "../../type/Matrix": 200,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        164: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Matrix"),
                    i = e("../../type/collection"),
                    o = n.number.isNumber,
                    a = n.number.isInteger,
                    s = Array.isArray;
                t.eye = function (e) {
                    var u = i.argsToArray(arguments);
                    if (0 == u.length) u = [1, 1];
                    else if (1 == u.length) u[1] = u[0];
                    else if (u.length > 2) throw new n.error.ArgumentsError("eye", u.length, 0, 2);
                    var l = u[0],
                        c = u[1];
                    if (!o(l) || !a(l) || 1 > l) throw new Error("Parameters in function eye must be positive integers");
                    if (c && (!o(c) || !a(c) || 1 > c)) throw new Error("Parameters in function eye must be positive integers");
                    var f = new r;
                    f.resize(u);
                    for (var p = t.min(u), m = f.valueOf(), h = 0; p > h; h++) m[h][h] = 1;
                    var x = e instanceof r ? !0 : s(e) ? !1 : "matrix" === t.options.matrix.defaultType;
                    return x ? f : f.valueOf()
                }
            }
        }, {
            "../../type/Matrix": 200,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        165: [function (e, t) {
            t.exports = function (t) {
                function n(e, n, r) {
                    var i, o, a, s, u;
                    if (1 == n) {
                        if (s = e[0][0], 0 == s) throw Error("Cannot calculate inverse, determinant is zero");
                        return [
                            [t.divide(1, s)]
                        ]
                    }
                    if (2 == n) {
                        var l = t.det(e);
                        if (0 == l) throw Error("Cannot calculate inverse, determinant is zero");
                        return [
                            [t.divide(e[1][1], l), t.divide(t.unary(e[0][1]), l)],
                            [t.divide(t.unary(e[1][0]), l), t.divide(e[0][0], l)]
                        ]
                    }
                    var c = e.concat();
                    for (i = 0; n > i; i++) c[i] = c[i].concat();
                    for (var f = t.eye(n).valueOf(), p = 0; r > p; p++) {
                        for (i = p; n > i && 0 == c[i][p];) i++;
                        if (i == n || 0 == c[i][p]) throw Error("Cannot calculate inverse, determinant is zero");
                        i != p && (u = c[p], c[p] = c[i], c[i] = u, u = f[p], f[p] = f[i], f[i] = u);
                        var m = c[p],
                            h = f[p];
                        for (i = 0; n > i; i++) {
                            var x = c[i],
                                d = f[i];
                            if (i != p) {
                                if (0 != x[p]) {
                                    for (a = t.divide(t.unary(x[p]), m[p]), o = p; r > o; o++) x[o] = t.add(x[o], t.multiply(a, m[o]));
                                    for (o = 0; r > o; o++) d[o] = t.add(d[o], t.multiply(a, h[o]))
                                }
                            } else {
                                for (a = m[p], o = p; r > o; o++) x[o] = t.divide(x[o], a);
                                for (o = 0; r > o; o++) d[o] = t.divide(d[o], a)
                            }
                        }
                    }
                    return f
                }
                var r = e("../../util/index"),
                    i = e("../../type/Matrix"),
                    o = (e("../../type/collection"), r.string);
                t.inv = function (e) {
                    if (1 != arguments.length) throw new r.error.ArgumentsError("inv", arguments.length, 1);
                    var a = t.size(e).valueOf();
                    switch (a.length) {
                        case 0:
                            return t.divide(1, e);
                        case 1:
                            if (1 == a[0]) return e instanceof i ? new i([t.divide(1, e.valueOf()[0])]) : [t.divide(1, e[0])];
                            throw new RangeError("Matrix must be square (size: " + o.format(a) + ")");
                        case 2:
                            var s = a[0],
                                u = a[1];
                            if (s == u) return e instanceof i ? new i(n(e.valueOf(), s, u)) : n(e, s, u);
                            throw new RangeError("Matrix must be square (size: " + o.format(a) + ")");
                        default:
                            throw new RangeError("Matrix must be two dimensional (size: " + o.format(a) + ")")
                    }
                }
            }
        }, {
            "../../type/Matrix": 200,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        166: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Matrix"),
                    i = e("../../type/collection"),
                    o = n.array,
                    a = Array.isArray;
                t.ones = function (e) {
                    var n = i.argsToArray(arguments),
                        s = e instanceof r ? !0 : a(e) ? !1 : "matrix" === t.options.matrix.defaultType;
                    if (0 == n.length) return 1;
                    var u = [],
                        l = 1;
                    return o.resize(u, n, l), s ? new r(u) : u
                }
            }
        }, {
            "../../type/Matrix": 200,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        167: [function (e, t) {
            t.exports = function (t) {
                function n(e) {
                    var t = e.split(":"),
                        n = t.map(function (e) {
                            return Number(e)
                        }),
                        r = n.some(function (e) {
                            return isNaN(e)
                        });
                    if (r) return null;
                    switch (n.length) {
                        case 2:
                            return {
                                start: n[0], end: n[1], step: 1
                            };
                        case 3:
                            return {
                                start: n[0], end: n[2], step: n[1]
                            };
                        default:
                            return null
                    }
                }
                var r = e("../../util/index"),
                    i = e("../../type/Matrix"),
                    o = (e("../../type/collection"), r.string.isString),
                    a = r.number.isNumber;
                t.range = function (e) {
                    var s, u, l;
                    switch (arguments.length) {
                        case 1:
                            if (!o(e)) throw new TypeError("Two or three numbers or a single string expected in function range");
                            var c = n(e);
                            if (!c) throw new SyntaxError('String "' + c + '" is no valid range');
                            s = c.start, u = c.end, l = c.step;
                            break;
                        case 2:
                            s = arguments[0], u = arguments[1], l = 1;
                            break;
                        case 3:
                            s = arguments[0], u = arguments[1], l = arguments[2];
                            break;
                        default:
                            throw new r.error.ArgumentsError("range", arguments.length, 2, 3)
                    }
                    if (!a(s)) throw new TypeError("Parameter start must be a number");
                    if (!a(u)) throw new TypeError("Parameter end must be a number");
                    if (!a(l)) throw new TypeError("Parameter step must be a number");
                    var f = [],
                        p = s;
                    if (l > 0)
                        for (; u > p;) f.push(p), p += l;
                    else if (0 > l)
                        for (; p > u;) f.push(p), p += l;
                    return "array" === t.options.matrix.defaultType ? f : new i(f)
                }
            }
        }, {
            "../../type/Matrix": 200,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        168: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Complex"),
                    i = e("../../type/Unit"),
                    o = e("../../type/Matrix"),
                    a = n.array,
                    s = n.number.isNumber,
                    u = n.boolean.isBoolean,
                    l = n.string.isString,
                    c = r.isComplex,
                    f = i.isUnit;
                t.size = function p(e) {
                    if (1 != arguments.length) throw new n.error.ArgumentsError("size", arguments.length, 1);
                    if (s(e) || c(e) || f(e) || u(e) || null == e) return [];
                    if (l(e)) return [e.length];
                    if (Array.isArray(e)) return a.size(e);
                    if (e instanceof o) return new o(e.size());
                    if (e.valueOf() !== e) return p(e.valueOf());
                    throw new n.error.UnsupportedTypeError("size", e)
                }
            }
        }, {
            "../../type/Complex": 197,
            "../../type/Matrix": 200,
            "../../type/Unit": 202,
            "../../util/index": 207
        }],
        169: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Matrix"),
                    i = n.object,
                    o = n.array,
                    a = Array.isArray;
                t.squeeze = function (e) {
                    if (1 != arguments.length) throw new n.error.ArgumentsError("squeeze", arguments.length, 1);
                    return a(e) ? o.squeeze(i.clone(e)) : e instanceof r ? new r(o.squeeze(e.toArray())) : i.clone(e)
                }
            }
        }, {
            "../../type/Matrix": 200,
            "../../util/index": 207
        }],
        170: [function (e, t) {
            t.exports = function (t) {
                function n(e, t) {
                    var n, i;
                    if (f(e)) return n = new s(e), i = n.subset(t), i.valueOf();
                    if (e instanceof s) return e.subset(t);
                    if (c(e)) return r(e, t);
                    throw new a.error.UnsupportedTypeError("subset", e)
                }

                function r(e, t) {
                    if (!(t instanceof u)) throw new TypeError("Index expected");
                    if (1 != t.size().length) throw new RangeError("Dimension mismatch (" + t.size().length + " != 1)");
                    var n = t.range(0),
                        r = "",
                        i = e.length;
                    return n.forEach(function (t) {
                        l.validateIndex(t, i), r += e.charAt(t)
                    }), r
                }

                function i(e, n, r) {
                    var i;
                    if (f(e)) return i = new s(t.clone(e)), i.subset(n, r), i.valueOf();
                    if (e instanceof s) return e.clone().subset(n, r);
                    if (c(e)) return o(e, n, r);
                    throw new a.error.UnsupportedTypeError("subset", e)
                }

                function o(e, t, n) {
                    if (!(t instanceof u)) throw new TypeError("Index expected");
                    if (1 != t.size().length) throw new RangeError("Dimension mismatch (" + t.size().length + " != 1)");
                    var r = t.range(0),
                        i = r.size()[0];
                    if (i != n.length) throw new RangeError("Dimension mismatch (" + r.size()[0] + " != " + n.length + ")");
                    for (var o = e.length, a = [], s = 0; o > s; s++) a[s] = e.charAt(s);
                    if (r.forEach(function (e, t) {
                            l.validateIndex(e), a[e] = n.charAt(t)
                        }), a.length > o)
                        for (s = o - 1, i = a.length; i > s; s++) a[s] || (a[s] = " ");
                    return a.join("")
                }
                var a = e("../../util/index"),
                    s = e("../../type/Matrix"),
                    u = e("../../type/Index"),
                    l = a.array,
                    c = a.string.isString,
                    f = Array.isArray;
                t.subset = function () {
                    switch (arguments.length) {
                        case 2:
                            return n(arguments[0], arguments[1]);
                        case 3:
                            return i(arguments[0], arguments[1], arguments[2]);
                        default:
                            throw new a.error.ArgumentsError("subset", arguments.length, 2, 3)
                    }
                }
            }
        }, {
            "../../type/Index": 199,
            "../../type/Matrix": 200,
            "../../util/index": 207
        }],
        171: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Matrix"),
                    i = (e("../../type/collection"), n.object),
                    o = n.string;
                t.transpose = function (e) {
                    if (1 != arguments.length) throw new n.error.ArgumentsError("transpose", arguments.length, 1);
                    var a = t.size(e).valueOf();
                    switch (a.length) {
                        case 0:
                            return i.clone(e);
                        case 1:
                            return i.clone(e);
                        case 2:
                            var s, u = a[1],
                                l = a[0],
                                c = e instanceof r,
                                f = e.valueOf(),
                                p = [],
                                m = i.clone;
                            if (0 === u) throw new RangeError("Cannot transpose a 2D matrix with no rows(size: " + o.format(a) + ")");
                            for (var h = 0; u > h; h++) {
                                s = p[h] = [];
                                for (var x = 0; l > x; x++) s[x] = m(f[x][h])
                            }
                            return 0 == l && (p[0] = []), c ? new r(p) : p;
                        default:
                            throw new RangeError("Matrix must be two dimensional (size: " + o.format(a) + ")")
                    }
                }
            }
        }, {
            "../../type/Matrix": 200,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        172: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Matrix"),
                    i = e("../../type/collection"),
                    o = n.array,
                    a = Array.isArray;
                t.zeros = function (e) {
                    var n = i.argsToArray(arguments),
                        s = e instanceof r ? !0 : a(e) ? !1 : "matrix" === t.options.matrix.defaultType;
                    if (0 == n.length) return 0;
                    var u = [],
                        l = 0;
                    return o.resize(u, n, l), s ? new r(u) : u
                }
            }
        }, {
            "../../type/Matrix": 200,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        173: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/collection"),
                    i = n.number.isNumber,
                    o = n.boolean.isBoolean,
                    a = n.number.isInteger,
                    s = r.isCollection;
                t.factorial = function u(e) {
                    if (1 != arguments.length) throw new n.error.ArgumentsError("factorial", arguments.length, 1);
                    if (i(e)) {
                        if (!a(e) || 0 > e) throw new TypeError("Positive integer value expected in function factorial");
                        var t = e,
                            l = t;
                        for (t--; t > 1;) l *= t, t--;
                        return 0 == l && (l = 1), l
                    }
                    if (o(e)) return 1;
                    if (s(e)) return r.deepMap(e, u);
                    if (e.valueOf() !== e) return u(e.valueOf());
                    throw new n.error.UnsupportedTypeError("factorial", e)
                }
            }
        }, {
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        174: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Matrix");
                e("../../type/collection");
                var i = {
                    uniform: function () {
                        return Math.random
                    },
                    normal: function () {
                        return function () {
                            for (var e, t, n = -1; 0 > n || n > 1;) e = Math.random(), t = Math.random(), n = 1 / 6 * Math.pow(-2 * Math.log(e), .5) * Math.cos(2 * Math.PI * t) + .5;
                            return n
                        }
                    }
                };
                t.distribution = function (e) {
                    if (!i.hasOwnProperty(e)) throw new Error("unknown distribution " + e);
                    var o = Array.prototype.slice.call(arguments, 1),
                        a = i[e].apply(this, o);
                    return function (e) {
                        var i = {
                                random: function (e, i, a) {
                                    var u, l, c;
                                    if (arguments.length > 3) throw new n.error.ArgumentsError("random", arguments.length, 0, 3);
                                    if (1 === arguments.length ? Array.isArray(e) ? u = e : c = e : 2 === arguments.length ? Array.isArray(e) ? u = e : (l = e, c = i) : (u = e, l = i, c = a), void 0 === c && (c = 1), void 0 === l && (l = 0), void 0 !== u) {
                                        var f = s(u, l, c, o);
                                        return "array" === t.options.matrix.defaultType ? f : new r(f)
                                    }
                                    return o(l, c)
                                },
                                randomInt: function (e, i, o) {
                                    var u, l, c;
                                    if (arguments.length > 3 || arguments.length < 1) throw new n.error.ArgumentsError("randomInt", arguments.length, 1, 3);
                                    if (1 === arguments.length ? c = e : 2 === arguments.length ? "[object Array]" === Object.prototype.toString.call(e) ? u = e : (l = e, c = i) : (u = e, l = i, c = o), void 0 === l && (l = 0), void 0 !== u) {
                                        var f = s(u, l, c, a);
                                        return "array" === t.options.matrix.defaultType ? f : new r(f)
                                    }
                                    return a(l, c)
                                },
                                pickRandom: function (e) {
                                    if (1 !== arguments.length) throw new n.error.ArgumentsError("pickRandom", arguments.length, 1);
                                    if (!Array.isArray(e)) throw new n.error.UnsupportedTypeError("pickRandom", e);
                                    return e[Math.floor(Math.random() * e.length)]
                                }
                            },
                            o = function (t, n) {
                                return t + e() * (n - t)
                            },
                            a = function (t, n) {
                                return Math.floor(t + e() * (n - t))
                            },
                            s = function (e, t, n, r) {
                                var i, o, a = [];
                                if (e = e.slice(0), e.length > 1)
                                    for (o = 0, i = e.shift(); i > o; o++) a.push(s(e, t, n, r));
                                else
                                    for (o = 0, i = e.shift(); i > o; o++) a.push(r(t, n));
                                return a
                            };
                        return i
                    }(a)
                };
                var o = t.distribution("uniform");
                t.random = o.random, t.randomInt = o.randomInt, t.pickRandom = o.pickRandom
            }
        }, {
            "../../type/Matrix": 200,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        175: [function (e, t) {
            t.exports = function (t) {
                function n(e, n) {
                    return t.larger(e, n) ? e : n
                }

                function r(e) {
                    var n = null;
                    if (i.deepForEach(e, function (e) {
                            (null === n || t.larger(e, n)) && (n = e)
                        }), null === n) throw new Error("Cannot calculate max of an empty array");
                    return n
                }
                var i = (e("../../type/Matrix"), e("../../type/collection")),
                    o = i.isCollection;
                t.max = function (e) {
                    if (0 == arguments.length) throw new SyntaxError("Function max requires one or more parameters (0 provided)");
                    if (o(e)) {
                        if (1 == arguments.length) return r(e);
                        if (2 == arguments.length) return i.reduce(arguments[0], arguments[1], n);
                        throw new SyntaxError("Wrong number of parameters")
                    }
                    return r(arguments)
                }
            }
        }, {
            "../../type/Matrix": 200,
            "../../type/collection": 203
        }],
        176: [function (e, t) {
            t.exports = function (t) {
                function n(e, n) {
                    var r;
                    return r = i.reduce(e, n, t.add), t.divide(r, size(e)[n])
                }

                function r(e) {
                    var n = 0,
                        r = 0;
                    if (i.deepForEach(e, function (e) {
                            n = t.add(n, e), r++
                        }), 0 === r) throw new Error("Cannot calculate mean of an empty array");
                    return t.divide(n, r)
                }
                var i = (e("../../type/Matrix"), e("../../type/collection")),
                    o = i.isCollection;
                t.mean = function (e) {
                    if (0 == arguments.length) throw new SyntaxError("Function mean requires one or more parameters (0 provided)");
                    if (o(e)) {
                        if (1 == arguments.length) return r(e);
                        if (2 == arguments.length) return n(arguments[0], arguments[1]);
                        throw new SyntaxError("Wrong number of parameters")
                    }
                    return r(arguments)
                }
            }
        }, {
            "../../type/Matrix": 200,
            "../../type/collection": 203
        }],
        177: [function (e, t) {
            t.exports = function (t) {
                function n(e, n) {
                    return t.smaller(e, n) ? e : n
                }

                function r(e) {
                    var n = null;
                    if (i.deepForEach(e, function (e) {
                            (null === n || t.smaller(e, n)) && (n = e)
                        }), null === n) throw new Error("Cannot calculate min of an empty array");
                    return n
                }
                var i = (e("../../type/Matrix"), e("../../type/collection")),
                    o = i.isCollection;
                t.min = function (e) {
                    if (0 == arguments.length) throw new SyntaxError("Function min requires one or more parameters (0 provided)");
                    if (o(e)) {
                        if (1 == arguments.length) return r(e);
                        if (2 == arguments.length) return i.reduce(arguments[0], arguments[1], n);
                        throw new SyntaxError("Wrong number of parameters")
                    }
                    return r(arguments)
                }
            }
        }, {
            "../../type/Matrix": 200,
            "../../type/collection": 203
        }],
        178: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Complex"),
                    i = e("../../type/collection"),
                    o = n.number.isNumBool,
                    a = r.isComplex,
                    s = i.isCollection;
                t.acos = function u(e) {
                    if (1 != arguments.length) throw new n.error.ArgumentsError("acos", arguments.length, 1);
                    if (o(e)) return e >= -1 && 1 >= e ? Math.acos(e) : u(new r(e, 0));
                    if (a(e)) {
                        var l, c = new r(e.im * e.im - e.re * e.re + 1, -2 * e.re * e.im),
                            f = t.sqrt(c);
                        l = f instanceof r ? new r(f.re - e.im, f.im + e.re) : new r(f - e.im, e.re);
                        var p = t.log(l);
                        return p instanceof r ? new r(1.5707963267948966 - p.im, p.re) : new r(1.5707963267948966, p)
                    }
                    if (s(e)) return i.deepMap(e, u);
                    if (e.valueOf() !== e) return u(e.valueOf());
                    throw new n.error.UnsupportedTypeError("acos", e)
                }
            }
        }, {
            "../../type/Complex": 197,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        179: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Complex"),
                    i = e("../../type/collection"),
                    o = n.number.isNumBool,
                    a = r.isComplex,
                    s = i.isCollection;
                t.asin = function u(e) {
                    if (1 != arguments.length) throw new n.error.ArgumentsError("asin", arguments.length, 1);
                    if (o(e)) return e >= -1 && 1 >= e ? Math.asin(e) : u(new r(e, 0));
                    if (a(e)) {
                        var l, c = e.re,
                            f = e.im,
                            p = new r(f * f - c * c + 1, -2 * c * f),
                            m = t.sqrt(p);
                        l = m instanceof r ? new r(m.re - f, m.im + c) : new r(m - f, c);
                        var h = t.log(l);
                        return h instanceof r ? new r(h.im, -h.re) : new r(0, -h)
                    }
                    if (s(e)) return i.deepMap(e, u);
                    if (e.valueOf() !== e) return u(e.valueOf());
                    throw new n.error.UnsupportedTypeError("asin", e)
                }
            }
        }, {
            "../../type/Complex": 197,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        180: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Complex"),
                    i = e("../../type/collection"),
                    o = n.number.isNumBool,
                    a = r.isComplex,
                    s = i.isCollection;
                t.atan = function u(e) {
                    if (1 != arguments.length) throw new n.error.ArgumentsError("atan", arguments.length, 1);
                    if (o(e)) return Math.atan(e);
                    if (a(e)) {
                        var l = e.re,
                            c = e.im,
                            f = l * l + (1 - c) * (1 - c),
                            p = new r((1 - c * c - l * l) / f, -2 * l / f),
                            m = t.log(p);
                        return m instanceof r ? new r(-.5 * m.im, .5 * m.re) : new r(0, .5 * m)
                    }
                    if (s(e)) return i.deepMap(e, u);
                    if (e.valueOf() !== e) return u(e.valueOf());
                    throw new n.error.UnsupportedTypeError("atan", e)
                }
            }
        }, {
            "../../type/Complex": 197,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        181: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Complex"),
                    i = e("../../type/collection"),
                    o = n.number.isNumBool,
                    a = r.isComplex,
                    s = i.isCollection;
                t.atan2 = function u(e, t) {
                    if (2 != arguments.length) throw new n.error.ArgumentsError("atan2", arguments.length, 2);
                    if (o(e)) {
                        if (o(t)) return Math.atan2(e, t)
                    } else if (a(e) && o(t)) return Math.atan2(e.re, t);
                    if (s(e) || s(t)) return i.deepMap2(e, t, u);
                    if (t.valueOf() !== t || e.valueOf() !== e) return u(e.valueOf(), t.valueOf());
                    throw new n.error.UnsupportedTypeError("atan2", e, t)
                }
            }
        }, {
            "../../type/Complex": 197,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        182: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Complex"),
                    i = e("../../type/Unit"),
                    o = e("../../type/collection"),
                    a = n.number.isNumBool,
                    s = r.isComplex,
                    u = i.isUnit,
                    l = o.isCollection;
                t.cos = function c(e) {
                    if (1 != arguments.length) throw new n.error.ArgumentsError("cos", arguments.length, 1);
                    if (a(e)) return Math.cos(e);
                    if (s(e)) return new r(.5 * Math.cos(e.re) * (Math.exp(-e.im) + Math.exp(e.im)), .5 * Math.sin(e.re) * (Math.exp(-e.im) - Math.exp(e.im)));
                    if (u(e)) {
                        if (!e.hasBase(i.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function cos is no angle");
                        return Math.cos(e.value)
                    }
                    if (l(e)) return o.deepMap(e, c);
                    if (e.valueOf() !== e) return c(e.valueOf());
                    throw new n.error.UnsupportedTypeError("cos", e)
                }
            }
        }, {
            "../../type/Complex": 197,
            "../../type/Unit": 202,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        183: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Complex"),
                    i = e("../../type/Unit"),
                    o = e("../../type/collection"),
                    a = n.number.isNumBool,
                    s = r.isComplex,
                    u = i.isUnit,
                    l = o.isCollection;
                t.cot = function c(e) {
                    if (1 != arguments.length) throw new n.error.ArgumentsError("cot", arguments.length, 1);
                    if (a(e)) return 1 / Math.tan(e);
                    if (s(e)) {
                        var t = Math.exp(-4 * e.im) - 2 * Math.exp(-2 * e.im) * Math.cos(2 * e.re) + 1;
                        return new r(2 * Math.exp(-2 * e.im) * Math.sin(2 * e.re) / t, (Math.exp(-4 * e.im) - 1) / t)
                    }
                    if (u(e)) {
                        if (!e.hasBase(i.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function cot is no angle");
                        return 1 / Math.tan(e.value)
                    }
                    if (l(e)) return o.deepMap(e, c);
                    if (e.valueOf() !== e) return c(e.valueOf());
                    throw new n.error.UnsupportedTypeError("cot", e)
                }
            }
        }, {
            "../../type/Complex": 197,
            "../../type/Unit": 202,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        184: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Complex"),
                    i = e("../../type/Unit"),
                    o = e("../../type/collection"),
                    a = n.number.isNumBool,
                    s = r.isComplex,
                    u = i.isUnit,
                    l = o.isCollection;
                t.csc = function c(e) {
                    if (1 != arguments.length) throw new n.error.ArgumentsError("csc", arguments.length, 1);
                    if (a(e)) return 1 / Math.sin(e);
                    if (s(e)) {
                        var t = .25 * (Math.exp(-2 * e.im) + Math.exp(2 * e.im)) - .5 * Math.cos(2 * e.re);
                        return new r(.5 * Math.sin(e.re) * (Math.exp(-e.im) + Math.exp(e.im)) / t, .5 * Math.cos(e.re) * (Math.exp(-e.im) - Math.exp(e.im)) / t)
                    }
                    if (u(e)) {
                        if (!e.hasBase(i.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function csc is no angle");
                        return 1 / Math.sin(e.value)
                    }
                    if (l(e)) return o.deepMap(e, c);
                    if (e.valueOf() !== e) return c(e.valueOf());
                    throw new n.error.UnsupportedTypeError("csc", e)
                }
            }
        }, {
            "../../type/Complex": 197,
            "../../type/Unit": 202,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        185: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Complex"),
                    i = e("../../type/Unit"),
                    o = e("../../type/collection"),
                    a = n.number.isNumBool,
                    s = r.isComplex,
                    u = i.isUnit,
                    l = o.isCollection;
                t.sec = function c(e) {
                    if (1 != arguments.length) throw new n.error.ArgumentsError("sec", arguments.length, 1);
                    if (a(e)) return 1 / Math.cos(e);
                    if (s(e)) {
                        var t = .25 * (Math.exp(-2 * e.im) + Math.exp(2 * e.im)) + .5 * Math.cos(2 * e.re);
                        return new r(.5 * Math.cos(e.re) * (Math.exp(-e.im) + Math.exp(e.im)) / t, .5 * Math.sin(e.re) * (Math.exp(e.im) - Math.exp(-e.im)) / t)
                    }
                    if (u(e)) {
                        if (!e.hasBase(i.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function sec is no angle");
                        return 1 / Math.cos(e.value)
                    }
                    if (l(e)) return o.deepMap(e, c);
                    if (e.valueOf() !== e) return c(e.valueOf());
                    throw new n.error.UnsupportedTypeError("sec", e)
                }
            }
        }, {
            "../../type/Complex": 197,
            "../../type/Unit": 202,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        186: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Complex"),
                    i = e("../../type/Unit"),
                    o = e("../../type/collection"),
                    a = n.number.isNumBool,
                    s = r.isComplex,
                    u = i.isUnit,
                    l = o.isCollection;
                t.sin = function c(e) {
                    if (1 != arguments.length) throw new n.error.ArgumentsError("sin", arguments.length, 1);
                    if (a(e)) return Math.sin(e);
                    if (s(e)) return new r(.5 * Math.sin(e.re) * (Math.exp(-e.im) + Math.exp(e.im)), .5 * Math.cos(e.re) * (Math.exp(e.im) - Math.exp(-e.im)));
                    if (u(e)) {
                        if (!e.hasBase(i.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function sin is no angle");
                        return Math.sin(e.value)
                    }
                    if (l(e)) return o.deepMap(e, c);
                    if (e.valueOf() !== e) return c(e.valueOf());
                    throw new n.error.UnsupportedTypeError("sin", e)
                }
            }
        }, {
            "../../type/Complex": 197,
            "../../type/Unit": 202,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        187: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Complex"),
                    i = e("../../type/Unit"),
                    o = e("../../type/collection"),
                    a = n.number.isNumBool,
                    s = r.isComplex,
                    u = i.isUnit,
                    l = o.isCollection;
                t.tan = function c(e) {
                    if (1 != arguments.length) throw new n.error.ArgumentsError("tan", arguments.length, 1);
                    if (a(e)) return Math.tan(e);
                    if (s(e)) {
                        var t = Math.exp(-4 * e.im) + 2 * Math.exp(-2 * e.im) * Math.cos(2 * e.re) + 1;
                        return new r(2 * Math.exp(-2 * e.im) * Math.sin(2 * e.re) / t, (1 - Math.exp(-4 * e.im)) / t)
                    }
                    if (u(e)) {
                        if (!e.hasBase(i.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function tan is no angle");
                        return Math.tan(e.value)
                    }
                    if (l(e)) return o.deepMap(e, c);
                    if (e.valueOf() !== e) return c(e.valueOf());
                    throw new n.error.UnsupportedTypeError("tan", e)
                }
            }
        }, {
            "../../type/Complex": 197,
            "../../type/Unit": 202,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        188: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = e("../../type/Unit"),
                    i = e("../../type/collection"),
                    o = n.string.isString,
                    a = r.isUnit,
                    s = i.isCollection;
                t["in"] = function u(e, t) {
                    if (2 != arguments.length) throw new n.error.ArgumentsError("in", arguments.length, 2);
                    if (a(e) && (a(t) || o(t))) return e["in"](t);
                    if (s(e) || s(t)) return i.deepMap2(e, t, u);
                    if (e.valueOf() !== e || t.valueOf() !== t) return u(e.valueOf(), t.valueOf());
                    throw new n.error.UnsupportedTypeError("in", e, t)
                }
            }
        }, {
            "../../type/Unit": 202,
            "../../type/collection": 203,
            "../../util/index": 207
        }],
        189: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = n.object;
                t.clone = function (e) {
                    if (1 != arguments.length) throw new n.error.ArgumentsError("clone", arguments.length, 1);
                    return r.clone(e)
                }
            }
        }, {
            "../../util/index": 207
        }],
        190: [function (e, t) {
            t.exports = function (t) {
                function n(e, t) {
                    var n = [],
                        r = function (i, o) {
                            Array.isArray(i) ? i.forEach(function (e, t) {
                                n[o] = t, r(e, o + 1)
                            }) : t(i, n, e)
                        };
                    r(e, 0)
                }
                var r = e("../../util/error"),
                    i = e("../../type/Matrix").isMatrix;
                t.forEach = function (e, t) {
                    if (2 != arguments.length) throw new r.ArgumentsError("forEach", arguments.length, 2);
                    if (Array.isArray(e)) return n(e, t);
                    if (i(e)) return e.forEach(t);
                    throw new r.UnsupportedTypeError("forEach", e)
                }
            }
        }, {
            "../../type/Matrix": 200,
            "../../util/error": 206
        }],
        191: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = n.string;
                t.format = function (e, t) {
                    var i = arguments.length;
                    if (1 !== i && 2 !== i) throw new n.error.ArgumentsError("format", i, 1, 2);
                    return r.format(e, t)
                }
            }
        }, {
            "../../util/index": 207
        }],
        192: [function (e, t) {
            t.exports = function (t) {
                function n(e, n, r) {
                    (r.override || void 0 === t[e]) && (t[e] = r.wrap && "function" == typeof n ? function () {
                        for (var e = [], r = 0, i = arguments.length; i > r; r++) e[r] = arguments[r].valueOf();
                        return n.apply(t, e)
                    } : n, t.chaining.Selector.createProxy(e, n))
                }

                function r(e) {
                    return "function" == typeof e || s(e) || u(e) || l(e) || c(e)
                }
                var i = e("../../util/index"),
                    o = e("../../type/Complex"),
                    a = e("../../type/Unit"),
                    s = i.number.isNumber,
                    u = i.string.isString,
                    l = o.isComplex,
                    c = a.isUnit;
                t["import"] = function f(o, a) {
                    var s, l = {
                        override: !1,
                        wrap: !0
                    };
                    if (a && a instanceof Object && i.object.extend(l, a), u(o)) {
                        if ("undefined" == typeof e) throw new Error("Cannot load file: require not available.");
                        var c = e(o);
                        f(c)
                    } else if (r(o)) {
                        if (s = o.name, !s) throw new Error("Cannot import an unnamed function or object");
                        (l.override || void 0 === t[s]) && n(s, o, l)
                    } else if (o instanceof Object)
                        for (s in o)
                            if (o.hasOwnProperty(s)) {
                                var p = o[s];
                                r(p) ? n(s, p, l) : f(p)
                            }
                }
            }
        }, {
            "../../type/Complex": 197,
            "../../type/Unit": 202,
            "../../util/index": 207
        }],
        193: [function (e, t) {
            t.exports = function (t) {
                function n(e, t) {
                    var n = [],
                        r = function (i, o) {
                            return Array.isArray(i) ? i.map(function (e, t) {
                                return n[o] = t, r(e, o + 1)
                            }) : t(i, n, e)
                        };
                    return r(e, 0)
                }
                var r = e("../../util/error"),
                    i = e("../../type/Matrix").isMatrix;
                t.map = function (e, t) {
                    if (2 != arguments.length) throw new r.ArgumentsError("map", arguments.length, 2);
                    if (Array.isArray(e)) return n(e, t);
                    if (i(e)) return e.map(t);
                    throw new r.UnsupportedTypeError("map", e)
                }
            }
        }, {
            "../../type/Matrix": 200,
            "../../util/error": 206
        }],
        194: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index"),
                    r = n.string,
                    i = r.isString;
                t.print = function (e, r, o) {
                    var a = arguments.length;
                    if (2 != a && 3 != a) throw new n.error.ArgumentsError("print", a, 2, 3);
                    if (!i(e)) throw new TypeError("String expected as first parameter in function format");
                    if (!(r instanceof Object)) throw new TypeError("Object expected as second parameter in function format");
                    return e.replace(/\$([\w\.]+)/g, function (e, n) {
                        for (var a = n.split("."), s = r[a.shift()]; a.length && void 0 !== s;) {
                            var u = a.shift();
                            s = u ? s[u] : s + "."
                        }
                        return void 0 !== s ? i(s) ? s : t.format(s, o) : e
                    })
                }
            }
        }, {
            "../../util/index": 207
        }],
        195: [function (e, t) {
            t.exports = function (e) {
                e.select = function (t) {
                    return new e.chaining.Selector(t)
                }
            }
        }, {}],
        196: [function (e, t) {
            t.exports = function (t) {
                var n = e("../../util/index");
                t["typeof"] = function (e) {
                    if (1 != arguments.length) throw new n.error.ArgumentsError("typeof", arguments.length, 1);
                    return n.types.type(e)
                }
            }
        }, {
            "../../util/index": 207
        }],
        197: [function (e, t, n) {
            function r(e, t) {
                if (!(this instanceof r)) throw new SyntaxError("Complex constructor must be called with the new operator");
                switch (arguments.length) {
                    case 0:
                        this.re = 0, this.im = 0;
                        break;
                    case 2:
                        if (!m(e) || !m(t)) throw new TypeError("Two numbers expected in Complex constructor");
                        this.re = e, this.im = t;
                        break;
                    default:
                        if (0 != arguments.length && 2 != arguments.length) throw new SyntaxError("Two or zero arguments expected in Complex constructor")
                }
            }

            function i() {
                for (;
                    " " == g || "	" == g;) s()
            }

            function o(e) {
                return e >= "0" && "9" >= e || "." == e
            }

            function a(e) {
                return e >= "0" && "9" >= e
            }

            function s() {
                d++, g = x.charAt(d)
            }

            function u(e) {
                d = e, g = x.charAt(d)
            }

            function l() {
                var e, t = "";
                if (e = d, "+" == g ? s() : "-" == g && (t += g, s()), !o(g)) return u(e), null;
                if ("." == g) {
                    if (t += g, s(), !a(g)) return u(e), null
                } else {
                    for (; a(g);) t += g, s();
                    "." == g && (t += g, s())
                }
                for (; a(g);) t += g, s();
                if ("E" == g || "e" == g) {
                    if (t += g, s(), ("+" == g || "-" == g) && (t += g, s()), !a(g)) return u(e), null;
                    for (; a(g);) t += g, s()
                }
                return t
            }

            function c() {
                var e = x.charAt(d + 1);
                if ("I" == g || "i" == g) return s(), "1";
                if (!("+" != g && "-" != g || "I" != e && "i" != e)) {
                    var t = "+" == g ? "1" : "-1";
                    return s(), s(), t
                }
                return null
            }
            var f = e("../util/index"),
                p = f.number,
                m = f.number.isNumber,
                h = f.string.isString;
            r.isComplex = function (e) {
                return e instanceof r
            };
            var x, d, g;
            r.parse = function (e) {
                if (x = e, d = -1, g = "", !h(x)) return null;
                s(), i();
                var t = l();
                if (t) {
                    if ("I" == g || "i" == g) return s(), i(), g ? null : new r(0, Number(t));
                    i();
                    var n = g;
                    if ("+" != n && "-" != n) return i(), g ? null : new r(Number(t), 0);
                    s(), i();
                    var o = l();
                    if (o) {
                        if ("I" != g && "i" != g) return null;
                        s()
                    } else if (o = c(), !o) return null;
                    return "-" == n && (o = "-" == o[0] ? "+" + o.substring(1) : "-" + o), s(), i(), g ? null : new r(Number(t), Number(o))
                }
                return (t = c()) ? (i(), g ? null : new r(0, Number(t))) : null
            }, r.prototype.clone = function () {
                return new r(this.re, this.im)
            }, r.prototype.equals = function (e) {
                return this.re === e.re && this.im === e.im
            }, r.prototype.format = function (e) {
                var t = "",
                    n = p.format(this.re, e),
                    r = p.format(this.im, e);
                return t = 0 == this.im ? n : 0 == this.re ? 1 == this.im ? "i" : -1 == this.im ? "-i" : r + "i" : this.im > 0 ? 1 == this.im ? n + " + i" : n + " + " + r + "i" : -1 == this.im ? n + " - i" : n + " - " + r.substring(1) + "i"
            }, r.prototype.toString = function () {
                return this.format()
            }, t.exports = r, n.isComplex = r.isComplex, n.parse = r.parse, f.types.addType("complex", r)
        }, {
            "../util/index": 207
        }],
        198: [function (e, t, n) {
            function r(e, t) {
                this.math = e, this.doc = t
            }
            var i = e("../util/index"),
                o = i.object,
                a = i.string;
            r.isHelp = function (e) {
                return e instanceof r
            }, r.prototype.toString = function () {
                var e = this.doc || {},
                    t = "\n";
                if (e.name && (t += "Name: " + e.name + "\n\n"), e.category && (t += "Category: " + e.category + "\n\n"), e.description && (t += "Description:\n    " + e.description + "\n\n"), e.syntax && (t += "Syntax:\n    " + e.syntax.join("\n    ") + "\n\n"), e.examples) {
                    var n = this.math.parser();
                    t += "Examples:\n";
                    for (var i = 0; i < e.examples.length; i++) {
                        var o, s = e.examples[i];
                        try {
                            o = n.eval(s)
                        } catch (u) {
                            o = u
                        }
                        t += "    " + s + "\n", !o || o instanceof r || (t += "        " + a.format(o) + "\n")
                    }
                    t += "\n"
                }
                return e.seealso && (t += "See also: " + e.seealso.join(", ") + "\n"), t
            }, r.prototype.toJSON = function () {
                return o.extend({}, this.doc)
            }, t.exports = r, n.isHelp = r.isHelp, i.types.addType("help", r)
        }, {
            "../util/index": 207
        }],
        199: [function (e, t, n) {
            function r() {
                if (!(this instanceof r)) throw new SyntaxError("Index constructor must be called with the new operator");
                this._ranges = [];
                for (var e = 0, t = arguments.length; t > e; e++) {
                    var n = arguments[e];
                    if (n instanceof a) this._ranges.push(n);
                    else if (n && (n = n.valueOf()), c(n)) this._ranges.push(i(n));
                    else {
                        if (!u(n)) throw new TypeError("Range expected as Array, Number, or String");
                        this._ranges.push(i([n, n + 1]))
                    }
                }
            }

            function i(e) {
                for (var t = e.length, n = 0; t > n; n++)
                    if (!u(e[n]) || !l(e[n])) throw new TypeError("Index parameters must be integer numbers");
                switch (e.length) {
                    case 2:
                        return new a(e[0], e[1]);
                    case 3:
                        return new a(e[0], e[1], e[2]);
                    default:
                        throw new SyntaxError("Wrong number of arguments in Index (2 or 3 expected)")
                }
            }
            var o = e("../util/index"),
                a = e("./Range"),
                s = o.number,
                u = s.isNumber,
                l = s.isInteger,
                c = Array.isArray;
            o.array.validateIndex, r.prototype.clone = function () {
                var e = new r;
                return e._ranges = o.object.clone(this._ranges), e
            }, r.isIndex = function (e) {
                return e instanceof r
            }, r.create = function (e) {
                var t = new r;
                return r.apply(t, e), t
            }, r.prototype.size = function () {
                for (var e = [], t = 0, n = this._ranges.length; n > t; t++) {
                    var r = this._ranges[t];
                    r instanceof a ? e.push(r.size()[0]) : e.push(null)
                }
                return e
            }, r.prototype.forEach = function (e) {
                for (var t = 0, n = this._ranges.length; n > t; t++) e(this._ranges[t], t, this)
            }, r.prototype.range = function (e) {
                return this._ranges[e]
            }, r.prototype.toArray = function () {
                for (var e = [], t = 0, n = this._ranges.length; n > t; t++) {
                    var r = this._ranges[t],
                        i = [],
                        o = r.start,
                        a = r.end,
                        s = r.step;
                    if (s > 0)
                        for (; a > o;) i.push(o), o += s;
                    else if (0 > s)
                        for (; o > a;) i.push(o), o += s;
                    e.push(i)
                }
                return e
            }, r.prototype.valueOf = r.prototype.toArray, r.prototype.toString = function () {
                for (var e = [], t = 0, n = this._ranges.length; n > t; t++) {
                    var r = this._ranges[t],
                        i = s.format(r.start);
                    1 != r.step && (i += ":" + s.format(r.step)), i += ":" + s.format(r.end), e.push(i)
                }
                return "[" + e.join(",") + "]"
            }, t.exports = r, n.isIndex = r.isIndex, n.create = r.create, o.types.addType("index", r)
        }, {
            "../util/index": 207,
            "./Range": 201
        }],
        200: [function (e, t, n) {
            function r(e) {
                if (!(this instanceof r)) throw new SyntaxError("Matrix constructor must be called with the new operator");
                if (e instanceof r) this._data = e.clone()._data;
                else if (Array.isArray(e)) this._data = e;
                else {
                    if (null != e) throw new TypeError("Unsupported type of data (" + v.types.type(e) + ")");
                    this._data = []
                }
                this._size = E.size(this._data)
            }

            function i(e, t) {
                if (!(t instanceof b)) throw new TypeError("Invalid index");
                var n = t.size(),
                    i = !n.some(function (e) {
                        return 1 != e
                    });
                if (n.length != e._size.length) throw new RangeError("Dimension mismatch (" + n.length + " != " + e._size.length + ")");
                if (!i) {
                    var o;
                    switch (n.length) {
                        case 1:
                            o = new r(l(e._data, t));
                            break;
                        case 2:
                            o = new r(c(e._data, t));
                            break;
                        default:
                            o = new r(f(e._data, t, 0))
                    }
                    for (; O(o._data) && 1 == o._data.length;) o._data = o._data[0], o._size.shift();
                    return o
                }
                switch (n.length) {
                    case 1:
                        return s(e._data, t);
                    case 2:
                        return u(e._data, t);
                    default:
                        return a(e._data, t)
                }
            }

            function o(e, t) {
                return E.validateIndex(t, e.length), e[t]
            }

            function a(e, t) {
                return t.forEach(function (t) {
                    e = o(e, t.start)
                }), N.clone(e)
            }

            function s(e, t) {
                return o(e, t.range(0).start)
            }

            function u(e, t) {
                return o(o(e, t.range(0).start), t.range(1).start)
            }

            function l(e, t) {
                var n = t.range(0);
                return n.map(function (t) {
                    return o(e, t)
                })
            }

            function c(e, t) {
                var n = t.range(0),
                    r = t.range(1);
                return n.map(function (t) {
                    var n = o(e, t);
                    return r.map(function (e) {
                        return o(n, e)
                    })
                })
            }

            function f(e, t, n) {
                var r = n == t.size().length - 1,
                    i = t.range(n);
                return r ? i.map(function (t) {
                    return o(e, t)
                }) : i.map(function (r) {
                    var i = o(e, r);
                    return f(i, t, n + 1)
                })
            }

            function p(e, t, n) {
                if (!(t instanceof b)) throw new TypeError("Invalid index");
                var i = t.size(),
                    o = !i.some(function (e) {
                        return 1 != e
                    });
                if (i.length < e._size.length) throw new RangeError("Dimension mismatch (" + i.length + " != " + e._size.length + ")");
                n instanceof r && (n = n.valueOf());
                var a = E.size(n);
                if (o) {
                    if (0 != a.length) throw new TypeError("Scalar value expected");
                    switch (t.length) {
                        case 1:
                            x(e._data, e._size, t, n);
                            break;
                        case 2:
                            d(e._data, e._size, t, n);
                            break;
                        default:
                            h(e._data, e._size, t, n)
                    }
                } else {
                    for (var s = 0, u = i.length - a.length; u > s; s++) n = [n];
                    var l = e._size.concat();
                    g(e._data, l, t, 0, n), N.deepEqual(e._size, l) || (y(e._data), e.resize(l))
                }
                return e
            }

            function m(e, t, n) {
                if (E.validateIndex(t), Array.isArray(n)) throw new TypeError("Dimension mismatch, value expected instead of array");
                e[t] = n
            }

            function h(e, t, n, r) {
                var i = !1;
                n.size().length > t.length && (i = !0), n.forEach(function (e, n) {
                    var r = e.start;
                    E.validateIndex(r), (null == t[n] || r + 1 > t[n]) && (t[n] = r + 1, i = !0)
                }), i && E.resize(e, t, 0);
                var o = t.length;
                n.forEach(function (t, n) {
                    var i = t.start;
                    o - 1 > n ? e = e[i] : e[i] = r
                })
            }

            function x(e, t, n, r) {
                var i = n.range(0).start;
                E.validateIndex(i), i + 1 > t[0] && (E.resize(e, [i + 1], 0), t[0] = i + 1), e[i] = r
            }

            function d(e, t, n, r) {
                var i = n.range(0).start,
                    o = n.range(1).start;
                E.validateIndex(i), E.validateIndex(o);
                var a = !1;
                i + 1 > (t[0] || 0) && (t[0] = i + 1, a = !0), o + 1 > (t[1] || 0) && (t[1] = o + 1, a = !0), a && E.resize(e, t, 0), e[i][o] = r
            }

            function g(e, t, n, r, i) {
                var o = r == n.size().length - 1,
                    a = n.range(r),
                    s = a.size()[0];
                if (s != i.length) throw new RangeError("Dimensions mismatch (" + s + " != " + i.length + ")");
                o ? a.forEach(function (n, o) {
                    m(e, n, i[o]), n + 1 > (t[r] || 0) && (t[r] = n + 1)
                }) : a.forEach(function (o, a) {
                    var s = e[o];
                    Array.isArray(s) || (e[o] = s = [s]), o + 1 > (t[r] || 0) && (t[r] = o + 1), g(s, t, n, r + 1, i[a])
                })
            }

            function y(e) {
                for (var t = 0, n = e.length; n > t; t++) {
                    var r = e[t];
                    Array.isArray(r) ? y(r) : void 0 == r && (e[t] = 0)
                }
            }
            var v = e("../util/index"),
                b = e("./Index"),
                w = (v.number, v.string),
                E = v.array,
                N = v.object,
                O = Array.isArray;
            r.isMatrix = function (e) {
                return e instanceof r
            }, r.prototype.subset = function (e, t) {
                switch (arguments.length) {
                    case 1:
                        return i(this, e);
                    case 2:
                        return p(this, e, t);
                    default:
                        throw new v.error.ArgumentsError("subset", arguments.length, 1, 2)
                }
            }, r.prototype.get = function () {
                throw new Error("Matrix.get is removed. Use matrix.subet(index) instead.")
            }, r.prototype.set = function () {
                throw new Error("Matrix.set is removed. Use matrix.subet(index, replacement) instead.")
            }, r.prototype.resize = function (e, t) {
                E.resize(this._data, e, t), this._size = N.clone(e)
            }, r.prototype.clone = function () {
                var e = new r;
                return e._data = N.clone(this._data), e._size = N.clone(this._size), e
            }, r.prototype.size = function () {
                return this._size
            }, r.prototype.map = function (e) {
                var t = this,
                    n = new r,
                    i = [],
                    o = function (n, r) {
                        return Array.isArray(n) ? n.map(function (e, t) {
                            return i[r] = t, o(e, r + 1)
                        }) : e(n, i, t)
                    };
                return n._data = o(this._data, 0), n._size = N.clone(this._size), n
            }, r.prototype.forEach = function (e) {
                var t = this,
                    n = [],
                    r = function (i, o) {
                        Array.isArray(i) ? i.forEach(function (e, t) {
                            n[o] = t, r(e, o + 1)
                        }) : e(i, n, t)
                    };
                r(this._data, 0)
            }, r.prototype.toScalar = function () {
                for (var e = this._data; Array.isArray(e) && 1 == e.length;) e = e[0];
                return Array.isArray(e) ? null : N.clone(e)
            }, r.prototype.isScalar = function () {
                return this._size.every(function (e) {
                    return 1 >= e
                })
            }, r.prototype.toVector = function () {
                var e = 0,
                    t = void 0,
                    n = [];
                if (this._size.forEach(function (r, i) {
                        r > 1 && (e++, t = i), n[i] = 0
                    }), 0 == e) {
                    var r = this.toScalar();
                    return r ? [r] : []
                }
                if (1 == e) {
                    var i = [],
                        o = function (e) {
                            Array.isArray(e) ? e.forEach(o) : i.push(e)
                        };
                    return o(this._data), i
                }
                return null
            }, r.prototype.isVector = function () {
                var e = 0;
                return this._size.forEach(function (t) {
                    t > 1 && e++
                }), 1 >= e
            }, r.prototype.toArray = function () {
                return N.clone(this._data)
            }, r.prototype.valueOf = function () {
                return this._data
            }, r.prototype.format = function (e) {
                return w.format(this._data, e)
            }, r.prototype.toString = function () {
                return w.format(this._data)
            }, t.exports = r, n.isMatrix = r.isMatrix, v.types.addType("matrix", r)
        }, {
            "../util/index": 207,
            "./Index": 199
        }],
        201: [function (e, t, n) {
            function r(e, t, n) {
                if (!(this instanceof r)) throw new SyntaxError("Range constructor must be called with the new operator");
                if (null != e && !o.isNumber(e)) throw new TypeError("Parameter start must be a number");
                if (null != t && !o.isNumber(t)) throw new TypeError("Parameter end must be a number");
                if (null != n && !o.isNumber(n)) throw new TypeError("Parameter step must be a number");
                this.start = null != e ? e : 0, this.end = null != t ? t : 0, this.step = null != n ? n : 1
            }
            var i = e("../util/index"),
                o = i.number,
                a = i.string;
            i.array, r.parse = function (e) {
                if (!a.isString(e)) return null;
                var t = e.split(":"),
                    n = t.map(function (e) {
                        return Number(e)
                    }),
                    i = n.some(function (e) {
                        return isNaN(e)
                    });
                if (i) return null;
                switch (n.length) {
                    case 2:
                        return new r(n[0], n[1]);
                    case 3:
                        return new r(n[0], n[2], n[1]);
                    default:
                        return null
                }
            }, r.prototype.clone = function () {
                return new r(this.start, this.end, this.step)
            }, r.isRange = function (e) {
                return e instanceof r
            }, r.prototype.size = function () {
                var e = 0,
                    t = Number(this.start),
                    n = Number(this.step),
                    r = Number(this.end),
                    i = r - t;
                return o.sign(n) == o.sign(i) ? e = Math.ceil(i / n) : 0 == i && (e = 0), isNaN(e) && (e = 0), [e]
            }, r.prototype.forEach = function (e) {
                var t = Number(this.start),
                    n = Number(this.step),
                    r = Number(this.end),
                    i = 0;
                if (n > 0)
                    for (; r > t;) e(t, i, this), t += n, i++;
                else if (0 > n)
                    for (; t > r;) e(t, i, this), t += n, i++
            }, r.prototype.map = function (e) {
                var t = [];
                return this.forEach(function (n, r, i) {
                    t[r] = e(n, r, i)
                }), t
            }, r.prototype.toArray = function () {
                var e = [];
                return this.forEach(function (t, n) {
                    e[n] = t
                }), e
            }, r.prototype.toVector = r.prototype.toArray, r.prototype.isVector = function () {
                return !0
            }, r.prototype.toScalar = function () {
                var e = this.toArray();
                return 1 == e.length ? e[0] : null
            }, r.prototype.isScalar = function () {
                return 1 == this.size()[0]
            }, r.prototype.valueOf = function () {
                return this.toArray()
            }, r.prototype.format = function (e) {
                var t = o.format(this.start, e);
                return 1 != this.step && (t += ":" + o.format(this.step, e)), t += ":" + o.format(this.end, e)
            }, r.prototype.toString = function () {
                return this.format()
            }, t.exports = r, n.isRange = r.isRange, n.parse = r.parse, i.types.addType("range", r)
        }, {
            "../util/index": 207
        }],
        202: [function (e, t, n) {
            function r(e, t) {
                if (!(this instanceof r)) throw new Error("Unit constructor must be called with the new operator");
                if (null != e && !y(e)) throw new TypeError("First parameter in Unit constructor must be a number");
                if (null != t && !v(t)) throw new TypeError("Second parameter in Unit constructor must be a string");
                if (null != t) {
                    var n = f(t);
                    if (!n) throw new SyntaxError('String "' + t + '" is no unit');
                    this.unit = n.unit, this.prefix = n.prefix
                } else this.unit = UNIT_NONE, this.prefix = w;
                null != e ? (this.value = this._normalize(e), this.fixPrefix = !1) : (this.value = null, this.fixPrefix = !0)
            }

            function i() {
                for (;
                    " " == h || "	" == h;) s()
            }

            function o(e) {
                return e >= "0" && "9" >= e || "." == e
            }

            function a(e) {
                return e >= "0" && "9" >= e
            }

            function s() {
                m++, h = p.charAt(m)
            }

            function u(e) {
                m = e, h = p.charAt(m)
            }

            function l() {
                var e, t = "";
                if (e = m, "+" == h ? s() : "-" == h && (t += h, s()), !o(h)) return u(e), null;
                if ("." == h) {
                    if (t += h, s(), !a(h)) return u(e), null
                } else {
                    for (; a(h);) t += h, s();
                    "." == h && (t += h, s())
                }
                for (; a(h);) t += h, s();
                if ("E" == h || "e" == h) {
                    if (t += h, s(), ("+" == h || "-" == h) && (t += h, s()), !a(h)) return u(e), null;
                    for (; a(h);) t += h, s()
                }
                return t
            }

            function c() {
                var e = "";
                for (i(); h && " " != h && "	" != h;) e += h, s();
                return e || null
            }

            function f(e) {
                for (var t = 0, n = N.length; n > t; t++) {
                    var r = N[t];
                    if (g.endsWith(e, r.name)) {
                        var i = e.length - r.name.length,
                            o = e.substring(0, i),
                            a = r.prefixes[o];
                        if (void 0 !== a) return {
                            unit: r,
                            prefix: a
                        }
                    }
                }
                return null
            }
            var p, m, h, x = e("../util/index"),
                d = x.number,
                g = x.string,
                y = x.number.isNumber,
                v = x.string.isString;
            r.parse = function (e) {
                if (p = e, m = -1, h = "", !v(p)) return null;
                s(), i();
                var t, n = l();
                return n ? (t = c(), s(), i(), h ? null : n && t ? new r(Number(n), t) : null) : (t = c(), s(), i(), h ? null : new r(null, t))
            }, r.isUnit = function (e) {
                return e instanceof r
            }, r.prototype.clone = function () {
                var e = new r;
                for (var t in this) this.hasOwnProperty(t) && (e[t] = this[t]);
                return e
            }, r.prototype._normalize = function (e) {
                return (e + this.unit.offset) * this.unit.value * this.prefix.value
            }, r.prototype._unnormalize = function (e, t) {
                return void 0 == t ? e / this.unit.value / this.prefix.value - this.unit.offset : e / this.unit.value / t - this.unit.offset
            }, r.isPlainUnit = function (e) {
                return null != f(e)
            }, r.prototype.hasBase = function (e) {
                return void 0 === this.unit.base ? void 0 === e : this.unit.base === e
            }, r.prototype.equalBase = function (e) {
                return this.unit.base === e.unit.base
            }, r.prototype.equals = function (e) {
                return this.equalBase(e) && this.value == e.value
            }, r.prototype["in"] = function (e) {
                var t;
                if (v(e)) {
                    if (t = new r(null, e), !this.equalBase(t)) throw new Error("Units do not match");
                    return t.value = this.value, t
                }
                if (e instanceof r) {
                    if (!this.equalBase(e)) throw new Error("Units do not match");
                    if (null != e.value) throw new Error("Cannot convert to a unit with a value");
                    if (null == e.unit) throw new Error("Unit expected on the right hand side of function in");
                    return t = e.clone(), t.value = this.value, t.fixPrefix = !0, t
                }
                throw new Error("String or Unit expected as parameter")
            }, r.prototype.toNumber = function (e) {
                var t = this["in"](e),
                    n = this.fixPrefix ? t._bestPrefix() : t.prefix;
                return t._unnormalize(t.value, n.value)
            }, r.prototype.toString = function () {
                return this.format()
            }, r.prototype.format = function (e) {
                var t, n;
                if (this.fixPrefix) t = this._unnormalize(this.value), n = null != this.value ? d.format(t, e) + " " : "", n += this.prefix.name + this.unit.name;
                else {
                    var r = this._bestPrefix();
                    t = this._unnormalize(this.value, r.value), n = null != this.value ? d.format(t, e) + " " : "", n += r.name + this.unit.name
                }
                return n
            }, r.prototype._bestPrefix = function () {
                var e = Math.abs(this.value / this.unit.value),
                    t = w,
                    n = Math.abs(Math.log(e / t.value) / Math.LN10 - 1.2),
                    r = this.unit.prefixes;
                for (var i in r)
                    if (r.hasOwnProperty(i)) {
                        var o = r[i];
                        if (o.scientific) {
                            var a = Math.abs(Math.log(e / o.value) / Math.LN10 - 1.2);
                            n > a && (t = o, n = a)
                        }
                    } return t
            };
            var b = {
                    NONE: {
                        "": {
                            name: "",
                            value: 1,
                            scientific: !0
                        }
                    },
                    SHORT: {
                        "": {
                            name: "",
                            value: 1,
                            scientific: !0
                        },
                        da: {
                            name: "da",
                            value: 10,
                            scientific: !1
                        },
                        h: {
                            name: "h",
                            value: 100,
                            scientific: !1
                        },
                        k: {
                            name: "k",
                            value: 1e3,
                            scientific: !0
                        },
                        M: {
                            name: "M",
                            value: 1e6,
                            scientific: !0
                        },
                        G: {
                            name: "G",
                            value: 1e9,
                            scientific: !0
                        },
                        T: {
                            name: "T",
                            value: 1e12,
                            scientific: !0
                        },
                        P: {
                            name: "P",
                            value: 1e15,
                            scientific: !0
                        },
                        E: {
                            name: "E",
                            value: 1e18,
                            scientific: !0
                        },
                        Z: {
                            name: "Z",
                            value: 1e21,
                            scientific: !0
                        },
                        Y: {
                            name: "Y",
                            value: 1e24,
                            scientific: !0
                        },
                        d: {
                            name: "d",
                            value: .1,
                            scientific: !1
                        },
                        c: {
                            name: "c",
                            value: .01,
                            scientific: !1
                        },
                        m: {
                            name: "m",
                            value: .001,
                            scientific: !0
                        },
                        u: {
                            name: "u",
                            value: 1e-6,
                            scientific: !0
                        },
                        n: {
                            name: "n",
                            value: 1e-9,
                            scientific: !0
                        },
                        p: {
                            name: "p",
                            value: 1e-12,
                            scientific: !0
                        },
                        f: {
                            name: "f",
                            value: 1e-15,
                            scientific: !0
                        },
                        a: {
                            name: "a",
                            value: 1e-18,
                            scientific: !0
                        },
                        z: {
                            name: "z",
                            value: 1e-21,
                            scientific: !0
                        },
                        y: {
                            name: "y",
                            value: 1e-24,
                            scientific: !0
                        }
                    },
                    LONG: {
                        "": {
                            name: "",
                            value: 1,
                            scientific: !0
                        },
                        deca: {
                            name: "deca",
                            value: 10,
                            scientific: !1
                        },
                        hecto: {
                            name: "hecto",
                            value: 100,
                            scientific: !1
                        },
                        kilo: {
                            name: "kilo",
                            value: 1e3,
                            scientific: !0
                        },
                        mega: {
                            name: "mega",
                            value: 1e6,
                            scientific: !0
                        },
                        giga: {
                            name: "giga",
                            value: 1e9,
                            scientific: !0
                        },
                        tera: {
                            name: "tera",
                            value: 1e12,
                            scientific: !0
                        },
                        peta: {
                            name: "peta",
                            value: 1e15,
                            scientific: !0
                        },
                        exa: {
                            name: "exa",
                            value: 1e18,
                            scientific: !0
                        },
                        zetta: {
                            name: "zetta",
                            value: 1e21,
                            scientific: !0
                        },
                        yotta: {
                            name: "yotta",
                            value: 1e24,
                            scientific: !0
                        },
                        deci: {
                            name: "deci",
                            value: .1,
                            scientific: !1
                        },
                        centi: {
                            name: "centi",
                            value: .01,
                            scientific: !1
                        },
                        milli: {
                            name: "milli",
                            value: .001,
                            scientific: !0
                        },
                        micro: {
                            name: "micro",
                            value: 1e-6,
                            scientific: !0
                        },
                        nano: {
                            name: "nano",
                            value: 1e-9,
                            scientific: !0
                        },
                        pico: {
                            name: "pico",
                            value: 1e-12,
                            scientific: !0
                        },
                        femto: {
                            name: "femto",
                            value: 1e-15,
                            scientific: !0
                        },
                        atto: {
                            name: "atto",
                            value: 1e-18,
                            scientific: !0
                        },
                        zepto: {
                            name: "zepto",
                            value: 1e-21,
                            scientific: !0
                        },
                        yocto: {
                            name: "yocto",
                            value: 1e-24,
                            scientific: !0
                        }
                    },
                    BINARY_SHORT: {
                        "": {
                            name: "",
                            value: 1,
                            scientific: !0
                        },
                        k: {
                            name: "k",
                            value: 1024,
                            scientific: !0
                        },
                        M: {
                            name: "M",
                            value: Math.pow(1024, 2),
                            scientific: !0
                        },
                        G: {
                            name: "G",
                            value: Math.pow(1024, 3),
                            scientific: !0
                        },
                        T: {
                            name: "T",
                            value: Math.pow(1024, 4),
                            scientific: !0
                        },
                        P: {
                            name: "P",
                            value: Math.pow(1024, 5),
                            scientific: !0
                        },
                        E: {
                            name: "E",
                            value: Math.pow(1024, 6),
                            scientific: !0
                        },
                        Z: {
                            name: "Z",
                            value: Math.pow(1024, 7),
                            scientific: !0
                        },
                        Y: {
                            name: "Y",
                            value: Math.pow(1024, 8),
                            scientific: !0
                        },
                        Ki: {
                            name: "Ki",
                            value: 1024,
                            scientific: !0
                        },
                        Mi: {
                            name: "Mi",
                            value: Math.pow(1024, 2),
                            scientific: !0
                        },
                        Gi: {
                            name: "Gi",
                            value: Math.pow(1024, 3),
                            scientific: !0
                        },
                        Ti: {
                            name: "Ti",
                            value: Math.pow(1024, 4),
                            scientific: !0
                        },
                        Pi: {
                            name: "Pi",
                            value: Math.pow(1024, 5),
                            scientific: !0
                        },
                        Ei: {
                            name: "Ei",
                            value: Math.pow(1024, 6),
                            scientific: !0
                        },
                        Zi: {
                            name: "Zi",
                            value: Math.pow(1024, 7),
                            scientific: !0
                        },
                        Yi: {
                            name: "Yi",
                            value: Math.pow(1024, 8),
                            scientific: !0
                        }
                    },
                    BINARY_LONG: {
                        "": {
                            name: "",
                            value: 1,
                            scientific: !0
                        },
                        kilo: {
                            name: "kilo",
                            value: 1024,
                            scientific: !0
                        },
                        mega: {
                            name: "mega",
                            value: Math.pow(1024, 2),
                            scientific: !0
                        },
                        giga: {
                            name: "giga",
                            value: Math.pow(1024, 3),
                            scientific: !0
                        },
                        tera: {
                            name: "tera",
                            value: Math.pow(1024, 4),
                            scientific: !0
                        },
                        peta: {
                            name: "peta",
                            value: Math.pow(1024, 5),
                            scientific: !0
                        },
                        exa: {
                            name: "exa",
                            value: Math.pow(1024, 6),
                            scientific: !0
                        },
                        zetta: {
                            name: "zetta",
                            value: Math.pow(1024, 7),
                            scientific: !0
                        },
                        yotta: {
                            name: "yotta",
                            value: Math.pow(1024, 8),
                            scientific: !0
                        },
                        kibi: {
                            name: "kibi",
                            value: 1024,
                            scientific: !0
                        },
                        mebi: {
                            name: "mebi",
                            value: Math.pow(1024, 2),
                            scientific: !0
                        },
                        gibi: {
                            name: "gibi",
                            value: Math.pow(1024, 3),
                            scientific: !0
                        },
                        tebi: {
                            name: "tebi",
                            value: Math.pow(1024, 4),
                            scientific: !0
                        },
                        pebi: {
                            name: "pebi",
                            value: Math.pow(1024, 5),
                            scientific: !0
                        },
                        exi: {
                            name: "exi",
                            value: Math.pow(1024, 6),
                            scientific: !0
                        },
                        zebi: {
                            name: "zebi",
                            value: Math.pow(1024, 7),
                            scientific: !0
                        },
                        yobi: {
                            name: "yobi",
                            value: Math.pow(1024, 8),
                            scientific: !0
                        }
                    }
                },
                w = {
                    name: "",
                    value: 1,
                    scientific: !0
                },
                E = {
                    NONE: {},
                    LENGTH: {},
                    MASS: {},
                    TIME: {},
                    CURRENT: {},
                    TEMPERATURE: {},
                    LUMINOUS_INTENSITY: {},
                    AMOUNT_OF_SUBSTANCE: {},
                    FORCE: {},
                    SURFACE: {},
                    VOLUME: {},
                    ANGLE: {},
                    BIT: {}
                };
            BASE_UNIT_NONE = {}, UNIT_NONE = {
                name: "",
                base: BASE_UNIT_NONE,
                value: 1,
                offset: 0
            };
            var N = [{
                name: "meter",
                base: E.LENGTH,
                prefixes: b.LONG,
                value: 1,
                offset: 0
            }, {
                name: "inch",
                base: E.LENGTH,
                prefixes: b.NONE,
                value: .0254,
                offset: 0
            }, {
                name: "foot",
                base: E.LENGTH,
                prefixes: b.NONE,
                value: .3048,
                offset: 0
            }, {
                name: "yard",
                base: E.LENGTH,
                prefixes: b.NONE,
                value: .9144,
                offset: 0
            }, {
                name: "mile",
                base: E.LENGTH,
                prefixes: b.NONE,
                value: 1609.344,
                offset: 0
            }, {
                name: "link",
                base: E.LENGTH,
                prefixes: b.NONE,
                value: .201168,
                offset: 0
            }, {
                name: "rod",
                base: E.LENGTH,
                prefixes: b.NONE,
                value: 5.02921,
                offset: 0
            }, {
                name: "chain",
                base: E.LENGTH,
                prefixes: b.NONE,
                value: 20.1168,
                offset: 0
            }, {
                name: "angstrom",
                base: E.LENGTH,
                prefixes: b.NONE,
                value: 1e-10,
                offset: 0
            }, {
                name: "m",
                base: E.LENGTH,
                prefixes: b.SHORT,
                value: 1,
                offset: 0
            }, {
                name: "ft",
                base: E.LENGTH,
                prefixes: b.NONE,
                value: .3048,
                offset: 0
            }, {
                name: "yd",
                base: E.LENGTH,
                prefixes: b.NONE,
                value: .9144,
                offset: 0
            }, {
                name: "mi",
                base: E.LENGTH,
                prefixes: b.NONE,
                value: 1609.344,
                offset: 0
            }, {
                name: "li",
                base: E.LENGTH,
                prefixes: b.NONE,
                value: .201168,
                offset: 0
            }, {
                name: "rd",
                base: E.LENGTH,
                prefixes: b.NONE,
                value: 5.02921,
                offset: 0
            }, {
                name: "ch",
                base: E.LENGTH,
                prefixes: b.NONE,
                value: 20.1168,
                offset: 0
            }, {
                name: "mil",
                base: E.LENGTH,
                prefixes: b.NONE,
                value: 254e-7,
                offset: 0
            }, {
                name: "m2",
                base: E.SURFACE,
                prefixes: b.SHORT,
                value: 1,
                offset: 0
            }, {
                name: "sqin",
                base: E.SURFACE,
                prefixes: b.NONE,
                value: 64516e-8,
                offset: 0
            }, {
                name: "sqft",
                base: E.SURFACE,
                prefixes: b.NONE,
                value: .09290304,
                offset: 0
            }, {
                name: "sqyd",
                base: E.SURFACE,
                prefixes: b.NONE,
                value: .83612736,
                offset: 0
            }, {
                name: "sqmi",
                base: E.SURFACE,
                prefixes: b.NONE,
                value: 2589988.110336,
                offset: 0
            }, {
                name: "sqrd",
                base: E.SURFACE,
                prefixes: b.NONE,
                value: 25.29295,
                offset: 0
            }, {
                name: "sqch",
                base: E.SURFACE,
                prefixes: b.NONE,
                value: 404.6873,
                offset: 0
            }, {
                name: "sqmil",
                base: E.SURFACE,
                prefixes: b.NONE,
                value: 6.4516e-10,
                offset: 0
            }, {
                name: "m3",
                base: E.VOLUME,
                prefixes: b.SHORT,
                value: 1,
                offset: 0
            }, {
                name: "L",
                base: E.VOLUME,
                prefixes: b.SHORT,
                value: .001,
                offset: 0
            }, {
                name: "litre",
                base: E.VOLUME,
                prefixes: b.LONG,
                value: .001,
                offset: 0
            }, {
                name: "cuin",
                base: E.VOLUME,
                prefixes: b.NONE,
                value: 16387064e-12,
                offset: 0
            }, {
                name: "cuft",
                base: E.VOLUME,
                prefixes: b.NONE,
                value: .028316846592,
                offset: 0
            }, {
                name: "cuyd",
                base: E.VOLUME,
                prefixes: b.NONE,
                value: .764554857984,
                offset: 0
            }, {
                name: "teaspoon",
                base: E.VOLUME,
                prefixes: b.NONE,
                value: 5e-6,
                offset: 0
            }, {
                name: "tablespoon",
                base: E.VOLUME,
                prefixes: b.NONE,
                value: 15e-6,
                offset: 0
            }, {
                name: "minim",
                base: E.VOLUME,
                prefixes: b.NONE,
                value: 6.161152e-8,
                offset: 0
            }, {
                name: "fluiddram",
                base: E.VOLUME,
                prefixes: b.NONE,
                value: 36966911e-13,
                offset: 0
            }, {
                name: "fluidounce",
                base: E.VOLUME,
                prefixes: b.NONE,
                value: 2957353e-11,
                offset: 0
            }, {
                name: "gill",
                base: E.VOLUME,
                prefixes: b.NONE,
                value: .0001182941,
                offset: 0
            }, {
                name: "cup",
                base: E.VOLUME,
                prefixes: b.NONE,
                value: .0002365882,
                offset: 0
            }, {
                name: "pint",
                base: E.VOLUME,
                prefixes: b.NONE,
                value: .0004731765,
                offset: 0
            }, {
                name: "quart",
                base: E.VOLUME,
                prefixes: b.NONE,
                value: .0009463529,
                offset: 0
            }, {
                name: "gallon",
                base: E.VOLUME,
                prefixes: b.NONE,
                value: .003785412,
                offset: 0
            }, {
                name: "beerbarrel",
                base: E.VOLUME,
                prefixes: b.NONE,
                value: .1173478,
                offset: 0
            }, {
                name: "oilbarrel",
                base: E.VOLUME,
                prefixes: b.NONE,
                value: .1589873,
                offset: 0
            }, {
                name: "hogshead",
                base: E.VOLUME,
                prefixes: b.NONE,
                value: .238481,
                offset: 0
            }, {
                name: "fldr",
                base: E.VOLUME,
                prefixes: b.NONE,
                value: 36966911e-13,
                offset: 0
            }, {
                name: "floz",
                base: E.VOLUME,
                prefixes: b.NONE,
                value: 2957353e-11,
                offset: 0
            }, {
                name: "gi",
                base: E.VOLUME,
                prefixes: b.NONE,
                value: .0001182941,
                offset: 0
            }, {
                name: "cp",
                base: E.VOLUME,
                prefixes: b.NONE,
                value: .0002365882,
                offset: 0
            }, {
                name: "pt",
                base: E.VOLUME,
                prefixes: b.NONE,
                value: .0004731765,
                offset: 0
            }, {
                name: "qt",
                base: E.VOLUME,
                prefixes: b.NONE,
                value: .0009463529,
                offset: 0
            }, {
                name: "gal",
                base: E.VOLUME,
                prefixes: b.NONE,
                value: .003785412,
                offset: 0
            }, {
                name: "bbl",
                base: E.VOLUME,
                prefixes: b.NONE,
                value: .1173478,
                offset: 0
            }, {
                name: "obl",
                base: E.VOLUME,
                prefixes: b.NONE,
                value: .1589873,
                offset: 0
            }, {
                name: "g",
                base: E.MASS,
                prefixes: b.SHORT,
                value: .001,
                offset: 0
            }, {
                name: "gram",
                base: E.MASS,
                prefixes: b.LONG,
                value: .001,
                offset: 0
            }, {
                name: "ton",
                base: E.MASS,
                prefixes: b.SHORT,
                value: 907.18474,
                offset: 0
            }, {
                name: "tonne",
                base: E.MASS,
                prefixes: b.SHORT,
                value: 1e3,
                offset: 0
            }, {
                name: "grain",
                base: E.MASS,
                prefixes: b.NONE,
                value: 6479891e-11,
                offset: 0
            }, {
                name: "dram",
                base: E.MASS,
                prefixes: b.NONE,
                value: .0017718451953125,
                offset: 0
            }, {
                name: "ounce",
                base: E.MASS,
                prefixes: b.NONE,
                value: .028349523125,
                offset: 0
            }, {
                name: "poundmass",
                base: E.MASS,
                prefixes: b.NONE,
                value: .45359237,
                offset: 0
            }, {
                name: "hundredweight",
                base: E.MASS,
                prefixes: b.NONE,
                value: 45.359237,
                offset: 0
            }, {
                name: "stick",
                base: E.MASS,
                prefixes: b.NONE,
                value: .115,
                offset: 0
            }, {
                name: "gr",
                base: E.MASS,
                prefixes: b.NONE,
                value: 6479891e-11,
                offset: 0
            }, {
                name: "dr",
                base: E.MASS,
                prefixes: b.NONE,
                value: .0017718451953125,
                offset: 0
            }, {
                name: "oz",
                base: E.MASS,
                prefixes: b.NONE,
                value: .028349523125,
                offset: 0
            }, {
                name: "lbm",
                base: E.MASS,
                prefixes: b.NONE,
                value: .45359237,
                offset: 0
            }, {
                name: "cwt",
                base: E.MASS,
                prefixes: b.NONE,
                value: 45.359237,
                offset: 0
            }, {
                name: "s",
                base: E.TIME,
                prefixes: b.SHORT,
                value: 1,
                offset: 0
            }, {
                name: "min",
                base: E.TIME,
                prefixes: b.NONE,
                value: 60,
                offset: 0
            }, {
                name: "h",
                base: E.TIME,
                prefixes: b.NONE,
                value: 3600,
                offset: 0
            }, {
                name: "seconds",
                base: E.TIME,
                prefixes: b.LONG,
                value: 1,
                offset: 0
            }, {
                name: "second",
                base: E.TIME,
                prefixes: b.LONG,
                value: 1,
                offset: 0
            }, {
                name: "sec",
                base: E.TIME,
                prefixes: b.LONG,
                value: 1,
                offset: 0
            }, {
                name: "minutes",
                base: E.TIME,
                prefixes: b.NONE,
                value: 60,
                offset: 0
            }, {
                name: "minute",
                base: E.TIME,
                prefixes: b.NONE,
                value: 60,
                offset: 0
            }, {
                name: "hours",
                base: E.TIME,
                prefixes: b.NONE,
                value: 3600,
                offset: 0
            }, {
                name: "hour",
                base: E.TIME,
                prefixes: b.NONE,
                value: 3600,
                offset: 0
            }, {
                name: "day",
                base: E.TIME,
                prefixes: b.NONE,
                value: 86400,
                offset: 0
            }, {
                name: "days",
                base: E.TIME,
                prefixes: b.NONE,
                value: 86400,
                offset: 0
            }, {
                name: "rad",
                base: E.ANGLE,
                prefixes: b.NONE,
                value: 1,
                offset: 0
            }, {
                name: "deg",
                base: E.ANGLE,
                prefixes: b.NONE,
                value: .017453292519943295,
                offset: 0
            }, {
                name: "grad",
                base: E.ANGLE,
                prefixes: b.NONE,
                value: .015707963267948967,
                offset: 0
            }, {
                name: "cycle",
                base: E.ANGLE,
                prefixes: b.NONE,
                value: 6.283185307179586,
                offset: 0
            }, {
                name: "A",
                base: E.CURRENT,
                prefixes: b.SHORT,
                value: 1,
                offset: 0
            }, {
                name: "ampere",
                base: E.CURRENT,
                prefixes: b.LONG,
                value: 1,
                offset: 0
            }, {
                name: "K",
                base: E.TEMPERATURE,
                prefixes: b.NONE,
                value: 1,
                offset: 0
            }, {
                name: "degC",
                base: E.TEMPERATURE,
                prefixes: b.NONE,
                value: 1,
                offset: 273.15
            }, {
                name: "degF",
                base: E.TEMPERATURE,
                prefixes: b.NONE,
                value: 1 / 1.8,
                offset: 459.67
            }, {
                name: "degR",
                base: E.TEMPERATURE,
                prefixes: b.NONE,
                value: 1 / 1.8,
                offset: 0
            }, {
                name: "kelvin",
                base: E.TEMPERATURE,
                prefixes: b.NONE,
                value: 1,
                offset: 0
            }, {
                name: "celsius",
                base: E.TEMPERATURE,
                prefixes: b.NONE,
                value: 1,
                offset: 273.15
            }, {
                name: "fahrenheit",
                base: E.TEMPERATURE,
                prefixes: b.NONE,
                value: 1 / 1.8,
                offset: 459.67
            }, {
                name: "rankine",
                base: E.TEMPERATURE,
                prefixes: b.NONE,
                value: 1 / 1.8,
                offset: 0
            }, {
                name: "mol",
                base: E.AMOUNT_OF_SUBSTANCE,
                prefixes: b.NONE,
                value: 1,
                offset: 0
            }, {
                name: "mole",
                base: E.AMOUNT_OF_SUBSTANCE,
                prefixes: b.NONE,
                value: 1,
                offset: 0
            }, {
                name: "cd",
                base: E.LUMINOUS_INTENSITY,
                prefixes: b.NONE,
                value: 1,
                offset: 0
            }, {
                name: "candela",
                base: E.LUMINOUS_INTENSITY,
                prefixes: b.NONE,
                value: 1,
                offset: 0
            }, {
                name: "N",
                base: E.FORCE,
                prefixes: b.SHORT,
                value: 1,
                offset: 0
            }, {
                name: "newton",
                base: E.FORCE,
                prefixes: b.LONG,
                value: 1,
                offset: 0
            }, {
                name: "lbf",
                base: E.FORCE,
                prefixes: b.NONE,
                value: 4.4482216152605,
                offset: 0
            }, {
                name: "poundforce",
                base: E.FORCE,
                prefixes: b.NONE,
                value: 4.4482216152605,
                offset: 0
            }, {
                name: "b",
                base: E.BIT,
                prefixes: b.BINARY_SHORT,
                value: 1,
                offset: 0
            }, {
                name: "bits",
                base: E.BIT,
                prefixes: b.BINARY_LONG,
                value: 1,
                offset: 0
            }, {
                name: "B",
                base: E.BIT,
                prefixes: b.BINARY_SHORT,
                value: 8,
                offset: 0
            }, {
                name: "bytes",
                base: E.BIT,
                prefixes: b.BINARY_LONG,
                value: 8,
                offset: 0
            }];
            r.PREFIXES = b, r.BASE_UNITS = E, r.UNITS = N, t.exports = r, n.isUnit = r.isUnit, n.isPlainUnit = r.isPlainUnit, n.parse = r.parse, x.types.addType("unit", r)
        }, {
            "../util/index": 207
        }],
        203: [function (e, t, n) {
            function r(e, t, n) {
                if (0 >= t) {
                    if (s(e[0])) {
                        var o, a = i(e),
                            u = [];
                        for (o = 0; o < a.length; o++) u[o] = r(a[o], t - 1, n);
                        return u
                    }
                    var o, l = e[0];
                    for (o = 1; o < e.length; o++) l = n(l, e[o]);
                    return l
                }
                var o, u = [];
                for (o = 0; o < e.length; o++) u[o] = r(e[o], t - 1, n);
                return u
            }

            function i(e) {
                var t, n, r = e.length,
                    i = e[0].length,
                    o = new Array;
                for (n = 0; i > n; n++) {
                    var a = new Array;
                    for (t = 0; r > t; t++) a.push(e[t][n]);
                    o.push(a)
                }
                return o
            }
            var o = e("../util/index"),
                a = e("./Matrix"),
                s = o.array.isArray;
            o.string.isString, n.argsToArray = function (e) {
                var t;
                return 0 == e.length ? t = [] : 1 == e.length ? (t = e[0], t instanceof a && (t = t.toVector()), s(t) || (t = [t])) : t = Array.prototype.slice.apply(e), t
            }, n.isCollection = function (e) {
                return s(e) || e instanceof a
            }, n.deepMap = function u(e, t) {
                return e && "function" == typeof e.map ? e.map(function (e) {
                    return u(e, t)
                }) : t(e)
            }, n.deepMap2 = function l(e, t, n) {
                var r, i, o;
                if (s(e))
                    if (s(t)) {
                        if (e.length != t.length) throw new RangeError("Dimension mismatch (" + e.length + " != " + t.length + ")");
                        for (r = [], i = e.length, o = 0; i > o; o++) r[o] = l(e[o], t[o], n)
                    } else {
                        if (t instanceof a) return r = l(e, t.valueOf(), n), new a(r);
                        for (r = [], i = e.length, o = 0; i > o; o++) r[o] = l(e[o], t, n)
                    }
                else {
                    if (e instanceof a) return t instanceof a ? (r = l(e.valueOf(), t.valueOf(), n), new a(r)) : (r = l(e.valueOf(), t, n), new a(r));
                    if (s(t))
                        for (r = [], i = t.length, o = 0; i > o; o++) r[o] = l(e, t[o], n);
                    else r = n(e, t)
                }
                return r
            }, n.reduce = function (e, t, n) {
                return e instanceof a ? new a(r(e.valueOf(), t, n)) : r(e, t, n)
            }, n.deepForEach = function c(e, t) {
                e instanceof a && (e = e.valueOf());
                for (var n = 0, r = e.length; r > n; n++) {
                    var i = e[n];
                    s(i) ? c(i, t) : t(i)
                }
            }
        }, {
            "../util/index": 207,
            "./Matrix": 200
        }],
        204: [function (e, t, n) {
            function r(e) {
                if (Array.isArray(e)) {
                    var t = e.length,
                        n = t ? r(e[0]) : [];
                    return n.unshift(t), n
                }
                return []
            }

            function i(e, t, n) {
                var r, o = e.length;
                if (o != t[n]) throw new RangeError("Dimension mismatch (" + o + " != " + t[n] + ")");
                if (n < t.length - 1) {
                    var a = n + 1;
                    for (r = 0; o > r; r++) {
                        var s = e[r];
                        if (!Array.isArray(s)) throw new RangeError("Dimension mismatch (" + (t.length - 1) + " < " + t.length + ")");
                        i(e[r], t, a)
                    }
                } else
                    for (r = 0; o > r; r++)
                        if (Array.isArray(e[r])) throw new RangeError("Dimension mismatch (" + (t.length + 1) + " > " + t.length + ")")
            }

            function o(e, t, n, r) {
                if (!Array.isArray(e)) throw new TypeError("Array expected");
                var i = e.length,
                    a = t[n];
                if (i != a) {
                    if (a > e.length)
                        for (var s = e.length; a > s; s++) e[s] = r ? u.clone(r) : 0;
                    else e.length = t[n];
                    i = e.length
                }
                if (n < t.length - 1) {
                    var l = n + 1;
                    for (s = 0; i > s; s++) c = e[s], Array.isArray(c) || (c = [c], e[s] = c), o(c, t, l, r)
                } else
                    for (s = 0; i > s; s++) {
                        for (var c = e[s]; Array.isArray(c);) c = c[0];
                        e[s] = c
                    }
            }
            var a = e("./number"),
                s = e("./string"),
                u = e("./object"),
                l = e("./types"),
                c = Array.isArray;
            n.size = function (e) {
                var t = r(e);
                return n.validate(e, t), t
            }, n.validate = function (e, t) {
                var n = 0 == t.length;
                if (n) {
                    if (Array.isArray(e)) throw new RangeError("Dimension mismatch (" + e.length + " != 0)")
                } else i(e, t, 0)
            }, n.validateIndex = function (e, t) {
                if (!a.isNumber(e) || !a.isInteger(e)) throw new TypeError("Index must be an integer (value: " + e + ")");
                if (0 > e) throw new RangeError("Index out of range (" + e + " < 0)");
                if (void 0 !== t && e >= t) throw new RangeError("Index out of range (" + e + " > " + (t - 1) + ")")
            }, n.resize = function (e, t, n) {
                if (!Array.isArray(t)) throw new TypeError("Size must be an array (size is " + l.type(t) + ")");
                t.forEach(function (e) {
                    if (!a.isNumber(e) || !a.isInteger(e) || 0 > e) throw new TypeError("Invalid size, must contain positive integers (size: " + s.format(t) + ")")
                }), o(e, t, 0, n)
            }, n.squeeze = function (e) {
                for (; c(e) && 1 === e.length;) e = e[0];
                return e
            }, n.unsqueeze = function (e, t) {
                for (var r = n.size(e), i = 0, o = t - r.length; o > i; i++) e = [e];
                return e
            }, n.isArray = Array.isArray
        }, {
            "./number": 208,
            "./object": 209,
            "./string": 210,
            "./types": 211
        }],
        205: [function (e, t, n) {
            n.isBoolean = function (e) {
                return e instanceof Boolean || "boolean" == typeof e
            }
        }, {}],
        206: [function (e, t, n) {
            var r = e("./types");
            n.UnsupportedTypeError = function (e, t) {
                if (2 == arguments.length) {
                    var n = r.type(t);
                    this.message = "Function " + e + "(" + n + ") not supported"
                } else if (arguments.length > 2) {
                    for (var i = [], o = 1; o < arguments.length; o++) i.push(r.type(arguments[o]));
                    this.message = "Function " + e + "(" + i.join(", ") + ") not supported"
                } else this.message = "Unsupported parameter in function " + e
            }, n.UnsupportedTypeError.prototype = new TypeError, n.UnsupportedTypeError.prototype.name = "UnsupportedTypeError", n.ArgumentsError = function (e, t, n, r) {
                this.message = "Wrong number of arguments in function " + e + " (" + t + " provided, " + n + (void 0 != r ? "-" + r : "") + " expected)"
            }, n.ArgumentsError.prototype = new SyntaxError, n.ArgumentsError.prototype.name = "ArgumentError"
        }, {
            "./types": 211
        }],
        207: [function (e, t, n) {
            n.array = e("./array"), n.boolean = e("./boolean"), n.error = e("./error"), n.number = e("./number"), n.object = e("./object"), n.string = e("./string"), n.types = e("./types")
        }, {
            "./array": 204,
            "./boolean": 205,
            "./error": 206,
            "./number": 208,
            "./object": 209,
            "./string": 210,
            "./types": 211
        }],
        208: [function (e, t, n) {
            n.isNumber = function (e) {
                return e instanceof Number || "number" == typeof e
            }, n.isNumBool = function (e) {
                var t = typeof e;
                return "number" === t || "boolean" === t || e instanceof Number || e instanceof Boolean
            }, n.isInteger = function (e) {
                return e == Math.round(e)
            }, n.sign = function (e) {
                return e > 0 ? 1 : 0 > e ? -1 : 0
            }, n.format = function (e, t) {
                if ("function" == typeof t) return t(e);
                if (1 / 0 === e) return "Infinity";
                if (e === -1 / 0) return "-Infinity";
                if (isNaN(e)) return "NaN";
                var r = "auto",
                    i = void 0;
                switch (void 0 !== t && (t.notation && (r = t.notation), t && (n.isNumber(t) ? i = t : t.precision && (i = t.precision))), r) {
                    case "fixed":
                        return e.toFixed(i);
                    case "scientific":
                        return n.toScientific(e, i);
                    case "auto":
                        var o = .001,
                            a = 1e5;
                        if (t && t.scientific && (void 0 !== t.scientific.lower && (o = t.scientific.lower), void 0 !== t.scientific.upper && (a = t.scientific.upper)), 0 === e) return "0";
                        var s, u = Math.abs(e);
                        return s = u >= o && a > u ? parseFloat(e.toPrecision(i)) + "" : n.toScientific(e, i).replace(/e\+/, "e"), s.replace(/((\.\d*?)(0+))($|e)/, function () {
                            var e = arguments[2],
                                t = arguments[4];
                            return "." !== e ? e + t : t
                        });
                    default:
                        throw new Error('Unknown notation "' + r + '". ' + 'Choose "auto", "scientific", or "fixed".')
                }
            }, n.toScientific = function (e, t) {
                return void 0 !== t ? e.toExponential(t - 1) : e.toExponential()
            }
        }, {}],
        209: [function (e, t, n) {
            var r = e("./number"),
                i = e("./string"),
                o = e("./boolean");
            n.clone = function a(e) {
                if (null == e) return e;
                if ("function" == typeof e.clone) return e.clone();
                if (r.isNumber(e) || i.isString(e) || o.isBoolean(e)) return e;
                if (Array.isArray(e)) return e.map(function (e) {
                    return a(e)
                });
                if (e instanceof Object) {
                    var t = {};
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = a(e[n]))
                }
                throw new TypeError("Cannot clone " + e)
            }, n.extend = function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                return e
            }, n.deepExtend = function s(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (t[n] && t[n].constructor === Object ? (void 0 === e[n] && (e[n] = {}), e[n].constructor === Object ? s(e[n], t[n]) : e[n] = t[n]) : e[n] = t[n]);
                return e
            }, n.deepEqual = function (e, t) {
                var r, i, o;
                if (Array.isArray(e)) {
                    if (!Array.isArray(t)) return !1;
                    for (i = 0, o = e.length; o > i; i++)
                        if (!n.deepEqual(e[i], t[i])) return !1;
                    return !0
                }
                if (e instanceof Object) {
                    if (Array.isArray(t) || !(t instanceof Object)) return !1;
                    for (r in e)
                        if (e.hasOwnProperty(r) && !n.deepEqual(e[r], t[r])) return !1;
                    for (r in t)
                        if (t.hasOwnProperty(r) && !n.deepEqual(e[r], t[r])) return !1;
                    return !0
                }
                return e.valueOf() == t.valueOf()
            }
        }, {
            "./boolean": 205,
            "./number": 208,
            "./string": 210
        }],
        210: [function (e, t, n) {
            function r(e, t) {
                if (Array.isArray(e)) {
                    for (var i = "[", o = e.length, a = 0; o > a; a++) 0 != a && (i += ", "), i += r(e[a], t);
                    return i += "]"
                }
                return n.format(e, t)
            }
            var i = e("./number");
            n.isString = function (e) {
                return e instanceof String || "string" == typeof e
            }, n.endsWith = function (e, t) {
                var n = e.length - t.length,
                    r = e.length;
                return e.substring(n, r) === t
            }, n.format = function (e, t) {
                return i.isNumber(e) ? i.format(e, t) : Array.isArray(e) ? r(e, t) : n.isString(e) ? '"' + e + '"' : e instanceof Object ? "function" == typeof e.format ? e.format(t) : e.toString() : String(e)
            }
        }, {
            "./number": 208
        }],
        211: [function (e, t, n) {
            n.type = function i(e) {
                var t, i = typeof e;
                if ("object" === i) {
                    if (null === e) return "null";
                    if (e instanceof Boolean) return "boolean";
                    if (e instanceof Number) return "number";
                    if (e instanceof String) return "string";
                    if (Array.isArray(e)) return "array";
                    if (e instanceof Date) return "date";
                    if (e.constructor) {
                        for (t in r)
                            if (r.hasOwnProperty(t) && e.constructor == r[t]) return t.toLowerCase();
                        if (e.constructor.name) return e.constructor.name.toLowerCase()
                    }
                }
                return i
            };
            var r = {};
            n.addType = function (e, t) {
                r[e] = t
            }
        }, {}]
    }, {}, [1])(1)
}), Array.prototype.indexOf || (Array.prototype.indexOf = function (e) {
    for (var t = 0; t < this.length; t++)
        if (this[t] == e) return t;
    return -1
}), Array.prototype.forEach || (Array.prototype.forEach = function (e, t) {
    for (var n = 0, r = this.length; r > n; ++n) e.call(t || this, this[n], n, this)
}), Array.isArray || (Array.isArray = function (e) {
    return "[object Array]" === Object.prototype.toString.call(e)
}), Array.prototype.map || (Array.prototype.map = function (e, t) {
    var n, r, i;
    if (null == this) throw new TypeError(" this is null or not defined");
    var o = Object(this),
        a = o.length >>> 0;
    if ("function" != typeof e) throw new TypeError(e + " is not a function");
    for (t && (n = t), r = new Array(a), i = 0; a > i;) {
        var s, u;
        i in o && (s = o[i], u = e.call(n, s, i, o), r[i] = u), i++
    }
    return r
}), Array.prototype.every || (Array.prototype.every = function (e) {
    "use strict";
    if (null == this) throw new TypeError;
    var t = Object(this),
        n = t.length >>> 0;
    if ("function" != typeof e) throw new TypeError;
    for (var r = arguments[1], i = 0; n > i; i++)
        if (i in t && !e.call(r, t[i], i, t)) return !1;
    return !0
}), Array.prototype.some || (Array.prototype.some = function (e) {
    "use strict";
    if (null == this) throw new TypeError;
    var t = Object(this),
        n = t.length >>> 0;
    if ("function" != typeof e) throw new TypeError;
    for (var r = arguments[1], i = 0; n > i; i++)
        if (i in t && e.call(r, t[i], i, t)) return !0;
    return !1
}), Function.prototype.bind || (Function.prototype.bind = function (e) {
    if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    var t = Array.prototype.slice.call(arguments, 1),
        n = this,
        r = function () {},
        i = function () {
            return n.apply(this instanceof r && e ? this : e, t.concat(Array.prototype.slice.call(arguments)))
        };
    return r.prototype = this.prototype, i.prototype = new r, i
});