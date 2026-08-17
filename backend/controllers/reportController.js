import Report from '../models/Report.js';

// @desc    Get all corporate reports
// @route   GET /api/reports
// @access  Public
export const getReports = async (req, res, next) => {
  try {
    const reports = await Report.find({}).sort({ year: -1, createdAt: -1 });
    res.json({
      success: true,
      count: reports.length,
      data: reports,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create a new report document
// @route   POST /api/reports
// @access  Private/Admin
export const createReport = async (req, res, next) => {
  try {
    const { title, year, size, fileUrl, type } = req.body;

    if (!title || !year) {
      res.status(400);
      throw new Error('Title and Year are required');
    }

    const report = await Report.create({
      title,
      year,
      size: size || '3.5 MB',
      fileUrl: fileUrl || '',
      type: type || 'PDF Document',
    });

    res.status(201).json({
      success: true,
      data: report,
    });
  } catch (error) {
    next(error);
  }
};
