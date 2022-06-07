import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  constructor(private api: ApiService) { }

  public fronts = {
    id:'',
    name:'',
    year_begin:'',
    year_end:'',
    fronttankid:'',
    countryname:'',
  }
  front: any;
  fronttank: any;
  frontcountry:any;
  allFront: any;
  
  ngOnInit(): void {
    this.getFronts()
    this.getFrontsTanks()
    this.getFrontsCountries()
    this.getAllFronts()
  }

  getFrontsTanks(){
    this.api.get("tanks").subscribe(res => {
      this.fronttank = res;
      console.log(this.fronttank);
    });
  }
  getFrontsCountries(){
    this.api.get("countries").subscribe(res =>{
      this.frontcountry = res;
      console.log(this.frontcountry)
    });
  }
  getFronts(){
    this.api.get("fronts").subscribe(res => {
      this.front = res;
      console.log(res);
    });
  }
  getAllFronts(){
    this.api.get("allfronts").subscribe(res => {
      this.allFront = res;
      console.log(res);
    })
  }
}
