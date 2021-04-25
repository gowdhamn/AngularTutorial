import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ExampleDialogComponent } from './example-dialog/example-dialog.component';

@Component({
  selector: 'app-pass-datato-dialog',
  templateUrl: './pass-datato-dialog.component.html',
  styleUrls: ['./pass-datato-dialog.component.scss']
})
export class PassDatatoDialogComponent implements OnInit {

  titleinputbox = new FormControl('');
  

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.titleinputbox.setValue('Albert Camus') ;
  }

  openDialog(): void {

    console.log(this.titleinputbox.value);

    const dialogRef = this.dialog.open(ExampleDialogComponent, {
      width: '250px',
      data: {title: this.titleinputbox.value}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.titleinputbox.value     
    });
  }

}
