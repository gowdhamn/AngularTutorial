import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rfexample2',
  templateUrl: './rfexample2.component.html',
  styleUrls: ['./rfexample2.component.scss']
})
export class Rfexample2Component implements OnInit {
  
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      address: this.formBuilder.group({
        street: ['', Validators.required]
      })
    });
  }

  get f() { return this.registerForm.controls; }

  get fa() { return this.registerForm; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    alert('Success!! :-)');
  }

}
