
function domContentLoaded() {
  new Controller();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () {
    domContentLoaded();
  });
} else {
  domContentLoaded();
}
