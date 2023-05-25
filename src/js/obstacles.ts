import { Actor, Engine, Vector, Color, Trigger } from "excalibur"

export class ObstacleManager {
    obstacles: Array<Actor>
    birdPos: number
    score: number
    constructor(engine: Engine, bird_x:number) {
        this.birdPos = bird_x
        let obstacleCount = 0
        this.obstacles = []
        this.score = 0
        const distance_between = 350
        for (let i = 0; i < 50; i++) {
            let obstacle = new Actor({
                x: 400 + distance_between * i,
                y: 490,
                width: 20,
                height: Math.random() * (300 - 30) + 30,
                color: Color.Green
            })
            const triggerScore = new Trigger({
            width:bird_x,
            height: obstacle.pos.y,
            pos: obstacle.pos,  
             action: () =>{
                console.log("Triggerrrrrreddd")
             }
            })

            obstacle.vel = new Vector(-130, 0)
            engine.add(obstacle)
            this.obstacles.push(obstacle)
        }
    }

    score(){
       let score = 0
        this.obstacles.forEach(
            obstacle => {if (obstacle.pos.x < this.birdPos ){
                score++
            }}
        )
        console.log(score)
    }

    getObstacles(): Array<Actor> {
        return this.obstacles
    }

    update() {

    }
}

