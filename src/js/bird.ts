import { Actor, Engine, Vector, Color, Input } from "excalibur"
import { KeyEvent } from "excalibur/build/dist/Input/Keyboard";


export class Bird extends Actor {

    constructor( engine: Engine,x: number, y: number, width: number, height: number,color: Color) {
        super({ x, y, width, height, color })
        this.vel = new Vector(0, 0)
        engine.add(this)
        this.jump()
    }

    jump(){
        if (this.engine.input.keyboard.isHeld(Input.Keys.W)){
            console.log('jumping')
        }
    }
}
