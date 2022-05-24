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
    this.props.setSearchField(e.target.value);
  };

  render() {
    return (
      <div>
        <input
          type="search"
          name="employeeSearchInput"
          placeholder="Search Employees"
          onChange={(e) => this.handleSearchInputChange(e)}
        />
      </div>
    );
  }
}

export default SearchInput;
