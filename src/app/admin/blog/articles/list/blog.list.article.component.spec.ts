import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogListArticleComponent } from './blog.list.article.component';

describe('BlogListArticleComponent', () => {
  let component: BlogListArticleComponent;
  let fixture: ComponentFixture<BlogListArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogListArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogListArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
