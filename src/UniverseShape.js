export class UniverseShape {

    constructor(matrix) {
        this.matrix = matrix;
        this.x = this.matrix.length;
        this.y = this.matrix[0].length;;
        this.z = this.matrix[0][0].length;
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

}
