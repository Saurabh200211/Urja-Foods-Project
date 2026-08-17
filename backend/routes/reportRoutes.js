import express from 'express';
import {
  getReports,
  createReport,
} from '../controllers/reportController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .get(getReports)
  .post(protect, admin, createReport);

export default router;
