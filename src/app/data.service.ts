import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  public id=new BehaviorSubject(1);
  public data=new BehaviorSubject('');

  

  constructor(private http:HttpClient) { }
    getData()
  {
    return this.http.get('https://reqres.in/api/users' );
  }
  }

