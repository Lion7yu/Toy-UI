import { Directive, DirectiveBinding } from "vue";

const map = new Map<
  HTMLElement,
  (mouseup?: MouseEvent, mousedown?: MouseEvent) => void
>();

let mousedown: MouseEvent;

document.addEventListener("mousedown", (ev: MouseEvent) => {
  mousedown = ev;
});
document.addEventListener("mouseup", (ev: MouseEvent) => {
  map.forEach((cb, _el) => {
    cb(ev, mousedown);
  });
});

function createDocumentHandler(
  el: HTMLElement,
  binding: DirectiveBinding<() => void>
) {
  return (mouseup?: MouseEvent, mousedown?: MouseEvent) => {
    if (
      !mouseup?.target ||
      !mousedown?.target ||
      el.contains(mouseup?.target as Node) ||
      el.contains(mousedown?.target as Node) ||
      el === mouseup.target
    ) {
      return;
    }

    binding.value();
  };
}

export const ClickOutside: Directive<HTMLElement, () => void> = {
  beforeMount(el, binding) {
    const handler = createDocumentHandler(el, binding);

    map.set(el, handler);
  },
  updated(el, binding) {
    const handler = createDocumentHandler(el, binding);

    map.set(el, handler);
  },
  beforeUnmount(el, _binding) {
    map.delete(el);
  },
};
