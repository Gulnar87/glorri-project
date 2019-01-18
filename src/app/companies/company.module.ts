import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CompanyService } from './company.service';
import { CompanyListComponent } from './list/company-list.component';
import { CompanyListDumbComponent } from './list/company-list.dumb.component';
import { OverviewComponent } from './overview/overview.component';
import { OverviewDumbComponent } from './overview/overview.dumb.component';
import { FusionChartsModule } from 'angular-fusioncharts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { ChartService } from './chart.service';


FusionChartsModule.fcRoot(
  FusionCharts,
  Charts,
  FusionTheme
)


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
        FusionChartsModule,
        NgbModule
    ],
    providers: [CompanyService, ChartService],
})
export class CompanyModule { }
