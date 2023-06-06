// import '../css/style.css'
import { Actor, Engine, Vector, Color, Input } from "excalibur"
import { Resources, ResourceLoader } from "./resources"
// import { BgDaytime } from "./background"
import { ObstacleManager } from './obstacles'
import { Bird } from './bird'
import { Powerup, PowerupManager } from './powerup'


export class Game {
    engine: Engine
    // bgDaytime: BgDaytime
    obstacle_manager: ObstacleManager
    powerup_manager: PowerupManager
    bird: Bird
   
    constructor() {
        const groundpos = 397
        this.engine = new Engine({ width: innerWidth, height: innerHeight });
        this.engine.start(ResourceLoader).then(() => { this.gameloop() });
        
        // this.background = new Background(this.engine, 50,50, 200, 200, Color.Green)
        this.obstacle_manager = new ObstacleManager(this.engine, this.bird, 150);        
        this.powerup_manager = new PowerupManager(this.engine, this.bird)
        this.bird = new Bird(this.engine, this.obstacle_manager, 150, groundpos, 200, 550, Color.Green );
        this.engine.showDebug(true)   
    }

    everythingLoaded(){
        this.engine.add('bgDaytime', new BgDaytime())
    }

    startGame() {
        const background = new Actor({
            width:innerWidth,
            height:innerHeight,   
        })
    }

    updateGame(){
    }

    gameloop() {
        this.startGame();
        }
    }
    
new Game()
