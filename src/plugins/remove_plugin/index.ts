import type { lvtn } from "../../types"

export default {
	name: "remove_plugin",
	installTo({ store }) {
		store.menu.remove.push("Home")
		store.routes.remove.push("")
	},
} as lvtn.Plugin
