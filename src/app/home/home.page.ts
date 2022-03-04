import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],

})


export class HomePage implements OnInit{

  registrationForm: FormGroup;
  ngOnInit() {
    this.registrationForm = new FormGroup({
      'lastname' : new FormControl(null, Validators.required),
      'firstname' : new FormControl(null, Validators.required),
      'number' : new FormControl(null, [Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),
      'email' : new FormControl(null, [Validators.required,Validators.email]),
    });
  }
  clicksub(){
    localStorage.setItem('Last_Name',JSON.stringify(this.registrationForm.get('lastname').value));
    localStorage.setItem('First_Name',JSON.stringify(this.registrationForm.get('firstname').value));
    localStorage.setItem('Mobile_Number',JSON.stringify(this.registrationForm.get('number').value));
    localStorage.setItem('Email_Address',JSON.stringify(this.registrationForm.get('email').value));
    console.log(this.registrationForm.value);
    this.registrationForm.reset();
    
  }
  get lastname() {
    return this.registrationForm.get('lastname');
  }
  get firstname() {
    return this.registrationForm.get('firstname');
  }
  get number() {
    return this.registrationForm.get('number');
  }
  get email() {
    return this.registrationForm.get('email');
  }

}