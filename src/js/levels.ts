import { Engine, Scene, Color } from 'excalibur'
import { BgDaytime } from './background'
import { BgNighttime } from './background'

export class LevelDay extends Scene {

    engine:Engine 

    onInitialize(engine){
        this.engine = new BgDaytime(this.engine, 0, 0, this.engine.canvasWidth, this.engine.canvasHeight)
    }
}

export class LevelNight extends Scene {
    bgNighttime: BgNighttime

    onInitialize(_engine: Engine): void{
        this.bgNighttime = new BgNighttime(this.engine, 0, 0, this.engine.canvasWidth, this.engine.canvasHeight)
    }
}

