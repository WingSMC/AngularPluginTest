import type { Route } from "@angular/router"
import type { lvtn } from "../types"
import { AboutComponent } from "../components/about.component"

export const store = {
	AboutComponent,
	menu: {
		add: [] as lvtn.MenuItem[],
		remove: [] as string[],
		replace: [] as lvtn.MenuItem[],
	},
	routes: {
		add: [] as Route[],
		remove: [] as string[],
		replace: [] as Route[],
	},
}

const thisModule = {
	store,
	use,
	inject,
	freeze,
}

export function use(plugin: lvtn.Plugin) {
	console.info(`Installing plugin: ${plugin.name}`)
	if (plugin.installTo(thisModule)) {
		console.error(`Failed to install plugin: ${plugin.name}`)
	}
}

export function inject<K extends keyof lvtn.Store>(key: K): lvtn.Store[K] {
	return store[key]
}

export function freeze() {
	Object.freeze(store)
}
