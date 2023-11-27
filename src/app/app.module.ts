import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from "src/component/navbar/navbar.component";
import {BackTopComponent} from "src/component/back-top/back-top.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BackTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
