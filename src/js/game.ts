import '../css/style.css'
import { Actor, Engine, Vector, Color } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import ObstacleManager from './obstacles'

export class Game
{
    engine: Engine
    constructor()
    {
        this.engine = new Engine({width: 500, height: 500})
        this.engine.start(ResourceLoader).then(() => this.startGame())

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
        this.engine.add(bird)

        const ground = new Actor({
            x: 250,
            y: 490,
            width: 500,
            height: 20,
            color: Color.Green
        })
        this.engine.add(ground)

        const obstacle_manager = new ObstacleManager(this.engine)

    }

    gameloop()
    {
        while(true)
        {}
    }
}

new Game()
