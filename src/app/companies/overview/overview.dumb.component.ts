import { Component, Input, OnInit } from '@angular/core';
import { Company } from '../company.model';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';
import { CompanyService } from '../company.service';
import { DataModel } from '../data.model'
@Component({
    selector: 'app-overview-dumb',
    templateUrl: './overview.dumb.component.html'
})


export class OverviewDumbComponent implements OnInit {

  @Input() companies: Company[];

  selectedCompany: Company; 
  chart = []
  id: number;
  companyOne = [];
  companyTwo = [];
  companyThree = [];
  companyFour = [];
  companyFive = [];
  company = []

 
  onChange(selectedId: any){
     
   this.selectedCompany = this.companies.find((company) => company.id == selectedId);
   this.updateCompany(selectedId)

  }

 
 updateCompany(id){

   if (id == 1 ) { 
  
   console.log(this.company = this.companyOne);

  }  else if (id == 2 ) {
    console.log (this.company = this.companyTwo)

  } else if (id == 3 ) {
    console.log(this.company = this.companyThree)

  }

 }

	constructor(private router: Router, private companyService: CompanyService)  {

  }

 onOpen() {
    this.router.navigate(['/']);
  }



 ngOnInit(){

   this.companyService.weekstats()
    .subscribe(res => { 

      let companyOne = res['companyOne'].map(res => res.value)
      let companyTwo = res['companyTwo'].map(res => res.value)
      let companyThree = res['companyThree'].map(res => res.value)
   
      this.companyOne = companyOne;
      this.companyTwo = companyTwo;
      this.companyThree = companyThree;


    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: ["M", "T", "W", "T", "F", "S", "S"],
        datasets: [
        { 
          label: 'Company One',
          data:  companyOne,
          borderColor: '#42bff4',
          fill: false 
        
        }
        // { 
        //   label: 'Company Two',
        //   data: companyTwo,
        //   borderColor: '#42bff4',
        //   fill: false 
        
        // },

        ]
      }, 

      options: {

        legend: {
          display: false
        },

        scales: {
          xAxes: [{
            display: true
          }],

          yAxes: [{
            display: false
          }]
        }
      }
    })

         })


}
  


}
