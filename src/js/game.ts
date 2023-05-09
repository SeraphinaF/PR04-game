import '../css/style.css'
import { Actor, Engine, Vector, Color, Input } from "excalibur"
import { KeyEvent } from "excalibur/build/dist/Input/Keyboard";
import { Resources, ResourceLoader } from './resources.js'
import { ObstacleManager } from './obstacles'
import { Bird } from './bird'

export class Game {
    engine: Engine
    obstacle_manager: ObstacleManager
    bird: Bird

    constructor() {
        this.engine = new Engine({ width: 500, height: 500 });
        this.engine.start(ResourceLoader).then(() => {
            this.startGame();
            this.gameloop();
        })

        this.obstacle_manager = new ObstacleManager(this.engine);
        this.bird = new Bird(this.engine, 150, 460, 50, 50, Color.Green);

        this.check_keypress();
        //update all actors and calls gameloop once per frame
    }

    startGame() {
        const ground = new Actor({
            x: 250,
            y: 490,
            width: 500,
            height: 20,
            color: Color.Green
        })
        this.engine.add(ground);
    }

    spaceKeyPressed:boolean = false;

    check_keypress() {
        this.engine.input.keyboard.on("press", (event: KeyEvent)=> {
          if (event.key === Input.Keys.Space) {
              console.log('press')
              this.spaceKeyPressed = true
            }
        })
    }

    gameloop() {
        while (true) {
            if(this.spaceKeyPressed === true){
                console.log('it is really happening!')
            }
        }
    }
}

new Game()
