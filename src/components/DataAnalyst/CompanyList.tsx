import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaTrash, FaEdit, FaEye } from 'react-icons/fa';
import CompanyForm from './CompanyForm';
import ContactPointForm from './ContactPointForm';
import ViewData from './ViewData';
import ReactPaginate from 'react-paginate';

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

interface CompanyListProps {
    companies: Company[];
    addCompany: (name: string, industry: string, product: string) => void;
    addContactPoint: (contactPoint: ContactPoint) => void;
}

const CompanyList: React.FC<CompanyListProps> = ({ companies: initialCompanies, addCompany, addContactPoint }) => {
    const [companies, setCompanies] = useState(initialCompanies);
    const [search, setSearch] = useState('');
    const [isModalOpen, setModalOpen] = useState(false);
    const [isViewModalOpen, setViewModalOpen] = useState(false);
    const [currentCompany, setCurrentCompany] = useState<Company | null>(null);
    const [currentPage, setCurrentPage] = useState(0);

    const companiesPerPage = 5;
    const pagesVisited = currentPage * companiesPerPage;
    const filteredCompanies = companies.filter((company) =>
        company.name.toLowerCase().includes(search.toLowerCase())
    );

    const pageCount = Math.ceil(filteredCompanies.length / companiesPerPage);

    const changePage = ({ selected }: { selected: number }) => {
        setCurrentPage(selected);
    };

    const handleView = (company: Company) => {
        setCurrentCompany(company);
        setViewModalOpen(true);
    };

    const handleRemove = (id: number) => { setCompanies(prev => prev.filter(company => company.id !== id)); };

    const handleEdit = (company: Company) => {
        setCurrentCompany(company);
        setModalOpen(true);
    };

    return (
        <div className="mb-4 ">
            <div className="flex justify-between items-center mb-4">
                <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border rounded-md p-2 w-full max-w-md text-lightblue border-lightblue placeholder-lightblue"
                />
                <button
                    onClick={() => setModalOpen(true)}
                    className="bg-lightblue text-white p-2 rounded-md ml-4"
                >
                    Create Company
                </button>
            </div>
            <div className="overflow-x-auto hide-scrollbar ">
                <table className="min-w-full bg-white border rounded-md">
                    <thead>
                        <tr className="bg-body text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">#</th>
                            <th className="py-3 px-6 text-left">
                                <input type="checkbox" className="accent-lightblue" />
                            </th>
                            <th className="py-3 px-6 text-left whitespace-nowrap">Company Name</th>
                            <th className="py-3 px-6 text-left whitespace-nowrap">Industry</th>
                            <th className="py-3 px-6 text-left whitespace-nowrap">Product</th>
                            <th className="py-3 px-6 text-left whitespace-nowrap">Contact Person Name</th>
                            <th className="py-3 px-6 text-left whitespace-nowrap">Designation</th>
                            <th className="py-3 px-6 text-left whitespace-nowrap">LinkedIn URL</th>
                            <th className="py-3 px-6 text-left whitespace-nowrap">Official Email </th>
                            <th className="py-3 px-6 text-left whitespace-nowrap">Alternate Email</th>
                            <th className="py-3 px-6 text-left whitespace-nowrap">Contact No</th>
                            <th className="py-3 px-6 text-left whitespace-nowrap">WhatsApp Number</th>
                            <th className="py-3 px-6 text-left whitespace-nowrap">Alternate Contact No</th>
                            <th className="py-3 px-6 text-left whitespace-nowrap">Date Created</th>
                            <th className="py-3 px-6 text-left whitespace-nowrap">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {filteredCompanies.slice(pagesVisited, pagesVisited + companiesPerPage).map((company, index) => (
                            <motion.tr
                                key={company.id}
                                className="border-b border-gray-200 hover:bg-gray-100"
                                initial={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >

                                <td className="py-3 px-6 text-left whitespace-nowrap">{index + 1 + pagesVisited}</td>
                                <td className="py-3 px-6 text-left"><input type="checkbox" className="accent-lightblue" /></td>
                                <td className="py-3 px-6 text-left">{company.name}</td>
                                <td className="py-3 px-6 text-left">{company.industry}</td>
                                <td className="py-3 px-6 text-left">{company.product}</td>
                                <td className="py-3 px-6 text-left flex space-x-2">
                                    <FaEye onClick={() => handleView(company)} className="text-blue-500 cursor-pointer" />
                                    <FaEdit onClick={() => handleEdit(company)} className="text-yellow-500 cursor-pointer" />
                                    <FaTrash onClick={() => handleRemove(company.id)} className="text-red-500 cursor-pointer" />
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={'my-4 flex justify-end items-center gap-3 text-lightblue'}
                previousClassName={'text-lightblue cursor-pointer'}
                nextClassName={'text-lightblue cursor-pointer'}
                disabledClassName={'opacity-50 cursor-not-allowed'}
                pageClassName={'cursor-pointer'}
                pageLinkClassName={'px-3 py-1 rounded-full text-lightblue'}
                activeClassName={'font-bold bg-lightblue text-whiter rounded-full px-3 py-1'}
            />
            {isModalOpen && (
                <motion.div
                    initial={{ opacity: 0, x: "100%" }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: "100%" }}
                    className="fixed top-0 right-0 w-full max-w-md h-full bg-white shadow-lg p-4 z-50 overflow-y-scroll hide-scrollbar"
                    style={{ zIndex: 9999 }}
                >
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold text-lightblue">Company Form</h2>
                        <FaTimes onClick={() => setModalOpen(false)} className="text-whiter text-4xl bg-lightblue  rounded-full p-2 cursor-pointer" />
                    </div>
                    <div className="mt-4">
                        <CompanyForm addCompany={addCompany} />
                        <ContactPointForm addContactPoint={addContactPoint} />
                    </div>
                </motion.div>
            )}
            {isViewModalOpen && currentCompany && (
                <ViewData
                    company={currentCompany}
                    onClose={() => setViewModalOpen(false)}
                />
            )}
        </div>
    );
};

export default CompanyList;