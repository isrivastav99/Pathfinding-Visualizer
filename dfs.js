function DFS(){
    var current = searchDFS();
    console.log(current.i + ',' + current.j);
    printpaths(current);
}
var c;

function removeFromSet(arr, current){
    for(var i = arr.length-1;i>=0;i--){
        if(arr[i] === current)
            arr.splice(i, 1);
    }
}
function travDFS(current){
    /*removeFromSet(openSet, current);
    closedSet.push(current);
    //printpaths(current);
    c = current;
    if(current === end){
        noLoop();
        console.log("done");
    }
    var neighbours = current.neighbours;
    console.log(current.i + ',' + current.j);
        for(var i = 0;i<neighbours.length;i++){
            var neighbour = neighbours[i];
            if(!closedSet.includes(neighbour) && !neighbour.wall){
                if(!openSet.includes(neighbour)){
                    openSet.push(neighbour);
                    neighbour.parent = current;
                    travDFS(neighbour);
                }
            }
        }*/

    
}
function searchDFS(){
    if(openSet.length>0){ 
        //var lowestIndex = 0;
        var current = openSet.pop();
        if(current === end){
            noLoop();
            console.log("done");
        }
        closedSet.push(current);

        var neighbours = current.neighbours;

        for(var i = 0;i<neighbours.length;i++){
            var neighbour = neighbours[i];
            if(!closedSet.includes(neighbour) && !neighbour.wall){
                if(!openSet.includes(neighbour)){
                    openSet.push(neighbour);
                    neighbour.parent = current;
                }
            }
        }
    }
    else{
        console.log("no solution");
        noLoop();
        return;
    }
    return current;
}