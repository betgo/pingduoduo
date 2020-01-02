import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScrollableTabComponent } from './component/scrollable-tab/scrollable-tab.component';
import { ImageSliderComponent } from './component/image-slider/image-slider.component';
import { HorizontalGridComponent } from './component/horizontal-grid/horizontal-grid.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { Ago } from './component/pipe/ago.pipe.ts/ago.pipe.ts.component';

@NgModule({
  declarations: [
    AppComponent,
    Ago.Pipe.TsComponent,

  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
