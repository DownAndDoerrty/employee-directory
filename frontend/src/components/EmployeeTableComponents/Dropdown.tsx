import * as React from 'react';
import { ChangeEvent, Dispatch, ReactNode, SetStateAction } from 'react';

interface DropdownProps {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  departments: Array<{ name: string }> | undefined;
  defaultValue: string;
  children: ReactNode;
  label: string;
}

const Dropdown = (props: DropdownProps) => {
  const handleDropdownChange = (event: ChangeEvent<HTMLSelectElement>) => {
    props.setSelected(event.target.value);
  };

  return (
    <div id="inputAndDropdownContainer">
      <label htmlFor="dropdown">{props.label}</label>
      <select
        name="dropdown"
        onChange={(event) => handleDropdownChange(event)}
        value={props.selected}>
        <option key={props.defaultValue} value={props.defaultValue}>
          {props.defaultValue}
        </option>
        {props.children}
      </select>
    </div>
  );
};

export default Dropdown;
