let numberofButtons = document.querySelectorAll(".key").length;

for (let i = 0; i < numberofButtons; i++) {
  document.querySelectorAll(".key")[i]
  .addEventListener("click", function() {
    let buttonStyle = this.innerHTML;
    sound(buttonStyle);
  });
}

function sound(key) {
  switch (key) {
      case "A":
        let sound1 = new Audio ("./assets/sounds-hit-Domboom/bombo (1).wav");
        sound1.play();
        break;

      case "S":
        let sound2 = new Audio ("./assets/sounds-hit-Domboom/crash.wav");
        sound2.play();
        break;

      case "D":
        let sound3 = new Audio ("./assets/sounds-hit-Domboom/hit-hat.wav");
        sound3.play();
        break;

      case "F":
        let sound4 = new Audio ("./assets/sounds-hit-Domboom/redoblante.wav");
        sound4.play();
        break;

      case "G":
        let sound5 = new Audio ("./assets/sounds-hit-Domboom/tom1.wav");
        sound5.play();
        break;

      case "H":
        let sound6 = new Audio ("./assets/sounds-hit-Domboom/tom2.wav");
        sound6.play();
        break;

      case "J":
        let sound7 = new Audio ("./assets/sounds-hit-Domboom/tom3.wav");
        sound7.play();
        break;

      case "K":
        let sound8 = new Audio ("./assets/sounds-hit-Domboom/tom4.wav");
        sound8.play();
        break;

        default: console.log(key);
  }
};
