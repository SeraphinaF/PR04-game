import { Actor, Engine, Vector, Color } from "excalibur"
import { Resources } from "./resources"

export class Background extends Actor{

    constructor(engine:Engine, width: number, height: number){
        super()
        const background = Resources.Background.toSprite()
        this.vel = new Vector(0,0)
        engine.add(this)
        
    }
}