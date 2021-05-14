import { Component, OnInit } from '@angular/core';
import { SharedService } from "../shared.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //var for chart
  showCharts = false;
  charts: any;

  //button
  removeBtn = "removeBtn";

  constructor(private sharedInput: SharedService) { }

  ngOnInit() {
    this.checkIfAvailable();
  }

  checkIfAvailable() {
    this.charts = this.sharedInput.getChart();
    if (this.charts === undefined || this.charts.length == 0) {
      this.showCharts = false;
    }
    else {
      this.showCharts = true;
    }
  }

  removeQuote(symbol) {

  }
}
