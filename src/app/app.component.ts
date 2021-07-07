import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "typing-game";

  exampleString = "Lorem ipsum dolor sit amet";
  inputString = "";
  isWon = false;

  updateInputString(value) {
    this.inputString = value;
  }

  onInput(value) {
    this.updateInputString(value);
    this.isWon = this.inputString === this.exampleString;
  }
}
