import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from './@core/config/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router, private titleName: Title, private location: Location, private _authService: AuthService){
    this.titleName.setTitle("Zuper");
    const currentUrl = this.location.path();
    if(currentUrl){
      this._authService.setLogin();
      this.router.navigate([currentUrl]);
    }else {
      this.router.navigate(['/login']);
    }
  }
}
