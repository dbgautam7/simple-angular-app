// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'simple-angular-app';
// }
import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from './Services/auth.service';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone:true,
  imports:[HeaderComponent, RouterModule, FooterComponent]
})
export class AppComponent implements OnInit{
  authService: AuthService = inject(AuthService);
  title = 'angular-http-client';

  ngOnInit(){
    this.authService.autoLogin();
  }
}
