import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  QueryObserverLoadingErrorResult,
  QueryObserverLoadingResult,
  QueryObserverPendingResult,
  QueryObserverRefetchErrorResult,
  QueryObserverSuccessResult,
} from '@ngneat/query';
import { RepositoryType, UserType } from '../../user-type';
import { Subject, switchMap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  @ViewChild('input_search') input: ElementRef<HTMLInputElement> | undefined;
  InputValue = 'johnpapa';
  params: string | null = null;
  readonly window = window;
  private ngUnsubscribe = new Subject<void>();

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.params = this.route.snapshot.params['username'];
  }

  UserData:
    | QueryObserverRefetchErrorResult<UserType, Error>
    | QueryObserverSuccessResult<UserType, Error>
    | QueryObserverLoadingErrorResult<UserType, Error>
    | QueryObserverLoadingResult<UserType, Error>
    | QueryObserverPendingResult<UserType, Error>
    | null = null;

  ngOnInit() {
    this.route.paramMap
      .pipe(
        takeUntil(this.ngUnsubscribe),
        switchMap((params) => {
          this.InputValue = params.get('username') || '';
          return this.apiService.getUser(this.InputValue).result$;
        }),
      )
      .subscribe({
        next: (data) => {
          this.UserData = data;
        },
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  OnClickFn = () => {
    if (!this.InputValue) {
      if (this.input) {
        this.input.nativeElement.focus();
      }
    } else {
      this.router.navigateByUrl(`/user/${this.InputValue}`);
    }
  };
}
