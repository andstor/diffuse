
class Simulator{
    constructor(){
        let x = 7;
        let y = 7;
        let z = 7;
        let rootX = 4;
        let rootY = 4;
        let rootZ = 4;
        this.steps = 10;
        let particles = 70;
        this.adjacencyMap = new UniverseGenerator(x, y, z, rootX, rootY, rootZ, particles);
    }

    simulate(){
        for(let i = 0; i < this.steps; i++) {
            this.simulateOneStep();
        }
        this.logResult();
    }  

    simulateOneStep(){
        let root = this.initCells();
        let Q = [root];
        while (Q.length > 0){
            let u = Q.shift();
            for(let v of this.adjacencyMap.get(u)){
                if(v.isFound() === false){
                    Q.push(v);
                }
            }
            u.distributeParticles();
            u.setFound(true);
        }
    }

    initCells(){
        let lastCell;
        for(let cell of this.adjacencyMap.keys()){
            cell.setFound(false);
            lastCell = cell;
        }
        return lastCell;
    }

    logResult(){
        let particles = 0;
        for(let cell of this.adjacencyMap.keys()){
            particles += cell.getParticles();
            console.log(cell);
        }
        console.log(particles);
    }
}
