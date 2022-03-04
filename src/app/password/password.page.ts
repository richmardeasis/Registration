import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {
  passwordForm: FormGroup;
  
  ngOnInit() {
    this.passwordForm = new FormGroup({
      'password': new FormControl(null,[Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)]),
      'verifypassword': new FormControl(null,Validators.required)
    },
    {
      validators: (control) => {
        if (control.value.password !== control.value.verifypassword) {
          control.get("verifypassword").setErrors({ notSame: true });
        }
        return null;
      },
    }
    ) 
  }
  Password(){
    localStorage.setItem('Password',JSON.stringify(this.passwordForm.get('password').value));
    alert("Registration Success");
    console.log(this.passwordForm.value);
    this.passwordForm.reset();
    window.history.back();
  }
  get password() {
    return this.passwordForm.get('password');
  }
}

