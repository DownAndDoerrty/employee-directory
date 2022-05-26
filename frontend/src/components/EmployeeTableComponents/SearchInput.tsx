import * as React from 'react';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';

interface SearchInputProps {
  setSearchField: Dispatch<SetStateAction<string>>;
}

const SearchInput = (props: SearchInputProps) => {
  // Handle searching for records
  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.setSearchField(event.target.value);
  };

  return (
    <div id="inputAndDropdownContainer">
      <label htmlFor="employeeSearchInput">Search by forename</label>
      <input
        type="search"
        name="employeeSearchInput"
        placeholder="Search Employees by Forename"
        onChange={(e) => handleSearchInputChange(e)}
      />
    </div>
  );
};

export default SearchInput;
