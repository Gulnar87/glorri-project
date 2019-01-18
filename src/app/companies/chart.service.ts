import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';


@Injectable()
export class ChartService {


 constructor( protected http: HttpClient)  {}

    weekstats(){
    	return this.http.get('./assets/data.json')
    	 .pipe(map(result => result ))
    }

}