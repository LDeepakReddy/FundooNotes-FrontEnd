import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userService/user.service';

@Component({
  selector: 'app-forgot-email',
  templateUrl: './forgot-email.component.html',
  styleUrls: ['./forgot-email.component.scss']
})
export class ForgotEmailComponent implements OnInit {
  forgotemailForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user: UserService) { }

  ngOnInit(): void {
    this.forgotemailForm =this.formBuilder.group({
      phoneOrEmail:['',[Validators.required]]
    })
  }
  onSubmit() {
    this.submitted = true;
    if (this.forgotemailForm.valid) {

      let reqData = {
        email: this.forgotemailForm.value.phoneOrEmail,
       
      }
      this.user.forgot(reqData).subscribe((response: any) => {
        console.log(response);

      }, (error: any) => {
        console.log(error);
      }
      );

    // stop here if form is invalid
    // if (this.forgotemailForm.invalid) {
    //   return;
    // }
    // console.log(this.forgotemailForm.value)
  }


}
}