import { Component } from '@angular/core';

@Component({
    selector: 'app-socials-pane',
    templateUrl: './socials-pane.component.html',
    styleUrls: ['./socials-pane.component.css']
})
export class SocialsPaneComponent {
    socials: any[];

    constructor() {
        this.socials = [
            {name: 'LinkedIn', link: 'https://www.linkedin.com/in/cody-schaefer-45920a229/', icon: 'bi bi-linkedin'},
            {name: 'GitHub', link: 'https://github.com/CodyScha', icon: 'bi bi-github'},
            {name:'Email', link: 'mailto:codyschaefer22@gmail.com', icon: 'bi bi-envelope-fill'}
        ]
    }
}