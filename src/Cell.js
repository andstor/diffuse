export class Cell {
    constructor(x, y, z) {
        this.share = 0;
        this.newShare = 0;
        this.x = x;
        this.y = y;
        this.z = z;
        this.neighbours = undefined;

    }

    receiveShare(newShare) {
        this.newShare = newShare;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getZ() {
        return this.z;
    }

    addNewShareToShare() {
        this.share = this.newShare;
        this.newShare = 0;
    }

    distributeShares() {
        let numberOfNeighbours = this.neighbours.length;
        for (let i = 0; i < numberOfNeighbours; i++) {
            this.neighbours[i].receiveShare(this.share/numberOfNeighbours);
        }
        this.share = 0;
    }
}