import Service from '../models/Service.js';

// @desc    Fetch all services
// @route   GET /api/services
// @access  Public
export const getServices = async (req, res, next) => {
  try {
    const services = await Service.find({}).sort({ createdAt: 1 });
    res.json({
      success: true,
      count: services.length,
      data: services,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Fetch single service
// @route   GET /api/services/:id
// @access  Public
export const getServiceById = async (req, res, next) => {
  try {
    const service = await Service.findById(req.params.id);
    if (service) {
      res.json({
        success: true,
        data: service,
      });
    } else {
      res.status(404);
      throw new Error('Service not found');
    }
  } catch (error) {
    next(error);
  }
};

// @desc    Create a service
// @route   POST /api/services
// @access  Private/Admin
export const createService = async (req, res, next) => {
  try {
    const { title, icon, image, description, href } = req.body;

    if (!title || !image || !description || !href) {
      res.status(400);
      throw new Error('Title, image, description, and href are required');
    }

    const service = await Service.create({
      title,
      icon: icon || 'Wheat',
      image,
      description,
      href,
    });

    res.status(201).json({
      success: true,
      data: service,
    });
  } catch (error) {
    next(error);
  }
};
