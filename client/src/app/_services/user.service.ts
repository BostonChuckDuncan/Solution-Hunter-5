import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CacheService } from './cache.service';
import { LogToServerService } from './log-to-server.service';
import { Observable } from 'rxjs';
import { UserShortModel } from '../_models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string;

  constructor(private http: HttpClient,
              private cache: CacheService,
              public nglog: LogToServerService) {
    this.baseUrl = this.cache.StorageGet('baseUrl') + '/users';
    }

  updateUser(model: UserShortModel) {
    return this.http.put(this.baseUrl + '/updateUser', model);
  }

  deleteUser(userName: string)  {
    const url = this.baseUrl + '/' + userName;
    return this.http.delete(url);
  }

  getAllUserNames(): Observable<any> {
    const url = this.cache.getBaseUrl() + 'account/usernames';
    return this.http.get(url);
    }

  getUserByName(name: string): Observable<any> {
    const url = this.cache.StorageGet('baseUrl') + '/auth/user/' + name;
    return this.http.get(url);
  }
}
