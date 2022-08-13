import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/userService/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user: UserService, private router: Router,
    private snackBar: MatSnackBar,) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {

      let reqData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
      this.user.login(reqData).subscribe((response: any) => {
        console.log(response);
        localStorage.setItem("token", response.token);
        this.router.navigateByUrl("/dashboard/getallnotes");
        this.snackBar.open('Login successful..', '', {
          duration: 2000,
          verticalPosition: 'bottom',
          horizontalPosition: 'left'
        })

      }, (error: any) => {
        console.log(error);
        this.snackBar.open('Please enter valid credentials', '', {
          duration: 2000,
          verticalPosition: 'bottom',
          horizontalPosition: 'left'

        });
      }
      );


    }

  }
}