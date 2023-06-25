import { Component } from '@angular/core';

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
				name: "Portfolio Website", date: "June 2023", image: "../../..//src/assets/portfolio-site-image.png", description: "You're currently looking at this project! This project was made with Angular, and I am hosting it on GitHub Pages. My future plans are to expand this website with other features like games and backend features to learn more about web development.", mainLink: "https://github.com/CodyScha/codyscha.github.io", mainLinkIcon: "bi bi-github", mainLinkTitle: "Source Code"
			},
			// {
			// 	name: "Ingress Portal Mapping", date: "August 2022 - May 2023", image: "", description: "For my Senior Capstone project, my team and I created a solution for generating gameplay strategies for the popular mobile game Ingress. Using our JavaScript plugin, users can download official game data from the web and import it into our Flutter application Spoke-It to generate an interactive visual of their strategy. Users can edit the dataset in real time to see an updated strategy and points calculation and save them as profiles for future viewing.", mainLink: "https://github.com/CodyScha/Spoke-It", mainLinkIcon: "bi bi-github", mainLinkTitle: "Spoke-It Repository", secondLink: "https://github.com/CodyScha/Ingress-Intel-Map-Portal-Scraper", secondLinkIcon: "bi bi-github", secondLinkTitle: "Portal Scraper Repository"
			// },
			// {
			// 	name: "MCU Character Interactions Network", date: "April 2023", image: "../../..//src/assets/cute-pig-polite-pig.gif", description: "This is a project desc.", mainLink: "https://github.com/CodyScha/codyscha.github.io", mainLinkIcon: "bi bi-github", secondLink: "twitch.tv/xqc", secondLinkIcon: "bi bi-twitch"
			// },
			// {
			// 	name: "Portfolio Website", date: "May 2023", image: "../../..//src/assets/cute-pig-polite-pig.gif", description: "This is a project desc.", mainLink: "https://github.com/CodyScha/codyscha.github.io", mainLinkIcon: "bi bi-github"
			// }
		]
	}
}
