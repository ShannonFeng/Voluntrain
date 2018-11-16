import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { LogoutComponent } from './logout.component';

import { testDeclarations } from '../test.declarations';
import { testProviders } from '../test.providers';
import { testImports } from '../test.imports';

describe('LogoutComponent', () => {
    let component: LogoutComponent;
    let fixture: ComponentFixture<LogoutComponent>;
    let de: DebugElement;

    beforeEach(async() => {
        TestBed.configureTestingModule({
            declarations: [ 
                LogoutComponent,
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
        fixture = TestBed.createComponent(LogoutComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;

        fixture.detectChanges();
    })

    it('should create the logout component', () => {
        expect(component).toBeTruthy();
    })

    it('should display the text "Logging out..."', () => {
        const compiled = de.nativeElement;
        expect(compiled.querySelector('p').textContent).toContain('Logging out...');
    });
})