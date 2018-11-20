import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { CreateEventComponent } from './create-event.component';

import { testDeclarations } from '../test.declarations';
import { testProviders } from '../test.providers';
import { testImports } from '../test.imports';

describe('CreateEventComponent', () => {
    let component: CreateEventComponent;
    let fixture: ComponentFixture<CreateEventComponent>;
    let de: DebugElement;

    beforeEach(async() => {
        TestBed.configureTestingModule({
            declarations: [ 
                CreateEventComponent,
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
        fixture = TestBed.createComponent(CreateEventComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;

        fixture.detectChanges();
    })

    it('should create the create event component', () => {
        expect(component).toBeTruthy();
    })
})