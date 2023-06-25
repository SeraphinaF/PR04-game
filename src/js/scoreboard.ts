

export class Scoreboard {
    private score: number;
    private label: Label;
  
    constructor() {
      this.score = 0;
      this.label = new Label({
        text: `Score: ${this.score}`,
        pos: new Vector(10, 10),
        font: new Font({
          family: 'Arial',
          size: 24,
          color: Color.White
        })
      });
    }