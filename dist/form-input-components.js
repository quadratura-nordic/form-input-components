(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('.input-component{display:flex;flex-flow:column-reverse;width:100%;align-items:flex-start;transition:all .2s ease-in-out;position:relative;height:40px;--error-color: #ff6565;--primary-color: #1a2c51;--secondary-color: #8d96a8;--hover-color: #223a6b;--black-color: #000;--white-color: #fff}.input-component>*{box-sizing:border-box}.input-component.read-only-input-disabled-movement input:not(:placeholder-shown)+label,.input-component.read-only-input-disabled-movement input:focus+label{color:var(--secondary-color);font-size:15px;transform:translate(10px,2.5px) scale(1)}.input-component.is-invalid input{border:1px solid var(--error-color)}.input-component.is-invalid input:focus{border:1px solid var(--error-color)}.input-component.is-invalid label{color:var(--error-color)}.input-component.is-invalid input:focus+label{color:var(--error-color)}.input-component.is-invalid input:not(:placeholder-shown)+label{color:var(--error-color)}.input-component .clear-input{opacity:0;position:absolute;right:0;width:40px;height:calc(100% - 1px);padding:10px;display:flex;justify-content:center;align-items:center;transition:all .2s ease-in-out}.input-component .clear-input.show{opacity:1;cursor:pointer;background-color:transparent;animation:fadeIn .2s ease-in-out;z-index:2}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.input-component .clear-input.show:before,.input-component .clear-input.show:after{position:absolute;content:"";width:50%;height:1px;background-color:var(--black-color)}.input-component .clear-input.show:before{transform:rotate(45deg)}.input-component .clear-input.show:after{transform:rotate(-45deg)}.input-component .clear-input.show:hover:before,.input-component .clear-input.show:hover:after{background-color:var(--hover-color)}.input-component input{width:100%;height:100%;border:1px solid var(--secondary-color);-moz-appearance:none;-webkit-appearance:none;appearance:none;border-radius:8px;font-weight:400;font-size:15px;line-height:22px;color:var(--black-color);padding:10px 40px 10px 15px;background-color:transparent}.input-component input:focus,.input-component input:hover{cursor:pointer;outline:none}.input-component input:hover{border:.01rem solid var(--hover-color)}.input-component input:focus{border:.01rem solid var(--primary-color)}.input-component input:read-only{padding-right:0}.input-component label{font-weight:400;font-size:15px;line-height:100%;display:inline-block;flex-shrink:1;flex-grow:0;color:var(--secondary-color);background-color:var(--white-color);padding:5px;position:absolute;top:5px}.input-component label:hover{cursor:pointer}.input-component input:placeholder-shown+label{transform:translate(10px,2.5px) scale(1)}.input-component input:focus+label{font-weight:400;font-size:12px;color:var(--black-color)}.input-component ::-webkit-input-placeholder{opacity:0;transition:inherit}.input-component input:not(:placeholder-shown)+label{font-weight:400;font-size:12px;color:var(--black-color)}.input-component input:not(:placeholder-shown)+label,.input-component input:focus+label{color:var(--black-color);font-size:12px;transform:translate(10px,-15px) scale(1)}.input-component label,.input-component input{transition:all .2s;touch-action:manipulation}.input-component.input-component-border-bottom.is-invalid input{border:0;border-bottom:1px solid var(--error-color)}.input-component.input-component-border-bottom.is-invalid input:focus{border:0;border-bottom:1px solid var(--error-color)}.input-component.input-component-border-bottom.read-only-input-disabled-movement input:not(:placeholder-shown)+label,.input-component.input-component-border-bottom.read-only-input-disabled-movement input:focus+label{transform:translate(-5px,8px) scale(1)}.input-component.input-component-border-bottom input{border:0;border-bottom:.1rem solid var(--secondary-color);-moz-appearance:none;-webkit-appearance:none;appearance:none;border-radius:0;padding:10px 40px 5px 10px}.input-component.input-component-border-bottom input:focus,.input-component.input-component-border-bottom input:hover{cursor:pointer;outline:none}.input-component.input-component-border-bottom input:hover{border-bottom:.01rem solid var(--hover-color)}.input-component.input-component-border-bottom input:focus{border-bottom:.01rem solid var(--primary-color)}.input-component.input-component-border-bottom input:placeholder-shown+label{transform:translate(-5px,8px) scale(1)}.input-component.input-component-border-bottom input:not(:placeholder-shown)+label,.input-component.input-component-border-bottom input:focus+label{transform:translate(-5px,-15px) scale(1)}.input-component.input-component-full-border{height:auto;gap:10px}.input-component.input-component-full-border.is-invalid input{border:1px solid var(--error-color)}.input-component.input-component-full-border.is-invalid input:focus{border:1px solid var(--error-color)}.input-component.input-component-full-border.is-invalid label{color:var(--error-color)}.input-component.input-component-full-border.is-invalid input:focus+label{color:var(--error-color)}.input-component.input-component-full-border.is-invalid input:not(:placeholder-shown)+label{color:var(--error-color)}.input-component.input-component-full-border .clear-input{bottom:0;height:40px}.input-component.input-component-full-border input{height:40px;border:1px solid var(--black-color);border-radius:0;color:var(--black-color)}.input-component.input-component-full-border label{display:inline-flex;color:var(--black-color);background-color:transparent;padding:0;position:relative}.input-component.input-component-full-border input:placeholder-shown+label{transform:translateY(-2.5px) scale(1)}.input-component.input-component-full-border input:focus+label{font-size:15px;color:var(--black-color)}.input-component.input-component-full-border ::-webkit-input-placeholder{opacity:0;transition:inherit}.input-component.input-component-full-border input:not(:placeholder-shown)+label{font-size:15px;color:var(--black-color)}.input-component.input-component-full-border input:not(:placeholder-shown)+label,.input-component.input-component-full-border input:focus+label{color:var(--black-color);font-size:15px;transform:translateY(-2.5px) scale(1)}')),document.head.appendChild(o)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
import { defineComponent as v, computed as g, openBlock as t, createElementBlock as n, normalizeClass as r, withDirectives as C, createElementVNode as i, unref as o, isRef as M, vModelDynamic as h, createTextVNode as m, toDisplayString as c, Fragment as k, createCommentVNode as s } from "vue";
const x = ["type", "id", "readonly"], O = ["for"], D = /* @__PURE__ */ v({
  __name: "InputComponent",
  props: {
    inputType: { default: "text" },
    placeHolder: null,
    errorMessage: null,
    modelValue: null,
    readOnly: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: p }) {
    const y = e, a = Math.random().toString(36).slice(2), l = g({
      get: () => y.modelValue,
      set: (u) => {
        p("update:modelValue", u);
      }
    });
    function f() {
      l.value = "";
    }
    return (u, d) => (t(), n("div", {
      class: r(["input-component", {
        "read-only-input-disabled-movement": e.readOnly && !e.modelValue
      }])
    }, [
      C(i("input", {
        type: e.inputType,
        placeholder: " ",
        id: "input" + o(a),
        "onUpdate:modelValue": d[0] || (d[0] = (V) => M(l) ? l.value = V : null),
        readonly: e.readOnly
      }, null, 8, x), [
        [h, o(l)]
      ]),
      i("label", {
        for: "input" + o(a)
      }, [
        m(c(e.placeHolder) + " ", 1),
        e.errorMessage ? (t(), n(k, { key: 0 }, [
          m("- " + c(e.errorMessage), 1)
        ], 64)) : s("", !0)
      ], 8, O),
      e.readOnly ? s("", !0) : (t(), n("div", {
        key: 0,
        class: r(["clear-input", { show: e.modelValue }]),
        onClick: f
      }, null, 2))
    ], 2));
  }
});
export {
  D as InputComponent
};
