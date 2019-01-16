import { Component, Input } from '@angular/core';
import { Company } from '../company.model';

@Component({
    selector: 'app-company-list-dumb',
    templateUrl: './company-list.dumb.component.html'
})

export class CompanyListDumbComponent {

    @Input() companies: Company[];

}
