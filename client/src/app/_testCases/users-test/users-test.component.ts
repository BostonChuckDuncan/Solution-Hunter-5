import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserDto } from 'src/app/_dtos/userDto';
import { environment } from 'src/environments/environment';
import { textChangeRangeIsUnchanged } from 'typescript';

@Component({
  selector: 'app-users-test',
  templateUrl: './users-test.component.html',
  styleUrls: ['./users-test.component.css']
})
export class UsersTestComponent implements OnInit {
  baseUrl: any;

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.baseUrl = environment.apiUrl;
    }

  getName() {    
    var result = this.http.get<UserDto>(this.baseUrl + 'users/1')
    .subscribe({
      next: (response: UserDto) => {
        let name = response ?? '';
        this.toastr.info(`user name returned in test: ${ name }`);
      },
      error: (err) => {this.toastr.error("Error: "+ err)}
    })
  }
}
