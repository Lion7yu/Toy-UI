export default {
  mounted(el) {
    const input = el.querySelector("input");
    const placeholder = el.querySelector("label");

    input.addEventListener("focus", () => {
      placeholder.style.display = "none";
    });

    input.addEventListener("blur", (e) => {
      setTimeout(() => {
        console.log(e.target.value);
        if (e.target.value.length === 0) {
          placeholder.style.display = "block";
        }
      }, 200);
    });
  },
};
