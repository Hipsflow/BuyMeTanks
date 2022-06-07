import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { getMatFormFieldPlaceholderConflictError } from '@angular/material/form-field';
import { ConfirmDeleteComponent } from '../app/Sistem/confirm-delete/confirm-delete.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(){
    this.dialog.open(ConfirmDeleteComponent,{
      width: '390px',
      disableClose: true
    });
  }
}
