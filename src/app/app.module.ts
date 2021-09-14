import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopBarComponent } from './headers/top-bar.component';
import { BotBarComponent } from './footer/bot-bar.component';
import { CarouselComponent } from './body/carousel.component';
import { CarouselCardsComponent } from './body/carousel-cards.component';
import { TopPicksComponent } from './body/top-picks.component';
import { GridLayoutComponent } from './layout/grid-layout.component';
import { CarouselLayoutComponent } from './layout/carousel-layout.component';

@NgModule({
  declarations: [
    AppComponent, 
    TopBarComponent,
    BotBarComponent,
    CarouselComponent,
    CarouselCardsComponent,
    TopPicksComponent,
    GridLayoutComponent,
    CarouselLayoutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
