import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userService/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetpasswordForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user: UserService) { }

  ngOnInit(): void {
    this.resetpasswordForm=this.formBuilder.group({
      newpassword:['',[Validators.required, Validators.minLength(6)]],  
      confirmPassword:['',Validators.required]
    })
  }
  onSubmit() {
    this.submitted = true;
    if (this.resetpasswordForm.valid) {

      let reqData = {
        new_password: this.resetpasswordForm.value.newpassword,
        password_confirmation: this.resetpasswordForm.value.confirmPassword
      }
      this.user.reset(reqData).subscribe((response: any) => {
        console.log(response);

      }, (error: any) => {
        console.log(error);
      }
      );


    // stop here if form is invalid
  //   if (this.resetpasswordForm.invalid) {
  //     return;
  //   }
  //   console.log(this.resetpasswordForm.value)
  // }

}
  }
}
