import { useState } from "react";
import { motion } from "framer-motion";

function CompanyCard({ company }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="flex-shrink-0 w-56 h-56"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side - Logo Only */}
        <div
          className="absolute w-full h-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 flex items-center justify-center p-6"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={company.logo}
            alt={company.name}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        {/* Back Side - Details */}
        <div
          className="absolute w-full h-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center p-6 text-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {company.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
            Back side details coming soon...
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default CompanyCard;
