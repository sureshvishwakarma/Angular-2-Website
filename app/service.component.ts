import { Component, OnInit } from '@angular/core';

import { Hero }        from './hero';
import { HeroService } from './hero.service';

    @Component({
      moduleId: module.id,
        selector : 'service-list',
      templateUrl: 'service-list.html'

    })
    export class ServiceComponent implements OnInit { 
      
  service: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(service => this.service = service);
  }


    }