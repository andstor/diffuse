
class Cell{
    constructor(x, y, z){
        this.particles = 0;
        this.x = x;
        this.y = y;
        this.z = z;
        this.neighbours = undefined;
        this.found = false;

    }

    addParticle(){
        this.particles++;
    }

    removeParticle(amount){
        this.particles--;
    }

    setParticles(particles){
        this.particles = particles;
    }

    getParticles(){
        return this.particles;
    }

    setFound(found){
        this.found = found;
    }

    isFound(){
        return this.found;
    }

    setNeighbours(neighbours){
        this.neighbours = neighbours;
    }

    getNeighbours(){
        return this.neighbours;
    }

    distributeParticles(){
        let numberOfNeighbours = this.neighbours.length;
        let x = this.particles;
        for(let i = 0; i < x; i++){
            this.neighbours[Math.floor(Math.random()*numberOfNeighbours)].addParticle()
            this.removeParticle();
        }
    }
}