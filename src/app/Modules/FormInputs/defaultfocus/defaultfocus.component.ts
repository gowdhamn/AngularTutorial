import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-defaultfocus',
  templateUrl: './defaultfocus.component.html',
  styleUrls: ['./defaultfocus.component.scss']
})
export class DefaultfocusComponent implements OnInit,AfterViewInit {

  @ViewChild("inputBox") _el: ElementRef;
  
  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit():void {
    this._el.nativeElement.focus();
  }

}
