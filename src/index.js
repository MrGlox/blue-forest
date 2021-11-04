import "./styles.scss";
import Clock from "./Clock";

import "./fetch";
import "./slider";

const clock = new Clock();
clock.init();

const $input = document.querySelector("input");
const $buttons = document.querySelectorAll("table > button");

$buttons.forEach(function (
  $button, // Un button de l'array button
  index, // index = 0 / 1 / 2...
  array // array = $buttons
) {
  $button.addEventListener("click", function (event) {
    // if (event.target.innerHTML.length === 0 || event.target.innerHTML === "+" && ... ) return

    // Le cas où on clique sur AC
    if (event.target.innerHTML === "AC") {
      console.log("AC clicked");

      $input.value = "";

      return false; // STOP LA FONCTION
    }

    // Le cas où on clique sur =
    if (event.target.innerHTML === "=") {
      try {
        $input.value = eval($input.value);
      } catch (err) {
        $input.value = "";
        throw err;
      }

      return true; // STOP LA FONCTION
    }

    // Concaténation des HTML des
    $input.value += event.target.innerHTML;
  });
});
