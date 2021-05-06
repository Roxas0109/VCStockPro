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

  constructor(
    private sharedInput: SharedService,
    private sData: StocksAPIService,
  ) { }

  ngOnInit() {
    this.receivedMessage = this.sharedInput.getMessage();
    this.sData.getChart()
      .then((response) => {
        response.json()
          .then((data) => {
            //this.charts = data.chart.result;
            let high = data.chart.result[0].indicators.quote[0].high;
            let low = data.chart.result[0].indicators.quote[0].low;
            let timeStamp = data.chart.result[0].timestamp;
            let stockDates = [];
            timeStamp.forEach((data) => {
              let jsdate = new Date(data * 1000);
              stockDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }));
            });

            //console.log(this.charts);
            console.log(high);
            console.log(low);
            console.log(timeStamp);
            console.log(stockDates);
          });
      })
      .catch((err) => {
        console.log('Error geenrted: ${err}');
      });
  }

}
