import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ViewPanelComponent } from './view-panel.component';
import { RepositoryType } from '../../../user-type';

describe('RepoComponent', () => {
  let component: ViewPanelComponent;
  let fixture: ComponentFixture<ViewPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewPanelComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display repository name', () => {
    component.repo = {
      name: 'Test Repo',
      html_url: 'https://dhananjaay.dev',
      description: 'Test Description',
      topics: ['topic1', 'topic2'],
    } as RepositoryType;
    fixture.detectChanges();
    const repoNameElement = fixture.debugElement.query(By.css('h2#repo_name'));
    expect(repoNameElement.nativeElement.textContent).toContain('Test Repo');
  });
  //
  it('should display repository description', () => {
    component.repo = {
      name: 'Test Repo',
      html_url: 'https://dhananjaay.dev',
      description: 'Test Description',
      topics: ['topic1', 'topic2'],
    } as RepositoryType;
    fixture.detectChanges();
    const repoDescriptionElement = fixture.debugElement.query(
      By.css('p#repo_desc'),
    );
    expect(repoDescriptionElement.nativeElement.textContent).toContain(
      'Test Description',
    );
  });

  it('should have a link to view on GitHub', () => {
    component.repo = {
      name: 'Test Repo',
      html_url: 'https://dhananjaay.dev',
      description: 'Test Description',
      topics: ['topic1', 'topic2'],
    } as RepositoryType;
    fixture.detectChanges();
    const githubLink = fixture.debugElement.query(By.css('a#repo_url'));
    expect(githubLink.nativeElement.getAttribute('href')).toBe(
      'https://dhananjaay.dev',
    );
    expect(githubLink.nativeElement.textContent).toContain('View on GitHub');
  });

  it('should display repository topics', () => {
    component.repo = {
      name: 'Test Repo',
      html_url: 'https://dhananjaay.dev',
      description: 'Test Description',
      topics: ['topic1', 'topic2'],
    } as RepositoryType;
    fixture.detectChanges();
    const topicElements = fixture.debugElement.queryAll(
      By.css('div#repo_tags'),
    );
    expect(topicElements.length).toBe(2);
    expect(topicElements[0].nativeElement.textContent).toContain('topic1');
    expect(topicElements[1].nativeElement.textContent).toContain('topic2');
  });
});
