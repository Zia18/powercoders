document.addEventListener('DOMContentLoaded', function (event) {
  const inputBox = document.getElementById('item');
  const shoppingList = document.querySelector('ul');
  const button = document.querySelector('button');

  document.querySelector('button').addEventListener('click', function (event) {
    if (inputBox.value.trim() !== '') {
      button.disabled = true;
      shoppingList.appendChild(createNewListItem(inputBox.value.trim()));
      inputBox.value = '';

    }
    inputBox.focus();
  });

  inputBox.addEventListener('keyup', function (event) {
    if (inputBox.value.trim() !== '') {
      button.disabled = false;
      if (event.key === 'Enter') {
        shoppingList.appendChild(createNewListItem(inputBox.value.trim()));
        inputBox.value = '';
      }
    }
    if (inputBox.value.trim() === '') {
      button.disabled = true;
    }
  });
  button.disabled = true;
  inputBox.focus();

});

function createNewListItem(itemText) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const spanText = document.createTextNode(itemText);
  span.appendChild(spanText);
  li.appendChild(span);

  const button = document.createElement('button');
  document.getElementById('item').focus();
  const text = document.createTextNode('delete');
  button.addEventListener('click', function (event) {
    li.remove();
    document.getElementById('item').focus();
  });

  button.appendChild(text);
  li.appendChild(button);
  return li;
}