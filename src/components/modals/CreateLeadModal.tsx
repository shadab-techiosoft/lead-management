import React, { useState, useEffect } from 'react';

export interface Lead {
  leadName: string;
  companyName: string;
  phone: string;
  email: string;
  leadStatus: string;
  createdDate: string;
  leadOwner: string;
}

interface CreateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (lead: Lead) => void;
  initialData?: Lead;

}

const CreateLeadModal: React.FC<CreateModalProps> = ({ isOpen, onClose, onSave, initialData }) => {
  const [lead, setLead] = useState<Lead>(
    initialData || {
      leadName: '',
      companyName: '',
      phone: '',
      email: '',
      leadStatus: 'Active',
      createdDate: new Date().toISOString().split('T')[0],
      leadOwner: '',
    }
  );

  useEffect(() => {
    if (initialData) setLead(initialData);
  }, [initialData]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setLead((prevLead) => ({ ...prevLead, [name]: value }));
  };

  const handleSave = () => {
    onSave(lead);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-99999 flex justify-end">
      <div className="w-full sm:w-1/3 bg-white p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 rounded-full bg-lightblue  p-1 h-10 w-10 text-whiter "
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4">{initialData ? 'Edit Lead' : 'Add New Lead'}</h2>
        <div className="space-y-4">
          <input
            type="text"
            name="leadName"
            value={lead.leadName}
            onChange={handleChange}
            placeholder="Lead Name"
            className="w-full border border-primary rounded-md p-2 text-primary"
          />
          <input
            type="text"
            name="companyName"
            value={lead.companyName}
            onChange={handleChange}
            placeholder="Company Name"
            className="w-full border border-primary rounded-md p-2 text-primary"
          />
          <input
            type="text"
            name="phone"
            value={lead.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full border border-primary rounded-md p-2 text-primary"
          />
          <input
            type="email"
            name="email"
            value={lead.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border border-primary rounded-md p-2  text-primary"
          />
          <select
            name="leadStatus"
            value={lead.leadStatus}
            onChange={handleChange}
            className="w-full border  border-primary rounded-md p-2  text-primary"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Pending">Pending</option>
          </select>
          <input
            type="text"
            name="leadOwner"
            value={lead.leadOwner}
            onChange={handleChange}
            placeholder="Lead Owner"
            className="w-full border border-primary rounded-md p-2 text-primary"
          />
        </div>
        <button
          onClick={handleSave}
          className="mt-4 w-full  bg-primary text-white py-2 rounded-md"
        >
          {initialData ? 'Save Changes' : 'Create Lead'}
        </button>
      </div>
    </div>
  );
};

export default CreateLeadModal;
