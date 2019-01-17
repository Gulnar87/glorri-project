import { Component, Input, OnInit } from '@angular/core';
import { Company } from '../company.model';
import { Router } from '@angular/router';


@Component({
    selector: 'app-overview-dumb',
    templateUrl: './overview.dumb.component.html'
})


export class OverviewDumbComponent implements OnInit {

  @Input() companies: Company[];

  selectedCompany: Company; 

  dataSource: any;

 
  onChange(selectedId: any){
     
   this.selectedCompany = this.companies.find((company) => company.id == selectedId);

  }


	constructor(private router: Router)  {

    this.dataSource = {
      "chart": {
        "caption": "",
        "subCaption": "",
        "xAxisName": "",
        "yAxisName": "",
        "showValues": "0",
        "theme": "fusion"
      },
      "annotations": {
        "groups": [{
          "id": "anchor-highlight",
          "items": [{
            "id": "high-star",
            "type": "circle",
            "x": "$dataset.0.set.2.x",
            "y": "$dataset.0.set.2.y",
            "radius": "12",
            "color": "#6baa01",
            "border": "2",
            "borderColor": "#f8bd19"
          },
          {
            "id": "label",
            "type": "text",
            "text": "Highest Revenue",
            "fillcolor": "#6baa01",
            "rotate": "90",
            "x": "$dataset.0.set.2.x+75",
            "y": "$dataset.0.set.2.y-2"
          }
          ]
        }]
      },
      "data": [{
        "label": "Mon",
        "value": "12"
      },
      {
        "label": "Tue",
        "value": "5"
      },
      {
        "label": "Wed",
        "value": "34"
      },
      {
        "label": "Thu",
        "value": "15"
      },
      {
        "label": "Fri",
        "value": "10"
      },
      {
        "label": "Sat",
        "value": "21"
      },
      {
        "label": "Sun",
        "value": "20"
      }
      ]
    }


  }

 onOpen() {
    this.router.navigate(['/']);
  }


 ngOnInit(){

}

}
