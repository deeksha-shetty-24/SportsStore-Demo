import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbarheader',
  templateUrl: './navbarheader.component.html'
})

export class NavbarHeaderComponent {
  @Input() title;
}