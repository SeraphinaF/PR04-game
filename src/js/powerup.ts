import { Actor, Engine, Vector, Color, Input, Label, Font, CollisionType } from "excalibur"
import { Bird } from './bird'
import { Resources } from "./resources"


export class PowerupManager{
  powerups: Array<Powerup>
  engine: Engine
  bird: Bird
  
  constructor(engine: Engine, bird: Bird) {
    this.bird = bird;
      this.engine = engine;
      this.powerups = [];

      const distance_between = 10000
      
      for (let i = 0; i < 5; i++) {
        let powerup = new Powerup(
          distance_between * i,
          Math.random() * (900 - 100) + 100,
          200,
          200
          );
          
          powerup.graphics.use(Resources.Powerup.toSprite());
          powerup.vel = new Vector(-150, 0);
        powerup.scale = new Vector(0.2, 0.2);
  
        engine.add(powerup);
        this.powerups.push(powerup);
      }
    }
  }

  export class Powerup extends Actor{
  constructor(x:number, y:number, height:number, width:number){
    super({x,y,height,width})
   }
   _postupdate(engine: Engine, delta: number): void {
     if(this.pos.x < 10){
      this.pos.x = 1000
     }
   }
  }