import React, { useState } from 'react';

import CompanyList from './CompanyList';

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

const DataAnalyst: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [contactPoints, setContactPoints] = useState<ContactPoint[]>([]);

  const addCompany = (name: string, industry: string, product: string) => {
    const newCompany: Company = {
      id: companies.length + 1,
      name,
      industry,
      product,
      contactPoints,
    };
    setCompanies([...companies, newCompany]);
    setContactPoints([]);
  };

  const addContactPoint = (contactPoint: ContactPoint) => {
    setContactPoints([...contactPoints, contactPoint]);
  };

  return (
    <div className="p-4   border rounded-lg shadow-md border-stroke bg-whiter px-5 pt-6 pb-2.5  sm:px-7.5 xl:pb-1">
      <h1 className="text-2xl font-bold mb-4 text-lightblue">Data Analyst</h1>
      <CompanyList 
        companies={companies} 
        addCompany={addCompany} 
        addContactPoint={addContactPoint} 
      />
    </div>
  );
};

export default DataAnalyst;
