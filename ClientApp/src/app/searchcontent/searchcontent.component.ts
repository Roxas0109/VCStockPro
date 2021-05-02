import { Component, OnInit } from '@angular/core';
import { SharedService } from "../shared.service";

@Component({
  selector: 'app-searchcontent',
  templateUrl: './searchcontent.component.html',
  styleUrls: ['./searchcontent.component.css']
})
export class SearchcontentComponent implements OnInit {
  receivedMessage: string;

  constructor(private sharedInput: SharedService) {}

  ngOnInit() {
    this.receivedMessage=this.sharedInput.getMessage();
  }

}
