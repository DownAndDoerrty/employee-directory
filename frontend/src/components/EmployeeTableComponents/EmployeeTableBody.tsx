import * as React from 'react';
import { Component, Dispatch, SetStateAction } from 'react';

import { Employee } from '../../graphql/types/employeeType';
import DirectoryImage from './DirectoryImage';
import '../../styles/EmployeeTableBody.scss';

interface EmployeeTableBodyProps {
  employeeData: Array<Array<Employee>>;
  pageNumber: number;
  selectedEmployees: Array<string>;
  setSelectedEmployees: Dispatch<SetStateAction<Array<string>>>;
}

class EmployeeTableBody extends Component<EmployeeTableBodyProps> {
  constructor(props: EmployeeTableBodyProps | Readonly<EmployeeTableBodyProps>) {
    super(props);
  }

  // Handle checkbox interaction for selecting employee
  handleSelectEmployee(id: string) {
    // Check if the currently selected employees include the ID that is being selected
    if (this.props.selectedEmployees.includes(id)) {
      // If so, filter the list of employees and update the selection
      const updatedSelectedEmployees = this.props.selectedEmployees.filter((employeeId) => {
        return employeeId !== id;
      });
      this.props.setSelectedEmployees(updatedSelectedEmployees);
    } else {
      // If not, add the employee ID to the current list of employees
      this.props.setSelectedEmployees([...this.props.selectedEmployees, id]);
    }
  }

  render() {
    if (this.props.employeeData[this.props.pageNumber] === undefined)
      return (
        <tbody>
          <tr key="noRecordsFound">
            <td colSpan={7}>
              <h3>Oh no! No Records Found.</h3>
              <p>Please broaden your search.</p>
            </td>
          </tr>
        </tbody>
      );

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
