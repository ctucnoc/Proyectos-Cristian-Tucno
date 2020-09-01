import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../servicies/auth.service';
import { TokenService } from '../../servicies/token.service';
import { Router } from '@angular/router';
import { UserLogin } from '../../models/user-login';
import { UserJWT } from '../../models/user-jwt';
import { MultiCompany } from '../../models/multi-company';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  userLogin = new FormGroup({
    user_id: new FormControl(''),
    user_password: new FormControl(''),
    multi_company_id:new FormControl('')
  });

  companies: MultiCompany[] = [];

  usuario: UserLogin;
  isLogged = false;
  isLoginFail = false;
  roles: string[] = [];
  @Input() error: string | null;

  constructor(private authService: AuthService, private tokenService: TokenService, private router: Router) { }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }
  onLogin(): void {
    this.usuario = new UserLogin(this.userLogin.value.user_id, this.userLogin.value.user_password,this.userLogin.value.multi_company_id);
    this.authService.login(this.usuario).subscribe(data => {
      this.tokenService.setUserName(data.user_id);
      this.tokenService.setAuthorities(data.authorities);
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
      //window.location.reload();
      this.corectLogin(data);

    },
      (err: any) => {
        this.isLogged = false;
        this.isLoginFail = true;
        this.error = err.error.message;
      }
    );
  }
  private corectLogin(data: UserJWT) {
    this.tokenService.setToken(data.token);
    this.router.navigate(['/client/home']);
  }
  loadCompany(event): void {
    if (event.key === 'Enter' || event.keyCode === 13 || event.key === 'Tab' || event.keyCode === 9) {
      this.authService.findCompanyUser(this.userLogin.value.user_id).subscribe(data => {
        this.companies = data;
      });
  }

  }

}
