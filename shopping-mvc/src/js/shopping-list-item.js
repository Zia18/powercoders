class ShoppingListItem {
  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
  }

  toListItem() {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const spanText = document.createTextNode(this.name);
    span.appendChild(spanText);
    li.appendChild(span);

    if (this.quantity !== '') {
      li.appendChild(document.createTextNode(' '));
      const quantityText = document.createElement('span');
      quantityText.className = 'quantityText';
      quantityText.textContent = '(' + this.quantity + ')';
      li.appendChild(quantityText);
    }

    const icon = document.createElement('i');
    icon.className = 'fas fa-trash';
    const deleteButton = document.createElement('button');
    deleteButton.appendChild(icon);
    li.appendChild(deleteButton);

    return li;
  }
}