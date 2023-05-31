import { Actor, Engine, Vector, Color, Input, Label, Font, CollisionType } from "excalibur"
import { Resources } from "./resources"
import { Powerup } from "./powerup"
import { ObstacleManager } from "./obstacles"

export class Bird extends Actor {
  groundPos: number
  birdScale: number
  engine: Engine
  powerup: Powerup
  collisionType: CollisionType

  constructor(engine: Engine, powerup: Powerup, x: number, y: number, width: number, height: number, color: Color) {
    super({ x, y, width, height, color })
    this.groundPos = y
    this.engine = engine
    this.powerup = powerup
    this.graphics.use(Resources.Bird.toSprite())
    this.scale = new Vector(0.4, 0.4)
    engine.add(this)

    this.on('collisionstart', (event) => this.hitSomething(event))
  }

  hitSomething(event) {
    console.log('I am flying!')
    console.log(event)
    if (event.other instanceof Powerup) {
      this.handlePowerupCollision(event.other);
    }
  }

  handlePowerupCollision(powerup: Powerup) {
    console.log('I am flying!')
  }

  onPreUpdate() {
    const gravity = 0.4; // Adjust the gravity strength as needed
    const jumpVelocity = -13; // Adjust the initial jump velocity as needed
    const maxFallVelocity = 10; // Adjust the maximum fall velocity as needed

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

  gameOver() {
    let GameOverTxt = new Label({
      text: 'Game over bitches!',
      pos: new Vector(60, 100),
      font: new Font({
        family: 'impact',
        size: 50
      })
    });
    this.engine.currentScene.add(GameOverTxt)
    console.log('GAME OVER!')
    this.kill()
  }
}    
