import { Actor, Engine, Vector, Color, Input, Label, Font } from "excalibur"
import { Game } from './game'
// import { Resources } from "./resources"

export class Bird extends Actor {
    groundPos: number
    engine: Engine

    constructor(engine: Engine, x: number, y: number, width: number, height: number, color: Color) {
        super({ x, y, width, height, color })
        this.groundPos = y
        this.engine = engine
        engine.add(this)
    }

    onInitialize() {
        // this.graphics.use(Resources.Bird.toSprite())
        this.on('collisionstart', (event) => this.gameOver())
    }

    onPreUpdate() {
        const gravity = 0.3; // Adjust the gravity strength as needed
        const jumpVelocity = -125.5;

        if (this.engine.input.keyboard.wasPressed(Input.Keys.Space) && this.pos.y === this.groundPos) {
            this.vel.y = jumpVelocity; // Set the vertical velocity when the spacebar is pressed
        }

        else if (this.pos.y < 300) {
            this.vel.y = - jumpVelocity
        }

        else if (this.pos.y > this.groundPos) {
            this.pos.y = this.groundPos
            this.vel.y = 0
        }
    }

    gameOver() {
        let GameOverTxt = new Label({
            text: 'Game over bitches!',
            pos: new Vector(60, 100),
            font: new Font({
                family: 'impact',
                size: 50
            })
        });
        this.engine.currentScene.add(GameOverTxt)
        console.log('GAME OVER!')
        this.kill()
    }
}    
