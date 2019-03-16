
class Cell{
    constructor(x, y, z){
        this.particles = 0;
        this.newParticles = 0;
        this.x = x;
        this.y = y;
        this.z = z;
        this.neighbours = undefined;

    }

    receiveNewParticle(){
        this.newParticles++;
    }

    addNewParticlesToParticleCount(){
        this.particles = this.newParticles;
        this.newParticles = 0;
    }

    distributeParticles(){
        let numberOfNeighbours = this.neighbours.length;
        let x = this.particles;
        for(let i = 0; i < x; i++){
            this.neighbours[Math.floor(Math.random()*numberOfNeighbours)].receiveNewParticle()
            this.particles--;
        }
    }
}