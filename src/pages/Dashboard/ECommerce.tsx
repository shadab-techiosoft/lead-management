import React from 'react';

import TableOne from '../../components/Tables/TableOne';
import ProjectsByStageChart from '../../components/Chart/ProjectsByStageChart';

const ECommerce: React.FC = () => {
  return (
    <>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
       
        <div className="col-span-12 xl:col-span-12">
          <TableOne />
          <ProjectsByStageChart />
        </div>
        
      </div>
    </>
  );
};

export default ECommerce;
