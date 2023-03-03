import { ChangeDetectionStrategy, Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterLink, RouterOutlet } from "@angular/router"
import { inject } from "./plugins/Provider"
import { lvtn } from "./types"
@Component({
	selector: "div",
	standalone: true,
	imports: [CommonModule, RouterOutlet, RouterLink],
	template: `
		<nav class="flex flex-row justify-evenly p-2 border-solid border">
			<a
				*ngFor="let item of items"
				[routerLink]="item.path"
				href="#"
				class="text-xl font-bold no-underline hover:underline"
				>{{ item.label }}</a
			>
		</nav>
		<router-outlet></router-outlet>
	`,
	styles: [
		`
			:host {
				display: block;
			}
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	items: lvtn.MenuItem[] = [
		{
			label: "Home",
			path: "/",
		},
		{
			label: "About",
			path: "/about",
		},
	]

	constructor() {
		const { add, remove, replace } = inject("menu")

		this.items = this.items
			.filter((item) => !remove.includes(item.label))
			.map((item) => {
				const replaceItem = replace.find((r) => r.label === item.label)
				return replaceItem || item
			})
		this.items.push(...add)
	}
}
