class Card {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }

  render() {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardTitle = document.createElement('h3');
    cardTitle.textContent = this.title;
    card.appendChild(cardTitle);

    const cardContent = document.createElement('div');
    cardContent.innerHTML = this.content;
    card.appendChild(cardContent);

    return card;
  }
}

// Example usage:
// const myCard = new Card('My Card', '<p>This is the content of my card.</p>');
// document.body.appendChild(myCard.render());
