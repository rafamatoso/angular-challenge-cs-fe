import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { User } from "../user/user.model";

@Injectable({
  providedIn: "root",
})
export class SearchService {
  private user: BehaviorSubject<User> = new BehaviorSubject(undefined);
  baseUrl: string = "https://api.github.com/users/";

  constructor(private http: HttpClient) {}

  getUser(): Observable<User> {
    return this.user.asObservable();
  }

  searchUser(userName: string) {
    this.user.next(undefined);
    this.http
      .get(`${this.baseUrl}${userName}`)
      .pipe(
        catchError(() => {
          return of(null);
        })
      )
      .subscribe((res) => {
        if (res) {
          this.getUserRepos(userName, res);
        } else {
          this.user.next(res);
        }
      });
  }

  getUserRepos(userName: string, user: User): Observable<any> {
    const repos = new BehaviorSubject(null);
    this.http
      .get(`${this.baseUrl}${userName}/repos`)
      .pipe(
        catchError(() => {
          return of(null);
        })
      )
      .subscribe((res) => {
        user["repos"] = res;
        user.repos &&
          user.repos.sort((a: any, b: any) => {
            return b.stargazers_count - a.stargazers_count;
          });
        this.user.next(user);
      });
    return repos.asObservable();
  }
}
