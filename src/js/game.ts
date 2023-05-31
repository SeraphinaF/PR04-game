// import '../css/style.css'
import { Actor, Engine, Vector, Color, Input } from "excalibur"
import { Resources, ResourceLoader } from "./resources"
import { Background } from "./background"
import { ObstacleManager } from './obstacles'
import { Bird } from './bird'
import { Powerup } from './powerup'

export class Game {
    engine: Engine
    background: Background
    obstacle_manager: ObstacleManager
    bird: Bird
    powerup: Powerup

    constructor() {
        const groundpos = 397
        this.engine = new Engine({ width: innerWidth, height: innerHeight });
        this.engine.start(ResourceLoader).then(() => { this.gameloop() });
        this.background = new Background(this.engine, 50,50, 200, 200, Color.Green)
        this.obstacle_manager = new ObstacleManager(this.engine, 150,);        
        this.powerup = new Powerup(this.engine, this.bird)
        this.bird = new Bird(this.engine, this.powerup, 150, groundpos, 200, 150, Color.Green );
        this.engine.showDebug(true)
    }

    startGame() {
        const background = new Actor({
            width:innerWidth,
            height:innerHeight,   
        })
        // const ground = new Actor({
        //     x: 250,
        //     y: 490,
        //     width: 500,
        //     height: 20,
        //     color: Color.Green
        // })
        // this.engine.add(ground);
    }


    updateGame(){
        
    }

    gameloop() {
        this.startGame();
        }
    }
    
new Game()
