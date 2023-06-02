import {DoBootstrap, Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const customElement = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('micro-app', customElement);
  }
}
