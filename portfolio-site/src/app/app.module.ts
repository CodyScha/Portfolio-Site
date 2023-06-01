import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HeadshotComponent } from './headshot/headshot.component';
import { SvgBkgComponent } from './svg-bkg/svg-bkg.component';
import { IntroPaneComponent } from './intro-pane/intro-pane.component';
import { NameplateComponent } from './nameplate/nameplate.component';
import { SocialsPaneComponent } from './socials-pane/socials-pane.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeadshotComponent,
    SvgBkgComponent,
    IntroPaneComponent,
    NameplateComponent,
    SocialsPaneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
