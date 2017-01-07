import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent }  from './about.component';
import { ServiceComponent }    from './service.component';
import { HomeComponent }    from './home.component';
import { ContactComponent }    from './contact.component';
import { PortfolioComponent }    from './portfolio.component';
import { PortfolioDetails }    from './portfolio-detail';

    

 const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
       { path: 'portfolio', component: PortfolioComponent },
      { path: 'service', component: ServiceComponent },
        { path: 'contact', component: ContactComponent },
         { path: 'detail/:id', component: PortfolioDetails },

        
     
     
    ];

    
  @NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
