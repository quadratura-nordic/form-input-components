import { defineComponent as Ee, ref as j, computed as $, openBlock as C, createElementBlock as F, normalizeClass as pe, withDirectives as he, createElementVNode as A, unref as L, isRef as K, vModelDynamic as mi, createTextVNode as He, toDisplayString as W, Fragment as Te, createCommentVNode as Q, onMounted as Tt, onBeforeUnmount as pi, nextTick as We, resolveDirective as Xt, createVNode as Ae, vModelRadio as Yt, renderList as Ke, vModelCheckbox as Ar, vModelText as fi, reactive as yi, watch as Wt, normalizeStyle as nr, createBlock as rr } from "vue";
const gi = `.input-component{display:flex;flex-flow:column-reverse;width:100%;transition:all .2s ease-in-out;position:relative;height:40px;--error-color: #ff6565;--primary-color: #1a2c51;--secondary-color: #8d96a8;--hover-color: #223a6b;--black-color: #000;--white-color: #fff}.input-component>*{box-sizing:border-box}.input-component.read-only-input-disabled-movement input:not(:placeholder-shown)+label,.input-component.read-only-input-disabled-movement input:focus+label{color:var(--secondary-color);font-size:15px;transform:translate(10px,2.5px) scale(1)}.input-component.input-component-without-clear-button input{padding-right:15px}.input-component.is-invalid input{border:1px solid var(--error-color)}.input-component.is-invalid input:focus{border:1px solid var(--error-color)}.input-component.is-invalid label,.input-component.is-invalid input:focus+label,.input-component.is-invalid input:not(:placeholder-shown)+label{color:var(--error-color)}.input-component .clear-input{opacity:0;position:absolute;right:0;width:40px;height:calc(100% - 1px);padding:10px;display:flex;justify-content:center;align-items:center;transition:all .2s ease-in-out}.input-component .clear-input.show{opacity:1;cursor:pointer;background-color:transparent;animation:fadeIn .2s ease-in-out;z-index:2}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.input-component .clear-input.show:before,.input-component .clear-input.show:after{position:absolute;content:"";width:50%;height:1px;background-color:var(--black-color)}.input-component .clear-input.show:before{transform:rotate(45deg)}.input-component .clear-input.show:after{transform:rotate(-45deg)}.input-component .clear-input.show:hover:before,.input-component .clear-input.show:hover:after{background-color:var(--hover-color)}.input-component input{width:100%;height:100%;border:1px solid var(--secondary-color);-moz-appearance:none;-webkit-appearance:none;appearance:none;border-radius:8px;font-weight:400;font-size:15px;line-height:22px;color:var(--black-color);padding:10px 40px 10px 15px;background-color:var(--white-color)}.input-component input:focus,.input-component input:hover{cursor:pointer;outline:none}.input-component input:hover{border:1px solid var(--hover-color)}.input-component input:focus{border:1px solid var(--primary-color)}.input-component input:read-only{padding-right:15px}.input-component label{font-weight:400;font-size:15px;line-height:100%;display:inline-block;flex-shrink:1;flex-grow:0;color:var(--secondary-color);background-color:var(--white-color);padding:5px;position:absolute;top:5px}.input-component label:hover{cursor:pointer}.input-component input:placeholder-shown+label{transform:translate(10px,2.5px) scale(1)}.input-component ::-webkit-input-placeholder{opacity:0;transition:inherit}.input-component input:not(:placeholder-shown)+label,.input-component input:focus+label{color:var(--black-color);font-size:12px;transform:translate(10px,-15px) scale(1)}.input-component label,.input-component input{transition:all .2s;touch-action:manipulation}
`, vi = ["type", "id", "readonly", "min", "max"], wi = ["for"];
function xi(n) {
  const e = document.createElement("style");
  return e.setAttribute("type", "text/css"), e.setAttribute("id", "styles-input-component"), document.head.firstChild ? document.head.insertBefore(e, document.head.firstChild) : document.head.appendChild(e), e.appendChild(document.createTextNode(n)), n;
}
xi(gi);
const Ge = /* @__PURE__ */ Ee({
  __name: "InputComponent",
  props: {
    inputType: { default: "text" },
    placeHolder: null,
    errorMessage: null,
    modelValue: null,
    readOnly: { type: Boolean, default: !1 },
    minInput: null,
    maxInput: null,
    hideClearButton: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(n, { expose: e, emit: t }) {
    const r = n, o = j(null), l = Math.random().toString(36).slice(2), a = $({
      get: () => r.modelValue,
      set: (m) => {
        t("update:modelValue", m);
      }
    });
    function c() {
      a.value = "";
    }
    function d() {
      var m;
      (m = o.value) == null || m.focus();
    }
    return e({ focusInput: d }), (m, y) => (C(), F("div", {
      class: pe(["input-component", {
        "read-only-input-disabled-movement": n.readOnly && !n.modelValue,
        "input-component-without-clear-button": n.hideClearButton
      }])
    }, [
      he(A("input", {
        type: n.inputType,
        placeholder: " ",
        id: "input" + L(l),
        "onUpdate:modelValue": y[0] || (y[0] = (k) => K(a) ? a.value = k : null),
        readonly: n.readOnly,
        ref_key: "inputComponent",
        ref: o,
        min: n.minInput,
        max: n.maxInput
      }, null, 8, vi), [
        [mi, L(a)]
      ]),
      A("label", {
        for: "input" + L(l)
      }, [
        He(W(n.placeHolder) + " ", 1),
        n.errorMessage ? (C(), F(Te, { key: 0 }, [
          He("- " + W(n.errorMessage), 1)
        ], 64)) : Q("", !0)
      ], 8, wi),
      !n.readOnly && !n.hideClearButton ? (C(), F("div", {
        key: 0,
        class: pe(["clear-input", { show: n.modelValue }]),
        onClick: c
      }, null, 2)) : Q("", !0)
    ], 2));
  }
}), Ti = `.dropdown-component{display:flex;flex-direction:column;width:100%;position:relative;--error-color: #ff6565;--primary-color: #1a2c51;--secondary-color: #8d96a8;--hover-color: #223a6b;--black-color: #000;--white-color: #fff}.dropdown-component *{box-sizing:border-box;margin:0;padding:0}.dropdown-component input[type=checkbox],.dropdown-component input[type=radio]{position:absolute;opacity:0;left:-99999px}.dropdown-component.is-invalid .dropdown-component-outside{border:1px solid var(--error-color)}.dropdown-component.is-invalid .dropdown-component-outside .dropdown-arrow-box{border-left:1px solid var(--error-color)}.dropdown-component.is-invalid .dropdown-component-outside p{color:var(--error-color)}.dropdown-component.is-invalid .dropdown-component-opened{border:1px solid var(--error-color);border-top:none}.dropdown-component.is-invalid .dropdown-component-opened.up-side-down{border:1px solid var(--error-color);border-bottom:none}.dropdown-component .dropdown-component-outside{display:flex;align-items:center;justify-content:space-between;height:40px;width:100%;background:var(--white-color);border:1px solid var(--secondary-color);border-radius:8px}.dropdown-component .dropdown-component-outside.dropdown-list-opened{border-radius:8px 8px 0 0}.dropdown-component .dropdown-component-outside.dropdown-list-opened .dropdown-arrow-box:before{margin-top:5px;transform:rotate(135deg)}.dropdown-component .dropdown-component-outside.dropdown-list-opened.up-side-down{border-radius:0 0 8px 8px}.dropdown-component .dropdown-component-outside.dropdown-list-opened.up-side-down .dropdown-component-outside-text{top:auto;bottom:-10px}.dropdown-component .dropdown-component-outside .dropdown-component-outside-title{font-weight:400;font-size:15px;line-height:22px;color:var(--secondary-color);width:calc(100% - 40px);padding:0 10px;flex:1;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.dropdown-component .dropdown-component-outside .dropdown-component-outside-title.normal-color{color:var(--black-color)}.dropdown-component .dropdown-component-outside .dropdown-arrow-box{display:flex;align-items:center;justify-content:center;padding:7px 10px;border-left:1px solid var(--secondary-color);height:100%;width:40px}.dropdown-component .dropdown-component-outside .dropdown-arrow-box:before{content:"";display:inline-block;width:11.5px;height:11.5px;margin-top:-5px;border-bottom:2px solid var(--primary-color);border-left:2px solid var(--primary-color);transform:rotate(-45deg)}.dropdown-component .dropdown-component-outside .dropdown-component-outside-text{height:auto;position:absolute;top:-10px;left:10px;font-weight:400;font-size:12px;line-height:100%;color:var(--black-color);padding:5px;z-index:5;margin:0;background-color:var(--white-color)}.dropdown-component .dropdown-component-outside:hover{cursor:pointer;border:1px solid var(--primary-color)}.dropdown-component .dropdown-component-outside:hover .dropdown-arrow-box{border-left:1px solid var(--primary-color)}.dropdown-component .dropdown-component-opened{display:flex;flex-direction:column;background-color:var(--white-color);border-radius:0 0 8px 8px;position:fixed;border:1px solid var(--secondary-color);border-top:none;z-index:6;padding:0;max-height:40vh}.dropdown-component .dropdown-component-opened.up-side-down{top:auto;bottom:40px;flex-direction:column-reverse;border-radius:8px 8px 0 0;border-top:1px solid var(--secondary-color);border-bottom:none}.dropdown-component .dropdown-component-opened.up-side-down .search-box{border-bottom:none;border-top:1px solid var(--secondary-color)}.dropdown-component .dropdown-component-opened .search-box{padding:10px;border-bottom:1px solid var(--secondary-color)}.dropdown-component .dropdown-component-opened ul{overflow:hidden;display:flex;flex-direction:column;list-style:none;margin:0;overflow-y:auto;padding:0 10px;width:100%}.dropdown-component .dropdown-component-opened ul li{height:40px;border-bottom:1px solid var(--secondary-color);display:flex;align-items:center;justify-content:flex-start;width:100%}.dropdown-component .dropdown-component-opened ul li .checkbox{display:flex;align-items:center;width:100%;height:100%}.dropdown-component .dropdown-component-opened ul li .checkbox input[type=checkbox]+label:before{content:"";display:inline-block;width:17px;height:17px;background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iNTUiIHZpZXdCb3g9IjAgMCAxNyA1NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgc3Ryb2tlPSJibGFjayIvPgo8cmVjdCB4PSIwLjUiIHk9IjE5LjUiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTQgMjguNDAwOEw3Ljg0MjAxIDMxLjc1MzVDNy45ODY4MyAzMS44Nzk5IDguMjExNDggMzEuODM5NCA4LjMwMzA0IDMxLjY3MDRMMTMgMjMiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMyIvPgo8cmVjdCB4PSIwLjUiIHk9IjE5LjUiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgc3Ryb2tlPSJibGFjayIvPgo8cmVjdCB3aWR0aD0iMTciIGhlaWdodD0iMTciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMzgpIiBmaWxsPSIjOEQ5NkE4Ii8+CjxwYXRoIGQ9Ik00IDQ3LjQwMDhMNy44NDIwMSA1MC43NTM1QzcuOTg2ODMgNTAuODc5OSA4LjIxMTQ4IDUwLjgzOTQgOC4zMDMwNCA1MC42NzA0TDEzIDQyIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiLz4KPC9zdmc+Cg==) 0 0;background-repeat:no-repeat;margin-right:6px;margin-bottom:-3px;flex-shrink:0}.dropdown-component .dropdown-component-opened ul li .checkbox input[type=checkbox]:checked+label:before{background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iNTUiIHZpZXdCb3g9IjAgMCAxNyA1NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgc3Ryb2tlPSJibGFjayIvPgo8cmVjdCB4PSIwLjUiIHk9IjE5LjUiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTQgMjguNDAwOEw3Ljg0MjAxIDMxLjc1MzVDNy45ODY4MyAzMS44Nzk5IDguMjExNDggMzEuODM5NCA4LjMwMzA0IDMxLjY3MDRMMTMgMjMiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMyIvPgo8cmVjdCB4PSIwLjUiIHk9IjE5LjUiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgc3Ryb2tlPSJibGFjayIvPgo8cmVjdCB3aWR0aD0iMTciIGhlaWdodD0iMTciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMzgpIiBmaWxsPSIjOEQ5NkE4Ii8+CjxwYXRoIGQ9Ik00IDQ3LjQwMDhMNy44NDIwMSA1MC43NTM1QzcuOTg2ODMgNTAuODc5OSA4LjIxMTQ4IDUwLjgzOTQgOC4zMDMwNCA1MC42NzA0TDEzIDQyIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiLz4KPC9zdmc+Cg==) 0 -19px;background-repeat:no-repeat}.dropdown-component .dropdown-component-opened ul li:last-child{border-bottom:none}.dropdown-component .dropdown-component-opened ul li label{display:inline-block;font-weight:400;font-size:15px;line-height:22px;color:var(--black-color);flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:10px 0;height:100%}.dropdown-component .dropdown-component-opened ul li label:hover{cursor:pointer;color:var(--hover-color)}
`, bi = {
  key: 0,
  class: "dropdown-component-outside-text"
}, Ii = /* @__PURE__ */ A("div", { class: "dropdown-arrow-box" }, null, -1), Mi = {
  key: 0,
  class: "search-box"
}, ki = { key: 0 }, Ei = { for: "deselect_option" }, Si = {
  key: 0,
  class: "checkbox"
}, Oi = ["value", "id"], Di = ["for", "title"], Ni = ["value", "id"], Ci = ["for", "title"], Ai = { key: 1 }, Vi = /* @__PURE__ */ A("label", null, "No results found", -1), Fi = [
  Vi
];
function Li(n) {
  const e = document.createElement("style");
  return e.setAttribute("type", "text/css"), e.setAttribute("id", "styles-dropdown-component"), document.head.firstChild ? document.head.insertBefore(e, document.head.firstChild) : document.head.appendChild(e), e.appendChild(document.createTextNode(n)), n;
}
Li(Ti);
const or = /* @__PURE__ */ Ee({
  __name: "DropdownComponent",
  props: {
    placeHolder: { default: "Please select" },
    errorMessage: null,
    modelValue: null,
    options: null,
    displayFunction: { type: Function, default: (n) => n.name ?? "--" },
    valueFunction: { type: Function, default: (n) => n.value ?? "--" },
    multiSelect: { type: Boolean, default: !1 },
    searchBox: { type: Boolean, default: !1 },
    deselectAvailable: { type: Boolean, default: !1 },
    deselectPlaceHolder: { default: "De select" }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: e }) {
    const t = n, r = j(!1), o = j(!1), l = j(""), a = j(), c = j(), d = j(), m = j(), y = $({
      get() {
        if (!t.options)
          return null;
        if (t.multiSelect)
          return t.modelValue ?? [];
        for (let v = 0; v < t.options.length; v++)
          if (t.valueFunction(t.options[v]) === t.modelValue)
            return t.options[v];
        return null;
      },
      set(v) {
        v ? t.multiSelect ? e("update:modelValue", v) : (e("update:modelValue", t.valueFunction(v)), x()) : t.deselectAvailable && !t.multiSelect && v === null && (e("update:modelValue", v), x());
      }
    }), k = $(() => t.options ? l.value ? t.options.filter((v) => t.displayFunction(v).toLowerCase().includes(l.value.toLowerCase())) : t.options : []);
    Tt(() => {
      M(), window.addEventListener("resize", g), window.addEventListener(
        "scroll",
        (v) => {
          var S, I;
          (S = d.value) != null && S.contains(v.target) || (I = c.value) != null && I.contains(v.target) || x();
        },
        !0
      );
    }), pi(() => {
      window.removeEventListener("resize", g), window.removeEventListener("scroll", () => {
        x();
      });
    });
    function M() {
      t.options && t.options.length == 1 && (y.value = t.options[0]);
    }
    function f() {
      return y.value ? t.displayFunction(y.value) : t.placeHolder;
    }
    function O() {
      r.value = !0, g(), t.searchBox && We(() => {
        var v;
        (v = a.value) == null || v.focusInput();
      });
    }
    function x() {
      r.value = !1, o.value = !1, l.value = "";
    }
    function g() {
      We(() => {
        var Z, fe, Se, ye;
        const v = (Z = d.value) == null ? void 0 : Z.getBoundingClientRect(), S = (fe = c.value) == null ? void 0 : fe.getBoundingClientRect();
        if (!v || !S)
          return;
        let I = S.bottom + "px";
        const T = S.left + "px";
        let R = "auto", D = (Se = d.value) == null ? void 0 : Se.parentElement, z = 0;
        for (; D; ) {
          if (D === document.body) {
            z = window.innerHeight;
            break;
          }
          if (D.scrollHeight > D.clientHeight) {
            z = D.getBoundingClientRect().bottom;
            break;
          }
          D = D.parentElement;
        }
        const ee = z - S.bottom;
        v.height <= ee ? o.value = !1 : (o.value = !0, I = "auto", R = window.innerHeight - S.bottom + S.height + "px"), (ye = d.value) == null || ye.setAttribute(
          "style",
          `top: ${I};
       left: ${T};
        bottom: ${R};
       width: ${S.width}px
      `
        );
      });
    }
    function E() {
      const v = y.value;
      if (t.multiSelect && v && (v == null ? void 0 : v.length) > 0) {
        let S = "";
        for (let I = 0; I < (v == null ? void 0 : v.length); I++) {
          if (!t.options)
            return null;
          for (let T = 0; T < t.options.length; T++)
            t.options[T] === v[I] && (S += t.displayFunction(t.options[T]) + ", ");
          S = S.replace(/\w\S*/g, function(T) {
            return T.charAt(0).toUpperCase() + T.substr(1).toLowerCase();
          });
        }
        return S = S.slice(0, -2), (v == null ? void 0 : v.length) > 3 && (S = (v == null ? void 0 : v.length) + " " + t.placeHolder + "s selected "), S;
      }
      return null;
    }
    return (v, S) => {
      const I = Xt("click-outside");
      return C(), F("div", {
        class: "dropdown-component",
        ref_key: "dropdownComponent",
        ref: c
      }, [
        A("div", {
          class: pe(["dropdown-component-outside", { "up-side-down": o.value && r.value, "dropdown-list-opened": r.value }]),
          ref_key: "dropdownComponentOutside",
          ref: m,
          onClick: O
        }, [
          (n.multiSelect ? E() : L(y)) ? (C(), F("p", bi, W(n.errorMessage ? n.placeHolder + " - " + n.errorMessage : n.placeHolder), 1)) : Q("", !0),
          A("p", {
            class: pe(["dropdown-component-outside-title", { "normal-color": n.multiSelect ? E() : L(y) }])
          }, W(n.multiSelect ? E() ? E() : n.errorMessage ? n.placeHolder + " - " + n.errorMessage : n.placeHolder : L(y) && f() ? f() : n.errorMessage ? n.placeHolder + " - " + n.errorMessage : n.placeHolder), 3),
          Ii
        ], 2),
        r.value ? he((C(), F("div", {
          key: 0,
          class: pe(["dropdown-component-opened", { "up-side-down": o.value }]),
          ref_key: "dropdownComponentList",
          ref: d
        }, [
          n.searchBox ? (C(), F("div", Mi, [
            Ae(Ge, {
              ref_key: "inputComponent",
              ref: a,
              modelValue: l.value,
              "onUpdate:modelValue": S[0] || (S[0] = (T) => l.value = T),
              placeHolder: "Search"
            }, null, 8, ["modelValue"])
          ])) : Q("", !0),
          A("ul", null, [
            !n.multiSelect && n.deselectAvailable ? (C(), F("li", ki, [
              he(A("input", {
                type: "radio",
                value: null,
                id: "deselect_option",
                "onUpdate:modelValue": S[1] || (S[1] = (T) => K(y) ? y.value = T : null)
              }, null, 512), [
                [Yt, L(y)]
              ]),
              A("label", Ei, W(n.deselectPlaceHolder), 1)
            ])) : Q("", !0),
            (C(!0), F(Te, null, Ke(L(k), (T, R) => (C(), F("li", { key: R }, [
              n.multiSelect ? (C(), F("div", Si, [
                he(A("input", {
                  type: "checkbox",
                  value: T,
                  id: n.valueFunction(T) + "_" + R,
                  "onUpdate:modelValue": S[2] || (S[2] = (D) => K(y) ? y.value = D : null)
                }, null, 8, Oi), [
                  [Ar, L(y)]
                ]),
                A("label", {
                  for: n.valueFunction(T) + "_" + R,
                  title: n.displayFunction(T),
                  class: "body-text radio-label"
                }, W(n.displayFunction(T)), 9, Di)
              ])) : (C(), F(Te, { key: 1 }, [
                he(A("input", {
                  type: "radio",
                  value: T,
                  id: n.valueFunction(T) + "_" + R,
                  "onUpdate:modelValue": S[3] || (S[3] = (D) => K(y) ? y.value = D : null)
                }, null, 8, Ni), [
                  [Yt, L(y)]
                ]),
                A("label", {
                  for: n.valueFunction(T) + "_" + R,
                  title: n.displayFunction(T)
                }, W(n.displayFunction(T)), 9, Ci)
              ], 64))
            ]))), 128)),
            L(k).length == 0 ? (C(), F("li", Ai, Fi)) : Q("", !0)
          ])
        ], 2)), [
          [I, x]
        ]) : Q("", !0)
      ], 512);
    };
  }
}), zi = `.input-with-suggestions-component{display:flex;flex-direction:column;width:100%;position:relative;--error-color: #ff6565;--primary-color: #1a2c51;--secondary-color: #8d96a8;--hover-color: #223a6b;--black-color: #000;--white-color: #fff}.input-with-suggestions-component *{box-sizing:border-box}.input-with-suggestions-component input[type=checkbox],.input-with-suggestions-component input[type=radio]{position:absolute;opacity:0;left:-99999px}.input-with-suggestions-component.is-invalid .input-with-suggestions-component-list{border:1px solid var(--error-color);border-top:0 none}.input-with-suggestions-component.is-invalid .input-component input{border:1px solid var(--error-color)}.input-with-suggestions-component.is-invalid .input-component input:focus{border:1px solid var(--error-color)}.input-with-suggestions-component.is-invalid .input-component label{color:var(--error-color)}.input-with-suggestions-component.is-invalid .input-component input:focus+label{color:var(--error-color)}.input-with-suggestions-component.is-invalid .input-component input:not(:placeholder-shown)+label{color:var(--error-color)}.input-with-suggestions-component.is-invalid.input-with-suggestions-component-upside-down .input-with-suggestions-component-list{border-top:1px solid var(--error-color)}.input-with-suggestions-component.input-with-suggestions-component-opened .input-component input{border-radius:8px 8px 0 0}.input-with-suggestions-component.input-with-suggestions-component-upside-down .input-with-suggestions-component-list{top:auto;bottom:40px;flex-direction:column-reverse;border-radius:8px 8px 0 0;border-top:1px solid var(--secondary-color);border-bottom:none}.input-with-suggestions-component.input-with-suggestions-component-upside-down .input-with-suggestions-component-list li{border-bottom:none;border-top:1px solid var(--secondary-color)}.input-with-suggestions-component.input-with-suggestions-component-upside-down .input-with-suggestions-component-list li:last-child{border-top:none}.input-with-suggestions-component.input-with-suggestions-component-upside-down .input-component input{border-radius:0 0 8px 8px}.input-with-suggestions-component.input-with-suggestions-component-upside-down .input-component input:not(:placeholder-shown)+label,.input-with-suggestions-component.input-with-suggestions-component-upside-down .input-component input:focus+label{transform:translate(10px,25px) scale(1)}.input-with-suggestions-component .input-with-suggestions-component-list{display:flex;flex-direction:column;background-color:var(--white-color);border-radius:0 0 8px 8px;height:auto;position:absolute;top:40px;left:0;width:100%;border:1px solid var(--secondary-color);border-top:none;z-index:6;overflow:hidden;list-style:none;margin:0;overflow-y:auto;padding:0 10px;max-height:40vh}.input-with-suggestions-component .input-with-suggestions-component-list li{height:40px;border-bottom:1px solid var(--secondary-color);display:flex;align-items:center;justify-content:flex-start;width:100%}.input-with-suggestions-component .input-with-suggestions-component-list li:last-child{border-bottom:none}.input-with-suggestions-component .input-with-suggestions-component-list li label{display:inline-block;font-weight:400;font-size:15px;line-height:22px;color:var(--black-color);flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:10px 0;height:100%}.input-with-suggestions-component .input-with-suggestions-component-list li label:hover{cursor:pointer;color:var(--hover-color)}
`, Pi = ["value", "id"], ji = ["for", "title"], Hi = { key: 0 }, Ui = /* @__PURE__ */ A("label", null, "No results found", -1), Zi = [
  Ui
];
function Ri(n) {
  const e = document.createElement("style");
  return e.setAttribute("type", "text/css"), e.setAttribute("id", "styles-input-component-with-suggestions"), document.head.firstChild ? document.head.insertBefore(e, document.head.firstChild) : document.head.appendChild(e), e.appendChild(document.createTextNode(n)), n;
}
Ri(zi);
const bl = /* @__PURE__ */ Ee({
  __name: "InputComponentWithSuggestions",
  props: {
    placeHolder: { default: "Please select" },
    errorMessage: null,
    modelValue: null,
    suggestions: null,
    valueKey: null,
    displayKey: null
  },
  emits: ["update:modelValue"],
  setup(n, { emit: e }) {
    const t = n, r = j(!1), o = j(!1), l = j(), a = $({
      get() {
        return c.value;
      },
      set(M) {
        c.value = M, y();
      }
    });
    let c = $({
      get() {
        return t.modelValue;
      },
      set(M) {
        e("update:modelValue", M);
      }
    });
    const d = $(() => t.suggestions ? c.value ? t.suggestions.filter((M) => {
      if (typeof M == "string" && c.value && typeof c.value == "string")
        return M.toLowerCase().includes(c.value.toLowerCase());
    }) : t.suggestions : []);
    function m() {
      r.value = !0, k();
    }
    function y() {
      r.value = !1, o.value = !1;
    }
    function k() {
      We(() => {
        const M = l.value;
        if (!M)
          return;
        const f = M.getBoundingClientRect();
        window.innerHeight - f.bottom > 0 ? o.value = !1 : o.value = !0;
      });
    }
    return (M, f) => {
      const O = Xt("click-outside");
      return he((C(), F("div", {
        class: pe(["input-with-suggestions-component", {
          "input-with-suggestions-component-opened": r.value,
          "input-with-suggestions-component-upside-down": o.value
        }])
      }, [
        Ae(Ge, {
          placeHolder: n.placeHolder,
          modelValue: L(c),
          "onUpdate:modelValue": f[0] || (f[0] = (x) => K(c) ? c.value = x : c = x),
          "error-message": n.errorMessage,
          onClick: m
        }, null, 8, ["placeHolder", "modelValue", "error-message"]),
        r.value ? (C(), F("ul", {
          key: 0,
          class: "input-with-suggestions-component-list",
          ref_key: "dropdownComponent",
          ref: l
        }, [
          (C(!0), F(Te, null, Ke(L(d), (x, g) => (C(), F("li", { key: g }, [
            he(A("input", {
              type: "radio",
              value: x,
              id: g + "",
              "onUpdate:modelValue": f[1] || (f[1] = (E) => K(a) ? a.value = E : null)
            }, null, 8, Pi), [
              [Yt, L(a)]
            ]),
            A("label", {
              for: g + "",
              title: x + ""
            }, W(x), 9, ji)
          ]))), 128)),
          L(d).length == 0 ? (C(), F("li", Hi, Zi)) : Q("", !0)
        ], 512)) : Q("", !0)
      ], 2)), [
        [O, y]
      ]);
    };
  }
}), $i = `.date-input-component{display:flex;flex-direction:column;width:100%;gap:10px;--black-color: #000000;--error-color: #ff6565}.date-input-component *{box-sizing:border-box;margin:0;padding:0}.date-input-component.is-invalid .date-input-component-title{color:var(--error-color)}.date-input-component.is-invalid .input-component input{border:1px solid var(--error-color)}.date-input-component.is-invalid .input-component input:focus{border:1px solid var(--error-color)}.date-input-component.is-invalid .input-component label{color:var(--error-color)}.date-input-component.is-invalid .input-component input:focus+label{color:var(--error-color)}.date-input-component.is-invalid .input-component input:not(:placeholder-shown)+label{color:var(--error-color)}.date-input-component .date-input-component-title{font-weight:400;font-size:15px;line-height:22px;color:var(--black-color)}.date-input-component .date-input-components{display:flex;flex-direction:row;gap:20px;width:100%}.date-input-component .date-input-components .input-component{width:calc(33.3333333333% - 10px)}
`, _i = { class: "date-input-component-title" }, Yi = { class: "date-input-components" };
function Wi(n) {
  const e = document.createElement("style");
  return e.setAttribute("type", "text/css"), e.setAttribute("id", "styles-input-date-component"), document.head.firstChild ? document.head.insertBefore(e, document.head.firstChild) : document.head.appendChild(e), e.appendChild(document.createTextNode(n)), n;
}
Wi($i);
const Il = /* @__PURE__ */ Ee({
  __name: "InputDateComponent",
  props: {
    placeHolder: { default: "Date" },
    errorMessage: null,
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(n, { emit: e }) {
    const t = n, r = j(null), o = j(null), l = j();
    let a = j(t.modelValue ? t.modelValue.toString().split("-")[2] : ""), c = j(t.modelValue ? t.modelValue.toString().split("-")[1] : ""), d = j(t.modelValue ? t.modelValue.toString().split("-")[0] : "");
    const m = $({
      get: () => a.value,
      set: (f) => {
        const O = parseInt(f, 10);
        a.value = "0", We(() => {
          O > 31 && (f = "31"), a.value = f, M();
        }), f && O > 4 && o.value && o.value.focusInput(), M();
      }
    }), y = $({
      get: () => c.value,
      set: (f) => {
        const O = parseInt(f, 10);
        c.value = "0", We(() => {
          O > 12 && (f = "12"), c.value = f, M();
        }), f && O > 2 && r.value && r.value.focusInput(), M();
      }
    }), k = $({
      get: () => d.value,
      set: (f) => {
        const O = parseInt(f, 10);
        if (O < 1e3)
          return;
        const x = d.value;
        d.value = "0", We(() => {
          O > 9999 && (f = x), d.value = f, M();
        }), M();
      }
    });
    function M() {
      const f = parseInt(k.value, 10), O = parseInt(y.value, 10) - 1, x = parseInt(m.value, 10), g = new Date(f, O, x, 0, 0, 0);
      if (!m.value || !y.value || !k.value || Number.isNaN(g))
        return;
      const E = g.getFullYear(), v = g.getMonth() + 1, S = v < 10 ? "0" + v : v, I = g.getDate(), T = I < 10 ? "0" + I : I, R = `${E}-${S}-${T}`;
      e("update:modelValue", R);
    }
    return (f, O) => (C(), F("div", {
      class: "date-input-component",
      ref_key: "parentComponent",
      ref: l
    }, [
      A("p", _i, [
        He(W(n.placeHolder) + " ", 1),
        n.errorMessage ? (C(), F(Te, { key: 0 }, [
          He("- " + W(n.errorMessage), 1)
        ], 64)) : Q("", !0)
      ]),
      A("div", Yi, [
        Ae(Ge, {
          "input-type": "number",
          modelValue: L(m),
          "onUpdate:modelValue": O[0] || (O[0] = (x) => K(m) ? m.value = x : null),
          "place-holder": "D"
        }, null, 8, ["modelValue"]),
        Ae(Ge, {
          "input-type": "number",
          ref_key: "monthRef",
          ref: o,
          modelValue: L(y),
          "onUpdate:modelValue": O[1] || (O[1] = (x) => K(y) ? y.value = x : null),
          "place-holder": "M"
        }, null, 8, ["modelValue"]),
        Ae(Ge, {
          "input-type": "number",
          ref_key: "yearRef",
          ref: r,
          modelValue: L(k),
          "onUpdate:modelValue": O[2] || (O[2] = (x) => K(k) ? k.value = x : null),
          "place-holder": "Y"
        }, null, 8, ["modelValue"])
      ])
    ], 512));
  }
}), Gi = { class: "time-picker-dropdown-component" }, Bi = { class: "time-picker-dropdown-component-title" }, qi = ["value", "id"], Ji = ["for", "title"], ir = /* @__PURE__ */ Ee({
  __name: "TimePickerDropdownComponent",
  props: {
    placeHolder: { default: "Please select" },
    modelValue: null,
    options: null,
    displayFunction: { type: Function, default: (n) => n.name ?? "--" },
    valueFunction: { type: Function, default: (n) => n.value ?? "--" }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: e }) {
    const t = n, r = $({
      get() {
        if (!t.options)
          return null;
        for (let l = 0; l < t.options.length; l++)
          if (t.valueFunction(t.options[l]) === t.modelValue)
            return t.options[l];
        return null;
      },
      set(l) {
        l && e("update:modelValue", t.valueFunction(l));
      }
    });
    Tt(() => {
      o();
    });
    function o() {
      t.options && t.options.length == 1 && (r.value = t.options[0]);
    }
    return (l, a) => (C(), F("div", Gi, [
      A("p", Bi, W(n.placeHolder), 1),
      A("ul", null, [
        (C(!0), F(Te, null, Ke(n.options, (c, d) => (C(), F("li", {
          key: d,
          class: pe({ "picked-value": n.valueFunction(c) === n.modelValue })
        }, [
          he(A("input", {
            type: "radio",
            value: c,
            id: n.valueFunction(c) + "_" + d,
            "onUpdate:modelValue": a[0] || (a[0] = (m) => K(r) ? r.value = m : null)
          }, null, 8, qi), [
            [Yt, L(r)]
          ]),
          A("label", {
            for: n.valueFunction(c) + "_" + d,
            title: n.displayFunction(c)
          }, W(n.displayFunction(c)), 9, Ji)
        ], 2))), 128))
      ])
    ]));
  }
}), Xi = `.time-picker-component{display:flex;flex-direction:column;position:relative;--error-color: #ff6565;--primary-color: #1a2c51;--secondary-color: #8d96a8;--hover-color: #223a6b;--black-color: #000;--white-color: #fff}.time-picker-component *{box-sizing:border-box;padding:0;margin:0}.time-picker-component .time-picker-dropdowns{display:flex;position:absolute;top:40px;width:100%}.time-picker-component .time-picker-dropdowns .time-picker-dropdown-component{display:flex;flex-direction:column;background-color:var(--white-color);z-index:3;overflow:hidden;width:50%;transition:all .2s ease-in-out}.time-picker-component .time-picker-dropdowns .time-picker-dropdown-component input[type=checkbox],.time-picker-component .time-picker-dropdowns .time-picker-dropdown-component input[type=radio]{position:absolute;opacity:0;left:-99999px}.time-picker-component .time-picker-dropdowns .time-picker-dropdown-component .time-picker-dropdown-component-title{position:sticky;top:0;height:40px;display:flex;align-items:center;justify-content:center;background-color:var(--secondary-color);color:var(--white-color);font-size:15px;line-height:100%;z-index:3;border:1px solid transparent}.time-picker-component .time-picker-dropdowns .time-picker-dropdown-component ul{border:1px solid var(--secondary-color);border-radius:0 0 8px 8px;list-style:none;max-height:40vh;overflow-y:auto;padding:0 10px}.time-picker-component .time-picker-dropdowns .time-picker-dropdown-component ul li{height:40px;border-bottom:1px solid var(--secondary-color);display:flex;align-items:center;justify-content:flex-start;width:100%}.time-picker-component .time-picker-dropdowns .time-picker-dropdown-component ul li:last-child{border-bottom:none}.time-picker-component .time-picker-dropdowns .time-picker-dropdown-component ul li.picked-value{background-color:var(--primary-color)}.time-picker-component .time-picker-dropdowns .time-picker-dropdown-component ul li.picked-value label{color:var(--white-color)}.time-picker-component .time-picker-dropdowns .time-picker-dropdown-component ul li label{display:flex;align-items:center;justify-content:center;margin-left:10px;font-size:15px;line-height:22px;color:var(--black-color);width:100%;height:100%;z-index:1}.time-picker-component .time-picker-dropdowns .time-picker-dropdown-component ul li:hover:not(.picked-value){background-color:var(--secondary-color)}.time-picker-component .time-picker-dropdowns .time-picker-dropdown-component ul li:hover:not(.picked-value) label{cursor:pointer;color:var(--white-color)}.time-picker-component .time-picker-dropdowns .time-picker-dropdown-component:first-child ul{border-radius:0 0 0 8px}.time-picker-component .time-picker-dropdowns .time-picker-dropdown-component:last-child ul{border-radius:0 0 8px}.time-picker-component.time-picker-component-opened .input-component input{border-radius:8px 8px 0 0}.time-picker-component.time-picker-component-up-side-down .time-picker-dropdowns{top:auto;bottom:40px}.time-picker-component.time-picker-component-up-side-down .time-picker-dropdowns .time-picker-dropdown-component:first-child .time-picker-dropdown-component-title{border-radius:8px 0 0}.time-picker-component.time-picker-component-up-side-down .time-picker-dropdowns .time-picker-dropdown-component:first-child ul{border-radius:0}.time-picker-component.time-picker-component-up-side-down .time-picker-dropdowns .time-picker-dropdown-component:last-child .time-picker-dropdown-component-title{border-radius:0 8px 0 0}.time-picker-component.time-picker-component-up-side-down .time-picker-dropdowns .time-picker-dropdown-component:last-child ul{border-radius:0}.time-picker-component.time-picker-component-up-side-down .input-component input{border-radius:0 0 8px 8px}.time-picker-component.time-picker-component-up-side-down .input-component input:not(:placeholder-shown)+label,.time-picker-component.time-picker-component-up-side-down .input-component input:focus+label{transform:translate(10px,25px) scale(1)}.time-picker-component.is-invalid .time-picker-dropdowns .time-picker-dropdown-component .time-picker-dropdown-component-title{background-color:var(--error-color)}.time-picker-component.is-invalid .time-picker-dropdowns .time-picker-dropdown-component:first-child .time-picker-dropdown-component-title{border-left:1px solid var(--error-color)}.time-picker-component.is-invalid .time-picker-dropdowns .time-picker-dropdown-component:first-child ul{border-left:1px solid var(--error-color);border-bottom:1px solid var(--error-color)}.time-picker-component.is-invalid .time-picker-dropdowns .time-picker-dropdown-component:last-child .time-picker-dropdown-component-title{border-right:1px solid var(--error-color)}.time-picker-component.is-invalid .time-picker-dropdowns .time-picker-dropdown-component:last-child ul{border-right:1px solid var(--error-color);border-bottom:1px solid var(--error-color)}.time-picker-component.is-invalid .input-component input{border:1px solid var(--error-color)}.time-picker-component.is-invalid .input-component input:focus{border:1px solid var(--error-color)}.time-picker-component.is-invalid .input-component label,.time-picker-component.is-invalid .input-component input:focus+label,.time-picker-component.is-invalid .input-component input:not(:placeholder-shown)+label{color:var(--error-color)}
`;
function Qi(n) {
  const e = document.createElement("style");
  return e.setAttribute("type", "text/css"), e.setAttribute("id", "styles-time-picker-component"), document.head.firstChild ? document.head.insertBefore(e, document.head.firstChild) : document.head.appendChild(e), e.appendChild(document.createTextNode(n)), n;
}
Qi(Xi);
const Ml = /* @__PURE__ */ Ee({
  __name: "TimePickerComponent",
  props: {
    modelValue: null,
    minuteInterval: null,
    timeTo: { default: 24 },
    timeFrom: { default: 0 },
    errorMessage: null,
    placeHolder: { default: "Please select" }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: e }) {
    const t = n, r = j(!1), o = j(), l = j(!1), a = $(() => {
      const x = [];
      for (let g = t.timeFrom; g < t.timeTo; g++)
        x.push({ value: k(g), name: k(g) });
      return x;
    }), c = $(() => {
      const x = [];
      let g = t.minuteInterval;
      g === 0 ? g = 60 : g || (g = 1);
      for (let E = 0; E < 60; E += g)
        x.push({ value: k(E), name: k(E) });
      return x;
    }), d = $({
      get() {
        var x;
        return ((x = t.modelValue) == null ? void 0 : x.hour) ?? "--";
      },
      set(x) {
        var g;
        e("update:modelValue", {
          hour: x,
          minute: (g = t.modelValue) == null ? void 0 : g.minute
        });
      }
    }), m = $({
      get: () => {
        var x;
        return ((x = t.modelValue) == null ? void 0 : x.minute) ?? "--";
      },
      set: (x) => {
        var g;
        e("update:modelValue", {
          hour: (g = t.modelValue) == null ? void 0 : g.hour,
          minute: x
        });
      }
    }), y = $(() => `${d.value}:${m.value}`);
    function k(x) {
      return x < 10 ? `0${x}` : String(x);
    }
    function M() {
      r.value = !0, O();
    }
    function f() {
      r.value = !1, l.value = !1;
    }
    function O() {
      We(() => {
        const x = o.value;
        if (!x)
          return;
        const g = x.getBoundingClientRect();
        window.innerHeight - g.bottom > 0 ? l.value = !1 : l.value = !0;
      });
    }
    return (x, g) => {
      const E = Xt("click-outside");
      return C(), F("div", {
        class: pe(["time-picker-component", {
          "time-picker-component-opened": r.value,
          "time-picker-component-up-side-down": l.value
        }])
      }, [
        Ae(Ge, {
          "model-value": L(y),
          onClick: M,
          "read-only": !0,
          "place-holder": n.errorMessage ? n.placeHolder + " - " + n.errorMessage : n.placeHolder
        }, null, 8, ["model-value", "place-holder"]),
        r.value ? he((C(), F("div", {
          key: 0,
          class: "time-picker-dropdowns",
          ref_key: "timePickerComponentDropdowns",
          ref: o
        }, [
          Ae(ir, {
            modelValue: L(d),
            "onUpdate:modelValue": g[0] || (g[0] = (v) => K(d) ? d.value = v : null),
            options: L(a),
            "place-holder": "HH"
          }, null, 8, ["modelValue", "options"]),
          Ae(ir, {
            modelValue: L(m),
            "onUpdate:modelValue": g[1] || (g[1] = (v) => K(m) ? m.value = v : null),
            options: L(c),
            "place-holder": "MM"
          }, null, 8, ["modelValue", "options"])
        ])), [
          [E, f]
        ]) : Q("", !0)
      ], 2);
    };
  }
}), Ki = `.textarea-component{display:flex;flex-flow:column-reverse;width:100%;transition:all .2s ease-in-out;height:100%;position:relative;--error-color: #ff6565;--primary-color: #1a2c51;--secondary-color: #8d96a8;--hover-color: #223a6b;--black-color: #000;--white-color: #fff}.textarea-component *{box-sizing:border-box}.textarea-component.read-only-textarea-disabled-movement textarea:not(:placeholder-shown)+label,.textarea-component.read-only-textarea-disabled-movement textarea:focus+label{color:var(--secondary-color);font-size:15px;transform:translate(10px,4px) scale(1)}.textarea-component.resize-textarea{height:auto}.textarea-component.is-invalid textarea{border:1px solid var(--error-color)}.textarea-component.is-invalid textarea:focus{border:1px solid var(--error-color)}.textarea-component.is-invalid label,.textarea-component.is-invalid textarea:focus+label,.textarea-component.is-invalid textarea:not(:placeholder-shown)+label{color:var(--error-color)}.textarea-component textarea{width:100%;height:42px;font-weight:400;font-size:15px;line-height:22px;color:var(--black-color);border:1px solid var(--secondary-color);border-radius:8px;padding:9px 15px;background:var(--white-color);-moz-appearance:none;-webkit-appearance:none;appearance:none;resize:none}.textarea-component textarea:focus,.textarea-component textarea:hover{cursor:pointer;outline:none}.textarea-component textarea:hover{border:1px solid var(--hover-color)}.textarea-component textarea:focus{border:1px solid var(--primary-color)}.textarea-component label{display:inline-block;flex-shrink:1;flex-grow:0;font-weight:400;font-size:15px;line-height:100%;color:var(--secondary-color);background-color:var(--white-color);padding:5px;position:absolute;top:5px}.textarea-component label:hover{cursor:pointer}.textarea-component textarea:placeholder-shown+label{transform:translate(10px,4px) scale(1)}.textarea-component ::-webkit-input-placeholder{opacity:0;transition:inherit}.textarea-component textarea:not(:placeholder-shown)+label,.textarea-component textarea:focus+label{color:var(--black-color);font-size:12px;transform:translate(10px,-15px) scale(1)}.textarea-component label,.textarea-component textarea{transition:all .2s;touch-action:manipulation}
`, es = ["id", "readonly"], ts = ["for"];
function ns(n) {
  const e = document.createElement("style");
  return e.setAttribute("type", "text/css"), e.setAttribute("id", "styles-text-area-component"), document.head.firstChild ? document.head.insertBefore(e, document.head.firstChild) : document.head.appendChild(e), e.appendChild(document.createTextNode(n)), n;
}
ns(Ki);
const kl = /* @__PURE__ */ Ee({
  __name: "TextAreaComponent",
  props: {
    placeHolder: null,
    errorMessage: null,
    modelValue: null,
    shouldResize: { type: Boolean },
    readOnly: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: e }) {
    const t = n, r = Math.random().toString(36).slice(2), o = j(null), l = $({
      get: () => t.modelValue,
      set: (c) => {
        e("update:modelValue", c);
      }
    });
    Tt(() => {
      a();
    });
    function a() {
      t.shouldResize && o.value && (o.value.style.height = "42px", o.value.style.height = o.value.scrollHeight + 2 + "px", console.log(o.value.scrollHeight), o.value.scrollHeight > o.value.offsetHeight && (o.value.style.height = o.value.scrollHeight + 2 + "px"), t.modelValue === "" && (o.value.style.height = "42px"));
    }
    return (c, d) => (C(), F("div", {
      class: pe(["textarea-component", {
        "read-only-textarea-disabled-movement": n.readOnly && !n.modelValue,
        "resize-textarea": n.shouldResize
      }])
    }, [
      he(A("textarea", {
        placeholder: " ",
        id: "textarea" + L(r),
        "onUpdate:modelValue": d[0] || (d[0] = (m) => K(l) ? l.value = m : null),
        onInput: d[1] || (d[1] = (m) => a()),
        ref_key: "textAreaComponent",
        ref: o,
        readonly: n.readOnly
      }, null, 40, es), [
        [fi, L(l)]
      ]),
      A("label", {
        for: "textarea" + L(r)
      }, [
        He(W(n.placeHolder) + " ", 1),
        n.errorMessage ? (C(), F(Te, { key: 0 }, [
          He("- " + W(n.errorMessage), 1)
        ], 64)) : Q("", !0)
      ], 8, ts)
    ], 2));
  }
});
var Tn = {}, rs = {
  get exports() {
    return Tn;
  },
  set exports(n) {
    Tn = n;
  }
};
/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(n) {
  (function(e, t, r, o) {
    var l = ["", "webkit", "Moz", "MS", "ms", "o"], a = t.createElement("div"), c = "function", d = Math.round, m = Math.abs, y = Date.now;
    function k(i, s, u) {
      return setTimeout(S(i, u), s);
    }
    function M(i, s, u) {
      return Array.isArray(i) ? (f(i, u[s], u), !0) : !1;
    }
    function f(i, s, u) {
      var h;
      if (i)
        if (i.forEach)
          i.forEach(s, u);
        else if (i.length !== o)
          for (h = 0; h < i.length; )
            s.call(u, i[h], h, i), h++;
        else
          for (h in i)
            i.hasOwnProperty(h) && s.call(u, i[h], h, i);
    }
    function O(i, s, u) {
      var h = "DEPRECATED METHOD: " + s + `
` + u + ` AT 
`;
      return function() {
        var p = new Error("get-stack-trace"), b = p && p.stack ? p.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace", V = e.console && (e.console.warn || e.console.log);
        return V && V.call(e.console, h, b), i.apply(this, arguments);
      };
    }
    var x;
    typeof Object.assign != "function" ? x = function(s) {
      if (s === o || s === null)
        throw new TypeError("Cannot convert undefined or null to object");
      for (var u = Object(s), h = 1; h < arguments.length; h++) {
        var p = arguments[h];
        if (p !== o && p !== null)
          for (var b in p)
            p.hasOwnProperty(b) && (u[b] = p[b]);
      }
      return u;
    } : x = Object.assign;
    var g = O(function(s, u, h) {
      for (var p = Object.keys(u), b = 0; b < p.length; )
        (!h || h && s[p[b]] === o) && (s[p[b]] = u[p[b]]), b++;
      return s;
    }, "extend", "Use `assign`."), E = O(function(s, u) {
      return g(s, u, !0);
    }, "merge", "Use `assign`.");
    function v(i, s, u) {
      var h = s.prototype, p;
      p = i.prototype = Object.create(h), p.constructor = i, p._super = h, u && x(p, u);
    }
    function S(i, s) {
      return function() {
        return i.apply(s, arguments);
      };
    }
    function I(i, s) {
      return typeof i == c ? i.apply(s && s[0] || o, s) : i;
    }
    function T(i, s) {
      return i === o ? s : i;
    }
    function R(i, s, u) {
      f(ae(s), function(h) {
        i.addEventListener(h, u, !1);
      });
    }
    function D(i, s, u) {
      f(ae(s), function(h) {
        i.removeEventListener(h, u, !1);
      });
    }
    function z(i, s) {
      for (; i; ) {
        if (i == s)
          return !0;
        i = i.parentNode;
      }
      return !1;
    }
    function ee(i, s) {
      return i.indexOf(s) > -1;
    }
    function ae(i) {
      return i.trim().split(/\s+/g);
    }
    function Z(i, s, u) {
      if (i.indexOf && !u)
        return i.indexOf(s);
      for (var h = 0; h < i.length; ) {
        if (u && i[h][u] == s || !u && i[h] === s)
          return h;
        h++;
      }
      return -1;
    }
    function fe(i) {
      return Array.prototype.slice.call(i, 0);
    }
    function Se(i, s, u) {
      for (var h = [], p = [], b = 0; b < i.length; ) {
        var V = s ? i[b][s] : i[b];
        Z(p, V) < 0 && h.push(i[b]), p[b] = V, b++;
      }
      return u && (s ? h = h.sort(function(X, re) {
        return X[s] > re[s];
      }) : h = h.sort()), h;
    }
    function ye(i, s) {
      for (var u, h, p = s[0].toUpperCase() + s.slice(1), b = 0; b < l.length; ) {
        if (u = l[b], h = u ? u + p : s, h in i)
          return h;
        b++;
      }
      return o;
    }
    var Et = 1;
    function Vo() {
      return Et++;
    }
    function Ln(i) {
      var s = i.ownerDocument || i;
      return s.defaultView || s.parentWindow || e;
    }
    var Fo = /mobile|tablet|ip(ad|hone|od)|android/i, zn = "ontouchstart" in e, Lo = ye(e, "PointerEvent") !== o, zo = zn && Fo.test(navigator.userAgent), st = "touch", Po = "pen", nn = "mouse", jo = "kinect", Ho = 25, ne = 1, Ue = 2, G = 4, ie = 8, St = 1, at = 2, lt = 4, ut = 8, ct = 16, Ie = at | lt, Ze = ut | ct, Pn = Ie | Ze, jn = ["x", "y"], Ot = ["clientX", "clientY"];
    function le(i, s) {
      var u = this;
      this.manager = i, this.callback = s, this.element = i.element, this.target = i.options.inputTarget, this.domHandler = function(h) {
        I(i.options.enable, [i]) && u.handler(h);
      }, this.init();
    }
    le.prototype = {
      /**
       * should handle the inputEvent data and trigger the callback
       * @virtual
       */
      handler: function() {
      },
      /**
       * bind the events
       */
      init: function() {
        this.evEl && R(this.element, this.evEl, this.domHandler), this.evTarget && R(this.target, this.evTarget, this.domHandler), this.evWin && R(Ln(this.element), this.evWin, this.domHandler);
      },
      /**
       * unbind the events
       */
      destroy: function() {
        this.evEl && D(this.element, this.evEl, this.domHandler), this.evTarget && D(this.target, this.evTarget, this.domHandler), this.evWin && D(Ln(this.element), this.evWin, this.domHandler);
      }
    };
    function Uo(i) {
      var s, u = i.options.inputClass;
      return u ? s = u : Lo ? s = on : zo ? s = Ct : zn ? s = sn : s = Nt, new s(i, Zo);
    }
    function Zo(i, s, u) {
      var h = u.pointers.length, p = u.changedPointers.length, b = s & ne && h - p === 0, V = s & (G | ie) && h - p === 0;
      u.isFirst = !!b, u.isFinal = !!V, b && (i.session = {}), u.eventType = s, Ro(i, u), i.emit("hammer.input", u), i.recognize(u), i.session.prevInput = u;
    }
    function Ro(i, s) {
      var u = i.session, h = s.pointers, p = h.length;
      u.firstInput || (u.firstInput = Hn(s)), p > 1 && !u.firstMultiple ? u.firstMultiple = Hn(s) : p === 1 && (u.firstMultiple = !1);
      var b = u.firstInput, V = u.firstMultiple, J = V ? V.center : b.center, X = s.center = Un(h);
      s.timeStamp = y(), s.deltaTime = s.timeStamp - b.timeStamp, s.angle = rn(J, X), s.distance = Dt(J, X), $o(u, s), s.offsetDirection = Rn(s.deltaX, s.deltaY);
      var re = Zn(s.deltaTime, s.deltaX, s.deltaY);
      s.overallVelocityX = re.x, s.overallVelocityY = re.y, s.overallVelocity = m(re.x) > m(re.y) ? re.x : re.y, s.scale = V ? Wo(V.pointers, h) : 1, s.rotation = V ? Yo(V.pointers, h) : 0, s.maxPointers = u.prevInput ? s.pointers.length > u.prevInput.maxPointers ? s.pointers.length : u.prevInput.maxPointers : s.pointers.length, _o(u, s);
      var ke = i.element;
      z(s.srcEvent.target, ke) && (ke = s.srcEvent.target), s.target = ke;
    }
    function $o(i, s) {
      var u = s.center, h = i.offsetDelta || {}, p = i.prevDelta || {}, b = i.prevInput || {};
      (s.eventType === ne || b.eventType === G) && (p = i.prevDelta = {
        x: b.deltaX || 0,
        y: b.deltaY || 0
      }, h = i.offsetDelta = {
        x: u.x,
        y: u.y
      }), s.deltaX = p.x + (u.x - h.x), s.deltaY = p.y + (u.y - h.y);
    }
    function _o(i, s) {
      var u = i.lastInterval || s, h = s.timeStamp - u.timeStamp, p, b, V, J;
      if (s.eventType != ie && (h > Ho || u.velocity === o)) {
        var X = s.deltaX - u.deltaX, re = s.deltaY - u.deltaY, ke = Zn(h, X, re);
        b = ke.x, V = ke.y, p = m(ke.x) > m(ke.y) ? ke.x : ke.y, J = Rn(X, re), i.lastInterval = s;
      } else
        p = u.velocity, b = u.velocityX, V = u.velocityY, J = u.direction;
      s.velocity = p, s.velocityX = b, s.velocityY = V, s.direction = J;
    }
    function Hn(i) {
      for (var s = [], u = 0; u < i.pointers.length; )
        s[u] = {
          clientX: d(i.pointers[u].clientX),
          clientY: d(i.pointers[u].clientY)
        }, u++;
      return {
        timeStamp: y(),
        pointers: s,
        center: Un(s),
        deltaX: i.deltaX,
        deltaY: i.deltaY
      };
    }
    function Un(i) {
      var s = i.length;
      if (s === 1)
        return {
          x: d(i[0].clientX),
          y: d(i[0].clientY)
        };
      for (var u = 0, h = 0, p = 0; p < s; )
        u += i[p].clientX, h += i[p].clientY, p++;
      return {
        x: d(u / s),
        y: d(h / s)
      };
    }
    function Zn(i, s, u) {
      return {
        x: s / i || 0,
        y: u / i || 0
      };
    }
    function Rn(i, s) {
      return i === s ? St : m(i) >= m(s) ? i < 0 ? at : lt : s < 0 ? ut : ct;
    }
    function Dt(i, s, u) {
      u || (u = jn);
      var h = s[u[0]] - i[u[0]], p = s[u[1]] - i[u[1]];
      return Math.sqrt(h * h + p * p);
    }
    function rn(i, s, u) {
      u || (u = jn);
      var h = s[u[0]] - i[u[0]], p = s[u[1]] - i[u[1]];
      return Math.atan2(p, h) * 180 / Math.PI;
    }
    function Yo(i, s) {
      return rn(s[1], s[0], Ot) + rn(i[1], i[0], Ot);
    }
    function Wo(i, s) {
      return Dt(s[0], s[1], Ot) / Dt(i[0], i[1], Ot);
    }
    var Go = {
      mousedown: ne,
      mousemove: Ue,
      mouseup: G
    }, Bo = "mousedown", qo = "mousemove mouseup";
    function Nt() {
      this.evEl = Bo, this.evWin = qo, this.pressed = !1, le.apply(this, arguments);
    }
    v(Nt, le, {
      /**
       * handle mouse events
       * @param {Object} ev
       */
      handler: function(s) {
        var u = Go[s.type];
        u & ne && s.button === 0 && (this.pressed = !0), u & Ue && s.which !== 1 && (u = G), this.pressed && (u & G && (this.pressed = !1), this.callback(this.manager, u, {
          pointers: [s],
          changedPointers: [s],
          pointerType: nn,
          srcEvent: s
        }));
      }
    });
    var Jo = {
      pointerdown: ne,
      pointermove: Ue,
      pointerup: G,
      pointercancel: ie,
      pointerout: ie
    }, Xo = {
      2: st,
      3: Po,
      4: nn,
      5: jo
      // see https://twitter.com/jacobrossi/status/480596438489890816
    }, $n = "pointerdown", _n = "pointermove pointerup pointercancel";
    e.MSPointerEvent && !e.PointerEvent && ($n = "MSPointerDown", _n = "MSPointerMove MSPointerUp MSPointerCancel");
    function on() {
      this.evEl = $n, this.evWin = _n, le.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
    }
    v(on, le, {
      /**
       * handle mouse events
       * @param {Object} ev
       */
      handler: function(s) {
        var u = this.store, h = !1, p = s.type.toLowerCase().replace("ms", ""), b = Jo[p], V = Xo[s.pointerType] || s.pointerType, J = V == st, X = Z(u, s.pointerId, "pointerId");
        b & ne && (s.button === 0 || J) ? X < 0 && (u.push(s), X = u.length - 1) : b & (G | ie) && (h = !0), !(X < 0) && (u[X] = s, this.callback(this.manager, b, {
          pointers: u,
          changedPointers: [s],
          pointerType: V,
          srcEvent: s
        }), h && u.splice(X, 1));
      }
    });
    var Qo = {
      touchstart: ne,
      touchmove: Ue,
      touchend: G,
      touchcancel: ie
    }, Ko = "touchstart", ei = "touchstart touchmove touchend touchcancel";
    function Yn() {
      this.evTarget = Ko, this.evWin = ei, this.started = !1, le.apply(this, arguments);
    }
    v(Yn, le, {
      handler: function(s) {
        var u = Qo[s.type];
        if (u === ne && (this.started = !0), !!this.started) {
          var h = ti.call(this, s, u);
          u & (G | ie) && h[0].length - h[1].length === 0 && (this.started = !1), this.callback(this.manager, u, {
            pointers: h[0],
            changedPointers: h[1],
            pointerType: st,
            srcEvent: s
          });
        }
      }
    });
    function ti(i, s) {
      var u = fe(i.touches), h = fe(i.changedTouches);
      return s & (G | ie) && (u = Se(u.concat(h), "identifier", !0)), [u, h];
    }
    var ni = {
      touchstart: ne,
      touchmove: Ue,
      touchend: G,
      touchcancel: ie
    }, ri = "touchstart touchmove touchend touchcancel";
    function Ct() {
      this.evTarget = ri, this.targetIds = {}, le.apply(this, arguments);
    }
    v(Ct, le, {
      handler: function(s) {
        var u = ni[s.type], h = oi.call(this, s, u);
        h && this.callback(this.manager, u, {
          pointers: h[0],
          changedPointers: h[1],
          pointerType: st,
          srcEvent: s
        });
      }
    });
    function oi(i, s) {
      var u = fe(i.touches), h = this.targetIds;
      if (s & (ne | Ue) && u.length === 1)
        return h[u[0].identifier] = !0, [u, u];
      var p, b, V = fe(i.changedTouches), J = [], X = this.target;
      if (b = u.filter(function(re) {
        return z(re.target, X);
      }), s === ne)
        for (p = 0; p < b.length; )
          h[b[p].identifier] = !0, p++;
      for (p = 0; p < V.length; )
        h[V[p].identifier] && J.push(V[p]), s & (G | ie) && delete h[V[p].identifier], p++;
      if (J.length)
        return [
          // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
          Se(b.concat(J), "identifier", !0),
          J
        ];
    }
    var ii = 2500, Wn = 25;
    function sn() {
      le.apply(this, arguments);
      var i = S(this.handler, this);
      this.touch = new Ct(this.manager, i), this.mouse = new Nt(this.manager, i), this.primaryTouch = null, this.lastTouches = [];
    }
    v(sn, le, {
      /**
       * handle mouse and touch events
       * @param {Hammer} manager
       * @param {String} inputEvent
       * @param {Object} inputData
       */
      handler: function(s, u, h) {
        var p = h.pointerType == st, b = h.pointerType == nn;
        if (!(b && h.sourceCapabilities && h.sourceCapabilities.firesTouchEvents)) {
          if (p)
            si.call(this, u, h);
          else if (b && ai.call(this, h))
            return;
          this.callback(s, u, h);
        }
      },
      /**
       * remove the event listeners
       */
      destroy: function() {
        this.touch.destroy(), this.mouse.destroy();
      }
    });
    function si(i, s) {
      i & ne ? (this.primaryTouch = s.changedPointers[0].identifier, Gn.call(this, s)) : i & (G | ie) && Gn.call(this, s);
    }
    function Gn(i) {
      var s = i.changedPointers[0];
      if (s.identifier === this.primaryTouch) {
        var u = { x: s.clientX, y: s.clientY };
        this.lastTouches.push(u);
        var h = this.lastTouches, p = function() {
          var b = h.indexOf(u);
          b > -1 && h.splice(b, 1);
        };
        setTimeout(p, ii);
      }
    }
    function ai(i) {
      for (var s = i.srcEvent.clientX, u = i.srcEvent.clientY, h = 0; h < this.lastTouches.length; h++) {
        var p = this.lastTouches[h], b = Math.abs(s - p.x), V = Math.abs(u - p.y);
        if (b <= Wn && V <= Wn)
          return !0;
      }
      return !1;
    }
    var Bn = ye(a.style, "touchAction"), qn = Bn !== o, Jn = "compute", Xn = "auto", an = "manipulation", Re = "none", dt = "pan-x", ht = "pan-y", At = ui();
    function ln(i, s) {
      this.manager = i, this.set(s);
    }
    ln.prototype = {
      /**
       * set the touchAction value on the element or enable the polyfill
       * @param {String} value
       */
      set: function(i) {
        i == Jn && (i = this.compute()), qn && this.manager.element.style && At[i] && (this.manager.element.style[Bn] = i), this.actions = i.toLowerCase().trim();
      },
      /**
       * just re-set the touchAction value
       */
      update: function() {
        this.set(this.manager.options.touchAction);
      },
      /**
       * compute the value for the touchAction property based on the recognizer's settings
       * @returns {String} value
       */
      compute: function() {
        var i = [];
        return f(this.manager.recognizers, function(s) {
          I(s.options.enable, [s]) && (i = i.concat(s.getTouchAction()));
        }), li(i.join(" "));
      },
      /**
       * this method is called on each input cycle and provides the preventing of the browser behavior
       * @param {Object} input
       */
      preventDefaults: function(i) {
        var s = i.srcEvent, u = i.offsetDirection;
        if (this.manager.session.prevented) {
          s.preventDefault();
          return;
        }
        var h = this.actions, p = ee(h, Re) && !At[Re], b = ee(h, ht) && !At[ht], V = ee(h, dt) && !At[dt];
        if (p) {
          var J = i.pointers.length === 1, X = i.distance < 2, re = i.deltaTime < 250;
          if (J && X && re)
            return;
        }
        if (!(V && b) && (p || b && u & Ie || V && u & Ze))
          return this.preventSrc(s);
      },
      /**
       * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
       * @param {Object} srcEvent
       */
      preventSrc: function(i) {
        this.manager.session.prevented = !0, i.preventDefault();
      }
    };
    function li(i) {
      if (ee(i, Re))
        return Re;
      var s = ee(i, dt), u = ee(i, ht);
      return s && u ? Re : s || u ? s ? dt : ht : ee(i, an) ? an : Xn;
    }
    function ui() {
      if (!qn)
        return !1;
      var i = {}, s = e.CSS && e.CSS.supports;
      return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(u) {
        i[u] = s ? e.CSS.supports("touch-action", u) : !0;
      }), i;
    }
    var Vt = 1, ue = 2, Je = 4, Fe = 8, Oe = Fe, mt = 16, Me = 32;
    function De(i) {
      this.options = x({}, this.defaults, i || {}), this.id = Vo(), this.manager = null, this.options.enable = T(this.options.enable, !0), this.state = Vt, this.simultaneous = {}, this.requireFail = [];
    }
    De.prototype = {
      /**
       * @virtual
       * @type {Object}
       */
      defaults: {},
      /**
       * set options
       * @param {Object} options
       * @return {Recognizer}
       */
      set: function(i) {
        return x(this.options, i), this.manager && this.manager.touchAction.update(), this;
      },
      /**
       * recognize simultaneous with an other recognizer.
       * @param {Recognizer} otherRecognizer
       * @returns {Recognizer} this
       */
      recognizeWith: function(i) {
        if (M(i, "recognizeWith", this))
          return this;
        var s = this.simultaneous;
        return i = Ft(i, this), s[i.id] || (s[i.id] = i, i.recognizeWith(this)), this;
      },
      /**
       * drop the simultaneous link. it doesnt remove the link on the other recognizer.
       * @param {Recognizer} otherRecognizer
       * @returns {Recognizer} this
       */
      dropRecognizeWith: function(i) {
        return M(i, "dropRecognizeWith", this) ? this : (i = Ft(i, this), delete this.simultaneous[i.id], this);
      },
      /**
       * recognizer can only run when an other is failing
       * @param {Recognizer} otherRecognizer
       * @returns {Recognizer} this
       */
      requireFailure: function(i) {
        if (M(i, "requireFailure", this))
          return this;
        var s = this.requireFail;
        return i = Ft(i, this), Z(s, i) === -1 && (s.push(i), i.requireFailure(this)), this;
      },
      /**
       * drop the requireFailure link. it does not remove the link on the other recognizer.
       * @param {Recognizer} otherRecognizer
       * @returns {Recognizer} this
       */
      dropRequireFailure: function(i) {
        if (M(i, "dropRequireFailure", this))
          return this;
        i = Ft(i, this);
        var s = Z(this.requireFail, i);
        return s > -1 && this.requireFail.splice(s, 1), this;
      },
      /**
       * has require failures boolean
       * @returns {boolean}
       */
      hasRequireFailures: function() {
        return this.requireFail.length > 0;
      },
      /**
       * if the recognizer can recognize simultaneous with an other recognizer
       * @param {Recognizer} otherRecognizer
       * @returns {Boolean}
       */
      canRecognizeWith: function(i) {
        return !!this.simultaneous[i.id];
      },
      /**
       * You should use `tryEmit` instead of `emit` directly to check
       * that all the needed recognizers has failed before emitting.
       * @param {Object} input
       */
      emit: function(i) {
        var s = this, u = this.state;
        function h(p) {
          s.manager.emit(p, i);
        }
        u < Fe && h(s.options.event + Qn(u)), h(s.options.event), i.additionalEvent && h(i.additionalEvent), u >= Fe && h(s.options.event + Qn(u));
      },
      /**
       * Check that all the require failure recognizers has failed,
       * if true, it emits a gesture event,
       * otherwise, setup the state to FAILED.
       * @param {Object} input
       */
      tryEmit: function(i) {
        if (this.canEmit())
          return this.emit(i);
        this.state = Me;
      },
      /**
       * can we emit?
       * @returns {boolean}
       */
      canEmit: function() {
        for (var i = 0; i < this.requireFail.length; ) {
          if (!(this.requireFail[i].state & (Me | Vt)))
            return !1;
          i++;
        }
        return !0;
      },
      /**
       * update the recognizer
       * @param {Object} inputData
       */
      recognize: function(i) {
        var s = x({}, i);
        if (!I(this.options.enable, [this, s])) {
          this.reset(), this.state = Me;
          return;
        }
        this.state & (Oe | mt | Me) && (this.state = Vt), this.state = this.process(s), this.state & (ue | Je | Fe | mt) && this.tryEmit(s);
      },
      /**
       * return the state of the recognizer
       * the actual recognizing happens in this method
       * @virtual
       * @param {Object} inputData
       * @returns {Const} STATE
       */
      process: function(i) {
      },
      // jshint ignore:line
      /**
       * return the preferred touch-action
       * @virtual
       * @returns {Array}
       */
      getTouchAction: function() {
      },
      /**
       * called when the gesture isn't allowed to recognize
       * like when another is being recognized or it is disabled
       * @virtual
       */
      reset: function() {
      }
    };
    function Qn(i) {
      return i & mt ? "cancel" : i & Fe ? "end" : i & Je ? "move" : i & ue ? "start" : "";
    }
    function Kn(i) {
      return i == ct ? "down" : i == ut ? "up" : i == at ? "left" : i == lt ? "right" : "";
    }
    function Ft(i, s) {
      var u = s.manager;
      return u ? u.get(i) : i;
    }
    function ge() {
      De.apply(this, arguments);
    }
    v(ge, De, {
      /**
       * @namespace
       * @memberof AttrRecognizer
       */
      defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
      },
      /**
       * Used to check if it the recognizer receives valid input, like input.distance > 10.
       * @memberof AttrRecognizer
       * @param {Object} input
       * @returns {Boolean} recognized
       */
      attrTest: function(i) {
        var s = this.options.pointers;
        return s === 0 || i.pointers.length === s;
      },
      /**
       * Process the input and return the state for the recognizer
       * @memberof AttrRecognizer
       * @param {Object} input
       * @returns {*} State
       */
      process: function(i) {
        var s = this.state, u = i.eventType, h = s & (ue | Je), p = this.attrTest(i);
        return h && (u & ie || !p) ? s | mt : h || p ? u & G ? s | Fe : s & ue ? s | Je : ue : Me;
      }
    });
    function Lt() {
      ge.apply(this, arguments), this.pX = null, this.pY = null;
    }
    v(Lt, ge, {
      /**
       * @namespace
       * @memberof PanRecognizer
       */
      defaults: {
        event: "pan",
        threshold: 10,
        pointers: 1,
        direction: Pn
      },
      getTouchAction: function() {
        var i = this.options.direction, s = [];
        return i & Ie && s.push(ht), i & Ze && s.push(dt), s;
      },
      directionTest: function(i) {
        var s = this.options, u = !0, h = i.distance, p = i.direction, b = i.deltaX, V = i.deltaY;
        return p & s.direction || (s.direction & Ie ? (p = b === 0 ? St : b < 0 ? at : lt, u = b != this.pX, h = Math.abs(i.deltaX)) : (p = V === 0 ? St : V < 0 ? ut : ct, u = V != this.pY, h = Math.abs(i.deltaY))), i.direction = p, u && h > s.threshold && p & s.direction;
      },
      attrTest: function(i) {
        return ge.prototype.attrTest.call(this, i) && (this.state & ue || !(this.state & ue) && this.directionTest(i));
      },
      emit: function(i) {
        this.pX = i.deltaX, this.pY = i.deltaY;
        var s = Kn(i.direction);
        s && (i.additionalEvent = this.options.event + s), this._super.emit.call(this, i);
      }
    });
    function un() {
      ge.apply(this, arguments);
    }
    v(un, ge, {
      /**
       * @namespace
       * @memberof PinchRecognizer
       */
      defaults: {
        event: "pinch",
        threshold: 0,
        pointers: 2
      },
      getTouchAction: function() {
        return [Re];
      },
      attrTest: function(i) {
        return this._super.attrTest.call(this, i) && (Math.abs(i.scale - 1) > this.options.threshold || this.state & ue);
      },
      emit: function(i) {
        if (i.scale !== 1) {
          var s = i.scale < 1 ? "in" : "out";
          i.additionalEvent = this.options.event + s;
        }
        this._super.emit.call(this, i);
      }
    });
    function cn() {
      De.apply(this, arguments), this._timer = null, this._input = null;
    }
    v(cn, De, {
      /**
       * @namespace
       * @memberof PressRecognizer
       */
      defaults: {
        event: "press",
        pointers: 1,
        time: 251,
        // minimal time of the pointer to be pressed
        threshold: 9
        // a minimal movement is ok, but keep it low
      },
      getTouchAction: function() {
        return [Xn];
      },
      process: function(i) {
        var s = this.options, u = i.pointers.length === s.pointers, h = i.distance < s.threshold, p = i.deltaTime > s.time;
        if (this._input = i, !h || !u || i.eventType & (G | ie) && !p)
          this.reset();
        else if (i.eventType & ne)
          this.reset(), this._timer = k(function() {
            this.state = Oe, this.tryEmit();
          }, s.time, this);
        else if (i.eventType & G)
          return Oe;
        return Me;
      },
      reset: function() {
        clearTimeout(this._timer);
      },
      emit: function(i) {
        this.state === Oe && (i && i.eventType & G ? this.manager.emit(this.options.event + "up", i) : (this._input.timeStamp = y(), this.manager.emit(this.options.event, this._input)));
      }
    });
    function dn() {
      ge.apply(this, arguments);
    }
    v(dn, ge, {
      /**
       * @namespace
       * @memberof RotateRecognizer
       */
      defaults: {
        event: "rotate",
        threshold: 0,
        pointers: 2
      },
      getTouchAction: function() {
        return [Re];
      },
      attrTest: function(i) {
        return this._super.attrTest.call(this, i) && (Math.abs(i.rotation) > this.options.threshold || this.state & ue);
      }
    });
    function hn() {
      ge.apply(this, arguments);
    }
    v(hn, ge, {
      /**
       * @namespace
       * @memberof SwipeRecognizer
       */
      defaults: {
        event: "swipe",
        threshold: 10,
        velocity: 0.3,
        direction: Ie | Ze,
        pointers: 1
      },
      getTouchAction: function() {
        return Lt.prototype.getTouchAction.call(this);
      },
      attrTest: function(i) {
        var s = this.options.direction, u;
        return s & (Ie | Ze) ? u = i.overallVelocity : s & Ie ? u = i.overallVelocityX : s & Ze && (u = i.overallVelocityY), this._super.attrTest.call(this, i) && s & i.offsetDirection && i.distance > this.options.threshold && i.maxPointers == this.options.pointers && m(u) > this.options.velocity && i.eventType & G;
      },
      emit: function(i) {
        var s = Kn(i.offsetDirection);
        s && this.manager.emit(this.options.event + s, i), this.manager.emit(this.options.event, i);
      }
    });
    function zt() {
      De.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0;
    }
    v(zt, De, {
      /**
       * @namespace
       * @memberof PinchRecognizer
       */
      defaults: {
        event: "tap",
        pointers: 1,
        taps: 1,
        interval: 300,
        // max time between the multi-tap taps
        time: 250,
        // max time of the pointer to be down (like finger on the screen)
        threshold: 9,
        // a minimal movement is ok, but keep it low
        posThreshold: 10
        // a multi-tap can be a bit off the initial position
      },
      getTouchAction: function() {
        return [an];
      },
      process: function(i) {
        var s = this.options, u = i.pointers.length === s.pointers, h = i.distance < s.threshold, p = i.deltaTime < s.time;
        if (this.reset(), i.eventType & ne && this.count === 0)
          return this.failTimeout();
        if (h && p && u) {
          if (i.eventType != G)
            return this.failTimeout();
          var b = this.pTime ? i.timeStamp - this.pTime < s.interval : !0, V = !this.pCenter || Dt(this.pCenter, i.center) < s.posThreshold;
          this.pTime = i.timeStamp, this.pCenter = i.center, !V || !b ? this.count = 1 : this.count += 1, this._input = i;
          var J = this.count % s.taps;
          if (J === 0)
            return this.hasRequireFailures() ? (this._timer = k(function() {
              this.state = Oe, this.tryEmit();
            }, s.interval, this), ue) : Oe;
        }
        return Me;
      },
      failTimeout: function() {
        return this._timer = k(function() {
          this.state = Me;
        }, this.options.interval, this), Me;
      },
      reset: function() {
        clearTimeout(this._timer);
      },
      emit: function() {
        this.state == Oe && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
      }
    });
    function Ne(i, s) {
      return s = s || {}, s.recognizers = T(s.recognizers, Ne.defaults.preset), new mn(i, s);
    }
    Ne.VERSION = "2.0.7", Ne.defaults = {
      /**
       * set if DOM events are being triggered.
       * But this is slower and unused by simple implementations, so disabled by default.
       * @type {Boolean}
       * @default false
       */
      domEvents: !1,
      /**
       * The value for the touchAction property/fallback.
       * When set to `compute` it will magically set the correct value based on the added recognizers.
       * @type {String}
       * @default compute
       */
      touchAction: Jn,
      /**
       * @type {Boolean}
       * @default true
       */
      enable: !0,
      /**
       * EXPERIMENTAL FEATURE -- can be removed/changed
       * Change the parent input target element.
       * If Null, then it is being set the to main element.
       * @type {Null|EventTarget}
       * @default null
       */
      inputTarget: null,
      /**
       * force an input class
       * @type {Null|Function}
       * @default null
       */
      inputClass: null,
      /**
       * Default recognizer setup when calling `Hammer()`
       * When creating a new Manager these will be skipped.
       * @type {Array}
       */
      preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [dn, { enable: !1 }],
        [un, { enable: !1 }, ["rotate"]],
        [hn, { direction: Ie }],
        [Lt, { direction: Ie }, ["swipe"]],
        [zt],
        [zt, { event: "doubletap", taps: 2 }, ["tap"]],
        [cn]
      ],
      /**
       * Some CSS properties can be used to improve the working of Hammer.
       * Add them to this method and they will be set when creating a new Manager.
       * @namespace
       */
      cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: "none",
        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: "none",
        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: "none",
        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: "none",
        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: "none",
        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: "rgba(0,0,0,0)"
      }
    };
    var ci = 1, er = 2;
    function mn(i, s) {
      this.options = x({}, Ne.defaults, s || {}), this.options.inputTarget = this.options.inputTarget || i, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = i, this.input = Uo(this), this.touchAction = new ln(this, this.options.touchAction), tr(this, !0), f(this.options.recognizers, function(u) {
        var h = this.add(new u[0](u[1]));
        u[2] && h.recognizeWith(u[2]), u[3] && h.requireFailure(u[3]);
      }, this);
    }
    mn.prototype = {
      /**
       * set options
       * @param {Object} options
       * @returns {Manager}
       */
      set: function(i) {
        return x(this.options, i), i.touchAction && this.touchAction.update(), i.inputTarget && (this.input.destroy(), this.input.target = i.inputTarget, this.input.init()), this;
      },
      /**
       * stop recognizing for this session.
       * This session will be discarded, when a new [input]start event is fired.
       * When forced, the recognizer cycle is stopped immediately.
       * @param {Boolean} [force]
       */
      stop: function(i) {
        this.session.stopped = i ? er : ci;
      },
      /**
       * run the recognizers!
       * called by the inputHandler function on every movement of the pointers (touches)
       * it walks through all the recognizers and tries to detect the gesture that is being made
       * @param {Object} inputData
       */
      recognize: function(i) {
        var s = this.session;
        if (!s.stopped) {
          this.touchAction.preventDefaults(i);
          var u, h = this.recognizers, p = s.curRecognizer;
          (!p || p && p.state & Oe) && (p = s.curRecognizer = null);
          for (var b = 0; b < h.length; )
            u = h[b], s.stopped !== er && // 1
            (!p || u == p || // 2
            u.canRecognizeWith(p)) ? u.recognize(i) : u.reset(), !p && u.state & (ue | Je | Fe) && (p = s.curRecognizer = u), b++;
        }
      },
      /**
       * get a recognizer by its event name.
       * @param {Recognizer|String} recognizer
       * @returns {Recognizer|Null}
       */
      get: function(i) {
        if (i instanceof De)
          return i;
        for (var s = this.recognizers, u = 0; u < s.length; u++)
          if (s[u].options.event == i)
            return s[u];
        return null;
      },
      /**
       * add a recognizer to the manager
       * existing recognizers with the same event name will be removed
       * @param {Recognizer} recognizer
       * @returns {Recognizer|Manager}
       */
      add: function(i) {
        if (M(i, "add", this))
          return this;
        var s = this.get(i.options.event);
        return s && this.remove(s), this.recognizers.push(i), i.manager = this, this.touchAction.update(), i;
      },
      /**
       * remove a recognizer by name or instance
       * @param {Recognizer|String} recognizer
       * @returns {Manager}
       */
      remove: function(i) {
        if (M(i, "remove", this))
          return this;
        if (i = this.get(i), i) {
          var s = this.recognizers, u = Z(s, i);
          u !== -1 && (s.splice(u, 1), this.touchAction.update());
        }
        return this;
      },
      /**
       * bind event
       * @param {String} events
       * @param {Function} handler
       * @returns {EventEmitter} this
       */
      on: function(i, s) {
        if (i !== o && s !== o) {
          var u = this.handlers;
          return f(ae(i), function(h) {
            u[h] = u[h] || [], u[h].push(s);
          }), this;
        }
      },
      /**
       * unbind event, leave emit blank to remove all handlers
       * @param {String} events
       * @param {Function} [handler]
       * @returns {EventEmitter} this
       */
      off: function(i, s) {
        if (i !== o) {
          var u = this.handlers;
          return f(ae(i), function(h) {
            s ? u[h] && u[h].splice(Z(u[h], s), 1) : delete u[h];
          }), this;
        }
      },
      /**
       * emit event to the listeners
       * @param {String} event
       * @param {Object} data
       */
      emit: function(i, s) {
        this.options.domEvents && di(i, s);
        var u = this.handlers[i] && this.handlers[i].slice();
        if (!(!u || !u.length)) {
          s.type = i, s.preventDefault = function() {
            s.srcEvent.preventDefault();
          };
          for (var h = 0; h < u.length; )
            u[h](s), h++;
        }
      },
      /**
       * destroy the manager and unbinds all events
       * it doesn't unbind dom events, that is the user own responsibility
       */
      destroy: function() {
        this.element && tr(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
      }
    };
    function tr(i, s) {
      var u = i.element;
      if (u.style) {
        var h;
        f(i.options.cssProps, function(p, b) {
          h = ye(u.style, b), s ? (i.oldCssProps[h] = u.style[h], u.style[h] = p) : u.style[h] = i.oldCssProps[h] || "";
        }), s || (i.oldCssProps = {});
      }
    }
    function di(i, s) {
      var u = t.createEvent("Event");
      u.initEvent(i, !0, !0), u.gesture = s, s.target.dispatchEvent(u);
    }
    x(Ne, {
      INPUT_START: ne,
      INPUT_MOVE: Ue,
      INPUT_END: G,
      INPUT_CANCEL: ie,
      STATE_POSSIBLE: Vt,
      STATE_BEGAN: ue,
      STATE_CHANGED: Je,
      STATE_ENDED: Fe,
      STATE_RECOGNIZED: Oe,
      STATE_CANCELLED: mt,
      STATE_FAILED: Me,
      DIRECTION_NONE: St,
      DIRECTION_LEFT: at,
      DIRECTION_RIGHT: lt,
      DIRECTION_UP: ut,
      DIRECTION_DOWN: ct,
      DIRECTION_HORIZONTAL: Ie,
      DIRECTION_VERTICAL: Ze,
      DIRECTION_ALL: Pn,
      Manager: mn,
      Input: le,
      TouchAction: ln,
      TouchInput: Ct,
      MouseInput: Nt,
      PointerEventInput: on,
      TouchMouseInput: sn,
      SingleTouchInput: Yn,
      Recognizer: De,
      AttrRecognizer: ge,
      Tap: zt,
      Pan: Lt,
      Swipe: hn,
      Pinch: un,
      Rotate: dn,
      Press: cn,
      on: R,
      off: D,
      each: f,
      merge: E,
      extend: g,
      assign: x,
      inherit: v,
      bindFn: S,
      prefixed: ye
    });
    var hi = typeof e < "u" ? e : typeof self < "u" ? self : {};
    hi.Hammer = Ne, typeof o == "function" && o.amd ? o(function() {
      return Ne;
    }) : n.exports ? n.exports = Ne : e[r] = Ne;
  })(window, document, "Hammer");
})(rs);
const sr = Tn, os = `.slider-component{width:100%;--error-color: #ff6565;--primary-color: #1a2c51;--secondary-color: #8d96a8;--hover-color: #223a6b;--black-color: #000;--white-color: #fff}.slider-component *{box-sizing:border-box;padding:0;margin:0}.slider-component .slider{height:2px;background:var(--secondary-color);cursor:pointer;position:relative}.slider-component .slider .slider-start{position:absolute;left:0;background-color:var(--primary-color);height:2px;top:0}.slider-component .slider .slider-dot{background:var(--primary-color);height:16px;width:40px;border-radius:20px;position:absolute;top:-7px;display:flex;align-items:center;justify-content:center}.slider-component .slider .slider-dot .slider-display-value{font-weight:600;font-size:12px;line-height:100%;color:var(--white-color)}.slider-component.is-invalid .slider .slider-start{background-color:var(--error-color)}.slider-component.is-invalid .slider .slider-dot{background:var(--error-color)}
`, is = { class: "slider-component" }, ss = { class: "slider-display-value" };
function as(n) {
  const e = document.createElement("style");
  return e.setAttribute("type", "text/css"), e.setAttribute("id", "styles-slider-component"), document.head.firstChild ? document.head.insertBefore(e, document.head.firstChild) : document.head.appendChild(e), e.appendChild(document.createTextNode(n)), n;
}
as(os);
const El = /* @__PURE__ */ Ee({
  __name: "SliderComponent",
  props: {
    modelValue: null,
    displayValue: null,
    min: { default: 0 },
    max: { default: 100 },
    steps: null
  },
  emits: ["update:modelValue"],
  setup(n, { emit: e }) {
    const t = n, r = j(0);
    j(0);
    const o = j(0), l = j(0), a = j(!0);
    yi({
      right: 0,
      left: 0
    });
    const c = j(null), d = j(null), m = $(() => {
      if (t.steps && t.steps.length > 0) {
        let g = null;
        for (let E = 0; E < t.steps.length; E++)
          (g === null || g > t.steps[E]) && (g = t.steps[E]);
        return g ?? 0;
      }
      return t.min;
    }), y = $(() => {
      if (t.steps && t.steps.length > 0) {
        let g = null;
        for (let E = 0; E < t.steps.length; E++)
          (g === null || g < t.steps[E]) && (g = t.steps[E]);
        return g ?? 0;
      }
      return t.max;
    }), k = $(() => {
      let g = m.value + o.value * (y.value - m.value);
      if (t.steps && t.steps.length > 0) {
        let E = null, v = null;
        for (let S = 0; S < t.steps.length; S++)
          (E === null || v == null || v > Math.abs(t.steps[S] - g)) && (E = t.steps[S], v = Math.abs(t.steps[S] - g));
        return E ?? 0;
      }
      return g;
    }), M = $(() => t.steps && t.steps.length > 0 && !a.value ? (k.value - m.value) / (y.value - m.value) * l.value : o.value * l.value);
    Tt(() => {
      f(), O(), window.addEventListener("resize", () => {
        var E, v;
        !c.value || !d.value || ((E = c.value) == null ? void 0 : E.getBoundingClientRect().width) > 0 && ((v = d.value) == null ? void 0 : v.getBoundingClientRect().width) > 0 && f();
      });
      let g = t.modelValue;
      isNaN(g) && (g = 0), x((g - m.value) / (y.value - m.value) * l.value);
    }), Wt(
      () => r.value,
      () => {
        e("update:modelValue", k.value);
      }
    ), Wt(
      () => t.modelValue,
      () => {
        x(
          (t.modelValue - m.value) / (y.value - m.value) * l.value
        );
      }
    );
    function f() {
      var g, E;
      !c.value || !d.value || (l.value = ((g = c.value) == null ? void 0 : g.getBoundingClientRect().width) - ((E = d.value) == null ? void 0 : E.getBoundingClientRect().width), x(
        (t.modelValue - m.value) / (y.value - m.value) * l.value
      ));
    }
    function O() {
      var D;
      let g = 0, E = 0, v = 0;
      (D = d.value) == null || D.addEventListener("mousedown", (z) => {
        g = z.pageX, v = r.value, document.addEventListener("mouseup", I), document.addEventListener("mousemove", S);
      });
      let S = (z) => {
        a.value = !0, E = z.pageX - g, x(v + E);
      }, I = () => {
        a.value = !1, document.removeEventListener("mouseup", I), document.removeEventListener("mousemove", S);
      };
      if (!d.value)
        return;
      let T = new sr.Manager(d.value), R = new sr.Pan();
      T.add(R), T.on("panstart", (z) => {
        g = z.center.x, v = r.value;
      }), T.on("pan", (z) => {
        a.value = !0, E = z.center.x - g, x(v + E);
      }), T.on("panend", () => {
        a.value = !1;
      });
    }
    function x(g) {
      var E, v, S, I;
      !c.value || !d.value || (r.value = g, r.value < 0 && (r.value = 0), r.value > ((E = c.value) == null ? void 0 : E.getBoundingClientRect().width) - ((v = d.value) == null ? void 0 : v.getBoundingClientRect().width) && (r.value = ((S = c.value) == null ? void 0 : S.getBoundingClientRect().width) - ((I = d.value) == null ? void 0 : I.getBoundingClientRect().width)), o.value = r.value / l.value);
    }
    return (g, E) => (C(), F("div", is, [
      A("div", {
        class: "slider",
        ref_key: "slider",
        ref: c
      }, [
        A("div", {
          class: "slider-start",
          style: nr({ width: L(M) + "px" })
        }, null, 4),
        A("div", {
          class: pe(["slider-dot", { moving: a.value }]),
          ref_key: "dot",
          ref: d,
          style: nr({ transform: "translateX(" + L(M) + "px)" })
        }, [
          A("p", ss, W(n.displayValue), 1)
        ], 6)
      ], 512)
    ]));
  }
});
class qe extends Error {
}
class ls extends qe {
  constructor(e) {
    super(`Invalid DateTime: ${e.toMessage()}`);
  }
}
class us extends qe {
  constructor(e) {
    super(`Invalid Interval: ${e.toMessage()}`);
  }
}
class cs extends qe {
  constructor(e) {
    super(`Invalid Duration: ${e.toMessage()}`);
  }
}
class gt extends qe {
}
class Vr extends qe {
  constructor(e) {
    super(`Invalid unit ${e}`);
  }
}
class de extends qe {
}
class Le extends qe {
  constructor() {
    super("Zone is an abstract class");
  }
}
const w = "numeric", be = "short", se = "long", Gt = {
  year: w,
  month: w,
  day: w
}, Fr = {
  year: w,
  month: be,
  day: w
}, ds = {
  year: w,
  month: be,
  day: w,
  weekday: be
}, Lr = {
  year: w,
  month: se,
  day: w
}, zr = {
  year: w,
  month: se,
  day: w,
  weekday: se
}, Pr = {
  hour: w,
  minute: w
}, jr = {
  hour: w,
  minute: w,
  second: w
}, Hr = {
  hour: w,
  minute: w,
  second: w,
  timeZoneName: be
}, Ur = {
  hour: w,
  minute: w,
  second: w,
  timeZoneName: se
}, Zr = {
  hour: w,
  minute: w,
  hourCycle: "h23"
}, Rr = {
  hour: w,
  minute: w,
  second: w,
  hourCycle: "h23"
}, $r = {
  hour: w,
  minute: w,
  second: w,
  hourCycle: "h23",
  timeZoneName: be
}, _r = {
  hour: w,
  minute: w,
  second: w,
  hourCycle: "h23",
  timeZoneName: se
}, Yr = {
  year: w,
  month: w,
  day: w,
  hour: w,
  minute: w
}, Wr = {
  year: w,
  month: w,
  day: w,
  hour: w,
  minute: w,
  second: w
}, Gr = {
  year: w,
  month: be,
  day: w,
  hour: w,
  minute: w
}, Br = {
  year: w,
  month: be,
  day: w,
  hour: w,
  minute: w,
  second: w
}, hs = {
  year: w,
  month: be,
  day: w,
  weekday: be,
  hour: w,
  minute: w
}, qr = {
  year: w,
  month: se,
  day: w,
  hour: w,
  minute: w,
  timeZoneName: be
}, Jr = {
  year: w,
  month: se,
  day: w,
  hour: w,
  minute: w,
  second: w,
  timeZoneName: be
}, Xr = {
  year: w,
  month: se,
  day: w,
  weekday: se,
  hour: w,
  minute: w,
  timeZoneName: se
}, Qr = {
  year: w,
  month: se,
  day: w,
  weekday: se,
  hour: w,
  minute: w,
  second: w,
  timeZoneName: se
};
class bt {
  /**
   * The type of zone
   * @abstract
   * @type {string}
   */
  get type() {
    throw new Le();
  }
  /**
   * The name of this zone.
   * @abstract
   * @type {string}
   */
  get name() {
    throw new Le();
  }
  get ianaName() {
    return this.name;
  }
  /**
   * Returns whether the offset is known to be fixed for the whole year.
   * @abstract
   * @type {boolean}
   */
  get isUniversal() {
    throw new Le();
  }
  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  offsetName(e, t) {
    throw new Le();
  }
  /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(e, t) {
    throw new Le();
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(e) {
    throw new Le();
  }
  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(e) {
    throw new Le();
  }
  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  get isValid() {
    throw new Le();
  }
}
let pn = null;
class Qt extends bt {
  /**
   * Get a singleton instance of the local zone
   * @return {SystemZone}
   */
  static get instance() {
    return pn === null && (pn = new Qt()), pn;
  }
  /** @override **/
  get type() {
    return "system";
  }
  /** @override **/
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  /** @override **/
  get isUniversal() {
    return !1;
  }
  /** @override **/
  offsetName(e, { format: t, locale: r }) {
    return eo(e, t, r);
  }
  /** @override **/
  formatOffset(e, t) {
    return xt(this.offset(e), t);
  }
  /** @override **/
  offset(e) {
    return -new Date(e).getTimezoneOffset();
  }
  /** @override **/
  equals(e) {
    return e.type === "system";
  }
  /** @override **/
  get isValid() {
    return !0;
  }
}
let $t = {};
function ms(n) {
  return $t[n] || ($t[n] = new Intl.DateTimeFormat("en-US", {
    hour12: !1,
    timeZone: n,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    era: "short"
  })), $t[n];
}
const ps = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6
};
function fs(n, e) {
  const t = n.format(e).replace(/\u200E/g, ""), r = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(t), [, o, l, a, c, d, m, y] = r;
  return [a, o, l, c, d, m, y];
}
function ys(n, e) {
  const t = n.formatToParts(e), r = [];
  for (let o = 0; o < t.length; o++) {
    const { type: l, value: a } = t[o], c = ps[l];
    l === "era" ? r[c] = a : P(c) || (r[c] = parseInt(a, 10));
  }
  return r;
}
let Pt = {};
class Ve extends bt {
  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  static create(e) {
    return Pt[e] || (Pt[e] = new Ve(e)), Pt[e];
  }
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCache() {
    Pt = {}, $t = {};
  }
  /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @deprecated This method returns false for some valid IANA names. Use isValidZone instead.
   * @return {boolean}
   */
  static isValidSpecifier(e) {
    return this.isValidZone(e);
  }
  /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */
  static isValidZone(e) {
    if (!e)
      return !1;
    try {
      return new Intl.DateTimeFormat("en-US", { timeZone: e }).format(), !0;
    } catch {
      return !1;
    }
  }
  constructor(e) {
    super(), this.zoneName = e, this.valid = Ve.isValidZone(e);
  }
  /** @override **/
  get type() {
    return "iana";
  }
  /** @override **/
  get name() {
    return this.zoneName;
  }
  /** @override **/
  get isUniversal() {
    return !1;
  }
  /** @override **/
  offsetName(e, { format: t, locale: r }) {
    return eo(e, t, r, this.name);
  }
  /** @override **/
  formatOffset(e, t) {
    return xt(this.offset(e), t);
  }
  /** @override **/
  offset(e) {
    const t = new Date(e);
    if (isNaN(t))
      return NaN;
    const r = ms(this.name);
    let [o, l, a, c, d, m, y] = r.formatToParts ? ys(r, t) : fs(r, t);
    c === "BC" && (o = -Math.abs(o) + 1);
    const M = Nn({
      year: o,
      month: l,
      day: a,
      hour: d === 24 ? 0 : d,
      minute: m,
      second: y,
      millisecond: 0
    });
    let f = +t;
    const O = f % 1e3;
    return f -= O >= 0 ? O : 1e3 + O, (M - f) / (60 * 1e3);
  }
  /** @override **/
  equals(e) {
    return e.type === "iana" && e.name === this.name;
  }
  /** @override **/
  get isValid() {
    return this.valid;
  }
}
let ar = {};
function gs(n, e = {}) {
  const t = JSON.stringify([n, e]);
  let r = ar[t];
  return r || (r = new Intl.ListFormat(n, e), ar[t] = r), r;
}
let bn = {};
function In(n, e = {}) {
  const t = JSON.stringify([n, e]);
  let r = bn[t];
  return r || (r = new Intl.DateTimeFormat(n, e), bn[t] = r), r;
}
let Mn = {};
function vs(n, e = {}) {
  const t = JSON.stringify([n, e]);
  let r = Mn[t];
  return r || (r = new Intl.NumberFormat(n, e), Mn[t] = r), r;
}
let kn = {};
function ws(n, e = {}) {
  const { base: t, ...r } = e, o = JSON.stringify([n, r]);
  let l = kn[o];
  return l || (l = new Intl.RelativeTimeFormat(n, e), kn[o] = l), l;
}
let vt = null;
function xs() {
  return vt || (vt = new Intl.DateTimeFormat().resolvedOptions().locale, vt);
}
function Ts(n) {
  const e = n.indexOf("-x-");
  e !== -1 && (n = n.substring(0, e));
  const t = n.indexOf("-u-");
  if (t === -1)
    return [n];
  {
    let r, o;
    try {
      r = In(n).resolvedOptions(), o = n;
    } catch {
      const d = n.substring(0, t);
      r = In(d).resolvedOptions(), o = d;
    }
    const { numberingSystem: l, calendar: a } = r;
    return [o, l, a];
  }
}
function bs(n, e, t) {
  return (t || e) && (n.includes("-u-") || (n += "-u"), t && (n += `-ca-${t}`), e && (n += `-nu-${e}`)), n;
}
function Is(n) {
  const e = [];
  for (let t = 1; t <= 12; t++) {
    const r = N.utc(2016, t, 1);
    e.push(n(r));
  }
  return e;
}
function Ms(n) {
  const e = [];
  for (let t = 1; t <= 7; t++) {
    const r = N.utc(2016, 11, 13 + t);
    e.push(n(r));
  }
  return e;
}
function jt(n, e, t, r, o) {
  const l = n.listingMode(t);
  return l === "error" ? null : l === "en" ? r(e) : o(e);
}
function ks(n) {
  return n.numberingSystem && n.numberingSystem !== "latn" ? !1 : n.numberingSystem === "latn" || !n.locale || n.locale.startsWith("en") || new Intl.DateTimeFormat(n.intl).resolvedOptions().numberingSystem === "latn";
}
class Es {
  constructor(e, t, r) {
    this.padTo = r.padTo || 0, this.floor = r.floor || !1;
    const { padTo: o, floor: l, ...a } = r;
    if (!t || Object.keys(a).length > 0) {
      const c = { useGrouping: !1, ...r };
      r.padTo > 0 && (c.minimumIntegerDigits = r.padTo), this.inf = vs(e, c);
    }
  }
  format(e) {
    if (this.inf) {
      const t = this.floor ? Math.floor(e) : e;
      return this.inf.format(t);
    } else {
      const t = this.floor ? Math.floor(e) : Dn(e, 3);
      return q(t, this.padTo);
    }
  }
}
class Ss {
  constructor(e, t, r) {
    this.opts = r, this.originalZone = void 0;
    let o;
    if (this.opts.timeZone)
      this.dt = e;
    else if (e.zone.type === "fixed") {
      const a = -1 * (e.offset / 60), c = a >= 0 ? `Etc/GMT+${a}` : `Etc/GMT${a}`;
      e.offset !== 0 && Ve.create(c).valid ? (o = c, this.dt = e) : (o = "UTC", this.dt = e.offset === 0 ? e : e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    } else
      e.zone.type === "system" ? this.dt = e : e.zone.type === "iana" ? (this.dt = e, o = e.zone.name) : (o = "UTC", this.dt = e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    const l = { ...this.opts };
    l.timeZone = l.timeZone || o, this.dtf = In(t, l);
  }
  format() {
    return this.originalZone ? this.formatToParts().map(({ value: e }) => e).join("") : this.dtf.format(this.dt.toJSDate());
  }
  formatToParts() {
    const e = this.dtf.formatToParts(this.dt.toJSDate());
    return this.originalZone ? e.map((t) => {
      if (t.type === "timeZoneName") {
        const r = this.originalZone.offsetName(this.dt.ts, {
          locale: this.dt.locale,
          format: this.opts.timeZoneName
        });
        return {
          ...t,
          value: r
        };
      } else
        return t;
    }) : e;
  }
  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
}
class Os {
  constructor(e, t, r) {
    this.opts = { style: "long", ...r }, !t && Kr() && (this.rtf = ws(e, r));
  }
  format(e, t) {
    return this.rtf ? this.rtf.format(e, t) : Ys(t, e, this.opts.numeric, this.opts.style !== "long");
  }
  formatToParts(e, t) {
    return this.rtf ? this.rtf.formatToParts(e, t) : [];
  }
}
class _ {
  static fromOpts(e) {
    return _.create(e.locale, e.numberingSystem, e.outputCalendar, e.defaultToEN);
  }
  static create(e, t, r, o = !1) {
    const l = e || B.defaultLocale, a = l || (o ? "en-US" : xs()), c = t || B.defaultNumberingSystem, d = r || B.defaultOutputCalendar;
    return new _(a, c, d, l);
  }
  static resetCache() {
    vt = null, bn = {}, Mn = {}, kn = {};
  }
  static fromObject({ locale: e, numberingSystem: t, outputCalendar: r } = {}) {
    return _.create(e, t, r);
  }
  constructor(e, t, r, o) {
    const [l, a, c] = Ts(e);
    this.locale = l, this.numberingSystem = t || a || null, this.outputCalendar = r || c || null, this.intl = bs(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = o, this.fastNumbersCached = null;
  }
  get fastNumbers() {
    return this.fastNumbersCached == null && (this.fastNumbersCached = ks(this)), this.fastNumbersCached;
  }
  listingMode() {
    const e = this.isEnglish(), t = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return e && t ? "en" : "intl";
  }
  clone(e) {
    return !e || Object.getOwnPropertyNames(e).length === 0 ? this : _.create(
      e.locale || this.specifiedLocale,
      e.numberingSystem || this.numberingSystem,
      e.outputCalendar || this.outputCalendar,
      e.defaultToEN || !1
    );
  }
  redefaultToEN(e = {}) {
    return this.clone({ ...e, defaultToEN: !0 });
  }
  redefaultToSystem(e = {}) {
    return this.clone({ ...e, defaultToEN: !1 });
  }
  months(e, t = !1, r = !0) {
    return jt(this, e, r, ro, () => {
      const o = t ? { month: e, day: "numeric" } : { month: e }, l = t ? "format" : "standalone";
      return this.monthsCache[l][e] || (this.monthsCache[l][e] = Is((a) => this.extract(a, o, "month"))), this.monthsCache[l][e];
    });
  }
  weekdays(e, t = !1, r = !0) {
    return jt(this, e, r, so, () => {
      const o = t ? { weekday: e, year: "numeric", month: "long", day: "numeric" } : { weekday: e }, l = t ? "format" : "standalone";
      return this.weekdaysCache[l][e] || (this.weekdaysCache[l][e] = Ms(
        (a) => this.extract(a, o, "weekday")
      )), this.weekdaysCache[l][e];
    });
  }
  meridiems(e = !0) {
    return jt(
      this,
      void 0,
      e,
      () => ao,
      () => {
        if (!this.meridiemCache) {
          const t = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [N.utc(2016, 11, 13, 9), N.utc(2016, 11, 13, 19)].map(
            (r) => this.extract(r, t, "dayperiod")
          );
        }
        return this.meridiemCache;
      }
    );
  }
  eras(e, t = !0) {
    return jt(this, e, t, lo, () => {
      const r = { era: e };
      return this.eraCache[e] || (this.eraCache[e] = [N.utc(-40, 1, 1), N.utc(2017, 1, 1)].map(
        (o) => this.extract(o, r, "era")
      )), this.eraCache[e];
    });
  }
  extract(e, t, r) {
    const o = this.dtFormatter(e, t), l = o.formatToParts(), a = l.find((c) => c.type.toLowerCase() === r);
    return a ? a.value : null;
  }
  numberFormatter(e = {}) {
    return new Es(this.intl, e.forceSimple || this.fastNumbers, e);
  }
  dtFormatter(e, t = {}) {
    return new Ss(e, this.intl, t);
  }
  relFormatter(e = {}) {
    return new Os(this.intl, this.isEnglish(), e);
  }
  listFormatter(e = {}) {
    return gs(this.intl, e);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  }
  equals(e) {
    return this.locale === e.locale && this.numberingSystem === e.numberingSystem && this.outputCalendar === e.outputCalendar;
  }
}
let fn = null;
class oe extends bt {
  /**
   * Get a singleton instance of UTC
   * @return {FixedOffsetZone}
   */
  static get utcInstance() {
    return fn === null && (fn = new oe(0)), fn;
  }
  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  static instance(e) {
    return e === 0 ? oe.utcInstance : new oe(e);
  }
  /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */
  static parseSpecifier(e) {
    if (e) {
      const t = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (t)
        return new oe(en(t[1], t[2]));
    }
    return null;
  }
  constructor(e) {
    super(), this.fixed = e;
  }
  /** @override **/
  get type() {
    return "fixed";
  }
  /** @override **/
  get name() {
    return this.fixed === 0 ? "UTC" : `UTC${xt(this.fixed, "narrow")}`;
  }
  get ianaName() {
    return this.fixed === 0 ? "Etc/UTC" : `Etc/GMT${xt(-this.fixed, "narrow")}`;
  }
  /** @override **/
  offsetName() {
    return this.name;
  }
  /** @override **/
  formatOffset(e, t) {
    return xt(this.fixed, t);
  }
  /** @override **/
  get isUniversal() {
    return !0;
  }
  /** @override **/
  offset() {
    return this.fixed;
  }
  /** @override **/
  equals(e) {
    return e.type === "fixed" && e.fixed === this.fixed;
  }
  /** @override **/
  get isValid() {
    return !0;
  }
}
class Ds extends bt {
  constructor(e) {
    super(), this.zoneName = e;
  }
  /** @override **/
  get type() {
    return "invalid";
  }
  /** @override **/
  get name() {
    return this.zoneName;
  }
  /** @override **/
  get isUniversal() {
    return !1;
  }
  /** @override **/
  offsetName() {
    return null;
  }
  /** @override **/
  formatOffset() {
    return "";
  }
  /** @override **/
  offset() {
    return NaN;
  }
  /** @override **/
  equals() {
    return !1;
  }
  /** @override **/
  get isValid() {
    return !1;
  }
}
function je(n, e) {
  if (P(n) || n === null)
    return e;
  if (n instanceof bt)
    return n;
  if (Ns(n)) {
    const t = n.toLowerCase();
    return t === "default" ? e : t === "local" || t === "system" ? Qt.instance : t === "utc" || t === "gmt" ? oe.utcInstance : oe.parseSpecifier(t) || Ve.create(n);
  } else
    return Be(n) ? oe.instance(n) : typeof n == "object" && n.offset && typeof n.offset == "number" ? n : new Ds(n);
}
let lr = () => Date.now(), ur = "system", cr = null, dr = null, hr = null, mr = 60, pr;
class B {
  /**
   * Get the callback for returning the current timestamp.
   * @type {function}
   */
  static get now() {
    return lr;
  }
  /**
   * Set the callback for returning the current timestamp.
   * The function should return a number, which will be interpreted as an Epoch millisecond count
   * @type {function}
   * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
   * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
   */
  static set now(e) {
    lr = e;
  }
  /**
   * Set the default time zone to create DateTimes in. Does not affect existing instances.
   * Use the value "system" to reset this value to the system's time zone.
   * @type {string}
   */
  static set defaultZone(e) {
    ur = e;
  }
  /**
   * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
   * The default value is the system's time zone (the one set on the machine that runs this code).
   * @type {Zone}
   */
  static get defaultZone() {
    return je(ur, Qt.instance);
  }
  /**
   * Get the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultLocale() {
    return cr;
  }
  /**
   * Set the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultLocale(e) {
    cr = e;
  }
  /**
   * Get the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultNumberingSystem() {
    return dr;
  }
  /**
   * Set the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultNumberingSystem(e) {
    dr = e;
  }
  /**
   * Get the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultOutputCalendar() {
    return hr;
  }
  /**
   * Set the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultOutputCalendar(e) {
    hr = e;
  }
  /**
   * Get the cutoff year after which a string encoding a year as two digits is interpreted to occur in the current century.
   * @type {number}
   */
  static get twoDigitCutoffYear() {
    return mr;
  }
  /**
   * Set the cutoff year after which a string encoding a year as two digits is interpreted to occur in the current century.
   * @type {number}
   * @example Settings.twoDigitCutoffYear = 0 // cut-off year is 0, so all 'yy' are interpretted as current century
   * @example Settings.twoDigitCutoffYear = 50 // '49' -> 1949; '50' -> 2050
   * @example Settings.twoDigitCutoffYear = 1950 // interpretted as 50
   * @example Settings.twoDigitCutoffYear = 2050 // ALSO interpretted as 50
   */
  static set twoDigitCutoffYear(e) {
    mr = e % 100;
  }
  /**
   * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static get throwOnInvalid() {
    return pr;
  }
  /**
   * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static set throwOnInvalid(e) {
    pr = e;
  }
  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCaches() {
    _.resetCache(), Ve.resetCache();
  }
}
function P(n) {
  return typeof n > "u";
}
function Be(n) {
  return typeof n == "number";
}
function Kt(n) {
  return typeof n == "number" && n % 1 === 0;
}
function Ns(n) {
  return typeof n == "string";
}
function Cs(n) {
  return Object.prototype.toString.call(n) === "[object Date]";
}
function Kr() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function As(n) {
  return Array.isArray(n) ? n : [n];
}
function fr(n, e, t) {
  if (n.length !== 0)
    return n.reduce((r, o) => {
      const l = [e(o), o];
      return r && t(r[0], l[0]) === r[0] ? r : l;
    }, null)[1];
}
function Vs(n, e) {
  return e.reduce((t, r) => (t[r] = n[r], t), {});
}
function tt(n, e) {
  return Object.prototype.hasOwnProperty.call(n, e);
}
function Ce(n, e, t) {
  return Kt(n) && n >= e && n <= t;
}
function Fs(n, e) {
  return n - e * Math.floor(n / e);
}
function q(n, e = 2) {
  const t = n < 0;
  let r;
  return t ? r = "-" + ("" + -n).padStart(e, "0") : r = ("" + n).padStart(e, "0"), r;
}
function Pe(n) {
  if (!(P(n) || n === null || n === ""))
    return parseInt(n, 10);
}
function $e(n) {
  if (!(P(n) || n === null || n === ""))
    return parseFloat(n);
}
function On(n) {
  if (!(P(n) || n === null || n === "")) {
    const e = parseFloat("0." + n) * 1e3;
    return Math.floor(e);
  }
}
function Dn(n, e, t = !1) {
  const r = 10 ** e;
  return (t ? Math.trunc : Math.round)(n * r) / r;
}
function It(n) {
  return n % 4 === 0 && (n % 100 !== 0 || n % 400 === 0);
}
function wt(n) {
  return It(n) ? 366 : 365;
}
function Bt(n, e) {
  const t = Fs(e - 1, 12) + 1, r = n + (e - t) / 12;
  return t === 2 ? It(r) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t - 1];
}
function Nn(n) {
  let e = Date.UTC(
    n.year,
    n.month - 1,
    n.day,
    n.hour,
    n.minute,
    n.second,
    n.millisecond
  );
  return n.year < 100 && n.year >= 0 && (e = new Date(e), e.setUTCFullYear(n.year, n.month - 1, n.day)), +e;
}
function qt(n) {
  const e = (n + Math.floor(n / 4) - Math.floor(n / 100) + Math.floor(n / 400)) % 7, t = n - 1, r = (t + Math.floor(t / 4) - Math.floor(t / 100) + Math.floor(t / 400)) % 7;
  return e === 4 || r === 3 ? 53 : 52;
}
function En(n) {
  return n > 99 ? n : n > B.twoDigitCutoffYear ? 1900 + n : 2e3 + n;
}
function eo(n, e, t, r = null) {
  const o = new Date(n), l = {
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };
  r && (l.timeZone = r);
  const a = { timeZoneName: e, ...l }, c = new Intl.DateTimeFormat(t, a).formatToParts(o).find((d) => d.type.toLowerCase() === "timezonename");
  return c ? c.value : null;
}
function en(n, e) {
  let t = parseInt(n, 10);
  Number.isNaN(t) && (t = 0);
  const r = parseInt(e, 10) || 0, o = t < 0 || Object.is(t, -0) ? -r : r;
  return t * 60 + o;
}
function to(n) {
  const e = Number(n);
  if (typeof n == "boolean" || n === "" || Number.isNaN(e))
    throw new de(`Invalid unit value ${n}`);
  return e;
}
function Jt(n, e) {
  const t = {};
  for (const r in n)
    if (tt(n, r)) {
      const o = n[r];
      if (o == null)
        continue;
      t[e(r)] = to(o);
    }
  return t;
}
function xt(n, e) {
  const t = Math.trunc(Math.abs(n / 60)), r = Math.trunc(Math.abs(n % 60)), o = n >= 0 ? "+" : "-";
  switch (e) {
    case "short":
      return `${o}${q(t, 2)}:${q(r, 2)}`;
    case "narrow":
      return `${o}${t}${r > 0 ? `:${r}` : ""}`;
    case "techie":
      return `${o}${q(t, 2)}${q(r, 2)}`;
    default:
      throw new RangeError(`Value format ${e} is out of range for property format`);
  }
}
function tn(n) {
  return Vs(n, ["hour", "minute", "second", "millisecond"]);
}
const Ls = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
], no = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
], zs = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function ro(n) {
  switch (n) {
    case "narrow":
      return [...zs];
    case "short":
      return [...no];
    case "long":
      return [...Ls];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
const oo = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], io = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], Ps = ["M", "T", "W", "T", "F", "S", "S"];
function so(n) {
  switch (n) {
    case "narrow":
      return [...Ps];
    case "short":
      return [...io];
    case "long":
      return [...oo];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const ao = ["AM", "PM"], js = ["Before Christ", "Anno Domini"], Hs = ["BC", "AD"], Us = ["B", "A"];
function lo(n) {
  switch (n) {
    case "narrow":
      return [...Us];
    case "short":
      return [...Hs];
    case "long":
      return [...js];
    default:
      return null;
  }
}
function Zs(n) {
  return ao[n.hour < 12 ? 0 : 1];
}
function Rs(n, e) {
  return so(e)[n.weekday - 1];
}
function $s(n, e) {
  return ro(e)[n.month - 1];
}
function _s(n, e) {
  return lo(e)[n.year < 0 ? 0 : 1];
}
function Ys(n, e, t = "always", r = !1) {
  const o = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  }, l = ["hours", "minutes", "seconds"].indexOf(n) === -1;
  if (t === "auto" && l) {
    const k = n === "days";
    switch (e) {
      case 1:
        return k ? "tomorrow" : `next ${o[n][0]}`;
      case -1:
        return k ? "yesterday" : `last ${o[n][0]}`;
      case 0:
        return k ? "today" : `this ${o[n][0]}`;
    }
  }
  const a = Object.is(e, -0) || e < 0, c = Math.abs(e), d = c === 1, m = o[n], y = r ? d ? m[1] : m[2] || m[1] : d ? o[n][0] : n;
  return a ? `${c} ${y} ago` : `in ${c} ${y}`;
}
function yr(n, e) {
  let t = "";
  for (const r of n)
    r.literal ? t += r.val : t += e(r.val);
  return t;
}
const Ws = {
  D: Gt,
  DD: Fr,
  DDD: Lr,
  DDDD: zr,
  t: Pr,
  tt: jr,
  ttt: Hr,
  tttt: Ur,
  T: Zr,
  TT: Rr,
  TTT: $r,
  TTTT: _r,
  f: Yr,
  ff: Gr,
  fff: qr,
  ffff: Xr,
  F: Wr,
  FF: Br,
  FFF: Jr,
  FFFF: Qr
};
class te {
  static create(e, t = {}) {
    return new te(e, t);
  }
  static parseFormat(e) {
    let t = null, r = "", o = !1;
    const l = [];
    for (let a = 0; a < e.length; a++) {
      const c = e.charAt(a);
      c === "'" ? (r.length > 0 && l.push({ literal: o || /^\s+$/.test(r), val: r }), t = null, r = "", o = !o) : o || c === t ? r += c : (r.length > 0 && l.push({ literal: /^\s+$/.test(r), val: r }), r = c, t = c);
    }
    return r.length > 0 && l.push({ literal: o || /^\s+$/.test(r), val: r }), l;
  }
  static macroTokenToFormatOpts(e) {
    return Ws[e];
  }
  constructor(e, t) {
    this.opts = t, this.loc = e, this.systemLoc = null;
  }
  formatWithSystemDefault(e, t) {
    return this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem()), this.systemLoc.dtFormatter(e, { ...this.opts, ...t }).format();
  }
  formatDateTime(e, t = {}) {
    return this.loc.dtFormatter(e, { ...this.opts, ...t }).format();
  }
  formatDateTimeParts(e, t = {}) {
    return this.loc.dtFormatter(e, { ...this.opts, ...t }).formatToParts();
  }
  formatInterval(e, t = {}) {
    return this.loc.dtFormatter(e.start, { ...this.opts, ...t }).dtf.formatRange(e.start.toJSDate(), e.end.toJSDate());
  }
  resolvedOptions(e, t = {}) {
    return this.loc.dtFormatter(e, { ...this.opts, ...t }).resolvedOptions();
  }
  num(e, t = 0) {
    if (this.opts.forceSimple)
      return q(e, t);
    const r = { ...this.opts };
    return t > 0 && (r.padTo = t), this.loc.numberFormatter(r).format(e);
  }
  formatDateTimeFromString(e, t) {
    const r = this.loc.listingMode() === "en", o = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", l = (f, O) => this.loc.extract(e, f, O), a = (f) => e.isOffsetFixed && e.offset === 0 && f.allowZ ? "Z" : e.isValid ? e.zone.formatOffset(e.ts, f.format) : "", c = () => r ? Zs(e) : l({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), d = (f, O) => r ? $s(e, f) : l(O ? { month: f } : { month: f, day: "numeric" }, "month"), m = (f, O) => r ? Rs(e, f) : l(
      O ? { weekday: f } : { weekday: f, month: "long", day: "numeric" },
      "weekday"
    ), y = (f) => {
      const O = te.macroTokenToFormatOpts(f);
      return O ? this.formatWithSystemDefault(e, O) : f;
    }, k = (f) => r ? _s(e, f) : l({ era: f }, "era"), M = (f) => {
      switch (f) {
        case "S":
          return this.num(e.millisecond);
        case "u":
        case "SSS":
          return this.num(e.millisecond, 3);
        case "s":
          return this.num(e.second);
        case "ss":
          return this.num(e.second, 2);
        case "uu":
          return this.num(Math.floor(e.millisecond / 10), 2);
        case "uuu":
          return this.num(Math.floor(e.millisecond / 100));
        case "m":
          return this.num(e.minute);
        case "mm":
          return this.num(e.minute, 2);
        case "h":
          return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12);
        case "hh":
          return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12, 2);
        case "H":
          return this.num(e.hour);
        case "HH":
          return this.num(e.hour, 2);
        case "Z":
          return a({ format: "narrow", allowZ: this.opts.allowZ });
        case "ZZ":
          return a({ format: "short", allowZ: this.opts.allowZ });
        case "ZZZ":
          return a({ format: "techie", allowZ: this.opts.allowZ });
        case "ZZZZ":
          return e.zone.offsetName(e.ts, { format: "short", locale: this.loc.locale });
        case "ZZZZZ":
          return e.zone.offsetName(e.ts, { format: "long", locale: this.loc.locale });
        case "z":
          return e.zoneName;
        case "a":
          return c();
        case "d":
          return o ? l({ day: "numeric" }, "day") : this.num(e.day);
        case "dd":
          return o ? l({ day: "2-digit" }, "day") : this.num(e.day, 2);
        case "c":
          return this.num(e.weekday);
        case "ccc":
          return m("short", !0);
        case "cccc":
          return m("long", !0);
        case "ccccc":
          return m("narrow", !0);
        case "E":
          return this.num(e.weekday);
        case "EEE":
          return m("short", !1);
        case "EEEE":
          return m("long", !1);
        case "EEEEE":
          return m("narrow", !1);
        case "L":
          return o ? l({ month: "numeric", day: "numeric" }, "month") : this.num(e.month);
        case "LL":
          return o ? l({ month: "2-digit", day: "numeric" }, "month") : this.num(e.month, 2);
        case "LLL":
          return d("short", !0);
        case "LLLL":
          return d("long", !0);
        case "LLLLL":
          return d("narrow", !0);
        case "M":
          return o ? l({ month: "numeric" }, "month") : this.num(e.month);
        case "MM":
          return o ? l({ month: "2-digit" }, "month") : this.num(e.month, 2);
        case "MMM":
          return d("short", !1);
        case "MMMM":
          return d("long", !1);
        case "MMMMM":
          return d("narrow", !1);
        case "y":
          return o ? l({ year: "numeric" }, "year") : this.num(e.year);
        case "yy":
          return o ? l({ year: "2-digit" }, "year") : this.num(e.year.toString().slice(-2), 2);
        case "yyyy":
          return o ? l({ year: "numeric" }, "year") : this.num(e.year, 4);
        case "yyyyyy":
          return o ? l({ year: "numeric" }, "year") : this.num(e.year, 6);
        case "G":
          return k("short");
        case "GG":
          return k("long");
        case "GGGGG":
          return k("narrow");
        case "kk":
          return this.num(e.weekYear.toString().slice(-2), 2);
        case "kkkk":
          return this.num(e.weekYear, 4);
        case "W":
          return this.num(e.weekNumber);
        case "WW":
          return this.num(e.weekNumber, 2);
        case "o":
          return this.num(e.ordinal);
        case "ooo":
          return this.num(e.ordinal, 3);
        case "q":
          return this.num(e.quarter);
        case "qq":
          return this.num(e.quarter, 2);
        case "X":
          return this.num(Math.floor(e.ts / 1e3));
        case "x":
          return this.num(e.ts);
        default:
          return y(f);
      }
    };
    return yr(te.parseFormat(t), M);
  }
  formatDurationFromString(e, t) {
    const r = (d) => {
      switch (d[0]) {
        case "S":
          return "millisecond";
        case "s":
          return "second";
        case "m":
          return "minute";
        case "h":
          return "hour";
        case "d":
          return "day";
        case "w":
          return "week";
        case "M":
          return "month";
        case "y":
          return "year";
        default:
          return null;
      }
    }, o = (d) => (m) => {
      const y = r(m);
      return y ? this.num(d.get(y), m.length) : m;
    }, l = te.parseFormat(t), a = l.reduce(
      (d, { literal: m, val: y }) => m ? d : d.concat(y),
      []
    ), c = e.shiftTo(...a.map(r).filter((d) => d));
    return yr(l, o(c));
  }
}
class xe {
  constructor(e, t) {
    this.reason = e, this.explanation = t;
  }
  toMessage() {
    return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
  }
}
const uo = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
function nt(...n) {
  const e = n.reduce((t, r) => t + r.source, "");
  return RegExp(`^${e}$`);
}
function rt(...n) {
  return (e) => n.reduce(
    ([t, r, o], l) => {
      const [a, c, d] = l(e, o);
      return [{ ...t, ...a }, c || r, d];
    },
    [{}, null, 1]
  ).slice(0, 2);
}
function ot(n, ...e) {
  if (n == null)
    return [null, null];
  for (const [t, r] of e) {
    const o = t.exec(n);
    if (o)
      return r(o);
  }
  return [null, null];
}
function co(...n) {
  return (e, t) => {
    const r = {};
    let o;
    for (o = 0; o < n.length; o++)
      r[n[o]] = Pe(e[t + o]);
    return [r, null, t + o];
  };
}
const ho = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, Gs = `(?:${ho.source}?(?:\\[(${uo.source})\\])?)?`, Cn = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, mo = RegExp(`${Cn.source}${Gs}`), An = RegExp(`(?:T${mo.source})?`), Bs = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, qs = /(\d{4})-?W(\d\d)(?:-?(\d))?/, Js = /(\d{4})-?(\d{3})/, Xs = co("weekYear", "weekNumber", "weekDay"), Qs = co("year", "ordinal"), Ks = /(\d{4})-(\d\d)-(\d\d)/, po = RegExp(
  `${Cn.source} ?(?:${ho.source}|(${uo.source}))?`
), ea = RegExp(`(?: ${po.source})?`);
function et(n, e, t) {
  const r = n[e];
  return P(r) ? t : Pe(r);
}
function ta(n, e) {
  return [{
    year: et(n, e),
    month: et(n, e + 1, 1),
    day: et(n, e + 2, 1)
  }, null, e + 3];
}
function it(n, e) {
  return [{
    hours: et(n, e, 0),
    minutes: et(n, e + 1, 0),
    seconds: et(n, e + 2, 0),
    milliseconds: On(n[e + 3])
  }, null, e + 4];
}
function Mt(n, e) {
  const t = !n[e] && !n[e + 1], r = en(n[e + 1], n[e + 2]), o = t ? null : oe.instance(r);
  return [{}, o, e + 3];
}
function kt(n, e) {
  const t = n[e] ? Ve.create(n[e]) : null;
  return [{}, t, e + 1];
}
const na = RegExp(`^T?${Cn.source}$`), ra = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function oa(n) {
  const [e, t, r, o, l, a, c, d, m] = n, y = e[0] === "-", k = d && d[0] === "-", M = (f, O = !1) => f !== void 0 && (O || f && y) ? -f : f;
  return [
    {
      years: M($e(t)),
      months: M($e(r)),
      weeks: M($e(o)),
      days: M($e(l)),
      hours: M($e(a)),
      minutes: M($e(c)),
      seconds: M($e(d), d === "-0"),
      milliseconds: M(On(m), k)
    }
  ];
}
const ia = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function Vn(n, e, t, r, o, l, a) {
  const c = {
    year: e.length === 2 ? En(Pe(e)) : Pe(e),
    month: no.indexOf(t) + 1,
    day: Pe(r),
    hour: Pe(o),
    minute: Pe(l)
  };
  return a && (c.second = Pe(a)), n && (c.weekday = n.length > 3 ? oo.indexOf(n) + 1 : io.indexOf(n) + 1), c;
}
const sa = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function aa(n) {
  const [
    ,
    e,
    t,
    r,
    o,
    l,
    a,
    c,
    d,
    m,
    y,
    k
  ] = n, M = Vn(e, o, r, t, l, a, c);
  let f;
  return d ? f = ia[d] : m ? f = 0 : f = en(y, k), [M, new oe(f)];
}
function la(n) {
  return n.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const ua = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, ca = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, da = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function gr(n) {
  const [, e, t, r, o, l, a, c] = n;
  return [Vn(e, o, r, t, l, a, c), oe.utcInstance];
}
function ha(n) {
  const [, e, t, r, o, l, a, c] = n;
  return [Vn(e, c, t, r, o, l, a), oe.utcInstance];
}
const ma = nt(Bs, An), pa = nt(qs, An), fa = nt(Js, An), ya = nt(mo), fo = rt(
  ta,
  it,
  Mt,
  kt
), ga = rt(
  Xs,
  it,
  Mt,
  kt
), va = rt(
  Qs,
  it,
  Mt,
  kt
), wa = rt(
  it,
  Mt,
  kt
);
function xa(n) {
  return ot(
    n,
    [ma, fo],
    [pa, ga],
    [fa, va],
    [ya, wa]
  );
}
function Ta(n) {
  return ot(la(n), [sa, aa]);
}
function ba(n) {
  return ot(
    n,
    [ua, gr],
    [ca, gr],
    [da, ha]
  );
}
function Ia(n) {
  return ot(n, [ra, oa]);
}
const Ma = rt(it);
function ka(n) {
  return ot(n, [na, Ma]);
}
const Ea = nt(Ks, ea), Sa = nt(po), Oa = rt(
  it,
  Mt,
  kt
);
function Da(n) {
  return ot(
    n,
    [Ea, fo],
    [Sa, Oa]
  );
}
const Na = "Invalid Duration", yo = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1e3
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1e3
  },
  hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1e3 },
  minutes: { seconds: 60, milliseconds: 60 * 1e3 },
  seconds: { milliseconds: 1e3 }
}, Ca = {
  years: {
    quarters: 4,
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    seconds: 91 * 24 * 60 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1e3
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1e3
  },
  ...yo
}, ce = 146097 / 400, Xe = 146097 / 4800, Aa = {
  years: {
    quarters: 4,
    months: 12,
    weeks: ce / 7,
    days: ce,
    hours: ce * 24,
    minutes: ce * 24 * 60,
    seconds: ce * 24 * 60 * 60,
    milliseconds: ce * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: ce / 28,
    days: ce / 4,
    hours: ce * 24 / 4,
    minutes: ce * 24 * 60 / 4,
    seconds: ce * 24 * 60 * 60 / 4,
    milliseconds: ce * 24 * 60 * 60 * 1e3 / 4
  },
  months: {
    weeks: Xe / 7,
    days: Xe,
    hours: Xe * 24,
    minutes: Xe * 24 * 60,
    seconds: Xe * 24 * 60 * 60,
    milliseconds: Xe * 24 * 60 * 60 * 1e3
  },
  ...yo
}, Ye = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds"
], Va = Ye.slice(0).reverse();
function ze(n, e, t = !1) {
  const r = {
    values: t ? e.values : { ...n.values, ...e.values || {} },
    loc: n.loc.clone(e.loc),
    conversionAccuracy: e.conversionAccuracy || n.conversionAccuracy,
    matrix: e.matrix || n.matrix
  };
  return new H(r);
}
function Fa(n) {
  return n < 0 ? Math.floor(n) : Math.ceil(n);
}
function go(n, e, t, r, o) {
  const l = n[o][t], a = e[t] / l, c = Math.sign(a) === Math.sign(r[o]), d = !c && r[o] !== 0 && Math.abs(a) <= 1 ? Fa(a) : Math.trunc(a);
  r[o] += d, e[t] -= d * l;
}
function La(n, e) {
  Va.reduce((t, r) => P(e[r]) ? t : (t && go(n, e, t, e, r), r), null);
}
function za(n) {
  const e = {};
  for (const [t, r] of Object.entries(n))
    r !== 0 && (e[t] = r);
  return e;
}
class H {
  /**
   * @private
   */
  constructor(e) {
    const t = e.conversionAccuracy === "longterm" || !1;
    let r = t ? Aa : Ca;
    e.matrix && (r = e.matrix), this.values = e.values, this.loc = e.loc || _.create(), this.conversionAccuracy = t ? "longterm" : "casual", this.invalid = e.invalid || null, this.matrix = r, this.isLuxonDuration = !0;
  }
  /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  static fromMillis(e, t) {
    return H.fromObject({ milliseconds: e }, t);
  }
  /**
   * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {Object} [opts=[]] - options for creating this Duration
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the custom conversion system to use
   * @return {Duration}
   */
  static fromObject(e, t = {}) {
    if (e == null || typeof e != "object")
      throw new de(
        `Duration.fromObject: argument expected to be an object, got ${e === null ? "null" : typeof e}`
      );
    return new H({
      values: Jt(e, H.normalizeUnit),
      loc: _.fromObject(t),
      conversionAccuracy: t.conversionAccuracy,
      matrix: t.matrix
    });
  }
  /**
   * Create a Duration from DurationLike.
   *
   * @param {Object | number | Duration} durationLike
   * One of:
   * - object with keys like 'years' and 'hours'.
   * - number representing milliseconds
   * - Duration instance
   * @return {Duration}
   */
  static fromDurationLike(e) {
    if (Be(e))
      return H.fromMillis(e);
    if (H.isDuration(e))
      return e;
    if (typeof e == "object")
      return H.fromObject(e);
    throw new de(
      `Unknown duration argument ${e} of type ${typeof e}`
    );
  }
  /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the preset conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */
  static fromISO(e, t) {
    const [r] = Ia(e);
    return r ? H.fromObject(r, t) : H.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  /**
   * Create a Duration from an ISO 8601 time string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
   * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @return {Duration}
   */
  static fromISOTime(e, t) {
    const [r] = ka(e);
    return r ? H.fromObject(r, t) : H.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  static invalid(e, t = null) {
    if (!e)
      throw new de("need to specify a reason the Duration is invalid");
    const r = e instanceof xe ? e : new xe(e, t);
    if (B.throwOnInvalid)
      throw new cs(r);
    return new H({ invalid: r });
  }
  /**
   * @private
   */
  static normalizeUnit(e) {
    const t = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[e && e.toLowerCase()];
    if (!t)
      throw new Vr(e);
    return t;
  }
  /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDuration(e) {
    return e && e.isLuxonDuration || !1;
  }
  /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  /**
   * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `w` for weeks
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * Tokens can be escaped by wrapping with single quotes.
   * * The duration will be converted to the set of units in the format string using {@link Duration#shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @return {string}
   */
  toFormat(e, t = {}) {
    const r = {
      ...t,
      floor: t.round !== !1 && t.floor !== !1
    };
    return this.isValid ? te.create(this.loc, r).formatDurationFromString(this, e) : Na;
  }
  /**
   * Returns a string representation of a Duration with all units included.
   * To modify its behavior use the `listStyle` and any Intl.NumberFormat option, though `unitDisplay` is especially relevant.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
   * @param opts - On option object to override the formatting. Accepts the same keys as the options parameter of the native `Int.NumberFormat` constructor, as well as `listStyle`.
   * @example
   * ```js
   * var dur = Duration.fromObject({ days: 1, hours: 5, minutes: 6 })
   * dur.toHuman() //=> '1 day, 5 hours, 6 minutes'
   * dur.toHuman({ listStyle: "long" }) //=> '1 day, 5 hours, and 6 minutes'
   * dur.toHuman({ unitDisplay: "short" }) //=> '1 day, 5 hr, 6 min'
   * ```
   */
  toHuman(e = {}) {
    const t = Ye.map((r) => {
      const o = this.values[r];
      return P(o) ? null : this.loc.numberFormatter({ style: "unit", unitDisplay: "long", ...e, unit: r.slice(0, -1) }).format(o);
    }).filter((r) => r);
    return this.loc.listFormatter({ type: "conjunction", style: e.listStyle || "narrow", ...e }).format(t);
  }
  /**
   * Returns a JavaScript object with this Duration's values.
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */
  toObject() {
    return this.isValid ? { ...this.values } : {};
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */
  toISO() {
    if (!this.isValid)
      return null;
    let e = "P";
    return this.years !== 0 && (e += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (e += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (e += this.weeks + "W"), this.days !== 0 && (e += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (e += "T"), this.hours !== 0 && (e += this.hours + "H"), this.minutes !== 0 && (e += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (e += Dn(this.seconds + this.milliseconds / 1e3, 3) + "S"), e === "P" && (e += "T0S"), e;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
   * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
   * @return {string}
   */
  toISOTime(e = {}) {
    if (!this.isValid)
      return null;
    const t = this.toMillis();
    if (t < 0 || t >= 864e5)
      return null;
    e = {
      suppressMilliseconds: !1,
      suppressSeconds: !1,
      includePrefix: !1,
      format: "extended",
      ...e
    };
    const r = this.shiftTo("hours", "minutes", "seconds", "milliseconds");
    let o = e.format === "basic" ? "hhmm" : "hh:mm";
    (!e.suppressSeconds || r.seconds !== 0 || r.milliseconds !== 0) && (o += e.format === "basic" ? "ss" : ":ss", (!e.suppressMilliseconds || r.milliseconds !== 0) && (o += ".SSS"));
    let l = r.toFormat(o);
    return e.includePrefix && (l = "T" + l), l;
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */
  toString() {
    return this.toISO();
  }
  /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */
  toMillis() {
    return this.as("milliseconds");
  }
  /**
   * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }
  /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  plus(e) {
    if (!this.isValid)
      return this;
    const t = H.fromDurationLike(e), r = {};
    for (const o of Ye)
      (tt(t.values, o) || tt(this.values, o)) && (r[o] = t.get(o) + this.get(o));
    return ze(this, { values: r }, !0);
  }
  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  minus(e) {
    if (!this.isValid)
      return this;
    const t = H.fromDurationLike(e);
    return this.plus(t.negate());
  }
  /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits((x, u) => u === "hours" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */
  mapUnits(e) {
    if (!this.isValid)
      return this;
    const t = {};
    for (const r of Object.keys(this.values))
      t[r] = to(e(this.values[r], r));
    return ze(this, { values: t }, !0);
  }
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
   * @return {number}
   */
  get(e) {
    return this[H.normalizeUnit(e)];
  }
  /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */
  set(e) {
    if (!this.isValid)
      return this;
    const t = { ...this.values, ...Jt(e, H.normalizeUnit) };
    return ze(this, { values: t });
  }
  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  reconfigure({ locale: e, numberingSystem: t, conversionAccuracy: r, matrix: o } = {}) {
    const a = { loc: this.loc.clone({ locale: e, numberingSystem: t }), matrix: o, conversionAccuracy: r };
    return ze(this, a);
  }
  /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */
  as(e) {
    return this.isValid ? this.shiftTo(e).get(e) : NaN;
  }
  /**
   * Reduce this Duration to its canonical representation in its current units.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @return {Duration}
   */
  normalize() {
    if (!this.isValid)
      return this;
    const e = this.toObject();
    return La(this.matrix, e), ze(this, { values: e }, !0);
  }
  /**
   * Rescale units to its largest representation
   * @example Duration.fromObject({ milliseconds: 90000 }).rescale().toObject() //=> { minutes: 1, seconds: 30 }
   * @return {Duration}
   */
  rescale() {
    if (!this.isValid)
      return this;
    const e = za(this.normalize().shiftToAll().toObject());
    return ze(this, { values: e }, !0);
  }
  /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */
  shiftTo(...e) {
    if (!this.isValid)
      return this;
    if (e.length === 0)
      return this;
    e = e.map((a) => H.normalizeUnit(a));
    const t = {}, r = {}, o = this.toObject();
    let l;
    for (const a of Ye)
      if (e.indexOf(a) >= 0) {
        l = a;
        let c = 0;
        for (const m in r)
          c += this.matrix[m][a] * r[m], r[m] = 0;
        Be(o[a]) && (c += o[a]);
        const d = Math.trunc(c);
        t[a] = d, r[a] = (c * 1e3 - d * 1e3) / 1e3;
        for (const m in o)
          Ye.indexOf(m) > Ye.indexOf(a) && go(this.matrix, o, m, t, a);
      } else
        Be(o[a]) && (r[a] = o[a]);
    for (const a in r)
      r[a] !== 0 && (t[l] += a === l ? r[a] : r[a] / this.matrix[l][a]);
    return ze(this, { values: t }, !0).normalize();
  }
  /**
   * Shift this Duration to all available units.
   * Same as shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds")
   * @return {Duration}
   */
  shiftToAll() {
    return this.isValid ? this.shiftTo(
      "years",
      "months",
      "weeks",
      "days",
      "hours",
      "minutes",
      "seconds",
      "milliseconds"
    ) : this;
  }
  /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */
  negate() {
    if (!this.isValid)
      return this;
    const e = {};
    for (const t of Object.keys(this.values))
      e[t] = this.values[t] === 0 ? 0 : -this.values[t];
    return ze(this, { values: e }, !0);
  }
  /**
   * Get the years.
   * @type {number}
   */
  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }
  /**
   * Get the quarters.
   * @type {number}
   */
  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }
  /**
   * Get the months.
   * @type {number}
   */
  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }
  /**
   * Get the weeks
   * @type {number}
   */
  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }
  /**
   * Get the days.
   * @type {number}
   */
  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }
  /**
   * Get the hours.
   * @type {number}
   */
  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }
  /**
   * Get the minutes.
   * @type {number}
   */
  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }
  /**
   * Get the seconds.
   * @return {number}
   */
  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }
  /**
   * Get the milliseconds.
   * @return {number}
   */
  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }
  /**
   * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
   * on invalid DateTimes or Intervals.
   * @return {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }
  /**
   * Returns an error code if this Duration became invalid, or null if the Duration is valid
   * @return {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */
  equals(e) {
    if (!this.isValid || !e.isValid || !this.loc.equals(e.loc))
      return !1;
    function t(r, o) {
      return r === void 0 || r === 0 ? o === void 0 || o === 0 : r === o;
    }
    for (const r of Ye)
      if (!t(this.values[r], e.values[r]))
        return !1;
    return !0;
  }
}
const Qe = "Invalid Interval";
function Pa(n, e) {
  return !n || !n.isValid ? Y.invalid("missing or invalid start") : !e || !e.isValid ? Y.invalid("missing or invalid end") : e < n ? Y.invalid(
    "end before start",
    `The end of an interval must be after its start, but you had start=${n.toISO()} and end=${e.toISO()}`
  ) : null;
}
class Y {
  /**
   * @private
   */
  constructor(e) {
    this.s = e.start, this.e = e.end, this.invalid = e.invalid || null, this.isLuxonInterval = !0;
  }
  /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */
  static invalid(e, t = null) {
    if (!e)
      throw new de("need to specify a reason the Interval is invalid");
    const r = e instanceof xe ? e : new xe(e, t);
    if (B.throwOnInvalid)
      throw new us(r);
    return new Y({ invalid: r });
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  static fromDateTimes(e, t) {
    const r = yt(e), o = yt(t), l = Pa(r, o);
    return l ?? new Y({
      start: r,
      end: o
    });
  }
  /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static after(e, t) {
    const r = H.fromDurationLike(t), o = yt(e);
    return Y.fromDateTimes(o, o.plus(r));
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static before(e, t) {
    const r = H.fromDurationLike(t), o = yt(e);
    return Y.fromDateTimes(o.minus(r), o);
  }
  /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime#fromISO} and optionally {@link Duration#fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */
  static fromISO(e, t) {
    const [r, o] = (e || "").split("/", 2);
    if (r && o) {
      let l, a;
      try {
        l = N.fromISO(r, t), a = l.isValid;
      } catch {
        a = !1;
      }
      let c, d;
      try {
        c = N.fromISO(o, t), d = c.isValid;
      } catch {
        d = !1;
      }
      if (a && d)
        return Y.fromDateTimes(l, c);
      if (a) {
        const m = H.fromISO(o, t);
        if (m.isValid)
          return Y.after(l, m);
      } else if (d) {
        const m = H.fromISO(r, t);
        if (m.isValid)
          return Y.before(c, m);
      }
    }
    return Y.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isInterval(e) {
    return e && e.isLuxonInterval || !1;
  }
  /**
   * Returns the start of the Interval
   * @type {DateTime}
   */
  get start() {
    return this.isValid ? this.s : null;
  }
  /**
   * Returns the end of the Interval
   * @type {DateTime}
   */
  get end() {
    return this.isValid ? this.e : null;
  }
  /**
   * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
   * @type {boolean}
   */
  get isValid() {
    return this.invalidReason === null;
  }
  /**
   * Returns an error code if this Interval is invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */
  length(e = "milliseconds") {
    return this.isValid ? this.toDuration(e).get(e) : NaN;
  }
  /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link Interval#length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @return {number}
   */
  count(e = "milliseconds") {
    if (!this.isValid)
      return NaN;
    const t = this.start.startOf(e), r = this.end.startOf(e);
    return Math.floor(r.diff(t, e).get(e)) + (r.valueOf() !== this.end.valueOf());
  }
  /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */
  hasSame(e) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, e) : !1;
  }
  /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */
  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isAfter(e) {
    return this.isValid ? this.s > e : !1;
  }
  /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isBefore(e) {
    return this.isValid ? this.e <= e : !1;
  }
  /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  contains(e) {
    return this.isValid ? this.s <= e && this.e > e : !1;
  }
  /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */
  set({ start: e, end: t } = {}) {
    return this.isValid ? Y.fromDateTimes(e || this.s, t || this.e) : this;
  }
  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...DateTime} dateTimes - the unit of time to count.
   * @return {Array}
   */
  splitAt(...e) {
    if (!this.isValid)
      return [];
    const t = e.map(yt).filter((a) => this.contains(a)).sort(), r = [];
    let { s: o } = this, l = 0;
    for (; o < this.e; ) {
      const a = t[l] || this.e, c = +a > +this.e ? this.e : a;
      r.push(Y.fromDateTimes(o, c)), o = c, l += 1;
    }
    return r;
  }
  /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {Array}
   */
  splitBy(e) {
    const t = H.fromDurationLike(e);
    if (!this.isValid || !t.isValid || t.as("milliseconds") === 0)
      return [];
    let { s: r } = this, o = 1, l;
    const a = [];
    for (; r < this.e; ) {
      const c = this.start.plus(t.mapUnits((d) => d * o));
      l = +c > +this.e ? this.e : c, a.push(Y.fromDateTimes(r, l)), r = l, o += 1;
    }
    return a;
  }
  /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {Array}
   */
  divideEqually(e) {
    return this.isValid ? this.splitBy(this.length() / e).slice(0, e) : [];
  }
  /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */
  overlaps(e) {
    return this.e > e.s && this.s < e.e;
  }
  /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsStart(e) {
    return this.isValid ? +this.e == +e.s : !1;
  }
  /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsEnd(e) {
    return this.isValid ? +e.e == +this.s : !1;
  }
  /**
   * Return whether this Interval engulfs the start and end of the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  engulfs(e) {
    return this.isValid ? this.s <= e.s && this.e >= e.e : !1;
  }
  /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  equals(e) {
    return !this.isValid || !e.isValid ? !1 : this.s.equals(e.s) && this.e.equals(e.e);
  }
  /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */
  intersection(e) {
    if (!this.isValid)
      return this;
    const t = this.s > e.s ? this.s : e.s, r = this.e < e.e ? this.e : e.e;
    return t >= r ? null : Y.fromDateTimes(t, r);
  }
  /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */
  union(e) {
    if (!this.isValid)
      return this;
    const t = this.s < e.s ? this.s : e.s, r = this.e > e.e ? this.e : e.e;
    return Y.fromDateTimes(t, r);
  }
  /**
   * Merge an array of Intervals into a equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  static merge(e) {
    const [t, r] = e.sort((o, l) => o.s - l.s).reduce(
      ([o, l], a) => l ? l.overlaps(a) || l.abutsStart(a) ? [o, l.union(a)] : [o.concat([l]), a] : [o, a],
      [[], null]
    );
    return r && t.push(r), t;
  }
  /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  static xor(e) {
    let t = null, r = 0;
    const o = [], l = e.map((d) => [
      { time: d.s, type: "s" },
      { time: d.e, type: "e" }
    ]), a = Array.prototype.concat(...l), c = a.sort((d, m) => d.time - m.time);
    for (const d of c)
      r += d.type === "s" ? 1 : -1, r === 1 ? t = d.time : (t && +t != +d.time && o.push(Y.fromDateTimes(t, d.time)), t = null);
    return Y.merge(o);
  }
  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {Array}
   */
  difference(...e) {
    return Y.xor([this].concat(e)).map((t) => this.intersection(t)).filter((t) => t && !t.isEmpty());
  }
  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  toString() {
    return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : Qe;
  }
  /**
   * Returns a localized string representing this Interval. Accepts the same options as the
   * Intl.DateTimeFormat constructor and any presets defined by Luxon, such as
   * {@link DateTime.DATE_FULL} or {@link DateTime.TIME_SIMPLE}. The exact behavior of this method
   * is browser-specific, but in general it will return an appropriate representation of the
   * Interval in the assigned locale. Defaults to the system's locale if no locale has been
   * specified.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {Object} [formatOpts=DateTime.DATE_SHORT] - Either a DateTime preset or
   * Intl.DateTimeFormat constructor options.
   * @param {Object} opts - Options to override the configuration of the start DateTime.
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(); //=> 11/7/2022 – 11/8/2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL); //=> November 7 – 8, 2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL, { locale: 'fr-FR' }); //=> 7–8 novembre 2022
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString(DateTime.TIME_SIMPLE); //=> 6:00 – 8:00 PM
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> Mon, Nov 07, 6:00 – 8:00 p
   * @return {string}
   */
  toLocaleString(e = Gt, t = {}) {
    return this.isValid ? te.create(this.s.loc.clone(t), e).formatInterval(this) : Qe;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISO(e) {
    return this.isValid ? `${this.s.toISO(e)}/${this.e.toISO(e)}` : Qe;
  }
  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  toISODate() {
    return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : Qe;
  }
  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISOTime(e) {
    return this.isValid ? `${this.s.toISOTime(e)}/${this.e.toISOTime(e)}` : Qe;
  }
  /**
   * Returns a string representation of this Interval formatted according to the specified format
   * string. **You may not want this.** See {@link Interval#toLocaleString} for a more flexible
   * formatting tool.
   * @param {string} dateFormat - The format string. This string formats the start and end time.
   * See {@link DateTime#toFormat} for details.
   * @param {Object} opts - Options.
   * @param {string} [opts.separator =  ' – '] - A separator to place between the start and end
   * representations.
   * @return {string}
   */
  toFormat(e, { separator: t = " – " } = {}) {
    return this.isValid ? `${this.s.toFormat(e)}${t}${this.e.toFormat(e)}` : Qe;
  }
  /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */
  toDuration(e, t) {
    return this.isValid ? this.e.diff(this.s, e, t) : H.invalid(this.invalidReason);
  }
  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */
  mapEndpoints(e) {
    return Y.fromDateTimes(e(this.s), e(this.e));
  }
}
class Ht {
  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  static hasDST(e = B.defaultZone) {
    const t = N.now().setZone(e).set({ month: 12 });
    return !e.isUniversal && t.offset !== t.set({ month: 6 }).offset;
  }
  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  static isValidIANAZone(e) {
    return Ve.isValidZone(e);
  }
  /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone#isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */
  static normalizeZone(e) {
    return je(e, B.defaultZone);
  }
  /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {Array}
   */
  static months(e = "long", { locale: t = null, numberingSystem: r = null, locObj: o = null, outputCalendar: l = "gregory" } = {}) {
    return (o || _.create(t, r, l)).months(e);
  }
  /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link Info#months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {Array}
   */
  static monthsFormat(e = "long", { locale: t = null, numberingSystem: r = null, locObj: o = null, outputCalendar: l = "gregory" } = {}) {
    return (o || _.create(t, r, l)).months(e, !0);
  }
  /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {Array}
   */
  static weekdays(e = "long", { locale: t = null, numberingSystem: r = null, locObj: o = null } = {}) {
    return (o || _.create(t, r, null)).weekdays(e);
  }
  /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link Info#weekdays}
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @return {Array}
   */
  static weekdaysFormat(e = "long", { locale: t = null, numberingSystem: r = null, locObj: o = null } = {}) {
    return (o || _.create(t, r, null)).weekdays(e, !0);
  }
  /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {Array}
   */
  static meridiems({ locale: e = null } = {}) {
    return _.create(e).meridiems();
  }
  /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {Array}
   */
  static eras(e = "short", { locale: t = null } = {}) {
    return _.create(t, null, "gregory").eras(e);
  }
  /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, relative time formatting support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `relative`: whether this environment supports relative time formatting
   * @example Info.features() //=> { relative: false }
   * @return {Object}
   */
  static features() {
    return { relative: Kr() };
  }
}
function vr(n, e) {
  const t = (o) => o.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(), r = t(e) - t(n);
  return Math.floor(H.fromMillis(r).as("days"));
}
function ja(n, e, t) {
  const r = [
    ["years", (d, m) => m.year - d.year],
    ["quarters", (d, m) => m.quarter - d.quarter + (m.year - d.year) * 4],
    ["months", (d, m) => m.month - d.month + (m.year - d.year) * 12],
    [
      "weeks",
      (d, m) => {
        const y = vr(d, m);
        return (y - y % 7) / 7;
      }
    ],
    ["days", vr]
  ], o = {}, l = n;
  let a, c;
  for (const [d, m] of r)
    t.indexOf(d) >= 0 && (a = d, o[d] = m(n, e), c = l.plus(o), c > e ? (o[d]--, n = l.plus(o)) : n = c);
  return [n, o, c, a];
}
function Ha(n, e, t, r) {
  let [o, l, a, c] = ja(n, e, t);
  const d = e - o, m = t.filter(
    (k) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(k) >= 0
  );
  m.length === 0 && (a < e && (a = o.plus({ [c]: 1 })), a !== o && (l[c] = (l[c] || 0) + d / (a - o)));
  const y = H.fromObject(l, r);
  return m.length > 0 ? H.fromMillis(d, r).shiftTo(...m).plus(y) : y;
}
const Fn = {
  arab: "[٠-٩]",
  arabext: "[۰-۹]",
  bali: "[᭐-᭙]",
  beng: "[০-৯]",
  deva: "[०-९]",
  fullwide: "[０-９]",
  gujr: "[૦-૯]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[០-៩]",
  knda: "[೦-೯]",
  laoo: "[໐-໙]",
  limb: "[᥆-᥏]",
  mlym: "[൦-൯]",
  mong: "[᠐-᠙]",
  mymr: "[၀-၉]",
  orya: "[୦-୯]",
  tamldec: "[௦-௯]",
  telu: "[౦-౯]",
  thai: "[๐-๙]",
  tibt: "[༠-༩]",
  latn: "\\d"
}, wr = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
}, Ua = Fn.hanidec.replace(/[\[|\]]/g, "").split("");
function Za(n) {
  let e = parseInt(n, 10);
  if (isNaN(e)) {
    e = "";
    for (let t = 0; t < n.length; t++) {
      const r = n.charCodeAt(t);
      if (n[t].search(Fn.hanidec) !== -1)
        e += Ua.indexOf(n[t]);
      else
        for (const o in wr) {
          const [l, a] = wr[o];
          r >= l && r <= a && (e += r - l);
        }
    }
    return parseInt(e, 10);
  } else
    return e;
}
function ve({ numberingSystem: n }, e = "") {
  return new RegExp(`${Fn[n || "latn"]}${e}`);
}
const Ra = "missing Intl.DateTimeFormat.formatToParts support";
function U(n, e = (t) => t) {
  return { regex: n, deser: ([t]) => e(Za(t)) };
}
const $a = String.fromCharCode(160), vo = `[ ${$a}]`, wo = new RegExp(vo, "g");
function _a(n) {
  return n.replace(/\./g, "\\.?").replace(wo, vo);
}
function xr(n) {
  return n.replace(/\./g, "").replace(wo, " ").toLowerCase();
}
function we(n, e) {
  return n === null ? null : {
    regex: RegExp(n.map(_a).join("|")),
    deser: ([t]) => n.findIndex((r) => xr(t) === xr(r)) + e
  };
}
function Tr(n, e) {
  return { regex: n, deser: ([, t, r]) => en(t, r), groups: e };
}
function Ut(n) {
  return { regex: n, deser: ([e]) => e };
}
function Ya(n) {
  return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function Wa(n, e) {
  const t = ve(e), r = ve(e, "{2}"), o = ve(e, "{3}"), l = ve(e, "{4}"), a = ve(e, "{6}"), c = ve(e, "{1,2}"), d = ve(e, "{1,3}"), m = ve(e, "{1,6}"), y = ve(e, "{1,9}"), k = ve(e, "{2,4}"), M = ve(e, "{4,6}"), f = (g) => ({ regex: RegExp(Ya(g.val)), deser: ([E]) => E, literal: !0 }), x = ((g) => {
    if (n.literal)
      return f(g);
    switch (g.val) {
      case "G":
        return we(e.eras("short", !1), 0);
      case "GG":
        return we(e.eras("long", !1), 0);
      case "y":
        return U(m);
      case "yy":
        return U(k, En);
      case "yyyy":
        return U(l);
      case "yyyyy":
        return U(M);
      case "yyyyyy":
        return U(a);
      case "M":
        return U(c);
      case "MM":
        return U(r);
      case "MMM":
        return we(e.months("short", !0, !1), 1);
      case "MMMM":
        return we(e.months("long", !0, !1), 1);
      case "L":
        return U(c);
      case "LL":
        return U(r);
      case "LLL":
        return we(e.months("short", !1, !1), 1);
      case "LLLL":
        return we(e.months("long", !1, !1), 1);
      case "d":
        return U(c);
      case "dd":
        return U(r);
      case "o":
        return U(d);
      case "ooo":
        return U(o);
      case "HH":
        return U(r);
      case "H":
        return U(c);
      case "hh":
        return U(r);
      case "h":
        return U(c);
      case "mm":
        return U(r);
      case "m":
        return U(c);
      case "q":
        return U(c);
      case "qq":
        return U(r);
      case "s":
        return U(c);
      case "ss":
        return U(r);
      case "S":
        return U(d);
      case "SSS":
        return U(o);
      case "u":
        return Ut(y);
      case "uu":
        return Ut(c);
      case "uuu":
        return U(t);
      case "a":
        return we(e.meridiems(), 0);
      case "kkkk":
        return U(l);
      case "kk":
        return U(k, En);
      case "W":
        return U(c);
      case "WW":
        return U(r);
      case "E":
      case "c":
        return U(t);
      case "EEE":
        return we(e.weekdays("short", !1, !1), 1);
      case "EEEE":
        return we(e.weekdays("long", !1, !1), 1);
      case "ccc":
        return we(e.weekdays("short", !0, !1), 1);
      case "cccc":
        return we(e.weekdays("long", !0, !1), 1);
      case "Z":
      case "ZZ":
        return Tr(new RegExp(`([+-]${c.source})(?::(${r.source}))?`), 2);
      case "ZZZ":
        return Tr(new RegExp(`([+-]${c.source})(${r.source})?`), 2);
      case "z":
        return Ut(/[a-z_+-/]{1,256}?/i);
      case " ":
        return Ut(/[^\S\n\r]/);
      default:
        return f(g);
    }
  })(n) || {
    invalidReason: Ra
  };
  return x.token = n, x;
}
const Ga = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour: {
    numeric: "h",
    "2-digit": "hh"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  },
  timeZoneName: {
    long: "ZZZZZ",
    short: "ZZZ"
  }
};
function Ba(n, e) {
  const { type: t, value: r } = n;
  if (t === "literal") {
    const a = /^\s+$/.test(r);
    return {
      literal: !a,
      val: a ? " " : r
    };
  }
  const o = e[t];
  let l = Ga[t];
  if (typeof l == "object" && (l = l[o]), l)
    return {
      literal: !1,
      val: l
    };
}
function qa(n) {
  return [`^${n.map((t) => t.regex).reduce((t, r) => `${t}(${r.source})`, "")}$`, n];
}
function Ja(n, e, t) {
  const r = n.match(e);
  if (r) {
    const o = {};
    let l = 1;
    for (const a in t)
      if (tt(t, a)) {
        const c = t[a], d = c.groups ? c.groups + 1 : 1;
        !c.literal && c.token && (o[c.token.val[0]] = c.deser(r.slice(l, l + d))), l += d;
      }
    return [r, o];
  } else
    return [r, {}];
}
function Xa(n) {
  const e = (l) => {
    switch (l) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
      case "H":
        return "hour";
      case "d":
        return "day";
      case "o":
        return "ordinal";
      case "L":
      case "M":
        return "month";
      case "y":
        return "year";
      case "E":
      case "c":
        return "weekday";
      case "W":
        return "weekNumber";
      case "k":
        return "weekYear";
      case "q":
        return "quarter";
      default:
        return null;
    }
  };
  let t = null, r;
  return P(n.z) || (t = Ve.create(n.z)), P(n.Z) || (t || (t = new oe(n.Z)), r = n.Z), P(n.q) || (n.M = (n.q - 1) * 3 + 1), P(n.h) || (n.h < 12 && n.a === 1 ? n.h += 12 : n.h === 12 && n.a === 0 && (n.h = 0)), n.G === 0 && n.y && (n.y = -n.y), P(n.u) || (n.S = On(n.u)), [Object.keys(n).reduce((l, a) => {
    const c = e(a);
    return c && (l[c] = n[a]), l;
  }, {}), t, r];
}
let yn = null;
function Qa() {
  return yn || (yn = N.fromMillis(1555555555555)), yn;
}
function Ka(n, e) {
  if (n.literal)
    return n;
  const t = te.macroTokenToFormatOpts(n.val), r = bo(t, e);
  return r == null || r.includes(void 0) ? n : r;
}
function xo(n, e) {
  return Array.prototype.concat(...n.map((t) => Ka(t, e)));
}
function To(n, e, t) {
  const r = xo(te.parseFormat(t), n), o = r.map((a) => Wa(a, n)), l = o.find((a) => a.invalidReason);
  if (l)
    return { input: e, tokens: r, invalidReason: l.invalidReason };
  {
    const [a, c] = qa(o), d = RegExp(a, "i"), [m, y] = Ja(e, d, c), [k, M, f] = y ? Xa(y) : [null, null, void 0];
    if (tt(y, "a") && tt(y, "H"))
      throw new gt(
        "Can't include meridiem when specifying 24-hour format"
      );
    return { input: e, tokens: r, regex: d, rawMatches: m, matches: y, result: k, zone: M, specificOffset: f };
  }
}
function el(n, e, t) {
  const { result: r, zone: o, specificOffset: l, invalidReason: a } = To(n, e, t);
  return [r, o, l, a];
}
function bo(n, e) {
  return n ? te.create(e, n).formatDateTimeParts(Qa()).map((o) => Ba(o, n)) : null;
}
const Io = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], Mo = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function me(n, e) {
  return new xe(
    "unit out of range",
    `you specified ${e} (of type ${typeof e}) as a ${n}, which is invalid`
  );
}
function ko(n, e, t) {
  const r = new Date(Date.UTC(n, e - 1, t));
  n < 100 && n >= 0 && r.setUTCFullYear(r.getUTCFullYear() - 1900);
  const o = r.getUTCDay();
  return o === 0 ? 7 : o;
}
function Eo(n, e, t) {
  return t + (It(n) ? Mo : Io)[e - 1];
}
function So(n, e) {
  const t = It(n) ? Mo : Io, r = t.findIndex((l) => l < e), o = e - t[r];
  return { month: r + 1, day: o };
}
function Sn(n) {
  const { year: e, month: t, day: r } = n, o = Eo(e, t, r), l = ko(e, t, r);
  let a = Math.floor((o - l + 10) / 7), c;
  return a < 1 ? (c = e - 1, a = qt(c)) : a > qt(e) ? (c = e + 1, a = 1) : c = e, { weekYear: c, weekNumber: a, weekday: l, ...tn(n) };
}
function br(n) {
  const { weekYear: e, weekNumber: t, weekday: r } = n, o = ko(e, 1, 4), l = wt(e);
  let a = t * 7 + r - o - 3, c;
  a < 1 ? (c = e - 1, a += wt(c)) : a > l ? (c = e + 1, a -= wt(e)) : c = e;
  const { month: d, day: m } = So(c, a);
  return { year: c, month: d, day: m, ...tn(n) };
}
function gn(n) {
  const { year: e, month: t, day: r } = n, o = Eo(e, t, r);
  return { year: e, ordinal: o, ...tn(n) };
}
function Ir(n) {
  const { year: e, ordinal: t } = n, { month: r, day: o } = So(e, t);
  return { year: e, month: r, day: o, ...tn(n) };
}
function tl(n) {
  const e = Kt(n.weekYear), t = Ce(n.weekNumber, 1, qt(n.weekYear)), r = Ce(n.weekday, 1, 7);
  return e ? t ? r ? !1 : me("weekday", n.weekday) : me("week", n.week) : me("weekYear", n.weekYear);
}
function nl(n) {
  const e = Kt(n.year), t = Ce(n.ordinal, 1, wt(n.year));
  return e ? t ? !1 : me("ordinal", n.ordinal) : me("year", n.year);
}
function Oo(n) {
  const e = Kt(n.year), t = Ce(n.month, 1, 12), r = Ce(n.day, 1, Bt(n.year, n.month));
  return e ? t ? r ? !1 : me("day", n.day) : me("month", n.month) : me("year", n.year);
}
function Do(n) {
  const { hour: e, minute: t, second: r, millisecond: o } = n, l = Ce(e, 0, 23) || e === 24 && t === 0 && r === 0 && o === 0, a = Ce(t, 0, 59), c = Ce(r, 0, 59), d = Ce(o, 0, 999);
  return l ? a ? c ? d ? !1 : me("millisecond", o) : me("second", r) : me("minute", t) : me("hour", e);
}
const vn = "Invalid DateTime", Mr = 864e13;
function Zt(n) {
  return new xe("unsupported zone", `the zone "${n.name}" is not supported`);
}
function wn(n) {
  return n.weekData === null && (n.weekData = Sn(n.c)), n.weekData;
}
function pt(n, e) {
  const t = {
    ts: n.ts,
    zone: n.zone,
    c: n.c,
    o: n.o,
    loc: n.loc,
    invalid: n.invalid
  };
  return new N({ ...t, ...e, old: t });
}
function No(n, e, t) {
  let r = n - e * 60 * 1e3;
  const o = t.offset(r);
  if (e === o)
    return [r, e];
  r -= (o - e) * 60 * 1e3;
  const l = t.offset(r);
  return o === l ? [r, o] : [n - Math.min(o, l) * 60 * 1e3, Math.max(o, l)];
}
function kr(n, e) {
  n += e * 60 * 1e3;
  const t = new Date(n);
  return {
    year: t.getUTCFullYear(),
    month: t.getUTCMonth() + 1,
    day: t.getUTCDate(),
    hour: t.getUTCHours(),
    minute: t.getUTCMinutes(),
    second: t.getUTCSeconds(),
    millisecond: t.getUTCMilliseconds()
  };
}
function _t(n, e, t) {
  return No(Nn(n), e, t);
}
function Er(n, e) {
  const t = n.o, r = n.c.year + Math.trunc(e.years), o = n.c.month + Math.trunc(e.months) + Math.trunc(e.quarters) * 3, l = {
    ...n.c,
    year: r,
    month: o,
    day: Math.min(n.c.day, Bt(r, o)) + Math.trunc(e.days) + Math.trunc(e.weeks) * 7
  }, a = H.fromObject({
    years: e.years - Math.trunc(e.years),
    quarters: e.quarters - Math.trunc(e.quarters),
    months: e.months - Math.trunc(e.months),
    weeks: e.weeks - Math.trunc(e.weeks),
    days: e.days - Math.trunc(e.days),
    hours: e.hours,
    minutes: e.minutes,
    seconds: e.seconds,
    milliseconds: e.milliseconds
  }).as("milliseconds"), c = Nn(l);
  let [d, m] = No(c, t, n.zone);
  return a !== 0 && (d += a, m = n.zone.offset(d)), { ts: d, o: m };
}
function ft(n, e, t, r, o, l) {
  const { setZone: a, zone: c } = t;
  if (n && Object.keys(n).length !== 0 || e) {
    const d = e || c, m = N.fromObject(n, {
      ...t,
      zone: d,
      specificOffset: l
    });
    return a ? m : m.setZone(c);
  } else
    return N.invalid(
      new xe("unparsable", `the input "${o}" can't be parsed as ${r}`)
    );
}
function Rt(n, e, t = !0) {
  return n.isValid ? te.create(_.create("en-US"), {
    allowZ: t,
    forceSimple: !0
  }).formatDateTimeFromString(n, e) : null;
}
function xn(n, e) {
  const t = n.c.year > 9999 || n.c.year < 0;
  let r = "";
  return t && n.c.year >= 0 && (r += "+"), r += q(n.c.year, t ? 6 : 4), e ? (r += "-", r += q(n.c.month), r += "-", r += q(n.c.day)) : (r += q(n.c.month), r += q(n.c.day)), r;
}
function Sr(n, e, t, r, o, l) {
  let a = q(n.c.hour);
  return e ? (a += ":", a += q(n.c.minute), (n.c.second !== 0 || !t) && (a += ":")) : a += q(n.c.minute), (n.c.second !== 0 || !t) && (a += q(n.c.second), (n.c.millisecond !== 0 || !r) && (a += ".", a += q(n.c.millisecond, 3))), o && (n.isOffsetFixed && n.offset === 0 && !l ? a += "Z" : n.o < 0 ? (a += "-", a += q(Math.trunc(-n.o / 60)), a += ":", a += q(Math.trunc(-n.o % 60))) : (a += "+", a += q(Math.trunc(n.o / 60)), a += ":", a += q(Math.trunc(n.o % 60)))), l && (a += "[" + n.zone.ianaName + "]"), a;
}
const Co = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, rl = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, ol = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, Ao = ["year", "month", "day", "hour", "minute", "second", "millisecond"], il = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
], sl = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function Or(n) {
  const e = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[n.toLowerCase()];
  if (!e)
    throw new Vr(n);
  return e;
}
function Dr(n, e) {
  const t = je(e.zone, B.defaultZone), r = _.fromObject(e), o = B.now();
  let l, a;
  if (P(n.year))
    l = o;
  else {
    for (const m of Ao)
      P(n[m]) && (n[m] = Co[m]);
    const c = Oo(n) || Do(n);
    if (c)
      return N.invalid(c);
    const d = t.offset(o);
    [l, a] = _t(n, d, t);
  }
  return new N({ ts: l, zone: t, loc: r, o: a });
}
function Nr(n, e, t) {
  const r = P(t.round) ? !0 : t.round, o = (a, c) => (a = Dn(a, r || t.calendary ? 0 : 2, !0), e.loc.clone(t).relFormatter(t).format(a, c)), l = (a) => t.calendary ? e.hasSame(n, a) ? 0 : e.startOf(a).diff(n.startOf(a), a).get(a) : e.diff(n, a).get(a);
  if (t.unit)
    return o(l(t.unit), t.unit);
  for (const a of t.units) {
    const c = l(a);
    if (Math.abs(c) >= 1)
      return o(c, a);
  }
  return o(n > e ? -0 : 0, t.units[t.units.length - 1]);
}
function Cr(n) {
  let e = {}, t;
  return n.length > 0 && typeof n[n.length - 1] == "object" ? (e = n[n.length - 1], t = Array.from(n).slice(0, n.length - 1)) : t = Array.from(n), [e, t];
}
class N {
  /**
   * @access private
   */
  constructor(e) {
    const t = e.zone || B.defaultZone;
    let r = e.invalid || (Number.isNaN(e.ts) ? new xe("invalid input") : null) || (t.isValid ? null : Zt(t));
    this.ts = P(e.ts) ? B.now() : e.ts;
    let o = null, l = null;
    if (!r)
      if (e.old && e.old.ts === this.ts && e.old.zone.equals(t))
        [o, l] = [e.old.c, e.old.o];
      else {
        const c = t.offset(this.ts);
        o = kr(this.ts, c), r = Number.isNaN(o.year) ? new xe("invalid input") : null, o = r ? null : o, l = r ? null : c;
      }
    this._zone = t, this.loc = e.loc || _.create(), this.invalid = r, this.weekData = null, this.c = o, this.o = l, this.isLuxonDateTime = !0;
  }
  // CONSTRUCT
  /**
   * Create a DateTime for the current instant, in the system's time zone.
   *
   * Use Settings to override these default values if needed.
   * @example DateTime.now().toISO() //~> now in the ISO format
   * @return {DateTime}
   */
  static now() {
    return new N({});
  }
  /**
   * Create a local DateTime
   * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month, 1-indexed
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                                  //~> now
   * @example DateTime.local({ zone: "America/New_York" })      //~> now, in US east coast time
   * @example DateTime.local(2017)                              //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                           //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12, { locale: "fr" })     //~> 2017-03-12T00:00:00, with a French locale
   * @example DateTime.local(2017, 3, 12, 5)                    //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, { zone: "utc" })   //~> 2017-03-12T05:00:00, in UTC
   * @example DateTime.local(2017, 3, 12, 5, 45)                //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)            //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765)       //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */
  static local() {
    const [e, t] = Cr(arguments), [r, o, l, a, c, d, m] = t;
    return Dr({ year: r, month: o, day: l, hour: a, minute: c, second: d, millisecond: m }, e);
  }
  /**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @param {Object} options - configuration options for the DateTime
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.utc()                                              //~> now
   * @example DateTime.utc(2017)                                          //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                                       //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                                   //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)                                //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)                            //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, { locale: "fr" })          //~> 2017-03-12T05:45:00Z with a French locale
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)                        //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765, { locale: "fr" }) //~> 2017-03-12T05:45:10.765Z with a French locale
   * @return {DateTime}
   */
  static utc() {
    const [e, t] = Cr(arguments), [r, o, l, a, c, d, m] = t;
    return e.zone = oe.utcInstance, Dr({ year: r, month: o, day: l, hour: a, minute: c, second: d, millisecond: m }, e);
  }
  /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  static fromJSDate(e, t = {}) {
    const r = Cs(e) ? e.valueOf() : NaN;
    if (Number.isNaN(r))
      return N.invalid("invalid input");
    const o = je(t.zone, B.defaultZone);
    return o.isValid ? new N({
      ts: r,
      zone: o,
      loc: _.fromObject(t)
    }) : N.invalid(Zt(o));
  }
  /**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromMillis(e, t = {}) {
    if (Be(e))
      return e < -Mr || e > Mr ? N.invalid("Timestamp out of range") : new N({
        ts: e,
        zone: je(t.zone, B.defaultZone),
        loc: _.fromObject(t)
      });
    throw new de(
      `fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`
    );
  }
  /**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromSeconds(e, t = {}) {
    if (Be(e))
      return new N({
        ts: e * 1e3,
        zone: je(t.zone, B.defaultZone),
        loc: _.fromObject(t)
      });
    throw new de("fromSeconds requires a numerical input");
  }
  /**
   * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {Object} opts - options for creating this DateTime
   * @param {string|Zone} [opts.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @return {DateTime}
   */
  static fromObject(e, t = {}) {
    e = e || {};
    const r = je(t.zone, B.defaultZone);
    if (!r.isValid)
      return N.invalid(Zt(r));
    const o = B.now(), l = P(t.specificOffset) ? r.offset(o) : t.specificOffset, a = Jt(e, Or), c = !P(a.ordinal), d = !P(a.year), m = !P(a.month) || !P(a.day), y = d || m, k = a.weekYear || a.weekNumber, M = _.fromObject(t);
    if ((y || c) && k)
      throw new gt(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (m && c)
      throw new gt("Can't mix ordinal dates with month/day");
    const f = k || a.weekday && !y;
    let O, x, g = kr(o, l);
    f ? (O = il, x = rl, g = Sn(g)) : c ? (O = sl, x = ol, g = gn(g)) : (O = Ao, x = Co);
    let E = !1;
    for (const z of O) {
      const ee = a[z];
      P(ee) ? E ? a[z] = x[z] : a[z] = g[z] : E = !0;
    }
    const v = f ? tl(a) : c ? nl(a) : Oo(a), S = v || Do(a);
    if (S)
      return N.invalid(S);
    const I = f ? br(a) : c ? Ir(a) : a, [T, R] = _t(I, l, r), D = new N({
      ts: T,
      zone: r,
      o: R,
      loc: M
    });
    return a.weekday && y && e.weekday !== D.weekday ? N.invalid(
      "mismatched weekday",
      `you can't specify both a weekday of ${a.weekday} and a date of ${D.toISO()}`
    ) : D;
  }
  /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */
  static fromISO(e, t = {}) {
    const [r, o] = xa(e);
    return ft(r, o, t, "ISO 8601", e);
  }
  /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */
  static fromRFC2822(e, t = {}) {
    const [r, o] = Ta(e);
    return ft(r, o, t, "RFC 2822", e);
  }
  /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */
  static fromHTTP(e, t = {}) {
    const [r, o] = ba(e);
    return ft(r, o, t, "HTTP", t);
  }
  /**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/parsing?id=table-of-tokens).
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromFormat(e, t, r = {}) {
    if (P(e) || P(t))
      throw new de("fromFormat requires an input string and a format");
    const { locale: o = null, numberingSystem: l = null } = r, a = _.fromOpts({
      locale: o,
      numberingSystem: l,
      defaultToEN: !0
    }), [c, d, m, y] = el(a, e, t);
    return y ? N.invalid(y) : ft(c, d, r, `format ${t}`, e, m);
  }
  /**
   * @deprecated use fromFormat instead
   */
  static fromString(e, t, r = {}) {
    return N.fromFormat(e, t, r);
  }
  /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */
  static fromSQL(e, t = {}) {
    const [r, o] = Da(e);
    return ft(r, o, t, "SQL", e);
  }
  /**
   * Create an invalid DateTime.
   * @param {DateTime} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  static invalid(e, t = null) {
    if (!e)
      throw new de("need to specify a reason the DateTime is invalid");
    const r = e instanceof xe ? e : new xe(e, t);
    if (B.throwOnInvalid)
      throw new ls(r);
    return new N({ invalid: r });
  }
  /**
   * Check if an object is an instance of DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDateTime(e) {
    return e && e.isLuxonDateTime || !1;
  }
  /**
   * Produce the format string for a set of options
   * @param formatOpts
   * @param localeOpts
   * @returns {string}
   */
  static parseFormatForOpts(e, t = {}) {
    const r = bo(e, _.fromObject(t));
    return r ? r.map((o) => o ? o.val : null).join("") : null;
  }
  /**
   * Produce the the fully expanded format token for the locale
   * Does NOT quote characters, so quoted tokens will not round trip correctly
   * @param fmt
   * @param localeOpts
   * @returns {string}
   */
  static expandFormat(e, t = {}) {
    return xo(te.parseFormat(e), _.fromObject(t)).map((o) => o.val).join("");
  }
  // INFO
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */
  get(e) {
    return this[e];
  }
  /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }
  /**
   * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
   *
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  /**
   * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  /**
   * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
   *
   * @type {string}
   */
  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }
  /**
   * Get the time zone associated with this DateTime.
   * @type {Zone}
   */
  get zone() {
    return this._zone;
  }
  /**
   * Get the name of the time zone.
   * @type {string}
   */
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }
  /**
   * Get the year
   * @example DateTime.local(2017, 5, 25).year //=> 2017
   * @type {number}
   */
  get year() {
    return this.isValid ? this.c.year : NaN;
  }
  /**
   * Get the quarter
   * @example DateTime.local(2017, 5, 25).quarter //=> 2
   * @type {number}
   */
  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }
  /**
   * Get the month (1-12).
   * @example DateTime.local(2017, 5, 25).month //=> 5
   * @type {number}
   */
  get month() {
    return this.isValid ? this.c.month : NaN;
  }
  /**
   * Get the day of the month (1-30ish).
   * @example DateTime.local(2017, 5, 25).day //=> 25
   * @type {number}
   */
  get day() {
    return this.isValid ? this.c.day : NaN;
  }
  /**
   * Get the hour of the day (0-23).
   * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
   * @type {number}
   */
  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }
  /**
   * Get the minute of the hour (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
   * @type {number}
   */
  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }
  /**
   * Get the second of the minute (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
   * @type {number}
   */
  get second() {
    return this.isValid ? this.c.second : NaN;
  }
  /**
   * Get the millisecond of the second (0-999).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
   * @type {number}
   */
  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }
  /**
   * Get the week year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
   * @type {number}
   */
  get weekYear() {
    return this.isValid ? wn(this).weekYear : NaN;
  }
  /**
   * Get the week number of the week year (1-52ish).
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
   * @type {number}
   */
  get weekNumber() {
    return this.isValid ? wn(this).weekNumber : NaN;
  }
  /**
   * Get the day of the week.
   * 1 is Monday and 7 is Sunday
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 11, 31).weekday //=> 4
   * @type {number}
   */
  get weekday() {
    return this.isValid ? wn(this).weekday : NaN;
  }
  /**
   * Get the ordinal (meaning the day of the year)
   * @example DateTime.local(2017, 5, 25).ordinal //=> 145
   * @type {number|DateTime}
   */
  get ordinal() {
    return this.isValid ? gn(this.c).ordinal : NaN;
  }
  /**
   * Get the human readable short month name, such as 'Oct'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
   * @type {string}
   */
  get monthShort() {
    return this.isValid ? Ht.months("short", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable long month name, such as 'October'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthLong //=> October
   * @type {string}
   */
  get monthLong() {
    return this.isValid ? Ht.months("long", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable short weekday, such as 'Mon'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
   * @type {string}
   */
  get weekdayShort() {
    return this.isValid ? Ht.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the human readable long weekday, such as 'Monday'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
   * @type {string}
   */
  get weekdayLong() {
    return this.isValid ? Ht.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the UTC offset of this DateTime in minutes
   * @example DateTime.now().offset //=> -240
   * @example DateTime.utc().offset //=> 0
   * @type {number}
   */
  get offset() {
    return this.isValid ? +this.o : NaN;
  }
  /**
   * Get the short human name for the zone's current offset, for example "EST" or "EDT".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameShort() {
    return this.isValid ? this.zone.offsetName(this.ts, {
      format: "short",
      locale: this.locale
    }) : null;
  }
  /**
   * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameLong() {
    return this.isValid ? this.zone.offsetName(this.ts, {
      format: "long",
      locale: this.locale
    }) : null;
  }
  /**
   * Get whether this zone's offset ever changes, as in a DST.
   * @type {boolean}
   */
  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }
  /**
   * Get whether the DateTime is in a DST.
   * @type {boolean}
   */
  get isInDST() {
    return this.isOffsetFixed ? !1 : this.offset > this.set({ month: 1, day: 1 }).offset || this.offset > this.set({ month: 5 }).offset;
  }
  /**
   * Returns true if this DateTime is in a leap year, false otherwise
   * @example DateTime.local(2016).isInLeapYear //=> true
   * @example DateTime.local(2013).isInLeapYear //=> false
   * @type {boolean}
   */
  get isInLeapYear() {
    return It(this.year);
  }
  /**
   * Returns the number of days in this DateTime's month
   * @example DateTime.local(2016, 2).daysInMonth //=> 29
   * @example DateTime.local(2016, 3).daysInMonth //=> 31
   * @type {number}
   */
  get daysInMonth() {
    return Bt(this.year, this.month);
  }
  /**
   * Returns the number of days in this DateTime's year
   * @example DateTime.local(2016).daysInYear //=> 366
   * @example DateTime.local(2013).daysInYear //=> 365
   * @type {number}
   */
  get daysInYear() {
    return this.isValid ? wt(this.year) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2004).weeksInWeekYear //=> 53
   * @example DateTime.local(2013).weeksInWeekYear //=> 52
   * @type {number}
   */
  get weeksInWeekYear() {
    return this.isValid ? qt(this.weekYear) : NaN;
  }
  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */
  resolvedLocaleOptions(e = {}) {
    const { locale: t, numberingSystem: r, calendar: o } = te.create(
      this.loc.clone(e),
      e
    ).resolvedOptions(this);
    return { locale: t, numberingSystem: r, outputCalendar: o };
  }
  // TRANSFORM
  /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link DateTime#setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */
  toUTC(e = 0, t = {}) {
    return this.setZone(oe.instance(e), t);
  }
  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  toLocal() {
    return this.setZone(B.defaultZone);
  }
  /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link DateTime#plus}. You may wish to use {@link DateTime#toLocal} and {@link DateTime#toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link DateTime#Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */
  setZone(e, { keepLocalTime: t = !1, keepCalendarTime: r = !1 } = {}) {
    if (e = je(e, B.defaultZone), e.equals(this.zone))
      return this;
    if (e.isValid) {
      let o = this.ts;
      if (t || r) {
        const l = e.offset(this.ts), a = this.toObject();
        [o] = _t(a, l, e);
      }
      return pt(this, { ts: o, zone: e });
    } else
      return N.invalid(Zt(e));
  }
  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  reconfigure({ locale: e, numberingSystem: t, outputCalendar: r } = {}) {
    const o = this.loc.clone({ locale: e, numberingSystem: t, outputCalendar: r });
    return pt(this, { loc: o });
  }
  /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */
  setLocale(e) {
    return this.reconfigure({ locale: e });
  }
  /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link DateTime#reconfigure} and {@link DateTime#setZone}.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */
  set(e) {
    if (!this.isValid)
      return this;
    const t = Jt(e, Or), r = !P(t.weekYear) || !P(t.weekNumber) || !P(t.weekday), o = !P(t.ordinal), l = !P(t.year), a = !P(t.month) || !P(t.day), c = l || a, d = t.weekYear || t.weekNumber;
    if ((c || o) && d)
      throw new gt(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (a && o)
      throw new gt("Can't mix ordinal dates with month/day");
    let m;
    r ? m = br({ ...Sn(this.c), ...t }) : P(t.ordinal) ? (m = { ...this.toObject(), ...t }, P(t.day) && (m.day = Math.min(Bt(m.year, m.month), m.day))) : m = Ir({ ...gn(this.c), ...t });
    const [y, k] = _t(m, this.o, this.zone);
    return pt(this, { ts: y, o: k });
  }
  /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.now().plus(123) //~> in 123 milliseconds
   * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */
  plus(e) {
    if (!this.isValid)
      return this;
    const t = H.fromDurationLike(e);
    return pt(this, Er(this, t));
  }
  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link DateTime#plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
   */
  minus(e) {
    if (!this.isValid)
      return this;
    const t = H.fromDurationLike(e).negate();
    return pt(this, Er(this, t));
  }
  /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */
  startOf(e) {
    if (!this.isValid)
      return this;
    const t = {}, r = H.normalizeUnit(e);
    switch (r) {
      case "years":
        t.month = 1;
      case "quarters":
      case "months":
        t.day = 1;
      case "weeks":
      case "days":
        t.hour = 0;
      case "hours":
        t.minute = 0;
      case "minutes":
        t.second = 0;
      case "seconds":
        t.millisecond = 0;
        break;
    }
    if (r === "weeks" && (t.weekday = 1), r === "quarters") {
      const o = Math.ceil(this.month / 3);
      t.month = (o - 1) * 3 + 1;
    }
    return this.set(t);
  }
  /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */
  endOf(e) {
    return this.isValid ? this.plus({ [e]: 1 }).startOf(e).minus(1) : this;
  }
  // OUTPUT
  /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link DateTime#toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */
  toFormat(e, t = {}) {
    return this.isValid ? te.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this, e) : vn;
  }
  /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param formatOpts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toLocaleString(); //=> 4/20/2017
   * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL, { locale: 'fr' }); //=> '28 août 2022'
   * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }); //=> '11:32'
   * @return {string}
   */
  toLocaleString(e = Gt, t = {}) {
    return this.isValid ? te.create(this.loc.clone(t), e).formatDateTime(this) : vn;
  }
  /**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.now().toLocaleParts(); //=> [
   *                                   //=>   { type: 'day', value: '25' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'month', value: '05' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'year', value: '1982' }
   *                                   //=> ]
   */
  toLocaleParts(e = {}) {
    return this.isValid ? te.create(this.loc.clone(e), e).formatDateTimeParts(this) : [];
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=false] - add the time zone format extension
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1983, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @return {string}
   */
  toISO({
    format: e = "extended",
    suppressSeconds: t = !1,
    suppressMilliseconds: r = !1,
    includeOffset: o = !0,
    extendedZone: l = !1
  } = {}) {
    if (!this.isValid)
      return null;
    const a = e === "extended";
    let c = xn(this, a);
    return c += "T", c += Sr(this, a, t, r, o, l), c;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} opts - options
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @return {string}
   */
  toISODate({ format: e = "extended" } = {}) {
    return this.isValid ? xn(this, e === "extended") : null;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  toISOWeekDate() {
    return Rt(this, "kkkk-'W'WW-c");
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=true] - add the time zone format extension
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
   * @return {string}
   */
  toISOTime({
    suppressMilliseconds: e = !1,
    suppressSeconds: t = !1,
    includeOffset: r = !0,
    includePrefix: o = !1,
    extendedZone: l = !1,
    format: a = "extended"
  } = {}) {
    return this.isValid ? (o ? "T" : "") + Sr(
      this,
      a === "extended",
      t,
      e,
      r,
      l
    ) : null;
  }
  /**
   * Returns an RFC 2822-compatible string representation of this DateTime
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */
  toRFC2822() {
    return Rt(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers. The output is always expressed in GMT.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */
  toHTTP() {
    return Rt(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string}
   */
  toSQLDate() {
    return this.isValid ? xn(this, !0) : null;
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */
  toSQLTime({ includeOffset: e = !0, includeZone: t = !1, includeOffsetSpace: r = !0 } = {}) {
    let o = "HH:mm:ss.SSS";
    return (t || e) && (r && (o += " "), t ? o += "z" : e && (o += "ZZ")), Rt(this, o, !0);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */
  toSQL(e = {}) {
    return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(e)}` : null;
  }
  /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */
  toString() {
    return this.isValid ? this.toISO() : vn;
  }
  /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link DateTime#toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }
  /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  /**
   * Returns the epoch seconds of this DateTime.
   * @return {number}
   */
  toSeconds() {
    return this.isValid ? this.ts / 1e3 : NaN;
  }
  /**
   * Returns the epoch seconds (as a whole number) of this DateTime.
   * @return {number}
   */
  toUnixInteger() {
    return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
  }
  /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }
  /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */
  toBSON() {
    return this.toJSDate();
  }
  /**
   * Returns a JavaScript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */
  toObject(e = {}) {
    if (!this.isValid)
      return {};
    const t = { ...this.c };
    return e.includeConfig && (t.outputCalendar = this.outputCalendar, t.numberingSystem = this.loc.numberingSystem, t.locale = this.loc.locale), t;
  }
  /**
   * Returns a JavaScript Date equivalent to this DateTime.
   * @return {Date}
   */
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }
  // COMPARE
  /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */
  diff(e, t = "milliseconds", r = {}) {
    if (!this.isValid || !e.isValid)
      return H.invalid("created by diffing an invalid DateTime");
    const o = { locale: this.locale, numberingSystem: this.numberingSystem, ...r }, l = As(t).map(H.normalizeUnit), a = e.valueOf() > this.valueOf(), c = a ? this : e, d = a ? e : this, m = Ha(c, d, l, o);
    return a ? m.negate() : m;
  }
  /**
   * Return the difference between this DateTime and right now.
   * See {@link DateTime#diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  diffNow(e = "milliseconds", t = {}) {
    return this.diff(N.now(), e, t);
  }
  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval}
   */
  until(e) {
    return this.isValid ? Y.fromDateTimes(this, e) : this;
  }
  /**
   * Return whether this DateTime is in the same unit of time as another DateTime.
   * Higher-order units must also be identical for this function to return `true`.
   * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link DateTime#setZone} to convert one of the dates if needed.
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
   * @return {boolean}
   */
  hasSame(e, t) {
    if (!this.isValid)
      return !1;
    const r = e.valueOf(), o = this.setZone(e.zone, { keepLocalTime: !0 });
    return o.startOf(t) <= r && r <= o.endOf(t);
  }
  /**
   * Equality check
   * Two DateTimes are equal if and only if they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */
  equals(e) {
    return this.isValid && e.isValid && this.valueOf() === e.valueOf() && this.zone.equals(e.zone) && this.loc.equals(e.loc);
  }
  /**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds down by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
   * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */
  toRelative(e = {}) {
    if (!this.isValid)
      return null;
    const t = e.base || N.fromObject({}, { zone: this.zone }), r = e.padding ? this < t ? -e.padding : e.padding : 0;
    let o = ["years", "months", "days", "hours", "minutes", "seconds"], l = e.unit;
    return Array.isArray(e.unit) && (o = e.unit, l = void 0), Nr(t, this.plus(r), {
      ...e,
      numeric: "always",
      units: o,
      unit: l
    });
  }
  /**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */
  toRelativeCalendar(e = {}) {
    return this.isValid ? Nr(e.base || N.fromObject({}, { zone: this.zone }), this, {
      ...e,
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: !0
    }) : null;
  }
  /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */
  static min(...e) {
    if (!e.every(N.isDateTime))
      throw new de("min requires all arguments be DateTimes");
    return fr(e, (t) => t.valueOf(), Math.min);
  }
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  static max(...e) {
    if (!e.every(N.isDateTime))
      throw new de("max requires all arguments be DateTimes");
    return fr(e, (t) => t.valueOf(), Math.max);
  }
  // MISC
  /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */
  static fromFormatExplain(e, t, r = {}) {
    const { locale: o = null, numberingSystem: l = null } = r, a = _.fromOpts({
      locale: o,
      numberingSystem: l,
      defaultToEN: !0
    });
    return To(a, e, t);
  }
  /**
   * @deprecated use fromFormatExplain instead
   */
  static fromStringExplain(e, t, r = {}) {
    return N.fromFormatExplain(e, t, r);
  }
  // FORMAT PRESETS
  /**
   * {@link DateTime#toLocaleString} format like 10/14/1983
   * @type {Object}
   */
  static get DATE_SHORT() {
    return Gt;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED() {
    return Fr;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED_WITH_WEEKDAY() {
    return ds;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983'
   * @type {Object}
   */
  static get DATE_FULL() {
    return Lr;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
   * @type {Object}
   */
  static get DATE_HUGE() {
    return zr;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_SIMPLE() {
    return Pr;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SECONDS() {
    return jr;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SHORT_OFFSET() {
    return Hr;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_LONG_OFFSET() {
    return Ur;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_SIMPLE() {
    return Zr;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SECONDS() {
    return Rr;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SHORT_OFFSET() {
    return $r;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_LONG_OFFSET() {
    return _r;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT() {
    return Yr;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT_WITH_SECONDS() {
    return Wr;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED() {
    return Gr;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_SECONDS() {
    return Br;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_WEEKDAY() {
    return hs;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL() {
    return qr;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL_WITH_SECONDS() {
    return Jr;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE() {
    return Xr;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE_WITH_SECONDS() {
    return Qr;
  }
}
function yt(n) {
  if (N.isDateTime(n))
    return n;
  if (n && n.valueOf && Be(n.valueOf()))
    return N.fromJSDate(n);
  if (n && typeof n == "object")
    return N.fromObject(n);
  throw new de(
    `Unknown datetime argument: ${n}, of type ${typeof n}`
  );
}
N.prototype.format = function(n) {
  return this.toFormat(n);
};
class _e {
  static locationTime() {
    return N.local().setZone(window.timezone);
  }
  static parse(e) {
    return N.fromISO(e).setZone(window.timezone);
  }
  static parseTimestamp(e) {
    return N.fromMillis(+e).setZone(window.timezone);
  }
}
const al = `.calendar-component{position:relative;display:flex;--error-color: #ff6565;--primary-color: #1a2c51;--secondary-color: #8d96a8;--hover-color: #223a6b;--black-color: #000;--white-color: #fff}.calendar-component *{box-sizing:border-box;padding:0;margin:0}.calendar-component.is-invalid .input-component input{border:1px solid var(--error-color)}.calendar-component.is-invalid .input-component input:focus{border:1px solid var(--error-color)}.calendar-component.is-invalid .input-component label,.calendar-component.is-invalid .input-component input:focus+label,.calendar-component.is-invalid .input-component input:not(:placeholder-shown)+label{color:var(--error-color)}.calendar-component.is-invalid .calendar-container{border:1px solid var(--error-color);border-top:none 0}.calendar-component.calendar-component-opened .input-component input{border-radius:8px 8px 0 0}.calendar-component .calendar-container{width:100%;display:flex;flex-direction:column;z-index:10;background-color:var(--white-color);border:1px solid var(--secondary-color);border-top:none;border-radius:0 0 8px 8px;position:absolute;top:40px}.calendar-component .calendar-container .calendar-header{display:flex;justify-content:center;align-items:center;padding:10px;width:100%;gap:20px}.calendar-component .calendar-container .calendar-header .date-text{width:150px;text-align:center}.calendar-component .calendar-container .calendar-header .calendar-arrow{width:11px;height:18px;display:flex;align-items:center;flex-shrink:0}.calendar-component .calendar-container .calendar-header .calendar-arrow.left{background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAxMSAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzI3XzYpIj4KPHBhdGggZD0iTTkuMDAwMDEgOC45OTk5OUw5LjcwNzEyIDkuNzA3MUwxMC40MTQyIDguOTk5OTlMOS43MDcxMiA4LjI5Mjg4TDkuMDAwMDEgOC45OTk5OVpNMC4yOTI5MSAxLjcwNzA5TDguMjkyOSA5LjcwNzFMOS43MDcxMiA4LjI5Mjg4TDEuNzA3MTIgMC4yOTI4ODdMMC4yOTI5MSAxLjcwNzA5Wk04LjI5MjkgOC4yOTI4OEwwLjI5MjkwOCAxNi4yOTI5TDEuNzA3MTIgMTcuNzA3MUw5LjcwNzEyIDkuNzA3MUw4LjI5MjkgOC4yOTI4OFoiIGZpbGw9IiMxQTJDNTEiLz4KPC9nPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDFfMjdfNikiPgo8cGF0aCBkPSJNMi4wMDAwMyAyN0wxLjI5MjkyIDI2LjI5MjlMMC41ODU4MTUgMjdMMS4yOTI5MiAyNy43MDcxTDIuMDAwMDMgMjdaTTEwLjcwNzEgMzQuMjkyOUwyLjcwNzE0IDI2LjI5MjlMMS4yOTI5MiAyNy43MDcxTDkuMjkyOTIgMzUuNzA3MUwxMC43MDcxIDM0LjI5MjlaTTIuNzA3MTQgMjcuNzA3MUwxMC43MDcxIDE5LjcwNzFMOS4yOTI5MiAxOC4yOTI5TDEuMjkyOTIgMjYuMjkyOUwyLjcwNzE0IDI3LjcwNzFaIiBmaWxsPSIjMUEyQzUxIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMjdfNiI+CjxyZWN0IHdpZHRoPSIxOCIgaGVpZ2h0PSIxMSIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0ibWF0cml4KDAgLTEgMSAwIDAgMTgpIi8+CjwvY2xpcFBhdGg+CjxjbGlwUGF0aCBpZD0iY2xpcDFfMjdfNiI+CjxyZWN0IHdpZHRoPSIxOCIgaGVpZ2h0PSIxMSIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0ibWF0cml4KDAgLTEgMSAwIDAgMzYpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==) 0 -18px}.calendar-component .calendar-container .calendar-header .calendar-arrow.right{background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAxMSAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzI3XzYpIj4KPHBhdGggZD0iTTkuMDAwMDEgOC45OTk5OUw5LjcwNzEyIDkuNzA3MUwxMC40MTQyIDguOTk5OTlMOS43MDcxMiA4LjI5Mjg4TDkuMDAwMDEgOC45OTk5OVpNMC4yOTI5MSAxLjcwNzA5TDguMjkyOSA5LjcwNzFMOS43MDcxMiA4LjI5Mjg4TDEuNzA3MTIgMC4yOTI4ODdMMC4yOTI5MSAxLjcwNzA5Wk04LjI5MjkgOC4yOTI4OEwwLjI5MjkwOCAxNi4yOTI5TDEuNzA3MTIgMTcuNzA3MUw5LjcwNzEyIDkuNzA3MUw4LjI5MjkgOC4yOTI4OFoiIGZpbGw9IiMxQTJDNTEiLz4KPC9nPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDFfMjdfNikiPgo8cGF0aCBkPSJNMi4wMDAwMyAyN0wxLjI5MjkyIDI2LjI5MjlMMC41ODU4MTUgMjdMMS4yOTI5MiAyNy43MDcxTDIuMDAwMDMgMjdaTTEwLjcwNzEgMzQuMjkyOUwyLjcwNzE0IDI2LjI5MjlMMS4yOTI5MiAyNy43MDcxTDkuMjkyOTIgMzUuNzA3MUwxMC43MDcxIDM0LjI5MjlaTTIuNzA3MTQgMjcuNzA3MUwxMC43MDcxIDE5LjcwNzFMOS4yOTI5MiAxOC4yOTI5TDEuMjkyOTIgMjYuMjkyOUwyLjcwNzE0IDI3LjcwNzFaIiBmaWxsPSIjMUEyQzUxIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMjdfNiI+CjxyZWN0IHdpZHRoPSIxOCIgaGVpZ2h0PSIxMSIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0ibWF0cml4KDAgLTEgMSAwIDAgMTgpIi8+CjwvY2xpcFBhdGg+CjxjbGlwUGF0aCBpZD0iY2xpcDFfMjdfNiI+CjxyZWN0IHdpZHRoPSIxOCIgaGVpZ2h0PSIxMSIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0ibWF0cml4KDAgLTEgMSAwIDAgMzYpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==)-0 0rem}.calendar-component .calendar-container .calendar-header .calendar-arrow:hover{cursor:pointer;opacity:.7}.calendar-component .calendar-container .calendar-days{display:flex;width:100%;border-top:1px solid var(--secondary-color);height:49.5px}.calendar-component .calendar-container .calendar-days.day-names{border-top:none}.calendar-component .calendar-container .calendar-days .calendar-day{width:14.2857142857%;height:100%;display:flex;justify-content:center;align-items:center;border-right:1px solid var(--secondary-color);font-weight:400;font-size:12px;line-height:12px;color:var(--black-color)}.calendar-component .calendar-container .calendar-days .calendar-day:nth-child(7n){border-right:none}.calendar-component .calendar-container .calendar-days .calendar-day:hover{cursor:pointer;background-color:var(--secondary-color);color:var(--white-color)}.calendar-component .calendar-container .calendar-days .calendar-day.date-pass,.calendar-component .calendar-container .calendar-days .calendar-day.date-future{color:var(--secondary-color)}.calendar-component .calendar-container .calendar-days .calendar-day.date-pass:hover,.calendar-component .calendar-container .calendar-days .calendar-day.date-future:hover{color:var(--white-color)}.calendar-component .calendar-container .calendar-days .calendar-day.date-disabled{color:var(--secondary-color)}.calendar-component .calendar-container .calendar-days .calendar-day.date-disabled:hover{color:var(--secondary-color);cursor:not-allowed;background-color:var(--white-color)}.calendar-component .calendar-container .calendar-days .calendar-day.date-active,.calendar-component .calendar-container .calendar-days .calendar-day.date-current,.calendar-component .calendar-container .calendar-days .calendar-day.date-active:hover,.calendar-component .calendar-container .calendar-days .calendar-day.date-current:hover{background-color:var(--primary-color);color:var(--white-color)}.calendar-component .calendar-container .calendar-days .calendar-day.day-name{border-right:none}.calendar-component .calendar-container .calendar-days .calendar-day.day-name:hover{cursor:default;background-color:var(--white-color);color:var(--black-color)}
`, ll = {
  key: 0,
  class: "calendar-container"
}, ul = { class: "calendar-header" }, cl = { key: 0 }, dl = { class: "calendar-days" }, hl = ["onClick"];
function ml(n) {
  const e = document.createElement("style");
  return e.setAttribute("type", "text/css"), e.setAttribute("id", "styles-calendar-component"), document.head.firstChild ? document.head.insertBefore(e, document.head.firstChild) : document.head.appendChild(e), e.appendChild(document.createTextNode(n)), n;
}
ml(al);
const Sl = /* @__PURE__ */ Ee({
  __name: "CalendarComponent",
  props: {
    modelValue: null,
    format: { default: "YYYY-MM-DD" },
    errorMessage: null,
    disableFutureDates: { type: Boolean, default: !1 },
    disablePastDates: { type: Boolean, default: !1 },
    monthDropdown: { type: Boolean, default: !1 },
    yearDropdown: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: e }) {
    const t = n, r = j(!1), o = j(_e.locationTime()), l = j([]), a = j(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]), c = j(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]), d = j([
      {
        name: "January",
        value: 0
      },
      {
        name: "February",
        value: 1
      },
      {
        name: "March",
        value: 2
      },
      {
        name: "April",
        value: 3
      },
      {
        name: "May",
        value: 4
      },
      {
        name: "June",
        value: 5
      },
      {
        name: "July",
        value: 6
      },
      {
        name: "August",
        value: 7
      },
      {
        name: "September",
        value: 8
      },
      {
        name: "October",
        value: 9
      },
      {
        name: "November",
        value: 10
      },
      {
        name: "December",
        value: 11
      }
    ]), m = $(() => {
      const I = [];
      for (let T = 1900; T <= 2100; T++)
        I.push({
          name: T.toString(),
          value: T
        });
      return I;
    }), y = $({
      get: () => o.value.year,
      set: (I) => {
        o.value = o.value.set({ year: I });
      }
    }), k = $({
      get() {
        return t.modelValue;
      },
      set(I) {
        e("update:modelValue", I);
      }
    }), M = $(() => {
      let I = "";
      if (k.value == null)
        I = "--.--.----";
      else {
        let T = S(k.value), R = T.substring(8, 10), D = T.substring(5, 7), z = T.substring(0, 4);
        I = R + "." + D + "." + z;
      }
      return I;
    }), f = $({
      get: () => o.value.month - 1,
      set: (I) => {
        console.log(I), o.value = o.value.set({ month: I + 1 });
      }
    });
    Tt(() => {
      k.value && k.value.toString() == "Invalid DateTime" ? o.value = _e.locationTime() : k.value && (o.value = k.value || _e.locationTime());
    }), Wt(o, () => {
      g();
    }), Wt(r, () => {
      g();
    });
    function O() {
      r.value = !0;
    }
    function x() {
      r.value = !1;
    }
    function g() {
      let I = [], T = o.value.set({ day: 1 }), R = T.weekday;
      T = T.minus({ months: 1 }).endOf("month");
      let D = T.day;
      for (let Z = R - 1; Z > 0; Z--)
        I.push({
          text: D - Z + 1,
          time: T.set({ day: D - Z + 1 }),
          status: "date-pass"
        });
      T = T.plus({ months: 1 }).endOf("month");
      let z = T.day, ee = M.value || S(_e.locationTime());
      for (let Z = 0; Z < z; Z++) {
        let fe = T.set({ day: Z + 1 }), Se = "", ye = ee.split("."), Et = ye[2] + "-" + ye[1] + "-" + ye[0];
        S(fe) === Et && (Se = "date-active"), S(_e.locationTime()) === S(fe) && (Se += " date-current"), I.push({
          text: Z + 1,
          time: fe,
          status: Se
        });
      }
      let ae = 1;
      for (; I.length < 42; )
        I.push({
          text: ae,
          time: T.plus({ months: 1 }).set({ day: ae }),
          status: "date-future"
        }), ae++;
      t.disableFutureDates && I.forEach((Z) => {
        Z.time > _e.locationTime() && (Z.status += " date-disabled");
      }), t.disablePastDates && I.forEach((Z) => {
        Z.time < _e.locationTime() && (Z.status += " date-disabled");
      }), l.value = I;
    }
    function E(I) {
      o.value = o.value.set({ month: o.value.month + I });
    }
    function v(I) {
      l.value[I].status.includes("date-disabled") || (o.value = l.value[I].time.set({ hour: 7, minute: 0 }), e("update:modelValue", o.value), r.value = !1);
    }
    function S(I = o.value, T = t.format) {
      let R = I.year, D = I.month, z = I.day, ee = a.value[I.month - 1];
      const ae = {
        YYYY: R,
        MMM: ee,
        MM: ("0" + D).slice(-2),
        M: D,
        DD: ("0" + z).slice(-2),
        D: z
      };
      return T.replace(/Y+|M+|D+/g, (Z) => Z in ae ? ae[Z] : Z);
    }
    return (I, T) => {
      const R = Xt("click-outside");
      return C(), F("div", {
        class: pe(["calendar-component", {
          "calendar-component-opened": r.value
        }])
      }, [
        Ae(Ge, {
          "read-only": !0,
          onClick: O,
          modelValue: L(M),
          "onUpdate:modelValue": T[0] || (T[0] = (D) => K(M) ? M.value = D : null),
          "place-holder": "Select Date",
          "error-message": n.errorMessage
        }, null, 8, ["modelValue", "error-message"]),
        r.value ? he((C(), F("div", ll, [
          A("div", ul, [
            A("div", {
              class: "calendar-arrow left",
              onClick: T[1] || (T[1] = (D) => E(-1))
            }),
            n.monthDropdown ? Q("", !0) : (C(), F("p", cl, W(a.value[o.value.month - 1]) + " " + W(o.value.year), 1)),
            n.monthDropdown ? (C(), rr(or, {
              key: 1,
              options: d.value,
              "place-holder": "Month",
              modelValue: L(f),
              "onUpdate:modelValue": T[2] || (T[2] = (D) => K(f) ? f.value = D : null)
            }, null, 8, ["options", "modelValue"])) : Q("", !0),
            n.yearDropdown ? (C(), rr(or, {
              key: 2,
              options: L(m),
              "place-holder": "Year",
              modelValue: L(y),
              "onUpdate:modelValue": T[3] || (T[3] = (D) => K(y) ? y.value = D : null)
            }, null, 8, ["options", "modelValue"])) : Q("", !0),
            A("div", {
              class: "calendar-arrow right",
              onClick: T[4] || (T[4] = (D) => E(1))
            })
          ]),
          A("div", dl, [
            (C(!0), F(Te, null, Ke(c.value, (D) => (C(), F("p", {
              class: "calendar-day day-name",
              key: D
            }, W(D), 1))), 128))
          ]),
          (C(), F(Te, null, Ke(6, (D) => A("div", {
            class: "calendar-days",
            key: D
          }, [
            (C(), F(Te, null, Ke(7, (z) => A("p", {
              class: pe(["calendar-day", l.value[(D - 1) * 7 + (z - 1)] && l.value[(D - 1) * 7 + (z - 1)].status]),
              key: z,
              onClick: (ee) => v((D - 1) * 7 + (z - 1))
            }, W(l.value[(D - 1) * 7 + (z - 1)] && l.value[(D - 1) * 7 + (z - 1)].text), 11, hl)), 64))
          ])), 64))
        ])), [
          [R, x]
        ]) : Q("", !0)
      ], 2);
    };
  }
}), pl = `.checkbox-slider{display:flex;align-items:center;justify-content:flex-start;gap:10px;width:auto;user-select:none;--error-color: #ff6565;--primary-color: #1a2c51;--secondary-color: #8d96a8;--hover-color: #223a6b;--black-color: #000;--white-color: #fff;--green-color: #7cd920}.checkbox-slider *{box-sizing:border-box;padding:0;margin:0}.checkbox-slider .checkbox-switch{position:relative;display:inline-flex;width:40px;height:18px;cursor:pointer}.checkbox-slider .checkbox-switch:hover{cursor:pointer;opacity:.7}.checkbox-slider .checkbox-switch label{display:flex;vertical-align:middle;justify-content:flex-start;position:relative;display:inline-block;width:40px;height:18px;cursor:pointer}.checkbox-slider .checkbox-switch input{opacity:0;width:0;height:0}.checkbox-slider .checkbox-switch .slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:var(--secondary-color);transition:.4s;border-radius:40px}.checkbox-slider .checkbox-switch .slider:before{position:absolute;content:"";height:10px;width:10px;border-radius:18px;left:5px;bottom:4px;background-color:var(--white-color);transition:.25s}.checkbox-slider .checkbox-switch input:checked+.slider{background-color:var(--green-color)}.checkbox-slider .checkbox-switch input:checked+.slider:before{transform:translate(20px)}.checkbox-slider .checkbox-slider-label{font-size:15px;line-height:140%;padding-top:2px;color:var(--black-color);cursor:pointer}.checkbox-slider.is-invalid .checkbox-switch .slider{background-color:var(--error-color)}.checkbox-slider.is-invalid .checkbox-slider-label{color:var(--error-color)}
`, fl = { class: "checkbox-slider" }, yl = ["for"], gl = ["value", "id"], vl = /* @__PURE__ */ A("span", { class: "slider" }, null, -1), wl = ["for"];
function xl(n) {
  const e = document.createElement("style");
  return e.setAttribute("type", "text/css"), e.setAttribute("id", "styles-checkbox-slider-component"), document.head.firstChild ? document.head.insertBefore(e, document.head.firstChild) : document.head.appendChild(e), e.appendChild(document.createTextNode(n)), n;
}
xl(pl);
const Ol = /* @__PURE__ */ Ee({
  __name: "CheckBoxSliderComponent",
  props: {
    valueKey: null,
    placeHolder: { default: "Checkbox" },
    errorMessage: null,
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(n, { emit: e }) {
    const t = n, r = Math.random().toString(36).slice(2), o = $({
      get: () => t.modelValue,
      set: (l) => {
        e("update:modelValue", l);
      }
    });
    return (l, a) => (C(), F("div", fl, [
      A("label", {
        class: "checkbox-switch",
        for: "switch_" + L(r)
      }, [
        he(A("input", {
          type: "checkbox",
          "onUpdate:modelValue": a[0] || (a[0] = (c) => K(o) ? o.value = c : null),
          value: n.valueKey,
          id: "switch_" + L(r)
        }, null, 8, gl), [
          [Ar, L(o)]
        ]),
        vl
      ], 8, yl),
      A("label", {
        for: "switch_" + L(r),
        class: "checkbox-slider-label"
      }, [
        He(W(n.placeHolder) + " ", 1),
        n.errorMessage ? (C(), F(Te, { key: 0 }, [
          He("- " + W(n.errorMessage), 1)
        ], 64)) : Q("", !0)
      ], 8, wl)
    ]));
  }
});
import("./fullBorder-2630bde3.js"), import("./modern-94b93708.js");
export {
  Sl as CalendarComponent,
  Ol as CheckBoxSliderComponent,
  or as DropdownComponent,
  Ge as InputComponent,
  bl as InputComponentWithSuggestions,
  Il as InputDateComponent,
  El as SliderComponent,
  kl as TextAreaComponent,
  Ml as TimePickerComponent
};
