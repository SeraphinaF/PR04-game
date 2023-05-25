// import '../css/style.css'
import { Actor, Engine, Vector, Color, Input } from "excalibur"
import { Resources, ResourceLoader } from "./resources"
import { Background } from "./background"
import { ObstacleManager } from './obstacles'
import { Bird } from './bird'

export class Game {
    engine: Engine
    background: Background
    obstacle_manager: ObstacleManager
    bird: Bird

    constructor() {
        const groundpos = 467
        this.engine = new Engine({ width: 500, height: 500 });
        this.engine.start().then(() => { this.gameloop() });
        this.background = new Background(this.engine, innerWidth, innerHeight)
        this.obstacle_manager = new ObstacleManager(this.engine, 150);
        this.bird = new Bird(this.engine, 150, groundpos, 50, 50, Color.Green);
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
