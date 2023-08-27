interface AppConfig {
    backendUrl: string;
    authToken: string;
    maxRetries: number;
}

export class Config {
    private static config: AppConfig;

    public static get(): AppConfig {
        if (!Config.config) {
            const rawConfig = require('./config.json');
            const config: AppConfig = {
                backendUrl: rawConfig.backendUrl,
                authToken: rawConfig.authToken,
                maxRetries: rawConfig.maxRetries,
            };
            Config.validate(config);
            Config.config = config;
        }
        return Config.config;
    }

    private static validate(config: AppConfig) {
        if (!config.backendUrl) {
            throw new Error('Missing backendUrl in config');
        }
        if (!config.authToken) {
            throw new Error('Missing authToken in confiag');
        }
        if (!config.maxRetries) {
            throw new Error('Missing maxRetries in config');
        }
    }
}