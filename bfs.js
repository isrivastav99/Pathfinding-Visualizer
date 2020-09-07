function BFS(){
    var current = searchBFS();
    //console.log(current.i + ',' + current.j);
    printpaths(current);
}

function removeFromSet(arr, current){
    for(var i = arr.length-1;i>=0;i--){
        if(arr[i] === current)
            arr.splice(i, 1);
    }
}

function searchBFS(){
    if(openSet.length>0){ 
        var lowestIndex = 0;
        var current = openSet[lowestIndex];
        if(openSet[lowestIndex] === end){
            noLoop();
            console.log("done");
        }
        removeFromSet(openSet, current);
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

