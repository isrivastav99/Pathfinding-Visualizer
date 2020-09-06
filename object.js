function Spot(i,j){
    this.i = i;
    this.j = j;
    this.f = 0;
    this.g = 0;
    this.h = 0;
    this.neighbours = [];
    this.parent = undefined;
    this.wall = false;


    if(random(1) < 0.3){
        this.wall = true;
    }

    this.show = function(nodeColor){
        fill(nodeColor);
        if(this.wall){
            fill(0);
        }

        noStroke();
        rect(this.i*w, this.j*h, w-1,h-1);
    }

    this.addNeighbours = function(grid){
        var ti = this.i;
        var tj = this.j;

        for(var k = 0;k<3;k++){
            for(var l = 0;l<3;l++){
                if(k === 0 && l === 0)
                    continue;
                var tx = ti + mx[k];
                var ty = tj + mx[l];
                if(tx <= cols-1 && tx>=0 && ty <= rows-1 && ty>=0){
                    this.neighbours.push(grid[tx][ty]);
                }
            }
        }
    }
}