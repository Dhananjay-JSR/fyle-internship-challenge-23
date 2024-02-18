import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryComponent } from './repository.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RepositoryComponent', () => {
  let component: RepositoryComponent;
  let fixture: ComponentFixture<RepositoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepositoryComponent],
      imports: [HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(RepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
