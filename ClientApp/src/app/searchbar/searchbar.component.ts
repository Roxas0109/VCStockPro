import { Component, OnInit } from '@angular/core';
import { SharedService } from "../shared.service";
import { StocksAPIService } from '../stocks-api.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
}) 
export class SearchbarComponent implements OnInit {
  stocks = ["apple", "tesla", "microsoft"];
  showDropDown = false;
  searchForm = new FormGroup({
    searchInput: new FormControl('', Validators.required)
  });

  constructor(private sharedInput: SharedService, private router:Router) {
  }

  ngOnInit() { }

  onSubmit() {
    this.sharedInput.setMessage(this.searchForm.value.searchInput);
    //refresh component when searching again
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/searchcontent']);
    });
  }

  toggleDropDown() {
    this.showDropDown = !this.showDropDown;
  }

  selectVal(val) {
    this.searchForm.patchValue({ searchInput: val });
    this.showDropDown = false;
  }

}
