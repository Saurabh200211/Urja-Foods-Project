import express from 'express';
import {
  subscribeNewsletter,
  getSubscribers,
} from '../controllers/newsletterController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .post(subscribeNewsletter)
  .get(protect, admin, getSubscribers);

export default router;
