import { App, DirectiveBinding, ObjectDirective } from 'vue';

interface ExtendedHTMLElement extends HTMLElement {
  el?: (ev: Event) => void;
}

export default function (Vue: App) {
  Vue.directive('focus', <ObjectDirective<ExtendedHTMLElement, string>>{
    inserted: function (el: ExtendedHTMLElement) {
      el.focus();
    },
  });
}
