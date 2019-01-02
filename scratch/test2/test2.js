function tryagain() {
    let elUL = document.createElement('ul');
    let elLI1 = document.createElement('li');
    let text = document.createTextNode('item one');
    elLI1.appendChild(text);
    elUL.appendChild(elLI1);

    let elLI2 = document.createElement('li');
    let text1 = document.createTextNode('Item two ');
    elLI2.appendChild(text1);

    let elem = document.createElement('em');
    let elemText = document.createTextNode('emphasiesed ');
    elem.appendChild(elemText);
    elLI2.appendChild(elem);

    let eltext22 = document.createTextNode('created');
    elLI2.appendChild(eltext22);
    elUL.appendChild(elLI2);

    let elLI3 = document.createElement('li');
    let text2 = document.createTextNode('Item three');
    elLI3.appendChild(text2);
    elUL.appendChild(elLI3);

    let elBody = document.getElementById('body');
    elBody.appendChild(elUL);
}
document.addEventListener('DOMContentLoaded', function (event) {
    let p = document.getElementById('try-again');
    p.addEventListener('click', function (event) {
        tryagain();
    });
});