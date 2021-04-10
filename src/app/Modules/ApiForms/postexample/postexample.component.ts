import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-postexample',
  templateUrl: './postexample.component.html',
  styleUrls: ['./postexample.component.scss']
})
export class PostexampleComponent implements OnInit {

  tutorial = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private HTTPSERVICE: HttpService) { }

  ngOnInit(): void {
  }

  savePost(): void{
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description
    };

    this.HTTPSERVICE.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  newPost(): void{
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
      published: false
    }
  }

}
