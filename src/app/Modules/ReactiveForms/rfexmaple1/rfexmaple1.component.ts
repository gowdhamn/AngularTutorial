import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-rfexmaple1',
  templateUrl: './rfexmaple1.component.html',
  styleUrls: ['./rfexmaple1.component.scss']
})
export class Rfexmaple1Component implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  posteddata: string;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]     
    });
  }

  get f() { return this.registerForm.controls; }

  get fa() { return this.registerForm; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    this.posteddata =  JSON.stringify(this.registerForm.value);
    alert('Success!! :-)');
  }

}
