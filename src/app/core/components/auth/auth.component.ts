import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {
  public subscription = new Subscription();
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authenticate();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public authenticate(): void {
    this.subscription.add(
      this.authService
        .authenticate('letscode', 'lets@123')
        .subscribe((data) => {
          sessionStorage.setItem('token', data);
          this.router.navigate(['/home']);
        })
    );
  }
}
