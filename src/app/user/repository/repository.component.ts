import {
  Component,
  inject,
  Input,
  OnChanges,
  OnInit,
  Query,
  Signal,
  SimpleChanges,
} from '@angular/core';
import { RepositoryType } from '../../user-type';
import { ApiService } from '../../services/api.service';
import { isExternalResource } from '@angular/compiler-cli/src/ngtsc/metadata';
import {
  QueryObserverLoadingErrorResult,
  QueryObserverLoadingResult,
  QueryObserverPendingResult,
  QueryObserverRefetchErrorResult,
  QueryObserverResult,
  QueryObserverSuccessResult,
} from '@ngneat/query';
import { Result } from '@ngneat/query/lib/types';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss'],
})
export class RepositoryComponent implements OnInit, OnChanges {
  @Input() githubUsername: string = '';

  PerRepoCount = 5;
  PerRepoOptions = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  CurrentPage = 1;
  private ngUnsubscribe = new Subject<void>();

  RepoData:
    | QueryObserverRefetchErrorResult<RepositoryType[], Error>
    | QueryObserverSuccessResult<RepositoryType[], Error>
    | QueryObserverLoadingErrorResult<RepositoryType[], Error>
    | QueryObserverLoadingResult<RepositoryType[], Error>
    | QueryObserverPendingResult<RepositoryType[], Error>
    | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.fetchRepositoryData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['githubUsername']) {
      this.fetchRepositoryData();
    }
  }

  fetchRepositoryData(): void {
    this.apiService
      .getRespository(this.githubUsername, this.CurrentPage, this.PerRepoCount)
      .result$.subscribe({
        next: (data) => {
          this.RepoData = data;
        },
      });
  }

  onChange(RepoCount: number): void {
    this.PerRepoCount = RepoCount;
    this.fetchRepositoryData();
  }

  IncreasePage(): void {
    console.log('Called');
    this.CurrentPage += 1;
    this.fetchRepositoryData();
  }

  DecreasePage(): void {
    if (this.CurrentPage > 1) {
      this.CurrentPage -= 1;
      this.fetchRepositoryData();
    }
  }

  protected readonly parseInt = parseInt;
  protected readonly Math = Math;
  protected readonly Array = Array;
}
