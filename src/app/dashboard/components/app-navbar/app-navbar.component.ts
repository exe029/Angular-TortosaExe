
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss']
})
export class AppNavbarComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }


  logout(){
    this.auth.logout();
  }

}
