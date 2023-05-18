import { Actor, Engine, Vector, Color, Input } from "excalibur"
import {Game} from './game'
// import { Resources } from "./resources"

export class Bird extends Actor {
 groundPos: number

    constructor(engine: Engine, x: number, y: number, width: number, height: number, color:Color) {
        super({ x, y, width, height, color })
        this.groundPos = y
        engine.add(this)
    }

    onInitialize(engine) {
        // this.graphics.use(Resources.Bird.toSprite())
        this.on('collisionstart', (event) => this.gameOver())
    }

    onPreUpdate(engine) {
        const gravity = 0.3 ; // Adjust the gravity strength as needed
        const jumpVelocity = -125.5;
       
        if (engine.input.keyboard.wasPressed(Input.Keys.Space) && this.pos.y === this.groundPos) {
            this.vel.y = jumpVelocity; // Set the vertical velocity when the spacebar is pressed
        }

        else if (this.pos.y < 300){
            this.vel.y = - jumpVelocity
        }

        else if (this.pos.y > this.groundPos){
            this.pos.y = this.groundPos
            this.vel.y = 0
        }
        // // Apply gravity to the bird
        // this.vel.y += gravity;

        // // Update the bird's position based on velocity
        // this.pos.y += this.vel.y;
       
        // Limit the bird's vertical position to prevent it from going below the ground or flying too high
        // const groundLevel = 460; 
        // const ceilingLevel = 0; // Adjust if you want to limit the upward flight
        // if (this.pos.y > groundLevel) {
        //     this.pos.y = groundLevel;
        // } else if (this.pos.y < ceilingLevel) {
        //     this.pos.y = ceilingLevel;
        // }
    }

    gameOver() {
        // const game = new Game;
        // game.gameloop()
        console.log('GAME OVER!')
    }
}    
