import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
// import {JwtHelperService} from '@auth0/angular-jwt';
import {fromEventPattern, Observable} from 'rxjs';
import { CacheService } from './cache.service';
// import { UsersInfo } from '../PostReg/admin/administer-Users/user-admin.component';
import { LogToServerService } from './log-to-server.service';
import { UserShortModel } from '../_models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  baseUrlAuth: string;
  // jwtHelper = new JwtHelperService();
  decodedToken: any;

  constructor(private http: HttpClient,
              private cache: CacheService,
              public nglog: LogToServerService) {
    this.baseUrlAuth = this.cache.StorageGet('baseUrl') + '/auth';
  }

  // determines if there are any users defined in the database
  async checkAnyUsers() {
    const sql = this.baseUrlAuth + '/anyUsers';
    const areDBUsers = await this.http.get(sql).toPromise();
    return areDBUsers;
  }

  login(model: any) {
    return this.http.post(this.baseUrlAuth + '/login', model)
      .pipe(
        map((response: any) => {
          const user = response;
          if (user) {
            this.cache.StorageSet('token', user.token);
//            this.decodedToken = this.jwtHelper.decodeToken(user.token);
            console.log(this.decodedToken);
          } else {

          }
        }, (error) => {
            console.log(error);
            this.nglog.addLogMsg(`login (auth service) failed with error: ${error}`);
        }
        ));
  }

  register(model: any) {
    this.nglog.addLogMsg(`auth.service:55 register model = ${JSON.stringify(model)}`);
    return this.http.post(this.baseUrlAuth + '/register', model);
  }

  registerAdmin(model: any) {
    return this.http.post(this.baseUrlAuth + '/registerAdmin', model);
  }

  logOut() {
    this.cache.StorageDelete('token');
  }
}

