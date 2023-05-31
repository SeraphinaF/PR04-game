import { Actor, Engine, Vector, Color, Input, Label, Font, CollisionType } from "excalibur"
import { Bird } from './bird'
import { Resources } from "./resources"

export class Powerup {
    powerups: Array<Actor>
    engine: Engine
    bird: Bird
    collisionType: CollisionType

    constructor(engine: Engine, bird: Bird) {
        this.bird = bird
        this.engine = engine
        this.powerups = []
        for (let i = 0; i < 50; i++) {
            let powerup = new Actor({
                x: Math.random() * (1300 - 800) + 800,
                y: Math.random() * (900 - 100) + 100,
                height: 200,
                width: 200
            })
            powerup.graphics.use(Resources.Powerup.toSprite())
            powerup.vel = new Vector(-50, 0)
            powerup.scale = new Vector(0.2, 0.2)

            this.collisionType = CollisionType.Passive; // Set collision type to Passive

            // Add collision detection
            powerup.on('collisionstart', (event) => {
              const other = event.other;
              if (other instanceof Bird) {
                this.removePowerup(powerup);
              }
            });
            
            engine.add(powerup)
            this.powerups.push(powerup)
        }
    }

    removePowerup(powerup: Actor) {
        // Remove powerup from the engine and powerups array
        this.engine.remove(powerup);
        const index = this.powerups.indexOf(powerup);
        if (index > -1) {
          this.powerups.splice(index, 1);
        }
      }
}
