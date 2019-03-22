
class Simulator{
    constructor(){
        let x = 10;
        let y = 10;
        let z = 10;
        let rootX = 5;
        let rootY = 5;
        let rootZ = 5;
        this.steps = 100000;
        this.universe = new UniverseGenerator(x, y, z, rootX, rootY, rootZ, particles);
    }

    simulate(){
        for(let i = 0; i < this.steps; i++) {
            this.simulateOneStep();
        }
        this.logResult();
    }  

    simulateOneStep(){
        for(let cell of this.universe){
            cell.distributeShares();
        }
        for(let cell of this.universe){
            cell.addNewShareToShare();
        }
    }

    logResult(){
        let particles = 0;
        for(let cell of this.universe){
            particles += cell.share;
            console.log(cell);
        }
        console.log(particles);
    }
}
