//import path from 'path';
//import express from 'express';
//import dotenv from 'dotenv';
//import cors from 'cors';
//import connectDB from './config/db.js';
//import { notFound, errorHandler } from './middleware/errorMiddleware.js';

//import authRoutes from './routes/authRoutes.js';
//import productRoutes from './routes/productRoutes.js';
//import serviceRoutes from './routes/serviceRoutes.js';
//import enquiryRoutes from './routes/enquiryRoutes.js';
//import newsletterRoutes from './routes/newsletterRoutes.js';
//import reportRoutes from './routes/reportRoutes.js';

//// Load environment variables
//dotenv.config();

//// Connect to MongoDB
//connectDB();

//const app = express();

//// CORS Configuration
//const allowedOrigins = [
//  process.env.FRONTEND_URL || 'https://urja-foods-project-one.vercel.app/',
//  'http://localhost:3000',
//  'http://localhost:5173',
//  'http://127.0.0.1:5173',
//];

//app.use(
//  cors({
//    origin: function (origin, callback) {
//      // allow requests with no origin (like mobile apps or curl requests)
//      if (!origin || allowedOrigins.includes(origin)) {
//        return callback(null, true);
//      }
//      return callback(null, true); // Allow dev access smoothly
//    },
//    credentials: true,
//    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//    allowedHeaders: ['Content-Type', 'Authorization'],
//  })
//);

//// Body Parser Middleware
//app.use(express.json({ limit: '10mb' }));
//app.use(express.urlencoded({ extended: true, limit: '10mb' }));

//// Static uploads folder
//const __dirname = path.resolve();
//app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

//// Health check endpoint
//app.get('/api/health', (req, res) => {
//  res.json({
//    status: 'OK',
//    message: 'Urja Foods Backend API is running smoothly',
//    timestamp: new Date().toISOString(),
//  });
//});

//// API Routes
//app.use('/api/auth', authRoutes);
//app.use('/api/products', productRoutes);
//app.use('/api/services', serviceRoutes);
//app.use('/api/enquiries', enquiryRoutes);
//app.use('/api/newsletter', newsletterRoutes);
//app.use('/api/reports', reportRoutes);

//// Error Handling Middlewares
//app.use(notFound);
//app.use(errorHandler);

//const PORT = process.env.PORT || 5000;

//const server = app.listen(PORT, () => {
//  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
//});

//server.on('error', (error) => {
//  if (error.code === 'EADDRINUSE') {
//    console.error(`\n❌ Error: Port ${PORT} is already in use by another process.`);
//    console.error(`👉 Solutions:`);
//    console.error(`   1. Kill the process running on port ${PORT} (e.g. npx kill-port ${PORT})`);
//    console.error(`   2. Or change PORT=${Number(PORT) + 1} in your backend/.env file\n`);
//  } else {
//    console.error('Server error:', error.message);
//  }
//});


import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';
import serviceRoutes from './routes/serviceRoutes.js';
import enquiryRoutes from './routes/enquiryRoutes.js';
import newsletterRoutes from './routes/newsletterRoutes.js';
import reportRoutes from './routes/reportRoutes.js';

// ==========================================
// LOAD ENVIRONMENT VARIABLES
// ==========================================

dotenv.config();

// ==========================================
// CREATE EXPRESS APP
// ==========================================

const app = express();

// ==========================================
// CONNECT TO MONGODB
// ==========================================

connectDB();

// ==========================================
// CORS CONFIGURATION
// ==========================================

const allowedOrigins = [
  process.env.FRONTEND_URL || 'https://urja-foods-project-one.vercel.app',
  'http://localhost:3000',
  'http://localhost:5173',
  'http://127.0.0.1:5173',
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests without an origin
      // Example: Postman, curl, mobile applications
      if (!origin) {
        return callback(null, true);
      }

      // Allow configured origins
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      // Currently allow other origins as well.
      // You can restrict this later for production.
      return callback(null, true);
    },

    credentials: true,

    methods: [
      'GET',
      'POST',
      'PUT',
      'DELETE',
      'PATCH',
      'OPTIONS',
    ],

    allowedHeaders: [
      'Content-Type',
      'Authorization',
    ],
  })
);

// ==========================================
// BODY PARSER
// ==========================================

app.use(
  express.json({
    limit: '10mb',
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: '10mb',
  })
);

// ==========================================
// STATIC UPLOADS
// ==========================================

const __dirname = path.resolve();

app.use(
  '/uploads',
  express.static(path.join(__dirname, 'uploads'))
);

// ==========================================
// ROOT ROUTE
// ==========================================

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Urja Foods Backend API is running',
    version: '1.0.0',
    health: '/api/health',
    endpoints: {
      auth: '/api/auth',
      products: '/api/products',
      services: '/api/services',
      enquiries: '/api/enquiries',
      newsletter: '/api/newsletter',
      reports: '/api/reports',
    },
  });
});

// ==========================================
// HEALTH CHECK
// ==========================================

app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    status: 'OK',
    message: 'Urja Foods Backend API is running smoothly',
    timestamp: new Date().toISOString(),
  });
});

// ==========================================
// API ROUTES
// ==========================================

app.use('/api/auth', authRoutes);

app.use('/api/products', productRoutes);

app.use('/api/services', serviceRoutes);

app.use('/api/enquiries', enquiryRoutes);

app.use('/api/newsletter', newsletterRoutes);

app.use('/api/reports', reportRoutes);

// ==========================================
// 404 NOT FOUND
// ==========================================

app.use(notFound);

// ==========================================
// GLOBAL ERROR HANDLER
// ==========================================

app.use(errorHandler);

// ==========================================
// VERCEL EXPORT
// ==========================================

// IMPORTANT:
// Do NOT use app.listen() here.
// Vercel will handle the server automatically.

export default app;