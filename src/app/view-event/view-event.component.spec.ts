import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { ViewEventComponent } from './view-event.component';

import { testDeclarations } from '../test.declarations';
import { testProviders } from '../test.providers';
import { testImports } from '../test.imports';

describe('ViewEventComponent', () => {
    let component: ViewEventComponent;
    let fixture: ComponentFixture<ViewEventComponent>;
    let de: DebugElement;

    beforeEach(async() => {
        TestBed.configureTestingModule({
            declarations: [ 
                ViewEventComponent,
                testDeclarations
            ],
            providers: [
                testProviders,
            ],
            imports: [
                testImports
            ]
        })
        .compileComponents();
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(ViewEventComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;

        fixture.detectChanges();
    })

    it('should create the view event component', () => {
        expect(component).toBeTruthy();
    })
})