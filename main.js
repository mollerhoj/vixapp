function html(string) { return string };

function initialize() {
  loadPage1()
}

function loadPage1() {
  document.body.innerHTML = html(`
    <h1>Page1<h1>
    <a href="#" onclick="loadPage2()">page2</a>
  `)
}

function loadPage2() {
  document.body.innerHTML = html(`
    <h1>Page2<h1>
    <a href="#" onclick="loadPage1()">page1</a>
  `)
}

window.addEventListener('load', function () {
  initialize()
})
