import { Actor, Engine, Vector, Color } from "excalibur"

class ObstacleManager {
    obstacle_list : Array<Actor>

    constructor(engine: Engine) {
        this.obstacle_list = []
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
            this.obstacle_list.push(obstacle)
        }
    }

    getObstacles() {
        return this.obstacle_list
    }
}

export default ObstacleManager
