import { Component } from '@angular/core';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {
    exps: any[];
    nodeColor: string = "#953929";
    icon:string = "bi bi-circle-fill text-white";

    constructor() {
        this.exps = [
            {
                title: "Front End Developer Intern", org: "Mindhome", startDate: "October 2021", endDate: "May 2022", description: "emp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp emp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp emp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp 1"
            },
            {
                title: "Web Development Branch Head", org: "SPARC at SIUE", startDate: "April 2021", endDate: "May 2022", description: "emp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp emp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp 2"
            },
            {
                title: "Software Engineer Intern", org: "Centene Corporation", startDate: "May 2022", endDate: "May 2023", description: "emp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp 3"
            },
            {
                title: "Undergraduate Research Assistant", org: "URCA at SIUE", startDate: "August 2022", endDate: "March 2023", description: "emp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp 4"
            },
            {
                title: "Graduation, BS in Computer Science", org: "Southern Illinois University Edwardsville", startDate: "August 2019", endDate: "May 2023", description: "emp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp 5"
            },
            {
                title: "Software Developer", org: "NISC", startDate: "June 2023", endDate: "Present", description: "Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp "
            },
        ].reverse();
    }
}
