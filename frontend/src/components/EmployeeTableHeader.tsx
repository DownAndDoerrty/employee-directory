import * as React from 'react';
import { Component } from 'react';

interface EmployeeTableFooterProps {
  employeeCount: number;
}

class EmployeeTableHeader extends Component<EmployeeTableFooterProps> {
  constructor(props: EmployeeTableFooterProps | Readonly<EmployeeTableFooterProps>) {
    super(props);
  }

  render() {
    return (
      <thead>
        <tr>
          <td colSpan={3} id="tableInfoContainer">
            <p>Total Employees: {this.props.employeeCount}</p>
          </td>
        </tr>
        <tr>
          <th id="directoryImageHeader"></th>
          <th>Forename</th>
          <th>Surname</th>
          <th>title</th>
          <th>Email</th>
          <th>Phone Number</th>
        </tr>
      </thead>
    );
  }
}

export default EmployeeTableHeader;
