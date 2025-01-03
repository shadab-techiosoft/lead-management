import React, { useState } from 'react';
import { FaLayerGroup, FaBuilding, FaUserCheck,  FaChevronRight, FaChevronLeft, FaIndustry, FaProductHunt, FaLinkedin, FaEnvelope, FaPhone, FaWhatsapp, FaTrophy, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  count: number;
  bgColor: string;
  icon: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, count, bgColor, icon }) => {
  return (
    <div className={`flex items-start relative justify-between ${bgColor} shadow-md rounded-lg p-4 w-52 mb-10`}>
      <div>
        <h3 className="text-lightblue text-sm font-medium whitespace-nowrap">{title}</h3>
        <p className="text-black text-2xl font-bold mt-1">{count < 10 ? `0${count}` : count}</p>
      </div>
      <div className="w-10 h-10 flex absolute top-[-10px] right-[-10px] bg-transparent rounded-full items-center justify-center shadow-4">
        {icon}
      </div>
    </div>
  );
};

const CardBlocks: React.FC = () => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const cards = [
    { title: 'Industry', count: 8, bgColor: 'bg-blue-100', icon: <FaIndustry className="text-4xl p-2 rounded-full bg-lightblue text-white" /> },
    { title: 'Product', count: 8, bgColor: 'bg-green-100', icon: <FaProductHunt className="text-4xl p-2 rounded-full bg-lightblue text-white" /> },
    { title: 'Company Name', count: 0, bgColor: 'bg-yellow-100', icon: <FaBuilding className="text-4xl p-2 rounded-full bg-lightblue text-white" /> },
    { title: 'Contact Person Name', count: 3, bgColor: 'bg-red-100', icon: <FaUserCheck className="text-4xl p-2 rounded-full bg-lightblue text-white" /> },
    { title: 'Designation', count: 2, bgColor: 'bg-purple-100', icon: <FaLayerGroup className="text-4xl p-2 rounded-full bg-lightblue text-white" /> },
    { title: 'LinkedIn URL', count: 5, bgColor: 'bg-pink-100', icon: <FaLinkedin className="text-4xl p-2 rounded-full bg-lightblue text-white" /> },
    { title: 'Official Email', count: 7, bgColor: 'bg-indigo-100', icon: <FaEnvelope className="text-4xl p-2 rounded-full bg-lightblue text-white" /> },
    { title: 'Alternate Email', count: 4, bgColor: 'bg-teal-100', icon: <FaEnvelope className="text-4xl p-2 rounded-full bg-lightblue text-white" /> },
    { title: 'Contact No', count: 6, bgColor: 'bg-orange-100', icon: <FaPhone className="text-4xl p-2 rounded-full bg-lightblue text-white" /> },
    { title: 'WhatsApp Number', count: 9, bgColor: 'bg-gray-100', icon: <FaWhatsapp className="text-4xl p-2 rounded-full bg-lightblue text-white" /> },
    { title: 'Alternate Contact No', count: 1, bgColor: 'bg-cyan-100', icon: <FaPhone className="text-4xl p-2 rounded-full bg-lightblue text-white" /> },
    { title: 'Win', count: 10, bgColor: 'bg-lime-100', icon: <FaTrophy className="text-4xl p-2 rounded-full bg-lightblue text-white" /> },
    { title: 'Lost', count: 2, bgColor: 'bg-amber-100', icon: <FaTimes className="text-4xl p-2 rounded-full bg-lightblue text-white" /> },
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    if (direction === 'left' && scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
    } else if (direction === 'right' && scrollIndex < cards.length - 5) {
      setScrollIndex(scrollIndex + 1);
    }
  };

  return (
    <div className="relative ">
      {scrollIndex > 0 && (
        <button
          onClick={() => handleScroll('left')}
          className="absolute left-0 top-11 transform -translate-y-1/2 p-2 rounded-full bg-lightblue text-white z-10"
        >
          <FaChevronLeft />
        </button>
      )}
      <motion.div
        className="flex gap-4 w-fit"
        animate={{ x: Math.max(-90, -scrollIndex * 100 / 10) + '%' }}
        transition={{ type: 'spring', stiffness: 10 }}
      >
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </motion.div>
      {scrollIndex < cards.length - 5 && (
        <button
          onClick={() => handleScroll('right')}
          className="absolute right-0 top-11 transform -translate-y-1/2 p-2 rounded-full bg-lightblue text-white z-10"
        >
          <FaChevronRight />
        </button>
      )}
    </div>
  );
};

export default CardBlocks;