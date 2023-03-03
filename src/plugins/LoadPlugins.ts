import type { lvtn } from "../types"

export default async function LoadPlugins(
	context: lvtn.Context,
	provider: lvtn.Provider
): Promise<void> {
	const pluginPromises = context.plugins.map(
		async (pluginURL) =>
			(await import(`./${pluginURL}/index.ts`)).default as lvtn.Plugin
	)

	const plugins = await Promise.all(pluginPromises)
	plugins.forEach(provider.use)
	provider.freeze()
}
