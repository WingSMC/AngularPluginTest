import type * as provider from "./plugins/Provider"

namespace lvtn {
	type Plugin = {
		name: string
		installTo: (store: Provider) => boolean
	}
	type Context = {
		company: string
		plugins: string[]
	}
	type Provider = typeof provider
	type Store = typeof provider.store

	type MenuItem = {
		label: string
		icon?: string
		path: string
	}
}
