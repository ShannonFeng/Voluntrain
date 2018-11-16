import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { SearchPageComponent } from './search-page.component';

import { testDeclarations } from '../test.declarations';
import { testProviders } from '../test.providers';
import { testImports } from '../test.imports';

describe('SearchPageComponent', () => {
    let component: SearchPageComponent;
    let fixture: ComponentFixture<SearchPageComponent>;
    let de: DebugElement;

    beforeEach(async() => {
        TestBed.configureTestingModule({
            declarations: [ 
                SearchPageComponent,
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
        fixture = TestBed.createComponent(SearchPageComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;

        fixture.detectChanges();
    })

    it('should create the search page component', () => {
        expect(component).toBeTruthy();
    })
})