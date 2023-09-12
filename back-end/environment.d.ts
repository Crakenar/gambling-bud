declare global {
    namespace NodeJS {
        interface ProcessEnv {
            GOOGLE_CLIENT_ID: string;
            GOOGLE_CLIENT_SECRET: string;
            SESSION_SECRET: string;
            PASSPORT_SESSION_SECRET: string;
            CLIENT_URL: string;
            CLIENT_HOME_URL: string;
            JWT_SECRET: string;
            JWT_EXPIRE_TIME_MINS: string;
            JWT_EXPIRE_TIME_HOUR: string;
            MONGO_URI_DOCKER: string;
            MONGODB_USER: string;
            MONGODB_PASSWORD: string;
            MONGODB_DATABASE: string;
            MONGODB_LOCAL_PORT: number;
            MONGODB_DOCKER_PORT: number;
            NODE_LOCAL_PORT: number;
            NODE_DOCKER_PORT: string;
            NODE_ENV: 'development' | 'production';
            PORT?: string;
            PWD: string;
        }
    }
}
export {}
