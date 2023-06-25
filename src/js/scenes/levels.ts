import { Engine, Scene, SceneActivationContext } from 'excalibur'
import { BgDaytime } from '../background'
import { BgNighttime } from '../background'


export class DayLevel extends Scene {
    engine: Engine
    bgDayTime: BgDaytime

    onInitialize() {
        this.bgDayTime = new BgDaytime(this.engine, 0, 0, this.engine.canvasWidth, this.engine.canvasHeight)
    }

    onActivate() {
        //code to run when the day level becomes active
        console.log('It is day time')
    }
}


export class NightLevel extends Scene{
    engine: Engine
    bgNighttime: BgNighttime

    onInitialize(engine) {
        this.bgNighttime = new BgNighttime(this.engine, 0, 0, this.engine.canvasWidth, this.engine.canvasHeight)
    }

    onActivate() {
        console.log('it is night time')
    }
}