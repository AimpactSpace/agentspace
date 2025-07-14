class StatusTag {
  constructor(text, type = 'pending') {
    this.text = text;
    this.type = type;
  }

  render() {
    const tag = document.createElement('span');
    tag.textContent = this.text;
    tag.classList.add('status-tag', `status-tag-${this.type}`);
    return tag;
  }
}

// Example usage:
// const pendingTag = new StatusTag('Pending', 'pending');
// document.body.appendChild(pendingTag.render());
