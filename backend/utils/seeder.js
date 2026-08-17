import dotenv from 'dotenv';
import connectDB from '../config/db.js';
import Product from '../models/Product.js';
import Service from '../models/Service.js';
import Report from '../models/Report.js';
import User from '../models/User.js';

dotenv.config();
await connectDB();

const sampleProducts = [
  {
    name: "Broiler Starter Feed",
    category: "Broiler Feed",
    description: "Balanced nutrition designed to support healthy early growth and development.",
    image: "https://www.urjafoods.net/wp-content/uploads/2021/07/New-Project-2021-07-06T103142.938.jpg",
    tag: "Best Seller",
    features: ["Balanced Nutrition", "Better Growth", "High Digestibility"]
  },
  {
    name: "Broiler Finisher-1 Feed",
    category: "Broiler Feed",
    description: "Specially formulated feed for consistent growth and better flock performance.",
    image: "https://www.urjafoods.net/wp-content/uploads/2021/07/New-Project-2021-07-02T142544.691-300x300.jpg",
    tag: "Popular",
    features: ["High Energy", "Balanced Protein", "Consistent Performance"]
  },
  {
    name: "Broiler Finisher-2 Feed",
    category: "Broiler Feed",
    description: "Complete nutrition designed for efficient finishing and better feed conversion.",
    image: "https://www.urjafoods.net/wp-content/uploads/2021/07/New-Project-2021-07-02T141710.854-300x300.jpg",
    tag: "Premium",
    features: ["Efficient FCR", "Quality Protein", "Better Finish"]
  },
  {
    name: "Layer Pre Mix-5 Feed",
    category: "Layer Feed",
    description: "Balanced feed supporting healthy layers and consistent egg production.",
    image: "https://www.urjafoods.net/wp-content/uploads/2021/07/New-Project-2021-07-06T103829.787-300x300.jpg",
    tag: "Layer",
    features: ["Egg Production", "Calcium Support", "Healthy Layers"]
  },
  {
    name: "Layer Pre Mix-35 Feed",
    category: "Layer Feed",
    description: "Nutrition formulated for healthy development of growing layer birds.",
    image: "https://www.urjafoods.net/wp-content/uploads/2021/07/New-Project-2021-07-06T103702.703-300x300.jpg",
    features: ["Immune Support", "Uniform Growth", "Vitamins Included"]
  },
  {
    name: "Layer Concentrate 50% Feed",
    category: "Layer Feed",
    description: "Nutrition formulated for healthy development of growing layer birds.",
    image: "https://www.urjafoods.net/wp-content/uploads/2021/07/prt.jpg",
    features: ["High Protein", "Optimal Digestibility"]
  },
  {
    name: "Supreme Gold Pashu Khadya",
    category: "Cattle Feed",
    description: "Balanced nutrition supporting cattle health, growth and productivity.",
    image: "https://www.urjafoods.net/wp-content/uploads/2021/07/New-Project-2021-07-06T103907.054-300x300.jpg",
    tag: "Top Choice",
    features: ["Milk Yield Booster", "Better Digestion", "Rich in Minerals"]
  },
  {
    name: "Calf Starter Gold Feed",
    category: "Cattle Feed",
    description: "Specialized nutrition designed to support dairy animal performance.",
    image: "https://www.urjafoods.net/wp-content/uploads/2021/07/New-Project-2021-07-06T104000.163-300x300.jpg",
    features: ["Calf Growth", "Rumen Development"]
  },
  {
    name: "Urja Malai (8000)",
    category: "Cattle Feed",
    description: "Specialized nutrition designed to support dairy animal performance.",
    image: "https://www.urjafoods.net/wp-content/uploads/2025/08/Malai-Plus-Front-300x300.webp",
    features: ["Fat Content Enhancer", "Premium Quality"]
  },
  {
    name: "Gavran Feed Starter",
    category: "Gavran Feed",
    description: "Specialized nutrition designed for optimal performance in gavran animals.",
    image: "https://www.urjafoods.net/wp-content/uploads/2021/07/gavrnstrtr-300x300.jpg",
    features: ["Native Breed Nutrition", "Natural Stamina"]
  },
  {
    name: "Gavran Breed Feed",
    category: "Gavran Feed",
    description: "Specialized nutrition designed for optimal performance in gavran animals.",
    image: "https://www.urjafoods.net/wp-content/uploads/2021/07/New-Project-2021-07-06T103404.226-300x300.jpg",
    features: ["Health Support", "Traditional Blend"]
  },
  {
    name: "Gavran Max Magic-1 Feed",
    category: "Gavran Feed",
    description: "Specialized nutrition designed for optimal performance in gavran animals.",
    image: "https://www.urjafoods.net/wp-content/uploads/2021/07/New-Project-2021-07-02T141022.806-300x300.jpg",
    features: ["Fast Weight Gain", "Vital Nutrients"]
  },
  {
    name: "Urja Milk O Milk Feed",
    category: "Milking Feed",
    description: "Specialized nutrition designed to support dairy animal performance.",
    image: "https://www.urjafoods.net/wp-content/uploads/2025/08/Milk-O-Milk-Front-300x300.webp",
    features: ["High Lactation Support", "Rich Protein"]
  },
  {
    name: "Urja Max Magic",
    category: "Milking Feed",
    description: "Specialized nutrition designed to support dairy animal performance.",
    image: "https://www.urjafoods.net/wp-content/uploads/2025/08/Max-Magic-Front-300x300.webp",
    features: ["Maximum Milk Output", "Complete Mineral Blend"]
  },
  {
    name: "Urja Supreme Gold (5000)",
    category: "Milking Feed",
    description: "Specialized nutrition designed to support dairy animal performance.",
    image: "https://www.urjafoods.net/wp-content/uploads/2025/08/Supreme-Gold-Front-300x300.webp",
    features: ["Cattle Health Booster", "Premium Formulation"]
  },
  {
    name: "Deshi Breeder Feed",
    category: "Poultry Feed",
    description: "Specialized nutrition designed to support healthy poultry performance.",
    image: "https://www.urjafoods.net/wp-content/uploads/2021/07/New-Project-2021-07-06T103524.274-300x300.jpg",
    features: ["Breeder Flock Health", "Fertility Support"]
  },
  {
    name: "Trader Pellet Feed",
    category: "Chicken Outlets",
    description: "Specialized nutrition designed to support consistent poultry performance.",
    image: "https://www.urjafoods.net/wp-content/uploads/2021/07/prt-300x300.jpg",
    features: ["Meat Quality", "Outlet Feed Solution"]
  }
];

const sampleServices = [
  {
    title: "Poultry Farming",
    icon: "Bird",
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=900&q=80",
    description: "Healthy broiler farming with modern infrastructure and scientific management.",
    href: "/services/poultry"
  },
  {
    title: "Feed Manufacturing",
    icon: "Factory",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=900&q=80",
    description: "Premium poultry feed manufactured using advanced nutrition technology.",
    href: "/business/feed"
  },
  {
    title: "Contract Farming",
    icon: "Tractor",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=900&q=80",
    description: "Partner with us for sustainable farming and long-term business growth.",
    href: "/services/farmer-support"
  },
  {
    title: "Bio Fertilizers",
    icon: "Sprout",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=900&q=80",
    description: "Eco-friendly fertilizers that improve soil health and crop productivity.",
    href: "/products/bio-fertilizers"
  },
  {
    title: "Livestock Feed",
    icon: "Leaf",
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=900&q=80",
    description: "Balanced nutrition designed for healthy livestock development.",
    href: "/products/cattle-feed"
  },
  {
    title: "Agriculture Solutions",
    icon: "Wheat",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=80",
    description: "Complete agricultural solutions backed by innovation and expertise.",
    href: "/services/agriculture"
  }
];

const sampleReports = [
  { title: "Annual Report 2023-2024", year: "2024", size: "4.2 MB", type: "PDF Document" },
  { title: "Annual Report 2022-2023", year: "2023", size: "3.8 MB", type: "PDF Document" },
  { title: "Annual Report 2021-2022", year: "2022", size: "3.5 MB", type: "PDF Document" },
  { title: "Financial Highlights & Audit Statement 2024", year: "2024", size: "2.1 MB", type: "PDF Document" }
];

const importData = async () => {
  try {
    await Product.deleteMany({});
    await Service.deleteMany({});
    await Report.deleteMany({});

    await Product.insertMany(sampleProducts);
    await Service.insertMany(sampleServices);
    await Report.insertMany(sampleReports);

    // Create default admin user if not existing
    const adminExists = await User.findOne({ email: 'admin@urjafoods.net' });
    if (!adminExists) {
      await User.create({
        name: 'Urja Admin',
        email: 'admin@urjafoods.net',
        password: 'adminpassword123',
        role: 'admin',
      });
      console.log('Admin user created: admin@urjafoods.net / adminpassword123');
    }

    console.log('Data Imported Successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error with data import: ${error}`);
    process.exit(1);
  }
};

importData();
