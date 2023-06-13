import { Actor, Engine, Vector, Color, GraphicsGroup} from "excalibur"
import { Resources } from "./resources"

export class BgDaytime extends Actor{

    engine: Engine
    constructor(engine:Engine, x:number, y:number, width: number, height: number){
        super({x,y,width, height})  
        engine.add(this)
    }

    offset

    onInitialize() {
        const sunsetImage = Resources.BgDay.toSprite()
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

export class BgNighttime extends Actor{

    engine: Engine
    constructor(engine:Engine, x:number, y:number, width: number, height: number){
        super({x,y,width, height})  
        
        engine.add(this)
    }

    offset

    onInitialize() {
        const mountainImage = Resources.BgNight.toSprite()
        this.offset = mountainImage.width

        const group = new GraphicsGroup({
            members: [
                {
                    graphic: mountainImage,
                    pos: new Vector(0,0)
                },
                {
                    graphic: mountainImage,
                    pos:new Vector(mountainImage.width, 0)
                }
            ]
        })

        this.graphics.anchor = new Vector(0,0)
        this.graphics.add(group)
        this.scale = new Vector(1.3,1.3)
        this.pos = new Vector(0,10)
        this.vel = new Vector(-50,0)
    }

    onPostUpdate(engine, delta){
        if(this.pos.x < -this.offset){
            this.pos = new Vector(0,10)
        }
    }
}