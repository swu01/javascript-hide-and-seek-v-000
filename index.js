function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  //return document.getElementById("nested").querySelector(".target")
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  var list = document.querySelectorAll(".ranked-list li");
  for (var i = 0; i < list.length; i++) {
    list[i].innerHTML = Number(list[i].innerHTML) + n;
  }
}

function deepestChild() {
  return document.querySelector("#grand-node div div div div");
}