import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LogToServerService {
  baseURL = environment.apiUrl;
  storeValue!: string;
  data = { Id: '0', message: 'none'  };

constructor(private http: HttpClient) {
}

 public addLogMsg(data: string) {
  // get the Date string up to the GMT
  let d = new Date().toString();
  const idx = d.indexOf(' GMT');
  d = d.slice(0, idx);

   // put Date on the front to the data
  const model = { Id: '0', message: d + '-' + data };

  console.log(data);
  const sql = this.baseURL + 'LogToServer/WriteAngularLogMessage';
  this.http.post(sql, model).subscribe(
    (result) => {
      console.log(`addLogMsg sent ${result}`);
    },
    (error) => {
      console.log(error);
    } );
 }
}
