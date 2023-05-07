import '../css/style.css'
import { Actor, Engine, Vector, Color } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import Obstacles from './obstacles'


export class Game extends Engine {

    constructor() {
        super({ width: 500, height: 500 })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        const bird = new Actor({
            x: 150,
            y: 460,
            width: 50,
            height: 50,
            color: Color.Green
        })
        bird.vel = new Vector(0, 0)
        this.add(bird)

        const ground = new Actor({
            x: 250,
            y: 490,
            width: 500,
            height: 20,
            color: Color.Green
        })
        this.add(ground)

        const obstacles = new Obstacles()
        obstacles.getObstacles().forEach(obstacle => this.add(obstacle))
    }

    collision() {

    }
}

new Game()
