import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tanks',
  templateUrl: './tanks.component.html',
  styleUrls: ['./tanks.component.css']
})
export class TanksComponent implements OnInit {

  constructor(private api: ApiService) { }

  public tanks = {
    id: '',
    name:'',
    production_start:'',
    production_ended:'',
    class:'',
    country_id:'',
    countries_name:'',
  }
  public tankPut = {
    id: '',
    name:'',
    production_start:'',
    production_ended:'',
    class:'',
    country_id:'',
    countries_name:'',
  }
  respostas:any;
  resultado:any;
  controles = new FormControl();
  
  ngOnInit(): void {
    this.getTanks();
    this.getCountries();
  }
    getCountries(){
    this.api.get("countries").subscribe(res => {
      this.resultado = res;
      console.log("to aqui "+ JSON.stringify(this.resultado) )
    });
  }
  getTanks(){
    this.api.get("tanks").subscribe(res =>{
      this.respostas = res;
      console.log(res)
    });
  }
  getTank(id: any){
    this.api.getOne("tanks",id).subscribe(res =>{
      this.tankPut = res;  
      console.log(res);
    })
  }
  insertTanks(){
    this.api.post("tanks", this.tanks,).subscribe(res =>{
      this.respostas = res;
      console.log(this.respostas)
      this.getTanks();
    });
  }
  updateTank(){
    this.api.put("tanks", this.tankPut.id, this.tankPut).subscribe(res =>{
      console.log(res);
      this.getTanks();
    });
  }
  deleteTanks(id: string){
    this.api.delete("tanks",id).subscribe(res => {
      console.log(res, id)
      alert('Apagado')
      this.getTanks()
    })
  }

}
