import 'dotenv/config';

const getEnv = (key: string, defaultValue?: string): string => {
    const value = process.env[key] || defaultValue;

    if(value === undefined) {
        throw new Error(`Missing environment variable ${key}`);
    }

    return value;
};

export const MONGO_URI = getEnv("MONGO_URI");
export const PORT = getEnv("PORT","3000");
export const CLOUD_NAME = getEnv("CLOUD_NAME");
export const CLOUD_API_KEY = getEnv("CLOUD_API_KEY");
export const CLOUD_API_SECRET = getEnv("CLOUD_API_SECRET");
export const SMTP_HOST= getEnv("SMTP_HOST");
export const SMTP_PORT= getEnv("SMTP_PORT");
export const SMTP_USER= getEnv("SMTP_USER");
export const SMTP_PASS= getEnv("SMTP_PASS");
export const APP_ORIGIN= getEnv("APP_ORIGIN");