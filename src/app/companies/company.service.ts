import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Root } from './company.model';
import { map } from 'rxjs/operators';


@Injectable()
export class CompanyService {

    constructor(protected http: HttpClient) { }

    get(): Observable<Root> {
        return this.http.get<Root>(environment.apiUrl);
    }


      weekstats(){
    	return this.http.get('./assets/data.json')
    	 .pipe(map(result => result ))
    }
}
