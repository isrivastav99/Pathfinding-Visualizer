var cols = 40;
var rows = 40;
var grid = new Array(rows);
var w,h;
var start;
var end;

var openSet = [];
var closedSet = [];


var path;
var mx = [0,1,-1];


let sel;
let go;

function setup(){
    let canv = createCanvas(600, 600);
    canv.position(350,0);

    sel = createSelect();
    sel.position(10, 10);
    sel.option('A*');
    sel.option('BFS');
    sel.option('DFS');

    button = createButton('Go');
    button.position(10, 40);
    button.mousePressed(kp);
    //sel.changed(astar);
    w = width/cols;
    h = height/rows;
    newMaze();
    reset = createButton('New Maze');
    reset.position(10, 70);
    reset.mousePressed(newMaze);    
    
}
function newMaze(){
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

   // frameRate(1);

    for(var i = 0;i<cols;i++){
        for(var j = 0;j<rows;j++){
            grid[i][j].show(color(255));
        }
    }
}
function kp() {
   // if(keyCode === ENTER){
        openSet.length = 0;
        openSet.push(start);
        closedSet.length = 0;
        loop();
    //}
}

function draw(){
    background(0);
    for(var i = 0;i<cols;i++){
        for(var j = 0;j<rows;j++){
            grid[i][j].show(color(255));
        }
    }
    if(sel.value() == 'A*'){
        astar();
    }
    else if(sel.value() == 'BFS'){
            BFS();
    }
    else{
        DFS();
    }
    
}