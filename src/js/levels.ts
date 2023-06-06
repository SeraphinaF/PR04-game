import { Engine, Scene, Color } from 'excalibur'
import { BgDaytime } from './background'

export class LevelDay extends Scene {
    bgDaytime: BgDaytime
    
    onInitialize(_engine: Engine): void {
        this.engine.backgroundColor = Color.Green 
    }
  
}

export class LevelNight extends Scene {
    engine: Engine

    onInitialize() {
        this.engine.backgroundColor = Color.Blue
    }
}

