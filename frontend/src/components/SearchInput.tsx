import * as React from 'react';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';

interface SearchInputProps {
  setSearchField: Dispatch<SetStateAction<string>>;
  label: string;
  placeholder: string;
}

const SearchInput = (props: SearchInputProps) => {
  // Handle searching for records
  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.setSearchField(event.target.value);
  };

  return (
    <div id="inputAndDropdownContainer">
      <label htmlFor="searchInput">{props.label}</label>
      <input
        type="search"
        name="searchInput"
        placeholder={props.placeholder}
        onChange={(e) => handleSearchInputChange(e)}
      />
    </div>
  );
};

export default SearchInput;
