var selector
var n

function getFirstSelector(selector){

return document.querySelector(selector)

}

function nestedTarget(){

return document.querySelector('#nested .target')
}

function increaseRankBy(n){

var mac = document.querySelector('.ranked-lists')
mac+=n
parseInt(mac,10)
return mac

}
function deepestChild(){

return document.querySelectorAll('div #grand-node')
  
}