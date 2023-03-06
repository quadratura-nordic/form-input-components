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
