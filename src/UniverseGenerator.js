import {Cell} from './Cell';

export class UniverseGenerator {
    constructor(universeShape, rootX, rootY, rootZ) {
        this.universeShape = universeShape;
        this.x = universeShape.getX();
        this.y = universeShape.getY();
        this.z = universeShape.getZ();
        this.universe = this.createUniverseWithCells();
        this.universe[rootX][rootY][rootZ].share = 1;
        this.addNeighbours(this.universe);
    }

    getUniverse() {
        return this.getUniverseAsOneDimensionalArray(this.universe);
    }

    getUniverseAsOneDimensionalArray(universe) {
        let a = [];
        for (let i = 0; i < this.x; i++) {
            for (let j = 0; j < this.y; j++) {
                for (let k = 0; k < this.z; k++) {
                    if(universe[i][j][k] != null) {
                        a.push(universe[i][j][k]);
                    }
                }
            }
        }
        return a;
    }

    createUniverseWithCells() {
        let universe = [];
        for (let i = 0; i < this.x; i++) {
            universe[i] = [];
            for (let j = 0; j < this.y; j++) {
                universe[i][j] = [];
                for (let k = 0; k < this.z; k++) {
                    if (this.universeShape.matrix[i][j][k] === 1){
                        universe[i][j][k] = new Cell(i, j, k);
                    }
                    else {
                        universe[i][j][k] = null;
                    }

                }
            }
        }
        return universe;
    }

    addNeighbours(universe) {
        for (let i = 0; i < this.x; i++) {
            for (let j = 0; j < this.y; j++) {
                for (let k = 0; k < this.z; k++) {
                    if(universe[i][j][k] != null) {
                        let neighbours = this.findNeighbours(i, j, k, universe);
                        universe[i][j][k].neighbours = neighbours;
                    }
                }
            }
        }
    }

    findNeighbours(x, y, z, universe) {
        let neighbours = [];
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                for (let k = -1; k <= 1; k++) {
                    if ((x + i) < this.x && (x + i) >= 0 && (y + j) < this.y &&
                        (y + j) >= 0 &&
                        (z + k) < this.z && (z + k) >= 0) {
                        if(universe[x + i][y + j][z + k] != null) {
                            neighbours.push(universe[x + i][y + j][z + k]);
                        }
                    }
                }
            }
        }
        return neighbours;
    }
}