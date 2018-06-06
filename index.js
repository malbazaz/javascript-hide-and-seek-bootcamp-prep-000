var selector


function getFirstSelector(selector){

return document.querySelector(selector)

}

function nestedTarget(){

return document.querySelector('#nested .target')
}

function increaseRankBy(n){

const mac = document.querySelector('.ranked-lists')
return mac+n
}
function deepestChild(){

return document.querySelectorAll('div #grand-node')
  
}