import { Route, provideRouter } from "@angular/router"
import { lvtn } from "../types"
const defaultRoutes: Route[] = [
	{
		path: "",
		loadComponent: () =>
			import("../views/home.page.component").then((c) => c.HomePage),
	},
	{
		path: "about",
		loadComponent: () =>
			import("../views/about.page.component").then((c) => c.AboutPage),
	},
]
export function createRouter(provider: lvtn.Provider) {
	const { add, remove, replace } = provider.inject("routes")

	const finalRoutes = defaultRoutes
		.filter(({ path }) => !remove.includes(path!))
		.map((item) => {
			const replaceItem = replace.find((r) => r.path === item.path)
			return replaceItem || item
		})

	return [provideRouter([...finalRoutes, ...add])]
}
