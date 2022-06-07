import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  constructor(private api: ApiService) { }

  public country =  {
    id:'',
    name:'',
    allies:'',
  }
  public countryPut = {
    id:'',
    name:'',
    allies:'',
  }
  respostas:any;

  ngOnInit(): void {
    this.getCountries();
    console.log
  }
  getCountries(){
    this.api.get("countries").subscribe(res => {
      this.respostas = res;
      console.log(res)
    });
  }
  getCountry(id: any){
    this.api.getOne("countries",id).subscribe(res =>{
      this.countryPut = res;  
      console.log(res);
    })
  }
  updateCountry(){
    this.api.put("countries", this.countryPut.id, this.countryPut).subscribe(res =>{
      console.log(res);
      this.getCountries();
    });
  }
  insertCountries(){
    this.api.post("countries", this.country).subscribe(res => {
      console.log(res)
      alert('Criado')
    });
  }
  deleteCountries(id: string){
    this.api.delete("countries",id).subscribe(res => {
      console.log(res)
      alert('Apagado')
      this.getCountries()
    })
  }

}
