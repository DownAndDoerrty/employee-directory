import * as React from 'react';
import { Component, Dispatch, SetStateAction } from 'react';

import { Employee } from '../utils/employeeType';
import DirectoryImage from './DirectoryImage';
import '../styles/EmployeeTableBody.scss';

interface EmployeeTableBodyProps {
  employeeData: Array<Array<Employee>>;
  pageNumber: number;
  selectedEmployee: Array<string>;
  setSelectedEmployee: Dispatch<SetStateAction<Array<string>>>;
}

class EmployeeTableBody extends Component<EmployeeTableBodyProps> {
  constructor(props: EmployeeTableBodyProps | Readonly<EmployeeTableBodyProps>) {
    super(props);
  }

  // Handle checkbox interaction for selecting employee
  handleSelectEmployee(id: string) {
    // Check if the currently selected employees include the ID that is being selected
    if (this.props.selectedEmployee.includes(id)) {
      // If so, filter the list of employees and update the selection
      const updatedSelectedEmployees = this.props.selectedEmployee.filter((employeeId) => {
        return employeeId !== id;
      });
      this.props.setSelectedEmployee(updatedSelectedEmployees);
    } else {
      // If not, add the employee ID to the current list of employees
      this.props.setSelectedEmployee([...this.props.selectedEmployee, id]);
    }
  }

  render() {
    return (
      <tbody>
        {this.props.employeeData[this.props.pageNumber].map(
          ({ id, email, forename, surname, profileImage, title, phoneNumber }) => (
            <tr key={email}>
              <td>
                <input
                  id="directoryCheckbox"
                  type={'checkbox'}
                  onChange={() => this.handleSelectEmployee(id)}
                />
              </td>
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
