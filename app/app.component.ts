import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
  
  
    <header class="box-header">
    <div class="col-md-3">
            <div class="box-logo">
                <a href="index.html"><img src="img/logo.png" width="80" alt="Logo"></a>
            </div>
            </div>
            <!-- box-nav -->

    <div class="col-md-9">
    <nav class="navbar  ">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
         
        </div>
        <div id="navbar" class="navbar-collapse collapse">
         
          <ul class="nav navbar-nav navbar-right">
            <li><a href="../navbar/">Intro</a></li>
             <li class="active"> <a routerLink="/home" routerLinkActive="active">Home</a></li>
            <li><a routerLink="/service" routerLinkActive="active">Services</a></li>
            <li><a routerLink="/portfolio" routerLinkActive="active">Portfolios</a></li>

             <li class="active"> <a routerLink="/about" routerLinkActive="active">About Us</a></li>
            <li><a routerLink="/contact" routerLinkActive="active">Contact Us</a></li>
            
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
    </div>
            <!-- box-primary-nav-trigger -->
        </header>

         
<router-outlet></router-outlet>
        

  
  `
  
  
  
  ,
})
export class AppComponent  { name = 'Angular'; }
