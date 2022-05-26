import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';

import { Employee } from '../../graphql/types/employeeType';
import DirectoryImage from './DirectoryImage';
import '../../styles/EmployeeTableBody.scss';

interface EmployeeTableBodyProps {
  employeeData: Array<Employee>;
  pageNumber: number;
  selectedEmployees: Array<string>;
  setSelectedEmployees: Dispatch<SetStateAction<Array<string>>>;
}

const EmployeeTableBody = (props: EmployeeTableBodyProps) => {
  // Handle checkbox interaction for selecting employee
  const handleSelectEmployee = (id: string) => {
    // Check if the currently selected employees include the ID that is being selected
    if (props.selectedEmployees.includes(id)) {
      // If so, filter the list of employees and update the selection
      const updatedSelectedEmployees = props.selectedEmployees.filter((employeeId) => {
        return employeeId !== id;
      });
      props.setSelectedEmployees(updatedSelectedEmployees);
    } else {
      // If not, add the employee ID to the current list of employees
      props.setSelectedEmployees([...props.selectedEmployees, id]);
    }
  };

  if (props.employeeData === undefined)
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
      {props.employeeData.map(
        ({ id, email, forename, surname, profileImage, title, phoneNumber, departmentName }) => (
          <tr key={email}>
            <td>
              <input
                id="directoryCheckbox"
                type={'checkbox'}
                onChange={() => handleSelectEmployee(id)}
              />
            </td>
            <td id="directoryImageCell">
              <DirectoryImage imageSrc={profileImage} />
            </td>
            <td>{forename}</td>
            <td>{surname}</td>
            <td>{title}</td>
            <td>{departmentName}</td>
            <td>{email}</td>
            <td>{phoneNumber}</td>
          </tr>
        )
      )}
    </tbody>
  );
};

export default EmployeeTableBody;
