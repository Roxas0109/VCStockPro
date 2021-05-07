import { Component, OnInit } from '@angular/core';
import { SharedService } from "../shared.service";
import { StocksAPIService } from '../stocks-api.service';

@Component({
  selector: 'app-searchcontent',
  templateUrl: './searchcontent.component.html',
  styleUrls: ['./searchcontent.component.css']
})
export class SearchcontentComponent implements OnInit {
  receivedMessage: string;
  shortName: string;
  symbol: string;

  type = 'line';
  data = {
    labels: [],
    datasets: [{ label: "Low", data: [], backgroundColor: ['red'] }, { label: "High", data: [], backgroundColor: ['green'] }],

  };
  options = {
    responsive: true,
    maintainAspectRatio: true
  };

  constructor(
    private sharedInput: SharedService,
    private sData: StocksAPIService,
  ) { }

  ngOnInit() {
    this.receivedMessage = this.sharedInput.getMessage();
    console.log(this.receivedMessage);
    this.getProfile();
    
  }

  getProfile() {
    this.sData.getProfile(this.receivedMessage)
      .then((response) => {
        response.json()
          .then((data) => {
            console.log(data);
            this.shortName = data.quoteType.shortName;
            this.symbol = data.symbol;
            console.log(this.shortName);
            console.log(this.symbol);
          });
      })
      .catch((err) => {
        console.log('Error generated: ${err}');
      });
  }

  getChart() {
    this.sData.getChart(this.receivedMessage)
      .then((response) => {
        response.json()
          .then((data) => {
            let high = data.chart.result[0].indicators.quote[0].high;
            let low = data.chart.result[0].indicators.quote[0].low;
            let timeStamp = data.chart.result[0].timestamp;
            let stockDates = [];
            timeStamp.forEach((data) => {
              let jsdate = new Date(data * 1000);
              stockDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }));
            });
            this.data.labels = stockDates;
            this.data.datasets[0].data = low;
            this.data.datasets[1].data = high;
          });
      })
      .catch((err) => {
        console.log('Error generated: ${err}');
      });
  }

  getAutoComplete(val) {
    this.sData.getAutoComplete(val)
      .then((response) => {
        response.json()
          .then((data) => {
            console.log(data.quotes[0].symbol);
          });
      })
      .catch((err) => {
        console.log('Error generated: ${err}');
      });
  }



}
