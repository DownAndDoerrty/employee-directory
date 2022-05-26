import * as React from 'react';
import { ChangeEvent, Component } from 'react';

interface SearchInputProps {
  setSearchField: React.Dispatch<React.SetStateAction<string>>;
}

class SearchInput extends Component<SearchInputProps> {
  constructor(props: SearchInputProps | Readonly<SearchInputProps>) {
    super(props);
  }

  // Handle searching for records
  handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.props.setSearchField(e.target.value);
  };

  render() {
    return (
      <div id="inputAndDropdownContainer">
        <label htmlFor="employeeSearchInput">Search by forename</label>
        <input
          type="search"
          name="employeeSearchInput"
          placeholder="Search Employees by Forename"
          onChange={(e) => this.handleSearchInputChange(e)}
        />
      </div>
    );
  }
}

export default SearchInput;
