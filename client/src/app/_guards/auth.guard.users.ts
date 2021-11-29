import { AuthenticateService } from '../_services/authenticate.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserNotificationService } from '../_services/user-notification.service';
import { CacheService } from '../_services/cache.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardUsers implements CanActivate {
  constructor(
    private authService: AuthenticateService,
    private router: Router,
    private notify: UserNotificationService,
    private cache: CacheService
  ) {}

  // canActivate(route: ActivatedRouteSnapshot,
  //             state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {
  canActivate(): boolean {
    if (
      this.cache.StorageGet('token') !== null &&
      (this.cache.StorageGetBool('User') === true ||
        this.cache.StorageGetBool('Admin') === true)
    ) {
      return true;
    }

    this.notify.postMessage('Must login to access this path', 6);
    this.router.navigate(['/splashPage']);
    return false;
  }
}
