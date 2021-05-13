import { Component, OnInit } from '@angular/core';
import { SharedService } from "../shared.service";
import { StocksAPIService } from '../stocks-api.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
}) 
export class SearchbarComponent implements OnInit {

  //items to display
  stocks: Object;

  //toggle drop down var
  showDropDown = false;

  //create form
  searchForm = new FormGroup({
    searchInput: new FormControl('', Validators.required)
  });

  constructor(private sharedInput: SharedService, private router:Router, private sData:StocksAPIService) {
  }

  ngOnInit() {
    //detect when user types and call api autocomplete
    const inputBox = document.getElementById("sBox");
    const keyup$ = fromEvent(inputBox, "keyup");
    keyup$.pipe(
      map((i: any) => i.currentTarget.value),
      //delay so doesnt get called until user is done typing
      debounceTime(1000)
    ).subscribe((value) => {
      //if input value is empty dont call api
      if (value != "") {
        this.getAutoComplete(value)
      }
    });
  }

  //when form is submitted
  onSubmit() {
    //refresh component when searching again
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/searchcontent']);
    });
    this.showDropDown = false;
  }

  //toggle drop down
  openDropDown() {
    this.showDropDown = true;
  }

  //clear input field
  clearInput() {
    this.searchForm.patchValue({ searchInput: "" });
  }

  //change value when item is selected and set value for next component
  selectVal(sName, symbol) {
    this.sharedInput.setMessage(symbol);
    this.searchForm.patchValue({ searchInput: sName + " (" + symbol+")" });
    this.showDropDown = false;
  }

  //api call for autocomplete
  getAutoComplete(val) {
    this.sData.getAutoComplete(val)
      .then((response) => {
        response.json()
          .then((data) => {
            console.log(data.quotes);
            this.stocks = data.quotes;
          });
      })
      .catch((err) => {
        console.log('Error generated: ${err}');
      });
  }

}
