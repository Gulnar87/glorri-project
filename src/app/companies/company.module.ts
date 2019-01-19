import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CompanyService } from './company.service';
import { CompanyListComponent } from './list/company-list.component';
import { CompanyListDumbComponent } from './list/company-list.dumb.component';
import { OverviewComponent } from './overview/overview.component';
import { OverviewDumbComponent } from './overview/overview.dumb.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        CompanyListComponent,
        CompanyListDumbComponent,
        OverviewComponent,
        OverviewDumbComponent,

    ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        NgbModule
    ],
    providers: [CompanyService],
})
export class CompanyModule { }
