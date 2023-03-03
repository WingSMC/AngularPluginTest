import type { lvtn } from "../../types"

export default {
	name: "add_plugin",
	installTo({ store }) {
		store.routes.add.push({
			path: "new",
			loadComponent: () =>
				import("./view/new.page.component").then((c) => c.NewPage),
		})
		store.menu.add.push({
			path: "new",
			label: "New",
		})
	},
} as lvtn.Plugin
