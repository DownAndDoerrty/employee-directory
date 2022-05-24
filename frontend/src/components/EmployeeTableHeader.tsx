import * as React from 'react';
import { Component } from 'react';
import SearchInput from './SearchInput';

interface EmployeeTableFooterProps {
  employeeCount: number;
  setSearchField: React.Dispatch<React.SetStateAction<string>>;
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
          <td colSpan={3} id="searchInputContainer">
            <SearchInput setSearchField={this.props.setSearchField} />
          </td>
        </tr>
        <tr>
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
