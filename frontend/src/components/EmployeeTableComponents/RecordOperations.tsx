import * as React from 'react';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';

import '../../styles/EmployeeTableHeader.scss';
import { DELETE_EMPLOYEE_MUTATION } from '../../graphql/deleteEmployeeMutation';
import { EMPLOYEES_QUERY } from '../../graphql/employeesQuery';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';

const RecordOperations = (props: {
  selectedEmployees: Array<string>;
  setSelectedEmployees: Dispatch<SetStateAction<Array<string>>>;
}) => {
  const [deleteEmployee] = useMutation(DELETE_EMPLOYEE_MUTATION, {
    refetchQueries: [EMPLOYEES_QUERY, 'EmployeesQuery']
  });
  const [deleteDisabled, setDeleteDisabled] = useState(true);
  const navigate = useNavigate();

  // Handle the deleted of an employee
  const handleDeleteEmployee = (id: string) => {
    deleteEmployee({ variables: { id: id } })
      .then(() => {
        // Set selected employees to an empty array after deleting one
        props.setSelectedEmployees([]);
      })
      .catch((error) => {
        // Throw error if necessary
        console.assert(error);
      });
  };

  // Set the state of the delete employee button to enabled if the number of selected records is exactly 1
  useEffect(() => {
    props.selectedEmployees.length === 1 ? setDeleteDisabled(false) : setDeleteDisabled(true);
  });

  return (
    <div id="recordOperationsContainer" className="recordOperationsContainer">
      <Button
        text="Add New Employee"
        handleClick={() => navigate('/create-employee')}
        disabled={false}
      />
      <Button
        text="Delete Selected Employee"
        disabled={deleteDisabled}
        handleClick={() => handleDeleteEmployee(props.selectedEmployees[0])}
      />
    </div>
  );
};

export default RecordOperations;
