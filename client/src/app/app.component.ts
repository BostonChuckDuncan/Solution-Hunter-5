import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CacheService } from './_services/cache.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Solution Hunter';
  users: any;
  baseUrl: any;

  constructor(private http: HttpClient, private cache: CacheService) { }

  ngOnInit(): void {
    this.baseUrl = environment.apiUrl;
    // this.getUsers();
    this.cache.setUserLoginStatus('navVisitor');
  }

  // getUsers() {
  //   this.http.get(this.baseUrl + 'users').subscribe( response => {
  //       this.users = response;
  //     },
  //     error => {
  //       console.log(error)
  //     });
  // }
}

