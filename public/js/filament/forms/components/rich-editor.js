var Oi = "2.1.1",
    K = "[data-trix-attachment]",
    je = {
        preview: { presentation: "gallery", caption: { name: !0, size: !0 } },
        file: { caption: { size: !0 } },
    },
    y = {
        default: { tagName: "div", parse: !1 },
        quote: { tagName: "blockquote", nestable: !0 },
        heading1: { tagName: "h1", terminal: !0, breakOnReturn: !0, group: !1 },
        code: {
            tagName: "pre",
            terminal: !0,
            htmlAttributes: ["language"],
            text: { plaintext: !0 },
        },
        bulletList: { tagName: "ul", parse: !1 },
        bullet: {
            tagName: "li",
            listAttribute: "bulletList",
            group: !1,
            nestable: !0,
            test(n) {
                return Je(n.parentNode) === y[this.listAttribute].tagName;
            },
        },
        numberList: { tagName: "ol", parse: !1 },
        number: {
            tagName: "li",
            listAttribute: "numberList",
            group: !1,
            nestable: !0,
            test(n) {
                return Je(n.parentNode) === y[this.listAttribute].tagName;
            },
        },
        attachmentGallery: {
            tagName: "div",
            exclusive: !0,
            terminal: !0,
            parse: !1,
            group: !1,
        },
    },
    Je = (n) => {
        var t;
        return n == null || (t = n.tagName) === null || t === void 0
            ? void 0
            : t.toLowerCase();
    },
    Ke = navigator.userAgent.match(/android\s([0-9]+.*Chrome)/i),
    se = Ke && parseInt(Ke[1]),
    St = {
        composesExistingText: /Android.*Chrome/.test(navigator.userAgent),
        recentAndroid: se && se > 12,
        samsungAndroid: se && navigator.userAgent.match(/Android.*SM-/),
        forcesObjectResizing: /Trident.*rv:11/.test(navigator.userAgent),
        supportsInputEvents:
            typeof InputEvent < "u" &&
            ["data", "getTargetRanges", "inputType"].every(
                (n) => n in InputEvent.prototype,
            ),
    },
    h = {
        attachFiles: "Attach Files",
        bold: "Bold",
        bullets: "Bullets",
        byte: "Byte",
        bytes: "Bytes",
        captionPlaceholder: "Add a caption\u2026",
        code: "Code",
        heading1: "Heading",
        indent: "Increase Level",
        italic: "Italic",
        link: "Link",
        numbers: "Numbers",
        outdent: "Decrease Level",
        quote: "Quote",
        redo: "Redo",
        remove: "Remove",
        strike: "Strikethrough",
        undo: "Undo",
        unlink: "Unlink",
        url: "URL",
        urlPlaceholder: "Enter a URL\u2026",
        GB: "GB",
        KB: "KB",
        MB: "MB",
        PB: "PB",
        TB: "TB",
    },
    Mi = [h.bytes, h.KB, h.MB, h.GB, h.TB, h.PB],
    vi = {
        prefix: "IEC",
        precision: 2,
        formatter(n) {
            switch (n) {
                case 0:
                    return "0 ".concat(h.bytes);
                case 1:
                    return "1 ".concat(h.byte);
                default:
                    let t;
                    this.prefix === "SI"
                        ? (t = 1e3)
                        : this.prefix === "IEC" && (t = 1024);
                    let e = Math.floor(Math.log(n) / Math.log(t)),
                        i = (n / Math.pow(t, e))
                            .toFixed(this.precision)
                            .replace(/0*$/, "")
                            .replace(/\.$/, "");
                    return "".concat(i, " ").concat(Mi[e]);
            }
        },
    },
    te = "\uFEFF",
    U = "\xA0",
    Ai = function (n) {
        for (let t in n) {
            let e = n[t];
            this[t] = e;
        }
        return this;
    },
    We = document.documentElement,
    ji = We.matches,
    f = function (n) {
        let {
                onElement: t,
                matchingSelector: e,
                withCallback: i,
                inPhase: r,
                preventDefault: o,
                times: s,
            } = arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            a = t || We,
            c = e,
            l = r === "capturing",
            u = function (g) {
                s != null && --s == 0 && u.destroy();
                let A = V(g.target, { matchingSelector: c });
                A != null && (i?.call(A, g, A), o && g.preventDefault());
            };
        return (
            (u.destroy = () => a.removeEventListener(n, u, l)),
            a.addEventListener(n, u, l),
            u
        );
    },
    bt = function (n) {
        let {
                onElement: t,
                bubbles: e,
                cancelable: i,
                attributes: r,
            } = arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            o = t ?? We;
        (e = e !== !1), (i = i !== !1);
        let s = document.createEvent("Events");
        return (
            s.initEvent(n, e, i), r != null && Ai.call(s, r), o.dispatchEvent(s)
        );
    },
    xi = function (n, t) {
        if (n?.nodeType === 1) return ji.call(n, t);
    },
    V = function (n) {
        let { matchingSelector: t, untilNode: e } =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        for (; n && n.nodeType !== Node.ELEMENT_NODE; ) n = n.parentNode;
        if (n != null) {
            if (t == null) return n;
            if (n.closest && e == null) return n.closest(t);
            for (; n && n !== e; ) {
                if (xi(n, t)) return n;
                n = n.parentNode;
            }
        }
    },
    Ue = (n) => document.activeElement !== n && J(n, document.activeElement),
    J = function (n, t) {
        if (n && t)
            for (; t; ) {
                if (t === n) return !0;
                t = t.parentNode;
            }
    },
    ae = function (n) {
        var t;
        if ((t = n) === null || t === void 0 || !t.parentNode) return;
        let e = 0;
        for (n = n.previousSibling; n; ) e++, (n = n.previousSibling);
        return e;
    },
    q = (n) => {
        var t;
        return n == null || (t = n.parentNode) === null || t === void 0
            ? void 0
            : t.removeChild(n);
    },
    Ft = function (n) {
        let {
                onlyNodesOfType: t,
                usingFilter: e,
                expandEntityReferences: i,
            } = arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            r = (() => {
                switch (t) {
                    case "element":
                        return NodeFilter.SHOW_ELEMENT;
                    case "text":
                        return NodeFilter.SHOW_TEXT;
                    case "comment":
                        return NodeFilter.SHOW_COMMENT;
                    default:
                        return NodeFilter.SHOW_ALL;
                }
            })();
        return document.createTreeWalker(n, r, e ?? null, i === !0);
    },
    x = (n) => {
        var t;
        return n == null || (t = n.tagName) === null || t === void 0
            ? void 0
            : t.toLowerCase();
    },
    d = function (n) {
        let t,
            e,
            i =
                arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {};
        typeof n == "object"
            ? ((i = n), (n = i.tagName))
            : (i = { attributes: i });
        let r = document.createElement(n);
        if (
            (i.editable != null &&
                (i.attributes == null && (i.attributes = {}),
                (i.attributes.contenteditable = i.editable)),
            i.attributes)
        )
            for (t in i.attributes) (e = i.attributes[t]), r.setAttribute(t, e);
        if (i.style) for (t in i.style) (e = i.style[t]), (r.style[t] = e);
        if (i.data) for (t in i.data) (e = i.data[t]), (r.dataset[t] = e);
        return (
            i.className &&
                i.className.split(" ").forEach((o) => {
                    r.classList.add(o);
                }),
            i.textContent && (r.textContent = i.textContent),
            i.childNodes &&
                [].concat(i.childNodes).forEach((o) => {
                    r.appendChild(o);
                }),
            r
        );
    },
    mt,
    vt = function () {
        if (mt != null) return mt;
        mt = [];
        for (let n in y) {
            let t = y[n];
            t.tagName && mt.push(t.tagName);
        }
        return mt;
    },
    le = (n) => ot(n?.firstChild),
    $e = function (n) {
        let { strict: t } =
            arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : { strict: !0 };
        return t
            ? ot(n)
            : ot(n) ||
                  (!ot(n.firstChild) &&
                      (function (e) {
                          return (
                              vt().includes(x(e)) &&
                              !vt().includes(x(e.firstChild))
                          );
                      })(n));
    },
    ot = (n) => Wi(n) && n?.data === "block",
    Wi = (n) => n?.nodeType === Node.COMMENT_NODE,
    st = function (n) {
        let { name: t } =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (n)
            return At(n)
                ? n.data === te
                    ? !t || n.parentNode.dataset.trixCursorTarget === t
                    : void 0
                : st(n.firstChild);
    },
    $ = (n) => xi(n, K),
    yi = (n) => At(n) && n?.data === "",
    At = (n) => n?.nodeType === Node.TEXT_NODE,
    Ve = {
        level2Enabled: !0,
        getLevel() {
            return this.level2Enabled && St.supportsInputEvents ? 2 : 0;
        },
        pickFiles(n) {
            let t = d("input", {
                type: "file",
                multiple: !0,
                hidden: !0,
                id: this.fileInputId,
            });
            t.addEventListener("change", () => {
                n(t.files), q(t);
            }),
                q(document.getElementById(this.fileInputId)),
                document.body.appendChild(t),
                t.click();
        },
    },
    Tt = {
        removeBlankTableCells: !1,
        tableCellSeparator: " | ",
        tableRowSeparator: `
`,
    },
    Y = {
        bold: {
            tagName: "strong",
            inheritable: !0,
            parser(n) {
                let t = window.getComputedStyle(n);
                return t.fontWeight === "bold" || t.fontWeight >= 600;
            },
        },
        italic: {
            tagName: "em",
            inheritable: !0,
            parser: (n) => window.getComputedStyle(n).fontStyle === "italic",
        },
        href: {
            groupTagName: "a",
            parser(n) {
                let t = "a:not(".concat(K, ")"),
                    e = n.closest(t);
                if (e) return e.getAttribute("href");
            },
        },
        strike: { tagName: "del", inheritable: !0 },
        frozen: { style: { backgroundColor: "highlight" } },
    },
    Ci = {
        getDefaultHTML: () =>
            `<div class="trix-button-row">
      <span class="trix-button-group trix-button-group--text-tools" data-trix-button-group="text-tools">
        <button type="button" class="trix-button trix-button--icon trix-button--icon-bold" data-trix-attribute="bold" data-trix-key="b" title="`
                .concat(h.bold, '" tabindex="-1">')
                .concat(
                    h.bold,
                    `</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-italic" data-trix-attribute="italic" data-trix-key="i" title="`,
                )
                .concat(h.italic, '" tabindex="-1">')
                .concat(
                    h.italic,
                    `</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-strike" data-trix-attribute="strike" title="`,
                )
                .concat(h.strike, '" tabindex="-1">')
                .concat(
                    h.strike,
                    `</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-link" data-trix-attribute="href" data-trix-action="link" data-trix-key="k" title="`,
                )
                .concat(h.link, '" tabindex="-1">')
                .concat(
                    h.link,
                    `</button>
      </span>

      <span class="trix-button-group trix-button-group--block-tools" data-trix-button-group="block-tools">
        <button type="button" class="trix-button trix-button--icon trix-button--icon-heading-1" data-trix-attribute="heading1" title="`,
                )
                .concat(h.heading1, '" tabindex="-1">')
                .concat(
                    h.heading1,
                    `</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-quote" data-trix-attribute="quote" title="`,
                )
                .concat(h.quote, '" tabindex="-1">')
                .concat(
                    h.quote,
                    `</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-code" data-trix-attribute="code" title="`,
                )
                .concat(h.code, '" tabindex="-1">')
                .concat(
                    h.code,
                    `</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-bullet-list" data-trix-attribute="bullet" title="`,
                )
                .concat(h.bullets, '" tabindex="-1">')
                .concat(
                    h.bullets,
                    `</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-number-list" data-trix-attribute="number" title="`,
                )
                .concat(h.numbers, '" tabindex="-1">')
                .concat(
                    h.numbers,
                    `</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-decrease-nesting-level" data-trix-action="decreaseNestingLevel" title="`,
                )
                .concat(h.outdent, '" tabindex="-1">')
                .concat(
                    h.outdent,
                    `</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-increase-nesting-level" data-trix-action="increaseNestingLevel" title="`,
                )
                .concat(h.indent, '" tabindex="-1">')
                .concat(
                    h.indent,
                    `</button>
      </span>

      <span class="trix-button-group trix-button-group--file-tools" data-trix-button-group="file-tools">
        <button type="button" class="trix-button trix-button--icon trix-button--icon-attach" data-trix-action="attachFiles" title="`,
                )
                .concat(h.attachFiles, '" tabindex="-1">')
                .concat(
                    h.attachFiles,
                    `</button>
      </span>

      <span class="trix-button-group-spacer"></span>

      <span class="trix-button-group trix-button-group--history-tools" data-trix-button-group="history-tools">
        <button type="button" class="trix-button trix-button--icon trix-button--icon-undo" data-trix-action="undo" data-trix-key="z" title="`,
                )
                .concat(h.undo, '" tabindex="-1">')
                .concat(
                    h.undo,
                    `</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-redo" data-trix-action="redo" data-trix-key="shift+z" title="`,
                )
                .concat(h.redo, '" tabindex="-1">')
                .concat(
                    h.redo,
                    `</button>
      </span>
    </div>

    <div class="trix-dialogs" data-trix-dialogs>
      <div class="trix-dialog trix-dialog--link" data-trix-dialog="href" data-trix-dialog-attribute="href">
        <div class="trix-dialog__link-fields">
          <input type="url" name="href" class="trix-input trix-input--dialog" placeholder="`,
                )
                .concat(h.urlPlaceholder, '" aria-label="')
                .concat(
                    h.url,
                    `" required data-trix-input>
          <div class="trix-button-group">
            <input type="button" class="trix-button trix-button--dialog" value="`,
                )
                .concat(
                    h.link,
                    `" data-trix-method="setAttribute">
            <input type="button" class="trix-button trix-button--dialog" value="`,
                )
                .concat(
                    h.unlink,
                    `" data-trix-method="removeAttribute">
          </div>
        </div>
      </div>
    </div>`,
                ),
    },
    Re = { interval: 5e3 },
    Lt = Object.freeze({
        __proto__: null,
        attachments: je,
        blockAttributes: y,
        browser: St,
        css: {
            attachment: "attachment",
            attachmentCaption: "attachment__caption",
            attachmentCaptionEditor: "attachment__caption-editor",
            attachmentMetadata: "attachment__metadata",
            attachmentMetadataContainer: "attachment__metadata-container",
            attachmentName: "attachment__name",
            attachmentProgress: "attachment__progress",
            attachmentSize: "attachment__size",
            attachmentToolbar: "attachment__toolbar",
            attachmentGallery: "attachment-gallery",
        },
        fileSize: vi,
        input: Ve,
        keyNames: {
            8: "backspace",
            9: "tab",
            13: "return",
            27: "escape",
            37: "left",
            39: "right",
            46: "delete",
            68: "d",
            72: "h",
            79: "o",
        },
        lang: h,
        parser: Tt,
        textAttributes: Y,
        toolbar: Ci,
        undo: Re,
    }),
    b = class {
        static proxyMethod(t) {
            let { name: e, toMethod: i, toProperty: r, optional: o } = Ui(t);
            this.prototype[e] = function () {
                let s, a;
                var c, l;
                return (
                    i
                        ? (a = o
                              ? (c = this[i]) === null || c === void 0
                                  ? void 0
                                  : c.call(this)
                              : this[i]())
                        : r && (a = this[r]),
                    o
                        ? ((s =
                              (l = a) === null || l === void 0 ? void 0 : l[e]),
                          s ? Ge.call(s, a, arguments) : void 0)
                        : ((s = a[e]), Ge.call(s, a, arguments))
                );
            };
        }
    },
    Ui = function (n) {
        let t = n.match(Vi);
        if (!t)
            throw new Error("can't parse @proxyMethod expression: ".concat(n));
        let e = { name: t[4] };
        return (
            t[2] != null ? (e.toMethod = t[1]) : (e.toProperty = t[1]),
            t[3] != null && (e.optional = !0),
            e
        );
    },
    { apply: Ge } = Function.prototype,
    Vi = new RegExp("^(.+?)(\\(\\))?(\\?)?\\.(.+?)$"),
    ce,
    ue,
    he,
    Z = class extends b {
        static box() {
            let t =
                arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : "";
            return t instanceof this ? t : this.fromUCS2String(t?.toString());
        }
        static fromUCS2String(t) {
            return new this(t, Ee(t));
        }
        static fromCodepoints(t) {
            return new this(Se(t), t);
        }
        constructor(t, e) {
            super(...arguments),
                (this.ucs2String = t),
                (this.codepoints = e),
                (this.length = this.codepoints.length),
                (this.ucs2Length = this.ucs2String.length);
        }
        offsetToUCS2Offset(t) {
            return Se(this.codepoints.slice(0, Math.max(0, t))).length;
        }
        offsetFromUCS2Offset(t) {
            return Ee(this.ucs2String.slice(0, Math.max(0, t))).length;
        }
        slice() {
            return this.constructor.fromCodepoints(
                this.codepoints.slice(...arguments),
            );
        }
        charAt(t) {
            return this.slice(t, t + 1);
        }
        isEqualTo(t) {
            return this.constructor.box(t).ucs2String === this.ucs2String;
        }
        toJSON() {
            return this.ucs2String;
        }
        getCacheKey() {
            return this.ucs2String;
        }
        toString() {
            return this.ucs2String;
        }
    },
    qi =
        ((ce = Array.from) === null || ce === void 0
            ? void 0
            : ce.call(Array, "\u{1F47C}").length) === 1,
    Hi =
        ((ue = " ".codePointAt) === null || ue === void 0
            ? void 0
            : ue.call(" ", 0)) != null,
    zi =
        ((he = String.fromCodePoint) === null || he === void 0
            ? void 0
            : he.call(String, 32, 128124)) === " \u{1F47C}",
    Ee,
    Se;
(Ee =
    qi && Hi
        ? (n) => Array.from(n).map((t) => t.codePointAt(0))
        : function (n) {
              let t = [],
                  e = 0,
                  { length: i } = n;
              for (; e < i; ) {
                  let r = n.charCodeAt(e++);
                  if (55296 <= r && r <= 56319 && e < i) {
                      let o = n.charCodeAt(e++);
                      (64512 & o) == 56320
                          ? (r = ((1023 & r) << 10) + (1023 & o) + 65536)
                          : e--;
                  }
                  t.push(r);
              }
              return t;
          }),
    (Se = zi
        ? (n) => String.fromCodePoint(...Array.from(n || []))
        : function (n) {
              return (() => {
                  let t = [];
                  return (
                      Array.from(n).forEach((e) => {
                          let i = "";
                          e > 65535 &&
                              ((e -= 65536),
                              (i += String.fromCharCode(
                                  ((e >>> 10) & 1023) | 55296,
                              )),
                              (e = 56320 | (1023 & e))),
                              t.push(i + String.fromCharCode(e));
                      }),
                      t
                  );
              })().join("");
          });
var _i = 0,
    O = class extends b {
        static fromJSONString(t) {
            return this.fromJSON(JSON.parse(t));
        }
        constructor() {
            super(...arguments), (this.id = ++_i);
        }
        hasSameConstructorAs(t) {
            return this.constructor === t?.constructor;
        }
        isEqualTo(t) {
            return this === t;
        }
        inspect() {
            let t = [],
                e = this.contentsForInspection() || {};
            for (let i in e) {
                let r = e[i];
                t.push("".concat(i, "=").concat(r));
            }
            return "#<"
                .concat(this.constructor.name, ":")
                .concat(this.id)
                .concat(t.length ? " ".concat(t.join(", ")) : "", ">");
        }
        contentsForInspection() {}
        toJSONString() {
            return JSON.stringify(this);
        }
        toUTF16String() {
            return Z.box(this);
        }
        getCacheKey() {
            return this.id.toString();
        }
    },
    Q = function () {
        let n =
                arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : [],
            t =
                arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : [];
        if (n.length !== t.length) return !1;
        for (let e = 0; e < n.length; e++) if (n[e] !== t[e]) return !1;
        return !0;
    },
    qe = function (n) {
        let t = n.slice(0);
        for (
            var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), r = 1;
            r < e;
            r++
        )
            i[r - 1] = arguments[r];
        return t.splice(...i), t;
    },
    Ji =
        /[\u05BE\u05C0\u05C3\u05D0-\u05EA\u05F0-\u05F4\u061B\u061F\u0621-\u063A\u0640-\u064A\u066D\u0671-\u06B7\u06BA-\u06BE\u06C0-\u06CE\u06D0-\u06D5\u06E5\u06E6\u200F\u202B\u202E\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE72\uFE74\uFE76-\uFEFC]/,
    Ki = (function () {
        let n = d("input", { dir: "auto", name: "x", dirName: "x.dir" }),
            t = d("textarea", { dir: "auto", name: "y", dirName: "y.dir" }),
            e = d("form");
        e.appendChild(n), e.appendChild(t);
        let i = (function () {
                try {
                    return new FormData(e).has(t.dirName);
                } catch {
                    return !1;
                }
            })(),
            r = (function () {
                try {
                    return n.matches(":dir(ltr),:dir(rtl)");
                } catch {
                    return !1;
                }
            })();
        return i
            ? function (o) {
                  return (t.value = o), new FormData(e).get(t.dirName);
              }
            : r
              ? function (o) {
                    return (
                        (n.value = o), n.matches(":dir(rtl)") ? "rtl" : "ltr"
                    );
                }
              : function (o) {
                    let s = o.trim().charAt(0);
                    return Ji.test(s) ? "rtl" : "ltr";
                };
    })(),
    de = null,
    ge = null,
    me = null,
    Dt = null,
    Le = () => (de || (de = Gi().concat($i())), de),
    v = (n) => y[n],
    $i = () => (ge || (ge = Object.keys(y)), ge),
    De = (n) => Y[n],
    Gi = () => (me || (me = Object.keys(Y)), me),
    ki = function (n, t) {
        Xi(n).textContent = t.replace(/%t/g, n);
    },
    Xi = function (n) {
        let t = document.createElement("style");
        t.setAttribute("type", "text/css"),
            t.setAttribute("data-tag-name", n.toLowerCase());
        let e = Yi();
        return (
            e && t.setAttribute("nonce", e),
            document.head.insertBefore(t, document.head.firstChild),
            t
        );
    },
    Yi = function () {
        let n = Xe("trix-csp-nonce") || Xe("csp-nonce");
        if (n) return n.getAttribute("content");
    },
    Xe = (n) => document.head.querySelector("meta[name=".concat(n, "]")),
    Ye = { "application/x-trix-feature-detection": "test" },
    Ri = function (n) {
        let t = n.getData("text/plain"),
            e = n.getData("text/html");
        if (!t || !e) return t?.length;
        {
            let { body: i } = new DOMParser().parseFromString(e, "text/html");
            if (i.textContent === t) return !i.querySelector("*");
        }
    },
    Ei = /Mac|^iP/.test(navigator.platform)
        ? (n) => n.metaKey
        : (n) => n.ctrlKey,
    He = (n) => setTimeout(n, 1),
    Si = function () {
        let n =
                arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {},
            t = {};
        for (let e in n) {
            let i = n[e];
            t[e] = i;
        }
        return t;
    },
    ht = function () {
        let n =
                arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {},
            t =
                arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {};
        if (Object.keys(n).length !== Object.keys(t).length) return !1;
        for (let e in n) if (n[e] !== t[e]) return !1;
        return !0;
    },
    m = function (n) {
        if (n != null)
            return (
                Array.isArray(n) || (n = [n, n]),
                [Ze(n[0]), Ze(n[1] != null ? n[1] : n[0])]
            );
    },
    N = function (n) {
        if (n == null) return;
        let [t, e] = m(n);
        return we(t, e);
    },
    Pt = function (n, t) {
        if (n == null || t == null) return;
        let [e, i] = m(n),
            [r, o] = m(t);
        return we(e, r) && we(i, o);
    },
    Ze = function (n) {
        return typeof n == "number" ? n : Si(n);
    },
    we = function (n, t) {
        return typeof n == "number" ? n === t : ht(n, t);
    },
    It = class extends b {
        constructor() {
            super(...arguments),
                (this.update = this.update.bind(this)),
                (this.selectionManagers = []);
        }
        start() {
            this.started ||
                ((this.started = !0),
                document.addEventListener("selectionchange", this.update, !0));
        }
        stop() {
            if (this.started)
                return (
                    (this.started = !1),
                    document.removeEventListener(
                        "selectionchange",
                        this.update,
                        !0,
                    )
                );
        }
        registerSelectionManager(t) {
            if (!this.selectionManagers.includes(t))
                return this.selectionManagers.push(t), this.start();
        }
        unregisterSelectionManager(t) {
            if (
                ((this.selectionManagers = this.selectionManagers.filter(
                    (e) => e !== t,
                )),
                this.selectionManagers.length === 0)
            )
                return this.stop();
        }
        notifySelectionManagersOfSelectionChange() {
            return this.selectionManagers.map((t) => t.selectionDidChange());
        }
        update() {
            this.notifySelectionManagersOfSelectionChange();
        }
        reset() {
            this.update();
        }
    },
    tt = new It(),
    Li = function () {
        let n = window.getSelection();
        if (n.rangeCount > 0) return n;
    },
    xt = function () {
        var n;
        let t = (n = Li()) === null || n === void 0 ? void 0 : n.getRangeAt(0);
        if (t && !Zi(t)) return t;
    },
    Di = function (n) {
        let t = window.getSelection();
        return t.removeAllRanges(), t.addRange(n), tt.update();
    },
    Zi = (n) => Qe(n.startContainer) || Qe(n.endContainer),
    Qe = (n) => !Object.getPrototypeOf(n),
    ft = (n) =>
        n
            .replace(new RegExp("".concat(te), "g"), "")
            .replace(new RegExp("".concat(U), "g"), " "),
    ze = new RegExp("[^\\S".concat(U, "]")),
    _e = (n) =>
        n
            .replace(new RegExp("".concat(ze.source), "g"), " ")
            .replace(/\ {2,}/g, " "),
    ti = function (n, t) {
        if (n.isEqualTo(t)) return ["", ""];
        let e = pe(n, t),
            { length: i } = e.utf16String,
            r;
        if (i) {
            let { offset: o } = e,
                s = n.codepoints.slice(0, o).concat(n.codepoints.slice(o + i));
            r = pe(t, Z.fromCodepoints(s));
        } else r = pe(t, n);
        return [e.utf16String.toString(), r.utf16String.toString()];
    },
    pe = function (n, t) {
        let e = 0,
            i = n.length,
            r = t.length;
        for (; e < i && n.charAt(e).isEqualTo(t.charAt(e)); ) e++;
        for (; i > e + 1 && n.charAt(i - 1).isEqualTo(t.charAt(r - 1)); )
            i--, r--;
        return { utf16String: n.slice(e, i), offset: e };
    },
    C = class extends O {
        static fromCommonAttributesOfObjects() {
            let t =
                arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : [];
            if (!t.length) return new this();
            let e = pt(t[0]),
                i = e.getKeys();
            return (
                t.slice(1).forEach((r) => {
                    (i = e.getKeysCommonToHash(pt(r))), (e = e.slice(i));
                }),
                e
            );
        }
        static box(t) {
            return pt(t);
        }
        constructor() {
            let t =
                arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {};
            super(...arguments), (this.values = Bt(t));
        }
        add(t, e) {
            return this.merge(Qi(t, e));
        }
        remove(t) {
            return new C(Bt(this.values, t));
        }
        get(t) {
            return this.values[t];
        }
        has(t) {
            return t in this.values;
        }
        merge(t) {
            return new C(tn(this.values, en(t)));
        }
        slice(t) {
            let e = {};
            return (
                Array.from(t).forEach((i) => {
                    this.has(i) && (e[i] = this.values[i]);
                }),
                new C(e)
            );
        }
        getKeys() {
            return Object.keys(this.values);
        }
        getKeysCommonToHash(t) {
            return (
                (t = pt(t)),
                this.getKeys().filter((e) => this.values[e] === t.values[e])
            );
        }
        isEqualTo(t) {
            return Q(this.toArray(), pt(t).toArray());
        }
        isEmpty() {
            return this.getKeys().length === 0;
        }
        toArray() {
            if (!this.array) {
                let t = [];
                for (let e in this.values) {
                    let i = this.values[e];
                    t.push(t.push(e, i));
                }
                this.array = t.slice(0);
            }
            return this.array;
        }
        toObject() {
            return Bt(this.values);
        }
        toJSON() {
            return this.toObject();
        }
        contentsForInspection() {
            return { values: JSON.stringify(this.values) };
        }
    },
    Qi = function (n, t) {
        let e = {};
        return (e[n] = t), e;
    },
    tn = function (n, t) {
        let e = Bt(n);
        for (let i in t) {
            let r = t[i];
            e[i] = r;
        }
        return e;
    },
    Bt = function (n, t) {
        let e = {};
        return (
            Object.keys(n)
                .sort()
                .forEach((i) => {
                    i !== t && (e[i] = n[i]);
                }),
            e
        );
    },
    pt = function (n) {
        return n instanceof C ? n : new C(n);
    },
    en = function (n) {
        return n instanceof C ? n.values : n;
    },
    yt = class {
        static groupObjects() {
            let t,
                e =
                    arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : [],
                { depth: i, asTree: r } =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : {};
            r && i == null && (i = 0);
            let o = [];
            return (
                Array.from(e).forEach((s) => {
                    var a;
                    if (t) {
                        var c, l, u;
                        if (
                            (c = s.canBeGrouped) !== null &&
                            c !== void 0 &&
                            c.call(s, i) &&
                            (l = (u = t[t.length - 1]).canBeGroupedWith) !==
                                null &&
                            l !== void 0 &&
                            l.call(u, s, i)
                        )
                            return void t.push(s);
                        o.push(new this(t, { depth: i, asTree: r })),
                            (t = null);
                    }
                    (a = s.canBeGrouped) !== null &&
                    a !== void 0 &&
                    a.call(s, i)
                        ? (t = [s])
                        : o.push(s);
                }),
                t && o.push(new this(t, { depth: i, asTree: r })),
                o
            );
        }
        constructor() {
            let t =
                    arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : [],
                { depth: e, asTree: i } =
                    arguments.length > 1 ? arguments[1] : void 0;
            (this.objects = t),
                i &&
                    ((this.depth = e),
                    (this.objects = this.constructor.groupObjects(
                        this.objects,
                        { asTree: i, depth: this.depth + 1 },
                    )));
        }
        getObjects() {
            return this.objects;
        }
        getDepth() {
            return this.depth;
        }
        getCacheKey() {
            let t = ["objectGroup"];
            return (
                Array.from(this.getObjects()).forEach((e) => {
                    t.push(e.getCacheKey());
                }),
                t.join("/")
            );
        }
    },
    Te = class extends b {
        constructor() {
            let t =
                arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : [];
            super(...arguments),
                (this.objects = {}),
                Array.from(t).forEach((e) => {
                    let i = JSON.stringify(e);
                    this.objects[i] == null && (this.objects[i] = e);
                });
        }
        find(t) {
            let e = JSON.stringify(t);
            return this.objects[e];
        }
    },
    Be = class {
        constructor(t) {
            this.reset(t);
        }
        add(t) {
            let e = ei(t);
            this.elements[e] = t;
        }
        remove(t) {
            let e = ei(t),
                i = this.elements[e];
            if (i) return delete this.elements[e], i;
        }
        reset() {
            let t =
                arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : [];
            return (
                (this.elements = {}),
                Array.from(t).forEach((e) => {
                    this.add(e);
                }),
                t
            );
        }
    },
    ei = (n) => n.dataset.trixStoreKey,
    at = class extends b {
        isPerforming() {
            return this.performing === !0;
        }
        hasPerformed() {
            return this.performed === !0;
        }
        hasSucceeded() {
            return this.performed && this.succeeded;
        }
        hasFailed() {
            return this.performed && !this.succeeded;
        }
        getPromise() {
            return (
                this.promise ||
                    (this.promise = new Promise(
                        (t, e) => (
                            (this.performing = !0),
                            this.perform((i, r) => {
                                (this.succeeded = i),
                                    (this.performing = !1),
                                    (this.performed = !0),
                                    this.succeeded ? t(r) : e(r);
                            })
                        ),
                    )),
                this.promise
            );
        }
        perform(t) {
            return t(!1);
        }
        release() {
            var t, e;
            (t = this.promise) === null ||
                t === void 0 ||
                (e = t.cancel) === null ||
                e === void 0 ||
                e.call(t),
                (this.promise = null),
                (this.performing = null),
                (this.performed = null),
                (this.succeeded = null);
        }
    };
at.proxyMethod("getPromise().then"), at.proxyMethod("getPromise().catch");
var M = class extends b {
        constructor(t) {
            let e =
                arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {};
            super(...arguments),
                (this.object = t),
                (this.options = e),
                (this.childViews = []),
                (this.rootView = this);
        }
        getNodes() {
            return (
                this.nodes || (this.nodes = this.createNodes()),
                this.nodes.map((t) => t.cloneNode(!0))
            );
        }
        invalidate() {
            var t;
            return (
                (this.nodes = null),
                (this.childViews = []),
                (t = this.parentView) === null || t === void 0
                    ? void 0
                    : t.invalidate()
            );
        }
        invalidateViewForObject(t) {
            var e;
            return (e = this.findViewForObject(t)) === null || e === void 0
                ? void 0
                : e.invalidate();
        }
        findOrCreateCachedChildView(t, e, i) {
            let r = this.getCachedViewForObject(e);
            return (
                r
                    ? this.recordChildView(r)
                    : ((r = this.createChildView(...arguments)),
                      this.cacheViewForObject(r, e)),
                r
            );
        }
        createChildView(t, e) {
            let i =
                arguments.length > 2 && arguments[2] !== void 0
                    ? arguments[2]
                    : {};
            e instanceof yt && ((i.viewClass = t), (t = Fe));
            let r = new t(e, i);
            return this.recordChildView(r);
        }
        recordChildView(t) {
            return (
                (t.parentView = this),
                (t.rootView = this.rootView),
                this.childViews.push(t),
                t
            );
        }
        getAllChildViews() {
            let t = [];
            return (
                this.childViews.forEach((e) => {
                    t.push(e), (t = t.concat(e.getAllChildViews()));
                }),
                t
            );
        }
        findElement() {
            return this.findElementForObject(this.object);
        }
        findElementForObject(t) {
            let e = t?.id;
            if (e)
                return this.rootView.element.querySelector(
                    "[data-trix-id='".concat(e, "']"),
                );
        }
        findViewForObject(t) {
            for (let e of this.getAllChildViews()) if (e.object === t) return e;
        }
        getViewCache() {
            return this.rootView !== this
                ? this.rootView.getViewCache()
                : this.isViewCachingEnabled()
                  ? (this.viewCache || (this.viewCache = {}), this.viewCache)
                  : void 0;
        }
        isViewCachingEnabled() {
            return this.shouldCacheViews !== !1;
        }
        enableViewCaching() {
            this.shouldCacheViews = !0;
        }
        disableViewCaching() {
            this.shouldCacheViews = !1;
        }
        getCachedViewForObject(t) {
            var e;
            return (e = this.getViewCache()) === null || e === void 0
                ? void 0
                : e[t.getCacheKey()];
        }
        cacheViewForObject(t, e) {
            let i = this.getViewCache();
            i && (i[e.getCacheKey()] = t);
        }
        garbageCollectCachedViews() {
            let t = this.getViewCache();
            if (t) {
                let e = this.getAllChildViews()
                    .concat(this)
                    .map((i) => i.object.getCacheKey());
                for (let i in t) e.includes(i) || delete t[i];
            }
        }
    },
    Fe = class extends M {
        constructor() {
            super(...arguments),
                (this.objectGroup = this.object),
                (this.viewClass = this.options.viewClass),
                delete this.options.viewClass;
        }
        getChildViews() {
            return (
                this.childViews.length ||
                    Array.from(this.objectGroup.getObjects()).forEach((t) => {
                        this.findOrCreateCachedChildView(
                            this.viewClass,
                            t,
                            this.options,
                        );
                    }),
                this.childViews
            );
        }
        createNodes() {
            let t = this.createContainerElement();
            return (
                this.getChildViews().forEach((e) => {
                    Array.from(e.getNodes()).forEach((i) => {
                        t.appendChild(i);
                    });
                }),
                [t]
            );
        }
        createContainerElement() {
            let t =
                arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : this.objectGroup.getDepth();
            return this.getChildViews()[0].createContainerElement(t);
        }
    },
    { css: W } = Lt,
    Ct = class extends M {
        constructor() {
            super(...arguments),
                (this.attachment = this.object),
                (this.attachment.uploadProgressDelegate = this),
                (this.attachmentPiece = this.options.piece);
        }
        createContentNodes() {
            return [];
        }
        createNodes() {
            let t,
                e = (t = d({
                    tagName: "figure",
                    className: this.getClassName(),
                    data: this.getData(),
                    editable: !1,
                })),
                i = this.getHref();
            return (
                i &&
                    ((t = d({
                        tagName: "a",
                        editable: !1,
                        attributes: { href: i, tabindex: -1 },
                    })),
                    e.appendChild(t)),
                this.attachment.hasContent()
                    ? (t.innerHTML = this.attachment.getContent())
                    : this.createContentNodes().forEach((r) => {
                          t.appendChild(r);
                      }),
                t.appendChild(this.createCaptionElement()),
                this.attachment.isPending() &&
                    ((this.progressElement = d({
                        tagName: "progress",
                        attributes: {
                            class: W.attachmentProgress,
                            value: this.attachment.getUploadProgress(),
                            max: 100,
                        },
                        data: {
                            trixMutable: !0,
                            trixStoreKey: [
                                "progressElement",
                                this.attachment.id,
                            ].join("/"),
                        },
                    })),
                    e.appendChild(this.progressElement)),
                [ii("left"), e, ii("right")]
            );
        }
        createCaptionElement() {
            let t = d({
                    tagName: "figcaption",
                    className: W.attachmentCaption,
                }),
                e = this.attachmentPiece.getCaption();
            if (e)
                t.classList.add("".concat(W.attachmentCaption, "--edited")),
                    (t.textContent = e);
            else {
                let i,
                    r,
                    o = this.getCaptionConfig();
                if (
                    (o.name && (i = this.attachment.getFilename()),
                    o.size && (r = this.attachment.getFormattedFilesize()),
                    i)
                ) {
                    let s = d({
                        tagName: "span",
                        className: W.attachmentName,
                        textContent: i,
                    });
                    t.appendChild(s);
                }
                if (r) {
                    i && t.appendChild(document.createTextNode(" "));
                    let s = d({
                        tagName: "span",
                        className: W.attachmentSize,
                        textContent: r,
                    });
                    t.appendChild(s);
                }
            }
            return t;
        }
        getClassName() {
            let t = [
                    W.attachment,
                    ""
                        .concat(W.attachment, "--")
                        .concat(this.attachment.getType()),
                ],
                e = this.attachment.getExtension();
            return (
                e && t.push("".concat(W.attachment, "--").concat(e)),
                t.join(" ")
            );
        }
        getData() {
            let t = {
                    trixAttachment: JSON.stringify(this.attachment),
                    trixContentType: this.attachment.getContentType(),
                    trixId: this.attachment.id,
                },
                { attributes: e } = this.attachmentPiece;
            return (
                e.isEmpty() || (t.trixAttributes = JSON.stringify(e)),
                this.attachment.isPending() && (t.trixSerialize = !1),
                t
            );
        }
        getHref() {
            if (!nn(this.attachment.getContent(), "a"))
                return this.attachment.getHref();
        }
        getCaptionConfig() {
            var t;
            let e = this.attachment.getType(),
                i = Si(
                    (t = je[e]) === null || t === void 0 ? void 0 : t.caption,
                );
            return e === "file" && (i.name = !0), i;
        }
        findProgressElement() {
            var t;
            return (t = this.findElement()) === null || t === void 0
                ? void 0
                : t.querySelector("progress");
        }
        attachmentDidChangeUploadProgress() {
            let t = this.attachment.getUploadProgress(),
                e = this.findProgressElement();
            e && (e.value = t);
        }
    },
    ii = (n) =>
        d({
            tagName: "span",
            textContent: te,
            data: { trixCursorTarget: n, trixSerialize: !1 },
        }),
    nn = function (n, t) {
        let e = d("div");
        return (e.innerHTML = n || ""), e.querySelector(t);
    },
    Nt = class extends Ct {
        constructor() {
            super(...arguments), (this.attachment.previewDelegate = this);
        }
        createContentNodes() {
            return (
                (this.image = d({
                    tagName: "img",
                    attributes: { src: "" },
                    data: { trixMutable: !0 },
                })),
                this.refresh(this.image),
                [this.image]
            );
        }
        createCaptionElement() {
            let t = super.createCaptionElement(...arguments);
            return (
                t.textContent ||
                    t.setAttribute(
                        "data-trix-placeholder",
                        h.captionPlaceholder,
                    ),
                t
            );
        }
        refresh(t) {
            var e;
            if (
                (t ||
                    (t =
                        (e = this.findElement()) === null || e === void 0
                            ? void 0
                            : e.querySelector("img")),
                t)
            )
                return this.updateAttributesForImage(t);
        }
        updateAttributesForImage(t) {
            let e = this.attachment.getURL(),
                i = this.attachment.getPreviewURL();
            if (((t.src = i || e), i === e))
                t.removeAttribute("data-trix-serialized-attributes");
            else {
                let a = JSON.stringify({ src: e });
                t.setAttribute("data-trix-serialized-attributes", a);
            }
            let r = this.attachment.getWidth(),
                o = this.attachment.getHeight();
            r != null && (t.width = r), o != null && (t.height = o);
            let s = [
                "imageElement",
                this.attachment.id,
                t.src,
                t.width,
                t.height,
            ].join("/");
            t.dataset.trixStoreKey = s;
        }
        attachmentDidChangeAttributes() {
            return this.refresh(this.image), this.refresh();
        }
    },
    Ot = class extends M {
        constructor() {
            super(...arguments),
                (this.piece = this.object),
                (this.attributes = this.piece.getAttributes()),
                (this.textConfig = this.options.textConfig),
                (this.context = this.options.context),
                this.piece.attachment
                    ? (this.attachment = this.piece.attachment)
                    : (this.string = this.piece.toString());
        }
        createNodes() {
            let t = this.attachment
                    ? this.createAttachmentNodes()
                    : this.createStringNodes(),
                e = this.createElement();
            if (e) {
                let i = (function (r) {
                    for (
                        ;
                        (o = r) !== null && o !== void 0 && o.firstElementChild;

                    ) {
                        var o;
                        r = r.firstElementChild;
                    }
                    return r;
                })(e);
                Array.from(t).forEach((r) => {
                    i.appendChild(r);
                }),
                    (t = [e]);
            }
            return t;
        }
        createAttachmentNodes() {
            let t = this.attachment.isPreviewable() ? Nt : Ct;
            return this.createChildView(t, this.piece.attachment, {
                piece: this.piece,
            }).getNodes();
        }
        createStringNodes() {
            var t;
            if ((t = this.textConfig) !== null && t !== void 0 && t.plaintext)
                return [document.createTextNode(this.string)];
            {
                let e = [],
                    i = this.string.split(`
`);
                for (let r = 0; r < i.length; r++) {
                    let o = i[r];
                    if (r > 0) {
                        let s = d("br");
                        e.push(s);
                    }
                    if (o.length) {
                        let s = document.createTextNode(this.preserveSpaces(o));
                        e.push(s);
                    }
                }
                return e;
            }
        }
        createElement() {
            let t,
                e,
                i,
                r = {};
            for (e in this.attributes) {
                i = this.attributes[e];
                let s = De(e);
                if (s) {
                    if (s.tagName) {
                        var o;
                        let a = d(s.tagName);
                        o ? (o.appendChild(a), (o = a)) : (t = o = a);
                    }
                    if ((s.styleProperty && (r[s.styleProperty] = i), s.style))
                        for (e in s.style) (i = s.style[e]), (r[e] = i);
                }
            }
            if (Object.keys(r).length)
                for (e in (t || (t = d("span")), r))
                    (i = r[e]), (t.style[e] = i);
            return t;
        }
        createContainerElement() {
            for (let t in this.attributes) {
                let e = this.attributes[t],
                    i = De(t);
                if (i && i.groupTagName) {
                    let r = {};
                    return (r[t] = e), d(i.groupTagName, r);
                }
            }
        }
        preserveSpaces(t) {
            return (
                this.context.isLast && (t = t.replace(/\ $/, U)),
                (t = t
                    .replace(/(\S)\ {3}(\S)/g, "$1 ".concat(U, " $2"))
                    .replace(/\ {2}/g, "".concat(U, " "))
                    .replace(/\ {2}/g, " ".concat(U))),
                (this.context.isFirst || this.context.followsWhitespace) &&
                    (t = t.replace(/^\ /, U)),
                t
            );
        }
    },
    Mt = class extends M {
        constructor() {
            super(...arguments),
                (this.text = this.object),
                (this.textConfig = this.options.textConfig);
        }
        createNodes() {
            let t = [],
                e = yt.groupObjects(this.getPieces()),
                i = e.length - 1;
            for (let o = 0; o < e.length; o++) {
                let s = e[o],
                    a = {};
                o === 0 && (a.isFirst = !0),
                    o === i && (a.isLast = !0),
                    rn(r) && (a.followsWhitespace = !0);
                let c = this.findOrCreateCachedChildView(Ot, s, {
                    textConfig: this.textConfig,
                    context: a,
                });
                t.push(...Array.from(c.getNodes() || []));
                var r = s;
            }
            return t;
        }
        getPieces() {
            return Array.from(this.text.getPieces()).filter(
                (t) => !t.hasAttribute("blockBreak"),
            );
        }
    },
    rn = (n) => /\s$/.test(n?.toString()),
    { css: ni } = Lt,
    jt = class extends M {
        constructor() {
            super(...arguments),
                (this.block = this.object),
                (this.attributes = this.block.getAttributes());
        }
        createNodes() {
            let t = [document.createComment("block")];
            if (this.block.isEmpty()) t.push(d("br"));
            else {
                var e;
                let i =
                        (e = v(this.block.getLastAttribute())) === null ||
                        e === void 0
                            ? void 0
                            : e.text,
                    r = this.findOrCreateCachedChildView(Mt, this.block.text, {
                        textConfig: i,
                    });
                t.push(...Array.from(r.getNodes() || [])),
                    this.shouldAddExtraNewlineElement() && t.push(d("br"));
            }
            if (this.attributes.length) return t;
            {
                let i,
                    { tagName: r } = y.default;
                this.block.isRTL() && (i = { dir: "rtl" });
                let o = d({ tagName: r, attributes: i });
                return t.forEach((s) => o.appendChild(s)), [o];
            }
        }
        createContainerElement(t) {
            let e = {},
                i,
                r = this.attributes[t],
                { tagName: o, htmlAttributes: s = [] } = v(r);
            if (
                (t === 0 &&
                    this.block.isRTL() &&
                    Object.assign(e, { dir: "rtl" }),
                r === "attachmentGallery")
            ) {
                let a = this.block.getBlockBreakPosition();
                i = ""
                    .concat(ni.attachmentGallery, " ")
                    .concat(ni.attachmentGallery, "--")
                    .concat(a);
            }
            return (
                Object.entries(this.block.htmlAttributes).forEach((a) => {
                    let [c, l] = a;
                    s.includes(c) && (e[c] = l);
                }),
                d({ tagName: o, className: i, attributes: e })
            );
        }
        shouldAddExtraNewlineElement() {
            return /\n\n$/.test(this.block.toString());
        }
    },
    lt = class extends M {
        static render(t) {
            let e = d("div"),
                i = new this(t, { element: e });
            return i.render(), i.sync(), e;
        }
        constructor() {
            super(...arguments),
                (this.element = this.options.element),
                (this.elementStore = new Be()),
                this.setDocument(this.object);
        }
        setDocument(t) {
            t.isEqualTo(this.document) || (this.document = this.object = t);
        }
        render() {
            if (
                ((this.childViews = []),
                (this.shadowElement = d("div")),
                !this.document.isEmpty())
            ) {
                let t = yt.groupObjects(this.document.getBlocks(), {
                    asTree: !0,
                });
                Array.from(t).forEach((e) => {
                    let i = this.findOrCreateCachedChildView(jt, e);
                    Array.from(i.getNodes()).map((r) =>
                        this.shadowElement.appendChild(r),
                    );
                });
            }
        }
        isSynced() {
            return on(this.shadowElement, this.element);
        }
        sync() {
            let t = this.createDocumentFragmentForSync();
            for (; this.element.lastChild; )
                this.element.removeChild(this.element.lastChild);
            return this.element.appendChild(t), this.didSync();
        }
        didSync() {
            return (
                this.elementStore.reset(ri(this.element)),
                He(() => this.garbageCollectCachedViews())
            );
        }
        createDocumentFragmentForSync() {
            let t = document.createDocumentFragment();
            return (
                Array.from(this.shadowElement.childNodes).forEach((e) => {
                    t.appendChild(e.cloneNode(!0));
                }),
                Array.from(ri(t)).forEach((e) => {
                    let i = this.elementStore.remove(e);
                    i && e.parentNode.replaceChild(i, e);
                }),
                t
            );
        }
    },
    ri = (n) => n.querySelectorAll("[data-trix-store-key]"),
    on = (n, t) => oi(n.innerHTML) === oi(t.innerHTML),
    oi = (n) => n.replace(/&nbsp;/g, " ");
function wt(n) {
    var t, e;
    function i(o, s) {
        try {
            var a = n[o](s),
                c = a.value,
                l = c instanceof sn;
            Promise.resolve(l ? c.v : c).then(
                function (u) {
                    if (l) {
                        var g = o === "return" ? "return" : "next";
                        if (!c.k || u.done) return i(g, u);
                        u = n[g](u).value;
                    }
                    r(a.done ? "return" : "normal", u);
                },
                function (u) {
                    i("throw", u);
                },
            );
        } catch (u) {
            r("throw", u);
        }
    }
    function r(o, s) {
        switch (o) {
            case "return":
                t.resolve({ value: s, done: !0 });
                break;
            case "throw":
                t.reject(s);
                break;
            default:
                t.resolve({ value: s, done: !1 });
        }
        (t = t.next) ? i(t.key, t.arg) : (e = null);
    }
    (this._invoke = function (o, s) {
        return new Promise(function (a, c) {
            var l = { key: o, arg: s, resolve: a, reject: c, next: null };
            e ? (e = e.next = l) : ((t = e = l), i(o, s));
        });
    }),
        typeof n.return != "function" && (this.return = void 0);
}
function sn(n, t) {
    (this.v = n), (this.k = t);
}
function E(n, t, e) {
    return (
        (t = an(t)) in n
            ? Object.defineProperty(n, t, {
                  value: e,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (n[t] = e),
        n
    );
}
function an(n) {
    var t = (function (e, i) {
        if (typeof e != "object" || e === null) return e;
        var r = e[Symbol.toPrimitive];
        if (r !== void 0) {
            var o = r.call(e, i || "default");
            if (typeof o != "object") return o;
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (i === "string" ? String : Number)(e);
    })(n, "string");
    return typeof t == "symbol" ? t : String(t);
}
(wt.prototype[
    (typeof Symbol == "function" && Symbol.asyncIterator) || "@@asyncIterator"
] = function () {
    return this;
}),
    (wt.prototype.next = function (n) {
        return this._invoke("next", n);
    }),
    (wt.prototype.throw = function (n) {
        return this._invoke("throw", n);
    }),
    (wt.prototype.return = function (n) {
        return this._invoke("return", n);
    });
var j = class extends O {
    static registerType(t, e) {
        (e.type = t), (this.types[t] = e);
    }
    static fromJSON(t) {
        let e = this.types[t.type];
        if (e) return e.fromJSON(t);
    }
    constructor(t) {
        let e =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        super(...arguments), (this.attributes = C.box(e));
    }
    copyWithAttributes(t) {
        return new this.constructor(this.getValue(), t);
    }
    copyWithAdditionalAttributes(t) {
        return this.copyWithAttributes(this.attributes.merge(t));
    }
    copyWithoutAttribute(t) {
        return this.copyWithAttributes(this.attributes.remove(t));
    }
    copy() {
        return this.copyWithAttributes(this.attributes);
    }
    getAttribute(t) {
        return this.attributes.get(t);
    }
    getAttributesHash() {
        return this.attributes;
    }
    getAttributes() {
        return this.attributes.toObject();
    }
    hasAttribute(t) {
        return this.attributes.has(t);
    }
    hasSameStringValueAsPiece(t) {
        return t && this.toString() === t.toString();
    }
    hasSameAttributesAsPiece(t) {
        return (
            t &&
            (this.attributes === t.attributes ||
                this.attributes.isEqualTo(t.attributes))
        );
    }
    isBlockBreak() {
        return !1;
    }
    isEqualTo(t) {
        return (
            super.isEqualTo(...arguments) ||
            (this.hasSameConstructorAs(t) &&
                this.hasSameStringValueAsPiece(t) &&
                this.hasSameAttributesAsPiece(t))
        );
    }
    isEmpty() {
        return this.length === 0;
    }
    isSerializable() {
        return !0;
    }
    toJSON() {
        return {
            type: this.constructor.type,
            attributes: this.getAttributes(),
        };
    }
    contentsForInspection() {
        return {
            type: this.constructor.type,
            attributes: this.attributes.inspect(),
        };
    }
    canBeGrouped() {
        return this.hasAttribute("href");
    }
    canBeGroupedWith(t) {
        return this.getAttribute("href") === t.getAttribute("href");
    }
    getLength() {
        return this.length;
    }
    canBeConsolidatedWith(t) {
        return !1;
    }
};
E(j, "types", {});
var Wt = class extends at {
        constructor(t) {
            super(...arguments), (this.url = t);
        }
        perform(t) {
            let e = new Image();
            (e.onload = () => (
                (e.width = this.width = e.naturalWidth),
                (e.height = this.height = e.naturalHeight),
                t(!0, e)
            )),
                (e.onerror = () => t(!1)),
                (e.src = this.url);
        }
    },
    H = class extends O {
        static attachmentForFile(t) {
            let e = new this(this.attributesForFile(t));
            return e.setFile(t), e;
        }
        static attributesForFile(t) {
            return new C({
                filename: t.name,
                filesize: t.size,
                contentType: t.type,
            });
        }
        static fromJSON(t) {
            return new this(t);
        }
        constructor() {
            let t =
                arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {};
            super(t),
                (this.releaseFile = this.releaseFile.bind(this)),
                (this.attributes = C.box(t)),
                this.didChangeAttributes();
        }
        getAttribute(t) {
            return this.attributes.get(t);
        }
        hasAttribute(t) {
            return this.attributes.has(t);
        }
        getAttributes() {
            return this.attributes.toObject();
        }
        setAttributes() {
            let t =
                    arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : {},
                e = this.attributes.merge(t);
            var i, r, o, s;
            if (!this.attributes.isEqualTo(e))
                return (
                    (this.attributes = e),
                    this.didChangeAttributes(),
                    (i = this.previewDelegate) === null ||
                        i === void 0 ||
                        (r = i.attachmentDidChangeAttributes) === null ||
                        r === void 0 ||
                        r.call(i, this),
                    (o = this.delegate) === null ||
                    o === void 0 ||
                    (s = o.attachmentDidChangeAttributes) === null ||
                    s === void 0
                        ? void 0
                        : s.call(o, this)
                );
        }
        didChangeAttributes() {
            if (this.isPreviewable()) return this.preloadURL();
        }
        isPending() {
            return this.file != null && !(this.getURL() || this.getHref());
        }
        isPreviewable() {
            return this.attributes.has("previewable")
                ? this.attributes.get("previewable")
                : H.previewablePattern.test(this.getContentType());
        }
        getType() {
            return this.hasContent()
                ? "content"
                : this.isPreviewable()
                  ? "preview"
                  : "file";
        }
        getURL() {
            return this.attributes.get("url");
        }
        getHref() {
            return this.attributes.get("href");
        }
        getFilename() {
            return this.attributes.get("filename") || "";
        }
        getFilesize() {
            return this.attributes.get("filesize");
        }
        getFormattedFilesize() {
            let t = this.attributes.get("filesize");
            return typeof t == "number" ? vi.formatter(t) : "";
        }
        getExtension() {
            var t;
            return (t = this.getFilename().match(/\.(\w+)$/)) === null ||
                t === void 0
                ? void 0
                : t[1].toLowerCase();
        }
        getContentType() {
            return this.attributes.get("contentType");
        }
        hasContent() {
            return this.attributes.has("content");
        }
        getContent() {
            return this.attributes.get("content");
        }
        getWidth() {
            return this.attributes.get("width");
        }
        getHeight() {
            return this.attributes.get("height");
        }
        getFile() {
            return this.file;
        }
        setFile(t) {
            if (((this.file = t), this.isPreviewable()))
                return this.preloadFile();
        }
        releaseFile() {
            this.releasePreloadedFile(), (this.file = null);
        }
        getUploadProgress() {
            return this.uploadProgress != null ? this.uploadProgress : 0;
        }
        setUploadProgress(t) {
            var e, i;
            if (this.uploadProgress !== t)
                return (
                    (this.uploadProgress = t),
                    (e = this.uploadProgressDelegate) === null ||
                    e === void 0 ||
                    (i = e.attachmentDidChangeUploadProgress) === null ||
                    i === void 0
                        ? void 0
                        : i.call(e, this)
                );
        }
        toJSON() {
            return this.getAttributes();
        }
        getCacheKey() {
            return [
                super.getCacheKey(...arguments),
                this.attributes.getCacheKey(),
                this.getPreviewURL(),
            ].join("/");
        }
        getPreviewURL() {
            return this.previewURL || this.preloadingURL;
        }
        setPreviewURL(t) {
            var e, i, r, o;
            if (t !== this.getPreviewURL())
                return (
                    (this.previewURL = t),
                    (e = this.previewDelegate) === null ||
                        e === void 0 ||
                        (i = e.attachmentDidChangeAttributes) === null ||
                        i === void 0 ||
                        i.call(e, this),
                    (r = this.delegate) === null ||
                    r === void 0 ||
                    (o = r.attachmentDidChangePreviewURL) === null ||
                    o === void 0
                        ? void 0
                        : o.call(r, this)
                );
        }
        preloadURL() {
            return this.preload(this.getURL(), this.releaseFile);
        }
        preloadFile() {
            if (this.file)
                return (
                    (this.fileObjectURL = URL.createObjectURL(this.file)),
                    this.preload(this.fileObjectURL)
                );
        }
        releasePreloadedFile() {
            this.fileObjectURL &&
                (URL.revokeObjectURL(this.fileObjectURL),
                (this.fileObjectURL = null));
        }
        preload(t, e) {
            if (t && t !== this.getPreviewURL())
                return (
                    (this.preloadingURL = t),
                    new Wt(t)
                        .then((i) => {
                            let { width: r, height: o } = i;
                            return (
                                (this.getWidth() && this.getHeight()) ||
                                    this.setAttributes({ width: r, height: o }),
                                (this.preloadingURL = null),
                                this.setPreviewURL(t),
                                e?.()
                            );
                        })
                        .catch(() => ((this.preloadingURL = null), e?.()))
                );
        }
    };
E(H, "previewablePattern", /^image(\/(gif|png|webp|jpe?g)|$)/);
var z = class extends j {
    static fromJSON(t) {
        return new this(H.fromJSON(t.attachment), t.attributes);
    }
    constructor(t) {
        super(...arguments),
            (this.attachment = t),
            (this.length = 1),
            this.ensureAttachmentExclusivelyHasAttribute("href"),
            this.attachment.hasContent() || this.removeProhibitedAttributes();
    }
    ensureAttachmentExclusivelyHasAttribute(t) {
        this.hasAttribute(t) &&
            (this.attachment.hasAttribute(t) ||
                this.attachment.setAttributes(this.attributes.slice([t])),
            (this.attributes = this.attributes.remove(t)));
    }
    removeProhibitedAttributes() {
        let t = this.attributes.slice(z.permittedAttributes);
        t.isEqualTo(this.attributes) || (this.attributes = t);
    }
    getValue() {
        return this.attachment;
    }
    isSerializable() {
        return !this.attachment.isPending();
    }
    getCaption() {
        return this.attributes.get("caption") || "";
    }
    isEqualTo(t) {
        var e;
        return (
            super.isEqualTo(t) &&
            this.attachment.id ===
                (t == null || (e = t.attachment) === null || e === void 0
                    ? void 0
                    : e.id)
        );
    }
    toString() {
        return "\uFFFC";
    }
    toJSON() {
        let t = super.toJSON(...arguments);
        return (t.attachment = this.attachment), t;
    }
    getCacheKey() {
        return [
            super.getCacheKey(...arguments),
            this.attachment.getCacheKey(),
        ].join("/");
    }
    toConsole() {
        return JSON.stringify(this.toString());
    }
};
E(z, "permittedAttributes", ["caption", "presentation"]),
    j.registerType("attachment", z);
var kt = class extends j {
    static fromJSON(t) {
        return new this(t.string, t.attributes);
    }
    constructor(t) {
        super(...arguments),
            (this.string = ((e) =>
                e.replace(
                    /\r\n?/g,
                    `
`,
                ))(t)),
            (this.length = this.string.length);
    }
    getValue() {
        return this.string;
    }
    toString() {
        return this.string.toString();
    }
    isBlockBreak() {
        return (
            this.toString() ===
                `
` && this.getAttribute("blockBreak") === !0
        );
    }
    toJSON() {
        let t = super.toJSON(...arguments);
        return (t.string = this.string), t;
    }
    canBeConsolidatedWith(t) {
        return (
            t &&
            this.hasSameConstructorAs(t) &&
            this.hasSameAttributesAsPiece(t)
        );
    }
    consolidateWith(t) {
        return new this.constructor(
            this.toString() + t.toString(),
            this.attributes,
        );
    }
    splitAtOffset(t) {
        let e, i;
        return (
            t === 0
                ? ((e = null), (i = this))
                : t === this.length
                  ? ((e = this), (i = null))
                  : ((e = new this.constructor(
                        this.string.slice(0, t),
                        this.attributes,
                    )),
                    (i = new this.constructor(
                        this.string.slice(t),
                        this.attributes,
                    ))),
            [e, i]
        );
    }
    toConsole() {
        let { string: t } = this;
        return (
            t.length > 15 && (t = t.slice(0, 14) + "\u2026"),
            JSON.stringify(t.toString())
        );
    }
};
j.registerType("string", kt);
var ct = class extends O {
        static box(t) {
            return t instanceof this ? t : new this(t);
        }
        constructor() {
            let t =
                arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : [];
            super(...arguments),
                (this.objects = t.slice(0)),
                (this.length = this.objects.length);
        }
        indexOf(t) {
            return this.objects.indexOf(t);
        }
        splice() {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                e[i] = arguments[i];
            return new this.constructor(qe(this.objects, ...e));
        }
        eachObject(t) {
            return this.objects.map((e, i) => t(e, i));
        }
        insertObjectAtIndex(t, e) {
            return this.splice(e, 0, t);
        }
        insertSplittableListAtIndex(t, e) {
            return this.splice(e, 0, ...t.objects);
        }
        insertSplittableListAtPosition(t, e) {
            let [i, r] = this.splitObjectAtPosition(e);
            return new this.constructor(i).insertSplittableListAtIndex(t, r);
        }
        editObjectAtIndex(t, e) {
            return this.replaceObjectAtIndex(e(this.objects[t]), t);
        }
        replaceObjectAtIndex(t, e) {
            return this.splice(e, 1, t);
        }
        removeObjectAtIndex(t) {
            return this.splice(t, 1);
        }
        getObjectAtIndex(t) {
            return this.objects[t];
        }
        getSplittableListInRange(t) {
            let [e, i, r] = this.splitObjectsAtRange(t);
            return new this.constructor(e.slice(i, r + 1));
        }
        selectSplittableList(t) {
            let e = this.objects.filter((i) => t(i));
            return new this.constructor(e);
        }
        removeObjectsInRange(t) {
            let [e, i, r] = this.splitObjectsAtRange(t);
            return new this.constructor(e).splice(i, r - i + 1);
        }
        transformObjectsInRange(t, e) {
            let [i, r, o] = this.splitObjectsAtRange(t),
                s = i.map((a, c) => (r <= c && c <= o ? e(a) : a));
            return new this.constructor(s);
        }
        splitObjectsAtRange(t) {
            let e,
                [i, r, o] = this.splitObjectAtPosition(cn(t));
            return (
                ([i, e] = new this.constructor(i).splitObjectAtPosition(
                    un(t) + o,
                )),
                [i, r, e - 1]
            );
        }
        getObjectAtPosition(t) {
            let { index: e } = this.findIndexAndOffsetAtPosition(t);
            return this.objects[e];
        }
        splitObjectAtPosition(t) {
            let e,
                i,
                { index: r, offset: o } = this.findIndexAndOffsetAtPosition(t),
                s = this.objects.slice(0);
            if (r != null)
                if (o === 0) (e = r), (i = 0);
                else {
                    let a = this.getObjectAtIndex(r),
                        [c, l] = a.splitAtOffset(o);
                    s.splice(r, 1, c, l), (e = r + 1), (i = c.getLength() - o);
                }
            else (e = s.length), (i = 0);
            return [s, e, i];
        }
        consolidate() {
            let t = [],
                e = this.objects[0];
            return (
                this.objects.slice(1).forEach((i) => {
                    var r, o;
                    (r = (o = e).canBeConsolidatedWith) !== null &&
                    r !== void 0 &&
                    r.call(o, i)
                        ? (e = e.consolidateWith(i))
                        : (t.push(e), (e = i));
                }),
                e && t.push(e),
                new this.constructor(t)
            );
        }
        consolidateFromIndexToIndex(t, e) {
            let i = this.objects.slice(0).slice(t, e + 1),
                r = new this.constructor(i).consolidate().toArray();
            return this.splice(t, i.length, ...r);
        }
        findIndexAndOffsetAtPosition(t) {
            let e,
                i = 0;
            for (e = 0; e < this.objects.length; e++) {
                let r = i + this.objects[e].getLength();
                if (i <= t && t < r) return { index: e, offset: t - i };
                i = r;
            }
            return { index: null, offset: null };
        }
        findPositionAtIndexAndOffset(t, e) {
            let i = 0;
            for (let r = 0; r < this.objects.length; r++) {
                let o = this.objects[r];
                if (r < t) i += o.getLength();
                else if (r === t) {
                    i += e;
                    break;
                }
            }
            return i;
        }
        getEndPosition() {
            return (
                this.endPosition == null &&
                    ((this.endPosition = 0),
                    this.objects.forEach(
                        (t) => (this.endPosition += t.getLength()),
                    )),
                this.endPosition
            );
        }
        toString() {
            return this.objects.join("");
        }
        toArray() {
            return this.objects.slice(0);
        }
        toJSON() {
            return this.toArray();
        }
        isEqualTo(t) {
            return (
                super.isEqualTo(...arguments) || ln(this.objects, t?.objects)
            );
        }
        contentsForInspection() {
            return {
                objects: "[".concat(
                    this.objects.map((t) => t.inspect()).join(", "),
                    "]",
                ),
            };
        }
    },
    ln = function (n) {
        let t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        if (n.length !== t.length) return !1;
        let e = !0;
        for (let i = 0; i < n.length; i++) {
            let r = n[i];
            e && !r.isEqualTo(t[i]) && (e = !1);
        }
        return e;
    },
    cn = (n) => n[0],
    un = (n) => n[1],
    R = class extends O {
        static textForAttachmentWithAttributes(t, e) {
            return new this([new z(t, e)]);
        }
        static textForStringWithAttributes(t, e) {
            return new this([new kt(t, e)]);
        }
        static fromJSON(t) {
            return new this(Array.from(t).map((e) => j.fromJSON(e)));
        }
        constructor() {
            let t =
                arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : [];
            super(...arguments);
            let e = t.filter((i) => !i.isEmpty());
            this.pieceList = new ct(e);
        }
        copy() {
            return this.copyWithPieceList(this.pieceList);
        }
        copyWithPieceList(t) {
            return new this.constructor(t.consolidate().toArray());
        }
        copyUsingObjectMap(t) {
            let e = this.getPieces().map((i) => t.find(i) || i);
            return new this.constructor(e);
        }
        appendText(t) {
            return this.insertTextAtPosition(t, this.getLength());
        }
        insertTextAtPosition(t, e) {
            return this.copyWithPieceList(
                this.pieceList.insertSplittableListAtPosition(t.pieceList, e),
            );
        }
        removeTextAtRange(t) {
            return this.copyWithPieceList(
                this.pieceList.removeObjectsInRange(t),
            );
        }
        replaceTextAtRange(t, e) {
            return this.removeTextAtRange(e).insertTextAtPosition(t, e[0]);
        }
        moveTextFromRangeToPosition(t, e) {
            if (t[0] <= e && e <= t[1]) return;
            let i = this.getTextAtRange(t),
                r = i.getLength();
            return (
                t[0] < e && (e -= r),
                this.removeTextAtRange(t).insertTextAtPosition(i, e)
            );
        }
        addAttributeAtRange(t, e, i) {
            let r = {};
            return (r[t] = e), this.addAttributesAtRange(r, i);
        }
        addAttributesAtRange(t, e) {
            return this.copyWithPieceList(
                this.pieceList.transformObjectsInRange(e, (i) =>
                    i.copyWithAdditionalAttributes(t),
                ),
            );
        }
        removeAttributeAtRange(t, e) {
            return this.copyWithPieceList(
                this.pieceList.transformObjectsInRange(e, (i) =>
                    i.copyWithoutAttribute(t),
                ),
            );
        }
        setAttributesAtRange(t, e) {
            return this.copyWithPieceList(
                this.pieceList.transformObjectsInRange(e, (i) =>
                    i.copyWithAttributes(t),
                ),
            );
        }
        getAttributesAtPosition(t) {
            var e;
            return (
                ((e = this.pieceList.getObjectAtPosition(t)) === null ||
                e === void 0
                    ? void 0
                    : e.getAttributes()) || {}
            );
        }
        getCommonAttributes() {
            let t = Array.from(this.pieceList.toArray()).map((e) =>
                e.getAttributes(),
            );
            return C.fromCommonAttributesOfObjects(t).toObject();
        }
        getCommonAttributesAtRange(t) {
            return this.getTextAtRange(t).getCommonAttributes() || {};
        }
        getExpandedRangeForAttributeAtOffset(t, e) {
            let i,
                r = (i = e),
                o = this.getLength();
            for (; r > 0 && this.getCommonAttributesAtRange([r - 1, i])[t]; )
                r--;
            for (; i < o && this.getCommonAttributesAtRange([e, i + 1])[t]; )
                i++;
            return [r, i];
        }
        getTextAtRange(t) {
            return this.copyWithPieceList(
                this.pieceList.getSplittableListInRange(t),
            );
        }
        getStringAtRange(t) {
            return this.pieceList.getSplittableListInRange(t).toString();
        }
        getStringAtPosition(t) {
            return this.getStringAtRange([t, t + 1]);
        }
        startsWithString(t) {
            return this.getStringAtRange([0, t.length]) === t;
        }
        endsWithString(t) {
            let e = this.getLength();
            return this.getStringAtRange([e - t.length, e]) === t;
        }
        getAttachmentPieces() {
            return this.pieceList.toArray().filter((t) => !!t.attachment);
        }
        getAttachments() {
            return this.getAttachmentPieces().map((t) => t.attachment);
        }
        getAttachmentAndPositionById(t) {
            let e = 0;
            for (let r of this.pieceList.toArray()) {
                var i;
                if (
                    ((i = r.attachment) === null || i === void 0
                        ? void 0
                        : i.id) === t
                )
                    return { attachment: r.attachment, position: e };
                e += r.length;
            }
            return { attachment: null, position: null };
        }
        getAttachmentById(t) {
            let { attachment: e } = this.getAttachmentAndPositionById(t);
            return e;
        }
        getRangeOfAttachment(t) {
            let e = this.getAttachmentAndPositionById(t.id),
                i = e.position;
            if ((t = e.attachment)) return [i, i + 1];
        }
        updateAttributesForAttachment(t, e) {
            let i = this.getRangeOfAttachment(e);
            return i ? this.addAttributesAtRange(t, i) : this;
        }
        getLength() {
            return this.pieceList.getEndPosition();
        }
        isEmpty() {
            return this.getLength() === 0;
        }
        isEqualTo(t) {
            var e;
            return (
                super.isEqualTo(t) ||
                (t == null || (e = t.pieceList) === null || e === void 0
                    ? void 0
                    : e.isEqualTo(this.pieceList))
            );
        }
        isBlockBreak() {
            return (
                this.getLength() === 1 &&
                this.pieceList.getObjectAtIndex(0).isBlockBreak()
            );
        }
        eachPiece(t) {
            return this.pieceList.eachObject(t);
        }
        getPieces() {
            return this.pieceList.toArray();
        }
        getPieceAtPosition(t) {
            return this.pieceList.getObjectAtPosition(t);
        }
        contentsForInspection() {
            return { pieceList: this.pieceList.inspect() };
        }
        toSerializableText() {
            let t = this.pieceList.selectSplittableList((e) =>
                e.isSerializable(),
            );
            return this.copyWithPieceList(t);
        }
        toString() {
            return this.pieceList.toString();
        }
        toJSON() {
            return this.pieceList.toJSON();
        }
        toConsole() {
            return JSON.stringify(
                this.pieceList.toArray().map((t) => JSON.parse(t.toConsole())),
            );
        }
        getDirection() {
            return Ki(this.toString());
        }
        isRTL() {
            return this.getDirection() === "rtl";
        }
    },
    S = class extends O {
        static fromJSON(t) {
            return new this(R.fromJSON(t.text), t.attributes, t.htmlAttributes);
        }
        constructor(t, e, i) {
            super(...arguments),
                (this.text = hn(t || new R())),
                (this.attributes = e || []),
                (this.htmlAttributes = i || {});
        }
        isEmpty() {
            return this.text.isBlockBreak();
        }
        isEqualTo(t) {
            return (
                !!super.isEqualTo(t) ||
                (this.text.isEqualTo(t?.text) &&
                    Q(this.attributes, t?.attributes) &&
                    ht(this.htmlAttributes, t?.htmlAttributes))
            );
        }
        copyWithText(t) {
            return new S(t, this.attributes, this.htmlAttributes);
        }
        copyWithoutText() {
            return this.copyWithText(null);
        }
        copyWithAttributes(t) {
            return new S(this.text, t, this.htmlAttributes);
        }
        copyWithoutAttributes() {
            return this.copyWithAttributes(null);
        }
        copyUsingObjectMap(t) {
            let e = t.find(this.text);
            return e
                ? this.copyWithText(e)
                : this.copyWithText(this.text.copyUsingObjectMap(t));
        }
        addAttribute(t) {
            let e = this.attributes.concat(si(t));
            return this.copyWithAttributes(e);
        }
        addHTMLAttribute(t, e) {
            let i = Object.assign({}, this.htmlAttributes, { [t]: e });
            return new S(this.text, this.attributes, i);
        }
        removeAttribute(t) {
            let { listAttribute: e } = v(t),
                i = li(li(this.attributes, t), e);
            return this.copyWithAttributes(i);
        }
        removeLastAttribute() {
            return this.removeAttribute(this.getLastAttribute());
        }
        getLastAttribute() {
            return ai(this.attributes);
        }
        getAttributes() {
            return this.attributes.slice(0);
        }
        getAttributeLevel() {
            return this.attributes.length;
        }
        getAttributeAtLevel(t) {
            return this.attributes[t - 1];
        }
        hasAttribute(t) {
            return this.attributes.includes(t);
        }
        hasAttributes() {
            return this.getAttributeLevel() > 0;
        }
        getLastNestableAttribute() {
            return ai(this.getNestableAttributes());
        }
        getNestableAttributes() {
            return this.attributes.filter((t) => v(t).nestable);
        }
        getNestingLevel() {
            return this.getNestableAttributes().length;
        }
        decreaseNestingLevel() {
            let t = this.getLastNestableAttribute();
            return t ? this.removeAttribute(t) : this;
        }
        increaseNestingLevel() {
            let t = this.getLastNestableAttribute();
            if (t) {
                let e = this.attributes.lastIndexOf(t),
                    i = qe(this.attributes, e + 1, 0, ...si(t));
                return this.copyWithAttributes(i);
            }
            return this;
        }
        getListItemAttributes() {
            return this.attributes.filter((t) => v(t).listAttribute);
        }
        isListItem() {
            var t;
            return (t = v(this.getLastAttribute())) === null || t === void 0
                ? void 0
                : t.listAttribute;
        }
        isTerminalBlock() {
            var t;
            return (t = v(this.getLastAttribute())) === null || t === void 0
                ? void 0
                : t.terminal;
        }
        breaksOnReturn() {
            var t;
            return (t = v(this.getLastAttribute())) === null || t === void 0
                ? void 0
                : t.breakOnReturn;
        }
        findLineBreakInDirectionFromPosition(t, e) {
            let i = this.toString(),
                r;
            switch (t) {
                case "forward":
                    r = i.indexOf(
                        `
`,
                        e,
                    );
                    break;
                case "backward":
                    r = i.slice(0, e).lastIndexOf(`
`);
            }
            if (r !== -1) return r;
        }
        contentsForInspection() {
            return { text: this.text.inspect(), attributes: this.attributes };
        }
        toString() {
            return this.text.toString();
        }
        toJSON() {
            return {
                text: this.text,
                attributes: this.attributes,
                htmlAttributes: this.htmlAttributes,
            };
        }
        getDirection() {
            return this.text.getDirection();
        }
        isRTL() {
            return this.text.isRTL();
        }
        getLength() {
            return this.text.getLength();
        }
        canBeConsolidatedWith(t) {
            return (
                !this.hasAttributes() &&
                !t.hasAttributes() &&
                this.getDirection() === t.getDirection()
            );
        }
        consolidateWith(t) {
            let e = R.textForStringWithAttributes(`
`),
                i = this.getTextWithoutBlockBreak().appendText(e);
            return this.copyWithText(i.appendText(t.text));
        }
        splitAtOffset(t) {
            let e, i;
            return (
                t === 0
                    ? ((e = null), (i = this))
                    : t === this.getLength()
                      ? ((e = this), (i = null))
                      : ((e = this.copyWithText(
                            this.text.getTextAtRange([0, t]),
                        )),
                        (i = this.copyWithText(
                            this.text.getTextAtRange([t, this.getLength()]),
                        ))),
                [e, i]
            );
        }
        getBlockBreakPosition() {
            return this.text.getLength() - 1;
        }
        getTextWithoutBlockBreak() {
            return wi(this.text)
                ? this.text.getTextAtRange([0, this.getBlockBreakPosition()])
                : this.text.copy();
        }
        canBeGrouped(t) {
            return this.attributes[t];
        }
        canBeGroupedWith(t, e) {
            let i = t.getAttributes(),
                r = i[e],
                o = this.attributes[e];
            return (
                o === r &&
                !(
                    v(o).group === !1 &&
                    !(() => {
                        if (!Dt) {
                            Dt = [];
                            for (let s in y) {
                                let { listAttribute: a } = y[s];
                                a != null && Dt.push(a);
                            }
                        }
                        return Dt;
                    })().includes(i[e + 1])
                ) &&
                (this.getDirection() === t.getDirection() || t.isEmpty())
            );
        }
    },
    hn = function (n) {
        return (n = dn(n)), (n = mn(n));
    },
    dn = function (n) {
        let t = !1,
            e = n.getPieces(),
            i = e.slice(0, e.length - 1),
            r = e[e.length - 1];
        return r
            ? ((i = i.map((o) => (o.isBlockBreak() ? ((t = !0), pn(o)) : o))),
              t ? new R([...i, r]) : n)
            : n;
    },
    gn = R.textForStringWithAttributes(
        `
`,
        { blockBreak: !0 },
    ),
    mn = function (n) {
        return wi(n) ? n : n.appendText(gn);
    },
    wi = function (n) {
        let t = n.getLength();
        return t === 0 ? !1 : n.getTextAtRange([t - 1, t]).isBlockBreak();
    },
    pn = (n) => n.copyWithoutAttribute("blockBreak"),
    si = function (n) {
        let { listAttribute: t } = v(n);
        return t ? [t, n] : [n];
    },
    ai = (n) => n.slice(-1)[0],
    li = function (n, t) {
        let e = n.lastIndexOf(t);
        return e === -1 ? n : qe(n, e, 1);
    },
    k = class extends O {
        static fromJSON(t) {
            return new this(Array.from(t).map((e) => S.fromJSON(e)));
        }
        static fromString(t, e) {
            let i = R.textForStringWithAttributes(t, e);
            return new this([new S(i)]);
        }
        constructor() {
            let t =
                arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : [];
            super(...arguments),
                t.length === 0 && (t = [new S()]),
                (this.blockList = ct.box(t));
        }
        isEmpty() {
            let t = this.getBlockAtIndex(0);
            return (
                this.blockList.length === 1 && t.isEmpty() && !t.hasAttributes()
            );
        }
        copy() {
            let t = (arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : {}
            ).consolidateBlocks
                ? this.blockList.consolidate().toArray()
                : this.blockList.toArray();
            return new this.constructor(t);
        }
        copyUsingObjectsFromDocument(t) {
            let e = new Te(t.getObjects());
            return this.copyUsingObjectMap(e);
        }
        copyUsingObjectMap(t) {
            let e = this.getBlocks().map(
                (i) => t.find(i) || i.copyUsingObjectMap(t),
            );
            return new this.constructor(e);
        }
        copyWithBaseBlockAttributes() {
            let t =
                    arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : [],
                e = this.getBlocks().map((i) => {
                    let r = t.concat(i.getAttributes());
                    return i.copyWithAttributes(r);
                });
            return new this.constructor(e);
        }
        replaceBlock(t, e) {
            let i = this.blockList.indexOf(t);
            return i === -1
                ? this
                : new this.constructor(
                      this.blockList.replaceObjectAtIndex(e, i),
                  );
        }
        insertDocumentAtRange(t, e) {
            let { blockList: i } = t;
            e = m(e);
            let [r] = e,
                { index: o, offset: s } = this.locationFromPosition(r),
                a = this,
                c = this.getBlockAtPosition(r);
            return (
                N(e) && c.isEmpty() && !c.hasAttributes()
                    ? (a = new this.constructor(
                          a.blockList.removeObjectAtIndex(o),
                      ))
                    : c.getBlockBreakPosition() === s && r++,
                (a = a.removeTextAtRange(e)),
                new this.constructor(
                    a.blockList.insertSplittableListAtPosition(i, r),
                )
            );
        }
        mergeDocumentAtRange(t, e) {
            let i, r;
            e = m(e);
            let [o] = e,
                s = this.locationFromPosition(o),
                a = this.getBlockAtIndex(s.index).getAttributes(),
                c = t.getBaseBlockAttributes(),
                l = a.slice(-c.length);
            if (Q(c, l)) {
                let A = a.slice(0, -c.length);
                i = t.copyWithBaseBlockAttributes(A);
            } else
                i = t
                    .copy({ consolidateBlocks: !0 })
                    .copyWithBaseBlockAttributes(a);
            let u = i.getBlockCount(),
                g = i.getBlockAtIndex(0);
            if (Q(a, g.getAttributes())) {
                let A = g.getTextWithoutBlockBreak();
                if (((r = this.insertTextAtRange(A, e)), u > 1)) {
                    i = new this.constructor(i.getBlocks().slice(1));
                    let L = o + A.getLength();
                    r = r.insertDocumentAtRange(i, L);
                }
            } else r = this.insertDocumentAtRange(i, e);
            return r;
        }
        insertTextAtRange(t, e) {
            e = m(e);
            let [i] = e,
                { index: r, offset: o } = this.locationFromPosition(i),
                s = this.removeTextAtRange(e);
            return new this.constructor(
                s.blockList.editObjectAtIndex(r, (a) =>
                    a.copyWithText(a.text.insertTextAtPosition(t, o)),
                ),
            );
        }
        removeTextAtRange(t) {
            let e;
            t = m(t);
            let [i, r] = t;
            if (N(t)) return this;
            let [o, s] = Array.from(this.locationRangeFromRange(t)),
                a = o.index,
                c = o.offset,
                l = this.getBlockAtIndex(a),
                u = s.index,
                g = s.offset,
                A = this.getBlockAtIndex(u);
            if (
                r - i == 1 &&
                l.getBlockBreakPosition() === c &&
                A.getBlockBreakPosition() !== g &&
                A.text.getStringAtPosition(g) ===
                    `
`
            )
                e = this.blockList.editObjectAtIndex(u, (L) =>
                    L.copyWithText(L.text.removeTextAtRange([g, g + 1])),
                );
            else {
                let L,
                    dt = l.text.getTextAtRange([0, c]),
                    P = A.text.getTextAtRange([g, A.getLength()]),
                    it = dt.appendText(P);
                L =
                    a !== u &&
                    c === 0 &&
                    l.getAttributeLevel() >= A.getAttributeLevel()
                        ? A.copyWithText(it)
                        : l.copyWithText(it);
                let gt = u + 1 - a;
                e = this.blockList.splice(a, gt, L);
            }
            return new this.constructor(e);
        }
        moveTextFromRangeToPosition(t, e) {
            let i;
            t = m(t);
            let [r, o] = t;
            if (r <= e && e <= o) return this;
            let s = this.getDocumentAtRange(t),
                a = this.removeTextAtRange(t),
                c = r < e;
            c && (e -= s.getLength());
            let [l, ...u] = s.getBlocks();
            return (
                u.length === 0
                    ? ((i = l.getTextWithoutBlockBreak()), c && (e += 1))
                    : (i = l.text),
                (a = a.insertTextAtRange(i, e)),
                u.length === 0
                    ? a
                    : ((s = new this.constructor(u)),
                      (e += i.getLength()),
                      a.insertDocumentAtRange(s, e))
            );
        }
        addAttributeAtRange(t, e, i) {
            let { blockList: r } = this;
            return (
                this.eachBlockAtRange(
                    i,
                    (o, s, a) =>
                        (r = r.editObjectAtIndex(a, function () {
                            return v(t)
                                ? o.addAttribute(t, e)
                                : s[0] === s[1]
                                  ? o
                                  : o.copyWithText(
                                        o.text.addAttributeAtRange(t, e, s),
                                    );
                        })),
                ),
                new this.constructor(r)
            );
        }
        addAttribute(t, e) {
            let { blockList: i } = this;
            return (
                this.eachBlock(
                    (r, o) =>
                        (i = i.editObjectAtIndex(o, () =>
                            r.addAttribute(t, e),
                        )),
                ),
                new this.constructor(i)
            );
        }
        removeAttributeAtRange(t, e) {
            let { blockList: i } = this;
            return (
                this.eachBlockAtRange(e, function (r, o, s) {
                    v(t)
                        ? (i = i.editObjectAtIndex(s, () =>
                              r.removeAttribute(t),
                          ))
                        : o[0] !== o[1] &&
                          (i = i.editObjectAtIndex(s, () =>
                              r.copyWithText(
                                  r.text.removeAttributeAtRange(t, o),
                              ),
                          ));
                }),
                new this.constructor(i)
            );
        }
        updateAttributesForAttachment(t, e) {
            let i = this.getRangeOfAttachment(e),
                [r] = Array.from(i),
                { index: o } = this.locationFromPosition(r),
                s = this.getTextAtIndex(o);
            return new this.constructor(
                this.blockList.editObjectAtIndex(o, (a) =>
                    a.copyWithText(s.updateAttributesForAttachment(t, e)),
                ),
            );
        }
        removeAttributeForAttachment(t, e) {
            let i = this.getRangeOfAttachment(e);
            return this.removeAttributeAtRange(t, i);
        }
        setHTMLAttributeAtPosition(t, e, i) {
            let r = this.getBlockAtPosition(t),
                o = r.addHTMLAttribute(e, i);
            return this.replaceBlock(r, o);
        }
        insertBlockBreakAtRange(t) {
            let e;
            t = m(t);
            let [i] = t,
                { offset: r } = this.locationFromPosition(i),
                o = this.removeTextAtRange(t);
            return (
                r === 0 && (e = [new S()]),
                new this.constructor(
                    o.blockList.insertSplittableListAtPosition(new ct(e), i),
                )
            );
        }
        applyBlockAttributeAtRange(t, e, i) {
            let r = this.expandRangeToLineBreaksAndSplitBlocks(i),
                o = r.document;
            i = r.range;
            let s = v(t);
            if (s.listAttribute) {
                o = o.removeLastListAttributeAtRange(i, {
                    exceptAttributeName: t,
                });
                let a = o.convertLineBreaksToBlockBreaksInRange(i);
                (o = a.document), (i = a.range);
            } else
                o = s.exclusive
                    ? o.removeBlockAttributesAtRange(i)
                    : s.terminal
                      ? o.removeLastTerminalAttributeAtRange(i)
                      : o.consolidateBlocksAtRange(i);
            return o.addAttributeAtRange(t, e, i);
        }
        removeLastListAttributeAtRange(t) {
            let e =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : {},
                { blockList: i } = this;
            return (
                this.eachBlockAtRange(t, function (r, o, s) {
                    let a = r.getLastAttribute();
                    a &&
                        v(a).listAttribute &&
                        a !== e.exceptAttributeName &&
                        (i = i.editObjectAtIndex(s, () =>
                            r.removeAttribute(a),
                        ));
                }),
                new this.constructor(i)
            );
        }
        removeLastTerminalAttributeAtRange(t) {
            let { blockList: e } = this;
            return (
                this.eachBlockAtRange(t, function (i, r, o) {
                    let s = i.getLastAttribute();
                    s &&
                        v(s).terminal &&
                        (e = e.editObjectAtIndex(o, () =>
                            i.removeAttribute(s),
                        ));
                }),
                new this.constructor(e)
            );
        }
        removeBlockAttributesAtRange(t) {
            let { blockList: e } = this;
            return (
                this.eachBlockAtRange(t, function (i, r, o) {
                    i.hasAttributes() &&
                        (e = e.editObjectAtIndex(o, () =>
                            i.copyWithoutAttributes(),
                        ));
                }),
                new this.constructor(e)
            );
        }
        expandRangeToLineBreaksAndSplitBlocks(t) {
            let e;
            t = m(t);
            let [i, r] = t,
                o = this.locationFromPosition(i),
                s = this.locationFromPosition(r),
                a = this,
                c = a.getBlockAtIndex(o.index);
            if (
                ((o.offset = c.findLineBreakInDirectionFromPosition(
                    "backward",
                    o.offset,
                )),
                o.offset != null &&
                    ((e = a.positionFromLocation(o)),
                    (a = a.insertBlockBreakAtRange([e, e + 1])),
                    (s.index += 1),
                    (s.offset -= a.getBlockAtIndex(o.index).getLength()),
                    (o.index += 1)),
                (o.offset = 0),
                s.offset === 0 && s.index > o.index)
            )
                (s.index -= 1),
                    (s.offset = a
                        .getBlockAtIndex(s.index)
                        .getBlockBreakPosition());
            else {
                let l = a.getBlockAtIndex(s.index);
                l.text.getStringAtRange([s.offset - 1, s.offset]) ===
                `
`
                    ? (s.offset -= 1)
                    : (s.offset = l.findLineBreakInDirectionFromPosition(
                          "forward",
                          s.offset,
                      )),
                    s.offset !== l.getBlockBreakPosition() &&
                        ((e = a.positionFromLocation(s)),
                        (a = a.insertBlockBreakAtRange([e, e + 1])));
            }
            return (
                (i = a.positionFromLocation(o)),
                (r = a.positionFromLocation(s)),
                { document: a, range: (t = m([i, r])) }
            );
        }
        convertLineBreaksToBlockBreaksInRange(t) {
            t = m(t);
            let [e] = t,
                i = this.getStringAtRange(t).slice(0, -1),
                r = this;
            return (
                i.replace(/.*?\n/g, function (o) {
                    (e += o.length),
                        (r = r.insertBlockBreakAtRange([e - 1, e]));
                }),
                { document: r, range: t }
            );
        }
        consolidateBlocksAtRange(t) {
            t = m(t);
            let [e, i] = t,
                r = this.locationFromPosition(e).index,
                o = this.locationFromPosition(i).index;
            return new this.constructor(
                this.blockList.consolidateFromIndexToIndex(r, o),
            );
        }
        getDocumentAtRange(t) {
            t = m(t);
            let e = this.blockList.getSplittableListInRange(t).toArray();
            return new this.constructor(e);
        }
        getStringAtRange(t) {
            let e,
                i = (t = m(t));
            return (
                i[i.length - 1] !== this.getLength() && (e = -1),
                this.getDocumentAtRange(t).toString().slice(0, e)
            );
        }
        getBlockAtIndex(t) {
            return this.blockList.getObjectAtIndex(t);
        }
        getBlockAtPosition(t) {
            let { index: e } = this.locationFromPosition(t);
            return this.getBlockAtIndex(e);
        }
        getTextAtIndex(t) {
            var e;
            return (e = this.getBlockAtIndex(t)) === null || e === void 0
                ? void 0
                : e.text;
        }
        getTextAtPosition(t) {
            let { index: e } = this.locationFromPosition(t);
            return this.getTextAtIndex(e);
        }
        getPieceAtPosition(t) {
            let { index: e, offset: i } = this.locationFromPosition(t);
            return this.getTextAtIndex(e).getPieceAtPosition(i);
        }
        getCharacterAtPosition(t) {
            let { index: e, offset: i } = this.locationFromPosition(t);
            return this.getTextAtIndex(e).getStringAtRange([i, i + 1]);
        }
        getLength() {
            return this.blockList.getEndPosition();
        }
        getBlocks() {
            return this.blockList.toArray();
        }
        getBlockCount() {
            return this.blockList.length;
        }
        getEditCount() {
            return this.editCount;
        }
        eachBlock(t) {
            return this.blockList.eachObject(t);
        }
        eachBlockAtRange(t, e) {
            let i, r;
            t = m(t);
            let [o, s] = t,
                a = this.locationFromPosition(o),
                c = this.locationFromPosition(s);
            if (a.index === c.index)
                return (
                    (i = this.getBlockAtIndex(a.index)),
                    (r = [a.offset, c.offset]),
                    e(i, r, a.index)
                );
            for (let l = a.index; l <= c.index; l++)
                if (((i = this.getBlockAtIndex(l)), i)) {
                    switch (l) {
                        case a.index:
                            r = [a.offset, i.text.getLength()];
                            break;
                        case c.index:
                            r = [0, c.offset];
                            break;
                        default:
                            r = [0, i.text.getLength()];
                    }
                    e(i, r, l);
                }
        }
        getCommonAttributesAtRange(t) {
            t = m(t);
            let [e] = t;
            if (N(t)) return this.getCommonAttributesAtPosition(e);
            {
                let i = [],
                    r = [];
                return (
                    this.eachBlockAtRange(t, function (o, s) {
                        if (s[0] !== s[1])
                            return (
                                i.push(o.text.getCommonAttributesAtRange(s)),
                                r.push(ci(o))
                            );
                    }),
                    C.fromCommonAttributesOfObjects(i)
                        .merge(C.fromCommonAttributesOfObjects(r))
                        .toObject()
                );
            }
        }
        getCommonAttributesAtPosition(t) {
            let e,
                i,
                { index: r, offset: o } = this.locationFromPosition(t),
                s = this.getBlockAtIndex(r);
            if (!s) return {};
            let a = ci(s),
                c = s.text.getAttributesAtPosition(o),
                l = s.text.getAttributesAtPosition(o - 1),
                u = Object.keys(Y).filter((g) => Y[g].inheritable);
            for (e in l)
                (i = l[e]), (i === c[e] || u.includes(e)) && (a[e] = i);
            return a;
        }
        getRangeOfCommonAttributeAtPosition(t, e) {
            let { index: i, offset: r } = this.locationFromPosition(e),
                o = this.getTextAtIndex(i),
                [s, a] = Array.from(
                    o.getExpandedRangeForAttributeAtOffset(t, r),
                ),
                c = this.positionFromLocation({ index: i, offset: s }),
                l = this.positionFromLocation({ index: i, offset: a });
            return m([c, l]);
        }
        getBaseBlockAttributes() {
            let t = this.getBlockAtIndex(0).getAttributes();
            for (let e = 1; e < this.getBlockCount(); e++) {
                let i = this.getBlockAtIndex(e).getAttributes(),
                    r = Math.min(t.length, i.length);
                t = (() => {
                    let o = [];
                    for (let s = 0; s < r && i[s] === t[s]; s++) o.push(i[s]);
                    return o;
                })();
            }
            return t;
        }
        getAttachmentById(t) {
            for (let e of this.getAttachments()) if (e.id === t) return e;
        }
        getAttachmentPieces() {
            let t = [];
            return (
                this.blockList.eachObject((e) => {
                    let { text: i } = e;
                    return (t = t.concat(i.getAttachmentPieces()));
                }),
                t
            );
        }
        getAttachments() {
            return this.getAttachmentPieces().map((t) => t.attachment);
        }
        getRangeOfAttachment(t) {
            let e = 0,
                i = this.blockList.toArray();
            for (let r = 0; r < i.length; r++) {
                let { text: o } = i[r],
                    s = o.getRangeOfAttachment(t);
                if (s) return m([e + s[0], e + s[1]]);
                e += o.getLength();
            }
        }
        getLocationRangeOfAttachment(t) {
            let e = this.getRangeOfAttachment(t);
            return this.locationRangeFromRange(e);
        }
        getAttachmentPieceForAttachment(t) {
            for (let e of this.getAttachmentPieces())
                if (e.attachment === t) return e;
        }
        findRangesForBlockAttribute(t) {
            let e = 0,
                i = [];
            return (
                this.getBlocks().forEach((r) => {
                    let o = r.getLength();
                    r.hasAttribute(t) && i.push([e, e + o]), (e += o);
                }),
                i
            );
        }
        findRangesForTextAttribute(t) {
            let { withValue: e } =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : {},
                i = 0,
                r = [],
                o = [];
            return (
                this.getPieces().forEach((s) => {
                    let a = s.getLength();
                    (function (c) {
                        return e ? c.getAttribute(t) === e : c.hasAttribute(t);
                    })(s) &&
                        (r[1] === i
                            ? (r[1] = i + a)
                            : o.push((r = [i, i + a]))),
                        (i += a);
                }),
                o
            );
        }
        locationFromPosition(t) {
            let e = this.blockList.findIndexAndOffsetAtPosition(Math.max(0, t));
            if (e.index != null) return e;
            {
                let i = this.getBlocks();
                return {
                    index: i.length - 1,
                    offset: i[i.length - 1].getLength(),
                };
            }
        }
        positionFromLocation(t) {
            return this.blockList.findPositionAtIndexAndOffset(
                t.index,
                t.offset,
            );
        }
        locationRangeFromPosition(t) {
            return m(this.locationFromPosition(t));
        }
        locationRangeFromRange(t) {
            if (!(t = m(t))) return;
            let [e, i] = Array.from(t),
                r = this.locationFromPosition(e),
                o = this.locationFromPosition(i);
            return m([r, o]);
        }
        rangeFromLocationRange(t) {
            let e;
            t = m(t);
            let i = this.positionFromLocation(t[0]);
            return N(t) || (e = this.positionFromLocation(t[1])), m([i, e]);
        }
        isEqualTo(t) {
            return this.blockList.isEqualTo(t?.blockList);
        }
        getTexts() {
            return this.getBlocks().map((t) => t.text);
        }
        getPieces() {
            let t = [];
            return (
                Array.from(this.getTexts()).forEach((e) => {
                    t.push(...Array.from(e.getPieces() || []));
                }),
                t
            );
        }
        getObjects() {
            return this.getBlocks()
                .concat(this.getTexts())
                .concat(this.getPieces());
        }
        toSerializableDocument() {
            let t = [];
            return (
                this.blockList.eachObject((e) =>
                    t.push(e.copyWithText(e.text.toSerializableText())),
                ),
                new this.constructor(t)
            );
        }
        toString() {
            return this.blockList.toString();
        }
        toJSON() {
            return this.blockList.toJSON();
        }
        toConsole() {
            return JSON.stringify(
                this.blockList
                    .toArray()
                    .map((t) => JSON.parse(t.text.toConsole())),
            );
        }
    },
    ci = function (n) {
        let t = {},
            e = n.getLastAttribute();
        return e && (t[e] = !0), t;
    },
    fn = "style href src width height language class".split(" "),
    bn = "javascript:".split(" "),
    vn = "script iframe form noscript".split(" "),
    Rt = class extends b {
        static sanitize(t, e) {
            let i = new this(t, e);
            return i.sanitize(), i;
        }
        constructor(t) {
            let {
                allowedAttributes: e,
                forbiddenProtocols: i,
                forbiddenElements: r,
            } = arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {};
            super(...arguments),
                (this.allowedAttributes = e || fn),
                (this.forbiddenProtocols = i || bn),
                (this.forbiddenElements = r || vn),
                (this.body = An(t));
        }
        sanitize() {
            return this.sanitizeElements(), this.normalizeListElementNesting();
        }
        getHTML() {
            return this.body.innerHTML;
        }
        getBody() {
            return this.body;
        }
        sanitizeElements() {
            let t = Ft(this.body),
                e = [];
            for (; t.nextNode(); ) {
                let i = t.currentNode;
                switch (i.nodeType) {
                    case Node.ELEMENT_NODE:
                        this.elementIsRemovable(i)
                            ? e.push(i)
                            : this.sanitizeElement(i);
                        break;
                    case Node.COMMENT_NODE:
                        e.push(i);
                }
            }
            return e.forEach((i) => q(i)), this.body;
        }
        sanitizeElement(t) {
            return (
                t.hasAttribute("href") &&
                    this.forbiddenProtocols.includes(t.protocol) &&
                    t.removeAttribute("href"),
                Array.from(t.attributes).forEach((e) => {
                    let { name: i } = e;
                    this.allowedAttributes.includes(i) ||
                        i.indexOf("data-trix") === 0 ||
                        t.removeAttribute(i);
                }),
                t
            );
        }
        normalizeListElementNesting() {
            return (
                Array.from(this.body.querySelectorAll("ul,ol")).forEach((t) => {
                    let e = t.previousElementSibling;
                    e && x(e) === "li" && e.appendChild(t);
                }),
                this.body
            );
        }
        elementIsRemovable(t) {
            if (t?.nodeType === Node.ELEMENT_NODE)
                return (
                    this.elementIsForbidden(t) ||
                    this.elementIsntSerializable(t)
                );
        }
        elementIsForbidden(t) {
            return this.forbiddenElements.includes(x(t));
        }
        elementIsntSerializable(t) {
            return t.getAttribute("data-trix-serialize") === "false" && !$(t);
        }
    },
    An = function () {
        let n =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
        n = n.replace(/<\/html[^>]*>[^]*$/i, "</html>");
        let t = document.implementation.createHTMLDocument("");
        return (
            (t.documentElement.innerHTML = n),
            Array.from(t.head.querySelectorAll("style")).forEach((e) => {
                t.body.appendChild(e);
            }),
            t.body
        );
    },
    fe = function (n) {
        let t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return { string: (n = ft(n)), attributes: t, type: "string" };
    },
    ui = (n, t) => {
        try {
            let e = JSON.parse(n.getAttribute("data-trix-".concat(t)));
            return (
                e.contentType === "text/html" &&
                    e.content &&
                    (e.content = Rt.sanitize(e.content).getHTML()),
                e
            );
        } catch {
            return {};
        }
    },
    et = class extends b {
        static parse(t, e) {
            let i = new this(t, e);
            return i.parse(), i;
        }
        constructor(t) {
            let { referenceElement: e } =
                arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {};
            super(...arguments),
                (this.html = t),
                (this.referenceElement = e),
                (this.blocks = []),
                (this.blockElements = []),
                (this.processedElements = []);
        }
        getDocument() {
            return k.fromJSON(this.blocks);
        }
        parse() {
            try {
                this.createHiddenContainer();
                let t = Rt.sanitize(this.html).getHTML();
                this.containerElement.innerHTML = t;
                let e = Ft(this.containerElement, { usingFilter: yn });
                for (; e.nextNode(); ) this.processNode(e.currentNode);
                return this.translateBlockElementMarginsToNewlines();
            } finally {
                this.removeHiddenContainer();
            }
        }
        createHiddenContainer() {
            return this.referenceElement
                ? ((this.containerElement =
                      this.referenceElement.cloneNode(!1)),
                  this.containerElement.removeAttribute("id"),
                  this.containerElement.setAttribute("data-trix-internal", ""),
                  (this.containerElement.style.display = "none"),
                  this.referenceElement.parentNode.insertBefore(
                      this.containerElement,
                      this.referenceElement.nextSibling,
                  ))
                : ((this.containerElement = d({
                      tagName: "div",
                      style: { display: "none" },
                  })),
                  document.body.appendChild(this.containerElement));
        }
        removeHiddenContainer() {
            return q(this.containerElement);
        }
        processNode(t) {
            switch (t.nodeType) {
                case Node.TEXT_NODE:
                    if (!this.isInsignificantTextNode(t))
                        return (
                            this.appendBlockForTextNode(t),
                            this.processTextNode(t)
                        );
                    break;
                case Node.ELEMENT_NODE:
                    return (
                        this.appendBlockForElement(t), this.processElement(t)
                    );
            }
        }
        appendBlockForTextNode(t) {
            let e = t.parentNode;
            if (
                e === this.currentBlockElement &&
                this.isBlockElement(t.previousSibling)
            )
                return this.appendStringWithAttributes(`
`);
            if (e === this.containerElement || this.isBlockElement(e)) {
                var i;
                let r = this.getBlockAttributes(e),
                    o = this.getBlockHTMLAttributes(e);
                Q(
                    r,
                    (i = this.currentBlock) === null || i === void 0
                        ? void 0
                        : i.attributes,
                ) ||
                    ((this.currentBlock =
                        this.appendBlockForAttributesWithElement(r, e, o)),
                    (this.currentBlockElement = e));
            }
        }
        appendBlockForElement(t) {
            let e = this.isBlockElement(t),
                i = J(this.currentBlockElement, t);
            if (e && !this.isBlockElement(t.firstChild)) {
                if (
                    !this.isInsignificantTextNode(t.firstChild) ||
                    !this.isBlockElement(t.firstElementChild)
                ) {
                    let r = this.getBlockAttributes(t),
                        o = this.getBlockHTMLAttributes(t);
                    if (t.firstChild) {
                        if (i && Q(r, this.currentBlock.attributes))
                            return this.appendStringWithAttributes(`
`);
                        (this.currentBlock =
                            this.appendBlockForAttributesWithElement(r, t, o)),
                            (this.currentBlockElement = t);
                    }
                }
            } else if (this.currentBlockElement && !i && !e) {
                let r = this.findParentBlockElement(t);
                if (r) return this.appendBlockForElement(r);
                (this.currentBlock = this.appendEmptyBlock()),
                    (this.currentBlockElement = null);
            }
        }
        findParentBlockElement(t) {
            let { parentElement: e } = t;
            for (; e && e !== this.containerElement; ) {
                if (this.isBlockElement(e) && this.blockElements.includes(e))
                    return e;
                e = e.parentElement;
            }
            return null;
        }
        processTextNode(t) {
            let e = t.data;
            var i;
            return (
                hi(t.parentNode) ||
                    ((e = _e(e)),
                    Ti(
                        (i = t.previousSibling) === null || i === void 0
                            ? void 0
                            : i.textContent,
                    ) && (e = Cn(e))),
                this.appendStringWithAttributes(
                    e,
                    this.getTextAttributes(t.parentNode),
                )
            );
        }
        processElement(t) {
            let e;
            if ($(t)) {
                if (((e = ui(t, "attachment")), Object.keys(e).length)) {
                    let i = this.getTextAttributes(t);
                    this.appendAttachmentWithAttributes(e, i),
                        (t.innerHTML = "");
                }
                return this.processedElements.push(t);
            }
            switch (x(t)) {
                case "br":
                    return (
                        this.isExtraBR(t) ||
                            this.isBlockElement(t.nextSibling) ||
                            this.appendStringWithAttributes(
                                `
`,
                                this.getTextAttributes(t),
                            ),
                        this.processedElements.push(t)
                    );
                case "img":
                    e = { url: t.getAttribute("src"), contentType: "image" };
                    let i = ((r) => {
                        let o = r.getAttribute("width"),
                            s = r.getAttribute("height"),
                            a = {};
                        return (
                            o && (a.width = parseInt(o, 10)),
                            s && (a.height = parseInt(s, 10)),
                            a
                        );
                    })(t);
                    for (let r in i) {
                        let o = i[r];
                        e[r] = o;
                    }
                    return (
                        this.appendAttachmentWithAttributes(
                            e,
                            this.getTextAttributes(t),
                        ),
                        this.processedElements.push(t)
                    );
                case "tr":
                    if (this.needsTableSeparator(t))
                        return this.appendStringWithAttributes(
                            Tt.tableRowSeparator,
                        );
                    break;
                case "td":
                    if (this.needsTableSeparator(t))
                        return this.appendStringWithAttributes(
                            Tt.tableCellSeparator,
                        );
            }
        }
        appendBlockForAttributesWithElement(t, e) {
            let i =
                arguments.length > 2 && arguments[2] !== void 0
                    ? arguments[2]
                    : {};
            this.blockElements.push(e);
            let r = (function () {
                return {
                    text: [],
                    attributes:
                        arguments.length > 0 && arguments[0] !== void 0
                            ? arguments[0]
                            : {},
                    htmlAttributes:
                        arguments.length > 1 && arguments[1] !== void 0
                            ? arguments[1]
                            : {},
                };
            })(t, i);
            return this.blocks.push(r), r;
        }
        appendEmptyBlock() {
            return this.appendBlockForAttributesWithElement([], null);
        }
        appendStringWithAttributes(t, e) {
            return this.appendPiece(fe(t, e));
        }
        appendAttachmentWithAttributes(t, e) {
            return this.appendPiece(
                (function (i) {
                    return {
                        attachment: i,
                        attributes:
                            arguments.length > 1 && arguments[1] !== void 0
                                ? arguments[1]
                                : {},
                        type: "attachment",
                    };
                })(t, e),
            );
        }
        appendPiece(t) {
            return (
                this.blocks.length === 0 && this.appendEmptyBlock(),
                this.blocks[this.blocks.length - 1].text.push(t)
            );
        }
        appendStringToTextAtIndex(t, e) {
            let { text: i } = this.blocks[e],
                r = i[i.length - 1];
            if (r?.type !== "string") return i.push(fe(t));
            r.string += t;
        }
        prependStringToTextAtIndex(t, e) {
            let { text: i } = this.blocks[e],
                r = i[0];
            if (r?.type !== "string") return i.unshift(fe(t));
            r.string = t + r.string;
        }
        getTextAttributes(t) {
            let e,
                i = {};
            for (let r in Y) {
                let o = Y[r];
                if (
                    o.tagName &&
                    V(t, {
                        matchingSelector: o.tagName,
                        untilNode: this.containerElement,
                    })
                )
                    i[r] = !0;
                else if (o.parser) {
                    if (((e = o.parser(t)), e)) {
                        let s = !1;
                        for (let a of this.findBlockElementAncestors(t))
                            if (o.parser(a) === e) {
                                s = !0;
                                break;
                            }
                        s || (i[r] = e);
                    }
                } else
                    o.styleProperty &&
                        ((e = t.style[o.styleProperty]), e && (i[r] = e));
            }
            if ($(t)) {
                let r = ui(t, "attributes");
                for (let o in r) (e = r[o]), (i[o] = e);
            }
            return i;
        }
        getBlockAttributes(t) {
            let e = [];
            for (; t && t !== this.containerElement; ) {
                for (let r in y) {
                    let o = y[r];
                    var i;
                    o.parse !== !1 &&
                        x(t) === o.tagName &&
                        (((i = o.test) !== null &&
                            i !== void 0 &&
                            i.call(o, t)) ||
                            !o.test) &&
                        (e.push(r), o.listAttribute && e.push(o.listAttribute));
                }
                t = t.parentNode;
            }
            return e.reverse();
        }
        getBlockHTMLAttributes(t) {
            let e = {},
                i = Object.values(y).find((r) => r.tagName === x(t));
            return (
                (i?.htmlAttributes || []).forEach((r) => {
                    t.hasAttribute(r) && (e[r] = t.getAttribute(r));
                }),
                e
            );
        }
        findBlockElementAncestors(t) {
            let e = [];
            for (; t && t !== this.containerElement; ) {
                let i = x(t);
                vt().includes(i) && e.push(t), (t = t.parentNode);
            }
            return e;
        }
        isBlockElement(t) {
            if (
                t?.nodeType === Node.ELEMENT_NODE &&
                !$(t) &&
                !V(t, {
                    matchingSelector: "td",
                    untilNode: this.containerElement,
                })
            )
                return (
                    vt().includes(x(t)) ||
                    window.getComputedStyle(t).display === "block"
                );
        }
        isInsignificantTextNode(t) {
            if (t?.nodeType !== Node.TEXT_NODE || !kn(t.data)) return;
            let { parentNode: e, previousSibling: i, nextSibling: r } = t;
            return (xn(e.previousSibling) &&
                !this.isBlockElement(e.previousSibling)) ||
                hi(e)
                ? void 0
                : !i || this.isBlockElement(i) || !r || this.isBlockElement(r);
        }
        isExtraBR(t) {
            return (
                x(t) === "br" &&
                this.isBlockElement(t.parentNode) &&
                t.parentNode.lastChild === t
            );
        }
        needsTableSeparator(t) {
            if (Tt.removeBlankTableCells) {
                var e;
                let i =
                    (e = t.previousSibling) === null || e === void 0
                        ? void 0
                        : e.textContent;
                return i && /\S/.test(i);
            }
            return t.previousSibling;
        }
        translateBlockElementMarginsToNewlines() {
            let t = this.getMarginOfDefaultBlockElement();
            for (let e = 0; e < this.blocks.length; e++) {
                let i = this.getMarginOfBlockElementAtIndex(e);
                i &&
                    (i.top > 2 * t.top &&
                        this.prependStringToTextAtIndex(
                            `
`,
                            e,
                        ),
                    i.bottom > 2 * t.bottom &&
                        this.appendStringToTextAtIndex(
                            `
`,
                            e,
                        ));
            }
        }
        getMarginOfBlockElementAtIndex(t) {
            let e = this.blockElements[t];
            if (
                e &&
                e.textContent &&
                !vt().includes(x(e)) &&
                !this.processedElements.includes(e)
            )
                return di(e);
        }
        getMarginOfDefaultBlockElement() {
            let t = d(y.default.tagName);
            return this.containerElement.appendChild(t), di(t);
        }
    },
    hi = function (n) {
        let { whiteSpace: t } = window.getComputedStyle(n);
        return ["pre", "pre-wrap", "pre-line"].includes(t);
    },
    xn = (n) => n && !Ti(n.textContent),
    di = function (n) {
        let t = window.getComputedStyle(n);
        if (t.display === "block")
            return {
                top: parseInt(t.marginTop),
                bottom: parseInt(t.marginBottom),
            };
    },
    yn = function (n) {
        return x(n) === "style"
            ? NodeFilter.FILTER_REJECT
            : NodeFilter.FILTER_ACCEPT;
    },
    Cn = (n) => n.replace(new RegExp("^".concat(ze.source, "+")), ""),
    kn = (n) => new RegExp("^".concat(ze.source, "*$")).test(n),
    Ti = (n) => /\s$/.test(n),
    Rn = [
        "contenteditable",
        "data-trix-id",
        "data-trix-store-key",
        "data-trix-mutable",
        "data-trix-placeholder",
        "tabindex",
    ],
    Pe = "data-trix-serialized-attributes",
    En = "[".concat(Pe, "]"),
    Sn = new RegExp("<!--block-->", "g"),
    Ln = {
        "application/json": function (n) {
            let t;
            if (n instanceof k) t = n;
            else {
                if (!(n instanceof HTMLElement))
                    throw new Error("unserializable object");
                t = et.parse(n.innerHTML).getDocument();
            }
            return t.toSerializableDocument().toJSONString();
        },
        "text/html": function (n) {
            let t;
            if (n instanceof k) t = lt.render(n);
            else {
                if (!(n instanceof HTMLElement))
                    throw new Error("unserializable object");
                t = n.cloneNode(!0);
            }
            return (
                Array.from(
                    t.querySelectorAll("[data-trix-serialize=false]"),
                ).forEach((e) => {
                    q(e);
                }),
                Rn.forEach((e) => {
                    Array.from(t.querySelectorAll("[".concat(e, "]"))).forEach(
                        (i) => {
                            i.removeAttribute(e);
                        },
                    );
                }),
                Array.from(t.querySelectorAll(En)).forEach((e) => {
                    try {
                        let i = JSON.parse(e.getAttribute(Pe));
                        e.removeAttribute(Pe);
                        for (let r in i) {
                            let o = i[r];
                            e.setAttribute(r, o);
                        }
                    } catch {}
                }),
                t.innerHTML.replace(Sn, "")
            );
        },
    },
    Dn = Object.freeze({ __proto__: null }),
    p = class extends b {
        constructor(t, e) {
            super(...arguments),
                (this.attachmentManager = t),
                (this.attachment = e),
                (this.id = this.attachment.id),
                (this.file = this.attachment.file);
        }
        remove() {
            return this.attachmentManager.requestRemovalOfAttachment(
                this.attachment,
            );
        }
    };
p.proxyMethod("attachment.getAttribute"),
    p.proxyMethod("attachment.hasAttribute"),
    p.proxyMethod("attachment.setAttribute"),
    p.proxyMethod("attachment.getAttributes"),
    p.proxyMethod("attachment.setAttributes"),
    p.proxyMethod("attachment.isPending"),
    p.proxyMethod("attachment.isPreviewable"),
    p.proxyMethod("attachment.getURL"),
    p.proxyMethod("attachment.getHref"),
    p.proxyMethod("attachment.getFilename"),
    p.proxyMethod("attachment.getFilesize"),
    p.proxyMethod("attachment.getFormattedFilesize"),
    p.proxyMethod("attachment.getExtension"),
    p.proxyMethod("attachment.getContentType"),
    p.proxyMethod("attachment.getFile"),
    p.proxyMethod("attachment.setFile"),
    p.proxyMethod("attachment.releaseFile"),
    p.proxyMethod("attachment.getUploadProgress"),
    p.proxyMethod("attachment.setUploadProgress");
var Ut = class extends b {
        constructor() {
            let t =
                arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : [];
            super(...arguments),
                (this.managedAttachments = {}),
                Array.from(t).forEach((e) => {
                    this.manageAttachment(e);
                });
        }
        getAttachments() {
            let t = [];
            for (let e in this.managedAttachments) {
                let i = this.managedAttachments[e];
                t.push(i);
            }
            return t;
        }
        manageAttachment(t) {
            return (
                this.managedAttachments[t.id] ||
                    (this.managedAttachments[t.id] = new p(this, t)),
                this.managedAttachments[t.id]
            );
        }
        attachmentIsManaged(t) {
            return t.id in this.managedAttachments;
        }
        requestRemovalOfAttachment(t) {
            var e, i;
            if (this.attachmentIsManaged(t))
                return (e = this.delegate) === null ||
                    e === void 0 ||
                    (i = e.attachmentManagerDidRequestRemovalOfAttachment) ===
                        null ||
                    i === void 0
                    ? void 0
                    : i.call(e, t);
        }
        unmanageAttachment(t) {
            let e = this.managedAttachments[t.id];
            return delete this.managedAttachments[t.id], e;
        }
    },
    Vt = class {
        constructor(t) {
            (this.composition = t), (this.document = this.composition.document);
            let e = this.composition.getSelectedRange();
            (this.startPosition = e[0]),
                (this.endPosition = e[1]),
                (this.startLocation = this.document.locationFromPosition(
                    this.startPosition,
                )),
                (this.endLocation = this.document.locationFromPosition(
                    this.endPosition,
                )),
                (this.block = this.document.getBlockAtIndex(
                    this.endLocation.index,
                )),
                (this.breaksOnReturn = this.block.breaksOnReturn()),
                (this.previousCharacter = this.block.text.getStringAtPosition(
                    this.endLocation.offset - 1,
                )),
                (this.nextCharacter = this.block.text.getStringAtPosition(
                    this.endLocation.offset,
                ));
        }
        shouldInsertBlockBreak() {
            return this.block.hasAttributes() &&
                this.block.isListItem() &&
                !this.block.isEmpty()
                ? this.startLocation.offset !== 0
                : this.breaksOnReturn &&
                      this.nextCharacter !==
                          `
`;
        }
        shouldBreakFormattedBlock() {
            return (
                this.block.hasAttributes() &&
                !this.block.isListItem() &&
                ((this.breaksOnReturn &&
                    this.nextCharacter ===
                        `
`) ||
                    this.previousCharacter ===
                        `
`)
            );
        }
        shouldDecreaseListLevel() {
            return (
                this.block.hasAttributes() &&
                this.block.isListItem() &&
                this.block.isEmpty()
            );
        }
        shouldPrependListItem() {
            return (
                this.block.isListItem() &&
                this.startLocation.offset === 0 &&
                !this.block.isEmpty()
            );
        }
        shouldRemoveLastBlockAttribute() {
            return (
                this.block.hasAttributes() &&
                !this.block.isListItem() &&
                this.block.isEmpty()
            );
        }
    },
    F = class extends b {
        constructor() {
            super(...arguments),
                (this.document = new k()),
                (this.attachments = []),
                (this.currentAttributes = {}),
                (this.revision = 0);
        }
        setDocument(t) {
            var e, i;
            if (!t.isEqualTo(this.document))
                return (
                    (this.document = t),
                    this.refreshAttachments(),
                    this.revision++,
                    (e = this.delegate) === null ||
                    e === void 0 ||
                    (i = e.compositionDidChangeDocument) === null ||
                    i === void 0
                        ? void 0
                        : i.call(e, t)
                );
        }
        getSnapshot() {
            return {
                document: this.document,
                selectedRange: this.getSelectedRange(),
            };
        }
        loadSnapshot(t) {
            var e, i, r, o;
            let { document: s, selectedRange: a } = t;
            return (
                (e = this.delegate) === null ||
                    e === void 0 ||
                    (i = e.compositionWillLoadSnapshot) === null ||
                    i === void 0 ||
                    i.call(e),
                this.setDocument(s ?? new k()),
                this.setSelection(a ?? [0, 0]),
                (r = this.delegate) === null ||
                r === void 0 ||
                (o = r.compositionDidLoadSnapshot) === null ||
                o === void 0
                    ? void 0
                    : o.call(r)
            );
        }
        insertText(t) {
            let { updatePosition: e } =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : { updatePosition: !0 },
                i = this.getSelectedRange();
            this.setDocument(this.document.insertTextAtRange(t, i));
            let r = i[0],
                o = r + t.getLength();
            return (
                e && this.setSelection(o),
                this.notifyDelegateOfInsertionAtRange([r, o])
            );
        }
        insertBlock() {
            let t =
                    arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : new S(),
                e = new k([t]);
            return this.insertDocument(e);
        }
        insertDocument() {
            let t =
                    arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : new k(),
                e = this.getSelectedRange();
            this.setDocument(this.document.insertDocumentAtRange(t, e));
            let i = e[0],
                r = i + t.getLength();
            return (
                this.setSelection(r),
                this.notifyDelegateOfInsertionAtRange([i, r])
            );
        }
        insertString(t, e) {
            let i = this.getCurrentTextAttributes(),
                r = R.textForStringWithAttributes(t, i);
            return this.insertText(r, e);
        }
        insertBlockBreak() {
            let t = this.getSelectedRange();
            this.setDocument(this.document.insertBlockBreakAtRange(t));
            let e = t[0],
                i = e + 1;
            return (
                this.setSelection(i),
                this.notifyDelegateOfInsertionAtRange([e, i])
            );
        }
        insertLineBreak() {
            let t = new Vt(this);
            if (t.shouldDecreaseListLevel())
                return (
                    this.decreaseListLevel(), this.setSelection(t.startPosition)
                );
            if (t.shouldPrependListItem()) {
                let e = new k([t.block.copyWithoutText()]);
                return this.insertDocument(e);
            }
            return t.shouldInsertBlockBreak()
                ? this.insertBlockBreak()
                : t.shouldRemoveLastBlockAttribute()
                  ? this.removeLastBlockAttribute()
                  : t.shouldBreakFormattedBlock()
                    ? this.breakFormattedBlock(t)
                    : this.insertString(`
`);
        }
        insertHTML(t) {
            let e = et.parse(t).getDocument(),
                i = this.getSelectedRange();
            this.setDocument(this.document.mergeDocumentAtRange(e, i));
            let r = i[0],
                o = r + e.getLength() - 1;
            return (
                this.setSelection(o),
                this.notifyDelegateOfInsertionAtRange([r, o])
            );
        }
        replaceHTML(t) {
            let e = et
                    .parse(t)
                    .getDocument()
                    .copyUsingObjectsFromDocument(this.document),
                i = this.getLocationRange({ strict: !1 }),
                r = this.document.rangeFromLocationRange(i);
            return this.setDocument(e), this.setSelection(r);
        }
        insertFile(t) {
            return this.insertFiles([t]);
        }
        insertFiles(t) {
            let e = [];
            return (
                Array.from(t).forEach((i) => {
                    var r;
                    if (
                        (r = this.delegate) !== null &&
                        r !== void 0 &&
                        r.compositionShouldAcceptFile(i)
                    ) {
                        let o = H.attachmentForFile(i);
                        e.push(o);
                    }
                }),
                this.insertAttachments(e)
            );
        }
        insertAttachment(t) {
            return this.insertAttachments([t]);
        }
        insertAttachments(t) {
            let e = new R();
            return (
                Array.from(t).forEach((i) => {
                    var r;
                    let o = i.getType(),
                        s =
                            (r = je[o]) === null || r === void 0
                                ? void 0
                                : r.presentation,
                        a = this.getCurrentTextAttributes();
                    s && (a.presentation = s);
                    let c = R.textForAttachmentWithAttributes(i, a);
                    e = e.appendText(c);
                }),
                this.insertText(e)
            );
        }
        shouldManageDeletingInDirection(t) {
            let e = this.getLocationRange();
            if (N(e)) {
                if (
                    (t === "backward" && e[0].offset === 0) ||
                    this.shouldManageMovingCursorInDirection(t)
                )
                    return !0;
            } else if (e[0].index !== e[1].index) return !0;
            return !1;
        }
        deleteInDirection(t) {
            let e,
                i,
                r,
                { length: o } =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : {},
                s = this.getLocationRange(),
                a = this.getSelectedRange(),
                c = N(a);
            if (
                (c
                    ? (i = t === "backward" && s[0].offset === 0)
                    : (r = s[0].index !== s[1].index),
                i && this.canDecreaseBlockAttributeLevel())
            ) {
                let l = this.getBlock();
                if (
                    (l.isListItem()
                        ? this.decreaseListLevel()
                        : this.decreaseBlockAttributeLevel(),
                    this.setSelection(a[0]),
                    l.isEmpty())
                )
                    return !1;
            }
            return (
                c &&
                    ((a = this.getExpandedRangeInDirection(t, { length: o })),
                    t === "backward" && (e = this.getAttachmentAtRange(a))),
                e
                    ? (this.editAttachment(e), !1)
                    : (this.setDocument(this.document.removeTextAtRange(a)),
                      this.setSelection(a[0]),
                      !i && !r && void 0)
            );
        }
        moveTextFromRange(t) {
            let [e] = Array.from(this.getSelectedRange());
            return (
                this.setDocument(
                    this.document.moveTextFromRangeToPosition(t, e),
                ),
                this.setSelection(e)
            );
        }
        removeAttachment(t) {
            let e = this.document.getRangeOfAttachment(t);
            if (e)
                return (
                    this.stopEditingAttachment(),
                    this.setDocument(this.document.removeTextAtRange(e)),
                    this.setSelection(e[0])
                );
        }
        removeLastBlockAttribute() {
            let [t, e] = Array.from(this.getSelectedRange()),
                i = this.document.getBlockAtPosition(e);
            return (
                this.removeCurrentAttribute(i.getLastAttribute()),
                this.setSelection(t)
            );
        }
        insertPlaceholder() {
            return (
                (this.placeholderPosition = this.getPosition()),
                this.insertString(" ")
            );
        }
        selectPlaceholder() {
            if (this.placeholderPosition != null)
                return (
                    this.setSelectedRange([
                        this.placeholderPosition,
                        this.placeholderPosition + 1,
                    ]),
                    this.getSelectedRange()
                );
        }
        forgetPlaceholder() {
            this.placeholderPosition = null;
        }
        hasCurrentAttribute(t) {
            let e = this.currentAttributes[t];
            return e != null && e !== !1;
        }
        toggleCurrentAttribute(t) {
            let e = !this.currentAttributes[t];
            return e
                ? this.setCurrentAttribute(t, e)
                : this.removeCurrentAttribute(t);
        }
        canSetCurrentAttribute(t) {
            return v(t)
                ? this.canSetCurrentBlockAttribute(t)
                : this.canSetCurrentTextAttribute(t);
        }
        canSetCurrentTextAttribute(t) {
            let e = this.getSelectedDocument();
            if (e) {
                for (let i of Array.from(e.getAttachments()))
                    if (!i.hasContent()) return !1;
                return !0;
            }
        }
        canSetCurrentBlockAttribute(t) {
            let e = this.getBlock();
            if (e) return !e.isTerminalBlock();
        }
        setCurrentAttribute(t, e) {
            return v(t)
                ? this.setBlockAttribute(t, e)
                : (this.setTextAttribute(t, e),
                  (this.currentAttributes[t] = e),
                  this.notifyDelegateOfCurrentAttributesChange());
        }
        setHTMLAtributeAtPosition(t, e, i) {
            var r;
            let o = this.document.getBlockAtPosition(t),
                s =
                    (r = v(o.getLastAttribute())) === null || r === void 0
                        ? void 0
                        : r.htmlAttributes;
            if (o && s != null && s.includes(e)) {
                let a = this.document.setHTMLAttributeAtPosition(t, e, i);
                this.setDocument(a);
            }
        }
        setTextAttribute(t, e) {
            let i = this.getSelectedRange();
            if (!i) return;
            let [r, o] = Array.from(i);
            if (r !== o)
                return this.setDocument(
                    this.document.addAttributeAtRange(t, e, i),
                );
            if (t === "href") {
                let s = R.textForStringWithAttributes(e, { href: e });
                return this.insertText(s);
            }
        }
        setBlockAttribute(t, e) {
            let i = this.getSelectedRange();
            if (this.canSetCurrentAttribute(t))
                return (
                    this.setDocument(
                        this.document.applyBlockAttributeAtRange(t, e, i),
                    ),
                    this.setSelection(i)
                );
        }
        removeCurrentAttribute(t) {
            return v(t)
                ? (this.removeBlockAttribute(t), this.updateCurrentAttributes())
                : (this.removeTextAttribute(t),
                  delete this.currentAttributes[t],
                  this.notifyDelegateOfCurrentAttributesChange());
        }
        removeTextAttribute(t) {
            let e = this.getSelectedRange();
            if (e)
                return this.setDocument(
                    this.document.removeAttributeAtRange(t, e),
                );
        }
        removeBlockAttribute(t) {
            let e = this.getSelectedRange();
            if (e)
                return this.setDocument(
                    this.document.removeAttributeAtRange(t, e),
                );
        }
        canDecreaseNestingLevel() {
            var t;
            return (
                ((t = this.getBlock()) === null || t === void 0
                    ? void 0
                    : t.getNestingLevel()) > 0
            );
        }
        canIncreaseNestingLevel() {
            var t;
            let e = this.getBlock();
            if (e) {
                if (
                    (t = v(e.getLastNestableAttribute())) === null ||
                    t === void 0 ||
                    !t.listAttribute
                )
                    return e.getNestingLevel() > 0;
                {
                    let i = this.getPreviousBlock();
                    if (i)
                        return (function () {
                            let r =
                                arguments.length > 1 && arguments[1] !== void 0
                                    ? arguments[1]
                                    : [];
                            return Q(
                                (arguments.length > 0 && arguments[0] !== void 0
                                    ? arguments[0]
                                    : []
                                ).slice(0, r.length),
                                r,
                            );
                        })(
                            i.getListItemAttributes(),
                            e.getListItemAttributes(),
                        );
                }
            }
        }
        decreaseNestingLevel() {
            let t = this.getBlock();
            if (t)
                return this.setDocument(
                    this.document.replaceBlock(t, t.decreaseNestingLevel()),
                );
        }
        increaseNestingLevel() {
            let t = this.getBlock();
            if (t)
                return this.setDocument(
                    this.document.replaceBlock(t, t.increaseNestingLevel()),
                );
        }
        canDecreaseBlockAttributeLevel() {
            var t;
            return (
                ((t = this.getBlock()) === null || t === void 0
                    ? void 0
                    : t.getAttributeLevel()) > 0
            );
        }
        decreaseBlockAttributeLevel() {
            var t;
            let e =
                (t = this.getBlock()) === null || t === void 0
                    ? void 0
                    : t.getLastAttribute();
            if (e) return this.removeCurrentAttribute(e);
        }
        decreaseListLevel() {
            let [t] = Array.from(this.getSelectedRange()),
                { index: e } = this.document.locationFromPosition(t),
                i = e,
                r = this.getBlock().getAttributeLevel(),
                o = this.document.getBlockAtIndex(i + 1);
            for (; o && o.isListItem() && !(o.getAttributeLevel() <= r); )
                i++, (o = this.document.getBlockAtIndex(i + 1));
            t = this.document.positionFromLocation({ index: e, offset: 0 });
            let s = this.document.positionFromLocation({ index: i, offset: 0 });
            return this.setDocument(
                this.document.removeLastListAttributeAtRange([t, s]),
            );
        }
        updateCurrentAttributes() {
            let t = this.getSelectedRange({ ignoreLock: !0 });
            if (t) {
                let e = this.document.getCommonAttributesAtRange(t);
                if (
                    (Array.from(Le()).forEach((i) => {
                        e[i] || this.canSetCurrentAttribute(i) || (e[i] = !1);
                    }),
                    !ht(e, this.currentAttributes))
                )
                    return (
                        (this.currentAttributes = e),
                        this.notifyDelegateOfCurrentAttributesChange()
                    );
            }
        }
        getCurrentAttributes() {
            return Ai.call({}, this.currentAttributes);
        }
        getCurrentTextAttributes() {
            let t = {};
            for (let e in this.currentAttributes) {
                let i = this.currentAttributes[e];
                i !== !1 && De(e) && (t[e] = i);
            }
            return t;
        }
        freezeSelection() {
            return this.setCurrentAttribute("frozen", !0);
        }
        thawSelection() {
            return this.removeCurrentAttribute("frozen");
        }
        hasFrozenSelection() {
            return this.hasCurrentAttribute("frozen");
        }
        setSelection(t) {
            var e;
            let i = this.document.locationRangeFromRange(t);
            return (e = this.delegate) === null || e === void 0
                ? void 0
                : e.compositionDidRequestChangingSelectionToLocationRange(i);
        }
        getSelectedRange() {
            let t = this.getLocationRange();
            if (t) return this.document.rangeFromLocationRange(t);
        }
        setSelectedRange(t) {
            let e = this.document.locationRangeFromRange(t);
            return this.getSelectionManager().setLocationRange(e);
        }
        getPosition() {
            let t = this.getLocationRange();
            if (t) return this.document.positionFromLocation(t[0]);
        }
        getLocationRange(t) {
            return this.targetLocationRange
                ? this.targetLocationRange
                : this.getSelectionManager().getLocationRange(t) ||
                      m({ index: 0, offset: 0 });
        }
        withTargetLocationRange(t, e) {
            let i;
            this.targetLocationRange = t;
            try {
                i = e();
            } finally {
                this.targetLocationRange = null;
            }
            return i;
        }
        withTargetRange(t, e) {
            let i = this.document.locationRangeFromRange(t);
            return this.withTargetLocationRange(i, e);
        }
        withTargetDOMRange(t, e) {
            let i = this.createLocationRangeFromDOMRange(t, { strict: !1 });
            return this.withTargetLocationRange(i, e);
        }
        getExpandedRangeInDirection(t) {
            let { length: e } =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : {},
                [i, r] = Array.from(this.getSelectedRange());
            return (
                t === "backward"
                    ? e
                        ? (i -= e)
                        : (i = this.translateUTF16PositionFromOffset(i, -1))
                    : e
                      ? (r += e)
                      : (r = this.translateUTF16PositionFromOffset(r, 1)),
                m([i, r])
            );
        }
        shouldManageMovingCursorInDirection(t) {
            if (this.editingAttachment) return !0;
            let e = this.getExpandedRangeInDirection(t);
            return this.getAttachmentAtRange(e) != null;
        }
        moveCursorInDirection(t) {
            let e, i;
            if (this.editingAttachment)
                i = this.document.getRangeOfAttachment(this.editingAttachment);
            else {
                let r = this.getSelectedRange();
                (i = this.getExpandedRangeInDirection(t)), (e = !Pt(r, i));
            }
            if (
                (t === "backward"
                    ? this.setSelectedRange(i[0])
                    : this.setSelectedRange(i[1]),
                e)
            ) {
                let r = this.getAttachmentAtRange(i);
                if (r) return this.editAttachment(r);
            }
        }
        expandSelectionInDirection(t) {
            let { length: e } =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : {},
                i = this.getExpandedRangeInDirection(t, { length: e });
            return this.setSelectedRange(i);
        }
        expandSelectionForEditing() {
            if (this.hasCurrentAttribute("href"))
                return this.expandSelectionAroundCommonAttribute("href");
        }
        expandSelectionAroundCommonAttribute(t) {
            let e = this.getPosition(),
                i = this.document.getRangeOfCommonAttributeAtPosition(t, e);
            return this.setSelectedRange(i);
        }
        selectionContainsAttachments() {
            var t;
            return (
                ((t = this.getSelectedAttachments()) === null || t === void 0
                    ? void 0
                    : t.length) > 0
            );
        }
        selectionIsInCursorTarget() {
            return (
                this.editingAttachment ||
                this.positionIsCursorTarget(this.getPosition())
            );
        }
        positionIsCursorTarget(t) {
            let e = this.document.locationFromPosition(t);
            if (e) return this.locationIsCursorTarget(e);
        }
        positionIsBlockBreak(t) {
            var e;
            return (e = this.document.getPieceAtPosition(t)) === null ||
                e === void 0
                ? void 0
                : e.isBlockBreak();
        }
        getSelectedDocument() {
            let t = this.getSelectedRange();
            if (t) return this.document.getDocumentAtRange(t);
        }
        getSelectedAttachments() {
            var t;
            return (t = this.getSelectedDocument()) === null || t === void 0
                ? void 0
                : t.getAttachments();
        }
        getAttachments() {
            return this.attachments.slice(0);
        }
        refreshAttachments() {
            let t = this.document.getAttachments(),
                { added: e, removed: i } = (function () {
                    let r =
                            arguments.length > 0 && arguments[0] !== void 0
                                ? arguments[0]
                                : [],
                        o =
                            arguments.length > 1 && arguments[1] !== void 0
                                ? arguments[1]
                                : [],
                        s = [],
                        a = [],
                        c = new Set();
                    r.forEach((u) => {
                        c.add(u);
                    });
                    let l = new Set();
                    return (
                        o.forEach((u) => {
                            l.add(u), c.has(u) || s.push(u);
                        }),
                        r.forEach((u) => {
                            l.has(u) || a.push(u);
                        }),
                        { added: s, removed: a }
                    );
                })(this.attachments, t);
            return (
                (this.attachments = t),
                Array.from(i).forEach((r) => {
                    var o, s;
                    (r.delegate = null),
                        (o = this.delegate) === null ||
                            o === void 0 ||
                            (s = o.compositionDidRemoveAttachment) === null ||
                            s === void 0 ||
                            s.call(o, r);
                }),
                (() => {
                    let r = [];
                    return (
                        Array.from(e).forEach((o) => {
                            var s, a;
                            (o.delegate = this),
                                r.push(
                                    (s = this.delegate) === null ||
                                        s === void 0 ||
                                        (a = s.compositionDidAddAttachment) ===
                                            null ||
                                        a === void 0
                                        ? void 0
                                        : a.call(s, o),
                                );
                        }),
                        r
                    );
                })()
            );
        }
        attachmentDidChangeAttributes(t) {
            var e, i;
            return (
                this.revision++,
                (e = this.delegate) === null ||
                e === void 0 ||
                (i = e.compositionDidEditAttachment) === null ||
                i === void 0
                    ? void 0
                    : i.call(e, t)
            );
        }
        attachmentDidChangePreviewURL(t) {
            var e, i;
            return (
                this.revision++,
                (e = this.delegate) === null ||
                e === void 0 ||
                (i = e.compositionDidChangeAttachmentPreviewURL) === null ||
                i === void 0
                    ? void 0
                    : i.call(e, t)
            );
        }
        editAttachment(t, e) {
            var i, r;
            if (t !== this.editingAttachment)
                return (
                    this.stopEditingAttachment(),
                    (this.editingAttachment = t),
                    (i = this.delegate) === null ||
                    i === void 0 ||
                    (r = i.compositionDidStartEditingAttachment) === null ||
                    r === void 0
                        ? void 0
                        : r.call(i, this.editingAttachment, e)
                );
        }
        stopEditingAttachment() {
            var t, e;
            this.editingAttachment &&
                ((t = this.delegate) === null ||
                    t === void 0 ||
                    (e = t.compositionDidStopEditingAttachment) === null ||
                    e === void 0 ||
                    e.call(t, this.editingAttachment),
                (this.editingAttachment = null));
        }
        updateAttributesForAttachment(t, e) {
            return this.setDocument(
                this.document.updateAttributesForAttachment(t, e),
            );
        }
        removeAttributeForAttachment(t, e) {
            return this.setDocument(
                this.document.removeAttributeForAttachment(t, e),
            );
        }
        breakFormattedBlock(t) {
            let { document: e } = t,
                { block: i } = t,
                r = t.startPosition,
                o = [r - 1, r];
            i.getBlockBreakPosition() === t.startLocation.offset
                ? (i.breaksOnReturn() &&
                  t.nextCharacter ===
                      `
`
                      ? (r += 1)
                      : (e = e.removeTextAtRange(o)),
                  (o = [r, r]))
                : t.nextCharacter ===
                    `
`
                  ? t.previousCharacter ===
                    `
`
                      ? (o = [r - 1, r + 1])
                      : ((o = [r, r + 1]), (r += 1))
                  : t.startLocation.offset - 1 != 0 && (r += 1);
            let s = new k([i.removeLastAttribute().copyWithoutText()]);
            return (
                this.setDocument(e.insertDocumentAtRange(s, o)),
                this.setSelection(r)
            );
        }
        getPreviousBlock() {
            let t = this.getLocationRange();
            if (t) {
                let { index: e } = t[0];
                if (e > 0) return this.document.getBlockAtIndex(e - 1);
            }
        }
        getBlock() {
            let t = this.getLocationRange();
            if (t) return this.document.getBlockAtIndex(t[0].index);
        }
        getAttachmentAtRange(t) {
            let e = this.document.getDocumentAtRange(t);
            if (
                e.toString() ===
                "".concat(
                    "\uFFFC",
                    `
`,
                )
            )
                return e.getAttachments()[0];
        }
        notifyDelegateOfCurrentAttributesChange() {
            var t, e;
            return (t = this.delegate) === null ||
                t === void 0 ||
                (e = t.compositionDidChangeCurrentAttributes) === null ||
                e === void 0
                ? void 0
                : e.call(t, this.currentAttributes);
        }
        notifyDelegateOfInsertionAtRange(t) {
            var e, i;
            return (e = this.delegate) === null ||
                e === void 0 ||
                (i = e.compositionDidPerformInsertionAtRange) === null ||
                i === void 0
                ? void 0
                : i.call(e, t);
        }
        translateUTF16PositionFromOffset(t, e) {
            let i = this.document.toUTF16String(),
                r = i.offsetFromUCS2Offset(t);
            return i.offsetToUCS2Offset(r + e);
        }
    };
F.proxyMethod("getSelectionManager().getPointRange"),
    F.proxyMethod("getSelectionManager().setLocationRangeFromPointRange"),
    F.proxyMethod("getSelectionManager().createLocationRangeFromDOMRange"),
    F.proxyMethod("getSelectionManager().locationIsCursorTarget"),
    F.proxyMethod("getSelectionManager().selectionIsExpanded"),
    F.proxyMethod("delegate?.getSelectionManager");
var Et = class extends b {
        constructor(t) {
            super(...arguments),
                (this.composition = t),
                (this.undoEntries = []),
                (this.redoEntries = []);
        }
        recordUndoEntry(t) {
            let { context: e, consolidatable: i } =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : {},
                r = this.undoEntries.slice(-1)[0];
            if (!i || !wn(r, t, e)) {
                let o = this.createEntry({ description: t, context: e });
                this.undoEntries.push(o), (this.redoEntries = []);
            }
        }
        undo() {
            let t = this.undoEntries.pop();
            if (t) {
                let e = this.createEntry(t);
                return (
                    this.redoEntries.push(e),
                    this.composition.loadSnapshot(t.snapshot)
                );
            }
        }
        redo() {
            let t = this.redoEntries.pop();
            if (t) {
                let e = this.createEntry(t);
                return (
                    this.undoEntries.push(e),
                    this.composition.loadSnapshot(t.snapshot)
                );
            }
        }
        canUndo() {
            return this.undoEntries.length > 0;
        }
        canRedo() {
            return this.redoEntries.length > 0;
        }
        createEntry() {
            let { description: t, context: e } =
                arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {};
            return {
                description: t?.toString(),
                context: JSON.stringify(e),
                snapshot: this.composition.getSnapshot(),
            };
        }
    },
    wn = (n, t, e) =>
        n?.description === t?.toString() && n?.context === JSON.stringify(e),
    be = "attachmentGallery",
    qt = class {
        constructor(t) {
            (this.document = t.document),
                (this.selectedRange = t.selectedRange);
        }
        perform() {
            return this.removeBlockAttribute(), this.applyBlockAttribute();
        }
        getSnapshot() {
            return {
                document: this.document,
                selectedRange: this.selectedRange,
            };
        }
        removeBlockAttribute() {
            return this.findRangesOfBlocks().map(
                (t) =>
                    (this.document = this.document.removeAttributeAtRange(
                        be,
                        t,
                    )),
            );
        }
        applyBlockAttribute() {
            let t = 0;
            this.findRangesOfPieces().forEach((e) => {
                e[1] - e[0] > 1 &&
                    ((e[0] += t),
                    (e[1] += t),
                    this.document.getCharacterAtPosition(e[1]) !==
                        `
` &&
                        ((this.document = this.document.insertBlockBreakAtRange(
                            e[1],
                        )),
                        e[1] < this.selectedRange[1] &&
                            this.moveSelectedRangeForward(),
                        e[1]++,
                        t++),
                    e[0] !== 0 &&
                        this.document.getCharacterAtPosition(e[0] - 1) !==
                            `
` &&
                        ((this.document = this.document.insertBlockBreakAtRange(
                            e[0],
                        )),
                        e[0] < this.selectedRange[0] &&
                            this.moveSelectedRangeForward(),
                        e[0]++,
                        t++),
                    (this.document = this.document.applyBlockAttributeAtRange(
                        be,
                        !0,
                        e,
                    )));
            });
        }
        findRangesOfBlocks() {
            return this.document.findRangesForBlockAttribute(be);
        }
        findRangesOfPieces() {
            return this.document.findRangesForTextAttribute("presentation", {
                withValue: "gallery",
            });
        }
        moveSelectedRangeForward() {
            (this.selectedRange[0] += 1), (this.selectedRange[1] += 1);
        }
    },
    Bi = function (n) {
        let t = new qt(n);
        return t.perform(), t.getSnapshot();
    },
    Tn = [Bi],
    Ht = class {
        constructor(t, e, i) {
            (this.insertFiles = this.insertFiles.bind(this)),
                (this.composition = t),
                (this.selectionManager = e),
                (this.element = i),
                (this.undoManager = new Et(this.composition)),
                (this.filters = Tn.slice(0));
        }
        loadDocument(t) {
            return this.loadSnapshot({ document: t, selectedRange: [0, 0] });
        }
        loadHTML() {
            let t =
                    arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : "",
                e = et
                    .parse(t, { referenceElement: this.element })
                    .getDocument();
            return this.loadDocument(e);
        }
        loadJSON(t) {
            let { document: e, selectedRange: i } = t;
            return (
                (e = k.fromJSON(e)),
                this.loadSnapshot({ document: e, selectedRange: i })
            );
        }
        loadSnapshot(t) {
            return (
                (this.undoManager = new Et(this.composition)),
                this.composition.loadSnapshot(t)
            );
        }
        getDocument() {
            return this.composition.document;
        }
        getSelectedDocument() {
            return this.composition.getSelectedDocument();
        }
        getSnapshot() {
            return this.composition.getSnapshot();
        }
        toJSON() {
            return this.getSnapshot();
        }
        deleteInDirection(t) {
            return this.composition.deleteInDirection(t);
        }
        insertAttachment(t) {
            return this.composition.insertAttachment(t);
        }
        insertAttachments(t) {
            return this.composition.insertAttachments(t);
        }
        insertDocument(t) {
            return this.composition.insertDocument(t);
        }
        insertFile(t) {
            return this.composition.insertFile(t);
        }
        insertFiles(t) {
            return this.composition.insertFiles(t);
        }
        insertHTML(t) {
            return this.composition.insertHTML(t);
        }
        insertString(t) {
            return this.composition.insertString(t);
        }
        insertText(t) {
            return this.composition.insertText(t);
        }
        insertLineBreak() {
            return this.composition.insertLineBreak();
        }
        getSelectedRange() {
            return this.composition.getSelectedRange();
        }
        getPosition() {
            return this.composition.getPosition();
        }
        getClientRectAtPosition(t) {
            let e = this.getDocument().locationRangeFromRange([t, t + 1]);
            return this.selectionManager.getClientRectAtLocationRange(e);
        }
        expandSelectionInDirection(t) {
            return this.composition.expandSelectionInDirection(t);
        }
        moveCursorInDirection(t) {
            return this.composition.moveCursorInDirection(t);
        }
        setSelectedRange(t) {
            return this.composition.setSelectedRange(t);
        }
        activateAttribute(t) {
            let e =
                !(arguments.length > 1 && arguments[1] !== void 0) ||
                arguments[1];
            return this.composition.setCurrentAttribute(t, e);
        }
        attributeIsActive(t) {
            return this.composition.hasCurrentAttribute(t);
        }
        canActivateAttribute(t) {
            return this.composition.canSetCurrentAttribute(t);
        }
        deactivateAttribute(t) {
            return this.composition.removeCurrentAttribute(t);
        }
        setHTMLAtributeAtPosition(t, e, i) {
            this.composition.setHTMLAtributeAtPosition(t, e, i);
        }
        canDecreaseNestingLevel() {
            return this.composition.canDecreaseNestingLevel();
        }
        canIncreaseNestingLevel() {
            return this.composition.canIncreaseNestingLevel();
        }
        decreaseNestingLevel() {
            if (this.canDecreaseNestingLevel())
                return this.composition.decreaseNestingLevel();
        }
        increaseNestingLevel() {
            if (this.canIncreaseNestingLevel())
                return this.composition.increaseNestingLevel();
        }
        canRedo() {
            return this.undoManager.canRedo();
        }
        canUndo() {
            return this.undoManager.canUndo();
        }
        recordUndoEntry(t) {
            let { context: e, consolidatable: i } =
                arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {};
            return this.undoManager.recordUndoEntry(t, {
                context: e,
                consolidatable: i,
            });
        }
        redo() {
            if (this.canRedo()) return this.undoManager.redo();
        }
        undo() {
            if (this.canUndo()) return this.undoManager.undo();
        }
    },
    zt = class {
        constructor(t) {
            this.element = t;
        }
        findLocationFromContainerAndOffset(t, e) {
            let { strict: i } =
                    arguments.length > 2 && arguments[2] !== void 0
                        ? arguments[2]
                        : { strict: !0 },
                r = 0,
                o = !1,
                s = { index: 0, offset: 0 },
                a = this.findAttachmentElementParentForNode(t);
            a && ((t = a.parentNode), (e = ae(a)));
            let c = Ft(this.element, { usingFilter: Fi });
            for (; c.nextNode(); ) {
                let l = c.currentNode;
                if (l === t && At(t)) {
                    st(l) || (s.offset += e);
                    break;
                }
                if (l.parentNode === t) {
                    if (r++ === e) break;
                } else if (!J(t, l) && r > 0) break;
                $e(l, { strict: i })
                    ? (o && s.index++, (s.offset = 0), (o = !0))
                    : (s.offset += ve(l));
            }
            return s;
        }
        findContainerAndOffsetFromLocation(t) {
            let e, i;
            if (t.index === 0 && t.offset === 0) {
                for (e = this.element, i = 0; e.firstChild; )
                    if (((e = e.firstChild), le(e))) {
                        i = 1;
                        break;
                    }
                return [e, i];
            }
            let [r, o] = this.findNodeAndOffsetFromLocation(t);
            if (r) {
                if (At(r))
                    ve(r) === 0
                        ? ((e = r.parentNode.parentNode),
                          (i = ae(r.parentNode)),
                          st(r, { name: "right" }) && i++)
                        : ((e = r), (i = t.offset - o));
                else {
                    if (((e = r.parentNode), !$e(r.previousSibling) && !le(e)))
                        for (
                            ;
                            r === e.lastChild &&
                            ((r = e), (e = e.parentNode), !le(e));

                        );
                    (i = ae(r)), t.offset !== 0 && i++;
                }
                return [e, i];
            }
        }
        findNodeAndOffsetFromLocation(t) {
            let e,
                i,
                r = 0;
            for (let o of this.getSignificantNodesForIndex(t.index)) {
                let s = ve(o);
                if (t.offset <= r + s)
                    if (At(o)) {
                        if (((e = o), (i = r), t.offset === i && st(e))) break;
                    } else e || ((e = o), (i = r));
                if (((r += s), r > t.offset)) break;
            }
            return [e, i];
        }
        findAttachmentElementParentForNode(t) {
            for (; t && t !== this.element; ) {
                if ($(t)) return t;
                t = t.parentNode;
            }
        }
        getSignificantNodesForIndex(t) {
            let e = [],
                i = Ft(this.element, { usingFilter: Bn }),
                r = !1;
            for (; i.nextNode(); ) {
                let s = i.currentNode;
                var o;
                if (ot(s)) {
                    if ((o != null ? o++ : (o = 0), o === t)) r = !0;
                    else if (r) break;
                } else r && e.push(s);
            }
            return e;
        }
    },
    ve = function (n) {
        return n.nodeType === Node.TEXT_NODE
            ? st(n)
                ? 0
                : n.textContent.length
            : x(n) === "br" || $(n)
              ? 1
              : 0;
    },
    Bn = function (n) {
        return Fn(n) === NodeFilter.FILTER_ACCEPT
            ? Fi(n)
            : NodeFilter.FILTER_REJECT;
    },
    Fn = function (n) {
        return yi(n) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
    },
    Fi = function (n) {
        return $(n.parentNode)
            ? NodeFilter.FILTER_REJECT
            : NodeFilter.FILTER_ACCEPT;
    },
    _t = class {
        createDOMRangeFromPoint(t) {
            let e,
                { x: i, y: r } = t;
            if (document.caretPositionFromPoint) {
                let { offsetNode: o, offset: s } =
                    document.caretPositionFromPoint(i, r);
                return (e = document.createRange()), e.setStart(o, s), e;
            }
            if (document.caretRangeFromPoint)
                return document.caretRangeFromPoint(i, r);
            if (document.body.createTextRange) {
                let o = xt();
                try {
                    let s = document.body.createTextRange();
                    s.moveToPoint(i, r), s.select();
                } catch {}
                return (e = xt()), Di(o), e;
            }
        }
        getClientRectsForDOMRange(t) {
            let e = Array.from(t.getClientRects());
            return [e[0], e[e.length - 1]];
        }
    },
    I = class extends b {
        constructor(t) {
            super(...arguments),
                (this.didMouseDown = this.didMouseDown.bind(this)),
                (this.selectionDidChange = this.selectionDidChange.bind(this)),
                (this.element = t),
                (this.locationMapper = new zt(this.element)),
                (this.pointMapper = new _t()),
                (this.lockCount = 0),
                f("mousedown", {
                    onElement: this.element,
                    withCallback: this.didMouseDown,
                });
        }
        getLocationRange() {
            let t =
                arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {};
            return t.strict === !1
                ? this.createLocationRangeFromDOMRange(xt())
                : t.ignoreLock
                  ? this.currentLocationRange
                  : this.lockedLocationRange
                    ? this.lockedLocationRange
                    : this.currentLocationRange;
        }
        setLocationRange(t) {
            if (this.lockedLocationRange) return;
            t = m(t);
            let e = this.createDOMRangeFromLocationRange(t);
            e && (Di(e), this.updateCurrentLocationRange(t));
        }
        setLocationRangeFromPointRange(t) {
            t = m(t);
            let e = this.getLocationAtPoint(t[0]),
                i = this.getLocationAtPoint(t[1]);
            this.setLocationRange([e, i]);
        }
        getClientRectAtLocationRange(t) {
            let e = this.createDOMRangeFromLocationRange(t);
            if (e) return this.getClientRectsForDOMRange(e)[1];
        }
        locationIsCursorTarget(t) {
            let e = Array.from(this.findNodeAndOffsetFromLocation(t))[0];
            return st(e);
        }
        lock() {
            this.lockCount++ == 0 &&
                (this.updateCurrentLocationRange(),
                (this.lockedLocationRange = this.getLocationRange()));
        }
        unlock() {
            if (--this.lockCount == 0) {
                let { lockedLocationRange: t } = this;
                if (((this.lockedLocationRange = null), t != null))
                    return this.setLocationRange(t);
            }
        }
        clearSelection() {
            var t;
            return (t = Li()) === null || t === void 0
                ? void 0
                : t.removeAllRanges();
        }
        selectionIsCollapsed() {
            var t;
            return (
                ((t = xt()) === null || t === void 0 ? void 0 : t.collapsed) ===
                !0
            );
        }
        selectionIsExpanded() {
            return !this.selectionIsCollapsed();
        }
        createLocationRangeFromDOMRange(t, e) {
            if (t == null || !this.domRangeWithinElement(t)) return;
            let i = this.findLocationFromContainerAndOffset(
                t.startContainer,
                t.startOffset,
                e,
            );
            if (!i) return;
            let r = t.collapsed
                ? void 0
                : this.findLocationFromContainerAndOffset(
                      t.endContainer,
                      t.endOffset,
                      e,
                  );
            return m([i, r]);
        }
        didMouseDown() {
            return this.pauseTemporarily();
        }
        pauseTemporarily() {
            let t;
            this.paused = !0;
            let e = () => {
                    if (
                        ((this.paused = !1),
                        clearTimeout(i),
                        Array.from(t).forEach((r) => {
                            r.destroy();
                        }),
                        J(document, this.element))
                    )
                        return this.selectionDidChange();
                },
                i = setTimeout(e, 200);
            t = ["mousemove", "keydown"].map((r) =>
                f(r, { onElement: document, withCallback: e }),
            );
        }
        selectionDidChange() {
            if (!this.paused && !Ue(this.element))
                return this.updateCurrentLocationRange();
        }
        updateCurrentLocationRange(t) {
            var e, i;
            if (
                (t ?? (t = this.createLocationRangeFromDOMRange(xt()))) &&
                !Pt(t, this.currentLocationRange)
            )
                return (
                    (this.currentLocationRange = t),
                    (e = this.delegate) === null ||
                    e === void 0 ||
                    (i = e.locationRangeDidChange) === null ||
                    i === void 0
                        ? void 0
                        : i.call(e, this.currentLocationRange.slice(0))
                );
        }
        createDOMRangeFromLocationRange(t) {
            let e = this.findContainerAndOffsetFromLocation(t[0]),
                i = N(t)
                    ? e
                    : this.findContainerAndOffsetFromLocation(t[1]) || e;
            if (e != null && i != null) {
                let r = document.createRange();
                return (
                    r.setStart(...Array.from(e || [])),
                    r.setEnd(...Array.from(i || [])),
                    r
                );
            }
        }
        getLocationAtPoint(t) {
            let e = this.createDOMRangeFromPoint(t);
            var i;
            if (e)
                return (i = this.createLocationRangeFromDOMRange(e)) === null ||
                    i === void 0
                    ? void 0
                    : i[0];
        }
        domRangeWithinElement(t) {
            return t.collapsed
                ? J(this.element, t.startContainer)
                : J(this.element, t.startContainer) &&
                      J(this.element, t.endContainer);
        }
    };
I.proxyMethod("locationMapper.findLocationFromContainerAndOffset"),
    I.proxyMethod("locationMapper.findContainerAndOffsetFromLocation"),
    I.proxyMethod("locationMapper.findNodeAndOffsetFromLocation"),
    I.proxyMethod("pointMapper.createDOMRangeFromPoint"),
    I.proxyMethod("pointMapper.getClientRectsForDOMRange");
var Pi = Object.freeze({
        __proto__: null,
        Attachment: H,
        AttachmentManager: Ut,
        AttachmentPiece: z,
        Block: S,
        Composition: F,
        Document: k,
        Editor: Ht,
        HTMLParser: et,
        HTMLSanitizer: Rt,
        LineBreakInsertion: Vt,
        LocationMapper: zt,
        ManagedAttachment: p,
        Piece: j,
        PointMapper: _t,
        SelectionManager: I,
        SplittableList: ct,
        StringPiece: kt,
        Text: R,
        UndoManager: Et,
    }),
    Pn = Object.freeze({
        __proto__: null,
        ObjectView: M,
        AttachmentView: Ct,
        BlockView: jt,
        DocumentView: lt,
        PieceView: Ot,
        PreviewableAttachmentView: Nt,
        TextView: Mt,
    }),
    { lang: Ae, css: _, keyNames: In } = Lt,
    xe = function (n) {
        return function () {
            let t = n.apply(this, arguments);
            t.do(), this.undos || (this.undos = []), this.undos.push(t.undo);
        };
    },
    Jt = class extends b {
        constructor(t, e, i) {
            let r =
                arguments.length > 3 && arguments[3] !== void 0
                    ? arguments[3]
                    : {};
            super(...arguments),
                E(
                    this,
                    "makeElementMutable",
                    xe(() => ({
                        do: () => {
                            this.element.dataset.trixMutable = !0;
                        },
                        undo: () => delete this.element.dataset.trixMutable,
                    })),
                ),
                E(
                    this,
                    "addToolbar",
                    xe(() => {
                        let o = d({
                            tagName: "div",
                            className: _.attachmentToolbar,
                            data: { trixMutable: !0 },
                            childNodes: d({
                                tagName: "div",
                                className: "trix-button-row",
                                childNodes: d({
                                    tagName: "span",
                                    className:
                                        "trix-button-group trix-button-group--actions",
                                    childNodes: d({
                                        tagName: "button",
                                        className:
                                            "trix-button trix-button--remove",
                                        textContent: Ae.remove,
                                        attributes: { title: Ae.remove },
                                        data: { trixAction: "remove" },
                                    }),
                                }),
                            }),
                        });
                        return (
                            this.attachment.isPreviewable() &&
                                o.appendChild(
                                    d({
                                        tagName: "div",
                                        className:
                                            _.attachmentMetadataContainer,
                                        childNodes: d({
                                            tagName: "span",
                                            className: _.attachmentMetadata,
                                            childNodes: [
                                                d({
                                                    tagName: "span",
                                                    className: _.attachmentName,
                                                    textContent:
                                                        this.attachment.getFilename(),
                                                    attributes: {
                                                        title: this.attachment.getFilename(),
                                                    },
                                                }),
                                                d({
                                                    tagName: "span",
                                                    className: _.attachmentSize,
                                                    textContent:
                                                        this.attachment.getFormattedFilesize(),
                                                }),
                                            ],
                                        }),
                                    }),
                                ),
                            f("click", {
                                onElement: o,
                                withCallback: this.didClickToolbar,
                            }),
                            f("click", {
                                onElement: o,
                                matchingSelector: "[data-trix-action]",
                                withCallback: this.didClickActionButton,
                            }),
                            bt("trix-attachment-before-toolbar", {
                                onElement: this.element,
                                attributes: {
                                    toolbar: o,
                                    attachment: this.attachment,
                                },
                            }),
                            {
                                do: () => this.element.appendChild(o),
                                undo: () => q(o),
                            }
                        );
                    }),
                ),
                E(
                    this,
                    "installCaptionEditor",
                    xe(() => {
                        let o = d({
                            tagName: "textarea",
                            className: _.attachmentCaptionEditor,
                            attributes: { placeholder: Ae.captionPlaceholder },
                            data: { trixMutable: !0 },
                        });
                        o.value = this.attachmentPiece.getCaption();
                        let s = o.cloneNode();
                        s.classList.add("trix-autoresize-clone"),
                            (s.tabIndex = -1);
                        let a = function () {
                            (s.value = o.value),
                                (o.style.height = s.scrollHeight + "px");
                        };
                        f("input", { onElement: o, withCallback: a }),
                            f("input", {
                                onElement: o,
                                withCallback: this.didInputCaption,
                            }),
                            f("keydown", {
                                onElement: o,
                                withCallback: this.didKeyDownCaption,
                            }),
                            f("change", {
                                onElement: o,
                                withCallback: this.didChangeCaption,
                            }),
                            f("blur", {
                                onElement: o,
                                withCallback: this.didBlurCaption,
                            });
                        let c = this.element.querySelector("figcaption"),
                            l = c.cloneNode();
                        return {
                            do: () => {
                                if (
                                    ((c.style.display = "none"),
                                    l.appendChild(o),
                                    l.appendChild(s),
                                    l.classList.add(
                                        "".concat(
                                            _.attachmentCaption,
                                            "--editing",
                                        ),
                                    ),
                                    c.parentElement.insertBefore(l, c),
                                    a(),
                                    this.options.editCaption)
                                )
                                    return He(() => o.focus());
                            },
                            undo() {
                                q(l), (c.style.display = null);
                            },
                        };
                    }),
                ),
                (this.didClickToolbar = this.didClickToolbar.bind(this)),
                (this.didClickActionButton =
                    this.didClickActionButton.bind(this)),
                (this.didKeyDownCaption = this.didKeyDownCaption.bind(this)),
                (this.didInputCaption = this.didInputCaption.bind(this)),
                (this.didChangeCaption = this.didChangeCaption.bind(this)),
                (this.didBlurCaption = this.didBlurCaption.bind(this)),
                (this.attachmentPiece = t),
                (this.element = e),
                (this.container = i),
                (this.options = r),
                (this.attachment = this.attachmentPiece.attachment),
                x(this.element) === "a" &&
                    (this.element = this.element.firstChild),
                this.install();
        }
        install() {
            this.makeElementMutable(),
                this.addToolbar(),
                this.attachment.isPreviewable() && this.installCaptionEditor();
        }
        uninstall() {
            var t;
            let e = this.undos.pop();
            for (this.savePendingCaption(); e; ) e(), (e = this.undos.pop());
            (t = this.delegate) === null ||
                t === void 0 ||
                t.didUninstallAttachmentEditor(this);
        }
        savePendingCaption() {
            if (this.pendingCaption != null) {
                let o = this.pendingCaption;
                var t, e, i, r;
                (this.pendingCaption = null),
                    o
                        ? (t = this.delegate) === null ||
                          t === void 0 ||
                          (e =
                              t.attachmentEditorDidRequestUpdatingAttributesForAttachment) ===
                              null ||
                          e === void 0 ||
                          e.call(t, { caption: o }, this.attachment)
                        : (i = this.delegate) === null ||
                          i === void 0 ||
                          (r =
                              i.attachmentEditorDidRequestRemovingAttributeForAttachment) ===
                              null ||
                          r === void 0 ||
                          r.call(i, "caption", this.attachment);
            }
        }
        didClickToolbar(t) {
            return t.preventDefault(), t.stopPropagation();
        }
        didClickActionButton(t) {
            var e;
            if (t.target.getAttribute("data-trix-action") === "remove")
                return (e = this.delegate) === null || e === void 0
                    ? void 0
                    : e.attachmentEditorDidRequestRemovalOfAttachment(
                          this.attachment,
                      );
        }
        didKeyDownCaption(t) {
            var e, i;
            if (In[t.keyCode] === "return")
                return (
                    t.preventDefault(),
                    this.savePendingCaption(),
                    (e = this.delegate) === null ||
                    e === void 0 ||
                    (i = e.attachmentEditorDidRequestDeselectingAttachment) ===
                        null ||
                    i === void 0
                        ? void 0
                        : i.call(e, this.attachment)
                );
        }
        didInputCaption(t) {
            this.pendingCaption = t.target.value.replace(/\s/g, " ").trim();
        }
        didChangeCaption(t) {
            return this.savePendingCaption();
        }
        didBlurCaption(t) {
            return this.savePendingCaption();
        }
    },
    Kt = class extends b {
        constructor(t, e) {
            super(...arguments),
                (this.didFocus = this.didFocus.bind(this)),
                (this.didBlur = this.didBlur.bind(this)),
                (this.didClickAttachment = this.didClickAttachment.bind(this)),
                (this.element = t),
                (this.composition = e),
                (this.documentView = new lt(this.composition.document, {
                    element: this.element,
                })),
                f("focus", {
                    onElement: this.element,
                    withCallback: this.didFocus,
                }),
                f("blur", {
                    onElement: this.element,
                    withCallback: this.didBlur,
                }),
                f("click", {
                    onElement: this.element,
                    matchingSelector: "a[contenteditable=false]",
                    preventDefault: !0,
                }),
                f("mousedown", {
                    onElement: this.element,
                    matchingSelector: K,
                    withCallback: this.didClickAttachment,
                }),
                f("click", {
                    onElement: this.element,
                    matchingSelector: "a".concat(K),
                    preventDefault: !0,
                });
        }
        didFocus(t) {
            var e;
            let i = () => {
                var r, o;
                if (!this.focused)
                    return (
                        (this.focused = !0),
                        (r = this.delegate) === null ||
                        r === void 0 ||
                        (o = r.compositionControllerDidFocus) === null ||
                        o === void 0
                            ? void 0
                            : o.call(r)
                    );
            };
            return (
                ((e = this.blurPromise) === null || e === void 0
                    ? void 0
                    : e.then(i)) || i()
            );
        }
        didBlur(t) {
            this.blurPromise = new Promise((e) =>
                He(() => {
                    var i, r;
                    return (
                        Ue(this.element) ||
                            ((this.focused = null),
                            (i = this.delegate) === null ||
                                i === void 0 ||
                                (r = i.compositionControllerDidBlur) === null ||
                                r === void 0 ||
                                r.call(i)),
                        (this.blurPromise = null),
                        e()
                    );
                }),
            );
        }
        didClickAttachment(t, e) {
            var i, r;
            let o = this.findAttachmentForElement(e),
                s = !!V(t.target, { matchingSelector: "figcaption" });
            return (i = this.delegate) === null ||
                i === void 0 ||
                (r = i.compositionControllerDidSelectAttachment) === null ||
                r === void 0
                ? void 0
                : r.call(i, o, { editCaption: s });
        }
        getSerializableElement() {
            return this.isEditingAttachment()
                ? this.documentView.shadowElement
                : this.element;
        }
        render() {
            var t, e, i, r, o, s;
            return (
                this.revision !== this.composition.revision &&
                    (this.documentView.setDocument(this.composition.document),
                    this.documentView.render(),
                    (this.revision = this.composition.revision)),
                this.canSyncDocumentView() &&
                    !this.documentView.isSynced() &&
                    ((i = this.delegate) === null ||
                        i === void 0 ||
                        (r = i.compositionControllerWillSyncDocumentView) ===
                            null ||
                        r === void 0 ||
                        r.call(i),
                    this.documentView.sync(),
                    (o = this.delegate) === null ||
                        o === void 0 ||
                        (s = o.compositionControllerDidSyncDocumentView) ===
                            null ||
                        s === void 0 ||
                        s.call(o)),
                (t = this.delegate) === null ||
                t === void 0 ||
                (e = t.compositionControllerDidRender) === null ||
                e === void 0
                    ? void 0
                    : e.call(t)
            );
        }
        rerenderViewForObject(t) {
            return this.invalidateViewForObject(t), this.render();
        }
        invalidateViewForObject(t) {
            return this.documentView.invalidateViewForObject(t);
        }
        isViewCachingEnabled() {
            return this.documentView.isViewCachingEnabled();
        }
        enableViewCaching() {
            return this.documentView.enableViewCaching();
        }
        disableViewCaching() {
            return this.documentView.disableViewCaching();
        }
        refreshViewCache() {
            return this.documentView.garbageCollectCachedViews();
        }
        isEditingAttachment() {
            return !!this.attachmentEditor;
        }
        installAttachmentEditorForAttachment(t, e) {
            var i;
            if (
                ((i = this.attachmentEditor) === null || i === void 0
                    ? void 0
                    : i.attachment) === t
            )
                return;
            let r = this.documentView.findElementForObject(t);
            if (!r) return;
            this.uninstallAttachmentEditor();
            let o =
                this.composition.document.getAttachmentPieceForAttachment(t);
            (this.attachmentEditor = new Jt(o, r, this.element, e)),
                (this.attachmentEditor.delegate = this);
        }
        uninstallAttachmentEditor() {
            var t;
            return (t = this.attachmentEditor) === null || t === void 0
                ? void 0
                : t.uninstall();
        }
        didUninstallAttachmentEditor() {
            return (this.attachmentEditor = null), this.render();
        }
        attachmentEditorDidRequestUpdatingAttributesForAttachment(t, e) {
            var i, r;
            return (
                (i = this.delegate) === null ||
                    i === void 0 ||
                    (r = i.compositionControllerWillUpdateAttachment) ===
                        null ||
                    r === void 0 ||
                    r.call(i, e),
                this.composition.updateAttributesForAttachment(t, e)
            );
        }
        attachmentEditorDidRequestRemovingAttributeForAttachment(t, e) {
            var i, r;
            return (
                (i = this.delegate) === null ||
                    i === void 0 ||
                    (r = i.compositionControllerWillUpdateAttachment) ===
                        null ||
                    r === void 0 ||
                    r.call(i, e),
                this.composition.removeAttributeForAttachment(t, e)
            );
        }
        attachmentEditorDidRequestRemovalOfAttachment(t) {
            var e, i;
            return (e = this.delegate) === null ||
                e === void 0 ||
                (i = e.compositionControllerDidRequestRemovalOfAttachment) ===
                    null ||
                i === void 0
                ? void 0
                : i.call(e, t);
        }
        attachmentEditorDidRequestDeselectingAttachment(t) {
            var e, i;
            return (e = this.delegate) === null ||
                e === void 0 ||
                (i = e.compositionControllerDidRequestDeselectingAttachment) ===
                    null ||
                i === void 0
                ? void 0
                : i.call(e, t);
        }
        canSyncDocumentView() {
            return !this.isEditingAttachment();
        }
        findAttachmentForElement(t) {
            return this.composition.document.getAttachmentById(
                parseInt(t.dataset.trixId, 10),
            );
        }
    },
    $t = class extends b {},
    Ii = "data-trix-mutable",
    Nn = "[".concat(Ii, "]"),
    On = {
        attributes: !0,
        childList: !0,
        characterData: !0,
        characterDataOldValue: !0,
        subtree: !0,
    },
    Gt = class extends b {
        constructor(t) {
            super(t),
                (this.didMutate = this.didMutate.bind(this)),
                (this.element = t),
                (this.observer = new window.MutationObserver(this.didMutate)),
                this.start();
        }
        start() {
            return this.reset(), this.observer.observe(this.element, On);
        }
        stop() {
            return this.observer.disconnect();
        }
        didMutate(t) {
            var e, i;
            if (
                (this.mutations.push(
                    ...Array.from(this.findSignificantMutations(t) || []),
                ),
                this.mutations.length)
            )
                return (
                    (e = this.delegate) === null ||
                        e === void 0 ||
                        (i = e.elementDidMutate) === null ||
                        i === void 0 ||
                        i.call(e, this.getMutationSummary()),
                    this.reset()
                );
        }
        reset() {
            this.mutations = [];
        }
        findSignificantMutations(t) {
            return t.filter((e) => this.mutationIsSignificant(e));
        }
        mutationIsSignificant(t) {
            if (this.nodeIsMutable(t.target)) return !1;
            for (let e of Array.from(this.nodesModifiedByMutation(t)))
                if (this.nodeIsSignificant(e)) return !0;
            return !1;
        }
        nodeIsSignificant(t) {
            return t !== this.element && !this.nodeIsMutable(t) && !yi(t);
        }
        nodeIsMutable(t) {
            return V(t, { matchingSelector: Nn });
        }
        nodesModifiedByMutation(t) {
            let e = [];
            switch (t.type) {
                case "attributes":
                    t.attributeName !== Ii && e.push(t.target);
                    break;
                case "characterData":
                    e.push(t.target.parentNode), e.push(t.target);
                    break;
                case "childList":
                    e.push(...Array.from(t.addedNodes || [])),
                        e.push(...Array.from(t.removedNodes || []));
            }
            return e;
        }
        getMutationSummary() {
            return this.getTextMutationSummary();
        }
        getTextMutationSummary() {
            let { additions: t, deletions: e } =
                    this.getTextChangesFromCharacterData(),
                i = this.getTextChangesFromChildList();
            Array.from(i.additions).forEach((a) => {
                Array.from(t).includes(a) || t.push(a);
            }),
                e.push(...Array.from(i.deletions || []));
            let r = {},
                o = t.join("");
            o && (r.textAdded = o);
            let s = e.join("");
            return s && (r.textDeleted = s), r;
        }
        getMutationsByType(t) {
            return Array.from(this.mutations).filter((e) => e.type === t);
        }
        getTextChangesFromChildList() {
            let t,
                e,
                i = [],
                r = [];
            return (
                Array.from(this.getMutationsByType("childList")).forEach(
                    (o) => {
                        i.push(...Array.from(o.addedNodes || [])),
                            r.push(...Array.from(o.removedNodes || []));
                    },
                ),
                i.length === 0 && r.length === 1 && ot(r[0])
                    ? ((t = []),
                      (e = [
                          `
`,
                      ]))
                    : ((t = Ie(i)), (e = Ie(r))),
                {
                    additions: t.filter((o, s) => o !== e[s]).map(ft),
                    deletions: e.filter((o, s) => o !== t[s]).map(ft),
                }
            );
        }
        getTextChangesFromCharacterData() {
            let t,
                e,
                i = this.getMutationsByType("characterData");
            if (i.length) {
                let r = i[0],
                    o = i[i.length - 1],
                    s = (function (a, c) {
                        let l, u;
                        return (
                            (a = Z.box(a)),
                            (c = Z.box(c)).length < a.length
                                ? ([u, l] = ti(a, c))
                                : ([l, u] = ti(c, a)),
                            { added: l, removed: u }
                        );
                    })(ft(r.oldValue), ft(o.target.data));
                (t = s.added), (e = s.removed);
            }
            return { additions: t ? [t] : [], deletions: e ? [e] : [] };
        }
    },
    Ie = function () {
        let n =
                arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : [],
            t = [];
        for (let e of Array.from(n))
            switch (e.nodeType) {
                case Node.TEXT_NODE:
                    t.push(e.data);
                    break;
                case Node.ELEMENT_NODE:
                    x(e) === "br"
                        ? t.push(`
`)
                        : t.push(...Array.from(Ie(e.childNodes) || []));
            }
        return t;
    },
    Xt = class extends at {
        constructor(t) {
            super(...arguments), (this.file = t);
        }
        perform(t) {
            let e = new FileReader();
            return (
                (e.onerror = () => t(!1)),
                (e.onload = () => {
                    e.onerror = null;
                    try {
                        e.abort();
                    } catch {}
                    return t(!0, this.file);
                }),
                e.readAsArrayBuffer(this.file)
            );
        }
    },
    Ne = class {
        constructor(t) {
            this.element = t;
        }
        shouldIgnore(t) {
            return (
                !!St.samsungAndroid &&
                ((this.previousEvent = this.event),
                (this.event = t),
                this.checkSamsungKeyboardBuggyModeStart(),
                this.checkSamsungKeyboardBuggyModeEnd(),
                this.buggyMode)
            );
        }
        checkSamsungKeyboardBuggyModeStart() {
            this.insertingLongTextAfterUnidentifiedChar() &&
                Mn(this.element.innerText, this.event.data) &&
                ((this.buggyMode = !0), this.event.preventDefault());
        }
        checkSamsungKeyboardBuggyModeEnd() {
            this.buggyMode &&
                this.event.inputType !== "insertText" &&
                (this.buggyMode = !1);
        }
        insertingLongTextAfterUnidentifiedChar() {
            var t;
            return (
                this.isBeforeInputInsertText() &&
                this.previousEventWasUnidentifiedKeydown() &&
                ((t = this.event.data) === null || t === void 0
                    ? void 0
                    : t.length) > 50
            );
        }
        isBeforeInputInsertText() {
            return (
                this.event.type === "beforeinput" &&
                this.event.inputType === "insertText"
            );
        }
        previousEventWasUnidentifiedKeydown() {
            var t, e;
            return (
                ((t = this.previousEvent) === null || t === void 0
                    ? void 0
                    : t.type) === "keydown" &&
                ((e = this.previousEvent) === null || e === void 0
                    ? void 0
                    : e.key) === "Unidentified"
            );
        }
    },
    Mn = (n, t) => gi(n) === gi(t),
    jn = new RegExp(
        "(".concat("\uFFFC", "|").concat(te, "|").concat(U, "|\\s)+"),
        "g",
    ),
    gi = (n) => n.replace(jn, " ").trim(),
    ut = class extends b {
        constructor(t) {
            super(...arguments),
                (this.element = t),
                (this.mutationObserver = new Gt(this.element)),
                (this.mutationObserver.delegate = this),
                (this.flakyKeyboardDetector = new Ne(this.element));
            for (let e in this.constructor.events)
                f(e, {
                    onElement: this.element,
                    withCallback: this.handlerFor(e),
                });
        }
        elementDidMutate(t) {}
        editorWillSyncDocumentView() {
            return this.mutationObserver.stop();
        }
        editorDidSyncDocumentView() {
            return this.mutationObserver.start();
        }
        requestRender() {
            var t, e;
            return (t = this.delegate) === null ||
                t === void 0 ||
                (e = t.inputControllerDidRequestRender) === null ||
                e === void 0
                ? void 0
                : e.call(t);
        }
        requestReparse() {
            var t, e;
            return (
                (t = this.delegate) === null ||
                    t === void 0 ||
                    (e = t.inputControllerDidRequestReparse) === null ||
                    e === void 0 ||
                    e.call(t),
                this.requestRender()
            );
        }
        attachFiles(t) {
            let e = Array.from(t).map((i) => new Xt(i));
            return Promise.all(e).then((i) => {
                this.handleInput(function () {
                    var r, o;
                    return (
                        (r = this.delegate) === null ||
                            r === void 0 ||
                            r.inputControllerWillAttachFiles(),
                        (o = this.responder) === null ||
                            o === void 0 ||
                            o.insertFiles(i),
                        this.requestRender()
                    );
                });
            });
        }
        handlerFor(t) {
            return (e) => {
                e.defaultPrevented ||
                    this.handleInput(() => {
                        if (!Ue(this.element)) {
                            if (this.flakyKeyboardDetector.shouldIgnore(e))
                                return;
                            (this.eventName = t),
                                this.constructor.events[t].call(this, e);
                        }
                    });
            };
        }
        handleInput(t) {
            try {
                var e;
                (e = this.delegate) === null ||
                    e === void 0 ||
                    e.inputControllerWillHandleInput(),
                    t.call(this);
            } finally {
                var i;
                (i = this.delegate) === null ||
                    i === void 0 ||
                    i.inputControllerDidHandleInput();
            }
        }
        createLinkHTML(t, e) {
            let i = document.createElement("a");
            return (i.href = t), (i.textContent = e || t), i.outerHTML;
        }
    },
    ye;
E(ut, "events", {});
var { browser: Wn, keyNames: Ni } = Lt,
    Un = 0,
    w = class extends ut {
        constructor() {
            super(...arguments), this.resetInputSummary();
        }
        setInputSummary() {
            let t =
                arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {};
            this.inputSummary.eventName = this.eventName;
            for (let e in t) {
                let i = t[e];
                this.inputSummary[e] = i;
            }
            return this.inputSummary;
        }
        resetInputSummary() {
            this.inputSummary = {};
        }
        reset() {
            return this.resetInputSummary(), tt.reset();
        }
        elementDidMutate(t) {
            var e, i;
            return this.isComposing()
                ? (e = this.delegate) === null ||
                  e === void 0 ||
                  (i = e.inputControllerDidAllowUnhandledInput) === null ||
                  i === void 0
                    ? void 0
                    : i.call(e)
                : this.handleInput(function () {
                      return (
                          this.mutationIsSignificant(t) &&
                              (this.mutationIsExpected(t)
                                  ? this.requestRender()
                                  : this.requestReparse()),
                          this.reset()
                      );
                  });
        }
        mutationIsExpected(t) {
            let { textAdded: e, textDeleted: i } = t;
            if (this.inputSummary.preferDocument) return !0;
            let r =
                    e != null
                        ? e === this.inputSummary.textAdded
                        : !this.inputSummary.textAdded,
                o =
                    i != null
                        ? this.inputSummary.didDelete
                        : !this.inputSummary.didDelete,
                s =
                    [
                        `
`,
                        ` 
`,
                    ].includes(e) && !r,
                a =
                    i ===
                        `
` && !o;
            if ((s && !a) || (a && !s)) {
                let l = this.getSelectedRange();
                if (l) {
                    var c;
                    let u = s
                        ? e.replace(/\n$/, "").length || -1
                        : e?.length || 1;
                    if (
                        (c = this.responder) !== null &&
                        c !== void 0 &&
                        c.positionIsBlockBreak(l[1] + u)
                    )
                        return !0;
                }
            }
            return r && o;
        }
        mutationIsSignificant(t) {
            var e;
            let i = Object.keys(t).length > 0,
                r =
                    ((e = this.compositionInput) === null || e === void 0
                        ? void 0
                        : e.getEndData()) === "";
            return i || !r;
        }
        getCompositionInput() {
            if (this.isComposing()) return this.compositionInput;
            this.compositionInput = new B(this);
        }
        isComposing() {
            return this.compositionInput && !this.compositionInput.isEnded();
        }
        deleteInDirection(t, e) {
            var i;
            return ((i = this.responder) === null || i === void 0
                ? void 0
                : i.deleteInDirection(t)) !== !1
                ? this.setInputSummary({ didDelete: !0 })
                : e
                  ? (e.preventDefault(), this.requestRender())
                  : void 0;
        }
        serializeSelectionToDataTransfer(t) {
            var e;
            if (
                !(function (r) {
                    if (r == null || !r.setData) return !1;
                    for (let o in Ye) {
                        let s = Ye[o];
                        try {
                            if ((r.setData(o, s), !r.getData(o) === s))
                                return !1;
                        } catch {
                            return !1;
                        }
                    }
                    return !0;
                })(t)
            )
                return;
            let i =
                (e = this.responder) === null || e === void 0
                    ? void 0
                    : e.getSelectedDocument().toSerializableDocument();
            return (
                t.setData("application/x-trix-document", JSON.stringify(i)),
                t.setData("text/html", lt.render(i).innerHTML),
                t.setData("text/plain", i.toString().replace(/\n$/, "")),
                !0
            );
        }
        canAcceptDataTransfer(t) {
            let e = {};
            return (
                Array.from(t?.types || []).forEach((i) => {
                    e[i] = !0;
                }),
                e.Files ||
                    e["application/x-trix-document"] ||
                    e["text/html"] ||
                    e["text/plain"]
            );
        }
        getPastedHTMLUsingHiddenElement(t) {
            let e = this.getSelectedRange(),
                i = {
                    position: "absolute",
                    left: "".concat(window.pageXOffset, "px"),
                    top: "".concat(window.pageYOffset, "px"),
                    opacity: 0,
                },
                r = d({ style: i, tagName: "div", editable: !0 });
            return (
                document.body.appendChild(r),
                r.focus(),
                requestAnimationFrame(() => {
                    let o = r.innerHTML;
                    return q(r), this.setSelectedRange(e), t(o);
                })
            );
        }
    };
E(w, "events", {
    keydown(n) {
        this.isComposing() || this.resetInputSummary(),
            (this.inputSummary.didInput = !0);
        let t = Ni[n.keyCode];
        if (t) {
            var e;
            let r = this.keys;
            ["ctrl", "alt", "shift", "meta"].forEach((o) => {
                var s;
                n["".concat(o, "Key")] &&
                    (o === "ctrl" && (o = "control"),
                    (r = (s = r) === null || s === void 0 ? void 0 : s[o]));
            }),
                ((e = r) === null || e === void 0 ? void 0 : e[t]) != null &&
                    (this.setInputSummary({ keyName: t }),
                    tt.reset(),
                    r[t].call(this, n));
        }
        if (Ei(n)) {
            let r = String.fromCharCode(n.keyCode).toLowerCase();
            if (r) {
                var i;
                let o = ["alt", "shift"]
                    .map((s) => {
                        if (n["".concat(s, "Key")]) return s;
                    })
                    .filter((s) => s);
                o.push(r),
                    (i = this.delegate) !== null &&
                        i !== void 0 &&
                        i.inputControllerDidReceiveKeyboardCommand(o) &&
                        n.preventDefault();
            }
        }
    },
    keypress(n) {
        if (
            this.inputSummary.eventName != null ||
            n.metaKey ||
            (n.ctrlKey && !n.altKey)
        )
            return;
        let t = Hn(n);
        var e, i;
        return t
            ? ((e = this.delegate) === null ||
                  e === void 0 ||
                  e.inputControllerWillPerformTyping(),
              (i = this.responder) === null ||
                  i === void 0 ||
                  i.insertString(t),
              this.setInputSummary({
                  textAdded: t,
                  didDelete: this.selectionIsExpanded(),
              }))
            : void 0;
    },
    textInput(n) {
        let { data: t } = n,
            { textAdded: e } = this.inputSummary;
        if (e && e !== t && e.toUpperCase() === t) {
            var i;
            let r = this.getSelectedRange();
            return (
                this.setSelectedRange([r[0], r[1] + e.length]),
                (i = this.responder) === null ||
                    i === void 0 ||
                    i.insertString(t),
                this.setInputSummary({ textAdded: t }),
                this.setSelectedRange(r)
            );
        }
    },
    dragenter(n) {
        n.preventDefault();
    },
    dragstart(n) {
        var t, e;
        return (
            this.serializeSelectionToDataTransfer(n.dataTransfer),
            (this.draggedRange = this.getSelectedRange()),
            (t = this.delegate) === null ||
            t === void 0 ||
            (e = t.inputControllerDidStartDrag) === null ||
            e === void 0
                ? void 0
                : e.call(t)
        );
    },
    dragover(n) {
        if (this.draggedRange || this.canAcceptDataTransfer(n.dataTransfer)) {
            n.preventDefault();
            let i = { x: n.clientX, y: n.clientY };
            var t, e;
            if (!ht(i, this.draggingPoint))
                return (
                    (this.draggingPoint = i),
                    (t = this.delegate) === null ||
                    t === void 0 ||
                    (e = t.inputControllerDidReceiveDragOverPoint) === null ||
                    e === void 0
                        ? void 0
                        : e.call(t, this.draggingPoint)
                );
        }
    },
    dragend(n) {
        var t, e;
        (t = this.delegate) === null ||
            t === void 0 ||
            (e = t.inputControllerDidCancelDrag) === null ||
            e === void 0 ||
            e.call(t),
            (this.draggedRange = null),
            (this.draggingPoint = null);
    },
    drop(n) {
        var t, e;
        n.preventDefault();
        let i =
                (t = n.dataTransfer) === null || t === void 0
                    ? void 0
                    : t.files,
            r = n.dataTransfer.getData("application/x-trix-document"),
            o = { x: n.clientX, y: n.clientY };
        if (
            ((e = this.responder) === null ||
                e === void 0 ||
                e.setLocationRangeFromPointRange(o),
            i != null && i.length)
        )
            this.attachFiles(i);
        else if (this.draggedRange) {
            var s, a;
            (s = this.delegate) === null ||
                s === void 0 ||
                s.inputControllerWillMoveText(),
                (a = this.responder) === null ||
                    a === void 0 ||
                    a.moveTextFromRange(this.draggedRange),
                (this.draggedRange = null),
                this.requestRender();
        } else if (r) {
            var c;
            let l = k.fromJSONString(r);
            (c = this.responder) === null ||
                c === void 0 ||
                c.insertDocument(l),
                this.requestRender();
        }
        (this.draggedRange = null), (this.draggingPoint = null);
    },
    cut(n) {
        var t, e;
        if (
            (t = this.responder) !== null &&
            t !== void 0 &&
            t.selectionIsExpanded() &&
            (this.serializeSelectionToDataTransfer(n.clipboardData) &&
                n.preventDefault(),
            (e = this.delegate) === null ||
                e === void 0 ||
                e.inputControllerWillCutText(),
            this.deleteInDirection("backward"),
            n.defaultPrevented)
        )
            return this.requestRender();
    },
    copy(n) {
        var t;
        (t = this.responder) !== null &&
            t !== void 0 &&
            t.selectionIsExpanded() &&
            this.serializeSelectionToDataTransfer(n.clipboardData) &&
            n.preventDefault();
    },
    paste(n) {
        let t = n.clipboardData || n.testClipboardData,
            e = { clipboard: t };
        if (!t || zn(n))
            return void this.getPastedHTMLUsingHiddenElement((D) => {
                var nt, re, oe;
                return (
                    (e.type = "text/html"),
                    (e.html = D),
                    (nt = this.delegate) === null ||
                        nt === void 0 ||
                        nt.inputControllerWillPaste(e),
                    (re = this.responder) === null ||
                        re === void 0 ||
                        re.insertHTML(e.html),
                    this.requestRender(),
                    (oe = this.delegate) === null || oe === void 0
                        ? void 0
                        : oe.inputControllerDidPaste(e)
                );
            });
        let i = t.getData("URL"),
            r = t.getData("text/html"),
            o = t.getData("public.url-name");
        if (i) {
            var s, a, c;
            let D;
            (e.type = "text/html"),
                (D = o ? _e(o).trim() : i),
                (e.html = this.createLinkHTML(i, D)),
                (s = this.delegate) === null ||
                    s === void 0 ||
                    s.inputControllerWillPaste(e),
                this.setInputSummary({
                    textAdded: D,
                    didDelete: this.selectionIsExpanded(),
                }),
                (a = this.responder) === null ||
                    a === void 0 ||
                    a.insertHTML(e.html),
                this.requestRender(),
                (c = this.delegate) === null ||
                    c === void 0 ||
                    c.inputControllerDidPaste(e);
        } else if (Ri(t)) {
            var l, u, g;
            (e.type = "text/plain"),
                (e.string = t.getData("text/plain")),
                (l = this.delegate) === null ||
                    l === void 0 ||
                    l.inputControllerWillPaste(e),
                this.setInputSummary({
                    textAdded: e.string,
                    didDelete: this.selectionIsExpanded(),
                }),
                (u = this.responder) === null ||
                    u === void 0 ||
                    u.insertString(e.string),
                this.requestRender(),
                (g = this.delegate) === null ||
                    g === void 0 ||
                    g.inputControllerDidPaste(e);
        } else if (r) {
            var A, L, dt;
            (e.type = "text/html"),
                (e.html = r),
                (A = this.delegate) === null ||
                    A === void 0 ||
                    A.inputControllerWillPaste(e),
                (L = this.responder) === null ||
                    L === void 0 ||
                    L.insertHTML(e.html),
                this.requestRender(),
                (dt = this.delegate) === null ||
                    dt === void 0 ||
                    dt.inputControllerDidPaste(e);
        } else if (Array.from(t.types).includes("Files")) {
            var P, it;
            let D =
                (P = t.items) === null ||
                P === void 0 ||
                (P = P[0]) === null ||
                P === void 0 ||
                (it = P.getAsFile) === null ||
                it === void 0
                    ? void 0
                    : it.call(P);
            if (D) {
                var gt, ie, ne;
                let nt = Vn(D);
                !D.name &&
                    nt &&
                    (D.name = "pasted-file-".concat(++Un, ".").concat(nt)),
                    (e.type = "File"),
                    (e.file = D),
                    (gt = this.delegate) === null ||
                        gt === void 0 ||
                        gt.inputControllerWillAttachFiles(),
                    (ie = this.responder) === null ||
                        ie === void 0 ||
                        ie.insertFile(e.file),
                    this.requestRender(),
                    (ne = this.delegate) === null ||
                        ne === void 0 ||
                        ne.inputControllerDidPaste(e);
            }
        }
        n.preventDefault();
    },
    compositionstart(n) {
        return this.getCompositionInput().start(n.data);
    },
    compositionupdate(n) {
        return this.getCompositionInput().update(n.data);
    },
    compositionend(n) {
        return this.getCompositionInput().end(n.data);
    },
    beforeinput(n) {
        this.inputSummary.didInput = !0;
    },
    input(n) {
        return (this.inputSummary.didInput = !0), n.stopPropagation();
    },
}),
    E(w, "keys", {
        backspace(n) {
            var t;
            return (
                (t = this.delegate) === null ||
                    t === void 0 ||
                    t.inputControllerWillPerformTyping(),
                this.deleteInDirection("backward", n)
            );
        },
        delete(n) {
            var t;
            return (
                (t = this.delegate) === null ||
                    t === void 0 ||
                    t.inputControllerWillPerformTyping(),
                this.deleteInDirection("forward", n)
            );
        },
        return(n) {
            var t, e;
            return (
                this.setInputSummary({ preferDocument: !0 }),
                (t = this.delegate) === null ||
                    t === void 0 ||
                    t.inputControllerWillPerformTyping(),
                (e = this.responder) === null || e === void 0
                    ? void 0
                    : e.insertLineBreak()
            );
        },
        tab(n) {
            var t, e;
            (t = this.responder) !== null &&
                t !== void 0 &&
                t.canIncreaseNestingLevel() &&
                ((e = this.responder) === null ||
                    e === void 0 ||
                    e.increaseNestingLevel(),
                this.requestRender(),
                n.preventDefault());
        },
        left(n) {
            var t;
            if (this.selectionIsInCursorTarget())
                return (
                    n.preventDefault(),
                    (t = this.responder) === null || t === void 0
                        ? void 0
                        : t.moveCursorInDirection("backward")
                );
        },
        right(n) {
            var t;
            if (this.selectionIsInCursorTarget())
                return (
                    n.preventDefault(),
                    (t = this.responder) === null || t === void 0
                        ? void 0
                        : t.moveCursorInDirection("forward")
                );
        },
        control: {
            d(n) {
                var t;
                return (
                    (t = this.delegate) === null ||
                        t === void 0 ||
                        t.inputControllerWillPerformTyping(),
                    this.deleteInDirection("forward", n)
                );
            },
            h(n) {
                var t;
                return (
                    (t = this.delegate) === null ||
                        t === void 0 ||
                        t.inputControllerWillPerformTyping(),
                    this.deleteInDirection("backward", n)
                );
            },
            o(n) {
                var t, e;
                return (
                    n.preventDefault(),
                    (t = this.delegate) === null ||
                        t === void 0 ||
                        t.inputControllerWillPerformTyping(),
                    (e = this.responder) === null ||
                        e === void 0 ||
                        e.insertString(
                            `
`,
                            { updatePosition: !1 },
                        ),
                    this.requestRender()
                );
            },
        },
        shift: {
            return(n) {
                var t, e;
                (t = this.delegate) === null ||
                    t === void 0 ||
                    t.inputControllerWillPerformTyping(),
                    (e = this.responder) === null ||
                        e === void 0 ||
                        e.insertString(`
`),
                    this.requestRender(),
                    n.preventDefault();
            },
            tab(n) {
                var t, e;
                (t = this.responder) !== null &&
                    t !== void 0 &&
                    t.canDecreaseNestingLevel() &&
                    ((e = this.responder) === null ||
                        e === void 0 ||
                        e.decreaseNestingLevel(),
                    this.requestRender(),
                    n.preventDefault());
            },
            left(n) {
                if (this.selectionIsInCursorTarget())
                    return (
                        n.preventDefault(),
                        this.expandSelectionInDirection("backward")
                    );
            },
            right(n) {
                if (this.selectionIsInCursorTarget())
                    return (
                        n.preventDefault(),
                        this.expandSelectionInDirection("forward")
                    );
            },
        },
        alt: {
            backspace(n) {
                var t;
                return (
                    this.setInputSummary({ preferDocument: !1 }),
                    (t = this.delegate) === null || t === void 0
                        ? void 0
                        : t.inputControllerWillPerformTyping()
                );
            },
        },
        meta: {
            backspace(n) {
                var t;
                return (
                    this.setInputSummary({ preferDocument: !1 }),
                    (t = this.delegate) === null || t === void 0
                        ? void 0
                        : t.inputControllerWillPerformTyping()
                );
            },
        },
    }),
    w.proxyMethod("responder?.getSelectedRange"),
    w.proxyMethod("responder?.setSelectedRange"),
    w.proxyMethod("responder?.expandSelectionInDirection"),
    w.proxyMethod("responder?.selectionIsInCursorTarget"),
    w.proxyMethod("responder?.selectionIsExpanded");
var Vn = (n) => {
        var t;
        return (t = n.type) === null ||
            t === void 0 ||
            (t = t.match(/\/(\w+)$/)) === null ||
            t === void 0
            ? void 0
            : t[1];
    },
    qn = !(
        (ye = " ".codePointAt) === null ||
        ye === void 0 ||
        !ye.call(" ", 0)
    ),
    Hn = function (n) {
        if (n.key && qn && n.key.codePointAt(0) === n.keyCode) return n.key;
        {
            let t;
            if (
                (n.which === null
                    ? (t = n.keyCode)
                    : n.which !== 0 && n.charCode !== 0 && (t = n.charCode),
                t != null && Ni[t] !== "escape")
            )
                return Z.fromCodepoints([t]).toString();
        }
    },
    zn = function (n) {
        let t = n.clipboardData;
        if (t) {
            if (t.types.includes("text/html")) {
                for (let e of t.types) {
                    let i = /^CorePasteboardFlavorType/.test(e),
                        r = /^dyn\./.test(e) && t.getData(e);
                    if (i || r) return !0;
                }
                return !1;
            }
            {
                let e = t.types.includes("com.apple.webarchive"),
                    i = t.types.includes("com.apple.flat-rtfd");
                return e || i;
            }
        }
    },
    B = class extends b {
        constructor(t) {
            super(...arguments),
                (this.inputController = t),
                (this.responder = this.inputController.responder),
                (this.delegate = this.inputController.delegate),
                (this.inputSummary = this.inputController.inputSummary),
                (this.data = {});
        }
        start(t) {
            if (((this.data.start = t), this.isSignificant())) {
                var e, i;
                this.inputSummary.eventName === "keypress" &&
                    this.inputSummary.textAdded &&
                    ((i = this.responder) === null ||
                        i === void 0 ||
                        i.deleteInDirection("left")),
                    this.selectionIsExpanded() ||
                        (this.insertPlaceholder(), this.requestRender()),
                    (this.range =
                        (e = this.responder) === null || e === void 0
                            ? void 0
                            : e.getSelectedRange());
            }
        }
        update(t) {
            if (((this.data.update = t), this.isSignificant())) {
                let e = this.selectPlaceholder();
                e && (this.forgetPlaceholder(), (this.range = e));
            }
        }
        end(t) {
            return (
                (this.data.end = t),
                this.isSignificant()
                    ? (this.forgetPlaceholder(),
                      this.canApplyToDocument()
                          ? (this.setInputSummary({
                                preferDocument: !0,
                                didInput: !1,
                            }),
                            (e = this.delegate) === null ||
                                e === void 0 ||
                                e.inputControllerWillPerformTyping(),
                            (i = this.responder) === null ||
                                i === void 0 ||
                                i.setSelectedRange(this.range),
                            (r = this.responder) === null ||
                                r === void 0 ||
                                r.insertString(this.data.end),
                            (o = this.responder) === null || o === void 0
                                ? void 0
                                : o.setSelectedRange(
                                      this.range[0] + this.data.end.length,
                                  ))
                          : this.data.start != null || this.data.update != null
                            ? (this.requestReparse(),
                              this.inputController.reset())
                            : void 0)
                    : this.inputController.reset()
            );
            var e, i, r, o;
        }
        getEndData() {
            return this.data.end;
        }
        isEnded() {
            return this.getEndData() != null;
        }
        isSignificant() {
            return !Wn.composesExistingText || this.inputSummary.didInput;
        }
        canApplyToDocument() {
            var t, e;
            return (
                ((t = this.data.start) === null || t === void 0
                    ? void 0
                    : t.length) === 0 &&
                ((e = this.data.end) === null || e === void 0
                    ? void 0
                    : e.length) > 0 &&
                this.range
            );
        }
    };
B.proxyMethod("inputController.setInputSummary"),
    B.proxyMethod("inputController.requestRender"),
    B.proxyMethod("inputController.requestReparse"),
    B.proxyMethod("responder?.selectionIsExpanded"),
    B.proxyMethod("responder?.insertPlaceholder"),
    B.proxyMethod("responder?.selectPlaceholder"),
    B.proxyMethod("responder?.forgetPlaceholder");
var G = class extends ut {
    constructor() {
        super(...arguments), (this.render = this.render.bind(this));
    }
    elementDidMutate() {
        return this.scheduledRender
            ? this.composing
                ? (t = this.delegate) === null ||
                  t === void 0 ||
                  (e = t.inputControllerDidAllowUnhandledInput) === null ||
                  e === void 0
                    ? void 0
                    : e.call(t)
                : void 0
            : this.reparse();
        var t, e;
    }
    scheduleRender() {
        return this.scheduledRender
            ? this.scheduledRender
            : (this.scheduledRender = requestAnimationFrame(this.render));
    }
    render() {
        var t, e;
        cancelAnimationFrame(this.scheduledRender),
            (this.scheduledRender = null),
            this.composing ||
                (e = this.delegate) === null ||
                e === void 0 ||
                e.render(),
            (t = this.afterRender) === null || t === void 0 || t.call(this),
            (this.afterRender = null);
    }
    reparse() {
        var t;
        return (t = this.delegate) === null || t === void 0
            ? void 0
            : t.reparse();
    }
    insertString() {
        var t;
        let e =
                arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : "",
            i = arguments.length > 1 ? arguments[1] : void 0;
        return (
            (t = this.delegate) === null ||
                t === void 0 ||
                t.inputControllerWillPerformTyping(),
            this.withTargetDOMRange(function () {
                var r;
                return (r = this.responder) === null || r === void 0
                    ? void 0
                    : r.insertString(e, i);
            })
        );
    }
    toggleAttributeIfSupported(t) {
        var e;
        if (Le().includes(t))
            return (
                (e = this.delegate) === null ||
                    e === void 0 ||
                    e.inputControllerWillPerformFormatting(t),
                this.withTargetDOMRange(function () {
                    var i;
                    return (i = this.responder) === null || i === void 0
                        ? void 0
                        : i.toggleCurrentAttribute(t);
                })
            );
    }
    activateAttributeIfSupported(t, e) {
        var i;
        if (Le().includes(t))
            return (
                (i = this.delegate) === null ||
                    i === void 0 ||
                    i.inputControllerWillPerformFormatting(t),
                this.withTargetDOMRange(function () {
                    var r;
                    return (r = this.responder) === null || r === void 0
                        ? void 0
                        : r.setCurrentAttribute(t, e);
                })
            );
    }
    deleteInDirection(t) {
        let { recordUndoEntry: e } =
            arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : { recordUndoEntry: !0 };
        var i;
        e &&
            ((i = this.delegate) === null ||
                i === void 0 ||
                i.inputControllerWillPerformTyping());
        let r = () => {
                var s;
                return (s = this.responder) === null || s === void 0
                    ? void 0
                    : s.deleteInDirection(t);
            },
            o = this.getTargetDOMRange({ minLength: 2 });
        return o ? this.withTargetDOMRange(o, r) : r();
    }
    withTargetDOMRange(t, e) {
        var i;
        return (
            typeof t == "function" && ((e = t), (t = this.getTargetDOMRange())),
            t
                ? (i = this.responder) === null || i === void 0
                    ? void 0
                    : i.withTargetDOMRange(t, e.bind(this))
                : (tt.reset(), e.call(this))
        );
    }
    getTargetDOMRange() {
        var t, e;
        let { minLength: i } =
                arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : { minLength: 0 },
            r =
                (t = (e = this.event).getTargetRanges) === null || t === void 0
                    ? void 0
                    : t.call(e);
        if (r && r.length) {
            let o = _n(r[0]);
            if (i === 0 || o.toString().length >= i) return o;
        }
    }
    withEvent(t, e) {
        let i;
        this.event = t;
        try {
            i = e.call(this);
        } finally {
            this.event = null;
        }
        return i;
    }
};
E(G, "events", {
    keydown(n) {
        if (Ei(n)) {
            var t;
            let e = $n(n);
            (t = this.delegate) !== null &&
                t !== void 0 &&
                t.inputControllerDidReceiveKeyboardCommand(e) &&
                n.preventDefault();
        } else {
            let e = n.key;
            n.altKey && (e += "+Alt"), n.shiftKey && (e += "+Shift");
            let i = this.constructor.keys[e];
            if (i) return this.withEvent(n, i);
        }
    },
    paste(n) {
        var t;
        let e,
            i =
                (t = n.clipboardData) === null || t === void 0
                    ? void 0
                    : t.getData("URL");
        return Jn(n)
            ? (n.preventDefault(), this.attachFiles(n.clipboardData.files))
            : Kn(n)
              ? (n.preventDefault(),
                (e = {
                    type: "text/plain",
                    string: n.clipboardData.getData("text/plain"),
                }),
                (r = this.delegate) === null ||
                    r === void 0 ||
                    r.inputControllerWillPaste(e),
                (o = this.responder) === null ||
                    o === void 0 ||
                    o.insertString(e.string),
                this.render(),
                (s = this.delegate) === null || s === void 0
                    ? void 0
                    : s.inputControllerDidPaste(e))
              : i
                ? (n.preventDefault(),
                  (e = { type: "text/html", html: this.createLinkHTML(i) }),
                  (a = this.delegate) === null ||
                      a === void 0 ||
                      a.inputControllerWillPaste(e),
                  (c = this.responder) === null ||
                      c === void 0 ||
                      c.insertHTML(e.html),
                  this.render(),
                  (l = this.delegate) === null || l === void 0
                      ? void 0
                      : l.inputControllerDidPaste(e))
                : void 0;
        var r, o, s, a, c, l;
    },
    beforeinput(n) {
        let t = this.constructor.inputTypes[n.inputType];
        t && (this.withEvent(n, t), this.scheduleRender());
    },
    input(n) {
        tt.reset();
    },
    dragstart(n) {
        var t, e;
        (t = this.responder) !== null &&
            t !== void 0 &&
            t.selectionContainsAttachments() &&
            (n.dataTransfer.setData("application/x-trix-dragging", !0),
            (this.dragging = {
                range:
                    (e = this.responder) === null || e === void 0
                        ? void 0
                        : e.getSelectedRange(),
                point: ke(n),
            }));
    },
    dragenter(n) {
        Ce(n) && n.preventDefault();
    },
    dragover(n) {
        if (this.dragging) {
            n.preventDefault();
            let e = ke(n);
            var t;
            if (!ht(e, this.dragging.point))
                return (
                    (this.dragging.point = e),
                    (t = this.responder) === null || t === void 0
                        ? void 0
                        : t.setLocationRangeFromPointRange(e)
                );
        } else Ce(n) && n.preventDefault();
    },
    drop(n) {
        var t, e;
        if (this.dragging)
            return (
                n.preventDefault(),
                (t = this.delegate) === null ||
                    t === void 0 ||
                    t.inputControllerWillMoveText(),
                (e = this.responder) === null ||
                    e === void 0 ||
                    e.moveTextFromRange(this.dragging.range),
                (this.dragging = null),
                this.scheduleRender()
            );
        if (Ce(n)) {
            var i;
            n.preventDefault();
            let r = ke(n);
            return (
                (i = this.responder) === null ||
                    i === void 0 ||
                    i.setLocationRangeFromPointRange(r),
                this.attachFiles(n.dataTransfer.files)
            );
        }
    },
    dragend() {
        var n;
        this.dragging &&
            ((n = this.responder) === null ||
                n === void 0 ||
                n.setSelectedRange(this.dragging.range),
            (this.dragging = null));
    },
    compositionend(n) {
        this.composing &&
            ((this.composing = !1), St.recentAndroid || this.scheduleRender());
    },
}),
    E(G, "keys", {
        ArrowLeft() {
            var n, t;
            if (
                (n = this.responder) !== null &&
                n !== void 0 &&
                n.shouldManageMovingCursorInDirection("backward")
            )
                return (
                    this.event.preventDefault(),
                    (t = this.responder) === null || t === void 0
                        ? void 0
                        : t.moveCursorInDirection("backward")
                );
        },
        ArrowRight() {
            var n, t;
            if (
                (n = this.responder) !== null &&
                n !== void 0 &&
                n.shouldManageMovingCursorInDirection("forward")
            )
                return (
                    this.event.preventDefault(),
                    (t = this.responder) === null || t === void 0
                        ? void 0
                        : t.moveCursorInDirection("forward")
                );
        },
        Backspace() {
            var n, t, e;
            if (
                (n = this.responder) !== null &&
                n !== void 0 &&
                n.shouldManageDeletingInDirection("backward")
            )
                return (
                    this.event.preventDefault(),
                    (t = this.delegate) === null ||
                        t === void 0 ||
                        t.inputControllerWillPerformTyping(),
                    (e = this.responder) === null ||
                        e === void 0 ||
                        e.deleteInDirection("backward"),
                    this.render()
                );
        },
        Tab() {
            var n, t;
            if (
                (n = this.responder) !== null &&
                n !== void 0 &&
                n.canIncreaseNestingLevel()
            )
                return (
                    this.event.preventDefault(),
                    (t = this.responder) === null ||
                        t === void 0 ||
                        t.increaseNestingLevel(),
                    this.render()
                );
        },
        "Tab+Shift"() {
            var n, t;
            if (
                (n = this.responder) !== null &&
                n !== void 0 &&
                n.canDecreaseNestingLevel()
            )
                return (
                    this.event.preventDefault(),
                    (t = this.responder) === null ||
                        t === void 0 ||
                        t.decreaseNestingLevel(),
                    this.render()
                );
        },
    }),
    E(G, "inputTypes", {
        deleteByComposition() {
            return this.deleteInDirection("backward", { recordUndoEntry: !1 });
        },
        deleteByCut() {
            return this.deleteInDirection("backward");
        },
        deleteByDrag() {
            return (
                this.event.preventDefault(),
                this.withTargetDOMRange(function () {
                    var n;
                    this.deleteByDragRange =
                        (n = this.responder) === null || n === void 0
                            ? void 0
                            : n.getSelectedRange();
                })
            );
        },
        deleteCompositionText() {
            return this.deleteInDirection("backward", { recordUndoEntry: !1 });
        },
        deleteContent() {
            return this.deleteInDirection("backward");
        },
        deleteContentBackward() {
            return this.deleteInDirection("backward");
        },
        deleteContentForward() {
            return this.deleteInDirection("forward");
        },
        deleteEntireSoftLine() {
            return this.deleteInDirection("forward");
        },
        deleteHardLineBackward() {
            return this.deleteInDirection("backward");
        },
        deleteHardLineForward() {
            return this.deleteInDirection("forward");
        },
        deleteSoftLineBackward() {
            return this.deleteInDirection("backward");
        },
        deleteSoftLineForward() {
            return this.deleteInDirection("forward");
        },
        deleteWordBackward() {
            return this.deleteInDirection("backward");
        },
        deleteWordForward() {
            return this.deleteInDirection("forward");
        },
        formatBackColor() {
            return this.activateAttributeIfSupported(
                "backgroundColor",
                this.event.data,
            );
        },
        formatBold() {
            return this.toggleAttributeIfSupported("bold");
        },
        formatFontColor() {
            return this.activateAttributeIfSupported("color", this.event.data);
        },
        formatFontName() {
            return this.activateAttributeIfSupported("font", this.event.data);
        },
        formatIndent() {
            var n;
            if (
                (n = this.responder) !== null &&
                n !== void 0 &&
                n.canIncreaseNestingLevel()
            )
                return this.withTargetDOMRange(function () {
                    var t;
                    return (t = this.responder) === null || t === void 0
                        ? void 0
                        : t.increaseNestingLevel();
                });
        },
        formatItalic() {
            return this.toggleAttributeIfSupported("italic");
        },
        formatJustifyCenter() {
            return this.toggleAttributeIfSupported("justifyCenter");
        },
        formatJustifyFull() {
            return this.toggleAttributeIfSupported("justifyFull");
        },
        formatJustifyLeft() {
            return this.toggleAttributeIfSupported("justifyLeft");
        },
        formatJustifyRight() {
            return this.toggleAttributeIfSupported("justifyRight");
        },
        formatOutdent() {
            var n;
            if (
                (n = this.responder) !== null &&
                n !== void 0 &&
                n.canDecreaseNestingLevel()
            )
                return this.withTargetDOMRange(function () {
                    var t;
                    return (t = this.responder) === null || t === void 0
                        ? void 0
                        : t.decreaseNestingLevel();
                });
        },
        formatRemove() {
            this.withTargetDOMRange(function () {
                for (let e in (n = this.responder) === null || n === void 0
                    ? void 0
                    : n.getCurrentAttributes()) {
                    var n, t;
                    (t = this.responder) === null ||
                        t === void 0 ||
                        t.removeCurrentAttribute(e);
                }
            });
        },
        formatSetBlockTextDirection() {
            return this.activateAttributeIfSupported(
                "blockDir",
                this.event.data,
            );
        },
        formatSetInlineTextDirection() {
            return this.activateAttributeIfSupported(
                "textDir",
                this.event.data,
            );
        },
        formatStrikeThrough() {
            return this.toggleAttributeIfSupported("strike");
        },
        formatSubscript() {
            return this.toggleAttributeIfSupported("sub");
        },
        formatSuperscript() {
            return this.toggleAttributeIfSupported("sup");
        },
        formatUnderline() {
            return this.toggleAttributeIfSupported("underline");
        },
        historyRedo() {
            var n;
            return (n = this.delegate) === null || n === void 0
                ? void 0
                : n.inputControllerWillPerformRedo();
        },
        historyUndo() {
            var n;
            return (n = this.delegate) === null || n === void 0
                ? void 0
                : n.inputControllerWillPerformUndo();
        },
        insertCompositionText() {
            return (this.composing = !0), this.insertString(this.event.data);
        },
        insertFromComposition() {
            return (this.composing = !1), this.insertString(this.event.data);
        },
        insertFromDrop() {
            let n = this.deleteByDragRange;
            var t;
            if (n)
                return (
                    (this.deleteByDragRange = null),
                    (t = this.delegate) === null ||
                        t === void 0 ||
                        t.inputControllerWillMoveText(),
                    this.withTargetDOMRange(function () {
                        var e;
                        return (e = this.responder) === null || e === void 0
                            ? void 0
                            : e.moveTextFromRange(n);
                    })
                );
        },
        insertFromPaste() {
            var n;
            let { dataTransfer: t } = this.event,
                e = { dataTransfer: t },
                i = t.getData("URL"),
                r = t.getData("text/html");
            if (i) {
                var o;
                let l;
                this.event.preventDefault(), (e.type = "text/html");
                let u = t.getData("public.url-name");
                (l = u ? _e(u).trim() : i),
                    (e.html = this.createLinkHTML(i, l)),
                    (o = this.delegate) === null ||
                        o === void 0 ||
                        o.inputControllerWillPaste(e),
                    this.withTargetDOMRange(function () {
                        var g;
                        return (g = this.responder) === null || g === void 0
                            ? void 0
                            : g.insertHTML(e.html);
                    }),
                    (this.afterRender = () => {
                        var g;
                        return (g = this.delegate) === null || g === void 0
                            ? void 0
                            : g.inputControllerDidPaste(e);
                    });
            } else if (Ri(t)) {
                var s;
                (e.type = "text/plain"),
                    (e.string = t.getData("text/plain")),
                    (s = this.delegate) === null ||
                        s === void 0 ||
                        s.inputControllerWillPaste(e),
                    this.withTargetDOMRange(function () {
                        var l;
                        return (l = this.responder) === null || l === void 0
                            ? void 0
                            : l.insertString(e.string);
                    }),
                    (this.afterRender = () => {
                        var l;
                        return (l = this.delegate) === null || l === void 0
                            ? void 0
                            : l.inputControllerDidPaste(e);
                    });
            } else if (r) {
                var a;
                this.event.preventDefault(),
                    (e.type = "text/html"),
                    (e.html = r),
                    (a = this.delegate) === null ||
                        a === void 0 ||
                        a.inputControllerWillPaste(e),
                    this.withTargetDOMRange(function () {
                        var l;
                        return (l = this.responder) === null || l === void 0
                            ? void 0
                            : l.insertHTML(e.html);
                    }),
                    (this.afterRender = () => {
                        var l;
                        return (l = this.delegate) === null || l === void 0
                            ? void 0
                            : l.inputControllerDidPaste(e);
                    });
            } else if ((n = t.files) !== null && n !== void 0 && n.length) {
                var c;
                (e.type = "File"),
                    (e.file = t.files[0]),
                    (c = this.delegate) === null ||
                        c === void 0 ||
                        c.inputControllerWillPaste(e),
                    this.withTargetDOMRange(function () {
                        var l;
                        return (l = this.responder) === null || l === void 0
                            ? void 0
                            : l.insertFile(e.file);
                    }),
                    (this.afterRender = () => {
                        var l;
                        return (l = this.delegate) === null || l === void 0
                            ? void 0
                            : l.inputControllerDidPaste(e);
                    });
            }
        },
        insertFromYank() {
            return this.insertString(this.event.data);
        },
        insertLineBreak() {
            return this.insertString(`
`);
        },
        insertLink() {
            return this.activateAttributeIfSupported("href", this.event.data);
        },
        insertOrderedList() {
            return this.toggleAttributeIfSupported("number");
        },
        insertParagraph() {
            var n;
            return (
                (n = this.delegate) === null ||
                    n === void 0 ||
                    n.inputControllerWillPerformTyping(),
                this.withTargetDOMRange(function () {
                    var t;
                    return (t = this.responder) === null || t === void 0
                        ? void 0
                        : t.insertLineBreak();
                })
            );
        },
        insertReplacementText() {
            let n = this.event.dataTransfer.getData("text/plain"),
                t = this.event.getTargetRanges()[0];
            this.withTargetDOMRange(t, () => {
                this.insertString(n, { updatePosition: !1 });
            });
        },
        insertText() {
            var n;
            return this.insertString(
                this.event.data ||
                    ((n = this.event.dataTransfer) === null || n === void 0
                        ? void 0
                        : n.getData("text/plain")),
            );
        },
        insertTranspose() {
            return this.insertString(this.event.data);
        },
        insertUnorderedList() {
            return this.toggleAttributeIfSupported("bullet");
        },
    });
var _n = function (n) {
        let t = document.createRange();
        return (
            t.setStart(n.startContainer, n.startOffset),
            t.setEnd(n.endContainer, n.endOffset),
            t
        );
    },
    Ce = (n) => {
        var t;
        return Array.from(
            ((t = n.dataTransfer) === null || t === void 0
                ? void 0
                : t.types) || [],
        ).includes("Files");
    },
    Jn = function (n) {
        let t = n.clipboardData;
        if (t)
            return (
                t.types.includes("Files") &&
                t.types.length === 1 &&
                t.files.length >= 1
            );
    },
    Kn = function (n) {
        let t = n.clipboardData;
        if (t) return t.types.includes("text/plain") && t.types.length === 1;
    },
    $n = function (n) {
        let t = [];
        return (
            n.altKey && t.push("alt"),
            n.shiftKey && t.push("shift"),
            t.push(n.key),
            t
        );
    },
    ke = (n) => ({ x: n.clientX, y: n.clientY }),
    Oe = "[data-trix-attribute]",
    Me = "[data-trix-action]",
    Gn = "".concat(Oe, ", ").concat(Me),
    ee = "[data-trix-dialog]",
    Xn = "".concat(ee, "[data-trix-active]"),
    Yn = "".concat(ee, " [data-trix-method]"),
    mi = "".concat(ee, " [data-trix-input]"),
    pi = (n, t) => (
        t || (t = rt(n)),
        n.querySelector("[data-trix-input][name='".concat(t, "']"))
    ),
    fi = (n) => n.getAttribute("data-trix-action"),
    rt = (n) =>
        n.getAttribute("data-trix-attribute") ||
        n.getAttribute("data-trix-dialog-attribute"),
    Yt = class extends b {
        constructor(t) {
            super(t),
                (this.didClickActionButton =
                    this.didClickActionButton.bind(this)),
                (this.didClickAttributeButton =
                    this.didClickAttributeButton.bind(this)),
                (this.didClickDialogButton =
                    this.didClickDialogButton.bind(this)),
                (this.didKeyDownDialogInput =
                    this.didKeyDownDialogInput.bind(this)),
                (this.element = t),
                (this.attributes = {}),
                (this.actions = {}),
                this.resetDialogInputs(),
                f("mousedown", {
                    onElement: this.element,
                    matchingSelector: Me,
                    withCallback: this.didClickActionButton,
                }),
                f("mousedown", {
                    onElement: this.element,
                    matchingSelector: Oe,
                    withCallback: this.didClickAttributeButton,
                }),
                f("click", {
                    onElement: this.element,
                    matchingSelector: Gn,
                    preventDefault: !0,
                }),
                f("click", {
                    onElement: this.element,
                    matchingSelector: Yn,
                    withCallback: this.didClickDialogButton,
                }),
                f("keydown", {
                    onElement: this.element,
                    matchingSelector: mi,
                    withCallback: this.didKeyDownDialogInput,
                });
        }
        didClickActionButton(t, e) {
            var i;
            (i = this.delegate) === null ||
                i === void 0 ||
                i.toolbarDidClickButton(),
                t.preventDefault();
            let r = fi(e);
            return this.getDialog(r)
                ? this.toggleDialog(r)
                : (o = this.delegate) === null || o === void 0
                  ? void 0
                  : o.toolbarDidInvokeAction(r, e);
            var o;
        }
        didClickAttributeButton(t, e) {
            var i;
            (i = this.delegate) === null ||
                i === void 0 ||
                i.toolbarDidClickButton(),
                t.preventDefault();
            let r = rt(e);
            var o;
            return (
                this.getDialog(r)
                    ? this.toggleDialog(r)
                    : (o = this.delegate) === null ||
                      o === void 0 ||
                      o.toolbarDidToggleAttribute(r),
                this.refreshAttributeButtons()
            );
        }
        didClickDialogButton(t, e) {
            let i = V(e, { matchingSelector: ee });
            return this[e.getAttribute("data-trix-method")].call(this, i);
        }
        didKeyDownDialogInput(t, e) {
            if (t.keyCode === 13) {
                t.preventDefault();
                let i = e.getAttribute("name"),
                    r = this.getDialog(i);
                this.setAttribute(r);
            }
            if (t.keyCode === 27) return t.preventDefault(), this.hideDialog();
        }
        updateActions(t) {
            return (this.actions = t), this.refreshActionButtons();
        }
        refreshActionButtons() {
            return this.eachActionButton((t, e) => {
                t.disabled = this.actions[e] === !1;
            });
        }
        eachActionButton(t) {
            return Array.from(this.element.querySelectorAll(Me)).map((e) =>
                t(e, fi(e)),
            );
        }
        updateAttributes(t) {
            return (this.attributes = t), this.refreshAttributeButtons();
        }
        refreshAttributeButtons() {
            return this.eachAttributeButton(
                (t, e) => (
                    (t.disabled = this.attributes[e] === !1),
                    this.attributes[e] || this.dialogIsVisible(e)
                        ? (t.setAttribute("data-trix-active", ""),
                          t.classList.add("trix-active"))
                        : (t.removeAttribute("data-trix-active"),
                          t.classList.remove("trix-active"))
                ),
            );
        }
        eachAttributeButton(t) {
            return Array.from(this.element.querySelectorAll(Oe)).map((e) =>
                t(e, rt(e)),
            );
        }
        applyKeyboardCommand(t) {
            let e = JSON.stringify(t.sort());
            for (let i of Array.from(
                this.element.querySelectorAll("[data-trix-key]"),
            )) {
                let r = i.getAttribute("data-trix-key").split("+");
                if (JSON.stringify(r.sort()) === e)
                    return bt("mousedown", { onElement: i }), !0;
            }
            return !1;
        }
        dialogIsVisible(t) {
            let e = this.getDialog(t);
            if (e) return e.hasAttribute("data-trix-active");
        }
        toggleDialog(t) {
            return this.dialogIsVisible(t)
                ? this.hideDialog()
                : this.showDialog(t);
        }
        showDialog(t) {
            var e, i;
            this.hideDialog(),
                (e = this.delegate) === null ||
                    e === void 0 ||
                    e.toolbarWillShowDialog();
            let r = this.getDialog(t);
            r.setAttribute("data-trix-active", ""),
                r.classList.add("trix-active"),
                Array.from(r.querySelectorAll("input[disabled]")).forEach(
                    (s) => {
                        s.removeAttribute("disabled");
                    },
                );
            let o = rt(r);
            if (o) {
                let s = pi(r, t);
                s && ((s.value = this.attributes[o] || ""), s.select());
            }
            return (i = this.delegate) === null || i === void 0
                ? void 0
                : i.toolbarDidShowDialog(t);
        }
        setAttribute(t) {
            let e = rt(t),
                i = pi(t, e);
            return i.willValidate && !i.checkValidity()
                ? (i.setAttribute("data-trix-validate", ""),
                  i.classList.add("trix-validate"),
                  i.focus())
                : ((r = this.delegate) === null ||
                      r === void 0 ||
                      r.toolbarDidUpdateAttribute(e, i.value),
                  this.hideDialog());
            var r;
        }
        removeAttribute(t) {
            var e;
            let i = rt(t);
            return (
                (e = this.delegate) === null ||
                    e === void 0 ||
                    e.toolbarDidRemoveAttribute(i),
                this.hideDialog()
            );
        }
        hideDialog() {
            let t = this.element.querySelector(Xn);
            var e;
            if (t)
                return (
                    t.removeAttribute("data-trix-active"),
                    t.classList.remove("trix-active"),
                    this.resetDialogInputs(),
                    (e = this.delegate) === null || e === void 0
                        ? void 0
                        : e.toolbarDidHideDialog(
                              ((i) => i.getAttribute("data-trix-dialog"))(t),
                          )
                );
        }
        resetDialogInputs() {
            Array.from(this.element.querySelectorAll(mi)).forEach((t) => {
                t.setAttribute("disabled", "disabled"),
                    t.removeAttribute("data-trix-validate"),
                    t.classList.remove("trix-validate");
            });
        }
        getDialog(t) {
            return this.element.querySelector(
                "[data-trix-dialog=".concat(t, "]"),
            );
        }
    },
    X = class extends $t {
        constructor(t) {
            let { editorElement: e, document: i, html: r } = t;
            super(...arguments),
                (this.editorElement = e),
                (this.selectionManager = new I(this.editorElement)),
                (this.selectionManager.delegate = this),
                (this.composition = new F()),
                (this.composition.delegate = this),
                (this.attachmentManager = new Ut(
                    this.composition.getAttachments(),
                )),
                (this.attachmentManager.delegate = this),
                (this.inputController =
                    Ve.getLevel() === 2
                        ? new G(this.editorElement)
                        : new w(this.editorElement)),
                (this.inputController.delegate = this),
                (this.inputController.responder = this.composition),
                (this.compositionController = new Kt(
                    this.editorElement,
                    this.composition,
                )),
                (this.compositionController.delegate = this),
                (this.toolbarController = new Yt(
                    this.editorElement.toolbarElement,
                )),
                (this.toolbarController.delegate = this),
                (this.editor = new Ht(
                    this.composition,
                    this.selectionManager,
                    this.editorElement,
                )),
                i ? this.editor.loadDocument(i) : this.editor.loadHTML(r);
        }
        registerSelectionManager() {
            return tt.registerSelectionManager(this.selectionManager);
        }
        unregisterSelectionManager() {
            return tt.unregisterSelectionManager(this.selectionManager);
        }
        render() {
            return this.compositionController.render();
        }
        reparse() {
            return this.composition.replaceHTML(this.editorElement.innerHTML);
        }
        compositionDidChangeDocument(t) {
            if (
                (this.notifyEditorElement("document-change"),
                !this.handlingInput)
            )
                return this.render();
        }
        compositionDidChangeCurrentAttributes(t) {
            return (
                (this.currentAttributes = t),
                this.toolbarController.updateAttributes(this.currentAttributes),
                this.updateCurrentActions(),
                this.notifyEditorElement("attributes-change", {
                    attributes: this.currentAttributes,
                })
            );
        }
        compositionDidPerformInsertionAtRange(t) {
            this.pasting && (this.pastedRange = t);
        }
        compositionShouldAcceptFile(t) {
            return this.notifyEditorElement("file-accept", { file: t });
        }
        compositionDidAddAttachment(t) {
            let e = this.attachmentManager.manageAttachment(t);
            return this.notifyEditorElement("attachment-add", {
                attachment: e,
            });
        }
        compositionDidEditAttachment(t) {
            this.compositionController.rerenderViewForObject(t);
            let e = this.attachmentManager.manageAttachment(t);
            return (
                this.notifyEditorElement("attachment-edit", { attachment: e }),
                this.notifyEditorElement("change")
            );
        }
        compositionDidChangeAttachmentPreviewURL(t) {
            return (
                this.compositionController.invalidateViewForObject(t),
                this.notifyEditorElement("change")
            );
        }
        compositionDidRemoveAttachment(t) {
            let e = this.attachmentManager.unmanageAttachment(t);
            return this.notifyEditorElement("attachment-remove", {
                attachment: e,
            });
        }
        compositionDidStartEditingAttachment(t, e) {
            return (
                (this.attachmentLocationRange =
                    this.composition.document.getLocationRangeOfAttachment(t)),
                this.compositionController.installAttachmentEditorForAttachment(
                    t,
                    e,
                ),
                this.selectionManager.setLocationRange(
                    this.attachmentLocationRange,
                )
            );
        }
        compositionDidStopEditingAttachment(t) {
            this.compositionController.uninstallAttachmentEditor(),
                (this.attachmentLocationRange = null);
        }
        compositionDidRequestChangingSelectionToLocationRange(t) {
            if (!this.loadingSnapshot || this.isFocused())
                return (
                    (this.requestedLocationRange = t),
                    (this.compositionRevisionWhenLocationRangeRequested =
                        this.composition.revision),
                    this.handlingInput ? void 0 : this.render()
                );
        }
        compositionWillLoadSnapshot() {
            this.loadingSnapshot = !0;
        }
        compositionDidLoadSnapshot() {
            this.compositionController.refreshViewCache(),
                this.render(),
                (this.loadingSnapshot = !1);
        }
        getSelectionManager() {
            return this.selectionManager;
        }
        attachmentManagerDidRequestRemovalOfAttachment(t) {
            return this.removeAttachment(t);
        }
        compositionControllerWillSyncDocumentView() {
            return (
                this.inputController.editorWillSyncDocumentView(),
                this.selectionManager.lock(),
                this.selectionManager.clearSelection()
            );
        }
        compositionControllerDidSyncDocumentView() {
            return (
                this.inputController.editorDidSyncDocumentView(),
                this.selectionManager.unlock(),
                this.updateCurrentActions(),
                this.notifyEditorElement("sync")
            );
        }
        compositionControllerDidRender() {
            this.requestedLocationRange &&
                (this.compositionRevisionWhenLocationRangeRequested ===
                    this.composition.revision &&
                    this.selectionManager.setLocationRange(
                        this.requestedLocationRange,
                    ),
                (this.requestedLocationRange = null),
                (this.compositionRevisionWhenLocationRangeRequested = null)),
                this.renderedCompositionRevision !==
                    this.composition.revision &&
                    (this.runEditorFilters(),
                    this.composition.updateCurrentAttributes(),
                    this.notifyEditorElement("render")),
                (this.renderedCompositionRevision = this.composition.revision);
        }
        compositionControllerDidFocus() {
            return (
                this.isFocusedInvisibly() &&
                    this.setLocationRange({ index: 0, offset: 0 }),
                this.toolbarController.hideDialog(),
                this.notifyEditorElement("focus")
            );
        }
        compositionControllerDidBlur() {
            return this.notifyEditorElement("blur");
        }
        compositionControllerDidSelectAttachment(t, e) {
            return (
                this.toolbarController.hideDialog(),
                this.composition.editAttachment(t, e)
            );
        }
        compositionControllerDidRequestDeselectingAttachment(t) {
            let e =
                this.attachmentLocationRange ||
                this.composition.document.getLocationRangeOfAttachment(t);
            return this.selectionManager.setLocationRange(e[1]);
        }
        compositionControllerWillUpdateAttachment(t) {
            return this.editor.recordUndoEntry("Edit Attachment", {
                context: t.id,
                consolidatable: !0,
            });
        }
        compositionControllerDidRequestRemovalOfAttachment(t) {
            return this.removeAttachment(t);
        }
        inputControllerWillHandleInput() {
            (this.handlingInput = !0), (this.requestedRender = !1);
        }
        inputControllerDidRequestRender() {
            this.requestedRender = !0;
        }
        inputControllerDidHandleInput() {
            if (((this.handlingInput = !1), this.requestedRender))
                return (this.requestedRender = !1), this.render();
        }
        inputControllerDidAllowUnhandledInput() {
            return this.notifyEditorElement("change");
        }
        inputControllerDidRequestReparse() {
            return this.reparse();
        }
        inputControllerWillPerformTyping() {
            return this.recordTypingUndoEntry();
        }
        inputControllerWillPerformFormatting(t) {
            return this.recordFormattingUndoEntry(t);
        }
        inputControllerWillCutText() {
            return this.editor.recordUndoEntry("Cut");
        }
        inputControllerWillPaste(t) {
            return (
                this.editor.recordUndoEntry("Paste"),
                (this.pasting = !0),
                this.notifyEditorElement("before-paste", { paste: t })
            );
        }
        inputControllerDidPaste(t) {
            return (
                (t.range = this.pastedRange),
                (this.pastedRange = null),
                (this.pasting = null),
                this.notifyEditorElement("paste", { paste: t })
            );
        }
        inputControllerWillMoveText() {
            return this.editor.recordUndoEntry("Move");
        }
        inputControllerWillAttachFiles() {
            return this.editor.recordUndoEntry("Drop Files");
        }
        inputControllerWillPerformUndo() {
            return this.editor.undo();
        }
        inputControllerWillPerformRedo() {
            return this.editor.redo();
        }
        inputControllerDidReceiveKeyboardCommand(t) {
            return this.toolbarController.applyKeyboardCommand(t);
        }
        inputControllerDidStartDrag() {
            this.locationRangeBeforeDrag =
                this.selectionManager.getLocationRange();
        }
        inputControllerDidReceiveDragOverPoint(t) {
            return this.selectionManager.setLocationRangeFromPointRange(t);
        }
        inputControllerDidCancelDrag() {
            this.selectionManager.setLocationRange(
                this.locationRangeBeforeDrag,
            ),
                (this.locationRangeBeforeDrag = null);
        }
        locationRangeDidChange(t) {
            return (
                this.composition.updateCurrentAttributes(),
                this.updateCurrentActions(),
                this.attachmentLocationRange &&
                    !Pt(this.attachmentLocationRange, t) &&
                    this.composition.stopEditingAttachment(),
                this.notifyEditorElement("selection-change")
            );
        }
        toolbarDidClickButton() {
            if (!this.getLocationRange())
                return this.setLocationRange({ index: 0, offset: 0 });
        }
        toolbarDidInvokeAction(t, e) {
            return this.invokeAction(t, e);
        }
        toolbarDidToggleAttribute(t) {
            if (
                (this.recordFormattingUndoEntry(t),
                this.composition.toggleCurrentAttribute(t),
                this.render(),
                !this.selectionFrozen)
            )
                return this.editorElement.focus();
        }
        toolbarDidUpdateAttribute(t, e) {
            if (
                (this.recordFormattingUndoEntry(t),
                this.composition.setCurrentAttribute(t, e),
                this.render(),
                !this.selectionFrozen)
            )
                return this.editorElement.focus();
        }
        toolbarDidRemoveAttribute(t) {
            if (
                (this.recordFormattingUndoEntry(t),
                this.composition.removeCurrentAttribute(t),
                this.render(),
                !this.selectionFrozen)
            )
                return this.editorElement.focus();
        }
        toolbarWillShowDialog(t) {
            return (
                this.composition.expandSelectionForEditing(),
                this.freezeSelection()
            );
        }
        toolbarDidShowDialog(t) {
            return this.notifyEditorElement("toolbar-dialog-show", {
                dialogName: t,
            });
        }
        toolbarDidHideDialog(t) {
            return (
                this.thawSelection(),
                this.editorElement.focus(),
                this.notifyEditorElement("toolbar-dialog-hide", {
                    dialogName: t,
                })
            );
        }
        freezeSelection() {
            if (!this.selectionFrozen)
                return (
                    this.selectionManager.lock(),
                    this.composition.freezeSelection(),
                    (this.selectionFrozen = !0),
                    this.render()
                );
        }
        thawSelection() {
            if (this.selectionFrozen)
                return (
                    this.composition.thawSelection(),
                    this.selectionManager.unlock(),
                    (this.selectionFrozen = !1),
                    this.render()
                );
        }
        canInvokeAction(t) {
            return (
                !!this.actionIsExternal(t) ||
                !(
                    (e = this.actions[t]) === null ||
                    e === void 0 ||
                    (e = e.test) === null ||
                    e === void 0 ||
                    !e.call(this)
                )
            );
            var e;
        }
        invokeAction(t, e) {
            return this.actionIsExternal(t)
                ? this.notifyEditorElement("action-invoke", {
                      actionName: t,
                      invokingElement: e,
                  })
                : (i = this.actions[t]) === null ||
                    i === void 0 ||
                    (i = i.perform) === null ||
                    i === void 0
                  ? void 0
                  : i.call(this);
            var i;
        }
        actionIsExternal(t) {
            return /^x-./.test(t);
        }
        getCurrentActions() {
            let t = {};
            for (let e in this.actions) t[e] = this.canInvokeAction(e);
            return t;
        }
        updateCurrentActions() {
            let t = this.getCurrentActions();
            if (!ht(t, this.currentActions))
                return (
                    (this.currentActions = t),
                    this.toolbarController.updateActions(this.currentActions),
                    this.notifyEditorElement("actions-change", {
                        actions: this.currentActions,
                    })
                );
        }
        runEditorFilters() {
            let t = this.composition.getSnapshot();
            if (
                (Array.from(this.editor.filters).forEach((r) => {
                    let { document: o, selectedRange: s } = t;
                    (t = r.call(this.editor, t) || {}),
                        t.document || (t.document = o),
                        t.selectedRange || (t.selectedRange = s);
                }),
                (e = t),
                (i = this.composition.getSnapshot()),
                !Pt(e.selectedRange, i.selectedRange) ||
                    !e.document.isEqualTo(i.document))
            )
                return this.composition.loadSnapshot(t);
            var e, i;
        }
        updateInputElement() {
            let t = (function (e, i) {
                let r = Ln[i];
                if (r) return r(e);
                throw new Error("unknown content type: ".concat(i));
            })(
                this.compositionController.getSerializableElement(),
                "text/html",
            );
            return this.editorElement.setInputElementValue(t);
        }
        notifyEditorElement(t, e) {
            switch (t) {
                case "document-change":
                    this.documentChangedSinceLastRender = !0;
                    break;
                case "render":
                    this.documentChangedSinceLastRender &&
                        ((this.documentChangedSinceLastRender = !1),
                        this.notifyEditorElement("change"));
                    break;
                case "change":
                case "attachment-add":
                case "attachment-edit":
                case "attachment-remove":
                    this.updateInputElement();
            }
            return this.editorElement.notify(t, e);
        }
        removeAttachment(t) {
            return (
                this.editor.recordUndoEntry("Delete Attachment"),
                this.composition.removeAttachment(t),
                this.render()
            );
        }
        recordFormattingUndoEntry(t) {
            let e = v(t),
                i = this.selectionManager.getLocationRange();
            if (e || !N(i))
                return this.editor.recordUndoEntry("Formatting", {
                    context: this.getUndoContext(),
                    consolidatable: !0,
                });
        }
        recordTypingUndoEntry() {
            return this.editor.recordUndoEntry("Typing", {
                context: this.getUndoContext(this.currentAttributes),
                consolidatable: !0,
            });
        }
        getUndoContext() {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                e[i] = arguments[i];
            return [
                this.getLocationContext(),
                this.getTimeContext(),
                ...Array.from(e),
            ];
        }
        getLocationContext() {
            let t = this.selectionManager.getLocationRange();
            return N(t) ? t[0].index : t;
        }
        getTimeContext() {
            return Re.interval > 0
                ? Math.floor(new Date().getTime() / Re.interval)
                : 0;
        }
        isFocused() {
            var t;
            return (
                this.editorElement ===
                ((t = this.editorElement.ownerDocument) === null || t === void 0
                    ? void 0
                    : t.activeElement)
            );
        }
        isFocusedInvisibly() {
            return this.isFocused() && !this.getLocationRange();
        }
        get actions() {
            return this.constructor.actions;
        }
    };
E(X, "actions", {
    undo: {
        test() {
            return this.editor.canUndo();
        },
        perform() {
            return this.editor.undo();
        },
    },
    redo: {
        test() {
            return this.editor.canRedo();
        },
        perform() {
            return this.editor.redo();
        },
    },
    link: {
        test() {
            return this.editor.canActivateAttribute("href");
        },
    },
    increaseNestingLevel: {
        test() {
            return this.editor.canIncreaseNestingLevel();
        },
        perform() {
            return this.editor.increaseNestingLevel() && this.render();
        },
    },
    decreaseNestingLevel: {
        test() {
            return this.editor.canDecreaseNestingLevel();
        },
        perform() {
            return this.editor.decreaseNestingLevel() && this.render();
        },
    },
    attachFiles: {
        test: () => !0,
        perform() {
            return Ve.pickFiles(this.editor.insertFiles);
        },
    },
}),
    X.proxyMethod("getSelectionManager().setLocationRange"),
    X.proxyMethod("getSelectionManager().getLocationRange");
var Zn = Object.freeze({
        __proto__: null,
        AttachmentEditorController: Jt,
        CompositionController: Kt,
        Controller: $t,
        EditorController: X,
        InputController: ut,
        Level0InputController: w,
        Level2InputController: G,
        ToolbarController: Yt,
    }),
    Qn = Object.freeze({
        __proto__: null,
        MutationObserver: Gt,
        SelectionChangeObserver: It,
    }),
    tr = Object.freeze({
        __proto__: null,
        FileVerificationOperation: Xt,
        ImagePreloadOperation: Wt,
    });
ki(
    "trix-toolbar",
    `%t {
  display: block;
}

%t {
  white-space: nowrap;
}

%t [data-trix-dialog] {
  display: none;
}

%t [data-trix-dialog][data-trix-active] {
  display: block;
}

%t [data-trix-dialog] [data-trix-validate]:invalid {
  background-color: #ffdddd;
}`,
);
var Zt = class extends HTMLElement {
        connectedCallback() {
            this.innerHTML === "" && (this.innerHTML = Ci.getDefaultHTML());
        }
    },
    er = 0,
    ir = function (n) {
        if (!n.hasAttribute("contenteditable"))
            return (
                n.setAttribute("contenteditable", ""),
                (function (t) {
                    let e =
                        arguments.length > 1 && arguments[1] !== void 0
                            ? arguments[1]
                            : {};
                    return (e.times = 1), f(t, e);
                })("focus", { onElement: n, withCallback: () => nr(n) })
            );
    },
    nr = function (n) {
        return rr(n), or(n);
    },
    rr = function (n) {
        var t, e;
        if (
            (t = (e = document).queryCommandSupported) !== null &&
            t !== void 0 &&
            t.call(e, "enableObjectResizing")
        )
            return (
                document.execCommand("enableObjectResizing", !1, !1),
                f("mscontrolselect", { onElement: n, preventDefault: !0 })
            );
    },
    or = function (n) {
        var t, e;
        if (
            (t = (e = document).queryCommandSupported) !== null &&
            t !== void 0 &&
            t.call(e, "DefaultParagraphSeparator")
        ) {
            let { tagName: i } = y.default;
            if (["div", "p"].includes(i))
                return document.execCommand("DefaultParagraphSeparator", !1, i);
        }
    },
    bi = St.forcesObjectResizing
        ? { display: "inline", width: "auto" }
        : { display: "inline-block", width: "1px" };
ki(
    "trix-editor",
    `%t {
    display: block;
}

%t:empty:not(:focus)::before {
    content: attr(placeholder);
    color: graytext;
    cursor: text;
    pointer-events: none;
    white-space: pre-line;
}

%t a[contenteditable=false] {
    cursor: text;
}

%t img {
    max-width: 100%;
    height: auto;
}

%t `
        .concat(
            K,
            ` figcaption textarea {
    resize: none;
}

%t `,
        )
        .concat(
            K,
            ` figcaption textarea.trix-autoresize-clone {
    position: absolute;
    left: -9999px;
    max-height: 0px;
}

%t `,
        )
        .concat(
            K,
            ` figcaption[data-trix-placeholder]:empty::before {
    content: attr(data-trix-placeholder);
    color: graytext;
}

%t [data-trix-cursor-target] {
    display: `,
        )
        .concat(
            bi.display,
            ` !important;
    width: `,
        )
        .concat(
            bi.width,
            ` !important;
    padding: 0 !important;
    margin: 0 !important;
    border: none !important;
}

%t [data-trix-cursor-target=left] {
    vertical-align: top !important;
    margin-left: -1px !important;
}

%t [data-trix-cursor-target=right] {
    vertical-align: bottom !important;
    margin-right: -1px !important;
}`,
        ),
);
var Qt = class extends HTMLElement {
        get trixId() {
            return this.hasAttribute("trix-id")
                ? this.getAttribute("trix-id")
                : (this.setAttribute("trix-id", ++er), this.trixId);
        }
        get labels() {
            let t = [];
            this.id &&
                this.ownerDocument &&
                t.push(
                    ...Array.from(
                        this.ownerDocument.querySelectorAll(
                            "label[for='".concat(this.id, "']"),
                        ) || [],
                    ),
                );
            let e = V(this, { matchingSelector: "label" });
            return e && [this, null].includes(e.control) && t.push(e), t;
        }
        get toolbarElement() {
            var t;
            if (this.hasAttribute("toolbar"))
                return (t = this.ownerDocument) === null || t === void 0
                    ? void 0
                    : t.getElementById(this.getAttribute("toolbar"));
            if (this.parentNode) {
                let e = "trix-toolbar-".concat(this.trixId);
                this.setAttribute("toolbar", e);
                let i = d("trix-toolbar", { id: e });
                return this.parentNode.insertBefore(i, this), i;
            }
        }
        get form() {
            var t;
            return (t = this.inputElement) === null || t === void 0
                ? void 0
                : t.form;
        }
        get inputElement() {
            var t;
            if (this.hasAttribute("input"))
                return (t = this.ownerDocument) === null || t === void 0
                    ? void 0
                    : t.getElementById(this.getAttribute("input"));
            if (this.parentNode) {
                let e = "trix-input-".concat(this.trixId);
                this.setAttribute("input", e);
                let i = d("input", { type: "hidden", id: e });
                return (
                    this.parentNode.insertBefore(i, this.nextElementSibling), i
                );
            }
        }
        get editor() {
            var t;
            return (t = this.editorController) === null || t === void 0
                ? void 0
                : t.editor;
        }
        get name() {
            var t;
            return (t = this.inputElement) === null || t === void 0
                ? void 0
                : t.name;
        }
        get value() {
            var t;
            return (t = this.inputElement) === null || t === void 0
                ? void 0
                : t.value;
        }
        set value(t) {
            var e;
            (this.defaultValue = t),
                (e = this.editor) === null ||
                    e === void 0 ||
                    e.loadHTML(this.defaultValue);
        }
        notify(t, e) {
            if (this.editorController)
                return bt("trix-".concat(t), {
                    onElement: this,
                    attributes: e,
                });
        }
        setInputElementValue(t) {
            this.inputElement && (this.inputElement.value = t);
        }
        connectedCallback() {
            this.hasAttribute("data-trix-internal") ||
                (ir(this),
                (function (t) {
                    t.hasAttribute("role") || t.setAttribute("role", "textbox");
                })(this),
                (function (t) {
                    if (
                        t.hasAttribute("aria-label") ||
                        t.hasAttribute("aria-labelledby")
                    )
                        return;
                    let e = function () {
                        let i = Array.from(t.labels)
                                .map((o) => {
                                    if (!o.contains(t)) return o.textContent;
                                })
                                .filter((o) => o),
                            r = i.join(" ");
                        return r
                            ? t.setAttribute("aria-label", r)
                            : t.removeAttribute("aria-label");
                    };
                    e(), f("focus", { onElement: t, withCallback: e });
                })(this),
                this.editorController ||
                    (bt("trix-before-initialize", { onElement: this }),
                    (this.editorController = new X({
                        editorElement: this,
                        html: (this.defaultValue = this.value),
                    })),
                    requestAnimationFrame(() =>
                        bt("trix-initialize", { onElement: this }),
                    )),
                this.editorController.registerSelectionManager(),
                this.registerResetListener(),
                this.registerClickListener(),
                (function (t) {
                    !document.querySelector(":focus") &&
                        t.hasAttribute("autofocus") &&
                        document.querySelector("[autofocus]") === t &&
                        t.focus();
                })(this));
        }
        disconnectedCallback() {
            var t;
            return (
                (t = this.editorController) === null ||
                    t === void 0 ||
                    t.unregisterSelectionManager(),
                this.unregisterResetListener(),
                this.unregisterClickListener()
            );
        }
        registerResetListener() {
            return (
                (this.resetListener = this.resetBubbled.bind(this)),
                window.addEventListener("reset", this.resetListener, !1)
            );
        }
        unregisterResetListener() {
            return window.removeEventListener("reset", this.resetListener, !1);
        }
        registerClickListener() {
            return (
                (this.clickListener = this.clickBubbled.bind(this)),
                window.addEventListener("click", this.clickListener, !1)
            );
        }
        unregisterClickListener() {
            return window.removeEventListener("click", this.clickListener, !1);
        }
        resetBubbled(t) {
            if (!t.defaultPrevented && t.target === this.form)
                return this.reset();
        }
        clickBubbled(t) {
            if (t.defaultPrevented || this.contains(t.target)) return;
            let e = V(t.target, { matchingSelector: "label" });
            return e && Array.from(this.labels).includes(e)
                ? this.focus()
                : void 0;
        }
        reset() {
            this.value = this.defaultValue;
        }
    },
    T = {
        VERSION: Oi,
        config: Lt,
        core: Dn,
        models: Pi,
        views: Pn,
        controllers: Zn,
        observers: Qn,
        operations: tr,
        elements: Object.freeze({
            __proto__: null,
            TrixEditorElement: Qt,
            TrixToolbarElement: Zt,
        }),
        filters: Object.freeze({
            __proto__: null,
            Filter: qt,
            attachmentGalleryFilter: Bi,
        }),
    };
Object.assign(T, Pi),
    (window.Trix = T),
    setTimeout(function () {
        customElements.get("trix-toolbar") ||
            customElements.define("trix-toolbar", Zt),
            customElements.get("trix-editor") ||
                customElements.define("trix-editor", Qt);
    }, 0);
T.config.blockAttributes.default.tagName = "p";
T.config.blockAttributes.default.breakOnReturn = !0;
T.config.blockAttributes.heading = {
    tagName: "h2",
    terminal: !0,
    breakOnReturn: !0,
    group: !1,
};
T.config.blockAttributes.subHeading = {
    tagName: "h3",
    terminal: !0,
    breakOnReturn: !0,
    group: !1,
};
T.config.textAttributes.underline = {
    style: { textDecoration: "underline" },
    inheritable: !0,
    parser: (n) =>
        window.getComputedStyle(n).textDecoration.includes("underline"),
};
T.Block.prototype.breaksOnReturn = function () {
    let n = this.getLastAttribute();
    return T.config.blockAttributes[n || "default"]?.breakOnReturn ?? !1;
};
T.LineBreakInsertion.prototype.shouldInsertBlockBreak = function () {
    return this.block.hasAttributes() &&
        this.block.isListItem() &&
        !this.block.isEmpty()
        ? this.startLocation.offset > 0
        : this.shouldBreakFormattedBlock()
          ? !1
          : this.breaksOnReturn;
};
function sr({ state: n }) {
    return {
        state: n,
        init: function () {
            (this.$refs.trixValue.value = this.state),
                this.$refs.trix.editor?.loadHTML(this.state ?? ""),
                this.$watch("state", () => {
                    document.activeElement !== this.$refs.trix &&
                        ((this.$refs.trixValue.value = this.state),
                        this.$refs.trix.editor?.loadHTML(this.state ?? ""));
                });
        },
    };
}
export { sr as default };
