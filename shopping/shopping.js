function domContentLoaded() {
  const inputBox = document.getElementById('item');
  const quantityBox = document.getElementById('quantity');
  const shoppingList = document.querySelector('ul');
  const addItemButton = document.querySelector('button');
  const deleteAll = document.getElementById('clear');

  deleteAll.addEventListener('click', function (event) {
    const listItem = document.querySelectorAll('li');
    listItem.forEach(function (el) {
      el.remove();
      inputBox.focus();
      quantityBox.focus();
      deleteAll.disabled = false;
    });
    deleteAll.disabled = true;
  });

  addItemButton.addEventListener('click', function (event) {
    const trimmedValue = inputBox.value.trim();
    const quantityEl = quantityBox.value.trim();

    const item = {
      name: trimmedValue,
      quantity: quantityEl
    };
    shoppingList.appendChild(createNewListItem(item));

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

    const item = {
      name: trimmedValue,
      quantity: quantityEl
    };

    shoppingList.appendChild(createNewListItem(item));

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

    const item = {
      name: trimmedValue,
      quantity: quantityEl
    };

    shoppingList.appendChild(createNewListItem(item));

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
  document.addEventListener('DOMContentLoaded', function (event) {
    domContentLoaded();
  });
} else {
  domContentLoaded();
}

/**
 * Creates and returns an 'li' element for inclusion in the shopping list.
 *
 * @param {{name: string,quantity: string}} item Item to append to the list
 * @return {HTMLElement} li element
 */
function createNewListItem(item) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const spanText = document.createTextNode(item.name);
  span.appendChild(spanText);
  li.appendChild(span);

  if (item.quantity !== '') {
    li.appendChild(document.createTextNode(' '));
    const quantityText = document.createElement('span');
    quantityText.className = 'quantityText';
    quantityText.textContent = '(' + item.quantity + ')';
    li.appendChild(quantityText);
  }

  const icon = document.createElement('i');
  li.appendChild(icon).className = 'fas fa-trash';
  document.getElementById('item').focus();
  icon.addEventListener('click', function (event) {
    li.remove();
    document.getElementById('clear').disabled =
        document.querySelectorAll('li').length === 0;
    document.getElementById('item').focus();
  });
  return li;
}
