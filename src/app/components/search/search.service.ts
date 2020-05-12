import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../user/user.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private user: BehaviorSubject<User> = new BehaviorSubject(undefined)

  constructor(private http: HttpClient) { }

  getUser(): Observable<User> {
    return this.user.asObservable();
  }
}
