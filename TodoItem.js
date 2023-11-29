const template = document.createElement("template");
template.innerHTML = `
<style>
    .control {
        color: darkseagreen;
    }
</style>
<label>
    <input type="checkbox" />
    <slot></slot>
    <span class="control">
        <slot name="control"></slot>
    </span>
</label>
`;

class TodoItem extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
    this.checkbox = shadow.querySelector("input");
  }

  static get observedAttributes() {
    return ["checked"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "checked") {
      this.updateChecked(newValue);
    }
  }

  updateChecked(value) {
    this.checkbox.checked = value !== null && value !== "false";
  }
}

customElements.define("todo-item", TodoItem);

const item = document.querySelector("todo-item");
let checked = true;
setInterval(() => {
  checked = !checked;
  item.setAttribute("checked", checked);
}, 500);
