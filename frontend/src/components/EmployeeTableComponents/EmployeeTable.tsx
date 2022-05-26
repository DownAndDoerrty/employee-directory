import * as React from 'react';
import { useState } from 'react';
import { useQuery } from '@apollo/client';

import EmployeeTableHeader from './EmployeeTableHeader';
import EmployeeTableFooter from './EmployeeTableFooter';
import EmployeeTableBody from './EmployeeTableBody';
import { EMPLOYEES_QUERY } from '../../graphql/employeesQuery';
import { Employee } from '../../graphql/types/employeeType';

const EmployeeTable = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [searchField, setSearchField] = useState('');
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [limit, setLimit] = useState(10);

  const { loading, error, data } = useQuery(EMPLOYEES_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  // Filter all employee data on a given substring from search input
  const filteredEmployeeData =
    // Determine if anything has been typed in the input
    searchField.length > 0
      ? data.employees.filter((employee: Employee) => {
          // Split each employee object into an array of it's values and then search that array for the substring
          return (Object.values(employee) as Array<string>).find((employeeArray) => {
            if (employeeArray.toLowerCase().includes(searchField.toLowerCase())) {
              return employee;
            }
          });
        })
      : // Return all employee data if nothing has been searched for
        data.employees;

  // Split employee data retrieved from GraphQL endpoint by number of rows requested
  const employeeData = Array.from(
    // Determine the number of pages by divided the employee records by requested rows
    { length: Math.ceil(filteredEmployeeData.length / limit) },
    // Split the employee data into segments of the requested length
    (_v, i) => filteredEmployeeData.slice(i * limit, i * limit + limit)
  );

  return (
    <div>
      <table>
        <EmployeeTableHeader
          setSearchField={setSearchField}
          selectedEmployees={selectedEmployees}
          setSelectedEmployees={setSelectedEmployees}
          employeeCount={filteredEmployeeData.length}
        />
        <EmployeeTableBody
          employeeData={employeeData}
          pageNumber={pageNumber}
          selectedEmployees={selectedEmployees}
          setSelectedEmployees={setSelectedEmployees}
        />
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
