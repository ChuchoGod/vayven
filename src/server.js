import dotenv from 'dotenv';
import app from './app.js';

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, HOST, () => {
  console.log(`
╔══════════════════════════════════════════════════╗
║                                                  ║
║   Vayven API Server                              ║
║                                                  ║
║   Environment: ${process.env.NODE_ENV || 'development'}                     ║
║   Server running at: http://${HOST}:${PORT}        ║
║                                                  ║
╚══════════════════════════════════════════════════╝
  `);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT signal received: closing HTTP server');
  process.exit(0);
});
