import { Component, OnInit } from '@angular/core';
import { throwIfEmpty } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-fronts',
  templateUrl: './fronts.component.html',
  styleUrls: ['./fronts.component.css']
})
export class FrontsComponent implements OnInit {

  constructor(
    private api: ApiService,
    ) { }

  public fronts = {
    id:'',
    name:'',
    year_begin:'',
    year_end:'',
  }
  public frontTanks = {
    id:'',
    tank_id:'',
    front_id:''
  }
  public frontCountries ={
    country_id:'',
    front_id:'',
  }

  respostas:any;
  resultados:any;
  frontsinsert:any;
  fronttanks:any;
  frontcountries:any;
  paises:any;
  tudo:any;
  
  ngOnInit(): void {
    this.getFronts();
    this.getTanks();
    this.getCountries();
    this.getFrontsCountries();
    this.getFrontsTanks()
  }
  getfrontsTanks() {
    throw new Error('Method not implemented.');
  }
  getFronts(){
    this.api.get("fronts").subscribe(res => {
      this.respostas = res;
      console.log(res);
    });
  }
  getFront(id: any){
    this.api.getOne("fronts",id).subscribe(res =>{
      this.tudo = res;
      console.log(res);
    })
  }
  getTanks(){
    this.api.get("tanks").subscribe(res =>{
      this.resultados = res;
      console.log(res)
    });
  }
  getCountries(){
    this.api.get("countries").subscribe(res => {
      this.paises = res;
      console.log(this.paises)
    });
  }
  getFrontsTanks(){
    this.api.get("frontsTanks").subscribe(res =>{
      this.fronttanks = res;
      console.log(this.fronttanks)
    });
  }
  getFrontsCountries(){
    this.api.get("frontsCountries").subscribe(res =>{
      this.frontcountries = res;
      console.log(this.frontcountries)
    });
  }
  getFrontsCountriesPut(id: any){
    this.api.getOne("frontsCountries", id).subscribe(res =>{
      this.frontcountries = res;
      console.log(this.frontcountries)
    });
  }
  insertFronts(){
    this.api.post("fronts", this.fronts,).subscribe(res =>{
      this.frontsinsert = res;
      console.log(this.frontsinsert)
      this.getFronts();
    });
  }
  insertFrontsCountries(){
    this.api.post("frontsCountries", this.frontCountries).subscribe(res =>{
      this.frontcountries = res;
      console.log(res);
    });
  }
  putFrontCountries(frontCountriesPut: string, id: string){
    this.api.put("frontsCountries", frontCountriesPut, id).subscribe(res => {
      this.frontcountries = res;
      console.log(res);
    });
  }
  insertFrontsTanks(){
    this.api.post("frontsTanks", this.frontTanks).subscribe(res =>{
      this.fronttanks = res;
      console.log(res);
    });
  }
  deleteFronts(id: string){
    this.api.delete("fronts",id).subscribe(res => {
      console.log('apagado');
      this.getFronts();
    })
  }
  deleteFrontsTanks(id: string){ //ajeitar isso aqui
    this.api.delete("frontsTanks",id).subscribe(res => {
      console.log('apagado');
      this.getFronts();
    });
  }
  deleteFrontsCountries(id: string){ //ajeitar isso aqui
    this.api.delete("frontsCountries",id).subscribe(res => {
      console.log('apagado');
      this.getFronts();
    });
  }
  //adicionar delete frontsCountries
  alertDelete(id: string){
    Swal.fire({
      title: 'Tem certeza?',
      text: "Vai me apagar mesmo?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Tenho certeza'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteFronts(id)
        Swal.fire(
          'Deleteado!',
          'Esta entrada foi deletada',
          'success'
        )
      }
    })
  }
}
