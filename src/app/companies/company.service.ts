import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Root } from './company.model';

@Injectable()
export class CompanyService {

    constructor(protected http: HttpClient) { }

    get(): Observable<Root> {
        return this.http.get<Root>(environment.apiUrl);
    }

}
