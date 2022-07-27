import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userService/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetpasswordForm!: FormGroup;
  submitted = false;
  token : any;

  constructor(private formBuilder: FormBuilder, private user: UserService,private router: ActivatedRoute) { }

  ngOnInit(): void {

    this.router.queryParams.subscribe(params => {
      this.token = params['token'];
      console.log(params);
    });

    this.resetpasswordForm=this.formBuilder.group({
      newpassword:['',[Validators.required, Validators.minLength(6)]],  
      confirmPassword:['',Validators.required],
      
    })
    this.token = this.router.snapshot.paramMap.get('token');
    console.log(this.token);
  }
 
  onSubmit() {
    this.submitted = true;
    if (this.resetpasswordForm.valid) {

      let reqData = {
        new_password: this.resetpasswordForm.value.newpassword,
        password_confirmation: this.resetpasswordForm.value.confirmPassword
      }
      this.user.reset(reqData,this.token).subscribe((response: any) => {
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
