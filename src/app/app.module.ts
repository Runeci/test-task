import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { SummaryPageComponent } from './core/components/summary-page/summary-page.component';
import { ListPageComponent } from './core/components/list-page/list-page.component';
import { HeadingCardComponent } from './core/components/summary-page/heading-card/heading-card.component';
import { ContentCardComponent } from './core/components/summary-page/content-card/content-card.component';
import { ListTableComponent } from './core/components/list-page/list-table/list-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SummaryPageComponent,
    ListPageComponent,
    HeadingCardComponent,
    ContentCardComponent,
    ListTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
