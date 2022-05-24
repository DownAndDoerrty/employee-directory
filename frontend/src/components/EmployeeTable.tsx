import * as React from 'react';
import { useState } from 'react';
import { gql, useQuery } from '@apollo/client';

import EmployeeTableHeader from './EmployeeTableHeader';
import EmployeeTableFooter from './EmployeeTableFooter';
import EmployeeTableBody from './EmployeeTableBody';

const EMPLOYEES_QUERY = gql`
  query EmployeesQuery {
    employees {
      email
      phoneNumber
      forename
      surname
      profileImage
      title
      department {
        name
      }
    }
  }
`;

const EmployeeTable = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [limit, setLimit] = useState(10);

  const { loading, error, data } = useQuery(EMPLOYEES_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const employeeData = Array.from({ length: Math.ceil(data.employees.length / limit) }, (_v, i) =>
    data.employees.slice(i * limit, i * limit + limit)
  );

  console.log({ pageNumber });
  return (
    <div>
      <table>
        <EmployeeTableHeader employeeCount={data.employees.length} />
        <EmployeeTableBody employeeData={employeeData} pageNumber={pageNumber} />
        <EmployeeTableFooter
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          employeeData={employeeData}
        />
      </table>
    </div>
  );
};

export default EmployeeTable;
