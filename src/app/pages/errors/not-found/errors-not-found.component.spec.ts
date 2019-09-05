import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsNotFoundComponent } from './errors-not-found.component';

describe('NotFoundComponent', () => {
    let component: ErrorsNotFoundComponent;
    let fixture: ComponentFixture<ErrorsNotFoundComponent>;


    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ErrorsNotFoundComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ErrorsNotFoundComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
