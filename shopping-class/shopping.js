/**
 * Represents an item in the Shopping list.
 */
class ShoppingListItem {
  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
  }
  /**
   * @param name {string} Name
   * @param quantity {string} Quantity
   */
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
    li.appendChild(icon).className = 'fas fa-trash';
    document.getElementById('item').focus();
    icon.addEventListener('click', function () {
      li.remove();
      document.getElementById('clear').disabled =
          document.querySelectorAll('li').length === 0;
      document.getElementById('item').focus();
    });
    return li;
  }


}


function domContentLoaded() {
  const inputBox = document.getElementById('item');
  const quantityBox = document.getElementById('quantity');
  const shoppingList = document.querySelector('ul');
  const addItemButton = document.querySelector('button');
  const deleteAll = document.getElementById('clear');

  deleteAll.addEventListener('click', function () {
    const listItem = document.querySelectorAll('li');
    listItem.forEach(function (el) {
      el.remove();
      inputBox.focus();
      quantityBox.focus();
      deleteAll.disabled = false;
    });
    deleteAll.disabled = true;
  });

  addItemButton.addEventListener('click', function () {
    const trimmedValue = inputBox.value.trim();
    const quantityEl = quantityBox.value.trim();

    const item = new ShoppingListItem(trimmedValue, quantityEl);

    shoppingList.appendChild(item.toListItem());
    inputBox.value = '';
    quantityBox.value = '';
    addItemButton.disabled = true;
    deleteAll.disabled = false;
    inputBox.focus();
  });

  inputBox.addEventListener('keyup', function (event) {
    const trimmedValue = inputBox.value.trim();
    const quantityEl = quantityBox.value.trim();
    addItemButton.disabled = inputBox.value.trim() === '';

    if (trimmedValue === '') {
      return;
    }

    if (event.key !== 'Enter') {
      return;
    }

    const item = new ShoppingListItem(trimmedValue, quantityEl);

    shoppingList.appendChild(item.toListItem());

    inputBox.value = '';
    addItemButton.disabled = true;
    deleteAll.disabled = false;
    quantityBox.focus();
    quantityBox.value = '';
  });

  quantityBox.addEventListener('keyup', function (event) {
    const trimmedValue = inputBox.value.trim();
    const quantityEl = quantityBox.value.trim();
    addItemButton.disabled = inputBox.value.trim() === '';

    if (trimmedValue === '') {
      return;
    }

    if (event.key !== 'Enter') {
      return;
    }

    const item = new ShoppingListItem(trimmedValue, quantityEl);

    shoppingList.appendChild(item.toListItem());

    inputBox.value = '';
    addItemButton.disabled = true;
    deleteAll.disabled = false;
    quantityBox.focus();
    quantityBox.value = '';
  });


  addItemButton.disabled = true;
  inputBox.focus();
  deleteAll.disabled = true;
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () {
    domContentLoaded();
  });
} else {
  domContentLoaded();
}
