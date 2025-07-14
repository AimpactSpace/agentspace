class Button {
  constructor(text, type = 'primary') {
    this.text = text;
    this.type = type;
  }

  render() {
    const button = document.createElement('button');
    button.textContent = this.text;
    button.classList.add('btn', `btn-${this.type}`);
    return button;
  }
}

// Example usage:
// const primaryButton = new Button('Click me', 'primary');
// document.body.appendChild(primaryButton.render());
