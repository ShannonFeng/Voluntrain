import { async, ComponentFixture, TestBed, inject, tick, fakeAsync } from '@angular/core/testing';

import { DebugElement } from '@angular/core';

import { HomeComponent } from './home.component';
import { UserService } from '../user.service';
import { HttpClientModule } from '@angular/common/http'; 

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let de: DebugElement;

    beforeEach(async() => {
        TestBed.configureTestingModule({
            declarations: [ 
                HomeComponent,
            ],
            providers: [
                UserService
            ],
            imports: [
                HttpClientModule,
            ]
        })
        .compileComponents();
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;

        fixture.detectChanges();
    })

    it('should create the home component', () => {
        expect(component).toBeTruthy();
    })

    it('should display the h1 tag with text "Welcome to Voluntrain!"', () => {
        const compiled = de.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Welcome to Voluntrain!');
    });
})