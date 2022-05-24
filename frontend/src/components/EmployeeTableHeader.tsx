import * as React from 'react';
import { Component, Dispatch, SetStateAction } from 'react';
import SearchInput from './SearchInput';

import '../styles/EmployeeTableHeader.scss';

interface EmployeeTableFooterProps {
  employeeCount: number;
  setSearchField: Dispatch<SetStateAction<string>>;
}

class EmployeeTableHeader extends Component<EmployeeTableFooterProps> {
  constructor(props: EmployeeTableFooterProps | Readonly<EmployeeTableFooterProps>) {
    super(props);
  }

  render() {
    return (
      <thead>
        <tr id="tableInfoContainer">
          <td colSpan={3} id="employeeDataContainer">
            <p>Total Employees: {this.props.employeeCount}</p>
          </td>
          <td colSpan={4} id="searchInputContainer">
            <SearchInput setSearchField={this.props.setSearchField} />
          </td>
        </tr>
        <tr>
          <th />
          <th id="directoryImageHeader" />
          <th>Forename</th>
          <th>Surname</th>
          <th>Job Title</th>
          <th>Email</th>
          <th>Phone Number</th>
        </tr>
      </thead>
    );
  }
}

export default EmployeeTableHeader;
