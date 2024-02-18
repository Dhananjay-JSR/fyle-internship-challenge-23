import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, tap, throwError} from 'rxjs';
import {UserType} from "../user-type";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getUser(githubUsername: string) {
    return this.httpClient.get<UserType>(`https://api.github.com/users/${githubUsername}`) ;
  }


  // implement getRepos method by referring to the documentation. Add proper types for the return type and params
}
