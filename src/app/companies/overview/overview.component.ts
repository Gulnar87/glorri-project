import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company, Root } from '../company.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html'
})

export class OverviewComponent implements OnInit {

constructor(private companyService: CompanyService) { }

companies: Company[];

	ngOnInit(){
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
