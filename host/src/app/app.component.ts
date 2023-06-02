import { Component } from '@angular/core';
import {WebComponentWrapperOptions} from '@angular-architects/module-federation-tools';

@Component({
  selector: 'app-root',
  template: `
    <mft-wc-wrapper [options]="item"></mft-wc-wrapper>
  `
})
export class AppComponent {
  item: WebComponentWrapperOptions = {
    type: 'module',
    remoteEntry: 'http://localhost:4201/remoteEntry.js',
    elementName: 'micro-app',
    exposedModule: './web-components'
  }
}
