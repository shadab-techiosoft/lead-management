import React, { useState } from 'react';

interface CompanyFormProps {
    addCompany: (name: string, industry: string, product: string) => void;
}

const CompanyForm: React.FC<CompanyFormProps> = () => {
    const [name, setName] = useState('');
    const [industry, setIndustry] = useState('');
    const [product, setProduct] = useState('');

   
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-2 text-lightblue">Create Company</h2>
            <div className="mb-4">
                <label className="block mb-2 text-lightblue">Company Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border p-2 w-full text-lightblue placeholder-lightblue"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 text-lightblue">Industry</label>
                <input
                    type="text"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="border p-2 w-full text-lightblue placeholder-lightblue"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 text-lightblue">Product</label>
                <input
                    type="text"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    className="border p-2 w-full text-lightblue placeholder-lightblue"
                />
            </div>
          
        </div>
    );
};

export default CompanyForm;