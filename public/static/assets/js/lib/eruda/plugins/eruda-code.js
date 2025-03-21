/*! eruda-code v2.1.0 https://github.com/liriliri/eruda-code#readme */
!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
      ? define([], e)
      : "object" == typeof exports
        ? (exports.erudaCode = e())
        : (t.erudaCode = e());
})(window, function () {
  return (function (t) {
    var e = {};
    function n(i) {
      if (e[i]) return e[i].exports;
      var r = (e[i] = { i: i, l: !1, exports: {} });
      return t[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function (t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
      }),
      (n.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (n.t = function (t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (
          (n.r(i),
          Object.defineProperty(i, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var r in t)
            n.d(
              i,
              r,
              function (e) {
                return t[e];
              }.bind(null, r),
            );
        return i;
      }),
      (n.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return n.d(e, "a", e), e;
      }),
      (n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.p = "/assets/"),
      n((n.s = 32))
    );
  })([
    function (t, e, n) {
      "use strict";
      (e.__esModule = !0),
        (e.extend = a),
        (e.indexOf = function (t, e) {
          for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n;
          return -1;
        }),
        (e.escapeExpression = function (t) {
          if ("string" != typeof t) {
            if (t && t.toHTML) return t.toHTML();
            if (null == t) return "";
            if (!t) return t + "";
            t = "" + t;
          }
          if (!o.test(t)) return t;
          return t.replace(r, s);
        }),
        (e.isEmpty = function (t) {
          return (!t && 0 !== t) || !(!c(t) || 0 !== t.length);
        }),
        (e.createFrame = function (t) {
          var e = a({}, t);
          return (e._parent = t), e;
        }),
        (e.blockParams = function (t, e) {
          return (t.path = e), t;
        }),
        (e.appendContextPath = function (t, e) {
          return (t ? t + "." : "") + e;
        });
      var i = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#x27;",
          "`": "&#x60;",
          "=": "&#x3D;",
        },
        r = /[&<>"'`=]/g,
        o = /[&<>"'`=]/;
      function s(t) {
        return i[t];
      }
      function a(t) {
        for (var e = 1; e < arguments.length; e++)
          for (var n in arguments[e])
            Object.prototype.hasOwnProperty.call(arguments[e], n) &&
              (t[n] = arguments[e][n]);
        return t;
      }
      var u = Object.prototype.toString;
      e.toString = u;
      var l = function (t) {
        return "function" == typeof t;
      };
      l(/x/) &&
        (e.isFunction = l =
          function (t) {
            return "function" == typeof t && "[object Function]" === u.call(t);
          }),
        (e.isFunction = l);
      var c =
        Array.isArray ||
        function (t) {
          return (
            !(!t || "object" != typeof t) && "[object Array]" === u.call(t)
          );
        };
      e.isArray = c;
    },
    function (t, e) {
      function n(e) {
        return (
          (t.exports = n =
            Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports),
          n(e)
        );
      }
      (t.exports = n),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e, n) {
      "use strict";
      e.__esModule = !0;
      var i = [
        "description",
        "fileName",
        "lineNumber",
        "endLineNumber",
        "message",
        "name",
        "number",
        "stack",
      ];
      function r(t, e) {
        var n = e && e.loc,
          o = void 0,
          s = void 0,
          a = void 0,
          u = void 0;
        n &&
          ((o = n.start.line),
          (s = n.end.line),
          (a = n.start.column),
          (u = n.end.column),
          (t += " - " + o + ":" + a));
        for (
          var l = Error.prototype.constructor.call(this, t), c = 0;
          c < i.length;
          c++
        )
          this[i[c]] = l[i[c]];
        Error.captureStackTrace && Error.captureStackTrace(this, r);
        try {
          n &&
            ((this.lineNumber = o),
            (this.endLineNumber = s),
            Object.defineProperty
              ? (Object.defineProperty(this, "column", {
                  value: a,
                  enumerable: !0,
                }),
                Object.defineProperty(this, "endColumn", {
                  value: u,
                  enumerable: !0,
                }))
              : ((this.column = a), (this.endColumn = u)));
        } catch (t) {}
      }
      (r.prototype = new Error()), (e.default = r), (t.exports = e.default);
    },
    function (t, e, n) {
      var i = n(36);
      function r() {
        return (
          "undefined" != typeof Reflect && Reflect.get
            ? ((t.exports = r = Reflect.get.bind()),
              (t.exports.__esModule = !0),
              (t.exports.default = t.exports))
            : ((t.exports = r =
                function (t, e, n) {
                  var r = i(t, e);
                  if (r) {
                    var o = Object.getOwnPropertyDescriptor(r, e);
                    return o.get
                      ? o.get.call(arguments.length < 3 ? t : n)
                      : o.value;
                  }
                }),
              (t.exports.__esModule = !0),
              (t.exports.default = t.exports)),
          r.apply(this, arguments)
        );
      }
      (t.exports = r),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (t) {
        "object" == typeof window && (n = window);
      }
      t.exports = n;
    },
    function (t, e, n) {
      var i = n(18);
      (e = Object.keys
        ? Object.keys
        : function (t) {
            var e = [];
            for (var n in t) i(t, n) && e.push(n);
            return e;
          }),
        (t.exports = e);
    },
    function (t, e, n) {
      "use strict";
      t.exports = function (t) {
        var e = [];
        return (
          (e.toString = function () {
            return this.map(function (e) {
              var n = (function (t, e) {
                var n = t[1] || "",
                  i = t[3];
                if (!i) return n;
                if (e && "function" == typeof btoa) {
                  var r =
                      ((s = i),
                      (a = btoa(
                        unescape(encodeURIComponent(JSON.stringify(s))),
                      )),
                      (u =
                        "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                          a,
                        )),
                      "/*# ".concat(u, " */")),
                    o = i.sources.map(function (t) {
                      return "/*# sourceURL="
                        .concat(i.sourceRoot || "")
                        .concat(t, " */");
                    });
                  return [n].concat(o).concat([r]).join("\n");
                }
                var s, a, u;
                return [n].join("\n");
              })(e, t);
              return e[2] ? "@media ".concat(e[2], " {").concat(n, "}") : n;
            }).join("");
          }),
          (e.i = function (t, n, i) {
            "string" == typeof t && (t = [[null, t, ""]]);
            var r = {};
            if (i)
              for (var o = 0; o < this.length; o++) {
                var s = this[o][0];
                null != s && (r[s] = !0);
              }
            for (var a = 0; a < t.length; a++) {
              var u = [].concat(t[a]);
              (i && r[u[0]]) ||
                (n &&
                  (u[2]
                    ? (u[2] = "".concat(n, " and ").concat(u[2]))
                    : (u[2] = n)),
                e.push(u));
            }
          }),
          e
        );
      };
    },
    function (t, e) {
      function n(e) {
        return (
          (t.exports = n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports),
          n(e)
        );
      }
      (t.exports = n),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e) {
      (e = function (t) {
        return void 0 === t;
      }),
        (t.exports = e);
    },
    function (t, e) {
      var n = Object.prototype.toString;
      (e = function (t) {
        return n.call(t);
      }),
        (t.exports = e);
    },
    function (t, e, n) {
      var i = n(9);
      (e = function (t) {
        var e = i(t);
        return (
          "[object Function]" === e ||
          "[object GeneratorFunction]" === e ||
          "[object AsyncFunction]" === e
        );
      }),
        (t.exports = e);
    },
    function (t, e, n) {
      var i = n(9);
      (e = Array.isArray
        ? Array.isArray
        : function (t) {
            return "[object Array]" === i(t);
          }),
        (t.exports = e);
    },
    function (t, e, n) {
      var i;
      !(function () {
        var n;
        !(function () {
          "use strict";
          var t = [
              function (t, e, n) {
                var i = n(1).Beautifier,
                  r = n(5).Options;
                (t.exports = function (t, e) {
                  return new i(t, e).beautify();
                }),
                  (t.exports.defaultOptions = function () {
                    return new r();
                  });
              },
              function (t, e, n) {
                var i = n(2).Output,
                  r = n(3).Token,
                  o = n(4),
                  s = n(5).Options,
                  a = n(7).Tokenizer,
                  u = n(7).line_starters,
                  l = n(7).positionable_operators,
                  c = n(7).TOKEN;
                function h(t, e) {
                  return -1 !== e.indexOf(t);
                }
                function p(t, e) {
                  return t && t.type === c.RESERVED && t.text === e;
                }
                function d(t, e) {
                  return t && t.type === c.RESERVED && h(t.text, e);
                }
                var _ = [
                    "case",
                    "return",
                    "do",
                    "if",
                    "throw",
                    "else",
                    "await",
                    "break",
                    "continue",
                    "async",
                  ],
                  f = (function (t) {
                    for (var e = {}, n = 0; n < t.length; n++)
                      e[t[n].replace(/-/g, "_")] = t[n];
                    return e;
                  })(["before-newline", "after-newline", "preserve-newline"]),
                  g = [f.before_newline, f.preserve_newline],
                  m = "BlockStatement",
                  v = "Statement",
                  y = "ObjectLiteral",
                  b = "ArrayLiteral",
                  w = "ForInitializer",
                  x = "Conditional",
                  k = "Expression";
                function C(t, e) {
                  e.multiline_frame ||
                    e.mode === w ||
                    e.mode === x ||
                    t.remove_indent(e.start_line_index);
                }
                function T(t) {
                  return t === b;
                }
                function S(t) {
                  return h(t, [k, w, x]);
                }
                function M(t, e) {
                  (e = e || {}),
                    (this._source_text = t || ""),
                    (this._output = null),
                    (this._tokens = null),
                    (this._last_last_text = null),
                    (this._flags = null),
                    (this._previous_flags = null),
                    (this._flag_store = null),
                    (this._options = new s(e));
                }
                (M.prototype.create_flags = function (t, e) {
                  var n = 0;
                  return (
                    t &&
                      ((n = t.indentation_level),
                      !this._output.just_added_newline() &&
                        t.line_indent_level > n &&
                        (n = t.line_indent_level)),
                    {
                      mode: e,
                      parent: t,
                      last_token: t ? t.last_token : new r(c.START_BLOCK, ""),
                      last_word: t ? t.last_word : "",
                      declaration_statement: !1,
                      declaration_assignment: !1,
                      multiline_frame: !1,
                      inline_frame: !1,
                      if_block: !1,
                      else_block: !1,
                      class_start_block: !1,
                      do_block: !1,
                      do_while: !1,
                      import_block: !1,
                      in_case_statement: !1,
                      in_case: !1,
                      case_body: !1,
                      case_block: !1,
                      indentation_level: n,
                      alignment: 0,
                      line_indent_level: t ? t.line_indent_level : n,
                      start_line_index: this._output.get_line_number(),
                      ternary_depth: 0,
                    }
                  );
                }),
                  (M.prototype._reset = function (t) {
                    var e = t.match(/^[\t ]*/)[0];
                    (this._last_last_text = ""),
                      (this._output = new i(this._options, e)),
                      (this._output.raw = this._options.test_output_raw),
                      (this._flag_store = []),
                      this.set_mode(m);
                    var n = new a(t, this._options);
                    return (this._tokens = n.tokenize()), t;
                  }),
                  (M.prototype.beautify = function () {
                    if (this._options.disabled) return this._source_text;
                    var t = this._reset(this._source_text),
                      e = this._options.eol;
                    "auto" === this._options.eol &&
                      ((e = "\n"),
                      t &&
                        o.lineBreak.test(t || "") &&
                        (e = t.match(o.lineBreak)[0]));
                    for (var n = this._tokens.next(); n; )
                      this.handle_token(n),
                        (this._last_last_text = this._flags.last_token.text),
                        (this._flags.last_token = n),
                        (n = this._tokens.next());
                    return this._output.get_code(e);
                  }),
                  (M.prototype.handle_token = function (t, e) {
                    t.type === c.START_EXPR
                      ? this.handle_start_expr(t)
                      : t.type === c.END_EXPR
                        ? this.handle_end_expr(t)
                        : t.type === c.START_BLOCK
                          ? this.handle_start_block(t)
                          : t.type === c.END_BLOCK
                            ? this.handle_end_block(t)
                            : t.type === c.WORD || t.type === c.RESERVED
                              ? this.handle_word(t)
                              : t.type === c.SEMICOLON
                                ? this.handle_semicolon(t)
                                : t.type === c.STRING
                                  ? this.handle_string(t)
                                  : t.type === c.EQUALS
                                    ? this.handle_equals(t)
                                    : t.type === c.OPERATOR
                                      ? this.handle_operator(t)
                                      : t.type === c.COMMA
                                        ? this.handle_comma(t)
                                        : t.type === c.BLOCK_COMMENT
                                          ? this.handle_block_comment(t, e)
                                          : t.type === c.COMMENT
                                            ? this.handle_comment(t, e)
                                            : t.type === c.DOT
                                              ? this.handle_dot(t)
                                              : t.type === c.EOF
                                                ? this.handle_eof(t)
                                                : (t.type,
                                                  c.UNKNOWN,
                                                  this.handle_unknown(t, e));
                  }),
                  (M.prototype.handle_whitespace_and_comments = function (
                    t,
                    e,
                  ) {
                    var n = t.newlines,
                      i =
                        this._options.keep_array_indentation &&
                        T(this._flags.mode);
                    if (t.comments_before)
                      for (var r = t.comments_before.next(); r; )
                        this.handle_whitespace_and_comments(r, e),
                          this.handle_token(r, e),
                          (r = t.comments_before.next());
                    if (i)
                      for (var o = 0; o < n; o += 1)
                        this.print_newline(o > 0, e);
                    else if (
                      (this._options.max_preserve_newlines &&
                        n > this._options.max_preserve_newlines &&
                        (n = this._options.max_preserve_newlines),
                      this._options.preserve_newlines && n > 1)
                    ) {
                      this.print_newline(!1, e);
                      for (var s = 1; s < n; s += 1) this.print_newline(!0, e);
                    }
                  });
                var O = [
                  "async",
                  "break",
                  "continue",
                  "return",
                  "throw",
                  "yield",
                ];
                (M.prototype.allow_wrap_or_preserved_newline = function (t, e) {
                  if (
                    ((e = void 0 !== e && e),
                    !this._output.just_added_newline())
                  ) {
                    var n =
                      (this._options.preserve_newlines && t.newlines) || e;
                    if (h(this._flags.last_token.text, l) || h(t.text, l)) {
                      var i =
                        (h(this._flags.last_token.text, l) &&
                          h(this._options.operator_position, g)) ||
                        h(t.text, l);
                      n = n && i;
                    }
                    if (n) this.print_newline(!1, !0);
                    else if (this._options.wrap_line_length) {
                      if (d(this._flags.last_token, O)) return;
                      this._output.set_wrap_point();
                    }
                  }
                }),
                  (M.prototype.print_newline = function (t, e) {
                    if (
                      !e &&
                      ";" !== this._flags.last_token.text &&
                      "," !== this._flags.last_token.text &&
                      "=" !== this._flags.last_token.text &&
                      (this._flags.last_token.type !== c.OPERATOR ||
                        "--" === this._flags.last_token.text ||
                        "++" === this._flags.last_token.text)
                    )
                      for (
                        var n = this._tokens.peek();
                        !(
                          this._flags.mode !== v ||
                          (this._flags.if_block && p(n, "else")) ||
                          this._flags.do_block
                        );

                      )
                        this.restore_mode();
                    this._output.add_new_line(t) &&
                      (this._flags.multiline_frame = !0);
                  }),
                  (M.prototype.print_token_line_indentation = function (t) {
                    this._output.just_added_newline() &&
                      (this._options.keep_array_indentation &&
                      t.newlines &&
                      ("[" === t.text || T(this._flags.mode))
                        ? (this._output.current_line.set_indent(-1),
                          this._output.current_line.push(t.whitespace_before),
                          (this._output.space_before_token = !1))
                        : this._output.set_indent(
                            this._flags.indentation_level,
                            this._flags.alignment,
                          ) &&
                          (this._flags.line_indent_level =
                            this._flags.indentation_level));
                  }),
                  (M.prototype.print_token = function (t) {
                    if (this._output.raw) this._output.add_raw_token(t);
                    else {
                      if (
                        this._options.comma_first &&
                        t.previous &&
                        t.previous.type === c.COMMA &&
                        this._output.just_added_newline() &&
                        "," === this._output.previous_line.last()
                      ) {
                        var e = this._output.previous_line.pop();
                        this._output.previous_line.is_empty() &&
                          (this._output.previous_line.push(e),
                          this._output.trim(!0),
                          this._output.current_line.pop(),
                          this._output.trim()),
                          this.print_token_line_indentation(t),
                          this._output.add_token(","),
                          (this._output.space_before_token = !0);
                      }
                      this.print_token_line_indentation(t),
                        (this._output.non_breaking_space = !0),
                        this._output.add_token(t.text),
                        this._output.previous_token_wrapped &&
                          (this._flags.multiline_frame = !0);
                    }
                  }),
                  (M.prototype.indent = function () {
                    (this._flags.indentation_level += 1),
                      this._output.set_indent(
                        this._flags.indentation_level,
                        this._flags.alignment,
                      );
                  }),
                  (M.prototype.deindent = function () {
                    this._flags.indentation_level > 0 &&
                      (!this._flags.parent ||
                        this._flags.indentation_level >
                          this._flags.parent.indentation_level) &&
                      ((this._flags.indentation_level -= 1),
                      this._output.set_indent(
                        this._flags.indentation_level,
                        this._flags.alignment,
                      ));
                  }),
                  (M.prototype.set_mode = function (t) {
                    this._flags
                      ? (this._flag_store.push(this._flags),
                        (this._previous_flags = this._flags))
                      : (this._previous_flags = this.create_flags(null, t)),
                      (this._flags = this.create_flags(
                        this._previous_flags,
                        t,
                      )),
                      this._output.set_indent(
                        this._flags.indentation_level,
                        this._flags.alignment,
                      );
                  }),
                  (M.prototype.restore_mode = function () {
                    this._flag_store.length > 0 &&
                      ((this._previous_flags = this._flags),
                      (this._flags = this._flag_store.pop()),
                      this._previous_flags.mode === v &&
                        C(this._output, this._previous_flags),
                      this._output.set_indent(
                        this._flags.indentation_level,
                        this._flags.alignment,
                      ));
                  }),
                  (M.prototype.start_of_object_property = function () {
                    return (
                      this._flags.parent.mode === y &&
                      this._flags.mode === v &&
                      ((":" === this._flags.last_token.text &&
                        0 === this._flags.ternary_depth) ||
                        d(this._flags.last_token, ["get", "set"]))
                    );
                  }),
                  (M.prototype.start_of_statement = function (t) {
                    var e = !1;
                    return (
                      !!(e =
                        (e =
                          (e =
                            (e =
                              (e =
                                (e =
                                  (e =
                                    e ||
                                    (d(this._flags.last_token, [
                                      "var",
                                      "let",
                                      "const",
                                    ]) &&
                                      t.type === c.WORD)) ||
                                  p(this._flags.last_token, "do")) ||
                                (!(
                                  this._flags.parent.mode === y &&
                                  this._flags.mode === v
                                ) &&
                                  d(this._flags.last_token, O) &&
                                  !t.newlines)) ||
                              (p(this._flags.last_token, "else") &&
                                !(p(t, "if") && !t.comments_before))) ||
                            (this._flags.last_token.type === c.END_EXPR &&
                              (this._previous_flags.mode === w ||
                                this._previous_flags.mode === x))) ||
                          (this._flags.last_token.type === c.WORD &&
                            this._flags.mode === m &&
                            !this._flags.in_case &&
                            !("--" === t.text || "++" === t.text) &&
                            "function" !== this._last_last_text &&
                            t.type !== c.WORD &&
                            t.type !== c.RESERVED)) ||
                        (this._flags.mode === y &&
                          ((":" === this._flags.last_token.text &&
                            0 === this._flags.ternary_depth) ||
                            d(this._flags.last_token, ["get", "set"])))) &&
                      (this.set_mode(v),
                      this.indent(),
                      this.handle_whitespace_and_comments(t, !0),
                      this.start_of_object_property() ||
                        this.allow_wrap_or_preserved_newline(
                          t,
                          d(t, ["do", "for", "if", "while"]),
                        ),
                      !0)
                    );
                  }),
                  (M.prototype.handle_start_expr = function (t) {
                    this.start_of_statement(t) ||
                      this.handle_whitespace_and_comments(t);
                    var e = k;
                    if ("[" === t.text) {
                      if (
                        this._flags.last_token.type === c.WORD ||
                        ")" === this._flags.last_token.text
                      )
                        return (
                          d(this._flags.last_token, u) &&
                            (this._output.space_before_token = !0),
                          this.print_token(t),
                          this.set_mode(e),
                          this.indent(),
                          void (
                            this._options.space_in_paren &&
                            (this._output.space_before_token = !0)
                          )
                        );
                      (e = b),
                        T(this._flags.mode) &&
                          (("[" !== this._flags.last_token.text &&
                            ("," !== this._flags.last_token.text ||
                              ("]" !== this._last_last_text &&
                                "}" !== this._last_last_text))) ||
                            this._options.keep_array_indentation ||
                            this.print_newline()),
                        h(this._flags.last_token.type, [
                          c.START_EXPR,
                          c.END_EXPR,
                          c.WORD,
                          c.OPERATOR,
                          c.DOT,
                        ]) || (this._output.space_before_token = !0);
                    } else {
                      if (this._flags.last_token.type === c.RESERVED)
                        "for" === this._flags.last_token.text
                          ? ((this._output.space_before_token =
                              this._options.space_before_conditional),
                            (e = w))
                          : h(this._flags.last_token.text, [
                                "if",
                                "while",
                                "switch",
                              ])
                            ? ((this._output.space_before_token =
                                this._options.space_before_conditional),
                              (e = x))
                            : h(this._flags.last_word, ["await", "async"])
                              ? (this._output.space_before_token = !0)
                              : "import" === this._flags.last_token.text &&
                                  "" === t.whitespace_before
                                ? (this._output.space_before_token = !1)
                                : (h(this._flags.last_token.text, u) ||
                                    "catch" === this._flags.last_token.text) &&
                                  (this._output.space_before_token = !0);
                      else if (
                        this._flags.last_token.type === c.EQUALS ||
                        this._flags.last_token.type === c.OPERATOR
                      )
                        this.start_of_object_property() ||
                          this.allow_wrap_or_preserved_newline(t);
                      else if (this._flags.last_token.type === c.WORD) {
                        this._output.space_before_token = !1;
                        var n = this._tokens.peek(-3);
                        if (this._options.space_after_named_function && n) {
                          var i = this._tokens.peek(-4);
                          d(n, ["async", "function"]) ||
                          ("*" === n.text && d(i, ["async", "function"]))
                            ? (this._output.space_before_token = !0)
                            : this._flags.mode === y
                              ? ("{" !== n.text &&
                                  "," !== n.text &&
                                  ("*" !== n.text ||
                                    ("{" !== i.text && "," !== i.text))) ||
                                (this._output.space_before_token = !0)
                              : this._flags.parent &&
                                this._flags.parent.class_start_block &&
                                (this._output.space_before_token = !0);
                        }
                      } else this.allow_wrap_or_preserved_newline(t);
                      ((this._flags.last_token.type === c.RESERVED &&
                        ("function" === this._flags.last_word ||
                          "typeof" === this._flags.last_word)) ||
                        ("*" === this._flags.last_token.text &&
                          (h(this._last_last_text, ["function", "yield"]) ||
                            (this._flags.mode === y &&
                              h(this._last_last_text, ["{", ","]))))) &&
                        (this._output.space_before_token =
                          this._options.space_after_anon_function);
                    }
                    ";" === this._flags.last_token.text ||
                    this._flags.last_token.type === c.START_BLOCK
                      ? this.print_newline()
                      : (this._flags.last_token.type !== c.END_EXPR &&
                          this._flags.last_token.type !== c.START_EXPR &&
                          this._flags.last_token.type !== c.END_BLOCK &&
                          "." !== this._flags.last_token.text &&
                          this._flags.last_token.type !== c.COMMA) ||
                        this.allow_wrap_or_preserved_newline(t, t.newlines),
                      this.print_token(t),
                      this.set_mode(e),
                      this._options.space_in_paren &&
                        (this._output.space_before_token = !0),
                      this.indent();
                  }),
                  (M.prototype.handle_end_expr = function (t) {
                    for (; this._flags.mode === v; ) this.restore_mode();
                    this.handle_whitespace_and_comments(t),
                      this._flags.multiline_frame &&
                        this.allow_wrap_or_preserved_newline(
                          t,
                          "]" === t.text &&
                            T(this._flags.mode) &&
                            !this._options.keep_array_indentation,
                        ),
                      this._options.space_in_paren &&
                        (this._flags.last_token.type !== c.START_EXPR ||
                        this._options.space_in_empty_paren
                          ? (this._output.space_before_token = !0)
                          : (this._output.trim(),
                            (this._output.space_before_token = !1))),
                      this.deindent(),
                      this.print_token(t),
                      this.restore_mode(),
                      C(this._output, this._previous_flags),
                      this._flags.do_while &&
                        this._previous_flags.mode === x &&
                        ((this._previous_flags.mode = k),
                        (this._flags.do_block = !1),
                        (this._flags.do_while = !1));
                  }),
                  (M.prototype.handle_start_block = function (t) {
                    this.handle_whitespace_and_comments(t);
                    var e = this._tokens.peek(),
                      n = this._tokens.peek(1);
                    "switch" === this._flags.last_word &&
                    this._flags.last_token.type === c.END_EXPR
                      ? (this.set_mode(m), (this._flags.in_case_statement = !0))
                      : this._flags.case_body
                        ? this.set_mode(m)
                        : n &&
                            ((h(n.text, [":", ","]) &&
                              h(e.type, [c.STRING, c.WORD, c.RESERVED])) ||
                              (h(e.text, ["get", "set", "..."]) &&
                                h(n.type, [c.WORD, c.RESERVED])))
                          ? h(this._last_last_text, ["class", "interface"]) &&
                            !h(n.text, [":", ","])
                            ? this.set_mode(m)
                            : this.set_mode(y)
                          : this._flags.last_token.type === c.OPERATOR &&
                              "=>" === this._flags.last_token.text
                            ? this.set_mode(m)
                            : h(this._flags.last_token.type, [
                                  c.EQUALS,
                                  c.START_EXPR,
                                  c.COMMA,
                                  c.OPERATOR,
                                ]) ||
                                d(this._flags.last_token, [
                                  "return",
                                  "throw",
                                  "import",
                                  "default",
                                ])
                              ? this.set_mode(y)
                              : this.set_mode(m),
                      this._flags.last_token &&
                        d(this._flags.last_token.previous, [
                          "class",
                          "extends",
                        ]) &&
                        (this._flags.class_start_block = !0);
                    var i = !e.comments_before && "}" === e.text,
                      r =
                        i &&
                        "function" === this._flags.last_word &&
                        this._flags.last_token.type === c.END_EXPR;
                    if (this._options.brace_preserve_inline) {
                      var o = 0,
                        s = null;
                      this._flags.inline_frame = !0;
                      do {
                        if (
                          ((o += 1), (s = this._tokens.peek(o - 1)).newlines)
                        ) {
                          this._flags.inline_frame = !1;
                          break;
                        }
                      } while (
                        s.type !== c.EOF &&
                        (s.type !== c.END_BLOCK || s.opened !== t)
                      );
                    }
                    ("expand" === this._options.brace_style ||
                      ("none" === this._options.brace_style && t.newlines)) &&
                    !this._flags.inline_frame
                      ? this._flags.last_token.type !== c.OPERATOR &&
                        (r ||
                          this._flags.last_token.type === c.EQUALS ||
                          (d(this._flags.last_token, _) &&
                            "else" !== this._flags.last_token.text))
                        ? (this._output.space_before_token = !0)
                        : this.print_newline(!1, !0)
                      : (!T(this._previous_flags.mode) ||
                          (this._flags.last_token.type !== c.START_EXPR &&
                            this._flags.last_token.type !== c.COMMA) ||
                          ((this._flags.last_token.type === c.COMMA ||
                            this._options.space_in_paren) &&
                            (this._output.space_before_token = !0),
                          (this._flags.last_token.type === c.COMMA ||
                            (this._flags.last_token.type === c.START_EXPR &&
                              this._flags.inline_frame)) &&
                            (this.allow_wrap_or_preserved_newline(t),
                            (this._previous_flags.multiline_frame =
                              this._previous_flags.multiline_frame ||
                              this._flags.multiline_frame),
                            (this._flags.multiline_frame = !1))),
                        this._flags.last_token.type !== c.OPERATOR &&
                          this._flags.last_token.type !== c.START_EXPR &&
                          (this._flags.last_token.type !== c.START_BLOCK ||
                          this._flags.inline_frame
                            ? (this._output.space_before_token = !0)
                            : this.print_newline())),
                      this.print_token(t),
                      this.indent(),
                      i ||
                        (this._options.brace_preserve_inline &&
                          this._flags.inline_frame) ||
                        this.print_newline();
                  }),
                  (M.prototype.handle_end_block = function (t) {
                    for (
                      this.handle_whitespace_and_comments(t);
                      this._flags.mode === v;

                    )
                      this.restore_mode();
                    var e = this._flags.last_token.type === c.START_BLOCK;
                    this._flags.inline_frame && !e
                      ? (this._output.space_before_token = !0)
                      : "expand" === this._options.brace_style
                        ? e || this.print_newline()
                        : e ||
                          (T(this._flags.mode) &&
                          this._options.keep_array_indentation
                            ? ((this._options.keep_array_indentation = !1),
                              this.print_newline(),
                              (this._options.keep_array_indentation = !0))
                            : this.print_newline()),
                      this.restore_mode(),
                      this.print_token(t);
                  }),
                  (M.prototype.handle_word = function (t) {
                    if (t.type === c.RESERVED)
                      if (h(t.text, ["set", "get"]) && this._flags.mode !== y)
                        t.type = c.WORD;
                      else if (
                        "import" === t.text &&
                        h(this._tokens.peek().text, ["(", "."])
                      )
                        t.type = c.WORD;
                      else if (
                        h(t.text, ["as", "from"]) &&
                        !this._flags.import_block
                      )
                        t.type = c.WORD;
                      else if (this._flags.mode === y) {
                        ":" === this._tokens.peek().text && (t.type = c.WORD);
                      }
                    if (
                      (this.start_of_statement(t)
                        ? d(this._flags.last_token, ["var", "let", "const"]) &&
                          t.type === c.WORD &&
                          (this._flags.declaration_statement = !0)
                        : !t.newlines ||
                            S(this._flags.mode) ||
                            (this._flags.last_token.type === c.OPERATOR &&
                              "--" !== this._flags.last_token.text &&
                              "++" !== this._flags.last_token.text) ||
                            this._flags.last_token.type === c.EQUALS ||
                            (!this._options.preserve_newlines &&
                              d(this._flags.last_token, [
                                "var",
                                "let",
                                "const",
                                "set",
                                "get",
                              ]))
                          ? this.handle_whitespace_and_comments(t)
                          : (this.handle_whitespace_and_comments(t),
                            this.print_newline()),
                      this._flags.do_block && !this._flags.do_while)
                    ) {
                      if (p(t, "while"))
                        return (
                          (this._output.space_before_token = !0),
                          this.print_token(t),
                          (this._output.space_before_token = !0),
                          void (this._flags.do_while = !0)
                        );
                      this.print_newline(), (this._flags.do_block = !1);
                    }
                    if (this._flags.if_block)
                      if (!this._flags.else_block && p(t, "else"))
                        this._flags.else_block = !0;
                      else {
                        for (; this._flags.mode === v; ) this.restore_mode();
                        (this._flags.if_block = !1),
                          (this._flags.else_block = !1);
                      }
                    if (
                      this._flags.in_case_statement &&
                      d(t, ["case", "default"])
                    )
                      return (
                        this.print_newline(),
                        this._flags.case_block ||
                          (!this._flags.case_body &&
                            !this._options.jslint_happy) ||
                          this.deindent(),
                        (this._flags.case_body = !1),
                        this.print_token(t),
                        void (this._flags.in_case = !0)
                      );
                    if (
                      ((this._flags.last_token.type !== c.COMMA &&
                        this._flags.last_token.type !== c.START_EXPR &&
                        this._flags.last_token.type !== c.EQUALS &&
                        this._flags.last_token.type !== c.OPERATOR) ||
                        this.start_of_object_property() ||
                        this.allow_wrap_or_preserved_newline(t),
                      p(t, "function"))
                    )
                      return (
                        (h(this._flags.last_token.text, ["}", ";"]) ||
                          (this._output.just_added_newline() &&
                            !h(this._flags.last_token.text, [
                              "(",
                              "[",
                              "{",
                              ":",
                              "=",
                              ",",
                            ]) &&
                            this._flags.last_token.type !== c.OPERATOR)) &&
                          (this._output.just_added_blankline() ||
                            t.comments_before ||
                            (this.print_newline(), this.print_newline(!0))),
                        this._flags.last_token.type === c.RESERVED ||
                        this._flags.last_token.type === c.WORD
                          ? d(this._flags.last_token, [
                              "get",
                              "set",
                              "new",
                              "export",
                            ]) ||
                            d(this._flags.last_token, O) ||
                            (p(this._flags.last_token, "default") &&
                              "export" === this._last_last_text) ||
                            "declare" === this._flags.last_token.text
                            ? (this._output.space_before_token = !0)
                            : this.print_newline()
                          : this._flags.last_token.type === c.OPERATOR ||
                              "=" === this._flags.last_token.text
                            ? (this._output.space_before_token = !0)
                            : (this._flags.multiline_frame ||
                                (!S(this._flags.mode) &&
                                  !T(this._flags.mode))) &&
                              this.print_newline(),
                        this.print_token(t),
                        void (this._flags.last_word = t.text)
                      );
                    var e = "NONE";
                    (this._flags.last_token.type === c.END_BLOCK
                      ? this._previous_flags.inline_frame
                        ? (e = "SPACE")
                        : d(t, ["else", "catch", "finally", "from"])
                          ? "expand" === this._options.brace_style ||
                            "end-expand" === this._options.brace_style ||
                            ("none" === this._options.brace_style && t.newlines)
                            ? (e = "NEWLINE")
                            : ((e = "SPACE"),
                              (this._output.space_before_token = !0))
                          : (e = "NEWLINE")
                      : this._flags.last_token.type === c.SEMICOLON &&
                          this._flags.mode === m
                        ? (e = "NEWLINE")
                        : this._flags.last_token.type === c.SEMICOLON &&
                            S(this._flags.mode)
                          ? (e = "SPACE")
                          : this._flags.last_token.type === c.STRING
                            ? (e = "NEWLINE")
                            : this._flags.last_token.type === c.RESERVED ||
                                this._flags.last_token.type === c.WORD ||
                                ("*" === this._flags.last_token.text &&
                                  (h(this._last_last_text, [
                                    "function",
                                    "yield",
                                  ]) ||
                                    (this._flags.mode === y &&
                                      h(this._last_last_text, ["{", ","]))))
                              ? (e = "SPACE")
                              : this._flags.last_token.type === c.START_BLOCK
                                ? (e = this._flags.inline_frame
                                    ? "SPACE"
                                    : "NEWLINE")
                                : this._flags.last_token.type === c.END_EXPR &&
                                  ((this._output.space_before_token = !0),
                                  (e = "NEWLINE")),
                    d(t, u) &&
                      ")" !== this._flags.last_token.text &&
                      (e =
                        this._flags.inline_frame ||
                        "else" === this._flags.last_token.text ||
                        "export" === this._flags.last_token.text
                          ? "SPACE"
                          : "NEWLINE"),
                    d(t, ["else", "catch", "finally"]))
                      ? (this._flags.last_token.type !== c.END_BLOCK ||
                          this._previous_flags.mode !== m ||
                          "expand" === this._options.brace_style ||
                          "end-expand" === this._options.brace_style ||
                          ("none" === this._options.brace_style &&
                            t.newlines)) &&
                        !this._flags.inline_frame
                        ? this.print_newline()
                        : (this._output.trim(!0),
                          "}" !== this._output.current_line.last() &&
                            this.print_newline(),
                          (this._output.space_before_token = !0))
                      : "NEWLINE" === e
                        ? d(this._flags.last_token, _) ||
                          ("declare" === this._flags.last_token.text &&
                            d(t, ["var", "let", "const"]))
                          ? (this._output.space_before_token = !0)
                          : this._flags.last_token.type !== c.END_EXPR
                            ? (this._flags.last_token.type === c.START_EXPR &&
                                d(t, ["var", "let", "const"])) ||
                              ":" === this._flags.last_token.text ||
                              (p(t, "if") && p(t.previous, "else")
                                ? (this._output.space_before_token = !0)
                                : this.print_newline())
                            : d(t, u) &&
                              ")" !== this._flags.last_token.text &&
                              this.print_newline()
                        : this._flags.multiline_frame &&
                            T(this._flags.mode) &&
                            "," === this._flags.last_token.text &&
                            "}" === this._last_last_text
                          ? this.print_newline()
                          : "SPACE" === e &&
                            (this._output.space_before_token = !0);
                    !t.previous ||
                      (t.previous.type !== c.WORD &&
                        t.previous.type !== c.RESERVED) ||
                      (this._output.space_before_token = !0),
                      this.print_token(t),
                      (this._flags.last_word = t.text),
                      t.type === c.RESERVED &&
                        ("do" === t.text
                          ? (this._flags.do_block = !0)
                          : "if" === t.text
                            ? (this._flags.if_block = !0)
                            : "import" === t.text
                              ? (this._flags.import_block = !0)
                              : this._flags.import_block &&
                                p(t, "from") &&
                                (this._flags.import_block = !1));
                  }),
                  (M.prototype.handle_semicolon = function (t) {
                    this.start_of_statement(t)
                      ? (this._output.space_before_token = !1)
                      : this.handle_whitespace_and_comments(t);
                    for (
                      var e = this._tokens.peek();
                      !(
                        this._flags.mode !== v ||
                        (this._flags.if_block && p(e, "else")) ||
                        this._flags.do_block
                      );

                    )
                      this.restore_mode();
                    this._flags.import_block && (this._flags.import_block = !1),
                      this.print_token(t);
                  }),
                  (M.prototype.handle_string = function (t) {
                    (!t.text.startsWith("`") ||
                      0 !== t.newlines ||
                      "" !== t.whitespace_before ||
                      (")" !== t.previous.text &&
                        this._flags.last_token.type !== c.WORD)) &&
                      (this.start_of_statement(t)
                        ? (this._output.space_before_token = !0)
                        : (this.handle_whitespace_and_comments(t),
                          this._flags.last_token.type === c.RESERVED ||
                          this._flags.last_token.type === c.WORD ||
                          this._flags.inline_frame
                            ? (this._output.space_before_token = !0)
                            : this._flags.last_token.type === c.COMMA ||
                                this._flags.last_token.type === c.START_EXPR ||
                                this._flags.last_token.type === c.EQUALS ||
                                this._flags.last_token.type === c.OPERATOR
                              ? this.start_of_object_property() ||
                                this.allow_wrap_or_preserved_newline(t)
                              : !t.text.startsWith("`") ||
                                  this._flags.last_token.type !== c.END_EXPR ||
                                  ("]" !== t.previous.text &&
                                    ")" !== t.previous.text) ||
                                  0 !== t.newlines
                                ? this.print_newline()
                                : (this._output.space_before_token = !0))),
                      this.print_token(t);
                  }),
                  (M.prototype.handle_equals = function (t) {
                    this.start_of_statement(t) ||
                      this.handle_whitespace_and_comments(t),
                      this._flags.declaration_statement &&
                        (this._flags.declaration_assignment = !0),
                      (this._output.space_before_token = !0),
                      this.print_token(t),
                      (this._output.space_before_token = !0);
                  }),
                  (M.prototype.handle_comma = function (t) {
                    this.handle_whitespace_and_comments(t, !0),
                      this.print_token(t),
                      (this._output.space_before_token = !0),
                      this._flags.declaration_statement
                        ? (S(this._flags.parent.mode) &&
                            (this._flags.declaration_assignment = !1),
                          this._flags.declaration_assignment
                            ? ((this._flags.declaration_assignment = !1),
                              this.print_newline(!1, !0))
                            : this._options.comma_first &&
                              this.allow_wrap_or_preserved_newline(t))
                        : this._flags.mode === y ||
                            (this._flags.mode === v &&
                              this._flags.parent.mode === y)
                          ? (this._flags.mode === v && this.restore_mode(),
                            this._flags.inline_frame || this.print_newline())
                          : this._options.comma_first &&
                            this.allow_wrap_or_preserved_newline(t);
                  }),
                  (M.prototype.handle_operator = function (t) {
                    var e =
                        "*" === t.text &&
                        (d(this._flags.last_token, ["function", "yield"]) ||
                          h(this._flags.last_token.type, [
                            c.START_BLOCK,
                            c.COMMA,
                            c.END_BLOCK,
                            c.SEMICOLON,
                          ])),
                      n =
                        h(t.text, ["-", "+"]) &&
                        (h(this._flags.last_token.type, [
                          c.START_BLOCK,
                          c.START_EXPR,
                          c.EQUALS,
                          c.OPERATOR,
                        ]) ||
                          h(this._flags.last_token.text, u) ||
                          "," === this._flags.last_token.text);
                    if (this.start_of_statement(t));
                    else {
                      var i = !e;
                      this.handle_whitespace_and_comments(t, i);
                    }
                    if ("*" !== t.text || this._flags.last_token.type !== c.DOT)
                      if ("::" !== t.text) {
                        if (
                          (this._flags.last_token.type === c.OPERATOR &&
                            h(this._options.operator_position, g) &&
                            this.allow_wrap_or_preserved_newline(t),
                          ":" === t.text && this._flags.in_case)
                        )
                          return (
                            this.print_token(t),
                            (this._flags.in_case = !1),
                            (this._flags.case_body = !0),
                            void (this._tokens.peek().type !== c.START_BLOCK
                              ? (this.indent(),
                                this.print_newline(),
                                (this._flags.case_block = !1))
                              : ((this._flags.case_block = !0),
                                (this._output.space_before_token = !0)))
                          );
                        var r = !0,
                          o = !0,
                          s = !1;
                        if (
                          (":" === t.text
                            ? 0 === this._flags.ternary_depth
                              ? (r = !1)
                              : ((this._flags.ternary_depth -= 1), (s = !0))
                            : "?" === t.text &&
                              (this._flags.ternary_depth += 1),
                          !n &&
                            !e &&
                            this._options.preserve_newlines &&
                            h(t.text, l))
                        ) {
                          var a = ":" === t.text,
                            p = a && s,
                            y = a && !s;
                          switch (this._options.operator_position) {
                            case f.before_newline:
                              return (
                                (this._output.space_before_token = !y),
                                this.print_token(t),
                                (a && !p) ||
                                  this.allow_wrap_or_preserved_newline(t),
                                void (this._output.space_before_token = !0)
                              );
                            case f.after_newline:
                              return (
                                (this._output.space_before_token = !0),
                                !a || p
                                  ? this._tokens.peek().newlines
                                    ? this.print_newline(!1, !0)
                                    : this.allow_wrap_or_preserved_newline(t)
                                  : (this._output.space_before_token = !1),
                                this.print_token(t),
                                void (this._output.space_before_token = !0)
                              );
                            case f.preserve_newline:
                              return (
                                y || this.allow_wrap_or_preserved_newline(t),
                                (r = !(this._output.just_added_newline() || y)),
                                (this._output.space_before_token = r),
                                this.print_token(t),
                                void (this._output.space_before_token = !0)
                              );
                          }
                        }
                        if (e) {
                          this.allow_wrap_or_preserved_newline(t), (r = !1);
                          var b = this._tokens.peek();
                          o = b && h(b.type, [c.WORD, c.RESERVED]);
                        } else if ("..." === t.text)
                          this.allow_wrap_or_preserved_newline(t),
                            (r = this._flags.last_token.type === c.START_BLOCK),
                            (o = !1);
                        else if (h(t.text, ["--", "++", "!", "~"]) || n) {
                          if (
                            ((this._flags.last_token.type !== c.COMMA &&
                              this._flags.last_token.type !== c.START_EXPR) ||
                              this.allow_wrap_or_preserved_newline(t),
                            (r = !1),
                            (o = !1),
                            t.newlines &&
                              ("--" === t.text ||
                                "++" === t.text ||
                                "~" === t.text))
                          ) {
                            var w = d(this._flags.last_token, _) && t.newlines;
                            w &&
                              (this._previous_flags.if_block ||
                                this._previous_flags.else_block) &&
                              this.restore_mode(),
                              this.print_newline(w, !0);
                          }
                          ";" === this._flags.last_token.text &&
                            S(this._flags.mode) &&
                            (r = !0),
                            this._flags.last_token.type === c.RESERVED
                              ? (r = !0)
                              : this._flags.last_token.type === c.END_EXPR
                                ? (r = !(
                                    "]" === this._flags.last_token.text &&
                                    ("--" === t.text || "++" === t.text)
                                  ))
                                : this._flags.last_token.type === c.OPERATOR &&
                                  ((r =
                                    h(t.text, ["--", "-", "++", "+"]) &&
                                    h(this._flags.last_token.text, [
                                      "--",
                                      "-",
                                      "++",
                                      "+",
                                    ])),
                                  h(t.text, ["+", "-"]) &&
                                    h(this._flags.last_token.text, [
                                      "--",
                                      "++",
                                    ]) &&
                                    (o = !0)),
                            ((this._flags.mode !== m ||
                              this._flags.inline_frame) &&
                              this._flags.mode !== v) ||
                              ("{" !== this._flags.last_token.text &&
                                ";" !== this._flags.last_token.text) ||
                              this.print_newline();
                        }
                        (this._output.space_before_token =
                          this._output.space_before_token || r),
                          this.print_token(t),
                          (this._output.space_before_token = o);
                      } else this.print_token(t);
                    else this.print_token(t);
                  }),
                  (M.prototype.handle_block_comment = function (t, e) {
                    return this._output.raw
                      ? (this._output.add_raw_token(t),
                        void (
                          t.directives &&
                          "end" === t.directives.preserve &&
                          (this._output.raw = this._options.test_output_raw)
                        ))
                      : t.directives
                        ? (this.print_newline(!1, e),
                          this.print_token(t),
                          "start" === t.directives.preserve &&
                            (this._output.raw = !0),
                          void this.print_newline(!1, !0))
                        : o.newline.test(t.text) || t.newlines
                          ? void this.print_block_commment(t, e)
                          : ((this._output.space_before_token = !0),
                            this.print_token(t),
                            void (this._output.space_before_token = !0));
                  }),
                  (M.prototype.print_block_commment = function (t, e) {
                    var n,
                      i = (function (t) {
                        for (
                          var e = [],
                            n = (t = t.replace(o.allLineBreaks, "\n")).indexOf(
                              "\n",
                            );
                          -1 !== n;

                        )
                          e.push(t.substring(0, n)),
                            (n = (t = t.substring(n + 1)).indexOf("\n"));
                        return t.length && e.push(t), e;
                      })(t.text),
                      r = !1,
                      s = !1,
                      a = t.whitespace_before,
                      u = a.length;
                    if (
                      (this.print_newline(!1, e),
                      this.print_token_line_indentation(t),
                      this._output.add_token(i[0]),
                      this.print_newline(!1, e),
                      i.length > 1)
                    ) {
                      for (
                        r = (function (t, e) {
                          for (var n = 0; n < t.length; n++) {
                            if (t[n].trim().charAt(0) !== e) return !1;
                          }
                          return !0;
                        })((i = i.slice(1)), "*"),
                          s = (function (t, e) {
                            for (var n, i = 0, r = t.length; i < r; i++)
                              if ((n = t[i]) && 0 !== n.indexOf(e)) return !1;
                            return !0;
                          })(i, a),
                          r && (this._flags.alignment = 1),
                          n = 0;
                        n < i.length;
                        n++
                      )
                        r
                          ? (this.print_token_line_indentation(t),
                            this._output.add_token(i[n].replace(/^\s+/g, "")))
                          : s && i[n]
                            ? (this.print_token_line_indentation(t),
                              this._output.add_token(i[n].substring(u)))
                            : (this._output.current_line.set_indent(-1),
                              this._output.add_token(i[n])),
                          this.print_newline(!1, e);
                      this._flags.alignment = 0;
                    }
                  }),
                  (M.prototype.handle_comment = function (t, e) {
                    t.newlines
                      ? this.print_newline(!1, e)
                      : this._output.trim(!0),
                      (this._output.space_before_token = !0),
                      this.print_token(t),
                      this.print_newline(!1, e);
                  }),
                  (M.prototype.handle_dot = function (t) {
                    this.start_of_statement(t) ||
                      this.handle_whitespace_and_comments(t, !0),
                      this._flags.last_token.text.match("^[0-9]+$") &&
                        (this._output.space_before_token = !0),
                      d(this._flags.last_token, _)
                        ? (this._output.space_before_token = !1)
                        : this.allow_wrap_or_preserved_newline(
                            t,
                            ")" === this._flags.last_token.text &&
                              this._options.break_chained_methods,
                          ),
                      this._options.unindent_chained_methods &&
                        this._output.just_added_newline() &&
                        this.deindent(),
                      this.print_token(t);
                  }),
                  (M.prototype.handle_unknown = function (t, e) {
                    this.print_token(t),
                      "\n" === t.text[t.text.length - 1] &&
                        this.print_newline(!1, e);
                  }),
                  (M.prototype.handle_eof = function (t) {
                    for (; this._flags.mode === v; ) this.restore_mode();
                    this.handle_whitespace_and_comments(t);
                  }),
                  (t.exports.Beautifier = M);
              },
              function (t) {
                function e(t) {
                  (this.__parent = t),
                    (this.__character_count = 0),
                    (this.__indent_count = -1),
                    (this.__alignment_count = 0),
                    (this.__wrap_point_index = 0),
                    (this.__wrap_point_character_count = 0),
                    (this.__wrap_point_indent_count = -1),
                    (this.__wrap_point_alignment_count = 0),
                    (this.__items = []);
                }
                function n(t, e) {
                  (this.__cache = [""]),
                    (this.__indent_size = t.indent_size),
                    (this.__indent_string = t.indent_char),
                    t.indent_with_tabs ||
                      (this.__indent_string = new Array(t.indent_size + 1).join(
                        t.indent_char,
                      )),
                    (e = e || ""),
                    t.indent_level > 0 &&
                      (e = new Array(t.indent_level + 1).join(
                        this.__indent_string,
                      )),
                    (this.__base_string = e),
                    (this.__base_string_length = e.length);
                }
                function i(t, i) {
                  (this.__indent_cache = new n(t, i)),
                    (this.raw = !1),
                    (this._end_with_newline = t.end_with_newline),
                    (this.indent_size = t.indent_size),
                    (this.wrap_line_length = t.wrap_line_length),
                    (this.indent_empty_lines = t.indent_empty_lines),
                    (this.__lines = []),
                    (this.previous_line = null),
                    (this.current_line = null),
                    (this.next_line = new e(this)),
                    (this.space_before_token = !1),
                    (this.non_breaking_space = !1),
                    (this.previous_token_wrapped = !1),
                    this.__add_outputline();
                }
                (e.prototype.clone_empty = function () {
                  var t = new e(this.__parent);
                  return (
                    t.set_indent(this.__indent_count, this.__alignment_count), t
                  );
                }),
                  (e.prototype.item = function (t) {
                    return t < 0
                      ? this.__items[this.__items.length + t]
                      : this.__items[t];
                  }),
                  (e.prototype.has_match = function (t) {
                    for (var e = this.__items.length - 1; e >= 0; e--)
                      if (this.__items[e].match(t)) return !0;
                    return !1;
                  }),
                  (e.prototype.set_indent = function (t, e) {
                    this.is_empty() &&
                      ((this.__indent_count = t || 0),
                      (this.__alignment_count = e || 0),
                      (this.__character_count = this.__parent.get_indent_size(
                        this.__indent_count,
                        this.__alignment_count,
                      )));
                  }),
                  (e.prototype._set_wrap_point = function () {
                    this.__parent.wrap_line_length &&
                      ((this.__wrap_point_index = this.__items.length),
                      (this.__wrap_point_character_count =
                        this.__character_count),
                      (this.__wrap_point_indent_count =
                        this.__parent.next_line.__indent_count),
                      (this.__wrap_point_alignment_count =
                        this.__parent.next_line.__alignment_count));
                  }),
                  (e.prototype._should_wrap = function () {
                    return (
                      this.__wrap_point_index &&
                      this.__character_count > this.__parent.wrap_line_length &&
                      this.__wrap_point_character_count >
                        this.__parent.next_line.__character_count
                    );
                  }),
                  (e.prototype._allow_wrap = function () {
                    if (this._should_wrap()) {
                      this.__parent.add_new_line();
                      var t = this.__parent.current_line;
                      return (
                        t.set_indent(
                          this.__wrap_point_indent_count,
                          this.__wrap_point_alignment_count,
                        ),
                        (t.__items = this.__items.slice(
                          this.__wrap_point_index,
                        )),
                        (this.__items = this.__items.slice(
                          0,
                          this.__wrap_point_index,
                        )),
                        (t.__character_count +=
                          this.__character_count -
                          this.__wrap_point_character_count),
                        (this.__character_count =
                          this.__wrap_point_character_count),
                        " " === t.__items[0] &&
                          (t.__items.splice(0, 1), (t.__character_count -= 1)),
                        !0
                      );
                    }
                    return !1;
                  }),
                  (e.prototype.is_empty = function () {
                    return 0 === this.__items.length;
                  }),
                  (e.prototype.last = function () {
                    return this.is_empty()
                      ? null
                      : this.__items[this.__items.length - 1];
                  }),
                  (e.prototype.push = function (t) {
                    this.__items.push(t);
                    var e = t.lastIndexOf("\n");
                    -1 !== e
                      ? (this.__character_count = t.length - e)
                      : (this.__character_count += t.length);
                  }),
                  (e.prototype.pop = function () {
                    var t = null;
                    return (
                      this.is_empty() ||
                        ((t = this.__items.pop()),
                        (this.__character_count -= t.length)),
                      t
                    );
                  }),
                  (e.prototype._remove_indent = function () {
                    this.__indent_count > 0 &&
                      ((this.__indent_count -= 1),
                      (this.__character_count -= this.__parent.indent_size));
                  }),
                  (e.prototype._remove_wrap_indent = function () {
                    this.__wrap_point_indent_count > 0 &&
                      (this.__wrap_point_indent_count -= 1);
                  }),
                  (e.prototype.trim = function () {
                    for (; " " === this.last(); )
                      this.__items.pop(), (this.__character_count -= 1);
                  }),
                  (e.prototype.toString = function () {
                    var t = "";
                    return (
                      this.is_empty()
                        ? this.__parent.indent_empty_lines &&
                          (t = this.__parent.get_indent_string(
                            this.__indent_count,
                          ))
                        : ((t = this.__parent.get_indent_string(
                            this.__indent_count,
                            this.__alignment_count,
                          )),
                          (t += this.__items.join(""))),
                      t
                    );
                  }),
                  (n.prototype.get_indent_size = function (t, e) {
                    var n = this.__base_string_length;
                    return (
                      (e = e || 0),
                      t < 0 && (n = 0),
                      (n += t * this.__indent_size),
                      (n += e)
                    );
                  }),
                  (n.prototype.get_indent_string = function (t, e) {
                    var n = this.__base_string;
                    return (
                      (e = e || 0),
                      t < 0 && ((t = 0), (n = "")),
                      (e += t * this.__indent_size),
                      this.__ensure_cache(e),
                      (n += this.__cache[e])
                    );
                  }),
                  (n.prototype.__ensure_cache = function (t) {
                    for (; t >= this.__cache.length; ) this.__add_column();
                  }),
                  (n.prototype.__add_column = function () {
                    var t = this.__cache.length,
                      e = 0,
                      n = "";
                    this.__indent_size &&
                      t >= this.__indent_size &&
                      ((t -=
                        (e = Math.floor(t / this.__indent_size)) *
                        this.__indent_size),
                      (n = new Array(e + 1).join(this.__indent_string))),
                      t && (n += new Array(t + 1).join(" ")),
                      this.__cache.push(n);
                  }),
                  (i.prototype.__add_outputline = function () {
                    (this.previous_line = this.current_line),
                      (this.current_line = this.next_line.clone_empty()),
                      this.__lines.push(this.current_line);
                  }),
                  (i.prototype.get_line_number = function () {
                    return this.__lines.length;
                  }),
                  (i.prototype.get_indent_string = function (t, e) {
                    return this.__indent_cache.get_indent_string(t, e);
                  }),
                  (i.prototype.get_indent_size = function (t, e) {
                    return this.__indent_cache.get_indent_size(t, e);
                  }),
                  (i.prototype.is_empty = function () {
                    return !this.previous_line && this.current_line.is_empty();
                  }),
                  (i.prototype.add_new_line = function (t) {
                    return (
                      !(this.is_empty() || (!t && this.just_added_newline())) &&
                      (this.raw || this.__add_outputline(), !0)
                    );
                  }),
                  (i.prototype.get_code = function (t) {
                    this.trim(!0);
                    var e = this.current_line.pop();
                    e &&
                      ("\n" === e[e.length - 1] && (e = e.replace(/\n+$/g, "")),
                      this.current_line.push(e)),
                      this._end_with_newline && this.__add_outputline();
                    var n = this.__lines.join("\n");
                    return "\n" !== t && (n = n.replace(/[\n]/g, t)), n;
                  }),
                  (i.prototype.set_wrap_point = function () {
                    this.current_line._set_wrap_point();
                  }),
                  (i.prototype.set_indent = function (t, e) {
                    return (
                      (t = t || 0),
                      (e = e || 0),
                      this.next_line.set_indent(t, e),
                      this.__lines.length > 1
                        ? (this.current_line.set_indent(t, e), !0)
                        : (this.current_line.set_indent(), !1)
                    );
                  }),
                  (i.prototype.add_raw_token = function (t) {
                    for (var e = 0; e < t.newlines; e++)
                      this.__add_outputline();
                    this.current_line.set_indent(-1),
                      this.current_line.push(t.whitespace_before),
                      this.current_line.push(t.text),
                      (this.space_before_token = !1),
                      (this.non_breaking_space = !1),
                      (this.previous_token_wrapped = !1);
                  }),
                  (i.prototype.add_token = function (t) {
                    this.__add_space_before_token(),
                      this.current_line.push(t),
                      (this.space_before_token = !1),
                      (this.non_breaking_space = !1),
                      (this.previous_token_wrapped =
                        this.current_line._allow_wrap());
                  }),
                  (i.prototype.__add_space_before_token = function () {
                    this.space_before_token &&
                      !this.just_added_newline() &&
                      (this.non_breaking_space || this.set_wrap_point(),
                      this.current_line.push(" "));
                  }),
                  (i.prototype.remove_indent = function (t) {
                    for (var e = this.__lines.length; t < e; )
                      this.__lines[t]._remove_indent(), t++;
                    this.current_line._remove_wrap_indent();
                  }),
                  (i.prototype.trim = function (t) {
                    for (
                      t = void 0 !== t && t, this.current_line.trim();
                      t &&
                      this.__lines.length > 1 &&
                      this.current_line.is_empty();

                    )
                      this.__lines.pop(),
                        (this.current_line =
                          this.__lines[this.__lines.length - 1]),
                        this.current_line.trim();
                    this.previous_line =
                      this.__lines.length > 1
                        ? this.__lines[this.__lines.length - 2]
                        : null;
                  }),
                  (i.prototype.just_added_newline = function () {
                    return this.current_line.is_empty();
                  }),
                  (i.prototype.just_added_blankline = function () {
                    return (
                      this.is_empty() ||
                      (this.current_line.is_empty() &&
                        this.previous_line.is_empty())
                    );
                  }),
                  (i.prototype.ensure_empty_line_above = function (t, n) {
                    for (var i = this.__lines.length - 2; i >= 0; ) {
                      var r = this.__lines[i];
                      if (r.is_empty()) break;
                      if (0 !== r.item(0).indexOf(t) && r.item(-1) !== n) {
                        this.__lines.splice(i + 1, 0, new e(this)),
                          (this.previous_line =
                            this.__lines[this.__lines.length - 2]);
                        break;
                      }
                      i--;
                    }
                  }),
                  (t.exports.Output = i);
              },
              function (t) {
                t.exports.Token = function (t, e, n, i) {
                  (this.type = t),
                    (this.text = e),
                    (this.comments_before = null),
                    (this.newlines = n || 0),
                    (this.whitespace_before = i || ""),
                    (this.parent = null),
                    (this.next = null),
                    (this.previous = null),
                    (this.opened = null),
                    (this.closed = null),
                    (this.directives = null);
                };
              },
              function (t, e) {
                var n =
                    "\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc",
                  i =
                    "\\u0300-\\u036f\\u0483-\\u0487\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u0620-\\u0649\\u0672-\\u06d3\\u06e7-\\u06e8\\u06fb-\\u06fc\\u0730-\\u074a\\u0800-\\u0814\\u081b-\\u0823\\u0825-\\u0827\\u0829-\\u082d\\u0840-\\u0857\\u08e4-\\u08fe\\u0900-\\u0903\\u093a-\\u093c\\u093e-\\u094f\\u0951-\\u0957\\u0962-\\u0963\\u0966-\\u096f\\u0981-\\u0983\\u09bc\\u09be-\\u09c4\\u09c7\\u09c8\\u09d7\\u09df-\\u09e0\\u0a01-\\u0a03\\u0a3c\\u0a3e-\\u0a42\\u0a47\\u0a48\\u0a4b-\\u0a4d\\u0a51\\u0a66-\\u0a71\\u0a75\\u0a81-\\u0a83\\u0abc\\u0abe-\\u0ac5\\u0ac7-\\u0ac9\\u0acb-\\u0acd\\u0ae2-\\u0ae3\\u0ae6-\\u0aef\\u0b01-\\u0b03\\u0b3c\\u0b3e-\\u0b44\\u0b47\\u0b48\\u0b4b-\\u0b4d\\u0b56\\u0b57\\u0b5f-\\u0b60\\u0b66-\\u0b6f\\u0b82\\u0bbe-\\u0bc2\\u0bc6-\\u0bc8\\u0bca-\\u0bcd\\u0bd7\\u0be6-\\u0bef\\u0c01-\\u0c03\\u0c46-\\u0c48\\u0c4a-\\u0c4d\\u0c55\\u0c56\\u0c62-\\u0c63\\u0c66-\\u0c6f\\u0c82\\u0c83\\u0cbc\\u0cbe-\\u0cc4\\u0cc6-\\u0cc8\\u0cca-\\u0ccd\\u0cd5\\u0cd6\\u0ce2-\\u0ce3\\u0ce6-\\u0cef\\u0d02\\u0d03\\u0d46-\\u0d48\\u0d57\\u0d62-\\u0d63\\u0d66-\\u0d6f\\u0d82\\u0d83\\u0dca\\u0dcf-\\u0dd4\\u0dd6\\u0dd8-\\u0ddf\\u0df2\\u0df3\\u0e34-\\u0e3a\\u0e40-\\u0e45\\u0e50-\\u0e59\\u0eb4-\\u0eb9\\u0ec8-\\u0ecd\\u0ed0-\\u0ed9\\u0f18\\u0f19\\u0f20-\\u0f29\\u0f35\\u0f37\\u0f39\\u0f41-\\u0f47\\u0f71-\\u0f84\\u0f86-\\u0f87\\u0f8d-\\u0f97\\u0f99-\\u0fbc\\u0fc6\\u1000-\\u1029\\u1040-\\u1049\\u1067-\\u106d\\u1071-\\u1074\\u1082-\\u108d\\u108f-\\u109d\\u135d-\\u135f\\u170e-\\u1710\\u1720-\\u1730\\u1740-\\u1750\\u1772\\u1773\\u1780-\\u17b2\\u17dd\\u17e0-\\u17e9\\u180b-\\u180d\\u1810-\\u1819\\u1920-\\u192b\\u1930-\\u193b\\u1951-\\u196d\\u19b0-\\u19c0\\u19c8-\\u19c9\\u19d0-\\u19d9\\u1a00-\\u1a15\\u1a20-\\u1a53\\u1a60-\\u1a7c\\u1a7f-\\u1a89\\u1a90-\\u1a99\\u1b46-\\u1b4b\\u1b50-\\u1b59\\u1b6b-\\u1b73\\u1bb0-\\u1bb9\\u1be6-\\u1bf3\\u1c00-\\u1c22\\u1c40-\\u1c49\\u1c5b-\\u1c7d\\u1cd0-\\u1cd2\\u1d00-\\u1dbe\\u1e01-\\u1f15\\u200c\\u200d\\u203f\\u2040\\u2054\\u20d0-\\u20dc\\u20e1\\u20e5-\\u20f0\\u2d81-\\u2d96\\u2de0-\\u2dff\\u3021-\\u3028\\u3099\\u309a\\ua640-\\ua66d\\ua674-\\ua67d\\ua69f\\ua6f0-\\ua6f1\\ua7f8-\\ua800\\ua806\\ua80b\\ua823-\\ua827\\ua880-\\ua881\\ua8b4-\\ua8c4\\ua8d0-\\ua8d9\\ua8f3-\\ua8f7\\ua900-\\ua909\\ua926-\\ua92d\\ua930-\\ua945\\ua980-\\ua983\\ua9b3-\\ua9c0\\uaa00-\\uaa27\\uaa40-\\uaa41\\uaa4c-\\uaa4d\\uaa50-\\uaa59\\uaa7b\\uaae0-\\uaae9\\uaaf2-\\uaaf3\\uabc0-\\uabe1\\uabec\\uabed\\uabf0-\\uabf9\\ufb20-\\ufb28\\ufe00-\\ufe0f\\ufe20-\\ufe26\\ufe33\\ufe34\\ufe4d-\\ufe4f\\uff10-\\uff19\\uff3f",
                  r =
                    "(?:\\\\u[0-9a-fA-F]{4}|[\\x23\\x24\\x40\\x41-\\x5a\\x5f\\x61-\\x7a" +
                    n +
                    "])";
                (e.identifier = new RegExp(
                  r +
                    "(?:\\\\u[0-9a-fA-F]{4}|[\\x24\\x30-\\x39\\x41-\\x5a\\x5f\\x61-\\x7a\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc\\u0300-\\u036f\\u0483-\\u0487\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u0620-\\u0649\\u0672-\\u06d3\\u06e7-\\u06e8\\u06fb-\\u06fc\\u0730-\\u074a\\u0800-\\u0814\\u081b-\\u0823\\u0825-\\u0827\\u0829-\\u082d\\u0840-\\u0857\\u08e4-\\u08fe\\u0900-\\u0903\\u093a-\\u093c\\u093e-\\u094f\\u0951-\\u0957\\u0962-\\u0963\\u0966-\\u096f\\u0981-\\u0983\\u09bc\\u09be-\\u09c4\\u09c7\\u09c8\\u09d7\\u09df-\\u09e0\\u0a01-\\u0a03\\u0a3c\\u0a3e-\\u0a42\\u0a47\\u0a48\\u0a4b-\\u0a4d\\u0a51\\u0a66-\\u0a71\\u0a75\\u0a81-\\u0a83\\u0abc\\u0abe-\\u0ac5\\u0ac7-\\u0ac9\\u0acb-\\u0acd\\u0ae2-\\u0ae3\\u0ae6-\\u0aef\\u0b01-\\u0b03\\u0b3c\\u0b3e-\\u0b44\\u0b47\\u0b48\\u0b4b-\\u0b4d\\u0b56\\u0b57\\u0b5f-\\u0b60\\u0b66-\\u0b6f\\u0b82\\u0bbe-\\u0bc2\\u0bc6-\\u0bc8\\u0bca-\\u0bcd\\u0bd7\\u0be6-\\u0bef\\u0c01-\\u0c03\\u0c46-\\u0c48\\u0c4a-\\u0c4d\\u0c55\\u0c56\\u0c62-\\u0c63\\u0c66-\\u0c6f\\u0c82\\u0c83\\u0cbc\\u0cbe-\\u0cc4\\u0cc6-\\u0cc8\\u0cca-\\u0ccd\\u0cd5\\u0cd6\\u0ce2-\\u0ce3\\u0ce6-\\u0cef\\u0d02\\u0d03\\u0d46-\\u0d48\\u0d57\\u0d62-\\u0d63\\u0d66-\\u0d6f\\u0d82\\u0d83\\u0dca\\u0dcf-\\u0dd4\\u0dd6\\u0dd8-\\u0ddf\\u0df2\\u0df3\\u0e34-\\u0e3a\\u0e40-\\u0e45\\u0e50-\\u0e59\\u0eb4-\\u0eb9\\u0ec8-\\u0ecd\\u0ed0-\\u0ed9\\u0f18\\u0f19\\u0f20-\\u0f29\\u0f35\\u0f37\\u0f39\\u0f41-\\u0f47\\u0f71-\\u0f84\\u0f86-\\u0f87\\u0f8d-\\u0f97\\u0f99-\\u0fbc\\u0fc6\\u1000-\\u1029\\u1040-\\u1049\\u1067-\\u106d\\u1071-\\u1074\\u1082-\\u108d\\u108f-\\u109d\\u135d-\\u135f\\u170e-\\u1710\\u1720-\\u1730\\u1740-\\u1750\\u1772\\u1773\\u1780-\\u17b2\\u17dd\\u17e0-\\u17e9\\u180b-\\u180d\\u1810-\\u1819\\u1920-\\u192b\\u1930-\\u193b\\u1951-\\u196d\\u19b0-\\u19c0\\u19c8-\\u19c9\\u19d0-\\u19d9\\u1a00-\\u1a15\\u1a20-\\u1a53\\u1a60-\\u1a7c\\u1a7f-\\u1a89\\u1a90-\\u1a99\\u1b46-\\u1b4b\\u1b50-\\u1b59\\u1b6b-\\u1b73\\u1bb0-\\u1bb9\\u1be6-\\u1bf3\\u1c00-\\u1c22\\u1c40-\\u1c49\\u1c5b-\\u1c7d\\u1cd0-\\u1cd2\\u1d00-\\u1dbe\\u1e01-\\u1f15\\u200c\\u200d\\u203f\\u2040\\u2054\\u20d0-\\u20dc\\u20e1\\u20e5-\\u20f0\\u2d81-\\u2d96\\u2de0-\\u2dff\\u3021-\\u3028\\u3099\\u309a\\ua640-\\ua66d\\ua674-\\ua67d\\ua69f\\ua6f0-\\ua6f1\\ua7f8-\\ua800\\ua806\\ua80b\\ua823-\\ua827\\ua880-\\ua881\\ua8b4-\\ua8c4\\ua8d0-\\ua8d9\\ua8f3-\\ua8f7\\ua900-\\ua909\\ua926-\\ua92d\\ua930-\\ua945\\ua980-\\ua983\\ua9b3-\\ua9c0\\uaa00-\\uaa27\\uaa40-\\uaa41\\uaa4c-\\uaa4d\\uaa50-\\uaa59\\uaa7b\\uaae0-\\uaae9\\uaaf2-\\uaaf3\\uabc0-\\uabe1\\uabec\\uabed\\uabf0-\\uabf9\\ufb20-\\ufb28\\ufe00-\\ufe0f\\ufe20-\\ufe26\\ufe33\\ufe34\\ufe4d-\\ufe4f\\uff10-\\uff19\\uff3f])*",
                  "g",
                )),
                  (e.identifierStart = new RegExp(r)),
                  (e.identifierMatch = new RegExp(
                    "(?:\\\\u[0-9a-fA-F]{4}|[\\x24\\x30-\\x39\\x41-\\x5a\\x5f\\x61-\\x7a" +
                      n +
                      i +
                      "])+",
                  ));
                (e.newline = /[\n\r\u2028\u2029]/),
                  (e.lineBreak = new RegExp("\r\n|" + e.newline.source)),
                  (e.allLineBreaks = new RegExp(e.lineBreak.source, "g"));
              },
              function (t, e, n) {
                var i = n(6).Options,
                  r = ["before-newline", "after-newline", "preserve-newline"];
                function o(t) {
                  i.call(this, t, "js");
                  var e = this.raw_options.brace_style || null;
                  "expand-strict" === e
                    ? (this.raw_options.brace_style = "expand")
                    : "collapse-preserve-inline" === e
                      ? (this.raw_options.brace_style =
                          "collapse,preserve-inline")
                      : void 0 !== this.raw_options.braces_on_own_line &&
                        (this.raw_options.brace_style = this.raw_options
                          .braces_on_own_line
                          ? "expand"
                          : "collapse");
                  var n = this._get_selection_list("brace_style", [
                    "collapse",
                    "expand",
                    "end-expand",
                    "none",
                    "preserve-inline",
                  ]);
                  (this.brace_preserve_inline = !1),
                    (this.brace_style = "collapse");
                  for (var o = 0; o < n.length; o++)
                    "preserve-inline" === n[o]
                      ? (this.brace_preserve_inline = !0)
                      : (this.brace_style = n[o]);
                  (this.unindent_chained_methods = this._get_boolean(
                    "unindent_chained_methods",
                  )),
                    (this.break_chained_methods = this._get_boolean(
                      "break_chained_methods",
                    )),
                    (this.space_in_paren = this._get_boolean("space_in_paren")),
                    (this.space_in_empty_paren = this._get_boolean(
                      "space_in_empty_paren",
                    )),
                    (this.jslint_happy = this._get_boolean("jslint_happy")),
                    (this.space_after_anon_function = this._get_boolean(
                      "space_after_anon_function",
                    )),
                    (this.space_after_named_function = this._get_boolean(
                      "space_after_named_function",
                    )),
                    (this.keep_array_indentation = this._get_boolean(
                      "keep_array_indentation",
                    )),
                    (this.space_before_conditional = this._get_boolean(
                      "space_before_conditional",
                      !0,
                    )),
                    (this.unescape_strings =
                      this._get_boolean("unescape_strings")),
                    (this.e4x = this._get_boolean("e4x")),
                    (this.comma_first = this._get_boolean("comma_first")),
                    (this.operator_position = this._get_selection(
                      "operator_position",
                      r,
                    )),
                    (this.test_output_raw =
                      this._get_boolean("test_output_raw")),
                    this.jslint_happy && (this.space_after_anon_function = !0);
                }
                (o.prototype = new i()), (t.exports.Options = o);
              },
              function (t) {
                function e(t, e) {
                  (this.raw_options = n(t, e)),
                    (this.disabled = this._get_boolean("disabled")),
                    (this.eol = this._get_characters("eol", "auto")),
                    (this.end_with_newline =
                      this._get_boolean("end_with_newline")),
                    (this.indent_size = this._get_number("indent_size", 4)),
                    (this.indent_char = this._get_characters(
                      "indent_char",
                      " ",
                    )),
                    (this.indent_level = this._get_number("indent_level")),
                    (this.preserve_newlines = this._get_boolean(
                      "preserve_newlines",
                      !0,
                    )),
                    (this.max_preserve_newlines = this._get_number(
                      "max_preserve_newlines",
                      32786,
                    )),
                    this.preserve_newlines || (this.max_preserve_newlines = 0),
                    (this.indent_with_tabs = this._get_boolean(
                      "indent_with_tabs",
                      "\t" === this.indent_char,
                    )),
                    this.indent_with_tabs &&
                      ((this.indent_char = "\t"),
                      1 === this.indent_size && (this.indent_size = 4)),
                    (this.wrap_line_length = this._get_number(
                      "wrap_line_length",
                      this._get_number("max_char"),
                    )),
                    (this.indent_empty_lines =
                      this._get_boolean("indent_empty_lines")),
                    (this.templating = this._get_selection_list(
                      "templating",
                      [
                        "auto",
                        "none",
                        "django",
                        "erb",
                        "handlebars",
                        "php",
                        "smarty",
                      ],
                      ["auto"],
                    ));
                }
                function n(t, e) {
                  var n,
                    r = {};
                  for (n in (t = i(t))) n !== e && (r[n] = t[n]);
                  if (e && t[e]) for (n in t[e]) r[n] = t[e][n];
                  return r;
                }
                function i(t) {
                  var e,
                    n = {};
                  for (e in t) {
                    n[e.replace(/-/g, "_")] = t[e];
                  }
                  return n;
                }
                (e.prototype._get_array = function (t, e) {
                  var n = this.raw_options[t],
                    i = e || [];
                  return (
                    "object" == typeof n
                      ? null !== n &&
                        "function" == typeof n.concat &&
                        (i = n.concat())
                      : "string" == typeof n &&
                        (i = n.split(/[^a-zA-Z0-9_\/\-]+/)),
                    i
                  );
                }),
                  (e.prototype._get_boolean = function (t, e) {
                    var n = this.raw_options[t];
                    return void 0 === n ? !!e : !!n;
                  }),
                  (e.prototype._get_characters = function (t, e) {
                    var n = this.raw_options[t],
                      i = e || "";
                    return (
                      "string" == typeof n &&
                        (i = n
                          .replace(/\\r/, "\r")
                          .replace(/\\n/, "\n")
                          .replace(/\\t/, "\t")),
                      i
                    );
                  }),
                  (e.prototype._get_number = function (t, e) {
                    var n = this.raw_options[t];
                    (e = parseInt(e, 10)), isNaN(e) && (e = 0);
                    var i = parseInt(n, 10);
                    return isNaN(i) && (i = e), i;
                  }),
                  (e.prototype._get_selection = function (t, e, n) {
                    var i = this._get_selection_list(t, e, n);
                    if (1 !== i.length)
                      throw new Error(
                        "Invalid Option Value: The option '" +
                          t +
                          "' can only be one of the following values:\n" +
                          e +
                          "\nYou passed in: '" +
                          this.raw_options[t] +
                          "'",
                      );
                    return i[0];
                  }),
                  (e.prototype._get_selection_list = function (t, e, n) {
                    if (!e || 0 === e.length)
                      throw new Error("Selection list cannot be empty.");
                    if (((n = n || [e[0]]), !this._is_valid_selection(n, e)))
                      throw new Error("Invalid Default Value!");
                    var i = this._get_array(t, n);
                    if (!this._is_valid_selection(i, e))
                      throw new Error(
                        "Invalid Option Value: The option '" +
                          t +
                          "' can contain only the following values:\n" +
                          e +
                          "\nYou passed in: '" +
                          this.raw_options[t] +
                          "'",
                      );
                    return i;
                  }),
                  (e.prototype._is_valid_selection = function (t, e) {
                    return (
                      t.length &&
                      e.length &&
                      !t.some(function (t) {
                        return -1 === e.indexOf(t);
                      })
                    );
                  }),
                  (t.exports.Options = e),
                  (t.exports.normalizeOpts = i),
                  (t.exports.mergeOpts = n);
              },
              function (t, e, n) {
                var i = n(8).InputScanner,
                  r = n(9).Tokenizer,
                  o = n(9).TOKEN,
                  s = n(13).Directives,
                  a = n(4),
                  u = n(12).Pattern,
                  l = n(14).TemplatablePattern;
                function c(t, e) {
                  return -1 !== e.indexOf(t);
                }
                var h = {
                    START_EXPR: "TK_START_EXPR",
                    END_EXPR: "TK_END_EXPR",
                    START_BLOCK: "TK_START_BLOCK",
                    END_BLOCK: "TK_END_BLOCK",
                    WORD: "TK_WORD",
                    RESERVED: "TK_RESERVED",
                    SEMICOLON: "TK_SEMICOLON",
                    STRING: "TK_STRING",
                    EQUALS: "TK_EQUALS",
                    OPERATOR: "TK_OPERATOR",
                    COMMA: "TK_COMMA",
                    BLOCK_COMMENT: "TK_BLOCK_COMMENT",
                    COMMENT: "TK_COMMENT",
                    DOT: "TK_DOT",
                    UNKNOWN: "TK_UNKNOWN",
                    START: o.START,
                    RAW: o.RAW,
                    EOF: o.EOF,
                  },
                  p = new s(/\/\*/, /\*\//),
                  d =
                    /0[xX][0123456789abcdefABCDEF_]*n?|0[oO][01234567_]*n?|0[bB][01_]*n?|\d[\d_]*n|(?:\.\d[\d_]*|\d[\d_]*\.?[\d_]*)(?:[eE][+-]?[\d_]+)?/,
                  _ = /[0-9]/,
                  f = /[^\d\.]/,
                  g =
                    ">>> === !== &&= ??= ||= << && >= ** != == <= >> || ?? |> < / - + > : & % ? ^ | *".split(
                      " ",
                    ),
                  m =
                    ">>>= ... >>= <<= === >>> !== **= &&= ??= ||= => ^= :: /= << <= == && -= >= >> != -- += ** || ?? ++ %= &= *= |= |> = ! ? > < : / ^ - + * & % ~ |";
                m = (m =
                  "\\?\\.(?!\\d) " +
                  (m = m.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&"))).replace(
                  / /g,
                  "|",
                );
                var v,
                  y = new RegExp(m),
                  b =
                    "continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export".split(
                      ",",
                    ),
                  w = b.concat([
                    "do",
                    "in",
                    "of",
                    "else",
                    "get",
                    "set",
                    "new",
                    "catch",
                    "finally",
                    "typeof",
                    "yield",
                    "async",
                    "await",
                    "from",
                    "as",
                    "class",
                    "extends",
                  ]),
                  x = new RegExp("^(?:" + w.join("|") + ")$"),
                  k = function (t, e) {
                    r.call(this, t, e),
                      (this._patterns.whitespace =
                        this._patterns.whitespace.matching(
                          /\u00A0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff/
                            .source,
                          /\u2028\u2029/.source,
                        ));
                    var n = new u(this._input),
                      i = new l(this._input).read_options(this._options);
                    this.__patterns = {
                      template: i,
                      identifier: i
                        .starting_with(a.identifier)
                        .matching(a.identifierMatch),
                      number: n.matching(d),
                      punct: n.matching(y),
                      comment: n
                        .starting_with(/\/\//)
                        .until(/[\n\r\u2028\u2029]/),
                      block_comment: n
                        .starting_with(/\/\*/)
                        .until_after(/\*\//),
                      html_comment_start: n.matching(/<!--/),
                      html_comment_end: n.matching(/-->/),
                      include: n
                        .starting_with(/#include/)
                        .until_after(a.lineBreak),
                      shebang: n.starting_with(/#!/).until_after(a.lineBreak),
                      xml: n.matching(
                        /[\s\S]*?<(\/?)([-a-zA-Z:0-9_.]+|{[^}]+?}|!\[CDATA\[[^\]]*?\]\]|)(\s*{[^}]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{([^{}]|{[^}]+?})+?}))*\s*(\/?)\s*>/,
                      ),
                      single_quote: i.until(/['\\\n\r\u2028\u2029]/),
                      double_quote: i.until(/["\\\n\r\u2028\u2029]/),
                      template_text: i.until(/[`\\$]/),
                      template_expression: i.until(/[`}\\]/),
                    };
                  };
                ((k.prototype = new r())._is_comment = function (t) {
                  return (
                    t.type === h.COMMENT ||
                    t.type === h.BLOCK_COMMENT ||
                    t.type === h.UNKNOWN
                  );
                }),
                  (k.prototype._is_opening = function (t) {
                    return t.type === h.START_BLOCK || t.type === h.START_EXPR;
                  }),
                  (k.prototype._is_closing = function (t, e) {
                    return (
                      (t.type === h.END_BLOCK || t.type === h.END_EXPR) &&
                      e &&
                      (("]" === t.text && "[" === e.text) ||
                        (")" === t.text && "(" === e.text) ||
                        ("}" === t.text && "{" === e.text))
                    );
                  }),
                  (k.prototype._reset = function () {
                    v = !1;
                  }),
                  (k.prototype._get_next_token = function (t, e) {
                    var n = null;
                    this._readWhitespace();
                    var i = this._input.peek();
                    return null === i
                      ? this._create_token(h.EOF, "")
                      : (n =
                          (n =
                            (n =
                              (n =
                                (n =
                                  (n =
                                    (n =
                                      (n =
                                        (n =
                                          n || this._read_non_javascript(i)) ||
                                        this._read_string(i)) ||
                                      this._read_word(t)) ||
                                    this._read_singles(i)) ||
                                  this._read_comment(i)) ||
                                this._read_regexp(i, t)) ||
                              this._read_xml(i, t)) ||
                            this._read_punctuation()) ||
                          this._create_token(h.UNKNOWN, this._input.next()));
                  }),
                  (k.prototype._read_word = function (t) {
                    var e;
                    return "" !== (e = this.__patterns.identifier.read())
                      ? ((e = e.replace(a.allLineBreaks, "\n")),
                        t.type !== h.DOT &&
                        (t.type !== h.RESERVED ||
                          ("set" !== t.text && "get" !== t.text)) &&
                        x.test(e)
                          ? ("in" !== e && "of" !== e) ||
                            (t.type !== h.WORD && t.type !== h.STRING)
                            ? this._create_token(h.RESERVED, e)
                            : this._create_token(h.OPERATOR, e)
                          : this._create_token(h.WORD, e))
                      : "" !== (e = this.__patterns.number.read())
                        ? this._create_token(h.WORD, e)
                        : void 0;
                  }),
                  (k.prototype._read_singles = function (t) {
                    var e = null;
                    return (
                      "(" === t || "[" === t
                        ? (e = this._create_token(h.START_EXPR, t))
                        : ")" === t || "]" === t
                          ? (e = this._create_token(h.END_EXPR, t))
                          : "{" === t
                            ? (e = this._create_token(h.START_BLOCK, t))
                            : "}" === t
                              ? (e = this._create_token(h.END_BLOCK, t))
                              : ";" === t
                                ? (e = this._create_token(h.SEMICOLON, t))
                                : "." === t && f.test(this._input.peek(1))
                                  ? (e = this._create_token(h.DOT, t))
                                  : "," === t &&
                                    (e = this._create_token(h.COMMA, t)),
                      e && this._input.next(),
                      e
                    );
                  }),
                  (k.prototype._read_punctuation = function () {
                    var t = this.__patterns.punct.read();
                    if ("" !== t)
                      return "=" === t
                        ? this._create_token(h.EQUALS, t)
                        : "?." === t
                          ? this._create_token(h.DOT, t)
                          : this._create_token(h.OPERATOR, t);
                  }),
                  (k.prototype._read_non_javascript = function (t) {
                    var e = "";
                    if ("#" === t) {
                      if (
                        this._is_first_token() &&
                        (e = this.__patterns.shebang.read())
                      )
                        return this._create_token(h.UNKNOWN, e.trim() + "\n");
                      if ((e = this.__patterns.include.read()))
                        return this._create_token(h.UNKNOWN, e.trim() + "\n");
                      t = this._input.next();
                      var n = "#";
                      if (this._input.hasNext() && this._input.testChar(_)) {
                        do {
                          n += t = this._input.next();
                        } while (
                          this._input.hasNext() &&
                          "#" !== t &&
                          "=" !== t
                        );
                        return (
                          "#" === t ||
                            ("[" === this._input.peek() &&
                            "]" === this._input.peek(1)
                              ? ((n += "[]"),
                                this._input.next(),
                                this._input.next())
                              : "{" === this._input.peek() &&
                                "}" === this._input.peek(1) &&
                                ((n += "{}"),
                                this._input.next(),
                                this._input.next())),
                          this._create_token(h.WORD, n)
                        );
                      }
                      this._input.back();
                    } else if ("<" === t && this._is_first_token()) {
                      if ((e = this.__patterns.html_comment_start.read())) {
                        for (
                          ;
                          this._input.hasNext() &&
                          !this._input.testChar(a.newline);

                        )
                          e += this._input.next();
                        return (v = !0), this._create_token(h.COMMENT, e);
                      }
                    } else if (
                      v &&
                      "-" === t &&
                      (e = this.__patterns.html_comment_end.read())
                    )
                      return (v = !1), this._create_token(h.COMMENT, e);
                    return null;
                  }),
                  (k.prototype._read_comment = function (t) {
                    var e = null;
                    if ("/" === t) {
                      var n = "";
                      if ("*" === this._input.peek(1)) {
                        n = this.__patterns.block_comment.read();
                        var i = p.get_directives(n);
                        i &&
                          "start" === i.ignore &&
                          (n += p.readIgnored(this._input)),
                          (n = n.replace(a.allLineBreaks, "\n")),
                          ((e = this._create_token(
                            h.BLOCK_COMMENT,
                            n,
                          )).directives = i);
                      } else
                        "/" === this._input.peek(1) &&
                          ((n = this.__patterns.comment.read()),
                          (e = this._create_token(h.COMMENT, n)));
                    }
                    return e;
                  }),
                  (k.prototype._read_string = function (t) {
                    if ("`" === t || "'" === t || '"' === t) {
                      var e = this._input.next();
                      return (
                        (this.has_char_escapes = !1),
                        (e +=
                          "`" === t
                            ? this._read_string_recursive("`", !0, "${")
                            : this._read_string_recursive(t)),
                        this.has_char_escapes &&
                          this._options.unescape_strings &&
                          (e = (function (t) {
                            var e = "",
                              n = 0,
                              r = new i(t),
                              o = null;
                            for (; r.hasNext(); )
                              if (
                                ((o = r.match(/([\s]|[^\\]|\\\\)+/g)) &&
                                  (e += o[0]),
                                "\\" === r.peek())
                              ) {
                                if ((r.next(), "x" === r.peek()))
                                  o = r.match(/x([0-9A-Fa-f]{2})/g);
                                else {
                                  if ("u" !== r.peek()) {
                                    (e += "\\"), r.hasNext() && (e += r.next());
                                    continue;
                                  }
                                  o = r.match(/u([0-9A-Fa-f]{4})/g);
                                }
                                if (!o) return t;
                                if (
                                  (n = parseInt(o[1], 16)) > 126 &&
                                  n <= 255 &&
                                  0 === o[0].indexOf("x")
                                )
                                  return t;
                                if (n >= 0 && n < 32) {
                                  e += "\\" + o[0];
                                  continue;
                                }
                                e +=
                                  34 === n || 39 === n || 92 === n
                                    ? "\\" + String.fromCharCode(n)
                                    : String.fromCharCode(n);
                              }
                            return e;
                          })(e)),
                        this._input.peek() === t && (e += this._input.next()),
                        (e = e.replace(a.allLineBreaks, "\n")),
                        this._create_token(h.STRING, e)
                      );
                    }
                    return null;
                  }),
                  (k.prototype._allow_regexp_or_xml = function (t) {
                    return (
                      (t.type === h.RESERVED &&
                        c(t.text, [
                          "return",
                          "case",
                          "throw",
                          "else",
                          "do",
                          "typeof",
                          "yield",
                        ])) ||
                      (t.type === h.END_EXPR &&
                        ")" === t.text &&
                        t.opened.previous.type === h.RESERVED &&
                        c(t.opened.previous.text, ["if", "while", "for"])) ||
                      c(t.type, [
                        h.COMMENT,
                        h.START_EXPR,
                        h.START_BLOCK,
                        h.START,
                        h.END_BLOCK,
                        h.OPERATOR,
                        h.EQUALS,
                        h.EOF,
                        h.SEMICOLON,
                        h.COMMA,
                      ])
                    );
                  }),
                  (k.prototype._read_regexp = function (t, e) {
                    if ("/" === t && this._allow_regexp_or_xml(e)) {
                      for (
                        var n = this._input.next(), i = !1, r = !1;
                        this._input.hasNext() &&
                        (i || r || this._input.peek() !== t) &&
                        !this._input.testChar(a.newline);

                      )
                        (n += this._input.peek()),
                          i
                            ? (i = !1)
                            : ((i = "\\" === this._input.peek()),
                              "[" === this._input.peek()
                                ? (r = !0)
                                : "]" === this._input.peek() && (r = !1)),
                          this._input.next();
                      return (
                        this._input.peek() === t &&
                          ((n += this._input.next()),
                          (n += this._input.read(a.identifier))),
                        this._create_token(h.STRING, n)
                      );
                    }
                    return null;
                  }),
                  (k.prototype._read_xml = function (t, e) {
                    if (
                      this._options.e4x &&
                      "<" === t &&
                      this._allow_regexp_or_xml(e)
                    ) {
                      var n = "",
                        i = this.__patterns.xml.read_match();
                      if (i) {
                        for (
                          var r = i[2]
                              .replace(/^{\s+/, "{")
                              .replace(/\s+}$/, "}"),
                            o = 0 === r.indexOf("{"),
                            s = 0;
                          i;

                        ) {
                          var u = !!i[1],
                            l = i[2];
                          if (
                            (!(
                              !!i[i.length - 1] || "![CDATA[" === l.slice(0, 8)
                            ) &&
                              (l === r ||
                                (o &&
                                  l
                                    .replace(/^{\s+/, "{")
                                    .replace(/\s+}$/, "}"))) &&
                              (u ? --s : ++s),
                            (n += i[0]),
                            s <= 0)
                          )
                            break;
                          i = this.__patterns.xml.read_match();
                        }
                        return (
                          i || (n += this._input.match(/[\s\S]*/g)[0]),
                          (n = n.replace(a.allLineBreaks, "\n")),
                          this._create_token(h.STRING, n)
                        );
                      }
                    }
                    return null;
                  }),
                  (k.prototype._read_string_recursive = function (t, e, n) {
                    var i, r;
                    "'" === t
                      ? (r = this.__patterns.single_quote)
                      : '"' === t
                        ? (r = this.__patterns.double_quote)
                        : "`" === t
                          ? (r = this.__patterns.template_text)
                          : "}" === t &&
                            (r = this.__patterns.template_expression);
                    for (var o = r.read(), s = ""; this._input.hasNext(); ) {
                      if (
                        (s = this._input.next()) === t ||
                        (!e && a.newline.test(s))
                      ) {
                        this._input.back();
                        break;
                      }
                      "\\" === s && this._input.hasNext()
                        ? ("x" === (i = this._input.peek()) || "u" === i
                            ? (this.has_char_escapes = !0)
                            : "\r" === i &&
                              "\n" === this._input.peek(1) &&
                              this._input.next(),
                          (s += this._input.next()))
                        : n &&
                          ("${" === n &&
                            "$" === s &&
                            "{" === this._input.peek() &&
                            (s += this._input.next()),
                          n === s &&
                            ((s +=
                              "`" === t
                                ? this._read_string_recursive("}", e, "`")
                                : this._read_string_recursive("`", e, "${")),
                            this._input.hasNext() &&
                              (s += this._input.next()))),
                        (o += s += r.read());
                    }
                    return o;
                  }),
                  (t.exports.Tokenizer = k),
                  (t.exports.TOKEN = h),
                  (t.exports.positionable_operators = g.slice()),
                  (t.exports.line_starters = b.slice());
              },
              function (t) {
                var e = RegExp.prototype.hasOwnProperty("sticky");
                function n(t) {
                  (this.__input = t || ""),
                    (this.__input_length = this.__input.length),
                    (this.__position = 0);
                }
                (n.prototype.restart = function () {
                  this.__position = 0;
                }),
                  (n.prototype.back = function () {
                    this.__position > 0 && (this.__position -= 1);
                  }),
                  (n.prototype.hasNext = function () {
                    return this.__position < this.__input_length;
                  }),
                  (n.prototype.next = function () {
                    var t = null;
                    return (
                      this.hasNext() &&
                        ((t = this.__input.charAt(this.__position)),
                        (this.__position += 1)),
                      t
                    );
                  }),
                  (n.prototype.peek = function (t) {
                    var e = null;
                    return (
                      (t = t || 0),
                      (t += this.__position) >= 0 &&
                        t < this.__input_length &&
                        (e = this.__input.charAt(t)),
                      e
                    );
                  }),
                  (n.prototype.__match = function (t, n) {
                    t.lastIndex = n;
                    var i = t.exec(this.__input);
                    return (
                      !i || (e && t.sticky) || (i.index !== n && (i = null)), i
                    );
                  }),
                  (n.prototype.test = function (t, e) {
                    return (
                      (e = e || 0),
                      (e += this.__position) >= 0 &&
                        e < this.__input_length &&
                        !!this.__match(t, e)
                    );
                  }),
                  (n.prototype.testChar = function (t, e) {
                    var n = this.peek(e);
                    return (t.lastIndex = 0), null !== n && t.test(n);
                  }),
                  (n.prototype.match = function (t) {
                    var e = this.__match(t, this.__position);
                    return e ? (this.__position += e[0].length) : (e = null), e;
                  }),
                  (n.prototype.read = function (t, e, n) {
                    var i,
                      r = "";
                    return (
                      t && (i = this.match(t)) && (r += i[0]),
                      !e || (!i && t) || (r += this.readUntil(e, n)),
                      r
                    );
                  }),
                  (n.prototype.readUntil = function (t, e) {
                    var n,
                      i = this.__position;
                    t.lastIndex = this.__position;
                    var r = t.exec(this.__input);
                    return (
                      r
                        ? ((i = r.index), e && (i += r[0].length))
                        : (i = this.__input_length),
                      (n = this.__input.substring(this.__position, i)),
                      (this.__position = i),
                      n
                    );
                  }),
                  (n.prototype.readUntilAfter = function (t) {
                    return this.readUntil(t, !0);
                  }),
                  (n.prototype.get_regexp = function (t, n) {
                    var i = null,
                      r = "g";
                    return (
                      n && e && (r = "y"),
                      "string" == typeof t && "" !== t
                        ? (i = new RegExp(t, r))
                        : t && (i = new RegExp(t.source, r)),
                      i
                    );
                  }),
                  (n.prototype.get_literal_regexp = function (t) {
                    return RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
                  }),
                  (n.prototype.peekUntilAfter = function (t) {
                    var e = this.__position,
                      n = this.readUntilAfter(t);
                    return (this.__position = e), n;
                  }),
                  (n.prototype.lookBack = function (t) {
                    var e = this.__position - 1;
                    return (
                      e >= t.length &&
                      this.__input.substring(e - t.length, e).toLowerCase() ===
                        t
                    );
                  }),
                  (t.exports.InputScanner = n);
              },
              function (t, e, n) {
                var i = n(8).InputScanner,
                  r = n(3).Token,
                  o = n(10).TokenStream,
                  s = n(11).WhitespacePattern,
                  a = { START: "TK_START", RAW: "TK_RAW", EOF: "TK_EOF" },
                  u = function (t, e) {
                    (this._input = new i(t)),
                      (this._options = e || {}),
                      (this.__tokens = null),
                      (this._patterns = {}),
                      (this._patterns.whitespace = new s(this._input));
                  };
                (u.prototype.tokenize = function () {
                  var t;
                  this._input.restart(),
                    (this.__tokens = new o()),
                    this._reset();
                  for (
                    var e = new r(a.START, ""), n = null, i = [], s = new o();
                    e.type !== a.EOF;

                  ) {
                    for (t = this._get_next_token(e, n); this._is_comment(t); )
                      s.add(t), (t = this._get_next_token(e, n));
                    s.isEmpty() || ((t.comments_before = s), (s = new o())),
                      (t.parent = n),
                      this._is_opening(t)
                        ? (i.push(n), (n = t))
                        : n &&
                          this._is_closing(t, n) &&
                          ((t.opened = n),
                          (n.closed = t),
                          (n = i.pop()),
                          (t.parent = n)),
                      (t.previous = e),
                      (e.next = t),
                      this.__tokens.add(t),
                      (e = t);
                  }
                  return this.__tokens;
                }),
                  (u.prototype._is_first_token = function () {
                    return this.__tokens.isEmpty();
                  }),
                  (u.prototype._reset = function () {}),
                  (u.prototype._get_next_token = function (t, e) {
                    this._readWhitespace();
                    var n = this._input.read(/.+/g);
                    return n
                      ? this._create_token(a.RAW, n)
                      : this._create_token(a.EOF, "");
                  }),
                  (u.prototype._is_comment = function (t) {
                    return !1;
                  }),
                  (u.prototype._is_opening = function (t) {
                    return !1;
                  }),
                  (u.prototype._is_closing = function (t, e) {
                    return !1;
                  }),
                  (u.prototype._create_token = function (t, e) {
                    return new r(
                      t,
                      e,
                      this._patterns.whitespace.newline_count,
                      this._patterns.whitespace.whitespace_before_token,
                    );
                  }),
                  (u.prototype._readWhitespace = function () {
                    return this._patterns.whitespace.read();
                  }),
                  (t.exports.Tokenizer = u),
                  (t.exports.TOKEN = a);
              },
              function (t) {
                function e(t) {
                  (this.__tokens = []),
                    (this.__tokens_length = this.__tokens.length),
                    (this.__position = 0),
                    (this.__parent_token = t);
                }
                (e.prototype.restart = function () {
                  this.__position = 0;
                }),
                  (e.prototype.isEmpty = function () {
                    return 0 === this.__tokens_length;
                  }),
                  (e.prototype.hasNext = function () {
                    return this.__position < this.__tokens_length;
                  }),
                  (e.prototype.next = function () {
                    var t = null;
                    return (
                      this.hasNext() &&
                        ((t = this.__tokens[this.__position]),
                        (this.__position += 1)),
                      t
                    );
                  }),
                  (e.prototype.peek = function (t) {
                    var e = null;
                    return (
                      (t = t || 0),
                      (t += this.__position) >= 0 &&
                        t < this.__tokens_length &&
                        (e = this.__tokens[t]),
                      e
                    );
                  }),
                  (e.prototype.add = function (t) {
                    this.__parent_token && (t.parent = this.__parent_token),
                      this.__tokens.push(t),
                      (this.__tokens_length += 1);
                  }),
                  (t.exports.TokenStream = e);
              },
              function (t, e, n) {
                var i = n(12).Pattern;
                function r(t, e) {
                  i.call(this, t, e),
                    e
                      ? (this._line_regexp = this._input.get_regexp(
                          e._line_regexp,
                        ))
                      : this.__set_whitespace_patterns("", ""),
                    (this.newline_count = 0),
                    (this.whitespace_before_token = "");
                }
                (r.prototype = new i()),
                  (r.prototype.__set_whitespace_patterns = function (t, e) {
                    (t += "\\t "),
                      (e += "\\n\\r"),
                      (this._match_pattern = this._input.get_regexp(
                        "[" + t + e + "]+",
                        !0,
                      )),
                      (this._newline_regexp = this._input.get_regexp(
                        "\\r\\n|[" + e + "]",
                      ));
                  }),
                  (r.prototype.read = function () {
                    (this.newline_count = 0),
                      (this.whitespace_before_token = "");
                    var t = this._input.read(this._match_pattern);
                    if (" " === t) this.whitespace_before_token = " ";
                    else if (t) {
                      var e = this.__split(this._newline_regexp, t);
                      (this.newline_count = e.length - 1),
                        (this.whitespace_before_token = e[this.newline_count]);
                    }
                    return t;
                  }),
                  (r.prototype.matching = function (t, e) {
                    var n = this._create();
                    return n.__set_whitespace_patterns(t, e), n._update(), n;
                  }),
                  (r.prototype._create = function () {
                    return new r(this._input, this);
                  }),
                  (r.prototype.__split = function (t, e) {
                    t.lastIndex = 0;
                    for (var n = 0, i = [], r = t.exec(e); r; )
                      i.push(e.substring(n, r.index)),
                        (n = r.index + r[0].length),
                        (r = t.exec(e));
                    return (
                      n < e.length
                        ? i.push(e.substring(n, e.length))
                        : i.push(""),
                      i
                    );
                  }),
                  (t.exports.WhitespacePattern = r);
              },
              function (t) {
                function e(t, e) {
                  (this._input = t),
                    (this._starting_pattern = null),
                    (this._match_pattern = null),
                    (this._until_pattern = null),
                    (this._until_after = !1),
                    e &&
                      ((this._starting_pattern = this._input.get_regexp(
                        e._starting_pattern,
                        !0,
                      )),
                      (this._match_pattern = this._input.get_regexp(
                        e._match_pattern,
                        !0,
                      )),
                      (this._until_pattern = this._input.get_regexp(
                        e._until_pattern,
                      )),
                      (this._until_after = e._until_after));
                }
                (e.prototype.read = function () {
                  var t = this._input.read(this._starting_pattern);
                  return (
                    (this._starting_pattern && !t) ||
                      (t += this._input.read(
                        this._match_pattern,
                        this._until_pattern,
                        this._until_after,
                      )),
                    t
                  );
                }),
                  (e.prototype.read_match = function () {
                    return this._input.match(this._match_pattern);
                  }),
                  (e.prototype.until_after = function (t) {
                    var e = this._create();
                    return (
                      (e._until_after = !0),
                      (e._until_pattern = this._input.get_regexp(t)),
                      e._update(),
                      e
                    );
                  }),
                  (e.prototype.until = function (t) {
                    var e = this._create();
                    return (
                      (e._until_after = !1),
                      (e._until_pattern = this._input.get_regexp(t)),
                      e._update(),
                      e
                    );
                  }),
                  (e.prototype.starting_with = function (t) {
                    var e = this._create();
                    return (
                      (e._starting_pattern = this._input.get_regexp(t, !0)),
                      e._update(),
                      e
                    );
                  }),
                  (e.prototype.matching = function (t) {
                    var e = this._create();
                    return (
                      (e._match_pattern = this._input.get_regexp(t, !0)),
                      e._update(),
                      e
                    );
                  }),
                  (e.prototype._create = function () {
                    return new e(this._input, this);
                  }),
                  (e.prototype._update = function () {}),
                  (t.exports.Pattern = e);
              },
              function (t) {
                function e(t, e) {
                  (t = "string" == typeof t ? t : t.source),
                    (e = "string" == typeof e ? e : e.source),
                    (this.__directives_block_pattern = new RegExp(
                      t + / beautify( \w+[:]\w+)+ /.source + e,
                      "g",
                    )),
                    (this.__directive_pattern = / (\w+)[:](\w+)/g),
                    (this.__directives_end_ignore_pattern = new RegExp(
                      t + /\sbeautify\signore:end\s/.source + e,
                      "g",
                    ));
                }
                (e.prototype.get_directives = function (t) {
                  if (!t.match(this.__directives_block_pattern)) return null;
                  var e = {};
                  this.__directive_pattern.lastIndex = 0;
                  for (var n = this.__directive_pattern.exec(t); n; )
                    (e[n[1]] = n[2]), (n = this.__directive_pattern.exec(t));
                  return e;
                }),
                  (e.prototype.readIgnored = function (t) {
                    return t.readUntilAfter(
                      this.__directives_end_ignore_pattern,
                    );
                  }),
                  (t.exports.Directives = e);
              },
              function (t, e, n) {
                var i = n(12).Pattern,
                  r = {
                    django: !1,
                    erb: !1,
                    handlebars: !1,
                    php: !1,
                    smarty: !1,
                  };
                function o(t, e) {
                  i.call(this, t, e),
                    (this.__template_pattern = null),
                    (this._disabled = Object.assign({}, r)),
                    (this._excluded = Object.assign({}, r)),
                    e &&
                      ((this.__template_pattern = this._input.get_regexp(
                        e.__template_pattern,
                      )),
                      (this._excluded = Object.assign(
                        this._excluded,
                        e._excluded,
                      )),
                      (this._disabled = Object.assign(
                        this._disabled,
                        e._disabled,
                      )));
                  var n = new i(t);
                  this.__patterns = {
                    handlebars_comment: n
                      .starting_with(/{{!--/)
                      .until_after(/--}}/),
                    handlebars_unescaped: n
                      .starting_with(/{{{/)
                      .until_after(/}}}/),
                    handlebars: n.starting_with(/{{/).until_after(/}}/),
                    php: n.starting_with(/<\?(?:[= ]|php)/).until_after(/\?>/),
                    erb: n.starting_with(/<%[^%]/).until_after(/[^%]%>/),
                    django: n.starting_with(/{%/).until_after(/%}/),
                    django_value: n.starting_with(/{{/).until_after(/}}/),
                    django_comment: n.starting_with(/{#/).until_after(/#}/),
                    smarty: n
                      .starting_with(/{(?=[^}{\s\n])/)
                      .until_after(/[^\s\n]}/),
                    smarty_comment: n.starting_with(/{\*/).until_after(/\*}/),
                    smarty_literal: n
                      .starting_with(/{literal}/)
                      .until_after(/{\/literal}/),
                  };
                }
                (o.prototype = new i()),
                  (o.prototype._create = function () {
                    return new o(this._input, this);
                  }),
                  (o.prototype._update = function () {
                    this.__set_templated_pattern();
                  }),
                  (o.prototype.disable = function (t) {
                    var e = this._create();
                    return (e._disabled[t] = !0), e._update(), e;
                  }),
                  (o.prototype.read_options = function (t) {
                    var e = this._create();
                    for (var n in r)
                      e._disabled[n] = -1 === t.templating.indexOf(n);
                    return e._update(), e;
                  }),
                  (o.prototype.exclude = function (t) {
                    var e = this._create();
                    return (e._excluded[t] = !0), e._update(), e;
                  }),
                  (o.prototype.read = function () {
                    var t = "";
                    t = this._match_pattern
                      ? this._input.read(this._starting_pattern)
                      : this._input.read(
                          this._starting_pattern,
                          this.__template_pattern,
                        );
                    for (var e = this._read_template(); e; )
                      this._match_pattern
                        ? (e += this._input.read(this._match_pattern))
                        : (e += this._input.readUntil(this.__template_pattern)),
                        (t += e),
                        (e = this._read_template());
                    return (
                      this._until_after &&
                        (t += this._input.readUntilAfter(this._until_pattern)),
                      t
                    );
                  }),
                  (o.prototype.__set_templated_pattern = function () {
                    var t = [];
                    this._disabled.php ||
                      t.push(this.__patterns.php._starting_pattern.source),
                      this._disabled.handlebars ||
                        t.push(
                          this.__patterns.handlebars._starting_pattern.source,
                        ),
                      this._disabled.erb ||
                        t.push(this.__patterns.erb._starting_pattern.source),
                      this._disabled.django ||
                        (t.push(
                          this.__patterns.django._starting_pattern.source,
                        ),
                        t.push(
                          this.__patterns.django_value._starting_pattern.source,
                        ),
                        t.push(
                          this.__patterns.django_comment._starting_pattern
                            .source,
                        )),
                      this._disabled.smarty ||
                        t.push(this.__patterns.smarty._starting_pattern.source),
                      this._until_pattern && t.push(this._until_pattern.source),
                      (this.__template_pattern = this._input.get_regexp(
                        "(?:" + t.join("|") + ")",
                      ));
                  }),
                  (o.prototype._read_template = function () {
                    var t = "",
                      e = this._input.peek();
                    if ("<" === e) {
                      var n = this._input.peek(1);
                      this._disabled.php ||
                        this._excluded.php ||
                        "?" !== n ||
                        (t = t || this.__patterns.php.read()),
                        this._disabled.erb ||
                          this._excluded.erb ||
                          "%" !== n ||
                          (t = t || this.__patterns.erb.read());
                    } else
                      "{" === e &&
                        (this._disabled.handlebars ||
                          this._excluded.handlebars ||
                          (t =
                            (t =
                              (t =
                                t ||
                                this.__patterns.handlebars_comment.read()) ||
                              this.__patterns.handlebars_unescaped.read()) ||
                            this.__patterns.handlebars.read()),
                        this._disabled.django ||
                          (this._excluded.django ||
                            this._excluded.handlebars ||
                            (t = t || this.__patterns.django_value.read()),
                          this._excluded.django ||
                            (t =
                              (t =
                                t || this.__patterns.django_comment.read()) ||
                              this.__patterns.django.read())),
                        this._disabled.smarty ||
                          (this._disabled.django &&
                            this._disabled.handlebars &&
                            (t =
                              (t =
                                (t =
                                  t || this.__patterns.smarty_comment.read()) ||
                                this.__patterns.smarty_literal.read()) ||
                              this.__patterns.smarty.read())));
                    return t;
                  }),
                  (t.exports.TemplatablePattern = o);
              },
            ],
            e = {};
          var i = (function n(i) {
            var r = e[i];
            if (void 0 !== r) return r.exports;
            var o = (e[i] = { exports: {} });
            return t[i](o, o.exports, n), o.exports;
          })(0);
          n = i;
        })();
        var r = n;
        void 0 ===
          (i = function () {
            return { js_beautify: r };
          }.apply(e, [])) || (t.exports = i);
      })();
    },
    function (t, e, n) {
      var i;
      !(function () {
        var n;
        !(function () {
          "use strict";
          var t = [
              ,
              ,
              function (t) {
                function e(t) {
                  (this.__parent = t),
                    (this.__character_count = 0),
                    (this.__indent_count = -1),
                    (this.__alignment_count = 0),
                    (this.__wrap_point_index = 0),
                    (this.__wrap_point_character_count = 0),
                    (this.__wrap_point_indent_count = -1),
                    (this.__wrap_point_alignment_count = 0),
                    (this.__items = []);
                }
                function n(t, e) {
                  (this.__cache = [""]),
                    (this.__indent_size = t.indent_size),
                    (this.__indent_string = t.indent_char),
                    t.indent_with_tabs ||
                      (this.__indent_string = new Array(t.indent_size + 1).join(
                        t.indent_char,
                      )),
                    (e = e || ""),
                    t.indent_level > 0 &&
                      (e = new Array(t.indent_level + 1).join(
                        this.__indent_string,
                      )),
                    (this.__base_string = e),
                    (this.__base_string_length = e.length);
                }
                function i(t, i) {
                  (this.__indent_cache = new n(t, i)),
                    (this.raw = !1),
                    (this._end_with_newline = t.end_with_newline),
                    (this.indent_size = t.indent_size),
                    (this.wrap_line_length = t.wrap_line_length),
                    (this.indent_empty_lines = t.indent_empty_lines),
                    (this.__lines = []),
                    (this.previous_line = null),
                    (this.current_line = null),
                    (this.next_line = new e(this)),
                    (this.space_before_token = !1),
                    (this.non_breaking_space = !1),
                    (this.previous_token_wrapped = !1),
                    this.__add_outputline();
                }
                (e.prototype.clone_empty = function () {
                  var t = new e(this.__parent);
                  return (
                    t.set_indent(this.__indent_count, this.__alignment_count), t
                  );
                }),
                  (e.prototype.item = function (t) {
                    return t < 0
                      ? this.__items[this.__items.length + t]
                      : this.__items[t];
                  }),
                  (e.prototype.has_match = function (t) {
                    for (var e = this.__items.length - 1; e >= 0; e--)
                      if (this.__items[e].match(t)) return !0;
                    return !1;
                  }),
                  (e.prototype.set_indent = function (t, e) {
                    this.is_empty() &&
                      ((this.__indent_count = t || 0),
                      (this.__alignment_count = e || 0),
                      (this.__character_count = this.__parent.get_indent_size(
                        this.__indent_count,
                        this.__alignment_count,
                      )));
                  }),
                  (e.prototype._set_wrap_point = function () {
                    this.__parent.wrap_line_length &&
                      ((this.__wrap_point_index = this.__items.length),
                      (this.__wrap_point_character_count =
                        this.__character_count),
                      (this.__wrap_point_indent_count =
                        this.__parent.next_line.__indent_count),
                      (this.__wrap_point_alignment_count =
                        this.__parent.next_line.__alignment_count));
                  }),
                  (e.prototype._should_wrap = function () {
                    return (
                      this.__wrap_point_index &&
                      this.__character_count > this.__parent.wrap_line_length &&
                      this.__wrap_point_character_count >
                        this.__parent.next_line.__character_count
                    );
                  }),
                  (e.prototype._allow_wrap = function () {
                    if (this._should_wrap()) {
                      this.__parent.add_new_line();
                      var t = this.__parent.current_line;
                      return (
                        t.set_indent(
                          this.__wrap_point_indent_count,
                          this.__wrap_point_alignment_count,
                        ),
                        (t.__items = this.__items.slice(
                          this.__wrap_point_index,
                        )),
                        (this.__items = this.__items.slice(
                          0,
                          this.__wrap_point_index,
                        )),
                        (t.__character_count +=
                          this.__character_count -
                          this.__wrap_point_character_count),
                        (this.__character_count =
                          this.__wrap_point_character_count),
                        " " === t.__items[0] &&
                          (t.__items.splice(0, 1), (t.__character_count -= 1)),
                        !0
                      );
                    }
                    return !1;
                  }),
                  (e.prototype.is_empty = function () {
                    return 0 === this.__items.length;
                  }),
                  (e.prototype.last = function () {
                    return this.is_empty()
                      ? null
                      : this.__items[this.__items.length - 1];
                  }),
                  (e.prototype.push = function (t) {
                    this.__items.push(t);
                    var e = t.lastIndexOf("\n");
                    -1 !== e
                      ? (this.__character_count = t.length - e)
                      : (this.__character_count += t.length);
                  }),
                  (e.prototype.pop = function () {
                    var t = null;
                    return (
                      this.is_empty() ||
                        ((t = this.__items.pop()),
                        (this.__character_count -= t.length)),
                      t
                    );
                  }),
                  (e.prototype._remove_indent = function () {
                    this.__indent_count > 0 &&
                      ((this.__indent_count -= 1),
                      (this.__character_count -= this.__parent.indent_size));
                  }),
                  (e.prototype._remove_wrap_indent = function () {
                    this.__wrap_point_indent_count > 0 &&
                      (this.__wrap_point_indent_count -= 1);
                  }),
                  (e.prototype.trim = function () {
                    for (; " " === this.last(); )
                      this.__items.pop(), (this.__character_count -= 1);
                  }),
                  (e.prototype.toString = function () {
                    var t = "";
                    return (
                      this.is_empty()
                        ? this.__parent.indent_empty_lines &&
                          (t = this.__parent.get_indent_string(
                            this.__indent_count,
                          ))
                        : ((t = this.__parent.get_indent_string(
                            this.__indent_count,
                            this.__alignment_count,
                          )),
                          (t += this.__items.join(""))),
                      t
                    );
                  }),
                  (n.prototype.get_indent_size = function (t, e) {
                    var n = this.__base_string_length;
                    return (
                      (e = e || 0),
                      t < 0 && (n = 0),
                      (n += t * this.__indent_size),
                      (n += e)
                    );
                  }),
                  (n.prototype.get_indent_string = function (t, e) {
                    var n = this.__base_string;
                    return (
                      (e = e || 0),
                      t < 0 && ((t = 0), (n = "")),
                      (e += t * this.__indent_size),
                      this.__ensure_cache(e),
                      (n += this.__cache[e])
                    );
                  }),
                  (n.prototype.__ensure_cache = function (t) {
                    for (; t >= this.__cache.length; ) this.__add_column();
                  }),
                  (n.prototype.__add_column = function () {
                    var t = this.__cache.length,
                      e = 0,
                      n = "";
                    this.__indent_size &&
                      t >= this.__indent_size &&
                      ((t -=
                        (e = Math.floor(t / this.__indent_size)) *
                        this.__indent_size),
                      (n = new Array(e + 1).join(this.__indent_string))),
                      t && (n += new Array(t + 1).join(" ")),
                      this.__cache.push(n);
                  }),
                  (i.prototype.__add_outputline = function () {
                    (this.previous_line = this.current_line),
                      (this.current_line = this.next_line.clone_empty()),
                      this.__lines.push(this.current_line);
                  }),
                  (i.prototype.get_line_number = function () {
                    return this.__lines.length;
                  }),
                  (i.prototype.get_indent_string = function (t, e) {
                    return this.__indent_cache.get_indent_string(t, e);
                  }),
                  (i.prototype.get_indent_size = function (t, e) {
                    return this.__indent_cache.get_indent_size(t, e);
                  }),
                  (i.prototype.is_empty = function () {
                    return !this.previous_line && this.current_line.is_empty();
                  }),
                  (i.prototype.add_new_line = function (t) {
                    return (
                      !(this.is_empty() || (!t && this.just_added_newline())) &&
                      (this.raw || this.__add_outputline(), !0)
                    );
                  }),
                  (i.prototype.get_code = function (t) {
                    this.trim(!0);
                    var e = this.current_line.pop();
                    e &&
                      ("\n" === e[e.length - 1] && (e = e.replace(/\n+$/g, "")),
                      this.current_line.push(e)),
                      this._end_with_newline && this.__add_outputline();
                    var n = this.__lines.join("\n");
                    return "\n" !== t && (n = n.replace(/[\n]/g, t)), n;
                  }),
                  (i.prototype.set_wrap_point = function () {
                    this.current_line._set_wrap_point();
                  }),
                  (i.prototype.set_indent = function (t, e) {
                    return (
                      (t = t || 0),
                      (e = e || 0),
                      this.next_line.set_indent(t, e),
                      this.__lines.length > 1
                        ? (this.current_line.set_indent(t, e), !0)
                        : (this.current_line.set_indent(), !1)
                    );
                  }),
                  (i.prototype.add_raw_token = function (t) {
                    for (var e = 0; e < t.newlines; e++)
                      this.__add_outputline();
                    this.current_line.set_indent(-1),
                      this.current_line.push(t.whitespace_before),
                      this.current_line.push(t.text),
                      (this.space_before_token = !1),
                      (this.non_breaking_space = !1),
                      (this.previous_token_wrapped = !1);
                  }),
                  (i.prototype.add_token = function (t) {
                    this.__add_space_before_token(),
                      this.current_line.push(t),
                      (this.space_before_token = !1),
                      (this.non_breaking_space = !1),
                      (this.previous_token_wrapped =
                        this.current_line._allow_wrap());
                  }),
                  (i.prototype.__add_space_before_token = function () {
                    this.space_before_token &&
                      !this.just_added_newline() &&
                      (this.non_breaking_space || this.set_wrap_point(),
                      this.current_line.push(" "));
                  }),
                  (i.prototype.remove_indent = function (t) {
                    for (var e = this.__lines.length; t < e; )
                      this.__lines[t]._remove_indent(), t++;
                    this.current_line._remove_wrap_indent();
                  }),
                  (i.prototype.trim = function (t) {
                    for (
                      t = void 0 !== t && t, this.current_line.trim();
                      t &&
                      this.__lines.length > 1 &&
                      this.current_line.is_empty();

                    )
                      this.__lines.pop(),
                        (this.current_line =
                          this.__lines[this.__lines.length - 1]),
                        this.current_line.trim();
                    this.previous_line =
                      this.__lines.length > 1
                        ? this.__lines[this.__lines.length - 2]
                        : null;
                  }),
                  (i.prototype.just_added_newline = function () {
                    return this.current_line.is_empty();
                  }),
                  (i.prototype.just_added_blankline = function () {
                    return (
                      this.is_empty() ||
                      (this.current_line.is_empty() &&
                        this.previous_line.is_empty())
                    );
                  }),
                  (i.prototype.ensure_empty_line_above = function (t, n) {
                    for (var i = this.__lines.length - 2; i >= 0; ) {
                      var r = this.__lines[i];
                      if (r.is_empty()) break;
                      if (0 !== r.item(0).indexOf(t) && r.item(-1) !== n) {
                        this.__lines.splice(i + 1, 0, new e(this)),
                          (this.previous_line =
                            this.__lines[this.__lines.length - 2]);
                        break;
                      }
                      i--;
                    }
                  }),
                  (t.exports.Output = i);
              },
              ,
              ,
              ,
              function (t) {
                function e(t, e) {
                  (this.raw_options = n(t, e)),
                    (this.disabled = this._get_boolean("disabled")),
                    (this.eol = this._get_characters("eol", "auto")),
                    (this.end_with_newline =
                      this._get_boolean("end_with_newline")),
                    (this.indent_size = this._get_number("indent_size", 4)),
                    (this.indent_char = this._get_characters(
                      "indent_char",
                      " ",
                    )),
                    (this.indent_level = this._get_number("indent_level")),
                    (this.preserve_newlines = this._get_boolean(
                      "preserve_newlines",
                      !0,
                    )),
                    (this.max_preserve_newlines = this._get_number(
                      "max_preserve_newlines",
                      32786,
                    )),
                    this.preserve_newlines || (this.max_preserve_newlines = 0),
                    (this.indent_with_tabs = this._get_boolean(
                      "indent_with_tabs",
                      "\t" === this.indent_char,
                    )),
                    this.indent_with_tabs &&
                      ((this.indent_char = "\t"),
                      1 === this.indent_size && (this.indent_size = 4)),
                    (this.wrap_line_length = this._get_number(
                      "wrap_line_length",
                      this._get_number("max_char"),
                    )),
                    (this.indent_empty_lines =
                      this._get_boolean("indent_empty_lines")),
                    (this.templating = this._get_selection_list(
                      "templating",
                      [
                        "auto",
                        "none",
                        "django",
                        "erb",
                        "handlebars",
                        "php",
                        "smarty",
                      ],
                      ["auto"],
                    ));
                }
                function n(t, e) {
                  var n,
                    r = {};
                  for (n in (t = i(t))) n !== e && (r[n] = t[n]);
                  if (e && t[e]) for (n in t[e]) r[n] = t[e][n];
                  return r;
                }
                function i(t) {
                  var e,
                    n = {};
                  for (e in t) {
                    n[e.replace(/-/g, "_")] = t[e];
                  }
                  return n;
                }
                (e.prototype._get_array = function (t, e) {
                  var n = this.raw_options[t],
                    i = e || [];
                  return (
                    "object" == typeof n
                      ? null !== n &&
                        "function" == typeof n.concat &&
                        (i = n.concat())
                      : "string" == typeof n &&
                        (i = n.split(/[^a-zA-Z0-9_\/\-]+/)),
                    i
                  );
                }),
                  (e.prototype._get_boolean = function (t, e) {
                    var n = this.raw_options[t];
                    return void 0 === n ? !!e : !!n;
                  }),
                  (e.prototype._get_characters = function (t, e) {
                    var n = this.raw_options[t],
                      i = e || "";
                    return (
                      "string" == typeof n &&
                        (i = n
                          .replace(/\\r/, "\r")
                          .replace(/\\n/, "\n")
                          .replace(/\\t/, "\t")),
                      i
                    );
                  }),
                  (e.prototype._get_number = function (t, e) {
                    var n = this.raw_options[t];
                    (e = parseInt(e, 10)), isNaN(e) && (e = 0);
                    var i = parseInt(n, 10);
                    return isNaN(i) && (i = e), i;
                  }),
                  (e.prototype._get_selection = function (t, e, n) {
                    var i = this._get_selection_list(t, e, n);
                    if (1 !== i.length)
                      throw new Error(
                        "Invalid Option Value: The option '" +
                          t +
                          "' can only be one of the following values:\n" +
                          e +
                          "\nYou passed in: '" +
                          this.raw_options[t] +
                          "'",
                      );
                    return i[0];
                  }),
                  (e.prototype._get_selection_list = function (t, e, n) {
                    if (!e || 0 === e.length)
                      throw new Error("Selection list cannot be empty.");
                    if (((n = n || [e[0]]), !this._is_valid_selection(n, e)))
                      throw new Error("Invalid Default Value!");
                    var i = this._get_array(t, n);
                    if (!this._is_valid_selection(i, e))
                      throw new Error(
                        "Invalid Option Value: The option '" +
                          t +
                          "' can contain only the following values:\n" +
                          e +
                          "\nYou passed in: '" +
                          this.raw_options[t] +
                          "'",
                      );
                    return i;
                  }),
                  (e.prototype._is_valid_selection = function (t, e) {
                    return (
                      t.length &&
                      e.length &&
                      !t.some(function (t) {
                        return -1 === e.indexOf(t);
                      })
                    );
                  }),
                  (t.exports.Options = e),
                  (t.exports.normalizeOpts = i),
                  (t.exports.mergeOpts = n);
              },
              ,
              function (t) {
                var e = RegExp.prototype.hasOwnProperty("sticky");
                function n(t) {
                  (this.__input = t || ""),
                    (this.__input_length = this.__input.length),
                    (this.__position = 0);
                }
                (n.prototype.restart = function () {
                  this.__position = 0;
                }),
                  (n.prototype.back = function () {
                    this.__position > 0 && (this.__position -= 1);
                  }),
                  (n.prototype.hasNext = function () {
                    return this.__position < this.__input_length;
                  }),
                  (n.prototype.next = function () {
                    var t = null;
                    return (
                      this.hasNext() &&
                        ((t = this.__input.charAt(this.__position)),
                        (this.__position += 1)),
                      t
                    );
                  }),
                  (n.prototype.peek = function (t) {
                    var e = null;
                    return (
                      (t = t || 0),
                      (t += this.__position) >= 0 &&
                        t < this.__input_length &&
                        (e = this.__input.charAt(t)),
                      e
                    );
                  }),
                  (n.prototype.__match = function (t, n) {
                    t.lastIndex = n;
                    var i = t.exec(this.__input);
                    return (
                      !i || (e && t.sticky) || (i.index !== n && (i = null)), i
                    );
                  }),
                  (n.prototype.test = function (t, e) {
                    return (
                      (e = e || 0),
                      (e += this.__position) >= 0 &&
                        e < this.__input_length &&
                        !!this.__match(t, e)
                    );
                  }),
                  (n.prototype.testChar = function (t, e) {
                    var n = this.peek(e);
                    return (t.lastIndex = 0), null !== n && t.test(n);
                  }),
                  (n.prototype.match = function (t) {
                    var e = this.__match(t, this.__position);
                    return e ? (this.__position += e[0].length) : (e = null), e;
                  }),
                  (n.prototype.read = function (t, e, n) {
                    var i,
                      r = "";
                    return (
                      t && (i = this.match(t)) && (r += i[0]),
                      !e || (!i && t) || (r += this.readUntil(e, n)),
                      r
                    );
                  }),
                  (n.prototype.readUntil = function (t, e) {
                    var n,
                      i = this.__position;
                    t.lastIndex = this.__position;
                    var r = t.exec(this.__input);
                    return (
                      r
                        ? ((i = r.index), e && (i += r[0].length))
                        : (i = this.__input_length),
                      (n = this.__input.substring(this.__position, i)),
                      (this.__position = i),
                      n
                    );
                  }),
                  (n.prototype.readUntilAfter = function (t) {
                    return this.readUntil(t, !0);
                  }),
                  (n.prototype.get_regexp = function (t, n) {
                    var i = null,
                      r = "g";
                    return (
                      n && e && (r = "y"),
                      "string" == typeof t && "" !== t
                        ? (i = new RegExp(t, r))
                        : t && (i = new RegExp(t.source, r)),
                      i
                    );
                  }),
                  (n.prototype.get_literal_regexp = function (t) {
                    return RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
                  }),
                  (n.prototype.peekUntilAfter = function (t) {
                    var e = this.__position,
                      n = this.readUntilAfter(t);
                    return (this.__position = e), n;
                  }),
                  (n.prototype.lookBack = function (t) {
                    var e = this.__position - 1;
                    return (
                      e >= t.length &&
                      this.__input.substring(e - t.length, e).toLowerCase() ===
                        t
                    );
                  }),
                  (t.exports.InputScanner = n);
              },
              ,
              ,
              ,
              ,
              function (t) {
                function e(t, e) {
                  (t = "string" == typeof t ? t : t.source),
                    (e = "string" == typeof e ? e : e.source),
                    (this.__directives_block_pattern = new RegExp(
                      t + / beautify( \w+[:]\w+)+ /.source + e,
                      "g",
                    )),
                    (this.__directive_pattern = / (\w+)[:](\w+)/g),
                    (this.__directives_end_ignore_pattern = new RegExp(
                      t + /\sbeautify\signore:end\s/.source + e,
                      "g",
                    ));
                }
                (e.prototype.get_directives = function (t) {
                  if (!t.match(this.__directives_block_pattern)) return null;
                  var e = {};
                  this.__directive_pattern.lastIndex = 0;
                  for (var n = this.__directive_pattern.exec(t); n; )
                    (e[n[1]] = n[2]), (n = this.__directive_pattern.exec(t));
                  return e;
                }),
                  (e.prototype.readIgnored = function (t) {
                    return t.readUntilAfter(
                      this.__directives_end_ignore_pattern,
                    );
                  }),
                  (t.exports.Directives = e);
              },
              ,
              function (t, e, n) {
                var i = n(16).Beautifier,
                  r = n(17).Options;
                (t.exports = function (t, e) {
                  return new i(t, e).beautify();
                }),
                  (t.exports.defaultOptions = function () {
                    return new r();
                  });
              },
              function (t, e, n) {
                var i = n(17).Options,
                  r = n(2).Output,
                  o = n(8).InputScanner,
                  s = new (0, n(13).Directives)(/\/\*/, /\*\//),
                  a = /\r\n|[\r\n]/,
                  u = /\r\n|[\r\n]/g,
                  l = /\s/,
                  c = /(?:\s|\n)+/g,
                  h = /\/\*(?:[\s\S]*?)((?:\*\/)|$)/g,
                  p = /\/\/(?:[^\n\r\u2028\u2029]*)/g;
                function d(t, e) {
                  (this._source_text = t || ""),
                    (this._options = new i(e)),
                    (this._ch = null),
                    (this._input = null),
                    (this.NESTED_AT_RULE = {
                      "@page": !0,
                      "@font-face": !0,
                      "@keyframes": !0,
                      "@media": !0,
                      "@supports": !0,
                      "@document": !0,
                    }),
                    (this.CONDITIONAL_GROUP_RULE = {
                      "@media": !0,
                      "@supports": !0,
                      "@document": !0,
                    }),
                    (this.NON_SEMICOLON_NEWLINE_PROPERTY = [
                      "grid-template-areas",
                      "grid-template",
                    ]);
                }
                (d.prototype.eatString = function (t) {
                  var e = "";
                  for (this._ch = this._input.next(); this._ch; ) {
                    if (((e += this._ch), "\\" === this._ch))
                      e += this._input.next();
                    else if (-1 !== t.indexOf(this._ch) || "\n" === this._ch)
                      break;
                    this._ch = this._input.next();
                  }
                  return e;
                }),
                  (d.prototype.eatWhitespace = function (t) {
                    for (
                      var e = l.test(this._input.peek()), n = 0;
                      l.test(this._input.peek());

                    )
                      (this._ch = this._input.next()),
                        t &&
                          "\n" === this._ch &&
                          (0 === n ||
                            n < this._options.max_preserve_newlines) &&
                          (n++, this._output.add_new_line(!0));
                    return e;
                  }),
                  (d.prototype.foundNestedPseudoClass = function () {
                    for (var t = 0, e = 1, n = this._input.peek(e); n; ) {
                      if ("{" === n) return !0;
                      if ("(" === n) t += 1;
                      else if (")" === n) {
                        if (0 === t) return !1;
                        t -= 1;
                      } else if (";" === n || "}" === n) return !1;
                      e++, (n = this._input.peek(e));
                    }
                    return !1;
                  }),
                  (d.prototype.print_string = function (t) {
                    this._output.set_indent(this._indentLevel),
                      (this._output.non_breaking_space = !0),
                      this._output.add_token(t);
                  }),
                  (d.prototype.preserveSingleSpace = function (t) {
                    t && (this._output.space_before_token = !0);
                  }),
                  (d.prototype.indent = function () {
                    this._indentLevel++;
                  }),
                  (d.prototype.outdent = function () {
                    this._indentLevel > 0 && this._indentLevel--;
                  }),
                  (d.prototype.beautify = function () {
                    if (this._options.disabled) return this._source_text;
                    var t = this._source_text,
                      e = this._options.eol;
                    "auto" === e &&
                      ((e = "\n"), t && a.test(t || "") && (e = t.match(a)[0]));
                    var n = (t = t.replace(u, "\n")).match(/^[\t ]*/)[0];
                    (this._output = new r(this._options, n)),
                      (this._input = new o(t)),
                      (this._indentLevel = 0),
                      (this._nestedLevel = 0),
                      (this._ch = null);
                    for (
                      var i,
                        d,
                        _ = 0,
                        f = !1,
                        g = !1,
                        m = !1,
                        v = !1,
                        y = !1,
                        b = !1,
                        w = this._ch,
                        x = !1;
                      (i = "" !== this._input.read(c)),
                        (d = w),
                        (this._ch = this._input.next()),
                        "\\" === this._ch &&
                          this._input.hasNext() &&
                          (this._ch += this._input.next()),
                        (w = this._ch),
                        this._ch;

                    )
                      if ("/" === this._ch && "*" === this._input.peek()) {
                        this._output.add_new_line(), this._input.back();
                        var k = this._input.read(h),
                          C = s.get_directives(k);
                        C &&
                          "start" === C.ignore &&
                          (k += s.readIgnored(this._input)),
                          this.print_string(k),
                          this.eatWhitespace(!0),
                          this._output.add_new_line();
                      } else if ("/" === this._ch && "/" === this._input.peek())
                        (this._output.space_before_token = !0),
                          this._input.back(),
                          this.print_string(this._input.read(p)),
                          this.eatWhitespace(!0);
                      else if ("@" === this._ch || "$" === this._ch)
                        if (
                          (this.preserveSingleSpace(i),
                          "{" === this._input.peek())
                        )
                          this.print_string(this._ch + this.eatString("}"));
                        else {
                          this.print_string(this._ch);
                          var T =
                            this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);
                          T.match(/[ :]$/) &&
                            ((T = this.eatString(": ").replace(/\s$/, "")),
                            this.print_string(T),
                            (this._output.space_before_token = !0)),
                            "extend" === (T = T.replace(/\s$/, ""))
                              ? (v = !0)
                              : "import" === T && (y = !0),
                            T in this.NESTED_AT_RULE
                              ? ((this._nestedLevel += 1),
                                T in this.CONDITIONAL_GROUP_RULE && (m = !0))
                              : f ||
                                0 !== _ ||
                                -1 === T.indexOf(":") ||
                                ((g = !0), this.indent());
                        }
                      else if ("#" === this._ch && "{" === this._input.peek())
                        this.preserveSingleSpace(i),
                          this.print_string(this._ch + this.eatString("}"));
                      else if ("{" === this._ch)
                        g && ((g = !1), this.outdent()),
                          m
                            ? ((m = !1),
                              (f = this._indentLevel >= this._nestedLevel))
                            : (f = this._indentLevel >= this._nestedLevel - 1),
                          this._options.newline_between_rules &&
                            f &&
                            this._output.previous_line &&
                            "{" !== this._output.previous_line.item(-1) &&
                            this._output.ensure_empty_line_above("/", ","),
                          (this._output.space_before_token = !0),
                          "expand" === this._options.brace_style
                            ? (this._output.add_new_line(),
                              this.print_string(this._ch),
                              this.indent(),
                              this._output.set_indent(this._indentLevel))
                            : ("(" === d
                                ? (this._output.space_before_token = !1)
                                : "," !== d && this.indent(),
                              this.print_string(this._ch)),
                          this.eatWhitespace(!0),
                          this._output.add_new_line();
                      else if ("}" === this._ch)
                        this.outdent(),
                          this._output.add_new_line(),
                          "{" === d && this._output.trim(!0),
                          (y = !1),
                          (v = !1),
                          g && (this.outdent(), (g = !1)),
                          this.print_string(this._ch),
                          (f = !1),
                          this._nestedLevel && this._nestedLevel--,
                          this.eatWhitespace(!0),
                          this._output.add_new_line(),
                          this._options.newline_between_rules &&
                            !this._output.just_added_blankline() &&
                            "}" !== this._input.peek() &&
                            this._output.add_new_line(!0),
                          ")" === this._input.peek() &&
                            (this._output.trim(!0),
                            "expand" === this._options.brace_style &&
                              this._output.add_new_line(!0));
                      else if (":" === this._ch) {
                        for (
                          var S = 0;
                          S < this.NON_SEMICOLON_NEWLINE_PROPERTY.length;
                          S++
                        )
                          if (
                            this._input.lookBack(
                              this.NON_SEMICOLON_NEWLINE_PROPERTY[S],
                            )
                          ) {
                            x = !0;
                            break;
                          }
                        (!f && !m) ||
                        this._input.lookBack("&") ||
                        this.foundNestedPseudoClass() ||
                        this._input.lookBack("(") ||
                        v ||
                        0 !== _
                          ? (this._input.lookBack(" ") &&
                              (this._output.space_before_token = !0),
                            ":" === this._input.peek()
                              ? ((this._ch = this._input.next()),
                                this.print_string("::"))
                              : this.print_string(":"))
                          : (this.print_string(":"),
                            g ||
                              ((g = !0),
                              (this._output.space_before_token = !0),
                              this.eatWhitespace(!0),
                              this.indent()));
                      } else if ('"' === this._ch || "'" === this._ch) {
                        var M = '"' === d || "'" === d;
                        this.preserveSingleSpace(M || i),
                          this.print_string(
                            this._ch + this.eatString(this._ch),
                          ),
                          this.eatWhitespace(!0);
                      } else if (";" === this._ch)
                        (x = !1),
                          0 === _
                            ? (g && (this.outdent(), (g = !1)),
                              (v = !1),
                              (y = !1),
                              this.print_string(this._ch),
                              this.eatWhitespace(!0),
                              "/" !== this._input.peek() &&
                                this._output.add_new_line())
                            : (this.print_string(this._ch),
                              this.eatWhitespace(!0),
                              (this._output.space_before_token = !0));
                      else if ("(" === this._ch)
                        if (this._input.lookBack("url"))
                          this.print_string(this._ch),
                            this.eatWhitespace(),
                            _++,
                            this.indent(),
                            (this._ch = this._input.next()),
                            ")" === this._ch ||
                            '"' === this._ch ||
                            "'" === this._ch
                              ? this._input.back()
                              : this._ch &&
                                (this.print_string(
                                  this._ch + this.eatString(")"),
                                ),
                                _ && (_--, this.outdent()));
                        else {
                          var O = !1;
                          this._input.lookBack("with") && (O = !0),
                            this.preserveSingleSpace(i || O),
                            this.print_string(this._ch),
                            g &&
                            "$" === d &&
                            this._options.selector_separator_newline
                              ? (this._output.add_new_line(), (b = !0))
                              : (this.eatWhitespace(), _++, this.indent());
                        }
                      else if (")" === this._ch)
                        _ && (_--, this.outdent()),
                          b &&
                            ";" === this._input.peek() &&
                            this._options.selector_separator_newline &&
                            ((b = !1),
                            this.outdent(),
                            this._output.add_new_line()),
                          this.print_string(this._ch);
                      else if ("," === this._ch)
                        this.print_string(this._ch),
                          this.eatWhitespace(!0),
                          !this._options.selector_separator_newline ||
                          (g && !b) ||
                          0 !== _ ||
                          y ||
                          v
                            ? (this._output.space_before_token = !0)
                            : this._output.add_new_line();
                      else if (
                        (">" !== this._ch &&
                          "+" !== this._ch &&
                          "~" !== this._ch) ||
                        g ||
                        0 !== _
                      )
                        if ("]" === this._ch) this.print_string(this._ch);
                        else if ("[" === this._ch)
                          this.preserveSingleSpace(i),
                            this.print_string(this._ch);
                        else if ("=" === this._ch)
                          this.eatWhitespace(),
                            this.print_string("="),
                            l.test(this._ch) && (this._ch = "");
                        else if (
                          "!" !== this._ch ||
                          this._input.lookBack("\\")
                        ) {
                          var E = '"' === d || "'" === d;
                          this.preserveSingleSpace(E || i),
                            this.print_string(this._ch),
                            !this._output.just_added_newline() &&
                              "\n" === this._input.peek() &&
                              x &&
                              this._output.add_new_line();
                        } else
                          (this._output.space_before_token = !0),
                            this.print_string(this._ch);
                      else
                        this._options.space_around_combinator
                          ? ((this._output.space_before_token = !0),
                            this.print_string(this._ch),
                            (this._output.space_before_token = !0))
                          : (this.print_string(this._ch),
                            this.eatWhitespace(),
                            this._ch && l.test(this._ch) && (this._ch = ""));
                    return this._output.get_code(e);
                  }),
                  (t.exports.Beautifier = d);
              },
              function (t, e, n) {
                var i = n(6).Options;
                function r(t) {
                  i.call(this, t, "css"),
                    (this.selector_separator_newline = this._get_boolean(
                      "selector_separator_newline",
                      !0,
                    )),
                    (this.newline_between_rules = this._get_boolean(
                      "newline_between_rules",
                      !0,
                    ));
                  var e = this._get_boolean("space_around_selector_separator");
                  this.space_around_combinator =
                    this._get_boolean("space_around_combinator") || e;
                  var n = this._get_selection_list("brace_style", [
                    "collapse",
                    "expand",
                    "end-expand",
                    "none",
                    "preserve-inline",
                  ]);
                  this.brace_style = "collapse";
                  for (var r = 0; r < n.length; r++)
                    "expand" !== n[r]
                      ? (this.brace_style = "collapse")
                      : (this.brace_style = n[r]);
                }
                (r.prototype = new i()), (t.exports.Options = r);
              },
            ],
            e = {};
          var i = (function n(i) {
            var r = e[i];
            if (void 0 !== r) return r.exports;
            var o = (e[i] = { exports: {} });
            return t[i](o, o.exports, n), o.exports;
          })(15);
          n = i;
        })();
        var r = n;
        void 0 ===
          (i = function () {
            return { css_beautify: r };
          }.apply(e, [])) || (t.exports = i);
      })();
    },
    function (t, e, n) {
      t.exports = (function () {
        "use strict";
        var t = navigator.userAgent,
          e = navigator.platform,
          n = /gecko\/\d/i.test(t),
          i = /MSIE \d/.test(t),
          r = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(t),
          o = /Edge\/(\d+)/.exec(t),
          s = i || r || o,
          a = s && (i ? document.documentMode || 6 : +(o || r)[1]),
          u = !o && /WebKit\//.test(t),
          l = u && /Qt\/\d+\.\d+/.test(t),
          c = !o && /Chrome\/(\d+)/.exec(t),
          h = c && +c[1],
          p = /Opera\//.test(t),
          d = /Apple Computer/.test(navigator.vendor),
          _ = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(t),
          f = /PhantomJS/.test(t),
          g = d && (/Mobile\/\w+/.test(t) || navigator.maxTouchPoints > 2),
          m = /Android/.test(t),
          v =
            g ||
            m ||
            /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(t),
          y = g || /Mac/.test(e),
          b = /\bCrOS\b/.test(t),
          w = /win/i.test(e),
          x = p && t.match(/Version\/(\d*\.\d*)/);
        x && (x = Number(x[1])), x && x >= 15 && ((p = !1), (u = !0));
        var k = y && (l || (p && (null == x || x < 12.11))),
          C = n || (s && a >= 9);
        function T(t) {
          return new RegExp("(^|\\s)" + t + "(?:$|\\s)\\s*");
        }
        var S,
          M = function (t, e) {
            var n = t.className,
              i = T(e).exec(n);
            if (i) {
              var r = n.slice(i.index + i[0].length);
              t.className = n.slice(0, i.index) + (r ? i[1] + r : "");
            }
          };
        function O(t) {
          for (var e = t.childNodes.length; e > 0; --e)
            t.removeChild(t.firstChild);
          return t;
        }
        function E(t, e) {
          return O(t).appendChild(e);
        }
        function L(t, e, n, i) {
          var r = document.createElement(t);
          if (
            (n && (r.className = n),
            i && (r.style.cssText = i),
            "string" == typeof e)
          )
            r.appendChild(document.createTextNode(e));
          else if (e) for (var o = 0; o < e.length; ++o) r.appendChild(e[o]);
          return r;
        }
        function A(t, e, n, i) {
          var r = L(t, e, n, i);
          return r.setAttribute("role", "presentation"), r;
        }
        function N(t, e) {
          if ((3 == e.nodeType && (e = e.parentNode), t.contains))
            return t.contains(e);
          do {
            if ((11 == e.nodeType && (e = e.host), e == t)) return !0;
          } while ((e = e.parentNode));
        }
        function R(t) {
          var e;
          try {
            e = t.activeElement;
          } catch (n) {
            e = t.body || null;
          }
          for (; e && e.shadowRoot && e.shadowRoot.activeElement; )
            e = e.shadowRoot.activeElement;
          return e;
        }
        function D(t, e) {
          var n = t.className;
          T(e).test(n) || (t.className += (n ? " " : "") + e);
        }
        function P(t, e) {
          for (var n = t.split(" "), i = 0; i < n.length; i++)
            n[i] && !T(n[i]).test(e) && (e += " " + n[i]);
          return e;
        }
        S = document.createRange
          ? function (t, e, n, i) {
              var r = document.createRange();
              return r.setEnd(i || t, n), r.setStart(t, e), r;
            }
          : function (t, e, n) {
              var i = document.body.createTextRange();
              try {
                i.moveToElementText(t.parentNode);
              } catch (t) {
                return i;
              }
              return (
                i.collapse(!0),
                i.moveEnd("character", n),
                i.moveStart("character", e),
                i
              );
            };
        var W = function (t) {
          t.select();
        };
        function I(t) {
          return t.display.wrapper.ownerDocument;
        }
        function z(t) {
          return I(t).defaultView;
        }
        function j(t) {
          var e = Array.prototype.slice.call(arguments, 1);
          return function () {
            return t.apply(null, e);
          };
        }
        function F(t, e, n) {
          for (var i in (e || (e = {}), t))
            !t.hasOwnProperty(i) ||
              (!1 === n && e.hasOwnProperty(i)) ||
              (e[i] = t[i]);
          return e;
        }
        function H(t, e, n, i, r) {
          null == e && -1 == (e = t.search(/[^\s\u00a0]/)) && (e = t.length);
          for (var o = i || 0, s = r || 0; ; ) {
            var a = t.indexOf("\t", o);
            if (a < 0 || a >= e) return s + (e - o);
            (s += a - o), (s += n - (s % n)), (o = a + 1);
          }
        }
        g
          ? (W = function (t) {
              (t.selectionStart = 0), (t.selectionEnd = t.value.length);
            })
          : s &&
            (W = function (t) {
              try {
                t.select();
              } catch (t) {}
            });
        var B = function () {
          (this.id = null),
            (this.f = null),
            (this.time = 0),
            (this.handler = j(this.onTimeout, this));
        };
        function U(t, e) {
          for (var n = 0; n < t.length; ++n) if (t[n] == e) return n;
          return -1;
        }
        (B.prototype.onTimeout = function (t) {
          (t.id = 0),
            t.time <= +new Date()
              ? t.f()
              : setTimeout(t.handler, t.time - +new Date());
        }),
          (B.prototype.set = function (t, e) {
            this.f = e;
            var n = +new Date() + t;
            (!this.id || n < this.time) &&
              (clearTimeout(this.id),
              (this.id = setTimeout(this.handler, t)),
              (this.time = n));
          });
        var V = {
            toString: function () {
              return "CodeMirror.Pass";
            },
          },
          K = { scroll: !1 },
          G = { origin: "*mouse" },
          X = { origin: "+move" };
        function $(t, e, n) {
          for (var i = 0, r = 0; ; ) {
            var o = t.indexOf("\t", i);
            -1 == o && (o = t.length);
            var s = o - i;
            if (o == t.length || r + s >= e) return i + Math.min(s, e - r);
            if (((r += o - i), (i = o + 1), (r += n - (r % n)) >= e)) return i;
          }
        }
        var q = [""];
        function Y(t) {
          for (; q.length <= t; ) q.push(Q(q) + " ");
          return q[t];
        }
        function Q(t) {
          return t[t.length - 1];
        }
        function Z(t, e) {
          for (var n = [], i = 0; i < t.length; i++) n[i] = e(t[i], i);
          return n;
        }
        function J() {}
        function tt(t, e) {
          var n;
          return (
            Object.create
              ? (n = Object.create(t))
              : ((J.prototype = t), (n = new J())),
            e && F(e, n),
            n
          );
        }
        var et =
          /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
        function nt(t) {
          return (
            /\w/.test(t) ||
            (t > "" && (t.toUpperCase() != t.toLowerCase() || et.test(t)))
          );
        }
        function it(t, e) {
          return e
            ? !!(e.source.indexOf("\\w") > -1 && nt(t)) || e.test(t)
            : nt(t);
        }
        function rt(t) {
          for (var e in t) if (t.hasOwnProperty(e) && t[e]) return !1;
          return !0;
        }
        var ot =
          /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
        function st(t) {
          return t.charCodeAt(0) >= 768 && ot.test(t);
        }
        function at(t, e, n) {
          for (; (n < 0 ? e > 0 : e < t.length) && st(t.charAt(e)); ) e += n;
          return e;
        }
        function ut(t, e, n) {
          for (var i = e > n ? -1 : 1; ; ) {
            if (e == n) return e;
            var r = (e + n) / 2,
              o = i < 0 ? Math.ceil(r) : Math.floor(r);
            if (o == e) return t(o) ? e : n;
            t(o) ? (n = o) : (e = o + i);
          }
        }
        var lt = null;
        function ct(t, e, n) {
          var i;
          lt = null;
          for (var r = 0; r < t.length; ++r) {
            var o = t[r];
            if (o.from < e && o.to > e) return r;
            o.to == e && (o.from != o.to && "before" == n ? (i = r) : (lt = r)),
              o.from == e &&
                (o.from != o.to && "before" != n ? (i = r) : (lt = r));
          }
          return null != i ? i : lt;
        }
        var ht = (function () {
          var t = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
            e = /[stwN]/,
            n = /[LRr]/,
            i = /[Lb1n]/,
            r = /[1n]/;
          function o(t, e, n) {
            (this.level = t), (this.from = e), (this.to = n);
          }
          return function (s, a) {
            var u = "ltr" == a ? "L" : "R";
            if (0 == s.length || ("ltr" == a && !t.test(s))) return !1;
            for (var l, c = s.length, h = [], p = 0; p < c; ++p)
              h.push(
                (l = s.charCodeAt(p)) <= 247
                  ? "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN".charAt(
                      l,
                    )
                  : 1424 <= l && l <= 1524
                    ? "R"
                    : 1536 <= l && l <= 1785
                      ? "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111".charAt(
                          l - 1536,
                        )
                      : 1774 <= l && l <= 2220
                        ? "r"
                        : 8192 <= l && l <= 8203
                          ? "w"
                          : 8204 == l
                            ? "b"
                            : "L",
              );
            for (var d = 0, _ = u; d < c; ++d) {
              var f = h[d];
              "m" == f ? (h[d] = _) : (_ = f);
            }
            for (var g = 0, m = u; g < c; ++g) {
              var v = h[g];
              "1" == v && "r" == m
                ? (h[g] = "n")
                : n.test(v) && ((m = v), "r" == v && (h[g] = "R"));
            }
            for (var y = 1, b = h[0]; y < c - 1; ++y) {
              var w = h[y];
              "+" == w && "1" == b && "1" == h[y + 1]
                ? (h[y] = "1")
                : "," != w ||
                  b != h[y + 1] ||
                  ("1" != b && "n" != b) ||
                  (h[y] = b),
                (b = w);
            }
            for (var x = 0; x < c; ++x) {
              var k = h[x];
              if ("," == k) h[x] = "N";
              else if ("%" == k) {
                var C = void 0;
                for (C = x + 1; C < c && "%" == h[C]; ++C);
                for (
                  var T =
                      (x && "!" == h[x - 1]) || (C < c && "1" == h[C])
                        ? "1"
                        : "N",
                    S = x;
                  S < C;
                  ++S
                )
                  h[S] = T;
                x = C - 1;
              }
            }
            for (var M = 0, O = u; M < c; ++M) {
              var E = h[M];
              "L" == O && "1" == E ? (h[M] = "L") : n.test(E) && (O = E);
            }
            for (var L = 0; L < c; ++L)
              if (e.test(h[L])) {
                var A = void 0;
                for (A = L + 1; A < c && e.test(h[A]); ++A);
                for (
                  var N = "L" == (L ? h[L - 1] : u),
                    R = N == ("L" == (A < c ? h[A] : u)) ? (N ? "L" : "R") : u,
                    D = L;
                  D < A;
                  ++D
                )
                  h[D] = R;
                L = A - 1;
              }
            for (var P, W = [], I = 0; I < c; )
              if (i.test(h[I])) {
                var z = I;
                for (++I; I < c && i.test(h[I]); ++I);
                W.push(new o(0, z, I));
              } else {
                var j = I,
                  F = W.length,
                  H = "rtl" == a ? 1 : 0;
                for (++I; I < c && "L" != h[I]; ++I);
                for (var B = j; B < I; )
                  if (r.test(h[B])) {
                    j < B && (W.splice(F, 0, new o(1, j, B)), (F += H));
                    var U = B;
                    for (++B; B < I && r.test(h[B]); ++B);
                    W.splice(F, 0, new o(2, U, B)), (F += H), (j = B);
                  } else ++B;
                j < I && W.splice(F, 0, new o(1, j, I));
              }
            return (
              "ltr" == a &&
                (1 == W[0].level &&
                  (P = s.match(/^\s+/)) &&
                  ((W[0].from = P[0].length),
                  W.unshift(new o(0, 0, P[0].length))),
                1 == Q(W).level &&
                  (P = s.match(/\s+$/)) &&
                  ((Q(W).to -= P[0].length),
                  W.push(new o(0, c - P[0].length, c)))),
              "rtl" == a ? W.reverse() : W
            );
          };
        })();
        function pt(t, e) {
          var n = t.order;
          return null == n && (n = t.order = ht(t.text, e)), n;
        }
        var dt = [],
          _t = function (t, e, n) {
            if (t.addEventListener) t.addEventListener(e, n, !1);
            else if (t.attachEvent) t.attachEvent("on" + e, n);
            else {
              var i = t._handlers || (t._handlers = {});
              i[e] = (i[e] || dt).concat(n);
            }
          };
        function ft(t, e) {
          return (t._handlers && t._handlers[e]) || dt;
        }
        function gt(t, e, n) {
          if (t.removeEventListener) t.removeEventListener(e, n, !1);
          else if (t.detachEvent) t.detachEvent("on" + e, n);
          else {
            var i = t._handlers,
              r = i && i[e];
            if (r) {
              var o = U(r, n);
              o > -1 && (i[e] = r.slice(0, o).concat(r.slice(o + 1)));
            }
          }
        }
        function mt(t, e) {
          var n = ft(t, e);
          if (n.length)
            for (
              var i = Array.prototype.slice.call(arguments, 2), r = 0;
              r < n.length;
              ++r
            )
              n[r].apply(null, i);
        }
        function vt(t, e, n) {
          return (
            "string" == typeof e &&
              (e = {
                type: e,
                preventDefault: function () {
                  this.defaultPrevented = !0;
                },
              }),
            mt(t, n || e.type, t, e),
            Ct(e) || e.codemirrorIgnore
          );
        }
        function yt(t) {
          var e = t._handlers && t._handlers.cursorActivity;
          if (e)
            for (
              var n =
                  t.curOp.cursorActivityHandlers ||
                  (t.curOp.cursorActivityHandlers = []),
                i = 0;
              i < e.length;
              ++i
            )
              -1 == U(n, e[i]) && n.push(e[i]);
        }
        function bt(t, e) {
          return ft(t, e).length > 0;
        }
        function wt(t) {
          (t.prototype.on = function (t, e) {
            _t(this, t, e);
          }),
            (t.prototype.off = function (t, e) {
              gt(this, t, e);
            });
        }
        function xt(t) {
          t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
        }
        function kt(t) {
          t.stopPropagation ? t.stopPropagation() : (t.cancelBubble = !0);
        }
        function Ct(t) {
          return null != t.defaultPrevented
            ? t.defaultPrevented
            : 0 == t.returnValue;
        }
        function Tt(t) {
          xt(t), kt(t);
        }
        function St(t) {
          return t.target || t.srcElement;
        }
        function Mt(t) {
          var e = t.which;
          return (
            null == e &&
              (1 & t.button
                ? (e = 1)
                : 2 & t.button
                  ? (e = 3)
                  : 4 & t.button && (e = 2)),
            y && t.ctrlKey && 1 == e && (e = 3),
            e
          );
        }
        var Ot,
          Et,
          Lt = (function () {
            if (s && a < 9) return !1;
            var t = L("div");
            return "draggable" in t || "dragDrop" in t;
          })();
        function At(t) {
          if (null == Ot) {
            var e = L("span", "​");
            E(t, L("span", [e, document.createTextNode("x")])),
              0 != t.firstChild.offsetHeight &&
                (Ot =
                  e.offsetWidth <= 1 && e.offsetHeight > 2 && !(s && a < 8));
          }
          var n = Ot
            ? L("span", "​")
            : L(
                "span",
                " ",
                null,
                "display: inline-block; width: 1px; margin-right: -1px",
              );
          return n.setAttribute("cm-text", ""), n;
        }
        function Nt(t) {
          if (null != Et) return Et;
          var e = E(t, document.createTextNode("AخA")),
            n = S(e, 0, 1).getBoundingClientRect(),
            i = S(e, 1, 2).getBoundingClientRect();
          return (
            O(t), !(!n || n.left == n.right) && (Et = i.right - n.right < 3)
          );
        }
        var Rt,
          Dt =
            3 != "\n\nb".split(/\n/).length
              ? function (t) {
                  for (var e = 0, n = [], i = t.length; e <= i; ) {
                    var r = t.indexOf("\n", e);
                    -1 == r && (r = t.length);
                    var o = t.slice(e, "\r" == t.charAt(r - 1) ? r - 1 : r),
                      s = o.indexOf("\r");
                    -1 != s
                      ? (n.push(o.slice(0, s)), (e += s + 1))
                      : (n.push(o), (e = r + 1));
                  }
                  return n;
                }
              : function (t) {
                  return t.split(/\r\n?|\n/);
                },
          Pt = window.getSelection
            ? function (t) {
                try {
                  return t.selectionStart != t.selectionEnd;
                } catch (t) {
                  return !1;
                }
              }
            : function (t) {
                var e;
                try {
                  e = t.ownerDocument.selection.createRange();
                } catch (t) {}
                return (
                  !(!e || e.parentElement() != t) &&
                  0 != e.compareEndPoints("StartToEnd", e)
                );
              },
          Wt =
            "oncopy" in (Rt = L("div")) ||
            (Rt.setAttribute("oncopy", "return;"),
            "function" == typeof Rt.oncopy),
          It = null,
          zt = {},
          jt = {};
        function Ft(t, e) {
          arguments.length > 2 &&
            (e.dependencies = Array.prototype.slice.call(arguments, 2)),
            (zt[t] = e);
        }
        function Ht(t) {
          if ("string" == typeof t && jt.hasOwnProperty(t)) t = jt[t];
          else if (
            t &&
            "string" == typeof t.name &&
            jt.hasOwnProperty(t.name)
          ) {
            var e = jt[t.name];
            "string" == typeof e && (e = { name: e }),
              ((t = tt(e, t)).name = e.name);
          } else {
            if ("string" == typeof t && /^[\w\-]+\/[\w\-]+\+xml$/.test(t))
              return Ht("application/xml");
            if ("string" == typeof t && /^[\w\-]+\/[\w\-]+\+json$/.test(t))
              return Ht("application/json");
          }
          return "string" == typeof t ? { name: t } : t || { name: "null" };
        }
        function Bt(t, e) {
          e = Ht(e);
          var n = zt[e.name];
          if (!n) return Bt(t, "text/plain");
          var i = n(t, e);
          if (Ut.hasOwnProperty(e.name)) {
            var r = Ut[e.name];
            for (var o in r)
              r.hasOwnProperty(o) &&
                (i.hasOwnProperty(o) && (i["_" + o] = i[o]), (i[o] = r[o]));
          }
          if (
            ((i.name = e.name),
            e.helperType && (i.helperType = e.helperType),
            e.modeProps)
          )
            for (var s in e.modeProps) i[s] = e.modeProps[s];
          return i;
        }
        var Ut = {};
        function Vt(t, e) {
          F(e, Ut.hasOwnProperty(t) ? Ut[t] : (Ut[t] = {}));
        }
        function Kt(t, e) {
          if (!0 === e) return e;
          if (t.copyState) return t.copyState(e);
          var n = {};
          for (var i in e) {
            var r = e[i];
            r instanceof Array && (r = r.concat([])), (n[i] = r);
          }
          return n;
        }
        function Gt(t, e) {
          for (var n; t.innerMode && (n = t.innerMode(e)) && n.mode != t; )
            (e = n.state), (t = n.mode);
          return n || { mode: t, state: e };
        }
        function Xt(t, e, n) {
          return !t.startState || t.startState(e, n);
        }
        var $t = function (t, e, n) {
          (this.pos = this.start = 0),
            (this.string = t),
            (this.tabSize = e || 8),
            (this.lastColumnPos = this.lastColumnValue = 0),
            (this.lineStart = 0),
            (this.lineOracle = n);
        };
        function qt(t, e) {
          if ((e -= t.first) < 0 || e >= t.size)
            throw new Error(
              "There is no line " + (e + t.first) + " in the document.",
            );
          for (var n = t; !n.lines; )
            for (var i = 0; ; ++i) {
              var r = n.children[i],
                o = r.chunkSize();
              if (e < o) {
                n = r;
                break;
              }
              e -= o;
            }
          return n.lines[e];
        }
        function Yt(t, e, n) {
          var i = [],
            r = e.line;
          return (
            t.iter(e.line, n.line + 1, function (t) {
              var o = t.text;
              r == n.line && (o = o.slice(0, n.ch)),
                r == e.line && (o = o.slice(e.ch)),
                i.push(o),
                ++r;
            }),
            i
          );
        }
        function Qt(t, e, n) {
          var i = [];
          return (
            t.iter(e, n, function (t) {
              i.push(t.text);
            }),
            i
          );
        }
        function Zt(t, e) {
          var n = e - t.height;
          if (n) for (var i = t; i; i = i.parent) i.height += n;
        }
        function Jt(t) {
          if (null == t.parent) return null;
          for (
            var e = t.parent, n = U(e.lines, t), i = e.parent;
            i;
            e = i, i = i.parent
          )
            for (var r = 0; i.children[r] != e; ++r)
              n += i.children[r].chunkSize();
          return n + e.first;
        }
        function te(t, e) {
          var n = t.first;
          t: do {
            for (var i = 0; i < t.children.length; ++i) {
              var r = t.children[i],
                o = r.height;
              if (e < o) {
                t = r;
                continue t;
              }
              (e -= o), (n += r.chunkSize());
            }
            return n;
          } while (!t.lines);
          for (var s = 0; s < t.lines.length; ++s) {
            var a = t.lines[s].height;
            if (e < a) break;
            e -= a;
          }
          return n + s;
        }
        function ee(t, e) {
          return e >= t.first && e < t.first + t.size;
        }
        function ne(t, e) {
          return String(t.lineNumberFormatter(e + t.firstLineNumber));
        }
        function ie(t, e, n) {
          if ((void 0 === n && (n = null), !(this instanceof ie)))
            return new ie(t, e, n);
          (this.line = t), (this.ch = e), (this.sticky = n);
        }
        function re(t, e) {
          return t.line - e.line || t.ch - e.ch;
        }
        function oe(t, e) {
          return t.sticky == e.sticky && 0 == re(t, e);
        }
        function se(t) {
          return ie(t.line, t.ch);
        }
        function ae(t, e) {
          return re(t, e) < 0 ? e : t;
        }
        function ue(t, e) {
          return re(t, e) < 0 ? t : e;
        }
        function le(t, e) {
          return Math.max(t.first, Math.min(e, t.first + t.size - 1));
        }
        function ce(t, e) {
          if (e.line < t.first) return ie(t.first, 0);
          var n = t.first + t.size - 1;
          return e.line > n
            ? ie(n, qt(t, n).text.length)
            : (function (t, e) {
                var n = t.ch;
                return null == n || n > e
                  ? ie(t.line, e)
                  : n < 0
                    ? ie(t.line, 0)
                    : t;
              })(e, qt(t, e.line).text.length);
        }
        function he(t, e) {
          for (var n = [], i = 0; i < e.length; i++) n[i] = ce(t, e[i]);
          return n;
        }
        ($t.prototype.eol = function () {
          return this.pos >= this.string.length;
        }),
          ($t.prototype.sol = function () {
            return this.pos == this.lineStart;
          }),
          ($t.prototype.peek = function () {
            return this.string.charAt(this.pos) || void 0;
          }),
          ($t.prototype.next = function () {
            if (this.pos < this.string.length)
              return this.string.charAt(this.pos++);
          }),
          ($t.prototype.eat = function (t) {
            var e = this.string.charAt(this.pos);
            if (
              "string" == typeof t ? e == t : e && (t.test ? t.test(e) : t(e))
            )
              return ++this.pos, e;
          }),
          ($t.prototype.eatWhile = function (t) {
            for (var e = this.pos; this.eat(t); );
            return this.pos > e;
          }),
          ($t.prototype.eatSpace = function () {
            for (
              var t = this.pos;
              /[\s\u00a0]/.test(this.string.charAt(this.pos));

            )
              ++this.pos;
            return this.pos > t;
          }),
          ($t.prototype.skipToEnd = function () {
            this.pos = this.string.length;
          }),
          ($t.prototype.skipTo = function (t) {
            var e = this.string.indexOf(t, this.pos);
            if (e > -1) return (this.pos = e), !0;
          }),
          ($t.prototype.backUp = function (t) {
            this.pos -= t;
          }),
          ($t.prototype.column = function () {
            return (
              this.lastColumnPos < this.start &&
                ((this.lastColumnValue = H(
                  this.string,
                  this.start,
                  this.tabSize,
                  this.lastColumnPos,
                  this.lastColumnValue,
                )),
                (this.lastColumnPos = this.start)),
              this.lastColumnValue -
                (this.lineStart
                  ? H(this.string, this.lineStart, this.tabSize)
                  : 0)
            );
          }),
          ($t.prototype.indentation = function () {
            return (
              H(this.string, null, this.tabSize) -
              (this.lineStart
                ? H(this.string, this.lineStart, this.tabSize)
                : 0)
            );
          }),
          ($t.prototype.match = function (t, e, n) {
            if ("string" != typeof t) {
              var i = this.string.slice(this.pos).match(t);
              return i && i.index > 0
                ? null
                : (i && !1 !== e && (this.pos += i[0].length), i);
            }
            var r = function (t) {
              return n ? t.toLowerCase() : t;
            };
            if (r(this.string.substr(this.pos, t.length)) == r(t))
              return !1 !== e && (this.pos += t.length), !0;
          }),
          ($t.prototype.current = function () {
            return this.string.slice(this.start, this.pos);
          }),
          ($t.prototype.hideFirstChars = function (t, e) {
            this.lineStart += t;
            try {
              return e();
            } finally {
              this.lineStart -= t;
            }
          }),
          ($t.prototype.lookAhead = function (t) {
            var e = this.lineOracle;
            return e && e.lookAhead(t);
          }),
          ($t.prototype.baseToken = function () {
            var t = this.lineOracle;
            return t && t.baseToken(this.pos);
          });
        var pe = function (t, e) {
            (this.state = t), (this.lookAhead = e);
          },
          de = function (t, e, n, i) {
            (this.state = e),
              (this.doc = t),
              (this.line = n),
              (this.maxLookAhead = i || 0),
              (this.baseTokens = null),
              (this.baseTokenPos = 1);
          };
        function _e(t, e, n, i) {
          var r = [t.state.modeGen],
            o = {};
          ke(
            t,
            e.text,
            t.doc.mode,
            n,
            function (t, e) {
              return r.push(t, e);
            },
            o,
            i,
          );
          for (
            var s = n.state,
              a = function (i) {
                n.baseTokens = r;
                var a = t.state.overlays[i],
                  u = 1,
                  l = 0;
                (n.state = !0),
                  ke(
                    t,
                    e.text,
                    a.mode,
                    n,
                    function (t, e) {
                      for (var n = u; l < t; ) {
                        var i = r[u];
                        i > t && r.splice(u, 1, t, r[u + 1], i),
                          (u += 2),
                          (l = Math.min(t, i));
                      }
                      if (e)
                        if (a.opaque)
                          r.splice(n, u - n, t, "overlay " + e), (u = n + 2);
                        else
                          for (; n < u; n += 2) {
                            var o = r[n + 1];
                            r[n + 1] = (o ? o + " " : "") + "overlay " + e;
                          }
                    },
                    o,
                  ),
                  (n.state = s),
                  (n.baseTokens = null),
                  (n.baseTokenPos = 1);
              },
              u = 0;
            u < t.state.overlays.length;
            ++u
          )
            a(u);
          return { styles: r, classes: o.bgClass || o.textClass ? o : null };
        }
        function fe(t, e, n) {
          if (!e.styles || e.styles[0] != t.state.modeGen) {
            var i = ge(t, Jt(e)),
              r =
                e.text.length > t.options.maxHighlightLength &&
                Kt(t.doc.mode, i.state),
              o = _e(t, e, i);
            r && (i.state = r),
              (e.stateAfter = i.save(!r)),
              (e.styles = o.styles),
              o.classes
                ? (e.styleClasses = o.classes)
                : e.styleClasses && (e.styleClasses = null),
              n === t.doc.highlightFrontier &&
                (t.doc.modeFrontier = Math.max(
                  t.doc.modeFrontier,
                  ++t.doc.highlightFrontier,
                ));
          }
          return e.styles;
        }
        function ge(t, e, n) {
          var i = t.doc,
            r = t.display;
          if (!i.mode.startState) return new de(i, !0, e);
          var o = (function (t, e, n) {
              for (
                var i,
                  r,
                  o = t.doc,
                  s = n ? -1 : e - (t.doc.mode.innerMode ? 1e3 : 100),
                  a = e;
                a > s;
                --a
              ) {
                if (a <= o.first) return o.first;
                var u = qt(o, a - 1),
                  l = u.stateAfter;
                if (
                  l &&
                  (!n ||
                    a + (l instanceof pe ? l.lookAhead : 0) <= o.modeFrontier)
                )
                  return a;
                var c = H(u.text, null, t.options.tabSize);
                (null == r || i > c) && ((r = a - 1), (i = c));
              }
              return r;
            })(t, e, n),
            s = o > i.first && qt(i, o - 1).stateAfter,
            a = s ? de.fromSaved(i, s, o) : new de(i, Xt(i.mode), o);
          return (
            i.iter(o, e, function (n) {
              me(t, n.text, a);
              var i = a.line;
              (n.stateAfter =
                i == e - 1 || i % 5 == 0 || (i >= r.viewFrom && i < r.viewTo)
                  ? a.save()
                  : null),
                a.nextLine();
            }),
            n && (i.modeFrontier = a.line),
            a
          );
        }
        function me(t, e, n, i) {
          var r = t.doc.mode,
            o = new $t(e, t.options.tabSize, n);
          for (o.start = o.pos = i || 0, "" == e && ve(r, n.state); !o.eol(); )
            ye(r, o, n.state), (o.start = o.pos);
        }
        function ve(t, e) {
          if (t.blankLine) return t.blankLine(e);
          if (t.innerMode) {
            var n = Gt(t, e);
            return n.mode.blankLine ? n.mode.blankLine(n.state) : void 0;
          }
        }
        function ye(t, e, n, i) {
          for (var r = 0; r < 10; r++) {
            i && (i[0] = Gt(t, n).mode);
            var o = t.token(e, n);
            if (e.pos > e.start) return o;
          }
          throw new Error("Mode " + t.name + " failed to advance stream.");
        }
        (de.prototype.lookAhead = function (t) {
          var e = this.doc.getLine(this.line + t);
          return (
            null != e && t > this.maxLookAhead && (this.maxLookAhead = t), e
          );
        }),
          (de.prototype.baseToken = function (t) {
            if (!this.baseTokens) return null;
            for (; this.baseTokens[this.baseTokenPos] <= t; )
              this.baseTokenPos += 2;
            var e = this.baseTokens[this.baseTokenPos + 1];
            return {
              type: e && e.replace(/( |^)overlay .*/, ""),
              size: this.baseTokens[this.baseTokenPos] - t,
            };
          }),
          (de.prototype.nextLine = function () {
            this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
          }),
          (de.fromSaved = function (t, e, n) {
            return e instanceof pe
              ? new de(t, Kt(t.mode, e.state), n, e.lookAhead)
              : new de(t, Kt(t.mode, e), n);
          }),
          (de.prototype.save = function (t) {
            var e = !1 !== t ? Kt(this.doc.mode, this.state) : this.state;
            return this.maxLookAhead > 0 ? new pe(e, this.maxLookAhead) : e;
          });
        var be = function (t, e, n) {
          (this.start = t.start),
            (this.end = t.pos),
            (this.string = t.current()),
            (this.type = e || null),
            (this.state = n);
        };
        function we(t, e, n, i) {
          var r,
            o,
            s = t.doc,
            a = s.mode,
            u = qt(s, (e = ce(s, e)).line),
            l = ge(t, e.line, n),
            c = new $t(u.text, t.options.tabSize, l);
          for (i && (o = []); (i || c.pos < e.ch) && !c.eol(); )
            (c.start = c.pos),
              (r = ye(a, c, l.state)),
              i && o.push(new be(c, r, Kt(s.mode, l.state)));
          return i ? o : new be(c, r, l.state);
        }
        function xe(t, e) {
          if (t)
            for (;;) {
              var n = t.match(/(?:^|\s+)line-(background-)?(\S+)/);
              if (!n) break;
              t = t.slice(0, n.index) + t.slice(n.index + n[0].length);
              var i = n[1] ? "bgClass" : "textClass";
              null == e[i]
                ? (e[i] = n[2])
                : new RegExp("(?:^|\\s)" + n[2] + "(?:$|\\s)").test(e[i]) ||
                  (e[i] += " " + n[2]);
            }
          return t;
        }
        function ke(t, e, n, i, r, o, s) {
          var a = n.flattenSpans;
          null == a && (a = t.options.flattenSpans);
          var u,
            l = 0,
            c = null,
            h = new $t(e, t.options.tabSize, i),
            p = t.options.addModeClass && [null];
          for ("" == e && xe(ve(n, i.state), o); !h.eol(); ) {
            if (
              (h.pos > t.options.maxHighlightLength
                ? ((a = !1),
                  s && me(t, e, i, h.pos),
                  (h.pos = e.length),
                  (u = null))
                : (u = xe(ye(n, h, i.state, p), o)),
              p)
            ) {
              var d = p[0].name;
              d && (u = "m-" + (u ? d + " " + u : d));
            }
            if (!a || c != u) {
              for (; l < h.start; ) r((l = Math.min(h.start, l + 5e3)), c);
              c = u;
            }
            h.start = h.pos;
          }
          for (; l < h.pos; ) {
            var _ = Math.min(h.pos, l + 5e3);
            r(_, c), (l = _);
          }
        }
        var Ce = !1,
          Te = !1;
        function Se(t, e, n) {
          (this.marker = t), (this.from = e), (this.to = n);
        }
        function Me(t, e) {
          if (t)
            for (var n = 0; n < t.length; ++n) {
              var i = t[n];
              if (i.marker == e) return i;
            }
        }
        function Oe(t, e) {
          for (var n, i = 0; i < t.length; ++i)
            t[i] != e && (n || (n = [])).push(t[i]);
          return n;
        }
        function Ee(t, e) {
          if (e.full) return null;
          var n = ee(t, e.from.line) && qt(t, e.from.line).markedSpans,
            i = ee(t, e.to.line) && qt(t, e.to.line).markedSpans;
          if (!n && !i) return null;
          var r = e.from.ch,
            o = e.to.ch,
            s = 0 == re(e.from, e.to),
            a = (function (t, e, n) {
              var i;
              if (t)
                for (var r = 0; r < t.length; ++r) {
                  var o = t[r],
                    s = o.marker;
                  if (
                    null == o.from ||
                    (s.inclusiveLeft ? o.from <= e : o.from < e) ||
                    (o.from == e &&
                      "bookmark" == s.type &&
                      (!n || !o.marker.insertLeft))
                  ) {
                    var a =
                      null == o.to || (s.inclusiveRight ? o.to >= e : o.to > e);
                    (i || (i = [])).push(new Se(s, o.from, a ? null : o.to));
                  }
                }
              return i;
            })(n, r, s),
            u = (function (t, e, n) {
              var i;
              if (t)
                for (var r = 0; r < t.length; ++r) {
                  var o = t[r],
                    s = o.marker;
                  if (
                    null == o.to ||
                    (s.inclusiveRight ? o.to >= e : o.to > e) ||
                    (o.from == e &&
                      "bookmark" == s.type &&
                      (!n || o.marker.insertLeft))
                  ) {
                    var a =
                      null == o.from ||
                      (s.inclusiveLeft ? o.from <= e : o.from < e);
                    (i || (i = [])).push(
                      new Se(
                        s,
                        a ? null : o.from - e,
                        null == o.to ? null : o.to - e,
                      ),
                    );
                  }
                }
              return i;
            })(i, o, s),
            l = 1 == e.text.length,
            c = Q(e.text).length + (l ? r : 0);
          if (a)
            for (var h = 0; h < a.length; ++h) {
              var p = a[h];
              if (null == p.to) {
                var d = Me(u, p.marker);
                d ? l && (p.to = null == d.to ? null : d.to + c) : (p.to = r);
              }
            }
          if (u)
            for (var _ = 0; _ < u.length; ++_) {
              var f = u[_];
              null != f.to && (f.to += c),
                null == f.from
                  ? Me(a, f.marker) ||
                    ((f.from = c), l && (a || (a = [])).push(f))
                  : ((f.from += c), l && (a || (a = [])).push(f));
            }
          a && (a = Le(a)), u && u != a && (u = Le(u));
          var g = [a];
          if (!l) {
            var m,
              v = e.text.length - 2;
            if (v > 0 && a)
              for (var y = 0; y < a.length; ++y)
                null == a[y].to &&
                  (m || (m = [])).push(new Se(a[y].marker, null, null));
            for (var b = 0; b < v; ++b) g.push(m);
            g.push(u);
          }
          return g;
        }
        function Le(t) {
          for (var e = 0; e < t.length; ++e) {
            var n = t[e];
            null != n.from &&
              n.from == n.to &&
              !1 !== n.marker.clearWhenEmpty &&
              t.splice(e--, 1);
          }
          return t.length ? t : null;
        }
        function Ae(t) {
          var e = t.markedSpans;
          if (e) {
            for (var n = 0; n < e.length; ++n) e[n].marker.detachLine(t);
            t.markedSpans = null;
          }
        }
        function Ne(t, e) {
          if (e) {
            for (var n = 0; n < e.length; ++n) e[n].marker.attachLine(t);
            t.markedSpans = e;
          }
        }
        function Re(t) {
          return t.inclusiveLeft ? -1 : 0;
        }
        function De(t) {
          return t.inclusiveRight ? 1 : 0;
        }
        function Pe(t, e) {
          var n = t.lines.length - e.lines.length;
          if (0 != n) return n;
          var i = t.find(),
            r = e.find(),
            o = re(i.from, r.from) || Re(t) - Re(e);
          if (o) return -o;
          var s = re(i.to, r.to) || De(t) - De(e);
          return s || e.id - t.id;
        }
        function We(t, e) {
          var n,
            i = Te && t.markedSpans;
          if (i)
            for (var r = void 0, o = 0; o < i.length; ++o)
              (r = i[o]).marker.collapsed &&
                null == (e ? r.from : r.to) &&
                (!n || Pe(n, r.marker) < 0) &&
                (n = r.marker);
          return n;
        }
        function Ie(t) {
          return We(t, !0);
        }
        function ze(t) {
          return We(t, !1);
        }
        function je(t, e) {
          var n,
            i = Te && t.markedSpans;
          if (i)
            for (var r = 0; r < i.length; ++r) {
              var o = i[r];
              o.marker.collapsed &&
                (null == o.from || o.from < e) &&
                (null == o.to || o.to > e) &&
                (!n || Pe(n, o.marker) < 0) &&
                (n = o.marker);
            }
          return n;
        }
        function Fe(t, e, n, i, r) {
          var o = qt(t, e),
            s = Te && o.markedSpans;
          if (s)
            for (var a = 0; a < s.length; ++a) {
              var u = s[a];
              if (u.marker.collapsed) {
                var l = u.marker.find(0),
                  c = re(l.from, n) || Re(u.marker) - Re(r),
                  h = re(l.to, i) || De(u.marker) - De(r);
                if (
                  !((c >= 0 && h <= 0) || (c <= 0 && h >= 0)) &&
                  ((c <= 0 &&
                    (u.marker.inclusiveRight && r.inclusiveLeft
                      ? re(l.to, n) >= 0
                      : re(l.to, n) > 0)) ||
                    (c >= 0 &&
                      (u.marker.inclusiveRight && r.inclusiveLeft
                        ? re(l.from, i) <= 0
                        : re(l.from, i) < 0)))
                )
                  return !0;
              }
            }
        }
        function He(t) {
          for (var e; (e = Ie(t)); ) t = e.find(-1, !0).line;
          return t;
        }
        function Be(t, e) {
          var n = qt(t, e),
            i = He(n);
          return n == i ? e : Jt(i);
        }
        function Ue(t, e) {
          if (e > t.lastLine()) return e;
          var n,
            i = qt(t, e);
          if (!Ve(t, i)) return e;
          for (; (n = ze(i)); ) i = n.find(1, !0).line;
          return Jt(i) + 1;
        }
        function Ve(t, e) {
          var n = Te && e.markedSpans;
          if (n)
            for (var i = void 0, r = 0; r < n.length; ++r)
              if ((i = n[r]).marker.collapsed) {
                if (null == i.from) return !0;
                if (
                  !i.marker.widgetNode &&
                  0 == i.from &&
                  i.marker.inclusiveLeft &&
                  Ke(t, e, i)
                )
                  return !0;
              }
        }
        function Ke(t, e, n) {
          if (null == n.to) {
            var i = n.marker.find(1, !0);
            return Ke(t, i.line, Me(i.line.markedSpans, n.marker));
          }
          if (n.marker.inclusiveRight && n.to == e.text.length) return !0;
          for (var r = void 0, o = 0; o < e.markedSpans.length; ++o)
            if (
              (r = e.markedSpans[o]).marker.collapsed &&
              !r.marker.widgetNode &&
              r.from == n.to &&
              (null == r.to || r.to != n.from) &&
              (r.marker.inclusiveLeft || n.marker.inclusiveRight) &&
              Ke(t, e, r)
            )
              return !0;
        }
        function Ge(t) {
          for (
            var e = 0, n = (t = He(t)).parent, i = 0;
            i < n.lines.length;
            ++i
          ) {
            var r = n.lines[i];
            if (r == t) break;
            e += r.height;
          }
          for (var o = n.parent; o; o = (n = o).parent)
            for (var s = 0; s < o.children.length; ++s) {
              var a = o.children[s];
              if (a == n) break;
              e += a.height;
            }
          return e;
        }
        function Xe(t) {
          if (0 == t.height) return 0;
          for (var e, n = t.text.length, i = t; (e = Ie(i)); ) {
            var r = e.find(0, !0);
            (i = r.from.line), (n += r.from.ch - r.to.ch);
          }
          for (i = t; (e = ze(i)); ) {
            var o = e.find(0, !0);
            (n -= i.text.length - o.from.ch),
              (n += (i = o.to.line).text.length - o.to.ch);
          }
          return n;
        }
        function $e(t) {
          var e = t.display,
            n = t.doc;
          (e.maxLine = qt(n, n.first)),
            (e.maxLineLength = Xe(e.maxLine)),
            (e.maxLineChanged = !0),
            n.iter(function (t) {
              var n = Xe(t);
              n > e.maxLineLength && ((e.maxLineLength = n), (e.maxLine = t));
            });
        }
        var qe = function (t, e, n) {
          (this.text = t), Ne(this, e), (this.height = n ? n(this) : 1);
        };
        function Ye(t) {
          (t.parent = null), Ae(t);
        }
        (qe.prototype.lineNo = function () {
          return Jt(this);
        }),
          wt(qe);
        var Qe = {},
          Ze = {};
        function Je(t, e) {
          if (!t || /^\s*$/.test(t)) return null;
          var n = e.addModeClass ? Ze : Qe;
          return n[t] || (n[t] = t.replace(/\S+/g, "cm-$&"));
        }
        function tn(t, e) {
          var n = A("span", null, null, u ? "padding-right: .1px" : null),
            i = {
              pre: A("pre", [n], "CodeMirror-line"),
              content: n,
              col: 0,
              pos: 0,
              cm: t,
              trailingSpace: !1,
              splitSpaces: t.getOption("lineWrapping"),
            };
          e.measure = {};
          for (var r = 0; r <= (e.rest ? e.rest.length : 0); r++) {
            var o = r ? e.rest[r - 1] : e.line,
              s = void 0;
            (i.pos = 0),
              (i.addToken = nn),
              Nt(t.display.measure) &&
                (s = pt(o, t.doc.direction)) &&
                (i.addToken = rn(i.addToken, s)),
              (i.map = []),
              sn(o, i, fe(t, o, e != t.display.externalMeasured && Jt(o))),
              o.styleClasses &&
                (o.styleClasses.bgClass &&
                  (i.bgClass = P(o.styleClasses.bgClass, i.bgClass || "")),
                o.styleClasses.textClass &&
                  (i.textClass = P(
                    o.styleClasses.textClass,
                    i.textClass || "",
                  ))),
              0 == i.map.length &&
                i.map.push(0, 0, i.content.appendChild(At(t.display.measure))),
              0 == r
                ? ((e.measure.map = i.map), (e.measure.cache = {}))
                : ((e.measure.maps || (e.measure.maps = [])).push(i.map),
                  (e.measure.caches || (e.measure.caches = [])).push({}));
          }
          if (u) {
            var a = i.content.lastChild;
            (/\bcm-tab\b/.test(a.className) ||
              (a.querySelector && a.querySelector(".cm-tab"))) &&
              (i.content.className = "cm-tab-wrap-hack");
          }
          return (
            mt(t, "renderLine", t, e.line, i.pre),
            i.pre.className &&
              (i.textClass = P(i.pre.className, i.textClass || "")),
            i
          );
        }
        function en(t) {
          var e = L("span", "•", "cm-invalidchar");
          return (
            (e.title = "\\u" + t.charCodeAt(0).toString(16)),
            e.setAttribute("aria-label", e.title),
            e
          );
        }
        function nn(t, e, n, i, r, o, u) {
          if (e) {
            var l,
              c = t.splitSpaces
                ? (function (t, e) {
                    if (t.length > 1 && !/  /.test(t)) return t;
                    for (var n = e, i = "", r = 0; r < t.length; r++) {
                      var o = t.charAt(r);
                      " " != o ||
                        !n ||
                        (r != t.length - 1 && 32 != t.charCodeAt(r + 1)) ||
                        (o = " "),
                        (i += o),
                        (n = " " == o);
                    }
                    return i;
                  })(e, t.trailingSpace)
                : e,
              h = t.cm.state.specialChars,
              p = !1;
            if (h.test(e)) {
              l = document.createDocumentFragment();
              for (var d = 0; ; ) {
                h.lastIndex = d;
                var _ = h.exec(e),
                  f = _ ? _.index - d : e.length - d;
                if (f) {
                  var g = document.createTextNode(c.slice(d, d + f));
                  s && a < 9 ? l.appendChild(L("span", [g])) : l.appendChild(g),
                    t.map.push(t.pos, t.pos + f, g),
                    (t.col += f),
                    (t.pos += f);
                }
                if (!_) break;
                d += f + 1;
                var m = void 0;
                if ("\t" == _[0]) {
                  var v = t.cm.options.tabSize,
                    y = v - (t.col % v);
                  (m = l.appendChild(L("span", Y(y), "cm-tab"))).setAttribute(
                    "role",
                    "presentation",
                  ),
                    m.setAttribute("cm-text", "\t"),
                    (t.col += y);
                } else
                  "\r" == _[0] || "\n" == _[0]
                    ? ((m = l.appendChild(
                        L("span", "\r" == _[0] ? "␍" : "␤", "cm-invalidchar"),
                      )).setAttribute("cm-text", _[0]),
                      (t.col += 1))
                    : ((m = t.cm.options.specialCharPlaceholder(
                        _[0],
                      )).setAttribute("cm-text", _[0]),
                      s && a < 9
                        ? l.appendChild(L("span", [m]))
                        : l.appendChild(m),
                      (t.col += 1));
                t.map.push(t.pos, t.pos + 1, m), t.pos++;
              }
            } else
              (t.col += e.length),
                (l = document.createTextNode(c)),
                t.map.push(t.pos, t.pos + e.length, l),
                s && a < 9 && (p = !0),
                (t.pos += e.length);
            if (
              ((t.trailingSpace = 32 == c.charCodeAt(e.length - 1)),
              n || i || r || p || o || u)
            ) {
              var b = n || "";
              i && (b += i), r && (b += r);
              var w = L("span", [l], b, o);
              if (u)
                for (var x in u)
                  u.hasOwnProperty(x) &&
                    "style" != x &&
                    "class" != x &&
                    w.setAttribute(x, u[x]);
              return t.content.appendChild(w);
            }
            t.content.appendChild(l);
          }
        }
        function rn(t, e) {
          return function (n, i, r, o, s, a, u) {
            r = r ? r + " cm-force-border" : "cm-force-border";
            for (var l = n.pos, c = l + i.length; ; ) {
              for (
                var h = void 0, p = 0;
                p < e.length && !((h = e[p]).to > l && h.from <= l);
                p++
              );
              if (h.to >= c) return t(n, i, r, o, s, a, u);
              t(n, i.slice(0, h.to - l), r, o, null, a, u),
                (o = null),
                (i = i.slice(h.to - l)),
                (l = h.to);
            }
          };
        }
        function on(t, e, n, i) {
          var r = !i && n.widgetNode;
          r && t.map.push(t.pos, t.pos + e, r),
            !i &&
              t.cm.display.input.needsContentAttribute &&
              (r || (r = t.content.appendChild(document.createElement("span"))),
              r.setAttribute("cm-marker", n.id)),
            r &&
              (t.cm.display.input.setUneditable(r), t.content.appendChild(r)),
            (t.pos += e),
            (t.trailingSpace = !1);
        }
        function sn(t, e, n) {
          var i = t.markedSpans,
            r = t.text,
            o = 0;
          if (i)
            for (
              var s,
                a,
                u,
                l,
                c,
                h,
                p,
                d = r.length,
                _ = 0,
                f = 1,
                g = "",
                m = 0;
              ;

            ) {
              if (m == _) {
                (u = l = c = a = ""), (p = null), (h = null), (m = 1 / 0);
                for (var v = [], y = void 0, b = 0; b < i.length; ++b) {
                  var w = i[b],
                    x = w.marker;
                  if ("bookmark" == x.type && w.from == _ && x.widgetNode)
                    v.push(x);
                  else if (
                    w.from <= _ &&
                    (null == w.to ||
                      w.to > _ ||
                      (x.collapsed && w.to == _ && w.from == _))
                  ) {
                    if (
                      (null != w.to &&
                        w.to != _ &&
                        m > w.to &&
                        ((m = w.to), (l = "")),
                      x.className && (u += " " + x.className),
                      x.css && (a = (a ? a + ";" : "") + x.css),
                      x.startStyle && w.from == _ && (c += " " + x.startStyle),
                      x.endStyle &&
                        w.to == m &&
                        (y || (y = [])).push(x.endStyle, w.to),
                      x.title && ((p || (p = {})).title = x.title),
                      x.attributes)
                    )
                      for (var k in x.attributes)
                        (p || (p = {}))[k] = x.attributes[k];
                    x.collapsed && (!h || Pe(h.marker, x) < 0) && (h = w);
                  } else w.from > _ && m > w.from && (m = w.from);
                }
                if (y)
                  for (var C = 0; C < y.length; C += 2)
                    y[C + 1] == m && (l += " " + y[C]);
                if (!h || h.from == _)
                  for (var T = 0; T < v.length; ++T) on(e, 0, v[T]);
                if (h && (h.from || 0) == _) {
                  if (
                    (on(
                      e,
                      (null == h.to ? d + 1 : h.to) - _,
                      h.marker,
                      null == h.from,
                    ),
                    null == h.to)
                  )
                    return;
                  h.to == _ && (h = !1);
                }
              }
              if (_ >= d) break;
              for (var S = Math.min(d, m); ; ) {
                if (g) {
                  var M = _ + g.length;
                  if (!h) {
                    var O = M > S ? g.slice(0, S - _) : g;
                    e.addToken(
                      e,
                      O,
                      s ? s + u : u,
                      c,
                      _ + O.length == m ? l : "",
                      a,
                      p,
                    );
                  }
                  if (M >= S) {
                    (g = g.slice(S - _)), (_ = S);
                    break;
                  }
                  (_ = M), (c = "");
                }
                (g = r.slice(o, (o = n[f++]))), (s = Je(n[f++], e.cm.options));
              }
            }
          else
            for (var E = 1; E < n.length; E += 2)
              e.addToken(e, r.slice(o, (o = n[E])), Je(n[E + 1], e.cm.options));
        }
        function an(t, e, n) {
          (this.line = e),
            (this.rest = (function (t) {
              for (var e, n; (e = ze(t)); )
                (t = e.find(1, !0).line), (n || (n = [])).push(t);
              return n;
            })(e)),
            (this.size = this.rest ? Jt(Q(this.rest)) - n + 1 : 1),
            (this.node = this.text = null),
            (this.hidden = Ve(t, e));
        }
        function un(t, e, n) {
          for (var i, r = [], o = e; o < n; o = i) {
            var s = new an(t.doc, qt(t.doc, o), o);
            (i = o + s.size), r.push(s);
          }
          return r;
        }
        var ln = null,
          cn = null;
        function hn(t, e) {
          var n = ft(t, e);
          if (n.length) {
            var i,
              r = Array.prototype.slice.call(arguments, 2);
            ln
              ? (i = ln.delayedCallbacks)
              : cn
                ? (i = cn)
                : ((i = cn = []), setTimeout(pn, 0));
            for (
              var o = function (t) {
                  i.push(function () {
                    return n[t].apply(null, r);
                  });
                },
                s = 0;
              s < n.length;
              ++s
            )
              o(s);
          }
        }
        function pn() {
          var t = cn;
          cn = null;
          for (var e = 0; e < t.length; ++e) t[e]();
        }
        function dn(t, e, n, i) {
          for (var r = 0; r < e.changes.length; r++) {
            var o = e.changes[r];
            "text" == o
              ? gn(t, e)
              : "gutter" == o
                ? vn(t, e, n, i)
                : "class" == o
                  ? mn(t, e)
                  : "widget" == o && yn(t, e, i);
          }
          e.changes = null;
        }
        function _n(t) {
          return (
            t.node == t.text &&
              ((t.node = L("div", null, null, "position: relative")),
              t.text.parentNode &&
                t.text.parentNode.replaceChild(t.node, t.text),
              t.node.appendChild(t.text),
              s && a < 8 && (t.node.style.zIndex = 2)),
            t.node
          );
        }
        function fn(t, e) {
          var n = t.display.externalMeasured;
          return n && n.line == e.line
            ? ((t.display.externalMeasured = null),
              (e.measure = n.measure),
              n.built)
            : tn(t, e);
        }
        function gn(t, e) {
          var n = e.text.className,
            i = fn(t, e);
          e.text == e.node && (e.node = i.pre),
            e.text.parentNode.replaceChild(i.pre, e.text),
            (e.text = i.pre),
            i.bgClass != e.bgClass || i.textClass != e.textClass
              ? ((e.bgClass = i.bgClass), (e.textClass = i.textClass), mn(t, e))
              : n && (e.text.className = n);
        }
        function mn(t, e) {
          !(function (t, e) {
            var n = e.bgClass
              ? e.bgClass + " " + (e.line.bgClass || "")
              : e.line.bgClass;
            if ((n && (n += " CodeMirror-linebackground"), e.background))
              n
                ? (e.background.className = n)
                : (e.background.parentNode.removeChild(e.background),
                  (e.background = null));
            else if (n) {
              var i = _n(e);
              (e.background = i.insertBefore(L("div", null, n), i.firstChild)),
                t.display.input.setUneditable(e.background);
            }
          })(t, e),
            e.line.wrapClass
              ? (_n(e).className = e.line.wrapClass)
              : e.node != e.text && (e.node.className = "");
          var n = e.textClass
            ? e.textClass + " " + (e.line.textClass || "")
            : e.line.textClass;
          e.text.className = n || "";
        }
        function vn(t, e, n, i) {
          if (
            (e.gutter && (e.node.removeChild(e.gutter), (e.gutter = null)),
            e.gutterBackground &&
              (e.node.removeChild(e.gutterBackground),
              (e.gutterBackground = null)),
            e.line.gutterClass)
          ) {
            var r = _n(e);
            (e.gutterBackground = L(
              "div",
              null,
              "CodeMirror-gutter-background " + e.line.gutterClass,
              "left: " +
                (t.options.fixedGutter ? i.fixedPos : -i.gutterTotalWidth) +
                "px; width: " +
                i.gutterTotalWidth +
                "px",
            )),
              t.display.input.setUneditable(e.gutterBackground),
              r.insertBefore(e.gutterBackground, e.text);
          }
          var o = e.line.gutterMarkers;
          if (t.options.lineNumbers || o) {
            var s = _n(e),
              a = (e.gutter = L(
                "div",
                null,
                "CodeMirror-gutter-wrapper",
                "left: " +
                  (t.options.fixedGutter ? i.fixedPos : -i.gutterTotalWidth) +
                  "px",
              ));
            if (
              (a.setAttribute("aria-hidden", "true"),
              t.display.input.setUneditable(a),
              s.insertBefore(a, e.text),
              e.line.gutterClass && (a.className += " " + e.line.gutterClass),
              !t.options.lineNumbers ||
                (o && o["CodeMirror-linenumbers"]) ||
                (e.lineNumber = a.appendChild(
                  L(
                    "div",
                    ne(t.options, n),
                    "CodeMirror-linenumber CodeMirror-gutter-elt",
                    "left: " +
                      i.gutterLeft["CodeMirror-linenumbers"] +
                      "px; width: " +
                      t.display.lineNumInnerWidth +
                      "px",
                  ),
                )),
              o)
            )
              for (var u = 0; u < t.display.gutterSpecs.length; ++u) {
                var l = t.display.gutterSpecs[u].className,
                  c = o.hasOwnProperty(l) && o[l];
                c &&
                  a.appendChild(
                    L(
                      "div",
                      [c],
                      "CodeMirror-gutter-elt",
                      "left: " +
                        i.gutterLeft[l] +
                        "px; width: " +
                        i.gutterWidth[l] +
                        "px",
                    ),
                  );
              }
          }
        }
        function yn(t, e, n) {
          e.alignable && (e.alignable = null);
          for (
            var i = T("CodeMirror-linewidget"),
              r = e.node.firstChild,
              o = void 0;
            r;
            r = o
          )
            (o = r.nextSibling), i.test(r.className) && e.node.removeChild(r);
          wn(t, e, n);
        }
        function bn(t, e, n, i) {
          var r = fn(t, e);
          return (
            (e.text = e.node = r.pre),
            r.bgClass && (e.bgClass = r.bgClass),
            r.textClass && (e.textClass = r.textClass),
            mn(t, e),
            vn(t, e, n, i),
            wn(t, e, i),
            e.node
          );
        }
        function wn(t, e, n) {
          if ((xn(t, e.line, e, n, !0), e.rest))
            for (var i = 0; i < e.rest.length; i++) xn(t, e.rest[i], e, n, !1);
        }
        function xn(t, e, n, i, r) {
          if (e.widgets)
            for (var o = _n(n), s = 0, a = e.widgets; s < a.length; ++s) {
              var u = a[s],
                l = L(
                  "div",
                  [u.node],
                  "CodeMirror-linewidget" +
                    (u.className ? " " + u.className : ""),
                );
              u.handleMouseEvents || l.setAttribute("cm-ignore-events", "true"),
                kn(u, l, n, i),
                t.display.input.setUneditable(l),
                r && u.above
                  ? o.insertBefore(l, n.gutter || n.text)
                  : o.appendChild(l),
                hn(u, "redraw");
            }
        }
        function kn(t, e, n, i) {
          if (t.noHScroll) {
            (n.alignable || (n.alignable = [])).push(e);
            var r = i.wrapperWidth;
            (e.style.left = i.fixedPos + "px"),
              t.coverGutter ||
                ((r -= i.gutterTotalWidth),
                (e.style.paddingLeft = i.gutterTotalWidth + "px")),
              (e.style.width = r + "px");
          }
          t.coverGutter &&
            ((e.style.zIndex = 5),
            (e.style.position = "relative"),
            t.noHScroll || (e.style.marginLeft = -i.gutterTotalWidth + "px"));
        }
        function Cn(t) {
          if (null != t.height) return t.height;
          var e = t.doc.cm;
          if (!e) return 0;
          if (!N(document.body, t.node)) {
            var n = "position: relative;";
            t.coverGutter &&
              (n += "margin-left: -" + e.display.gutters.offsetWidth + "px;"),
              t.noHScroll &&
                (n += "width: " + e.display.wrapper.clientWidth + "px;"),
              E(e.display.measure, L("div", [t.node], null, n));
          }
          return (t.height = t.node.parentNode.offsetHeight);
        }
        function Tn(t, e) {
          for (var n = St(e); n != t.wrapper; n = n.parentNode)
            if (
              !n ||
              (1 == n.nodeType &&
                "true" == n.getAttribute("cm-ignore-events")) ||
              (n.parentNode == t.sizer && n != t.mover)
            )
              return !0;
        }
        function Sn(t) {
          return t.lineSpace.offsetTop;
        }
        function Mn(t) {
          return t.mover.offsetHeight - t.lineSpace.offsetHeight;
        }
        function On(t) {
          if (t.cachedPaddingH) return t.cachedPaddingH;
          var e = E(t.measure, L("pre", "x", "CodeMirror-line-like")),
            n = window.getComputedStyle
              ? window.getComputedStyle(e)
              : e.currentStyle,
            i = {
              left: parseInt(n.paddingLeft),
              right: parseInt(n.paddingRight),
            };
          return isNaN(i.left) || isNaN(i.right) || (t.cachedPaddingH = i), i;
        }
        function En(t) {
          return 50 - t.display.nativeBarWidth;
        }
        function Ln(t) {
          return t.display.scroller.clientWidth - En(t) - t.display.barWidth;
        }
        function An(t) {
          return t.display.scroller.clientHeight - En(t) - t.display.barHeight;
        }
        function Nn(t, e, n) {
          if (t.line == e)
            return { map: t.measure.map, cache: t.measure.cache };
          if (t.rest) {
            for (var i = 0; i < t.rest.length; i++)
              if (t.rest[i] == e)
                return { map: t.measure.maps[i], cache: t.measure.caches[i] };
            for (var r = 0; r < t.rest.length; r++)
              if (Jt(t.rest[r]) > n)
                return {
                  map: t.measure.maps[r],
                  cache: t.measure.caches[r],
                  before: !0,
                };
          }
        }
        function Rn(t, e, n, i) {
          return Wn(t, Pn(t, e), n, i);
        }
        function Dn(t, e) {
          if (e >= t.display.viewFrom && e < t.display.viewTo)
            return t.display.view[di(t, e)];
          var n = t.display.externalMeasured;
          return n && e >= n.lineN && e < n.lineN + n.size ? n : void 0;
        }
        function Pn(t, e) {
          var n = Jt(e),
            i = Dn(t, n);
          i && !i.text
            ? (i = null)
            : i &&
              i.changes &&
              (dn(t, i, n, ui(t)), (t.curOp.forceUpdate = !0)),
            i ||
              (i = (function (t, e) {
                var n = Jt((e = He(e))),
                  i = (t.display.externalMeasured = new an(t.doc, e, n));
                i.lineN = n;
                var r = (i.built = tn(t, i));
                return (i.text = r.pre), E(t.display.lineMeasure, r.pre), i;
              })(t, e));
          var r = Nn(i, e, n);
          return {
            line: e,
            view: i,
            rect: null,
            map: r.map,
            cache: r.cache,
            before: r.before,
            hasHeights: !1,
          };
        }
        function Wn(t, e, n, i, r) {
          e.before && (n = -1);
          var o,
            u = n + (i || "");
          return (
            e.cache.hasOwnProperty(u)
              ? (o = e.cache[u])
              : (e.rect || (e.rect = e.view.text.getBoundingClientRect()),
                e.hasHeights ||
                  ((function (t, e, n) {
                    var i = t.options.lineWrapping,
                      r = i && Ln(t);
                    if (!e.measure.heights || (i && e.measure.width != r)) {
                      var o = (e.measure.heights = []);
                      if (i) {
                        e.measure.width = r;
                        for (
                          var s = e.text.firstChild.getClientRects(), a = 0;
                          a < s.length - 1;
                          a++
                        ) {
                          var u = s[a],
                            l = s[a + 1];
                          Math.abs(u.bottom - l.bottom) > 2 &&
                            o.push((u.bottom + l.top) / 2 - n.top);
                        }
                      }
                      o.push(n.bottom - n.top);
                    }
                  })(t, e.view, e.rect),
                  (e.hasHeights = !0)),
                (o = (function (t, e, n, i) {
                  var r,
                    o = jn(e.map, n, i),
                    u = o.node,
                    l = o.start,
                    c = o.end,
                    h = o.collapse;
                  if (3 == u.nodeType) {
                    for (var p = 0; p < 4; p++) {
                      for (; l && st(e.line.text.charAt(o.coverStart + l)); )
                        --l;
                      for (
                        ;
                        o.coverStart + c < o.coverEnd &&
                        st(e.line.text.charAt(o.coverStart + c));

                      )
                        ++c;
                      if (
                        (r =
                          s && a < 9 && 0 == l && c == o.coverEnd - o.coverStart
                            ? u.parentNode.getBoundingClientRect()
                            : Fn(S(u, l, c).getClientRects(), i)).left ||
                        r.right ||
                        0 == l
                      )
                        break;
                      (c = l), (l -= 1), (h = "right");
                    }
                    s &&
                      a < 11 &&
                      (r = (function (t, e) {
                        if (
                          !window.screen ||
                          null == screen.logicalXDPI ||
                          screen.logicalXDPI == screen.deviceXDPI ||
                          !(function (t) {
                            if (null != It) return It;
                            var e = E(t, L("span", "x")),
                              n = e.getBoundingClientRect(),
                              i = S(e, 0, 1).getBoundingClientRect();
                            return (It = Math.abs(n.left - i.left) > 1);
                          })(t)
                        )
                          return e;
                        var n = screen.logicalXDPI / screen.deviceXDPI,
                          i = screen.logicalYDPI / screen.deviceYDPI;
                        return {
                          left: e.left * n,
                          right: e.right * n,
                          top: e.top * i,
                          bottom: e.bottom * i,
                        };
                      })(t.display.measure, r));
                  } else {
                    var d;
                    l > 0 && (h = i = "right"),
                      (r =
                        t.options.lineWrapping &&
                        (d = u.getClientRects()).length > 1
                          ? d["right" == i ? d.length - 1 : 0]
                          : u.getBoundingClientRect());
                  }
                  if (s && a < 9 && !l && (!r || (!r.left && !r.right))) {
                    var _ = u.parentNode.getClientRects()[0];
                    r = _
                      ? {
                          left: _.left,
                          right: _.left + ai(t.display),
                          top: _.top,
                          bottom: _.bottom,
                        }
                      : zn;
                  }
                  for (
                    var f = r.top - e.rect.top,
                      g = r.bottom - e.rect.top,
                      m = (f + g) / 2,
                      v = e.view.measure.heights,
                      y = 0;
                    y < v.length - 1 && !(m < v[y]);
                    y++
                  );
                  var b = y ? v[y - 1] : 0,
                    w = v[y],
                    x = {
                      left: ("right" == h ? r.right : r.left) - e.rect.left,
                      right: ("left" == h ? r.left : r.right) - e.rect.left,
                      top: b,
                      bottom: w,
                    };
                  return (
                    r.left || r.right || (x.bogus = !0),
                    t.options.singleCursorHeightPerLine ||
                      ((x.rtop = f), (x.rbottom = g)),
                    x
                  );
                })(t, e, n, i)).bogus || (e.cache[u] = o)),
            {
              left: o.left,
              right: o.right,
              top: r ? o.rtop : o.top,
              bottom: r ? o.rbottom : o.bottom,
            }
          );
        }
        var In,
          zn = { left: 0, right: 0, top: 0, bottom: 0 };
        function jn(t, e, n) {
          for (var i, r, o, s, a, u, l = 0; l < t.length; l += 3)
            if (
              ((a = t[l]),
              (u = t[l + 1]),
              e < a
                ? ((r = 0), (o = 1), (s = "left"))
                : e < u
                  ? (o = 1 + (r = e - a))
                  : (l == t.length - 3 || (e == u && t[l + 3] > e)) &&
                    ((r = (o = u - a) - 1), e >= u && (s = "right")),
              null != r)
            ) {
              if (
                ((i = t[l + 2]),
                a == u && n == (i.insertLeft ? "left" : "right") && (s = n),
                "left" == n && 0 == r)
              )
                for (; l && t[l - 2] == t[l - 3] && t[l - 1].insertLeft; )
                  (i = t[2 + (l -= 3)]), (s = "left");
              if ("right" == n && r == u - a)
                for (
                  ;
                  l < t.length - 3 &&
                  t[l + 3] == t[l + 4] &&
                  !t[l + 5].insertLeft;

                )
                  (i = t[(l += 3) + 2]), (s = "right");
              break;
            }
          return {
            node: i,
            start: r,
            end: o,
            collapse: s,
            coverStart: a,
            coverEnd: u,
          };
        }
        function Fn(t, e) {
          var n = zn;
          if ("left" == e)
            for (var i = 0; i < t.length && (n = t[i]).left == n.right; i++);
          else
            for (
              var r = t.length - 1;
              r >= 0 && (n = t[r]).left == n.right;
              r--
            );
          return n;
        }
        function Hn(t) {
          if (
            t.measure &&
            ((t.measure.cache = {}), (t.measure.heights = null), t.rest)
          )
            for (var e = 0; e < t.rest.length; e++) t.measure.caches[e] = {};
        }
        function Bn(t) {
          (t.display.externalMeasure = null), O(t.display.lineMeasure);
          for (var e = 0; e < t.display.view.length; e++) Hn(t.display.view[e]);
        }
        function Un(t) {
          Bn(t),
            (t.display.cachedCharWidth =
              t.display.cachedTextHeight =
              t.display.cachedPaddingH =
                null),
            t.options.lineWrapping || (t.display.maxLineChanged = !0),
            (t.display.lineNumChars = null);
        }
        function Vn(t) {
          return c && m
            ? -(
                t.body.getBoundingClientRect().left -
                parseInt(getComputedStyle(t.body).marginLeft)
              )
            : t.defaultView.pageXOffset ||
                (t.documentElement || t.body).scrollLeft;
        }
        function Kn(t) {
          return c && m
            ? -(
                t.body.getBoundingClientRect().top -
                parseInt(getComputedStyle(t.body).marginTop)
              )
            : t.defaultView.pageYOffset ||
                (t.documentElement || t.body).scrollTop;
        }
        function Gn(t) {
          var e = He(t).widgets,
            n = 0;
          if (e)
            for (var i = 0; i < e.length; ++i) e[i].above && (n += Cn(e[i]));
          return n;
        }
        function Xn(t, e, n, i, r) {
          if (!r) {
            var o = Gn(e);
            (n.top += o), (n.bottom += o);
          }
          if ("line" == i) return n;
          i || (i = "local");
          var s = Ge(e);
          if (
            ("local" == i ? (s += Sn(t.display)) : (s -= t.display.viewOffset),
            "page" == i || "window" == i)
          ) {
            var a = t.display.lineSpace.getBoundingClientRect();
            s += a.top + ("window" == i ? 0 : Kn(I(t)));
            var u = a.left + ("window" == i ? 0 : Vn(I(t)));
            (n.left += u), (n.right += u);
          }
          return (n.top += s), (n.bottom += s), n;
        }
        function $n(t, e, n) {
          if ("div" == n) return e;
          var i = e.left,
            r = e.top;
          if ("page" == n) (i -= Vn(I(t))), (r -= Kn(I(t)));
          else if ("local" == n || !n) {
            var o = t.display.sizer.getBoundingClientRect();
            (i += o.left), (r += o.top);
          }
          var s = t.display.lineSpace.getBoundingClientRect();
          return { left: i - s.left, top: r - s.top };
        }
        function qn(t, e, n, i, r) {
          return i || (i = qt(t.doc, e.line)), Xn(t, i, Rn(t, i, e.ch, r), n);
        }
        function Yn(t, e, n, i, r, o) {
          function s(e, s) {
            var a = Wn(t, r, e, s ? "right" : "left", o);
            return s ? (a.left = a.right) : (a.right = a.left), Xn(t, i, a, n);
          }
          (i = i || qt(t.doc, e.line)), r || (r = Pn(t, i));
          var a = pt(i, t.doc.direction),
            u = e.ch,
            l = e.sticky;
          if (
            (u >= i.text.length
              ? ((u = i.text.length), (l = "before"))
              : u <= 0 && ((u = 0), (l = "after")),
            !a)
          )
            return s("before" == l ? u - 1 : u, "before" == l);
          function c(t, e, n) {
            return s(n ? t - 1 : t, (1 == a[e].level) != n);
          }
          var h = ct(a, u, l),
            p = lt,
            d = c(u, h, "before" == l);
          return null != p && (d.other = c(u, p, "before" != l)), d;
        }
        function Qn(t, e) {
          var n = 0;
          (e = ce(t.doc, e)),
            t.options.lineWrapping || (n = ai(t.display) * e.ch);
          var i = qt(t.doc, e.line),
            r = Ge(i) + Sn(t.display);
          return { left: n, right: n, top: r, bottom: r + i.height };
        }
        function Zn(t, e, n, i, r) {
          var o = ie(t, e, n);
          return (o.xRel = r), i && (o.outside = i), o;
        }
        function Jn(t, e, n) {
          var i = t.doc;
          if ((n += t.display.viewOffset) < 0)
            return Zn(i.first, 0, null, -1, -1);
          var r = te(i, n),
            o = i.first + i.size - 1;
          if (r > o)
            return Zn(i.first + i.size - 1, qt(i, o).text.length, null, 1, 1);
          e < 0 && (e = 0);
          for (var s = qt(i, r); ; ) {
            var a = ii(t, s, r, e, n),
              u = je(s, a.ch + (a.xRel > 0 || a.outside > 0 ? 1 : 0));
            if (!u) return a;
            var l = u.find(1);
            if (l.line == r) return l;
            s = qt(i, (r = l.line));
          }
        }
        function ti(t, e, n, i) {
          i -= Gn(e);
          var r = e.text.length,
            o = ut(
              function (e) {
                return Wn(t, n, e - 1).bottom <= i;
              },
              r,
              0,
            );
          return {
            begin: o,
            end: (r = ut(
              function (e) {
                return Wn(t, n, e).top > i;
              },
              o,
              r,
            )),
          };
        }
        function ei(t, e, n, i) {
          return (
            n || (n = Pn(t, e)), ti(t, e, n, Xn(t, e, Wn(t, n, i), "line").top)
          );
        }
        function ni(t, e, n, i) {
          return !(t.bottom <= n) && (t.top > n || (i ? t.left : t.right) > e);
        }
        function ii(t, e, n, i, r) {
          r -= Ge(e);
          var o = Pn(t, e),
            s = Gn(e),
            a = 0,
            u = e.text.length,
            l = !0,
            c = pt(e, t.doc.direction);
          if (c) {
            var h = (t.options.lineWrapping ? oi : ri)(t, e, n, o, c, i, r);
            (a = (l = 1 != h.level) ? h.from : h.to - 1),
              (u = l ? h.to : h.from - 1);
          }
          var p,
            d,
            _ = null,
            f = null,
            g = ut(
              function (e) {
                var n = Wn(t, o, e);
                return (
                  (n.top += s),
                  (n.bottom += s),
                  !!ni(n, i, r, !1) &&
                    (n.top <= r && n.left <= i && ((_ = e), (f = n)), !0)
                );
              },
              a,
              u,
            ),
            m = !1;
          if (f) {
            var v = i - f.left < f.right - i,
              y = v == l;
            (g = _ + (y ? 0 : 1)),
              (d = y ? "after" : "before"),
              (p = v ? f.left : f.right);
          } else {
            l || (g != u && g != a) || g++,
              (d =
                0 == g
                  ? "after"
                  : g == e.text.length
                    ? "before"
                    : Wn(t, o, g - (l ? 1 : 0)).bottom + s <= r == l
                      ? "after"
                      : "before");
            var b = Yn(t, ie(n, g, d), "line", e, o);
            (p = b.left), (m = r < b.top ? -1 : r >= b.bottom ? 1 : 0);
          }
          return Zn(n, (g = at(e.text, g, 1)), d, m, i - p);
        }
        function ri(t, e, n, i, r, o, s) {
          var a = ut(
              function (a) {
                var u = r[a],
                  l = 1 != u.level;
                return ni(
                  Yn(
                    t,
                    ie(n, l ? u.to : u.from, l ? "before" : "after"),
                    "line",
                    e,
                    i,
                  ),
                  o,
                  s,
                  !0,
                );
              },
              0,
              r.length - 1,
            ),
            u = r[a];
          if (a > 0) {
            var l = 1 != u.level,
              c = Yn(
                t,
                ie(n, l ? u.from : u.to, l ? "after" : "before"),
                "line",
                e,
                i,
              );
            ni(c, o, s, !0) && c.top > s && (u = r[a - 1]);
          }
          return u;
        }
        function oi(t, e, n, i, r, o, s) {
          var a = ti(t, e, i, s),
            u = a.begin,
            l = a.end;
          /\s/.test(e.text.charAt(l - 1)) && l--;
          for (var c = null, h = null, p = 0; p < r.length; p++) {
            var d = r[p];
            if (!(d.from >= l || d.to <= u)) {
              var _ = Wn(
                  t,
                  i,
                  1 != d.level ? Math.min(l, d.to) - 1 : Math.max(u, d.from),
                ).right,
                f = _ < o ? o - _ + 1e9 : _ - o;
              (!c || h > f) && ((c = d), (h = f));
            }
          }
          return (
            c || (c = r[r.length - 1]),
            c.from < u && (c = { from: u, to: c.to, level: c.level }),
            c.to > l && (c = { from: c.from, to: l, level: c.level }),
            c
          );
        }
        function si(t) {
          if (null != t.cachedTextHeight) return t.cachedTextHeight;
          if (null == In) {
            In = L("pre", null, "CodeMirror-line-like");
            for (var e = 0; e < 49; ++e)
              In.appendChild(document.createTextNode("x")),
                In.appendChild(L("br"));
            In.appendChild(document.createTextNode("x"));
          }
          E(t.measure, In);
          var n = In.offsetHeight / 50;
          return n > 3 && (t.cachedTextHeight = n), O(t.measure), n || 1;
        }
        function ai(t) {
          if (null != t.cachedCharWidth) return t.cachedCharWidth;
          var e = L("span", "xxxxxxxxxx"),
            n = L("pre", [e], "CodeMirror-line-like");
          E(t.measure, n);
          var i = e.getBoundingClientRect(),
            r = (i.right - i.left) / 10;
          return r > 2 && (t.cachedCharWidth = r), r || 10;
        }
        function ui(t) {
          for (
            var e = t.display,
              n = {},
              i = {},
              r = e.gutters.clientLeft,
              o = e.gutters.firstChild,
              s = 0;
            o;
            o = o.nextSibling, ++s
          ) {
            var a = t.display.gutterSpecs[s].className;
            (n[a] = o.offsetLeft + o.clientLeft + r), (i[a] = o.clientWidth);
          }
          return {
            fixedPos: li(e),
            gutterTotalWidth: e.gutters.offsetWidth,
            gutterLeft: n,
            gutterWidth: i,
            wrapperWidth: e.wrapper.clientWidth,
          };
        }
        function li(t) {
          return (
            t.scroller.getBoundingClientRect().left -
            t.sizer.getBoundingClientRect().left
          );
        }
        function ci(t) {
          var e = si(t.display),
            n = t.options.lineWrapping,
            i =
              n &&
              Math.max(5, t.display.scroller.clientWidth / ai(t.display) - 3);
          return function (r) {
            if (Ve(t.doc, r)) return 0;
            var o = 0;
            if (r.widgets)
              for (var s = 0; s < r.widgets.length; s++)
                r.widgets[s].height && (o += r.widgets[s].height);
            return n ? o + (Math.ceil(r.text.length / i) || 1) * e : o + e;
          };
        }
        function hi(t) {
          var e = t.doc,
            n = ci(t);
          e.iter(function (t) {
            var e = n(t);
            e != t.height && Zt(t, e);
          });
        }
        function pi(t, e, n, i) {
          var r = t.display;
          if (!n && "true" == St(e).getAttribute("cm-not-content")) return null;
          var o,
            s,
            a = r.lineSpace.getBoundingClientRect();
          try {
            (o = e.clientX - a.left), (s = e.clientY - a.top);
          } catch (t) {
            return null;
          }
          var u,
            l = Jn(t, o, s);
          if (i && l.xRel > 0 && (u = qt(t.doc, l.line).text).length == l.ch) {
            var c = H(u, u.length, t.options.tabSize) - u.length;
            l = ie(
              l.line,
              Math.max(
                0,
                Math.round((o - On(t.display).left) / ai(t.display)) - c,
              ),
            );
          }
          return l;
        }
        function di(t, e) {
          if (e >= t.display.viewTo) return null;
          if ((e -= t.display.viewFrom) < 0) return null;
          for (var n = t.display.view, i = 0; i < n.length; i++)
            if ((e -= n[i].size) < 0) return i;
        }
        function _i(t, e, n, i) {
          null == e && (e = t.doc.first),
            null == n && (n = t.doc.first + t.doc.size),
            i || (i = 0);
          var r = t.display;
          if (
            (i &&
              n < r.viewTo &&
              (null == r.updateLineNumbers || r.updateLineNumbers > e) &&
              (r.updateLineNumbers = e),
            (t.curOp.viewChanged = !0),
            e >= r.viewTo)
          )
            Te && Be(t.doc, e) < r.viewTo && gi(t);
          else if (n <= r.viewFrom)
            Te && Ue(t.doc, n + i) > r.viewFrom
              ? gi(t)
              : ((r.viewFrom += i), (r.viewTo += i));
          else if (e <= r.viewFrom && n >= r.viewTo) gi(t);
          else if (e <= r.viewFrom) {
            var o = mi(t, n, n + i, 1);
            o
              ? ((r.view = r.view.slice(o.index)),
                (r.viewFrom = o.lineN),
                (r.viewTo += i))
              : gi(t);
          } else if (n >= r.viewTo) {
            var s = mi(t, e, e, -1);
            s
              ? ((r.view = r.view.slice(0, s.index)), (r.viewTo = s.lineN))
              : gi(t);
          } else {
            var a = mi(t, e, e, -1),
              u = mi(t, n, n + i, 1);
            a && u
              ? ((r.view = r.view
                  .slice(0, a.index)
                  .concat(un(t, a.lineN, u.lineN))
                  .concat(r.view.slice(u.index))),
                (r.viewTo += i))
              : gi(t);
          }
          var l = r.externalMeasured;
          l &&
            (n < l.lineN
              ? (l.lineN += i)
              : e < l.lineN + l.size && (r.externalMeasured = null));
        }
        function fi(t, e, n) {
          t.curOp.viewChanged = !0;
          var i = t.display,
            r = t.display.externalMeasured;
          if (
            (r &&
              e >= r.lineN &&
              e < r.lineN + r.size &&
              (i.externalMeasured = null),
            !(e < i.viewFrom || e >= i.viewTo))
          ) {
            var o = i.view[di(t, e)];
            if (null != o.node) {
              var s = o.changes || (o.changes = []);
              -1 == U(s, n) && s.push(n);
            }
          }
        }
        function gi(t) {
          (t.display.viewFrom = t.display.viewTo = t.doc.first),
            (t.display.view = []),
            (t.display.viewOffset = 0);
        }
        function mi(t, e, n, i) {
          var r,
            o = di(t, e),
            s = t.display.view;
          if (!Te || n == t.doc.first + t.doc.size)
            return { index: o, lineN: n };
          for (var a = t.display.viewFrom, u = 0; u < o; u++) a += s[u].size;
          if (a != e) {
            if (i > 0) {
              if (o == s.length - 1) return null;
              (r = a + s[o].size - e), o++;
            } else r = a - e;
            (e += r), (n += r);
          }
          for (; Be(t.doc, n) != n; ) {
            if (o == (i < 0 ? 0 : s.length - 1)) return null;
            (n += i * s[o - (i < 0 ? 1 : 0)].size), (o += i);
          }
          return { index: o, lineN: n };
        }
        function vi(t) {
          for (var e = t.display.view, n = 0, i = 0; i < e.length; i++) {
            var r = e[i];
            r.hidden || (r.node && !r.changes) || ++n;
          }
          return n;
        }
        function yi(t) {
          t.display.input.showSelection(t.display.input.prepareSelection());
        }
        function bi(t, e) {
          void 0 === e && (e = !0);
          var n = t.doc,
            i = {},
            r = (i.cursors = document.createDocumentFragment()),
            o = (i.selection = document.createDocumentFragment()),
            s = t.options.$customCursor;
          s && (e = !0);
          for (var a = 0; a < n.sel.ranges.length; a++)
            if (e || a != n.sel.primIndex) {
              var u = n.sel.ranges[a];
              if (
                !(
                  u.from().line >= t.display.viewTo ||
                  u.to().line < t.display.viewFrom
                )
              ) {
                var l = u.empty();
                if (s) {
                  var c = s(t, u);
                  c && wi(t, c, r);
                } else
                  (l || t.options.showCursorWhenSelecting) && wi(t, u.head, r);
                l || ki(t, u, o);
              }
            }
          return i;
        }
        function wi(t, e, n) {
          var i = Yn(
              t,
              e,
              "div",
              null,
              null,
              !t.options.singleCursorHeightPerLine,
            ),
            r = n.appendChild(L("div", " ", "CodeMirror-cursor"));
          if (
            ((r.style.left = i.left + "px"),
            (r.style.top = i.top + "px"),
            (r.style.height =
              Math.max(0, i.bottom - i.top) * t.options.cursorHeight + "px"),
            /\bcm-fat-cursor\b/.test(t.getWrapperElement().className))
          ) {
            var o = qn(t, e, "div", null, null),
              s = o.right - o.left;
            r.style.width = (s > 0 ? s : t.defaultCharWidth()) + "px";
          }
          if (i.other) {
            var a = n.appendChild(
              L("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"),
            );
            (a.style.display = ""),
              (a.style.left = i.other.left + "px"),
              (a.style.top = i.other.top + "px"),
              (a.style.height = 0.85 * (i.other.bottom - i.other.top) + "px");
          }
        }
        function xi(t, e) {
          return t.top - e.top || t.left - e.left;
        }
        function ki(t, e, n) {
          var i = t.display,
            r = t.doc,
            o = document.createDocumentFragment(),
            s = On(t.display),
            a = s.left,
            u = Math.max(i.sizerWidth, Ln(t) - i.sizer.offsetLeft) - s.right,
            l = "ltr" == r.direction;
          function c(t, e, n, i) {
            e < 0 && (e = 0),
              (e = Math.round(e)),
              (i = Math.round(i)),
              o.appendChild(
                L(
                  "div",
                  null,
                  "CodeMirror-selected",
                  "position: absolute; left: " +
                    t +
                    "px;\n                             top: " +
                    e +
                    "px; width: " +
                    (null == n ? u - t : n) +
                    "px;\n                             height: " +
                    (i - e) +
                    "px",
                ),
              );
          }
          function h(e, n, i) {
            var o,
              s,
              h = qt(r, e),
              p = h.text.length;
            function d(n, i) {
              return qn(t, ie(e, n), "div", h, i);
            }
            function _(e, n, i) {
              var r = ei(t, h, null, e),
                o = ("ltr" == n) == ("after" == i) ? "left" : "right";
              return d(
                "after" == i
                  ? r.begin
                  : r.end - (/\s/.test(h.text.charAt(r.end - 1)) ? 2 : 1),
                o,
              )[o];
            }
            var f = pt(h, r.direction);
            return (
              (function (t, e, n, i) {
                if (!t) return i(e, n, "ltr", 0);
                for (var r = !1, o = 0; o < t.length; ++o) {
                  var s = t[o];
                  ((s.from < n && s.to > e) || (e == n && s.to == e)) &&
                    (i(
                      Math.max(s.from, e),
                      Math.min(s.to, n),
                      1 == s.level ? "rtl" : "ltr",
                      o,
                    ),
                    (r = !0));
                }
                r || i(e, n, "ltr");
              })(f, n || 0, null == i ? p : i, function (t, e, r, h) {
                var g = "ltr" == r,
                  m = d(t, g ? "left" : "right"),
                  v = d(e - 1, g ? "right" : "left"),
                  y = null == n && 0 == t,
                  b = null == i && e == p,
                  w = 0 == h,
                  x = !f || h == f.length - 1;
                if (v.top - m.top <= 3) {
                  var k = (l ? b : y) && x,
                    C = (l ? y : b) && w ? a : (g ? m : v).left,
                    T = k ? u : (g ? v : m).right;
                  c(C, m.top, T - C, m.bottom);
                } else {
                  var S, M, O, E;
                  g
                    ? ((S = l && y && w ? a : m.left),
                      (M = l ? u : _(t, r, "before")),
                      (O = l ? a : _(e, r, "after")),
                      (E = l && b && x ? u : v.right))
                    : ((S = l ? _(t, r, "before") : a),
                      (M = !l && y && w ? u : m.right),
                      (O = !l && b && x ? a : v.left),
                      (E = l ? _(e, r, "after") : u)),
                    c(S, m.top, M - S, m.bottom),
                    m.bottom < v.top && c(a, m.bottom, null, v.top),
                    c(O, v.top, E - O, v.bottom);
                }
                (!o || xi(m, o) < 0) && (o = m),
                  xi(v, o) < 0 && (o = v),
                  (!s || xi(m, s) < 0) && (s = m),
                  xi(v, s) < 0 && (s = v);
              }),
              { start: o, end: s }
            );
          }
          var p = e.from(),
            d = e.to();
          if (p.line == d.line) h(p.line, p.ch, d.ch);
          else {
            var _ = qt(r, p.line),
              f = qt(r, d.line),
              g = He(_) == He(f),
              m = h(p.line, p.ch, g ? _.text.length + 1 : null).end,
              v = h(d.line, g ? 0 : null, d.ch).start;
            g &&
              (m.top < v.top - 2
                ? (c(m.right, m.top, null, m.bottom),
                  c(a, v.top, v.left, v.bottom))
                : c(m.right, m.top, v.left - m.right, m.bottom)),
              m.bottom < v.top && c(a, m.bottom, null, v.top);
          }
          n.appendChild(o);
        }
        function Ci(t) {
          if (t.state.focused) {
            var e = t.display;
            clearInterval(e.blinker);
            var n = !0;
            (e.cursorDiv.style.visibility = ""),
              t.options.cursorBlinkRate > 0
                ? (e.blinker = setInterval(function () {
                    t.hasFocus() || Oi(t),
                      (e.cursorDiv.style.visibility = (n = !n) ? "" : "hidden");
                  }, t.options.cursorBlinkRate))
                : t.options.cursorBlinkRate < 0 &&
                  (e.cursorDiv.style.visibility = "hidden");
          }
        }
        function Ti(t) {
          t.hasFocus() || (t.display.input.focus(), t.state.focused || Mi(t));
        }
        function Si(t) {
          (t.state.delayingBlurEvent = !0),
            setTimeout(function () {
              t.state.delayingBlurEvent &&
                ((t.state.delayingBlurEvent = !1), t.state.focused && Oi(t));
            }, 100);
        }
        function Mi(t, e) {
          t.state.delayingBlurEvent &&
            !t.state.draggingText &&
            (t.state.delayingBlurEvent = !1),
            "nocursor" != t.options.readOnly &&
              (t.state.focused ||
                (mt(t, "focus", t, e),
                (t.state.focused = !0),
                D(t.display.wrapper, "CodeMirror-focused"),
                t.curOp ||
                  t.display.selForContextMenu == t.doc.sel ||
                  (t.display.input.reset(),
                  u &&
                    setTimeout(function () {
                      return t.display.input.reset(!0);
                    }, 20)),
                t.display.input.receivedFocus()),
              Ci(t));
        }
        function Oi(t, e) {
          t.state.delayingBlurEvent ||
            (t.state.focused &&
              (mt(t, "blur", t, e),
              (t.state.focused = !1),
              M(t.display.wrapper, "CodeMirror-focused")),
            clearInterval(t.display.blinker),
            setTimeout(function () {
              t.state.focused || (t.display.shift = !1);
            }, 150));
        }
        function Ei(t) {
          for (
            var e = t.display,
              n = e.lineDiv.offsetTop,
              i = Math.max(0, e.scroller.getBoundingClientRect().top),
              r = e.lineDiv.getBoundingClientRect().top,
              o = 0,
              u = 0;
            u < e.view.length;
            u++
          ) {
            var l = e.view[u],
              c = t.options.lineWrapping,
              h = void 0,
              p = 0;
            if (!l.hidden) {
              if (((r += l.line.height), s && a < 8)) {
                var d = l.node.offsetTop + l.node.offsetHeight;
                (h = d - n), (n = d);
              } else {
                var _ = l.node.getBoundingClientRect();
                (h = _.bottom - _.top),
                  !c &&
                    l.text.firstChild &&
                    (p =
                      l.text.firstChild.getBoundingClientRect().right -
                      _.left -
                      1);
              }
              var f = l.line.height - h;
              if (
                (f > 0.005 || f < -0.005) &&
                (r < i && (o -= f), Zt(l.line, h), Li(l.line), l.rest)
              )
                for (var g = 0; g < l.rest.length; g++) Li(l.rest[g]);
              if (p > t.display.sizerWidth) {
                var m = Math.ceil(p / ai(t.display));
                m > t.display.maxLineLength &&
                  ((t.display.maxLineLength = m),
                  (t.display.maxLine = l.line),
                  (t.display.maxLineChanged = !0));
              }
            }
          }
          Math.abs(o) > 2 && (e.scroller.scrollTop += o);
        }
        function Li(t) {
          if (t.widgets)
            for (var e = 0; e < t.widgets.length; ++e) {
              var n = t.widgets[e],
                i = n.node.parentNode;
              i && (n.height = i.offsetHeight);
            }
        }
        function Ai(t, e, n) {
          var i =
            n && null != n.top ? Math.max(0, n.top) : t.scroller.scrollTop;
          i = Math.floor(i - Sn(t));
          var r = n && null != n.bottom ? n.bottom : i + t.wrapper.clientHeight,
            o = te(e, i),
            s = te(e, r);
          if (n && n.ensure) {
            var a = n.ensure.from.line,
              u = n.ensure.to.line;
            a < o
              ? ((o = a), (s = te(e, Ge(qt(e, a)) + t.wrapper.clientHeight)))
              : Math.min(u, e.lastLine()) >= s &&
                ((o = te(e, Ge(qt(e, u)) - t.wrapper.clientHeight)), (s = u));
          }
          return { from: o, to: Math.max(s, o + 1) };
        }
        function Ni(t, e) {
          var n = t.display,
            i = si(t.display);
          e.top < 0 && (e.top = 0);
          var r =
              t.curOp && null != t.curOp.scrollTop
                ? t.curOp.scrollTop
                : n.scroller.scrollTop,
            o = An(t),
            s = {};
          e.bottom - e.top > o && (e.bottom = e.top + o);
          var a = t.doc.height + Mn(n),
            u = e.top < i,
            l = e.bottom > a - i;
          if (e.top < r) s.scrollTop = u ? 0 : e.top;
          else if (e.bottom > r + o) {
            var c = Math.min(e.top, (l ? a : e.bottom) - o);
            c != r && (s.scrollTop = c);
          }
          var h = t.options.fixedGutter ? 0 : n.gutters.offsetWidth,
            p =
              t.curOp && null != t.curOp.scrollLeft
                ? t.curOp.scrollLeft
                : n.scroller.scrollLeft - h,
            d = Ln(t) - n.gutters.offsetWidth,
            _ = e.right - e.left > d;
          return (
            _ && (e.right = e.left + d),
            e.left < 10
              ? (s.scrollLeft = 0)
              : e.left < p
                ? (s.scrollLeft = Math.max(0, e.left + h - (_ ? 0 : 10)))
                : e.right > d + p - 3 &&
                  (s.scrollLeft = e.right + (_ ? 0 : 10) - d),
            s
          );
        }
        function Ri(t, e) {
          null != e &&
            (Wi(t),
            (t.curOp.scrollTop =
              (null == t.curOp.scrollTop
                ? t.doc.scrollTop
                : t.curOp.scrollTop) + e));
        }
        function Di(t) {
          Wi(t);
          var e = t.getCursor();
          t.curOp.scrollToPos = {
            from: e,
            to: e,
            margin: t.options.cursorScrollMargin,
          };
        }
        function Pi(t, e, n) {
          (null == e && null == n) || Wi(t),
            null != e && (t.curOp.scrollLeft = e),
            null != n && (t.curOp.scrollTop = n);
        }
        function Wi(t) {
          var e = t.curOp.scrollToPos;
          e &&
            ((t.curOp.scrollToPos = null),
            Ii(t, Qn(t, e.from), Qn(t, e.to), e.margin));
        }
        function Ii(t, e, n, i) {
          var r = Ni(t, {
            left: Math.min(e.left, n.left),
            top: Math.min(e.top, n.top) - i,
            right: Math.max(e.right, n.right),
            bottom: Math.max(e.bottom, n.bottom) + i,
          });
          Pi(t, r.scrollLeft, r.scrollTop);
        }
        function zi(t, e) {
          Math.abs(t.doc.scrollTop - e) < 2 ||
            (n || pr(t, { top: e }), ji(t, e, !0), n && pr(t), sr(t, 100));
        }
        function ji(t, e, n) {
          (e = Math.max(
            0,
            Math.min(
              t.display.scroller.scrollHeight - t.display.scroller.clientHeight,
              e,
            ),
          )),
            (t.display.scroller.scrollTop != e || n) &&
              ((t.doc.scrollTop = e),
              t.display.scrollbars.setScrollTop(e),
              t.display.scroller.scrollTop != e &&
                (t.display.scroller.scrollTop = e));
        }
        function Fi(t, e, n, i) {
          (e = Math.max(
            0,
            Math.min(
              e,
              t.display.scroller.scrollWidth - t.display.scroller.clientWidth,
            ),
          )),
            ((n ? e == t.doc.scrollLeft : Math.abs(t.doc.scrollLeft - e) < 2) &&
              !i) ||
              ((t.doc.scrollLeft = e),
              fr(t),
              t.display.scroller.scrollLeft != e &&
                (t.display.scroller.scrollLeft = e),
              t.display.scrollbars.setScrollLeft(e));
        }
        function Hi(t) {
          var e = t.display,
            n = e.gutters.offsetWidth,
            i = Math.round(t.doc.height + Mn(t.display));
          return {
            clientHeight: e.scroller.clientHeight,
            viewHeight: e.wrapper.clientHeight,
            scrollWidth: e.scroller.scrollWidth,
            clientWidth: e.scroller.clientWidth,
            viewWidth: e.wrapper.clientWidth,
            barLeft: t.options.fixedGutter ? n : 0,
            docHeight: i,
            scrollHeight: i + En(t) + e.barHeight,
            nativeBarWidth: e.nativeBarWidth,
            gutterWidth: n,
          };
        }
        var Bi = function (t, e, n) {
          this.cm = n;
          var i = (this.vert = L(
              "div",
              [L("div", null, null, "min-width: 1px")],
              "CodeMirror-vscrollbar",
            )),
            r = (this.horiz = L(
              "div",
              [L("div", null, null, "height: 100%; min-height: 1px")],
              "CodeMirror-hscrollbar",
            ));
          (i.tabIndex = r.tabIndex = -1),
            t(i),
            t(r),
            _t(i, "scroll", function () {
              i.clientHeight && e(i.scrollTop, "vertical");
            }),
            _t(r, "scroll", function () {
              r.clientWidth && e(r.scrollLeft, "horizontal");
            }),
            (this.checkedZeroWidth = !1),
            s &&
              a < 8 &&
              (this.horiz.style.minHeight = this.vert.style.minWidth = "18px");
        };
        (Bi.prototype.update = function (t) {
          var e = t.scrollWidth > t.clientWidth + 1,
            n = t.scrollHeight > t.clientHeight + 1,
            i = t.nativeBarWidth;
          if (n) {
            (this.vert.style.display = "block"),
              (this.vert.style.bottom = e ? i + "px" : "0");
            var r = t.viewHeight - (e ? i : 0);
            this.vert.firstChild.style.height =
              Math.max(0, t.scrollHeight - t.clientHeight + r) + "px";
          } else
            (this.vert.scrollTop = 0),
              (this.vert.style.display = ""),
              (this.vert.firstChild.style.height = "0");
          if (e) {
            (this.horiz.style.display = "block"),
              (this.horiz.style.right = n ? i + "px" : "0"),
              (this.horiz.style.left = t.barLeft + "px");
            var o = t.viewWidth - t.barLeft - (n ? i : 0);
            this.horiz.firstChild.style.width =
              Math.max(0, t.scrollWidth - t.clientWidth + o) + "px";
          } else
            (this.horiz.style.display = ""),
              (this.horiz.firstChild.style.width = "0");
          return (
            !this.checkedZeroWidth &&
              t.clientHeight > 0 &&
              (0 == i && this.zeroWidthHack(), (this.checkedZeroWidth = !0)),
            { right: n ? i : 0, bottom: e ? i : 0 }
          );
        }),
          (Bi.prototype.setScrollLeft = function (t) {
            this.horiz.scrollLeft != t && (this.horiz.scrollLeft = t),
              this.disableHoriz &&
                this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz");
          }),
          (Bi.prototype.setScrollTop = function (t) {
            this.vert.scrollTop != t && (this.vert.scrollTop = t),
              this.disableVert &&
                this.enableZeroWidthBar(this.vert, this.disableVert, "vert");
          }),
          (Bi.prototype.zeroWidthHack = function () {
            var t = y && !_ ? "12px" : "18px";
            (this.horiz.style.height = this.vert.style.width = t),
              (this.horiz.style.visibility = this.vert.style.visibility =
                "hidden"),
              (this.disableHoriz = new B()),
              (this.disableVert = new B());
          }),
          (Bi.prototype.enableZeroWidthBar = function (t, e, n) {
            (t.style.visibility = ""),
              e.set(1e3, function i() {
                var r = t.getBoundingClientRect();
                ("vert" == n
                  ? document.elementFromPoint(
                      r.right - 1,
                      (r.top + r.bottom) / 2,
                    )
                  : document.elementFromPoint(
                      (r.right + r.left) / 2,
                      r.bottom - 1,
                    )) != t
                  ? (t.style.visibility = "hidden")
                  : e.set(1e3, i);
              });
          }),
          (Bi.prototype.clear = function () {
            var t = this.horiz.parentNode;
            t.removeChild(this.horiz), t.removeChild(this.vert);
          });
        var Ui = function () {};
        function Vi(t, e) {
          e || (e = Hi(t));
          var n = t.display.barWidth,
            i = t.display.barHeight;
          Ki(t, e);
          for (
            var r = 0;
            (r < 4 && n != t.display.barWidth) || i != t.display.barHeight;
            r++
          )
            n != t.display.barWidth && t.options.lineWrapping && Ei(t),
              Ki(t, Hi(t)),
              (n = t.display.barWidth),
              (i = t.display.barHeight);
        }
        function Ki(t, e) {
          var n = t.display,
            i = n.scrollbars.update(e);
          (n.sizer.style.paddingRight = (n.barWidth = i.right) + "px"),
            (n.sizer.style.paddingBottom = (n.barHeight = i.bottom) + "px"),
            (n.heightForcer.style.borderBottom =
              i.bottom + "px solid transparent"),
            i.right && i.bottom
              ? ((n.scrollbarFiller.style.display = "block"),
                (n.scrollbarFiller.style.height = i.bottom + "px"),
                (n.scrollbarFiller.style.width = i.right + "px"))
              : (n.scrollbarFiller.style.display = ""),
            i.bottom &&
            t.options.coverGutterNextToScrollbar &&
            t.options.fixedGutter
              ? ((n.gutterFiller.style.display = "block"),
                (n.gutterFiller.style.height = i.bottom + "px"),
                (n.gutterFiller.style.width = e.gutterWidth + "px"))
              : (n.gutterFiller.style.display = "");
        }
        (Ui.prototype.update = function () {
          return { bottom: 0, right: 0 };
        }),
          (Ui.prototype.setScrollLeft = function () {}),
          (Ui.prototype.setScrollTop = function () {}),
          (Ui.prototype.clear = function () {});
        var Gi = { native: Bi, null: Ui };
        function Xi(t) {
          t.display.scrollbars &&
            (t.display.scrollbars.clear(),
            t.display.scrollbars.addClass &&
              M(t.display.wrapper, t.display.scrollbars.addClass)),
            (t.display.scrollbars = new Gi[t.options.scrollbarStyle](
              function (e) {
                t.display.wrapper.insertBefore(e, t.display.scrollbarFiller),
                  _t(e, "mousedown", function () {
                    t.state.focused &&
                      setTimeout(function () {
                        return t.display.input.focus();
                      }, 0);
                  }),
                  e.setAttribute("cm-not-content", "true");
              },
              function (e, n) {
                "horizontal" == n ? Fi(t, e) : zi(t, e);
              },
              t,
            )),
            t.display.scrollbars.addClass &&
              D(t.display.wrapper, t.display.scrollbars.addClass);
        }
        var $i = 0;
        function qi(t) {
          var e;
          (t.curOp = {
            cm: t,
            viewChanged: !1,
            startHeight: t.doc.height,
            forceUpdate: !1,
            updateInput: 0,
            typing: !1,
            changeObjs: null,
            cursorActivityHandlers: null,
            cursorActivityCalled: 0,
            selectionChanged: !1,
            updateMaxLine: !1,
            scrollLeft: null,
            scrollTop: null,
            scrollToPos: null,
            focus: !1,
            id: ++$i,
            markArrays: null,
          }),
            (e = t.curOp),
            ln
              ? ln.ops.push(e)
              : (e.ownsGroup = ln = { ops: [e], delayedCallbacks: [] });
        }
        function Yi(t) {
          var e = t.curOp;
          e &&
            (function (t, e) {
              var n = t.ownsGroup;
              if (n)
                try {
                  !(function (t) {
                    var e = t.delayedCallbacks,
                      n = 0;
                    do {
                      for (; n < e.length; n++) e[n].call(null);
                      for (var i = 0; i < t.ops.length; i++) {
                        var r = t.ops[i];
                        if (r.cursorActivityHandlers)
                          for (
                            ;
                            r.cursorActivityCalled <
                            r.cursorActivityHandlers.length;

                          )
                            r.cursorActivityHandlers[
                              r.cursorActivityCalled++
                            ].call(null, r.cm);
                      }
                    } while (n < e.length);
                  })(n);
                } finally {
                  (ln = null), e(n);
                }
            })(e, function (t) {
              for (var e = 0; e < t.ops.length; e++) t.ops[e].cm.curOp = null;
              !(function (t) {
                for (var e = t.ops, n = 0; n < e.length; n++) Qi(e[n]);
                for (var i = 0; i < e.length; i++) Zi(e[i]);
                for (var r = 0; r < e.length; r++) Ji(e[r]);
                for (var o = 0; o < e.length; o++) tr(e[o]);
                for (var s = 0; s < e.length; s++) er(e[s]);
              })(t);
            });
        }
        function Qi(t) {
          var e = t.cm,
            n = e.display;
          !(function (t) {
            var e = t.display;
            !e.scrollbarsClipped &&
              e.scroller.offsetWidth &&
              ((e.nativeBarWidth =
                e.scroller.offsetWidth - e.scroller.clientWidth),
              (e.heightForcer.style.height = En(t) + "px"),
              (e.sizer.style.marginBottom = -e.nativeBarWidth + "px"),
              (e.sizer.style.borderRightWidth = En(t) + "px"),
              (e.scrollbarsClipped = !0));
          })(e),
            t.updateMaxLine && $e(e),
            (t.mustUpdate =
              t.viewChanged ||
              t.forceUpdate ||
              null != t.scrollTop ||
              (t.scrollToPos &&
                (t.scrollToPos.from.line < n.viewFrom ||
                  t.scrollToPos.to.line >= n.viewTo)) ||
              (n.maxLineChanged && e.options.lineWrapping)),
            (t.update =
              t.mustUpdate &&
              new ur(
                e,
                t.mustUpdate && { top: t.scrollTop, ensure: t.scrollToPos },
                t.forceUpdate,
              ));
        }
        function Zi(t) {
          t.updatedDisplay = t.mustUpdate && cr(t.cm, t.update);
        }
        function Ji(t) {
          var e = t.cm,
            n = e.display;
          t.updatedDisplay && Ei(e),
            (t.barMeasure = Hi(e)),
            n.maxLineChanged &&
              !e.options.lineWrapping &&
              ((t.adjustWidthTo =
                Rn(e, n.maxLine, n.maxLine.text.length).left + 3),
              (e.display.sizerWidth = t.adjustWidthTo),
              (t.barMeasure.scrollWidth = Math.max(
                n.scroller.clientWidth,
                n.sizer.offsetLeft +
                  t.adjustWidthTo +
                  En(e) +
                  e.display.barWidth,
              )),
              (t.maxScrollLeft = Math.max(
                0,
                n.sizer.offsetLeft + t.adjustWidthTo - Ln(e),
              ))),
            (t.updatedDisplay || t.selectionChanged) &&
              (t.preparedSelection = n.input.prepareSelection());
        }
        function tr(t) {
          var e = t.cm;
          null != t.adjustWidthTo &&
            ((e.display.sizer.style.minWidth = t.adjustWidthTo + "px"),
            t.maxScrollLeft < e.doc.scrollLeft &&
              Fi(
                e,
                Math.min(e.display.scroller.scrollLeft, t.maxScrollLeft),
                !0,
              ),
            (e.display.maxLineChanged = !1));
          var n = t.focus && t.focus == R(I(e));
          t.preparedSelection &&
            e.display.input.showSelection(t.preparedSelection, n),
            (t.updatedDisplay || t.startHeight != e.doc.height) &&
              Vi(e, t.barMeasure),
            t.updatedDisplay && _r(e, t.barMeasure),
            t.selectionChanged && Ci(e),
            e.state.focused && t.updateInput && e.display.input.reset(t.typing),
            n && Ti(t.cm);
        }
        function er(t) {
          var e = t.cm,
            n = e.display,
            i = e.doc;
          t.updatedDisplay && hr(e, t.update),
            null == n.wheelStartX ||
              (null == t.scrollTop && null == t.scrollLeft && !t.scrollToPos) ||
              (n.wheelStartX = n.wheelStartY = null),
            null != t.scrollTop && ji(e, t.scrollTop, t.forceScroll),
            null != t.scrollLeft && Fi(e, t.scrollLeft, !0, !0),
            t.scrollToPos &&
              (function (t, e) {
                if (!vt(t, "scrollCursorIntoView")) {
                  var n = t.display,
                    i = n.sizer.getBoundingClientRect(),
                    r = null,
                    o = n.wrapper.ownerDocument;
                  if (
                    (e.top + i.top < 0
                      ? (r = !0)
                      : e.bottom + i.top >
                          (o.defaultView.innerHeight ||
                            o.documentElement.clientHeight) && (r = !1),
                    null != r && !f)
                  ) {
                    var s = L(
                      "div",
                      "​",
                      null,
                      "position: absolute;\n                         top: " +
                        (e.top - n.viewOffset - Sn(t.display)) +
                        "px;\n                         height: " +
                        (e.bottom - e.top + En(t) + n.barHeight) +
                        "px;\n                         left: " +
                        e.left +
                        "px; width: " +
                        Math.max(2, e.right - e.left) +
                        "px;",
                    );
                    t.display.lineSpace.appendChild(s),
                      s.scrollIntoView(r),
                      t.display.lineSpace.removeChild(s);
                  }
                }
              })(
                e,
                (function (t, e, n, i) {
                  var r;
                  null == i && (i = 0),
                    t.options.lineWrapping ||
                      e != n ||
                      ((n =
                        "before" == e.sticky
                          ? ie(e.line, e.ch + 1, "before")
                          : e),
                      (e = e.ch
                        ? ie(
                            e.line,
                            "before" == e.sticky ? e.ch - 1 : e.ch,
                            "after",
                          )
                        : e));
                  for (var o = 0; o < 5; o++) {
                    var s = !1,
                      a = Yn(t, e),
                      u = n && n != e ? Yn(t, n) : a,
                      l = Ni(
                        t,
                        (r = {
                          left: Math.min(a.left, u.left),
                          top: Math.min(a.top, u.top) - i,
                          right: Math.max(a.left, u.left),
                          bottom: Math.max(a.bottom, u.bottom) + i,
                        }),
                      ),
                      c = t.doc.scrollTop,
                      h = t.doc.scrollLeft;
                    if (
                      (null != l.scrollTop &&
                        (zi(t, l.scrollTop),
                        Math.abs(t.doc.scrollTop - c) > 1 && (s = !0)),
                      null != l.scrollLeft &&
                        (Fi(t, l.scrollLeft),
                        Math.abs(t.doc.scrollLeft - h) > 1 && (s = !0)),
                      !s)
                    )
                      break;
                  }
                  return r;
                })(
                  e,
                  ce(i, t.scrollToPos.from),
                  ce(i, t.scrollToPos.to),
                  t.scrollToPos.margin,
                ),
              );
          var r = t.maybeHiddenMarkers,
            o = t.maybeUnhiddenMarkers;
          if (r)
            for (var s = 0; s < r.length; ++s)
              r[s].lines.length || mt(r[s], "hide");
          if (o)
            for (var a = 0; a < o.length; ++a)
              o[a].lines.length && mt(o[a], "unhide");
          n.wrapper.offsetHeight &&
            (i.scrollTop = e.display.scroller.scrollTop),
            t.changeObjs && mt(e, "changes", e, t.changeObjs),
            t.update && t.update.finish();
        }
        function nr(t, e) {
          if (t.curOp) return e();
          qi(t);
          try {
            return e();
          } finally {
            Yi(t);
          }
        }
        function ir(t, e) {
          return function () {
            if (t.curOp) return e.apply(t, arguments);
            qi(t);
            try {
              return e.apply(t, arguments);
            } finally {
              Yi(t);
            }
          };
        }
        function rr(t) {
          return function () {
            if (this.curOp) return t.apply(this, arguments);
            qi(this);
            try {
              return t.apply(this, arguments);
            } finally {
              Yi(this);
            }
          };
        }
        function or(t) {
          return function () {
            var e = this.cm;
            if (!e || e.curOp) return t.apply(this, arguments);
            qi(e);
            try {
              return t.apply(this, arguments);
            } finally {
              Yi(e);
            }
          };
        }
        function sr(t, e) {
          t.doc.highlightFrontier < t.display.viewTo &&
            t.state.highlight.set(e, j(ar, t));
        }
        function ar(t) {
          var e = t.doc;
          if (!(e.highlightFrontier >= t.display.viewTo)) {
            var n = +new Date() + t.options.workTime,
              i = ge(t, e.highlightFrontier),
              r = [];
            e.iter(
              i.line,
              Math.min(e.first + e.size, t.display.viewTo + 500),
              function (o) {
                if (i.line >= t.display.viewFrom) {
                  var s = o.styles,
                    a =
                      o.text.length > t.options.maxHighlightLength
                        ? Kt(e.mode, i.state)
                        : null,
                    u = _e(t, o, i, !0);
                  a && (i.state = a), (o.styles = u.styles);
                  var l = o.styleClasses,
                    c = u.classes;
                  c ? (o.styleClasses = c) : l && (o.styleClasses = null);
                  for (
                    var h =
                        !s ||
                        s.length != o.styles.length ||
                        (l != c &&
                          (!l ||
                            !c ||
                            l.bgClass != c.bgClass ||
                            l.textClass != c.textClass)),
                      p = 0;
                    !h && p < s.length;
                    ++p
                  )
                    h = s[p] != o.styles[p];
                  h && r.push(i.line), (o.stateAfter = i.save()), i.nextLine();
                } else
                  o.text.length <= t.options.maxHighlightLength &&
                    me(t, o.text, i),
                    (o.stateAfter = i.line % 5 == 0 ? i.save() : null),
                    i.nextLine();
                if (+new Date() > n) return sr(t, t.options.workDelay), !0;
              },
            ),
              (e.highlightFrontier = i.line),
              (e.modeFrontier = Math.max(e.modeFrontier, i.line)),
              r.length &&
                nr(t, function () {
                  for (var e = 0; e < r.length; e++) fi(t, r[e], "text");
                });
          }
        }
        var ur = function (t, e, n) {
          var i = t.display;
          (this.viewport = e),
            (this.visible = Ai(i, t.doc, e)),
            (this.editorIsHidden = !i.wrapper.offsetWidth),
            (this.wrapperHeight = i.wrapper.clientHeight),
            (this.wrapperWidth = i.wrapper.clientWidth),
            (this.oldDisplayWidth = Ln(t)),
            (this.force = n),
            (this.dims = ui(t)),
            (this.events = []);
        };
        function lr(t) {
          if (t.hasFocus()) return null;
          var e = R(I(t));
          if (!e || !N(t.display.lineDiv, e)) return null;
          var n = { activeElt: e };
          if (window.getSelection) {
            var i = z(t).getSelection();
            i.anchorNode &&
              i.extend &&
              N(t.display.lineDiv, i.anchorNode) &&
              ((n.anchorNode = i.anchorNode),
              (n.anchorOffset = i.anchorOffset),
              (n.focusNode = i.focusNode),
              (n.focusOffset = i.focusOffset));
          }
          return n;
        }
        function cr(t, e) {
          var n = t.display,
            i = t.doc;
          if (e.editorIsHidden) return gi(t), !1;
          if (
            !e.force &&
            e.visible.from >= n.viewFrom &&
            e.visible.to <= n.viewTo &&
            (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo) &&
            n.renderedView == n.view &&
            0 == vi(t)
          )
            return !1;
          gr(t) && (gi(t), (e.dims = ui(t)));
          var r = i.first + i.size,
            o = Math.max(e.visible.from - t.options.viewportMargin, i.first),
            s = Math.min(r, e.visible.to + t.options.viewportMargin);
          n.viewFrom < o &&
            o - n.viewFrom < 20 &&
            (o = Math.max(i.first, n.viewFrom)),
            n.viewTo > s && n.viewTo - s < 20 && (s = Math.min(r, n.viewTo)),
            Te && ((o = Be(t.doc, o)), (s = Ue(t.doc, s)));
          var a =
            o != n.viewFrom ||
            s != n.viewTo ||
            n.lastWrapHeight != e.wrapperHeight ||
            n.lastWrapWidth != e.wrapperWidth;
          !(function (t, e, n) {
            var i = t.display;
            0 == i.view.length || e >= i.viewTo || n <= i.viewFrom
              ? ((i.view = un(t, e, n)), (i.viewFrom = e))
              : (i.viewFrom > e
                  ? (i.view = un(t, e, i.viewFrom).concat(i.view))
                  : i.viewFrom < e && (i.view = i.view.slice(di(t, e))),
                (i.viewFrom = e),
                i.viewTo < n
                  ? (i.view = i.view.concat(un(t, i.viewTo, n)))
                  : i.viewTo > n && (i.view = i.view.slice(0, di(t, n)))),
              (i.viewTo = n);
          })(t, o, s),
            (n.viewOffset = Ge(qt(t.doc, n.viewFrom))),
            (t.display.mover.style.top = n.viewOffset + "px");
          var l = vi(t);
          if (
            !a &&
            0 == l &&
            !e.force &&
            n.renderedView == n.view &&
            (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo)
          )
            return !1;
          var c = lr(t);
          return (
            l > 4 && (n.lineDiv.style.display = "none"),
            (function (t, e, n) {
              var i = t.display,
                r = t.options.lineNumbers,
                o = i.lineDiv,
                s = o.firstChild;
              function a(e) {
                var n = e.nextSibling;
                return (
                  u && y && t.display.currentWheelTarget == e
                    ? (e.style.display = "none")
                    : e.parentNode.removeChild(e),
                  n
                );
              }
              for (var l = i.view, c = i.viewFrom, h = 0; h < l.length; h++) {
                var p = l[h];
                if (p.hidden);
                else if (p.node && p.node.parentNode == o) {
                  for (; s != p.node; ) s = a(s);
                  var d = r && null != e && e <= c && p.lineNumber;
                  p.changes &&
                    (U(p.changes, "gutter") > -1 && (d = !1), dn(t, p, c, n)),
                    d &&
                      (O(p.lineNumber),
                      p.lineNumber.appendChild(
                        document.createTextNode(ne(t.options, c)),
                      )),
                    (s = p.node.nextSibling);
                } else {
                  var _ = bn(t, p, c, n);
                  o.insertBefore(_, s);
                }
                c += p.size;
              }
              for (; s; ) s = a(s);
            })(t, n.updateLineNumbers, e.dims),
            l > 4 && (n.lineDiv.style.display = ""),
            (n.renderedView = n.view),
            (function (t) {
              if (
                t &&
                t.activeElt &&
                t.activeElt != R(t.activeElt.ownerDocument) &&
                (t.activeElt.focus(),
                !/^(INPUT|TEXTAREA)$/.test(t.activeElt.nodeName) &&
                  t.anchorNode &&
                  N(document.body, t.anchorNode) &&
                  N(document.body, t.focusNode))
              ) {
                var e = t.activeElt.ownerDocument,
                  n = e.defaultView.getSelection(),
                  i = e.createRange();
                i.setEnd(t.anchorNode, t.anchorOffset),
                  i.collapse(!1),
                  n.removeAllRanges(),
                  n.addRange(i),
                  n.extend(t.focusNode, t.focusOffset);
              }
            })(c),
            O(n.cursorDiv),
            O(n.selectionDiv),
            (n.gutters.style.height = n.sizer.style.minHeight = 0),
            a &&
              ((n.lastWrapHeight = e.wrapperHeight),
              (n.lastWrapWidth = e.wrapperWidth),
              sr(t, 400)),
            (n.updateLineNumbers = null),
            !0
          );
        }
        function hr(t, e) {
          for (var n = e.viewport, i = !0; ; i = !1) {
            if (i && t.options.lineWrapping && e.oldDisplayWidth != Ln(t))
              i && (e.visible = Ai(t.display, t.doc, n));
            else if (
              (n &&
                null != n.top &&
                (n = {
                  top: Math.min(t.doc.height + Mn(t.display) - An(t), n.top),
                }),
              (e.visible = Ai(t.display, t.doc, n)),
              e.visible.from >= t.display.viewFrom &&
                e.visible.to <= t.display.viewTo)
            )
              break;
            if (!cr(t, e)) break;
            Ei(t);
            var r = Hi(t);
            yi(t), Vi(t, r), _r(t, r), (e.force = !1);
          }
          e.signal(t, "update", t),
            (t.display.viewFrom == t.display.reportedViewFrom &&
              t.display.viewTo == t.display.reportedViewTo) ||
              (e.signal(
                t,
                "viewportChange",
                t,
                t.display.viewFrom,
                t.display.viewTo,
              ),
              (t.display.reportedViewFrom = t.display.viewFrom),
              (t.display.reportedViewTo = t.display.viewTo));
        }
        function pr(t, e) {
          var n = new ur(t, e);
          if (cr(t, n)) {
            Ei(t), hr(t, n);
            var i = Hi(t);
            yi(t), Vi(t, i), _r(t, i), n.finish();
          }
        }
        function dr(t) {
          var e = t.gutters.offsetWidth;
          (t.sizer.style.marginLeft = e + "px"), hn(t, "gutterChanged", t);
        }
        function _r(t, e) {
          (t.display.sizer.style.minHeight = e.docHeight + "px"),
            (t.display.heightForcer.style.top = e.docHeight + "px"),
            (t.display.gutters.style.height =
              e.docHeight + t.display.barHeight + En(t) + "px");
        }
        function fr(t) {
          var e = t.display,
            n = e.view;
          if (
            e.alignWidgets ||
            (e.gutters.firstChild && t.options.fixedGutter)
          ) {
            for (
              var i = li(e) - e.scroller.scrollLeft + t.doc.scrollLeft,
                r = e.gutters.offsetWidth,
                o = i + "px",
                s = 0;
              s < n.length;
              s++
            )
              if (!n[s].hidden) {
                t.options.fixedGutter &&
                  (n[s].gutter && (n[s].gutter.style.left = o),
                  n[s].gutterBackground &&
                    (n[s].gutterBackground.style.left = o));
                var a = n[s].alignable;
                if (a) for (var u = 0; u < a.length; u++) a[u].style.left = o;
              }
            t.options.fixedGutter && (e.gutters.style.left = i + r + "px");
          }
        }
        function gr(t) {
          if (!t.options.lineNumbers) return !1;
          var e = t.doc,
            n = ne(t.options, e.first + e.size - 1),
            i = t.display;
          if (n.length != i.lineNumChars) {
            var r = i.measure.appendChild(
                L(
                  "div",
                  [L("div", n)],
                  "CodeMirror-linenumber CodeMirror-gutter-elt",
                ),
              ),
              o = r.firstChild.offsetWidth,
              s = r.offsetWidth - o;
            return (
              (i.lineGutter.style.width = ""),
              (i.lineNumInnerWidth =
                Math.max(o, i.lineGutter.offsetWidth - s) + 1),
              (i.lineNumWidth = i.lineNumInnerWidth + s),
              (i.lineNumChars = i.lineNumInnerWidth ? n.length : -1),
              (i.lineGutter.style.width = i.lineNumWidth + "px"),
              dr(t.display),
              !0
            );
          }
          return !1;
        }
        function mr(t, e) {
          for (var n = [], i = !1, r = 0; r < t.length; r++) {
            var o = t[r],
              s = null;
            if (
              ("string" != typeof o && ((s = o.style), (o = o.className)),
              "CodeMirror-linenumbers" == o)
            ) {
              if (!e) continue;
              i = !0;
            }
            n.push({ className: o, style: s });
          }
          return (
            e &&
              !i &&
              n.push({ className: "CodeMirror-linenumbers", style: null }),
            n
          );
        }
        function vr(t) {
          var e = t.gutters,
            n = t.gutterSpecs;
          O(e), (t.lineGutter = null);
          for (var i = 0; i < n.length; ++i) {
            var r = n[i],
              o = r.className,
              s = r.style,
              a = e.appendChild(L("div", null, "CodeMirror-gutter " + o));
            s && (a.style.cssText = s),
              "CodeMirror-linenumbers" == o &&
                ((t.lineGutter = a),
                (a.style.width = (t.lineNumWidth || 1) + "px"));
          }
          (e.style.display = n.length ? "" : "none"), dr(t);
        }
        function yr(t) {
          vr(t.display), _i(t), fr(t);
        }
        function br(t, e, i, r) {
          var o = this;
          (this.input = i),
            (o.scrollbarFiller = L("div", null, "CodeMirror-scrollbar-filler")),
            o.scrollbarFiller.setAttribute("cm-not-content", "true"),
            (o.gutterFiller = L("div", null, "CodeMirror-gutter-filler")),
            o.gutterFiller.setAttribute("cm-not-content", "true"),
            (o.lineDiv = A("div", null, "CodeMirror-code")),
            (o.selectionDiv = L(
              "div",
              null,
              null,
              "position: relative; z-index: 1",
            )),
            (o.cursorDiv = L("div", null, "CodeMirror-cursors")),
            (o.measure = L("div", null, "CodeMirror-measure")),
            (o.lineMeasure = L("div", null, "CodeMirror-measure")),
            (o.lineSpace = A(
              "div",
              [
                o.measure,
                o.lineMeasure,
                o.selectionDiv,
                o.cursorDiv,
                o.lineDiv,
              ],
              null,
              "position: relative; outline: none",
            ));
          var l = A("div", [o.lineSpace], "CodeMirror-lines");
          (o.mover = L("div", [l], null, "position: relative")),
            (o.sizer = L("div", [o.mover], "CodeMirror-sizer")),
            (o.sizerWidth = null),
            (o.heightForcer = L(
              "div",
              null,
              null,
              "position: absolute; height: 50px; width: 1px;",
            )),
            (o.gutters = L("div", null, "CodeMirror-gutters")),
            (o.lineGutter = null),
            (o.scroller = L(
              "div",
              [o.sizer, o.heightForcer, o.gutters],
              "CodeMirror-scroll",
            )),
            o.scroller.setAttribute("tabIndex", "-1"),
            (o.wrapper = L(
              "div",
              [o.scrollbarFiller, o.gutterFiller, o.scroller],
              "CodeMirror",
            )),
            c && h >= 105 && (o.wrapper.style.clipPath = "inset(0px)"),
            o.wrapper.setAttribute("translate", "no"),
            s &&
              a < 8 &&
              ((o.gutters.style.zIndex = -1),
              (o.scroller.style.paddingRight = 0)),
            u || (n && v) || (o.scroller.draggable = !0),
            t && (t.appendChild ? t.appendChild(o.wrapper) : t(o.wrapper)),
            (o.viewFrom = o.viewTo = e.first),
            (o.reportedViewFrom = o.reportedViewTo = e.first),
            (o.view = []),
            (o.renderedView = null),
            (o.externalMeasured = null),
            (o.viewOffset = 0),
            (o.lastWrapHeight = o.lastWrapWidth = 0),
            (o.updateLineNumbers = null),
            (o.nativeBarWidth = o.barHeight = o.barWidth = 0),
            (o.scrollbarsClipped = !1),
            (o.lineNumWidth = o.lineNumInnerWidth = o.lineNumChars = null),
            (o.alignWidgets = !1),
            (o.cachedCharWidth = o.cachedTextHeight = o.cachedPaddingH = null),
            (o.maxLine = null),
            (o.maxLineLength = 0),
            (o.maxLineChanged = !1),
            (o.wheelDX = o.wheelDY = o.wheelStartX = o.wheelStartY = null),
            (o.shift = !1),
            (o.selForContextMenu = null),
            (o.activeTouch = null),
            (o.gutterSpecs = mr(r.gutters, r.lineNumbers)),
            vr(o),
            i.init(o);
        }
        (ur.prototype.signal = function (t, e) {
          bt(t, e) && this.events.push(arguments);
        }),
          (ur.prototype.finish = function () {
            for (var t = 0; t < this.events.length; t++)
              mt.apply(null, this.events[t]);
          });
        var wr = 0,
          xr = null;
        function kr(t) {
          var e = t.wheelDeltaX,
            n = t.wheelDeltaY;
          return (
            null == e &&
              t.detail &&
              t.axis == t.HORIZONTAL_AXIS &&
              (e = t.detail),
            null == n && t.detail && t.axis == t.VERTICAL_AXIS
              ? (n = t.detail)
              : null == n && (n = t.wheelDelta),
            { x: e, y: n }
          );
        }
        function Cr(t) {
          var e = kr(t);
          return (e.x *= xr), (e.y *= xr), e;
        }
        function Tr(t, e) {
          c &&
            102 == h &&
            (null == t.display.chromeScrollHack
              ? (t.display.sizer.style.pointerEvents = "none")
              : clearTimeout(t.display.chromeScrollHack),
            (t.display.chromeScrollHack = setTimeout(function () {
              (t.display.chromeScrollHack = null),
                (t.display.sizer.style.pointerEvents = "");
            }, 100)));
          var i = kr(e),
            r = i.x,
            o = i.y,
            s = xr;
          0 === e.deltaMode && ((r = e.deltaX), (o = e.deltaY), (s = 1));
          var a = t.display,
            l = a.scroller,
            d = l.scrollWidth > l.clientWidth,
            _ = l.scrollHeight > l.clientHeight;
          if ((r && d) || (o && _)) {
            if (o && y && u)
              t: for (var f = e.target, g = a.view; f != l; f = f.parentNode)
                for (var m = 0; m < g.length; m++)
                  if (g[m].node == f) {
                    t.display.currentWheelTarget = f;
                    break t;
                  }
            if (r && !n && !p && null != s)
              return (
                o && _ && zi(t, Math.max(0, l.scrollTop + o * s)),
                Fi(t, Math.max(0, l.scrollLeft + r * s)),
                (!o || (o && _)) && xt(e),
                void (a.wheelStartX = null)
              );
            if (o && null != s) {
              var v = o * s,
                b = t.doc.scrollTop,
                w = b + a.wrapper.clientHeight;
              v < 0
                ? (b = Math.max(0, b + v - 50))
                : (w = Math.min(t.doc.height, w + v + 50)),
                pr(t, { top: b, bottom: w });
            }
            wr < 20 &&
              0 !== e.deltaMode &&
              (null == a.wheelStartX
                ? ((a.wheelStartX = l.scrollLeft),
                  (a.wheelStartY = l.scrollTop),
                  (a.wheelDX = r),
                  (a.wheelDY = o),
                  setTimeout(function () {
                    if (null != a.wheelStartX) {
                      var t = l.scrollLeft - a.wheelStartX,
                        e = l.scrollTop - a.wheelStartY,
                        n =
                          (e && a.wheelDY && e / a.wheelDY) ||
                          (t && a.wheelDX && t / a.wheelDX);
                      (a.wheelStartX = a.wheelStartY = null),
                        n && ((xr = (xr * wr + n) / (wr + 1)), ++wr);
                    }
                  }, 200))
                : ((a.wheelDX += r), (a.wheelDY += o)));
          }
        }
        s ? (xr = -0.53) : n ? (xr = 15) : c ? (xr = -0.7) : d && (xr = -1 / 3);
        var Sr = function (t, e) {
          (this.ranges = t), (this.primIndex = e);
        };
        (Sr.prototype.primary = function () {
          return this.ranges[this.primIndex];
        }),
          (Sr.prototype.equals = function (t) {
            if (t == this) return !0;
            if (
              t.primIndex != this.primIndex ||
              t.ranges.length != this.ranges.length
            )
              return !1;
            for (var e = 0; e < this.ranges.length; e++) {
              var n = this.ranges[e],
                i = t.ranges[e];
              if (!oe(n.anchor, i.anchor) || !oe(n.head, i.head)) return !1;
            }
            return !0;
          }),
          (Sr.prototype.deepCopy = function () {
            for (var t = [], e = 0; e < this.ranges.length; e++)
              t[e] = new Mr(se(this.ranges[e].anchor), se(this.ranges[e].head));
            return new Sr(t, this.primIndex);
          }),
          (Sr.prototype.somethingSelected = function () {
            for (var t = 0; t < this.ranges.length; t++)
              if (!this.ranges[t].empty()) return !0;
            return !1;
          }),
          (Sr.prototype.contains = function (t, e) {
            e || (e = t);
            for (var n = 0; n < this.ranges.length; n++) {
              var i = this.ranges[n];
              if (re(e, i.from()) >= 0 && re(t, i.to()) <= 0) return n;
            }
            return -1;
          });
        var Mr = function (t, e) {
          (this.anchor = t), (this.head = e);
        };
        function Or(t, e, n) {
          var i = t && t.options.selectionsMayTouch,
            r = e[n];
          e.sort(function (t, e) {
            return re(t.from(), e.from());
          }),
            (n = U(e, r));
          for (var o = 1; o < e.length; o++) {
            var s = e[o],
              a = e[o - 1],
              u = re(a.to(), s.from());
            if (i && !s.empty() ? u > 0 : u >= 0) {
              var l = ue(a.from(), s.from()),
                c = ae(a.to(), s.to()),
                h = a.empty() ? s.from() == s.head : a.from() == a.head;
              o <= n && --n, e.splice(--o, 2, new Mr(h ? c : l, h ? l : c));
            }
          }
          return new Sr(e, n);
        }
        function Er(t, e) {
          return new Sr([new Mr(t, e || t)], 0);
        }
        function Lr(t) {
          return t.text
            ? ie(
                t.from.line + t.text.length - 1,
                Q(t.text).length + (1 == t.text.length ? t.from.ch : 0),
              )
            : t.to;
        }
        function Ar(t, e) {
          if (re(t, e.from) < 0) return t;
          if (re(t, e.to) <= 0) return Lr(e);
          var n = t.line + e.text.length - (e.to.line - e.from.line) - 1,
            i = t.ch;
          return t.line == e.to.line && (i += Lr(e).ch - e.to.ch), ie(n, i);
        }
        function Nr(t, e) {
          for (var n = [], i = 0; i < t.sel.ranges.length; i++) {
            var r = t.sel.ranges[i];
            n.push(new Mr(Ar(r.anchor, e), Ar(r.head, e)));
          }
          return Or(t.cm, n, t.sel.primIndex);
        }
        function Rr(t, e, n) {
          return t.line == e.line
            ? ie(n.line, t.ch - e.ch + n.ch)
            : ie(n.line + (t.line - e.line), t.ch);
        }
        function Dr(t) {
          (t.doc.mode = Bt(t.options, t.doc.modeOption)), Pr(t);
        }
        function Pr(t) {
          t.doc.iter(function (t) {
            t.stateAfter && (t.stateAfter = null),
              t.styles && (t.styles = null);
          }),
            (t.doc.modeFrontier = t.doc.highlightFrontier = t.doc.first),
            sr(t, 100),
            t.state.modeGen++,
            t.curOp && _i(t);
        }
        function Wr(t, e) {
          return (
            0 == e.from.ch &&
            0 == e.to.ch &&
            "" == Q(e.text) &&
            (!t.cm || t.cm.options.wholeLineUpdateBefore)
          );
        }
        function Ir(t, e, n, i) {
          function r(t) {
            return n ? n[t] : null;
          }
          function o(t, n, r) {
            !(function (t, e, n, i) {
              (t.text = e),
                t.stateAfter && (t.stateAfter = null),
                t.styles && (t.styles = null),
                null != t.order && (t.order = null),
                Ae(t),
                Ne(t, n);
              var r = i ? i(t) : 1;
              r != t.height && Zt(t, r);
            })(t, n, r, i),
              hn(t, "change", t, e);
          }
          function s(t, e) {
            for (var n = [], o = t; o < e; ++o) n.push(new qe(l[o], r(o), i));
            return n;
          }
          var a = e.from,
            u = e.to,
            l = e.text,
            c = qt(t, a.line),
            h = qt(t, u.line),
            p = Q(l),
            d = r(l.length - 1),
            _ = u.line - a.line;
          if (e.full)
            t.insert(0, s(0, l.length)), t.remove(l.length, t.size - l.length);
          else if (Wr(t, e)) {
            var f = s(0, l.length - 1);
            o(h, h.text, d),
              _ && t.remove(a.line, _),
              f.length && t.insert(a.line, f);
          } else if (c == h)
            if (1 == l.length)
              o(c, c.text.slice(0, a.ch) + p + c.text.slice(u.ch), d);
            else {
              var g = s(1, l.length - 1);
              g.push(new qe(p + c.text.slice(u.ch), d, i)),
                o(c, c.text.slice(0, a.ch) + l[0], r(0)),
                t.insert(a.line + 1, g);
            }
          else if (1 == l.length)
            o(c, c.text.slice(0, a.ch) + l[0] + h.text.slice(u.ch), r(0)),
              t.remove(a.line + 1, _);
          else {
            o(c, c.text.slice(0, a.ch) + l[0], r(0)),
              o(h, p + h.text.slice(u.ch), d);
            var m = s(1, l.length - 1);
            _ > 1 && t.remove(a.line + 1, _ - 1), t.insert(a.line + 1, m);
          }
          hn(t, "change", t, e);
        }
        function zr(t, e, n) {
          !(function t(i, r, o) {
            if (i.linked)
              for (var s = 0; s < i.linked.length; ++s) {
                var a = i.linked[s];
                if (a.doc != r) {
                  var u = o && a.sharedHist;
                  (n && !u) || (e(a.doc, u), t(a.doc, i, u));
                }
              }
          })(t, null, !0);
        }
        function jr(t, e) {
          if (e.cm) throw new Error("This document is already in use.");
          (t.doc = e),
            (e.cm = t),
            hi(t),
            Dr(t),
            Fr(t),
            (t.options.direction = e.direction),
            t.options.lineWrapping || $e(t),
            (t.options.mode = e.modeOption),
            _i(t);
        }
        function Fr(t) {
          ("rtl" == t.doc.direction ? D : M)(
            t.display.lineDiv,
            "CodeMirror-rtl",
          );
        }
        function Hr(t) {
          (this.done = []),
            (this.undone = []),
            (this.undoDepth = t ? t.undoDepth : 1 / 0),
            (this.lastModTime = this.lastSelTime = 0),
            (this.lastOp = this.lastSelOp = null),
            (this.lastOrigin = this.lastSelOrigin = null),
            (this.generation = this.maxGeneration = t ? t.maxGeneration : 1);
        }
        function Br(t, e) {
          var n = { from: se(e.from), to: Lr(e), text: Yt(t, e.from, e.to) };
          return (
            Xr(t, n, e.from.line, e.to.line + 1),
            zr(
              t,
              function (t) {
                return Xr(t, n, e.from.line, e.to.line + 1);
              },
              !0,
            ),
            n
          );
        }
        function Ur(t) {
          for (; t.length && Q(t).ranges; ) t.pop();
        }
        function Vr(t, e, n, i) {
          var r = t.history;
          r.undone.length = 0;
          var o,
            s,
            a = +new Date();
          if (
            (r.lastOp == i ||
              (r.lastOrigin == e.origin &&
                e.origin &&
                (("+" == e.origin.charAt(0) &&
                  r.lastModTime >
                    a - (t.cm ? t.cm.options.historyEventDelay : 500)) ||
                  "*" == e.origin.charAt(0)))) &&
            (o = (function (t, e) {
              return e
                ? (Ur(t.done), Q(t.done))
                : t.done.length && !Q(t.done).ranges
                  ? Q(t.done)
                  : t.done.length > 1 && !t.done[t.done.length - 2].ranges
                    ? (t.done.pop(), Q(t.done))
                    : void 0;
            })(r, r.lastOp == i))
          )
            (s = Q(o.changes)),
              0 == re(e.from, e.to) && 0 == re(e.from, s.to)
                ? (s.to = Lr(e))
                : o.changes.push(Br(t, e));
          else {
            var u = Q(r.done);
            for (
              (u && u.ranges) || Gr(t.sel, r.done),
                o = { changes: [Br(t, e)], generation: r.generation },
                r.done.push(o);
              r.done.length > r.undoDepth;

            )
              r.done.shift(), r.done[0].ranges || r.done.shift();
          }
          r.done.push(n),
            (r.generation = ++r.maxGeneration),
            (r.lastModTime = r.lastSelTime = a),
            (r.lastOp = r.lastSelOp = i),
            (r.lastOrigin = r.lastSelOrigin = e.origin),
            s || mt(t, "historyAdded");
        }
        function Kr(t, e, n, i) {
          var r = t.history,
            o = i && i.origin;
          n == r.lastSelOp ||
          (o &&
            r.lastSelOrigin == o &&
            ((r.lastModTime == r.lastSelTime && r.lastOrigin == o) ||
              (function (t, e, n, i) {
                var r = e.charAt(0);
                return (
                  "*" == r ||
                  ("+" == r &&
                    n.ranges.length == i.ranges.length &&
                    n.somethingSelected() == i.somethingSelected() &&
                    new Date() - t.history.lastSelTime <=
                      (t.cm ? t.cm.options.historyEventDelay : 500))
                );
              })(t, o, Q(r.done), e)))
            ? (r.done[r.done.length - 1] = e)
            : Gr(e, r.done),
            (r.lastSelTime = +new Date()),
            (r.lastSelOrigin = o),
            (r.lastSelOp = n),
            i && !1 !== i.clearRedo && Ur(r.undone);
        }
        function Gr(t, e) {
          var n = Q(e);
          (n && n.ranges && n.equals(t)) || e.push(t);
        }
        function Xr(t, e, n, i) {
          var r = e["spans_" + t.id],
            o = 0;
          t.iter(
            Math.max(t.first, n),
            Math.min(t.first + t.size, i),
            function (n) {
              n.markedSpans &&
                ((r || (r = e["spans_" + t.id] = {}))[o] = n.markedSpans),
                ++o;
            },
          );
        }
        function $r(t) {
          if (!t) return null;
          for (var e, n = 0; n < t.length; ++n)
            t[n].marker.explicitlyCleared
              ? e || (e = t.slice(0, n))
              : e && e.push(t[n]);
          return e ? (e.length ? e : null) : t;
        }
        function qr(t, e) {
          var n = (function (t, e) {
              var n = e["spans_" + t.id];
              if (!n) return null;
              for (var i = [], r = 0; r < e.text.length; ++r) i.push($r(n[r]));
              return i;
            })(t, e),
            i = Ee(t, e);
          if (!n) return i;
          if (!i) return n;
          for (var r = 0; r < n.length; ++r) {
            var o = n[r],
              s = i[r];
            if (o && s)
              t: for (var a = 0; a < s.length; ++a) {
                for (var u = s[a], l = 0; l < o.length; ++l)
                  if (o[l].marker == u.marker) continue t;
                o.push(u);
              }
            else s && (n[r] = s);
          }
          return n;
        }
        function Yr(t, e, n) {
          for (var i = [], r = 0; r < t.length; ++r) {
            var o = t[r];
            if (o.ranges) i.push(n ? Sr.prototype.deepCopy.call(o) : o);
            else {
              var s = o.changes,
                a = [];
              i.push({ changes: a });
              for (var u = 0; u < s.length; ++u) {
                var l = s[u],
                  c = void 0;
                if ((a.push({ from: l.from, to: l.to, text: l.text }), e))
                  for (var h in l)
                    (c = h.match(/^spans_(\d+)$/)) &&
                      U(e, Number(c[1])) > -1 &&
                      ((Q(a)[h] = l[h]), delete l[h]);
              }
            }
          }
          return i;
        }
        function Qr(t, e, n, i) {
          if (i) {
            var r = t.anchor;
            if (n) {
              var o = re(e, r) < 0;
              o != re(n, r) < 0
                ? ((r = e), (e = n))
                : o != re(e, n) < 0 && (e = n);
            }
            return new Mr(r, e);
          }
          return new Mr(n || e, e);
        }
        function Zr(t, e, n, i, r) {
          null == r && (r = t.cm && (t.cm.display.shift || t.extend)),
            io(t, new Sr([Qr(t.sel.primary(), e, n, r)], 0), i);
        }
        function Jr(t, e, n) {
          for (
            var i = [], r = t.cm && (t.cm.display.shift || t.extend), o = 0;
            o < t.sel.ranges.length;
            o++
          )
            i[o] = Qr(t.sel.ranges[o], e[o], null, r);
          io(t, Or(t.cm, i, t.sel.primIndex), n);
        }
        function to(t, e, n, i) {
          var r = t.sel.ranges.slice(0);
          (r[e] = n), io(t, Or(t.cm, r, t.sel.primIndex), i);
        }
        function eo(t, e, n, i) {
          io(t, Er(e, n), i);
        }
        function no(t, e, n) {
          var i = t.history.done,
            r = Q(i);
          r && r.ranges ? ((i[i.length - 1] = e), ro(t, e, n)) : io(t, e, n);
        }
        function io(t, e, n) {
          ro(t, e, n), Kr(t, t.sel, t.cm ? t.cm.curOp.id : NaN, n);
        }
        function ro(t, e, n) {
          (bt(t, "beforeSelectionChange") ||
            (t.cm && bt(t.cm, "beforeSelectionChange"))) &&
            (e = (function (t, e, n) {
              var i = {
                ranges: e.ranges,
                update: function (e) {
                  this.ranges = [];
                  for (var n = 0; n < e.length; n++)
                    this.ranges[n] = new Mr(
                      ce(t, e[n].anchor),
                      ce(t, e[n].head),
                    );
                },
                origin: n && n.origin,
              };
              return (
                mt(t, "beforeSelectionChange", t, i),
                t.cm && mt(t.cm, "beforeSelectionChange", t.cm, i),
                i.ranges != e.ranges
                  ? Or(t.cm, i.ranges, i.ranges.length - 1)
                  : e
              );
            })(t, e, n));
          var i =
            (n && n.bias) ||
            (re(e.primary().head, t.sel.primary().head) < 0 ? -1 : 1);
          oo(t, ao(t, e, i, !0)),
            (n && !1 === n.scroll) ||
              !t.cm ||
              "nocursor" == t.cm.getOption("readOnly") ||
              Di(t.cm);
        }
        function oo(t, e) {
          e.equals(t.sel) ||
            ((t.sel = e),
            t.cm &&
              ((t.cm.curOp.updateInput = 1),
              (t.cm.curOp.selectionChanged = !0),
              yt(t.cm)),
            hn(t, "cursorActivity", t));
        }
        function so(t) {
          oo(t, ao(t, t.sel, null, !1));
        }
        function ao(t, e, n, i) {
          for (var r, o = 0; o < e.ranges.length; o++) {
            var s = e.ranges[o],
              a = e.ranges.length == t.sel.ranges.length && t.sel.ranges[o],
              u = lo(t, s.anchor, a && a.anchor, n, i),
              l = s.head == s.anchor ? u : lo(t, s.head, a && a.head, n, i);
            (r || u != s.anchor || l != s.head) &&
              (r || (r = e.ranges.slice(0, o)), (r[o] = new Mr(u, l)));
          }
          return r ? Or(t.cm, r, e.primIndex) : e;
        }
        function uo(t, e, n, i, r) {
          var o = qt(t, e.line);
          if (o.markedSpans)
            for (var s = 0; s < o.markedSpans.length; ++s) {
              var a = o.markedSpans[s],
                u = a.marker,
                l = "selectLeft" in u ? !u.selectLeft : u.inclusiveLeft,
                c = "selectRight" in u ? !u.selectRight : u.inclusiveRight;
              if (
                (null == a.from || (l ? a.from <= e.ch : a.from < e.ch)) &&
                (null == a.to || (c ? a.to >= e.ch : a.to > e.ch))
              ) {
                if (r && (mt(u, "beforeCursorEnter"), u.explicitlyCleared)) {
                  if (o.markedSpans) {
                    --s;
                    continue;
                  }
                  break;
                }
                if (!u.atomic) continue;
                if (n) {
                  var h = u.find(i < 0 ? 1 : -1),
                    p = void 0;
                  if (
                    ((i < 0 ? c : l) &&
                      (h = co(t, h, -i, h && h.line == e.line ? o : null)),
                    h &&
                      h.line == e.line &&
                      (p = re(h, n)) &&
                      (i < 0 ? p < 0 : p > 0))
                  )
                    return uo(t, h, e, i, r);
                }
                var d = u.find(i < 0 ? -1 : 1);
                return (
                  (i < 0 ? l : c) &&
                    (d = co(t, d, i, d.line == e.line ? o : null)),
                  d ? uo(t, d, e, i, r) : null
                );
              }
            }
          return e;
        }
        function lo(t, e, n, i, r) {
          var o = i || 1,
            s =
              uo(t, e, n, o, r) ||
              (!r && uo(t, e, n, o, !0)) ||
              uo(t, e, n, -o, r) ||
              (!r && uo(t, e, n, -o, !0));
          return s || ((t.cantEdit = !0), ie(t.first, 0));
        }
        function co(t, e, n, i) {
          return n < 0 && 0 == e.ch
            ? e.line > t.first
              ? ce(t, ie(e.line - 1))
              : null
            : n > 0 && e.ch == (i || qt(t, e.line)).text.length
              ? e.line < t.first + t.size - 1
                ? ie(e.line + 1, 0)
                : null
              : new ie(e.line, e.ch + n);
        }
        function ho(t) {
          t.setSelection(ie(t.firstLine(), 0), ie(t.lastLine()), K);
        }
        function po(t, e, n) {
          var i = {
            canceled: !1,
            from: e.from,
            to: e.to,
            text: e.text,
            origin: e.origin,
            cancel: function () {
              return (i.canceled = !0);
            },
          };
          return (
            n &&
              (i.update = function (e, n, r, o) {
                e && (i.from = ce(t, e)),
                  n && (i.to = ce(t, n)),
                  r && (i.text = r),
                  void 0 !== o && (i.origin = o);
              }),
            mt(t, "beforeChange", t, i),
            t.cm && mt(t.cm, "beforeChange", t.cm, i),
            i.canceled
              ? (t.cm && (t.cm.curOp.updateInput = 2), null)
              : { from: i.from, to: i.to, text: i.text, origin: i.origin }
          );
        }
        function _o(t, e, n) {
          if (t.cm) {
            if (!t.cm.curOp) return ir(t.cm, _o)(t, e, n);
            if (t.cm.state.suppressEdits) return;
          }
          if (
            !(bt(t, "beforeChange") || (t.cm && bt(t.cm, "beforeChange"))) ||
            (e = po(t, e, !0))
          ) {
            var i =
              Ce &&
              !n &&
              (function (t, e, n) {
                var i = null;
                if (
                  (t.iter(e.line, n.line + 1, function (t) {
                    if (t.markedSpans)
                      for (var e = 0; e < t.markedSpans.length; ++e) {
                        var n = t.markedSpans[e].marker;
                        !n.readOnly ||
                          (i && -1 != U(i, n)) ||
                          (i || (i = [])).push(n);
                      }
                  }),
                  !i)
                )
                  return null;
                for (var r = [{ from: e, to: n }], o = 0; o < i.length; ++o)
                  for (var s = i[o], a = s.find(0), u = 0; u < r.length; ++u) {
                    var l = r[u];
                    if (!(re(l.to, a.from) < 0 || re(l.from, a.to) > 0)) {
                      var c = [u, 1],
                        h = re(l.from, a.from),
                        p = re(l.to, a.to);
                      (h < 0 || (!s.inclusiveLeft && !h)) &&
                        c.push({ from: l.from, to: a.from }),
                        (p > 0 || (!s.inclusiveRight && !p)) &&
                          c.push({ from: a.to, to: l.to }),
                        r.splice.apply(r, c),
                        (u += c.length - 3);
                    }
                  }
                return r;
              })(t, e.from, e.to);
            if (i)
              for (var r = i.length - 1; r >= 0; --r)
                fo(t, {
                  from: i[r].from,
                  to: i[r].to,
                  text: r ? [""] : e.text,
                  origin: e.origin,
                });
            else fo(t, e);
          }
        }
        function fo(t, e) {
          if (1 != e.text.length || "" != e.text[0] || 0 != re(e.from, e.to)) {
            var n = Nr(t, e);
            Vr(t, e, n, t.cm ? t.cm.curOp.id : NaN), vo(t, e, n, Ee(t, e));
            var i = [];
            zr(t, function (t, n) {
              n ||
                -1 != U(i, t.history) ||
                (xo(t.history, e), i.push(t.history)),
                vo(t, e, null, Ee(t, e));
            });
          }
        }
        function go(t, e, n) {
          var i = t.cm && t.cm.state.suppressEdits;
          if (!i || n) {
            for (
              var r,
                o = t.history,
                s = t.sel,
                a = "undo" == e ? o.done : o.undone,
                u = "undo" == e ? o.undone : o.done,
                l = 0;
              l < a.length &&
              ((r = a[l]), n ? !r.ranges || r.equals(t.sel) : r.ranges);
              l++
            );
            if (l != a.length) {
              for (o.lastOrigin = o.lastSelOrigin = null; ; ) {
                if (!(r = a.pop()).ranges) {
                  if (i) return void a.push(r);
                  break;
                }
                if ((Gr(r, u), n && !r.equals(t.sel)))
                  return void io(t, r, { clearRedo: !1 });
                s = r;
              }
              var c = [];
              Gr(s, u),
                u.push({ changes: c, generation: o.generation }),
                (o.generation = r.generation || ++o.maxGeneration);
              for (
                var h =
                    bt(t, "beforeChange") || (t.cm && bt(t.cm, "beforeChange")),
                  p = function (n) {
                    var i = r.changes[n];
                    if (((i.origin = e), h && !po(t, i, !1)))
                      return (a.length = 0), {};
                    c.push(Br(t, i));
                    var o = n ? Nr(t, i) : Q(a);
                    vo(t, i, o, qr(t, i)),
                      !n &&
                        t.cm &&
                        t.cm.scrollIntoView({ from: i.from, to: Lr(i) });
                    var s = [];
                    zr(t, function (t, e) {
                      e ||
                        -1 != U(s, t.history) ||
                        (xo(t.history, i), s.push(t.history)),
                        vo(t, i, null, qr(t, i));
                    });
                  },
                  d = r.changes.length - 1;
                d >= 0;
                --d
              ) {
                var _ = p(d);
                if (_) return _.v;
              }
            }
          }
        }
        function mo(t, e) {
          if (
            0 != e &&
            ((t.first += e),
            (t.sel = new Sr(
              Z(t.sel.ranges, function (t) {
                return new Mr(
                  ie(t.anchor.line + e, t.anchor.ch),
                  ie(t.head.line + e, t.head.ch),
                );
              }),
              t.sel.primIndex,
            )),
            t.cm)
          ) {
            _i(t.cm, t.first, t.first - e, e);
            for (var n = t.cm.display, i = n.viewFrom; i < n.viewTo; i++)
              fi(t.cm, i, "gutter");
          }
        }
        function vo(t, e, n, i) {
          if (t.cm && !t.cm.curOp) return ir(t.cm, vo)(t, e, n, i);
          if (e.to.line < t.first)
            mo(t, e.text.length - 1 - (e.to.line - e.from.line));
          else if (!(e.from.line > t.lastLine())) {
            if (e.from.line < t.first) {
              var r = e.text.length - 1 - (t.first - e.from.line);
              mo(t, r),
                (e = {
                  from: ie(t.first, 0),
                  to: ie(e.to.line + r, e.to.ch),
                  text: [Q(e.text)],
                  origin: e.origin,
                });
            }
            var o = t.lastLine();
            e.to.line > o &&
              (e = {
                from: e.from,
                to: ie(o, qt(t, o).text.length),
                text: [e.text[0]],
                origin: e.origin,
              }),
              (e.removed = Yt(t, e.from, e.to)),
              n || (n = Nr(t, e)),
              t.cm
                ? (function (t, e, n) {
                    var i = t.doc,
                      r = t.display,
                      o = e.from,
                      s = e.to,
                      a = !1,
                      u = o.line;
                    t.options.lineWrapping ||
                      ((u = Jt(He(qt(i, o.line)))),
                      i.iter(u, s.line + 1, function (t) {
                        if (t == r.maxLine) return (a = !0), !0;
                      })),
                      i.sel.contains(e.from, e.to) > -1 && yt(t),
                      Ir(i, e, n, ci(t)),
                      t.options.lineWrapping ||
                        (i.iter(u, o.line + e.text.length, function (t) {
                          var e = Xe(t);
                          e > r.maxLineLength &&
                            ((r.maxLine = t),
                            (r.maxLineLength = e),
                            (r.maxLineChanged = !0),
                            (a = !1));
                        }),
                        a && (t.curOp.updateMaxLine = !0)),
                      (function (t, e) {
                        if (
                          ((t.modeFrontier = Math.min(t.modeFrontier, e)),
                          !(t.highlightFrontier < e - 10))
                        ) {
                          for (var n = t.first, i = e - 1; i > n; i--) {
                            var r = qt(t, i).stateAfter;
                            if (
                              r &&
                              (!(r instanceof pe) || i + r.lookAhead < e)
                            ) {
                              n = i + 1;
                              break;
                            }
                          }
                          t.highlightFrontier = Math.min(
                            t.highlightFrontier,
                            n,
                          );
                        }
                      })(i, o.line),
                      sr(t, 400);
                    var l = e.text.length - (s.line - o.line) - 1;
                    e.full
                      ? _i(t)
                      : o.line != s.line || 1 != e.text.length || Wr(t.doc, e)
                        ? _i(t, o.line, s.line + 1, l)
                        : fi(t, o.line, "text");
                    var c = bt(t, "changes"),
                      h = bt(t, "change");
                    if (h || c) {
                      var p = {
                        from: o,
                        to: s,
                        text: e.text,
                        removed: e.removed,
                        origin: e.origin,
                      };
                      h && hn(t, "change", t, p),
                        c &&
                          (
                            t.curOp.changeObjs || (t.curOp.changeObjs = [])
                          ).push(p);
                    }
                    t.display.selForContextMenu = null;
                  })(t.cm, e, i)
                : Ir(t, e, i),
              ro(t, n, K),
              t.cantEdit && lo(t, ie(t.firstLine(), 0)) && (t.cantEdit = !1);
          }
        }
        function yo(t, e, n, i, r) {
          var o;
          i || (i = n),
            re(i, n) < 0 && ((n = (o = [i, n])[0]), (i = o[1])),
            "string" == typeof e && (e = t.splitLines(e)),
            _o(t, { from: n, to: i, text: e, origin: r });
        }
        function bo(t, e, n, i) {
          n < t.line ? (t.line += i) : e < t.line && ((t.line = e), (t.ch = 0));
        }
        function wo(t, e, n, i) {
          for (var r = 0; r < t.length; ++r) {
            var o = t[r],
              s = !0;
            if (o.ranges) {
              o.copied || ((o = t[r] = o.deepCopy()).copied = !0);
              for (var a = 0; a < o.ranges.length; a++)
                bo(o.ranges[a].anchor, e, n, i), bo(o.ranges[a].head, e, n, i);
            } else {
              for (var u = 0; u < o.changes.length; ++u) {
                var l = o.changes[u];
                if (n < l.from.line)
                  (l.from = ie(l.from.line + i, l.from.ch)),
                    (l.to = ie(l.to.line + i, l.to.ch));
                else if (e <= l.to.line) {
                  s = !1;
                  break;
                }
              }
              s || (t.splice(0, r + 1), (r = 0));
            }
          }
        }
        function xo(t, e) {
          var n = e.from.line,
            i = e.to.line,
            r = e.text.length - (i - n) - 1;
          wo(t.done, n, i, r), wo(t.undone, n, i, r);
        }
        function ko(t, e, n, i) {
          var r = e,
            o = e;
          return (
            "number" == typeof e ? (o = qt(t, le(t, e))) : (r = Jt(e)),
            null == r ? null : (i(o, r) && t.cm && fi(t.cm, r, n), o)
          );
        }
        function Co(t) {
          (this.lines = t), (this.parent = null);
          for (var e = 0, n = 0; n < t.length; ++n)
            (t[n].parent = this), (e += t[n].height);
          this.height = e;
        }
        function To(t) {
          this.children = t;
          for (var e = 0, n = 0, i = 0; i < t.length; ++i) {
            var r = t[i];
            (e += r.chunkSize()), (n += r.height), (r.parent = this);
          }
          (this.size = e), (this.height = n), (this.parent = null);
        }
        (Mr.prototype.from = function () {
          return ue(this.anchor, this.head);
        }),
          (Mr.prototype.to = function () {
            return ae(this.anchor, this.head);
          }),
          (Mr.prototype.empty = function () {
            return (
              this.head.line == this.anchor.line &&
              this.head.ch == this.anchor.ch
            );
          }),
          (Co.prototype = {
            chunkSize: function () {
              return this.lines.length;
            },
            removeInner: function (t, e) {
              for (var n = t, i = t + e; n < i; ++n) {
                var r = this.lines[n];
                (this.height -= r.height), Ye(r), hn(r, "delete");
              }
              this.lines.splice(t, e);
            },
            collapse: function (t) {
              t.push.apply(t, this.lines);
            },
            insertInner: function (t, e, n) {
              (this.height += n),
                (this.lines = this.lines
                  .slice(0, t)
                  .concat(e)
                  .concat(this.lines.slice(t)));
              for (var i = 0; i < e.length; ++i) e[i].parent = this;
            },
            iterN: function (t, e, n) {
              for (var i = t + e; t < i; ++t) if (n(this.lines[t])) return !0;
            },
          }),
          (To.prototype = {
            chunkSize: function () {
              return this.size;
            },
            removeInner: function (t, e) {
              this.size -= e;
              for (var n = 0; n < this.children.length; ++n) {
                var i = this.children[n],
                  r = i.chunkSize();
                if (t < r) {
                  var o = Math.min(e, r - t),
                    s = i.height;
                  if (
                    (i.removeInner(t, o),
                    (this.height -= s - i.height),
                    r == o && (this.children.splice(n--, 1), (i.parent = null)),
                    0 == (e -= o))
                  )
                    break;
                  t = 0;
                } else t -= r;
              }
              if (
                this.size - e < 25 &&
                (this.children.length > 1 || !(this.children[0] instanceof Co))
              ) {
                var a = [];
                this.collapse(a),
                  (this.children = [new Co(a)]),
                  (this.children[0].parent = this);
              }
            },
            collapse: function (t) {
              for (var e = 0; e < this.children.length; ++e)
                this.children[e].collapse(t);
            },
            insertInner: function (t, e, n) {
              (this.size += e.length), (this.height += n);
              for (var i = 0; i < this.children.length; ++i) {
                var r = this.children[i],
                  o = r.chunkSize();
                if (t <= o) {
                  if (
                    (r.insertInner(t, e, n), r.lines && r.lines.length > 50)
                  ) {
                    for (
                      var s = (r.lines.length % 25) + 25, a = s;
                      a < r.lines.length;

                    ) {
                      var u = new Co(r.lines.slice(a, (a += 25)));
                      (r.height -= u.height),
                        this.children.splice(++i, 0, u),
                        (u.parent = this);
                    }
                    (r.lines = r.lines.slice(0, s)), this.maybeSpill();
                  }
                  break;
                }
                t -= o;
              }
            },
            maybeSpill: function () {
              if (!(this.children.length <= 10)) {
                var t = this;
                do {
                  var e = new To(t.children.splice(t.children.length - 5, 5));
                  if (t.parent) {
                    (t.size -= e.size), (t.height -= e.height);
                    var n = U(t.parent.children, t);
                    t.parent.children.splice(n + 1, 0, e);
                  } else {
                    var i = new To(t.children);
                    (i.parent = t), (t.children = [i, e]), (t = i);
                  }
                  e.parent = t.parent;
                } while (t.children.length > 10);
                t.parent.maybeSpill();
              }
            },
            iterN: function (t, e, n) {
              for (var i = 0; i < this.children.length; ++i) {
                var r = this.children[i],
                  o = r.chunkSize();
                if (t < o) {
                  var s = Math.min(e, o - t);
                  if (r.iterN(t, s, n)) return !0;
                  if (0 == (e -= s)) break;
                  t = 0;
                } else t -= o;
              }
            },
          });
        var So = function (t, e, n) {
          if (n) for (var i in n) n.hasOwnProperty(i) && (this[i] = n[i]);
          (this.doc = t), (this.node = e);
        };
        function Mo(t, e, n) {
          Ge(e) < ((t.curOp && t.curOp.scrollTop) || t.doc.scrollTop) &&
            Ri(t, n);
        }
        (So.prototype.clear = function () {
          var t = this.doc.cm,
            e = this.line.widgets,
            n = this.line,
            i = Jt(n);
          if (null != i && e) {
            for (var r = 0; r < e.length; ++r) e[r] == this && e.splice(r--, 1);
            e.length || (n.widgets = null);
            var o = Cn(this);
            Zt(n, Math.max(0, n.height - o)),
              t &&
                (nr(t, function () {
                  Mo(t, n, -o), fi(t, i, "widget");
                }),
                hn(t, "lineWidgetCleared", t, this, i));
          }
        }),
          (So.prototype.changed = function () {
            var t = this,
              e = this.height,
              n = this.doc.cm,
              i = this.line;
            this.height = null;
            var r = Cn(this) - e;
            r &&
              (Ve(this.doc, i) || Zt(i, i.height + r),
              n &&
                nr(n, function () {
                  (n.curOp.forceUpdate = !0),
                    Mo(n, i, r),
                    hn(n, "lineWidgetChanged", n, t, Jt(i));
                }));
          }),
          wt(So);
        var Oo = 0,
          Eo = function (t, e) {
            (this.lines = []),
              (this.type = e),
              (this.doc = t),
              (this.id = ++Oo);
          };
        function Lo(t, e, n, i, r) {
          if (i && i.shared)
            return (function (t, e, n, i, r) {
              (i = F(i)).shared = !1;
              var o = [Lo(t, e, n, i, r)],
                s = o[0],
                a = i.widgetNode;
              return (
                zr(t, function (t) {
                  a && (i.widgetNode = a.cloneNode(!0)),
                    o.push(Lo(t, ce(t, e), ce(t, n), i, r));
                  for (var u = 0; u < t.linked.length; ++u)
                    if (t.linked[u].isParent) return;
                  s = Q(o);
                }),
                new Ao(o, s)
              );
            })(t, e, n, i, r);
          if (t.cm && !t.cm.curOp) return ir(t.cm, Lo)(t, e, n, i, r);
          var o = new Eo(t, r),
            s = re(e, n);
          if ((i && F(i, o, !1), s > 0 || (0 == s && !1 !== o.clearWhenEmpty)))
            return o;
          if (
            (o.replacedWith &&
              ((o.collapsed = !0),
              (o.widgetNode = A("span", [o.replacedWith], "CodeMirror-widget")),
              i.handleMouseEvents ||
                o.widgetNode.setAttribute("cm-ignore-events", "true"),
              i.insertLeft && (o.widgetNode.insertLeft = !0)),
            o.collapsed)
          ) {
            if (
              Fe(t, e.line, e, n, o) ||
              (e.line != n.line && Fe(t, n.line, e, n, o))
            )
              throw new Error(
                "Inserting collapsed marker partially overlapping an existing one",
              );
            Te = !0;
          }
          o.addToHistory &&
            Vr(t, { from: e, to: n, origin: "markText" }, t.sel, NaN);
          var a,
            u = e.line,
            l = t.cm;
          if (
            (t.iter(u, n.line + 1, function (i) {
              l &&
                o.collapsed &&
                !l.options.lineWrapping &&
                He(i) == l.display.maxLine &&
                (a = !0),
                o.collapsed && u != e.line && Zt(i, 0),
                (function (t, e, n) {
                  var i =
                    n &&
                    window.WeakSet &&
                    (n.markedSpans || (n.markedSpans = new WeakSet()));
                  i && t.markedSpans && i.has(t.markedSpans)
                    ? t.markedSpans.push(e)
                    : ((t.markedSpans = t.markedSpans
                        ? t.markedSpans.concat([e])
                        : [e]),
                      i && i.add(t.markedSpans)),
                    e.marker.attachLine(t);
                })(
                  i,
                  new Se(
                    o,
                    u == e.line ? e.ch : null,
                    u == n.line ? n.ch : null,
                  ),
                  t.cm && t.cm.curOp,
                ),
                ++u;
            }),
            o.collapsed &&
              t.iter(e.line, n.line + 1, function (e) {
                Ve(t, e) && Zt(e, 0);
              }),
            o.clearOnEnter &&
              _t(o, "beforeCursorEnter", function () {
                return o.clear();
              }),
            o.readOnly &&
              ((Ce = !0),
              (t.history.done.length || t.history.undone.length) &&
                t.clearHistory()),
            o.collapsed && ((o.id = ++Oo), (o.atomic = !0)),
            l)
          ) {
            if ((a && (l.curOp.updateMaxLine = !0), o.collapsed))
              _i(l, e.line, n.line + 1);
            else if (
              o.className ||
              o.startStyle ||
              o.endStyle ||
              o.css ||
              o.attributes ||
              o.title
            )
              for (var c = e.line; c <= n.line; c++) fi(l, c, "text");
            o.atomic && so(l.doc), hn(l, "markerAdded", l, o);
          }
          return o;
        }
        (Eo.prototype.clear = function () {
          if (!this.explicitlyCleared) {
            var t = this.doc.cm,
              e = t && !t.curOp;
            if ((e && qi(t), bt(this, "clear"))) {
              var n = this.find();
              n && hn(this, "clear", n.from, n.to);
            }
            for (var i = null, r = null, o = 0; o < this.lines.length; ++o) {
              var s = this.lines[o],
                a = Me(s.markedSpans, this);
              t && !this.collapsed
                ? fi(t, Jt(s), "text")
                : t &&
                  (null != a.to && (r = Jt(s)), null != a.from && (i = Jt(s))),
                (s.markedSpans = Oe(s.markedSpans, a)),
                null == a.from &&
                  this.collapsed &&
                  !Ve(this.doc, s) &&
                  t &&
                  Zt(s, si(t.display));
            }
            if (t && this.collapsed && !t.options.lineWrapping)
              for (var u = 0; u < this.lines.length; ++u) {
                var l = He(this.lines[u]),
                  c = Xe(l);
                c > t.display.maxLineLength &&
                  ((t.display.maxLine = l),
                  (t.display.maxLineLength = c),
                  (t.display.maxLineChanged = !0));
              }
            null != i && t && this.collapsed && _i(t, i, r + 1),
              (this.lines.length = 0),
              (this.explicitlyCleared = !0),
              this.atomic &&
                this.doc.cantEdit &&
                ((this.doc.cantEdit = !1), t && so(t.doc)),
              t && hn(t, "markerCleared", t, this, i, r),
              e && Yi(t),
              this.parent && this.parent.clear();
          }
        }),
          (Eo.prototype.find = function (t, e) {
            var n, i;
            null == t && "bookmark" == this.type && (t = 1);
            for (var r = 0; r < this.lines.length; ++r) {
              var o = this.lines[r],
                s = Me(o.markedSpans, this);
              if (null != s.from && ((n = ie(e ? o : Jt(o), s.from)), -1 == t))
                return n;
              if (null != s.to && ((i = ie(e ? o : Jt(o), s.to)), 1 == t))
                return i;
            }
            return n && { from: n, to: i };
          }),
          (Eo.prototype.changed = function () {
            var t = this,
              e = this.find(-1, !0),
              n = this,
              i = this.doc.cm;
            e &&
              i &&
              nr(i, function () {
                var r = e.line,
                  o = Jt(e.line),
                  s = Dn(i, o);
                if (
                  (s &&
                    (Hn(s),
                    (i.curOp.selectionChanged = i.curOp.forceUpdate = !0)),
                  (i.curOp.updateMaxLine = !0),
                  !Ve(n.doc, r) && null != n.height)
                ) {
                  var a = n.height;
                  n.height = null;
                  var u = Cn(n) - a;
                  u && Zt(r, r.height + u);
                }
                hn(i, "markerChanged", i, t);
              });
          }),
          (Eo.prototype.attachLine = function (t) {
            if (!this.lines.length && this.doc.cm) {
              var e = this.doc.cm.curOp;
              (e.maybeHiddenMarkers && -1 != U(e.maybeHiddenMarkers, this)) ||
                (e.maybeUnhiddenMarkers || (e.maybeUnhiddenMarkers = [])).push(
                  this,
                );
            }
            this.lines.push(t);
          }),
          (Eo.prototype.detachLine = function (t) {
            if (
              (this.lines.splice(U(this.lines, t), 1),
              !this.lines.length && this.doc.cm)
            ) {
              var e = this.doc.cm.curOp;
              (e.maybeHiddenMarkers || (e.maybeHiddenMarkers = [])).push(this);
            }
          }),
          wt(Eo);
        var Ao = function (t, e) {
          (this.markers = t), (this.primary = e);
          for (var n = 0; n < t.length; ++n) t[n].parent = this;
        };
        function No(t) {
          return t.findMarks(
            ie(t.first, 0),
            t.clipPos(ie(t.lastLine())),
            function (t) {
              return t.parent;
            },
          );
        }
        function Ro(t) {
          for (
            var e = function (e) {
                var n = t[e],
                  i = [n.primary.doc];
                zr(n.primary.doc, function (t) {
                  return i.push(t);
                });
                for (var r = 0; r < n.markers.length; r++) {
                  var o = n.markers[r];
                  -1 == U(i, o.doc) &&
                    ((o.parent = null), n.markers.splice(r--, 1));
                }
              },
              n = 0;
            n < t.length;
            n++
          )
            e(n);
        }
        (Ao.prototype.clear = function () {
          if (!this.explicitlyCleared) {
            this.explicitlyCleared = !0;
            for (var t = 0; t < this.markers.length; ++t)
              this.markers[t].clear();
            hn(this, "clear");
          }
        }),
          (Ao.prototype.find = function (t, e) {
            return this.primary.find(t, e);
          }),
          wt(Ao);
        var Do = 0,
          Po = function (t, e, n, i, r) {
            if (!(this instanceof Po)) return new Po(t, e, n, i, r);
            null == n && (n = 0),
              To.call(this, [new Co([new qe("", null)])]),
              (this.first = n),
              (this.scrollTop = this.scrollLeft = 0),
              (this.cantEdit = !1),
              (this.cleanGeneration = 1),
              (this.modeFrontier = this.highlightFrontier = n);
            var o = ie(n, 0);
            (this.sel = Er(o)),
              (this.history = new Hr(null)),
              (this.id = ++Do),
              (this.modeOption = e),
              (this.lineSep = i),
              (this.direction = "rtl" == r ? "rtl" : "ltr"),
              (this.extend = !1),
              "string" == typeof t && (t = this.splitLines(t)),
              Ir(this, { from: o, to: o, text: t }),
              io(this, Er(o), K);
          };
        (Po.prototype = tt(To.prototype, {
          constructor: Po,
          iter: function (t, e, n) {
            n
              ? this.iterN(t - this.first, e - t, n)
              : this.iterN(this.first, this.first + this.size, t);
          },
          insert: function (t, e) {
            for (var n = 0, i = 0; i < e.length; ++i) n += e[i].height;
            this.insertInner(t - this.first, e, n);
          },
          remove: function (t, e) {
            this.removeInner(t - this.first, e);
          },
          getValue: function (t) {
            var e = Qt(this, this.first, this.first + this.size);
            return !1 === t ? e : e.join(t || this.lineSeparator());
          },
          setValue: or(function (t) {
            var e = ie(this.first, 0),
              n = this.first + this.size - 1;
            _o(
              this,
              {
                from: e,
                to: ie(n, qt(this, n).text.length),
                text: this.splitLines(t),
                origin: "setValue",
                full: !0,
              },
              !0,
            ),
              this.cm && Pi(this.cm, 0, 0),
              io(this, Er(e), K);
          }),
          replaceRange: function (t, e, n, i) {
            yo(this, t, (e = ce(this, e)), (n = n ? ce(this, n) : e), i);
          },
          getRange: function (t, e, n) {
            var i = Yt(this, ce(this, t), ce(this, e));
            return !1 === n
              ? i
              : "" === n
                ? i.join("")
                : i.join(n || this.lineSeparator());
          },
          getLine: function (t) {
            var e = this.getLineHandle(t);
            return e && e.text;
          },
          getLineHandle: function (t) {
            if (ee(this, t)) return qt(this, t);
          },
          getLineNumber: function (t) {
            return Jt(t);
          },
          getLineHandleVisualStart: function (t) {
            return "number" == typeof t && (t = qt(this, t)), He(t);
          },
          lineCount: function () {
            return this.size;
          },
          firstLine: function () {
            return this.first;
          },
          lastLine: function () {
            return this.first + this.size - 1;
          },
          clipPos: function (t) {
            return ce(this, t);
          },
          getCursor: function (t) {
            var e = this.sel.primary();
            return null == t || "head" == t
              ? e.head
              : "anchor" == t
                ? e.anchor
                : "end" == t || "to" == t || !1 === t
                  ? e.to()
                  : e.from();
          },
          listSelections: function () {
            return this.sel.ranges;
          },
          somethingSelected: function () {
            return this.sel.somethingSelected();
          },
          setCursor: or(function (t, e, n) {
            eo(
              this,
              ce(this, "number" == typeof t ? ie(t, e || 0) : t),
              null,
              n,
            );
          }),
          setSelection: or(function (t, e, n) {
            eo(this, ce(this, t), ce(this, e || t), n);
          }),
          extendSelection: or(function (t, e, n) {
            Zr(this, ce(this, t), e && ce(this, e), n);
          }),
          extendSelections: or(function (t, e) {
            Jr(this, he(this, t), e);
          }),
          extendSelectionsBy: or(function (t, e) {
            Jr(this, he(this, Z(this.sel.ranges, t)), e);
          }),
          setSelections: or(function (t, e, n) {
            if (t.length) {
              for (var i = [], r = 0; r < t.length; r++)
                i[r] = new Mr(
                  ce(this, t[r].anchor),
                  ce(this, t[r].head || t[r].anchor),
                );
              null == e && (e = Math.min(t.length - 1, this.sel.primIndex)),
                io(this, Or(this.cm, i, e), n);
            }
          }),
          addSelection: or(function (t, e, n) {
            var i = this.sel.ranges.slice(0);
            i.push(new Mr(ce(this, t), ce(this, e || t))),
              io(this, Or(this.cm, i, i.length - 1), n);
          }),
          getSelection: function (t) {
            for (var e, n = this.sel.ranges, i = 0; i < n.length; i++) {
              var r = Yt(this, n[i].from(), n[i].to());
              e = e ? e.concat(r) : r;
            }
            return !1 === t ? e : e.join(t || this.lineSeparator());
          },
          getSelections: function (t) {
            for (var e = [], n = this.sel.ranges, i = 0; i < n.length; i++) {
              var r = Yt(this, n[i].from(), n[i].to());
              !1 !== t && (r = r.join(t || this.lineSeparator())), (e[i] = r);
            }
            return e;
          },
          replaceSelection: function (t, e, n) {
            for (var i = [], r = 0; r < this.sel.ranges.length; r++) i[r] = t;
            this.replaceSelections(i, e, n || "+input");
          },
          replaceSelections: or(function (t, e, n) {
            for (var i = [], r = this.sel, o = 0; o < r.ranges.length; o++) {
              var s = r.ranges[o];
              i[o] = {
                from: s.from(),
                to: s.to(),
                text: this.splitLines(t[o]),
                origin: n,
              };
            }
            for (
              var a =
                  e &&
                  "end" != e &&
                  (function (t, e, n) {
                    for (
                      var i = [], r = ie(t.first, 0), o = r, s = 0;
                      s < e.length;
                      s++
                    ) {
                      var a = e[s],
                        u = Rr(a.from, r, o),
                        l = Rr(Lr(a), r, o);
                      if (((r = a.to), (o = l), "around" == n)) {
                        var c = t.sel.ranges[s],
                          h = re(c.head, c.anchor) < 0;
                        i[s] = new Mr(h ? l : u, h ? u : l);
                      } else i[s] = new Mr(u, u);
                    }
                    return new Sr(i, t.sel.primIndex);
                  })(this, i, e),
                u = i.length - 1;
              u >= 0;
              u--
            )
              _o(this, i[u]);
            a ? no(this, a) : this.cm && Di(this.cm);
          }),
          undo: or(function () {
            go(this, "undo");
          }),
          redo: or(function () {
            go(this, "redo");
          }),
          undoSelection: or(function () {
            go(this, "undo", !0);
          }),
          redoSelection: or(function () {
            go(this, "redo", !0);
          }),
          setExtending: function (t) {
            this.extend = t;
          },
          getExtending: function () {
            return this.extend;
          },
          historySize: function () {
            for (
              var t = this.history, e = 0, n = 0, i = 0;
              i < t.done.length;
              i++
            )
              t.done[i].ranges || ++e;
            for (var r = 0; r < t.undone.length; r++) t.undone[r].ranges || ++n;
            return { undo: e, redo: n };
          },
          clearHistory: function () {
            var t = this;
            (this.history = new Hr(this.history)),
              zr(
                this,
                function (e) {
                  return (e.history = t.history);
                },
                !0,
              );
          },
          markClean: function () {
            this.cleanGeneration = this.changeGeneration(!0);
          },
          changeGeneration: function (t) {
            return (
              t &&
                (this.history.lastOp =
                  this.history.lastSelOp =
                  this.history.lastOrigin =
                    null),
              this.history.generation
            );
          },
          isClean: function (t) {
            return this.history.generation == (t || this.cleanGeneration);
          },
          getHistory: function () {
            return {
              done: Yr(this.history.done),
              undone: Yr(this.history.undone),
            };
          },
          setHistory: function (t) {
            var e = (this.history = new Hr(this.history));
            (e.done = Yr(t.done.slice(0), null, !0)),
              (e.undone = Yr(t.undone.slice(0), null, !0));
          },
          setGutterMarker: or(function (t, e, n) {
            return ko(this, t, "gutter", function (t) {
              var i = t.gutterMarkers || (t.gutterMarkers = {});
              return (i[e] = n), !n && rt(i) && (t.gutterMarkers = null), !0;
            });
          }),
          clearGutter: or(function (t) {
            var e = this;
            this.iter(function (n) {
              n.gutterMarkers &&
                n.gutterMarkers[t] &&
                ko(e, n, "gutter", function () {
                  return (
                    (n.gutterMarkers[t] = null),
                    rt(n.gutterMarkers) && (n.gutterMarkers = null),
                    !0
                  );
                });
            });
          }),
          lineInfo: function (t) {
            var e;
            if ("number" == typeof t) {
              if (!ee(this, t)) return null;
              if (((e = t), !(t = qt(this, t)))) return null;
            } else if (null == (e = Jt(t))) return null;
            return {
              line: e,
              handle: t,
              text: t.text,
              gutterMarkers: t.gutterMarkers,
              textClass: t.textClass,
              bgClass: t.bgClass,
              wrapClass: t.wrapClass,
              widgets: t.widgets,
            };
          },
          addLineClass: or(function (t, e, n) {
            return ko(
              this,
              t,
              "gutter" == e ? "gutter" : "class",
              function (t) {
                var i =
                  "text" == e
                    ? "textClass"
                    : "background" == e
                      ? "bgClass"
                      : "gutter" == e
                        ? "gutterClass"
                        : "wrapClass";
                if (t[i]) {
                  if (T(n).test(t[i])) return !1;
                  t[i] += " " + n;
                } else t[i] = n;
                return !0;
              },
            );
          }),
          removeLineClass: or(function (t, e, n) {
            return ko(
              this,
              t,
              "gutter" == e ? "gutter" : "class",
              function (t) {
                var i =
                    "text" == e
                      ? "textClass"
                      : "background" == e
                        ? "bgClass"
                        : "gutter" == e
                          ? "gutterClass"
                          : "wrapClass",
                  r = t[i];
                if (!r) return !1;
                if (null == n) t[i] = null;
                else {
                  var o = r.match(T(n));
                  if (!o) return !1;
                  var s = o.index + o[0].length;
                  t[i] =
                    r.slice(0, o.index) +
                      (o.index && s != r.length ? " " : "") +
                      r.slice(s) || null;
                }
                return !0;
              },
            );
          }),
          addLineWidget: or(function (t, e, n) {
            return (function (t, e, n, i) {
              var r = new So(t, n, i),
                o = t.cm;
              return (
                o && r.noHScroll && (o.display.alignWidgets = !0),
                ko(t, e, "widget", function (e) {
                  var n = e.widgets || (e.widgets = []);
                  if (
                    (null == r.insertAt
                      ? n.push(r)
                      : n.splice(
                          Math.min(n.length, Math.max(0, r.insertAt)),
                          0,
                          r,
                        ),
                    (r.line = e),
                    o && !Ve(t, e))
                  ) {
                    var i = Ge(e) < t.scrollTop;
                    Zt(e, e.height + Cn(r)),
                      i && Ri(o, r.height),
                      (o.curOp.forceUpdate = !0);
                  }
                  return !0;
                }),
                o &&
                  hn(
                    o,
                    "lineWidgetAdded",
                    o,
                    r,
                    "number" == typeof e ? e : Jt(e),
                  ),
                r
              );
            })(this, t, e, n);
          }),
          removeLineWidget: function (t) {
            t.clear();
          },
          markText: function (t, e, n) {
            return Lo(
              this,
              ce(this, t),
              ce(this, e),
              n,
              (n && n.type) || "range",
            );
          },
          setBookmark: function (t, e) {
            var n = {
              replacedWith: e && (null == e.nodeType ? e.widget : e),
              insertLeft: e && e.insertLeft,
              clearWhenEmpty: !1,
              shared: e && e.shared,
              handleMouseEvents: e && e.handleMouseEvents,
            };
            return Lo(this, (t = ce(this, t)), t, n, "bookmark");
          },
          findMarksAt: function (t) {
            var e = [],
              n = qt(this, (t = ce(this, t)).line).markedSpans;
            if (n)
              for (var i = 0; i < n.length; ++i) {
                var r = n[i];
                (null == r.from || r.from <= t.ch) &&
                  (null == r.to || r.to >= t.ch) &&
                  e.push(r.marker.parent || r.marker);
              }
            return e;
          },
          findMarks: function (t, e, n) {
            (t = ce(this, t)), (e = ce(this, e));
            var i = [],
              r = t.line;
            return (
              this.iter(t.line, e.line + 1, function (o) {
                var s = o.markedSpans;
                if (s)
                  for (var a = 0; a < s.length; a++) {
                    var u = s[a];
                    (null != u.to && r == t.line && t.ch >= u.to) ||
                      (null == u.from && r != t.line) ||
                      (null != u.from && r == e.line && u.from >= e.ch) ||
                      (n && !n(u.marker)) ||
                      i.push(u.marker.parent || u.marker);
                  }
                ++r;
              }),
              i
            );
          },
          getAllMarks: function () {
            var t = [];
            return (
              this.iter(function (e) {
                var n = e.markedSpans;
                if (n)
                  for (var i = 0; i < n.length; ++i)
                    null != n[i].from && t.push(n[i].marker);
              }),
              t
            );
          },
          posFromIndex: function (t) {
            var e,
              n = this.first,
              i = this.lineSeparator().length;
            return (
              this.iter(function (r) {
                var o = r.text.length + i;
                if (o > t) return (e = t), !0;
                (t -= o), ++n;
              }),
              ce(this, ie(n, e))
            );
          },
          indexFromPos: function (t) {
            var e = (t = ce(this, t)).ch;
            if (t.line < this.first || t.ch < 0) return 0;
            var n = this.lineSeparator().length;
            return (
              this.iter(this.first, t.line, function (t) {
                e += t.text.length + n;
              }),
              e
            );
          },
          copy: function (t) {
            var e = new Po(
              Qt(this, this.first, this.first + this.size),
              this.modeOption,
              this.first,
              this.lineSep,
              this.direction,
            );
            return (
              (e.scrollTop = this.scrollTop),
              (e.scrollLeft = this.scrollLeft),
              (e.sel = this.sel),
              (e.extend = !1),
              t &&
                ((e.history.undoDepth = this.history.undoDepth),
                e.setHistory(this.getHistory())),
              e
            );
          },
          linkedDoc: function (t) {
            t || (t = {});
            var e = this.first,
              n = this.first + this.size;
            null != t.from && t.from > e && (e = t.from),
              null != t.to && t.to < n && (n = t.to);
            var i = new Po(
              Qt(this, e, n),
              t.mode || this.modeOption,
              e,
              this.lineSep,
              this.direction,
            );
            return (
              t.sharedHist && (i.history = this.history),
              (this.linked || (this.linked = [])).push({
                doc: i,
                sharedHist: t.sharedHist,
              }),
              (i.linked = [
                { doc: this, isParent: !0, sharedHist: t.sharedHist },
              ]),
              (function (t, e) {
                for (var n = 0; n < e.length; n++) {
                  var i = e[n],
                    r = i.find(),
                    o = t.clipPos(r.from),
                    s = t.clipPos(r.to);
                  if (re(o, s)) {
                    var a = Lo(t, o, s, i.primary, i.primary.type);
                    i.markers.push(a), (a.parent = i);
                  }
                }
              })(i, No(this)),
              i
            );
          },
          unlinkDoc: function (t) {
            if ((t instanceof As && (t = t.doc), this.linked))
              for (var e = 0; e < this.linked.length; ++e)
                if (this.linked[e].doc == t) {
                  this.linked.splice(e, 1), t.unlinkDoc(this), Ro(No(this));
                  break;
                }
            if (t.history == this.history) {
              var n = [t.id];
              zr(
                t,
                function (t) {
                  return n.push(t.id);
                },
                !0,
              ),
                (t.history = new Hr(null)),
                (t.history.done = Yr(this.history.done, n)),
                (t.history.undone = Yr(this.history.undone, n));
            }
          },
          iterLinkedDocs: function (t) {
            zr(this, t);
          },
          getMode: function () {
            return this.mode;
          },
          getEditor: function () {
            return this.cm;
          },
          splitLines: function (t) {
            return this.lineSep ? t.split(this.lineSep) : Dt(t);
          },
          lineSeparator: function () {
            return this.lineSep || "\n";
          },
          setDirection: or(function (t) {
            var e;
            "rtl" != t && (t = "ltr"),
              t != this.direction &&
                ((this.direction = t),
                this.iter(function (t) {
                  return (t.order = null);
                }),
                this.cm &&
                  nr((e = this.cm), function () {
                    Fr(e), _i(e);
                  }));
          }),
        })),
          (Po.prototype.eachLine = Po.prototype.iter);
        var Wo = 0;
        function Io(t) {
          var e = this;
          if ((zo(e), !vt(e, t) && !Tn(e.display, t))) {
            xt(t), s && (Wo = +new Date());
            var n = pi(e, t, !0),
              i = t.dataTransfer.files;
            if (n && !e.isReadOnly())
              if (i && i.length && window.FileReader && window.File)
                for (
                  var r = i.length,
                    o = Array(r),
                    a = 0,
                    u = function () {
                      ++a == r &&
                        ir(e, function () {
                          var t = {
                            from: (n = ce(e.doc, n)),
                            to: n,
                            text: e.doc.splitLines(
                              o
                                .filter(function (t) {
                                  return null != t;
                                })
                                .join(e.doc.lineSeparator()),
                            ),
                            origin: "paste",
                          };
                          _o(e.doc, t),
                            no(e.doc, Er(ce(e.doc, n), ce(e.doc, Lr(t))));
                        })();
                    },
                    l = function (t, n) {
                      if (
                        e.options.allowDropFileTypes &&
                        -1 == U(e.options.allowDropFileTypes, t.type)
                      )
                        u();
                      else {
                        var i = new FileReader();
                        (i.onerror = function () {
                          return u();
                        }),
                          (i.onload = function () {
                            var t = i.result;
                            /[\x00-\x08\x0e-\x1f]{2}/.test(t) || (o[n] = t),
                              u();
                          }),
                          i.readAsText(t);
                      }
                    },
                    c = 0;
                  c < i.length;
                  c++
                )
                  l(i[c], c);
              else {
                if (e.state.draggingText && e.doc.sel.contains(n) > -1)
                  return (
                    e.state.draggingText(t),
                    void setTimeout(function () {
                      return e.display.input.focus();
                    }, 20)
                  );
                try {
                  var h = t.dataTransfer.getData("Text");
                  if (h) {
                    var p;
                    if (
                      (e.state.draggingText &&
                        !e.state.draggingText.copy &&
                        (p = e.listSelections()),
                      ro(e.doc, Er(n, n)),
                      p)
                    )
                      for (var d = 0; d < p.length; ++d)
                        yo(e.doc, "", p[d].anchor, p[d].head, "drag");
                    e.replaceSelection(h, "around", "paste"),
                      e.display.input.focus();
                  }
                } catch (t) {}
              }
          }
        }
        function zo(t) {
          t.display.dragCursor &&
            (t.display.lineSpace.removeChild(t.display.dragCursor),
            (t.display.dragCursor = null));
        }
        function jo(t) {
          if (document.getElementsByClassName) {
            for (
              var e = document.getElementsByClassName("CodeMirror"),
                n = [],
                i = 0;
              i < e.length;
              i++
            ) {
              var r = e[i].CodeMirror;
              r && n.push(r);
            }
            n.length &&
              n[0].operation(function () {
                for (var e = 0; e < n.length; e++) t(n[e]);
              });
          }
        }
        var Fo = !1;
        function Ho() {
          var t;
          Fo ||
            (_t(window, "resize", function () {
              null == t &&
                (t = setTimeout(function () {
                  (t = null), jo(Bo);
                }, 100));
            }),
            _t(window, "blur", function () {
              return jo(Oi);
            }),
            (Fo = !0));
        }
        function Bo(t) {
          var e = t.display;
          (e.cachedCharWidth = e.cachedTextHeight = e.cachedPaddingH = null),
            (e.scrollbarsClipped = !1),
            t.setSize();
        }
        for (
          var Uo = {
              3: "Pause",
              8: "Backspace",
              9: "Tab",
              13: "Enter",
              16: "Shift",
              17: "Ctrl",
              18: "Alt",
              19: "Pause",
              20: "CapsLock",
              27: "Esc",
              32: "Space",
              33: "PageUp",
              34: "PageDown",
              35: "End",
              36: "Home",
              37: "Left",
              38: "Up",
              39: "Right",
              40: "Down",
              44: "PrintScrn",
              45: "Insert",
              46: "Delete",
              59: ";",
              61: "=",
              91: "Mod",
              92: "Mod",
              93: "Mod",
              106: "*",
              107: "=",
              109: "-",
              110: ".",
              111: "/",
              145: "ScrollLock",
              173: "-",
              186: ";",
              187: "=",
              188: ",",
              189: "-",
              190: ".",
              191: "/",
              192: "`",
              219: "[",
              220: "\\",
              221: "]",
              222: "'",
              224: "Mod",
              63232: "Up",
              63233: "Down",
              63234: "Left",
              63235: "Right",
              63272: "Delete",
              63273: "Home",
              63275: "End",
              63276: "PageUp",
              63277: "PageDown",
              63302: "Insert",
            },
            Vo = 0;
          Vo < 10;
          Vo++
        )
          Uo[Vo + 48] = Uo[Vo + 96] = String(Vo);
        for (var Ko = 65; Ko <= 90; Ko++) Uo[Ko] = String.fromCharCode(Ko);
        for (var Go = 1; Go <= 12; Go++)
          Uo[Go + 111] = Uo[Go + 63235] = "F" + Go;
        var Xo = {};
        function $o(t) {
          var e,
            n,
            i,
            r,
            o = t.split(/-(?!$)/);
          t = o[o.length - 1];
          for (var s = 0; s < o.length - 1; s++) {
            var a = o[s];
            if (/^(cmd|meta|m)$/i.test(a)) r = !0;
            else if (/^a(lt)?$/i.test(a)) e = !0;
            else if (/^(c|ctrl|control)$/i.test(a)) n = !0;
            else {
              if (!/^s(hift)?$/i.test(a))
                throw new Error("Unrecognized modifier name: " + a);
              i = !0;
            }
          }
          return (
            e && (t = "Alt-" + t),
            n && (t = "Ctrl-" + t),
            r && (t = "Cmd-" + t),
            i && (t = "Shift-" + t),
            t
          );
        }
        function qo(t) {
          var e = {};
          for (var n in t)
            if (t.hasOwnProperty(n)) {
              var i = t[n];
              if (/^(name|fallthrough|(de|at)tach)$/.test(n)) continue;
              if ("..." == i) {
                delete t[n];
                continue;
              }
              for (var r = Z(n.split(" "), $o), o = 0; o < r.length; o++) {
                var s = void 0,
                  a = void 0;
                o == r.length - 1
                  ? ((a = r.join(" ")), (s = i))
                  : ((a = r.slice(0, o + 1).join(" ")), (s = "..."));
                var u = e[a];
                if (u) {
                  if (u != s) throw new Error("Inconsistent bindings for " + a);
                } else e[a] = s;
              }
              delete t[n];
            }
          for (var l in e) t[l] = e[l];
          return t;
        }
        function Yo(t, e, n, i) {
          var r = (e = ts(e)).call ? e.call(t, i) : e[t];
          if (!1 === r) return "nothing";
          if ("..." === r) return "multi";
          if (null != r && n(r)) return "handled";
          if (e.fallthrough) {
            if (
              "[object Array]" != Object.prototype.toString.call(e.fallthrough)
            )
              return Yo(t, e.fallthrough, n, i);
            for (var o = 0; o < e.fallthrough.length; o++) {
              var s = Yo(t, e.fallthrough[o], n, i);
              if (s) return s;
            }
          }
        }
        function Qo(t) {
          var e = "string" == typeof t ? t : Uo[t.keyCode];
          return "Ctrl" == e || "Alt" == e || "Shift" == e || "Mod" == e;
        }
        function Zo(t, e, n) {
          var i = t;
          return (
            e.altKey && "Alt" != i && (t = "Alt-" + t),
            (k ? e.metaKey : e.ctrlKey) && "Ctrl" != i && (t = "Ctrl-" + t),
            (k ? e.ctrlKey : e.metaKey) && "Mod" != i && (t = "Cmd-" + t),
            !n && e.shiftKey && "Shift" != i && (t = "Shift-" + t),
            t
          );
        }
        function Jo(t, e) {
          if (p && 34 == t.keyCode && t.char) return !1;
          var n = Uo[t.keyCode];
          return (
            null != n &&
            !t.altGraphKey &&
            (3 == t.keyCode && t.code && (n = t.code), Zo(n, t, e))
          );
        }
        function ts(t) {
          return "string" == typeof t ? Xo[t] : t;
        }
        function es(t, e) {
          for (var n = t.doc.sel.ranges, i = [], r = 0; r < n.length; r++) {
            for (var o = e(n[r]); i.length && re(o.from, Q(i).to) <= 0; ) {
              var s = i.pop();
              if (re(s.from, o.from) < 0) {
                o.from = s.from;
                break;
              }
            }
            i.push(o);
          }
          nr(t, function () {
            for (var e = i.length - 1; e >= 0; e--)
              yo(t.doc, "", i[e].from, i[e].to, "+delete");
            Di(t);
          });
        }
        function ns(t, e, n) {
          var i = at(t.text, e + n, n);
          return i < 0 || i > t.text.length ? null : i;
        }
        function is(t, e, n) {
          var i = ns(t, e.ch, n);
          return null == i
            ? null
            : new ie(e.line, i, n < 0 ? "after" : "before");
        }
        function rs(t, e, n, i, r) {
          if (t) {
            "rtl" == e.doc.direction && (r = -r);
            var o = pt(n, e.doc.direction);
            if (o) {
              var s,
                a = r < 0 ? Q(o) : o[0],
                u = r < 0 == (1 == a.level) ? "after" : "before";
              if (a.level > 0 || "rtl" == e.doc.direction) {
                var l = Pn(e, n);
                s = r < 0 ? n.text.length - 1 : 0;
                var c = Wn(e, l, s).top;
                (s = ut(
                  function (t) {
                    return Wn(e, l, t).top == c;
                  },
                  r < 0 == (1 == a.level) ? a.from : a.to - 1,
                  s,
                )),
                  "before" == u && (s = ns(n, s, 1));
              } else s = r < 0 ? a.to : a.from;
              return new ie(i, s, u);
            }
          }
          return new ie(
            i,
            r < 0 ? n.text.length : 0,
            r < 0 ? "before" : "after",
          );
        }
        (Xo.basic = {
          Left: "goCharLeft",
          Right: "goCharRight",
          Up: "goLineUp",
          Down: "goLineDown",
          End: "goLineEnd",
          Home: "goLineStartSmart",
          PageUp: "goPageUp",
          PageDown: "goPageDown",
          Delete: "delCharAfter",
          Backspace: "delCharBefore",
          "Shift-Backspace": "delCharBefore",
          Tab: "defaultTab",
          "Shift-Tab": "indentAuto",
          Enter: "newlineAndIndent",
          Insert: "toggleOverwrite",
          Esc: "singleSelection",
        }),
          (Xo.pcDefault = {
            "Ctrl-A": "selectAll",
            "Ctrl-D": "deleteLine",
            "Ctrl-Z": "undo",
            "Shift-Ctrl-Z": "redo",
            "Ctrl-Y": "redo",
            "Ctrl-Home": "goDocStart",
            "Ctrl-End": "goDocEnd",
            "Ctrl-Up": "goLineUp",
            "Ctrl-Down": "goLineDown",
            "Ctrl-Left": "goGroupLeft",
            "Ctrl-Right": "goGroupRight",
            "Alt-Left": "goLineStart",
            "Alt-Right": "goLineEnd",
            "Ctrl-Backspace": "delGroupBefore",
            "Ctrl-Delete": "delGroupAfter",
            "Ctrl-S": "save",
            "Ctrl-F": "find",
            "Ctrl-G": "findNext",
            "Shift-Ctrl-G": "findPrev",
            "Shift-Ctrl-F": "replace",
            "Shift-Ctrl-R": "replaceAll",
            "Ctrl-[": "indentLess",
            "Ctrl-]": "indentMore",
            "Ctrl-U": "undoSelection",
            "Shift-Ctrl-U": "redoSelection",
            "Alt-U": "redoSelection",
            fallthrough: "basic",
          }),
          (Xo.emacsy = {
            "Ctrl-F": "goCharRight",
            "Ctrl-B": "goCharLeft",
            "Ctrl-P": "goLineUp",
            "Ctrl-N": "goLineDown",
            "Ctrl-A": "goLineStart",
            "Ctrl-E": "goLineEnd",
            "Ctrl-V": "goPageDown",
            "Shift-Ctrl-V": "goPageUp",
            "Ctrl-D": "delCharAfter",
            "Ctrl-H": "delCharBefore",
            "Alt-Backspace": "delWordBefore",
            "Ctrl-K": "killLine",
            "Ctrl-T": "transposeChars",
            "Ctrl-O": "openLine",
          }),
          (Xo.macDefault = {
            "Cmd-A": "selectAll",
            "Cmd-D": "deleteLine",
            "Cmd-Z": "undo",
            "Shift-Cmd-Z": "redo",
            "Cmd-Y": "redo",
            "Cmd-Home": "goDocStart",
            "Cmd-Up": "goDocStart",
            "Cmd-End": "goDocEnd",
            "Cmd-Down": "goDocEnd",
            "Alt-Left": "goGroupLeft",
            "Alt-Right": "goGroupRight",
            "Cmd-Left": "goLineLeft",
            "Cmd-Right": "goLineRight",
            "Alt-Backspace": "delGroupBefore",
            "Ctrl-Alt-Backspace": "delGroupAfter",
            "Alt-Delete": "delGroupAfter",
            "Cmd-S": "save",
            "Cmd-F": "find",
            "Cmd-G": "findNext",
            "Shift-Cmd-G": "findPrev",
            "Cmd-Alt-F": "replace",
            "Shift-Cmd-Alt-F": "replaceAll",
            "Cmd-[": "indentLess",
            "Cmd-]": "indentMore",
            "Cmd-Backspace": "delWrappedLineLeft",
            "Cmd-Delete": "delWrappedLineRight",
            "Cmd-U": "undoSelection",
            "Shift-Cmd-U": "redoSelection",
            "Ctrl-Up": "goDocStart",
            "Ctrl-Down": "goDocEnd",
            fallthrough: ["basic", "emacsy"],
          }),
          (Xo.default = y ? Xo.macDefault : Xo.pcDefault);
        var os = {
          selectAll: ho,
          singleSelection: function (t) {
            return t.setSelection(
              t.getCursor("anchor"),
              t.getCursor("head"),
              K,
            );
          },
          killLine: function (t) {
            return es(t, function (e) {
              if (e.empty()) {
                var n = qt(t.doc, e.head.line).text.length;
                return e.head.ch == n && e.head.line < t.lastLine()
                  ? { from: e.head, to: ie(e.head.line + 1, 0) }
                  : { from: e.head, to: ie(e.head.line, n) };
              }
              return { from: e.from(), to: e.to() };
            });
          },
          deleteLine: function (t) {
            return es(t, function (e) {
              return {
                from: ie(e.from().line, 0),
                to: ce(t.doc, ie(e.to().line + 1, 0)),
              };
            });
          },
          delLineLeft: function (t) {
            return es(t, function (t) {
              return { from: ie(t.from().line, 0), to: t.from() };
            });
          },
          delWrappedLineLeft: function (t) {
            return es(t, function (e) {
              var n = t.charCoords(e.head, "div").top + 5;
              return {
                from: t.coordsChar({ left: 0, top: n }, "div"),
                to: e.from(),
              };
            });
          },
          delWrappedLineRight: function (t) {
            return es(t, function (e) {
              var n = t.charCoords(e.head, "div").top + 5,
                i = t.coordsChar(
                  { left: t.display.lineDiv.offsetWidth + 100, top: n },
                  "div",
                );
              return { from: e.from(), to: i };
            });
          },
          undo: function (t) {
            return t.undo();
          },
          redo: function (t) {
            return t.redo();
          },
          undoSelection: function (t) {
            return t.undoSelection();
          },
          redoSelection: function (t) {
            return t.redoSelection();
          },
          goDocStart: function (t) {
            return t.extendSelection(ie(t.firstLine(), 0));
          },
          goDocEnd: function (t) {
            return t.extendSelection(ie(t.lastLine()));
          },
          goLineStart: function (t) {
            return t.extendSelectionsBy(
              function (e) {
                return ss(t, e.head.line);
              },
              { origin: "+move", bias: 1 },
            );
          },
          goLineStartSmart: function (t) {
            return t.extendSelectionsBy(
              function (e) {
                return as(t, e.head);
              },
              { origin: "+move", bias: 1 },
            );
          },
          goLineEnd: function (t) {
            return t.extendSelectionsBy(
              function (e) {
                return (function (t, e) {
                  var n = qt(t.doc, e),
                    i = (function (t) {
                      for (var e; (e = ze(t)); ) t = e.find(1, !0).line;
                      return t;
                    })(n);
                  return i != n && (e = Jt(i)), rs(!0, t, n, e, -1);
                })(t, e.head.line);
              },
              { origin: "+move", bias: -1 },
            );
          },
          goLineRight: function (t) {
            return t.extendSelectionsBy(function (e) {
              var n = t.cursorCoords(e.head, "div").top + 5;
              return t.coordsChar(
                { left: t.display.lineDiv.offsetWidth + 100, top: n },
                "div",
              );
            }, X);
          },
          goLineLeft: function (t) {
            return t.extendSelectionsBy(function (e) {
              var n = t.cursorCoords(e.head, "div").top + 5;
              return t.coordsChar({ left: 0, top: n }, "div");
            }, X);
          },
          goLineLeftSmart: function (t) {
            return t.extendSelectionsBy(function (e) {
              var n = t.cursorCoords(e.head, "div").top + 5,
                i = t.coordsChar({ left: 0, top: n }, "div");
              return i.ch < t.getLine(i.line).search(/\S/) ? as(t, e.head) : i;
            }, X);
          },
          goLineUp: function (t) {
            return t.moveV(-1, "line");
          },
          goLineDown: function (t) {
            return t.moveV(1, "line");
          },
          goPageUp: function (t) {
            return t.moveV(-1, "page");
          },
          goPageDown: function (t) {
            return t.moveV(1, "page");
          },
          goCharLeft: function (t) {
            return t.moveH(-1, "char");
          },
          goCharRight: function (t) {
            return t.moveH(1, "char");
          },
          goColumnLeft: function (t) {
            return t.moveH(-1, "column");
          },
          goColumnRight: function (t) {
            return t.moveH(1, "column");
          },
          goWordLeft: function (t) {
            return t.moveH(-1, "word");
          },
          goGroupRight: function (t) {
            return t.moveH(1, "group");
          },
          goGroupLeft: function (t) {
            return t.moveH(-1, "group");
          },
          goWordRight: function (t) {
            return t.moveH(1, "word");
          },
          delCharBefore: function (t) {
            return t.deleteH(-1, "codepoint");
          },
          delCharAfter: function (t) {
            return t.deleteH(1, "char");
          },
          delWordBefore: function (t) {
            return t.deleteH(-1, "word");
          },
          delWordAfter: function (t) {
            return t.deleteH(1, "word");
          },
          delGroupBefore: function (t) {
            return t.deleteH(-1, "group");
          },
          delGroupAfter: function (t) {
            return t.deleteH(1, "group");
          },
          indentAuto: function (t) {
            return t.indentSelection("smart");
          },
          indentMore: function (t) {
            return t.indentSelection("add");
          },
          indentLess: function (t) {
            return t.indentSelection("subtract");
          },
          insertTab: function (t) {
            return t.replaceSelection("\t");
          },
          insertSoftTab: function (t) {
            for (
              var e = [], n = t.listSelections(), i = t.options.tabSize, r = 0;
              r < n.length;
              r++
            ) {
              var o = n[r].from(),
                s = H(t.getLine(o.line), o.ch, i);
              e.push(Y(i - (s % i)));
            }
            t.replaceSelections(e);
          },
          defaultTab: function (t) {
            t.somethingSelected()
              ? t.indentSelection("add")
              : t.execCommand("insertTab");
          },
          transposeChars: function (t) {
            return nr(t, function () {
              for (var e = t.listSelections(), n = [], i = 0; i < e.length; i++)
                if (e[i].empty()) {
                  var r = e[i].head,
                    o = qt(t.doc, r.line).text;
                  if (o)
                    if (
                      (r.ch == o.length && (r = new ie(r.line, r.ch - 1)),
                      r.ch > 0)
                    )
                      (r = new ie(r.line, r.ch + 1)),
                        t.replaceRange(
                          o.charAt(r.ch - 1) + o.charAt(r.ch - 2),
                          ie(r.line, r.ch - 2),
                          r,
                          "+transpose",
                        );
                    else if (r.line > t.doc.first) {
                      var s = qt(t.doc, r.line - 1).text;
                      s &&
                        ((r = new ie(r.line, 1)),
                        t.replaceRange(
                          o.charAt(0) +
                            t.doc.lineSeparator() +
                            s.charAt(s.length - 1),
                          ie(r.line - 1, s.length - 1),
                          r,
                          "+transpose",
                        ));
                    }
                  n.push(new Mr(r, r));
                }
              t.setSelections(n);
            });
          },
          newlineAndIndent: function (t) {
            return nr(t, function () {
              for (var e = t.listSelections(), n = e.length - 1; n >= 0; n--)
                t.replaceRange(
                  t.doc.lineSeparator(),
                  e[n].anchor,
                  e[n].head,
                  "+input",
                );
              e = t.listSelections();
              for (var i = 0; i < e.length; i++)
                t.indentLine(e[i].from().line, null, !0);
              Di(t);
            });
          },
          openLine: function (t) {
            return t.replaceSelection("\n", "start");
          },
          toggleOverwrite: function (t) {
            return t.toggleOverwrite();
          },
        };
        function ss(t, e) {
          var n = qt(t.doc, e),
            i = He(n);
          return i != n && (e = Jt(i)), rs(!0, t, i, e, 1);
        }
        function as(t, e) {
          var n = ss(t, e.line),
            i = qt(t.doc, n.line),
            r = pt(i, t.doc.direction);
          if (!r || 0 == r[0].level) {
            var o = Math.max(n.ch, i.text.search(/\S/)),
              s = e.line == n.line && e.ch <= o && e.ch;
            return ie(n.line, s ? 0 : o, n.sticky);
          }
          return n;
        }
        function us(t, e, n) {
          if ("string" == typeof e && !(e = os[e])) return !1;
          t.display.input.ensurePolled();
          var i = t.display.shift,
            r = !1;
          try {
            t.isReadOnly() && (t.state.suppressEdits = !0),
              n && (t.display.shift = !1),
              (r = e(t) != V);
          } finally {
            (t.display.shift = i), (t.state.suppressEdits = !1);
          }
          return r;
        }
        var ls = new B();
        function cs(t, e, n, i) {
          var r = t.state.keySeq;
          if (r) {
            if (Qo(e)) return "handled";
            if (
              (/\'$/.test(e)
                ? (t.state.keySeq = null)
                : ls.set(50, function () {
                    t.state.keySeq == r &&
                      ((t.state.keySeq = null), t.display.input.reset());
                  }),
              hs(t, r + " " + e, n, i))
            )
              return !0;
          }
          return hs(t, e, n, i);
        }
        function hs(t, e, n, i) {
          var r = (function (t, e, n) {
            for (var i = 0; i < t.state.keyMaps.length; i++) {
              var r = Yo(e, t.state.keyMaps[i], n, t);
              if (r) return r;
            }
            return (
              (t.options.extraKeys && Yo(e, t.options.extraKeys, n, t)) ||
              Yo(e, t.options.keyMap, n, t)
            );
          })(t, e, i);
          return (
            "multi" == r && (t.state.keySeq = e),
            "handled" == r && hn(t, "keyHandled", t, e, n),
            ("handled" != r && "multi" != r) || (xt(n), Ci(t)),
            !!r
          );
        }
        function ps(t, e) {
          var n = Jo(e, !0);
          return (
            !!n &&
            (e.shiftKey && !t.state.keySeq
              ? cs(t, "Shift-" + n, e, function (e) {
                  return us(t, e, !0);
                }) ||
                cs(t, n, e, function (e) {
                  if ("string" == typeof e ? /^go[A-Z]/.test(e) : e.motion)
                    return us(t, e);
                })
              : cs(t, n, e, function (e) {
                  return us(t, e);
                }))
          );
        }
        var ds = null;
        function _s(t) {
          var e = this;
          if (
            !(
              (t.target && t.target != e.display.input.getField()) ||
              ((e.curOp.focus = R(I(e))), vt(e, t))
            )
          ) {
            s && a < 11 && 27 == t.keyCode && (t.returnValue = !1);
            var i = t.keyCode;
            e.display.shift = 16 == i || t.shiftKey;
            var r = ps(e, t);
            p &&
              ((ds = r ? i : null),
              r ||
                88 != i ||
                Wt ||
                !(y ? t.metaKey : t.ctrlKey) ||
                e.replaceSelection("", null, "cut")),
              n &&
                !y &&
                !r &&
                46 == i &&
                t.shiftKey &&
                !t.ctrlKey &&
                document.execCommand &&
                document.execCommand("cut"),
              18 != i ||
                /\bCodeMirror-crosshair\b/.test(e.display.lineDiv.className) ||
                (function (t) {
                  var e = t.display.lineDiv;
                  function n(t) {
                    (18 != t.keyCode && t.altKey) ||
                      (M(e, "CodeMirror-crosshair"),
                      gt(document, "keyup", n),
                      gt(document, "mouseover", n));
                  }
                  D(e, "CodeMirror-crosshair"),
                    _t(document, "keyup", n),
                    _t(document, "mouseover", n);
                })(e);
          }
        }
        function fs(t) {
          16 == t.keyCode && (this.doc.sel.shift = !1), vt(this, t);
        }
        function gs(t) {
          var e = this;
          if (
            !(
              (t.target && t.target != e.display.input.getField()) ||
              Tn(e.display, t) ||
              vt(e, t) ||
              (t.ctrlKey && !t.altKey) ||
              (y && t.metaKey)
            )
          ) {
            var n = t.keyCode,
              i = t.charCode;
            if (p && n == ds) return (ds = null), void xt(t);
            if (!p || (t.which && !(t.which < 10)) || !ps(e, t)) {
              var r = String.fromCharCode(null == i ? n : i);
              "\b" != r &&
                ((function (t, e, n) {
                  return cs(t, "'" + n + "'", e, function (e) {
                    return us(t, e, !0);
                  });
                })(e, t, r) ||
                  e.display.input.onKeyPress(t));
            }
          }
        }
        var ms,
          vs,
          ys = function (t, e, n) {
            (this.time = t), (this.pos = e), (this.button = n);
          };
        function bs(t) {
          var e = this,
            n = e.display;
          if (!(vt(e, t) || (n.activeTouch && n.input.supportsTouch())))
            if ((n.input.ensurePolled(), (n.shift = t.shiftKey), Tn(n, t)))
              u ||
                ((n.scroller.draggable = !1),
                setTimeout(function () {
                  return (n.scroller.draggable = !0);
                }, 100));
            else if (!ks(e, t)) {
              var i = pi(e, t),
                r = Mt(t),
                o = i
                  ? (function (t, e) {
                      var n = +new Date();
                      return vs && vs.compare(n, t, e)
                        ? ((ms = vs = null), "triple")
                        : ms && ms.compare(n, t, e)
                          ? ((vs = new ys(n, t, e)), (ms = null), "double")
                          : ((ms = new ys(n, t, e)), (vs = null), "single");
                    })(i, r)
                  : "single";
              z(e).focus(),
                1 == r && e.state.selectingText && e.state.selectingText(t),
                (i &&
                  (function (t, e, n, i, r) {
                    var o = "Click";
                    return (
                      "double" == i
                        ? (o = "Double" + o)
                        : "triple" == i && (o = "Triple" + o),
                      cs(
                        t,
                        Zo(
                          (o =
                            (1 == e ? "Left" : 2 == e ? "Middle" : "Right") +
                            o),
                          r,
                        ),
                        r,
                        function (e) {
                          if (("string" == typeof e && (e = os[e]), !e))
                            return !1;
                          var i = !1;
                          try {
                            t.isReadOnly() && (t.state.suppressEdits = !0),
                              (i = e(t, n) != V);
                          } finally {
                            t.state.suppressEdits = !1;
                          }
                          return i;
                        },
                      )
                    );
                  })(e, r, i, o, t)) ||
                  (1 == r
                    ? i
                      ? (function (t, e, n, i) {
                          s
                            ? setTimeout(j(Ti, t), 0)
                            : (t.curOp.focus = R(I(t)));
                          var r,
                            o = (function (t, e, n) {
                              var i = t.getOption("configureMouse"),
                                r = i ? i(t, e, n) : {};
                              if (null == r.unit) {
                                var o = b ? n.shiftKey && n.metaKey : n.altKey;
                                r.unit = o
                                  ? "rectangle"
                                  : "single" == e
                                    ? "char"
                                    : "double" == e
                                      ? "word"
                                      : "line";
                              }
                              return (
                                (null == r.extend || t.doc.extend) &&
                                  (r.extend = t.doc.extend || n.shiftKey),
                                null == r.addNew &&
                                  (r.addNew = y ? n.metaKey : n.ctrlKey),
                                null == r.moveOnDrag &&
                                  (r.moveOnDrag = !(y ? n.altKey : n.ctrlKey)),
                                r
                              );
                            })(t, n, i),
                            l = t.doc.sel;
                          t.options.dragDrop &&
                          Lt &&
                          !t.isReadOnly() &&
                          "single" == n &&
                          (r = l.contains(e)) > -1 &&
                          (re((r = l.ranges[r]).from(), e) < 0 || e.xRel > 0) &&
                          (re(r.to(), e) > 0 || e.xRel < 0)
                            ? (function (t, e, n, i) {
                                var r = t.display,
                                  o = !1,
                                  l = ir(t, function (e) {
                                    u && (r.scroller.draggable = !1),
                                      (t.state.draggingText = !1),
                                      t.state.delayingBlurEvent &&
                                        (t.hasFocus()
                                          ? (t.state.delayingBlurEvent = !1)
                                          : Si(t)),
                                      gt(r.wrapper.ownerDocument, "mouseup", l),
                                      gt(
                                        r.wrapper.ownerDocument,
                                        "mousemove",
                                        c,
                                      ),
                                      gt(r.scroller, "dragstart", h),
                                      gt(r.scroller, "drop", l),
                                      o ||
                                        (xt(e),
                                        i.addNew ||
                                          Zr(t.doc, n, null, null, i.extend),
                                        (u && !d) || (s && 9 == a)
                                          ? setTimeout(function () {
                                              r.wrapper.ownerDocument.body.focus(
                                                { preventScroll: !0 },
                                              ),
                                                r.input.focus();
                                            }, 20)
                                          : r.input.focus());
                                  }),
                                  c = function (t) {
                                    o =
                                      o ||
                                      Math.abs(e.clientX - t.clientX) +
                                        Math.abs(e.clientY - t.clientY) >=
                                        10;
                                  },
                                  h = function () {
                                    return (o = !0);
                                  };
                                u && (r.scroller.draggable = !0),
                                  (t.state.draggingText = l),
                                  (l.copy = !i.moveOnDrag),
                                  _t(r.wrapper.ownerDocument, "mouseup", l),
                                  _t(r.wrapper.ownerDocument, "mousemove", c),
                                  _t(r.scroller, "dragstart", h),
                                  _t(r.scroller, "drop", l),
                                  (t.state.delayingBlurEvent = !0),
                                  setTimeout(function () {
                                    return r.input.focus();
                                  }, 20),
                                  r.scroller.dragDrop && r.scroller.dragDrop();
                              })(t, i, e, o)
                            : (function (t, e, n, i) {
                                s && Si(t);
                                var r = t.display,
                                  o = t.doc;
                                xt(e);
                                var a,
                                  u,
                                  l = o.sel,
                                  c = l.ranges;
                                if (
                                  (i.addNew && !i.extend
                                    ? ((u = o.sel.contains(n)),
                                      (a = u > -1 ? c[u] : new Mr(n, n)))
                                    : ((a = o.sel.primary()),
                                      (u = o.sel.primIndex)),
                                  "rectangle" == i.unit)
                                )
                                  i.addNew || (a = new Mr(n, n)),
                                    (n = pi(t, e, !0, !0)),
                                    (u = -1);
                                else {
                                  var h = ws(t, n, i.unit);
                                  a = i.extend
                                    ? Qr(a, h.anchor, h.head, i.extend)
                                    : h;
                                }
                                i.addNew
                                  ? -1 == u
                                    ? ((u = c.length),
                                      io(o, Or(t, c.concat([a]), u), {
                                        scroll: !1,
                                        origin: "*mouse",
                                      }))
                                    : c.length > 1 &&
                                        c[u].empty() &&
                                        "char" == i.unit &&
                                        !i.extend
                                      ? (io(
                                          o,
                                          Or(
                                            t,
                                            c
                                              .slice(0, u)
                                              .concat(c.slice(u + 1)),
                                            0,
                                          ),
                                          { scroll: !1, origin: "*mouse" },
                                        ),
                                        (l = o.sel))
                                      : to(o, u, a, G)
                                  : ((u = 0),
                                    io(o, new Sr([a], 0), G),
                                    (l = o.sel));
                                var p = n;
                                function d(e) {
                                  if (0 != re(p, e))
                                    if (((p = e), "rectangle" == i.unit)) {
                                      for (
                                        var r = [],
                                          s = t.options.tabSize,
                                          c = H(qt(o, n.line).text, n.ch, s),
                                          h = H(qt(o, e.line).text, e.ch, s),
                                          d = Math.min(c, h),
                                          _ = Math.max(c, h),
                                          f = Math.min(n.line, e.line),
                                          g = Math.min(
                                            t.lastLine(),
                                            Math.max(n.line, e.line),
                                          );
                                        f <= g;
                                        f++
                                      ) {
                                        var m = qt(o, f).text,
                                          v = $(m, d, s);
                                        d == _
                                          ? r.push(new Mr(ie(f, v), ie(f, v)))
                                          : m.length > v &&
                                            r.push(
                                              new Mr(
                                                ie(f, v),
                                                ie(f, $(m, _, s)),
                                              ),
                                            );
                                      }
                                      r.length || r.push(new Mr(n, n)),
                                        io(
                                          o,
                                          Or(
                                            t,
                                            l.ranges.slice(0, u).concat(r),
                                            u,
                                          ),
                                          { origin: "*mouse", scroll: !1 },
                                        ),
                                        t.scrollIntoView(e);
                                    } else {
                                      var y,
                                        b = a,
                                        w = ws(t, e, i.unit),
                                        x = b.anchor;
                                      re(w.anchor, x) > 0
                                        ? ((y = w.head),
                                          (x = ue(b.from(), w.anchor)))
                                        : ((y = w.anchor),
                                          (x = ae(b.to(), w.head)));
                                      var k = l.ranges.slice(0);
                                      (k[u] = (function (t, e) {
                                        var n = e.anchor,
                                          i = e.head,
                                          r = qt(t.doc, n.line);
                                        if (
                                          0 == re(n, i) &&
                                          n.sticky == i.sticky
                                        )
                                          return e;
                                        var o = pt(r);
                                        if (!o) return e;
                                        var s = ct(o, n.ch, n.sticky),
                                          a = o[s];
                                        if (a.from != n.ch && a.to != n.ch)
                                          return e;
                                        var u,
                                          l =
                                            s +
                                            ((a.from == n.ch) == (1 != a.level)
                                              ? 0
                                              : 1);
                                        if (0 == l || l == o.length) return e;
                                        if (i.line != n.line)
                                          u =
                                            (i.line - n.line) *
                                              ("ltr" == t.doc.direction
                                                ? 1
                                                : -1) >
                                            0;
                                        else {
                                          var c = ct(o, i.ch, i.sticky),
                                            h =
                                              c - s ||
                                              (i.ch - n.ch) *
                                                (1 == a.level ? -1 : 1);
                                          u =
                                            c == l - 1 || c == l
                                              ? h < 0
                                              : h > 0;
                                        }
                                        var p = o[l + (u ? -1 : 0)],
                                          d = u == (1 == p.level),
                                          _ = d ? p.from : p.to,
                                          f = d ? "after" : "before";
                                        return n.ch == _ && n.sticky == f
                                          ? e
                                          : new Mr(new ie(n.line, _, f), i);
                                      })(t, new Mr(ce(o, x), y))),
                                        io(o, Or(t, k, u), G);
                                    }
                                }
                                var _ = r.wrapper.getBoundingClientRect(),
                                  f = 0;
                                function g(e) {
                                  (t.state.selectingText = !1),
                                    (f = 1 / 0),
                                    e && (xt(e), r.input.focus()),
                                    gt(r.wrapper.ownerDocument, "mousemove", m),
                                    gt(r.wrapper.ownerDocument, "mouseup", v),
                                    (o.history.lastSelOrigin = null);
                                }
                                var m = ir(t, function (e) {
                                    0 !== e.buttons && Mt(e)
                                      ? (function e(n) {
                                          var s = ++f,
                                            a = pi(
                                              t,
                                              n,
                                              !0,
                                              "rectangle" == i.unit,
                                            );
                                          if (a)
                                            if (0 != re(a, p)) {
                                              (t.curOp.focus = R(I(t))), d(a);
                                              var u = Ai(r, o);
                                              (a.line >= u.to ||
                                                a.line < u.from) &&
                                                setTimeout(
                                                  ir(t, function () {
                                                    f == s && e(n);
                                                  }),
                                                  150,
                                                );
                                            } else {
                                              var l =
                                                n.clientY < _.top
                                                  ? -20
                                                  : n.clientY > _.bottom
                                                    ? 20
                                                    : 0;
                                              l &&
                                                setTimeout(
                                                  ir(t, function () {
                                                    f == s &&
                                                      ((r.scroller.scrollTop +=
                                                        l),
                                                      e(n));
                                                  }),
                                                  50,
                                                );
                                            }
                                        })(e)
                                      : g(e);
                                  }),
                                  v = ir(t, g);
                                (t.state.selectingText = v),
                                  _t(r.wrapper.ownerDocument, "mousemove", m),
                                  _t(r.wrapper.ownerDocument, "mouseup", v);
                              })(t, i, e, o);
                        })(e, i, o, t)
                      : St(t) == n.scroller && xt(t)
                    : 2 == r
                      ? (i && Zr(e.doc, i),
                        setTimeout(function () {
                          return n.input.focus();
                        }, 20))
                      : 3 == r &&
                        (C ? e.display.input.onContextMenu(t) : Si(e)));
            }
        }
        function ws(t, e, n) {
          if ("char" == n) return new Mr(e, e);
          if ("word" == n) return t.findWordAt(e);
          if ("line" == n)
            return new Mr(ie(e.line, 0), ce(t.doc, ie(e.line + 1, 0)));
          var i = n(t, e);
          return new Mr(i.from, i.to);
        }
        function xs(t, e, n, i) {
          var r, o;
          if (e.touches) (r = e.touches[0].clientX), (o = e.touches[0].clientY);
          else
            try {
              (r = e.clientX), (o = e.clientY);
            } catch (t) {
              return !1;
            }
          if (r >= Math.floor(t.display.gutters.getBoundingClientRect().right))
            return !1;
          i && xt(e);
          var s = t.display,
            a = s.lineDiv.getBoundingClientRect();
          if (o > a.bottom || !bt(t, n)) return Ct(e);
          o -= a.top - s.viewOffset;
          for (var u = 0; u < t.display.gutterSpecs.length; ++u) {
            var l = s.gutters.childNodes[u];
            if (l && l.getBoundingClientRect().right >= r)
              return (
                mt(
                  t,
                  n,
                  t,
                  te(t.doc, o),
                  t.display.gutterSpecs[u].className,
                  e,
                ),
                Ct(e)
              );
          }
        }
        function ks(t, e) {
          return xs(t, e, "gutterClick", !0);
        }
        function Cs(t, e) {
          Tn(t.display, e) ||
            (function (t, e) {
              return (
                !!bt(t, "gutterContextMenu") &&
                xs(t, e, "gutterContextMenu", !1)
              );
            })(t, e) ||
            vt(t, e, "contextmenu") ||
            C ||
            t.display.input.onContextMenu(e);
        }
        function Ts(t) {
          (t.display.wrapper.className =
            t.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
            t.options.theme.replace(/(^|\s)\s*/g, " cm-s-")),
            Un(t);
        }
        ys.prototype.compare = function (t, e, n) {
          return (
            this.time + 400 > t && 0 == re(e, this.pos) && n == this.button
          );
        };
        var Ss = {
            toString: function () {
              return "CodeMirror.Init";
            },
          },
          Ms = {},
          Os = {};
        function Es(t, e, n) {
          if (!e != !(n && n != Ss)) {
            var i = t.display.dragFunctions,
              r = e ? _t : gt;
            r(t.display.scroller, "dragstart", i.start),
              r(t.display.scroller, "dragenter", i.enter),
              r(t.display.scroller, "dragover", i.over),
              r(t.display.scroller, "dragleave", i.leave),
              r(t.display.scroller, "drop", i.drop);
          }
        }
        function Ls(t) {
          t.options.lineWrapping
            ? (D(t.display.wrapper, "CodeMirror-wrap"),
              (t.display.sizer.style.minWidth = ""),
              (t.display.sizerWidth = null))
            : (M(t.display.wrapper, "CodeMirror-wrap"), $e(t)),
            hi(t),
            _i(t),
            Un(t),
            setTimeout(function () {
              return Vi(t);
            }, 100);
        }
        function As(t, e) {
          var n = this;
          if (!(this instanceof As)) return new As(t, e);
          (this.options = e = e ? F(e) : {}), F(Ms, e, !1);
          var i = e.value;
          "string" == typeof i
            ? (i = new Po(i, e.mode, null, e.lineSeparator, e.direction))
            : e.mode && (i.modeOption = e.mode),
            (this.doc = i);
          var r = new As.inputStyles[e.inputStyle](this),
            o = (this.display = new br(t, i, r, e));
          for (var l in ((o.wrapper.CodeMirror = this),
          Ts(this),
          e.lineWrapping &&
            (this.display.wrapper.className += " CodeMirror-wrap"),
          Xi(this),
          (this.state = {
            keyMaps: [],
            overlays: [],
            modeGen: 0,
            overwrite: !1,
            delayingBlurEvent: !1,
            focused: !1,
            suppressEdits: !1,
            pasteIncoming: -1,
            cutIncoming: -1,
            selectingText: !1,
            draggingText: !1,
            highlight: new B(),
            keySeq: null,
            specialChars: null,
          }),
          e.autofocus && !v && o.input.focus(),
          s &&
            a < 11 &&
            setTimeout(function () {
              return n.display.input.reset(!0);
            }, 20),
          (function (t) {
            var e = t.display;
            _t(e.scroller, "mousedown", ir(t, bs)),
              _t(
                e.scroller,
                "dblclick",
                s && a < 11
                  ? ir(t, function (e) {
                      if (!vt(t, e)) {
                        var n = pi(t, e);
                        if (n && !ks(t, e) && !Tn(t.display, e)) {
                          xt(e);
                          var i = t.findWordAt(n);
                          Zr(t.doc, i.anchor, i.head);
                        }
                      }
                    })
                  : function (e) {
                      return vt(t, e) || xt(e);
                    },
              ),
              _t(e.scroller, "contextmenu", function (e) {
                return Cs(t, e);
              }),
              _t(e.input.getField(), "contextmenu", function (n) {
                e.scroller.contains(n.target) || Cs(t, n);
              });
            var n,
              i = { end: 0 };
            function r() {
              e.activeTouch &&
                ((n = setTimeout(function () {
                  return (e.activeTouch = null);
                }, 1e3)),
                ((i = e.activeTouch).end = +new Date()));
            }
            function o(t, e) {
              if (null == e.left) return !0;
              var n = e.left - t.left,
                i = e.top - t.top;
              return n * n + i * i > 400;
            }
            _t(e.scroller, "touchstart", function (r) {
              if (
                !vt(t, r) &&
                !(function (t) {
                  if (1 != t.touches.length) return !1;
                  var e = t.touches[0];
                  return e.radiusX <= 1 && e.radiusY <= 1;
                })(r) &&
                !ks(t, r)
              ) {
                e.input.ensurePolled(), clearTimeout(n);
                var o = +new Date();
                (e.activeTouch = {
                  start: o,
                  moved: !1,
                  prev: o - i.end <= 300 ? i : null,
                }),
                  1 == r.touches.length &&
                    ((e.activeTouch.left = r.touches[0].pageX),
                    (e.activeTouch.top = r.touches[0].pageY));
              }
            }),
              _t(e.scroller, "touchmove", function () {
                e.activeTouch && (e.activeTouch.moved = !0);
              }),
              _t(e.scroller, "touchend", function (n) {
                var i = e.activeTouch;
                if (
                  i &&
                  !Tn(e, n) &&
                  null != i.left &&
                  !i.moved &&
                  new Date() - i.start < 300
                ) {
                  var s,
                    a = t.coordsChar(e.activeTouch, "page");
                  (s =
                    !i.prev || o(i, i.prev)
                      ? new Mr(a, a)
                      : !i.prev.prev || o(i, i.prev.prev)
                        ? t.findWordAt(a)
                        : new Mr(ie(a.line, 0), ce(t.doc, ie(a.line + 1, 0)))),
                    t.setSelection(s.anchor, s.head),
                    t.focus(),
                    xt(n);
                }
                r();
              }),
              _t(e.scroller, "touchcancel", r),
              _t(e.scroller, "scroll", function () {
                e.scroller.clientHeight &&
                  (zi(t, e.scroller.scrollTop),
                  Fi(t, e.scroller.scrollLeft, !0),
                  mt(t, "scroll", t));
              }),
              _t(e.scroller, "mousewheel", function (e) {
                return Tr(t, e);
              }),
              _t(e.scroller, "DOMMouseScroll", function (e) {
                return Tr(t, e);
              }),
              _t(e.wrapper, "scroll", function () {
                return (e.wrapper.scrollTop = e.wrapper.scrollLeft = 0);
              }),
              (e.dragFunctions = {
                enter: function (e) {
                  vt(t, e) || Tt(e);
                },
                over: function (e) {
                  vt(t, e) ||
                    ((function (t, e) {
                      var n = pi(t, e);
                      if (n) {
                        var i = document.createDocumentFragment();
                        wi(t, n, i),
                          t.display.dragCursor ||
                            ((t.display.dragCursor = L(
                              "div",
                              null,
                              "CodeMirror-cursors CodeMirror-dragcursors",
                            )),
                            t.display.lineSpace.insertBefore(
                              t.display.dragCursor,
                              t.display.cursorDiv,
                            )),
                          E(t.display.dragCursor, i);
                      }
                    })(t, e),
                    Tt(e));
                },
                start: function (e) {
                  return (function (t, e) {
                    if (s && (!t.state.draggingText || +new Date() - Wo < 100))
                      Tt(e);
                    else if (
                      !vt(t, e) &&
                      !Tn(t.display, e) &&
                      (e.dataTransfer.setData("Text", t.getSelection()),
                      (e.dataTransfer.effectAllowed = "copyMove"),
                      e.dataTransfer.setDragImage && !d)
                    ) {
                      var n = L(
                        "img",
                        null,
                        null,
                        "position: fixed; left: 0; top: 0;",
                      );
                      (n.src =
                        "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
                        p &&
                          ((n.width = n.height = 1),
                          t.display.wrapper.appendChild(n),
                          (n._top = n.offsetTop)),
                        e.dataTransfer.setDragImage(n, 0, 0),
                        p && n.parentNode.removeChild(n);
                    }
                  })(t, e);
                },
                drop: ir(t, Io),
                leave: function (e) {
                  vt(t, e) || zo(t);
                },
              });
            var u = e.input.getField();
            _t(u, "keyup", function (e) {
              return fs.call(t, e);
            }),
              _t(u, "keydown", ir(t, _s)),
              _t(u, "keypress", ir(t, gs)),
              _t(u, "focus", function (e) {
                return Mi(t, e);
              }),
              _t(u, "blur", function (e) {
                return Oi(t, e);
              });
          })(this),
          Ho(),
          qi(this),
          (this.curOp.forceUpdate = !0),
          jr(this, i),
          (e.autofocus && !v) || this.hasFocus()
            ? setTimeout(function () {
                n.hasFocus() && !n.state.focused && Mi(n);
              }, 20)
            : Oi(this),
          Os))
            Os.hasOwnProperty(l) && Os[l](this, e[l], Ss);
          gr(this), e.finishInit && e.finishInit(this);
          for (var c = 0; c < Ns.length; ++c) Ns[c](this);
          Yi(this),
            u &&
              e.lineWrapping &&
              "optimizelegibility" ==
                getComputedStyle(o.lineDiv).textRendering &&
              (o.lineDiv.style.textRendering = "auto");
        }
        (As.defaults = Ms), (As.optionHandlers = Os);
        var Ns = [];
        function Rs(t, e, n, i) {
          var r,
            o = t.doc;
          null == n && (n = "add"),
            "smart" == n &&
              (o.mode.indent ? (r = ge(t, e).state) : (n = "prev"));
          var s = t.options.tabSize,
            a = qt(o, e),
            u = H(a.text, null, s);
          a.stateAfter && (a.stateAfter = null);
          var l,
            c = a.text.match(/^\s*/)[0];
          if (i || /\S/.test(a.text)) {
            if (
              "smart" == n &&
              ((l = o.mode.indent(r, a.text.slice(c.length), a.text)) == V ||
                l > 150)
            ) {
              if (!i) return;
              n = "prev";
            }
          } else (l = 0), (n = "not");
          "prev" == n
            ? (l = e > o.first ? H(qt(o, e - 1).text, null, s) : 0)
            : "add" == n
              ? (l = u + t.options.indentUnit)
              : "subtract" == n
                ? (l = u - t.options.indentUnit)
                : "number" == typeof n && (l = u + n),
            (l = Math.max(0, l));
          var h = "",
            p = 0;
          if (t.options.indentWithTabs)
            for (var d = Math.floor(l / s); d; --d) (p += s), (h += "\t");
          if ((p < l && (h += Y(l - p)), h != c))
            return (
              yo(o, h, ie(e, 0), ie(e, c.length), "+input"),
              (a.stateAfter = null),
              !0
            );
          for (var _ = 0; _ < o.sel.ranges.length; _++) {
            var f = o.sel.ranges[_];
            if (f.head.line == e && f.head.ch < c.length) {
              var g = ie(e, c.length);
              to(o, _, new Mr(g, g));
              break;
            }
          }
        }
        As.defineInitHook = function (t) {
          return Ns.push(t);
        };
        var Ds = null;
        function Ps(t) {
          Ds = t;
        }
        function Ws(t, e, n, i, r) {
          var o = t.doc;
          (t.display.shift = !1), i || (i = o.sel);
          var s = +new Date() - 200,
            a = "paste" == r || t.state.pasteIncoming > s,
            u = Dt(e),
            l = null;
          if (a && i.ranges.length > 1)
            if (Ds && Ds.text.join("\n") == e) {
              if (i.ranges.length % Ds.text.length == 0) {
                l = [];
                for (var c = 0; c < Ds.text.length; c++)
                  l.push(o.splitLines(Ds.text[c]));
              }
            } else
              u.length == i.ranges.length &&
                t.options.pasteLinesPerSelection &&
                (l = Z(u, function (t) {
                  return [t];
                }));
          for (
            var h = t.curOp.updateInput, p = i.ranges.length - 1;
            p >= 0;
            p--
          ) {
            var d = i.ranges[p],
              _ = d.from(),
              f = d.to();
            d.empty() &&
              (n && n > 0
                ? (_ = ie(_.line, _.ch - n))
                : t.state.overwrite && !a
                  ? (f = ie(
                      f.line,
                      Math.min(qt(o, f.line).text.length, f.ch + Q(u).length),
                    ))
                  : a &&
                    Ds &&
                    Ds.lineWise &&
                    Ds.text.join("\n") == u.join("\n") &&
                    (_ = f = ie(_.line, 0)));
            var g = {
              from: _,
              to: f,
              text: l ? l[p % l.length] : u,
              origin:
                r || (a ? "paste" : t.state.cutIncoming > s ? "cut" : "+input"),
            };
            _o(t.doc, g), hn(t, "inputRead", t, g);
          }
          e && !a && zs(t, e),
            Di(t),
            t.curOp.updateInput < 2 && (t.curOp.updateInput = h),
            (t.curOp.typing = !0),
            (t.state.pasteIncoming = t.state.cutIncoming = -1);
        }
        function Is(t, e) {
          var n = t.clipboardData && t.clipboardData.getData("Text");
          if (n)
            return (
              t.preventDefault(),
              e.isReadOnly() ||
                e.options.disableInput ||
                !e.hasFocus() ||
                nr(e, function () {
                  return Ws(e, n, 0, null, "paste");
                }),
              !0
            );
        }
        function zs(t, e) {
          if (t.options.electricChars && t.options.smartIndent)
            for (var n = t.doc.sel, i = n.ranges.length - 1; i >= 0; i--) {
              var r = n.ranges[i];
              if (
                !(
                  r.head.ch > 100 ||
                  (i && n.ranges[i - 1].head.line == r.head.line)
                )
              ) {
                var o = t.getModeAt(r.head),
                  s = !1;
                if (o.electricChars) {
                  for (var a = 0; a < o.electricChars.length; a++)
                    if (e.indexOf(o.electricChars.charAt(a)) > -1) {
                      s = Rs(t, r.head.line, "smart");
                      break;
                    }
                } else
                  o.electricInput &&
                    o.electricInput.test(
                      qt(t.doc, r.head.line).text.slice(0, r.head.ch),
                    ) &&
                    (s = Rs(t, r.head.line, "smart"));
                s && hn(t, "electricInput", t, r.head.line);
              }
            }
        }
        function js(t) {
          for (var e = [], n = [], i = 0; i < t.doc.sel.ranges.length; i++) {
            var r = t.doc.sel.ranges[i].head.line,
              o = { anchor: ie(r, 0), head: ie(r + 1, 0) };
            n.push(o), e.push(t.getRange(o.anchor, o.head));
          }
          return { text: e, ranges: n };
        }
        function Fs(t, e, n, i) {
          t.setAttribute("autocorrect", n ? "" : "off"),
            t.setAttribute("autocapitalize", i ? "" : "off"),
            t.setAttribute("spellcheck", !!e);
        }
        function Hs() {
          var t = L(
              "textarea",
              null,
              null,
              "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none",
            ),
            e = L(
              "div",
              [t],
              null,
              "overflow: hidden; position: relative; width: 3px; height: 0px;",
            );
          return (
            u ? (t.style.width = "1000px") : t.setAttribute("wrap", "off"),
            g && (t.style.border = "1px solid black"),
            Fs(t),
            e
          );
        }
        function Bs(t, e, n, i, r) {
          var o = e,
            s = n,
            a = qt(t, e.line),
            u = r && "rtl" == t.direction ? -n : n;
          function l(o) {
            var s, l;
            if ("codepoint" == i) {
              var c = a.text.charCodeAt(e.ch + (n > 0 ? 0 : -1));
              if (isNaN(c)) s = null;
              else {
                var h =
                  n > 0 ? c >= 55296 && c < 56320 : c >= 56320 && c < 57343;
                s = new ie(
                  e.line,
                  Math.max(0, Math.min(a.text.length, e.ch + n * (h ? 2 : 1))),
                  -n,
                );
              }
            } else
              s = r
                ? (function (t, e, n, i) {
                    var r = pt(e, t.doc.direction);
                    if (!r) return is(e, n, i);
                    n.ch >= e.text.length
                      ? ((n.ch = e.text.length), (n.sticky = "before"))
                      : n.ch <= 0 && ((n.ch = 0), (n.sticky = "after"));
                    var o = ct(r, n.ch, n.sticky),
                      s = r[o];
                    if (
                      "ltr" == t.doc.direction &&
                      s.level % 2 == 0 &&
                      (i > 0 ? s.to > n.ch : s.from < n.ch)
                    )
                      return is(e, n, i);
                    var a,
                      u = function (t, n) {
                        return ns(e, t instanceof ie ? t.ch : t, n);
                      },
                      l = function (n) {
                        return t.options.lineWrapping
                          ? ((a = a || Pn(t, e)), ei(t, e, a, n))
                          : { begin: 0, end: e.text.length };
                      },
                      c = l("before" == n.sticky ? u(n, -1) : n.ch);
                    if ("rtl" == t.doc.direction || 1 == s.level) {
                      var h = (1 == s.level) == i < 0,
                        p = u(n, h ? 1 : -1);
                      if (
                        null != p &&
                        (h
                          ? p <= s.to && p <= c.end
                          : p >= s.from && p >= c.begin)
                      ) {
                        var d = h ? "before" : "after";
                        return new ie(n.line, p, d);
                      }
                    }
                    var _ = function (t, e, i) {
                        for (
                          var o = function (t, e) {
                            return e
                              ? new ie(n.line, u(t, 1), "before")
                              : new ie(n.line, t, "after");
                          };
                          t >= 0 && t < r.length;
                          t += e
                        ) {
                          var s = r[t],
                            a = e > 0 == (1 != s.level),
                            l = a ? i.begin : u(i.end, -1);
                          if (s.from <= l && l < s.to) return o(l, a);
                          if (
                            ((l = a ? s.from : u(s.to, -1)),
                            i.begin <= l && l < i.end)
                          )
                            return o(l, a);
                        }
                      },
                      f = _(o + i, i, c);
                    if (f) return f;
                    var g = i > 0 ? c.end : u(c.begin, -1);
                    return null == g ||
                      (i > 0 && g == e.text.length) ||
                      !(f = _(i > 0 ? 0 : r.length - 1, i, l(g)))
                      ? null
                      : f;
                  })(t.cm, a, e, n)
                : is(a, e, n);
            if (null == s) {
              if (
                o ||
                (l = e.line + u) < t.first ||
                l >= t.first + t.size ||
                ((e = new ie(l, e.ch, e.sticky)), !(a = qt(t, l)))
              )
                return !1;
              e = rs(r, t.cm, a, e.line, u);
            } else e = s;
            return !0;
          }
          if ("char" == i || "codepoint" == i) l();
          else if ("column" == i) l(!0);
          else if ("word" == i || "group" == i)
            for (
              var c = null,
                h = "group" == i,
                p = t.cm && t.cm.getHelper(e, "wordChars"),
                d = !0;
              !(n < 0) || l(!d);
              d = !1
            ) {
              var _ = a.text.charAt(e.ch) || "\n",
                f = it(_, p)
                  ? "w"
                  : h && "\n" == _
                    ? "n"
                    : !h || /\s/.test(_)
                      ? null
                      : "p";
              if ((!h || d || f || (f = "s"), c && c != f)) {
                n < 0 && ((n = 1), l(), (e.sticky = "after"));
                break;
              }
              if ((f && (c = f), n > 0 && !l(!d))) break;
            }
          var g = lo(t, e, o, s, !0);
          return oe(o, g) && (g.hitSide = !0), g;
        }
        function Us(t, e, n, i) {
          var r,
            o,
            s = t.doc,
            a = e.left;
          if ("page" == i) {
            var u = Math.min(
                t.display.wrapper.clientHeight,
                z(t).innerHeight || s(t).documentElement.clientHeight,
              ),
              l = Math.max(u - 0.5 * si(t.display), 3);
            r = (n > 0 ? e.bottom : e.top) + n * l;
          } else "line" == i && (r = n > 0 ? e.bottom + 3 : e.top - 3);
          for (; (o = Jn(t, a, r)).outside; ) {
            if (n < 0 ? r <= 0 : r >= s.height) {
              o.hitSide = !0;
              break;
            }
            r += 5 * n;
          }
          return o;
        }
        var Vs = function (t) {
          (this.cm = t),
            (this.lastAnchorNode =
              this.lastAnchorOffset =
              this.lastFocusNode =
              this.lastFocusOffset =
                null),
            (this.polling = new B()),
            (this.composing = null),
            (this.gracePeriod = !1),
            (this.readDOMTimeout = null);
        };
        function Ks(t, e) {
          var n = Dn(t, e.line);
          if (!n || n.hidden) return null;
          var i = qt(t.doc, e.line),
            r = Nn(n, i, e.line),
            o = pt(i, t.doc.direction),
            s = "left";
          o && (s = ct(o, e.ch) % 2 ? "right" : "left");
          var a = jn(r.map, e.ch, s);
          return (a.offset = "right" == a.collapse ? a.end : a.start), a;
        }
        function Gs(t, e) {
          return e && (t.bad = !0), t;
        }
        function Xs(t, e, n) {
          var i;
          if (e == t.display.lineDiv) {
            if (!(i = t.display.lineDiv.childNodes[n]))
              return Gs(t.clipPos(ie(t.display.viewTo - 1)), !0);
            (e = null), (n = 0);
          } else
            for (i = e; ; i = i.parentNode) {
              if (!i || i == t.display.lineDiv) return null;
              if (i.parentNode && i.parentNode == t.display.lineDiv) break;
            }
          for (var r = 0; r < t.display.view.length; r++) {
            var o = t.display.view[r];
            if (o.node == i) return $s(o, e, n);
          }
        }
        function $s(t, e, n) {
          var i = t.text.firstChild,
            r = !1;
          if (!e || !N(i, e)) return Gs(ie(Jt(t.line), 0), !0);
          if (e == i && ((r = !0), (e = i.childNodes[n]), (n = 0), !e)) {
            var o = t.rest ? Q(t.rest) : t.line;
            return Gs(ie(Jt(o), o.text.length), r);
          }
          var s = 3 == e.nodeType ? e : null,
            a = e;
          for (
            s ||
            1 != e.childNodes.length ||
            3 != e.firstChild.nodeType ||
            ((s = e.firstChild), n && (n = s.nodeValue.length));
            a.parentNode != i;

          )
            a = a.parentNode;
          var u = t.measure,
            l = u.maps;
          function c(e, n, i) {
            for (var r = -1; r < (l ? l.length : 0); r++)
              for (var o = r < 0 ? u.map : l[r], s = 0; s < o.length; s += 3) {
                var a = o[s + 2];
                if (a == e || a == n) {
                  var c = Jt(r < 0 ? t.line : t.rest[r]),
                    h = o[s] + i;
                  return (
                    (i < 0 || a != e) && (h = o[s + (i ? 1 : 0)]), ie(c, h)
                  );
                }
              }
          }
          var h = c(s, a, n);
          if (h) return Gs(h, r);
          for (
            var p = a.nextSibling, d = s ? s.nodeValue.length - n : 0;
            p;
            p = p.nextSibling
          ) {
            if ((h = c(p, p.firstChild, 0))) return Gs(ie(h.line, h.ch - d), r);
            d += p.textContent.length;
          }
          for (var _ = a.previousSibling, f = n; _; _ = _.previousSibling) {
            if ((h = c(_, _.firstChild, -1)))
              return Gs(ie(h.line, h.ch + f), r);
            f += _.textContent.length;
          }
        }
        (Vs.prototype.init = function (t) {
          var e = this,
            n = this,
            i = n.cm,
            r = (n.div = t.lineDiv);
          function o(t) {
            for (var e = t.target; e; e = e.parentNode) {
              if (e == r) return !0;
              if (/\bCodeMirror-(?:line)?widget\b/.test(e.className)) break;
            }
            return !1;
          }
          function s(t) {
            if (o(t) && !vt(i, t)) {
              if (i.somethingSelected())
                Ps({ lineWise: !1, text: i.getSelections() }),
                  "cut" == t.type && i.replaceSelection("", null, "cut");
              else {
                if (!i.options.lineWiseCopyCut) return;
                var e = js(i);
                Ps({ lineWise: !0, text: e.text }),
                  "cut" == t.type &&
                    i.operation(function () {
                      i.setSelections(e.ranges, 0, K),
                        i.replaceSelection("", null, "cut");
                    });
              }
              if (t.clipboardData) {
                t.clipboardData.clearData();
                var s = Ds.text.join("\n");
                if (
                  (t.clipboardData.setData("Text", s),
                  t.clipboardData.getData("Text") == s)
                )
                  return void t.preventDefault();
              }
              var a = Hs(),
                u = a.firstChild;
              i.display.lineSpace.insertBefore(
                a,
                i.display.lineSpace.firstChild,
              ),
                (u.value = Ds.text.join("\n"));
              var l = R(r.ownerDocument);
              W(u),
                setTimeout(function () {
                  i.display.lineSpace.removeChild(a),
                    l.focus(),
                    l == r && n.showPrimarySelection();
                }, 50);
            }
          }
          (r.contentEditable = !0),
            Fs(
              r,
              i.options.spellcheck,
              i.options.autocorrect,
              i.options.autocapitalize,
            ),
            _t(r, "paste", function (t) {
              !o(t) ||
                vt(i, t) ||
                Is(t, i) ||
                (a <= 11 &&
                  setTimeout(
                    ir(i, function () {
                      return e.updateFromDOM();
                    }),
                    20,
                  ));
            }),
            _t(r, "compositionstart", function (t) {
              e.composing = { data: t.data, done: !1 };
            }),
            _t(r, "compositionupdate", function (t) {
              e.composing || (e.composing = { data: t.data, done: !1 });
            }),
            _t(r, "compositionend", function (t) {
              e.composing &&
                (t.data != e.composing.data && e.readFromDOMSoon(),
                (e.composing.done = !0));
            }),
            _t(r, "touchstart", function () {
              return n.forceCompositionEnd();
            }),
            _t(r, "input", function () {
              e.composing || e.readFromDOMSoon();
            }),
            _t(r, "copy", s),
            _t(r, "cut", s);
        }),
          (Vs.prototype.screenReaderLabelChanged = function (t) {
            t
              ? this.div.setAttribute("aria-label", t)
              : this.div.removeAttribute("aria-label");
          }),
          (Vs.prototype.prepareSelection = function () {
            var t = bi(this.cm, !1);
            return (t.focus = R(this.div.ownerDocument) == this.div), t;
          }),
          (Vs.prototype.showSelection = function (t, e) {
            t &&
              this.cm.display.view.length &&
              ((t.focus || e) && this.showPrimarySelection(),
              this.showMultipleSelections(t));
          }),
          (Vs.prototype.getSelection = function () {
            return this.cm.display.wrapper.ownerDocument.getSelection();
          }),
          (Vs.prototype.showPrimarySelection = function () {
            var t = this.getSelection(),
              e = this.cm,
              i = e.doc.sel.primary(),
              r = i.from(),
              o = i.to();
            if (
              e.display.viewTo == e.display.viewFrom ||
              r.line >= e.display.viewTo ||
              o.line < e.display.viewFrom
            )
              t.removeAllRanges();
            else {
              var s = Xs(e, t.anchorNode, t.anchorOffset),
                a = Xs(e, t.focusNode, t.focusOffset);
              if (
                !s ||
                s.bad ||
                !a ||
                a.bad ||
                0 != re(ue(s, a), r) ||
                0 != re(ae(s, a), o)
              ) {
                var u = e.display.view,
                  l = (r.line >= e.display.viewFrom && Ks(e, r)) || {
                    node: u[0].measure.map[2],
                    offset: 0,
                  },
                  c = o.line < e.display.viewTo && Ks(e, o);
                if (!c) {
                  var h = u[u.length - 1].measure,
                    p = h.maps ? h.maps[h.maps.length - 1] : h.map;
                  c = {
                    node: p[p.length - 1],
                    offset: p[p.length - 2] - p[p.length - 3],
                  };
                }
                if (l && c) {
                  var d,
                    _ = t.rangeCount && t.getRangeAt(0);
                  try {
                    d = S(l.node, l.offset, c.offset, c.node);
                  } catch (t) {}
                  d &&
                    (!n && e.state.focused
                      ? (t.collapse(l.node, l.offset),
                        d.collapsed || (t.removeAllRanges(), t.addRange(d)))
                      : (t.removeAllRanges(), t.addRange(d)),
                    _ && null == t.anchorNode
                      ? t.addRange(_)
                      : n && this.startGracePeriod()),
                    this.rememberSelection();
                } else t.removeAllRanges();
              }
            }
          }),
          (Vs.prototype.startGracePeriod = function () {
            var t = this;
            clearTimeout(this.gracePeriod),
              (this.gracePeriod = setTimeout(function () {
                (t.gracePeriod = !1),
                  t.selectionChanged() &&
                    t.cm.operation(function () {
                      return (t.cm.curOp.selectionChanged = !0);
                    });
              }, 20));
          }),
          (Vs.prototype.showMultipleSelections = function (t) {
            E(this.cm.display.cursorDiv, t.cursors),
              E(this.cm.display.selectionDiv, t.selection);
          }),
          (Vs.prototype.rememberSelection = function () {
            var t = this.getSelection();
            (this.lastAnchorNode = t.anchorNode),
              (this.lastAnchorOffset = t.anchorOffset),
              (this.lastFocusNode = t.focusNode),
              (this.lastFocusOffset = t.focusOffset);
          }),
          (Vs.prototype.selectionInEditor = function () {
            var t = this.getSelection();
            if (!t.rangeCount) return !1;
            var e = t.getRangeAt(0).commonAncestorContainer;
            return N(this.div, e);
          }),
          (Vs.prototype.focus = function () {
            "nocursor" != this.cm.options.readOnly &&
              ((this.selectionInEditor() &&
                R(this.div.ownerDocument) == this.div) ||
                this.showSelection(this.prepareSelection(), !0),
              this.div.focus());
          }),
          (Vs.prototype.blur = function () {
            this.div.blur();
          }),
          (Vs.prototype.getField = function () {
            return this.div;
          }),
          (Vs.prototype.supportsTouch = function () {
            return !0;
          }),
          (Vs.prototype.receivedFocus = function () {
            var t = this,
              e = this;
            this.selectionInEditor()
              ? setTimeout(function () {
                  return t.pollSelection();
                }, 20)
              : nr(this.cm, function () {
                  return (e.cm.curOp.selectionChanged = !0);
                }),
              this.polling.set(this.cm.options.pollInterval, function t() {
                e.cm.state.focused &&
                  (e.pollSelection(),
                  e.polling.set(e.cm.options.pollInterval, t));
              });
          }),
          (Vs.prototype.selectionChanged = function () {
            var t = this.getSelection();
            return (
              t.anchorNode != this.lastAnchorNode ||
              t.anchorOffset != this.lastAnchorOffset ||
              t.focusNode != this.lastFocusNode ||
              t.focusOffset != this.lastFocusOffset
            );
          }),
          (Vs.prototype.pollSelection = function () {
            if (
              null == this.readDOMTimeout &&
              !this.gracePeriod &&
              this.selectionChanged()
            ) {
              var t = this.getSelection(),
                e = this.cm;
              if (
                m &&
                c &&
                this.cm.display.gutterSpecs.length &&
                (function (t) {
                  for (var e = t; e; e = e.parentNode)
                    if (/CodeMirror-gutter-wrapper/.test(e.className))
                      return !0;
                  return !1;
                })(t.anchorNode)
              )
                return (
                  this.cm.triggerOnKeyDown({
                    type: "keydown",
                    keyCode: 8,
                    preventDefault: Math.abs,
                  }),
                  this.blur(),
                  void this.focus()
                );
              if (!this.composing) {
                this.rememberSelection();
                var n = Xs(e, t.anchorNode, t.anchorOffset),
                  i = Xs(e, t.focusNode, t.focusOffset);
                n &&
                  i &&
                  nr(e, function () {
                    io(e.doc, Er(n, i), K),
                      (n.bad || i.bad) && (e.curOp.selectionChanged = !0);
                  });
              }
            }
          }),
          (Vs.prototype.pollContent = function () {
            null != this.readDOMTimeout &&
              (clearTimeout(this.readDOMTimeout), (this.readDOMTimeout = null));
            var t,
              e,
              n,
              i = this.cm,
              r = i.display,
              o = i.doc.sel.primary(),
              s = o.from(),
              a = o.to();
            if (
              (0 == s.ch &&
                s.line > i.firstLine() &&
                (s = ie(s.line - 1, qt(i.doc, s.line - 1).length)),
              a.ch == qt(i.doc, a.line).text.length &&
                a.line < i.lastLine() &&
                (a = ie(a.line + 1, 0)),
              s.line < r.viewFrom || a.line > r.viewTo - 1)
            )
              return !1;
            s.line == r.viewFrom || 0 == (t = di(i, s.line))
              ? ((e = Jt(r.view[0].line)), (n = r.view[0].node))
              : ((e = Jt(r.view[t].line)),
                (n = r.view[t - 1].node.nextSibling));
            var u,
              l,
              c = di(i, a.line);
            if (
              (c == r.view.length - 1
                ? ((u = r.viewTo - 1), (l = r.lineDiv.lastChild))
                : ((u = Jt(r.view[c + 1].line) - 1),
                  (l = r.view[c + 1].node.previousSibling)),
              !n)
            )
              return !1;
            for (
              var h = i.doc.splitLines(
                  (function (t, e, n, i, r) {
                    var o = "",
                      s = !1,
                      a = t.doc.lineSeparator(),
                      u = !1;
                    function l() {
                      s && ((o += a), u && (o += a), (s = u = !1));
                    }
                    function c(t) {
                      t && (l(), (o += t));
                    }
                    function h(e) {
                      if (1 == e.nodeType) {
                        var n = e.getAttribute("cm-text");
                        if (n) return void c(n);
                        var o,
                          p = e.getAttribute("cm-marker");
                        if (p) {
                          var d = t.findMarks(
                            ie(i, 0),
                            ie(r + 1, 0),
                            ((g = +p),
                            function (t) {
                              return t.id == g;
                            }),
                          );
                          return void (
                            d.length &&
                            (o = d[0].find(0)) &&
                            c(Yt(t.doc, o.from, o.to).join(a))
                          );
                        }
                        if ("false" == e.getAttribute("contenteditable"))
                          return;
                        var _ = /^(pre|div|p|li|table|br)$/i.test(e.nodeName);
                        if (
                          !/^br$/i.test(e.nodeName) &&
                          0 == e.textContent.length
                        )
                          return;
                        _ && l();
                        for (var f = 0; f < e.childNodes.length; f++)
                          h(e.childNodes[f]);
                        /^(pre|p)$/i.test(e.nodeName) && (u = !0),
                          _ && (s = !0);
                      } else
                        3 == e.nodeType &&
                          c(
                            e.nodeValue
                              .replace(/\u200b/g, "")
                              .replace(/\u00a0/g, " "),
                          );
                      var g;
                    }
                    for (; h(e), e != n; ) (e = e.nextSibling), (u = !1);
                    return o;
                  })(i, n, l, e, u),
                ),
                p = Yt(i.doc, ie(e, 0), ie(u, qt(i.doc, u).text.length));
              h.length > 1 && p.length > 1;

            )
              if (Q(h) == Q(p)) h.pop(), p.pop(), u--;
              else {
                if (h[0] != p[0]) break;
                h.shift(), p.shift(), e++;
              }
            for (
              var d = 0,
                _ = 0,
                f = h[0],
                g = p[0],
                m = Math.min(f.length, g.length);
              d < m && f.charCodeAt(d) == g.charCodeAt(d);

            )
              ++d;
            for (
              var v = Q(h),
                y = Q(p),
                b = Math.min(
                  v.length - (1 == h.length ? d : 0),
                  y.length - (1 == p.length ? d : 0),
                );
              _ < b &&
              v.charCodeAt(v.length - _ - 1) == y.charCodeAt(y.length - _ - 1);

            )
              ++_;
            if (1 == h.length && 1 == p.length && e == s.line)
              for (
                ;
                d &&
                d > s.ch &&
                v.charCodeAt(v.length - _ - 1) ==
                  y.charCodeAt(y.length - _ - 1);

              )
                d--, _++;
            (h[h.length - 1] = v
              .slice(0, v.length - _)
              .replace(/^\u200b+/, "")),
              (h[0] = h[0].slice(d).replace(/\u200b+$/, ""));
            var w = ie(e, d),
              x = ie(u, p.length ? Q(p).length - _ : 0);
            return h.length > 1 || h[0] || re(w, x)
              ? (yo(i.doc, h, w, x, "+input"), !0)
              : void 0;
          }),
          (Vs.prototype.ensurePolled = function () {
            this.forceCompositionEnd();
          }),
          (Vs.prototype.reset = function () {
            this.forceCompositionEnd();
          }),
          (Vs.prototype.forceCompositionEnd = function () {
            this.composing &&
              (clearTimeout(this.readDOMTimeout),
              (this.composing = null),
              this.updateFromDOM(),
              this.div.blur(),
              this.div.focus());
          }),
          (Vs.prototype.readFromDOMSoon = function () {
            var t = this;
            null == this.readDOMTimeout &&
              (this.readDOMTimeout = setTimeout(function () {
                if (((t.readDOMTimeout = null), t.composing)) {
                  if (!t.composing.done) return;
                  t.composing = null;
                }
                t.updateFromDOM();
              }, 80));
          }),
          (Vs.prototype.updateFromDOM = function () {
            var t = this;
            (!this.cm.isReadOnly() && this.pollContent()) ||
              nr(this.cm, function () {
                return _i(t.cm);
              });
          }),
          (Vs.prototype.setUneditable = function (t) {
            t.contentEditable = "false";
          }),
          (Vs.prototype.onKeyPress = function (t) {
            0 == t.charCode ||
              this.composing ||
              (t.preventDefault(),
              this.cm.isReadOnly() ||
                ir(this.cm, Ws)(
                  this.cm,
                  String.fromCharCode(
                    null == t.charCode ? t.keyCode : t.charCode,
                  ),
                  0,
                ));
          }),
          (Vs.prototype.readOnlyChanged = function (t) {
            this.div.contentEditable = String("nocursor" != t);
          }),
          (Vs.prototype.onContextMenu = function () {}),
          (Vs.prototype.resetPosition = function () {}),
          (Vs.prototype.needsContentAttribute = !0);
        var qs = function (t) {
          (this.cm = t),
            (this.prevInput = ""),
            (this.pollingFast = !1),
            (this.polling = new B()),
            (this.hasSelection = !1),
            (this.composing = null),
            (this.resetting = !1);
        };
        (qs.prototype.init = function (t) {
          var e = this,
            n = this,
            i = this.cm;
          this.createField(t);
          var r = this.textarea;
          function o(t) {
            if (!vt(i, t)) {
              if (i.somethingSelected())
                Ps({ lineWise: !1, text: i.getSelections() });
              else {
                if (!i.options.lineWiseCopyCut) return;
                var e = js(i);
                Ps({ lineWise: !0, text: e.text }),
                  "cut" == t.type
                    ? i.setSelections(e.ranges, null, K)
                    : ((n.prevInput = ""), (r.value = e.text.join("\n")), W(r));
              }
              "cut" == t.type && (i.state.cutIncoming = +new Date());
            }
          }
          t.wrapper.insertBefore(this.wrapper, t.wrapper.firstChild),
            g && (r.style.width = "0px"),
            _t(r, "input", function () {
              s && a >= 9 && e.hasSelection && (e.hasSelection = null),
                n.poll();
            }),
            _t(r, "paste", function (t) {
              vt(i, t) ||
                Is(t, i) ||
                ((i.state.pasteIncoming = +new Date()), n.fastPoll());
            }),
            _t(r, "cut", o),
            _t(r, "copy", o),
            _t(t.scroller, "paste", function (e) {
              if (!Tn(t, e) && !vt(i, e)) {
                if (!r.dispatchEvent)
                  return (i.state.pasteIncoming = +new Date()), void n.focus();
                var o = new Event("paste");
                (o.clipboardData = e.clipboardData), r.dispatchEvent(o);
              }
            }),
            _t(t.lineSpace, "selectstart", function (e) {
              Tn(t, e) || xt(e);
            }),
            _t(r, "compositionstart", function () {
              var t = i.getCursor("from");
              n.composing && n.composing.range.clear(),
                (n.composing = {
                  start: t,
                  range: i.markText(t, i.getCursor("to"), {
                    className: "CodeMirror-composing",
                  }),
                });
            }),
            _t(r, "compositionend", function () {
              n.composing &&
                (n.poll(), n.composing.range.clear(), (n.composing = null));
            });
        }),
          (qs.prototype.createField = function (t) {
            (this.wrapper = Hs()), (this.textarea = this.wrapper.firstChild);
          }),
          (qs.prototype.screenReaderLabelChanged = function (t) {
            t
              ? this.textarea.setAttribute("aria-label", t)
              : this.textarea.removeAttribute("aria-label");
          }),
          (qs.prototype.prepareSelection = function () {
            var t = this.cm,
              e = t.display,
              n = t.doc,
              i = bi(t);
            if (t.options.moveInputWithCursor) {
              var r = Yn(t, n.sel.primary().head, "div"),
                o = e.wrapper.getBoundingClientRect(),
                s = e.lineDiv.getBoundingClientRect();
              (i.teTop = Math.max(
                0,
                Math.min(e.wrapper.clientHeight - 10, r.top + s.top - o.top),
              )),
                (i.teLeft = Math.max(
                  0,
                  Math.min(
                    e.wrapper.clientWidth - 10,
                    r.left + s.left - o.left,
                  ),
                ));
            }
            return i;
          }),
          (qs.prototype.showSelection = function (t) {
            var e = this.cm.display;
            E(e.cursorDiv, t.cursors),
              E(e.selectionDiv, t.selection),
              null != t.teTop &&
                ((this.wrapper.style.top = t.teTop + "px"),
                (this.wrapper.style.left = t.teLeft + "px"));
          }),
          (qs.prototype.reset = function (t) {
            if (!(this.contextMenuPending || (this.composing && t))) {
              var e = this.cm;
              if (((this.resetting = !0), e.somethingSelected())) {
                this.prevInput = "";
                var n = e.getSelection();
                (this.textarea.value = n),
                  e.state.focused && W(this.textarea),
                  s && a >= 9 && (this.hasSelection = n);
              } else
                t ||
                  ((this.prevInput = this.textarea.value = ""),
                  s && a >= 9 && (this.hasSelection = null));
              this.resetting = !1;
            }
          }),
          (qs.prototype.getField = function () {
            return this.textarea;
          }),
          (qs.prototype.supportsTouch = function () {
            return !1;
          }),
          (qs.prototype.focus = function () {
            if (
              "nocursor" != this.cm.options.readOnly &&
              (!v || R(this.textarea.ownerDocument) != this.textarea)
            )
              try {
                this.textarea.focus();
              } catch (t) {}
          }),
          (qs.prototype.blur = function () {
            this.textarea.blur();
          }),
          (qs.prototype.resetPosition = function () {
            this.wrapper.style.top = this.wrapper.style.left = 0;
          }),
          (qs.prototype.receivedFocus = function () {
            this.slowPoll();
          }),
          (qs.prototype.slowPoll = function () {
            var t = this;
            this.pollingFast ||
              this.polling.set(this.cm.options.pollInterval, function () {
                t.poll(), t.cm.state.focused && t.slowPoll();
              });
          }),
          (qs.prototype.fastPoll = function () {
            var t = !1,
              e = this;
            (e.pollingFast = !0),
              e.polling.set(20, function n() {
                e.poll() || t
                  ? ((e.pollingFast = !1), e.slowPoll())
                  : ((t = !0), e.polling.set(60, n));
              });
          }),
          (qs.prototype.poll = function () {
            var t = this,
              e = this.cm,
              n = this.textarea,
              i = this.prevInput;
            if (
              this.contextMenuPending ||
              this.resetting ||
              !e.state.focused ||
              (Pt(n) && !i && !this.composing) ||
              e.isReadOnly() ||
              e.options.disableInput ||
              e.state.keySeq
            )
              return !1;
            var r = n.value;
            if (r == i && !e.somethingSelected()) return !1;
            if (
              (s && a >= 9 && this.hasSelection === r) ||
              (y && /[\uf700-\uf7ff]/.test(r))
            )
              return e.display.input.reset(), !1;
            if (e.doc.sel == e.display.selForContextMenu) {
              var o = r.charCodeAt(0);
              if ((8203 != o || i || (i = "​"), 8666 == o))
                return this.reset(), this.cm.execCommand("undo");
            }
            for (
              var u = 0, l = Math.min(i.length, r.length);
              u < l && i.charCodeAt(u) == r.charCodeAt(u);

            )
              ++u;
            return (
              nr(e, function () {
                Ws(
                  e,
                  r.slice(u),
                  i.length - u,
                  null,
                  t.composing ? "*compose" : null,
                ),
                  r.length > 1e3 || r.indexOf("\n") > -1
                    ? (n.value = t.prevInput = "")
                    : (t.prevInput = r),
                  t.composing &&
                    (t.composing.range.clear(),
                    (t.composing.range = e.markText(
                      t.composing.start,
                      e.getCursor("to"),
                      { className: "CodeMirror-composing" },
                    )));
              }),
              !0
            );
          }),
          (qs.prototype.ensurePolled = function () {
            this.pollingFast && this.poll() && (this.pollingFast = !1);
          }),
          (qs.prototype.onKeyPress = function () {
            s && a >= 9 && (this.hasSelection = null), this.fastPoll();
          }),
          (qs.prototype.onContextMenu = function (t) {
            var e = this,
              n = e.cm,
              i = n.display,
              r = e.textarea;
            e.contextMenuPending && e.contextMenuPending();
            var o = pi(n, t),
              l = i.scroller.scrollTop;
            if (o && !p) {
              n.options.resetSelectionOnContextMenu &&
                -1 == n.doc.sel.contains(o) &&
                ir(n, io)(n.doc, Er(o), K);
              var c,
                h = r.style.cssText,
                d = e.wrapper.style.cssText,
                _ = e.wrapper.offsetParent.getBoundingClientRect();
              if (
                ((e.wrapper.style.cssText = "position: static"),
                (r.style.cssText =
                  "position: absolute; width: 30px; height: 30px;\n      top: " +
                  (t.clientY - _.top - 5) +
                  "px; left: " +
                  (t.clientX - _.left - 5) +
                  "px;\n      z-index: 1000; background: " +
                  (s ? "rgba(255, 255, 255, .05)" : "transparent") +
                  ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);"),
                u && (c = r.ownerDocument.defaultView.scrollY),
                i.input.focus(),
                u && r.ownerDocument.defaultView.scrollTo(null, c),
                i.input.reset(),
                n.somethingSelected() || (r.value = e.prevInput = " "),
                (e.contextMenuPending = m),
                (i.selForContextMenu = n.doc.sel),
                clearTimeout(i.detectingSelectAll),
                s && a >= 9 && g(),
                C)
              ) {
                Tt(t);
                var f = function () {
                  gt(window, "mouseup", f), setTimeout(m, 20);
                };
                _t(window, "mouseup", f);
              } else setTimeout(m, 50);
            }
            function g() {
              if (null != r.selectionStart) {
                var t = n.somethingSelected(),
                  o = "​" + (t ? r.value : "");
                (r.value = "⇚"),
                  (r.value = o),
                  (e.prevInput = t ? "" : "​"),
                  (r.selectionStart = 1),
                  (r.selectionEnd = o.length),
                  (i.selForContextMenu = n.doc.sel);
              }
            }
            function m() {
              if (
                e.contextMenuPending == m &&
                ((e.contextMenuPending = !1),
                (e.wrapper.style.cssText = d),
                (r.style.cssText = h),
                s &&
                  a < 9 &&
                  i.scrollbars.setScrollTop((i.scroller.scrollTop = l)),
                null != r.selectionStart)
              ) {
                (!s || (s && a < 9)) && g();
                var t = 0,
                  o = function () {
                    i.selForContextMenu == n.doc.sel &&
                    0 == r.selectionStart &&
                    r.selectionEnd > 0 &&
                    "​" == e.prevInput
                      ? ir(n, ho)(n)
                      : t++ < 10
                        ? (i.detectingSelectAll = setTimeout(o, 500))
                        : ((i.selForContextMenu = null), i.input.reset());
                  };
                i.detectingSelectAll = setTimeout(o, 200);
              }
            }
          }),
          (qs.prototype.readOnlyChanged = function (t) {
            t || this.reset(),
              (this.textarea.disabled = "nocursor" == t),
              (this.textarea.readOnly = !!t);
          }),
          (qs.prototype.setUneditable = function () {}),
          (qs.prototype.needsContentAttribute = !1),
          (function (t) {
            var e = t.optionHandlers;
            function n(n, i, r, o) {
              (t.defaults[n] = i),
                r &&
                  (e[n] = o
                    ? function (t, e, n) {
                        n != Ss && r(t, e, n);
                      }
                    : r);
            }
            (t.defineOption = n),
              (t.Init = Ss),
              n(
                "value",
                "",
                function (t, e) {
                  return t.setValue(e);
                },
                !0,
              ),
              n(
                "mode",
                null,
                function (t, e) {
                  (t.doc.modeOption = e), Dr(t);
                },
                !0,
              ),
              n("indentUnit", 2, Dr, !0),
              n("indentWithTabs", !1),
              n("smartIndent", !0),
              n(
                "tabSize",
                4,
                function (t) {
                  Pr(t), Un(t), _i(t);
                },
                !0,
              ),
              n("lineSeparator", null, function (t, e) {
                if (((t.doc.lineSep = e), e)) {
                  var n = [],
                    i = t.doc.first;
                  t.doc.iter(function (t) {
                    for (var r = 0; ; ) {
                      var o = t.text.indexOf(e, r);
                      if (-1 == o) break;
                      (r = o + e.length), n.push(ie(i, o));
                    }
                    i++;
                  });
                  for (var r = n.length - 1; r >= 0; r--)
                    yo(t.doc, e, n[r], ie(n[r].line, n[r].ch + e.length));
                }
              }),
              n(
                "specialChars",
                /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]/g,
                function (t, e, n) {
                  (t.state.specialChars = new RegExp(
                    e.source + (e.test("\t") ? "" : "|\t"),
                    "g",
                  )),
                    n != Ss && t.refresh();
                },
              ),
              n(
                "specialCharPlaceholder",
                en,
                function (t) {
                  return t.refresh();
                },
                !0,
              ),
              n("electricChars", !0),
              n(
                "inputStyle",
                v ? "contenteditable" : "textarea",
                function () {
                  throw new Error(
                    "inputStyle can not (yet) be changed in a running editor",
                  );
                },
                !0,
              ),
              n(
                "spellcheck",
                !1,
                function (t, e) {
                  return (t.getInputField().spellcheck = e);
                },
                !0,
              ),
              n(
                "autocorrect",
                !1,
                function (t, e) {
                  return (t.getInputField().autocorrect = e);
                },
                !0,
              ),
              n(
                "autocapitalize",
                !1,
                function (t, e) {
                  return (t.getInputField().autocapitalize = e);
                },
                !0,
              ),
              n("rtlMoveVisually", !w),
              n("wholeLineUpdateBefore", !0),
              n(
                "theme",
                "default",
                function (t) {
                  Ts(t), yr(t);
                },
                !0,
              ),
              n("keyMap", "default", function (t, e, n) {
                var i = ts(e),
                  r = n != Ss && ts(n);
                r && r.detach && r.detach(t, i),
                  i.attach && i.attach(t, r || null);
              }),
              n("extraKeys", null),
              n("configureMouse", null),
              n("lineWrapping", !1, Ls, !0),
              n(
                "gutters",
                [],
                function (t, e) {
                  (t.display.gutterSpecs = mr(e, t.options.lineNumbers)), yr(t);
                },
                !0,
              ),
              n(
                "fixedGutter",
                !0,
                function (t, e) {
                  (t.display.gutters.style.left = e
                    ? li(t.display) + "px"
                    : "0"),
                    t.refresh();
                },
                !0,
              ),
              n(
                "coverGutterNextToScrollbar",
                !1,
                function (t) {
                  return Vi(t);
                },
                !0,
              ),
              n(
                "scrollbarStyle",
                "native",
                function (t) {
                  Xi(t),
                    Vi(t),
                    t.display.scrollbars.setScrollTop(t.doc.scrollTop),
                    t.display.scrollbars.setScrollLeft(t.doc.scrollLeft);
                },
                !0,
              ),
              n(
                "lineNumbers",
                !1,
                function (t, e) {
                  (t.display.gutterSpecs = mr(t.options.gutters, e)), yr(t);
                },
                !0,
              ),
              n("firstLineNumber", 1, yr, !0),
              n(
                "lineNumberFormatter",
                function (t) {
                  return t;
                },
                yr,
                !0,
              ),
              n("showCursorWhenSelecting", !1, yi, !0),
              n("resetSelectionOnContextMenu", !0),
              n("lineWiseCopyCut", !0),
              n("pasteLinesPerSelection", !0),
              n("selectionsMayTouch", !1),
              n("readOnly", !1, function (t, e) {
                "nocursor" == e && (Oi(t), t.display.input.blur()),
                  t.display.input.readOnlyChanged(e);
              }),
              n("screenReaderLabel", null, function (t, e) {
                (e = "" === e ? null : e),
                  t.display.input.screenReaderLabelChanged(e);
              }),
              n(
                "disableInput",
                !1,
                function (t, e) {
                  e || t.display.input.reset();
                },
                !0,
              ),
              n("dragDrop", !0, Es),
              n("allowDropFileTypes", null),
              n("cursorBlinkRate", 530),
              n("cursorScrollMargin", 0),
              n("cursorHeight", 1, yi, !0),
              n("singleCursorHeightPerLine", !0, yi, !0),
              n("workTime", 100),
              n("workDelay", 100),
              n("flattenSpans", !0, Pr, !0),
              n("addModeClass", !1, Pr, !0),
              n("pollInterval", 100),
              n("undoDepth", 200, function (t, e) {
                return (t.doc.history.undoDepth = e);
              }),
              n("historyEventDelay", 1250),
              n(
                "viewportMargin",
                10,
                function (t) {
                  return t.refresh();
                },
                !0,
              ),
              n("maxHighlightLength", 1e4, Pr, !0),
              n("moveInputWithCursor", !0, function (t, e) {
                e || t.display.input.resetPosition();
              }),
              n("tabindex", null, function (t, e) {
                return (t.display.input.getField().tabIndex = e || "");
              }),
              n("autofocus", null),
              n(
                "direction",
                "ltr",
                function (t, e) {
                  return t.doc.setDirection(e);
                },
                !0,
              ),
              n("phrases", null);
          })(As),
          (function (t) {
            var e = t.optionHandlers,
              n = (t.helpers = {});
            (t.prototype = {
              constructor: t,
              focus: function () {
                z(this).focus(), this.display.input.focus();
              },
              setOption: function (t, n) {
                var i = this.options,
                  r = i[t];
                (i[t] == n && "mode" != t) ||
                  ((i[t] = n),
                  e.hasOwnProperty(t) && ir(this, e[t])(this, n, r),
                  mt(this, "optionChange", this, t));
              },
              getOption: function (t) {
                return this.options[t];
              },
              getDoc: function () {
                return this.doc;
              },
              addKeyMap: function (t, e) {
                this.state.keyMaps[e ? "push" : "unshift"](ts(t));
              },
              removeKeyMap: function (t) {
                for (var e = this.state.keyMaps, n = 0; n < e.length; ++n)
                  if (e[n] == t || e[n].name == t) return e.splice(n, 1), !0;
              },
              addOverlay: rr(function (e, n) {
                var i = e.token ? e : t.getMode(this.options, e);
                if (i.startState)
                  throw new Error("Overlays may not be stateful.");
                !(function (t, e, n) {
                  for (var i = 0, r = n(e); i < t.length && n(t[i]) <= r; ) i++;
                  t.splice(i, 0, e);
                })(
                  this.state.overlays,
                  {
                    mode: i,
                    modeSpec: e,
                    opaque: n && n.opaque,
                    priority: (n && n.priority) || 0,
                  },
                  function (t) {
                    return t.priority;
                  },
                ),
                  this.state.modeGen++,
                  _i(this);
              }),
              removeOverlay: rr(function (t) {
                for (var e = this.state.overlays, n = 0; n < e.length; ++n) {
                  var i = e[n].modeSpec;
                  if (i == t || ("string" == typeof t && i.name == t))
                    return e.splice(n, 1), this.state.modeGen++, void _i(this);
                }
              }),
              indentLine: rr(function (t, e, n) {
                "string" != typeof e &&
                  "number" != typeof e &&
                  (e =
                    null == e
                      ? this.options.smartIndent
                        ? "smart"
                        : "prev"
                      : e
                        ? "add"
                        : "subtract"),
                  ee(this.doc, t) && Rs(this, t, e, n);
              }),
              indentSelection: rr(function (t) {
                for (
                  var e = this.doc.sel.ranges, n = -1, i = 0;
                  i < e.length;
                  i++
                ) {
                  var r = e[i];
                  if (r.empty())
                    r.head.line > n &&
                      (Rs(this, r.head.line, t, !0),
                      (n = r.head.line),
                      i == this.doc.sel.primIndex && Di(this));
                  else {
                    var o = r.from(),
                      s = r.to(),
                      a = Math.max(n, o.line);
                    n = Math.min(this.lastLine(), s.line - (s.ch ? 0 : 1)) + 1;
                    for (var u = a; u < n; ++u) Rs(this, u, t);
                    var l = this.doc.sel.ranges;
                    0 == o.ch &&
                      e.length == l.length &&
                      l[i].from().ch > 0 &&
                      to(this.doc, i, new Mr(o, l[i].to()), K);
                  }
                }
              }),
              getTokenAt: function (t, e) {
                return we(this, t, e);
              },
              getLineTokens: function (t, e) {
                return we(this, ie(t), e, !0);
              },
              getTokenTypeAt: function (t) {
                t = ce(this.doc, t);
                var e,
                  n = fe(this, qt(this.doc, t.line)),
                  i = 0,
                  r = (n.length - 1) / 2,
                  o = t.ch;
                if (0 == o) e = n[2];
                else
                  for (;;) {
                    var s = (i + r) >> 1;
                    if ((s ? n[2 * s - 1] : 0) >= o) r = s;
                    else {
                      if (!(n[2 * s + 1] < o)) {
                        e = n[2 * s + 2];
                        break;
                      }
                      i = s + 1;
                    }
                  }
                var a = e ? e.indexOf("overlay ") : -1;
                return a < 0 ? e : 0 == a ? null : e.slice(0, a - 1);
              },
              getModeAt: function (e) {
                var n = this.doc.mode;
                return n.innerMode
                  ? t.innerMode(n, this.getTokenAt(e).state).mode
                  : n;
              },
              getHelper: function (t, e) {
                return this.getHelpers(t, e)[0];
              },
              getHelpers: function (t, e) {
                var i = [];
                if (!n.hasOwnProperty(e)) return i;
                var r = n[e],
                  o = this.getModeAt(t);
                if ("string" == typeof o[e]) r[o[e]] && i.push(r[o[e]]);
                else if (o[e])
                  for (var s = 0; s < o[e].length; s++) {
                    var a = r[o[e][s]];
                    a && i.push(a);
                  }
                else
                  o.helperType && r[o.helperType]
                    ? i.push(r[o.helperType])
                    : r[o.name] && i.push(r[o.name]);
                for (var u = 0; u < r._global.length; u++) {
                  var l = r._global[u];
                  l.pred(o, this) && -1 == U(i, l.val) && i.push(l.val);
                }
                return i;
              },
              getStateAfter: function (t, e) {
                var n = this.doc;
                return ge(
                  this,
                  (t = le(n, null == t ? n.first + n.size - 1 : t)) + 1,
                  e,
                ).state;
              },
              cursorCoords: function (t, e) {
                var n = this.doc.sel.primary();
                return Yn(
                  this,
                  null == t
                    ? n.head
                    : "object" == typeof t
                      ? ce(this.doc, t)
                      : t
                        ? n.from()
                        : n.to(),
                  e || "page",
                );
              },
              charCoords: function (t, e) {
                return qn(this, ce(this.doc, t), e || "page");
              },
              coordsChar: function (t, e) {
                return Jn(this, (t = $n(this, t, e || "page")).left, t.top);
              },
              lineAtHeight: function (t, e) {
                return (
                  (t = $n(this, { top: t, left: 0 }, e || "page").top),
                  te(this.doc, t + this.display.viewOffset)
                );
              },
              heightAtLine: function (t, e, n) {
                var i,
                  r = !1;
                if ("number" == typeof t) {
                  var o = this.doc.first + this.doc.size - 1;
                  t < this.doc.first
                    ? (t = this.doc.first)
                    : t > o && ((t = o), (r = !0)),
                    (i = qt(this.doc, t));
                } else i = t;
                return (
                  Xn(this, i, { top: 0, left: 0 }, e || "page", n || r).top +
                  (r ? this.doc.height - Ge(i) : 0)
                );
              },
              defaultTextHeight: function () {
                return si(this.display);
              },
              defaultCharWidth: function () {
                return ai(this.display);
              },
              getViewport: function () {
                return { from: this.display.viewFrom, to: this.display.viewTo };
              },
              addWidget: function (t, e, n, i, r) {
                var o,
                  s,
                  a,
                  u = this.display,
                  l = (t = Yn(this, ce(this.doc, t))).bottom,
                  c = t.left;
                if (
                  ((e.style.position = "absolute"),
                  e.setAttribute("cm-ignore-events", "true"),
                  this.display.input.setUneditable(e),
                  u.sizer.appendChild(e),
                  "over" == i)
                )
                  l = t.top;
                else if ("above" == i || "near" == i) {
                  var h = Math.max(u.wrapper.clientHeight, this.doc.height),
                    p = Math.max(u.sizer.clientWidth, u.lineSpace.clientWidth);
                  ("above" == i || t.bottom + e.offsetHeight > h) &&
                  t.top > e.offsetHeight
                    ? (l = t.top - e.offsetHeight)
                    : t.bottom + e.offsetHeight <= h && (l = t.bottom),
                    c + e.offsetWidth > p && (c = p - e.offsetWidth);
                }
                (e.style.top = l + "px"),
                  (e.style.left = e.style.right = ""),
                  "right" == r
                    ? ((c = u.sizer.clientWidth - e.offsetWidth),
                      (e.style.right = "0px"))
                    : ("left" == r
                        ? (c = 0)
                        : "middle" == r &&
                          (c = (u.sizer.clientWidth - e.offsetWidth) / 2),
                      (e.style.left = c + "px")),
                  n &&
                    ((o = this),
                    (s = {
                      left: c,
                      top: l,
                      right: c + e.offsetWidth,
                      bottom: l + e.offsetHeight,
                    }),
                    null != (a = Ni(o, s)).scrollTop && zi(o, a.scrollTop),
                    null != a.scrollLeft && Fi(o, a.scrollLeft));
              },
              triggerOnKeyDown: rr(_s),
              triggerOnKeyPress: rr(gs),
              triggerOnKeyUp: fs,
              triggerOnMouseDown: rr(bs),
              execCommand: function (t) {
                if (os.hasOwnProperty(t)) return os[t].call(null, this);
              },
              triggerElectric: rr(function (t) {
                zs(this, t);
              }),
              findPosH: function (t, e, n, i) {
                var r = 1;
                e < 0 && ((r = -1), (e = -e));
                for (
                  var o = ce(this.doc, t), s = 0;
                  s < e && !(o = Bs(this.doc, o, r, n, i)).hitSide;
                  ++s
                );
                return o;
              },
              moveH: rr(function (t, e) {
                var n = this;
                this.extendSelectionsBy(function (i) {
                  return n.display.shift || n.doc.extend || i.empty()
                    ? Bs(n.doc, i.head, t, e, n.options.rtlMoveVisually)
                    : t < 0
                      ? i.from()
                      : i.to();
                }, X);
              }),
              deleteH: rr(function (t, e) {
                var n = this.doc.sel,
                  i = this.doc;
                n.somethingSelected()
                  ? i.replaceSelection("", null, "+delete")
                  : es(this, function (n) {
                      var r = Bs(i, n.head, t, e, !1);
                      return t < 0
                        ? { from: r, to: n.head }
                        : { from: n.head, to: r };
                    });
              }),
              findPosV: function (t, e, n, i) {
                var r = 1,
                  o = i;
                e < 0 && ((r = -1), (e = -e));
                for (var s = ce(this.doc, t), a = 0; a < e; ++a) {
                  var u = Yn(this, s, "div");
                  if (
                    (null == o ? (o = u.left) : (u.left = o),
                    (s = Us(this, u, r, n)).hitSide)
                  )
                    break;
                }
                return s;
              },
              moveV: rr(function (t, e) {
                var n = this,
                  i = this.doc,
                  r = [],
                  o =
                    !this.display.shift &&
                    !i.extend &&
                    i.sel.somethingSelected();
                if (
                  (i.extendSelectionsBy(function (s) {
                    if (o) return t < 0 ? s.from() : s.to();
                    var a = Yn(n, s.head, "div");
                    null != s.goalColumn && (a.left = s.goalColumn),
                      r.push(a.left);
                    var u = Us(n, a, t, e);
                    return (
                      "page" == e &&
                        s == i.sel.primary() &&
                        Ri(n, qn(n, u, "div").top - a.top),
                      u
                    );
                  }, X),
                  r.length)
                )
                  for (var s = 0; s < i.sel.ranges.length; s++)
                    i.sel.ranges[s].goalColumn = r[s];
              }),
              findWordAt: function (t) {
                var e = qt(this.doc, t.line).text,
                  n = t.ch,
                  i = t.ch;
                if (e) {
                  var r = this.getHelper(t, "wordChars");
                  ("before" != t.sticky && i != e.length) || !n ? ++i : --n;
                  for (
                    var o = e.charAt(n),
                      s = it(o, r)
                        ? function (t) {
                            return it(t, r);
                          }
                        : /\s/.test(o)
                          ? function (t) {
                              return /\s/.test(t);
                            }
                          : function (t) {
                              return !/\s/.test(t) && !it(t);
                            };
                    n > 0 && s(e.charAt(n - 1));

                  )
                    --n;
                  for (; i < e.length && s(e.charAt(i)); ) ++i;
                }
                return new Mr(ie(t.line, n), ie(t.line, i));
              },
              toggleOverwrite: function (t) {
                (null != t && t == this.state.overwrite) ||
                  ((this.state.overwrite = !this.state.overwrite)
                    ? D(this.display.cursorDiv, "CodeMirror-overwrite")
                    : M(this.display.cursorDiv, "CodeMirror-overwrite"),
                  mt(this, "overwriteToggle", this, this.state.overwrite));
              },
              hasFocus: function () {
                return this.display.input.getField() == R(I(this));
              },
              isReadOnly: function () {
                return !(!this.options.readOnly && !this.doc.cantEdit);
              },
              scrollTo: rr(function (t, e) {
                Pi(this, t, e);
              }),
              getScrollInfo: function () {
                var t = this.display.scroller;
                return {
                  left: t.scrollLeft,
                  top: t.scrollTop,
                  height: t.scrollHeight - En(this) - this.display.barHeight,
                  width: t.scrollWidth - En(this) - this.display.barWidth,
                  clientHeight: An(this),
                  clientWidth: Ln(this),
                };
              },
              scrollIntoView: rr(function (t, e) {
                null == t
                  ? ((t = { from: this.doc.sel.primary().head, to: null }),
                    null == e && (e = this.options.cursorScrollMargin))
                  : "number" == typeof t
                    ? (t = { from: ie(t, 0), to: null })
                    : null == t.from && (t = { from: t, to: null }),
                  t.to || (t.to = t.from),
                  (t.margin = e || 0),
                  null != t.from.line
                    ? (function (t, e) {
                        Wi(t), (t.curOp.scrollToPos = e);
                      })(this, t)
                    : Ii(this, t.from, t.to, t.margin);
              }),
              setSize: rr(function (t, e) {
                var n = this,
                  i = function (t) {
                    return "number" == typeof t || /^\d+$/.test(String(t))
                      ? t + "px"
                      : t;
                  };
                null != t && (this.display.wrapper.style.width = i(t)),
                  null != e && (this.display.wrapper.style.height = i(e)),
                  this.options.lineWrapping && Bn(this);
                var r = this.display.viewFrom;
                this.doc.iter(r, this.display.viewTo, function (t) {
                  if (t.widgets)
                    for (var e = 0; e < t.widgets.length; e++)
                      if (t.widgets[e].noHScroll) {
                        fi(n, r, "widget");
                        break;
                      }
                  ++r;
                }),
                  (this.curOp.forceUpdate = !0),
                  mt(this, "refresh", this);
              }),
              operation: function (t) {
                return nr(this, t);
              },
              startOperation: function () {
                return qi(this);
              },
              endOperation: function () {
                return Yi(this);
              },
              refresh: rr(function () {
                var t = this.display.cachedTextHeight;
                _i(this),
                  (this.curOp.forceUpdate = !0),
                  Un(this),
                  Pi(this, this.doc.scrollLeft, this.doc.scrollTop),
                  dr(this.display),
                  (null == t ||
                    Math.abs(t - si(this.display)) > 0.5 ||
                    this.options.lineWrapping) &&
                    hi(this),
                  mt(this, "refresh", this);
              }),
              swapDoc: rr(function (t) {
                var e = this.doc;
                return (
                  (e.cm = null),
                  this.state.selectingText && this.state.selectingText(),
                  jr(this, t),
                  Un(this),
                  this.display.input.reset(),
                  Pi(this, t.scrollLeft, t.scrollTop),
                  (this.curOp.forceScroll = !0),
                  hn(this, "swapDoc", this, e),
                  e
                );
              }),
              phrase: function (t) {
                var e = this.options.phrases;
                return e && Object.prototype.hasOwnProperty.call(e, t)
                  ? e[t]
                  : t;
              },
              getInputField: function () {
                return this.display.input.getField();
              },
              getWrapperElement: function () {
                return this.display.wrapper;
              },
              getScrollerElement: function () {
                return this.display.scroller;
              },
              getGutterElement: function () {
                return this.display.gutters;
              },
            }),
              wt(t),
              (t.registerHelper = function (e, i, r) {
                n.hasOwnProperty(e) || (n[e] = t[e] = { _global: [] }),
                  (n[e][i] = r);
              }),
              (t.registerGlobalHelper = function (e, i, r, o) {
                t.registerHelper(e, i, o),
                  n[e]._global.push({ pred: r, val: o });
              });
          })(As);
        var Ys = "iter insert remove copy getEditor constructor".split(" ");
        for (var Qs in Po.prototype)
          Po.prototype.hasOwnProperty(Qs) &&
            U(Ys, Qs) < 0 &&
            (As.prototype[Qs] = (function (t) {
              return function () {
                return t.apply(this.doc, arguments);
              };
            })(Po.prototype[Qs]));
        return (
          wt(Po),
          (As.inputStyles = { textarea: qs, contenteditable: Vs }),
          (As.defineMode = function (t) {
            As.defaults.mode || "null" == t || (As.defaults.mode = t),
              Ft.apply(this, arguments);
          }),
          (As.defineMIME = function (t, e) {
            jt[t] = e;
          }),
          As.defineMode("null", function () {
            return {
              token: function (t) {
                return t.skipToEnd();
              },
            };
          }),
          As.defineMIME("text/plain", "null"),
          (As.defineExtension = function (t, e) {
            As.prototype[t] = e;
          }),
          (As.defineDocExtension = function (t, e) {
            Po.prototype[t] = e;
          }),
          (As.fromTextArea = function (t, e) {
            if (
              (((e = e ? F(e) : {}).value = t.value),
              !e.tabindex && t.tabIndex && (e.tabindex = t.tabIndex),
              !e.placeholder &&
                t.placeholder &&
                (e.placeholder = t.placeholder),
              null == e.autofocus)
            ) {
              var n = R(t.ownerDocument);
              e.autofocus =
                n == t ||
                (null != t.getAttribute("autofocus") && n == document.body);
            }
            function i() {
              t.value = a.getValue();
            }
            var r;
            if (
              t.form &&
              (_t(t.form, "submit", i), !e.leaveSubmitMethodAlone)
            ) {
              var o = t.form;
              r = o.submit;
              try {
                var s = (o.submit = function () {
                  i(), (o.submit = r), o.submit(), (o.submit = s);
                });
              } catch (t) {}
            }
            (e.finishInit = function (n) {
              (n.save = i),
                (n.getTextArea = function () {
                  return t;
                }),
                (n.toTextArea = function () {
                  (n.toTextArea = isNaN),
                    i(),
                    t.parentNode.removeChild(n.getWrapperElement()),
                    (t.style.display = ""),
                    t.form &&
                      (gt(t.form, "submit", i),
                      e.leaveSubmitMethodAlone ||
                        "function" != typeof t.form.submit ||
                        (t.form.submit = r));
                });
            }),
              (t.style.display = "none");
            var a = As(function (e) {
              return t.parentNode.insertBefore(e, t.nextSibling);
            }, e);
            return a;
          }),
          (function (t) {
            (t.off = gt),
              (t.on = _t),
              (t.wheelEventPixels = Cr),
              (t.Doc = Po),
              (t.splitLines = Dt),
              (t.countColumn = H),
              (t.findColumn = $),
              (t.isWordChar = nt),
              (t.Pass = V),
              (t.signal = mt),
              (t.Line = qe),
              (t.changeEnd = Lr),
              (t.scrollbarModel = Gi),
              (t.Pos = ie),
              (t.cmpPos = re),
              (t.modes = zt),
              (t.mimeModes = jt),
              (t.resolveMode = Ht),
              (t.getMode = Bt),
              (t.modeExtensions = Ut),
              (t.extendMode = Vt),
              (t.copyState = Kt),
              (t.startState = Xt),
              (t.innerMode = Gt),
              (t.commands = os),
              (t.keyMap = Xo),
              (t.keyName = Jo),
              (t.isModifierKey = Qo),
              (t.lookupKey = Yo),
              (t.normalizeKeyMap = qo),
              (t.StringStream = $t),
              (t.SharedTextMarker = Ao),
              (t.TextMarker = Eo),
              (t.LineWidget = So),
              (t.e_preventDefault = xt),
              (t.e_stopPropagation = kt),
              (t.e_stop = Tt),
              (t.addClass = D),
              (t.contains = N),
              (t.rmClass = M),
              (t.keyNames = Uo);
          })(As),
          (As.version = "5.65.10"),
          As
        );
      })();
    },
    function (t, e) {
      var n,
        i,
        r = (t.exports = {});
      function o() {
        throw new Error("setTimeout has not been defined");
      }
      function s() {
        throw new Error("clearTimeout has not been defined");
      }
      function a(t) {
        if (n === setTimeout) return setTimeout(t, 0);
        if ((n === o || !n) && setTimeout)
          return (n = setTimeout), setTimeout(t, 0);
        try {
          return n(t, 0);
        } catch (e) {
          try {
            return n.call(null, t, 0);
          } catch (e) {
            return n.call(this, t, 0);
          }
        }
      }
      !(function () {
        try {
          n = "function" == typeof setTimeout ? setTimeout : o;
        } catch (t) {
          n = o;
        }
        try {
          i = "function" == typeof clearTimeout ? clearTimeout : s;
        } catch (t) {
          i = s;
        }
      })();
      var u,
        l = [],
        c = !1,
        h = -1;
      function p() {
        c &&
          u &&
          ((c = !1), u.length ? (l = u.concat(l)) : (h = -1), l.length && d());
      }
      function d() {
        if (!c) {
          var t = a(p);
          c = !0;
          for (var e = l.length; e; ) {
            for (u = l, l = []; ++h < e; ) u && u[h].run();
            (h = -1), (e = l.length);
          }
          (u = null),
            (c = !1),
            (function (t) {
              if (i === clearTimeout) return clearTimeout(t);
              if ((i === s || !i) && clearTimeout)
                return (i = clearTimeout), clearTimeout(t);
              try {
                i(t);
              } catch (e) {
                try {
                  return i.call(null, t);
                } catch (e) {
                  return i.call(this, t);
                }
              }
            })(t);
        }
      }
      function _(t, e) {
        (this.fun = t), (this.array = e);
      }
      function f() {}
      (r.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        l.push(new _(t, e)), 1 !== l.length || c || a(d);
      }),
        (_.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (r.title = "browser"),
        (r.browser = !0),
        (r.env = {}),
        (r.argv = []),
        (r.version = ""),
        (r.versions = {}),
        (r.on = f),
        (r.addListener = f),
        (r.once = f),
        (r.off = f),
        (r.removeListener = f),
        (r.removeAllListeners = f),
        (r.emit = f),
        (r.prependListener = f),
        (r.prependOnceListener = f),
        (r.listeners = function (t) {
          return [];
        }),
        (r.binding = function (t) {
          throw new Error("process.binding is not supported");
        }),
        (r.cwd = function () {
          return "/";
        }),
        (r.chdir = function (t) {
          throw new Error("process.chdir is not supported");
        }),
        (r.umask = function () {
          return 0;
        });
    },
    function (t, e, n) {
      var i = n(8),
        r = n(17);
      (e = function (t, e) {
        return function (n) {
          return (
            r(arguments, function (o, s) {
              if (0 !== s) {
                var a = t(o);
                r(a, function (t) {
                  (e && !i(n[t])) || (n[t] = o[t]);
                });
              }
            }),
            n
          );
        };
      }),
        (t.exports = e);
    },
    function (t, e, n) {
      var i = n(43),
        r = n(5),
        o = n(19);
      (e = function (t, e, n) {
        var s, a;
        if (((e = o(e, n)), i(t)))
          for (s = 0, a = t.length; s < a; s++) e(t[s], s, t);
        else {
          var u = r(t);
          for (s = 0, a = u.length; s < a; s++) e(t[u[s]], u[s], t);
        }
        return t;
      }),
        (t.exports = e);
    },
    function (t, e) {
      var n = Object.prototype.hasOwnProperty;
      (e = function (t, e) {
        return n.call(t, e);
      }),
        (t.exports = e);
    },
    function (t, e, n) {
      var i = n(8);
      (e = function (t, e, n) {
        if (i(e)) return t;
        switch (null == n ? 3 : n) {
          case 1:
            return function (n) {
              return t.call(e, n);
            };
          case 3:
            return function (n, i, r) {
              return t.call(e, n, i, r);
            };
          case 4:
            return function (n, i, r, o) {
              return t.call(e, n, i, r, o);
            };
        }
        return function () {
          return t.apply(e, arguments);
        };
      }),
        (t.exports = e);
    },
    function (t, e) {
      (e = function (t) {
        var e = typeof t;
        return !!t && ("function" === e || "object" === e);
      }),
        (t.exports = e);
    },
    function (t, e, n) {
      "use strict";
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      (e.__esModule = !0), (e.HandlebarsEnvironment = c);
      var r = n(0),
        o = i(n(2)),
        s = n(22),
        a = n(73),
        u = i(n(23)),
        l = n(24);
      e.VERSION = "4.7.7";
      e.COMPILER_REVISION = 8;
      e.LAST_COMPATIBLE_COMPILER_REVISION = 7;
      e.REVISION_CHANGES = {
        1: "<= 1.0.rc.2",
        2: "== 1.0.0-rc.3",
        3: "== 1.0.0-rc.4",
        4: "== 1.x.x",
        5: "== 2.0.0-alpha.x",
        6: ">= 2.0.0-beta.1",
        7: ">= 4.0.0 <4.3.0",
        8: ">= 4.3.0",
      };
      function c(t, e, n) {
        (this.helpers = t || {}),
          (this.partials = e || {}),
          (this.decorators = n || {}),
          s.registerDefaultHelpers(this),
          a.registerDefaultDecorators(this);
      }
      c.prototype = {
        constructor: c,
        logger: u.default,
        log: u.default.log,
        registerHelper: function (t, e) {
          if ("[object Object]" === r.toString.call(t)) {
            if (e)
              throw new o.default("Arg not supported with multiple helpers");
            r.extend(this.helpers, t);
          } else this.helpers[t] = e;
        },
        unregisterHelper: function (t) {
          delete this.helpers[t];
        },
        registerPartial: function (t, e) {
          if ("[object Object]" === r.toString.call(t))
            r.extend(this.partials, t);
          else {
            if (void 0 === e)
              throw new o.default(
                'Attempting to register a partial called "' +
                  t +
                  '" as undefined',
              );
            this.partials[t] = e;
          }
        },
        unregisterPartial: function (t) {
          delete this.partials[t];
        },
        registerDecorator: function (t, e) {
          if ("[object Object]" === r.toString.call(t)) {
            if (e)
              throw new o.default("Arg not supported with multiple decorators");
            r.extend(this.decorators, t);
          } else this.decorators[t] = e;
        },
        unregisterDecorator: function (t) {
          delete this.decorators[t];
        },
        resetLoggedPropertyAccesses: function () {
          l.resetLoggedProperties();
        },
      };
      var h = u.default.log;
      (e.log = h), (e.createFrame = r.createFrame), (e.logger = u.default);
    },
    function (t, e, n) {
      "use strict";
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      (e.__esModule = !0),
        (e.registerDefaultHelpers = function (t) {
          r.default(t),
            o.default(t),
            s.default(t),
            a.default(t),
            u.default(t),
            l.default(t),
            c.default(t);
        }),
        (e.moveHelperToHooks = function (t, e, n) {
          t.helpers[e] &&
            ((t.hooks[e] = t.helpers[e]), n || delete t.helpers[e]);
        });
      var r = i(n(66)),
        o = i(n(67)),
        s = i(n(68)),
        a = i(n(69)),
        u = i(n(70)),
        l = i(n(71)),
        c = i(n(72));
    },
    function (t, e, n) {
      "use strict";
      e.__esModule = !0;
      var i = n(0),
        r = {
          methodMap: ["debug", "info", "warn", "error"],
          level: "info",
          lookupLevel: function (t) {
            if ("string" == typeof t) {
              var e = i.indexOf(r.methodMap, t.toLowerCase());
              t = e >= 0 ? e : parseInt(t, 10);
            }
            return t;
          },
          log: function (t) {
            if (
              ((t = r.lookupLevel(t)),
              "undefined" != typeof console && r.lookupLevel(r.level) <= t)
            ) {
              var e = r.methodMap[t];
              console[e] || (e = "log");
              for (
                var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1;
                o < n;
                o++
              )
                i[o - 1] = arguments[o];
              console[e].apply(console, i);
            }
          },
        };
      (e.default = r), (t.exports = e.default);
    },
    function (t, e, n) {
      "use strict";
      (e.__esModule = !0),
        (e.createProtoAccessControl = function (t) {
          var e = Object.create(null);
          (e.constructor = !1),
            (e.__defineGetter__ = !1),
            (e.__defineSetter__ = !1),
            (e.__lookupGetter__ = !1);
          var n = Object.create(null);
          return (
            (n.__proto__ = !1),
            {
              properties: {
                whitelist: i.createNewLookupObject(n, t.allowedProtoProperties),
                defaultValue: t.allowProtoPropertiesByDefault,
              },
              methods: {
                whitelist: i.createNewLookupObject(e, t.allowedProtoMethods),
                defaultValue: t.allowProtoMethodsByDefault,
              },
            }
          );
        }),
        (e.resultIsAllowed = function (t, e, n) {
          return s("function" == typeof t ? e.methods : e.properties, n);
        }),
        (e.resetLoggedProperties = function () {
          Object.keys(o).forEach(function (t) {
            delete o[t];
          });
        });
      var i = n(75),
        r = (function (t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return (e.default = t), e;
        })(n(23)),
        o = Object.create(null);
      function s(t, e) {
        return void 0 !== t.whitelist[e]
          ? !0 === t.whitelist[e]
          : void 0 !== t.defaultValue
            ? t.defaultValue
            : ((function (t) {
                !0 !== o[t] &&
                  ((o[t] = !0),
                  r.log(
                    "error",
                    'Handlebars: Access has been denied to resolve the property "' +
                      t +
                      '" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details',
                  ));
              })(e),
              !1);
      }
    },
    function (t, e) {
      (t.exports = function (t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e, n) {
      var i = n(34);
      function r(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, i(r.key), r);
        }
      }
      (t.exports = function (t, e, n) {
        return (
          e && r(t.prototype, e),
          n && r(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e, n) {
      var i = n(37);
      (t.exports = function (t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function",
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e && i(t, e);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e, n) {
      var i = n(7).default,
        r = n(38);
      (t.exports = function (t, e) {
        if (e && ("object" === i(e) || "function" == typeof e)) return e;
        if (void 0 !== e)
          throw new TypeError(
            "Derived constructors may only return object or undefined",
          );
        return r(t);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e, n) {
      (function (n, i) {
        function r(t) {
          if ("function" != typeof t)
            throw new TypeError(t + " is not a function");
          return t;
        }
        (e =
          "object" == typeof n && n.nextTick
            ? n.nextTick
            : "function" == typeof i
              ? function (t) {
                  i(r(t));
                }
              : function (t) {
                  setTimeout(r(t), 0);
                }),
          (t.exports = e);
      }).call(this, n(15), n(40).setImmediate);
    },
    function (t, e, n) {
      var i = n(42),
        r = n(57);
      (e = function (t, e) {
        e = e || r;
        var n = document.createElement("textarea"),
          o = document.body;
        i(n.style, {
          fontSize: "12pt",
          border: "0",
          padding: "0",
          margin: "0",
          position: "absolute",
          left: "-9999px",
        }),
          (n.value = t),
          o.appendChild(n),
          n.setAttribute("readonly", ""),
          n.select(),
          n.setSelectionRange(0, t.length);
        try {
          document.execCommand("copy"), e();
        } catch (t) {
          e(t);
        } finally {
          o.removeChild(n);
        }
      }),
        (t.exports = e);
    },
    function (t, e, n) {
      "use strict";
      var i, r;
      (i = [n(12), n(13), n(58)]),
        void 0 ===
          (r = function (t, e, n) {
            return (function (t, e, n) {
              var i = function (e, n) {
                return t.js_beautify(e, n);
              };
              return (
                (i.js = t.js_beautify),
                (i.css = e.css_beautify),
                (i.html = n.html_beautify),
                (i.js_beautify = t.js_beautify),
                (i.css_beautify = e.css_beautify),
                (i.html_beautify = n.html_beautify),
                i
              );
            })(t, e, n);
          }.apply(e, i)) || (t.exports = r);
    },
    function (t, e, n) {
      t.exports = n(33).default;
    },
    function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n(25),
        r = n.n(i),
        o = n(26),
        s = n.n(o),
        a = n(3),
        u = n.n(a),
        l = n(27),
        c = n.n(l),
        h = n(28),
        p = n.n(h),
        d = n(1),
        _ = n.n(d),
        f = n(14),
        g = n.n(f),
        m = (n(39), n(29)),
        v = n.n(m),
        y = n(30),
        b = n.n(y),
        w = n(31),
        x = n.n(w);
      function k(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            i = _()(t);
          if (e) {
            var r = _()(this).constructor;
            n = Reflect.construct(i, arguments, r);
          } else n = i.apply(this, arguments);
          return p()(this, n);
        };
      }
      e.default = function (t) {
        var e = t.util.evalCss,
          i = (function (i) {
            c()(l, i);
            var a = k(l);
            function l() {
              var t;
              return (
                r()(this, l),
                ((t = a.call(this)).name = "code"),
                (t._style = e(n(59))),
                (t._CodeMirrorStyle = e(n(60) + n(61))),
                (t._CodeMirrorCustomStyle = e(n(62))),
                (t._editor = null),
                t
              );
            }
            return (
              s()(l, [
                {
                  key: "init",
                  value: function (t, e) {
                    u()(_()(l.prototype), "init", this).call(this, t, e),
                      t.html(n(63)()),
                      this._bindEvent();
                  },
                },
                {
                  key: "show",
                  value: function () {
                    var t = this;
                    if (
                      (u()(_()(l.prototype), "show", this).call(this),
                      !this._editor)
                    ) {
                      var e = this._$el.find(".eruda-editor").get(0);
                      (this._editor = g.a.fromTextArea(e, {
                        lineNumbers: "true",
                        mode: "javascript",
                      })),
                        v()(function () {
                          return t._editor.refresh();
                        });
                    }
                  },
                },
                {
                  key: "hide",
                  value: function () {
                    u()(_()(l.prototype), "hide", this).call(this);
                  },
                },
                {
                  key: "run",
                  value: function () {
                    try {
                      o(this._editor.getValue());
                    } catch (t) {
                      console.error(t);
                    }
                  },
                },
                {
                  key: "beautify",
                  value: function () {
                    var t = this._editor,
                      e = t.getValue();
                    t.setValue(x()(e));
                  },
                },
                {
                  key: "copy",
                  value: function () {
                    b()(this._editor.getValue()), t.get().notify("Copied");
                  },
                },
                {
                  key: "clear",
                  value: function () {
                    this._editor.setValue("");
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    u()(_()(l.prototype), "destroy", this).call(this),
                      e.remove(this._style),
                      e.remove(this._CodeMirrorStyle),
                      e.remove(this._CodeMirrorCustomStyle);
                  },
                },
                {
                  key: "_bindEvent",
                  value: function () {
                    var t = this;
                    this._$el
                      .on("click", ".eruda-run", function () {
                        return t.run();
                      })
                      .on("click", ".eruda-beautify", function () {
                        return t.beautify();
                      })
                      .on("click", ".eruda-clear", function () {
                        return t.clear();
                      })
                      .on("click", ".eruda-copy", function () {
                        return t.copy();
                      });
                  },
                },
              ]),
              l
            );
          })(t.Tool),
          o = function (t) {
            var e;
            try {
              e = eval.call(window, "(".concat(t, ")"));
            } catch (n) {
              e = eval.call(window, t);
            }
            return e;
          };
        return new i();
      };
    },
    function (t, e, n) {
      var i = n(7).default,
        r = n(35);
      (t.exports = function (t) {
        var e = r(t, "string");
        return "symbol" === i(e) ? e : String(e);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e, n) {
      var i = n(7).default;
      (t.exports = function (t, e) {
        if ("object" !== i(t) || null === t) return t;
        var n = t[Symbol.toPrimitive];
        if (void 0 !== n) {
          var r = n.call(t, e || "default");
          if ("object" !== i(r)) return r;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === e ? String : Number)(t);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e, n) {
      var i = n(1);
      (t.exports = function (t, e) {
        for (
          ;
          !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = i(t));

        );
        return t;
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e) {
      function n(e, i) {
        return (
          (t.exports = n =
            Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports),
          n(e, i)
        );
      }
      (t.exports = n),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e) {
      (t.exports = function (t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e, n) {
      !(function (t) {
        "use strict";
        t.defineMode("javascript", function (e, n) {
          var i,
            r,
            o = e.indentUnit,
            s = n.statementIndent,
            a = n.jsonld,
            u = n.json || a,
            l = !1 !== n.trackScope,
            c = n.typescript,
            h = n.wordCharacters || /[\w$\xa1-\uffff]/,
            p = (function () {
              function t(t) {
                return { type: t, style: "keyword" };
              }
              var e = t("keyword a"),
                n = t("keyword b"),
                i = t("keyword c"),
                r = t("keyword d"),
                o = t("operator"),
                s = { type: "atom", style: "atom" };
              return {
                if: t("if"),
                while: e,
                with: e,
                else: n,
                do: n,
                try: n,
                finally: n,
                return: r,
                break: r,
                continue: r,
                new: t("new"),
                delete: i,
                void: i,
                throw: i,
                debugger: t("debugger"),
                var: t("var"),
                const: t("var"),
                let: t("var"),
                function: t("function"),
                catch: t("catch"),
                for: t("for"),
                switch: t("switch"),
                case: t("case"),
                default: t("default"),
                in: o,
                typeof: o,
                instanceof: o,
                true: s,
                false: s,
                null: s,
                undefined: s,
                NaN: s,
                Infinity: s,
                this: t("this"),
                class: t("class"),
                super: t("atom"),
                yield: i,
                export: t("export"),
                import: t("import"),
                extends: i,
                await: i,
              };
            })(),
            d = /[+\-*&%=<>!?|~^@]/,
            _ =
              /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
          function f(t, e, n) {
            return (i = t), (r = n), e;
          }
          function g(t, e) {
            var n,
              i = t.next();
            if ('"' == i || "'" == i)
              return (
                (e.tokenize =
                  ((n = i),
                  function (t, e) {
                    var i,
                      r = !1;
                    if (a && "@" == t.peek() && t.match(_))
                      return (e.tokenize = g), f("jsonld-keyword", "meta");
                    for (; null != (i = t.next()) && (i != n || r); )
                      r = !r && "\\" == i;
                    return r || (e.tokenize = g), f("string", "string");
                  })),
                e.tokenize(t, e)
              );
            if ("." == i && t.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))
              return f("number", "number");
            if ("." == i && t.match("..")) return f("spread", "meta");
            if (/[\[\]{}\(\),;\:\.]/.test(i)) return f(i);
            if ("=" == i && t.eat(">")) return f("=>", "operator");
            if ("0" == i && t.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))
              return f("number", "number");
            if (/\d/.test(i))
              return (
                t.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),
                f("number", "number")
              );
            if ("/" == i)
              return t.eat("*")
                ? ((e.tokenize = m), m(t, e))
                : t.eat("/")
                  ? (t.skipToEnd(), f("comment", "comment"))
                  : Zt(t, e, 1)
                    ? ((function (t) {
                        for (var e, n = !1, i = !1; null != (e = t.next()); ) {
                          if (!n) {
                            if ("/" == e && !i) return;
                            "[" == e ? (i = !0) : i && "]" == e && (i = !1);
                          }
                          n = !n && "\\" == e;
                        }
                      })(t),
                      t.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),
                      f("regexp", "string-2"))
                    : (t.eat("="), f("operator", "operator", t.current()));
            if ("`" == i) return (e.tokenize = v), v(t, e);
            if ("#" == i && "!" == t.peek())
              return t.skipToEnd(), f("meta", "meta");
            if ("#" == i && t.eatWhile(h)) return f("variable", "property");
            if (
              ("<" == i && t.match("!--")) ||
              ("-" == i &&
                t.match("->") &&
                !/\S/.test(t.string.slice(0, t.start)))
            )
              return t.skipToEnd(), f("comment", "comment");
            if (d.test(i))
              return (
                (">" == i && e.lexical && ">" == e.lexical.type) ||
                  (t.eat("=")
                    ? ("!" != i && "=" != i) || t.eat("=")
                    : /[<>*+\-|&?]/.test(i) &&
                      (t.eat(i), ">" == i && t.eat(i))),
                "?" == i && t.eat(".")
                  ? f(".")
                  : f("operator", "operator", t.current())
              );
            if (h.test(i)) {
              t.eatWhile(h);
              var r = t.current();
              if ("." != e.lastType) {
                if (p.propertyIsEnumerable(r)) {
                  var o = p[r];
                  return f(o.type, o.style, r);
                }
                if (
                  "async" == r &&
                  t.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, !1)
                )
                  return f("async", "keyword", r);
              }
              return f("variable", "variable", r);
            }
          }
          function m(t, e) {
            for (var n, i = !1; (n = t.next()); ) {
              if ("/" == n && i) {
                e.tokenize = g;
                break;
              }
              i = "*" == n;
            }
            return f("comment", "comment");
          }
          function v(t, e) {
            for (var n, i = !1; null != (n = t.next()); ) {
              if (!i && ("`" == n || ("$" == n && t.eat("{")))) {
                e.tokenize = g;
                break;
              }
              i = !i && "\\" == n;
            }
            return f("quasi", "string-2", t.current());
          }
          function y(t, e) {
            e.fatArrowAt && (e.fatArrowAt = null);
            var n = t.string.indexOf("=>", t.start);
            if (!(n < 0)) {
              if (c) {
                var i = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(
                  t.string.slice(t.start, n),
                );
                i && (n = i.index);
              }
              for (var r = 0, o = !1, s = n - 1; s >= 0; --s) {
                var a = t.string.charAt(s),
                  u = "([{}])".indexOf(a);
                if (u >= 0 && u < 3) {
                  if (!r) {
                    ++s;
                    break;
                  }
                  if (0 == --r) {
                    "(" == a && (o = !0);
                    break;
                  }
                } else if (u >= 3 && u < 6) ++r;
                else if (h.test(a)) o = !0;
                else if (/["'\/`]/.test(a))
                  for (; ; --s) {
                    if (0 == s) return;
                    if (
                      t.string.charAt(s - 1) == a &&
                      "\\" != t.string.charAt(s - 2)
                    ) {
                      s--;
                      break;
                    }
                  }
                else if (o && !r) {
                  ++s;
                  break;
                }
              }
              o && !r && (e.fatArrowAt = s);
            }
          }
          var b = {
            atom: !0,
            number: !0,
            variable: !0,
            string: !0,
            regexp: !0,
            this: !0,
            import: !0,
            "jsonld-keyword": !0,
          };
          function w(t, e, n, i, r, o) {
            (this.indented = t),
              (this.column = e),
              (this.type = n),
              (this.prev = r),
              (this.info = o),
              null != i && (this.align = i);
          }
          function x(t, e) {
            if (!l) return !1;
            for (var n = t.localVars; n; n = n.next) if (n.name == e) return !0;
            for (var i = t.context; i; i = i.prev)
              for (n = i.vars; n; n = n.next) if (n.name == e) return !0;
          }
          function k(t, e, n, i, r) {
            var o = t.cc;
            for (
              C.state = t,
                C.stream = r,
                C.marked = null,
                C.cc = o,
                C.style = e,
                t.lexical.hasOwnProperty("align") || (t.lexical.align = !0);
              ;

            )
              if ((o.length ? o.pop() : u ? H : j)(n, i)) {
                for (; o.length && o[o.length - 1].lex; ) o.pop()();
                return C.marked
                  ? C.marked
                  : "variable" == n && x(t, i)
                    ? "variable-2"
                    : e;
              }
          }
          var C = { state: null, column: null, marked: null, cc: null };
          function T() {
            for (var t = arguments.length - 1; t >= 0; t--)
              C.cc.push(arguments[t]);
          }
          function S() {
            return T.apply(null, arguments), !0;
          }
          function M(t, e) {
            for (var n = e; n; n = n.next) if (n.name == t) return !0;
            return !1;
          }
          function O(t) {
            var e = C.state;
            if (((C.marked = "def"), l)) {
              if (e.context)
                if ("var" == e.lexical.info && e.context && e.context.block) {
                  var i = (function t(e, n) {
                    if (n) {
                      if (n.block) {
                        var i = t(e, n.prev);
                        return i
                          ? i == n.prev
                            ? n
                            : new L(i, n.vars, !0)
                          : null;
                      }
                      return M(e, n.vars)
                        ? n
                        : new L(n.prev, new A(e, n.vars), !1);
                    }
                    return null;
                  })(t, e.context);
                  if (null != i) return void (e.context = i);
                } else if (!M(t, e.localVars))
                  return void (e.localVars = new A(t, e.localVars));
              n.globalVars &&
                !M(t, e.globalVars) &&
                (e.globalVars = new A(t, e.globalVars));
            }
          }
          function E(t) {
            return (
              "public" == t ||
              "private" == t ||
              "protected" == t ||
              "abstract" == t ||
              "readonly" == t
            );
          }
          function L(t, e, n) {
            (this.prev = t), (this.vars = e), (this.block = n);
          }
          function A(t, e) {
            (this.name = t), (this.next = e);
          }
          var N = new A("this", new A("arguments", null));
          function R() {
            (C.state.context = new L(C.state.context, C.state.localVars, !1)),
              (C.state.localVars = N);
          }
          function D() {
            (C.state.context = new L(C.state.context, C.state.localVars, !0)),
              (C.state.localVars = null);
          }
          function P() {
            (C.state.localVars = C.state.context.vars),
              (C.state.context = C.state.context.prev);
          }
          function W(t, e) {
            var n = function () {
              var n = C.state,
                i = n.indented;
              if ("stat" == n.lexical.type) i = n.lexical.indented;
              else
                for (
                  var r = n.lexical;
                  r && ")" == r.type && r.align;
                  r = r.prev
                )
                  i = r.indented;
              n.lexical = new w(i, C.stream.column(), t, null, n.lexical, e);
            };
            return (n.lex = !0), n;
          }
          function I() {
            var t = C.state;
            t.lexical.prev &&
              (")" == t.lexical.type && (t.indented = t.lexical.indented),
              (t.lexical = t.lexical.prev));
          }
          function z(t) {
            return function e(n) {
              return n == t
                ? S()
                : ";" == t || "}" == n || ")" == n || "]" == n
                  ? T()
                  : S(e);
            };
          }
          function j(t, e) {
            return "var" == t
              ? S(W("vardef", e), kt, z(";"), I)
              : "keyword a" == t
                ? S(W("form"), U, j, I)
                : "keyword b" == t
                  ? S(W("form"), j, I)
                  : "keyword d" == t
                    ? C.stream.match(/^\s*$/, !1)
                      ? S()
                      : S(W("stat"), K, z(";"), I)
                    : "debugger" == t
                      ? S(z(";"))
                      : "{" == t
                        ? S(W("}"), D, at, I, P)
                        : ";" == t
                          ? S()
                          : "if" == t
                            ? ("else" == C.state.lexical.info &&
                                C.state.cc[C.state.cc.length - 1] == I &&
                                C.state.cc.pop()(),
                              S(W("form"), U, j, I, Et))
                            : "function" == t
                              ? S(Rt)
                              : "for" == t
                                ? S(W("form"), D, Lt, j, P, I)
                                : "class" == t || (c && "interface" == e)
                                  ? ((C.marked = "keyword"),
                                    S(W("form", "class" == t ? t : e), zt, I))
                                  : "variable" == t
                                    ? c && "declare" == e
                                      ? ((C.marked = "keyword"), S(j))
                                      : c &&
                                          ("module" == e ||
                                            "enum" == e ||
                                            "type" == e) &&
                                          C.stream.match(/^\s*\w/, !1)
                                        ? ((C.marked = "keyword"),
                                          "enum" == e
                                            ? S(Yt)
                                            : "type" == e
                                              ? S(Pt, z("operator"), pt, z(";"))
                                              : S(
                                                  W("form"),
                                                  Ct,
                                                  z("{"),
                                                  W("}"),
                                                  at,
                                                  I,
                                                  I,
                                                ))
                                        : c && "namespace" == e
                                          ? ((C.marked = "keyword"),
                                            S(W("form"), H, j, I))
                                          : c && "abstract" == e
                                            ? ((C.marked = "keyword"), S(j))
                                            : S(W("stat"), tt)
                                    : "switch" == t
                                      ? S(
                                          W("form"),
                                          U,
                                          z("{"),
                                          W("}", "switch"),
                                          D,
                                          at,
                                          I,
                                          I,
                                          P,
                                        )
                                      : "case" == t
                                        ? S(H, z(":"))
                                        : "default" == t
                                          ? S(z(":"))
                                          : "catch" == t
                                            ? S(W("form"), R, F, j, I, P)
                                            : "export" == t
                                              ? S(W("stat"), Bt, I)
                                              : "import" == t
                                                ? S(W("stat"), Vt, I)
                                                : "async" == t
                                                  ? S(j)
                                                  : "@" == e
                                                    ? S(H, j)
                                                    : T(
                                                        W("stat"),
                                                        H,
                                                        z(";"),
                                                        I,
                                                      );
          }
          function F(t) {
            if ("(" == t) return S(Wt, z(")"));
          }
          function H(t, e) {
            return V(t, e, !1);
          }
          function B(t, e) {
            return V(t, e, !0);
          }
          function U(t) {
            return "(" != t ? T() : S(W(")"), K, z(")"), I);
          }
          function V(t, e, n) {
            if (C.state.fatArrowAt == C.stream.start) {
              var i = n ? Q : Y;
              if ("(" == t) return S(R, W(")"), ot(Wt, ")"), I, z("=>"), i, P);
              if ("variable" == t) return T(R, Ct, z("=>"), i, P);
            }
            var r = n ? X : G;
            return b.hasOwnProperty(t)
              ? S(r)
              : "function" == t
                ? S(Rt, r)
                : "class" == t || (c && "interface" == e)
                  ? ((C.marked = "keyword"), S(W("form"), It, I))
                  : "keyword c" == t || "async" == t
                    ? S(n ? B : H)
                    : "(" == t
                      ? S(W(")"), K, z(")"), I, r)
                      : "operator" == t || "spread" == t
                        ? S(n ? B : H)
                        : "[" == t
                          ? S(W("]"), qt, I, r)
                          : "{" == t
                            ? st(nt, "}", null, r)
                            : "quasi" == t
                              ? T($, r)
                              : "new" == t
                                ? S(
                                    (function (t) {
                                      return function (e) {
                                        return "." == e
                                          ? S(t ? J : Z)
                                          : "variable" == e && c
                                            ? S(bt, t ? X : G)
                                            : T(t ? B : H);
                                      };
                                    })(n),
                                  )
                                : S();
          }
          function K(t) {
            return t.match(/[;\}\)\],]/) ? T() : T(H);
          }
          function G(t, e) {
            return "," == t ? S(K) : X(t, e, !1);
          }
          function X(t, e, n) {
            var i = 0 == n ? G : X,
              r = 0 == n ? H : B;
            return "=>" == t
              ? S(R, n ? Q : Y, P)
              : "operator" == t
                ? /\+\+|--/.test(e) || (c && "!" == e)
                  ? S(i)
                  : c &&
                      "<" == e &&
                      C.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, !1)
                    ? S(W(">"), ot(pt, ">"), I, i)
                    : "?" == e
                      ? S(H, z(":"), r)
                      : S(r)
                : "quasi" == t
                  ? T($, i)
                  : ";" != t
                    ? "(" == t
                      ? st(B, ")", "call", i)
                      : "." == t
                        ? S(et, i)
                        : "[" == t
                          ? S(W("]"), K, z("]"), I, i)
                          : c && "as" == e
                            ? ((C.marked = "keyword"), S(pt, i))
                            : "regexp" == t
                              ? ((C.state.lastType = C.marked = "operator"),
                                C.stream.backUp(
                                  C.stream.pos - C.stream.start - 1,
                                ),
                                S(r))
                              : void 0
                    : void 0;
          }
          function $(t, e) {
            return "quasi" != t
              ? T()
              : "${" != e.slice(e.length - 2)
                ? S($)
                : S(K, q);
          }
          function q(t) {
            if ("}" == t)
              return (C.marked = "string-2"), (C.state.tokenize = v), S($);
          }
          function Y(t) {
            return y(C.stream, C.state), T("{" == t ? j : H);
          }
          function Q(t) {
            return y(C.stream, C.state), T("{" == t ? j : B);
          }
          function Z(t, e) {
            if ("target" == e) return (C.marked = "keyword"), S(G);
          }
          function J(t, e) {
            if ("target" == e) return (C.marked = "keyword"), S(X);
          }
          function tt(t) {
            return ":" == t ? S(I, j) : T(G, z(";"), I);
          }
          function et(t) {
            if ("variable" == t) return (C.marked = "property"), S();
          }
          function nt(t, e) {
            return "async" == t
              ? ((C.marked = "property"), S(nt))
              : "variable" == t || "keyword" == C.style
                ? ((C.marked = "property"),
                  "get" == e || "set" == e
                    ? S(it)
                    : (c &&
                        C.state.fatArrowAt == C.stream.start &&
                        (n = C.stream.match(/^\s*:\s*/, !1)) &&
                        (C.state.fatArrowAt = C.stream.pos + n[0].length),
                      S(rt)))
                : "number" == t || "string" == t
                  ? ((C.marked = a ? "property" : C.style + " property"), S(rt))
                  : "jsonld-keyword" == t
                    ? S(rt)
                    : c && E(e)
                      ? ((C.marked = "keyword"), S(nt))
                      : "[" == t
                        ? S(H, ut, z("]"), rt)
                        : "spread" == t
                          ? S(B, rt)
                          : "*" == e
                            ? ((C.marked = "keyword"), S(nt))
                            : ":" == t
                              ? T(rt)
                              : void 0;
            var n;
          }
          function it(t) {
            return "variable" != t ? T(rt) : ((C.marked = "property"), S(Rt));
          }
          function rt(t) {
            return ":" == t ? S(B) : "(" == t ? T(Rt) : void 0;
          }
          function ot(t, e, n) {
            function i(r, o) {
              if (n ? n.indexOf(r) > -1 : "," == r) {
                var s = C.state.lexical;
                return (
                  "call" == s.info && (s.pos = (s.pos || 0) + 1),
                  S(function (n, i) {
                    return n == e || i == e ? T() : T(t);
                  }, i)
                );
              }
              return r == e || o == e
                ? S()
                : n && n.indexOf(";") > -1
                  ? T(t)
                  : S(z(e));
            }
            return function (n, r) {
              return n == e || r == e ? S() : T(t, i);
            };
          }
          function st(t, e, n) {
            for (var i = 3; i < arguments.length; i++) C.cc.push(arguments[i]);
            return S(W(e, n), ot(t, e), I);
          }
          function at(t) {
            return "}" == t ? S() : T(j, at);
          }
          function ut(t, e) {
            if (c) {
              if (":" == t) return S(pt);
              if ("?" == e) return S(ut);
            }
          }
          function lt(t, e) {
            if (c && (":" == t || "in" == e)) return S(pt);
          }
          function ct(t) {
            if (c && ":" == t)
              return C.stream.match(/^\s*\w+\s+is\b/, !1)
                ? S(H, ht, pt)
                : S(pt);
          }
          function ht(t, e) {
            if ("is" == e) return (C.marked = "keyword"), S();
          }
          function pt(t, e) {
            return "keyof" == e ||
              "typeof" == e ||
              "infer" == e ||
              "readonly" == e
              ? ((C.marked = "keyword"), S("typeof" == e ? B : pt))
              : "variable" == t || "void" == e
                ? ((C.marked = "type"), S(yt))
                : "|" == e || "&" == e
                  ? S(pt)
                  : "string" == t || "number" == t || "atom" == t
                    ? S(yt)
                    : "[" == t
                      ? S(W("]"), ot(pt, "]", ","), I, yt)
                      : "{" == t
                        ? S(W("}"), _t, I, yt)
                        : "(" == t
                          ? S(ot(vt, ")"), dt, yt)
                          : "<" == t
                            ? S(ot(pt, ">"), pt)
                            : "quasi" == t
                              ? T(gt, yt)
                              : void 0;
          }
          function dt(t) {
            if ("=>" == t) return S(pt);
          }
          function _t(t) {
            return t.match(/[\}\)\]]/)
              ? S()
              : "," == t || ";" == t
                ? S(_t)
                : T(ft, _t);
          }
          function ft(t, e) {
            return "variable" == t || "keyword" == C.style
              ? ((C.marked = "property"), S(ft))
              : "?" == e || "number" == t || "string" == t
                ? S(ft)
                : ":" == t
                  ? S(pt)
                  : "[" == t
                    ? S(z("variable"), lt, z("]"), ft)
                    : "(" == t
                      ? T(Dt, ft)
                      : t.match(/[;\}\)\],]/)
                        ? void 0
                        : S();
          }
          function gt(t, e) {
            return "quasi" != t
              ? T()
              : "${" != e.slice(e.length - 2)
                ? S(gt)
                : S(pt, mt);
          }
          function mt(t) {
            if ("}" == t)
              return (C.marked = "string-2"), (C.state.tokenize = v), S(gt);
          }
          function vt(t, e) {
            return ("variable" == t && C.stream.match(/^\s*[?:]/, !1)) ||
              "?" == e
              ? S(vt)
              : ":" == t
                ? S(pt)
                : "spread" == t
                  ? S(vt)
                  : T(pt);
          }
          function yt(t, e) {
            return "<" == e
              ? S(W(">"), ot(pt, ">"), I, yt)
              : "|" == e || "." == t || "&" == e
                ? S(pt)
                : "[" == t
                  ? S(pt, z("]"), yt)
                  : "extends" == e || "implements" == e
                    ? ((C.marked = "keyword"), S(pt))
                    : "?" == e
                      ? S(pt, z(":"), pt)
                      : void 0;
          }
          function bt(t, e) {
            if ("<" == e) return S(W(">"), ot(pt, ">"), I, yt);
          }
          function wt() {
            return T(pt, xt);
          }
          function xt(t, e) {
            if ("=" == e) return S(pt);
          }
          function kt(t, e) {
            return "enum" == e
              ? ((C.marked = "keyword"), S(Yt))
              : T(Ct, ut, Mt, Ot);
          }
          function Ct(t, e) {
            return c && E(e)
              ? ((C.marked = "keyword"), S(Ct))
              : "variable" == t
                ? (O(e), S())
                : "spread" == t
                  ? S(Ct)
                  : "[" == t
                    ? st(St, "]")
                    : "{" == t
                      ? st(Tt, "}")
                      : void 0;
          }
          function Tt(t, e) {
            return "variable" != t || C.stream.match(/^\s*:/, !1)
              ? ("variable" == t && (C.marked = "property"),
                "spread" == t
                  ? S(Ct)
                  : "}" == t
                    ? T()
                    : "[" == t
                      ? S(H, z("]"), z(":"), Tt)
                      : S(z(":"), Ct, Mt))
              : (O(e), S(Mt));
          }
          function St() {
            return T(Ct, Mt);
          }
          function Mt(t, e) {
            if ("=" == e) return S(B);
          }
          function Ot(t) {
            if ("," == t) return S(kt);
          }
          function Et(t, e) {
            if ("keyword b" == t && "else" == e)
              return S(W("form", "else"), j, I);
          }
          function Lt(t, e) {
            return "await" == e ? S(Lt) : "(" == t ? S(W(")"), At, I) : void 0;
          }
          function At(t) {
            return "var" == t ? S(kt, Nt) : "variable" == t ? S(Nt) : T(Nt);
          }
          function Nt(t, e) {
            return ")" == t
              ? S()
              : ";" == t
                ? S(Nt)
                : "in" == e || "of" == e
                  ? ((C.marked = "keyword"), S(H, Nt))
                  : T(H, Nt);
          }
          function Rt(t, e) {
            return "*" == e
              ? ((C.marked = "keyword"), S(Rt))
              : "variable" == t
                ? (O(e), S(Rt))
                : "(" == t
                  ? S(R, W(")"), ot(Wt, ")"), I, ct, j, P)
                  : c && "<" == e
                    ? S(W(">"), ot(wt, ">"), I, Rt)
                    : void 0;
          }
          function Dt(t, e) {
            return "*" == e
              ? ((C.marked = "keyword"), S(Dt))
              : "variable" == t
                ? (O(e), S(Dt))
                : "(" == t
                  ? S(R, W(")"), ot(Wt, ")"), I, ct, P)
                  : c && "<" == e
                    ? S(W(">"), ot(wt, ">"), I, Dt)
                    : void 0;
          }
          function Pt(t, e) {
            return "keyword" == t || "variable" == t
              ? ((C.marked = "type"), S(Pt))
              : "<" == e
                ? S(W(">"), ot(wt, ">"), I)
                : void 0;
          }
          function Wt(t, e) {
            return (
              "@" == e && S(H, Wt),
              "spread" == t
                ? S(Wt)
                : c && E(e)
                  ? ((C.marked = "keyword"), S(Wt))
                  : c && "this" == t
                    ? S(ut, Mt)
                    : T(Ct, ut, Mt)
            );
          }
          function It(t, e) {
            return "variable" == t ? zt(t, e) : jt(t, e);
          }
          function zt(t, e) {
            if ("variable" == t) return O(e), S(jt);
          }
          function jt(t, e) {
            return "<" == e
              ? S(W(">"), ot(wt, ">"), I, jt)
              : "extends" == e || "implements" == e || (c && "," == t)
                ? ("implements" == e && (C.marked = "keyword"),
                  S(c ? pt : H, jt))
                : "{" == t
                  ? S(W("}"), Ft, I)
                  : void 0;
          }
          function Ft(t, e) {
            return "async" == t ||
              ("variable" == t &&
                ("static" == e || "get" == e || "set" == e || (c && E(e))) &&
                C.stream.match(/^\s+#?[\w$\xa1-\uffff]/, !1))
              ? ((C.marked = "keyword"), S(Ft))
              : "variable" == t || "keyword" == C.style
                ? ((C.marked = "property"), S(Ht, Ft))
                : "number" == t || "string" == t
                  ? S(Ht, Ft)
                  : "[" == t
                    ? S(H, ut, z("]"), Ht, Ft)
                    : "*" == e
                      ? ((C.marked = "keyword"), S(Ft))
                      : c && "(" == t
                        ? T(Dt, Ft)
                        : ";" == t || "," == t
                          ? S(Ft)
                          : "}" == t
                            ? S()
                            : "@" == e
                              ? S(H, Ft)
                              : void 0;
          }
          function Ht(t, e) {
            if ("!" == e) return S(Ht);
            if ("?" == e) return S(Ht);
            if (":" == t) return S(pt, Mt);
            if ("=" == e) return S(B);
            var n = C.state.lexical.prev;
            return T(n && "interface" == n.info ? Dt : Rt);
          }
          function Bt(t, e) {
            return "*" == e
              ? ((C.marked = "keyword"), S($t, z(";")))
              : "default" == e
                ? ((C.marked = "keyword"), S(H, z(";")))
                : "{" == t
                  ? S(ot(Ut, "}"), $t, z(";"))
                  : T(j);
          }
          function Ut(t, e) {
            return "as" == e
              ? ((C.marked = "keyword"), S(z("variable")))
              : "variable" == t
                ? T(B, Ut)
                : void 0;
          }
          function Vt(t) {
            return "string" == t
              ? S()
              : "(" == t
                ? T(H)
                : "." == t
                  ? T(G)
                  : T(Kt, Gt, $t);
          }
          function Kt(t, e) {
            return "{" == t
              ? st(Kt, "}")
              : ("variable" == t && O(e),
                "*" == e && (C.marked = "keyword"),
                S(Xt));
          }
          function Gt(t) {
            if ("," == t) return S(Kt, Gt);
          }
          function Xt(t, e) {
            if ("as" == e) return (C.marked = "keyword"), S(Kt);
          }
          function $t(t, e) {
            if ("from" == e) return (C.marked = "keyword"), S(H);
          }
          function qt(t) {
            return "]" == t ? S() : T(ot(B, "]"));
          }
          function Yt() {
            return T(W("form"), Ct, z("{"), W("}"), ot(Qt, "}"), I, I);
          }
          function Qt() {
            return T(Ct, Mt);
          }
          function Zt(t, e, n) {
            return (
              (e.tokenize == g &&
                /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(
                  e.lastType,
                )) ||
              ("quasi" == e.lastType &&
                /\{\s*$/.test(t.string.slice(0, t.pos - (n || 0))))
            );
          }
          return (
            (R.lex = D.lex = !0),
            (P.lex = !0),
            (I.lex = !0),
            {
              startState: function (t) {
                var e = {
                  tokenize: g,
                  lastType: "sof",
                  cc: [],
                  lexical: new w((t || 0) - o, 0, "block", !1),
                  localVars: n.localVars,
                  context: n.localVars && new L(null, null, !1),
                  indented: t || 0,
                };
                return (
                  n.globalVars &&
                    "object" == typeof n.globalVars &&
                    (e.globalVars = n.globalVars),
                  e
                );
              },
              token: function (t, e) {
                if (
                  (t.sol() &&
                    (e.lexical.hasOwnProperty("align") ||
                      (e.lexical.align = !1),
                    (e.indented = t.indentation()),
                    y(t, e)),
                  e.tokenize != m && t.eatSpace())
                )
                  return null;
                var n = e.tokenize(t, e);
                return "comment" == i
                  ? n
                  : ((e.lastType =
                      "operator" != i || ("++" != r && "--" != r)
                        ? i
                        : "incdec"),
                    k(e, n, i, r, t));
              },
              indent: function (e, i) {
                if (e.tokenize == m || e.tokenize == v) return t.Pass;
                if (e.tokenize != g) return 0;
                var r,
                  a = i && i.charAt(0),
                  u = e.lexical;
                if (!/^\s*else\b/.test(i))
                  for (var l = e.cc.length - 1; l >= 0; --l) {
                    var c = e.cc[l];
                    if (c == I) u = u.prev;
                    else if (c != Et && c != P) break;
                  }
                for (
                  ;
                  ("stat" == u.type || "form" == u.type) &&
                  ("}" == a ||
                    ((r = e.cc[e.cc.length - 1]) &&
                      (r == G || r == X) &&
                      !/^[,\.=+\-*:?[\(]/.test(i)));

                )
                  u = u.prev;
                s && ")" == u.type && "stat" == u.prev.type && (u = u.prev);
                var h = u.type,
                  p = a == h;
                return "vardef" == h
                  ? u.indented +
                      ("operator" == e.lastType || "," == e.lastType
                        ? u.info.length + 1
                        : 0)
                  : "form" == h && "{" == a
                    ? u.indented
                    : "form" == h
                      ? u.indented + o
                      : "stat" == h
                        ? u.indented +
                          ((function (t, e) {
                            return (
                              "operator" == t.lastType ||
                              "," == t.lastType ||
                              d.test(e.charAt(0)) ||
                              /[,.]/.test(e.charAt(0))
                            );
                          })(e, i)
                            ? s || o
                            : 0)
                        : "switch" != u.info || p || 0 == n.doubleIndentSwitch
                          ? u.align
                            ? u.column + (p ? 0 : 1)
                            : u.indented + (p ? 0 : o)
                          : u.indented +
                            (/^(?:case|default)\b/.test(i) ? o : 2 * o);
              },
              electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
              blockCommentStart: u ? null : "/*",
              blockCommentEnd: u ? null : "*/",
              blockCommentContinue: u ? null : " * ",
              lineComment: u ? null : "//",
              fold: "brace",
              closeBrackets: "()[]{}''\"\"``",
              helperType: u ? "json" : "javascript",
              jsonldMode: a,
              jsonMode: u,
              expressionAllowed: Zt,
              skipExpression: function (e) {
                k(e, "atom", "atom", "true", new t.StringStream("", 2, null));
              },
            }
          );
        }),
          t.registerHelper("wordChars", "javascript", /[\w$]/),
          t.defineMIME("text/javascript", "javascript"),
          t.defineMIME("text/ecmascript", "javascript"),
          t.defineMIME("application/javascript", "javascript"),
          t.defineMIME("application/x-javascript", "javascript"),
          t.defineMIME("application/ecmascript", "javascript"),
          t.defineMIME("application/json", { name: "javascript", json: !0 }),
          t.defineMIME("application/x-json", { name: "javascript", json: !0 }),
          t.defineMIME("application/manifest+json", {
            name: "javascript",
            json: !0,
          }),
          t.defineMIME("application/ld+json", {
            name: "javascript",
            jsonld: !0,
          }),
          t.defineMIME("text/typescript", {
            name: "javascript",
            typescript: !0,
          }),
          t.defineMIME("application/typescript", {
            name: "javascript",
            typescript: !0,
          });
      })(n(14));
    },
    function (t, e, n) {
      (function (t) {
        var i =
            (void 0 !== t && t) ||
            ("undefined" != typeof self && self) ||
            window,
          r = Function.prototype.apply;
        function o(t, e) {
          (this._id = t), (this._clearFn = e);
        }
        (e.setTimeout = function () {
          return new o(r.call(setTimeout, i, arguments), clearTimeout);
        }),
          (e.setInterval = function () {
            return new o(r.call(setInterval, i, arguments), clearInterval);
          }),
          (e.clearTimeout = e.clearInterval =
            function (t) {
              t && t.close();
            }),
          (o.prototype.unref = o.prototype.ref = function () {}),
          (o.prototype.close = function () {
            this._clearFn.call(i, this._id);
          }),
          (e.enroll = function (t, e) {
            clearTimeout(t._idleTimeoutId), (t._idleTimeout = e);
          }),
          (e.unenroll = function (t) {
            clearTimeout(t._idleTimeoutId), (t._idleTimeout = -1);
          }),
          (e._unrefActive = e.active =
            function (t) {
              clearTimeout(t._idleTimeoutId);
              var e = t._idleTimeout;
              e >= 0 &&
                (t._idleTimeoutId = setTimeout(function () {
                  t._onTimeout && t._onTimeout();
                }, e));
            }),
          n(41),
          (e.setImmediate =
            ("undefined" != typeof self && self.setImmediate) ||
            (void 0 !== t && t.setImmediate) ||
            (this && this.setImmediate)),
          (e.clearImmediate =
            ("undefined" != typeof self && self.clearImmediate) ||
            (void 0 !== t && t.clearImmediate) ||
            (this && this.clearImmediate));
      }).call(this, n(4));
    },
    function (t, e, n) {
      (function (t, e) {
        !(function (t, n) {
          "use strict";
          if (!t.setImmediate) {
            var i,
              r,
              o,
              s,
              a,
              u = 1,
              l = {},
              c = !1,
              h = t.document,
              p = Object.getPrototypeOf && Object.getPrototypeOf(t);
            (p = p && p.setTimeout ? p : t),
              "[object process]" === {}.toString.call(t.process)
                ? (i = function (t) {
                    e.nextTick(function () {
                      _(t);
                    });
                  })
                : !(function () {
                      if (t.postMessage && !t.importScripts) {
                        var e = !0,
                          n = t.onmessage;
                        return (
                          (t.onmessage = function () {
                            e = !1;
                          }),
                          t.postMessage("", "*"),
                          (t.onmessage = n),
                          e
                        );
                      }
                    })()
                  ? t.MessageChannel
                    ? (((o = new MessageChannel()).port1.onmessage = function (
                        t,
                      ) {
                        _(t.data);
                      }),
                      (i = function (t) {
                        o.port2.postMessage(t);
                      }))
                    : h && "onreadystatechange" in h.createElement("script")
                      ? ((r = h.documentElement),
                        (i = function (t) {
                          var e = h.createElement("script");
                          (e.onreadystatechange = function () {
                            _(t),
                              (e.onreadystatechange = null),
                              r.removeChild(e),
                              (e = null);
                          }),
                            r.appendChild(e);
                        }))
                      : (i = function (t) {
                          setTimeout(_, 0, t);
                        })
                  : ((s = "setImmediate$" + Math.random() + "$"),
                    (a = function (e) {
                      e.source === t &&
                        "string" == typeof e.data &&
                        0 === e.data.indexOf(s) &&
                        _(+e.data.slice(s.length));
                    }),
                    t.addEventListener
                      ? t.addEventListener("message", a, !1)
                      : t.attachEvent("onmessage", a),
                    (i = function (e) {
                      t.postMessage(s + e, "*");
                    })),
              (p.setImmediate = function (t) {
                "function" != typeof t && (t = new Function("" + t));
                for (
                  var e = new Array(arguments.length - 1), n = 0;
                  n < e.length;
                  n++
                )
                  e[n] = arguments[n + 1];
                var r = { callback: t, args: e };
                return (l[u] = r), i(u), u++;
              }),
              (p.clearImmediate = d);
          }
          function d(t) {
            delete l[t];
          }
          function _(t) {
            if (c) setTimeout(_, 0, t);
            else {
              var e = l[t];
              if (e) {
                c = !0;
                try {
                  !(function (t) {
                    var e = t.callback,
                      n = t.args;
                    switch (n.length) {
                      case 0:
                        e();
                        break;
                      case 1:
                        e(n[0]);
                        break;
                      case 2:
                        e(n[0], n[1]);
                        break;
                      case 3:
                        e(n[0], n[1], n[2]);
                        break;
                      default:
                        e.apply(void 0, n);
                    }
                  })(e);
                } finally {
                  d(t), (c = !1);
                }
              }
            }
          }
        })("undefined" == typeof self ? (void 0 === t ? this : t) : self);
      }).call(this, n(4), n(15));
    },
    function (t, e, n) {
      (e = n(16)(n(45))), (t.exports = e);
    },
    function (t, e, n) {
      var i = n(44),
        r = n(10),
        o = Math.pow(2, 53) - 1;
      (e = function (t) {
        if (!t) return !1;
        var e = t.length;
        return i(e) && e >= 0 && e <= o && !r(t);
      }),
        (t.exports = e);
    },
    function (t, e, n) {
      var i = n(9);
      (e = function (t) {
        return "[object Number]" === i(t);
      }),
        (t.exports = e);
    },
    function (t, e, n) {
      var i = n(5),
        r = n(46),
        o = n(47),
        s = Object.getOwnPropertyNames,
        a = Object.getOwnPropertySymbols;
      (e = function (t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = e.prototype,
          u = void 0 === n || n,
          l = e.unenumerable,
          c = void 0 !== l && l,
          h = e.symbol,
          p = void 0 !== h && h,
          d = [];
        if ((c || p) && s) {
          var _ = i;
          c && s && (_ = s);
          do {
            (d = d.concat(_(t))), p && a && (d = d.concat(a(t)));
          } while (u && (t = r(t)) && t !== Object.prototype);
          d = o(d);
        } else if (u) for (var f in t) d.push(f);
        else d = i(t);
        return d;
      }),
        (t.exports = e);
    },
    function (t, e, n) {
      var i = n(20),
        r = n(10),
        o = Object.getPrototypeOf,
        s = {}.constructor;
      (e = function (t) {
        if (i(t)) {
          if (o) return o(t);
          var e = t.__proto__;
          return e || null === e
            ? e
            : r(t.constructor)
              ? t.constructor.prototype
              : t instanceof s
                ? s.prototype
                : void 0;
        }
      }),
        (t.exports = e);
    },
    function (t, e, n) {
      var i = n(48);
      function r(t, e) {
        return t === e;
      }
      (e = function (t, e) {
        return (
          (e = e || r),
          i(t, function (t, n, i) {
            for (var r = i.length; ++n < r; ) if (e(t, i[n])) return !1;
            return !0;
          })
        );
      }),
        (t.exports = e);
    },
    function (t, e, n) {
      var i = n(49),
        r = n(17);
      (e = function (t, e, n) {
        var o = [];
        return (
          (e = i(e, n)),
          r(t, function (t, n, i) {
            e(t, n, i) && o.push(t);
          }),
          o
        );
      }),
        (t.exports = e);
    },
    function (t, e, n) {
      var i = n(10),
        r = n(20),
        o = n(11),
        s = n(19),
        a = n(50),
        u = n(53),
        l = n(54);
      (e = function (t, e, n) {
        return null == t ? u : i(t) ? s(t, e, n) : r(t) && !o(t) ? a(t) : l(t);
      }),
        (t.exports = e);
    },
    function (t, e, n) {
      var i = n(51),
        r = n(52);
      (e = function (t) {
        return (
          (t = i({}, t)),
          function (e) {
            return r(e, t);
          }
        );
      }),
        (t.exports = e);
    },
    function (t, e, n) {
      var i = n(5);
      (e = n(16)(i)), (t.exports = e);
    },
    function (t, e, n) {
      var i = n(5);
      (e = function (t, e) {
        var n = i(e),
          r = n.length;
        if (null == t) return !r;
        t = Object(t);
        for (var o = 0; o < r; o++) {
          var s = n[o];
          if (e[s] !== t[s] || !(s in t)) return !1;
        }
        return !0;
      }),
        (t.exports = e);
    },
    function (t, e) {
      (e = function (t) {
        return t;
      }),
        (t.exports = e);
    },
    function (t, e, n) {
      var i = n(11),
        r = n(55);
      (e = function (t) {
        return i(t)
          ? function (e) {
              return r(e, t);
            }
          : ((e = t),
            function (t) {
              return null == t ? void 0 : t[e];
            });
        var e;
      }),
        (t.exports = e);
    },
    function (t, e, n) {
      var i = n(8),
        r = n(56);
      (e = function (t, e) {
        var n;
        for (n = (e = r(e, t)).shift(); !i(n); ) {
          if (null == (t = t[n])) return;
          n = e.shift();
        }
        return t;
      }),
        (t.exports = e);
    },
    function (t, e, n) {
      var i = n(18),
        r = n(11);
      e = function (t, e) {
        if (r(t)) return t;
        if (e && i(e, t)) return [t];
        var n = [];
        return (
          t.replace(o, function (t, e, i, r) {
            n.push(i ? r.replace(s, "$1") : e || t);
          }),
          n
        );
      };
      var o =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        s = /\\(\\)?/g;
      t.exports = e;
    },
    function (t, e) {
      (e = function () {}), (t.exports = e);
    },
    function (t, e, n) {
      var i, r;
      !(function () {
        var o;
        !(function () {
          "use strict";
          var t = [
              ,
              ,
              function (t) {
                function e(t) {
                  (this.__parent = t),
                    (this.__character_count = 0),
                    (this.__indent_count = -1),
                    (this.__alignment_count = 0),
                    (this.__wrap_point_index = 0),
                    (this.__wrap_point_character_count = 0),
                    (this.__wrap_point_indent_count = -1),
                    (this.__wrap_point_alignment_count = 0),
                    (this.__items = []);
                }
                function n(t, e) {
                  (this.__cache = [""]),
                    (this.__indent_size = t.indent_size),
                    (this.__indent_string = t.indent_char),
                    t.indent_with_tabs ||
                      (this.__indent_string = new Array(t.indent_size + 1).join(
                        t.indent_char,
                      )),
                    (e = e || ""),
                    t.indent_level > 0 &&
                      (e = new Array(t.indent_level + 1).join(
                        this.__indent_string,
                      )),
                    (this.__base_string = e),
                    (this.__base_string_length = e.length);
                }
                function i(t, i) {
                  (this.__indent_cache = new n(t, i)),
                    (this.raw = !1),
                    (this._end_with_newline = t.end_with_newline),
                    (this.indent_size = t.indent_size),
                    (this.wrap_line_length = t.wrap_line_length),
                    (this.indent_empty_lines = t.indent_empty_lines),
                    (this.__lines = []),
                    (this.previous_line = null),
                    (this.current_line = null),
                    (this.next_line = new e(this)),
                    (this.space_before_token = !1),
                    (this.non_breaking_space = !1),
                    (this.previous_token_wrapped = !1),
                    this.__add_outputline();
                }
                (e.prototype.clone_empty = function () {
                  var t = new e(this.__parent);
                  return (
                    t.set_indent(this.__indent_count, this.__alignment_count), t
                  );
                }),
                  (e.prototype.item = function (t) {
                    return t < 0
                      ? this.__items[this.__items.length + t]
                      : this.__items[t];
                  }),
                  (e.prototype.has_match = function (t) {
                    for (var e = this.__items.length - 1; e >= 0; e--)
                      if (this.__items[e].match(t)) return !0;
                    return !1;
                  }),
                  (e.prototype.set_indent = function (t, e) {
                    this.is_empty() &&
                      ((this.__indent_count = t || 0),
                      (this.__alignment_count = e || 0),
                      (this.__character_count = this.__parent.get_indent_size(
                        this.__indent_count,
                        this.__alignment_count,
                      )));
                  }),
                  (e.prototype._set_wrap_point = function () {
                    this.__parent.wrap_line_length &&
                      ((this.__wrap_point_index = this.__items.length),
                      (this.__wrap_point_character_count =
                        this.__character_count),
                      (this.__wrap_point_indent_count =
                        this.__parent.next_line.__indent_count),
                      (this.__wrap_point_alignment_count =
                        this.__parent.next_line.__alignment_count));
                  }),
                  (e.prototype._should_wrap = function () {
                    return (
                      this.__wrap_point_index &&
                      this.__character_count > this.__parent.wrap_line_length &&
                      this.__wrap_point_character_count >
                        this.__parent.next_line.__character_count
                    );
                  }),
                  (e.prototype._allow_wrap = function () {
                    if (this._should_wrap()) {
                      this.__parent.add_new_line();
                      var t = this.__parent.current_line;
                      return (
                        t.set_indent(
                          this.__wrap_point_indent_count,
                          this.__wrap_point_alignment_count,
                        ),
                        (t.__items = this.__items.slice(
                          this.__wrap_point_index,
                        )),
                        (this.__items = this.__items.slice(
                          0,
                          this.__wrap_point_index,
                        )),
                        (t.__character_count +=
                          this.__character_count -
                          this.__wrap_point_character_count),
                        (this.__character_count =
                          this.__wrap_point_character_count),
                        " " === t.__items[0] &&
                          (t.__items.splice(0, 1), (t.__character_count -= 1)),
                        !0
                      );
                    }
                    return !1;
                  }),
                  (e.prototype.is_empty = function () {
                    return 0 === this.__items.length;
                  }),
                  (e.prototype.last = function () {
                    return this.is_empty()
                      ? null
                      : this.__items[this.__items.length - 1];
                  }),
                  (e.prototype.push = function (t) {
                    this.__items.push(t);
                    var e = t.lastIndexOf("\n");
                    -1 !== e
                      ? (this.__character_count = t.length - e)
                      : (this.__character_count += t.length);
                  }),
                  (e.prototype.pop = function () {
                    var t = null;
                    return (
                      this.is_empty() ||
                        ((t = this.__items.pop()),
                        (this.__character_count -= t.length)),
                      t
                    );
                  }),
                  (e.prototype._remove_indent = function () {
                    this.__indent_count > 0 &&
                      ((this.__indent_count -= 1),
                      (this.__character_count -= this.__parent.indent_size));
                  }),
                  (e.prototype._remove_wrap_indent = function () {
                    this.__wrap_point_indent_count > 0 &&
                      (this.__wrap_point_indent_count -= 1);
                  }),
                  (e.prototype.trim = function () {
                    for (; " " === this.last(); )
                      this.__items.pop(), (this.__character_count -= 1);
                  }),
                  (e.prototype.toString = function () {
                    var t = "";
                    return (
                      this.is_empty()
                        ? this.__parent.indent_empty_lines &&
                          (t = this.__parent.get_indent_string(
                            this.__indent_count,
                          ))
                        : ((t = this.__parent.get_indent_string(
                            this.__indent_count,
                            this.__alignment_count,
                          )),
                          (t += this.__items.join(""))),
                      t
                    );
                  }),
                  (n.prototype.get_indent_size = function (t, e) {
                    var n = this.__base_string_length;
                    return (
                      (e = e || 0),
                      t < 0 && (n = 0),
                      (n += t * this.__indent_size),
                      (n += e)
                    );
                  }),
                  (n.prototype.get_indent_string = function (t, e) {
                    var n = this.__base_string;
                    return (
                      (e = e || 0),
                      t < 0 && ((t = 0), (n = "")),
                      (e += t * this.__indent_size),
                      this.__ensure_cache(e),
                      (n += this.__cache[e])
                    );
                  }),
                  (n.prototype.__ensure_cache = function (t) {
                    for (; t >= this.__cache.length; ) this.__add_column();
                  }),
                  (n.prototype.__add_column = function () {
                    var t = this.__cache.length,
                      e = 0,
                      n = "";
                    this.__indent_size &&
                      t >= this.__indent_size &&
                      ((t -=
                        (e = Math.floor(t / this.__indent_size)) *
                        this.__indent_size),
                      (n = new Array(e + 1).join(this.__indent_string))),
                      t && (n += new Array(t + 1).join(" ")),
                      this.__cache.push(n);
                  }),
                  (i.prototype.__add_outputline = function () {
                    (this.previous_line = this.current_line),
                      (this.current_line = this.next_line.clone_empty()),
                      this.__lines.push(this.current_line);
                  }),
                  (i.prototype.get_line_number = function () {
                    return this.__lines.length;
                  }),
                  (i.prototype.get_indent_string = function (t, e) {
                    return this.__indent_cache.get_indent_string(t, e);
                  }),
                  (i.prototype.get_indent_size = function (t, e) {
                    return this.__indent_cache.get_indent_size(t, e);
                  }),
                  (i.prototype.is_empty = function () {
                    return !this.previous_line && this.current_line.is_empty();
                  }),
                  (i.prototype.add_new_line = function (t) {
                    return (
                      !(this.is_empty() || (!t && this.just_added_newline())) &&
                      (this.raw || this.__add_outputline(), !0)
                    );
                  }),
                  (i.prototype.get_code = function (t) {
                    this.trim(!0);
                    var e = this.current_line.pop();
                    e &&
                      ("\n" === e[e.length - 1] && (e = e.replace(/\n+$/g, "")),
                      this.current_line.push(e)),
                      this._end_with_newline && this.__add_outputline();
                    var n = this.__lines.join("\n");
                    return "\n" !== t && (n = n.replace(/[\n]/g, t)), n;
                  }),
                  (i.prototype.set_wrap_point = function () {
                    this.current_line._set_wrap_point();
                  }),
                  (i.prototype.set_indent = function (t, e) {
                    return (
                      (t = t || 0),
                      (e = e || 0),
                      this.next_line.set_indent(t, e),
                      this.__lines.length > 1
                        ? (this.current_line.set_indent(t, e), !0)
                        : (this.current_line.set_indent(), !1)
                    );
                  }),
                  (i.prototype.add_raw_token = function (t) {
                    for (var e = 0; e < t.newlines; e++)
                      this.__add_outputline();
                    this.current_line.set_indent(-1),
                      this.current_line.push(t.whitespace_before),
                      this.current_line.push(t.text),
                      (this.space_before_token = !1),
                      (this.non_breaking_space = !1),
                      (this.previous_token_wrapped = !1);
                  }),
                  (i.prototype.add_token = function (t) {
                    this.__add_space_before_token(),
                      this.current_line.push(t),
                      (this.space_before_token = !1),
                      (this.non_breaking_space = !1),
                      (this.previous_token_wrapped =
                        this.current_line._allow_wrap());
                  }),
                  (i.prototype.__add_space_before_token = function () {
                    this.space_before_token &&
                      !this.just_added_newline() &&
                      (this.non_breaking_space || this.set_wrap_point(),
                      this.current_line.push(" "));
                  }),
                  (i.prototype.remove_indent = function (t) {
                    for (var e = this.__lines.length; t < e; )
                      this.__lines[t]._remove_indent(), t++;
                    this.current_line._remove_wrap_indent();
                  }),
                  (i.prototype.trim = function (t) {
                    for (
                      t = void 0 !== t && t, this.current_line.trim();
                      t &&
                      this.__lines.length > 1 &&
                      this.current_line.is_empty();

                    )
                      this.__lines.pop(),
                        (this.current_line =
                          this.__lines[this.__lines.length - 1]),
                        this.current_line.trim();
                    this.previous_line =
                      this.__lines.length > 1
                        ? this.__lines[this.__lines.length - 2]
                        : null;
                  }),
                  (i.prototype.just_added_newline = function () {
                    return this.current_line.is_empty();
                  }),
                  (i.prototype.just_added_blankline = function () {
                    return (
                      this.is_empty() ||
                      (this.current_line.is_empty() &&
                        this.previous_line.is_empty())
                    );
                  }),
                  (i.prototype.ensure_empty_line_above = function (t, n) {
                    for (var i = this.__lines.length - 2; i >= 0; ) {
                      var r = this.__lines[i];
                      if (r.is_empty()) break;
                      if (0 !== r.item(0).indexOf(t) && r.item(-1) !== n) {
                        this.__lines.splice(i + 1, 0, new e(this)),
                          (this.previous_line =
                            this.__lines[this.__lines.length - 2]);
                        break;
                      }
                      i--;
                    }
                  }),
                  (t.exports.Output = i);
              },
              function (t) {
                t.exports.Token = function (t, e, n, i) {
                  (this.type = t),
                    (this.text = e),
                    (this.comments_before = null),
                    (this.newlines = n || 0),
                    (this.whitespace_before = i || ""),
                    (this.parent = null),
                    (this.next = null),
                    (this.previous = null),
                    (this.opened = null),
                    (this.closed = null),
                    (this.directives = null);
                };
              },
              ,
              ,
              function (t) {
                function e(t, e) {
                  (this.raw_options = n(t, e)),
                    (this.disabled = this._get_boolean("disabled")),
                    (this.eol = this._get_characters("eol", "auto")),
                    (this.end_with_newline =
                      this._get_boolean("end_with_newline")),
                    (this.indent_size = this._get_number("indent_size", 4)),
                    (this.indent_char = this._get_characters(
                      "indent_char",
                      " ",
                    )),
                    (this.indent_level = this._get_number("indent_level")),
                    (this.preserve_newlines = this._get_boolean(
                      "preserve_newlines",
                      !0,
                    )),
                    (this.max_preserve_newlines = this._get_number(
                      "max_preserve_newlines",
                      32786,
                    )),
                    this.preserve_newlines || (this.max_preserve_newlines = 0),
                    (this.indent_with_tabs = this._get_boolean(
                      "indent_with_tabs",
                      "\t" === this.indent_char,
                    )),
                    this.indent_with_tabs &&
                      ((this.indent_char = "\t"),
                      1 === this.indent_size && (this.indent_size = 4)),
                    (this.wrap_line_length = this._get_number(
                      "wrap_line_length",
                      this._get_number("max_char"),
                    )),
                    (this.indent_empty_lines =
                      this._get_boolean("indent_empty_lines")),
                    (this.templating = this._get_selection_list(
                      "templating",
                      [
                        "auto",
                        "none",
                        "django",
                        "erb",
                        "handlebars",
                        "php",
                        "smarty",
                      ],
                      ["auto"],
                    ));
                }
                function n(t, e) {
                  var n,
                    r = {};
                  for (n in (t = i(t))) n !== e && (r[n] = t[n]);
                  if (e && t[e]) for (n in t[e]) r[n] = t[e][n];
                  return r;
                }
                function i(t) {
                  var e,
                    n = {};
                  for (e in t) {
                    n[e.replace(/-/g, "_")] = t[e];
                  }
                  return n;
                }
                (e.prototype._get_array = function (t, e) {
                  var n = this.raw_options[t],
                    i = e || [];
                  return (
                    "object" == typeof n
                      ? null !== n &&
                        "function" == typeof n.concat &&
                        (i = n.concat())
                      : "string" == typeof n &&
                        (i = n.split(/[^a-zA-Z0-9_\/\-]+/)),
                    i
                  );
                }),
                  (e.prototype._get_boolean = function (t, e) {
                    var n = this.raw_options[t];
                    return void 0 === n ? !!e : !!n;
                  }),
                  (e.prototype._get_characters = function (t, e) {
                    var n = this.raw_options[t],
                      i = e || "";
                    return (
                      "string" == typeof n &&
                        (i = n
                          .replace(/\\r/, "\r")
                          .replace(/\\n/, "\n")
                          .replace(/\\t/, "\t")),
                      i
                    );
                  }),
                  (e.prototype._get_number = function (t, e) {
                    var n = this.raw_options[t];
                    (e = parseInt(e, 10)), isNaN(e) && (e = 0);
                    var i = parseInt(n, 10);
                    return isNaN(i) && (i = e), i;
                  }),
                  (e.prototype._get_selection = function (t, e, n) {
                    var i = this._get_selection_list(t, e, n);
                    if (1 !== i.length)
                      throw new Error(
                        "Invalid Option Value: The option '" +
                          t +
                          "' can only be one of the following values:\n" +
                          e +
                          "\nYou passed in: '" +
                          this.raw_options[t] +
                          "'",
                      );
                    return i[0];
                  }),
                  (e.prototype._get_selection_list = function (t, e, n) {
                    if (!e || 0 === e.length)
                      throw new Error("Selection list cannot be empty.");
                    if (((n = n || [e[0]]), !this._is_valid_selection(n, e)))
                      throw new Error("Invalid Default Value!");
                    var i = this._get_array(t, n);
                    if (!this._is_valid_selection(i, e))
                      throw new Error(
                        "Invalid Option Value: The option '" +
                          t +
                          "' can contain only the following values:\n" +
                          e +
                          "\nYou passed in: '" +
                          this.raw_options[t] +
                          "'",
                      );
                    return i;
                  }),
                  (e.prototype._is_valid_selection = function (t, e) {
                    return (
                      t.length &&
                      e.length &&
                      !t.some(function (t) {
                        return -1 === e.indexOf(t);
                      })
                    );
                  }),
                  (t.exports.Options = e),
                  (t.exports.normalizeOpts = i),
                  (t.exports.mergeOpts = n);
              },
              ,
              function (t) {
                var e = RegExp.prototype.hasOwnProperty("sticky");
                function n(t) {
                  (this.__input = t || ""),
                    (this.__input_length = this.__input.length),
                    (this.__position = 0);
                }
                (n.prototype.restart = function () {
                  this.__position = 0;
                }),
                  (n.prototype.back = function () {
                    this.__position > 0 && (this.__position -= 1);
                  }),
                  (n.prototype.hasNext = function () {
                    return this.__position < this.__input_length;
                  }),
                  (n.prototype.next = function () {
                    var t = null;
                    return (
                      this.hasNext() &&
                        ((t = this.__input.charAt(this.__position)),
                        (this.__position += 1)),
                      t
                    );
                  }),
                  (n.prototype.peek = function (t) {
                    var e = null;
                    return (
                      (t = t || 0),
                      (t += this.__position) >= 0 &&
                        t < this.__input_length &&
                        (e = this.__input.charAt(t)),
                      e
                    );
                  }),
                  (n.prototype.__match = function (t, n) {
                    t.lastIndex = n;
                    var i = t.exec(this.__input);
                    return (
                      !i || (e && t.sticky) || (i.index !== n && (i = null)), i
                    );
                  }),
                  (n.prototype.test = function (t, e) {
                    return (
                      (e = e || 0),
                      (e += this.__position) >= 0 &&
                        e < this.__input_length &&
                        !!this.__match(t, e)
                    );
                  }),
                  (n.prototype.testChar = function (t, e) {
                    var n = this.peek(e);
                    return (t.lastIndex = 0), null !== n && t.test(n);
                  }),
                  (n.prototype.match = function (t) {
                    var e = this.__match(t, this.__position);
                    return e ? (this.__position += e[0].length) : (e = null), e;
                  }),
                  (n.prototype.read = function (t, e, n) {
                    var i,
                      r = "";
                    return (
                      t && (i = this.match(t)) && (r += i[0]),
                      !e || (!i && t) || (r += this.readUntil(e, n)),
                      r
                    );
                  }),
                  (n.prototype.readUntil = function (t, e) {
                    var n,
                      i = this.__position;
                    t.lastIndex = this.__position;
                    var r = t.exec(this.__input);
                    return (
                      r
                        ? ((i = r.index), e && (i += r[0].length))
                        : (i = this.__input_length),
                      (n = this.__input.substring(this.__position, i)),
                      (this.__position = i),
                      n
                    );
                  }),
                  (n.prototype.readUntilAfter = function (t) {
                    return this.readUntil(t, !0);
                  }),
                  (n.prototype.get_regexp = function (t, n) {
                    var i = null,
                      r = "g";
                    return (
                      n && e && (r = "y"),
                      "string" == typeof t && "" !== t
                        ? (i = new RegExp(t, r))
                        : t && (i = new RegExp(t.source, r)),
                      i
                    );
                  }),
                  (n.prototype.get_literal_regexp = function (t) {
                    return RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
                  }),
                  (n.prototype.peekUntilAfter = function (t) {
                    var e = this.__position,
                      n = this.readUntilAfter(t);
                    return (this.__position = e), n;
                  }),
                  (n.prototype.lookBack = function (t) {
                    var e = this.__position - 1;
                    return (
                      e >= t.length &&
                      this.__input.substring(e - t.length, e).toLowerCase() ===
                        t
                    );
                  }),
                  (t.exports.InputScanner = n);
              },
              function (t, e, n) {
                var i = n(8).InputScanner,
                  r = n(3).Token,
                  o = n(10).TokenStream,
                  s = n(11).WhitespacePattern,
                  a = { START: "TK_START", RAW: "TK_RAW", EOF: "TK_EOF" },
                  u = function (t, e) {
                    (this._input = new i(t)),
                      (this._options = e || {}),
                      (this.__tokens = null),
                      (this._patterns = {}),
                      (this._patterns.whitespace = new s(this._input));
                  };
                (u.prototype.tokenize = function () {
                  var t;
                  this._input.restart(),
                    (this.__tokens = new o()),
                    this._reset();
                  for (
                    var e = new r(a.START, ""), n = null, i = [], s = new o();
                    e.type !== a.EOF;

                  ) {
                    for (t = this._get_next_token(e, n); this._is_comment(t); )
                      s.add(t), (t = this._get_next_token(e, n));
                    s.isEmpty() || ((t.comments_before = s), (s = new o())),
                      (t.parent = n),
                      this._is_opening(t)
                        ? (i.push(n), (n = t))
                        : n &&
                          this._is_closing(t, n) &&
                          ((t.opened = n),
                          (n.closed = t),
                          (n = i.pop()),
                          (t.parent = n)),
                      (t.previous = e),
                      (e.next = t),
                      this.__tokens.add(t),
                      (e = t);
                  }
                  return this.__tokens;
                }),
                  (u.prototype._is_first_token = function () {
                    return this.__tokens.isEmpty();
                  }),
                  (u.prototype._reset = function () {}),
                  (u.prototype._get_next_token = function (t, e) {
                    this._readWhitespace();
                    var n = this._input.read(/.+/g);
                    return n
                      ? this._create_token(a.RAW, n)
                      : this._create_token(a.EOF, "");
                  }),
                  (u.prototype._is_comment = function (t) {
                    return !1;
                  }),
                  (u.prototype._is_opening = function (t) {
                    return !1;
                  }),
                  (u.prototype._is_closing = function (t, e) {
                    return !1;
                  }),
                  (u.prototype._create_token = function (t, e) {
                    return new r(
                      t,
                      e,
                      this._patterns.whitespace.newline_count,
                      this._patterns.whitespace.whitespace_before_token,
                    );
                  }),
                  (u.prototype._readWhitespace = function () {
                    return this._patterns.whitespace.read();
                  }),
                  (t.exports.Tokenizer = u),
                  (t.exports.TOKEN = a);
              },
              function (t) {
                function e(t) {
                  (this.__tokens = []),
                    (this.__tokens_length = this.__tokens.length),
                    (this.__position = 0),
                    (this.__parent_token = t);
                }
                (e.prototype.restart = function () {
                  this.__position = 0;
                }),
                  (e.prototype.isEmpty = function () {
                    return 0 === this.__tokens_length;
                  }),
                  (e.prototype.hasNext = function () {
                    return this.__position < this.__tokens_length;
                  }),
                  (e.prototype.next = function () {
                    var t = null;
                    return (
                      this.hasNext() &&
                        ((t = this.__tokens[this.__position]),
                        (this.__position += 1)),
                      t
                    );
                  }),
                  (e.prototype.peek = function (t) {
                    var e = null;
                    return (
                      (t = t || 0),
                      (t += this.__position) >= 0 &&
                        t < this.__tokens_length &&
                        (e = this.__tokens[t]),
                      e
                    );
                  }),
                  (e.prototype.add = function (t) {
                    this.__parent_token && (t.parent = this.__parent_token),
                      this.__tokens.push(t),
                      (this.__tokens_length += 1);
                  }),
                  (t.exports.TokenStream = e);
              },
              function (t, e, n) {
                var i = n(12).Pattern;
                function r(t, e) {
                  i.call(this, t, e),
                    e
                      ? (this._line_regexp = this._input.get_regexp(
                          e._line_regexp,
                        ))
                      : this.__set_whitespace_patterns("", ""),
                    (this.newline_count = 0),
                    (this.whitespace_before_token = "");
                }
                (r.prototype = new i()),
                  (r.prototype.__set_whitespace_patterns = function (t, e) {
                    (t += "\\t "),
                      (e += "\\n\\r"),
                      (this._match_pattern = this._input.get_regexp(
                        "[" + t + e + "]+",
                        !0,
                      )),
                      (this._newline_regexp = this._input.get_regexp(
                        "\\r\\n|[" + e + "]",
                      ));
                  }),
                  (r.prototype.read = function () {
                    (this.newline_count = 0),
                      (this.whitespace_before_token = "");
                    var t = this._input.read(this._match_pattern);
                    if (" " === t) this.whitespace_before_token = " ";
                    else if (t) {
                      var e = this.__split(this._newline_regexp, t);
                      (this.newline_count = e.length - 1),
                        (this.whitespace_before_token = e[this.newline_count]);
                    }
                    return t;
                  }),
                  (r.prototype.matching = function (t, e) {
                    var n = this._create();
                    return n.__set_whitespace_patterns(t, e), n._update(), n;
                  }),
                  (r.prototype._create = function () {
                    return new r(this._input, this);
                  }),
                  (r.prototype.__split = function (t, e) {
                    t.lastIndex = 0;
                    for (var n = 0, i = [], r = t.exec(e); r; )
                      i.push(e.substring(n, r.index)),
                        (n = r.index + r[0].length),
                        (r = t.exec(e));
                    return (
                      n < e.length
                        ? i.push(e.substring(n, e.length))
                        : i.push(""),
                      i
                    );
                  }),
                  (t.exports.WhitespacePattern = r);
              },
              function (t) {
                function e(t, e) {
                  (this._input = t),
                    (this._starting_pattern = null),
                    (this._match_pattern = null),
                    (this._until_pattern = null),
                    (this._until_after = !1),
                    e &&
                      ((this._starting_pattern = this._input.get_regexp(
                        e._starting_pattern,
                        !0,
                      )),
                      (this._match_pattern = this._input.get_regexp(
                        e._match_pattern,
                        !0,
                      )),
                      (this._until_pattern = this._input.get_regexp(
                        e._until_pattern,
                      )),
                      (this._until_after = e._until_after));
                }
                (e.prototype.read = function () {
                  var t = this._input.read(this._starting_pattern);
                  return (
                    (this._starting_pattern && !t) ||
                      (t += this._input.read(
                        this._match_pattern,
                        this._until_pattern,
                        this._until_after,
                      )),
                    t
                  );
                }),
                  (e.prototype.read_match = function () {
                    return this._input.match(this._match_pattern);
                  }),
                  (e.prototype.until_after = function (t) {
                    var e = this._create();
                    return (
                      (e._until_after = !0),
                      (e._until_pattern = this._input.get_regexp(t)),
                      e._update(),
                      e
                    );
                  }),
                  (e.prototype.until = function (t) {
                    var e = this._create();
                    return (
                      (e._until_after = !1),
                      (e._until_pattern = this._input.get_regexp(t)),
                      e._update(),
                      e
                    );
                  }),
                  (e.prototype.starting_with = function (t) {
                    var e = this._create();
                    return (
                      (e._starting_pattern = this._input.get_regexp(t, !0)),
                      e._update(),
                      e
                    );
                  }),
                  (e.prototype.matching = function (t) {
                    var e = this._create();
                    return (
                      (e._match_pattern = this._input.get_regexp(t, !0)),
                      e._update(),
                      e
                    );
                  }),
                  (e.prototype._create = function () {
                    return new e(this._input, this);
                  }),
                  (e.prototype._update = function () {}),
                  (t.exports.Pattern = e);
              },
              function (t) {
                function e(t, e) {
                  (t = "string" == typeof t ? t : t.source),
                    (e = "string" == typeof e ? e : e.source),
                    (this.__directives_block_pattern = new RegExp(
                      t + / beautify( \w+[:]\w+)+ /.source + e,
                      "g",
                    )),
                    (this.__directive_pattern = / (\w+)[:](\w+)/g),
                    (this.__directives_end_ignore_pattern = new RegExp(
                      t + /\sbeautify\signore:end\s/.source + e,
                      "g",
                    ));
                }
                (e.prototype.get_directives = function (t) {
                  if (!t.match(this.__directives_block_pattern)) return null;
                  var e = {};
                  this.__directive_pattern.lastIndex = 0;
                  for (var n = this.__directive_pattern.exec(t); n; )
                    (e[n[1]] = n[2]), (n = this.__directive_pattern.exec(t));
                  return e;
                }),
                  (e.prototype.readIgnored = function (t) {
                    return t.readUntilAfter(
                      this.__directives_end_ignore_pattern,
                    );
                  }),
                  (t.exports.Directives = e);
              },
              function (t, e, n) {
                var i = n(12).Pattern,
                  r = {
                    django: !1,
                    erb: !1,
                    handlebars: !1,
                    php: !1,
                    smarty: !1,
                  };
                function o(t, e) {
                  i.call(this, t, e),
                    (this.__template_pattern = null),
                    (this._disabled = Object.assign({}, r)),
                    (this._excluded = Object.assign({}, r)),
                    e &&
                      ((this.__template_pattern = this._input.get_regexp(
                        e.__template_pattern,
                      )),
                      (this._excluded = Object.assign(
                        this._excluded,
                        e._excluded,
                      )),
                      (this._disabled = Object.assign(
                        this._disabled,
                        e._disabled,
                      )));
                  var n = new i(t);
                  this.__patterns = {
                    handlebars_comment: n
                      .starting_with(/{{!--/)
                      .until_after(/--}}/),
                    handlebars_unescaped: n
                      .starting_with(/{{{/)
                      .until_after(/}}}/),
                    handlebars: n.starting_with(/{{/).until_after(/}}/),
                    php: n.starting_with(/<\?(?:[= ]|php)/).until_after(/\?>/),
                    erb: n.starting_with(/<%[^%]/).until_after(/[^%]%>/),
                    django: n.starting_with(/{%/).until_after(/%}/),
                    django_value: n.starting_with(/{{/).until_after(/}}/),
                    django_comment: n.starting_with(/{#/).until_after(/#}/),
                    smarty: n
                      .starting_with(/{(?=[^}{\s\n])/)
                      .until_after(/[^\s\n]}/),
                    smarty_comment: n.starting_with(/{\*/).until_after(/\*}/),
                    smarty_literal: n
                      .starting_with(/{literal}/)
                      .until_after(/{\/literal}/),
                  };
                }
                (o.prototype = new i()),
                  (o.prototype._create = function () {
                    return new o(this._input, this);
                  }),
                  (o.prototype._update = function () {
                    this.__set_templated_pattern();
                  }),
                  (o.prototype.disable = function (t) {
                    var e = this._create();
                    return (e._disabled[t] = !0), e._update(), e;
                  }),
                  (o.prototype.read_options = function (t) {
                    var e = this._create();
                    for (var n in r)
                      e._disabled[n] = -1 === t.templating.indexOf(n);
                    return e._update(), e;
                  }),
                  (o.prototype.exclude = function (t) {
                    var e = this._create();
                    return (e._excluded[t] = !0), e._update(), e;
                  }),
                  (o.prototype.read = function () {
                    var t = "";
                    t = this._match_pattern
                      ? this._input.read(this._starting_pattern)
                      : this._input.read(
                          this._starting_pattern,
                          this.__template_pattern,
                        );
                    for (var e = this._read_template(); e; )
                      this._match_pattern
                        ? (e += this._input.read(this._match_pattern))
                        : (e += this._input.readUntil(this.__template_pattern)),
                        (t += e),
                        (e = this._read_template());
                    return (
                      this._until_after &&
                        (t += this._input.readUntilAfter(this._until_pattern)),
                      t
                    );
                  }),
                  (o.prototype.__set_templated_pattern = function () {
                    var t = [];
                    this._disabled.php ||
                      t.push(this.__patterns.php._starting_pattern.source),
                      this._disabled.handlebars ||
                        t.push(
                          this.__patterns.handlebars._starting_pattern.source,
                        ),
                      this._disabled.erb ||
                        t.push(this.__patterns.erb._starting_pattern.source),
                      this._disabled.django ||
                        (t.push(
                          this.__patterns.django._starting_pattern.source,
                        ),
                        t.push(
                          this.__patterns.django_value._starting_pattern.source,
                        ),
                        t.push(
                          this.__patterns.django_comment._starting_pattern
                            .source,
                        )),
                      this._disabled.smarty ||
                        t.push(this.__patterns.smarty._starting_pattern.source),
                      this._until_pattern && t.push(this._until_pattern.source),
                      (this.__template_pattern = this._input.get_regexp(
                        "(?:" + t.join("|") + ")",
                      ));
                  }),
                  (o.prototype._read_template = function () {
                    var t = "",
                      e = this._input.peek();
                    if ("<" === e) {
                      var n = this._input.peek(1);
                      this._disabled.php ||
                        this._excluded.php ||
                        "?" !== n ||
                        (t = t || this.__patterns.php.read()),
                        this._disabled.erb ||
                          this._excluded.erb ||
                          "%" !== n ||
                          (t = t || this.__patterns.erb.read());
                    } else
                      "{" === e &&
                        (this._disabled.handlebars ||
                          this._excluded.handlebars ||
                          (t =
                            (t =
                              (t =
                                t ||
                                this.__patterns.handlebars_comment.read()) ||
                              this.__patterns.handlebars_unescaped.read()) ||
                            this.__patterns.handlebars.read()),
                        this._disabled.django ||
                          (this._excluded.django ||
                            this._excluded.handlebars ||
                            (t = t || this.__patterns.django_value.read()),
                          this._excluded.django ||
                            (t =
                              (t =
                                t || this.__patterns.django_comment.read()) ||
                              this.__patterns.django.read())),
                        this._disabled.smarty ||
                          (this._disabled.django &&
                            this._disabled.handlebars &&
                            (t =
                              (t =
                                (t =
                                  t || this.__patterns.smarty_comment.read()) ||
                                this.__patterns.smarty_literal.read()) ||
                              this.__patterns.smarty.read())));
                    return t;
                  }),
                  (t.exports.TemplatablePattern = o);
              },
              ,
              ,
              ,
              function (t, e, n) {
                var i = n(19).Beautifier,
                  r = n(20).Options;
                (t.exports = function (t, e, n, r) {
                  return new i(t, e, n, r).beautify();
                }),
                  (t.exports.defaultOptions = function () {
                    return new r();
                  });
              },
              function (t, e, n) {
                var i = n(20).Options,
                  r = n(2).Output,
                  o = n(21).Tokenizer,
                  s = n(21).TOKEN,
                  a = /\r\n|[\r\n]/,
                  u = /\r\n|[\r\n]/g,
                  l = function (t, e) {
                    (this.indent_level = 0),
                      (this.alignment_size = 0),
                      (this.max_preserve_newlines = t.max_preserve_newlines),
                      (this.preserve_newlines = t.preserve_newlines),
                      (this._output = new r(t, e));
                  };
                (l.prototype.current_line_has_match = function (t) {
                  return this._output.current_line.has_match(t);
                }),
                  (l.prototype.set_space_before_token = function (t, e) {
                    (this._output.space_before_token = t),
                      (this._output.non_breaking_space = e);
                  }),
                  (l.prototype.set_wrap_point = function () {
                    this._output.set_indent(
                      this.indent_level,
                      this.alignment_size,
                    ),
                      this._output.set_wrap_point();
                  }),
                  (l.prototype.add_raw_token = function (t) {
                    this._output.add_raw_token(t);
                  }),
                  (l.prototype.print_preserved_newlines = function (t) {
                    var e = 0;
                    t.type !== s.TEXT &&
                      t.previous.type !== s.TEXT &&
                      (e = t.newlines ? 1 : 0),
                      this.preserve_newlines &&
                        (e =
                          t.newlines < this.max_preserve_newlines + 1
                            ? t.newlines
                            : this.max_preserve_newlines + 1);
                    for (var n = 0; n < e; n++) this.print_newline(n > 0);
                    return 0 !== e;
                  }),
                  (l.prototype.traverse_whitespace = function (t) {
                    return (
                      !(!t.whitespace_before && !t.newlines) &&
                      (this.print_preserved_newlines(t) ||
                        (this._output.space_before_token = !0),
                      !0)
                    );
                  }),
                  (l.prototype.previous_token_wrapped = function () {
                    return this._output.previous_token_wrapped;
                  }),
                  (l.prototype.print_newline = function (t) {
                    this._output.add_new_line(t);
                  }),
                  (l.prototype.print_token = function (t) {
                    t.text &&
                      (this._output.set_indent(
                        this.indent_level,
                        this.alignment_size,
                      ),
                      this._output.add_token(t.text));
                  }),
                  (l.prototype.indent = function () {
                    this.indent_level++;
                  }),
                  (l.prototype.get_full_indent = function (t) {
                    return (t = this.indent_level + (t || 0)) < 1
                      ? ""
                      : this._output.get_indent_string(t);
                  });
                var c = function (t, e) {
                  var n = null,
                    i = null;
                  return e.closed
                    ? ("script" === t
                        ? (n = "text/javascript")
                        : "style" === t && (n = "text/css"),
                      (n =
                        (function (t) {
                          for (
                            var e = null, n = t.next;
                            n.type !== s.EOF && t.closed !== n;

                          ) {
                            if (n.type === s.ATTRIBUTE && "type" === n.text) {
                              n.next &&
                                n.next.type === s.EQUALS &&
                                n.next.next &&
                                n.next.next.type === s.VALUE &&
                                (e = n.next.next.text);
                              break;
                            }
                            n = n.next;
                          }
                          return e;
                        })(e) || n).search("text/css") > -1
                        ? (i = "css")
                        : n.search(
                              /module|((text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect))/,
                            ) > -1
                          ? (i = "javascript")
                          : n.search(/(text|application|dojo)\/(x-)?(html)/) >
                              -1
                            ? (i = "html")
                            : n.search(/test\/null/) > -1 && (i = "null"),
                      i)
                    : null;
                };
                function h(t, e) {
                  return -1 !== e.indexOf(t);
                }
                function p(t, e, n) {
                  (this.parent = t || null),
                    (this.tag = e ? e.tag_name : ""),
                    (this.indent_level = n || 0),
                    (this.parser_token = e || null);
                }
                function d(t) {
                  (this._printer = t), (this._current_frame = null);
                }
                function _(t, e, n, r) {
                  (this._source_text = t || ""),
                    (e = e || {}),
                    (this._js_beautify = n),
                    (this._css_beautify = r),
                    (this._tag_stack = null);
                  var o = new i(e, "html");
                  (this._options = o),
                    (this._is_wrap_attributes_force =
                      "force" ===
                      this._options.wrap_attributes.substr(0, "force".length)),
                    (this._is_wrap_attributes_force_expand_multiline =
                      "force-expand-multiline" ===
                      this._options.wrap_attributes),
                    (this._is_wrap_attributes_force_aligned =
                      "force-aligned" === this._options.wrap_attributes),
                    (this._is_wrap_attributes_aligned_multiple =
                      "aligned-multiple" === this._options.wrap_attributes),
                    (this._is_wrap_attributes_preserve =
                      "preserve" ===
                      this._options.wrap_attributes.substr(
                        0,
                        "preserve".length,
                      )),
                    (this._is_wrap_attributes_preserve_aligned =
                      "preserve-aligned" === this._options.wrap_attributes);
                }
                (d.prototype.get_parser_token = function () {
                  return this._current_frame
                    ? this._current_frame.parser_token
                    : null;
                }),
                  (d.prototype.record_tag = function (t) {
                    var e = new p(
                      this._current_frame,
                      t,
                      this._printer.indent_level,
                    );
                    this._current_frame = e;
                  }),
                  (d.prototype._try_pop_frame = function (t) {
                    var e = null;
                    return (
                      t &&
                        ((e = t.parser_token),
                        (this._printer.indent_level = t.indent_level),
                        (this._current_frame = t.parent)),
                      e
                    );
                  }),
                  (d.prototype._get_frame = function (t, e) {
                    for (
                      var n = this._current_frame;
                      n && -1 === t.indexOf(n.tag);

                    ) {
                      if (e && -1 !== e.indexOf(n.tag)) {
                        n = null;
                        break;
                      }
                      n = n.parent;
                    }
                    return n;
                  }),
                  (d.prototype.try_pop = function (t, e) {
                    var n = this._get_frame([t], e);
                    return this._try_pop_frame(n);
                  }),
                  (d.prototype.indent_to_tag = function (t) {
                    var e = this._get_frame(t);
                    e && (this._printer.indent_level = e.indent_level);
                  }),
                  (_.prototype.beautify = function () {
                    if (this._options.disabled) return this._source_text;
                    var t = this._source_text,
                      e = this._options.eol;
                    "auto" === this._options.eol &&
                      ((e = "\n"), t && a.test(t) && (e = t.match(a)[0]));
                    var n = (t = t.replace(u, "\n")).match(/^[\t ]*/)[0],
                      i = { text: "", type: "" },
                      r = new f(),
                      c = new l(this._options, n),
                      h = new o(t, this._options).tokenize();
                    this._tag_stack = new d(c);
                    for (var p = null, _ = h.next(); _.type !== s.EOF; )
                      _.type === s.TAG_OPEN || _.type === s.COMMENT
                        ? (r = p = this._handle_tag_open(c, _, r, i))
                        : _.type === s.ATTRIBUTE ||
                            _.type === s.EQUALS ||
                            _.type === s.VALUE ||
                            (_.type === s.TEXT && !r.tag_complete)
                          ? (p = this._handle_inside_tag(c, _, r, h))
                          : _.type === s.TAG_CLOSE
                            ? (p = this._handle_tag_close(c, _, r))
                            : _.type === s.TEXT
                              ? (p = this._handle_text(c, _, r))
                              : c.add_raw_token(_),
                        (i = p),
                        (_ = h.next());
                    return c._output.get_code(e);
                  }),
                  (_.prototype._handle_tag_close = function (t, e, n) {
                    var i = { text: e.text, type: e.type };
                    return (
                      (t.alignment_size = 0),
                      (n.tag_complete = !0),
                      t.set_space_before_token(
                        e.newlines || "" !== e.whitespace_before,
                        !0,
                      ),
                      n.is_unformatted
                        ? t.add_raw_token(e)
                        : ("<" === n.tag_start_char &&
                            (t.set_space_before_token("/" === e.text[0], !0),
                            this._is_wrap_attributes_force_expand_multiline &&
                              n.has_wrapped_attrs &&
                              t.print_newline(!1)),
                          t.print_token(e)),
                      !n.indent_content ||
                        n.is_unformatted ||
                        n.is_content_unformatted ||
                        (t.indent(), (n.indent_content = !1)),
                      n.is_inline_element ||
                        n.is_unformatted ||
                        n.is_content_unformatted ||
                        t.set_wrap_point(),
                      i
                    );
                  }),
                  (_.prototype._handle_inside_tag = function (t, e, n, i) {
                    var r = n.has_wrapped_attrs,
                      o = { text: e.text, type: e.type };
                    if (
                      (t.set_space_before_token(
                        e.newlines || "" !== e.whitespace_before,
                        !0,
                      ),
                      n.is_unformatted)
                    )
                      t.add_raw_token(e);
                    else if ("{" === n.tag_start_char && e.type === s.TEXT)
                      t.print_preserved_newlines(e)
                        ? ((e.newlines = 0), t.add_raw_token(e))
                        : t.print_token(e);
                    else {
                      if (
                        (e.type === s.ATTRIBUTE
                          ? (t.set_space_before_token(!0), (n.attr_count += 1))
                          : (e.type === s.EQUALS ||
                              (e.type === s.VALUE &&
                                e.previous.type === s.EQUALS)) &&
                            t.set_space_before_token(!1),
                        e.type === s.ATTRIBUTE &&
                          "<" === n.tag_start_char &&
                          ((this._is_wrap_attributes_preserve ||
                            this._is_wrap_attributes_preserve_aligned) &&
                            (t.traverse_whitespace(e),
                            (r = r || 0 !== e.newlines)),
                          this._is_wrap_attributes_force))
                      ) {
                        var a = n.attr_count > 1;
                        if (
                          this._is_wrap_attributes_force_expand_multiline &&
                          1 === n.attr_count
                        ) {
                          var u,
                            l = !0,
                            c = 0;
                          do {
                            if ((u = i.peek(c)).type === s.ATTRIBUTE) {
                              l = !1;
                              break;
                            }
                            c += 1;
                          } while (
                            c < 4 &&
                            u.type !== s.EOF &&
                            u.type !== s.TAG_CLOSE
                          );
                          a = !l;
                        }
                        a && (t.print_newline(!1), (r = !0));
                      }
                      t.print_token(e),
                        (r = r || t.previous_token_wrapped()),
                        (n.has_wrapped_attrs = r);
                    }
                    return o;
                  }),
                  (_.prototype._handle_text = function (t, e, n) {
                    var i = { text: e.text, type: "TK_CONTENT" };
                    return (
                      n.custom_beautifier_name
                        ? this._print_custom_beatifier_text(t, e, n)
                        : n.is_unformatted || n.is_content_unformatted
                          ? t.add_raw_token(e)
                          : (t.traverse_whitespace(e), t.print_token(e)),
                      i
                    );
                  }),
                  (_.prototype._print_custom_beatifier_text = function (
                    t,
                    e,
                    n,
                  ) {
                    var i = this;
                    if ("" !== e.text) {
                      var r,
                        o = e.text,
                        s = 1,
                        a = "",
                        u = "";
                      "javascript" === n.custom_beautifier_name &&
                      "function" == typeof this._js_beautify
                        ? (r = this._js_beautify)
                        : "css" === n.custom_beautifier_name &&
                            "function" == typeof this._css_beautify
                          ? (r = this._css_beautify)
                          : "html" === n.custom_beautifier_name &&
                            (r = function (t, e) {
                              return new _(
                                t,
                                e,
                                i._js_beautify,
                                i._css_beautify,
                              ).beautify();
                            }),
                        "keep" === this._options.indent_scripts
                          ? (s = 0)
                          : "separate" === this._options.indent_scripts &&
                            (s = -t.indent_level);
                      var l = t.get_full_indent(s);
                      if (
                        ((o = o.replace(/\n[ \t]*$/, "")),
                        "html" !== n.custom_beautifier_name &&
                          "<" === o[0] &&
                          o.match(/^(<!--|<!\[CDATA\[)/))
                      ) {
                        var c =
                          /^(<!--[^\n]*|<!\[CDATA\[)(\n?)([ \t\n]*)([\s\S]*)(-->|]]>)$/.exec(
                            o,
                          );
                        if (!c) return void t.add_raw_token(e);
                        (a = l + c[1] + "\n"),
                          (o = c[4]),
                          c[5] && (u = l + c[5]),
                          (o = o.replace(/\n[ \t]*$/, "")),
                          (c[2] || -1 !== c[3].indexOf("\n")) &&
                            (c = c[3].match(/[ \t]+$/)) &&
                            (e.whitespace_before = c[0]);
                      }
                      if (o)
                        if (r) {
                          var h = function () {
                            this.eol = "\n";
                          };
                          (h.prototype = this._options.raw_options),
                            (o = r(l + o, new h()));
                        } else {
                          var p = e.whitespace_before;
                          p &&
                            (o = o.replace(
                              new RegExp("\n(" + p + ")?", "g"),
                              "\n",
                            )),
                            (o = l + o.replace(/\n/g, "\n" + l));
                        }
                      a && (o = o ? a + o + "\n" + u : a + u),
                        t.print_newline(!1),
                        o &&
                          ((e.text = o),
                          (e.whitespace_before = ""),
                          (e.newlines = 0),
                          t.add_raw_token(e),
                          t.print_newline(!0));
                    }
                  }),
                  (_.prototype._handle_tag_open = function (t, e, n, i) {
                    var r = this._get_tag_open_token(e);
                    return (
                      (!n.is_unformatted && !n.is_content_unformatted) ||
                      n.is_empty_element ||
                      e.type !== s.TAG_OPEN ||
                      0 !== e.text.indexOf("</")
                        ? (t.traverse_whitespace(e),
                          this._set_tag_position(t, e, r, n, i),
                          r.is_inline_element || t.set_wrap_point(),
                          t.print_token(e))
                        : (t.add_raw_token(e),
                          (r.start_tag_token = this._tag_stack.try_pop(
                            r.tag_name,
                          ))),
                      (this._is_wrap_attributes_force_aligned ||
                        this._is_wrap_attributes_aligned_multiple ||
                        this._is_wrap_attributes_preserve_aligned) &&
                        (r.alignment_size = e.text.length + 1),
                      r.tag_complete ||
                        r.is_unformatted ||
                        (t.alignment_size = r.alignment_size),
                      r
                    );
                  });
                var f = function (t, e) {
                  if (
                    ((this.parent = t || null),
                    (this.text = ""),
                    (this.type = "TK_TAG_OPEN"),
                    (this.tag_name = ""),
                    (this.is_inline_element = !1),
                    (this.is_unformatted = !1),
                    (this.is_content_unformatted = !1),
                    (this.is_empty_element = !1),
                    (this.is_start_tag = !1),
                    (this.is_end_tag = !1),
                    (this.indent_content = !1),
                    (this.multiline_content = !1),
                    (this.custom_beautifier_name = null),
                    (this.start_tag_token = null),
                    (this.attr_count = 0),
                    (this.has_wrapped_attrs = !1),
                    (this.alignment_size = 0),
                    (this.tag_complete = !1),
                    (this.tag_start_char = ""),
                    (this.tag_check = ""),
                    e)
                  ) {
                    var n;
                    (this.tag_start_char = e.text[0]),
                      (this.text = e.text),
                      "<" === this.tag_start_char
                        ? ((n = e.text.match(/^<([^\s>]*)/)),
                          (this.tag_check = n ? n[1] : ""))
                        : ((n = e.text.match(/^{{~?(?:[\^]|#\*?)?([^\s}]+)/)),
                          (this.tag_check = n ? n[1] : ""),
                          (e.text.startsWith("{{#>") ||
                            e.text.startsWith("{{~#>")) &&
                            ">" === this.tag_check[0] &&
                            (">" === this.tag_check && null !== e.next
                              ? (this.tag_check = e.next.text.split(" ")[0])
                              : (this.tag_check = e.text.split(">")[1]))),
                      (this.tag_check = this.tag_check.toLowerCase()),
                      e.type === s.COMMENT && (this.tag_complete = !0),
                      (this.is_start_tag = "/" !== this.tag_check.charAt(0)),
                      (this.tag_name = this.is_start_tag
                        ? this.tag_check
                        : this.tag_check.substr(1)),
                      (this.is_end_tag =
                        !this.is_start_tag ||
                        (e.closed && "/>" === e.closed.text));
                    var i = 2;
                    "{" === this.tag_start_char &&
                      this.text.length >= 3 &&
                      "~" === this.text.charAt(2) &&
                      (i = 3),
                      (this.is_end_tag =
                        this.is_end_tag ||
                        ("{" === this.tag_start_char &&
                          (this.text.length < 3 ||
                            /[^#\^]/.test(this.text.charAt(i)))));
                  } else this.tag_complete = !0;
                };
                (_.prototype._get_tag_open_token = function (t) {
                  var e = new f(this._tag_stack.get_parser_token(), t);
                  return (
                    (e.alignment_size =
                      this._options.wrap_attributes_indent_size),
                    (e.is_end_tag =
                      e.is_end_tag ||
                      h(e.tag_check, this._options.void_elements)),
                    (e.is_empty_element =
                      e.tag_complete || (e.is_start_tag && e.is_end_tag)),
                    (e.is_unformatted =
                      !e.tag_complete &&
                      h(e.tag_check, this._options.unformatted)),
                    (e.is_content_unformatted =
                      !e.is_empty_element &&
                      h(e.tag_check, this._options.content_unformatted)),
                    (e.is_inline_element =
                      h(e.tag_name, this._options.inline) ||
                      e.tag_name.includes("-") ||
                      "{" === e.tag_start_char),
                    e
                  );
                }),
                  (_.prototype._set_tag_position = function (t, e, n, i, r) {
                    if (
                      (n.is_empty_element ||
                        (n.is_end_tag
                          ? (n.start_tag_token = this._tag_stack.try_pop(
                              n.tag_name,
                            ))
                          : (this._do_optional_end_element(n) &&
                              (n.is_inline_element || t.print_newline(!1)),
                            this._tag_stack.record_tag(n),
                            ("script" !== n.tag_name &&
                              "style" !== n.tag_name) ||
                              n.is_unformatted ||
                              n.is_content_unformatted ||
                              (n.custom_beautifier_name = c(n.tag_check, e)))),
                      h(n.tag_check, this._options.extra_liners) &&
                        (t.print_newline(!1),
                        t._output.just_added_blankline() ||
                          t.print_newline(!0)),
                      n.is_empty_element)
                    ) {
                      if ("{" === n.tag_start_char && "else" === n.tag_check)
                        this._tag_stack.indent_to_tag(["if", "unless", "each"]),
                          (n.indent_content = !0),
                          t.current_line_has_match(/{{#if/) ||
                            t.print_newline(!1);
                      ("!--" === n.tag_name &&
                        r.type === s.TAG_CLOSE &&
                        i.is_end_tag &&
                        -1 === n.text.indexOf("\n")) ||
                        (n.is_inline_element ||
                          n.is_unformatted ||
                          t.print_newline(!1),
                        this._calcluate_parent_multiline(t, n));
                    } else if (n.is_end_tag) {
                      var o = !1;
                      (o =
                        (o =
                          n.start_tag_token &&
                          n.start_tag_token.multiline_content) ||
                        (!n.is_inline_element &&
                          !(i.is_inline_element || i.is_unformatted) &&
                          !(
                            r.type === s.TAG_CLOSE && n.start_tag_token === i
                          ) &&
                          "TK_CONTENT" !== r.type)),
                        (n.is_content_unformatted || n.is_unformatted) &&
                          (o = !1),
                        o && t.print_newline(!1);
                    } else
                      (n.indent_content = !n.custom_beautifier_name),
                        "<" === n.tag_start_char &&
                          ("html" === n.tag_name
                            ? (n.indent_content =
                                this._options.indent_inner_html)
                            : "head" === n.tag_name
                              ? (n.indent_content =
                                  this._options.indent_head_inner_html)
                              : "body" === n.tag_name &&
                                (n.indent_content =
                                  this._options.indent_body_inner_html)),
                        n.is_inline_element ||
                          n.is_unformatted ||
                          ("TK_CONTENT" === r.type &&
                            !n.is_content_unformatted) ||
                          t.print_newline(!1),
                        this._calcluate_parent_multiline(t, n);
                  }),
                  (_.prototype._calcluate_parent_multiline = function (t, e) {
                    !e.parent ||
                      !t._output.just_added_newline() ||
                      ((e.is_inline_element || e.is_unformatted) &&
                        e.parent.is_inline_element) ||
                      (e.parent.multiline_content = !0);
                  });
                var g = [
                    "address",
                    "article",
                    "aside",
                    "blockquote",
                    "details",
                    "div",
                    "dl",
                    "fieldset",
                    "figcaption",
                    "figure",
                    "footer",
                    "form",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "header",
                    "hr",
                    "main",
                    "nav",
                    "ol",
                    "p",
                    "pre",
                    "section",
                    "table",
                    "ul",
                  ],
                  m = ["a", "audio", "del", "ins", "map", "noscript", "video"];
                (_.prototype._do_optional_end_element = function (t) {
                  var e = null;
                  if (!t.is_empty_element && t.is_start_tag && t.parent) {
                    if ("body" === t.tag_name)
                      e = e || this._tag_stack.try_pop("head");
                    else if ("li" === t.tag_name)
                      e = e || this._tag_stack.try_pop("li", ["ol", "ul"]);
                    else if ("dd" === t.tag_name || "dt" === t.tag_name)
                      e =
                        (e = e || this._tag_stack.try_pop("dt", ["dl"])) ||
                        this._tag_stack.try_pop("dd", ["dl"]);
                    else if (
                      "p" === t.parent.tag_name &&
                      -1 !== g.indexOf(t.tag_name)
                    ) {
                      var n = t.parent.parent;
                      (n && -1 !== m.indexOf(n.tag_name)) ||
                        (e = e || this._tag_stack.try_pop("p"));
                    } else
                      "rp" === t.tag_name || "rt" === t.tag_name
                        ? (e =
                            (e =
                              e ||
                              this._tag_stack.try_pop("rt", ["ruby", "rtc"])) ||
                            this._tag_stack.try_pop("rp", ["ruby", "rtc"]))
                        : "optgroup" === t.tag_name
                          ? (e =
                              e ||
                              this._tag_stack.try_pop("optgroup", ["select"]))
                          : "option" === t.tag_name
                            ? (e =
                                e ||
                                this._tag_stack.try_pop("option", [
                                  "select",
                                  "datalist",
                                  "optgroup",
                                ]))
                            : "colgroup" === t.tag_name
                              ? (e =
                                  e ||
                                  this._tag_stack.try_pop("caption", ["table"]))
                              : "thead" === t.tag_name
                                ? (e =
                                    (e =
                                      e ||
                                      this._tag_stack.try_pop("caption", [
                                        "table",
                                      ])) ||
                                    this._tag_stack.try_pop("colgroup", [
                                      "table",
                                    ]))
                                : "tbody" === t.tag_name ||
                                    "tfoot" === t.tag_name
                                  ? (e =
                                      (e =
                                        (e =
                                          (e =
                                            e ||
                                            this._tag_stack.try_pop("caption", [
                                              "table",
                                            ])) ||
                                          this._tag_stack.try_pop("colgroup", [
                                            "table",
                                          ])) ||
                                        this._tag_stack.try_pop("thead", [
                                          "table",
                                        ])) ||
                                      this._tag_stack.try_pop("tbody", [
                                        "table",
                                      ]))
                                  : "tr" === t.tag_name
                                    ? (e =
                                        (e =
                                          (e =
                                            e ||
                                            this._tag_stack.try_pop("caption", [
                                              "table",
                                            ])) ||
                                          this._tag_stack.try_pop("colgroup", [
                                            "table",
                                          ])) ||
                                        this._tag_stack.try_pop("tr", [
                                          "table",
                                          "thead",
                                          "tbody",
                                          "tfoot",
                                        ]))
                                    : ("th" !== t.tag_name &&
                                        "td" !== t.tag_name) ||
                                      (e =
                                        (e =
                                          e ||
                                          this._tag_stack.try_pop("td", [
                                            "table",
                                            "thead",
                                            "tbody",
                                            "tfoot",
                                            "tr",
                                          ])) ||
                                        this._tag_stack.try_pop("th", [
                                          "table",
                                          "thead",
                                          "tbody",
                                          "tfoot",
                                          "tr",
                                        ]));
                    return (t.parent = this._tag_stack.get_parser_token()), e;
                  }
                }),
                  (t.exports.Beautifier = _);
              },
              function (t, e, n) {
                var i = n(6).Options;
                function r(t) {
                  i.call(this, t, "html"),
                    1 === this.templating.length &&
                      "auto" === this.templating[0] &&
                      (this.templating = [
                        "django",
                        "erb",
                        "handlebars",
                        "php",
                      ]),
                    (this.indent_inner_html =
                      this._get_boolean("indent_inner_html")),
                    (this.indent_body_inner_html = this._get_boolean(
                      "indent_body_inner_html",
                      !0,
                    )),
                    (this.indent_head_inner_html = this._get_boolean(
                      "indent_head_inner_html",
                      !0,
                    )),
                    (this.indent_handlebars = this._get_boolean(
                      "indent_handlebars",
                      !0,
                    )),
                    (this.wrap_attributes = this._get_selection(
                      "wrap_attributes",
                      [
                        "auto",
                        "force",
                        "force-aligned",
                        "force-expand-multiline",
                        "aligned-multiple",
                        "preserve",
                        "preserve-aligned",
                      ],
                    )),
                    (this.wrap_attributes_indent_size = this._get_number(
                      "wrap_attributes_indent_size",
                      this.indent_size,
                    )),
                    (this.extra_liners = this._get_array("extra_liners", [
                      "head",
                      "body",
                      "/html",
                    ])),
                    (this.inline = this._get_array("inline", [
                      "a",
                      "abbr",
                      "area",
                      "audio",
                      "b",
                      "bdi",
                      "bdo",
                      "br",
                      "button",
                      "canvas",
                      "cite",
                      "code",
                      "data",
                      "datalist",
                      "del",
                      "dfn",
                      "em",
                      "embed",
                      "i",
                      "iframe",
                      "img",
                      "input",
                      "ins",
                      "kbd",
                      "keygen",
                      "label",
                      "map",
                      "mark",
                      "math",
                      "meter",
                      "noscript",
                      "object",
                      "output",
                      "progress",
                      "q",
                      "ruby",
                      "s",
                      "samp",
                      "select",
                      "small",
                      "span",
                      "strong",
                      "sub",
                      "sup",
                      "svg",
                      "template",
                      "textarea",
                      "time",
                      "u",
                      "var",
                      "video",
                      "wbr",
                      "text",
                      "acronym",
                      "big",
                      "strike",
                      "tt",
                    ])),
                    (this.void_elements = this._get_array("void_elements", [
                      "area",
                      "base",
                      "br",
                      "col",
                      "embed",
                      "hr",
                      "img",
                      "input",
                      "keygen",
                      "link",
                      "menuitem",
                      "meta",
                      "param",
                      "source",
                      "track",
                      "wbr",
                      "!doctype",
                      "?xml",
                      "basefont",
                      "isindex",
                    ])),
                    (this.unformatted = this._get_array("unformatted", [])),
                    (this.content_unformatted = this._get_array(
                      "content_unformatted",
                      ["pre", "textarea"],
                    )),
                    (this.unformatted_content_delimiter = this._get_characters(
                      "unformatted_content_delimiter",
                    )),
                    (this.indent_scripts = this._get_selection(
                      "indent_scripts",
                      ["normal", "keep", "separate"],
                    ));
                }
                (r.prototype = new i()), (t.exports.Options = r);
              },
              function (t, e, n) {
                var i = n(9).Tokenizer,
                  r = n(9).TOKEN,
                  o = n(13).Directives,
                  s = n(14).TemplatablePattern,
                  a = n(12).Pattern,
                  u = {
                    TAG_OPEN: "TK_TAG_OPEN",
                    TAG_CLOSE: "TK_TAG_CLOSE",
                    ATTRIBUTE: "TK_ATTRIBUTE",
                    EQUALS: "TK_EQUALS",
                    VALUE: "TK_VALUE",
                    COMMENT: "TK_COMMENT",
                    TEXT: "TK_TEXT",
                    UNKNOWN: "TK_UNKNOWN",
                    START: r.START,
                    RAW: r.RAW,
                    EOF: r.EOF,
                  },
                  l = new o(/<\!--/, /-->/),
                  c = function (t, e) {
                    i.call(this, t, e), (this._current_tag_name = "");
                    var n = new s(this._input).read_options(this._options),
                      r = new a(this._input);
                    if (
                      ((this.__patterns = {
                        word: n.until(/[\n\r\t <]/),
                        single_quote: n.until_after(/'/),
                        double_quote: n.until_after(/"/),
                        attribute: n.until(/[\n\r\t =>]|\/>/),
                        element_name: n.until(/[\n\r\t >\/]/),
                        handlebars_comment: r
                          .starting_with(/{{!--/)
                          .until_after(/--}}/),
                        handlebars: r.starting_with(/{{/).until_after(/}}/),
                        handlebars_open: r.until(/[\n\r\t }]/),
                        handlebars_raw_close: r.until(/}}/),
                        comment: r.starting_with(/<!--/).until_after(/-->/),
                        cdata: r
                          .starting_with(/<!\[CDATA\[/)
                          .until_after(/]]>/),
                        conditional_comment: r
                          .starting_with(/<!\[/)
                          .until_after(/]>/),
                        processing: r.starting_with(/<\?/).until_after(/\?>/),
                      }),
                      this._options.indent_handlebars &&
                        (this.__patterns.word =
                          this.__patterns.word.exclude("handlebars")),
                      (this._unformatted_content_delimiter = null),
                      this._options.unformatted_content_delimiter)
                    ) {
                      var o = this._input.get_literal_regexp(
                        this._options.unformatted_content_delimiter,
                      );
                      this.__patterns.unformatted_content_delimiter = r
                        .matching(o)
                        .until_after(o);
                    }
                  };
                ((c.prototype = new i())._is_comment = function (t) {
                  return !1;
                }),
                  (c.prototype._is_opening = function (t) {
                    return t.type === u.TAG_OPEN;
                  }),
                  (c.prototype._is_closing = function (t, e) {
                    return (
                      t.type === u.TAG_CLOSE &&
                      e &&
                      (((">" === t.text || "/>" === t.text) &&
                        "<" === e.text[0]) ||
                        ("}}" === t.text &&
                          "{" === e.text[0] &&
                          "{" === e.text[1]))
                    );
                  }),
                  (c.prototype._reset = function () {
                    this._current_tag_name = "";
                  }),
                  (c.prototype._get_next_token = function (t, e) {
                    var n = null;
                    this._readWhitespace();
                    var i = this._input.peek();
                    return null === i
                      ? this._create_token(u.EOF, "")
                      : (n =
                          (n =
                            (n =
                              (n =
                                (n =
                                  (n =
                                    (n =
                                      (n =
                                        (n =
                                          n ||
                                          this._read_open_handlebars(i, e)) ||
                                        this._read_attribute(i, t, e)) ||
                                      this._read_close(i, e)) ||
                                    this._read_raw_content(i, t, e)) ||
                                  this._read_content_word(i)) ||
                                this._read_comment_or_cdata(i)) ||
                              this._read_processing(i)) ||
                            this._read_open(i, e)) ||
                          this._create_token(u.UNKNOWN, this._input.next()));
                  }),
                  (c.prototype._read_comment_or_cdata = function (t) {
                    var e = null,
                      n = null,
                      i = null;
                    "<" === t &&
                      ("!" === this._input.peek(1) &&
                        ((n = this.__patterns.comment.read())
                          ? (i = l.get_directives(n)) &&
                            "start" === i.ignore &&
                            (n += l.readIgnored(this._input))
                          : (n = this.__patterns.cdata.read())),
                      n &&
                        ((e = this._create_token(u.COMMENT, n)).directives =
                          i));
                    return e;
                  }),
                  (c.prototype._read_processing = function (t) {
                    var e = null,
                      n = null;
                    if ("<" === t) {
                      var i = this._input.peek(1);
                      ("!" !== i && "?" !== i) ||
                        (n =
                          (n = this.__patterns.conditional_comment.read()) ||
                          this.__patterns.processing.read()),
                        n &&
                          ((e = this._create_token(u.COMMENT, n)).directives =
                            null);
                    }
                    return e;
                  }),
                  (c.prototype._read_open = function (t, e) {
                    var n = null,
                      i = null;
                    return (
                      e ||
                        ("<" === t &&
                          ((n = this._input.next()),
                          "/" === this._input.peek() &&
                            (n += this._input.next()),
                          (n += this.__patterns.element_name.read()),
                          (i = this._create_token(u.TAG_OPEN, n)))),
                      i
                    );
                  }),
                  (c.prototype._read_open_handlebars = function (t, e) {
                    var n = null,
                      i = null;
                    return (
                      e ||
                        (this._options.indent_handlebars &&
                          "{" === t &&
                          "{" === this._input.peek(1) &&
                          ("!" === this._input.peek(2)
                            ? ((n =
                                (n =
                                  this.__patterns.handlebars_comment.read()) ||
                                this.__patterns.handlebars.read()),
                              (i = this._create_token(u.COMMENT, n)))
                            : ((n = this.__patterns.handlebars_open.read()),
                              (i = this._create_token(u.TAG_OPEN, n))))),
                      i
                    );
                  }),
                  (c.prototype._read_close = function (t, e) {
                    var n = null,
                      i = null;
                    return (
                      e &&
                        ("<" === e.text[0] &&
                        (">" === t ||
                          ("/" === t && ">" === this._input.peek(1)))
                          ? ((n = this._input.next()),
                            "/" === t && (n += this._input.next()),
                            (i = this._create_token(u.TAG_CLOSE, n)))
                          : "{" === e.text[0] &&
                            "}" === t &&
                            "}" === this._input.peek(1) &&
                            (this._input.next(),
                            this._input.next(),
                            (i = this._create_token(u.TAG_CLOSE, "}}")))),
                      i
                    );
                  }),
                  (c.prototype._read_attribute = function (t, e, n) {
                    var i = null,
                      r = "";
                    if (n && "<" === n.text[0])
                      if ("=" === t)
                        i = this._create_token(u.EQUALS, this._input.next());
                      else if ('"' === t || "'" === t) {
                        var o = this._input.next();
                        (o +=
                          '"' === t
                            ? this.__patterns.double_quote.read()
                            : this.__patterns.single_quote.read()),
                          (i = this._create_token(u.VALUE, o));
                      } else
                        (r = this.__patterns.attribute.read()) &&
                          (i =
                            e.type === u.EQUALS
                              ? this._create_token(u.VALUE, r)
                              : this._create_token(u.ATTRIBUTE, r));
                    return i;
                  }),
                  (c.prototype._is_content_unformatted = function (t) {
                    return (
                      -1 === this._options.void_elements.indexOf(t) &&
                      (-1 !== this._options.content_unformatted.indexOf(t) ||
                        -1 !== this._options.unformatted.indexOf(t))
                    );
                  }),
                  (c.prototype._read_raw_content = function (t, e, n) {
                    var i = "";
                    if (n && "{" === n.text[0])
                      i = this.__patterns.handlebars_raw_close.read();
                    else if (
                      e.type === u.TAG_CLOSE &&
                      "<" === e.opened.text[0] &&
                      "/" !== e.text[0]
                    ) {
                      var r = e.opened.text.substr(1).toLowerCase();
                      if ("script" === r || "style" === r) {
                        var o = this._read_comment_or_cdata(t);
                        if (o) return (o.type = u.TEXT), o;
                        i = this._input.readUntil(
                          new RegExp("</" + r + "[\\n\\r\\t ]*?>", "ig"),
                        );
                      } else
                        this._is_content_unformatted(r) &&
                          (i = this._input.readUntil(
                            new RegExp("</" + r + "[\\n\\r\\t ]*?>", "ig"),
                          ));
                    }
                    return i ? this._create_token(u.TEXT, i) : null;
                  }),
                  (c.prototype._read_content_word = function (t) {
                    var e = "";
                    if (
                      (this._options.unformatted_content_delimiter &&
                        t === this._options.unformatted_content_delimiter[0] &&
                        (e =
                          this.__patterns.unformatted_content_delimiter.read()),
                      e || (e = this.__patterns.word.read()),
                      e)
                    )
                      return this._create_token(u.TEXT, e);
                  }),
                  (t.exports.Tokenizer = c),
                  (t.exports.TOKEN = u);
              },
            ],
            e = {};
          var n = (function n(i) {
            var r = e[i];
            if (void 0 !== r) return r.exports;
            var o = (e[i] = { exports: {} });
            return t[i](o, o.exports, n), o.exports;
          })(18);
          o = n;
        })();
        var s = o;
        (i = [n, n(12), n(13)]),
          void 0 ===
            (r = function (t) {
              var e = n(12),
                i = n(13);
              return {
                html_beautify: function (t, n) {
                  return s(t, n, e.js_beautify, i.css_beautify);
                },
              };
            }.apply(e, i)) || (t.exports = r);
      })();
    },
    function (t, e, n) {
      (e = n(6)(!1)).push([
        t.i,
        ".eruda-dev-tools .eruda-tools .eruda-code{padding-bottom:40px}.eruda-dev-tools .eruda-tools .eruda-code .eruda-editor{height:100%}.eruda-dev-tools .eruda-tools .eruda-code .eruda-bottom-bar{height:40px;background:var(--darker-background);position:absolute;left:0;bottom:0;width:100%;font-size:0;border-top:1px solid var(--border)}.eruda-dev-tools .eruda-tools .eruda-code .eruda-bottom-bar .eruda-btn{cursor:pointer;text-align:center;color:var(--foreground);font-size:14px;line-height:40px;width:25%;border-right:1px solid var(--border);display:inline-block;transition:background-color .3s,color .3s}.eruda-dev-tools .eruda-tools .eruda-code .eruda-bottom-bar .eruda-btn:active{background:var(--highlight);color:var(--select-foreground)}.eruda-dev-tools .eruda-tools .eruda-code .eruda-bottom-bar .eruda-btn.eruda-active{color:var(--select-foreground)}\n",
        "",
      ]),
        (t.exports = e);
    },
    function (t, e, n) {
      (e = n(6)(!1)).push([
        t.i,
        "/* BASICS */\n\n.eruda-dev-tools .eruda-tools .CodeMirror {\n  /* Set height, width, borders, and global font properties here */\n  font-family: monospace;\n  height: 300px;\n  color: black;\n  direction: ltr;\n}\n\n/* PADDING */\n\n.eruda-dev-tools .eruda-tools .CodeMirror-lines {\n  padding: 4px 0; /* Vertical padding around content */\n}\n.eruda-dev-tools .eruda-tools .CodeMirror pre.CodeMirror-line,\n.eruda-dev-tools .eruda-tools .CodeMirror pre.CodeMirror-line-like {\n  padding: 0 4px; /* Horizontal padding of content */\n}\n\n.eruda-dev-tools .eruda-tools .CodeMirror-scrollbar-filler, .eruda-dev-tools .eruda-tools .CodeMirror-gutter-filler {\n  background-color: white; /* The little square between H and V scrollbars */\n}\n\n/* GUTTER */\n\n.eruda-dev-tools .eruda-tools .CodeMirror-gutters {\n  border-right: 1px solid #ddd;\n  background-color: #f7f7f7;\n  white-space: nowrap;\n}\n.eruda-dev-tools .eruda-tools .CodeMirror-linenumbers {}\n.eruda-dev-tools .eruda-tools .CodeMirror-linenumber {\n  padding: 0 3px 0 5px;\n  min-width: 20px;\n  text-align: right;\n  color: #999;\n  white-space: nowrap;\n}\n\n.eruda-dev-tools .eruda-tools .CodeMirror-guttermarker { color: black; }\n.eruda-dev-tools .eruda-tools .CodeMirror-guttermarker-subtle { color: #999; }\n\n/* CURSOR */\n\n.eruda-dev-tools .eruda-tools .CodeMirror-cursor {\n  border-left: 1px solid black;\n  border-right: none;\n  width: 0;\n}\n/* Shown when moving in bi-directional text */\n.eruda-dev-tools .eruda-tools .CodeMirror div.CodeMirror-secondarycursor {\n  border-left: 1px solid silver;\n}\n.eruda-dev-tools .eruda-tools .cm-fat-cursor .CodeMirror-cursor {\n  width: auto;\n  border: 0 !important;\n  background: #7e7;\n}\n.eruda-dev-tools .eruda-tools .cm-fat-cursor div.CodeMirror-cursors {\n  z-index: 1;\n}\n.eruda-dev-tools .eruda-tools .cm-fat-cursor .CodeMirror-line::-moz-selection, .eruda-dev-tools .eruda-tools .cm-fat-cursor .CodeMirror-line > span::-moz-selection, .eruda-dev-tools .eruda-tools .cm-fat-cursor .CodeMirror-line > span > span::-moz-selection { background: transparent; }\n.eruda-dev-tools .eruda-tools .cm-fat-cursor .CodeMirror-line::selection,\n.eruda-dev-tools .eruda-tools .cm-fat-cursor .CodeMirror-line > span::selection,\n.eruda-dev-tools .eruda-tools .cm-fat-cursor .CodeMirror-line > span > span::selection { background: transparent; }\n.eruda-dev-tools .eruda-tools .cm-fat-cursor .CodeMirror-line::-moz-selection,\n.eruda-dev-tools .eruda-tools .cm-fat-cursor .CodeMirror-line > span::-moz-selection,\n.eruda-dev-tools .eruda-tools .cm-fat-cursor .CodeMirror-line > span > span::-moz-selection { background: transparent; }\n.eruda-dev-tools .eruda-tools .cm-fat-cursor { caret-color: transparent; }\n@keyframes blink {\n  .eruda-dev-tools .eruda-tools 0% {}\n  .eruda-dev-tools .eruda-tools 50% { background-color: transparent; }\n  .eruda-dev-tools .eruda-tools 100% {}\n}\n\n/* Can style cursor different in overwrite (non-insert) mode */\n.eruda-dev-tools .eruda-tools .CodeMirror-overwrite .CodeMirror-cursor {}\n\n.eruda-dev-tools .eruda-tools .cm-tab { display: inline-block; text-decoration: inherit; }\n\n.eruda-dev-tools .eruda-tools .CodeMirror-rulers {\n  position: absolute;\n  left: 0; right: 0; top: -50px; bottom: 0;\n  overflow: hidden;\n}\n.eruda-dev-tools .eruda-tools .CodeMirror-ruler {\n  border-left: 1px solid #ccc;\n  top: 0; bottom: 0;\n  position: absolute;\n}\n\n/* DEFAULT THEME */\n\n.eruda-dev-tools .eruda-tools .cm-s-default .cm-header {color: blue;}\n.eruda-dev-tools .eruda-tools .cm-s-default .cm-quote {color: #090;}\n.eruda-dev-tools .eruda-tools .cm-negative {color: #d44;}\n.eruda-dev-tools .eruda-tools .cm-positive {color: #292;}\n.eruda-dev-tools .eruda-tools .cm-header, .eruda-dev-tools .eruda-tools .cm-strong {font-weight: bold;}\n.eruda-dev-tools .eruda-tools .cm-em {font-style: italic;}\n.eruda-dev-tools .eruda-tools .cm-link {text-decoration: underline;}\n.eruda-dev-tools .eruda-tools .cm-strikethrough {text-decoration: line-through;}\n\n.eruda-dev-tools .eruda-tools .cm-s-default .cm-keyword {color: #708;}\n.eruda-dev-tools .eruda-tools .cm-s-default .cm-atom {color: #219;}\n.eruda-dev-tools .eruda-tools .cm-s-default .cm-number {color: #164;}\n.eruda-dev-tools .eruda-tools .cm-s-default .cm-def {color: #00f;}\n.eruda-dev-tools .eruda-tools .cm-s-default .cm-variable,\n.eruda-dev-tools .eruda-tools .cm-s-default .cm-punctuation,\n.eruda-dev-tools .eruda-tools .cm-s-default .cm-property,\n.eruda-dev-tools .eruda-tools .cm-s-default .cm-operator {}\n.eruda-dev-tools .eruda-tools .cm-s-default .cm-variable-2 {color: #05a;}\n.eruda-dev-tools .eruda-tools .cm-s-default .cm-variable-3, .eruda-dev-tools .eruda-tools .cm-s-default .cm-type {color: #085;}\n.eruda-dev-tools .eruda-tools .cm-s-default .cm-comment {color: #a50;}\n.eruda-dev-tools .eruda-tools .cm-s-default .cm-string {color: #a11;}\n.eruda-dev-tools .eruda-tools .cm-s-default .cm-string-2 {color: #f50;}\n.eruda-dev-tools .eruda-tools .cm-s-default .cm-meta {color: #555;}\n.eruda-dev-tools .eruda-tools .cm-s-default .cm-qualifier {color: #555;}\n.eruda-dev-tools .eruda-tools .cm-s-default .cm-builtin {color: #30a;}\n.eruda-dev-tools .eruda-tools .cm-s-default .cm-bracket {color: #997;}\n.eruda-dev-tools .eruda-tools .cm-s-default .cm-tag {color: #170;}\n.eruda-dev-tools .eruda-tools .cm-s-default .cm-attribute {color: #00c;}\n.eruda-dev-tools .eruda-tools .cm-s-default .cm-hr {color: #999;}\n.eruda-dev-tools .eruda-tools .cm-s-default .cm-link {color: #00c;}\n\n.eruda-dev-tools .eruda-tools .cm-s-default .cm-error {color: #f00;}\n.eruda-dev-tools .eruda-tools .cm-invalidchar {color: #f00;}\n\n.eruda-dev-tools .eruda-tools .CodeMirror-composing { border-bottom: 2px solid; }\n\n/* Default styles for common addons */\n\n.eruda-dev-tools .eruda-tools div.CodeMirror span.CodeMirror-matchingbracket {color: #0b0;}\n.eruda-dev-tools .eruda-tools div.CodeMirror span.CodeMirror-nonmatchingbracket {color: #a22;}\n.eruda-dev-tools .eruda-tools .CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }\n.eruda-dev-tools .eruda-tools .CodeMirror-activeline-background {background: #e8f2ff;}\n\n/* STOP */\n\n/* The rest of this file contains styles related to the mechanics of\n   the editor. You probably shouldn't touch them. */\n\n.eruda-dev-tools .eruda-tools .CodeMirror {\n  position: relative;\n  overflow: hidden;\n  background: white;\n}\n\n.eruda-dev-tools .eruda-tools .CodeMirror-scroll {\n  overflow: scroll !important; /* Things will break if this is overridden */\n  /* 50px is the magic margin used to hide the element's real scrollbars */\n  /* See overflow: hidden in .CodeMirror */\n  margin-bottom: -50px; margin-right: -50px;\n  padding-bottom: 50px;\n  height: 100%;\n  outline: none; /* Prevent dragging from highlighting the element */\n  position: relative;\n  z-index: 0;\n}\n.eruda-dev-tools .eruda-tools .CodeMirror-sizer {\n  position: relative;\n  border-right: 50px solid transparent;\n}\n\n/* The fake, visible scrollbars. Used to force redraw during scrolling\n   before actual scrolling happens, thus preventing shaking and\n   flickering artifacts. */\n.eruda-dev-tools .eruda-tools .CodeMirror-vscrollbar, .eruda-dev-tools .eruda-tools .CodeMirror-hscrollbar, .eruda-dev-tools .eruda-tools .CodeMirror-scrollbar-filler, .eruda-dev-tools .eruda-tools .CodeMirror-gutter-filler {\n  position: absolute;\n  z-index: 6;\n  display: none;\n  outline: none;\n}\n.eruda-dev-tools .eruda-tools .CodeMirror-vscrollbar {\n  right: 0; top: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.eruda-dev-tools .eruda-tools .CodeMirror-hscrollbar {\n  bottom: 0; left: 0;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n.eruda-dev-tools .eruda-tools .CodeMirror-scrollbar-filler {\n  right: 0; bottom: 0;\n}\n.eruda-dev-tools .eruda-tools .CodeMirror-gutter-filler {\n  left: 0; bottom: 0;\n}\n\n.eruda-dev-tools .eruda-tools .CodeMirror-gutters {\n  position: absolute; left: 0; top: 0;\n  min-height: 100%;\n  z-index: 3;\n}\n.eruda-dev-tools .eruda-tools .CodeMirror-gutter {\n  white-space: normal;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: -50px;\n}\n.eruda-dev-tools .eruda-tools .CodeMirror-gutter-wrapper {\n  position: absolute;\n  z-index: 4;\n  background: none !important;\n  border: none !important;\n}\n.eruda-dev-tools .eruda-tools .CodeMirror-gutter-background {\n  position: absolute;\n  top: 0; bottom: 0;\n  z-index: 4;\n}\n.eruda-dev-tools .eruda-tools .CodeMirror-gutter-elt {\n  position: absolute;\n  cursor: default;\n  z-index: 4;\n}\n.eruda-dev-tools .eruda-tools .CodeMirror-gutter-wrapper ::-moz-selection { background-color: transparent }\n.eruda-dev-tools .eruda-tools .CodeMirror-gutter-wrapper ::selection { background-color: transparent }\n.eruda-dev-tools .eruda-tools .CodeMirror-gutter-wrapper ::-moz-selection { background-color: transparent }\n\n.eruda-dev-tools .eruda-tools .CodeMirror-lines {\n  cursor: text;\n  min-height: 1px; /* prevents collapsing before first draw */\n}\n.eruda-dev-tools .eruda-tools .CodeMirror pre.CodeMirror-line,\n.eruda-dev-tools .eruda-tools .CodeMirror pre.CodeMirror-line-like {\n  /* Reset some styles that the rest of the page might have set */ border-radius: 0;\n  border-width: 0;\n  background: transparent;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  white-space: pre;\n  word-wrap: normal;\n  line-height: inherit;\n  color: inherit;\n  z-index: 2;\n  position: relative;\n  overflow: visible;\n  -webkit-tap-highlight-color: transparent;\n  font-variant-ligatures: contextual;\n}\n.eruda-dev-tools .eruda-tools .CodeMirror-wrap pre.CodeMirror-line,\n.eruda-dev-tools .eruda-tools .CodeMirror-wrap pre.CodeMirror-line-like {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  word-break: normal;\n}\n\n.eruda-dev-tools .eruda-tools .CodeMirror-linebackground {\n  position: absolute;\n  left: 0; right: 0; top: 0; bottom: 0;\n  z-index: 0;\n}\n\n.eruda-dev-tools .eruda-tools .CodeMirror-linewidget {\n  position: relative;\n  z-index: 2;\n  padding: 0.1px; /* Force widget margins to stay inside of the container */\n}\n\n.eruda-dev-tools .eruda-tools .CodeMirror-widget {}\n\n.eruda-dev-tools .eruda-tools .CodeMirror-rtl pre { direction: rtl; }\n\n.eruda-dev-tools .eruda-tools .CodeMirror-code {\n  outline: none;\n}\n\n/* Force content-box sizing for the elements where we expect it */\n.eruda-dev-tools .eruda-tools .CodeMirror-scroll,\n.eruda-dev-tools .eruda-tools .CodeMirror-sizer,\n.eruda-dev-tools .eruda-tools .CodeMirror-gutter,\n.eruda-dev-tools .eruda-tools .CodeMirror-gutters,\n.eruda-dev-tools .eruda-tools .CodeMirror-linenumber {\n  box-sizing: content-box;\n}\n\n.eruda-dev-tools .eruda-tools .CodeMirror-measure {\n  position: absolute;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden;\n}\n\n.eruda-dev-tools .eruda-tools .CodeMirror-cursor {\n  position: absolute;\n  pointer-events: none;\n}\n.eruda-dev-tools .eruda-tools .CodeMirror-measure pre { position: static; }\n\n.eruda-dev-tools .eruda-tools div.CodeMirror-cursors {\n  visibility: hidden;\n  position: relative;\n  z-index: 3;\n}\n.eruda-dev-tools .eruda-tools div.CodeMirror-dragcursors {\n  visibility: visible;\n}\n\n.eruda-dev-tools .eruda-tools .CodeMirror-focused div.CodeMirror-cursors {\n  visibility: visible;\n}\n\n.eruda-dev-tools .eruda-tools .CodeMirror-selected { background: #d9d9d9; }\n.eruda-dev-tools .eruda-tools .CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }\n.eruda-dev-tools .eruda-tools .CodeMirror-crosshair { cursor: crosshair; }\n.eruda-dev-tools .eruda-tools .CodeMirror-line::-moz-selection, .eruda-dev-tools .eruda-tools .CodeMirror-line > span::-moz-selection, .eruda-dev-tools .eruda-tools .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n.eruda-dev-tools .eruda-tools .CodeMirror-line::selection, .eruda-dev-tools .eruda-tools .CodeMirror-line > span::selection, .eruda-dev-tools .eruda-tools .CodeMirror-line > span > span::selection { background: #d7d4f0; }\n.eruda-dev-tools .eruda-tools .CodeMirror-line::-moz-selection, .eruda-dev-tools .eruda-tools .CodeMirror-line > span::-moz-selection, .eruda-dev-tools .eruda-tools .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n\n.eruda-dev-tools .eruda-tools .cm-searching {\n  background-color: #ffa;\n  background-color: rgba(255, 255, 0, .4);\n}\n\n/* Used to force a border model for a node */\n.eruda-dev-tools .eruda-tools .cm-force-border { padding-right: .1px; }\n\n@media print {\n  /* Hide the cursor when printing */\n  .eruda-dev-tools .eruda-tools .CodeMirror div.CodeMirror-cursors {\n    visibility: hidden;\n  }\n}\n\n/* See issue #2901 */\n.eruda-dev-tools .eruda-tools .cm-tab-wrap-hack:after { content: ''; }\n\n/* Help users use markselection to safely style text background */\n.eruda-dev-tools .eruda-tools span.CodeMirror-selectedtext { background: none; }\n",
        "",
      ]),
        (t.exports = e);
    },
    function (t, e, n) {
      (e = n(6)(!1)).push([
        t.i,
        "/*\n  Name:       material\n  Author:     Mattia Astorino (http://github.com/equinusocio)\n  Website:    https://material-theme.site/\n*/\n\n.eruda-dev-tools .eruda-tools .cm-s-material-darker.CodeMirror {\n  background-color: #212121;\n  color: #EEFFFF;\n}\n\n.eruda-dev-tools .eruda-tools .cm-s-material-darker .CodeMirror-gutters {\n  background: #212121;\n  color: #545454;\n  border: none;\n}\n\n.eruda-dev-tools .eruda-tools .cm-s-material-darker .CodeMirror-guttermarker,\n.eruda-dev-tools .eruda-tools .cm-s-material-darker .CodeMirror-guttermarker-subtle,\n.eruda-dev-tools .eruda-tools .cm-s-material-darker .CodeMirror-linenumber {\n  color: #545454;\n}\n\n.eruda-dev-tools .eruda-tools .cm-s-material-darker .CodeMirror-cursor {\n  border-left: 1px solid #FFCC00;\n}\n\n.eruda-dev-tools .eruda-tools .cm-s-material-darker div.CodeMirror-selected {\n  background: rgba(97, 97, 97, 0.2);\n}\n\n.eruda-dev-tools .eruda-tools .cm-s-material-darker.CodeMirror-focused div.CodeMirror-selected {\n  background: rgba(97, 97, 97, 0.2);\n}\n\n.eruda-dev-tools .eruda-tools .cm-s-material-darker .CodeMirror-line::-moz-selection, .eruda-dev-tools .eruda-tools .cm-s-material-darker .CodeMirror-line>span::-moz-selection, .eruda-dev-tools .eruda-tools .cm-s-material-darker .CodeMirror-line>span>span::-moz-selection {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.eruda-dev-tools .eruda-tools .cm-s-material-darker .CodeMirror-line::selection,\n.eruda-dev-tools .eruda-tools .cm-s-material-darker .CodeMirror-line>span::selection,\n.eruda-dev-tools .eruda-tools .cm-s-material-darker .CodeMirror-line>span>span::selection {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.eruda-dev-tools .eruda-tools .cm-s-material-darker .CodeMirror-line::-moz-selection,\n.eruda-dev-tools .eruda-tools .cm-s-material-darker .CodeMirror-line>span::-moz-selection,\n.eruda-dev-tools .eruda-tools .cm-s-material-darker .CodeMirror-line>span>span::-moz-selection {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.eruda-dev-tools .eruda-tools .cm-s-material-darker .CodeMirror-activeline-background {\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.eruda-dev-tools .eruda-tools .cm-s-material-darker .cm-keyword {\n  color: #C792EA;\n}\n\n.eruda-dev-tools .eruda-tools .cm-s-material-darker .cm-operator {\n  color: #89DDFF;\n}\n\n.eruda-dev-tools .eruda-tools .cm-s-material-darker .cm-variable-2 {\n  color: #EEFFFF;\n}\n\n.eruda-dev-tools .eruda-tools .cm-s-material-darker .cm-variable-3,\n.eruda-dev-tools .eruda-tools .cm-s-material-darker .cm-type {\n  color: #f07178;\n}\n\n.eruda-dev-tools .eruda-tools .cm-s-material-darker .cm-builtin {\n  color: #FFCB6B;\n}\n\n.eruda-dev-tools .eruda-tools .cm-s-material-darker .cm-atom {\n  color: #F78C6C;\n}\n\n.eruda-dev-tools .eruda-tools .cm-s-material-darker .cm-number {\n  color: #FF5370;\n}\n\n.eruda-dev-tools .eruda-tools .cm-s-material-darker .cm-def {\n  color: #82AAFF;\n}\n\n.eruda-dev-tools .eruda-tools .cm-s-material-darker .cm-string {\n  color: #C3E88D;\n}\n\n.eruda-dev-tools .eruda-tools .cm-s-material-darker .cm-string-2 {\n  color: #f07178;\n}\n\n.eruda-dev-tools .eruda-tools .cm-s-material-darker .cm-comment {\n  color: #545454;\n}\n\n.eruda-dev-tools .eruda-tools .cm-s-material-darker .cm-variable {\n  color: #f07178;\n}\n\n.eruda-dev-tools .eruda-tools .cm-s-material-darker .cm-tag {\n  color: #FF5370;\n}\n\n.eruda-dev-tools .eruda-tools .cm-s-material-darker .cm-meta {\n  color: #FFCB6B;\n}\n\n.eruda-dev-tools .eruda-tools .cm-s-material-darker .cm-attribute {\n  color: #C792EA;\n}\n\n.eruda-dev-tools .eruda-tools .cm-s-material-darker .cm-property {\n  color: #C792EA;\n}\n\n.eruda-dev-tools .eruda-tools .cm-s-material-darker .cm-qualifier {\n  color: #DECB6B;\n}\n\n.eruda-dev-tools .eruda-tools .cm-s-material-darker .cm-variable-3,\n.eruda-dev-tools .eruda-tools .cm-s-material-darker .cm-type {\n  color: #DECB6B;\n}\n\n\n.eruda-dev-tools .eruda-tools .cm-s-material-darker .cm-error {\n  color: rgba(255, 255, 255, 1.0);\n  background-color: #FF5370;\n}\n\n.eruda-dev-tools .eruda-tools .cm-s-material-darker .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}",
        "",
      ]),
        (t.exports = e);
    },
    function (t, e, n) {
      (e = n(6)(!1)).push([
        t.i,
        ".eruda-dev-tools .eruda-tools .CodeMirror {\n  height: 100%;\n  background: var(--background);\n  color: var(--foreground);\n}\n\n.eruda-dev-tools .eruda-tools .CodeMirror-gutters {\n  background: var(--background);\n  border-color: var(--border);\n}\n\n/* Sync style with chrome dev-tool */\n.eruda-dev-tools .eruda-tools .cm-s-default .cm-keyword {\n  color: var(--keyword-color);\n}\n.eruda-dev-tools .eruda-tools .cm-s-default .cm-number {\n  color: var(--number-color);\n}\n.eruda-dev-tools .eruda-tools .cm-s-default .cm-comment {\n  color: var(--comment-color) !important;\n  font-style: italic;\n}\n.eruda-dev-tools .eruda-tools .cm-s-default .cm-string,\n.eruda-dev-tools .eruda-tools .cm-s-default .com-string-2 {\n  color: var(--string-color);\n}\n.eruda-dev-tools .eruda-tools .cm-atom {\n  color: var(--attribute-name-color);\n}\n.eruda-dev-tools .eruda-tools .cm-s-default .cm-def {\n  color: var(--foreground);\n}\n.eruda-dev-tools .eruda-tools .cm-operator {\n  color: var(--operator-color);\n}\n.eruda-dev-tools .eruda-tools .cm-s-default .cm-meta {\n  color: var(--tag-name-color);\n}\n.eruda-dev-tools .eruda-tools .cm-s-default .cm-variable-2 {\n  color: var(--var-color);\n}\n",
        "",
      ]),
        (t.exports = e);
    },
    function (t, e, n) {
      var i = n(64);
      t.exports = (i.default || i).template({
        compiler: [8, ">= 4.3.0"],
        main: function (t, e, n, i, r) {
          return '<textarea class="eruda-editor">function fib(num) {\n    if (num <= 2) return 1;\n    return fib(num - 1) + fib(num - 2);\n}\nconsole.log(fib(5));</textarea>\n<div class="eruda-bottom-bar">\n    <div class="eruda-btn eruda-beautify">\n        Beautify\n    </div>\n    <div class="eruda-btn eruda-copy">\n        Copy\n    </div>\n    <div class="eruda-btn eruda-clear">\n        Clear\n    </div>\n    <div class="eruda-btn eruda-run">\n        Run\n    </div>\n</div>';
        },
        useData: !0,
      });
    },
    function (t, e, n) {
      t.exports = n(65).default;
    },
    function (t, e, n) {
      "use strict";
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function r(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return (e.default = t), e;
      }
      e.__esModule = !0;
      var o = r(n(21)),
        s = i(n(76)),
        a = i(n(2)),
        u = r(n(0)),
        l = r(n(77)),
        c = i(n(79));
      function h() {
        var t = new o.HandlebarsEnvironment();
        return (
          u.extend(t, o),
          (t.SafeString = s.default),
          (t.Exception = a.default),
          (t.Utils = u),
          (t.escapeExpression = u.escapeExpression),
          (t.VM = l),
          (t.template = function (e) {
            return l.template(e, t);
          }),
          t
        );
      }
      var p = h();
      (p.create = h),
        c.default(p),
        (p.default = p),
        (e.default = p),
        (t.exports = e.default);
    },
    function (t, e, n) {
      "use strict";
      e.__esModule = !0;
      var i = n(0);
      (e.default = function (t) {
        t.registerHelper("blockHelperMissing", function (e, n) {
          var r = n.inverse,
            o = n.fn;
          if (!0 === e) return o(this);
          if (!1 === e || null == e) return r(this);
          if (i.isArray(e))
            return e.length > 0
              ? (n.ids && (n.ids = [n.name]), t.helpers.each(e, n))
              : r(this);
          if (n.data && n.ids) {
            var s = i.createFrame(n.data);
            (s.contextPath = i.appendContextPath(n.data.contextPath, n.name)),
              (n = { data: s });
          }
          return o(e, n);
        });
      }),
        (t.exports = e.default);
    },
    function (t, e, n) {
      "use strict";
      (function (i) {
        e.__esModule = !0;
        var r,
          o = n(0),
          s = n(2),
          a = (r = s) && r.__esModule ? r : { default: r };
        (e.default = function (t) {
          t.registerHelper("each", function (t, e) {
            if (!e) throw new a.default("Must pass iterator to #each");
            var n,
              r = e.fn,
              s = e.inverse,
              u = 0,
              l = "",
              c = void 0,
              h = void 0;
            function p(e, n, i) {
              c &&
                ((c.key = e),
                (c.index = n),
                (c.first = 0 === n),
                (c.last = !!i),
                h && (c.contextPath = h + e)),
                (l += r(t[e], {
                  data: c,
                  blockParams: o.blockParams([t[e], e], [h + e, null]),
                }));
            }
            if (
              (e.data &&
                e.ids &&
                (h = o.appendContextPath(e.data.contextPath, e.ids[0]) + "."),
              o.isFunction(t) && (t = t.call(this)),
              e.data && (c = o.createFrame(e.data)),
              t && "object" == typeof t)
            )
              if (o.isArray(t))
                for (var d = t.length; u < d; u++)
                  u in t && p(u, u, u === t.length - 1);
              else if (i.Symbol && t[i.Symbol.iterator]) {
                for (
                  var _ = [], f = t[i.Symbol.iterator](), g = f.next();
                  !g.done;
                  g = f.next()
                )
                  _.push(g.value);
                for (d = (t = _).length; u < d; u++)
                  p(u, u, u === t.length - 1);
              } else
                (n = void 0),
                  Object.keys(t).forEach(function (t) {
                    void 0 !== n && p(n, u - 1), (n = t), u++;
                  }),
                  void 0 !== n && p(n, u - 1, !0);
            return 0 === u && (l = s(this)), l;
          });
        }),
          (t.exports = e.default);
      }).call(this, n(4));
    },
    function (t, e, n) {
      "use strict";
      e.__esModule = !0;
      var i,
        r = n(2),
        o = (i = r) && i.__esModule ? i : { default: i };
      (e.default = function (t) {
        t.registerHelper("helperMissing", function () {
          if (1 !== arguments.length)
            throw new o.default(
              'Missing helper: "' + arguments[arguments.length - 1].name + '"',
            );
        });
      }),
        (t.exports = e.default);
    },
    function (t, e, n) {
      "use strict";
      e.__esModule = !0;
      var i,
        r = n(0),
        o = n(2),
        s = (i = o) && i.__esModule ? i : { default: i };
      (e.default = function (t) {
        t.registerHelper("if", function (t, e) {
          if (2 != arguments.length)
            throw new s.default("#if requires exactly one argument");
          return (
            r.isFunction(t) && (t = t.call(this)),
            (!e.hash.includeZero && !t) || r.isEmpty(t)
              ? e.inverse(this)
              : e.fn(this)
          );
        }),
          t.registerHelper("unless", function (e, n) {
            if (2 != arguments.length)
              throw new s.default("#unless requires exactly one argument");
            return t.helpers.if.call(this, e, {
              fn: n.inverse,
              inverse: n.fn,
              hash: n.hash,
            });
          });
      }),
        (t.exports = e.default);
    },
    function (t, e, n) {
      "use strict";
      (e.__esModule = !0),
        (e.default = function (t) {
          t.registerHelper("log", function () {
            for (
              var e = [void 0], n = arguments[arguments.length - 1], i = 0;
              i < arguments.length - 1;
              i++
            )
              e.push(arguments[i]);
            var r = 1;
            null != n.hash.level
              ? (r = n.hash.level)
              : n.data && null != n.data.level && (r = n.data.level),
              (e[0] = r),
              t.log.apply(t, e);
          });
        }),
        (t.exports = e.default);
    },
    function (t, e, n) {
      "use strict";
      (e.__esModule = !0),
        (e.default = function (t) {
          t.registerHelper("lookup", function (t, e, n) {
            return t ? n.lookupProperty(t, e) : t;
          });
        }),
        (t.exports = e.default);
    },
    function (t, e, n) {
      "use strict";
      e.__esModule = !0;
      var i,
        r = n(0),
        o = n(2),
        s = (i = o) && i.__esModule ? i : { default: i };
      (e.default = function (t) {
        t.registerHelper("with", function (t, e) {
          if (2 != arguments.length)
            throw new s.default("#with requires exactly one argument");
          r.isFunction(t) && (t = t.call(this));
          var n = e.fn;
          if (r.isEmpty(t)) return e.inverse(this);
          var i = e.data;
          return (
            e.data &&
              e.ids &&
              ((i = r.createFrame(e.data)).contextPath = r.appendContextPath(
                e.data.contextPath,
                e.ids[0],
              )),
            n(t, {
              data: i,
              blockParams: r.blockParams([t], [i && i.contextPath]),
            })
          );
        });
      }),
        (t.exports = e.default);
    },
    function (t, e, n) {
      "use strict";
      (e.__esModule = !0),
        (e.registerDefaultDecorators = function (t) {
          o.default(t);
        });
      var i,
        r = n(74),
        o = (i = r) && i.__esModule ? i : { default: i };
    },
    function (t, e, n) {
      "use strict";
      e.__esModule = !0;
      var i = n(0);
      (e.default = function (t) {
        t.registerDecorator("inline", function (t, e, n, r) {
          var o = t;
          return (
            e.partials ||
              ((e.partials = {}),
              (o = function (r, o) {
                var s = n.partials;
                n.partials = i.extend({}, s, e.partials);
                var a = t(r, o);
                return (n.partials = s), a;
              })),
            (e.partials[r.args[0]] = r.fn),
            o
          );
        });
      }),
        (t.exports = e.default);
    },
    function (t, e, n) {
      "use strict";
      (e.__esModule = !0),
        (e.createNewLookupObject = function () {
          for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          return i.extend.apply(void 0, [Object.create(null)].concat(e));
        });
      var i = n(0);
    },
    function (t, e, n) {
      "use strict";
      function i(t) {
        this.string = t;
      }
      (e.__esModule = !0),
        (i.prototype.toString = i.prototype.toHTML =
          function () {
            return "" + this.string;
          }),
        (e.default = i),
        (t.exports = e.default);
    },
    function (t, e, n) {
      "use strict";
      (e.__esModule = !0),
        (e.checkRevision = function (t) {
          var e = (t && t[0]) || 1,
            n = a.COMPILER_REVISION;
          if (
            e >= a.LAST_COMPATIBLE_COMPILER_REVISION &&
            e <= a.COMPILER_REVISION
          )
            return;
          if (e < a.LAST_COMPATIBLE_COMPILER_REVISION) {
            var i = a.REVISION_CHANGES[n],
              r = a.REVISION_CHANGES[e];
            throw new s.default(
              "Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" +
                i +
                ") or downgrade your runtime to an older version (" +
                r +
                ").",
            );
          }
          throw new s.default(
            "Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" +
              t[1] +
              ").",
          );
        }),
        (e.template = function (t, e) {
          if (!e) throw new s.default("No environment passed to template");
          if (!t || !t.main)
            throw new s.default("Unknown template object: " + typeof t);
          (t.main.decorator = t.main_d), e.VM.checkRevision(t.compiler);
          var n = t.compiler && 7 === t.compiler[0];
          var i = {
            strict: function (t, e, n) {
              if (!t || !(e in t))
                throw new s.default('"' + e + '" not defined in ' + t, {
                  loc: n,
                });
              return i.lookupProperty(t, e);
            },
            lookupProperty: function (t, e) {
              var n = t[e];
              return null == n ||
                Object.prototype.hasOwnProperty.call(t, e) ||
                c.resultIsAllowed(n, i.protoAccessControl, e)
                ? n
                : void 0;
            },
            lookup: function (t, e) {
              for (var n = t.length, r = 0; r < n; r++) {
                if (null != (t[r] && i.lookupProperty(t[r], e))) return t[r][e];
              }
            },
            lambda: function (t, e) {
              return "function" == typeof t ? t.call(e) : t;
            },
            escapeExpression: r.escapeExpression,
            invokePartial: function (n, i, o) {
              o.hash &&
                ((i = r.extend({}, i, o.hash)), o.ids && (o.ids[0] = !0)),
                (n = e.VM.resolvePartial.call(this, n, i, o));
              var a = r.extend({}, o, {
                  hooks: this.hooks,
                  protoAccessControl: this.protoAccessControl,
                }),
                u = e.VM.invokePartial.call(this, n, i, a);
              if (
                (null == u &&
                  e.compile &&
                  ((o.partials[o.name] = e.compile(n, t.compilerOptions, e)),
                  (u = o.partials[o.name](i, a))),
                null != u)
              ) {
                if (o.indent) {
                  for (
                    var l = u.split("\n"), c = 0, h = l.length;
                    c < h && (l[c] || c + 1 !== h);
                    c++
                  )
                    l[c] = o.indent + l[c];
                  u = l.join("\n");
                }
                return u;
              }
              throw new s.default(
                "The partial " +
                  o.name +
                  " could not be compiled when running in runtime-only mode",
              );
            },
            fn: function (e) {
              var n = t[e];
              return (n.decorator = t[e + "_d"]), n;
            },
            programs: [],
            program: function (t, e, n, i, r) {
              var o = this.programs[t],
                s = this.fn(t);
              return (
                e || r || i || n
                  ? (o = h(this, t, s, e, n, i, r))
                  : o || (o = this.programs[t] = h(this, t, s)),
                o
              );
            },
            data: function (t, e) {
              for (; t && e--; ) t = t._parent;
              return t;
            },
            mergeIfNeeded: function (t, e) {
              var n = t || e;
              return t && e && t !== e && (n = r.extend({}, e, t)), n;
            },
            nullContext: Object.seal({}),
            noop: e.VM.noop,
            compilerInfo: t.compiler,
          };
          function o(e) {
            var n =
                arguments.length <= 1 || void 0 === arguments[1]
                  ? {}
                  : arguments[1],
              r = n.data;
            o._setup(n), !n.partial && t.useData && (r = d(e, r));
            var s = void 0,
              a = t.useBlockParams ? [] : void 0;
            function u(e) {
              return "" + t.main(i, e, i.helpers, i.partials, r, a, s);
            }
            return (
              t.useDepths &&
                (s = n.depths
                  ? e != n.depths[0]
                    ? [e].concat(n.depths)
                    : n.depths
                  : [e]),
              (u = _(t.main, u, i, n.depths || [], r, a))(e, n)
            );
          }
          return (
            (o.isTop = !0),
            (o._setup = function (o) {
              if (o.partial)
                (i.protoAccessControl = o.protoAccessControl),
                  (i.helpers = o.helpers),
                  (i.partials = o.partials),
                  (i.decorators = o.decorators),
                  (i.hooks = o.hooks);
              else {
                var s = r.extend({}, e.helpers, o.helpers);
                !(function (t, e) {
                  Object.keys(t).forEach(function (n) {
                    var i = t[n];
                    t[n] = (function (t, e) {
                      var n = e.lookupProperty;
                      return l.wrapHelper(t, function (t) {
                        return r.extend({ lookupProperty: n }, t);
                      });
                    })(i, e);
                  });
                })(s, i),
                  (i.helpers = s),
                  t.usePartial &&
                    (i.partials = i.mergeIfNeeded(o.partials, e.partials)),
                  (t.usePartial || t.useDecorators) &&
                    (i.decorators = r.extend({}, e.decorators, o.decorators)),
                  (i.hooks = {}),
                  (i.protoAccessControl = c.createProtoAccessControl(o));
                var a = o.allowCallsToHelperMissing || n;
                u.moveHelperToHooks(i, "helperMissing", a),
                  u.moveHelperToHooks(i, "blockHelperMissing", a);
              }
            }),
            (o._child = function (e, n, r, o) {
              if (t.useBlockParams && !r)
                throw new s.default("must pass block params");
              if (t.useDepths && !o)
                throw new s.default("must pass parent depths");
              return h(i, e, t[e], n, 0, r, o);
            }),
            o
          );
        }),
        (e.wrapProgram = h),
        (e.resolvePartial = function (t, e, n) {
          t
            ? t.call || n.name || ((n.name = t), (t = n.partials[t]))
            : (t =
                "@partial-block" === n.name
                  ? n.data["partial-block"]
                  : n.partials[n.name]);
          return t;
        }),
        (e.invokePartial = function (t, e, n) {
          var i = n.data && n.data["partial-block"];
          (n.partial = !0),
            n.ids && (n.data.contextPath = n.ids[0] || n.data.contextPath);
          var o = void 0;
          n.fn &&
            n.fn !== p &&
            (function () {
              n.data = a.createFrame(n.data);
              var t = n.fn;
              (o = n.data["partial-block"] =
                function (e) {
                  var n =
                    arguments.length <= 1 || void 0 === arguments[1]
                      ? {}
                      : arguments[1];
                  return (
                    (n.data = a.createFrame(n.data)),
                    (n.data["partial-block"] = i),
                    t(e, n)
                  );
                }),
                t.partials &&
                  (n.partials = r.extend({}, n.partials, t.partials));
            })();
          void 0 === t && o && (t = o);
          if (void 0 === t)
            throw new s.default(
              "The partial " + n.name + " could not be found",
            );
          if (t instanceof Function) return t(e, n);
        }),
        (e.noop = p);
      var i,
        r = (function (t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return (e.default = t), e;
        })(n(0)),
        o = n(2),
        s = (i = o) && i.__esModule ? i : { default: i },
        a = n(21),
        u = n(22),
        l = n(78),
        c = n(24);
      function h(t, e, n, i, r, o, s) {
        function a(e) {
          var r =
              arguments.length <= 1 || void 0 === arguments[1]
                ? {}
                : arguments[1],
            a = s;
          return (
            !s ||
              e == s[0] ||
              (e === t.nullContext && null === s[0]) ||
              (a = [e].concat(s)),
            n(
              t,
              e,
              t.helpers,
              t.partials,
              r.data || i,
              o && [r.blockParams].concat(o),
              a,
            )
          );
        }
        return (
          ((a = _(n, a, t, s, i, o)).program = e),
          (a.depth = s ? s.length : 0),
          (a.blockParams = r || 0),
          a
        );
      }
      function p() {
        return "";
      }
      function d(t, e) {
        return (
          (e && "root" in e) || ((e = e ? a.createFrame(e) : {}).root = t), e
        );
      }
      function _(t, e, n, i, o, s) {
        if (t.decorator) {
          var a = {};
          (e = t.decorator(e, a, n, i && i[0], o, s, i)), r.extend(e, a);
        }
        return e;
      }
    },
    function (t, e, n) {
      "use strict";
      (e.__esModule = !0),
        (e.wrapHelper = function (t, e) {
          if ("function" != typeof t) return t;
          return function () {
            var n = arguments[arguments.length - 1];
            return (
              (arguments[arguments.length - 1] = e(n)), t.apply(this, arguments)
            );
          };
        });
    },
    function (t, e, n) {
      "use strict";
      (function (n) {
        (e.__esModule = !0),
          (e.default = function (t) {
            var e = void 0 !== n ? n : window,
              i = e.Handlebars;
            t.noConflict = function () {
              return e.Handlebars === t && (e.Handlebars = i), t;
            };
          }),
          (t.exports = e.default);
      }).call(this, n(4));
    },
  ]);
});
//# sourceMappingURL=eruda-code.js.map
