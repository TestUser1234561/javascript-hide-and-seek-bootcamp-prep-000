function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelectorAll('div.target')[0]
}

function deepestChild() {
  let list = document.getElementById("grand-node").querySelectorAll('div');
  let last = list[list.length - 1]
  return last;
}

function increaseRankBy(n) {
  let list = document.getElementById("app").querySelectorAll('ul.ranked-list');
  for(let ele in list) {
    let newList = list[ele].children
    console.log(newList);
    for(let l2 in newList) {
      newList[l2].innerHTML = parseInt(newList[l2].innerHTML) + n
    }
  }
}
