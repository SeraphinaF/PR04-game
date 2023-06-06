import { Actor, Engine, Vector, Color, GraphicsGroup} from "excalibur"
import { Resources } from "./resources"

export class BgDaytime extends Actor{

    engine: Engine
    constructor(engine:Engine, x:number, y:number, width: number, height: number, color: Color){
        super({x,y,width, height,color})  
        engine.add(this)
    }

    offset

    onInitialize() {
        const sunsetImage = Resources.Background.toSprite()
        this.offset = sunsetImage.width

        const group = new GraphicsGroup({
            members: [
                {
                    graphic: sunsetImage,
                    pos: new Vector(0,0)
                },
                {
                    graphic: sunsetImage,
                    pos:new Vector(sunsetImage.width, 0)
                }
            ]
        })

        this.graphics.anchor = new Vector(0,0)
        this.graphics.add(group)
        this.pos = new Vector(0,-400)
        this.vel = new Vector(-50,0)
    }

    onPostUpdate(engine, delta){
        if(this.pos.x < -this.offset){
            this.pos = new Vector(0,-400)
        }
    }
}