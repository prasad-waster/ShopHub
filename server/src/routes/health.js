import express from 'express';

const router = express.Router();

// @route   GET /api/health
router.get('/', (req, res) => {
  const healthInfo = {
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
    version: '1.0.0'
  };

  res.status(200).json({
    success: true,
    data: healthInfo
  });
});

export default router;