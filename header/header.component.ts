import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { User } from '../Model/User';
import { Subscription } from 'rxjs';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone:true,
  imports:[NgIf, RouterModule]
})
export class HeaderComponent implements OnInit, OnDestroy{
  authService: AuthService = inject(AuthService);
  isLoggedIn: boolean = false;
  private userSubject: Subscription | undefined;

  ngOnInit(){
    this.userSubject = this.authService.user.subscribe((user: User) => {
      this.isLoggedIn = user ? true : false;
    });
  }

  onLogout(){
    this.authService.logout();
  }

  ngOnDestroy(){
    this.userSubject?.unsubscribe();
  }
}
