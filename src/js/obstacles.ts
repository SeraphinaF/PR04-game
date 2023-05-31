import { Actor, Engine, Vector, Color, Trigger } from "excalibur"
import { Resources } from "./resources"

export class ObstacleManager {
    obstacles: Array<Actor>
    birdPos: number
    score: number
    constructor(engine: Engine, bird_x:number) {
        this.birdPos = bird_x
        this.obstacles = []
        this.score = 0
        const distance_between = 350
        for (let i = 0; i < 50; i++) {
            let obstacle = new Actor({
                x: 400 + distance_between * i,
                y: 470,
                width: 20,
                height: 200,
                color: Color.Green
            })
            obstacle.graphics.use(Resources.Obstacle.toSprite())
            obstacle.vel = new Vector(-130, 0)
            engine.add(obstacle)
            this.obstacles.push(obstacle)
        }
    }
    
    on(arg0: string, arg1: (event: any) => any) {
        throw new Error("Method not implemented.")
    }
    gameOver() {
        throw new Error("Method not implemented.")
    }

    getObstacles(): Array<Actor> {
        return this.obstacles
    }

    update() {

    }
}

