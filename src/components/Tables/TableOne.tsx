import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { FaEdit, FaTrash } from 'react-icons/fa';
import CreateLeadModal, { Lead } from '../modals/CreateLeadModal';

// Correct lead data array (from your code)
const leadData: Lead[] = [
  {
    leadName: 'John Doe',
    companyName: 'Google',
    phone: '123-456-7890',
    email: 'johndoe@gmail.com',
    leadStatus: 'Active',
    createdDate: '2023-12-01',
    leadOwner: 'Alice',
  },
  {
    leadName: 'Jane Smith',
    companyName: 'Twitter',
    phone: '987-654-3210',
    email: 'janesmith@twitter.com',
    leadStatus: 'Inactive',
    createdDate: '2023-12-05',
    leadOwner: 'Bob',
  },
  {
    leadName: 'Jane Smith',
    companyName: 'Twitter',
    phone: '987-654-3210',
    email: 'janesmith@twitter.com',
    leadStatus: 'Inactive',
    createdDate: '2023-12-05',
    leadOwner: 'Bob',
  },
  {
    leadName: 'Jane Smith',
    companyName: 'Twitter',
    phone: '987-654-3210',
    email: 'janesmith@twitter.com',
    leadStatus: 'Inactive',
    createdDate: '2023-12-05',
    leadOwner: 'Bob',
  },
  {
    leadName: 'Jane Smith',
    companyName: 'Twitter',
    phone: '987-654-3210',
    email: 'janesmith@twitter.com',
    leadStatus: 'Inactive',
    createdDate: '2023-12-05',
    leadOwner: 'Bob',
  },
  {
    leadName: 'Jane Smith',
    companyName: 'Twitter',
    phone: '987-654-3210',
    email: 'janesmith@twitter.com',
    leadStatus: 'Inactive',
    createdDate: '2023-12-05',
    leadOwner: 'Bob',
  },
  {
    leadName: 'Jane Smith',
    companyName: 'Twitter',
    phone: '987-654-3210',
    email: 'janesmith@twitter.com',
    leadStatus: 'Inactive',
    createdDate: '2023-12-05',
    leadOwner: 'Bob',
  },
  {
    leadName: 'Jane Smith',
    companyName: 'Twitter',
    phone: '987-654-3210',
    email: 'janesmith@twitter.com',
    leadStatus: 'Inactive',
    createdDate: '2023-12-05',
    leadOwner: 'Bob',
  },
  {
    leadName: 'Jane Smith',
    companyName: 'Twitter',
    phone: '987-654-3210',
    email: 'janesmith@twitter.com',
    leadStatus: 'Inactive',
    createdDate: '2023-12-05',
    leadOwner: 'Bob',
  },

];

// Map of status colors
const statusColors = {
  Active: 'bg-success text-success bg-opacity-10',
  Inactive: 'bg-gray-400 text-white',
  Pending: 'bg-warning text-warning bg-opacity-10',
};

const TableComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<Lead | undefined>(undefined);
  const [leads, setLeads] = useState(leadData); // Fixed initialization

  const itemsPerPage = 5;

  const filteredData = leads.filter(
    (item) =>
      item.leadName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.phone.includes(searchQuery) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.leadStatus.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const pageCount = Math.ceil(filteredData.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentPageData = filteredData.slice(offset, offset + itemsPerPage);

  const handlePageClick = (selected: { selected: number }) => {
    setCurrentPage(selected.selected);
  };

  const handleCreate = () => {
    setModalData(undefined);
    setIsModalOpen(true);
  };

  const handleEdit = (lead: Lead) => {
    setModalData(lead);
    setIsModalOpen(true);
  };

  const handleSubmit = (lead: Lead) => {
    if (modalData) {
      // Edit existing lead
      setLeads((prevLeads) =>
        prevLeads.map((l) => (l.email === modalData.email ? lead : l))
      );
    } else {
      // Add new lead
      setLeads((prevLeads) => [...prevLeads, lead]);
    }
    setIsModalOpen(false); // Close modal after save
  };

  return (
    <div className=" border rounded-lg shadow-md border-stroke bg-whiter px-5 pt-6 pb-2.5  sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-graydark">Leads Table</h4>
      <div className="flex justify-between">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-4 rounded-md border max-w-md text-graydark bg-whiter w-full placeholder:text-gray-600 border-graydark p-2"
        />
        <button
          className="mb-4 ml-4 rounded-md bg-graydark text-white px-5 py-1"
          onClick={handleCreate}
        >
          Create Lead
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-graydark">
          <thead className=''>
            <tr className="bg-body ">
              <th className="border border-graydark p-4 text-left text-graydark">
                <input type="checkbox" />
              </th>
              <th className="border border-graydark p-3 text-left text-graydark">Lead Name</th>
              <th className="border border-graydark p-3 text-left text-graydark">Company Name</th>
              <th className="border border-graydark p-3 text-left text-graydark">Phone</th>
              <th className="border border-graydark p-3 text-left text-graydark">Email</th>
              <th className="border border-graydark p-3 text-left text-graydark">Lead Status</th>
              <th className="border border-graydark p-3 text-left text-graydark">Created Date</th>
              <th className="border border-graydark p-3 text-left text-graydark">Lead Owner</th>
              <th className="border border-graydark p-3 text-left text-graydark">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentPageData.map((lead, index) => (
              <tr key={index}>
                <td className="border border-graydark p-4">
                  <input type="checkbox" />
                </td>
                <td className="border border-graydark p-4 text-graydark">{lead.leadName}</td>
                <td className="border border-graydark p-4 text-graydark">{lead.companyName}</td>
                <td className="border border-graydark p-4 text-graydark">{lead.phone}</td>
                <td className="border border-graydark p-4 text-graydark">{lead.email}</td>
                <td className="border border-graydark p-4 text-center">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${statusColors[lead.leadStatus as keyof typeof statusColors]}`}
                  >
                    {lead.leadStatus}
                  </span>
                </td>
                <td className="border border-graydark p-2 text-center text-graydark">
                  {lead.createdDate}
                </td>
                <td className="border border-graydark p-2 text-center text-graydark">
                  {lead.leadOwner}
                </td>
                <td className="border border-graydark p-2 text-center text-graydark">
                  <div className="flex justify-center gap-2">
                    <FaEdit
                      className="cursor-pointer text-black"
                      onClick={() => handleEdit(lead)}
                    />
                    <FaTrash className="cursor-pointer text-red-500" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ReactPaginate
  previousLabel={'Prev'}
  nextLabel={'Next'}
  pageCount={pageCount}
  onPageChange={handlePageClick}
  containerClassName={'my-4 flex justify-end items-center gap-3 text-graydark'}
  previousClassName={'text-graydark cursor-pointer'}
  nextClassName={'text-graydark cursor-pointer'}
  disabledClassName={'opacity-50 cursor-not-allowed'}
  pageClassName={'cursor-pointer'}
  pageLinkClassName={'px-3 py-1 rounded-full text-graydark'} // Default text-graydark
  activeClassName={'font-bold bg-graydark text-whiter rounded-full px-3 py-1'} // Active styling
  breakLabel={'...'}
  breakClassName={'cursor-default'}
  renderOnZeroPageCount={null}
/>



      <CreateLeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSubmit}
        initialData={modalData}
      />
    </div>
  );
};

export default TableComponent;