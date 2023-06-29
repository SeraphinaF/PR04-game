import { Actor, Engine, Vector, Color, Input, Label, Font, CollisionType } from "excalibur"
import { Resources } from "./resources"
import { Game } from "./game"
import { Powerup } from "./powerup"
import { Tree, ObstacleManager } from "./obstacles"

let gravity = 0.5; // Adjust the gravity strength as needed
let jumpVelocity = -19; // Adjust the initial jump velocity as needed
let maxFallVelocity = 10; // Adjust the maximum fall velocity as needed

export class Bird extends Actor {
  groundPos: number
  birdScale: number
  engine: Engine
  game: Game
  isFlying: boolean
  collisionType: CollisionType
  obstacleManager: ObstacleManager
  obstacle: ObstacleManager
  

  constructor(engine: Engine, game: Game, obstacleManager: ObstacleManager, x: number, y: number, width: number, height: number, color: Color) {
    super({ x, y, width, height, color })
    this.isFlying = false
    this.groundPos = y
    this.engine = engine
    this.game = game
    this.obstacleManager = obstacleManager
    this.obstacle = obstacleManager
    this.graphics.use(Resources.Bird.toSprite())
    this.scale = new Vector(0.4, 0.4)
    engine.add(this)

    this.on('collisionstart', (event) => {
      this.getPowerup(event);
      this.hitTree(event); 
    });
  }

  getPowerup(event) {
    // console.log(event.target)
    // console.log(event.other)
    if (event.other instanceof Powerup) {
    event.other.kill()
    this.fly()
    }
  }

  fly(){
    if (!this.isFlying){
      this.isFlying = true
      this.groundPos = 150
      this.obstacleManager.obstacles.forEach((obstacle) => {
        obstacle.vel = new Vector(-460, 0)
        jumpVelocity = -13;
      })
      setTimeout(() => {
        this.isFlying = false;
        this.groundPos = 397;
        this.obstacleManager.obstacles.forEach((obstacle) => {
          obstacle.vel = new Vector(-130, 0);
          jumpVelocity = -17;
        });
      }, 5000); // 5 seconds (5000 milliseconds)
    }
  }

  hitTree(event) {
    if (event.other instanceof Tree) {
      console.log('oh no I am dead')
      this.game.gameOver()
    }
  }

  onPreUpdate() {
    // Apply gravity to the vertical velocity
    this.vel.y += gravity;

    // Jump when the spacebar is pressed and the bird is on the ground
    if (
      this.engine.input.keyboard.wasPressed(Input.Keys.Space) &&
      this.pos.y === this.groundPos
    ) {
      this.vel.y = jumpVelocity;
    }

    // Limit the maximum fall velocity
    if (this.vel.y > maxFallVelocity) {
      this.vel.y = maxFallVelocity;
    }

    // Update the position based on the velocity
    this.pos.y += this.vel.y;

    // Keep the bird within the bounds of the ground
    if (this.pos.y > this.groundPos) {
      this.pos.y = this.groundPos;
      this.vel.y = 0;
    }
  }


}    
