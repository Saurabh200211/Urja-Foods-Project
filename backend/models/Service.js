import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Service title is required'],
      trim: true,
    },
    icon: {
      type: String,
      default: 'Wheat',
    },
    image: {
      type: String,
      required: [true, 'Service image URL is required'],
    },
    description: {
      type: String,
      required: [true, 'Service description is required'],
    },
    href: {
      type: String,
      required: [true, 'Service link is required'],
    },
  },
  {
    timestamps: true,
  }
);

const Service = mongoose.model('Service', serviceSchema);
export default Service;
