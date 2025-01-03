import React from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

interface ContactPoint {
  name: string;
  designation: string;
  linkedIn: string;
  email: string;
  alternateEmail: string;
  contactNo: string;
  whatsappNo: string;
  alternateContactNo: string;
  dateCreated: string;
  timeCreated: string;
}

interface Company {
  id: number;
  name: string;
  industry: string;
  product: string;
  contactPoints: ContactPoint[];
}

interface ViewDataProps {
  company: Company;
  onClose: () => void;
}

const ViewData: React.FC<ViewDataProps> = ({ company, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50"
    >
      <div className="bg-white p-4 rounded shadow-lg w-full max-w-md overflow-y-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Company Details</h2>
          <FaTimes onClick={onClose} className="text-red-500 cursor-pointer" />
        </div>
        <div className="mt-4">
          <p><strong>Company Name:</strong> {company.name}</p>
          <p><strong>Industry:</strong> {company.industry}</p>
          <p><strong>Product:</strong> {company.product}</p>
          <h3 className="font-bold mt-4">Contact Points</h3>
          {company.contactPoints.map((cp, index) => (
            <div key={index} className="border p-2 mb-2">
              <p><strong>Name:</strong> {cp.name}</p>
              <p><strong>Designation:</strong> {cp.designation}</p>
              <p><strong>LinkedIn:</strong> {cp.linkedIn}</p>
              <p><strong>Email:</strong> {cp.email}</p>
              <p><strong>Alternate Email:</strong> {cp.alternateEmail}</p>
              <p><strong>Contact No:</strong> {cp.contactNo}</p>
              <p><strong>WhatsApp No:</strong> {cp.whatsappNo}</p>
              <p><strong>Alternate Contact No:</strong> {cp.alternateContactNo}</p>
              <p><strong>Date Created:</strong> {cp.dateCreated}</p>
              <p><strong>Time Created:</strong> {cp.timeCreated}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ViewData;
