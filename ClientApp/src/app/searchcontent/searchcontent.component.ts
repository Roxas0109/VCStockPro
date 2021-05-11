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
  //var for key data
  open: string;
  dHigh: string;
  dLow: string;
  pClose: string;
  averVol: string;
  f2High: string;
  f2Low: string;
  beta: string;
  ask: string;
  exchangeName: string;
  mCap: string;
  //var for chart
  high: any;
  low: any;
  stockDates: any;

  type = 'line';
  data = {
    labels: [],
    datasets: [{ label: "Low", data: [], backgroundColor: ['#ff6769'] }, { label: "High", data: [], backgroundColor: ['#8aff98'] }],

  };
  options = {
    responsive: true,

  };

  constructor(
    private sharedInput: SharedService,
    private sData: StocksAPIService,
  ) { }
  
  ngOnInit() {
    this.forCSS();
    //this.getAutoComplete(this.sharedInput.getMessage());
    //setTimeout(() => this.initEverything(), 1000);

    
  }

  initEverything() {
    //console.log(this.receivedMessage);
    this.getProfile();
    this.getChart();
  }

  getProfile() {
    this.sData.getProfile(this.receivedMessage)
      .then((response) => {
        response.json()
          .then((data) => {
            //title var
            this.shortName = data.quoteType.shortName;
            this.symbol = data.symbol;
            //key data
            this.open = data.summaryDetail.open.fmt;
            this.dHigh = data.summaryDetail.dayHigh.fmt;
            this.dLow = data.summaryDetail.dayLow.fmt;
            this.pClose = data.summaryDetail.previousClose.fmt;
            this.averVol = data.summaryDetail.averageVolume.longFmt;
            this.f2High = data.summaryDetail.fiftyTwoWeekHigh.fmt;
            this.f2Low = data.summaryDetail.fiftyTwoWeekLow.fmt;
            this.beta = data.summaryDetail.beta.fmt;
            this.ask = data.summaryDetail.ask.fmt;
            this.exchangeName = data.price.exchangeName;
            this.mCap = data.summaryDetail.marketCap.longFmt;
            //console.log(this.shortName);
            //console.log(this.symbol);
            console.log(data);
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
            //set high, low, and timestamps
            this.high = data.chart.result[0].indicators.quote[0].high;
            this.low = data.chart.result[0].indicators.quote[0].low;
            let timeStamp = data.chart.result[0].timestamp;
            this.stockDates = [];
            //convert timestamps
            timeStamp.forEach((data) => {
              let jsdate = new Date(data * 1000);
              this.stockDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }));
            });
            //set values for chart
            this.data.labels = this.stockDates;
            this.data.datasets[0].data = this.low;
            this.data.datasets[1].data = this.high;
            console.log(data);
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
            //console.log(data.quotes[0].symbol);
            this.receivedMessage = data.quotes[0].symbol;
          });
      })
      .catch((err) => {
        console.log('Error generated: ${err}');
      });
  }

  forCSS() {
    //title var
    this.shortName = "Short Name";
    this.symbol = "Symbol";
    //key data
    this.open = "test";
    this.dHigh = "test";
    this.dLow = "test";
    this.pClose = "test";
    this.averVol = "test";
    this.f2High = "test";
    this.f2Low = "test";
    this.beta = "test";
    this.ask = "test";
    this.exchangeName = "test";
    this.mCap = "test";
    //chart var
    this.high = [2, 3, 4, 5, 6];
    this.low = [1, 2, 3, 4, 5];
    let timeStamp = [1007582741, 1625665772, 1070991691, 1131036227, 1298439891]
    this.stockDates = [];
    timeStamp.forEach((data) => {
      let jsdate = new Date(data * 1000);
      this.stockDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }));
    });
    this.data.labels = this.stockDates;
    this.data.datasets[0].data = this.low;
    this.data.datasets[1].data = this.high;
  }



}
