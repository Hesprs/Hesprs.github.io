!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(((e = "undefined" != typeof globalThis ? globalThis : e || self).marked = {}));
})(this, function (e) {
  "use strict";
  function t(e, t) {
      for (var u = 0; u < t.length; u++) {
          var n = t[u];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
  }
  function u(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
      return n;
  }
  function n(e, t) {
      var n = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
      if (n) return (n = n.call(e)).next.bind(n);
      if (
          Array.isArray(e) ||
          (n = (function (e, t) {
              if (e) {
                  if ("string" == typeof e) return u(e, t);
                  var n = Object.prototype.toString.call(e).slice(8, -1);
                  return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(e, t) : void 0;
              }
          })(e)) ||
          (t && e && "number" == typeof e.length)
      ) {
          n && (e = n);
          var r = 0;
          return function () {
              return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
          };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function r() {
      return {
          baseUrl: null,
          breaks: !1,
          extensions: null,
          gfm: !0,
          headerIds: !0,
          headerPrefix: "",
          highlight: null,
          langPrefix: "language-",
          mangle: !0,
          pedantic: !1,
          renderer: null,
          sanitize: !1,
          sanitizer: null,
          silent: !1,
          smartLists: !1,
          smartypants: !1,
          tokenizer: null,
          walkTokens: null,
          xhtml: !1,
      };
  }
  e.defaults = {
      baseUrl: null,
      breaks: !1,
      extensions: null,
      gfm: !0,
      headerIds: !0,
      headerPrefix: "",
      highlight: null,
      langPrefix: "language-",
      mangle: !0,
      pedantic: !1,
      renderer: null,
      sanitize: !1,
      sanitizer: null,
      silent: !1,
      smartLists: !1,
      smartypants: !1,
      tokenizer: null,
      walkTokens: null,
      xhtml: !1,
  };
  var i = /[&<>"']/,
      s = /[&<>"']/g,
      l = /[<>"']|&(?!#?\w+;)/,
      a = /[<>"']|&(?!#?\w+;)/g,
      o = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" },
      D = function (e) {
          return o[e];
      };
  function c(e, t) {
      if (t) {
          if (i.test(e)) return e.replace(s, D);
      } else if (l.test(e)) return e.replace(a, D);
      return e;
  }
  var h = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
  function p(e) {
      return e.replace(h, function (e, t) {
          return "colon" === (t = t.toLowerCase()) ? ":" : "#" === t.charAt(0) ? ("x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1))) : "";
      });
  }
  var f = /(^|[^\[])\^/g;
  function F(e, t) {
      (e = e.source || e), (t = t || "");
      var u = {
          replace: function (t, n) {
              return (n = (n = n.source || n).replace(f, "$1")), (e = e.replace(t, n)), u;
          },
          getRegex: function () {
              return new RegExp(e, t);
          },
      };
      return u;
  }
  var g = /[^\w:]/g,
      A = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
  function d(e, t, u) {
      if (e) {
          var n;
          try {
              n = decodeURIComponent(p(u)).replace(g, "").toLowerCase();
          } catch (e) {
              return null;
          }
          if (0 === n.indexOf("javascript:") || 0 === n.indexOf("vbscript:") || 0 === n.indexOf("data:")) return null;
      }
      t &&
          !A.test(u) &&
          (u = (function (e, t) {
              C[" " + e] || (k.test(e) ? (C[" " + e] = e + "/") : (C[" " + e] = w(e, "/", !0)));
              e = C[" " + e];
              var u = -1 === e.indexOf(":");
              return "//" === t.substring(0, 2) ? (u ? t : e.replace(E, "$1") + t) : "/" === t.charAt(0) ? (u ? t : e.replace(x, "$1") + t) : e + t;
          })(t, u));
      try {
          u = encodeURI(u).replace(/%25/g, "%");
      } catch (e) {
          return null;
      }
      return u;
  }
  var C = {},
      k = /^[^:]+:\/*[^/]*$/,
      E = /^([^:]+:)[\s\S]*$/,
      x = /^([^:]+:\/*[^/]*)[\s\S]*$/;
  var m = { exec: function () {} };
  function B(e) {
      for (var t, u, n = 1; n < arguments.length; n++) for (u in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, u) && (e[u] = t[u]);
      return e;
  }
  function b(e, t) {
      var u = e
              .replace(/\|/g, function (e, t, u) {
                  for (var n = !1, r = t; --r >= 0 && "\\" === u[r]; ) n = !n;
                  return n ? "|" : " |";
              })
              .split(/ \|/),
          n = 0;
      if ((u[0].trim() || u.shift(), u[u.length - 1].trim() || u.pop(), u.length > t)) u.splice(t);
      else for (; u.length < t; ) u.push("");
      for (; n < u.length; n++) u[n] = u[n].trim().replace(/\\\|/g, "|");
      return u;
  }
  function w(e, t, u) {
      var n = e.length;
      if (0 === n) return "";
      for (var r = 0; r < n; ) {
          var i = e.charAt(n - r - 1);
          if (i !== t || u) {
              if (i === t || !u) break;
              r++;
          } else r++;
      }
      return e.substr(0, n - r);
  }
  function v(e) {
      e &&
          e.sanitize &&
          !e.silent &&
          console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
  }
  function y(e, t) {
      if (t < 1) return "";
      for (var u = ""; t > 1; ) 1 & t && (u += e), (t >>= 1), (e += e);
      return u + e;
  }
  function _(e, t, u, n) {
      var r = t.href,
          i = t.title ? c(t.title) : null,
          s = e[1].replace(/\\([\[\]])/g, "$1");
      if ("!" !== e[0].charAt(0)) {
          n.state.inLink = !0;
          var l = { type: "link", raw: u, href: r, title: i, text: s, tokens: n.inlineTokens(s, []) };
          return (n.state.inLink = !1), l;
      }
      return { type: "image", raw: u, href: r, title: i, text: c(s) };
  }
  var z = (function () {
          function t(t) {
              this.options = t || e.defaults;
          }
          var u = t.prototype;
          return (
              (u.space = function (e) {
                  var t = this.rules.block.newline.exec(e);
                  if (t) return t[0].length > 1 ? { type: "space", raw: t[0] } : { raw: "\n" };
              }),
              (u.code = function (e) {
                  var t = this.rules.block.code.exec(e);
                  if (t) {
                      var u = t[0].replace(/^ {1,4}/gm, "");
                      return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? u : w(u, "\n") };
                  }
              }),
              (u.fences = function (e) {
                  var t = this.rules.block.fences.exec(e);
                  if (t) {
                      var u = t[0],
                          n = (function (e, t) {
                              var u = e.match(/^(\s+)(?:```)/);
                              if (null === u) return t;
                              var n = u[1];
                              return t
                                  .split("\n")
                                  .map(function (e) {
                                      var t = e.match(/^\s+/);
                                      return null === t ? e : t[0].length >= n.length ? e.slice(n.length) : e;
                                  })
                                  .join("\n");
                          })(u, t[3] || "");
                      return { type: "code", raw: u, lang: t[2] ? t[2].trim() : t[2], text: n };
                  }
              }),
              (u.heading = function (e) {
                  var t = this.rules.block.heading.exec(e);
                  if (t) {
                      var u = t[2].trim();
                      if (/#$/.test(u)) {
                          var n = w(u, "#");
                          this.options.pedantic ? (u = n.trim()) : (n && !/ $/.test(n)) || (u = n.trim());
                      }
                      var r = { type: "heading", raw: t[0], depth: t[1].length, text: u, tokens: [] };
                      return this.lexer.inline(r.text, r.tokens), r;
                  }
              }),
              (u.hr = function (e) {
                  var t = this.rules.block.hr.exec(e);
                  if (t) return { type: "hr", raw: t[0] };
              }),
              (u.blockquote = function (e) {
                  var t = this.rules.block.blockquote.exec(e);
                  if (t) {
                      var u = t[0].replace(/^ *> ?/gm, "");
                      return { type: "blockquote", raw: t[0], tokens: this.lexer.blockTokens(u, []), text: u };
                  }
              }),
              (u.list = function (e) {
                  var t = this.rules.block.list.exec(e);
                  if (t) {
                      var u, n, r, i, s, l, a, o, D, c, h = t[1].trim(), p = h.length > 1, f = { type: "list", raw: "", ordered: p, start: p ? +h.slice(0, -1) : "", loose: !1, items: [] };
                      (h = p ? "\\d{1,9}\\" + h.slice(-1) : "\\" + h), this.options.pedantic && (h = p ? h : "[*+-]");
                      for (var F = new RegExp("^( {0,3}" + h + ")((?: [^\\n]*| *)(?:\\n[^\\n]*)*(?:\\n|$))"); e && !this.rules.block.hr.test(e) && (t = F.exec(e)); ) {
                          (D = t[2].split("\n")),
                              this.options.pedantic ? ((i = 2), (c = D[0].trimLeft())) : ((i = t[2].search(/[^ ]/)), (i = t[1].length + (i > 4 ? 1 : i)), (c = D[0].slice(i - t[1].length))),
                              (l = !1),
                              (u = t[0]),
                              !D[0] && /^ *$/.test(D[1]) && ((u = t[1] + D.slice(0, 2).join("\n") + "\n"), (f.loose = !0), (D = []));
                          var g = new RegExp("^ {0," + Math.min(3, i - 1) + "}(?:[*+-]|\\d{1,9}[.)])");
                          for (s = 1; s < D.length; s++) {
                              if (((o = D[s]), this.options.pedantic && (o = o.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), g.test(o))) {
                                  u = t[1] + D.slice(0, s).join("\n") + "\n";
                                  break;
                              }
                              if (l) {
                                  if (!(o.search(/[^ ]/) >= i) && o.trim()) {
                                      u = t[1] + D.slice(0, s).join("\n") + "\n";
                                      break;
                                  }
                                  c += "\n" + o.slice(i);
                              } else o.trim() || (l = !0), o.search(/[^ ]/) >= i ? (c += "\n" + o.slice(i)) : (c += "\n" + o);
                          }
                          f.loose || (a ? (f.loose = !0) : /\n *\n *$/.test(u) && (a = !0)),
                              this.options.gfm && (n = /^\[[ xX]\] /.exec(c)) && ((r = "[ ] " !== n[0]), (c = c.replace(/^\[[ xX]\] +/, ""))),
                              f.items.push({ type: "list_item", raw: u, task: !!n, checked: r, loose: !1, text: c }),
                              (f.raw += u),
                              (e = e.slice(u.length));
                      }
                      (f.items[f.items.length - 1].raw = u.trimRight()), (f.items[f.items.length - 1].text = c.trimRight()), (f.raw = f.raw.trimRight());
                      var A = f.items.length;
                      for (s = 0; s < A; s++)
                          (this.lexer.state.top = !1),
                              (f.items[s].tokens = this.lexer.blockTokens(f.items[s].text, [])),
                              f.items[s].tokens.some(function (e) {
                                  return "space" === e.type;
                              }) && ((f.loose = !0), (f.items[s].loose = !0));
                      return f;
                  }
              }),
              (u.html = function (e) {
                  var t = this.rules.block.html.exec(e);
                  if (t) {
                      var u = { type: "html", raw: t[0], pre: !this.options.sanitizer && ("pre" === t[1] || "script" === t[1] || "style" === t[1]), text: t[0] };
                      return this.options.sanitize && ((u.type = "paragraph"), (u.text = this.options.sanitizer ? this.options.sanitizer(t[0]) : c(t[0])), (u.tokens = []), this.lexer.inline(u.text, u.tokens)), u;
                  }
              }),
              (u.def = function (e) {
                  var t = this.rules.block.def.exec(e);
                  if (t) return t[3] && (t[3] = t[3].substring(1, t[3].length - 1)), { type: "def", tag: t[1].toLowerCase().replace(/\s+/g, " "), raw: t[0], href: t[2], title: t[3] };
              }),
              (u.table = function (e) {
                  var t = this.rules.block.table.exec(e);
                  if (t) {
                      var u = {
                          type: "table",
                          header: b(t[1]).map(function (e) {
                              return { text: e };
                          }),
                          align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                          rows: t[3] ? t[3].replace(/\n$/, "").split("\n") : [],
                      };
                      if (u.header.length === u.align.length) {
                          u.raw = t[0];
                          var n,
                              r,
                              i,
                              s,
                              l = u.align.length;
                          for (n = 0; n < l; n++)
                              /^ *-+: *$/.test(u.align[n]) ? (u.align[n] = "right") : /^ *:-+: *$/.test(u.align[n]) ? (u.align[n] = "center") : /^ *:-+ *$/.test(u.align[n]) ? (u.align[n] = "left") : (u.align[n] = null);
                          for (l = u.rows.length, n = 0; n < l; n++)
                              u.rows[n] = b(u.rows[n], u.header.length).map(function (e) {
                                  return { text: e };
                              });
                          for (l = u.header.length, r = 0; r < l; r++) (u.header[r].tokens = []), this.lexer.inlineTokens(u.header[r].text, u.header[r].tokens);
                          for (l = u.rows.length, r = 0; r < l; r++) for (s = u.rows[r], i = 0; i < s.length; i++) (s[i].tokens = []), this.lexer.inlineTokens(s[i].text, s[i].tokens);
                          return u;
                      }
                  }
              }),
              (u.lheading = function (e) {
                  var t = this.rules.block.lheading.exec(e);
                  if (t) {
                      var u = { type: "heading", raw: t[0], depth: "=" === t[2].charAt(0) ? 1 : 2, text: t[1], tokens: [] };
                      return this.lexer.inline(u.text, u.tokens), u;
                  }
              }),
              (u.paragraph = function (e) {
                  var t = this.rules.block.paragraph.exec(e);
                  if (t) {
                      var u = { type: "paragraph", raw: t[0], text: "\n" === t[1].charAt(t[1].length - 1) ? t[1].slice(0, -1) : t[1], tokens: [] };
                      return this.lexer.inline(u.text, u.tokens), u;
                  }
              }),
              (u.text = function (e) {
                  var t = this.rules.block.text.exec(e);
                  if (t) {
                      var u = { type: "text", raw: t[0], text: t[0], tokens: [] };
                      return this.lexer.inline(u.text, u.tokens), u;
                  }
              }),
              (u.escape = function (e) {
                  var t = this.rules.inline.escape.exec(e);
                  if (t) return { type: "escape", raw: t[0], text: c(t[1]) };
              }),
              (u.tag = function (e) {
                  var t = this.rules.inline.tag.exec(e);
                  if (t)
                      return (
                          !this.lexer.state.inLink && /^<a /i.test(t[0]) ? (this.lexer.state.inLink = !0) : this.lexer.state.inLink && /^<\/a>/i.test(t[0]) && (this.lexer.state.inLink = !1),
                          !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t[0])
                              ? (this.lexer.state.inRawBlock = !0)
                              : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) && (this.lexer.state.inRawBlock = !1),
                          {
                              type: this.options.sanitize ? "text" : "html",
                              raw: t[0],
                              inLink: this.lexer.state.inLink,
                              inRawBlock: this.lexer.state.inRawBlock,
                              text: this.options.sanitize ? (this.options.sanitizer ? this.options.sanitizer(t[0]) : c(t[0])) : t[0],
                          }
                      );
              }),
              (u.link = function (e) {
                  var t = this.rules.inline.link.exec(e);
                  if (t) {
                      var u = t[2].trim();
                      if (!this.options.pedantic && /^</.test(u)) {
                          if (!/>$/.test(u)) return;
                          var n = w(u.slice(0, -1), "\\");
                          if ((u.length - n.length) % 2 == 0) return;
                      } else {
                          var r = (function (e, t) {
                              if (-1 === e.indexOf(t[1])) return -1;
                              for (var u = e.length, n = 0, r = 0; r < u; r++)
                                  if ("\\" === e[r]) r++;
                                  else if (e[r] === t[0]) n++;
                                  else if (e[r] === t[1] && --n < 0) return r;
                              return -1;
                          })(t[2], "()");
                          if (r > -1) {
                              var i = (0 === t[0].indexOf("!") ? 5 : 4) + t[1].length + r;
                              (t[2] = t[2].substring(0, r)), (t[0] = t[0].substring(0, i).trim()), (t[3] = "");
                          }
                      }
                      var s = t[2],
                          l = "";
                      if (this.options.pedantic) {
                          var a = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);
                          a && ((s = a[1]), (l = a[3]));
                      } else l = t[3] ? t[3].slice(1, -1) : "";
                      return (
                          (s = s.trim()),
                          /^</.test(s) && (s = this.options.pedantic && !/>$/.test(u) ? s.slice(1) : s.slice(1, -1)),
                          _(t, { href: s ? s.replace(this.rules.inline._escapes, "$1") : s, title: l ? l.replace(this.rules.inline._escapes, "$1") : l }, t[0], this.lexer)
                      );
                  }
              }),
              (u.reflink = function (e, t) {
                  var u;
                  if ((u = this.rules.inline.reflink.exec(e)) || (u = this.rules.inline.nolink.exec(e))) {
                      var n = (u[2] || u[1]).replace(/\s+/g, " ");
                      if (!(n = t[n.toLowerCase()]) || !n.href) {
                          var r = u[0].charAt(0);
                          return { type: "text", raw: r, text: r };
                      }
                      return _(u, n, u[0], this.lexer);
                  }
              }),
              (u.emStrong = function (e, t, u) {
                  void 0 === u && (u = "");
                  var n = this.rules.inline.emStrong.lDelim.exec(e);
                  if (
                      n &&
                      (!n[3] ||
                          !u.match(
                              /(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/
                          ))
                  ) {
                      var r = n[1] || n[2] || "";
                      if (!r || (r && ("" === u || this.rules.inline.punctuation.exec(u)))) {
                          var i,
                              s,
                              l = n[0].length - 1,
                              a = l,
                              o = 0,
                              D = "*" === n[0][0] ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
                          for (D.lastIndex = 0, t = t.slice(-1 * e.length + l); null != (n = D.exec(t)); )
                              if ((i = n[1] || n[2] || n[3] || n[4] || n[5] || n[6]))
                                  if (((s = i.length), n[3] || n[4])) a += s;
                                  else if (!((n[5] || n[6]) && l % 3) || (l + s) % 3) {
                                      if (!((a -= s) > 0)) {
                                          if (((s = Math.min(s, s + a + o)), Math.min(l, s) % 2)) {
                                              var c = e.slice(1, l + n.index + s);
                                              return { type: "em", raw: e.slice(0, l + n.index + s + 1), text: c, tokens: this.lexer.inlineTokens(c, []) };
                                          }
                                          var h = e.slice(2, l + n.index + s - 1);
                                          return { type: "strong", raw: e.slice(0, l + n.index + s + 1), text: h, tokens: this.lexer.inlineTokens(h, []) };
                                      }
                                  } else o += s;
                      }
                  }
              }),
              (u.codespan = function (e) {
                  var t = this.rules.inline.code.exec(e);
                  if (t) {
                      var u = t[2].replace(/\n/g, " "),
                          n = /[^ ]/.test(u),
                          r = /^ /.test(u) && / $/.test(u);
                      return n && r && (u = u.substring(1, u.length - 1)), (u = c(u, !0)), { type: "codespan", raw: t[0], text: u };
                  }
              }),
              (u.br = function (e) {
                  var t = this.rules.inline.br.exec(e);
                  if (t) return { type: "br", raw: t[0] };
              }),
              (u.del = function (e) {
                  var t = this.rules.inline.del.exec(e);
                  if (t) return { type: "del", raw: t[0], text: t[2], tokens: this.lexer.inlineTokens(t[2], []) };
              }),
              (u.autolink = function (e, t) {
                  var u,
                      n,
                      r = this.rules.inline.autolink.exec(e);
                  if (r) return (n = "@" === r[2] ? "mailto:" + (u = c(this.options.mangle ? t(r[1]) : r[1])) : (u = c(r[1]))), { type: "link", raw: r[0], text: u, href: n, tokens: [{ type: "text", raw: u, text: u }] };
              }),
              (u.url = function (e, t) {
                  var u;
                  if ((u = this.rules.inline.url.exec(e))) {
                      var n, r;
                      if ("@" === u[2]) r = "mailto:" + (n = c(this.options.mangle ? t(u[0]) : u[0]));
                      else {
                          var i;
                          do {
                              (i = u[0]), (u[0] = this.rules.inline._backpedal.exec(u[0])[0]);
                          } while (i !== u[0]);
                          (n = c(u[0])), (r = "www." === u[1] ? "http://" + n : n);
                      }
                      return { type: "link", raw: u[0], text: n, href: r, tokens: [{ type: "text", raw: n, text: n }] };
                  }
              }),
              (u.inlineText = function (e, t) {
                  var u,
                      n = this.rules.inline.text.exec(e);
                  if (n)
                      return (
                          (u = this.lexer.state.inRawBlock ? (this.options.sanitize ? (this.options.sanitizer ? this.options.sanitizer(n[0]) : c(n[0])) : n[0]) : c(this.options.smartypants ? t(n[0]) : n[0])),
                          { type: "text", raw: n[0], text: u }
                      );
              }),
              t
          );
      })(),
      $ = {
          newline: /^(?: *(?:\n|$))+/,
          code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
          fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
          hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
          heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
          blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
          list: /^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,
          html:
              "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
          def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
          table: m,
          lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
          _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,
          text: /^[^\n]+/,
          _label: /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,
          _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,
      };
  ($.def = F($.def).replace("label", $._label).replace("title", $._title).getRegex()),
      ($.bullet = /(?:[*+-]|\d{1,9}[.)])/),
      ($.listItemStart = F(/^( *)(bull) */)
          .replace("bull", $.bullet)
          .getRegex()),
      ($.list = F($.list)
          .replace(/bull/g, $.bullet)
          .replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))")
          .replace("def", "\\n+(?=" + $.def.source + ")")
          .getRegex()),
      ($._tag =
          "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul"),
      ($._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/),
      ($.html = F($.html, "i")
          .replace("comment", $._comment)
          .replace("tag", $._tag)
          .replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
          .getRegex()),
      ($.paragraph = F($._paragraph)
          .replace("hr", $.hr)
          .replace("heading", " {0,3}#{1,6} ")
          .replace("|lheading", "")
          .replace("blockquote", " {0,3}>")
          .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
          .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
          .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)")
          .replace("tag", $._tag)
          .getRegex()),
      ($.blockquote = F($.blockquote).replace("paragraph", $.paragraph).getRegex()),
      ($.normal = B({}, $)),
      ($.gfm = B({}, $.normal, { table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)" })),
      ($.gfm.table = F($.gfm.table)
          .replace("hr", $.hr)
          .replace("heading", " {0,3}#{1,6} ")
          .replace("blockquote", " {0,3}>")
          .replace("code", " {4}[^\\n]")
          .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
          .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
          .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)")
          .replace("tag", $._tag)
          .getRegex()),
      ($.pedantic = B({}, $.normal, {
          html: F("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))")
              .replace("comment", $._comment)
              .replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b")
              .getRegex(),
          def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
          heading: /^(#{1,6})(.*)(?:\n+|$)/,
          fences: m,
          paragraph: F($.normal._paragraph)
              .replace("hr", $.hr)
              .replace("heading", " *#{1,6} *[^\n]")
              .replace("lheading", $.lheading)
              .replace("blockquote", " {0,3}>")
              .replace("|fences", "")
              .replace("|list", "")
              .replace("|html", "")
              .getRegex(),
      }));
  var S = {
      escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
      autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
      url: m,
      tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
      link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
      reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
      nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
      reflinkSearch: "reflink|nolink(?!\\()",
      emStrong: {
          lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
          rDelimAst: /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
          rDelimUnd: /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/,
      },
      code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
      br: /^( {2,}|\\)\n(?!\s*$)/,
      del: m,
      text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
      punctuation: /^([\spunctuation])/,
  };
  function T(e) {
      return e
          .replace(/---/g, "—")
          .replace(/--/g, "–")
          .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘")
          .replace(/'/g, "’")
          .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“")
          .replace(/"/g, "”")
          .replace(/\.{3}/g, "…");
  }
  function R(e) {
      var t, u, n = "", r = e.length;
      for (t = 0; t < r; t++) (u = e.charCodeAt(t)), Math.random() > 0.5 && (u = "x" + u.toString(16)), (n += "&#" + u + ";");
      return n;
  }
  (S._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"),
      (S.punctuation = F(S.punctuation)
          .replace(/punctuation/g, S._punctuation)
          .getRegex()),
      (S.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g),
      (S.escapedEmSt = /\\\*|\\_/g),
      (S._comment = F($._comment).replace("(?:--\x3e|$)", "--\x3e").getRegex()),
      (S.emStrong.lDelim = F(S.emStrong.lDelim).replace(/punct/g, S._punctuation).getRegex()),
      (S.emStrong.rDelimAst = F(S.emStrong.rDelimAst, "g").replace(/punct/g, S._punctuation).getRegex()),
      (S.emStrong.rDelimUnd = F(S.emStrong.rDelimUnd, "g").replace(/punct/g, S._punctuation).getRegex()),
      (S._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g),
      (S._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
      (S._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
      (S.autolink = F(S.autolink).replace("scheme", S._scheme).replace("email", S._email).getRegex()),
      (S._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
      (S.tag = F(S.tag).replace("comment", S._comment).replace("attribute", S._attribute).getRegex()),
      (S._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/),
      (S._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/),
      (S._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
      (S.link = F(S.link).replace("label", S._label).replace("href", S._href).replace("title", S._title).getRegex()),
      (S.reflink = F(S.reflink).replace("label", S._label).getRegex()),
      (S.reflinkSearch = F(S.reflinkSearch, "g").replace("reflink", S.reflink).replace("nolink", S.nolink).getRegex()),
      (S.normal = B({}, S)),
      (S.pedantic = B({}, S.normal, {
          strong: { start: /^__|\*\*/, middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/, endAst: /\*\*(?!\*)/g, endUnd: /__(?!_)/g },
          em: { start: /^_|\*/, middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/, endAst: /\*(?!\*)/g, endUnd: /_(?!_)/g },
          link: F(/^!?\[(label)\]\((.*?)\)/)
              .replace("label", S._label)
              .getRegex(),
          reflink: F(/^!?\[(label)\]\s*\[([^\]]*)\]/)
              .replace("label", S._label)
              .getRegex(),
      })),
      (S.gfm = B({}, S.normal, {
          escape: F(S.escape).replace("])", "~|])").getRegex(),
          _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
          url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
          _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
          del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
          text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
      })),
      (S.gfm.url = F(S.gfm.url, "i").replace("email", S.gfm._extended_email).getRegex()),
      (S.breaks = B({}, S.gfm, {
          br: F(S.br).replace("{2,}", "*").getRegex(),
          text: F(S.gfm.text)
              .replace("\\b_", "\\b_| {2,}\\n")
              .replace(/\{2,\}/g, "*")
              .getRegex(),
      }));
  var I = (function () {
          function u(t) {
              (this.tokens = []),
                  (this.tokens.links = Object.create(null)),
                  (this.options = t || e.defaults),
                  (this.options.tokenizer = this.options.tokenizer || new z()),
                  (this.tokenizer = this.options.tokenizer),
                  (this.tokenizer.options = this.options),
                  (this.tokenizer.lexer = this),
                  (this.inlineQueue = []),
                  (this.state = { inLink: !1, inRawBlock: !1, top: !0 });
              var u = { block: $.normal, inline: S.normal };
              this.options.pedantic ? ((u.block = $.pedantic), (u.inline = S.pedantic)) : this.options.gfm && ((u.block = $.gfm), this.options.breaks ? (u.inline = S.breaks) : (u.inline = S.gfm)), (this.tokenizer.rules = u);
          }
          (u.lex = function (e, t) {
              return new u(t).lex(e);
          }),
              (u.lexInline = function (e, t) {
                  return new u(t).inlineTokens(e);
              });
          var n, r, i, s = u.prototype;
          return (
              (s.lex = function (e) {
                  var t;
                  for (e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    "), this.blockTokens(e, this.tokens); (t = this.inlineQueue.shift()); ) this.inlineTokens(t.src, t.tokens);
                  return this.tokens;
              }),
              (s.blockTokens = function (e, t) {
                  var u, n, r, i, s = this;
                  for (void 0 === t && (t = []), this.options.pedantic && (e = e.replace(/^ +$/gm, "")); e; )
                      if (
                          !(
                              this.options.extensions &&
                              this.options.extensions.block &&
                              this.options.extensions.block.some(function (n) {
                                  return !!(u = n.call({ lexer: s }, e, t)) && ((e = e.substring(u.raw.length)), t.push(u), !0);
                              })
                          )
                      )
                          if ((u = this.tokenizer.space(e))) (e = e.substring(u.raw.length)), u.type && t.push(u);
                          else if ((u = this.tokenizer.code(e)))
                              (e = e.substring(u.raw.length)),
                                  !(n = t[t.length - 1]) || ("paragraph" !== n.type && "text" !== n.type) ? t.push(u) : ((n.raw += "\n" + u.raw), (n.text += "\n" + u.text), (this.inlineQueue[this.inlineQueue.length - 1].src = n.text));
                          else if ((u = this.tokenizer.fences(e))) (e = e.substring(u.raw.length)), t.push(u);
                          else if ((u = this.tokenizer.heading(e))) (e = e.substring(u.raw.length)), t.push(u);
                          else if ((u = this.tokenizer.hr(e))) (e = e.substring(u.raw.length)), t.push(u);
                          else if ((u = this.tokenizer.blockquote(e))) (e = e.substring(u.raw.length)), t.push(u);
                          else if ((u = this.tokenizer.list(e))) (e = e.substring(u.raw.length)), t.push(u);
                          else if ((u = this.tokenizer.html(e))) (e = e.substring(u.raw.length)), t.push(u);
                          else if ((u = this.tokenizer.def(e)))
                              (e = e.substring(u.raw.length)),
                                  !(n = t[t.length - 1]) || ("paragraph" !== n.type && "text" !== n.type)
                                      ? this.tokens.links[u.tag] || (this.tokens.links[u.tag] = { href: u.href, title: u.title })
                                      : ((n.raw += "\n" + u.raw), (n.text += "\n" + u.raw), (this.inlineQueue[this.inlineQueue.length - 1].src = n.text));
                          else if ((u = this.tokenizer.table(e))) (e = e.substring(u.raw.length)), t.push(u);
                          else if ((u = this.tokenizer.lheading(e))) (e = e.substring(u.raw.length)), t.push(u);
                          else if (
                              ((r = e),
                              this.options.extensions &&
                                  this.options.extensions.startBlock &&
                                  (function () {
                                      var t = 1 / 0,
                                          u = e.slice(1),
                                          n = void 0;
                                      s.options.extensions.startBlock.forEach(function (e) {
                                          "number" == typeof (n = e.call({ lexer: this }, u)) && n >= 0 && (t = Math.min(t, n));
                                      }),
                                          t < 1 / 0 && t >= 0 && (r = e.substring(0, t + 1));
                                  })(),
                              this.state.top && (u = this.tokenizer.paragraph(r)))
                          )
                              (n = t[t.length - 1]),
                                  i && "paragraph" === n.type ? ((n.raw += "\n" + u.raw), (n.text += "\n" + u.text), this.inlineQueue.pop(), (this.inlineQueue[this.inlineQueue.length - 1].src = n.text)) : t.push(u),
                                  (i = r.length !== e.length),
                                  (e = e.substring(u.raw.length));
                          else if ((u = this.tokenizer.text(e)))
                              (e = e.substring(u.raw.length)),
                                  (n = t[t.length - 1]) && "text" === n.type ? ((n.raw += "\n" + u.raw), (n.text += "\n" + u.text), this.inlineQueue.pop(), (this.inlineQueue[this.inlineQueue.length - 1].src = n.text)) : t.push(u);
                          else if (e) {
                              var l = "Infinite loop on byte: " + e.charCodeAt(0);
                              if (this.options.silent) {
                                  console.error(l);
                                  break;
                              }
                              throw new Error(l);
                          }
                  return (this.state.top = !0), t;
              }),
              (s.inline = function (e, t) {
                  this.inlineQueue.push({ src: e, tokens: t });
              }),
              (s.inlineTokens = function (e, t) {
                  var u, n, r, i = this;
                  void 0 === t && (t = []);
                  var s, l, a, o = e;
                  if (this.tokens.links) {
                      var D = Object.keys(this.tokens.links);
                      if (D.length > 0)
                          for (; null != (s = this.tokenizer.rules.inline.reflinkSearch.exec(o)); )
                              D.includes(s[0].slice(s[0].lastIndexOf("[") + 1, -1)) && (o = o.slice(0, s.index) + "[" + y("a", s[0].length - 2) + "]" + o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
                  }
                  for (; null != (s = this.tokenizer.rules.inline.blockSkip.exec(o)); ) o = o.slice(0, s.index) + "[" + y("a", s[0].length - 2) + "]" + o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
                  for (; null != (s = this.tokenizer.rules.inline.escapedEmSt.exec(o)); ) o = o.slice(0, s.index) + "++" + o.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
                  for (; e; )
                      if (
                          (l || (a = ""),
                          (l = !1),
                          !(
                              this.options.extensions &&
                              this.options.extensions.inline &&
                              this.options.extensions.inline.some(function (n) {
                                  return !!(u = n.call({ lexer: i }, e, t)) && ((e = e.substring(u.raw.length)), t.push(u), !0);
                              })
                          ))
                      )
                          if ((u = this.tokenizer.escape(e))) (e = e.substring(u.raw.length)), t.push(u);
                          else if ((u = this.tokenizer.tag(e))) (e = e.substring(u.raw.length)), (n = t[t.length - 1]) && "text" === u.type && "text" === n.type ? ((n.raw += u.raw), (n.text += u.text)) : t.push(u);
                          else if ((u = this.tokenizer.link(e))) (e = e.substring(u.raw.length)), t.push(u);
                          else if ((u = this.tokenizer.reflink(e, this.tokens.links))) (e = e.substring(u.raw.length)), (n = t[t.length - 1]) && "text" === u.type && "text" === n.type ? ((n.raw += u.raw), (n.text += u.text)) : t.push(u);
                          else if ((u = this.tokenizer.emStrong(e, o, a))) (e = e.substring(u.raw.length)), t.push(u);
                          else if ((u = this.tokenizer.codespan(e))) (e = e.substring(u.raw.length)), t.push(u);
                          else if ((u = this.tokenizer.br(e))) (e = e.substring(u.raw.length)), t.push(u);
                          else if ((u = this.tokenizer.del(e))) (e = e.substring(u.raw.length)), t.push(u);
                          else if ((u = this.tokenizer.autolink(e, R))) (e = e.substring(u.raw.length)), t.push(u);
                          else if (this.state.inLink || !(u = this.tokenizer.url(e, R))) {
                              if (
                                  ((r = e),
                                  this.options.extensions &&
                                      this.options.extensions.startInline &&
                                      (function () {
                                          var t = 1 / 0,
                                              u = e.slice(1),
                                              n = void 0;
                                          i.options.extensions.startInline.forEach(function (e) {
                                              "number" == typeof (n = e.call({ lexer: this }, u)) && n >= 0 && (t = Math.min(t, n));
                                          }),
                                              t < 1 / 0 && t >= 0 && (r = e.substring(0, t + 1));
                                      })(),
                                  (u = this.tokenizer.inlineText(r, T)))
                              )
                                  (e = e.substring(u.raw.length)), "_" !== u.raw.slice(-1) && (a = u.raw.slice(-1)), (l = !0), (n = t[t.length - 1]) && "text" === n.type ? ((n.raw += u.raw), (n.text += u.text)) : t.push(u);
                              else if (e) {
                                  var c = "Infinite loop on byte: " + e.charCodeAt(0);
                                  if (this.options.silent) {
                                      console.error(c);
                                      break;
                                  }
                                  throw new Error(c);
                              }
                          } else (e = e.substring(u.raw.length)), t.push(u);
                  return t;
              }),
              (n = u),
              (i = [
                  {
                      key: "rules",
                      get: function () {
                          return { block: $, inline: S };
                      },
                  },
              ]),
              (r = null) && t(n.prototype, r),
              i && t(n, i),
              u
          );
      })(),
      Z = (function () {
          function t(t) {
              this.options = t || e.defaults;
          }
          var u = t.prototype;
          return (
              (u.code = function (e, t, u) {
                  var n = (t || "").match(/\S*/)[0];
                  if (this.options.highlight) {
                      var r = this.options.highlight(e, n);
                      null != r && r !== e && ((u = !0), (e = r));
                  }
                  return (e = e.replace(/\n$/, "") + "\n"), n ? '<pre><code class="' + this.options.langPrefix + c(n, !0) + '">' + (u ? e : c(e, !0)) + "</code></pre>\n" : "<pre><code>" + (u ? e : c(e, !0)) + "</code></pre>\n";
              }),
              (u.blockquote = function (e) {
                  return "<blockquote>\n" + e + "</blockquote>\n";
              }),
              (u.html = function (e) {
                  return e;
              }),
              (u.heading = function (e, t, u, n) {
                  return this.options.headerIds ? "<h" + t + ' id="' + this.options.headerPrefix + n.slug(u) + '">' + e + "</h" + t + ">\n" : "<h" + t + ">" + e + "</h" + t + ">\n";
              }),
              (u.hr = function () {
                  return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
              }),
              (u.list = function (e, t, u) {
                  var n = t ? "ol" : "ul";
                  return "<" + n + (t && 1 !== u ? ' start="' + u + '"' : "") + ">\n" + e + "</" + n + ">\n";
              }),
              (u.listitem = function (e) {
                  return "<li>" + e + "</li>\n";
              }),
              (u.checkbox = function (e) {
                  return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
              }),
              (u.paragraph = function (e) {
                  return "<p>" + e + "</p>\n";
              }),
              (u.table = function (e, t) {
                  return t && (t = "<tbody>" + t + "</tbody>"), "<table>\n<thead>\n" + e + "</thead>\n" + t + "</table>\n";
              }),
              (u.tablerow = function (e) {
                  return "<tr>\n" + e + "</tr>\n";
              }),
              (u.tablecell = function (e, t) {
                  var u = t.header ? "th" : "td";
                  return (t.align ? "<" + u + ' align="' + t.align + '">' : "<" + u + ">") + e + "</" + u + ">\n";
              }),
              (u.strong = function (e) {
                  return "<strong>" + e + "</strong>";
              }),
              (u.em = function (e) {
                  return "<em>" + e + "</em>";
              }),
              (u.codespan = function (e) {
                  return "<code>" + e + "</code>";
              }),
              (u.br = function () {
                  return this.options.xhtml ? "<br/>" : "<br>";
              }),
              (u.del = function (e) {
                  return "<del>" + e + "</del>";
              }),
              (u.link = function (e, t, u) {
                  if (null === (e = d(this.options.sanitize, this.options.baseUrl, e))) return u;
                  var n = '<a href="' + c(e) + '"';
                  return t && (n += ' title="' + t + '"'), (n += ">" + u + "</a>");
              }),
              (u.image = function (e, t, u) {
                  if (null === (e = d(this.options.sanitize, this.options.baseUrl, e))) return u;
                  var n = '<img src="' + e + '" alt="' + u + '"';
                  return t && (n += ' title="' + t + '"'), (n += this.options.xhtml ? "/>" : ">");
              }),
              (u.text = function (e) {
                  return e;
              }),
              t
          );
      })(),
      O = (function () {
          function e() {}
          var t = e.prototype;
          return (
              (t.strong = function (e) {
                  return e;
              }),
              (t.em = function (e) {
                  return e;
              }),
              (t.codespan = function (e) {
                  return e;
              }),
              (t.del = function (e) {
                  return e;
              }),
              (t.html = function (e) {
                  return e;
              }),
              (t.text = function (e) {
                  return e;
              }),
              (t.link = function (e, t, u) {
                  return "" + u;
              }),
              (t.image = function (e, t, u) {
                  return "" + u;
              }),
              (t.br = function () {
                  return "";
              }),
              e
          );
      })(),
      q = (function () {
          function e() {
              this.seen = {};
          }
          var t = e.prototype;
          return (
              (t.serialize = function (e) {
                  return e
                      .toLowerCase()
                      .trim()
                      .replace(/<[!\/a-z].*?>/gi, "")
                      .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "")
                      .replace(/\s/g, "-");
              }),
              (t.getNextSafeSlug = function (e, t) {
                  var u = e,
                      n = 0;
                  if (this.seen.hasOwnProperty(u)) {
                      n = this.seen[e];
                      do {
                          u = e + "-" + ++n;
                      } while (this.seen.hasOwnProperty(u));
                  }
                  return t || ((this.seen[e] = n), (this.seen[u] = 0)), u;
              }),
              (t.slug = function (e, t) {
                  void 0 === t && (t = {});
                  var u = this.serialize(e);
                  return this.getNextSafeSlug(u, t.dryrun);
              }),
              e
          );
      })(),
      L = (function () {
          function t(t) {
              (this.options = t || e.defaults),
                  (this.options.renderer = this.options.renderer || new Z()),
                  (this.renderer = this.options.renderer),
                  (this.renderer.options = this.options),
                  (this.textRenderer = new O()),
                  (this.slugger = new q());
          }
          (t.parse = function (e, u) {
              return new t(u).parse(e);
          }),
              (t.parseInline = function (e, u) {
                  return new t(u).parseInline(e);
              });
          var u = t.prototype;
          return (
              (u.parse = function (e, t) {
                  void 0 === t && (t = !0);
                  var u, n, r, i, s, l, a, o, D, c, h, f, F, g, A, d, C, k, E, x = "", m = e.length;
                  for (u = 0; u < m; u++)
                      if (
                          ((c = e[u]),
                          !(this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[c.type]) ||
                              (!1 === (E = this.options.extensions.renderers[c.type].call({ parser: this }, c)) && ["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(c.type)))
                      )
                          switch (c.type) {
                              case "space":
                                  continue;
                              case "hr":
                                  x += this.renderer.hr();
                                  continue;
                              case "heading":
                                  x += this.renderer.heading(this.parseInline(c.tokens), c.depth, p(this.parseInline(c.tokens, this.textRenderer)), this.slugger);
                                  continue;
                              case "code":
                                  x += this.renderer.code(c.text, c.lang, c.escaped);
                                  continue;
                              case "table":
                                  for (o = "", a = "", i = c.header.length, n = 0; n < i; n++) a += this.renderer.tablecell(this.parseInline(c.header[n].tokens), { header: !0, align: c.align[n] });
                                  for (o += this.renderer.tablerow(a), D = "", i = c.rows.length, n = 0; n < i; n++) {
                                      for (a = "", s = (l = c.rows[n]).length, r = 0; r < s; r++) a += this.renderer.tablecell(this.parseInline(l[r].tokens), { header: !1, align: c.align[r] });
                                      D += this.renderer.tablerow(a);
                                  }
                                  x += this.renderer.table(o, D);
                                  continue;
                              case "blockquote":
                                  (D = this.parse(c.tokens)), (x += this.renderer.blockquote(D));
                                  continue;
                              case "list":
                                  for (h = c.ordered, f = c.start, F = c.loose, i = c.items.length, D = "", n = 0; n < i; n++)
                                      (d = (A = c.items[n]).checked),
                                          (C = A.task),
                                          (g = ""),
                                          A.task &&
                                              ((k = this.renderer.checkbox(d)),
                                              F
                                                  ? A.tokens.length > 0 && "paragraph" === A.tokens[0].type
                                                      ? ((A.tokens[0].text = k + " " + A.tokens[0].text),
                                                        A.tokens[0].tokens && A.tokens[0].tokens.length > 0 && "text" === A.tokens[0].tokens[0].type && (A.tokens[0].tokens[0].text = k + " " + A.tokens[0].tokens[0].text))
                                                      : A.tokens.unshift({ type: "text", text: k })
                                                  : (g += k)),
                                          (g += this.parse(A.tokens, F)),
                                          (D += this.renderer.listitem(g, C, d));
                                  x += this.renderer.list(D, h, f);
                                  continue;
                              case "html":
                                  x += this.renderer.html(c.text);
                                  continue;
                              case "paragraph":
                                  x += this.renderer.paragraph(this.parseInline(c.tokens));
                                  continue;
                              case "text":
                                  for (D = c.tokens ? this.parseInline(c.tokens) : c.text; u + 1 < m && "text" === e[u + 1].type; ) D += "\n" + ((c = e[++u]).tokens ? this.parseInline(c.tokens) : c.text);
                                  x += t ? this.renderer.paragraph(D) : D;
                                  continue;
                              default:
                                  var B = 'Token with "' + c.type + '" type was not found.';
                                  if (this.options.silent) return void console.error(B);
                                  throw new Error(B);
                          }
                      else x += E || "";
                  return x;
              }),
              (u.parseInline = function (e, t) {
                  t = t || this.renderer;
                  var u,
                      n,
                      r,
                      i = "",
                      s = e.length;
                  for (u = 0; u < s; u++)
                      if (
                          ((n = e[u]),
                          !(this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[n.type]) ||
                              (!1 === (r = this.options.extensions.renderers[n.type].call({ parser: this }, n)) && ["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(n.type)))
                      )
                          switch (n.type) {
                              case "escape":
                              case "text":
                                  i += t.text(n.text);
                                  break;
                              case "html":
                                  i += t.html(n.text);
                                  break;
                              case "link":
                                  i += t.link(n.href, n.title, this.parseInline(n.tokens, t));
                                  break;
                              case "image":
                                  i += t.image(n.href, n.title, n.text);
                                  break;
                              case "strong":
                                  i += t.strong(this.parseInline(n.tokens, t));
                                  break;
                              case "em":
                                  i += t.em(this.parseInline(n.tokens, t));
                                  break;
                              case "codespan":
                                  i += t.codespan(n.text);
                                  break;
                              case "br":
                                  i += t.br();
                                  break;
                              case "del":
                                  i += t.del(this.parseInline(n.tokens, t));
                                  break;
                              default:
                                  var l = 'Token with "' + n.type + '" type was not found.';
                                  if (this.options.silent) return void console.error(l);
                                  throw new Error(l);
                          }
                      else i += r || "";
                  return i;
              }),
              t
          );
      })();
  function j(e, t, u) {
      if (null == e) throw new Error("marked(): input parameter is undefined or null");
      if ("string" != typeof e) throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected");
      if (("function" == typeof t && ((u = t), (t = null)), v((t = B({}, j.defaults, t || {}))), u)) {
          var n,
              r = t.highlight;
          try {
              n = I.lex(e, t);
          } catch (e) {
              return u(e);
          }
          var i = function (e) {
              var i;
              if (!e)
                  try {
                      t.walkTokens && j.walkTokens(n, t.walkTokens), (i = L.parse(n, t));
                  } catch (t) {
                      e = t;
                  }
              return (t.highlight = r), e ? u(e) : u(null, i);
          };
          if (!r || r.length < 3) return i();
          if ((delete t.highlight, !n.length)) return i();
          var s = 0;
          return (
              j.walkTokens(n, function (e) {
                  "code" === e.type &&
                      (s++,
                      setTimeout(function () {
                          r(e.text, e.lang, function (t, u) {
                              if (t) return i(t);
                              null != u && u !== e.text && ((e.text = u), (e.escaped = !0)), 0 === --s && i();
                          });
                      }, 0));
              }),
              void (0 === s && i())
          );
      }
      try {
          var l = I.lex(e, t);
          return t.walkTokens && j.walkTokens(l, t.walkTokens), L.parse(l, t);
      } catch (e) {
          if (((e.message += "\nPlease report this to https://github.com/markedjs/marked."), t.silent)) return "<p>An error occurred:</p><pre>" + c(e.message + "", !0) + "</pre>";
          throw e;
      }
  }
  (j.options = j.setOptions = function (t) {
      var u;
      return B(j.defaults, t), (u = j.defaults), (e.defaults = u), j;
  }),
      (j.getDefaults = r),
      (j.defaults = e.defaults),
      (j.use = function () {
          for (var e = arguments.length, t = new Array(e), u = 0; u < e; u++) t[u] = arguments[u];
          var n,
              r = B.apply(void 0, [{}].concat(t)),
              i = j.defaults.extensions || { renderers: {}, childTokens: {} };
          t.forEach(function (e) {
              if (
                  (e.extensions &&
                      ((n = !0),
                      e.extensions.forEach(function (e) {
                          if (!e.name) throw new Error("extension name required");
                          if (e.renderer) {
                              var t = i.renderers ? i.renderers[e.name] : null;
                              i.renderers[e.name] = t
                                  ? function () {
                                        for (var u = arguments.length, n = new Array(u), r = 0; r < u; r++) n[r] = arguments[r];
                                        var i = e.renderer.apply(this, n);
                                        return !1 === i && (i = t.apply(this, n)), i;
                                    }
                                  : e.renderer;
                          }
                          if (e.tokenizer) {
                              if (!e.level || ("block" !== e.level && "inline" !== e.level)) throw new Error("extension level must be 'block' or 'inline'");
                              i[e.level] ? i[e.level].unshift(e.tokenizer) : (i[e.level] = [e.tokenizer]),
                                  e.start &&
                                      ("block" === e.level ? (i.startBlock ? i.startBlock.push(e.start) : (i.startBlock = [e.start])) : "inline" === e.level && (i.startInline ? i.startInline.push(e.start) : (i.startInline = [e.start])));
                          }
                          e.childTokens && (i.childTokens[e.name] = e.childTokens);
                      })),
                  e.renderer &&
                      (function () {
                          var t = j.defaults.renderer || new Z(),
                              u = function (u) {
                                  var n = t[u];
                                  t[u] = function () {
                                      for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++) i[s] = arguments[s];
                                      var l = e.renderer[u].apply(t, i);
                                      return !1 === l && (l = n.apply(t, i)), l;
                                  };
                              };
                          for (var n in e.renderer) u(n);
                          r.renderer = t;
                      })(),
                  e.tokenizer &&
                      (function () {
                          var t = j.defaults.tokenizer || new z(),
                              u = function (u) {
                                  var n = t[u];
                                  t[u] = function () {
                                      for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++) i[s] = arguments[s];
                                      var l = e.tokenizer[u].apply(t, i);
                                      return !1 === l && (l = n.apply(t, i)), l;
                                  };
                              };
                          for (var n in e.tokenizer) u(n);
                          r.tokenizer = t;
                      })(),
                  e.walkTokens)
              ) {
                  var t = j.defaults.walkTokens;
                  r.walkTokens = function (u) {
                      e.walkTokens.call(this, u), t && t.call(this, u);
                  };
              }
              n && (r.extensions = i), j.setOptions(r);
          });
      }),
      (j.walkTokens = function (e, t) {
          for (
              var u,
                  r = function () {
                      var e = u.value;
                      switch ((t.call(j, e), e.type)) {
                          case "table":
                              for (var r, i = n(e.header); !(r = i()).done; ) {
                                  var s = r.value;
                                  j.walkTokens(s.tokens, t);
                              }
                              for (var l, a = n(e.rows); !(l = a()).done; )
                                  for (var o, D = n(l.value); !(o = D()).done; ) {
                                      var c = o.value;
                                      j.walkTokens(c.tokens, t);
                                  }
                              break;
                          case "list":
                              j.walkTokens(e.items, t);
                              break;
                          default:
                              j.defaults.extensions && j.defaults.extensions.childTokens && j.defaults.extensions.childTokens[e.type]
                                  ? j.defaults.extensions.childTokens[e.type].forEach(function (u) {
                                        j.walkTokens(e[u], t);
                                    })
                                  : e.tokens && j.walkTokens(e.tokens, t);
                      }
                  },
                  i = n(e);
              !(u = i()).done;

          )
              r();
      }),
      (j.parseInline = function (e, t) {
          if (null == e) throw new Error("marked.parseInline(): input parameter is undefined or null");
          if ("string" != typeof e) throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected");
          v((t = B({}, j.defaults, t || {})));
          try {
              var u = I.lexInline(e, t);
              return t.walkTokens && j.walkTokens(u, t.walkTokens), L.parseInline(u, t);
          } catch (e) {
              if (((e.message += "\nPlease report this to https://github.com/markedjs/marked."), t.silent)) return "<p>An error occurred:</p><pre>" + c(e.message + "", !0) + "</pre>";
              throw e;
          }
      }),
      (j.Parser = L),
      (j.parser = L.parse),
      (j.Renderer = Z),
      (j.TextRenderer = O),
      (j.Lexer = I),
      (j.lexer = I.lex),
      (j.Tokenizer = z),
      (j.Slugger = q),
      (j.parse = j);
  var P = j.options,
      U = j.setOptions,
      Q = j.use,
      M = j.walkTokens,
      N = j.parseInline,
      X = j,
      G = L.parse,
      V = I.lex;
  (e.Lexer = I),
      (e.Parser = L),
      (e.Renderer = Z),
      (e.Slugger = q),
      (e.TextRenderer = O),
      (e.Tokenizer = z),
      (e.default = j),
      (e.getDefaults = r),
      (e.lexer = V),
      (e.options = P),
      (e.parse = X),
      (e.parseInline = N),
      (e.parser = G),
      (e.setOptions = U),
      (e.use = Q),
      (e.walkTokens = M),
      Object.defineProperty(e, "__esModule", { value: !0 });
});