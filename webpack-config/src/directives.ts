import ClickOutside from "./directives/ClickOutside";
import Focus from "./directives/Focus";
import { App } from "vue";
export default function (app: App) {
  ClickOutside(app);
  Focus(app);
}
