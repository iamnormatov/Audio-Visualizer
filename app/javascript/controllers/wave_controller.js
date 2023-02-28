import { Controller } from "@hotwired/stimulus";
import { Wave } from "@foobar404/wave";

export default class extends Controller {
  connect() {
    console.log("Hello, Stimulus!");
    this.waveAudio = document.getElementById("wave_audio");
    this.waveCanvas = document.getElementById("wave_canvas");

    let wave = new Wave(this.waveAudio, this.waveCanvas);
    
    // Yoyiq-Animation

    // wave.addAnimation(
    //   new wave.animations.Wave({
    //     color: "#ff0000",
    //     lineWidth: 2,
    //     lineColor: "#00ff00",
    //   })
    // );

    wave.addAnimation(
      new wave.animations.Square({
        count: 50,
        diamater: 300,
      })
    );

    wave.addAnimation(
      new wave.animations.Glob({
        fillColor: { gradient: ["red", "blue", "green"], rotate: 45 },
        lineWidth: 10,
        lineColor: "#fff",
      })
    );
  }
}
