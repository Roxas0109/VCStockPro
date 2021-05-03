import { Component, OnInit } from '@angular/core';
import { StocksAPIService } from '../stocks-api.service';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit {
    
  public cryptoDatas: Object;

  constructor(private data: StocksAPIService) { }

  ngOnInit() {
    var cryptoSymbols = new Array("btc-usd", "eth-usd", "ltc-usd", "doge-usd");
    var cryptoArray = new Array<string>();
    for (var i = 0; i < cryptoSymbols.length; i++) {
      this.data.getStockBySymbol(cryptoSymbols[i])
        .then((response) => {
          response.json()
            .then((datas) => {
              cryptoArray.push(datas);
              console.log(cryptoArray[i]);
            });
        });
    }

    this.cryptoDatas = cryptoArray;
  }
}
