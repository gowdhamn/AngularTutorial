import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-readtextboxinput',
  templateUrl: './readtextboxinput.component.html',
  styleUrls: ['./readtextboxinput.component.scss']
})
export class ReadtextboxinputComponent implements OnInit {

  posteddata: string;
  titleinputbox = new FormControl('');

  constructor() { }

  ngOnInit(): void {

    this.titleinputbox.setValue('Default: New Title') ;

  }

  submit(){
    console.log(this.titleinputbox.value);
    this.posteddata = this.titleinputbox.value;
  }

}
