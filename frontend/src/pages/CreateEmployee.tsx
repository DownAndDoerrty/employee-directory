import * as React from 'react';
import { Component, useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';

import '../styles/CreateEmployee.scss';
import { CreateEmployeeMutationType } from '../graphql/types/createEmployeeMutationType';
import { CREATE_EMPLOYEE_MUTATION } from '../graphql/createEmployeeMutation';
import Button from '../components/Button';

// Button for handling creating a new employee record
const CreateEmployeeRecordButton = (props: { createEmployeeInput: CreateEmployeeMutationType }) => {
  const [createEmployee, { data, loading, error }] = useMutation(CREATE_EMPLOYEE_MUTATION);
  const [createDisabled, setCreateDisabled] = useState(true);

  // Handle creating employee
  const handleCreateEmployee = (
    input: CreateEmployeeMutationType,
    event: { preventDefault: () => void }
  ) => {
    event.preventDefault();
    createEmployee({ variables: { ...input } })
      .then(() => {
        alert('Success! Employee record created');
      })
      .catch((e) => {
        // Throw error if creation failed
        throw new Error(e);
      });
  };

  // Make sure form is completely filled before allowing submission
  useEffect(() => {
    props.createEmployeeInput.email &&
    props.createEmployeeInput.phoneNumber &&
    props.createEmployeeInput.forename &&
    props.createEmployeeInput.surname &&
    props.createEmployeeInput.profileImage &&
    props.createEmployeeInput.title &&
    props.createEmployeeInput.departmentName
      ? setCreateDisabled(false)
      : setCreateDisabled(true);
  });

  if (loading) return <h5>Please Hold...</h5>;
  if (error) return <h5>Creation Failed!</h5>;

  return (
    <Button
      text="Create Employee"
      handleClick={(event) => handleCreateEmployee(props.createEmployeeInput, event)}
      disabled={createDisabled}
    />
  );
};

class CreateEmployee extends Component<unknown, CreateEmployeeMutationType> {
  constructor(props: unknown | Readonly<unknown>) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      phoneNumber: '',
      forename: '',
      surname: '',
      profileImage: '',
      title: '',
      departmentName: ''
    };
  }

  handleChange(event) {
    const { id, value } = event.target;
    this.setState((prevState) => ({ ...prevState, [id]: value }));
  }

  render() {
    return (
      <div>
        <h2>Create Employee</h2>
        <form id="createEmployeeContainer">
          <label htmlFor="forename">Forename</label>
          <br />
          <input
            type="text"
            id="forename"
            placeholder="Forename"
            value={this.state.forename}
            onChange={this.handleChange}
          />
          <label htmlFor="surname">Surname</label>
          <br />
          <input
            type="text"
            id="surname"
            placeholder="Surname"
            value={this.state.surname}
            onChange={this.handleChange}
          />
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="text"
            id="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label htmlFor="phoneNumber">Phone Number</label>
          <br />
          <input
            type="text"
            id="phoneNumber"
            placeholder="Phone Number"
            value={this.state.phoneNumber}
            onChange={this.handleChange}
          />
          <label htmlFor="title">Title</label>
          <br />
          <input
            type="text"
            id="title"
            placeholder="Title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <label htmlFor="profileImage">Profile Image</label>
          <br />
          <input
            type="text"
            id="profileImage"
            placeholder="Profile Image"
            value={this.state.profileImage}
            onChange={this.handleChange}
          />
          <label htmlFor="departmentName">Department Name*</label>
          <br />
          <input
            type="text"
            id="departmentName"
            placeholder="Department Name"
            value={this.state.departmentName}
            onChange={this.handleChange}
          />
          <CreateEmployeeRecordButton createEmployeeInput={this.state} />
          <h6>
            *For purposes of demonstration the department name is one of: Engineering, Security,
            Sales, Anthropology, or Publishing{' '}
          </h6>
        </form>
      </div>
    );
  }
}

export default CreateEmployee;
