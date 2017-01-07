import { Component, OnInit } from '@angular/core';

import { Hero }        from './hero';
import { HeroService } from './hero.service';

@Component({
        moduleId: module.id,
        selector : 'portfolo-list',
        templateUrl : 'portfolio.component.html'
        
    })

export class PortfolioComponent { 

heroes: Hero[] = [];

constructor (private heroService:HeroService){}


ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }



    }