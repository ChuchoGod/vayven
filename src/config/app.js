export default {
  app: {
    name: process.env.APP_NAME || 'Vayven API',
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost'
  },
  
  database: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || '',
    port: process.env.DB_PORT || 3306
  },

  cors: {
    allowedOrigins: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : ['*']
  }
};
