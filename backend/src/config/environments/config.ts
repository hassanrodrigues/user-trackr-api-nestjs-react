export default () => ({
  application: {
    port: parseInt(process.env.APP_PORT),
  },
  swagger: {
    title: process.env.SWAGGER_TITLE,
    description: process.env.SWAGGER_DESCRIPTION,
    version: process.env.SWAGGER_VERSION,
  },
  auth: {
    token_secret: process.env.JWT_SECRET,
    token_expires_in: process.env.JWT_EXPIRES_IN,
    refresh_token_secret: process.env.JWT_REFRESH_TOKEN_SECRET,
    refresh_token_expires_in: process.env.JWT_REFRESH_TOKEN_EXPIRES_IN,
    first_access_token_secret: process.env.JWT_FIRST_ACCESS_SECRET,
    first_access_token_expires_in: process.env.JWT_FIRST_ACCESS_EXPIRES_IN,
  },
  database: {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: false,
    extra: {
      trustServerCertificate: true,
    },
  },
  databaseQms: {
    type: process.env.DB_QMS_TYPE,
    host: process.env.DB_QMS_HOST,
    port: parseInt(process.env.DB_QMS_PORT),
    username: process.env.DB_QMS_USERNAME,
    password: process.env.DB_QMS_PASSWORD,
    database: process.env.DB_QMS_DATABASE,
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: false,
    extra: {
      trustServerCertificate: true,
    },
  },
});
