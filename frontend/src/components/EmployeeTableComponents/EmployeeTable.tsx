import * as React from 'react';
import { useState } from 'react';
import { useQuery } from '@apollo/client';

import '../../styles/EmployeeTable.scss';
import { EMPLOYEES_QUERY } from '../../graphql/employeesQuery';
import EmployeeTableHeader from './EmployeeTableHeader';
import EmployeeTableFooter from './EmployeeTableFooter';
import EmployeeTableBody from './EmployeeTableBody';
import Dropdown from '../Dropdown';
import SearchInput from '../SearchInput';
import RecordOperations from './RecordOperations';

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
      limit: Number(limit),
      departmentName: selectedDepartment,
      searchField: searchField
    }
  });

  if (error) return <p>Error</p>;

  return (
    <div>
      <div id="headerInputsContainer">
        <SearchInput
          setSearchField={setSearchField}
          label={'Search by Forename'}
          placeholder={'Search Employees by Forename'}
        />
        <Dropdown
          label="Department"
          defaultValue="All"
          selected={selectedDepartment}
          setSelected={setSelectedDepartment}>
          {data?.departments
            ? data?.departments.map(({ name }) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))
            : null}
        </Dropdown>
        <Dropdown label="Rows" defaultValue="10" selected={limit} setSelected={setLimit}>
          {[25, 50].map((rowNumber) => (
            <option key={rowNumber} value={rowNumber}>
              {rowNumber}
            </option>
          ))}
        </Dropdown>
        <RecordOperations
          selectedEmployees={selectedEmployees}
          setSelectedEmployees={setSelectedEmployees}
        />
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <table>
            <EmployeeTableHeader />
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
