import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginService: LoginService;
  router: Router;
  showForgetPasswordForm: Boolean = false;
  passwordResetResult: Boolean = false;
  resetMessage: String ="";
  constructor(loginService: LoginService,
              router: Router) {
    this.loginService = loginService;
    this.router = router;
   }
  loginForm: any;
  forgotPassword: any;
  ngOnInit(): void {
      this.loginForm = new FormGroup({
         userName: new FormControl(),
         password: new FormControl(),
         rememberMe: new FormControl(false)
      });
  }

  validateUser (userData: any) : void {
    console.log(userData);
    if (userData.userName == "Parnik" && userData.password == "Gaurav") {
      this.loginService.loggedInUser = true;
      console.log(userData);
      this.router.navigate(['/home']);
    }
  }

  forgotPasswordPage() {
    this.forgotPassword = new FormGroup ({
      userEmail : new FormControl()
    });
    this.showForgetPasswordForm =true;
  }

  resetPassword (userEmail: string) {
      console.log(userEmail);
      this.passwordResetResult = true;
      this.resetMessage = "You will get a new password on your registered email Id";
  }

  showLoginPage() {
    this.showForgetPasswordForm =false;
  }

}
