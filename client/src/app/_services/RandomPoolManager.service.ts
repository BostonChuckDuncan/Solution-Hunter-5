import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RandomPoolManagerService {

constructor(private http: HttpClient) { }


}
