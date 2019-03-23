import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCreateArticleComponent } from './blog.create.article.component';

describe('BlogCreateArticleComponent', () => {
  let component: BlogCreateArticleComponent;
  let fixture: ComponentFixture<BlogCreateArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogCreateArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCreateArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
