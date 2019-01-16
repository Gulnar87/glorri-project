import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Company, Root } from '../company.model';
import { CompanyService } from '../company.service';

@Component({
    selector: 'app-company-list',
    templateUrl: './company-list.component.html'
})

export class CompanyListComponent implements OnInit {

    companies: Company[];

    constructor(private companyService: CompanyService) { }

    ngOnInit() {

        this.companyService.get()
            .subscribe(
                (response: Root) => {

                    this.companies = response.companies;
                    this.companies.sort((a: Company, b: Company) => b.monthRevenue - a.monthRevenue);

                },
                (error: HttpErrorResponse) => console.log(error)
            );
    }

}
