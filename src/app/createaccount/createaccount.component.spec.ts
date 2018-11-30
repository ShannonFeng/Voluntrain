import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { CreateaccountComponent } from './createaccount.component';

import { testDeclarations } from '../test.declarations';
import { testProviders } from '../test.providers';
import { testImports } from '../test.imports';

describe('CreateaccountComponent', () => {
    let component: CreateaccountComponent;
    let fixture: ComponentFixture<CreateaccountComponent>;
    let de: DebugElement;

    beforeEach(async() => {
        TestBed.configureTestingModule({
            declarations: [
                CreateaccountComponent,
                testDeclarations
            ],
            providers: [
                testProviders
            ],
            imports: [
                testImports
            ]
        })
        .compileComponents();
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(CreateaccountComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;

        fixture.detectChanges();
    })

    it('should create the createaccount component', () => {
        expect(component).toBeTruthy();
    })

    it('should make sure form is valid after entering required info', () => {
        expect(component.signupForm.valid).toBeFalsy();

        component.signupForm.controls['name'].setValue("Mr. Create Account Test");
        component.signupForm.controls['email'].setValue("test@test.com");
        component.signupForm.controls['zipcode'].setValue("98765");
        component.signupForm.controls['password'].setValue("123cats456");
        expect(component.signupForm.valid).toBeTruthy();
    });

    it('should make sure form is invalid', () => {
        component.signupForm.controls['name'].setValue("");
        component.signupForm.controls['email'].setValue("test.com");
        component.signupForm.controls['zipcode'].setValue("9876");
        component.signupForm.controls['password'].setValue("");
        expect(component.signupForm.valid).toBeFalsy();
    });


})
