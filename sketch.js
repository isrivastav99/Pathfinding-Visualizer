var cols = 100;
var rows = 100;
var grid = new Array(rows);
var w,h;
var start;
var end;

var openSet = [];
var closedSet = [];


var path;
var mx = [-1,0,1];


let sel;

function setup(){
    let canv = createCanvas(670, 670);
    canv.position(350,0);

    sel = createSelect();
    sel.position(10, 10);
    sel.option('A*');
    sel.option('BFS');
    sel.option('DFS');
    //sel.changed(astar);
    w = width/cols;
    h = height/rows;

    for(var i = 0;i<cols;i++)
        grid[i] = new Array(cols);
    
    for(var i = 0;i<rows;i++){
        for(var j = 0;j<cols;j++){
            grid[i][j] = new Spot(i,j);
        }
    }

    for(var i = 0;i<rows;i++){
        for(var j = 0;j<cols;j++){
            grid[i][j].addNeighbours(grid);
        }
    }

    start = grid[0][0];
    end  = grid[cols -1][rows-1];
    start.wall = false;
    end.wall = false;
    openSet.push(start);

}

function draw(){

    
    background(0);
    for(var i = 0;i<cols;i++){
        for(var j = 0;j<rows;j++){
            grid[i][j].show(color(255));
        }
    }
    if(sel.value() == 'A*')
        astar();
    else if(sel.value() == 'BFS'){
        //implement BFS
    }
    else{
        //implement DFS
    }
    
}