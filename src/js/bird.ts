import { Actor, Engine, Vector, Color, Input } from "excalibur" 

export class Bird extends Actor {


    constructor(engine: Engine, x: number, y: number, width: number, height: number, color: Color) {
        super({ x, y, width, height, color })
        
        engine.add(this)
    }

    onPreUpdate(engine) {
        if (engine.input.keyboard.isHeld(Input.Keys.Space)) {
          this.pos.y -= 15 
        
        }else{
            this.pos.y += 2        
            if (this.pos.y > 460){
                this.pos.y = 460// prevent bird from falling trough the ground
            }
        }
    }
}

