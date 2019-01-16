import { Component, Input, OnInit } from '@angular/core';
import { Company } from '../company.model';

@Component({
    selector: 'app-overview-dumb',
    templateUrl: './overview.dumb.component.html'
})

export class OverviewDumbComponent implements OnInit {

  @Input() companies: Company[];

  selectedCompany: Company[]; 
 

  onChange(selectedId){
    this.selectedCompany = this.companies.filter(company => company.id === selectedId)
  }
  

ngOnInit(){

}

 dataSource: any;
	constructor() {
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
        "value": "15123"
      },
      {
        "label": "Tue",
        "value": "14233"
      },
      {
        "label": "Wed",
        "value": "25507"
      },
      {
        "label": "Thu",
        "value": "9110"
      },
      {
        "label": "Fri",
        "value": "15529"
      },
      {
        "label": "Sat",
        "value": "20803"
      },
      {
        "label": "Sun",
        "value": "19202"
      }
      ]
    }



  }


}
