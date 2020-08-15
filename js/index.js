// const links = ...
const links = document.querySelectorAll('div#header a');
// const container = document...
const container = document.querySelector('.container');
// let url = ...
let url = 'partials/home.html';

// CREATE THE FUNCTION THAT WILL LOAD THE REQUESTED PARTIAL
function loadContent(url){
    fetch(url)
    .then(function (rsp) {
    return rsp.text();
  }).then(function (data) {
    container.innerHTML = data;
  });
}
// CALL loadContent WITH THE CURRENT VALUE OF url 
loadContent(url);

// CREATE THE FUNCTION THAT WILL SELECT A PARTIAL

function selectContent(e){
    e.preventDefault();
// CALL THE FUNCTION loadContent PROVIDING THE href
    let href = e.target.href;
    loadContent(href);
}

// REGISTER links FOR CLICK EVENT WITH selectContent AS EVENT HANDLER!
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", selectContent);
}