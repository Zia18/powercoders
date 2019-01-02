
document.addEventListener('DOMContentLoaded', function (event) {
    document.getElementById('add-para').addEventListener('click', function (event) {
        let elP = document.createElement('p');
        let pContent = document.createTextNode('new-para');
        elP.appendChild(pContent);
        let elBody = document.getElementById('body');
        elBody.append(elP);
    });
});

