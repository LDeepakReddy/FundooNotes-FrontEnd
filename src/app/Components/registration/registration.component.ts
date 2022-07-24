import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userService/user.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  showPassword: boolean = false;


  constructor(private formBuilder: FormBuilder, private user: UserService) { }

  showHidePassword() {
    this.showPassword = !this.showPassword;
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm: ['', Validators.required],
    },
    )
  }

  // convenience getter for easy access to form fields
  //  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      let reqData = {
        firstname: this.registerForm.value.firstName,
        lastname: this.registerForm.value.lastName,
        email: this.registerForm.value.userName,
        password: this.registerForm.value.password,
        password_confirmation:this.registerForm.value.confirm,
        //  service: this.registerForm.value.service
      }
      this.user.registration(reqData).subscribe((response: any) => {
        console.log(response);

      }, (error: any) => {
        console.log(error);
      }
      );



      // // stop here if form is invalid
      // if (this.registerForm.invalid) {
      //   return;
      // }
      // console.log(this.registerForm.value)
    }
  }

}
