import type { lvtn } from "../../types"
import { AboutComponent } from "./components/about.component"

export default {
	name: "replace_plugin",
	installTo({ store }) {
		store.AboutComponent = AboutComponent
	},
} as lvtn.Plugin
