import { style } from '@angular/animations';
import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.css'],
    styles: [
        '.p-timeline-event-opposite {display:none;}'
    ]
})
export class TimelineComponent {
    exps: any[];
    nodeColor: string = "#953929";
    icon: string = "bi bi-circle-fill text-white";
    tl_align: string = "alternate";

    @HostListener('window:resize', ['$event'])
    onWindowResize(event: any) {
        if (window.matchMedia('(max-width: 700px)').matches) {
            this.tl_align = "";
        }
        else {
            this.tl_align = "alternate"
        }
    }

    constructor() {
        // * Need to do initial window size check
        if (window.matchMedia('(max-width: 700px)').matches) {
            this.tl_align = "";
        }
        else {
            this.tl_align = "alternate"
        }

        this.exps = [
            {
                title: "Front End Developer Intern", org: "MindHome", startDate: "October 2021", endDate: "May 2022", description: "I leveraged Builder.io for the development process and implemented a new design for Mindhome's e-commerce site, specifically focusing on the 5 product pages. These redesigned pages were aimed at enhancing the browsing experience for all customers. Throughout this project, I gained valuable experience in web development while adhering to agile principles. Our scrum practices were effectively organized and managed using Notion."
            },
            {
                title: "Web Development Branch Head", org: "SPARC at SIUE", startDate: "April 2021", endDate: "May 2022", description: "I collaborated with fellow students to create a website that showcased our organization. We utilized React for development and hosted the website using GitHub Pages. To ensure efficient progress, I managed the development process by implementing agile principles and utilizing the project management software Trello. Through this project, I gained valuable experience in teamwork, web development, and project management."
            },
            {
                title: "Software Engineer Intern", org: "Centene Corporation", startDate: "May 2022", endDate: "May 2023", description: "I created network visuals that encompassed more than 5,000 sites and 80,000 employees. These visuals were organized based on department, administrator status, and state. To streamline the analysis process before migrating to SharePoint Online, I developed PowerShell scripts that automated data extraction to measure site complexity. Additionally, I created a PowerShell script to automatically generate secure spaces on SharePoint Online, allowing internal employees to share documents with external parties. Throughout this project, I gained experience in working remotely and adapting to full agile development practices."
            },
            {
                title: "Undergraduate Research Assistant", org: "URCA at SIUE", startDate: "August 2022", endDate: "March 2023", description: "Our SIUE team utilized the open-source library OpenPose to extract data from cameras on over 120 human body joints and created a Python program that extrapolates gait data. The extrapolated data will then be forwarded to researchers at NIU, who will utilize it to construct predictive models to identify early signs of autism in children."
            },
            {
                title: "Graduation, BS in Computer Science", org: "Southern Illinois University Edwardsville", startDate: "August 2019", endDate: "May 2023", description: "I graduated Summa Cum Laude with a BS in CS and a Minor in Mathematics. Notable course topics I took include Software Engineering, Artificial Intelligence, Cryptography, Operating Systems, and Network Communication."
            },
            {
                title: "Software Developer", org: "NISC", startDate: "June 2023", endDate: "Present", description: "My start date is set for June 12. Some technologies that I will utilize are Angular, Python, Java Spring, and Cassandra databases."
            },
        ].reverse();
    }
}
