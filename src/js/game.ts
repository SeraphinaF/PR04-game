// import '../css/style.css'
import { Actor, Engine, Vector, Color, Input } from "excalibur"
import { ObstacleManager } from './obstacles'
import { Bird } from './bird'

export class Game {
    engine: Engine
    obstacle_manager: ObstacleManager
    bird: Bird

    constructor() {
        this.engine = new Engine({ width: 500, height: 500 });
        this.engine.start().then(() => { this.gameloop() });
        this.obstacle_manager = new ObstacleManager(this.engine);
        this.bird = new Bird(this.engine, 150, 460, 50, 50, Color.Green);
    }

    startGame() {
        const background = new Actor({
            width:innerWidth,
            height:innerHeight,
            
        })
        const ground = new Actor({
            x: 250,
            y: 490,
            width: 500,
            height: 20,
            color: Color.Green
        })
        this.engine.add(ground);
    }
 
    keyPress(){
       
    }

    // check_keypress(): Boolean {
    //     if (this.engine.input.keyboard.wasPressed(Input.Keys.Space)) {
    //         console.log('jump')
    //         return true;
    //     }
    //     return false
    // }


    gameloop() {
        this.startGame();
        this.keyPress()
            // if (this.check_keypress()) {
            //     this.bird.jump()
            }
        }


new Game()
