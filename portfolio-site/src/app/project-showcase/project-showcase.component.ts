import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
	selector: 'app-project-showcase',
	templateUrl: './project-showcase.component.html',
	styleUrls: ['./project-showcase.component.css']
})
export class ProjectShowcaseComponent {
	projects: any = [];

	constructor() {
		this.projects = [
			{
				name: "Portfolio Website", date: "May 2023", image: "../../..//src/assets/cute-pig-polite-pig.gif", description: "This is a project desc.This is a project desc.This is a project desc.This is a project desc.This is a project desc.This is a project desc.This is a project desc.This is a project desc.This is a project desc.This is a project desc.", mainLink: "https://github.com/CodyScha/codyscha.github.io", mainLinkIcon: "bi bi-github"
			},
			{
				name: "Portfolio Website", date: "May 2023", image: "../../..//src/assets/rinzler.webp", description: "This is a project desc.", mainLink: "https://github.com/CodyScha/codyscha.github.io", mainLinkIcon: "bi bi-github"
			},
			{
				name: "Portfolio Website", date: "May 2023", image: "../../..//src/assets/cute-pig-polite-pig.gif", description: "This is a project desc.", mainLink: "https://github.com/CodyScha/codyscha.github.io", mainLinkIcon: "bi bi-github", secondLink: "twitch.tv/xqc", secondLinkIcon: "bi bi-twitch"
			},
			{
				name: "Portfolio Website", date: "May 2023", image: "../../..//src/assets/cute-pig-polite-pig.gif", description: "This is a project desc.", mainLink: "https://github.com/CodyScha/codyscha.github.io", mainLinkIcon: "bi bi-github"
			}
		]
	}
}
