import * as React from 'react';

import '../../styles/EmployeeTableHeader.scss';

const EmployeeTableHeader = () => {
  return (
    <thead>
      <tr>
        <th />
        <th id="directoryImageHeader" />
        <th>Forename</th>
        <th>Surname</th>
        <th>Job Title</th>
        <th>Department</th>
        <th>Email</th>
        <th>Phone Number</th>
      </tr>
    </thead>
  );
};

export default EmployeeTableHeader;
