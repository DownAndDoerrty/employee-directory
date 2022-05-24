import * as React from 'react';
import { Component } from 'react';

import { Employee } from '../utils/employeeType';
import DirectoryImage from './DirectoryImage';

interface EmployeeTableBodyProps {
  employeeData: Array<Array<Employee>>;
  pageNumber: number;
}

class EmployeeTableBody extends Component<EmployeeTableBodyProps> {
  constructor(props: EmployeeTableBodyProps | Readonly<EmployeeTableBodyProps>) {
    super(props);
  }

  render() {
    return (
      <tbody>
        {this.props.employeeData[this.props.pageNumber].map(
          ({ email, forename, surname, profileImage, title, phoneNumber }) => (
            <tr key={email}>
              <td id="directoryImageCell">
                <DirectoryImage imageSrc={profileImage} />
              </td>
              <td>{forename}</td>
              <td>{surname}</td>
              <td>{title}</td>
              <td>{email}</td>
              <td>{phoneNumber}</td>
            </tr>
          )
        )}
      </tbody>
    );
  }
}

export default EmployeeTableBody;
