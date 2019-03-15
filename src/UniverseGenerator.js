class UniverseGenerator{
    constructor(x,y,z, rootX, rootY, rootZ, particles) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.rootX = rootX;
        this.rootY = rootY;
        this.rootZ = rootZ;
        this.particles = particles;
        let universe = this.createUniverseWithCells(x, y, z);
        return this.getUniverseAsAdjacencyMatrix(universe);
    }

    createUniverseWithCells(){
        let universe = [];
        for(let i = 0; i < this.x; i++){
            universe[i] = [];
            for(let j = 0; j < this.y; j++){
                universe[i][j] = [];
                for(let k = 0; k < this.z; k++){
                    universe[i][j][k] = new Cell(i,j,k);
                }
            }
        }
        return universe;
    }

    getUniverseAsAdjacencyMatrix(universe){
        let adjacencyMap = new Map();
        let i = 0;
        for(let x = 0; x < this.x; x++){
            for(let y = 0; y < this.y; y++){
                for(let z = 0; z < this.z; z++){
                    let neighbours = this.findNeighbours(x,y,z, universe);
                    let cell = universe[x][y][z];
                    adjacencyMap.set(cell, neighbours);
                    cell.setNeighbours(neighbours)
                    i++;
                    if (x === this.rootX && y === this.rootY && z === this.rootZ){
                        cell.setParticles(this.particles);
                    }
                }
            }
        }
        return adjacencyMap;
    }

    findNeighbours(x, y, z, universe){
        let neighbours = [];
        let h = 0;
        for(let i = -1; i <= 1; i++){
            for(let j = -1; j <=1; j++){
                for(let k = -1; k <=1; k++){
                  if((x+i) < this.x && (x+i) >= 0 && (y+j)<this.y && (y+j) >= 0 &&
                        (z+k) < this.z && (z+k) >= 0){
                        neighbours[h] = universe[x + i][y + j][z + k];
                      universe[x + i][y + j][z + k].isFound();
                        h++;
                    }
                }
            }
        }
        return neighbours;
    }
}