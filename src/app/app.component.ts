import {Component, OnInit} from '@angular/core';
import {MenuItem} from "src/entity/type";
import getMenu from "./menu";

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  menu: MenuItem[] = getMenu();
  updateMenu() {
    this.menu = getMenu();
  }

  ngOnInit(): void {
    this.updateMenu()
  }

}
