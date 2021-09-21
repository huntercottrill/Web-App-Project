import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchLayoutComponent } from './body/search-layout.component';
import { WatchlistLayoutComponent } from './lists/watchlist-layout.component';
import { PopularLayoutComponent } from './browse/popular-layout.component';
import { CrunchylistsComponent } from './lists/crunchylists.component';
import { SimulcastLayoutComponent } from './browse/simulcast-layout.component';

const routes: Routes = [
  { path: 'videos/popular', component: PopularLayoutComponent },
  { path: 'simulcasts/seasons/summer-2021', component: SimulcastLayoutComponent },
  { path: 'search', component: SearchLayoutComponent },
  { path: 'watchlist', component: WatchlistLayoutComponent },
  { path: 'crunchylists', component: CrunchylistsComponent, outlet: 'mylists' }, 
  { path: '', component: AppComponent, outlet: 'outlet1' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
