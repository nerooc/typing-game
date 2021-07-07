import { Component } from "@angular/core";
import { lorem } from "faker";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "typing-game";

  exampleString = lorem.sentence();
  inputString = "";
  isWon = false;

  updateInputString(value) {
    this.inputString = value;
  }

  onInput(value) {
    this.updateInputString(value);
    this.isWon = this.inputString === this.exampleString;
  }

  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return "pending";
    }

    return randomLetter === enteredLetter ? "correct" : "incorrect";
  }
}
