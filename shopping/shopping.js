document.addEventListener('DOMContentLoaded', function (event) {
  let inputBox = document.getElementById('item');
  let shoppingList = document.querySelector('ul');

  document.querySelector('button').addEventListener('click', function (event) {
    if (inputBox.value.trim() !== '') {
      shoppingList.appendChild(createNewListItem(inputBox.value.trim()));
      inputBox.value = '';
    }
    inputBox.focus();
  });

  inputBox.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      if (inputBox.value.trim() !== '') {
          shoppingList.appendChild(createNewListItem(inputBox.value.trim()));
          inputBox.value = '';
        }
      }
  });

  inputBox.focus();
});

function createNewListItem(itemText) {
  let li = document.createElement('li');
  let span = document.createElement('span');
  let spanText = document.createTextNode(itemText);
  span.appendChild(spanText);
  li.appendChild(span);

  let button = document.createElement('button');
  document.getElementById('item').focus();
  let text = document.createTextNode('delete');
  button.addEventListener('click', function (event) {
    li.remove();
    document.getElementById('item').focus();
  });

  button.appendChild(text);
  li.appendChild(button);
  return li;
}