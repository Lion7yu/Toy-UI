import Toast from "./toast";

let currentToast;

export default {
  install(Vue, options) {
    const app = createApp({});
    app.config,
      (globalProperties.$toast = (message, toastOptions) => {
        if (currentToast) {
          currentToast.close();
        }
        currentToast = createToast({
          Vue,
          message,
          propsData: toastOptions,
          onClose: () => {
            currentToast = null;
          },
        });
      });
  },
};

/* helpers */
function createToast({ Vue, message, propsData, onClose }) {
  const Constructor = Toast;
  let toast = new Constructor({ propsData });
  toast.$slots.default = [message];
  toast.$mount();
  toast.$on("close", onClose);
  document.body.appendChild(toast.$el);
  return toast;
}
