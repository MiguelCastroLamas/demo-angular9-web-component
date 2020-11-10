import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { HelloWorldComponent } from './shared/components/hello-world/hello-world.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [HelloWorldComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [HelloWorldComponent]
})
export class AppModule {
  constructor(
    private injector: Injector
  ) {
    const element = createCustomElement(HelloWorldComponent, { injector });
    customElements.define('web-component', element);
  }
  ngDoBootstrap() { }
}
