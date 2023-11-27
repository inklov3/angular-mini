import {Component, Input} from '@angular/core';
import {MenuItem} from "src/entity/type";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
   @Input() menu: MenuItem[] | undefined;
}
