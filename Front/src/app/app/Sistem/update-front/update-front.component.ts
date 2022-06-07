import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-update-front',
  templateUrl: './update-front.component.html',
  styleUrls: ['./update-front.component.css']
})
export class UpdateFrontComponent implements OnInit {

  constructor(private api: ApiService) { }

  public fronts = {
    id:'', //tirar
    name:'',
    year_begin:'',
    year_end:'',
  }

  public frontPut ={
    id:'',
    name:'',
    year_begin:'',
    year_end:''
  }

  respostas: any;
  tudo: any;

  ngOnInit(): void {
    this.getFronts()
  }
  getFronts(){
    this.api.get("fronts").subscribe(res => {
      this.respostas = res;
      console.log(res);
    });
  }
  getFront(id: any){
    this.api.getOne("fronts",id).subscribe(res =>{
      this.frontPut = res;  
      console.log(res);
    })
  }
  updateFront(){
    this.api.put("fronts", this.frontPut.id, this.frontPut).subscribe(res =>{
      console.log(res);
      this.getFronts();
    });
  }
}
