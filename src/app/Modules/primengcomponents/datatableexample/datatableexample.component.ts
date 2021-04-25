import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-datatableexample',
  templateUrl: './datatableexample.component.html',
  styleUrls: ['./datatableexample.component.scss']
})
export class DatatableexampleComponent implements OnInit {

  data: any[];
  cols: any[];

  constructor(private tutorialService: HttpService) { }

  ngOnInit(): void {
    this.retrieveTutorials();

    this.cols = [
      { field: 'userId', header: 'UserID' },
      { field: 'id', header: 'Id' },
      { field: 'title', header: 'Title' },
      { field: 'body', header: 'Description' }
  ];

  }

  retrieveTutorials(): void {
    this.tutorialService.getAll()
      .subscribe(
        data => {
          this.data = data;
        },
        error => {
          console.log(error);
        });
  }


}
