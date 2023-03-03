import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { inject } from "../plugins/Provider"

@Component({
	selector: "main",
	standalone: true,
	imports: [CommonModule],
	template: `
		<h2>About:</h2>
		<ng-container *ngComponentOutlet="aboutComponent"></ng-container>
	`,
})
export class AboutPage {
	aboutComponent = inject("AboutComponent")
}
