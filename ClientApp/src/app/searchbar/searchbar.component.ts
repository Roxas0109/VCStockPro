import { Component, OnInit } from '@angular/core';
import { SharedService } from "../shared.service";

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  currentVal = "";

  constructor(private sharedInput: SharedService) { }

  ngOnInit() {
  }

  setVal(val) {
    this.sharedInput.setMessage(val);
  }

}
