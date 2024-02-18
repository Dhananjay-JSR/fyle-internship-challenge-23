import { UserDetailsComponent } from './user-details.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('User Screen Component', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDetailsComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render input and search button', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input')).toBeTruthy();
    expect(compiled.querySelector('button')).toBeTruthy();
  });
});
