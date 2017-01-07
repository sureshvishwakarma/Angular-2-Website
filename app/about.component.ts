import { Component,OnInit, Output, EventEmitter } from '@angular/core';
import { filterPipe } from './statuses.pipe';


import 'rxjs/Rx';
@Component({
    moduleId: module.id,
    selector : 'app-directory',
    templateUrl: 'about.component.html',


})



export class AboutComponent implements OnInit{

    color: string;



ninjas = [
    { name: 'eat', status: 'started' }, 
    { name: 'sleep', status: 'completed' }, 
    { name: 'dance', status: 'completed' }, 
    { name: 'party', status: 'started' }, 
    { name: 'work', status: 'completed' }, 
    { name: 'play', status: 'started' }, 
    { name: 'swim', status: 'started' }, 
    { name: 'earn', status: 'completed' }, 
    { name: 'charm', status: 'started' }, 
    { name: 'code', status: 'completed' }, 
    { name: 'record', status: 'started' }
 ];

constructor(){}

ngOnInit(){}
}


