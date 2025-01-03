import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"
import FormInput from "./FormInput";
// import ViewAnalystData from "./ViewAnalystData";

const CreateLead: React.FC = () => {
  const [entries, setEntries] = useState<any[]>(() => {
    return JSON.parse(localStorage.getItem("companyEntries") || "[]");
  });

  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    product: "",
    contactName: "",
    designation: "",
    linkedInURL: "",
    officialEmail: "",
    alternateEmail: "",
    contactNumber: "",
    whatsappNumber: "",
    alternateContactNumber: "",
  });

  const [companyList, setCompanyList] = useState<string[]>(() => {
    return JSON.parse(localStorage.getItem("companyList") || "[]");
  });

  const [isAddingCompany, setIsAddingCompany] = useState(false);
  const [newCompanyName, setNewCompanyName] = useState("");

  // Save entries to local storage
  useEffect(() => {
    localStorage.setItem("companyEntries", JSON.stringify(entries));
    localStorage.setItem("companyList", JSON.stringify(companyList));
  }, [entries, companyList]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddEntry = (e: React.FormEvent) => {
    e.preventDefault();
    setEntries([...entries, { ...formData, date: new Date().toLocaleString() }]);
    setFormData({
      companyName: "",
      industry: "",
      product: "",
      contactName: "",
      designation: "",
      linkedInURL: "",
      officialEmail: "",
      alternateEmail: "",
      contactNumber: "",
      whatsappNumber: "",
      alternateContactNumber: "",
    });
  };

  const handleAddCompany = () => {
    if (newCompanyName.trim() && !companyList.includes(newCompanyName)) {
      setCompanyList([...companyList, newCompanyName]);
      setFormData({ ...formData, companyName: newCompanyName });
    }
    setIsAddingCompany(false);
    setNewCompanyName("");
  };

  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md w-full max-w-7xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-lg font-semibold text-lightblue mb-4">Add New Company</h2>
      <form onSubmit={handleAddEntry} className="space-y-4">
        <div className="relative z-50 max-w-md">
          <label className="block text-sm font-medium text-gray-700">Add New</label>
          <div className="relative mt-1">
            <select
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="block w-full py-3 pl-3 pr-10 bg-white text-lightblue border border-lightblue rounded-md shadow-sm focus:outline-none focus:ring-lightblue focus:border-lightblue sm:text-sm"
            >
              <option value="" disabled>
                Select Company
              </option>
              {companyList.map((company, index) => (
                <option key={index} value={company}>
                  {company}
                </option>
              ))}
              <option value="add-new">+ Add New Company</option>
            </select>

            <AnimatePresence>
              {formData.companyName === "add-new" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 top-full mt-2 w-full bg-white text-lightblue border border-lightblue rounded-md shadow-lg p-3"
                >
                  {isAddingCompany ? (
                    <>
                      <input
                        type="text"
                        placeholder="Enter Company Name"
                        value={newCompanyName}
                        onChange={(e) => setNewCompanyName(e.target.value)}
                        className="block w-full py-2 px-3 border border-lightblue rounded-md focus:outline-none focus:ring-lightblue focus:border-lightblue sm:text-sm"
                      />
                      <button
                        type="button"
                        onClick={handleAddCompany}
                        className="mt-2 bg-lightblue text-white px-4 py-1 rounded-md hover:bg-lightblue-dark"
                      >
                        Save
                      </button>
                    </>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setIsAddingCompany(true)}
                      className="bg-lightblue text-white px-4 py-1 rounded-md hover:bg-lightblue-dark"
                    >
                      Add Company
                    </button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/*  Company Name */}
          <FormInput
            label="Company Name"
            name="companyName"
            required={true}
            placeholder="Enter Company Name"
            value={formData.companyName}
            onChange={handleChange}
          />
          {/* Dropdowns for Industry and Product */}
          <div className="relative">
            <label className="block text-sm font-medium text-lightblue">Industry</label>
            <div className="relative mt-1">
              <select
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="block w-full py-3 pl-3 pr-10 bg-white text-lightblue border border-lightblue rounded-md shadow-sm focus:outline-none focus:ring-lightblue focus:border-lightblue sm:text-sm"
              >
                <option value="" disabled>
                  Select Industry
                </option>
                <option value="Technology">Technology</option>
                <option value="Finance">Finance</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>
                <option value="Manufacturing">Manufacturing</option>
              </select>
            </div>
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-lightblue">Product</label>
            <div className="relative mt-1 ">
              <select
                name="product"
                value={formData.product}
                onChange={handleChange}
                className="block w-full py-3 pl-3 pr-10 bg-white text-lightblue border border-lightblue rounded-md shadow-sm focus:outline-none focus:ring-lightblue focus:border-lightblue sm:text-sm"
              >
                <option value="" disabled>
                  Select Product
                </option>
                <option value="Software">Software</option>
                <option value="Hardware">Hardware</option>
                <option value="Service">Service</option>
                <option value="Consulting">Consulting</option>
              </select>
            </div>
          </div>

          {/* Other Fields */}
          <FormInput
            label="Contact Name"
            name="contactName"
            required={true}
            placeholder="Enter Contact Name"
            value={formData.contactName}
            onChange={handleChange}
          />
          <FormInput
            label="Designation"
            name="designation"
            placeholder="Enter Designation"
            value={formData.designation}
            onChange={handleChange}
          />
          <FormInput
            label="LinkedIn URL"
            name="linkedInURL"
            placeholder="Enter LinkedIn URL"
            value={formData.linkedInURL}
            onChange={handleChange}
          />
          <FormInput
            label="Official Email"
            name="officialEmail"
            type="email"
            placeholder="Enter Official Email"
            value={formData.officialEmail}
            onChange={handleChange}
          />
          <FormInput
            label="Contact Number"
            name="contactNumber"
            type="tel"
            placeholder="Enter Contact Number"
            value={formData.contactNumber}
            onChange={handleChange}
          />
          <FormInput
            label="WhatsApp Number"
            name="whatsappNumber"
            type="tel"
            placeholder="Enter WhatsApp Number"
            value={formData.whatsappNumber}
            onChange={handleChange}
          />
          <FormInput
            label="Lead Assigned To"
            name="leadAssignedTo"
            required={true}
            placeholder="Enter Assignee"
          />
          <FormInput
            label="Next Followup Date"
            name="nextFollowupDate"
            type="date"
            required={true}
          />
          <FormInput
            label="Remarks"
            name="remarks"
            placeholder="Enter Remarks"
          />
          <FormInput
            label="Item Description"
            name="itemDescription"
            placeholder="Enter Description"
          />
          <FormInput
            label="Quantity"
            name="quantity"
            type="number"
            placeholder="Enter Quantity"
          />
          <FormInput
            label="Rate"
            name="rate"
            type="number"
            placeholder="Enter Rate"
          />
        </div>

        <div className="text-right mt-4">
          <button
            type="submit"
            className="bg-lightblue  text-white px-10 py-2 rounded hover:bg-lightblue-dark transition"
          >
            Add Entry
          </button>
        </div>
      </form>

      {/* View Data */}
      {/* <ViewAnalystData entries={entries} /> */}
    </motion.div>
  );
};

export default CreateLead;
