function astar(){
    var current = searchAStar();
    printpaths(current);
}




function removeFromSet(arr, current){
    for(var i = arr.length-1;i>=0;i--){
        if(arr[i] === current)
            arr.splice(i, 1);
    }
}

function heuristic(a, b){
    //calculates the heuristic distance(Manhattan for N4 and euclidean for N8) for us
   // var d = abs(a.i -b.i) + abs(a.j -  b.j);
    var d= dist(a.i,a.j,b.i,b.j); 
   return d;
}


function searchAStar(){
    if(openSet.length>0){
        var lowestIndex = 0;
       
        for(var i = 0;i<openSet.length;i++){
            if(openSet[i].f < openSet[lowestIndex].f){
                lowestIndex = i;
            }
        }

        if(openSet[lowestIndex] === end){
            noLoop();
            console.log("done");
        }
        var current = openSet[lowestIndex];

        removeFromSet(openSet, current);
        closedSet.push(current);

        var neighbours = current.neighbours;

        for(var i = 0;i<neighbours.length;i++){
            var neighbour = neighbours[i];
            if(!closedSet.includes(neighbour) && !neighbour.wall){
                var tempGscore = current.g + 1;

                var newPath = true;
                if(openSet.includes(neighbour)){
                    if(tempGscore < neighbour.g){
                        neighbour.g = tempGscore;
                    }
                    else
                        newPath = false;
                }    
                else{
                    neighbour.g = tempGscore;
                    openSet.push(neighbour);
                }

                if(newPath){
                    neighbour.h = heuristic(neighbour, end);
                    neighbour.f = neighbour.g + neighbour.h;
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