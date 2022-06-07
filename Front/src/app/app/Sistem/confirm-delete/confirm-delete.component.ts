import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.alertDelete();
  }

  alertDelete(){
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
        Swal.fire(
          'Deleteado!',
          'Esta entrada foi deletada',
          'success'
        )
      }
    })
  }

}
