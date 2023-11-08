import {Component, Input, OnInit} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  @Input() message: string = '';

  constructor(public dialogRef: MatDialogRef<DialogComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }

}
