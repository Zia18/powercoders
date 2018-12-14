//Javascript code goes here
console.log('My code is running!');

function greet(name) {
  console.log('hello, ' + name);
 }

  function setClassTip(event) {
   let el = document.getElementById('mypara').className = 'tip';
 }

 function setClassWarning(event) {
  let el = document.getElementById('mypara').className = 'warning';
 }

 function clearClass(event) {
  let el = document.getElementById('mypara').className = '';
 }
