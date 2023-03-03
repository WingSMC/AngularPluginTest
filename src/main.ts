import "@angular/compiler"
import "zone.js"
import { bootstrapApplication } from "@angular/platform-browser"

import "./index.css"
import { AppComponent } from "./app.component"
import { createRouter } from "./router"
import * as DefaultProvider from "./plugins/Provider"
import LoadPlugins from "./plugins/LoadPlugins"

await LoadPlugins(
	{
		plugins: ["replace_plugin", "add_plugin"],
		company: "mycompany",
	},
	DefaultProvider
)

await bootstrapApplication(AppComponent, {
	providers: [...createRouter(DefaultProvider)],
})
