import * as React from 'react';
import { ChangeEvent, Component, Dispatch, SetStateAction } from 'react';

interface DropdownProps {
  selectedDepartment: string;
  setSelectedDepartment: Dispatch<SetStateAction<string>>;
  departments: Array<{ name: string }> | undefined;
}

const Dropdown = (props: DropdownProps) => {
  const handleDropdownChange = (event: ChangeEvent<HTMLSelectElement>) => {
    props.setSelectedDepartment(event.target.value);
  };

  return (
    <div id="inputAndDropdownContainer">
      <label htmlFor="departmentDropdown">Select Department</label>
      <select
        name="departmentDropdown"
        onChange={(event) => handleDropdownChange(event)}
        value={props.selectedDepartment}>
        <option key="All" value="All">
          All
        </option>
        {props.departments
          ? props.departments.map(({ name }) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))
          : null}
      </select>
    </div>
  );
};

export default Dropdown;
