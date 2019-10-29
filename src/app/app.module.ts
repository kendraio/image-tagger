import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { NgxImageTaggerComponent, NgxImageTaggerModule } from '@kendraio/ngx-image-tagger';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    NgxImageTaggerModule
  ],
  providers: [],
  entryComponents: [NgxImageTaggerComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const imageTagger = createCustomElement(NgxImageTaggerComponent, { injector });
    customElements.define('kendraio-image-tagger', imageTagger);
  }

  ngDoBootstrap() {}
}
