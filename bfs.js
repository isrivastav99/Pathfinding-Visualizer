function BFS(){
    var current = searchBFS();
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
                openSet.push(neighbour);
                neighbour.parent = current;
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

function printpaths(current){
    for(var i = 0;i<closedSet.length;i++){
        closedSet[i].show(color(255, 0,0));
    }
    for(var i = 0;i<openSet.length;i++){
        openSet[i].show(color(0,255,0));
    }

    path = [];
    var temp = current;
    path.push(temp);
    while(temp.parent){
        path.push(temp.parent);
        temp = temp.parent;
    }


    for(var i = 0;i<path.length;i++){
        path[i].show(color(0,0,255));
    }
}