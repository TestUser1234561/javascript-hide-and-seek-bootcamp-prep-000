function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  document.getElementById('nested').querySelectorAll('div.target')
}
