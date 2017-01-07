import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
 import { Observable }        from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';



@Injectable ()

export class PortfolioData {

    constructor (private http : Http){}

    getService(){

        return this.http.get('/app/portfolio.json').map(( res : Response) => res.json());


    }


}