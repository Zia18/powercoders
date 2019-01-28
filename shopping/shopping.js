document.addEventListener('DOMContentLoaded', function (event) {
  const inputBox = document.getElementById('item');
  const shoppingList = document.querySelector('ul');
  const addItemButton = document.querySelector('button');
  const deleteAll = document.getElementById('clear');

  deleteAll.addEventListener('click', function (event) {
    const listItem = document.querySelectorAll('li');
    listItem.forEach(function (el) {
      el.remove();
      inputBox.focus();
      deleteAll.disabled = false;
    });
    deleteAll.disabled = true;
  });

  addItemButton.addEventListener('click', function (event) {
    const trimmedValue = inputBox.value.trim();

    shoppingList.appendChild(createNewListItem(trimmedValue));
    inputBox.value = '';
    addItemButton.disabled = true;
    deleteAll.disabled = false;
    inputBox.focus();
  });

  inputBox.addEventListener('keyup', function (event) {
    const trimmedValue = inputBox.value.trim();
    addItemButton.disabled = inputBox.value.trim() === '';

    if (trimmedValue === '') {
      return;
    }

    if (event.key !== 'Enter') {
      return;
    }

    shoppingList.appendChild(createNewListItem(trimmedValue));
    inputBox.value = '';
    addItemButton.disabled = true;
    deleteAll.disabled = false;
  });

  addItemButton.disabled = true;
  inputBox.focus();
  deleteAll.disabled = true;
});

/**
 * Creates and returns an 'li' element for inclusion in the shopping list.
 *
 * @param {string} itemText Name of the item to add to the list
 * @return {HTMLElement} li element
 */

function createNewListItem(itemText) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const spanText = document.createTextNode(itemText);
  span.appendChild(spanText);
  li.appendChild(span);

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