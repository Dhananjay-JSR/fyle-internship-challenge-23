import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap, throwError } from 'rxjs';
import { RepositoryType, UserType } from '../user-type';
import { injectQuery } from '@ngneat/query';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  #query = injectQuery();

  constructor(private httpClient: HttpClient) {}

  getUser(githubUsername: string) {
    return this.#query({
      queryKey: ['User', githubUsername],
      staleTime: 1000 * 60 * 60 * 24,
      queryFn: () => {
        return this.httpClient.get<UserType>(
          `https://api.github.com/users/${githubUsername}`,
          {},
        );
      },
    });
  }

  getRespository(githubUsername: string, page: number, per_page: number) {
    return this.#query({
      queryKey: ['Repository', githubUsername, page, per_page],
      staleTime: 1000 * 60 * 60 * 24,
      queryFn: () => {
        return this.httpClient.get<RepositoryType[]>(
          `https://api.github.com/users/${githubUsername}/repos?page=${page}&per_page=${per_page}`,
          {},
        );
      },
    });
  }
}
