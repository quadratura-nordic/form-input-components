import { App, DirectiveBinding, ObjectDirective } from "vue";
interface ExtendedHTMLElement extends HTMLElement {
  clickOutsideHandler?: (ev: Event) => void;
}
export default function (Vue: App) {
  function bind(el: ExtendedHTMLElement, binding: DirectiveBinding) {
    unbind(el);

    const callback = binding.value.callback
      ? binding.value.callback
      : binding.value;

    if (typeof callback !== "function") {
      if (process.env.NODE_ENV !== "production") {
        console.warn(
          "v-click-outside" +
            '="' +
            '" expects a function value, ' +
            "got " +
            callback
        );
      }
      return;
    }
    let initialMacrotaskEnded = false;
    setTimeout(function () {
      initialMacrotaskEnded = true;
    }, 0);

    el.clickOutsideHandler = function (ev) {
      if (
        initialMacrotaskEnded &&
        ev.target instanceof Element &&
        !el.contains(ev.target) &&
        (!document.querySelector(binding.value.exclude) ||
          !document.querySelector(binding.value.exclude).contains(ev.target))
      ) {
        return callback(ev);
      }
    };

    document.documentElement.addEventListener(
      "click",
      el.clickOutsideHandler,
      false
    );
  }

  function unbind(el: ExtendedHTMLElement) {
    if (el.clickOutsideHandler) {
      document.documentElement.removeEventListener(
        "click",
        el.clickOutsideHandler,
        false
      );
    }
    delete el.clickOutsideHandler;
  }

  Vue.directive("click-outside", <ObjectDirective<ExtendedHTMLElement, string>>{
    beforeMount: bind,
    updated: function (el: ExtendedHTMLElement, binding: DirectiveBinding) {
      if (binding.value === binding.oldValue) return;
      bind(el, binding);
    },
    beforeUnmount: unbind,
  });
}
