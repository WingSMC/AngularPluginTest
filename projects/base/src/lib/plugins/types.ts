export interface Plugin {
    readonly module: PluginModuleInterface;
}

export interface PluginModuleInterface {
    readonly name: string;
    readonly version: string;
}
