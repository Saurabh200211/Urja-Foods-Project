import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Report title is required'],
      trim: true,
    },
    year: {
      type: String,
      required: [true, 'Report year is required'],
      trim: true,
    },
    size: {
      type: String,
      default: '3.5 MB',
    },
    fileUrl: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'PDF Document',
    },
  },
  {
    timestamps: true,
  }
);

const Report = mongoose.model('Report', reportSchema);
export default Report;
