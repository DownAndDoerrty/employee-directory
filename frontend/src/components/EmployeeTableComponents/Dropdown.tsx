import * as React from 'react';
import { ChangeEvent, Component, Dispatch, SetStateAction } from 'react';

interface DropdownProps {
  selectedDepartment: string;
  setSelectedDepartment: Dispatch<SetStateAction<string>>;
  departments: Array<{ name: string }> | undefined;
}

class Dropdown extends Component<DropdownProps> {
  constructor(props: DropdownProps | Readonly<DropdownProps>) {
    super(props);
  }

  handleDropdownChange = (event: ChangeEvent<HTMLSelectElement>) => {
    this.props.setSelectedDepartment(event.target.value);
  };

  render() {
    return (
      <div id="inputAndDropdownContainer">
        <label htmlFor="departmentDropdown">Select Department</label>
        <select
          name="departmentDropdown"
          onChange={(event) => this.handleDropdownChange(event)}
          value={this.props.selectedDepartment}>
          <option key="All" value="All">
            All
          </option>
          {this.props.departments
            ? this.props.departments.map(({ name }) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))
            : null}
        </select>
      </div>
    );
  }
}

export default Dropdown;
