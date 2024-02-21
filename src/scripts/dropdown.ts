export default class Dropdown {
  domNode: HTMLElement;
  menuButton: HTMLButtonElement;
  menuNode: HTMLElement;
  menuitemNodes: HTMLElement[];
  firstMenuitem: null;
  lastMenuitem: null;
  performAction?: any;

  constructor(domNode: HTMLElement, performAction?:any) {
    this.domNode = domNode;
    this.performAction = performAction;
    this.menuButton = domNode.querySelector("[data-toggle='dropdown']");
    this.menuNode = domNode.querySelector("[role='menu']");
    this.menuitemNodes = [];
    this.firstMenuitem = null;
    this.lastMenuitem = null;

    this.menuButton.addEventListener(
      "click",
      this.handleMenuButtonClick.bind(this)
    );

    this.menuButton.addEventListener(
      "keydown",
      this.handleMenuButtonKeyDown.bind(this)
    );

    const menuitems: NodeListOf<HTMLElement> =
      domNode.querySelectorAll("[role='menuitem']");

    for (let i = 0; i < menuitems.length; i++) {
      const menuitem = menuitems[i];
      this.menuitemNodes.push(menuitem);
      menuitem.tabIndex = -1;

      menuitem.addEventListener(
        "keydown",
        this.handleMenuitemKeyDown.bind(this)
      );
      menuitem.addEventListener("click", this.handleMenuitemClick.bind(this));
      menuitem.addEventListener(
        "mouseover",
        this.handleMenuitemMouseover.bind(this)
      );

      if (!this.firstMenuitem) {
        this.firstMenuitem = menuitem;
      }
      this.lastMenuitem = menuitem;
    }

    domNode.addEventListener("focusin", this.handleFocusin.bind(this));
    domNode.addEventListener("focusout", this.handleFocusout.bind(this));
  }

  setFocusToMenuitem(newMenuitem: HTMLElement) {
    this.menuitemNodes.forEach((menuitem) => {
      if (menuitem === newMenuitem) {
        menuitem.tabIndex = 0;
      } else {
        menuitem.tabIndex = -1;
      }
    });
  }

  setFocusToFirstMenuitem() {
    this.setFocusToMenuitem(this.firstMenuitem);
  }

  setFocusToLastMenuitem() {
    this.setFocusToMenuitem(this.lastMenuitem);
  }

  setFocusToPreviousMenuitem(currentMenuitem: HTMLElement | null) {
    let newMenuitem, index;

    if (currentMenuitem === this.firstMenuitem) {
      newMenuitem = this.lastMenuitem;
    } else {
      index = this.menuitemNodes.indexOf(currentMenuitem);
      newMenuitem = this.menuitemNodes[index - 1];
    }

    this.setFocusToMenuitem(newMenuitem);

    return newMenuitem;
  }

  setFocusToNextMenuitem(currentMenuitem: HTMLElement | null) {
    let newMenuitem, index;
    if (currentMenuitem === this.lastMenuitem) {
      newMenuitem = this.firstMenuitem;
    } else {
      index = this.menuitemNodes.indexOf(currentMenuitem);
      newMenuitem = this.menuitemNodes[index + 1];
    }
    this.setFocusToMenuitem(newMenuitem);
    return newMenuitem;
  }

  isOpen() {
    return this.menuButton.getAttribute("aria-expanded") === "true";
  }

  openPopup() {
    this.menuNode.classList.remove("hidden");
    this.menuButton.setAttribute("aria-expanded", "true");
    this.menuButton.lastElementChild?.classList.toggle("rotate-180");
  }

  closePopup() {
    if (this.isOpen()) {
      this.menuButton.setAttribute("aria-expanded", "false");
      this.menuNode.classList.add("hidden");
      this.menuButton.lastElementChild?.classList.toggle("rotate-180");
    }
  }

  handleMenuButtonClick(event: MouseEvent) {
    if (this.isOpen()) {
      this.closePopup();
      this.menuButton.focus();
    } else {
      this.openPopup();
      this.setFocusToFirstMenuitem();
    }
    event.stopPropagation();
    event.stopPropagation();
  }

  handleMenuButtonKeyDown(event: KeyboardEvent) {
    const key = event.key;
    let flag = false;

    switch (key) {
      case " ":
      case "Enter":
      case "ArrowDown":
      case "Down":
        this.openPopup();
        this.setFocusToFirstMenuitem();
        flag = true;
        break;

      case "Esc":
      case "Escape":
        this.closePopup();
        flag = true;
        break;

      case "Up":
      case "ArrowUp":
        this.openPopup();
        this.setFocusToLastMenuitem();
        break;

      default:
        break;
    }
    if (flag) {
      event.stopPropagation();
      event.preventDefault();
    }
  }

  handleMenuitemClick(event: MouseEvent) {
    const target = event.currentTarget;
    this.closePopup();
    this.menuButton.focus();
    this.performAction(target);
  }

  handleMenuitemKeyDown() {}

  handleMenuitemMouseover() {}

  handleFocusin() {}

  handleFocusout() {}
}
