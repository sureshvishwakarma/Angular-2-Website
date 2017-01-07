import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { ServiceComponent } from './service.component';
import { ContactComponent } from './contact.component';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioData } from './portfolioData';
import {ServiceData} from './serviceData';
import { HeroService } from './hero.service';
import { AppRoutingModule } from './app-routing.module';
import { PortfolioDetails } from './portfolio-detail';

import { HighlightDirective  } from './highlight.directive';
import { filterPipe } from './statuses.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    ServiceComponent,
    HomeComponent,
    ContactComponent,
    PortfolioComponent,
    PortfolioDetails,
    HighlightDirective,
    filterPipe

  ],
  providers: [HeroService,ServiceData,filterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }