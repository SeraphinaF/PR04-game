
import { Actor, Engine, Vector, Color, Input, Scene, Label, Font } from "excalibur"
import { Resources, ResourceLoader } from "./resources"
import { ObstacleManager } from './obstacles'
import { Bird } from './bird'
import { Powerup, PowerupManager } from './powerup'
import { DayLevel, NightLevel } from './scenes/levels'


export class Game {
  engine: Engine
  obstacle_manager: ObstacleManager
  powerup_manager: PowerupManager
  bird: Bird
  groundpos: number
  currentLevel: Scene


  constructor() {
    this.groundpos = 397
    this.engine = new Engine({ width: innerWidth, height: innerHeight });
    this.engine.start(ResourceLoader).then(() => {
      this.gameloop();
      this.everythingLoaded();
    });


  }


  everythingLoaded() {
    this.engine.add('daylevel', new DayLevel());
    this.engine.add('nightlevel', new NightLevel());
    this.engine.goToScene('daylevel');
    //switch levels
    this.currentLevel = this.engine.scenes.daylevel


    // setInterval(() => {
    //   if (this.currentLevel === this.engine.scenes.daylevel) {
    //     this.engine.goToScene('nightlevel')
    //     this.currentLevel = this.engine.scenes.nightlevel
    //   } else {
    //     this.engine.goToScene('daylevel')
    //     this.currentLevel = this.engine.scenes.daylevel
    //   }
    // }, 3000)


        this.obstacle_manager = new ObstacleManager(this.engine, this.bird, 150);
        this.powerup_manager = new PowerupManager(this.engine, this.bird)
        this.bird = new Bird(this.engine, this, this.obstacle_manager, 150, this.groundpos, 200, 550, Color.Green);
  }


    startGame() {
      console.log('game started!')
    }


    gameloop() {
      this.startGame();


    }
    gameOver():boolean {
      let GameOverTxt = new Label({
        text: 'GAME OVER... Reload to start again',
        pos: new Vector(200, 300),
        font: new Font({
          family: 'impact',
          size: 50
        })
      });
      this.engine.currentScene.add(GameOverTxt)
      console.log('GAME OVER!')
      this.bird.kill()
    
      return true
    }
  }


new Game()