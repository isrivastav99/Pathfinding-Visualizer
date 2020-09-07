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