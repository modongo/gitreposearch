import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitrepoformComponent } from './gitrepoform.component';

describe('GitrepoformComponent', () => {
  let component: GitrepoformComponent;
  let fixture: ComponentFixture<GitrepoformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitrepoformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitrepoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
