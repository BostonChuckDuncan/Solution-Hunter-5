import { BehaviorSubject } from 'rxjs';
import { UserDto } from './../_dtos/userDto';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { CacheService } from './cache.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService implements OnInit {
  baseUrl!: string;
  accountLoginKnown = new BehaviorSubject('');
  accountLoginSuccess = new BehaviorSubject(false);

  constructor(private http: HttpClient, private cache: CacheService,
    private toastr: ToastrService, private route: Router) { }

  ngOnInit(): void {
    this.baseUrl = this.cache.getBaseUrl();
  }

  async loginAsync(user: string, pass: string) {
    this.baseUrl = this.cache.getBaseUrl();

    var dto: UserDto = new UserDto(user, pass, '', '' );

    this.http.post<UserDto>(this.baseUrl + 'account/login', dto).subscribe(
      (response: UserDto) => {
        this.toastr.success("Logged In Successfully", "", { positionClass: 'toast-bottom-right' });
        var username = response.Username;
        var token = response.Token;
        var knownAs = response.KnownAs;
        var roles = this.cache.StorageGet('roles');
        var rolesList = JSON.parse(roles!);
        this.cache.cacheUser(username, token, rolesList, knownAs);

        for (var i = 0; i < rolesList.length; i++) {
          this.cache.setUserLoginStatus(rolesList[i]);
        }
        this.cache.StorageSet('knownAs', knownAs);
        this.accountLoginKnown.next(knownAs);
        this.route.navigateByUrl('/splashPagePost');
      },
       (error) => {
          this.toastr.error("Invalid Login", "",  { positionClass: 'toast-bottom-right' });
          this.cache.setUserLoginStatus('NavVisitor');
          this.accountLoginKnown.next('');
          this.route.navigateByUrl('/splashPage');
        }
      );
    }
  }

