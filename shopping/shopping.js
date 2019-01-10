document.addEventListener('DOMContentLoaded', function (event) {
  document.querySelector('button').addEventListener('click', function (event) {
    let inputBox = document.getElementById('item');
    let li = createNewListItem(inputBox.value);
    document.querySelector('ul').appendChild(li);
    inputBox.value = '';
  });
});

document.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    let inputBox = document.getElementById('item');
    let li = createNewListItem(inputBox.value);
    document.querySelector('ul').appendChild(li);
    inputBox.value = '';
  }
});

function createNewListItem(itemText) {
  console.log(itemText);
  let li = document.createElement('li');
  let span = document.createElement('span');
  let spanText = document.createTextNode(itemText);
  span.appendChild(spanText);
  li.appendChild(span);

  let button = document.createElement('button');
  let text = document.createTextNode('delete');
  button.addEventListener('click', function (event) {
    li.remove();
  });

  button.appendChild(text);
  li.appendChild(button);
  return li;
}