import * as React from 'react';
import { useState } from 'react';
import { useQuery } from '@apollo/client';

import EmployeeTableHeader from './EmployeeTableHeader';
import EmployeeTableFooter from './EmployeeTableFooter';
import EmployeeTableBody from './EmployeeTableBody';
import { EMPLOYEES_QUERY } from '../../graphql/employeesQuery';
import Dropdown from './Dropdown';
import SearchInput from './SearchInput';

const EmployeeTable = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [searchField, setSearchField] = useState('');
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);

  const { loading, error, data } = useQuery(EMPLOYEES_QUERY, {
    variables: {
      offset: offset,
      limit: limit,
      departmentName: selectedDepartment,
      searchField: searchField
    }
  });

  if (error) return <p>Error</p>;

  return (
    <div>
      <SearchInput setSearchField={setSearchField} />
      <Dropdown
        selectedDepartment={selectedDepartment}
        setSelectedDepartment={setSelectedDepartment}
        departments={data?.departments}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <table>
            <EmployeeTableHeader
              selectedEmployees={selectedEmployees}
              setSelectedEmployees={setSelectedEmployees}
              employeeCount={data.employees.count}
            />

            <EmployeeTableBody
              employeeData={data.employees.records}
              pageNumber={pageNumber}
              selectedEmployees={selectedEmployees}
              setSelectedEmployees={setSelectedEmployees}
            />

            <EmployeeTableFooter
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              limit={limit}
              offset={offset}
              setOffset={setOffset}
              employeeRecordsCount={data.employees.count}
            />
          </table>
        </div>
      )}
    </div>
  );
};

export default EmployeeTable;
