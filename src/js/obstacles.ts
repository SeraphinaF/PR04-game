import { Actor, Engine, Vector, Label, Font, Trigger } from "excalibur"
import { Resources } from "./resources"
import { Bird } from './bird'

export class ObstacleManager {
    obstacles: Array<Actor>
    birdPos: number
    score: number
    engine: Engine
    bird: Bird
    tree: Tree
    scoreTrigger: number
    scoreLabel: Label

    constructor(engine: Engine, bird: Bird, bird_x: number) {
        this.birdPos = bird_x
        this.obstacles = []
        this.score = 0
        this.engine = engine
        this.bird = bird
        this.scoreTrigger = this.scoreTrigger
        
        const distance_between = 350
        for (let i = 0; i < 4; i++) {
            let tree = new Tree(
                400 + distance_between * i,
                470,
                20,
                200,
            )
            

            tree.graphics.use(Resources.Obstacle.toSprite())
            tree.vel = new Vector(-130, 0)
            engine.add(tree)
            this.obstacles.push(tree)

            let scoreTrigger = new Trigger({
                pos: new Vector(150, 400),
                width: 20,
                height: 100,
                action: () => {
                    this.score++
                    console.log(this.score)
                    console.log('ik ben zoo getriggered')
                    this.showScore()
                    if (this.score % 2 === 0 && this.score > 0 ){
                        // tree.vel.x = -150
                        console.log("added speed!")
                    }
                }
            })


            scoreTrigger.anchor = new Vector(0, 0);
            scoreTrigger.target = tree;

            engine.add(scoreTrigger)
        }
    }

    showScore() {
        if (this.scoreLabel) {
            this.scoreLabel.text = `Score: ${this.score}`;
        } else {
            this.scoreLabel = new Label({
                text: `Score: ${this.score}`,
                pos: new Vector(60, 100),
                font: new Font({
                    family: 'impact',
                    size: 50
                })
            });
            this.engine.currentScene.add(this.scoreLabel);
        }
    }

    // addSpeed(){
    //     if (this.score % 5 === 0 && this.score > 0 ){
    //         this.tree.vel.x = -150
    //         console.log("added speed!")
    //     }
    // }

    test() {
        console.log('hoi')
    }

    getObstacles(): Array<Actor> {
        return this.obstacles
    }

    update() {

    }
}

export class Tree extends Actor {
    constructor(x: number, y: number, width: number, height: number) {
        super({ x, y, width, height })
    }

    onPostUpdate(_engine: Engine, _delta: number): void {
        if (this.pos.x < -30){
            this.pos.x = 1400
        }
    }
}
