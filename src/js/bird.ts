import { Actor, Engine, Vector, Color } from "excalibur"

export class Bird extends Actor {
    constructor(
        engine: Engine,
        x: number,
        y: number,
        width: number,
        height: number,
        color: Color) {
        super({ x, y, width, height, color })
        this.vel = new Vector(0, 0)
        engine.add(this)
    }

    jump(){
        console.log('jump')
    }
}
