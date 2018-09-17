import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../service/token.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private router: Router, private tokenService: TokenService, private httpClient: HttpClient) { }

  ngOnInit() {
  }

  login(): void {
    const loginToken = btoa(`${this.username}:${this.password}`);
    sessionStorage.setItem('token', loginToken);
    this.httpClient.get('http://localhost:8080/user/profile').subscribe(
      () => {
        this.router.navigate(['/']);
        this.tokenService.tokenEmitter.next(loginToken);
      },
      () => {
        console.log('smthg err');
      },
      () => {}
    );
  }
}
