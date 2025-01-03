import React, { useState } from "react";
import ReactPaginate from "react-paginate";

interface Entry {
  company: string;
  industry: string;
  product: string;
  contactName: string;
  designation: string;
  linkedInUrl: string;
  officialEmail: string;
  alternateEmail: string;
  contactNumber: string;
  whatsAppNumber: string;
  alternateContactNumber: string;
  date: string;
}

interface ViewAnalystDataProps {
  entries: Entry[];
}

const ViewAnalystData: React.FC<ViewAnalystDataProps> = ({ entries }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const entriesPerPage = 10;
  const pageCount = Math.ceil(entries.length / entriesPerPage);

  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * entriesPerPage;
  const currentEntries = entries.slice(offset, offset + entriesPerPage);

  return (
    <div className="mt-8  border rounded-lg shadow-md border-stroke bg-whiter px-5 pt-6 pb-2.5  sm:px-7.5 xl:pb-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
        <h3 className="text-lg font-semibold text-lightblue mb-2 sm:mb-0">Saved Entries</h3>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="rounded-md border max-w-md text-lightblue bg-whiter w-full sm:w-auto placeholder:text-gray-600 border-lightblue p-2"
        />
      </div>
     
      <div className="overflow-x-auto hide-scrollbar">
        <table className="min-w-full bg-white border border-lightblue rounded-lg ">
          <thead className="bg-lightblue text-white whitespace-nowrap ">
            <tr>
              {[
                "Company",
                "Industry",
                "Product",
                "Contact Name",
                "Designation",
                "LinkedIn URL",
                "Official Email",
                "Alternate Email",
                "Contact Number",
                "WhatsApp Number",
                "Alternate Contact Number",
                "Date",
              ].map((header, index) => (
                <th key={index} className="px-4 py-2 text-left">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentEntries.map((entry, index) => (
              <tr key={index} className="border-b">
                {Object.values(entry).map((value, i) => (
                  <td key={i} className="px-4 py-2">
                    {value}
                  </td>
                ))}
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
        containerClassName={'my-4 flex justify-end items-center gap-3 text-lightblue'}
        previousClassName={'text-lightblue cursor-pointer'}
        nextClassName={'text-lightblue cursor-pointer'}
        disabledClassName={'opacity-50 cursor-not-allowed'}
        pageClassName={'cursor-pointer'}
        pageLinkClassName={'px-3 py-1 rounded-full text-lightblue'}
        activeClassName={'font-bold bg-lightblue text-white rounded-full px-3 py-1'}
        breakLabel={'...'}
        breakClassName={'cursor-default'}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default ViewAnalystData;
