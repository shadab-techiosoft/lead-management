import React from 'react';
import {  FaLayerGroup, FaBuilding, FaUserCheck, FaUsers,  } from 'react-icons/fa';

interface CardProps {
  title: string;
  count: number;
  bgColor: string;
  icon: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, count, bgColor, icon }) => {
  return (
    <div className="flex items-start relative justify-between bg-white shadow-md rounded-lg p-4 w-full md:w-1/4 mb-10">
      <div>
        <h3 className="text-lightblue text-sm font-medium whitespace-nowrap">{title}</h3>
        <p className="text-black text-2xl font-bold mt-1   ">{count < 10 ? `0${count}` : count}</p>
      </div>
      <div
        className={`w-10 h-10 flex absolute top-[-10px] right-[-10px] bg-transparent rounded-full items-center justify-center shadow-4 ${bgColor}`}
      >
        {icon}
      </div>
    </div>
  );
};

const CardBlocks: React.FC = () => {
  return (
    <div className="flex gap-4 justify-center md:justify-between">
      <Card
        title="Total Companies"
        count={8}
        bgColor="bg-white"
        icon={<FaBuilding className=" text-4xl p-2 rounded-full bg-lightblue text-whiter" />}
      />
      <Card
        title="Total Contacts"
        count={8}
        bgColor="bg-white"
        icon={<FaUsers className="text-4xl p-2 rounded-full bg-lightblue text-whiter" />}
      />
      <Card
        title="Assigned Companies"
        count={0}
        bgColor="bg-white"
        icon={<FaUserCheck className="text-4xl p-2 rounded-full bg-lightblue text-whiter" />}
      />
      <Card
        title="Unassigned Companies"
        count={3}
        bgColor="bg-white"
        icon={<FaBuilding className="text-4xl p-2 rounded-full bg-lightblue text-whiter" />}
      />
      
      <Card
        title="Industry Breakdown"
        count={2}
        bgColor="bg-white"
        icon={<FaLayerGroup className="text-4xl p-2 rounded-full bg-lightblue text-whiter" />}
      />
   
     
    </div>
  );
};

export default CardBlocks;
