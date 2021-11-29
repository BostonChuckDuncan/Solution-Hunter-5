import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CacheService } from '../_services/cache.service';

@Component({
  selector: 'app-splashpage',
  templateUrl: './SplashPage.component.html',
  styleUrls: ['./SplashPage.component.css']
})
export class SplashPageComponent implements OnInit {

  constructor(private cache: CacheService) { }

  ngOnInit() {
    this.cache.setBaseUrl(environment.apiUrl);
    console.log('Splash Pre');
  }

}
