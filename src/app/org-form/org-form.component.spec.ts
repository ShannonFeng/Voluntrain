import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { OrgFormComponent } from './org-form.component';

import { testDeclarations } from '../test.declarations';
import { testProviders } from '../test.providers';
import { testImports } from '../test.imports';

describe('OrgFormComponent', () => {
    let component: OrgFormComponent;
    let fixture: ComponentFixture<OrgFormComponent>;
    let de: DebugElement;

    beforeEach(async() => {
        TestBed.configureTestingModule({
            declarations: [ 
                OrgFormComponent,
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
        fixture = TestBed.createComponent(OrgFormComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;

        fixture.detectChanges();
    })

    it('should create the org-form component', () => {
        expect(component).toBeTruthy();
    })
})