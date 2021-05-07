import { Component, OnInit } from '@angular/core';
import { SharedService } from "../shared.service";

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
}) 
export class SearchbarComponent implements OnInit {

  constructor(private sharedInput: SharedService) { }

  ngOnInit() {
    const input = document.querySelector(".search");
    input.addEventListener("keyup", function (event: KeyboardEvent) {
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("myBtn").click();
      }
    });
  }

  setVal(val) {
    this.sharedInput.setMessage(val);
  }

}
