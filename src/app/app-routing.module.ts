import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './companies/list/company-list.component';
import { OverviewComponent } from './companies/overview/overview.component';

const routes: Routes = [
  { path: '', component: CompanyListComponent },
  { path: 'overview', component: OverviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
