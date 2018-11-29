import { Component, ViewChild, Renderer2, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  @ViewChild('description') bio: any;
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  testFunction() {
    console.log("hello");
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('Some text in div');
    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.bio._element.nativeElement, div);
  }

}
