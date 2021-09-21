import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopBarComponent } from './headers/top-bar.component';
import { BotBarComponent } from './footer/bot-bar.component';
import { CarouselComponent } from './body/carousel.component';
import { CarouselCardsComponent } from './body/carousel-cards.component';
import { TopPicksComponent } from './body/top-picks.component';
import { FlexLayoutComponent } from './layout/flex-layout.component';
import { CarouselLayoutComponent } from './layout/carousel-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './body/search-page.component';
import { SearchLayoutComponent } from './body/search-layout.component';
import { MyListsComponent } from './lists/mylists.component';
import { WatchlistLayoutComponent } from './lists/watchlist-layout.component';
import { PopularLayoutComponent } from './browse/popular-layout.component';
import { PopularComponent } from './browse/popular.component';
import { CrunchylistsComponent } from './lists/crunchylists.component';
import { SimulcastLayoutComponent } from './browse/simulcast-layout.component';
import { SimulcastComponent } from './browse/simulcast.component';

@NgModule({
  declarations: [
    AppComponent, 
    TopBarComponent,
    BotBarComponent,
    CarouselComponent,
    CarouselCardsComponent,
    TopPicksComponent,
    FlexLayoutComponent,
    CarouselLayoutComponent,
    SearchComponent,
    SearchLayoutComponent,
    MyListsComponent,
    WatchlistLayoutComponent,
    PopularComponent,
    PopularLayoutComponent,
    CrunchylistsComponent,
    SimulcastLayoutComponent,
    SimulcastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

