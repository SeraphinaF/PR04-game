import { Actor, Engine, Vector, Color } from "excalibur"

export class ObstacleManager {
    obstacles : Array<Actor>

    constructor(engine: Engine) {
        this.obstacles = []
        const distance_between = 80
        for (let i = 0; i < 4; i++) {
            let obstacle = new Actor({
                x: 400 + distance_between * i,
                y: 490,
                width: 20,
                height: 500,
                color: Color.Green
            })
            obstacle.vel = new Vector(-10, 0)
            engine.add(obstacle)
            this.obstacles.push(obstacle)
        }
    }

    getObstacles() : Array<Actor>{
        return this.obstacles
    }

    update(){

    }
}

