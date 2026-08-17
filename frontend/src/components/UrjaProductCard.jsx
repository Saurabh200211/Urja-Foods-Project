import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function UrjaProductCard({ product }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -10 }}
      className="group overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col justify-between"
    >
      <div>
        {/* Image */}
        <div className="relative h-72 overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-center transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />

          {/* Title on Image */}
          <div className="absolute bottom-6 left-6 right-6">
            {/*<span className="inline-flex rounded-full bg-lime-500 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white">
              Urja Product
            </span>*/}

            <h3 className="mt-3 text-2xl font-bold text-white">
              {product.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-7">
          <p className="text-gray-600 leading-7">
            {product.description}
          </p>
        </div>
      </div>

      <div className="px-7 pb-7">
        <Link
          to="/contact"
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-lime-500
            px-6
            py-3
            text-white
            font-semibold
            transition-all
            duration-300
            hover:bg-lime-600
            hover:gap-4
            shadow-md
          "
        >
          Inquire Now
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>

      {/* Bottom Accent */}
      <div className="h-1 w-0 bg-lime-500 transition-all duration-500 group-hover:w-full" />
    </motion.div>
  );
}

export default UrjaProductCard;